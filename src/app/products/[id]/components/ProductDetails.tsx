'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { Product, buildWhatsAppUrl } from '@/data/products';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Review {
  id: number;
  author: string;
  avatar: string;
  avatarAlt: string;
  date: string;
  rating: number;
  title: string;
  body: string;
  verified: boolean;
}

interface SpecRow {
  label: string;
  value: string;
}

interface ProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

// ─── Static mock data helpers ─────────────────────────────────────────────────

function getReviews(product: Product): Review[] {
  return [
  {
    id: 1,
    author: 'Carlos Martínez',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_114713e0c-1763295039795.png",
    avatarAlt: 'Hombre hispano de 30 años con cabello corto y sonrisa amigable',
    date: '9 de diciembre de 2024',
    rating: 5,
    title: `Excelente producto, muy recomendado`,
    body: `Llevo varios meses usando este ${product.name} y estoy muy satisfecho. La calidad es excelente y cumple con todas las normas de seguridad. Totalmente recomendado para trabajo industrial.`,
    verified: true
  },
  {
    id: 2,
    author: 'María Rodríguez',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d7536c22-1763295143133.png",
    avatarAlt: 'Mujer hispana de 25 años con cabello largo y expresión alegre',
    date: '7 de diciembre de 2024',
    rating: 5,
    title: 'Mejor compra del año',
    body: 'Me encanta este producto. La calidad es increíble y es muy fácil de usar. La entrega fue rápida y el servicio al cliente excelente. Vale cada lempira.',
    verified: true
  },
  {
    id: 3,
    author: 'Jorge Hernández',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_16ecdb34c-1763295132322.png",
    avatarAlt: 'Hombre hispano de 35 años con barba corta y gafas',
    date: '4 de diciembre de 2024',
    rating: 4,
    title: 'Muy bueno, con pequeños detalles',
    body: 'En general es un excelente producto. La única razón por la que no le doy 5 estrellas es porque el empaque podría mejorar. Pero el producto en sí es de primera calidad y cumple con todo lo prometido.',
    verified: true
  },
  {
    id: 4,
    author: 'Ana López',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f24e9240-1763301267917.png",
    avatarAlt: 'Mujer hispana de 28 años con cabello ondulado y sonrisa radiante',
    date: '30 de noviembre de 2024',
    rating: 5,
    title: 'Perfecto para mi trabajo diario',
    body: 'Lo uso todos los días en el trabajo y funciona perfectamente. Me encanta la durabilidad y la comodidad. La resistencia es real, lo he probado en condiciones difíciles sin problemas.',
    verified: true
  }];

}

function getSpecs(product: Product): SpecRow[] {
  const base: SpecRow[] = [
  { label: 'Marca', value: product.brand },
  { label: 'Categoría', value: product.category },
  { label: 'Disponibilidad', value: product.availability }];

  // Map features to spec rows
  const featureSpecs = product.features.slice(0, 6).map((f, i) => {
    const parts = f.split(':');
    if (parts.length >= 2) {
      return { label: parts[0].trim(), value: parts.slice(1).join(':').trim() };
    }
    return { label: `Característica ${i + 1}`, value: f };
  });
  return [...base, ...featureSpecs];
}

// ─── Star Rating ──────────────────────────────────────────────────────────────

function StarRating({ rating, size = 16 }: {rating: number;size?: number;}) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) =>
      <svg
        key={star}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={star <= Math.round(rating) ? '#F5C518' : 'none'}
        stroke={star <= Math.round(rating) ? '#F5C518' : '#D1DCF0'}
        strokeWidth="1.5"
        aria-hidden="true">
        
          <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        
        </svg>
      )}
    </div>);

}

// ─── Rating Bar ───────────────────────────────────────────────────────────────

function RatingBar({ stars, count, total }: {stars: number;count: number;total: number;}) {
  const pct = total > 0 ? Math.round(count / total * 100) : 0;
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground w-16 shrink-0">{stars} estrellas</span>
      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-[#F5C518] rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }} />
        
      </div>
      <span className="text-sm text-muted-foreground w-4 text-right shrink-0">{count}</span>
    </div>);

}

// ─── Related Product Card ─────────────────────────────────────────────────────

function RelatedCard({ product }: {product: Product;}) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block bg-card rounded-lg border border-border overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      
      <div className="relative h-40 overflow-hidden bg-white">
        <div className="absolute inset-3">
          <AppImage
            src={product.image}
            alt={`${product.name} - ${product.category}, equipo de seguridad industrial`}
            fill
            sizes="(max-width: 640px) 50vw, 200px"
            className="w-full h-full group-hover:scale-105 transition-transform duration-300"
            style={{ objectFit: 'contain' }} />
        </div>
        
        {product.availability === 'Disponible' &&
        <div className="absolute top-2 left-2">
            <span className="bg-[#38a169] text-white text-xs font-bold px-2 py-0.5 rounded-full">
              Disponible
            </span>
          </div>
        }
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors mb-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          <StarRating rating={4.5} size={12} />
          <span className="text-xs text-muted-foreground">(4.5)</span>
        </div>
        <div className="flex items-center justify-between">
          {product.price ?
          <span className="text-primary font-bold text-sm">L {product.price.toLocaleString('es-HN')}</span> :

          <span className="text-muted-foreground text-xs">Consultar</span>
          }
        </div>
      </div>
    </Link>);

}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProductDetails({ product, relatedProducts }: ProductDetailsProps) {
  const images = Array.from(new Set([product.image, ...(product.images ?? [])])).filter(Boolean);
  const [activeImg, setActiveImg] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const reviews = getReviews(product);
  const specs = getSpecs(product);
  const avgRating = 4.7;
  const totalReviews = 128;
  const ratingDist = [{ stars: 5, count: 3 }, { stars: 4, count: 1 }, { stars: 3, count: 0 }, { stars: 2, count: 0 }, { stars: 1, count: 0 }];

  const prevImg = useCallback(() => {
    setActiveImg((i) => i === 0 ? images.length - 1 : i - 1);
  }, [images.length]);

  const nextImg = useCallback(() => {
    setActiveImg((i) => i === images.length - 1 ? 0 : i + 1);
  }, [images.length]);

  const whatsappUrl = buildWhatsAppUrl(product.name);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link href="/" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Home" size={14} />
              <span>Inicio</span>
            </Link>
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <Icon name="ChevronRight" size={14} />
            <Link href="/products" className="hover:text-primary transition-colors">Productos</Link>
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <Icon name="ChevronRight" size={14} />
            <span className="text-foreground font-medium truncate max-w-[200px]">{product.name}</span>
          </li>
        </ol>
      </nav>

      {/* Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* ── Left: Image Gallery ── */}
        <div className="space-y-4">
          {/* Main image */}
          <div className="relative bg-card rounded-lg overflow-hidden border border-border shadow-sm">
            <div
              className="relative h-[520px] w-full cursor-zoom-in bg-white sm:h-[640px] lg:h-[680px]"
              onClick={() => setZoomed(true)}>
              
              <div className="absolute inset-3 sm:inset-5">
                <AppImage
                  src={images[activeImg]}
                  alt={`${product.name} - vista principal del producto, equipo de seguridad industrial`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 568px"
                  className="w-full h-full transition-transform duration-300 hover:scale-105"
                  style={{ objectFit: 'contain' }}
                  priority />
              </div>
              
              {/* Prev/Next */}
              {images.length > 1 &&
              <>
                <button
                  onClick={(e) => {e.stopPropagation();prevImg();}}
                  aria-label="Imagen anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-card/90 hover:bg-card rounded-full shadow-md border border-border transition-all duration-200 hover:scale-110">
                  
                  <Icon name="ChevronLeft" size={18} className="text-foreground" />
                </button>
                <button
                  onClick={(e) => {e.stopPropagation();nextImg();}}
                  aria-label="Imagen siguiente"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-card/90 hover:bg-card rounded-full shadow-md border border-border transition-all duration-200 hover:scale-110">
                  
                  <Icon name="ChevronRight" size={18} className="text-foreground" />
                </button>
              </>
              }
              {/* Zoom hint */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-card/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-muted-foreground border border-border">
                <Icon name="ZoomIn" size={12} />
                <span>Click para zoom</span>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2">
            {images.map((img, i) =>
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              aria-label={`Ver imagen ${i + 1}`}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              activeImg === i ?
              'border-primary shadow-sm' :
              'border-border hover:border-muted-foreground'}`
              }>
              
                <AppImage
                src={img}
                alt={`${product.name} - miniatura ${i + 1}`}
                fill
                sizes="80px"
                className="w-full h-full"
                style={{ objectFit: 'contain' }} />
              
              </button>
            )}
          </div>
        </div>

        {/* ── Right: Product Info ── */}
        <div className="space-y-6">
          {/* Title + Rating */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{product.brand}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{product.category}</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground leading-tight mb-3">{product.name}</h1>
            <div className="flex items-center gap-2">
              <StarRating rating={avgRating} size={18} />
              <span className="text-sm text-muted-foreground">{avgRating} ({totalReviews} reseñas)</span>
            </div>
          </div>

          {/* Price + Availability */}
          <div className="border-t border-b border-border py-4">
            <div className="flex items-center gap-4 mb-2">
              {product.price ?
              <span className="text-4xl font-bold text-foreground">
                  L {product.price.toLocaleString('es-HN')}
                </span> :

              <span className="text-2xl font-bold text-muted-foreground">Consultar precio</span>
              }
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
              product.availability === 'Disponible' ? 'bg-[#38a169]' : 'bg-[#d69e2e]'}`
              } />
              <span className={`text-sm font-medium ${
              product.availability === 'Disponible' ? 'text-[#38a169]' : 'text-[#d69e2e]'}`
              }>
                {product.availability === 'Disponible' ? 'En stock' : 'Bajo pedido'}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-2">Descripción</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
          </div>

          {/* WhatsApp Quote CTA */}
          <div className="space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#1ebe5d] transition-all duration-200 font-semibold text-base shadow-sm hover:shadow-md hover:-translate-y-0.5">
              
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Cotizar por WhatsApp
            </a>
            <p className="text-xs text-center text-muted-foreground">Respuesta inmediata · Sin compromiso · Precio especial</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-3">Características</h3>
            <ul className="space-y-2">
              {product.features.map((feat, i) =>
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#38a169" strokeWidth="2.5" width="16" height="16" className="shrink-0 mt-0.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  {feat}
                </li>
              )}
            </ul>
          </div>

          {/* Delivery info */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border border-border">
              <Icon name="Truck" size={20} className="text-primary shrink-0" />
              <div>
                <p className="text-xs font-semibold text-foreground">Envío a Domicilio</p>
                <p className="text-xs text-muted-foreground">Entrega en todo Honduras</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border border-border">
              <Icon name="ShieldCheck" size={20} className="text-primary shrink-0" />
              <div>
                <p className="text-xs font-semibold text-foreground">Pago Seguro</p>
                <p className="text-xs text-muted-foreground">Efectivo o transferencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width WhatsApp Banner */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#1B3A6B] text-white rounded-lg hover:bg-[#162f58] transition-all duration-200 font-semibold text-base shadow-sm hover:shadow-md mb-12">
        
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
          <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
          <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
        </svg>
        ¿Tienes preguntas? Contáctanos por WhatsApp
      </a>

      {/* Technical Specifications */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Especificaciones Técnicas</h2>
        <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {specs.map((spec, i) =>
            <div
              key={i}
              className={`flex items-start gap-4 px-6 py-4 border-b border-border last:border-b-0 ${
              i % 2 === 0 ? 'md:border-r' : ''} ${

              i >= specs.length - (specs.length % 2 === 0 ? 2 : 1) ? 'md:border-b-0' : ''}`
              }>
              
                <span className="text-sm font-semibold text-foreground w-36 shrink-0">{spec.label}</span>
                <span className="text-sm text-muted-foreground">{spec.value}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
            {/*<h2 className="text-2xl font-bold text-foreground">Reseñas de Clientes</h2>*/}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 text-sm font-semibold">
            
            <Icon name="MessageCircle" size={16} className="text-white" />
            Consultar por WhatsApp
          </a>
        </div>

        {/* Rating summary */}
       
         {/* <div className="bg-card rounded-lg border border-border p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-8">
          
            <div className="flex flex-col items-center justify-center md:w-40 shrink-0">
              <span className="text-5xl font-bold text-foreground">{avgRating}</span>
              <StarRating rating={avgRating} size={20} />
              <p className="text-sm text-muted-foreground mt-1">Basado en {totalReviews} reseñas</p>
            </div>
          
            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => {
                const found = ratingDist.find((r) => r.stars === stars);
                return (
                  <RatingBar
                    key={stars}
                    stars={stars}
                    count={found?.count ?? 0}
                    total={ratingDist.reduce((a, b) => a + b.count, 0)} />);


              })}
            </div>
          </div>
        </div> */}

        {/* Review cards */}
        {/*<div className="space-y-4">
          {reviews.map((review) =>
          <div key={review.id} className="bg-card rounded-lg border border-border p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-border">
                  <AppImage
                  src={review.avatar}
                  alt={review.avatarAlt}
                  fill
                  sizes="48px"
                  className="object-cover" />
                
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{review.author}</h4>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                    <StarRating rating={review.rating} size={14} />
                  </div>
                  <h5 className="font-semibold text-foreground text-sm mb-1">{review.title}</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">{review.body}</p>
                  {review.verified &&
                <div className="flex items-center gap-1 mt-3">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#38a169" strokeWidth="2" width="14" height="14" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span className="text-xs text-[#38a169] font-medium">Compra Verificada</span>
                    </div>
                }
                </div>
              </div>
            </div>
          )}
        </div>*/}
     
     
     
      </div>

       

      {/* Related Products */}
      {relatedProducts.length > 0 &&
      <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Productos Relacionados</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedProducts.map((rp) =>
          <RelatedCard key={rp.id} product={rp} />
          )}
          </div>
        </div>
      }

      {/* Zoom Modal */}
      {zoomed &&
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
        onClick={() => setZoomed(false)}
        role="dialog"
        aria-modal="true"
        aria-label="Imagen ampliada">
        
          <div className="relative h-[88vh] w-full max-w-5xl rounded-xl overflow-hidden bg-white p-4 shadow-2xl sm:p-6">
            <div className="relative h-full w-full">
              <AppImage
              src={images[activeImg]}
              alt={`${product.name} - imagen ampliada`}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="h-full w-full"
              style={{ objectFit: 'contain' }}
              priority />
            </div>
          
          </div>
          <button
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-card rounded-full shadow-lg border border-border hover:bg-muted transition-colors"
          onClick={() => setZoomed(false)}
          aria-label="Cerrar zoom">
          
            <Icon name="X" size={20} className="text-foreground" />
          </button>
        </div>
      }
    </div>);

}
