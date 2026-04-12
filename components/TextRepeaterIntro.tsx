import Link from "next/link";

export default function TextRepeaterIntro() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-bold text-text">
          About This Text Repeater
        </h2>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This text repeater is built for developers, testers, and content creators who need to
          duplicate a word, phrase, or text block a specific number of times without manual copying.
          Enter your text, set how many repetitions you want, choose a separator, and the output
          appears instantly. It handles everything from single repeated words to multi-line template
          blocks, and it copies to the clipboard in one click.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          Developers reach for a text repeater most often during UI testing and data generation.
          Filling a textarea with a long repeated string reveals how a UI handles overflow. Repeating
          a comma-separated word generates quick test data for CSV parsing. Duplicating a JSON key
          many times tests how a parser handles large inputs. For front-end developers and QA
          engineers, having a fast, browser-based way to repeat text online saves time that would
          otherwise go to writing a quick script or manually pasting.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          The separator options give you full control over the output format. A newline separator
          turns each repetition into its own line, which works for lists and stacked UI labels. A
          space separator keeps everything on one run, useful for generating long run-on strings. A
          comma separator produces ready-to-use CSV data. A custom separator lets you use any
          character or string between repetitions, including tab characters for TSV output. The
          prefix and suffix fields wrap each individual repetition, and the auto-numbering option
          appends a sequential number to each instance.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          This online text repeater duplicates any text from 1 to 100 times with separator options
          including space, newline, comma, and custom string, plus optional prefix, suffix, and
          auto-numbering per repetition. Output is generated instantly and one-click copied to your
          clipboard.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          If you need a larger volume of varied placeholder text for layout testing rather than
          repeated identical content, our{" "}
          <Link
            href="/tools/lorem-ipsum-generator"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Lorem Ipsum Generator
          </Link>{" "}
          produces unique dummy text by paragraphs, sentences, or words. To count the words or
          characters in the output you generate, the{" "}
          <Link
            href="/tools/word-counter"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Word Counter
          </Link>{" "}
          gives you a full breakdown including reading time and character count instantly.
        </p>

        <p className="text-sm leading-relaxed text-text-secondary">
          Use this free text repeater to generate test strings, populate UI mockups with duplicate
          content, create formatted lists, and duplicate any text block exactly as many times as
          your project requires.
        </p>
      </div>
    </div>
  );
}
