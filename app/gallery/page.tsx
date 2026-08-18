import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import { GALLERY_SECTIONS } from '@/lib/data'
import GalleryGrid from '@/components/GalleryGrid'
import { pageSeo } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Gallery — Hotel JuJu',
  description:
    'Photos of Hotel JuJu in Lakeside Pokhara — rooms, restaurant, bar, and hotel exterior.',
  ...pageSeo({
    path: '/gallery/',
    title: 'Gallery — Hotel JuJu',
    description: 'See our rooms, restaurant, and facilities in Lakeside Pokhara, Nepal.',
    image: '/images/restaurant-bar.jpg',
    imageAlt: 'Hotel JuJu restaurant bar with atmospheric lighting',
  }),
}

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        height="short"
        title="Photo Gallery"
        subtitle="A glimpse into life at Hotel JuJu"
        imageSrc="/images/hero-exterior.jpg"
        imageAlt="Hotel JuJu exterior — Lakeside Pokhara"
      />

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {GALLERY_SECTIONS.map((section) => (
          <section key={section.title} aria-label={section.title}>
            <p className="text-gold text-xs tracking-[3px] uppercase mb-3">Hotel JuJu</p>
            <h2 className="font-playfair text-2xl font-normal mb-8">{section.title}</h2>
            <GalleryGrid photos={section.photos} />
          </section>
        ))}
      </div>
    </>
  )
}
