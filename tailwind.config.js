const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        'dark-bg': '#1B1D29',
        'main-bg': '#F5F7FA',
        'button-blue':'#0085FF',
      },
      fontFamily: {
        // sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        // rob: ['Roboto'],
        rub: ['Rubik'],
      },
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '1rem' }],
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
