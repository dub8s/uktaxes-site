import { describe, expect, it } from "vitest";
import { formatPercent } from "./format";

describe("formatPercent", () => {
  it("shows whole-number rates with no decimal places", () => {
    expect(formatPercent(0.2)).toBe("20%");
    expect(formatPercent(0.08)).toBe("8%");
    expect(formatPercent(0.45)).toBe("45%");
  });

  it("shows precise two-decimal rates in full, without rounding them off", () => {
    // These are the exact 2026/27 dividend tax rates; a naive one-decimal
    // formatter rounds 10.75 to 10.8, which is wrong.
    expect(formatPercent(0.1075)).toBe("10.75%");
    expect(formatPercent(0.3575)).toBe("35.75%");
    expect(formatPercent(0.3935)).toBe("39.35%");
  });

  it("shows a single decimal place only when that's all that's needed", () => {
    expect(formatPercent(0.425)).toBe("42.5%");
  });
});
