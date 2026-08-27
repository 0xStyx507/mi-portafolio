"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { useTheme } from "next-themes";

type AppearanceMode = "normal" | "oscuro" | "amber-terminal" | "cyber-magenta";

const APPEARANCE_STORAGE_KEY = "portfolio-appearance";
const DEFAULT_APPEARANCE: AppearanceMode = "normal";

const APPEARANCE_OPTIONS: Array<{ label: string; value: AppearanceMode }> = [
  { label: "Normal", value: "normal" },
  { label: "Oscuro", value: "oscuro" },
  { label: "Terminal verde", value: "amber-terminal" },
  { label: "Cyber magenta", value: "cyber-magenta" },
];

function applyPalette(palette: AppearanceMode): void {
  if (palette === "normal" || palette === "oscuro") {
    document.documentElement.removeAttribute("data-palette");
    return;
  }

  document.documentElement.dataset.palette = palette;
}

function applyAppearanceSelection(
  setTheme: (theme: string) => void,
  appearance: AppearanceMode,
): void {
  if (appearance === "normal") {
    applyPalette(appearance);
    setTheme("light");
    return;
  }

  if (appearance === "oscuro") {
    applyPalette(appearance);
    setTheme("dark");
    return;
  }

  applyPalette(appearance);
  setTheme("dark");
}

export default function PaletteToggle(): ReactElement {
  const { setTheme } = useTheme();
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const savedAppearance = localStorage.getItem(APPEARANCE_STORAGE_KEY) as AppearanceMode | null;
    const appearance = savedAppearance ?? DEFAULT_APPEARANCE;
    applyAppearanceSelection(setTheme, appearance);

    if (selectRef.current) {
      selectRef.current.value = appearance;
    }
  }, [setTheme]);

  const handleAppearanceChange = (appearance: AppearanceMode): void => {
    applyAppearanceSelection(setTheme, appearance);
    localStorage.setItem(APPEARANCE_STORAGE_KEY, appearance);
  };

  return (
    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
      <span className="hidden sm:inline">Apariencia</span>
      <select
        ref={selectRef}
        defaultValue={DEFAULT_APPEARANCE}
        aria-label="Seleccionar apariencia"
        onChange={(event) => handleAppearanceChange(event.target.value as AppearanceMode)}
        className="min-w-28 border-2 border-border bg-card px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-foreground outline-none transition-all duration-300 hover:border-primary focus:border-accent focus:ring-2 focus:ring-accent/30 sm:min-w-36"
        suppressHydrationWarning
      >
        {APPEARANCE_OPTIONS.map((appearance) => (
          <option key={appearance.value} value={appearance.value}>
            {appearance.label}
          </option>
        ))}
      </select>
    </label>
  );
}
