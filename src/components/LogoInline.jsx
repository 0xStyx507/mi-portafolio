"use client";
import { useEffect, useState } from "react";
import Carousel, { CarouselItem } from "@/components/ui/Carousel"; // ruta exacta al carrusel

export default function LogoInline({ theme }) {
  const [logos, setLogos] = useState([]);

  // Selecciona la URL correcta según el tema, con inferencia ligera
  const getLogoUrl = (logo, theme) => {
    const inferVariant = (url, target) => {
      if (!url) return null;
      if (target === "dark") {
        if (/_dark\.svg$/i.test(url)) return url;
        return url.replace(/\.svg$/i, "_dark.svg");
      } else {
        if (/_dark\.svg$/i.test(url)) {
          return url.replace(/_dark\.svg$/i, ".svg");
        }
        return url;
      }
    };

    if (theme === "dark") {
      return (
        logo.svg_dark ||
        inferVariant(logo.svg_light || logo.svg, "dark") ||
        logo.svg ||
        ""
      );
    } else {
      return (
        logo.svg_light ||
        inferVariant(logo.svg_dark || logo.svg, "light") ||
        logo.svg ||
        ""
      );
    }
  };

  useEffect(() => {
    fetch("/data/svg-logo.json")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data.logos)) {
          // dedupe por alias conservando el primero
          const seen = new Set();
          const filtered = data.logos
            .filter((l) => l.enabled !== false) // default true if missing
            .filter((l) => {
              if (!l.alias) return false;
              if (seen.has(l.alias)) return false;
              seen.add(l.alias);
              return true;
            });
          setLogos(filtered);
        }
      })
      .catch(console.warn);
  }, []);

  if (!logos.length) return <div className="p-4">Cargando logos...</div>;

  // Agrupaciones
// Frontend group: incluye IDEs con usage "frontend" o "all"
const frontendGroup = logos.filter((l) =>
  ["Frontend", "Version Control", "Tool", "Software",""].includes(l.category) ||
  (l.type === "IDE" && (l.usage === "frontend" || l.usage === "all"))
);

// Backend+DB group: incluye IDEs con usage "backend" además de Backend/Database
const backendDbGroup = logos.filter((l) =>
  l.category === "Backend" ||
  l.category === "Database" ||
  (l.type === "IDE" && l.usage === "backend") ||
  l.type === "Language" && l.category === "Backend" ||
  l.type === "Database"
);


  return (
    <div className="space-y-10">
      {/* Segmento 1: Frontend */}
      {frontendGroup.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-3" id="frontend">
            Frontend
          </h2>
          <Carousel className="py-2">
            {frontendGroup.map((logo) => (
              <CarouselItem key={logo.alias} className="max-w-[140px]">
                <LogoCard logo={logo} theme={theme} getLogoUrl={getLogoUrl} />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      )}

      {/* Segmento 2: Backend + Database */}
      {backendDbGroup.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-3" id="backend-db">
            Backend &amp; Database
          </h2>
          <Carousel className="py-2">
            {backendDbGroup.map((logo) => (
              <CarouselItem key={logo.alias} className="max-w-[140px]">
                <LogoCard logo={logo} theme={theme} getLogoUrl={getLogoUrl} />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
}

function LogoCard({ logo, theme, getLogoUrl }) {
  const [errored, setErrored] = useState(false);
  const src = getLogoUrl(logo, theme);

  return (
    <div className="flex flex-col items-center p-3 ">
      {!errored && src ? (
        <img
          src={src}
          alt={logo.title}
          className="w-16 h-16 object-contain mb-2"
          loading="lazy"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="w-16 h-16 flex items-center justify-center mb-2 text-[10px] text-center">
          {logo.title}
        </div>
      )}
      <div className="text-xs font-medium">{logo.title}</div>
      <div className="text-[10px]">{logo.type}</div>
    </div>
  );
}
