// app/blog/BlogClient.tsx
'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, User, TrendingUp, X } from 'lucide-react';
import { gsap } from 'gsap';
import type { BlogPost } from '@/app/data/blog';

const POSTS_PER_PAGE = 12;

export default function BlogClient({ blogPosts }: { blogPosts: BlogPost[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
  }, []);

  // Sort newest → oldest so the featured post is the most recent
  const sortedPosts = useMemo(
    () =>
      [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    [blogPosts]
  );

  // Category counts derived from all posts (for the sidebar chips)
  const categoryCounts = useMemo(
    () =>
      sortedPosts.reduce<Record<string, number>>((acc, post) => {
        acc[post.category] = (acc[post.category] || 0) + 1;
        return acc;
      }, {}),
    [sortedPosts]
  );
  const categories = useMemo(
    () => Object.keys(categoryCounts),
    [categoryCounts]
  );

  // Filter by selected category
  const filteredPosts = useMemo(
    () =>
      activeCategory === 'All'
        ? sortedPosts
        : sortedPosts.filter((p) => p.category === activeCategory),
    [sortedPosts, activeCategory]
  );

  // Featured is only meaningful when viewing All
  const featured = activeCategory === 'All' ? filteredPosts[0] : null;
  const rest = activeCategory === 'All' ? filteredPosts.slice(1) : filteredPosts;

  const gridPosts = rest.slice(0, visibleCount);
  const hasMore = visibleCount < rest.length;
  const remaining = rest.length - visibleCount;

  // Reset pagination when the user switches category
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(POSTS_PER_PAGE);
  };

  return (
    <div ref={sectionRef} className="bg-gray-100 text-black min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2070')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />

        <div className="relative z-10 max-w-[90%] mx-auto px-4 sm:px-6 pt-10 text-center">
          <div className="inline-flex text-white items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium tracking-widest mb-4">
            LO PUBLICATIONS BLOG
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Insights for Authors &amp; Publishers
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Practical guides on book marketing, self-publishing, writing craft, and building a long-term career as an author.
          </p>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-10">

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {activeCategory === 'All' ? 'Latest Articles' : activeCategory}
              </h2>

              {activeCategory !== 'All' && (
                <button
                  onClick={() => handleCategoryChange('All')}
                  className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-red-600 transition"
                >
                  <X className="w-4 h-4" /> Clear filter
                </button>
              )}
            </div>

            {/* Featured Post (only when viewing All) */}
            {featured && (
              <div className="mb-12">
                <Link href={`/blog/${featured.slug}`} className="group block">
                  <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent md:opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/95 text-sm font-medium rounded-2xl z-10">
                      {featured.category}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                        {featured.title}
                      </h2>

                      <div className="md:flex items-center gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" /> {featured.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" /> {featured.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" /> {featured.readTime}
                        </div>
                      </div>

                      <div className="mt-6 inline-flex items-center gap-2 text-red-400 font-medium">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Posts Grid */}
            {gridPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {gridPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-gray-500">
                  No articles in this category yet.
                </p>
              </div>
            )}

            {/* Load More */}
            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white border border-gray-200 text-gray-900 font-semibold hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 shadow-sm"
                >
                  Load More Articles
                  <span className="text-xs text-gray-500">
                    ({remaining} more)
                  </span>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Showing {gridPosts.length} of {rest.length} articles
                </p>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-10">

              {/* Recommended */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="text-red-500" />
                  <h3 className="text-xl font-bold">Recommended Reads</h3>
                </div>
                {sortedPosts.slice(1, 5).map((post) => (
                  <TrendingItem key={post.id} post={post} />
                ))}
              </div>

              {/* Categories — clickable filter */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-5">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleCategoryChange('All')}
                    className={`px-4 py-2 rounded-xl text-sm transition-all ${
                      activeCategory === 'All'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 hover:bg-red-50 hover:text-red-600 text-gray-700'
                    }`}
                  >
                    All{' '}
                    <span className={activeCategory === 'All' ? 'text-red-100' : 'text-gray-400'}>
                      ({sortedPosts.length})
                    </span>
                  </button>

                  {categories.map((cat) => {
                    const isActive = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={`px-4 py-2 rounded-xl text-sm transition-all ${
                          isActive
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-100 hover:bg-red-50 hover:text-red-600 text-gray-700'
                        }`}
                      >
                        {cat}{' '}
                        <span className={isActive ? 'text-red-100' : 'text-gray-400'}>
                          ({categoryCounts[cat]})
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-3">Never Miss an Insight</h3>
                <p className="text-gray-400 mb-6 text-sm">
                  Weekly guides on publishing, book marketing &amp; writing craft.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 mb-3 focus:outline-none focus:border-red-500"
                />
                <button className="w-full bg-red-600 hover:bg-red-700 py-3.5 rounded-2xl font-medium transition">
                  Subscribe
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ====================== Reusable Components ====================== */

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className="bg-white text-black rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
        <div className="relative h-56 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-white/95 rounded-lg">
            {post.category}
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-bold text-xl leading-tight mb-3 group-hover:text-red-600 transition-colors line-clamp-3">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
            {post.excerpt}
          </p>
          <div className="text-xs text-gray-500 flex items-center justify-between mt-auto pt-4 border-t">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function TrendingItem({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex gap-4 mb-6 last:mb-0">
      <div className="w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={post.image}
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />
      </div>
      <div>
        <h4 className="line-clamp-2 text-sm font-medium group-hover:text-red-600 transition">
          {post.title}
        </h4>
        <p className="text-[10px] text-gray-500 mt-1.5">
          {post.date} &bull; {post.readTime}
        </p>
      </div>
    </Link>
  );
}