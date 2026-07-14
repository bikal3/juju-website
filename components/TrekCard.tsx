import Link from 'next/link'

interface TrekCardProps {
  name: string
  duration: string
  difficulty: string
  description: string
  slug: string
}

const difficultyStyle: Record<string, string> = {
  'Easy to Moderate': 'bg-green-50 text-green-700 border border-green-200',
  'Moderate':         'bg-amber-50 text-amber-700 border border-amber-200',
  'Moderate to Strenuous': 'bg-orange-50 text-orange-700 border border-orange-200',
  'Strenuous':        'bg-red-50 text-red-700 border border-red-200',
}

export default function TrekCard({ name, duration, difficulty, description, slug }: TrekCardProps) {
  const diffClass = difficultyStyle[difficulty] ?? 'bg-warm-tint text-gold'

  return (
    <div className="bg-white shadow-md rounded-sm overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col">
      {/* Difficulty colour strip */}
      <div className={`px-5 py-2 text-xs tracking-widest uppercase font-medium ${diffClass}`}>
        {difficulty}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-3 mb-3">
          <h3 className="font-playfair text-lg font-normal leading-tight">{name}</h3>
          <span className="bg-warm-tint text-gold text-xs px-2 py-1 tracking-wide whitespace-nowrap shrink-0">
            {duration}
          </span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">{description}</p>
        <Link
          href={`/travel/${slug}`}
          className="inline-block bg-gold text-cream text-xs tracking-widest uppercase px-4 py-2 hover:opacity-90 transition-opacity self-start"
        >
          Learn More
          <span className="sr-only"> about {name}</span>
        </Link>
      </div>
    </div>
  )
}
