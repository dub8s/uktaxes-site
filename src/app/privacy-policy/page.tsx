import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const PAGE_TITLE = "Privacy Policy";
const PAGE_DESCRIPTION =
  "How uktaxes.co.uk collects, uses, and protects your data, in line with UK GDPR.";
const LAST_UPDATED = "17 August 2026";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-12 sm:py-16">
      <article className="max-w-3xl">
        <p className="text-sm text-muted">Last updated {LAST_UPDATED}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{PAGE_TITLE}</h1>
        <p className="mt-4 text-lg text-muted">
          This policy explains what data {SITE_NAME} collects, why, and what rights you have
          over it. It&apos;s written under UK GDPR and the Data Protection Act 2018.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold tracking-tight">Who we are</h2>
            <div className="mt-3 space-y-4 text-muted leading-relaxed">
              <p>
                {SITE_NAME} is operated by Goodstart Influx Ltd, a company registered in England
                and Wales (company number 14908851), with its registered office at 141 Chase
                Side, Enfield, England, EN2 0PN. Goodstart Influx Ltd is the data controller for
                the personal data described in this policy.
              </p>
              <p>
                You can contact us about privacy matters at{" "}
                <a href="mailto:admin@uktaxes.co.uk" className="text-primary hover:underline">
                  admin@uktaxes.co.uk
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">The short version</h2>
            <div className="mt-3 space-y-4 text-muted leading-relaxed">
              <p>
                Our calculators run entirely in your browser. The figures you type in (income,
                gains, etc.) are used to calculate a result on your device and are{" "}
                <strong className="text-foreground">never sent to our servers, stored, or
                seen by us</strong>. We don&apos;t require an account, and we don&apos;t ask for
                your name, address, or National Insurance number.
              </p>
              <p>
                The only personal data we may collect is standard website analytics, and only if
                you consent to it via our cookie banner.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">What data we collect</h2>
            <div className="mt-3 space-y-4 text-muted leading-relaxed">
              <p>
                <strong className="text-foreground">Calculator inputs.</strong> All calculations
                happen client-side, in your browser. Nothing you type into a calculator is
                transmitted to us or to any third party.
              </p>
              <p>
                <strong className="text-foreground">Analytics data.</strong> We use (or may use)
                Google Analytics to understand how the site is used, for example which pages
                are visited, how long people stay, approximate location (derived from IP
                address), device/browser type, and referring website. This is only collected if
                you accept analytics cookies in our consent banner; if you reject or ignore it, no
                analytics script runs. See our{" "}
                <Link href="/cookie-policy" className="text-primary hover:underline">
                  Cookie Policy
                </Link>{" "}
                for the full list of cookies this can set.
              </p>
              <p>
                <strong className="text-foreground">Technical/server logs.</strong> Our hosting
                provider may automatically log basic technical information (such as IP address and
                request timestamps) for security and reliability purposes, in line with their own
                privacy practices.
              </p>
              <p>
                We do not currently have any forms, sign-ups, or accounts, so we don&apos;t collect
                names, email addresses, or payment details through the site itself, aside from
                anyone who chooses to email us directly.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">Why we use this data</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted leading-relaxed">
              <li>
                <strong className="text-foreground">Analytics (with consent):</strong> to
                understand which calculators are useful, spot broken pages, and improve the site.
                Legal basis: your consent, which you can withdraw at any time.
              </li>
              <li>
                <strong className="text-foreground">Emails you send us:</strong> to respond to
                your query, including reports of calculator errors. Legal basis: legitimate
                interests (running and improving the service).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">How long we keep data</h2>
            <div className="mt-3 space-y-4 text-muted leading-relaxed">
              <p>
                We don&apos;t store your calculator inputs at all, so there&apos;s nothing to
                retain. Analytics data collected via Google Analytics is retained according to
                Google&apos;s own retention settings for our account. Emails you send us are kept
                only as long as needed to deal with your query and any follow-up.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">Who we share data with</h2>
            <div className="mt-3 space-y-4 text-muted leading-relaxed">
              <p>
                If analytics cookies are enabled, aggregated/pseudonymised usage data is processed
                by Google (Google Analytics). Google may process this data outside the UK; where it
                does, it relies on its own data transfer safeguards (such as the UK/EU Standard
                Contractual Clauses). We don&apos;t sell your data, and we don&apos;t share it with
                anyone for marketing purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">Your rights</h2>
            <div className="mt-3 space-y-4 text-muted leading-relaxed">
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>be informed about how your data is used (this policy);</li>
                <li>access the personal data we hold about you;</li>
                <li>have inaccurate data corrected;</li>
                <li>have your data erased, in some circumstances;</li>
                <li>restrict or object to certain processing;</li>
                <li>data portability, where relevant; and</li>
                <li>withdraw consent to analytics at any time (see &ldquo;Manage cookie preferences&rdquo; in the footer).</li>
              </ul>
              <p>
                To exercise any of these rights, email us at{" "}
                <a href="mailto:admin@uktaxes.co.uk" className="text-primary hover:underline">
                  admin@uktaxes.co.uk
                </a>
                . You also have the right to complain to the UK Information Commissioner&apos;s
                Office (ICO) at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  ico.org.uk
                </a>{" "}
                if you&apos;re unhappy with how we&apos;ve handled your data.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">Children</h2>
            <p className="mt-3 text-muted leading-relaxed">
              This site is intended for general use and isn&apos;t directed at children. We
              don&apos;t knowingly collect personal data from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">Changes to this policy</h2>
            <p className="mt-3 text-muted leading-relaxed">
              We may update this policy from time to time, for example if the analytics tools we
              use change. We&apos;ll update the &ldquo;last updated&rdquo; date at the top of this
              page when we do.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">Contact us</h2>
            <p className="mt-3 text-muted leading-relaxed">
              Questions about this policy or your data? Email{" "}
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
