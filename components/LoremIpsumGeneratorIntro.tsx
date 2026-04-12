import Link from "next/link";

export default function LoremIpsumGeneratorIntro() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-bold text-text">
          About This Lorem Ipsum Generator
        </h2>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This free Lorem Ipsum generator is built for designers, developers, and content creators
          who need realistic placeholder text for mockups, prototypes, and layout testing. Set your
          parameters, click generate, and a block of placeholder text appears instantly — ready to
          copy into Figma, Sketch, your code editor, or a CMS staging environment. No sign-up, no
          limits, completely free.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          The core benefit of Lorem Ipsum over real text in early design work is neutrality. Because
          the pseudo-Latin words carry no meaning to most readers, they do not distract from
          evaluating layout, typography, spacing, and hierarchy. Placeholder text that looks like
          real content — the right density, the right rhythm of short and long words — lets a design
          be judged on its own visual merits before the real copy exists. This dummy text generator
          creates that neutral filler in the exact quantity you specify.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          Three output modes give you the right level of control for different stages of work. The
          paragraphs mode generates full blocks of 40 to 80 words each, which is useful for article
          layouts, blog post templates, and CMS demos. Sentences mode outputs individual lines,
          which works well for list items, card text, and shorter content slots. Words mode lets you
          fill a specific character budget when you know exactly how much space you have. The classic
          Lorem ipsum opening can be toggled on to begin with the traditional &ldquo;Lorem ipsum dolor
          sit amet&rdquo; phrase, and an HTML format option wraps each paragraph in &lt;p&gt; tags
          for direct use in front-end code.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This Lorem Ipsum placeholder text generator produces content by paragraphs, sentences, or
          words in amounts from 1 to 50, with optional classic opening and HTML paragraph tag
          wrapping. Every generation is unique — click Generate again to get a fresh random output
          with the same settings.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          Once your layout is populated with placeholder text, use our{" "}
          <Link
            href="/tools/word-counter"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Word Counter
          </Link>{" "}
          to verify the generated text fills your expected word count and reading time before
          swapping in real content. If you need to check how the text fits within a character limit
          for a specific slot, the{" "}
          <Link
            href="/tools/character-counter"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Character Counter
          </Link>{" "}
          measures it against the platform or UI field limits you are designing for.
        </p>

        <p className="text-sm leading-relaxed text-text-secondary">
          Use this free Lorem Ipsum generator to fill design mockups, test typographic layouts,
          populate CMS templates, and produce dummy text in HTML or plain text format for any web
          or app development project.
        </p>
      </div>
    </div>
  );
}
