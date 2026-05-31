"""
Khagatara Upscale Service — Hugging Face Spaces
"""

import io
import os
import cv2
import numpy as np
import torch
from fastapi import FastAPI, File, Form, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from basicsr.archs.rrdbnet_arch import RRDBNet
from basicsr.utils import img2tensor, tensor2img
from facexlib.detection import init_detection_model
from facexlib.utils.face_restoration_helper import FaceRestoreHelper
from realesrgan import RealESRGANer
from torchvision.transforms.functional import normalize

app = FastAPI(title="Khagatara Upscale Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://www.khagatara.com",
        "https://khagatara.com",
        "http://localhost:3000",
    ],
    allow_methods=["POST", "GET", "HEAD"],
    allow_headers=["*"],
    expose_headers=["X-Faces-Detected", "X-Pipeline-Used"],
)

WEIGHTS_DIR = os.path.join(os.path.dirname(__file__), "weights")

_models: dict = {}
_codeformer = None
_face_detector = None

TARGET_LONG_EDGE = {
    "hd": 1920,
    "2k": 2048,
    "4k": 4096,
    "8k": 8192,
}


def get_realesrgan(scale: int) -> RealESRGANer:
    key = f"realesrgan_x{scale}"
    if key not in _models:
        weight_file = "RealESRGAN_x2plus.pth" if scale == 2 else "RealESRGAN_x4plus.pth"
        weight_path = os.path.join(WEIGHTS_DIR, weight_file)

        if not os.path.exists(weight_path):
            raise HTTPException(
                status_code=503,
                detail=f"Weight file not found: {weight_file}",
            )

        model = RRDBNet(
            num_in_ch=3, num_out_ch=3,
            num_feat=64, num_block=23, num_grow_ch=32,
            scale=scale,
        )
        _models[key] = RealESRGANer(
            scale=scale,
            model_path=weight_path,
            model=model,
            tile=400,
            tile_pad=10,
            pre_pad=0,
            half=False,
        )
    return _models[key]


def get_codeformer():
    global _codeformer
    if _codeformer is None:
        from basicsr.archs.codeformer_arch import CodeFormer

        net = CodeFormer(
            dim_embd=512,
            codebook_size=1024,
            n_head=8,
            n_layers=9,
            connect_list=["32", "64", "128", "256"],
        ).to("cpu")
        ckpt = torch.load(
            os.path.join(WEIGHTS_DIR, "codeformer.pth"),
            map_location="cpu",
        )
        net.load_state_dict(ckpt["params_ema"])
        net.eval()
        _codeformer = net
    return _codeformer


def has_faces(img_bgr: np.ndarray) -> bool:
    global _face_detector
    if _face_detector is None:
        _face_detector = init_detection_model(
            "retinaface_resnet50",
            half=False,
            device="cpu",
        )
    with torch.no_grad():
        bboxes = _face_detector.detect_faces(img_bgr, 0.97)
    return len(bboxes) > 0


def restore_faces_codeformer(img_bgr: np.ndarray, fidelity: float = 0.5) -> np.ndarray:
    helper = FaceRestoreHelper(
        upscale_factor=1,
        face_size=512,
        crop_ratio=(1, 1),
        det_model="retinaface_resnet50",
        save_ext="png",
        use_parse=True,
        device="cpu",
    )
    helper.clean_all()
    helper.read_image(img_bgr)
    helper.get_face_landmarks_5()
    helper.align_warp_face()

    net = get_codeformer()
    for face in helper.cropped_faces:
        face_t = img2tensor(face / 255.0, bgr2rgb=True, float32=True)
        normalize(face_t, [0.5, 0.5, 0.5], [0.5, 0.5, 0.5], inplace=True)
        face_t = face_t.unsqueeze(0).to("cpu")
        with torch.no_grad():
            output = net(face_t, w=fidelity, adain=True)[0]
        restored = tensor2img(output, rgb2bgr=True, min_max=(-1, 1))
        helper.add_restored_face(restored.astype("uint8"))

    helper.get_inverse_affine(None)
    return helper.paste_faces_to_input_image()


def fit_long_edge(img_bgr: np.ndarray, target_resolution: str) -> np.ndarray:
    target_long_edge = TARGET_LONG_EDGE.get(target_resolution)
    if not target_long_edge:
        return img_bgr
    h, w = img_bgr.shape[:2]
    long_edge = max(h, w)
    if long_edge == target_long_edge:
        return img_bgr
    ratio = target_long_edge / long_edge
    next_w = max(1, round(w * ratio))
    next_h = max(1, round(h * ratio))
    interpolation = cv2.INTER_AREA if ratio < 1 else cv2.INTER_LANCZOS4
    return cv2.resize(img_bgr, (next_w, next_h), interpolation=interpolation)


@app.get("/")
def root():
    return {"status": "ok", "service": "khagatara-upscale"}


@app.api_route("/health", methods=["GET", "HEAD"])
def health():
    return {"status": "ok", "service": "khagatara-upscale"}


@app.post("/upscale")
async def upscale(
    file: UploadFile = File(...),
    mode: str = Form("realesrgan_x4"),
    target_resolution: str = Form("hd"),
):
    data = await file.read()
    if len(data) > 20 * 1024 * 1024:
        raise HTTPException(status_code=413, detail="File exceeds 20 MB limit.")

    arr = np.frombuffer(data, np.uint8)
    img_bgr = cv2.imdecode(arr, cv2.IMREAD_COLOR)
    if img_bgr is None:
        raise HTTPException(status_code=400, detail="Could not decode image.")

    try:
        faces_present = has_faces(img_bgr)

        if mode == "realesrgan_x2":
            if faces_present:
                output_bgr = restore_faces_codeformer(img_bgr, fidelity=0.5)
                upscaler = get_realesrgan(2)
                output_bgr, _ = upscaler.enhance(output_bgr, outscale=2)
            else:
                upscaler = get_realesrgan(2)
                output_bgr, _ = upscaler.enhance(img_bgr, outscale=2)

        elif mode == "realesrgan_x4":
            if faces_present:
                output_bgr = restore_faces_codeformer(img_bgr, fidelity=0.5)
                upscaler = get_realesrgan(4)
                output_bgr, _ = upscaler.enhance(output_bgr, outscale=4)
            else:
                upscaler = get_realesrgan(4)
                output_bgr, _ = upscaler.enhance(img_bgr, outscale=4)

        elif mode == "swinir":
            upscaler = get_realesrgan(2)
            output_bgr, _ = upscaler.enhance(img_bgr, outscale=2)

        elif mode == "auto":
            if faces_present:
                output_bgr = restore_faces_codeformer(img_bgr, fidelity=0.5)
                upscaler = get_realesrgan(4)
                output_bgr, _ = upscaler.enhance(output_bgr, outscale=4)
            else:
                upscaler = get_realesrgan(4)
                output_bgr, _ = upscaler.enhance(img_bgr, outscale=4)

        else:
            raise HTTPException(status_code=400, detail=f"Unknown mode: {mode}")

        output_bgr = fit_long_edge(output_bgr, target_resolution.lower())

    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Upscale failed: {str(exc)}")

    success, encoded = cv2.imencode(".png", output_bgr)
    if not success:
        raise HTTPException(status_code=500, detail="Could not encode output image.")

    return StreamingResponse(
        io.BytesIO(encoded.tobytes()),
        media_type="image/png",
        headers={
            "X-Original-Mode": mode,
            "X-Target-Resolution": target_resolution,
            "X-Faces-Detected": "true" if faces_present else "false",
            "X-Pipeline-Used": "codeformer" if faces_present else "realesrgan",
        },
    )
