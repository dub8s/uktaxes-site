import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import SalaryCalculatorTool from "@/components/calculators/SalaryCalculatorTool";
import { getCalculator } from "@/lib/calculators";
import { calculatorMetadata } from "@/lib/seo";

const calculator = getCalculator("take-home-pay-calculator")!;

export const metadata: Metadata = calculatorMetadata(calculator);

export default function Page() {
  return <CalculatorPage calculator={calculator} tool={<SalaryCalculatorTool />} />;
}
