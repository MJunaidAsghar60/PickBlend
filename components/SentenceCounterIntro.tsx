import Link from "next/link";

export default function SentenceCounterIntro() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-bold text-text">
          About This Sentence Counter
        </h2>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This sentence counter is built for writers, students, and editors who want accurate
          sentence counts alongside their word count — in real time, without running a separate
          tool. Paste your text or type directly into the editor and the sentence count updates
          instantly. Whether you are checking an essay for sentence variety, reviewing a web article
          for readability, or making sure a paragraph does not run on, the count is always live.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          Average sentence length is one of the most reliable indicators of text difficulty.
          Research behind the Flesch Reading Ease formula directly uses sentence length as a primary
          variable — shorter sentences mean higher readability scores, broader audiences, and better
          engagement on the web. This tool puts that number in front of you so you can see
          immediately whether you are writing concise, accessible sentences or drifting into
          academic length territory. For most web content, an average of 15 to 20 words per
          sentence is the sweet spot.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          The detection handles common edge cases that catch simpler counters out. Abbreviations
          like Dr., Mr., and e.g. do not trigger false sentence breaks. Ellipses are treated as
          single terminal markers. The result is a sentence count you can trust for analysis rather
          than just an approximation.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This online sentence counter tracks total sentence count, average words per sentence,
          longest sentence, and shortest sentence, all updating in real time as you type. A numbered
          sentence list lets you review every sentence in sequence to spot unusually long or
          unusually short ones at a glance.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          For the full picture of your text — words, characters, reading time, and keyword density
          all together — use our{" "}
          <Link
            href="/tools/word-counter"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Word Counter
          </Link>
          , which displays sentence count alongside every other metric. If you want to break your
          text down at the paragraph level and see how sentences are distributed across each
          paragraph, the{" "}
          <Link
            href="/tools/paragraph-counter"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Paragraph Counter
          </Link>{" "}
          gives you per-paragraph sentence counts, word counts, and character counts in a numbered
          breakdown.
        </p>

        <p className="text-sm leading-relaxed text-text-secondary">
          Use this free sentence counter tool to measure sentence length across essays, articles,
          blog posts, and marketing copy, and make sure every sentence earns its place in the final
          draft.
        </p>
      </div>
    </div>
  );
}
