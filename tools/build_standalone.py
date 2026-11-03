"""Builds one self-contained HTML portfolio (no audit offer, no form) from index.html.
Run from the repo root:  python3 tools/build_standalone.py OUTPUT.html
"""
import base64, mimetypes, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "Hesham-Salah-Portfolio.html")
h = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()

def data_uri(path):
    p = os.path.join(ROOT, path)
    mt = mimetypes.guess_type(p)[0] or ("image/webp" if p.endswith(".webp") else "application/octet-stream")
    return "data:%s;base64,%s" % (mt, base64.b64encode(open(p, "rb").read()).decode())

# strip things that only make sense on the live site
h = re.sub(r"<script type=\"text/javascript\">\s*\(function\(c,l,a,r,i,t,y\).*?</script>\n?", "", h, flags=re.S)
h = re.sub(r'<link rel="(canonical|alternate)"[^>]*>\n?', "", h)
h = re.sub(r'<a class="lang"[^>]*>.*?</a>\s*', "", h, flags=re.S)
h = re.sub(r'\s*<section class="in" id="audit">.*?</section>', "", h, flags=re.S)
h = re.sub(r'\s*<dialog id="lead".*?</dialog>', "", h, flags=re.S)
h = re.sub(r'\s*<p class="micro"[^>]*>.*?</p>', "", h, flags=re.S)

# every audit button becomes a direct WhatsApp link
def to_wa(m):
    return '<a class="%s" href="#" data-wa><span>Message me on WhatsApp</span> <span class="arr" aria-hidden="true">→</span></a>' % m.group(1)
h = re.sub(r'<button type="button" class="(cta[^"]*)" data-lead><span data-i18n="cta1">.*?</span>.*?</button>', to_wa, h, flags=re.S)
h = re.sub(r'<button type="button" class="(cta[^"]*)" data-lead><span data-i18n="ofc">.*?</button>', to_wa, h, flags=re.S)
h = re.sub(r'<button type="button" class="cta sm" data-lead[^>]*>.*?</button>', '<a class="cta sm" href="#" data-wa>WhatsApp</a>', h, flags=re.S)
h = re.sub(r'<div class="mbar"><button[^>]*>.*?</button></div>', '<div class="mbar"><a class="cta" href="#" data-wa>Message me on WhatsApp</a></div>', h, flags=re.S)
h = re.sub(r'<button type="button" class="(cta|btn2)" data-lead data-plan="[^"]*"[^>]*>(.*?)</button>', r'<a class="\1" href="#" data-wa>\2</a>', h, flags=re.S)
h = h.replace('href="#audit"', 'href="#contact"')
assert "data-lead" not in h, "an audit button was not converted"

# inline stylesheet and script
css = open(os.path.join(ROOT, "css/style.css"), encoding="utf-8").read()
h = h.replace('<link rel="stylesheet" href="css/style.css">', "<style>\n" + css + "\n</style>")
js = open(os.path.join(ROOT, "js/main.js"), encoding="utf-8").read()
js = re.sub(r'"(images/[^"]+)"', lambda m: '"' + data_uri(m.group(1)) + '"', js)
h = h.replace('<script src="js/main.js" defer></script>', "<script>\n" + js.replace("</script", "<\\/script") + "\n</script>")

# inline images and the CV
h = re.sub(r'<link rel="preload" as="image"[^>]*>\n?', "", h)
h = re.sub(r'(src|href)="(images/[^"]+)"', lambda m: '%s="%s"' % (m.group(1), data_uri(m.group(2))), h)
h = re.sub(r'href="cv/Hesham-Salah-CV.pdf" target="_blank" rel="noopener"', 'href="%s" download="Hesham-Salah-CV.pdf"' % data_uri("cv/Hesham-Salah-CV.pdf"), h)

open(out, "w", encoding="utf-8").write(h)
print(out, round(len(h) / 1024), "KB")
