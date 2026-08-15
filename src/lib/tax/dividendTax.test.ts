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
});
