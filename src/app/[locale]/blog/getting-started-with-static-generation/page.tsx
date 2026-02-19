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
    title: gt("Getting Started with Static Site Generation | GT"),
    description: gt(
      "Learn how static site generation pre-renders pages at build time for maximum performance and SEO benefits."
    ),
  };
}

export default async function GettingStartedPost() {
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
                <span className="text-xs text-neutral-500">2026-02-15</span>
                <span className="text-neutral-700">|</span>
                <span className="text-xs text-neutral-500">Alex Chen</span>
                <span className="text-neutral-700">|</span>
                <span className="text-xs text-neutral-500">5 min read</span>
              </div>
              <h1 className="text-3xl font-bold text-neutral-100 mb-4">
                Getting Started with Static Site Generation
              </h1>
              <p className="text-base text-neutral-400 leading-relaxed">
                Learn how static site generation pre-renders pages at build time
                for maximum performance and SEO benefits.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-base text-neutral-300 leading-relaxed">
                Static site generation is a powerful approach to building web
                applications. By pre-rendering pages at build time, your site
                loads instantly for every visitor, regardless of their location
                or device capabilities.
              </p>
              <p className="text-base text-neutral-300 leading-relaxed">
                When you combine SSG with internationalization, every locale gets
                its own set of pre-rendered HTML files. This means a visitor in
                Tokyo sees the Japanese version of your site just as fast as
                someone in New York sees the English version. No runtime
                translation overhead, no loading spinners, no layout shift.
              </p>
              <p className="text-base text-neutral-300 leading-relaxed">
                The key to making this work in Next.js is the
                generateStaticParams function. By returning all combinations of
                locale and page parameters, you instruct the build process to
                create a static HTML file for each permutation. The result is a
                fully static, fully translated site that can be served from a CDN
                edge node anywhere in the world.
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
