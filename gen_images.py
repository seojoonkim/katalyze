from google import genai
from google.genai import types
import os, base64, time

for key in ['GOOGLE_API_KEY', 'GEMINI_API_KEY']:
    os.environ.pop(key, None)

client = genai.Client(api_key="AIzaSyAt_LPQWMfR8-Sk3PnwldFTciYG4IRvqRM")
images_dir = "/Users/gimseojun/raon-workspace/projects/katalyze-web/public/images"

def gen(prompt, filename):
    out = f"{images_dir}/{filename}"
    
    # Try gemini-2.5-flash-image first (generate_content with IMAGE modality)
    gemini_models = [
        "gemini-2.5-flash-image",
        "gemini-3.1-flash-image-preview",
        "gemini-3-pro-image-preview",
    ]
    for model in gemini_models:
        try:
            response = client.models.generate_content(
                model=model,
                contents=f"Create a photorealistic high-quality image: {prompt}",
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE", "TEXT"]
                )
            )
            for part in response.candidates[0].content.parts:
                if hasattr(part, 'inline_data') and part.inline_data:
                    data = part.inline_data.data
                    if isinstance(data, str):
                        data = base64.b64decode(data)
                    if len(data) > 10000:
                        with open(out, 'wb') as f:
                            f.write(data)
                        print(f"✅ {filename}: {len(data)//1024}KB via {model}")
                        return True
            print(f"  ⚠️ no image in response ({model})")
        except Exception as e:
            err = str(e)[:150]
            print(f"  ❌ {model}: {err}")
            if "429" in err or "quota" in err.lower():
                time.sleep(10)
                continue
    
    # Fallback: imagen-4.0
    imagen_models = ["imagen-4.0-fast-generate-001", "imagen-4.0-generate-001"]
    for model in imagen_models:
        try:
            response = client.models.generate_images(
                model=model,
                prompt=f"Photorealistic high-quality: {prompt}",
                config=types.GenerateImagesConfig(
                    number_of_images=1,
                )
            )
            if response.generated_images:
                img = response.generated_images[0]
                data = img.image.image_bytes
                if isinstance(data, str):
                    data = base64.b64decode(data)
                if len(data) > 10000:
                    with open(out, 'wb') as f:
                        f.write(data)
                    print(f"✅ {filename}: {len(data)//1024}KB via {model}")
                    return True
            print(f"  ⚠️ no image from {model}")
        except Exception as e:
            err = str(e)[:150]
            print(f"  ❌ {model}: {err}")
            if "429" in err or "quota" in err.lower():
                time.sleep(10)
    
    return False

images = [
    ("about_seoul_bg.jpg", "Seoul South Korea night panorama, Han River illuminated bridges, N Seoul Tower glowing, city lights, aerial cinematic view, no text"),
    ("seoul_vibrant.jpg", "Seoul Korea vibrant nightscape, Gangnam district neon city lights, modern skyscrapers, Han River visible"),
    ("seoul_night.jpg", "Seoul Korea dramatic night aerial view, city grid lights, Han River bridges, dark dramatic sky"),
    ("ddp_night.jpg", "DDP Dongdaemun Design Plaza Seoul Korea exterior at night, Zaha Hadid futuristic curved white architecture, LED lit, no people"),
    ("venue_ddp.jpg", "Dongdaemun Design Plaza DDP Seoul Korea night, futuristic curved white building, city lights background"),
    ("about_hero.jpg", "Seoul DDP Dongdaemun Design Plaza area aerial night, Zaha Hadid architecture visible, surrounding city lights"),
    ("audience_visitors.jpg", "Excited diverse festival crowd at night, colorful neon stage lights, K-culture festival atmosphere, young people, dark"),
    ("audience_brands.jpg", "Luxury brand exhibition dark modern interior, professional people business attire, minimalist design, moody lighting"),
    ("audience_buyers.jpg", "Professional B2B networking event, business people meeting, dark sophisticated modern conference venue"),
    ("imagen_market_drop.jpg", "K-fashion clothing display dark racks, stylish Korean streetwear, editorial fashion photography, bold colors"),
    ("zone_drop.jpg", "K-fashion runway show, avant-garde Korean fashion models, dramatic studio lighting, dark background"),
    ("imagen_stage_show.jpg", "K-pop concert arena stage, colorful laser beams, performer silhouette against massive LED screen, crowd"),
    ("zone_stage.jpg", "Live concert stage performance, dramatic lighting rig, purple gold beams, atmospheric haze, crowd silhouettes"),
    ("imagen_lab_workshop.jpg", "K-beauty Korean skincare cosmetics luxury display, dark background, elegant bottles packaging, editorial"),
    ("zone_lab.jpg", "Korean beauty K-beauty product showcase, cosmetics on dark surface, sophisticated studio lighting"),
    ("imagen_gallery_installation.jpg", "Contemporary art gallery installation, dark gallery space, dramatic spotlights on sculptural artwork"),
    ("zone_gallery.jpg", "Modern art gallery, abstract sculptures, dark minimalist space, gallery visitors silhouettes"),
    ("partners_hero.jpg", "Business partnership networking summit, diverse professionals shaking hands, modern conference venue, dark sophisticated"),
    ("business_brands.jpg", "Global brand summit presentation, professional business gathering, modern venue interior, dark dramatic"),
    ("marketplace_hero.jpg", "K-beauty K-fashion market exhibition, Korean brand pop-up stores, modern venue, evening atmosphere"),
    ("marketplace_hero_v2.jpg", "Luxury Korean beauty brand showcase, elegant cosmetics displayed, dark dramatic editorial lighting"),
    ("final_cta.jpg", "Seoul Korea epic night panorama from above, city lights to horizon, Han River, dramatic clouds, cinematic"),
    ("festival_entry.jpg", "Grand festival entrance dramatic lighting, people entering large modern venue at night"),
    ("crowd.jpg", "Festival crowd at night, diverse people, colorful stage lights, energy and excitement, dark atmospheric"),
    ("concert_stage.jpg", "Concert stage performance, dramatic lighting rig, performer spotlight, crowd in darkness, live music"),
    ("performance.jpg", "K-pop performance stage, colorful LED backdrop, dancer silhouettes, dramatic lighting beams"),
]

success = 0
failed = []
for i, (filename, prompt) in enumerate(images):
    print(f"\n[{i+1}/{len(images)}] {filename}")
    if gen(prompt, filename):
        success += 1
    else:
        failed.append(filename)
    time.sleep(3)

print(f"\n=== {success}/{len(images)} generated ===")
if failed:
    print(f"Failed: {failed}")
