import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const PAGE_TITLE = "Cookie Policy";
const PAGE_DESCRIPTION = "How uktaxes.co.uk uses cookies and similar technologies.";
const LAST_UPDATED = "17 August 2026";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/cookie-policy` },
};

const cookieRows = [
  {
    category: "Essential",
    name: "cookie-consent",
    purpose: "Remembers your cookie choice (accept/reject) so we don't ask again.",
    duration: "Until you clear your browser storage or change your choice",
    storedIn: "Local storage (not a traditional cookie)",
  },
  {
    category: "Analytics (only if accepted)",
    name: "_ga",
    purpose: "Google Analytics: distinguishes unique visitors.",
    duration: "Up to 2 years",
    storedIn: "Cookie",
  },
  {
    category: "Analytics (only if accepted)",
    name: "_ga_<container-id>",
    purpose: "Google Analytics: persists session state.",
    duration: "Up to 2 years",
    storedIn: "Cookie",
  },
];

export default function CookiePolicyPage() {
  return (
    <Container className="py-12 sm:py-16">
      <article className="max-w-3xl">
        <p className="text-sm text-muted">Last updated {LAST_UPDATED}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{PAGE_TITLE}</h1>
        <p className="mt-4 text-lg text-muted">
          This explains what cookies and similar technologies {SITE_NAME} uses, and how you can
          control them.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold tracking-tight">What cookies are</h2>
            <p className="mt-3 text-muted leading-relaxed">
              Cookies are small text files placed on your device when you visit a website. We also
              use similar browser storage (like local storage) for the same kinds of purposes.
              Some are essential for the site to work; others are optional and help us understand
              how the site is used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">The categories we use</h2>
            <div className="mt-3 space-y-4 text-muted leading-relaxed">
              <p>
                <strong className="text-foreground">Essential.</strong> Strictly necessary for the
                site to function, for example remembering your cookie consent choice. These
                don&apos;t require consent and can&apos;t be switched off, because without them the
                site wouldn&apos;t work as intended.
              </p>
              <p>
                <strong className="text-foreground">Analytics.</strong> Help us understand how
                visitors use the site (which pages are popular, how people navigate, whether
                something is broken) so we can improve it. We use, or may use, Google Analytics for
                this. These only run if you actively accept them.
              </p>
              <p>
                <strong className="text-foreground">Marketing.</strong> We don&apos;t currently use
                any marketing or advertising cookies. If that changes, we&apos;ll update this
                policy and ask for your consent before any such cookies are set.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">Our consent approach</h2>
            <div className="mt-3 space-y-4 text-muted leading-relaxed">
              <p>
                When you first visit, we show a cookie banner with two equally-weighted options:{" "}
                <strong className="text-foreground">Accept all</strong> and{" "}
                <strong className="text-foreground">Reject non-essential</strong>. No boxes are
                pre-ticked, and non-essential cookies (including analytics) are not set unless you
                actively choose to accept them. Essential cookies/storage are used either way, as
                they&apos;re necessary to remember your choice and run the site.
              </p>
              <p>
                You can change your mind at any time using the &ldquo;Manage cookie
                preferences&rdquo; link in the site footer, which clears your saved choice and
                shows the banner again.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">Cookies in detail</h2>
            <p className="mt-3 text-muted leading-relaxed">
              The analytics cookies below are only set if you&apos;ve accepted analytics cookies
              and Google Analytics is active on the site.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted">
                    <th className="py-2 font-medium">Category</th>
                    <th className="py-2 font-medium">Name</th>
                    <th className="py-2 font-medium">Purpose</th>
                    <th className="py-2 font-medium">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieRows.map((row) => (
                    <tr key={row.name} className="border-b border-border align-top last:border-0">
                      <td className="py-2.5 pr-4 text-muted">{row.category}</td>
                      <td className="py-2.5 pr-4 font-mono text-xs">{row.name}</td>
                      <td className="py-2.5 pr-4 text-muted">{row.purpose}</td>
                      <td className="py-2.5 text-muted">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">Controlling cookies in your browser</h2>
            <p className="mt-3 text-muted leading-relaxed">
              Most browsers let you block or delete cookies through their settings. Blocking
              essential cookies/storage may stop parts of the site working correctly (for example,
              you may see the consent banner on every visit).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">More information</h2>
            <p className="mt-3 text-muted leading-relaxed">
              See our{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{" "}
              for how we handle personal data more broadly. Questions? Email{" "}
              <a href="mailto:admin@uktaxes.co.uk" className="text-primary hover:underline">
                admin@uktaxes.co.uk
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </Container>
  );
}
