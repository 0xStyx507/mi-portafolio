import React from 'react';
import { TEXTS } from '../features/portfolio/content/copy';

interface FooterSectionProps {
    nombre: string;
    añoPie: string;
}

export default function FooterSection({ nombre, añoPie }: FooterSectionProps): React.ReactElement {
    return (
        <footer className="border-t-2 border-border px-4 py-8 md:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
                <p>
                    {TEXTS.FOOTER_TEXT} <span className="font-semibold text-foreground">{nombre}</span> - {añoPie}
                </p>
                <p className="uppercase tracking-[0.22em]">crafted with senior intent / 90s signal</p>
            </div>
        </footer>
    );
}
