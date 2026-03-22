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
const READING_WPM = 275;
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

function StatCard({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  color: string;
}) {
  return (
    <div className="group relative flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${color}`}
      >
        <Icon className="h-5 w-5 text-white" strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
          {label}
        </p>
        <p className="animate-count text-xl font-bold text-text">{value}</p>
      </div>
    </div>
  );
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

  const toUpperCase = useCallback(
    () => setText((t) => t.toUpperCase()),
    []
  );
  const toLowerCase = useCallback(
    () => setText((t) => t.toLowerCase()),
    []
  );
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

  return (
    <section className="animate-fade-in mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* ---------- Top Banner Ad Slot ---------- */}
      <div className="mb-6 min-h-[90px]" aria-hidden="true"></div>

      {/* ---------- Header ---------- */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Free Online Word Counter —{" "}
          <span className="text-primary">
            Words, Characters, Sentences & Reading Time
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-text-secondary sm:text-lg">
          Count words, characters, sentences &amp; paragraphs instantly. Get
          reading time, speaking time, and keyword density — all in real time.
        </p>
      </header>

      {/* ---------- Main Grid ---------- */}
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        {/* === LEFT: Editor + Toolbar === */}
        <div className="flex flex-col gap-4">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-surface p-3 shadow-sm">
            <ToolbarButton
              icon={ArrowUpAZ}
              label="UPPER"
              onClick={toUpperCase}
            />
            <ToolbarButton
              icon={ArrowDownAZ}
              label="lower"
              onClick={toLowerCase}
            />
            <ToolbarButton
              icon={CaseSensitive}
              label="Sentence"
              onClick={toSentenceCase}
            />

            <div className="mx-1 h-6 w-px bg-border" />

            <ToolbarButton
              icon={copied ? Check : Copy}
              label={copied ? "Copied!" : "Copy"}
              onClick={handleCopy}
              active={copied}
            />
            <ToolbarButton
              icon={Eraser}
              label="Clear"
              onClick={clearText}
              variant="danger"
            />

            <div className="ml-auto flex items-center gap-1.5 text-xs text-text-secondary">
              <RotateCcw className="h-3.5 w-3.5" />
              Auto-saved
            </div>
          </div>

          {/* Textarea */}
          <div className="relative">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Start typing or paste your text here…"
              aria-label="Text editor for word counting"
              className="min-h-[420px] w-full resize-y rounded-2xl border border-border bg-surface p-5 text-base leading-relaxed text-text shadow-sm transition-shadow placeholder:text-text-secondary/50 focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] sm:text-lg"
              spellCheck={false}
            />
          </div>

          {/* Stats Grid (Mobile: shown below editor, Desktop: also visible) */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
            <StatCard
              icon={Type}
              label="Words"
              value={stats.words.toLocaleString()}
              color="bg-primary"
            />
            <StatCard
              icon={FileText}
              label="Characters"
              value={stats.characters.toLocaleString()}
              color="bg-accent-sky"
            />
            <StatCard
              icon={Hash}
              label="No Spaces"
              value={stats.charactersNoSpaces.toLocaleString()}
              color="bg-accent-teal"
            />
            <StatCard
              icon={AlignLeft}
              label="Sentences"
              value={stats.sentences.toLocaleString()}
              color="bg-accent-green"
            />
            <StatCard
              icon={Pilcrow}
              label="Paragraphs"
              value={stats.paragraphs.toLocaleString()}
              color="bg-accent-orange"
            />
            <StatCard
              icon={Clock}
              label="Read Time"
              value={stats.readingTime}
              color="bg-accent-red"
            />
          </div>

          {/* Keyword Density (Desktop: below editor) */}
          <div className="hidden rounded-2xl border border-border bg-surface p-5 shadow-sm lg:block">
            <div className="mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                Keyword Density
              </h2>
            </div>
            <KeywordTable keywords={keywords} />
          </div>
        </div>

        {/* === RIGHT: Sidebar Dashboard === */}
        <aside className="flex flex-col gap-4">
          {/* Stat Cards — Desktop sidebar */}
          <div className="hidden flex-col gap-3 lg:flex">
            <StatCard
              icon={Type}
              label="Words"
              value={stats.words.toLocaleString()}
              color="bg-primary"
            />
            <StatCard
              icon={FileText}
              label="Characters"
              value={stats.characters.toLocaleString()}
              color="bg-accent-sky"
            />
            <StatCard
              icon={Hash}
              label="No Spaces"
              value={stats.charactersNoSpaces.toLocaleString()}
              color="bg-accent-teal"
            />
            <StatCard
              icon={AlignLeft}
              label="Sentences"
              value={stats.sentences.toLocaleString()}
              color="bg-accent-green"
            />
            <StatCard
              icon={Pilcrow}
              label="Paragraphs"
              value={stats.paragraphs.toLocaleString()}
              color="bg-accent-orange"
            />
            <StatCard
              icon={Clock}
              label="Read Time"
              value={stats.readingTime}
              color="bg-accent-red"
            />
            <StatCard
              icon={Mic}
              label="Speak Time"
              value={stats.speakingTime}
              color="bg-accent-slate"
            />
          </div>

          {/* Sidebar Ad Slot */}
          <div className="min-h-[250px]" aria-hidden="true"></div>

          {/* Keyword Density — Mobile */}
          <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm lg:hidden">
            <div className="mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                Keyword Density
              </h2>
            </div>
            <KeywordTable keywords={keywords} />
          </div>
        </aside>
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
  variant?: "default" | "danger";
}) {
  const base =
    "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors";
  const styles = {
    default: active
      ? "bg-green-50 text-accent-green"
      : "text-text-secondary hover:bg-surface-hover hover:text-text",
    danger: "text-text-secondary hover:bg-red-50 hover:text-accent-red",
  };

  return (
    <button type="button" onClick={onClick} className={`${base} ${styles[variant]}`}>
      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
      {label}
    </button>
  );
}

function KeywordTable({ keywords }: { keywords: KeywordEntry[] }) {
  if (keywords.length === 0) {
    return (
      <p className="py-6 text-center text-sm text-text-secondary/60">
        Start typing to see keyword density analysis…
      </p>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-surface-alt text-xs uppercase tracking-wider text-text-secondary">
            <th className="px-4 py-2.5 font-semibold">Keyword</th>
            <th className="px-4 py-2.5 text-center font-semibold">Count</th>
            <th className="px-4 py-2.5 text-right font-semibold">Density</th>
          </tr>
        </thead>
        <tbody>
          {keywords.map((kw, i) => (
            <tr
              key={kw.word}
              className={`border-t border-border transition-colors hover:bg-surface-hover ${
                i % 2 === 0 ? "bg-surface" : "bg-surface-alt/50"
              }`}
            >
              <td className="px-4 py-2.5 font-medium text-text">{kw.word}</td>
              <td className="px-4 py-2.5 text-center text-text-secondary">
                {kw.count}
              </td>
              <td className="px-4 py-2.5 text-right">
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
