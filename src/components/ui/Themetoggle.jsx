// app/components/ThemeToggle.jsx
"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const current = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
    >
      {current === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}