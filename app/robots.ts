import { MetadataRoute } from 'next'

const BASE = 'https://www.hoteljuju.com.np'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${BASE}/sitemap.xml`,
  }
}
