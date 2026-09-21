// src/app/books/data.ts
export type Book = {
  id: string;
  title: string;
  author: string;
  cover_url?: string | null;
  description?: string | null;
  published_year?: number | null;
  genre?: string | null;
  downloads?: { label: string; url: string }[] | null;
  status: "draft" | "published";
};

export const DEMO_BOOKS: Book[] = [
  {
    id: "1",
    title: "The Empowered Teens' Daily Affirmations",
    author: "Nike Okeke & Layo Obidike",
    cover_url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=1000&fit=crop",
    description:
      "A daily guide for teens to build confidence, self-acceptance, and emotional resilience through faith-based affirmations paired with actionable steps.",
    published_year: 2025,
    genre: "Faith & Teens",
    downloads: [
      { label: "Download PDF", url: "#" },
      { label: "Kindle Edition", url: "#" },
    ],
    status: "published",
  },
  {
    id: "2",
    title: "Walking in Purpose: A Faith-Fueled Journey",
    author: "Grace Adeyemi",
    cover_url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=1000&fit=crop",
    description:
      "A 30-day devotional inviting readers to discover their God-given purpose. Each entry includes scripture, reflection, and a practical step forward.",
    published_year: 2024,
    genre: "Devotional",
    downloads: [
      { label: "Download PDF", url: "#" },
      { label: "Paperback", url: "#" },
      { label: "Audiobook", url: "#" },
    ],
    status: "published",
  },
  {
    id: "3",
    title: "The Quiet Harvest",
    author: "Emmanuel Okafor",
    cover_url: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&h=1000&fit=crop",
    description:
      "A literary novel about a Nigerian family navigating loss, faith, and reconciliation across three generations.",
    published_year: 2025,
    genre: "Fiction",
    downloads: [
      { label: "Kindle Edition", url: "#" },
      { label: "Paperback", url: "#" },
    ],
    status: "published",
  },
  {
    id: "4",
    title: "Letters to My Younger Self",
    author: "Tolu Bankole",
    cover_url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=1000&fit=crop",
    description:
      "Twenty contributors write honest letters to their younger selves — stories of faith, failure, forgiveness, and growing up.",
    published_year: 2024,
    genre: "Memoir",
    downloads: [{ label: "Download PDF", url: "#" }],
    status: "published",
  },
  {
    id: "5",
    title: "Building a Reading Culture at Home",
    author: "Dr. Amara Nwosu",
    cover_url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=1000&fit=crop",
    description:
      "A practical guide for parents and educators who want to raise lifelong readers — from creating reading corners to picking age-appropriate books.",
    published_year: 2025,
    genre: "Parenting",
    downloads: [
      { label: "Download PDF", url: "#" },
      { label: "Paperback", url: "#" },
    ],
    status: "published",
  },
  {
    id: "6",
    title: "The Writer's Compass",
    author: "Chinelo Eze",
    cover_url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=1000&fit=crop",
    description:
      "For emerging authors: how to write, edit, publish, and build a career as a faith-driven writer in the digital age.",
    published_year: 2026,
    genre: "Writing Craft",
    downloads: [
      { label: "Download PDF", url: "#" },
      { label: "Kindle Edition", url: "#" },
    ],
    status: "published",
  },
  {
    id: "7",
    title: "Still Waters",
    author: "Ruth Adeleke",
    cover_url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=1000&fit=crop",
    description:
      "A collection of poetry and short reflections on rest, trust, and finding God in the quiet moments.",
    published_year: 2024,
    genre: "Poetry",
    downloads: [{ label: "Download PDF", url: "#" }],
    status: "published",
  },
  {
    id: "8",
    title: "The Marketplace Ministry",
    author: "Pastor David Balogun",
    cover_url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=1000&fit=crop",
    description:
      "How Christian professionals can bring faith into their careers — a practical theology of work, calling, and influence.",
    published_year: 2025,
    genre: "Faith & Work",
    downloads: [
      { label: "Download PDF", url: "#" },
      { label: "Paperback", url: "#" },
      { label: "Audiobook", url: "#" },
    ],
    status: "published",
  },
  {
    id: "9",
    title: "Parenting with Grace",
    author: "Funmi Adebayo",
    cover_url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=1000&fit=crop",
    description:
      "A warm, practical guide for parents raising children with faith, patience, and intentionality.",
    published_year: 2026,
    genre: "Parenting",
    downloads: [
      { label: "Kindle Edition", url: "#" },
      { label: "Paperback", url: "#" },
    ],
    status: "published",
  },
  {
    id: "10",
    title: "Fire on the Mountain",
    author: "Samuel Oyelaran",
    cover_url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=1000&fit=crop",
    description:
      "A historical novel set in pre-colonial Nigeria — exploring faith, tradition, and the cost of conviction.",
    published_year: 2024,
    genre: "Fiction",
    downloads: [{ label: "Paperback", url: "#" }],
    status: "published",
  },
  {
    id: "11",
    title: "The Prayer Life",
    author: "Reverend Moses Adekunle",
    cover_url: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800&h=1000&fit=crop",
    description:
      "A practical theology of prayer — how to build a consistent, meaningful prayer life in a distracted world.",
    published_year: 2025,
    genre: "Devotional",
    downloads: [
      { label: "Download PDF", url: "#" },
      { label: "Kindle Edition", url: "#" },
    ],
    status: "published",
  },
  {
    id: "12",
    title: "Raising Readers, Raising Leaders",
    author: "Dr. Amara Nwosu",
    cover_url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=1000&fit=crop",
    description:
      "Why reading habits shape leadership — a case for cultivating a lifelong love of books in the next generation.",
    published_year: 2025,
    genre: "Parenting",
    downloads: [{ label: "Download PDF", url: "#" }],
    status: "published",
  },
];
