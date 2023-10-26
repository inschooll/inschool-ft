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
          main: "rgb(var(--color-primary) / <alpha-value>)",
          sub: "rgb(var(--color-primary-deep) / <alpha-value>)",
        },
        background: {
          main: "rgb(var(--color-bkg) / <alpha-value>)",
          sub: "rgb(var(--color-compliment) / <alpha-value>)",
        },
        content: {
          main: "rgb(var(--color-content-main) / <alpha-value>)",
          sub: "rgb(var(--color-content-sub) / <alpha-value>)",
        }
      }
    },
  },
  plugins: [],
}
export default config
