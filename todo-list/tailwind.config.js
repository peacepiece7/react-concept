/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        '2xl': '42rem',
      },
      colors: {
        'm-blue': '#beecee',
        'm-pink-soft': '#f0dede',
        'm-pink-middle': '#edb9b9',
        'm-pink-strong': '#e49a9f',
      },
    },
  },

  plugins: [],
}