import { MetadataRoute } from 'next'
import { SERVICES, COVERAGE_AREAS } from '@/lib/constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://queenmassage.id'

  // Static pages
  const staticPages = [
    '',
    '/tentang',
    '/layanan',
    '/harga',
    '/area',
    '/blog',
    '/faq',
    '/testimoni',
    '/galeri',
    '/karir',
    '/kontak',
    '/booking',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Service pages
  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/layanan/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Area pages
  const areaPages = COVERAGE_AREAS.map((area) => ({
    url: `${baseUrl}/area/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Blog posts (dynamic from DB)
  let blogPages: MetadataRoute.Sitemap = []
  try {
    if (process.env.DATABASE_URL && !process.env.DATABASE_URL.includes('fake')) {
      const { prisma } = await import('@/lib/prisma')
      const posts = await prisma.blogPost.findMany({
        where: { isPublished: true },
        select: { slug: true, updatedAt: true },
      })
      blogPages = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    }
  } catch {
    // DB not available during build
  }

  return [...staticPages, ...servicePages, ...areaPages, ...blogPages]
}
