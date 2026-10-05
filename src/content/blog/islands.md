---
title: "Entendiendo Islands Architecture"
description: "Una explicación sencilla de cómo Astro maneja la interactividad."
pubDate: 2026-10-02
category: "Tech"
tags:
  - Astro
  - Islands
  - Performance
author: christian
---

# Islands Architecture

Una página de Astro puede ser principalmente HTML estático.

Las partes que necesitan interactividad pueden convertirse en pequeñas islas.

Por ejemplo:

- Un botón de modo oscuro.
- Un carrito de compras.
- Un buscador.
- Un formulario interactivo.

El resto de la página puede permanecer como HTML estático.