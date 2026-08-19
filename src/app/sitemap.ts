import { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { absoluteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1.0 },
    { url: absoluteUrl('/products'), changeFrequency: 'weekly', priority: 0.9 },
    { url: absoluteUrl('/categories'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/about'), changeFrequency: 'yearly', priority: 0.5 },
    { url: absoluteUrl('/contact'), changeFrequency: 'yearly', priority: 0.6 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: absoluteUrl(`/products/${product.id}`),
    changeFrequency: 'monthly',
    priority: product.featured ? 0.8 : 0.7,
    images: [absoluteUrl(product.image)],
  }));

  return [...staticPages, ...productPages];
}
