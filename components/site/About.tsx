import type { SiteSettings } from '@/sanity/lib/types'

export function About({ settings }: { settings: SiteSettings }) {
  return (
    <section className="about-section section-shell" id="nosotros">
      <div className="about-art">
        <img src="/images/masajes.webp" alt="Un momento de relajación y bienestar" loading="lazy" />
        <div className="about-seal"><span>RF</span><small>BELLEZA<br />Y MÁS</small></div>
      </div>
      <div className="about-copy">
        <p className="eyebrow">Bienvenida a nuestro espacio</p>
        <h2>Un ratito para vos.<br /><em>Un cuidado que se siente.</em></h2>
        <p>{settings.sobreTexto}</p>
        <div className="about-signature">Rocío Freites <span>♡</span></div>
      </div>
    </section>
  )
}
