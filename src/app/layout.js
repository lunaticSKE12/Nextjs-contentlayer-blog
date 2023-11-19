import { cx } from '@/src/utils';
import './globals.css';
import { Inter, Manrope } from 'next/font/google';
import Header from '@/src/components/Header';
import Footer from '../components/Footer';
import siteMetadata from '../utils/siteMetaData';
import ThemeScript from '../components/ThemeScript';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-in',
});
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mr',
});

/* The `metadata` object is exporting a set of metadata values that can be used for SEO (Search Engine
Optimization) and social media sharing purposes. */
export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

/* The `export default function RootLayout({ children })` is a React functional component that serves
as the layout for the entire application. It takes in a `children` prop, which represents the
content that will be rendered within the layout. */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          'font-mr bg-light dark:bg-dark '
        )}
      >
        <ThemeScript />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
