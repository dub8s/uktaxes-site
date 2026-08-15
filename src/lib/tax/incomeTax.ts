import {
  PERSONAL_ALLOWANCE,
  PERSONAL_ALLOWANCE_TAPER_THRESHOLD,
  RUK_INCOME_TAX_BANDS,
  SCOTLAND_INCOME_TAX_BANDS,
  type IncomeTaxRegion,
  type TaxBand,
} from "@/data/tax-rates-2026-27";

export type IncomeTaxBandResult = {
  band: TaxBand;
  taxableAmount: number;
  tax: number;
};

export type IncomeTaxResult = {
  grossIncome: number;
  personalAllowance: number;
  taxableIncome: number;
  bands: IncomeTaxBandResult[];
  totalTax: number;
  effectiveRate: number;
};

/**
 * Personal Allowance is reduced by £1 for every £2 of income above £100,000,
 * fully withdrawn at £125,140.
 */
export function calculatePersonalAllowance(grossIncome: number): number {
  if (grossIncome <= PERSONAL_ALLOWANCE_TAPER_THRESHOLD) return PERSONAL_ALLOWANCE;
  const reduction = Math.floor((grossIncome - PERSONAL_ALLOWANCE_TAPER_THRESHOLD) / 2);
  return Math.max(0, PERSONAL_ALLOWANCE - reduction);
}

export function getIncomeTaxBands(region: IncomeTaxRegion): TaxBand[] {
  return region === "scotland" ? SCOTLAND_INCOME_TAX_BANDS : RUK_INCOME_TAX_BANDS;
}

/**
 * Taxes the amount range [start, end) against a set of cumulative bands,
 * as if it were stacked on top of `start` worth of income that already
 * filled the lower bands. Used both for a single income's own bands and
 * for income (like dividends) stacked on top of other income.
 */
export function bandBreakdown(start: number, end: number, bands: TaxBand[]): IncomeTaxBandResult[] {
  const results: IncomeTaxBandResult[] = [];
  const rangeStart = Math.max(0, start);
  const rangeEnd = Math.max(rangeStart, end);

  for (const band of bands) {
    const bandTo = band.to === null ? Infinity : band.to;
    const overlapStart = Math.max(rangeStart, band.from);
    const overlapEnd = Math.min(rangeEnd, bandTo);
    const taxableAmount = Math.max(0, overlapEnd - overlapStart);

    if (taxableAmount > 0) {
      results.push({ band, taxableAmount, tax: taxableAmount * band.rate });
    }
  }

  return results;
}

export function bandTax(start: number, end: number, bands: TaxBand[]): number {
  return bandBreakdown(start, end, bands).reduce((sum, b) => sum + b.tax, 0);
}

export function calculateIncomeTax(
  grossIncome: number,
  region: IncomeTaxRegion = "rUK",
): IncomeTaxResult {
  const gross = Math.max(0, grossIncome);
  const personalAllowance = calculatePersonalAllowance(gross);
  const taxableIncome = Math.max(0, gross - personalAllowance);

  const bands = bandBreakdown(0, taxableIncome, getIncomeTaxBands(region));
  const totalTax = bands.reduce((sum, b) => sum + b.tax, 0);

  return {
    grossIncome: gross,
    personalAllowance,
    taxableIncome,
    bands,
    totalTax,
    effectiveRate: gross > 0 ? totalTax / gross : 0,
  };
}
