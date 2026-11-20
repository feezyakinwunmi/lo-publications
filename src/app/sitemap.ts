import { MetadataRoute } from 'next'
import { allBlogPosts } from '@/app/data/blog'
import { getDbPosts } from '@/app/data/getBlogPosts'
import { jobsData } from '@/app/data/jobsData'
import { RESOURCE_TOOLS } from '@/app/resources/data'

// Rebuild hourly so posts published from the admin panel appear in the sitemap
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://lopublications.com'
  const dbPosts = await getDbPosts()
  const staticBlogSlugs = new Set(allBlogPosts.map(({ slug }) => slug))

  return [
    { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/books`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/authors`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/authors/all`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/what-we-publish`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/team`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/careers`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/submit`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/publishing-journey`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/young-authors-contest`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/resources`, changeFrequency: 'weekly', priority: 0.8 },
    ...RESOURCE_TOOLS.map((tool) => ({
      url: `${baseUrl}/resources/${tool.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...jobsData.map((job) => ({
      url: `${baseUrl}/careers/${job.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    ...allBlogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...dbPosts
      .filter(({ post }) => !staticBlogSlugs.has(post.slug))
      .map(({ post, modifiedISO }) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(modifiedISO),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })),
  ]
}