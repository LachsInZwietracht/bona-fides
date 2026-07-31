import { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/blog'
import { services } from '@/lib/services-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bona-fides-detektei.de'

  // Static pages with their priorities and change frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/agb`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Leistungsseiten sind die wichtigsten Einstiege für Unternehmensanfragen
    ...services.map((service) => ({
      url: `${baseUrl}/leistungen/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: service.audience === 'b2b' ? 0.85 : 0.6,
    })),
  ]

  // Get all blog articles dynamically
  try {
    const articles = getAllArticles()
    const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
      url: `${baseUrl}/blog/${article.metadata.slug}`,
      lastModified: new Date(article.metadata.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    return [...staticPages, ...blogPages]
  } catch (error) {
    // Fallback to static pages only if there's an issue reading blog articles
    console.error('Error generating sitemap for blog articles:', error)
    return staticPages
  }
}
