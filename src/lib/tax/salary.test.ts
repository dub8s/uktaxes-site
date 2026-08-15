import { describe, expect, it } from "vitest";
import { calculateTakeHomePay } from "./salary";

describe("calculateTakeHomePay", () => {
  it("combines income tax and NI with no pension by default", () => {
    const result = calculateTakeHomePay(60_000);
    expect(result.pensionContribution).toBe(0);
    expect(result.incomeTax.totalTax).toBeCloseTo(11_432, 2);
    expect(result.nationalInsurance.totalContribution).toBeCloseTo(3_210.6, 2);
    expect(result.netAnnual).toBeCloseTo(60_000 - 11_432 - 3_210.6, 2);
  });

  it("deducts pension contributions before tax and NI (net pay arrangement)", () => {
    const result = calculateTakeHomePay(35_000, { pensionPercent: 5 });
    expect(result.pensionContribution).toBeCloseTo(1_750, 2);
    expect(result.incomeTax.totalTax).toBeCloseTo(4_136, 2);
    expect(result.nationalInsurance.totalContribution).toBeCloseTo(1_654.4, 2);
    expect(result.netAnnual).toBeCloseTo(27_459.6, 2);
    expect(result.netMonthly).toBeCloseTo(2_288.3, 2);
  });

  it("uses Scottish income tax bands when the region is scotland", () => {
    const result = calculateTakeHomePay(30_000, { region: "scotland" });
    expect(result.incomeTax.totalTax).toBeCloseTo(3_451.07, 2);
  });

  it("clamps pension percent to the 0–100 range", () => {
    const overContributed = calculateTakeHomePay(30_000, { pensionPercent: 150 });
    expect(overContributed.pensionContribution).toBe(30_000);
    expect(overContributed.netAnnual).toBe(0);

    const negativeContribution = calculateTakeHomePay(30_000, { pensionPercent: -10 });
    expect(negativeContribution.pensionContribution).toBe(0);
  });

  it("clamps negative gross salary to zero", () => {
    const result = calculateTakeHomePay(-20_000);
    expect(result.grossAnnual).toBe(0);
    expect(result.netAnnual).toBe(0);
  });
});
