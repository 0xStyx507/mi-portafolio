// components/ThemeToggle.tsx
'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Inicializar con el tema del sistema o localStorage
    const initialDark = stored === 'dark' || (!stored && prefersDark);
    setDark(initialDark);
  }, []);

  useEffect(() => {
    if (dark === undefined) return; // Evitar aplicar antes de inicializar
    
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      onClick={() => setDark(d => !d)}
      className="px-3 py-2 rounded border border-error"
      aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {dark ? "☀️ Claro" : "🌙 Oscuro"}
    </button>
  );
}