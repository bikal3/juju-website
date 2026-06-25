import type { Metadata } from 'next'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import { GALLERY_SECTIONS } from '@/lib/data'
import { imgSrc } from '@/lib/base-path'

export const metadata: Metadata = {
  title: 'Gallery — Hotel JuJu',
  description:
    'Photos of Hotel JuJu in Lakeside Pokhara — rooms, restaurant, bar, and hotel exterior.',
  openGraph: {
    title: 'Gallery — Hotel JuJu',
    description: 'See our rooms, restaurant, and facilities in Lakeside Pokhara, Nepal.',
    type: 'website',
  },
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
            <div
              className={`grid gap-4 ${
                section.photos.length === 1
                  ? 'grid-cols-1 max-w-lg'
                  : section.photos.length === 2
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
              }`}
            >
              {section.photos.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-[4/3] rounded-sm overflow-hidden bg-card-placeholder"
                >
                  <Image
                    src={imgSrc(photo.src)}
                    alt={photo.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
