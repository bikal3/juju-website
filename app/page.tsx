// app/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import RoomCard from '@/components/RoomCard'
import { ROOMS, BOOKING_URL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Hotel JuJu — Warm Nepali Hospitality in Pokhara',
  description:
    'Hotel JuJu offers comfortable rooms and authentic Nepali hospitality in Lakeside Pokhara. Perfect base for trekking and cultural exploration.',
  openGraph: {
    title: 'Hotel JuJu — Warm Nepali Hospitality in Pokhara',
    description:
      'Comfortable rooms and authentic hospitality in Lakeside Pokhara, Nepal.',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <HeroSection
        eyebrow="Your Hospitality Partner"
        title="Hotel JuJu"
        subtitle="Experience warm Nepali hospitality in the heart of Nepal"
        imagePlaceholder="Hero photo — hotel exterior"
      >
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/rooms"
            className="bg-gold text-cream text-xs tracking-widest uppercase px-7 py-3 hover:opacity-90 transition-opacity"
          >
            Explore Rooms
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cream/50 text-cream text-xs tracking-widest uppercase px-7 py-3 hover:border-cream transition-colors"
          >
            Book Now
          </a>
        </div>
      </HeroSection>

      {/* ── WELCOME INTRO ──────────────────────────────────────── */}
      <section className="py-20 px-6 text-center" aria-label="About Hotel JuJu">
        <div className="max-w-2xl mx-auto">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-3">
            About Us
          </p>
          <h2 className="font-playfair text-3xl font-normal mb-6">
            Welcome to Hotel JuJu
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Nestled in Nepal, Hotel JuJu offers a warm and comfortable stay for
            travelers seeking both comfort and authentic Nepali hospitality.
            Whether you&apos;re here for trekking, culture, or leisure, we are
            your home away from home.
          </p>
        </div>
      </section>

      <hr className="border-t border-warm-tint" />

      {/* ── ROOMS PREVIEW ──────────────────────────────────────── */}
      <section className="py-20 px-6" aria-label="Our rooms">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[3px] uppercase mb-3">
              Accommodation
            </p>
            <h2 className="font-playfair text-3xl font-normal">Our Rooms</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROOMS.map((room) => (
              <RoomCard
                key={room.id}
                name={room.name}
                description={room.description}
                amenities={room.amenities}
                imagePlaceholder={room.imagePlaceholder}
              />
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t border-warm-tint" />

      {/* ── WHY CHOOSE US ──────────────────────────────────────── */}
      <section className="py-20 px-6 text-center" aria-label="Why choose Hotel JuJu">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-3">
            Why Choose Us
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {[
              {
                icon: '🏔️',
                title: 'Himalayan Gateway',
                text: "Perfect base for trekking & exploration into Nepal's iconic mountain regions.",
              },
              {
                icon: '🤝',
                title: 'Warm Hospitality',
                text: 'Authentic Nepali welcome — our staff treats every guest like family.',
              },
              {
                icon: '🗺️',
                title: 'Local Expertise',
                text: 'Trusted travel partner connections to get the most out of your Nepal visit.',
              },
            ].map(({ icon, title, text }) => (
              <div key={title}>
                <div className="text-4xl mb-4" aria-hidden="true">
                  {icon}
                </div>
                <h3 className="font-playfair text-lg font-normal mb-2">
                  {title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAVEL TEASER ──────────────────────────────────────── */}
      <section
        className="bg-warm-tint py-20 px-6 text-center"
        aria-label="Travel partner teaser"
      >
        <div className="max-w-xl mx-auto">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-3">
            Our Travel Partner
          </p>
          <h2 className="font-playfair text-3xl font-normal mb-5">
            Explore Nepal Beyond the Hotel
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            Our trusted travel partner Himalayan View offers guided treks,
            porter hire, and trekking gear — everything you need to experience
            the Himalayas.
          </p>
          <Link
            href="/travel"
            className="inline-block bg-gold text-cream text-xs tracking-widest uppercase px-7 py-3 hover:opacity-90 transition-opacity"
          >
            Meet Our Travel Partner
          </Link>
        </div>
      </section>
    </>
  )
}
