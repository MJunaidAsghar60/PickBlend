import type { Metadata } from "next";
import CharacterCounter from "@/components/CharacterCounter";
import CharacterCounterIntro from "@/components/CharacterCounterIntro";
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
        url: `${BASE_URL}/og/og-character-counter.png`,
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
    images: [`${BASE_URL}/og/og-character-counter.png`],
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
        name: "How many characters is a post on X in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard post on X has a character limit of 280 characters in 2026 for regular accounts. This character limit includes spaces, punctuation, hashtags and mentions. URLs are automatically shortened to 23 characters by X regardless of their original length so a long URL counts as just 23 characters toward your limit. X Premium subscribers have access to extended post lengths but the 280-character limit applies to the vast majority of users. Our character counter tracks your X character count in real time showing you exactly how many characters remain before you hit the limit.",
        },
      },
      {
        "@type": "Question",
        name: "What is the ideal meta description length for SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ideal meta description length for SEO is between 150 and 160 characters including spaces. Meta descriptions shorter than 120 characters may be automatically expanded by Google with text pulled from your page content. Descriptions over 160 characters get truncated with an ellipsis in Google search results which cuts off your call to action at the worst possible moment. Writing meta descriptions between 145 and 158 characters gives you a safe margin across all devices and screen sizes. Our character counter shows your meta description length in real time with a live indicator highlighting when you approach the 160-character SEO limit.",
        },
      },
      {
        "@type": "Question",
        name: "How many characters is an SMS message in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard SMS message in 2026 using GSM-7 encoding has a character limit of 160 characters. This 160-character SMS limit has been the standard since the protocol was designed in the 1980s based on postcard length research. Including a single emoji or special character forces the encoding to switch from GSM-7 to Unicode UCS-2 which drops the limit dramatically to just 70 characters per message. Messages exceeding the limit are split into multiple segments each billed separately by carriers. Our character counter shows your SMS character count with a live warning when you approach the 160-character SMS limit.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Instagram bio character limit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Instagram bio character limit is 150 characters including spaces, emoji and line breaks. Within this 150-character Instagram bio limit you need to communicate your identity, value proposition and a clear call to action — which requires careful editing. Emoji count as one or two characters each depending on the specific emoji. Line breaks count as one character. Every character in an Instagram bio is visible to visitors since bios are never truncated on profile pages unlike captions which are cut after 125 characters in the feed. Our character counter tracks your Instagram bio length against the 150-character limit in real time.",
        },
      },
      {
        "@type": "Question",
        name: "Does character count include spaces?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whether character count includes spaces depends entirely on the context and platform. Most social media platforms including X, Instagram and LinkedIn count spaces as characters toward their post limits. For SEO purposes meta title and description character counts also include spaces. SMS messages count spaces as characters toward the 160-character limit. Our character counter displays both the total character count including spaces and the count excluding spaces simultaneously so you can check both metrics at once without switching between tools or doing mental math.",
        },
      },
      {
        "@type": "Question",
        name: "What is the LinkedIn post character limit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The LinkedIn post character limit is 3,000 characters for standard text posts in 2026. However only the first 210 characters are visible in the LinkedIn feed before the See more button appears. This means your opening 210 characters carry disproportionate importance — they must hook readers strongly enough to earn the click to expand. LinkedIn articles have a separate limit of 125,000 characters. LinkedIn profile headlines are limited to 220 characters. Our character counter tracks your LinkedIn content length in real time so you can craft posts that maximize impact within both the 3,000-character total limit and the critical 210-character visible preview.",
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
      <section>
        <CharacterCounterIntro />
      </section>
      <article>
        <CharacterCounterSEO />
      </article>
    </>
  );
}
