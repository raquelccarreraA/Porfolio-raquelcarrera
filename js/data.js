// Todo el contenido del CV vive aquí. Edita este archivo y la web se actualiza sola.
const CV = {
  name: "Raquel Comesaña Carrera",
  role: "Full Stack Developer · Java · Spring Boot · React · AI y Big Data",
  location: "A Coruña, Galicia",
  summary: "Modernizo sistemas legacy y construyo aplicaciones web completas, del backend a la interfaz. Creadora de toVeriAI, una aplicación en producción.",

  links: {
    email: "raquel.ccarrera@gmail.com",
    phone: "671 14 07 53",
    linkedin: "https://www.linkedin.com/in/raquel-comesa%C3%B1a-carrera-1646ba195",
    github: "https://github.com/raquelccarreraA"
  },

  letter: {
    lead: "Desarrolladora Web Full Stack con experiencia real en modernización de aplicaciones en Seidor y sólida formación en DAW. Actualmente ampliando conocimientos con una especialización en Inteligencia Artificial y Big Data.",
    intro: "Mi trayectoria destaca por combinar el desarrollo moderno con la comprensión de arquitecturas complejas:",
    points: [
      { title: "Backend y modernización", text: "Java, Spring Boot, APIs REST, JUnit/Mockito, más mantenimiento y migración sobre entornos IBM i (AS/400) y RPG FREE." },
      { title: "Frontend y proyectos propios", text: "React y proyectos como toVeriAI (credibilidad con IA multimodal) y ArgaQuest, asumiendo el ciclo de vida completo de las aplicaciones." },
      { title: "Bases de datos y herramientas", text: "MySQL, SQL, Docker, Git y metodologías ágiles (Scrum)." }
    ],
    outro: "Mi grado en Educación Social me aporta comunicación, empatía, resolución de conflictos y un alto sentido de la responsabilidad en el trabajo en equipo."
  },

  projects: [
    {
      name: "toVeriAI",
      kind: "TFC y proyecto personal",
      image: "assets/toveriai.png",          // opcional: captura del proyecto
      colors: ["#1f3a66", "#5b7fb8"],
      url: "https://www.toveriai.com",
      points: [
        "Analiza noticias con IA y devuelve un índice de credibilidad propio basado en métricas de contenido y fuente.",
        "React 19 + Vite, Vercel CDN, Spring Boot, Spring Security + JWT, i18n y Render.",
        "MySQL, Gmail SMTP, rotación cloud entre 5 proveedores y Ollama (qwen 1.5b, 4b, 7b) para fine-tuning local."
      ],
      tags: ["React", "Spring Boot", "Groq API", "JWT"]
    },
    {
      name: "ArgaQuest",
      kind: "Plan Proxecta · Proyecto ganador",
      image: "assets/argaquest.png",         // opcional
      colors: ["#3b2f4a", "#8a6bb0"],
      url: "https://argaquest.fernandowirtz.com/",
      points: [
        "Juego educativo en gallego que combina aprendizaje de vocabulario y dinámicas de juego.",
        "React, SCSS, Java/Spring Boot (REST, WebSockets, JPA).",
        "Docker, JUnit, Git y metodología Scrum."
      ],
      tags: ["React", "Spring Boot", "WebSockets", "Docker"]
    }
  ],

  experience: [
    {
      date: "Abril – Julio 2025 · Marzo – Julio 2026",
      title: "Desarrolladora",
      org: "Seidor",
      points: [
        "Desarrollo en IBM i (AS400): RPG FREE, SQL embebido y servicios REST.",
        "Modelos y migración a SQL con formateo JSON orientado a React.",
        "Modernización de interfaces green-screen a un entorno gráfico React.",
        "Git/GitHub para código IBM i y trabajo en equipo con Scrum."
      ]
    }
  ],

  education: [
    { date: "2026 – 2027", title: "Especialización Dual en AI y Big Data", org: "IES Fernando Wirtz Suárez" },
    { date: "2024 – 2026", title: "FP Dual Desarrollo de Aplicaciones Web", org: "IES Fernando Wirtz Suárez" },
    { date: "2023 – 2025", title: "Máster en Programación Full Stack: aplicaciones web", org: "Tokio.School" }
  ],

  skills: {
    "Backend": ["Java", "Spring Boot", "Spring Security", "JWT", "RPG FREE", "SQL", "MySQL", "H2", "APIs REST"],
    "Frontend": ["React", "Angular", "SCSS", "Vite"],
    "Herramientas": ["Git", "GitHub", "Docker", "JUnit", "Postman"],
    "Metodología e idiomas": ["Scrum", "Español (nativo)", "Inglés (B1/B2)"]
  }
};
