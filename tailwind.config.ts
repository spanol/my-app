import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0282CE',
        'primary-light': '#dbeafe',
        'primary-dark': '#0070f3',
        secondary: '#FF9A06',
        'black-marlin': '#3A3A3C'
      }
    }
  },
  plugins: []
}
export default config
