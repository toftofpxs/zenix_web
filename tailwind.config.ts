import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#0A0A0A',
        primary: '#0A0A0A',
        secondary: '#6B6B6B',
        accent: '#0066FF',
        border: '#EBEBEB',
        surface: '#F7F7F7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(3rem, 6vw, 6rem)',
      },
      letterSpacing: {
        tight: '-0.03em',
      },
      lineHeight: {
        generous: '1.7',
      },
      borderRadius: {
        sharp: '4px',
      },
    },
  },
  plugins: [],
}
export default config
