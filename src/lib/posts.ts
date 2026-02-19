export const postSlugs = [
  "getting-started-with-static-generation",
  "why-pre-render-every-locale",
  "seo-benefits-of-static-i18n",
] as const;

export type PostSlug = (typeof postSlugs)[number];
