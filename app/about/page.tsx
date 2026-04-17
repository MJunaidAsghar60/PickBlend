import type { Metadata } from "next";
import Link from "next/link";
import { Construction } from "lucide-react";

export const metadata: Metadata = {
  title: "About PickBlend — Free Writing Tools for Everyone",
  description:
    "PickBlend builds free, privacy-first writing tools including word counter, reading time calculator, character counter, text case converter, and lorem ipsum generator. No sign-up, 100% private.",
  authors: [{ name: "PickBlend" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "About PickBlend — Free Writing Tools for Everyone",
    description:
      "PickBlend builds free, privacy-first writing tools including word counter, reading time calculator, character counter, text case converter, and lorem ipsum generator. No sign-up, 100% private.",
    url: "https://pickblend.com/about",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://pickblend.com/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
            About PickBlend
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Free, privacy-first writing tools for everyone
          </p>
        </header>

        <div className="prose prose-lg mx-auto space-y-6 text-text-secondary">
          <p className="text-lg leading-relaxed">
            PickBlend builds free, privacy-first writing tools for writers, students, bloggers, and content creators. We believe essential writing utilities should be accessible to everyone — no sign-ups, no paywalls, no ads blocking your work, and no data sent to servers.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-text">Our Mission</h2>
          <p>
            We&apos;re tired of writing tools that track your every keystroke, bombard you with ads, or lock features behind subscriptions. PickBlend takes a different approach: everything runs locally in your browser. Your text never leaves your device. We don&apos;t collect analytics, we don&apos;t track users, and we don&apos;t sell data. What you write is yours alone.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-text">Who We Build For</h2>
          <p>
            Our tools are designed for anyone who writes — students checking word counts for essays, bloggers optimizing articles for SEO, content creators estimating reading times, speechwriters preparing presentations, and social media managers staying within character limits. Developers and designers rely on our <Link href="/tools/case-converter" className="text-primary underline underline-offset-2">Text Case Converter</Link> for instant camelCase, snake_case and kebab-case conversion, and our <Link href="/tools/lorem-ipsum-generator" className="text-primary underline underline-offset-2">Lorem Ipsum Generator</Link> for placeholder text during prototyping. Whether you&apos;re writing a tweet or a thesis, PickBlend has the utilities you need.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-text">Privacy by Design</h2>
          <p>
            Privacy isn&apos;t a feature — it&apos;s our foundation. Every tool we build runs entirely in your browser using client-side JavaScript. We use LocalStorage to auto-save your work, but that data never leaves your machine. No server calls, no cloud sync, no third-party trackers. You can even use our tools offline once the page loads.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-text">Always Free</h2>
          <p>
            PickBlend is free forever. No freemium tricks, no trial periods, no hidden costs. We believe basic writing utilities should be a public good, available to everyone regardless of budget. Our tools are open for students in developing countries, freelancers just starting out, and anyone who values simplicity over subscription fatigue.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-text">What&apos;s Next</h2>
          <p>
            We&apos;re constantly expanding our toolkit. Our current suite includes ten free tools: a comprehensive <Link href="/tools/word-counter" className="text-primary underline underline-offset-2">Word Counter</Link> with keyword density analysis, a <Link href="/tools/reading-time-calculator" className="text-primary underline underline-offset-2">Reading Time Calculator</Link> with speaking time estimates, a <Link href="/tools/character-counter" className="text-primary underline underline-offset-2">Character Counter</Link> with live platform limit tracking, a <Link href="/tools/case-converter" className="text-primary underline underline-offset-2">Text Case Converter</Link> supporting ten case formats, a <Link href="/tools/lorem-ipsum-generator" className="text-primary underline underline-offset-2">Lorem Ipsum Generator</Link>, a <Link href="/tools/sentence-counter" className="text-primary underline underline-offset-2">Sentence Counter</Link>, a <Link href="/tools/paragraph-counter" className="text-primary underline underline-offset-2">Paragraph Counter</Link>, a <Link href="/tools/text-repeater" className="text-primary underline underline-offset-2">Text Repeater</Link>, a <Link href="/tools/readability-score" className="text-primary underline underline-offset-2">Readability Score Checker</Link>, and a <Link href="/tools/word-frequency" className="text-primary underline underline-offset-2">Word Frequency Analyzer</Link>. Coming soon: grammar checker, plagiarism detector, text diff checker — all built with the same privacy-first approach.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-text">Our Technical Approach</h2>
          <p>
            Every PickBlend tool is built as a React client component using Next.js 16 and TypeScript, styled with Tailwind CSS and deployed on Vercel&apos;s global edge network. All analysis logic runs synchronously in the browser — there are zero server calls during tool use. We use <code className="rounded bg-gray-100 px-1 font-mono text-sm">localStorage</code> for auto-saving your work on applicable tools, so your text persists between sessions without ever touching a remote server. Our tools work offline once the page has loaded.
          </p>
          <p>
            We chose this architecture deliberately. Client-side execution is not just a privacy feature — it is also faster and more reliable than round-tripping to a server for a word count. Our build pipeline uses TypeScript strict mode and automated static generation so every page renders as pre-built HTML, meaning sub-100ms load times even on slow connections.
          </p>
          <p>
            Our development philosophy is correctness first, performance second, feature scope third. We would rather have ten tools that do exactly what they promise than fifty that are mediocre.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-text">Who We Build For</h2>
          <p>
            <strong className="text-text">Students</strong> use our Word Counter and Sentence Counter to hit essay word requirements and check their work before submission. <strong className="text-text">Bloggers and content marketers</strong> rely on the Reading Time Calculator and Readability Score Checker to calibrate article length and reading level before publishing. <strong className="text-text">Developers</strong> reach for the Text Case Converter daily for instant camelCase, snake_case, PascalCase and kebab-case conversion without context-switching. <strong className="text-text">Designers</strong> use the Lorem Ipsum Generator for realistic placeholder text during prototyping. <strong className="text-text">Social media managers</strong> keep the Character Counter open to stay within Twitter, Instagram, LinkedIn and SMS limits in real time. <strong className="text-text">Speakers and presenters</strong> use the speaking time calculator to script exactly the right number of words for a 10-minute TED-style talk or conference presentation.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-text">Our Commitment</h2>
          <p>
            PickBlend is free forever. Not free with a 7-day trial, not free for basic features with a paid upgrade — completely free, for every tool, for every user, with no registration required. We believe essential writing utilities should be a public good. Students in any country, freelancers on any budget and teams of any size should have access to the same quality tools as enterprise software users.
          </p>
          <p>
            Our privacy commitment is backed by architecture, not just policy. Because all processing happens in your browser, it is technically impossible for us to read or store your text even if we wanted to. We do not run analytics on your content, we do not track what you write, and we do not sell data. For full details on what limited data we do collect (page views, basic analytics), see our <Link href="/privacy-policy" className="text-primary underline underline-offset-2">Privacy Policy</Link>.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
            <p className="text-sm leading-relaxed">
              Learn more about the writers and developers behind PickBlend, our background and why we built these tools.
            </p>
            <Link
              href="/authors/pickblend-team"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark underline-offset-2 hover:underline"
            >
              Meet the PickBlend Team →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
