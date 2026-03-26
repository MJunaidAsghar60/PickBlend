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
            We&apos;re constantly expanding our toolkit. Our current toolkit includes five free tools: a comprehensive <Link href="/tools/word-counter" className="text-primary underline underline-offset-2">Word Counter</Link> with keyword density analysis and text case conversion, a <Link href="/tools/reading-time-calculator" className="text-primary underline underline-offset-2">Reading Time Calculator</Link> with speaking time estimates for multiple pacing options, a <Link href="/tools/character-counter" className="text-primary underline underline-offset-2">Character Counter</Link> with live platform limit tracking for Twitter, Instagram, SMS and meta tags, a <Link href="/tools/case-converter" className="text-primary underline underline-offset-2">Text Case Converter</Link> supporting ten case formats including camelCase and snake_case, and a <Link href="/tools/lorem-ipsum-generator" className="text-primary underline underline-offset-2">Lorem Ipsum Generator</Link> for placeholder text by paragraphs, sentences or words. Coming soon: grammar checker, plagiarism detector, readability scorer, text diff checker, and more — all built with the same privacy-first, no-nonsense approach.
          </p>
        </div>
      </article>
    </main>
  );
}
