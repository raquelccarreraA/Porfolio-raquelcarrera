# Portfolio · Raquel Comesaña Carrera

Web personal con mi CV: presentación, proyectos, experiencia, formación y habilidades.

## Estructura

```
index.html       Estructura de la página
css/styles.css   Estilos (tema claro y oscuro, diseño responsive)
js/data.js       Todo el contenido del CV
js/main.js       Genera las secciones a partir de data.js
assets/          Foto y capturas de los proyectos
assets/fonts/    Fuentes Fraunces, Inter y JetBrains Mono (licencia OFL)
```

## Editar el contenido

Todo el texto está en `js/data.js`. Cambia ese archivo y la web se actualiza sola; no hace falta tocar el HTML.
El nombre, el rol y el resumen también aparecen en castellano en `index.html` (para buscadores y vistas previas al compartir el enlace), así que si los cambias, cámbialos en los dos sitios.

## Idiomas

La web está en gallego, castellano e inglés. En `js/data.js` cada texto traducible lleva sus tres versiones:

```js
role: { gl: "Desenvolvedora Full Stack", es: "Desarrolladora Full Stack", en: "Full Stack Developer" }
```

Los textos de la interfaz (menú, títulos, botones) están en `UI`, al principio de `js/main.js`.

El idioma se elige así: `?lang=gl|es|en` en la URL, después el último elegido con el selector y después el del navegador. Si el navegador está en otro idioma, se muestra en inglés.
Para mandar la web en un idioma concreto, comparte el enlace con `?lang=`, por ejemplo `…/Portfolio-Raquel-Comesa-a/?lang=en`.

## Ver en local

Abre `index.html` en el navegador. No necesita instalación ni dependencias.

## Publicación

Se publica con GitHub Pages desde la rama `main` (Settings → Pages).
