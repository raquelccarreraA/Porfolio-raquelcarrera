// Renderiza la web a partir de CV (js/data.js) en gallego, castellano o inglés. Sin dependencias.
// La portada (index.html) y la página de cada proyecto (proyecto.html?p=slug) comparten este archivo.
(function () {
  const LANGS = ["gl", "es", "en"];

  // Textos de la interfaz (los del CV están en data.js).
  const UI = {
    gl: {
      title: "Raquel Comesaña Carrera · Desenvolvedora Full Stack",
      nav: { proyectos: "Proxectos", "sobre-mi": "Sobre min", trayectoria: "Traxectoria", habilidades: "Habilidades", contacto: "Contacto" },
      projects: "Proxectos", projectsIntro: "O que construín, en produción e premiado. Entra en cada un para ver como está feito.",
      about: "Sobre min", experience: "Experiencia", education: "Formación", skills: "Habilidades", contact: "Falamos?",
      seeProjects: "Ver proxectos", downloadCv: "Descargar CV (PDF)", viewProject: "Ver proxecto", visit: "Visitar a web", repo: "Repositorio",
      back: "Volver a proxectos", onThisPage: "Nesta páxina", expandAll: "Despregar todo", collapseAll: "Pregar todo", gallery: "Capturas",
      next: "Seguinte proxecto", close: "Pechar", notFound: "Non atopo ese proxecto.",
      ctaTitle: "Encaixa o meu perfil no teu equipo?", ctaText: "Teño dispoñibilidade inmediata. Escríbeme e cóntoche máis sobre este proxecto.",
      sec: { about: "Que é", role: "O meu papel", features: "Características", steps: "Como funciona", decisions: "Decisións técnicas", stack: "Ficha técnica", milestones: "Fitos", learnings: "Que aprendín", press: "Na prensa" },
      state: { done: "Feito", progress: "En curso", todo: "Pendente" },
      openMenu: "Abrir menú", closeMenu: "Pechar menú", toDark: "Cambiar a tema escuro", toLight: "Cambiar a tema claro", language: "Idioma"
    },
    es: {
      title: "Raquel Comesaña Carrera · Desarrolladora Full Stack",
      nav: { proyectos: "Proyectos", "sobre-mi": "Sobre mí", trayectoria: "Trayectoria", habilidades: "Habilidades", contacto: "Contacto" },
      projects: "Proyectos", projectsIntro: "Lo que he construido, en producción y premiado. Entra en cada uno para ver cómo está hecho.",
      about: "Sobre mí", experience: "Experiencia", education: "Formación", skills: "Habilidades", contact: "¿Hablamos?",
      seeProjects: "Ver proyectos", downloadCv: "Descargar CV (PDF)", viewProject: "Ver proyecto", visit: "Visitar la web", repo: "Repositorio",
      back: "Volver a proyectos", onThisPage: "En esta página", expandAll: "Desplegar todo", collapseAll: "Plegar todo", gallery: "Capturas",
      next: "Siguiente proyecto", close: "Cerrar", notFound: "No encuentro ese proyecto.",
      ctaTitle: "¿Encaja mi perfil en tu equipo?", ctaText: "Tengo disponibilidad inmediata. Escríbeme y te cuento más sobre este proyecto.",
      sec: { about: "Qué es", role: "Mi papel", features: "Características", steps: "Cómo funciona", decisions: "Decisiones técnicas", stack: "Ficha técnica", milestones: "Hitos", learnings: "Qué he aprendido", press: "En prensa" },
      state: { done: "Hecho", progress: "En curso", todo: "Pendiente" },
      openMenu: "Abrir menú", closeMenu: "Cerrar menú", toDark: "Cambiar a tema oscuro", toLight: "Cambiar a tema claro", language: "Idioma"
    },
    en: {
      title: "Raquel Comesaña Carrera · Full Stack Developer",
      nav: { proyectos: "Projects", "sobre-mi": "About", trayectoria: "Background", habilidades: "Skills", contacto: "Contact" },
      projects: "Projects", projectsIntro: "What I've built, live and award-winning. Open each one to see how it's made.",
      about: "About me", experience: "Experience", education: "Education", skills: "Skills", contact: "Let's talk",
      seeProjects: "See projects", downloadCv: "Download CV (PDF)", viewProject: "View project", visit: "Visit website", repo: "Repository",
      back: "Back to projects", onThisPage: "On this page", expandAll: "Expand all", collapseAll: "Collapse all", gallery: "Screenshots",
      next: "Next project", close: "Close", notFound: "I can't find that project.",
      ctaTitle: "Does my profile fit your team?", ctaText: "I'm available immediately. Write to me and I'll tell you more about this project.",
      sec: { about: "What it is", role: "My role", features: "Features", steps: "How it works", decisions: "Technical decisions", stack: "Tech stack", milestones: "Milestones", learnings: "What I learned", press: "In the press" },
      state: { done: "Done", progress: "In progress", todo: "To do" },
      openMenu: "Open menu", closeMenu: "Close menu", toDark: "Switch to dark theme", toLight: "Switch to light theme", language: "Language"
    }
  };

  // Iconos de trazo (Lucide, licencia ISC), usados en características y botones.
  const ICONS = {
    gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
    highlighter: '<path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    languages: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
    lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    progress: '<path d="M21 12a9 9 0 1 1-6.2-8.6"/>',
    todo: '<circle cx="12" cy="12" r="9" stroke-dasharray="3 3"/>',
    arrow: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    back: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>'
  };
  const icon = (name) => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.lightbulb}</svg>`;

  let lang = detectLang();
  const $ = (id) => document.getElementById(id);
  const page = document.body.dataset.page;
  // Devuelve la versión del idioma actual si el valor es { gl, es, en }; si no, el valor tal cual.
  const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.es : v);
  const ui = () => UI[lang];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const items = (v) => (Array.isArray(v) ? v.map(t) : t(v));
  const list = (v) => `<ul>${items(v).map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
  const chips = (v) => `<div class="chips">${v.map((i) => `<span class="chip">${esc(t(i))}</span>`).join("")}</div>`;
  const button = (href, label, primary, extra = "") => {
    const external = /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "";
    return `<a class="btn${primary ? " btn--primary" : ""}" href="${href}"${external}${extra}>${esc(label)}</a>`;
  };
  const cvButton = () => (CV.links.cv ? button(CV.links.cv, ui().downloadCv, false, " download") : "");
  const projectUrl = (slug) => `proyecto.html?p=${slug}&lang=${lang}`;
  const homeUrl = (hash = "") => (page === "home" ? hash : `index.html?lang=${lang}${hash}`);
  const accent = (p) => `--c1:${p.colors[0]};--c2:${p.colors[1]}`;

  function detectLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(fromUrl)) return fromUrl;
    try {
      const saved = localStorage.getItem("lang");
      if (LANGS.includes(saved)) return saved;
    } catch (e) {}
    for (const l of navigator.languages || [navigator.language]) {
      const code = String(l).slice(0, 2).toLowerCase();
      if (LANGS.includes(code)) return code;
    }
    return "en";
  }

  function renderStatic() {
    document.documentElement.lang = lang;
    document.title = ui().title;
    document.querySelectorAll("[data-nav]").forEach((a) => {
      a.textContent = ui().nav[a.dataset.nav];
      a.setAttribute("href", homeUrl(`#${a.dataset.nav}`));
    });
    document.querySelectorAll(".nav__logo").forEach((a) => a.setAttribute("href", homeUrl("#inicio")));
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = ui()[el.dataset.i18n]));
    $("lang-switch").setAttribute("aria-label", ui().language);
    document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  }

  // ===== Portada =====

  function renderHero() {
    $("hero-location").textContent = t(CV.location);
    const [first, ...rest] = CV.name.split(" ");
    $("hero-name").innerHTML = `${esc(first)} <span class="hl">${esc(rest.join(" "))}</span>`;
    $("hero-role").textContent = t(CV.role);
    $("hero-summary").textContent = t(CV.summary);
    $("hero-actions").innerHTML =
      button("#proyectos", ui().seeProjects, true) +
      cvButton() +
      button(CV.links.linkedin, "LinkedIn") +
      button(CV.links.github, "GitHub");
    $("hero-stats").innerHTML = CV.highlights
      .map((h) => `<div><dt>${esc(t(h.label))}</dt><dd>${esc(h.value)}</dd></div>`)
      .join("");
    $("hero-collage").innerHTML = CV.projects.slice(0, 2).map((p, i) => `
      <a class="collage__piece collage__piece--${i}" href="${projectUrl(p.slug)}" style="${accent(p)}" tabindex="-1" aria-hidden="true">
        <img src="${p.cover.mini}" alt="" loading="lazy">
        <span>${esc(p.name)}</span>
      </a>`).join("");
  }

  function renderContact() {
    $("contact-text").textContent = t(CV.contact);
    $("contact-actions").innerHTML =
      button(`mailto:${CV.links.email}`, CV.links.email, true) +
      cvButton() +
      button(CV.links.linkedin, "LinkedIn");
  }

  function renderAbout() {
    $("letter").innerHTML = t(CV.about)
      .map((p, i) => `<p${i === 0 ? ' class="letter__lead"' : ""}>${esc(p)}</p>`)
      .join("");
  }

  function renderProjects() {
    $("projects-intro").textContent = ui().projectsIntro;
    $("projects").innerHTML = CV.projects.map((p) => `
      <article class="card reveal" style="${accent(p)}">
        <div class="card__media">
          <img src="${p.cover.mini}" alt="${esc(t(p.cover.alt))}" loading="lazy">
          <span class="badge">${esc(t(p.badge))}</span>
        </div>
        <div class="card__body">
          <p class="card__kind">${esc(t(p.kind))}</p>
          <h3><a class="card__link" href="${projectUrl(p.slug)}">${p.icon ? `<img src="${p.icon}" alt="" class="card__icon">` : ""}${esc(p.name)}</a></h3>
          <p class="card__summary">${esc(t(p.summary))}</p>
          ${chips(p.tags)}
          <div class="card__foot">
            <span class="card__phase">${esc(t(p.phase))}</span>
            <span class="card__more">${esc(ui().viewProject)} ${icon("arrow")}</span>
          </div>
        </div>
      </article>`).join("");
  }

  function renderTimeline(target, entries) {
    $(target).innerHTML = entries.map((i) => `
      <div class="tl-item reveal">
        <p class="tl-item__date">${t(i.date).split(" · ").map((d) => `<span>${esc(d)}</span>`).join("")}</p>
        <h3>${esc(t(i.title))}</h3>
        <p class="tl-item__org">${esc(t(i.org))}</p>
        ${i.points ? list(i.points) : ""}
      </div>`).join("");
  }

  function renderSkills() {
    $("skills-grid").innerHTML = CV.skills.map((s) => `
      <div class="skills__group reveal">
        <h3>${esc(t(s.group))}</h3>
        ${chips(s.items)}
      </div>`).join("");
  }

  // ===== Página de proyecto =====

  const open = new Set(["about", "role", "features"]); // secciones desplegadas al entrar

  function sectionTitle(s) {
    return s.title ? t(s.title) : ui().sec[s.id];
  }

  function sectionBody(s, p) {
    if (s.paragraphs) return `<div class="prose">${s.paragraphs.map((x) => `<p>${esc(t(x))}</p>`).join("")}</div>`;
    if (s.list) return `<div class="prose">${list(s.list)}</div>`;
    if (s.features) return `<ul class="features">${s.features.map((f) => `
      <li><span class="features__icon">${icon(f.icon)}</span><h3>${esc(t(f.title))}</h3><p>${esc(t(f.text))}</p></li>`).join("")}</ul>`;
    if (s.steps) return `<ol class="steps">${s.steps.map((x) => `<li><h3>${esc(t(x.title))}</h3><p>${esc(t(x.text))}</p></li>`).join("")}</ol>`;
    if (s.items) return `${s.intro ? `<p class="fold__intro">${esc(t(s.intro))}</p>` : ""}<ul class="weights">${s.items.map((x) => `
      <li><div class="weights__head"><h3>${esc(t(x.name))}</h3><span>${esc(x.value)}</span></div><p>${esc(t(x.text))}</p></li>`).join("")}</ul>`;
    if (s.stack) return `<dl class="stack">${s.stack.map((x) => `<div><dt>${esc(t(x.layer))}</dt><dd>${chips(x.items)}</dd></div>`).join("")}</dl>`;
    if (s.milestones) return `<ol class="milestones">${s.milestones.map((m) => `
      <li class="milestone milestone--${m.state}">
        <span class="milestone__mark">${icon(m.state === "done" ? "check" : m.state)}</span>
        <div><p class="milestone__title">${esc(t(m.name))}<span class="milestone__state">${esc(ui().state[m.state])}</span></p>
        ${m.detail ? `<p class="milestone__detail">${esc(t(m.detail))}</p>` : ""}</div>
      </li>`).join("")}</ol>`;
    if (s.press) return `<ul class="press">${p.press.map((n) => `<li><a href="${n.url}" target="_blank" rel="noopener">${esc(t(n.label))} ${icon("arrow")}</a></li>`).join("")}</ul>`;
    return "";
  }

  function sectionCount(s) {
    const n = (s.features || s.steps || s.items || s.milestones || s.list || []).length;
    return n ? `<span class="fold__count">${n}</span>` : "";
  }

  function renderProjectPage() {
    const slug = new URLSearchParams(location.search).get("p");
    const p = CV.projects.find((x) => x.slug === slug);
    const root = $("project-page");
    if (!p) {
      root.innerHTML = `<div class="container section"><p>${esc(ui().notFound)}</p><p>${button(homeUrl("#proyectos"), ui().back, true)}</p></div>`;
      return;
    }
    document.title = `${p.name} · ${CV.name}`;
    const next = CV.projects[(CV.projects.indexOf(p) + 1) % CV.projects.length];
    const actions =
      (p.url ? button(p.url, ui().visit, true) : "") +
      (p.repo ? button(p.repo, ui().repo) : "") +
      button(`mailto:${CV.links.email}`, CV.links.email);

    root.style.cssText = accent(p);
    root.innerHTML = `
      <header class="phead">
        <div class="hero__bg" aria-hidden="true"></div>
        <div class="container phead__grid">
          <div>
            <a class="phead__back" href="${homeUrl("#proyectos")}">${icon("back")} ${esc(ui().back)}</a>
            <p class="eyebrow">${esc(t(p.kind))}</p>
            <h1>${p.icon ? `<img src="${p.icon}" alt="" class="phead__icon">` : ""}${esc(p.name)}</h1>
            <p class="phead__tagline">${esc(t(p.tagline))}</p>
            <p class="phead__meta"><span class="badge">${esc(t(p.badge))}</span><span>${esc(t(p.phase))}</span></p>
            <div class="hero__actions">${actions}</div>
          </div>
          <figure class="window" aria-hidden="true">
            <span class="window__bar"><i></i><i></i><i></i></span>
            <img src="${p.cover.src}" alt="">
          </figure>
        </div>
      </header>

      <div class="container pbody">
        ${p.figures && p.figures.length ? `<ul class="figures">${p.figures.map((f) => `<li><strong>${esc(f.value)}</strong><span>${esc(t(f.label))}</span></li>`).join("")}</ul>` : ""}

        ${p.gallery && p.gallery.length ? `
        <section class="gallery" aria-label="${esc(ui().gallery)}">
          ${p.gallery.map((g, i) => `<button type="button" class="gallery__item" data-full="${g.src}" data-alt="${esc(t(g.alt))}"${i === 0 ? ' data-wide' : ""}>
            <img src="${g.mini}" alt="${esc(t(g.alt))}" loading="lazy"></button>`).join("")}
        </section>` : ""}

        <nav class="toc" aria-label="${esc(ui().onThisPage)}">
          ${p.sections.map((s) => `<a href="#${s.id}" data-open="${s.id}">${esc(sectionTitle(s))}</a>`).join("")}
          <button type="button" class="toc__all" id="toggle-all"></button>
        </nav>

        <div class="folds">
          ${p.sections.map((s) => `
          <details class="fold" id="${s.id}"${open.has(s.id) || p.sections.length <= 3 ? " open" : ""}>
            <summary><h2>${esc(sectionTitle(s))}</h2>${sectionCount(s)}</summary>
            <div class="fold__body">${sectionBody(s, p)}</div>
          </details>`).join("")}
        </div>

        <aside class="cta">
          <h2>${esc(ui().ctaTitle)}</h2>
          <p>${esc(ui().ctaText)}</p>
          <div class="hero__actions">${button(`mailto:${CV.links.email}`, CV.links.email, true)}${button(CV.links.linkedin, "LinkedIn")}</div>
        </aside>

        ${next !== p ? `<a class="next" href="${projectUrl(next.slug)}" style="${accent(next)}"><span>${esc(ui().next)}</span><strong>${esc(next.name)} ${icon("arrow")}</strong></a>` : ""}
      </div>`;
    setupProjectInteractions();
  }

  function setupProjectInteractions() {
    const folds = [...document.querySelectorAll(".fold")];
    const all = $("toggle-all");
    const sync = () => {
      all.textContent = folds.every((f) => f.open) ? ui().collapseAll : ui().expandAll;
      folds.forEach((f) => { if (f.open) open.add(f.id); else open.delete(f.id); });
    };
    folds.forEach((f) => f.addEventListener("toggle", sync));
    all.addEventListener("click", () => {
      const target = !folds.every((f) => f.open);
      folds.forEach((f) => (f.open = target));
    });
    document.querySelectorAll("[data-open]").forEach((a) => a.addEventListener("click", () => ($(a.dataset.open).open = true)));
    sync();

    const box = $("lightbox");
    document.querySelectorAll(".gallery__item").forEach((b) => b.addEventListener("click", () => {
      box.querySelector("img").src = b.dataset.full;
      box.querySelector("img").alt = b.dataset.alt;
      box.querySelector("p").textContent = b.dataset.alt;
      box.showModal();
    }));
  }

  function setupLightbox() {
    const box = $("lightbox");
    if (!box) return;
    box.addEventListener("click", (e) => { if (e.target === box || e.target.closest("button")) box.close(); });
  }

  // ===== Común =====

  function render() {
    renderStatic();
    if (page === "home") {
      renderHero();
      renderAbout();
      renderProjects();
      renderTimeline("experience", CV.experience);
      renderTimeline("education", CV.education);
      renderSkills();
      renderContact();
    } else {
      renderProjectPage();
      const close = document.querySelector("#lightbox button");
      if (close) close.setAttribute("aria-label", ui().close);
    }
    updateThemeLabel();
    updateMenu();
    observeReveal();
  }

  function setupLang() {
    $("lang-switch").addEventListener("click", (e) => {
      const b = e.target.closest("[data-lang]");
      if (!b || b.dataset.lang === lang) return;
      lang = b.dataset.lang;
      try { localStorage.setItem("lang", lang); } catch (e) {}
      const url = new URL(location.href);
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
      render();
    });
  }

  // El tema inicial se aplica en un script del <head>.
  function updateThemeLabel() {
    $("theme-toggle").setAttribute("aria-label", document.documentElement.dataset.theme === "dark" ? ui().toLight : ui().toDark);
  }

  function setupTheme() {
    const root = document.documentElement;
    $("theme-toggle").addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      updateThemeLabel();
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  let menuOpen = false;
  function updateMenu() {
    const menu = $("nav-menu");
    $("nav-links").classList.toggle("open", menuOpen);
    menu.setAttribute("aria-expanded", menuOpen);
    menu.setAttribute("aria-label", menuOpen ? ui().closeMenu : ui().openMenu);
    menu.textContent = menuOpen ? "✕" : "☰";
  }

  function setupMenu() {
    const setOpen = (o) => { menuOpen = o; updateMenu(); };
    $("nav-menu").addEventListener("click", () => setOpen(!menuOpen));
    $("nav-links").addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  }

  const reveal = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); }
  }), { threshold: 0.12 });
  function observeReveal() {
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => reveal.observe(el));
  }

  function setupScrollSpy() {
    if (page !== "home") return;
    const links = document.querySelectorAll("[data-nav]");
    const spy = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.dataset.nav === e.target.id));
    }), { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
  }

  $("year").textContent = new Date().getFullYear();
  render();
  setupLang();
  setupTheme();
  setupMenu();
  setupScrollSpy();
  setupLightbox();
})();
