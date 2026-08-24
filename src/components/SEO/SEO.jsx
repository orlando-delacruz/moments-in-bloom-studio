import { Helmet } from 'react-helmet-async'
import { routeMetadata } from '../../constants/navigation.js'

function SEO({
  title,
  description,
  canonical,
  image,
  url,
  keywords,
  type = 'website',
  siteName = routeMetadata.public.title,
  jsonLd,
}) {
  const resolvedTitle = title ? `${title} | ${routeMetadata.public.title}` : routeMetadata.public.title
  const resolvedDescription = description || routeMetadata.public.description
  const resolvedUrl = url || canonical

  return (
    <Helmet>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      {resolvedUrl ? <meta property="og:url" content={resolvedUrl} /> : null}
      {image ? <meta property="og:image" content={image} /> : null}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      {image ? <meta name="twitter:image" content={image} /> : null}
      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  )
}

export default SEO
