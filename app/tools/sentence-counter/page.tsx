import type { Metadata } from "next";
import SentenceCounter from "@/components/SentenceCounter";
import SentenceCounterSEO from "@/components/SentenceCounterSEO";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "Free Sentence Counter — Count Sentences Online | PickBlend",
  description:
    "Count sentences in your text instantly. Paste any text and get an accurate sentence count with average sentence length analysis. Free, no sign-up.",
  keywords: ["sentence counter", "count sentences", "sentence count", "online sentence counter", "average sentence length"],
  authors: [{ name: "PickBlend" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Free Sentence Counter — Count Sentences Online | PickBlend",
    description:
      "Count sentences in your text instantly. Paste any text and get an accurate sentence count with average sentence length analysis. Free, no sign-up.",
    url: `${BASE_URL}/tools/sentence-counter`,
    images: [{ url: `${BASE_URL}/og/home.png`, width: 1200, height: 630, alt: "Free Sentence Counter by PickBlend" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Sentence Counter — Count Sentences Online | PickBlend",
    description: "Count sentences in your text instantly. Free, no sign-up.",
    images: [`${BASE_URL}/og/home.png`],
  },
  alternates: { canonical: `${BASE_URL}/tools/sentence-counter` },
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
      { "@type": "ListItem", position: 3, name: "Sentence Counter", item: `${BASE_URL}/tools/sentence-counter` },
    ],
  };

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Sentence Counter",
    url: `${BASE_URL}/tools/sentence-counter`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: "Free online sentence counter. Count sentences and calculate average sentence length in real time.",
    featureList: ["Real-time sentence count", "Average sentence length", "Word count", "100% private — no server calls"],
    creator: { "@type": "Organization", name: "PickBlend", url: BASE_URL },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How does the sentence counter detect sentences?", acceptedAnswer: { "@type": "Answer", text: "The sentence counter identifies sentence boundaries by detecting terminal punctuation: periods (.), exclamation marks (!), and question marks (?). It accounts for common exceptions like abbreviations to avoid false positives." } },
      { "@type": "Question", name: "What is a good average sentence length?", acceptedAnswer: { "@type": "Answer", text: "For general web content, 15–20 words per sentence is ideal for readability. Journalism often aims for 10–15 words. Academic writing can go longer, but keeping sentences under 30 words improves accessibility for most audiences." } },
      { "@type": "Question", name: "How many sentences should a paragraph have?", acceptedAnswer: { "@type": "Answer", text: "Most style guides recommend 3–5 sentences per paragraph for web content. Shorter paragraphs (2–3 sentences) work well for mobile readers. Longer paragraphs (6+ sentences) can feel dense on screen and may reduce engagement." } },
      { "@type": "Question", name: "Does sentence count affect readability scores?", acceptedAnswer: { "@type": "Answer", text: "Yes — average sentence length is one of the two primary inputs to the Flesch Reading Ease formula and the Flesch-Kincaid Grade Level formula. Shorter sentences produce higher (easier) readability scores." } },
      { "@type": "Question", name: "Is this sentence counter free?", acceptedAnswer: { "@type": "Answer", text: "Yes, completely free. No account, no sign-up, no usage limits. Everything runs in your browser — your text is never sent to a server." } },
    ],
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Count Sentences Online",
    description: "Count sentences and calculate average sentence length using PickBlend's free sentence counter.",
    step: [
      { "@type": "HowToStep", name: "Paste or type your text", text: "Open the sentence counter and paste or type your text. Sentence counts update instantly in real time." },
      { "@type": "HowToStep", name: "Review your sentence count", text: "Check the total sentence count alongside the word count to calculate your average sentence length." },
      { "@type": "HowToStep", name: "Revise long sentences", text: "If your average sentence length exceeds 25 words, identify long sentences and split them at natural break points to improve readability." },
    ],
    tool: { "@type": "HowToTool", name: "PickBlend Sentence Counter", url: `${BASE_URL}/tools/sentence-counter` },
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

export default function SentenceCounterPage() {
  return (
    <>
      <PageJsonLd />
      <main>
        <SentenceCounter />
      </main>
      <article>
        <SentenceCounterSEO />
      </article>
    </>
  );
}
