import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for static export
  basePath: process.env.NODE_ENV === 'production' ? '/Mikrobait' : '', // GitHub Pages subpath
  images: {
    unoptimized: true, // Disable Next.js Image Optimization (static export)
  },
  // Optional: Add trailingSlash if links break in GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
