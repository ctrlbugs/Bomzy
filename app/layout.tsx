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
  title: 'Azewene Njigwum — Product Engineer',
  description:
    'Product Engineer focused on secure, scalable, user-centered digital systems. Founder & CTO of CtrLBugs.',
  keywords: [
    'product engineer',
    'software engineering',
    'biometric payments',
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
      'Building secure, scalable, user-centered digital systems at the intersection of engineering, design, and systems thinking.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azewene Njigwum — Product Engineer',
    description:
      'Building secure, scalable, user-centered digital systems at the intersection of engineering, design, and systems thinking.',
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
              jobTitle: 'Product Engineer',
              description:
                'Product Engineer and Founder & CTO of CtrLBugs, focused on secure, scalable digital systems.',
              knowsAbout: [
                'Software engineering',
                'Product engineering',
                'Biometric systems',
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
