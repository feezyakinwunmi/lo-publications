// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, TrendingUp } from 'lucide-react';
import { allBlogPosts } from '@/app/data/blog';

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
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = allBlogPosts.find(p => p.slug === slug);

  if (!post) return { title: "Post Not Found | LO Publications" };

  return {
    title: `${post.title} | LO Publications`,
    description: post.excerpt,
    keywords: [
      "book marketing", "self-publishing", "writing craft", "publishing industry",
      "author marketing", "faith-based literature", "writing career",
      "Ottawa publishing", "book publishing Canada", "author branding Ottawa",
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
  const post = allBlogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div className="pt-40 text-center">Post not found</div>;
  }

  const recommended = allBlogPosts
    .filter(p => p.slug !== slug)
    .slice(0, 3);

  const PostComponent = PostComponents[slug];

  return (
    <div className="bg-gray-50 text-black min-h-screen pt-20">
      <div className="max-w-[90%] mx-auto px-6 py-8">
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
            {PostComponent ? <PostComponent /> : <p>Content not available yet.</p>}
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
                    <p className="text-sm text-gray-500">Publishing & Author Services Team</p>
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