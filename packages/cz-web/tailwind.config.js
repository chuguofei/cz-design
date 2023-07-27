/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#3695f6',
          100: '#4aa0f7',
          200: '#5eaaf8',
          300: '#72b5f9',
          400: '#86bffa',
          500: '#9bcafb',
          600: '#afd5fb',
          700: '#c3dffc',
          800: '#d7eafd',
          900: '#ebf4fe',
        },
      },
    },
  },
  plugins: [],
}
