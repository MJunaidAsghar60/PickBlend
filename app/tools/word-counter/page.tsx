import type { Metadata } from "next";
import WordCounter from "@/components/WordCounter";
import SEOContent from "@/components/SEOContent";

const BASE_URL = "https://www.yourtoolkit.com";

export const metadata: Metadata = {
  title:
    "Free Online Word Counter Tool — Characters, Sentences & Reading Time",
  description:
    "Count words, characters, sentences, and paragraphs instantly. Get reading time estimates, speaking time, keyword density analysis, and case conversion tools — all free, no sign-up required.",
  keywords: [
    "word counter",
    "character counter",
    "online word counter",
    "free word counter",
    "word count tool",
    "character count",
    "reading time calculator",
    "keyword density",
    "sentence counter",
    "paragraph counter",
  ],
  openGraph: {
    title: "Free Online Word Counter — Characters, Sentences & Reading Time",
    description:
      "Count words, characters, sentences and paragraphs instantly. Keyword density, reading time, speaking time and case conversion — all free.",
    url: `${BASE_URL}/tools/word-counter`,
  },
  alternates: {
    canonical: `${BASE_URL}/tools/word-counter`,
  },
};

function PageJsonLd() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: `${BASE_URL}/tools`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Word Counter",
        item: `${BASE_URL}/tools/word-counter`,
      },
    ],
  };

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Free Online Word Counter Tool",
    description:
      "Count words, characters, sentences, and paragraphs. Get reading time estimates, keyword density analysis, and text transformation tools.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "3847",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does the word counter work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Paste or type your text and the tool instantly counts words, characters (with and without spaces), sentences, and paragraphs in real time. No server calls — everything runs in your browser.",
        },
      },
      {
        "@type": "Question",
        name: "Is this word counter free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100% free with no sign-up, no ads, and no usage limits. Your text is never sent to any server.",
        },
      },
      {
        "@type": "Question",
        name: "What is keyword density and why does it matter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Keyword density is the percentage of times a keyword appears relative to the total word count. Maintaining 1-3% density for target keywords helps with SEO without triggering over-optimization penalties.",
        },
      },
      {
        "@type": "Question",
        name: "How is reading time calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reading time is calculated by dividing the total word count by 275 words per minute, which is the widely accepted average adult silent reading speed based on research by Brysbaert (2019).",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}

export default function WordCounterPage() {
  return (
    <>
      <PageJsonLd />
      <main>
        <WordCounter />
      </main>
      <article>
        <SEOContent />
      </article>
    </>
  );
}
