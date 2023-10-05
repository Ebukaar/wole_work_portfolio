/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'hover-yellow': '#F5E76A',
        'teal': '#29B7B7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


