import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GalleryGrid from '@/components/GalleryGrid'

const photos = [
  { src: '/images/a.jpg', alt: 'First photo' },
  { src: '/images/b.jpg', alt: 'Second photo' },
  { src: '/images/c.jpg', alt: 'Third photo' },
]

const open = async (name: RegExp) => {
  const user = userEvent.setup()
  render(<GalleryGrid photos={photos} />)
  await user.click(screen.getByRole('button', { name }))
  return user
}

describe('GalleryGrid', () => {
  it('exposes each photo as a button so it is keyboard reachable', () => {
    render(<GalleryGrid photos={photos} />)
    expect(screen.getAllByRole('button')).toHaveLength(3)
  })

  it('opens a modal dialog showing the photo that was activated', async () => {
    await open(/second photo/i)
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    const shown = dialog.querySelector('img')?.getAttribute('src') ?? ''
    expect(decodeURIComponent(shown)).toContain('/images/b.jpg')
    expect(dialog).toHaveTextContent('Second photo')
  })

  it('shows no dialog until a photo is chosen', () => {
    render(<GalleryGrid photos={photos} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes on Escape', async () => {
    const user = await open(/first photo/i)
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes via the close button', async () => {
    const user = await open(/first photo/i)
    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('steps to the next photo with the right arrow', async () => {
    const user = await open(/first photo/i)
    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('dialog')).toHaveTextContent(/2 of 3/i)
  })

  it('steps to the previous photo with the left arrow', async () => {
    const user = await open(/second photo/i)
    await user.keyboard('{ArrowLeft}')
    expect(screen.getByRole('dialog')).toHaveTextContent(/1 of 3/i)
  })

  it('wraps around at both ends rather than dead-ending', async () => {
    const user = await open(/first photo/i)
    await user.keyboard('{ArrowLeft}')
    expect(screen.getByRole('dialog')).toHaveTextContent(/3 of 3/i)
    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('dialog')).toHaveTextContent(/1 of 3/i)
  })

  it('labels the dialog for screen readers', async () => {
    await open(/third photo/i)
    expect(screen.getByRole('dialog')).toHaveAccessibleName(/third photo/i)
  })
})
