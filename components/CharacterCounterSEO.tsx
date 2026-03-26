import Link from "next/link";

export default function CharacterCounterSEO() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-12">

        {/* Section 1 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-text">What Is a Character Counter?</h2>
          <div className="space-y-3 text-text-secondary leading-relaxed">
            <p>
              A character counter is a simple but powerful tool that counts the number of individual characters
              in a piece of text. Every letter, number, punctuation mark, space, and symbol counts as one
              character. When you type &ldquo;Hello, World!&rdquo; into a character counter, it reports 13
              characters (including the comma and exclamation mark).
            </p>
            <p>
              Character counters are essential for anyone who writes content for digital platforms. Unlike a{" "}
              <Link href="/tools/word-counter" className="text-primary underline underline-offset-2 hover:text-primary-dark">
                word counter
              </Link>
              , which counts the number of words, a character counter gives you a precise figure that matches
              the character limits enforced by most social media platforms, ad systems, and SEO tools.
            </p>
            <p>
              Our free character counter works entirely in your browser — your text is never sent to any
              server. It updates in real time as you type, so you always know exactly where you stand.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-text">Why Character Count Matters for Social Media</h2>
          <div className="space-y-3 text-text-secondary leading-relaxed">
            <p>
              Every major social media platform enforces character limits on posts, bios, and captions. Going
              over the limit means your content gets cut off, your post fails to publish, or your ad copy
              gets rejected. Staying under the limit while maximising the impact of every character is a skill
              that separates effective communicators from average ones.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-text">Twitter/X Character Limits</h3>
            <p>
              Twitter (now X) enforces a <strong className="text-text">280-character limit</strong> on posts
              for standard accounts. This replaced the original 140-character limit in 2017. Profile bios are
              capped at <strong className="text-text">160 characters</strong>. Twitter Premium subscribers
              can post longer content, but the 280-character limit is what most users experience.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-text">Instagram Character Limits</h3>
            <p>
              Instagram captions can be up to <strong className="text-text">2,200 characters</strong>, though
              only the first 125 characters show before the &ldquo;More&rdquo; button appears in the feed.
              Profile bios are limited to <strong className="text-text">150 characters</strong>. Hashtags
              count toward the character limit, so planning your caption carefully is important.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-text">LinkedIn Character Limits</h3>
            <p>
              LinkedIn posts allow up to <strong className="text-text">3,000 characters</strong>. LinkedIn
              is a professional platform where longer, more detailed posts often perform well — but only if
              the content earns the reader&rsquo;s attention in the first 210 visible characters before the
              &ldquo;See more&rdquo; prompt appears.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-text">Character vs Word Count — What&rsquo;s the Difference?</h2>
          <div className="space-y-3 text-text-secondary leading-relaxed">
            <p>
              Character count and word count both measure the length of text, but they measure different
              things and are used in different contexts.
            </p>
            <p>
              <strong className="text-text">Word count</strong> counts the number of discrete words in your
              text. It&rsquo;s the standard metric for essays, articles, books, and academic writing. When
              your professor says &ldquo;write a 1,000-word essay,&rdquo; they mean word count. Our{" "}
              <Link href="/tools/word-counter" className="text-primary underline underline-offset-2 hover:text-primary-dark">
                word counter tool
              </Link>{" "}
              handles this perfectly.
            </p>
            <p>
              <strong className="text-text">Character count</strong> counts every individual character —
              including spaces, punctuation, and numbers. It&rsquo;s the standard metric for digital platforms
              and technical constraints. When Twitter says 280 characters, it means character count.
            </p>
            <p>
              As a rough guideline, the average English word is about 5 characters long, plus one space,
              making the average word approximately 6 characters. So a 280-character tweet contains roughly
              46 words.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-text">Meta Description Character Limits for SEO</h2>
          <div className="space-y-3 text-text-secondary leading-relaxed">
            <p>
              In SEO, character limits are critical for meta tags that appear in Google search results. Getting
              these right improves click-through rates and ensures your message is never cut off.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-text">Meta Title Tag</h3>
            <p>
              Google typically displays the first <strong className="text-text">50–60 characters</strong> of a
              page title in search results. Titles longer than 60 characters are often truncated. Keep your
              most important keywords within the first 55 characters for maximum impact.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-text">Meta Description</h3>
            <p>
              Meta descriptions should be between <strong className="text-text">150–160 characters</strong>.
              Google may truncate descriptions longer than 160 characters. A well-crafted meta description
              summarises your page content and includes a natural call-to-action to encourage clicks.
            </p>
            <p>
              Use our character counter to check your meta title and description length before publishing.
              Switch the platform limits panel to see the exact thresholds highlighted in real time.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-text">SMS Character Limits Explained</h2>
          <div className="space-y-3 text-text-secondary leading-relaxed">
            <p>
              SMS messages have a hard limit of <strong className="text-text">160 characters</strong> per
              single message when using standard GSM-7 encoding (the default for Latin alphabet text). If
              your message exceeds 160 characters, it is split into multiple parts (called concatenated SMS),
              and each part has a slightly reduced limit of 153 characters due to header data.
            </p>
            <p>
              For business SMS campaigns, staying within 160 characters per message is important both for
              delivery reliability and cost — as most providers charge per SMS segment.
            </p>
            <p>
              If your SMS contains characters outside the GSM-7 character set (such as emoji or accented
              characters), the encoding switches to Unicode UCS-2, which reduces the single-SMS limit to
              70 characters.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-text">How to Use This Character Counter Tool</h2>
          <div className="space-y-3 text-text-secondary leading-relaxed">
            <p>
              Using our free character counter is simple and requires no setup:
            </p>
            <ol className="ml-4 space-y-3 list-decimal">
              <li>
                <strong className="text-text">Type or paste your text</strong> into the large editor area.
                Character counts update instantly as you type.
              </li>
              <li>
                <strong className="text-text">Toggle &ldquo;Count spaces&rdquo;</strong> to switch between
                counting characters with spaces (the default) or without spaces — useful for platforms that
                specify character limits differently.
              </li>
              <li>
                <strong className="text-text">Check the platform limits panel</strong> to see how your current
                character count compares to popular platforms. The progress bars turn orange as you approach
                the limit and red when you exceed it.
              </li>
              <li>
                <strong className="text-text">Copy your text</strong> to the clipboard with a single click
                once you&rsquo;re satisfied with the length.
              </li>
            </ol>
            <p>
              Your text is automatically saved to your browser, so you can close the tab and return later
              without losing your work. Need to convert text while writing?{" "}
              <Link href="/tools/case-converter" className="text-primary underline underline-offset-2 hover:text-primary-dark">
                Try our case converter
              </Link>{" "}
              for instant text transformation.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-text">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What is the difference between characters with and without spaces?",
                a: "Characters with spaces counts every character including spaces, which is how most platforms (Twitter, Instagram, SMS) measure limits. Characters without spaces counts only letters, numbers, and punctuation — no spaces. This is sometimes used for technical constraints like database column lengths.",
              },
              {
                q: "What is the character limit for Twitter?",
                a: "Standard Twitter/X accounts have a 280-character limit per post. Twitter bios are limited to 160 characters. Twitter Premium subscribers may post longer content, but 280 characters is the standard limit for most users.",
              },
              {
                q: "How many characters is a meta description?",
                a: "Google displays meta descriptions up to approximately 155–160 characters in search results. Descriptions longer than 160 characters are typically truncated with an ellipsis. We recommend aiming for 150–158 characters to stay safely within limits.",
              },
              {
                q: "What counts as a character?",
                a: "In text, a character is any single unit of written language — this includes letters (A-Z, a-z), digits (0-9), punctuation marks (,.!?), symbols (@#$%), spaces, and line breaks. Even a space is a character. Our counter includes all of these by default, with an option to exclude spaces.",
              },
              {
                q: "Is this character counter free to use?",
                a: "Yes, completely free. No account required, no sign-up, no usage limits. All processing happens in your browser — your text is never sent to any server.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-text">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="rounded-2xl border border-border bg-surface-alt p-6">
          <h2 className="mb-4 text-lg font-bold text-text">Related Writing Tools</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/tools/word-counter" className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary shadow-sm">
              Word Counter
            </Link>
            <Link href="/tools/case-converter" className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary shadow-sm">
              Text Case Converter
            </Link>
            <Link href="/tools/reading-time-calculator" className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary shadow-sm">
              Reading Time Calculator
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
