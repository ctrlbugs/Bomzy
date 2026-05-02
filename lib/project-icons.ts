/**
 * Bump this when replacing files under `public/projects/project-icons/` so
 * `next/image` and browsers fetch the new asset instead of a cached copy.
 */
export const PROJECT_ICONS_VERSION = 2;

export function projectIconSrc(path: string): string {
  return `${path}?v=${PROJECT_ICONS_VERSION}`;
}
