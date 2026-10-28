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
  // ───────────────────────── EXISTING (bio refreshed) ─────────────────────────


  {
    slug: "layo-obidike",
    legacySlug: "rhapsody-of-love-layo-obidike",
    name: "Layo Obidike",
    photo: "/Layo-Obidike.png",
    profession: "Poet, Writer, Entrepreneur, and Educator",
    bio: "Oluwabunmilayo Obidike — affectionately called Layo — is a passionate poet, writer, and visionary entrepreneur. She discovered her love for poetry at a tender age, using it as a therapeutic outlet to navigate her childhood trauma. Beyond her poetic expressions, Layo is a devoted wife and mother, currently living joyfully with her family in Canada. Her daily life beautifully blends being a wife, mother, and sister. She is also a writer, volunteer, and entrepreneur. In addition to her writing pursuits, Layo is a visionary entrepreneur, consistently crafting innovative solutions and contributing to creative endeavors. Her greatest values are love and cooperation, which drive her advocacy for the cooperative business model. She is the Director General for the Thriveon Entrepreneur Nonprofit model that aims to empower entrepreneurs for a thriving future.",
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
    profession: "Educator, Author, and Motivational Speaker",
    bio: "Omolara Adeola is a seasoned educator, leader, and motivational speaker — a force to be reckoned with in the education sector. With over thirteen years of experience across primary and secondary education, she has established herself as a teacher of teachers, inspiring generations of students and educators alike. She holds a Master's degree in International Business Management from Sheffield Hallam University, UK, and a Certificate of Participation in Management from IESEG School of Management, France, bringing a unique global perspective to her work. She also holds a Bachelor of Education in English Language & Literature from Tai Solarin University of Education, Nigeria, and is a registered and chartered teacher with the Teachers Registration Council of Nigeria (TRCN). Known among her peers as a teacher of teachers, Omolara has trained, mentored, and inspired many to rediscover the joy and dignity of the teaching profession. Beyond her professional achievements, she is a devoted wife and mother — she often describes her family as her greatest ministry and the foundation that grounds her calling to educate, empower, and lead with integrity.",
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
    photo: "/ireti-sholola.png",
    profession: "Entrepreneur, Leadership Mentor, and Christian Minister",
    bio: "Pastor Ireti Sholola is a visionary leader, spiritual mentor, and seasoned entrepreneur who believes that business is a divine calling. With decades of experience spanning leadership, human resources, and travel consultancy, she has dedicated her life to helping individuals turn God-given visions into viable, sustainable ventures. A passionate teacher of Kingdom entrepreneurship, Pastor Ireti blends divine wisdom with practical strategies, empowering everyday people to build extraordinary businesses without compromising their faith or integrity. Her approach is rooted in the belief that true success is measured by purpose and impact as much as profit. She is the founder and lead consultant at Living Hope Travels, a thriving travel and tourism business recognised for its customer care, operational excellence, and commitment to service. She also serves in ministry, where her firm yet graceful voice, faith-centred guidance, and practical counsel have inspired many to pursue their God-given assignments with courage and discipline. Pastor Ireti is deeply committed to mentoring the next generation of leaders, with a focus on instilling the principles of starting small, building strong, and scaling wisely. She lives in Lagos, Nigeria, where she balances ministry and business while cherishing time with her family, especially her beloved sons.",
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
    bio: "Oluwaseun Deborah Adebayo is a woman of words and wonder — a storyteller whose voice carries both grace and grit. She writes from the deep thoughts, from the ache and the beauty, from the lessons that come slowly but stay long. Her writing is not just craft; it is calling, and her stories are offerings. Through her platform, Crafts and Impressions, Deborah shares more than art; she shares presence. Her hands create what her heart prays, and every piece is shaped with intention. She is a daughter of heritage and healing, shaped by her Nigerian roots and her Canadian soil. Her stories remember, they rebuild, and they remind us that we are never too broken for beauty. In her debut collection, Names I've Worn, she traces the journey of becoming — through loss and laughter, through silence and scripture, through the seasons only God can measure. Deborah believes that healing is holy, that stories are sacred, and that even when life feels uncertain, God still writes in complete sentences. She writes for the woman who feels behind, for the one who stayed too long or left too soon, for the one who is learning to rise again — softly, slowly, and surely. She lives in Ottawa with her husband and lovely family, where faith fills her home.",
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

  // ───────────────────────── NEW (from biographies doc) ─────────────────────────
  {
    slug: "jesse-dibal",
    legacySlug: "the-5-star-woman-bishop-jesse-dibal",
    name: "Bishop Jesse Dibal",
    photo: "/bishop-jesse-dibal.jpeg",

    profession: "Visionary Leader, Author, and Teacher",
    bio: "Bishop Jesse Dibal is a seasoned visionary leader, author, and teacher with a deep commitment to spiritual growth, kingdom impact, and practical discipleship. With years of ministry experience, he has served churches, led conferences, and equipped believers across cultures to walk confidently in their God-given purpose. His teachings flow from a firm foundation in Scripture and a passion for raising up mature, capable, and faithful followers of Jesus. Jesse's work extends beyond the local church into entrepreneurial, mentoring, and thought-leadership spaces where he inspires others to pursue excellence in character, calling, and influence. He is known for his directness and commitment to truth lived out in everyday life. He shares his life and ministry more widely through social media and digital platforms where he connects with a global audience.",
    mission:
      "To equip believers to walk confidently in their God-given purpose, pursue excellence in character and calling, and live out the truth of Scripture in everyday life.",
    quote:
      "Ministry is not just about the pulpit — it is about raising up mature, capable, and faithful followers of Jesus who carry their calling into every sphere of life.",
    featured: false,
    books: [],
    journey: { challenges: [], support: [] },
  },
  {
    slug: "olutoyosi-oluwole",
    legacySlug: "a-mothers-memoir-olutoyosi-oluwole",
    name: "Mrs Toyosi Oluwole",
    profession: "Author, Children's Ministry Leader, and Entrepreneur",
    bio: "Olutoyosi Atinuke Oluwole is a graduate of History Education from Lagos State University and a passionate advocate for preserving family stories, values, and legacy through writing. With over twenty years of experience serving in children's ministry, she has dedicated her life to nurturing, guiding, and encouraging families through faith, wisdom, and practical counsel. Beyond ministry, she is an entrepreneur and a thoughtful writer whose work is deeply rooted in her love for motherhood, family, and purposeful living. Through A Mother's Memoir, Toyosi shares personal reflections, heartfelt insights, and timeless lessons designed to inspire mothers to embrace their journey with grace, strength, and joy.",
    mission:
      "To preserve family stories, values, and legacy through writing, and to inspire mothers to embrace their journey with grace, strength, and joy.",
    quote:
      "A mother's story is never just her own — it is a legacy handed down to the generations that follow.",
    featured: false,
    books: [],
    journey: { challenges: [], support: [] },
  },
  {
    slug: "kayode-samuel-adekoya",
    legacySlug: "building-from-the-ground-up-kayode-adekoya",
    name: "Pastor Kayode Samuel Adekoya",
    profession: "Pastor, Land Surveyor, Educator, and Community Leader",
    bio: "Pastor Dr. Kayode Samuel Adekoya, FNIS, is a visionary leader, accomplished land surveyor, educator, and pastor with a lifelong commitment to faith, service, and community development. He currently serves as the Chairman of the Association of Private Practising Surveyors of Nigeria (APPSN), Ogun State Chapter. Rising from humble beginnings, Dr. Adekoya has built his life and leadership on the pillars of diligence, resilience, and divine purpose. As the founder and lead pastor of Spring of Divine Grace Evangelical Mission, he mentors leaders and equips believers to grow in spiritual maturity and make a practical impact. He believes deeply that people are divine resources and that lasting success is forged through meaningful relationships and responsibility. As a Registered Surveyor, Dr. Adekoya has made significant contributions to infrastructure development and technological innovation in his profession. His leadership reflects a passion for excellence, a commitment to the next generation, and a belief that legacy is something we build, not just inherit. He is happily married to Pastor Adeola Ibidapo Adekoya, and together they are blessed with children — both biological and spiritual — who continue to reflect their values and vision.",
    mission:
      "To guide readers in building ministries, businesses, and lives that endure — through principles from Scripture and lived experience.",
    quote:
      "Legacy is something we build, not just inherit — and it is forged through diligence, resilience, and divine purpose.",
    featured: false,
    books: [],
    journey: { challenges: [], support: [] },
  },
  {
    slug: "adeola-adekoya",
    legacySlug: "god-designed-it-adeola-adekoya",
    name: "Pastor Adeola Adekoya",
    profession: "Educator, School Principal, and Christian Minister",
    bio: "Pastor Adeola Adekoya is the wife of Pastor Kayode Adekoya, the General Overseer of Spring of Divine Grace Evangelical Mission (SODGEM), Sagamu, and its worldwide branches. She serves as the Mother in Israel of the ministry and is passionate about teaching and discipling believers through the Word of God. An educator and school principal, Pastor Adeola has devoted her life to nurturing both young minds and Christian families. She is blessed with four biological children and many spiritual sons and daughters whose lives have been shaped through her ministry, counsel, and leadership. Through her teaching and writing, she seeks to help people build their lives, homes, and relationships on the timeless truth of God's Word.",
    mission:
      "To help people build their lives, homes, and relationships on the timeless truth of God's Word.",
    quote:
      "When we build on the Word of God, we build something that lasts beyond us.",
    featured: false,
    books: [],
    journey: { challenges: [], support: [] },
  },
  {
    slug: "patrick-babalola",
    legacySlug: "the-great-awakening-patrick-babalola",
    name: "Pastor Patrick Babalola",
    profession: "Christian Minister and Revival Teacher",
    bio: "Pastor Patrick Babalola is a Christian minister and teacher with a passion for revival — its pattern, history, and power. His writings explore how revival begins, how it spreads, and how it transforms individuals, churches, and nations, calling believers to live in God's order and to walk in the manifestation of the sons of God.",
    mission:
      "To help believers understand and pursue true revival — the pattern, history, and power of God's outpouring.",
    quote:
      "Revival is not a moment; it is a move — and it begins when God's people return to His order.",
    featured: false,
    books: [],
    journey: { challenges: [], support: [] },
  },
  {
    slug: "olakunle-jaiyesimi",
    legacySlug: "the-boy-who-ran-seven-miles-olakunle-jaiyesimi",
    name: "Dr Olakunle Jaiyesimi",
    profession: "Health Researcher, Scientist, and Creative Author",
    bio: "Dr Olakunle Jaiyesimi focuses on a holistic approach to health research and applies untargeted metabolomics to develop solutions that benefit humans, using creative art to express his scientific thoughts. He is also the co-author of children's titles including See the Bees and The Ant and the Termite, blending science and storytelling for young readers.",
    mission:
      "To use science and storytelling together to help young readers discover the wonder of the natural world.",
    quote:
      "A child who learns to wonder at nature is a child who will grow up curious, careful, and kind.",
    featured: false,
    books: [],
    journey: { challenges: [], support: [] },
  },
  {
    slug: "priscilla-olukoya",
    legacySlug: "who-is-the-boss-priscilla-olukoya",
    name: "Priscilla Olukoya",
    profession: "Author and Researcher",
    bio: "Priscilla Olukoya is the author of Who Is the Boss? A Humankind Blind Spot Investigation on Device Use, an exploration of our relationship with technology and how devices shape attention, behaviour, and the way we relate to one another.",
    mission:
      "To help readers see clearly how devices shape their attention and behaviour, and to reclaim agency over their own minds.",
    quote:
      "The most important question about our devices is not how much time we spend on them — it is who is really in charge.",
    featured: false,
    books: [],
    journey: { challenges: [], support: [] },
  },
  {
    slug: "chinwedu-madu",
    legacySlug: "bald-chinwedu-madu",
    name: "Mrs Chinwedu Madu",
    profession: "Author and Storyteller",
    bio: "Mrs Chinwedu Madu is a Nigerian fiction writer whose work explores family, migration, illness, and the quiet courage of ordinary people. Her titles include BALD, My Winterized Home, and The Long Trek.",
    mission:
      "To tell honest stories about family, migration, and the resilience of ordinary people.",
    quote:
      "Every ordinary life, told honestly, becomes an extraordinary story.",
    featured: false,
    books: [],
    journey: { challenges: [], support: [] },
  },
  {
    slug: "adaeze-oba",
    legacySlug: "abc-of-wellness-adaeze-oba",
    name: "Mrs Adaeze Oba",
    profession: "Author and Wellness Advocate",
    bio: "Mrs Adaeze Oba is a wellness advocate and author of ABC of Wellness, a practical, accessible guide to everyday health — from nutrition and movement to sleep, stress, and self-care.",
    mission:
      "To make everyday wellness simple, practical, and accessible to everyone.",
    quote:
      "Wellness is not a destination — it is a series of small, faithful choices made every day.",
    featured: false,
    books: [],
    journey: { challenges: [], support: [] },
  },
  {
    slug: "david-cross",
    legacySlug: "novi-sa-protocol-david-cross",
    name: "Mr Ayokunle Bamigboye",
    photo: "/mr-ayokunle-bamigboye.jpg",
    profession: "Author and Business Writer",
    bio: "Mr Ayokunle Bamigboye is the author of Novi SA Protocol, a business title exploring professional protocols, strategy, and operational excellence in the modern marketplace.",
    mission:
      "To equip professionals with the protocols, strategy, and operational discipline they need to excel in the modern marketplace.",
    quote:
      "Strategy is only half the work — protocol is how strategy becomes reality.",
    featured: false,
    books: [],
    journey: { challenges: [], support: [] },
  },
  {
    slug: "spring-of-divine-grace",
    legacySlug: "sodgem-spring-of-divine-grace",
    name: "Spring of Divine Grace Evangelical Mission (SODGEM)",
    profession: "Church and Christian Publishing Ministry",
    bio: "Spring of Divine Grace Evangelical Mission (SODGEM) is a Christian ministry that publishes Sunday and midweek Bible study manuals, children's Bible study materials, hymns, prayer journals, marriage manuals, and constitutional and governance documents for its worldwide branches. Its publications are designed to equip believers in the Word of God and to provide churches with sound, structured teaching resources.",
    mission:
      "To equip believers and churches with sound, structured Bible study and governance resources.",
    quote:
      "A church that studies the Word together grows together — in grace, in order, and in the knowledge of God.",
    featured: false,
    books: [],
    journey: { challenges: [], support: [] },
  },
];

// Swap in any photos/covers dropped into public/authors and public/covers
export const featuredAuthors: FeaturedAuthor[] = authorProfiles.map((author) => ({
  ...author,
  photo: photoFor(author.slug, author.photo),
  books: author.books.map((book) => ({ ...book, coverImage: coverFor(book.slug, book.coverImage) })),
}));

// Authors whose book is written up above; sections that show book details use these
export const showcaseAuthors = featuredAuthors.filter((author) => author.books.length > 0);

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