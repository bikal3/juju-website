import type { Metadata } from 'next'
import HomeContent from './HomeContent'
import { pageSeo } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Hotel JuJu — Warm Nepali Hospitality in Pokhara',
  description:
    'Hotel JuJu offers comfortable rooms and authentic Nepali hospitality in Lakeside Pokhara. Perfect base for trekking and cultural exploration.',
  ...pageSeo({
    path: '/',
    title: 'Hotel JuJu — Warm Nepali Hospitality in Pokhara',
    description: 'Comfortable rooms and authentic hospitality in Lakeside Pokhara, Nepal.',
    image: '/images/hero-exterior.jpg',
    imageAlt: 'Hotel JuJu exterior — Lakeside Pokhara, Nepal',
  }),
}

export default function HomePage() {
  return <HomeContent />
}
