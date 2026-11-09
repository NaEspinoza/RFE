import type { SiteSettings } from '@/sanity/lib/types'
import ig from '@/images/instagra-icon.png'
import tiktok from '@/images/icon-tiktok.png'
import whatsapp from '@/images/whatsapp.png'
import mail from '@/images/email.png'

export function Footer({ siteSettings }: { siteSettings: SiteSettings }) {
  const year = new Date().getFullYear()

  return (
    <footer id="contacto">
      <div className="footer-newsletter">
        <p className="footer-title">
          ¡Recibí nuestras ofertas
          <br />y novedades por mail!
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <label className="sr-only" htmlFor="newsletter">
            Tu email
          </label>
          <input id="newsletter" type="email" placeholder="tu@email.com" />
          <button aria-label="Suscribirme">→</button>
        </form>
        <div className="footer-brand">
          <a className="logo" href="#inicio">
            {siteSettings.logoUrl && (
              <img src={siteSettings.logoUrl} alt={siteSettings.nombreMarca} />
            )}
          </a>
          <p>{siteSettings.footerTexto}</p>
        </div>
      </div>

      <div className="footer-links">
        <p className="footer-label">Acerca de nosotros</p>
        <a href="#nosotros">Nosotros</a>
        <a href="#catalogo">Catálogo</a>
        <a href="#contacto">Locales</a>
        <a href="#mayorista">Hot sale</a>
      </div>

      <div className="footer-contact">
        <p className="footer-label">Contacto</p>
        {siteSettings.whatsapp && (
          <a href={`https://wa.me/${siteSettings.whatsapp}`}>WhatsApp</a>
        )}
        {siteSettings.email && (
          <a href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a>
        )}
        {siteSettings.direccion && <p>{siteSettings.direccion}</p>}
      </div>

      <div className="footer-social">
        {siteSettings.instagramUrl && (
          <a href={siteSettings.instagramUrl} aria-label="Instagram" target="_blank" rel="noreferrer">
            <img src={ig.src} alt="" />
          </a>
        )}
        {siteSettings.tiktokUrl && (
          <a href={siteSettings.tiktokUrl} aria-label="TikTok" target="_blank" rel="noreferrer">
            <img src={tiktok.src} alt="" />
          </a>
        )}
        {siteSettings.whatsapp && (
          <a href={`https://wa.me/${siteSettings.whatsapp}`} aria-label="Whatsapp">
            <img src={whatsapp.src} alt="" />
          </a>
        )}
        {siteSettings.email && (
          <a href={`mailto:${siteSettings.email}`} aria-label="Email">
            <img src={mail.src} alt="" />
          </a>
        )}
      </div>

      <div className="footer-bottom">
        © {year} {siteSettings.nombreMarca} · Todos los derechos reservados.{' '}
        <a href="#contacto">Políticas de Privacidad y Términos de Servicio</a>
      </div>
    </footer>
  )
}
