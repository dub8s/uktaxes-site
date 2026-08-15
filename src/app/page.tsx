import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Card from "@/components/Card";
import HeroPattern from "@/components/HeroPattern";
import { ButtonLink } from "@/components/Button";
import SalaryCalculatorTool from "@/components/calculators/SalaryCalculatorTool";
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
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <HeroPattern />

        <Container className="relative z-10 py-20 text-center sm:py-28">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
            2026/27 tax year rates
            <span aria-hidden="true">›</span>
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            UK tax calculators,
            <br />
            <span className="text-primary">made simple.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
            Free, fast, up-to-date calculators for salary, Income Tax, National
            Insurance, dividends, self-employment, and capital gains — sourced
            directly from HMRC&apos;s published rates.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <ButtonLink href="/salary-calculator" variant="dark">
              Try the salary calculator
            </ButtonLink>
            <ButtonLink href="/blog" variant="secondary">
              Read the blog
            </ButtonLink>
          </div>
        </Container>

        <Container className="relative z-10 pb-20 sm:pb-28">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-background shadow-[0_20px_60px_-15px_rgba(24,24,27,0.15)]">
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                  £
                </span>
                <span className="text-sm font-medium">Salary Calculator</span>
              </div>
              <Link
                href="/salary-calculator"
                className="text-xs font-medium text-primary hover:underline"
              >
                Open full calculator →
              </Link>
            </div>
            <div className="p-6">
              <SalaryCalculatorTool />
            </div>
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
              <Card className="h-full transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_12px_24px_-12px_rgba(24,24,27,0.15)]">
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
