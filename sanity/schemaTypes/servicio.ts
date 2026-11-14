import { defineField, defineType } from 'sanity'
import { TagIcon } from '@sanity/icons'

export const servicio = defineType({
  name: 'servicio',
  title: 'Servicios',
  type: 'document',
  icon: TagIcon,
  orderings: [{ title: 'Orden de visualización', name: 'ordenAsc', by: [{ field: 'orden', direction: 'asc' }] }],
  fields: [
    defineField({ name: 'nombre', title: 'Nombre del servicio', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'categoria', title: 'Categoría', type: 'string', validation: (Rule) => Rule.required(),
      options: { list: [
        { title: 'Manicuría', value: 'manicuria' },
        { title: 'Tratamientos faciales', value: 'tratamientos-faciales' },
        { title: 'Masajes', value: 'masajes' },
        { title: 'Depilación definitiva', value: 'depilacion-definitiva' },
        { title: 'Podología', value: 'podologia' },
      ], layout: 'dropdown' },
    }),
    defineField({ name: 'descripcion', title: 'Descripción', type: 'text', rows: 3 }),
    defineField({ name: 'precio', title: 'Precio (ARS)', type: 'number', validation: (Rule) => Rule.min(0) }),
    defineField({ name: 'precioTexto', title: 'Aclaración del precio', type: 'string', description: 'Ej.: 4 sesiones, adicional o Consultar.' }),
    defineField({ name: 'imagen', title: 'Imagen', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'destacado', title: 'Destacar en el catálogo', type: 'boolean', initialValue: false }),
    defineField({ name: 'orden', title: 'Orden de visualización', type: 'number', initialValue: 100 }),
    defineField({ name: 'activo', title: 'Mostrar en la web', type: 'boolean', initialValue: true }),
  ],
  preview: { select: { title: 'nombre', subtitle: 'categoria', media: 'imagen' } },
})
