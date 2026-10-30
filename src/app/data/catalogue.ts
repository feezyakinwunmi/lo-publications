// Full LO Publications catalogue: every published title, its author and shelf.
import { featuredAuthors, type FeaturedAuthor } from "./authors";
import { coverFor, photoFor } from "./images";

// To add a "Read" destination for a book, set `readUrl` in its entry below
// (e.g. an Amazon, Selar or Google Drive link). Books without one fall back to
// a request-a-copy email.
//
// Images: drop files into public/covers/<book-slug>.jpg and
// public/authors/<author-slug>.jpg (see data/images.ts). The coverImage/photo
// paths below are only fallbacks for when no such file exists.

export const CATEGORIES = [
  { key: "memoir", name: "Biography, Memoir and Autobiography", tone: "#5b2a1f" },
  { key: "christian", name: "Christian Living and Spiritual Growth", tone: "#8d171c" },
  { key: "bible", name: "Bible Study and Church Resources", tone: "#3f2a56" },
  { key: "revival", name: "Revival and Ministry", tone: "#a3341b" },
  { key: "leadership", name: "Leadership and Personal Development", tone: "#1f3b4d" },
  { key: "business", name: "Business and Entrepreneurship", tone: "#18332b" },
  { key: "finance", name: "Finance, Investment and Cooperative Development", tone: "#7a5a12" },
  { key: "health", name: "Health and Wellness", tone: "#2f6b4f" },
  { key: "tech", name: "Technology and Artificial Intelligence", tone: "#1d2b5c" },
  { key: "writing", name: "Publishing, Writing and Editing", tone: "#3a3a3a" },
  { key: "picture", name: "Children's Picture Books", tone: "#d0662b" },
  { key: "childfic", name: "Children's Fiction and Storybooks", tone: "#2a7b8f" },
  { key: "education", name: "Education and Learning Resources", tone: "#4a6a1f" },
  { key: "fiction", name: "Fiction and Literary Works", tone: "#6b1e45" },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]["key"];

export type CatalogueBook = {
  slug: string;
  title: string;
  author: string;
  authorSlug: string;
  category: CategoryKey;
  coverImage?: string;
  readUrl?: string;
};

type Entry = [title: string, category: CategoryKey, extra?: { coverImage?: string; readUrl?: string }];

const AUTHORS: { name: string; slug?: string; photo?: string; books: Entry[] }[] = [
  // ──────────────────────── Featured / written-up authors ────────────────────────
  {
    name: "Oluwaseun Deborah Adebayo",
    slug: "oluwaseun-deborah-adebayo",
    books: [["Names I’ve Worn", "memoir", { coverImage: "/niw.jpg" }]],
  },
  {
    name: "Pastor Ireti Sholola",
    slug: "ireti-sholola",
    books: [["Kingdom Strategies for Purpose Driven Entrepreneurs", "leadership", { coverImage: "/kingdom.jpg" }]],
  },
  {
    name: "Omolara Adeola",
    slug: "omolara-adeola",
    books: [
      ["Light at the End of the Tunnel", "fiction"],
      ["A Visit to Aunt Ngozi", "fiction", { coverImage: "/ngozi.jpg" }],
    ],
  },
  {
    name: "Temitope Soewu",
    slug: "temitope-soewu",
    books: [["The Crown and The Burden", "memoir", { coverImage: "/crown.jpg" }]],
  },
  {
    name: "Layo Obidike",
    slug: "layo-obidike",
    books: [
      ["Rhapsody of Love", "christian", { coverImage: "/rl.jpg" }],
      ["See The Bee", "picture"],
      ["The Ant and the Termite", "picture"],
      ["The Empowered Teens Daily Affirmations", "leadership"],
      ["You Are Awesome, You Are Like God: Bible Stories Retold for Kids", "picture"],
      ["The Big Feelings Day", "picture"],
      ["Sunny’s Clean Splash", "picture"],
      ["Nick and the Invisible Invaders", "picture"],
      ["Duke Shares Her Den", "picture"],
      ["Cleo Finds Her Calm", "picture"],
      ["Benny Waits His Turn", "picture"],
      ["Splish, Splash, Wow! Water Wonders", "picture"],
      ["Picture Book for Early Readers", "picture"],
      ["My First Alphabet Dictionary", "picture"],
      ["Love Is for Everyone", "picture"],
      ["God Made Everyone Special", "picture"],
      ["Car Watchers: Vroom, Zoom, Beep", "picture"],
      ["An Adventure to a Gallery", "picture"],
      ["A Weekend in Bristol", "picture"],
      ["A Christmas to Remember", "picture"],
      ["Ben and His Pet", "picture"],
      ["Tom and the Dog", "picture"],
      ["Tim the Kid", "picture"],
      ["Sam and the Cat", "picture"],
      ["Ned and the Big Fin", "picture"],
      ["Plant Power", "picture"],
      ["The Inventor’s Club", "picture"],
      ["Wired for Wonder", "tech"],
      ["The Squad", "childfic"],
      ["Saving the Festival", "picture"],
      ["Sand of Time", "fiction"],
      ["Leo’s Home", "picture"],
      ["Amara Blasts Off to Space", "picture"],
      ["The Empowered Woman", "memoir"],
      ["Understanding Professional Communication", "business"],
      ["Strive Masiyiwa’s Playbook for Entrepreneurial Success: Lessons in Business Mastery", "business"],
      ["Prayers in the Bible", "christian"],
      ["Dead to Sin, Alive in Christ: Dying to Self Daily: The Call and Cost of a Living Sacrifice", "christian"],
      ["Fasting", "christian"],
      ["Workplace Culture for Teams and CEOs", "business"],
      ["The Kingdom of Priests", "christian"],
      ["The End of Shadows: From Adam to Christ: Promise, Law, Kingship, and Their Fulfilment in Christ", "bible"],
      ["Formed for God: The Practice of Priesthood in Everyday Christian Life", "christian"],
      ["The Measure of Honour: Value, Role, and Responsibility", "leadership"],
      ["Principles of Honour", "christian"],
      ["The Creative Power of God’s Word", "bible"],
      ["A Doctrinal Study of Psalm 1 and the Discipline of the Believer", "christian"],
      ["The Lifestyle of Prayer: A Comprehensive Study of Prayer, Prayers and Answers Throughout the Bible", "christian"],
      ["The Protocol of Fasting: Biblical Patterns, Principles and Practices for Fasting", "christian"],
      ["The Harvest", "bible"],
      ["Spiritual Encounters: Knowing God by Koinonia", "christian"],
      ["The Path, the Nature, and the Word: A Doctrinal Study of Psalm 1 and the Discipline of the Believer", "christian"],
      ["Understanding and Governing the Gates of Life: A Scriptural Guide to Spiritual Discipline and Authority", "bible"],
      ["Divine Protocol for a Virtuous Woman", "leadership"],
      ["The Fruitful Life: God’s Blueprint for Productivity, Purpose, Growth, Prosperity, and Lasting Impact", "christian"],
      ["Write Your Way Through It", "leadership"],
      ["Faith, Finance & Fulfillment: A Complete Biblical Guide to Building Wealth Without Losing Your Soul", "finance"],
      ["Praying God’s Word Over Your Finances: 53 Powerful Affirmations to Attract Wealth: Manifest Abundance & Financial Success All Year", "finance"],
      ["Money, Mind & Mastery: Financial Wisdom, Investing Principles, Entrepreneurship & Personal Development", "finance"],
      ["Working with God: A Comprehensive Biblical Study of Work, Profession, Calling, Skill, Enterprise and Divine Assessment", "business"],
      ["Strive Masiyiwa’s Playbook for Entrepreneurial Success: Lessons in Business Mastery, Making History and Building Legacy", "business"],
      ["What Every Human Should Know About AI: A Beginner’s Guide for a Changing World", "tech"],
      ["Understanding Cooperative Bookkeeping and Financial Statements", "finance"],
      ["The Cooperative Enterprise Model in Africa: History, Practice and Future Opportunities", "finance"],
      ["Reimagining Finance and Development through Cooperative Systems in Nigeria", "finance"],
      ["Together We Thrive: A Plain-Language Guide to the Cooperative Business Model", "finance"],
      ["Becoming Wise: Biblical Mental Models for Life, Leadership, and Grit", "leadership"],
      ["The Harvest Night", "bible"],
      ["The Morning Watch", "christian"],
      ["The Heritage Council", "fiction"],
      ["Every Prize I Never Won", "memoir"],
      ["A Better Country", "fiction"],
      ["A Letter to My Daughter", "memoir"],
      ["The Nation’s Book", "fiction"],
      ["Made New in Christ", "christian"],
      ["Growing in Grace", "christian"],
      ["Kingdom Leadership Journal: A 90-Day Daily Checklist & Reflection for Christian Managers and Business Owners", "leadership"],
      ["Then, Now and Forever", "christian"],
      ["Kori", "childfic"],
      ["Harmony Court", "childfic"],
      ["Chigozie and Uzi", "childfic"],
      ["Chidumebi and Ella: Book 4", "childfic"],
      ["Chidumebi and Ella: Book 7 — Turn and Trust", "childfic"],
      ["Eli and Bea", "childfic"],
      ["Eli and Bea: Book 6 — Six Words", "childfic"],
      ["The Gift I Did Not Buy", "childfic"],
      ["Then, Now and Always", "childfic"],
      ["The Explorers", "childfic"],
      ["The Superstars", "childfic"],
      ["The Bug Crew", "childfic"],
      ["A Complete Guide to Publishing", "writing"],
      ["English Grammar and Usage for Editors", "writing"],
      ["My Spelling Adventure Book 1", "education"],
      ["My Spelling Adventure Book 2", "education"],
      ["My Spelling Adventure Book 3", "education"],
      ["My Spelling Adventure Book 4", "education"],
      ["My Spelling Adventure Book 5", "education"],
      ["My Spelling Adventure Book 6", "education"],
      ["The Professional Editors Handbook", "writing"],
      ["Mathematics Coursebook: Pre-K", "education"],
      ["Mathematics Coursebook: Grade 1", "education"],
      ["Mathematics Coursebook: Grade 2", "education"],
      ["Mathematics Coursebook: Grade 3", "education"],
      ["Mathematics Coursebook: Grade 4", "education"],
      ["Mathematics Coursebook: Grade 5", "education"],
      ["Mathematics Coursebook: Grade 6", "education"],
      ["My Letter-Writing Adventure", "writing"],
      ["What to Do When You Plan to Write a Book: A Simple Guide and Checklist for First-Time Authors", "writing"],
      ["50 Questions to Answer Before Writing a Book: A Practical Guide to Help First-Time Authors Clarify Their Idea, Message, Audience, Purpose, and Direction Before They Begin Writing", "writing"],
    ],
  },

  // ──────────────────────── Authors with bios in the document ────────────────────────
  {
    name: "Bishop Jesse Dibal",
    slug: "jesse-dibal",
    books: [
      ["Winning in the Marketplace", "leadership"],
      ["Protocol for Progress", "leadership"],
      ["Anointing on a Magnifying Glass", "revival"],
      ["The 5-Star Woman", "leadership"],
    ],
  },
  {
    name: "Mrs Toyosi Oluwole",
    slug: "olutoyosi-oluwole",
    books: [["A Mother’s Memoir: A Mother’s Journey from the Beginning", "memoir"]],
  },
  {
    name: "Pastor Kayode Samuel Adekoya",
    slug: "kayode-samuel-adekoya",
    books: [["Building from the Ground Up", "business"]],
  },
  {
    name: "Pastor Adeola Adekoya",
    slug: "adeola-adekoya",
    books: [["God Designed It", "christian"]],
  },
  {
    name: "Pastor Patrick Babalola",
    slug: "patrick-babalola",
    books: [
      ["The Great Awakening: The Pattern, History, and Power of Revival", "revival"],
      ["The Outpouring: How Revival Begins, Spreads, and Transforms Nations", "revival"],
      ["The Manifestation of the Sons of God: Evidence of the Outpouring of the Spirit", "revival"],
      ["Life in God’s Order", "revival"],
    ],
  },
  {
    name: "Dr Olakunle Jaiyesimi",
    slug: "olakunle-jaiyesimi",
    books: [
      ["The Boy Who Ran Seven Miles", "education"],
      ["See The Bee", "picture"],
      ["The Ant and the Termite", "picture"],
    ],
  },
  {
    name: "David Cross",
    slug: "david-cross",
    books: [["Novi Sad Protocol", "fiction"]],
  },

  // ──────────────────────── Institutional / church ────────────────────────
  {
    name: "Spring of Divine Grace Church (SODGEM)",
    slug: "spring-of-divine-grace",
    books: [
      ["Adult Sunday Bible Study Manual: Fruitful in Every Good Work (2026)", "bible"],
      ["Children’s Sunday Bible Study Manual: Fruitful in Every Good Work (2026)", "bible"],
      ["SODGEM Midweek Bible Study Manual: The Power of the Word (2026)", "bible"],
      ["Collection of Hymns", "bible"],
      ["Adult Sunday Bible Study Manual: Fruitful in Every Good Work (2027)", "bible"],
      ["Children’s Sunday Bible Study Manual: Fruitful in Every Good Work (2027)", "bible"],
      ["SODGEM Midweek Bible Study Manual (2027)", "bible"],
      ["Marriage Manual", "bible"],
      ["Prospectus", "bible"],
      ["Constitution and Bye-Laws", "bible"],
      ["Ministers and Workers Code of Conduct", "bible"],
      ["Prayer Journal (2026)", "bible"],
      ["Prayer Journal (2027)", "bible"],
    ],
  },

  // ──────────────────────── Minimal-profile authors (no bio in doc) ────────────────────────
  {
    name: "Mrs Adaeze Oba",
    slug: "adaeze-oba",
    books: [["ABC of Wellness", "health"]],
  },
  {
    name: "Priscilla Olukoya",
    slug: "priscilla-olukoya",
    books: [["Who Is the Boss? A Humankind Blind Spot Investigation on Device Use", "tech"]],
  },
  {
    name: "Mrs Chinwedu Madu",
    slug: "chinwedu-madu",
    books: [
      ["BALD", "fiction"],
      ["My Winterized Home", "fiction"],
      ["The Long Trek", "fiction"],
    ],
  },
];

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[’'&]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const CATALOGUE: CatalogueBook[] = AUTHORS.flatMap((author) =>
  author.books.map(([title, category, extra]) => {
    const slug = slugify(title);
    return {
      slug,
      title,
      author: author.name,
      authorSlug: author.slug ?? slugify(author.name),
      category,
      ...extra,
      coverImage: coverFor(slug, extra?.coverImage),
    };
  })
);

export const CATALOGUE_AUTHORS = AUTHORS.map((a) => a.name);

export type DirectoryAuthor = {
  slug: string;
  name: string;
  photo?: string;
  books: CatalogueBook[];
  // Bio, photo and testimonial for authors we have written up in data/authors
  profile?: FeaturedAuthor;
};

export const AUTHOR_DIRECTORY: DirectoryAuthor[] = AUTHORS.map((a) => {
  const slug = a.slug ?? slugify(a.name);
  return {
    slug,
    name: a.name,
    photo: photoFor(slug, a.photo ?? featuredAuthors.find((f) => f.slug === slug)?.photo),
    books: CATALOGUE.filter((b) => b.authorSlug === slug),
    profile: featuredAuthors.find((f) => f.slug === slug),
  };
});

// Author testimonials shown on the home and authors pages: every author with a
// quote, credited with their first catalogue title
export const AUTHOR_REVIEWS = featuredAuthors
  .filter((a) => a.quote)
  .map((a) => ({ ...a, firstTitle: a.books[0]?.title ?? CATALOGUE.find((b) => b.authorSlug === a.slug)?.title }))
  .filter((a) => a.firstTitle);

// Matches current slugs and the old /casestudies slugs
export function findDirectoryAuthor(slug: string) {
  return AUTHOR_DIRECTORY.find((a) => a.slug === slug || a.profile?.legacySlug === slug);
}

// Every author link points at the directory, which opens that author's pop-up
export function authorHref(slug: string) {
  return `/authors/all?author=${slug}`;
}

export function categoryOf(key: CategoryKey) {
  return CATEGORIES.find((c) => c.key === key)!;
}

// Where the "Read" button goes for a book that has no readUrl yet
export function readLinkFor(book: CatalogueBook) {
  if (book.readUrl) return book.readUrl;
  const subject = encodeURIComponent(`Request to read: ${book.title}`);
  return `mailto:layo@lopublications.com?subject=${subject}`;
}

// Main title before any subtitle, used on generated covers
export function shortTitle(title: string) {
  return title.split(":")[0].trim();
}