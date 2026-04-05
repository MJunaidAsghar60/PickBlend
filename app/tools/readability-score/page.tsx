import type { Metadata } from "next";
import Link from "next/link";
import ReadabilityScore from "@/components/ReadabilityScore";
import ReadabilityScoreSEO from "@/components/ReadabilityScoreSEO";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "Free Readability Score Checker — Flesch Reading Ease | PickBlend",
  description:
    "Check your text readability score instantly. Get Flesch Reading Ease, Flesch-Kincaid Grade Level and reading level analysis. Free, no sign-up required.",
  keywords: ["readability score", "readability checker", "flesch reading ease", "flesch kincaid grade level", "reading level checker"],
  authors: [{ name: "PickBlend" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Free Readability Score Checker — Flesch Reading Ease | PickBlend",
    description:
      "Check your text readability score instantly. Get Flesch Reading Ease, Flesch-Kincaid Grade Level and reading level analysis. Free, no sign-up required.",
    url: `${BASE_URL}/tools/readability-score`,
    images: [{ url: `${BASE_URL}/og/home.png`, width: 1200, height: 630, alt: "Free Readability Score Checker by PickBlend" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Readability Score Checker — Flesch Reading Ease | PickBlend",
    description: "Check your text readability score instantly. Free, no sign-up.",
    images: [`${BASE_URL}/og/home.png`],
  },
  alternates: { canonical: `${BASE_URL}/tools/readability-score` },
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
      { "@type": "ListItem", position: 3, name: "Readability Score Checker", item: `${BASE_URL}/tools/readability-score` },
    ],
  };

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Readability Score Checker",
    url: `${BASE_URL}/tools/readability-score`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: "Free readability score checker. Get Flesch Reading Ease score and Flesch-Kincaid Grade Level instantly.",
    featureList: ["Flesch Reading Ease score", "Flesch-Kincaid Grade Level", "Average sentence length", "Average syllables per word", "100% private — no server calls"],
    creator: { "@type": "Organization", name: "PickBlend", url: BASE_URL },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is a good Flesch Reading Ease score for blog posts?", acceptedAnswer: { "@type": "Answer", text: "For most blog posts targeting a general audience, aim for a Flesch Reading Ease score of 60–70. This is 'standard' difficulty and accessible to adults with a high school education. Marketing copy often targets 70–80 for even broader accessibility." } },
      { "@type": "Question", name: "What Flesch-Kincaid Grade Level should I target?", acceptedAnswer: { "@type": "Answer", text: "For general web content, aim for Grade 6–8. This is the sweet spot for broad accessibility. Academic writing typically sits at Grade 12+, and legal writing often exceeds Grade 16." } },
      { "@type": "Question", name: "How can I improve my readability score?", acceptedAnswer: { "@type": "Answer", text: "Shorten long sentences by splitting them at conjunctions. Replace multi-syllable words with simpler alternatives. Use active voice instead of passive voice. Break long paragraphs into shorter ones with one idea each." } },
      { "@type": "Question", name: "Does a lower readability score mean my writing is bad?", acceptedAnswer: { "@type": "Answer", text: "No — readability scores measure difficulty, not quality. Academic papers, legal contracts, and scientific research are deliberately complex. The goal is to match your readability level to your target audience." } },
      { "@type": "Question", name: "Is this readability checker free?", acceptedAnswer: { "@type": "Answer", text: "Yes, completely free. No account required, no sign-up, no usage limits. All calculations run in your browser — your text is never sent to any server." } },
    ],
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Check Text Readability Online",
    description: "Get your Flesch Reading Ease score and grade level using PickBlend's free readability checker.",
    step: [
      { "@type": "HowToStep", name: "Paste or type your text", text: "Open the readability checker and paste or type your text. Scores update automatically as you write." },
      { "@type": "HowToStep", name: "Review your Flesch Reading Ease score", text: "A score of 60–70 is ideal for most web content. Scores below 30 indicate very complex text; scores above 80 indicate simple, accessible writing." },
      { "@type": "HowToStep", name: "Revise to improve your score", text: "Shorten sentences, replace complex words with simpler alternatives, and break long paragraphs into smaller chunks to raise your readability score." },
    ],
    tool: { "@type": "HowToTool", name: "PickBlend Readability Score Checker", url: `${BASE_URL}/tools/readability-score` },
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

export default function ReadabilityScorePage() {
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
              <span className="text-text">Readability Score</span>
            </nav>
            <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
              Free Readability Score Checker — Flesch Reading Ease &amp; Grade Level
            </h1>
            <ReadabilityScore />
          </div>
        </div>
      </main>
      <article>
        <ReadabilityScoreSEO />
      </article>
    </>
  );
}
