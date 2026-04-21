import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ctrlbugs.me';
  const now = new Date();

  const routes = [
    '/',
    '/projects/biotap',
    '/projects/biopay',
    '/projects/dueno',
    '/projects/iyawo',
    '/projects/jossy',
    '/projects/pmis',
    '/projects/socialbox',
    '/branding/biopay',
    '/branding/jossy',
    '/branding/socialbox',
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
