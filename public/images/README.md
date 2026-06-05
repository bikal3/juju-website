# Images — Hotel JuJu

Drop real photos into this folder, then update the corresponding `<Image>` tags in the page files.

## Required Photos

| File name (suggested) | Used in | Dimensions (min) |
|---|---|---|
| `hero-exterior.jpg` | Home hero | 1920 × 1080 |
| `rooms-hero.jpg` | Rooms page hero | 1920 × 800 |
| `travel-hero.jpg` | Travel page hero | 1920 × 800 |
| `contact-hero.jpg` | Contact page hero | 1920 × 600 |
| `room-standard.jpg` | Standard Room card + detail | 800 × 600 |
| `room-triple.jpg` | Standard Triple Room card + detail | 800 × 600 |
| `room-deluxe.jpg` | Deluxe Room card + detail | 800 × 600 |

## How to Replace a Placeholder

Each placeholder is a `<div className="bg-card-placeholder ...">` element.
Replace it with:

```tsx
import Image from 'next/image'

<div className="relative w-full h-48">
  <Image
    src="/images/room-standard.jpg"
    alt="Standard Room at Hotel JuJu"
    fill
    className="object-cover"
  />
</div>
```

Keep `alt` text descriptive — it helps with SEO and accessibility.
