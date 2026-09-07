# Whoami Blog

Blog MVP moderno, sencillo y rápido construido con Next.js. Orientado a SEO y preparado para monetización futura con publicidad (por ejemplo Google AdSense), sin backend ni base de datos.

## Tecnologías

- Next.js (App Router)
- TypeScript (strict)
- Tailwind CSS
- React
- Markdown + gray-matter
- Lucide React
- next-themes (Light / Dark / System)

## Requisitos

- Node.js 18+ (recomendado LTS)
- npm

## Instalación

```bash
npm install
```

Copia el archivo de entorno de ejemplo y ajusta la URL del sitio:

```bash
cp .env.example .env.local
```

## Ejecución en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

## Estructura relevante

```text
app/                 # Rutas (App Router)
components/          # Componentes reutilizables
content/posts/       # Artículos en Markdown
lib/                 # Utilidades, posts, categorías y config del sitio
public/images/       # Imágenes estáticas
```

## Cómo crear un nuevo artículo

1. Crea un archivo `.md` en `content/posts/`.
2. Añade frontmatter con los campos requeridos:

```md
---
title: "Título del artículo"
slug: "titulo-del-articulo"
description: "Descripción corta para SEO y listados."
date: "2026-09-06"
author: "Whoami"
category: "Windows"
tags: ["Windows 11", "PC"]
featured: false
image: "/images/mi-imagen.svg"
---

Contenido en Markdown...
```

3. El listado, el sitemap y las rutas se actualizan automáticamente al construir o recargar en desarrollo.

Campos:

- `title`, `slug`, `description`, `date`, `author`, `category`, `tags` (obligatorios)
- `image`, `featured` (opcionales)
- `readingTime` se calcula automáticamente a partir del contenido

## Cómo agregar una categoría

1. Edita `lib/categories.ts`.
2. Añade un objeto con `name`, `slug` y `description`.
3. Usa exactamente ese `name` en el frontmatter `category` de los artículos.

Ejemplo:

```ts
{
  name: "Seguridad",
  slug: "seguridad",
  description: "Buenas prácticas y guías de seguridad digital.",
}
```

## Cómo cambiar el nombre del sitio

Edita `lib/site.ts` y modifica:

- `name`
- `title`
- `description`
- `author`
- `twitterHandle` (si aplica)

## Cómo cambiar la URL del sitio

1. Define `NEXT_PUBLIC_SITE_URL` en `.env.local` (o en Vercel → Environment Variables).
2. Ejemplo: `NEXT_PUBLIC_SITE_URL=https://tudominio.com`

Esa URL se usa en metadata canonical, Open Graph, `sitemap.xml` y `robots.txt`.

## Rutas incluidas

- `/` — Inicio
- `/blog` — Listado + buscador
- `/blog/[slug]` — Artículo
- `/categoria/[category]` — Artículos por categoría
- `/sobre-nosotros`
- `/contacto`
- `/sitemap.xml`
- `/robots.txt`

## Publicidad (Google AdSense)

AdSense ya está integrado con el publisher `ca-pub-7923527211384947`:

- Script global en `components/AdSenseScript.tsx`
- `public/ads.txt` para verificación de AdSense
- Meta `google-adsense-account` en el layout
- `AdPlaceholder` / `AdUnit` listos para unidades manuales cuando crees slots en AdSense

Puedes sobrescribir el client ID con `NEXT_PUBLIC_ADSENSE_CLIENT` en Vercel.

## Analytics (preparado, no activo)

En `app/layout.tsx` hay un comentario indicando dónde añadir un componente `Analytics` con `next/script` cuando quieras activar medición.

## Despliegue en Vercel

1. Sube el proyecto a GitHub/GitLab/Bitbucket.
2. Entra en [https://vercel.com](https://vercel.com) e importa el repositorio.
3. Framework preset: Next.js.
4. Añade la variable de entorno `NEXT_PUBLIC_SITE_URL` con tu dominio de producción.
5. Despliega.

También puedes usar la CLI:

```bash
npm i -g vercel
vercel
```

## Notas del MVP

- Sin autenticación
- Sin base de datos
- Sin CMS externo
- Sin Google Analytics ni AdSense activos todavía
