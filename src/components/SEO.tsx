import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description?: string
  keywords?: string
  path?: string
  ogImage?: string
  ogType?: string
  noIndex?: boolean
  schemaData?: Record<string, unknown>
}

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://coachingandmentorshipwithfelecia.com'

export default function SEO({
  title,
  description,
  keywords,
  path = '',
  ogImage = '/images/logo.jpeg',
  ogType = 'website',
  noIndex = false,
  schemaData
}: SEOProps) {
  const canonicalUrl = `${SITE_URL.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`
  const fullTitle = `${title} | Coaching and Mentorship with Felecia`

  // Ensure image URL is absolute
  const absoluteOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${SITE_URL.replace(/\/+$/, '')}/${ogImage.replace(/^\/+/, '')}`

  return (
    <Helmet>
      {/* Title */}
      <title>{fullTitle}</title>

      {/* Meta tags */}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={absoluteOgImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={absoluteOgImage} />

      {/* Schema Markup */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  )
}
