export const dynamic = "force-static";

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hirenmasaliya1411.web.app'

  const staticRoutes = [
    '',
    '/about',
    '/projects',
    '/pricing',
    '/contact',
    '/founder',
    '/services', 
    '/faq',
    '/terms',
    '/articles'
  ].map((route) => ({
    url: route === '' ? `${baseUrl}/` : `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route === '/projects' || route === '/pricing' ? 0.9 : 0.8,
  }))

  const articleSlugs = [
    '/articles/voting-app',
    '/articles/eco-temple-waste-app',
    '/articles/small-business-app',
    '/articles/website-vs-app',
    '/articles/local-shop-ideas',
    '/articles/fast-apps-money'
  ];

  const articleRoutes = articleSlugs.map((slug) => ({
    url: `${baseUrl}${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const, 
    priority: 0.7, 
  }))
  
  return [...staticRoutes, ...articleRoutes]
}