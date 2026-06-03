'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { buildWhatsAppUrl } from '@/data/products';

type NavLink = {
  label: string;
  href: string;
  icon?: string;
};

const navLinks: NavLink[] = [
  { label: 'Inicio', href: '/', icon: 'Home' },
  { label: 'Productos', href: '/products', icon: 'Package' },
  { label: 'Categorías', href: '/categories' },
  { label: 'Nosotros', href: '/about', icon: 'Users' },
  { label: 'Contacto', href: '/contact', icon: 'Phone' },
];

const navIconByHref: Record<string, string> = {
  '/': 'Home',
  '/products': 'Package',
  '/categories': 'Grid3X3',
  '/about': 'Users',
  '/contact': 'Phone',
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (menuOpen) {
      const close = () => setMenuOpen(false);
      window.addEventListener('scroll', close, { once: true });
      return () => window.removeEventListener('scroll', close);
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <AppLogo size={40} />
          <span className="font-extrabold text-base sm:text-lg tracking-tight text-primary leading-tight hidden sm:block">
            ESI<br />
            <span className="text-accent text-sm font-bold">Equipos de Seguridad Industrial</span>
          </span>
          <span className="font-extrabold text-base tracking-tight text-primary sm:hidden">
            ESI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-muted/60 border border-border rounded-full px-2 py-1">
          {navLinks?.map((link) => (
            <Link
              key={link?.href}
              href={link?.href}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-white transition-all duration-200"
            >
              <Icon name={link?.icon ?? navIconByHref[link?.href]} size={15} className="shrink-0" />
              {link?.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm px-5 py-2.5"
          >
            <Icon name="MessageCircle" size={16} className="text-white" />
            Cotizar por WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-border bg-white/80 hover:bg-muted transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} className="text-primary" />
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-white/95 backdrop-blur-md border-t border-border flex flex-col">
          <nav className="flex flex-col p-6 gap-2">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold text-foreground hover:text-primary hover:bg-muted transition-all duration-200"
              >
                <Icon name={link?.icon ?? navIconByHref[link?.href]} size={18} className="shrink-0" />
                {link?.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-8 mt-auto">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full text-base py-4 justify-center"
              onClick={() => setMenuOpen(false)}
            >
              <Icon name="MessageCircle" size={20} className="text-white" />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
