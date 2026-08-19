import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contacto y Cotizaciones | ESI Honduras',
  description:
    'Contacta a ESI Honduras para cotizar equipos de seguridad industrial y recibir asesoría personalizada por teléfono, correo o WhatsApp.',
  path: '/contact',
});

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
