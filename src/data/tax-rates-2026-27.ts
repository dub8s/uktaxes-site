/**
 * UK tax rates and thresholds for the 2026/27 tax year (6 April 2026 – 5 April 2027).
 * Source: gov.uk/income-tax-rates, gov.uk/scottish-income-tax,
 * gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027.
 * Verified 15 August 2026. Re-verify each year before rolling forward.
 */

export const TAX_YEAR = "2026/27" as const;
export const RATES_LAST_VERIFIED = "15 August 2026" as const;

export type TaxBand = {
  name: string;
  /** Lower bound of taxable income this band applies to (inclusive), after Personal Allowance. */
  from: number;
  /** Upper bound of taxable income this band applies to (inclusive), or null for no upper limit. */
  to: number | null;
  rate: number;
};

export const PERSONAL_ALLOWANCE = 12_570;
/** Personal Allowance is reduced by £1 for every £2 of adjusted net income above this. */
export const PERSONAL_ALLOWANCE_TAPER_THRESHOLD = 100_000;
/** Income at/above which the Personal Allowance is fully withdrawn. */
export const PERSONAL_ALLOWANCE_TAPER_LIMIT = 125_140;

/** Income Tax bands for England, Wales, and Northern Ireland, applied to taxable income (after Personal Allowance). */
export const RUK_INCOME_TAX_BANDS: TaxBand[] = [
  { name: "Basic rate", from: 0, to: 37_700, rate: 0.2 },
  { name: "Higher rate", from: 37_700, to: 112_570, rate: 0.4 },
  { name: "Additional rate", from: 112_570, to: null, rate: 0.45 },
];

/** Scottish Income Tax bands, applied to taxable income (after Personal Allowance). */
export const SCOTLAND_INCOME_TAX_BANDS: TaxBand[] = [
  { name: "Starter rate", from: 0, to: 3_967, rate: 0.19 },
  { name: "Basic rate", from: 3_967, to: 16_956, rate: 0.2 },
  { name: "Intermediate rate", from: 16_956, to: 31_092, rate: 0.21 },
  { name: "Higher rate", from: 31_092, to: 62_430, rate: 0.42 },
  { name: "Advanced rate", from: 62_430, to: 112_570, rate: 0.45 },
  { name: "Top rate", from: 112_570, to: null, rate: 0.48 },
];

export type IncomeTaxRegion = "rUK" | "scotland";

/** Class 1 employee (primary) National Insurance thresholds, annualised. */
export const NI_LOWER_EARNINGS_LIMIT = 6_708;
export const NI_PRIMARY_THRESHOLD = 12_570;
export const NI_UPPER_EARNINGS_LIMIT = 50_270;

export const NI_MAIN_RATE = 0.08;
export const NI_UPPER_RATE = 0.02;

/**
 * Dividend Allowance and dividend tax rates. Source: gov.uk/tax-on-dividends.
 * Dividend tax bands are reserved (not devolved), so these thresholds apply
 * UK-wide, including to Scottish taxpayers.
 */
export const DIVIDEND_ALLOWANCE = 500;

export const DIVIDEND_TAX_BANDS: TaxBand[] = [
  { name: "Basic rate", from: 0, to: 37_700, rate: 0.1075 },
  { name: "Higher rate", from: 37_700, to: 112_570, rate: 0.3575 },
  { name: "Additional rate", from: 112_570, to: null, rate: 0.3935 },
];

/**
 * Self-employed National Insurance. Class 2 was abolished as a compulsory
 * charge from April 2024; profits at/above the Small Profits Threshold get a
 * qualifying year automatically. Below it, Class 2 can still be paid
 * voluntarily to protect State Pension entitlement.
 * Source: gov.uk/self-employed-national-insurance-rates.
 */
export const NI_SMALL_PROFITS_THRESHOLD = 7_105;
export const CLASS2_VOLUNTARY_WEEKLY_RATE = 3.65;

export const CLASS4_LOWER_PROFITS_LIMIT = 12_570;
export const CLASS4_UPPER_PROFITS_LIMIT = 50_270;
export const CLASS4_MAIN_RATE = 0.06;
export const CLASS4_UPPER_RATE = 0.02;

/**
 * Capital Gains Tax. Since 30 October 2024 the same 18%/24% rates apply to
 * all chargeable assets (shares, property, other). Source: gov.uk/capital-gains-tax/rates.
 */
export const CGT_ANNUAL_EXEMPT_AMOUNT = 3_000;
export const CGT_BASIC_RATE = 0.18;
export const CGT_HIGHER_RATE = 0.24;
