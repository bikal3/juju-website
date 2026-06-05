import Link from 'next/link'

interface RoomCardProps {
  name: string
  description: string
  amenities: string[]
  imagePlaceholder: string
  href?: string
}

export default function RoomCard({
  name,
  description,
  amenities,
  imagePlaceholder,
  href = '/rooms',
}: RoomCardProps) {
  return (
    <div className="bg-white shadow-md rounded-sm overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
      {/* Image placeholder — replace div with <Image> when real photo is ready */}
      <div className="bg-card-placeholder h-48 flex items-center justify-center">
        <span className="text-gold text-xs italic">{imagePlaceholder}</span>
      </div>

      <div className="p-5">
        <h3 className="font-playfair text-lg font-normal mb-2">{name}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-3">
          {description}
        </p>

        {/* Show first 6 amenities on card; full list is on the Rooms page */}
        <ul className="grid grid-cols-2 gap-1 text-xs text-text-secondary mb-4">
          {amenities.slice(0, 6).map((amenity) => (
            <li key={amenity} className="flex items-center gap-1">
              <span className="text-gold" aria-hidden="true">·</span>
              {amenity}
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="inline-block bg-gold text-cream text-xs tracking-widest uppercase px-5 py-2 hover:opacity-90 transition-opacity"
        >
          View Room
        </Link>
      </div>
    </div>
  )
}
