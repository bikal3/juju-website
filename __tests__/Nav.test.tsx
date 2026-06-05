// __tests__/Nav.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Nav from '@/components/Nav'

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('Nav', () => {
  it('renders the hotel logo', () => {
    render(<Nav />)
    expect(screen.getByText('HOTEL JUJU')).toBeInTheDocument()
  })

  it('renders all navigation links', async () => {
    const user = userEvent.setup()
    render(<Nav />)
    // Open mobile menu so both desktop + mobile links are in the DOM
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2) // desktop + mobile
    expect(screen.getAllByRole('link', { name: 'Rooms' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Travel' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Contact' })).toHaveLength(2)
  })

  it('renders the Book Now link pointing to Booking.com', () => {
    render(<Nav />)
    const bookLinks = screen.getAllByRole('link', { name: /book now/i })
    expect(bookLinks.length).toBeGreaterThan(0)
    expect(bookLinks[0]).toHaveAttribute('href', expect.stringContaining('booking.com'))
  })

  it('opens the mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Nav />)
    const button = screen.getByRole('button', { name: 'Open menu' })
    await user.click(button)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })
})
