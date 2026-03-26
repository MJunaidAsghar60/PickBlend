"use client";

import { useState, useEffect, useCallback } from "react";
import {
  FileText,
  Copy,
  Check,
  Eraser,
  RefreshCw,
  Hash,
  Type,
} from "lucide-react";

// ─── Word pool ───────────────────────────────────────────────────────────────
const WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
  "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
  "incididunt", "ut", "labore", "dolore", "magna", "aliqua",
  "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "aliquip",
  "commodo", "consequat", "duis", "aute", "irure", "reprehenderit",
  "voluptate", "velit", "esse", "cillum", "fugiat", "nulla",
  "pariatur", "excepteur", "sint", "occaecat", "cupidatat",
  "proident", "culpa", "officia", "deserunt", "mollit", "anim",
  "est", "laborum", "perspiciatis", "unde", "omnis", "iste",
  "natus", "error", "accusantium", "doloremque", "laudantium",
  "totam", "aperiam", "eaque", "ipsa", "quae", "ab", "illo",
  "inventore", "veritatis", "architecto", "beatae", "vitae",
  "dicta", "explicabo", "aspernatur", "odit", "aut", "fugit",
  "quasi", "blanditiis", "voluptatem", "sequi", "nesciunt",
  "neque", "porro", "quisquam", "dolorem", "temporibus",
  "debitis", "reiciendis", "voluptatibus", "maiores", "alias",
];

function randWord(): string {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function generateSentence(startWithLorem = false): string {
  const length = 8 + Math.floor(Math.random() * 8);
  const words = Array.from({ length }, (_, i) => {
    if (i === 0 && startWithLorem) return "Lorem";
    if (i === 1 && startWithLorem) return "ipsum";
    const w = randWord();
    return i === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w;
  });
  return words.join(" ") + ".";
}

function generateParagraph(isFirst = false): string {
  const sentenceCount = 4 + Math.floor(Math.random() * 4);
  return Array.from({ length: sentenceCount }, (_, i) =>
    generateSentence(i === 0 && isFirst)
  ).join(" ");
}

function generateOutput(
  amount: number,
  type: "paragraphs" | "sentences" | "words",
  startWithLorem: boolean,
  htmlFormat: boolean
): string {
  if (type === "paragraphs") {
    const paras = Array.from({ length: amount }, (_, i) =>
      generateParagraph(i === 0 && startWithLorem)
    );
    return htmlFormat
      ? paras.map((p) => `<p>${p}</p>`).join("\n")
      : paras.join("\n\n");
  }

  if (type === "sentences") {
    const sentences = Array.from({ length: amount }, (_, i) =>
      generateSentence(i === 0 && startWithLorem)
    );
    const text = sentences.join(" ");
    return htmlFormat ? `<p>${text}</p>` : text;
  }

  // words
  const wordList = Array.from({ length: amount }, (_, i) => {
    if (i === 0 && startWithLorem) return "Lorem";
    if (i === 1 && startWithLorem) return "ipsum";
    const w = randWord();
    return i === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w;
  });
  const text = wordList.join(" ") + ".";
  return htmlFormat ? `<p>${text}</p>` : text;
}

function countStats(text: string) {
  const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  const chars = text.length;
  return { words, chars };
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function LoremIpsumGenerator() {
  const [amount, setAmount] = useState(3);
  const [type, setType] = useState<"paragraphs" | "sentences" | "words">("paragraphs");
  const [startWithLorem, setStartWithLorem] = useState(true);
  const [htmlFormat, setHtmlFormat] = useState(false);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    setOutput(generateOutput(amount, type, startWithLorem, htmlFormat));
  }, [amount, type, startWithLorem, htmlFormat]);

  // Auto-generate on mount
  useEffect(() => {
    generate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCopy = useCallback(async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [output]);

  const handleClear = useCallback(() => setOutput(""), []);

  const stats = countStats(output);

  return (
    <section className="animate-fade-in mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Ad slot */}
      <div className="mb-6 min-h-[90px]" aria-hidden="true" />

      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Free Lorem Ipsum Generator —{" "}
          <span className="text-primary">Placeholder Text in Seconds</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-text-secondary sm:text-lg">
          Generate placeholder text by paragraphs, sentences, or words. Perfect for web design
          mockups, app development, and layout testing.
        </p>
      </header>

      {/* Controls */}
      <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <div className="flex flex-wrap items-end gap-4">
          {/* Amount */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Amount
            </label>
            <input
              type="number"
              min={1}
              max={50}
              value={amount}
              onChange={(e) => {
                const v = Math.min(50, Math.max(1, parseInt(e.target.value, 10) || 1));
                setAmount(v);
              }}
              className="w-24 rounded-xl border border-border bg-white px-3 py-2 text-sm font-semibold text-text shadow-sm focus:border-primary focus:outline-none focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
            />
          </div>

          {/* Type */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as typeof type)}
              className="rounded-xl border border-border bg-white px-3 py-2 text-sm font-semibold text-text shadow-sm focus:border-primary focus:outline-none focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
            >
              <option value="paragraphs">Paragraphs</option>
              <option value="sentences">Sentences</option>
              <option value="words">Words</option>
            </select>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-2">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-text-secondary select-none">
              <input
                type="checkbox"
                checked={startWithLorem}
                onChange={(e) => setStartWithLorem(e.target.checked)}
                className="h-4 w-4 rounded border-border accent-primary"
              />
              Start with &ldquo;Lorem ipsum…&rdquo;
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm text-text-secondary select-none">
              <input
                type="checkbox"
                checked={htmlFormat}
                onChange={(e) => setHtmlFormat(e.target.checked)}
                className="h-4 w-4 rounded border-border accent-primary"
              />
              HTML format (&lt;p&gt; tags)
            </label>
          </div>

          {/* Generate button */}
          <button
            type="button"
            onClick={generate}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            <RefreshCw className="h-4 w-4" />
            Generate
          </button>
        </div>
      </div>

      {/* Output */}
      <div className="mt-4 rounded-2xl border border-border bg-surface shadow-sm">
        {/* Toolbar */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
          <FileText className="h-4 w-4 text-text-secondary" />
          <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Generated Text
          </span>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                copied
                  ? "bg-green-50 text-accent-green"
                  : "text-text-secondary hover:bg-surface-hover hover:text-text"
              }`}
            >
              {copied ? (
                <Check className="h-3.5 w-3.5" strokeWidth={2} />
              ) : (
                <Copy className="h-3.5 w-3.5" strokeWidth={2} />
              )}
              {copied ? "Copied!" : "Copy"}
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:bg-red-50 hover:text-accent-red"
            >
              <Eraser className="h-3.5 w-3.5" strokeWidth={2} />
              Clear
            </button>
          </div>
        </div>

        <textarea
          readOnly
          value={output}
          placeholder="Click Generate to create placeholder text…"
          aria-label="Generated Lorem Ipsum text"
          className="min-h-[320px] w-full resize-y rounded-b-2xl bg-surface p-5 font-mono text-sm leading-relaxed text-text placeholder:text-text-secondary/50 focus:outline-none"
        />
      </div>

      {/* Stats */}
      {output && (
        <div className="mt-3 flex flex-wrap items-center gap-5 rounded-xl border border-border bg-surface px-4 py-3 shadow-sm">
          <span className="flex items-center gap-1.5 text-sm text-text-secondary">
            <Type className="h-4 w-4" />
            <span className="font-bold text-text">{stats.words.toLocaleString()}</span> words
          </span>
          <span className="flex items-center gap-1.5 text-sm text-text-secondary">
            <Hash className="h-4 w-4" />
            <span className="font-bold text-text">{stats.chars.toLocaleString()}</span> characters
          </span>
        </div>
      )}

      {/* Ad slot */}
      <div className="mt-8 min-h-[90px]" aria-hidden="true" />
    </section>
  );
}
