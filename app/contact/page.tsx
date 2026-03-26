import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact PickBlend — Get in Touch",
  description:
    "Contact PickBlend. Send us your questions, bug reports, feature requests or feedback about our free writing tools.",
  openGraph: {
    title: "Contact PickBlend — Get in Touch",
    description:
      "Contact PickBlend. Send us your questions, bug reports, feature requests or feedback about our free writing tools.",
    url: "https://pickblend.com/contact",
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
  },
  twitter: {
    card: "summary_large_image",
  },
  authors: [{ name: "PickBlend" }],
  alternates: {
    canonical: "https://pickblend.com/contact",
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
    url: "https://pickblend.com/contact",
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
        <div className="mx-auto max-w-5xl">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
              Contact PickBlend
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              We&apos;d love to hear from you
            </p>
          </header>

          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-12 lg:items-start">
            {/* Left column — info */}
            <div className="space-y-6 text-text-secondary">
              <p className="text-base leading-relaxed">
                Have a question, bug to report, or idea for a new tool? Send us a message and we&apos;ll get back to you.
              </p>

              <div>
                <h2 className="mb-3 text-base font-semibold text-text">What you can reach us about</h2>
                <ul className="space-y-2 text-sm">
                  {[
                    "Bug reports or technical issues",
                    "Feature requests for new tools",
                    "Suggestions for improving existing tools",
                    "General questions about PickBlend",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <svg className="h-2.5 w-2.5" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-surface-alt p-4 text-sm space-y-2">
                <p>
                  <span className="font-medium text-text">Response time:</span> We typically respond within 1–2 business days.
                </p>
                <p>
                  Your message is sent directly to our team. We never share your email with third parties.
                </p>
              </div>
            </div>

            {/* Right column — form */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
