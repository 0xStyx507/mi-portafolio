export const PROJECT_STATUSES = [
  "completed",
  "in-development",
  "planned",
  "academic",
  "technical-test",
] as const;

export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

export const PROJECT_ORIGINS = ["personal", "technical-test", "academic"] as const;

export type ProjectOrigin = (typeof PROJECT_ORIGINS)[number];

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
  slug: string;
  title: string;
  summary: string;
  featured: boolean;
  categories: string[];
  status: ProjectStatus;
  origin?: ProjectOrigin;
  stack: string[];
  architecture?: string;
  patterns?: string[];
  problem: string;
  solution: string;
  technicalDecisions: string[];
  security: string[];
  testing: string[];
  cicd: string[];
  learnings: string[];
  limitations: string[];
  nextSteps: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  documentationUrl?: string;
  image?: string;
  diagram?: string;
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
