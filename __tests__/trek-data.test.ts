import fs from 'fs'
import path from 'path'
import { TREKS, TREK_DETAILS } from '@/lib/data'

describe('trek card imagery', () => {
  it('gives every trek its own photo rather than the hotel exterior fallback', () => {
    const fallenBack = TREKS.filter((t) => t.image === '/images/hero-exterior.jpg')
    expect(fallenBack.map((t) => t.slug)).toEqual([])
  })

  it('points every trek at an image file that exists on disk', () => {
    const missing = TREKS.filter(
      (t) => !fs.existsSync(path.join(process.cwd(), 'public', t.image))
    )
    expect(missing.map((t) => `${t.slug} -> ${t.image}`)).toEqual([])
  })

  it('gives every trek a distinct photo', () => {
    const images = TREKS.map((t) => t.image)
    expect(new Set(images).size).toBe(images.length)
  })

  it('derives one card per trek detail entry', () => {
    expect(TREKS.map((t) => t.slug)).toEqual(TREK_DETAILS.map((t) => t.slug))
  })
})
