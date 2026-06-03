import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ProductCatalog from './components/ProductCatalog';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Catálogo de Productos — SeguridadHN',
  description: 'Explora nuestro catálogo completo de equipos de seguridad industrial: cascos, guantes, botas, arneses, chalecos y más. Cotiza por WhatsApp.',
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Page header */}
        <div className="bg-primary py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest mb-4">
              <Icon name="ShoppingBag" size={12} className="text-accent" />
              Catálogo completo
            </span>
            <h1 className="text-section-title font-extrabold text-white mt-2 mb-3">
              Todos nuestros
              <span className="text-accent"> productos</span>
            </h1>
            <p className="text-white/70 text-base max-w-xl mx-auto">
              Encuentra el equipo de protección adecuado para cada necesidad. Filtra por categoría, marca o disponibilidad.
            </p>
          </div>
        </div>

        {/* Catalog */}
        <Suspense fallback={
          <div className="flex items-center justify-center py-20">
            <Icon name="Loader" size={32} className="text-primary animate-spin" />
          </div>
        }>
          <ProductCatalog />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}