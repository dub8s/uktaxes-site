import {
  CGT_ANNUAL_EXEMPT_AMOUNT,
  CGT_BASIC_RATE,
  CGT_HIGHER_RATE,
  RUK_INCOME_TAX_BANDS,
} from "@/data/tax-rates-2026-27";

export type CapitalGainsTaxResult = {
  gain: number;
  annualExemptAmount: number;
  chargeableGain: number;
  amountAtBasicRate: number;
  amountAtHigherRate: number;
  taxAtBasicRate: number;
  taxAtHigherRate: number;
  totalTax: number;
};

const BASIC_RATE_BAND_WIDTH = RUK_INCOME_TAX_BANDS[0].to!;

/**
 * Capital Gains Tax on a chargeable gain, using the Annual Exempt Amount and
 * the 18%/24% rates that have applied to all asset types since 30 October
 * 2024. How much of the gain falls in the basic-rate band depends on the
 * taxpayer's other taxable income (after their Personal Allowance) — CGT
 * band thresholds are UK-wide, not devolved, so this does not vary by region.
 */
export function calculateCapitalGainsTax(
  gain: number,
  otherTaxableIncome = 0,
): CapitalGainsTaxResult {
  const g = Math.max(0, gain);
  const chargeableGain = Math.max(0, g - CGT_ANNUAL_EXEMPT_AMOUNT);

  const remainingBasicRateBand = Math.max(
    0,
    BASIC_RATE_BAND_WIDTH - Math.max(0, otherTaxableIncome),
  );
  const amountAtBasicRate = Math.min(chargeableGain, remainingBasicRateBand);
  const amountAtHigherRate = chargeableGain - amountAtBasicRate;

  const taxAtBasicRate = amountAtBasicRate * CGT_BASIC_RATE;
  const taxAtHigherRate = amountAtHigherRate * CGT_HIGHER_RATE;

  return {
    gain: g,
    annualExemptAmount: CGT_ANNUAL_EXEMPT_AMOUNT,
    chargeableGain,
    amountAtBasicRate,
    amountAtHigherRate,
    taxAtBasicRate,
    taxAtHigherRate,
    totalTax: taxAtBasicRate + taxAtHigherRate,
  };
}
