// Todo el contenido del CV vive aquí. Edita este archivo y la web se actualiza sola.
// Los textos traducibles llevan sus tres versiones: { gl: "...", es: "...", en: "..." }.
// Lo que no cambia según el idioma (nombres, enlaces, tecnologías) va como texto normal.
const CV = {
  name: "Raquel Comesaña Carrera",
  role: {
    gl: "Desenvolvedora Full Stack · Java e React",
    es: "Desarrolladora Full Stack · Java y React",
    en: "Full Stack Developer · Java & React"
  },
  location: {
    gl: "A Coruña, Galicia",
    es: "A Coruña, Galicia",
    en: "A Coruña, Galicia, Spain"
  },
  summary: {
    gl: "Modernizo sistemas legacy e constrúo aplicacións web completas, do backend á interface. Creadora de toVeriAI, unha aplicación en produción. Agora especialízome en IA e Big Data.",
    es: "Modernizo sistemas legacy y construyo aplicaciones web completas, del backend a la interfaz. Creadora de toVeriAI, una aplicación en producción. Ahora me especializo en IA y Big Data.",
    en: "I modernize legacy systems and build complete web applications, from backend to UI. Creator of toVeriAI, an app in production. Currently specializing in AI and Big Data."
  },

  links: {
    email: "raquel.ccarrera@gmail.com",
    linkedin: "https://www.linkedin.com/in/raquel-comesa%C3%B1a-carrera-1646ba195",
    github: "https://github.com/raquelccarreraA",
    cv: ""                                  // ruta al PDF, p. ej. "assets/CV-Raquel-Comesana.pdf"; vacío = sin botón
  },

  contact: {
    gl: "Busco oportunidades para traballar como programadora. Dispoñibilidade inmediata: escríbeme e respóndoche axiña.",
    es: "Busco oportunidades para trabajar como programadora. Disponibilidad inmediata: escríbeme y te respondo pronto.",
    en: "I'm looking for opportunities to work as a developer. Available immediately: write to me and I'll get back to you soon."
  },
  // Contacto: lo que busco (lo marcado draft solo se ve con ?borrador=1) y las vías de contacto.
  lookingFor: [
    {
      text: {
        gl: "Un posto de desenvolvedora full stack con Java, Spring Boot e React.",
        es: "Un puesto de desarrolladora full stack con Java, Spring Boot y React.",
        en: "A full stack developer role with Java, Spring Boot and React."
      }
    },
    {
      text: {
        gl: "Proxectos nos que poida aplicar o que aprendo de IA e datos.",
        es: "Proyectos en los que pueda aplicar lo que aprendo de IA y datos.",
        en: "Projects where I can apply what I'm learning about AI and data."
      }
    },
    {
      text: {
        gl: "Incorporación inmediata.",
        es: "Incorporación inmediata.",
        en: "Available to start immediately."
      }
    },
    {
      draft: true,
      ask: {
        gl: "Modalidade e localización: presencial na Coruña, híbrido, remoto?",
        es: "Modalidad y ubicación: ¿presencial en A Coruña, híbrido, remoto?",
        en: "Work mode and location: on-site in A Coruña, hybrid, remote?"
      }
    },
    {
      draft: true,
      ask: {
        gl: "Xornada: completa, parcial? Compatible coa especialización?",
        es: "Jornada: ¿completa, parcial? ¿Compatible con la especialización?",
        en: "Hours: full-time, part-time? Compatible with the specialization?"
      }
    }
  ],

  contactWays: [
    {
      type: "oferta",
      icon: "briefcase",
      title: {
        gl: "Teño unha oferta para ti",
        es: "Tengo una oferta para ti",
        en: "I have a job for you"
      },
      text: {
        gl: "Cóntame o posto e o equipo e respóndoche canto antes.",
        es: "Cuéntame el puesto y el equipo y te respondo lo antes posible.",
        en: "Tell me about the role and the team and I'll get back to you as soon as possible."
      }
    },
    {
      type: "colaborar",
      icon: "users",
      title: {
        gl: "Colaborar nun proxecto",
        es: "Colaborar en un proyecto",
        en: "Collaborate on a project"
      },
      text: {
        gl: "Un proxecto no que encaixaría? Falemos do que precisas.",
        es: "¿Un proyecto en el que encajaría? Hablemos de qué necesitas.",
        en: "A project I'd fit into? Let's talk about what you need."
      }
    }
  ],


  // Sobre mí: el primer párrafo se muestra destacado.
  about: {
    gl: [
      "Son desenvolvedora full stack. En Seidor modernicei aplicacións IBM i (AS/400): levei a lóxica de RPG e SQL a servizos REST e convertín pantallas green-screen en interfaces React.",
      "Ademais, constrúo os meus propios produtos de principio a fin, como toVeriAI. Agora especialízome en Intelixencia Artificial e Big Data.",
      "Antes de programar formeime en Educación Social, e iso nótase en como me comunico e traballo en equipo."
    ],
    es: [
      "Soy desarrolladora full stack. En Seidor modernicé aplicaciones IBM i (AS/400): llevé la lógica de RPG y SQL a servicios REST y convertí pantallas green-screen en interfaces React.",
      "Además, construyo mis propios productos de principio a fin, como toVeriAI. Ahora me especializo en Inteligencia Artificial y Big Data.",
      "Antes de programar me formé en Educación Social, y eso se nota en cómo me comunico y trabajo en equipo."
    ],
    en: [
      "I'm a full stack developer. At Seidor I modernized IBM i (AS/400) applications: I moved RPG and SQL logic into REST services and turned green-screen terminals into React interfaces.",
      "I also build my own products end to end, like toVeriAI. I'm currently specializing in Artificial Intelligence and Big Data.",
      "Before programming I trained in Social Education, and it shows in how I communicate and work in a team."
    ]
  },

  // Cifras destacadas bajo el saludo de la portada.
  highlights: [
    { value: "1", label: { gl: "app propia en produción", es: "app propia en producción", en: "own app in production" } },
    { value: "1.º", label: { gl: "premio de Innovación Educativa", es: "premio de Innovación Educativa", en: "prize for Educational Innovation" } },
    { value: "9", label: { gl: "meses de prácticas en Seidor", es: "meses de prácticas en Seidor", en: "months interning at Seidor" } }
  ],

  // Proyectos: la tarjeta de la portada usa name, kind, badge, summary, cover y tags;
  // la página del proyecto (proyecto.html?p=slug) usa además figures, gallery y sections.
  projects: [
    {
      slug: "toveriai",
      name: "toVeriAI",
      icon: "assets/projects/toveriai/icono.png",
      colors: [
        "#1f3a66",
        "#5b7fb8"
      ],
      kind: {
        gl: "Traballo de Fin de Ciclo e proxecto persoal · IA",
        es: "Trabajo de Fin de Ciclo y proyecto personal · IA",
        en: "Final degree project & personal project · AI"
      },
      badge: {
        gl: "● En produción",
        es: "● En producción",
        en: "● Live"
      },
      status: {
        gl: "En produción",
        es: "En producción",
        en: "Live"
      },
      phase: {
        gl: "Premium e VeriAI en beta",
        es: "Premium y VeriAI en beta",
        en: "Premium and VeriAI in beta"
      },
      tagline: {
        gl: "A verdade non é binaria: un índice que explica canto te podes fiar dunha nova.",
        es: "La verdad no es binaria: un índice que explica cuánto puedes fiarte de una noticia.",
        en: "Truth isn’t binary: a score that explains how far you can trust a news story."
      },
      summary: {
        gl: "Unha plataforma web que analiza novas, ligazóns e capturas con IA e devolve o IMI, un índice de credibilidade de 0 a 100 que sinala que falla e onde.",
        es: "Una plataforma web que analiza noticias, enlaces y capturas con IA y devuelve el IMI, un índice de credibilidad de 0 a 100 que señala qué falla y dónde.",
        en: "A web platform that analyses news, links and screenshots with AI and returns the IMI, a 0–100 credibility score that shows what is wrong and where."
      },
      cover: {
        src: "assets/projects/toveriai/portada.webp",
        mini: "assets/projects/toveriai/portada-mini.webp",
        alt: {
          gl: "Páxina de inicio de toVeriAI",
          es: "Página de inicio de toVeriAI",
          en: "toVeriAI home page"
        }
      },
      url: "https://www.toveriai.com",
      repo: "https://github.com/raquelccarreraA/ToVeriAI",
      tags: [
        "React",
        "Spring Boot",
        "Java",
        "MySQL",
        "LLMs",
        "Ollama"
      ],
      figures: [
        {
          value: "0–100",
          label: {
            gl: "índice IMI",
            es: "índice IMI",
            en: "IMI score"
          }
        },
        {
          value: "9",
          label: {
            gl: "dimensións de análise",
            es: "dimensiones de análisis",
            en: "analysis dimensions"
          }
        },
        {
          value: "3",
          label: {
            gl: "modos: texto, ligazón ou captura",
            es: "modos: texto, enlace o captura",
            en: "modes: text, link or screenshot"
          }
        },
        {
          value: "5",
          label: {
            gl: "provedores de IA en rotación",
            es: "proveedores de IA en rotación",
            en: "AI providers in rotation"
          }
        },
        {
          value: "5",
          label: {
            gl: "idiomas",
            es: "idiomas",
            en: "languages"
          }
        },
        {
          value: "v2",
          label: {
            gl: "de VeriAI, o meu modelo propio",
            es: "de VeriAI, mi modelo propio",
            en: "of VeriAI, my own model"
          }
        }
      ],
      gallery: [
        {
          src: "assets/projects/toveriai/resultado.webp",
          mini: "assets/projects/toveriai/resultado-mini.webp",
          alt: {
            gl: "Resultado dunha análise (datos de exemplo): índice IMI, fragmentos marcados no texto e detalle por dimensión",
            es: "Resultado de un análisis (datos de ejemplo): índice IMI, fragmentos marcados en el texto y detalle por dimensión",
            en: "Analysis result (sample data): IMI score, highlighted fragments in the text and per-dimension breakdown"
          }
        },
        {
          src: "assets/projects/toveriai/analizar.webp",
          mini: "assets/projects/toveriai/analizar-mini.webp",
          alt: {
            gl: "Pantalla de análise: texto, URL ou imaxe",
            es: "Pantalla de análisis: texto, URL o imagen",
            en: "Analysis screen: text, URL or image"
          }
        },
        {
          src: "assets/projects/toveriai/movil.webp",
          mini: "assets/projects/toveriai/movil-mini.webp",
          alt: {
            gl: "toVeriAI no móbil: inicio e resultado dunha análise",
            es: "toVeriAI en el móvil: inicio y resultado de un análisis",
            en: "toVeriAI on mobile: home and an analysis result"
          }
        },
        {
          src: "assets/projects/toveriai/dimensiones.webp",
          mini: "assets/projects/toveriai/dimensiones-mini.webp",
          alt: {
            gl: "As dimensións de credibilidade do índice IMI",
            es: "Las dimensiones de credibilidad del índice IMI",
            en: "The credibility dimensions behind the IMI score"
          }
        },
        {
          src: "assets/projects/toveriai/veriai.webp",
          mini: "assets/projects/toveriai/veriai-mini.webp",
          alt: {
            gl: "VeriAI, o modelo propio da plataforma",
            es: "VeriAI, el modelo propio de la plataforma",
            en: "VeriAI, the platform's own model"
          }
        },
      ],
      sections: [
        {
          id: "about",
          paragraphs: [
            {
              gl: "A desinformación non sempre é unha mentira evidente: moitas veces é unha cifra sen fonte, un ton alarmista ou unha cita de expertos que ninguén identifica. Etiquetar unha nova como «verdadeira» ou «falsa» quédase curto e, a miúdo, xera máis desconfianza.",
              es: "La desinformación no siempre es una mentira evidente: muchas veces es una cifra sin fuente, un tono alarmista o una cita de expertos que nadie identifica. Etiquetar una noticia como «verdadera» o «falsa» se queda corto y, a menudo, genera más desconfianza.",
              en: "Disinformation is not always an obvious lie: often it is a figure with no source, an alarmist tone or a quote from experts nobody identifies. Labelling a story “true” or “false” falls short and often breeds more distrust."
            },
            {
              gl: "toVeriAI analiza o texto en sete dimensións de contido, e en dúas máis sobre o medio cando se analiza unha ligazón, e combínaas no IMI (Índice de Métricas Interpretativas). Marca sobre o propio texto os fragmentos problemáticos e pecha cun resumo que explica o resultado. A metodoloxía parte de NewsGuard e complétase con criterios de IFCN e The Trust Project.",
              es: "toVeriAI analiza el texto en siete dimensiones de contenido, y en dos más sobre el medio cuando se analiza un enlace, y las combina en el IMI (Índice de Métricas Interpretativas). Marca sobre el propio texto los fragmentos problemáticos y cierra con un resumen que explica el resultado. La metodología parte de NewsGuard y se completa con criterios de IFCN y The Trust Project.",
              en: "toVeriAI analyses the text across seven content dimensions, plus two about the outlet when a link is analysed, and combines them into the IMI (Interpretive Metrics Index). It highlights problematic fragments in the text itself and ends with a summary that explains the result. The methodology builds on NewsGuard and is completed with IFCN and The Trust Project criteria."
            },
            {
              gl: "toVeriAI está en produción en toveriai.com: cinco idiomas, uso gratuíto sen conta, contas con historial e estatísticas, e un plan Premium en beta. En paralelo adéstrase VeriAI, un modelo propio que aprende das análises da plataforma.",
              es: "toVeriAI está en producción en toveriai.com: cinco idiomas, uso gratuito sin cuenta, cuentas con historial y estadísticas, y un plan Premium en beta. En paralelo se entrena VeriAI, un modelo propio que aprende de los análisis de la plataforma.",
              en: "toVeriAI is live at toveriai.com: five languages, free use without an account, accounts with history and statistics, and a Premium plan in beta. Alongside it, VeriAI is being trained: an in-house model that learns from the platform's analyses."
            }
          ]
        },
        {
          id: "role",
          list: [
            {
              gl: "Idea, deseño do produto e da metodoloxía do índice IMI.",
              es: "Idea, diseño del producto y de la metodología del índice IMI.",
              en: "Idea and design of the product and of the IMI scoring methodology."
            },
            {
              gl: "Desenvolvemento full stack: API REST en Spring Boot con seguridade JWT e frontend en React.",
              es: "Desarrollo full stack: API REST en Spring Boot con seguridad JWT y frontend en React.",
              en: "Full stack development: Spring Boot REST API with JWT security and a React front end."
            },
            {
              gl: "Integración dos cinco provedores de IA, enxeñaría de prompts e adestramento de VeriAI.",
              es: "Integración de los cinco proveedores de IA, ingeniería de prompts y entrenamiento de VeriAI.",
              en: "Integration of the five AI providers, prompt engineering and VeriAI training."
            },
            {
              gl: "Despregamento e mantemento en produción: Vercel, Render con Docker e MySQL.",
              es: "Despliegue y mantenimiento en producción: Vercel, Render con Docker y MySQL.",
              en: "Deployment and production upkeep: Vercel, Render with Docker and MySQL."
            }
          ]
        },
        {
          id: "features",
          features: [
            {
              icon: "gauge",
              title: {
                gl: "Índice IMI de 0 a 100",
                es: "Índice IMI de 0 a 100",
                en: "IMI score from 0 to 100"
              },
              text: {
                gl: "Parte de 100 e desconta por cada alerta segundo o peso da súa dimensión. Por riba de 70, credibilidade alta; por baixo de 40, baixa.",
                es: "Parte de 100 y descuenta por cada alerta según el peso de su dimensión. Por encima de 70, credibilidad alta; por debajo de 40, baja.",
                en: "It starts at 100 and deducts for each alert according to its dimension’s weight. Above 70, high credibility; below 40, low."
              }
            },
            {
              icon: "highlighter",
              title: {
                gl: "Fragmentos sinalados",
                es: "Fragmentos señalados",
                en: "Highlighted fragments"
              },
              text: {
                gl: "Cada alerta márcase sobre o propio texto, coa súa categoría, para ver exactamente onde está o problema.",
                es: "Cada alerta se marca sobre el propio texto, con su categoría, para ver exactamente dónde está el problema.",
                en: "Every alert is marked in the text itself, with its category, so you can see exactly where the problem is."
              }
            },
            {
              icon: "image",
              title: {
                gl: "Texto, ligazón ou captura",
                es: "Texto, enlace o captura",
                en: "Text, link or screenshot"
              },
              text: {
                gl: "Cunha ligazón, tamén revisa o sitio do medio para avaliar a súa transparencia e a autoría. As capturas serven para redes sociais.",
                es: "Con un enlace, también revisa el sitio del medio para evaluar su transparencia y la autoría. Las capturas sirven para redes sociales.",
                en: "With a link it also checks the outlet’s website to assess its transparency and authorship. Screenshots work for social media."
              }
            },
            {
              icon: "languages",
              title: {
                gl: "Cinco idiomas",
                es: "Cinco idiomas",
                en: "Five languages"
              },
              text: {
                gl: "Castelán, galego, catalán, éuscaro e inglés, tanto na interface como nas análises.",
                es: "Castellano, gallego, catalán, euskera e inglés, tanto en la interfaz como en los análisis.",
                en: "Spanish, Galician, Catalan, Basque and English, in both the interface and the analyses."
              }
            },
            {
              icon: "chart",
              title: {
                gl: "Comunidade e seguimento de medios",
                es: "Comunidad y seguimiento de medios",
                en: "Community and outlet tracking"
              },
              text: {
                gl: "Feed público revisado con votos por dimensión, ranking de medios e aviso se a fiabilidade media dun medio que segues cambia.",
                es: "Feed público revisado con votos por dimensión, ranking de medios y aviso si la fiabilidad media de un medio que sigues cambia.",
                en: "A moderated public feed with per-dimension votes, an outlet ranking and alerts when the average reliability of an outlet you follow changes."
              }
            },
            {
              icon: "cpu",
              title: {
                gl: "VeriAI, modelo propio",
                es: "VeriAI, modelo propio",
                en: "VeriAI, an in-house model"
              },
              text: {
                gl: "Un modelo local que se adestra coas análises da plataforma: cada 6.000 análises sae unha versión nova. Vai pola v2 (Qwen 2.5 7B).",
                es: "Un modelo local que se entrena con los análisis de la plataforma: cada 6.000 análisis sale una versión nueva. Va por la v2 (Qwen 2.5 7B).",
                en: "A local model trained on the platform's analyses: a new version every 6,000 analyses. Now on v2 (Qwen 2.5 7B)."
              }
            }
          ]
        },
        {
          id: "steps",
          steps: [
            {
              title: {
                gl: "Envías o contido",
                es: "Envías el contenido",
                en: "You submit the content"
              },
              text: {
                gl: "Texto, ligazón ou capturas. Un filtro previo descarta o que non se pode analizar, como textos demasiado curtos.",
                es: "Texto, enlace o capturas. Un filtro previo descarta lo que no se puede analizar, como textos demasiado cortos.",
                en: "Text, a link or screenshots. A first filter discards what cannot be analysed, such as texts that are too short."
              }
            },
            {
              title: {
                gl: "A IA identifica o tipo de texto",
                es: "La IA identifica el tipo de texto",
                en: "The AI identifies the type of text"
              },
              text: {
                gl: "Nova, comunicado oficial, publicación en redes ou contido sen autoría: as regras cambian segundo o caso.",
                es: "Noticia, comunicado oficial, publicación en redes o contenido sin autoría: las reglas cambian según el caso.",
                en: "News story, official statement, social media post or unsigned content: the rules change for each case."
              }
            },
            {
              title: {
                gl: "Analiza cada dimensión",
                es: "Analiza cada dimensión",
                en: "It analyses each dimension"
              },
              text: {
                gl: "Ata nove, cada unha coas súas alertas e os fragmentos concretos que as provocan.",
                es: "Hasta nueve, cada una con sus alertas y los fragmentos concretos que las provocan.",
                en: "Up to nine, each with its alerts and the specific fragments that trigger them."
              }
            },
            {
              title: {
                gl: "Calcula o IMI e explícao",
                es: "Calcula el IMI y lo explica",
                en: "It calculates and explains the IMI"
              },
              text: {
                gl: "Devolve a puntuación de 0 a 100, o detalle por dimensión e un resumo que guía a lectura crítica.",
                es: "Devuelve la puntuación de 0 a 100, el detalle por dimensión y un resumen que guía la lectura crítica.",
                en: "It returns the 0–100 score, the per-dimension breakdown and a summary that guides critical reading."
              }
            }
          ]
        },
        {
          id: "dimensions",
          title: {
            gl: "As dimensións do IMI",
            es: "Las dimensiones del IMI",
            en: "The IMI dimensions"
          },
          intro: {
            gl: "Os pesos parten do marco de NewsGuard, completado con IFCN e The Trust Project. Con texto ou capturas úsanse as sete dimensións de contido; cunha ligazón súmanse dúas de transparencia, que pesan un 15 % do total.",
            es: "Los pesos parten del marco de NewsGuard, completado con IFCN y The Trust Project. Con texto o capturas se usan las siete dimensiones de contenido; con un enlace se suman dos de transparencia, que pesan un 15 % del total.",
            en: "The weights build on the NewsGuard framework, completed with IFCN and The Trust Project. Text and screenshots use the seven content dimensions; a link adds two transparency dimensions worth 15% of the total."
          },
          items: [
            {
              name: {
                gl: "Verificación factual",
                es: "Verificación factual",
                en: "Factual verification"
              },
              value: "26 %",
              text: {
                gl: "Se hai afirmacións falsas, inverificables ou enganosas. Escribir ben non equivale a ser veraz.",
                es: "Si hay afirmaciones falsas, inverificables o engañosas. Escribir bien no equivale a ser veraz.",
                en: "Whether there are false, unverifiable or misleading claims. Writing well is not the same as being truthful."
              }
            },
            {
              name: {
                gl: "Consistencia interna",
                es: "Consistencia interna",
                en: "Internal consistency"
              },
              value: "24 %",
              text: {
                gl: "Contradicións, saltos lóxicos ou un titular que non se corresponde co corpo.",
                es: "Contradicciones, saltos lógicos o un titular que no se corresponde con el cuerpo.",
                en: "Contradictions, logical leaps or a headline that does not match the body."
              }
            },
            {
              name: {
                gl: "Fontes",
                es: "Fuentes",
                en: "Sources"
              },
              value: "15 %",
              text: {
                gl: "Trazabilidade: unha fonte con nome e cargo fronte a «segundo expertos» ou «fontes próximas».",
                es: "Trazabilidad: una fuente con nombre y cargo frente a «según expertos» o «fuentes cercanas».",
                en: "Traceability: a source with a name and position versus “experts say” or “sources close to”."
              }
            },
            {
              name: {
                gl: "Nesgo",
                es: "Sesgo",
                en: "Bias"
              },
              value: "12 %",
              text: {
                gl: "O encadre que dá o propio xornalista e as perspectivas que omite.",
                es: "El encuadre que da el propio periodista y las perspectivas que omite.",
                en: "The framing chosen by the journalist and the perspectives left out."
              }
            },
            {
              name: {
                gl: "Ton",
                es: "Tono",
                en: "Tone"
              },
              value: "12 %",
              text: {
                gl: "Se o texto informa ou persuade: alarmismo, catastrofismo ou procura de indignación.",
                es: "Si el texto informa o persuade: alarmismo, catastrofismo o búsqueda de indignación.",
                en: "Whether the text informs or persuades: alarmism, doom-mongering or outrage-seeking."
              }
            },
            {
              name: {
                gl: "Semántica",
                es: "Semántica",
                en: "Semantics"
              },
              value: "6 %",
              text: {
                gl: "Termos cargados, eufemismos ou hipérboles na voz do autor, non nas citas.",
                es: "Términos cargados, eufemismos o hipérboles en la voz del autor, no en las citas.",
                en: "Loaded terms, euphemisms or hyperbole in the author’s own voice, not in quotes."
              }
            },
            {
              name: {
                gl: "Cifras",
                es: "Cifras",
                en: "Figures"
              },
              value: "5 %",
              text: {
                gl: "Datos e estatísticas con fonte e contexto.",
                es: "Datos y estadísticas con fuente y contexto.",
                en: "Data and statistics with a source and context."
              }
            },
            {
              name: {
                gl: "Transparencia do medio",
                es: "Transparencia del medio",
                en: "Outlet transparency"
              },
              value: "URL",
              text: {
                gl: "Só con ligazón: se o medio di quen o posúe e como se financia.",
                es: "Solo con enlace: si el medio dice quién lo posee y cómo se financia.",
                en: "Link mode only: whether the outlet says who owns it and how it is funded."
              }
            },
            {
              name: {
                gl: "Autoría",
                es: "Autoría",
                en: "Authorship"
              },
              value: "URL",
              text: {
                gl: "Só con ligazón: se o artigo o asina unha persoa identificable.",
                es: "Solo con enlace: si el artículo lo firma una persona identificable.",
                en: "Link mode only: whether the article is signed by an identifiable person."
              }
            }
          ]
        },
        {
          id: "decisions",
          features: [
            {
              icon: "lightbulb",
              title: {
                gl: "Métricas, non veredictos",
                es: "Métricas, no veredictos",
                en: "Metrics, not verdicts"
              },
              text: {
                gl: "En vez de dicir se algo é verdade ou mentira, o índice explica que falla e onde, para que o lector saque as súas propias conclusións.",
                es: "En lugar de decir si algo es verdad o mentira, el índice explica qué falla y dónde, para que el lector saque sus propias conclusiones.",
                en: "Instead of declaring something true or false, the score explains what is wrong and where, so readers can draw their own conclusions."
              }
            },
            {
              icon: "lightbulb",
              title: {
                gl: "Rotación de provedores de IA",
                es: "Rotación de proveedores de IA",
                en: "Rotating AI providers"
              },
              text: {
                gl: "Cerebras, Gemini, Mistral, SambaNova e Cloudflare repártense as análises por quendas, con failover automático: se un falla ou esgota a súa cota, responde o seguinte.",
                es: "Cerebras, Gemini, Mistral, SambaNova y Cloudflare se reparten los análisis por turnos, con failover automático: si uno falla o agota su cuota, responde el siguiente.",
                en: "Cerebras, Gemini, Mistral, SambaNova and Cloudflare take turns on the analyses, with automatic failover: if one fails or runs out of quota, the next one answers."
              }
            },
            {
              icon: "lightbulb",
              title: {
                gl: "Un modelo propio que aprende da nube",
                es: "Un modelo propio que aprende de la nube",
                en: "An in-house model that learns from the cloud"
              },
              text: {
                gl: "Cada análise na nube gárdase nun dataset que exporto e uso para adestrar VeriAI en local. Pasará a produción cando iguale ou supere as APIs.",
                es: "Cada análisis en la nube se guarda en un dataset que exporto y uso para entrenar VeriAI en local. Pasará a producción cuando iguale o supere a las APIs.",
                en: "Every cloud analysis is stored in a dataset that I export and use to train VeriAI locally. It will go into production once it matches or beats the APIs."
              }
            },
            {
              icon: "lightbulb",
              title: {
                gl: "Provedores escollidos con datos",
                es: "Proveedores elegidos con datos",
                en: "Providers chosen with data"
              },
              text: {
                gl: "Groq formaba parte da rotación, pero en probas con novas falsas daba notas máis altas ca o resto, é dicir, detectaba peor. Saqueino da puntuación e só le o texto das imaxes.",
                es: "Groq formaba parte de la rotación, pero en pruebas con noticias falsas daba notas más altas que el resto, es decir, detectaba peor. Lo saqué de la puntuación y solo lee el texto de las imágenes.",
                en: "Groq used to be part of the rotation, but in tests with fake news it gave higher scores than the rest, meaning it detected worse. I took it out of scoring and it now only reads text from images."
              }
            },
            {
              icon: "lightbulb",
              title: {
                gl: "Non pagar dúas veces pola mesma análise",
                es: "No pagar dos veces por el mismo análisis",
                en: "Never paying twice for the same analysis"
              },
              text: {
                gl: "Antes de chamar á IA calcúlase unha pegada (SHA-256) do contido. Se xa se analizou, devólvese o resultado gardado e non se gasta cota; se o medio editou o artigo, vólvese analizar.",
                es: "Antes de llamar a la IA se calcula una huella (SHA-256) del contenido. Si ya se analizó, se devuelve el resultado guardado y no se gasta cupo; si el medio editó el artículo, se vuelve a analizar.",
                en: "Before calling the AI, a fingerprint (SHA-256) of the content is computed. If it was already analysed, the stored result is returned and no quota is spent; if the outlet edited the article, it is analysed again."
              }
            }
          ]
        },
        {
          id: "stack",
          stack: [
            {
              layer: {
                gl: "Interface",
                es: "Interfaz",
                en: "Frontend"
              },
              items: [
                "React 19",
                "Vite",
                "React Router",
                "Recharts",
                "UnoCSS",
                "i18n propio (5 idiomas)"
              ]
            },
            {
              layer: {
                gl: "Servidor",
                es: "Servidor",
                en: "Backend"
              },
              items: [
                "Java 17",
                "Spring Boot 3.5",
                "Spring Security + JWT",
                "Spring Data JPA / Hibernate",
                "Maven",
                "JUnit"
              ]
            },
            {
              layer: {
                gl: "Datos",
                es: "Datos",
                en: "Data"
              },
              items: [
                "MySQL 8"
              ]
            },
            {
              layer: {
                gl: "Intelixencia artificial",
                es: "Inteligencia artificial",
                en: "Artificial intelligence"
              },
              items: [
                "Cerebras",
                "Gemini",
                "Mistral",
                "SambaNova",
                "Cloudflare AI",
                "Groq Vision",
                "Ollama",
                "Qwen 2.5 7B"
              ]
            },
            {
              layer: {
                gl: "Despregamento",
                es: "Despliegue",
                en: "Deployment"
              },
              items: [
                "Docker",
                "Render (API)",
                "Vercel (web)",
                "Cloudflare"
              ]
            },
            {
              layer: {
                gl: "Acceso",
                es: "Acceso",
                en: "Access"
              },
              items: [
                "Email y contraseña",
                "Inicio de sesión con Google"
              ]
            }
          ]
        },
        {
          id: "milestones",
          milestones: [
            {
              state: "done",
              name: {
                gl: "Primeira versión: análise de texto",
                es: "Primera versión: análisis de texto",
                en: "First version: text analysis"
              },
              detail: {
                gl: "Sete dimensións de contido combinadas no índice IMI de 0 a 100.",
                es: "Siete dimensiones de contenido combinadas en el índice IMI de 0 a 100.",
                en: "Seven content dimensions combined into the 0–100 IMI score."
              }
            },
            {
              state: "done",
              name: {
                gl: "Publicación en toveriai.com",
                es: "Publicación en toveriai.com",
                en: "Launch at toveriai.com"
              }
            },
            {
              state: "done",
              name: {
                gl: "Análise de URL e imaxes",
                es: "Análisis de URL e imágenes",
                en: "URL and image analysis"
              },
              detail: {
                gl: "Nove dimensións en modo URL e varias capturas por análise.",
                es: "Nueve dimensiones en modo URL y varias capturas por análisis.",
                en: "Nine dimensions in URL mode and multiple screenshots per analysis."
              }
            },
            {
              state: "done",
              name: {
                gl: "Contas, historial e feed público",
                es: "Cuentas, historial y feed público",
                en: "Accounts, history and public feed"
              }
            },
            {
              state: "progress",
              name: {
                gl: "Premium (beta)",
                es: "Premium (beta)",
                en: "Premium (beta)"
              },
              detail: {
                gl: "Análises ilimitadas, informes en PDF e tarxetas e selos para compartir.",
                es: "Análisis ilimitados, informes en PDF y tarjetas y sellos para compartir.",
                en: "Unlimited analyses, PDF reports and shareable cards and seals."
              }
            },
            {
              state: "progress",
              name: {
                gl: "VeriAI, modelo propio",
                es: "VeriAI, modelo propio",
                en: "VeriAI in-house model"
              },
              detail: {
                gl: "Versión 2 sobre Qwen 2.5 7B e unha variante sobre Qwen 3.5 7B en adestramento. Readéstrase cada 6.000 análises.",
                es: "Versión 2 sobre Qwen 2.5 7B y una variante sobre Qwen 3.5 7B en entrenamiento. Se reentrena cada 6.000 análisis.",
                en: "Version 2 on Qwen 2.5 7B, with a Qwen 3.5 7B variant in training. Retrained every 6,000 analyses."
              }
            }
          ]
        },
        {
          id: "learnings",
          list: [
            {
              gl: "Converter criterios xornalísticos en métricas que unha IA pode aplicar e unha persoa pode entender.",
              es: "Convertir criterios periodísticos en métricas que una IA puede aplicar y una persona puede entender.",
              en: "Turning journalistic criteria into metrics an AI can apply and a person can understand."
            },
            {
              gl: "Manter o servizo en pé alternando varios provedores de IA con control de cota.",
              es: "Mantener el servicio en pie alternando varios proveedores de IA con control de cuota.",
              en: "Keeping the service up by rotating several AI providers with quota control."
            },
            {
              gl: "Adestrar un modelo propio cun dataset xerado pola propia plataforma.",
              es: "Entrenar un modelo propio con un dataset generado por la propia plataforma.",
              en: "Training an in-house model on a dataset generated by the platform itself."
            },
            {
              gl: "Deseñar para cinco idiomas desde o principio, na interface e nas propias análises.",
              es: "Diseñar para cinco idiomas desde el principio, en la interfaz y en los propios análisis.",
              en: "Designing for five languages from day one, in the interface and in the analyses themselves."
            }
          ]
        }
      ]
    },
    {
      slug: "argaquest",
      name: "ArgaQuest",
      colors: [
        "#3b2f4a",
        "#8a6bb0"
      ],
      kind: {
        gl: "Plan Proxecta · Xogo educativo",
        es: "Plan Proxecta · Juego educativo",
        en: "Plan Proxecta · Educational game"
      },
      badge: {
        gl: "🏆 Primeiro premio · Xunta de Galicia",
        es: "🏆 Primer premio · Xunta de Galicia",
        en: "🏆 First prize · Xunta de Galicia"
      },
      status: {
        gl: "Premiado",
        es: "Premiado",
        en: "Award"
      },
      phase: {
        gl: "Curso 2025-26",
        es: "Curso 2025-26",
        en: "2025-26 school year"
      },
      tagline: {
        gl: "Aprender vocabulario en galego xogando.",
        es: "Aprender vocabulario en gallego jugando.",
        en: "Learning Galician vocabulary by playing."
      },
      summary: {
        gl: "Xogo educativo en galego que combina a aprendizaxe de vocabulario con dinámicas de xogo. Primeiro premio de Innovación Educativa da Xunta de Galicia.",
        es: "Juego educativo en gallego que combina el aprendizaje de vocabulario con dinámicas de juego. Primer premio de Innovación Educativa de la Xunta de Galicia.",
        en: "Educational game in Galician that combines vocabulary learning with game mechanics. First Prize for Educational Innovation from the Xunta de Galicia."
      },
      cover: {
        src: "assets/argaquest.png",
        mini: "assets/argaquest.png",
        alt: {
          gl: "Captura de ArgaQuest",
          es: "Captura de ArgaQuest",
          en: "Screenshot of ArgaQuest"
        }
      },
      url: "https://argaquest.fernandowirtz.com/",
      repo: "",
      tags: [
        "React",
        "Spring Boot",
        "WebSockets",
        "Docker"
      ],
      figures: [
        {
          value: "1.º",
          label: {
            gl: "premio de Innovación Educativa",
            es: "premio de Innovación Educativa",
            en: "prize for Educational Innovation"
          }
        },
        {
          value: "4",
          label: {
            gl: "medios fixéronse eco",
            es: "medios se hicieron eco",
            en: "media outlets covered it"
          }
        }
      ],
      gallery: [],
      press: [
        {
          label: {
            gl: "El Ideal Gallego (o xogo)",
            es: "El Ideal Gallego (el juego)",
            en: "El Ideal Gallego (the game)"
          },
          url: "https://www.elidealgallego.com/a-coruna/2026-05-07/el-ies-fernando-wirtz-crea-argaquest-un-videojuego-para-dinamizar-la-lengua-gallega-854108.html"
        },
        {
          label: {
            gl: "El Ideal Gallego (o premio)",
            es: "El Ideal Gallego (el premio)",
            en: "El Ideal Gallego (the prize)"
          },
          url: "https://www.elidealgallego.com/a-coruna/2026-05-27/o-ies-fernando-wirtz-da-coruna-recibe-2-000-euros-grazas-a-un-videoxogo-que-impulsa-a-lingua-galega-858142.html"
        },
        {
          label: "Neofalantes",
          url: "https://neofalantes.gal/un-oso-letras-e-moito-vocabulario-asi-e-argaquest-o-videoxogo-galego-creado-nun-instituto-da-coruna/"
        },
        {
          label: "CSIF",
          url: "https://www.csif.es/es/articulo/galicia/educacion/91509"
        }
      ],
      sections: [
        {
          id: "about",
          paragraphs: [
            {
              gl: "Xogo educativo en galego que combina a aprendizaxe de vocabulario con dinámicas de xogo.",
              es: "Juego educativo en gallego que combina el aprendizaje de vocabulario con dinámicas de juego.",
              en: "Educational game in Galician that combines vocabulary learning with game mechanics."
            },
            {
              gl: "Recibiu o Primeiro premio de Innovación Educativa en Dinamización Lingüística da Xunta de Galicia (curso 2025-26), que o recoñeceu como proxecto excelente.",
              es: "Recibió el Primer premio de Innovación Educativa en Dinamización Lingüística de la Xunta de Galicia (curso 2025-26), que lo reconoció como proyecto excelente.",
              en: "It received the First Prize for Educational Innovation in Language Promotion from the Xunta de Galicia, the Galician regional government (2025-26 school year), which recognised it as an outstanding project."
            }
          ]
        },
        {
          id: "role",
          draft: true,
          ask: {
            gl: "Que fixeches ti en ArgaQuest? E nun equipo de cantas persoas?",
            es: "¿Qué hiciste tú en ArgaQuest? (frontend, backend, WebSockets, diseño, coordinación…) y en un equipo de cuántas personas.",
            en: "What did you do in ArgaQuest, and how big was the team?"
          }
        },
        {
          id: "steps",
          draft: true,
          ask: {
            gl: "Como se xoga? En 3 ou 4 pasos.",
            es: "¿Cómo se juega? Explícalo en 3 o 4 pasos (crear partida, unirse, retos…).",
            en: "How is it played? In 3 or 4 steps."
          }
        },
        {
          id: "decisions",
          draft: true,
          ask: {
            gl: "Algunha decisión técnica que queiras contar?",
            es: "¿Alguna decisión técnica que quieras contar? Por ejemplo, por qué WebSockets para las partidas en tiempo real.",
            en: "Any technical decision you want to explain?"
          }
        },
        {
          id: "stack",
          stack: [
            {
              layer: {
                gl: "Interface",
                es: "Interfaz",
                en: "Front end"
              },
              items: [
                "React",
                "SCSS"
              ]
            },
            {
              layer: {
                gl: "Servidor",
                es: "Servidor",
                en: "Back end"
              },
              items: [
                "Java",
                "Spring Boot",
                "REST",
                "WebSockets",
                "JPA"
              ]
            },
            {
              layer: {
                gl: "Calidade e equipo",
                es: "Calidad y equipo",
                en: "Quality & teamwork"
              },
              items: [
                "Docker",
                "JUnit",
                "Git",
                "Scrum"
              ]
            }
          ]
        },
        {
          id: "press",
          press: true
        }
      ]
    }
  ],

  experience: [
    {
      date: {
        gl: "Abril – Xullo 2025 (4 meses) · Marzo – Xullo 2026 (5 meses)",
        es: "Abril – Julio 2025 (4 meses) · Marzo – Julio 2026 (5 meses)",
        en: "Apr – Jul 2025 (4 months) · Mar – Jul 2026 (5 months)"
      },
      title: {
        gl: "Desenvolvedora en prácticas (FP Dual)",
        es: "Desarrolladora en prácticas (FP Dual)",
        en: "Developer intern (dual vocational training)"
      },
      slug: "seidor",
      org: "Seidor",
      points: {
        gl: [
          "Desenvolvemento en IBM i (AS/400): RPG FREE, SQL embebido e servizos REST.",
          "Modelos e migración a SQL con formato JSON orientado a React.",
          "Modernización de interfaces green-screen a unha contorna gráfica React.",
          "Git/GitHub para código IBM i e traballo en equipo con Scrum."
        ],
        es: [
          "Desarrollo en IBM i (AS/400): RPG FREE, SQL embebido y servicios REST.",
          "Modelos y migración a SQL con formateo JSON orientado a React.",
          "Modernización de interfaces green-screen a un entorno gráfico React.",
          "Git/GitHub para código IBM i y trabajo en equipo con Scrum."
        ],
        en: [
          "IBM i (AS/400) development: RPG FREE, embedded SQL and REST services.",
          "Data models and migration to SQL with JSON output for React.",
          "Modernized green-screen interfaces into a graphical React front end.",
          "Git/GitHub for IBM i code and teamwork with Scrum."
        ]
      },
      detail: {
        colors: [
          "#2c4a78",
          "#5b7fb8"
        ],
        name: "Seidor",
        kind: {
          gl: "Experiencia · Desenvolvedora en prácticas (FP Dual)",
          es: "Experiencia · Desarrolladora en prácticas (FP Dual)",
          en: "Experience · Developer intern (dual vocational training)"
        },
        tagline: {
          gl: "Modernización de aplicacións IBM i: da pantalla verde a React.",
          es: "Modernización de aplicaciones IBM i: de la pantalla verde a React.",
          en: "Modernizing IBM i applications: from green screen to React."
        },
        figures: [
          {
            value: "9",
            label: {
              gl: "meses de prácticas",
              es: "meses de prácticas",
              en: "months of internship"
            }
          },
          {
            value: "2",
            label: {
              gl: "períodos: 2025 e 2026",
              es: "periodos: 2025 y 2026",
              en: "periods: 2025 and 2026"
            }
          },
          {
            value: "IBM i",
            label: {
              gl: "sistemas AS/400 modernizados a web",
              es: "sistemas AS/400 modernizados a web",
              en: "AS/400 systems modernized for the web"
            }
          }
        ],
        sections: [
          {
            id: "about",
            paragraphs: [
              {
                gl: "Fixen as prácticas da FP Dual en Seidor en dous períodos: de abril a xullo de 2025 e de marzo a xullo de 2026.",
                es: "Hice las prácticas de la FP Dual en Seidor en dos periodos: de abril a julio de 2025 y de marzo a julio de 2026.",
                en: "I did my dual vocational training internship at Seidor in two periods: April to July 2025 and March to July 2026."
              },
              {
                gl: "Traballei na modernización de aplicacións IBM i (AS/400): levar a lóxica de negocio escrita en RPG e SQL a servizos REST e substituír as pantallas green-screen por interfaces en React.",
                es: "Trabajé en la modernización de aplicaciones IBM i (AS/400): llevar la lógica de negocio escrita en RPG y SQL a servicios REST y sustituir las pantallas green-screen por interfaces en React.",
                en: "I worked on modernizing IBM i (AS/400) applications: moving business logic written in RPG and SQL into REST services and replacing green-screen terminals with React interfaces."
              }
            ]
          },
          {
            id: "role",
            title: {
              gl: "Que fixen",
              es: "Qué hice",
              en: "What I did"
            },
            list: [
              {
                gl: "Desenvolvemento en IBM i (AS/400): RPG FREE, SQL embebido e servizos REST.",
                es: "Desarrollo en IBM i (AS/400): RPG FREE, SQL embebido y servicios REST.",
                en: "IBM i (AS/400) development: RPG FREE, embedded SQL and REST services."
              },
              {
                gl: "Modelos e migración a SQL con formato JSON orientado a React.",
                es: "Modelos y migración a SQL con formateo JSON orientado a React.",
                en: "Data models and migration to SQL with JSON output for React."
              },
              {
                gl: "Modernización de interfaces green-screen a unha contorna gráfica React.",
                es: "Modernización de interfaces green-screen a un entorno gráfico React.",
                en: "Modernized green-screen interfaces into a graphical React front end."
              },
              {
                gl: "Git/GitHub para código IBM i e traballo en equipo con Scrum.",
                es: "Git/GitHub para código IBM i y trabajo en equipo con Scrum.",
                en: "Git/GitHub for IBM i code and teamwork with Scrum."
              }
            ]
          },
          {
            id: "projects",
            title: {
              gl: "Proxectos nos que participei",
              es: "Proyectos en los que participé",
              en: "Projects I worked on"
            },
            draft: true,
            ask: {
              gl: "En que tipo de proxectos ou aplicacións traballaches? (sen nomes de clientes se son confidenciais)",
              es: "¿En qué tipo de proyectos o aplicaciones trabajaste? (sin nombres de clientes si son confidenciales)",
              en: "What kind of projects or applications did you work on?"
            }
          },
          {
            id: "achievement",
            title: {
              gl: "Un logro concreto",
              es: "Un logro concreto",
              en: "A concrete achievement"
            },
            draft: true,
            ask: {
              gl: "Algo concreto do que esteas orgullosa? Mellor cun dato.",
              es: "¿Algo concreto de lo que estés orgullosa? Mejor con un dato: pantallas migradas, tiempo ahorrado, algo que se puso en producción…",
              en: "Something concrete you are proud of, ideally with a number."
            }
          },
          {
            id: "team",
            title: {
              gl: "Equipo e forma de traballo",
              es: "Equipo y forma de trabajo",
              en: "Team and way of working"
            },
            draft: true,
            ask: {
              gl: "Con canta xente traballabas e como vos organizabades?",
              es: "¿Con cuánta gente trabajabas y cómo os organizabais (Scrum, sprints, revisiones de código…)?",
              en: "How big was the team and how did you work?"
            }
          },
          {
            id: "stack",
            stack: [
              {
                layer: {
                  gl: "IBM i",
                  es: "IBM i",
                  en: "IBM i"
                },
                items: [
                  "AS/400",
                  "RPG FREE",
                  "SQL embebido"
                ]
              },
              {
                layer: {
                  gl: "Servizos",
                  es: "Servicios",
                  en: "Services"
                },
                items: [
                  "APIs REST",
                  "JSON"
                ]
              },
              {
                layer: {
                  gl: "Interface",
                  es: "Interfaz",
                  en: "Front end"
                },
                items: [
                  "React"
                ]
              },
              {
                layer: {
                  gl: "Equipo",
                  es: "Equipo",
                  en: "Teamwork"
                },
                items: [
                  "Git",
                  "GitHub",
                  "Scrum"
                ]
              }
            ]
          },
          {
            id: "learnings",
            title: null,
            draft: true,
            ask: {
              gl: "Que aprendiches en Seidor?",
              es: "¿Qué aprendiste en Seidor? Dos o tres frases.",
              en: "What did you learn at Seidor?"
            }
          }
        ]
      }
    }
  ],

  education: [
    {
      date: "2026 – 2027",
      title: {
        gl: "Especialización Dual en IA e Big Data",
        es: "Especialización Dual en IA y Big Data",
        en: "Dual Specialization Course in AI and Big Data"
      },
      slug: "ia-big-data",
      org: "IES Fernando Wirtz Suárez",
      detail: {
        colors: [
          "#1f3a66",
          "#8a6bb0"
        ],
        badge: {
          gl: "● En curso",
          es: "● En curso",
          en: "● In progress"
        },
        kind: {
          gl: "Formación · IES Fernando Wirtz Suárez · 2026 – 2027",
          es: "Formación · IES Fernando Wirtz Suárez · 2026 – 2027",
          en: "Education · IES Fernando Wirtz Suárez · 2026 – 2027"
        },
        tagline: {
          gl: "A especialización que estou cursando agora para profundar en intelixencia artificial e datos.",
          es: "La especialización que estoy cursando ahora para profundizar en inteligencia artificial y datos.",
          en: "The specialization I'm taking now to go deeper into artificial intelligence and data."
        },
        sections: [
          {
            id: "about",
            paragraphs: [
              {
                gl: "Curso de especialización dual en Intelixencia Artificial e Big Data no IES Fernando Wirtz Suárez, que estou cursando en 2026-2027.",
                es: "Curso de especialización dual en Inteligencia Artificial y Big Data en el IES Fernando Wirtz Suárez, que estoy cursando en 2026-2027.",
                en: "Dual specialization course in Artificial Intelligence and Big Data at IES Fernando Wirtz Suárez, which I'm taking in 2026-2027."
              },
              {
                gl: "Combínoo con VeriAI, o modelo propio de toVeriAI que adestro en local.",
                es: "Lo combino con VeriAI, el modelo propio de toVeriAI que entreno en local.",
                en: "I combine it with VeriAI, toVeriAI's own model, which I train locally."
              }
            ]
          },
          {
            id: "related",
            title: {
              gl: "Onde o aplico",
              es: "Dónde lo aplico",
              en: "Where I apply it"
            },
            related: [
              {
                kind: "project",
                slug: "toveriai",
                name: "toVeriAI",
                text: {
                  gl: "VeriAI: fine-tuning dun modelo propio co dataset da plataforma.",
                  es: "VeriAI: fine-tuning de un modelo propio con el dataset de la plataforma.",
                  en: "VeriAI: fine-tuning an in-house model on the platform's dataset."
                }
              }
            ]
          },
          {
            id: "modules",
            title: {
              gl: "Módulos e ferramentas",
              es: "Módulos y herramientas",
              en: "Modules and tools"
            },
            draft: true,
            ask: {
              gl: "Que módulos e ferramentas estás vendo?",
              es: "¿Qué módulos y herramientas estás viendo (Python, ML, Spark, cloud…)?",
              en: "Which modules and tools are you studying?"
            }
          },
          {
            id: "company",
            title: {
              gl: "Formación en empresa",
              es: "Formación en empresa",
              en: "Company training"
            },
            draft: true,
            ask: {
              gl: "Ao ser dual, en que empresa farás a parte práctica?",
              es: "Al ser dual, ¿en qué empresa harás la parte práctica y en qué trabajarás? (si ya lo sabes)",
              en: "Being dual, which company will you train at?"
            }
          }
        ]
      }
    },
    {
      date: "2024 – 2026",
      title: {
        gl: "FP Dual Desenvolvemento de Aplicacións Web",
        es: "FP Dual Desarrollo de Aplicaciones Web",
        en: "Higher Vocational Degree in Web Application Development (dual)"
      },
      slug: "fp-daw",
      org: "IES Fernando Wirtz Suárez",
      detail: {
        colors: [
          "#7a3d1f",
          "#a4532a"
        ],
        kind: {
          gl: "Formación · IES Fernando Wirtz Suárez · 2024 – 2026",
          es: "Formación · IES Fernando Wirtz Suárez · 2024 – 2026",
          en: "Education · IES Fernando Wirtz Suárez · 2024 – 2026"
        },
        tagline: {
          gl: "Ciclo superior dual: formación no instituto e prácticas en empresa.",
          es: "Ciclo superior dual: formación en el instituto y prácticas en empresa.",
          en: "Dual higher vocational degree: classes at school and an internship at a company."
        },
        figures: [
          {
            value: "2",
            label: {
              gl: "anos de ciclo",
              es: "años de ciclo",
              en: "years"
            }
          },
          {
            value: "9",
            label: {
              gl: "meses en empresa (Seidor)",
              es: "meses en empresa (Seidor)",
              en: "months at a company (Seidor)"
            }
          },
          {
            value: "2",
            label: {
              gl: "proxectos destacados",
              es: "proyectos destacados",
              en: "standout projects"
            }
          }
        ],
        sections: [
          {
            id: "about",
            paragraphs: [
              {
                gl: "Ciclo superior de Desenvolvemento de Aplicacións Web en modalidade dual no IES Fernando Wirtz Suárez (A Coruña), de 2024 a 2026.",
                es: "Ciclo superior de Desarrollo de Aplicaciones Web en modalidad dual en el IES Fernando Wirtz Suárez (A Coruña), de 2024 a 2026.",
                en: "Higher vocational degree in Web Application Development, dual mode, at IES Fernando Wirtz Suárez (A Coruña), 2024 to 2026."
              },
              {
                gl: "A parte en empresa fíxena en Seidor, e do ciclo saíron os meus dous proxectos principais: toVeriAI, o meu Traballo de Fin de Ciclo, e ArgaQuest, premiado pola Xunta de Galicia.",
                es: "La parte en empresa la hice en Seidor, y del ciclo salieron mis dos proyectos principales: toVeriAI, mi Trabajo de Fin de Ciclo, y ArgaQuest, premiado por la Xunta de Galicia.",
                en: "I did the company part at Seidor, and my two main projects came out of the course: toVeriAI, my final project, and ArgaQuest, awarded by the Xunta de Galicia."
              }
            ]
          },
          {
            id: "related",
            title: {
              gl: "Proxectos e prácticas do ciclo",
              es: "Proyectos y prácticas del ciclo",
              en: "Projects and internship"
            },
            related: [
              {
                kind: "project",
                slug: "toveriai",
                name: "toVeriAI",
                text: {
                  gl: "Traballo de Fin de Ciclo, hoxe en produción.",
                  es: "Trabajo de Fin de Ciclo, hoy en producción.",
                  en: "Final project, now live."
                }
              },
              {
                kind: "project",
                slug: "argaquest",
                name: "ArgaQuest",
                text: {
                  gl: "Plan Proxecta · Primeiro premio da Xunta de Galicia.",
                  es: "Plan Proxecta · Primer premio de la Xunta de Galicia.",
                  en: "Plan Proxecta · First prize from the Xunta de Galicia."
                }
              },
              {
                kind: "trail",
                slug: "seidor",
                name: "Seidor",
                text: {
                  gl: "Prácticas de FP Dual: IBM i e React.",
                  es: "Prácticas de FP Dual: IBM i y React.",
                  en: "Dual training internship: IBM i and React."
                }
              }
            ]
          },
          {
            id: "modules",
            title: {
              gl: "Módulos e tecnoloxías do ciclo",
              es: "Módulos y tecnologías del ciclo",
              en: "Course modules and technologies"
            },
            draft: true,
            ask: {
              gl: "Que módulos ou tecnoloxías do ciclo queres destacar?",
              es: "¿Qué módulos o tecnologías del ciclo quieres destacar?",
              en: "Which modules or technologies do you want to highlight?"
            }
          },
          {
            id: "learnings",
            title: null,
            draft: true,
            ask: {
              gl: "Que levas do ciclo?",
              es: "¿Qué te llevas del ciclo? Dos o tres frases.",
              en: "What did you take away from the course?"
            }
          }
        ]
      }
    },
    {
      date: "2026",
      title: {
        gl: "Curso de Project Management (220 h)",
        es: "Curso de Project Management (220 h)",
        en: "Project Management course (220 h)"
      },
      org: "Xunta de Galicia · Consultora Monte Alto"
    },
    {
      date: "2023 – 2025",
      title: {
        gl: "Máster en Programación Full Stack: aplicacións web",
        es: "Máster en Programación Full Stack: aplicaciones web",
        en: "Master's in Full Stack Programming: web applications"
      },
      org: "Tokio.School"
    },
    {
      date: "2017 – 2021",
      title: {
        gl: "Grao en Educación Social",
        es: "Grado en Educación Social",
        en: "Bachelor's Degree in Social Education"
      },
      org: "Universidade da Coruña (UDC)"
    }
  ],

  skills: [
    { group: "Backend", items: ["Java", "Spring Boot", "Spring Security", "JWT", "RPG FREE", "SQL", "MySQL", "H2", "APIs REST"] },
    { group: "Frontend", items: ["React", "Angular", "SCSS", "Vite"] },
    {
      group: { gl: "Intelixencia Artificial", es: "Inteligencia Artificial", en: "Artificial Intelligence" },
      items: [{ gl: "Fine-tuning de LLMs", es: "Fine-tuning de LLMs", en: "LLM fine-tuning" }, "Qwen 2.5", "Qwen 3.5", "Llama 3.2", "Ollama", "Cerebras", "SambaNova", "Gemini", "Mistral", "Cloudflare AI", "Groq"]
    },
    { group: { gl: "Ferramentas", es: "Herramientas", en: "Tools" }, items: ["Git", "GitHub", "Docker", "JUnit", "Postman"] },
    {
      group: { gl: "Metodoloxía e idiomas", es: "Metodología e idiomas", en: "Methodology & languages" },
      items: [
        "Scrum",
        { gl: "Xestión de proxectos", es: "Gestión de proyectos", en: "Project management" },
        { gl: "Castelán (nativo)", es: "Español (nativo)", en: "Spanish (native)" },
        { gl: "Inglés (B1/B2)", es: "Inglés (B1/B2)", en: "English (B1/B2)" }
      ]
    }
  ]
};
