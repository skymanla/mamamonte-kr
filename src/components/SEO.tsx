import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonicalPath?: string
  ogType?: string
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalPath = '',
  ogType = 'website'
}) => {
  const baseUrl = 'https://mamamonte.kr'
  const fullUrl = `${baseUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`.replace(/\/$/, '') || baseUrl

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default SEO
