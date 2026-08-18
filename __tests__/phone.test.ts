import { telHref } from '@/lib/phone'
import { HOTEL_CONTACT, HIMALAYAN_VIEW_CONTACT } from '@/lib/data'

describe('telHref', () => {
  it('strips spaces and punctuation that break tel: URIs', () => {
    expect(telHref('+977 9802090767')).toBe('tel:+9779802090767')
  })

  it('drops the national trunk 0 that follows the +977 country code', () => {
    // +977 061-456315 must dial as +977 61 456315 from abroad.
    expect(telHref('+977 061-456315')).toBe('tel:+97761456315')
    expect(telHref('+977 061 456674')).toBe('tel:+97761456674')
  })

  it('leaves an already-clean international number untouched', () => {
    expect(telHref('+97761456315')).toBe('tel:+97761456315')
  })

  it('keeps the leading 0 on a domestic number with no country code', () => {
    expect(telHref('061-456315')).toBe('tel:061456315')
  })

  it('does not mistake a mobile 9 for a trunk prefix', () => {
    expect(telHref('+977 980-209-0767')).toBe('tel:+9779802090767')
  })

  it('produces a dialable href for every number shipped on the site', () => {
    for (const n of [
      HOTEL_CONTACT.phone,
      HIMALAYAN_VIEW_CONTACT.mobile,
      HIMALAYAN_VIEW_CONTACT.landline,
    ]) {
      expect(telHref(n)).toMatch(/^tel:\+?\d+$/)
    }
  })
})
