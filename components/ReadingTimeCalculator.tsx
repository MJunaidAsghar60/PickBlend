"use client";

import { useState, useMemo, useCallback } from "react";
import {
  Clock,
  Mic,
  BookOpen,
  MonitorPlay,
  Presentation,
  Headphones,
  Calculator,
  RotateCcw,
  ArrowRightLeft,
  FileText,
  Timer,
  Gauge,
} from "lucide-react";

/* =============================================
   Constants
   ============================================= */

const READING_SPEEDS = {
  slow: { wpm: 150, label: "Slow Reader" },
  average: { wpm: 275, label: "Average Reader" },
  fast: { wpm: 450, label: "Fast Reader" },
} as const;

const SPEAKING_SPEEDS = {
  slow: { wpm: 110, label: "Slow / Careful" },
  conversational: { wpm: 130, label: "Conversational" },
  presentation: { wpm: 150, label: "Presentation" },
  fast: { wpm: 170, label: "Fast / Energetic" },
  audiobook: { wpm: 155, label: "Audiobook Narrator" },
} as const;

type ReadingSpeed = keyof typeof READING_SPEEDS;
type SpeakingSpeed = keyof typeof SPEAKING_SPEEDS;
type InputMode = "text" | "wordcount";

const CONTENT_BENCHMARKS = [
  { label: "Tweet / X Post", words: 40, icon: "short" },
  { label: "Instagram Caption", words: 150, icon: "short" },
  { label: "Email Newsletter", words: 500, icon: "medium" },
  { label: "Blog Post", words: 1500, icon: "medium" },
  { label: "Long-Form Article", words: 3000, icon: "long" },
  { label: "eBook Chapter", words: 5000, icon: "long" },
  { label: "Conference Talk (18 min)", words: 2340, icon: "speak" },
  { label: "TED Talk (12 min)", words: 1560, icon: "speak" },
  { label: "Podcast Episode (30 min)", words: 4650, icon: "speak" },
  { label: "YouTube Video (10 min)", words: 1500, icon: "speak" },
];

/* =============================================
   Utilities
   ============================================= */

function formatTime(totalMinutes: number): string {
  if (totalMinutes <= 0) return "0 sec";
  const hrs = Math.floor(totalMinutes / 60);
  const mins = Math.floor(totalMinutes % 60);
  const secs = Math.round((totalMinutes - Math.floor(totalMinutes)) * 60);
  const parts: string[] = [];
  if (hrs > 0) parts.push(`${hrs} hr`);
  if (mins > 0) parts.push(`${mins} min`);
  if (secs > 0 && hrs === 0) parts.push(`${secs} sec`);
  return parts.join(" ") || "0 sec";
}

function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).filter(Boolean).length;
}

function estimatePages(words: number): string {
  const single = (words / 250).toFixed(1);
  const double = (words / 500).toFixed(1);
  return `${single} single-spaced / ${double} double-spaced`;
}

/* =============================================
   Sub-Components
   ============================================= */

function ResultCard({
  icon: Icon,
  label,
  value,
  sub,
  color,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub?: string;
  color: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4 shadow-sm">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${color}`}
      >
        <Icon className="h-5 w-5 text-white" strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
          {label}
        </p>
        <p className="animate-count text-lg font-bold text-text">{value}</p>
        {sub && (
          <p className="mt-0.5 text-xs text-text-secondary">{sub}</p>
        )}
      </div>
    </div>
  );
}

function SpeedSelector<T extends string>({
  options,
  value,
  onChange,
}: {
  options: Record<T, { wpm: number; label: string }>;
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {(Object.keys(options) as T[]).map((key) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
            value === key
              ? "bg-primary text-white shadow-sm"
              : "bg-surface-alt text-text-secondary hover:bg-surface-hover hover:text-text"
          }`}
        >
          {options[key].label}{" "}
          <span className="opacity-60">({options[key].wpm})</span>
        </button>
      ))}
    </div>
  );
}

/* =============================================
   Main Component
   ============================================= */

export default function ReadingTimeCalculator() {
  const [inputMode, setInputMode] = useState<InputMode>("text");
  const [text, setText] = useState("");
  const [manualCount, setManualCount] = useState("");
  const [readingSpeed, setReadingSpeed] = useState<ReadingSpeed>("average");
  const [speakingSpeed, setSpeakingSpeed] =
    useState<SpeakingSpeed>("conversational");

  const wordCount = useMemo(
    () => (inputMode === "text" ? countWords(text) : parseInt(manualCount) || 0),
    [inputMode, text, manualCount]
  );

  const results = useMemo(() => {
    if (wordCount <= 0) return null;

    const readWpm = READING_SPEEDS[readingSpeed].wpm;
    const speakWpm = SPEAKING_SPEEDS[speakingSpeed].wpm;

    return {
      readingTime: formatTime(wordCount / readWpm),
      speakingTime: formatTime(wordCount / speakWpm),
      readingSlow: formatTime(wordCount / READING_SPEEDS.slow.wpm),
      readingFast: formatTime(wordCount / READING_SPEEDS.fast.wpm),
      pages: estimatePages(wordCount),
      charEstimate: (wordCount * 5).toLocaleString(),
      wordsFormatted: wordCount.toLocaleString(),
    };
  }, [wordCount, readingSpeed, speakingSpeed]);

  const handleReset = useCallback(() => {
    setText("");
    setManualCount("");
  }, []);

  return (
    <section className="animate-fade-in mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* ---------- Top Banner Ad Slot ---------- */}
      <div className="mb-6 min-h-[90px]" aria-hidden="true"></div>

      {/* ---------- Header ---------- */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Reading Time{" "}
          <span className="text-primary">Calculator</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-text-secondary sm:text-lg">
          Find out exactly how long it takes to read or speak your content.
          Paste text or enter a word count — results update instantly.
        </p>
      </header>

      {/* ---------- Main Grid ---------- */}
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        {/* === LEFT: Input === */}
        <div className="flex flex-col gap-4">
          {/* Input Mode Toggle */}
          <div className="flex items-center gap-2 rounded-2xl border border-border bg-surface p-3 shadow-sm">
            <button
              type="button"
              onClick={() => setInputMode("text")}
              className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                inputMode === "text"
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-secondary hover:bg-surface-hover hover:text-text"
              }`}
            >
              <FileText className="h-4 w-4" />
              Paste Text
            </button>
            <button
              type="button"
              onClick={() => setInputMode("wordcount")}
              className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                inputMode === "wordcount"
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-secondary hover:bg-surface-hover hover:text-text"
              }`}
            >
              <Calculator className="h-4 w-4" />
              Enter Word Count
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="ml-auto inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-text-secondary hover:bg-red-50 hover:text-accent-red transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </button>
          </div>

          {/* Input Area */}
          {inputMode === "text" ? (
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your article, essay, speech, or any text here..."
              aria-label="Text input for reading time calculation"
              className="min-h-[320px] w-full resize-y rounded-2xl border border-border bg-surface p-5 text-base leading-relaxed text-text shadow-sm transition-shadow placeholder:text-text-secondary/50 focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] sm:text-lg"
              spellCheck={false}
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-surface p-10 shadow-sm">
              <label
                htmlFor="word-count-input"
                className="text-sm font-medium text-text-secondary"
              >
                Enter your total word count
              </label>
              <input
                id="word-count-input"
                type="number"
                min="0"
                max="10000000"
                value={manualCount}
                onChange={(e) => setManualCount(e.target.value)}
                placeholder="e.g. 1500"
                className="w-48 rounded-xl border border-border bg-surface-alt px-4 py-3 text-center text-2xl font-bold text-text shadow-sm transition-shadow placeholder:text-text-secondary/40 focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] focus:outline-none"
              />
              <p className="text-xs text-text-secondary">
                Tip: Most blog posts are 1,000–2,500 words
              </p>
            </div>
          )}

          {/* Word count badge */}
          {wordCount > 0 && (
            <div className="flex items-center justify-center gap-2 rounded-xl bg-primary/5 py-2 text-sm font-medium text-primary">
              <ArrowRightLeft className="h-4 w-4" />
              {wordCount.toLocaleString()} words detected
            </div>
          )}

          {/* Speed Controls */}
          <div className="space-y-4 rounded-2xl border border-border bg-surface p-5 shadow-sm">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <p className="text-sm font-semibold text-text">
                  Reading Speed
                </p>
              </div>
              <SpeedSelector
                options={READING_SPEEDS}
                value={readingSpeed}
                onChange={setReadingSpeed}
              />
            </div>
            <div className="border-t border-border pt-4">
              <div className="mb-2 flex items-center gap-2">
                <Mic className="h-4 w-4 text-accent-teal" />
                <p className="text-sm font-semibold text-text">
                  Speaking Speed
                </p>
              </div>
              <SpeedSelector
                options={SPEAKING_SPEEDS}
                value={speakingSpeed}
                onChange={setSpeakingSpeed}
              />
            </div>
          </div>

          {/* Content Benchmarks (Desktop) */}
          <div className="hidden rounded-2xl border border-border bg-surface p-5 shadow-sm lg:block">
            <div className="mb-4 flex items-center gap-2">
              <Gauge className="h-5 w-5 text-primary" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                Content Benchmarks
              </h2>
            </div>
            <BenchmarkTable
              readWpm={READING_SPEEDS[readingSpeed].wpm}
              speakWpm={SPEAKING_SPEEDS[speakingSpeed].wpm}
            />
          </div>
        </div>

        {/* === RIGHT: Results Sidebar === */}
        <aside className="flex flex-col gap-4">
          {results ? (
            <>
              <div className="flex flex-col gap-3">
                <ResultCard
                  icon={Clock}
                  label="Reading Time"
                  value={results.readingTime}
                  sub={`at ${READING_SPEEDS[readingSpeed].wpm} wpm (${READING_SPEEDS[readingSpeed].label})`}
                  color="bg-primary"
                />
                <ResultCard
                  icon={Mic}
                  label="Speaking Time"
                  value={results.speakingTime}
                  sub={`at ${SPEAKING_SPEEDS[speakingSpeed].wpm} wpm (${SPEAKING_SPEEDS[speakingSpeed].label})`}
                  color="bg-accent-teal"
                />
                <ResultCard
                  icon={BookOpen}
                  label="Reading Range"
                  value={`${results.readingSlow} – ${results.readingFast}`}
                  sub="Slow reader to fast reader"
                  color="bg-accent-sky"
                />
                <ResultCard
                  icon={MonitorPlay}
                  label="Video Script"
                  value={formatTime(wordCount / 150)}
                  sub="Estimated at 150 wpm narration pace"
                  color="bg-accent-orange"
                />
                <ResultCard
                  icon={Presentation}
                  label="Presentation"
                  value={formatTime(wordCount / 130)}
                  sub="With pauses for slides at 130 wpm"
                  color="bg-accent-green"
                />
                <ResultCard
                  icon={Headphones}
                  label="Audiobook / Podcast"
                  value={formatTime(wordCount / 155)}
                  sub="Narrated at 155 wpm"
                  color="bg-accent-red"
                />
              </div>

              {/* Quick stats strip */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-surface p-3 text-center shadow-sm">
                  <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                    Words
                  </p>
                  <p className="text-lg font-bold text-text">
                    {results.wordsFormatted}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-surface p-3 text-center shadow-sm">
                  <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                    Est. Characters
                  </p>
                  <p className="text-lg font-bold text-text">
                    {results.charEstimate}
                  </p>
                </div>
                <div className="col-span-2 rounded-xl border border-border bg-surface p-3 text-center shadow-sm">
                  <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                    Page Estimate (12pt, A4)
                  </p>
                  <p className="text-sm font-bold text-text">{results.pages}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface p-10 text-center shadow-sm">
              <Timer className="mb-3 h-10 w-10 text-text-secondary/30" />
              <p className="text-sm font-medium text-text-secondary">
                Paste text or enter a word count to see results
              </p>
            </div>
          )}

          {/* Sidebar Ad Slot */}
          <div className="min-h-[250px]" aria-hidden="true"></div>

          {/* Content Benchmarks (Mobile) */}
          <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm lg:hidden">
            <div className="mb-4 flex items-center gap-2">
              <Gauge className="h-5 w-5 text-primary" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                Content Benchmarks
              </h2>
            </div>
            <BenchmarkTable
              readWpm={READING_SPEEDS[readingSpeed].wpm}
              speakWpm={SPEAKING_SPEEDS[speakingSpeed].wpm}
            />
          </div>
        </aside>
      </div>

      {/* ---------- In-Content Ad Slot ---------- */}
      <div className="mt-8 min-h-[90px]" aria-hidden="true"></div>
    </section>
  );
}

/* =============================================
   Benchmark Table
   ============================================= */

function BenchmarkTable({
  readWpm,
  speakWpm,
}: {
  readWpm: number;
  speakWpm: number;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-surface-alt text-xs uppercase tracking-wider text-text-secondary">
            <th className="px-4 py-2.5 font-semibold">Content Type</th>
            <th className="px-4 py-2.5 text-center font-semibold">Words</th>
            <th className="px-4 py-2.5 text-right font-semibold">Read</th>
            <th className="px-4 py-2.5 text-right font-semibold">Speak</th>
          </tr>
        </thead>
        <tbody>
          {CONTENT_BENCHMARKS.map((b, i) => (
            <tr
              key={b.label}
              className={`border-t border-border transition-colors hover:bg-surface-hover ${
                i % 2 === 0 ? "bg-surface" : "bg-surface-alt/50"
              }`}
            >
              <td className="px-4 py-2.5 font-medium text-text">
                {b.label}
              </td>
              <td className="px-4 py-2.5 text-center text-text-secondary">
                {b.words.toLocaleString()}
              </td>
              <td className="px-4 py-2.5 text-right text-text-secondary">
                {formatTime(b.words / readWpm)}
              </td>
              <td className="px-4 py-2.5 text-right text-text-secondary">
                {formatTime(b.words / speakWpm)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
