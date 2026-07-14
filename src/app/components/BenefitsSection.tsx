'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const benefits = [
  {
    icon: 'ShieldCheck',
    title: 'Productos para uso industrial',
    description: 'Equipos certificados bajo normas ANSI, ASTM y otras regulaciones internacionales de seguridad industrial.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: 'MessageCircle',
    title: 'Atención personalizada por WhatsApp',
    description: 'Asesoría directa con nuestro equipo de ventas. Respuesta rápida y cotizaciones en minutos.',
    color: 'bg-green-100 text-green-700',
  },
  {
    icon: 'FileText',
    title: 'Cotizaciones para empresas',
    description: 'Manejamos pedidos corporativos y proyectos de gran volumen con precios especiales y plazos de entrega.',
    color: 'bg-accent/20 text-amber-700',
  },
  {
    icon: 'Truck',
    title: 'Entregas a nivel nacional',
    description: 'Enviamos a todo Honduras.',
    color: 'bg-blue-100 text-blue-700',
  },
];

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll('.scroll-fade');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 scroll-fade">
          <span className="section-label mb-4 inline-flex">
            <Icon name="Star" size={12} className="text-primary" />
            Por qué elegirnos
          </span>
          <h2 className="text-section-title font-extrabold text-foreground mt-3">
            Tu proveedor de confianza en
            <span className="text-primary"> seguridad industrial</span>
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`scroll-fade scroll-fade-delay-${i + 1} bg-card border border-border rounded-2xl p-6 card-hover`}
            >
              <div className={`w-12 h-12 rounded-xl ${b.color} flex items-center justify-center mb-4`}>
                <Icon name={b.icon} size={22} />
              </div>
              <h3 className="font-bold text-foreground text-base mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
