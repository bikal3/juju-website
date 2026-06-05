import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import { TREK_DETAILS, HIMALAYAN_VIEW_BOOK_URL } from '@/lib/data'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return TREK_DETAILS.map((trek) => ({ slug: trek.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const trek = TREK_DETAILS.find((t) => t.slug === params.slug)
  if (!trek) return {}
  return {
    title: `${trek.name} — Hotel JuJu Travel`,
    description: trek.overview.slice(0, 155),
    openGraph: {
      title: `${trek.name} Trek | Hotel JuJu, Pokhara`,
      description: trek.overview.slice(0, 155),
      type: 'website',
    },
  }
}

export default function TrekDetailPage({ params }: Props) {
  const trek = TREK_DETAILS.find((t) => t.slug === params.slug)
  if (!trek) notFound()

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <HeroSection
        height="medium"
        eyebrow="Himalayan View Trek"
        title={trek.name}
        subtitle={`${trek.duration} · ${trek.difficulty} · Max ${trek.maxAltitude}`}
      />

      {/* ── BREADCRUMB ─────────────────────────────────────────── */}
      <div className="bg-warm-tint border-b border-[#E8DDD0]">
        <div className="max-w-5xl mx-auto px-6 py-3 text-xs text-text-secondary tracking-wide flex gap-2 items-center">
          <Link href="/travel" className="hover:text-gold transition-colors">
            Travel Partner
          </Link>
          <span aria-hidden="true">›</span>
          <span className="text-gold">{trek.name}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* ── OVERVIEW ─────────────────────────────────────────── */}
        <section aria-label="Trek overview">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-3">Overview</p>
          <h2 className="font-playfair text-3xl font-normal mb-6">About this Trek</h2>

          {/* Key stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Duration', value: trek.duration },
              { label: 'Difficulty', value: trek.difficulty },
              { label: 'Max Altitude', value: trek.maxAltitude },
              { label: 'Starts from', value: 'Pokhara' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-warm-tint rounded-sm px-5 py-4">
                <p className="text-gold text-xs tracking-widest uppercase mb-1">{label}</p>
                <p className="font-playfair text-lg font-normal text-text-primary">{value}</p>
              </div>
            ))}
          </div>

          <p className="text-text-secondary leading-relaxed text-base max-w-3xl">
            {trek.overview}
          </p>
        </section>

        {/* ── HIGHLIGHTS ───────────────────────────────────────── */}
        <section aria-label="Trek highlights">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-3">Highlights</p>
          <h2 className="font-playfair text-3xl font-normal mb-6">What to Expect</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {trek.highlights.map((point) => (
              <li key={point} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                <span className="text-gold mt-0.5 shrink-0 text-base" aria-hidden="true">✦</span>
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* ── ITINERARY ────────────────────────────────────────── */}
        <section aria-label="Day-by-day itinerary">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-3">Itinerary</p>
          <h2 className="font-playfair text-3xl font-normal mb-8">Day by Day</h2>
          <ol className="space-y-4" style={{ listStyle: 'none' }}>
            {trek.itinerary.map((day) => (
              <li key={day.day} className="flex gap-5 items-start">
                {/* Day number pill */}
                <span className="shrink-0 w-10 h-10 rounded-full bg-gold text-cream text-xs font-lato flex items-center justify-center tracking-wide">
                  D{day.day}
                </span>
                <div className="pt-2">
                  <p className="text-text-primary font-normal text-sm leading-snug">
                    {day.title}
                  </p>
                  {day.note && (
                    <p className="text-text-secondary text-xs italic mt-1">{day.note}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

      </div>

      {/* ── BOOKING CTA ────────────────────────────────────────── */}
      <section className="bg-gold py-16 px-6 text-center" aria-label="Book this trek">
        <p className="text-cream/80 text-xs tracking-[3px] uppercase mb-3">Ready to go?</p>
        <h2 className="font-playfair text-3xl font-normal text-cream mb-4">
          Book {trek.name}
        </h2>
        <p className="text-cream/80 text-sm mb-8 max-w-md mx-auto">
          Organised by Himalayan View — our trusted Pokhara-based trekking partner.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={HIMALAYAN_VIEW_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cream text-gold text-xs tracking-widest uppercase px-8 py-3 hover:opacity-90 transition-opacity"
          >
            Book Now
            <span className="sr-only"> (opens Himalayan View booking page in new tab)</span>
          </a>
          <Link
            href="/travel"
            className="inline-block border border-cream text-cream text-xs tracking-widest uppercase px-8 py-3 hover:bg-cream/10 transition-colors"
          >
            All Treks
          </Link>
        </div>
      </section>
    </>
  )
}
