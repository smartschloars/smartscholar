/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0b64d6',
          gold: '#d4af37',
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
