import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        paper: 'var(--paper)',
        dot: 'var(--dot)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        card: 'var(--card)',
      },
      fontFamily: {
        sans: ['var(--font-grotesk)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        hero: 'clamp(2.5rem, 6vw, 6.75rem)',
        display: 'clamp(2rem, 4.4vw, 4.25rem)',
      },
      letterSpacing: {
        tighter: '-0.045em',
      },
      lineHeight: {
        relaxed: '1.7',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
export default config
