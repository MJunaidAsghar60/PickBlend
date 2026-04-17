import type { Metadata } from "next";
import SentenceCounter from "@/components/SentenceCounter";
import SentenceCounterIntro from "@/components/SentenceCounterIntro";
import SentenceCounterSEO from "@/components/SentenceCounterSEO";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "Free Sentence Counter — Count Sentences Online",
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
      { "@type": "Question", name: "How does an online sentence counter detect sentences?", acceptedAnswer: { "@type": "Answer", text: "An online sentence counter detects sentences by identifying terminal punctuation marks — periods, question marks and exclamation points — that are followed by a space or appear at the end of the text. Accurate sentence detection also requires handling common abbreviations like Mr., Mrs., Dr., Inc. and U.S. to avoid incorrectly splitting them as sentence endings. Our sentence counter uses intelligent detection that handles these edge cases and displays every detected sentence in a numbered list so you can verify the count and spot any detection issues in your specific text." } },
      { "@type": "Question", name: "How many sentences should a paragraph have for SEO?", acceptedAnswer: { "@type": "Answer", text: "For SEO-optimised online content a paragraph should contain 2 to 4 sentences. Short paragraphs of 2 to 3 sentences improve readability scores, reduce cognitive load and perform better on mobile screens where long paragraphs look like walls of text. Academic writing uses longer paragraphs of 4 to 6 sentences to develop arguments fully. Google's quality guidelines emphasise user experience — and short readable paragraphs directly reduce bounce rate and increase time on page. Our sentence counter shows your average sentences per paragraph so you can monitor paragraph density across your entire document in real time." } },
      { "@type": "Question", name: "What is a good average sentence length for readable writing?", acceptedAnswer: { "@type": "Answer", text: "A good average sentence length for readable writing is between 15 and 20 words per sentence. Sentences shorter than 8 words consistently feel abrupt and choppy. Sentences over 30 words become difficult to parse and increase reading difficulty scores significantly. The most engaging writing mixes short punchy sentences with longer explanatory ones — creating rhythm that pulls readers forward. Aim for an average of 17 words per sentence as a baseline for general audience online content. Our sentence counter displays your average words per sentence alongside the total sentence count so you can monitor readability as you write." } },
      { "@type": "Question", name: "How many sentences is a 500-word essay?", acceptedAnswer: { "@type": "Answer", text: "A 500-word essay contains approximately 25 to 35 sentences depending on your average sentence length. At an average of 15 words per sentence 500 words produces about 33 sentences. At 20 words per sentence you get around 25 sentences. Most 500-word essays follow a 5-paragraph structure with an introduction of 3 to 4 sentences, three body paragraphs of 5 to 6 sentences each and a conclusion of 3 to 4 sentences. Paste your essay into our sentence counter to see the exact sentence count and check whether your paragraph lengths are consistent throughout." } },
      { "@type": "Question", name: "Can I use a sentence counter to improve writing quality?", acceptedAnswer: { "@type": "Answer", text: "Yes — a sentence counter reveals patterns in your writing style that are difficult to notice through manual reading alone. If your average sentence length is consistently over 25 words your writing may be too complex for your target audience. If every sentence is under 8 words your prose may feel fragmented and lacking depth. The numbered sentence list in our counter helps you identify your longest most complex sentences so you can break them up strategically. Tracking average words per sentence alongside your readability score gives you a complete picture of your writing's accessibility." } },
      { "@type": "Question", name: "How is sentence count different from word count?", acceptedAnswer: { "@type": "Answer", text: "Sentence count and word count measure different dimensions of text. Word count tells you how much content you have written — useful for meeting essay requirements, blog post targets and contract deliverables. Sentence count tells you how that content is structured — useful for evaluating readability, paragraph density and writing rhythm. A 500-word text with 10 long sentences reads very differently from a 500-word text with 40 short sentences even though the word count is identical. Using our sentence counter alongside the word counter gives you a complete quantitative picture of both the volume and structure of your writing." } },
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
      <section>
        <SentenceCounterIntro />
      </section>
      <article>
        <SentenceCounterSEO />
      </article>
    </>
  );
}
