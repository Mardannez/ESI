'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { buildWhatsAppUrl } from '@/data/products';

type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'Proteccion contra caidas',
    title: 'Arneses, eslingas y lineas de vida para trabajo seguro en alturas',
    description:
      'Soluciones para cuadrillas, mantenimiento industrial y proyectos que necesitan equipos certificados.',
    image: '/assets/images/ESLINGA_EN_Y_CON_ABSORBEDOR.png',
    alt: 'Eslinga industrial en Y con absorbedor de energia',
  },
  {
    eyebrow: 'Proteccion de cabeza',
    title: 'Cascos, barbuquejos y accesorios para ambientes de alto riesgo',
    description:
      'Equipos pensados para obra, energia, manufactura y operaciones con exposicion electrica.',
    image: '/assets/images/BARBUQUEJO_CUATRO_PUNTOS_GRADUABLE INSAFE.png',
    alt: 'Barbuquejo graduable de cuatro puntos para casco de seguridad',
  },
  {
    eyebrow: 'Proteccion respiratoria',
    title: 'Respiradores y filtros para aire limpio en jornadas exigentes',
    description:
      'Opciones para polvo, vapores y gases en procesos industriales, pintura y mantenimiento.',
    image: '/assets/images/RESPIRADOR_12_CARA_3M_6200_(SIN FILTROS).png',
    alt: 'Respirador media cara industrial 3M',
  },
  {
    eyebrow: 'Proteccion de manos',
    title: 'Guantes tecnicos para corte, quimicos, frio y electricidad',
    description:
      'Una seleccion practica para proteger al equipo sin perder agarre, movilidad ni confort.',
    image: '/assets/images/GUANTE_ANTICORTE_GRIS_PU_GRIS_EN_PALMA_JUBA.png',
    alt: 'Guante anticorte gris con recubrimiento en palma',
  },
];

const AUTOPLAY_DELAY = 5200;

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((slide) => (slide + 1) % heroSlides.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveSlide((slide) => (slide - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setActiveSlide((slide) => (slide + 1) % heroSlides.length);
  };

  return (
    <section className="relative min-h-[680px] overflow-hidden text-white sm:min-h-[760px]">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.title}
            role="img"
            aria-label={slide.alt}
            style={{ backgroundImage: `url("${slide.image}")` }}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            } bg-cover bg-center bg-no-repeat lg:bg-fixed`}
            aria-hidden={index !== activeSlide}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/45 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl flex-col justify-end px-4 pb-10 pt-28 sm:min-h-[760px] sm:px-6 sm:pb-14 lg:pt-32">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 border border-white/25 bg-white/12 px-4 py-2 text-xs font-bold uppercase tracking-normal text-white backdrop-blur-md">
            <span className="h-2 w-2 bg-accent" />
            {currentSlide.eyebrow}
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
            {currentSlide.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/82 sm:text-lg">
            {currentSlide.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/products" className="btn-accent w-full px-7 py-4 text-base sm:w-auto">
              <Icon name="ShoppingBag" size={18} className="text-accent-foreground" />
              Ver catalogo
            </Link>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 border border-white/35 bg-white/12 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 sm:w-auto"
            >
              <Icon name="MessageCircle" size={18} className="text-white" />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/20 pt-5">
          <div className="flex items-center gap-2">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 transition-all duration-300 ${
                  index === activeSlide ? 'w-10 bg-accent' : 'w-2.5 bg-white/45'
                }`}
                aria-label={`Ir al banner ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              className="flex h-11 w-11 items-center justify-center border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Banner anterior"
            >
              <Icon name="ChevronLeft" size={22} />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="flex h-11 w-11 items-center justify-center border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Banner siguiente"
            >
              <Icon name="ChevronRight" size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
