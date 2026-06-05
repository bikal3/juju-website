import Link from 'next/link'
import { HOTEL_CONTACT, BOOKING_URL } from '@/lib/data'

const FOOTER_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/travel', label: 'Travel' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-text-primary text-cream/70">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + tagline */}
        <div>
          <p className="font-playfair text-cream text-lg tracking-widest mb-1">
            HOTEL JUJU
          </p>
          <p className="text-xs tracking-wide">Pokhara, Nepal</p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center items-start">
          {FOOTER_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs tracking-wide hover:text-cream transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wide hover:text-cream transition-colors"
          >
            Book Now
          </a>
        </nav>

        {/* Contact details */}
        <address className="text-xs leading-loose not-italic md:text-right">
          <p>{HOTEL_CONTACT.address}</p>
          <a
            href={`tel:${HOTEL_CONTACT.phone}`}
            className="hover:text-cream transition-colors"
          >
            {HOTEL_CONTACT.phone}
          </a>
          <br />
          <a
            href={`mailto:${HOTEL_CONTACT.email}`}
            className="hover:text-cream transition-colors"
          >
            {HOTEL_CONTACT.email}
          </a>
        </address>
      </div>

      <div className="border-t border-cream/10 py-4 text-center text-xs tracking-wide text-cream/40">
        © 2025 Hotel JuJu. All rights reserved.
      </div>
    </footer>
  )
}
