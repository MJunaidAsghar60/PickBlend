import type { Metadata } from "next";
import Link from "next/link";
import WordFrequency from "@/components/WordFrequency";
import WordFrequencyIntro from "@/components/WordFrequencyIntro";
import WordFrequencySEO from "@/components/WordFrequencySEO";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "Free Word Frequency Counter — Analyze Word Usage | PickBlend",
  description:
    "Analyze word frequency in your text. See which words appear most often with percentage breakdown. Perfect for SEO and content analysis. Free, no sign-up.",
  keywords: ["word frequency counter", "word frequency analysis", "keyword density", "word usage analyzer", "word occurrence counter"],
  authors: [{ name: "PickBlend" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Free Word Frequency Counter — Analyze Word Usage | PickBlend",
    description:
      "Analyze word frequency in your text. See which words appear most often with percentage breakdown. Perfect for SEO and content analysis. Free, no sign-up.",
    url: `${BASE_URL}/tools/word-frequency`,
    images: [{ url: `${BASE_URL}/og/home.png`, width: 1200, height: 630, alt: "Free Word Frequency Counter by PickBlend" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Word Frequency Counter — Analyze Word Usage | PickBlend",
    description: "Analyze word frequency in your text. Free, no sign-up.",
    images: [`${BASE_URL}/og/home.png`],
  },
  alternates: { canonical: `${BASE_URL}/tools/word-frequency` },
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
      { "@type": "ListItem", position: 3, name: "Word Frequency Counter", item: `${BASE_URL}/tools/word-frequency` },
    ],
  };

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Word Frequency Counter",
    url: `${BASE_URL}/tools/word-frequency`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: "Free word frequency counter. Analyse which words appear most often in your text with counts and percentages.",
    featureList: ["Word frequency ranking", "Word count per term", "Percentage of total words", "Stop word filtering", "100% private — no server calls"],
    creator: { "@type": "Organization", name: "PickBlend", url: BASE_URL },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is a good keyword density for SEO?", acceptedAnswer: { "@type": "Answer", text: "Most SEO professionals target 1–2% keyword density for primary keywords. Going above 3–4% risks appearing over-optimised. Natural, helpful writing rarely exceeds 2% for any single phrase organically." } },
      { "@type": "Question", name: "Should I include stop words in frequency analysis?", acceptedAnswer: { "@type": "Answer", text: "For SEO and content analysis, filter out stop words (the, a, is, and, etc.) to focus on meaningful content words. For linguistic or academic research, including stop words can reveal interesting patterns in writing style." } },
      { "@type": "Question", name: "How many unique words should a blog post have?", acceptedAnswer: { "@type": "Answer", text: "A well-written 1,000-word blog post typically uses 300–500 unique words. A high unique word count indicates rich vocabulary; a low count may suggest overuse of specific terms. Word frequency analysis helps you find the balance." } },
      { "@type": "Question", name: "Can word frequency analysis improve my writing?", acceptedAnswer: { "@type": "Answer", text: "Yes — by revealing which words you overuse, it prompts you to vary your vocabulary. By showing the top content words, it confirms whether your text truly covers the topics you intend to address." } },
      { "@type": "Question", name: "Is this word frequency counter free?", acceptedAnswer: { "@type": "Answer", text: "Yes, completely free. No account, no sign-up, no usage limits. All processing runs locally in your browser — your text is never sent to any server." } },
    ],
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Analyse Word Frequency Online",
    description: "Analyse word usage and frequency in any text using PickBlend's free word frequency counter.",
    step: [
      { "@type": "HowToStep", name: "Paste or type your text", text: "Open the word frequency counter and paste or type your text. The frequency table updates in real time." },
      { "@type": "HowToStep", name: "Toggle stop word filtering", text: "Enable stop word filtering to hide common function words and focus on meaningful content words." },
      { "@type": "HowToStep", name: "Review the ranked word list", text: "Examine the frequency ranking to identify overused words and check your keyword density for SEO purposes." },
    ],
    tool: { "@type": "HowToTool", name: "PickBlend Word Frequency Counter", url: `${BASE_URL}/tools/word-frequency` },
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

export default function WordFrequencyPage() {
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
              <span className="text-text">Word Frequency Counter</span>
            </nav>
            <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
              Free Word Frequency Counter — Analyze Word Usage in Any Text
            </h1>
            <WordFrequency />
          </div>
        </div>
      </main>
      <section>
        <WordFrequencyIntro />
      </section>
      <article>
        <WordFrequencySEO />
      </article>
    </>
  );
}
