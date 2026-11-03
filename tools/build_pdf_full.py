"""Builds the long PDF portfolio page (HTML) with every result and screenshot,
using compressed copies of the images so the final PDF stays small.
Run from the repo root:  python3 tools/build_pdf_full.py OUT_DIR
Then print OUT_DIR/portfolio-full.html to PDF at 1600x900.
"""
import json, os, re, sys, io
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = sys.argv[1]
IMG = os.path.join(OUT, "img"); os.makedirs(IMG, exist_ok=True)

js = open(os.path.join(ROOT, "js/main.js"), encoding="utf-8").read()
PROOF = json.loads(re.search(r"var PROOF=(\[.*?\]);\n", js, re.S).group(1))
RESULTS = json.loads(re.search(r"var RESULTS=(\[.*?\]);\n", js, re.S).group(1))
HIDE = json.loads(re.search(r"var HIDE=(\[.*?\]);", js).group(1))
src = open(os.path.join(ROOT, "tools/portfolio-pdf.html"), encoding="utf-8").read()
css = re.search(r"<style>(.*?)</style>", src, re.S).group(1)
pages = re.findall(r"<section class=\"page\">.*?</section>", src, re.S)

def jpg(path, width, q=72):
    name = os.path.basename(path).rsplit(".", 1)[0] + ".jpg"
    im = Image.open(os.path.join(ROOT, path)).convert("RGB")
    if im.width > width: im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    im.save(os.path.join(IMG, name), "JPEG", quality=q, optimize=True, progressive=True)
    return "img/" + name

def png_small(path, size):
    name = os.path.basename(path)
    im = Image.open(os.path.join(ROOT, path)).convert("RGBA").resize((size, size), Image.LANCZOS)
    im.save(os.path.join(IMG, name), optimize=True)
    return "img/" + name

# compressed assets
me = Image.open(os.path.join(ROOT, "images/hesham-salah.webp")).convert("RGBA").resize((640, 640), Image.LANCZOS)
me.quantize(colors=200, method=Image.Quantize.FASTOCTREE).save(os.path.join(IMG, "me.png"), optimize=True)
logos = {}
for f in os.listdir(os.path.join(ROOT, "images/brands")):
    logos["../images/brands/" + f] = png_small("images/brands/" + f, 96)
shots = {i: jpg(p["i"], 1100) for i, p in enumerate(PROOF) if i not in HIDE}

def fix(html):
    html = html.replace("../images/hesham-salah.webp", "img/me.png")
    for k, v in logos.items(): html = html.replace(k, v)
    html = re.sub(r'\.\./(images/proof/[^"]+)', lambda m: jpg(m.group(1), 1100), html)
    return html

cover, numbers, expertise, brands, cases_a, cases_b, _meta, _gt, _stores, method, about = pages

def foot(label): return '<div class="foot"><b>Hesham<em>.</em></b><span>%s</span></div>' % label

out = [cover, numbers, expertise]

# brands: cards page, then logos page
cards = re.search(r'<div class="bcards">.*?</div>\s*</div>\s*</div>\s*</div>\s*</div>', brands, re.S)
bcards = re.search(r'<div class="bcards">(.*?)\n  </div>\n  <div class="h3"', brands, re.S).group(1)
blist = re.search(r'<div class="blist">(.*?)\n  </div>', brands, re.S).group(1)
out.append('<section class="page"><div class="eyebrow">Brands</div><h2 class="title">Brands I worked on, <em>and one I built.</em></h2><div class="bcards big">%s</div>%s</section>' % (bcards, foot("Brands")))
out.append('<section class="page"><div class="eyebrow">Brands</div><h2 class="title">Part of the brands whose ads <em>I managed and grew sales for.</em></h2><div class="blist big">%s</div><p class="note">A selection of the brands I have worked with. Many other brands in Egypt, the Gulf and other markets are not listed here.</p>%s</section>' % (blist, foot("Brands")))

# one case study per page
case_html = re.findall(r'<div class="case">.*?</div></div></div>', cases_a + cases_b, re.S)
for n, c in enumerate(case_html, 1):
    out.append('<section class="page"><div class="eyebrow">Case study · %d of %d</div><div class="case one">%s</section>' % (n, len(case_html), c[len('<div class="case">'):] + foot("Case studies")))

INTRO = {
 "Meta": ("Meta Ads", "Sales and messaging campaigns for e-commerce and service brands in Egypt, the Gulf and Iraq."),
 "Google": ("Google Ads", "Search for high-intent buyers and YouTube for reach."),
 "TikTok": ("TikTok Ads", "Sales campaigns for fashion brands in Egypt."),
 "Shopify": ("Shopify stores", "Store-level results while I ran the paid side. Every order, from every channel."),
 "WooCommerce": ("WooCommerce stores", "WordPress stores for perfume and cosmetics brands."),
 "Lightfunnels": ("Lightfunnels", "A funnel store for a women's bags brand."),
 "Analytics": ("Tracking and analytics", "GA4 and Microsoft Clarity data I use to fix funnels and landing pages."),
}
def fig(x):
    return "" if x[0] == "—" else "<div><b>%s</b><span>%s</span></div>" % (x[0], x[1])
for g, (title, line) in INTRO.items():
    rs = [r for r in RESULTS if r["p"] == g]
    idx = [i for i, p in enumerate(PROOF) if p["g"] == g and i not in HIDE]
    cards_html = "".join('<div class="pc"><h3>%s</h3><p>%s</p><div class="figs">%s%s%s</div></div>' % (r["t"][0], r["w"][0], fig(r["a"]), fig(r["b"]), fig(r["c"])) for r in rs)
    body = '<div class="pgrid">%s</div>' % cards_html if rs else ""
    out.append('<section class="page"><div class="eyebrow"><span class="tagp">%s</span>Results by platform</div><h2 class="title">%s</h2><p class="lead">%s</p><div class="pfacts"><div><b>%d</b><span>screenshots</span></div>%s</div>%s%s</section>' % (g, title, line, len(idx), ('<div><b>%d</b><span>results</span></div>' % len(rs)) if rs else "", body, foot("Results by platform")))
    for k in range(0, len(idx), 2):
        figs = "".join('<figure><div class="frame"><img src="%s"></div><figcaption>%s<span>%s</span></figcaption></figure>' % (shots[i], PROOF[i]["t"], PROOF[i]["d"]) for i in idx[k:k + 2])
        out.append('<section class="page"><div class="eyebrow"><span class="tagp">%s</span>Screenshots · %d of %d</div><div class="pair">%s</div>%s</section>' % (g, k // 2 + 1, (len(idx) + 1) // 2, figs, foot(title)))

out += [method, about]

extra = """
.bcards.big{gap:20px;margin-top:10px}.bcards.big .bc{padding:30px;gap:14px}.bcards.big .bc h3{font-size:34px}.bcards.big .bc h3 img{width:60px;height:60px}.bcards.big .bc ul{font-size:18px;gap:6px}
.blist.big{grid-template-columns:repeat(4,1fr);gap:16px}.blist.big div{padding:14px 18px;font-size:20px}.blist.big img{width:56px;height:56px}
.case.one{display:grid;grid-template-columns:1.3fr 1fr;gap:0;flex:1;margin-top:8px;max-height:700px}
.case.one .shot{height:auto}.case.one .shot img{object-fit:contain;object-position:center;background:#fff}
.case.one .body{padding:40px 44px;gap:16px}.case.one h3{font-size:40px}.case.one dd{font-size:19px}.case.one .res b{font-size:46px}
.lead{font-size:22px;color:var(--soft);max-width:60ch;margin:-20px 0 30px}
.pfacts{display:flex;gap:40px;margin-bottom:30px}.pfacts b{display:block;font:900 52px/1 var(--fd);color:var(--accent-2)}.pfacts span{font-size:15px;color:var(--muted)}
.pgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.pgrid .pc{padding:20px 22px}.pgrid .pc h3{font-size:21px}.pgrid .figs b{font-size:24px}
.pair{display:grid;grid-template-columns:1fr 1fr;gap:28px;flex:1;margin-top:6px}
.pair figure{margin:0;background:var(--bg2);border-radius:22px;overflow:hidden;display:flex;flex-direction:column}
.pair .frame{flex:1;background:#fff;display:flex;align-items:center;justify-content:center;max-height:610px}
.pair img{max-width:100%;max-height:610px;object-fit:contain;display:block}
.pair:has(figure:only-child){grid-template-columns:minmax(0,900px);justify-content:center}
.pair figcaption{padding:18px 22px;font:700 20px var(--fb)}.pair figcaption span{display:block;font-weight:400;font-size:16px;color:var(--muted);margin-top:4px}
"""
html = '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Hesham Salah · Portfolio</title><style>%s%s</style></head><body>\n%s\n</body></html>' % (css, extra, "\n".join(out))
html = fix(html)
open(os.path.join(OUT, "portfolio-full.html"), "w", encoding="utf-8").write(html)
print("pages", len(out))
