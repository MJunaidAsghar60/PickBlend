import type { Metadata } from "next";
import { Construction } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact PickBlend — Get in Touch",
  description:
    "Have a question or suggestion for PickBlend? We'd love to hear from you. Contact our team about our free writing tools.",
  openGraph: {
    title: "Contact PickBlend — Get in Touch",
    description:
      "Have a question or suggestion for PickBlend? We'd love to hear from you. Contact our team about our free writing tools.",
    url: "https://www.pickblend.com/contact",
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
  },
  twitter: {
    card: "summary_large_image",
  },
  authors: [{ name: "PickBlend" }],
  alternates: {
    canonical: "https://www.pickblend.com/contact",
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

function ContactPageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact PickBlend",
    url: "https://www.pickblend.com/contact",
    description:
      "Contact the PickBlend team with questions or suggestions about our free writing tools.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ContactPage() {
  return (
    <>
      <ContactPageJsonLd />
      <main className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
              Contact PickBlend
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              We&apos;d love to hear from you
            </p>
          </header>

          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <div className="space-y-6 text-text-secondary">
              <p className="text-lg">
                Have a question, suggestion, or feedback about our free writing tools? We&apos;re here to help.
              </p>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-text">Get in Touch</h2>
                <p>
                  We&apos;re currently setting up our contact form. In the meantime, if you&apos;d like to reach out about:
                </p>
                <ul className="list-inside list-disc space-y-2 pl-4">
                  <li>Bug reports or technical issues</li>
                  <li>Feature requests for new tools</li>
                  <li>Suggestions for improving existing tools</li>
                  <li>Partnership or collaboration opportunities</li>
                  <li>General questions about PickBlend</li>
                </ul>
                <p className="mt-4">
                  Check back soon — we&apos;re building a proper contact form that maintains our privacy-first approach. No tracking, no third-party services, just direct communication.
                </p>
              </div>

              <div className="mt-8 rounded-xl border border-border bg-surface-alt p-6">
                <h3 className="font-semibold text-text">Quick Support</h3>
                <p className="mt-2 text-sm">
                  For immediate help with our tools, check out the FAQ sections on each tool page. Most common questions are answered there with detailed explanations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
