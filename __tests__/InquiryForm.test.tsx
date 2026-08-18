import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InquiryForm from '@/components/InquiryForm'
import { HOTEL_CONTACT } from '@/lib/data'

const openSpy = jest.fn()

beforeEach(() => {
  openSpy.mockReset()
  window.open = openSpy as unknown as typeof window.open
})

const submittedUrl = () => String(openSpy.mock.calls[0][0])

describe('InquiryForm', () => {
  it('renders every inquiry field', () => {
    render(<InquiryForm />)
    for (const label of [/full name/i, /email/i, /phone/i, /check-in/i, /check-out/i, /room type/i, /message/i]) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }
  })

  it('opens a WhatsApp deep link to the hotel carrying the guest details', async () => {
    const user = userEvent.setup()
    render(<InquiryForm />)

    await user.type(screen.getByLabelText(/full name/i), 'Anita Shrestha')
    await user.type(screen.getByLabelText(/email/i), 'anita@example.com')
    await user.type(screen.getByLabelText(/check-in/i), '2026-09-12')
    await user.selectOptions(screen.getByLabelText(/room type/i), 'deluxe')
    await user.type(screen.getByLabelText(/message/i), 'Airport pickup?')
    await user.click(screen.getByRole('button', { name: /send inquiry/i }))

    expect(openSpy).toHaveBeenCalledTimes(1)
    const url = submittedUrl()
    expect(url).toContain(`wa.me/${HOTEL_CONTACT.whatsapp.replace(/\D/g, '')}`)

    const text = new URL(url).searchParams.get('text') ?? ''
    expect(text).toContain('Anita Shrestha')
    expect(text).toContain('anita@example.com')
    expect(text).toContain('2026-09-12')
    expect(text).toContain('Airport pickup?')
  })

  it('sends the room name rather than its internal id', async () => {
    const user = userEvent.setup()
    render(<InquiryForm />)
    await user.type(screen.getByLabelText(/full name/i), 'Anita')
    await user.type(screen.getByLabelText(/email/i), 'a@example.com')
    await user.selectOptions(screen.getByLabelText(/room type/i), 'deluxe')
    await user.click(screen.getByRole('button', { name: /send inquiry/i }))

    const text = new URL(submittedUrl()).searchParams.get('text') ?? ''
    expect(text).toContain('Deluxe Double/Twin Bed Room')
    expect(text).not.toContain('Room: deluxe')
  })

  it('opens the link in a new tab without leaking the referrer', async () => {
    const user = userEvent.setup()
    render(<InquiryForm />)
    await user.type(screen.getByLabelText(/full name/i), 'Anita')
    await user.type(screen.getByLabelText(/email/i), 'a@example.com')
    await user.click(screen.getByRole('button', { name: /send inquiry/i }))

    expect(openSpy).toHaveBeenCalledWith(expect.any(String), '_blank', 'noopener,noreferrer')
  })

  it('never navigates the browser to a mailto: form action', () => {
    const { container } = render(<InquiryForm />)
    const form = container.querySelector('form')
    // Absent attributes are the desired state, so coalesce before matching.
    expect(form?.getAttribute('action') ?? '').not.toMatch(/^mailto:/)
    expect(form?.getAttribute('method') ?? '').not.toMatch(/post/i)
  })

  it('shows no developer-facing setup copy to guests', () => {
    render(<InquiryForm />)
    expect(screen.queryByText(/formspree/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/opens your email client/i)).not.toBeInTheDocument()
  })
})
