import type { Metadata } from "next";
import { Construction } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about ToolKit — the free suite of online writing and SEO tools built for writers, students, and marketers.",
  keywords: [
    "about ToolKit",
    "free writing tools",
    "online SEO tools",
    "writing utility suite",
  ],
  openGraph: {
    title: "About Us — ToolKit",
    description:
      "Learn more about ToolKit — free online writing and SEO tools for writers, students, and marketers.",
    url: "https://www.yourtoolkit.com/about",
  },
  alternates: {
    canonical: "https://www.yourtoolkit.com/about",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-50">
          <Construction className="h-10 w-10 text-accent-orange" strokeWidth={1.8} />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-text">
          About Us
        </h1>
        <div className="mt-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <p className="text-lg font-medium text-primary">Under Development</p>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            We&apos;re working hard to bring you this page. Check back soon for
            the full story behind ToolKit and the team that builds it.
          </p>
        </div>
      </div>
    </main>
  );
}
