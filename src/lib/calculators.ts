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
      "If your employer deducts pension contributions before tax through a net pay arrangement (the default for most workplace pensions), add your contribution percentage and we'll take it off your salary before working out Income Tax. National Insurance is still calculated on your full salary either way: HMRC doesn't give equivalent NI relief on a net pay arrangement, only salary sacrifice reduces both.",
      "This calculator covers Income Tax, National Insurance, and pension contributions under a net pay arrangement. It doesn't yet account for student loan repayments or salary sacrifice, so if either applies to you, your actual take-home pay will differ from what's shown here.",
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
          "It's the most common way workplace pensions are set up: your contribution comes out of your salary before Income Tax is calculated, so you get full tax relief automatically. National Insurance is still worked out on your salary before that deduction, since HMRC doesn't apply the same relief to NI under a net pay arrangement. Salary sacrifice is a different arrangement that does reduce both, but this calculator doesn't model it separately yet.",
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
      "Calculate how much Income Tax you owe, broken down by tax band: basic, higher, and additional rate.",
    explainer: [
      "This calculator applies the current UK Income Tax bands to your taxable income and shows how much falls into each band, so you can see where your tax bill comes from.",
      "Taxable income is what's left after your Personal Allowance, the amount you can earn tax-free each year. Once your adjusted net income is above £100,000, the Personal Allowance itself starts shrinking by £1 for every £2 you earn, disappearing completely at £125,140, which is why very high earners can face a higher effective rate over that stretch of income than the headline 45% additional rate suggests.",
      "Income Tax bands are devolved in Scotland, which uses six bands instead of the three rest-of-UK bands. Toggle the region above to match where you're a taxpayer, usually wherever your main home is, not where you work. This calculator applies the standard Personal Allowance and doesn't take a tax code as an input, so if HMRC has adjusted your code for another reason, your actual PAYE deduction will differ from what's shown here.",
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
          "If your adjusted net income is above £100,000, the Personal Allowance tapers away by £1 for every £2 over that threshold, reaching zero at £125,140. That's applied automatically here, using the income you enter as a proxy for adjusted net income.",
      },
      {
        question: "Is this the same as my tax code?",
        answer:
          "Only if you're on the standard code. A standard tax code (1257L for most people in 2026/27) reflects the standard £12,570 Personal Allowance, which is what this calculator assumes. This calculator doesn't take a tax code as an input, so if HMRC has adjusted yours, for example a K code, a BR/D0/D1 second job code, or a Marriage Allowance adjustment, your actual bill will differ from what's shown here.",
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
      "Estimate your Class 1 National Insurance contributions as a standard employee, based on current NI thresholds and rates.",
    explainer: [
      "National Insurance is calculated separately from Income Tax, using its own thresholds. This calculator gives an annualised estimate of Class 1 NI for a standard Category A employee with earnings spread evenly across the year.",
      "Unlike Income Tax, National Insurance doesn't have a full tax-free personal allowance. You start paying once you earn more than the Primary Threshold (£12,570 a year), then a lower rate kicks in once you cross the Upper Earnings Limit (£50,270). It's also the same across England, Wales, Scotland, and Northern Ireland, since NI isn't devolved.",
      "In practice, employee NI is worked out per pay period, not as a single annual sum, so this annualised figure can differ from your actual deductions if your earnings are irregular, you get a large bonus in one month, you hold more than one job, you're on a different NI category letter, or you've arranged deferment. This covers Class 1 contributions for employees; if you're self-employed, you pay Class 4 (and in some cases voluntary Class 2) instead. Use the Self-Employed Tax Calculator for that.",
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
          "No. Nothing is due below the Primary Threshold (£12,570 a year). Above that you pay 8% up to the Upper Earnings Limit (£50,270), then 2% on anything above it. These are the standard Category A rates that apply to most employees; some workers, such as those deferring NI because they have more than one job, pay a different rate.",
      },
      {
        question: "Does National Insurance count towards my State Pension?",
        answer:
          "Yes, paying, or being credited with, National Insurance builds up qualifying years towards the State Pension. You typically need 10 qualifying years for any State Pension. If your NI record started after April 2016, you normally need 35 qualifying years for the full new State Pension; people with an older record, particularly if you were ever contracted out, can need a different number.",
      },
      {
        question: "Is employer National Insurance included?",
        answer:
          "No. This calculator only covers what comes out of your own pay (the employee's Class 1 contribution). Employers pay a separate contribution on top, which doesn't affect your payslip.",
      },
      {
        question: "Why might this differ from what's actually deducted from my pay?",
        answer:
          "This is an annualised estimate for a standard Category A employee with evenly spread earnings. Actual NI is worked out per pay period, so bonuses, irregular pay, multiple jobs, a different NI category, or deferment can all make your real deduction differ from this figure.",
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
      "Dividend income is taxed at different rates from salary, with its own tax-free allowance. This calculator combines your other income with dividends to show the dividend tax due.",
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
          "Dividend tax is a personal tax, paid by the shareholder. It is not deducted by the company before payment.",
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
          "If your dividends are above your allowances, you need to tell HMRC. If you already complete Self Assessment, include them there. If your dividend income is £10,000 or less and you don't normally file a return, HMRC can instead collect the tax through your tax code. Dividend income over £10,000 generally means registering for Self Assessment. Tax outside Self Assessment is normally due by 31 January following the end of the tax year, the same as a Self Assessment balancing payment.",
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
      "Class 4 National Insurance is charged at 6% on profits between £12,570 and £50,270, then 2% above that, on top of Income Tax on the same profit figure. Class 2 National Insurance, which used to be a flat weekly charge for most sole traders, was abolished as a compulsory contribution from April 2024: if your profits are £7,105 or more, HMRC treats your Class 2 contributions as having been paid, so you get a qualifying year towards your State Pension automatically, with nothing to pay.",
      "If your profits are below £7,105, you won't get a qualifying year automatically, but you can choose to pay Class 2 voluntarily (currently £3.65 a week) to protect your State Pension record. This calculator lets you toggle that on to see the cost. If you have income and expenses that fall under Making Tax Digital for Income Tax (mandatory from April 2026 for sole traders and landlords with qualifying income over £50,000), you'll also need compatible digital record-keeping software alongside this figure.",
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
          "Only if you want to. Once your profits reach £7,105, HMRC treats your Class 2 contributions as having been paid, so you get a qualifying year for the State Pension without an actual bill. Below that threshold, you can choose to pay Class 2 voluntarily instead.",
      },
      {
        question: "Is there a tax-free allowance for small side-income?",
        answer:
          "Yes, the £1,000 trading allowance lets you earn up to £1,000 a year from self-employment or casual income tax-free. In most cases there's nothing to report to HMRC if that's all you earn, though there are exceptions, so check HMRC's guidance if you're unsure. It's applied before expenses, so you can't also deduct expenses on top of it.",
      },
      {
        question: "What are payments on account?",
        answer:
          "If your Self Assessment bill is £1,000 or more, and less than 80% of the tax you owed was collected another way (for example through PAYE on other income), HMRC asks you to pay half of next year's estimated bill in advance: one instalment on 31 January alongside that year's balancing payment, and the other on 31 July.",
      },
      {
        question: "Do I need to use Making Tax Digital for Income Tax?",
        answer:
          "If you're a sole trader or landlord with qualifying income over £50,000 (based on your 2024/25 figures), it's been mandatory since 6 April 2026: you need compatible software, digital records, and quarterly updates to HMRC, on top of your annual Self Assessment return. The threshold drops to £30,000 from April 2027 and £20,000 from April 2028.",
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
      "Capital Gains Tax is due on the profit made when you dispose of an asset that has increased in value. This calculator applies the current annual exempt amount and the main CGT rates to work out what you'd owe.",
      "How much of your gain is taxed at 18% versus 24% depends on how much of your basic rate band your other taxable income has already used. If your income plus the gain stays within the basic rate band, the whole gain is taxed at 18%; any part that pushes you into the higher rate band is taxed at 24%. These are the main rates that apply to shares, second properties, and most other chargeable assets, since property lost its own higher rate from 30 October 2024. They aren't universal, though: trustees and personal representatives generally pay 24% regardless of income, and reliefs like Business Asset Disposal Relief can give an 18% rate on qualifying business gains, so this calculator models the standard individual case rather than every scenario.",
      "Your main home is usually exempt from CGT under Private Residence Relief, and gains inside an ISA or pension are always tax-free, so this calculator is really for second properties, shares held outside an ISA, and other investments.",
    ],
    faqs: [
      {
        question: "What is the annual exempt amount?",
        answer:
          "Each tax year, a set amount of capital gains is tax-free before CGT applies. Gains above this threshold are taxed at 18% or 24% for most individuals, depending on your income and the size of the gain.",
      },
      {
        question: "Are CGT rates different for property and shares?",
        answer:
          "Not for the main rates. Since 30 October 2024, the same 18%/24% rates apply to residential property, shares, and most other chargeable assets. Special rates and reliefs can still apply to certain assets and taxpayers, such as Business Asset Disposal Relief or trustees.",
      },
      {
        question: "Do I pay CGT when I sell my main home?",
        answer:
          "Usually not. Private Residence Relief exempts your only or main home from Capital Gains Tax in almost all cases. It mainly applies to second homes, buy-to-let property, and other investments.",
      },
      {
        question: "How do I report and pay Capital Gains Tax?",
        answer:
          "For UK residential property, you must report and pay within 60 days of completion using HMRC's Capital Gains Tax on UK property service. For other assets like shares, gains are usually reported through Self Assessment, though HMRC's real-time Capital Gains Tax service is also available if you don't otherwise need to file a return. Tax is due by 31 January following the end of the tax year.",
      },
      {
        question: "Can losses reduce my CGT bill?",
        answer:
          "Yes, capital losses in the same tax year are deducted from gains before the Annual Exempt Amount is applied, and unused losses can be carried forward to offset gains in future years once reported to HMRC.",
      },
      {
        question: "What if I inherited the asset rather than bought it?",
        answer:
          "Your acquisition cost is normally the asset's market value at the date of death (the probate value), not what the person you inherited it from originally paid. Enter your gain based on that market value, not the original purchase price.",
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
      "See what lands in your bank account each month after tax, National Insurance, and pension contributions.",
    explainer: [
      "Your take-home pay is what's left of your salary after all deductions. This calculator shows the monthly and annual breakdown, so you know what to expect on payday.",
      "It uses the same calculation as our Salary Calculator: Income Tax, Class 1 National Insurance (calculated on your full salary, not reduced by a net pay pension), and any pension contribution taken before tax for Income Tax purposes, just framed around what actually lands in your account each payday rather than your headline salary.",
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
          "Income Tax, Class 1 National Insurance, and any pension contribution taken before tax under a net pay arrangement are included. National Insurance is calculated on your full salary, since a net pay pension doesn't reduce it. Student loan repayments and salary sacrifice benefits aren't modelled yet.",
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
