"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {
  AlignLeft,
  Type,
  Hash,
  Pilcrow,
  Copy,
  Check,
  Eraser,
  RotateCcw,
  List,
} from "lucide-react";

const STORAGE_KEY = "pickblend-sentence-counter";

// Common abbreviations to avoid splitting on their periods
const ABBREVIATIONS = /\b(Mr|Mrs|Ms|Dr|Prof|Sr|Jr|vs|etc|e\.g|i\.e|approx|dept|est|fig|govt|inc|ltd|max|min|no|p|pp|vol|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\./gi;

function detectSentences(text: string): string[] {
  if (!text.trim()) return [];
  // Replace abbreviation periods with a placeholder
  const placeholder = "ABBR_PERIOD";
  const safe = text.replace(ABBREVIATIONS, (m) => m.slice(0, -1) + placeholder);
  // Split on .  !  ? followed by whitespace or end-of-string
  const raw = safe.split(/(?<=[.!?])\s+(?=[A-Z"'(])|(?<=[.!?])$/gm);
  return raw
    .map((s) => s.replace(new RegExp(placeholder, "g"), ".").trim())
    .filter((s) => s.length > 0);
}

function wordCount(s: string): number {
  return s.trim() ? s.trim().split(/\s+/).filter(Boolean).length : 0;
}

function analyzeText(text: string) {
  const sentences = detectSentences(text);
  const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  const chars = text.length;
  const paragraphs = text.trim()
    ? text.trim().split(/\n\s*\n/).filter((p) => p.trim().length > 0).length
    : 0;
  const sentenceWordCounts = sentences.map(wordCount);
  const avgWordsPerSentence =
    sentences.length > 0
      ? Math.round((words / sentences.length) * 10) / 10
      : 0;
  const longest =
    sentenceWordCounts.length > 0 ? Math.max(...sentenceWordCounts) : 0;
  const shortest =
    sentenceWordCounts.length > 0 ? Math.min(...sentenceWordCounts) : 0;
  return { sentences, words, chars, paragraphs, avgWordsPerSentence, longest, shortest };
}

function StatCard({
  icon: Icon,
  label,
  value,
  color,
  large,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  color: string;
  large?: boolean;
}) {
  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      <div className={`flex shrink-0 items-center justify-center rounded-xl ${color} ${large ? "h-12 w-12" : "h-10 w-10"}`}>
        <Icon className={`text-white ${large ? "h-6 w-6" : "h-5 w-5"}`} strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">{label}</p>
        <p className={`font-bold text-text ${large ? "text-3xl" : "text-xl"}`}>{value}</p>
      </div>
    </div>
  );
}

export default function SentenceCounter() {
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

  return (
    <section className="animate-fade-in mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Ad slot */}
      <div className="mb-6 min-h-[90px]" aria-hidden="true" />

      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Free Online Sentence Counter —{" "}
          <span className="text-primary">Count Sentences Instantly</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-text-secondary sm:text-lg">
          Paste any text and get a real-time sentence count with average sentence length, word
          count, and a full breakdown of every detected sentence.
        </p>
      </header>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-surface p-3 shadow-sm">
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
        placeholder="Start typing or paste your text here…"
        aria-label="Text input for sentence counting"
        className="mt-4 min-h-[300px] w-full resize-y rounded-2xl border border-border bg-surface p-5 text-base leading-relaxed text-text shadow-sm transition-shadow placeholder:text-text-secondary/50 focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] sm:text-lg"
        spellCheck={false}
      />

      {/* Stats grid */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {/* Sentences — large, primary */}
        <div className="col-span-2 sm:col-span-4 lg:col-span-1 lg:row-span-1">
          <StatCard
            icon={AlignLeft}
            label="Sentences"
            value={stats.sentences.length.toLocaleString()}
            color="bg-primary"
            large
          />
        </div>
        <StatCard icon={Type} label="Words" value={stats.words.toLocaleString()} color="bg-accent-teal" />
        <StatCard icon={Hash} label="Characters" value={stats.chars.toLocaleString()} color="bg-accent-sky" />
        <StatCard icon={Pilcrow} label="Paragraphs" value={stats.paragraphs.toLocaleString()} color="bg-accent-orange" />
        <StatCard
          icon={AlignLeft}
          label="Avg Words / Sentence"
          value={stats.avgWordsPerSentence}
          color="bg-accent-green"
        />
        <StatCard
          icon={AlignLeft}
          label="Longest Sentence"
          value={`${stats.longest} words`}
          color="bg-accent-red"
        />
        <StatCard
          icon={AlignLeft}
          label="Shortest Sentence"
          value={`${stats.shortest} words`}
          color="bg-accent-slate"
        />
      </div>

      {/* Sentence list panel */}
      {stats.sentences.length > 0 && (
        <div className="mt-6 rounded-2xl border border-border bg-surface shadow-sm">
          <div className="flex items-center gap-2 border-b border-border px-5 py-3">
            <List className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Detected Sentences
            </h2>
            <span className="ml-auto rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {stats.sentences.length}
            </span>
          </div>
          <div className="divide-y divide-border">
            {stats.sentences.map((sentence, idx) => {
              const wc = wordCount(sentence);
              const display =
                sentence.length > 100 ? sentence.slice(0, 100) + "…" : sentence;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 px-5 py-3 transition-colors hover:bg-surface-alt/50"
                >
                  <span className="mt-0.5 shrink-0 rounded-lg bg-surface-hover px-2 py-0.5 text-xs font-bold tabular-nums text-text-secondary">
                    #{idx + 1}
                  </span>
                  <p className="flex-1 text-sm leading-relaxed text-text-secondary">{display}</p>
                  <span className="ml-2 shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                    {wc}w
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Ad slot */}
      <div className="mt-8 min-h-[90px]" aria-hidden="true" />
    </section>
  );
}
