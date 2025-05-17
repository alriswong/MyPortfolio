import type { NextConfig } from "next";

const isPord = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isPord ? "/MyPortfolio" : "",
  transpilePackages: ['three'],
  devIndicators: false,
  output: 'export',
  distDir: 'dist',
  images: {
    remotePatterns: [new URL('https://alriswong.github.io/MyPortfolio/**')],
        
    unoptimized: true, // Disable default image optimization
  },
};

export default nextConfig;
