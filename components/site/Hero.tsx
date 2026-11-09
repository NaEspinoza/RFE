import type { SiteSettings } from '@/sanity/lib/types'

// El "eyebrow" y la copy decorativa de hero-product son de ejemplo — se ajustan
// en código por cliente, igual que Benefits.tsx y AboutSection.tsx. El título y
// subtítulo sí salen de siteSettings (heroTitulo/heroSubtitulo).
export function Hero({ siteSettings }: { siteSettings: SiteSettings }) {
  // siteSettings ya viene con DEFAULT_SITE_SETTINGS mergeado (ver app/page.tsx),
  // así que heroTitulo siempre tiene un valor acá.
  const [line1, line2] = (siteSettings.heroTitulo || '').split('\n')

  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow">Bienvenido</p>
        <h1>
          {line1}
          {line2 && (
            <>
              <br />
              <em>{line2}</em>
            </>
          )}
        </h1>
        <p className="hero-text">{siteSettings.heroSubtitulo}</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#catalogo">
            Ver catálogo <span>↘</span>
          </a>
          <a className="text-link" href="#mayorista">
            Soy mayorista →
          </a>
        </div>
      </div>
      <div className="hero-product">
        <div className="sunburst"></div>
        <div className="hero-bottle"></div>
      </div>
    </section>
  )
}
