import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import { HOTEL_CONTACT } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Hotel JuJu in Pokhara, Nepal. Make a room inquiry or ask about your upcoming stay.',
  openGraph: {
    title: 'Contact — Hotel JuJu',
    description: 'Reach Hotel JuJu at Lakeside Pokhara, Nepal.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <>
      <HeroSection
        height="short"
        title="Contact Us"
        subtitle="We'd love to hear from you"
        imagePlaceholder="Contact hero — hotel entrance or lobby"
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

            {/* Map placeholder — replace with Google Maps iframe */}
            <div className="bg-card-placeholder h-56 flex items-center justify-center rounded-sm">
              <p className="text-text-secondary text-xs italic text-center px-6">
                {/* Replace this div with:
                  <iframe
                    src="PASTE_GOOGLE_MAPS_EMBED_URL_HERE"
                    width="100%" height="224" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hotel JuJu on Google Maps"
                  />
                */}
                Google Maps embed — paste embed URL from Google Maps
              </p>
            </div>
          </div>

          {/* ── RIGHT: Inquiry form ──────────────────────────────── */}
          <div>
            <p className="text-gold text-xs tracking-[3px] uppercase mb-6">
              Send an Inquiry
            </p>
            {/*
              Form is visually complete. To receive submissions on the server,
              replace action with your Formspree endpoint:
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
            */}
            <form
              action={`mailto:${HOTEL_CONTACT.email}`}
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs tracking-wide uppercase text-text-secondary mb-1"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-warm-tint bg-cream px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs tracking-wide uppercase text-text-secondary mb-1"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-warm-tint bg-cream px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs tracking-wide uppercase text-text-secondary mb-1"
                >
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full border border-warm-tint bg-cream px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="checkin"
                    className="block text-xs tracking-wide uppercase text-text-secondary mb-1"
                  >
                    Check-in
                  </label>
                  <input
                    id="checkin"
                    name="checkin"
                    type="date"
                    className="w-full border border-warm-tint bg-cream px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="checkout"
                    className="block text-xs tracking-wide uppercase text-text-secondary mb-1"
                  >
                    Check-out
                  </label>
                  <input
                    id="checkout"
                    name="checkout"
                    type="date"
                    className="w-full border border-warm-tint bg-cream px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="room"
                  className="block text-xs tracking-wide uppercase text-text-secondary mb-1"
                >
                  Room Type
                </label>
                <select
                  id="room"
                  name="room"
                  className="w-full border border-warm-tint bg-cream px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="">Select a room type</option>
                  <option value="standard">Standard Room</option>
                  <option value="triple">Standard Triple Room</option>
                  <option value="deluxe">Deluxe Double/Twin Room</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-wide uppercase text-text-secondary mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full border border-warm-tint bg-cream px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-cream text-xs tracking-widest uppercase py-3 hover:opacity-90 transition-opacity"
              >
                Send Inquiry
              </button>

              <p className="text-text-secondary text-xs italic">
                This button opens your email client. To collect inquiries
                directly on this site, connect a form service like{' '}
                <a
                  href="https://formspree.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline"
                >
                  Formspree
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
