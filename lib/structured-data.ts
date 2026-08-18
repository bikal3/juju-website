import { HOTEL_CONTACT, TrekDetail } from '@/lib/data'

export const SITE_URL = 'https://www.hoteljuju.com.np'

const abs = (path: string) => `${SITE_URL}${path}`

export const hotelJsonLd: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: HOTEL_CONTACT.name,
  description:
    'Comfortable hotel in Lakeside Pokhara offering Standard, Triple, and Deluxe rooms with authentic Nepali hospitality and trekking connections.',
  url: `${SITE_URL}/`,
  telephone: HOTEL_CONTACT.phone,
  email: HOTEL_CONTACT.email,
  // Google will not show hotel rich results without imagery.
  image: [
    abs('/images/hero-exterior.jpg'),
    abs('/images/room-deluxe.jpg'),
    abs('/images/restaurant-bar.jpg'),
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Street 6, Gaurighat, Lakeside Ward 6',
    addressLocality: 'Pokhara',
    addressRegion: 'Gandaki',
    // 33700 is Pokhara's postal code; the previous '06' was the ward number.
    postalCode: '33700',
    addressCountry: 'NP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.207289,
    longitude: 83.9607528,
  },
  priceRange: '$$',
  checkinTime: '12:00',
  checkoutTime: '11:00',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Room Service', value: true },
  ],
}

/** Mirrors the visible breadcrumb on a trek detail page. */
export function trekBreadcrumbJsonLd(trek: TrekDetail): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Travel Partner', item: `${SITE_URL}/travel/` },
      {
        '@type': 'ListItem',
        position: 3,
        name: trek.name,
        item: `${SITE_URL}/travel/${trek.slug}/`,
      },
    ],
  }
}
