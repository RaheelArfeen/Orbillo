/** @type {import('next').NextConfig} */
const nextConfig = {
  // DELETE THIS LINE: output: "export", 

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