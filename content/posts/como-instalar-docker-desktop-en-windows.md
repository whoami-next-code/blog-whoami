---
title: "Cómo instalar Docker Desktop en Windows"
slug: "como-instalar-docker-desktop-en-windows"
description: "Guía completa para instalar Docker Desktop en Windows 11, activar WSL 2 y verificar que los contenedores funcionan correctamente."
date: "2026-09-03"
author: "Whoami"
category: "Herramientas"
tags: ["Docker", "Windows", "WSL", "contenedores"]
featured: false
image: "/images/docker-windows.svg"
---

Docker Desktop te permite ejecutar aplicaciones en contenedores sin complicarte con máquinas virtuales tradicionales. En Windows, la instalación correcta depende de WSL 2 y de la virtualización activada en el equipo.

## Índice

- [Requisitos previos](#requisitos-previos)
- [Activa WSL 2](#activa-wsl-2)
- [Instala Docker Desktop](#instala-docker-desktop)
- [Verifica la instalación](#verifica-la-instalacion)
- [Problemas habituales](#problemas-habituales)

## Requisitos previos

Antes de instalar:

- Windows 10 64-bit (versión reciente) o Windows 11
- Virtualización habilitada en la BIOS/UEFI
- Al menos 8 GB de RAM recomendados
- Espacio libre suficiente en disco

Puedes comprobar si la virtualización está activa en el Administrador de tareas, pestaña **Rendimiento → CPU**.

## Activa WSL 2

Abre PowerShell como administrador y ejecuta:

```powershell
wsl --install
```

Reinicia el equipo si Windows lo solicita. Después verifica:

```powershell
wsl --status
```

Idealmente deberías ver WSL 2 como versión predeterminada.

Si ya tenías WSL 1, puedes actualizar:

```powershell
wsl --set-default-version 2
```

## Instala Docker Desktop

1. Descarga Docker Desktop desde el sitio oficial de Docker.
2. Ejecuta el instalador.
3. Asegúrate de marcar el soporte para **WSL 2**.
4. Finaliza la instalación y reinicia si es necesario.
5. Abre Docker Desktop y espera a que el motor arranque.

La primera vez puede tardar unos minutos mientras prepara el entorno.

## Verifica la instalación

En una terminal nueva:

```bash
docker --version
docker compose version
```

Luego ejecuta un contenedor de prueba:

```bash
docker run hello-world
```

Si ves un mensaje de confirmación, Docker está funcionando.

También puedes listar contenedores:

```bash
docker ps -a
```

## Problemas habituales

### Docker Engine no arranca

Revisa que WSL 2 esté instalado y que la virtualización esté activa. Reinicia Docker Desktop después de actualizar WSL.

### Error relacionado con Hyper-V o virtualización

En portátiles de empresa, a veces la virtualización está deshabilitada por política. Necesitarás acceso a BIOS o soporte de IT.

### Poco espacio en disco

Las imágenes de Docker ocupan bastante. Limpia de vez en cuando:

```bash
docker system prune
```

Ese comando elimina recursos no usados. Revísalo antes de ejecutarlo en entornos con datos importantes.

Con Docker Desktop listo ya puedes levantar bases de datos locales, probar APIs y reproducir entornos de desarrollo de forma consistente.
