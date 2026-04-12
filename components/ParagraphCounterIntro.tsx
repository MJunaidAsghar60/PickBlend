import Link from "next/link";

export default function ParagraphCounterIntro() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-bold text-text">
          About This Paragraph Counter
        </h2>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This paragraph counter is built for writers, students, bloggers, and editors who want a
          structural breakdown of their text — not just a total word count, but an understanding of
          how that content is distributed across paragraphs. Paste your draft and the tool
          immediately shows how many paragraphs you have, how words and sentences are spread across
          them, and which paragraphs are pulling more weight than others.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          For long-form writers and bloggers, paragraph structure is one of the strongest drivers
          of on-page engagement. Dense paragraphs of 150 words or more look like walls of text on a
          screen and cause readers to scroll past. Most readability guidance for web content
          recommends 40 to 80 words per paragraph, with shorter paragraphs for mobile-heavy
          audiences. This online paragraph word count tool makes it easy to identify which
          paragraphs in your draft exceed that range so you can split them before publishing.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          The per-paragraph breakdown goes beyond just counting paragraphs. Each paragraph in the
          numbered list shows its word count, sentence count, character count, and average word
          length, so you can audit the internal structure of every block of text. Students working
          to a specific paragraph length requirement can check each section individually. Editors
          reviewing a submitted article can spot structural imbalances without reading the whole
          piece first.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This paragraph counter tracks total paragraph count, total words, total sentences, total
          characters, average words per paragraph, average sentences per paragraph, longest
          paragraph, and shortest paragraph — all updating live as you type. The numbered
          per-paragraph panel shows the full text of each block with its individual stats row
          beneath it.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          For the complete set of text metrics including reading time and keyword density, our{" "}
          <Link
            href="/tools/word-counter"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Word Counter
          </Link>{" "}
          covers every stat alongside your paragraph count in a single view. If you want to analyse
          sentence-level structure within those paragraphs and check average sentence length across
          your whole document, the{" "}
          <Link
            href="/tools/sentence-counter"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Sentence Counter
          </Link>{" "}
          gives you a sentence-by-sentence numbered breakdown to pair with the paragraph view.
        </p>

        <p className="text-sm leading-relaxed text-text-secondary">
          Use this free paragraph counter to review long-form drafts for structural balance,
          ensure academic writing meets paragraph length requirements, identify dense content
          blocks before publishing, and get a clear picture of how your writing is structured at
          every level.
        </p>
      </div>
    </div>
  );
}
