/* ============================================================
   LELUSHAM — Fullscreen slider
   Funzioni: prev/next, indicatori, contatore, tastiera (← → Space),
   swipe touch, autoplay con pausa, pausa su hover/focus/tab nascosta,
   rispetto di prefers-reduced-motion (niente autoplay).
   ============================================================ */
(function () {
  "use strict";
  const root = document.querySelector("[data-slider]");
  if (!root || !window.LELUSHAM) return;

  const data = window.LELUSHAM.slides;
  const slidesEl = root.querySelector(".slides");
  const dotsEl = root.querySelector(".dots");
  const counterEl = root.querySelector(".counter");
  const liveEl = root.querySelector("[data-live]");
  const btnPrev = root.querySelector("[data-prev]");
  const btnNext = root.querySelector("[data-next]");
  const btnPlay = root.querySelector("[data-toggle-play]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const AUTOPLAY_MS = 6000;

  let index = 0;
  let timer = null;
  let paused = reduceMotion;          // con reduced-motion l'autoplay parte spento
  let userPaused = reduceMotion;      // pausa esplicita dell'utente (bottone)

  /* --- Render --- */
  data.forEach((s, i) => {
    const slide = document.createElement("article");
    slide.className = "slide";
    slide.setAttribute("role", "group");
    slide.setAttribute("aria-roledescription", "slide");
    slide.setAttribute("aria-label", `${i + 1} di ${data.length}`);
    slide.id = `slide-${s.id}`;
    slide.innerHTML = `
      <div class="slide-bg" style="background-image:url('${s.image}')" aria-hidden="true"></div>
      <div class="slide-grid">
        <div class="slide-copy">
          <span class="eyebrow reveal">${s.eyebrow}</span>
          <h${i === 0 ? "1" : "2"} class="slide-title display reveal">${s.title}</h${i === 0 ? "1" : "2"}>
          <p class="slide-text reveal">${s.text}</p>
          <div class="slide-actions reveal on-dark">
            <a class="btn btn-primary" href="social-kit.html">Explore the Social Kit</a>
            <a class="btn btn-ghost" href="${window.LELUSHAM.brand.instagram}" target="_blank" rel="noopener">Instagram</a>
          </div>
        </div>
        <figure class="slide-figure">
          <img src="${s.image}" alt="${s.alt}" ${i === 0 ? 'fetchpriority="high" decoding="async"' : 'loading="lazy" decoding="async"'} width="360" height="640">
          <figcaption><a href="${s.reel}" target="_blank" rel="noopener">${s.caption}</a></figcaption>
        </figure>
      </div>`;
    slidesEl.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Vai alla slide ${i + 1}`);
    dot.addEventListener("click", () => go(i, true));
    dotsEl.appendChild(dot);
  });

  const slides = Array.from(slidesEl.children);
  const dots = Array.from(dotsEl.children);
  root.style.setProperty("--autoplay", AUTOPLAY_MS + "ms");

  function pad(n) { return String(n).padStart(2, "0"); }

  function go(i, byUser) {
    index = (i + data.length) % data.length;
    slides.forEach((el, k) => {
      const active = k === index;
      el.classList.toggle("is-active", active);
      el.setAttribute("aria-hidden", active ? "false" : "true");
      // i link delle slide non attive escono dal tab order
      el.querySelectorAll("a, button").forEach(a => a.tabIndex = active ? 0 : -1);
    });
    dots.forEach((d, k) => {
      d.classList.toggle("is-active", k === index);
      d.setAttribute("aria-current", k === index ? "true" : "false");
    });
    if (counterEl) counterEl.innerHTML = `${pad(index + 1)} <span>/ ${pad(data.length)}</span>`;
    if (liveEl) liveEl.textContent = `Slide ${index + 1} di ${data.length}: ${data[index].title.replace(/<br\s*\/?>/g, " ")}`;
    // riavvia la barra di progresso del dot attivo
    const d = dots[index];
    d.classList.remove("is-active"); void d.offsetWidth; d.classList.add("is-active");
    restart();
    if (byUser) root.focus({ preventScroll: true });
  }

  /* --- Autoplay --- */
  function tick() { if (!paused) go(index + 1); }
  function restart() {
    clearInterval(timer);
    if (!paused) timer = setInterval(tick, AUTOPLAY_MS);
  }
  function setPaused(v, fromUser) {
    if (fromUser) userPaused = v;
    paused = v || userPaused;
    root.classList.toggle("is-paused", paused);
    if (btnPlay) {
      btnPlay.setAttribute("aria-pressed", paused ? "true" : "false");
      btnPlay.setAttribute("aria-label", paused ? "Riprendi autoplay" : "Metti in pausa autoplay");
    }
    restart();
  }

  btnPrev && btnPrev.addEventListener("click", () => go(index - 1, true));
  btnNext && btnNext.addEventListener("click", () => go(index + 1, true));
  btnPlay && btnPlay.addEventListener("click", () => setPaused(!userPaused, true));

  /* --- Tastiera --- */
  root.addEventListener("keydown", (e) => {
    if (e.target.closest("input, textarea")) return;
    if (e.key === "ArrowRight") { e.preventDefault(); go(index + 1, true); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); go(index - 1, true); }
    else if (e.key === " " && e.target === root) { e.preventDefault(); setPaused(!userPaused, true); }
  });

  /* --- Swipe --- */
  let sx = 0, sy = 0, swiping = false;
  root.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; swiping = true; }, { passive: true });
  root.addEventListener("touchend", (e) => {
    if (!swiping) return; swiping = false;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) go(index + (dx < 0 ? 1 : -1), true);
  }, { passive: true });

  /* --- Pausa su hover del contenuto, focus dentro, tab nascosta --- */
  root.addEventListener("mouseenter", () => setPaused(true));
  root.addEventListener("mouseleave", () => setPaused(false));
  root.addEventListener("focusin", () => setPaused(true));
  root.addEventListener("focusout", (e) => { if (!root.contains(e.relatedTarget)) setPaused(false); });
  document.addEventListener("visibilitychange", () => setPaused(document.hidden));

  /* --- Init --- */
  root.setAttribute("aria-roledescription", "carousel");
  root.setAttribute("aria-label", "Highlights");
  root.tabIndex = 0;
  if (reduceMotion) root.classList.add("no-autoplay");
  go(0);
  setPaused(paused, reduceMotion);
})();
