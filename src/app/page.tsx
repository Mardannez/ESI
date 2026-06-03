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

export const metadata: Metadata = {
  title: 'ESI — Equipos de Seguridad Industrial en Honduras',
  description: 'Proveedor de artículos de seguridad industrial en Honduras. Cascos, guantes, botas, arneses y más. Cotiza por WhatsApp al instante.',
};

export default function HomePage() {
  return (
    <>
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