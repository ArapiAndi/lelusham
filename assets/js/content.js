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
  /* Numeri pubblici letti dai profili il 13 Oct 2026 (Instagram: og:description; TikTok: creator embed). */
  stats: [
    { label: "TikTok followers", value: "7.7K", note: "@lelusham · 7,688" },
    { label: "TikTok likes", value: "2.2M", note: "Total likes on the profile" },
    { label: "Top video", value: "660K", note: "Views, single TikTok" },
    { label: "Instagram followers", value: "3.0K", note: "@lelusham · 3,014 · 337 posts" }
  ],
  statsNote: "Public profile figures as of 13 Oct 2026. Full Insights data (reach, audience split) in the media kit, on request.",

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
    { id: "events", label: "Events & travel" },
    { id: "lifestyle", label: "Lifestyle" }
  ],
  platforms: [
    { id: "all", label: "Instagram + TikTok" },
    { id: "instagram", label: "Instagram" },
    { id: "tiktok", label: "TikTok" }
  ],

  /* SOCIAL KIT — elementi della galleria */
  kit: [
    { id: "DdwkQOXqUhA", platform: "instagram", cat: "tryon", image: "assets/img/reels/attico-croc-bag.jpg", title: "Wishlist try-on", brand: "The Attico", caption: "Trying on my wishlist items from @theattico boutique 💜", alt: "Lelia lifts a glossy blue crocodile-embossed bag in front of a green marble wall", reel: "https://www.instagram.com/reel/DdwkQOXqUhA/", date: "2026" },
    { id: "DdtyOCAKPlI", platform: "instagram", cat: "tryon", image: "assets/img/reels/attico-passeggiata.jpg", title: "Which Passeggiata bag?", brand: "The Attico", caption: "Which Passeggiata bag? @theattico", alt: "Lelia in a long violet dress beside shelves of handbags in a boutique", reel: "https://www.instagram.com/reel/DdtyOCAKPlI/", date: "25 Sep 2026" },
    { id: "DdZKq1Eqd7r", platform: "instagram", cat: "tryon", image: "assets/img/reels/coperni-box.jpg", title: "Shoes make the fit", brand: "Coperni", caption: "@coperni 🩰", alt: "Hands lift a Coperni dust bag out of a white shoe box on a grey sofa", reel: "https://www.instagram.com/reel/DdZKq1Eqd7r/", date: "2026" },
    { id: "DdyPiRkthjy", platform: "instagram", cat: "events", image: "assets/img/reels/mfw-attico-show.jpg", title: "MFW, remotely", brand: "The Attico", caption: "Come with me to @theattico new show during MFW… remotely :)", alt: "Lelia in a fluffy orange top in a bright showroom", reel: "https://www.instagram.com/reel/DdyPiRkthjy/", date: "2026" },
    { id: "Dc6XpeTNbOf", platform: "instagram", cat: "tryon", image: "assets/img/reels/suede-bag.jpg", title: "Lo ascolto sempre", brand: "", caption: "Lo ascolto sempre 🥰", alt: "A large tan suede bag held low, fur-trimmed black mules on a green carpet", reel: "https://www.instagram.com/reel/Dc6XpeTNbOf/", date: "2026" },
    { id: "Dc6wd6wNgIu", platform: "instagram", cat: "street", image: "assets/img/reels/stone-columns.jpg", title: "Grey hood, white bag", brand: "Giuseppe Di Morabito", caption: "dress @giuseppedimorabito_official", alt: "Lelia in a grey hooded dress and white sunglasses leans on a stone column with a white bag", reel: "https://www.instagram.com/reel/Dc6wd6wNgIu/", date: "2026" },
    { id: "DdFE2pdq_JR", platform: "instagram", cat: "street", image: "assets/img/reels/street-night.jpg", title: "Street, low light", brand: "", caption: "", alt: "Lelia in black sunglasses and a pearl necklace walks along a city street at dusk", reel: "https://www.instagram.com/reel/DdFE2pdq_JR/", date: "2026" },
    { id: "Da7a-I3NSek", platform: "instagram", cat: "events", image: "assets/img/reels/yacht.jpg", title: "Is it better?", brand: "", caption: "Is it better?", alt: "Lelia in a white t-shirt and grey skirt in a mirror inside a wood-panelled cabin", reel: "https://www.instagram.com/reel/Da7a-I3NSek/", date: "2026" },
    /* TikTok — cover originali, views pubbliche al 13 Oct 2026 */
    { id: "tt-7592984230288706838", platform: "tiktok", cat: "tryon", image: "assets/img/tiktok/7592984230288706838.jpg", title: "Con questo addosso", brand: "", caption: "🧔🏻‍♂️: oggi voglio vederti con questo addosso 😍", alt: "Lelia in a long black backless dress in a hotel corridor", reel: "https://www.tiktok.com/@lelusham/video/7592984230288706838", date: "2026", views: 660600 },
    { id: "tt-7518712856477601046", platform: "tiktok", cat: "tryon", image: "assets/img/tiktok/7518712856477601046.jpg", title: "La Passeggiata, unboxed", brand: "The Attico", caption: "La passeggiata @The Attico 🤍 #unboxingvideo", alt: "Lelia holds a black The Attico shopping bag on a bridge in Venice", reel: "https://www.tiktok.com/@lelusham/video/7518712856477601046", date: "2025", views: 11900 },
    { id: "tt-7690337965490408737", platform: "tiktok", cat: "events", image: "assets/img/tiktok/7690337965490408737.jpg", title: "Best friend photoshoot", brand: "", caption: "The difference between a fake friend and a best friend 😂📸 Good dress = serious photoshoot", alt: "Lelia in a long black dress poses by the sea while a friend takes photos", reel: "https://www.tiktok.com/@lelusham/video/7690337965490408737", date: "2026", views: 1951 },
    { id: "tt-7690142031728954657", platform: "tiktok", cat: "events", image: "assets/img/tiktok/7690142031728954657.jpg", title: "MFW, remotely", brand: "The Attico", caption: "Come with me to @The Attico new show during MFW… remotely :)", alt: "A screen in a showroom shows the words Come with me to The Attico's new show during MFW", reel: "https://www.tiktok.com/@lelusham/video/7690142031728954657", date: "2026", views: 653 },
    { id: "tt-7689895624593902881", platform: "tiktok", cat: "tryon", image: "assets/img/tiktok/7689895624593902881.jpg", title: "Wishlist try-on, Ibiza", brand: "The Attico", caption: "Trying on my wishlist items from @The Attico boutique in Ibz 💜", alt: "Lelia in a violet dress beside the window of a boutique", reel: "https://www.tiktok.com/@lelusham/video/7689895624593902881", date: "2026", views: 535 },
    { id: "tt-7690305161398471969", platform: "tiktok", cat: "events", image: "assets/img/tiktok/7690305161398471969.jpg", title: "Dinner plans", brand: "", caption: "What are we gonna make for dinner: @Miss_zalata", alt: "Lelia and a friend in evening dresses on a terrace by the sea", reel: "https://www.tiktok.com/@lelusham/video/7690305161398471969", date: "2026", views: 491 },
    { id: "tt-7691043070686547232", platform: "tiktok", cat: "lifestyle", image: "assets/img/tiktok/7691043070686547232.jpg", title: "Sweet 18", brand: "", caption: "Sweet 18 🎂", alt: "Lelia at a table with a stack of pancakes and a birthday candle", reel: "https://www.tiktok.com/@lelusham/video/7691043070686547232", date: "2026", views: 444 },
    { id: "tt-7693176747478502689", platform: "tiktok", cat: "events", image: "assets/img/tiktok/7693176747478502689.jpg", title: "No matching bags", brand: "", caption: "POV: we said no matching bags today", alt: "Lelia in a black evening outfit in a lantern-lit courtyard at night", reel: "https://www.tiktok.com/@lelusham/video/7693176747478502689", date: "2026", views: 431 },
    { id: "tt-7694372234218982688", platform: "tiktok", cat: "lifestyle", image: "assets/img/tiktok/7694372234218982688.jpg", title: "Get up, diva", brand: "", caption: "", alt: "Lelia in a strapless top wrapped in a sheet, with the words get up diva overlaid", reel: "https://www.tiktok.com/@lelusham/video/7694372234218982688", date: "2026", views: 419 },
    { id: "tt-7692833514055634209", platform: "tiktok", cat: "events", image: "assets/img/tiktok/7692833514055634209.jpg", title: "Riad, pink and pink", brand: "", caption: "", alt: "Lelia and a friend in pink outfits walk through a riad courtyard", reel: "https://www.tiktok.com/@lelusham/video/7692833514055634209", date: "2026", views: 418 },
    { id: "tt-7692832292498181409", platform: "tiktok", cat: "lifestyle", image: "assets/img/tiktok/7692832292498181409.jpg", title: "My biggest problem", brand: "", caption: "my biggest problem", alt: "Lelia lying down wearing a glowing LED face mask", reel: "https://www.tiktok.com/@lelusham/video/7692832292498181409", date: "2026", views: 397 },
    { id: "tt-7692131854585023777", platform: "tiktok", cat: "lifestyle", image: "assets/img/tiktok/7692131854585023777.jpg", title: "Flowers", brand: "", caption: "", alt: "Lelia in a pink top surrounded by bouquets of pink and lilac flowers", reel: "https://www.tiktok.com/@lelusham/video/7692131854585023777", date: "2026", views: 299 }
  ]
};
