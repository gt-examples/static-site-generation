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
    title: gt("Static Site Generation | GT"),
    description: gt(
      "A blog demonstrating how generateStaticParams pre-renders every page in every locale at build time."
    ),
  };
}

export default async function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-12">
        <T>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
              Static Site Generation
            </h2>
            <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
              Every page on this site is pre-rendered at build time for each
              supported locale using generateStaticParams. No runtime translation
              fetching, no loading states -- just instant, fully translated HTML
              served from the edge.
            </p>
          </div>
        </T>

        <div className="space-y-4">
          <Link
            href="/blog/getting-started-with-static-generation"
            className="block group"
          >
            <T>
              <article className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 transition-colors hover:border-neutral-700">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="text-xs text-neutral-500">2026-02-15</span>
                  <span className="text-neutral-700">|</span>
                  <span className="text-xs text-neutral-500">Alex Chen</span>
                  <span className="text-neutral-700">|</span>
                  <span className="text-xs text-neutral-500">5 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-2 group-hover:text-white transition-colors">
                  Getting Started with Static Site Generation
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Learn how static site generation pre-renders pages at build
                  time for maximum performance and SEO benefits.
                </p>
              </article>
            </T>
          </Link>

          <Link
            href="/blog/why-pre-render-every-locale"
            className="block group"
          >
            <T>
              <article className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 transition-colors hover:border-neutral-700">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="text-xs text-neutral-500">2026-02-12</span>
                  <span className="text-neutral-700">|</span>
                  <span className="text-xs text-neutral-500">
                    Maria Santos
                  </span>
                  <span className="text-neutral-700">|</span>
                  <span className="text-xs text-neutral-500">4 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-2 group-hover:text-white transition-colors">
                  Why You Should Pre-Render Every Locale
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Pre-rendering translations at build time eliminates runtime
                  overhead and delivers instant page loads in every language.
                </p>
              </article>
            </T>
          </Link>

          <Link
            href="/blog/seo-benefits-of-static-i18n"
            className="block group"
          >
            <T>
              <article className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 transition-colors hover:border-neutral-700">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="text-xs text-neutral-500">2026-02-08</span>
                  <span className="text-neutral-700">|</span>
                  <span className="text-xs text-neutral-500">James Park</span>
                  <span className="text-neutral-700">|</span>
                  <span className="text-xs text-neutral-500">6 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-2 group-hover:text-white transition-colors">
                  SEO Benefits of Static Internationalization
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Translated metadata, locale-specific URLs, and pre-rendered
                  HTML give search engines exactly what they need.
                </p>
              </article>
            </T>
          </Link>
        </div>

        <T>
          <div className="mt-16 rounded-xl border border-neutral-800 bg-neutral-900 p-6 space-y-3">
            <h2 className="text-base font-semibold text-neutral-100">
              How it works
            </h2>
            <div className="text-sm text-neutral-400 space-y-2 leading-relaxed">
              <p>
                This site uses{" "}
                <code className="text-emerald-400 text-xs bg-emerald-950 px-1.5 py-0.5 rounded">
                  generateStaticParams
                </code>{" "}
                to enumerate every combination of locale and page slug at build
                time.{" "}
                <a href="https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Next.js</a>{" "}
                then pre-renders each combination into a static HTML file.
              </p>
              <p>
                Translations are generated ahead of time with the{" "}
                <a href="https://generaltranslation.com/en-US/docs/cli/translate" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">GT CLI</a>{" "}
                and bundled as JSON files. At build time, each locale loads its
                translations and renders fully translated HTML. The result is a
                site where every page in every language is a static file, ready
                to be served instantly from a CDN.
              </p>
              <p>
                Combined with{" "}
                <code className="text-emerald-400 text-xs bg-emerald-950 px-1.5 py-0.5 rounded">
                  generateMetadata
                </code>
                , each locale path also gets translated page titles,
                descriptions, and{" "}
                <a href="https://ogp.me" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Open Graph</a>{" "}
                tags for optimal{" "}
                <a href="https://generaltranslation.com/en-US/blog/multilingual-nextjs-seo" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">multilingual SEO</a>.
              </p>
            </div>
          </div>
        </T>
      </main>
    </div>
  );
}
