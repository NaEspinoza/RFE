import type { Producto } from '@/sanity/lib/types'
import { ProductCard } from './ProductCard'

export function ProductGrid({
  products,
  onAdd,
}: {
  products: Producto[]
  onAdd: (product: Producto) => void
}) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} onAdd={onAdd} />
      ))}
    </div>
  )
}
