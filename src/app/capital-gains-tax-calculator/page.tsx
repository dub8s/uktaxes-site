import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import CapitalGainsTaxCalculatorTool from "@/components/calculators/CapitalGainsTaxCalculatorTool";
import { getCalculator } from "@/lib/calculators";
import { calculatorMetadata } from "@/lib/seo";

const calculator = getCalculator("capital-gains-tax-calculator")!;

export const metadata: Metadata = calculatorMetadata(calculator);

export default function Page() {
  return <CalculatorPage calculator={calculator} tool={<CapitalGainsTaxCalculatorTool />} />;
}
