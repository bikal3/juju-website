'use client'

import Link from 'next/link'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import RoomCard from '@/components/RoomCard'
import { ROOMS, BOOKING_URL, HOME_FEATURES } from '@/lib/data'
import { useLang } from '@/lib/language-context'
import { translations } from '@/lib/translations'
import { imgSrc } from '@/lib/base-path'

export default function HomeContent() {
  const { lang } = useLang()
  const t = translations[lang].home

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <HeroSection
        height="medium"
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        imageSrc="/images/hero-exterior.jpg"
        imageAlt="Hotel JuJu exterior — Lakeside Pokhara, Nepal"
      >
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/rooms"
            className="bg-gold text-cream text-xs tracking-widest uppercase px-7 py-3 hover:opacity-90 transition-opacity"
          >
            {t.exploreRooms}
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cream/50 text-cream text-xs tracking-widest uppercase px-7 py-3 hover:border-cream transition-colors"
          >
            {t.bookNow}
          </a>
        </div>
      </HeroSection>

      {/* ── WELCOME INTRO ──────────────────────────────────────── */}
      <section className="py-20 px-6 text-center" aria-label="About Hotel JuJu">
        <div className="max-w-2xl mx-auto">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-3">{t.aboutLabel}</p>
          <h2 className="font-playfair text-3xl font-normal mb-6">{t.aboutTitle}</h2>
          <p className="text-text-secondary leading-relaxed">{t.aboutBody}</p>
        </div>
      </section>

      <hr className="border-t border-warm-tint" />

      {/* ── ROOMS PREVIEW ──────────────────────────────────────── */}
      <section className="py-20 px-6" aria-label="Our rooms">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[3px] uppercase mb-3">{t.roomsLabel}</p>
            <h2 className="font-playfair text-3xl font-normal">{t.roomsTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROOMS.map((room) => (
              <RoomCard
                key={room.id}
                name={room.name}
                description={room.description}
                amenities={room.amenities}
                imageSrc={room.imageSrc}
                imageAlt={room.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t border-warm-tint" />

      {/* ── WHY CHOOSE US ──────────────────────────────────────── */}
      <section className="py-20 px-6 text-center" aria-label="Why choose Hotel JuJu">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-3">{t.whyLabel}</p>
          <h2 className="font-playfair text-3xl font-normal mb-2">{t.whyTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {HOME_FEATURES.map(({ icon, title, text }) => (
              <div key={title}>
                <div className="text-4xl mb-4" aria-hidden="true">{icon}</div>
                <h3 className="font-playfair text-lg font-normal mb-2">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESTAURANT & BAR ───────────────────────────────────── */}
      <section className="py-20 px-6 bg-warm-tint" aria-label="Restaurant and bar">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="relative w-full md:w-1/2 h-72 rounded-sm overflow-hidden">
            <Image
              src={imgSrc('/images/restaurant-bar.jpg')}
              alt="Hotel JuJu restaurant bar with atmospheric lighting"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gold text-xs tracking-[3px] uppercase mb-3">{t.restaurantLabel}</p>
            <h2 className="font-playfair text-3xl font-normal mb-5">{t.restaurantTitle}</h2>
            <p className="text-text-secondary leading-relaxed mb-8">{t.restaurantBody}</p>
            <Link
              href="/gallery"
              className="inline-block bg-gold text-cream text-xs tracking-widest uppercase px-7 py-3 hover:opacity-90 transition-opacity"
            >
              {t.restaurantCta}
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRAVEL TEASER ──────────────────────────────────────── */}
      <section className="py-20 px-6 text-center" aria-label="Travel partner teaser">
        <div className="max-w-xl mx-auto">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-3">{t.travelLabel}</p>
          <h2 className="font-playfair text-3xl font-normal mb-5">{t.travelTitle}</h2>
          <p className="text-text-secondary leading-relaxed mb-8">{t.travelBody}</p>
          <Link
            href="/travel"
            className="inline-block bg-gold text-cream text-xs tracking-widest uppercase px-7 py-3 hover:opacity-90 transition-opacity"
          >
            {t.travelCta}
          </Link>
        </div>
      </section>
    </>
  )
}
