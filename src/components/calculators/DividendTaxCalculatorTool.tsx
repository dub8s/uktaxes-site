"use client";

import { useMemo, useState } from "react";
import { calculateDividendTax } from "@/lib/tax/dividendTax";
import { formatCurrency } from "@/lib/format";
import type { IncomeTaxRegion } from "@/data/tax-rates-2026-27";
import { BandBreakdownTable, NumberField, RegionToggle, ResultsDisclaimer, StatRow } from "./ui";

export default function DividendTaxCalculatorTool() {
  const [otherIncome, setOtherIncome] = useState(20_000);
  const [dividendIncome, setDividendIncome] = useState(10_000);
  const [region, setRegion] = useState<IncomeTaxRegion>("rUK");

  const result = useMemo(
    () => calculateDividendTax(otherIncome, dividendIncome, region),
    [otherIncome, dividendIncome, region],
  );

  const rows = [
    ...(result.dividendAllowanceUsed > 0
      ? [
          {
            name: "Dividend allowance",
            taxableAmount: result.dividendAllowanceUsed,
            rate: 0,
            amount: 0,
          },
        ]
      : []),
    ...result.bands.map((b) => ({
      name: b.band.name,
      taxableAmount: b.taxableAmount,
      rate: b.band.rate,
      amount: b.tax,
    })),
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <NumberField
          label="Other annual income (salary, etc.)"
          value={otherIncome}
          onChange={setOtherIncome}
          prefix="£"
        />
        <NumberField
          label="Dividend income"
          value={dividendIncome}
          onChange={setDividendIncome}
          prefix="£"
        />
        <RegionToggle region={region} onChange={setRegion} />
        <p className="text-sm text-muted">
          Dividend tax bands are set UK-wide, so this doesn’t change with region. Only
          your Income Tax on other income does.
        </p>
      </div>

      <div>
        <div className="rounded-xl bg-surface p-5">
          <StatRow label="Total tax due" value={formatCurrency(result.totalTax)} emphasis />
          <StatRow label="Income Tax on other income" value={formatCurrency(result.otherIncomeTax)} />
          <StatRow label="Dividend Tax" value={formatCurrency(result.dividendTax)} />
        </div>
        <ResultsDisclaimer />

        <div className="mt-6 rounded-xl bg-surface p-5">
          <StatRow label="Personal Allowance" value={formatCurrency(result.personalAllowance)} />
          <StatRow label="Taxable dividend income" value={formatCurrency(result.taxableDividendIncome)} />
        </div>

        <div className="mt-6">
          <h3 className="mb-3 text-sm font-medium text-muted">Dividend Tax breakdown</h3>
          <BandBreakdownTable rows={rows} />
        </div>
      </div>
    </div>
  );
}
