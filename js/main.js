// Renderiza la web a partir de CV (js/data.js) en gallego, castellano o inglés. Sin dependencias.
(function () {
  const LANGS = ["gl", "es", "en"];

  // Textos de la interfaz (los del CV están en data.js).
  const UI = {
    gl: {
      title: "Raquel Comesaña Carrera · Desenvolvedora Full Stack",
      nav: { proyectos: "Proxectos", "sobre-mi": "Sobre min", trayectoria: "Traxectoria", habilidades: "Habilidades", contacto: "Contacto" },
      projects: "Proxectos", about: "Sobre min", experience: "Experiencia", education: "Formación", skills: "Habilidades", contact: "Falamos?",
      seeProjects: "Ver proxectos", downloadCv: "Descargar CV (PDF)", viewProject: "Ver proxecto ↗", code: "Código", screenshot: "Captura de",
      openMenu: "Abrir menú", closeMenu: "Pechar menú", toDark: "Cambiar a tema escuro", toLight: "Cambiar a tema claro", language: "Idioma"
    },
    es: {
      title: "Raquel Comesaña Carrera · Desarrolladora Full Stack",
      nav: { proyectos: "Proyectos", "sobre-mi": "Sobre mí", trayectoria: "Trayectoria", habilidades: "Habilidades", contacto: "Contacto" },
      projects: "Proyectos", about: "Sobre mí", experience: "Experiencia", education: "Formación", skills: "Habilidades", contact: "¿Hablamos?",
      seeProjects: "Ver proyectos", downloadCv: "Descargar CV (PDF)", viewProject: "Ver proyecto ↗", code: "Código", screenshot: "Captura de",
      openMenu: "Abrir menú", closeMenu: "Cerrar menú", toDark: "Cambiar a tema oscuro", toLight: "Cambiar a tema claro", language: "Idioma"
    },
    en: {
      title: "Raquel Comesaña Carrera · Full Stack Developer",
      nav: { proyectos: "Projects", "sobre-mi": "About", trayectoria: "Background", habilidades: "Skills", contacto: "Contact" },
      projects: "Projects", about: "About me", experience: "Experience", education: "Education", skills: "Skills", contact: "Let's talk",
      seeProjects: "See projects", downloadCv: "Download CV (PDF)", viewProject: "View project ↗", code: "Code", screenshot: "Screenshot of",
      openMenu: "Open menu", closeMenu: "Close menu", toDark: "Switch to dark theme", toLight: "Switch to light theme", language: "Language"
    }
  };

  let lang = detectLang();
  const $ = (id) => document.getElementById(id);
  // Devuelve la versión del idioma actual si el valor es { gl, es, en }; si no, el valor tal cual.
  const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.es : v);
  const ui = () => UI[lang];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const list = (items) => `<ul>${t(items).map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
  const chips = (items) => `<div class="chips">${items.map((i) => `<span class="chip">${esc(t(i))}</span>`).join("")}</div>`;
  const button = (href, label, primary, extra = "") => {
    const external = /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "";
    return `<a class="btn${primary ? " btn--primary" : ""}" href="${href}"${external}${extra}>${esc(label)}</a>`;
  };
  const cvButton = () => (CV.links.cv ? button(CV.links.cv, ui().downloadCv, false, " download") : "");

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
    document.querySelectorAll(".nav__links a").forEach((a) => (a.textContent = ui().nav[a.getAttribute("href").slice(1)]));
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = ui()[el.dataset.i18n]));
    $("lang-switch").setAttribute("aria-label", ui().language);
    document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  }

  function renderHero() {
    $("hero-location").textContent = t(CV.location);
    $("hero-name").textContent = CV.name;
    $("hero-role").textContent = t(CV.role);
    $("hero-summary").textContent = t(CV.summary);
    $("hero-actions").innerHTML =
      button("#proyectos", ui().seeProjects, true) +
      cvButton() +
      button(CV.links.linkedin, "LinkedIn") +
      button(CV.links.github, "GitHub");
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
    $("projects").innerHTML = CV.projects.map((p) => {
      const media = `${esc(p.name)}<img src="${p.image}" alt="${esc(ui().screenshot)} ${esc(p.name)}" loading="lazy" onerror="this.remove()">`;
      const style = `--c1:${p.colors[0]};--c2:${p.colors[1]}`;
      const actions = (p.url ? button(p.url, ui().viewProject, true) : "") + (p.repo ? button(p.repo, ui().code) : "");
      return `
        <article class="project reveal">
          ${p.url
            ? `<a class="project__media" href="${p.url}" target="_blank" rel="noopener" tabindex="-1" style="${style}">${media}</a>`
            : `<div class="project__media" style="${style}">${media}</div>`}
          <div class="project__body">
            <p class="project__kind">${esc(t(p.kind))}</p>
            <h3>${esc(p.name)}</h3>
            ${list(p.points)}
            <div class="project__footer">
              ${chips(p.tags)}
              ${actions ? `<div class="project__actions">${actions}</div>` : ""}
            </div>
          </div>
        </article>`;
    }).join("");
  }

  function renderTimeline(target, items) {
    $(target).innerHTML = items.map((i) => `
      <div class="tl-item reveal">
        <p class="tl-item__date">${esc(t(i.date))}</p>
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

  function render() {
    renderStatic();
    renderHero();
    renderAbout();
    renderProjects();
    renderTimeline("experience", CV.experience);
    renderTimeline("education", CV.education);
    renderSkills();
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

  // El tema inicial se aplica en un script del <head> de index.html.
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
    const setOpen = (open) => { menuOpen = open; updateMenu(); };
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
    const links = document.querySelectorAll(".nav__links a");
    const spy = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
    }), { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
  }

  $("year").textContent = new Date().getFullYear();
  render();
  setupLang();
  setupTheme();
  setupMenu();
  setupScrollSpy();
})();
