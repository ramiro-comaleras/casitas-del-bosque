import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'casitas-forest':     '#043927',
        'casitas-gold':       '#C5A55A',
        'casitas-gold-light': '#DFC080',
        'casitas-cream':      '#F5F0E8',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:    ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'jungle-gradient': 'linear-gradient(135deg, #043927 0%, #0a5c3a 50%, #043927 100%)',
      },
    },
  },
  plugins: [],
}

export default config
