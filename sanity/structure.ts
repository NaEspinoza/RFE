import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
// "Configuración del sitio" es un documento singleton: siempre el mismo _id fijo,
// sin acción de duplicar/borrar (ver sanity.config.ts), para que solo exista una instancia.
const SITE_SETTINGS_ID = 'siteSettings'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Configuración del sitio')
        .child(
          S.document().schemaType('siteSettings').documentId(SITE_SETTINGS_ID)
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'siteSettings'
      ),
    ])
