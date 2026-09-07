---
title: "Cómo instalar Node.js en Windows"
slug: "como-instalar-nodejs-en-windows"
description: "Aprende a instalar Node.js en Windows paso a paso, comprobar la instalación y configurar npm para empezar a desarrollar."
date: "2026-09-05"
author: "Whoami"
category: "JavaScript"
tags: ["Node.js", "npm", "Windows", "desarrollo"]
featured: true
image: "/images/como-instalar-nodejs-en-windows.png"
---

Node.js es el runtime que permite ejecutar JavaScript fuera del navegador. Si quieres usar herramientas modernas como Next.js, Vite o npm, instalarlo correctamente en Windows es el primer paso.

## Índice

- [Qué versión conviene instalar](#que-version-conviene-instalar)
- [Instalación con el instalador oficial](#instalacion-con-el-instalador-oficial)
- [Comprobar que todo funciona](#comprobar-que-todo-funciona)
- [Alternativa: instalar con winget](#alternativa-instalar-con-winget)
- [Errores frecuentes](#errores-frecuentes)

## Qué versión conviene instalar

Para la mayoría de proyectos, elige la versión **LTS** (Long Term Support). Es más estable y suele ser la recomendada por frameworks populares.

Si trabajas en varios proyectos con versiones distintas, más adelante puedes usar un gestor como `nvm-windows`. Para empezar, el instalador LTS es suficiente.

## Instalación con el instalador oficial

1. Entra en [https://nodejs.org](https://nodejs.org).
2. Descarga la versión **LTS** para Windows.
3. Ejecuta el instalador `.msi`.
4. Acepta los valores por defecto.
5. Asegúrate de marcar la opción que agrega Node.js al PATH.
6. Finaliza la instalación y cierra las terminales abiertas.

Abrir una terminal nueva es importante: si dejas abierta una PowerShell antigua, puede que no detecte los comandos todavía.

## Comprobar que todo funciona

Abre PowerShell o Terminal de Windows y ejecuta:

```bash
node -v
npm -v
```

Deberías ver algo similar a:

```text
v22.14.0
10.9.2
```

Los números exactos cambiarán según la versión instalada. Lo importante es que ambos comandos respondan sin error.

Prueba también un comando rápido:

```bash
node -e "console.log('Node.js listo')"
```

## Alternativa: instalar con winget

Si prefieres la línea de comandos:

```bash
winget install OpenJS.NodeJS.LTS
```

Luego cierra y vuelve a abrir la terminal, y verifica con `node -v` y `npm -v`.

## Errores frecuentes

### `node` no se reconoce como comando

Cierra todas las terminales, ábrelas de nuevo y vuelve a probar. Si sigue fallando, reinicia Windows o revisa que la carpeta de Node esté en el PATH.

### Permisos al instalar paquetes globales

En Windows suele ser mejor evitar `sudo`-style hacks. Usa una terminal normal y, si hace falta, ejecuta como administrador solo para la instalación inicial.

### Confusión entre Node y npm

Node ejecuta JavaScript. npm es el gestor de paquetes que viene incluido. Ambos se instalan juntos en la mayoría de casos.

Con Node.js instalado ya puedes crear tu primer proyecto, instalar dependencias y empezar con frameworks como Next.js.
