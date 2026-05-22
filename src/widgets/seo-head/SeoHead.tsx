import { Helmet } from 'react-helmet-async'
import { SITE_CONFIG } from '@/shared/config/site'

interface SeoHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  schema?: object | object[]
  noIndex?: boolean
}

export function SeoHead({
  title,
  description,
  canonical,
  ogImage,
  schema,
  noIndex = false,
}: SeoHeadProps) {
  const seoTitle = title ?? SITE_CONFIG.defaultSEO.title
  const seoDesc = description ?? SITE_CONFIG.defaultSEO.description
  const seoCanonical = canonical ?? SITE_CONFIG.url
  const seoImage = ogImage ?? `${SITE_CONFIG.url}/og-image.jpg`

  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : []

  return (
    <Helmet>
      <html lang="uk" />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDesc} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={seoCanonical} />

      {/* OpenGraph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:url" content={seoCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={seoImage} />
      <meta property="og:locale" content="uk_UA" />
      <meta property="og:site_name" content={SITE_CONFIG.fullName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDesc} />
      <meta name="twitter:image" content={seoImage} />

      {/* JSON-LD schemas */}
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </Helmet>
  )
}
