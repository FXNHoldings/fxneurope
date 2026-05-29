#!/usr/bin/env python3
"""Generate FXN Europe site imagery with fal.ai (FLUX dev) and save to public/img.

Usage:
    FAL_KEY=... python3 scripts/gen_images.py

Mirrors the pattern used by /opt/shopify/scripts: POST to fal.run, then
download images[0].url. Brand-aligned, editorial, on-brand colour cues
(deep ink/navy + indigo + teal accents).
"""
import json, os, sys, urllib.request, pathlib, concurrent.futures

SCRIPT_DIR = pathlib.Path(__file__).resolve().parent

# Load scripts/.env (KEY=VALUE lines) if present, without overriding real env vars.
_envfile = SCRIPT_DIR / ".env"
if _envfile.exists():
    for line in _envfile.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))

FAL_KEY = os.environ.get("FAL_KEY")
if not FAL_KEY:
    sys.exit(
        "FAL_KEY not found. Add it to /opt/fxneurope-web/scripts/.env as\n"
        "  FAL_KEY=your-key-here\n"
        "or run inline:  FAL_KEY=your-key python3 scripts/gen_images.py"
    )

OUT = pathlib.Path(__file__).resolve().parent.parent / "frontend" / "public" / "img"
OUT.mkdir(parents=True, exist_ok=True)
ENDPOINT = "https://fal.run/fal-ai/flux/dev"

COMMON = (
    "Editorial, photorealistic, ultra-detailed, crisp sharp focus, premium "
    "corporate brand photography. Cool modern colour palette of deep navy ink, "
    "electric indigo and a touch of teal accent. Clean, sophisticated, European."
)

IMAGES = [
    {
        "slug": "home",
        "image_size": "landscape_16_9",
        "prompt": (
            "Wide cinematic hero image of a sleek modern European logistics and "
            "e-commerce operation: neatly arranged parcels and shipping boxes moving "
            "through a bright minimalist fulfilment space, subtle holographic map of "
            "Europe glowing in the background, sense of scale and motion. " + COMMON
        ),
    },
    {
        "slug": "about",
        "image_size": "landscape_16_9",
        "prompt": (
            "Wide image of a calm, modern open-plan office overlooking the Tallinn "
            "old-town skyline at blue hour through floor-to-ceiling windows; a few "
            "out-of-focus professionals collaborating, warm interior light against "
            "cool evening tones. Tasteful, aspirational, not crowded. " + COMMON
        ),
    },
    {
        "slug": "services",
        "image_size": "landscape_16_9",
        "prompt": (
            "Wide abstract image representing a shared technology platform powering "
            "many brands: elegant interconnected nodes and data flows, a central "
            "product-catalogue hub branching into multiple online storefronts and a "
            "travel booking interface, glowing indigo and teal lines on deep navy. "
            "Clean, futuristic, premium. " + COMMON
        ),
    },
]


def gen(img):
    body = json.dumps({
        "prompt": img["prompt"],
        "image_size": img["image_size"],
        "num_inference_steps": 34,
        "guidance_scale": 3.8,
        "num_images": 1,
        "enable_safety_checker": True,
    }).encode()
    req = urllib.request.Request(
        ENDPOINT, data=body,
        headers={"Authorization": f"Key {FAL_KEY}", "Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=180) as r:
        data = json.load(r)
    url = data["images"][0]["url"]
    dest = OUT / f"{img['slug']}.jpg"
    with urllib.request.urlopen(url, timeout=180) as src, open(dest, "wb") as f:
        f.write(src.read())
    print(f"✓ {img['slug']} -> {dest}")
    return dest


def main():
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as ex:
        list(ex.map(gen, IMAGES))
    print("done")


if __name__ == "__main__":
    main()
