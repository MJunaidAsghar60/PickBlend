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
      { "@type": "Question", name: "How do I repeat text multiple times online for free?", acceptedAnswer: { "@type": "Answer", text: "Repeating text multiple times online is simple with our free text repeater tool. Paste or type any text into the input field, set the number of repetitions between 1 and 100, choose your preferred separator and click Generate. Your repeated text appears instantly in the output area ready to copy with one click. The tool supports multiple separator options including new line, comma, space, pipe and dash as well as a custom separator field for any character or string you need between repetitions. No sign-up or installation required — the text repeater works instantly in any browser." } },
      { "@type": "Question", name: "What are text repeaters used for in development?", acceptedAnswer: { "@type": "Answer", text: "Text repeaters are used extensively in software development and quality assurance testing. Developers use repeated text to populate database fields with realistic-length content for performance testing, stress test input validation by generating content at or near character limits, create fixture data for unit tests and fill UI components during frontend development before real API data is available. QA engineers use text repeaters to test how applications handle maximum-length inputs and repetitive data patterns. Our text repeater supports up to 100 repetitions with custom separators making it suitable for most development and testing scenarios." } },
      { "@type": "Question", name: "Can I add a prefix and suffix to repeated text?", acceptedAnswer: { "@type": "Answer", text: "Yes — our text repeater includes both prefix and suffix fields that let you add custom text before and after every individual repetition. The prefix appears at the start of each repeated instance and the suffix appears at the end before the separator. For example with the text item, prefix [ and suffix ] you get [item][item][item]. This feature is useful for generating array literals, HTML element lists, JSON data structures and any other format that requires wrapper characters around each repeated element. The prefix and suffix work alongside the numbering option and all separator choices." } },
      { "@type": "Question", name: "How many times can I repeat text with this tool?", acceptedAnswer: { "@type": "Answer", text: "Our text repeater supports between 1 and 100 repetitions per generation. For most practical use cases including design mockups, test data generation, content creation and development testing 100 repetitions is more than sufficient. The word count and character count displayed below the output update automatically so you can see exactly how much text 100 repetitions of your input produces. If you need more than 100 repetitions for large-scale data generation a simple programming loop in Python or JavaScript would be more efficient for that specific use case." } },
      { "@type": "Question", name: "Can I number each repeated line automatically?", acceptedAnswer: { "@type": "Answer", text: "Yes — enable the numbering checkbox before generating and each repetition is automatically prefixed with its sequence number in the format 1. text, 2. text, 3. text and so on. Auto numbering works alongside all separator options and the custom prefix and suffix fields. The sequence numbers update correctly when you change the repetition count so 10. text through 1. text always reflects the actual position. Numbered repetitions are particularly useful for creating ordered test cases, numbered placeholder lists, sequentially labelled content blocks and structured data with positional identifiers." } },
      { "@type": "Question", name: "What separators can I use between repeated text?", acceptedAnswer: { "@type": "Answer", text: "Our text repeater offers six separator options for controlling how repeated text segments are joined together. New line places each repetition on its own line making it ideal for lists and structured content. Comma and space separates with a comma producing comma-separated values. Space joins with a single space for inline repetition. Pipe separates with a pipe character for pipe-delimited data formats. Dash joins with a dash for dash-separated content. The custom separator option lets you type any character string as your separator — useful for tab-separated values, semicolons, HTML tags or any other format your specific use case requires." } },
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
