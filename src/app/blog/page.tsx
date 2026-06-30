import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/ui/section-heading'
import { generateSEO } from '@/lib/seo'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = generateSEO({
  title: 'Blog - Tips Kesehatan & Massage',
  description: 'Baca artikel tentang tips kesehatan, manfaat pijat, panduan massage, dan informasi wellness dari QueenMassage Bandung.',
  keywords: ['blog massage bandung', 'tips pijat', 'artikel kesehatan', 'manfaat massage'],
  url: 'https://queenmassage.id/blog',
})

export const revalidate = 3600 // revalidate every hour

async function getBlogPosts() {
  if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('fake')) {
    return []
  }
  try {
    const posts = await prisma.blogPost.findMany({
      where: { isPublished: true },
      orderBy: { publishedAt: 'desc' },
      take: 20,
    })
    return posts
  } catch {
    return []
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Blog"
          title="Tips & Artikel Kesehatan"
          subtitle="Pelajari lebih banyak tentang manfaat pijat, tips wellness, dan informasi kesehatan."
        />

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border bg-card overflow-hidden card-hover"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10" />
                <div className="p-6">
                  <Badge variant="purple" className="mb-3">{post.category}</Badge>
                  <h2 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.publishedAt ? formatDate(post.publishedAt) : ''}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime || 5} min read
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Blog posts sedang disiapkan. Nantikan konten menarik dari kami!</p>
          </div>
        )}
      </div>
    </div>
  )
}
