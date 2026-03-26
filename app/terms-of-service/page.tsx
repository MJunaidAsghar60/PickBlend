import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "Terms of Service | PickBlend",
  description:
    "Terms of Service for PickBlend. Free writing tools provided as-is. Read our terms before using our services.",
  alternates: {
    canonical: `${BASE_URL}/terms-of-service`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Terms of Service | PickBlend",
    description:
      "Terms of Service for PickBlend. Free writing tools provided as-is. Read our terms before using our services.",
    url: `${BASE_URL}/terms-of-service`,
    images: [{ url: `${BASE_URL}/og/home.png`, width: 1200, height: 630, alt: "PickBlend Terms of Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | PickBlend",
    description:
      "Terms of Service for PickBlend. Free writing tools provided as-is. Read our terms before using our services.",
    images: [`${BASE_URL}/og/home.png`],
  },
  robots: { index: true, follow: true },
};

function PageJsonLd() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Terms of Service", item: `${BASE_URL}/terms-of-service` },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
  );
}

export default function TermsOfServicePage() {
  return (
    <>
      <PageJsonLd />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-text-secondary">
          <Link href="/" className="transition-colors hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-text">Terms of Service</span>
        </nav>

        <article>
          <header className="mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-3 text-text-secondary">
              <strong>Effective date:</strong> March 25, 2026
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              Last updated: March 25, 2026
            </p>
          </header>

          <div className="space-y-10">
            {/* 1 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">1. Acceptance of Terms</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  By accessing or using PickBlend (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) at{" "}
                  <strong className="text-text">pickblend.com</strong>, you agree to be bound by these Terms of
                  Service. If you do not agree to these terms, please do not use our services.
                </p>
                <p>
                  These terms apply to all visitors, users, and others who access or use our services.
                </p>
              </div>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">2. Description of Service</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  PickBlend provides free, browser-based online writing tools including:
                </p>
                <ul className="ml-4 space-y-2 list-disc">
                  <li>Word Counter — counts words, characters, sentences, and paragraphs</li>
                  <li>Reading Time Calculator — estimates reading and speaking time</li>
                  <li>Character Counter — counts characters with and without spaces</li>
                  <li>Text Case Converter — converts text between multiple case formats</li>
                  <li>Lorem Ipsum Generator — generates placeholder text</li>
                  <li>Additional tools as they become available</li>
                </ul>
                <p>
                  All tools are provided <strong className="text-text">completely free of charge</strong> with no
                  registration or account required.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">3. Acceptable Use</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>You may use our tools for:</p>
                <ul className="ml-4 space-y-2 list-disc">
                  <li>Personal use — writing, editing, and productivity</li>
                  <li>Educational purposes — student assignments, research</li>
                  <li>Commercial purposes — professional writing, content creation</li>
                </ul>
                <p>You may <strong className="text-text">not</strong>:</p>
                <ul className="ml-4 space-y-2 list-disc">
                  <li>Attempt to reverse engineer, copy, or reproduce our platform&rsquo;s code or design without permission</li>
                  <li>Use automated bots, scrapers, or crawlers to access our tools at scale</li>
                  <li>Attempt to disrupt, overload, or compromise our servers or infrastructure</li>
                  <li>Use our services in any way that violates applicable laws or regulations</li>
                </ul>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">4. Intellectual Property</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  PickBlend&rsquo;s code, design, brand identity, and original content are our intellectual property
                  and are protected by applicable copyright and trademark laws.
                </p>
                <p>
                  <strong className="text-text">Your content is yours.</strong> The text you enter into our tools
                  remains entirely your property. We have no claim over any content you create, paste, or generate
                  using our tools.
                </p>
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">5. Disclaimer of Warranties</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  Our tools are provided <strong className="text-text">&ldquo;as is&rdquo;</strong> and
                  &ldquo;as available&rdquo; without warranties of any kind, either express or implied.
                </p>
                <ul className="ml-4 space-y-2 list-disc">
                  <li>We do not guarantee 100% uptime or uninterrupted access to our services</li>
                  <li>We do not guarantee that results are always perfectly accurate for all content types</li>
                  <li>We are not responsible for decisions made based on tool outputs</li>
                </ul>
                <p>
                  For critical work (academic submissions, professional publishing, legal documents), we recommend
                  verifying results independently.
                </p>
              </div>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">6. Limitation of Liability</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  To the maximum extent permitted by applicable law, PickBlend shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages arising from your use of our services.
                </p>
                <p>
                  As our tools are provided entirely free of charge, our maximum aggregate liability to you for any
                  claims arising under these terms is <strong className="text-text">$0.00 USD</strong>.
                </p>
              </div>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">7. Third-Party Advertising</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  Our site displays advertisements served by{" "}
                  <strong className="text-text">Google AdSense</strong>. These advertisements are selected and
                  served by Google, not by PickBlend.
                </p>
                <p>
                  We are not responsible for the content of any third-party advertisements displayed on our site.
                  The appearance of advertisements does not constitute endorsement by PickBlend.
                </p>
              </div>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">8. Changes to Terms</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  We reserve the right to modify these Terms of Service at any time. Changes will be posted on this
                  page with an updated effective date. Your continued use of PickBlend after any changes constitutes
                  your acceptance of the new terms.
                </p>
              </div>
            </section>

            {/* 9 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">9. Contact</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  If you have any questions about these Terms of Service, please{" "}
                  <Link href="/contact" className="text-primary underline underline-offset-2 hover:text-primary-dark">
                    contact us
                  </Link>
                  .
                </p>
              </div>
            </section>
          </div>

          {/* Footer note */}
          <div className="mt-12 rounded-2xl border border-border bg-surface-alt p-6">
            <p className="text-sm text-text-secondary">
              By using PickBlend, you agree to these terms. They&rsquo;re simple: use our tools fairly, your content
              is yours, and our tools are free. Questions?{" "}
              <Link href="/contact" className="text-primary underline underline-offset-2 hover:text-primary-dark">
                Contact us
              </Link>
              .
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
