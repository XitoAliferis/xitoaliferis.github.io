/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true, // Optional, avoids routing issues on GH Pages
}

export default nextConfig
