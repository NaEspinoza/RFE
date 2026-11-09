import type { SiteSettings } from '@/sanity/lib/types'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

export function WholesaleSection({ siteSettings }: { siteSettings: SiteSettings }) {
  const url = buildWhatsAppUrl(
    siteSettings.whatsapp,
    `Hola ${siteSettings.nombreMarca}, quiero conocer la lista mayorista`
  )

  return (
    <section className="wholesale" id="mayorista">
      <div>
        <p className="eyebrow">Para tu negocio</p>
        <h2>
          Crezcamos
          <br />
          <em>juntas.</em>
        </h2>
      </div>
      <div className="wholesale-copy">
        <p>
          ¿Tenés un local, emprendimiento o vendés online? Accedé a precios mayoristas,
          surtido flexible y asesoramiento personalizado.
        </p>
        <a className="button button-light" href={url} target="_blank" rel="noreferrer">
          Quiero la lista mayorista ↗
        </a>
      </div>
    </section>
  )
}
