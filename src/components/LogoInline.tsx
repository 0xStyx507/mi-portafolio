"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Card, CardContent } from "@/components/ui/Card";
import Carousel, { CarouselItem } from "@/components/ui/Carousel";

interface Logo {
  alias: string;
  title: string;
  type: string;
  enabled?: boolean;
  svg?: string;
  svg_dark?: string;
  svg_light?: string;
}

function isLogo(value: unknown): value is Logo {
  return (
    typeof value === "object" &&
    value !== null &&
    "alias" in value &&
    "title" in value &&
    "type" in value &&
    typeof (value as Partial<Logo>).alias === "string" &&
    typeof (value as Partial<Logo>).title === "string" &&
    typeof (value as Partial<Logo>).type === "string"
  );
}

function isLogoArray(value: unknown): value is Logo[] {
  return Array.isArray(value) && value.every(isLogo);
}

export default function LogoInline(): React.JSX.Element | null {
  const [logos, setLogos] = useState<Logo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // next-themes
  const { theme, systemTheme } = useTheme();

  // Carga de JSON
  useEffect(() => {
    async function load(): Promise<void> {
      try {
        const res = await fetch("/svg-logo.json", { cache: "no-store" });
        const txt = (await res.text()).replace(/^\uFEFF/, "").trim();
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const parsed = JSON.parse(txt) as unknown;
        let rawLogos: Logo[] = [];

        if (isLogoArray(parsed)) {
          rawLogos = parsed;
        } else if (
          typeof parsed === "object" &&
          parsed !== null &&
          "logos" in parsed &&
          isLogoArray((parsed as { logos: unknown }).logos)
        ) {
          rawLogos = (parsed as { logos: Logo[] }).logos;
        }

        const seen = new Set<string>();
        const filtered = rawLogos.filter((logo) => {
          if (logo.enabled === false) {
            return false;
          }
          if (!logo.alias || seen.has(logo.alias)) {
            return false;
          }
          seen.add(logo.alias);
          return true;
        });

        setLogos(filtered);
      } catch (error) {
        console.error("Error cargando JSON:", error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center text-sm uppercase tracking-[0.24em] text-muted-foreground">
        Cargando logos...
      </div>
    );
  }

  // Determina el tema real
  const selectedTheme = theme === "system" ? systemTheme ?? "light" : theme ?? "light";
  const currentTheme: "dark" | "light" = selectedTheme === "dark" ? "dark" : "light";

  return (
    <Carousel className="w-full max-w-full">
      {logos.map((logo) => {
        const src =
          currentTheme === "dark"
            ? logo.svg_dark || logo.svg || logo.svg_light
            : logo.svg_light || logo.svg || logo.svg_dark;

        return (
          <CarouselItem key={`${logo.alias}-${currentTheme}`}>
            <Card className="transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_rgba(0,0,0,0.24)]">
              <CardContent className="flex flex-col items-center gap-3 px-6 py-8">
                <LogoItem logo={logo} src={src} />
              </CardContent>
            </Card>
          </CarouselItem>
        );
      })}
    </Carousel>
  );
}

interface LogoItemProps {
  logo: Logo;
  src?: string;
}

function LogoItem({ logo, src }: LogoItemProps): React.JSX.Element {
  const [errored, setErrored] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center">
      {!errored && src ? (
        // Los logos vienen desde JSON y pueden resolver a distintas URLs o data URIs.
        // Mantenemos img por flexibilidad y porque no todos son compatibles con next/image.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={logo.title}
          className="mb-2 h-12 w-12 object-contain"
          loading="lazy"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="mb-2 flex h-12 w-12 items-center justify-center text-center text-xs">
          {logo.title}
        </div>
      )}
      <div className="text-center text-sm font-bold uppercase tracking-[0.15em]">{logo.title}</div>
      <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{logo.type}</div>
    </div>
  );
}
