import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Free Online Writing Tools — Word Counter & More | PickBlend",
    template: "%s | PickBlend",
  },
  description:
    "Free online writing tools by PickBlend. Count words, estimate reading time, analyze keyword density — all free, instant, and 100% private. No sign-up required.",
  authors: [{ name: "PickBlend" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "PickBlend",
    title: "Free Online Writing Tools | PickBlend",
    description:
      "Free word counter, reading time calculator and more. No ads blocking your view. 100% private — your text never leaves your browser.",
    images: [
      {
        url: `${BASE_URL}/og/home.png`,
        width: 1200,
        height: 630,
        alt: "PickBlend - Free Online Writing Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Writing Tools | PickBlend",
    description:
      "Free word counter, reading time calculator and more. No ads blocking your view. 100% private — your text never leaves your browser.",
    images: [`${BASE_URL}/og/home.png`],
  },
  alternates: {
    canonical: BASE_URL,
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

function GlobalJsonLd() {
  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PickBlend",
    url: BASE_URL,
    description:
      "Free online writing tools — word counter, reading time calculator, and more.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/tools/{search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PickBlend",
    url: BASE_URL,
    description:
      "Free online writing and SEO tools for writers, students, bloggers, and content creators.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <GlobalJsonLd />
      </head>
      <body
        className="flex min-h-screen flex-col text-text antialiased"
        suppressHydrationWarning
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <footer className="border-t border-border bg-white/60 py-10 text-sm text-text-secondary backdrop-blur-sm">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {/* Tools row */}
            <div className="mb-4">
              <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-widest text-text-secondary/50">
                Tools
              </p>
              <nav
                aria-label="Footer tools navigation"
                className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
              >
                <Link href="/tools/word-counter" className="underline-offset-2 transition-colors hover:text-text hover:underline">Word Counter</Link>
                <Link href="/tools/reading-time-calculator" className="underline-offset-2 transition-colors hover:text-text hover:underline">Reading Time</Link>
                <Link href="/tools/character-counter" className="underline-offset-2 transition-colors hover:text-text hover:underline">Character Counter</Link>
                <Link href="/tools/case-converter" className="underline-offset-2 transition-colors hover:text-text hover:underline">Case Converter</Link>
                <Link href="/tools/lorem-ipsum-generator" className="underline-offset-2 transition-colors hover:text-text hover:underline">Lorem Ipsum</Link>
              </nav>
            </div>

            {/* Site links row */}
            <div className="mb-4">
              <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-widest text-text-secondary/50">
                Company
              </p>
              <nav
                aria-label="Footer site navigation"
                className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
              >
                <Link href="/" className="underline-offset-2 transition-colors hover:text-text hover:underline">Home</Link>
                <Link href="/tools" className="underline-offset-2 transition-colors hover:text-text hover:underline">All Tools</Link>
                <Link href="/blog" className="underline-offset-2 transition-colors hover:text-text hover:underline">Blog</Link>
                <Link href="/about" className="underline-offset-2 transition-colors hover:text-text hover:underline">About</Link>
                <Link href="/contact" className="underline-offset-2 transition-colors hover:text-text hover:underline">Contact</Link>
              </nav>
            </div>

            {/* Legal row */}
            <div className="mb-5">
              <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-widest text-text-secondary/50">
                Legal
              </p>
              <nav
                aria-label="Footer legal navigation"
                className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
              >
                <Link href="/privacy-policy" className="underline-offset-2 transition-colors hover:text-text hover:underline">Privacy Policy</Link>
                <Link href="/terms-of-service" className="underline-offset-2 transition-colors hover:text-text hover:underline">Terms of Service</Link>
                <Link href="/disclaimer" className="underline-offset-2 transition-colors hover:text-text hover:underline">Disclaimer</Link>
              </nav>
            </div>

            <p className="text-center text-xs text-text-secondary/60">
              &copy; {new Date().getFullYear()} PickBlend. All rights reserved. Free writing tools — 100% private, no sign-up required.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
