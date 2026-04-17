import type { Metadata } from "next";
import LoremIpsumGenerator from "@/components/LoremIpsumGenerator";
import LoremIpsumGeneratorIntro from "@/components/LoremIpsumGeneratorIntro";
import LoremIpsumSEO from "@/components/LoremIpsumSEO";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator — Free Placeholder Text",
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
        url: `${BASE_URL}/og/og-lorem-ipsum.png`,
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
    images: [`${BASE_URL}/og/og-lorem-ipsum.png`],
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
        name: "What does Lorem Ipsum mean in English?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lorem Ipsum does not have a coherent meaning in English or modern Latin. It is a deliberately scrambled extract from a classical Latin philosophical text — De Finibus Bonorum et Malorum — written by the Roman statesman Cicero in 45 BC. The original passage was intentionally altered and rearranged to be grammatically nonsensical so that viewers looking at a design mockup would not be distracted by reading actual meaningful content. Individual words have Latin roots but the Lorem Ipsum passage as a whole produces no translatable meaning. Our Lorem Ipsum generator creates unique randomised placeholder text every time you click Generate.",
        },
      },
      {
        "@type": "Question",
        name: "Is Lorem Ipsum free to use for commercial projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lorem Ipsum is completely free to use for any commercial or non-commercial purpose without restriction or attribution. The underlying Latin text is over 2,000 years old and entirely in the public domain. There are no copyright, licensing or intellectual property concerns with using Lorem Ipsum placeholder text in client projects, commercial designs, published applications or any other context. Our Lorem Ipsum generator is also free to use without limits — no sign-up required, no attribution needed and no restrictions on how much placeholder text you generate or how you use it.",
        },
      },
      {
        "@type": "Question",
        name: "What is Lorem Ipsum used for in web development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lorem Ipsum is used in web development as placeholder text to populate UI components before real content is available. Developers use Lorem Ipsum to fill blog post cards, article pages, user profiles, comment sections and any content-heavy component during development. It allows developers to test layout rendering, text overflow handling, responsive behaviour and typography at realistic content lengths without waiting for a copywriter. Our Lorem Ipsum generator includes an HTML format option that wraps each paragraph in proper tags for direct paste into HTML templates and CMS fields.",
        },
      },
      {
        "@type": "Question",
        name: "How do I generate Lorem Ipsum with HTML paragraph tags?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generating Lorem Ipsum with HTML paragraph tags is simple using our free Lorem Ipsum generator. Enable the HTML format checkbox before clicking Generate and every paragraph in the output is automatically wrapped in proper opening and closing paragraph tags. This HTML-formatted Lorem Ipsum is ready to paste directly into HTML templates, Markdown editors that support inline HTML, CMS rich text fields, email templates and any other context where properly tagged HTML content is required. The HTML format option works with all three generation modes — paragraphs, sentences and words.",
        },
      },
      {
        "@type": "Question",
        name: "How many words is a standard Lorem Ipsum paragraph?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard Lorem Ipsum paragraph contains between 40 and 80 words typically consisting of 4 to 7 sentences of 8 to 15 words each. The classic opening Lorem Ipsum paragraph that begins with the words Lorem ipsum dolor sit amet is 69 words long. Our Lorem Ipsum generator creates paragraphs in the 40 to 80 word range by default producing natural-looking placeholder text at realistic content lengths. You can generate between 1 and 50 paragraphs at once and use the word count display below the output to verify the exact length of generated text.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between Lorem Ipsum paragraphs sentences and words?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The three generation modes in our Lorem Ipsum generator produce different types of placeholder text output. Paragraphs mode generates complete multi-sentence paragraph blocks — ideal for article mockups and blog post layouts. Sentences mode generates individual standalone sentences joined together — useful for shorter content blocks and UI components. Words mode generates a specified number of individual Lorem Ipsum words — perfect for testing button labels, short captions, tooltip text and other micro-copy elements. All three modes support the classic Lorem ipsum opening and the HTML paragraph tag format option.",
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
      <section>
        <LoremIpsumGeneratorIntro />
      </section>
      <article>
        <LoremIpsumSEO />
      </article>
    </>
  );
}
