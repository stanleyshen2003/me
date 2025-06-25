#!/bin/bash

# ✅ Get the absolute path of the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# ✅ Check if folder name is provided as an argument
if [ -z "$1" ]; then
  echo "❌ Usage: $0 <folder-name-under-script-dir>"
  echo "Renames all image files in SCRIPT_DIR/<folder> to 1.jpg, 2.jpg, etc."
  exit 1
fi

TARGET_DIR="${SCRIPT_DIR}/$1"

# ✅ Check if the target directory exists
if [ ! -d "$TARGET_DIR" ]; then
  echo "❌ Error: Directory '$TARGET_DIR' does not exist."
  exit 1
fi

cd "$TARGET_DIR" || exit 1

# ✅ Collect image files (case-insensitive)
files=($(ls -1v *.jpg *.jpeg *.png 2>/dev/null))

# ✅ Exit if no images found
if [ ${#files[@]} -eq 0 ]; then
  echo "❌ No image files (*.jpg, *.jpeg, *.png) found in '$TARGET_DIR'."
  exit 1
fi

# ✅ Rename files
i=1
for f in "${files[@]}"; do
  mv "$f" "$i.jpg"
  ((i++))
done

echo "✅ Renamed ${#files[@]} files in '$TARGET_DIR' to 1.jpg ... ${#files[@]}.jpg"
