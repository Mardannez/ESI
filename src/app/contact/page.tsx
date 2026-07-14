'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Icon from '@/components/ui/AppIcon';
import { buildWhatsAppUrl } from '@/data/products';

const contactInfo = [
  {
    icon: 'MessageCircle',
    label: 'WhatsApp',
    value: '(504) 8792-1620',
    href: 'https://wa.me/50487921620',
    color: 'bg-green-100 text-green-700',
  },
  {
    icon: 'Phone',
    label: 'Teléfono',
    value: '(504) 8792-1620',
    href: 'tel:+50487921620',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: 'Mail',
    label: 'Correo electrónico',
    value: 'cotizaciones@csihonduras.com',
    href: 'mailto:cotizaciones@csihonduras.com',
    color: 'bg-accent/20 text-amber-700',
  },
  {
    icon: 'MapPin',
    label: 'Ubicación',
    value: 'Honduras',
    href: '#',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: 'Clock',
    label: 'Horario de atención',
    value: 'Lunes a Viernes: 8:00am – 6:00pm\nSábados: 8:00am – 12:00pm',
    href: '#',
    color: 'bg-purple-100 text-purple-700',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit — no backend
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Page hero */}
        <div className="bg-primary py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest mb-4">
              <Icon name="Phone" size={12} className="text-accent" />
              Estamos para servirte
            </span>
            <h1 className="text-section-title font-extrabold text-white mt-2 mb-3">
              Contáctanos
            </h1>
            <p className="text-white/70 text-base max-w-xl mx-auto">
              Respuesta rápida por WhatsApp. También puedes enviarnos un mensaje y te contactamos en breve.
            </p>
          </div>
        </div>

        {/* WhatsApp CTA banner */}
        <div className="bg-green-50 border-b border-green-200 py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <Icon name="MessageCircle" size={20} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-green-900 text-sm">Respuesta inmediata por WhatsApp</p>
                <p className="text-green-700 text-xs">Escríbenos ahora y recibe cotización en minutos</p>
              </div>
            </div>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm px-6 py-3 flex-shrink-0"
            >
              <Icon name="MessageCircle" size={16} className="text-white" />
              Abrir WhatsApp
            </a>
          </div>
        </div>

        {/* Main content */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact info */}
              <div className="space-y-5">
                <h2 className="text-2xl font-extrabold text-foreground mb-6">
                  Información de contacto
                </h2>
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-card border border-border rounded-2xl">
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Icon name={item.icon as 'Phone'} size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">{item.label}</p>
                      {item.href !== '#' ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-foreground font-semibold text-sm hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-semibold text-sm whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact form */}
              <div className="bg-card border border-border rounded-3xl p-6 sm:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="CheckCircle" size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-extrabold text-foreground text-xl mb-2">¡Mensaje enviado!</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Nos pondremos en contacto contigo muy pronto. También puedes escribirnos directamente por WhatsApp.
                    </p>
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp inline-flex"
                    >
                      <Icon name="MessageCircle" size={16} className="text-white" />
                      Ir a WhatsApp
                    </a>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-extrabold text-foreground mb-6">
                      Envíanos un mensaje
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-foreground uppercase tracking-wide mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Ej. Carlos Mendoza"
                          className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-foreground uppercase tracking-wide mb-2">
                          Empresa
                        </label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Ej. Constructora del Valle S.A."
                          className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-foreground uppercase tracking-wide mb-2">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="(504) 8792-1620"
                          className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-foreground uppercase tracking-wide mb-2">
                          Mensaje *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Describe qué productos necesitas o en qué podemos ayudarte..."
                          className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full text-base py-4 justify-center">
                        <Icon name="Send" size={16} className="text-white" />
                        Enviar mensaje
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}