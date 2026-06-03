'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { buildWhatsAppUrl } from '@/data/products';

const stats = [
{ value: '10+', label: 'Años de experiencia' },
{ value: '500+', label: 'Productos disponibles' },
{ value: '200+', label: 'Empresas clientes' },
{ value: '18', label: 'Departamentos atendidos' }];


export default function AboutTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { rootMargin: '0px 0px -50px 0px', threshold: 0.1 }
    );
    const els = sectionRef?.current?.querySelectorAll('.scroll-fade');
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image collage */}
          <div className="scroll-fade relative h-80 lg:h-[440px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <AppImage
                src="https://images.unsplash.com/photo-1702128411190-5061e7756d5c"
                alt="Industrial safety team wearing hard hats and reflective vests at a construction site, dim atmospheric lighting, dark steel background"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover w-full h-full"
                priority={false} />
              
              {/* Scrim for white text */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 grid grid-cols-2 gap-4">
              {stats?.map((s) =>
              <div key={s?.label} className="text-center">
                  <div className="text-2xl font-extrabold text-accent">{s?.value}</div>
                  <div className="text-white/70 text-xs font-medium mt-0.5">{s?.label}</div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Content */}
          <div className="scroll-fade scroll-fade-delay-2 flex flex-col justify-between h-full gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest mb-5">
                <Icon name="Building2" size={12} className="text-accent" />
                Quiénes somos
              </span>
              <h2 className="text-section-title font-extrabold text-white mb-4">
                Más de una década protegiendo
                <span className="text-accent"> equipos de trabajo</span>
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                Somos una empresa dedicada a proveer artículos de seguridad industrial para empresas,
                contratistas y trabajadores independientes. Nuestro objetivo es ofrecer productos
                confiables, asesoría personalizada y soluciones prácticas para proteger a los equipos
                de trabajo en Honduras.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-accent inline-flex">
                <Icon name="Info" size={16} className="text-accent-foreground" />
                Conocer más
              </Link>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex">
                
                <Icon name="MessageCircle" size={16} className="text-white" />
                Contactar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}