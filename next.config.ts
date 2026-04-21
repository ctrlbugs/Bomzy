import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    // Allow `next/image` for public files under /projects, including `?v=` cache busters
    // (see app/work-section.tsx `workThumbSrc`).
    localPatterns: [{ pathname: '/projects/**' }],
  },
  turbopack: {
    root: path.join(__dirname),
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = false;
    }
    return config;
  },
};

export default nextConfig;
