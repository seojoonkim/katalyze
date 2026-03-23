from google import genai
from google.genai import types
from pathlib import Path

API_KEY = 'AIzaSyB9-z9gd4qw_3NP3v_Qz2qWqSKxpVoZXqs'
OUT = Path('/Users/gimseojun/raon-workspace/projects/katalyze-web/public/images')
OUT.mkdir(parents=True, exist_ok=True)

client = genai.Client(api_key=API_KEY)

prompts = [
    ('imagen_hero_festival.jpg', 'Ultra cinematic night festival in Seoul at a futuristic design plaza, massive crowd, concert lights, gold and magenta lighting, premium global culture festival, realistic photography, wide establishing shot, energetic, luxurious, 16:9'),
    ('imagen_ddp_night.jpg', 'Futuristic Dongdaemun Design Plaza at night during a major cultural festival, glowing architecture, stylish crowd, Seoul skyline mood, premium event photography, realistic, dramatic lighting, 16:9'),
    ('imagen_market_drop.jpg', 'High-end Korean fashion and beauty marketplace festival booth scene, colorful products, premium retail activation, stylish young crowd, pink and gold lighting, realistic editorial event photography, 16:9'),
    ('imagen_stage_show.jpg', 'Large-scale live music performance with dancers and LED stage at a Seoul culture festival, purple lighting, energetic audience, realistic concert photography, 16:9'),
    ('imagen_lab_workshop.jpg', 'Creative workshop and founder talk at premium Korean innovation festival, stylish attendees, green accent lighting, design-forward space, realistic event photography, 16:9'),
    ('imagen_gallery_installation.jpg', 'Immersive contemporary art gallery installation inside a premium festival, golden lighting, elegant visitors, Korean cultural aesthetic, realistic photography, 16:9'),
    ('imagen_brand_lounge.jpg', 'Luxury partner lounge at a global culture and business festival in Seoul, gold ambient lighting, networking guests, premium hospitality, realistic photography, 16:9'),
    ('imagen_buyer_networking.jpg', 'Business networking scene at premium Korean culture commerce conference, international buyers meeting founders, cyan accent lighting, elevated hospitality, realistic photography, 16:9'),
    ('imagen_creator_portrait.jpg', 'Stylish Korean creator speaking on stage at premium festival, fashion-forward audience, colorful spotlighting, realistic editorial event photography, 16:9'),
    ('imagen_final_cta.jpg', 'Explosive celebratory Seoul festival finale with confetti, warm gold and orange light, premium crowd energy, global event atmosphere, realistic photography, 16:9'),
]

for filename, prompt in prompts:
    print(f'Generating {filename}...')
    response = client.models.generate_images(
        model='imagen-4.0-generate-001',
        prompt=prompt,
        config=types.GenerateImagesConfig(
            number_of_images=1,
            aspect_ratio='16:9',
        )
    )
    img = response.generated_images[0]
    path = OUT / filename
    with open(path, 'wb') as f:
        f.write(img.image.image_bytes)
    print(f'Saved {path}')
