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
from realesrgan import RealESRGANer

app = FastAPI(title="Khagatara Upscale Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://www.khagatara.com",
        "https://khagatara.com",
        "http://localhost:3000",
    ],
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)

WEIGHTS_DIR = os.path.join(os.path.dirname(__file__), "weights")

_models: dict = {}

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


@app.get("/health")
def health():
    return {"status": "ok", "service": "khagatara-upscale"}


@app.post("/upscale")
async def upscale(
    file: UploadFile = File(...),
    mode: str = Form("realesrgan_x4"),
    target_resolution: str = Form("4k"),
):
    data = await file.read()
    if len(data) > 20 * 1024 * 1024:
        raise HTTPException(status_code=413, detail="File exceeds 20 MB limit.")

    arr = np.frombuffer(data, np.uint8)
    img_bgr = cv2.imdecode(arr, cv2.IMREAD_COLOR)
    if img_bgr is None:
        raise HTTPException(status_code=400, detail="Could not decode image.")

    try:
        if mode == "realesrgan_x2":
            upscaler = get_realesrgan(2)
            output_bgr, _ = upscaler.enhance(img_bgr, outscale=2)
        elif mode == "realesrgan_x4":
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
        },
    )
