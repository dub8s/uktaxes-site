"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "./Container";
import { ButtonLink } from "./Button";
import { calculators } from "@/lib/calculators";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className={`flex items-center gap-2.5 rounded-sm ${focusRing}`}>
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            £
          </span>
          <span className="text-base font-semibold tracking-tight">uktaxes.co.uk</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <div className="group relative">
            <button
              type="button"
              className={`cursor-pointer rounded-sm transition-colors hover:text-foreground ${focusRing}`}
            >
              Calculators
            </button>
            <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-64 rounded-xl border border-border bg-background p-2 shadow-lg">
                {calculators.map((calc) => (
                  <Link
                    key={calc.slug}
                    href={`/${calc.slug}`}
                    className={`block rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-surface ${focusRing}`}
                  >
                    {calc.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/blog" className={`rounded-sm transition-colors hover:text-foreground ${focusRing}`}>
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/salary-calculator" variant="dark" className="text-xs sm:text-sm">
            Try it free
          </ButtonLink>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className={`flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-surface md:hidden ${focusRing}`}
          >
            {mobileOpen ? (
              <svg className="size-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M2 2l12 12M14 2L2 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg className="size-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M1 4h14M1 8h14M1 12h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            <span className="px-2 pb-1 text-xs font-medium uppercase tracking-wide text-muted">
              Calculators
            </span>
            {calculators.map((calc) => (
              <Link
                key={calc.slug}
                href={`/${calc.slug}`}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-2 py-2.5 text-sm text-foreground transition-colors hover:bg-surface ${focusRing}`}
              >
                {calc.name}
              </Link>
            ))}
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className={`mt-2 rounded-lg border-t border-border px-2 pt-4 pb-2.5 text-sm text-foreground transition-colors hover:bg-surface ${focusRing}`}
            >
              Blog
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
