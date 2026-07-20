'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { buildWhatsAppUrl } from '@/data/products';

type HeroSlide = {
  image: string;
  alt: string;
};

const heroSlides: HeroSlide[] = [
  {
    image: '/assets/images/Banner_Cascos_y_barbuquejos.png',
    alt: 'Banner de cascos, barbuquejos y accesorios para ambientes de alto riesgo',
  },
  {
    image: '/assets/images/Banner_Arnes_En_Y.png',
    alt: 'Banner de arneses, eslingas y lineas de vida para trabajo seguro en alturas',
  },
  {
    image: '/assets/images/Banner_Respidadores_y_Filtros.png',
    alt: 'Banner de respiradores y filtros para aire limpio en jornadas exigentes',
  },
  {
    image: '/assets/images/Banner_guantes_tecnicos_para_corte.png',
    alt: 'Banner de guantes tecnicos para corte, quimicos, frio y electricidad',
  },
];

const AUTOPLAY_DELAY = 5200;

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

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
    <section className="relative overflow-hidden bg-[#05080b] pt-16 text-white sm:pt-20">
      <div className="relative min-h-[590px] pb-6 sm:h-[calc(100vh-5rem)] sm:min-h-[560px] sm:pb-0">
        <div className="relative aspect-[16/9] w-full sm:absolute sm:inset-0 sm:aspect-auto">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.image}
              role="img"
              aria-label={slide.alt}
              style={{ backgroundImage: `url("${slide.image}")` }}
              className={`absolute inset-0 bg-contain bg-top bg-no-repeat transition-opacity duration-1000 ease-out sm:bg-center lg:bg-fixed ${
                index === activeSlide ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={index !== activeSlide}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto mt-5 flex w-full max-w-7xl flex-col gap-5 px-6 sm:absolute sm:bottom-8 sm:left-1/2 sm:mt-0 sm:w-[calc(100%-2rem)] sm:-translate-x-1/2 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end lg:pr-28">
            <Link href="/products" className="btn-accent w-full px-7 py-4 text-base sm:w-auto">
              <Icon name="ShoppingBag" size={18} className="text-accent-foreground" />
              Ver catalogo
            </Link>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 border border-white/35 bg-black/30 px-7 py-4 text-base font-bold text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-black/45 sm:w-auto"
            >
              <Icon name="MessageCircle" size={18} className="text-white" />
              Cotizar por WhatsApp
            </a>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 sm:ml-auto lg:mr-28">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 transition-all duration-300 ${
                    index === activeSlide ? 'w-10 bg-accent' : 'w-2.5 bg-white/55'
                  }`}
                  aria-label={`Ir al banner ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                className="flex h-11 w-11 items-center justify-center border border-white/30 bg-black/30 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/45"
                aria-label="Banner anterior"
              >
                <Icon name="ChevronLeft" size={22} />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="flex h-11 w-11 items-center justify-center border border-white/30 bg-black/30 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/45"
                aria-label="Banner siguiente"
              >
                <Icon name="ChevronRight" size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
