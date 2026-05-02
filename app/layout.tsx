import type { Metadata } from 'next';
import { Inter, Rammetto_One } from 'next/font/google';
import './globals.css';

const siteUrl = 'https://boma.business';

/** Link-preview lines (WhatsApp, iMessage, etc.) — match `og:title` + `og:description`. */
const siteTitle = 'Godswill Boma Peterside';
const siteTagline = '— Social Media Specialist | Content Creator';

/** Bump when replacing `public/og.png` so social crawlers fetch the new asset. */
const OG_IMAGE_VERSION = '2';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const rammettoOne = Rammetto_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rammetto',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  title: siteTitle,
  description: siteTagline,
  keywords: [
    'social media specialist',
    'content creator',
    'social media',
    'digital communication',
    'storytelling',
    'audience engagement',
    'digital marketing',
    'digital strategy',
    'digital content',
    'digital media',
  ],
  authors: [{ name: 'Godswill Boma Peterside' }],
  icons: {
    icon: [{ url: '/favicon.png', sizes: 'any' }],
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: siteTitle,
    description: siteTagline,
    type: 'website',
    url: siteUrl,
    siteName: 'Boma',
    // Without this, crawlers (Instagram/Meta, etc.) grab the first big image on the page (e.g. work carousel).
    images: [
      {
        url: `/og.png?v=${OG_IMAGE_VERSION}`,
        alt: `${siteTitle} ${siteTagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteTagline,
    images: [`/og.png?v=${OG_IMAGE_VERSION}`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${rammettoOne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Godswill Boma Peterside',
              url: siteUrl,
              jobTitle: 'Social Media Specialist | Content Creator',
              description:
                'Social media specialist and content creator — storytelling, audience engagement, and digital communication.',
              knowsAbout: [
                'Social Media Specialist',
                'Content Creator',
                'Social Media',
                'Digital Communication',
                'Storytelling',
                'Audience Engagement',
                'Digital Marketing',
                'Digital Strategy',
                'Digital Content',
                'Digital Media',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
