import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import NationalInsuranceCalculatorTool from "@/components/calculators/NationalInsuranceCalculatorTool";
import { getCalculator } from "@/lib/calculators";
import { calculatorMetadata } from "@/lib/seo";

const calculator = getCalculator("national-insurance-calculator")!;

export const metadata: Metadata = calculatorMetadata(calculator);

export default function Page() {
  return <CalculatorPage calculator={calculator} tool={<NationalInsuranceCalculatorTool />} />;
}
