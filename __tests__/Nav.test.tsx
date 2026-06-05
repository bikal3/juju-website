// __tests__/Nav.test.tsx
import { render, screen } from '@testing-library/react'
import Nav from '@/components/Nav'

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('Nav', () => {
  it('renders the hotel logo', () => {
    render(<Nav />)
    expect(screen.getByText('HOTEL JUJU')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Nav />)
    expect(screen.getAllByRole('link', { name: 'Home' })).toBeTruthy()
    expect(screen.getAllByRole('link', { name: 'Rooms' })).toBeTruthy()
    expect(screen.getAllByRole('link', { name: 'Travel' })).toBeTruthy()
    expect(screen.getAllByRole('link', { name: 'Contact' })).toBeTruthy()
  })

  it('renders the Book Now link pointing to Booking.com', () => {
    render(<Nav />)
    const bookLinks = screen.getAllByRole('link', { name: /book now/i })
    expect(bookLinks.length).toBeGreaterThan(0)
    expect(bookLinks[0]).toHaveAttribute('href', expect.stringContaining('booking.com'))
  })
})
