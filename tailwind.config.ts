// tailwind.config.ts
import type { Config } from 'tailwindcss'
import { palette } from './lib/palette'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: palette,
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        lato: ['var(--font-lato)', 'Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #2C1810 0%, #5C3D1E 60%, #3a2510 100%)',
      },
    },
  },
  plugins: [],
}

export default config
