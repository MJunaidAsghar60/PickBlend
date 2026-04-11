import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://pickblend.com";
const POST_SLUG = "camelcase-vs-snake-case";
const POST_URL = `${BASE_URL}/blog/${POST_SLUG}`;

export const metadata: Metadata = {
  title: "camelCase vs snake_case — When to Use Each (Complete Guide for Developers)",
  description:
    "camelCase, snake_case, kebab-case or PascalCase — which naming convention should you use and when? Complete guide with real code examples for every language and use case in 2026.",
  keywords: [
    "camelCase vs snake_case",
    "camelCase vs snake_case vs kebab-case",
    "when to use camelCase",
    "when to use snake_case",
    "naming conventions programming",
    "camelCase vs snake_case javascript",
    "snake_case vs camelCase python",
    "text case converter",
    "programming naming conventions 2026",
    "pascalCase vs camelCase",
    "kebab-case vs snake_case",
  ],
  authors: [{ name: "PickBlend" }],
  openGraph: {
    type: "article",
    locale: "en_US",
    siteName: "PickBlend",
    title: "camelCase vs snake_case — When to Use Each (Complete Guide for Developers)",
    description:
      "camelCase, snake_case, kebab-case or PascalCase — which naming convention should you use and when? Complete guide with real code examples for every language and use case in 2026.",
    url: POST_URL,
    images: [{ url: `${BASE_URL}/og/home.png`, width: 1200, height: 630, alt: "camelCase vs snake_case — Developer Naming Conventions Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "camelCase vs snake_case — When to Use Each",
    description: "Complete guide to programming naming conventions — camelCase, snake_case, PascalCase, kebab-case — with code examples for every language.",
    images: [`${BASE_URL}/og/home.png`],
  },
  alternates: { canonical: POST_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

function PageJsonLd() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: "camelCase vs snake_case", item: POST_URL },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "camelCase vs snake_case — When to Use Each",
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
    author: { "@type": "Organization", name: "PickBlend" },
    publisher: { "@type": "Organization", name: "PickBlend", url: BASE_URL },
    description:
      "camelCase, snake_case, kebab-case or PascalCase — which naming convention should you use and when? Complete guide with real code examples for every language and use case in 2026.",
    url: POST_URL,
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Should I use camelCase or snake_case in JavaScript?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use camelCase for variables, functions and parameters in JavaScript. This is the convention established by the language's core libraries and followed by virtually every major JavaScript style guide including Airbnb, Google and StandardJS. Use PascalCase for class names and React components. Use SCREAMING_SNAKE_CASE for constants that will never change.",
        },
      },
      {
        "@type": "Question",
        name: "Why does Python use snake_case instead of camelCase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Python uses snake_case because of PEP 8 — the official Python style guide published in 2001 by Guido van Rossum, the language's creator. PEP 8 recommends snake_case for variables and functions because Python prioritizes readability and snake_case is considered more readable for the kinds of descriptive names Python encourages. The Python community treats PEP 8 compliance as a mark of professional code quality.",
        },
      },
      {
        "@type": "Question",
        name: "Is PascalCase the same as camelCase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PascalCase and camelCase are related but different. camelCase starts with a lowercase letter (getUserName). PascalCase starts with an uppercase letter (GetUserName). PascalCase is sometimes called UpperCamelCase to reflect this relationship. In practice camelCase is used for variables and functions while PascalCase is almost universally reserved for class names, types and React components.",
        },
      },
      {
        "@type": "Question",
        name: "Why is kebab-case used for URLs and CSS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "kebab-case is used for URLs because hyphens are safe characters in web addresses and Google treats hyphens as word separators — making kebab-case URLs better for SEO than underscores or camelCase. For CSS class names, kebab-case became the convention because CSS is case-insensitive and hyphens create visual separation without the ambiguity of mixed case. kebab-case cannot be used for JavaScript variables because the hyphen is interpreted as a minus operator.",
        },
      },
      {
        "@type": "Question",
        name: "Does naming convention affect SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For URL slugs, yes — naming convention directly affects SEO. Google recommends using hyphens to separate words in URLs because it treats hyphens as word separators. A URL like /camelcase-vs-snake-case is more SEO-friendly than /camelcaseVsSnakeCase or /camelcase_vs_snake_case. For code variable names inside your application, naming conventions have no direct effect on SEO.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-surface-hover px-1.5 py-0.5 font-mono text-sm text-text">
      {children}
    </code>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="mt-4 mb-4 overflow-x-auto rounded-xl border border-border bg-surface-alt p-4 text-sm font-mono leading-relaxed text-text">
      <code>{children}</code>
    </pre>
  );
}

export default function BlogPost() {
  return (
    <>
      <PageJsonLd />
      <main className="px-4 py-12 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">

          {/* ── Article Header ── */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-text-secondary">
            <Link href="/" className="transition-colors hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/blog" className="transition-colors hover:text-primary">Blog</Link>
            <span>/</span>
            <span className="text-text">Naming Conventions Guide</span>
          </nav>

          <div className="flex items-center gap-2">
            <span className="rounded-full bg-accent-sky/10 px-3 py-1 text-xs font-semibold text-accent-sky">
              Developer Tools
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl">
            camelCase vs snake_case — When to Use Each (And Why It Actually Matters)
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-text-secondary">
            <time dateTime="2026-04-08">April 8, 2026</time>
            <span>·</span>
            <span>8 min read</span>
            <span>·</span>
            <span>By PickBlend</span>
          </div>

          <hr className="mt-6 border-border" />

          {/* ── Body ── */}
          <div className="mt-8">

            {/* Opening */}
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              The naming convention you choose does not affect how your code runs. It affects how easily
              humans can read, maintain and collaborate on it. And in a long-lived codebase, that gap
              between easy-to-read and hard-to-read accumulates into real time costs — slower onboarding,
              more bugs, more friction in code review.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              This debate comes up in every code review, every team onboarding, and every style guide
              discussion. Junior developers get conflicting advice. Senior developers disagree in comment
              sections. The truth is that the answer is almost always &quot;it depends on the language and
              context&quot; — and that is actually a useful answer once you know the specifics.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              This guide covers every major case format, which languages and contexts have standardised
              on each one, and how to convert between them instantly when you need to. By the end you
              will have a single reference you can return to every time the question comes up.
            </p>

            {/* H2: The Main Conventions */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-text">
              What Are the Main Naming Conventions?
            </h2>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Most developers know <InlineCode>camelCase</InlineCode> and{" "}
              <InlineCode>snake_case</InlineCode> — but there are several others in active daily use.
              Here is the complete family:
            </p>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-alt">
                    <th className="px-4 py-3 text-left font-semibold text-text">Convention</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">Example</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">Also Called</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["camelCase", "getUserName", "Lower camel case"],
                    ["PascalCase", "GetUserName", "Upper camel case, UpperCamelCase"],
                    ["snake_case", "get_user_name", "Underscore case"],
                    ["SCREAMING_SNAKE_CASE", "GET_USER_NAME", "Constant case, UPPER_SNAKE_CASE"],
                    ["kebab-case", "get-user-name", "Hyphen case, spinal case"],
                    ["flatcase", "getusername", "Lowercase, no separator"],
                    ["UPPERCASE", "GETUSERNAME", "All caps"],
                    ["dot.case", "get.user.name", "Dot notation"],
                  ].map(([conv, example, also], i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-surface-alt/40" : "bg-white"}>
                      <td className="px-4 py-3 font-mono text-sm font-semibold text-text">{conv}</td>
                      <td className="px-4 py-3 font-mono text-sm text-text-secondary">{example}</td>
                      <td className="px-4 py-3 text-text-secondary">{also}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base leading-relaxed text-text-secondary mb-4 mt-6">
              These are not arbitrary preferences that programmers invented to disagree about. Each
              convention evolved from the constraints and culture of specific languages and ecosystems.
              C used <InlineCode>snake_case</InlineCode> heavily because early C code was often written
              on terminals where lowercase was easier to type and read at low resolution. Java came
              along with object-oriented patterns that made <InlineCode>camelCase</InlineCode> feel
              natural for method names. Python made an explicit choice in its official style guide.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Understanding the history helps because it explains why the conventions are not
              interchangeable. Each one is optimised for a specific context. Trying to use{" "}
              <InlineCode>camelCase</InlineCode> in Python or <InlineCode>snake_case</InlineCode> in
              a JavaScript codebase is not wrong in a runtime sense — it just signals that whoever
              wrote the code does not know the ecosystem conventions, which creates friction.
            </p>

            {/* H2: camelCase */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-text">
              camelCase — What It Is and When to Use It
            </h2>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              <InlineCode>camelCase</InlineCode> starts with a lowercase letter. Each subsequent word
              starts with an uppercase letter. No spaces, hyphens or underscores. The name comes from
              the visual similarity to a camel&apos;s humps — the uppercase letters create a bumpy
              silhouette against the lowercase body.
            </p>

            <CodeBlock>{`// JavaScript — variables and functions
const userName = "john_doe";
const totalWordCount = 1450;

function getUserById(userId) {
  return database.find(userId);
}

// React — props and state
const [isLoading, setIsLoading] = useState(false);
const [wordCount, setWordCount] = useState(0);`}</CodeBlock>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Where <InlineCode>camelCase</InlineCode> is the standard:
            </p>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-alt">
                    <th className="px-4 py-3 text-left font-semibold text-text">Language / Context</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">Where camelCase Is Used</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["JavaScript", "Variables, functions, parameters"],
                    ["TypeScript", "Variables, functions, parameters"],
                    ["Java", "Variables, methods, parameters"],
                    ["Swift", "Variables, functions, parameters"],
                    ["Kotlin", "Variables, functions, parameters"],
                    ["JSON", "Key names (common convention)"],
                    ["React", "Props, state variables, hooks"],
                    ["CSS-in-JS", "Style property names"],
                  ].map(([lang, usage], i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-surface-alt/40" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-text">{lang}</td>
                      <td className="px-4 py-3 text-text-secondary">{usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base leading-relaxed text-text-secondary mb-4 mt-6">
              JavaScript landed on <InlineCode>camelCase</InlineCode> largely because Java was the
              dominant language when JavaScript was designed in 1995, and Brendan Eich pulled heavily
              from Java&apos;s syntax conventions. Java had already settled on{" "}
              <InlineCode>camelCase</InlineCode> for methods and variables decades earlier,
              influenced by Smalltalk and C++ communities where the style was already widespread.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              React reinforced <InlineCode>camelCase</InlineCode> as the convention for props and
              event handlers — <InlineCode>onClick</InlineCode>,{" "}
              <InlineCode>onChange</InlineCode>, <InlineCode>onSubmit</InlineCode> — because JSX
              maps these directly to the browser&apos;s JavaScript event model. CSS-in-JS libraries
              like styled-components and Emotion followed suit, converting CSS property names from{" "}
              <InlineCode>background-color</InlineCode> to{" "}
              <InlineCode>backgroundColor</InlineCode>.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              One practical advantage of <InlineCode>camelCase</InlineCode> over{" "}
              <InlineCode>snake_case</InlineCode> is that it requires one fewer keystroke per word
              boundary — no shift to type underscore. For long variable names in a language you
              write hundreds of times a day, this adds up. It is a small ergonomic advantage, not
              a quality argument, but it is real.
            </p>

            {/* H2: snake_case */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-text">
              snake_case — What It Is and When to Use It
            </h2>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              <InlineCode>snake_case</InlineCode> uses all lowercase letters with words separated by
              underscores. It is highly readable because underscores create clear visual separation
              between words without mixing cases — the eye does not need to detect a capital letter
              to find the word boundary. Many developers find long{" "}
              <InlineCode>snake_case</InlineCode> names easier to read at a glance than their{" "}
              <InlineCode>camelCase</InlineCode> equivalents.
            </p>

            <CodeBlock>{`# Python — variables, functions, modules
user_name = "john_doe"
total_word_count = 1450

def get_user_by_id(user_id):
    return database.find(user_id)

# Python — file names
word_counter.py
reading_time_calculator.py

# Database — column names
CREATE TABLE users (
    user_id       INT PRIMARY KEY,
    first_name    VARCHAR(50),
    last_name     VARCHAR(50),
    created_at    TIMESTAMP
);`}</CodeBlock>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Where <InlineCode>snake_case</InlineCode> is the standard:
            </p>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-alt">
                    <th className="px-4 py-3 text-left font-semibold text-text">Language / Context</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">Where snake_case Is Used</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Python", "Everything — PEP 8 standard"],
                    ["Ruby", "Variables, methods, symbols"],
                    ["PHP", "Variables, functions (common)"],
                    ["SQL / Databases", "Table names, column names"],
                    ["C / C++", "Variables, functions (common)"],
                    ["Rust", "Variables, functions, modules"],
                    ["File names", "Python files, shell scripts"],
                    ["Environment variables", "Often SCREAMING_SNAKE_CASE"],
                  ].map(([lang, usage], i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-surface-alt/40" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-text">{lang}</td>
                      <td className="px-4 py-3 text-text-secondary">{usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base leading-relaxed text-text-secondary mb-4 mt-6">
              Python&apos;s PEP 8 — published in 2001 — is one of the most influential style documents
              in programming history. It explicitly states: &quot;Function names should be lowercase,
              with words separated by underscores as necessary to improve readability.&quot; The Python
              community has largely treated this as law rather than suggestion. A Python PR with
              <InlineCode>camelCase</InlineCode> variable names will almost certainly get a review
              comment requesting it be changed to <InlineCode>snake_case</InlineCode> before merge.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Database column names are almost universally <InlineCode>snake_case</InlineCode> regardless
              of what language is querying them. SQL is case-insensitive for keywords but consistent
              <InlineCode>snake_case</InlineCode> for identifiers has become the de facto standard
              because it reads clearly in queries, avoids quoting requirements in most dialects, and
              matches what most ORMs expect when mapping database columns to model properties.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              One frequent pain point is the boundary between a JavaScript or TypeScript frontend and
              a Python or SQL backend. The API returns <InlineCode>user_id</InlineCode>,{" "}
              <InlineCode>first_name</InlineCode>, <InlineCode>created_at</InlineCode> — but the
              frontend code wants <InlineCode>userId</InlineCode>,{" "}
              <InlineCode>firstName</InlineCode>, <InlineCode>createdAt</InlineCode>. This is a real,
              recurring problem in full-stack development, and the cleanest solution is to do a single
              transformation at the API boundary rather than mixing conventions throughout either codebase.
            </p>

            {/* H2: PascalCase */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-text">
              PascalCase — Classes and Components
            </h2>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              <InlineCode>PascalCase</InlineCode> is like <InlineCode>camelCase</InlineCode> but
              the first letter is also uppercase. It is sometimes called UpperCamelCase to make the
              relationship explicit. Almost universally, seeing <InlineCode>PascalCase</InlineCode>{" "}
              in code means you are looking at a class, a type, or a React component.
            </p>

            <CodeBlock>{`// JavaScript / React — components
function UserProfile({ userName, avatarUrl }) {
  return <div>{userName}</div>;
}

// TypeScript — interfaces and types
interface UserAccount {
  userId: number;
  userName: string;
  createdAt: Date;
}

// Java / C# — class names
public class UserController {
  private UserService userService;
}`}</CodeBlock>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Where <InlineCode>PascalCase</InlineCode> is the standard:
            </p>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-alt">
                    <th className="px-4 py-3 text-left font-semibold text-text">Context</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">PascalCase Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["All languages", "Class names"],
                    ["React / JSX", "Component names"],
                    ["TypeScript", "Interfaces, type aliases, enums"],
                    ["C#", "Almost everything — methods too"],
                    ["Java", "Class names, interface names"],
                  ].map(([ctx, usage], i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-surface-alt/40" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-text">{ctx}</td>
                      <td className="px-4 py-3 text-text-secondary">{usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base leading-relaxed text-text-secondary mb-4 mt-6">
              <InlineCode>PascalCase</InlineCode> for class names is one of the most consistent
              conventions across the entire programming landscape. Python uses it despite preferring{" "}
              <InlineCode>snake_case</InlineCode> for everything else. JavaScript uses it for React
              components even though variables and functions use <InlineCode>camelCase</InlineCode>.
              When you encounter <InlineCode>PascalCase</InlineCode>, you can be fairly confident
              you are looking at something you instantiate or render, not something you call as a
              function or read as a value.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              React enforces this convention in a meaningful way: JSX interprets any component
              starting with a lowercase letter as an HTML element. Writing{" "}
              <InlineCode>&lt;userProfile /&gt;</InlineCode> in JSX renders an unknown HTML element.
              Writing <InlineCode>&lt;UserProfile /&gt;</InlineCode> renders your React component.
              This is not just a style convention in React — it is a functional requirement.
            </p>

            {/* H2: kebab-case */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-text">
              kebab-case — The Web&apos;s Favourite
            </h2>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              <InlineCode>kebab-case</InlineCode> uses all lowercase letters with words separated by
              hyphens. The name comes from the visual resemblance to pieces of food on a kebab
              skewer. It cannot be used for variable names in most programming languages because the
              hyphen is the subtraction operator — <InlineCode>get-user-name</InlineCode> in
              JavaScript means <em className="text-text">get minus user minus name</em>, not a
              multi-word identifier. But in contexts where hyphens are just characters, it thrives.
            </p>

            <CodeBlock>{`/* CSS — class names and custom properties */
.user-profile { }
.word-counter-tool { }
.is-loading { }
--primary-color: #2563eb;

/* HTML — data and aria attributes */
<div data-user-id="123">
<input aria-label="word-count">

/* URLs — universal standard */
/blog/camelcase-vs-snake-case
/tools/word-counter
/tools/reading-time-calculator`}</CodeBlock>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Where <InlineCode>kebab-case</InlineCode> is the standard:
            </p>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-alt">
                    <th className="px-4 py-3 text-left font-semibold text-text">Context</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">kebab-case Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["CSS", "Class names, custom properties"],
                    ["HTML", "Data attributes, aria attributes"],
                    ["URLs / slugs", "Universal standard"],
                    ["File names", "HTML, CSS files"],
                    ["NPM packages", "Package names"],
                    ["Lisp / Clojure", "Variable names"],
                  ].map(([ctx, usage], i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-surface-alt/40" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-text">{ctx}</td>
                      <td className="px-4 py-3 text-text-secondary">{usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base leading-relaxed text-text-secondary mb-4 mt-6">
              <InlineCode>kebab-case</InlineCode> dominates URLs because it is the most readable
              option in a browser address bar. Hyphens read as natural word separators — your brain
              parses <InlineCode>/word-counter-tool</InlineCode> as three separate words instantly.
              Underscores visually disappear in hyperlinks because the underline decoration merges
              with the underscore character, making <InlineCode>/word_counter_tool</InlineCode>{" "}
              harder to read in a hyperlink context.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Google&apos;s own documentation explicitly recommends hyphens as word separators in URLs
              and treats them as true word boundaries for indexing. A URL like{" "}
              <InlineCode>/camelcase-vs-snake-case</InlineCode> helps Google understand that this
              page is about four distinct concepts: camelcase, vs, snake, case. Underscores create
              ambiguity — Google treats <InlineCode>snake_case</InlineCode> as one token, not two.
              For blog posts and tool pages where the slug directly reflects the target keyword,
              this SEO distinction is worth taking seriously.
            </p>

            {/* H2: Quick Reference */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-text">
              Quick Reference — Which Convention for What
            </h2>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Bookmark this. It is the cheat sheet you will actually use:
            </p>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-alt">
                    <th className="px-4 py-3 text-left font-semibold text-text">Use Case</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">Convention</th>
                    <th className="px-4 py-3 text-left font-semibold text-text">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["JavaScript variable", "camelCase", "userName"],
                    ["JavaScript function", "camelCase", "getUserData()"],
                    ["JavaScript class", "PascalCase", "UserController"],
                    ["React component", "PascalCase", "UserProfile"],
                    ["TypeScript interface", "PascalCase", "UserAccount"],
                    ["Python variable", "snake_case", "user_name"],
                    ["Python function", "snake_case", "get_user_data()"],
                    ["Python class", "PascalCase", "UserController"],
                    ["Python constant", "SCREAMING_SNAKE", "MAX_RETRY_COUNT"],
                    ["CSS class", "kebab-case", ".user-profile"],
                    ["HTML attribute", "kebab-case", "data-user-id"],
                    ["URL slug", "kebab-case", "/user-profile"],
                    ["Database column", "snake_case", "user_name"],
                    ["Environment variable", "SCREAMING_SNAKE", "API_SECRET_KEY"],
                    ["NPM package name", "kebab-case", "react-query"],
                    ["JSON key", "camelCase", "userId"],
                    ["File name (JS)", "kebab-case or camelCase", "user-profile.js"],
                    ["File name (Python)", "snake_case", "user_profile.py"],
                  ].map(([useCase, conv, example], i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-surface-alt/40" : "bg-white"}>
                      <td className="px-4 py-3 text-text-secondary">{useCase}</td>
                      <td className="px-4 py-3 font-mono text-xs font-semibold text-text">{conv}</td>
                      <td className="px-4 py-3 font-mono text-xs text-text-secondary">{example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base leading-relaxed text-text-secondary mb-4 mt-6">
              Within a single codebase, consistency matters more than which convention you pick.
              A codebase that uses <InlineCode>snake_case</InlineCode> everywhere — even in
              JavaScript — is far easier to work in than one that mixes{" "}
              <InlineCode>camelCase</InlineCode> and <InlineCode>snake_case</InlineCode> in the same
              file. The cognitive friction of context-switching between conventions inside a single
              function is genuinely disruptive, even for experienced developers.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              The table above reflects what the wider ecosystem has standardised on — which means
              following it makes your code readable to other developers without additional explanation.
              Deviating from these conventions is always possible, but it always comes with a
              readability cost that you will need to justify to every new person who touches the code.
            </p>

            {/* H2: How to Convert */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-text">
              How to Convert Between Cases Instantly
            </h2>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Moving code between languages often means converting naming conventions. When you
              port a Python function to JavaScript, every <InlineCode>user_name</InlineCode> becomes{" "}
              <InlineCode>userName</InlineCode>. When you copy a database schema into your TypeScript
              types, every <InlineCode>created_at</InlineCode> becomes{" "}
              <InlineCode>createdAt</InlineCode>. In a small file this is manageable. In a real
              codebase with hundreds of identifiers, doing it manually is tedious and error-prone.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              The same problem comes up when writing documentation, API contracts, or config files
              where the convention is different from the language you are coming from. You should
              not be spending mental energy on mechanical case transformations. That is exactly the
              kind of repetitive work that a tool should handle.
            </p>

            {/* CTA Card */}
            <div className="my-8 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-bold text-text">Convert Between Any Case Format Instantly</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Paste any text into our free Text Case Converter and convert to{" "}
                <InlineCode>camelCase</InlineCode>, <InlineCode>PascalCase</InlineCode>,{" "}
                <InlineCode>snake_case</InlineCode>, <InlineCode>kebab-case</InlineCode>,{" "}
                <InlineCode>SCREAMING_SNAKE_CASE</InlineCode> and more with a single click.
                Perfect for developers switching between languages or codebases.
              </p>
              <Link
                href="/tools/case-converter"
                className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary/90"
              >
                Try Case Converter Free →
              </Link>
            </div>

            <h3 className="mt-6 mb-3 text-xl font-semibold text-text">
              How to Use PickBlend&apos;s Text Case Converter
            </h3>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Open the{" "}
              <Link
                href="/tools/case-converter"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                Text Case Converter
              </Link>{" "}
              and paste your variable names, function names, or any text you want to convert.
              You can paste a single identifier or an entire list — one name per line works well
              for converting batches of variable names at once.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Click the target case format button — <InlineCode>camelCase</InlineCode>,{" "}
              <InlineCode>PascalCase</InlineCode>, <InlineCode>snake_case</InlineCode>,{" "}
              <InlineCode>kebab-case</InlineCode>, <InlineCode>UPPERCASE</InlineCode>,
              sentence case, or title case. The conversion happens instantly, and the result
              appears in the output panel below. No page reload, no waiting.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              Copy the converted output with the copy button and paste it directly into your
              editor. The whole process takes a few seconds. For developers who regularly work
              across multiple languages or maintain API boundaries between different ecosystems,
              this becomes one of the most-used tools in your daily workflow.
            </p>

            {/* H2: Common Mistakes */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-text">
              Common Mistakes Developers Make With Naming
            </h2>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              The biggest naming mistakes are not about choosing the wrong convention — they are
              about applying conventions inconsistently. Here are the six that come up most often
              in code reviews:
            </p>

            <p className="text-base leading-relaxed text-text-secondary mb-4">
              <strong className="font-semibold text-text">1. Mixing conventions in the same file.</strong>{" "}
              Using <InlineCode>user_name</InlineCode> and <InlineCode>userName</InlineCode> in the
              same JavaScript file is harder to read than either alone. It signals inconsistent
              code standards and forces the reader to constantly re-establish context. Pick one and
              enforce it through a linter like ESLint or Prettier.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              <strong className="font-semibold text-text">2. Abbreviating inconsistently.</strong>{" "}
              <InlineCode>usrNm</InlineCode>, <InlineCode>userName</InlineCode>,{" "}
              <InlineCode>uname</InlineCode> — pick one and stick to it across the entire codebase.
              Abbreviated names save keystrokes at write time but cost comprehension at read time,
              and three different abbreviations for the same concept is the worst of all worlds.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              <strong className="font-semibold text-text">3. Single-letter variables outside of loops.</strong>{" "}
              <InlineCode>x</InlineCode>, <InlineCode>y</InlineCode>, <InlineCode>n</InlineCode> are
              fine as counters in a tight loop where the scope is obvious. Using them for business
              logic variables — a user object, a word count, a response payload — produces code
              that is completely opaque to anyone reading it later, including yourself in six months.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              <strong className="font-semibold text-text">4. Ignoring the language&apos;s official style guide.</strong>{" "}
              Python has PEP 8. JavaScript has the Airbnb and Google style guides. Go has{" "}
              <InlineCode>gofmt</InlineCode> and the official effective Go documentation. Ignoring
              these does not make you a maverick — it creates friction for every other developer
              who has to work in your code. Most professional teams enforce these through automated
              linting in CI.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              <strong className="font-semibold text-text">5. Using different conventions for the same concept at an API boundary.</strong>{" "}
              If your backend returns <InlineCode>user_id</InlineCode> and your frontend uses{" "}
              <InlineCode>userId</InlineCode>, you need a transformation somewhere. The worst
              outcome is doing this transformation inconsistently in multiple places. The best
              outcome is a single serialisation layer that handles all transformations at the
              boundary, leaving each codebase internally consistent.
            </p>
            <p className="text-base leading-relaxed text-text-secondary mb-4">
              <strong className="font-semibold text-text">6. Hungarian notation in modern code.</strong>{" "}
              Prefixing variables with their type — <InlineCode>strUserName</InlineCode>,{" "}
              <InlineCode>intCount</InlineCode>, <InlineCode>bIsLoading</InlineCode> — was common
              in 1990s C and VBA code when IDEs could not show types on hover. In 2026 with TypeScript,
              Python type hints, and modern IDE tooling, it is noise. It lengthens names and
              makes refactoring harder without adding meaningful information.
            </p>

            {/* H2: FAQ */}
            <h2 className="mt-10 mb-6 text-2xl font-bold text-text">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-text">
                  Should I use camelCase or snake_case in JavaScript?
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  Use <InlineCode>camelCase</InlineCode> for variables, functions and parameters
                  in JavaScript. This is the convention established by the language&apos;s core
                  libraries and followed by virtually every major JavaScript style guide including
                  Airbnb, Google and StandardJS. Use <InlineCode>PascalCase</InlineCode> for class
                  names and React components. Use <InlineCode>SCREAMING_SNAKE_CASE</InlineCode> for
                  true constants — values that should never change across the lifetime of the program.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-text">
                  Why does Python use snake_case instead of camelCase?
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  Python uses <InlineCode>snake_case</InlineCode> because of PEP 8 — the official
                  Python style guide published in 2001 by Guido van Rossum, the language&apos;s
                  creator. PEP 8 recommends <InlineCode>snake_case</InlineCode> for variables and
                  functions because Python prioritises readability and{" "}
                  <InlineCode>snake_case</InlineCode> is considered more readable for the
                  descriptive, English-phrase-like names Python encourages. The Python community
                  treats PEP 8 compliance as a mark of professional code quality — not following
                  it is a genuine signal that someone is new to the ecosystem.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-text">
                  Is PascalCase the same as camelCase?
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  <InlineCode>PascalCase</InlineCode> and <InlineCode>camelCase</InlineCode> are
                  related but different. <InlineCode>camelCase</InlineCode> starts with a lowercase
                  letter (<InlineCode>getUserName</InlineCode>).{" "}
                  <InlineCode>PascalCase</InlineCode> starts with an uppercase letter
                  (<InlineCode>GetUserName</InlineCode>). PascalCase is sometimes called
                  UpperCamelCase to make this relationship explicit. In practice,{" "}
                  <InlineCode>camelCase</InlineCode> is for variables and functions while{" "}
                  <InlineCode>PascalCase</InlineCode> is almost universally reserved for classes,
                  types and React components.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-text">
                  Why is kebab-case used for URLs and CSS?
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  <InlineCode>kebab-case</InlineCode> dominates URLs because hyphens are safe URL
                  characters and Google explicitly treats them as word separators — making{" "}
                  <InlineCode>kebab-case</InlineCode> slugs better for SEO than underscored or
                  camelCased alternatives. For CSS class names, it became the convention because
                  CSS is case-insensitive and hyphens create clear visual word boundaries without
                  mixing cases. It cannot be used for JavaScript variable names because the hyphen
                  is the subtraction operator in that context.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-text">
                  Does naming convention affect SEO?
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  For URL slugs, yes — naming convention directly affects SEO. Google treats hyphens
                  as word separators in URLs, meaning{" "}
                  <InlineCode>/camelcase-vs-snake-case</InlineCode> is indexed as four separate
                  words. Underscores are not treated as separators, so{" "}
                  <InlineCode>/camelcase_vs_snake_case</InlineCode> is indexed as one long token.
                  For variable names inside your application code, naming conventions have no
                  effect on SEO whatsoever — search engines never see your variable names.
                </p>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12">
              <h2 className="mb-5 text-2xl font-bold text-text">More Developer Guides</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { title: "Character Limits for Every Platform in 2026", href: "/blog/character-limits-for-every-platform-2026", category: "Content Writing" },
                  { title: "How Many Words Are in a Paragraph?", href: "/blog/how-many-words-in-a-paragraph", category: "Writing Tips" },
                  { title: "How Long Does It Take to Read 1,400 Words?", href: "/blog/how-long-does-it-take-to-read-1400-words", category: "Writing Tips" },
                ].map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="group rounded-xl border border-border bg-white p-4 transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <span className="mb-2 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                      {post.category}
                    </span>
                    <p className="text-sm font-medium text-text transition-colors group-hover:text-primary">
                      {post.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Tools */}
            <div className="mt-10">
              <h2 className="mb-4 text-lg font-semibold uppercase tracking-wider text-text-secondary">
                Related Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Text Case Converter", href: "/tools/case-converter" },
                  { name: "Word Counter", href: "/tools/word-counter" },
                  { name: "Character Counter", href: "/tools/character-counter" },
                  { name: "Lorem Ipsum Generator", href: "/tools/lorem-ipsum-generator" },
                ].map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                  >
                    {tool.name} →
                  </Link>
                ))}
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-10 border-t border-border pt-8">
              <Link
                href="/blog"
                className="text-sm font-semibold text-text-secondary transition-colors hover:text-primary"
              >
                ← Back to Blog
              </Link>
            </div>

          </div>
        </article>
      </main>
    </>
  );
}
