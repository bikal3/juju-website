import { ReactNode } from 'react'

type HeroHeight = 'full' | 'medium' | 'short'

interface HeroSectionProps {
  height?: HeroHeight
  eyebrow?: string
  title: string
  subtitle?: string
  children?: ReactNode
  imagePlaceholder?: string
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
  imagePlaceholder = 'Hero photo',
}: HeroSectionProps) {
  return (
    <section
      className={`relative flex items-center justify-center text-center ${heightClasses[height]}`}
      style={{
        background:
          'linear-gradient(135deg, #2C1810 0%, #5C3D1E 60%, #3a2510 100%)',
      }}
    >
      {/* Placeholder label — remove when real photo is added */}
      <span
        className="absolute bottom-4 right-5 text-white/20 text-xs italic tracking-wide"
        aria-hidden="true"
      >
        {imagePlaceholder} — replace with real photo
      </span>

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
