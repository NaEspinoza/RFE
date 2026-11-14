import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Rocío Freites · Contenido')
    .items([
      S.listItem()
        .title('Configuración del sitio')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('servicio').title('Catálogo de servicios'),
    ])
