# Portfolio · Raquel Comesaña Carrera

Web personal con mi CV: presentación, proyectos, experiencia, formación y habilidades.

**Ver la web:** <https://raquelccarreraa.github.io/Porfolio-raquelcarrera/>

## Estructura

```
index.html           Portada: presentación, proyectos, perfil (sobre mí, trayectoria, habilidades, idiomas, colaboraciones) y contacto
proyectos/<slug>/    Página de cada proyecto (proyectos/toveriai/, proyectos/argaquest/)
trayectoria/<slug>/  Detalle de experiencia y formación (trayectoria/seidor/, fp-daw/, ia-big-data/)
presentacion/        Presentación completa (se enlaza desde «Sobre mí»)
_plantilla.html      Plantilla de las páginas anteriores (Jekyll no la publica por empezar por «_»)
herramientas/        generar-paginas.js: crea esas carpetas a partir de la plantilla y de data.js
proyecto.html, trayectoria.html, presentacion.html
                     Direcciones antiguas: redirigen a las nuevas para no romper enlaces
css/styles.css       Estilos (tema claro y oscuro, diseño responsive)
js/data.js           Todo el contenido del CV y de los proyectos
js/tech-icons.js     Logos de las tecnologías de «Habilidades» (Simple Icons, CC0)
js/main.js           Genera todas las páginas a partir de data.js
assets/              Foto, capturas de los proyectos y logo de Galivelop
assets/fonts/    Fuentes Fraunces, Inter y JetBrains Mono (licencia OFL)
```

## Proyectos

Cada proyecto de `CV.projects` tiene una tarjeta en la portada (nombre, tipo, resumen, captura y tecnologías) y su propia página con cifras, capturas y secciones desplegables.
Las secciones se definen en `sections`; según los datos que lleven se muestran como texto (`paragraphs`), lista (`list`), tarjetas con icono (`features`), pasos (`steps`), pesos (`items`), ficha técnica (`stack`), hitos (`milestones`) o prensa (`press`).

## Direcciones

Las páginas interiores son carpetas con su `index.html`, para que la dirección se lea bien (`…/proyectos/toveriai/`). Llevan `<base>` a la raíz, así que los enlaces y recursos se escriben igual que en la portada.
Si añades o quitas un proyecto o una entrada de trayectoria con página, o cambias la versión `?v=` de `index.html`, ejecuta:

```
node herramientas/generar-paginas.js
```

## Editar el contenido

Todo el texto está en `js/data.js`. Cambia ese archivo y la web se actualiza sola; no hace falta tocar el HTML.
El nombre, el rol y el resumen también aparecen en castellano en `index.html` (para buscadores y vistas previas al compartir el enlace), así que si los cambias, cámbialos en los dos sitios.

## Trayectoria, colaboraciones y contacto

Las entradas de `CV.experience` y `CV.education` que llevan `slug` y `detail` tienen página propia y un enlace «Ver más» en la portada. `detail` usa el mismo formato que los proyectos.
Debajo de los proyectos, la portada es un perfil en dos columnas: a la izquierda «Sobre mí» y la trayectoria; a la derecha, habilidades, idiomas y colaboraciones. En móvil va todo en una columna.
Las entradas seguidas de la misma organización se agrupan bajo un mismo distintivo, que muestra sus iniciales (o las siglas entre paréntesis, como «UDC»).
Las habilidades (`CV.skills`) se muestran por categoría; si el nombre está en `js/tech-icons.js` llevan su logo y, si no, su inicial. Los idiomas están en `CV.languages`.
La tarjeta de colaboraciones se genera con `CV.collab` (Galivelop), y la página de toVeriAI muestra además la nota de `partner`. El botón «Ficha del proyecto» de toVeriAI lleva a `overview`, la página del proyecto en GitHub Pages.
El contacto de la portada se genera con `CV.contactWays` (la tarjeta de contacto, que muestra el correo con un botón para copiarlo).

## Modo borrador

Las secciones con `draft: true` son huecos pendientes de completar: llevan la pregunta en `ask` y **solo se ven añadiendo `borrador=1` a la URL**, por ejemplo `…/trayectoria/seidor/?borrador=1`. Quien visite la web normal no las ve. Para completar una, cambia `draft`/`ask` por el contenido (`paragraphs`, `list`…).

## Idiomas

La web está en gallego, castellano e inglés. En `js/data.js` cada texto traducible lleva sus tres versiones:

```js
role: { gl: "Desenvolvedora Full Stack", es: "Desarrolladora Full Stack", en: "Full Stack Developer" }
```

Los textos de la interfaz (menú, títulos, botones) están en `UI`, al principio de `js/main.js`.

El idioma se elige así: `?lang=gl|es|en` en la URL, después el último elegido con el selector y después el del navegador. Si el navegador está en otro idioma, se muestra en inglés.
El idioma no aparece en la dirección al navegar: se recuerda en el navegador. Para mandar la web en un idioma concreto, comparte el enlace con `?lang=`, por ejemplo `…/Porfolio-raquelcarrera/?lang=en`; al abrirlo se guarda ese idioma y `?lang=` desaparece de la dirección.

## Caché del navegador

Las páginas cargan `styles.css`, `data.js` y `main.js` con `?v=…` al final. Si cambias alguno de esos archivos, cambia ese número en `index.html` y ejecuta `node herramientas/generar-paginas.js`, que lo copia al resto: así los navegadores descargan la versión nueva en vez de usar la que tienen guardada.

## Ver en local

Sirve la carpeta con un servidor local (por ejemplo `python3 -m http.server`) y abre `http://localhost:8000/`. No necesita instalación ni dependencias; abrir `index.html` directamente funciona para la portada, pero las páginas interiores necesitan el servidor.

## Publicación

Se publica con GitHub Pages desde la rama `main` (Settings → Pages).
