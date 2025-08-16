for file in *.jpeg *.png *.JPG *.JPEG *.PNG; do
  [ -e "$file" ] || continue
  magick "$file" -resize 1024x683 -quality 80 "$(basename "${file%.*}").webp" && rm "$file"
done