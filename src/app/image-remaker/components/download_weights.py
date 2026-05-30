#!/usr/bin/env python3
"""
Run once to download all model weights into ./weights/
Usage: python download_weights.py
"""

import os
import urllib.request

WEIGHTS_DIR = os.path.join(os.path.dirname(__file__), "weights")
os.makedirs(WEIGHTS_DIR, exist_ok=True)

WEIGHTS = [
    (
        "RealESRGAN_x2plus.pth",
        "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.1/RealESRGAN_x2plus.pth",
    ),
    (
        "RealESRGAN_x4plus.pth",
        "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth",
    ),
]

def reporthook(block_num, block_size, total_size):
    downloaded = block_num * block_size
    if total_size > 0:
        pct = min(100, downloaded * 100 // total_size)
        print(f"\r  {pct}%", end="", flush=True)

for filename, url in WEIGHTS:
    dest = os.path.join(WEIGHTS_DIR, filename)
    if os.path.exists(dest):
        print(f"✓ {filename} already exists, skipping.")
        continue
    print(f"↓ Downloading {filename} ...")
    urllib.request.urlretrieve(url, dest, reporthook)
    print(f"\n✓ Saved to {dest}")

print("\nAll weights ready.")
