'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BOOKING_URL } from '@/lib/data'
import { useLang } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { lang, toggle } = useLang()
  const t = translations[lang].nav

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: t.home },
    { href: '/rooms', label: t.rooms },
    { href: '/gallery', label: t.gallery },
    { href: '/travel', label: t.travel },
    { href: '/contact', label: t.contact },
  ]

  const navBg = scrolled || menuOpen
    ? 'bg-[rgba(20,12,5,0.92)]'
    : 'bg-gradient-to-b from-black/60 to-transparent'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBg}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-playfair text-cream text-xl tracking-widest">
          HOTEL JUJU
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs tracking-widest uppercase transition-colors ${
                pathname === href
                  ? 'text-gold border-b border-gold pb-0.5'
                  : 'text-cream/80 hover:text-cream'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-cream text-xs tracking-widest uppercase px-4 py-2 hover:opacity-90 transition-opacity"
          >
            {t.bookNow}
          </a>
          {/* Language toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="text-xs tracking-widest uppercase text-cream/60 hover:text-cream transition-colors border border-cream/30 px-2 py-1"
          >
            {lang === 'en' ? 'नेपाली' : 'ENG'}
          </button>
        </div>

        {/* Mobile: language + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="text-xs text-cream/60 hover:text-cream border border-cream/30 px-2 py-1"
          >
            {lang === 'en' ? 'नेपाली' : 'ENG'}
          </button>
          <button
            className="text-cream text-xl leading-none"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden px-6 pb-5 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-xs tracking-widest uppercase ${
                pathname === href ? 'text-gold' : 'text-cream/80'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-cream text-xs tracking-widest uppercase px-4 py-2 text-center"
          >
            {t.bookNow}
          </a>
        </div>
      )}
    </nav>
  )
}
