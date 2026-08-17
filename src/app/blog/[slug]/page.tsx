import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { getCalculator } from "@/lib/calculators";
import { blogPostJsonLd, blogPostMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return blogPostMetadata(post);
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedCalculators = post.relatedCalculatorSlugs
    .map((s) => getCalculator(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <Container className="py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostJsonLd(post)) }}
      />
      <article className="max-w-3xl">
        <p className="text-sm tabular-nums text-muted">
          {new Date(post.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{post.description}</p>

        <div className="mt-10 space-y-8">
          {post.sections.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h2 className="text-balance text-xl font-semibold tracking-tight">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs && (
                <div className={`space-y-4 text-muted leading-relaxed ${section.heading ? "mt-3" : ""}`}>
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              )}
              {section.list && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted leading-relaxed">
                  {section.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>

      {relatedCalculators.length > 0 && (
        <section className="mt-16 max-w-3xl">
          <h2 className="text-balance text-xl font-semibold tracking-tight">
            Related calculators
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {relatedCalculators.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Card className="h-full transition-colors duration-200 hover:border-primary">
                  <h3 className="font-medium">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted">{c.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
