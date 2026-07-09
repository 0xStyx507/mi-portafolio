export const TEXTS = {
  LOADING: "Cargando...",
  ERROR_LOADING: "Error al cargar datos",
  ABOUT_TITLE: "Sobre mí",
  PROJECTS_TITLE: "Proyectos",
  EDUCATION_TITLE: "Formación académica",
  EXPERIENCE_TITLE: "Experiencia laboral",
  CONTACT_TITLE: "Contacto",
  SKILLS_TITLE: "Habilidades",
  FOOTER_TEXT: "Desarrollado por",
} as const;

export const CONFIG = {
  NAVIGATION_LINKS: [
    { href: "#about", label: TEXTS.ABOUT_TITLE },
    { href: "#skills", label: TEXTS.SKILLS_TITLE },
    { href: "#proyectos", label: TEXTS.PROJECTS_TITLE },
    { href: "#formacion", label: TEXTS.EDUCATION_TITLE },
    { href: "#experiencia", label: TEXTS.EXPERIENCE_TITLE },
    { href: "#contacto", label: TEXTS.CONTACT_TITLE },
  ] as const,
} as const;
