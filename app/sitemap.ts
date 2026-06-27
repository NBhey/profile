import type { MetadataRoute } from 'next'

import { SITE } from '@/src/shared/config/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE.url}/experience`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/contacts`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
