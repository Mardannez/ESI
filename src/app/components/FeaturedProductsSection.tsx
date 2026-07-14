'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { products, buildWhatsAppUrl } from '@/data/products';

export default function FeaturedProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featured = products?.filter((p) => p?.featured)?.slice(0, 6);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { rootMargin: '0px 0px -50px 0px', threshold: 0.08 }
    );
    const els = sectionRef?.current?.querySelectorAll('.scroll-fade');
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 scroll-fade">
          <span className="section-label mb-4 inline-flex">
            <Icon name="Zap" size={12} className="text-primary" />
            Productos destacados
          </span>
          <h2 className="text-section-title font-extrabold text-foreground mt-3">
            Los más solicitados por
            <span className="text-primary"> nuestros clientes</span>
          </h2>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured?.map((product, i) => (
            <div
              key={product?.id}
              className={`scroll-fade scroll-fade-delay-${Math.min(i + 1, 4)} product-card group`}
            >
              {/* Image */}
              <Link
                href={`/products/${product?.id}`}
                className="relative h-52 overflow-hidden block bg-white"
                aria-label={`Ver detalles de ${product?.name}`}
              >
                <div className="absolute inset-4 top-8">
                  <AppImage
                    src={product?.image}
                    alt={`${product?.name} - ${product?.category} industrial, producto sobre fondo claro`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-950/58 via-slate-900/26 to-transparent" />
                {/* Availability badge */}
                <div className="absolute top-3 left-3">
                  <span className={product?.availability === 'Disponible' ? 'badge-available' : 'badge-order'}>
                    <span className={`w-1.5 h-1.5 rounded-full inline-block ${product?.availability === 'Disponible' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    {product?.availability}
                  </span>
                </div>
                {/* Category */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex max-w-[170px] items-center rounded-full bg-primary px-2.5 py-1 text-right text-[11px] font-extrabold leading-tight text-white shadow-lg ring-1 ring-white/35">
                    {product?.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    <Icon name="Eye" size={12} />
                    Ver detalles
                  </span>
                </div>
              </Link>

              {/* Info */}
              <div className="p-5">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-1">{product?.brand}</p>
                <Link
                  href={`/products/${product?.id}`}
                  className="block font-bold text-foreground text-sm mb-2 line-clamp-2 hover:text-primary transition-colors"
                >
                  {product?.name}
                </Link>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2">{product?.description}</p>

                <div className="flex items-center justify-between gap-2">
                  {product?.price && (
                    <span className="text-primary font-extrabold text-lg shrink-0">
                      L {product?.price?.toLocaleString('es-HN')}
                    </span>
                  )}
                  <div className="flex items-center gap-1.5 ml-auto">
                    <Link
                      href={`/products/${product?.id}`}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-border text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-200"
                      aria-label={`Ver detalles de ${product?.name}`}
                    >
                      <Icon name="Eye" size={12} />
                      Detalles
                    </Link>
                    <a
                      href={buildWhatsAppUrl(product?.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp text-xs px-4 py-2"
                    >
                      <Icon name="MessageCircle" size={14} className="text-white" />
                      Cotizar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10 scroll-fade">
          <Link href="/products" className="btn-primary inline-flex text-base px-8 py-4">
            <Icon name="ShoppingBag" size={18} className="text-white" />
            Ver catálogo completo
          </Link>
        </div>
      </div>
    </section>
  );
}
