import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configuración del sitio',
  type: 'document',
  fields: [
    defineField({ name: 'nombreMarca', title: 'Nombre de marca', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subtituloMarca', title: 'Bajada de marca', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo (opcional)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'whatsapp', title: 'WhatsApp', type: 'string', description: 'Con código de país, sin + ni espacios. Ej.: 5492614686890.' }),
    defineField({ name: 'direccion', title: 'Dirección', type: 'text', rows: 2 }),
    defineField({ name: 'instagramUrl', title: 'Instagram', type: 'url' }),
    defineField({ name: 'heroTitulo', title: 'Título principal', type: 'string' }),
    defineField({ name: 'heroSubtitulo', title: 'Bajada principal', type: 'text', rows: 3 }),
    defineField({ name: 'sobreTexto', title: 'Texto de presentación', type: 'text', rows: 4 }),
    defineField({ name: 'footerTexto', title: 'Texto del pie de página', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'nombreMarca', media: 'logo' } },
})
