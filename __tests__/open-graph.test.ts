import type { Metadata } from 'next'
import { metadata as home } from '@/app/page'
import { metadata as rooms } from '@/app/rooms/page'
import { metadata as gallery } from '@/app/gallery/page'
import { metadata as travel } from '@/app/travel/page'
import { metadata as contact } from '@/app/contact/page'
import { generateMetadata as trekMetadata } from '@/app/travel/[slug]/page'
import { TREK_DETAILS } from '@/lib/data'

const pages: [string, Metadata][] = [
  ['home', home],
  ['rooms', rooms],
  ['gallery', gallery],
  ['travel', travel],
  ['contact', contact],
  ...TREK_DETAILS.map(
    (t) => [`trek:${t.slug}`, trekMetadata({ params: { slug: t.slug } })] as [string, Metadata]
  ),
]

const og = (m: Metadata) => m.openGraph as Record<string, unknown> | undefined

describe('OpenGraph metadata', () => {
  it.each(pages)('%s ships a share image', (_name, m) => {
    const images = og(m)?.images as unknown[] | undefined
    expect(images?.length).toBeGreaterThan(0)
  })

  it.each(pages)('%s declares its own og:url', (_name, m) => {
    expect(og(m)?.url).toBeDefined()
  })

  it.each(pages)('%s declares the site name', (_name, m) => {
    expect(og(m)?.siteName).toBe('Hotel JuJu')
  })

  it('gives every page a distinct og:url', () => {
    const urls = pages.map(([, m]) => og(m)?.url)
    expect(new Set(urls).size).toBe(pages.length)
  })

  it('keeps og:url and the canonical in agreement', () => {
    for (const [name, m] of pages) {
      expect([name, og(m)?.url]).toEqual([name, m.alternates?.canonical])
    }
  })

  it('gives each trek page its own trek photo as the share image', () => {
    for (const trek of TREK_DETAILS) {
      const images = og(trekMetadata({ params: { slug: trek.slug } }))?.images as
        | { url: string }[]
        | undefined
      expect(images?.[0].url).toBe(trek.image)
    }
  })
})
