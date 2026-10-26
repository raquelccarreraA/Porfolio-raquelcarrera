// Genera una carpeta con su index.html por cada página de detalle, para que las direcciones se lean bien:
//   proyectos/<slug>/    un proyecto de CV.projects
//   trayectoria/<slug>/  una entrada de experiencia o formación con slug y detail
//   presentacion/        la presentación completa
// Úsalo al añadir o quitar un proyecto o una entrada de trayectoria, y al cambiar la versión (?v=) de index.html:
//   node herramientas/generar-paginas.js
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const read = (f) => fs.readFileSync(path.join(root, f), "utf8");
const CV = new Function(`${read("js/data.js")}; return CV;`)();
const template = read("herramientas/plantilla.html");
const version = read("index.html").match(/\?v=([0-9a-z]+)/)[1];

const LIGHTBOX = `
  <dialog class="lightbox" id="lightbox">
    <button type="button" class="lightbox__close" aria-label="Cerrar">✕</button>
    <img src="" alt="">
    <p></p>
  </dialog>
`;

function write(dir, opts) {
  const depth = dir.split("/").length;
  const html = template
    .replaceAll("{{BASE}}", "../".repeat(depth))
    .replaceAll("{{PATH}}", `${dir}/`)
    .replaceAll("{{PAGE}}", opts.page)
    .replaceAll("{{SLUG}}", opts.slug ? ` data-slug="${opts.slug}"` : "")
    .replaceAll("{{MAIN}}", opts.main)
    .replaceAll("{{NOSCRIPT}}", opts.noscript)
    .replaceAll("{{LIGHTBOX}}", opts.lightbox ? LIGHTBOX : "")
    .replaceAll("{{V}}", version);
  fs.mkdirSync(path.join(root, dir), { recursive: true });
  fs.writeFileSync(path.join(root, dir, "index.html"), html);
  return dir;
}

// Borra las carpetas generadas antes para no dejar páginas de slugs que ya no existen.
["proyectos", "trayectoria", "presentacion"].forEach((d) => fs.rmSync(path.join(root, d), { recursive: true, force: true }));

const done = [
  ...CV.projects.map((p) => write(`proyectos/${p.slug}`, {
    page: "project", slug: p.slug, main: "project-page", lightbox: true,
    noscript: "Activa JavaScript para ver el proyecto · Enable JavaScript to see the project."
  })),
  ...[...CV.experience, ...CV.education].filter((e) => e.slug && e.detail).map((e) => write(`trayectoria/${e.slug}`, {
    page: "trail", slug: e.slug, main: "project-page", lightbox: true,
    noscript: "Activa JavaScript para ver el detalle · Enable JavaScript to see the details."
  })),
  write("presentacion", {
    page: "letter", main: "letter-page",
    noscript: "Activa JavaScript para ver la presentación · Enable JavaScript to see the introduction."
  })
];
console.log(`Páginas generadas (v=${version}):\n  ${done.join("/\n  ")}/`);
