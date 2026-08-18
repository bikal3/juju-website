import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import InquiryForm from '@/components/InquiryForm'
import { HOTEL_CONTACT } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact — Hotel JuJu',
  description:
    'Get in touch with Hotel JuJu in Pokhara, Nepal. Make a room inquiry or ask about your upcoming stay.',
  alternates: {
    canonical: '/contact/',
  },
  openGraph: {
    title: 'Contact — Hotel JuJu',
    description: 'Reach Hotel JuJu at Lakeside Pokhara, Nepal.',
    type: 'website',
    images: [{ url: '/images/contact-hero.jpg', width: 1200, height: 630, alt: 'Hotel JuJu entrance in Lakeside Pokhara' }],
  },
}

export default function ContactPage() {
  return (
    <>
      <HeroSection
        height="short"
        title="Contact Us"
        subtitle="We'd love to hear from you"
        imageSrc="/images/contact-hero.jpg"
        imageAlt="Hotel JuJu entrance — Juju Cafe sign with flowers, Lakeside Pokhara"
      />

      <section className="py-20 px-6" aria-label="Contact information and inquiry form">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* ── LEFT: Contact details + map ─────────────────────── */}
          <div>
            <p className="text-gold text-xs tracking-[3px] uppercase mb-6">
              Find Us
            </p>
            <h2 className="font-playfair text-2xl font-normal mb-6">
              {HOTEL_CONTACT.name}
            </h2>
            <address className="not-italic text-text-secondary text-sm leading-loose mb-8">
              <p>📍 {HOTEL_CONTACT.address}</p>
              <p>
                📞{' '}
                <a
                  href={`tel:${HOTEL_CONTACT.phone}`}
                  className="hover:text-gold transition-colors"
                >
                  {HOTEL_CONTACT.phone}
                </a>
              </p>
              <p>
                ✉️{' '}
                <a
                  href={`mailto:${HOTEL_CONTACT.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {HOTEL_CONTACT.email}
                </a>
              </p>
            </address>

            <div className="rounded-sm overflow-hidden h-56">
              <iframe
                src="https://maps.google.com/maps?q=28.207289,83.9607528&z=17&output=embed"
                width="100%"
                height="224"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel JuJu on Google Maps"
                className="border-0 w-full h-full"
              />
            </div>
          </div>

          {/* ── RIGHT: Inquiry form ──────────────────────────────── */}
          <div>
            <p className="text-gold text-xs tracking-[3px] uppercase mb-6">
              Send an Inquiry
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}
