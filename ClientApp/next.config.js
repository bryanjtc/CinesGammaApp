const withPWA = require('next-pwa');
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dzilzrhfk/',
  },
});
