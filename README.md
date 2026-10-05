# Portfolio · Raquel Comesaña Carrera

Web personal con mi CV: presentación, proyectos, experiencia, formación y habilidades.

**Ver la web:** <https://raquelccarreraa.github.io/Porfolio-raquelcarrera/>

## Estructura

```
index.html       Portada: presentación, proyectos, trayectoria, habilidades y contacto
proyecto.html    Página de cada proyecto (proyecto.html?p=toveriai, ?p=argaquest)
trayectoria.html Página de detalle de experiencia y formación (trayectoria.html?id=seidor, fp-daw, ia-big-data)
contacto.html    Formulario de contacto (contacto.html?tipo=oferta, colaborar)
css/styles.css   Estilos (tema claro y oscuro, diseño responsive)
js/data.js       Todo el contenido del CV y de los proyectos
js/main.js       Genera las dos páginas a partir de data.js
assets/          Foto y capturas de los proyectos
assets/fonts/    Fuentes Fraunces, Inter y JetBrains Mono (licencia OFL)
```

## Proyectos

Cada proyecto de `CV.projects` tiene una tarjeta en la portada (nombre, tipo, resumen, captura y tecnologías) y su propia página con cifras, capturas y secciones desplegables.
Las secciones se definen en `sections`; según los datos que lleven se muestran como texto (`paragraphs`), lista (`list`), tarjetas con icono (`features`), pasos (`steps`), pesos (`items`), ficha técnica (`stack`), hitos (`milestones`) o prensa (`press`).

## Editar el contenido

Todo el texto está en `js/data.js`. Cambia ese archivo y la web se actualiza sola; no hace falta tocar el HTML.
El nombre, el rol y el resumen también aparecen en castellano en `index.html` (para buscadores y vistas previas al compartir el enlace), así que si los cambias, cámbialos en los dos sitios.

## Trayectoria y contacto

Las entradas de `CV.experience` y `CV.education` que llevan `slug` y `detail` tienen página propia y un enlace «Ver más» en la portada. `detail` usa el mismo formato que los proyectos.
El contacto de la portada se genera con `CV.contactWays` (las vías de contacto, cada una con su formulario) y `CV.lookingFor` («Lo que busco»). El formulario no envía nada por sí mismo: prepara el correo y lo abre en la aplicación de correo de quien escribe, con un botón para copiarlo si no se abre.

## Modo borrador

Las secciones con `draft: true` (y los puntos de «Lo que busco» con `draft: true`) son huecos pendientes de completar: llevan la pregunta en `ask` y **solo se ven añadiendo `borrador=1` a la URL**, por ejemplo `…/trayectoria.html?id=seidor&borrador=1`. Quien visite la web normal no las ve. Para completar una, cambia `draft`/`ask` por el contenido (`paragraphs`, `list`…).

## Idiomas

La web está en gallego, castellano e inglés. En `js/data.js` cada texto traducible lleva sus tres versiones:

```js
role: { gl: "Desenvolvedora Full Stack", es: "Desarrolladora Full Stack", en: "Full Stack Developer" }
```

Los textos de la interfaz (menú, títulos, botones) están en `UI`, al principio de `js/main.js`.

El idioma se elige así: `?lang=gl|es|en` en la URL, después el último elegido con el selector y después el del navegador. Si el navegador está en otro idioma, se muestra en inglés.
Para mandar la web en un idioma concreto, comparte el enlace con `?lang=`, por ejemplo `…/Porfolio-raquelcarrera/?lang=en`.

## Caché del navegador

`index.html` y `proyecto.html` cargan `styles.css`, `data.js` y `main.js` con `?v=…` al final. Si cambias alguno de esos archivos, cambia ese número en los dos HTML: así los navegadores descargan la versión nueva en vez de usar la que tienen guardada.

## Ver en local

Abre `index.html` en el navegador. No necesita instalación ni dependencias.

## Publicación

Se publica con GitHub Pages desde la rama `main` (Settings → Pages).
