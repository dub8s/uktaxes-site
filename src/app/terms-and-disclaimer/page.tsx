import type { Metadata } from "next";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const PAGE_TITLE = "Terms & Disclaimer";
const PAGE_DESCRIPTION =
  "Important information about the limits of uktaxes.co.uk's calculators and your use of this site.";
const LAST_UPDATED = "17 August 2026";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/terms-and-disclaimer` },
};

export default function TermsAndDisclaimerPage() {
  return (
    <Container className="py-12 sm:py-16">
      <article className="max-w-3xl">
        <p className="text-sm text-muted">Last updated {LAST_UPDATED}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{PAGE_TITLE}</h1>
        <p className="mt-4 text-lg text-muted">
          Please read this page carefully before relying on any figures from {SITE_NAME}. By
          using this site, you agree to the terms below.
        </p>

        <Card className="mt-8 border-primary/30 bg-surface">
          <p className="text-sm font-medium text-foreground">In short</p>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            {SITE_NAME} gives general estimates for information purposes only. It is{" "}
            <strong className="text-foreground">not</strong> regulated financial or tax advice, we
            are <strong className="text-foreground">not</strong> FCA-authorised, and you
            should always check important figures against HMRC or a qualified accountant before
            making decisions.
          </p>
        </Card>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold tracking-tight">1. General estimates only, not advice</h2>
            <div className="mt-3 space-y-4 text-muted leading-relaxed">
              <p>
                The calculators, articles, and other content on {SITE_NAME} are provided for
                general information and illustrative purposes only. They are designed to give you
                a quick estimate based on the details you enter, using HMRC&apos;s published rates
                and thresholds for the relevant tax year.
              </p>
              <p>
                Nothing on this site constitutes financial advice, tax advice, legal advice, or
                any other form of regulated advice, and nothing on this site should be treated as
                a personal recommendation to take (or not take) any particular course of action.
              </p>
              <p>
                {SITE_NAME} is operated by Goodstart Influx Ltd, a company registered in England
                and Wales (company number 14908851), with its registered office at 141 Chase
                Side, Enfield, England, EN2 0PN.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">2. We are not FCA-authorised</h2>
            <p className="mt-3 text-muted leading-relaxed">
              {SITE_NAME} is not authorised or regulated by the Financial Conduct Authority (FCA),
              and we do not provide regulated financial advice or arrange, advise on, or deal in
              any regulated financial products or services. If you need advice specific to your
              circumstances, please speak to a qualified, regulated financial adviser or a
              chartered accountant/tax adviser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">3. No guarantee of accuracy</h2>
            <div className="mt-3 space-y-4 text-muted leading-relaxed">
              <p>
                We aim to keep our calculators up to date with HMRC&apos;s published rates,
                thresholds, and allowances, and we make reasonable efforts to check them. However,
                we do not guarantee that any result is accurate, complete, or up to date, and we
                give no warranty of any kind about the calculators or their output.
              </p>
              <p>
                Everyone&apos;s tax position is different. Factors our calculators may not fully
                account for include (among others) your residency status, marriage allowance,
                student loan repayments, pension arrangements, unusual or multiple income sources,
                specific reliefs and allowances, and changes in-year to tax rules. Any of these can
                change the correct answer for your situation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">4. Limitation of liability</h2>
            <p className="mt-3 text-muted leading-relaxed">
              To the fullest extent permitted by law, {SITE_NAME} and its operators exclude all
              liability for any loss or damage (whether direct, indirect, consequential, financial,
              or otherwise) arising out of, or in connection with, your use of, or reliance on,
              this site or its calculators, including any decisions you make based on the
              results. This does not exclude or limit any liability that cannot lawfully be
              excluded or limited, such as liability for death or personal injury caused by
              negligence, or for fraud.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">5. Always verify before you act</h2>
            <p className="mt-3 text-muted leading-relaxed">
              Before making any financial or tax decision, please verify the relevant figures using
              official HMRC tools and guidance at{" "}
              <a
                href="https://www.gov.uk/government/organisations/hm-revenue-customs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                gov.uk
              </a>
              , or by speaking to a qualified, regulated accountant or tax adviser. This is
              especially important where the amounts involved are significant, or your
              circumstances are unusual.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">6. Reporting a calculator error</h2>
            <div className="mt-3 space-y-4 text-muted leading-relaxed">
              <p>
                We work to keep our calculators correct, but if you believe you&apos;ve found an
                error, for example a result that doesn&apos;t match HMRC&apos;s own figures for
                the same inputs, please tell us. Email{" "}
                <a href="mailto:admin@uktaxes.co.uk" className="text-primary hover:underline">
                  admin@uktaxes.co.uk
                </a>{" "}
                with details of the calculator, the inputs you used, and what you expected to see.
              </p>
              <p>
                We aim to investigate reported errors and, where an error is confirmed, correct it
                within a reasonable timeframe.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">7. Intellectual property</h2>
            <p className="mt-3 text-muted leading-relaxed">
              The design, text, and code of this site belong to {SITE_NAME} or its licensors,
              unless otherwise stated. You may use the calculators for your own personal or
              business purposes, but you may not copy, republish, or resell the site&apos;s content
              or code without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">8. Third-party links</h2>
            <p className="mt-3 text-muted leading-relaxed">
              We may link to third-party websites, such as gov.uk, for your convenience. We
              don&apos;t control those sites and aren&apos;t responsible for their content or
              accuracy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">9. Changes to these terms</h2>
            <p className="mt-3 text-muted leading-relaxed">
              We may update these terms from time to time, for example to reflect changes in tax
              rules or how the site works. We&apos;ll update the &ldquo;last updated&rdquo; date at
              the top of this page when we do. Continuing to use the site after changes are posted
              means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">10. Governing law</h2>
            <p className="mt-3 text-muted leading-relaxed">
              These terms are governed by the laws of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">Contact us</h2>
            <p className="mt-3 text-muted leading-relaxed">
              Questions about these terms, or want to report an error? Email{" "}
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
