import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import SelfEmployedTaxCalculatorTool from "@/components/calculators/SelfEmployedTaxCalculatorTool";
import { getCalculator } from "@/lib/calculators";
import { calculatorMetadata } from "@/lib/seo";

const calculator = getCalculator("self-employed-tax-calculator")!;

export const metadata: Metadata = calculatorMetadata(calculator);

export default function Page() {
  return <CalculatorPage calculator={calculator} tool={<SelfEmployedTaxCalculatorTool />} />;
}
