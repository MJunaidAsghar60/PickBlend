import type { Metadata } from "next";
import ReadingTimeCalculator from "@/components/ReadingTimeCalculator";
import ReadingTimeSEO from "@/components/ReadingTimeSEO";

const BASE_URL = "https://www.pickblend.com";

export const metadata: Metadata = {
  title:
    "Reading Time Calculator — Speaking Time & Script Length",
  description:
    "Free reading time calculator. Find out how long it takes to read or speak your text. Supports multiple reading and speaking speeds with benchmarks for blogs, speeches, and scripts.",
  keywords: [
    "reading time calculator",
    "reading time",
    "speaking time calculator",
    "how long to read",
    "words per minute",
  ],
  authors: [{ name: "PickBlend" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Free Reading Time Calculator | PickBlend",
    description:
      "Calculate reading time, speaking time, and script length instantly. Supports slow, average, and fast reading speeds with benchmarks for TED talks, podcasts, YouTube scripts and more.",
    url: `${BASE_URL}/tools/reading-time-calculator`,
    images: [
      {
        url: `${BASE_URL}/og/reading-time.png`,
        width: 1200,
        height: 630,
        alt: "Free Reading Time Calculator by PickBlend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Reading Time Calculator | PickBlend",
    description:
      "Calculate reading time, speaking time, and script length instantly. Supports slow, average, and fast reading speeds with benchmarks for TED talks, podcasts, YouTube scripts and more.",
    images: [`${BASE_URL}/og/reading-time.png`],
  },
  alternates: {
    canonical: `${BASE_URL}/tools/reading-time-calculator`,
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
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: `${BASE_URL}/tools/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Reading Time Calculator",
        item: `${BASE_URL}/tools/reading-time-calculator`,
      },
    ],
  };

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Reading Time Calculator",
    url: `${BASE_URL}/tools/reading-time-calculator`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free reading time and speaking time calculator. Paste text or enter word count to instantly calculate how long it takes to read or deliver your content at multiple speeds.",
    featureList: [
      "Reading time at slow, average, and fast speeds",
      "Speaking time at 5 different pacing options",
      "Content length benchmarks by platform",
      "Script length calculator for video and podcasts",
      "Paste text or enter word count manually",
    ],
    creator: {
      "@type": "Organization",
      name: "PickBlend",
      url: BASE_URL,
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is reading time calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reading time is calculated by dividing your total word count by the reader's speed in words per minute (wpm). The average adult reads silently at approximately 275 wpm. Our tool defaults to this speed, which aligns with research from Brysbaert (2019) and the standard used by most publishing platforms including Medium.",
        },
      },
      {
        "@type": "Question",
        name: "How many words is a 10-minute read?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At an average reading speed of 275 words per minute, a 10-minute read is approximately 2,750 words. At a slow reading pace of 150 wpm, a 10-minute read is about 1,500 words. At a fast pace of 450 wpm, a 10-minute read can be up to 4,500 words.",
        },
      },
      {
        "@type": "Question",
        name: "How many words do I need for a 5-minute speech?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At a conversational speaking pace of 130 words per minute, a 5-minute speech requires approximately 650 words. For a presentation pace of 150 wpm, aim for around 750 words. TED Talk speakers typically aim for 130–150 wpm.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to read 1000 words?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At an average reading speed of 275 words per minute, it takes approximately 3 minutes and 38 seconds to read 1,000 words. At a slow reading pace (150 wpm), it takes about 6 minutes 40 seconds. At a fast pace (450 wpm), approximately 2 minutes 13 seconds.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApp) }}
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
