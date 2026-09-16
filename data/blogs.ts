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
  }
];