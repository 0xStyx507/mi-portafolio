import React from 'react';
import { TEXTS } from '../features/portfolio/content/copy';
import { PortfolioLink as Enlace } from '../features/portfolio/model/types';

interface AboutSectionProps {
    descripcion: string;
    enlaces: Enlace[];
    id?: string;
}

export default function AboutSection({ descripcion, enlaces, id = "about" }: AboutSectionProps): React.ReactElement {
    const enlacesValidos = enlaces.filter((enlace) => enlace.url && enlace.url !== '#');

    return (
        <section id={id} className="px-4 pb-18 pt-32 md:px-8 md:pt-36">
            <div className="section-shell mx-auto max-w-7xl p-6 md:p-10">
                <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="section-label">Senior Build / 1998 Signal</span>
                            <p className="max-w-xl text-sm uppercase tracking-[0.24em] text-muted-foreground">
                                {TEXTS.ABOUT_TITLE} Full Stack Delivery / Backend Focus / AWS-Aware Build
                            </p>
                            <h2 className="title-display max-w-4xl text-5xl text-primary md:text-6xl">
                                Portafolio orientado a soluciones reales, mantenibilidad, documentación técnica y evolución hacia backend, cloud y seguridad aplicada.
                            </h2>
                        </div>

                        <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                            {descripcion}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {enlacesValidos.map((enlace, index) => (
                                <a
                                    key={`${enlace.label}-${index}`}
                                    href={enlace.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center border-2 border-border bg-card px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-[6px_6px_0_rgba(0,0,0,0.28)]"
                                >
                                    {enlace.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div className="section-shell p-5">
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-accent">
                                Estado del perfil
                            </p>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li>Enfoque principal: desarrollo fullstack con conocimiento en AWS.</li>
                                <li>Entrega visual: interfaz editorial con guiños de terminal noventera.</li>
                                <li>Objetivo: comunicar criterio técnico, producto y capacidad de ejecución.</li>
                            </ul>
                        </div>

                        <div className="section-shell p-5">
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                                Señales de madurez técnica
                            </p>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div className="border border-border bg-background/70 p-3">
                                    <p className="text-lg font-bold text-primary">01 Mantenibilidad</p>
                                    <p className="mt-2 text-muted-foreground">Estructuro los proyectos pensando en escalabilidad, separación de responsabilidades y facilidad de mantenimiento.</p>
                                </div>
                                <div className="border border-border bg-background/70 p-3">
                                    <p className="text-lg font-bold text-primary">02 Documentación técnica</p>
                                    <p className="mt-2 text-muted-foreground">Valoro la documentación clara para facilitar soporte, continuidad del proyecto y comunicación entre equipos.</p>
                                </div>
                                <div className="border border-border bg-background/70 p-3">
                                    <p className="text-lg font-bold text-primary">03 Seguridad aplicada</p>
                                    <p className="mt-2 text-muted-foreground">Integro buenas prácticas de seguridad desde etapas tempranas, especialmente en APIs, accesos, validaciones y revisión de riesgos.</p>
                                </div>
                                <div className="border border-border bg-background/70 p-3">
                                    <p className="text-lg font-bold text-primary">04 Visión de entrega</p>
                                    <p className="mt-2 text-muted-foreground">No me enfoco solo en construir funcionalidades, sino en que puedan desplegarse, mantenerse y evolucionar correctamente.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
