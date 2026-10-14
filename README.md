# LELUSHAM — Social Kit website

Static site, no build step, no dependencies. Open `index.html` or serve the folder:

```
python3 -m http.server 8080
```

## Structure

```
index.html            Home (fullscreen slider)
social-kit.html       Gallery with filters + detail dialog
about.html            Editorial about page
connect.html          Contact
assets/css/style.css  Design tokens + all styles
assets/js/content.js  ALL editable content (slides, gallery items, categories, brand data)
assets/js/slider.js   Fullscreen slider
assets/js/main.js     Menu, gallery, filters, dialog, scroll reveal
assets/img/reels/     Instagram reel frames (720×1280)
assets/img/tiktok/    TikTok covers (720×1280), named by video id
docs/BRAND-ANALYSIS.md  Analysis, direction, wireframe, palette, checklist
docs/build-pages.py   Optional: regenerates the 5 HTML pages (shared header/footer)
```

## How to update

**Text, slides, gallery items, categories, platform stats, email, Instagram/TikTok URLs** → edit `assets/js/content.js`. Stats (`stats`) and TikTok `views` are static numbers: update them by hand. Each slide/kit item has `image`, `alt`, `title`, `caption`, `reel`. Add or remove objects freely; counters and dots update automatically.

**Images** → drop files in `assets/img/reels/` and reference them in `content.js`. Recommended: 1080×1920 JPG/WebP, under 300 KB. Keep the `alt` text descriptive.

**Colours / fonts** → tokens at the top of `assets/css/style.css` (`:root`).

**Logo** → replace the inline SVG `<text>` in the header of each HTML page (search `wordmark`) and `assets/img/lelusham-wordmark.svg`.

**Domain** → search and replace `https://lelusham.com/` in the HTML `<head>` sections.

**Header/footer changes across all pages** → edit `docs/build-pages.py` and run `python3 docs/build-pages.py` from the project root, or edit the 5 files by hand.

## Interactions implemented and tested

- Slider: prev/next, dots, counter, autoplay (6 s) with pause button, pause on hover/focus/hidden tab, keyboard ← → Space, swipe, reduced-motion fallback, aria-live.
- Menu: fullscreen overlay, Esc to close, current page highlighted.
- Social Kit: platform (Instagram/TikTok) + category filters (URL hash, e.g. #tiktok+lifestyle), detail dialog with prev/next and keyboard arrows, link to the original reel.
- Scroll reveal via IntersectionObserver (disabled with reduced motion).

## Known placeholders

See the end of `docs/BRAND-ANALYSIS.md`: logo, brand PDF.
