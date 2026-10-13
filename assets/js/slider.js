/* ============================================================
   LELUSHAM — Fullscreen slider
   Funzioni: slide video d'apertura, prev/next, indicatori, contatore,
   tastiera (← → Space), swipe touch, autoplay con durata per slide,
   pausa su focus/tab nascosta, rispetto di prefers-reduced-motion.
   ============================================================ */
(function () {
  "use strict";
  const root = document.querySelector("[data-slider]");
  if (!root || !window.LELUSHAM) return;

  const C = window.LELUSHAM;
  const data = C.slides;
  const slidesEl = root.querySelector(".slides");
  const dotsEl = root.querySelector(".dots");
  const counterEl = root.querySelector(".counter");
  const liveEl = root.querySelector("[data-live]");
  const btnPrev = root.querySelector("[data-prev]");
  const btnNext = root.querySelector("[data-next]");
  const btnPlay = root.querySelector("[data-toggle-play]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const AUTOPLAY_MS = 6000;
  const duration = (i) => data[i].duration || AUTOPLAY_MS;

  let index = 0;
  let timer = null;
  let userPaused = reduceMotion;      // pausa esplicita dell'utente (bottone); con reduced-motion parte in pausa
  const holds = new Set();            // pause automatiche: "focus", "hidden", "offscreen"
  const isPaused = () => userPaused || holds.size > 0;

  const actions = `
    <div class="slide-actions reveal on-dark">
      <a class="btn btn-primary" href="social-kit.html">Explore the Social Kit</a>
      <a class="btn btn-ghost" href="${C.brand.instagram}" target="_blank" rel="noopener">Instagram</a>
    </div>`;

  /* --- Template --- */
  function videoSlide(s) {
    return `
      <div class="slide-bg" style="background-image:url('${s.image}')" aria-hidden="true"></div>
      <figure class="intro-media">
        <video muted playsinline loop preload="auto" poster="${s.image}" aria-label="${s.alt}" width="720" height="1280">
          <source src="${s.video.webm}" type="video/webm">
          <source src="${s.video.mp4}" type="video/mp4">
        </video>
      </figure>
      <div class="intro-copy">
        <span class="eyebrow reveal">${s.eyebrow}</span>
        <h1 class="intro-title display reveal">${s.title}</h1>
        <p class="intro-text reveal"><span class="serif-i">${s.text}</span>${s.sub ? `<span class="intro-sub">${s.sub}</span>` : ""}</p>
        ${actions}
      </div>`;
  }
  function imageSlide(s, i) {
    const h = i === 0 ? "h1" : "h2";
    return `
      <div class="slide-bg" style="background-image:url('${s.image}')" aria-hidden="true"></div>
      <div class="slide-grid">
        <div class="slide-copy">
          <span class="eyebrow reveal">${s.eyebrow}</span>
          <${h} class="slide-title display reveal">${s.title}</${h}>
          <p class="slide-text reveal">${s.text}</p>
          ${actions}
        </div>
        <figure class="slide-figure">
          <img src="${s.image}" alt="${s.alt}" ${i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" width="720" height="1280">
          <figcaption><a href="${s.reel}" target="_blank" rel="noopener">${s.caption}</a></figcaption>
        </figure>
      </div>`;
  }

  /* --- Render --- */
  data.forEach((s, i) => {
    const slide = document.createElement("article");
    slide.className = "slide" + (s.type === "video" ? " slide--video" : "");
    slide.setAttribute("role", "group");
    slide.setAttribute("aria-roledescription", "slide");
    slide.setAttribute("aria-label", `${i + 1} of ${data.length}`);
    slide.id = `slide-${s.id}`;
    slide.innerHTML = s.type === "video" ? videoSlide(s) : imageSlide(s, i);
    slidesEl.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.style.setProperty("--autoplay", duration(i) + "ms");
    dot.addEventListener("click", () => go(i, true));
    dotsEl.appendChild(dot);
  });

  const slides = Array.from(slidesEl.children);
  const dots = Array.from(dotsEl.children);
  const videos = slides.map(el => el.querySelector("video"));

  function pad(n) { return String(n).padStart(2, "0"); }

  /* Il video gira solo se la sua slide è attiva e l'utente non ha messo in pausa */
  function syncVideos() {
    videos.forEach((v, k) => {
      if (!v) return;
      if (k === index && !userPaused && !reduceMotion && !holds.has("hidden") && !holds.has("offscreen")) {
        const p = v.play(); if (p) p.catch(() => {});
      } else v.pause();
    });
  }

  function go(i, byUser) {
    index = (i + data.length) % data.length;
    slides.forEach((el, k) => {
      const active = k === index;
      el.classList.toggle("is-active", active);
      el.setAttribute("aria-hidden", active ? "false" : "true");
      el.inert = !active;
    });
    dots.forEach((d, k) => {
      d.classList.toggle("is-active", k === index);
      d.setAttribute("aria-current", k === index ? "true" : "false");
    });
    if (counterEl) counterEl.innerHTML = `${pad(index + 1)} <span>/ ${pad(data.length)}</span>`;
    if (liveEl) liveEl.textContent = `Slide ${index + 1} of ${data.length}: ${data[index].title.replace(/<br\s*\/?>/g, " ")}`;
    const v = videos[index]; if (v && byUser) v.currentTime = 0;
    // riavvia la barra di progresso del dot attivo
    const d = dots[index];
    d.classList.remove("is-active"); void d.offsetWidth; d.classList.add("is-active");
    syncVideos();
    restart();
    if (byUser) root.focus({ preventScroll: true });
  }

  /* --- Autoplay (timeout: ogni slide ha la sua durata) --- */
  function restart() {
    clearTimeout(timer);
    if (!isPaused()) timer = setTimeout(() => go(index + 1), duration(index));
  }
  function update() {
    const paused = isPaused();
    root.classList.toggle("is-paused", paused);          // ferma la barra di progresso
    root.classList.toggle("is-user-paused", userPaused); // icona del bottone = scelta dell'utente
    if (btnPlay) {
      btnPlay.setAttribute("aria-pressed", userPaused ? "true" : "false");
      btnPlay.setAttribute("aria-label", userPaused ? "Resume autoplay" : "Pause autoplay");
    }
    syncVideos();
    restart();
  }

  btnPrev && btnPrev.addEventListener("click", () => go(index - 1, true));
  btnNext && btnNext.addEventListener("click", () => go(index + 1, true));
  function toggleUser() { userPaused = !userPaused; update(); }
  function hold(name, on) { on ? holds.add(name) : holds.delete(name); update(); }
  btnPlay && btnPlay.addEventListener("click", toggleUser);

  /* --- Tastiera --- */
  root.addEventListener("keydown", (e) => {
    if (e.target.closest("input, textarea")) return;
    if (e.key === "ArrowRight") { e.preventDefault(); go(index + 1, true); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); go(index - 1, true); }
    else if (e.key === " " && e.target === root) { e.preventDefault(); toggleUser(); }
  });

  /* --- Swipe --- */
  let sx = 0, sy = 0, swiping = false;
  root.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; swiping = true; }, { passive: true });
  root.addEventListener("touchend", (e) => {
    if (!swiping) return; swiping = false;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) go(index + (dx < 0 ? 1 : -1), true);
  }, { passive: true });

  /* --- Pausa con focus da tastiera dentro lo slider e con tab nascosta.
         (Niente pausa su hover: l'hero è a tutto schermo e l'autoplay non partirebbe mai.) --- */
  root.addEventListener("focusin", (e) => { if (e.target !== root && e.target.matches(":focus-visible")) hold("focus", true); });
  root.addEventListener("focusout", (e) => { if (!root.contains(e.relatedTarget)) hold("focus", false); });
  document.addEventListener("visibilitychange", () => hold("hidden", document.hidden));

  /* --- Slider fuori viewport: ferma video e timer --- */
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([en]) => hold("offscreen", !en.isIntersecting)).observe(root);
  }

  /* --- Init --- */
  root.setAttribute("aria-roledescription", "carousel");
  root.setAttribute("aria-label", "Highlights");
  root.tabIndex = 0;
  if (reduceMotion) root.classList.add("no-autoplay");
  go(0);
  update();
})();
