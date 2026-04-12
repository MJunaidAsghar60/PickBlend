import Link from "next/link";

export default function CharacterCounterIntro() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-bold text-text">
          About This Character Counter
        </h2>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This character counter is built for social media managers, SEO writers, marketers, and
          anyone who works within strict character limits every day. Type or paste your text and the
          count updates character by character in real time — no submit button, no waiting. The tool
          counts both characters with spaces and characters without spaces simultaneously, so you
          always have the right figure for whichever platform or field you are writing for.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          Platform character limits are displayed as a live tracker below your text. Ten platforms
          are monitored in parallel — Twitter posts, Instagram captions, Facebook posts, LinkedIn
          updates, YouTube titles, TikTok captions, meta titles, meta descriptions, email subject
          lines, and SMS messages. Each limit shows a progress bar that turns amber as you approach
          the threshold and red when you exceed it, so you can catch overruns before they cost you a
          publish or a truncated snippet in search results.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          For SEO content writers, the ability to check meta titles and meta descriptions against
          Google character limits without switching tabs is a genuine time saver. Meta descriptions
          cut off at around 155 to 160 characters in most search result displays; meta titles
          truncate at around 60 characters. Writing within those bounds directly in this online
          character counter means you never have to guess whether your snippet will display in full.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This online character count tool tracks characters with spaces, characters without spaces,
          words, lines, and paragraphs — all in real time. The spaces toggle lets you switch the
          main display between the two character counts instantly, and your text is auto-saved to
          localStorage so it persists across browser sessions without any account needed.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          If you need the full suite of text metrics alongside your character count, our{" "}
          <Link
            href="/tools/word-counter"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Word Counter
          </Link>{" "}
          adds reading time, speaking time, sentence count, and keyword density to the picture. To
          reformat text before checking its length, the{" "}
          <Link
            href="/tools/case-converter"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Case Converter
          </Link>{" "}
          lets you switch between uppercase, lowercase, title case, and ten other formats in one
          click, then copy directly to this tool.
        </p>

        <p className="text-sm leading-relaxed text-text-secondary">
          Use this free character counter to write within Twitter and Instagram limits, optimise
          meta descriptions for SEO, stay inside SMS character boundaries, and craft any text where
          every character counts.
        </p>
      </div>
    </div>
  );
}
