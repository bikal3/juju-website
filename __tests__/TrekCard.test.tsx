import { render, screen } from '@testing-library/react'
import TrekCard from '@/components/TrekCard'

const mockTrek = {
  name: 'Annapurna Base Camp',
  duration: '8 days',
  difficulty: 'Moderate',
  description: 'Trek through rhododendron forests to the Annapurna Sanctuary.',
  slug: 'annapurna-base-camp',
  image: '/images/trek-annapurna-base-camp.jpg',
  imageAlt: 'Trekker beside the Annapurna Base Camp welcome sign at 4,130 m',
}

describe('TrekCard', () => {
  it('renders trek name', () => {
    render(<TrekCard {...mockTrek} />)
    expect(screen.getByText('Annapurna Base Camp')).toBeInTheDocument()
  })

  it('renders duration badge', () => {
    render(<TrekCard {...mockTrek} />)
    expect(screen.getByText('8 days')).toBeInTheDocument()
  })

  it('renders difficulty badge', () => {
    render(<TrekCard {...mockTrek} />)
    expect(screen.getByText('Moderate')).toBeInTheDocument()
  })

  it('renders Learn More link to the trek detail page', () => {
    render(<TrekCard {...mockTrek} />)
    const link = screen.getByRole('link', { name: /learn more/i })
    expect(link).toHaveAttribute('href', '/travel/annapurna-base-camp')
  })
})
