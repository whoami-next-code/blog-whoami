---
title: "Cómo liberar espacio en Windows 11"
slug: "como-liberar-espacio-windows-11"
description: "Guía práctica para liberar espacio en disco en Windows 11 con Storage Sense, limpieza de temporales y otras herramientas nativas."
date: "2026-09-06"
author: "Whoami"
category: "Windows"
tags: ["Windows 11", "PC", "limpieza"]
featured: true
image: "/images/windows-storage.svg"
---

Cuando el disco se llena, Windows 11 se vuelve más lento, las actualizaciones fallan y las apps empiezan a comportarse de forma extraña. La buena noticia: puedes recuperar varios gigabytes en menos de 30 minutos sin instalar software de terceros.

## Índice

- [Revisa cuánto espacio usas](#revisa-cuanto-espacio-usas)
- [Activa Storage Sense](#activa-storage-sense)
- [Limpia archivos temporales](#limpia-archivos-temporales)
- [Desinstala programas que no usas](#desinstala-programas-que-no-usas)
- [Vacía la Papelera y descargas](#vacia-la-papelera-y-descargas)
- [Consejos para mantener el disco limpio](#consejos-para-mantener-el-disco-limpio)

## Revisa cuánto espacio usas

Antes de borrar nada, abre **Configuración → Sistema → Almacenamiento**. Windows te muestra un desglose por categoría: aplicaciones, documentos, temporales y más.

Esto te ayuda a decidir dónde conviene actuar primero. Si ves muchos archivos temporales o una app pesada que ya no usas, empieza por ahí.

## Activa Storage Sense

Storage Sense limpia automáticamente archivos temporales y contenido de la Papelera.

1. Ve a **Configuración → Sistema → Almacenamiento**.
2. Activa **Storage Sense**.
3. Entra en **Configuración de Storage Sense**.
4. Define con qué frecuencia debe ejecutarse y qué debe eliminar.

Una configuración razonable es ejecutarlo semanalmente y vaciar la Papelera cada 30 días.

## Limpia archivos temporales

Además de Storage Sense, puedes usar la herramienta clásica de limpieza:

1. Pulsa `Win + R`, escribe `cleanmgr` y pulsa Enter.
2. Selecciona el disco del sistema (normalmente `C:`).
3. Marca **Archivos temporales**, **Miniaturas** y **Papelera de reciclaje**.
4. Confirma la limpieza.

Si quieres ir un paso más allá, también puedes limpiar archivos de actualización antiguos desde la misma herramienta con la opción de limpieza de archivos del sistema.

## Desinstala programas que no usas

Muchas instalaciones antiguas ocupan varios gigabytes sin que te des cuenta.

1. Abre **Configuración → Aplicaciones → Aplicaciones instaladas**.
2. Ordena por tamaño.
3. Desinstala lo que no uses: launchers viejos, suites ofimáticas duplicadas o SDKs abandonados.

Ten cuidado de no eliminar drivers o herramientas del fabricante del equipo.

## Vacía la Papelera y descargas

La carpeta **Descargas** suele acumular instaladores `.exe`, `.msi` e imágenes ISO. Revísala manualmente antes de borrar todo.

Después:

1. Abre la Papelera de reciclaje.
2. Elige **Vaciar Papelera de reciclaje**.

## Consejos para mantener el disco limpio

- Mueve fotos y vídeos a un disco externo o a la nube.
- Evita dejar ISOs de Windows o Linux en el escritorio.
- Revisa OneDrive: a veces sincroniza carpetas que no necesitas en local.
- Si usas Docker Desktop, limpia imágenes y contenedores no usados de forma periódica.

Con estos pasos suele recuperarse una cantidad notable de espacio sin formatear ni comprar hardware nuevo. Si después de limpiar sigues sin espacio, evalúa ampliar el almacenamiento o mover proyectos pesados a otro disco.
