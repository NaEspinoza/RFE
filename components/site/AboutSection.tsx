import type { SiteSettings } from '@/sanity/lib/types'

// Copy y sello de "About" son de ejemplo — se ajustan en código por cliente,
// solo el nombre de marca sale de siteSettings.
export function AboutSection({ siteSettings }: { siteSettings: SiteSettings }) {
  return (
    <section className="about" id="nosotros">
      <div className="about-card">
        <p className="eyebrow">Somos {siteSettings.nombreMarca}</p>
        <h2>
          Hecho con cuidado,
          <br />
          <em>pensado para vos.</em>
        </h2>
        <p>
          Elegimos cada producto con atención, pensando en calidad y en una buena
          experiencia de compra de punta a punta.
        </p>
      </div>
      <div className="about-stamp">
        ✦<br />
        <strong>✦</strong>
        <br />
        DESDE 2024
      </div>
    </section>
  )
}
