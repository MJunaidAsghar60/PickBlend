import {
  BookOpen,
  Clock,
  Mic,
  MonitorPlay,
  GraduationCap,
  HelpCircle,
  Target,
  Lightbulb,
} from "lucide-react";

function SectionIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
      <Icon className="h-4 w-4" />
    </span>
  );
}

export default function ReadingTimeSEO() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="prose-custom space-y-10 text-text-secondary">
        {/* ---------- Intro ---------- */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-text">
            <SectionIcon icon={BookOpen} />
            What Is a Reading Time Calculator?
          </h2>
          <p>
            A reading time calculator estimates how long it takes to read a
            piece of text based on word count and reading speed. Content
            creators, bloggers, teachers, and public speakers use this metric
            daily to calibrate the length and pacing of their work. If you have
            ever seen &quot;5 min read&quot; at the top of a Medium article,
            that number comes from a reading time calculator just like this one.
          </p>
          <p>
            Our free tool goes beyond a simple estimate. It calculates reading
            time at three different speeds (slow, average, and fast), provides a
            separate speaking time estimate with five pacing options, and shows
            benchmarks for common content types from tweets to eBook chapters.
            You can paste your text directly or use our{" "}
            <a
              href="/tools/word-counter"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              Word Counter tool
            </a>{" "}
            to get your exact word count first, then enter that count here — results
            update in real time without any page reloads.
          </p>
        </section>

        {/* ---------- How It Works ---------- */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-text">
            <SectionIcon icon={Lightbulb} />
            How Reading Time Is Calculated
          </h2>
          <p>
            The formula is straightforward: divide the total number of words by
            the reader&apos;s speed in words per minute (wpm). An average adult
            reads at approximately 275 wpm silently, though this varies
            significantly depending on the complexity of the material, the
            reader&apos;s familiarity with the topic, and whether the content
            includes data-heavy tables or simple prose.
          </p>
          <h3 className="mt-6 text-lg font-semibold text-text">
            Average Reading Speeds by Context
          </h3>
          <div className="mt-3 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-surface-alt text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  <th className="px-4 py-3">Context</th>
                  <th className="px-4 py-3">Speed (wpm)</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-text-secondary">
                <tr className="hover:bg-surface-hover">
                  <td className="px-4 py-2.5 font-medium text-text">Casual reading</td>
                  <td className="px-4 py-2.5">250–300</td>
                  <td className="px-4 py-2.5">Novels, blogs, news articles</td>
                </tr>
                <tr className="bg-surface-alt/50 hover:bg-surface-hover">
                  <td className="px-4 py-2.5 font-medium text-text">Technical content</td>
                  <td className="px-4 py-2.5">150–200</td>
                  <td className="px-4 py-2.5">Textbooks, documentation, research papers</td>
                </tr>
                <tr className="hover:bg-surface-hover">
                  <td className="px-4 py-2.5 font-medium text-text">Speed reading</td>
                  <td className="px-4 py-2.5">400–700</td>
                  <td className="px-4 py-2.5">Practiced technique, lower comprehension</td>
                </tr>
                <tr className="bg-surface-alt/50 hover:bg-surface-hover">
                  <td className="px-4 py-2.5 font-medium text-text">Proofreading</td>
                  <td className="px-4 py-2.5">100–150</td>
                  <td className="px-4 py-2.5">Careful, word-by-word checking</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Our tool defaults to 275 wpm for the average reader, which aligns
            with widely cited research from Brysbaert (2019) and is the standard
            used by most publishing platforms. You can toggle between slow (150
            wpm), average (275 wpm), and fast (450 wpm) to see how different
            audiences will experience your content.
          </p>
        </section>

        {/* ---------- Speaking Time ---------- */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-text">
            <SectionIcon icon={Mic} />
            Speaking Time: Why It Matters for Presenters
          </h2>
          <p>
            Speaking time calculation is essential for anyone preparing a
            speech, presentation, podcast episode, or video script. Speaking
            too fast makes you hard to follow; speaking too slowly loses your
            audience. The key is matching your word count to your allotted time
            slot at the right pace.
          </p>
          <h3 className="mt-6 text-lg font-semibold text-text">
            Common Speaking Paces
          </h3>
          <ul className="mt-3 list-inside list-disc space-y-1.5">
            <li>
              <strong>110 wpm (Slow / Careful):</strong> Best for technical
              explanations, eulogies, and formal addresses where every word
              carries weight.
            </li>
            <li>
              <strong>130 wpm (Conversational):</strong> Natural talking speed
              for most people. Ideal for conference talks with slide pauses.
            </li>
            <li>
              <strong>150 wpm (Presentation):</strong> Energetic but clear.
              Common for TED talks and corporate keynotes.
            </li>
            <li>
              <strong>155 wpm (Audiobook):</strong> The pacing used by
              professional narrators for sustained, easy listening.
            </li>
            <li>
              <strong>170 wpm (Fast / Energetic):</strong> High-energy
              YouTubers and motivational speakers often hit this pace.
            </li>
          </ul>
          <p className="mt-3">
            Use our speaking speed selector to match your scenario. If you are
            preparing a 15-minute conference talk at conversational pace, aim
            for roughly 1,950 words. Our benchmark table shows common formats
            so you can calibrate your script length before rehearsing.
          </p>
        </section>

        {/* ---------- Video Scripts ---------- */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-text">
            <SectionIcon icon={MonitorPlay} />
            Estimating Time for Video Scripts and Podcasts
          </h2>
          <p>
            Video and podcast creators need precise timing. A 10-minute YouTube
            video typically requires 1,400–1,600 words of scripted narration
            (around 150 wpm), while a 30-minute podcast episode at
            conversational pace needs approximately 3,900–4,650 words. These
            estimates assume continuous speech — real-world recordings include
            pauses, intros, music, and audience interaction that add time.
          </p>
          <h3 className="mt-6 text-lg font-semibold text-text">
            Quick Reference: Script Length by Platform
          </h3>
          <div className="mt-3 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-surface-alt text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  <th className="px-4 py-3">Format</th>
                  <th className="px-4 py-3">Duration</th>
                  <th className="px-4 py-3">Approx. Words</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-text-secondary">
                {[
                  ["TikTok / Reel", "60 sec", "130–170"],
                  ["YouTube Short", "60 sec", "130–170"],
                  ["Instagram Reel", "90 sec", "195–255"],
                  ["YouTube Video", "10 min", "1,400–1,600"],
                  ["Podcast Episode", "30 min", "3,900–4,650"],
                  ["Webinar", "45 min", "5,850–6,750"],
                  ["Online Course Lesson", "15 min", "1,950–2,250"],
                ].map(([format, duration, words], i) => (
                  <tr
                    key={format}
                    className={`${
                      i % 2 ? "bg-surface-alt/50" : ""
                    } hover:bg-surface-hover`}
                  >
                    <td className="px-4 py-2.5 font-medium text-text">{format}</td>
                    <td className="px-4 py-2.5">{duration}</td>
                    <td className="px-4 py-2.5">{words}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            For scripted content, we recommend writing 10–15% more than your
            target word count, then trimming during editing. It is always
            easier to cut than to pad.
          </p>
        </section>

        {/* ---------- SEO & E-E-A-T ---------- */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-text">
            <SectionIcon icon={Target} />
            Why Displaying Reading Time Improves SEO and E-E-A-T
          </h2>
          <p>
            Google&apos;s quality guidelines emphasize Experience, Expertise,
            Authoritativeness, and Trustworthiness (E-E-A-T). Showing estimated
            reading time on your content is a user-experience signal that
            demonstrates respect for your audience&apos;s time. It also sets
            expectations — readers who know an article is a 7-minute read are
            more likely to commit and less likely to bounce.
          </p>
          <p>
            Studies consistently show that articles in the 7-to-10-minute range
            (roughly 1,750–2,750 words) receive the highest engagement. Adding
            a reading time label at the top of your posts can improve:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1.5">
            <li>
              <strong>Dwell time:</strong> Visitors stay longer when they know
              how much content to expect.
            </li>
            <li>
              <strong>Click-through rate:</strong> Search snippets with time
              estimates attract more clicks in SERPs.
            </li>
            <li>
              <strong>User satisfaction:</strong> Matching content length to
              user intent reduces pogo-sticking.
            </li>
            <li>
              <strong>Accessibility:</strong> Screen-reader users benefit from
              knowing the scope of the content before committing.
            </li>
          </ul>
          <p className="mt-3">
            Use this calculator to calibrate your articles before publishing.
            If your target audience expects a quick answer, keep it under 3
            minutes. If you are writing a comprehensive guide, 8–12 minutes
            signals depth and authority.
          </p>
        </section>

        {/* ---------- Academic Use ---------- */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-text">
            <SectionIcon icon={GraduationCap} />
            Reading Time for Students and Academics
          </h2>
          <p>
            Students preparing for exams or working through reading lists can
            use this tool to estimate study time. A 30-page chapter in a
            textbook (approximately 7,500 words of dense content at 175 wpm)
            takes roughly 43 minutes to read carefully. Knowing this helps you
            schedule study sessions realistically instead of guessing.
          </p>
          <p>
            For oral examinations, thesis defenses, and conference
            presentations, use the speaking time calculator to ensure your
            presentation fits the time slot. A 20-minute thesis defense
            presentation should contain approximately 2,600 words at
            conversational pace, leaving room for pauses and emphasis.
          </p>
        </section>

        {/* ---------- FAQ ---------- */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-text">
            <SectionIcon icon={HelpCircle} />
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-5">
            <FaqItem
              q="How long does it take to read 1000 words?"
              a="Reading 1,000 words takes approximately 4 minutes and 12 seconds at the average adult reading speed of 238 words per minute. Slow readers at 150 words per minute take around 6 minutes 40 seconds for the same text. Fast readers at 400 words per minute finish in under 3 minutes. Content complexity also matters — technical or academic text with unfamiliar vocabulary takes longer than casual prose even at the same word count. Paste any 1,000-word text into our reading time calculator to get your personalised estimate based on actual content."
            />
            <FaqItem
              q="What is the average adult reading speed in 2026?"
              a="The average adult reading speed in 2026 remains approximately 238 words per minute for silent reading according to research published in a 2019 meta-analysis of 190 studies covering 17,000 participants. College educated adults typically read faster at 250 to 300 words per minute. Trained speed readers using chunking and skimming techniques can reach 400 to 600 words per minute though comprehension often drops at higher speeds. Our reading time calculator uses 238 words per minute as the default average but allows you to adjust for faster or slower reading speeds."
            />
            <FaqItem
              q="How do I calculate speaking time from word count?"
              a="Calculating speaking time from word count requires dividing your total word count by your speaking pace in words per minute. At an average speaking pace of 130 words per minute a 1,300-word speech takes exactly 10 minutes. A 650-word speech takes 5 minutes. A 2,600-word speech takes 20 minutes. Speaking pace varies significantly — nervous speakers slow to 100 words per minute while confident presenters often reach 150 to 160 words per minute. Our reading time calculator handles this calculation automatically showing you both reading time and speaking time the moment you paste your text."
            />
            <FaqItem
              q="How long should a blog post take to read?"
              a="The ideal blog post reading time is 6 to 8 minutes according to engagement data from major publishing platforms. This reading time corresponds to roughly 1,500 to 2,000 words at average reading speed. Posts under 3 minutes feel too brief to be comprehensive while posts over 12 minutes see declining completion rates unless the content is highly technical or targeted at expert audiences. Displaying your estimated reading time at the top of a blog post sets reader expectations and reduces bounce rate. Use our reading time calculator to find and display the exact reading time for any piece of content."
            />
            <FaqItem
              q="What is a comfortable speaking pace for presentations?"
              a="A comfortable speaking pace for presentations is between 120 and 150 words per minute. Professional speakers and TED Talk presenters average around 130 to 150 words per minute — fast enough to maintain energy but slow enough for the audience to absorb each point. Speaking faster than 180 words per minute sounds rushed and anxious. Speaking slower than 100 words per minute feels monotonous and loses audience attention. If your presentation script is 1,300 words and you speak at 130 words per minute you have a perfect 10-minute talk. Our speaking time calculator confirms this instantly."
            />
            <FaqItem
              q="How many words is a 10-minute presentation?"
              a="A 10-minute presentation contains approximately 1,100 to 1,500 words depending on your speaking pace. At a standard presentation pace of 120 words per minute a 10-minute talk requires 1,200 words. At a faster conversational pace of 150 words per minute you need 1,500 words to fill 10 minutes. Professional speakers recommend writing slightly less than you think you need because live delivery always runs longer than rehearsal due to pauses, emphasis and audience interaction. Our reading time calculator shows speaking time for multiple pace options so you can script your presentation to the exact right length."
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
