"use client";

import { useEffect, useState, type ReactElement } from "react";
import PaletteToggle from "./PaletteToggle";
import { CONFIG } from "../../features/portfolio/content/copy";

const NAVIGATION_LINKS = CONFIG.NAVIGATION_LINKS;

interface NavLinksProps {
  className?: string;
  onNavigate?: () => void;
}

function NavLinks({ className = "", onNavigate }: NavLinksProps): ReactElement {
  return (
    <div className={`hidden min-w-0 flex-1 items-center justify-center gap-1 2xl:flex ${className}`}>
      {NAVIGATION_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onNavigate}
          className="border border-transparent px-2 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-300 hover:border-border hover:bg-card hover:text-primary"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function MobileNav(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="relative 2xl:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        onClick={() => setIsOpen((open) => !open)}
        className="border-2 border-border bg-card px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
        <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute right-0 top-full z-50 mt-3 w-[min(18rem,calc(100vw-2rem))] border-2 border-border bg-card p-3 shadow-[8px_8px_0_rgba(0,0,0,0.24)]"
        >
          <div className="grid gap-1">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border border-transparent px-3 py-3 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-border hover:bg-background hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface SiteTitleProps {
  className?: string;
}

function SiteTitle({ className = "" }: SiteTitleProps): ReactElement {
  return (
    <div className={`flex min-w-0 items-center gap-2 sm:gap-3 ${className}`}>
      <span className="section-label">AB_90</span>
      <h1 className="title-display min-w-0 truncate text-lg text-primary transition-colors duration-300 hover:text-accent sm:text-xl md:text-2xl">
        Abdiel Bernal
      </h1>
    </div>
  );
}

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps): ReactElement {
  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed top-0 z-50 w-full border-b-2 border-border bg-background/85 backdrop-blur-md ${className}`}
    >
      <div className="mx-auto flex min-w-0 max-w-7xl items-center gap-3 px-4 py-3 md:gap-5 md:px-8 2xl:max-w-[92rem]">
        <SiteTitle className="min-w-0 flex-1 2xl:flex-none" />
        <NavLinks className="justify-center" />
        <div className="flex shrink-0 items-center gap-2">
          <MobileNav />
          <PaletteToggle />
        </div>
      </div>
    </nav>
  );
}
