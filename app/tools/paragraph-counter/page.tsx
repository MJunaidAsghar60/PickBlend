import type { Metadata } from "next";
import Link from "next/link";
import ParagraphCounter from "@/components/ParagraphCounter";
import ParagraphCounterIntro from "@/components/ParagraphCounterIntro";
import ParagraphCounterSEO from "@/components/ParagraphCounterSEO";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "Free Paragraph Counter — Count Paragraphs Online",
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
      { "@type": "Question", name: "How many words should a paragraph be for online content?", acceptedAnswer: { "@type": "Answer", text: "A paragraph for online content should contain between 40 and 100 words — roughly 2 to 4 sentences. Short paragraphs create white space that makes text easier to scan on screens especially on mobile devices where long paragraphs look like impenetrable walls of text. Research on web reading behavior shows that online readers scan in an F-pattern reading the first few words of each line rather than reading every word. Short focused paragraphs accommodate this scanning behavior and keep readers engaged longer. Our paragraph counter shows the exact word count for every paragraph so you can identify and break up any paragraphs that are too long for online reading." } },
      { "@type": "Question", name: "How do I count paragraphs in a long document quickly?", acceptedAnswer: { "@type": "Answer", text: "Counting paragraphs in a long document quickly is simple with our free paragraph counter. Paste your entire document text into the tool and it instantly detects every paragraph, counts them and displays a detailed breakdown card for each one showing word count, sentence count, character count and average word length. This per-paragraph analysis is far faster than counting manually in a word processor especially for documents over 1,000 words. The tool detects paragraph breaks from blank lines making it compatible with text copied from Microsoft Word, Google Docs, web pages and any other text source." } },
      { "@type": "Question", name: "How many paragraphs should a 1000-word article have?", acceptedAnswer: { "@type": "Answer", text: "A 1,000-word article should have approximately 8 to 15 paragraphs depending on paragraph length and content structure. For online content with short paragraphs of 60 to 80 words you need around 12 to 16 paragraphs to reach 1,000 words. For academic content with longer paragraphs of 150 to 200 words you need only 5 to 7 paragraphs. Most well-structured 1,000-word blog posts use an introduction of 2 to 3 paragraphs, 4 to 6 body sections of 2 to 3 paragraphs each and a conclusion of 1 to 2 paragraphs. Paste your article into our paragraph counter to see your exact paragraph structure at a glance." } },
      { "@type": "Question", name: "What is the ideal paragraph length for academic essays?", acceptedAnswer: { "@type": "Answer", text: "The ideal paragraph length for academic essays is between 100 and 200 words — roughly 4 to 6 sentences. Academic paragraphs need to be long enough to fully develop a single argument with a topic sentence, supporting evidence, explanation and a concluding or transitional sentence. A paragraph under 80 words in academic writing is typically considered underdeveloped. A paragraph over 250 words usually contains more than one idea and should be split. Our paragraph counter displays the word count for every individual paragraph making it easy to identify both underdeveloped short paragraphs and overpacked long ones in your academic writing." } },
      { "@type": "Question", name: "Can I see the word count for each paragraph separately?", acceptedAnswer: { "@type": "Answer", text: "Yes — our paragraph counter displays a detailed breakdown card for every individual paragraph in your text. Each card shows the complete paragraph text alongside its specific word count, sentence count, total character count and average word length. This per-paragraph word count analysis is especially useful for academic writers who need consistent paragraph development, blog writers checking that each section has adequate depth and students verifying that every body paragraph meets minimum word count requirements. The numbered paragraph badges make it easy to reference specific paragraphs when editing." } },
      { "@type": "Question", name: "How many paragraphs is a 5-paragraph essay?", acceptedAnswer: { "@type": "Answer", text: "A 5-paragraph essay has exactly five paragraphs following a classic academic structure — one introductory paragraph, three body paragraphs and one concluding paragraph. Each body paragraph develops a single supporting argument with a topic sentence, two to three pieces of evidence or explanation and a concluding sentence. At a typical paragraph length of 100 to 150 words a standard 5-paragraph essay runs between 500 and 750 words total. This format is taught in high school English classes throughout the US and remains the foundation of academic argument structure. Use our paragraph counter to verify your 5-paragraph essay has the right structure before submission." } },
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
            <ParagraphCounter />
          </div>
        </div>
      </main>
      <section>
        <ParagraphCounterIntro />
      </section>
      <article>
        <ParagraphCounterSEO />
      </article>
    </>
  );
}
