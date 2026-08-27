import {
  PROJECT_ORIGINS,
  PROJECT_STATUSES,
  PortfolioData,
  Project,
} from "./types";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(isString);
}

function isLink(value: unknown): boolean {
  return isRecord(value) && isString(value.label) && isString(value.url);
}

function isSkillGroup(value: unknown): boolean {
  return (
    isRecord(value) &&
    isString(value.titulo) &&
    isString(value.enfoque) &&
    isString(value.descripcion) &&
    isStringArray(value.herramientas)
  );
}

function isEducation(value: unknown): boolean {
  return isRecord(value) && isString(value.titulo) && isString(value.institucion) && isString(value.año);
}

function isExperience(value: unknown): boolean {
  return (
    isRecord(value) &&
    isString(value.puesto) &&
    isString(value.empresa) &&
    isString(value.año) &&
    isString(value.descripcion)
  );
}

function hasRequiredProjectShape(value: unknown): value is Project {
  if (!isRecord(value)) return false;

  const requiredStrings = ["slug", "title", "summary", "problem", "solution"];

  if (!requiredStrings.every((key) => isString(value[key]))) return false;
  if (typeof value.featured !== "boolean") return false;
  if (!isStringArray(value.categories) || !isStringArray(value.stack)) return false;
  if (!PROJECT_STATUSES.includes(value.status as (typeof PROJECT_STATUSES)[number])) return false;
  if (!isStringArray(value.technicalDecisions)) return false;
  if (!isStringArray(value.security)) return false;
  if (!isStringArray(value.testing)) return false;
  if (!isStringArray(value.cicd)) return false;
  if (!isStringArray(value.learnings)) return false;
  if (!isStringArray(value.limitations)) return false;
  if (!isStringArray(value.nextSteps)) return false;

  return (
    value.origin === undefined ||
    PROJECT_ORIGINS.includes(value.origin as (typeof PROJECT_ORIGINS)[number])
  );
}

export function validatePortfolioData(value: unknown): PortfolioData {
  if (!isRecord(value)) {
    throw new Error("Portfolio data must be an object");
  }

  if (!isString(value.nombre) || !isString(value.descripcion) || !isString(value.añoPie)) {
    throw new Error("Portfolio identity fields are invalid");
  }

  if (!Array.isArray(value.enlaces) || !value.enlaces.every(isLink)) {
    throw new Error("Portfolio links are invalid");
  }

  if (!Array.isArray(value.skills) || !value.skills.every(isSkillGroup)) {
    throw new Error("Portfolio skills are invalid");
  }

  if (!Array.isArray(value.proyectos) || !value.proyectos.every(hasRequiredProjectShape)) {
    throw new Error("Portfolio projects do not match the required catalog schema");
  }

  if (!Array.isArray(value.formacion) || !value.formacion.every(isEducation)) {
    throw new Error("Portfolio education entries are invalid");
  }

  if (!Array.isArray(value.experiencia) || !value.experiencia.every(isExperience)) {
    throw new Error("Portfolio experience entries are invalid");
  }

  return value as unknown as PortfolioData;
}
