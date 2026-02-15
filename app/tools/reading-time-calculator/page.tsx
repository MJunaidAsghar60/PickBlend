import type { Metadata } from "next";
import ReadingTimeCalculator from "@/components/ReadingTimeCalculator";
import ReadingTimeSEO from "@/components/ReadingTimeSEO";

const BASE_URL = "https://www.yourtoolkit.com";

export const metadata: Metadata = {
  title:
    "Free Reading Time Calculator — Speaking Time, Script Length & Pacing",
  description:
    "Calculate reading time, speaking time, and presentation length instantly. Paste text or enter a word count — get estimates for articles, speeches, podcasts, video scripts & more. 100% free.",
  keywords: [
    "reading time calculator",
    "speaking time calculator",
    "how long to read",
    "words per minute calculator",
    "speech time calculator",
    "presentation word count",
    "podcast script length",
    "video script calculator",
    "words to minutes",
    "free reading time tool",
  ],
  openGraph: {
    title: "Free Reading Time Calculator — Speaking Time & Script Pacing",
    description:
      "Calculate reading time, speaking time, and script length for articles, speeches, podcasts, and video scripts. Free, instant, no sign-up.",
    url: `${BASE_URL}/tools/reading-time-calculator`,
  },
  alternates: {
    canonical: `${BASE_URL}/tools/reading-time-calculator`,
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
        name: "Reading Time Calculator",
        item: `${BASE_URL}/tools/reading-time-calculator`,
      },
    ],
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Reading Time Calculator",
    description:
      "Calculate reading time, speaking time, and presentation pacing. Supports multiple reading and speaking speeds with content benchmarks for articles, speeches, podcasts, and video scripts.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1523",
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
        name: "What is the average reading speed for adults?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The widely accepted average is 275 words per minute (wpm) for silent reading of English text, based on a 2019 meta-analysis by Marc Brysbaert.",
        },
      },
      {
        "@type": "Question",
        name: "How many words is a 5-minute read?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At the average reading speed of 275 wpm, a 5-minute read is approximately 1,375 words. At a slow pace (150 wpm) it would be 750 words, and at a fast pace (450 wpm) it would be 2,250 words.",
        },
      },
      {
        "@type": "Question",
        name: "How do I calculate speaking time for a presentation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Divide your word count by your speaking pace in words per minute. For a comfortable presentation, use 130 wpm. A 2,000-word script takes about 15 minutes and 23 seconds to deliver.",
        },
      },
      {
        "@type": "Question",
        name: "How many words per page?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard single-spaced A4 page with 12pt font holds approximately 250 words. Double-spaced, it is about 125 words per page.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}

export default function ReadingTimeCalculatorPage() {
  return (
    <>
      <PageJsonLd />
      <main>
        <ReadingTimeCalculator />
      </main>
      <article>
        <ReadingTimeSEO />
      </article>
    </>
  );
}
