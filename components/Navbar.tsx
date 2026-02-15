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
  Home,
  Users,
  Mail,
  Sparkles,
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
];

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "/about", icon: Users },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on outside click
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setToolsOpen(false);
    setMobileToolsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ===== Logo ===== */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-md shadow-primary/20 transition-transform group-hover:scale-105">
            <Sparkles className="h-5 w-5 text-white" strokeWidth={2.2} />
          </div>
          <span className="text-lg font-bold tracking-tight text-text">
            Tool<span className="text-primary">Kit</span>
          </span>
        </Link>

        {/* ===== Desktop Nav ===== */}
        <div className="hidden items-center gap-1 md:flex">
          {/* Regular nav links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-primary"
                  : "text-text-secondary hover:bg-surface-hover hover:text-text"
              }`}
            >
              {link.name}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-primary" />
              )}
            </Link>
          ))}

          {/* Tools Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setToolsOpen(!toolsOpen)}
              aria-label="Tools menu"
              aria-expanded={toolsOpen}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                pathname.startsWith("/tools")
                  ? "text-primary"
                  : "text-text-secondary hover:bg-surface-hover hover:text-text"
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

            {/* Dropdown Panel */}
            {toolsOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 origin-top-right animate-fade-in rounded-2xl border border-border bg-white p-2 shadow-xl shadow-black/8">
                <div className="mb-2 px-3 pt-2">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-text-secondary/60">
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
                          ? "bg-primary/5 text-primary"
                          : "text-text hover:bg-surface-hover"
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                          pathname === tool.href
                            ? "bg-primary/10"
                            : "bg-surface-alt"
                        }`}
                      >
                        <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{tool.name}</p>
                        <p className="text-xs text-text-secondary">
                          {tool.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
                <div className="mt-2 border-t border-border pt-2 px-3 pb-1">
                  <p className="text-xs text-text-secondary/50 italic">
                    More tools coming soon...
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ===== Mobile Hamburger ===== */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-text-secondary transition-colors hover:bg-surface-hover hover:text-text md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* ===== Mobile Menu Overlay ===== */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Panel */}
          <div className="relative mx-4 mt-2 animate-fade-in rounded-2xl border border-border bg-white p-3 shadow-2xl">
            {/* Nav Links */}
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-primary/5 text-primary"
                      : "text-text-secondary hover:bg-surface-hover hover:text-text"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
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
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  pathname.startsWith("/tools")
                    ? "bg-primary/5 text-primary"
                    : "text-text-secondary hover:bg-surface-hover hover:text-text"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Wrench className="h-4.5 w-4.5" />
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
                            ? "bg-primary/5 font-medium text-primary"
                            : "text-text-secondary hover:bg-surface-hover hover:text-text"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {tool.name}
                      </Link>
                    );
                  })}
                  <p className="px-3 py-2 text-xs italic text-text-secondary/50">
                    More tools coming soon...
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
