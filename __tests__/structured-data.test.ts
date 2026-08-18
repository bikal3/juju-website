import { hotelJsonLd, trekBreadcrumbJsonLd } from '@/lib/structured-data'
import { HOTEL_CONTACT, TREK_DETAILS } from '@/lib/data'

describe('Hotel structured data', () => {
  it('declares the Hotel type with the real contact details', () => {
    expect(hotelJsonLd['@type']).toBe('Hotel')
    expect(hotelJsonLd.name).toBe(HOTEL_CONTACT.name)
    expect(hotelJsonLd.telephone).toBe(HOTEL_CONTACT.phone)
  })

  it('supplies images, which Google requires for hotel rich results', () => {
    const images = hotelJsonLd.image as string[]
    expect(Array.isArray(images)).toBe(true)
    expect(images.length).toBeGreaterThan(0)
    for (const src of images) {
      expect(src).toMatch(/^https:\/\/www\.hoteljuju\.com\.np\/images\/.+\.jpg$/)
    }
  })

  it('uses a plausible Nepali postal code, not the ward number', () => {
    const postal = (hotelJsonLd.address as Record<string, string>).postalCode
    expect(postal).not.toBe('06')
    expect(postal).toMatch(/^\d{5}$/)
  })

  it('keeps geo coordinates inside Pokhara', () => {
    const geo = hotelJsonLd.geo as Record<string, number>
    expect(geo.latitude).toBeGreaterThan(28.1)
    expect(geo.latitude).toBeLessThan(28.3)
    expect(geo.longitude).toBeGreaterThan(83.8)
    expect(geo.longitude).toBeLessThan(84.1)
  })
})

describe('trek breadcrumbs', () => {
  it.each(TREK_DETAILS.map((t) => [t.slug, t] as const))(
    '%s mirrors the on-page breadcrumb trail',
    (_slug, trek) => {
      const crumb = trekBreadcrumbJsonLd(trek)
      expect(crumb['@type']).toBe('BreadcrumbList')
      const items = crumb.itemListElement as Record<string, unknown>[]
      expect(items).toHaveLength(3)
      expect(items.map((i) => i.name)).toEqual(['Home', 'Travel Partner', trek.name])
      expect(items.map((i) => i.position)).toEqual([1, 2, 3])
      expect(items[2].item).toBe(`https://www.hoteljuju.com.np/travel/${trek.slug}/`)
    }
  )
})
