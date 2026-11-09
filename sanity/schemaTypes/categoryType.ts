// NOTA: no está registrado en ./index.ts todavía. `producto.categoria` hoy es un
// enum de string simple (ver producto.ts) porque alcanza para 3-5 categorías fijas
// por cliente. Si algún cliente necesita categorías dinámicas/anidadas, este es el
// punto de partida: registrar este tipo en index.ts, cambiar `producto.categoria` a
// `type: 'reference', to: [{type: 'category'}]`, y migrar los documentos existentes.
import {TagIcon} from '@sanity/icons/Tag'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
