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
    title: gt("SEO Benefits of Static Internationalization | GT"),
    description: gt(
      "Translated metadata, locale-specific URLs, and pre-rendered HTML give search engines exactly what they need."
    ),
  };
}

export default async function SeoBenefitsPost() {
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
                <span className="text-xs text-neutral-500">2026-02-08</span>
                <span className="text-neutral-700">|</span>
                <span className="text-xs text-neutral-500">James Park</span>
                <span className="text-neutral-700">|</span>
                <span className="text-xs text-neutral-500">6 min read</span>
              </div>
              <h1 className="text-3xl font-bold text-neutral-100 mb-4">
                SEO Benefits of Static Internationalization
              </h1>
              <p className="text-base text-neutral-400 leading-relaxed">
                Translated metadata, locale-specific URLs, and pre-rendered HTML
                give search engines exactly what they need.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-base text-neutral-300 leading-relaxed">
                Search engines treat each locale path as a separate page. When
                you pre-render /en/blog/my-post and /es/blog/my-post with
                translated content and metadata, you are effectively creating
                distinct, indexable pages for each language. This is exactly what
                search engines want to see.
              </p>
              <p className="text-base text-neutral-300 leading-relaxed">
                The generateMetadata function in Next.js lets you define
                translated titles, descriptions, and Open Graph tags for each
                locale. Combined with generateStaticParams, this means every page
                in every language has its own unique, translated metadata baked
                into the HTML at build time.
              </p>
              <p className="text-base text-neutral-300 leading-relaxed">
                The performance benefits compound the SEO advantage.
                Pre-rendered static pages load faster, which improves Core Web
                Vitals scores. Faster pages rank higher. Translated pages reach
                more users. More users mean more engagement signals. It is a
                virtuous cycle that starts with the decision to pre-render every
                locale.
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
              href="/blog/why-pre-render-every-locale"
              className="block group"
            >
              <T>
                <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-4 transition-colors hover:border-neutral-700">
                  <h4 className="text-sm font-semibold text-neutral-100 group-hover:text-white transition-colors">
                    Why You Should Pre-Render Every Locale
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    Pre-rendering translations at build time eliminates runtime
                    overhead and delivers instant page loads in every language.
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
