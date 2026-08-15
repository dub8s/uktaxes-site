export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-uk-tax-bands-work-2026-27",
    title: "How UK tax bands work in 2026/27",
    description:
      "A plain-English guide to how Income Tax bands, the Personal Allowance, and National Insurance thresholds fit together.",
    date: "2026-04-06",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
