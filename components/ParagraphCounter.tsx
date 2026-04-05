"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Copy, Check, Eraser, RotateCcw, Pilcrow } from "lucide-react";

const STORAGE_KEY = "pickblend-paragraph-counter";

const ABBREVIATIONS =
  /\b(Mr|Mrs|Ms|Dr|Prof|Sr|Jr|vs|etc|e\.g|i\.e|approx|dept|est|fig|govt|inc|ltd|max|min|no|p|pp|vol|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\./gi;

function detectSentences(text: string): string[] {
  if (!text.trim()) return [];
  const placeholder = "ABBR_PERIOD";
  const safe = text.replace(ABBREVIATIONS, (m) => m.slice(0, -1) + placeholder);
  const raw = safe.split(/(?<=[.!?])\s+(?=[A-Z"'(])|(?<=[.!?])$/gm);
  return raw
    .map((s) => s.replace(new RegExp(placeholder, "g"), ".").trim())
    .filter((s) => s.length > 0);
}

function countWords(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
}

function avgWordLen(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return 0;
  const totalChars = words.reduce(
    (sum, w) => sum + w.replace(/[^a-zA-Z]/g, "").length,
    0
  );
  return Math.round((totalChars / words.length) * 10) / 10;
}

interface ParagraphData {
  text: string;
  words: number;
  sentences: number;
  chars: number;
  avgWord: number;
}

interface TextStats {
  paragraphs: ParagraphData[];
  totalWords: number;
  totalSentences: number;
  totalChars: number;
  avgWordsPerPara: number;
  avgSentencesPerPara: number;
  longestPara: number;
  shortestPara: number;
}

function analyzeText(text: string): TextStats {
  const empty: TextStats = {
    paragraphs: [],
    totalWords: 0,
    totalSentences: 0,
    totalChars: 0,
    avgWordsPerPara: 0,
    avgSentencesPerPara: 0,
    longestPara: 0,
    shortestPara: 0,
  };

  if (!text.trim()) return empty;

  // Split on one or more newlines; each non-empty block is a paragraph
  const blocks = text.split(/\n+/).filter((b) => b.trim().length > 0);
  if (blocks.length === 0) return empty;

  const paragraphs: ParagraphData[] = blocks.map((block) => ({
    text: block.trim(),
    words: countWords(block),
    sentences: detectSentences(block).length,
    chars: block.length,
    avgWord: avgWordLen(block),
  }));

  const totalWords = paragraphs.reduce((s, p) => s + p.words, 0);
  const totalSentences = paragraphs.reduce((s, p) => s + p.sentences, 0);
  const wordCounts = paragraphs.map((p) => p.words);

  return {
    paragraphs,
    totalWords,
    totalSentences,
    totalChars: text.length,
    avgWordsPerPara:
      paragraphs.length > 0
        ? Math.round((totalWords / paragraphs.length) * 10) / 10
        : 0,
    avgSentencesPerPara:
      paragraphs.length > 0
        ? Math.round((totalSentences / paragraphs.length) * 10) / 10
        : 0,
    longestPara: wordCounts.length > 0 ? Math.max(...wordCounts) : 0,
    shortestPara: wordCounts.length > 0 ? Math.min(...wordCounts) : 0,
  };
}

function StatCard({
  label,
  value,
  large,
}: {
  label: string;
  value: string | number;
  large?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
      <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
        {label}
      </p>
      <p className={`mt-1 font-bold text-text ${large ? "text-3xl" : "text-xl"}`}>
        {value}
      </p>
    </div>
  );
}

export default function ParagraphCounter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setText(saved);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, text);
  }, [text, hydrated]);

  const stats = useMemo(() => analyzeText(text), [text]);

  const handleCopy = useCallback(async () => {
    if (!text.trim()) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  const clearText = useCallback(() => setText(""), []);

  const isEmpty = !text.trim();

  return (
    <section className="animate-fade-in mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Ad slot */}
      <div className="mb-6 min-h-[90px]" aria-hidden="true" />

      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Free Paragraph Counter —{" "}
          <span className="text-primary">Count &amp; Analyze Paragraphs</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-text-secondary sm:text-lg">
          Paste any text to count paragraphs and get a detailed breakdown — words, sentences and
          characters for every paragraph. Perfect for long-form writers.
        </p>
      </header>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-surface p-3 shadow-sm">
        <button
          type="button"
          onClick={handleCopy}
          disabled={isEmpty}
          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:pointer-events-none disabled:opacity-40 ${
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
          onClick={clearText}
          className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:bg-red-50 hover:text-accent-red"
        >
          <Eraser className="h-3.5 w-3.5" strokeWidth={2} />
          Clear
        </button>
        <div className="ml-auto flex items-center gap-1.5 text-xs text-text-secondary">
          <RotateCcw className="h-3.5 w-3.5" />
          Auto-saved
        </div>
      </div>

      {/* Textarea */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text here to analyze paragraphs..."
        aria-label="Text input for paragraph counting"
        className="mt-4 min-h-[280px] w-full resize-y rounded-2xl border border-border bg-surface p-5 text-base leading-relaxed text-text shadow-sm transition-shadow placeholder:text-text-secondary/50 focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] sm:text-lg"
        spellCheck={false}
      />

      {/* Empty state */}
      {isEmpty && (
        <div className="mt-4 rounded-xl border border-border bg-surface-alt px-4 py-6 text-center text-sm text-text-secondary">
          <p className="font-medium text-text">
            Paste text above to analyze paragraph structure.
          </p>
          <p className="mt-1">
            See word count, sentence count and character count for every paragraph in your text.
          </p>
        </div>
      )}

      {!isEmpty && (
        <>
          {/* Summary stats — 8 cards */}
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="col-span-2 sm:col-span-2 lg:col-span-1">
              <StatCard
                label="Paragraphs"
                value={stats.paragraphs.length.toLocaleString()}
                large
              />
            </div>
            <StatCard label="Words" value={stats.totalWords.toLocaleString()} />
            <StatCard label="Sentences" value={stats.totalSentences.toLocaleString()} />
            <StatCard label="Characters" value={stats.totalChars.toLocaleString()} />
            <StatCard label="Avg Words / Para" value={stats.avgWordsPerPara} />
            <StatCard label="Avg Sentences / Para" value={stats.avgSentencesPerPara} />
            <StatCard label="Longest Paragraph" value={`${stats.longestPara} words`} />
            <StatCard label="Shortest Paragraph" value={`${stats.shortestPara} words`} />
          </div>

          {/* Paragraph breakdown */}
          <div className="mt-6">
            <div className="mb-3 flex items-center gap-2">
              <Pilcrow className="h-4 w-4 text-primary" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                Paragraph Breakdown
              </h2>
              <span className="ml-auto rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                {stats.paragraphs.length}
              </span>
            </div>
            <div className="space-y-3">
              {stats.paragraphs.map((para, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-white p-4"
                >
                  <div className="mb-2">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
                      Paragraph {idx + 1}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {para.text}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-4 font-mono text-xs text-text-secondary">
                    <span>
                      Words:{" "}
                      <strong className="text-text">{para.words}</strong>
                    </span>
                    <span>
                      Sentences:{" "}
                      <strong className="text-text">{para.sentences}</strong>
                    </span>
                    <span>
                      Characters:{" "}
                      <strong className="text-text">{para.chars}</strong>
                    </span>
                    <span>
                      Avg word length:{" "}
                      <strong className="text-text">{para.avgWord}</strong>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Ad slot */}
      <div className="mt-8 min-h-[90px]" aria-hidden="true" />
    </section>
  );
}
