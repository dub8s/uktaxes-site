"use client";

import { type IncomeTaxRegion } from "@/data/tax-rates-2026-27";
import { formatCurrency, formatPercent } from "@/lib/format";

export function NumberField({
  label,
  value,
  onChange,
  prefix,
  suffix,
  min = 0,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="mt-2 flex items-center rounded-xl border border-border bg-background focus-within:border-primary">
        {prefix && <span className="pl-4 text-muted">{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          min={min}
          value={Number.isNaN(value) ? "" : value}
          onChange={(e) => onChange(e.target.valueAsNumber || 0)}
          className="w-full bg-transparent px-4 py-3 text-lg font-medium outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        {suffix && <span className="pr-4 text-muted">{suffix}</span>}
      </div>
    </label>
  );
}

export function RegionToggle({
  region,
  onChange,
}: {
  region: IncomeTaxRegion;
  onChange: (region: IncomeTaxRegion) => void;
}) {
  return (
    <div>
      <span className="text-sm font-medium text-foreground">Where do you live?</span>
      <div className="mt-2 inline-flex rounded-xl border border-border p-1">
        {(
          [
            { value: "rUK", label: "England, Wales or NI" },
            { value: "scotland", label: "Scotland" },
          ] as const
        ).map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              region === option.value
                ? "bg-primary text-primary-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function StatRow({
  label,
  value,
  emphasis = false,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between py-2">
      <span className={emphasis ? "font-medium" : "text-sm text-muted"}>{label}</span>
      <span className={emphasis ? "text-2xl font-semibold" : "text-sm font-medium"}>
        {value}
      </span>
    </div>
  );
}

export function BandBreakdownTable({
  rows,
}: {
  rows: { name: string; taxableAmount: number; rate: number; amount: number }[];
}) {
  if (rows.length === 0) {
    return <p className="text-sm text-muted">No tax due at this income level.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border text-left text-muted">
            <th className="py-2 font-medium">Band</th>
            <th className="py-2 font-medium">Taxed at</th>
            <th className="py-2 text-right font-medium">Amount in band</th>
            <th className="py-2 text-right font-medium">Tax</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-b border-border last:border-0">
              <td className="py-2.5">{row.name}</td>
              <td className="py-2.5">{formatPercent(row.rate)}</td>
              <td className="py-2.5 text-right">{formatCurrency(row.taxableAmount, true)}</td>
              <td className="py-2.5 text-right">{formatCurrency(row.amount, true)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
