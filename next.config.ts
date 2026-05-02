import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/projects/rhip', destination: '/work/rhip', permanent: true },
      { source: '/projects/healthsquare', destination: '/work/healthsquare', permanent: true },
      { source: '/projects/rivchipp', destination: '/work/rivchipp', permanent: true },
      { source: '/projects/dueno', destination: '/work/rivchipp', permanent: true },
      { source: '/projects/rivchpp', destination: '/work/rivchipp', permanent: true },
      { source: '/projects/iyawo', destination: '/', permanent: true },
    ];
  },
  productionBrowserSourceMaps: false,
  images: {
    // Allow `next/image` for public files under /projects, including `?v=` cache busters
    // (see app/work-section.tsx `workThumbSrc`).
    localPatterns: [{ pathname: '/projects/**' }, { pathname: '/file/**' }],
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
