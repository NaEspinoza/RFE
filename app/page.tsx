'use client'

import { useEffect, useMemo, useState } from 'react'
import { client } from '@/sanity/lib/client'
import {
  DEFAULT_SITE_SETTINGS,
  SITE_SETTINGS_QUERY,
  type Producto,
  type SiteSettings,
} from '@/sanity/lib/types'
import { money } from '@/lib/format'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

import { AnnouncementBar } from '@/components/site/AnnouncementBar'
import { Navbar } from '@/components/site/Navbar'
import { Hero } from '@/components/site/Hero'
import { Benefits } from '@/components/site/Benefits'
import { FilterBar } from '@/components/site/FilterBar'
import { ProductGrid } from '@/components/site/ProductGrid'
import { WholesaleSection } from '@/components/site/WholesaleSection'
import { AboutSection } from '@/components/site/AboutSection'
import { Footer } from '@/components/site/Footer'
import { CartDrawer } from '@/components/site/CartDrawer'

const PRODUCTOS_QUERY = `
  *[_type == "producto"] {
    _id,
    nombre,
    categoria,
    precio,
    descripcion,
    "imagenUrl": imagen.asset->url
  }
`

export default function Page() {
  const [category, setCategory] = useState('Todos')
  const [cart, setCart] = useState<Producto[]>([])
  const [openCart, setOpenCart] = useState(false)
  const [products, setProducts] = useState<Producto[]>([])
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(DEFAULT_SITE_SETTINGS)

  useEffect(() => {
    async function fetchData() {
      try {
        const [productsData, settingsData] = await Promise.all([
          client.fetch(PRODUCTOS_QUERY),
          client.fetch(SITE_SETTINGS_QUERY),
        ])

        setProducts(productsData)
        if (settingsData) {
          setSiteSettings({ ...DEFAULT_SITE_SETTINGS, ...settingsData })
        }
      } catch (error) {
        console.error('Error al traer datos de Sanity:', error)
      }
    }

    fetchData()
  }, [])

  const filtered =
    category === 'Todos'
      ? products
      : products.filter((p) => {
          if (category === 'Perfumes' && p.categoria === 'perfumeria') return true
          if (category === 'Maquillaje' && p.categoria === 'maquillaje') return true
          if (category === 'Skincare' && p.categoria === 'skincare') return true
          return false
        })

  const total = useMemo(() => cart.reduce((sum, item) => sum + item.precio, 0), [cart])

  function addProduct(product: Producto) {
    setCart((current) => [...current, product])
    setOpenCart(true)
  }

  function removeFromCart(index: number) {
    setCart((current) => current.filter((_, i) => i !== index))
  }

  function checkout() {
    const message = `Hola ${siteSettings.nombreMarca}, quiero consultar por:\n${cart
      .map((p) => `• ${p.nombre} — ${money(p.precio)}`)
      .join('\n')}\n\nTotal estimado: ${money(total)}`

    window.open(buildWhatsAppUrl(siteSettings.whatsapp, message), '_blank', 'noopener,noreferrer')
  }

  return (
    <main>
      <AnnouncementBar text="Envíos a todo el país · Retiro gratis en el local" />

      <Navbar
        siteSettings={siteSettings}
        cartCount={cart.length}
        onOpenCart={() => setOpenCart(true)}
      />

      <Hero siteSettings={siteSettings} />
      <Benefits />

      <section className="catalog-section" id="catalogo">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Encontrá tu favorito</p>
            <h2>
              El catálogo <em>{siteSettings.nombreMarca}</em>
            </h2>
          </div>
          <p className="section-note">
            Productos seleccionados para elevar tu rutina, con novedades todas las semanas.
          </p>
        </div>

        <FilterBar active={category} onChange={setCategory} />
        <ProductGrid products={filtered} onAdd={addProduct} />
      </section>

      <WholesaleSection siteSettings={siteSettings} />
      <AboutSection siteSettings={siteSettings} />
      <Footer siteSettings={siteSettings} />

      <CartDrawer
        open={openCart}
        items={cart}
        total={total}
        onClose={() => setOpenCart(false)}
        onRemove={removeFromCart}
        onCheckout={checkout}
      />
    </main>
  )
}
