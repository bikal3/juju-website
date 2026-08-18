import { buildWhatsAppInquiryUrl } from '@/lib/inquiry'

const WA = '+977 980-209-0767'

// searchParams.get() already percent-decodes; decoding again corrupts
// literal '%' in guest input.
const textOf = (url: string) => new URL(url).searchParams.get('text') ?? ''

const rawTextParam = (url: string) => url.split('?text=')[1]

describe('buildWhatsAppInquiryUrl', () => {
  it('targets the hotel WhatsApp number with all non-digits stripped', () => {
    const url = buildWhatsAppInquiryUrl({ name: 'Anita', email: 'a@example.com' }, WA)
    expect(url.startsWith('https://wa.me/9779802090767?')).toBe(true)
  })

  it('carries the guest name and email into the message', () => {
    const text = textOf(
      buildWhatsAppInquiryUrl({ name: 'Anita Shrestha', email: 'anita@example.com' }, WA)
    )
    expect(text).toContain('Anita Shrestha')
    expect(text).toContain('anita@example.com')
  })

  it('includes every supplied optional field, each on its own line', () => {
    const text = textOf(
      buildWhatsAppInquiryUrl(
        {
          name: 'Anita',
          email: 'a@example.com',
          phone: '+9779800000000',
          checkin: '2026-09-12',
          checkout: '2026-09-15',
          room: 'Deluxe Double/Twin Bed Room',
          message: 'Do you offer airport pickup?',
        },
        WA
      )
    )
    expect(text).toContain('2026-09-12')
    expect(text).toContain('2026-09-15')
    expect(text).toContain('Deluxe Double/Twin Bed Room')
    expect(text).toContain('Do you offer airport pickup?')
    expect(text.split('\n').length).toBeGreaterThanOrEqual(7)
  })

  it('omits optional fields the guest left blank', () => {
    const text = textOf(
      buildWhatsAppInquiryUrl(
        { name: 'Anita', email: 'a@example.com', phone: '', message: '   ' },
        WA
      )
    )
    expect(text).not.toContain('Phone')
    expect(text).not.toContain('Message')
  })

  it('percent-encodes newlines and reserved characters so the link survives transport', () => {
    const url = buildWhatsAppInquiryUrl(
      { name: 'A&B', email: 'a@example.com', message: 'room #3 / 50% off?' },
      WA
    )
    expect(url).not.toMatch(/[\n ]/)
    expect(rawTextParam(url)).toContain('%0A')
    expect(rawTextParam(url)).toContain('%23')
    expect(textOf(url)).toContain('room #3 / 50% off?')
  })

  it('trims surrounding whitespace from guest input', () => {
    const text = textOf(
      buildWhatsAppInquiryUrl({ name: '  Anita  ', email: ' a@example.com ' }, WA)
    )
    expect(text).toContain('Anita\n')
    expect(text).not.toContain('  Anita')
  })
})
