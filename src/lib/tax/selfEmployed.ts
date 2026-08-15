import { calculateIncomeTax, type IncomeTaxResult } from "./incomeTax";
import {
  CLASS2_VOLUNTARY_WEEKLY_RATE,
  CLASS4_LOWER_PROFITS_LIMIT,
  CLASS4_MAIN_RATE,
  CLASS4_UPPER_PROFITS_LIMIT,
  CLASS4_UPPER_RATE,
  NI_SMALL_PROFITS_THRESHOLD,
  type IncomeTaxRegion,
} from "@/data/tax-rates-2026-27";

export type Class4BandResult = {
  name: string;
  from: number;
  to: number | null;
  rate: number;
  taxableAmount: number;
  contribution: number;
};

export type Class4Result = {
  bands: Class4BandResult[];
  totalContribution: number;
};

/** Class 4 National Insurance: 6% between the Lower and Upper Profits Limits, 2% above. */
export function calculateClass4NI(profit: number): Class4Result {
  const p = Math.max(0, profit);

  const mainBandAmount = Math.max(
    0,
    Math.min(p, CLASS4_UPPER_PROFITS_LIMIT) - CLASS4_LOWER_PROFITS_LIMIT,
  );
  const upperBandAmount = Math.max(0, p - CLASS4_UPPER_PROFITS_LIMIT);

  const bands: Class4BandResult[] = [
    {
      name: "Main rate",
      from: CLASS4_LOWER_PROFITS_LIMIT,
      to: CLASS4_UPPER_PROFITS_LIMIT,
      rate: CLASS4_MAIN_RATE,
      taxableAmount: mainBandAmount,
      contribution: mainBandAmount * CLASS4_MAIN_RATE,
    },
    {
      name: "Above Upper Profits Limit",
      from: CLASS4_UPPER_PROFITS_LIMIT,
      to: null,
      rate: CLASS4_UPPER_RATE,
      taxableAmount: upperBandAmount,
      contribution: upperBandAmount * CLASS4_UPPER_RATE,
    },
  ].filter((band) => band.taxableAmount > 0);

  return { bands, totalContribution: bands.reduce((sum, b) => sum + b.contribution, 0) };
}

export type SelfEmployedTaxOptions = {
  region?: IncomeTaxRegion;
  /** Pay voluntary Class 2 NI (only relevant/available below the Small Profits Threshold). */
  payVoluntaryClass2?: boolean;
};

export type SelfEmployedTaxResult = {
  profit: number;
  incomeTax: IncomeTaxResult;
  class4: Class4Result;
  /** True once profits reach the Small Profits Threshold — a qualifying year is automatic, with no payment due. */
  class2CreditedAutomatically: boolean;
  class2VoluntaryAvailable: boolean;
  class2VoluntaryAnnualCost: number;
  class2Paid: number;
  totalTaxAndNI: number;
};

/**
 * Income Tax and National Insurance for a sole trader's annual profit.
 * Class 2 NI was abolished as a compulsory charge from April 2024; it can
 * still be paid voluntarily below the Small Profits Threshold.
 */
export function calculateSelfEmployedTax(
  profit: number,
  options: SelfEmployedTaxOptions = {},
): SelfEmployedTaxResult {
  const p = Math.max(0, profit);
  const incomeTax = calculateIncomeTax(p, options.region ?? "rUK");
  const class4 = calculateClass4NI(p);

  const class2VoluntaryAvailable = p < NI_SMALL_PROFITS_THRESHOLD;
  const class2VoluntaryAnnualCost = CLASS2_VOLUNTARY_WEEKLY_RATE * 52;
  const class2Paid =
    class2VoluntaryAvailable && options.payVoluntaryClass2 ? class2VoluntaryAnnualCost : 0;

  return {
    profit: p,
    incomeTax,
    class4,
    class2CreditedAutomatically: p >= NI_SMALL_PROFITS_THRESHOLD,
    class2VoluntaryAvailable,
    class2VoluntaryAnnualCost,
    class2Paid,
    totalTaxAndNI: incomeTax.totalTax + class4.totalContribution + class2Paid,
  };
}
