import type { SiteSettings } from '@/sanity/lib/types'

export function Navbar({
  siteSettings,
  cartCount,
  onOpenCart,
}: {
  siteSettings: SiteSettings
  cartCount: number
  onOpenCart: () => void
}) {
  return (
    <header className="site-header">
      <a className="logo" href="#inicio" aria-label={`${siteSettings.nombreMarca} inicio`}>
        {siteSettings.logoUrl && (
          <img src={siteSettings.logoUrl} alt={siteSettings.nombreMarca} />
        )}
      </a>
      <nav aria-label="Navegación principal">
        <a href="#catalogo">Catálogo</a>
        <a href="#mayorista">Mayorista</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <button
        className="cart-button"
        onClick={onOpenCart}
        aria-label={`Abrir carrito, ${cartCount} productos`}
      >
        <span className="cart-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H6" />
            <circle cx="10" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>
        </span>
        <b>{cartCount}</b>
      </button>
    </header>
  )
}
