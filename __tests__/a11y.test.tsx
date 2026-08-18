import { render, screen } from '@testing-library/react'
import Nav from '@/components/Nav'
import SkipLink from '@/components/SkipLink'
import { LanguageProvider } from '@/lib/language-context'

jest.mock('next/navigation', () => ({ usePathname: () => '/rooms' }))

const renderNav = () =>
  render(
    <LanguageProvider>
      <Nav />
    </LanguageProvider>
  )

describe('skip link', () => {
  it('is the first focusable element and targets the main landmark', () => {
    render(<SkipLink />)
    const link = screen.getByRole('link', { name: /skip to (main )?content/i })
    expect(link).toHaveAttribute('href', '#main-content')
  })

  it('stays out of the visual flow until it receives focus', () => {
    render(<SkipLink />)
    const link = screen.getByRole('link', { name: /skip to (main )?content/i })
    // sr-only hides it; focus:not-sr-only brings it back for keyboard users.
    expect(link.className).toContain('sr-only')
    expect(link.className).toContain('focus:not-sr-only')
  })
})

describe('nav current-page signalling', () => {
  it('marks the active link with aria-current="page"', () => {
    renderNav()
    const active = screen.getAllByRole('link', { name: /rooms/i })
    expect(active.some((a) => a.getAttribute('aria-current') === 'page')).toBe(true)
  })

  it('leaves aria-current off inactive links', () => {
    renderNav()
    const gallery = screen.getAllByRole('link', { name: /gallery/i })
    expect(gallery.every((a) => a.getAttribute('aria-current') === null)).toBe(true)
  })
})
