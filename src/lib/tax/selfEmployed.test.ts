import { describe, expect, it } from "vitest";
import { calculateClass4NI, calculateSelfEmployedTax } from "./selfEmployed";

describe("calculateClass4NI", () => {
  it("charges nothing below the Lower Profits Limit", () => {
    expect(calculateClass4NI(10_000).totalContribution).toBe(0);
  });

  it("charges 6% between the Lower and Upper Profits Limits", () => {
    const result = calculateClass4NI(40_000);
    expect(result.totalContribution).toBeCloseTo(1_645.8, 2);
    expect(result.bands.map((b) => b.name)).toEqual(["Main rate"]);
  });

  it("charges 2% above the Upper Profits Limit", () => {
    const result = calculateClass4NI(60_000);
    expect(result.totalContribution).toBeCloseTo(2_456.6, 2);
    expect(result.bands.map((b) => b.name)).toEqual(["Main rate", "Above Upper Profits Limit"]);
  });
});

describe("calculateSelfEmployedTax", () => {
  it("combines Income Tax and Class 4 NI for a typical profit", () => {
    const result = calculateSelfEmployedTax(40_000);
    expect(result.incomeTax.totalTax).toBeCloseTo(5_486, 2);
    expect(result.class4.totalContribution).toBeCloseTo(1_645.8, 2);
    expect(result.class2CreditedAutomatically).toBe(true);
    expect(result.class2Paid).toBe(0);
    expect(result.totalTaxAndNI).toBeCloseTo(7_131.8, 2);
  });

  it("matches the standard worked example for £60,000 profit", () => {
    const result = calculateSelfEmployedTax(60_000);
    expect(result.totalTaxAndNI).toBeCloseTo(13_888.6, 2);
  });

  it("offers voluntary Class 2 NI below the Small Profits Threshold", () => {
    const result = calculateSelfEmployedTax(5_000, { payVoluntaryClass2: true });
    expect(result.class2VoluntaryAvailable).toBe(true);
    expect(result.class2Paid).toBeCloseTo(189.8, 2);
    expect(result.totalTaxAndNI).toBeCloseTo(189.8, 2);
  });

  it("does not allow voluntary Class 2 once the Small Profits Threshold is met", () => {
    const result = calculateSelfEmployedTax(8_000, { payVoluntaryClass2: true });
    expect(result.class2VoluntaryAvailable).toBe(false);
    expect(result.class2Paid).toBe(0);
    expect(result.class2CreditedAutomatically).toBe(true);
  });
});
