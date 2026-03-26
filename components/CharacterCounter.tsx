"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {
  Hash,
  Type,
  AlignLeft,
  Pilcrow,
  Copy,
  Check,
  Eraser,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const STORAGE_KEY = "cc-tool-text";

interface Stats {
  chars: number;
  charsNoSpaces: number;
  words: number;
  lines: number;
  paragraphs: number;
}

function analyzeText(text: string, countSpaces: boolean): Stats {
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, "").length;
  const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  const lines = text === "" ? 0 : text.split("\n").length;
  const paragraphs = text.trim()
    ? text.trim().split(/\n\s*\n/).filter((p) => p.trim().length > 0).length
    : 0;

  return { chars, charsNoSpaces, words, lines, paragraphs };
}

const PLATFORMS = [
  { name: "Twitter/X Post", limit: 280 },
  { name: "Twitter/X Bio", limit: 160 },
  { name: "Instagram Caption", limit: 2200 },
  { name: "Instagram Bio", limit: 150 },
  { name: "Meta Title Tag", limit: 60 },
  { name: "Meta Description", limit: 160 },
  { name: "SMS Message", limit: 160 },
  { name: "YouTube Title", limit: 100 },
  { name: "TikTok Caption", limit: 4000 },
  { name: "LinkedIn Post", limit: 3000 },
];

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
    <div className="group flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${color}`}>
        <Icon className="h-5 w-5 text-white" strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">{label}</p>
        <p className="animate-count text-xl font-bold text-text">{value}</p>
      </div>
    </div>
  );
}

function PlatformRow({ name, limit, count }: { name: string; limit: number; count: number }) {
  const pct = Math.min((count / limit) * 100, 100);
  const over = count > limit;
  const warning = !over && pct >= 80;

  const barColor = over
    ? "bg-accent-red"
    : warning
    ? "bg-accent-orange"
    : "bg-accent-green";

  const statusIcon = over ? (
    <XCircle className="h-4 w-4 text-accent-red" />
  ) : warning ? (
    <AlertTriangle className="h-4 w-4 text-accent-orange" />
  ) : (
    <CheckCircle2 className="h-4 w-4 text-accent-green" />
  );

  const statusText = over ? "Over limit" : warning ? "Warning" : "OK";
  const statusColor = over
    ? "text-accent-red"
    : warning
    ? "text-accent-orange"
    : "text-accent-green";

  return (
    <div className="rounded-xl border border-border bg-surface p-3 transition-colors hover:bg-surface-alt">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-text">{name}</span>
        <div className="flex items-center gap-1.5">
          {statusIcon}
          <span className={`text-xs font-semibold ${statusColor}`}>{statusText}</span>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <div className="flex-1 overflow-hidden rounded-full bg-surface-hover h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${barColor}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className={`shrink-0 text-xs tabular-nums ${over ? "font-bold text-accent-red" : "text-text-secondary"}`}>
          {count.toLocaleString()} / {limit.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const [countSpaces, setCountSpaces] = useState(true);
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

  const stats = useMemo(() => analyzeText(text, countSpaces), [text, countSpaces]);
  const displayCount = countSpaces ? stats.chars : stats.charsNoSpaces;

  const handleCopy = useCallback(async () => {
    if (!text.trim()) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  const clearText = useCallback(() => setText(""), []);

  return (
    <section className="animate-fade-in mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Ad slot */}
      <div className="mb-6 min-h-[90px]" aria-hidden="true" />

      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Free Online Character Counter —{" "}
          <span className="text-primary">Count Characters Instantly</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-text-secondary sm:text-lg">
          Count characters with and without spaces in real time. Check Twitter, Instagram, SMS, and meta
          tag limits instantly.
        </p>
      </header>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        {/* LEFT */}
        <div className="flex flex-col gap-4">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-surface p-3 shadow-sm">
            {/* Space toggle */}
            <label className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium text-text-secondary hover:bg-surface-hover hover:text-text select-none">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={countSpaces}
                  onChange={(e) => setCountSpaces(e.target.checked)}
                  className="sr-only"
                />
                <div className={`h-5 w-9 rounded-full transition-colors ${countSpaces ? "bg-primary" : "bg-surface-hover border border-border"}`} />
                <div className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${countSpaces ? "translate-x-4" : "translate-x-0.5"}`} />
              </div>
              Count spaces
            </label>

            <div className="mx-1 h-6 w-px bg-border" />

            <button
              type="button"
              onClick={handleCopy}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                copied
                  ? "bg-green-50 text-accent-green"
                  : "text-text-secondary hover:bg-surface-hover hover:text-text"
              }`}
            >
              {copied ? <Check className="h-3.5 w-3.5" strokeWidth={2} /> : <Copy className="h-3.5 w-3.5" strokeWidth={2} />}
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
            aria-label="Text input for character counting"
            className="min-h-[380px] w-full resize-y rounded-2xl border border-border bg-surface p-5 text-base leading-relaxed text-text shadow-sm transition-shadow placeholder:text-text-secondary/50 focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] sm:text-lg"
            spellCheck={false}
          />

          {/* Mobile stats */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
            <StatCard icon={Hash} label={countSpaces ? "Characters" : "Chars (no spaces)"} value={displayCount.toLocaleString()} color="bg-primary" />
            <StatCard icon={Hash} label="No Spaces" value={stats.charsNoSpaces.toLocaleString()} color="bg-accent-sky" />
            <StatCard icon={Type} label="Words" value={stats.words.toLocaleString()} color="bg-accent-teal" />
            <StatCard icon={AlignLeft} label="Lines" value={stats.lines.toLocaleString()} color="bg-accent-green" />
            <StatCard icon={Pilcrow} label="Paragraphs" value={stats.paragraphs.toLocaleString()} color="bg-accent-orange" />
          </div>

          {/* Platform limits (desktop) */}
          <div className="hidden rounded-2xl border border-border bg-surface p-5 shadow-sm lg:block">
            <div className="mb-4 flex items-center gap-2">
              <Hash className="h-5 w-5 text-primary" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                Platform Character Limits
              </h2>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {PLATFORMS.map((p) => (
                <PlatformRow key={p.name} name={p.name} limit={p.limit} count={displayCount} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT sidebar */}
        <aside className="flex flex-col gap-4">
          <div className="hidden flex-col gap-3 lg:flex">
            <StatCard icon={Hash} label={countSpaces ? "Characters" : "Chars (no spaces)"} value={displayCount.toLocaleString()} color="bg-primary" />
            <StatCard icon={Hash} label="Chars (no spaces)" value={stats.charsNoSpaces.toLocaleString()} color="bg-accent-sky" />
            <StatCard icon={Type} label="Words" value={stats.words.toLocaleString()} color="bg-accent-teal" />
            <StatCard icon={AlignLeft} label="Lines" value={stats.lines.toLocaleString()} color="bg-accent-green" />
            <StatCard icon={Pilcrow} label="Paragraphs" value={stats.paragraphs.toLocaleString()} color="bg-accent-orange" />
          </div>

          {/* Ad slot */}
          <div className="min-h-[250px]" aria-hidden="true" />

          {/* Platform limits (mobile) */}
          <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm lg:hidden">
            <div className="mb-4 flex items-center gap-2">
              <Hash className="h-5 w-5 text-primary" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                Platform Character Limits
              </h2>
            </div>
            <div className="space-y-2">
              {PLATFORMS.map((p) => (
                <PlatformRow key={p.name} name={p.name} limit={p.limit} count={displayCount} />
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Ad slot */}
      <div className="mt-8 min-h-[90px]" aria-hidden="true" />
    </section>
  );
}
