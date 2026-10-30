// app/blog/[slug]/posts/ChildrensPictureBookOttawa.tsx

import {
  CheckCircle,
  BookOpen,
  PenTool,
  Handshake,
  Route,
  Palette,
  FileText,
  Wallet,
  Megaphone,
  Star,
  Sparkles,
  MapPin,
  MessageCircle,
  Heart,
} from 'lucide-react';
import Link from 'next/link';

const stages = [
  {
    number: '01',
    title: 'Submission',
    content:
      'The journey begins when you share your manuscript or idea with us.',
    detail:
      'At this stage, it helps to have a clear description of your book, its intended audience, and the current state of your manuscript. If your story is complete, you can explain what kind of publishing support you are seeking. If you are still developing the idea, be prepared to discuss how far you have progressed.',
  },
  {
    number: '02',
    title: 'Review',
    content:
      'Your manuscript is reviewed to help establish its suitability for the publishing process and identify the next steps.',
    detail:
      'This stage is important because every book has different requirements. Some manuscripts may need editorial refinement, while others may be ready to move toward design and production.',
  },
  {
    number: '03',
    title: 'Design',
    content:
      "Once the project progresses, attention turns to the book's visual presentation.",
    detail:
      'This can involve cover design, interior layout, typography, and the arrangement of text and illustrations. For picture books, these elements must work together to create a cohesive and engaging reading experience.',
  },
  {
    number: '04',
    title: 'Publication',
    content:
      'The manuscript and design move toward the final publication stage, with the necessary production details addressed along the way.',
    detail:
      'We support both print and digital publishing, allowing authors to explore formats appropriate to their projects.',
  },
  {
    number: '05',
    title: 'Launch',
    content:
      'Publication is an important milestone, but it is also the beginning of introducing your book to its intended audience.',
    detail:
      'Launch planning helps you think about how to present your work, communicate its value, and encourage readers to discover it.',
  },
];

const faqs = [
  {
    q: "How do I publish a children's picture book in Ottawa?",
    a: 'Begin by developing your manuscript, identifying your intended age group, and determining what support your project requires. We offer editorial services, cover design, book design, and publishing support to help authors move from manuscript to finished book. You can contact us to discuss your story and explore the next steps for your project.',
  },
  {
    q: "Does LO Publications publish children's books?",
    a: "Yes. Children's books are among the genres we publish. If you are preparing a picture book, contact our team to discuss your manuscript, intended audience, illustration requirements, and publishing goals.",
  },
  {
    q: 'Can LO Publications help me with editing and book design?',
    a: 'Yes. We offer editorial direction, cover design, and book design. These services can help refine your manuscript and develop a professional presentation for your book. The specific requirements and scope of work will depend on your project.',
  },
  {
    q: 'Do I need to have illustrations before submitting my manuscript?',
    a: 'Not necessarily. You can enquire about your manuscript before commissioning illustrations. If your project requires original artwork, discuss the available arrangements with us before making commitments so that illustration and design can be planned appropriately.',
  },
  {
    q: "How long does publishing a children's picture book take?",
    a: 'The timeline depends on the manuscript, editing requirements, illustrations, design, and production arrangements. Our typical publishing process takes three to six months from manuscript submission to publication, although individual projects may take longer.',
  },
  {
    q: "How much does it cost to publish a children's picture book with LO Publications?",
    a: 'Costs depend on the services required and the complexity of the project. Contact us for information about pricing, the scope of work, and the costs associated with your particular manuscript.',
  },
  {
    q: "Can I retain ownership of my children's picture book?",
    a: 'Yes. Under our publishing partnership model, authors retain ownership of their work. Review the applicable publishing agreement to understand the rights, permissions, and responsibilities associated with your project.',
  },
  {
    q: 'Does LO Publications support book launches?',
    a: 'Yes. Launch support is included in our publishing process. Contact our team to clarify the promotional services available for your project and how they fit into your publishing arrangement.',
  },
  {
    q: "How do I submit my children's picture book to LO Publications?",
    a: 'Visit our website and use the appropriate contact or submission option to inquire about your project. Be prepared to share a brief description of your story, your intended audience, and the stage your manuscript has reached.',
  },
];

function CheckList({ items }: { items: { label?: string; text: string }[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-gray-600">
          <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <span>
            {item.label && <strong className="text-gray-900">{item.label} </strong>}
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({
  icon: Icon,
  number,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
        <Icon className="w-7 h-7 text-red-600" />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 leading-tight">
        {number}. {title}
      </h2>
    </div>
  );
}

export default function ChildrensPictureBookOttawa() {
  return (
    <article className="max-w-4xl mx-auto space-y-20">
      {/* Hero */}
      <header className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          <MapPin className="w-4 h-4" />
          Children&apos;s Books — Ottawa
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          How to Publish a Children&apos;s Picture Book in Ottawa: From Your Imagination to the Printed Page
        </h1>

        <p className="text-xl text-gray-500 italic border-l-4 border-red-500 pl-6 py-2">
          Every children&apos;s picture book begins with a little imagination. Writing it down is only the beginning.
        </p>

        <div className="max-w-none text-lg text-gray-600 leading-relaxed space-y-6">
          <p>
            Perhaps it is a story you have told your child at bedtime, a character you have been imagining for years, or a childhood memory that still makes you smile. Sometimes, it is a simple idea about friendship, courage, kindness, or belonging that you believe deserves to be shared with the world.
          </p>
          <p>
            Turning a manuscript into a published children&apos;s picture book involves careful editing, thoughtful illustration, professional design, and a clear publishing plan. For aspiring authors in Ottawa, understanding these steps can make the journey feel less overwhelming and help you approach the process with confidence.
          </p>
          <p>
            At <strong className="text-gray-900">LO Publications</strong>, we believe every meaningful story deserves the opportunity to reach its readers. As an independent publishing company based in Ottawa, we work with authors to develop their manuscripts into professionally presented books, with services spanning editorial direction, cover design, book design, and publishing.
          </p>
          <p>
            If you have been wondering how to publish a children&apos;s picture book in Ottawa, this guide will walk you through the essential steps, explain what to consider along the way, and show you how we can help you explore the possibilities for your story.
          </p>
        </div>
      </header>

      {/* 1. Start With a Story */}
      <section className="space-y-6">
        <SectionHeading icon={Heart} number="1" title="Start With a Story That Matters" />
        <div className="text-lg text-gray-600 leading-relaxed space-y-4">
          <p>
            Before thinking about illustrations, book covers, or publication dates, begin with the most important part of your project: the story itself.
          </p>
          <p>
            Children&apos;s picture books have a special place in the lives of young readers. They introduce new ideas, encourage curiosity, and help children make sense of experiences they may not yet know how to describe. A well-told story can also become part of a family&apos;s traditions, revisited at bedtime or shared between generations.
          </p>
          <p>
            But what makes a children&apos;s story memorable? Often, it is not the complexity of the plot. It is the character a child recognizes, the unexpected adventure that sparks their imagination, or the feeling that someone else understands what they are experiencing.
          </p>
          <p>
            Your story might explore a child learning to make friends, a family adjusting to a new home, an animal discovering its courage, or a young character learning the value of honesty. Whatever the subject, consider what makes your story distinctive and why a young reader would want to return to it.
          </p>
        </div>
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
          <p className="font-medium text-gray-900 mb-4">As you develop your idea, ask yourself:</p>
          <CheckList
            items={[
              { label: 'Who is your story for?', text: 'Consider the age group, interests, and experiences of your intended readers.' },
              { label: 'What makes your story engaging?', text: 'Identify the character, challenge, discovery, or adventure that keeps readers interested.' },
              { label: 'What do you want your readers to experience?', text: 'Think beyond the lesson. Consider the emotions, questions, and sense of wonder your story might inspire.' },
            ]}
          />
        </div>
        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            At LO Publications, we understand that every manuscript begins with a unique vision. Our publishing approach places the author&apos;s story at the centre of the process, allowing the creative purpose behind the work to guide its development.
          </p>
          <p>
            You do not need to have every detail figured out before taking the next step. What matters is having an idea you are willing to develop and a genuine desire to share it with young readers.
          </p>
        </div>
      </section>

      {/* 2. Develop Your Manuscript */}
      <section className="space-y-6">
        <SectionHeading icon={PenTool} number="2" title="Develop Your Manuscript Before Publishing" />
        <div className="text-lg text-gray-600 leading-relaxed space-y-4">
          <p>
            One of the most important stages of publishing a children&apos;s picture book is preparing the manuscript.
          </p>
          <p>
            Writing for children requires a different approach from writing a novel or a conventional short story. Picture books rely on the relationship between words and images, which means the text must work alongside the illustrations rather than explain everything independently.
          </p>
          <p>
            A strong manuscript gives the story room to breathe. It introduces the characters, establishes the central challenge, and moves toward a satisfying conclusion without unnecessary explanations.
          </p>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
          <p className="text-gray-700">
            For example, a story about a child preparing a surprise for a friend may not need several sentences describing every action. The illustrations can reveal the hidden decorations, the nervous anticipation, and the excitement of the final moment. This is what makes picture books such a distinctive storytelling format: the words and images contribute different elements to the same experience.
          </p>
        </div>
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
          <p className="font-medium text-gray-900 mb-4">Before submitting your manuscript, consider the following:</p>
          <CheckList
            items={[
              { label: 'Read your story aloud.', text: "Children's books are frequently read aloud by parents, teachers, and caregivers. Pay attention to rhythm, repetition, sentence length, and language that feels awkward when spoken." },
              { label: "Review the story's structure.", text: 'Make sure the beginning introduces the character and situation, the middle develops the story, and the ending feels satisfying rather than rushed.' },
              { label: 'Remove unnecessary words.', text: 'Avoid explaining details that the illustrations could communicate more effectively.' },
              { label: 'Consider your intended age group.', text: 'A book for toddlers will generally require different language, pacing, and visual storytelling from a book for older children.' },
              { label: 'Be open to revision.', text: 'Even an exciting story can benefit from editing. Improving clarity, pacing, and character development can make the finished book much stronger.' },
            ]}
          />
        </div>
        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            We offer editorial services designed to refine manuscripts while preserving the author&apos;s distinctive voice. Our aim is to help authors communicate their ideas clearly without losing what makes their stories personal.
          </p>
          <p>
            Your first draft does not have to be perfect. It needs to be a foundation from which a stronger story can emerge. For more on this stage, read{' '}
            <Link href="/blog/editing-vs-proofreading-ottawa" className="text-red-600 hover:underline font-semibold">
              Editing vs. Proofreading: What Ottawa Authors Need to Know
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 3. Publishing Partner */}
      <section className="space-y-6">
        <SectionHeading icon={Handshake} number="3" title="Choose LO Publications as Your Publishing Partner in Ottawa" />
        <div className="text-lg text-gray-600 leading-relaxed space-y-4">
          <p>
            Writing a children&apos;s picture book is a creative achievement, but transforming that manuscript into a finished publication involves several additional decisions. You must consider the editing process, visual presentation, book formatting, publication requirements, and how the finished work will reach its readers.
          </p>
          <p>
            For authors in Ottawa, working with a publishing partner can help bring greater structure to these decisions. At LO Publications, we guide authors through the publishing journey, from submitting their manuscripts to preparing their books for publication. Our services include editorial direction, cover design, book design, and publishing, with the aim of helping authors present their work professionally.
          </p>
          <p>
            We believe that publishing should be about more than producing another title. It should be about understanding the author&apos;s vision and making thoughtful decisions that serve the story and its intended readers. This is particularly important for children&apos;s picture books, where the relationship between text, illustrations, and layout shapes the entire reading experience.
          </p>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8 space-y-4 text-gray-700">
          <p>
            When you approach us with your manuscript, be prepared to explain your story, its intended audience, and what you hope to achieve through publication. If you have already developed illustrations or a visual concept, share that information as well.
          </p>
          <p>
            Our team can review your enquiry and help clarify the next steps based on the project and the services required. Publishing is a collaborative process, and every book has its own needs.
          </p>
          <p className="font-medium text-gray-900">
            Your manuscript deserves more than simply being uploaded and printed. It deserves a publishing process that considers the story, the author, and the reader.
          </p>
        </div>
      </section>

      {/* 4. Publishing Process */}
      <section className="space-y-10">
        <div className="space-y-6">
          <SectionHeading icon={Route} number="4" title="Understand the Publishing Process" />
          <p className="text-lg text-gray-600 leading-relaxed">
            One reason aspiring authors delay publishing is that the process can seem complicated before they understand how the different stages fit together. At LO Publications, our publishing journey follows five key stages: submission, review, design, publication, and launch. Each stage serves a specific purpose in moving your manuscript toward a finished book.
          </p>
        </div>

        <div className="space-y-6">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className="relative bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span
                aria-hidden="true"
                className="absolute top-6 right-8 text-[5rem] md:text-[6rem] font-bold leading-none text-gray-50 select-none"
              >
                {stage.number}
              </span>
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 leading-snug pr-16">
                  Stage {stage.number.replace(/^0/, '')}: {stage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">{stage.content}</p>
                <p className="text-gray-600 leading-relaxed">{stage.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-600 leading-relaxed">
          Our process is designed to give authors a clearer understanding of the journey from manuscript to finished book. The exact requirements and timeline depend on the scope of each project.
        </p>
      </section>

      {/* 5. Illustration and Design */}
      <section className="space-y-6">
        <SectionHeading icon={Palette} number="5" title="Bring Your Story to Life Through Illustration and Book Design" />
        <div className="text-lg text-gray-600 leading-relaxed space-y-4">
          <p>
            Imagine a child opening your book for the first time. Before they understand the full story, they notice the cover. They see the characters, explore the colours, and begin imagining what might happen inside. As they turn each page, the illustrations introduce new details, communicate emotions, and make the story feel real.
          </p>
          <p>
            This is the power of visual storytelling. For children&apos;s picture books, illustration and design are not merely decorative additions. They are essential parts of how the story is communicated.
          </p>
          <p>
            A strong visual presentation should complement the writing, suit the intended age group, and help young readers follow the narrative. The typography must be readable, the page layouts must feel natural, and the illustrations must work harmoniously with the text. Our cover design and book design services help authors develop a professional visual presentation for their work.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Visual consistency', desc: 'Characters should remain recognizable throughout the story, and the illustrations should maintain a coherent visual style.' },
            { title: 'Age-appropriate design', desc: 'Typography, layouts, and illustrations should be suitable for the intended readers.' },
            { title: 'Text and image balance', desc: 'The words should complement the illustrations rather than compete with them.' },
            { title: 'Page flow', desc: 'Each spread should help the story progress naturally and create opportunities for anticipation and discovery.' },
            { title: 'Cover appeal', desc: "The cover should reflect the book's personality and give potential readers a sense of what awaits inside." },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
          <p className="text-gray-700">
            If your project requires original illustrations, discuss the illustration arrangements with us before commissioning artwork. Clarify the creative requirements, costs, timelines, and how the illustrations will be incorporated into the final design. See also our guide on{' '}
            <Link href="/blog/how-to-choose-an-illustrator-for-your-childrens-book" className="text-red-600 hover:underline font-semibold">
              how to choose an illustrator for your children&apos;s book
            </Link>
            .
          </p>
        </div>
        <p className="text-gray-600 leading-relaxed">
          We believe that design decisions should begin with an understanding of the story. When the visual presentation reflects the heart of the manuscript, the finished book becomes a more cohesive and engaging experience.
        </p>
      </section>

      {/* 6. Prepare for Publication */}
      <section className="space-y-6">
        <SectionHeading icon={FileText} number="6" title="Prepare Your Children's Book for Publication" />
        <p className="text-lg text-gray-600 leading-relaxed">
          Once your manuscript and design are taking shape, several practical details must be addressed before your book is ready for readers. These include the book&apos;s format, printing specifications, copyright considerations, ISBN requirements, and publication arrangements. Understanding these details early can help you make informed decisions and avoid unnecessary complications later.
        </p>
        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm space-y-3">
            <h3 className="text-2xl font-semibold text-gray-900">Copyright and ownership</h3>
            <p className="text-gray-600 leading-relaxed">
              Your story represents your creative effort, so it is important to understand how copyright and ownership are handled. In Canada, copyright generally arises automatically when an original work is created and fixed in a material form, subject to applicable legal requirements.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If your book involves an illustrator, designer, or other creative professional, clarify the ownership and permitted use of the work through appropriate written agreements. Under our publishing partnership model, authors retain ownership of their work. Review the agreement applicable to your project to understand the specific rights, permissions, and responsibilities involved.
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm space-y-3">
            <h3 className="text-2xl font-semibold text-gray-900">ISBN and publication details</h3>
            <p className="text-gray-600 leading-relaxed">
              An International Standard Book Number (ISBN) is a unique identifier used to distinguish a particular book edition or format. In Canada, eligible publishers can obtain ISBNs through Library and Archives Canada&apos;s Canadian ISBN Agency.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As part of your publishing preparations with us, clarify how ISBN registration and publication details will be handled for your book.
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm space-y-3">
            <h3 className="text-2xl font-semibold text-gray-900">Printing and formatting</h3>
            <p className="text-gray-600 leading-relaxed">
              Children&apos;s picture books require careful attention to the physical reading experience. Paper quality, colour reproduction, binding, page dimensions, and text placement all influence the finished product. A layout that looks attractive on a screen must also work well when printed.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Before final approval, review the book&apos;s design carefully and ask about proofing procedures where applicable.
            </p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          These production details may seem small compared with the excitement of finishing your story, but they help ensure that the final book reflects the quality and care invested in it. Our publishing process takes your work from final manuscript and design to finished publication, with the production requirements determined by the needs of the project.
        </p>
      </section>

      {/* 7. Costs and Timeline */}
      <section className="space-y-6">
        <SectionHeading icon={Wallet} number="7" title="Understand the Costs and Timeline of Publishing a Children's Picture Book" />
        <div className="text-lg text-gray-600 leading-relaxed space-y-4">
          <p>
            Budgeting is an important part of preparing to publish your book. The cost of publishing a children&apos;s picture book depends on factors such as manuscript editing, illustration, cover design, interior formatting, printing specifications, and the services required for publication and promotion.
          </p>
          <p>
            Because picture books typically depend on full-colour illustrations, their production requirements may differ from those of books containing primarily text. We encourage authors to understand the scope of their publishing projects before committing to a particular plan.
          </p>
          <p>
            When discussing your book with us, ask for clarity on the services included, the associated costs, the payment arrangements, and any additional expenses you may need to consider.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-100 rounded-3xl p-6">
            <p className="text-4xl font-bold text-red-600 mb-2">3–6 months</p>
            <p className="text-gray-700 text-sm">
              Our typical publishing process from manuscript submission to publication, although the actual duration depends on the scope of work.
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What can influence the schedule</h3>
            <CheckList
              items={[
                { text: 'Illustration' },
                { text: 'Revisions' },
                { text: 'Design approvals' },
                { text: 'Production requirements' },
              ]}
            />
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          If you have a particular launch date in mind, communicate it early so the necessary steps can be considered when planning your project. Publishing is an investment of time, creativity, and resources. Having a realistic budget and timeline helps you approach the process with greater confidence and fewer surprises.
        </p>
      </section>

      {/* 8. Help Readers Discover */}
      <section className="space-y-6">
        <SectionHeading icon={Megaphone} number="8" title="Help Readers Discover Your Children's Picture Book" />
        <div className="text-lg text-gray-600 leading-relaxed space-y-4">
          <p>
            A published book deserves the opportunity to find its audience. For children&apos;s picture books, that audience includes more than children. Parents, grandparents, teachers, librarians, and caregivers often help determine which stories young readers encounter.
          </p>
          <p>
            Your marketing approach should therefore communicate what makes your book relevant, engaging, or meaningful to the people who choose books for children. Introducing the finished book to readers is an important part of helping it reach its intended audience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Develop an author presence', desc: 'An author website or professional online profile can provide a central place for readers to learn about you and your books. Include an author biography, a clear book description, publication details, and information about where the book can be purchased or accessed.' },
            { title: 'Share the story behind the book', desc: 'Readers often enjoy learning what inspired a story. Share the childhood experience, family memory, character idea, or important question that led you to write your book.' },
            { title: 'Connect with parents and educators', desc: 'Explore opportunities to connect with schools, libraries, reading groups, and community organizations. A story about friendship might lend itself to discussions about kindness; a book about curiosity could inspire activities that encourage children to explore.' },
            { title: 'Build a consistent online presence', desc: 'Share relevant updates about your book, its themes, and your author journey. Search engine optimization can also help readers discover your website when they search for relevant topics.' },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed">
          We offer launch support as part of our publishing process. When planning your project, ask about the promotional services available and how they fit into your publishing arrangement. Our goal is to help authors understand the opportunities available for introducing their work to readers while setting realistic expectations about marketing and sales. For more ideas, read{' '}
          <Link href="/blog/ottawa-author-brand-website" className="text-red-600 hover:underline font-semibold">
            Building Your Author Brand and Website Before Your Book Launches
          </Link>
          .
        </p>
      </section>

      {/* 9. Why LO Publications */}
      <section className="space-y-6">
        <SectionHeading icon={Star} number="9" title="Why Work With LO Publications?" />
        <div className="text-lg text-gray-600 leading-relaxed space-y-4">
          <p>
            Choosing to publish a children&apos;s picture book is a meaningful step. It requires creativity, patience, and a willingness to trust the process as your story develops from an idea into a finished work.
          </p>
          <p>
            At LO Publications, we believe the publishing experience should reflect the care that went into creating the manuscript. Our approach is built around the author, with attention to the story&apos;s purpose, its presentation, and the experience of the eventual reader.
          </p>
        </div>
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
          <p className="font-medium text-gray-900 mb-4">Here is what that means for your publishing journey:</p>
          <CheckList
            items={[
              { label: 'Your story remains at the centre.', text: 'We recognize that every manuscript carries its own voice and intention. Our editorial approach seeks to refine the writing while preserving the qualities that make it distinctive.' },
              { label: 'Design begins with understanding.', text: "Before decisions are made about the book's visual presentation, it is important to understand what the story is trying to communicate. Our cover and book design services support that process." },
              { label: 'The publishing journey has a clear structure.', text: 'From submission and review to design, publication, and launch, our process helps authors understand the stages involved in bringing their work to readers.' },
              { label: 'Quality matters at every stage.', text: 'A book is made up of many connected decisions, from the clarity of the writing to the presentation of the finished pages. Attention to these details helps create a more professional reading experience.' },
              { label: 'The author is a partner in the process.', text: "We value clear communication and an approach that recognizes the author's vision and involvement in the development of the book." },
            ]}
          />
        </div>
        <p className="text-gray-600 leading-relaxed">
          If you are preparing a children&apos;s picture book in Ottawa, we provide a place to begin discussing your publishing goals and the support your project may require. We invite you to explore our publishing services and share the story you have been developing.
        </p>
      </section>

      {/* 10. Take the First Step */}
      <section className="space-y-6">
        <SectionHeading icon={Sparkles} number="10" title="Take the First Step Toward Publishing With LO Publications" />
        <div className="text-lg text-gray-600 leading-relaxed space-y-4">
          <p>
            You may have been thinking about your children&apos;s picture book for months. Perhaps you have completed the manuscript but are unsure what to do next. Maybe you have an idea you believe in, but the publishing process still feels unfamiliar.
          </p>
          <p className="text-gray-900 font-medium">You do not need to have every answer before you begin.</p>
          <p>
            The first step is to clarify what you have, what you want to create, and what kind of support you need to move forward. We welcome enquiries from authors who want to learn more about our publishing process and explore the possibilities for their work.
          </p>
          <p>
            Before contacting us, consider preparing a brief description of your story, its intended audience, and the stage your manuscript has reached. If you have illustrations or a visual concept, include that information when discussing your project. Our team can review your enquiry and explain the next steps based on the nature of your book and the services available.
          </p>
          <p>
            Whether you are developing your first manuscript or preparing an existing story for publication, the goal is to help you understand the journey ahead and make informed decisions about your next steps.
          </p>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8">
          <p className="text-gray-700 font-medium">
            Your story began with imagination. Let us help you explore the path from manuscript to published book.
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-10 md:p-14">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Your Story Could Become a Childhood Memory
            </h2>
          </div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Think about the books you remember from childhood. Perhaps you can still picture a favourite character, recall the sound of a familiar sentence, or remember the comfort of hearing the same story read aloud at bedtime.
            </p>
            <p>
              Those books were more than collections of words and pictures. They became part of an experience, something familiar enough to revisit and meaningful enough to remember. Your children&apos;s picture book could become part of a young reader&apos;s story in a similar way.
            </p>
            <p>
              It might help a child understand a new feeling, encourage them to ask questions, or give a parent and child a reason to spend a few more minutes together at the end of a long day.
            </p>
            <p>
              You cannot know exactly how your story will affect every reader. But you can approach its development with care, give it the attention it deserves, and work toward presenting it in a way that reflects your original vision.
            </p>
            <p className="text-gray-900 font-medium">
              At LO Publications, we believe publishing is about more than turning manuscripts into finished books. It is about helping authors give their ideas a form that readers can experience, share, and remember.
            </p>
            <p className="text-red-600 font-medium">
              If you have a children&apos;s picture book waiting to be told, we invite you to take the next step with us.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-7 h-7 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            Frequently Asked Questions About Publishing a Children&apos;s Picture Book in Ottawa
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 rounded-[2rem] p-10 md:p-14 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Have a Picture Book Waiting to Be Told?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Share a brief description of your story, its intended audience, and the stage your manuscript has reached. We&apos;ll help you understand the next steps.
          </p>
          <Link
            href="/submit"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Submit Your Manuscript
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-gray-200 pt-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
          You Might Also Like
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/blog/how-to-choose-an-illustrator-for-your-childrens-book"
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop"
                alt="Children's book illustration"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                How to Choose an Illustrator for Your Children&apos;s Book
              </h4>
              <p className="text-gray-500 text-sm mt-2">
                What to look for in a professional illustrator — and when to submit your text only.
              </p>
            </div>
          </Link>
          <Link
            href="/blog/first-time-author-publishing-ottawa"
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop"
                alt="First-time author publishing in Ottawa"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                First-Time Author Publishing in Ottawa
              </h4>
              <p className="text-gray-500 text-sm mt-2">
                Everything aspiring authors need to know about the publishing journey in Ottawa.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}
