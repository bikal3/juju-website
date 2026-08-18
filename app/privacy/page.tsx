import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import { HOTEL_CONTACT } from '@/lib/data'
import { telHref } from '@/lib/phone'
import { pageSeo } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Privacy Policy — Hotel JuJu',
  description:
    'How Hotel JuJu handles the information you share through this website — what we collect, what we do not, and who to contact.',
  ...pageSeo({
    path: '/privacy/',
    title: 'Privacy Policy — Hotel JuJu',
    description: 'How Hotel JuJu handles information shared through this website.',
    image: '/images/hero-exterior.jpg',
    imageAlt: 'Hotel JuJu exterior — Lakeside Pokhara, Nepal',
  }),
}

/** Update when the substance of this policy changes. */
const LAST_UPDATED = '18 August 2026'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-playfair text-2xl font-normal mb-4">{title}</h2>
      <div className="text-text-secondary leading-relaxed space-y-4">{children}</div>
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <>
      <HeroSection
        height="short"
        title="Privacy Policy"
        subtitle="What we collect, and what we don't"
        imageSrc="/images/hero-exterior.jpg"
        imageAlt="Hotel JuJu exterior — Lakeside Pokhara, Nepal"
      />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-gold text-xs tracking-[3px] uppercase mb-10">
          Last updated {LAST_UPDATED}
        </p>

        <Section title="The short version">
          <p>
            This website sets no cookies, runs no analytics, and does not track you.
            We do not have a server that stores your details — the enquiry form hands
            your message to WhatsApp on your own device, and nothing is recorded here.
          </p>
        </Section>

        <Section title="The enquiry form">
          <p>
            The form on our{' '}
            <Link href="/contact" className="text-gold underline underline-offset-4">
              Contact page
            </Link>{' '}
            asks for your name, email address, and optionally your phone number, travel
            dates, room preference and a message.
          </p>
          <p>
            When you press <em>Send Inquiry</em>, your browser assembles those details
            into a WhatsApp message addressed to the hotel. Nothing is submitted to this
            website, and no copy is kept here. The message itself is delivered by
            WhatsApp under{' '}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline underline-offset-4"
            >
              their privacy policy
            </a>
            . If you would rather not use WhatsApp, email us directly instead.
          </p>
          <p>
            Once we receive an enquiry we keep it only as long as needed to answer you
            and handle any resulting booking.
          </p>
        </Section>

        <Section title="Third parties we rely on">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-text-primary font-normal">Google Maps</strong> — the
              Contact page embeds a map. Loading it lets Google see your IP address and
              browser details. No other page loads it.
            </li>
            <li>
              <strong className="text-text-primary font-normal">GitHub Pages</strong> — this
              site is hosted by GitHub, whose servers keep standard access logs.
            </li>
            <li>
              <strong className="text-text-primary font-normal">Booking.com and Himalayan
              View</strong> — our Book Now and trekking links take you to their sites,
              which have their own policies. We share nothing with them about you.
            </li>
          </ul>
          <p>
            Our typefaces are served from this site rather than from Google Fonts, so
            simply reading these pages sends nothing to Google.
          </p>
        </Section>

        <Section title="Your choices">
          <p>
            Because we hold nothing automatically, there is little to request access to.
            If you have sent us an enquiry and would like us to delete it, or want to know
            what we still hold, write to us and we will act on it.
          </p>
        </Section>

        <Section title="Contact">
          <address className="not-italic space-y-1">
            <p>{HOTEL_CONTACT.name}</p>
            <p>{HOTEL_CONTACT.address}</p>
            <p>
              <a
                href={`mailto:${HOTEL_CONTACT.email}`}
                className="text-gold underline underline-offset-4"
              >
                {HOTEL_CONTACT.email}
              </a>
            </p>
            <p>
              <a
                href={telHref(HOTEL_CONTACT.phone)}
                className="text-gold underline underline-offset-4"
              >
                {HOTEL_CONTACT.phone}
              </a>
            </p>
          </address>
        </Section>
      </div>
    </>
  )
}
