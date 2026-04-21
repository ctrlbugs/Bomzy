import type { Metadata } from 'next';
import { Inter, Rammetto_One } from 'next/font/google';
import './globals.css';

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
  metadataBase: new URL('https://ctrlbugs.me'),
  alternates: {
    canonical: '/',
  },
  title: 'Azewene Njigwum — Product Engineer',
  description:
    'Product Engineer focused on secure, scalable, user-centered digital systems',
  keywords: [
    'product engineer',
    'software engineering',
    'product management',
    'procurement systems',
    'CtrLBugs',
  ],
  authors: [{ name: 'Azewene Njigwum' }],
  icons: {
    icon: [{ url: '/favicon.png', sizes: 'any' }],
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'Azewene Njigwum — Product Engineer',
    description:
      'Building secure, scalable, user-centered digital systems.',
    type: 'website',
    url: 'https://ctrlbugs.me',
    siteName: 'CtrLBugs',
    // Without this, crawlers (Instagram/Meta, etc.) grab the first big image on the page (e.g. work carousel).
    images: [
      {
        url: '/og.png',
        alt: 'Azewene Njigwum — Product Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azewene Njigwum — Product Engineer',
    description:
      'Building secure, scalable, user-centered digital systems.',
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
              name: 'Azewene Njigwum',
              url: 'https://ctrlbugs.me',
              jobTitle: 'Product Engineer',
              description:
                'Product Engineer focused on secure, scalable, user-centered digital systems',
              knowsAbout: [
                'Software engineering',
                'Product engineering',
                'Product Management',
                'Government platforms',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
