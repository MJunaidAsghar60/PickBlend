import type { Metadata } from "next";
import Link from "next/link";
import ReadabilityScore from "@/components/ReadabilityScore";
import ReadabilityScoreIntro from "@/components/ReadabilityScoreIntro";
import ReadabilityScoreSEO from "@/components/ReadabilityScoreSEO";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "Free Readability Score Checker — Flesch Reading Ease | PickBlend",
  description:
    "Check your text readability score instantly. Get Flesch Reading Ease, Flesch-Kincaid Grade Level and reading level analysis. Free, no sign-up required.",
  keywords: ["readability score", "readability checker", "flesch reading ease", "flesch kincaid grade level", "reading level checker"],
  authors: [{ name: "PickBlend" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Free Readability Score Checker — Flesch Reading Ease | PickBlend",
    description:
      "Check your text readability score instantly. Get Flesch Reading Ease, Flesch-Kincaid Grade Level and reading level analysis. Free, no sign-up required.",
    url: `${BASE_URL}/tools/readability-score`,
    images: [{ url: `${BASE_URL}/og/home.png`, width: 1200, height: 630, alt: "Free Readability Score Checker by PickBlend" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Readability Score Checker — Flesch Reading Ease | PickBlend",
    description: "Check your text readability score instantly. Free, no sign-up.",
    images: [`${BASE_URL}/og/home.png`],
  },
  alternates: { canonical: `${BASE_URL}/tools/readability-score` },
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
      { "@type": "ListItem", position: 3, name: "Readability Score Checker", item: `${BASE_URL}/tools/readability-score` },
    ],
  };

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Readability Score Checker",
    url: `${BASE_URL}/tools/readability-score`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: "Free readability score checker. Get Flesch Reading Ease score and Flesch-Kincaid Grade Level instantly.",
    featureList: ["Flesch Reading Ease score", "Flesch-Kincaid Grade Level", "Average sentence length", "Average syllables per word", "100% private — no server calls"],
    creator: { "@type": "Organization", name: "PickBlend", url: BASE_URL },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is a good Flesch Reading Ease score for blog content?", acceptedAnswer: { "@type": "Answer", text: "A good Flesch Reading Ease score for blog content is between 60 and 70 which is classified as standard and suitable for general audiences. Scores of 70 to 80 are fairly easy and ideal for consumer-facing blog posts and marketing copy. Scores above 80 work well for instructional content and beginner guides. Academic and technical content typically scores between 30 and 50. The Flesch Reading Ease formula rewards shorter sentences and simpler words — the two most effective levers for improving your score. Paste any blog post into our readability score checker to instantly see your Flesch Reading Ease score alongside five other industry-standard metrics." } },
      { "@type": "Question", name: "What is Flesch-Kincaid Grade Level and how is it calculated?", acceptedAnswer: { "@type": "Answer", text: "The Flesch-Kincaid Grade Level converts text readability into a US school grade equivalent making it easy to match content to your target audience. A score of 8.0 means the text is accessible to an average 8th grader. The formula calculates grade level using two variables — average sentence length in words and average number of syllables per word. Longer sentences and polysyllabic vocabulary increase the grade level. Most general audience online content should target a Flesch-Kincaid Grade Level of 6 to 9. News articles aim for grade 6 to 8. Academic papers typically score 12 to 16. Our readability checker calculates your Flesch-Kincaid Grade Level instantly." } },
      { "@type": "Question", name: "How do I improve my readability score quickly?", acceptedAnswer: { "@type": "Answer", text: "Improving your readability score quickly comes down to two high-impact changes — shortening sentences and simplifying vocabulary. Breaking one 30-word sentence into two 15-word sentences significantly improves every readability metric including Flesch Reading Ease, Flesch-Kincaid Grade Level and Gunning Fog Index simultaneously. Replacing polysyllabic words with simpler alternatives also helps — use instead of utilise, show instead of demonstrate, help instead of facilitate. Shorter paragraphs improve visual readability even if they do not affect formula scores directly. Paste your text into our readability score checker to identify exactly which sentences are dragging your score down." } },
      { "@type": "Question", name: "What is the Gunning Fog Index and what score should I aim for?", acceptedAnswer: { "@type": "Answer", text: "The Gunning Fog Index measures reading difficulty based on sentence length and the percentage of complex words — defined as words containing three or more syllables. The result is a grade level estimate where lower numbers indicate easier reading. A Gunning Fog score of 8 is ideal for most general audience content. Scores above 12 suggest the text is too complex for average readers and should be simplified. Scores above 17 approach academic journal complexity. The Gunning Fog Index was developed by Robert Gunning in 1952 and remains widely used in business writing, journalism education and corporate communication assessments. Our readability checker calculates your Gunning Fog score alongside five other metrics." } },
      { "@type": "Question", name: "Which readability formula should I use for my content?", acceptedAnswer: { "@type": "Answer", text: "For most content creators the Flesch Reading Ease score is the best primary metric because it ranges from 0 to 100 making it immediately intuitive — higher is easier. Use Flesch-Kincaid Grade Level as your secondary check especially if you know your target audience demographic and education level. The Gunning Fog Index is most valuable for business writing and journalism where complex word usage is a specific concern. The SMOG Index is most accurate for medical and health content but requires 30 or more sentences for reliable results. Our readability checker calculates all six formulas simultaneously so you get a complete picture without choosing just one." } },
      { "@type": "Question", name: "What does SMOG Index measure and when is it most useful?", acceptedAnswer: { "@type": "Answer", text: "The SMOG Index — Simple Measure of Gobbledygook — measures readability by counting polysyllabic words across a sample of sentences and predicts the years of education required to understand a text. The SMOG Index is considered particularly accurate for health and medical writing because it focuses specifically on complex multisyllabic terminology which dominates medical content. It requires a minimum of 30 sentences for statistically reliable results — our readability checker displays a warning when your text has fewer than 30 sentences. For most general content the Flesch Reading Ease score is more practical but SMOG is the gold standard for healthcare and patient-facing medical communication." } },
    ],
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Check Text Readability Online",
    description: "Get your Flesch Reading Ease score and grade level using PickBlend's free readability checker.",
    step: [
      { "@type": "HowToStep", name: "Paste or type your text", text: "Open the readability checker and paste or type your text. Scores update automatically as you write." },
      { "@type": "HowToStep", name: "Review your Flesch Reading Ease score", text: "A score of 60–70 is ideal for most web content. Scores below 30 indicate very complex text; scores above 80 indicate simple, accessible writing." },
      { "@type": "HowToStep", name: "Revise to improve your score", text: "Shorten sentences, replace complex words with simpler alternatives, and break long paragraphs into smaller chunks to raise your readability score." },
    ],
    tool: { "@type": "HowToTool", name: "PickBlend Readability Score Checker", url: `${BASE_URL}/tools/readability-score` },
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

export default function ReadabilityScorePage() {
  return (
    <>
      <PageJsonLd />
      <main>
        <div className="px-4 pt-14 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-text-secondary">
              <Link href="/" className="transition-colors hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/tools" className="transition-colors hover:text-primary">Tools</Link>
              <span>/</span>
              <span className="text-text">Readability Score</span>
            </nav>
            <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
              Free Readability Score Checker — Flesch Reading Ease &amp; Grade Level
            </h1>
            <ReadabilityScore />
          </div>
        </div>
      </main>
      <section>
        <ReadabilityScoreIntro />
      </section>
      <article>
        <ReadabilityScoreSEO />
      </article>
    </>
  );
}
