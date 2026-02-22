import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: 'https://www.bona-fides-detektei.de/sitemap.xml',
    host: 'https://www.bona-fides-detektei.de',
  }
}
