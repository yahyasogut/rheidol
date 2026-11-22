(function () {
  "use strict";
  var C = window.GALATA_CONFIG, I = window.GALATA_I18N;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- language ---------- */
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  var q = new URLSearchParams(location.search).get("lang");
  var lang = (q === "tr" || q === "en") ? q : (store("galata-lang") || ((navigator.language || "").toLowerCase().indexOf("tr") === 0 ? "tr" : "en"));
  function t(k) { return (I[lang] && I[lang][k]) || I.en[k] || ""; }
  function pick(o) { return o ? (o[lang] || o.en || "") : ""; }

  function applyLang() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(function (el) { var v = t(el.getAttribute("data-i18n")); if (v) el.innerHTML = v; });
    $$("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
    $$(".lang-toggle button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false"); });
    renderBranches(); renderSheet(); renderMenu();
  }
  $$(".lang-toggle button").forEach(function (b) {
    b.addEventListener("click", function () { lang = b.dataset.lang; store("galata-lang", lang); applyLang(); });
  });

  /* ---------- helpers ---------- */
  function tel(p) { return "tel:" + p.replace(/[^+\d]/g, ""); }
  var ICON = {
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.4 3.2 1.9-.8 1.3L11 13V7h2z"/></svg>'
  };

  /* ---------- locations ---------- */
  function renderBranches() {
    var box = $("#branches"); if (!box) return;
    box.innerHTML = C.branches.map(function (b, i) {
      return '<article class="branch" id="branch-' + b.id + '">' +
        (C.branches.length > 1 ? '<span class="branch-no">0' + (i + 1) + '</span>' : '') +
        '<h3>' + b.name + '</h3><p class="branch-tag">' + pick(b.tagline) + '</p>' +
        '<ul class="branch-info">' +
          '<li>' + ICON.pin + '<address>' + b.address.join("<br>") + '</address></li>' +
          '<li>' + ICON.clock + '<span><strong>' + t("loc.hours") + '</strong><br>' + pick(b.hours) + '</span></li>' +
          '<li>' + ICON.phone + '<a href="' + tel(b.phone) + '">' + b.phone + '</a></li>' +
        '</ul>' +
        '<div class="branch-actions">' +
          '<a class="btn btn-solid" href="' + b.maps + '" target="_blank" rel="noopener">' + ICON.pin + t("loc.directions") + '</a>' +
          '<a class="btn btn-line" href="' + tel(b.phone) + '">' + ICON.phone + t("loc.call") + '</a>' +
        '</div></article>';
    }).join("");
  }

  /* ---------- call sheet (mobile bar) ---------- */
  var sheet = $("#call-sheet");
  function renderSheet() {
    if (!sheet) return;
    $(".sheet-list", sheet).innerHTML = C.branches.map(function (b) {
      return '<a href="' + tel(b.phone) + '"><span><strong>' + b.name + '</strong><small>' + pick(b.hours) + '</small></span>' + ICON.phone + '</a>';
    }).join("");
  }
  function openSheet(o) { if (!sheet) return; sheet.hidden = !o; document.body.classList.toggle("sheet-open", o); if (o) $("a", sheet) && $("a", sheet).focus(); }
  $$("[data-open-sheet]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      if (C.branches.length === 1) { location.href = tel(C.branches[0].phone); return; }
      openSheet(true);
    });
  });
  $$("[data-close-sheet]").forEach(function (b) { b.addEventListener("click", function () { openSheet(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { openSheet(false); setNav(false); } });

  /* ---------- socials ---------- */
  var SOC = {
    instagram: ['Instagram', '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM21.9 8.2c-.1-1.6-.4-3-1.6-4.2S17.7 2.5 16.1 2.4C14.5 2.3 9.5 2.3 7.9 2.4 6.3 2.5 4.9 2.8 3.7 4S2.2 6.6 2.1 8.2C2 9.8 2 14.8 2.1 16.4c.1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.6.1 6.6.1 8.2 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.6.1-6.6 0-8.2zm-2.1 10a3.2 3.2 0 0 1-1.8 1.8c-1.3.5-4.3.4-5.7.4s-4.4.1-5.7-.4a3.2 3.2 0 0 1-1.8-1.8c-.5-1.3-.4-4.3-.4-5.7s-.1-4.4.4-5.7A3.2 3.2 0 0 1 6.3 5c1.3-.5 4.3-.4 5.7-.4s4.4-.1 5.7.4a3.2 3.2 0 0 1 1.8 1.8c.5 1.3.4 4.3.4 5.7s.1 4.4-.4 5.7z"/></svg>'],
    facebook: ['Facebook', '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.6A21 21 0 0 0 14.6 2.5c-2.4 0-4 1.4-4 4.1v1.9H8v3.2h2.6V22H14v-10.3h2.6l.4-3.2z"/></svg>'],
    tiktok: ['TikTok', '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.6 2h-3.3v13.4a2.9 2.9 0 1 1-2-2.8V9.2a6.2 6.2 0 1 0 5.3 6.2V8.6a7.8 7.8 0 0 0 4.4 1.4V6.7a4.4 4.4 0 0 1-4.4-4.7z"/></svg>'],
    google: ['Google Maps', ICON.pin]
  };
  $$("[data-socials]").forEach(function (box) {
    box.innerHTML = Object.keys(SOC).filter(function (k) { return C.social[k]; }).map(function (k) {
      return '<a href="' + C.social[k] + '" target="_blank" rel="noopener" aria-label="' + SOC[k][0] + '">' + SOC[k][1] + '</a>';
    }).join("");
  });
  $$("[data-instagram]").forEach(function (a) { a.href = C.social.instagram; });

  /* ---------- nav ---------- */
  var navBtn = $(".nav-toggle");
  function setNav(o) { if (!navBtn) return; navBtn.setAttribute("aria-expanded", o ? "true" : "false"); document.body.classList.toggle("nav-open", o); }
  if (navBtn) navBtn.addEventListener("click", function () { setNav(navBtn.getAttribute("aria-expanded") !== "true"); });
  $$(".site-nav a").forEach(function (a) { a.addEventListener("click", function () { setNav(false); }); });
  var header = $(".site-header");
  if (header) { var onS = function () { header.classList.toggle("scrolled", window.scrollY > 12); }; window.addEventListener("scroll", onS, { passive: true }); onS(); }

  /* ---------- menu page ---------- */
  var M = window.GALATA_MENU || {};
  var qb = new URLSearchParams(location.search).get("branch");
  var branch = M[qb] ? qb : (C.branches[0] && C.branches[0].id);
  var diet = "all";
  var TAG = { v: "V", vg: "VG", gf: "GF", h: "H" };
  function money(p) { return typeof p === "number" ? "£" + p.toFixed(2) : String(p); }
  function dietOk(it) {
    if (diet === "all") return true;
    var t = it.tags || [];
    if (diet === "v") return t.indexOf("v") > -1 || t.indexOf("vg") > -1;
    return t.indexOf(diet) > -1;
  }
  function dish(it) {
    var price = it.price !== undefined ? '<span class="price">' + money(it.price) + '</span>' : '';
    var multi = it.prices ? '<p class="multi">' + it.prices.map(function (p) { return '<span><small>' + pick(p.label) + '</small> ' + money(p.price) + '</span>'; }).join("") + '</p>' : '';
    var tags = (it.tags && it.tags.length) ? '<span class="dish-tags">' + it.tags.map(function (g) { return '<abbr title="' + t("diet." + g) + '">' + (TAG[g] || g) + '</abbr>'; }).join("") + '</span>' : '';
    return '<li class="dish' + (it.extra ? ' extra' : '') + '"><div class="dish-head"><h3>' + pick(it.name) + tags + '</h3>' +
      (price ? '<span class="dots" aria-hidden="true"></span>' + price : '') + '</div>' +
      (it.desc ? '<p>' + pick(it.desc) + '</p>' : '') + multi + '</li>';
  }
  function renderMenu() {
    var root = $("#menu-root"); if (!root) return;
    var bf = $("#menu-branches"), df = $("#menu-diet"), tabs = $("#menu-tabs");
    if (bf) bf.hidden = C.branches.length < 2;
    if (bf && C.branches.length > 1) {
      bf.innerHTML = C.branches.map(function (b) { return '<button type="button" data-b="' + b.id + '" aria-pressed="' + (branch === b.id) + '">' + b.name + '</button>'; }).join("");
      $$("button", bf).forEach(function (x) { x.onclick = function () { branch = x.dataset.b; diet = "all"; history.replaceState(null, "", "?branch=" + branch + location.hash); renderMenu(); }; });
    }
    var cats = (M[branch] || []).filter(function (c) { return c.items && c.items.length; });
    /* sadece menüde gerçekten geçen diyet etiketleri filtre ve açıklamada gösterilir */
    var present = Object.keys(TAG).filter(function (g) { return cats.some(function (c) { return c.items.some(function (it) { return (it.tags || []).indexOf(g) > -1; }); }); });
    if (present.indexOf(diet) < 0) diet = "all";
    if (df) {
      df.hidden = !cats.length;
      df.innerHTML = [["all", t("diet.all")]].concat(present.map(function (g) { return [g, t("diet." + g)]; })).map(function (f) {
        return '<button type="button" data-d="' + f[0] + '" aria-pressed="' + (diet === f[0]) + '">' + f[1] + '</button>'; }).join("");
      $$("button", df).forEach(function (x) { x.onclick = function () { diet = x.dataset.d; renderMenu(); }; });
    }
    var bobj = C.branches.filter(function (b) { return b.id === branch; })[0] || {};
    if (!cats.length) {
      if (tabs) tabs.innerHTML = "";
      root.innerHTML = '<div class="menu-soon"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M14 40c0-10 8-18 18-18s18 8 18 18M32 14v8M28 14h8M6 40h52M12 50h40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>' +
        '<h2>' + t("menupage.soon.t") + '</h2><p><strong>' + (bobj.name || "") + '</strong> — ' + t("menupage.soon.d") + '</p>' +
        '<p class="soon-actions">' + (bobj.phone ? '<a class="btn btn-solid" href="' + tel(bobj.phone) + '">' + ICON.phone + t("loc.call") + '</a>' : '') +
        ' <a class="btn btn-line" href="' + C.social.instagram + '" target="_blank" rel="noopener">Instagram</a></p></div>';
      return;
    }
    var view = cats.map(function (c) { return { c: c, items: c.items.filter(dietOk) }; }).filter(function (x) { return x.items.length; });
    var groups = [["food", t("menupage.food")], ["drinks", t("menupage.drinks")]];
    if (tabs) tabs.innerHTML = view.map(function (x) { return '<a href="#cat-' + x.c.id + '">' + pick(x.c.title) + '</a>'; }).join("");
    var html = "";
    groups.forEach(function (g) {
      var part = view.filter(function (x) { return (x.c.group || "food") === g[0]; });
      if (!part.length) return;
      html += '<h2 class="menu-group" id="group-' + g[0] + '">' + g[1] + '</h2>';
      html += part.map(function (x) {
        return '<section class="menu-cat" id="cat-' + x.c.id + '"><header><h2>' + pick(x.c.title) + '</h2>' +
          (x.c.price !== undefined ? '<span class="cat-price">' + money(x.c.price) + '</span>' : '') +
          (x.c.note ? '<p>' + pick(x.c.note) + '</p>' : '') + '</header><ul>' + x.items.map(dish).join("") + '</ul></section>';
      }).join("");
    });
    if (!html) html = '<p class="menu-empty">' + t("menupage.none") + '</p>';
    html += '<aside class="menu-legend"><p>' + present.map(function (g) { return '<abbr>' + TAG[g] + '</abbr> ' + t("diet." + g); }).join(" · ") + '</p><p>' + t("menupage.allergy") + '</p></aside>';
    root.innerHTML = html;
  }

  /* ---------- reveal on scroll ---------- */
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { rootMargin: "0px 0px -8% 0px" });
    $$(".reveal").forEach(function (el) { io.observe(el); });
  } else { $$(".reveal").forEach(function (el) { el.classList.add("in"); }); }

  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  applyLang();
})();
