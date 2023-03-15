/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        '2xl': '42rem',
        min40: '40px',
      },
      colors: {
        'm-gd': '#5c5c5c',
        'm-gl': '#9c9c9c',
        'm-d': '#18181b',
        'm-l': '#ffffff',
      },
    },
  },
  plugins: [],
}
