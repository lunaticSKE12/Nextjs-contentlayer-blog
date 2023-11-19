/** @type {import('next').NextConfig} */

/* This code is importing the `withContentlayer` function from the `next-contentlayer` package and
assigning it to a constant named `withContentlayer`. */
const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  compiler: {
    removeConsole: true,
  },
};

module.exports = withContentlayer({ ...nextConfig });
