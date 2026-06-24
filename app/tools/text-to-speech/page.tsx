import type { Metadata } from "next";
import TextToSpeech from "@/components/TextToSpeech";
import TextToSpeechSEO from "@/components/TextToSpeechSEO";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "Free Text to Speech — Convert Text to Audio Online",
  description:
    "Free text to speech tool — convert any text to natural speech instantly. Multiple voices, adjustable speed and pitch. No sign-up, 100% private, works in your browser.",
  keywords: [
    "text to speech",
    "text to speech free",
    "free text to speech",
    "text to speech online",
    "tts",
    "text to voice",
    "read text aloud",
    "text to speech no sign up",
  ],
  authors: [{ name: "PickBlend" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Free Text to Speech — Convert Text to Audio Online | PickBlend",
    description:
      "Convert any text to natural speech instantly using your browser's built-in speech engine. Multiple voices, adjustable speed and pitch. 100% free and private.",
    url: `${BASE_URL}/tools/text-to-speech`,
    images: [
      {
        url: `${BASE_URL}/og/home.png`,
        width: 1200,
        height: 630,
        alt: "Free Text to Speech Tool by PickBlend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Text to Speech — Convert Text to Audio Online | PickBlend",
    description:
      "Convert any text to natural speech instantly. Multiple voices, adjustable speed and pitch. 100% free and private.",
    images: [`${BASE_URL}/og/home.png`],
  },
  alternates: {
    canonical: `${BASE_URL}/tools/text-to-speech`,
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
      { "@type": "ListItem", position: 3, name: "Text to Speech", item: `${BASE_URL}/tools/text-to-speech` },
    ],
  };

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Text to Speech",
    url: `${BASE_URL}/tools/text-to-speech`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript and Web Speech API support",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free text to speech tool that converts any text to natural speech using your browser's built-in speech engine. Multiple voices, adjustable speed, pitch and volume. 100% private.",
    featureList: [
      "Convert text to speech instantly",
      "Multiple system voices and languages",
      "Adjustable speed (0.5x to 2x)",
      "Adjustable pitch and volume",
      "Play, pause, resume, stop controls",
      "Auto-save text to browser",
      "100% private — no server calls",
      "Works offline with local voices",
    ],
    creator: { "@type": "Organization", name: "PickBlend", url: BASE_URL },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this text to speech tool really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, completely free with no sign-up, no character limits and no daily caps. Our text to speech tool uses your browser's built-in speech engine, which means there are no API costs to pass on to you. You can convert unlimited text to speech as often as you like, entirely free, forever. No credit card, no account, no hidden limits.",
        },
      },
      {
        "@type": "Question",
        name: "Does my text get sent to a server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. This text to speech tool runs 100% in your browser using the native Web Speech API. Your text never leaves your device and is never sent to any server. This makes it one of the most private text to speech options available — ideal for confidential documents, personal notes or any sensitive content you want to hear read aloud.",
        },
      },
      {
        "@type": "Question",
        name: "Can I download the audio as an MP3?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The browser's built-in speech engine plays audio directly but does not allow direct MP3 export due to browser security restrictions. To save the audio you can use your device's screen recorder or a system audio capture tool while the text is being read aloud. The speech itself is completely free and unlimited.",
        },
      },
      {
        "@type": "Question",
        name: "Why are there different voices available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The voices available depend on your operating system and browser. Windows, macOS, Android and iOS each include their own set of system voices in various languages and accents. Chrome and Edge typically offer the widest selection. Our tool automatically detects and lists all voices installed on your device so you can pick the one that sounds best.",
        },
      },
      {
        "@type": "Question",
        name: "Does text to speech work offline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Once the page has loaded, the text to speech tool works offline using your device's local voices. Some higher-quality voices may require an internet connection to stream from your operating system, but the basic system voices work entirely offline. This makes our tool reliable even with no internet connection.",
        },
      },
      {
        "@type": "Question",
        name: "What languages does the text to speech tool support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our text to speech tool supports every language installed on your device — typically including English, Spanish, French, German, Italian, Portuguese, Hindi, Arabic, Chinese, Japanese and many more. The exact languages depend on your operating system. The voice selector groups available voices by language so you can easily find the right one.",
        },
      },
    ],
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use the Free Text to Speech Tool",
    description: "Convert any text to natural speech using PickBlend's free browser-based text to speech tool.",
    step: [
      { "@type": "HowToStep", name: "Enter your text", text: "Type or paste any text into the editor area. Your text is automatically saved to your browser." },
      { "@type": "HowToStep", name: "Choose a voice", text: "Select from the available system voices. English voices appear first, followed by other languages." },
      { "@type": "HowToStep", name: "Adjust settings", text: "Use the sliders to set speed (0.5x–2x), pitch, and volume to your preference." },
      { "@type": "HowToStep", name: "Click Play", text: "Click the Play button to hear your text read aloud. Use Pause, Resume or Stop to control playback." },
    ],
    tool: { "@type": "HowToTool", name: "PickBlend Text to Speech", url: `${BASE_URL}/tools/text-to-speech` },
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

export default function TextToSpeechPage() {
  return (
    <>
      <PageJsonLd />
      <main>
        <TextToSpeech />
      </main>
      <article>
        <TextToSpeechSEO />
      </article>
    </>
  );
}
