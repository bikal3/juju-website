import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import SkipLink from '@/components/SkipLink'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { LanguageProvider } from '@/lib/language-context'
import { hotelJsonLd } from '@/lib/structured-data'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hoteljuju.com.np'),
  title: {
    default: 'Hotel JuJu — Warm Nepali Hospitality in Pokhara',
    template: '%s — Hotel JuJu',
  },
  description:
    'Experience warm Nepali hospitality at Hotel JuJu in Lakeside Pokhara, Nepal. Comfortable rooms, trekking connections, and authentic local experiences.',
  openGraph: {
    url: 'https://www.hoteljuju.com.np',
    siteName: 'Hotel JuJu',
    type: 'website',
    images: [{ url: '/images/hero-exterior.jpg', width: 1200, height: 630, alt: 'Hotel JuJu exterior in Lakeside Pokhara, Nepal' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }}
        />
      </head>
      <body className="font-lato bg-cream text-text-primary antialiased">
        <LanguageProvider>
          <SkipLink />
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
