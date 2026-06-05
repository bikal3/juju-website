import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renders hotel name', () => {
    render(<Footer />)
    expect(screen.getByText('HOTEL JUJU')).toBeInTheDocument()
  })

  it('renders real contact details', () => {
    render(<Footer />)
    expect(screen.getByText(/Lakeside Pokhara/)).toBeInTheDocument()
    expect(screen.getByText(/061-456315/)).toBeInTheDocument()
    expect(screen.getByText(/info.jujuhotel@gmail.com/)).toBeInTheDocument()
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Hotel JuJu`))).toBeInTheDocument()
  })
})
