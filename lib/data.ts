// lib/data.ts

export const BOOKING_URL =
  'https://www.booking.com/hotel/np/bhairav.en-gb.html'

export const HIMALAYAN_VIEW_URL =
  'https://sites.google.com/view/himalayanwalk-com/home'

export const HIMALAYAN_VIEW_BOOK_URL =
  'https://sites.google.com/view/himalayanwalk-com/book-us-now'

export const HOTEL_CONTACT = {
  name: 'Hotel JuJu',
  address: 'Street 6 Gaurighat, Lakeside Pokhara 06, Nepal',
  phone: '+977 061-456315',
  email: 'info.jujuhotel@gmail.com',
}

const STANDARD_AMENITIES = [
  'Slippers',
  'Wardrobe',
  'Tea/Coffee Making',
  'Reading Light',
  'Wi-Fi',
  'Intercom',
  'Room Service',
  'International TV Channels',
  'Fan',
  'Bathroom Kit',
]

export interface Room {
  id: string
  name: string
  description: string
  longDescription: string
  amenities: string[]
  imagePlaceholder: string
  note: string | null
}

export const ROOMS: Room[] = [
  {
    id: 'standard',
    name: 'Standard Room',
    description: 'Fan-cooled first-floor room with attached bathroom.',
    longDescription:
      'Comfortable first-floor accommodation with fan cooling and a private attached bathroom. Everything you need for a restful stay in Pokhara.',
    amenities: STANDARD_AMENITIES,
    imagePlaceholder: 'Standard Room photo',
    note: null,
  },
  {
    id: 'triple',
    name: 'Standard Triple Room',
    description: 'Family room — 1 queen bed + 1 single bed, sleeps 3 adults.',
    longDescription:
      'Ideal for families or small groups, this room features one queen bed and one single bed, comfortably sleeping three adults with all standard amenities.',
    amenities: STANDARD_AMENITIES,
    imagePlaceholder: 'Standard Triple Room photo',
    note: 'Only 3 triple rooms available — ideal for families',
  },
  {
    id: 'deluxe',
    name: 'Deluxe Double/Twin Bed Room',
    description: 'Second floor room with private balcony and remote A/C.',
    longDescription:
      'Our premium room on the second floor features a private balcony, remote-controlled air conditioning, and all standard amenities for a superior stay.',
    amenities: [...STANDARD_AMENITIES, 'Air Conditioning'],
    imagePlaceholder: 'Deluxe Room photo',
    note: null,
  },
]

const BASE_TREK_URL =
  'https://sites.google.com/view/himalayanwalk-com/trekking-pakages'

export interface Trek {
  name: string
  duration: string
  description: string
  href: string
}

export const TREKS: Trek[] = [
  {
    name: 'Annapurna Base Camp',
    duration: '5–12 days',
    description:
      'Trek through rhododendron forests and alpine meadows to the heart of the Annapurna Sanctuary.',
    href: `${BASE_TREK_URL}/annapurna-base-camp`,
  },
  {
    name: 'Mardi Himal Trek',
    duration: '3–8/9 days',
    description:
      'A quieter alternative to ABC offering spectacular views of Mardi Himal and Machhapuchhre.',
    href: `${BASE_TREK_URL}/mardi-himal`,
  },
  {
    name: 'Annapurna Circuit',
    duration: '12–20 days',
    description:
      "One of Nepal's classic routes — a full circuit of the Annapurna massif crossing the Thorong La pass.",
    href: `${BASE_TREK_URL}/annapurna-circuit`,
  },
  {
    name: 'Manaslu Circuit',
    duration: '10–12 days',
    description:
      "A remote and dramatic circuit around the world's eighth-highest peak through traditional Tibetan villages.",
    href: `${BASE_TREK_URL}/manaslu-trek`,
  },
  {
    name: 'Poon Hill',
    duration: '3–8/9 days',
    description:
      'The most popular sunrise viewpoint in Nepal — panoramic views of the Annapurna and Dhaulagiri ranges.',
    href: `${BASE_TREK_URL}/poon-hill`,
  },
  {
    name: 'Korchan / Khumai Dhada Hill',
    duration: '2–3 days',
    description:
      'A short, accessible hike near Pokhara with rewarding hilltop views — perfect for a quick mountain escape.',
    href: `${BASE_TREK_URL}/korchan-khumai-dhada`,
  },
]

export const HIMALAYAN_VIEW_SERVICES = [
  {
    icon: '🧭',
    title: 'Trekking Packages',
    text: "Guided treks from weekend to multi-week expeditions across Nepal's iconic routes.",
    href: HIMALAYAN_VIEW_URL,
  },
  {
    icon: '🧑‍🦯',
    title: 'Hire a Guide / Porter',
    text: 'Experienced local guides and porters for a safe, enriching mountain experience.',
    href: 'https://sites.google.com/view/himalayanwalk-com/hire-guide-porter',
  },
  {
    icon: '🎒',
    title: 'Trekking Gear',
    text: 'Quality gear rental and sales for all your Himalayan adventure needs.',
    href: 'https://sites.google.com/view/himalayanwalk-com/trekking-gear',
  },
]
