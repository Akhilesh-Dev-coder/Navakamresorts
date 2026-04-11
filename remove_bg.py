from PIL import Image
import math

def remove_black_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    # Using Luma or Max(RGB) for alpha extraction on black background
    for r, g, b, a in datas:
        # Determine how bright the pixel is
        luma = max(r, g, b)
        
        # If the pixel is fully black, it's fully transparent
        if luma < 5:
            newData.append((0, 0, 0, 0))
        else:
            # We assume it's alpha blended on a black background
            # C = C_orig * alpha => C_orig = C / alpha
            # So if alpha = luma / 255.0
            alpha = luma
            # Scale color components up so they represent the original glowing color
            nr = min(255, int(r * 255 / alpha)) if alpha else 0
            ng = min(255, int(g * 255 / alpha)) if alpha else 0
            nb = min(255, int(b * 255 / alpha)) if alpha else 0
            # To preserve softness, just use gamma-like curve or direct luma
            newData.append((nr, ng, nb, alpha))

    img.putdata(newData)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    try:
        remove_black_bg("public/assets/logo.jpeg", "public/assets/logo_transparent.png")
        print("Successfully removed background!")
    except Exception as e:
        print("Error:", e)
