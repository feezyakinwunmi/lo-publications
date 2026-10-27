import Link from "next/link";
import { ArrowRight, BookOpen, Brush, FileText, Megaphone, PenTool, Rocket, Sparkles } from "lucide-react";

const serviceGroups = [
  {
    id: "editorial-services",
    eyebrow: "01 — Editorial Services",
    title: "Give your manuscript the attention it deserves.",
    introduction: "We assess, refine, and prepare your manuscript with care—strengthening the work while preserving your voice, message, and intent.",
    image: "/book.jpg",
    imageAlt: "A professionally produced LO Publications book",
    icon: PenTool,
    services: [
      ["Editorial Development and Manuscript Assessment", "We evaluate your manuscript’s content, structure, clarity, and readiness for publication, providing practical recommendations to help you develop a stronger, more engaging book."],
      ["Structural Editing", "We improve the organisation, sequence, flow, and arrangement of chapters and sections so readers can follow your ideas with ease."],
      ["Line Editing", "We refine sentence structure, language, clarity, tone, and readability while protecting the authorial voice that makes your work distinct."],
      ["Copyediting", "We correct grammar, spelling, punctuation, consistency, terminology, and language usage to bring polish and precision to your manuscript."],
      ["Proofreading and Final Manuscript Preparation", "We review final pages for typographical and formatting errors, then prepare the approved manuscript for professional book design and publication."],
    ],
  },
  {
    id: "book-design",
    eyebrow: "02 — Book Design & Visual Development",
    title: "Design that makes a confident first impression.",
    introduction: "From the first look at the cover to the final page, we create a visual reading experience that reflects your book and respects your reader.",
    image: "/crown.jpg",
    imageAlt: "Example of a book cover produced by LO Publications",
    icon: Brush,
    services: [
      ["Book Cover Design", "We create professional book covers that communicate your book’s message, appeal to your intended audience, and reflect its genre and positioning."],
      ["Book Interior Design and Typesetting", "We transform your approved manuscript into a professionally designed book interior, with focused attention to typography, page layout, consistency, and readability."],
      ["Illustrations, Diagrams, and Visual Content", "We develop or coordinate illustrations, diagrams, charts, and other visual elements that strengthen presentation and support understanding."],
    ],
  },
  {
    id: "publishing-services",
    eyebrow: "03 — Publishing Services",
    title: "A clear path from approval to publication.",
    introduction: "We manage the technical and practical work of preparing your book for publication, with clear milestones, communication, and approvals throughout.",
    image: "/kingdom.jpg",
    imageAlt: "Another LO Publications book cover",
    icon: BookOpen,
    services: [
      ["ISBN Application and Publishing Registration", "We assist authors with ISBN applications and applicable publishing registration requirements, helping prepare necessary identifiers and documentation."],
      ["Publishing Platform Setup", "We assist with book setup on applicable publishing platforms, including publication information and required book details, according to the agreed arrangement."],
      ["Publishing Project Management", "We coordinate the process from manuscript approval to final production—supporting organised timelines, communication, responsibilities, and publishing stages."],
      ["Publication-Ready Files", "Following final checks and approval, we prepare the applicable print-ready and digital files for publication."],
    ],
  },
  {
    id: "author-development",
    eyebrow: "04 — Author Development & Promotion",
    title: "Present your book—and yourself—professionally.",
    introduction: "Additional author and promotional support is available for writers who want to build their platform, launch thoughtfully, and reach readers with confidence.",
    image: "/rl.jpg",
    imageAlt: "A book produced by LO Publications",
    icon: Rocket,
    services: [
      ["Author Profile and Platform Setup", "We help authors establish a professional presence through author biographies, profile development, and applicable author-platform setup."],
      ["Book Launch Planning and Support", "We support launch planning through event preparation, launch timelines, promotional coordination, programme development, and agreed launch materials."],
      ["Author Media and Public Relations", "We help prepare author biographies, media profiles, interview resources, press materials, and publicity coordination for meaningful media engagement."],
      ["Book Marketing and Promotional Materials", "We develop agreed campaign assets such as announcement graphics, flyers, social media content, book mockups, and launch materials to support visibility."],
    ],
  },
];

export const metadata = {
  title: "Professional Publishing Services | LO Publications",
  description: "Editorial, design, publishing, and author development services for professionally published books.",
};

export default function ServicesPage() {
  return (
    <main className="bg-white pt-20">
      <section className="relative overflow-hidden bg-[#8d171c] py-24 md:py-32 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 15% 30%, #fff 0, transparent 25%), radial-gradient(circle at 85% 70%, #fff 0, transparent 20%)" }} />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-white/75"><Sparkles size={16} /> Professional Publishing Services</span>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">Everything your book needs to be published professionally.</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">From developing your manuscript to preparing publication-ready files, LO Publications provides the editorial expertise, creative direction, and publishing support to help bring your story to life.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/submit" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-[#8d171c] transition hover:shadow-xl">Start Your Publishing Journey <ArrowRight size={18} /></Link>
            <a href="#editorial-services" className="inline-flex items-center gap-2 rounded-lg border border-white/35 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">Explore Services</a>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-[#f8f6f3] py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-3 px-6 text-sm font-semibold text-[#8d171c]">
          {serviceGroups.map((group) => <a key={group.id} href={`#${group.id}`} className="transition hover:text-[#5c0f13]">{group.eyebrow.replace(/^\d+ — /, "")}</a>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-24 px-6 py-24 md:space-y-32">
        {serviceGroups.map((group, index) => {
          const Icon = group.icon;
          const imageFirst = index % 2 === 1;
          return (
            <article id={group.id} key={group.id} className="scroll-mt-28">
              <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <div className={imageFirst ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-3xl bg-[#f8f6f3] shadow-xl">
                    <img src={group.image} alt={group.imageAlt} className="h-[360px] w-full object-cover md:h-[470px]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#8d171c] shadow-lg"><Icon size={22} /></div>
                  </div>
                </div>
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8d171c]">{group.eyebrow}</span>
                  <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-4xl">{group.title}</h2>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">{group.introduction}</p>
                  <div className="mt-9 grid gap-4 sm:grid-cols-2">
                    {group.services.map(([title, description], serviceIndex) => (
                      <div key={title} className={`rounded-2xl border border-gray-100 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#8d171c]/30 hover:shadow-lg ${group.services.length % 2 && serviceIndex === group.services.length - 1 ? "sm:col-span-2" : ""}`}>
                        <div className="flex gap-3">
                          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8d171c]/10 text-xs font-bold text-[#8d171c]">{serviceIndex + 1}</span>
                          <div>
                            <h3 className="font-semibold leading-snug text-black">{title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="bg-[#f8f6f3] py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8d171c]">Our Publishing Approach</span>
          <h2 className="mt-4 text-3xl font-bold text-black md:text-4xl">A clear and professional publishing process.</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">Every project is guided by an agreed scope of work that defines services, deliverables, timelines, and responsibilities. Core publishing deliverables are provided according to the selected package; additional author, launch, media, and promotional services may be contracted separately or included in selected packages.</p>
          <div className="mt-10 rounded-2xl border border-[#8d171c]/15 bg-white p-6 text-left shadow-sm md:p-8">
            <div className="flex gap-4"><FileText className="mt-1 shrink-0 text-[#8d171c]" size={24} /><p className="leading-relaxed text-gray-700">We provide professional publishing support, clear communication, and quality production throughout the agreed process. Media coverage, sales, bestseller rankings, distribution acceptance, and promotional results are not guaranteed, as they depend on external platforms, partners, audiences, and market conditions.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[#8d171c] py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Megaphone className="mx-auto text-white/80" size={28} />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Ready to publish your book?</h2>
          <p className="mt-4 text-lg text-white/80">Let us help you take the next step in your publishing journey.</p>
          <Link href="/submit" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 font-semibold text-[#8d171c] transition hover:shadow-xl">Start Your Publishing Journey <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
