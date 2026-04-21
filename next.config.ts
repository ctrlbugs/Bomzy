import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
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
