/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pexels': "url('/assets/pexels.png')",
      },
      animation:{
        pulse:'pulse 1s infinite',
      },
      keyframes: {
        'pulse':{
          '0%, 100%':{opacity:0},
          '50%': {opacity:100}
        }
      }
    },
  },
  plugins: [],
}
