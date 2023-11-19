/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },
      colors: {
        // 'brand': '#e67e22'
        'brand': {
          100: '#fdf2e9',
          200: '#f8d8bd',
          500: '#e67e22',
          600: '#cf711f',
          700: '#a15818',
          800: '#733f11'
        }
      }
    },
  },
  plugins: [],
}
