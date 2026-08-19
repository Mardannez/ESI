import type { Metadata } from 'next';

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '');

export const siteConfig = {
  name: 'ESI Honduras',
  legalName: 'Equipos de Seguridad Industrial',
  url: configuredSiteUrl || 'https://www.esihonduras.com',
  locale: 'es_HN',
  language: 'es-HN',
  description:
    'Equipos de seguridad industrial en Honduras: cascos, guantes, arneses, protección eléctrica, señalización y soluciones ergonómicas con asesoría personalizada.',
  logo: '/assets/images/LogoESI-1779253736324.jpeg',
  socialImage: '/assets/images/Banner_Cascos_y_barbuquejos.png',
  phone: '+50487921620',
  email: 'cotizaciones@csihonduras.com',
} as const;

export function absoluteUrl(path = '/') {
  return new URL(path, `${siteConfig.url}/`).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.socialImage,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url: canonicalUrl,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: imageUrl,
          alt: `${siteConfig.name} - equipos de seguridad industrial`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
