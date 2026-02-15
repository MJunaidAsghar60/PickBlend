import {
  BookOpen,
  MessageSquare,
  GraduationCap,
  Share2,
  HelpCircle,
  Lightbulb,
  Target,
  PenTool,
} from "lucide-react";

function SectionIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
      <Icon className="h-4 w-4" />
    </span>
  );
}

export default function SEOContent() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="prose-custom space-y-10 text-text-secondary">
        {/* ---------- Intro ---------- */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-text">
            <SectionIcon icon={BookOpen} />
            What Is a Word Counter and Why Does It Matter?
          </h2>
          <p>
            A word counter is an essential writing utility that tallies the
            number of words, characters, sentences, and paragraphs in any given
            text. Whether you are a student finishing a term paper, a blogger
            optimizing an article for search engines, or a social media manager
            crafting the perfect tweet, knowing your exact word count is
            non-negotiable. Our free online word counter delivers real-time
            statistics the moment you type — no button clicks, no page reloads,
            and absolutely no sign-up required.
          </p>
          <p>
            Unlike basic counters that only display a single number, this tool
            provides a comprehensive writing dashboard. You get character counts
            with and without spaces, sentence and paragraph tallies, estimated
            reading time, public speaking time, keyword density analysis, and
            instant text transformation tools — all in one clean interface. Think
            of it as a cockpit for your content.
          </p>
        </section>

        {/* ---------- How to Use ---------- */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-text">
            <SectionIcon icon={Lightbulb} />
            How to Use This Word Counter Tool
          </h2>
          <p>
            Using our word counter is as simple as typing. Paste or write your
            text into the large editor at the top of the page. Every metric
            updates instantly as you type — words, characters, sentences,
            paragraphs, reading time, and speaking time are displayed in the
            sidebar cards on desktop or below the editor on mobile devices.
          </p>
          <h3 className="mt-6 text-lg font-semibold text-text">
            Text Transformation Tools
          </h3>
          <p>
            Need to change text case quickly? Use the toolbar buttons above the
            editor to convert your entire text to UPPERCASE, lowercase, or
            Sentence case in a single click. The copy button places your content
            on the clipboard instantly, and the clear button gives you a fresh
            start. Your text is automatically saved to your browser, so you can
            close the tab and return later without losing your work.
          </p>
          <h3 className="mt-6 text-lg font-semibold text-text">
            Keyword Density Analysis
          </h3>
          <p>
            The keyword density panel shows the top 10 most-used meaningful
            words in your text. Common stop words (like &quot;the,&quot;
            &quot;and,&quot; &quot;is&quot;) are automatically filtered out so
            you see only the words that matter for SEO and content analysis. Each
            keyword shows its occurrence count and percentage density relative to
            total word count.
          </p>
        </section>

        {/* ---------- Social Media Limits ---------- */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-text">
            <SectionIcon icon={Share2} />
            Social Media Character Limits You Need to Know
          </h2>
          <p>
            Every social media platform enforces character or word limits. Going
            over means your post gets cut off or rejected entirely. Here is a
            quick reference for the most popular platforms in 2025:
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-surface-alt text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  <th className="px-4 py-3">Platform</th>
                  <th className="px-4 py-3">Post Limit</th>
                  <th className="px-4 py-3">Bio / Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-text-secondary">
                <tr className="hover:bg-surface-hover">
                  <td className="px-4 py-2.5 font-medium text-text">X (Twitter)</td>
                  <td className="px-4 py-2.5">280 characters</td>
                  <td className="px-4 py-2.5">160 characters</td>
                </tr>
                <tr className="bg-surface-alt/50 hover:bg-surface-hover">
                  <td className="px-4 py-2.5 font-medium text-text">Instagram</td>
                  <td className="px-4 py-2.5">2,200 characters</td>
                  <td className="px-4 py-2.5">150 characters</td>
                </tr>
                <tr className="hover:bg-surface-hover">
                  <td className="px-4 py-2.5 font-medium text-text">Facebook</td>
                  <td className="px-4 py-2.5">63,206 characters</td>
                  <td className="px-4 py-2.5">101 characters</td>
                </tr>
                <tr className="bg-surface-alt/50 hover:bg-surface-hover">
                  <td className="px-4 py-2.5 font-medium text-text">LinkedIn</td>
                  <td className="px-4 py-2.5">3,000 characters</td>
                  <td className="px-4 py-2.5">2,600 characters</td>
                </tr>
                <tr className="hover:bg-surface-hover">
                  <td className="px-4 py-2.5 font-medium text-text">TikTok</td>
                  <td className="px-4 py-2.5">4,000 characters</td>
                  <td className="px-4 py-2.5">80 characters</td>
                </tr>
                <tr className="bg-surface-alt/50 hover:bg-surface-hover">
                  <td className="px-4 py-2.5 font-medium text-text">YouTube</td>
                  <td className="px-4 py-2.5">5,000 characters (desc.)</td>
                  <td className="px-4 py-2.5">100 characters (title)</td>
                </tr>
                <tr className="hover:bg-surface-hover">
                  <td className="px-4 py-2.5 font-medium text-text">Pinterest</td>
                  <td className="px-4 py-2.5">500 characters</td>
                  <td className="px-4 py-2.5">160 characters</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Pro tip: Compose your social posts in our editor first. You will see
            both the word and character count in real time, ensuring you stay
            within platform limits before pasting your content over.
          </p>
        </section>

        {/* ---------- Essay / Academic Standards ---------- */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-text">
            <SectionIcon icon={GraduationCap} />
            Standard Word Counts for Essays and Academic Writing
          </h2>
          <p>
            If you are a student or academic writer, hitting the right word count
            is critical. Professors and journals specify strict limits. Below are
            the common ranges for different types of academic work:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1.5">
            <li>
              <strong>High School Essay:</strong> 300 – 1,000 words (typically a
              five-paragraph essay is around 500 words).
            </li>
            <li>
              <strong>College Admission Essay:</strong> 250 – 650 words (the
              Common App sets a 650-word maximum).
            </li>
            <li>
              <strong>Undergraduate Essay:</strong> 1,500 – 5,000 words depending
              on the course and assignment weight.
            </li>
            <li>
              <strong>Graduate Research Paper:</strong> 2,500 – 6,000 words for
              most course papers; journal articles range from 3,000 to 8,000.
            </li>
            <li>
              <strong>Master&apos;s Thesis:</strong> 15,000 – 50,000 words
              depending on the discipline and institution.
            </li>
            <li>
              <strong>Doctoral Dissertation:</strong> 50,000 – 100,000 words,
              though some STEM dissertations are shorter.
            </li>
            <li>
              <strong>Blog Post (SEO-optimized):</strong> 1,500 – 2,500 words
              for comprehensive evergreen articles targeting organic search.
            </li>
          </ul>
          <p className="mt-3">
            Use our tool to monitor your progress as you write. The paragraph
            counter and reading time estimate help you pace your arguments and
            ensure your content is neither too thin nor unnecessarily bloated.
          </p>
        </section>

        {/* ---------- Reading & Speaking Time ---------- */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-text">
            <SectionIcon icon={MessageSquare} />
            Understanding Reading Time and Speaking Time
          </h2>
          <p>
            Reading time and speaking time are calculated using well-established
            averages. The typical adult reads silently at approximately 275 words
            per minute (wpm), while a comfortable public speaking pace averages
            130 wpm. These benchmarks are used across the publishing and media
            industries.
          </p>
          <p>
            Knowing your reading time helps you set expectations for your
            audience. Medium and other blogging platforms display estimated
            reading time for every article, and research shows that articles in
            the 7-to-10-minute range (roughly 1,750 – 2,750 words) tend to
            receive the highest engagement. Meanwhile, speakers preparing for a
            TED-style talk (18 minutes) should aim for around 2,300 words.
          </p>
          <h3 className="mt-6 text-lg font-semibold text-text">
            Quick Reference: Words to Time
          </h3>
          <div className="mt-3 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-surface-alt text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  <th className="px-4 py-3">Words</th>
                  <th className="px-4 py-3">Reading Time</th>
                  <th className="px-4 py-3">Speaking Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-text-secondary">
                {[
                  ["500", "1 min 49 sec", "3 min 51 sec"],
                  ["1,000", "3 min 38 sec", "7 min 42 sec"],
                  ["1,500", "5 min 27 sec", "11 min 32 sec"],
                  ["2,000", "7 min 16 sec", "15 min 23 sec"],
                  ["3,000", "10 min 55 sec", "23 min 5 sec"],
                  ["5,000", "18 min 11 sec", "38 min 28 sec"],
                ].map(([words, read, speak], i) => (
                  <tr
                    key={words}
                    className={`${
                      i % 2 ? "bg-surface-alt/50" : ""
                    } hover:bg-surface-hover`}
                  >
                    <td className="px-4 py-2.5 font-medium text-text">
                      {words}
                    </td>
                    <td className="px-4 py-2.5">{read}</td>
                    <td className="px-4 py-2.5">{speak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ---------- SEO & Keyword Density ---------- */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-text">
            <SectionIcon icon={Target} />
            How Keyword Density Impacts Your SEO
          </h2>
          <p>
            Keyword density is the percentage of times a target keyword appears
            in your text relative to the total word count. While there is no
            magic number, most SEO professionals recommend keeping primary
            keyword density between 1% and 2%. Going above 3% risks being
            flagged as keyword stuffing by search engines, which can hurt your
            rankings instead of helping them.
          </p>
          <p>
            Our keyword density analyzer automatically identifies the top 10
            most-used meaningful words in your content. Use it to verify that
            your target keyword appears frequently enough to signal relevance to
            Google without overdoing it. You should also look for natural
            variations and related terms — known as LSI (Latent Semantic
            Indexing) keywords — which help search engines understand context.
          </p>
          <p>
            For best results, include your primary keyword in the first 100
            words, use it in at least one H2 heading, and distribute it
            naturally throughout the body. The density table in our tool gives
            you a quick health check before publishing.
          </p>
        </section>

        {/* ---------- Writing Tips ---------- */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-text">
            <SectionIcon icon={PenTool} />
            Writing Tips to Improve Content Quality
          </h2>
          <p>
            A good word count means nothing without good writing. Here are
            practical tips to improve both the quality and readability of your
            content:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1.5">
            <li>
              <strong>Keep sentences short.</strong> Aim for 15–20 words per
              sentence on average. Long-winded sentences lose readers.
            </li>
            <li>
              <strong>Use active voice.</strong> &quot;The team completed the
              project&quot; beats &quot;The project was completed by the
              team.&quot;
            </li>
            <li>
              <strong>Break up long paragraphs.</strong> No paragraph should
              exceed 3–4 sentences in online content. White space is your
              friend.
            </li>
            <li>
              <strong>Front-load your value.</strong> Put the most important
              information at the beginning of each section. Readers scan before
              they commit to reading.
            </li>
            <li>
              <strong>Edit ruthlessly.</strong> First drafts are always too long.
              Cut filler words like &quot;very,&quot; &quot;really,&quot;
              &quot;just,&quot; and &quot;that&quot; wherever possible.
            </li>
            <li>
              <strong>Read aloud.</strong> If a sentence is hard to say out loud,
              it is hard to read. The speaking time metric in our tool can help
              you gauge pacing.
            </li>
          </ul>
        </section>

        {/* ---------- FAQ ---------- */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-text">
            <SectionIcon icon={HelpCircle} />
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-5">
            <FaqItem
              q="How does the word counter tool work?"
              a="Simply type or paste your text into the editor. The tool instantly analyzes your content and displays word count, character count, sentence count, paragraph count, estimated reading time, speaking time, and keyword density — all in real time with no page reload required."
            />
            <FaqItem
              q="Is this word counter tool free to use?"
              a="Yes, this word counter is 100% free with no sign-up or registration required. All features including keyword density analysis, reading time estimation, and text case conversion are available at no cost."
            />
            <FaqItem
              q="What reading speed is used for the time estimates?"
              a="Reading time is calculated at 275 words per minute (the average adult silent reading speed). Speaking time uses 130 words per minute, which matches a comfortable public speaking pace."
            />
            <FaqItem
              q="Can I use this tool to check keyword density for SEO?"
              a="Absolutely. The keyword density panel displays your top 10 most-used words along with their count and percentage. Use it to ensure your target keywords are present without over-stuffing."
            />
            <FaqItem
              q="Does the tool save my text?"
              a="Your text is stored locally in your browser via LocalStorage. It is never sent to any server. If you close the tab and return later, your text will still be there — completely private on your device."
            />
            <FaqItem
              q="How accurate is the sentence counter?"
              a="Sentences are detected by terminal punctuation marks (periods, exclamation marks, and question marks). It handles standard English text with high accuracy. Edge cases like abbreviations (e.g., U.S.A.) may cause slight variations."
            />
          </div>
        </section>
      </div>
    </article>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
      <h3 className="text-base font-semibold text-text">{q}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{a}</p>
    </div>
  );
}
