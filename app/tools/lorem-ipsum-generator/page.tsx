import type { Metadata } from "next";
import LoremIpsumGenerator from "@/components/LoremIpsumGenerator";
import LoremIpsumSEO from "@/components/LoremIpsumSEO";

const BASE_URL = "https://www.pickblend.com";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator — Free Placeholder Text | PickBlend",
  description:
    "Free Lorem Ipsum generator. Generate placeholder text by paragraphs, sentences, or words instantly. Perfect for web design mockups and app development.",
  keywords: [
    "lorem ipsum generator",
    "lorem ipsum",
    "placeholder text generator",
    "dummy text generator",
    "free lorem ipsum",
  ],
  authors: [{ name: "PickBlend" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Free Lorem Ipsum Generator — Placeholder Text | PickBlend",
    description:
      "Generate placeholder text by paragraphs, sentences, or words instantly. Supports HTML format. Perfect for web design mockups, app development, and layout testing.",
    url: `${BASE_URL}/tools/lorem-ipsum-generator`,
    images: [
      {
        url: `${BASE_URL}/og/home.png`,
        width: 1200,
        height: 630,
        alt: "Free Lorem Ipsum Generator by PickBlend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Lorem Ipsum Generator — Placeholder Text | PickBlend",
    description:
      "Generate placeholder text by paragraphs, sentences, or words instantly. Supports HTML format. Perfect for web design mockups, app development, and layout testing.",
    images: [`${BASE_URL}/og/home.png`],
  },
  alternates: {
    canonical: `${BASE_URL}/tools/lorem-ipsum-generator`,
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Lorem Ipsum Generator",
        item: `${BASE_URL}/tools/lorem-ipsum-generator`,
      },
    ],
  };

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Lorem Ipsum Generator",
    url: `${BASE_URL}/tools/lorem-ipsum-generator`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free Lorem Ipsum placeholder text generator. Generate paragraphs, sentences, or words of placeholder text instantly. Supports HTML format with <p> tags. Perfect for web design and development.",
    featureList: [
      "Generate paragraphs, sentences, or words",
      "Adjustable amount (1–50)",
      "Classic 'Lorem ipsum' opening option",
      "HTML format with <p> tags",
      "Copy to clipboard",
      "Word and character count of generated text",
      "Unique output on every generation",
      "100% private — runs entirely in browser",
    ],
    creator: { "@type": "Organization", name: "PickBlend", url: BASE_URL },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Lorem Ipsum mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lorem Ipsum does not have a coherent meaning. It is a scrambled and altered extract from a classical Latin text. Individual words have Latin roots, but in their rearranged form they do not form grammatically correct or meaningful sentences. This is intentional — the text is designed to be unreadable as actual prose.",
        },
      },
      {
        "@type": "Question",
        name: "Where does Lorem Ipsum come from?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lorem Ipsum is derived from 'de Finibus Bonorum et Malorum', a philosophical work by the Roman statesman Cicero written in 45 BC. The passage was scrambled and modified, then adopted by the typesetting industry in the 1960s as a universal placeholder text standard.",
        },
      },
      {
        "@type": "Question",
        name: "Is Lorem Ipsum Latin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lorem Ipsum is based on classical Latin but has been deliberately scrambled so it is not grammatically correct Latin. It is sometimes described as 'pseudo-Latin'. Individual words are recognisable as Latin-derived, but the sentences do not make sense.",
        },
      },
      {
        "@type": "Question",
        name: "How many words is a typical Lorem Ipsum paragraph?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical Lorem Ipsum paragraph contains between 40 and 80 words, usually consisting of 4–7 sentences of 8–15 words each. Our generator creates paragraphs in this range by default.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use Lorem Ipsum for commercial projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Lorem Ipsum is completely free to use for any purpose, commercial or otherwise. The underlying Latin text is ancient and in the public domain. Our generator is also free to use without limits — no sign-up or attribution required.",
        },
      },
    ],
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Generate Lorem Ipsum Placeholder Text",
    description:
      "Generate placeholder text by paragraphs, sentences, or words using PickBlend's free Lorem Ipsum generator.",
    step: [
      {
        "@type": "HowToStep",
        name: "Set your options",
        text: "Enter the amount (1–50), choose Paragraphs, Sentences, or Words, and configure the Lorem ipsum opening and HTML format options.",
      },
      {
        "@type": "HowToStep",
        name: "Click Generate",
        text: "Click the Generate button to instantly produce unique placeholder text based on your settings. Click again to get a fresh random output.",
      },
      {
        "@type": "HowToStep",
        name: "Copy and use",
        text: "Click the Copy button to copy all generated text to your clipboard, then paste it into your design tool, code editor, or CMS.",
      },
    ],
    tool: {
      "@type": "HowToTool",
      name: "PickBlend Lorem Ipsum Generator",
      url: `${BASE_URL}/tools/lorem-ipsum-generator`,
    },
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

export default function LoremIpsumGeneratorPage() {
  return (
    <>
      <PageJsonLd />
      <main>
        <LoremIpsumGenerator />
      </main>
      <article>
        <LoremIpsumSEO />
      </article>
    </>
  );
}
