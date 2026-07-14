import type { Metadata } from 'next'
import HomeContent from './HomeContent'

export const metadata: Metadata = {
  title: 'Hotel JuJu — Warm Nepali Hospitality in Pokhara',
  description:
    'Hotel JuJu offers comfortable rooms and authentic Nepali hospitality in Lakeside Pokhara. Perfect base for trekking and cultural exploration.',
  openGraph: {
    title: 'Hotel JuJu — Warm Nepali Hospitality in Pokhara',
    description: 'Comfortable rooms and authentic hospitality in Lakeside Pokhara, Nepal.',
    type: 'website',
    images: [{ url: '/images/hero-exterior.jpg', width: 1200, height: 630, alt: 'Hotel JuJu exterior — Lakeside Pokhara, Nepal' }],
  },
}

export default function HomePage() {
  return <HomeContent />
}
