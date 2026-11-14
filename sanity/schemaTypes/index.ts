import type { SchemaTypeDefinition } from 'sanity'
import { servicio } from './servicio'
import { siteSettings } from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [servicio, siteSettings],
}
