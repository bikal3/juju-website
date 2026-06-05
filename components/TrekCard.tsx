import Link from 'next/link'

interface TrekCardProps {
  name: string
  duration: string
  description: string
  slug: string
}

export default function TrekCard({
  name,
  duration,
  description,
  slug,
}: TrekCardProps) {
  return (
    <div className="bg-white shadow-md rounded-sm p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
      <div className="flex justify-between items-start gap-3 mb-3">
        <h3 className="font-playfair text-lg font-normal leading-tight">
          {name}
        </h3>
        <span className="bg-warm-tint text-gold text-xs px-2 py-1 tracking-wide whitespace-nowrap shrink-0">
          {duration}
        </span>
      </div>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        {description}
      </p>
      <Link
        href={`/travel/${slug}`}
        className="inline-block bg-gold text-cream text-xs tracking-widest uppercase px-4 py-2 hover:opacity-90 transition-opacity"
      >
        Learn More
        <span className="sr-only"> about {name}</span>
      </Link>
    </div>
  )
}
