"use client";

import { useEffect, useState, type ReactElement } from "react";
import { Palette } from "lucide-react";
import { useTheme } from "next-themes";
import SelectionMenu, { type SelectionMenuOption } from "./SelectionMenu";

type AppearanceMode = "normal" | "oscuro" | "amber-terminal" | "cyber-magenta";

const APPEARANCE_STORAGE_KEY = "portfolio-appearance";
const DEFAULT_APPEARANCE: AppearanceMode = "normal";

const APPEARANCE_OPTIONS: SelectionMenuOption[] = [
  { label: "Normal", value: "normal", description: "Base clara", indicatorClass: "bg-[#0f9db0]" },
  { label: "Oscuro", value: "oscuro", description: "CRT nocturno", indicatorClass: "bg-[#f2a93b]" },
  { label: "Terminal verde", value: "amber-terminal", description: "Terminal neon", indicatorClass: "bg-[#39ff8f]" },
  { label: "Cyber magenta", value: "cyber-magenta", description: "Cyber retro", indicatorClass: "bg-[#ff2f92]" },
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
  const [appearance, setAppearance] = useState<AppearanceMode>(DEFAULT_APPEARANCE);

  useEffect(() => {
    const savedAppearance = localStorage.getItem(APPEARANCE_STORAGE_KEY) as AppearanceMode | null;
    const nextAppearance = APPEARANCE_OPTIONS.some((option) => option.value === savedAppearance)
      ? savedAppearance ?? DEFAULT_APPEARANCE
      : DEFAULT_APPEARANCE;

    // Restore the persisted choice after hydration without changing the SSR output.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAppearance(nextAppearance);
    applyAppearanceSelection(setTheme, nextAppearance);
  }, [setTheme]);

  const handleAppearanceChange = (nextValue: string): void => {
    if (!APPEARANCE_OPTIONS.some((option) => option.value === nextValue)) return;

    const nextAppearance = nextValue as AppearanceMode;
    setAppearance(nextAppearance);
    applyAppearanceSelection(setTheme, nextAppearance);
    localStorage.setItem(APPEARANCE_STORAGE_KEY, nextAppearance);
  };

  return (
    <SelectionMenu
      value={appearance}
      options={APPEARANCE_OPTIONS}
      onChange={handleAppearanceChange}
      ariaLabel="Seleccionar apariencia"
      label="Apariencia"
      icon={Palette}
      labelClassName="hidden md:inline"
      triggerClassName="h-9 max-w-[10rem] px-2.5 text-[9px] sm:max-w-[11rem] sm:px-3 2xl:max-w-[13rem]"
      menuClassName="left-auto w-[min(16rem,calc(100vw-2rem))]"
    />
  );
}
