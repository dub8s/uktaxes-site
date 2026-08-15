import { describe, expect, it } from "vitest";
import { calculateNationalInsurance } from "./nationalInsurance";

describe("calculateNationalInsurance", () => {
  it("charges nothing below the Primary Threshold", () => {
    const result = calculateNationalInsurance(10_000);
    expect(result.totalContribution).toBe(0);
    expect(result.bands).toHaveLength(0);
  });

  it("charges 8% between the Primary Threshold and Upper Earnings Limit", () => {
    const result = calculateNationalInsurance(30_000);
    expect(result.totalContribution).toBeCloseTo((30_000 - 12_570) * 0.08, 2);
    expect(result.bands.map((b) => b.name)).toEqual(["Main rate"]);
  });

  it("matches the worked example for £60,000 gross", () => {
    const result = calculateNationalInsurance(60_000);
    expect(result.totalContribution).toBeCloseTo(3_210.6, 2);
    expect(result.bands.map((b) => b.name)).toEqual(["Main rate", "Above Upper Earnings Limit"]);
  });

  it("charges nothing at exactly the Primary Threshold", () => {
    const result = calculateNationalInsurance(12_570);
    expect(result.totalContribution).toBe(0);
  });

  it("stays entirely at the main rate at exactly the Upper Earnings Limit", () => {
    const result = calculateNationalInsurance(50_270);
    expect(result.bands.map((b) => b.name)).toEqual(["Main rate"]);
    expect(result.totalContribution).toBeCloseTo((50_270 - 12_570) * 0.08, 2);
  });

  it("clamps negative earnings to zero", () => {
    const result = calculateNationalInsurance(-1_000);
    expect(result.grossIncome).toBe(0);
    expect(result.totalContribution).toBe(0);
  });
});
