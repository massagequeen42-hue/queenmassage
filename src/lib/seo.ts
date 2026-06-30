import { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  noIndex?: boolean
}

export function generateSEO({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const metaTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.title
  const metaDescription = description || SITE_CONFIG.description
  const metaUrl = url || SITE_CONFIG.url
  const metaImage = image || `${SITE_CONFIG.url}/og-image.jpg`

  const defaultKeywords = [
    'pijat panggilan bandung',
    'massage bandung',
    'pijat rumah bandung',
    'spa panggilan bandung',
    'terapis pijat bandung',
    'pijat profesional bandung',
    'queen massage bandung',
    'pijat tradisional bandung',
    'reflexology bandung',
    'sport massage bandung',
  ]

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: author || SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      type,
      locale: 'id_ID',
      url: metaUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    alternateName: 'Queen Massage Bandung',
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    logo: `${SITE_CONFIG.url}/logo.png`,
    priceRange: 'Rp125.000 - Rp350.000',
    currenciesAccepted: 'IDR',
    paymentAccepted: 'Cash, Bank Transfer, E-Wallet',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bandung',
      addressLocality: 'Bandung',
      addressRegion: 'Jawa Barat',
      postalCode: '40115',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.9175,
      longitude: 107.6191,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '22:00',
    },
    areaServed: [
      { '@type': 'City', name: 'Bandung' },
      { '@type': 'City', name: 'Cimahi' },
      { '@type': 'Place', name: 'Lembang' },
      { '@type': 'Place', name: 'Dago' },
      { '@type': 'Place', name: 'Setiabudi' },
      { '@type': 'Place', name: 'Pasteur' },
      { '@type': 'Place', name: 'Antapani' },
      { '@type': 'Place', name: 'Buah Batu' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '523',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      SITE_CONFIG.socialMedia.instagram,
      SITE_CONFIG.socialMedia.facebook,
      SITE_CONFIG.socialMedia.tiktok,
    ],
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  price: number
  duration: number
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: {
      '@type': 'City',
      name: 'Bandung',
    },
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
    },
    ...(service.image && { image: service.image }),
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  url: string
  image?: string
  publishedTime: string
  modifiedTime?: string
  author?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    image: article.image || `${SITE_CONFIG.url}/og-image.jpg`,
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime || article.publishedTime,
    author: {
      '@type': 'Organization',
      name: article.author || SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phone,
      contactType: 'customer service',
      availableLanguage: ['Indonesian', 'English'],
    },
    sameAs: [
      SITE_CONFIG.socialMedia.instagram,
      SITE_CONFIG.socialMedia.facebook,
      SITE_CONFIG.socialMedia.tiktok,
    ],
  }
}
