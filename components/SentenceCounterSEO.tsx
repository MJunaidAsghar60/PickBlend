import Link from "next/link";

export default function SentenceCounterSEO() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-12">

        {/* Section 1 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-text">What Is a Sentence Counter?</h2>
          <div className="space-y-3 text-text-secondary leading-relaxed">
            <p>
              A sentence counter is a tool that automatically detects and counts the number of sentences
              in a block of text. It works by identifying sentence-ending punctuation — periods, exclamation
              marks, and question marks — and tallying up each complete sentence. For anyone who writes
              regularly, knowing your sentence count gives you insight into your writing&rsquo;s structure,
              pace, and readability.
            </p>
            <p>
              Sentence counting pairs naturally with{" "}
              <Link href="/tools/word-counter" className="text-primary underline underline-offset-2 hover:text-primary-dark">
                word counting
              </Link>{" "}
              — together they let you calculate average sentence length, which is one of the most reliable
              indicators of how easy or difficult a piece of writing is to read. Short sentences are easier
              to process; long sentences carry more complexity.
            </p>
            <p>
              Writers, editors, teachers, and SEO professionals all rely on sentence counters to evaluate
              text. Whether you&rsquo;re checking a blog post, refining an essay, or analysing a marketing
              email, a sentence counter gives you objective data about your writing&rsquo;s structure.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-text">Why Sentence Count Matters for Writers</h2>
          <div className="space-y-3 text-text-secondary leading-relaxed">
            <p>
              Sentence count is more than a vanity metric — it directly affects how readable and engaging
              your writing is. Here is why writers of all levels pay attention to it:
            </p>
            <h3 className="mt-4 text-lg font-semibold text-text">Readability and Flow</h3>
            <p>
              Research into readability consistently shows that shorter sentences are easier to understand.
              Texts with an average sentence length of 15–20 words are considered highly readable. When your
              sentences average 30+ words, readers slow down, re-read, and sometimes give up. Sentence
              counting helps you identify where your writing becomes dense.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-text">Academic and Professional Requirements</h3>
            <p>
              Many academic institutions and style guides set expectations around sentence length and structure.
              Journalistic writing typically favours shorter sentences for clarity. Legal and technical writing
              often permits longer sentences — but even then, knowing your sentence count lets you spot
              unusually long constructions that might confuse readers.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-text">SEO and Content Writing</h3>
            <p>
              Google&rsquo;s search quality guidelines favour content that is clear and accessible. Many SEO
              tools flag content with excessively long average sentence lengths. Keeping your sentences concise
              improves both readability scores and user engagement metrics like time on page and scroll depth.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-text">How to Use This Sentence Counter Tool</h2>
          <div className="space-y-3 text-text-secondary leading-relaxed">
            <p>
              Using the PickBlend sentence counter is straightforward:
            </p>
            <ol className="ml-4 space-y-3 list-decimal">
              <li>
                <strong className="text-text">Paste or type your text</strong> into the editor. The sentence
                count updates instantly in real time — no button to click, no page to reload.
              </li>
              <li>
                <strong className="text-text">Review the sentence count</strong> alongside the word count to
                calculate your average sentence length. Divide the word count by the sentence count to get
                the average words per sentence.
              </li>
              <li>
                <strong className="text-text">Check average sentence length</strong> against readability
                guidelines. Aim for 15–20 words per sentence for general web content; shorter for mobile-first
                writing; slightly longer for academic or technical audiences.
              </li>
              <li>
                <strong className="text-text">Revise long sentences</strong> by splitting them at natural
                break points — conjunctions like &ldquo;and,&rdquo; &ldquo;but,&rdquo; and &ldquo;because&rdquo;
                are often good split points.
              </li>
            </ol>
            <p>
              All processing happens entirely in your browser. Your text is never sent to any server, making
              this tool completely private. You can also use our{" "}
              <Link href="/tools/character-counter" className="text-primary underline underline-offset-2 hover:text-primary-dark">
                character counter
              </Link>{" "}
              alongside this tool for a complete picture of your text.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-text">Sentence Length Tips and Best Practices</h2>
          <div className="space-y-3 text-text-secondary leading-relaxed">
            <p>
              Knowing your sentence count is the first step — knowing what to do with that information is
              what makes the difference in your writing. Here are actionable tips:
            </p>
            <h3 className="mt-4 text-lg font-semibold text-text">Vary Your Sentence Length</h3>
            <p>
              The goal is not to make every sentence the same length. Variation creates rhythm. A short
              sentence after a long one creates emphasis. It wakes the reader up. Professional writers
              intentionally mix short punchy sentences with longer, more nuanced ones to create momentum
              and control where the reader&rsquo;s attention lands.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-text">Watch the 30-Word Threshold</h3>
            <p>
              Sentences over 30 words become difficult to parse for most readers. If your sentence counter
              shows a high average — say, above 25 words — scan your text for sentences that can be split.
              Look for semicolons, em-dashes, and multiple clauses joined with &ldquo;which,&rdquo;
              &ldquo;that,&rdquo; or &ldquo;who&rdquo; — these are often split opportunities.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-text">One Idea Per Sentence</h3>
            <p>
              The clearest sentences express one idea at a time. When you find yourself using three or four
              conjunctions in a single sentence, that&rsquo;s a signal the sentence is doing too much.
              Break it up, and each idea will land with more force.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-text">Sentence Counter vs Word Counter — When to Use Each</h2>
          <div className="space-y-3 text-text-secondary leading-relaxed">
            <p>
              Sentence counters and word counters complement each other — they answer different questions
              about your text.
            </p>
            <p>
              Use a{" "}
              <Link href="/tools/word-counter" className="text-primary underline underline-offset-2 hover:text-primary-dark">
                word counter
              </Link>{" "}
              when you need to hit a minimum or maximum length requirement — for essays, blog posts, article
              briefs, or social media character limits. Word count is the standard measure for length
              requirements in academic, professional, and publishing contexts.
            </p>
            <p>
              Use a sentence counter when you want to evaluate the structure and readability of your writing.
              A 1,000-word article could have 40 sentences (average 25 words each — complex and dense) or
              100 sentences (average 10 words each — very accessible). The word count is identical, but
              the reading experience is completely different.
            </p>
            <p>
              Together, sentence count and word count give you the average sentence length — arguably the
              single most useful number for evaluating your writing&rsquo;s readability at a glance. You
              can also use our{" "}
              <Link href="/tools/reading-time-calculator" className="text-primary underline underline-offset-2 hover:text-primary-dark">
                reading time calculator
              </Link>{" "}
              to estimate how long your text will take to read once you have the word count.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-text">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "How does the sentence counter detect sentences?",
                a: "The sentence counter identifies sentence boundaries by detecting terminal punctuation: periods (.), exclamation marks (!), and question marks (?). It accounts for common exceptions like abbreviations (Mr., Dr., etc.) and decimal numbers to avoid false positives.",
              },
              {
                q: "What is a good average sentence length?",
                a: "For general web content, 15–20 words per sentence is ideal for readability. Journalism aims even lower — often 10–15 words. Academic writing can go longer, but even technical content benefits from keeping sentences under 30 words where possible.",
              },
              {
                q: "How many sentences should a paragraph have?",
                a: "Most style guides recommend 3–5 sentences per paragraph for web content. Longer paragraphs (6+ sentences) can feel dense on screen. For mobile readers, even 2–3 sentences per paragraph can improve scanning and comprehension.",
              },
              {
                q: "Does the sentence counter work with multiple paragraphs?",
                a: "Yes — paste any amount of text and the counter handles multiple paragraphs, headers, lists, and mixed content. It counts all sentences across the entire text block, not just the current paragraph.",
              },
              {
                q: "Is this sentence counter free?",
                a: "Yes, completely free. No account, no sign-up, no usage limits. Everything runs in your browser — your text is never sent to a server.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-text">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Tools */}
        <section className="rounded-2xl border border-border bg-surface-alt p-6">
          <h2 className="mb-4 text-lg font-bold text-text">Related Writing Tools</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/tools/word-counter" className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary shadow-sm">
              Word Counter
            </Link>
            <Link href="/tools/character-counter" className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary shadow-sm">
              Character Counter
            </Link>
            <Link href="/tools/reading-time-calculator" className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary shadow-sm">
              Reading Time Calculator
            </Link>
            <Link href="/tools/case-converter" className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary shadow-sm">
              Text Case Converter
            </Link>
            <Link href="/tools/lorem-ipsum-generator" className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary shadow-sm">
              Lorem Ipsum Generator
            </Link>
            <Link href="/tools" className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary shadow-sm">
              All Tools →
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
