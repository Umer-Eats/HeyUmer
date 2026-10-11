import { Gaegu, Outfit } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DoodleDefs } from '@/components/Doodle';
import JsonLd from '@/components/JsonLd';
import { keywords, metaDescription, personLd, siteName, siteUrl, websiteLd } from '@/lib/seo';
import './globals.css';

const hand = Gaegu({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-hand',
  display: 'swap',
});

const sans = Outfit({
  weight: ['200', '300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const homeTitle = 'Umer Qureshi | Pembroke Pines, Florida | Engineer & Researcher';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: '%s | Umer Qureshi',
  },
  description: metaDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  keywords,
  category: 'portfolio',
  alternates: { canonical: '/' },
  openGraph: {
    title: homeTitle,
    description: metaDescription,
    url: '/',
    siteName,
    type: 'profile',
    firstName: 'Umer',
    lastName: 'Qureshi',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: metaDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Paste the code from Google Search Console into this env var on Vercel.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport = {
  themeColor: '#ffffff',
};

// The wobble filters are referenced by fragment (#wobble-1), which only
// resolves reliably from a stylesheet that lives in the document itself.
const doodleCss = `
.doodle{filter:url(#wobble-1)}
.boil,.tile:hover .doodle,.link-card:hover .doodle,.entry-art:hover .doodle,.award-group:hover .doodle{animation:boil .54s step-end infinite}
.bob.boil{animation:boil .54s step-end infinite,bob 5s ease-in-out infinite}
@keyframes boil{0%{filter:url(#wobble-1)}33%{filter:url(#wobble-2)}66%{filter:url(#wobble-3)}}
@media (prefers-reduced-motion:reduce){.doodle{animation:none!important}}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${hand.variable} ${sans.variable}`} suppressHydrationWarning>
      <body>
        <style dangerouslySetInnerHTML={{ __html: doodleCss }} />
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <a className="skip-link" href="#main">
          skip to content
        </a>
        <JsonLd data={personLd} />
        <JsonLd data={websiteLd} />
        <DoodleDefs />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
