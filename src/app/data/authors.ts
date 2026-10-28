// src/app/data/authors.ts
// Featured LO Publications authors and the books we published with them.
import { coverFor, photoFor } from "./images";

export type AuthorBook = {
  title: string;
  slug: string;
  genre: string;
  coverImage: string;
  synopsis: string;
  publishedDate: string;
  formats: string[];
  highlights: string[];
};

export type FeaturedAuthor = {
  slug: string;
  // Old /casestudies/<slug> URL, kept so existing links still resolve
  legacySlug: string;
  name: string;
  photo?: string;
  profession: string;
  bio: string;
  mission: string;
  quote: string;
  featured: boolean;
  books: AuthorBook[];
  journey: {
    challenges: string[];
    support: string[];
  };
};

const authorProfiles: FeaturedAuthor[] = [
  {
    slug: "layo-obidike",
    legacySlug: "rhapsody-of-love-layo-obidike",
    name: "Layo Obidike",
    photo: "/Layo-Obidike.png",
    profession: "Entrepreneur, Business Coach, and Speaker",
    bio: "Layo Obidike is passionate about personal and spiritual growth, emotional healing, and purposeful living. She is an entrepreneur, business coach, speaker, and author dedicated to helping others transform their lives.",
    mission:
      "To publish a book that inspires readers to embrace love, heal from emotional wounds, rediscover their identity, and build meaningful relationships through practical wisdom and biblical principles.",
    quote:
      "Working with the publishing team made my dream of becoming a published author seamless. Their professionalism, guidance, and attention to detail ensured that Rhapsody of Love was published to a high standard while preserving the heart of my message.",
    featured: true,
    books: [
      {
        title: "Rhapsody of Love",
        slug: "rhapsody-of-love",
        genre: "Inspirational / Christian Living",
        coverImage: "/rl.jpg",
        synopsis:
          "A transformational book combining reflections, poetry, guided exercises and scriptural insights to help readers experience healing, self-love, forgiveness, and authentic relationships.",
        publishedDate: "2025-01-15",
        formats: ["Print", "eBook"],
        highlights: [
          "Published in digital and print formats",
          "Opened new speaking and coaching opportunities",
          "Expanded the author's audience reach",
        ],
      },
    ],
    journey: {
      challenges: [
        "Getting a suitable book cover design",
        "Structuring the content effectively",
        "Meeting publishing standards",
        "Preparing print and digital editions",
      ],
      support: [
        "Professional editing and formatting",
        "Custom cover design consultation",
        "ISBN support and digital publishing assistance",
        "Print-ready file preparation",
      ],
    },
  },
  {
    slug: "temitope-soewu",
    legacySlug: "the-crown-and-the-burden-temitope-soewu",
    name: "Temitope Soewu",
    profession: "Lawyer, Writer, and Speaker",
    bio: "Temitope Soewu is a lawyer, writer, and speaker with a growing interest in family systems, identity, womanhood, and personal development.",
    mission:
      "To explore the lasting influence of family structure, birth order, and inherited expectations on identity, relationships, and emotional well-being through honest storytelling.",
    quote:
      "The publishing team helped me transform my deeply personal manuscript into a professionally published memoir. Their expertise and sensitivity made all the difference.",
    featured: true,
    books: [
      {
        title: "The Crown and the Burden",
        slug: "the-crown-and-the-burden",
        genre: "Memoir / Literary Nonfiction",
        coverImage: "/crown.jpg",
        synopsis:
          "A reflective memoir that explores identity, family dynamics, birth order, resilience, forgiveness, and healing through the author's experience as a firstborn daughter in a Nigerian polygamous household.",
        publishedDate: "2025-02-20",
        formats: ["Paperback", "Amazon"],
        highlights: [
          "Global print distribution via Amazon",
          "Five-stage professional editorial development",
          "Released on the author's birthday",
        ],
      },
    ],
    journey: {
      challenges: [
        "Documenting sensitive family experiences",
        "Balancing personal truth with privacy",
        "Structuring a narrative that spans decades",
        "Navigating publishing as a first-time author",
      ],
      support: [
        "Comprehensive five-stage manuscript editing",
        "Custom cover design reflecting the memoir's theme",
        "ISBN and copyright registration",
        "Amazon publication setup",
      ],
    },
  },
  {
    slug: "omolara-adeola",
    legacySlug: "a-visit-to-aunt-ngozi-omolara-adeola",
    name: "Omolara Adeola",
    photo: "/Adeola-1.jpg",
    profession: "Children's Author, Storyteller, and Literacy Advocate",
    bio: "Omolara Adeola believes that some of life's greatest lessons are learned through ordinary moments. She is dedicated to creating stories that capture the warmth of Nigerian family life while helping children develop meaningful values.",
    mission:
      "To create a story that captures the warmth of Nigerian family life while helping children develop values that extend far beyond the final page.",
    quote:
      "I wanted to create a book that reminds children that some of life's greatest lessons are found in the simple moments we share with family.",
    featured: false,
    books: [
      {
        title: "A Visit to Aunt Ngozi",
        slug: "a-visit-to-aunt-ngozi",
        genre: "Children's Fiction / Educational",
        coverImage: "/ngozi.jpg",
        synopsis:
          "A culturally rich children's story that celebrates the beauty of family, community, and everyday learning through a memorable visit to a beloved aunt.",
        publishedDate: "2025-03-10",
        formats: ["Print"],
        highlights: [
          "A valuable resource for parents and teachers",
          "Supports literacy and character development",
          "Celebrates Nigerian traditions and identity",
        ],
      },
    ],
    journey: {
      challenges: [
        "Reflecting Nigerian culture authentically",
        "Teaching values without sounding instructional",
        "Creating a universally relatable story",
        "Encouraging a love for reading",
      ],
      support: [
        "Authentic Nigerian family storytelling",
        "Age-appropriate language and an engaging pace",
        "Subtle integration of values and lessons",
        "Culturally resonant illustrations and themes",
      ],
    },
  },
  {
    slug: "ireti-sholola",
    legacySlug: "kingdom-strategies-pastor-ireti-sholola",
    name: "Pastor Ireti Sholola",
    profession: "Christian Minister and Leadership Mentor",
    bio: "Pastor Ireti Sholola is a Christian minister, leadership mentor, and Kingdom-minded entrepreneur dedicated to equipping business leaders with biblical principles.",
    mission:
      "To equip entrepreneurs with biblical principles for building purpose-driven businesses that glorify God while creating lasting impact.",
    quote:
      "The publishing process was seamless. They helped me present my message professionally while keeping the heart of my ministry intact.",
    featured: false,
    books: [
      {
        title: "Kingdom Strategies for Purpose-Driven Entrepreneurs",
        slug: "kingdom-strategies-for-purpose-driven-entrepreneurs",
        genre: "Christian Entrepreneurship",
        coverImage: "/kingdom.jpg",
        synopsis:
          "A transformative book bridging faith and entrepreneurship with practical, Scripture-based strategies for leadership, stewardship, integrity, and sustainable business growth.",
        publishedDate: "2025-04-05",
        formats: ["Print", "eBook"],
        highlights: [
          "A practical resource for Christian entrepreneurs",
          "Encouraging business leaders around the world",
          "Building lasting impact for Kingdom businesses",
        ],
      },
    ],
    journey: {
      challenges: [
        "Turning years of ministry experience into a book",
        "Maintaining biblical accuracy and readability",
        "Meeting high publishing standards",
      ],
      support: [
        "Manuscript editing and proofreading",
        "Professional typesetting and cover design",
        "Quality assurance and publication support",
      ],
    },
  },
  {
    slug: "oluwaseun-deborah-adebayo",
    legacySlug: "names-ive-worn-oluwaseun-deborah-adebayo",
    name: "Oluwaseun Deborah Adebayo",
    profession: "Storyteller, Memoir Writer, and Creative Artist",
    bio: "Oluwaseun Deborah Adebayo is a storyteller, memoir writer, creative artist, and founder of the Crafts and Impressions platform, dedicated to amplifying overlooked voices through storytelling.",
    mission:
      "To amplify the voices of women whose stories have been overlooked, inspire healing through storytelling, and encourage women to reclaim their identity beyond labels, pain, and societal expectations.",
    quote:
      "The team helped me transform my manuscript into a professionally published work while preserving my authentic voice and the emotional depth of my story.",
    featured: true,
    books: [
      {
        title: "Names I've Worn",
        slug: "names-ive-worn",
        genre: "Inspirational Memoir / Women's Literature",
        coverImage: "/niw.jpg",
        synopsis:
          "An inspirational memoir exploring identity, grief, healing, resilience, and faith through the experiences of Deborah Adebayo and the women whose lives shaped her.",
        publishedDate: "2025-05-12",
        formats: ["Print", "eBook"],
        highlights: [
          "A 141-page memoir, professionally edited and designed",
          "Published under the LO Publications imprint",
          "Supported by our full editorial and design team",
        ],
      },
    ],
    journey: {
      challenges: [
        "Shaping personal experiences into a broader memoir",
        "Organising a complex narrative across generations",
        "Balancing memoir, history, and faith-based reflection",
        "Maintaining emotional consistency",
      ],
      support: [
        "Comprehensive developmental editing",
        "Structural refinement and chapter sequencing",
        "Line editing and copyediting",
        "Professional cover and interior design",
      ],
    },
  },
];

// Swap in any photos/covers dropped into public/authors and public/covers
export const featuredAuthors: FeaturedAuthor[] = authorProfiles.map((author) => ({
  ...author,
  photo: photoFor(author.slug, author.photo),
  books: author.books.map((book) => ({ ...book, coverImage: coverFor(book.slug, book.coverImage) })),
}));

export function findAuthor(slug: string) {
  return featuredAuthors.find(
    (author) => author.slug === slug || author.legacySlug === slug
  );
}

export function authorInitials(name: string) {
  return name
    .replace(/\(.*?\)/g, "")
    .replace(/^(Pastor|Bishop|Mrs|Mr|Dr)\.?\s+/i, "")
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
