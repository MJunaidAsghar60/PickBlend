"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Wrench,
  Type,
  Clock,
  Hash,
  CaseSensitive,
  FileText,
  Home,
  Users,
  Mail,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const tools = [
  {
    name: "Word Counter",
    href: "/tools/word-counter",
    icon: Type,
    description: "Count words, characters & more",
  },
  {
    name: "Reading Time Calculator",
    href: "/tools/reading-time-calculator",
    icon: Clock,
    description: "Reading & speaking time estimates",
  },
  {
    name: "Character Counter",
    href: "/tools/character-counter",
    icon: Hash,
    description: "Count chars & check platform limits",
  },
  {
    name: "Text Case Converter",
    href: "/tools/case-converter",
    icon: CaseSensitive,
    description: "UPPER, lower, Title, camelCase & more",
  },
  {
    name: "Lorem Ipsum Generator",
    href: "/tools/lorem-ipsum-generator",
    icon: FileText,
    description: "Generate placeholder text instantly",
  },
];

const preToolLinks = [
  { name: "Home", href: "/", icon: Home },
];

const postToolLinks = [
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "About Us", href: "/about", icon: Users },
  { name: "Contact", href: "/contact", icon: Mail },
];

const mobileNavLinks = [...preToolLinks, ...postToolLinks];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setToolsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setToolsOpen(false);
    setMobileToolsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ===== Logo ===== */}
        <Link href="/" className="flex items-center gap-1">
          <span className="text-lg font-semibold tracking-tight">
            <span className="text-text">Pick</span><span className="text-primary">Blend</span>
          </span>
        </Link>

        {/* ===== Desktop Nav ===== */}
        <div className="hidden items-center gap-1 md:flex">
          {preToolLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                isActive(link.href)
                  ? "font-medium text-text"
                  : "text-text-secondary hover:bg-surface-alt hover:text-text"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Tools Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setToolsOpen(!toolsOpen)}
              aria-label="Tools menu"
              aria-expanded={toolsOpen}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                pathname.startsWith("/tools")
                  ? "font-medium text-text"
                  : "text-text-secondary hover:bg-surface-alt hover:text-text"
              }`}
            >
              <Wrench className="h-4 w-4" />
              Tools
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  toolsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {toolsOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 origin-top-right animate-fade-in rounded-2xl border border-border bg-surface p-2 shadow-[var(--shadow-lg)]">
                <div className="mb-1.5 px-3 pt-2">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-text-tertiary">
                    Our Tools
                  </p>
                </div>
                {tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${
                        pathname === tool.href
                          ? "bg-primary-subtle text-primary"
                          : "text-text hover:bg-surface-alt"
                      }`}
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          pathname === tool.href
                            ? "bg-primary/10"
                            : "bg-surface-alt"
                        }`}
                      >
                        <Icon className="h-4 w-4" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{tool.name}</p>
                        <p className="text-xs text-text-secondary">
                          {tool.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
                <div className="mt-1.5 flex items-center justify-between border-t border-border px-3 pb-1 pt-2">
                  <p className="text-xs italic text-text-tertiary">
                    10 tools total
                  </p>
                  <Link
                    href="/tools"
                    className="text-xs font-semibold text-primary hover:text-primary-dark hover:underline underline-offset-2 transition-colors"
                  >
                    View all →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {postToolLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                isActive(link.href)
                  ? "font-medium text-text"
                  : "text-text-secondary hover:bg-surface-alt hover:text-text"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Desktop CTA */}
          <Link
            href="/tools/word-counter"
            className="ml-2 inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-text-inverse shadow-[var(--shadow-primary)] transition-all hover:bg-primary-dark hover:shadow-lg"
          >
            Try Free
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* ===== Mobile Hamburger ===== */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-text-secondary transition-colors hover:text-text md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* ===== Mobile Menu ===== */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          <div className="relative mx-4 mt-2 animate-fade-in rounded-2xl border border-border bg-surface p-3 shadow-[var(--shadow-lg)]">
            {mobileNavLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base transition-colors ${
                    isActive(link.href)
                      ? "font-medium text-text"
                      : "text-text-secondary hover:bg-surface-alt hover:text-text"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {link.name}
                </Link>
              );
            })}

            {/* Tools Accordion */}
            <div className="mt-1">
              <button
                type="button"
                onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
                aria-label="Tools menu"
                aria-expanded={mobileToolsOpen}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base transition-colors ${
                  pathname.startsWith("/tools")
                    ? "font-medium text-text"
                    : "text-text-secondary hover:bg-surface-alt hover:text-text"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Wrench className="h-4 w-4" />
                  Tools
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileToolsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileToolsOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-border pl-4">
                  {tools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                          pathname === tool.href
                            ? "font-medium text-primary bg-primary-subtle"
                            : "text-text-secondary hover:bg-surface-alt hover:text-text"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {tool.name}
                      </Link>
                    );
                  })}
                  <Link
                    href="/tools"
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-primary hover:bg-primary-subtle transition-colors"
                  >
                    View all 10 tools →
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile CTA */}
            <div className="mt-3 border-t border-border pt-3">
              <Link
                href="/tools/word-counter"
                className="flex w-full items-center justify-center rounded-xl bg-primary py-3 text-center text-base font-medium text-text-inverse shadow-[var(--shadow-primary)] transition-all hover:bg-primary-dark"
              >
                Try Free →
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
