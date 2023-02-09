/** @type {import('next').NextConfig} */
// const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  // sassOptions: { // If using sass instead of postCSS
  //   includePaths: [path.join(__dirname, 'styles')]
  // },
  images: {
    domains: ['thumbs.dreamstime.com']
  },
  experimental: {
    appDir: true
  },
  // TODO: Fix CORS issues.......
  async rewrites() {
    return [
      {
        source: '/api/login',
        destination: '/'
      }
    ];
  }
};

module.exports = nextConfig;
