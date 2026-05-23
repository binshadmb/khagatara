"""
Khagatara ImageBooth Downloader
================================
Downloads astrology/cosmic image assets from free sources
(Unsplash, Pixabay, NASA, SVG Repo) into organized folders.

Usage:
    pip install requests
    python download_imagebooth.py

All images are free for commercial use.
Set your Unsplash Access Key below (free at unsplash.com/developers).
"""

import os
import time
import requests
from pathlib import Path

# ── CONFIG ────────────────────────────────────────────────────────────────────
UNSPLASH_ACCESS_KEY = "YOUR_UNSPLASH_ACCESS_KEY"   # get free at unsplash.com/developers
OUTPUT_DIR = Path("imagebooth")
DELAY = 1.2   # seconds between requests — be polite to APIs
# ──────────────────────────────────────────────────────────────────────────────

HEADERS = {"User-Agent": "KhagataraImageBooth/1.0"}

FOLDERS = {
    "01_zodiac_signs":       ["aries zodiac art", "taurus zodiac", "gemini zodiac", "cancer zodiac", "leo lion zodiac", "virgo zodiac", "libra zodiac", "scorpio zodiac symbol", "sagittarius zodiac", "capricorn zodiac", "aquarius zodiac", "pisces constellation"],
    "02_planets":            ["saturn planet", "jupiter planet", "mars planet", "venus planet", "mercury planet", "moon crescent", "sun radiant", "rahu shadow planet", "ketu south node"],
    "03_gemstones":          ["ruby gemstone", "blue sapphire stone", "amethyst crystal", "pearl macro", "emerald gemstone", "yellow sapphire", "red coral stone", "hessonite garnet", "cat eye gemstone"],
    "04_galaxies_nebulae":   ["galaxy background", "nebula space", "milky way", "cosmic particles", "astronomy wallpaper", "deep space stars", "stardust"],
    "05_moon":               ["moon phases", "full moon cinematic", "moon portrait", "crescent moon", "lunar eclipse", "moon surface nasa"],
    "06_backgrounds":        ["black marble texture", "gold dust texture", "luxury black gold background", "dark celestial background", "black starry background", "cosmic geometry"],
    "07_constellations":     ["constellation map", "star map night sky", "orion constellation", "celestial sphere", "zodiac wheel", "astrology chart"],
    "08_flowers_nature":     ["lavender flower", "orchid black background", "lotus flower", "jasmine flower", "rose dark background", "marigold flower"],
    "09_portraits_human":    ["silhouette under stars", "woman starry sky", "meditation portrait", "spiritual person cosmos", "person moonlight"],
    "10_nakshatras":         ["ashwini stars", "rohini star", "magha nakshatra", "chitra star", "jyeshtha nakshatra", "revati star nakshatra"],
    "11_elements_symbols":   ["sacred geometry", "mandala gold", "om symbol", "lotus mandala", "vedic symbol", "celestial geometry", "golden ratio"],
    "12_textures_overlays":  ["black texture grain", "dark paper texture", "gold foil texture", "night sky texture", "subtle dark pattern", "cosmic dust overlay"],
    "13_eclipse_phenomena":  ["solar eclipse", "lunar eclipse ring", "eclipse corona", "blood moon", "eclipse silhouette"],
    "14_svg_icons":          [],  # SVG Repo downloads — handled separately below
    "15_nasa_official":      [],  # NASA API downloads — handled separately below
}

# SVG Repo direct CDN links (public domain)
SVG_ASSETS = {
    "14_svg_icons/leo.svg":           "https://www.svgrepo.com/download/13637/leo.svg",
    "14_svg_icons/gemini.svg":        "https://www.svgrepo.com/download/13630/gemini.svg",
    "14_svg_icons/scorpio.svg":       "https://www.svgrepo.com/download/13639/scorpio.svg",
    "14_svg_icons/pisces.svg":        "https://www.svgrepo.com/download/13636/pisces.svg",
    "14_svg_icons/aries.svg":         "https://www.svgrepo.com/download/13626/aries.svg",
    "14_svg_icons/taurus.svg":        "https://www.svgrepo.com/download/13640/taurus.svg",
    "14_svg_icons/virgo.svg":         "https://www.svgrepo.com/download/13641/virgo.svg",
    "14_svg_icons/libra.svg":         "https://www.svgrepo.com/download/13633/libra.svg",
    "14_svg_icons/aquarius.svg":      "https://www.svgrepo.com/download/13625/aquarius.svg",
    "14_svg_icons/capricorn.svg":     "https://www.svgrepo.com/download/13629/capricorn.svg",
    "14_svg_icons/sagittarius.svg":   "https://www.svgrepo.com/download/13638/sagittarius.svg",
    "14_svg_icons/cancer.svg":        "https://www.svgrepo.com/download/13628/cancer.svg",
    "14_svg_icons/star.svg":          "https://www.svgrepo.com/download/13735/star.svg",
    "14_svg_icons/moon.svg":          "https://www.svgrepo.com/download/80279/moon.svg",
    "14_svg_icons/sun.svg":           "https://www.svgrepo.com/download/13760/sun.svg",
}

# NASA public domain images (direct CDN)
NASA_ASSETS = {
    "15_nasa_official/saturn.jpg":    "https://images-assets.nasa.gov/image/PIA06193/PIA06193~orig.jpg",
    "15_nasa_official/jupiter.jpg":   "https://images-assets.nasa.gov/image/PIA22946/PIA22946~orig.jpg",
    "15_nasa_official/moon.jpg":      "https://images-assets.nasa.gov/image/as11-40-5931/as11-40-5931~orig.jpg",
    "15_nasa_official/nebula.jpg":    "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001465/GSFC_20171208_Archive_e001465~orig.jpg",
    "15_nasa_official/galaxy.jpg":    "https://images-assets.nasa.gov/image/PIA12348/PIA12348~orig.jpg",
    "15_nasa_official/eclipse.jpg":   "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000700/GSFC_20171208_Archive_e000700~orig.jpg",
    "15_nasa_official/mars.jpg":      "https://images-assets.nasa.gov/image/PIA00407/PIA00407~orig.jpg",
    "15_nasa_official/milkyway.jpg":  "https://images-assets.nasa.gov/image/PIA15416/PIA15416~orig.jpg",
}


def make_dirs():
    for folder in FOLDERS:
        (OUTPUT_DIR / folder).mkdir(parents=True, exist_ok=True)
    print(f"✓ Created {len(FOLDERS)} folders in {OUTPUT_DIR}/")


def download_file(url: str, dest: Path, label: str = "") -> bool:
    try:
        r = requests.get(url, headers=HEADERS, timeout=30, stream=True)
        r.raise_for_status()
        dest.parent.mkdir(parents=True, exist_ok=True)
        with open(dest, "wb") as f:
            for chunk in r.iter_content(8192):
                f.write(chunk)
        size_kb = dest.stat().st_size // 1024
        print(f"  ✓ {label or dest.name} ({size_kb}KB)")
        return True
    except Exception as e:
        print(f"  ✗ {label or dest.name} — {e}")
        return False


def unsplash_download(query: str, folder: str, index: int):
    """Download one image from Unsplash for the given query."""
    if UNSPLASH_ACCESS_KEY == "YOUR_UNSPLASH_ACCESS_KEY":
        return  # skip if not configured

    url = "https://api.unsplash.com/photos/random"
    params = {"query": query, "orientation": "landscape", "content_filter": "high"}
    headers = {**HEADERS, "Authorization": f"Client-ID {UNSPLASH_ACCESS_KEY}"}

    try:
        r = requests.get(url, headers=headers, params=params, timeout=15)
        r.raise_for_status()
        data = r.json()
        img_url = data["urls"]["regular"]  # 1080px wide
        slug = query.replace(" ", "_")[:30]
        dest = OUTPUT_DIR / folder / f"{index:02d}_{slug}.jpg"
        download_file(img_url, dest, query)
        time.sleep(DELAY)
    except Exception as e:
        print(f"  ✗ Unsplash [{query}] — {e}")


def pixabay_download(query: str, folder: str, index: int):
    """Download one image from Pixabay (no key needed for basic use)."""
    url = "https://pixabay.com/api/"
    params = {
        "key": "YOUR_PIXABAY_API_KEY",  # free at pixabay.com/api/docs
        "q": query,
        "image_type": "photo",
        "per_page": 3,
        "safesearch": "true",
    }
    # Pixabay fallback: use their public search page URL for direct hotlink
    # (replace with your API key for proper usage)
    try:
        r = requests.get(url, params=params, headers=HEADERS, timeout=15)
        if r.status_code == 200:
            hits = r.json().get("hits", [])
            if hits:
                img_url = hits[0]["largeImageURL"]
                slug = query.replace(" ", "_")[:30]
                dest = OUTPUT_DIR / folder / f"{index:02d}_{slug}.jpg"
                download_file(img_url, dest, query)
                time.sleep(DELAY)
    except Exception as e:
        print(f"  ✗ Pixabay [{query}] — {e}")


def download_svgs():
    print("\n── SVG Icons (SVG Repo) ──────────────────────────")
    for rel_path, url in SVG_ASSETS.items():
        dest = OUTPUT_DIR / rel_path
        download_file(url, dest, rel_path.split("/")[-1])
        time.sleep(0.5)


def download_nasa():
    print("\n── NASA Public Domain Images ─────────────────────")
    for rel_path, url in NASA_ASSETS.items():
        dest = OUTPUT_DIR / rel_path
        download_file(url, dest, rel_path.split("/")[-1])
        time.sleep(DELAY)


def main():
    print("=" * 55)
    print("  Khagatara ImageBooth Downloader")
    print("=" * 55)

    make_dirs()

    # NASA — always works, no key needed
    download_nasa()

    # SVG icons — always works, no key needed
    download_svgs()

    # Unsplash — needs free API key
    if UNSPLASH_ACCESS_KEY != "YOUR_UNSPLASH_ACCESS_KEY":
        print("\n── Unsplash Photos ───────────────────────────────")
        for folder, queries in FOLDERS.items():
            if not queries:
                continue
            print(f"\n  [{folder}]")
            for i, query in enumerate(queries):
                unsplash_download(query, folder, i)
    else:
        print("\n⚠  Unsplash skipped — add your free API key at unsplash.com/developers")
        print("   Set UNSPLASH_ACCESS_KEY at the top of this file.")

    # Summary
    total = sum(1 for _ in OUTPUT_DIR.rglob("*") if _.is_file())
    print(f"\n{'='*55}")
    print(f"  Done. {total} files saved to ./{OUTPUT_DIR}/")
    print(f"{'='*55}")
    print("\nFolder layout:")
    for folder in sorted(OUTPUT_DIR.iterdir()):
        count = len(list(folder.glob("*")))
        print(f"  {folder.name}/  ({count} files)")


if __name__ == "__main__":
    main()
