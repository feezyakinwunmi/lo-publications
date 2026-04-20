export interface Job {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  type: string;
  department: string;
  image: string;
  responsibilities: string[];
  requirements: string[];
  applyEmail: string;
}

export const jobsData: Job[] = [
  {
    id: 1,
    slug: "editorial-specialist",
    title: "Editorial Specialist",
    shortDescription: "Own the full manuscript lifecycle from concept to final proof.",
    fullDescription: `We are expanding a high-performing editorial team to support a growing publishing ecosystem across multiple disciplines. This role extends beyond technical editing; it requires sound editorial judgement, structural thinking, and stewardship of ideas.

We are seeking an Editorial Specialist who can take ownership of the full manuscript lifecycle. From early-stage concept development to final proof, you will shape, refine, and elevate content into clear, authoritative, and market-ready work. You must be able to strengthen a manuscript without compromising the author's voice or intent.

This role is suited to someone who recognises editing as both a craft and a responsibility.`,
    location: "Remote",
    type: "Full-Time or Contract",
    department: "Editorial",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    responsibilities: [
      "Lead developmental and structural editing for manuscripts",
      "Transform fragmented ideas into coherent, purposeful narratives",
      "Ensure thematic alignment and logical integrity throughout",
      "Refine voice, clarity, and expression while preserving author's tone",
      "Apply British English conventions for grammar and syntax",
      "Prepare manuscripts for publication to professional standards"
    ],
    requirements: [
      "Proven experience with long-form content across narrative and/or informational genres",
      "Strong ability to engage beyond surface-level edits",
      "Demonstrated ownership of projects from inception to completion",
      "High attention to detail with logic, tone, and presentation",
      "Self-directed and reliable in meeting deadlines"
    ],
    applyEmail: "layo@lopublications.com"
  },
  {
    id: 2,
    slug: "book-interior-designer",
    title: "Book Interior Designer",
    shortDescription: "Bring editorial clarity and visual structure to every page.",
    fullDescription: `This role brings together editorial clarity and visual structure. You will shape the internal architecture of our books, turning raw manuscripts into organized, readable, and professionally designed interiors.

The work goes beyond layout. You will guide how information flows, how hierarchy is built, and how readers move through content with ease. Every decision you make should improve clarity, consistency, and the overall reading experience.`,
    location: "Hybrid",
    type: "Full-Time",
    department: "Design",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    responsibilities: [
      "Design interior systems that match the tone of each book",
      "Work with layered content including callouts, sidebars, tables, and footnotes",
      "Create flexible templates for long manuscript consistency",
      "Apply strong typesetting principles with focus on readability",
      "Handle complex manuscripts using advanced Adobe InDesign",
      "Prepare print-ready interiors meeting press requirements"
    ],
    requirements: [
      "Advanced InDesign expertise",
      "Photoshop and Illustrator proficiency",
      "Strong editorial awareness",
      "Print production knowledge",
      "Detail-oriented execution",
      "Clear communication skills"
    ],
    applyEmail: "layo@lopublications.com"
  },
  {
    id: 3,
    slug: "senior-copy-editor",
    title: "Senior Copy Editor",
    shortDescription: "Polish prose to perfection with technical rigour and stylistic consistency.",
    fullDescription: `We're looking for a Senior Copy Editor who can elevate manuscripts with precision and care. You'll be the final pair of eyes before books go to print, ensuring every sentence is clear, correct, and compelling.

This role requires deep knowledge of British English conventions, exceptional attention to detail, and the ability to work across multiple genres while maintaining house style.`,
    location: "Remote",
    type: "Contract",
    department: "Editorial",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    responsibilities: [
      "Line edit and copy edit manuscripts to professional standards",
      "Improve diction, rhythm, and overall readability",
      "Apply British English conventions consistently",
      "Ensure precision in punctuation, formatting, and editorial standards",
      "Create style sheets for each project",
      "Conduct meticulous final proofreading"
    ],
    requirements: [
      "3+ years professional copy editing experience",
      "Expert knowledge of British English",
      "Experience with Chicago Manual of Style or New Hart's Rules",
      "Proficiency with track changes and editorial tools",
      "Ability to work on tight deadlines"
    ],
    applyEmail: "layo@lopublications.com"
  }
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobsData.find(job => job.slug === slug);
}

export function getAllJobs(): Job[] {
  return jobsData;
}