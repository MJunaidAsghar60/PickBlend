import type { Metadata } from "next";
import Link from "next/link";
import {
  Type,
  Timer,
  Hash,
  CaseSensitive,
  FileText,
  Clock,
  ArrowRight,
  AlignLeft,
  Repeat,
} from "lucide-react";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "Free Online Writing Tools — Word Counter, Reading Time & More | PickBlend",
  description:
    "Browse all free writing tools by PickBlend. Word counter, reading time calculator, character counter, case converter, lorem ipsum generator and more. No sign-up, 100% private.",
  alternates: {
    canonical: `${BASE_URL}/tools`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Free Online Writing Tools — Word Counter, Reading Time & More | PickBlend",
    description:
      "Browse all free writing tools by PickBlend. Word counter, reading time calculator, character counter, case converter, lorem ipsum generator and more. No sign-up, 100% private.",
    url: `${BASE_URL}/tools`,
    images: [{ url: `${BASE_URL}/og/home.png`, width: 1200, height: 630, alt: "PickBlend Free Writing Tools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Writing Tools — Word Counter, Reading Time & More | PickBlend",
    description:
      "Browse all free writing tools by PickBlend. Word counter, reading time calculator, character counter, case converter, lorem ipsum generator and more. No sign-up, 100% private.",
    images: [`${BASE_URL}/og/home.png`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

function PageJsonLd() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${BASE_URL}/tools` },
    ],
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free Writing Tools",
    url: `${BASE_URL}/tools`,
    numberOfItems: 5,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Word Counter", url: `${BASE_URL}/tools/word-counter` },
      { "@type": "ListItem", position: 2, name: "Reading Time Calculator", url: `${BASE_URL}/tools/reading-time-calculator` },
      { "@type": "ListItem", position: 3, name: "Character Counter", url: `${BASE_URL}/tools/character-counter` },
      { "@type": "ListItem", position: 4, name: "Text Case Converter", url: `${BASE_URL}/tools/case-converter` },
      { "@type": "ListItem", position: 5, name: "Lorem Ipsum Generator", url: `${BASE_URL}/tools/lorem-ipsum-generator` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </>
  );
}

const liveTools = [
  {
    name: "Word Counter",
    href: "/tools/word-counter",
    icon: Type,
    description:
      "Count words, characters, sentences and paragraphs in real time. Includes reading time, keyword density and text case tools.",
    badge: "Most Popular",
    badgeColor: "bg-primary/10 text-primary",
    cta: "Count Words Free",
  },
  {
    name: "Reading Time Calculator",
    href: "/tools/reading-time-calculator",
    icon: Timer,
    description:
      "Calculate reading time and speaking time at multiple speeds. Benchmarks for blogs, speeches, TED talks, podcasts and scripts.",
    badge: "New",
    badgeColor: "bg-accent-green/10 text-accent-green",
    cta: "Calculate Reading Time",
  },
  {
    name: "Character Counter",
    href: "/tools/character-counter",
    icon: Hash,
    description:
      "Count characters with and without spaces. Essential for Twitter, meta descriptions, SMS, and platform character limits.",
    badge: "New",
    badgeColor: "bg-accent-green/10 text-accent-green",
    cta: "Count Characters",
  },
  {
    name: "Text Case Converter",
    href: "/tools/case-converter",
    icon: CaseSensitive,
    description:
      "Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case and more instantly.",
    badge: "New",
    badgeColor: "bg-accent-green/10 text-accent-green",
    cta: "Convert Case",
  },
  {
    name: "Lorem Ipsum Generator",
    href: "/tools/lorem-ipsum-generator",
    icon: FileText,
    description:
      "Generate placeholder text by paragraphs, sentences or words. Perfect for designers, developers and mockups.",
    badge: "New",
    badgeColor: "bg-accent-green/10 text-accent-green",
    cta: "Generate Text",
  },
  {
    name: "Sentence Counter",
    href: "/tools/sentence-counter",
    icon: AlignLeft,
    description:
      "Count sentences in real time with average sentence length, longest and shortest sentence analysis.",
    badge: "New",
    badgeColor: "bg-accent-green/10 text-accent-green",
    cta: "Count Sentences Free",
  },
  {
    name: "Text Repeater",
    href: "/tools/text-repeater",
    icon: Repeat,
    description:
      "Repeat any word, phrase or text block multiple times with custom separator, prefix, suffix and numbering.",
    badge: "New",
    badgeColor: "bg-accent-green/10 text-accent-green",
    cta: "Repeat Text Free",
  },
];

const comingSoonTools = [
  { name: "Readability Score", href: "/tools/readability-score", description: "Flesch Reading Ease & grade level analysis" },
  { name: "Word Frequency Counter", href: "/tools/word-frequency", description: "Analyse word usage and keyword density" },
  { name: "Paragraph Counter", href: "/tools/paragraph-counter", description: "Count paragraphs and check structure" },
];

export default function ToolsPage() {
  return (
    <>
      <PageJsonLd />
      <main>
        {/* ========== HERO ========== */}
        <section className="px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-text-secondary">
              <Link href="/" className="transition-colors hover:text-primary">Home</Link>
              <span>/</span>
              <span className="text-text">Tools</span>
            </nav>

            <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
              Free Online Writing Tools
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg">
              All PickBlend tools run entirely in your browser — your text never leaves your device. Whether
              you are a student checking essay length, a blogger estimating read time, a developer needing
              placeholder text, or a writer polishing formatting, our free toolkit has you covered. No
              sign-up required, no ads blocking your work, no data sent to servers.
            </p>
          </div>
        </section>

        {/* ========== LIVE TOOLS ========== */}
        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-lg font-bold uppercase tracking-wider text-text-secondary">
              Available Now
            </h2>
            <div className="space-y-4">
              {liveTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="group flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 sm:flex-row sm:items-center sm:p-7"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20">
                      <Icon className="h-7 w-7 text-white" strokeWidth={1.8} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-base font-bold text-text sm:text-lg">{tool.name}</h3>
                        {tool.badge && (
                          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${tool.badgeColor}`}>
                            {tool.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                        {tool.description}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                      {tool.cta}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* ========== COMING SOON ========== */}
            <h2 className="mb-6 mt-12 text-lg font-bold uppercase tracking-wider text-text-secondary">
              Coming Soon
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {comingSoonTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="flex items-center gap-3 rounded-2xl border border-dashed border-border bg-surface-alt/60 px-5 py-4 transition-colors hover:border-primary/30 hover:bg-surface-alt"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-hover">
                    <Clock className="h-5 w-5 text-text-secondary/40" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text/60">{tool.name}</p>
                    <p className="text-xs text-text-secondary/50">{tool.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
