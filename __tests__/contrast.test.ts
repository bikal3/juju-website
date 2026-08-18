import { palette } from '@/lib/palette'

const srgb = (c: number) => {
  const v = c / 255
  return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
}
const hex = (h: string) => {
  const s = h.replace('#', '')
  return [0, 2, 4].map((i) => parseInt(s.slice(i, i + 2), 16))
}
const luminance = ([r, g, b]: number[]) =>
  0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b)

/** Flatten a translucent foreground over an opaque background. */
const over = (fg: string, bg: string, alpha: number) =>
  hex(fg).map((f, i) => Math.round(alpha * f + (1 - alpha) * hex(bg)[i]))

const contrast = (a: number[], b: number[]) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

const p = palette
const AA_NORMAL = 4.5

// Every pairing below renders small text (text-xs / text-sm) somewhere on the
// site, so all of them owe WCAG AA for normal text.
const pairs: [string, number[], number[]][] = [
  ['body copy on cream', hex(p['text-secondary']), hex(p.cream)],
  ['body copy on white cards', hex(p['text-secondary']), hex('#FFFFFF')],
  ['gold accents on cream', hex(p.gold), hex(p.cream)],
  ['gold on white cards', hex(p.gold), hex('#FFFFFF')],
  ['button label on gold', hex(p.cream), hex(p.gold)],
  ['duration pill on warm tint', hex(p['gold-dark']), hex(p['warm-tint'])],
  ['stat card label on warm tint', hex(p['gold-dark']), hex(p['warm-tint'])],
  ['footer links on dark', over(p.cream, p['text-primary'], 0.7), hex(p['text-primary'])],
  ['footer copyright on dark', over(p.cream, p['text-primary'], 0.6), hex(p['text-primary'])],
  ['address text on gold banner', hex(p.cream), hex(p.gold)],
  ['CTA body on gold banner', hex(p.cream), hex(p.gold)],
  // Nav bar sits at rgba(20,12,5,0.92) once scrolled.
  ['nav links on dark nav', over(p.cream, '#140C05', 0.8), hex('#140C05')],
  ['active nav link on dark nav', hex(p['gold-light']), hex('#140C05')],
  ['language toggle on dark nav', over(p.cream, '#140C05', 0.6), hex('#140C05')],
]

describe('palette contrast (WCAG AA, normal text)', () => {
  it.each(pairs)('%s clears 4.5:1', (_name, fg, bg) => {
    expect(contrast(fg, bg)).toBeGreaterThanOrEqual(AA_NORMAL)
  })
})
