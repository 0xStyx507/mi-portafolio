export interface PortfolioLink {
  label: string;
  url: string;
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
  formacion: Education[];
  experiencia: Experience[];
  añoPie: string;
}
