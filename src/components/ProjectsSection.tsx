"use client";

import React, { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { Card, CardContent } from "./ui/Card";
import { TEXTS } from "../features/portfolio/content/copy";
import { Project, ProjectStatus } from "../features/portfolio/model/types";

const PROJECTS_DESCRIPTION =
  "Un catálogo técnico escalable, organizado por especialidad, estado y nivel de importancia.";

const SPECIALTIES = [
  "Full Stack",
  "Backend",
  "Frontend",
  "Cloud",
  "Ciberseguridad",
  "DevSecOps",
  "UI",
  "Sistemas distribuidos",
  "Proyectos académicos",
] as const;
const SPECIALTY_SET = new Set<string>(SPECIALTIES);

const SPECIALTY_OPTIONS = [
  { value: "all", label: "Todas las especialidades" },
  ...SPECIALTIES.map((specialty) => ({ value: specialty, label: specialty })),
];

const STATUS_LABELS: Record<ProjectStatus, string> = {
  completed: "Terminado",
  "in-development": "En desarrollo",
  academic: "Académico",
  "technical-test": "Prueba técnica",
};

const STATUS_FILTERS: Array<{ value: ProjectStatus | "all"; label: string }> = [
  { value: "all", label: TEXTS.PROJECTS_ALL_FILTER },
  { value: "completed", label: "Terminado" },
  { value: "in-development", label: "En desarrollo" },
  { value: "academic", label: "Académico" },
  { value: "technical-test", label: "Prueba técnica" },
];

interface ProjectsSectionProps {
  proyectos: Project[];
  id?: string;
}

interface FilterButtonProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

function FilterButton({ active, children, onClick, className = "" }: FilterButtonProps): React.ReactElement {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`inline-flex min-h-9 items-center justify-center whitespace-nowrap border-2 px-3 py-2 text-left text-[0.68rem] font-bold uppercase leading-tight tracking-[0.14em] transition-all duration-200 sm:px-3.5 ${
        active
          ? "border-border bg-primary text-primary-foreground shadow-[4px_4px_0_rgba(0,0,0,0.22)]"
          : "border-border/60 bg-background text-muted-foreground hover:-translate-y-0.5 hover:border-border hover:text-primary"
      } ${className}`}
    >
      {children}
    </button>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }): React.ReactElement {
  return (
    <div>
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-secondary">{title}</p>
      <ul className="list-inside list-disc space-y-1 text-sm leading-6 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ proyecto, index }: { proyecto: Project; index: number }): React.ReactElement {
  const projectSpecialties = proyecto.categories.filter((category) => SPECIALTY_SET.has(category));

  return (
    <Card className="transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_rgba(0,0,0,0.24)]">
      <CardContent className="space-y-6 p-8">
        <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.26em] text-secondary">
              Proyecto {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mb-3 text-2xl font-semibold text-foreground">{proyecto.title}</h3>
          </div>
          <span className="self-start whitespace-nowrap border border-border bg-background px-2 py-1 text-xs uppercase tracking-[0.14em] text-accent">
            {STATUS_LABELS[proyecto.status]}
          </span>
        </div>

        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-secondary">Áreas</p>
          <div className="flex flex-wrap gap-2">
            {projectSpecialties.map((specialty) => (
              <span
                key={specialty}
                className="border border-border/70 bg-muted/50 px-2 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-muted-foreground"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <p className="text-base leading-8 text-muted-foreground">{proyecto.summary}</p>

        <div className="grid gap-4 border-y border-border/50 py-4 text-base md:grid-cols-2">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-secondary">Stack</p>
            <p className="text-muted-foreground">{proyecto.stack.join(" · ")}</p>
          </div>
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-secondary">Arquitectura</p>
            <p className="text-muted-foreground">{proyecto.architecture ?? "En definición"}</p>
          </div>
        </div>

        <details className="group border-b border-border/50 pb-5">
          <summary className="cursor-pointer list-none text-sm font-bold uppercase tracking-[0.16em] text-primary marker:hidden">
            <span className="group-open:hidden">Ver detalle técnico +</span>
            <span className="hidden group-open:inline">Ocultar detalle técnico −</span>
          </summary>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div className="space-y-5">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-secondary">Problema</p>
                <p className="text-base leading-8 text-muted-foreground">{proyecto.problem}</p>
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-secondary">Solución</p>
                <p className="text-base leading-8 text-muted-foreground">{proyecto.solution}</p>
              </div>
              {proyecto.patterns && <DetailList title="Patrones" items={proyecto.patterns} />}
              <DetailList title="Decisiones técnicas" items={proyecto.technicalDecisions} />
            </div>
            <div className="space-y-5">
              <DetailList title="Seguridad" items={proyecto.security} />
              <DetailList title="Pruebas" items={proyecto.testing} />
              <DetailList title="CI/CD" items={proyecto.cicd} />
              <DetailList title="Próximos pasos" items={proyecto.nextSteps} />
            </div>
          </div>
        </details>

        <div className="flex flex-wrap gap-3">
          {proyecto.repositoryUrl && (
            <a
              href={proyecto.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-border bg-primary px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground hover:shadow-[6px_6px_0_rgba(0,0,0,0.28)]"
            >
              Ver repositorio
            </a>
          )}
          {proyecto.demoUrl && (
            <a
              href={proyecto.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-border bg-background px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-primary transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              Ver demo
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectGroup({ title, proyectos }: { title: string; proyectos: Project[] }): React.ReactElement | null {
  if (proyectos.length === 0) return null;

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-4">
        <h3 className="text-xl font-bold uppercase tracking-[0.12em] text-primary">{title}</h3>
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {String(proyectos.length).padStart(2, "0")}
        </span>
      </div>
      <div className="grid gap-8 xl:grid-cols-2">
        {proyectos.map((proyecto, index) => (
          <ProjectCard key={proyecto.slug} proyecto={proyecto} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSection({ proyectos, id = "proyectos" }: ProjectsSectionProps): React.ReactElement {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | "all">("all");
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  const visibleProjects = useMemo(() => proyectos.filter((proyecto) => proyecto.visible !== false), [proyectos]);

  const filteredProjects = useMemo(
    () =>
      visibleProjects.filter((proyecto) => {
        const matchesCategory = categoryFilter === "all" || proyecto.categories.includes(categoryFilter);
        const matchesStatus = statusFilter === "all" || proyecto.status === statusFilter;
        return matchesCategory && matchesStatus;
      }),
    [categoryFilter, statusFilter, visibleProjects],
  );

  const featured = filteredProjects.filter((proyecto) => proyecto.featured);
  const inDevelopment = filteredProjects.filter(
    (proyecto) => !proyecto.featured && proyecto.status === "in-development",
  );
  const labs = filteredProjects.filter(
    (proyecto) =>
      !proyecto.featured &&
      (proyecto.status === "academic" || proyecto.categories.includes("Proyectos académicos")),
  );
  const otherProjects = filteredProjects.filter(
    (proyecto) => !featured.includes(proyecto) && !inDevelopment.includes(proyecto) && !labs.includes(proyecto),
  );
  const hasFilters = categoryFilter !== "all" || statusFilter !== "all";
  const activeFilterCount = Number(categoryFilter !== "all") + Number(statusFilter !== "all");
  const selectedCategoryLabel = SPECIALTIES.find((specialty) => specialty === categoryFilter) ?? "Todas las especialidades";
  const selectedStatusLabel = STATUS_FILTERS.find((status) => status.value === statusFilter)?.label ?? "Todos los estados";

  return (
    <section id={id} className="px-4 py-10 md:px-8 md:py-12">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="section-label">Work Index</span>
            <h2 className="title-display mt-4 text-4xl text-primary md:text-6xl">{TEXTS.PROJECTS_TITLE}</h2>
          </div>
          <div className="flex max-w-2xl flex-col items-start gap-3 md:items-end">
            <p className="text-left text-sm leading-7 text-muted-foreground md:text-right md:text-base">{PROJECTS_DESCRIPTION}</p>
            <button
              type="button"
              aria-expanded={isFilterPanelOpen}
              aria-controls="catalog-filter-panel"
              onClick={() => setIsFilterPanelOpen((isOpen) => !isOpen)}
              className="inline-flex h-10 items-center gap-2 border-2 border-border bg-primary px-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
            >
              <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
              <span>Filtros</span>
              <span className="flex h-5 min-w-5 items-center justify-center border border-current px-1 text-[0.65rem]">
                {activeFilterCount}
              </span>
            </button>
          </div>
        </div>

        {(isFilterPanelOpen || hasFilters) && (
          <div id="catalog-filter-panel" className="section-shell overflow-hidden p-3 sm:p-4 md:p-5">
            <div className="flex flex-col gap-3 border-b border-border/60 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">{TEXTS.PROJECTS_FILTER_LABEL}</p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                  Selecciona una especialidad o estado para acotar el catálogo.
                </p>
              </div>
              <div className="flex min-w-0 flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-muted-foreground">{hasFilters ? "Vista filtrada" : "Catálogo completo"}</span>
              </div>
            </div>

            {hasFilters && (
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {categoryFilter !== "all" && (
                  <button
                    type="button"
                    onClick={() => setCategoryFilter("all")}
                    aria-label={`Quitar filtro de especialidad ${selectedCategoryLabel}`}
                    className="inline-flex min-h-9 max-w-full items-center gap-2 border border-border/70 bg-background px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    <span className="truncate">{selectedCategoryLabel}</span>
                    <X className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </button>
                )}

                {statusFilter !== "all" && (
                  <button
                    type="button"
                    onClick={() => setStatusFilter("all")}
                    aria-label={`Quitar filtro de estado ${selectedStatusLabel}`}
                    className="inline-flex min-h-9 max-w-full items-center gap-2 border border-border/70 bg-background px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    <span className="truncate">{selectedStatusLabel}</span>
                    <X className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setCategoryFilter("all");
                    setStatusFilter("all");
                  }}
                  className="ml-auto border-b-2 border-primary px-1 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  Limpiar
                </button>
              </div>
            )}

            {isFilterPanelOpen && (
              <div className="mt-4 grid min-w-0 gap-3 border-t border-border/60 pt-4 lg:grid-cols-2">
                <fieldset className="min-w-0 border border-border/70 bg-background/35 p-3 sm:p-4 lg:col-span-2">
                  <legend className="px-1 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                    Especialidad <span className="ml-2 text-[0.65rem] text-muted-foreground">{SPECIALTIES.length} áreas</span>
                  </legend>
                  <div className="mt-2 grid min-w-0 grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-5">
                    {SPECIALTY_OPTIONS.map((option) => (
                      <FilterButton
                        key={option.value}
                        active={categoryFilter === option.value}
                        onClick={() => setCategoryFilter(option.value)}
                        className="w-full justify-start"
                      >
                        {option.label}
                      </FilterButton>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="min-w-0 border border-border/70 bg-background/35 p-3 sm:p-4">
                  <legend className="px-1 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                    Estado <span className="ml-2 text-[0.65rem] text-muted-foreground">{STATUS_FILTERS.length} vistas</span>
                  </legend>
                  <div className="mt-2 grid min-w-0 grid-cols-2 gap-2">
                    {STATUS_FILTERS.map((status) => (
                      <FilterButton
                        key={status.value}
                        active={statusFilter === status.value}
                        onClick={() => setStatusFilter(status.value)}
                        className="w-full justify-start"
                      >
                        {status.label}
                      </FilterButton>
                    ))}
                  </div>
                </fieldset>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
          <p aria-live="polite" className="text-muted-foreground">
            <span className="font-bold text-primary">{filteredProjects.length}</span>{" "}
            {filteredProjects.length === 1 ? "proyecto encontrado" : "proyectos encontrados"}
          </p>
        </div>

        {filteredProjects.length === 0 ? (
          <p className="border-2 border-dashed border-border p-8 text-center text-muted-foreground">
            {TEXTS.PROJECTS_EMPTY}
          </p>
        ) : (
          <div className="space-y-10">
            <ProjectGroup title="Proyectos destacados" proyectos={featured} />
            <ProjectGroup title="Proyectos en desarrollo" proyectos={inDevelopment} />
            <ProjectGroup title="Laboratorios y proyectos académicos" proyectos={labs} />
            <ProjectGroup title="Otros proyectos" proyectos={otherProjects} />
          </div>
        )}
      </div>
    </section>
  );
}
