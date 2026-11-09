// next/font/google resuelve los nombres de fuente en build time, así que no se puede
// pasar un nombre de fuente arbitrario en runtime (desde Sanity o una env var) sin
// perder la optimización de self-hosting/subsetting. En su lugar, se definen packs
// fijos en código; siteSettings.temaFuente elige cuál aplicar vía clase en <body>
// (la clase la resuelve app/globals.css, ver .theme-moderno).
export const FONT_PACKS = {
  elegante: { className: '' },
  moderno: { className: 'theme-moderno' },
} as const

export type FontPackId = keyof typeof FONT_PACKS
