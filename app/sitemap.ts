import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const routes = [
    '/',
    '/projects/healthsquare',
    '/projects/biopay',
    '/projects/rivchipp',
    '/projects/iyawo',
    '/projects/rhip',
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
