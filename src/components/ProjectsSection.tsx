import React from 'react';
import { Card, CardContent } from './ui/Card';
import { TEXTS } from '../features/portfolio/content/copy';
import { Project as Proyecto } from '../features/portfolio/model/types';

// Constantes para textos específicos de proyectos (Clean Code)
const PROJECTS_DESCRIPTION = "Selección de trabajo con foco en ejecución, aprendizaje aplicado y construcción progresiva de criterio técnico.";
const VIEW_PROJECT_TEXT = "Ver proyecto";

interface ProjectsSectionProps {
    proyectos: Proyecto[];
    id?: string;
}

export default function ProjectsSection({ proyectos, id = "proyectos" }: ProjectsSectionProps): React.ReactElement {
    return (
        <section id={id} className="px-4 py-16 md:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-3xl">
                        <span className="section-label">Work Index</span>
                        <h2 className="title-display mt-4 text-4xl text-primary md:text-6xl">{TEXTS.PROJECTS_TITLE}</h2>
                    </div>
                    <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">{PROJECTS_DESCRIPTION}</p>
                </div>
                <div className="grid gap-8 xl:grid-cols-2">
                    {proyectos.map((proyecto, index) => (
                        <Card key={`${proyecto.titulo}-${index}`} className="transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_rgba(0,0,0,0.24)]">
                            <CardContent className="space-y-6 p-8">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.26em] text-secondary">
                                            Proyecto {String(index + 1).padStart(2, '0')}
                                        </p>
                                        <h3 className="mb-3 text-2xl font-semibold text-foreground">{proyecto.titulo}</h3>
                                    </div>
                                    <span className="border border-border bg-background px-2 py-1 text-xs uppercase tracking-[0.2em] text-accent">
                                        live
                                    </span>
                                </div>
                                <p className="leading-8 text-muted-foreground">{proyecto.descripcion}</p>
                                <a
                                    href={proyecto.enlace}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center border-2 border-border bg-primary px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground hover:shadow-[6px_6px_0_rgba(0,0,0,0.28)]"
                                >
                                    {VIEW_PROJECT_TEXT}
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
