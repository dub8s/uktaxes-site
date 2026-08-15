import {
  bandBreakdown,
  bandTax,
  calculatePersonalAllowance,
  getIncomeTaxBands,
  type IncomeTaxBandResult,
} from "./incomeTax";
import { DIVIDEND_ALLOWANCE, DIVIDEND_TAX_BANDS, type IncomeTaxRegion } from "@/data/tax-rates-2026-27";

export type DividendTaxResult = {
  otherIncome: number;
  dividendIncome: number;
  personalAllowance: number;
  taxableOtherIncome: number;
  otherIncomeTax: number;
  dividendAllowanceUsed: number;
  taxableDividendIncome: number;
  bands: IncomeTaxBandResult[];
  dividendTax: number;
  totalTax: number;
};

/**
 * Dividend income sits "on top of" other income: the Personal Allowance and
 * lower tax bands are used by other income first, then the Dividend
 * Allowance, then any remaining dividend income is taxed at the dividend
 * rate for whichever band(s) it falls into. Dividend bands are UK-wide even
 * for Scottish taxpayers (dividend tax is a reserved matter).
 */
export function calculateDividendTax(
  otherIncome: number,
  dividendIncome: number,
  region: IncomeTaxRegion = "rUK",
): DividendTaxResult {
  const other = Math.max(0, otherIncome);
  const dividends = Math.max(0, dividendIncome);
  const totalIncome = other + dividends;

  const personalAllowance = calculatePersonalAllowance(totalIncome);
  const taxableOtherIncome = Math.max(0, other - personalAllowance);
  const unusedAllowance = Math.max(0, personalAllowance - other);
  const taxableDividendGross = Math.max(0, dividends - unusedAllowance);
  const dividendAllowanceUsed = Math.min(DIVIDEND_ALLOWANCE, taxableDividendGross);
  const taxableDividendIncome = taxableDividendGross - dividendAllowanceUsed;

  const otherIncomeTax = bandTax(0, taxableOtherIncome, getIncomeTaxBands(region));

  const cursor = taxableOtherIncome;
  const bands = bandBreakdown(
    cursor + dividendAllowanceUsed,
    cursor + taxableDividendGross,
    DIVIDEND_TAX_BANDS,
  );
  const dividendTax = bands.reduce((sum, b) => sum + b.tax, 0);

  return {
    otherIncome: other,
    dividendIncome: dividends,
    personalAllowance,
    taxableOtherIncome,
    otherIncomeTax,
    dividendAllowanceUsed,
    taxableDividendIncome,
    bands,
    dividendTax,
    totalTax: otherIncomeTax + dividendTax,
  };
}
