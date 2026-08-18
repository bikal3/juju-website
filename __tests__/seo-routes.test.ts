import sitemap from '@/app/sitemap'
import robots from '@/app/robots'
import { TREK_DETAILS } from '@/lib/data'

const BASE = 'https://www.hoteljuju.com.np'

describe('sitemap', () => {
  it('lists every public page', () => {
    const urls = sitemap().map((e) => e.url)
    // home, rooms, gallery, travel, contact, privacy
    expect(urls).toHaveLength(6 + TREK_DETAILS.length)
  })

  it('uses trailing slashes so entries match the exported URLs', () => {
    // next.config.js sets trailingSlash: true; a slashless URL costs a 301.
    const offenders = sitemap().map((e) => e.url).filter((u) => !u.endsWith('/'))
    expect(offenders).toEqual([])
  })

  it('points every entry at the canonical host', () => {
    const offenders = sitemap().map((e) => e.url).filter((u) => !u.startsWith(`${BASE}/`))
    expect(offenders).toEqual([])
  })

  it('includes each trek detail page', () => {
    const urls = sitemap().map((e) => e.url)
    for (const trek of TREK_DETAILS) {
      expect(urls).toContain(`${BASE}/travel/${trek.slug}/`)
    }
  })
})

describe('robots', () => {
  it('allows crawlers to index the whole site', () => {
    const rules = robots().rules
    const rule = Array.isArray(rules) ? rules[0] : rules
    expect(rule.userAgent).toBe('*')
    expect(rule.allow).toBe('/')
  })

  it('advertises the sitemap', () => {
    expect(robots().sitemap).toBe(`${BASE}/sitemap.xml`)
  })
})
