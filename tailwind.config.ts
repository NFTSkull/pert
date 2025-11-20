import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0B1F33',
          DEFAULT: '#0B1F33',
        },
        accent: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        background: {
          light: '#F3F4F6',
          DEFAULT: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}
export default config

