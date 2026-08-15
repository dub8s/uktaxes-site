export type Faq = {
  question: string;
  answer: string;
};

export type Calculator = {
  slug: string;
  name: string;
  shortName: string;
  keyword: string;
  h1: string;
  description: string;
  explainer: string;
  faqs: Faq[];
  relatedSlugs: string[];
};

export const calculators: Calculator[] = [
  {
    slug: "salary-calculator",
    name: "Salary Calculator",
    shortName: "Salary",
    keyword: "salary calculator UK",
    h1: "UK Salary Calculator",
    description:
      "Work out your take-home pay from a gross salary, including Income Tax, National Insurance, and pension contributions.",
    explainer:
      "Enter your gross annual salary and we'll break down exactly what you take home after Income Tax, National Insurance, and any pension contributions — using the current HMRC rates and thresholds.",
    faqs: [
      {
        question: "How is take-home pay calculated in the UK?",
        answer:
          "Take-home pay is your gross salary minus Income Tax, National Insurance contributions, and any pension or student loan deductions.",
      },
      {
        question: "Does this include the Personal Allowance?",
        answer:
          "Yes — the calculator applies the current tax-free Personal Allowance before working out how much Income Tax is due.",
      },
    ],
    relatedSlugs: ["income-tax-calculator", "national-insurance-calculator", "take-home-pay-calculator"],
  },
  {
    slug: "income-tax-calculator",
    name: "Income Tax Calculator",
    shortName: "Income Tax",
    keyword: "income tax calculator UK",
    h1: "UK Income Tax Calculator",
    description:
      "Calculate exactly how much Income Tax you owe, broken down by tax band — basic, higher, and additional rate.",
    explainer:
      "This calculator applies the current UK Income Tax bands to your taxable income and shows exactly how much falls into each band, so you can see precisely where your tax bill comes from.",
    faqs: [
      {
        question: "What are the UK Income Tax bands?",
        answer:
          "The UK uses a tiered system: a tax-free Personal Allowance, then basic rate, higher rate, and additional rate bands, each taxed at a progressively higher percentage.",
      },
      {
        question: "Is this calculator for England, Wales, Scotland, or Northern Ireland?",
        answer:
          "Income Tax bands differ in Scotland. We highlight where the calculation differs so you can select the right rates for your nation.",
      },
    ],
    relatedSlugs: ["salary-calculator", "national-insurance-calculator", "dividend-tax-calculator"],
  },
  {
    slug: "national-insurance-calculator",
    name: "National Insurance Calculator",
    shortName: "National Insurance",
    keyword: "national insurance calculator",
    h1: "UK National Insurance Calculator",
    description:
      "Calculate your Class 1 National Insurance contributions as an employee, based on current NI thresholds and rates.",
    explainer:
      "National Insurance is calculated separately from Income Tax, using its own thresholds. This calculator shows exactly how much NI is due on your earnings.",
    faqs: [
      {
        question: "What is National Insurance used for?",
        answer:
          "National Insurance contributions fund state benefits including the State Pension, and count towards your qualifying years.",
      },
      {
        question: "How is National Insurance different from Income Tax?",
        answer:
          "NI uses its own thresholds and rates, is calculated per pay period rather than annually in most cases, and funds a different set of state benefits.",
      },
    ],
    relatedSlugs: ["salary-calculator", "income-tax-calculator", "self-employed-tax-calculator"],
  },
  {
    slug: "dividend-tax-calculator",
    name: "Dividend Tax Calculator",
    shortName: "Dividend Tax",
    keyword: "dividend tax calculator UK",
    h1: "UK Dividend Tax Calculator",
    description:
      "Calculate the tax due on dividend income for shareholders and company directors, including the dividend allowance.",
    explainer:
      "Dividend income is taxed at different rates from salary, with its own tax-free allowance. This calculator combines your other income with dividends to show the correct dividend tax due.",
    faqs: [
      {
        question: "What is the dividend allowance?",
        answer:
          "Every tax year, a set amount of dividend income is tax-free before the dividend tax rates apply. This is separate from the Personal Allowance.",
      },
      {
        question: "Do I pay dividend tax through my company or personally?",
        answer:
          "Dividend tax is a personal tax, paid by the shareholder through Self Assessment — it is not deducted by the company before payment.",
      },
    ],
    relatedSlugs: ["income-tax-calculator", "self-employed-tax-calculator", "capital-gains-tax-calculator"],
  },
  {
    slug: "self-employed-tax-calculator",
    name: "Self-Employed Tax Calculator",
    shortName: "Self-Employed",
    keyword: "self employed tax calculator UK",
    h1: "Self-Employed Tax Calculator (Sole Traders)",
    description:
      "Work out Income Tax and Class 2/4 National Insurance owed on your self-employed profits as a sole trader.",
    explainer:
      "As a sole trader you pay Income Tax and Class 4 (and where applicable Class 2) National Insurance on your profits. This calculator combines both to show your total tax bill.",
    faqs: [
      {
        question: "What counts as profit for self-employed tax?",
        answer:
          "Profit is your total business income minus allowable business expenses — it's this figure, not your turnover, that's taxed.",
      },
      {
        question: "When is self-employed tax due?",
        answer:
          "Self Assessment tax is typically due by 31 January following the end of the tax year, with a possible payment on account in July.",
      },
    ],
    relatedSlugs: ["income-tax-calculator", "national-insurance-calculator", "dividend-tax-calculator"],
  },
  {
    slug: "capital-gains-tax-calculator",
    name: "Capital Gains Tax Calculator",
    shortName: "Capital Gains Tax",
    keyword: "capital gains tax calculator UK",
    h1: "UK Capital Gains Tax Calculator",
    description:
      "Calculate Capital Gains Tax owed on profits from selling shares, property, or other chargeable assets.",
    explainer:
      "Capital Gains Tax is due on the profit made when you dispose of an asset that has increased in value. This calculator applies the current annual exempt amount and CGT rates to work out what you owe.",
    faqs: [
      {
        question: "What is the annual exempt amount?",
        answer:
          "Each tax year, a set amount of capital gains is tax-free before CGT applies. Gains above this threshold are taxed at 18% or 24%, depending on your income and the size of the gain.",
      },
      {
        question: "Are CGT rates different for property and shares?",
        answer:
          "Not any more — since 30 October 2024, the same 18%/24% rates apply to residential property, shares, and other chargeable assets.",
      },
    ],
    relatedSlugs: ["dividend-tax-calculator", "income-tax-calculator", "salary-calculator"],
  },
  {
    slug: "take-home-pay-calculator",
    name: "Take-Home Pay Calculator",
    shortName: "Take-Home Pay",
    keyword: "take home pay calculator",
    h1: "Take-Home Pay Calculator",
    description:
      "See exactly what lands in your bank account each month after tax, National Insurance, and pension contributions.",
    explainer:
      "Your take-home pay is what's left of your salary after all deductions. This calculator shows the monthly and annual breakdown, so you know exactly what to expect on payday.",
    faqs: [
      {
        question: "Is take-home pay the same as net pay?",
        answer:
          "Yes — take-home pay and net pay both refer to your earnings after Income Tax, National Insurance, and other deductions.",
      },
      {
        question: "What deductions are included?",
        answer:
          "Income Tax, National Insurance, and pension contributions are included by default; student loan repayments can be added too.",
      },
    ],
    relatedSlugs: ["salary-calculator", "income-tax-calculator", "national-insurance-calculator"],
  },
];

export function getCalculator(slug: string): Calculator | undefined {
  return calculators.find((c) => c.slug === slug);
}

export function getRelatedCalculators(calculator: Calculator): Calculator[] {
  return calculator.relatedSlugs
    .map((slug) => getCalculator(slug))
    .filter((c): c is Calculator => Boolean(c));
}
