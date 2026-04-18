/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,

  async redirects() {
    return [
      // non-www → www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'orbillo.com' }],
        destination: 'https://www.orbillo.com/:path*',
        permanent: true,
      },

      // webDevelopment → web-development
      {
        source: '/services/webDevelopment',
        destination: '/services/web-development/',
        permanent: true,
      },
      {
        source: '/services/webDevelopment/',
        destination: '/services/web-development/',
        permanent: true,
      },
    ];
  },

  // output: "export",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },
};

export default nextConfig;