import Link from "next/link";

export default function WordFrequencyIntro() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-bold text-text">
          About This Word Frequency Counter
        </h2>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This word frequency counter is built for SEO writers, content creators, and researchers
          who need to see exactly which words appear in their text, how often, and at what density.
          Paste your content and the full frequency table populates instantly, ranked from most used
          to least used. Every edit to your text updates the table in real time so you can watch
          your keyword distribution shift as you write.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          For SEO content writers, keyword density analysis is one of the most practical reasons to
          run a word frequency check. Knowing that your primary keyword appears at 1.8% of total
          words is far more useful than a gut feeling that you have mentioned it enough. The flip
          side is equally important — seeing that a word you did not intend as a keyword appears at
          3% tells you it is dominating your content in a way that might look like over-optimisation
          to a search crawler. This word frequency analysis tool makes those patterns visible
          immediately.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          Stop word filtering is on by default, which removes common function words like &ldquo;the&rdquo;,
          &ldquo;a&rdquo;, &ldquo;is&rdquo;, and &ldquo;and&rdquo; from the table so the results surface your meaningful content
          words straight away. Toggle it off if you are doing linguistic research or writing style
          analysis where function word patterns matter. The minimum word length control filters out
          very short words, the top N selector narrows the table to your most frequent terms, and
          every column — rank, word, count, and percentage — is sortable with a click.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This keyword density checker and word frequency analyzer tracks total word count, unique
          word count, vocabulary richness percentage, and a sortable ranked table with visual
          frequency bars showing each word&apos;s relative weight in your content. A Copy Table button
          exports the full results as tab-separated data for use in spreadsheets.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          To get the full word and character counts for the same text, use our{" "}
          <Link
            href="/tools/word-counter"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Word Counter
          </Link>
          , which also shows a quick keyword density summary for your top ten terms. For a
          readability analysis of the same content — especially useful when word frequency shows
          you are using complex vocabulary — the{" "}
          <Link
            href="/tools/readability-score"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Readability Score Checker
          </Link>{" "}
          calculates six formulas including Flesch Reading Ease and Gunning Fog to show how
          accessible your writing is.
        </p>

        <p className="text-sm leading-relaxed text-text-secondary">
          Use this free word frequency counter to audit keyword density in SEO content, analyse
          vocabulary richness in academic writing, identify overused words in any draft, and
          understand the exact distribution of language across any piece of text.
        </p>
      </div>
    </div>
  );
}
