import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import IncomeTaxCalculatorTool from "@/components/calculators/IncomeTaxCalculatorTool";
import { getCalculator } from "@/lib/calculators";
import { calculatorMetadata } from "@/lib/seo";

const calculator = getCalculator("income-tax-calculator")!;

export const metadata: Metadata = calculatorMetadata(calculator);

export default function Page() {
  return <CalculatorPage calculator={calculator} tool={<IncomeTaxCalculatorTool />} />;
}
