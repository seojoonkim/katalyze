from google import genai
from google.genai import types
from pathlib import Path
import os

API_KEY = "AIzaSyCOU-QKM4eaurfaIEmoQZGyrUrTZ3M88RI"
IMAGES_DIR = Path("/Users/gimseojun/raon-workspace/projects/katalyze-web/public/images")

client = genai.Client(api_key=API_KEY)

prompts = [
    ("hero_poster", "Ultra-dramatic Seoul DDP Dongdaemun Design Plaza aerial night view, Zaha Hadid futuristic architecture, LED light trails, Korean city skyline, cinematic wide angle, dark moody editorial photography, pink and gold accent lighting"),
    ("zone_fashion", "Seoul K-fashion runway show, avant-garde Korean fashion designers, editorial high fashion photography, dark dramatic lighting, models in bold colorful Korean contemporary fashion, DDP venue interior"),
    ("zone_beauty", "Korean beauty K-beauty luxury product launch event, sleek minimal stage design, dramatic pink and gold lighting, cosmetics and skincare premium display, editorial commercial photography"),
    ("zone_music", "Korean artist live performance concert stage, massive LED screen backdrop, dramatic stage lighting pink gold white beams, crowd silhouettes, Seoul festival atmosphere"),
    ("audience_visitors", "Diverse global crowd at modern Korean festival, excited young people from different countries, neon lights, DDP venue, editorial documentary style photography")
]

for filename, prompt in prompts:
    filepath = IMAGES_DIR / f"{filename}.jpg"
    print(f"Generating {filename}...")
    try:
        response = client.models.generate_images(
            model="imagen-4.0-generate-001",
            prompt=prompt,
            config=types.GenerateImagesConfig(number_of_images=1, aspect_ratio="16:9")
        )
        if getattr(response, 'generated_images', None):
            with open(filepath, "wb") as f:
                f.write(response.generated_images[0].image.image_bytes)
            size = os.path.getsize(filepath)
            print(f"✅ {filename}.jpg ({size//1024}KB) via imagen")
            continue
        print(f"❌ No image for {filename} via imagen")
    except Exception as e:
        print(f"❌ {filename} imagen failed: {e}")

    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash-exp",
            contents=prompt,
            config=types.GenerateContentConfig(response_modalities=["IMAGE", "TEXT"])
        )
        saved = False
        for cand in getattr(response, 'candidates', []) or []:
            for part in getattr(getattr(cand, 'content', None), 'parts', []) or []:
                inline = getattr(part, 'inline_data', None)
                if inline and getattr(inline, 'data', None):
                    with open(filepath, "wb") as f:
                        f.write(inline.data)
                    size = os.path.getsize(filepath)
                    print(f"✅ {filename}.jpg ({size//1024}KB) via flash")
                    saved = True
                    break
            if saved:
                break
        if not saved:
            print(f"❌ No image for {filename} via flash")
    except Exception as e2:
        print(f"❌ {filename} flash failed: {e2}")
