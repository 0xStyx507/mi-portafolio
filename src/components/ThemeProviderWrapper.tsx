"use client";

import { ThemeProvider, ThemeProviderProps } from "next-themes";
import React from "react";

// Extender las props del ThemeProvider para permitir configuración (OCP: abierto para extensión)
interface ThemeProviderWrapperProps extends Partial<ThemeProviderProps> {
    children: React.ReactNode;
}

// Valores por defecto para mantener consistencia (SRP: configuración centralizada)
const DEFAULT_THEME_CONFIG: ThemeProviderProps = {
    attribute: "class",
    defaultTheme: "system",
    enableSystem: true,
    disableTransitionOnChange: false,
};

export default function ThemeProviderWrapper({
    children,
    ...themeConfig
}: ThemeProviderWrapperProps): React.ReactElement {
    // Combinar configuración por defecto con props personalizadas (DIP: depender de abstracciones)
    const config: ThemeProviderProps = {
        ...DEFAULT_THEME_CONFIG,
        ...themeConfig,
    };

    return (
        <ThemeProvider {...config}>
            {children}
        </ThemeProvider>
    );
}