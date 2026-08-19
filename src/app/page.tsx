import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import CategoriesSection from './components/CategoriesSection';
import FeaturedProductsSection from './components/FeaturedProductsSection';
import AboutTeaser from './components/AboutTeaser';
import { absoluteUrl, createPageMetadata, serializeJsonLd, siteConfig } from '@/lib/seo';

const homeTitle = 'Equipos de Seguridad Industrial en Honduras | ESI';

export const metadata: Metadata = createPageMetadata({
  title: homeTitle,
  description: siteConfig.description,
  path: '/',
});

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': absoluteUrl('/#organization'),
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl(siteConfig.logo),
  image: absoluteUrl(siteConfig.socialImage),
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'HN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.phone,
    contactType: 'sales',
    areaServed: 'HN',
    availableLanguage: 'Spanish',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': absoluteUrl('/#website'),
  url: siteConfig.url,
  name: siteConfig.name,
  alternateName: 'ESI',
  description: siteConfig.description,
  inLanguage: siteConfig.language,
  publisher: {
    '@id': absoluteUrl('/#organization'),
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd([organizationJsonLd, websiteJsonLd]),
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <CategoriesSection />
        <FeaturedProductsSection />
        <AboutTeaser />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
