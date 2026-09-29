/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#ededed',        /* Exact Owen background: neutral light gray */
        surface: '#ffffff',       /* Crisp white cards */
        ink: '#141415',           /* Pure typographic text ink */
        subtle: '#8a8a8a',        /* Secondary muted text */
        card: '#f7f7f7',          /* Placeholder & background hover */
        borderline: '#ededed',    /* Card & tab dividers */
      },
      fontFamily: {
        editorial: ['"Funnel Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      }
    },
  },
  plugins: [],
}
