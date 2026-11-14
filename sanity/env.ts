// Las variables son opcionales para permitir ejecutar la landing con contenido local.
// Para el Studio y la conexión real, completar .env.local.
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-11-01'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || ''
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const hasSanityConfig = Boolean(projectId && dataset)
