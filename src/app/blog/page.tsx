import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { blogPosts } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const TITLE = "Blog";
const DESCRIPTION =
  "Guides and explainers on UK tax: how tax bands work, National Insurance, dividends, and more.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function BlogIndexPage() {
  return (
    <Container className="py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Blog</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Guides and explainers to help you understand how UK tax actually
        works.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full transition-colors hover:border-primary">
              <p className="text-xs text-muted">
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h2 className="mt-2 font-medium">{post.title}</h2>
              <p className="mt-2 text-sm text-muted">{post.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
