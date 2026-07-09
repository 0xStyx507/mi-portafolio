export interface PortfolioLink {
  label: string;
  url: string;
}
export interface SkillGroup {
  titulo: string;
  enfoque: string;
  descripcion: string;
  herramientas: string[];
}
export interface Project {
  titulo: string;
  descripcion: string;
  enlace: string;
}

export interface Education {
  titulo: string;
  institucion: string;
  año: string;
}

export interface Experience {
  puesto: string;
  empresa: string;
  año: string;
  descripcion: string;
}

export interface PortfolioData {
  nombre: string;
  descripcion: string;
  enlaces: PortfolioLink[];
  proyectos: Project[];
  skills: SkillGroup[];
  formacion: Education[];
  experiencia: Experience[];
  añoPie: string;
}
