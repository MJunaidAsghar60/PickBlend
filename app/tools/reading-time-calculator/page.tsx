import type { Metadata } from "next";
import ReadingTimeCalculator from "@/components/ReadingTimeCalculator";
import ReadingTimeCalculatorIntro from "@/components/ReadingTimeCalculatorIntro";
import ReadingTimeSEO from "@/components/ReadingTimeSEO";

const BASE_URL = "https://pickblend.com";

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
        name: "How long does it take to read 1000 words?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reading 1,000 words takes approximately 4 minutes and 12 seconds at the average adult reading speed of 238 words per minute. Slow readers at 150 words per minute take around 6 minutes 40 seconds for the same text. Fast readers at 400 words per minute finish in under 3 minutes. Content complexity also matters — technical or academic text with unfamiliar vocabulary takes longer than casual prose even at the same word count. Paste any 1,000-word text into our reading time calculator to get your personalised estimate based on actual content.",
        },
      },
      {
        "@type": "Question",
        name: "What is the average adult reading speed in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The average adult reading speed in 2026 remains approximately 238 words per minute for silent reading according to research published in a 2019 meta-analysis of 190 studies covering 17,000 participants. College educated adults typically read faster at 250 to 300 words per minute. Trained speed readers using chunking and skimming techniques can reach 400 to 600 words per minute though comprehension often drops at higher speeds. Our reading time calculator uses 238 words per minute as the default average but allows you to adjust for faster or slower reading speeds.",
        },
      },
      {
        "@type": "Question",
        name: "How do I calculate speaking time from word count?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Calculating speaking time from word count requires dividing your total word count by your speaking pace in words per minute. At an average speaking pace of 130 words per minute a 1,300-word speech takes exactly 10 minutes. A 650-word speech takes 5 minutes. A 2,600-word speech takes 20 minutes. Speaking pace varies significantly — nervous speakers slow to 100 words per minute while confident presenters often reach 150 to 160 words per minute. Our reading time calculator handles this calculation automatically showing you both reading time and speaking time the moment you paste your text.",
        },
      },
      {
        "@type": "Question",
        name: "How long should a blog post take to read?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ideal blog post reading time is 6 to 8 minutes according to engagement data from major publishing platforms. This reading time corresponds to roughly 1,500 to 2,000 words at average reading speed. Posts under 3 minutes feel too brief to be comprehensive while posts over 12 minutes see declining completion rates unless the content is highly technical or targeted at expert audiences. Displaying your estimated reading time at the top of a blog post sets reader expectations and reduces bounce rate. Use our reading time calculator to find and display the exact reading time for any piece of content.",
        },
      },
      {
        "@type": "Question",
        name: "What is a comfortable speaking pace for presentations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A comfortable speaking pace for presentations is between 120 and 150 words per minute. Professional speakers and TED Talk presenters average around 130 to 150 words per minute — fast enough to maintain energy but slow enough for the audience to absorb each point. Speaking faster than 180 words per minute sounds rushed and anxious. Speaking slower than 100 words per minute feels monotonous and loses audience attention. If your presentation script is 1,300 words and you speak at 130 words per minute you have a perfect 10-minute talk. Our speaking time calculator confirms this instantly.",
        },
      },
      {
        "@type": "Question",
        name: "How many words is a 10-minute presentation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 10-minute presentation contains approximately 1,100 to 1,500 words depending on your speaking pace. At a standard presentation pace of 120 words per minute a 10-minute talk requires 1,200 words. At a faster conversational pace of 150 words per minute you need 1,500 words to fill 10 minutes. Professional speakers recommend writing slightly less than you think you need because live delivery always runs longer than rehearsal due to pauses, emphasis and audience interaction. Our reading time calculator shows speaking time for multiple pace options so you can script your presentation to the exact right length.",
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
      <section>
        <ReadingTimeCalculatorIntro />
      </section>
      <article>
        <ReadingTimeSEO />
      </article>
    </>
  );
}
