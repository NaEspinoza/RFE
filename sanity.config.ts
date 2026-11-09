import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'
import { dataset, projectId } from './sanity/env'

export default defineConfig({
  name: 'default',
  title: process.env.NEXT_PUBLIC_SITE_NAME || 'Mi Sitio',

  projectId,
  dataset,

  plugins: [
    structureTool({ structure }),
  ],

  schema: schema,

  document: {
    // Evita que el singleton de configuración del sitio se duplique o se borre por error
    actions: (input, context) =>
      context.schemaType === 'siteSettings'
        ? input.filter(
            ({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action)
          )
        : input,
  },
})
