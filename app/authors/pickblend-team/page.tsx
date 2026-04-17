import type { Metadata } from "next";
import Link from "next/link";
import { Users, Code2, PenLine, Shield, Wrench } from "lucide-react";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "About the PickBlend Team — Writing Tool Experts",
  description:
    "PickBlend is built by a team of writers, developers and content creators passionate about privacy-first browser-based tools.",
  alternates: {
    canonical: `${BASE_URL}/authors/pickblend-team`,
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

function PageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PickBlend",
    url: BASE_URL,
    logo: `${BASE_URL}/icon.svg`,
    description: "Builders of free privacy-first writing tools",
    knowsAbout: [
      "Writing Tools",
      "Content Creation",
      "Web Development",
      "SEO",
      "Readability Analysis",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function AuthorPage() {
  return (
    <>
      <PageJsonLd />
      <main className="px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <header className="mb-10">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-text-secondary">
              <Link href="/" className="transition-colors hover:text-primary">Home</Link>
              <span>/</span>
              <span className="text-text">PickBlend Team</span>
            </nav>
            <h1 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
              The PickBlend Team
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Writers, developers and content creators building privacy-first writing tools for everyone.
            </p>
          </header>

          <div className="space-y-10 text-text-secondary">

            {/* Who We Are */}
            <section>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-text">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-4 w-4 text-primary" />
                </span>
                Who We Are
              </h2>
              <p className="mb-3 leading-relaxed">
                The PickBlend team is a small group of writers, web developers and content strategists who share a
                single frustration: the best writing tools online are buried under paywalls, ad walls and
                privacy-invasive tracking. We decided to build something better.
              </p>
              <p className="mb-3 leading-relaxed">
                Our team brings together years of experience in content creation, front-end web development and SEO.
                We have written for publications, built production web applications and spent countless hours
                optimising content for search engines — which means we understand exactly what writers need from
                a counting and analysis tool, and we have built each feature with real use cases in mind.
              </p>
              <p className="mb-3 leading-relaxed">
                We chose a privacy-first approach from day one because we believe what you write is yours alone.
                No keystroke logging, no analytics on your text, no server calls whatsoever during tool use.
                Every calculation happens locally in your browser, which also means our tools are faster than
                any server-dependent alternative.
              </p>
              <p className="leading-relaxed">
                PickBlend launched in 2026 with a single goal: make professional-grade writing utilities
                available to everyone — students, freelancers, bloggers, developers and content teams — without
                cost or compromise.
              </p>
            </section>

            {/* Our Expertise */}
            <section>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-text">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Wrench className="h-4 w-4 text-primary" />
                </span>
                Our Expertise
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: PenLine,
                    title: "Writing & Content Creation",
                    desc: "Years of experience producing long-form content, blog posts, technical documentation and SEO-optimised articles across multiple industries.",
                  },
                  {
                    icon: Code2,
                    title: "Web Development",
                    desc: "Built with Next.js 16, TypeScript and Tailwind CSS — deployed on Vercel's global CDN. Every tool is a production-quality React application.",
                  },
                  {
                    icon: Users,
                    title: "SEO & Content Strategy",
                    desc: "Deep understanding of keyword research, readability optimisation, content length strategy and how search engines evaluate writing quality.",
                  },
                  {
                    icon: Shield,
                    title: "Readability Analysis",
                    desc: "Hands-on expertise with Flesch-Kincaid, Gunning Fog, SMOG and other readability formulas — and how they affect real audience comprehension.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
                    <item.icon className="mb-2 h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-text">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why We Built PickBlend */}
            <section>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-text">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-4 w-4 text-primary" />
                </span>
                Why We Built PickBlend
              </h2>
              <p className="mb-3 leading-relaxed">
                The writing tool landscape is dominated by bloated, subscription-gated software that treats your
                text as a product. Popular word processors send your keystrokes to remote servers for
                &ldquo;smart suggestions.&rdquo; Free online counters bombard you with full-page ads before you
                can see your word count. We found this unacceptable for what are fundamentally simple,
                deterministic calculations.
              </p>
              <p className="mb-3 leading-relaxed">
                Every tool on PickBlend solves a specific problem that writers, students and developers encounter
                daily. The{" "}
                <Link href="/tools/word-counter" className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark">
                  Word Counter
                </Link>{" "}
                was the first — a real-time counter with keyword density analysis that rivals paid SEO tools.
                The{" "}
                <Link href="/tools/reading-time-calculator" className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark">
                  Reading Time Calculator
                </Link>{" "}
                followed because we kept manually dividing word counts by 238 (the scientifically validated
                average reading speed per Brysbaert et al., 2019). We built the tool we wished existed.
              </p>
              <p className="leading-relaxed">
                Today PickBlend offers ten free tools including a{" "}
                <Link href="/tools/character-counter" className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark">
                  Character Counter
                </Link>
                ,{" "}
                <Link href="/tools/case-converter" className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark">
                  Case Converter
                </Link>
                ,{" "}
                <Link href="/tools/readability-score" className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark">
                  Readability Score Checker
                </Link>{" "}
                and more — all built to the same standard: fast, private, free and accurate.
              </p>
            </section>

            {/* Our Technical Approach */}
            <section>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-text">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Code2 className="h-4 w-4 text-primary" />
                </span>
                Our Technical Approach
              </h2>
              <p className="mb-3 leading-relaxed">
                All PickBlend tools are built as React client components using Next.js 16 with TypeScript for
                type safety and Tailwind CSS for styling. The entire application is deployed on Vercel&apos;s
                global edge network, ensuring fast load times regardless of where in the world you access it.
              </p>
              <p className="mb-3 leading-relaxed">
                We use <code className="rounded bg-surface-hover px-1 font-mono text-sm text-text">localStorage</code>{" "}
                for work auto-saving on applicable tools — your text persists between sessions without ever
                touching a server. All analysis runs synchronously in the browser using JavaScript. There are
                zero server calls during tool use, which means our tools also work offline once the page
                has loaded.
              </p>
              <p className="leading-relaxed">
                Our development philosophy is ruthlessly focused on correctness first, performance second and
                feature scope third. We would rather have ten tools that do exactly what they promise than
                fifty that are mediocre or unreliable.
              </p>
            </section>

            {/* Footer links */}
            <section className="rounded-2xl border border-border bg-surface p-6">
              <p className="mb-3 text-sm leading-relaxed">
                Want to know more about how we approach privacy, or have a question or suggestion for the team?
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary shadow-sm"
                >
                  About PickBlend
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary shadow-sm"
                >
                  Contact Us
                </Link>
                <Link
                  href="/tools"
                  className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark shadow-sm"
                >
                  Explore Our Tools
                </Link>
              </div>
            </section>

          </div>
        </article>
      </main>
    </>
  );
}
