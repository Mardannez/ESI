'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { buildWhatsAppUrl } from '@/data/products';

const heroTiles = [
{
  type: 'image',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1f98a0c2b-1777527547307.png",
  alt: 'Worker wearing yellow hard hat on dark industrial site, dramatic shadows, heavy machinery background',
  rotate: 'rotate-2',
  animClass: 'tile-float-1'
},
{
  type: 'stat',
  value: '+500',
  label: 'Productos en catálogo',
  rotate: '-rotate-2',
  animClass: 'tile-float-2'
},
{
  type: 'image',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1bd90196e-1772126031488.png",
  alt: 'Industrial safety gloves on dark steel surface, low-key lighting, deep shadows',
  rotate: 'rotate-1',
  animClass: 'tile-float-3'
},
{
  type: 'stat',
  value: '100%',
  label: 'Certificados industriales',
  rotate: '-rotate-1',
  animClass: 'tile-float-4',
  accent: true
},
{
  type: 'image',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_14d4cb705-1772516923402.png",
  alt: 'Orange reflective safety vest on dark industrial warehouse floor, dim atmospheric lighting',
  rotate: 'rotate-3',
  animClass: 'tile-float-5',
  hideMobile: true
}];


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary pt-20">
      {/* Atmospheric depth layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-secondary/80 to-primary" />
        <div className="absolute top-20 left-1/4 w-96 h-96 blob-navy opacity-60" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 blob-accent" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 flex flex-col items-center text-center">
        {/* Eyebrow badge */}
        <div className="animate-slide-in-0 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-accent badge-pulse inline-block" />
            Proveedor de Seguridad Industrial en Honduras
          </span>
        </div>

        {/* Main headline */}
        <h1 className="animate-slide-in-1 text-hero-xl font-extrabold max-w-4xl mx-auto mb-6">
          <span className="gradient-text-primary block">Equipos de Seguridad</span>
          <span className="gradient-text-accent">Industrial</span>
          <span className="gradient-text-primary"> para Empresas</span>
          <br />
          <span className="gradient-text-primary">y Trabajadores</span>
        </h1>

        {/* Sub copy */}
        <p className="animate-slide-in-2 text-white/70 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-10">
          Encuentra cascos, guantes, botas, chalecos, lentes, arneses y más productos
          certificados para proteger a tu equipo de trabajo.
        </p>

        {/* CTAs */}
        <div className="animate-slide-in-3 flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Link href="/products" className="btn-accent text-base px-8 py-4 w-full sm:w-auto justify-center">
            <Icon name="ShoppingBag" size={18} className="text-accent-foreground" />
            Ver catálogo
          </Link>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-8 py-4 w-full sm:w-auto justify-center">
            
            <Icon name="MessageCircle" size={18} className="text-white" />
            Cotizar por WhatsApp
          </a>
        </div>

        {/* Tile Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-5xl">
          {heroTiles.map((tile, i) =>
          <div
            key={i}
            className={`${tile.animClass} ${tile.hideMobile ? 'hidden lg:block' : ''} ${tile.rotate}`}>
            
              {tile.type === 'image' ?
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <AppImage
                src={tile.src!}
                alt={tile.alt!}
                fill
                sizes="(max-width: 768px) 45vw, 20vw"
                className="object-cover w-full h-full" />
              
                </div> :

            <div
              className={`aspect-[3/4] rounded-2xl flex flex-col justify-between p-6 text-left shadow-2xl ${
              tile.accent ?
              'bg-accent text-accent-foreground' :
              'bg-white/10 backdrop-blur-sm border border-white/20 text-white'}`
              }>
              
                  <span className="text-3xl sm:text-4xl font-extrabold leading-none">{tile.value}</span>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-70">{tile.label}</span>
                </div>
            }
            </div>
          )}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
          <path d="M0 60L480 20L960 40L1440 0V60H0Z" fill="var(--background)" />
        </svg>
      </div>
    </section>);

}