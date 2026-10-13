/* ============================================================
   LELUSHAM — CONTENT
   Tutto il contenuto editabile del sito vive qui.
   Le immagini sono frame estratti dai reel inviati da Lelia (720×1280).
   Per sostituirle: stesso nome file in assets/img/reels/ (9:16).
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
    descriptor: "Fashion & lifestyle",
    city: "Milan, Italy",
    mediaKit: "docs/media-kit/LELUSHAM-media-kit.pdf"
  },

  /* AUDIENCE — numeri reali. value: null = non ancora disponibile (da Instagram Insights), la voce non viene mostrata. */
  stats: [
    { label: "Followers", value: "3,014", note: "Instagram · 13 Oct 2026" },
    { label: "Avg. reel views", value: null, note: "Median of the last 20 reels" },
    { label: "Engagement rate", value: null, note: "Last 30 days" },
    { label: "Audience", value: null, note: "Top cities, age range" }
  ],
  statsNote: "Full Insights data (reach, views, audience split) in the media kit, on request.",

  /* WHAT I OFFER — formati proposti (stessa lista del media kit). Da confermare con Lelia. */
  services: [
    { title: "Boutique try-on reel", text: "One 9:16 reel filmed on location in your store: try-on, styling, an honest question to the audience. Three stories on the day." },
    { title: "Fashion week coverage", text: "Show or showroom visit during MFW: one reel plus a story sequence posted in real time." },
    { title: "Unboxing & first look", text: "Product received, opened and worn on camera. One reel, one carousel or three stories." },
    { title: "UGC for your channels", text: "Vertical videos and stills delivered for your own feed and ads, without posting on @lelusham. Usage rights agreed per project." },
    { title: "Hotel & restaurant stay", text: "A Milan or travel location as the set: one reel and stories, with location tag and link sticker." },
    { title: "Affiliate & launch", text: "Tracked link or code in stories and bio during a launch or sale period." }
  ],

  /* MY VALUE — vantaggi concreti per il brand */
  value: [
    { title: "On location in Milan", text: "Boutiques, showrooms and the city's stone and marble are already the setting of the feed. No studio, no set-up cost." },
    { title: "Native to the reel", text: "Vertical, handheld, daylight. Content reads as a creator's own post, not as an ad." },
    { title: "Two languages", text: "Captions in Italian and English, for a Milan and an international audience." },
    { title: "A concept for each brand", text: "Every piece starts from a question to the audience: Which bag? Is it better? The product is the answer, not a banner." }
  ],

  /* HOME — slide del fullscreen slider (ordine = ordine di visualizzazione) */
  slides: [
    {
      /* Slide d'apertura: video full-bleed + wordmark gigante */
      id: "intro",
      type: "video",
      video: { mp4: "assets/video/lelusham-hero.mp4", webm: "assets/video/lelusham-hero.webm", mp4HD: "assets/video/lelusham-hero-1080.mp4", webmHD: "assets/video/lelusham-hero-1080.webm" },
      image: "assets/video/lelusham-hero-poster.jpg",
      alt: "Lelia in a grey hooded dress with a black bag, posing by a stone statue under a cloudy blue sky in Milan",
      eyebrow: "Fashion & lifestyle · Milan",
      title: "LELUSHAM",
      text: "A Life Styled My Way",
      sub: "A visual diary of fashion, elevated everyday moments, and the art of making the ordinary feel extraordinary.",
      duration: 8400 /* due loop del video (4,2 s) */
    },
    {
      id: "wishlist",
      image: "assets/img/reels/attico-croc-bag.jpg",
      alt: "Lelia in a violet velvet dress lifts a glossy blue crocodile-embossed bag by its handles in front of a green marble wall",
      eyebrow: "Milan · Try-on",
      title: "Full-time<br>diva.",
      text: "Fashion & lifestyle, filmed in Milan. Try-ons, boutique visits and the pieces worth talking about.",
      caption: "Trying on my wishlist items from @theattico boutique 💜",
      reel: "https://www.instagram.com/reel/DdwkQOXqUhA/"
    },
    {
      id: "mfw",
      image: "assets/img/reels/mfw-attico-show.jpg",
      alt: "Lelia in a fluffy orange top sips from a glass in a bright showroom, palm trees behind the window",
      eyebrow: "Fashion Week",
      title: "Come with<br>me to MFW.",
      text: "Milan Fashion Week, shows and showrooms, told from the inside.",
      caption: "Come with me to @theattico new show during MFW… remotely :)",
      reel: "https://www.instagram.com/reel/DdyPiRkthjy/"
    },
    {
      id: "passeggiata",
      image: "assets/img/reels/attico-passeggiata.jpg",
      alt: "Lelia in a long violet dress stretches an arm along shelves of handbags in a boutique",
      eyebrow: "Boutique",
      title: "Which<br>Passeggiata bag?",
      text: "The question is always the same. The answer changes every week.",
      caption: "Which Passeggiata bag? @theattico",
      reel: "https://www.instagram.com/reel/DdtyOCAKPlI/"
    },
    {
      id: "fit",
      image: "assets/img/reels/coperni-box.jpg",
      eyebrow: "Unboxing",
      alt: "Hands lift a Coperni dust bag out of a white shoe box on a grey sofa",
      title: "Shoes make<br>the fit.",
      text: "Unboxings and first looks, in the language of the reels.",
      caption: "@coperni 🩰",
      reel: "https://www.instagram.com/reel/DdZKq1Eqd7r/"
    },
    {
      id: "street",
      image: "assets/img/reels/suede-bag.jpg",
      alt: "A large tan suede bag held low, with fur-trimmed black mules on a green carpet",
      eyebrow: "Boutique · Milano",
      title: "Lo ascolto<br>sempre.",
      text: "Shopping in person, bag first. The city is the set.",
      caption: "Lo ascolto sempre 🥰",
      reel: "https://www.instagram.com/reel/Dc6XpeTNbOf/"
    }
  ],

  /* SOCIAL KIT — categorie reali derivate dai contenuti disponibili */
  categories: [
    { id: "all", label: "All" },
    { id: "tryon", label: "Try-on & boutique" },
    { id: "street", label: "Street style" },
    { id: "events", label: "Events & travel" }
  ],

  /* SOCIAL KIT — elementi della galleria */
  kit: [
    { id: "DdwkQOXqUhA", cat: "tryon", image: "assets/img/reels/attico-croc-bag.jpg", title: "Wishlist try-on", brand: "The Attico", caption: "Trying on my wishlist items from @theattico boutique 💜", alt: "Lelia lifts a glossy blue crocodile-embossed bag in front of a green marble wall", reel: "https://www.instagram.com/reel/DdwkQOXqUhA/", date: "2026" },
    { id: "DdtyOCAKPlI", cat: "tryon", image: "assets/img/reels/attico-passeggiata.jpg", title: "Which Passeggiata bag?", brand: "The Attico", caption: "Which Passeggiata bag? @theattico", alt: "Lelia in a long violet dress beside shelves of handbags in a boutique", reel: "https://www.instagram.com/reel/DdtyOCAKPlI/", date: "25 Sep 2026" },
    { id: "DdZKq1Eqd7r", cat: "tryon", image: "assets/img/reels/coperni-box.jpg", title: "Shoes make the fit", brand: "Coperni", caption: "@coperni 🩰", alt: "Hands lift a Coperni dust bag out of a white shoe box on a grey sofa", reel: "https://www.instagram.com/reel/DdZKq1Eqd7r/", date: "2026" },
    { id: "DdyPiRkthjy", cat: "events", image: "assets/img/reels/mfw-attico-show.jpg", title: "MFW, remotely", brand: "The Attico", caption: "Come with me to @theattico new show during MFW… remotely :)", alt: "Lelia in a fluffy orange top in a bright showroom", reel: "https://www.instagram.com/reel/DdyPiRkthjy/", date: "2026" },
    { id: "Dc6XpeTNbOf", cat: "tryon", image: "assets/img/reels/suede-bag.jpg", title: "Lo ascolto sempre", brand: "", caption: "Lo ascolto sempre 🥰", alt: "A large tan suede bag held low, fur-trimmed black mules on a green carpet", reel: "https://www.instagram.com/reel/Dc6XpeTNbOf/", date: "2026" },
    { id: "Dc6wd6wNgIu", cat: "street", image: "assets/img/reels/stone-columns.jpg", title: "Grey hood, white bag", brand: "Giuseppe Di Morabito", caption: "dress @giuseppedimorabito_official", alt: "Lelia in a grey hooded dress and white sunglasses leans on a stone column with a white bag", reel: "https://www.instagram.com/reel/Dc6wd6wNgIu/", date: "2026" },
    { id: "DdFE2pdq_JR", cat: "street", image: "assets/img/reels/street-night.jpg", title: "Street, low light", brand: "", caption: "", alt: "Lelia in black sunglasses and a pearl necklace walks along a city street at dusk", reel: "https://www.instagram.com/reel/DdFE2pdq_JR/", date: "2026" },
    { id: "Da7a-I3NSek", cat: "events", image: "assets/img/reels/yacht.jpg", title: "Is it better?", brand: "", caption: "Is it better?", alt: "Lelia in a white t-shirt and grey skirt in a mirror inside a wood-panelled cabin", reel: "https://www.instagram.com/reel/Da7a-I3NSek/", date: "2026" }
  ]
};
