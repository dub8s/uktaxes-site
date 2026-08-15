import Link from "next/link";
import Container from "./Container";
import { ButtonLink } from "./Button";
import { calculators } from "@/lib/calculators";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            £
          </span>
          <span className="text-base font-semibold tracking-tight">uktaxes.co.uk</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <div className="group relative">
            <button className="hover:text-foreground transition-colors">
              Calculators
            </button>
            <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
              <div className="w-64 rounded-xl border border-border bg-background p-2 shadow-lg">
                {calculators.map((calc) => (
                  <Link
                    key={calc.slug}
                    href={`/${calc.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm text-foreground hover:bg-surface"
                  >
                    {calc.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
        </nav>
        <ButtonLink href="/salary-calculator" variant="dark" className="text-xs sm:text-sm">
          Try it free
        </ButtonLink>
      </Container>
    </header>
  );
}
