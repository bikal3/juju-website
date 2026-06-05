import { render, screen } from '@testing-library/react'
import TrekCard from '@/components/TrekCard'

const mockTrek = {
  name: 'Annapurna Base Camp',
  duration: '5–12 days',
  description: 'Trek through rhododendron forests to the Annapurna Sanctuary.',
  href: 'https://example.com/abc',
}

describe('TrekCard', () => {
  it('renders trek name', () => {
    render(<TrekCard {...mockTrek} />)
    expect(screen.getByText('Annapurna Base Camp')).toBeInTheDocument()
  })

  it('renders duration badge', () => {
    render(<TrekCard {...mockTrek} />)
    expect(screen.getByText('5–12 days')).toBeInTheDocument()
  })

  it('renders Learn More link with correct href', () => {
    render(<TrekCard {...mockTrek} />)
    const link = screen.getByRole('link', { name: /learn more/i })
    expect(link).toHaveAttribute('href', 'https://example.com/abc')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
