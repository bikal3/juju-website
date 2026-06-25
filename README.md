# Hotel JuJu — Official Website

Marketing website for **Hotel JuJu**, a hospitality property in Lakeside Pokhara, Nepal.

**Live site:** [www.hoteljuju.com.np](https://www.hoteljuju.com.np)

---

## Pages

| Page | URL |
|---|---|
| Home | `/` |
| Rooms | `/rooms` |
| Gallery | `/gallery` |
| Travel Partner | `/travel` |
| Trek Detail | `/travel/[slug]` |
| Contact | `/contact` |

## Tech Stack

- **Next.js 14** — App Router, static export
- **Tailwind CSS** — styling with custom brand tokens
- **GitHub Pages** — hosting via GitHub Actions

## Updating Content

All content is centralised in `lib/data.ts`:

- **Hotel contact details & WhatsApp number** — `HOTEL_CONTACT`
- **Room details & amenities** — `ROOMS`
- **Gallery photos** — `GALLERY_SECTIONS`
- **Trek packages** — `TREK_DETAILS`
- **Himalayan View contact** — `HIMALAYAN_VIEW_CONTACT`

## Adding Photos

1. Convert HEIC photos to JPEG using macOS `sips`:
   ```bash
   sips -s format jpeg INPUT.HEIC --out public/images/OUTPUT.jpg --resampleWidth 1200
   ```
2. Add the filename to the relevant section in `lib/data.ts`

## Deployment

Pushes to `main` automatically deploy via GitHub Actions to GitHub Pages.
