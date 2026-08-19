import Link from "next/link";
import Container from "./Container";
import ManageCookiesLink from "./ManageCookiesLink";
import { calculators } from "@/lib/calculators";

const footerLinkClass =
  "rounded-sm text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
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
                  <Link href={`/${calc.slug}`} className={footerLinkClass}>
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
                  <Link href={`/${calc.slug}`} className={footerLinkClass}>
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
                <Link href="/blog" className={footerLinkClass}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/terms-and-disclaimer" className={footerLinkClass}>
                  Terms &amp; Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className={footerLinkClass}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className={footerLinkClass}>
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className={footerLinkClass}>
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p>&copy; {new Date().getFullYear()} uktaxes.co.uk. All rights reserved.</p>
            <ManageCookiesLink />
          </div>
          <p>
            For guidance only, not financial advice. Always verify figures
            against HMRC.
          </p>
        </div>
      </Container>
    </footer>
  );
}
