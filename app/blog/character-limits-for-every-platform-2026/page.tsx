import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://pickblend.com";
const POST_SLUG = "character-limits-for-every-platform-2026";
const POST_URL = `${BASE_URL}/blog/${POST_SLUG}`;

export const metadata: Metadata = {
  title: "Character Limits for Every Platform in 2026 — The Complete Guide",
  description:
    "Every platform has different character limits in 2026. From social media posts and bios to meta tags, SMS and email subject lines — here is the complete updated guide with all limits in one place.",
  keywords: [
    "character limits social media 2026",
    "social media character limits 2026",
    "character limit guide 2026",
    "platform character limits",
    "how many characters for social media",
    "meta description character limit",
    "email subject line character limit",
    "sms character limit",
    "bio character limit social media",
  ],
  authors: [{ name: "PickBlend" }],
  openGraph: {
    type: "article",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Character Limits for Every Platform in 2026 — The Complete Guide",
    description:
      "Every platform has different character limits in 2026. From social media posts and bios to meta tags, SMS and email subject lines — here is the complete updated guide with all limits in one place.",
    url: POST_URL,
    images: [{ url: `${BASE_URL}/og/home.png`, width: 1200, height: 630, alt: "Character Limits for Every Platform 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Character Limits for Every Platform in 2026",
    description: "All social media, SEO, email and SMS character limits for 2026 — in one place.",
    images: [`${BASE_URL}/og/home.png`],
  },
  alternates: { canonical: POST_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

function PageJsonLd() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: "Character Limits for Every Platform in 2026", item: POST_URL },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Character Limits for Every Platform in 2026 — The Complete Guide",
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    author: { "@type": "Organization", name: "PickBlend" },
    publisher: { "@type": "Organization", name: "PickBlend", url: BASE_URL },
    description:
      "Every platform has different character limits in 2026. From social media posts and bios to meta tags, SMS and email subject lines — here is the complete updated guide with all limits in one place.",
    url: POST_URL,
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the character limit for X (formerly Twitter) in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The standard character limit for posts on X in 2026 is 280 characters for regular accounts. This includes spaces, punctuation and links. Links are shortened to 23 characters regardless of their actual length. X Premium subscribers have access to extended post lengths, but the 280-character limit applies to the vast majority of users.",
        },
      },
      {
        "@type": "Question",
        name: "How many characters is a good meta description?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A meta description should be between 150 and 160 characters for best results in Google search in 2026. Descriptions shorter than 120 characters may be expanded by Google with text pulled from your page. Descriptions over 160 characters get truncated with an ellipsis in search results, which can cut off your call to action.",
        },
      },
      {
        "@type": "Question",
        name: "Why do character limits differ between platforms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Character limits reflect each platform's design philosophy and user behavior. Short-form platforms like X prioritize brevity and quick consumption. Professional platforms like LinkedIn allow longer posts because their audience expects detailed content. Technical limits like SMS (160 characters) come from the underlying protocol's data packet size. Each limit is a constraint that also shapes the type of content that performs best on that platform.",
        },
      },
      {
        "@type": "Question",
        name: "Does an emoji count as one character?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the platform and encoding. On most social media platforms, a single emoji counts as one or two characters for display purposes. In SMS messaging, an emoji forces a switch from GSM-7 to Unicode UCS-2 encoding, which cuts the per-message limit from 160 characters to just 70. Always check how your specific platform counts emoji before assuming they are single characters.",
        },
      },
      {
        "@type": "Question",
        name: "What is the character limit for a LinkedIn post in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LinkedIn posts allow up to 3,000 characters in 2026. However only the first 210 characters are visible in the feed before the 'See more' link appears. This means your opening 210 characters need to hook the reader strongly enough to make them click through to read the rest of your post.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

export default function BlogPost() {
  return (
    <>
      <PageJsonLd />
      <main className="px-4 py-12 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">

          {/* ── Article Header ── */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-text-secondary">
            <Link href="/" className="transition-colors hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/blog" className="transition-colors hover:text-primary">Blog</Link>
            <span>/</span>
            <span className="text-text">Character Limits 2026</span>
          </nav>

          <div className="flex items-center gap-2">
            <span className="rounded-full bg-accent-orange/10 px-3 py-1 text-xs font-semibold text-accent-orange">
              Content Writing
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl">
            Character Limits for Every Platform in 2026 — The Complete Guide
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-text-secondary">
            <time dateTime="2026-04-07">April 7, 2026</time>
            <span>·</span>
            <span>8 min read</span>
            <span>·</span>
            <span>By PickBlend</span>
          </div>

          <hr className="mt-6 border-border" />

          {/* ── Body ── */}
          <div className="mt-8">

            {/* Opening */}
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              You spent 20 minutes crafting the perfect post. You hit publish. It gets cut off. If
              you have been creating content for any length of time, you have been there — and it is
              more avoidable than it feels in the moment. Every platform has its own character limits,
              its own display thresholds, and its own idea of what counts toward that limit.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              The frustrating part is that these limits change more often than most people realise. A
              platform rolls out a new feature, adjusts its feed algorithm, or updates its mobile app
              — and suddenly the 280-character post that displayed perfectly last year is getting
              truncated differently in 2026. Keeping up with all of it across a dozen platforms is
              genuinely tedious.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              This guide pulls every major character limit into one place, updated for 2026 — social
              media posts, bios, SEO meta tags, email subject lines, SMS, and more. Bookmark it. You
              will not need to Google each one separately ever again.
            </p>

            {/* H2: Why It Matters */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-text">
              Why Character Limits Matter More Than Ever in 2026
            </h2>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              The most obvious reason to stay within character limits is visibility. On platforms like
              LinkedIn and TikTok, only the first 200-odd characters show in the feed before a "See
              more" prompt. If your hook is buried in the second paragraph, a significant portion of
              your audience never reads it. Algorithms on most platforms also treat native
              content — content that fits the format without truncation — more favourably than posts
              that appear to have been written for a different channel and pasted in without adjustment.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              For SEO, character limits have direct consequences. A page title tag that is too long
              gets truncated with an ellipsis in Google search results, which can cut your target
              keyword or your brand name out of the visible snippet entirely. A meta description
              over 160 characters means Google rewrites it — or clips it at a point that kills your
              call to action. These are not hypothetical risks; they happen constantly to sites that
              do not audit their meta tags regularly.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              The mobile-first reality of 2026 makes all of this more pressing. Mobile screens
              display fewer characters than desktop views across virtually every platform and inbox.
              A subject line that looks fine on desktop might show as just 35 characters on a phone
              held in portrait orientation. Designing your content for the mobile truncation point
              rather than the theoretical maximum is now the smarter approach.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              For teams and agencies managing content at scale, tracking character limits is a
              genuine workflow concern. The time wasted on copy that needs to be rewritten because
              someone did not check the limit before drafting adds up fast. Building limit awareness
              into the writing process rather than treating it as a last-minute check saves significant
              revision cycles over the course of a year.
            </p>

            {/* H2: Social Media Post Limits */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-text">
              Social Media Post Character Limits in 2026
            </h2>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              These are the character limits for the main content field — the post or caption itself.
              Bio and profile limits are covered separately in the next section.
            </p>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-alt">
                    <th className="px-4 py-3 text-left font-semibold text-text">Platform</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">Post / Caption Limit</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["X (formerly Twitter)", "280 characters", "Premium subscribers get more"],
                    ["Instagram", "2,200 characters", "First 125 shown before truncation"],
                    ["Facebook", "63,206 characters", "Posts over ~400 chars truncated in feed"],
                    ["LinkedIn", "3,000 characters", "First 210 chars visible before \u201cSee more\u201d"],
                    ["TikTok", "4,000 characters", "First 100 chars visible in feed"],
                    ["Pinterest", "500 characters", "First 50 chars most visible"],
                    ["YouTube", "5,000 characters", "Description — first 157 chars shown in search"],
                    ["Threads", "500 characters", "Same count as original post limit"],
                    ["Bluesky", "300 characters", "Includes links and mentions"],
                    ["Mastodon", "500 characters", "Varies by server — 500 is common default"],
                  ].map(([platform, limit, note], i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-surface-alt/40" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-text">{platform}</td>
                      <td className="px-4 py-3 font-mono text-sm font-semibold text-text">{limit}</td>
                      <td className="px-4 py-3 text-text-secondary">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base leading-relaxed text-text-secondary mb-4 mt-6">
              Notice the gap between the total character limit and what is actually visible before
              truncation. Instagram allows 2,200 characters in a caption, but only the first 125
              are shown in the feed without the reader tapping "more." LinkedIn allows 3,000 characters,
              but only 210 are visible. These visible thresholds are the ones that actually determine
              whether most of your audience reads past the first sentence.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              The practical implication is straightforward: treat the visible character count as your
              real limit for the hook, and the full limit as the space for everything else. Your first
              sentence or two need to do the job of making someone want to read more. Everything
              after the truncation point can add context, detail, or a call to action — but it only
              gets read by the people already interested enough to tap through.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Leading with your strongest point first is not just good writing practice — in 2026 it
              is platform survival. The opening 50 to 125 characters, depending on the platform, are
              your actual headline. Write them as if nothing after the truncation will ever be seen,
              because for a large percentage of your audience, it will not be.
            </p>

            {/* H2: Bio and Profile Limits */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-text">
              Social Media Bio and Profile Character Limits
            </h2>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Bios and profile fields have their own separate limits — and they are often tighter
              than post limits, because they need to fit within a constrained profile layout.
            </p>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-alt">
                    <th className="px-4 py-3 text-left font-semibold text-text">Platform</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">Bio / About</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">Display Name</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">Username</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["X", "160 characters", "50 characters", "15 characters"],
                    ["Instagram", "150 characters", "30 characters", "30 characters"],
                    ["Facebook Page", "255 characters", "75 characters", "50 characters"],
                    ["LinkedIn", "2,600 characters", "100 characters", "—"],
                    ["TikTok", "80 characters", "30 characters", "24 characters"],
                    ["Pinterest", "160 characters", "30 characters", "15 characters"],
                    ["YouTube", "1,000 characters", "100 characters", "30 characters"],
                    ["Threads", "150 characters", "30 characters", "30 characters"],
                  ].map(([platform, bio, name, username], i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-surface-alt/40" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-text">{platform}</td>
                      <td className="px-4 py-3 font-mono text-sm text-text">{bio}</td>
                      <td className="px-4 py-3 text-text-secondary">{name}</td>
                      <td className="px-4 py-3 text-text-secondary">{username}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base leading-relaxed text-text-secondary mb-4 mt-6">
              A bio is often the first thing someone reads when they decide whether to follow you or
              visit your website. With most platforms giving you 80 to 160 characters — roughly two
              to three short sentences — every word needs to earn its place. The most effective bios
              answer three things quickly: who you are, what you do, and why someone should care.
              Trying to say everything usually results in saying nothing clearly.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              The TikTok bio limit of just 80 characters is worth noting — it is tighter than an SMS
              message and barely enough for a single sentence. On a platform where personality and
              niche are everything, those 80 characters carry a lot of weight. LinkedIn is the
              exception with 2,600 characters for the About section, which makes sense given that
              it is used more like a career summary than a social handle.
            </p>

            {/* H2: SEO Limits */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-text">
              SEO Character Limits — Title Tags and Meta Descriptions
            </h2>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              These are not platform limits in the traditional sense — they are display thresholds
              enforced by Google in its search results. Going over them does not break your page.
              It just means your content gets cut off with "..." in the search snippet, which can
              bury your target keyword or eliminate your call to action from what the searcher actually
              sees.
            </p>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-alt">
                    <th className="px-4 py-3 text-left font-semibold text-text">SEO Element</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">Recommended Limit</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">Hard Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Page title tag", "50 – 60 characters", "~600px display width"],
                    ["Meta description", "150 – 160 characters", "~920px display width"],
                    ["URL slug", "50 – 75 characters", "No hard limit"],
                    ["Alt text", "100 – 125 characters", "No hard limit"],
                    ["H1 heading", "20 – 70 characters", "No hard limit"],
                  ].map(([element, recommended, hard], i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-surface-alt/40" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-text">{element}</td>
                      <td className="px-4 py-3 font-mono text-sm font-semibold text-text">{recommended}</td>
                      <td className="px-4 py-3 text-text-secondary">{hard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base leading-relaxed text-text-secondary mb-4 mt-6">
              Google actually measures title and description width in pixels, not characters. A
              600-pixel title can hold around 50 to 60 standard characters, but the exact number
              depends on the specific letters used. Wide letters like W and M consume more horizontal
              space than narrow ones like i and l. In practice, character count is a good enough
              proxy — just target 55 characters for titles and 155 for descriptions and you will
              rarely have a problem.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              One nuance worth knowing: lowercase letters are slightly narrower than uppercase
              equivalents, so a title written in Title Case will fit fewer characters than the same
              content written in sentence case. This is a small difference but it can matter when
              you are sitting right at the 60-character boundary. If your title is just slightly too
              long, switching a word from uppercase to lowercase may be all you need.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              For title tags, put your target keyword close to the front. Google often bolds the
              words in the title that match the search query — and truncation happens at the end,
              not the beginning. A title that leads with the brand name and ends with the keyword
              is more likely to lose the keyword to truncation than one that leads with the keyword
              and ends with the brand.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Meta descriptions are primarily for humans, not algorithms. Google does not use them
              as a ranking signal, but they directly influence click-through rate. Write yours to
              persuade a click, not just describe the page. Include a specific benefit or hook in
              the first 120 characters, and put any call to action before the 160-character cutoff.
              The easiest way to check your meta title and description length before publishing is
              to use a{" "}
              <Link
                href="/tools/character-counter"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                character counter
              </Link>{" "}
              that shows you exactly where you stand against these limits in real time.
            </p>

            {/* H2: Email Limits */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-text">
              Email Character Limits in 2026
            </h2>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-alt">
                    <th className="px-4 py-3 text-left font-semibold text-text">Email Element</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">Recommended Limit</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Subject line", "40 – 60 characters", "~35 chars visible on mobile"],
                    ["Preview text", "40 – 90 characters", "Shown after subject in inbox"],
                    ["From name", "20 – 30 characters", "Displays in the inbox list"],
                    ["Email body", "No hard limit", "Shorter = better engagement"],
                  ].map(([element, limit, why], i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-surface-alt/40" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-text">{element}</td>
                      <td className="px-4 py-3 font-mono text-sm font-semibold text-text">{limit}</td>
                      <td className="px-4 py-3 text-text-secondary">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base leading-relaxed text-text-secondary mb-4 mt-6">
              Mobile email clients are the dominant reading environment in 2026, and they show
              significantly fewer characters than desktop clients. While Gmail on a desktop might
              display 60 characters of your subject line, an iPhone in portrait mode often shows
              only 35 to 40. This is not a reason to write short subject lines across the board —
              it is a reason to make your first 35 characters do the work. Your subject line and
              preview text are your email&apos;s headline, working together to earn the open.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Preview text — the snippet that appears after the subject line in most inboxes — is
              significantly underused. Many marketers leave it blank, which causes email clients to
              pull the first line of body text (often something like "Having trouble viewing this
              email? Click here"). Setting deliberate preview text of 40 to 90 characters gives you
              a second line of subject copy to work with, effectively doubling the information you
              can communicate before the open.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Personalisation tokens like{" "}
              <span className="font-mono text-sm text-text">[First Name]</span> count toward your
              character limit in their placeholder form, not their rendered form. A subject line
              with <span className="font-mono text-sm text-text">"Hey [First Name], your results are in"</span> is
              longer in the editor than it appears to recipients named "Al" — but longer than it
              appears to recipients named "Bartholomew." Build your subject line around the longest
              plausible version of any personalisation variable.
            </p>

            {/* H2: SMS and Messaging */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-text">
              SMS and Messaging Character Limits
            </h2>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-alt">
                    <th className="px-4 py-3 text-left font-semibold text-text">Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">Character Limit</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Standard SMS (GSM-7)", "160 characters", "Latin alphabet text"],
                    ["SMS with emoji / Unicode", "70 characters", "Encoding switches to UCS-2"],
                    ["Concatenated SMS", "153 characters per part", "Multi-part messages"],
                    ["WhatsApp message", "65,536 characters", "Effectively unlimited"],
                    ["iMessage", "20,000 characters", "Effectively unlimited"],
                    ["Telegram", "4,096 characters", "Per message"],
                  ].map(([type, limit, note], i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-surface-alt/40" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-text">{type}</td>
                      <td className="px-4 py-3 font-mono text-sm font-semibold text-text">{limit}</td>
                      <td className="px-4 py-3 text-text-secondary">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base leading-relaxed text-text-secondary mb-4 mt-6">
              The 160-character SMS limit has been around since 1985 and has never changed — it is
              baked into the GSM standard at the protocol level. What trips people up in 2026 is the
              emoji rule: the moment you include a single emoji in an SMS, the message switches from
              GSM-7 encoding to UCS-2, and your limit drops from 160 characters to 70. A message
              that is 100 characters with an emoji becomes two billable SMS segments rather than
              one. That cost doubles instantly.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              For business SMS campaigns, the per-segment billing model makes character count a
              direct revenue concern. A 200-character message without special characters sends as
              two segments of 153 characters (concatenated SMS uses a slightly lower per-segment
              limit to accommodate the linking header). Trimming a campaign message from 200
              characters to 153 cuts your per-send cost in half across potentially millions of
              messages.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Modern messaging platforms like WhatsApp and iMessage have effectively eliminated the
              character limit problem for personal and business messaging. The 160-character
              constraint now matters primarily in three contexts: SMS marketing campaigns billed
              by segment, automated system notifications sent via SMS API, and messages to recipients
              on older devices or networks where rich messaging is not available.
            </p>

            {/* H2: How to Check */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-text">
              How to Check Character Count Before You Publish
            </h2>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              The challenge with character limits is not knowing them — it is checking them quickly
              across multiple platforms without breaking your writing flow. Manually counting is
              essentially impossible at any speed, and copy-pasting text from your draft into a
              platform editor to see if it fits is a slow, error-prone workaround that interrupts
              your thinking.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              The practical solution is a real-time character counter that shows you multiple
              platform limits simultaneously as you type. Instead of checking one platform at a time,
              you can see exactly where your text sits against X, Instagram, LinkedIn, SMS, and meta
              description limits all at once — and edit until it fits before you ever touch the
              publishing interface.
            </p>

            {/* CTA Card */}
            <div className="my-8 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-bold text-text">Check Every Character Limit Instantly</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Paste your text into our free Character Counter and instantly see where you stand
                against 10 platform limits at once — X, Instagram, LinkedIn, SMS, meta tags and
                more. All in real time, no sign-up required.
              </p>
              <Link
                href="/tools/character-counter"
                className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary/90"
              >
                Try Character Counter Free →
              </Link>
            </div>

            <h3 className="mt-6 mb-3 text-xl font-semibold text-text">
              How to Use PickBlend&apos;s Character Counter
            </h3>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Open the{" "}
              <Link
                href="/tools/character-counter"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                Character Counter
              </Link>{" "}
              and paste or type your text directly into the editor. The tool starts counting
              immediately — no button to press, no wait. You see your character count, word count
              and line count update in real time with each keystroke.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Below the editor, the platform limits panel shows how your current character count
              compares to 10 different platforms and content types. Each platform row shows a
              progress bar that fills as you approach the limit and turns red if you exceed it.
              You can see at a glance whether your text fits X, Instagram, SMS, meta descriptions,
              and LinkedIn all at the same time — without switching between tabs.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              There is also a toggle to switch between counting characters with and without spaces.
              Some platforms count spaces; others do not. The toggle lets you check both immediately.
              Once your text fits your target platform, copy it directly from the editor and paste
              it into your publishing interface — no reformatting needed.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Everything runs in your browser. Your text never leaves your device, which makes this
              tool safe to use with unreleased campaigns, draft announcements, and confidential
              brand messaging. There is no account required and no usage limit.
            </p>

            {/* H2: Pro Tips */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-text">
              Pro Tips for Writing Within Character Limits
            </h2>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Knowing the limits is half the battle. Writing tight, effective copy within them is
              the other half. These six habits make a real difference:
            </p>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              <strong className="font-semibold text-text">1. Write long first, cut second.</strong>{" "}
              Trying to write to a character limit from the start produces stilted, unnatural copy.
              Write what you actually want to say without counting, then edit down. Cutting is
              almost always easier and faster than expanding — and the original draft usually
              contains at least 20% of words that can be removed without losing anything.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              <strong className="font-semibold text-text">2. Lead with the most important information.</strong>{" "}
              Whatever gets cut should be the least critical part. If you structure your content
              so the best material comes first, any truncation at the display threshold cuts away
              context rather than the core message. This is also just better writing — front-loading
              the key point respects the reader&apos;s time.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              <strong className="font-semibold text-text">3. Use contractions to save characters.</strong>{" "}
              "You are" costs 6 characters; "You&apos;re" costs 6 characters including the apostrophe —
              the same. But "It is" costs 5; "It&apos;s" costs 4. "Do not" becomes "Don&apos;t." "They are"
              becomes "They&apos;re." The savings are small individually but across a tight 160-character
              message they can be the difference between fitting and having to cut a word.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              <strong className="font-semibold text-text">4. Remove filler words ruthlessly.</strong>{" "}
              Words like "very," "really," "just," "that," "actually," and "quite" almost never
              add meaning. They are comfort words writers reach for without noticing. Read your
              copy once specifically hunting for them and delete every one. Your copy will be
              tighter and more direct without any loss of meaning.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              <strong className="font-semibold text-text">5. Use numerals instead of spelling out numbers.</strong>{" "}
              "five minutes" is 12 characters; "5 minutes" is 9. "twenty-four hours" is 18
              characters; "24 hours" is 8. Numbers also draw the eye when someone is scanning a
              feed, which makes them a double win — they save space and create visual anchors that
              help your content stand out.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              <strong className="font-semibold text-text">6. Write a native version for each platform.</strong>{" "}
              Copy-pasting across platforms is the root cause of most character limit problems.
              The instinct to repurpose the same content everywhere is understandable, but X
              requires a completely different approach to LinkedIn, which requires a completely
              different approach to a YouTube description. Take five minutes to write a native
              version for each platform rather than hours spent reformatting a single version that
              fits nowhere well.
            </p>

            {/* H2: FAQ */}
            <h2 className="mt-10 mb-6 text-2xl font-bold text-text">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-text">
                  What is the character limit for X (formerly Twitter) in 2026?
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  The standard character limit for posts on X in 2026 is 280 characters for regular
                  accounts. Spaces, punctuation and links all count toward this limit, though links
                  are shortened to 23 characters by the platform regardless of their actual length.
                  X Premium subscribers have access to extended post lengths, but 280 characters is
                  the limit for the vast majority of users and the format that the platform&apos;s
                  design and culture are built around.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-text">
                  How many characters is a good meta description?
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  A meta description should be between 150 and 160 characters for best results in
                  Google search in 2026. Shorter descriptions — under 120 characters — may be
                  expanded by Google with text pulled automatically from your page, which can
                  produce unpredictable results. Descriptions over 160 characters get truncated
                  with an ellipsis in search results, often cutting off the call to action at the
                  end of the snippet.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-text">
                  Why do character limits differ between platforms?
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  Character limits are a reflection of each platform&apos;s design philosophy and user
                  behaviour. Short-form platforms like X prioritise brevity and rapid consumption.
                  Professional platforms like LinkedIn allow longer posts because their audience
                  expects substance. SMS&apos;s 160-character limit is a hard technical constraint
                  built into the GSM protocol — it has nothing to do with design decisions. Each
                  limit is both a constraint and a shaping force for the type of content that
                  thrives on that platform.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-text">
                  Does an emoji count as one character?
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  It depends on the platform and encoding. On most social media platforms, a single
                  emoji counts as one or two characters for display purposes. In SMS messaging, the
                  situation is more severe: an emoji forces a switch from GSM-7 encoding to UCS-2,
                  which cuts the per-message limit from 160 characters to 70. A single emoji in an
                  otherwise compliant 160-character message can split it into two billable segments.
                  Always verify how your specific platform handles emoji before building them into
                  time-sensitive or cost-sensitive campaigns.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-text">
                  What is the character limit for a LinkedIn post in 2026?
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  LinkedIn posts allow up to 3,000 characters in 2026. However, only the first 210
                  characters are visible in the feed before the "See more" prompt appears. This
                  makes the opening 210 characters — roughly two to three sentences — the most
                  important part of any LinkedIn post. They need to hook the reader strongly enough
                  to prompt a click before the rest of the post is ever seen.
                </p>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12">
              <h2 className="mb-5 text-2xl font-bold text-text">More Content Writing Guides</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <Link
                  href="/blog/how-many-words-in-a-paragraph"
                  className="group rounded-xl border border-border bg-white p-4 transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                    Writing Tips
                  </span>
                  <p className="text-sm font-medium text-text group-hover:text-primary transition-colors">
                    How Many Words Are in a Paragraph?
                  </p>
                </Link>
                <Link
                  href="/blog/how-long-does-it-take-to-read-1400-words"
                  className="group rounded-xl border border-border bg-white p-4 transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                    Writing Tips
                  </span>
                  <p className="text-sm font-medium text-text group-hover:text-primary transition-colors">
                    How Long Does It Take to Read 1,400 Words?
                  </p>
                </Link>
                <div className="rounded-xl border border-dashed border-border bg-surface-alt/60 p-4">
                  <span className="mb-2 inline-block rounded-full bg-surface-hover px-2 py-0.5 text-xs font-semibold text-text-secondary">
                    Coming Soon
                  </span>
                  <p className="text-sm font-medium text-text/60">Meta Description Length Guide for SEO</p>
                </div>
              </div>
            </div>

            {/* Related Tools */}
            <div className="mt-10">
              <h2 className="mb-4 text-lg font-semibold uppercase tracking-wider text-text-secondary">
                Related Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Character Counter", href: "/tools/character-counter" },
                  { name: "Word Counter", href: "/tools/word-counter" },
                  { name: "Reading Time Calculator", href: "/tools/reading-time-calculator" },
                  { name: "Case Converter", href: "/tools/case-converter" },
                ].map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                  >
                    {tool.name} →
                  </Link>
                ))}
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-10 border-t border-border pt-8">
              <Link
                href="/blog"
                className="text-sm font-semibold text-text-secondary transition-colors hover:text-primary"
              >
                ← Back to Blog
              </Link>
            </div>

          </div>
        </article>
      </main>
    </>
  );
}
