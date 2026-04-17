import type { Metadata } from "next";
import CaseConverter from "@/components/CaseConverter";
import CaseConverterIntro from "@/components/CaseConverterIntro";
import CaseConverterSEO from "@/components/CaseConverterSEO";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "Text Case Converter — UPPER, lower, Title, Sentence Case",
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
        name: "What is camelCase and when should I use it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "camelCase is a naming convention where the first word is all lowercase and every subsequent word begins with an uppercase letter — producing names like getUserName, totalWordCount and isLoading. camelCase is the standard naming convention for variables, functions and parameters in JavaScript, TypeScript, Java, Swift and Kotlin. It is required by major style guides including Airbnb JavaScript, Google JavaScript and StandardJS. Use camelCase for any variable or function name in frontend or backend JavaScript code. Our case converter converts any text to camelCase instantly with a single click.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between camelCase and PascalCase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The difference between camelCase and PascalCase is the capitalisation of the very first letter. camelCase starts with a lowercase letter — getUserName. PascalCase starts with an uppercase letter — GetUserName. PascalCase is also called UpperCamelCase reflecting this relationship. In practice the two conventions are used in completely different contexts. camelCase is for variables and functions. PascalCase is almost universally reserved for class names, React components and TypeScript interfaces across JavaScript, Python, Java and C#. Our text case converter handles both camelCase and PascalCase conversion instantly.",
        },
      },
      {
        "@type": "Question",
        name: "When should I use snake_case vs camelCase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use snake_case when writing Python, Ruby, Rust or SQL — these languages treat snake_case as their official standard. Use camelCase when writing JavaScript, TypeScript, Java or Swift. The choice is largely determined by the language ecosystem you are working in rather than personal preference. Mixing snake_case and camelCase within the same codebase creates inconsistency that slows down code review and onboarding. If your team has a style guide follow it strictly. Our case converter makes switching between snake_case and camelCase instant when you need to port code between languages.",
        },
      },
      {
        "@type": "Question",
        name: "Why do URLs use kebab-case for SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "URLs use kebab-case because Google treats hyphens as word separators in search indexing making kebab-case URLs more SEO-friendly than alternatives. A URL like /word-frequency-counter tells Google it contains three separate meaningful words. An underscore-separated URL like /word_frequency_counter is treated as a single unseparated token by Google's indexing. kebab-case URL slugs also read more naturally in browser address bars and are easier to share verbally. Our case converter includes a kebab-case option for generating clean SEO-friendly URL slugs from any text.",
        },
      },
      {
        "@type": "Question",
        name: "What is SCREAMING_SNAKE_CASE used for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SCREAMING_SNAKE_CASE — all uppercase letters separated by underscores — is the standard convention for constants and environment variables across virtually all programming languages and platforms. Examples include MAX_RETRY_COUNT, API_SECRET_KEY, DATABASE_URL and NODE_ENV. The all-uppercase treatment signals to every developer reading the code that this value is a constant that should never be reassigned during runtime. Environment variables in .env files, Docker configurations and cloud platform settings universally use SCREAMING_SNAKE_CASE. Our case converter includes SCREAMING_SNAKE_CASE as a one-click conversion option.",
        },
      },
      {
        "@type": "Question",
        name: "How do I convert text to title case online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Converting text to title case online is simple with our free text case converter. Paste your text, click the Title Case button and every major word is capitalised instantly. Title case capitalises the first letter of all major words while leaving articles like a, an and the and prepositions like in, on and at in lowercase unless they start the title. Title case is used for headlines, book titles, article headings, product names and page titles. Our case converter handles all 10 case formats including Title Case, Sentence case, camelCase, PascalCase, snake_case and kebab-case.",
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
