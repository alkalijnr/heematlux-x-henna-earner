/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#F9F1D8',
          200: '#F0DEAA',
          300: '#E6C875',
          400: '#D4AF37', // Standard Gold
          500: '#AA8C2C',
          600: '#80681F',
          900: '#2A220A',
        },
        luxury: {
          black: '#0F0F0F',
          dark: '#1A1A1A',
          gray: '#F5F5F5',
        }
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(to right, #D4AF37, #F0DEAA, #D4AF37)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}