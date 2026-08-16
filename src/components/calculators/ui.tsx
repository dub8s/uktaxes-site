"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { type IncomeTaxRegion } from "@/data/tax-rates-2026-27";
import { formatCurrency, formatPercent } from "@/lib/format";

const thousandsFormatter = new Intl.NumberFormat("en-GB", { maximumFractionDigits: 10 });

/** Formats a plain digit string (optionally with one ".") with thousand separators. */
function formatWithThousands(digits: string): string {
  const [intPart, decPart] = digits.split(".");
  const formattedInt = intPart === "" ? "" : thousandsFormatter.format(Number(intPart));
  return decPart !== undefined ? `${formattedInt}.${decPart}` : formattedInt;
}

/** Counts digit/decimal-point characters before `index`, so we can re-find the same spot after reformatting. */
function countDigitsBefore(str: string, index: number): number {
  let count = 0;
  for (let i = 0; i < index && i < str.length; i++) {
    if (/[0-9.]/.test(str[i])) count++;
  }
  return count;
}

/** Finds the string index just after the nth digit/decimal-point character. */
function indexAfterDigitCount(str: string, digitCount: number): number {
  if (digitCount <= 0) return 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[0-9.]/.test(str[i])) {
      count++;
      if (count === digitCount) return i + 1;
    }
  }
  return str.length;
}

export function NumberField({
  label,
  value,
  onChange,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
}) {
  // Currency fields (with a "£" prefix) get live thousand-separator formatting;
  // percentage-style fields don't need it.
  const formatThousands = Boolean(prefix);

  const formatDisplay = (digits: string) => (formatThousands ? formatWithThousands(digits) : digits);

  // Track the raw typed text separately from the numeric value, so an empty
  // field stays empty instead of snapping back to a displayed "0" that new
  // keystrokes would get typed after (e.g. producing "023123").
  const [text, setText] = useState(() => (value === 0 ? "" : formatDisplay(String(value))));

  const inputRef = useRef<HTMLInputElement>(null);
  const pendingCursorRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    if (pendingCursorRef.current !== null && inputRef.current) {
      inputRef.current.setSelectionRange(pendingCursorRef.current, pendingCursorRef.current);
      pendingCursorRef.current = null;
    }
  }, [text]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const cursorPos = e.target.selectionStart ?? raw.length;
    const digitsBeforeCursor = countDigitsBefore(raw, cursorPos);

    // Strip everything but digits and a single decimal point.
    let cleaned = raw.replace(/[^\d.]/g, "");
    const firstDot = cleaned.indexOf(".");
    if (firstDot !== -1) {
      cleaned = cleaned.slice(0, firstDot + 1) + cleaned.slice(firstDot + 1).replace(/\./g, "");
    }

    const parsed = cleaned === "" || cleaned === "." ? 0 : Number(cleaned);
    if (Number.isNaN(parsed)) return;
    onChange(parsed);

    const display = formatDisplay(cleaned);
    setText(display);
    pendingCursorRef.current = indexAfterDigitCount(display, digitsBeforeCursor);
  };

  const handleBlur = () => {
    // Tidy up the display on blur (e.g. drop a trailing "." or leading zeros).
    setText(value === 0 ? "" : formatDisplay(String(value)));
  };

  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="mt-2 flex items-center rounded-xl border border-border bg-background focus-within:border-primary">
        {prefix && <span className="pl-4 text-muted">{prefix}</span>}
        <input
          ref={inputRef}
          type="text"
          inputMode="decimal"
          placeholder="0"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full bg-transparent px-4 py-3 text-lg font-medium outline-none"
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
