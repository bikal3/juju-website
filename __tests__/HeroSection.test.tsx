import { render, screen } from '@testing-library/react'
import HeroSection from '@/components/HeroSection'

describe('HeroSection', () => {
  it('renders the title', () => {
    render(<HeroSection title="Hotel JuJu" />)
    expect(screen.getByRole('heading', { name: 'Hotel JuJu' })).toBeInTheDocument()
  })

  it('renders eyebrow and subtitle when provided', () => {
    render(
      <HeroSection
        title="Hotel JuJu"
        eyebrow="Your Partner"
        subtitle="Welcome to Nepal"
      />
    )
    expect(screen.getByText('Your Partner')).toBeInTheDocument()
    expect(screen.getByText('Welcome to Nepal')).toBeInTheDocument()
  })

  it('renders children (CTA buttons)', () => {
    render(
      <HeroSection title="Hotel JuJu">
        <button>Explore Rooms</button>
      </HeroSection>
    )
    expect(screen.getByRole('button', { name: 'Explore Rooms' })).toBeInTheDocument()
  })
})
