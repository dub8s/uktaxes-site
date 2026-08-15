"use client";

import { useMemo, useState } from "react";
import { calculateCapitalGainsTax } from "@/lib/tax/capitalGains";
import { formatCurrency } from "@/lib/format";
import { BandBreakdownTable, NumberField, StatRow } from "./ui";

export default function CapitalGainsTaxCalculatorTool() {
  const [gain, setGain] = useState(15_000);
  const [otherTaxableIncome, setOtherTaxableIncome] = useState(30_000);

  const result = useMemo(
    () => calculateCapitalGainsTax(gain, otherTaxableIncome),
    [gain, otherTaxableIncome],
  );

  const rows = [
    ...(result.amountAtBasicRate > 0
      ? [{ name: "Basic rate", taxableAmount: result.amountAtBasicRate, rate: 0.18, amount: result.taxAtBasicRate }]
      : []),
    ...(result.amountAtHigherRate > 0
      ? [{ name: "Higher rate", taxableAmount: result.amountAtHigherRate, rate: 0.24, amount: result.taxAtHigherRate }]
      : []),
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <NumberField label="Total gain" value={gain} onChange={setGain} prefix="£" />
        <NumberField
          label="Other taxable income (after Personal Allowance)"
          value={otherTaxableIncome}
          onChange={setOtherTaxableIncome}
          prefix="£"
        />
        <p className="text-sm text-muted">
          Your other taxable income determines how much of your basic rate band is left for the
          gain — this decides the 18%/24% split.
        </p>
      </div>

      <div>
        <div className="rounded-xl bg-surface p-5">
          <StatRow label="Capital Gains Tax due" value={formatCurrency(result.totalTax)} emphasis />
        </div>

        <div className="mt-6 rounded-xl bg-surface p-5">
          <StatRow label="Total gain" value={formatCurrency(result.gain)} />
          <StatRow label="Annual Exempt Amount" value={`− ${formatCurrency(result.annualExemptAmount)}`} />
          <StatRow label="Chargeable gain" value={formatCurrency(result.chargeableGain)} />
        </div>

        <div className="mt-6">
          <h3 className="mb-3 text-sm font-medium text-muted">Tax breakdown</h3>
          <BandBreakdownTable rows={rows} />
        </div>
      </div>
    </div>
  );
}
