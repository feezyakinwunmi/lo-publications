// lib/blogs.ts

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
};

export const allBlogPosts: BlogPost[] = [
  // ========== EXISTING POSTS ==========
  {
    id: 1,
    title: "What New Authors in Canada Get Wrong About Book Marketing",
    slug: "what-new-authors-in-canada-get-wrong-about-book-marketing",
    excerpt: "A breakdown of Canadian publishing realities — why authors mistake national availability for national demand, and how to market with precision instead.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070",
    category: "Book Marketing",
    readTime: "7 min read",
    date: "September 4, 2026",
    author: "LOPublications"
  },
  {
    id: 2,
    title: "7 Common Writing Mistakes Editors Hate",
    slug: "7-common-writing-mistakes-editors-hate",
    excerpt: "Avoid these seven writing mistakes that get manuscripts rejected — from ignoring style guides to weak headlines, passive voice, and failure to fact-check.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073",
    category: "Writing Craft",
    readTime: "14 min read",
    date: "January 21, 2026",
    author: "LOPublications"
  },
  {
    id: 3,
    title: "Book Marketing 101: Social Media for First-Time Authors",
    slug: "book-marketing-101-social-media-for-first-time-authors",
    excerpt: "How first-time authors can use social media to build an author brand, plan a pre-launch campaign, and keep momentum after launch day.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
    category: "Book Marketing",
    readTime: "13 min read",
    date: "January 21, 2026",
    author: "LOPublications"
  },
  {
    id: 4,
    title: "Networking in the Publishing Industry: How Authors Grow Faster",
    slug: "networking-in-the-publishing-industry",
    excerpt: "From digital communities to book fairs and hybrid models — how authors build the relationships that accelerate a publishing career.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069",
    category: "Publishing",
    readTime: "17 min read",
    date: "January 21, 2026",
    author: "LOPublications"
  },
  {
    id: 5,
    title: "How to Build a Long-Term Writing Career in the Digital Publishing Era",
    slug: "how-to-build-a-long-term-writing-career-digital-publishing",
    excerpt: "A practical guide to building a sustainable writing career — from finding your niche and sharpening your craft to mastering the business and legal side of writing.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
    category: "Writing Career",
    readTime: "15 min read",
    date: "January 21, 2026",
    author: "LOPublications"
  },
  {
    id: 6,
    title: "Self-Publishing Success: From Manuscript to Marketplace",
    slug: "self-publishing-success-from-manuscript-to-marketplace",
    excerpt: "How to publish your book without a traditional publisher — manuscript prep, cover design, distribution platforms, launch strategies, and monetization.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2074",
    category: "Self-Publishing",
    readTime: "15 min read",
    date: "January 21, 2026",
    author: "LOPublications"
  },
  {
    id: 7,
    title: "Empowering Teens Through Faith-Based Literature",
    slug: "empowering-teens-through-faith-based-literature",
    excerpt: "How faith-based books help teenagers navigate identity, doubt, and purpose — and why stories rooted in spiritual truth matter more than ever.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022",
    category: "Faith & Teens",
    readTime: "16 min read",
    date: "January 21, 2026",
    author: "LOPublications"
  },
  {
    id: 8,
    title: "Integrating Faith and Creativity in Writing",
    slug: "integrating-faith-and-creativity-in-writing",
    excerpt: "How faith-driven writers can unite spiritual conviction with creative excellence — from finding voice and purpose to publishing with integrity.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070",
    category: "Faith & Writing",
    readTime: "17 min read",
    date: "January 21, 2026",
    author: "LOPublications"
  },
  {
    id: 9,
    title: "The Role of Storytelling in Personal Development",
    slug: "the-role-of-storytelling-in-personal-development",
    excerpt: "How storytelling fuels self-awareness, emotional intelligence, and personal transformation — and practical ways to use narrative for growth.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
    category: "Storytelling",
    readTime: "12 min read",
    date: "January 21, 2026",
    author: "LOPublications"
  },
  {
    id: 10,
    title: "Top 10 Inspirational Books for Adolescents",
    slug: "top-10-inspirational-books-for-adolescents",
    excerpt: "Ten transformative books that teach empathy, resilience, and self-awareness to teenage readers — from Wonder and The Hate U Give to Long Way Down.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2098",
    category: "Book Lists",
    readTime: "7 min read",
    date: "January 21, 2026",
    author: "LOPublications"
  },
  {
    id: 11,
    title: "Building a Reading Habit: Tips for Young Readers",
    slug: "building-a-reading-habit-tips-for-young-readers",
    excerpt: "Practical tips to help children fall in love with reading — from creating a cozy reading corner to choosing the right books and celebrating milestones.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2072",
    category: "Reading",
    readTime: "14 min read",
    date: "January 20, 2026",
    author: "LOPublications"
  },
  {
    id: 12,
    title: "Why More Teens Should Write",
    slug: "why-more-teens-should-write",
    excerpt: "Writing builds confidence, sharpens thinking, and creates real opportunity. A guide for teens on why they should start writing today — and how.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073",
    category: "Teen Writing",
    readTime: "6 min read",
    date: "January 20, 2026",
    author: "LOPublications"
  },
  {
    id: 13,
    title: "A Faith-Fueled Guide to Self-Publishing Your Book",
    slug: "faith-fueled-guide-to-self-publishing-your-book",
    excerpt: "For the aspiring author who's been called to write — a step-by-step guide to self-publishing your God-given message on your own terms.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2090",
    category: "Self-Publishing",
    readTime: "4 min read",
    date: "January 20, 2026",
    author: "LOPublications"
  },
  {
    id: 14,
    title: "Why Do Ottawa Publishers Reject Manuscripts?",
    slug: "why-do-ottawa-publishers-reject-manuscripts",
    excerpt: "Rejection is a normal part of publishing. Here are the most common reasons Ottawa publishers reject manuscripts — and how authors can respond strategically.",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070",
    category: "Publishing",
    readTime: "13 min read",
    date: "June 6, 2026",
    author: "LOPublications"
  },

  // ========== MIGRATED FROM /ARTICLES ==========
  {
    id: 15,
    title: "Author Branding & Book Marketing in Ottawa: How Local Authors Build Visibility and Grow Their Readership",
    slug: "author-branding-book-marketing-ottawa",
    excerpt: "How Ottawa authors build visibility through branding, community involvement, and strategic marketing — from literary events to local bookstores and media.",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1200&h=500&fit=crop",
    category: "Book Marketing",
    readTime: "10 min read",
    date: "November 12, 2026",
    author: "LOPublications"
  },
  {
    id: 16,
    title: "Author Support Services in Ottawa: Turn Your Manuscript into a Published Success Story",
    slug: "author-support-services-ottawa",
    excerpt: "From manuscript evaluation to editing, design, and marketing — how professional author support services help Ottawa writers publish successfully.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&h=500&fit=crop",
    category: "Publishing",
    readTime: "9 min read",
    date: "November 10, 2026",
    author: "LOPublications"
  },
  {
    id: 17,
    title: "Bilingual Publishing in Ottawa (English & French)",
    slug: "bilingual-publishing-ottawa",
    excerpt: "How bilingual publishing opens doors to wider Canadian audiences — with linguistic accuracy, cultural authenticity, and credibility in both official languages.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=500&fit=crop",
    category: "Publishing",
    readTime: "8 min read",
    date: "November 8, 2026",
    author: "LOPublications"
  },
  {
    id: 18,
    title: "Book Marketing on a Budget: Strategies for First-Time Self-Published Authors in Ottawa",
    slug: "book-marketing-on-a-budget-ottawa",
    excerpt: "Strategic, low-cost marketing can generate impressive results. Here's how Ottawa authors build visibility without exhausting their budget.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&h=500&fit=crop",
    category: "Book Marketing",
    readTime: "10 min read",
    date: "November 6, 2026",
    author: "LOPublications"
  },
  {
    id: 19,
    title: "Corporate and Heritage Publishing in Ottawa, Canada",
    slug: "corporate-heritage-publishing-ottawa",
    excerpt: "Preserving stories and building legacies through professional publishing — for organisations, families, and communities across Ottawa.",
    image: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?w=1200&h=500&fit=crop",
    category: "Publishing",
    readTime: "9 min read",
    date: "November 4, 2026",
    author: "LOPublications"
  },
  {
    id: 20,
    title: "Editing vs. Proofreading: What Ottawa Authors Need to Know",
    slug: "editing-vs-proofreading-ottawa",
    excerpt: "Editing improves the content and structure of your manuscript. Proofreading corrects the surface-level errors. Both are essential for a polished book.",
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=1200&h=500&fit=crop",
    category: "Writing Craft",
    readTime: "5 min read",
    date: "November 2, 2026",
    author: "LOPublications"
  },
  {
    id: 21,
    title: "Faith-Based Publishing in Ottawa: Choosing the Right Path for Your Book",
    slug: "faith-based-publishing-ottawa",
    excerpt: "How faith-based authors in Ottawa navigate traditional, hybrid, and self-publishing — balancing ministry goals with publishing goals.",
    image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1200&h=500&fit=crop",
    category: "Faith & Writing",
    readTime: "10 min read",
    date: "October 30, 2026",
    author: "LOPublications"
  },
  {
    id: 22,
    title: "First-Time Author Publishing in Ottawa: Everything You Need to Know",
    slug: "first-time-author-publishing-ottawa",
    excerpt: "A comprehensive guide for aspiring authors navigating the publishing journey in Ottawa — from writing and editing to choosing the right publishing path.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=500&fit=crop",
    category: "Publishing",
    readTime: "12 min read",
    date: "October 28, 2026",
    author: "LOPublications"
  },
  {
    id: 23,
    title: "Ottawa Author: Building Your Author Brand and Website Before Your Book Launches",
    slug: "ottawa-author-brand-website",
    excerpt: "The authors who build a brand and a website before the book is finished are the ones who launch to readers who are actually waiting.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=500&fit=crop",
    category: "Book Marketing",
    readTime: "5 min read",
    date: "October 26, 2026",
    author: "LOPublications"
  },
  {
    id: 24,
    title: "Professional Book Publishing Services for Authors in Ottawa",
    slug: "professional-book-publishing-ottawa",
    excerpt: "From editing and cover design to distribution and marketing — how professional publishing services help Ottawa authors navigate the industry.",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&h=500&fit=crop",
    category: "Publishing",
    readTime: "6 min read",
    date: "October 24, 2026",
    author: "LOPublications"
  },
  {
    id: 25,
    title: "Self-Publishing Consultation for Ottawa Authors: Turning Your Manuscript into a Successful Book",
    slug: "self-publishing-consultation-ottawa",
    excerpt: "Writing a book is only half the journey. Self-publishing consultation guides Ottawa authors through every stage — from editing to distribution to marketing.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=500&fit=crop",
    category: "Self-Publishing",
    readTime: "7 min read",
    date: "October 22, 2026",
    author: "LOPublications"
  },
  {
    id: 26,
    title: "Self-Publishing Services in Ottawa: A Complete Guide for Aspiring Authors",
    slug: "self-publishing-services-ottawa",
    excerpt: "How self-publishing services help Ottawa authors bring their books to market with professional editing, design, distribution, and marketing support.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=500&fit=crop",
    category: "Self-Publishing",
    readTime: "8 min read",
    date: "October 20, 2026",
    author: "LOPublications"
  }
];