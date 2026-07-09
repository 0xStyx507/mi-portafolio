import React from 'react';
import { Card, CardContent } from './ui/Card';
import { Education as Formacion } from '../features/portfolio/model/types';

interface EducationSectionProps {
    formacion: Formacion[];
    id?: string;
}

export default function EducationSection({ formacion, id = "formacion" }: EducationSectionProps): React.ReactElement {
    return (
        <section id={id} className="px-4 py-16 md:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16">
                    <span className="section-label">Learning Stack</span>
                    <h2 className="title-display mt-4 text-4xl text-primary md:text-6xl">Formación académica</h2>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {formacion.map((form, i) => (
                        <Card key={i} className="transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_rgba(0,0,0,0.24)]">
                            <CardContent className="p-8">
                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-secondary">{form.año}</p>
                                <h3 className="mb-4 text-xl font-semibold text-foreground">{form.titulo}</h3>
                                <div className="border-t border-border pt-4">
                                    <p className="text-sm leading-7 text-muted-foreground">{form.institucion}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
