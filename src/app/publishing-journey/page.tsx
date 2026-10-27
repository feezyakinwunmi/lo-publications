import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardCheck, FileCheck2, FileSearch, Palette, Rocket } from "lucide-react";

const journey = [
  {
    number: "01",
    title: "Submit Your Manuscript",
    subtitle: "Start with your story, idea, or completed draft.",
    description: "Every publishing journey begins with a conversation. Share your manuscript or tell us about the book you are developing so we can understand your goals, audience, and the support you need.",
    details: ["Submit your manuscript, proposal, or book concept.", "Tell us about your publishing goals and preferred format.", "Receive confirmation and guidance on the next step."],
    icon: BookOpen,
    image: "/book.jpg",
  },
  {
    number: "02",
    title: "Review and Editorial Direction",
    subtitle: "A clear assessment before production begins.",
    description: "We review your manuscript’s current stage and discuss the appropriate editorial, design, and publishing pathway. This helps establish a clear scope of work, practical timelines, and the agreed deliverables for your project.",
    details: ["Assess manuscript readiness, content, and structure.", "Identify the editorial and production support required.", "Confirm the agreed publishing scope, milestones, and responsibilities."],
    icon: FileSearch,
    image: "/pexels-jessbaileydesign-762685.png",
  },
  {
    number: "03",
    title: "Design Your Book",
    subtitle: "A thoughtful visual identity for your story.",
    description: "Once your manuscript is approved for design, we develop a professional visual direction for your book. This includes the cover and interior presentation, with careful attention to audience, genre, readability, and the author’s vision.",
    details: ["Develop and approve the cover design direction.", "Create the interior layout and typesetting.", "Coordinate agreed illustrations, diagrams, or visual elements."],
    icon: Palette,
    image: "/crown.jpg",
  },
  {
    number: "04",
    title: "Prepare for Publication",
    subtitle: "From approved manuscript to publication-ready files.",
    description: "Following editorial refinement and design approval, we prepare your book for publication. This stage includes final manuscript checks, publication documentation, and the technical preparation of your book files.",
    details: ["Complete final manuscript preparation and publication metadata.", "Provide ISBN application and publishing registration assistance, where agreed.", "Prepare applicable print-ready and digital files, then review and approve them before publication."],
    icon: FileCheck2,
    image: "/kingdom.jpg",
    refinements: [
      ["Developmental Editing", "Strengthening the manuscript’s central ideas, content, structure, argument, and overall direction."],
      ["Structural Editing", "Improving the organisation, sequence, flow, and arrangement of chapters and sections."],
      ["Line Editing", "Refining sentence structure, language, clarity, tone, and readability while preserving the author’s voice."],
      ["Copyediting", "Correcting grammar, spelling, punctuation, consistency, terminology, and language usage."],
      ["Proofreading", "Reviewing the final designed pages for typographical errors, formatting inconsistencies, and other production errors before release."],
    ],
  },
  {
    number: "05",
    title: "Launch Your Book",
    subtitle: "Move from publication to reader connection.",
    description: "With your book published, we can support the next stage of your journey according to your selected package or agreed services. This may include launch planning, author materials, promotional assets, and practical guidance for presenting your book professionally.",
    details: ["Plan agreed launch activities and timelines.", "Prepare selected promotional and author-platform materials.", "Coordinate additional marketing, media, or publicity support where contracted."],
    icon: Rocket,
    image: "/rl.jpg",
  },
];

export const metadata = {
  title: "Your Publishing Journey | LO Publications",
  description: "Discover LO Publications’ professional process from manuscript submission to book launch.",
};

export default function PublishingJourneyPage() {
  return (
    <main className="bg-white pt-20">
      <section className="relative overflow-hidden bg-[#8d171c] py-24 text-white md:py-32">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 10% 20%, #fff 0, transparent 22%), radial-gradient(circle at 90% 80%, #fff 0, transparent 24%)" }} />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">How It Works</span>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">Your publishing journey, clearly guided.</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">From your first manuscript submission to your book launch, we guide the agreed publishing process with expertise, clear communication, and careful attention to every detail.</p>
          <a href="#step-01" className="mt-10 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-[#8d171c] transition hover:shadow-xl">Explore the Process <ArrowRight size={18} /></a>
        </div>
      </section>

      <nav className="border-b border-gray-100 bg-[#f8f6f3] py-7" aria-label="Publishing journey steps">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-7 gap-y-3 px-6">
          {journey.map((step) => <a key={step.number} href={`#step-${step.number}`} className="text-sm font-semibold text-[#8d171c] transition hover:text-[#5c0f13]"><span className="mr-1 text-[#8d171c]/60">{step.number}</span>{step.title}</a>)}
        </div>
      </nav>

      <section className="mx-auto max-w-7xl space-y-24 px-6 py-24 md:space-y-32">
        {journey.map((step, index) => {
          const Icon = step.icon;
          const imageSecond = index % 2 === 0;
          return (
            <article id={`step-${step.number}`} key={step.number} className="scroll-mt-28">
              <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <div className={imageSecond ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-3xl bg-[#f8f6f3] shadow-xl">
                    <img src={step.image} alt="LO Publications publishing process" className="h-[340px] w-full object-cover md:h-[470px]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#8d171c] shadow-lg"><Icon size={25} /></div>
                  </div>
                </div>
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8d171c]">{step.number} — Publishing Journey</span>
                  <h2 className="mt-4 text-3xl font-bold text-black md:text-4xl">{step.title}</h2>
                  <p className="mt-2 text-lg font-medium text-[#8d171c]">{step.subtitle}</p>
                  <p className="mt-5 text-lg leading-relaxed text-gray-600">{step.description}</p>

                  {step.refinements && (
                    <div className="mt-8 rounded-2xl border border-[#8d171c]/15 bg-[#f8f6f3] p-6">
                      <h3 className="font-bold text-black">Our five levels of editorial refinement may include:</h3>
                      <ol className="mt-5 space-y-4">
                        {step.refinements.map(([title, text], refinementIndex) => <li key={title} className="flex gap-3 text-sm leading-relaxed text-gray-700"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8d171c] text-xs font-bold text-white">{refinementIndex + 1}</span><span><strong className="text-black">{title}:</strong> {text}</span></li>)}
                      </ol>
                    </div>
                  )}

                  <ul className="mt-8 space-y-3">
                    {step.details.map((detail) => <li key={detail} className="flex gap-3 text-gray-700"><ClipboardCheck className="mt-0.5 shrink-0 text-[#8d171c]" size={19} /><span>{detail}</span></li>)}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="bg-[#f8f6f3] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8d171c]">Ready to begin?</span>
          <h2 className="mt-4 text-3xl font-bold text-black md:text-4xl">Let’s take the next step together.</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">Your publishing agreement defines the services, deliverables, timelines, and responsibilities for your project. We are here to help you move forward with clarity and confidence.</p>
          <Link href="/submit" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#8d171c] px-7 py-3.5 font-semibold text-white transition hover:bg-[#6b1215]">Start Your Publishing Journey <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
