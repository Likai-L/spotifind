/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultConfig');

const textColor = {
  primary: 'var(--text-primary)',
  secondary: 'var(--text-secondary)',
  nav: 'var(--text-nav)'
};

const backgroundColor = {
  primary: 'var(--bg-primary)',
  secondary: 'var(--bg-secondary)'
};

// Gradient backgrounds
const backgroundImage = {
  nav: 'var(--bg-nav)',
  button: 'var(--bg-button)',
  main: 'var(--bg-main)'
};

const fontFamily = {
  primary: 'var(--font-primary)'
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
    extend: {
      textColor,
      backgroundColor,
      backgroundImage,
      fontFamily
    }
  },
  plugins: []
};
