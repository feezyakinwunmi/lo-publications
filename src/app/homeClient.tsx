
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { sendGAEvent } from '@next/third-parties/google'
import { 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  Loader2, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  MessageCircle,
  PenTool, 
  ShieldCheck, 
  Layout, 
  MessageSquare, 
  Upload, 
  Edit, 
  Image, 
  Globe, 
  Rocket, 
  Star, 
  Headphones,
  Users,
  Award,
  Clock,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { DEMO_BOOKS, SHOW_DEMO_BOOKS } from "./books/data";
import { useSiteContent } from "./data/SiteContentProvider";
import { homeFaqs } from "./data/faqs";
import AuthorAvatar from "./authors/AuthorAvatar";
import TiltCard from "./components/TiltCard";
import CountUp from "./components/CountUp";

// Types for real data
type Book = {
  id: string;
  title: string;
  author: string;
  cover_url?: string | null;
  published_year?: number | null;
};

const tickerText = "100+ Published Titles • Author-Centric Process • Fast Turnaround Times • Global Distribution Support • Faith-Friendly, Values-Aligned Publishing • Your Story Deserves Excellence • ";

// Team members data
const teamMembers = [
  { name: "Layo Obidike",  image: "/Layo-Obidike.png" },
  { name: "John", image: "/john.jpg" },
  { name: "Kenny", image: "/kenny.jpg" },
  { name: "Deb",image: "/deb.jpg" },
  { name: "Akeem", image: "/akeem.png" },
  { name: "Oma", image: "/oma.jpeg" },
  { name: "Jul",image: "/jul.jpeg" },
  { name: "Ade", image: "/ade.png" },
];

// Stats data
const stats = [
  { number: "20+", label: "Authors Published", icon: Users },
  { number: "100+", label: "Books Published", icon: BookOpen },
  { number: "98%", label: "Satisfaction Rate", icon: Award },
  { number: "4+", label: "Countries Reached", icon: Globe },
];

const processSteps = [
  { title: "Submit", desc: "Share your manuscript or idea with us.", icon: Upload },
  { title: "Review", desc: "We evaluate your work and provide feedback.", icon: Edit },
  { title: "Design", desc: "Professional cover and interior design.", icon: Image },
  { title: "Prepare for Publication", desc: "Final checks, ISBN and registration support, metadata, and publication-ready files.", icon: Globe },
  { title: "Launch", desc: "We help you launch and promote your book.", icon: Rocket },
];


export default function HomeClient() {
  const { showcaseAuthors, reviews } = useSiteContent();
  const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]);
  const [loadingBooks, setLoadingBooks] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Simple contact form state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  // Carousel state for testimonials
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  // Testimonial cards visible at once: 1 on mobile, 2 from md, 3 from lg
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const update = () => setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Fetch latest 4 published books
  useEffect(() => {
    async function fetchFeaturedBooks() {
      setLoadingBooks(true);

      // Keep sample titles out of the public site until approved books are available.
      if (!isSupabaseConfigured()) {
        setFeaturedBooks(SHOW_DEMO_BOOKS ? DEMO_BOOKS.slice(0, 6) : []);
        setLoadingBooks(false);
        return;
      }

      const supabase = createClient();

      if (!supabase) {
        setFeaturedBooks(SHOW_DEMO_BOOKS ? DEMO_BOOKS.slice(0, 6) : []);
        setLoadingBooks(false);
        return;
      }

      const { data, error } = await supabase
        .from("books")
        .select("id, title, author, cover_url, published_year")
        .order("published_year", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(6);

      if (error) {
        console.error("Books fetch error:", error);
        setError("Failed to load featured books");
      } else {
        setFeaturedBooks(data || []);
      }
      setLoadingBooks(false);
    }

    fetchFeaturedBooks();
  }, []);

  // Simple form submit
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError("");
    setFormSuccess(false);

    setTimeout(() => {
      setFormSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setFormLoading(false);
    }, 1500);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Same testimonials as the authors page: admin-added ones plus author quotes
  const testimonials = reviews;

  // Carousel navigation: one card per click, stopping once the last card is in view
  const maxSlide = Math.max(0, testimonials.length - perView);
  const slide = Math.min(currentSlide, maxSlide);

  const nextSlide = () => {
    setCurrentSlide(Math.min(slide + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide(Math.max(slide - 1, 0));
  };

  // Team carousel navigation
  const nextTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 4));
  };

  const prevTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev - 1 + Math.ceil(teamMembers.length / 4)) % Math.ceil(teamMembers.length / 4));
  };

  // Until the catalogue has approved titles, the hero shows our featured authors' books
  const heroCovers: Book[] = (
    featuredBooks.length
      ? featuredBooks
      : showcaseAuthors.map((a) => ({
          id: a.slug,
          title: a.books[0].title,
          author: a.name,
          cover_url: a.books[0].coverImage,
        }))
  ).slice(0, 4);

  const getVisibleTeam = () => {
    const start = currentTeamSlide * 4;
    const end = start + 4;
    return teamMembers.slice(start, end);
  };

  return (
    <main className="min-h-screen mt-20 md:mt-0">

      {/* =====================================================
          HERO - Original design
      ====================================================== */}
      <motion.section 
        className="relative min-h-screen overflow-hidden bg-[#f5f2ed] px-5 pb-10 pt-20 sm:px-8 lg:px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* organic shapes with parallax */}
        <motion.div 
          className="pointer-events-none absolute -right-[15%] top-[5%] h-[600px] w-[600px] rounded-[48%_52%_60%_40%] bg-[#e5d8ce]"
          style={{ y: y1 }}
        />
        <motion.div 
          className="pointer-events-none absolute -bottom-[20%] -left-[10%] h-[450px] w-[450px] rounded-[60%_40%_45%_55%] bg-[#e8dfd7]"
          style={{ y: y2 }}
        />

        <div className="relative mx-auto max-w-[1500px]">
          <div className="grid min-h-[650px] items-center gap-8 lg:grid-cols-12">

            {/* BOOKS */}
            <motion.div 
              className="order-2 lg:order-1 lg:col-span-5"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-3 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[.25em] text-black/40">
                <span className="h-2 w-2 rounded-full bg-[#8d171c]" />
                Independent Publishing
              </div>

              <div className="relative flex h-[380px] items-center justify-center sm:h-[470px]">
                <div className="absolute h-[260px] w-[260px] rounded-[46%_54%_60%_40%] bg-[#8d171c] sm:h-[330px] sm:w-[330px]" />

                {heroCovers.map((book, index) => (
                  <motion.div
                    key={book.id}
                    className="absolute w-[160px] sm:w-[200px]"
                    style={{ zIndex: index + 2 }}
                    initial={{ opacity: 0, y: 120, x: 0, rotate: 0 }}
                    animate={{ opacity: 1, y: [0, -8, 0], x: [-80, -28, 28, 80][index], rotate: [-11, -4, 5, 11][index] }}
                    transition={{
                      opacity: { duration: 0.5, delay: 0.4 + index * 0.12 },
                      x: { type: "spring", stiffness: 70, damping: 13, delay: 0.4 + index * 0.12 },
                      rotate: { type: "spring", stiffness: 70, damping: 13, delay: 0.4 + index * 0.12 },
                      y: { duration: 4 + index * 0.6, repeat: Infinity, ease: "easeInOut", delay: 1.4 + index * 0.3 },
                    }}
                    whileHover={{ scale: 1.08, rotate: 0, zIndex: 20, transition: { duration: 0.3 } }}
                  >
                    <div className="aspect-[3/4] overflow-hidden rounded-xl border border-white/60 bg-[#ddd6ce] shadow-[20px_25px_50px_rgba(0,0,0,.2)]">
                      <img
                        src={book.cover_url || "/book.jpg"}
                        alt={book.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* HERO TEXT */}
            <motion.div 
              className="order-1 lg:order-2 lg:col-span-7"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="mb-5 text-[9px] font-bold uppercase tracking-[.25em] text-black/35">
                Stories · Ideas · Books
              </p>

              <h1 className="text-[16vw] text-black font-black leading-[.89] tracking-[-.095em] sm:text-[12vw] lg:text-[8.5vw]">
                YOUR STORY
                <br />
                <span className=" text-[#8d171c] ">DESERVES</span>
                <br />
                A BOOK
              </h1>

              <div className="mt-9 max-w-xl">
                <p className="text-xl font-bold text-black leading-tight sm:text-2xl lg:text-[27px]">
                  We turn ideas, manuscripts, and voices into books people want to read.
                </p>
                <p className="mt-4 max-w-md text-sm leading-6 text-black/50">
                  From editorial direction and cover design to formatting and publishing, we help authors take their stories from page to reader.
                </p>

                <motion.a
                  href="/submit"
                  onClick={() =>
                      sendGAEvent('event', 'button_click', {
                        value: 'Start your book',
                        // any other parameters
                      })
                    }
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#8d171c] px-5 py-3 text-[10px] font-bold uppercase tracking-[.18em] text-white transition-transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Book
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#8d171c]">
                    <ArrowRight size={13} />
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* bottom hero strip */}
          <motion.div 
            className="grid gap-4 md:grid-cols-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative min-h-[210px] overflow-hidden rounded-[22px] bg-black md:col-span-8">
              <img
                src="/img1.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
              <div className="relative flex h-full items-end p-6 text-white sm:p-8">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[.25em] text-white/40">
                    The publishing experience
                  </p>
                  <p className="mt-2 max-w-lg text-2xl font-bold leading-tight sm:text-3xl">
                    Your manuscript deserves more than a file on your laptop
                  </p>
                </div>
              </div>
            </div>

            <div className="flex min-h-[210px] flex-col justify-between rounded-[22px] bg-[#ddd2c7] p-7 md:col-span-4">
              <span className="text-[9px] font-bold uppercase tracking-[.25em] text-black/35">
                LO Publications
              </span>
              <p className="text-4xl text-black font-black leading-[.82] tracking-[-.06em]">
                STORIES
                <br />
                THAT
                <br />
                <span className="text-[#8d171c]">STAY</span>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Tiny Ticker */}
      <div className="bg-[#8d171c] text-white py-3 overflow-hidden whitespace-nowrap">
        <motion.div
          className="inline-block text-sm md:text-base font-medium"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {tickerText.repeat(4)}
        </motion.div>
      </div>

      {/* =====================================================
          STATS SECTION
      ====================================================== */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 p-6 text-center transition-colors duration-500 hover:border-transparent"
                >
                  <div className="absolute inset-0 translate-y-full bg-[#8d171c] transition-transform duration-500 ease-out group-hover:translate-y-0" />
                  <div className="relative">
                    <div className="inline-flex p-3 rounded-full bg-[#8d171c]/10 text-[#8d171c] mb-4 transition-all duration-500 group-hover:bg-white/15 group-hover:text-white group-hover:rotate-[360deg]">
                      <Icon size={24} />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-[#8d171c] transition-colors duration-500 group-hover:text-white">
                      <CountUp value={stat.number} />
                    </div>
                    <div className="text-sm text-gray-600 mt-1 transition-colors duration-500 group-hover:text-white/80">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8d171c]">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-4">Everything Your Book Needs to Be Published Professionally</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From manuscript development to publication preparation, we provide the professional guidance, creative expertise, and publishing support to bring your story to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: PenTool, title: "Editorial Services", desc: "Manuscript assessment, editorial refinement, proofreading, and final manuscript preparation.", href: "/services#editorial-services" },
              { icon: Layout, title: "Book Design", desc: "Professional cover design, interior design, typesetting, and visual content development.", href: "/services#book-design" },
              { icon: BookOpen, title: "Publishing Services", desc: "ISBN and registration support, platform setup, publication files, and project management.", href: "/services#publishing-services" },
              { icon: Rocket, title: "Author Development & Promotion", desc: "Author profiles, launch planning, media support, and agreed promotional materials.", href: "/services#author-development" },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <TiltCard className="group h-full rounded-2xl">
                    <a
                      href={service.href}
                      className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-7 transition-all duration-500 hover:border-[#8d171c]/30 hover:bg-white hover:shadow-[0_30px_60px_-25px_rgba(141,23,28,.4)]"
                    >
                      <span className="absolute right-5 top-4 text-5xl font-black text-black/[.04] transition-colors duration-500 group-hover:text-[#8d171c]/10">
                        0{idx + 1}
                      </span>
                      <div className="relative w-14 h-14 rounded-2xl bg-[#8d171c]/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#8d171c] group-hover:rounded-full group-hover:scale-110">
                        <Icon className="w-7 h-7 text-[#8d171c] transition-all duration-500 group-hover:text-white group-hover:-rotate-12" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
                      <p className="flex-1 text-gray-600 leading-relaxed">{service.desc}</p>
                      <span className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#8d171c]">
                        Explore Services
                        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
                      </span>
                      <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#8d171c] transition-all duration-500 group-hover:w-full" />
                    </a>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a href="/services" className="inline-flex items-center gap-3 rounded-lg bg-[#8d171c] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-[#6b1215]">
              View All Services <ArrowRight size={18} />
            </a>
          </div>

          <div className="hidden mt-20 space-y-12" aria-hidden="true">
            {[
              {
                id: "editorial-services",
                icon: PenTool,
                title: "Editorial Services",
                intro: "Thoughtful editorial support that strengthens your manuscript while preserving the voice and purpose behind it.",
                services: [
                  ["Editorial Development and Manuscript Assessment", "We assess your manuscript’s content, structure, clarity, and readiness for publication, with practical recommendations to help develop a stronger, more engaging book."],
                  ["Structural, Line, and Copyediting", "We refine organisation, sentence flow, language, grammar, consistency, and readability at the editorial level agreed for your manuscript."],
                  ["Proofreading and Final Manuscript Preparation", "We review the final manuscript for typographical, grammatical, and formatting errors before preparing it for professional book production."],
                ],
              },
              {
                id: "book-design",
                icon: Layout,
                title: "Book Design and Visual Development",
                intro: "A considered visual identity and reading experience that helps your book meet professional publishing standards.",
                services: [
                  ["Book Cover Design", "We create professional book covers that reflect your book’s message, genre, intended audience, and market positioning."],
                  ["Book Interior Design and Typesetting", "We transform your approved manuscript into a well-designed book interior, with close attention to typography, layout, consistency, and readability."],
                  ["Illustrations, Diagrams, and Visual Content", "We develop or coordinate visual elements that support your content, clarify complex ideas, and complement your manuscript."],
                ],
              },
              {
                id: "publishing-services",
                icon: BookOpen,
                title: "Publishing Services",
                intro: "Clear, practical publishing support from final manuscript approval to production-ready files.",
                services: [
                  ["ISBN Application and Publishing Registration", "We assist with ISBN applications and applicable publishing registration requirements, preparing the necessary identifiers and documentation."],
                  ["Publishing Platform Setup", "We assist with the preparation of publication information and book details for applicable publishing platforms, according to the agreed arrangement."],
                  ["Publishing Project Management", "We coordinate the agreed workflow, timelines, approvals, and production stages so that every project progresses with clarity."],
                ],
              },
              {
                id: "author-development",
                icon: Rocket,
                title: "Author Development, Launch, and Promotion",
                intro: "Optional or package-specific services that help authors establish their platform and present their books professionally.",
                services: [
                  ["Author Profile and Platform Setup", "We help develop professional author biographies, profiles, and applicable platforms so readers, partners, and media can discover your work."],
                  ["Book Launch Planning and Support", "We support launch planning, event coordination, promotional timelines, programme development, and agreed launch materials."],
                  ["Author Media, Public Relations, and Marketing Materials", "We prepare media profiles, press materials, interview resources, book announcements, social graphics, mockups, flyers, and other agreed campaign assets."],
                ],
              },
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.section
                  id={category.id}
                  key={category.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="scroll-mt-28 rounded-3xl border border-gray-100 bg-[#f8f6f3] p-7 md:p-10"
                >
                  <div className="flex items-start gap-4 mb-8">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8d171c] text-white"><Icon size={23} /></div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-black">{category.title}</h3>
                      <p className="mt-2 max-w-3xl text-gray-600 leading-relaxed">{category.intro}</p>
                    </div>
                  </div>
                  <div className="grid gap-5 md:grid-cols-3">
                    {category.services.map(([title, description]) => (
                      <div key={title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                        <h4 className="font-semibold text-black leading-snug">{title}</h4>
                        <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="hidden py-20 bg-[#8d171c] text-white" aria-hidden="true">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">Our Publishing Approach</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">A Clear and Professional Publishing Process</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/85">
            Every publishing project is guided by an agreed scope of work that defines the services, deliverables, timelines, and responsibilities for that project.
          </p>
          <div className="grid gap-5 mt-10 text-left md:grid-cols-2">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
              <h3 className="font-semibold text-lg">Core publishing deliverables</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">Editorial refinement, cover design, interior design and typesetting, ISBN application assistance, publishing registration, and publication-ready files may be included as specified in your publishing agreement.</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
              <h3 className="font-semibold text-lg">Additional services</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">Launch planning, author platform development, media and public relations, promotional campaigns, distribution support, and ongoing publicity may be selected separately or included in chosen packages.</p>
            </div>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-white/70">We do not promise media coverage, sales, bestseller rankings, distribution acceptance, or promotional outcomes, as these depend on external partners, platforms, audiences, and market conditions.</p>
        </div>
      </section>

      {/* =====================================================
          METHOD & MASTERY
      ====================================================== */}
      <section id="about" className="py-24 bg-[#f8f6f3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8d171c]">Our Method</span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">Method &amp; Mastery</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We don&apos;t believe great publishing happens by accident. Every decision should serve the story, the author, and the reader.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  { title: "Author First", text: "Your story stays at the centre of every decision we make." },
                  { title: "Direction Before Design", text: "We understand the story before we decide how it should look." },
                  { title: "Uncompromising Quality", text: "Every page, cover, and detail should reflect the value of the work." },
                  { title: "Purpose Over Noise", text: "We don't publish simply to add another book to the world. We publish with intention." },
                ].map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group -mx-4 flex gap-4 rounded-2xl px-4 py-3 transition-all duration-300 hover:translate-x-2 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8d171c] text-white transition-transform duration-500 group-hover:rotate-[72deg] group-hover:scale-110">
                      <Star size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">{principle.title}</h4>
                      <p className="text-sm text-gray-600">{principle.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-[#8d171c] font-semibold hover:gap-4 transition-all"
                whileHover={{ x: 5 }}
              >
                Learn more about our approach
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-transparent ">
                <img
                  src="/book.jpg"
                  alt="LO Publications"
                  className="h-full w-full object-contain "
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 rounded-lg bg-white p-6 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-sm font-medium">Built around</p>
                <p className="text-lg font-bold text-[#8d171c]">the author</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS / HOW IT WORKS
      ====================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8d171c]">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-4">Your Publishing Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From manuscript to masterpiece — we guide you through every step of the publishing process.
            </p>
          </motion.div>

          <ProcessTimeline />
          <div className="mt-14 text-center">
            <a href="/publishing-journey" className="inline-flex items-center gap-3 rounded-lg border-2 border-[#8d171c] px-7 py-3.5 font-semibold text-[#8d171c] transition hover:bg-[#8d171c] hover:text-white">
              View More Details <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED AUTHORS
      ====================================================== */}
      <FeaturedAuthorsShowcase />

      {/* =====================================================
          FEATURED BOOKS
      ====================================================== */}
      <section id="books" className="py-24 bg-[#f8f6f3]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8d171c]">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-4">Our Library</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest and most celebrated titles — stories that inspire, empower, and captivate.
            </p>
          </motion.div>

          {loadingBooks ? (
            <div className="text-center py-12">
              <Loader2 className="animate-spin mx-auto" size={48} />
              <p className="mt-4 text-gray-600">Loading featured books...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-600">{error}</div>
          ) : featuredBooks.length === 0 ? (
            <div className="text-center py-12 text-gray-600">No featured books yet. Check back soon!</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {featuredBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                    <img
                      src={book.cover_url || "https://via.placeholder.com/800x800?text=No+Cover"}
                      alt={book.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm opacity-80">{book.published_year || "Published"}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2 line-clamp-2">{book.title}</h3>
                    <p className="text-gray-600">by {book.author}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-16">
            <motion.a
              href="/books"
              onClick={() =>
                  sendGAEvent('event', 'button_click', {
                    value: 'View All Books',
                    // any other parameters
                  })
                }
              className="inline-flex items-center px-8 py-4 bg-[#8d171c] text-white font-semibold rounded-lg hover:bg-[#6b1215] transition shadow-lg group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Books
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
            </motion.a>
          </div>
        </div>
      </section>

      {/* =====================================================
          MEET OUR TEAM
      ====================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8d171c]">Our People</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering authors with excellence. Our passionate team helps you turn ideas into impact with creativity, professionalism, and care.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="text-center group"
              >
                <div className="relative mx-auto mb-4 h-36 w-36">
                  <div className="absolute -inset-2 rounded-full border-2 border-dashed border-[#8d171c]/0 transition-all duration-700 group-hover:rotate-180 group-hover:border-[#8d171c]/50" />
                  <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#8d171c] shadow-lg transition-shadow group-hover:shadow-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-[center_5%] grayscale-[30%] transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-[#8d171c] to-[#8d171c]/70 py-2 text-xs font-semibold text-white transition-transform duration-300 group-hover:translate-y-0">
                      {member.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.a
              href="/team"
              onClick={() =>
                  sendGAEvent('event', 'button_click', {
                    value: 'View Full Team',
                    // any other parameters
                  })
                }
                        className="inline-flex items-center px-8 py-4 border-2 border-[#8d171c] text-[#8d171c] font-semibold rounded-lg hover:bg-[#8d171c] hover:text-white transition group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Full Team
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
            </motion.a>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}
      <section className="py-24 bg-[#f8f6f3]">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8d171c]">
        Testimonials
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-4">
        What People Say
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Hear from authors who&apos;ve trusted us with their stories — real
        experiences, real impact.
      </p>
    </motion.div>

    {testimonials.length > 0 && (
      <div className="relative">
        {/* Carousel viewport */}
        <div className="overflow-hidden -mx-3">
          <motion.div
            className="flex"
            animate={{
              x: `-${(slide * 100) / perView}%`,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
          >
            {testimonials.map((t) => (
              <div
                key={t.slug}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3"
              >
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 h-full flex flex-col relative group hover:shadow-2xl hover:shadow-[#8d171c]/10 transition-all duration-300 hover:-translate-y-1">
                  {/* Big quote icon */}
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-[#8d171c]/10" />

                  {/* Rating */}
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < (t.rating ?? 5) ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"
                        }
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-base md:text-lg text-gray-800 italic leading-relaxed flex-1 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <AuthorAvatar author={t} size="sm" ring="ring-2 ring-[#8d171c] group-hover:scale-105 transition-transform" />
                    <div className="min-w-0">
                      <h4 className="text-base font-bold text-black truncate">
                        {t.name}
                      </h4>
                      <p className="text-sm text-gray-500 truncate">
                        {t.firstTitle ? <>Author of &ldquo;{t.firstTitle}&rdquo;</> : t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation arrows */}
        {maxSlide > 0 && (
          <>
            <motion.button
              onClick={prevSlide}
              className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-[#8d171c] hover:text-white text-[#8d171c] transition disabled:opacity-30 disabled:cursor-not-allowed z-10"
              disabled={slide === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-[#8d171c] hover:text-white text-[#8d171c] transition disabled:opacity-30 disabled:cursor-not-allowed z-10"
              disabled={slide >= maxSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} />
            </motion.button>
          </>
        )}

        {/* Dots */}
        {maxSlide > 0 && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: maxSlide + 1 }, (_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`rounded-full transition-all ${
                  slide === idx
                    ? "bg-[#8d171c] w-8 h-2.5"
                    : "bg-gray-300 w-2.5 h-2.5 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    )}
  </div>
</section>

      {/* =====================================================
          FAQ / ACCORDION SECTION
      ====================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8d171c]">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our publishing process and services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {homeFaqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FaqItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA - FINAL
      ====================================================== */}
      <section id="contact" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#8d171c]" />
        <motion.div 
          className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
              Your Next Chapter
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Your Story Is Next
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Tell us about the book you&apos;ve been thinking about. We&apos;ll help you figure out what comes next.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="/submit"
                className="inline-flex items-center gap-3 rounded-lg bg-white px-8 py-3.5 text-sm font-medium text-[#8d171c] transition-all hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Book
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}

// Publishing steps with a progress line that fills as the section scrolls into view
function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  return (
    <div ref={ref} className="relative">
      {/* Horizontal track (desktop) */}
      <div className="absolute left-[10%] right-[10%] top-10 hidden h-1 rounded-full bg-[#8d171c]/10 md:block">
        <motion.div className="h-full origin-left rounded-full bg-[#8d171c]" style={{ scaleX: progress }} />
      </div>
      {/* Vertical track (mobile) */}
      <div className="absolute bottom-10 left-10 top-10 w-1 -translate-x-1/2 rounded-full bg-[#8d171c]/10 md:hidden">
        <motion.div className="h-full w-full origin-top rounded-full bg-[#8d171c]" style={{ scaleY: progress }} />
      </div>

      <ol className="relative grid gap-10 md:grid-cols-5 md:gap-6">
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group flex gap-6 md:flex-col md:items-center md:text-center"
            >
              <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-[#8d171c]/25 group-hover:animate-ping" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#8d171c] text-white shadow-lg transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[360deg]">
                  <Icon size={28} />
                </div>
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs font-bold text-white ring-4 ring-white">
                  {index + 1}
                </span>
              </div>
              <div className="flex-1 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#8d171c]/30 group-hover:shadow-xl md:mt-6 md:w-full">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#8d171c]">Step 0{index + 1}</p>
                <h3 className="mt-1 font-semibold text-black">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.desc}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}

// Interactive author list: hovering or tapping a name brings their book and words forward
function FeaturedAuthorsShowcase() {
  const { showcaseAuthors } = useSiteContent();
  const [active, setActive] = useState(0);
  const author = showcaseAuthors[active];
  const book = author.books[0];

  return (
    <section className="relative overflow-hidden bg-[#111] py-24 text-white">
      <motion.div
        className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-[#8d171c]/40 blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">Our Pen Masters</span>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Featured Authors</h2>
            <p className="mt-4 max-w-xl text-lg text-white/60">
              Real authors, real books. Hover over a name to meet the voice behind the cover.
            </p>
          </div>
          <Link
            href="/authors"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-[#8d171c] md:self-auto"
          >
            Meet All Authors
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Names */}
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {showcaseAuthors.map((a, index) => (
              <li key={a.slug}>
                <button
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className="group flex w-full items-center gap-4 py-5 text-left"
                >
                  <span
                    className={`text-sm font-bold tabular-nums transition-colors ${
                      active === index ? "text-[#e0474d]" : "text-white/30"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block text-xl font-bold transition-all duration-300 md:text-2xl ${
                        active === index ? "translate-x-2 text-white" : "text-white/45 group-hover:text-white/75"
                      }`}
                    >
                      {a.name}
                    </span>
                    <span
                      className={`block truncate text-sm transition-all duration-300 ${
                        active === index ? "translate-x-2 text-white/60" : "text-white/25"
                      }`}
                    >
                      {a.books[0].title}
                    </span>
                  </span>
                  <ArrowRight
                    size={20}
                    className={`shrink-0 transition-all duration-300 ${
                      active === index ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Stage */}
          <div className="relative min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={author.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid items-center gap-8 sm:grid-cols-[200px_1fr]"
              >
                <Link href={`/authors/all?author=${author.slug}`} className="group relative mx-auto block w-[180px] sm:w-full">
                  <motion.div
                    initial={{ rotate: -8, scale: 0.9 }}
                    animate={{ rotate: -3, scale: 1 }}
                    transition={{ type: "spring", stiffness: 120, damping: 12 }}
                    className="aspect-[3/4] overflow-hidden rounded-lg shadow-[0_30px_60px_rgba(0,0,0,.6)] ring-1 ring-white/10 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"
                  >
                    <img src={book.coverImage} alt={book.title} className="h-full w-full object-cover" />
                  </motion.div>
                </Link>
                <div>
                  <div className="mb-5 flex items-center gap-4">
                    <AuthorAvatar author={author} size="sm" ring="ring-2 ring-white/20" />
                    <div>
                      <p className="font-bold">{author.name}</p>
                      <p className="text-xs text-white/50">{author.profession}</p>
                    </div>
                  </div>
                  <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">{book.genre}</span>
                  <p className="mt-5 text-lg italic leading-relaxed text-white/80">&ldquo;{author.quote}&rdquo;</p>
                  <Link
                    href={`/authors/all?author=${author.slug}`}
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#e0474d] transition hover:text-white"
                  >
                    Read {author.name.replace(/^Pastor\s+/, "").split(" ")[0]}&apos;s Story
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        open ? "border-[#8d171c]/30 bg-[#f8f6f3] shadow-md" : "border-gray-200 bg-white hover:border-[#8d171c]/30"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span className={`font-semibold transition-colors ${open ? "text-[#8d171c]" : "text-black group-hover:text-[#8d171c]"}`}>
          {q}
        </span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open ? "rotate-45 bg-[#8d171c] text-white" : "bg-[#8d171c]/10 text-[#8d171c]"
          }`}
        >
          <Plus size={20} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-6 pb-6 leading-relaxed text-gray-600">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Plus icon component for FAQ
function Plus({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
