/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '1500': '1500ms',
        '3000': '3000ms',
        '4000': '4000ms',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}