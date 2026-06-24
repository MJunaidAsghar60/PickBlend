"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  Play,
  Pause,
  Square,
  Volume2,
  Gauge,
  Music2,
  Hash,
  RotateCcw,
} from "lucide-react";

const STORAGE_KEY = "pickblend-tts";

type PlaybackStatus = "idle" | "speaking" | "paused";

export default function TextToSpeech() {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState("");
  const [rate, setRate] = useState(1.0);
  const [pitch, setPitch] = useState(1.0);
  const [volume, setVolume] = useState(1.0);
  const [status, setStatus] = useState<PlaybackStatus>("idle");
  const [hydrated, setHydrated] = useState(false);
  const uttRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Hydrate from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setText(saved);
    setHydrated(true);
  }, []);

  // Persist text
  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, text);
  }, [text, hydrated]);

  // Load voices
  useEffect(() => {
    function loadVoices() {
      const v = window.speechSynthesis.getVoices();
      if (v.length > 0) {
        setVoices(v);
        if (!selectedVoiceURI) {
          const english = v.find((voice) => voice.lang.startsWith("en"));
          setSelectedVoiceURI(english ? english.voiceURI : v[0].voiceURI);
        }
      }
    }

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
      window.speechSynthesis.cancel();
    };
  }, [selectedVoiceURI]);

  const selectedVoice = voices.find((v) => v.voiceURI === selectedVoiceURI) ?? null;

  // Sort voices: English first, then by language
  const sortedVoices = [...voices].sort((a, b) => {
    const aEn = a.lang.startsWith("en") ? 0 : 1;
    const bEn = b.lang.startsWith("en") ? 0 : 1;
    if (aEn !== bEn) return aEn - bEn;
    return a.lang.localeCompare(b.lang) || a.name.localeCompare(b.name);
  });

  const speak = useCallback(() => {
    if (!text.trim()) return;
    const synth = window.speechSynthesis;
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    if (selectedVoice) utterance.voice = selectedVoice;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;
    utterance.onstart = () => setStatus("speaking");
    utterance.onpause = () => setStatus("paused");
    utterance.onresume = () => setStatus("speaking");
    utterance.onend = () => setStatus("idle");
    utterance.onerror = () => setStatus("idle");
    uttRef.current = utterance;
    synth.speak(utterance);
  }, [text, selectedVoice, rate, pitch, volume]);

  const handlePlayPause = useCallback(() => {
    const synth = window.speechSynthesis;
    if (status === "idle") {
      speak();
    } else if (status === "speaking") {
      synth.pause();
    } else if (status === "paused") {
      synth.resume();
    }
  }, [status, speak]);

  const handleStop = useCallback(() => {
    window.speechSynthesis.cancel();
    setStatus("idle");
  }, []);

  return (
    <section className="animate-fade-in mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Ad slot */}
      <div className="mb-6 min-h-[90px]" aria-hidden="true" />

      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-text sm:text-4xl">
          Free Text to Speech —{" "}
          <span className="text-primary">Convert Text to Natural Audio</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-text-secondary">
          Type or paste any text and hear it read aloud instantly. Multiple voices, adjustable speed
          and pitch. 100% private — your text never leaves your browser.
        </p>
      </header>

      {/* Main editor card */}
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-sm)]">
        {/* Textarea */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste any text here to convert it to speech..."
          aria-label="Text input for text to speech"
          className="min-h-[240px] w-full resize-y bg-surface p-5 text-base leading-relaxed text-text placeholder:text-text-tertiary focus:outline-none"
          spellCheck={false}
        />

        {/* Character count bar */}
        <div className="flex items-center justify-between border-t border-border bg-surface-alt px-4 py-2">
          <span className="flex items-center gap-1.5 text-xs text-text-tertiary">
            <Hash className="h-3 w-3" />
            {text.length.toLocaleString()} characters
          </span>
          <span className="flex items-center gap-1 text-xs text-text-tertiary">
            <RotateCcw className="h-3 w-3" />
            Auto-saved
          </span>
        </div>
      </div>

      {/* Controls panel */}
      <div className="mt-4 rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-sm)]">
        {/* Voice selector */}
        <div className="mb-5">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Voice
          </label>
          {voices.length > 0 ? (
            <select
              value={selectedVoiceURI}
              onChange={(e) => setSelectedVoiceURI(e.target.value)}
              className="w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-text focus:border-primary focus:outline-none"
            >
              {sortedVoices.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {v.name} ({v.lang})
                </option>
              ))}
            </select>
          ) : (
            <p className="rounded-xl border border-border bg-surface-alt px-3 py-2.5 text-sm text-text-tertiary">
              Your browser&apos;s voices are loading. If none appear, try Chrome or Edge for the best experience.
            </p>
          )}
        </div>

        {/* Sliders grid */}
        <div className="grid gap-5 sm:grid-cols-3">
          {/* Speed */}
          <div>
            <label className="mb-1.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-text-secondary">
              <span className="flex items-center gap-1"><Gauge className="h-3 w-3" /> Speed</span>
              <span className="font-bold text-text">{rate.toFixed(1)}x</span>
            </label>
            <input
              type="range"
              min={0.5}
              max={2}
              step={0.1}
              value={rate}
              onChange={(e) => setRate(parseFloat(e.target.value))}
              className="w-full accent-primary"
            />
          </div>

          {/* Pitch */}
          <div>
            <label className="mb-1.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-text-secondary">
              <span className="flex items-center gap-1"><Music2 className="h-3 w-3" /> Pitch</span>
              <span className="font-bold text-text">{pitch.toFixed(1)}</span>
            </label>
            <input
              type="range"
              min={0}
              max={2}
              step={0.1}
              value={pitch}
              onChange={(e) => setPitch(parseFloat(e.target.value))}
              className="w-full accent-primary"
            />
          </div>

          {/* Volume */}
          <div>
            <label className="mb-1.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-text-secondary">
              <span className="flex items-center gap-1"><Volume2 className="h-3 w-3" /> Volume</span>
              <span className="font-bold text-text">{Math.round(volume * 100)}%</span>
            </label>
            <input
              type="range"
              min={0}
              max={1}
              step={0.1}
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-full accent-primary"
            />
          </div>
        </div>

        {/* Playback buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handlePlayPause}
            disabled={!text.trim() && status === "idle"}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-text-inverse shadow-[var(--shadow-primary)] transition-all hover:bg-primary-dark hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
          >
            {status === "speaking" ? (
              <><Pause className="h-4 w-4" /> Pause</>
            ) : status === "paused" ? (
              <><Play className="h-4 w-4" /> Resume</>
            ) : (
              <><Play className="h-4 w-4" /> Play</>
            )}
          </button>

          {status !== "idle" && (
            <button
              type="button"
              onClick={handleStop}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-accent-red-bg hover:text-accent-red"
            >
              <Square className="h-4 w-4" />
              Stop
            </button>
          )}

          {/* Speaking indicator */}
          {status === "speaking" && (
            <span className="ml-2 flex items-center gap-1.5 text-xs font-medium text-primary">
              <span className="flex gap-0.5">
                <span className="inline-block h-2 w-0.5 animate-pulse rounded-full bg-primary" />
                <span className="inline-block h-3 w-0.5 animate-pulse rounded-full bg-primary [animation-delay:75ms]" />
                <span className="inline-block h-2 w-0.5 animate-pulse rounded-full bg-primary [animation-delay:150ms]" />
                <span className="inline-block h-3.5 w-0.5 animate-pulse rounded-full bg-primary [animation-delay:225ms]" />
                <span className="inline-block h-2 w-0.5 animate-pulse rounded-full bg-primary [animation-delay:300ms]" />
              </span>
              Speaking…
            </span>
          )}

          {status === "paused" && (
            <span className="ml-2 text-xs font-medium text-accent-amber">Paused</span>
          )}
        </div>
      </div>

      {/* Tip */}
      <div className="mt-4 rounded-xl border border-border bg-surface-alt px-4 py-3 text-xs leading-relaxed text-text-secondary">
        <strong className="text-text">Tip:</strong> The Web Speech API plays audio directly in your browser.
        To save the audio, use your device&apos;s screen recorder or system audio capture while the text is being read aloud.
      </div>

      {/* Ad slot */}
      <div className="mt-8 min-h-[90px]" aria-hidden="true" />
    </section>
  );
}
