import { client } from '@/sanity/lib/client'
import { projectId, dataset } from '@/sanity/env'
import { DEFAULT_SITE_SETTINGS, type Servicio, type SiteSettings } from '@/sanity/lib/types'
import { fallbackServicios } from '@/content/fallback-servicios'
import { Header } from '@/components/site/Header'
import { Hero } from '@/components/site/Hero'
import { ServiceOverview } from '@/components/site/ServiceOverview'
import { Catalog } from '@/components/site/Catalog'
import { About } from '@/components/site/About'
import { Contact } from '@/components/site/Contact'
import { Footer } from '@/components/site/Footer'
import { FloatingWhatsApp } from '@/components/site/FloatingWhatsApp'

const SETTINGS_QUERY = `*[_id == "siteSettings"][0]{
  nombreMarca,
  subtituloMarca,
  "logoUrl": logo.asset->url,
  whatsapp,
  direccion,
  instagramUrl,
  heroTitulo,
  heroSubtitulo,
  sobreTexto,
  footerTexto
}`

const SERVICIOS_QUERY = `*[_type == "servicio" && activo != false] | order(orden asc, _createdAt asc) {
  _id,
  nombre,
  categoria,
  descripcion,
  precio,
  precioTexto,
  destacado,
  "imagenUrl": imagen.asset->url
}`

async function getLandingData(): Promise<{ settings: SiteSettings; servicios: Servicio[] }> {
  let settings: SiteSettings = DEFAULT_SITE_SETTINGS
  let servicios: Servicio[] = fallbackServicios

  // En desarrollo inicial se muestra contenido local hasta configurar Sanity.
  // Con projectId/dataset válidos, el contenido se obtiene durante el build estático.
  if (!projectId || !dataset) return { settings, servicios }

  try {
    const [settingsData, serviciosData] = await Promise.all([
      client.fetch<Partial<SiteSettings> | null>(SETTINGS_QUERY),
      client.fetch<Servicio[]>(SERVICIOS_QUERY),
    ])

    if (settingsData) settings = { ...DEFAULT_SITE_SETTINGS, ...settingsData }
    if (serviciosData?.length) servicios = serviciosData
  } catch (error) {
    console.warn('No se pudo recuperar el contenido de Sanity. Se utiliza el catálogo local.', error)
  }

  return { settings, servicios }
}

export default async function HomePage() {
  const { settings, servicios } = await getLandingData()

  return (
    <main>
      <div className="topline">
        <span>BEAUTY · WELLNESS · SELF CARE</span>
        <span>Un momento para vos, todos los días.</span>
      </div>
      <Header settings={settings} />
      <Hero settings={settings} />
      <ServiceOverview servicios={servicios} />
      <Catalog servicios={servicios} settings={settings} />
      <About settings={settings} />
      <Contact settings={settings} />
      <Footer settings={settings} />
      <FloatingWhatsApp whatsapp={settings.whatsapp} />
    </main>
  )
}
