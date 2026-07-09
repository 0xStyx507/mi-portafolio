// app/components/ThemeToggle.tsx
"use client";

import type { ReactElement } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle(): ReactElement {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme: "dark" | "light" =
    theme === "dark" || theme === "light"
      ? theme
      : systemTheme === "dark"
        ? "dark"
        : "light";

  const handleToggle = (): void => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggle}
      type="button"
      className="border-2 border-border bg-card px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      {currentTheme === "dark" ? "Modo Sol" : "Modo CRT"}
    </button>
  );
} 
