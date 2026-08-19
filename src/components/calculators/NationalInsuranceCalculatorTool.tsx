"use client";

import { useMemo, useState } from "react";
import { calculateNationalInsurance } from "@/lib/tax/nationalInsurance";
import { formatCurrency } from "@/lib/format";
import { NI_PRIMARY_THRESHOLD } from "@/data/tax-rates-2026-27";
import { BandBreakdownTable, NumberField, StatRow } from "./ui";

export default function NationalInsuranceCalculatorTool() {
  const [grossIncome, setGrossIncome] = useState(35_000);

  const result = useMemo(() => calculateNationalInsurance(grossIncome), [grossIncome]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <NumberField
          label="Annual earnings"
          value={grossIncome}
          onChange={setGrossIncome}
          prefix="£"
        />
        <p className="text-sm text-muted">
          Class 1 (employee) National Insurance, calculated on earnings above{" "}
          {formatCurrency(NI_PRIMARY_THRESHOLD)} a year. This is an annualised estimate for a
          standard Category A employee with earnings spread evenly across the year; NI is
          normally worked out per pay period, so bonuses, irregular pay, or multiple jobs can
          make your actual deduction differ.
        </p>
      </div>

      <div>
        <div className="rounded-xl bg-surface p-5">
          <StatRow
            label="National Insurance due"
            value={formatCurrency(result.totalContribution)}
            emphasis
          />
        </div>

        <div className="mt-6">
          <h3 className="mb-3 text-sm font-medium text-muted">Breakdown</h3>
          <BandBreakdownTable
            rows={result.bands.map((b) => ({
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
