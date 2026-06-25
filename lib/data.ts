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
  // Replace with the hotel's WhatsApp-enabled mobile number
  whatsapp: '+9779800000000',
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
  imageSrc: string
  imageAlt: string
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
    imageSrc: '/images/room-standard.jpg',
    imageAlt: 'Standard Room at Hotel JuJu — comfortable double bed with decorative gold diamond pattern wall',
    note: null,
  },
  {
    id: 'triple',
    name: 'Standard Triple Room',
    description: 'Family room — 1 queen bed + 1 single bed, sleeps 3 adults.',
    longDescription:
      'Ideal for families or small groups, this room features one queen bed and one single bed, comfortably sleeping three adults with all standard amenities.',
    amenities: STANDARD_AMENITIES,
    imageSrc: '/images/room-triple.jpg',
    imageAlt: 'Standard Triple Room at Hotel JuJu — spacious room with queen bed and single bed for up to 3 guests',
    note: 'Only 3 triple rooms available — ideal for families',
  },
  {
    id: 'deluxe',
    name: 'Deluxe Double/Twin Bed Room',
    description: 'Second floor room with private balcony and remote A/C.',
    longDescription:
      'Our premium room on the second floor features a private balcony, remote-controlled air conditioning, and all standard amenities for a superior stay.',
    amenities: [...STANDARD_AMENITIES, 'Air Conditioning'],
    imageSrc: '/images/room-deluxe.jpg',
    imageAlt: 'Deluxe Room at Hotel JuJu — modern room with TV, desk, and private balcony',
    note: null,
  },
]

export interface TrekDay {
  day: number
  title: string
  note?: string
}

export interface TrekDetail {
  slug: string
  name: string
  duration: string
  description: string
  overview: string
  difficulty: string
  maxAltitude: string
  highlights: string[]
  itinerary: TrekDay[]
}

export const TREK_DETAILS: TrekDetail[] = [
  {
    slug: 'annapurna-base-camp',
    name: 'Annapurna Base Camp',
    duration: '8 days',
    difficulty: 'Moderate',
    maxAltitude: '4,130 m',
    description:
      'Trek through rhododendron forests and alpine meadows to the heart of the Annapurna Sanctuary.',
    overview:
      'Annapurna Base Camp sits inside the crown of the Himalayas at 4,130 metres above sea level, offering stunning 360-degree views of the peaks. The route passes through Chomrong — one of the oldest Gurung villages — and leads you face-to-face with Annapurna I, the tenth-highest mountain in the world at 8,091 m. The trek finishes with a soak in the natural hot springs at Jhinu Dhada before returning to Pokhara.',
    highlights: [
      '360° views from Annapurna Base Camp at 4,130 m',
      'Annapurna I (8,091 m) — 10th highest peak in the world',
      'Chomrong — one of Nepal\'s oldest Gurung villages',
      'Natural hot water springs at Jhinu Dhada',
      'Rhododendron forests in full bloom (March–April)',
      'Iconic views of Machhapuchhre (Fishtail Mountain)',
    ],
    itinerary: [
      { day: 1, title: 'Permit day & Pokhara sightseeing', note: 'Obtain ACAP and TIMS permits in Pokhara' },
      { day: 2, title: 'Drive to Nayapul → Trek to Jhinu Dhada (1,700 m)' },
      { day: 3, title: 'Jhinu Dhada → Bamboo (2,310 m)' },
      { day: 4, title: 'Bamboo → Deurali (3,200 m)' },
      { day: 5, title: 'Deurali → Annapurna Base Camp (4,130 m)' },
      { day: 6, title: 'ABC sunrise → Trek to Bamboo / Dovan (2,600 m)', note: 'Wake early for the mountain colour-change at sunrise' },
      { day: 7, title: 'Bamboo → Jhinu Dhada (1,700 m)', note: 'Relax in the natural hot water springs' },
      { day: 8, title: 'Jhinu Dhada → Drive back to Pokhara (830 m)' },
    ],
  },
  {
    slug: 'mardi-himal',
    name: 'Mardi Himal Trek',
    duration: '6 days',
    difficulty: 'Moderate',
    maxAltitude: '4,500 m',
    description:
      'A quieter alternative to ABC offering spectacular views of Mardi Himal and Machhapuchhre.',
    overview:
      'Mardi Himal is a moderate high-altitude trek that requires no mountaineering experience, making it an excellent acclimatisation route. It is one of the shortest treks in the Annapurna region and rewards trekkers with iconic views of Machhapuchhre (Fishtail Mountain). Because altitude can be lost quickly from any point on the route, it is a safe and accessible choice for those new to Himalayan trekking.',
    highlights: [
      'Spectacular close-up views of Machhapuchhre (Fishtail)',
      'Mardi Himal Base Camp at 4,500 m',
      'Off-the-beaten-path — far fewer crowds than ABC',
      'Natural hot springs at Jhinu Dhada on descent',
      'Good acclimatisation trek before longer routes',
    ],
    itinerary: [
      { day: 1, title: 'Drive to Phedi → Trek to Deurali (2,200 m)' },
      { day: 2, title: 'Deurali → Low Camp (2,900 m)' },
      { day: 3, title: 'Low Camp → High Camp (3,585 m)' },
      { day: 4, title: 'High Camp → Mardi Himal Base Camp (4,500 m) → Middle Camp (3,200 m)', note: 'Early start for clearest mountain views' },
      { day: 5, title: 'Middle Camp → Jhinu Dhada (1,700 m)', note: 'Natural hot water spring stop' },
      { day: 6, title: 'Jhinu Dhada → Drive to Pokhara (831 m)' },
    ],
  },
  {
    slug: 'annapurna-circuit',
    name: 'Annapurna Circuit',
    duration: '16 days',
    difficulty: 'Moderate to Strenuous',
    maxAltitude: '5,416 m (Thorong La Pass)',
    description:
      "One of Nepal's classic routes — a full circuit of the Annapurna massif crossing the Thorong La pass.",
    overview:
      "The Annapurna Circuit is widely considered one of the world's great long-distance treks — a journey of extraordinary variety passing through subtropical forest, alpine meadows, and high desert plateau. The route crosses Thorong La pass at 5,416 m, one of the world's highest trekking passes, and skirts the shore of Tilicho Lake, the world's highest lake at 4,919 m. The trail winds through villages of several distinct ethnic groups, offering as rich a cultural experience as a scenic one.",
    highlights: [
      'Thorong La Pass (5,416 m) — one of the world\'s highest trekking passes',
      'Tilicho Lake (4,919 m) — highest lake in the world',
      'Muktinath — sacred Hindu and Buddhist pilgrimage site',
      'Diverse landscapes: subtropical forest to high-altitude desert',
      'Multi-ethnic villages including Gurung, Thakali, and Tibetan communities',
      'Optional side trek: Nar-Phu Valley (remote restricted area)',
    ],
    itinerary: [
      { day: 1, title: 'Kathmandu → Drive to Khudi (2,626 m) — approx. 7 hrs' },
      { day: 2, title: 'Khudi → Sirung (1,220 m) — 7 hrs' },
      { day: 3, title: 'Sirung → Jagat (1,300 m) — 6 hrs' },
      { day: 4, title: 'Jagat → Dharapani (1,830 m) — 7 hrs' },
      { day: 5, title: 'Dharapani → Chame (2,710 m) — 6 hrs' },
      { day: 6, title: 'Chame → Pisang (3,300 m) — 5 hrs' },
      { day: 7, title: 'Pisang → Manang (3,540 m) — 6 hrs' },
      { day: 8, title: 'Acclimatisation day in Manang', note: 'Day trip to Praken Gompa for altitude adjustment' },
      { day: 9, title: 'Manang → Yak Kharka (4,110 m) — 4 hrs' },
      { day: 10, title: 'Yak Kharka → Thorong Phedi (4,600 m) — 3 hrs' },
      { day: 11, title: 'Thorong Phedi → Thorong La Pass (5,416 m) → Muktinath (3,710 m)', note: 'The defining day — an early start is essential' },
      { day: 12, title: 'Muktinath → Marpha (2,670 m) — 6 hrs' },
      { day: 13, title: 'Marpha → Kalopani (2,530 m) — 5 hrs' },
      { day: 14, title: 'Kalopani → Tatopani (1,200 m) — 6 hrs' },
      { day: 15, title: 'Tatopani → Beni (830 m) — 6 hrs' },
      { day: 16, title: 'Beni → Drive to Pokhara (830 m) — 4 hrs' },
    ],
  },
  {
    slug: 'manaslu-circuit',
    name: 'Manaslu Circuit',
    duration: '13 days',
    difficulty: 'Strenuous',
    maxAltitude: '5,100 m (Larke La Pass)',
    description:
      "A remote and dramatic circuit around the world's eighth-highest peak through traditional Tibetan villages.",
    overview:
      "The Manaslu Trek is a demanding and deeply rewarding journey that circuits the world's eighth-highest peak (8,163 m). Covering 140 km over 8–9 days of trekking, the route ascends from 900 m to 5,100 m — a 4,200 m gain. The trail passes through remote Tibetan-influenced villages with few other trekkers, crossing the Larke La pass (5,100 m) as its high point. A restricted area permit is required, keeping this route far less crowded than the Annapurna region.",
    highlights: [
      'Larke La Pass (5,100 m) — dramatic high-altitude crossing',
      'Views of Manaslu (8,163 m) — 8th highest peak in the world',
      'Remote Tibetan-influenced villages of Samagaon and Samdo',
      'Manaslu Base Camp visit (4,400 m)',
      'Restricted area — far fewer trekkers than Annapurna routes',
      '100% documented success rate for this circuit',
    ],
    itinerary: [
      { day: 1, title: 'Drive to Machhakhola (900 m) from Pokhara / Kathmandu' },
      { day: 2, title: 'Machhakhola → Jagat (1,370 m) — 20 km walk' },
      { day: 3, title: 'Jagat → Deng (1,865 m) — 21 km walk' },
      { day: 4, title: 'Deng → Namrung (2,630 m) — 20 km walk' },
      { day: 5, title: 'Namrung → Shyala (3,500 m)' },
      { day: 6, title: 'Acclimatisation day at Shyala', note: 'Monastery visit, 6–8 hrs gentle activity' },
      { day: 7, title: 'Shyala → Samagaon (3,570 m)' },
      { day: 8, title: 'Rest day at Samagaon + Manaslu Base Camp visit (4,400 m)' },
      { day: 9, title: 'Samagaon → Samdo (3,800 m)' },
      { day: 10, title: 'Samdo → Dharamshala (4,474 m) — 6.2 km' },
      { day: 11, title: 'Dharamshala → Larke La Pass (5,100 m) → Bhimtang (3,700 m)', note: 'The crux of the circuit — early start required' },
      { day: 12, title: 'Bhimtang → Tilijhe (2,250 m) — 18 km' },
      { day: 13, title: 'Tilijhe → Dharapani → Drive to Pokhara (830 m)' },
    ],
  },
  {
    slug: 'poon-hill',
    name: 'Poon Hill',
    duration: '5 days',
    difficulty: 'Easy to Moderate',
    maxAltitude: '3,210 m (Poon Hill viewpoint)',
    description:
      'The most popular sunrise viewpoint in Nepal — panoramic views of the Annapurna and Dhaulagiri ranges.',
    overview:
      "The Ghorepani Poon Hill Trek is a classic short circuit in the lower Annapurna Range. The centrepiece is the sunrise from Poon Hill at 3,210 m, where the panorama takes in Annapurna South, Annapurna I–IV, Dhaulagiri, Lamjung Himal, Gangapurna, Machhapuchhare, and Manaslu all at once. The trail passes through rhododendron forest, terraced farmland, and the warm villages of the Gurung and Magar peoples. Ghorepani village (2,874 m) sits within the Annapurna Conservation Area and serves as the overnight base before the pre-dawn summit walk.",
    highlights: [
      'Poon Hill sunrise (3,210 m) — Nepal\'s most iconic viewpoint',
      'Panoramic views of 8 Himalayan peaks including Dhaulagiri and Annapurna',
      'Rhododendron forests — spectacular in full bloom (March–April)',
      'Gurung and Magar village culture along the trail',
      'Ideal first trek — accessible, well-serviced, no technical skills needed',
      'Ghandruk — a beautiful traditional Gurung hilltop village',
    ],
    itinerary: [
      { day: 1, title: 'Permit day & Pokhara sightseeing', note: 'Obtain ACAP and TIMS permits in Pokhara' },
      { day: 2, title: 'Drive to Nayapul → Trek to Ulleri (2,055 m)' },
      { day: 3, title: 'Ulleri → Ghorepani (2,850 m)' },
      { day: 4, title: 'Pre-dawn hike to Poon Hill (3,210 m) for sunrise → Trek to Ghandruk (2,012 m)', note: 'Set off at ~5 am for the sunrise views' },
      { day: 5, title: 'Ghandruk → Nayapul → Drive to Pokhara (830 m)' },
    ],
  },
  {
    slug: 'korchan-khumai-dhada',
    name: 'Korchan / Khumai Dhada Hill',
    duration: '5 days',
    difficulty: 'Easy to Moderate',
    maxAltitude: '3,400 m (Korchan Hill)',
    description:
      'A short, accessible hike near Pokhara with rewarding hilltop views — perfect for a quick mountain escape.',
    overview:
      'Khumai Dhada (3,245 m) and Korchan Hill (3,400 m) offer a quieter, less-travelled alternative to the busy Annapurna trails. Trekkers rise early on day four to ascend 200 m to Korchan Hill for stunning views of Machhapuchhre and the full Annapurna Range. The route starts with a short drive from Pokhara, making it an ideal choice for travellers with limited time who still want a genuine mountain experience.',
    highlights: [
      'Views of Machhapuchhre (Fishtail) and the Annapurna Range from Korchan Hill',
      'Far fewer trekkers than the main Annapurna routes',
      'Close to Pokhara — minimal travel time',
      'Khumai Dhada ridge walk at 3,245 m',
      'Ideal for a short mountain escape of 2–3 days trekking',
    ],
    itinerary: [
      { day: 1, title: 'Permit day & Pokhara sightseeing', note: 'Obtain ACAP and TIMS permits in Pokhara' },
      { day: 2, title: 'Drive to Sharipakha → Trek to Hille' },
      { day: 3, title: 'Hille → Khumai Dhada (3,245 m)' },
      { day: 4, title: 'Pre-dawn hike to Korchan Hill (3,400 m) for sunrise → Return to Khumai Dhada → Trek down to Hille (return)', note: 'Early start for clear mountain views' },
      { day: 5, title: 'Jeep from Sharipakha (or trek to Tuse) → Drive to Pokhara' },
    ],
  },
]

// Lightweight version used by TrekCard grid on the travel page
export interface Trek {
  slug: string
  name: string
  duration: string
  description: string
}

export const TREKS: Trek[] = TREK_DETAILS.map(({ slug, name, duration, description }) => ({
  slug,
  name,
  duration,
  description,
}))

export const HIMALAYAN_VIEW_CONTACT = {
  address: 'Barahi Path, Lakeside-6, Pokhara, Nepal',
  manager: 'Anil Bijukchhe',
  mobile: '+977 9802090767',
  landline: '+977 061 456674',
  email: 'info.himalayanwalk@gmail.com',
}

export const HOME_FEATURES = [
  {
    icon: '🏔️',
    title: 'Himalayan Gateway',
    text: "Perfect base for trekking & exploration into Nepal's iconic mountain regions.",
  },
  {
    icon: '🤝',
    title: 'Warm Hospitality',
    text: 'Authentic Nepali welcome — our staff treats every guest like family.',
  },
  {
    icon: '🗺️',
    title: 'Local Expertise',
    text: 'Trusted travel partner connections to get the most out of your Nepal visit.',
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

export interface GalleryPhoto {
  src: string
  alt: string
}

export interface GallerySection {
  title: string
  photos: GalleryPhoto[]
}

export const GALLERY_SECTIONS: GallerySection[] = [
  {
    title: 'Restaurant & Bar',
    photos: [
      { src: '/images/restaurant-bar.jpg', alt: 'Hotel JuJu restaurant bar with atmospheric LED lighting and plants' },
      { src: '/images/restaurant-interior.jpg', alt: 'Hotel JuJu restaurant interior with warm orange walls and wicker lights' },
      { src: '/images/restaurant-counter.jpg', alt: 'Hotel JuJu bar counter' },
    ],
  },
  {
    title: 'Standard Rooms',
    photos: [
      { src: '/images/room-standard.jpg', alt: 'Standard room with gold diamond pattern feature wall' },
      { src: '/images/gallery-standard-2.jpg', alt: 'Standard room at Hotel JuJu' },
      { src: '/images/gallery-standard-3.jpg', alt: 'Standard room interior view' },
    ],
  },
  {
    title: 'Standard Triple Rooms',
    photos: [
      { src: '/images/room-triple.jpg', alt: 'Standard triple room panoramic view' },
      { src: '/images/gallery-triple-2.jpg', alt: 'Triple room with queen bed and single bed' },
      { src: '/images/gallery-triple-3.jpg', alt: 'Standard triple room at Hotel JuJu' },
    ],
  },
  {
    title: 'Deluxe Rooms',
    photos: [
      { src: '/images/room-deluxe.jpg', alt: 'Deluxe room with TV and work desk' },
      { src: '/images/gallery-deluxe-2.jpg', alt: 'Deluxe room interior at Hotel JuJu' },
      { src: '/images/gallery-deluxe-3.jpg', alt: 'Deluxe room with decorative wall feature' },
    ],
  },
  {
    title: 'Bathroom',
    photos: [
      { src: '/images/gallery-bathroom.jpg', alt: 'Clean modern bathroom at Hotel JuJu' },
    ],
  },
  {
    title: 'Hotel Exterior',
    photos: [
      { src: '/images/hero-exterior.jpg', alt: 'Hotel JuJu exterior street view in Lakeside Pokhara' },
      { src: '/images/contact-hero.jpg', alt: 'Hotel JuJu entrance with Juju Cafe sign and flowers' },
    ],
  },
]
