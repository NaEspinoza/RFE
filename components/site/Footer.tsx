import { Instagram, MessageCircle, ArrowUpRight } from 'lucide-react'
import type { SiteSettings } from '@/sanity/lib/types'

export function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="site-footer">
      <div className="footer-main section-shell">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">RF</span>
          <span className="brand-copy"><span className="brand-name">{settings.nombreMarca}</span><span className="brand-subtitle">{settings.subtituloMarca || 'BELLEZA Y MÁS'}</span></span>
        </a>
        <p className="footer-message">{settings.footerTexto}</p>
        <div className="footer-socials">
          <a href={settings.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
          <a href={`https://wa.me/${settings.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
        </div>
      </div>
      <div className="footer-bottom section-shell">
        <span>© {new Date().getFullYear()} {settings.nombreMarca}. Todos los derechos reservados.</span>
        <a href="#inicio">Volver arriba <ArrowUpRight size={14} /></a>
        <span className="footer-credit">Hecho con cuidado ♡</span>
      </div>
    </footer>
  )
}
