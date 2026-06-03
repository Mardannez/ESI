import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { buildWhatsAppUrl } from '@/data/products';

export const metadata: Metadata = {
  title: 'Nosotros — ESI',
  description: 'Conoce a ESI – Equipos de Seguridad Industrial, más de 10 años protegiendo empresas y trabajadores en Honduras con equipos certificados.'
};

const values = [
{
  icon: 'ShieldCheck',
  title: 'Seguridad',
  description: 'Cada producto que ofrecemos cumple estrictos estándares de certificación internacional para garantizar la protección real de los trabajadores.',
  color: 'bg-primary/10 text-primary'
},
{
  icon: 'HandshakeIcon',
  title: 'Confianza',
  description: 'Construimos relaciones duraderas con nuestros clientes basadas en transparencia, honestidad y cumplimiento de compromisos.',
  color: 'bg-accent/20 text-amber-700'
},
{
  icon: 'Target',
  title: 'Compromiso',
  description: 'Nos comprometemos a entregar soluciones de seguridad efectivas, con asesoría técnica y seguimiento post-venta.',
  color: 'bg-blue-100 text-blue-700'
},
{
  icon: 'HeartHandshake',
  title: 'Servicio',
  description: 'Atención personalizada, respuesta rápida y disponibilidad para resolver cualquier consulta de nuestros clientes.',
  color: 'bg-green-100 text-green-700'
}];


const stats = [
{ value: '10+', label: 'Años en el mercado', icon: 'Calendar' },
{ value: '500+', label: 'Productos en catálogo', icon: 'Package' },
{ value: '200+', label: 'Empresas clientes', icon: 'Building2' },
{ value: '18', label: 'Departamentos atendidos', icon: 'MapPin' }];


export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Hero */}
        <div className="bg-primary py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest mb-4">
              <Icon name="Building2" size={12} className="text-accent" />
              Nuestra empresa
            </span>
            <h1 className="text-section-title font-extrabold text-white mt-2 mb-3">
              Quiénes <span className="text-accent">somos</span>
            </h1>
            <p className="text-white/70 text-base max-w-xl mx-auto">
              Más de una década protegiendo equipos de trabajo en Honduras con productos certificados y asesoría personalizada.
            </p>
          </div>
        </div>

        {/* Mission section */}
        <section className="py-14 lg:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative h-72 lg:h-[420px] rounded-3xl overflow-hidden">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_142ab1b9f-1774452573251.png"
                  alt="Industrial safety workers wearing hard hats and safety vests in a well-lit warehouse, bright airy environment with white walls"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover w-full h-full"
                  priority />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <span className="section-label mb-4 inline-flex">
                    <Icon name="Info" size={12} className="text-primary" />
                    Nuestra misión
                  </span>
                  <h2 className="text-section-title font-extrabold text-foreground mt-3 mb-4">
                    Protegemos vidas con
                    <span className="text-primary"> equipos confiables</span>
                  </h2>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Somos una empresa dedicada a proveer artículos de seguridad industrial para empresas,
                  contratistas y trabajadores independientes. Nuestro objetivo es ofrecer productos
                  confiables, asesoría personalizada y soluciones prácticas para proteger a los equipos
                  de trabajo en Honduras.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Trabajamos directamente con fabricantes y distribuidores certificados para garantizar
                  que cada producto que llega a nuestros clientes cumpla con las normas internacionales
                  de seguridad industrial.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link href="/products" className="btn-primary inline-flex">
                    <Icon name="ShoppingBag" size={16} className="text-white" />
                    Ver catálogo
                  </Link>
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp inline-flex">
                    
                    <Icon name="MessageCircle" size={16} className="text-white" />
                    Contactar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-muted/40 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s) =>
              <div key={s.label} className="text-center p-6 bg-card rounded-2xl border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon name={s.icon as 'Calendar'} size={20} className="text-primary" />
                  </div>
                  <div className="text-3xl font-extrabold text-primary mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">{s.label}</div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-14 lg:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="section-label mb-4 inline-flex">
                <Icon name="Heart" size={12} className="text-primary" />
                Nuestros valores
              </span>
              <h2 className="text-section-title font-extrabold text-foreground mt-3">
                Los principios que guían
                <span className="text-primary"> nuestro trabajo</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) =>
              <div key={v.title} className="bg-card border border-border rounded-2xl p-6 card-hover">
                  <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mb-4`}>
                    <Icon name={v.icon as 'ShieldCheck'} size={22} />
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              ¿Listo para proteger a tu equipo?
            </h2>
            <p className="text-white/70 text-sm mb-6">
              Contáctanos hoy y recibe asesoría personalizada sobre los equipos de seguridad que necesitas.
            </p>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex text-base px-8 py-4">
              
              <Icon name="MessageCircle" size={18} className="text-white" />
              Solicitar cotización por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>);

}