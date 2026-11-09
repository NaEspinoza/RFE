// Validación mínima antes de inyectar un color de Sanity en un <style> inline
// (app/layout.tsx), para no permitir que un valor mal cargado en el CMS rompa el
// bloque de CSS.
const HEX_COLOR = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/

export function sanitizeHexColor(value: string | undefined, fallback: string): string {
  if (value && HEX_COLOR.test(value.trim())) return value.trim()
  return fallback
}
