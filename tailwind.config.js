/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#1a202c',
        primaryText: '#e2e8f0',
        secondaryText: '#a0aec0',
        accent: '#63b3ed',
        miduYellow: '#ffc107',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}