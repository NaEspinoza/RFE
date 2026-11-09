import { type SchemaTypeDefinition } from 'sanity'
import { producto } from './producto'
import { siteSettings } from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [producto, siteSettings],
}
