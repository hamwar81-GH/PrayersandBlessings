import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';

export const metadata: Metadata = {
  metadataBase: new URL('https://prayersandblessings.net'),
  title: {
    default: 'Prayers and Blessings 2026 | Daily Spiritual Devotionals',
    template: '%s | Prayers and Blessings',
  },
  description: 'Discover powerful prayers and blessings for peace, healing, strength, and hope. Premium spiritual devotionals for every season of life.',
  keywords: ['prayers and blessings', 'morning prayers', 'healing prayers', 'family blessings', 'daily devotionals', 'spiritual guidance'],
  authors: [{ name: 'Prayers and Blessings Editorial Team', url: 'https://prayersandblessings.net/about' }],
  creator: 'Prayers and Blessings',
  publisher: 'Prayers and Blessings',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prayersandblessings.net',
    siteName: 'Prayers and Blessings',
    title: 'Prayers and Blessings 2026 | Daily Spiritual Devotionals',
    description: 'Discover powerful prayers and blessings for peace, healing, strength, and hope.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'Prayers and Blessings' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@prayerblessings',
    creator: '@prayerblessings',
    title: 'Prayers and Blessings 2026 | Daily Spiritual Devotionals',
    description: 'Discover powerful prayers and blessings for peace, healing, strength, and hope.',
    images: ['/images/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: { google: 'your-google-verification-code' },
  alternates: { canonical: 'https://prayersandblessings.net' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://prayersandblessings.net/#organization',
                  name: 'Prayers and Blessings',
                  url: 'https://prayersandblessings.net',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://prayersandblessings.net/images/logo.png',
                    width: 200,
                    height: 60,
                  },
                  sameAs: [
                    'https://www.instagram.com/prayersandblessings',
                    'https://www.pinterest.com/prayersandblessings',
                    'https://www.youtube.com/@prayersandblessings',
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    email: 'contact@prayersandblessings.net',
                    contactType: 'customer service',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://prayersandblessings.net/#website',
                  url: 'https://prayersandblessings.net',
                  name: 'Prayers and Blessings',
                  publisher: { '@id': 'https://prayersandblessings.net/#organization' },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: { '@type': 'EntryPoint', urlTemplate: 'https://prayersandblessings.net/search?q={search_term_string}' },
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': 'SiteNavigationElement',
                  name: ['Home', 'Prayers', 'Blessings', 'Collections', 'Guides'],
                  url: [
                    'https://prayersandblessings.net',
                    'https://prayersandblessings.net/prayers',
                    'https://prayersandblessings.net/blessings',
                    'https://prayersandblessings.net/collections',
                    'https://prayersandblessings.net/guides',
                  ],
                },
              ],
            }),
          }}
        />
        {/* Google AdSense */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous"></script> */}
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
