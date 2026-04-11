import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "Writing Tips & Tool Guides | PickBlend Blog",
  description:
    "Free guides, tips and tutorials for writers, students and content creators. Learn how to improve your writing with PickBlend's free tools.",
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Writing Tips & Tool Guides | PickBlend Blog",
    description:
      "Free guides, tips and tutorials for writers, students and content creators. Learn how to improve your writing with PickBlend's free tools.",
    url: `${BASE_URL}/blog`,
    images: [{ url: `${BASE_URL}/og/home.png`, width: 1200, height: 630, alt: "PickBlend Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing Tips & Tool Guides | PickBlend Blog",
    description: "Free guides, tips and tutorials for writers, students and content creators.",
    images: [`${BASE_URL}/og/home.png`],
  },
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
    ],
  };

  const blog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "PickBlend Blog",
    url: `${BASE_URL}/blog`,
    description:
      "Writing tips, tool guides and content strategy for writers, students and creators.",
    publisher: { "@type": "Organization", name: "PickBlend", url: BASE_URL },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blog) }} />
    </>
  );
}

const posts = [
  {
    slug: "camelcase-vs-snake-case",
    category: "Developer Tools",
    title: "camelCase vs snake_case — When to Use Each (Complete Guide for Developers)",
    excerpt:
      "camelCase or snake_case? The answer depends on the language, framework and context. This complete guide covers every naming convention with language-specific rules, real code examples and a quick reference table.",
    readingTime: "9 min read",
    date: "April 8, 2026",
    dateISO: "2026-04-08",
  },
  {
    slug: "character-limits-for-every-platform-2026",
    category: "Content Writing",
    title: "Character Limits for Every Platform in 2026 — The Complete Guide",
    excerpt:
      "Every platform has different character limits in 2026 — and they change more often than you think. From social media posts to meta tags, SMS and email subject lines — all limits in one place.",
    readingTime: "8 min read",
    date: "April 7, 2026",
    dateISO: "2026-04-07",
  },
  {
    slug: "how-many-words-in-a-paragraph",
    category: "Writing Tips",
    title: "How Many Words Are in a Paragraph?",
    excerpt:
      "A typical paragraph contains 100 to 200 words — but the ideal length depends on what you are writing. Here is the complete breakdown for every writing type.",
    readingTime: "7 min read",
    date: "April 6, 2026",
    dateISO: "2026-04-06",
  },
  {
    slug: "how-long-does-it-take-to-read-1400-words",
    category: "Writing Tips",
    title: "How Long Does It Take to Read 1,400 Words?",
    excerpt:
      "The average adult reads 1,400 words in about 5 to 6 minutes — but your actual time depends on reading speed, content type and format. Here is the full breakdown with tables, speaking time and practical tips.",
    readingTime: "6 min read",
    date: "April 5, 2026",
    dateISO: "2026-04-05",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <PageJsonLd />
      <main>
        <section className="px-4 pb-16 pt-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-text-secondary">
              <Link href="/" className="transition-colors hover:text-primary">Home</Link>
              <span>/</span>
              <span className="text-text">Blog</span>
            </nav>

            {/* Header */}
            <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
              PickBlend Blog
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Writing tips, tool guides and content strategy for writers, students and creators.
            </p>

            {/* Post grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {post.category}
                    </span>
                    <time
                      dateTime={post.dateISO}
                      className="text-xs text-text-secondary"
                    >
                      {post.date}
                    </time>
                  </div>
                  <h2 className="mt-3 text-lg font-bold leading-snug text-text">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-primary"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-text-secondary">{post.readingTime}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-primary transition-transform group-hover:translate-x-1 inline-flex items-center gap-1"
                    >
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
