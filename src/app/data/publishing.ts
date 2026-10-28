// Genres LO Publications accepts, shown on /what-we-publish and previewed on /about.
import {
  Blocks,
  BookMarked,
  BookOpen,
  Briefcase,
  Building2,
  ChefHat,
  Church,
  Cpu,
  Drama,
  Earth,
  Feather,
  GraduationCap,
  HeartPulse,
  Landmark,
  Languages,
  Library,
  Music,
  NotebookPen,
  Palette,
  Puzzle,
  Quote,
  Scale,
  ScrollText,
  Sparkles,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";

export type PublishingCategory = {
  title: string;
  desc: string;
  icon: LucideIcon;
  // Matching book cover, used where the category is shown as an image panel
  img?: string;
};

export const PUBLISHING_CATEGORIES: PublishingCategory[] = [
  {
    title: "Fiction and Creative Writing",
    desc: "Novels, short stories, romance, mystery, thrillers, fantasy, science fiction, historical fiction, and young adult fiction.",
    icon: Feather,
    img: "/ngozi.jpg",
  },
  {
    title: "Nonfiction and General Interest",
    desc: "Memoirs, biographies, autobiographies, personal development, self-help, relationships, parenting, travel, and social commentary.",
    icon: BookOpen,
    img: "/niw.jpg",
  },
  {
    title: "Christian, Religious and Spiritual Books",
    desc: "Devotionals, Bible studies, theology, prayer books, sermons, Christian living, church leadership, discipleship, and ministry resources.",
    icon: Church,
    img: "/rl.jpg",
  },
  {
    title: "Business, Entrepreneurship and Finance",
    desc: "Business management, entrepreneurship, startups, leadership, marketing, investing, personal finance, wealth creation, and professional development.",
    icon: Briefcase,
  },
  {
    title: "Academic, Scholarly and Educational Books",
    desc: "Textbooks, research publications, dissertations, educational resources, study guides, technical manuals, and professional handbooks.",
    icon: GraduationCap,
  },
  {
    title: "Children's Books",
    desc: "Picture books, alphabet books, early readers, Bible stories, children's fiction, educational books, activity books, and workbooks.",
    icon: Blocks,
  },
  {
    title: "Young Adult and Teen Books",
    desc: "Teen fiction, coming-of-age stories, fantasy, romance, inspirational books, personal development, and educational guides.",
    icon: Sparkles,
  },
  {
    title: "Poetry and Literary Works",
    desc: "Poetry collections, spoken-word poetry, literary essays, creative writing, literary criticism, and anthologies.",
    icon: Quote,
  },
  {
    title: "Drama, Plays and Screenwriting",
    desc: "Stage plays, screenplays, radio plays, biblical dramas, monologues, theatre scripts, and performance collections.",
    icon: Drama,
  },
  {
    title: "History, Heritage and Culture",
    desc: "African and world history, Nigerian and Canadian history, family histories, cultural heritage, folklore, genealogy, and historical research.",
    icon: Landmark,
  },
  {
    title: "Anthologies and Collaborative Publications",
    desc: "Multi-author collections, poetry anthologies, short stories, essays, testimonies, youth writing, and community publications.",
    icon: Library,
  },
  {
    title: "Health, Medicine and Wellness",
    desc: "Health education, public health, nutrition, fitness, wellness, medical textbooks, healthcare management, and clinical references.",
    icon: HeartPulse,
  },
  {
    title: "Technology, Science and Innovation",
    desc: "Artificial intelligence, software development, data science, cybersecurity, engineering, natural sciences, and technology guides.",
    icon: Cpu,
  },
  {
    title: "Law, Government and Public Affairs",
    desc: "Legal publications, constitutional studies, human rights, governance, public policy, political science, and civic education.",
    icon: Scale,
  },
  {
    title: "Agriculture, Environment and Natural Resources",
    desc: "Farming, agribusiness, animal husbandry, gardening, environmental studies, conservation, sustainability, and agricultural guides.",
    icon: Sprout,
  },
  {
    title: "Art, Design, Fashion and Photography",
    desc: "Art books, photography, architecture, graphic design, fashion, interior design, creative portfolios, and coffee-table books.",
    icon: Palette,
  },
  {
    title: "Food, Cooking and Hospitality",
    desc: "Cookbooks, family recipes, traditional cuisines, baking, food culture, catering, restaurant management, and hospitality guides.",
    icon: ChefHat,
  },
  {
    title: "Reference and Practical Guides",
    desc: "Dictionaries, encyclopedias, handbooks, manuals, how-to guides, directories, instructional books, and professional references.",
    icon: BookMarked,
  },
  {
    title: "Workbooks, Journals and Planners",
    desc: "Educational workbooks, guided journals, prayer journals, devotional journals, business workbooks, financial planners, and productivity planners.",
    icon: NotebookPen,
  },
  {
    title: "Professional and Industry Publications",
    desc: "Corporate histories, company profiles, annual reports, training manuals, industry reports, white papers, and institutional publications.",
    icon: Building2,
  },
  {
    title: "Travel, Geography and Exploration",
    desc: "Travel memoirs, destination guides, cultural travel writing, geography textbooks, atlases, exploration narratives, and tourism guides.",
    icon: Earth,
  },
  {
    title: "Language, Communication and Linguistics",
    desc: "Language-learning books, grammar guides, literacy resources, dictionaries, writing guides, public speaking, translation, and linguistics.",
    icon: Languages,
  },
  {
    title: "Music, Performing Arts and Entertainment",
    desc: "Music education, songbooks, hymnals, choir manuals, performing arts, dance, theatre studies, music history, and artist biographies.",
    icon: Music,
  },
  {
    title: "Family, Relationships and Personal Development",
    desc: "Marriage, parenting, child development, family life, emotional intelligence, communication, conflict resolution, and personal growth.",
    icon: Users,
  },
  {
    title: "Memoirs, Testimonies and Personal Narratives",
    desc: "Life stories, faith journeys, migration stories, family memoirs, entrepreneurial journeys, personal testimonies, and inspirational experiences.",
    icon: ScrollText,
  },
  {
    title: "Specialised and Niche Publications",
    desc: "Sports books, hobby guides, puzzles, humour, gift books, commemorative publications, memorial books, and specialised or interdisciplinary works.",
    icon: Puzzle,
  },
];
