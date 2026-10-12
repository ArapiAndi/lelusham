import os,sys
# Rigenera le 5 pagine HTML. Eseguire dalla root del progetto: python3 docs/build-pages.py
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)),".."))
HEAD = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="https://lelusham.com/{file}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="LELUSHAM">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="https://lelusham.com/{file}">
<meta property="og:image" content="https://lelusham.com/assets/img/og.jpg">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#EDE8E1">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;600;700&display=swap">
<link rel="stylesheet" href="assets/css/style.css">
{extra}
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <a class="wordmark" href="index.html" aria-label="LELUSHAM — Home"><svg viewBox="0 0 520 90" aria-hidden="true"><text x="0" y="78" font-family="'Bebas Neue','Arial Narrow',Impact,sans-serif" font-size="96" letter-spacing="6" fill="currentColor">LELUSHAM</text></svg></a>
  <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="site-nav"><span class="label">Menu</span><span class="bars" aria-hidden="true"></span></button>
</header>
<nav class="site-nav" id="site-nav" aria-label="Main">
  <ol>
    <li><a href="index.html">Home <small>01</small></a></li>
    <li><a href="social-kit.html">Social Kit <small>02</small></a></li>
    <li><a href="about.html">About <small>03</small></a></li>
    <li><a href="connect.html">Connect <small>04</small></a></li>
    <li><a href="brand.html">Brand <small>05</small></a></li>
  </ol>
  <div class="nav-foot">
    <a href="https://www.instagram.com/lelusham/" target="_blank" rel="noopener" data-ig>Instagram · @lelusham</a>
    <span>Milan, Italy</span>
  </div>
</nav>
<main id="main">
"""
FOOT = """</main>
<footer class="site-footer">
  <span>© <span data-year></span> LELUSHAM · Milan</span>
  <nav aria-label="Footer">
    <a href="social-kit.html">Social Kit</a>
    <a href="about.html">About</a>
    <a href="connect.html">Connect</a>
    <a href="https://www.instagram.com/lelusham/" target="_blank" rel="noopener" data-ig>Instagram</a>
  </nav>
</footer>
<script src="assets/js/content.js"></script>
{scripts}
</body>
</html>
"""
def page(file, title, desc, body, scripts='<script src="assets/js/main.js"></script>', extra=""):
    open(file,"w").write(HEAD.format(title=title,desc=desc,file=file if file!="index.html" else "",extra=extra)+body+FOOT.format(scripts=scripts))

SVG_PREV='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>'
SVG_NEXT='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>'
SVG_PAUSE='<svg class="ico-pause" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>'
SVG_PLAY='<svg class="ico-play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5l12 7-12 7z"/></svg>'

# ---------------- HOME ----------------
page("index.html","LELUSHAM — Fashion & lifestyle, Milan","Lelia M (@lelusham): fashion and lifestyle reels from Milan. Explore the Social Kit, the highlights and how to get in touch.",f"""
<section class="hero" data-slider>
  <div class="slides"></div>
  <p class="visually-hidden" aria-live="polite" data-live></p>
  <div class="slider-ui">
    <div class="counter" aria-hidden="true">01 <span>/ 05</span></div>
    <div class="dots" role="tablist" aria-label="Slides"></div>
    <div class="slider-btns">
      <button class="ctrl" type="button" data-toggle-play aria-pressed="false" aria-label="Metti in pausa autoplay">{SVG_PAUSE}{SVG_PLAY}</button>
      <button class="ctrl" type="button" data-prev aria-label="Slide precedente">{SVG_PREV}</button>
      <button class="ctrl" type="button" data-next aria-label="Slide successiva">{SVG_NEXT}</button>
    </div>
  </div>
</section>

<section class="section intro">
  <p class="lead fade-up">Lelia M is a fashion &amp; lifestyle creator based in Milan. Her reels are short, candid and shot in daylight: try-ons in boutiques, fashion week from the inside, the city as a set.</p>
  <dl class="meta fade-up">
    <div><dt>Handle</dt><dd><a class="link" href="https://www.instagram.com/lelusham/" target="_blank" rel="noopener" data-ig>@lelusham</a></dd></div>
    <div><dt>Based in</dt><dd>Milan, Italy</dd></div>
    <div><dt>Content</dt><dd>Fashion &amp; lifestyle</dd></div>
    <div><dt>Collab</dt><dd><a class="link" data-email href="#">leliamoroz.pr@gmail.com</a></dd></div>
  </dl>
</section>

<section class="section" aria-labelledby="kit-h">
  <div class="section-head">
    <h2 id="kit-h" class="section-title display fade-up">Social <span class="serif-i">Kit</span></h2>
    <a class="btn btn-ghost fade-up" href="social-kit.html">View all</a>
  </div>
  <div class="grid staggered" data-kit-preview></div>
</section>

<section class="cta-band">
  <h2 class="display">Let's <span class="serif-i">work</span> together</h2>
  <a class="btn btn-primary" href="connect.html">Connect</a>
</section>
""", scripts='<script src="assets/js/slider.js"></script>\n<script src="assets/js/main.js"></script>',
extra='<link rel="preload" as="image" href="assets/img/reels/attico-croc-bag.jpg" fetchpriority="high">\n<script type="application/ld+json">{"@context":"https://schema.org","@type":"Person","name":"Lelia M","alternateName":"LELUSHAM","url":"https://lelusham.com/","sameAs":["https://www.instagram.com/lelusham/"],"email":"mailto:leliamoroz.pr@gmail.com","address":{"@type":"PostalAddress","addressLocality":"Milan","addressCountry":"IT"},"jobTitle":"Fashion & lifestyle creator"}</script>')

# ---------------- SOCIAL KIT ----------------
page("social-kit.html","Social Kit — LELUSHAM","The LELUSHAM Social Kit: reels organised by try-on & boutique, street style, events & travel. Every item links to the original Instagram reel.",f"""
<section class="page-hero">
  <p class="eyebrow">02 — Social Kit</p>
  <h1 class="display">Social <span class="serif-i" style="color:var(--violet)">Kit</span></h1>
  <p class="lead">A curated hub of reels. Pick a category, open a piece, jump to the original on Instagram.</p>
</section>
<section class="section" style="padding-top:0" aria-label="Gallery">
  <div class="filters" data-kit-filters role="group" aria-label="Filter by category"></div>
  <p class="eyebrow" style="margin-bottom:1.5rem"><span data-kit-count>8 reels</span></p>
  <div class="grid staggered" data-kit-grid></div>
</section>
<dialog class="detail" data-detail aria-label="Reel detail">
  <div class="detail-inner">
    <div class="detail-media"><img data-d-img src="" alt="" width="360" height="640"></div>
    <div class="detail-body">
      <p class="eyebrow" data-d-eyebrow></p>
      <h2 class="display" data-d-title></h2>
      <p class="caption" data-d-caption></p>
      <a class="btn btn-primary" data-d-link href="#" target="_blank" rel="noopener">Watch on Instagram</a>
      <div class="detail-nav">
        <button class="ctrl" type="button" data-d-prev aria-label="Previous">{SVG_PREV}</button>
        <button class="ctrl" type="button" data-d-next aria-label="Next">{SVG_NEXT}</button>
        <span class="eyebrow" style="align-self:center;margin-left:.6rem" data-d-counter></span>
      </div>
    </div>
  </div>
  <button class="detail-close" type="button" data-d-close aria-label="Close"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
</dialog>
<section class="cta-band">
  <h2 class="display">Approved <span class="serif-i">assets</span></h2>
  <a class="btn btn-primary" href="brand.html">Brand library</a>
</section>
""")

# ---------------- ABOUT ----------------
page("about.html","About — LELUSHAM","Who is behind @lelusham: Lelia M, fashion & lifestyle creator in Milan. The tone, the visual language, the content.","""
<section class="page-hero">
  <p class="eyebrow">03 — About</p>
  <h1 class="display">Full-time <span class="serif-i" style="color:var(--magenta)">diva</span></h1>
  <p class="lead">Three words from her bio. They set the tone for everything that follows.</p>
</section>

<section class="section editorial">
  <div class="ed-text fade-up">
    <h2 class="display">Lelia M, <span class="serif-i">Milano</span></h2>
    <p>Lelia M publishes as <a class="link" href="https://www.instagram.com/lelusham/" target="_blank" rel="noopener" data-ig>@lelusham</a>, a fashion &amp; lifestyle account based in Milan. The feed is built on short-form video: outfit try-ons in boutiques, unboxings, fashion week moments and walks through the city.</p>
    <p>The captions are brief and bilingual, Italian and English, often a single question thrown to the audience: <em>Which bag? Is it better?</em></p>
  </div>
  <figure class="ed-figure fade-up"><img src="assets/img/reels/marble-sunglasses.jpg" alt="Lelia seen from above wearing white sunglasses against a marble wall in Milan" width="360" height="640" loading="lazy"></figure>
</section>

<section class="statement">
  <p class="fade-up">Stone, marble and daylight. The city is the set, the <em>outfit</em> is the story.</p>
</section>

<section class="section editorial flip">
  <div class="ed-text fade-up">
    <h2 class="display">The visual <span class="serif-i">language</span></h2>
    <p>Vertical video, natural light, mostly handheld. The backdrops are Milanese: travertine steps, marble facades, boutique interiors. Against that neutral base, colour arrives through the clothes: a violet dress, a blue croc bag, an orange knit.</p>
    <p>Text overlays are big, bold and uppercase. This site borrows that voice for its headlines and keeps the stone palette as the backdrop.</p>
  </div>
  <figure class="ed-figure fade-up"><img src="assets/img/reels/attico-passeggiata.jpg" alt="Lelia in a long violet dress in a boutique lined with handbag shelves" width="360" height="640" loading="lazy"></figure>
</section>

<section class="cta-band">
  <h2 class="display">See the <span class="serif-i">reels</span></h2>
  <a class="btn btn-primary" href="social-kit.html">Social Kit</a>
</section>
""")

# ---------------- CONNECT ----------------
page("connect.html","Connect — LELUSHAM","Get in touch with Lelia M (@lelusham) for collaborations: email and Instagram.","""
<section class="page-hero" style="padding-bottom:0">
  <p class="eyebrow">04 — Connect</p>
</section>
<section class="section connect" style="padding-top:1rem">
  <div class="c-main">
    <h1 class="display fade-up">Let's <span class="serif-i" style="color:var(--magenta)">talk</span></h1>
    <p class="lead fade-up">For collaborations, boutique visits and fashion week coverage.</p>
    <p class="fade-up" style="margin-top:2.5rem"><a class="big-link" data-email href="#">leliamoroz.pr@gmail.com</a></p>
    <p class="fade-up"><a class="big-link" href="https://www.instagram.com/lelusham/" target="_blank" rel="noopener" data-ig>Instagram → @lelusham</a></p>
  </div>
  <aside class="c-side fade-up">
    <dl>
      <dt class="eyebrow">Based in</dt><dd>Milan, Italy</dd>
      <dt class="eyebrow">Content</dt><dd>Fashion &amp; lifestyle<br>Reels · try-ons · events</dd>
      <dt class="eyebrow">Collab</dt><dd><a class="link" data-email data-keep href="#">Write an email</a></dd>
    </dl>
  </aside>
</section>
""")

# ---------------- BRAND ----------------
page("brand.html","Brand library — LELUSHAM","Approved LELUSHAM brand materials: wordmark, colour palette, typography and imagery guidelines.","""
<section class="page-hero">
  <p class="eyebrow">05 — Brand library</p>
  <h1 class="display">Brand <span class="serif-i" style="color:var(--violet)">kit</span></h1>
  <p class="lead">Wordmark, palette and type. Everything derived from the reels, nothing invented.</p>
</section>

<section class="section" style="padding-top:0" aria-labelledby="h-logo">
  <h2 id="h-logo" class="eyebrow" style="margin-bottom:1.2rem">Wordmark · placeholder until the official logo is supplied</h2>
  <div class="grid" style="grid-template-columns:1fr 1fr;gap:12px">
    <div class="logo-box"><svg viewBox="0 0 520 90" role="img" aria-label="LELUSHAM wordmark, dark on stone"><text x="0" y="78" font-family="'Bebas Neue','Arial Narrow',Impact,sans-serif" font-size="96" letter-spacing="6" fill="currentColor">LELUSHAM</text></svg></div>
    <div class="logo-box dark"><svg viewBox="0 0 520 90" role="img" aria-label="LELUSHAM wordmark, stone on dark"><text x="0" y="78" font-family="'Bebas Neue','Arial Narrow',Impact,sans-serif" font-size="96" letter-spacing="6" fill="currentColor">LELUSHAM</text></svg></div>
  </div>
</section>

<section class="section" style="padding-top:0" aria-labelledby="h-col">
  <h2 id="h-col" class="eyebrow" style="margin-bottom:1.2rem">Colour palette</h2>
  <div class="swatches">
    <div class="swatch" style="background:#EDE8E1"><strong>Stone</strong><code>#EDE8E1</code><small>Background</small></div>
    <div class="swatch" style="background:#F7F4EF"><strong>Ivory</strong><code>#F7F4EF</code><small>Surfaces</small></div>
    <div class="swatch" style="background:#C9C4BC"><strong>Marble</strong><code>#C9C4BC</code><small>Lines, borders</small></div>
    <div class="swatch" style="background:#8A7F72;color:#fff"><strong>Taupe</strong><code>#8A7F72</code><small>Secondary text</small></div>
    <div class="swatch" style="background:#1E1C1A;color:#EDE8E1"><strong>Ink</strong><code>#1E1C1A</code><small>Text, dark surfaces</small></div>
    <div class="swatch" style="background:#E8307F;color:#fff"><strong>Magenta</strong><code>#E8307F</code><small>Primary accent, hover</small></div>
    <div class="swatch" style="background:#5E2B7A;color:#fff"><strong>Violet</strong><code>#5E2B7A</code><small>Secondary accent</small></div>
  </div>
</section>

<section class="section" style="padding-top:0" aria-labelledby="h-type">
  <h2 id="h-type" class="eyebrow" style="margin-bottom:1.2rem">Typography</h2>
  <div class="type-specimen">
    <div><span class="eyebrow">Display · Bebas Neue</span><p class="display spec-display">Full-time diva</p></div>
    <div><span class="eyebrow">Accent · Instrument Serif Italic</span><p class="serif-i spec-serif">Which Passeggiata bag?</p></div>
    <div><span class="eyebrow">Body · Manrope 400/600/700</span><p>Short, candid captions in Italian and English. Body text stays at 16–18px with generous line height; labels are uppercase, letter-spaced, 11–12px.</p></div>
  </div>
</section>

<section class="section" style="padding-top:0" aria-labelledby="h-assets">
  <h2 id="h-assets" class="eyebrow" style="margin-bottom:1.2rem">Downloadable assets</h2>
  <ul class="asset-list">
    <li><div>Wordmark SVG<small>Vector text, needs Bebas Neue installed · placeholder</small></div><a class="btn btn-ghost" href="assets/img/lelusham-wordmark.svg" download>Download</a></li>
    <li><div>Open Graph image<small>1200×630 JPG · placeholder</small></div><a class="btn btn-ghost" href="assets/img/og.jpg" download>Download</a></li>
    <li><div>Brand guidelines PDF<small>Not yet available · to be supplied</small></div><span class="eyebrow">Pending</span></li>
    <li><div>Approved photography<small>Original 1080×1920 exports · to be supplied</small></div><span class="eyebrow">Pending</span></li>
  </ul>
</section>
""")
print("ok")
