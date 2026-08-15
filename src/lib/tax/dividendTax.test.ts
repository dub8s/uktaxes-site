import { describe, expect, it } from "vitest";
import { calculateDividendTax } from "./dividendTax";

describe("calculateDividendTax", () => {
  it("taxes dividends within the basic rate band after the dividend allowance", () => {
    const result = calculateDividendTax(35_000, 5_000);
    expect(result.taxableOtherIncome).toBe(22_430);
    expect(result.otherIncomeTax).toBeCloseTo(4_486, 2);
    expect(result.dividendAllowanceUsed).toBe(500);
    expect(result.dividendTax).toBeCloseTo(483.75, 2);
    expect(result.totalTax).toBeCloseTo(4_969.75, 2);
  });

  it("splits dividend income across the basic and higher rate bands", () => {
    const result = calculateDividendTax(30_000, 30_000);
    expect(result.otherIncomeTax).toBeCloseTo(3_486, 2);
    expect(result.dividendTax).toBeCloseTo(5_603.75, 2);
    expect(result.totalTax).toBeCloseTo(9_089.75, 2);
    expect(result.bands.map((b) => b.band.name)).toEqual(["Basic rate", "Higher rate"]);
  });

  it("carries unused Personal Allowance from other income onto dividends", () => {
    const result = calculateDividendTax(5_000, 10_000);
    expect(result.taxableOtherIncome).toBe(0);
    expect(result.otherIncomeTax).toBe(0);
    expect(result.dividendAllowanceUsed).toBe(500);
    expect(result.taxableDividendIncome).toBe(1_930);
    expect(result.dividendTax).toBeCloseTo(207.475, 3);
  });

  it("tapers the Personal Allowance using combined income above £100,000", () => {
    const result = calculateDividendTax(90_000, 20_000);
    expect(result.personalAllowance).toBe(7_570);
    expect(result.otherIncomeTax).toBeCloseTo(25_432, 2);
    expect(result.dividendTax).toBeCloseTo(6_971.25, 2);
    expect(result.totalTax).toBeCloseTo(32_403.25, 2);
  });

  it("matches HMRC's own worked example on gov.uk/tax-on-dividends (£29,570 wages + £3,000 dividends, 2026/27)", () => {
    const result = calculateDividendTax(29_570, 3_000);
    // HMRC: "20% tax on £17,000 of wages"
    expect(result.taxableOtherIncome).toBe(17_000);
    expect(result.otherIncomeTax).toBeCloseTo(3_400, 2);
    // HMRC: "no tax on £500 of dividends, because of the dividend allowance"
    expect(result.dividendAllowanceUsed).toBe(500);
    // HMRC: "10.75% tax on £2,500 of dividends"
    expect(result.taxableDividendIncome).toBe(2_500);
    expect(result.dividendTax).toBeCloseTo(268.75, 2);
  });

  it("gives dividends the full Personal Allowance when there is no other income", () => {
    const result = calculateDividendTax(0, 15_000);
    expect(result.taxableOtherIncome).toBe(0);
    expect(result.otherIncomeTax).toBe(0);
    // £12,570 Personal Allowance + £500 dividend allowance shelters £13,070
    expect(result.taxableDividendIncome).toBe(15_000 - 12_570 - 500);
    expect(result.dividendTax).toBeCloseTo(1_930 * 0.1075, 2);
  });

  it("clamps negative income to zero", () => {
    const result = calculateDividendTax(-5_000, -1_000);
    expect(result.otherIncome).toBe(0);
    expect(result.dividendIncome).toBe(0);
    expect(result.totalTax).toBe(0);
  });
});
