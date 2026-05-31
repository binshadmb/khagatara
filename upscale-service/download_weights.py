"""
Downloads RealESRGAN weights.
Called once during Docker build — weights are baked into the image.
"""
import os
import urllib.request

WEIGHTS_DIR = os.path.join(os.path.dirname(__file__), "weights")
os.makedirs(WEIGHTS_DIR, exist_ok=True)

WEIGHTS = {
    "RealESRGAN_x2plus.pth": (
        "https://github.com/xinntao/Real-ESRGAN/releases/download/"
        "v0.2.1/RealESRGAN_x2plus.pth"
    ),
    "RealESRGAN_x4plus.pth": (
        "https://github.com/xinntao/Real-ESRGAN/releases/download/"
        "v0.1.0/RealESRGAN_x4plus.pth"
    ),
}

def download(name, url):
    dest = os.path.join(WEIGHTS_DIR, name)
    if os.path.exists(dest):
        print(f"✓ Already exists: {name}")
        return
    print(f"↓ Downloading {name} ...")
    urllib.request.urlretrieve(url, dest)
    print(f"✓ Saved: {name}")

for name, url in WEIGHTS.items():
    download(name, url)

print("\nAll weights ready.")
