"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Copy,
  Check,
  Eraser,
  RefreshCw,
  Type,
  Hash,
} from "lucide-react";

type SeparatorKey = "none" | "newline" | "comma" | "space" | "pipe" | "dash" | "custom";

const SEPARATOR_OPTIONS: { value: SeparatorKey; label: string }[] = [
  { value: "none", label: "None" },
  { value: "newline", label: "New Line" },
  { value: "comma", label: "Comma and space (, )" },
  { value: "space", label: "Space" },
  { value: "pipe", label: "Pipe ( | )" },
  { value: "dash", label: "Dash ( - )" },
  { value: "custom", label: "Custom…" },
];

function getSeparatorString(key: SeparatorKey, custom: string): string {
  switch (key) {
    case "none": return "";
    case "newline": return "\n";
    case "comma": return ", ";
    case "space": return " ";
    case "pipe": return " | ";
    case "dash": return " - ";
    case "custom": return custom;
  }
}

function generateOutput(
  input: string,
  reps: number,
  separatorKey: SeparatorKey,
  customSep: string,
  prefix: string,
  suffix: string,
  numbering: boolean
): string {
  if (!input.trim() || reps < 1) return "";
  const sep = getSeparatorString(separatorKey, customSep);
  const parts = Array.from({ length: reps }, (_, i) => {
    const num = numbering ? `${i + 1}. ` : "";
    return `${num}${prefix}${input}${suffix}`;
  });
  return parts.join(sep);
}

function countStats(text: string) {
  const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  const chars = text.length;
  return { words, chars };
}

export default function TextRepeater() {
  const [input, setInput] = useState("");
  const [reps, setReps] = useState(3);
  const [separatorKey, setSeparatorKey] = useState<SeparatorKey>("newline");
  const [customSep, setCustomSep] = useState("");
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");
  const [numbering, setNumbering] = useState(false);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    setOutput(generateOutput(input, reps, separatorKey, customSep, prefix, suffix, numbering));
  }, [input, reps, separatorKey, customSep, prefix, suffix, numbering]);

  // Auto-generate whenever any control changes
  useEffect(() => {
    generate();
  }, [generate]);

  const handleCopy = useCallback(async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [output]);

  const handleClearOutput = useCallback(() => setOutput(""), []);

  const stats = countStats(output);

  const inputCls =
    "rounded-xl border border-border bg-white px-3 py-2 text-sm font-medium text-text shadow-sm focus:border-primary focus:outline-none focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]";

  return (
    <section className="animate-fade-in mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Ad slot */}
      <div className="mb-6 min-h-[90px]" aria-hidden="true" />

      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Free Online Text Repeater —{" "}
          <span className="text-primary">Repeat Any Text Instantly</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-text-secondary sm:text-lg">
          Repeat any word, phrase, or text block multiple times with custom separators, prefix,
          suffix, and numbering. Perfect for testing, formatting, and data work.
        </p>
      </header>

      {/* Top section: Input + Controls */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
        {/* Input — 60% */}
        <div className="flex flex-col gap-2 lg:flex-[3]">
          <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Text to Repeat
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type or paste the text you want to repeat…"
            aria-label="Text to repeat"
            className="min-h-[120px] w-full resize-y rounded-2xl border border-border bg-surface p-4 text-base leading-relaxed text-text shadow-sm transition-shadow placeholder:text-text-secondary/50 focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
            spellCheck={false}
          />
        </div>

        {/* Controls — 40% */}
        <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm lg:flex-[2]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Options
          </p>
          <div className="space-y-4">
            {/* Repetitions */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="tr-reps" className="text-xs font-medium text-text-secondary">
                Repetitions (1–100)
              </label>
              <input
                id="tr-reps"
                type="number"
                min={1}
                max={100}
                value={reps}
                onChange={(e) => {
                  const v = Math.min(100, Math.max(1, parseInt(e.target.value, 10) || 1));
                  setReps(v);
                }}
                className={`w-24 ${inputCls}`}
              />
            </div>

            {/* Separator */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="tr-sep" className="text-xs font-medium text-text-secondary">
                Separator
              </label>
              <select
                id="tr-sep"
                value={separatorKey}
                onChange={(e) => setSeparatorKey(e.target.value as SeparatorKey)}
                className={inputCls}
              >
                {SEPARATOR_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              {separatorKey === "custom" && (
                <input
                  type="text"
                  value={customSep}
                  onChange={(e) => setCustomSep(e.target.value)}
                  placeholder="Enter custom separator…"
                  className={`mt-1 ${inputCls} w-full`}
                />
              )}
            </div>

            {/* Prefix */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="tr-prefix" className="text-xs font-medium text-text-secondary">
                Prefix <span className="font-normal text-text-secondary/60">(optional)</span>
              </label>
              <input
                id="tr-prefix"
                type="text"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                placeholder="e.g. [ "
                className={`w-full ${inputCls}`}
              />
            </div>

            {/* Suffix */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="tr-suffix" className="text-xs font-medium text-text-secondary">
                Suffix <span className="font-normal text-text-secondary/60">(optional)</span>
              </label>
              <input
                id="tr-suffix"
                type="text"
                value={suffix}
                onChange={(e) => setSuffix(e.target.value)}
                placeholder="e.g.  ]"
                className={`w-full ${inputCls}`}
              />
            </div>

            {/* Numbering */}
            <label className="flex cursor-pointer items-center gap-2 text-sm text-text-secondary select-none">
              <input
                type="checkbox"
                checked={numbering}
                onChange={(e) => setNumbering(e.target.checked)}
                className="h-4 w-4 rounded border-border accent-primary"
              />
              Add numbering (1. 2. 3. …)
            </label>

            {/* Generate button */}
            <button
              type="button"
              onClick={generate}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <RefreshCw className="h-4 w-4" />
              Generate
            </button>
          </div>
        </div>
      </div>

      {/* Output */}
      <div className="mt-4 rounded-2xl border border-border bg-surface shadow-sm">
        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
          <Type className="h-4 w-4 text-text-secondary" />
          <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Output
          </span>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              disabled={!output}
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
              onClick={handleClearOutput}
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
          placeholder="Your repeated text will appear here…"
          aria-label="Repeated text output"
          className="min-h-[200px] w-full resize-y rounded-b-2xl bg-surface p-5 font-mono text-sm leading-relaxed text-text placeholder:text-text-secondary/50 focus:outline-none"
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
          <span className="flex items-center gap-1.5 text-sm text-text-secondary">
            <RefreshCw className="h-4 w-4" />
            <span className="font-bold text-text">{reps}</span> repetitions
          </span>
        </div>
      )}

      {/* Ad slot */}
      <div className="mt-8 min-h-[90px]" aria-hidden="true" />
    </section>
  );
}
