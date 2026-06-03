import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { categories, buildWhatsAppUrl } from '@/data/products';

export const metadata: Metadata = {
  title: 'Categorías — SeguridadHN',
  description: 'Explora todas las categorías de equipos de seguridad industrial: cascos, guantes, botas, arneses, señalización y más.',
};

export default function CategoriesPage() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Page hero */}
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

        {/* Categories grid */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-card border border-border rounded-2xl overflow-hidden group card-hover flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <AppImage
                      src={cat.image}
                      alt={`${cat.name} - categoría de equipos de seguridad industrial, ambiente oscuro de trabajo`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                        {cat.count} producto{cat.count !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="font-extrabold text-foreground text-base mb-2">{cat.name}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">{cat.description}</p>

                    <div className="flex flex-col gap-2 mt-auto">
                      <Link
                        href={`/products?category=${encodeURIComponent(cat.name)}`}
                        className="btn-primary text-xs py-2.5 justify-center"
                      >
                        <Icon name="ShoppingBag" size={14} className="text-white" />
                        Ver productos
                      </Link>
                      <a
                        href={buildWhatsAppUrl(`productos de ${cat.name}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp text-xs py-2.5 justify-center"
                      >
                        <Icon name="MessageCircle" size={14} className="text-white" />
                        Cotizar esta categoría
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA banner */}
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