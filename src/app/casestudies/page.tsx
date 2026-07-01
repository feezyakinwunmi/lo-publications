// src/app/casestudies/page.tsx
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Calendar, 
  Clock, 
  User,
  BookOpen,
  ArrowUpDown,
  X,
  ChevronDown,
  Star,
  TrendingUp,
  Award
} from "lucide-react";
import Link from "next/link";

// Hardcoded case studies data
const caseStudiesData = [
  {
    id: 1,
    title: "Rhapsody of Love",
    slug: "rhapsody-of-love-layo-obidike",
    author: "Layo Obidike",
    authorProfession: "Entrepreneur, Business Coach, Speaker",
    genre: "Inspirational / Christian Living",
    coverImage: "./rl.jpg",
    excerpt: "A transformational book combining reflections, poetry, guided exercises, and scriptural insights to help readers experience healing, self-love, forgiveness, and authentic relationships.",
    publishedDate: "2025-01-15",
    readTime: 8,
    featured: true,
    challenges: [
      "Getting a suitable book cover design",
      "Structuring content effectively",
      "Meeting publishing standards",
      "Preparing print and digital editions"
    ],
    solutions: [
      "Professional editing and formatting",
      "Custom cover design consultation",
      "ISBN support and digital publishing assistance",
      "Print-ready preparation"
    ],
    results: [
      "Successfully published in digital and print formats",
      "Enhanced author credibility",
      "Created speaking and coaching opportunities",
      "Expanded audience reach"
    ],
    testimonial: "Working with the publishing team made my dream of becoming a published author seamless. Their professionalism, guidance, and attention to detail ensured that Rhapsody of Love was published to a high standard while preserving the heart of my message.",
    authorBio: "Layo Obidike is passionate about personal and spiritual growth, emotional healing, and purposeful living. She is an entrepreneur, business coach, speaker, and author dedicated to helping others transform their lives."
  },
  {
    id: 2,
    title: "The Crown and the Burden",
    slug: "the-crown-and-the-burden-temitope-soewu",
    author: "Temitope Soewu",
    authorProfession: "Lawyer, Writer, Speaker",
    genre: "Memoir / Literary Nonfiction",
    coverImage: "/./crown.jpg",
    excerpt: "A reflective memoir that explores identity, family dynamics, birth order, resilience, forgiveness, and healing through the author's experience as a firstborn daughter in a Nigerian polygamous household.",
    publishedDate: "2025-02-20",
    readTime: 12,
    featured: true,
    challenges: [
      "Documenting sensitive family experiences",
      "Balancing personal truth with privacy",
      "Structuring a narrative spanning decades",
      "First-time author navigating publishing"
    ],
    solutions: [
      "Comprehensive manuscript editing (5 stages)",
      "Custom cover design representing the memoir's theme",
      "ISBN and copyright registration",
      "Amazon publication setup"
    ],
    results: [
      "Successfully published memoir",
      "Professional editorial development",
      "Global print distribution via Amazon",
      "Published on author's birthday"
    ],
    testimonial: "The publishing team helped me transform my deeply personal manuscript into a professionally published memoir. Their expertise and sensitivity made all the difference.",
    authorBio: "Temitope Soewu is a lawyer, writer, and speaker with a growing interest in family systems, identity, womanhood, and personal development."
  },
  {
    id: 3,
    title: "A Visit to Aunt Ngozi",
    slug: "a-visit-to-aunt-ngozi-omolara-adeola",
    author: "Omolara Adeola",
    authorProfession: "Children's Author, Storyteller, Literacy Advocate",
    genre: "Children's Fiction / Educational",
    coverImage: "./ngozi.jpg",
    excerpt: "A culturally rich children's story that celebrates the beauty of family, community, and everyday learning through a memorable visit to a beloved aunt.",
    publishedDate: "2025-03-10",
    readTime: 6,
    featured: false,
    challenges: [
      "Finding books that reflect Nigerian culture",
      "Teaching values without being instructional",
      "Creating universally relatable stories",
      "Encouraging a love for reading"
    ],
    solutions: [
      "Authentic Nigerian family storytelling",
      "Age-appropriate language and engaging pace",
      "Subtle integration of values and lessons",
      "Culturally resonant illustrations and themes"
    ],
    results: [
      "Valuable educational resource for parents and teachers",
      "Supports literacy and character development",
      "Celebrates Nigerian traditions and identity",
      "Nurtures lifelong love for reading"
    ],
    testimonial: "I wanted to create a book that reminds children that some of life's greatest lessons are found in the simple moments we share with family.",
    authorBio: "Omolara Adeola believes that some of life's greatest lessons are learned through ordinary moments. She is dedicated to creating stories that capture the warmth of Nigerian family life while helping children develop meaningful values."
  },
  {
    id: 4,
    title: "Kingdom Strategies for Purpose-Driven Entrepreneurs",
    slug: "kingdom-strategies-pastor-ireti-sholola",
    author: "Pastor Ireti Sholola",
    authorProfession: "Christian Minister, Leadership Mentor",
    genre: "Christian Entrepreneurship",
    coverImage: "./kingdom.jpg",
    excerpt: "A transformative book bridging faith and entrepreneurship with practical, Scripture-based strategies for leadership, stewardship, integrity, and sustainable business growth.",
    publishedDate: "2025-04-05",
    readTime: 10,
    featured: false,
    challenges: [
      "Transforming years of ministry experience into a book",
      "Maintaining biblical accuracy and readability",
      "Meeting high publishing standards"
    ],
    solutions: [
      "Manuscript editing and proofreading",
      "Professional typesetting and cover design",
      "Quality assurance and publication support"
    ],
    results: [
      "Successfully published and serving as a resource",
      "Encouraging Christian entrepreneurs globally",
      "Creating lasting impact for Kingdom businesses"
    ],
    testimonial: "The publishing process was seamless. They helped me present my message professionally while keeping the heart of my ministry intact.",
    authorBio: "Pastor Ireti Sholola is a Christian minister, leadership mentor, and Kingdom-minded entrepreneur dedicated to equipping business leaders with biblical principles."
  },
  {
    id: 5,
    title: "Names I've Worn",
    slug: "names-ive-worn-oluwaseun-deborah-adebayo",
    author: "Oluwaseun Deborah Adebayo",
    authorProfession: "Storyteller, Memoir Writer, Creative Artist",
    genre: "Inspirational Memoir / Women's Literature",
    coverImage: "./niw.jpg",
    excerpt: "An inspirational memoir exploring the journey of identity, grief, healing, resilience, and faith through the experiences of Deborah Adebayo and the women whose lives shaped her.",
    publishedDate: "2025-05-12",
    readTime: 14,
    featured: true,
    challenges: [
      "Transforming personal experiences into a broad memoir",
      "Organizing complex narrative across generations",
      "Balancing memoir, history, and faith-based reflection",
      "Maintaining emotional consistency"
    ],
    solutions: [
      "Comprehensive developmental editing",
      "Structural refinement and chapter sequencing",
      "Line editing and copyediting",
      "Professional cover and interior design"
    ],
    results: [
      "Successfully published 141-page memoir",
      "Professionally edited and designed",
      "Published under LO Publications imprint",
      "Complete editorial and design team support"
    ],
    testimonial: "The team helped me transform my manuscript into a professionally published work while preserving my authentic voice and the emotional depth of my story.",
    authorBio: "Oluwaseun Deborah Adebayo is a storyteller, memoir writer, creative artist, and founder of the Crafts and Impressions platform, dedicated to amplifying overlooked voices through storytelling."
  }
];

// Custom Select Component
const CustomSelect = ({ 
  options, 
  value, 
  onChange, 
  placeholder,
  icon: Icon 
}: { 
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl hover:border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-900/20 transition-all duration-200"
      >
        {Icon && <Icon size={18} className="text-gray-400" />}
        <span className="flex-1 text-left text-sm">
          {selectedOption?.label || placeholder || "Select..."}
        </span>
        <ChevronDown 
          size={16} 
          className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="py-1 max-h-60 overflow-y-auto">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-sm text-left hover:bg-red-50 transition-colors ${
                    value === option.value ? 'bg-red-50 text-red-900 font-medium' : 'text-gray-700'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const itemsPerPage = 10;

  // Get unique genres
  const genres = useMemo(() => {
    const genreSet = new Set(caseStudiesData.map(study => study.genre));
    return Array.from(genreSet);
  }, []);

  // Sort options
  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "a-z", label: "A - Z" },
    { value: "z-a", label: "Z - A" }
  ];

  // Genre options
  const genreOptions = [
    { value: "all", label: "All Topics" },
    ...genres.map(genre => ({ value: genre, label: genre }))
  ];

  // Featured studies for slider
  const featuredStudies = caseStudiesData.filter(study => study.featured);

  // Filter and sort logic
  const filteredStudies = useMemo(() => {
    let result = [...caseStudiesData];

    // Search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(study =>
        study.title.toLowerCase().includes(term) ||
        study.author.toLowerCase().includes(term) ||
        study.genre.toLowerCase().includes(term)
      );
    }

    // Genre
    if (selectedGenre !== "all") {
      result = result.filter(study => study.genre === selectedGenre);
    }

    // Sort
    switch (sortBy) {
      case "newest":
        result.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
        break;
      case "oldest":
        result.sort((a, b) => new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime());
        break;
      case "a-z":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return result;
  }, [searchTerm, selectedGenre, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredStudies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredStudies.slice(startIndex, endIndex);

  // Auto-slide
  useMemo(() => {
    if (!isAutoPlaying || featuredStudies.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredStudies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredStudies.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredStudies.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredStudies.length) % featuredStudies.length);
    setIsAutoPlaying(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedGenre("all");
    setSortBy("newest");
    setCurrentPage(1);
  };

  const hasActiveFilters = searchTerm !== "" || selectedGenre !== "all" || sortBy !== "newest";

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Slider Section */}
      {featuredStudies.length > 0 && (
        <section className="relative bg-gradient-to-br from-red-950 via-red-900 to-red-800 text-white overflow-hidden pt-20 md:pt-0">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Image */}
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={featuredStudies[currentSlide]?.coverImage || "https://via.placeholder.com/800x600?text=Featured+Case+Study"}
                    alt={featuredStudies[currentSlide]?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                  <Star size={14} fill="currentColor" />
                  Featured Case Study
                </div>
              </motion.div>

              {/* Right: Text Content */}
              <motion.div
                key={currentSlide + "-text"}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-5"
              >
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  <BookOpen size={16} />
                  <span>Case Study</span>
                  <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                  <span>{featuredStudies[currentSlide]?.genre}</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  {featuredStudies[currentSlide]?.title}
                </h2>
                
                <p className="text-base md:text-lg text-red-100/90 leading-relaxed max-w-lg">
                  {featuredStudies[currentSlide]?.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-red-200">
                  <span className="flex items-center gap-2">
                    <User size={16} />
                    {featuredStudies[currentSlide]?.author}
                  </span>
                  <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {formatDate(featuredStudies[currentSlide]?.publishedDate)}
                  </span>
                  <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    {featuredStudies[currentSlide]?.readTime} min read
                  </span>
                </div>

                <Link
                  href={`/casestudies/${featuredStudies[currentSlide]?.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-red-900 font-semibold rounded-xl hover:bg-red-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Read Full Case Study
                  <ChevronRight size={18} />
                </Link>
              </motion.div>
            </div>

            {/* Slider Controls */}
            {featuredStudies.length > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-110"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex gap-2">
                  {featuredStudies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentSlide(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? "bg-white w-8" 
                          : "bg-white/40 w-4 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-110"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-3">
                Case Studies
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                Explore real stories of authors who brought their books to life through professional publishing
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-xl shadow-sm">
              <TrendingUp size={16} className="text-red-900" />
              <span>{caseStudiesData.length} case studies</span>
            </div>
          </div>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 mb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative lg:col-span-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-900/20 focus:border-red-500 transition-all duration-200"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Genre Filter */}
            <CustomSelect
              options={genreOptions}
              value={selectedGenre}
              onChange={(value) => {
                setSelectedGenre(value);
                setCurrentPage(1);
              }}
              placeholder="All Topics"
              icon={BookOpen}
            />

            {/* Sort */}
            <CustomSelect
              options={sortOptions}
              value={sortBy}
              onChange={(value) => {
                setSortBy(value);
                setCurrentPage(1);
              }}
              placeholder="Sort by"
              icon={ArrowUpDown}
            />

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-red-900 bg-red-50 rounded-xl hover:bg-red-100 transition-colors"
              >
                <X size={16} />
                Clear Filters
              </button>
            )}
          </div>

          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm text-gray-600">
              Showing <strong className="text-black">{startIndex + 1}</strong> -{" "}
              <strong className="text-black">{Math.min(endIndex, filteredStudies.length)}</strong> of{" "}
              <strong className="text-black">{filteredStudies.length}</strong> case studies
            </span>
            {hasActiveFilters && (
              <span className="text-xs text-gray-500">
                Filters applied
              </span>
            )}
          </div>
        </motion.div>

        {/* Results Grid */}
        {filteredStudies.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">No case studies found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-red-900 text-white rounded-xl hover:bg-red-800 transition shadow-lg"
            >
              Clear all filters
            </button>
          </motion.div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {currentItems.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <Link href={`/casestudies/${study.slug}`} className="block h-full">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                      <div className="relative h-56 overflow-hidden bg-gray-300">
                        <img
                          src={study.coverImage || "https://via.placeholder.com/600x400?text=Case+Study"}
                          alt={study.title}
                          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <span className="inline-flex items-center gap-2 text-sm font-medium bg-red-600 px-4 py-2 rounded-full">
                            Read Full Story
                            <ChevronRight size={16} />
                          </span>
                        </div>
                        {study.featured && (
                          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                            <Star size={12} fill="currentColor" />
                            Featured
                          </div>
                        )}
                      </div>
                      
                      <div className="p-5 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-xs mb-2">
                          <span className="bg-red-50 text-red-900 px-2.5 py-1 rounded-full font-medium">
                            {study.genre}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-black mb-1 line-clamp-2 group-hover:text-red-900 transition-colors">
                          {study.title}
                        </h3>
                        
                        <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                          <User size={14} className="text-gray-400" />
                          {study.author}
                        </p>
                        
                        <p className="text-sm text-gray-500 line-clamp-2 flex-grow mb-3">
                          {study.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-3 text-xs text-gray-400 pt-3 border-t border-gray-100">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {formatDate(study.publishedDate)}
                          </span>
                          <span className="w-0.5 h-3 bg-gray-300"></span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {study.readTime} min
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages}
                </div>
                
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-xl border border-gray-200 hover:border-red-900 hover:bg-red-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 rounded-xl font-medium transition-all ${
                          currentPage === pageNum
                            ? "bg-red-900 text-white shadow-md"
                            : "text-gray-600 hover:bg-red-50 hover:text-red-900"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-xl border border-gray-200 hover:border-red-900 hover:bg-red-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}
          </>
        )}
      </section>
    </main>
  );
}