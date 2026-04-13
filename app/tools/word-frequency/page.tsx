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
      { "@type": "Question", name: "What is keyword density and why does it matter for SEO in 2026?", acceptedAnswer: { "@type": "Answer", text: "Keyword density is the percentage of times a specific keyword appears in your text relative to the total word count. In 2026 SEO best practice recommends keeping primary keyword density between 1 and 2 percent — meaning a target keyword should appear roughly once every 50 to 100 words. Keyword density above 3 percent risks being classified as keyword stuffing by search engine algorithms which can result in ranking penalties rather than ranking improvements. Our word frequency counter shows the exact frequency percentage for every word in your text making it a practical keyword density checker for SEO content writers." } },
      { "@type": "Question", name: "How do I find the most used words in my text?", acceptedAnswer: { "@type": "Answer", text: "Finding the most used words in any text is instant with our word frequency counter. Paste your content into the tool and a ranked frequency table appears showing every word sorted by how often it appears along with its count, frequency percentage and a visual bar proportional to its usage. Enable the stop words filter to remove common words like the, and and is so only meaningful content words appear in the results. The vocabulary richness percentage shows what proportion of your total words are unique — a useful indicator of writing variety and depth." } },
      { "@type": "Question", name: "What are stop words and should I filter them out?", acceptedAnswer: { "@type": "Answer", text: "Stop words are high-frequency function words that carry little meaningful semantic information on their own — words like the, a, and, is, in, of, to and for. In word frequency analysis stop words dominate every text regardless of topic and obscure the meaningful vocabulary patterns you actually want to see. Filtering stop words reveals your true content keywords — the nouns, verbs and adjectives that define what your text is actually about. Our word frequency counter includes a toggle to exclude 80 common English stop words so you can switch instantly between seeing all words and seeing only meaningful content vocabulary." } },
      { "@type": "Question", name: "How can word frequency analysis improve SEO content?", acceptedAnswer: { "@type": "Answer", text: "Word frequency analysis improves SEO content by revealing exactly which keywords are present and how often they appear. You can verify that your primary target keyword appears at a healthy density of 1 to 2 percent, check that semantically related secondary keywords are present to satisfy search intent, identify words that are overused and need variation and confirm that your content covers the topic vocabulary comprehensively. Paste any piece of content into our word frequency counter before publishing to catch keyword stuffing, identify thin vocabulary and verify your SEO keyword distribution is balanced across the full text." } },
      { "@type": "Question", name: "What is vocabulary richness and how do I improve it?", acceptedAnswer: { "@type": "Answer", text: "Vocabulary richness — also called type-token ratio — measures the proportion of unique words relative to total words. A text with 300 unique words out of 600 total words has a vocabulary richness of 50 percent. Higher vocabulary richness signals more varied engaging writing to both human readers and search engines. Richness below 25 percent often indicates repetitive writing that overuses the same words. To improve vocabulary richness use synonyms for frequently repeated words, vary your sentence openings and expand your descriptive vocabulary. Our word frequency counter calculates and displays your vocabulary richness percentage automatically in the summary stats bar." } },
      { "@type": "Question", name: "Can word frequency analysis help identify plagiarism risks?", acceptedAnswer: { "@type": "Answer", text: "Word frequency analysis can reveal potential plagiarism risks by identifying unusual concentrations of specific rare or technical terms that may indicate copied passages. If a section of your text uses vocabulary dramatically different from the rest — particularly very formal or technical language appearing in an otherwise informal piece — it may signal content borrowed from another source. More directly word frequency analysis helps with originality by identifying overused phrases and encouraging writers to rephrase repeated content in their own words. For thorough plagiarism detection pair our word frequency counter with a dedicated plagiarism checking service." } },
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
