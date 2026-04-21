# Az Landing Page

Personal portfolio/landing page built with Next.js App Router and TypeScript.

## Stack

- Next.js 16
- React 19
- TypeScript
- CSS Modules

## Local Development

From this project folder:

```bash
npm install
npm run dev
```

Default local URL:

- `http://localhost:3002`

Optional dev on port 3000:

```bash
npm run dev:3000
```

## Scripts

- `npm run dev` - start dev server on port 3002
- `npm run dev:3000` - start dev server on port 3000
- `npm run build` - production build
- `npm run start` - start production server on port 3002
- `npm run lint` - run ESLint

## Main Routes

- `/` - landing page
- `/projects/biotap`
- `/projects/biopay`
- `/projects/dueno`
- `/projects/iyawo`
- `/projects/jossy`
- `/projects/pmis`
- `/projects/socialbox`
- `/branding/biopay`
- `/branding/jossy`
- `/branding/socialbox`

## Project Structure (Key Files)

```text
app/
  page.tsx                        # Home page
  work-section.tsx                # Work carousel + media interactions
  page.module.css                 # Home page styles
  globals.css                     # Global styles + transitions
  projects/
    project-detail.module.css     # Shared detail page styles
    project-back-link.tsx         # Transition-aware back button
    biopay/page.tsx
    dueno/page.tsx
    iyawo/page.tsx
    jossy/page.tsx
    pmis/page.tsx
    socialbox/page.tsx
  branding/
    biopay/page.tsx
    jossy/page.tsx
    socialbox/page.tsx
public/projects/                  # Project images, logos, tech icons, videos
```

## Deployment (Vercel)

This project is configured for Vercel. To deploy:

```bash
npx vercel --prod --yes --scope ctrlbugs-projects
```

Live domain:

- `https://ctrlbugs.me`

## Notes

- This repo currently uses local static assets from `public/projects`.
- For project-specific visual changes, update the page file in `app/projects/*/page.tsx` and shared styles in `app/projects/project-detail.module.css`.
