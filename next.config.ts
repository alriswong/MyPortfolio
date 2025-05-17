import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['three'],
  devIndicators: false,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true, // Disable default image optimization
  },
};

export default nextConfig;
