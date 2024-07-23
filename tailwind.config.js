/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    extend: {
      colors:{
        cyan: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkviolet: 'hsl(260, 8%, 14%)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans seirf'],
      },
      spacing: {
        180: '32rem'
      }
    },
  },
  plugins: [],
}

