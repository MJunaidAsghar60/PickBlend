"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Copy, Check, Eraser, RotateCcw, BarChart3, Info } from "lucide-react";

const STORAGE_KEY = "pickblend-readability";

// ─── Abbreviation pattern (reuse same logic as SentenceCounter) ───────────────
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

// ─── Syllable counter ─────────────────────────────────────────────────────────
function countSyllables(word: string): number {
  word = word.toLowerCase().replace(/[^a-z]/g, "");
  if (word.length === 0) return 0;
  if (word.length <= 3) return 1;
  // Remove silent e at end
  word = word.replace(/e$/, "");
  // Count vowel groups
  const vowelGroups = word.match(/[aeiouy]+/g);
  let count = vowelGroups ? vowelGroups.length : 1;
  // Adjustments
  if (word.endsWith("le") && word.length > 2) count++;
  if (word.endsWith("ed") && !word.match(/[td]ed$/)) count--;
  return Math.max(1, count);
}

// ─── Analysis ─────────────────────────────────────────────────────────────────
interface Analysis {
  words: string[];
  wordCount: number;
  sentences: string[];
  sentenceCount: number;
  syllableCount: number;
  charCount: number;          // letters only (no spaces/punct) for ARI/CLI
  complexWords: number;
  avgSyllablesPerWord: number;
  avgWordsPerSentence: number;
  // Scores
  flesch: number;
  fkGrade: number;
  fogIndex: number;
  smog: number | null;        // null when <30 sentences
  ari: number;
  colemanLiau: number;
}

function analyzeText(text: string): Analysis | null {
  if (!text.trim()) return null;

  const wordList = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = wordList.length;
  if (wordCount === 0) return null;

  const sentences = detectSentences(text);
  const sentenceCount = Math.max(sentences.length, 1);

  // syllables per word
  const syllableCounts = wordList.map(countSyllables);
  const syllableCount = syllableCounts.reduce((a, b) => a + b, 0);

  // complex words: 3+ syllables, exclude proper nouns (simple heuristic: skip if starts uppercase)
  const complexWords = syllableCounts.filter((s) => s >= 3).length;

  // character count: letters only (no spaces/punct) — used for ARI and CLI
  const charCount = text.replace(/[^a-zA-Z]/g, "").length;

  const avgSyllablesPerWord = syllableCount / wordCount;
  const avgWordsPerSentence = wordCount / sentenceCount;

  // 1. Flesch Reading Ease
  const flesch = Math.round(
    (206.835 - 1.015 * avgWordsPerSentence - 84.6 * avgSyllablesPerWord) * 10
  ) / 10;

  // 2. Flesch-Kincaid Grade Level
  const fkGrade = Math.round(
    (0.39 * avgWordsPerSentence + 11.8 * avgSyllablesPerWord - 15.59) * 10
  ) / 10;

  // 3. Gunning Fog Index
  const fogIndex = Math.round(
    0.4 * (avgWordsPerSentence + 100 * (complexWords / wordCount)) * 10
  ) / 10;

  // 4. SMOG Index (only reliable with 30+ sentences)
  const smog =
    sentences.length >= 30
      ? Math.round((3 + Math.sqrt(complexWords * (30 / sentenceCount))) * 10) / 10
      : null;

  // 5. Automated Readability Index
  const ari = Math.round(
    (4.71 * (charCount / wordCount) + 0.5 * avgWordsPerSentence - 21.43) * 10
  ) / 10;

  // 6. Coleman-Liau Index
  const avgLettersPer100 = (charCount / wordCount) * 100;
  const avgSentencesPer100 = (sentenceCount / wordCount) * 100;
  const colemanLiau = Math.round(
    (0.0588 * avgLettersPer100 - 0.296 * avgSentencesPer100 - 15.8) * 10
  ) / 10;

  return {
    words: wordList,
    wordCount,
    sentences,
    sentenceCount: sentences.length,
    syllableCount,
    charCount,
    complexWords,
    avgSyllablesPerWord: Math.round(avgSyllablesPerWord * 100) / 100,
    avgWordsPerSentence: Math.round(avgWordsPerSentence * 10) / 10,
    flesch,
    fkGrade,
    fogIndex,
    smog,
    ari,
    colemanLiau,
  };
}

// ─── Flesch interpretation helpers ───────────────────────────────────────────
interface Level {
  label: string;
  grade: string;
  badgeCls: string;
}

function fleschLevel(score: number): Level {
  if (score >= 90) return { label: "Very Easy", grade: "5th grade", badgeCls: "bg-emerald-50 text-emerald-700" };
  if (score >= 80) return { label: "Easy", grade: "6th grade", badgeCls: "bg-green-50 text-green-700" };
  if (score >= 70) return { label: "Fairly Easy", grade: "7th grade", badgeCls: "bg-blue-50 text-blue-700" };
  if (score >= 60) return { label: "Standard", grade: "8th–9th grade", badgeCls: "bg-blue-50 text-blue-700" };
  if (score >= 50) return { label: "Fairly Difficult", grade: "10th–12th grade", badgeCls: "bg-yellow-50 text-yellow-700" };
  if (score >= 30) return { label: "Difficult", grade: "College level", badgeCls: "bg-red-50 text-red-700" };
  return { label: "Very Difficult", grade: "College graduate", badgeCls: "bg-red-50 text-red-700" };
}

function gradeLabel(score: number | null, fallback = "—"): string {
  if (score === null) return fallback;
  const g = Math.round(score * 10) / 10;
  return g <= 0 ? "< 1" : `Grade ${g}`;
}

// ─── Gauge coloring ───────────────────────────────────────────────────────────
// Returns a CSS gradient for the Flesch gauge background
const GAUGE_GRADIENT =
  "linear-gradient(to right, #ef4444 0%, #ef4444 30%, #f97316 30%, #f97316 50%, #eab308 50%, #eab308 60%, #84cc16 60%, #84cc16 70%, #22c55e 70%, #22c55e 80%, #10b981 80%, #10b981 90%, #059669 90%, #059669 100%)";

// ─── Score Card ───────────────────────────────────────────────────────────────
function ScoreCard({
  name,
  score,
  badge,
  sub,
  tooltip,
}: {
  name: string;
  score: string;
  badge?: Level;
  sub: string;
  tooltip?: string;
}) {
  return (
    <div className="group relative flex flex-col gap-2 rounded-2xl border border-border bg-surface p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
      <div className="flex items-center justify-between gap-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">{name}</p>
        {tooltip && (
          <span title={tooltip} className="cursor-help text-text-secondary/40 hover:text-text-secondary">
            <Info className="h-3.5 w-3.5" />
          </span>
        )}
      </div>
      <p className="text-3xl font-extrabold text-text leading-none">{score}</p>
      {badge && (
        <span className={`self-start rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge.badgeCls}`}>
          {badge.label}
        </span>
      )}
      <p className="text-xs text-text-secondary">{sub}</p>
    </div>
  );
}

// ─── Stat row ─────────────────────────────────────────────────────────────────
function StatRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-border last:border-0">
      <span className="text-sm text-text-secondary">{label}</span>
      <span className="text-sm font-semibold text-text">{value}</span>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ReadabilityScore() {
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

  const analysis = useMemo(() => analyzeText(text), [text]);

  const handleCopy = useCallback(async () => {
    if (!text.trim()) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  const clearText = useCallback(() => setText(""), []);

  const isEmpty = !analysis;
  const tooShort = analysis && analysis.sentenceCount < 3;

  // Flesch score clamped to 0–100 for gauge
  const fleschClamped = analysis
    ? Math.min(100, Math.max(0, analysis.flesch))
    : 0;
  const fleschLvl = analysis ? fleschLevel(analysis.flesch) : null;

  return (
    <section className="animate-fade-in mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Ad slot */}
      <div className="mb-6 min-h-[90px]" aria-hidden="true" />

      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Free Readability Score Checker —{" "}
          <span className="text-primary">6 Scores Instantly</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-text-secondary sm:text-lg">
          Paste any text to instantly get Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning
          Fog, SMOG, ARI, and Coleman-Liau scores — all calculated in your browser.
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
        placeholder="Paste your text here to check readability…"
        aria-label="Text input for readability analysis"
        className="mt-4 min-h-[280px] w-full resize-y rounded-2xl border border-border bg-surface p-5 text-base leading-relaxed text-text shadow-sm transition-shadow placeholder:text-text-secondary/50 focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] sm:text-lg"
        spellCheck={false}
      />

      {/* Warning banners */}
      {isEmpty && (
        <div className="mt-4 rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-text-secondary">
          Paste any text above to instantly analyze its readability across 6 industry-standard metrics.
        </div>
      )}
      {!isEmpty && tooShort && (
        <div className="mt-4 flex items-start gap-2 rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm text-yellow-800">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          For accurate results, paste at least 3 sentences (ideally a full paragraph or more).
        </div>
      )}

      {/* ── Score Cards ── */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <ScoreCard
          name="Flesch Reading Ease"
          score={isEmpty ? "—" : String(analysis!.flesch)}
          badge={fleschLvl ?? undefined}
          sub={fleschLvl ? fleschLvl.grade : "Score 0–100, higher = easier"}
          tooltip="206.835 − 1.015 × (words/sentences) − 84.6 × (syllables/words)"
        />
        <ScoreCard
          name="Flesch-Kincaid Grade"
          score={isEmpty ? "—" : gradeLabel(analysis!.fkGrade)}
          sub={isEmpty ? "US school grade level" : `Grade ${analysis!.fkGrade}`}
          tooltip="0.39 × (words/sentences) + 11.8 × (syllables/words) − 15.59"
        />
        <ScoreCard
          name="Gunning Fog"
          score={isEmpty ? "—" : gradeLabel(analysis!.fogIndex)}
          sub={isEmpty ? "Grade level" : `Grade ${analysis!.fogIndex}`}
          tooltip="0.4 × (words/sentences + 100 × complex words/words)"
        />
        <ScoreCard
          name="SMOG Index"
          score={
            isEmpty
              ? "—"
              : analysis!.smog === null
              ? "N/A"
              : gradeLabel(analysis!.smog)
          }
          sub={
            isEmpty
              ? "Grade level"
              : analysis!.smog === null
              ? "Need 30+ sentences for accuracy"
              : `Grade ${analysis!.smog}`
          }
          tooltip="3 + √(complex words × 30/sentences) — needs 30+ sentences"
        />
        <ScoreCard
          name="ARI"
          score={isEmpty ? "—" : gradeLabel(analysis!.ari)}
          sub={isEmpty ? "Automated Readability Index" : `Grade ${analysis!.ari}`}
          tooltip="4.71 × (chars/words) + 0.5 × (words/sentences) − 21.43"
        />
        <ScoreCard
          name="Coleman-Liau"
          score={isEmpty ? "—" : gradeLabel(analysis!.colemanLiau)}
          sub={isEmpty ? "Grade level" : `Grade ${analysis!.colemanLiau}`}
          tooltip="0.0588 × (avg letters per 100 words) − 0.296 × (avg sentences per 100 words) − 15.8"
        />
      </div>

      {/* ── Text Statistics ── */}
      {!isEmpty && (
        <div className="mt-4 rounded-2xl border border-border bg-surface p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Text Statistics
            </h2>
          </div>
          <div className="grid gap-0 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <StatRow label="Total Words" value={analysis!.wordCount.toLocaleString()} />
              <StatRow label="Total Sentences" value={analysis!.sentenceCount.toLocaleString()} />
              <StatRow label="Total Syllables" value={analysis!.syllableCount.toLocaleString()} />
              <StatRow label="Total Characters (letters)" value={analysis!.charCount.toLocaleString()} />
            </div>
            <div>
              <StatRow label="Avg Syllables per Word" value={analysis!.avgSyllablesPerWord} />
              <StatRow label="Avg Words per Sentence" value={analysis!.avgWordsPerSentence} />
              <StatRow label="Complex Words (3+ syllables)" value={analysis!.complexWords.toLocaleString()} />
              <StatRow
                label="Complex Words %"
                value={
                  analysis!.wordCount > 0
                    ? `${Math.round((analysis!.complexWords / analysis!.wordCount) * 1000) / 10}%`
                    : "0%"
                }
              />
            </div>
          </div>
        </div>
      )}

      {/* ── Flesch Reading Ease Gauge ── */}
      <div className="mt-4 rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between gap-2">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
            Flesch Reading Ease Gauge
          </h2>
          {!isEmpty && (
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${fleschLvl?.badgeCls}`}>
              {fleschLvl?.label} — {fleschClamped}
            </span>
          )}
        </div>

        {/* Colored bar */}
        <div className="relative h-5 overflow-hidden rounded-full" style={{ background: GAUGE_GRADIENT }}>
          {/* Marker */}
          {!isEmpty && (
            <div
              className="absolute top-0 h-full w-0.5 bg-white shadow-[0_0_0_2px_rgba(0,0,0,0.25)] transition-all duration-500"
              style={{ left: `${fleschClamped}%` }}
            />
          )}
        </div>

        {/* Scale labels */}
        <div className="mt-1.5 flex justify-between text-[10px] text-text-secondary/60">
          <span>0<br/>Very Difficult</span>
          <span className="text-center">30<br/>Difficult</span>
          <span className="text-center">50<br/>Fairly Diff.</span>
          <span className="text-center">60<br/>Standard</span>
          <span className="text-center">70<br/>Fairly Easy</span>
          <span className="text-center">80<br/>Easy</span>
          <span className="text-right">100<br/>Very Easy</span>
        </div>
      </div>

      {/* ── Grade Level Summary ── */}
      {!isEmpty && (
        <div className="mt-4 rounded-2xl border border-border bg-surface-alt p-5 shadow-sm">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-text-secondary">
            Grade Level Summary
          </h2>
          <p className="text-sm leading-relaxed text-text-secondary">
            This text is suitable for{" "}
            <strong className="text-text">{fleschLvl?.grade}</strong> readers ({fleschLvl?.label}).
            The average adult reads at a Grade 8 level.
          </p>
          {analysis!.flesch < 60 && (
            <p className="mt-2 text-sm text-yellow-700">
              💡 Consider shortening sentences and using simpler words to improve readability.
            </p>
          )}
          {analysis!.flesch >= 80 && (
            <p className="mt-2 text-sm text-green-700">
              ✓ Your text is very accessible — great for a broad general audience.
            </p>
          )}
        </div>
      )}

      {/* Ad slot */}
      <div className="mt-8 min-h-[90px]" aria-hidden="true" />
    </section>
  );
}
