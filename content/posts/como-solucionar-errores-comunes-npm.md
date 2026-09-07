---
title: "Cómo solucionar errores comunes de npm"
slug: "como-solucionar-errores-comunes-npm"
description: "Soluciones claras a errores frecuentes de npm: ERESOLVE, permisos, caché corrupta, módulos faltantes y conflictos de versiones."
date: "2026-09-04"
author: "Whoami"
category: "JavaScript"
tags: ["npm", "Node.js", "errores", "debugging"]
featured: true
image: "/images/como-solucionar-errores-comunes-npm.png"
---

npm es fiable, pero sus mensajes de error pueden parecer crípticos la primera vez. Esta guía resume los problemas más habituales y cómo resolverlos sin perder una tarde entera.

## Índice

- [Error ERESOLVE / peer dependencies](#error-eresolve--peer-dependencies)
- [Cannot find module](#cannot-find-module)
- [Caché de npm corrupta](#cache-de-npm-corrupta)
- [Problemas de permisos en Windows](#problemas-de-permisos-en-windows)
- [node_modules inconsistente](#node_modules-inconsistente)
- [Buenas prácticas para evitar dolores de cabeza](#buenas-practicas-para-evitar-dolores-de-cabeza)

## Error ERESOLVE / peer dependencies

Aparece cuando un paquete pide una versión de otro paquete que no coincide con la instalada.

Opciones seguras:

1. Actualiza o alinea las versiones pedidas en `package.json`.
2. Revisa el mensaje: npm suele indicar qué paquete choca.
3. Como último recurso temporal:

```bash
npm install --legacy-peer-deps
```

Úsalo solo si entiendes el riesgo. En proyectos serios conviene resolver el conflicto de versiones de forma explícita.

## Cannot find module

Este error suele significar que falta una dependencia o que `node_modules` está incompleto.

Prueba esto:

```bash
rm -r node_modules
rm package-lock.json
npm install
```

En PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

También confirma que estás en la carpeta correcta del proyecto (donde está `package.json`).

## Caché de npm corrupta

Si las instalaciones fallan de forma intermitente o con errores raros de descarga:

```bash
npm cache clean --force
npm install
```

Esto no borra tu proyecto; solo limpia la caché local de npm.

## Problemas de permisos en Windows

Evita instalar paquetes globales en rutas protegidas si no es necesario. Prefiere:

- herramientas locales del proyecto (`npx`)
- scripts en `package.json`

Si un instalador global falla por permisos, abre la terminal como administrador solo para esa instalación puntual.

## node_modules inconsistente

Síntomas típicos:

- una dependencia funciona en un equipo y falla en otro
- builds distintos tras clonar el repo
- errores tras cambiar de rama

Solución recomendada:

1. Borra `node_modules`.
2. Asegúrate de usar la misma versión mayor de Node.
3. Reinstala con el `package-lock.json` del repositorio.

```bash
npm ci
```

`npm ci` es ideal en CI y en clones limpios porque respeta exactamente el lockfile.

## Buenas prácticas para evitar dolores de cabeza

- Usa una versión LTS de Node de forma consistente.
- No subas `node_modules` a Git.
- Prefiere `npm ci` en entornos automatizados.
- Lee el final del error: ahí suele estar la pista real.
- Actualiza dependencias de una en una cuando un upgrade grande rompe todo.

Con estos patrones resolverás la mayoría de incidencias diarias de npm sin recurrir a soluciones mágicas.
