"use client";

import { useMemo, useState } from "react";
import { calculateTakeHomePay } from "@/lib/tax/salary";
import { formatCurrency } from "@/lib/format";
import type { IncomeTaxRegion } from "@/data/tax-rates-2026-27";
import { BandBreakdownTable, NumberField, RegionToggle, StatRow } from "./ui";

export default function SalaryCalculatorTool() {
  const [grossAnnual, setGrossAnnual] = useState(35_000);
  const [region, setRegion] = useState<IncomeTaxRegion>("rUK");
  const [pensionPercent, setPensionPercent] = useState(0);

  const result = useMemo(
    () => calculateTakeHomePay(grossAnnual, { region, pensionPercent }),
    [grossAnnual, region, pensionPercent],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <NumberField
          label="Gross annual salary"
          value={grossAnnual}
          onChange={setGrossAnnual}
          prefix="£"
        />
        <RegionToggle region={region} onChange={setRegion} />
        <NumberField
          label="Pension contribution"
          value={pensionPercent}
          onChange={setPensionPercent}
          suffix="% of salary"
        />
      </div>

      <div>
        <div className="rounded-xl bg-surface p-5">
          <StatRow label="Take-home pay per year" value={formatCurrency(result.netAnnual)} emphasis />
          <StatRow label="Per month" value={formatCurrency(result.netMonthly)} />
          <StatRow label="Per week" value={formatCurrency(result.netWeekly)} />
        </div>

        <div className="mt-6 rounded-xl bg-surface p-5">
          <StatRow label="Gross salary" value={formatCurrency(result.grossAnnual)} />
          {result.pensionContribution > 0 && (
            <StatRow label="Pension contribution" value={`− ${formatCurrency(result.pensionContribution)}`} />
          )}
          <StatRow label="Income Tax" value={`− ${formatCurrency(result.incomeTax.totalTax)}`} />
          <StatRow
            label="National Insurance"
            value={`− ${formatCurrency(result.nationalInsurance.totalContribution)}`}
          />
        </div>

        <div className="mt-6">
          <h3 className="mb-3 text-sm font-medium text-muted">Income Tax breakdown</h3>
          <BandBreakdownTable
            rows={result.incomeTax.bands.map((b) => ({
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
