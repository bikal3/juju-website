import { TREK_DETAILS, TREKS, ROOMS } from '@/lib/data'

describe('trek image alt text', () => {
  it('gives every trek a hand-written alt describing the photo', () => {
    for (const trek of TREK_DETAILS) {
      expect(typeof trek.imageAlt).toBe('string')
      expect(trek.imageAlt.length).toBeGreaterThan(20)
    }
  })

  it('never stutters "Trek trek" for treks whose name ends in Trek', () => {
    for (const trek of TREKS) {
      expect(trek.imageAlt.toLowerCase()).not.toMatch(/trek\s+trek/)
    }
  })
})

describe('trek itinerary altitudes', () => {
  const metres = (s: string) =>
    [...s.matchAll(/([\d,]+)\s*m\b/g)].map((m) => Number(m[1].replace(/,/g, '')))

  it('states one consistent altitude for Pokhara throughout', () => {
    const pokhara = new Set<number>()
    for (const trek of TREK_DETAILS) {
      for (const day of trek.itinerary) {
        for (const m of day.title.matchAll(/Pokhara\s*\(([\d,]+)\s*m\)/g)) {
          pokhara.add(Number(m[1].replace(/,/g, '')))
        }
      }
    }
    expect([...pokhara]).toEqual([830])
  })

  it('states one consistent altitude for Ghorepani', () => {
    const poon = TREK_DETAILS.find((t) => t.slug === 'poon-hill')!
    const inOverview = metres(poon.overview).filter((v) => v > 2800 && v < 2900)
    const inItinerary = poon.itinerary
      .filter((d) => /Ghorepani/.test(d.title))
      .flatMap((d) => metres(d.title))
      .filter((v) => v > 2800 && v < 2900)
    expect(new Set([...inOverview, ...inItinerary]).size).toBe(1)
  })
})

describe('factual claims', () => {
  it('does not claim Tilicho is the highest lake in the world', () => {
    const circuit = TREK_DETAILS.find((t) => t.slug === 'annapurna-circuit')!
    const prose = [circuit.overview, ...circuit.highlights].join(' ').toLowerCase()
    expect(prose).not.toMatch(/world's highest lake\b/)
    expect(prose).not.toMatch(/—\s*highest lake in the world/)
  })
})

describe('room deep links', () => {
  it('gives every room a slug usable as an anchor target', () => {
    for (const room of ROOMS) {
      expect(room.id).toMatch(/^[a-z][a-z0-9-]*$/)
    }
  })
})
