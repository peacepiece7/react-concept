/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        '2xl': '42rem',
        min40: '40px',
      },
      colors: {
        'm-blue': '#beecee',
        'm-pink-soft': '#f0dede',
        'm-pink-middle': '#edb9b9',
        'm-pink-strong': '#e49a9f',
        'l-pink-soft': '#d499b9',
        'l-pink-middle': '#9055A2',
        'l-pink-strong': '#2e294e',
      },
    },
  },

  plugins: [],
}
