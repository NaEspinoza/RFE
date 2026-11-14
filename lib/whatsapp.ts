// Centraliza la construcción de links de WhatsApp. Antes el número de teléfono
// estaba repetido como string literal en 3 lugares distintos de app/page.tsx.
export function buildWhatsAppUrl(phone: string | undefined, message: string) {
  if (!phone) return '#'
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
