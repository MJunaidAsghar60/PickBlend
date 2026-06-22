import type { Metadata } from "next";
import Link from "next/link";
import {
  Type,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  MousePointerClick,
  Timer,
  Hash,
  CaseSensitive,
  FileText,
  AlignLeft,
  Repeat,
  BookOpen,
  TrendingUp,
  Pilcrow,
} from "lucide-react";

export const metadata: Metadata = {
  // Title handled by layout.tsx default
};

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Real-time analysis as you type — no waiting, no page reloads, instant results.",
  },
  {
    icon: Shield,
    title: "100% Private",
    description:
      "Your text never leaves your browser. Everything runs locally with zero server calls.",
  },
  {
    icon: BarChart3,
    title: "Deep Insights",
    description:
      "Go beyond word count — keyword density, reading time, speaking time and more.",
  },
  {
    icon: MousePointerClick,
    title: "Zero Friction",
    description:
      "No sign-ups, no paywalls, no intrusive ads. Just open and start writing.",
  },
];

const toolsList = [
  {
    name: "Word Counter",
    href: "/tools/word-counter",
    icon: Type,
    description:
      "Count words, characters, sentences & paragraphs. Get reading time estimates, keyword density analysis, and text transformation tools.",
    tag: "Most Popular",
    cta: "Count Words Free →",
    iconBg: "bg-primary-subtle",
    iconColor: "text-primary",
  },
  {
    name: "Reading Time Calculator",
    href: "/tools/reading-time-calculator",
    icon: Timer,
    description:
      "Calculate reading time, speaking time, and presentation pacing. Supports multiple speeds with benchmarks for articles, speeches, podcasts, and video scripts.",
    tag: "New",
    cta: "Calculate Reading Time →",
    iconBg: "bg-accent-amber-bg",
    iconColor: "text-accent-amber",
  },
  {
    name: "Character Counter",
    href: "/tools/character-counter",
    icon: Hash,
    description:
      "Count characters with and without spaces instantly. Check X, Instagram, SMS and meta tag limits in real time.",
    tag: "New",
    cta: "Count Characters Free →",
    iconBg: "bg-accent-orange-bg",
    iconColor: "text-accent-orange",
  },
  {
    name: "Text Case Converter",
    href: "/tools/case-converter",
    icon: CaseSensitive,
    description:
      "Convert text to UPPERCASE, lowercase, Title Case, camelCase, snake_case and more with a single click.",
    tag: "New",
    cta: "Convert Case Free →",
    iconBg: "bg-accent-sky-bg",
    iconColor: "text-accent-sky",
  },
  {
    name: "Lorem Ipsum Generator",
    href: "/tools/lorem-ipsum-generator",
    icon: FileText,
    description:
      "Generate placeholder text by paragraphs, sentences or words. Perfect for designers and developers.",
    tag: "New",
    cta: "Generate Text Free →",
    iconBg: "bg-accent-green-bg",
    iconColor: "text-accent-green",
  },
  {
    name: "Sentence Counter",
    href: "/tools/sentence-counter",
    icon: AlignLeft,
    description:
      "Count sentences in real time with average length analysis and numbered sentence breakdown. Perfect for writers and students.",
    tag: "New",
    cta: "Count Sentences Free →",
    iconBg: "bg-primary-subtle",
    iconColor: "text-primary",
  },
  {
    name: "Text Repeater",
    href: "/tools/text-repeater",
    icon: Repeat,
    description:
      "Repeat any text 1 to 100 times with custom separators, prefix, suffix and auto numbering. Perfect for developers and QA testing.",
    tag: "New",
    cta: "Repeat Text Free →",
    iconBg: "bg-accent-amber-bg",
    iconColor: "text-accent-amber",
  },
  {
    name: "Readability Score",
    href: "/tools/readability-score",
    icon: BookOpen,
    description:
      "Check Flesch Reading Ease, Flesch-Kincaid Grade Level and 6 readability scores instantly. Includes a visual difficulty gauge.",
    tag: "New",
    cta: "Check Readability Free →",
    iconBg: "bg-[#FDF4FF]",
    iconColor: "text-purple-600",
  },
  {
    name: "Word Frequency Counter",
    href: "/tools/word-frequency",
    icon: TrendingUp,
    description:
      "Analyze word frequency with a sortable table, stop words filter and keyword density percentage. Essential for SEO writers.",
    tag: "New",
    cta: "Analyze Word Frequency →",
    iconBg: "bg-accent-orange-bg",
    iconColor: "text-accent-orange",
  },
  {
    name: "Paragraph Counter",
    href: "/tools/paragraph-counter",
    icon: Pilcrow,
    description:
      "Count paragraphs with per-paragraph word count, sentence count and character count breakdown. Perfect for long-form writers.",
    tag: "New",
    cta: "Count Paragraphs Free →",
    iconBg: "bg-accent-green-bg",
    iconColor: "text-accent-green",
  },
];

function TagBadge({ tag }: { tag: string }) {
  if (tag === "Most Popular") {
    return (
      <span className="rounded-full border border-primary-border bg-primary-subtle px-2 py-0.5 text-xs font-medium text-primary">
        {tag}
      </span>
    );
  }
  if (tag === "Dev Tool") {
    return (
      <span className="rounded-full border border-accent-sky-bg bg-accent-sky-bg px-2 py-0.5 text-xs font-medium text-accent-sky">
        {tag}
      </span>
    );
  }
  return (
    <span className="rounded-full border border-accent-green-border bg-accent-green-bg px-2 py-0.5 text-xs font-medium text-accent-green">
      {tag}
    </span>
  );
}

export default function HomePage() {
  return (
    <main className="bg-background">
      {/* ========== HERO ========== */}
      <section className="px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Announcement pill */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-border bg-primary-subtle px-3 py-1.5 text-xs font-medium text-primary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            10 free tools — no sign-up, no tracking
          </div>

          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-text sm:text-5xl">
            Free Online Writing Tools —{" "}
            <span className="text-primary">Word Counter, Reading Time & More</span>
          </h1>

          <p className="mx-auto mt-4 mb-8 max-w-xl text-lg leading-relaxed text-text-secondary">
            Instant, browser-based utilities for writers, students, bloggers and content creators. No sign-up, 100% private.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/tools/word-counter"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-text-inverse shadow-[var(--shadow-primary)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg"
            >
              Count Words Free →
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#tools"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-text transition-all duration-150 hover:bg-surface-hover"
            >
              Explore All Tools
            </a>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE ========== */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Why PickBlend
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
              Built for Speed, Privacy & Simplicity
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-surface p-6 transition-all duration-150 hover:border-primary-border hover:shadow-[var(--shadow-md)]"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-subtle text-primary">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="mb-1 text-base font-semibold text-text">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== TOOLS GRID ========== */}
      <section id="tools" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              All Tools
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
              10 Free Writing Utilities
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {toolsList.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col rounded-2xl border border-border bg-surface p-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-primary-border hover:shadow-[var(--shadow-md)]"
                >
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${tool.iconBg} ${tool.iconColor}`}>
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>

                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-text">
                      {tool.name}
                    </h3>
                    <TagBadge tag={tool.tag} />
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                    {tool.description}
                  </p>

                  <div className="mt-auto flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary-dark">
                    {tool.cta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/tools"
              className="text-sm font-medium text-primary transition-colors hover:text-primary-dark"
            >
              Browse all 10 tools →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== STATS STRIP ========== */}
      <section className="border-y border-border bg-surface px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {[
            { value: "10", label: "Tools" },
            { value: "100%", label: "Free Forever" },
            { value: "0", label: "Data Sent" },
            { value: "238 wpm", label: "Default Speed" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-text">{s.value}</p>
              <p className="mt-1 text-sm text-text-secondary">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-3xl border border-primary-border bg-primary-subtle p-10 text-center">
          <h2 className="text-2xl font-bold text-text">
            Ready to level up your writing?
          </h2>
          <p className="mt-2 mb-6 text-text-secondary">
            Jump into our Word Counter right now — no sign-up, no cost, no catch.
          </p>
          <Link
            href="/tools/word-counter"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-medium text-text-inverse shadow-[var(--shadow-primary)] transition-all hover:bg-primary-dark hover:shadow-lg"
          >
            Get Started — It&apos;s Free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
