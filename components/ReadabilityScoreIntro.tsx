import Link from "next/link";

export default function ReadabilityScoreIntro() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-bold text-text">
          About This Readability Score Checker
        </h2>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This readability score checker is built for writers, bloggers, students, and content
          marketers who want to know whether their text is accessible to their target audience.
          Paste your content into the editor and six industry-standard readability scores calculate
          instantly. No waiting, no submitting, no configuration — the scores refresh automatically
          as you write or edit.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          Most writers know roughly whether their text feels simple or complex, but the scores turn
          that feeling into a number you can actually act on. The Flesch Reading Ease score runs
          from 0 to 100 — higher means easier to read. Blog posts aimed at a general audience
          typically score between 60 and 70. The Flesch-Kincaid Grade Level translates that same
          analysis into the US school grade a reader needs to comfortably follow the text. Both are
          displayed alongside four additional formulas so you can see whether a single outlier score
          reflects a genuine issue or just one formula&apos;s quirks.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          The six formulas this free readability test runs in parallel are Flesch Reading Ease,
          Flesch-Kincaid Grade Level, Gunning Fog Index, SMOG Index, Automated Readability Index
          (ARI), and Coleman-Liau Index. Each formula weights sentence length and word complexity
          differently, so seeing all six together gives you a consensus view of your text&apos;s
          difficulty. A visual gauge shows where your Flesch score falls along the difficulty scale
          from Very Easy through Very Difficult, and actionable recommendations highlight exactly
          what to fix to improve your score.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This online readability checker runs all six readability formulas simultaneously, shows a
          visual difficulty gauge, surfaces average sentence length and syllables per word, and
          provides specific recommendations for improving your score — all updating live as you
          type.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          For a full text analysis alongside your readability scores, our{" "}
          <Link
            href="/tools/word-counter"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Word Counter
          </Link>{" "}
          adds word count, reading time, speaking time, and keyword density to the picture. Since
          readability scores are directly driven by sentence length, the{" "}
          <Link
            href="/tools/sentence-counter"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Sentence Counter
          </Link>{" "}
          helps you spot and break up your longest sentences to push your Flesch score in the right
          direction.
        </p>

        <p className="text-sm leading-relaxed text-text-secondary">
          Use this free readability score checker to make blog posts more accessible, ensure
          student essays meet grade-level targets, evaluate content marketing copy, and verify that
          any text you publish is matched to the reading level of your intended audience.
        </p>
      </div>
    </div>
  );
}
