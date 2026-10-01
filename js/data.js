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

  projects: [
    {
      name: "toVeriAI",
      kind: {
        gl: "Traballo de Fin de Ciclo e proxecto persoal",
        es: "Trabajo de Fin de Ciclo y proyecto personal",
        en: "Final degree project & personal project"
      },
      image: "assets/toveriai.png",
      colors: ["#1f3a66", "#5b7fb8"],
      url: "https://www.toveriai.com",
      repo: "",                              // enlace al código en GitHub; vacío = sin botón
      points: {
        gl: [
          "Analiza noticias con IA e devolve un índice de credibilidade propio baseado en métricas de contido e fonte. Tamén analiza imaxes que conteñen texto.",
          "Fine-tuning de Qwen 2.5 7B cos resultados acumulados das APIs de IA na nube para crear a versión 1 dun modelo propio que funciona en local.",
          "React 19 + Vite, Spring Boot, Spring Security + JWT, MySQL, i18n e rotación entre 5 provedores de IA na nube."
        ],
        es: [
          "Analiza noticias con IA y devuelve un índice de credibilidad propio basado en métricas de contenido y fuente. También analiza imágenes que contienen texto.",
          "Fine-tuning de Qwen 2.5 7B con los resultados acumulados de las APIs de IA en la nube para crear la versión 1 de un modelo propio que funciona en local.",
          "React 19 + Vite, Spring Boot, Spring Security + JWT, MySQL, i18n y rotación entre 5 proveedores de IA en la nube."
        ],
        en: [
          "Analyzes news with AI and returns its own credibility score based on content and source metrics. It also analyzes images that contain text.",
          "Fine-tuned Qwen 2.5 7B on the accumulated results from cloud AI APIs to build version 1 of its own model that runs locally.",
          "React 19 + Vite, Spring Boot, Spring Security + JWT, MySQL, i18n and rotation across 5 cloud AI providers."
        ]
      },
      tags: ["React", "Spring Boot", "Groq API", "Fine-tuning", "JWT"]
    },
    {
      name: "ArgaQuest",
      kind: {
        gl: "Plan Proxecta · Primeiro premio",
        es: "Plan Proxecta · Primer premio",
        en: "Plan Proxecta · First prize"
      },
      image: "assets/argaquest.png",
      colors: ["#3b2f4a", "#8a6bb0"],
      url: "https://argaquest.fernandowirtz.com/",
      repo: "",
      points: {
        gl: [
          "Primeiro premio de Innovación Educativa en Dinamización Lingüística, concedido pola Xunta de Galicia.",
          "Xogo educativo en galego que combina a aprendizaxe de vocabulario con dinámicas de xogo.",
          "React, SCSS, Java/Spring Boot (REST, WebSockets, JPA), Docker, JUnit, Git e Scrum."
        ],
        es: [
          "Primer premio de Innovación Educativa en Dinamización Lingüística, concedido por la Xunta de Galicia.",
          "Juego educativo en gallego que combina el aprendizaje de vocabulario con dinámicas de juego.",
          "React, SCSS, Java/Spring Boot (REST, WebSockets, JPA), Docker, JUnit, Git y Scrum."
        ],
        en: [
          "First prize for Educational Innovation in Language Promotion, awarded by the Xunta de Galicia (Galician regional government).",
          "Educational game in Galician that combines vocabulary learning with game mechanics.",
          "React, SCSS, Java/Spring Boot (REST, WebSockets, JPA), Docker, JUnit, Git and Scrum."
        ]
      },
      tags: ["React", "Spring Boot", "WebSockets", "Docker"]
    }
  ],

  experience: [
    {
      date: {
        gl: "Abril – Xullo 2025 · Marzo – Xullo 2026",
        es: "Abril – Julio 2025 · Marzo – Julio 2026",
        en: "Apr – Jul 2025 · Mar – Jul 2026"
      },
      title: {
        gl: "Desenvolvedora en prácticas (FP Dual)",
        es: "Desarrolladora en prácticas (FP Dual)",
        en: "Developer intern (dual vocational training)"
      },
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
      org: "IES Fernando Wirtz Suárez"
    },
    {
      date: "2024 – 2026",
      title: {
        gl: "FP Dual Desenvolvemento de Aplicacións Web",
        es: "FP Dual Desarrollo de Aplicaciones Web",
        en: "Higher Vocational Degree in Web Application Development (dual)"
      },
      org: "IES Fernando Wirtz Suárez"
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
      items: [{ gl: "Fine-tuning de LLMs", es: "Fine-tuning de LLMs", en: "LLM fine-tuning" }, "Qwen 2.5", "Ollama", "Groq API"]
    },
    { group: { gl: "Ferramentas", es: "Herramientas", en: "Tools" }, items: ["Git", "GitHub", "Docker", "JUnit", "Postman"] },
    {
      group: { gl: "Metodoloxía e idiomas", es: "Metodología e idiomas", en: "Methodology & languages" },
      items: [
        "Scrum",
        { gl: "Castelán (nativo)", es: "Español (nativo)", en: "Spanish (native)" },
        { gl: "Inglés (B1)", es: "Inglés (B1)", en: "English (B1)" }
      ]
    }
  ]
};
