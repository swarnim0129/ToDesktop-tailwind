/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
          'primary': '#464BF2',
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        'inter':['Inter' ,'sans-serif']
      }
    },
  },
  plugins: [],
}

