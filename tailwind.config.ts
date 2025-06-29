import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0C1427',
        'navy-medium': '#1C233D',
        'cyan-accent': '#00BCD4',
      },
    },
  },
  plugins: [],
}
export default config