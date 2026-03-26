import type { Metadata } from "next";
import CharacterCounter from "@/components/CharacterCounter";
import CharacterCounterSEO from "@/components/CharacterCounterSEO";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "Character Counter — Count Characters Online Free | PickBlend",
  description:
    "Free online character counter. Count characters with and without spaces instantly. Check Twitter, Instagram, meta description and SMS character limits in real time.",
  keywords: [
    "character counter",
    "character count",
    "count characters",
    "letter counter",
    "online character counter",
    "free character counter",
  ],
  authors: [{ name: "PickBlend" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Free Character Counter — Count Characters Online | PickBlend",
    description:
      "Count characters with and without spaces instantly. Check Twitter, Instagram, meta description and SMS character limits in real time. 100% free and private.",
    url: `${BASE_URL}/tools/character-counter`,
    images: [
      {
        url: `${BASE_URL}/og/home.png`,
        width: 1200,
        height: 630,
        alt: "Free Character Counter Tool by PickBlend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Character Counter — Count Characters Online | PickBlend",
    description:
      "Count characters with and without spaces instantly. Check Twitter, Instagram, meta description and SMS character limits in real time. 100% free and private.",
    images: [`${BASE_URL}/og/home.png`],
  },
  alternates: {
    canonical: `${BASE_URL}/tools/character-counter`,
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
      { "@type": "ListItem", position: 3, name: "Character Counter", item: `${BASE_URL}/tools/character-counter` },
    ],
  };

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Character Counter",
    url: `${BASE_URL}/tools/character-counter`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free online character counter. Count characters with and without spaces. Check Twitter, Instagram, meta description and SMS character limits in real time.",
    featureList: [
      "Real-time character count with spaces",
      "Real-time character count without spaces",
      "Word count",
      "Line count",
      "Paragraph count",
      "Platform character limit checker (Twitter, Instagram, SMS, Meta tags, YouTube, TikTok, LinkedIn)",
      "Toggle spaces on/off",
      "Auto-save to localStorage",
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
        name: "What is the difference between characters with and without spaces?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Characters with spaces counts every character including spaces, which is how most platforms (Twitter, Instagram, SMS) measure limits. Characters without spaces counts only letters, numbers, and punctuation — no spaces.",
        },
      },
      {
        "@type": "Question",
        name: "What is the character limit for Twitter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard Twitter/X accounts have a 280-character limit per post. Twitter bios are limited to 160 characters.",
        },
      },
      {
        "@type": "Question",
        name: "How many characters is a meta description?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google displays meta descriptions up to approximately 155–160 characters in search results. We recommend aiming for 150–158 characters to stay safely within limits.",
        },
      },
      {
        "@type": "Question",
        name: "What counts as a character?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A character is any single unit of written language — letters, digits, punctuation marks, symbols, spaces, and line breaks all count as individual characters.",
        },
      },
      {
        "@type": "Question",
        name: "Is this character counter free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, completely free. No account required, no sign-up, no usage limits. All processing happens in your browser — your text is never sent to any server.",
        },
      },
    ],
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Count Characters Online",
    description: "Count characters with and without spaces using PickBlend's free character counter.",
    step: [
      {
        "@type": "HowToStep",
        name: "Paste or type your text",
        text: "Open the character counter and paste or type your text into the editor. Character counts update instantly.",
      },
      {
        "@type": "HowToStep",
        name: "Toggle spaces on or off",
        text: "Use the 'Count spaces' toggle to switch between counting characters with spaces or without spaces.",
      },
      {
        "@type": "HowToStep",
        name: "Check platform limits",
        text: "Review the platform limits panel to see how your character count compares to Twitter, Instagram, SMS, and other platforms. Progress bars turn red when you exceed a limit.",
      },
    ],
    tool: { "@type": "HowToTool", name: "PickBlend Character Counter", url: `${BASE_URL}/tools/character-counter` },
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

export default function CharacterCounterPage() {
  return (
    <>
      <PageJsonLd />
      <main>
        <CharacterCounter />
      </main>
      <article>
        <CharacterCounterSEO />
      </article>
    </>
  );
}
