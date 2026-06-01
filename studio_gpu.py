import os
import pathlib

import modal

image = (
    modal.Image.debian_slim(python_version="3.10")
    .apt_install(
        "ffmpeg",
        "git",
        "libgl1",
        "libglib2.0-0",
        "libsm6",
        "libxext6",
        "libxrender-dev",
        "wget",
    )
    .pip_install(
        "torch==2.1.0+cu118",
        "torchvision==0.16.0+cu118",
        extra_index_url="https://download.pytorch.org/whl/cu118",
    )
    .pip_install(
        "basicsr>=1.4.2",
        "einops",
        "facexlib>=0.3.0",
        "fastapi",
        "gfpgan>=1.3.8",
        "lpips",
        "numpy<2",
        "opencv-python-headless",
        "Pillow",
        "python-multipart",
        "realesrgan>=0.3.0",
    )
    .run_commands("git clone --depth 1 https://github.com/sczhou/CodeFormer.git /opt/CodeFormer")
    .run_commands(
        "printf \"__version__ = '0.1.0'\\n__gitsha__ = 'modal'\\n\" > /opt/CodeFormer/basicsr/version.py"
    )
)

app = modal.App("khagatara-premium", image=image)
volume = modal.Volume.from_name("khagatara-model-weights", create_if_missing=True)
MODEL_DIR = "/models"


@app.cls(gpu="T4", memory=8192, timeout=300, volumes={MODEL_DIR: volume}, min_containers=0)
class Enhancer:
    @modal.enter()
    def load_models(self):
        import sys
        import torch

        from basicsr.archs.rrdbnet_arch import RRDBNet
        from basicsr.utils.download_util import load_file_from_url
        from realesrgan import RealESRGANer

        sys.path.insert(0, "/opt/CodeFormer")
        import basicsr

        basicsr.__path__.append("/opt/CodeFormer/basicsr")
        from basicsr.archs.codeformer_arch import CodeFormer

        pathlib.Path(MODEL_DIR).mkdir(parents=True, exist_ok=True)
        realesrgan_path = f"{MODEL_DIR}/RealESRGAN_x4plus.pth"
        codeformer_path = f"{MODEL_DIR}/codeformer.pth"

        if not os.path.exists(realesrgan_path):
            load_file_from_url(
                "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth",
                model_dir=MODEL_DIR,
            )

        if not os.path.exists(codeformer_path):
            load_file_from_url(
                "https://github.com/sczhou/CodeFormer/releases/download/v0.1.0/codeformer.pth",
                model_dir=MODEL_DIR,
            )

        self.device = "cuda" if torch.cuda.is_available() else "cpu"

        model = RRDBNet(
            num_in_ch=3,
            num_out_ch=3,
            num_feat=64,
            num_block=23,
            num_grow_ch=32,
            scale=4,
        )
        self.upsampler = RealESRGANer(
            scale=4,
            model_path=realesrgan_path,
            model=model,
            tile=512,
            tile_pad=10,
            pre_pad=0,
            half=True,
        )
        self.codeformer = CodeFormer(
            dim_embd=512,
            codebook_size=1024,
            n_head=8,
            n_layers=9,
            connect_list=["32", "64", "128", "256"],
        ).to(self.device)
        checkpoint = torch.load(codeformer_path, map_location=self.device)
        self.codeformer.load_state_dict(checkpoint["params_ema"])
        self.codeformer.eval()

    def restore_faces(self, img_bgr, fidelity: float = 0.5):
        import torch
        from basicsr.utils import img2tensor, tensor2img
        from facexlib.utils.face_restoration_helper import FaceRestoreHelper
        from torchvision.transforms.functional import normalize

        helper = FaceRestoreHelper(
            upscale_factor=1,
            face_size=512,
            crop_ratio=(1, 1),
            det_model="retinaface_resnet50",
            save_ext="png",
            use_parse=True,
            device=self.device,
        )
        helper.clean_all()
        helper.read_image(img_bgr)
        helper.get_face_landmarks_5()
        helper.align_warp_face()

        if not helper.cropped_faces:
            return img_bgr, False

        for face in helper.cropped_faces:
            face_t = img2tensor(face / 255.0, bgr2rgb=True, float32=True)
            normalize(face_t, [0.5, 0.5, 0.5], [0.5, 0.5, 0.5], inplace=True)
            face_t = face_t.unsqueeze(0).to(self.device)
            with torch.no_grad():
                output = self.codeformer(face_t, w=fidelity, adain=True)[0]
            restored = tensor2img(output, rgb2bgr=True, min_max=(-1, 1))
            helper.add_restored_face(restored.astype("uint8"))

        helper.get_inverse_affine(None)
        return helper.paste_faces_to_input_image(), True

    @modal.method()
    def enhance(self, image_bytes: bytes, scale: int = 2) -> bytes:
        import cv2
        import numpy as np

        nparr = np.frombuffer(image_bytes, np.uint8)
        img_bgr = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        if img_bgr is None:
            raise ValueError("Could not decode image")

        height, width = img_bgr.shape[:2]
        if max(height, width) > 2048:
            ratio = 2048 / max(height, width)
            img_bgr = cv2.resize(img_bgr, (int(width * ratio), int(height * ratio)))

        img_bgr, _ = self.restore_faces(img_bgr, fidelity=0.5)
        output_bgr, _ = self.upsampler.enhance(img_bgr, outscale=scale)
        _, buffer = cv2.imencode(".png", output_bgr)
        return buffer.tobytes()

    @modal.fastapi_endpoint(method="POST", label="premium")
    async def premium_endpoint(self, request):
        from fastapi.responses import JSONResponse, Response

        form = await request.form()
        image_file = form.get("image")
        if image_file is None:
            return JSONResponse({"error": "No image field"}, status_code=400)

        image_bytes = await image_file.read()
        scale = int(form.get("scale", 2))
        result = self.enhance.remote(image_bytes, scale=scale)
        return Response(content=result, media_type="image/png")

    @modal.fastapi_endpoint(method="GET", label="health")
    async def health(self):
        from fastapi.responses import JSONResponse

        return JSONResponse({"status": "ok"})
