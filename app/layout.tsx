import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { LanguageProvider } from '@/lib/language-context'
import { HOTEL_CONTACT } from '@/lib/data'

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
  title: {
    default: 'Hotel JuJu — Warm Nepali Hospitality in Pokhara',
    template: '%s — Hotel JuJu',
  },
  description:
    'Experience warm Nepali hospitality at Hotel JuJu in Lakeside Pokhara, Nepal. Comfortable rooms, trekking connections, and authentic local experiences.',
  openGraph: {
    siteName: 'Hotel JuJu',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: HOTEL_CONTACT.name,
  description:
    'Comfortable hotel in Lakeside Pokhara offering Standard, Triple, and Deluxe rooms with authentic Nepali hospitality and trekking connections.',
  url: 'https://www.hoteljuju.com.np',
  telephone: HOTEL_CONTACT.phone,
  email: HOTEL_CONTACT.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Street 6 Gaurighat',
    addressLocality: 'Lakeside Pokhara',
    postalCode: '06',
    addressCountry: 'NP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.207289,
    longitude: 83.9607528,
  },
  priceRange: '$$',
  checkinTime: '12:00',
  checkoutTime: '11:00',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Room Service', value: true },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏨</text></svg>"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-lato bg-cream text-text-primary antialiased">
        <LanguageProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
