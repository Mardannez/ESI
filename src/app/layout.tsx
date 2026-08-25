import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { absoluteUrl, siteConfig } from '@/lib/seo';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'ESI Honduras | Equipos de Seguridad Industrial',
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'Seguridad industrial',
  keywords: [
    'equipos de seguridad industrial Honduras',
    'equipo de protección personal',
    'EPP Honduras',
    'cascos de seguridad',
    'guantes industriales',
    'arneses de seguridad',
    'protección eléctrica',
    'señalización industrial',
  ],
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'ESI Honduras | Equipos de Seguridad Industrial',
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl(siteConfig.socialImage),
        alt: 'ESI Honduras - equipos de seguridad industrial',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESI Honduras | Equipos de Seguridad Industrial',
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.socialImage)],
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
  icons: {
    icon: [{ url: '/favicon.ico?v=20260824', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>
        {children}
      </body>
    </html>
  );
}
