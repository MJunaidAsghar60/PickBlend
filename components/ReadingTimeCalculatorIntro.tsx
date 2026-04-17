import Link from "next/link";

export default function ReadingTimeCalculatorIntro() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-bold text-text">
          About This Reading Time Calculator
        </h2>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This reading time calculator is designed for bloggers, content creators, teachers,
          speakers, and anyone who needs to know how long their content takes to consume before
          publishing or presenting it. Paste your full text or simply type in a word count and the
          tool instantly calculates both reading time and speaking time at multiple speeds — no
          configuration required.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          Setting accurate reader expectations is one of the simplest ways to reduce bounce rates on
          long-form content. Readers who see a reading time estimate before a post know what they
          are committing to. For speakers and presenters, knowing your script length in minutes
          before the day arrives is the difference between a confident delivery and a rushed finish.
          This tool gives you that number for a conversational pace, a presentation pace, and a TED
          Talk pace simultaneously.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          The calculate reading time feature covers three reading speeds — slow (150 wpm), average
          (238 wpm), and fast (450 wpm) — alongside five speaking speeds from a slow, deliberate
          155 wpm up to a fast 190 wpm. Each speed is labelled with its real-world context so you
          can match the right number to your actual use case. The tool also shows content length
          benchmarks so you can see at a glance how your piece compares to a typical blog post,
          newsletter, or YouTube script.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This speaking time calculator and reading time estimator handles both modes seamlessly —
          paste a full draft to get exact times, or enter a target word count to plan content before
          you write it. Everything runs in your browser with no data leaving your device.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          For a full breakdown of your text including sentence structure and paragraph counts, pair
          this tool with our{" "}
          <Link
            href="/tools/word-counter"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Word Counter
          </Link>
          , which provides words, characters, reading time, and keyword density all in one place.
          If you want to analyse how sentence length affects readability and pacing in your writing,
          the{" "}
          <Link
            href="/tools/sentence-counter"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Sentence Counter
          </Link>{" "}
          gives you a per-sentence breakdown alongside average sentence length stats.
        </p>

        <p className="text-sm leading-relaxed text-text-secondary">
          Use this free reading time and speaking time calculator to plan blog posts, prepare
          speeches, time presentations, script podcasts, and set accurate read-time labels for any
          piece of content you publish.
        </p>
      </div>
    </div>
  );
}
