import { MetadataRoute } from 'next'
import { TREK_DETAILS } from '@/lib/data'

const BASE = 'https://www.hoteljuju.com.np'

export default function sitemap(): MetadataRoute.Sitemap {
  const trekPages = TREK_DETAILS.map((trek) => ({
    url: `${BASE}/travel/${trek.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/rooms`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/travel`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    ...trekPages,
  ]
}
