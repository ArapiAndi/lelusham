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
      if (open) { nav.querySelector("a").focus(); } else { toggle.focus(); }
    };
    toggle.addEventListener("click", () => setOpen(!document.body.classList.contains("menu-open")));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && document.body.classList.contains("menu-open")) setOpen(false); });
    // pagina corrente
    const here = location.pathname.split("/").pop() || "index.html";
    $$("a", nav).forEach(a => { if (a.getAttribute("href") === here) a.setAttribute("aria-current", "page"); });
  }

  /* --- Link dinamici dal contenuto (email, instagram) --- */
  $$("[data-ig]").forEach(a => a.href = C.brand.instagram);
  $$("[data-email]").forEach(a => { a.href = "mailto:" + C.brand.email; if (!a.dataset.keep) a.textContent = C.brand.email; });

  /* --- Card helper --- */
  const playIcon = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 1l9 5-9 5z" fill="currentColor"/></svg>';
  function card(item, i, eager) {
    return `<a class="card fade-up" href="${item.reel}" data-id="${item.id}" data-cat="${item.cat}" target="_blank" rel="noopener" style="transition-delay:${(i % 4) * 70}ms">
      <img src="${item.image}" alt="${item.alt}" width="360" height="640" ${eager ? 'decoding="async"' : 'loading="lazy" decoding="async"'}>
      <span class="play" aria-hidden="true">${playIcon}</span>
      <span class="card-meta"><strong>${item.title}</strong><span>${item.brand || C.categories.find(c => c.id === item.cat).label}</span></span>
    </a>`;
  }

  /* --- Preview galleria in home --- */
  const preview = $("[data-kit-preview]");
  if (preview) preview.innerHTML = C.kit.slice(0, 4).map((it, i) => card(it, i, false)).join("");

  /* --- Social Kit: filtri + griglia + dettaglio --- */
  const grid = $("[data-kit-grid]");
  if (grid) {
    const filters = $("[data-kit-filters]");
    grid.innerHTML = C.kit.map((it, i) => card(it, i, i < 4)).join("");
    filters.innerHTML = C.categories.map(c => `<button type="button" class="chip" data-cat="${c.id}" aria-pressed="${c.id === "all"}">${c.label}</button>`).join("");
    const count = $("[data-kit-count]");
    const applyFilter = (cat) => {
      let n = 0;
      $$(".card", grid).forEach(el => { const show = cat === "all" || el.dataset.cat === cat; el.classList.toggle("is-hidden", !show); if (show) n++; });
      $$(".chip", filters).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.cat === cat)));
      if (count) count.textContent = `${n} ${n === 1 ? "reel" : "reels"}`;
      history.replaceState(null, "", cat === "all" ? location.pathname : `#${cat}`);
    };
    filters.addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (b) applyFilter(b.dataset.cat); });
    const initial = location.hash.replace("#", "");
    applyFilter(C.categories.some(c => c.id === initial) ? initial : "all");

    /* Dettaglio: <dialog> nativo. Click sulla card apre il dettaglio; il link al reel resta nel dettaglio. */
    const dlg = $("[data-detail]");
    if (dlg && typeof dlg.showModal === "function") {
      let cur = 0;
      const visible = () => $$(".card:not(.is-hidden)", grid).map(el => el.dataset.id);
      const render = (id) => {
        const it = C.kit.find(k => k.id === id);
        $("[data-d-img]", dlg).src = it.image;
        $("[data-d-img]", dlg).alt = it.alt;
        $("[data-d-eyebrow]", dlg).textContent = [it.brand, C.categories.find(c => c.id === it.cat).label, it.date].filter(Boolean).join(" · ");
        $("[data-d-title]", dlg).textContent = it.title;
        $("[data-d-caption]", dlg).textContent = it.caption ? "“" + it.caption + "”" : "";
        $("[data-d-link]", dlg).href = it.reel;
        const list = visible(); cur = list.indexOf(id);
        $("[data-d-counter]", dlg).textContent = `${cur + 1} / ${list.length}`;
      };
      grid.addEventListener("click", (e) => {
        const a = e.target.closest(".card"); if (!a) return;
        e.preventDefault(); render(a.dataset.id); dlg.showModal();
      });
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

  /* --- Reveal on scroll --- */
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = $$(".fade-up");
  if (reduce || !("IntersectionObserver" in window)) targets.forEach(t => t.classList.add("in"));
  else {
    const io = new IntersectionObserver((entries) => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: .1 });
    targets.forEach(t => io.observe(t));
  }

  /* --- Anno footer --- */
  $$("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
})();
