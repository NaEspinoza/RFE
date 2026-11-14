import type { Servicio, CategoriaServicio } from '@/sanity/lib/types'

const categories: {
  id: CategoriaServicio
  title: string
  subtitle: string
  image: string
  number: string
}[] = [
  { id: 'manicuria', title: 'Manicuría', subtitle: 'Tus manos también son parte de tu belleza.', image: '/images/manicuria.webp', number: '01' },
  { id: 'tratamientos-faciales', title: 'Tratamientos faciales', subtitle: 'Un mimo para tu piel, un momento para vos.', image: '/images/faciales.webp', number: '02' },
  { id: 'masajes', title: 'Masajes', subtitle: 'Bienestar, relajación y cuidado corporal.', image: '/images/masajes.webp', number: '03' },
  { id: 'depilacion-definitiva', title: 'Depilación definitiva', subtitle: 'Tecnología láser para mujeres y hombres.', image: '/images/depilacion.webp', number: '04' },
  { id: 'podologia', title: 'Podología', subtitle: 'Tus pies también merecen cuidado.', image: '/images/podologia.webp', number: '05' },
]

export function ServiceOverview({ servicios }: { servicios: Servicio[] }) {
  return (
    <section className="services-overview section-shell" id="servicios">
      <div className="section-intro">
        <div>
          <p className="eyebrow">Un cuidado para cada momento</p>
          <h2>Pequeños momentos,<br /><em>grandes cuidados.</em></h2>
        </div>
        <p className="intro-note">Explorá nuestras propuestas de belleza y bienestar. Elegí lo que necesitás y consultanos para conocer más.</p>
      </div>

      <div className="category-grid">
        {categories.map((category) => {
          const categoryServices = servicios.filter((service) => service.categoria === category.id)
          const count = categoryServices.length
          const image = categoryServices.find((service) => service.destacado && service.imagenUrl)?.imagenUrl
            || categoryServices.find((service) => service.imagenUrl)?.imagenUrl
            || category.image
          return (
            <a className={`category-card category-${category.id}`} href={`#${category.id}`} key={category.id}>
              <div className="category-image">
                <img src={image} alt={category.title} loading="lazy" />
                <span className="category-number">{category.number}</span>
              </div>
              <div className="category-copy">
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.subtitle}</p>
                </div>
                <span className="category-arrow" aria-label="Ver servicios">↗</span>
              </div>
              <span className="category-count">{count} {count === 1 ? 'propuesta' : 'propuestas'}</span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
