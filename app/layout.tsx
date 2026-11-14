import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rocío Freites | Belleza y más',
  description:
    'Manicuría, tratamientos faciales, masajes, depilación definitiva y podología en Luzuriaga, Maipú, Mendoza.',
  applicationName: 'Rocío Freites · Belleza y más',
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
  openGraph: {
    title: 'Rocío Freites | Belleza y más',
    description: 'Un espacio para sentirte bien, de pies a cabeza.',
    type: 'website',
    locale: 'es_AR',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#f8efec',
  colorScheme: 'light',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  )
}
