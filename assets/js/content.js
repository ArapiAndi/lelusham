/* ============================================================
   LELUSHAM — CONTENT
   Tutto il contenuto editabile del sito vive qui.
   Le immagini sono i frame di copertina dei reel inviati da Lelia
   (360×640). Sostituirle con export originali 1080×1920 mantenendo
   gli stessi nomi file in assets/img/reels/.
   ============================================================ */
window.LELUSHAM = {
  brand: {
    name: "LELUSHAM",
    fullName: "Lelia M",
    handle: "@lelusham",
    instagram: "https://www.instagram.com/lelusham/",
    email: "leliamoroz.pr@gmail.com",
    tagline: "Full-time diva",
    descriptor: "Fashion & lifestyle",
    city: "Milan, Italy"
  },

  /* HOME — slide del fullscreen slider (ordine = ordine di visualizzazione) */
  slides: [
    {
      id: "wishlist",
      image: "assets/img/reels/attico-croc-bag.jpg",
      alt: "Lelia in a violet printed dress holds up a glossy blue crocodile-embossed bag in front of a green marble wall",
      eyebrow: "Milan · Try-on",
      title: "Full-time<br>diva.",
      text: "Fashion & lifestyle, filmed in Milan. Try-ons, boutique visits and the pieces worth talking about.",
      caption: "Trying on my wishlist items from @theattico boutique 💜",
      reel: "https://www.instagram.com/reel/DdwkQOXqUhA/"
    },
    {
      id: "mfw",
      image: "assets/img/reels/mfw-attico-show.jpg",
      alt: "Lelia in a fluffy orange top sips from a glass in a bright showroom with palm trees behind the window",
      eyebrow: "Fashion Week",
      title: "Come with<br>me to MFW.",
      text: "Milan Fashion Week, shows and showrooms, told from the inside.",
      caption: "Come with me to @theattico new show during MFW… remotely :)",
      reel: "https://www.instagram.com/reel/DdyPiRkthjy/"
    },
    {
      id: "passeggiata",
      image: "assets/img/reels/attico-passeggiata.jpg",
      alt: "Lelia poses in a long violet dress in a boutique lined with shelves of handbags",
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
      alt: "Hands open a white shoe box on a grey sofa, with the words Shoes Make The Fit overlaid",
      title: "Shoes make<br>the fit.",
      text: "Unboxings and first looks, in the language of the reels.",
      caption: "@coperni 🩰",
      reel: "https://www.instagram.com/reel/DdZKq1Eqd7r/"
    },
    {
      id: "street",
      image: "assets/img/reels/white-bag.jpg",
      alt: "A cream oversized bag, a grey t-shirt and black flip-flops on stone steps in Milan",
      eyebrow: "Street · Milano",
      title: "Lo ascolto<br>sempre.",
      text: "Stone, marble and daylight. The city is the set.",
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
    { id: "DdwkQOXqUhA", cat: "tryon", image: "assets/img/reels/attico-croc-bag.jpg", title: "Wishlist try-on", brand: "The Attico", caption: "Trying on my wishlist items from @theattico boutique 💜", alt: "Lelia holds up a glossy blue crocodile-embossed bag in front of a green marble wall", reel: "https://www.instagram.com/reel/DdwkQOXqUhA/", date: "2026" },
    { id: "DdtyOCAKPlI", cat: "tryon", image: "assets/img/reels/attico-passeggiata.jpg", title: "Which Passeggiata bag?", brand: "The Attico", caption: "Which Passeggiata bag? @theattico", alt: "Lelia in a long violet dress in a boutique lined with shelves of handbags", reel: "https://www.instagram.com/reel/DdtyOCAKPlI/", date: "25 Sep 2026" },
    { id: "DdZKq1Eqd7r", cat: "tryon", image: "assets/img/reels/coperni-box.jpg", title: "Shoes make the fit", brand: "Coperni", caption: "@coperni 🩰", alt: "Hands open a white Coperni shoe box on a grey sofa", reel: "https://www.instagram.com/reel/DdZKq1Eqd7r/", date: "2026" },
    { id: "DdyPiRkthjy", cat: "events", image: "assets/img/reels/mfw-attico-show.jpg", title: "MFW, remotely", brand: "The Attico", caption: "Come with me to @theattico new show during MFW… remotely :)", alt: "Lelia in a fluffy orange top in a bright showroom", reel: "https://www.instagram.com/reel/DdyPiRkthjy/", date: "2026" },
    { id: "Dc6XpeTNbOf", cat: "street", image: "assets/img/reels/white-bag.jpg", title: "Lo ascolto sempre", brand: "", caption: "Lo ascolto sempre 🥰", alt: "A cream oversized bag and black flip-flops on stone steps", reel: "https://www.instagram.com/reel/Dc6XpeTNbOf/", date: "2026" },
    { id: "Dc6wd6wNgIu", cat: "street", image: "assets/img/reels/marble-sunglasses.jpg", title: "Marble & sunglasses", brand: "Giuseppe Di Morabito", caption: "dress @giuseppedimorabito_official", alt: "Lelia seen from above wearing white sunglasses against a marble wall", reel: "https://www.instagram.com/reel/Dc6wd6wNgIu/", date: "2026" },
    { id: "DdFE2pdq_JR", cat: "street", image: "assets/img/reels/street-night.jpg", title: "Street, low light", brand: "", caption: "", alt: "Lelia in sunglasses and a grey top walks along an urban street at dusk", reel: "https://www.instagram.com/reel/DdFE2pdq_JR/", date: "2026" },
    { id: "Da7a-I3NSek", cat: "events", image: "assets/img/reels/yacht.jpg", title: "Is it better?", brand: "", caption: "Is it better?", alt: "Lelia in a sequined outfit films herself in a mirror inside a wood-panelled cabin", reel: "https://www.instagram.com/reel/Da7a-I3NSek/", date: "2026" }
  ]
};
