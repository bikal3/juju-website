import Image from 'next/image'
import { ReactNode } from 'react'
import { imgSrc } from '@/lib/base-path'

type HeroHeight = 'full' | 'medium' | 'short'

interface HeroSectionProps {
  height?: HeroHeight
  eyebrow?: string
  title: string
  subtitle?: string
  children?: ReactNode
  imageSrc?: string
  imageAlt?: string
}

const heightClasses: Record<HeroHeight, string> = {
  full: 'min-h-screen',
  medium: 'min-h-[60vh]',
  short: 'min-h-[40vh]',
}

export default function HeroSection({
  height = 'full',
  eyebrow,
  title,
  subtitle,
  children,
  imageSrc,
  imageAlt = 'Hotel JuJu',
}: HeroSectionProps) {
  return (
    <section
      className={`relative flex items-center justify-center text-center ${heightClasses[height]}`}
    >
      {/* Background — real photo or gradient fallback */}
      {imageSrc ? (
        <Image
          src={imgSrc(imageSrc)}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      )}

      {/* Gradient overlay — stronger at top for nav contrast, readable in centre */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.50) 100%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-6 max-w-3xl">
        {eyebrow && (
          <p className="text-gold-light text-xs tracking-[4px] uppercase mb-4">
            {eyebrow}
          </p>
        )}
        <h1
          className="font-playfair text-cream font-normal leading-tight mb-4"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-cream/80 text-base font-light mb-8 tracking-wide">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
