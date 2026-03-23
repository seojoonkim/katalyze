#!/usr/bin/env python3
from google import genai
from google.genai import types
import os

client = genai.Client(api_key='AIzaSyB9-z9gd4qw_3NP3v_Qz2qWqSKxpVoZXqs')

output_dir = '/Users/gimseojun/raon-workspace/projects/katalyze-web/public/images'
os.makedirs(output_dir, exist_ok=True)

images = [
    ('hero_main.jpg', '16:9', 'Cinematic aerial night view of a massive outdoor festival in Seoul, South Korea, 50000 people gathered at Dongdaemun Design Plaza, colorful stage lights in purple gold and pink, LED displays glowing, city skyline background, photorealistic, shot on ARRI Alexa, editorial quality, 8K, ultra detailed'),
    ('audience_visitors.jpg', '4:3', 'Young diverse fashion-forward crowd at a premium Korean culture festival, excited attendees in trendy streetwear browsing exclusive brand booths, vibrant pink and gold lighting, warm atmospheric night setting, editorial lifestyle photography, photorealistic, cinematic'),
    ('audience_brands.jpg', '4:3', 'Premium brand activation booth at a luxury Korean festival, sleek minimalist display of limited edition streetwear and beauty products under dramatic golden spotlights, dark sophisticated atmosphere, high-end retail aesthetic, photorealistic, editorial fashion photography'),
    ('audience_buyers.jpg', '4:3', 'Exclusive VIP business networking lounge at a Korean culture festival, stylish executives in designer clothing engaged in conversation, warm amber lighting, panoramic city view, luxury hospitality setting, professional editorial photography, photorealistic'),
    ('zone_drop.jpg', '4:3', 'Vibrant curated streetwear marketplace inside a modern festival venue, rows of exclusive limited edition sneakers fashion and beauty displayed on sleek pedestals, long queues of excited shoppers, neon pink and gold accent lighting, photorealistic, editorial'),
    ('zone_stage.jpg', '16:9', 'Spectacular concert stage performance at DDP Seoul, solo artist silhouetted against massive LED screen displaying abstract Korean patterns, purple and gold laser beams cutting through smoke, 5000 person crowd with hands raised, photorealistic, cinematic concert photography'),
    ('zone_lab.jpg', '4:3', 'Dynamic creative workshop space at Korean festival, young Korean and international creators collaborating on sneaker design and digital art, industrial chic interior with exposed concrete, colorful tools and materials, green teal lighting accents, photorealistic, editorial'),
    ('zone_gallery.jpg', '4:3', 'Sophisticated contemporary art installation in dark gallery space, glowing sculptural artwork with Korean traditional motifs reimagined in modern neon, visitors in upscale clothing admiring art, warm amber accent lighting, photorealistic, architectural photography'),
    ('venue_ddp.jpg', '16:9', 'Dramatic night photograph of Dongdaemun Design Plaza Seoul, Zaha Hadid architecture illuminated with custom LED projection mapping showing abstract golden patterns, Cheonggyecheon stream reflecting lights in foreground, deep blue sky with scattered clouds, long exposure, photorealistic, 8K'),
    ('lineup_artist1.jpg', '1:1', 'Silhouette of dynamic K-pop performer on stage with dramatic backlight, colorful concert lights in purple pink and gold, atmospheric smoke, crowd visible in background, editorial concert photography, photorealistic, cinematic'),
    ('business_brands.jpg', '16:9', 'Brand partnership meeting at premium Korean festival venue, creative director and marketing executive reviewing product samples and campaign materials, elegant meeting room with floor-to-ceiling windows overlooking festival grounds, warm professional lighting, photorealistic'),
    ('final_cta.jpg', '16:9', 'Euphoric crowd moment at outdoor festival in Seoul at night, thousands of people with hands raised toward a spectacular fireworks display in gold and purple above DDP, emotional peak moment, wide angle lens, photorealistic, cinematic, ARRI camera'),
]

for filename, aspect_ratio, prompt in images:
    filepath = os.path.join(output_dir, filename)
    print(f'Generating {filename}...')
    try:
        response = client.models.generate_images(
            model='imagen-4.0-generate-001',
            prompt=prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                aspect_ratio=aspect_ratio,
            )
        )
        img = response.generated_images[0]
        with open(filepath, 'wb') as f:
            f.write(img.image.image_bytes)
        print(f'  ✅ Saved {filename} ({len(img.image.image_bytes)//1024}KB)')
    except Exception as e:
        print(f'  ❌ Failed {filename}: {e}')

print('Done!')
