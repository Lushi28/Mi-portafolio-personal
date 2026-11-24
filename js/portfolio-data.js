/* ==========================================================================
   js/portfolio-data.js
   --------------------------------------------------------------------------
   Archivo central de datos del portafolio.
   Centraliza la información de portada, perfil, proyectos, CV y blog
   para facilitar el mantenimiento sin modificar la estructura HTML.
   ========================================================================== */

window.PORTFOLIO_DATA = {
  // 1. DATOS DE INICIO Y CONTACTO: portada (Hero) y sección Contáctame
  greeting: {
    fullName: "Luisa Fernanda Sepúlveda Doria",
    role: "Desarrolladora Java Full Stack Jr. en formación",
    valueProposition:
      "Vengo del soporte técnico en Stefanini Group, donde aprendí a diagnosticar incidencias y entender las necesidades de los usuarios. Hoy aplico esa experiencia al desarrollo de aplicaciones web.",
    email: "luisadoria858@gmail.com",
    phoneDisplay: "+57 302 717 5593",
    phoneHref: "tel:+573027175593",
    location: "Bogotá, Colombia · Disponible para trabajo presencial, híbrido o remoto",
    githubProfile: "https://github.com/Lushi28",
    portfolioRepository: "https://github.com/Lushi28/Mi-portafolio-personal",
    // Perfil profesional de LinkedIn
    linkedinProfile: "https://www.linkedin.com/in/luisa-sep%C3%BAlveda-66b8693b1/",
  },

  // 2. SECCIÓN "SOBRE MÍ": historia personal en primera persona y 3 tarjetas resumen
  about: {
    title: "De resolver incidencias a construir soluciones digitales",
    lead:
      "Me caracterizo por ser una persona analítica, responsable y orientada al aprendizaje continuo, con pasión por transformar necesidades reales en aplicaciones útiles.",
    paragraphs: [
      "Mi trayectoria en tecnología comenzó en el área de soporte técnico, donde trabajé como Analista de Soporte Nivel 1 en Stefanini Group en Bogotá. Allí fortalecí mi pensamiento analítico, la empatía con el usuario final y la capacidad para diagnosticar y resolver problemas bajo presión en herramientas y aplicaciones corporativas.",
      "Ese contacto diario con la tecnología despertó mi pasión por ir un paso más allá: no solo dar soporte a las herramientas, sino diseñarlas y construirlas. Hoy me formo como Desarrolladora Full Stack en Java en Generation Colombia, integrando lógica de negocio, bases de datos SQL y desarrollo web con HTML5, CSS3, Bootstrap y JavaScript.",
      "Cada proyecto que construyo —ya sea en equipo como Tú Mayorista Virtual (TMV) o de forma personal como Plan Amigo— refleja mi compromiso con el código limpio, la organización y la mejora constante. Busco mi primera oportunidad como Desarrolladora Java Full Stack Junior donde pueda aportar valor real y seguir creciendo junto a un gran equipo.",
    ],
    highlights: [
      {
        label: "Perfil",
        value: "Java Full Stack Jr.",
        detail: "Java, Spring Boot, SQL, HTML5, CSS3, Bootstrap y JavaScript",
      },
      {
        label: "Base Profesional",
        value: "Soporte Técnico N1",
        detail: "Experiencia real en Stefanini Group con usuarios y aplicaciones corporativas",
      },
      {
        label: "Objetivo",
        value: "Impacto & Crecimiento",
        detail: "Integrarme a un equipo de desarrollo en Bogotá o remoto",
      },
    ],
  },

  // 3. SECCIÓN "PROYECTOS": lista de proyectos colaborativos y personales
  // Puedes agregar un nuevo objeto aquí siguiendo el mismo formato para sumar proyectos
  projects: [
    {
      id: "tmv-project",
      title: "Tú Mayorista Virtual (TMV)",
      category: "Colaborativo",
      period: "Septiembre – Noviembre 2026",
      previewType: "tmv",
      summary:
        "Plataforma web comercial desarrollada en equipo (5 personas) para explorar productos mayoristas por categorías.",
      cardContribution:
        "Construí la vista de catálogo y la navegación lateral por categorías (aseo, desinfectantes, detergentes, protección y cocina) con HTML5, CSS3, Bootstrap y JavaScript (23 commits).",
      teamStackNote:
        "Stack del equipo: Frontend en HTML5, CSS3, Bootstrap y JavaScript; Backend en Java, Spring Boot y MySQL; pruebas QA con Postman y Selenium.",
      problemSolved:
        "Ofrecer a los usuarios una plataforma web comercial clara y bien organizada para explorar productos mayoristas por categorías, manteniendo una arquitectura desacoplada y escalable.",
      myContribution:
        "Construí el catálogo y la navegación por categorías en el frontend (23 commits, segunda mayor contribuidora del repositorio), organizando líneas de aseo y limpieza, desinfectantes, detergentes, protección y cocina, e integrando el trabajo con el backend del equipo en Java, Spring Boot y MySQL mediante Git.",
      challenges:
        "Coordinar el trabajo simultáneo de cinco integrantes y organizar múltiples líneas de productos manteniendo una navegación clara y consistente en móvil y escritorio.",
      solution:
        "Estructuramos el repositorio de forma modular (`frontend/`, `backend/`, `docs/`), diseñamos una barra lateral intuitiva para filtrar categorías y trabajamos con flujo ordenado de ramas en Git y validaciones QA.",
      features: [
        "Vista de catálogo de productos y barra lateral de categorías (mi aporte principal).",
        "Frontend modular con componentes reutilizables en HTML5, CSS3, Bootstrap y JavaScript ES6.",
        "Backend del equipo en Java, Spring Boot, Maven y base de datos MySQL.",
        "Plan de pruebas y automatización QA con Postman y Selenium WebDriver.",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JavaScript",
        "Git",
        "Java (equipo)",
        "Spring Boot (equipo)",
        "MySQL (equipo)",
      ],
      collaborators: [
        { name: "jlozanopenagos", url: "https://github.com/jlozanopenagos" },
        { name: "NightwingJP", url: "https://github.com/NightwingJP" },
        { name: "JBoncho", url: "https://github.com/JBoncho" },
        { name: "Angelamlarap16", url: "https://github.com/Angelamlarap16" },
      ],
      repoUrl: "https://github.com/NightwingJP/TMV-Project",
    },
    {
      id: "our-board-friend",
      title: "Our Board Friend — Plan Amigo",
      category: "Personal",
      period: "Octubre – Noviembre 2026",
      previewType: "plan-amigo",
      summary:
        "Aplicación web adaptable para registrar y organizar tareas en tarjetas con responsables, fechas límite y estados.",
      cardContribution:
        "Diseñé y programé todo el proyecto: validaciones accesibles, gestión de tarjetas (agregar/eliminar), contador en tiempo real y persistencia con LocalStorage.",
      teamStackNote:
        "Proyecto individual enfocado en fundamentos de JavaScript, manipulación del DOM, accesibilidad y persistencia local.",
      problemSolved:
        "Brindar una herramienta ligera y directa para planificar pendientes diarios paso a paso, permitiendo visualizar responsables, fechas límite y avances sin perder datos al recargar.",
      myContribution:
        "Desarrollé la aplicación completa de forma independiente: maquetación semántica y accesible en HTML5, estilos responsivos con CSS3 y Bootstrap 5, validaciones de formulario, funciones para agregar y eliminar tareas, contador dinámico y persistencia en LocalStorage.",
      challenges:
        "Validar todos los campos del formulario de manera clara para el usuario, mantener sincronizado el contador de tareas al agregar o eliminar tarjetas y conservar el estado al cerrar el navegador.",
      solution:
        "Implementé validaciones en JavaScript con alertas accesibles (`role=\"alert\"`, `aria-live=\"polite\"`), manejo de estados (`Por hacer`, `En proceso`, `Revisión`, `Hecho`) y guardado automático con `LocalStorage`.",
      features: [
        "Registro de tareas con nombre, descripción, responsable, fecha de entrega y estado.",
        "Visualización limpia en tarjetas adaptables con opciones para agregar y eliminar tareas.",
        "Actualización automática del contador de tareas en tiempo real.",
        "Persistencia local mediante LocalStorage sin necesidad de registro externo.",
      ],
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap 5",
        "LocalStorage",
        "Git",
      ],
      collaborators: [],
      repoUrl: "https://github.com/Lushi28/Nuestro-amigo-de-tablero",
    },
  ],

  // 4. SECCIONES DE CV: Educación (Formación), Experiencia, Habilidades Técnicas y Blandas
  cv: {
    education: [
      {
        institution: "Generation Colombia · Bogotá, Colombia",
        degree: "Desarrollador Full-Stack en Java",
        period: "09/2026 – Diciembre 2026",
        description:
          "Programa intensivo enfocado en desarrollo Full Stack con Java, bases de datos SQL, tecnologías web (HTML5, CSS3, Bootstrap, JavaScript), Git y metodologías ágiles.",
        practicalApplication:
          "Apliqué estos conocimientos en la construcción colaborativa de Tú Mayorista Virtual (TMV) y en el desarrollo completo de Plan Amigo (Our Board Friend).",
      },
      {
        institution: "Instituto Tecnisistemas · Bogotá, Colombia",
        degree: "Analista de Soporte Técnico",
        period: "2025 – Febrero 2026",
        description:
          "Formación técnica en diagnóstico de incidencias, soporte a usuarios, mantenimiento y manejo de herramientas y aplicaciones corporativas.",
        practicalApplication:
          "Aplicado directamente en mi desempeño como Analista de Soporte Nivel 1 en Stefanini Group resolviendo incidencias y dando seguimiento a requerimientos.",
      },
    ],
    experience: [
      {
        role: "Analista de Soporte Nivel 1",
        organization: "Stefanini Group · Bogotá, Colombia",
        period: "05/2025 – Noviembre 2025",
        bullets: [
          "Atención y solución oportuna de incidentes y solicitudes de usuarios.",
          "Soporte técnico en herramientas y aplicaciones corporativas.",
          "Atención cercana a usuarios y seguimiento estructurado de requerimientos hasta su cierre.",
        ],
      },
      {
        role: "Desarrolladora Frontend & Full Stack en Formación",
        organization: "Proyectos Generation · TMV & Plan Amigo",
        period: "09/2026 – Actualidad",
        bullets: [
          "Construcción de vista de catálogo y barra lateral de categorías en Tú Mayorista Virtual (23 commits en GitHub).",
          "Desarrollo de Plan Amigo (Our Board Friend) con validaciones, gestión de tarjetas y contador dinámico.",
        ],
      },
    ],
    technicalSkills: [
      {
        group: "Lenguajes y Datos",
        items: ["Java", "JavaScript", "SQL / MySQL"],
      },
      {
        group: "Desarrollo Web",
        items: ["HTML5", "CSS3", "Bootstrap", "Diseño Responsivo"],
      },
      {
        group: "Herramientas y Soporte",
        items: ["Git", "GitHub", "Control de versiones", "Soporte Técnico N1"],
      },
      {
        group: "Idiomas",
        items: ["Español (Nativo)", "Inglés (A1)"],
      },
    ],
    softSkills: [
      {
        name: "Pensamiento analítico",
        detail: "Diagnóstico metódico de incidencias técnicas y depuración clara de errores.",
      },
      {
        name: "Responsabilidad y orientación al detalle",
        detail: "Seguimiento completo de requerimientos desde el análisis hasta la entrega.",
      },
      {
        name: "Aprendizaje continuo",
        detail: "Evolución constante desde soporte técnico hacia desarrollo Full Stack en Java.",
      },
      {
        name: "Trabajo en equipo y comunicación",
        detail: "Colaboración efectiva con Git/GitHub y trato empático hacia usuarios y compañeros.",
      },
    ],
  },

  // 5. SECCIÓN "BLOG TÉCNICO": artículos que se abren completos en el modal
  blogPosts: [
    {
      id: "de-soporte-a-java",
      date: "20 de Noviembre, 2026",
      category: "Carrera & Java",
      title: "Cómo mi experiencia en soporte técnico me ayuda a ser mejor desarrolladora Java",
      excerpt:
        "Atender incidencias reales en Stefanini Group me enseñó a pensar siempre en el usuario final antes de escribir la primera línea de código.",
      content: [
        "Cuando trabajé como Analista de Soporte Nivel 1 en Stefanini Group, todos los días veía de primera mano qué pasa cuando una aplicación tiene mensajes de error confusos o flujos difíciles de entender.",
        "Hoy, al formarme como desarrolladora Java Full Stack en Generation Colombia, esa experiencia es una de mis mayores fortalezas: cuando diseño un formulario o una lógica en Java, siempre me pregunto qué podría salir mal y cómo guiar con claridad al usuario.",
        "También me dio disciplina para analizar problemas paso a paso, documentar bien mis avances y comunicarme con claridad tanto con perfiles técnicos como con usuarios finales.",
      ],
    },
    {
      id: "catalogo-tmv-bootstrap",
      date: "13 de Noviembre, 2026",
      category: "Frontend & Trabajo en Equipo",
      title: "Construyendo el catálogo de Tú Mayorista Virtual (TMV): orden, categorías y Git en equipo",
      excerpt:
        "Lecciones prácticas organizando categorías de productos y colaborando con cinco desarrolladores en un repositorio real.",
      content: [
        "En Tú Mayorista Virtual (TMV) participé en la construcción de la vista de catálogo de productos y su barra lateral de categorías, organizando artículos de aseo y limpieza, desinfectantes, detergentes, protección y cocina.",
        "Uno de los mayores aprendizajes fue estructurar HTML semántico y estilos consistentes con Bootstrap y CSS3 para que el catálogo se mantuviera limpio y fácil de navegar mientras varios compañeros trabajaban en paralelo.",
        "Usar Git con commits claros y frecuentes nos permitió integrar cambios entre frontend y backend (Java + Spring Boot + MySQL) de forma ordenada.",
      ],
    },
    {
      id: "plan-amigo-localstorage",
      date: "06 de Noviembre, 2026",
      category: "JavaScript & Buenas Prácticas",
      title: "Validaciones de formulario y persistencia con LocalStorage en Plan Amigo",
      excerpt:
        "Cómo estructuré un gestor de tareas en tarjetas con contador dinámico usando JavaScript puro, HTML5 y CSS3.",
      content: [
        "Al construir Plan Amigo (Our Board Friend), mi meta fue crear una aplicación adaptable y práctica para registrar tareas con responsable, fecha de entrega y estado.",
        "Implementé validaciones antes de guardar cada tarjeta para evitar registros incompletos, actualicé el contador de pendientes automáticamente al agregar o eliminar tareas y guardé la información en LocalStorage.",
        "Este proyecto reafirmó que dominar los fundamentos de HTML, CSS y JavaScript es esencial antes de dar el salto a arquitecturas más grandes.",
      ],
    },
  ],
};
