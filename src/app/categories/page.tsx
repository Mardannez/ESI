import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Icon from '@/components/ui/AppIcon';
import { buildWhatsAppUrl } from '@/data/products';
import CategoryGuideGrid from './components/CategoryGuideGrid';

export const metadata: Metadata = {
  title: 'Categorías — SeguridadHN',
  description: 'Explora categorías de equipos de seguridad industrial con filtros por riesgo: eléctrico, corte, químico, térmico, altura, señalización y ergonomía.',
};

export default function CategoriesPage() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20">
        <div className="bg-primary py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest mb-4">
              <Icon name="Grid3X3" size={12} className="text-accent" />
              Organizado por tipo de protección
            </span>
            <h1 className="text-section-title font-extrabold text-white mt-2 mb-3">
              Categorías de
              <span className="text-accent"> seguridad industrial</span>
            </h1>
            <p className="text-white/70 text-base max-w-xl mx-auto">
              Encuentra rápidamente el equipo correcto para cada área de trabajo y tipo de riesgo.
            </p>
          </div>
        </div>

        <CategoryGuideGrid />

        <section className="py-12 bg-muted/40 border-t border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-extrabold text-foreground mb-3">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Contáctanos por WhatsApp y te ayudamos a encontrar el equipo de seguridad adecuado para tu empresa.
            </p>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex text-base px-8 py-4"
            >
              <Icon name="MessageCircle" size={18} className="text-white" />
              Consultar por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
