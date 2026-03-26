"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      errs.name = "Name must be at least 2 characters.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email))
      errs.email = "Please enter a valid email address.";
    if (!form.message.trim() || form.message.trim().length < 10)
      errs.message = "Message must be at least 10 characters.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error || "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setServerError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-800">Message sent!</h3>
        <p className="mt-2 text-sm text-green-700">We&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-text">
          Name <span className="text-accent-red">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          className={`w-full rounded-xl border bg-surface px-4 py-3 text-sm text-text shadow-sm transition-shadow placeholder:text-text-secondary/50 focus:outline-none focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] ${
            errors.name
              ? "border-red-400 focus:border-red-400"
              : "border-border focus:border-primary-light"
          }`}
        />
        {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-text">
          Email <span className="text-accent-red">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.com"
          className={`w-full rounded-xl border bg-surface px-4 py-3 text-sm text-text shadow-sm transition-shadow placeholder:text-text-secondary/50 focus:outline-none focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] ${
            errors.email
              ? "border-red-400 focus:border-red-400"
              : "border-border focus:border-primary-light"
          }`}
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-text">
          Subject <span className="text-text-secondary/60 font-normal">(optional)</span>
        </label>
        <select
          id="contact-subject"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text shadow-sm transition-shadow focus:border-primary-light focus:outline-none focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
        >
          <option value="">Select a topic…</option>
          <option value="Bug report or technical issue">Bug report or technical issue</option>
          <option value="Feature request">Feature request</option>
          <option value="Suggestion for existing tool">Suggestion for existing tool</option>
          <option value="General question">General question</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-text">
          Message <span className="text-accent-red">*</span>
        </label>
        <textarea
          id="contact-message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us what's on your mind…"
          rows={6}
          className={`w-full resize-y rounded-xl border bg-surface px-4 py-3 text-sm text-text shadow-sm transition-shadow placeholder:text-text-secondary/50 focus:outline-none focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] ${
            errors.message
              ? "border-red-400 focus:border-red-400"
              : "border-border focus:border-primary-light"
          }`}
          style={{ minHeight: "160px" }}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
      </div>

      {/* Server error */}
      {serverError && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {serverError}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary/90 focus:outline-none focus:shadow-[0_0_0_3px_rgba(37,99,235,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
