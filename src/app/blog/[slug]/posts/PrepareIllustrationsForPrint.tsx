// app/blog/[slug]/posts/PrepareIllustrationsForPrint.tsx

import {
  CheckCircle,
  Printer,
  Image as ImageIcon,
  Palette,
  Ruler,
  Crop,
  FileText,
  Users,
  Type,
  Search,
  Layers,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

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

export default function PrepareIllustrationsForPrint() {
  return (
    <article className="max-w-4xl mx-auto space-y-20">
      {/* Hero */}
      <header className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          <Printer className="w-4 h-4" />
          Children&apos;s Books — Print Production
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          How to Prepare Children&apos;s Book Illustrations for Print
        </h1>

        <p className="text-xl text-gray-500 italic border-l-4 border-red-500 pl-6 py-2">
          Beautiful artwork is only half the job. Before you send files to the printer, every illustration needs to be prepared for print.
        </p>

        <div className="max-w-none text-lg text-gray-600 leading-relaxed space-y-6">
          <p>
            Children&apos;s books are visual experiences. Illustrations help young readers imagine, learn, explore emotions, and connect with characters.
          </p>
          <p>
            Proper preparation protects image quality, keeps colours accurate, and gives your book a professional finish. Here is a practical guide to preparing children&apos;s book illustrations for print.
          </p>
        </div>
      </header>

      {/* 1. Resolution */}
      <section className="space-y-6">
        <SectionHeading icon={ImageIcon} number="1" title="Choose the Right Image Resolution" />
        <div className="text-lg text-gray-600 leading-relaxed space-y-4">
          <p>
            Images that look sharp on a computer or phone screen can print blurry or pixelated. Prepare your illustrations at the resolution your printer requires.
          </p>
          <p>
            For most children&apos;s books, <strong className="text-gray-900">300 DPI</strong> (dots per inch, or more precisely PPI, pixels per inch, for digital images) at the final print size is the widely accepted standard for raster images. A full-page illustration must be created or exported at a size that supports the entire page without losing detail.
          </p>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
          <p className="text-gray-700">
            <strong>Tip:</strong> Don&apos;t enlarge small images to fit larger pages, as this reduces print quality. Always work from the original high-resolution artwork.
          </p>
        </div>
      </section>

      {/* 2. Colour mode */}
      <section className="space-y-6">
        <SectionHeading icon={Palette} number="2" title="Use the Correct Colour Mode (RGB vs CMYK)" />
        <p className="text-lg text-gray-600 leading-relaxed">
          Colours can look different on screen than on paper because screens use RGB, while most commercial printing uses CMYK.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">RGB (Red, Green, Blue)</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Used for digital displays.</p>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">CMYK (Cyan, Magenta, Yellow, Black)</h3>
            <p className="text-gray-700 text-sm leading-relaxed">Used in commercial printing.</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Confirm the required colour profile with your printer. If CMYK files are required, convert your artwork using an appropriate profile and review the results. Vivid blues and greens often look less intense in print, so check a proof before printing the full book.
        </p>
      </section>

      {/* 3. Book size */}
      <section className="space-y-6">
        <SectionHeading icon={Ruler} number="3" title="Design Illustrations to Fit the Book Size" />
        <p className="text-lg text-gray-600 leading-relaxed">
          Prepare every illustration for the final dimensions of your book. Artwork made for a large activity book won&apos;t fit a smaller picture book without resizing or recomposing.
        </p>
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
          <p className="font-medium text-gray-900 mb-4">Before finalizing your artwork, establish:</p>
          <CheckList
            items={[
              { text: 'The finished book size' },
              { text: 'The page dimensions and orientation' },
              { text: 'The placement of illustrations on each page' },
              { text: 'Whether any images extend to the page edges' },
              { text: 'The space needed for text, page numbers, and other design elements' },
            ]}
          />
        </div>
        <p className="text-gray-600 leading-relaxed">
          Planning these details early keeps the book consistent and avoids costly design changes later.
        </p>
      </section>

      {/* 4. Bleed */}
      <section className="space-y-6">
        <SectionHeading icon={Crop} number="4" title="Include Bleed and Safe Margins" />
        <div className="text-lg text-gray-600 leading-relaxed space-y-4">
          <p>
            If an illustration or background colour reaches the edge of the page, your file needs <strong className="text-gray-900">bleed</strong>: extra artwork that extends beyond the final trim line. Bleed allows for small cutting variations and prevents unwanted white edges.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-100 rounded-3xl p-6">
            <p className="text-4xl font-bold text-red-600 mb-2">3 mm</p>
            <p className="text-gray-700 text-sm">
              Roughly 0.125 in of bleed on each applicable edge is what many printers request, but requirements vary, so always follow your printer&apos;s template and specifications.
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe margins</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The area inside the trim line where text, faces, and essential details should stay. On double-page spreads, keep important details away from the centre binding, where content can be hard to see.
            </p>
          </div>
        </div>
      </section>

      {/* 5. File format */}
      <section className="space-y-6">
        <SectionHeading icon={FileText} number="5" title="Select the Right File Format" />
        <p className="text-lg text-gray-600 leading-relaxed">
          Your file format affects both print quality and reliability. Common options include:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'PDF', desc: 'The most widely used format for complete, print-ready pages, exported to the printer’s specifications.' },
            { title: 'TIFF', desc: 'Often suitable for high-quality raster illustrations.' },
            { title: 'PNG', desc: 'Useful when you need transparency during design, though not every printer prefers it as a final format.' },
            { title: 'EPS or vector PDF', desc: 'Suitable for vector illustrations when your software and printer support them.' },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed">
          For a complete children&apos;s book, a print-ready PDF is usually the most practical choice because it combines text, illustrations, and layouts in one file. Embed your fonts as your printer requires, and confirm that images were not compressed or downsampled during export.
        </p>
      </section>

      {/* 6. Consistency */}
      <section className="space-y-6">
        <SectionHeading icon={Users} number="6" title="Keep Illustrations Consistent" />
        <p className="text-lg text-gray-600 leading-relaxed">
          Children&apos;s books rely on recurring characters, settings, and visual themes. Consistency helps young readers recognize characters and follow the story.
        </p>
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
          <p className="font-medium text-gray-900 mb-4">Before finalizing, review your illustrations for consistency in:</p>
          <CheckList
            items={[
              { text: 'Character appearance and clothing' },
              { text: 'Colours and illustration style' },
              { text: 'Proportions and facial expressions' },
              { text: 'Lighting, shadows, and backgrounds' },
              { text: 'How each image matches the written story' },
            ]}
          />
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8">
          <p className="text-gray-700">
            If a character carries a blue backpack in one scene, it shouldn&apos;t turn red in the next unless the story explains why. A visual reference sheet helps illustrators and authors keep these details aligned. For more on working with an artist, read{' '}
            <Link href="/blog/how-to-choose-an-illustrator-for-your-childrens-book" className="text-red-600 hover:underline font-semibold">
              how to choose an illustrator for your children&apos;s book
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 7. Text placement */}
      <section className="space-y-6">
        <SectionHeading icon={Type} number="7" title="Check Text and Illustration Placement" />
        <p className="text-lg text-gray-600 leading-relaxed">
          Text and illustrations should work together, not compete. Especially in early-reader books, the layout should make the story easy to follow.
        </p>
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
          <p className="font-medium text-gray-900 mb-4">Review every page to confirm that:</p>
          <CheckList
            items={[
              { text: 'Text doesn’t cover important parts of an illustration' },
              { text: 'There is enough contrast between text and background' },
              { text: 'Text stays readable at the final printed size' },
              { text: 'Page turns reveal scenes in the intended order' },
            ]}
          />
        </div>
        <p className="text-gray-600 leading-relaxed">
          Consider your readers&apos; age, too. Books for very young children benefit from simple compositions, large illustrations, and clear visual storytelling.
        </p>
      </section>

      {/* 8. Review */}
      <section className="space-y-6">
        <SectionHeading icon={Search} number="8" title="Review the Artwork for Printing Errors" />
        <p className="text-lg text-gray-600 leading-relaxed">
          Inspect every illustration before exporting your final files. Look for spelling mistakes in illustrated text, rough edges, stray marks, missing elements, and inconsistent colours. Pay close attention to thin lines, small text, and subtle colour differences that are easy to miss on screen.
        </p>
        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-5">Final checklist</h3>
          <CheckList
            items={[
              { text: 'All illustrations are present and in the correct order' },
              { text: 'Images are sharp at the final print size' },
              { text: 'Colours were reviewed with the intended print settings' },
              { text: 'No important details fall outside the safe area' },
              { text: 'Bleed is included where required' },
              { text: 'Illustrations match the approved book layout' },
              { text: 'The exported PDF matches the printer’s specifications' },
            ]}
          />
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
          <p className="text-gray-700">
            Whenever possible, request a <strong>physical proof</strong> before approving a full print run. A printed sample shows you the real colours, sharpness, paper quality, and overall look of the book.
          </p>
        </div>
      </section>

      {/* 9. Paper */}
      <section className="space-y-6">
        <SectionHeading icon={Layers} number="9" title="Choose Paper That Complements Your Illustrations" />
        <p className="text-lg text-gray-600 leading-relaxed">
          Paper changes how illustrations look and feel. Gloss-coated paper makes colours vibrant and suits picture books with bold artwork. Matte or uncoated paper gives a softer finish and may suit educational books or gentler designs.
        </p>
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
          <p className="font-medium text-gray-900 mb-4">When choosing, consider:</p>
          <CheckList
            items={[
              { text: 'How vibrant you want the illustrations to appear' },
              { text: 'How often young children will handle the book' },
              { text: 'Page thickness and durability' },
              { text: 'The overall weight and feel of the finished book' },
              { text: 'Printing and binding costs' },
            ]}
          />
        </div>
        <p className="text-gray-600 leading-relaxed">
          Discuss paper stocks with your printer to find the best fit for your book.
        </p>
      </section>

      {/* 10. Professional team */}
      <section className="space-y-6">
        <SectionHeading icon={Sparkles} number="10" title="Work with a Professional Publishing Team" />
        <div className="text-lg text-gray-600 leading-relaxed space-y-4">
          <p>
            Preparing illustrations for print means managing image quality, layout, colour, and technical specifications. Even beautiful artwork loses impact when files aren&apos;t set up correctly.
          </p>
          <p>
            An experienced publishing team can catch problems before printing, keep pages consistent, and make sure the finished book meets professional standards. At LO Publications, we support authors from manuscript development and editing through{' '}
            <Link href="/services#book-design" className="text-red-600 hover:underline font-semibold">
              book cover design
            </Link>
            ,{' '}
            <Link href="/services#book-design" className="text-red-600 hover:underline font-semibold">
              interior formatting
            </Link>
            , and publishing.
          </p>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-10 md:p-14">
        <div className="max-w-3xl space-y-6 text-lg text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-bold text-gray-900">Final Thoughts</h2>
          <p>
            Print-ready illustrations depend on careful attention to resolution, colour settings, bleed, margins, file formats, layout, and proofing. Follow these steps and you&apos;ll avoid the most common printing problems, so your artwork looks as good on the page as it does on screen.
          </p>
          <p className="text-gray-900 font-medium">
            Have a children&apos;s book manuscript ready for publication? Explore our{' '}
            <Link href="/services" className="text-red-600 hover:underline">
              publishing services
            </Link>{' '}
            and take the next step.
          </p>
          <p className="text-red-600 font-medium italic">
            Publish Your Book. Build Your Authority. Reach Your Audience.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 rounded-[2rem] p-10 md:p-14 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Print Your Picture Book?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our team prepares covers, interiors and print-ready files so your illustrations look their best on paper.
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
            href="/blog/how-to-publish-a-childrens-picture-book-ottawa"
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop"
                alt="Child reading a picture book"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                How to Publish a Children&apos;s Picture Book in Ottawa
              </h4>
              <p className="text-gray-500 text-sm mt-2">
                From your imagination to the printed page — every step of the journey.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}
