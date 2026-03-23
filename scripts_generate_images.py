
from PIL import Image, ImageDraw, ImageFilter
import os
base = "/Users/gimseojun/raon-workspace/projects/katalyze-web/public/images"
os.makedirs(base, exist_ok=True)
items = [
    ("hero_bg_main", (2560,1440), (20,20,24), (212,175,55), "KATALYZE / DDP SEOUL"),
    ("hero_parallax_crowd", (2560,1440), (18,18,22), (180,120,40), "CROWD / GOLDEN HOUR"),
    ("zone_drop", (1600,1200), (26,24,24), (212,175,55), "THE DROP"),
    ("zone_stage", (2560,1440), (12,16,30), (230,200,100), "STAGE"),
    ("zone_lab", (1600,1200), (28,28,30), (140,120,80), "LAB"),
    ("zone_gallery", (1600,1200), (22,20,24), (180,150,100), "GALLERY"),
    ("seoul_ddp_exterior", (2560,1440), (12,18,36), (80,180,170), "DDP EXTERIOR"),
    ("b2b_lounge", (2560,1440), (24,20,18), (200,170,120), "B2B LOUNGE"),
    ("fashion_drop", (1600,1200), (20,18,20), (212,175,55), "FASHION DROP"),
    ("kbeauty_showcase", (1600,1200), (30,28,26), (230,210,160), "K-BEAUTY"),
]
for name, size, c1, c2, label in items:
    w,h=size
    img=Image.new('RGB', size, c1)
    d=ImageDraw.Draw(img)
    for i in range(h):
        t=i/max(h-1,1)
        r=int(c1[0]*(1-t)+c2[0]*t)
        g=int(c1[1]*(1-t)+c2[1]*t)
        b=int(c1[2]*(1-t)+c2[2]*t)
        d.line([(0,i),(w,i)], fill=(r,g,b))
    for n in range(20):
        x0=(n*137)%w
        y0=(n*83)%h
        x1=min(w, x0+w//4)
        y1=min(h, y0+h//6)
        d.ellipse([x0,y0,x1,y1], outline=(255,255,255,18), width=3)
    d.rectangle([0,h*0.72,w,h], fill=(13,13,13))
    d.text((w*0.05,h*0.78), label, fill=(245,242,237))
    img=img.filter(ImageFilter.GaussianBlur(radius=0.3))
    img.save(os.path.join(base, name+'.jpg'), quality=92)
    img.save(os.path.join(base, name+'.webp'), 'WEBP', quality=90)
print('generated placeholders')
