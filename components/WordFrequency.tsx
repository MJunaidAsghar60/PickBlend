"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Copy, Check, Eraser, RotateCcw, ChevronUp, ChevronDown } from "lucide-react";

const STORAGE_KEY = "pickblend-word-frequency";

const STOP_WORDS = new Set([
  "the","a","an","and","or","but","in","on","at","to",
  "for","of","with","by","from","is","was","are","were",
  "be","been","being","have","has","had","do","does","did",
  "will","would","could","should","may","might","shall",
  "this","that","these","those","it","its","i","you","he",
  "she","we","they","me","him","her","us","them","my","your",
  "his","our","their","what","which","who","not","as","if",
  "so","than","then","when","there","here","how","all","each",
  "both","few","more","most","other","some","such","no","only",
  "same","also","just","because","while","about","after",
  "before","between","into","through","during","without",
  "within","along","following","across","behind","beyond",
]);

type SortKey = "rank" | "word" | "count" | "pct";
type SortDir = "asc" | "desc";

interface WordEntry {
  rank: number;
  word: string;
  count: number;
  pct: number;
}

function processText(
  text: string,
  minLength: number,
  excludeStops: boolean,
  topN: number | "all"
): { entries: WordEntry[]; totalWords: number; uniqueWords: number } {
  if (!text.trim()) return { entries: [], totalWords: 0, uniqueWords: 0 };

  const rawWords = text.trim().split(/\s+/).filter(Boolean);
  const totalWords = rawWords.length;

  const cleaned = rawWords
    .map((w) => w.toLowerCase().replace(/[^a-zA-Z'-]/g, "").replace(/^['-]+|['-]+$/g, ""))
    .filter((w) => w.length >= minLength)
    .filter((w) => !excludeStops || !STOP_WORDS.has(w));

  const freq = new Map<string, number>();
  for (const w of cleaned) {
    freq.set(w, (freq.get(w) ?? 0) + 1);
  }

  const uniqueWords = freq.size;

  const sorted = Array.from(freq.entries()).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );

  const limited = topN === "all" ? sorted : sorted.slice(0, topN);

  const entries: WordEntry[] = limited.map(([word, count], i) => ({
    rank: i + 1,
    word,
    count,
    pct: totalWords > 0 ? Math.round((count / totalWords) * 1000) / 10 : 0,
  }));

  return { entries, totalWords, uniqueWords };
}

function SortIcon({ active, dir }: { active: boolean; dir: SortDir }) {
  if (!active) return <ChevronDown className="h-3 w-3 opacity-30" />;
  return dir === "desc"
    ? <ChevronDown className="h-3 w-3 text-primary" />
    : <ChevronUp className="h-3 w-3 text-primary" />;
}

export default function WordFrequency() {
  const [text, setText] = useState("");
  const [minLength, setMinLength] = useState(3);
  const [topN, setTopN] = useState<number | "all">(20);
  const [excludeStops, setExcludeStops] = useState(true);
  const [sortKey, setSortKey] = useState<SortKey>("count");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
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

  const { entries, totalWords, uniqueWords } = useMemo(
    () => processText(text, minLength, excludeStops, topN),
    [text, minLength, excludeStops, topN]
  );

  const sorted = useMemo(() => {
    const copy = [...entries];
    copy.sort((a, b) => {
      const mult = sortDir === "asc" ? 1 : -1;
      if (sortKey === "word") return mult * a.word.localeCompare(b.word);
      if (sortKey === "count") return mult * (a.count - b.count);
      if (sortKey === "pct") return mult * (a.pct - b.pct);
      return mult * (a.rank - b.rank);
    });
    return copy;
  }, [entries, sortKey, sortDir]);

  const vocabRichness =
    totalWords > 0 ? Math.round((uniqueWords / totalWords) * 1000) / 10 : 0;
  const mostUsed = entries.length > 0 ? entries[0] : null;
  const maxCount = entries.length > 0 ? entries[0].count : 1;
  const isEmpty = text.trim() === "";

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir(key === "word" ? "asc" : "desc");
    }
  };

  const handleCopyTable = useCallback(async () => {
    if (sorted.length === 0) return;
    const lines = [
      "#\tWord\tCount\tFrequency %",
      ...sorted.map((e) => `${e.rank}\t${e.word}\t${e.count}\t${e.pct}%`),
    ];
    await navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [sorted]);

  const clearText = useCallback(() => setText(""), []);

  return (
    <section className="animate-fade-in mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Ad slot */}
      <div className="mb-6 min-h-[90px]" aria-hidden="true" />

      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Free Word Frequency Counter —{" "}
          <span className="text-primary">Analyze Word Usage</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-text-secondary sm:text-lg">
          Paste any text to see which words appear most often. Filter stop words, set minimum word
          length, and sort by rank, word or frequency. Perfect for SEO keyword research.
        </p>
      </header>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-surface p-3 shadow-sm">
        <button
          type="button"
          onClick={handleCopyTable}
          disabled={sorted.length === 0}
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
          {copied ? "Copied!" : "Copy Table"}
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
        placeholder="Paste your text here to analyze word frequency..."
        aria-label="Text input for word frequency analysis"
        className="mt-4 min-h-[280px] w-full resize-y rounded-2xl border border-border bg-surface p-5 text-base leading-relaxed text-text shadow-sm transition-shadow placeholder:text-text-secondary/50 focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] sm:text-lg"
        spellCheck={false}
      />

      {/* Controls bar */}
      <div className="mt-4 flex flex-wrap items-center gap-5 rounded-2xl border border-border bg-surface p-4 shadow-sm">
        {/* Min word length */}
        <label className="flex items-center gap-2 text-sm">
          <span className="font-medium text-text-secondary">Min letters</span>
          <input
            type="number"
            min={1}
            max={20}
            value={minLength}
            onChange={(e) =>
              setMinLength(Math.max(1, parseInt(e.target.value) || 1))
            }
            className="w-16 rounded-lg border border-border bg-surface-hover px-2 py-1 text-sm text-text focus:border-primary focus:outline-none"
          />
        </label>

        {/* Top N */}
        <label className="flex items-center gap-2 text-sm">
          <span className="font-medium text-text-secondary">Show</span>
          <select
            value={topN === "all" ? "all" : String(topN)}
            onChange={(e) =>
              setTopN(e.target.value === "all" ? "all" : parseInt(e.target.value))
            }
            className="rounded-lg border border-border bg-surface-hover px-2 py-1 text-sm text-text focus:border-primary focus:outline-none"
          >
            <option value="10">Top 10</option>
            <option value="20">Top 20</option>
            <option value="50">Top 50</option>
            <option value="100">Top 100</option>
            <option value="all">All words</option>
          </select>
        </label>

        {/* Stop words toggle */}
        <label className="flex cursor-pointer select-none items-center gap-2 text-sm">
          <div className="relative">
            <input
              type="checkbox"
              checked={excludeStops}
              onChange={(e) => setExcludeStops(e.target.checked)}
              className="sr-only"
            />
            <div
              className={`h-5 w-9 rounded-full transition-colors ${
                excludeStops ? "bg-primary" : "border border-border bg-surface-hover"
              }`}
            />
            <div
              className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
                excludeStops ? "translate-x-4" : "translate-x-0.5"
              }`}
            />
          </div>
          <span className="font-medium text-text-secondary">Exclude common words</span>
        </label>
      </div>

      {/* Empty state */}
      {isEmpty && (
        <div className="mt-4 rounded-xl border border-border bg-surface-alt px-4 py-6 text-center text-sm text-text-secondary">
          <p className="font-medium text-text">
            Paste text above to see word frequency analysis.
          </p>
          <p className="mt-1">Great for SEO keyword research and content optimization.</p>
        </div>
      )}

      {/* Results */}
      {!isEmpty && (
        <>
          {/* Summary stats */}
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                Unique Words
              </p>
              <p className="mt-1 text-2xl font-bold text-text">
                {uniqueWords.toLocaleString()}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                Total Words
              </p>
              <p className="mt-1 text-2xl font-bold text-text">
                {totalWords.toLocaleString()}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                Most Used
              </p>
              <p className="mt-1 truncate text-2xl font-bold text-text">
                {mostUsed ? mostUsed.word : "—"}
              </p>
              {mostUsed && (
                <p className="text-xs text-text-secondary">{mostUsed.count}×</p>
              )}
            </div>
            <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                Vocab Richness
              </p>
              <p className="mt-1 text-2xl font-bold text-text">{vocabRichness}%</p>
              <p className="text-xs text-text-secondary">unique / total</p>
            </div>
          </div>

          {/* Frequency table */}
          {sorted.length === 0 ? (
            <div className="mt-4 rounded-xl border border-border bg-surface-alt px-4 py-4 text-center text-sm text-text-secondary">
              No words match the current filters. Try reducing the minimum word length or
              disabling the stop words filter.
            </div>
          ) : (
            <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-alt">
                    <th className="py-3 pl-4 pr-2 text-left">
                      <button
                        type="button"
                        onClick={() => handleSort("rank")}
                        className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-text"
                      >
                        # <SortIcon active={sortKey === "rank"} dir={sortDir} />
                      </button>
                    </th>
                    <th className="px-2 py-3 text-left">
                      <button
                        type="button"
                        onClick={() => handleSort("word")}
                        className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-text"
                      >
                        Word <SortIcon active={sortKey === "word"} dir={sortDir} />
                      </button>
                    </th>
                    <th className="px-2 py-3 text-left">
                      <button
                        type="button"
                        onClick={() => handleSort("count")}
                        className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-text"
                      >
                        Count <SortIcon active={sortKey === "count"} dir={sortDir} />
                      </button>
                    </th>
                    <th className="px-2 py-3 text-left">
                      <button
                        type="button"
                        onClick={() => handleSort("pct")}
                        className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-text"
                      >
                        Freq % <SortIcon active={sortKey === "pct"} dir={sortDir} />
                      </button>
                    </th>
                    <th className="py-3 pl-2 pr-4 text-left">
                      <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                        Bar
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {sorted.map((entry) => (
                    <tr
                      key={entry.word}
                      className="transition-colors hover:bg-surface-alt/50"
                    >
                      <td className="py-2.5 pl-4 pr-2 font-mono text-xs tabular-nums text-text-secondary">
                        #{entry.rank}
                      </td>
                      <td className="px-2 py-2.5 font-medium text-text">{entry.word}</td>
                      <td className="px-2 py-2.5 font-mono text-sm tabular-nums text-text">
                        {entry.count.toLocaleString()}
                      </td>
                      <td className="px-2 py-2.5 font-mono text-xs tabular-nums text-text-secondary">
                        {entry.pct}%
                      </td>
                      <td className="py-2.5 pl-2 pr-4">
                        <div className="h-2 w-full min-w-[60px] max-w-[160px] overflow-hidden rounded-full bg-surface-hover">
                          <div
                            className="h-2 rounded-full bg-primary transition-all duration-300"
                            style={{
                              width: `${Math.round((entry.count / maxCount) * 100)}%`,
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {/* Ad slot */}
      <div className="mt-8 min-h-[90px]" aria-hidden="true" />
    </section>
  );
}
