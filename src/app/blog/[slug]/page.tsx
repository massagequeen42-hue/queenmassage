import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { generateSEO, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

async function getBlogPost(slug: string) {
  if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('fake')) {
    return null
  }
  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug, isPublished: true },
    })
    return post
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) return {}

  return generateSEO({
    title: post.metaTitle || post.title,
    description: post.metaDesc || post.excerpt,
    keywords: post.tags,
    url: `https://queenmassage.id/blog/${slug}`,
    type: 'article',
    publishedTime: post.publishedAt?.toISOString(),
    image: post.featuredImage || undefined,
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) notFound()

  // Increment view count
  await prisma.blogPost.update({
    where: { id: post.id },
    data: { viewCount: { increment: 1 } },
  }).catch(() => {})

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `https://queenmassage.id/blog/${slug}`,
    image: post.featuredImage || undefined,
    publishedTime: post.publishedAt?.toISOString() || post.createdAt.toISOString(),
    author: post.author,
  })

  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://queenmassage.id' },
    { name: 'Blog', url: 'https://queenmassage.id/blog' },
    { name: post.title, url: `https://queenmassage.id/blog/${slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Back */}
            <Button variant="ghost" size="sm" className="mb-6" asChild>
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Blog
              </Link>
            </Button>

            {/* Header */}
            <header className="mb-8">
              <Badge variant="purple" className="mb-4">{post.category}</Badge>
              <h1 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.publishedAt ? formatDate(post.publishedAt) : formatDate(post.createdAt)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime || 5} min read
                </span>
                <span>By {post.author}</span>
              </div>
            </header>

            {/* Content */}
            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  )
}
