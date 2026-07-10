import { GetServerSideProps } from 'next'

function generateSiteMap(baseUrl: string) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${baseUrl}/</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${baseUrl}/contact</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
   </urlset>
 `
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `https://${req.headers.host}`
  
  const sitemap = generateSiteMap(baseUrl)

  return {
    props: {},
    // Use res.setHeader to serve the sitemap
    // You'll need to handle this differently
  }
}