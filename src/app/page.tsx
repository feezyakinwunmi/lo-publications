// // src/app/page.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, BookOpen, Calendar, Loader2, ChevronLeft, ChevronRight, Quote, MessageCircle } from "lucide-react";
// import { createClient } from "@/lib/supabase/client";
// import { PenTool, ShieldCheck, Layout, MessageSquare, Upload, Edit, Image, Globe, Rocket, Star, Headphones } from "lucide-react";

// // Types for real data
// type Book = {
//   id: string;
//   title: string;
//   author: string;
//   cover_url?: string | null;
//   published_year?: number | null;
// };

// type Testimonial = {
//   id: string;
//   author: string;
//   role?: string | null;
//   quote: string;
//   avatar_url?: string | null;
//   rating: number;
// };

// const tickerText = "100+ Published Titles • Author-Centric Process • Fast Turnaround Times • Global Distribution Support • Faith-Friendly, Values-Aligned Publishing • Your Story Deserves Excellence • ";

// export default function Home() {
//   const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]);
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
//   const [loadingBooks, setLoadingBooks] = useState(true);
//   const [loadingTestimonials, setLoadingTestimonials] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Simple contact form state
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [formLoading, setFormLoading] = useState(false);
//   const [formSuccess, setFormSuccess] = useState(false);
//   const [formError, setFormError] = useState("");

//   // Carousel state for testimonials
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Fetch latest 4 published books
//   useEffect(() => {
//     async function fetchFeaturedBooks() {
//       setLoadingBooks(true);
//       const supabase = createClient();

//       const { data, error } = await supabase
//         .from("books")
//         .select("id, title, author, cover_url, published_year")
//         .order("published_year", { ascending: false })
//         .order("created_at", { ascending: false }) // Add a secondary order for consistent results
//         .limit(4);

//       if (error) {
//         console.error("Books fetch error:", error);
//         setError("Failed to load featured books");
//       } else {
//         setFeaturedBooks(data || []);
//       }
//       setLoadingBooks(false);
//     }

//     fetchFeaturedBooks();
//   }, []);

//   // Fetch all testimonials
//   useEffect(() => {
//     async function fetchTestimonialsData() {
//       setLoadingTestimonials(true);
//       const supabase = createClient();

//       const { data, error } = await supabase
//         .from("testimonials")
//         .select("id, author, role, quote, avatar_url, rating")
//         .order("created_at", { ascending: false });

//       if (error) {
//         console.error("Testimonials fetch error:", error);
//         setError("Failed to load testimonials");
//       } else {
//         setTestimonials(data || []);
//       }
//       setLoadingTestimonials(false);
//     }

//     fetchTestimonialsData();
//   }, []);

//   // Simple form submit (simulated - later replace with real email function)
//   const handleFormSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormLoading(true);
//     setFormError("");
//     setFormSuccess(false);

//     // TODO: Replace with real Supabase Edge Function or API route to send email
//     setTimeout(() => {
//       setFormSuccess(true);
//       setFormData({ name: "", email: "", message: "" });
//       setFormLoading(false);
//     }, 1500);
//   };

//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Carousel navigation
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <main className="min-h-screen mt-20 md:mt-0">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-white to-white overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/book.jpg')] bg-cover bg-center opacity-10" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32 grid md:grid-cols-2 gap-12 items-center">
//           <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
//               Publish Your Story with <span className="text-red-900">Excellence</span>
//             </h1>
//             <p className="text-xl text-gray-700 max-w-lg">
//               We help authors turn manuscripts into beautifully crafted books — print & digital, visible worldwide.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <a href="#services" className="inline-flex items-center justify-center px-8 py-4 bg-red-900 text-white font-semibold rounded-lg hover:bg-red-800 transition shadow-lg">
//                 How It Works <ArrowRight className="ml-2" size={20} />
//               </a>
//               <a href="/books" className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-900 text-red-900 font-semibold rounded-lg hover:bg-red-50 transition">
//                 Check Our Books <BookOpen className="ml-2" size={20} />
//               </a>
//             </div>
//           </motion.div>

//           {/* Contact Form (replaced manuscript submission) */}
//           <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
//             <h2 className="text-2xl font-bold text-red-900 mb-6">Get in Touch</h2>

//             {formSuccess ? (
//               <div className="text-center py-8 text-green-600 font-medium">
//                 Message sent successfully! We'll get back to you soon.
//               </div>
//             ) : (
//               <form onSubmit={handleFormSubmit} className="space-y-5">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleFormChange}
//                   placeholder="Full Name"
//                   className="w-full text-black  px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
//                   required
//                   disabled={formLoading}
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleFormChange}
//                   placeholder="Email Address"
//                   className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
//                   required
//                   disabled={formLoading}
//                 />
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleFormChange}
//                   placeholder="Your message..."
//                   rows={4}
//                   className="w-full text-black  px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
//                   required
//                   disabled={formLoading}
//                 />
//                 {formError && <p className="text-red-600 text-sm">{formError}</p>}
//                 <button
//                   type="submit"
//                   disabled={formLoading}
//                   className="w-full bg-red-900 text-white py-4 rounded-lg font-semibold hover:bg-red-800 transition disabled:opacity-50 flex items-center justify-center gap-2"
//                 >
//                   {formLoading ? <Loader2 className="animate-spin" size={20} /> : null}
//                   {formLoading ? "Sending..." : "Send Message"}
//                 </button>
//               </form>
//             )}
//           </motion.div>
//         </div>
//       </section>

//       {/* Tiny Ticker */}
//       <div className="bg-red-900 text-white py-3 overflow-hidden whitespace-nowrap">
//         <motion.div
//           className="inline-block text-sm md:text-base font-medium"
//           animate={{ x: ["0%", "-100%"] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//         >
//           {tickerText.repeat(4)}
//         </motion.div>
//       </div>

//       {/* Services Section */}
//       <section id="services" className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What We Do</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Comprehensive publishing services designed to bring your vision to life with professionalism and care.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
//             {[
//               { icon: BookOpen, title: "Book Publishing (Print & Digital)", desc: "Seamless production with global reach." },
//               { icon: PenTool, title: "Editing & Proofreading", desc: "Expert polishing for flawless prose." },
//               { icon: ShieldCheck, title: "ISBN & Copyright Assistance", desc: "Full legal protection and registration." },
//               { icon: Layout, title: "Cover Design & Formatting", desc: "Stunning, market-ready visuals." },
//               { icon: MessageSquare, title: "Publishing Coaching & Strategy", desc: "Personalized guidance from start to launch." },
//             ].map((service, idx) => (
//               <motion.div
//                 key={service.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//                 className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-red-900/40 hover:shadow-2xl transition-all group"
//               >
//                 <div className="p-6 text-center">
//                   <service.icon className="w-12 h-12 text-red-900 mb-4 mx-auto group-hover:scale-110 transition-transform" />
//                   <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
//                   <p className="text-gray-600">{service.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <a href="/about" className="inline-flex items-center px-8 py-4 bg-red-900 text-white font-semibold rounded-lg hover:bg-red-800 transition shadow-md">
//               Explore Our Services <ArrowRight className="ml-2" size={20} />
//             </a>
//           </div>
//         </div>
//       </section>

//  {/* Advertisement Banner - Expert Services */}
//       <section className="py-7 md:h-[350] bg-gradient-to-r from-red-900 to-red-800 text-white">
//         <div className=" mx-auto pl-6 flex md:flex-row flex-col">
//             <div className="max-w-7xl md:w-[200%] mx-auto px-6 text-left">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold">Expert Services</h2>
//             <h3 className="text-2xl md:text-3xl font-semibold">Tailored for Every Author</h3>
//             <p className="text-xl max-w-3xl mx-auto">
//               Self-publishing a book becomes simple. Transform your ideas into professional literature with our fantasy, romance, sci-fi, and children’s book publishing expertise.
//             </p>

//             {/* <div className="flex flex-col sm:flex-row  gap-6 mt-8">
//               <a
//                 href="#chat" // or live chat integration later
//                 className="inline-flex items-center px-5 py-2 bg-white text-red-900 font-semibold text-md rounded-lg hover:bg-gray-100 transition shadow-lg"
//               >
//                 <MessageCircle className="mr-3" size={20} />
//                 LIVE CHAT
//               </a>
//               <a
//                 href="tel:+14155049548"
//                 className="inline-flex items-center px-10 py-2 bg-transparent border-2 border-white text-white font-semibold text-md rounded-lg hover:bg-white/10 transition"
//               >
//                 <Headphones className="mr-3" size={20} />
//                 Call Us: (415) 504-9548
//               </a>
//             </div> */}
//           </motion.div>
//         </div>
// <img
//               src="/book.jpg" // Elegant open book + red light (placeholder)
//               alt="Professional book publishing workspace"
//               className="w-full h-80 md:h-96 object-contain"
//             />        

//         </div>
      
//       </section>

//         {/* Why Choose Us - Wavy Connected Timeline */}
//     <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Why Choose Us</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Your story deserves the best — we guide you through every step with expertise and care.
//             </p>
//           </motion.div>

//           {/* Horizontal Chain Container */}
//           <div className="relative">
//             {/* Mobile: Stack vertically */}
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-8 relative">
//               {[
//                 {
//                   number: "1",
//                   title: "Manuscript Submission",
//                   desc: "Share your manuscript or idea with us to begin your publishing journey.",
//                   icon: Upload,
//                 },
//                 {
//                   number: "2",
//                   title: "Editing & Formatting",
//                   desc: "Our editors refine your content and format it for both print and digital platforms.",
//                   icon: Edit,
//                 },
//                 {
//                   number: "3",
//                   title: "Cover Design",
//                   desc: "We craft a professional book cover according to your unique preferences.",
//                   icon: Image,
//                 },
//                 {
//                   number: "4",
//                   title: "Branding",
//                   desc: "If needed, our team builds a high-end author website and branding.",
//                   icon: Globe,
//                 },
//                 {
//                   number: "5",
//                   title: "Publishing",
//                   desc: "Finally, your book is published with ISBN via Amazon & major platforms.",
//                   icon: Rocket,
//                 },
//               ].map((step, idx) => (
//                 <motion.div
//                   key={step.title}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.7, delay: idx * 0.15 }}
//                   className="flex flex-col items-center text-center relative z-10"
//                 >
//                   {/* Connected Circle */}
//                   <div className="relative">
//                     <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-red-900 text-white flex items-center justify-center shadow-2xl border-8 border-red-800 relative z-20">
//                       <div className="text-center">
//                         <step.icon className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-2" />
//                         <span className="text-2xl md:text-3xl font-bold">{step.number}</span>
//                       </div>
//                     </div>

//                     {/* Overlap/Connection effect - pseudo line to next */}
//                     {idx < 4 && (
//                       <div className="hidden md:block absolute top-1/2 -right-16 w-32 h-1 bg-red-900/40 transform translate-y-1/2 z-0" />
//                     )}
//                   </div>

//                   {/* Title & Desc */}
//                   <h3 className="text-xl md:text-2xl font-bold text-red-900 mt-6 mb-3">{step.title}</h3>
//                   <p className="text-gray-700 max-w-xs">{step.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Books - Real Latest 4 */}
//       <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Featured Books</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Discover our latest and most celebrated titles — stories that inspire, empower, and captivate.
//             </p>
//           </motion.div>

//           {loadingBooks ? (
//             <div className="text-center py-12">
//               <Loader2 className="animate-spin mx-auto" size={48} />
//               <p className="mt-4 text-gray-600">Loading featured books...</p>
//             </div>
//           ) : error ? (
//             <div className="text-center py-12 text-red-600">{error}</div>
//           ) : featuredBooks.length === 0 ? (
//             <div className="text-center py-12 text-gray-600">No featured books yet. Check back soon!</div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
//               {featuredBooks.map((book) => (
//                 <motion.a
//                   key={book.id}
//                   href={`/books/${book.id}`} // Link to book detail page if you have one
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6 }}
//                   whileHover={{ scale: 1.03, y: -8 }}
//                   className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
//                 >
//                   <div className="relative h-80 overflow-hidden">
//                     <img
//                       src={book.cover_url || "https://via.placeholder.com/800x800?text=No+Cover"}
//                       alt={book.title}
//                       className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-black mb-2 line-clamp-2">{book.title}</h3>
//                     <p className="text-gray-600 mb-3">by {book.author}</p>
//                     <div className="flex items-center gap-4 text-sm text-gray-500">
//                       <span className="flex items-center gap-1">
//                         <Calendar size={16} /> {book.published_year || "N/A"}
//                       </span>
//                     </div>
//                   </div>
//                 </motion.a>
//               ))}
//             </div>
//           )}

//           <div className="text-center mt-16">
//             <a href="/books" className="inline-flex items-center px-10 py-5 bg-red-900 text-white font-semibold text-lg rounded-full hover:bg-red-800 transition shadow-xl group">
//               View All Books <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
//             </a>
//           </div>
//         </div>
//       </section>

//        {/* Transform Your Manuscript Banner - Styled like your reference, Image Left */}
//       <section className="py-7 md:h-[350] bg-gradient-to-r from-red-900 to-red-800 text-white">
//         <div className="mx-auto pl-6 flex md:flex-row flex-col items-center gap-[20]">
//           {/* Left: Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl"
//           >
//             <img
//               src="/book.jpg" // Or your /book.jpg
//               alt="Author holding published book"
//               className="w-full h-64 md:h-80 object-contain"
//             />
//           </motion.div>

//           {/* Right: Text & CTAs */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="w-full md:w-1/2 px-6 md:px-0 text-left space-y-6"
//           >
//             <h2 className="text-xl md:text-3xl font-bold leading-tight">
//               Turn Your Manuscript Into a <span className="underline decoration-white/40">Published Masterpiece</span>
//             </h2>

//             <p className="text-xl">
//               From raw ideas to global shelves — we make self-publishing effortless, professional, and impactful.
//             </p>

//             <p className="text-lg opacity-90">
//               Whether it's your first book or your next bestseller, our expert team handles editing, design, distribution, and more — so you focus on what you love: writing.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 mt-6">
//               <a
//                 href="/submit"
//                 className="inline-flex items-center px-4 py-2 bg-white text-red-900 font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg"
//               >
//                 <MessageCircle className="mr-3" size={24} />
//                 Submit Your Manuscript Now
//               </a>

//               <a
//                 href="/books"
//                 className="inline-flex items-center px-4 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition"
//               >
//                 See Published Works
//                 <ArrowRight className="ml-3" size={24} />
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>


//       {/* Testimonials Carousel - Real Data, Responsive (3+ on desktop, 1 on mobile) */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What People Say</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Hear from authors who've trusted us with their stories — real experiences, real impact.
//             </p>
//           </motion.div>

//           {loadingTestimonials ? (
//             <div className="text-center py-12">
//               <Loader2 className="animate-spin mx-auto" size={48} />
//               <p className="mt-4 text-gray-600">Loading testimonials...</p>
//             </div>
//           ) : error ? (
//             <div className="text-center py-12 text-red-600">{error}</div>
//           ) : testimonials.length === 0 ? (
//             <div className="text-center py-12 text-gray-600">No testimonials yet.</div>
//           ) : (
//             <div className="relative">
//               <div className="overflow-hidden">
//                 <div
//                   className="flex transition-transform duration-500 ease-in-out"
//                   style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//                 >
//                   {testimonials.map((t) => (
//                     <div key={t.id} className="w-full flex-shrink-0 px-4">
//                       <div className="bg-white p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-100 text-center relative group hover:shadow-red-900/10 transition-shadow">
//                         <Quote className="absolute top-6 left-8 w-16 h-16 text-red-900/20" />

//                         <p className="text-xl md:text-2xl text-gray-800 italic mb-8 leading-relaxed">
//                           "{t.quote}"
//                         </p>

//                         <div className="flex flex-col items-center">
//                           <img
//                             src={t.avatar_url || "https://via.placeholder.com/100?text=Avatar"}
//                             alt={t.author}
//                             className="w-20 h-20 rounded-full object-contain border-4 border-red-900 mb-4 shadow-md group-hover:scale-110 transition-transform"
//                           />
//                           <h4 className="text-xl font-bold text-black">{t.author}</h4>
//                           {t.role && <p className="text-gray-600">{t.role}</p>}
//                         </div>

//                         <div className="flex justify-center mt-4">
//                           {[...Array(5)].map((_, i) => (
//                             <Star
//                               key={i}
//                               size={18}
//                               className={i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
//                             />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Arrows */}
//               <button
//                 onClick={prevSlide}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 p-4 bg-white/80 rounded-full shadow-md hover:bg-white transition disabled:opacity-50"
//                 disabled={currentSlide === 0}
//               >
//                 <ChevronLeft className="text-red-900" size={28} />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 p-4 bg-white/80 rounded-full shadow-md hover:bg-white transition disabled:opacity-50"
//                 disabled={currentSlide === testimonials.length - 1}
//               >
//                 <ChevronRight className="text-red-900" size={28} />
//               </button>

//               {/* Dots for navigation (optional) */}
//               <div className="flex justify-center gap-3 mt-8">
//                 {testimonials.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setCurrentSlide(idx)}
//                     className={`w-3 h-3 rounded-full transition-all ${
//                       currentSlide === idx ? "bg-red-900 w-6" : "bg-gray-300"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//         {/* Meet Our Team - Text Left + Scattered Circular Avatars Right */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
//             {/* Left: Text + CTA */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="space-y-8 text-left"
//             >
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
//                 Meet Our Team
//               </h2>

//               <p className="text-xl md:text-2xl text-gray-700 max-w-xl">
//                 Empowering authors with excellence. At LO Publications, we offer a full suite of publishing services tailored for authors, entrepreneurs, educators, and thought leaders.
//               </p>

//               <p className="text-lg text-gray-600">
//                 Whether you’re publishing your first book or your fifth, our passionate team helps you turn ideas into impact with creativity, professionalism, and care.
//               </p>

//               <div className="mt-10">
//                 <a
//                   href="/team"
//                   className="inline-flex items-center px-10 py-5 bg-red-900 text-white font-semibold text-lg rounded-xl hover:bg-red-800 transition shadow-xl group"
//                 >
//                   View Full Team
//                   <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
//                 </a>
//               </div>
//             </motion.div>

//             {/* Right: Scattered Circular Avatars */}
// <motion.div
//   initial={{ opacity: 0 }}
//   whileInView={{ opacity: 1 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.9, staggerChildren: 0.1 }}
//   className="w-full h-full py-12 md:py-16 lg:py-20 "
// >

//   <div className="
//     grid grid-cols-2 sm:grid-cols-3 
//     md:grid-cols-4 
//     gap-6 sm:gap-8 md:gap-10 lg:gap-12 
//     place-items-center justify-items-center
//     max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
//   ">

//     {/* All 8 members — same size everywhere */}

//     <motion.div
//       variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } }}
//       className="w-full h-full max-w-[140px] aspect-square"
//     >
//       <div className="
//         w-full h-full bg-black rounded-full overflow-hidden 
//         border-4 border-red-900 shadow-lg 
//         hover:scale-105 focus:scale-105 transition-transform duration-300 
//       ">
//         <img
//           src="/Layo-Obidike.png"
//           alt="Layo Obidike"
//           className="w-full h-full object-cover "
//         />
//       </div>
//     </motion.div>

//     <motion.div
//       variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } }}
//       className="w-full max-w-[140px] aspect-square"
//     >
//       <div className="
//         w-full h-full rounded-full overflow-hidden 
//         border-4 border-red-900 shadow-lg 
//         hover:scale-105 focus:scale-105 transition-transform duration-300
//       ">
//         <img src="/john.jpg" alt="John" className="w-full h-full object-contain" />
//       </div>
//     </motion.div>

//     <motion.div
//       variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } }}
//       className="w-full max-w-[140px] aspect-square"
//     >
//       <div className="
//         w-full h-full rounded-full overflow-hidden 
//         border-4 border-red-900 shadow-lg 
//         hover:scale-105 focus:scale-105 transition-transform duration-300
//       ">
//         <img src="/kenny.jpg" alt="Kenny" className="w-full h-full object-contain" />
//       </div>
//     </motion.div>

//     <motion.div
//       variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } }}
//       className="w-full max-w-[140px] aspect-square"
//     >
//       <div className="
//         w-full h-full rounded-full overflow-hidden 
//         border-4 border-red-900 shadow-lg 
//         hover:scale-105 focus:scale-105 transition-transform duration-300
//       ">
//         <img src="/deb.jpg" alt="Deb" className="w-full h-full object-contain" />
//       </div>
//     </motion.div>

//     <motion.div
//       variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } }}
//       className="w-full max-w-[140px] aspect-square"
//     >
//       <div className="
//         w-full h-full rounded-full overflow-hidden 
//         border-4 border-red-900 shadow-lg 
//         hover:scale-105 focus:scale-105 transition-transform duration-300
//       ">
//         <img src="/akeem.png" alt="Akeem" className="w-full h-full object-contain" />
//       </div>
//     </motion.div>

//     <motion.div
//       variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } }}
//       className="w-full max-w-[140px] aspect-square"
//     >
//       <div className="
//         w-full h-full rounded-full overflow-hidden 
//         border-4 border-red-900 shadow-lg 
//         hover:scale-105 focus:scale-105 transition-transform duration-300
//       ">
//         <img src="/oma.jpeg" alt="Oma" className="w-full h-full object-contain" />
//       </div>
//     </motion.div>

//     <motion.div
//       variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } }}
//       className="w-full max-w-[140px] aspect-square"
//     >
//       <div className="
//         w-full h-full rounded-full overflow-hidden 
//         border-4 border-red-900 shadow-lg 
//         hover:scale-105 focus:scale-105 transition-transform duration-300
//       ">
//         <img src="/jul.jpeg" alt="Jul" className="w-full h-full object-contain" />
//       </div>
//     </motion.div>

//     <motion.div
//       variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } }}
//       className="w-full max-w-[140px] aspect-square"
//     >
//       <div className="
//         w-full h-full rounded-full overflow-hidden 
//         border-4 border-red-900 shadow-lg 
//         hover:scale-105 focus:scale-105 transition-transform duration-300
//       ">
//         <img src="/ade.png" alt="Ade" className="w-full h-full object-contain" />
//       </div>
//     </motion.div>

//   </div>

// </motion.div>
//           </div>
//         </div>
//       </section>


//     </main>
//   );
// }


















"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
import { createClient } from "@/lib/supabase/client";

// Types for real data
type Book = {
  id: string;
  title: string;
  author: string;
  cover_url?: string | null;
  published_year?: number | null;
};

type Testimonial = {
  id: string;
  author: string;
  role?: string | null;
  quote: string;
  avatar_url?: string | null;
  rating: number;
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
  { number: "50+", label: "Authors Published", icon: Users },
  { number: "100+", label: "Books Published", icon: BookOpen },
  { number: "98%", label: "Satisfaction Rate", icon: Award },
  { number: "20+", label: "Countries Reached", icon: Globe },
];

export default function Home() {
  const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loadingBooks, setLoadingBooks] = useState(true);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);
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

  // Fetch latest 4 published books
  useEffect(() => {
    async function fetchFeaturedBooks() {
      setLoadingBooks(true);
      const supabase = createClient();

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

  // Fetch all testimonials
  useEffect(() => {
    async function fetchTestimonialsData() {
      setLoadingTestimonials(true);
      const supabase = createClient();

      const { data, error } = await supabase
        .from("testimonials")
        .select("id, author, role, quote, avatar_url, rating")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Testimonials fetch error:", error);
        setError("Failed to load testimonials");
      } else {
        setTestimonials(data || []);
      }
      setLoadingTestimonials(false);
    }

    fetchTestimonialsData();
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

  // Carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Team carousel navigation
  const nextTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 4));
  };

  const prevTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev - 1 + Math.ceil(teamMembers.length / 4)) % Math.ceil(teamMembers.length / 4));
  };

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

                {featuredBooks.slice(0, 4).map((book, index) => {
                  const positions = [-80, -28, 28, 80];
                  const rotations = [-11, -4, 5, 11];

                  return (
                    // eslint-disable-next-line react/jsx-key
                    <motion.div
                      className="group absolute w-[160px] sm:w-[200px]"
                      style={{
                        transform: `translateX(${positions[index]}px) rotate(${rotations[index]}deg)`,
                        zIndex: index + 2,
                      }}
                      whileHover={{ y: -20, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-[3/4] overflow-hidden rounded-xl border border-white/60 bg-[#ddd6ce] shadow-[20px_25px_50px_rgba(0,0,0,.2)] transition-all duration-500">
                        <img
                          src={book.cover_url || "/book.jpg"}
                          alt={book.title}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </motion.div>
                  );
                })} 

                {!featuredBooks.length && [0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="absolute w-[160px] sm:w-[200px]"
                    style={{
                      transform: `translateX(${[-80,-28,28,80][index]}px) rotate(${[-11,-4,5,11][index]}deg)`,
                      zIndex: index + 2,
                    }}
                  >
                    <div className="flex aspect-[3/4] flex-col justify-between rounded-xl border border-white/60 bg-gradient-to-br from-white to-[#d6cec5] p-6 shadow-[20px_25px_50px_rgba(0,0,0,.18)]">
                      <BookOpen className="opacity-25" />
                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-[.2em] opacity-35">LO Publications</p>
                        <p className="mt-3 text-3xl font-black leading-[.8]">YOUR<br />STORY</p>
                      </div>
                    </div>
                  </div>
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

              <h1 className="text-[16vw] text-black font-black leading-[.77] tracking-[-.095em] sm:text-[12vw] lg:text-[8.5vw]">
                YOUR STORY
                <br />
                <span className="text-[#8d171c]">DESERVES</span>
                <br />
                A BOOK.
              </h1>

              <div className="mt-9 max-w-xl">
                <p className="text-xl font-bold leading-tight sm:text-2xl lg:text-[27px]">
                  We turn ideas, manuscripts and voices into books people want to read.
                </p>
                <p className="mt-4 max-w-md text-sm leading-6 text-black/50">
                  From editorial direction and cover design to formatting and publishing, we help authors take their stories from page to reader.
                </p>

                <motion.a
                  href="/submit"
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#8d171c] px-5 py-3 text-[10px] font-bold uppercase tracking-[.18em] text-white transition-transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start your book
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
                    Your manuscript deserves more than a file on your laptop.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex min-h-[210px] flex-col justify-between rounded-[22px] bg-[#ddd2c7] p-7 md:col-span-4">
              <span className="text-[9px] font-bold uppercase tracking-[.25em] text-black/35">
                LO Publications
              </span>
              <p className="text-4xl font-black leading-[.82] tracking-[-.06em]">
                STORIES
                <br />
                THAT
                <br />
                <span className="text-[#8d171c]">STAY.</span>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-3 rounded-full bg-[#8d171c]/10 text-[#8d171c] mb-4">
                    <Icon size={24} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[#8d171c]">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
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
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8d171c]">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-4">Our Craft</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive publishing services designed to bring your vision to life with professionalism and care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: PenTool, title: "Editorial", desc: "We refine your manuscript while preserving the unique voice that makes it yours.", delay: 0 },
              { icon: Layout, title: "Cover Design", desc: "Distinctive visual direction that makes your book stand out before the first page is opened.", delay: 0.1 },
              { icon: BookOpen, title: "Book Design", desc: "Beautiful interiors, typography and layouts for a professional reading experience.", delay: 0.2 },
              { icon: Rocket, title: "Publishing", desc: "From final manuscript to finished publication, we help turn your work into reality.", delay: 0.3 },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-[#8d171c]/40 hover:shadow-2xl transition-all group"
                >
                  <div className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#8d171c]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#8d171c] transition-colors">
                      <Icon className="w-7 h-7 text-[#8d171c] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
                We don't believe great publishing happens by accident. Every decision should serve the story, the author and the reader.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  { title: "Author First", text: "Your story stays at the centre of every decision we make." },
                  { title: "Direction Before Design", text: "We understand the story before we decide how it should look." },
                  { title: "Uncompromising Quality", text: "Every page, cover and detail should reflect the value of the work." },
                  { title: "Purpose Over Noise", text: "We don't publish simply to add another book to the world. We publish with intention." },
                ].map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8d171c] text-white">
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
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#e8e0d8]">
                <img
                  src="/book.jpg"
                  alt="LO Publications"
                  className="h-full w-full object-cover"
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

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#8d171c]/20 -translate-y-1/2" />
            
            <div className="grid md:grid-cols-5 gap-8 relative">
              {[
                { step: "01", title: "Submit", desc: "Share your manuscript or idea with us.", icon: Upload },
                { step: "02", title: "Review", desc: "We evaluate your work and provide feedback.", icon: Edit },
                { step: "03", title: "Design", desc: "Professional cover and interior design.", icon: Image },
                { step: "04", title: "Publish", desc: "Your book goes to print and digital.", icon: Globe },
                { step: "05", title: "Launch", desc: "We help you launch and promote your book.", icon: Rocket },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="relative inline-block">
                      <div className="w-20 h-20 rounded-full bg-[#8d171c] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg relative z-10">
                        {index + 1}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#8d171c]/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-[#8d171c]" />
                    </div>
                    <h3 className="font-semibold text-black">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

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
                // eslint-disable-next-line react/jsx-key
                <motion.div
                  
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
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#8d171c] shadow-lg group-hover:shadow-2xl transition-shadow">
                  <img
                    src={member.image}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.a
              href="/team"
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
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8d171c]">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-4">What Authors Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from authors who've trusted us with their stories — real experiences, real impact.
            </p>
          </motion.div>

          {loadingTestimonials ? (
            <div className="text-center py-12">
              <Loader2 className="animate-spin mx-auto" size={48} />
              <p className="mt-4 text-gray-600">Loading testimonials...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-600">{error}</div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-12 text-gray-600">No testimonials yet.</div>
          ) : (
            <div className="relative">
              <div className="overflow-hidden">
                <motion.div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  initial={false}
                >
                  {testimonials.map((t) => (
                    <div key={t.id} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-100 text-center relative group hover:shadow-[#8d171c]/10 transition-shadow">
                        <Quote className="absolute top-6 left-8 w-16 h-16 text-[#8d171c]/20" />

                        <p className="text-xl md:text-2xl text-gray-800 italic mb-8 leading-relaxed">
                          "{t.quote}"
                        </p>

                        <div className="flex flex-col items-center">
                          <img
                            src={t.avatar_url || "https://via.placeholder.com/100?text=Avatar"}
                            alt={t.author}
                            className="w-20 h-20 rounded-full object-contain border-4 border-[#8d171c] mb-4 shadow-md group-hover:scale-110 transition-transform"
                          />
                          <h4 className="text-xl font-bold text-black">{t.author}</h4>
                          {t.role && <p className="text-gray-600">{t.role}</p>}
                        </div>

                        <div className="flex justify-center mt-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className={i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full shadow-md hover:bg-white transition disabled:opacity-50"
                disabled={currentSlide === 0}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="text-[#8d171c]" size={28} />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full shadow-md hover:bg-white transition disabled:opacity-50"
                disabled={currentSlide === testimonials.length - 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="text-[#8d171c]" size={28} />
              </motion.button>

              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === idx ? "bg-[#8d171c] w-6" : "bg-gray-300"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
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
            {[
              { q: "How long does the publishing process take?", a: "The timeline varies depending on the scope of work, but typically ranges from 3-6 months from manuscript submission to publication." },
              { q: "Do you offer both print and digital publishing?", a: "Yes, we publish both print and digital formats, ensuring your book reaches readers in their preferred format." },
              { q: "Do I retain the rights to my book?", a: "Absolutely. You retain full rights to your work. We publish under a partnership model where you maintain ownership." },
              { q: "What genres do you publish?", a: "We publish across all genres including fiction, non-fiction, memoirs, business books, children's books, and more." },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#8d171c]/30 transition-colors"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-black">{faq.q}</span>
                    <span className="text-[#8d171c] group-open:rotate-45 transition-transform">
                      <Plus size={24} />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.a}
                  </div>
                </details>
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
              Tell us about the book you've been thinking about. We'll help you figure out what comes next.
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

            {/* Contact Info */}
            <div className="mt-16 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-8 text-left">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/60" />
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <p className="text-sm font-medium">info@lopublications.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/60" />
                <div>
                  <p className="text-sm text-white/60">Phone</p>
                  <p className="text-sm font-medium">+1 (415) 504-9548</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white/60" />
                <div>
                  <p className="text-sm text-white/60">Location</p>
                  <p className="text-sm font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
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