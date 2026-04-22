module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'zenix-dark': '#0B0F14',
        'zenix-bg': '#111823',
        'zenix-border': '#1C2430',
        'zenix-blue': '#2D6BFF',
        'zenix-cyan': '#00E5FF',
        'zenix-purple': '#7C3AED',
        'zenix-text': '#E6EDF5',
        'zenix-muted': '#9AA4B2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        'zenix': '12px',
        'zenix-lg': '16px',
      },
      boxShadow: {
        'zenix-glow': '0 0 20px rgba(45, 107, 255, 0.15)',
        'zenix-glow-cyan': '0 0 20px rgba(0, 229, 255, 0.15)',
      },
    },
  },
  plugins: [],
}
