import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import DividendTaxCalculatorTool from "@/components/calculators/DividendTaxCalculatorTool";
import { getCalculator } from "@/lib/calculators";
import { calculatorMetadata } from "@/lib/seo";

const calculator = getCalculator("dividend-tax-calculator")!;

export const metadata: Metadata = calculatorMetadata(calculator);

export default function Page() {
  return <CalculatorPage calculator={calculator} tool={<DividendTaxCalculatorTool />} />;
}
