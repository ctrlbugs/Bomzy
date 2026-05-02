import type { Metadata } from 'next';
import { Inter, Rammetto_One } from 'next/font/google';
import './globals.css';

const siteUrl = 'https://ctrlbugs.me';

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
  title: 'Godswill Boma Peterside — Content Creator|Event Host',
  description:
    'A dynamic content creator and event host with a passion for storytelling, audience engagement, and digital communication',
  keywords: [
    'content creator',
    'event host',
    'social media',
    'digital communication',
    'storytelling',
    'audience engagement',
    'digital marketing',
    'digital strategy',
    'digital content',
    'digital media',
    'digital communication',
    'digital strategy',
  ],
  authors: [{ name: 'Godswill Boma Peterside' }],
  icons: {
    icon: [{ url: '/favicon.png', sizes: 'any' }],
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'Godswill Boma Peterside — Content Creator|Event Host',
    description:
      'Building secure, scalable, user-centered digital systems.',
    type: 'website',
    url: siteUrl,
    siteName: 'CtrLBugs',
    // Without this, crawlers (Instagram/Meta, etc.) grab the first big image on the page (e.g. work carousel).
    images: [
      {
        url: '/og.png',
        alt: 'Godswill Boma Peterside — Content Creator|Event Host',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Godswill Boma Peterside — Content Creator|Event Host',
    description:
      'A dynamic content creator and event host with a passion for storytelling, audience engagement, and digital communication',
    images: ['/og.png'],
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
              jobTitle: 'Content Creator|Event Host',
              description:
                'A dynamic content creator and event host with a passion for storytelling, audience engagement, and digital communication.',
              knowsAbout: [
                'Content Creator',
                'Event Host',
                'Social Media',
                'Digital Communication',
                'Storytelling',
                'Audience Engagement',
                'Digital Marketing',
                'Digital Strategy',
                'Digital Content',
                'Digital Media',
                'Digital Communication',
                'Digital Strategy',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
