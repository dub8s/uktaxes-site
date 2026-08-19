"use client";

import { useMemo, useState } from "react";
import { calculateIncomeTax } from "@/lib/tax/incomeTax";
import { formatCurrency, formatPercent } from "@/lib/format";
import type { IncomeTaxRegion } from "@/data/tax-rates-2026-27";
import { BandBreakdownTable, NumberField, RegionToggle, ResultsDisclaimer, StatRow } from "./ui";

export default function IncomeTaxCalculatorTool() {
  const [grossIncome, setGrossIncome] = useState(35_000);
  const [region, setRegion] = useState<IncomeTaxRegion>("rUK");

  const result = useMemo(() => calculateIncomeTax(grossIncome, region), [grossIncome, region]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <NumberField
          label="Annual income"
          value={grossIncome}
          onChange={setGrossIncome}
          prefix="£"
        />
        <RegionToggle region={region} onChange={setRegion} />
      </div>

      <div>
        <div className="rounded-xl bg-surface p-5">
          <StatRow label="Income Tax due" value={formatCurrency(result.totalTax)} emphasis />
          <StatRow label="Effective tax rate" value={formatPercent(result.effectiveRate)} />
        </div>
        <ResultsDisclaimer />

        <div className="mt-6 rounded-xl bg-surface p-5">
          <StatRow label="Gross income" value={formatCurrency(result.grossIncome)} />
          <StatRow label="Personal Allowance" value={formatCurrency(result.personalAllowance)} />
          <StatRow label="Taxable income" value={formatCurrency(result.taxableIncome)} />
        </div>

        <div className="mt-6">
          <h3 className="mb-3 text-sm font-medium text-muted">Tax by band</h3>
          <BandBreakdownTable
            rows={result.bands.map((b) => ({
              name: b.band.name,
              taxableAmount: b.taxableAmount,
              rate: b.band.rate,
              amount: b.tax,
            }))}
          />
        </div>
      </div>
    </div>
  );
}
