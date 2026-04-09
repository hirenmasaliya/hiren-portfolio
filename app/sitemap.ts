export const dynamic = "force-static";

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hirenmasaliya1411.web.app'

  // Core Marketing Routes
  const routes = [
    '',
    '/about',
    '/projects',
    '/pricing',
    '/contact',
    '/founder'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
  
  return [...routes]
}