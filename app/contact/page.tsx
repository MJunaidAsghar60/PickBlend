import type { Metadata } from "next";
import { Construction } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the ToolKit team. We'd love to hear your feedback and suggestions for our free online writing tools.",
  keywords: [
    "contact ToolKit",
    "feedback",
    "writing tools support",
    "get in touch",
  ],
  openGraph: {
    title: "Contact — ToolKit",
    description:
      "Get in touch with the ToolKit team. We'd love to hear your feedback and suggestions.",
    url: "https://www.yourtoolkit.com/contact",
  },
  alternates: {
    canonical: "https://www.yourtoolkit.com/contact",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50">
          <Construction className="h-10 w-10 text-primary" strokeWidth={1.8} />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-text">
          Contact Us
        </h1>
        <div className="mt-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <p className="text-lg font-medium text-primary">Under Development</p>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            We&apos;re building a proper contact form. In the meantime, check
            back soon — we&apos;ll have everything ready for you shortly.
          </p>
        </div>
      </div>
    </main>
  );
}
