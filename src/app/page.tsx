import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { ButtonLink } from "@/components/Button";
import { calculators } from "@/lib/calculators";
import { SITE_URL, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />
      <section className="border-b border-border bg-surface/50">
        <Container className="py-20 sm:py-28 text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            UK tax calculators that are actually accurate
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
            Free, fast, up-to-date calculators for salary, Income Tax, National
            Insurance, dividends, self-employment, and capital gains — sourced
            directly from HMRC&apos;s published rates.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <ButtonLink href="/salary-calculator">Try the salary calculator</ButtonLink>
            <ButtonLink href="/blog" variant="secondary">
              Read the blog
            </ButtonLink>
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight">All calculators</h2>
        <p className="mt-2 text-muted">
          Pick a calculator to get an instant, accurate breakdown.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calc) => (
            <Link key={calc.slug} href={`/${calc.slug}`}>
              <Card className="h-full transition-colors hover:border-primary">
                <h3 className="font-medium">{calc.name}</h3>
                <p className="mt-2 text-sm text-muted">{calc.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
