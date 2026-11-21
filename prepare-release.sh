#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

if [ ! -x "node_modules/.bin/vite" ]; then
  echo "وابستگی‌های پروژه پیدا نشدند. ابتدا npm install را اجرا کن."
  exit 2
fi

# This release helper only builds local project files; it makes no network requests.
npm run build

echo
echo "Build کامل شد. فایل‌های آماده انتشار داخل پوشه dist هستند."
