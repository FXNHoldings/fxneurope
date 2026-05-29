#!/usr/bin/env bash
# Build the static export and publish it to the nginx web root.
# Re-run after any content/code change.
#
# Serving model: static files in /var/www/html/fxneurope.eu, served
# directly by nginx. No long-running Node container — the container
# image is used only as a build sandbox here.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
cd "$HERE"

WEBROOT="/var/www/html/fxneurope.eu"

echo "→ Ensuring deps (incl. dev) are installed in the build sandbox"
docker compose run --rm -e NODE_ENV=development app sh -c "npm install --include=dev"

echo "→ Generating pretty sitemap.xml"
node scripts/gen_sitemap.mjs

echo "→ Static export (next build → frontend/out)"
docker compose run --rm -e NODE_ENV=production app sh -c "npx next build"

echo "→ Publishing to ${WEBROOT}"
rsync -a --delete frontend/out/ "${WEBROOT}/"
chown -R www-data:www-data "${WEBROOT}"

echo
echo "→ Smoke tests (via nginx, Host header)"
for p in "/" "/about/" "/services/" "/contact/"; do
  printf "  %-12s %s\n" "$p" \
    "$(curl -sS -o /dev/null -w 'HTTP %{http_code}' -H 'Host: fxneurope.eu' "http://127.0.0.1$p")"
done
echo
echo "✓ Published to ${WEBROOT}"
