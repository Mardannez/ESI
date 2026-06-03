import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ProductDetails from './components/ProductDetails';
import { products } from '@/data/products';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) return { title: 'Producto no encontrado — SeguridadHN' };
  return {
    title: `${product.name} — SeguridadHN`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Fill up related with other products if not enough in same category
  const extraRelated = products
    .filter((p) => p.id !== product.id && !related.find((r) => r.id === p.id))
    .slice(0, Math.max(0, 4 - related.length));

  const relatedProducts = [...related, ...extraRelated].slice(0, 7);

  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20 bg-background min-h-screen">
        <ProductDetails product={product} relatedProducts={relatedProducts} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
