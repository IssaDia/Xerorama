/* eslint-disable */
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    fontFamily: {
      modak: ['Modak', 'cursive'],
      roboto: ['Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        orangeXero: '#ff7f2c',
        blueXero: '#3F52B5',
        greyXero: '#F4F6F8',
        greyDarkXero: '#867783',
        googleButtonXero: '#D5D5D5',
        formButtonXero: '#FF4B2B',
        formGreyXero: '#eee',
        formRoseXero: '#ff416c',
        formBlackXero: '#333'
      },
      maxHeight: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem'
      }
    }
  },
  darkMode: false // or 'media' or 'class'
}
