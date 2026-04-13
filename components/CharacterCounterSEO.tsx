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
                q: "How many characters is a post on X in 2026?",
                a: "A standard post on X has a character limit of 280 characters in 2026 for regular accounts. This character limit includes spaces, punctuation, hashtags and mentions. URLs are automatically shortened to 23 characters by X regardless of their original length so a long URL counts as just 23 characters toward your limit. X Premium subscribers have access to extended post lengths but the 280-character limit applies to the vast majority of users. Our character counter tracks your X character count in real time showing you exactly how many characters remain before you hit the limit.",
              },
              {
                q: "What is the ideal meta description length for SEO?",
                a: "The ideal meta description length for SEO is between 150 and 160 characters including spaces. Meta descriptions shorter than 120 characters may be automatically expanded by Google with text pulled from your page content. Descriptions over 160 characters get truncated with an ellipsis in Google search results which cuts off your call to action at the worst possible moment. Writing meta descriptions between 145 and 158 characters gives you a safe margin across all devices and screen sizes. Our character counter shows your meta description length in real time with a live indicator highlighting when you approach the 160-character SEO limit.",
              },
              {
                q: "How many characters is an SMS message in 2026?",
                a: "A standard SMS message in 2026 using GSM-7 encoding has a character limit of 160 characters. This 160-character SMS limit has been the standard since the protocol was designed in the 1980s based on postcard length research. Including a single emoji or special character forces the encoding to switch from GSM-7 to Unicode UCS-2 which drops the limit dramatically to just 70 characters per message. Messages exceeding the limit are split into multiple segments each billed separately by carriers. Our character counter shows your SMS character count with a live warning when you approach the 160-character SMS limit.",
              },
              {
                q: "What is the Instagram bio character limit?",
                a: "The Instagram bio character limit is 150 characters including spaces, emoji and line breaks. Within this 150-character Instagram bio limit you need to communicate your identity, value proposition and a clear call to action — which requires careful editing. Emoji count as one or two characters each depending on the specific emoji. Line breaks count as one character. Every character in an Instagram bio is visible to visitors since bios are never truncated on profile pages unlike captions which are cut after 125 characters in the feed. Our character counter tracks your Instagram bio length against the 150-character limit in real time.",
              },
              {
                q: "Does character count include spaces?",
                a: "Whether character count includes spaces depends entirely on the context and platform. Most social media platforms including X, Instagram and LinkedIn count spaces as characters toward their post limits. For SEO purposes meta title and description character counts also include spaces. SMS messages count spaces as characters toward the 160-character limit. Our character counter displays both the total character count including spaces and the count excluding spaces simultaneously so you can check both metrics at once without switching between tools or doing mental math.",
              },
              {
                q: "What is the LinkedIn post character limit?",
                a: "The LinkedIn post character limit is 3,000 characters for standard text posts in 2026. However only the first 210 characters are visible in the LinkedIn feed before the See more button appears. This means your opening 210 characters carry disproportionate importance — they must hook readers strongly enough to earn the click to expand. LinkedIn articles have a separate limit of 125,000 characters. LinkedIn profile headlines are limited to 220 characters. Our character counter tracks your LinkedIn content length in real time so you can craft posts that maximize impact within both the 3,000-character total limit and the critical 210-character visible preview.",
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
