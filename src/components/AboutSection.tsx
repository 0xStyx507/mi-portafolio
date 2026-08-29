import React from 'react';
import { TEXTS } from '../features/portfolio/content/copy';
import { PortfolioLink as Enlace, TechnicalStrength } from '../features/portfolio/model/types';

interface AboutSectionProps {
    descripcion: string;
    fortalezas: TechnicalStrength[];
    enlaces: Enlace[];
    id?: string;
}

export default function AboutSection({ descripcion, fortalezas, enlaces, id = "about" }: AboutSectionProps): React.ReactElement {
    const enlacesValidos = enlaces.filter((enlace) => enlace.url && enlace.url !== '#');

    return (
        <section id={id} className="px-4 pb-10 pt-24 md:px-8 md:pt-28">
            <div className="section-shell mx-auto max-w-7xl p-6 md:p-10">
                <div className="border-b-2 border-border/60 pb-8 md:pb-10">
                    <span className="section-label">Senior Build / 1998 Signal</span>
                    <p className="mt-5 max-w-3xl text-sm uppercase tracking-[0.24em] text-muted-foreground">
                        {TEXTS.ABOUT_TITLE} / Full Stack Delivery / Backend Focus / AWS-Aware Build
                    </p>
                </div>

                <div className="grid gap-10 py-8 md:py-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.65fr)] lg:items-start">
                    <div className="min-w-0 space-y-8">
                        <h2 className="title-display max-w-4xl text-5xl text-primary md:text-6xl">
                            Del problema técnico a una solución mantenible y lista para evolucionar.
                        </h2>

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

                    <aside className="section-shell min-w-0 p-5 md:p-6">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-accent">
                            Estado del perfil
                        </p>
                        <ul className="space-y-4 text-base leading-7 text-muted-foreground">
                            <li><span className="font-bold text-foreground">Rol profesional:</span> Full Stack Jr.</li>
                            <li><span className="font-bold text-foreground">Foco de crecimiento:</span> backend, cloud y seguridad aplicada.</li>
                            <li><span className="font-bold text-foreground">Forma de trabajo:</span> desarrollo, validación y documentación.</li>
                        </ul>
                    </aside>
                </div>

                <div className="border-t-2 border-border/60 pt-8 md:pt-10">
                    <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">Technical profile</p>
                            <h3 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Señales de madurez técnica</h3>
                        </div>
                        <p className="max-w-md text-base leading-7 text-muted-foreground">Áreas que resumen el tipo de problemas y soluciones que forman parte del perfil.</p>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-4">
                        {fortalezas.map((fortaleza, index) => (
                            <article key={fortaleza.titulo} className="border border-border bg-background/70 p-5">
                                <p className="text-xl font-bold text-primary">
                                    {String(index + 1).padStart(2, "0")} {fortaleza.titulo}
                                </p>
                                <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-accent">{fortaleza.enfoque}</p>
                                <p className="mt-3 text-base leading-7 text-muted-foreground">{fortaleza.descripcion}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
