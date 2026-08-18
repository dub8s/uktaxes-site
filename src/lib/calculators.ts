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
  explainer: string[];
  faqs: Faq[];
  relatedSlugs: string[];
  /** Slug of the blog post that explains this calculator's topic in more depth. */
  explainerSlug?: string;
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
    explainer: [
      "Enter your gross annual salary and choose whether you're taxed under the rest-of-UK bands or the Scottish bands. We apply the current tax-free Personal Allowance, then work out Income Tax and Class 1 National Insurance using the same thresholds HMRC uses on your payslip.",
      "If your employer deducts pension contributions before tax through a net pay arrangement (the default for most workplace pensions), add your contribution percentage and we'll take it off your salary before calculating tax and National Insurance, which is exactly how it reduces your bill in practice.",
      "This calculator covers Income Tax, National Insurance, and pension contributions. It doesn't yet account for student loan repayments or salary sacrifice benefits like a company car, so if either applies to you, your actual take-home pay will be a little lower than shown here.",
    ],
    faqs: [
      {
        question: "How is take-home pay calculated in the UK?",
        answer:
          "Take-home pay is your gross salary minus Income Tax, Class 1 National Insurance contributions, and any pension contribution taken before tax.",
      },
      {
        question: "Does this include the Personal Allowance?",
        answer:
          "Yes, the calculator applies the current tax-free Personal Allowance before working out how much Income Tax is due, including the taper for income above £100,000.",
      },
      {
        question: "Does this calculator include student loan repayments?",
        answer:
          "Not yet. This version covers Income Tax, National Insurance, and pension contributions. Student loan repayments are a separate deduction based on your repayment plan and income threshold, and we plan to add them in a future update.",
      },
      {
        question: "What counts as a 'net pay arrangement' pension?",
        answer:
          "It's the most common way workplace pensions are set up: your contribution comes out of your salary before Income Tax and National Insurance are calculated, so you get full tax relief automatically and your NI bill is a little lower too.",
      },
      {
        question: "Why is my take-home pay different from my payslip?",
        answer:
          "Differences usually come from things this calculator doesn't model yet: student loan repayments, benefits-in-kind, salary sacrifice schemes, or a tax code that isn't the standard Personal Allowance, for example if you have unpaid tax from a previous year.",
      },
    ],
    relatedSlugs: ["income-tax-calculator", "national-insurance-calculator", "take-home-pay-calculator"],
    explainerSlug: "how-uk-tax-bands-work-2026-27",
  },
  {
    slug: "income-tax-calculator",
    name: "Income Tax Calculator",
    shortName: "Income Tax",
    keyword: "income tax calculator UK",
    h1: "UK Income Tax Calculator",
    description:
      "Calculate exactly how much Income Tax you owe, broken down by tax band: basic, higher, and additional rate.",
    explainer: [
      "This calculator applies the current UK Income Tax bands to your taxable income and shows exactly how much falls into each band, so you can see precisely where your tax bill comes from.",
      "Taxable income is what's left after your Personal Allowance, the amount you can earn tax-free each year. Once you're above £100,000, the Personal Allowance itself starts shrinking by £1 for every £2 you earn, disappearing completely at £125,140, which is why very high earners can face a higher effective rate over that stretch of income than the headline 45% additional rate suggests.",
      "Income Tax bands are devolved in Scotland, which uses six bands instead of the three rest-of-UK bands. Toggle the region above to match where you're a taxpayer, usually wherever your main home is, not where you work.",
    ],
    faqs: [
      {
        question: "What are the UK Income Tax bands?",
        answer:
          "The UK uses a tiered system: a tax-free Personal Allowance, then basic rate, higher rate, and additional rate bands, each taxed at a progressively higher percentage.",
      },
      {
        question: "Is this calculator for England, Wales, Scotland, or Northern Ireland?",
        answer:
          "It covers both: use the region toggle. Income Tax bands differ in Scotland, so we switch to the six Scottish bands and rates when you select it.",
      },
      {
        question: "What income counts towards my taxable income?",
        answer:
          "Salary, self-employment profit, most pension income, and rental profit all count. Dividends and savings interest are taxed separately with their own allowances and rates. Use the Dividend Tax Calculator for dividend income.",
      },
      {
        question: "Why does my Personal Allowance show as less than £12,570?",
        answer:
          "If your income is above £100,000, the Personal Allowance tapers away by £1 for every £2 over that threshold, reaching zero at £125,140. That's applied automatically here.",
      },
      {
        question: "Is this the same as my tax code?",
        answer:
          "Broadly, yes: a standard tax code (1257L for most people in 2026/27) reflects the standard £12,570 Personal Allowance. If HMRC has adjusted your tax code for other reasons, your actual bill may differ from this calculator.",
      },
    ],
    relatedSlugs: ["salary-calculator", "national-insurance-calculator", "dividend-tax-calculator"],
    explainerSlug: "how-uk-tax-bands-work-2026-27",
  },
  {
    slug: "national-insurance-calculator",
    name: "National Insurance Calculator",
    shortName: "National Insurance",
    keyword: "national insurance calculator",
    h1: "UK National Insurance Calculator",
    description:
      "Calculate your Class 1 National Insurance contributions as an employee, based on current NI thresholds and rates.",
    explainer: [
      "National Insurance is calculated separately from Income Tax, using its own thresholds. This calculator shows exactly how much Class 1 NI is due on your earnings as an employee.",
      "Unlike Income Tax, National Insurance doesn't have a full tax-free personal allowance. You start paying once you earn more than the Primary Threshold (£12,570 a year), then a lower rate kicks in once you cross the Upper Earnings Limit (£50,270). It's also the same across England, Wales, Scotland, and Northern Ireland, since NI isn't devolved.",
      "This covers Class 1 contributions for employees. If you're self-employed, you pay Class 4 (and in some cases voluntary Class 2) instead. Use the Self-Employed Tax Calculator for that.",
    ],
    faqs: [
      {
        question: "What is National Insurance used for?",
        answer:
          "National Insurance contributions fund state benefits including the State Pension, and count towards your qualifying years.",
      },
      {
        question: "How is National Insurance different from Income Tax?",
        answer:
          "NI uses its own thresholds and rates, is usually calculated per pay period rather than annually, and funds a different set of state benefits.",
      },
      {
        question: "Do I pay National Insurance on all my earnings?",
        answer:
          "No. Nothing is due below the Primary Threshold (£12,570 a year). Above that you pay 8% up to the Upper Earnings Limit (£50,270), then 2% on anything above it.",
      },
      {
        question: "Does National Insurance count towards my State Pension?",
        answer:
          "Yes, paying, or being credited with, National Insurance builds up qualifying years towards the State Pension. You typically need 10 qualifying years for any State Pension and 35 for the full amount.",
      },
      {
        question: "Is employer National Insurance included?",
        answer:
          "No. This calculator only covers what comes out of your own pay (the employee's Class 1 contribution). Employers pay a separate contribution on top, which doesn't affect your payslip.",
      },
    ],
    relatedSlugs: ["salary-calculator", "income-tax-calculator", "self-employed-tax-calculator"],
    explainerSlug: "how-uk-tax-bands-work-2026-27",
  },
  {
    slug: "dividend-tax-calculator",
    name: "Dividend Tax Calculator",
    shortName: "Dividend Tax",
    keyword: "dividend tax calculator UK",
    h1: "UK Dividend Tax Calculator",
    description:
      "Calculate the tax due on dividend income for shareholders and company directors, including the dividend allowance.",
    explainer: [
      "Dividend income is taxed at different rates from salary, with its own tax-free allowance. This calculator combines your other income with dividends to show the correct dividend tax due.",
      "Dividends are taxed after your Personal Allowance and any other income has used up its share of the tax bands, so a director who also draws a salary will usually see at least some dividends taxed at the higher dividend rate, even if the salary alone stays in the basic rate band. The first £500 of dividend income each year is covered by the dividend allowance and isn't taxed, though it still counts towards your total income for things like the Personal Allowance taper.",
      "Dividend tax bands and rates are set UK-wide, so they don't change if you're a Scottish taxpayer. Only the Income Tax on your other income does, since Scottish Income Tax rates are devolved but dividend tax isn't.",
    ],
    faqs: [
      {
        question: "What is the dividend allowance?",
        answer:
          "Every tax year, a set amount of dividend income is tax-free before the dividend tax rates apply. This is separate from the Personal Allowance.",
      },
      {
        question: "Do I pay dividend tax through my company or personally?",
        answer:
          "Dividend tax is a personal tax, paid by the shareholder through Self Assessment. It is not deducted by the company before payment.",
      },
      {
        question: "What dividend tax rates apply above the allowance?",
        answer:
          "10.75% if the dividend falls in the basic rate band, 35.75% in the higher rate band, and 39.35% in the additional rate band for 2026/27.",
      },
      {
        question: "Do dividends from an ISA count?",
        answer:
          "No. Dividends from shares held in an ISA are always tax-free and don't need to be included here or reported to HMRC.",
      },
      {
        question: "How do I actually pay dividend tax?",
        answer:
          "If your dividends are above the £500 allowance, you report them on a Self Assessment tax return and pay by 31 January following the end of the tax year, alongside any other tax you owe.",
      },
    ],
    relatedSlugs: ["income-tax-calculator", "self-employed-tax-calculator", "capital-gains-tax-calculator"],
    explainerSlug: "dividend-tax-explained",
  },
  {
    slug: "self-employed-tax-calculator",
    name: "Self-Employed Tax Calculator",
    shortName: "Self-Employed",
    keyword: "self employed tax calculator UK",
    h1: "Self-Employed Tax Calculator (Sole Traders)",
    description:
      "Work out Income Tax and Class 2/4 National Insurance owed on your self-employed profits as a sole trader.",
    explainer: [
      "As a sole trader you pay Income Tax and Class 4 (and where applicable Class 2) National Insurance on your profits. This calculator combines both to show your total tax bill.",
      "Class 4 National Insurance is charged at 6% on profits between £12,570 and £50,270, then 2% above that, on top of Income Tax on the same profit figure. Class 2 National Insurance, which used to be a flat weekly charge for most sole traders, was abolished as a compulsory contribution from April 2024: if your profits are £7,105 or more you get a qualifying year towards your State Pension automatically, with nothing to pay.",
      "If your profits are below £7,105, you won't get a qualifying year automatically, but you can choose to pay Class 2 voluntarily (currently £3.65 a week) to protect your State Pension record. This calculator lets you toggle that on to see the cost.",
    ],
    faqs: [
      {
        question: "What counts as profit for self-employed tax?",
        answer:
          "Profit is your total business income minus allowable business expenses. It's this figure, not your turnover, that's taxed.",
      },
      {
        question: "When is self-employed tax due?",
        answer:
          "Self Assessment tax is typically due by 31 January following the end of the tax year, with a possible payment on account due the following 31 July too.",
      },
      {
        question: "Do I need to pay Class 2 National Insurance?",
        answer:
          "Only if you want to. It's voluntary now unless your profits are below £7,105 and you want a qualifying year for the State Pension. Above that threshold, you get the qualifying year for free through Class 4.",
      },
      {
        question: "Is there a tax-free allowance for small side-income?",
        answer:
          "Yes, the £1,000 trading allowance lets you earn up to £1,000 a year from self-employment or casual income tax-free, with nothing to report to HMRC if that's all you earn. It's applied before expenses, so you can't also deduct expenses on top of it.",
      },
      {
        question: "What are payments on account?",
        answer:
          "If your Self Assessment bill is £1,000 or more and you haven't already paid most of it another way, HMRC asks you to pay half of next year's estimated bill in advance: one instalment on 31 January alongside that year's balancing payment, and the other on 31 July.",
      },
    ],
    relatedSlugs: ["income-tax-calculator", "national-insurance-calculator", "dividend-tax-calculator"],
    explainerSlug: "self-employed-tax-explained",
  },
  {
    slug: "capital-gains-tax-calculator",
    name: "Capital Gains Tax Calculator",
    shortName: "Capital Gains Tax",
    keyword: "capital gains tax calculator UK",
    h1: "UK Capital Gains Tax Calculator",
    description:
      "Calculate Capital Gains Tax owed on profits from selling shares, property, or other chargeable assets.",
    explainer: [
      "Capital Gains Tax is due on the profit made when you dispose of an asset that has increased in value. This calculator applies the current annual exempt amount and CGT rates to work out what you owe.",
      "How much of your gain is taxed at 18% versus 24% depends on how much of your basic rate band your other taxable income has already used. If your income plus the gain stays within the basic rate band, the whole gain is taxed at 18%; any part that pushes you into the higher rate band is taxed at 24%. The same two rates apply to shares, second properties, and other chargeable assets alike, since they were unified from 30 October 2024.",
      "Your main home is usually exempt from CGT under Private Residence Relief, and gains inside an ISA or pension are always tax-free, so this calculator is really for second properties, shares held outside an ISA, and other investments.",
    ],
    faqs: [
      {
        question: "What is the annual exempt amount?",
        answer:
          "Each tax year, a set amount of capital gains is tax-free before CGT applies. Gains above this threshold are taxed at 18% or 24%, depending on your income and the size of the gain.",
      },
      {
        question: "Are CGT rates different for property and shares?",
        answer:
          "Not any more. Since 30 October 2024, the same 18%/24% rates apply to residential property, shares, and other chargeable assets.",
      },
      {
        question: "Do I pay CGT when I sell my main home?",
        answer:
          "Usually not. Private Residence Relief exempts your only or main home from Capital Gains Tax in almost all cases. It mainly applies to second homes, buy-to-let property, and other investments.",
      },
      {
        question: "How do I report and pay Capital Gains Tax?",
        answer:
          "For UK residential property, you must report and pay within 60 days of completion using HMRC's Capital Gains Tax on UK property service. For other assets, gains are reported through Self Assessment, with tax due by 31 January following the end of the tax year.",
      },
      {
        question: "Can losses reduce my CGT bill?",
        answer:
          "Yes, capital losses in the same tax year are deducted from gains before the Annual Exempt Amount is applied, and unused losses can be carried forward to offset gains in future years once reported to HMRC.",
      },
    ],
    relatedSlugs: ["dividend-tax-calculator", "income-tax-calculator", "salary-calculator"],
    explainerSlug: "capital-gains-tax-second-home",
  },
  {
    slug: "take-home-pay-calculator",
    name: "Take-Home Pay Calculator",
    shortName: "Take-Home Pay",
    keyword: "take home pay calculator",
    h1: "Take-Home Pay Calculator",
    description:
      "See exactly what lands in your bank account each month after tax, National Insurance, and pension contributions.",
    explainer: [
      "Your take-home pay is what's left of your salary after all deductions. This calculator shows the monthly and annual breakdown, so you know exactly what to expect on payday.",
      "It uses the same calculation as our Salary Calculator (Income Tax, Class 1 National Insurance, and any pension contribution taken before tax), just framed around what actually lands in your account each payday rather than your headline salary.",
    ],
    faqs: [
      {
        question: "Is take-home pay the same as net pay?",
        answer:
          "Yes, take-home pay and net pay both refer to your earnings after Income Tax, National Insurance, and other deductions.",
      },
      {
        question: "What deductions are included?",
        answer:
          "Income Tax, Class 1 National Insurance, and any pension contribution taken before tax (a net pay arrangement) are included. Student loan repayments and salary sacrifice benefits aren't modelled yet.",
      },
      {
        question: "Why does take-home pay vary month to month if my salary is fixed?",
        answer:
          "The figures here are annualised and divided evenly, but in reality bonus months, differing days in a pay period, and how your employer spreads your tax-free allowance across the year can shift what actually lands each month slightly.",
      },
      {
        question: "Does this show pay after tax for self-employed income?",
        answer:
          "No. This is for salaried/PAYE income. If you're a sole trader, use the Self-Employed Tax Calculator instead, since you pay tax and National Insurance differently.",
      },
      {
        question: "How often are the rates on this page updated?",
        answer:
          "We update the figures whenever HMRC publishes new rates for a tax year, and show the exact date they were last checked at the top of the calculator.",
      },
    ],
    relatedSlugs: ["salary-calculator", "income-tax-calculator", "national-insurance-calculator"],
    explainerSlug: "how-uk-tax-bands-work-2026-27",
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
