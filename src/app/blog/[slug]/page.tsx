// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, TrendingUp } from 'lucide-react';
import { allBlogPosts, type BlogPost } from '@/app/data/blog';
import { getDbPosts, getDbPostBySlug } from '@/app/data/getBlogPosts';
import PostBody from './PostBody';

// ========== EXISTING POSTS ==========
import CanadaBookMarketing from './posts/CanadaBookMarketing';
import CommonWritingMistakes from './posts/CommonWritingMistakes';
import BookMarketing101 from './posts/BookMarketing101';
import PublishingNetworking from './posts/PublishingNetworking';
import LongTermWritingCareer from './posts/LongTermWritingCareer';
import SelfPublishingSuccess from './posts/SelfPublishingSuccess';
import FaithBasedTeens from './posts/FaithBasedTeens';
import FaithAndCreativity from './posts/FaithAndCreativity';
import StorytellingPersonalDevelopment from './posts/StorytellingPersonalDevelopment';
import Top10TeenBooks from './posts/Top10TeenBooks';
import BuildingReadingHabit from './posts/BuildingReadingHabit';
import WhyTeensShouldWrite from './posts/WhyTeensShouldWrite';
import FaithFueledSelfPublishing from './posts/FaithFueledSelfPublishing';
import OttawaPublishersReject from './posts/OttawaPublishersReject';

// ========== MIGRATED FROM /ARTICLES ==========
import AuthorBrandingMarketing from './posts/AuthorBrandingMarketing';
import AuthorSupportServices from './posts/AuthorSupportServices';
import BilingualPublishing from './posts/BilingualPublishing';
import BookMarketingOnABudget from './posts/BookMarketingOnABudget';
import CorporateHeritagePublishing from './posts/CorporateHeritagePublishing';
import EditingVsProofreading from './posts/EditingVsProofreading';
import FaithBasedPublishing from './posts/FaithBasedPublishing';
import FirstTimeAuthorPublishing from './posts/FirstTimeAuthorPublishing';
import OttawaAuthorBrandWebsite from './posts/OttawaAuthorBrandWebsite';
import ProfessionalBookPublishing from './posts/ProfessionalBookPublishing';
import SelfPublishingConsultation from './posts/SelfPublishingConsultation';
import SelfPublishingServices from './posts/SelfPublishingServices';

// ========== NEW POSTS ==========
import BookMarketingAndWebDesignOttawa from './posts/BookMarketingAndWebDesign';
import WebDesignServicesOttawaAuthors from './posts/WebDesignServicesOttawa';
import ChildrensPictureBookOttawa from './posts/ChildrensPictureBookOttawa';
import ChooseChildrensBookIllustrator from './posts/ChooseChildrensBookIllustrator';
import PrepareIllustrationsForPrint from './posts/PrepareIllustrationsForPrint';

// ========== WRITING CLUSTER ==========
import WritingIsATransaction from './posts/WritingIsATransaction';
import TheSecretOfGoodWriting from './posts/TheSecretOfGoodWriting';
import DeclutterYourWriting from './posts/DeclutterYourWriting';
import BeYourselfOnThePage from './posts/BeYourselfOnThePage';
import WriteForYourselfFirst from './posts/WriteForYourselfFirst';


type Props = {
  params: Promise<{ slug: string }>;
};

const PostComponents: Record<string, React.ComponentType> = {
  // ========== EXISTING POSTS ==========
  "what-new-authors-in-canada-get-wrong-about-book-marketing": CanadaBookMarketing,
  "7-common-writing-mistakes-editors-hate": CommonWritingMistakes,
  "book-marketing-101-social-media-for-first-time-authors": BookMarketing101,
  "networking-in-the-publishing-industry": PublishingNetworking,
  "how-to-build-a-long-term-writing-career-digital-publishing": LongTermWritingCareer,
  "self-publishing-success-from-manuscript-to-marketplace": SelfPublishingSuccess,
  "empowering-teens-through-faith-based-literature": FaithBasedTeens,
  "integrating-faith-and-creativity-in-writing": FaithAndCreativity,
  "the-role-of-storytelling-in-personal-development": StorytellingPersonalDevelopment,
  "top-10-inspirational-books-for-adolescents": Top10TeenBooks,
  "building-a-reading-habit-tips-for-young-readers": BuildingReadingHabit,
  "why-more-teens-should-write": WhyTeensShouldWrite,
  "faith-fueled-guide-to-self-publishing-your-book": FaithFueledSelfPublishing,
  "why-do-ottawa-publishers-reject-manuscripts": OttawaPublishersReject,

  // ========== MIGRATED FROM /ARTICLES ==========
  "author-branding-book-marketing-ottawa": AuthorBrandingMarketing,
  "author-support-services-ottawa": AuthorSupportServices,
  "bilingual-publishing-ottawa": BilingualPublishing,
  "book-marketing-on-a-budget-ottawa": BookMarketingOnABudget,
  "corporate-heritage-publishing-ottawa": CorporateHeritagePublishing,
  "editing-vs-proofreading-ottawa": EditingVsProofreading,
  "faith-based-publishing-ottawa": FaithBasedPublishing,
  "first-time-author-publishing-ottawa": FirstTimeAuthorPublishing,
  "ottawa-author-brand-website": OttawaAuthorBrandWebsite,
  "professional-book-publishing-ottawa": ProfessionalBookPublishing,
  "self-publishing-consultation-ottawa": SelfPublishingConsultation,
  "self-publishing-services-ottawa": SelfPublishingServices,

  // ========== NEW POSTS ==========
  "book-marketing-web-design-ottawa": BookMarketingAndWebDesignOttawa,
  "web-design-services-ottawa-authors": WebDesignServicesOttawaAuthors,
  "how-to-publish-a-childrens-picture-book-ottawa": ChildrensPictureBookOttawa,
  "how-to-choose-an-illustrator-for-your-childrens-book": ChooseChildrensBookIllustrator,
  "prepare-childrens-book-illustrations-for-print": PrepareIllustrationsForPrint,

  // ========== WRITING CLUSTER ==========
  "writing-is-a-transaction": WritingIsATransaction,
  "the-secret-of-good-writing": TheSecretOfGoodWriting,
  "declutter-your-writing": DeclutterYourWriting,
  "be-yourself-on-the-page": BeYourselfOnThePage,
  "write-for-yourself-first": WriteForYourselfFirst,
};

const SITE_URL = 'https://lopublications.com';

// New posts live in the database and are cached; refresh at most once a minute.
export const revalidate = 60;

// Hardcoded posts first; otherwise look the post up in the database.
async function resolvePost(slug: string): Promise<{ post: BlogPost; html: string | null; modified?: string } | null> {
  const hard = allBlogPosts.find((p) => p.slug === slug);
  if (hard) return { post: hard, html: null };
  const db = await getDbPostBySlug(slug);
  return db ? { post: db.post, html: db.html, modified: db.modifiedISO } : null;
}

const absolute = (u: string) => (u.startsWith('http') ? u : `${SITE_URL}${u}`);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resolved = await resolvePost(slug);

  if (!resolved) return { title: "Post Not Found | LO Publications" };
  const { post } = resolved;

  // Writing cluster and database posts: meta title is the post title itself.
  if (post.keyword || post.fromDb) {
    return {
      title: { absolute: post.title },
      description: post.excerpt,
      keywords: post.keyword ? [post.keyword] : [post.category],
      authors: [{ name: post.author }],
      openGraph: {
        title: post.title,
        description: post.excerpt,
        url: `/blog/${post.slug}`,
        images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
        locale: "en_CA",
        type: "article",
        publishedTime: post.isoDate,
        authors: [post.author],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
        images: [post.image],
      },
      alternates: {
        canonical: `/blog/${post.slug}`,
      },
    };
  }

  return {
    title: `${post.title} | LO Publications`,
    description: post.excerpt,
    keywords: [
      "book marketing", "self-publishing", "writing craft", "publishing industry",
      "author marketing", "faith-based literature", "writing career",
      "Ottawa publishing", "book publishing Canada", "author branding Ottawa",
      "web design Ottawa", "author website", "book marketing Ottawa",
      "children's picture book Ottawa", "children's book illustrator",
      post.category.toLowerCase()
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      locale: "en_CA",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const resolved = await resolvePost(slug);

  if (!resolved) {
    return <div className="pt-40 text-center">Post not found</div>;
  }
  const { post, html } = resolved;
  const isSeo = Boolean(post.keyword || post.fromDb);

  const dbPosts = (await getDbPosts()).map((d) => d.post);
  const recommended = [...dbPosts, ...allBlogPosts]
    .filter(p => p.slug !== post.slug)
    .slice(0, 3);

  const PostComponent = PostComponents[post.slug];

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const jsonLd = isSeo
    ? [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: absolute(post.image),
          author: { "@type": "Person", name: post.author },
          publisher: {
            "@type": "Organization",
            name: "LO Publications",
            logo: { "@type": "ImageObject", url: `${SITE_URL}/logolop.png` },
          },
          datePublished: post.isoDate,
          dateModified: resolved.modified ?? post.isoDate,
          url: postUrl,
          mainEntityOfPage: postUrl,
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
            { "@type": "ListItem", position: 3, name: post.category, item: `${SITE_URL}/blog` },
            { "@type": "ListItem", position: 4, name: post.title, item: postUrl },
          ],
        },
      ]
    : null;

  return (
    <div className="bg-gray-50 text-black min-h-screen pt-20">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      )}
      <div className="max-w-[90%] mx-auto px-6 py-8">
        {isSeo && (
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-red-600">Home</Link></li>
              <li aria-hidden="true">&gt;</li>
              <li><Link href="/blog" className="hover:text-red-600">Blog</Link></li>
              <li aria-hidden="true">&gt;</li>
              <li><Link href="/blog" className="hover:text-red-600">{post.category}</Link></li>
              <li aria-hidden="true">&gt;</li>
              <li aria-current="page" className="text-gray-700">{post.title}</li>
            </ol>
          </nav>
        )}
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 mb-8">
          <ArrowLeft className="w-5 h-5" /> Back to All Articles
        </Link>

        <div className="grid lg:grid-cols-12 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Hero Image */}
            <div className="relative h-[520px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />

              <div className="absolute bottom-0 left-0 p-10 text-white">
                <div className="inline-block px-5 py-2 bg-red-600 rounded-2xl text-sm font-medium mb-4">
                  {post.category}
                </div>
                <h1 className="text-2xl md:text-5xl font-bold leading-tight tracking-tight">
                  {post.title}
                </h1>
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex items-center gap-8 text-sm text-gray-500 mb-12 border-b pb-10 flex-wrap">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" /> {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {post.readTime}
              </div>
            </div>

            {/* Dynamic Content */}
            {html !== null ? <PostBody html={html} /> : PostComponent ? <PostComponent /> : <p>Content not available yet.</p>}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-10">

              {/* Author */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="font-bold mb-4">Written By</h3>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                    <User className="w-7 h-7 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-sm text-gray-500">{isSeo ? 'LO Publications' : 'Publishing & Author Services Team'}</p>
                  </div>
                </div>
              </div>

              {/* Recommended Posts */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="text-red-500" />
                  <h3 className="font-bold">Recommended Reads</h3>
                </div>

                {recommended.length > 0 ? (
                  recommended.map((item) => (
                    <Link
                      key={item.id}
                      href={`/blog/${item.slug}`}
                      className="group flex gap-4 mb-6 last:mb-0"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-16 object-cover rounded-xl"
                      />
                      <div>
                        <p className="line-clamp-2 text-sm font-medium group-hover:text-red-600 transition">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">More articles coming soon...</p>
                )}
              </div>

              {/* Newsletter */}
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-gray-400 text-sm mb-6">Get the latest publishing, book marketing &amp; writing craft insights.</p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3 mb-4 focus:outline-none focus:border-red-500"
                />
                <button className="w-full bg-red-600 hover:bg-red-700 py-3.5 rounded-2xl font-medium transition">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}