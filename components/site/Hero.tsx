import type { SiteSettings } from '@/sanity/lib/types'

export function Hero({ settings }: { settings: SiteSettings }) {
  const whatsappUrl = `https://wa.me/${settings.whatsapp}?text=${encodeURIComponent('Hola, quisiera consultar por los servicios.')}`

  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> BELLEZA · BIENESTAR · CUIDADO PERSONAL</p>
        <h1>{settings.heroTitulo}</h1>
        <p className="hero-description">{settings.heroSubtitulo}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#servicios">Descubrir servicios <span aria-hidden="true">↓</span></a>
          <a className="button button-outline" href={whatsappUrl} target="_blank" rel="noreferrer">Hablemos por WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-location">
          <span className="location-dot" /> Luzuriaga · Maipú · Mendoza
        </div>
      </div>

      <div className="hero-visual" aria-label="Servicios de belleza y bienestar">
        <div className="hero-halo" />
        <div className="hero-photo hero-photo-main">
          <img src="/images/faciales.webp" alt="Tratamientos faciales y cuidado de la piel" />
          <span className="photo-caption">Tu piel también merece amor</span>
        </div>
        <div className="hero-photo hero-photo-small">
          <img src="/images/manicuria.webp" alt="Manicuría y uñas cuidadas" />
        </div>
        <div className="hero-stamp">
          <span>UN MOMENTO</span>
          <strong>para vos</strong>
          <span>♡</span>
        </div>
        <span className="hero-sparkle sparkle-one">✳</span>
        <span className="hero-sparkle sparkle-two">✧</span>
      </div>
      <a className="scroll-cue" href="#servicios"><span /> Deslizá para descubrir</a>
    </section>
  )
}
