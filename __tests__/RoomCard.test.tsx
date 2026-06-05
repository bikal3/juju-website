import { render, screen } from '@testing-library/react'
import RoomCard from '@/components/RoomCard'

const mockRoom = {
  name: 'Standard Room',
  description: 'Fan-cooled room with attached bathroom.',
  amenities: ['Wi-Fi', 'Fan', 'Tea/Coffee Making'],
  imagePlaceholder: 'Standard Room photo',
}

describe('RoomCard', () => {
  it('renders room name', () => {
    render(<RoomCard {...mockRoom} />)
    expect(screen.getByText('Standard Room')).toBeInTheDocument()
  })

  it('renders room description', () => {
    render(<RoomCard {...mockRoom} />)
    expect(screen.getByText('Fan-cooled room with attached bathroom.')).toBeInTheDocument()
  })

  it('renders amenities', () => {
    render(<RoomCard {...mockRoom} />)
    expect(screen.getByText('Wi-Fi')).toBeInTheDocument()
  })

  it('renders View Room link to /rooms', () => {
    render(<RoomCard {...mockRoom} />)
    const link = screen.getByRole('link', { name: /view room/i })
    expect(link).toHaveAttribute('href', '/rooms')
  })
})
