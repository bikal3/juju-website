// app/layout.tsx
import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        {/* Emoji favicon — no external file needed */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏨</text></svg>"
        />
      </head>
      <body className="font-lato bg-cream text-text-primary antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
