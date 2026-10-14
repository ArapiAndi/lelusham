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
<link rel="preload" as="font" type="font/woff2" href="assets/fonts/bebas-neue-normal-latin.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="assets/fonts/manrope-normal-latin.woff2" crossorigin>
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
  </ol>
  <div class="nav-foot">
    <span><a href="https://www.instagram.com/lelusham/" target="_blank" rel="noopener" data-ig>Instagram</a> &nbsp;·&nbsp; <a href="https://www.tiktok.com/@lelusham" target="_blank" rel="noopener" data-tt>TikTok</a> &nbsp;·&nbsp; @lelusham</span>
    <span>Milan, Italy</span>
  </div>
</nav>
<main id="main">
"""
FOOT = """</main>
<footer class="site-footer">
  <span>© <span data-year></span> LELUSHAM </span>
  <nav aria-label="Footer">
    <a href="social-kit.html">Social Kit</a>
    <a href="about.html">About</a>
    <a href="connect.html">Connect</a>
    <a data-media-kit href="docs/media-kit/LELUSHAM-media-kit.pdf" download>Media kit</a>
    <a href="https://www.instagram.com/lelusham/" target="_blank" rel="noopener" data-ig>Instagram</a>
    <a href="https://www.tiktok.com/@lelusham" target="_blank" rel="noopener" data-tt>TikTok</a>
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
    <div class="counter" aria-hidden="true"></div>
    <div class="dots" role="tablist" aria-label="Slides"></div>
    <div class="slider-btns">
      <button class="ctrl" type="button" data-toggle-play aria-pressed="false" aria-label="Pause autoplay">{SVG_PAUSE}{SVG_PLAY}</button>
      <button class="ctrl" type="button" data-prev aria-label="Previous slide">{SVG_PREV}</button>
      <button class="ctrl" type="button" data-next aria-label="Next slide">{SVG_NEXT}</button>
    </div>
  </div>
</section>

<section class="section intro">
  <p class="lead fade-up">Based in Italy, I&#39;m a fashion &amp; lifestyle creator with a passion for personal style, statement pieces, and the art of everyday living. My content blends modern femininity with a confident, playful edge, capturing fashion, travel, and curated lifestyle moments through my own distinctive lens. I love bringing brands to life through visually compelling storytelling that feels both aspirational and authentic.</p>
  <dl class="meta fade-up">
    <div><dt>@lelusham</dt><dd><a class="link" href="https://www.instagram.com/lelusham/" target="_blank" rel="noopener" data-ig>Instagram</a> &nbsp;·&nbsp; <a class="link" href="https://www.tiktok.com/@lelusham" target="_blank" rel="noopener" data-tt>TikTok</a></dd></div>
    <div><dt>Location</dt><dd>Based in Milan, Italy<br>Available Worldwide</dd></div>
    <div><dt>Content</dt><dd>Fashion &amp; lifestyle</dd></div>
    <div><dt>Collab</dt><dd><a class="link" data-email href="#">leliamoroz.pr@gmail.com</a></dd></div>
  </dl>
</section>

<section class="section audience" aria-labelledby="aud-h">
  <div class="section-head">
    <h2 id="aud-h" class="section-title display fade-up">Audience <span class="serif-i">&amp; insights</span></h2>
  </div>
  <dl class="stats" data-stats></dl>
  <p class="eyebrow fade-up" data-stats-note></p>
</section>

<section class="section" aria-labelledby="kit-h">
  <div class="section-head">
    <h2 id="kit-h" class="section-title display fade-up">Selected <span class="serif-i">work</span></h2>
    <a class="btn btn-ghost fade-up" href="social-kit.html">View all</a>
  </div>
  <div class="grid staggered" data-kit-preview></div>
</section>

<section class="section offer-sec" aria-labelledby="off-h">
  <div class="section-head">
    <h2 id="off-h" class="section-title display fade-up">What I <span class="serif-i">offer</span></h2>
    <a class="btn btn-ghost fade-up" href="connect.html">Rates on request</a>
  </div>
  <ol class="offer-list" data-services></ol>
</section>

<section class="section value-sec on-dark" aria-labelledby="val-h">
  <h2 id="val-h" class="section-title display fade-up">Why work <span class="serif-i">with me</span></h2>
  <ul class="value-list" data-value></ul>
</section>

<section class="cta-band">
  <h2 class="display">Let's <span class="serif-i">work</span> together</h2>
  <a class="btn btn-primary" href="connect.html">Work with me</a>
</section>
""", scripts='<script src="assets/js/slider.js"></script>\n<script src="assets/js/main.js"></script>',
extra='<link rel="preload" as="image" href="assets/video/lelusham-hero-poster.webp" fetchpriority="high">\n<script type="application/ld+json">{"@context":"https://schema.org","@type":"Person","name":"Lelia M","alternateName":"LELUSHAM","url":"https://lelusham.com/","sameAs":["https://www.instagram.com/lelusham/","https://www.tiktok.com/@lelusham"],"email":"mailto:leliamoroz.pr@gmail.com","address":{"@type":"PostalAddress","addressLocality":"Milan","addressCountry":"IT"},"jobTitle":"Fashion & lifestyle creator"}</script>')

# ---------------- SOCIAL KIT ----------------
page("social-kit.html","Social Kit — LELUSHAM","The LELUSHAM Social Kit: Instagram reels and TikTok videos organised by try-on & boutique, street style, events & travel, lifestyle. Every item links to the original.",f"""
<section class="page-hero">
  <p class="eyebrow">02 — Social Kit</p>
  <h1 class="display">Social <span class="serif-i" style="color:var(--violet)">Kit</span></h1>
  <p class="lead">Instagram reels and TikTok videos in one place. Pick a platform or a category, open a piece, jump to the original.</p>
</section>
<section class="section" style="padding-top:0" aria-label="Gallery">
  <div class="filters filters-platform" data-kit-platforms role="group" aria-label="Filter by platform"></div>
  <div class="filters" data-kit-filters role="group" aria-label="Filter by category"></div>
  <p class="eyebrow" style="margin-bottom:1.5rem"><span data-kit-count>20 videos</span></p>
  <div class="grid staggered" data-kit-grid></div>
</section>
<dialog class="detail" data-detail aria-label="Reel detail">
  <div class="detail-inner">
    <div class="detail-media"><img data-d-img src="" alt="" width="720" height="1280"><iframe data-d-frame title="Instagram reel" loading="lazy" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
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
""")

# ---------------- ABOUT ----------------
page("about.html","About — LELUSHAM","Who is behind @lelusham: Lelia M, fashion & lifestyle creator in Milan. The tone, the visual language, the content.","""
<section class="page-hero">
  <p class="eyebrow">03 — About</p>
  <h1 class="display">Full-time <span class="serif-i" style="color:var(--violet)">diva</span></h1>
  <p class="lead">Three words from her bio. They set the tone for everything that follows.</p>
</section>

<section class="section editorial">
  <div class="ed-text fade-up">
    <h2 class="display">Lelia M, <span class="serif-i">Milano</span></h2>
    <p>Lelia M publishes as <a class="link" href="https://www.instagram.com/lelusham/" target="_blank" rel="noopener" data-ig>@lelusham</a>, a fashion &amp; lifestyle account based in Milan, with the same handle on <a class="link" href="https://www.tiktok.com/@lelusham" target="_blank" rel="noopener" data-tt>TikTok</a>. The feed is built on short-form video: outfit try-ons in boutiques, unboxings, fashion week moments and walks through the city.</p>
    <p>The captions are brief and bilingual, Italian and English, often a single question thrown to the audience: <em>Which bag? Is it better?</em></p>
  </div>
  <figure class="ed-figure fade-up"><img src="assets/img/reels/stone-columns.webp" alt="Lelia in a grey hooded dress and white sunglasses leans on a stone column in Milan" width="720" height="1280" loading="lazy"></figure>
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
  <figure class="ed-figure fade-up"><img src="assets/img/reels/attico-passeggiata.webp" alt="Lelia in a long violet dress beside shelves of handbags in a boutique" width="720" height="1280" loading="lazy"></figure>
</section>

<section class="cta-band">
  <h2 class="display">See the <span class="serif-i">reels</span></h2>
  <a class="btn btn-primary" href="social-kit.html">Social Kit</a>
</section>
""")

# ---------------- CONNECT ----------------
page("connect.html","Connect — LELUSHAM","Get in touch with Lelia M (@lelusham) for collaborations: email, Instagram and TikTok.","""
<section class="page-hero" style="padding-bottom:0">
  <p class="eyebrow">04 — Connect</p>
</section>
<section class="section connect" style="padding-top:1rem">
  <div class="c-main">
    <h1 class="display fade-up">Let's <span class="serif-i" style="color:var(--violet)">talk</span></h1>
    <p class="lead fade-up">For collaborations, boutique visits and fashion week coverage.</p>
    <p class="fade-up" style="margin-top:2.5rem"><a class="big-link" data-email href="#">leliamoroz.pr@gmail.com</a></p>
    <p class="fade-up"><a class="big-link" href="https://www.instagram.com/lelusham/" target="_blank" rel="noopener" data-ig>Instagram → @lelusham</a></p>
    <p class="fade-up"><a class="big-link" href="https://www.tiktok.com/@lelusham" target="_blank" rel="noopener" data-tt>TikTok → @lelusham</a></p>
    <p class="fade-up c-actions"><a class="btn btn-primary" data-email data-keep href="#">Contact me</a><a class="btn btn-ghost" data-media-kit href="docs/media-kit/LELUSHAM-media-kit.pdf" download>Download media kit PDF</a></p>
  </div>
  <aside class="c-side fade-up">
    <dl>
      <dt class="eyebrow">Location</dt><dd>Based in Milan, Italy<br>Available Worldwide</dd>
      <dt class="eyebrow">Content</dt><dd>Fashion &amp; lifestyle<br>Reels · TikTok · try-ons · events</dd>
      <dt class="eyebrow">Audience</dt><dd>TikTok 7.7K followers · 2.2M likes<br>Instagram 3.0K followers</dd>
      <dt class="eyebrow">Collab</dt><dd><a class="link" data-email data-keep href="#">Write an email</a></dd>
    </dl>
  </aside>
</section>
<section class="section offer-sec" style="padding-top:0" aria-labelledby="off-h">
  <div class="section-head">
    <h2 id="off-h" class="section-title display fade-up">What I <span class="serif-i">offer</span></h2>
    <span class="eyebrow fade-up">Rates and availability on request</span>
  </div>
  <ol class="offer-list" data-services></ol>
</section>
""")

print("ok")
