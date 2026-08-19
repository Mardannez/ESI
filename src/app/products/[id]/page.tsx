import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ProductDetails from './components/ProductDetails';
import { products } from '@/data/products';
import { absoluteUrl, createPageMetadata, serializeJsonLd, siteConfig } from '@/lib/seo';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) return { title: 'Producto no encontrado | ESI Honduras' };

  return createPageMetadata({
    title: `${product.name} | ESI Honduras`,
    description: product.shortDescription,
    path: `/products/${product.id}`,
    image: product.image,
  });
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

  const productUrl = absoluteUrl(`/products/${product.id}`);
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#product`,
    name: product.name,
    description: product.shortDescription,
    image: (product.images?.length ? product.images : [product.image]).map(absoluteUrl),
    sku: product.code,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    url: productUrl,
    ...(product.price !== null
      ? {
          offers: {
            '@type': 'Offer',
            url: productUrl,
            priceCurrency: 'HNL',
            price: product.price,
            availability:
              product.availability === 'Disponible'
                ? 'https://schema.org/InStock'
                : 'https://schema.org/PreOrder',
            itemCondition: 'https://schema.org/NewCondition',
            seller: {
              '@type': 'Organization',
              name: siteConfig.name,
            },
          },
        }
      : {}),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: absoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Productos',
        item: absoluteUrl('/products'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: productUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd([productJsonLd, breadcrumbJsonLd]),
        }}
      />
      <Header />
      <main className="pt-16 sm:pt-20 bg-background min-h-screen">
        <ProductDetails product={product} relatedProducts={relatedProducts} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
