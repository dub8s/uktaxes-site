import Link from "next/link";
import Container from "./Container";
import { calculators } from "@/lib/calculators";

export default function Header() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-50">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          uktaxes<span className="text-primary">.co.uk</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <div className="group relative">
            <button className="hover:text-foreground transition-colors">
              Calculators
            </button>
            <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
              <div className="w-64 rounded-xl border border-border bg-surface p-2 shadow-lg">
                {calculators.map((calc) => (
                  <Link
                    key={calc.slug}
                    href={`/${calc.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm text-foreground hover:bg-background"
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
      </Container>
    </header>
  );
}
