import type { Metadata } from 'next'
import { metadata as home } from '@/app/page'
import { metadata as rooms } from '@/app/rooms/page'
import { metadata as gallery } from '@/app/gallery/page'
import { metadata as travel } from '@/app/travel/page'
import { metadata as contact } from '@/app/contact/page'
import { generateMetadata as trekMetadata } from '@/app/travel/[slug]/page'
import { TREK_DETAILS } from '@/lib/data'

const canonicalOf = (m: Metadata) => m.alternates?.canonical

const staticPages: [string, ReturnType<typeof canonicalOf>][] = [
  ['home', canonicalOf(home)],
  ['rooms', canonicalOf(rooms)],
  ['gallery', canonicalOf(gallery)],
  ['travel', canonicalOf(travel)],
  ['contact', canonicalOf(contact)],
]

describe('canonical URLs', () => {
  it.each(staticPages)('%s declares its own canonical path', (_name, canonical) => {
    expect(canonical).toBeDefined()
  })

  it('never points a sub-page at the homepage', () => {
    const wrong = staticPages
      .filter(([name, c]) => name !== 'home' && (c === '/' || c === 'https://www.hoteljuju.com.np'))
      .map(([name]) => name)
    expect(wrong).toEqual([])
  })

  it('gives every static page a distinct canonical', () => {
    const values = staticPages.map(([, c]) => c)
    expect(new Set(values).size).toBe(values.length)
  })

  it('gives every trek detail page its own canonical', () => {
    const values = TREK_DETAILS.map(
      (t) => canonicalOf(trekMetadata({ params: { slug: t.slug } })) as string
    )
    expect(values).toEqual(TREK_DETAILS.map((t) => `/travel/${t.slug}/`))
  })
})
