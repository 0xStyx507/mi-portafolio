"use client";

import { useEffect, useId, useRef, useState, type ReactElement } from "react";
import { Check, ChevronDown, type LucideIcon } from "lucide-react";

export interface SelectionMenuOption {
  value: string;
  label: string;
  description?: string;
  indicatorClass?: string;
}

interface SelectionMenuProps {
  value: string;
  options: SelectionMenuOption[];
  onChange: (value: string) => void;
  ariaLabel: string;
  label?: string;
  icon?: LucideIcon;
  labelClassName?: string;
  className?: string;
  triggerClassName?: string;
  menuClassName?: string;
  optionsClassName?: string;
}

export default function SelectionMenu({
  value,
  options,
  onChange,
  ariaLabel,
  label,
  icon: Icon,
  labelClassName = "",
  className = "",
  triggerClassName = "",
  menuClassName = "",
  optionsClassName = "",
}: SelectionMenuProps): ReactElement {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = `selection-menu-${useId().replace(/:/g, "")}`;
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event: PointerEvent): void => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setIsOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleOptionSelect = (nextValue: string): void => {
    onChange(nextValue);
    setIsOpen(false);
  };

  return (
    <div ref={menuRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={`${ariaLabel}. Actual: ${selectedOption.label}`}
        onClick={() => setIsOpen((open) => !open)}
        className={`flex h-11 min-w-0 items-center gap-2 border-2 border-border bg-card px-3 text-left text-xs font-bold uppercase tracking-[0.14em] text-foreground outline-none transition-colors hover:border-primary focus:border-accent focus:ring-2 focus:ring-accent/30 ${triggerClassName}`}
      >
        {Icon && <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />}
        {label && <span className={`shrink-0 text-muted-foreground ${labelClassName}`}>{label}</span>}
        {selectedOption.indicatorClass && (
          <span className={`h-2 w-2 shrink-0 rounded-full ${selectedOption.indicatorClass}`} aria-hidden="true" />
        )}
        <span className="min-w-0 flex-1 truncate">{selectedOption.label}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          id={menuId}
          role="listbox"
          aria-label={ariaLabel}
          className={`absolute left-0 right-0 top-full z-50 mt-2 max-h-72 overflow-y-auto border-2 border-border bg-card p-2 shadow-[8px_8px_0_rgba(0,0,0,0.24)] ${menuClassName}`}
        >
          <div className={`grid gap-1 ${optionsClassName}`}>
            {options.map((option) => {
              const isSelected = option.value === value;

              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleOptionSelect(option.value)}
                  className={`flex min-w-0 items-center gap-3 border px-3 py-2.5 text-left transition-colors ${
                    isSelected
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-transparent text-muted-foreground hover:border-border hover:bg-background hover:text-foreground"
                  }`}
                >
                  {option.indicatorClass && (
                    <span
                      className={`h-3 w-3 shrink-0 rounded-full border border-foreground/20 ${option.indicatorClass}`}
                      aria-hidden="true"
                    />
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-xs font-bold uppercase tracking-[0.12em]">{option.label}</span>
                    {option.description && (
                      <span className="mt-0.5 block text-xs normal-case tracking-normal text-muted-foreground">
                        {option.description}
                      </span>
                    )}
                  </span>
                  {isSelected && <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
