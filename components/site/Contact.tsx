import { MapPin, MessageCircle } from 'lucide-react'
import { InstagramIcon } from './InstagramIcon'
import type { SiteSettings } from '@/sanity/lib/types'

export function Contact({ settings }: { settings: SiteSettings }) {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(settings.direccion)}`
  const message = `Hola, llegué desde la web de ${settings.nombreMarca}. Quisiera hacer una consulta.`
  const whatsappUrl = `https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(message)}`

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-inner section-shell">
        <div className="contact-copy">
          <p className="eyebrow">Estamos para ayudarte</p>
          <h2>Tu próximo momento<br /><em>empieza acá.</em></h2>
          <p>Escribinos para consultar por tratamientos, precios actualizados y disponibilidad.</p>
          <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={17} /> Escribir por WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-details">
          <a className="contact-detail" href={mapUrl} target="_blank" rel="noreferrer">
            <span className="contact-icon"><MapPin size={19} /></span>
            <span><small>Encontranos en</small><strong>{settings.direccion}</strong><em>Cómo llegar ↗</em></span>
          </a>
          <a className="contact-detail" href={settings.instagramUrl} target="_blank" rel="noreferrer">
            <span className="contact-icon"><InstagramIcon size={19} /></span>
            <span><small>Seguinos en Instagram</small><strong>@rocio.freitesestetica</strong><em>Ver perfil ↗</em></span>
          </a>
          <div className="contact-hours"><span className="hours-dot" /> Consultá horarios y disponibilidad por WhatsApp.</div>
        </div>
      </div>
    </section>
  )
}
