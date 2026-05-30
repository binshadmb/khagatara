"""
Khagatara Upscale Service
Run: uvicorn upscale_service:app --host 0.0.0.0 --port 8000

Requirements:
  pip install fastapi uvicorn python-multipart basicsr realesrgan
  pip install torch torchvision --index-url https://download.pytorch.org/whl/cpu

Weights (download once, place in ./weights/):
  Real-ESRGAN x2: https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.1/RealESRGAN_x2plus.pth
  Real-ESRGAN x4: https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth
  SwinIR:         https://github.com/JingyunLiang/SwinIR/releases/download/v0.0/003_realSR_BSRGAN_DFOWMFC_s64w8_SwinIR-L_x4_GAN.pth
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
from realesrgan import RealESRGANer

app = FastAPI(title="Khagatara Upscale Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://www.khagatara.com", "http://localhost:3000"],
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)

WEIGHTS_DIR = os.path.join(os.path.dirname(__file__), "weights")

# ── Model cache ──────────────────────────────────────────────────────────────
_models: dict = {}

def get_realesrgan(scale: int) -> RealESRGANer:
    key = f"realesrgan_x{scale}"
    if key not in _models:
        if scale == 2:
            weight_file = "RealESRGAN_x2plus.pth"
            num_block = 23
        else:  # 4
            weight_file = "RealESRGAN_x4plus.pth"
            num_block = 23

        weight_path = os.path.join(WEIGHTS_DIR, weight_file)
        if not os.path.exists(weight_path):
            raise HTTPException(
                status_code=503,
                detail=f"Weight file not found: {weight_file}. Download it and place in ./weights/"
            )

        model = RRDBNet(
            num_in_ch=3, num_out_ch=3,
            num_feat=64, num_block=num_block, num_grow_ch=32,
            scale=scale,
        )
        _models[key] = RealESRGANer(
            scale=scale,
            model_path=weight_path,
            model=model,
            tile=400,          # tile to avoid OOM on CPU
            tile_pad=10,
            pre_pad=0,
            half=False,        # CPU: keep float32
        )
    return _models[key]


def upscale_swinir(img_bgr: np.ndarray) -> np.ndarray:
    """
    Lightweight SwinIR fallback using OpenCV super-res.
    Replace with full SwinIR model when GPU is available.
    """
    sr = cv2.dnn_superres.DnnSuperResImpl_create()
    model_path = os.path.join(WEIGHTS_DIR, "EDSR_x4.pb")
    if os.path.exists(model_path):
        sr.readModel(model_path)
        sr.setModel("edsr", 4)
        return sr.upsample(img_bgr)
    # Pure OpenCV fallback — still much sharper than canvas stretch
    h, w = img_bgr.shape[:2]
    return cv2.resize(img_bgr, (w * 4, h * 4), interpolation=cv2.INTER_LANCZOS4)


def encode_output(img_bgr: np.ndarray, target_kb: int | None) -> tuple[bytes, str]:
    if target_kb is None:
        success, encoded = cv2.imencode(".png", img_bgr)
        if not success:
            raise HTTPException(status_code=500, detail="Could not encode output image.")
        return encoded.tobytes(), "image/png"

    target_bytes = max(20, target_kb) * 1024
    best_bytes: bytes | None = None

    for quality in range(95, 45, -5):
        success, encoded = cv2.imencode(".jpg", img_bgr, [int(cv2.IMWRITE_JPEG_QUALITY), quality])
        if not success:
            continue
        current = encoded.tobytes()
        best_bytes = current
        if len(current) <= target_bytes:
            return current, "image/jpeg"

    if best_bytes is None:
        raise HTTPException(status_code=500, detail="Could not encode output image.")
    return best_bytes, "image/jpeg"


# ── Routes ───────────────────────────────────────────────────────────────────

@app.get("/health")
def health():
    return {"status": "ok", "service": "khagatara-upscale"}


@app.post("/upscale")
async def upscale(
    file: UploadFile = File(...),
    mode: str = Form("realesrgan_x4"),   # realesrgan_x2 | realesrgan_x4 | swinir
    target_kb: int | None = Form(None),
):
    # ── Read image ────────────────────────────────────────────────────────────
    data = await file.read()
    if len(data) > 20 * 1024 * 1024:
        raise HTTPException(status_code=413, detail="File exceeds 20 MB limit.")

    arr = np.frombuffer(data, np.uint8)
    img_bgr = cv2.imdecode(arr, cv2.IMREAD_COLOR)
    if img_bgr is None:
        raise HTTPException(status_code=400, detail="Could not decode image.")

    # ── Upscale ───────────────────────────────────────────────────────────────
    try:
        if mode == "realesrgan_x2":
            upscaler = get_realesrgan(2)
            output_bgr, _ = upscaler.enhance(img_bgr, outscale=2)

        elif mode == "realesrgan_x4":
            upscaler = get_realesrgan(4)
            output_bgr, _ = upscaler.enhance(img_bgr, outscale=4)

        elif mode == "swinir":
            output_bgr = upscale_swinir(img_bgr)

        else:
            raise HTTPException(status_code=400, detail=f"Unknown mode: {mode}")

    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Upscale failed: {str(exc)}")

    # ── Encode and return ─────────────────────────────────────────────────────
    output_bytes, media_type = encode_output(output_bgr, target_kb)

    return StreamingResponse(
        io.BytesIO(output_bytes),
        media_type=media_type,
        headers={"X-Original-Mode": mode},
    )
