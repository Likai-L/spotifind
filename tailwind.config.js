/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultConfig');

const generateColorClass = variable => {
  return `var(--${variable})`;
};

const textColor = {
  primary: generateColorClass('text-primary'),
  secondary: generateColorClass('text-secondary'),
  nav: generateColorClass('text-nav')
};

const backgroundColor = {
  primary: generateColorClass('bg-primary'),
  secondary: generateColorClass('bg-secondary'),
  main: generateColorClass('bg-main'),
  nav: generateColorClass('bg-nav'),
  button: generateColorClass('bg-button')
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
      backgroundColor
    }
  },
  plugins: []
};
