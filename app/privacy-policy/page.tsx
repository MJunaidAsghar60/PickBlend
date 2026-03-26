import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://pickblend.com";

export const metadata: Metadata = {
  title: "Privacy Policy | PickBlend",
  description:
    "PickBlend's privacy policy. Learn how we handle your data — spoiler: we don't collect any. All text processing happens locally in your browser.",
  alternates: {
    canonical: `${BASE_URL}/privacy-policy`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Privacy Policy | PickBlend",
    description:
      "PickBlend's privacy policy. Learn how we handle your data — spoiler: we don't collect any. All text processing happens locally in your browser.",
    url: `${BASE_URL}/privacy-policy`,
    images: [{ url: `${BASE_URL}/og/home.png`, width: 1200, height: 630, alt: "PickBlend Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | PickBlend",
    description:
      "PickBlend's privacy policy. Learn how we handle your data — spoiler: we don't collect any. All text processing happens locally in your browser.",
    images: [`${BASE_URL}/og/home.png`],
  },
  robots: { index: true, follow: true },
};

function PageJsonLd() {
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: `${BASE_URL}/privacy-policy`,
    description: "Privacy policy for PickBlend writing tools",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${BASE_URL}/privacy-policy` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageJsonLd />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-text-secondary">
          <Link href="/" className="transition-colors hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-text">Privacy Policy</span>
        </nav>

        <article className="prose-custom">
          <header className="mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
              Privacy Policy
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
              <h2 className="mb-3 text-xl font-bold text-text">1. Introduction</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  PickBlend (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) operates{" "}
                  <strong className="text-text">pickblend.com</strong>, a free online writing tools website.
                  This Privacy Policy explains how we handle information when you use our services.
                </p>
                <p>
                  We are committed to protecting your privacy. The short version: <strong className="text-text">we don&rsquo;t collect your text</strong>.
                  Everything you type into our tools stays on your device — it never touches our servers.
                </p>
              </div>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">2. Information We Do NOT Collect</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  We want to be crystal clear about what we do <em>not</em> do:
                </p>
                <ul className="ml-4 space-y-2 list-disc">
                  <li>
                    <strong className="text-text">We do not collect, store, or transmit any text</strong> you enter
                    into our tools. All text processing happens entirely locally in your browser.
                  </li>
                  <li>
                    We do not use <strong className="text-text">cookies for tracking</strong> your behaviour across the web.
                  </li>
                  <li>
                    We do not require <strong className="text-text">account creation or login</strong> of any kind.
                  </li>
                  <li>
                    We do not sell, rent, or share personal data with third parties for marketing purposes.
                  </li>
                </ul>
                <p>
                  Your text is stored in your own browser&rsquo;s localStorage (so it persists across sessions on
                  your device) but is never transmitted to any server.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">3. Analytics Data</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  We may use privacy-friendly analytics tools to understand how visitors use our site. The data
                  collected may include:
                </p>
                <ul className="ml-4 space-y-2 list-disc">
                  <li>Page views and session duration</li>
                  <li>Country and region (not precise location)</li>
                  <li>Device type and browser (e.g. &ldquo;mobile Chrome&rdquo;)</li>
                  <li>Referring website</li>
                </ul>
                <p>
                  <strong className="text-text">No personally identifiable information</strong> is collected through
                  analytics. IP addresses are anonymised before storage and are never shared.
                </p>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">4. Google AdSense &amp; Advertising</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  We use <strong className="text-text">Google AdSense</strong> to display advertisements on our site.
                  Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to our site
                  and other sites on the internet.
                </p>
                <ul className="ml-4 space-y-2 list-disc">
                  <li>
                    Google&rsquo;s use of advertising cookies enables it and its partners to serve ads to you based on
                    your visit to PickBlend and/or other sites on the internet.
                  </li>
                  <li>
                    You may opt out of personalised advertising by visiting{" "}
                    <a
                      href="https://www.google.com/settings/ads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:text-primary-dark"
                    >
                      Google Ad Settings
                    </a>
                    .
                  </li>
                  <li>
                    For more information, review{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:text-primary-dark"
                    >
                      Google&rsquo;s Privacy Policy
                    </a>
                    .
                  </li>
                </ul>
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">5. Third-Party Services</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  We use the following third-party services, each with their own privacy policies:
                </p>
                <ul className="ml-4 space-y-2 list-disc">
                  <li>
                    <strong className="text-text">Google AdSense</strong> — advertising platform. Their privacy
                    policy governs how they use data collected via their ad cookies.
                  </li>
                  <li>
                    <strong className="text-text">Google Analytics</strong> — anonymous usage statistics (if
                    enabled). Data is aggregated and anonymised.
                  </li>
                </ul>
                <p>
                  We encourage you to review the privacy policies of these third-party services directly.
                </p>
              </div>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">6. Children&rsquo;s Privacy</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  Our services are not directed to children under the age of 13. We do not knowingly collect
                  personal data from children. If you are a parent or guardian and believe your child has provided
                  us with personal information, please contact us and we will take steps to remove such information.
                </p>
              </div>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">7. Your Rights</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <ul className="ml-4 space-y-2 list-disc">
                  <li>
                    <strong className="text-text">Right to know</strong> — you have the right to know what personal
                    data we hold. The answer is: we hold none.
                  </li>
                  <li>
                    <strong className="text-text">Right to opt out of personalised ads</strong> — you can manage
                    Google advertising preferences via{" "}
                    <a
                      href="https://www.google.com/settings/ads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:text-primary-dark"
                    >
                      Google Ad Settings
                    </a>
                    .
                  </li>
                  <li>
                    <strong className="text-text">Right to contact us</strong> — if you have any privacy questions,
                    please reach out via our{" "}
                    <Link href="/contact" className="text-primary underline underline-offset-2 hover:text-primary-dark">
                      contact page
                    </Link>
                    .
                  </li>
                </ul>
              </div>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">8. Changes to This Policy</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time. When we do, we will post the revised policy
                  on this page with an updated effective date. We encourage you to review this page periodically.
                  Continued use of PickBlend after changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </section>

            {/* 9 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">9. Contact Us</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  If you have any questions or concerns about this Privacy Policy, please{" "}
                  <Link href="/contact" className="text-primary underline underline-offset-2 hover:text-primary-dark">
                    contact us
                  </Link>
                  . We will respond to all privacy enquiries promptly.
                </p>
              </div>
            </section>
          </div>

          {/* Footer note */}
          <div className="mt-12 rounded-2xl border border-border bg-surface-alt p-6">
            <p className="text-sm text-text-secondary">
              <strong className="text-text">TL;DR:</strong> We don&rsquo;t collect your text. We don&rsquo;t sell your data.
              We show Google ads. That&rsquo;s it. Questions?{" "}
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
