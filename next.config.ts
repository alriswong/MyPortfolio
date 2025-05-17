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
    loader: "custom",
    loaderFile: './ImageLoader.jsx',
        
    unoptimized: true, // Disable default image optimization
  },
};

export default nextConfig;
