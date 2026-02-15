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

const BASE_URL = "https://www.yourtoolkit.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ToolKit — Free Online Writing & SEO Tools",
    template: "%s | ToolKit",
  },
  description:
    "Free suite of online writing tools — word counter, character counter, keyword density analyzer, reading time calculator and more. No sign-up required.",
  keywords: [
    "online tools",
    "writing tools",
    "word counter",
    "character counter",
    "SEO tools",
    "free tools",
    "keyword density",
    "reading time calculator",
  ],
  authors: [{ name: "ToolKit" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "ToolKit",
    title: "ToolKit — Free Online Writing & SEO Tools",
    description:
      "Free suite of online writing tools — word counter, character counter, keyword density analyzer, reading time calculator and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolKit — Free Online Writing & SEO Tools",
    description:
      "Free word counter, reading time calculator, keyword density analyzer and more. No sign-up required.",
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
};

function GlobalJsonLd() {
  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ToolKit",
    url: BASE_URL,
    description:
      "Free suite of online writing and SEO tools including word counter, reading time calculator, keyword density analyzer, and more.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/tools/{search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ToolKit",
    url: BASE_URL,
    description:
      "Free online writing and SEO tools for writers, students, bloggers, and marketers.",
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
        <footer className="border-t border-border bg-white/60 py-8 text-center text-sm text-text-secondary backdrop-blur-sm">
          <div className="mx-auto max-w-4xl px-4">
            <p className="mb-3">
              &copy; {new Date().getFullYear()} ToolKit. All rights reserved.
            </p>
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            >
              <Link
                href="/"
                className="underline-offset-2 transition-colors hover:text-text hover:underline"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="underline-offset-2 transition-colors hover:text-text hover:underline"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="underline-offset-2 transition-colors hover:text-text hover:underline"
              >
                Contact
              </Link>
              <Link
                href="/tools/word-counter"
                className="underline-offset-2 transition-colors hover:text-text hover:underline"
              >
                Word Counter
              </Link>
              <Link
                href="/tools/reading-time-calculator"
                className="underline-offset-2 transition-colors hover:text-text hover:underline"
              >
                Reading Time
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
