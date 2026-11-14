'use client'

import { useState } from 'react'
import type { SiteSettings } from '@/sanity/lib/types'

export function Header({ settings }: { settings: SiteSettings }) {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#catalogo', label: 'Catálogo' },
    { href: '#nosotros', label: 'El espacio' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label={`${settings.nombreMarca}, inicio`} onClick={() => setOpen(false)}>
        {settings.logoUrl ? (
          <img className="brand-image" src={settings.logoUrl} alt={settings.nombreMarca} />
        ) : (
          <span className="brand-mark" aria-hidden="true">RF</span>
        )}
        <span className="brand-copy">
          <span className="brand-name">{settings.nombreMarca}</span>
          <span className="brand-subtitle">{settings.subtituloMarca || 'BELLEZA Y MÁS'}</span>
        </span>
      </a>

      <button
        className={`menu-toggle ${open ? 'is-open' : ''}`}
        type="button"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span />
      </button>

      <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Navegación principal">
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>
        ))}
        <a
          className="nav-cta"
          href={`https://wa.me/${settings.whatsapp}?text=${encodeURIComponent('Hola, quisiera hacer una consulta.')}`}
          target="_blank"
          rel="noreferrer"
        >
          Contactar <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}
