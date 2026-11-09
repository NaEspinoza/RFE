import { defineType } from 'sanity'

// Categorías de ejemplo (rubro cosmética/perfumería, heredadas del proyecto original).
// Editar la lista de `categoria.options.list` de acuerdo al rubro de cada cliente nuevo
// — y su reflejo en components/site/FilterBar.tsx y sanity/lib/types.ts (Producto.categoria).
export const producto = defineType({
  name: 'producto',
  title: 'Productos',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre del Producto',
      type: 'string',
    },
    {
      name: 'imagen',
      title: 'Imagen del Producto',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'precio',
      title: 'Precio ($)',
      type: 'number',
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    },
    
    {
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Perfumes', value: 'perfumeria' },
          { title: 'Maquillaje', value: 'maquillaje' },
          { title: 'Skincare', value: 'skincare' },
        ],
        layout: 'dropdown', // Esto fuerza a que se vea como un menú desplegable
      },
    },
  ],
})
