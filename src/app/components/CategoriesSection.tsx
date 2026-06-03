'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { categories } from '@/data/products';

export default function CategoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.08 }
    );
    const els = sectionRef?.current?.querySelectorAll('.scroll-fade');
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 scroll-fade">
          <span className="section-label mb-4 inline-flex">
            <Icon name="Grid3X3" size={12} className="text-primary" />
            Nuestras categorías
          </span>
          <h2 className="text-section-title font-extrabold text-foreground mt-3">
            Catálogo organizado por
            <span className="text-primary"> tipo de protección</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Encuentra el equipo correcto para cada área de trabajo y tipo de riesgo industrial.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories?.slice(0, 8)?.map((cat, i) => (
            <Link
              key={cat?.id}
              href={`/products?category=${encodeURIComponent(cat?.name)}`}
              className={`scroll-fade scroll-fade-delay-${Math.min(i + 1, 4)} group relative rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300`}
            >
              {/* Image */}
              <div className="relative h-36 sm:h-44 overflow-hidden">
                <AppImage
                  src={cat?.image}
                  alt={`${cat?.name} - categoría de seguridad industrial, productos sobre fondo oscuro`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* Count badge */}
                <div className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                  {cat?.count} prod.
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-foreground text-sm mb-1">{cat?.name}</h3>
                <p className="text-muted-foreground text-xs leading-snug line-clamp-2">{cat?.description}</p>
                <div className="mt-3 flex items-center gap-1 text-primary text-xs font-bold">
                  Ver productos
                  <Icon name="ArrowRight" size={12} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 scroll-fade">
          <Link href="/categories" className="btn-primary inline-flex">
            <Icon name="Grid3X3" size={16} className="text-white" />
            Ver todas las categorías
          </Link>
        </div>
      </div>
    </section>
  );
}