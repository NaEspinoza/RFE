import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'
import { dataset, projectId } from './sanity/env'

export default defineConfig({
  name: 'rocio-freites',
  title: process.env.NEXT_PUBLIC_SITE_NAME || 'Rocío Freites · Belleza y más',
  projectId: projectId || 'bmnk01af',
  dataset: 'production',
  plugins: [structureTool({ structure })],
  schema,
})
