"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {
  CaseSensitive,
  Copy,
  Check,
  Eraser,
  RotateCcw,
  Hash,
  Type,
} from "lucide-react";

const STORAGE_KEY = "case-tool-text";

type CaseType =
  | "uppercase"
  | "lowercase"
  | "titlecase"
  | "sentencecase"
  | "camelcase"
  | "pascalcase"
  | "snakecase"
  | "kebabcase"
  | "constantcase"
  | "alternating";

function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}

function toSentenceCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s+\w)/g, (c) => c.toUpperCase());
}

function toCamelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

function toPascalCase(str: string): string {
  const camel = toCamelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function toSnakeCase(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "");
}

function toKebabCase(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function toConstantCase(str: string): string {
  return str
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "_")
    .replace(/[^A-Z0-9_]/g, "");
}

function toAlternatingCase(str: string): string {
  return str
    .split("")
    .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
    .join("");
}

function convertCase(text: string, type: CaseType): string {
  switch (type) {
    case "uppercase": return text.toUpperCase();
    case "lowercase": return text.toLowerCase();
    case "titlecase": return toTitleCase(text);
    case "sentencecase": return toSentenceCase(text);
    case "camelcase": return toCamelCase(text);
    case "pascalcase": return toPascalCase(text);
    case "snakecase": return toSnakeCase(text);
    case "kebabcase": return toKebabCase(text);
    case "constantcase": return toConstantCase(text);
    case "alternating": return toAlternatingCase(text);
  }
}

const CASE_BUTTONS: { type: CaseType; label: string; example: string }[] = [
  { type: "uppercase", label: "UPPERCASE", example: "HELLO WORLD" },
  { type: "lowercase", label: "lowercase", example: "hello world" },
  { type: "titlecase", label: "Title Case", example: "Hello World" },
  { type: "sentencecase", label: "Sentence case", example: "Hello world" },
  { type: "camelcase", label: "camelCase", example: "helloWorld" },
  { type: "pascalcase", label: "PascalCase", example: "HelloWorld" },
  { type: "snakecase", label: "snake_case", example: "hello_world" },
  { type: "kebabcase", label: "kebab-case", example: "hello-world" },
  { type: "constantcase", label: "CONSTANT_CASE", example: "HELLO_WORLD" },
  { type: "alternating", label: "aLtErNaTiNg", example: "hElLo wOrLd" },
];

export default function CaseConverter() {
  const [text, setText] = useState("");
  const [activeCase, setActiveCase] = useState<CaseType | null>(null);
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

  const stats = useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
    const chars = text.length;
    return { words, chars };
  }, [text]);

  const handleConvert = useCallback((type: CaseType) => {
    setActiveCase(type);
    setText((t) => convertCase(t, type));
  }, []);

  const handleCopy = useCallback(async () => {
    if (!text.trim()) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  const clearText = useCallback(() => {
    setText("");
    setActiveCase(null);
  }, []);

  return (
    <section className="animate-fade-in mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Ad slot */}
      <div className="mb-6 min-h-[90px]" aria-hidden="true" />

      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Free Text Case Converter —{" "}
          <span className="text-primary">Convert to Any Case Instantly</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-text-secondary sm:text-lg">
          Convert text to UPPERCASE, lowercase, Title Case, camelCase, snake_case and more — instantly,
          no sign-up required.
        </p>
      </header>

      {/* Case Buttons */}
      <div className="mb-4 flex flex-wrap gap-2 rounded-2xl border border-border bg-surface p-4 shadow-sm">
        {CASE_BUTTONS.map(({ type, label }) => (
          <button
            key={type}
            type="button"
            onClick={() => handleConvert(type)}
            title={`Convert to ${label}`}
            className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all ${
              activeCase === type
                ? "border-primary bg-primary/10 text-primary shadow-sm"
                : "border-border bg-white text-text-secondary hover:border-primary/40 hover:bg-primary/5 hover:text-text shadow-sm"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Textarea */}
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setActiveCase(null);
          }}
          placeholder="Type or paste your text here, then click a case button above…"
          aria-label="Text input for case conversion"
          className="min-h-[340px] w-full resize-y rounded-2xl border border-border bg-surface p-5 text-base leading-relaxed text-text shadow-sm transition-shadow placeholder:text-text-secondary/50 focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] sm:text-lg"
          spellCheck={false}
        />
      </div>

      {/* Bottom toolbar */}
      <div className="mt-3 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-surface p-3 shadow-sm">
        {/* Stats */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-sm text-text-secondary">
            <Type className="h-4 w-4" />
            <span className="font-bold text-text">{stats.words.toLocaleString()}</span> words
          </span>
          <span className="flex items-center gap-1.5 text-sm text-text-secondary">
            <Hash className="h-4 w-4" />
            <span className="font-bold text-text">{stats.chars.toLocaleString()}</span> characters
          </span>
        </div>

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
          <div className="flex items-center gap-1.5 text-xs text-text-secondary">
            <RotateCcw className="h-3.5 w-3.5" />
            Auto-saved
          </div>
        </div>
      </div>

      {/* Case reference cards */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {CASE_BUTTONS.map(({ type, label, example }) => (
          <button
            key={type}
            type="button"
            onClick={() => handleConvert(type)}
            className={`group rounded-2xl border p-4 text-left transition-all hover:shadow-md hover:-translate-y-0.5 ${
              activeCase === type
                ? "border-primary bg-primary/5 shadow-sm"
                : "border-border bg-white shadow-sm"
            }`}
          >
            <p className={`text-xs font-semibold uppercase tracking-wider ${activeCase === type ? "text-primary" : "text-text-secondary"}`}>
              {label}
            </p>
            <p className="mt-1 font-mono text-sm text-text/70">{example}</p>
          </button>
        ))}
      </div>

      {/* Ad slot */}
      <div className="mt-8 min-h-[90px]" aria-hidden="true" />
    </section>
  );
}
