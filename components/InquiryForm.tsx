'use client'

import { useState, FormEvent } from 'react'
import { HOTEL_CONTACT, ROOMS } from '@/lib/data'
import { buildWhatsAppInquiryUrl } from '@/lib/inquiry'

const FIELD_CLASS =
  'w-full border border-warm-tint bg-cream px-4 py-2 text-sm focus:border-gold focus:ring-2 focus:ring-gold/40 focus:outline-none transition-colors'
const LABEL_CLASS =
  'block text-xs tracking-wide uppercase text-text-secondary mb-1'

export default function InquiryForm() {
  const [roomId, setRoomId] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const value = (key: string) => String(data.get(key) ?? '')

    // Send the guest-facing room name, not the internal id.
    const selectedRoom = ROOMS.find((room) => room.id === value('room'))

    const url = buildWhatsAppInquiryUrl(
      {
        name: value('name'),
        email: value('email'),
        phone: value('phone'),
        checkin: value('checkin'),
        checkout: value('checkout'),
        room: selectedRoom?.name ?? '',
        message: value('message'),
      },
      HOTEL_CONTACT.whatsapp
    )

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className={LABEL_CLASS}>Full Name *</label>
        <input id="name" name="name" type="text" required className={FIELD_CLASS} />
      </div>

      <div>
        <label htmlFor="email" className={LABEL_CLASS}>Email *</label>
        <input id="email" name="email" type="email" required className={FIELD_CLASS} />
      </div>

      <div>
        <label htmlFor="phone" className={LABEL_CLASS}>Phone (optional)</label>
        <input id="phone" name="phone" type="tel" className={FIELD_CLASS} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="checkin" className={LABEL_CLASS}>Check-in</label>
          <input id="checkin" name="checkin" type="date" className={FIELD_CLASS} />
        </div>
        <div>
          <label htmlFor="checkout" className={LABEL_CLASS}>Check-out</label>
          <input id="checkout" name="checkout" type="date" className={FIELD_CLASS} />
        </div>
      </div>

      <div>
        <label htmlFor="room" className={LABEL_CLASS}>Room Type</label>
        <select
          id="room"
          name="room"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className={FIELD_CLASS}
        >
          <option value="">Select a room type</option>
          {ROOMS.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={LABEL_CLASS}>Message</label>
        <textarea id="message" name="message" rows={4} className={`${FIELD_CLASS} resize-none`} />
      </div>

      <button
        type="submit"
        className="w-full bg-gold text-cream text-xs tracking-widest uppercase py-3 hover:opacity-90 transition-opacity"
      >
        Send Inquiry
      </button>

      <p className="text-text-secondary text-xs">
        Opens WhatsApp with your details ready to send. Prefer email? Write to{' '}
        <a href={`mailto:${HOTEL_CONTACT.email}`} className="text-gold underline">
          {HOTEL_CONTACT.email}
        </a>
        .
      </p>
    </form>
  )
}
