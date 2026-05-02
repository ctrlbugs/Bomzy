# Boma Landing Page

Personal portfolio built with Next.js App Router and TypeScript.

## Stack

- Next.js 16
- React 19
- TypeScript
- CSS Modules


## Project structure (key files)

```text
app/
  page.tsx                 # Home page
  work-section.tsx         # Moments & Media carousel
  page.module.css
  globals.css
  work/
    work-detail.module.css # Shared case-study layout
    work-back-link.tsx
    rhip/page.tsx
    healthsquare/page.tsx
    rivchipp/page.tsx
public/projects/           # Case-study images, icons, media (not URL /work)
public/file/               # Reels and portrait assets
```

Live domain:

- `https://boma.business`

## Notes

Old `/projects/...` URLs redirect to `/work/...` where applicable (see `next.config.ts`).
