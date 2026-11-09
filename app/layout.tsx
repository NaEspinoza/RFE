import { Analytics } from '@vercel/analytics/next'
import { DM_Sans, Fraunces, Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { client } from '@/sanity/lib/client'
import { DEFAULT_SITE_SETTINGS, SITE_SETTINGS_QUERY, type SiteSettings } from '@/sanity/lib/types'
import { FONT_PACKS } from '@/lib/theme-packs'
import { sanitizeHexColor } from '@/lib/color'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

// Título/descripción no salen de Sanity (no forman parte de siteSettings) — es la
// única edición manual esperada por cliente nuevo, junto con la copy de Benefits/About.
export const metadata: Metadata = {
  title: 'Mi Marca | Tienda online',
  description: 'Editá este título y descripción en app/layout.tsx para cada cliente nuevo.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: DEFAULT_SITE_SETTINGS.colorPrimario, // fallback; el color real se inyecta abajo desde siteSettings
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const settings: SiteSettings | null = await client.fetch(SITE_SETTINGS_QUERY).catch(() => null)

  const colorPrimario = sanitizeHexColor(settings?.colorPrimario, DEFAULT_SITE_SETTINGS.colorPrimario!)
  const colorSecundario = sanitizeHexColor(
    settings?.colorSecundario,
    DEFAULT_SITE_SETTINGS.colorSecundario!
  )
  const fontPack = FONT_PACKS[settings?.temaFuente || 'elegante']

  return (
    <html lang="es" className="bg-background">
      <body
        className={`${dmSans.variable} ${fraunces.variable} ${inter.variable} ${spaceGrotesk.variable} ${fontPack.className} antialiased`}
      >
        {/* Sobreescribe los tokens de color de globals.css con los valores de siteSettings */}
        <style
          dangerouslySetInnerHTML={{
            __html: `:root { --primary: ${colorPrimario}; --ring: ${colorPrimario}; --pink: ${colorPrimario}; --ink: ${colorSecundario}; }`,
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
