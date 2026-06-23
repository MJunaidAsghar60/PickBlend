"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {
  Type,
  FileText,
  Clock,
  Mic,
  AlignLeft,
  Pilcrow,
  Copy,
  Check,
  ArrowUpAZ,
  ArrowDownAZ,
  CaseSensitive,
  Eraser,
  BarChart3,
  Hash,
  Percent,
  RotateCcw,
} from "lucide-react";

const STORAGE_KEY = "wc-tool-text";
const READING_WPM = 238;
const SPEAKING_WPM = 130;

const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for",
  "of", "with", "by", "from", "is", "it", "as", "be", "was", "are",
  "been", "being", "have", "has", "had", "do", "does", "did", "will",
  "would", "could", "should", "may", "might", "shall", "can", "need",
  "this", "that", "these", "those", "i", "you", "he", "she", "we",
  "they", "me", "him", "her", "us", "them", "my", "your", "his", "its",
  "our", "their", "what", "which", "who", "whom", "where", "when",
  "why", "how", "not", "no", "nor", "if", "then", "else", "so", "up",
  "out", "about", "into", "over", "after", "before", "between",
  "through", "during", "above", "below", "all", "each", "every",
  "both", "few", "more", "most", "other", "some", "such", "only",
  "own", "same", "than", "too", "very", "just", "because", "also",
]);

interface TextStats {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  sentences: number;
  paragraphs: number;
  readingTime: string;
  speakingTime: string;
}

interface KeywordEntry {
  word: string;
  count: number;
  density: number;
}

function formatTime(minutes: number): string {
  if (minutes < 1) {
    const seconds = Math.round(minutes * 60);
    return seconds <= 0 ? "0 sec" : `${seconds} sec`;
  }
  const m = Math.floor(minutes);
  const s = Math.round((minutes - m) * 60);
  if (m === 0) return `${s} sec`;
  if (s === 0) return `${m} min`;
  return `${m} min ${s} sec`;
}

function analyzeText(text: string): TextStats {
  const trimmed = text.trim();

  if (!trimmed) {
    return {
      words: 0,
      characters: 0,
      charactersNoSpaces: 0,
      sentences: 0,
      paragraphs: 0,
      readingTime: "0 sec",
      speakingTime: "0 sec",
    };
  }

  const words = trimmed.split(/\s+/).filter(Boolean).length;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const sentences = trimmed
    .split(/[.!?]+/)
    .filter((s) => s.trim().length > 0).length;
  const paragraphs = trimmed
    .split(/\n\s*\n/)
    .filter((p) => p.trim().length > 0).length;

  return {
    words,
    characters,
    charactersNoSpaces,
    sentences,
    paragraphs,
    readingTime: formatTime(words / READING_WPM),
    speakingTime: formatTime(words / SPEAKING_WPM),
  };
}

function getKeywordDensity(text: string, wordCount: number): KeywordEntry[] {
  if (!text.trim() || wordCount === 0) return [];

  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));

  const freq: Record<string, number> = {};
  for (const w of words) {
    freq[w] = (freq[w] || 0) + 1;
  }

  return Object.entries(freq)
    .map(([word, count]) => ({
      word,
      count,
      density: +((count / wordCount) * 100).toFixed(1),
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
}

export default function WordCounter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setText(saved);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, text);
    }
  }, [text, hydrated]);

  const stats = useMemo(() => analyzeText(text), [text]);
  const keywords = useMemo(
    () => getKeywordDensity(text, stats.words),
    [text, stats.words]
  );

  const handleCopy = useCallback(async () => {
    if (!text.trim()) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  const toUpperCase = useCallback(() => setText((t) => t.toUpperCase()), []);
  const toLowerCase = useCallback(() => setText((t) => t.toLowerCase()), []);
  const toSentenceCase = useCallback(
    () =>
      setText((t) =>
        t
          .toLowerCase()
          .replace(/(^\s*\w|[.!?]\s+\w)/g, (c) => c.toUpperCase())
      ),
    []
  );
  const clearText = useCallback(() => setText(""), []);

  // Single stats array — rendered ONCE with responsive grid
  const statItems = [
    { icon: Type,      label: "Words",      value: stats.words.toLocaleString(),               highlight: true  },
    { icon: FileText,  label: "Characters", value: stats.characters.toLocaleString(),          highlight: false },
    { icon: Hash,      label: "No Spaces",  value: stats.charactersNoSpaces.toLocaleString(), highlight: false },
    { icon: AlignLeft, label: "Sentences",  value: stats.sentences.toLocaleString(),           highlight: false },
    { icon: Pilcrow,   label: "Paragraphs", value: stats.paragraphs.toLocaleString(),          highlight: false },
    { icon: Clock,     label: "Read Time",  value: stats.readingTime,                          highlight: false },
    { icon: Mic,       label: "Speak Time", value: stats.speakingTime,                         highlight: false },
  ];

  return (
    <section className="animate-fade-in mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      {/* ---------- Top Banner Ad Slot ---------- */}
      <div className="mb-6 min-h-[90px]" aria-hidden="true"></div>

      {/* ---------- Header ---------- */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-text sm:text-4xl">
          Free Online Word Counter —{" "}
          <span className="text-primary">
            Words, Characters, Sentences & Reading Time
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-text-secondary">
          Count words, characters, sentences &amp; paragraphs instantly. Get
          reading time, speaking time, and keyword density — all in real time.
        </p>
      </header>

      {/* ---------- Editor Card ---------- */}
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-sm)]">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-1.5 border-b border-border bg-surface-alt px-4 py-2.5">
          <ToolbarButton icon={ArrowUpAZ} label="UPPER" onClick={toUpperCase} variant="default" />
          <ToolbarButton icon={ArrowDownAZ} label="lower" onClick={toLowerCase} variant="default" />
          <ToolbarButton icon={CaseSensitive} label="Sentence" onClick={toSentenceCase} variant="default" />

          <div className="mx-1.5 h-5 w-px bg-border" />

          <ToolbarButton
            icon={copied ? Check : Copy}
            label={copied ? "Copied!" : "Copy"}
            onClick={handleCopy}
            variant="copy"
            active={copied}
          />
          <ToolbarButton icon={Eraser} label="Clear" onClick={clearText} variant="danger" />

          <div className="ml-auto flex items-center gap-1 text-xs text-text-tertiary">
            <RotateCcw className="h-3 w-3" />
            Auto-saved
          </div>
        </div>

        {/* Textarea */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here…"
          aria-label="Text editor for word counting"
          className="min-h-[360px] w-full resize-y bg-surface p-5 text-base leading-relaxed text-text placeholder:text-text-tertiary focus:outline-none"
          spellCheck={false}
        />
      </div>

      {/* ---------- Stats Grid — rendered ONCE, reflows responsively ---------- */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {statItems.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border bg-surface p-4 text-center shadow-[var(--shadow-sm)]"
          >
            <p className={`animate-count text-xl font-bold ${s.highlight ? "text-primary" : "text-text"}`}>
              {s.value}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-text-tertiary">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* ---------- Word frequency analysis ---------- */}
      <div className="mt-4 rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-sm)]">
        <div className="mb-4 flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold text-text">Keyword Density</h2>
        </div>
        <KeywordTable keywords={keywords} />
      </div>

      {/* ---------- In-Content Ad Slot ---------- */}
      <div className="mt-8 min-h-[90px]" aria-hidden="true"></div>
    </section>
  );
}

/* ==============================
   Sub-components
   ============================== */

function ToolbarButton({
  icon: Icon,
  label,
  onClick,
  active = false,
  variant = "default",
}: {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
  active?: boolean;
  variant?: "default" | "copy" | "danger";
}) {
  const base = "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors";

  if (variant === "copy") {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} ${
          active
            ? "bg-accent-green-bg text-accent-green"
            : "bg-primary text-text-inverse hover:bg-primary-dark"
        }`}
      >
        <Icon className="h-3.5 w-3.5" strokeWidth={2} />
        {label}
      </button>
    );
  }

  if (variant === "danger") {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} text-text-secondary hover:bg-accent-red-bg hover:text-accent-red`}
      >
        <Icon className="h-3.5 w-3.5" strokeWidth={2} />
        {label}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} text-text-secondary hover:bg-surface hover:text-text`}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
      {label}
    </button>
  );
}

function KeywordTable({ keywords }: { keywords: KeywordEntry[] }) {
  if (keywords.length === 0) {
    return (
      <p className="py-6 text-center text-sm text-text-tertiary">
        Start typing to see keyword density analysis…
      </p>
    );
  }

  const maxCount = keywords[0]?.count ?? 1;

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-surface-alt text-xs font-semibold uppercase tracking-wider text-text-secondary">
            <th className="px-4 py-3">Keyword</th>
            <th className="px-4 py-3 text-center">Count</th>
            <th className="px-4 py-3 text-right">Density</th>
          </tr>
        </thead>
        <tbody>
          {keywords.map((kw) => (
            <tr
              key={kw.word}
              className="border-t border-border transition-colors hover:bg-surface-alt"
            >
              <td className="px-4 py-3 font-medium text-text">
                <div className="flex flex-col gap-1">
                  <span>{kw.word}</span>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-primary-subtle">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${Math.round((kw.count / maxCount) * 100)}%` }}
                    />
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-center text-text-secondary">
                {kw.count}
              </td>
              <td className="px-4 py-3 text-right">
                <span className="inline-flex items-center gap-1 text-text-secondary">
                  <Percent className="h-3 w-3" />
                  {kw.density}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
