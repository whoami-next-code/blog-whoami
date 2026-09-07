---
title: "Cómo empezar a programar con Next.js"
slug: "como-empezar-a-programar-con-nextjs"
description: "Tutorial para crear tu primer proyecto con Next.js, entender App Router y publicar una página sencilla en pocos minutos."
date: "2026-09-02"
author: "Whoami"
category: "Next.js"
tags: ["Next.js", "React", "TypeScript", "frontend"]
featured: false
image: "/images/como-empezar-a-programar-con-nextjs.png"
---

Next.js es uno de los frameworks más populares para construir sitios y aplicaciones con React. Combina renderizado en servidor, rutas basadas en archivos y una experiencia de desarrollo muy productiva.

Esta guía te lleva desde cero hasta tu primera página funcionando.

## Índice

- [Qué necesitas antes de empezar](#que-necesitas-antes-de-empezar)
- [Crear el proyecto](#crear-el-proyecto)
- [Entender la estructura básica](#entender-la-estructura-basica)
- [Crear tu primera página](#crear-tu-primera-pagina)
- [Ejecutar y construir](#ejecutar-y-construir)
- [Siguientes pasos](#siguientes-pasos)

## Qué necesitas antes de empezar

- Node.js LTS instalado
- Un editor como VS Code o Cursor
- Conocimientos básicos de HTML, CSS y JavaScript

Si todavía no tienes Node.js, instálalo primero y comprueba `node -v` y `npm -v`.

## Crear el proyecto

En la carpeta donde quieras trabajar:

```bash
npx create-next-app@latest mi-primer-next
```

Responde las preguntas del asistente. Para un inicio limpio, una configuración recomendada es:

- TypeScript: sí
- ESLint: sí
- Tailwind CSS: sí
- App Router: sí
- `src/` directory: según preferencia

Entra al proyecto:

```bash
cd mi-primer-next
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) y deberías ver la página de bienvenida.

## Entender la estructura básica

Con App Router, lo esencial suele estar en `app/`:

- `app/layout.tsx`: layout global
- `app/page.tsx`: página de inicio
- `app/globals.css`: estilos globales

Cada carpeta dentro de `app` puede convertirse en una ruta. Por ejemplo, `app/blog/page.tsx` responde en `/blog`.

## Crear tu primera página

Crea el archivo `app/hola/page.tsx`:

```tsx
export default function HolaPage() {
  return (
    <main>
      <h1>Hola desde Next.js</h1>
      <p>Esta es mi primera ruta personalizada.</p>
    </main>
  );
}
```

Visita `/hola` y verás el nuevo contenido sin configurar un router manualmente.

## Ejecutar y construir

Durante desarrollo:

```bash
npm run dev
```

Para comprobar que el proyecto está listo para producción:

```bash
npm run build
npm start
```

Si el build termina sin errores, vas por buen camino.

## Siguientes pasos

Cuando ya tengas la base:

- Aprende a usar `next/link` para navegación interna
- Añade metadata con `export const metadata`
- Optimiza imágenes con `next/image`
- Organiza componentes reutilizables en `components/`
- Despliega en Vercel con un repositorio Git

Next.js brilla especialmente en sitios orientados a contenido y SEO, como blogs, documentaciones y landings. Dominar App Router y metadata te dará una base sólida para proyectos reales.
