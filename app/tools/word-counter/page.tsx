import type { Metadata } from "next";
import WordCounter from "@/components/WordCounter";
import SEOContent from "@/components/SEOContent";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title:
    "Word Counter — Count Words, Characters & Sentences Free",
  description:
    "Free online word counter. Count words, characters, sentences and paragraphs instantly. Get reading time, keyword density and text case tools — no sign-up needed.",
  keywords: [
    "word counter",
    "word count",
    "character counter",
    "words counter",
    "online word counter",
    "free word counter",
  ],
  authors: [{ name: "PickBlend" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Free Word Counter — Words, Characters & Reading Time | PickBlend",
    description:
      "Count words, characters and sentences in real time. Includes keyword density, reading time, speaking time, and text transformation tools. 100% free and private.",
    url: `${BASE_URL}/tools/word-counter`,
    images: [
      {
        url: `${BASE_URL}/og/word-counter.png`,
        width: 1200,
        height: 630,
        alt: "Free Word Counter Tool by PickBlend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Word Counter — Words, Characters & Reading Time | PickBlend",
    description:
      "Count words, characters and sentences in real time. Includes keyword density, reading time, speaking time, and text transformation tools. 100% free and private.",
    images: [`${BASE_URL}/og/word-counter.png`],
  },
  alternates: {
    canonical: `${BASE_URL}/tools/word-counter`,
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
        name: "Word Counter",
        item: `${BASE_URL}/tools/word-counter`,
      },
    ],
  };

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Word Counter",
    url: `${BASE_URL}/tools/word-counter`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free online word counter that counts words, characters, sentences and paragraphs in real time. Includes reading time, speaking time, keyword density analysis, and text transformation tools.",
    featureList: [
      "Real-time word count",
      "Character count with and without spaces",
      "Sentence and paragraph count",
      "Reading time estimation",
      "Speaking time estimation",
      "Keyword density analysis",
      "Text case conversion (UPPER, lower, Sentence)",
      "Auto-save to browser localStorage",
      "100% private — no server calls",
    ],
    screenshot: `${BASE_URL}/og/word-counter.png`,
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
        name: "How does the word counter tool work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply type or paste your text into the editor. The tool instantly analyzes your content and displays word count, character count, sentence count, paragraph count, estimated reading time, speaking time, and keyword density — all in real time with no page reload required.",
        },
      },
      {
        "@type": "Question",
        name: "Is this word counter tool free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, this word counter is 100% free with no sign-up or registration required. All features including keyword density analysis, reading time estimation, and text case conversion are available at no cost.",
        },
      },
      {
        "@type": "Question",
        name: "What reading speed is used for the time estimates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reading time is calculated at 275 words per minute (the average adult silent reading speed). Speaking time uses 130 words per minute, which matches a comfortable public speaking pace.",
        },
      },
      {
        "@type": "Question",
        name: "Does the tool save my text?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your text is stored locally in your browser via LocalStorage. It is never sent to any server. If you close the tab and return later, your text will still be there — completely private on your device.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use this tool to check keyword density for SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The keyword density panel displays your top 10 most-used words along with their count and percentage. Use it to ensure your target keywords are present without over-stuffing.",
        },
      },
      {
        "@type": "Question",
        name: "How many words is a 5-minute read?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At an average reading speed of 275 words per minute, a 5-minute read is approximately 1,375 words. This assumes standard prose; technical or complex content may take longer.",
        },
      },
    ],
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use the Free Word Counter Tool",
    description:
      "Count words, characters, and get reading time estimates using PickBlend's free word counter.",
    step: [
      {
        "@type": "HowToStep",
        name: "Paste or type your text",
        text: "Open the word counter tool and paste or type your text into the large editor area. All metrics update instantly as you type.",
      },
      {
        "@type": "HowToStep",
        name: "Read your stats",
        text: "View your word count, character count, sentence count, paragraph count, and estimated reading and speaking times in the stats panel.",
      },
      {
        "@type": "HowToStep",
        name: "Check keyword density",
        text: "Scroll down to the keyword density panel to see your top 10 most-used meaningful words with their frequency and percentage.",
      },
      {
        "@type": "HowToStep",
        name: "Transform your text (optional)",
        text: "Use the toolbar buttons to convert your text to UPPERCASE, lowercase, or Sentence case with a single click.",
      },
    ],
    tool: {
      "@type": "HowToTool",
      name: "PickBlend Word Counter",
      url: `${BASE_URL}/tools/word-counter`,
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
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
