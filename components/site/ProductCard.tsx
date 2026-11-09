import type { Producto } from '@/sanity/lib/types'
import { money } from '@/lib/format'

export function ProductCard({
  product,
  onAdd,
}: {
  product: Producto
  onAdd: (product: Producto) => void
}) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.imagenUrl} alt={product.nombre} />
      </div>
      <div className="product-info">
        <p>{product.categoria}</p>
        <h3>{product.nombre}</h3>
        <div className="product-bottom">
          <strong>{money(product.precio)}</strong>
          <button onClick={() => onAdd(product)} aria-label={`Agregar ${product.nombre}`}>
            +
          </button>
        </div>
      </div>
    </article>
  )
}
