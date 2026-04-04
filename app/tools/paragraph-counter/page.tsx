import type { Metadata } from "next";
import Link from "next/link";
import ParagraphCounterSEO from "@/components/ParagraphCounterSEO";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "Free Paragraph Counter — Count Paragraphs Online | PickBlend",
  description:
    "Count paragraphs in your text instantly. Also counts words, characters and sentences per paragraph. Free online tool, no sign-up required.",
  keywords: ["paragraph counter", "count paragraphs", "paragraph count", "online paragraph counter", "paragraphs in text"],
  authors: [{ name: "PickBlend" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Free Paragraph Counter — Count Paragraphs Online | PickBlend",
    description:
      "Count paragraphs in your text instantly. Also counts words, characters and sentences per paragraph. Free online tool, no sign-up required.",
    url: `${BASE_URL}/tools/paragraph-counter`,
    images: [{ url: `${BASE_URL}/og/home.png`, width: 1200, height: 630, alt: "Free Paragraph Counter by PickBlend" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Paragraph Counter — Count Paragraphs Online | PickBlend",
    description: "Count paragraphs in your text instantly. Free, no sign-up.",
    images: [`${BASE_URL}/og/home.png`],
  },
  alternates: { canonical: `${BASE_URL}/tools/paragraph-counter` },
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
      { "@type": "ListItem", position: 2, name: "Tools", item: `${BASE_URL}/tools` },
      { "@type": "ListItem", position: 3, name: "Paragraph Counter", item: `${BASE_URL}/tools/paragraph-counter` },
    ],
  };

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Paragraph Counter",
    url: `${BASE_URL}/tools/paragraph-counter`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: "Free online paragraph counter. Count paragraphs and analyse paragraph structure in real time.",
    featureList: ["Real-time paragraph count", "Average paragraph length", "Word count", "Sentence count", "100% private — no server calls"],
    creator: { "@type": "Organization", name: "PickBlend", url: BASE_URL },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What counts as a paragraph?", acceptedAnswer: { "@type": "Answer", text: "A paragraph is a block of text separated from other blocks by a blank line or indentation. In plain text and most digital editors, paragraphs are separated by pressing Enter twice. Our counter detects these breaks and counts each block as one paragraph." } },
      { "@type": "Question", name: "How long should a paragraph be for a blog post?", acceptedAnswer: { "@type": "Answer", text: "For web content, aim for 2–4 sentences per paragraph, or roughly 40–80 words. This creates white space for easy scanning. Longer paragraphs (6+ sentences) tend to reduce engagement, especially on mobile." } },
      { "@type": "Question", name: "Can a paragraph be one sentence?", acceptedAnswer: { "@type": "Answer", text: "Yes — single-sentence paragraphs are valid and effective in web writing and marketing copy. They create emphasis and visual impact. Use them sparingly for maximum effect." } },
      { "@type": "Question", name: "How many paragraphs should a 1,000-word article have?", acceptedAnswer: { "@type": "Answer", text: "A 1,000-word article with average paragraph lengths of 50–80 words will have roughly 12–20 paragraphs. Adding subheadings every 3–4 paragraphs further improves structure and scannability." } },
      { "@type": "Question", name: "Is this paragraph counter free?", acceptedAnswer: { "@type": "Answer", text: "Yes, completely free. No account required, no sign-up, no usage limits. All processing happens in your browser — your text is never sent to any server." } },
    ],
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Count Paragraphs Online",
    description: "Count paragraphs and check paragraph structure using PickBlend's free paragraph counter.",
    step: [
      { "@type": "HowToStep", name: "Paste or type your text", text: "Open the paragraph counter and paste or type your text. Paragraph counts update instantly in real time." },
      { "@type": "HowToStep", name: "Check average paragraph length", text: "Divide the word count by the paragraph count to find your average paragraph length. Aim for 40–80 words per paragraph for web content." },
      { "@type": "HowToStep", name: "Identify and split long paragraphs", text: "Look for paragraphs that feel dense and split them at natural topic breaks to improve readability and scannability." },
    ],
    tool: { "@type": "HowToTool", name: "PickBlend Paragraph Counter", url: `${BASE_URL}/tools/paragraph-counter` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
    </>
  );
}

export default function ParagraphCounterPage() {
  return (
    <>
      <PageJsonLd />
      <main>
        <div className="px-4 pt-14 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-text-secondary">
              <Link href="/" className="transition-colors hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/tools" className="transition-colors hover:text-primary">Tools</Link>
              <span>/</span>
              <span className="text-text">Paragraph Counter</span>
            </nav>
            <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
              Free Online Paragraph Counter — Count Paragraphs Instantly
            </h1>
            <div className="mt-10 rounded-2xl border border-border bg-surface p-8 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-text">Paragraph Counter — Coming Soon</h2>
              <p className="mt-3 text-text-secondary">
                This tool is coming soon. Want to be notified when it launches?
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary/90"
              >
                Send us a message →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <article>
        <ParagraphCounterSEO />
      </article>
    </>
  );
}
