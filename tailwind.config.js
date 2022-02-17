const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ['./components/**/*.js', './pages/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      teal: colors.teal,
      blue: colors.blue,
      white: colors.white,
      indigo: colors.indigo,
      black: colors.black,
      bright: {
        yellow: '#d5e70d',
        pink: '#ff0096',
        orange: '#ff8500',
        green: '#21ff00'
      }
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        }
      })
    }
  ],
}
