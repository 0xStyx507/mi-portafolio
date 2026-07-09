// components/SkillsSection.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import { TEXTS } from '../features/portfolio/content/copy';

// Carga dinámica para optimización (SRP: separación de carga)
const Logo = dynamic(() => import('./LogoInline'), { ssr: false });

// Constantes para textos (Clean Code: evitar hardcode)
const SKILLS_TITLE = TEXTS.SKILLS_TITLE;

interface SkillsSectionProps {
    id?: string;
}

export default function SkillsSection({ id = 'skills' }: SkillsSectionProps): React.ReactElement {
    return (
        <section id={id} className="px-4 py-16 md:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <span className="section-label">Capability Matrix</span>
                        <h2 className="title-display mt-4 text-4xl text-primary md:text-6xl">{SKILLS_TITLE}</h2>
                    </div>
                    <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                        Stack visible, lenguaje visual deliberado y una lectura rápida de herramientas que ya forman parte del trabajo diario.
                    </p>
                </div>
                <div className="section-shell p-6 md:p-8">
                    <div className="mb-6 flex items-center justify-between gap-4 border-b border-border pb-4">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">Tooling strip</p>
                        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">frontend / backend / security crossover</p>
                    </div>
                    <div className="w-full">
                        <Logo />
                    </div>
                </div>
            </div>
        </section>
    );
}
