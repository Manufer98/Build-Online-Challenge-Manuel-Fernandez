/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#9378FF',
      secondary: '#FAF9FE',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue:colors.blue
      
    },
    extend: {
      fontFamily: {
        sans: ['"Red Hat Display"', ...defaultTheme.fontFamily.sans]
      }

    },
    
  },
  plugins: [],
}
