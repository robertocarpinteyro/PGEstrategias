/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async rewrites() {
    return [
      {
        source: "/lpdoctores",
        destination: "/lpdoctores.html",
      },
    ];
  },
};

export default nextConfig;
