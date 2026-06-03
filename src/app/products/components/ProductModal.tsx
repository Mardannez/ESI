'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { Product, buildWhatsAppUrl } from '@/data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [product]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle de ${product.name}`}
    >
      <div className="bg-card rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-border">
        {/* Close button */}
        <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-card/80 backdrop-blur-sm border-b border-border">
          <Link
            href={`/products/${product.id}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            onClick={onClose}
          >
            <Icon name="ExternalLink" size={13} />
            Ver página completa
          </Link>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-muted hover:bg-border transition-colors"
            aria-label="Cerrar"
          >
            <Icon name="X" size={18} className="text-foreground" />
          </button>
        </div>

        <div className="p-6">
          {/* Image */}
          <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden mb-6">
            <AppImage
              src={product.image}
              alt={`${product.name} - vista detallada del producto, sobre fondo claro y bien iluminado`}
              fill
              sizes="(max-width: 640px) 100vw, 672px"
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className={product.availability === 'Disponible' ? 'badge-available' : 'badge-order'}>
                <span className={`w-1.5 h-1.5 rounded-full inline-block ${product.availability === 'Disponible' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                {product.availability}
              </span>
              <span className="bg-primary/90 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {product.category}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">{product.brand}</p>
              <h2 className="text-xl font-extrabold text-foreground mt-1">{product.name}</h2>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>

            {/* Features */}
            {product.features.length > 0 && (
              <div>
                <h3 className="font-bold text-foreground text-sm mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle" size={14} className="text-primary" />
                  Características técnicas
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Price + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-border">
              {product.price ? (
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Precio referencial</p>
                  <span className="text-2xl font-extrabold text-primary">
                    L {product.price.toLocaleString('es-HN')}
                  </span>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Precio disponible al consultar</p>
              )}
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Link
                  href={`/products/${product.id}`}
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 border-border text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-200"
                >
                  <Icon name="Eye" size={15} />
                  Ver detalles
                </Link>
                <a
                  href={buildWhatsAppUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-sm px-6 py-3 w-full sm:w-auto justify-center"
                >
                  <Icon name="MessageCircle" size={16} className="text-white" />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}