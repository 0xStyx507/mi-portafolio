import React from "react";
import PaletteToggle from "./PaletteToggle";
import { CONFIG } from "../../features/portfolio/content/copy";

// Definir enlaces de navegación como constante para mantener SRP y facilitar mantenimiento
const NAVIGATION_LINKS = CONFIG.NAVIGATION_LINKS;

// Componente separado para los enlaces de navegación (SRP: responsabilidad única de renderizar enlaces)
interface NavLinksProps {
  className?: string;
}

function NavLinks({ className = "" }: NavLinksProps): React.ReactElement {
  return (
    <div className={`hidden items-center gap-3 lg:flex ${className}`}>
      {NAVIGATION_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="border border-transparent px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 hover:border-border hover:bg-card hover:text-primary"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

// Componente para el título del sitio (SRP: responsabilidad única de renderizar el título)
interface SiteTitleProps {
  className?: string;
}

function SiteTitle({ className = "" }: SiteTitleProps): React.ReactElement {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="section-label">AB_90</span>
      <h1 className="title-display text-xl text-primary transition-colors duration-300 hover:text-accent md:text-2xl">
        Abdiel Bernal
      </h1>
    </div>
  );
}

// Props del Navbar, eliminando children no usado (ISP: interfaces específicas)
interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps): React.ReactElement {
  return (
    <nav className={`fixed top-0 w-full border-b-2 border-border bg-background/85 backdrop-blur-md ${className}`}>
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 py-4 md:px-8 lg:grid-cols-[auto_1fr_auto]">
        <SiteTitle className="min-w-0" />
        <NavLinks className="justify-center" />
        <div className="justify-self-end">
          <PaletteToggle />
        </div>
      </div>
    </nav>
  );
} 
