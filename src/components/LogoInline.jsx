"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Card, CardContent } from "@/components/ui/Card";

export default function LogoInline() {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  // next-themes
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita mismatches SSR—cliente sólo renderiza tras montar
  useEffect(() => {
    setMounted(true);
  }, []);

  // Carga de JSON
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/svg-logo.json", { cache: "no-store" });
        const txt = (await res.text()).replace(/^\uFEFF/, "").trim();
        if (!res.ok) throw new Error(res.statusText);
        const data = JSON.parse(txt);
        const raw = Array.isArray(data) ? data : data.logos || [];
        const seen = new Set();
        const filtered = raw
          .filter((l) => l.enabled !== false && l.alias)
          .filter((l) => {
            if (seen.has(l.alias)) return false;
            seen.add(l.alias);
            return true;
          });
        setLogos(filtered);
      } catch (err) {
        console.error("Error cargando JSON:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (!mounted) return null; // o un placeholder de tema
  if (loading) return <div className="p-4 text-center">Cargando logos…</div>;

  // Determina el tema real
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {logos.map((logo) => {
        // Elige URL según tema, con fallback a `svg`
        const src =
          currentTheme === "dark"
            ? logo.svg_dark || logo.svg || logo.svg_light
            : logo.svg_light || logo.svg || logo.svg_dark;

        return (
          <Card key={`${logo.alias}-${currentTheme}`} className="hover:shadow-lg">
            <CardContent className="flex flex-col items-center py-4">
              <LogoItem logo={logo} src={src} />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

function LogoItem({ logo, src }) {
  const [errored, setErrored] = useState(false);

  // Reset de error al cambiar la URL
  useEffect(() => {
    setErrored(false);
  }, [src]);

  return (
    <div className="flex flex-col items-center">
      {!errored && src ? (
        <img
          src={src}
          alt={logo.title}
          className="w-12 h-12 object-contain mb-2"
          loading="lazy"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="w-12 h-12 flex items-center justify-center mb-2 text-xs text-center">
          {logo.title}
        </div>
      )}
      <div className="text-sm font-medium">{logo.title}</div>
      <div className="text-[10px]">{logo.type}</div>
    </div>
  );
}