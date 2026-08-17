import { type ReactNode } from "react";
import Link from "next/link";
import Container from "./Container";
import Card from "./Card";
import { type Calculator, getRelatedCalculators } from "@/lib/calculators";
import { getBlogPost } from "@/lib/blog";
import { RATES_LAST_VERIFIED, TAX_YEAR } from "@/data/tax-rates-2026-27";
import { calculatorJsonLd } from "@/lib/seo";

export default function CalculatorPage({
  calculator,
  tool,
}: {
  calculator: Calculator;
  tool?: ReactNode;
}) {
  const related = getRelatedCalculators(calculator);
  const explainerPost = calculator.explainerSlug ? getBlogPost(calculator.explainerSlug) : undefined;

  return (
    <Container className="py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorJsonLd(calculator)) }}
      />
      <div className="max-w-3xl">
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {calculator.h1}
        </h1>
        <p className="mt-4 text-lg text-muted">{calculator.description}</p>
      </div>

      <Card className="mt-10">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-muted">
            {TAX_YEAR} rates · last verified{" "}
            <span className="text-foreground">{RATES_LAST_VERIFIED}</span>
          </p>
        </div>
        <div className="mt-6">
          {tool ?? (
            <div className="flex min-h-64 items-center justify-center rounded-xl border border-dashed border-border text-sm text-muted">
              Calculator tool coming soon
            </div>
          )}
        </div>
      </Card>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-balance text-xl font-semibold tracking-tight">How this is calculated</h2>
        <div className="mt-4 space-y-4 text-muted leading-relaxed">
          {calculator.explainer.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        {explainerPost && (
          <p className="mt-4 text-sm">
            <Link
              href={`/blog/${explainerPost.slug}`}
              className="rounded-sm text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Read more: {explainerPost.title} <span aria-hidden="true">→</span>
            </Link>
          </p>
        )}
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-balance text-xl font-semibold tracking-tight">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-6">
          {calculator.faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-medium">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-balance text-xl font-semibold tracking-tight">
            Related calculators
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Card className="h-full transition-colors duration-200 hover:border-primary">
                  <h3 className="font-medium">{r.name}</h3>
                  <p className="mt-2 text-sm text-muted">{r.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
