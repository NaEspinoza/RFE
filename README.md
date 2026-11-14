# Rocío Freites · Belleza y más

Landing catálogo para el salón de estética Rocío Freites. Frontend Next.js con exportación estática, desplegable en Cloudflare Pages. El CMS es headless: Sanity Content Lake + Sanity Studio independiente.

## Stack

- Next.js 16 / React 19 / TypeScript
- Tailwind CSS 4 + CSS de marca
- Sanity v5 (Content Lake y Studio)
- Cloudflare Pages (salida estática `out/`)

## 1. Requisitos

- Node.js 22.12 o superior (el proyecto fija 22.16.0 en `.nvmrc`)
- pnpm 10
- Cuenta de Sanity y un proyecto creado
- Cuenta de Cloudflare

## 2. Instalación local

```bash
pnpm install
cp .env.example .env
```

Completá `.env` con el Project ID real de Sanity y el dataset (normalmente `production`).

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-11-01
NEXT_PUBLIC_SITE_NAME=Rocío Freites · Belleza y más
```

La landing también puede ejecutarse sin configurar Sanity: utiliza un catálogo local de respaldo para la primera vista.

## 3. Ejecutar la web

```bash
pnpm dev
```

Abrir http://localhost:3000.

## 4. Ejecutar Sanity Studio

El Studio no forma parte de las rutas de Next.js ni del build estático. Se ejecuta por separado desde la raíz del proyecto:

```bash
pnpm studio
```

En el primer uso, autenticá la CLI:

```bash
npx sanity@latest login
```

Publicar el CMS en el hosting de Sanity:

```bash
pnpm studio:deploy
```

El comando devuelve una URL similar a `https://rocio-freites-estetica.sanity.studio`.

## 5. Contenido en Sanity

El Studio contiene dos tipos de documento:

- **Configuración del sitio:** marca, WhatsApp, Instagram, dirección y textos principales.
- **Servicios:** nombre, categoría, descripción, precio, imagen, destacado, orden y estado de publicación.

El catálogo local inicial está en `content/fallback-servicios.ts`. Se utiliza cuando Sanity todavía no tiene documentos o no está configurado. El archivo `content/servicios-iniciales.ndjson` permite importar los documentos iniciales al dataset. Una vez cargados y publicados, el frontend utiliza el contenido de Sanity.

### Cargar el catálogo inicial

Con el proyecto configurado y las variables de entorno cargadas, asegurate de que exista el dataset público `production` (si no existe: `npx sanity@latest datasets create production --visibility public`). Después importá los documentos iniciales:

```bash
npx sanity@latest datasets import content/servicios-iniciales.ndjson production
```

Esto crea la configuración singleton y los 38 servicios iniciales. Después podés abrir el Studio y editar los textos, precios, imágenes y visibilidad. Las categorías admitidas son:

- `manicuria`
- `tratamientos-faciales`
- `masajes`
- `depilacion-definitiva`
- `podologia`

Las historias de Instagram originales y sus recortes se incluyen en `public/images/` para poder utilizarlas como referencia o subirlas a Sanity.

## 6. Build estático

```bash
pnpm build
```

Next.js genera el sitio en `out/`.

**Importante:** esta versión obtiene datos de Sanity durante el build. Como Cloudflare Pages sirve archivos estáticos, al publicar cambios en Sanity hay que volver a ejecutar el build y desplegar. Para automatizarlo, configurá un Deploy Hook de Cloudflare Pages y un webhook de Sanity que llame ese hook cuando se publiquen o actualicen documentos.

## 7. Cloudflare Pages

Conectar el repositorio Git en Cloudflare Pages:

| Configuración | Valor |
|---|---|
| Framework preset | Next.js (Static HTML Export) / None |
| Build command | `pnpm build` |
| Build output directory | `out` |
| Node version | `22.16.0` |

Variables de entorno de build:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`

No se necesita token de escritura ni secreto de Sanity en el frontend. El dataset debe permitir lectura pública para que Next.js pueda consultar los documentos publicados durante el build. En Cloudflare Pages, fijá `NODE_VERSION=22.16.0` junto con las tres variables de Sanity.

## 8. Datos comerciales a verificar antes de publicar

Los servicios y valores del catálogo inicial fueron transcritos de las historias destacadas suministradas. Confirmar con el negocio que todos los importes siguen vigentes. La promoción fechada `23/11` no se publicó como promoción activa porque sus condiciones y año no están confirmados.

Dirección extraída del material: Piedrabuena 2783, Barrio Antártida Argentina, Luzuriaga, Maipú, Mendoza.

WhatsApp extraído del material: +54 9 261 468 6890.

Podología: el material identifica a Cristina Suans como podóloga matriculada. Mantener esa atribución únicamente para el servicio de podología.

## Notas técnicas

- `output: 'export'` y `trailingSlash: true` habilitan la exportación estática.
- `images.unoptimized: true` permite usar imágenes locales y de Sanity sin el optimizador server-side de Next.js.
- No hay carrito, checkout, cuentas, turnero ni backend propio: la web funciona como presentación comercial y catálogo.
