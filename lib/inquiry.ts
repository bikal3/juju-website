// Builds a wa.me deep link from the contact-page inquiry form.
// The static export has no server, so the guest's WhatsApp client carries
// the message — the hotel receives it on the number in HOTEL_CONTACT.

export interface InquiryFields {
  name: string
  email: string
  phone?: string
  checkin?: string
  checkout?: string
  room?: string
  message?: string
}

const LABELS: [keyof InquiryFields, string][] = [
  ['name', 'Name'],
  ['email', 'Email'],
  ['phone', 'Phone'],
  ['checkin', 'Check-in'],
  ['checkout', 'Check-out'],
  ['room', 'Room'],
  ['message', 'Message'],
]

export function buildWhatsAppInquiryUrl(
  fields: InquiryFields,
  whatsappNumber: string
): string {
  const lines = ['New room inquiry from the Hotel JuJu website']

  for (const [key, label] of LABELS) {
    const value = fields[key]?.trim()
    if (value) lines.push(`${label}: ${value}`)
  }

  const digits = whatsappNumber.replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(lines.join('\n'))}`
}
