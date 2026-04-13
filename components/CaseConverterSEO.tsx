import Link from "next/link";

export default function CaseConverterSEO() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-12">

        {/* Section 1 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-text">What Is a Text Case Converter?</h2>
          <div className="space-y-3 text-text-secondary leading-relaxed">
            <p>
              A text case converter is a tool that transforms the capitalisation of text from one format to
              another. Different writing contexts — from social media captions to software code — follow
              different capitalisation conventions, and switching between them manually is tedious and
              error-prone. A case converter does this transformation instantly with a single click.
            </p>
            <p>
              Our free text case converter supports ten different case styles, covering everything from basic
              UPPERCASE and lowercase to programming-specific formats like camelCase, snake_case, and
              kebab-case. It works entirely in your browser — your text never leaves your device.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-text">When to Use Each Case Type</h2>
          <div className="space-y-5 text-text-secondary leading-relaxed">

            <div>
              <h3 className="mb-2 text-lg font-semibold text-text">UPPERCASE</h3>
              <p>
                All letters capitalised. UPPERCASE is used for emphasis, acronyms (NASA, HTML, URL),
                column headers in spreadsheets, and sometimes for headings in design work. Avoid using
                UPPERCASE for long passages of prose — it is harder to read and can feel aggressive in
                digital communication.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-text">lowercase</h3>
              <p>
                All letters in small case. Lowercase is common in casual digital communication, URL slugs
                (e.g., /blog/how-to-write), CSS class names, and database identifiers. Many programming
                languages prefer or require lowercase for certain constructs.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-text">Title Case</h3>
              <p>
                The first letter of each word is capitalised. Title Case is used for article headlines,
                book titles, film titles, chapter headings, and product names. It gives text a formal,
                publishable appearance. Note that standard title case rules in English say minor words like
                &ldquo;a&rdquo;, &ldquo;the&rdquo;, and &ldquo;of&rdquo; should not be capitalised unless they are
                the first word.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-text">Sentence case</h3>
              <p>
                Only the first letter of each sentence is capitalised. Sentence case is used for normal
                prose, emails, user interface text, error messages, and most body copy. It is the most
                natural capitalisation style for everyday writing.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-text">camelCase</h3>
              <p>
                The first word is lowercase and each subsequent word starts with a capital letter, with no
                spaces. camelCase is the standard naming convention for variables and functions in
                JavaScript, TypeScript, Java, and many other programming languages. Examples: <code className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-sm">getUserName</code>,{" "}
                <code className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-sm">calculateTotalPrice</code>,{" "}
                <code className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-sm">isLoggedIn</code>.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-text">PascalCase</h3>
              <p>
                Like camelCase, but every word (including the first) starts with a capital letter. PascalCase
                is used for class names, constructor functions, components in React, and type definitions.
                Examples: <code className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-sm">UserProfile</code>,{" "}
                <code className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-sm">ShoppingCart</code>,{" "}
                <code className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-sm">ApiResponse</code>.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-text">snake_case</h3>
              <p>
                Words separated by underscores, all lowercase. snake_case is the standard in Python for
                variables and functions, Ruby, and database column names in SQL. Examples:{" "}
                <code className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-sm">user_name</code>,{" "}
                <code className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-sm">total_price</code>,{" "}
                <code className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-sm">created_at</code>.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-text">kebab-case</h3>
              <p>
                Words separated by hyphens, all lowercase. kebab-case is standard for CSS class names,
                HTML attributes, URL slugs, and npm package names. Examples:{" "}
                <code className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-sm">main-header</code>,{" "}
                <code className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-sm">blog-post-title</code>,{" "}
                <code className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-sm">my-npm-package</code>.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-text">CONSTANT_CASE</h3>
              <p>
                All uppercase letters with words separated by underscores. CONSTANT_CASE (also called
                SCREAMING_SNAKE_CASE) is used for constants and environment variables in most programming
                languages. Examples:{" "}
                <code className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-sm">MAX_RETRY_COUNT</code>,{" "}
                <code className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-sm">API_BASE_URL</code>,{" "}
                <code className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-sm">DEFAULT_TIMEOUT</code>.
              </p>
            </div>

          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-text">Title Case vs Sentence Case — What&rsquo;s the Difference?</h2>
          <div className="space-y-3 text-text-secondary leading-relaxed">
            <p>
              Title Case and Sentence case are easily confused, but they serve very different purposes.
            </p>
            <p>
              <strong className="text-text">Title Case</strong> capitalises the first letter of every major
              word. It is used for titles, headlines, and headings. Example:{" "}
              <em>&ldquo;The Quick Brown Fox Jumps Over the Lazy Dog&rdquo;</em>.
            </p>
            <p>
              <strong className="text-text">Sentence case</strong> capitalises only the first word of the
              sentence (and proper nouns). It reads like normal prose. Example:{" "}
              <em>&ldquo;The quick brown fox jumps over the lazy dog.&rdquo;</em>
            </p>
            <p>
              In practice, most editorial style guides (AP Style, Chicago Manual of Style) use Title Case
              for main headlines and Sentence case for body text and subheadings in some contexts.
              Choosing the right one for your context gives your content a polished, professional appearance.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-text">Case Conventions in Programming</h2>
          <div className="space-y-3 text-text-secondary leading-relaxed">
            <p>
              Consistency in naming conventions is one of the hallmarks of readable code. Different programming
              languages have adopted different case conventions as unofficial (and sometimes official) standards:
            </p>
            <ul className="ml-4 space-y-2 list-disc">
              <li><strong className="text-text">JavaScript / TypeScript:</strong> camelCase for variables and functions, PascalCase for classes and components</li>
              <li><strong className="text-text">Python:</strong> snake_case for variables and functions, PascalCase for classes, CONSTANT_CASE for constants</li>
              <li><strong className="text-text">CSS / HTML:</strong> kebab-case for class names and IDs</li>
              <li><strong className="text-text">SQL:</strong> snake_case for table and column names</li>
              <li><strong className="text-text">Environment variables:</strong> CONSTANT_CASE across all languages</li>
              <li><strong className="text-text">URL slugs:</strong> kebab-case (e.g., /blog/my-article-title)</li>
            </ul>
            <p>
              When working across multiple languages or refactoring code, our case converter lets you quickly
              transform variable names and identifiers between conventions.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-text">How to Use This Case Converter</h2>
          <div className="space-y-3 text-text-secondary leading-relaxed">
            <ol className="ml-4 space-y-3 list-decimal">
              <li>
                <strong className="text-text">Type or paste your text</strong> into the large editor area.
              </li>
              <li>
                <strong className="text-text">Click any case button</strong> (UPPERCASE, lowercase, Title Case, etc.)
                to instantly transform your text.
              </li>
              <li>
                <strong className="text-text">Click another button</strong> at any time to convert again —
                the tool always applies the conversion to the current text in the editor.
              </li>
              <li>
                <strong className="text-text">Copy to clipboard</strong> with the Copy button and paste
                directly into your document, code editor, or CMS.
              </li>
            </ol>
            <p>
              Your text is auto-saved to your browser, so you can return to it at any time. Need to count
              words after converting?{" "}
              <Link href="/tools/word-counter" className="text-primary underline underline-offset-2 hover:text-primary-dark">
                Try our word counter
              </Link>{" "}
              or{" "}
              <Link href="/tools/character-counter" className="text-primary underline underline-offset-2 hover:text-primary-dark">
                character counter
              </Link>{" "}
              to check length after transformation.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-text">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What is camelCase and when should I use it?",
                a: "camelCase is a naming convention where the first word is all lowercase and every subsequent word begins with an uppercase letter — producing names like getUserName, totalWordCount and isLoading. camelCase is the standard naming convention for variables, functions and parameters in JavaScript, TypeScript, Java, Swift and Kotlin. It is required by major style guides including Airbnb JavaScript, Google JavaScript and StandardJS. Use camelCase for any variable or function name in frontend or backend JavaScript code. Our case converter converts any text to camelCase instantly with a single click.",
              },
              {
                q: "What is the difference between camelCase and PascalCase?",
                a: "The difference between camelCase and PascalCase is the capitalisation of the very first letter. camelCase starts with a lowercase letter — getUserName. PascalCase starts with an uppercase letter — GetUserName. PascalCase is also called UpperCamelCase reflecting this relationship. In practice the two conventions are used in completely different contexts. camelCase is for variables and functions. PascalCase is almost universally reserved for class names, React components and TypeScript interfaces across JavaScript, Python, Java and C#. Our text case converter handles both camelCase and PascalCase conversion instantly.",
              },
              {
                q: "When should I use snake_case vs camelCase?",
                a: "Use snake_case when writing Python, Ruby, Rust or SQL — these languages treat snake_case as their official standard. Use camelCase when writing JavaScript, TypeScript, Java or Swift. The choice is largely determined by the language ecosystem you are working in rather than personal preference. Mixing snake_case and camelCase within the same codebase creates inconsistency that slows down code review and onboarding. If your team has a style guide follow it strictly. Our case converter makes switching between snake_case and camelCase instant when you need to port code between languages.",
              },
              {
                q: "Why do URLs use kebab-case for SEO?",
                a: "URLs use kebab-case because Google treats hyphens as word separators in search indexing making kebab-case URLs more SEO-friendly than alternatives. A URL like /word-frequency-counter tells Google it contains three separate meaningful words. An underscore-separated URL like /word_frequency_counter is treated as a single unseparated token by Google's indexing. kebab-case URL slugs also read more naturally in browser address bars and are easier to share verbally. Our case converter includes a kebab-case option for generating clean SEO-friendly URL slugs from any text.",
              },
              {
                q: "What is SCREAMING_SNAKE_CASE used for?",
                a: "SCREAMING_SNAKE_CASE — all uppercase letters separated by underscores — is the standard convention for constants and environment variables across virtually all programming languages and platforms. Examples include MAX_RETRY_COUNT, API_SECRET_KEY, DATABASE_URL and NODE_ENV. The all-uppercase treatment signals to every developer reading the code that this value is a constant that should never be reassigned during runtime. Environment variables in .env files, Docker configurations and cloud platform settings universally use SCREAMING_SNAKE_CASE. Our case converter includes SCREAMING_SNAKE_CASE as a one-click conversion option.",
              },
              {
                q: "How do I convert text to title case online?",
                a: "Converting text to title case online is simple with our free text case converter. Paste your text, click the Title Case button and every major word is capitalised instantly. Title case capitalises the first letter of all major words while leaving articles like a, an and the and prepositions like in, on and at in lowercase unless they start the title. Title case is used for headlines, book titles, article headings, product names and page titles. Our case converter handles all 10 case formats including Title Case, Sentence case, camelCase, PascalCase, snake_case and kebab-case.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-text">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="rounded-2xl border border-border bg-surface-alt p-6">
          <h2 className="mb-4 text-lg font-bold text-text">Related Writing Tools</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/tools/word-counter" className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary shadow-sm">
              Word Counter
            </Link>
            <Link href="/tools/character-counter" className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary shadow-sm">
              Character Counter
            </Link>
            <Link href="/tools/lorem-ipsum-generator" className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary shadow-sm">
              Lorem Ipsum Generator
            </Link>
            <Link href="/tools" className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary shadow-sm">
              All Tools →
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
