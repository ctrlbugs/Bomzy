/**
 * Canonical site origin for metadata, sitemap, and robots.
 * Set `NEXT_PUBLIC_SITE_URL` in Vercel (Production + Preview) to your custom domain, e.g. https://boma.business.com
 * Preview deployments fall back to `VERCEL_URL` when the env var is unset.
 */
const DEFAULT_SITE_URL = 'https://boma.business.com';

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '');
  if (fromEnv) {
    return fromEnv.startsWith('http') ? fromEnv : `https://${fromEnv}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, '')}`;
  }
  return DEFAULT_SITE_URL;
}
