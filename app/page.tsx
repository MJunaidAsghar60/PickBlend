import type { Metadata } from "next";
import Link from "next/link";
import {
  Type,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Timer,
  BarChart3,
  Sparkles,
  MousePointerClick,
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
    iconColor: "text-accent-orange",
    bg: "bg-orange-50",
  },
  {
    icon: Shield,
    title: "100% Private",
    description:
      "Your text never leaves your browser. Everything runs locally with zero server calls.",
    iconColor: "text-accent-green",
    bg: "bg-green-50",
  },
  {
    icon: BarChart3,
    title: "Deep Insights",
    description:
      "Go beyond word count — keyword density, reading time, speaking time and more.",
    iconColor: "text-primary",
    bg: "bg-blue-50",
  },
  {
    icon: MousePointerClick,
    title: "Zero Friction",
    description:
      "No sign-ups, no ads blocking your view, no paywalls. Just open and start writing.",
    iconColor: "text-accent-red",
    bg: "bg-red-50",
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
  },
  {
    name: "Reading Time Calculator",
    href: "/tools/reading-time-calculator",
    icon: Timer,
    description:
      "Calculate reading time, speaking time, and presentation pacing. Supports multiple speeds with benchmarks for articles, speeches, podcasts, and video scripts.",
    tag: "New",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 -top-40 h-125 w-125 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-20 -right-40 h-100 w-100 rounded-full bg-primary/3 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Free forever — no sign-up required
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
            Free Online Writing Tools —{" "}
            <span className="text-primary">Word Counter, Reading Time & More</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
            Instant, browser-based utilities for writers, students, bloggers and content creators. No sign-up, no ads, 100% private.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
            Free, blazing-fast writing utilities that run entirely in your browser. Count words, analyze keyword density, calculate reading and speaking time — all in real time, all completely free, all 100% private.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/tools/word-counter"
              className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Count Words Free →
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#tools"
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white px-8 py-3.5 text-sm font-semibold text-text shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              Explore All Tools
            </a>
          </div>
        </div>
      </section>

      {/* ========== FEATURES ========== */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              Why Choose PickBlend?
            </h2>
            <p className="mt-3 text-text-secondary">
              Built differently — designed for speed, privacy, and delight.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${f.bg}`}
                  >
                    <Icon
                      className={`h-6 w-6 ${f.iconColor}`}
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-base font-bold text-text">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== TOOLS SHOWCASE ========== */}
      <section id="tools" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              Our Tools
            </h2>
            <p className="mt-3 text-text-secondary">
              Explore our growing collection of free writing and SEO utilities.
            </p>
          </div>

          <div className="space-y-5">
            {toolsList.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col gap-5 rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 sm:flex-row sm:items-center sm:p-8"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20">
                    <Icon className="h-8 w-8 text-white" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-bold text-text">
                        {tool.name}
                      </h3>
                      {tool.tag && (
                        <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
                          {tool.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {tool.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                    {tool.name === "Word Counter" ? "Count Words Free →" : "Calculate Reading Time →"}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Coming soon teaser */}
          <div className="mt-8 rounded-2xl border-2 border-dashed border-border bg-surface-alt/50 p-8 text-center">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-hover">
              <Clock className="h-6 w-6 text-text-secondary/40" />
            </div>
            <h3 className="text-base font-bold text-text">More Tools Coming Soon</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Grammar checker, plagiarism detector, readability scorer, and more
              — stay tuned!
            </p>
          </div>
        </div>
      </section>

      {/* ========== STATS STRIP ========== */}
      <section className="border-y border-border bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {[
            { value: "100%", label: "Free Forever" },
            { value: "0", label: "Data Sent to Servers" },
            { value: "<1s", label: "Analysis Speed" },
            { value: "24/7", label: "Available Online" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-extrabold text-primary sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-text-secondary">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-text sm:text-3xl">
            Ready to level up your writing?
          </h2>
          <p className="mt-4 text-text-secondary">
            Jump into our Word Counter tool right now — no sign-up, no cost,
            no catch.
          </p>
          <Link
            href="/tools/word-counter"
            className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            Get Started — It&apos;s Free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
