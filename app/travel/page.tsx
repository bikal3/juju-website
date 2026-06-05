import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import TrekCard from '@/components/TrekCard'
import {
  TREKS,
  HIMALAYAN_VIEW_URL,
  HIMALAYAN_VIEW_BOOK_URL,
  HIMALAYAN_VIEW_SERVICES,
  HIMALAYAN_VIEW_CONTACT,
} from '@/lib/data'

export const metadata: Metadata = {
  title: 'Travel Partner — Himalayan View',
  description:
    "Explore Nepal with Himalayan View — Hotel JuJu's trusted trekking partner. Guided treks, porter hire, and gear rental from Pokhara.",
  openGraph: {
    title: 'Travel Partner — Himalayan View Treks',
    description:
      'Guided treks, porter hire, and trekking gear from our trusted Pokhara-based travel partner.',
    type: 'website',
  },
}

export default function TravelPage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <HeroSection
        height="medium"
        eyebrow="Our Travel Partner"
        title="Himalayan View"
        subtitle="Your gateway to Nepal's most iconic treks"
        imagePlaceholder="Himalayan landscape photo — Annapurna range from Pokhara"
      />

      {/* ── INTRO / QUOTE ──────────────────────────────────────── */}
      <section className="py-20 px-6 text-center" aria-label="About Himalayan View">
        <div className="max-w-2xl mx-auto">
          <blockquote className="font-playfair text-xl italic text-text-primary leading-relaxed mb-8">
            <p>
              &ldquo;Operated by a local Pokhara team, Himalayan View
              specializes in helping visitors explore the Himalayan regions of
              Nepal — with a grassroots approach that empowers local
              communities.&rdquo;
            </p>
            <footer className="mt-4">
              <cite className="font-playfair text-2xl not-italic text-gold">
                Himalayan View
              </cite>
            </footer>
          </blockquote>
          <a
            href={HIMALAYAN_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold text-gold text-xs tracking-widest uppercase px-6 py-2 hover:bg-gold hover:text-cream transition-colors"
          >
            Visit himalayanview.com
          </a>
        </div>
      </section>

      <hr className="border-t border-warm-tint" />

      {/* ── TREKKING PACKAGES ──────────────────────────────────── */}
      <section className="py-20 px-6" aria-label="Trekking packages">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[3px] uppercase mb-3">
              Adventures Await
            </p>
            <h2 className="font-playfair text-3xl font-normal mb-3">
              Trekking Packages
            </h2>
            <p className="text-text-secondary">
              Choose your adventure — from weekend escapes to epic circuits
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TREKS.map((trek) => (
              <TrekCard key={trek.name} {...trek} />
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t border-warm-tint" />

      {/* ── SERVICES ───────────────────────────────────────────── */}
      <section className="py-20 px-6" aria-label="Himalayan View services">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[3px] uppercase mb-3">
              What We Offer
            </p>
            <h2 className="font-playfair text-3xl font-normal">Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HIMALAYAN_VIEW_SERVICES.map(({ icon, title, text, href }) => (
              <div
                key={title}
                className="bg-white shadow-md rounded-sm p-6 text-center"
              >
                <div className="text-4xl mb-4" aria-hidden="true">
                  {icon}
                </div>
                <h3 className="font-playfair text-lg font-normal mb-3">
                  {title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {text}
                </p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gold text-xs tracking-widest uppercase border-b border-gold pb-0.5 hover:opacity-70 transition-opacity"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / BOOK BANNER ──────────────────────────────── */}
      <section className="bg-gold py-16 px-6" aria-label="Book a trek">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-normal text-cream mb-8">
            Ready to Trek?
          </h2>
          <address className="not-italic text-cream/90 text-sm leading-loose mb-8">
            <p>📍 {HIMALAYAN_VIEW_CONTACT.address}</p>
            <p>👤 Manager: {HIMALAYAN_VIEW_CONTACT.manager}</p>
            <p>
              📞{' '}
              <a
                href={`tel:${HIMALAYAN_VIEW_CONTACT.mobile.replace(/\s/g, '')}`}
                className="hover:text-cream underline"
              >
                {HIMALAYAN_VIEW_CONTACT.mobile}
              </a>{' '}
              /{' '}
              <a
                href={`tel:${HIMALAYAN_VIEW_CONTACT.landline.replace(/\s/g, '')}`}
                className="hover:text-cream underline"
              >
                {HIMALAYAN_VIEW_CONTACT.landline}
              </a>
            </p>
            <p>
              ✉️{' '}
              <a
                href={`mailto:${HIMALAYAN_VIEW_CONTACT.email}`}
                className="hover:text-cream underline"
              >
                {HIMALAYAN_VIEW_CONTACT.email}
              </a>
            </p>
          </address>
          <a
            href={HIMALAYAN_VIEW_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cream text-gold text-xs tracking-widest uppercase px-8 py-3 hover:opacity-90 transition-opacity"
          >
            Book a Trek Now
          </a>
        </div>
      </section>
    </>
  )
}
