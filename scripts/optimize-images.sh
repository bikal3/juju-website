#!/usr/bin/env bash
# Recompress public/images JPEGs with libjpeg-turbo.
#
# The site is a static export with next/image `unoptimized: true`, so whatever
# sits in public/images is exactly what guests download — there is no build-time
# optimisation step to lean on. Progressive encoding also lets photos paint
# top-down on slow mobile connections instead of after a full download.
#
# Idempotent: re-running on already-optimised files is a no-op in practice.
# Originals are the HEIC files in docs/photos/ and the committed git history.
set -euo pipefail

QUALITY="${QUALITY:-80}"
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/public/images"

command -v cjpeg >/dev/null || { echo "cjpeg not found (brew install jpeg-turbo)"; exit 1; }

total_before=0
total_after=0

for f in "$DIR"/*.jpg; do
  before=$(stat -f%z "$f")
  tmp="$(mktemp -t optimg).jpg"
  djpeg -outfile "${tmp%.jpg}.ppm" "$f"
  cjpeg -quality "$QUALITY" -progressive -optimize -outfile "$tmp" "${tmp%.jpg}.ppm"
  after=$(stat -f%z "$tmp")

  # Only adopt the result if it is actually smaller.
  if [ "$after" -lt "$before" ]; then
    mv "$tmp" "$f"
  else
    after=$before
    rm -f "$tmp"
  fi
  rm -f "${tmp%.jpg}.ppm"

  total_before=$((total_before + before))
  total_after=$((total_after + after))
  printf '%-38s %5sKB -> %5sKB\n' "$(basename "$f")" $((before/1024)) $((after/1024))
done

printf '\nTotal: %sKB -> %sKB (%s%% saved)\n' \
  $((total_before/1024)) $((total_after/1024)) \
  $(( (total_before - total_after) * 100 / total_before ))
