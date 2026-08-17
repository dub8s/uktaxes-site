import Link from "next/link";
import Container from "./Container";
import { calculators } from "@/lib/calculators";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                £
              </span>
              <span className="text-base font-semibold tracking-tight">uktaxes.co.uk</span>
            </span>
            <p className="mt-3 text-sm text-muted">
              Free UK tax calculators, kept up to date with the latest HMRC
              rates.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Calculators</h3>
            <ul className="mt-3 space-y-2">
              {calculators.slice(0, 4).map((calc) => (
                <li key={calc.slug}>
                  <Link
                    href={`/${calc.slug}`}
                    className="rounded-sm text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  >
                    {calc.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">More</h3>
            <ul className="mt-3 space-y-2">
              {calculators.slice(4).map((calc) => (
                <li key={calc.slug}>
                  <Link
                    href={`/${calc.slug}`}
                    className="rounded-sm text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  >
                    {calc.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} uktaxes.co.uk. All rights reserved.</p>
          <p>
            For guidance only, not financial advice. Always verify figures
            against HMRC.
          </p>
        </div>
      </Container>
    </footer>
  );
}
