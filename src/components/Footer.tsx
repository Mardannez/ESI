import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { buildWhatsAppUrl } from '@/data/products';

const quickLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Productos', href: '/products' },
  { label: 'Categorías', href: '/categories' },
  { label: 'Nosotros', href: '/about' },
  { label: 'Contacto', href: '/contact' },
];

const categoryLinks = [
  'Cascos', 'Guantes', 'Botas', 'Chalecos', 'Protección Visual',
];

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10 pt-12 pb-8">
      {/* Main row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <AppLogo size={40} />
              <span className="font-extrabold text-white text-base leading-tight">
                ESI<br />
                <span className="text-accent">Equipos de Seguridad Industrial</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Proveedor de equipos de seguridad industrial para empresas y trabajadores en Honduras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Navegación</p>
            <div className="flex flex-col gap-2">
              {quickLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href}
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors"
                >
                  {link?.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Categorías</p>
            <div className="flex flex-col gap-2">
              {categoryLinks?.map((cat) => (
                <Link
                  key={cat}
                  href={`/products?category=${encodeURIComponent(cat)}`}
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Contacto</p>
            <div className="flex flex-col gap-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                <Icon name="MessageCircle" size={14} className="text-accent flex-shrink-0" />
                (504) 8792-1620
              </a>
              <a
                href="tel:+50487921620"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                <Icon name="Phone" size={14} className="text-accent flex-shrink-0" />
                (504) 8792-1620
              </a>
              <a
                href="mailto:cotizaciones@csihonduras.com"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                <Icon name="Mail" size={14} className="text-accent flex-shrink-0" />
                cotizaciones@csihonduras.com
              </a>
              <span className="flex items-center gap-2 text-white/60 text-sm">
                <Icon name="MapPin" size={14} className="text-accent flex-shrink-0" />
                Honduras
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">
            © 2026 ESI – Equipos de Seguridad Industrial. Todos los derechos reservados.
          </p>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs px-4 py-2"
          >
            <Icon name="MessageCircle" size={14} className="text-white" />
            Solicitar cotización
          </a>
        </div>
      </div>
    </footer>
  );
}