export type BlogPostSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  relatedCalculatorSlugs: string[];
  sections: BlogPostSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-uk-tax-bands-work-2026-27",
    title: "How UK tax bands work in 2026/27",
    description:
      "A plain-English guide to how Income Tax bands, the Personal Allowance, and National Insurance thresholds fit together.",
    date: "2026-04-06",
    relatedCalculatorSlugs: [
      "income-tax-calculator",
      "salary-calculator",
      "national-insurance-calculator",
    ],
    sections: [
      {
        paragraphs: [
          "\"Tax bands\" is one of those phrases everyone's heard but few people can actually explain. The good news is the underlying idea is simple: UK Income Tax is progressive, which means different slices of your income are taxed at different rates, not your whole income at one rate.",
          "A common misconception is that moving into a higher tax band means all of your income suddenly gets taxed at the higher rate. It doesn't. Only the portion of income that falls within that band is taxed at that band's rate. Everything below it is still taxed at the lower rates that applied to those slices.",
        ],
      },
      {
        heading: "The Personal Allowance",
        paragraphs: [
          "Before any bands come into play, everyone gets a Personal Allowance: £12,570 of income you can earn each tax year completely tax-free. It's been frozen at this level since April 2022 and is due to stay there until April 2031.",
          "If your income goes above £100,000, the Personal Allowance starts shrinking: by £1 for every £2 you earn over that threshold. It disappears entirely once your income reaches £125,140. This is why earnings between £100,000 and £125,140 effectively get taxed at a higher rate than the 40% higher rate band suggests: you're paying tax on the income itself, and losing tax-free allowance at the same time.",
        ],
      },
      {
        heading: "Income Tax bands in England, Wales, and Northern Ireland",
        paragraphs: ["After the Personal Allowance, taxable income is split into three bands:"],
        list: [
          "Basic rate: 20% on taxable income up to £37,700 (so up to £50,270 of total income)",
          "Higher rate: 40% on taxable income from £37,700 to £112,570 (up to £125,140 of total income)",
          "Additional rate: 45% on taxable income above £112,570 (above £125,140 of total income)",
        ],
      },
      {
        heading: "Income Tax bands in Scotland",
        paragraphs: [
          "Income Tax is partly devolved, and Scotland sets its own bands and rates for anyone whose main home is there. For 2026/27 there are six bands instead of three:",
        ],
        list: [
          "Starter rate: 19% up to £16,537 of total income",
          "Basic rate: 20% up to £29,526",
          "Intermediate rate: 21% up to £43,662",
          "Higher rate: 42% up to £75,000",
          "Advanced rate: 45% up to £125,140",
          "Top rate: 48% above £125,140",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "Say you earn £60,000 a year in England, Wales, or Northern Ireland. The first £12,570 is tax-free. The next £37,700 (taking you to £50,270) is taxed at 20%, which comes to £7,540. The remaining £9,730 (from £50,270 to £60,000) falls in the higher rate band and is taxed at 40%, coming to £3,892.",
          "Add those together and the total Income Tax bill is £11,432. Even though £60,000 sits well within the 40% band, you're not paying 40% on all of it.",
        ],
      },
      {
        heading: "Why your effective tax rate is lower than your top rate",
        paragraphs: [
          "In that example, £11,432 of tax on £60,000 of income works out at an effective rate of about 19.1%, nowhere near the 40% headline rate that applies to your top slice of income. This gap between your marginal rate (the rate on your next pound of income) and your effective rate (the average rate across everything you earn) is normal, and it's the whole point of a banded system.",
        ],
      },
      {
        paragraphs: [
          "If you want the exact numbers for your own income, our Income Tax Calculator and Salary Calculator apply these bands automatically, including the Personal Allowance taper and the Scotland/rest-of-UK split.",
        ],
      },
    ],
  },
  {
    slug: "dividend-tax-explained",
    title: "Dividend tax explained: how much tax do you pay on dividends?",
    description:
      "How the dividend allowance and dividend tax rates work in 2026/27, and how dividends are taxed alongside your other income.",
    date: "2026-04-13",
    relatedCalculatorSlugs: [
      "dividend-tax-calculator",
      "income-tax-calculator",
      "self-employed-tax-calculator",
    ],
    sections: [
      {
        paragraphs: [
          "If you own shares (including shares in your own limited company), dividends are a common way to receive income from them. They're taxed under separate rules from salary or self-employment profit, with their own tax-free allowance and their own set of rates.",
          "This matters most for company directors who pay themselves a mix of salary and dividends, and for anyone with a significant shareholding outside an ISA or pension.",
        ],
      },
      {
        heading: "The dividend allowance",
        paragraphs: [
          "Every tax year, the first £500 of dividend income is tax-free: this is the dividend allowance. It's separate from your £12,570 Personal Allowance, so you can use both.",
          "One catch: even though the allowance itself is tax-free, dividends within it still count as income for other purposes, such as working out whether the Personal Allowance taper applies once your total income passes £100,000.",
        ],
      },
      {
        heading: "Dividend tax rates for 2026/27",
        paragraphs: [
          "Above the allowance, dividends are taxed at rates that depend on which Income Tax band they fall into once stacked on top of your other income:",
        ],
        list: [
          "Basic rate: 10.75%",
          "Higher rate: 35.75%",
          "Additional rate: 39.35%",
        ],
      },
      {
        heading: "How dividends stack on your other income",
        paragraphs: [
          "Dividends are always treated as the top slice of your income. Your Personal Allowance and the lower tax bands are used up by salary, self-employment profit, or other income first. Dividends only pick up the bands from wherever that other income leaves off.",
          "For example, imagine a company director with a £30,000 salary and £30,000 of dividends in England, Wales, or Northern Ireland. After the £12,570 Personal Allowance, £17,430 of salary is taxable, all within the basic rate band, giving Income Tax of £3,486. The dividends then stack on top: the first £500 is covered by the dividend allowance, and the remaining £29,500 spans both the basic and higher rate bands, working out at £5,603.75 of dividend tax. The total bill across both is £9,089.75.",
          "Notice that a meaningful chunk of the dividends end up taxed at the higher 35.75% rate: not because the dividends themselves are large, but because the salary has already used up most of the basic rate band.",
        ],
      },
      {
        heading: "Reporting and paying dividend tax",
        paragraphs: [
          "If your dividends are within the £500 allowance, or they come from shares held in an ISA, you don't need to tell HMRC about them at all. Above the allowance, dividends are reported through Self Assessment, with any tax due by 31 January following the end of the tax year.",
        ],
      },
      {
        paragraphs: [
          "Our Dividend Tax Calculator runs this exact calculation for your own numbers. Enter your other income and your dividend income, and it shows the full band-by-band breakdown.",
        ],
      },
    ],
  },
  {
    slug: "self-employed-tax-explained",
    title: "Self-employed tax explained: Income Tax and National Insurance for sole traders",
    description:
      "How Income Tax, Class 4 National Insurance, and the trading allowance work for sole traders in 2026/27, plus key Self Assessment dates.",
    date: "2026-04-20",
    relatedCalculatorSlugs: [
      "self-employed-tax-calculator",
      "income-tax-calculator",
      "national-insurance-calculator",
    ],
    sections: [
      {
        paragraphs: [
          "If you work for yourself as a sole trader (freelancing, running a small business, or doing regular contract work), you're taxed differently from an employee. There's no employer handling deductions through payroll; instead, you calculate and pay everything yourself through Self Assessment.",
          "The key figure is your profit, not your turnover: total business income minus allowable business expenses. It's profit that Income Tax and National Insurance are charged on.",
        ],
      },
      {
        heading: "Income Tax on your profit",
        paragraphs: [
          "Self-employment profit is taxed using the same Personal Allowance and Income Tax bands as employment income: the £12,570 tax-free allowance, then 20%, 40%, and 45% bands (or the six Scottish bands, if that applies to you). If you also have a salary or other income, it all gets added together to work out which bands your profit falls into.",
        ],
      },
      {
        heading: "Class 4 National Insurance",
        paragraphs: [
          "On top of Income Tax, sole traders pay Class 4 National Insurance on their profit: 6% on profits between £12,570 and £50,270, then 2% on anything above that. It's calculated and paid alongside Income Tax through Self Assessment, rather than deducted from pay as it would be for an employee.",
        ],
      },
      {
        heading: "What happened to Class 2 National Insurance",
        paragraphs: [
          "Class 2 National Insurance used to be a flat weekly charge that most sole traders paid to build up State Pension entitlement. It was abolished as a compulsory contribution from April 2024. Now, if your profits are £7,105 or more, you get a qualifying year towards the State Pension automatically, with nothing extra to pay.",
          "If your profits are below £7,105, you don't get a qualifying year automatically. You can still choose to pay Class 2 voluntarily, currently £3.65 a week, to protect your State Pension record for that year.",
        ],
      },
      {
        heading: "The £1,000 trading allowance",
        paragraphs: [
          "If your self-employment income is small (casual freelance work, selling items online, the odd bit of contract work), the trading allowance lets you earn up to £1,000 a year completely tax-free, with no need to register with HMRC or file a return if that's your only income from self-employment.",
          "The allowance is applied to your income before expenses are deducted, and you can't claim both the allowance and your actual expenses, just whichever is higher.",
        ],
      },
      {
        heading: "Key dates: Self Assessment deadlines and payments on account",
        paragraphs: [
          "The main deadline is 31 January following the end of the tax year. This is when you must file your return and pay any tax owed for that year (your \"balancing payment\").",
          "If your Self Assessment bill is £1,000 or more, and you haven't already paid most of it another way, HMRC also asks for payments on account: two advance instalments towards next year's bill, each equal to half of the previous year's liability. The first is due on 31 January, alongside that year's balancing payment, and the second on 31 July, so the January payment can end up being a lot larger than the tax bill alone.",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "Take a sole trader with £40,000 of profit. After the £12,570 Personal Allowance, £27,430 is taxable, all within the basic rate band, giving Income Tax of £5,486. Class 4 National Insurance is charged on the same profit above £12,570: £27,430 at 6% comes to £1,645.80. Together, that's a total tax and National Insurance bill of £7,131.80. Because profit is above £7,105, a State Pension qualifying year is included automatically.",
        ],
      },
      {
        paragraphs: [
          "Our Self-Employed Tax Calculator runs this calculation for your own profit figure, including the option to add voluntary Class 2 contributions if your profit is below the Small Profits Threshold.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
