'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { buildWhatsAppUrl } from '@/data/products';

type RiskType = 'electrico' | 'corte' | 'quimico' | 'termico' | 'altura' | 'senalizacion' | 'ergonomia';

type CategoryGuide = {
  name: string;
  slug: string;
  productCount: number;
  image: string;
  icon: string;
  risks: RiskType[];
  subcategories: string[];
  commercialFocus: string;
  keywords: string[];
  advisoryNote?: string;
  productCategory?: string;
};

const riskFilters: Array<{ id: 'all' | RiskType; label: string; icon: string }> = [
  { id: 'all', label: 'Todos', icon: 'Grid3X3' },
  { id: 'electrico', label: 'Eléctrico', icon: 'Bolt' },
  { id: 'corte', label: 'Corte', icon: 'Scissors' },
  { id: 'quimico', label: 'Químico', icon: 'FlaskConical' },
  { id: 'termico', label: 'Térmico', icon: 'Flame' },
  { id: 'altura', label: 'Altura', icon: 'MoveUp' },
  { id: 'senalizacion', label: 'Señalización', icon: 'TriangleAlert' },
  { id: 'ergonomia', label: 'Ergonomía', icon: 'Activity' },
];

const categoryGuides: CategoryGuide[] = [
  {
    name: 'Protección para cuerpo',
    slug: 'proteccion-para-cuerpo',
    productCount: 1,
    image: 'https://images.unsplash.com/photo-1602886019766-b558d889d0e3',
    icon: 'Shirt',
    risks: ['senalizacion', 'termico', 'ergonomia'],
    subcategories: ['Alta visibilidad', 'Chalecos reflectivos', 'Ropa de seguridad'],
    commercialFocus:
      'Usar imágenes grandes del producto en uso y destacar visibilidad, comodidad, tallas y aplicación en zonas con maquinaria o vehículos.',
    keywords: ['chalecos reflectivos', 'ropa de seguridad', 'alta visibilidad'],
    productCategory: 'Protección para cuerpo',
  },
  {
    name: 'Protección para manos',
    slug: 'proteccion-para-manos',
    productCount: 8,
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11ee0d21e-1779252722362.png',
    icon: 'Hand',
    risks: ['electrico', 'corte', 'quimico', 'termico'],
    subcategories: ['Guantes dieléctricos', 'Guantes anticorte', 'Guantes químicos', 'Guantes térmicos', 'Guantes de cuero', 'Mangas de protección'],
    commercialFocus:
      'Crear filtros por riesgo principal, marca, tallas y norma. En el detalle conviene incluir aplicaciones y advertencias de uso cuando aplique.',
    keywords: ['guantes industriales', 'guantes dieléctricos', 'guantes anticorte', 'guantes químicos'],
    advisoryNote: 'Validar voltajes de guantes dieléctricos contra ficha técnica del fabricante antes de publicarlos como dato definitivo.',
    productCategory: 'Protección para manos',
  },
  {
    name: 'Protección para cabeza, vista, audición y respiración',
    slug: 'proteccion-para-cabeza',
    productCount: 7,
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_12e845811-1779252722026.png',
    icon: 'HardHat',
    risks: ['electrico', 'quimico', 'senalizacion'],
    subcategories: ['Cascos y accesorios', 'Protección visual', 'Protección auditiva', 'Protección respiratoria', 'Accesorios para casco'],
    commercialFocus:
      'Usar esta categoría principal con subcategorías claras para evitar que respiradores, tapones auditivos o lentes queden ocultos dentro de una categoría demasiado general.',
    keywords: ['cascos industriales', 'protección visual', 'protección auditiva', 'protección respiratoria'],
    advisoryNote: 'Validar datos de voltaje en casco dieléctrico contra ficha técnica del fabricante antes de publicar valores definitivos.',
    productCategory: 'Protección para cabeza, vista, audición y respiración',
  },
  {
    name: 'Protección eléctrica y bloqueo LOTO',
    slug: 'proteccion-electrica',
    productCount: 2,
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4',
    icon: 'LockKeyhole',
    risks: ['electrico', 'senalizacion'],
    subcategories: ['Candados LOTO', 'Etiquetas de bloqueo', 'Bloqueo de energía'],
    commercialFocus:
      'Presentar como bloqueo y etiquetado LOTO dentro de seguridad eléctrica, explicando que candados y etiquetas forman parte de un procedimiento de control de energía.',
    keywords: ['bloqueo LOTO', 'candados LOTO', 'etiquetas de bloqueo', 'seguridad eléctrica'],
  },
  {
    name: 'Protección para altura',
    slug: 'proteccion-para-altura',
    productCount: 11,
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_13037b4bd-1779252721831.png',
    icon: 'MoveUp',
    risks: ['altura'],
    subcategories: ['Arneses', 'Eslingas', 'Anclajes', 'Líneas de vida', 'Conectores', 'Absorbedores de impacto'],
    commercialFocus:
      'Ordenar por tipo de sistema: arneses, eslingas, anclajes, líneas de vida y conectores. Destacar compatibilidad del sistema completo.',
    keywords: ['arneses de seguridad', 'equipo para altura', 'líneas de vida', 'eslingas de seguridad'],
    advisoryNote: 'Publicar con asesoría técnica y advertencia de selección según análisis de riesgo, sistema completo y normativa aplicable.',
    productCategory: 'Protección para altura',
  },
  {
    name: 'Señalización y control de áreas',
    slug: 'senalizacion-industrial',
    productCount: 1,
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_10638ea13-1779252722532.png',
    icon: 'TriangleAlert',
    risks: ['senalizacion'],
    subcategories: ['Señales preventivas', 'Señales obligatorias', 'Conos', 'Cintas de advertencia', 'Rotulación industrial'],
    commercialFocus:
      'Agrupar productos por mensaje, material, visibilidad y ambiente de uso para que el cliente encuentre rápido la señal correcta.',
    keywords: ['señalización industrial', 'señales de seguridad', 'cintas de advertencia'],
    productCategory: 'Señalización y control de áreas',
  },
  {
    name: 'Ergonomía',
    slug: 'ergonomia-industrial',
    productCount: 1,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758',
    icon: 'Activity',
    risks: ['ergonomia'],
    subcategories: ['Alfombras antifatiga', 'Superficies de apoyo', 'Estaciones de trabajo'],
    commercialFocus:
      'Destacar reducción de fatiga, comodidad durante jornadas prolongadas, medidas, grosor y áreas recomendadas de uso.',
    keywords: ['alfombra antifatiga', 'ergonomía industrial', 'tapete ergonómico'],
    productCategory: 'Ergonomía',
  },
];

function buildProductsHref(category: CategoryGuide) {
  return category.productCategory
    ? `/products?category=${encodeURIComponent(category.productCategory)}`
    : `/products?search=${encodeURIComponent(category.slug)}`;
}

export default function CategoryGuideGrid() {
  const [activeRisk, setActiveRisk] = useState<'all' | RiskType>('all');

  const visibleCategories = useMemo(
    () =>
      activeRisk === 'all'
        ? categoryGuides
        : categoryGuides.filter((category) => category.risks.includes(activeRisk)),
    [activeRisk]
  );

  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="section-label mb-3 inline-flex">
              <Icon name="SlidersHorizontal" size={12} className="text-primary" />
              Menú principal por riesgo
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Categorías claras para compra y búsqueda
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Usa los filtros para navegar por riesgo y cada tarjeta muestra slug sugerido, subcategorías, palabras clave y enfoque comercial.
          </p>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {riskFilters.map((risk) => {
            const active = activeRisk === risk.id;
            return (
              <button
                key={risk.id}
                type="button"
                onClick={() => setActiveRisk(risk.id)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2 text-sm font-bold transition-all ${
                  active
                    ? 'border-primary bg-primary text-white shadow-sm'
                    : 'border-border bg-card text-foreground hover:border-primary hover:text-primary'
                }`}
              >
                <Icon name={risk.icon} size={16} className={active ? 'text-white' : 'text-primary'} />
                {risk.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {visibleCategories.map((category) => (
            <article
              key={category.slug}
              className="product-card group grid overflow-hidden md:grid-cols-[220px_1fr]"
            >
              <Link href={buildProductsHref(category)} className="relative min-h-56 overflow-hidden">
                <AppImage
                  src={category.image}
                  alt={`${category.name} - categoría de seguridad industrial`}
                  fill
                  sizes="(max-width: 768px) 100vw, 220px"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-primary shadow-sm">
                  <Icon name={category.icon} size={22} />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-extrabold text-accent-foreground">
                    <Icon name="Package" size={12} />
                    {category.productCount} producto{category.productCount !== 1 ? 's' : ''}
                  </span>
                </div>
              </Link>

              <div className="p-5">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  {category.risks.map((risk) => {
                    const riskMeta = riskFilters.find((item) => item.id === risk);
                    return (
                      <span
                        key={risk}
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/60 px-2 py-1 text-[11px] font-bold text-primary"
                      >
                        <Icon name={riskMeta?.icon ?? 'ShieldCheck'} size={12} />
                        {riskMeta?.label}
                      </span>
                    );
                  })}
                </div>

                <h3 className="text-lg font-extrabold text-foreground">{category.name}</h3>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">
                  Slug SEO: <span className="text-primary">{category.slug}</span>
                </p>

                <div className="mt-4">
                  <h4 className="text-xs font-extrabold uppercase tracking-wide text-foreground">Subcategorías sugeridas</h4>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {category.subcategories.map((item) => (
                      <span key={item} className="rounded-lg bg-muted px-2 py-1 text-xs font-semibold text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{category.commercialFocus}</p>

                {category.advisoryNote && (
                  <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs font-semibold leading-relaxed text-amber-900">
                    <span className="inline-flex items-center gap-1 text-amber-800">
                      <Icon name="TriangleAlert" size={14} />
                      Observación técnica:
                    </span>{' '}
                    {category.advisoryNote}
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {category.keywords.map((keyword) => (
                    <span key={keyword} className="text-[11px] font-bold text-muted-foreground">
                      #{keyword}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <Link href={buildProductsHref(category)} className="btn-primary text-xs py-2.5 justify-center">
                    <Icon name="ShoppingBag" size={14} className="text-white" />
                    Ver productos
                  </Link>
                  <a
                    href={buildWhatsAppUrl(`productos de ${category.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-xs py-2.5 justify-center"
                  >
                    <Icon name="MessageCircle" size={14} className="text-white" />
                    Cotizar categoría
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
