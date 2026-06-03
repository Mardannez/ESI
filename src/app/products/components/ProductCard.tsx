'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { Product, buildWhatsAppUrl } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onViewDetail: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetail }: ProductCardProps) {
  return (
    <div className="product-card group flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => onViewDetail(product)}>
        <AppImage
          src={product.image}
          alt={`${product.name} - ${product.category}, producto industrial sobre fondo neutro`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        {/* Availability */}
        <div className="absolute top-3 left-3">
          <span className={product.availability === 'Disponible' ? 'badge-available' : 'badge-order'}>
            <span className={`w-1.5 h-1.5 rounded-full inline-block ${product.availability === 'Disponible' ? 'bg-green-500' : 'bg-yellow-500'}`} />
            {product.availability}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-primary/90 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {product.category}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            Ver detalles
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide mb-1">{product.brand}</p>
        <h3
          className="font-bold text-foreground text-sm mb-2 line-clamp-2 cursor-pointer hover:text-primary transition-colors"
          onClick={() => onViewDetail(product)}
        >
          {product.name}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2 flex-1">{product.description}</p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border gap-2">
          {product.price ? (
            <span className="text-primary font-extrabold text-base">
              L {product.price.toLocaleString('es-HN')}
            </span>
          ) : (
            <span className="text-muted-foreground text-xs font-medium">Consultar precio</span>
          )}
          <div className="flex items-center gap-1.5">
            <Link
              href={`/products/${product.id}`}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-border text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-200"
              aria-label={`Ver detalles de ${product.name}`}
            >
              <Icon name="Eye" size={12} />
              Detalles
            </Link>
            <a
              href={buildWhatsAppUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs px-3 py-2"
            >
              <Icon name="MessageCircle" size={13} className="text-white" />
              Cotizar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}