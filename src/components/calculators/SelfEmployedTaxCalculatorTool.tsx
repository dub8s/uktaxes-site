"use client";

import { useMemo, useState } from "react";
import { calculateSelfEmployedTax } from "@/lib/tax/selfEmployed";
import { formatCurrency } from "@/lib/format";
import type { IncomeTaxRegion } from "@/data/tax-rates-2026-27";
import { BandBreakdownTable, NumberField, RegionToggle, StatRow } from "./ui";

export default function SelfEmployedTaxCalculatorTool() {
  const [profit, setProfit] = useState(35_000);
  const [region, setRegion] = useState<IncomeTaxRegion>("rUK");
  const [payVoluntaryClass2, setPayVoluntaryClass2] = useState(false);

  const result = useMemo(
    () => calculateSelfEmployedTax(profit, { region, payVoluntaryClass2 }),
    [profit, region, payVoluntaryClass2],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <NumberField label="Annual profit" value={profit} onChange={setProfit} prefix="£" />
        <RegionToggle region={region} onChange={setRegion} />

        {result.class2VoluntaryAvailable && (
          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-4 text-sm transition-colors hover:bg-surface has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary/60 has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-background">
            <input
              type="checkbox"
              checked={payVoluntaryClass2}
              onChange={(e) => setPayVoluntaryClass2(e.target.checked)}
              className="mt-0.5 size-4 cursor-pointer accent-primary focus-visible:outline-none"
            />
            <span>
              Pay voluntary Class 2 National Insurance (
              {formatCurrency(result.class2VoluntaryAnnualCost, true)}/year) to protect your State
              Pension record.
            </span>
          </label>
        )}
      </div>

      <div>
        <div className="rounded-xl bg-surface p-5">
          <StatRow label="Total tax and NI due" value={formatCurrency(result.totalTaxAndNI)} emphasis />
          <StatRow label="Income Tax" value={formatCurrency(result.incomeTax.totalTax)} />
          <StatRow label="Class 4 National Insurance" value={formatCurrency(result.class4.totalContribution)} />
          {result.class2Paid > 0 && (
            <StatRow label="Voluntary Class 2 National Insurance" value={formatCurrency(result.class2Paid)} />
          )}
        </div>

        <p className="mt-4 text-sm text-muted">
          {result.class2CreditedAutomatically
            ? "Your profit is above the Small Profits Threshold, so you get a qualifying year for the State Pension automatically. No Class 2 payment is due."
            : "Your profit is below the Small Profits Threshold. You'll still get a qualifying year if you choose to pay Class 2 voluntarily."}
        </p>

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

        <div className="mt-6">
          <h3 className="mb-3 text-sm font-medium text-muted">Class 4 National Insurance breakdown</h3>
          <BandBreakdownTable
            rows={result.class4.bands.map((b) => ({
              name: b.name,
              taxableAmount: b.taxableAmount,
              rate: b.rate,
              amount: b.contribution,
            }))}
          />
        </div>
      </div>
    </div>
  );
}
