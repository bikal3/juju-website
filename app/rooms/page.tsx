import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import { ROOMS, BOOKING_URL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Rooms — Hotel JuJu',
  description:
    'Explore Standard, Triple, and Deluxe rooms at Hotel JuJu in Pokhara — all with authentic Nepali warmth and essential amenities.',
  openGraph: {
    title: 'Rooms — Hotel JuJu',
    description:
      'Standard, Triple, and Deluxe rooms at Hotel JuJu, Lakeside Pokhara.',
    type: 'website',
  },
}

export default function RoomsPage() {
  return (
    <>
      <HeroSection
        height="medium"
        title="Our Rooms"
        subtitle="Comfort, simplicity, and Nepali warmth"
        imagePlaceholder="Hero photo — hotel corridor or exterior"
      />

      {/* ── ROOM DETAIL SECTIONS ───────────────────────────────── */}
      <div className="max-w-6xl mx-auto py-20 px-6 space-y-24">
        {ROOMS.map((room, index) => (
          <section
            key={room.id}
            aria-label={room.name}
            className={`flex flex-col gap-10 items-center ${
              index % 2 === 0
                ? 'md:flex-row'
                : 'md:flex-row-reverse'
            }`}
          >
            {/* Image placeholder — replace with <Image> when photos are ready */}
            <div className="w-full md:w-1/2 bg-card-placeholder min-h-[300px] flex items-center justify-center rounded-sm">
              <span className="text-gold text-xs italic">
                {room.imagePlaceholder}
              </span>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <h2 className="font-playfair text-2xl font-normal mb-3">
                {room.name}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                {room.longDescription}
              </p>

              {room.note && (
                <p className="text-gold text-sm italic mb-5">{room.note}</p>
              )}

              <h3 className="text-xs tracking-[3px] uppercase text-gold mb-3">
                Amenities
              </h3>
              <ul className="grid grid-cols-2 gap-y-1.5 gap-x-4 text-sm text-text-secondary mb-8">
                {room.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-center gap-2">
                    <span className="text-gold" aria-hidden="true">·</span>
                    {amenity}
                  </li>
                ))}
              </ul>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-cream text-xs tracking-widest uppercase px-7 py-3 hover:opacity-90 transition-opacity"
              >
                Book This Room
              </a>
            </div>
          </section>
        ))}
      </div>

      {/* ── BOOKING CTA BANNER ─────────────────────────────────── */}
      <section className="bg-text-primary py-16 px-6 text-center" aria-label="Booking call to action">
        <h2 className="font-playfair text-3xl font-normal text-cream mb-6">
          Ready to book your stay?
        </h2>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold text-cream text-xs tracking-widest uppercase px-8 py-3 hover:opacity-90 transition-opacity"
        >
          Book on Booking.com
        </a>
      </section>
    </>
  )
}
