import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found — Hotel JuJu',
  robots: { index: false, follow: true },
}

const SUGGESTIONS = [
  { href: '/rooms', label: 'Our Rooms' },
  { href: '/gallery', label: 'Photo Gallery' },
  { href: '/travel', label: 'Trekking' },
  { href: '/contact', label: 'Contact Us' },
]

export default function NotFound() {
  return (
    <section
      className="min-h-[70vh] flex items-center justify-center px-6 py-24 text-center"
      aria-label="Page not found"
    >
      <div className="max-w-md">
        <p className="text-gold text-xs tracking-[3px] uppercase mb-3">Error 404</p>
        <h1 className="font-playfair text-4xl font-normal mb-4">
          This page has wandered off
        </h1>
        <p className="text-text-secondary leading-relaxed mb-10">
          We couldn&rsquo;t find the page you were looking for. It may have moved,
          or the link may be out of date.
        </p>

        <Link
          href="/"
          className="inline-block bg-gold text-cream text-xs tracking-widest uppercase px-8 py-3 hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>

        <nav aria-label="Popular pages" className="mt-12">
          <p className="text-xs tracking-[2px] uppercase text-text-secondary mb-4">
            Or try one of these
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {SUGGESTIONS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-gold text-sm underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
