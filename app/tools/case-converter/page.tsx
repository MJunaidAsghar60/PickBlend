import type { Metadata } from "next";
import CaseConverter from "@/components/CaseConverter";
import CaseConverterIntro from "@/components/CaseConverterIntro";
import CaseConverterSEO from "@/components/CaseConverterSEO";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "Text Case Converter — UPPER, lower, Title, Sentence Case | PickBlend",
  description:
    "Free online text case converter. Convert text to uppercase, lowercase, title case, sentence case, camelCase, snake_case, and more — instantly, no sign-up.",
  keywords: [
    "case converter",
    "text case converter",
    "uppercase converter",
    "lowercase converter",
    "title case converter",
    "camelCase converter",
    "snake_case converter",
  ],
  authors: [{ name: "PickBlend" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Free Text Case Converter — UPPER, lower, Title Case | PickBlend",
    description:
      "Convert text to uppercase, lowercase, title case, sentence case, camelCase, snake_case, kebab-case and more — instantly, no sign-up required.",
    url: `${BASE_URL}/tools/case-converter`,
    images: [
      {
        url: `${BASE_URL}/og/og-case-converter.png`,
        width: 1200,
        height: 630,
        alt: "Free Text Case Converter by PickBlend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Text Case Converter — UPPER, lower, Title Case | PickBlend",
    description:
      "Convert text to uppercase, lowercase, title case, sentence case, camelCase, snake_case, kebab-case and more — instantly, no sign-up required.",
    images: [`${BASE_URL}/og/og-case-converter.png`],
  },
  alternates: {
    canonical: `${BASE_URL}/tools/case-converter`,
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
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${BASE_URL}/tools/` },
      { "@type": "ListItem", position: 3, name: "Text Case Converter", item: `${BASE_URL}/tools/case-converter` },
    ],
  };

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Text Case Converter",
    url: `${BASE_URL}/tools/case-converter`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free online text case converter. Instantly convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, and alternating case.",
    featureList: [
      "UPPERCASE conversion",
      "lowercase conversion",
      "Title Case conversion",
      "Sentence case conversion",
      "camelCase conversion",
      "PascalCase conversion",
      "snake_case conversion",
      "kebab-case conversion",
      "CONSTANT_CASE conversion",
      "Alternating case conversion",
      "Copy to clipboard",
      "Auto-save to localStorage",
      "Word and character count",
      "100% private — no server calls",
    ],
    creator: { "@type": "Organization", name: "PickBlend", url: BASE_URL },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is title case?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Title case capitalises the first letter of each major word in a string. It's used for article headlines, book titles, film names, and formal headings.",
        },
      },
      {
        "@type": "Question",
        name: "What is camelCase used for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "camelCase is the standard naming convention for variables and functions in JavaScript, TypeScript, Java, and many other object-oriented languages. The first word is lowercase and each subsequent word starts with a capital letter.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between snake_case and kebab-case?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both use all-lowercase words, but snake_case separates words with underscores (_) while kebab-case uses hyphens (-). snake_case is common in Python and SQL; kebab-case is standard for CSS and URL slugs.",
        },
      },
      {
        "@type": "Question",
        name: "How do I convert text to uppercase online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Paste or type your text into our case converter tool, then click the 'UPPERCASE' button. Your text is instantly converted to capital letters.",
        },
      },
      {
        "@type": "Question",
        name: "Is this text case converter free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, completely free. No account, no sign-up, no usage limits. All conversions happen in your browser with no data sent to any server.",
        },
      },
    ],
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Convert Text Case Online",
    description: "Convert text to any case format using PickBlend's free case converter.",
    step: [
      {
        "@type": "HowToStep",
        name: "Paste or type your text",
        text: "Open the case converter and paste or type your text into the editor area.",
      },
      {
        "@type": "HowToStep",
        name: "Click a case format button",
        text: "Click any of the case buttons (UPPERCASE, lowercase, Title Case, camelCase, snake_case, etc.) to instantly transform your text.",
      },
      {
        "@type": "HowToStep",
        name: "Copy the result",
        text: "Click the Copy button to copy your converted text to the clipboard, ready to paste anywhere.",
      },
    ],
    tool: { "@type": "HowToTool", name: "PickBlend Case Converter", url: `${BASE_URL}/tools/case-converter` },
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

export default function CaseConverterPage() {
  return (
    <>
      <PageJsonLd />
      <main>
        <CaseConverter />
      </main>
      <section>
        <CaseConverterIntro />
      </section>
      <article>
        <CaseConverterSEO />
      </article>
    </>
  );
}
