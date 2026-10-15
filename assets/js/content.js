/* ============================================================
   LELUSHAM — CONTENT
   Tutto il contenuto editabile del sito vive qui.
   Le immagini sono frame estratti dai reel inviati da Lelia (720×1280).
   Per sostituirle: stesso nome file in assets/img/reels/ (9:16), poi cwebp -q 72 -m 6 -sharp_yuv per la versione .webp usata dal sito.
   ============================================================ */
window.LELUSHAM = {
  brand: {
    name: "LELUSHAM",
    fullName: "Lelia M",
    handle: "@lelusham",
    instagram: "https://www.instagram.com/lelusham/",
    tiktok: "https://www.tiktok.com/@lelusham",
    email: "leliamoroz.pr@gmail.com",
    tagline: "Full-time diva",
    descriptor: "Fashion & Lifestyle",
    city: "Milan, Italy",
    mediaKit: "docs/media-kit/LELUSHAM-media-kit.pdf"
  },

  /* AUDIENCE — numeri reali. value: null = non ancora disponibile (da Instagram Insights), la voce non viene mostrata. */
  /* Numeri pubblici letti dai profili il 13 Oct 2026 (Instagram: og:description; TikTok: creator embed). */
  stats: [
    { label: "TikTok followers", value: "7.7K", note: "@lelusham · 7,688" },
    { label: "TikTok likes", value: "2.2M", note: "Total likes on the profile" },
    { label: "Top video", value: "5.5M", note: "Views, single TikTok" },
    { label: "Instagram followers", value: "3.0K", note: "@lelusham · 3,014 · 337 posts" }
  ],
  statsNote: "Public profile figures as of 13 Oct 2026. Full Insights data (reach, audience split), on request.",

  /* WHAT I OFFER — sei formati, deliverable confermati. Titoli editoriali, valore per il brand prima dei deliverable. Da confermare con Lelia. */
  services: [
    { title: "Styling & Try-On Reel", text: "One reel filmed at any location: try-on, styling, and an honest question to the audience." },
    { title: "Event Coverage", text: "Event attendance and coverage: one reel plus a story sequence posted in real time." },
    { title: "Unboxing & First Look", text: "Product unboxing and first look filmed in an interesting location: the product is received, opened and worn on camera. One reel, one carousel or three stories." },
    { title: "UGC for Your Channels", text: "Videos and stills created for your own feed and ads, without posting on @lelusham. Usage rights agreed per project." },
    { title: "Hotel & Restaurant Stay", text: "Milan or any other location as the setting: one reel and stories, with a location tag and link sticker." },
    { title: "Affiliate & Launch", text: "Tracked link or code in stories and bio during a launch or sale period." }
  ],
  /* MY VALUE — vantaggi concreti per il brand, basati sui contenuti pubblicati (Social Kit) e sui numeri pubblici in stats. */
  value: [
    { title: "Shot on location in Milan & Worldwide", text: "Boutiques, showrooms, hotel rooms and the city's stone and marble: the set is already there. No studio, no set-up cost, delivery in days." },
    { title: "Made for the feed", text: "Vertical, handheld, natural light. It reads as my own post, not as an ad, so it gets watched to the end. Across TikTok and Instagram the profiles count 2.2M likes and a single video at 5.5M views." },
    { title: "Two languages, two audiences", text: "Captions in Italian and English: Milan and an international audience with a single piece of content." },
    { title: "A concept, not a placement", text: "Every piece opens with a question to the audience: Which bag? Is it better? Your product is the answer, and the reason to keep watching. The format already runs across The Attico, Coperni, GCDS, Comme des Garçons, Meder and iS Clinical." }
  ],

  /* HOME — slide del fullscreen slider (ordine = ordine di visualizzazione) */
  slides: [
    {
      /* Slide d'apertura: video full-bleed + wordmark gigante */
      id: "intro",
      type: "video",
      video: { mp4: "assets/video/lelusham-hero-1080.mp4", webm: "assets/video/lelusham-hero-1080.webm" },
      image: "assets/video/lelusham-hero-poster.webp",
      alt: "Lelia in a grey hooded dress with a black bag, posing by a stone statue under a cloudy blue sky in Milan",
      eyebrow: "Fashion & Lifestyle",
      title: "LELUSHAM",
      sub: "A visual diary of fashion, elevated everyday moments, and the art of making the ordinary feel extraordinary.",
      duration: 8400 /* due loop del video (4,2 s) */
    },
    {
      id: "passeggiata",
      image: "assets/img/reels/attico-passeggiata.webp",
      clip: "assets/video/reels/hd/DdtyOCAKPlI.mp4",
      alt: "Lelia in a long violet dress stretches an arm along shelves of handbags in a boutique",
      eyebrow: "Boutique",
      title: "Which<br>Passeggiata bag?",
      text: "The question is always the same. The answer changes every week.",
      caption: "Which Passeggiata bag? @theattico",
      reel: "https://www.instagram.com/reel/DdtyOCAKPlI/"
    },
    {
      id: "back",
      image: "assets/img/reels/back-says-it-all.webp",
      clip: "assets/video/reels/hd/Dc_BswfN6m8.mp4",
      alt: "Lelia in a black open-back top leans on a concrete balcony in front of an industrial building, a black bag in her hand",
      eyebrow: "Street style",
      title: "The back<br>says it all.",
      text: "An open back, an industrial courtyard, Milan light.",
      caption: "The back says it all 🖤",
      reel: "https://www.instagram.com/reel/Dc_BswfN6m8/"
    },
    {
      id: "street",
      image: "assets/img/reels/stone-columns.webp",
      clip: "assets/video/reels/hd/Dc6wd6wNgIu.mp4",
      alt: "Lelia in a grey hooded dress and white sunglasses leans on a stone column with a white bag",
      eyebrow: "Street style",
      title: "Grey hood,<br>white bag.",
      text: "Giuseppe Di Morabito, against Milan stone.",
      caption: "dress @giuseppedimorabito_official · bag @coperni · shoes @gcdswear",
      reel: "https://www.instagram.com/reel/Dc6wd6wNgIu/"
    },
    {
      id: "better",
      image: "assets/img/reels/yacht.webp",
      clip: "assets/video/reels/hd/Da7a-I3NSek.mp4",
      alt: "Lelia in a white t-shirt and grey skirt in a mirror inside a wood-panelled cabin",
      eyebrow: "Lifestyle",
      title: "Is it<br>better?",
      text: "Small changes, filmed on the move.",
      caption: "Is it better?",
      reel: "https://www.instagram.com/reel/Da7a-I3NSek/"
    },
    {
      id: "morso",
      image: "assets/img/reels/morso-gcds.webp",
      clip: "assets/video/reels/hd/Dcid7GvNhKq.mp4",
      alt: "Lelia in a pink t-shirt and black sunglasses sits on a hotel bed holding up a black GCDS Morso shoe",
      eyebrow: "Shoes",
      title: "Morso.",
      text: "GCDS, on a red hotel set.",
      caption: "MORSO @gcdswear",
      reel: "https://www.instagram.com/reel/Dcid7GvNhKq/"
    },
    {
      id: "skin",
      image: "assets/img/reels/meder-sheet-mask.webp",
      clip: "assets/video/reels/hd/Dc5xoWrNwL2.mp4",
      alt: "Lelia in a black swimsuit stands in clear sea water holding up a Meder sheet mask pouch",
      eyebrow: "Beauty",
      title: "Post-summer<br>skin reset.",
      text: "Hydra-Fill Sheet Mask by Meder, filmed in the sea.",
      caption: "Hydra-Fill Sheet Mask by @meder_beauty 💦",
      reel: "https://www.instagram.com/reel/Dc5xoWrNwL2/"
    }
  ],

  /* SOCIAL KIT — categorie reali derivate dai contenuti disponibili */
  categories: [
    { id: "all", label: "All" },
    { id: "tryon", label: "Try-on & boutique" },
    { id: "street", label: "Street style" },
    { id: "events", label: "Events" },
    { id: "lifestyle", label: "Lifestyle & travel" },
    { id: "unboxing", label: "Unboxing" },
    { id: "beauty", label: "Beauty" }
  ],
  platforms: [
    { id: "all", label: "Instagram + TikTok" },
    { id: "instagram", label: "Instagram" },
    { id: "tiktok", label: "TikTok" }
  ],

  /* HOME — "Selected work": id degli elementi del kit, in ordine */
  homePreview: ["DdwkQOXqUhA", "DbF9tHPtjKu", "Dc5xoWrNwL2", "Dc6wd6wNgIu"],

  /* SOCIAL KIT — elementi della galleria */
  kit: [
    { id: "DdwkQOXqUhA", platform: "instagram", cat: "tryon", clip: "assets/video/reels/DdwkQOXqUhA.mp4", image: "assets/img/reels/attico-croc-bag.webp", title: "Wishlist try-on", brand: "The Attico", caption: "Trying on my wishlist items from @theattico boutique 💜", alt: "Lelia lifts a glossy blue crocodile-embossed bag in front of a green marble wall", reel: "https://www.instagram.com/reel/DdwkQOXqUhA/", date: "2026" },
    { id: "Dc6XpeTNbOf", platform: "instagram", cat: "tryon", clip: "assets/video/reels/Dc6XpeTNbOf.mp4", image: "assets/img/reels/suede-bag.webp", title: "Shopping in presenza", brand: "", caption: "Lo ascolto sempre 🥰", alt: "A large tan suede bag held low, fur-trimmed black mules on a green carpet", reel: "https://www.instagram.com/reel/Dc6XpeTNbOf/", date: "2026" },
    { id: "DdtyOCAKPlI", platform: "instagram", cat: "tryon", clip: "assets/video/reels/DdtyOCAKPlI.mp4", image: "assets/img/reels/attico-passeggiata.webp", title: "Which Passeggiata bag?", brand: "The Attico", caption: "Which Passeggiata bag? @theattico", alt: "Lelia in a long violet dress beside shelves of handbags in a boutique", reel: "https://www.instagram.com/reel/DdtyOCAKPlI/", date: "25 Sep 2026" },
    { id: "DdZKq1Eqd7r", platform: "instagram", cat: "unboxing", clip: "assets/video/reels/DdZKq1Eqd7r.mp4", image: "assets/img/reels/coperni-box.webp", title: "Shoes make the fit", brand: "Coperni", caption: "@coperni 🩰", alt: "Hands lift a Coperni dust bag out of a white shoe box on a grey sofa", reel: "https://www.instagram.com/reel/DdZKq1Eqd7r/", date: "2026" },
    { id: "DbF9tHPtjKu", platform: "instagram", cat: "unboxing", clip: "assets/video/reels/DbF9tHPtjKu.mp4", image: "assets/img/reels/jwpei-orchid.webp", title: "The orchid effect", brand: "JW Pei", caption: "The orchid effect 💜", alt: "Close-up of the embroidered violet petals of a JW Pei orchid bag", reel: "https://www.instagram.com/reel/DbF9tHPtjKu/", date: "2026" },
    { id: "DdyPiRkthjy", platform: "instagram", cat: "events", clip: "assets/video/reels/DdyPiRkthjy.mp4", image: "assets/img/reels/mfw-attico-show.webp", title: "MFW, remotely in IBZ", brand: "The Attico", caption: "Come with me to @theattico new show during MFW… remotely :)", alt: "Lelia in a fluffy orange top in a bright showroom", reel: "https://www.instagram.com/reel/DdyPiRkthjy/", date: "2026" },
    { id: "Dc5xoWrNwL2", platform: "instagram", cat: "beauty", clip: "assets/video/reels/Dc5xoWrNwL2.mp4", image: "assets/img/reels/meder-sheet-mask.webp", title: "Post-summer skin reset", brand: "Meder Beauty", caption: "Hydra-Fill Sheet Mask by Meder is your post-summer skin reanimation 🚨 We know your skin has been summering a lot. Now let’s hydrate 💦 @meder_beauty", alt: "Lelia in a black swimsuit stands in clear sea water holding up a Meder sheet mask pouch", reel: "https://www.instagram.com/reel/Dc5xoWrNwL2/", date: "5 Sep 2026" },
    { id: "Dc6wd6wNgIu", platform: "instagram", cat: "street", clip: "assets/video/reels/Dc6wd6wNgIu.mp4", image: "assets/img/reels/stone-columns.webp", title: "Outfit check", brand: "Giuseppe Di Morabito", caption: "dress @giuseppedimorabito_official · bag @coperni · shoes @gcdswear", alt: "Lelia in a grey hooded dress and white sunglasses leans on a stone column with a white bag", reel: "https://www.instagram.com/reel/Dc6wd6wNgIu/", date: "2026" },
    { id: "DdFE2pdq_JR", platform: "instagram", cat: "street", clip: "assets/video/reels/DdFE2pdq_JR.mp4", image: "assets/img/reels/street-night.webp", title: "Sunglasses at night", brand: "", caption: "", alt: "Lelia in black sunglasses and a pearl necklace walks along a city street at dusk", reel: "https://www.instagram.com/reel/DdFE2pdq_JR/", date: "2026" },
    { id: "Da7a-I3NSek", platform: "instagram", cat: "street", clip: "assets/video/reels/Da7a-I3NSek.mp4", image: "assets/img/reels/yacht.webp", title: "Is it better?", brand: "", caption: "Is it better?", alt: "Lelia in a white t-shirt and grey skirt in a mirror inside a wood-panelled cabin", reel: "https://www.instagram.com/reel/Da7a-I3NSek/", date: "2026" },
    /* TikTok — cover originali, views pubbliche al 13 Oct 2026 */
    /* nascosto per ora */ // { id: "tt-7592984230288706838", platform: "tiktok", cat: "lifestyle", image: "assets/img/tiktok/7592984230288706838.webp", title: "Con questo addosso", brand: "", caption: "🧔🏻‍♂️: oggi voglio vederti con questo addosso 😍", alt: "Lelia in a long black backless dress in a hotel corridor", reel: "https://www.tiktok.com/@lelusham/video/7592984230288706838", date: "2026", views: 660600 },
    { id: "tt-7602577356158422294", platform: "tiktok", cat: "beauty", clip: "assets/video/reels/tt-7602577356158422294.mp4", image: "assets/img/tiktok/7602577356158422294.webp", title: "My glow-up tutorial", brand: "", caption: "Nessun segreto magico Solo abitudini giuste 🤷🏼‍♀️", alt: "Lelia in a beige t-shirt beside a small before photo, the words Il mio glow up Tutorial overlaid", reel: "https://www.tiktok.com/@lelusham/video/7602577356158422294", date: "3 Feb 2026" },
    { id: "tt-7568153310851501334", platform: "tiktok", cat: "lifestyle", clip: "assets/video/reels/tt-7568153310851501334.mp4", image: "assets/img/tiktok/7568153310851501334.webp", title: "Private dinner at Vesta", brand: "", caption: "Vi posto con noi nel nostro sabato sera 🌚", alt: "Lelia in a red dress and a friend in black sit close at a restaurant table with wine glasses", reel: "https://www.tiktok.com/@lelusham/video/7568153310851501334", date: "2 Nov 2025" },
    /* nascosto per ora */ // { id: "tt-7592001169996647702", platform: "tiktok", cat: "lifestyle", image: "assets/img/tiktok/7592001169996647702.webp", title: "Relax day in Courchevel", brand: "", caption: "La mia giornata di relax a Courchevel 🏔️✨", alt: "White pillows and a rumpled duvet with the words una giornata di relax a Courchevel", reel: "https://www.tiktok.com/@lelusham/video/7592001169996647702", date: "5 Jan 2026" },
    { id: "tt-7682718399268523296", platform: "tiktok", cat: "street", clip: "assets/video/reels/Dc_BswfN6m8.mp4", image: "assets/img/reels/back-says-it-all.webp", title: "The back says it all", brand: "", caption: "", alt: "Lelia in a black open-back top leans on a glass balcony in front of an industrial building", reel: "https://www.tiktok.com/@lelusham/video/7682718399268523296", date: "7 Sep 2026" },
    { id: "tt-7664690335984913697", platform: "tiktok", cat: "unboxing", clip: "assets/video/reels/tt-7664690335984913697.mp4", image: "assets/img/tiktok/7664690335984913697.webp", title: "Comme des Garçons haul", brand: "Comme des Garçons", caption: "@Comme des Garçons haul ❤️‍🩹", alt: "Lelia in a white top and sequin skirt holds a red bow bag and a Comme des Garçons shopping bag by a window", reel: "https://www.tiktok.com/@lelusham/video/7664690335984913697", date: "2026" },
    { id: "tt-7518712856477601046", platform: "tiktok", cat: "unboxing", clip: "assets/video/reels/tt-7518712856477601046.mp4", image: "assets/img/tiktok/7518712856477601046.webp", title: "La Passeggiata, unboxing", brand: "The Attico", caption: "La passeggiata @The Attico 🤍 #unboxingvideo", alt: "Lelia holds a black The Attico shopping bag on a bridge in Venice", reel: "https://www.tiktok.com/@lelusham/video/7518712856477601046", date: "2025", views: 11900 },
    /* nascosto per ora */ // { id: "tt-7690337965490408737", platform: "tiktok", cat: "lifestyle", image: "assets/img/tiktok/7690337965490408737.webp", title: "Best friend photoshoot", brand: "Mew Mews Fashion", caption: "The difference between a fake friend and a best friend 😂📸 Good dress = serious photoshoot @Mew Mews Fashion", alt: "Lelia in a long black dress poses by the sea while a friend takes photos", reel: "https://www.tiktok.com/@lelusham/video/7690337965490408737", date: "2026", views: 1951 },
    /* nascosto per ora */ // { id: "tt-7690305161398471969", platform: "tiktok", cat: "lifestyle", image: "assets/img/tiktok/7690305161398471969.webp", title: "Dinner plans", brand: "", caption: "What are we gonna make for dinner: @Miss_zalata", alt: "Lelia and a friend in evening dresses on a terrace by the sea", reel: "https://www.tiktok.com/@lelusham/video/7690305161398471969", date: "2026", views: 491 },
    { id: "DcYVALXNdsI", platform: "instagram", cat: "beauty", clip: "assets/video/reels/DcYVALXNdsI.mp4", image: "assets/img/reels/isclinical-routine.webp", title: "A routine designed to do more", brand: "iS Clinical", caption: "A routine designed to do more ✨ From cleansing to hydration, firming and recovery - this is the iS Clinical edit for skin that looks healthy, balanced and cared for.", alt: "Lelia in a white t-shirt and sequin skirt sits at a hotel vanity holding an iS Clinical bottle", reel: "https://www.instagram.com/reel/DcYVALXNdsI/", date: "2026" },
    /* nascosto per ora */ // { id: "tt-7693176747478502689", platform: "tiktok", cat: "lifestyle", image: "assets/img/tiktok/7693176747478502689.webp", title: "No matching bags", brand: "", caption: "POV: we said no matching bags today", alt: "Lelia in a black evening outfit in a lantern-lit courtyard at night", reel: "https://www.tiktok.com/@lelusham/video/7693176747478502689", date: "2026", views: 431 }
  ]
};
