import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from './ui/Card';
import { TEXTS } from '../features/portfolio/content/copy';
import { Experience as Experiencia } from '../features/portfolio/model/types';

interface ExperienceSectionProps {
    experiencia: Experiencia[];
    id?: string;
}

export default function ExperienceSection({ experiencia, id = "experiencia" }: ExperienceSectionProps): React.ReactElement {
    return (
        <section id={id} className="px-4 py-10 md:px-8 md:py-12">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10">
                    <span className="section-label">Career Tape</span>
                    <h2 className="title-display mt-4 text-4xl text-primary md:text-6xl">{TEXTS.EXPERIENCE_TITLE}</h2>
                </div>
                <div className={`grid grid-cols-1 gap-6 ${experiencia.length === 1 ? "max-w-4xl" : "lg:grid-cols-2"}`}>
                    {experiencia.map((exp, index) => (
                        <Card key={`${exp.puesto}-${index}`} className="transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_rgba(0,0,0,0.24)]">
                            <CardContent className="space-y-5 p-8">
                                <div className="flex flex-col gap-5 border-b border-border/60 pb-5 lg:flex-row lg:items-start lg:justify-between">
                                    <div className="min-w-0">
                                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">{exp.año}</p>
                                        <h3 className="mt-4 text-xl font-semibold leading-tight text-foreground">{exp.puesto}</h3>
                                    </div>
                                    <div className="flex shrink-0 items-center gap-3 border border-border bg-background p-2">
                                        {exp.logo && (
                                            <span className="flex h-10 w-28 items-center justify-center bg-white p-2">
                                                <Image src={exp.logo} alt={`Logo de ${exp.marca ?? exp.empresa}`} width={112} height={40} className="h-auto max-h-full w-auto object-contain" />
                                            </span>
                                        )}
                                        <div className="min-w-0">
                                            <p className="text-sm font-bold uppercase tracking-[0.12em] text-accent">{exp.empresa}</p>
                                            {exp.marca && <p className="mt-1 text-sm text-foreground">{exp.marca}</p>}
                                            {exp.ubicacion && <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{exp.ubicacion}</p>}
                                        </div>
                                    </div>
                                </div>
                                {exp.contexto && <p className="text-base leading-7 text-muted-foreground">{exp.contexto}</p>}
                                <p className="text-base leading-8 text-muted-foreground">{exp.descripcion}</p>
                                <div className="border-t border-border pt-4">
                                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">impacto profesional en progreso</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
