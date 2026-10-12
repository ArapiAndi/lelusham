# LELUSHAM — Brand analysis, creative direction & design system

Date: 12 Oct 2026. Sources: public Instagram profile metadata of @lelusham and the eight reel links supplied by Lelia. Nothing below is invented; where information was unavailable it is marked **[missing]**.

## 1. Visual identity analysis

**Profile (public metadata)**
- Display name: LELIA M · handle @lelusham
- Bio: "Full-time diva 💅🏻 / [Fashion & lifestyle] / 📍Milan, Italy / Collab: leliamoroz.pr@gmail.com"
- Public counts on 12 Oct 2026: 337 posts. Follower numbers were deliberately left off the site.
- Logo / wordmark: **[missing]**. A typographic placeholder wordmark is used.

**Content (from the 8 reels)**
| Reel | Caption | Setting |
|---|---|---|
| DdwkQOXqUhA | Trying on my wishlist items from @theattico boutique 💜 | Boutique, green marble, blue croc bag |
| DdtyOCAKPlI | Which Passeggiata bag? @theattico | Boutique shelves, violet dress |
| DdZKq1Eqd7r | @coperni 🩰 | Unboxing on sofa, overlay "Shoes Make The Fit" |
| DdyPiRkthjy | Come with me to @theattico new show during MFW… remotely :) | Showroom, orange knit, pink overlay text |
| Dc6XpeTNbOf | Lo ascolto sempre 🥰 | Stone steps, cream bag |
| Dc6wd6wNgIu | dress @giuseppedimorabito_official | Marble wall, top-down |
| DdFE2pdq_JR | (no caption) | Street at dusk, letterboxed |
| Da7a-I3NSek | Is it better? | Wood-panelled cabin, mirror selfie |

**Visual language**
- Format: vertical 9:16 video, handheld, natural daylight.
- Backdrops: Milanese stone, travertine, marble, boutique interiors. Neutral, warm, greige.
- Colour arrives through the clothes/products: violet dress, blue croc bag, orange knit, red bag. Profile picture has a magenta-pink backdrop; one reel uses hot-pink overlay text.
- Overlays: large, bold, uppercase sans (white or hot pink).
- Tone of voice: short, candid, bilingual IT/EN, often a direct question to the audience.

## 2. Creative direction

Concept: **"The city is the set, the outfit is the story."**
Stone-coloured canvas (not a dark theme: her content is daylight), charcoal type, a single saturated accent (magenta) and a secondary violet taken from the Attico reels. Headlines borrow the voice of her reel overlays: condensed, uppercase, oversized. An italic serif adds the editorial, "diva" note.

Moodboard (all from her own reels): green marble + blue croc · travertine steps + cream bag · violet dress on boutique shelves · orange knit + pink overlay · "Shoes Make The Fit" white grotesk on grey.

Tank reference, what was kept: fullscreen slides, oversized headline + image, hamburger-only navigation, discreet counter/indicators, prev/next controls, restrained transitions, generous negative space.
What was changed: light stone palette instead of dark; the 9:16 reel frame is kept as a sharp portrait card over a blurred version of itself (honest to the native format, and it works with low-res placeholders); no custom cursor, no scroll hijack.

## 3. Sitemap & content hierarchy

```
/                 Home          fullscreen slider (5 reels) → intro → Social Kit preview → CTA
/social-kit.html  Social Kit    filters (Try-on & boutique / Street style / Events & travel) → grid (8) → detail dialog → CTA
/about.html       About         bio-derived intro → editorial blocks → statement → CTA
/connect.html     Connect       email + Instagram, context
/brand.html       Brand         wordmark, palette, type, downloadable assets
```

## 4. Homepage wireframe (desktop / mobile)

```
DESKTOP 1440                                   MOBILE 390
┌────────────────────────────────────────┐     ┌──────────────┐
│ LELUSHAM                      MENU ≡   │     │ LELUSHAM  ≡  │
│                                        │     │  [9:16 reel  │
│  EYEBROW                 ┌──────────┐  │     │   full-bleed]│
│  FULL-TIME               │  9:16    │  │     │              │
│  DIVA.                   │  reel    │  │     │ EYEBROW      │
│  short text              │  cover   │  │     │ FULL-TIME    │
│  [Explore kit] [Instagram]│ caption ↗│  │     │ DIVA.        │
│                          └──────────┘  │     │ text         │
│ 01/05  ─ ─ ─ ─ ─            ⏸ ‹ ›      │     │ [CTA] [IG]   │
└────────────────────────────────────────┘     │ ─ ─ ─   ⏸ ‹ ›│
│ lead paragraph        | handle / city  │     └──────────────┘
│ SOCIAL KIT                   [View all]│     │ lead · meta  │
│ [card][card][card][card] (staggered)   │     │ SOCIAL KIT   │
│ ████ LET'S WORK TOGETHER   [Connect]   │     │ [card][card] │
│ footer                                 │     │ CTA · footer │
```

## 5. Colour palette

| Token | Hex | Use | Contrast on Stone |
|---|---|---|---|
| Stone | #EDE8E1 | page background | — |
| Ivory | #F7F4EF | surfaces (dialog) | — |
| Marble | #C9C4BC | borders, lines | decorative |
| Taupe | #8A7F72 | secondary text, labels | 3.6:1 (large/labels only) |
| Ink | #1E1C1A | text, dark bands | 14.9:1 |
| Magenta | #E8307F | primary accent, hover, focus ring | 3.5:1 (large text only) |
| Violet | #5E2B7A | secondary accent (display text) | 8.2:1 |

Interactive states: hover = Ink → Magenta fill on primary buttons, ghost buttons invert; focus = 2px Magenta outline, 4px offset; active = 1px press.

## 6. Typography

- Display: **Bebas Neue** (Google Fonts). Headlines, nav, counters. Uppercase, line-height .9.
- Accent: **Instrument Serif Italic**. One word per headline, captions, statements.
- Body: **Manrope** 400/600/700. 16–18px body, 11–12px letter-spaced uppercase labels.

## 7. Slider design (Tank-inspired)

Fade crossfade (700 ms) + text reveal stagger + slow background drift. Controls: counter, progress dots (autoplay progress animates on the active dot), pause/play, prev/next, keyboard ← → Space, swipe, pause on hover/focus/hidden tab. `prefers-reduced-motion`: no autoplay, no transitions, everything visible.

## 8. Performance & accessibility checklist

Done
- [x] Semantic HTML, one H1 per page, skip link, landmarks
- [x] Descriptive alt text on every image (written from the actual frames)
- [x] Keyboard: menu (Esc closes), slider, filters, native `<dialog>` with focus trap, inactive slides removed from tab order
- [x] Visible focus states; hover/active states on all controls
- [x] `prefers-reduced-motion` honoured (slider, reveals, menu)
- [x] Hero image preloaded with `fetchpriority=high`; other media `loading=lazy`, width/height set
- [x] No JS framework, no third-party scripts; fonts via Google Fonts with preconnect + `display=swap`
- [x] Titles, meta descriptions, canonical, Open Graph, Twitter card, Person JSON-LD on home
- [x] No horizontal overflow at 390 / 768 / 1024 / 1440 (verified with headless Chromium screenshots)
- [x] Live region announces slide changes

To do before launch
- [ ] Replace 360×640 reel covers with 1080×1920 originals (and WebP/AVIF versions) — the current frames include Instagram's baked-in play icon
- [ ] Replace placeholder wordmark with the official logo (brand.html + header)
- [ ] Replace `https://lelusham.com/` in canonical/OG URLs with the real domain
- [ ] Make a real OG image (current one is a letterboxed cover)
- [ ] Self-host fonts if GDPR requires it
- [ ] Run Lighthouse on the deployed URL

## 9. Placeholders & unimplemented items

- Logo/wordmark: placeholder (typographic).
- Imagery: reel cover frames supplied by Lelia, low resolution, with play icon baked in.
- Brand guidelines PDF and approved photography: listed as "Pending" on brand.html, no download.
- Reel playback happens on Instagram (link out). Embedding Instagram reels requires the oEmbed API with a Meta app token; not implemented.
- Domain: `lelusham.com` is assumed in metadata only.
