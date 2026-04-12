import type { Metadata } from "next";
import TextRepeater from "@/components/TextRepeater";
import TextRepeaterIntro from "@/components/TextRepeaterIntro";
import TextRepeaterSEO from "@/components/TextRepeaterSEO";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "Free Text Repeater — Repeat Text Online | PickBlend",
  description:
    "Repeat any text or word multiple times instantly. Choose separator, number of repetitions and format. Free online tool, no sign-up required.",
  keywords: ["text repeater", "repeat text online", "word repeater", "text duplicator", "repeat word generator"],
  authors: [{ name: "PickBlend" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Free Text Repeater — Repeat Text Online | PickBlend",
    description:
      "Repeat any text or word multiple times instantly. Choose separator, number of repetitions and format. Free online tool, no sign-up required.",
    url: `${BASE_URL}/tools/text-repeater`,
    images: [{ url: `${BASE_URL}/og/home.png`, width: 1200, height: 630, alt: "Free Text Repeater by PickBlend" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Text Repeater — Repeat Text Online | PickBlend",
    description: "Repeat any text or word multiple times instantly. Free, no sign-up.",
    images: [`${BASE_URL}/og/home.png`],
  },
  alternates: { canonical: `${BASE_URL}/tools/text-repeater` },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

function PageJsonLd() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${BASE_URL}/tools` },
      { "@type": "ListItem", position: 3, name: "Text Repeater", item: `${BASE_URL}/tools/text-repeater` },
    ],
  };

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Text Repeater",
    url: `${BASE_URL}/tools/text-repeater`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: "Free online text repeater. Repeat any word, phrase or text block multiple times with custom separators.",
    featureList: ["Repeat text N times", "Custom separator (space, comma, newline, custom)", "Instant output", "One-click copy", "100% private — no server calls"],
    creator: { "@type": "Organization", name: "PickBlend", url: BASE_URL },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What can I use a text repeater for?", acceptedAnswer: { "@type": "Answer", text: "Text repeaters are useful for software testing (generating long strings to test input limits), UI design (repeating placeholder labels), data formatting (generating comma-separated or newline-separated lists), and content creation." } },
      { "@type": "Question", name: "What separators can I use between repetitions?", acceptedAnswer: { "@type": "Answer", text: "Common options include space, comma, newline, custom characters, or no separator. Choose based on how you plan to use the repeated text — comma for CSV, newline for lists, no separator for concatenated strings." } },
      { "@type": "Question", name: "Is there a limit to how many times I can repeat text?", acceptedAnswer: { "@type": "Answer", text: "Our browser-based tool handles hundreds of repetitions instantly. For very large outputs, performance depends on your device's processing power, but most modern browsers handle these cases without issues." } },
      { "@type": "Question", name: "Can I repeat multi-line text?", acceptedAnswer: { "@type": "Answer", text: "Yes — you can paste a block of multi-line text and repeat the entire block multiple times. This is useful for repeating template structures, multi-line code snippets, or formatted text blocks." } },
      { "@type": "Question", name: "Is this text repeater free?", acceptedAnswer: { "@type": "Answer", text: "Yes, completely free. No account, no sign-up, no usage limits. Everything runs in your browser — your text is never sent to any server." } },
    ],
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Repeat Text Online",
    description: "Repeat any text multiple times with custom separators using PickBlend's free text repeater.",
    step: [
      { "@type": "HowToStep", name: "Enter your text", text: "Type or paste the word, phrase, or text block you want to repeat into the input field." },
      { "@type": "HowToStep", name: "Set repetitions and separator", text: "Choose how many times to repeat the text and select your preferred separator (space, comma, newline, or custom)." },
      { "@type": "HowToStep", name: "Copy the output", text: "Click the copy button to copy the repeated text to your clipboard and paste it wherever you need it." },
    ],
    tool: { "@type": "HowToTool", name: "PickBlend Text Repeater", url: `${BASE_URL}/tools/text-repeater` },
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

export default function TextRepeaterPage() {
  return (
    <>
      <PageJsonLd />
      <main>
        <TextRepeater />
      </main>
      <section>
        <TextRepeaterIntro />
      </section>
      <article>
        <TextRepeaterSEO />
      </article>
    </>
  );
}
