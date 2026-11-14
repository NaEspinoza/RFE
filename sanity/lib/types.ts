export type CategoriaServicio =
  | 'manicuria'
  | 'tratamientos-faciales'
  | 'masajes'
  | 'depilacion-definitiva'
  | 'podologia'

export type Servicio = {
  _id: string
  nombre: string
  categoria: CategoriaServicio
  descripcion?: string
  precio?: number
  precioTexto?: string
  imagenUrl?: string
  destacado?: boolean
}

export type SiteSettings = {
  nombreMarca: string
  subtituloMarca?: string
  logoUrl?: string
  whatsapp: string
  direccion: string
  instagramUrl: string
  heroTitulo: string
  heroSubtitulo: string
  sobreTexto: string
  footerTexto: string
}

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  nombreMarca: 'Rocío Freites',
  subtituloMarca: 'BELLEZA Y MÁS',
  whatsapp: '5492614686890',
  direccion: 'Piedrabuena 2783 · Barrio Antártida Argentina · Luzuriaga, Maipú, Mendoza',
  instagramUrl: 'https://www.instagram.com/rocio.freitesestetica/',
  heroTitulo: 'Un espacio para sentirte bien, de pies a cabeza.',
  heroSubtitulo:
    'Belleza, bienestar y cuidado personal en un mismo lugar. Descubrí nuestros tratamientos y encontrá ese momento que es solo para vos.',
  sobreTexto:
    'Creamos un espacio cálido para acompañarte en tus momentos de cuidado personal. Encontrá distintas propuestas de belleza y bienestar, con atención cercana y tratamientos pensados para vos.',
  footerTexto: 'Belleza y bienestar, en un espacio pensado para vos.',
}
