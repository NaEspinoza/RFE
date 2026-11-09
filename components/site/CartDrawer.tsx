import type { Producto } from '@/sanity/lib/types'
import { money } from '@/lib/format'

export function CartDrawer({
  open,
  items,
  total,
  onClose,
  onRemove,
  onCheckout,
}: {
  open: boolean
  items: Producto[]
  total: number
  onClose: () => void
  onRemove: (index: number) => void
  onCheckout: () => void
}) {
  if (!open) return null

  return (
    <div className="cart-overlay" onClick={onClose}>
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-head">
          <div>
            <p className="eyebrow">Tu selección</p>
            <h2>Mi carrito</h2>
          </div>
          <button onClick={onClose} aria-label="Cerrar carrito">
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <div className="empty-cart">
            <span>✦</span>
            <p>
              Tu carrito está esperando
              <br />
              algo lindo.
            </p>
            <a href="#catalogo" onClick={onClose}>
              Explorar catálogo →
            </a>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item, index) => (
                <div className="cart-item" key={`${item._id}-${index}`}>
                  <img src={item.imagenUrl} alt="" />
                  <div>
                    <h3>{item.nombre}</h3>
                    <p>{money(item.precio)}</p>
                  </div>
                  <button onClick={() => onRemove(index)} aria-label={`Quitar ${item.nombre}`}>
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div>
                <span>Subtotal</span>
                <strong>{money(total)}</strong>
              </div>
              <p>El envío y la disponibilidad se confirman por WhatsApp.</p>
              <button className="button button-dark full" onClick={onCheckout}>
                Consultar por WhatsApp ↗
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
