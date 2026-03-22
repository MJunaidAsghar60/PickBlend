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
              q="What is the average reading speed for adults?"
              a="The widely accepted average is 275 words per minute (wpm) for silent reading of English text. This figure comes from a 2019 meta-analysis by Marc Brysbaert and is used by most publishing platforms including Medium."
            />
            <FaqItem
              q="How many words is a 5-minute read?"
              a="At the average reading speed of 275 wpm, a 5-minute read is approximately 1,375 words. At a slow pace (150 wpm) it would be 750 words, and at a fast pace (450 wpm) it would be 2,250 words."
            />
            <FaqItem
              q="How do I calculate speaking time for a presentation?"
              a="Divide your word count by your speaking pace. For a comfortable presentation, use 130 wpm. So a 2,000-word script would take about 15 minutes and 23 seconds to deliver. Our tool lets you choose from five different speaking speeds."
            />
            <FaqItem
              q="Why does reading speed vary so much?"
              a="Reading speed depends on text complexity, reader familiarity with the topic, font size and layout, language (native vs. second language), and whether you are skimming or reading for comprehension. Technical content averages 150–200 wpm while casual content averages 250–300 wpm."
            />
            <FaqItem
              q="Is this tool free to use?"
              a="Yes, completely free with no sign-up required. Your text is processed entirely in your browser and is never sent to any server — your content stays completely private."
            />
            <FaqItem
              q="How many words per page?"
              a="A standard single-spaced A4 page with 12pt font holds approximately 250 words. Double-spaced, it is about 125 words per page. Our tool shows both estimates in the results sidebar."
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
