/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export automatically
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true, // helps prevent path issues on GitHub Pages
};

export default nextConfig;
