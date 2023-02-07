/** @type {import('next').NextConfig} */
// const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  // sassOptions: { // If using sass instead of postCSS
  //   includePaths: [path.join(__dirname, 'styles')]
  // },
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
