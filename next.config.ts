import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/projects/biotap',
        destination: '/projects/healthsquare',
        permanent: true,
      },
      {
        source: '/projects/dueno',
        destination: '/projects/rivchipp',
        permanent: true,
      },
      {
        source: '/projects/rivchpp',
        destination: '/projects/rivchipp',
        permanent: true,
      },
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
