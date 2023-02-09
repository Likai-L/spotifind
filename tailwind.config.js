/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultConfig');

const textColor = {
  primary: 'var(--text-primary)',
  secondary: 'var(--text-secondary)',
  nav: 'var(--text-nav)'
};

const backgroundColor = {
  primary: 'var(--bg-primary)',
  secondary: 'var(--bg-secondary)',
  container: 'var(--bg-container)'
};

// Gradient backgrounds
const backgroundImage = {
  nav: 'var(--bg-nav)',
  button: 'var(--bg-button)',
  main: 'var(--bg-main)',
  landing: 'var(--bg-landing)'
};

const fontFamily = {
  title: ['Poppins', 'sans-serif'],
  primary: ['Ubuntu', 'sans-serif']
};

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  important: true,
  theme: {
    ...defaultTheme,
    screens: {
      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',

      '3xl': '1920px'
    },
    extend: {
      textColor,
      backgroundColor,
      backgroundImage,
      fontFamily
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
};
