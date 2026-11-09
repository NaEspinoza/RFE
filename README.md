# ✦ Foundation CMS Template ✦

Plantilla fundacional de e-commerce/landing headless: **Next.js (App Router) + Sanity Studio embebido**, pensada para clonarse una vez por cliente y quedar operativa en minutos cambiando solo **contenido y tema**, no código.

Nace del proyecto real de [Cutie Glow](https://github.com/jeremias1234-bit/cutie-glow) (perfumería), generalizado: lo que ahí era texto/teléfono/color hardcodeado acá sale del documento **"Configuración del sitio"** en Sanity.

---

## 🚀 Cómo usar esta plantilla para un cliente nuevo

1. **Repositorio**: "Use this template" en GitHub (o `git clone` + `rm -rf .git && git init`).
2. **Proyecto de Sanity nuevo**: `npm create sanity@latest` (o desde sanity.io/manage) → anotá el `projectId` de 8 caracteres.
3. **Instalar dependencias**: `pnpm install`.
4. **Variables de entorno**: copiá `.env.example` a `.env.local` y completá `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET`.
5. **Levantar el proyecto**: `pnpm dev` → sitio en `http://localhost:3000`, Studio en `http://localhost:3000/studio`.
6. **Cargar "Configuración del sitio"** desde `/studio` (documento único): nombre de marca, logo, WhatsApp, dirección, email, redes, colores, pack de tipografía y textos del hero/footer.
7. **Ajustar `sanity/schemaTypes/producto.ts`** si el rubro del cliente necesita categorías distintas a las de ejemplo (Perfumes/Maquillaje/Skincare) — y su reflejo en `components/site/FilterBar.tsx`.
8. **Ajustar copy de ejemplo** en `components/site/Benefits.tsx` y `components/site/AboutSection.tsx`, y el `title`/`description` de `app/layout.tsx` — son las únicas secciones de texto que no salen de Sanity, por diseño (ver nota de alcance más abajo).
9. **Cargar productos** desde el Studio.
10. **Deploy** (Vercel u otro proveedor con soporte de Next.js SSR) — configurar ahí las mismas variables de entorno del paso 4.

---

## 🧱 Qué es dato y qué es código

| Cambia por cliente | Vía |
|---|---|
| Marca, logo, contacto, colores, tipografía, copy del hero/footer | Documento `siteSettings` en Sanity (dato, sin tocar código) |
| Catálogo de productos | Documentos `producto` en Sanity (dato) |
| Categorías del rubro, copy de Benefits/About, título SEO | Código — edición puntual esperada, una vez por cliente |
| Estructura de componentes, lógica de carrito/WhatsApp | No cambia — es el molde |

Si notás que para un cliente nuevo estás tocando algo fuera de la columna "código" de la tabla, es señal de que algo quedó mal generalizado en la plantilla.

---

## 🚀 Stack

*   **Frontend:** [Next.js](https://nextjs.org) (App Router) + TypeScript + React 19.
*   **CMS Headless:** [Sanity](https://sanity.io) v5 (Studio embebido bajo `/studio`).
*   **Gestor de paquetes:** [pnpm](https://pnpm.io).
*   **Estilos:** Tailwind CSS v4 + tokens CSS propios (`app/globals.css`) + Radix UI / shadcn.
*   **Ventas:** checkout vía mensaje pre-armado a la API de WhatsApp (`lib/whatsapp.ts`).

## 📐 Estructura del proyecto

*   `app/page.tsx` — orquestador: fetch de `producto[]` + `siteSettings`, estado de carrito/filtro, composición de componentes.
*   `app/layout.tsx` — carga las fuentes, inyecta el color de marca y el pack de tipografía desde `siteSettings`.
*   `app/studio/` — punto de entrada del Sanity Studio embebido.
*   `components/site/` — Navbar, Hero, ProductGrid, ProductCard, Footer, CartDrawer, etc. Reciben `siteSettings`/`producto[]` como props, sin texto hardcodeado.
*   `sanity/schemaTypes/producto.ts` — catálogo (editar categorías por rubro).
*   `sanity/schemaTypes/siteSettings.ts` — documento único de configuración del sitio.
*   `sanity/lib/client.ts` / `sanity/env.ts` — cliente Sanity parametrizado por variables de entorno (sin ningún `projectId` hardcodeado).
*   `lib/theme-packs.ts` — packs de tipografía predefinidos (ver nota técnica abajo).

## 🎨 Nota técnica: theming de color vs. tipografía

Los **colores** (`siteSettings.colorPrimario`/`colorSecundario`) se inyectan en runtime como variables CSS — 100% dinámico, sin tocar código.

La **tipografía** no es 100% libre: `next/font/google` resuelve el nombre de la fuente en build time y no admite un valor arbitrario en runtime sin perder la optimización de self-hosting. Por eso `siteSettings.temaFuente` elige entre 2 packs predefinidos en `lib/theme-packs.ts` ("elegante" / "moderno"). Si un cliente necesita una tercera combinación tipográfica, se agrega como una nueva opción de pack en código — sigue siendo "una vez por variedad de fuente", no "una vez por cliente".

## 🔭 Fuera de alcance de esta plantilla (a propósito)

*   Deploy/CI (Cloudflare Pages, Vercel, webhooks de Sanity) — cada cliente define su propia infraestructura.
*   Categorías de producto como documentos referenciados (en vez de enum) — ver el comentario en `sanity/schemaTypes/categoryType.ts` si algún cliente necesita categorías dinámicas/anidadas.
*   Multi-tenant en runtime / monorepo — el patrón acá es "un deploy por cliente, mismo molde de código", no un SaaS con una sola instancia sirviendo a todos.
