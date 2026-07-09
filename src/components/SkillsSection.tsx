import React from "react";
import { TEXTS } from "../features/portfolio/content/copy";
import { SkillGroup } from "../features/portfolio/model/types";

interface SkillsSectionProps {
    skills: SkillGroup[];
    id?: string;
}

export default function SkillsSection({
    skills,
    id = "skills",
}: SkillsSectionProps): React.ReactElement {
    return (
        <section id={id} className="px-4 py-16 md:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-3xl">
                        <span className="section-label">Capability Matrix</span>
                        <h2 className="title-display mt-4 text-4xl text-primary md:text-6xl">
                            {TEXTS.SKILLS_TITLE}
                        </h2>
                    </div>

                    <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                        Stack técnico organizado por áreas de trabajo, con foco en backend,
                        cloud, seguridad aplicada y construcción de soluciones web
                        mantenibles.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {skills.map((group, index) => (
                        <article
                            key={group.titulo}
                            className="section-shell flex h-full flex-col p-6 transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_rgba(0,0,0,0.24)]"
                        >
                            <div className="mb-6 border-b border-border pb-5">
                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-secondary">
                                    Focus {String(index + 1).padStart(2, "0")}
                                </p>

                                <h3 className="mb-2 text-2xl font-semibold text-foreground">
                                    {group.titulo}
                                </h3>

                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                                    {group.enfoque}
                                </p>
                            </div>

                            <p className="mb-6 text-sm leading-7 text-muted-foreground">
                                {group.descripcion}
                            </p>

                            <div className="mt-auto flex flex-wrap gap-2">
                                {group.herramientas.map((skill) => (
                                    <span
                                        key={skill}
                                        className="border border-border bg-background px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-foreground"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}