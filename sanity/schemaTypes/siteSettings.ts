import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configuración del sitio',
  type: 'document',
  icon: CogIcon,
  // Documento singleton: se crea/edita una sola instancia (ver sanity/structure.ts
  // y la restricción de acciones en sanity.config.ts).
  fields: [
    defineField({
      name: 'nombreMarca',
      title: 'Nombre de marca',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'colorPrimario',
      title: 'Color primario',
      type: 'string',
      description: 'Código hexadecimal, ej: #df0d73',
    }),
    defineField({
      name: 'colorSecundario',
      title: 'Color secundario (opcional)',
      type: 'string',
      description: 'Código hexadecimal, ej: #26131e',
    }),
    defineField({
      name: 'temaFuente',
      title: 'Pack de tipografía',
      type: 'string',
      options: {
        list: [
          { title: 'Elegante (DM Sans + Fraunces)', value: 'elegante' },
          { title: 'Moderno (Inter + Space Grotesk)', value: 'moderno' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'elegante',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
      description: 'Con código de país, sin "+" ni espacios. Ej: 5492610000000',
    }),
    defineField({
      name: 'email',
      title: 'Email de contacto',
      type: 'string',
    }),
    defineField({
      name: 'direccion',
      title: 'Dirección',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram (URL)',
      type: 'url',
    }),
    defineField({
      name: 'tiktokUrl',
      title: 'TikTok (URL)',
      type: 'url',
    }),
    defineField({
      name: 'heroTitulo',
      title: 'Título del Hero',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitulo',
      title: 'Subtítulo del Hero',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'footerTexto',
      title: 'Texto corto del footer',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: { title: 'nombreMarca', media: 'logo' },
    prepare({ title, media }) {
      return { title: title || 'Configuración del sitio', media }
    },
  },
})
