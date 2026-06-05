// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        gold: '#8B6914',
        'gold-light': '#C9A84C',
        'warm-tint': '#F2EBE0',
        'card-placeholder': '#D4C4A8',
        'text-primary': '#2C2C2C',
        'text-secondary': '#6B6B6B',
      },
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
