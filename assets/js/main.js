/* ============================================================
   LELUSHAM — Navigazione, galleria Social Kit, dettaglio, reveal
   ============================================================ */
(function () {
  "use strict";
  const C = window.LELUSHAM;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* --- Menu --- */
  const toggle = $("[data-menu-toggle]");
  const nav = $("#site-nav");
  if (toggle && nav) {
    const setOpen = (open) => {
      document.body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector(".label").textContent = open ? "Close" : "Menu";
      if (open) { nav.querySelector("a").focus({ preventScroll: true }); } else { toggle.focus({ preventScroll: true }); } // senza preventScroll Safari scorre i <li> overflow:hidden e i link spariscono
    };
    toggle.addEventListener("click", () => setOpen(!document.body.classList.contains("menu-open")));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && document.body.classList.contains("menu-open")) setOpen(false); });
    // pagina corrente
    const here = location.pathname.split("/").pop() || "index.html";
    $$("a", nav).forEach(a => { if (a.getAttribute("href") === here) a.setAttribute("aria-current", "page"); });
  }

  /* --- Link dinamici dal contenuto (email, instagram) --- */
  $$("[data-ig]").forEach(a => a.href = C.brand.instagram);
  $$("[data-tt]").forEach(a => a.href = C.brand.tiktok);
  $$("[data-email]").forEach(a => { a.href = "mailto:" + C.brand.email; if (!("keep" in a.dataset)) a.textContent = C.brand.email; });

  /* --- Audience, What I offer, My value (da content.js) --- */
  const stats = $("[data-stats]");
  if (stats) stats.innerHTML = C.stats.filter(x => x.value).map((x, i) => `<div class="stat fade-up" style="transition-delay:${i * 70}ms"><dt>${x.label}</dt><dd class="display">${x.value}</dd><small>${x.note}</small></div>`).join("");
  const statsNote = $("[data-stats-note]");
  if (statsNote) statsNote.textContent = C.statsNote;
  const list = (sel, items, cls) => { const el = $(sel); if (el) el.innerHTML = items.map((x, i) => `<li class="${cls} fade-up" style="transition-delay:${(i % 3) * 70}ms"><h3>${x.title}</h3><p>${x.text}</p></li>`).join(""); };
  list("[data-services]", C.services, "offer");
  list("[data-value]", C.value, "val");
  $$("[data-services-note]").forEach(el => el.textContent = C.servicesNote || "");
  $$("[data-media-kit]").forEach(a => a.href = C.brand.mediaKit);

  /* --- Card helper --- */
  const fmt = (n) => n >= 1e6 ? (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M" : n >= 1e3 ? (n / 1e3).toFixed(n < 1e4 ? 1 : 0).replace(/\.0$/, "") + "K" : String(n);
  const platformName = (it) => it.platform === "tiktok" ? "TikTok" : "Instagram";
  const playIcon = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 1l9 5-9 5z" fill="currentColor"/></svg>';
  function card(item, i, eager) {
    return `<a class="card fade-up" href="${item.reel}" data-id="${item.id}" data-cat="${item.cat}" data-platform="${item.platform || "instagram"}" target="_blank" rel="noopener" style="--d:${(i % 4) * 70}ms;--i:${i}">
      <img src="${item.image}" alt="${item.alt}" width="720" height="1280" ${eager ? 'decoding="async"' : 'loading="lazy" decoding="async"'}>
      ${item.clip ? `<video class="clip" muted playsinline loop preload="none" aria-hidden="true" width="360" height="640"><source src="${item.clip}" type="video/mp4"></video>` : ""}
      <span class="play" aria-hidden="true">${playIcon}</span>
      <span class="badge">${item.platform === "tiktok" ? "TikTok" : "Instagram"}${item.views ? " · " + fmt(item.views) : ""}</span>
      <span class="card-meta"><strong>${item.title}</strong><span>${item.brand || C.categories.find(c => c.id === item.cat).label}</span></span>
    </a>`;
  }

  /* --- Preview galleria in home --- */
  const preview = $("[data-kit-preview]");
  if (preview) { const ig = C.kit.filter(k => k.platform !== "tiktok").slice(0, 2), tt = C.kit.filter(k => k.platform === "tiktok").slice(0, 2); preview.innerHTML = [ig[0], tt[0], ig[1], tt[1]].filter(Boolean).map((it, i) => card(it, i, false)).join(""); }

  /* --- Social Kit: filtri + griglia + dettaglio --- */
  const grid = $("[data-kit-grid]");
  if (grid) {
    const filters = $("[data-kit-filters]");
    grid.innerHTML = C.kit.map((it, i) => card(it, i, i < 4)).join("");
    const pfilters = $("[data-kit-platforms]");
    filters.innerHTML = C.categories.map(c => `<button type="button" class="chip" data-cat="${c.id}" aria-pressed="${c.id === "all"}">${c.label}</button>`).join("");
    if (pfilters) pfilters.innerHTML = C.platforms.map(c => `<button type="button" class="chip" data-platform="${c.id}" aria-pressed="${c.id === "all"}">${c.label}</button>`).join("");
    const count = $("[data-kit-count]");
    let curCat = "all", curPlat = "all";
    const applyFilter = () => {
      let n = 0;
      $$(".card", grid).forEach(el => { const show = (curCat === "all" || el.dataset.cat === curCat) && (curPlat === "all" || el.dataset.platform === curPlat); el.classList.toggle("is-hidden", !show); if (show) n++; });
      $$(".chip", filters).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.cat === curCat)));
      if (pfilters) $$(".chip", pfilters).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.platform === curPlat)));
      if (count) count.textContent = `${n} ${n === 1 ? "video" : "videos"}`;
      const h = [curPlat !== "all" ? curPlat : "", curCat !== "all" ? curCat : ""].filter(Boolean).join("+");
      history.replaceState(null, "", h ? `#${h}` : location.pathname);
    };
    filters.addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (b) { curCat = b.dataset.cat; applyFilter(); } });
    pfilters && pfilters.addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (b) { curPlat = b.dataset.platform; applyFilter(); } });
    location.hash.replace("#", "").split("+").forEach(h => { if (C.categories.some(c => c.id === h)) curCat = h; if (C.platforms.some(c => c.id === h)) curPlat = h; });
    applyFilter();

    /* Dettaglio: <dialog> nativo. Click sulla card apre il dettaglio; il link al reel resta nel dettaglio. */
    const dlg = $("[data-detail]");
    if (dlg && typeof dlg.showModal === "function") {
      let cur = 0;
      const visible = () => $$(".card:not(.is-hidden)", grid).map(el => el.dataset.id);
      const render = (id) => {
        const it = C.kit.find(k => k.id === id);
        $("[data-d-img]", dlg).src = it.image;
        $("[data-d-img]", dlg).alt = it.alt;
        const fr = $("[data-d-frame]", dlg);
        if (fr) { fr.classList.remove("is-ready"); fr.src = it.reel.replace(/\/?$/, "/") + "embed/"; }
        $("[data-d-platform]", dlg).textContent = platformName(it);
        $("[data-d-cat]", dlg).textContent = C.categories.find(c => c.id === it.cat).label;
        $("[data-d-brand]", dlg).textContent = it.brand ? "for " + it.brand : "";
        $("[data-d-date]", dlg).textContent = it.date || "";
        $("[data-d-views]", dlg).textContent = it.views ? fmt(it.views) + " views" : "";
        $("[data-d-link]", dlg).textContent = "Watch on " + platformName(it);
        $("[data-d-title]", dlg).textContent = it.title;
        $("[data-d-link]", dlg).href = it.reel;
        const list = visible(); cur = list.indexOf(id);
        $("[data-d-counter]", dlg).textContent = `${cur + 1} / ${list.length}`;
      };
      grid.addEventListener("click", (e) => {
        const a = e.target.closest(".card"); if (!a) return;
        e.preventDefault(); render(a.dataset.id); dlg.showModal();
      });
      const fr = $("[data-d-frame]", dlg);
      if (fr) fr.addEventListener("load", () => { if (fr.src) fr.classList.add("is-ready"); });
      dlg.addEventListener("close", () => { if (fr) { fr.classList.remove("is-ready"); fr.removeAttribute("src"); } });
      $("[data-d-close]", dlg).addEventListener("click", () => dlg.close());
      $("[data-d-prev]", dlg).addEventListener("click", () => { const l = visible(); render(l[(cur - 1 + l.length) % l.length]); });
      $("[data-d-next]", dlg).addEventListener("click", () => { const l = visible(); render(l[(cur + 1) % l.length]); });
      dlg.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") $("[data-d-next]", dlg).click();
        if (e.key === "ArrowLeft") $("[data-d-prev]", dlg).click();
      });
      dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
    }
  }

  /* --- Clip dei reel: play solo quando la card è visibile --- */
  const clips = $$(".card video.clip");
  if (clips.length && "IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    clips.forEach(v => v.addEventListener("playing", () => v.classList.add("is-playing")));
    const vio = new IntersectionObserver((entries) => entries.forEach(en => {
      const v = en.target;
      if (en.isIntersecting) { v.preload = "auto"; v.play().catch(() => {}); } else v.pause();
    }), { threshold: .25 });
    clips.forEach(v => vio.observe(v));
  }

  /* --- Reveal on scroll --- */
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = $$(".fade-up");
  if (reduce || !("IntersectionObserver" in window)) targets.forEach(t => t.classList.add("in"));
  else {
    const io = new IntersectionObserver((entries) => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: .1 });
    targets.forEach(t => io.observe(t));
  }

  /* --- Count-up numeri audience (7.7K, 2.2M...) --- */
  const nums = $$("[data-stats] dd");
  if (nums.length && !reduce && "IntersectionObserver" in window) {
    const run = (el) => {
      const [, n, suf] = el.dataset.final.match(/^([\d.]+)(.*)$/) || [];
      if (!n) { el.textContent = el.dataset.final; return; }
      const dec = (n.split(".")[1] || "").length, end = +n, t0 = performance.now(), dur = 1600;
      el.classList.add("counting");
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        el.textContent = (end * (1 - (1 - p) ** 3)).toFixed(dec) + suf;
        if (p < 1) requestAnimationFrame(tick); else el.classList.remove("counting");
      };
      requestAnimationFrame(tick);
    };
    const cio = new IntersectionObserver((entries) => entries.forEach(en => { if (en.isIntersecting) { run(en.target); cio.unobserve(en.target); } }), { threshold: .5 });
    nums.forEach(el => {
      el.dataset.final = el.textContent;
      el.setAttribute("aria-label", el.textContent);
      el.textContent = el.textContent.replace(/[\d.]+/, m => (0).toFixed((m.split(".")[1] || "").length));
      cio.observe(el);
    });
  }

  /* --- Anno footer --- */
  $$("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
})();
