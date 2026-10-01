// Renderiza la web a partir de CV (js/data.js). Sin dependencias.
(function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const list = (items) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
  const button = (href, label, primary) => {
    const external = /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "";
    return `<a class="btn${primary ? " btn--primary" : ""}" href="${href}"${external}>${label}</a>`;
  };

  function renderHero() {
    $("hero-location").textContent = CV.location;
    $("hero-name").textContent = CV.name;
    $("hero-role").textContent = CV.role;
    $("hero-summary").textContent = CV.summary;
    $("hero-actions").innerHTML =
      button(CV.links.linkedin, "LinkedIn", true) +
      button(CV.links.github, "GitHub") +
      button(`mailto:${CV.links.email}`, "Email");
    $("contact-actions").innerHTML =
      button(`mailto:${CV.links.email}`, CV.links.email, true) +
      button(`tel:${CV.links.phone.replace(/\s/g, "")}`, CV.links.phone);
  }

  function renderLetter() {
    const l = CV.letter;
    $("letter").innerHTML = `
      <p class="letter__lead">${esc(l.lead)}</p>
      <p>${esc(l.intro)}</p>
      <ul>${l.points.map((p) => `<li><strong>${esc(p.title)}</strong>${esc(p.text)}</li>`).join("")}</ul>
      <p>${esc(l.outro)}</p>`;
  }

  function renderProjects() {
    $("projects").innerHTML = CV.projects.map((p) => {
      const tag = p.url ? "a" : "div";
      const attrs = p.url ? ` href="${p.url}" target="_blank" rel="noopener"` : "";
      return `
        <${tag} class="project reveal"${attrs}>
          <div class="project__media" style="--c1:${p.colors[0]};--c2:${p.colors[1]}">
            ${esc(p.name)}<img src="${p.image}" alt="${esc(p.name)}" loading="lazy" onerror="this.remove()">
          </div>
          <div class="project__body">
            <p class="project__kind">${esc(p.kind)}</p>
            <h3>${esc(p.name)}</h3>
            ${list(p.points)}
            <div class="chips">${p.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
            ${p.url ? `<span class="project__link">Visitar proyecto →</span>` : ""}
          </div>
        </${tag}>`;
    }).join("");
  }

  function renderTimeline(target, items) {
    $(target).innerHTML = items.map((i) => `
      <div class="tl-item reveal">
        <p class="tl-item__date">${esc(i.date)}</p>
        <h3>${esc(i.title)}</h3>
        <p class="tl-item__org">${esc(i.org)}</p>
        ${i.points ? list(i.points) : ""}
      </div>`).join("");
  }

  function renderSkills() {
    $("skills-grid").innerHTML = Object.entries(CV.skills).map(([group, items]) => `
      <div class="skills__group reveal">
        <h3>${esc(group)}</h3>
        <div class="chips">${items.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
      </div>`).join("");
  }

  // El tema inicial se aplica en un script del <head> de index.html.
  function setupTheme() {
    const root = document.documentElement;
    $("theme-toggle").addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  function setupMenu() {
    const menu = $("nav-menu");
    const nav = $("nav-links");
    const setOpen = (open) => {
      nav.classList.toggle("open", open);
      menu.setAttribute("aria-expanded", open);
      menu.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      menu.textContent = open ? "✕" : "☰";
    };
    menu.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  }

  function setupScroll() {
    const reveal = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

    const links = document.querySelectorAll(".nav__links a");
    const spy = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
    }), { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
  }

  renderHero();
  renderLetter();
  renderProjects();
  renderTimeline("experience", CV.experience);
  renderTimeline("education", CV.education);
  renderSkills();
  $("year").textContent = new Date().getFullYear();
  setupTheme();
  setupMenu();
  setupScroll();
})();
