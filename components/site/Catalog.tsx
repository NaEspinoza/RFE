import type { CategoriaServicio, Servicio, SiteSettings } from '@/sanity/lib/types'

const categoryInfo: Record<CategoriaServicio, { title: string; intro: string; image: string; tag: string }> = {
  manicuria: { title: 'Manicuría', intro: 'Tus manos también son parte de tu belleza. Elegí tu estilo y sumale ese detalle que te representa.', image: '/images/manicuria.webp', tag: 'Manos cuidadas, siempre lindas' },
  'tratamientos-faciales': { title: 'Tratamientos faciales', intro: 'Propuestas para acompañar el cuidado de tu piel y regalarte un momento de bienestar.', image: '/images/faciales.webp', tag: 'Tu piel merece amor' },
  masajes: { title: 'Masajes', intro: 'Distintas experiencias para relajar el cuerpo, liberar tensiones y hacer una pausa.', image: '/images/masajes.webp', tag: 'Tu bienestar, nuestro objetivo' },
  'depilacion-definitiva': { title: 'Depilación definitiva', intro: 'Tecnología Alma Soprano Titanium. Consultá por zonas, evaluación y disponibilidad.', image: '/images/depilacion.webp', tag: 'Para mujeres y hombres' },
  podologia: { title: 'Podología', intro: 'Cuidado podológico para distintas necesidades y etapas de la vida.', image: '/images/podologia.webp', tag: 'Tus pies también merecen cuidado' },
}

const categoryOrder: CategoriaServicio[] = [
  'manicuria',
  'tratamientos-faciales',
  'masajes',
  'depilacion-definitiva',
  'podologia',
]

function priceLabel(service: Servicio) {
  if (typeof service.precio === 'number') {
    return `$${service.precio.toLocaleString('es-AR')}`
  }
  return service.precioTexto || 'Consultar'
}

function whatsappHref(whatsapp: string, service: string) {
  const text = `Hola, quisiera consultar por ${service}. ¿Me pueden brindar más información?`
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`
}

export function Catalog({ servicios, settings }: { servicios: Servicio[]; settings: SiteSettings }) {
  return (
    <section className="catalog-section section-shell" id="catalogo">
      <div className="catalog-heading">
        <p className="eyebrow">Conocé nuestras propuestas</p>
        <h2>El catálogo de <em>servicios</em></h2>
        <p>Encontrá el tratamiento ideal para vos. Para confirmar disponibilidad, duración y valor actualizado, escribinos.</p>
      </div>

      <div className="catalog-list">
        {categoryOrder.map((category, index) => {
          const info = categoryInfo[category]
          const items = servicios.filter((service) => service.categoria === category)
          if (!items.length) return null
          const categoryImage = items.find((service) => service.destacado && service.imagenUrl)?.imagenUrl
            || items.find((service) => service.imagenUrl)?.imagenUrl
            || info.image
          return (
            <article className="catalog-category" id={category} key={category}>
              <div className="catalog-category-visual">
                <img src={categoryImage} alt={info.title} loading="lazy" />
                <span className="catalog-category-index">0{index + 1}</span>
                <span className="catalog-category-tag">{info.tag}</span>
              </div>
              <div className="catalog-category-content">
                <p className="eyebrow">{info.tag}</p>
                <h3>{info.title}</h3>
                <p className="catalog-category-intro">{info.intro}</p>
                <div className="service-list">
                  {items.map((service) => (
                    <div className="service-row" key={service._id}>
                      <div className="service-details">
                        <div className="service-name-line">
                          <h4>{service.nombre}</h4>
                          {service.destacado && <span className="featured-label">Destacado</span>}
                        </div>
                        {service.descripcion && <p>{service.descripcion}</p>}
                        {service.precioTexto && service.precio !== undefined && <span className="service-note">{service.precioTexto}</span>}
                      </div>
                      <div className="service-price">{priceLabel(service)}</div>
                    </div>
                  ))}
                </div>
                <a className="category-contact" href={whatsappHref(settings.whatsapp, info.title)} target="_blank" rel="noreferrer">
                  Consultar por {info.title.toLowerCase()} <span aria-hidden="true">↗</span>
                </a>
                {category === 'podologia' && (
                  <p className="professional-note">Servicio anunciado a cargo de Cristina Suans, podóloga matriculada.</p>
                )}
              </div>
            </article>
          )
        })}
      </div>
      <p className="price-disclaimer">Los precios publicados son orientativos y fueron transcritos del material compartido de Instagram. Consultá su vigencia y condiciones antes de reservar.</p>
    </section>
  )
}
