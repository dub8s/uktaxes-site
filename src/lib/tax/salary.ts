import { calculateIncomeTax, type IncomeTaxResult } from "./incomeTax";
import { calculateNationalInsurance, type NationalInsuranceResult } from "./nationalInsurance";
import type { IncomeTaxRegion } from "@/data/tax-rates-2026-27";

export type SalaryCalculatorOptions = {
  region?: IncomeTaxRegion;
  /** Pension contribution as a percentage of gross salary, deducted via a net pay arrangement (before tax and NI). */
  pensionPercent?: number;
};

export type TakeHomePayResult = {
  grossAnnual: number;
  pensionContribution: number;
  incomeTax: IncomeTaxResult;
  nationalInsurance: NationalInsuranceResult;
  netAnnual: number;
  netMonthly: number;
  netWeekly: number;
};

export function calculateTakeHomePay(
  grossAnnual: number,
  options: SalaryCalculatorOptions = {},
): TakeHomePayResult {
  const gross = Math.max(0, grossAnnual);
  const pensionPercent = Math.min(100, Math.max(0, options.pensionPercent ?? 0));
  const pensionContribution = gross * (pensionPercent / 100);
  const taxableIncome = gross - pensionContribution;

  const incomeTax = calculateIncomeTax(taxableIncome, options.region ?? "rUK");
  // A net pay arrangement reduces earnings for Income Tax but not for National
  // Insurance: HMRC assesses Class 1 NI on gross earnings before pension
  // deductions, with no equivalent NI relief (HMRC manual NIM02365). Only
  // salary sacrifice reduces both, and that's a different arrangement.
  const nationalInsurance = calculateNationalInsurance(gross);

  const netAnnual =
    gross - pensionContribution - incomeTax.totalTax - nationalInsurance.totalContribution;

  return {
    grossAnnual: gross,
    pensionContribution,
    incomeTax,
    nationalInsurance,
    netAnnual,
    netMonthly: netAnnual / 12,
    netWeekly: netAnnual / 52,
  };
}
