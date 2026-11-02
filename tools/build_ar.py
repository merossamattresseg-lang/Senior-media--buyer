"""Builds ar/index.html from index.html using the Arabic text in tools/ar.json.
Run from the repo root:  python3 tools/build_ar.py
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AR = json.load(open(os.path.join(ROOT, "tools", "ar.json"), encoding="utf-8"))["text"]
html = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()

def swap_inner(m):
    key = m.group(3)
    if key not in AR:
        raise SystemExit("Missing Arabic text for key: " + key)
    return m.group(1) + AR[key] + m.group(5)

html = re.sub(r'(<(\w+)\b[^>]*\bdata-i18n="([^"]+)"[^>]*>)((?:(?!<\2\b).)*?)(</\2>)', swap_inner, html, flags=re.S)
for attr in ("content", "href", "alt"):
    html = re.sub(r'(\bdata-i18n-%s="([^"]+)"[^>]*?\b%s=")[^"]*(")' % (attr, attr),
                  lambda m: m.group(1) + AR[m.group(2)] + m.group(3), html)

html = html.replace('<html lang="en" dir="ltr">', '<html lang="ar" dir="rtl">', 1)
html = re.sub(r"<!--FONTS-->.*?<!--/FONTS-->",
              '<!--FONTS--><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@800;900&family=Cairo:wght@700;800;900&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap"><!--/FONTS-->',
              html, flags=re.S)
for a in ('href="css/', 'src="images/', 'href="images/', 'src="js/'):
    html = html.replace(a, a.replace('="', '="../'))

os.makedirs(os.path.join(ROOT, "ar"), exist_ok=True)
open(os.path.join(ROOT, "ar", "index.html"), "w", encoding="utf-8").write(html)
print("ar/index.html written")
