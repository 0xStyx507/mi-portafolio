import React from 'react';
import { Card, CardContent } from './ui/Card';
import { TEXTS } from '../features/portfolio/content/copy';
import { Experience as Experiencia } from '../features/portfolio/model/types';

interface ExperienceSectionProps {
    experiencia: Experiencia[];
    id?: string;
}

export default function ExperienceSection({ experiencia, id = "experiencia" }: ExperienceSectionProps): React.ReactElement {
    return (
        <section id={id} className="px-4 py-16 md:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16">
                    <span className="section-label">Career Tape</span>
                    <h2 className="title-display mt-4 text-4xl text-primary md:text-6xl">{TEXTS.EXPERIENCE_TITLE}</h2>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {experiencia.map((exp, index) => (
                        <Card key={`${exp.puesto}-${index}`} className="transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_rgba(0,0,0,0.24)]">
                            <CardContent className="space-y-5 p-8">
                                <div className="flex items-center justify-between gap-4">
                                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">{exp.año}</p>
                                    <span className="border border-border bg-background px-2 py-1 text-[10px] uppercase tracking-[0.24em] text-accent">
                                        {exp.empresa}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-foreground">{exp.puesto}</h3>
                                <p className="text-sm leading-7 text-muted-foreground">{exp.descripcion}</p>
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
