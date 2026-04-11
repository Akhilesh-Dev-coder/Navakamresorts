from PIL import Image, ImageDraw

def process_logo():
    img = Image.open('public/assets/woven_logo.jpeg').convert("RGBA")
    
    # We found the yellow circle is tightly between (46, 55) and (761, 773)
    # Give a tiny margin so it's a perfect square
    bbox = (44, 53, 764, 773)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    
    # Force exact square dimensions for the mask to be a perfect circle
    size = max(w, h)
    cx = (bbox[0] + bbox[2]) // 2
    cy = (bbox[1] + bbox[3]) // 2
    
    final_bbox = (
        cx - size//2,
        cy - size//2,
        cx + size//2,
        cy + size//2
    )
    
    cropped = img.crop(final_bbox)
    
    # Make a circular mask with anti-aliasing
    mask = Image.new('L', cropped.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((2, 2, cropped.size[0]-2, cropped.size[1]-2), fill=255)
    
    cropped.putalpha(mask)
    cropped.save('public/assets/woven_logo_clean.png', 'PNG')

if __name__ == "__main__":
    process_logo()
