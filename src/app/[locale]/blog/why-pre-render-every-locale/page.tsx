import { T } from "gt-next";
import { getGT } from "gt-next/server";
import Header from "@/components/Header";
import Link from "next/link";

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "es" },
    { locale: "fr" },
    { locale: "ja" },
    { locale: "zh" },
  ];
}

export async function generateMetadata() {
  const gt = await getGT();
  return {
    title: gt("Why You Should Pre-Render Every Locale | GT"),
    description: gt(
      "Pre-rendering translations at build time eliminates runtime overhead and delivers instant page loads in every language."
    ),
  };
}

export default async function WhyPreRenderPost() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-300 transition-colors mb-8"
        >
          <T>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M10 12L6 8l4-4" />
            </svg>
            Back to all posts
          </T>
        </Link>

        <T>
          <article>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-xs text-neutral-500">2026-02-12</span>
                <span className="text-neutral-700">|</span>
                <span className="text-xs text-neutral-500">Maria Santos</span>
                <span className="text-neutral-700">|</span>
                <span className="text-xs text-neutral-500">4 min read</span>
              </div>
              <h1 className="text-3xl font-bold text-neutral-100 mb-4">
                Why You Should Pre-Render Every Locale
              </h1>
              <p className="text-base text-neutral-400 leading-relaxed">
                Pre-rendering translations at build time eliminates runtime
                overhead and delivers instant page loads in every language.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-base text-neutral-300 leading-relaxed">
                Most internationalization solutions fetch translations at
                runtime. The browser loads the page, requests a JSON file of
                translated strings, and then renders the content. This introduces
                a flash of untranslated content, adds network requests, and slows
                down the perceived load time.
              </p>
              <p className="text-base text-neutral-300 leading-relaxed">
                Pre-rendering every locale at build time solves all of these
                problems. Each language gets its own complete HTML output, ready
                to serve immediately. There is no client-side fetching, no
                hydration delay for translations, and no layout shift when
                strings arrive late.
              </p>
              <p className="text-base text-neutral-300 leading-relaxed">
                This approach also improves SEO significantly. Search engine
                crawlers see fully translated, fully rendered HTML at each locale
                path. Your Spanish content lives at /es, your Japanese content at
                /ja, and each version is a first-class page with its own
                metadata, titles, and descriptions.
              </p>
            </div>
          </article>
        </T>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <T>
            <h3 className="text-sm font-semibold text-neutral-400 mb-4">
              More posts
            </h3>
          </T>
          <div className="space-y-3">
            <Link
              href="/blog/getting-started-with-static-generation"
              className="block group"
            >
              <T>
                <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-4 transition-colors hover:border-neutral-700">
                  <h4 className="text-sm font-semibold text-neutral-100 group-hover:text-white transition-colors">
                    Getting Started with Static Site Generation
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    Learn how static site generation pre-renders pages at build
                    time for maximum performance and SEO benefits.
                  </p>
                </div>
              </T>
            </Link>
            <Link
              href="/blog/seo-benefits-of-static-i18n"
              className="block group"
            >
              <T>
                <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-4 transition-colors hover:border-neutral-700">
                  <h4 className="text-sm font-semibold text-neutral-100 group-hover:text-white transition-colors">
                    SEO Benefits of Static Internationalization
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    Translated metadata, locale-specific URLs, and pre-rendered
                    HTML give search engines exactly what they need.
                  </p>
                </div>
              </T>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
