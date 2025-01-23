/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-grey': '#A9A9A9',
      },
      fontFamily: {
        'display': ['Nunito','sans-serif'],
      }
    },
  },
  plugins: [],
}