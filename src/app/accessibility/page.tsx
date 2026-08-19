import type { Metadata } from "next";
import Container from "@/components/Container";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const PAGE_TITLE = "Accessibility Statement";
const PAGE_DESCRIPTION = `${SITE_NAME}'s commitment to web accessibility.`;
const LAST_UPDATED = "17 August 2026";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/accessibility` },
};

export default function AccessibilityPage() {
  return (
    <Container className="py-12 sm:py-16">
      <article className="max-w-3xl">
        <p className="text-sm text-muted">Last updated {LAST_UPDATED}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{PAGE_TITLE}</h1>
        <p className="mt-4 text-lg text-muted">
          We want {SITE_NAME} to be usable by as many people as possible, including people using
          assistive technology.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold tracking-tight">Our standard</h2>
            <p className="mt-3 text-muted leading-relaxed">
              We aim for this site to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at
              level AA. This is an ongoing effort, and we review and improve the site as we build
              new features.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">What we do</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted leading-relaxed">
              <li>Use semantic HTML and clear heading structure throughout the site.</li>
              <li>Ensure interactive elements (buttons, links, form fields) are reachable and operable by keyboard.</li>
              <li>Aim for sufficient colour contrast between text and background, in both light and dark modes.</li>
              <li>Label form fields (such as the number inputs in our calculators) clearly.</li>
              <li>Use a responsive layout that works across screen sizes and zoom levels.</li>
              <li>Avoid content that relies on colour alone to convey meaning.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">Known limitations</h2>
            <p className="mt-3 text-muted leading-relaxed">
              We&apos;re not aware of any significant accessibility barriers on the site at this
              time, but we haven&apos;t yet completed a full third-party audit. We&apos;ll update
              this section if a formal audit is carried out or specific issues are identified.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">Tell us about accessibility problems</h2>
            <p className="mt-3 text-muted leading-relaxed">
              If you find any part of this site difficult to use, please let us know, for example
              if a calculator is hard to operate with a screen reader or keyboard, or if text is
              hard to read. Email{" "}
              <a href="mailto:admin@uktaxes.co.uk" className="text-primary hover:underline">
                admin@uktaxes.co.uk
              </a>{" "}
              with details of the page and the issue, and we&apos;ll do our best to fix it.
            </p>
          </section>
        </div>
      </article>
    </Container>
  );
}
