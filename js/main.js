/* ==========================================================================
   js/main.js
   --------------------------------------------------------------------------
   Lógica principal e interactividad del portafolio (JavaScript puro).
   Lee los datos de window.PORTFOLIO_DATA y construye dinámicamente el DOM,
   además de controlar filtros, modales, menú móvil, tema claro/oscuro y PDF.
   ========================================================================== */

(function () {
  // Obtenemos el objeto global de datos definido en js/portfolio-data.js
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  // ---------- Iconos SVG reutilizables para botones y redes sociales ----------
  const icons = {
    github:
      '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
    mail:
      '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',
    phone:
      '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
    linkedin:
      '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
  };

  // ---------- 1. Renderizado de la sección Inicio (Hero) ----------
  function renderHero() {
    const g = data.greeting;
    document.getElementById("heroName").textContent = g.fullName;
    document.getElementById("heroRole").textContent = g.role;
    document.getElementById("heroBio").textContent = g.valueProposition;

    // Enlaces de contacto rápido concentrados en una sola fila limpia
    document.getElementById("heroSocials").innerHTML = `
      <a href="${g.githubProfile}" target="_blank" rel="noreferrer" class="social-pill">${icons.github} GitHub</a>
      <a href="mailto:${g.email}" class="social-pill">${icons.mail} Correo</a>
      <a href="${g.phoneHref}" class="social-pill">${icons.phone} Teléfono</a>
      <a href="${g.linkedinProfile}" target="_blank" rel="noreferrer" class="social-pill">${icons.linkedin} LinkedIn</a>
    `;
  }

  // ---------- 2. Renderizado de la sección Sobre mí ----------
  function renderAbout() {
    const a = data.about;
    document.getElementById("aboutTitle").textContent = a.title;

    // Historia personal con frase destacada y párrafos
    document.getElementById("aboutStory").innerHTML = `
      <p class="about-lead">“${a.lead}”</p>
      ${a.paragraphs.map((p) => `<p>${p}</p>`).join("")}
    `;

    // Tarjetas laterales con puntos clave del perfil
    document.getElementById("aboutHighlights").innerHTML = a.highlights
      .map(
        (h) => `
        <div class="highlight-card">
          <span class="highlight-label">${h.label}</span>
          <h3 class="highlight-value">${h.value}</h3>
          <p class="highlight-detail">${h.detail}</p>
        </div>`
      )
      .join("");
  }

  // ---------- 3. Vistas previas visuales (SVG) para cada proyecto ----------
  // Dibuja un esquema limpio del proyecto en la cabecera de cada tarjeta
  function getProjectPreviewSVG(type) {
    if (type === "tmv") {
      return `
        <svg viewBox="0 0 420 190" width="100%" height="100%" role="img" aria-label="Vista previa de Tú Mayorista Virtual">
          <defs>
            <linearGradient id="tmvBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#17171D" />
              <stop offset="100%" stop-color="#1E2F57" />
            </linearGradient>
          </defs>
          <rect x="6" y="6" width="408" height="178" rx="14" fill="url(#tmvBg)" stroke="#9CD8F4" stroke-opacity="0.25" />
          <circle cx="24" cy="24" r="4" fill="#7B53CB" />
          <circle cx="38" cy="24" r="4" fill="#9CD8F4" />
          <circle cx="52" cy="24" r="4" fill="#315E9E" />
          <rect x="74" y="18" width="190" height="12" rx="6" fill="#15213B" />
          <text x="84" y="27" fill="#9CD8F4" font-size="8" font-family="Plus Jakarta Sans, sans-serif">TMV · Tú Mayorista Virtual</text>
          <rect x="20" y="44" width="110" height="124" rx="10" fill="#15213B" stroke="#7B53CB" stroke-opacity="0.6" />
          <text x="30" y="63" fill="#9CD8F4" font-size="8.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">CATEGORÍAS</text>
          <text x="30" y="83" fill="#E6EEF9" font-size="8" font-family="Plus Jakarta Sans, sans-serif">• Aseo y limpieza</text>
          <text x="30" y="99" fill="#D5E2F5" font-size="8" font-family="Plus Jakarta Sans, sans-serif">• Desinfectantes</text>
          <text x="30" y="115" fill="#D5E2F5" font-size="8" font-family="Plus Jakarta Sans, sans-serif">• Detergentes</text>
          <text x="30" y="131" fill="#D5E2F5" font-size="8" font-family="Plus Jakarta Sans, sans-serif">• Protección</text>
          <text x="30" y="147" fill="#D5E2F5" font-size="8" font-family="Plus Jakarta Sans, sans-serif">• Cocina</text>
          <rect x="144" y="44" width="254" height="124" rx="10" fill="#15213B" stroke="#9CD8F4" stroke-opacity="0.3" />
          <text x="158" y="64" fill="#F4F7FC" font-size="10" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">CATÁLOGO DE PRODUCTOS</text>
          <rect x="158" y="76" width="106" height="78" rx="8" fill="#17171D" stroke="#315E9E" />
          <text x="168" y="98" fill="#9CD8F4" font-size="8.5" font-weight="600" font-family="Plus Jakarta Sans, sans-serif">Frontend Modular</text>
          <text x="168" y="116" fill="#8D96A5" font-size="7.8" font-family="Plus Jakarta Sans, sans-serif">HTML5 · CSS3 · JS</text>
          <text x="168" y="132" fill="#8D96A5" font-size="7.8" font-family="Plus Jakarta Sans, sans-serif">Bootstrap 4</text>
          <rect x="276" y="76" width="108" height="78" rx="8" fill="#17171D" stroke="#7B53CB" />
          <text x="286" y="98" fill="#D5BFFF" font-size="8.5" font-weight="600" font-family="Plus Jakarta Sans, sans-serif">Backend &amp; QA</text>
          <text x="286" y="116" fill="#8D96A5" font-size="7.8" font-family="Plus Jakarta Sans, sans-serif">Java · Spring Boot</text>
          <text x="286" y="132" fill="#8D96A5" font-size="7.8" font-family="Plus Jakarta Sans, sans-serif">MySQL · Selenium</text>
        </svg>`;
    }

    // Vista previa del tablero Plan Amigo (Our Board Friend)
    return `
      <svg viewBox="0 0 420 190" width="100%" height="100%" role="img" aria-label="Vista previa de Plan Amigo">
        <defs>
          <linearGradient id="planBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#17171D" />
            <stop offset="100%" stop-color="#231942" />
          </linearGradient>
        </defs>
        <rect x="6" y="6" width="408" height="178" rx="14" fill="url(#planBg)" stroke="#9CD8F4" stroke-opacity="0.25" />
        <text x="24" y="32" fill="#9CD8F4" font-size="8" letter-spacing="2" font-family="Plus Jakarta Sans, sans-serif">ORGANIZA TU DÍA</text>
        <text x="24" y="52" fill="#F4F7FC" font-size="14.5" font-weight="700" font-family="Playfair Display, Georgia, serif">Plan Amigo · Our Board Friend</text>
        <rect x="24" y="68" width="116" height="98" rx="10" fill="#15213B" stroke="#315E9E" />
        <text x="34" y="86" fill="#9CD8F4" font-size="8.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">POR HACER</text>
        <rect x="34" y="96" width="96" height="26" rx="6" fill="#17171D" />
        <text x="41" y="112" fill="#E6EEF9" font-size="8" font-family="Plus Jakarta Sans, sans-serif">Registrar tarea</text>
        <rect x="34" y="128" width="96" height="26" rx="6" fill="#17171D" />
        <text x="41" y="144" fill="#8D96A5" font-size="8" font-family="Plus Jakarta Sans, sans-serif">Fecha y estado</text>
        <rect x="152" y="68" width="116" height="98" rx="10" fill="#15213B" stroke="#7B53CB" />
        <text x="162" y="86" fill="#D5BFFF" font-size="8.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">EN PROCESO</text>
        <rect x="162" y="96" width="96" height="58" rx="6" fill="#7B53CB" fill-opacity="0.22" />
        <text x="170" y="114" fill="#F4F7FC" font-size="8.2" font-family="Plus Jakarta Sans, sans-serif">Validaciones +</text>
        <text x="170" y="129" fill="#9CD8F4" font-size="8.2" font-family="Plus Jakarta Sans, sans-serif">LocalStorage</text>
        <rect x="280" y="68" width="116" height="98" rx="10" fill="#15213B" stroke="#9CD8F4" stroke-opacity="0.5" />
        <text x="290" y="86" fill="#4ADE80" font-size="8.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">HECHO</text>
        <rect x="290" y="96" width="96" height="58" rx="6" fill="#315E9E" fill-opacity="0.28" />
        <text x="298" y="114" fill="#F4F7FC" font-size="8.2" font-family="Plus Jakarta Sans, sans-serif">Contador vivo</text>
        <text x="298" y="129" fill="#9CD8F4" font-size="8.2" font-family="Plus Jakarta Sans, sans-serif">Tarjetas UI</text>
      </svg>`;
  }

  // ---------- 4. Renderizado de la sección Proyectos ----------
  // Tarjetas escaneables (qué hace + mi aporte + enlaces) y detalles completos en el modal
  function renderProjects() {
    const grid = document.getElementById("projectsGrid");

    grid.innerHTML = data.projects
      .map(
        (p) => `
      <article class="project-card">
        <div class="project-preview">
          <span class="project-badge">${p.category}</span>
          ${getProjectPreviewSVG(p.previewType)}
        </div>
        <div class="project-body">
          <p class="project-period">${p.period}</p>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-summary">${p.summary}</p>

          <div class="project-detail-block">
            <strong>Mi aporte</strong>
            ${p.cardContribution}
          </div>

          <div class="project-actions">
            <a href="${p.repoUrl}" target="_blank" rel="noreferrer" class="btn btn-primary">
              ${icons.github} Código
            </a>
            <button type="button" class="btn btn-outline" data-project-id="${p.id}">
              Ver ficha completa
            </button>
          </div>
        </div>
      </article>`
      )
      .join("");

    // Conectamos cada botón "Ver ficha completa" para abrir el modal con los detalles técnicos
    grid.querySelectorAll("[data-project-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const project = data.projects.find((item) => item.id === btn.dataset.projectId);
        if (project) openProjectModal(project);
      });
    });
  }

  // ---------- 5. Renderizado de Formación, Experiencia y Habilidades (CV) ----------
  function renderCV() {
    // Bloque de Educación y Certificaciones
    document.getElementById("cvEducation").innerHTML = data.cv.education
      .map(
        (edu) => `
      <div class="timeline-item">
        <span class="timeline-period">${edu.period}</span>
        <h4 class="timeline-title">${edu.degree}</h4>
        <p class="timeline-org">${edu.institution}</p>
        <p class="timeline-desc">${edu.description}</p>
        <p class="timeline-applied"><strong>Aplicación práctica:</strong> ${edu.practicalApplication}</p>
      </div>`
      )
      .join("");

    // Bloque de Experiencia Laboral y Práctica
    document.getElementById("cvExperience").innerHTML = data.cv.experience
      .map(
        (exp) => `
      <div class="timeline-item">
        <span class="timeline-period">${exp.period}</span>
        <h4 class="timeline-title">${exp.role}</h4>
        <p class="timeline-org">${exp.organization}</p>
        <ul class="timeline-bullets">
          ${exp.bullets.map((b) => `<li>${b}</li>`).join("")}
        </ul>
      </div>`
      )
      .join("");

    // Bloque de Habilidades Técnicas e Idiomas
    document.getElementById("cvTechSkills").innerHTML = data.cv.technicalSkills
      .map(
        (g) => `
      <div class="skill-group-card">
        <h4>${g.group}</h4>
        <div class="tech-tags" style="margin: 0">
          ${g.items.map((item) => `<span class="tech-tag">${item}</span>`).join("")}
        </div>
      </div>`
      )
      .join("");

    // Bloque de Habilidades de Comportamiento (soft skills)
    document.getElementById("cvSoftSkills").innerHTML = data.cv.softSkills
      .map(
        (s) => `
      <div class="soft-skill-item">
        <strong>${s.name}</strong>
        <span>${s.detail}</span>
      </div>`
      )
      .join("");
  }

  // ---------- 6. Renderizado de la sección Blog Técnico ----------
  function renderBlog() {
    const grid = document.getElementById("blogGrid");
    grid.innerHTML = data.blogPosts
      .map(
        (post) => `
      <article class="blog-card">
        <div class="blog-meta">
          <span class="blog-category">${post.category}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <div class="blog-footer">
          <span>${post.date}</span>
          <button type="button" class="blog-read-btn" data-post-id="${post.id}">
            Leer artículo →
          </button>
        </div>
      </article>`
      )
      .join("");

    // Conectamos cada botón "Leer artículo" para abrir el texto completo en el modal
    grid.querySelectorAll("[data-post-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const post = data.blogPosts.find((p) => p.id === btn.dataset.postId);
        if (post) openBlogModal(post);
      });
    });
  }

  // ---------- 7. Renderizado de la sección Contáctame y pie de página ----------
  function renderContact() {
    const g = data.greeting;
    document.getElementById("contactCircles").innerHTML = `
      <a href="mailto:${g.email}?subject=Contacto%20desde%20tu%20Portafolio" class="contact-circle-item" title="Enviar correo a ${g.email}">
        <span class="contact-circle-icon">${icons.mail}</span>
        <span class="contact-circle-text">
          <strong>Correo</strong>
          <small class="contact-circle-value">${g.email}</small>
        </span>
      </a>
      <a href="${g.phoneHref}" class="contact-circle-item" title="Llamar al ${g.phoneDisplay}">
        <span class="contact-circle-icon">${icons.phone}</span>
        <span class="contact-circle-text">
          <strong>Teléfono</strong>
          <small class="contact-circle-value">${g.phoneDisplay}</small>
        </span>
      </a>
      <a href="${g.githubProfile}" target="_blank" rel="noreferrer" class="contact-circle-item" title="Abrir perfil de GitHub">
        <span class="contact-circle-icon">${icons.github}</span>
        <span class="contact-circle-text">
          <strong>GitHub</strong>
          <small class="contact-circle-value">@Lushi28</small>
        </span>
      </a>
      <a href="${g.linkedinProfile}" target="_blank" rel="noreferrer" class="contact-circle-item" title="Abrir perfil de LinkedIn">
        <span class="contact-circle-icon">${icons.linkedin}</span>
        <span class="contact-circle-text">
          <strong>LinkedIn</strong>
          <small class="contact-circle-value">Perfil profesional</small>
        </span>
      </a>
    `;

    document.getElementById("contactDirectInfo").textContent = `${g.location}`;
    document.getElementById("footerCopy").textContent = `© ${new Date().getFullYear()} ${g.fullName}`;
  }

  // ---------- 8. Control del Modal reutilizable (Proyectos y Blog) ----------
  const modal = document.getElementById("detailModal");
  const modalBody = document.getElementById("modalBody");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  // Abre el modal bloqueando el scroll del fondo y enfocando el botón de cierre
  function openModal(html) {
    modalBody.innerHTML = html;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modalCloseBtn.focus();
  }

  // Cierra el modal y restaura el scroll normal de la página
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  // Construye el contenido de la ficha técnica completa de un proyecto
  function openProjectModal(project) {
    openModal(`
      <p class="eyebrow">${project.category}</p>
      <h3 id="modalTitle" class="section-title" style="font-size: 1.85rem">${project.title}</h3>
      <div class="project-detail-block">
        <strong>Propósito y problema que resuelve</strong>
        ${project.problemSolved}
      </div>
      <div class="project-detail-block">
        <strong>Mi aporte principal</strong>
        ${project.myContribution}
      </div>
      <div class="project-detail-block">
        <strong>Contexto técnico y stack</strong>
        <p style="margin: 0 0 0.65rem">${project.teamStackNote}</p>
        <div class="tech-tags" style="margin: 0">
          ${project.technologies.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
      <div class="project-detail-block">
        <strong>Características principales</strong>
        <ul class="timeline-bullets" style="margin-top: 0.45rem">
          ${project.features.map((f) => `<li>${f}</li>`).join("")}
        </ul>
      </div>
      <div class="project-detail-block">
        <strong>Desafíos y solución</strong>
        <p style="margin: 0 0 0.5rem">${project.challenges}</p>
        <p style="margin: 0">${project.solution}</p>
      </div>
      ${
        project.collaborators.length
          ? `<div class="collaborators-row" style="margin-top: 1rem">
               <span>Colaboradores:</span>
               ${project.collaborators
                 .map(
                   (c) =>
                     `<a href="${c.url}" target="_blank" rel="noreferrer" class="collab-link">@${c.name}</a>`
                 )
                 .join("")}
             </div>`
          : ""
      }
      <div class="project-actions" style="margin-top: 1.4rem">
        <a href="${project.repoUrl}" target="_blank" rel="noreferrer" class="btn btn-primary">
          ${icons.github} Abrir repositorio en GitHub
        </a>
      </div>
    `);
  }

  // Construye el contenido completo de un artículo del blog
  function openBlogModal(post) {
    openModal(`
      <div class="blog-meta" style="justify-content: flex-start; gap: 1rem">
        <span class="blog-category">${post.category}</span>
        <span style="color: #8D96A5">${post.date}</span>
      </div>
      <h3 id="modalTitle" class="section-title" style="font-size: 1.75rem">${post.title}</h3>
      ${post.content.map((p) => `<p style="color: #D6E0F2; margin-bottom: 1rem">${p}</p>`).join("")}
    `);
  }

  // Eventos para cerrar el modal: clic en "✕", clic fuera del panel o tecla Escape
  modalCloseBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  // ---------- 9. Menú móvil desplegable ----------
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navMenuWrap = document.getElementById("navMenuWrap");
  const navLinks = document.getElementById("navLinks");

  // Abre o cierra el menú en dispositivos móviles
  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = navMenuWrap.classList.toggle("open");
    mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Cierra el menú automáticamente cuando se hace clic en una sección
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenuWrap.classList.remove("open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // ---------- 11. Botón unificado de Modo Oscuro (Luna) y Modo Claro (Sol) ----------
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIconSun = document.getElementById("themeIconSun");
  const themeIconMoon = document.getElementById("themeIconMoon");

  // Aplica el tema elegido, actualiza el icono visible y guarda la preferencia en localStorage
  function applyTheme(theme) {
    const isLight = theme === "light";
    document.body.classList.toggle("light-theme", isLight);
    // Modo claro -> muestra el Sol; Modo oscuro -> muestra la Luna
    themeIconSun.style.display = isLight ? "block" : "none";
    themeIconMoon.style.display = isLight ? "none" : "block";
    themeToggleBtn.setAttribute(
      "aria-label",
      isLight ? "Modo claro activo, cambiar a modo oscuro" : "Modo oscuro activo, cambiar a modo claro"
    );
    themeToggleBtn.setAttribute("title", isLight ? "Modo claro (clic para oscuro)" : "Modo oscuro (clic para claro)");
    localStorage.setItem("luisa_portfolio_theme", theme);
  }

  // Restaura el tema guardado previamente (por defecto arranca en modo oscuro Azul Noche)
  applyTheme(localStorage.getItem("luisa_portfolio_theme") || "dark");

  // Alterna entre oscuro y claro cada vez que se presiona el botón
  themeToggleBtn.addEventListener("click", () => {
    const next = document.body.classList.contains("light-theme") ? "dark" : "light";
    applyTheme(next);
  });

  // ---------- 12. Botones de impresión / guardado de CV en PDF ----------
  document.getElementById("printCvBtn").addEventListener("click", () => window.print());
  document.getElementById("navCvBtn").addEventListener("click", () => window.print());

  // ---------- 12. Inicialización de todas las secciones al cargar la página ----------
  renderHero();
  renderAbout();
  renderProjects();
  renderCV();
  renderBlog();
  renderContact();
})();
