// Tipos compartidos entre Sanity y el frontend. Reflejan los schemas de
// sanity/schemaTypes/producto.ts y sanity/schemaTypes/siteSettings.ts.

export type Producto = {
  _id: string
  nombre: string
  categoria: 'perfumeria' | 'maquillaje' | 'skincare'
  precio: number
  imagenUrl: string
  descripcion?: string
}

export type SiteSettings = {
  nombreMarca: string
  logoUrl?: string
  colorPrimario?: string
  colorSecundario?: string
  temaFuente?: 'elegante' | 'moderno'
  whatsapp?: string
  email?: string
  direccion?: string
  instagramUrl?: string
  tiktokUrl?: string
  heroTitulo?: string
  heroSubtitulo?: string
  footerTexto?: string
}

// Valores usados cuando el documento `siteSettings` todavía no fue cargado en
// Sanity (por ejemplo, en un clon nuevo de la plantilla recién creado).
export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  nombreMarca: 'Mi Marca',
  colorPrimario: '#df0d73',
  colorSecundario: '#26131e',
  temaFuente: 'elegante',
  whatsapp: '',
  email: '',
  direccion: '',
  heroTitulo: 'Bienvenido\na tu tienda.',
  heroSubtitulo:
    'Cargá el documento "Configuración del sitio" en /studio para reemplazar este texto de ejemplo.',
  footerTexto: 'Contanos qué necesitás y te ayudamos por WhatsApp.',
}

export const SITE_SETTINGS_QUERY = `*[_id == "siteSettings"][0]{
  nombreMarca,
  "logoUrl": logo.asset->url,
  colorPrimario,
  colorSecundario,
  temaFuente,
  whatsapp,
  email,
  direccion,
  instagramUrl,
  tiktokUrl,
  heroTitulo,
  heroSubtitulo,
  footerTexto,
}`
