import { SITE_CONFIG } from '@/shared/config/site'

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.fullName,
    alternateName: 'Cyfra Service Center',
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'вул. Княжий Затон, 11',
      addressLocality: 'Київ',
      addressRegion: 'Київська область',
      postalCode: '02000',
      addressCountry: 'UA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.4021,
      longitude: 30.6415,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '11:00',
        closes: '18:00',
      },
    ],
    priceRange: 'від 299 грн',
    description: SITE_CONFIG.defaultSEO.description,
    foundingDate: '2014',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '312',
    },
    sameAs: [SITE_CONFIG.facebook, SITE_CONFIG.instagram],
  }
}

export function buildServiceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.fullName,
      url: SITE_CONFIG.url,
    },
    areaServed: {
      '@type': 'City',
      name: 'Київ',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name,
    },
  }
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
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
