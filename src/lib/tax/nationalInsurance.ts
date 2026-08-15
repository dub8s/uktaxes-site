import {
  NI_MAIN_RATE,
  NI_PRIMARY_THRESHOLD,
  NI_UPPER_EARNINGS_LIMIT,
  NI_UPPER_RATE,
} from "@/data/tax-rates-2026-27";

export type NationalInsuranceBandResult = {
  name: string;
  from: number;
  to: number | null;
  rate: number;
  taxableAmount: number;
  contribution: number;
};

export type NationalInsuranceResult = {
  grossIncome: number;
  bands: NationalInsuranceBandResult[];
  totalContribution: number;
};

/**
 * Class 1 employee (primary) National Insurance on annual earnings.
 * 0% up to the Primary Threshold, 8% up to the Upper Earnings Limit, 2% above.
 */
export function calculateNationalInsurance(grossIncome: number): NationalInsuranceResult {
  const gross = Math.max(0, grossIncome);

  const mainBandAmount = Math.max(
    0,
    Math.min(gross, NI_UPPER_EARNINGS_LIMIT) - NI_PRIMARY_THRESHOLD,
  );
  const upperBandAmount = Math.max(0, gross - NI_UPPER_EARNINGS_LIMIT);

  const bands: NationalInsuranceBandResult[] = [
    {
      name: "Main rate",
      from: NI_PRIMARY_THRESHOLD,
      to: NI_UPPER_EARNINGS_LIMIT,
      rate: NI_MAIN_RATE,
      taxableAmount: mainBandAmount,
      contribution: mainBandAmount * NI_MAIN_RATE,
    },
    {
      name: "Above Upper Earnings Limit",
      from: NI_UPPER_EARNINGS_LIMIT,
      to: null,
      rate: NI_UPPER_RATE,
      taxableAmount: upperBandAmount,
      contribution: upperBandAmount * NI_UPPER_RATE,
    },
  ].filter((band) => band.taxableAmount > 0);

  const totalContribution = bands.reduce((sum, band) => sum + band.contribution, 0);

  return { grossIncome: gross, bands, totalContribution };
}
