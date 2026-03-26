import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://www.pickblend.com";

export const metadata: Metadata = {
  title: "Disclaimer | PickBlend",
  description:
    "Disclaimer for PickBlend free writing tools. Our tools are provided for informational purposes.",
  alternates: {
    canonical: `${BASE_URL}/disclaimer`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PickBlend",
    title: "Disclaimer | PickBlend",
    description:
      "Disclaimer for PickBlend free writing tools. Our tools are provided for informational purposes.",
    url: `${BASE_URL}/disclaimer`,
    images: [{ url: `${BASE_URL}/og/home.png`, width: 1200, height: 630, alt: "PickBlend Disclaimer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | PickBlend",
    description:
      "Disclaimer for PickBlend free writing tools. Our tools are provided for informational purposes.",
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
      { "@type": "ListItem", position: 2, name: "Disclaimer", item: `${BASE_URL}/disclaimer` },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
  );
}

export default function DisclaimerPage() {
  return (
    <>
      <PageJsonLd />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-text-secondary">
          <Link href="/" className="transition-colors hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-text">Disclaimer</span>
        </nav>

        <article>
          <header className="mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
              Disclaimer
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
              <h2 className="mb-3 text-xl font-bold text-text">1. General Disclaimer</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  The tools provided by PickBlend at <strong className="text-text">pickblend.com</strong> are
                  intended for <strong className="text-text">informational and productivity purposes only</strong>.
                  Results produced by our tools are estimates or outputs based on standard algorithms and averages.
                </p>
                <p>
                  While we strive for accuracy, PickBlend makes no representations or warranties of any kind,
                  express or implied, about the completeness, accuracy, or reliability of any tool results.
                </p>
              </div>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">2. Reading &amp; Speaking Time Accuracy</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  Reading time estimates are calculated using an average adult silent reading speed of approximately
                  <strong className="text-text"> 275 words per minute (wpm)</strong>, which aligns with published
                  research on adult reading rates.
                </p>
                <p>
                  Please note:
                </p>
                <ul className="ml-4 space-y-2 list-disc">
                  <li>Actual reading times vary significantly between individuals</li>
                  <li>Technical, complex, or unfamiliar content typically takes longer to read</li>
                  <li>These estimates are not suitable for mission-critical timing requirements without independent testing</li>
                  <li>Speaking time estimates are based on a 130 wpm conversational pace</li>
                </ul>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">3. Word Count Accuracy</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  Our word counter is highly accurate for standard English prose and most common writing formats.
                  However, results may vary slightly for:
                </p>
                <ul className="ml-4 space-y-2 list-disc">
                  <li>Text containing abbreviations, contractions, or hyphenated words</li>
                  <li>Source code, programming languages, or technical markup</li>
                  <li>Non-Latin scripts or languages with different word boundary conventions</li>
                  <li>Text with special characters, emoji, or unusual formatting</li>
                </ul>
                <p>
                  For standard English content, accuracy is excellent. For edge cases described above, results
                  should be treated as approximate.
                </p>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">4. SEO &amp; Keyword Density</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  Keyword density figures displayed in our tools are <strong className="text-text">indicative
                  only</strong>. They represent a mathematical ratio of keyword occurrences to total words.
                </p>
                <ul className="ml-4 space-y-2 list-disc">
                  <li>Keyword density does not directly predict or guarantee search engine rankings</li>
                  <li>SEO best practices evolve over time; our tools reflect general guidelines, not guarantees</li>
                  <li>We recommend using keyword density as one of many signals in content optimisation</li>
                </ul>
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">5. External Links</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  PickBlend may contain links to external websites and resources for reference and convenience.
                  These links do not constitute endorsement of those sites or their content.
                </p>
                <p>
                  We are not responsible for the content, accuracy, or availability of any external websites linked
                  from our site. Visiting external links is at your own discretion and risk.
                </p>
              </div>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">6. Advertising</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  Our site contains advertisements served by{" "}
                  <strong className="text-text">Google AdSense</strong>. These advertisements are selected and
                  delivered by Google&rsquo;s advertising platform.
                </p>
                <p>
                  The appearance of any advertisement on PickBlend does not constitute endorsement of the
                  advertised product, service, or organisation by PickBlend. We are not responsible for the
                  accuracy or quality of advertised content.
                </p>
              </div>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-text">7. Contact</h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  If you have any questions about this disclaimer, please{" "}
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
              Our tools are free, browser-based utilities designed to help — but always apply your own
              judgement for critical work. Questions?{" "}
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
