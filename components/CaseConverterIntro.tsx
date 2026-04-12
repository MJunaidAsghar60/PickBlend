import Link from "next/link";

export default function CaseConverterIntro() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-bold text-text">
          About This Text Case Converter
        </h2>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This text case converter is built for developers, writers, and content creators who need
          to switch between naming conventions and text formats quickly. Paste any text, click a
          format button, and the entire block transforms instantly — no manual editing, no
          find-and-replace, no scripts. Whether you are converting variable names from camelCase to
          snake_case, making a headline title case, or shouting something in UPPERCASE, the
          conversion happens with a single click.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          The ten supported formats cover every common use case in writing and development.
          UPPERCASE and lowercase handle the basics. Title Case capitalises every major word for
          headlines and book titles. Sentence case applies standard capitalisation to prose. For
          developers, camelCase and PascalCase handle JavaScript and TypeScript conventions,
          snake_case covers Python variables and database columns, kebab-case is the standard for
          CSS classes and URL slugs, CONSTANT_CASE handles environment variable naming, and
          alternating case produces the distinctive mixed style. The result is copied to your
          clipboard with one more click, ready to paste directly into your code editor or CMS.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          Developers moving between languages deal with this problem constantly. A variable name
          written in camelCase for a JavaScript function needs to become snake_case for the Python
          backend or kebab-case for the HTML attribute. Doing that manually across hundreds of
          identifiers wastes time and introduces typos. This camelCase converter and snake_case
          converter handles the full conversion in a single operation regardless of how much text
          you paste.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This online case converter handles UPPERCASE, lowercase, Title Case, Sentence case,
          camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, and alternating case — all
          in one tool with live word and character counts shown as you work. Text is auto-saved
          locally so you never lose a draft mid-conversion.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          After converting your text, check its length against platform limits using our{" "}
          <Link
            href="/tools/character-counter"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Character Counter
          </Link>
          , which tracks ten social and SEO character limits in real time. For full text analysis
          including reading time and keyword density, the{" "}
          <Link
            href="/tools/word-counter"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Word Counter
          </Link>{" "}
          gives you every metric alongside your transformed content.
        </p>

        <p className="text-sm leading-relaxed text-text-secondary">
          Use this free text case converter to format headlines, standardise variable names,
          generate slugs, switch naming conventions between programming languages, and transform any
          block of text into the exact case format you need.
        </p>
      </div>
    </div>
  );
}
