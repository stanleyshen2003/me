import os
from PIL import Image, ImageOps

# === CONFIGURATION ===
input_folder = '../articles/computerAssembly'           # Folder containing PNGs
output_folder = './output_webp'     # Folder to save WEBP images
max_width = 1024                    # Max width to scale to

# Create output directory if not exists
os.makedirs(output_folder, exist_ok=True)

# Process all PNG files in the input folder
for filename in os.listdir(input_folder):
    if filename.lower().endswith('.jpg') or filename.lower().endswith('.png'):
        filepath = os.path.join(input_folder, filename)
        with Image.open(filepath) as img:
            # Resize if width is greater than max_width
            img = ImageOps.exif_transpose(img)
            if img.width > max_width:
                scale_factor = max_width / img.width
                new_size = (int(img.width * scale_factor), int(img.height * scale_factor))
                img = img.resize(new_size, Image.LANCZOS)

            # Convert and save as .webp
            webp_name = os.path.splitext(filename)[0] + '.webp'
            webp_path = os.path.join(output_folder, webp_name)
            img.save(webp_path, 'WEBP', quality=80, lossless=True)

            print(f"Converted: {filename} -> {webp_name}")

print("All PNG images converted to WEBP.")
