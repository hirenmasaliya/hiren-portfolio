export const dynamic = "force-static";

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hirenmasaliya1411.web.app'

  // Core Marketing & Static Routes
  const routes = [
    '',
    '/about',
    '/projects',
    '/pricing',
    '/contact',
    '/founder',
    '/services', // Added more detail routes
    '/faq',
    '/terms'
  ].map((route) => ({
    // The root URL must have a trailing slash (e.g., .app/) to match canonical tags
    url: route === '' ? `${baseUrl}/` : `${baseUrl}${route}`,
    // Using toISOString() provides a cleaner, standard format for Googlebot
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    // Assign higher priority to core conversion pages
    priority: route === '' ? 1 : route === '/projects' || route === '/pricing' ? 0.9 : 0.8,
  }))
  
  return [...routes]
}