import { MetadataRoute } from 'next'
import { getDbPosts } from '@/app/data/getBlogPosts'

// Rebuild hourly so posts published from the admin panel appear in the sitemap
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://lopublications.com'
  const dbPosts = await getDbPosts()

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/books`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/authors`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/authors/all`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/what-we-publish`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/team`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/careers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/submit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/resources/book-publishing-cost-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/resources/word-count-to-page-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/resources/book-royalty-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/resources/manuscript-readiness-assessment`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/resources/book-marketing-plan-generator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/writing-is-a-transaction`, lastModified: new Date('2026-11-04'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/the-secret-of-good-writing`, lastModified: new Date('2026-11-04'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/declutter-your-writing`, lastModified: new Date('2026-11-04'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/be-yourself-on-the-page`, lastModified: new Date('2026-11-04'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/write-for-yourself-first`, lastModified: new Date('2026-11-04'), changeFrequency: 'monthly', priority: 0.7 },
    ...dbPosts.map(({ post, modifiedISO }) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(modifiedISO),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}