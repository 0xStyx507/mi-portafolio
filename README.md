# Mi Portafolio

Portafolio personal construido con `Next.js 16`, `React 19`, `TypeScript` y `Tailwind CSS 4`, con una presentación visual inspirada en interfaces noventeras y una estructura interna más cercana a un proyecto mantenible de nivel senior.

## Resumen

- App Router con render estático en la ruta principal.
- Fuente de datos basada en `public/data.json`.
- Arquitectura por feature para el dominio `portfolio`.
- Catálogo de proyectos con detalle técnico, especialidades, origen, estado y enlaces.
- Filtros por especialidad y estado, con grupos para destacados, desarrollo y laboratorios.
- Tema claro/oscuro con `next-themes`.
- UI con estética editorial/terminal retro y componentes reutilizables.
- Tooling migrado a `pnpm`.

## Stack

- `next@16.2.10`
- `react@19.1.0`
- `typescript`
- `tailwindcss@4`
- `next-themes`
- `eslint@9`
- `pnpm@11.9.0`

## Estructura actual

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── EducationSection.tsx
│   ├── ExperienceSection.tsx
│   ├── FooterSection.tsx
│   ├── LogoInline.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   └── ThemeProviderWrapper.tsx
├── features/
│   └── portfolio/
│       ├── components/
│       │   └── PortfolioPage.tsx
│       ├── content/
│       │   └── copy.ts
│       ├── hooks/
│       │   └── usePortfolioData.ts
│       ├── model/
│       │   └── types.ts
│       ├── services/
│       │   └── portfolioDataService.ts
│       └── index.ts
└── lib/
    └── utils.ts

public/
├── data.json
└── svg-logo.json
```

## Cómo funciona

La página principal en [src/app/page.tsx] delega la composición al feature `portfolio`.

El flujo principal es:

1. `PortfolioPage` carga los datos con `usePortfolioData`.
2. `PortfolioDataService` lee `public/data.json`.
3. Los componentes de secciones renderizan el contenido y mantienen la UI desacoplada de la fuente de datos.
4. `ContactSection` toma el correo desde el enlace `mailto:` del JSON, para evitar duplicación manual.

## Datos del portafolio

El contenido editable del sitio vive en:

- [public/data.json]

Ahí se definen:

- descripción principal
- enlaces públicos
- proyectos
- formación
- experiencia
- año del footer

Cada proyecto incluye `slug`, `title`, `summary`, `featured`, `categories`, `status`, stack,
arquitectura, decisiones técnicas, seguridad, pruebas, CI/CD, aprendizajes, limitaciones y
próximos pasos. `PortfolioDataService` valida esta forma antes de renderizarla.

Los logos del carrusel viven en:

- [public/svg-logo.json]

## Desarrollo

### Prerrequisitos

- Node.js `22.x` o compatible con el proyecto
- `pnpm` disponible globalmente

### Comandos

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
pnpm start
```


## Diseño

La dirección visual actual mezcla:

- paleta cálida en light mode y contraste neón en dark mode
- grid y scanlines sutiles
- paneles con bordes duros y sombras desplazadas
- tipografía monoespaciada para reforzar la vibra retro-técnica

La base visual está centralizada en:

- [src/app/globals.css]
## Calidad

Validaciones usadas actualmente:

```bash
pnpm lint
pnpm build
```

Estado actual:

- `lint` pasa
- `build` pasa

## Seguridad y dependencias

- El proyecto fue migrado de `npm` a `pnpm`.
- `package-lock.json` fue retirado para evitar doble lockfile.
- `packageManager` quedó fijado en [package.json].
- Sigue existiendo una observación transitiva conocida en el árbol de `next` relacionada con `postcss`, por lo que conviene volver a revisar `pnpm audit` al actualizar Next.

