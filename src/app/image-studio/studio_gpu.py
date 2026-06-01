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
        "codeformer-pytorch>=0.1.0",
        "facexlib>=0.3.0",
        "fastapi",
        "gfpgan>=1.3.8",
        "opencv-python-headless",
        "Pillow",
        "python-multipart",
        "realesrgan>=0.3.0",
    )
)

app = modal.App("khagatara-premium", image=image)
volume = modal.Volume.from_name("khagatara-model-weights", create_if_missing=True)
MODEL_DIR = "/models"


@app.cls(gpu="T4", memory=8192, timeout=300, volumes={MODEL_DIR: volume}, min_containers=0)
class Enhancer:
    @modal.enter()
    def load_models(self):
        import torch
        from basicsr.archs.rrdbnet_arch import RRDBNet
        from codeformer.basicsr.utils.download_util import load_file_from_url
        from realesrgan import RealESRGANer

        pathlib.Path(MODEL_DIR).mkdir(parents=True, exist_ok=True)
        realesrgan_path = f"{MODEL_DIR}/RealESRGAN_x4plus.pth"

        if not os.path.exists(realesrgan_path):
            load_file_from_url(
                "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth",
                model_dir=MODEL_DIR,
            )

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
        self.device = "cuda" if torch.cuda.is_available() else "cpu"

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

        output_bgr, _ = self.upsampler.enhance(img_bgr, outscale=scale)
        _, buffer = cv2.imencode(".png", output_bgr)
        return buffer.tobytes()

    @modal.web_endpoint(method="POST", label="premium")
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

    @modal.web_endpoint(methods=["GET", "HEAD"], label="health")
    async def health(self):
        from fastapi.responses import JSONResponse

        return JSONResponse({"status": "ok"})
