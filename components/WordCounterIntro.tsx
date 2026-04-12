import Link from "next/link";

export default function WordCounterIntro() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-bold text-text">
          About This Free Word Counter Tool
        </h2>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This free word counter is built for writers, students, bloggers, and anyone who works with
          text. Paste or type your content into the editor and every metric updates instantly — no
          button clicks, no page reloads. Whether you are hitting a 500-word assignment limit,
          polishing a 2,000-word blog post, or checking a social media caption, the count is always
          live in front of you.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          Beyond raw word count, this tool surfaces the numbers that matter for real writing work.
          You get character count, sentence count, paragraph count, estimated reading time, estimated
          speaking time, and a keyword density panel — all calculated from the same text, all at
          once. For SEO writers, the keyword density analysis shows your top content words alongside
          their frequency and percentage, so you can confirm your target keywords land at the right
          weight without guessing.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          Your text is never sent to any server. Everything runs locally in your browser, and the
          tool saves your work automatically using localStorage. Come back an hour later, close the
          tab and reopen it — your text will still be there, exactly as you left it. No account
          needed, no sign-up, completely free.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This online word count tool tracks words, characters with and without spaces, sentences,
          paragraphs, reading time at 275 wpm, speaking time at 130 wpm, and your top keywords by
          density — all refreshing in real time as you type. Text case conversion (UPPER, lower,
          Sentence case) is available directly in the toolbar for quick transformations without
          leaving the page.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          If you want to go deeper into reading time calculations, our{" "}
          <Link
            href="/tools/reading-time-calculator"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Reading Time Calculator
          </Link>{" "}
          lets you choose from multiple reading and speaking speeds and gives you a breakdown
          benchmarked against blog posts, TED talks, and podcast scripts. For detailed character
          limit checking across social platforms and SEO meta tags, the{" "}
          <Link
            href="/tools/character-counter"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Character Counter
          </Link>{" "}
          tracks ten platforms in real time with visual limit indicators.
        </p>

        <p className="text-sm leading-relaxed text-text-secondary">
          Use this free word counter tool for essays, articles, blog posts, social captions,
          speeches, scripts, and any other writing where word count and text stats need to be
          accurate.
        </p>
      </div>
    </div>
  );
}
