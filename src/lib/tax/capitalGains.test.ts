import { describe, expect, it } from "vitest";
import { calculateCapitalGainsTax } from "./capitalGains";

describe("calculateCapitalGainsTax", () => {
  it("charges nothing within the Annual Exempt Amount", () => {
    const result = calculateCapitalGainsTax(2_000);
    expect(result.chargeableGain).toBe(0);
    expect(result.totalTax).toBe(0);
  });

  it("taxes the whole gain at 18% when it fits inside the basic rate band", () => {
    const result = calculateCapitalGainsTax(10_000, 0);
    expect(result.chargeableGain).toBe(7_000);
    expect(result.amountAtBasicRate).toBe(7_000);
    expect(result.totalTax).toBeCloseTo(1_260, 2);
  });

  it("splits the gain across 18% and 24% once other income uses up the basic rate band", () => {
    const result = calculateCapitalGainsTax(50_000, 30_000);
    expect(result.chargeableGain).toBe(47_000);
    expect(result.amountAtBasicRate).toBe(7_700);
    expect(result.amountAtHigherRate).toBe(39_300);
    expect(result.totalTax).toBeCloseTo(10_818, 2);
  });

  it("taxes the entire gain at 24% for a higher-rate taxpayer", () => {
    const result = calculateCapitalGainsTax(10_000, 50_000);
    expect(result.amountAtBasicRate).toBe(0);
    expect(result.totalTax).toBeCloseTo(1_680, 2);
  });

  it("matches HMRC's own worked example 1 on gov.uk/capital-gains-tax/rates (taxable income £20,000, gains £12,600)", () => {
    const result = calculateCapitalGainsTax(12_600, 20_000);
    expect(result.chargeableGain).toBe(9_600);
    expect(result.amountAtBasicRate).toBe(9_600);
    expect(result.amountAtHigherRate).toBe(0);
    expect(result.totalTax).toBeCloseTo(1_728, 2);
  });

  it("matches HMRC's own worked example 2 on gov.uk/capital-gains-tax/rates (taxable income £20,000, gains £52,600)", () => {
    const result = calculateCapitalGainsTax(52_600, 20_000);
    expect(result.chargeableGain).toBe(49_600);
    expect(result.amountAtBasicRate).toBe(17_700);
    expect(result.amountAtHigherRate).toBe(31_900);
    expect(result.totalTax).toBeCloseTo(10_842, 2);
  });

  it("charges nothing when the gain exactly equals the Annual Exempt Amount", () => {
    const result = calculateCapitalGainsTax(3_000);
    expect(result.chargeableGain).toBe(0);
    expect(result.totalTax).toBe(0);
  });

  it("clamps a negative gain to zero", () => {
    const result = calculateCapitalGainsTax(-5_000);
    expect(result.gain).toBe(0);
    expect(result.totalTax).toBe(0);
  });
});
