/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#031926',
        secondary: '#468189',
        third: '#9DBEBB',
        colorCard: '#8EB4B1',
      },
      fontFamily: {
        
        fontPrimary: ['Monoton'],
        fontSecondary: ['Work Sans'],
      }
    },
  },
  plugins: [],
}

