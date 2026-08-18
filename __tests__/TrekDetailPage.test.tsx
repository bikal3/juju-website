import { render } from '@testing-library/react'
import TrekDetailPage from '@/app/travel/[slug]/page'
import { TREK_DETAILS } from '@/lib/data'

// next/image may wrap src in a loader URL (/_next/image?url=...), so compare
// against the decoded value rather than the raw attribute.
const imageSrcs = (root: HTMLElement) =>
  Array.from(root.querySelectorAll('img')).map((i) =>
    decodeURIComponent(i.getAttribute('src') ?? '')
  )

describe('trek detail page', () => {
  it.each(TREK_DETAILS.map((t) => [t.slug, t] as const))(
    '%s shows its trek photo in the hero',
    (_slug, trek) => {
      const { container } = render(<TrekDetailPage params={{ slug: trek.slug }} />)
      expect(imageSrcs(container)[0]).toContain(trek.image)
    }
  )

  it('never illustrates a trek with the hotel exterior', () => {
    for (const trek of TREK_DETAILS) {
      const { container, unmount } = render(<TrekDetailPage params={{ slug: trek.slug }} />)
      expect(imageSrcs(container).filter((s) => s.includes('hero-exterior'))).toEqual([])
      unmount()
    }
  })
})
