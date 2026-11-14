import { MessageCircle } from 'lucide-react'

export function FloatingWhatsApp({ whatsapp }: { whatsapp: string }) {
  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/${whatsapp}?text=${encodeURIComponent('Hola, quisiera hacer una consulta.')}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={22} />
      <span>Hablemos</span>
    </a>
  )
}
