import { describe, expect, it } from "vitest";
import { calculateIncomeTax, calculatePersonalAllowance } from "./incomeTax";

describe("calculatePersonalAllowance", () => {
  it("returns the full allowance below the taper threshold", () => {
    expect(calculatePersonalAllowance(60_000)).toBe(12_570);
  });

  it("tapers by £1 per £2 above £100,000", () => {
    expect(calculatePersonalAllowance(110_000)).toBe(7_570);
  });

  it("is fully withdrawn at £125,140 and above", () => {
    expect(calculatePersonalAllowance(125_140)).toBe(0);
    expect(calculatePersonalAllowance(200_000)).toBe(0);
  });

  it("is not reduced at exactly £100,000", () => {
    expect(calculatePersonalAllowance(100_000)).toBe(12_570);
  });

  it("reduces by £1 for the first £2 above £100,000 (HMRC's own taper mechanism example)", () => {
    expect(calculatePersonalAllowance(100_002)).toBe(12_569);
  });
});

describe("calculateIncomeTax — rest of UK", () => {
  it("charges nothing below the Personal Allowance", () => {
    const result = calculateIncomeTax(10_000);
    expect(result.totalTax).toBe(0);
    expect(result.taxableIncome).toBe(0);
  });

  it("matches the standard worked example for £60,000 gross", () => {
    const result = calculateIncomeTax(60_000);
    expect(result.taxableIncome).toBe(47_430);
    expect(result.totalTax).toBeCloseTo(11_432, 2);
    expect(result.bands.map((b) => b.band.name)).toEqual(["Basic rate", "Higher rate"]);
  });

  it("applies the additional rate and taper together above £100,000", () => {
    const result = calculateIncomeTax(130_000);
    expect(result.personalAllowance).toBe(0);
    expect(result.totalTax).toBeCloseTo(45_331.5, 2);
    expect(result.bands.map((b) => b.band.name)).toEqual([
      "Basic rate",
      "Higher rate",
      "Additional rate",
    ]);
  });

  it("charges nothing at exactly the Personal Allowance boundary", () => {
    const result = calculateIncomeTax(12_570);
    expect(result.totalTax).toBe(0);
  });

  it("stays entirely in the basic rate band at exactly the higher rate threshold", () => {
    const result = calculateIncomeTax(50_270);
    expect(result.bands.map((b) => b.band.name)).toEqual(["Basic rate"]);
    expect(result.totalTax).toBeCloseTo(7_540, 2);
  });

  it("clamps negative income to zero", () => {
    const result = calculateIncomeTax(-10_000);
    expect(result.grossIncome).toBe(0);
    expect(result.totalTax).toBe(0);
  });
});

describe("calculateIncomeTax — Scotland", () => {
  it("matches the worked example for £30,000 gross", () => {
    const result = calculateIncomeTax(30_000, "scotland");
    expect(result.taxableIncome).toBe(17_430);
    expect(result.totalTax).toBeCloseTo(3_451.07, 2);
    expect(result.bands.map((b) => b.band.name)).toEqual([
      "Starter rate",
      "Basic rate",
      "Intermediate rate",
    ]);
  });
});
