import type { Metadata } from "next";
import WordCounter from "@/components/WordCounter";
import WordCounterIntro from "@/components/WordCounterIntro";
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
        name: "How do I count words in a document for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Counting words in a document for free is simple with an online word counter tool. Paste your text directly into the editor and your word count updates instantly in real time — no sign-up, no file upload and no software to install. Beyond just word count you also get character count, sentence count, paragraph count, reading time and keyword density analysis all in one place. Our free word counter works on any device directly in your browser and automatically saves your work locally so you never lose your progress.",
        },
      },
      {
        "@type": "Question",
        name: "How many words is a 5-minute speech?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 5-minute speech contains approximately 650 to 750 words at an average speaking pace of 130 words per minute. Speaking faster at around 150 words per minute pushes a 5-minute speech closer to 750 words. Speaking pace varies by context — conversational delivery runs faster than a formal presentation. Factors like pauses, emphasis and audience interaction also affect total speaking time. Use our free word counter alongside the reading time calculator to get precise speaking time estimates for any word count before your next speech or presentation.",
        },
      },
      {
        "@type": "Question",
        name: "What is the ideal word count for a blog post?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ideal word count for a blog post depends on your goal. Short informational posts of 600 to 800 words work well for news and quick answers. Standard blog posts targeting SEO perform best at 1,500 to 2,500 words because they cover topics comprehensively enough to satisfy search intent. Long-form pillar content of 3,000 to 5,000 words dominates competitive keywords. Research consistently shows that posts between 1,800 and 2,200 words earn the most backlinks and social shares. Paste your draft into our word counter to track your progress toward your target word count in real time.",
        },
      },
      {
        "@type": "Question",
        name: "Does word count include numbers and punctuation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Word count includes numbers treated as individual words but does not count standalone punctuation marks. The number 2026 counts as one word. Hyphenated words like well-known typically count as a single word consistent with how Microsoft Word and Google Docs handle them. Contractions like don't count as one word. Punctuation marks like commas, periods and quotation marks do not contribute to word count. Our online word counter follows these same standard word counting conventions so results are consistent with professional writing tools.",
        },
      },
      {
        "@type": "Question",
        name: "How accurate is an online word counter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Online word counters are highly accurate for standard prose text. Our word counter splits text on whitespace, filters empty tokens and handles edge cases like hyphenated words, contractions and numbers consistently — matching the behavior of professional desktop word processors. Real-time updating means you always see the current accurate count as you type or edit. For most writing tasks including academic essays, blog posts and content marketing the word count will match Microsoft Word and Google Docs within one or two words.",
        },
      },
      {
        "@type": "Question",
        name: "Can I count words in multiple languages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our word counter works with any language that uses spaces to separate words including English, Spanish, French, German, Portuguese and most European languages. The counter splits on whitespace which is the universal word separator in Latin-script languages. For languages like Chinese, Japanese and Korean that do not use spaces between words the character count is more meaningful than word count. The character counter on our platform provides accurate character counts for all languages and writing systems regardless of whether spaces are used.",
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
      <section>
        <WordCounterIntro />
      </section>
      <article>
        <SEOContent />
      </article>
    </>
  );
}
