// Brand colours, shared by tailwind.config.ts and the contrast test so the
// two cannot disagree.
//
// `gold-dark` exists because `gold` on `warm-tint` only reaches 4.30:1 —
// below WCAG AA for the small text used in badges and stat labels.
export const palette = {
  cream: '#FAF7F2',
  gold: '#8B6914',
  'gold-dark': '#7E5F12',
  'gold-light': '#C9A84C',
  'warm-tint': '#F2EBE0',
  'card-placeholder': '#D4C4A8',
  'text-primary': '#2C2C2C',
  'text-secondary': '#6B6B6B',
} as const
