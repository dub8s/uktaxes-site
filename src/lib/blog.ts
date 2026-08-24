export type BlogPostSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  relatedCalculatorSlugs: string[];
  /** Slugs of other blog posts to cross-link as "Related reading". */
  relatedPostSlugs?: string[];
  sections: BlogPostSection[];
  /** Optional Q&A block rendered at the end of the post and emitted as FAQPage schema. */
  faqs?: BlogFaq[];
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
          "Before any bands come into play, most taxpayers get a Personal Allowance: £12,570 of income you can earn each tax year completely tax-free. It's been frozen at this level since April 2021 and is due to stay there until April 2031.",
          "If your adjusted net income goes above £100,000, the Personal Allowance starts shrinking: by £1 for every £2 you earn over that threshold. It disappears entirely once your income reaches £125,140. This is why earnings between £100,000 and £125,140 effectively get taxed at a higher rate than the 40% higher rate band suggests: you're paying tax on the income itself, and losing tax-free allowance at the same time.",
        ],
      },
      {
        heading: "Income Tax bands in England, Wales, and Northern Ireland",
        paragraphs: [
          "Here's how your total income maps onto the three bands, assuming you get the standard £12,570 Personal Allowance:",
        ],
        list: [
          "Basic rate: 20% on total income from £12,571 to £50,270 (the first £37,700 above your Personal Allowance)",
          "Higher rate: 40% on total income from £50,271 to £125,140 (the next £74,870 above that)",
          "Additional rate: 45% on total income above £125,140",
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
        paragraphs: [
          "These Scottish thresholds also assume the standard £12,570 Personal Allowance, which tapers away above £100,000 of adjusted net income in the same way as the rest of the UK. They only apply to non-savings, non-dividend income too, things like salary, pensions, and self-employment profit. Savings interest and dividends are still taxed using UK-wide rates and bands, even for Scottish taxpayers, since those aren't devolved.",
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
        heading: "National Insurance thresholds",
        paragraphs: [
          "Income Tax isn't the only deduction from your pay. If you're an employee, you also pay Class 1 National Insurance, worked out using its own separate thresholds rather than the Personal Allowance.",
          "For 2026/27, employees pay nothing on the first £12,570 of earnings (the Primary Threshold), then 8% on earnings up to £50,270 (the Upper Earnings Limit), then 2% on anything above that. These thresholds are the same across England, Wales, Scotland, and Northern Ireland, since National Insurance isn't devolved. NI is also normally worked out per pay period rather than as a single annual calculation, so our National Insurance Calculator gives an annualised estimate for a standard employee with evenly spread earnings, rather than a guaranteed pay-period figure.",
        ],
      },
      {
        paragraphs: [
          "If you want the numbers for your own income, our Income Tax Calculator and Salary Calculator apply these bands automatically, including the Personal Allowance taper and the Scotland/rest-of-UK split. Our National Insurance Calculator covers the NI side separately.",
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
          "If your dividends are within the £500 allowance, or they come from shares held in an ISA, you don't need to tell HMRC about them at all. Above the allowance, you need to tell HMRC. If you already complete Self Assessment, include them on your return. If your dividend income is £10,000 or less and you don't normally file Self Assessment, HMRC can instead collect the tax through an adjustment to your tax code, without you needing to register for a return. Dividend income over £10,000 generally means you need to register for Self Assessment. Either way, tax due outside Self Assessment is normally payable by 31 January following the end of the tax year, the same as a Self Assessment balancing payment.",
        ],
      },
      {
        paragraphs: [
          "Our Dividend Tax Calculator runs this calculation for your own numbers. Enter your other income and your dividend income, and it shows the full band-by-band breakdown.",
        ],
      },
    ],
  },
  {
    slug: "self-employed-tax-explained",
    title: "Self-employed tax explained: Income Tax and National Insurance for sole traders",
    description:
      "How Income Tax, Class 4 National Insurance, and the trading allowance work for sole traders in 2026/27, plus key Self Assessment dates and Making Tax Digital.",
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
          "Class 2 National Insurance used to be a flat weekly charge that most sole traders paid to build up State Pension entitlement. It was abolished as a compulsory contribution from April 2024. Now, if your profits are £7,105 or more, HMRC treats your Class 2 contributions as having been paid, giving you a qualifying year towards the State Pension automatically, with nothing extra to pay. Class 4 itself doesn't create the qualifying year; it's Class 2 being treated as paid that does.",
          "If your profits are below £7,105, you don't get a qualifying year automatically. You can still choose to pay Class 2 voluntarily, currently £3.65 a week, to protect your State Pension record for that year.",
        ],
      },
      {
        heading: "Making Tax Digital for Income Tax",
        paragraphs: [
          "Making Tax Digital for Income Tax became mandatory from 6 April 2026 for sole traders and landlords whose qualifying trading and/or property income was over £50,000 in 2024/25. If that's you, you now need to keep digital records using HMRC-recognised software and send quarterly updates summarising your income and expenses, on top of your usual annual Self Assessment return. The quarterly updates are short summaries, not full tax returns, and HMRC isn't applying penalty points for late ones during 2026/27 as a transitional grace period.",
          "The threshold is being phased down over time: it drops to £30,000 of qualifying income from April 2027, and to £20,000 from April 2028, bringing more sole traders and landlords into scope each year. If you're below the current threshold, ordinary Self Assessment is still all you need for now.",
        ],
      },
      {
        heading: "The £1,000 trading allowance",
        paragraphs: [
          "If your self-employment income is small (casual freelance work, selling items online, the odd bit of contract work), the trading allowance lets you earn up to £1,000 a year completely tax-free. In most cases there's no need to register with HMRC or file a return if that's your only income from self-employment, though there are exceptions, for example if you need to file a return for another reason, so it's worth checking HMRC's guidance if you're unsure.",
          "The allowance is applied to your income before expenses are deducted, and you can't claim both the allowance and your actual expenses, just whichever is higher.",
        ],
      },
      {
        heading: "Key dates: Self Assessment deadlines and payments on account",
        paragraphs: [
          "The main deadline is 31 January following the end of the tax year. This is when you must file your return and pay any tax owed for that year (your \"balancing payment\").",
          "If your Self Assessment bill is £1,000 or more, and less than 80% of your tax for the year was collected another way (for example through PAYE on other income), HMRC also asks for payments on account: two advance instalments towards next year's bill, each equal to half of the previous year's liability. The first is due on 31 January, alongside that year's balancing payment, and the second on 31 July, so the January payment can end up being a lot larger than the tax bill alone.",
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
  {
    slug: "uk-tax-codes-explained",
    title: "UK tax codes explained: what yours means and how to fix it",
    description:
      "A complete guide to UK tax codes: what 1257L, BR, K, and emergency codes mean, how to check yours is correct, and what to do if it's wrong.",
    date: "2026-04-27",
    relatedCalculatorSlugs: [
      "income-tax-calculator",
      "salary-calculator",
      "national-insurance-calculator",
    ],
    relatedPostSlugs: [
      "how-uk-tax-bands-work-2026-27",
      "second-job-tax-explained",
      "marriage-allowance-explained",
    ],
    sections: [
      {
        paragraphs: [
          "Your tax code is the short string of numbers and letters your employer or pension provider uses to work out how much Income Tax to take off your pay. Get it wrong and you could pay too much, or too little, without ever realising until HMRC catches up with you.",
          "You'll find it on your payslip, your P45 or P60, or in your HMRC personal tax account. Here's what it actually means, and what to do if it looks wrong.",
        ],
      },
      {
        heading: "The standard tax code for 2026/27",
        paragraphs: [
          "For most people with one job and no complications, the code is 1257L. The number is your tax-free Personal Allowance divided by 10 (£12,570 becomes 1257), and the L means you're entitled to the standard allowance.",
          "If your circumstances are simple, that's the code you should see. Anything else usually means HMRC is accounting for something specific: a second income, a benefit in kind, unpaid tax from a previous year, or a devolved tax rate.",
        ],
      },
      {
        heading: "What the letters in your tax code mean",
        paragraphs: ["The letter after the numbers tells you which rule is being applied:"],
        list: [
          "L: you're entitled to the standard tax-free Personal Allowance",
          "M: you've received a transfer of 10% of your partner's Personal Allowance (Marriage Allowance)",
          "N: you've transferred 10% of your Personal Allowance to your partner (Marriage Allowance)",
          "K: you have income HMRC isn't otherwise taxing that's larger than your Personal Allowance, so tax is added rather than an allowance deducted",
          "S: your income is taxed using the Scottish rates and bands",
          "C: your income is taxed using the Welsh rates and bands",
          "T: your code includes other calculations to work out your Personal Allowance",
          "BR: all your income from this job or pension is taxed at the basic rate, usually because you have more than one job or pension",
          "D0: all your income from this job or pension is taxed at the higher rate",
          "D1: all your income from this job or pension is taxed at the additional rate",
          "0T: your Personal Allowance has been used up, or your employer doesn't yet have enough information to give you a proper code",
          "NT: you're not paying any tax on this income",
        ],
      },
      {
        heading: "Second-job codes if you're a Scottish or Welsh taxpayer",
        paragraphs: [
          "BR, D0, and D1 are the rest-of-UK flat-rate codes for a second job or pension. Scottish and Welsh taxpayers see their own versions instead, reflecting their own bands:",
        ],
        list: [
          "Scotland: SBR (basic rate, 20%), SD0 (intermediate rate, 21%), SD1 (higher rate, 42%), SD2 (advanced rate, 45%), SD3 (top rate, 48%)",
          "Wales: CBR (basic rate), CD0 (higher rate), CD1 (additional rate), currently the same 20%/40%/45% rates as the rest of the UK, since Welsh rates haven't diverged so far",
        ],
      },
      {
        heading: "Emergency tax codes",
        paragraphs: [
          "An emergency tax code is applied when HMRC doesn't yet have full details of your income, usually when you start a new job without a P45, begin getting a pension, or start receiving company benefits. It works on a non-cumulative basis, meaning each pay period is taxed in isolation rather than against your total income for the year, which can mean you overpay tax temporarily.",
          "You'll recognise an emergency code by its suffix: W1 for weekly pay, M1 for monthly pay, or X where your pay dates vary (for example, 1257L W1 or 1257L M1). It's usually temporary. Handing your new employer a P45 or completing a starter checklist promptly is the fastest way to avoid one building up, and any tax overpaid on an emergency code is refundable once HMRC has the full picture.",
        ],
      },
      {
        heading: "How to check your tax code is right",
        paragraphs: [
          "Compare your code against your circumstances. If you have a single job and nothing unusual going on, you should be on 1257L (or the Scottish or Welsh equivalent). If you have a second job, that one will typically show BR, D0, D1, or their Scottish/Welsh equivalents. If you've claimed Marriage Allowance, expect an M or N.",
          "The most reliable way to check is your personal tax account at gov.uk/personal-tax-account, which shows your current code, the reasoning behind it, and lets you flag if something looks wrong.",
        ],
      },
      {
        heading: "What to do if your tax code is wrong",
        paragraphs: [
          "Contact HMRC through your personal tax account (changes usually reach your employer within around two weeks) or by phone if it's urgent. Once your code is corrected, your employer applies it automatically, and any tax you've overpaid is refunded either through your pay or as a separate P800 calculation.",
        ],
      },
      {
        paragraphs: [
          "Our Income Tax Calculator and Salary Calculator apply the standard Personal Allowance and bands, which is a useful comparison if you're on 1257L or its Scottish/Welsh equivalent. They don't currently take a tax code as an input, though, so if yours reflects something else, like a K code, a second-job code, or a Marriage Allowance adjustment, your actual PAYE deduction will differ from what the calculators show.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does 1257L mean?",
        answer:
          "It means you get the standard £12,570 tax-free Personal Allowance for 2026/27, with no unusual adjustments. It's the code most employees with a single, straightforward job should have.",
      },
      {
        question: "Why do I have a K code?",
        answer:
          "A K code means you have income or a benefit HMRC isn't otherwise able to tax, such as company benefits or unpaid tax from a previous year, that's larger than your Personal Allowance. Instead of deducting an allowance, tax is added to your taxable pay.",
      },
      {
        question: "What's the difference between BR, D0, and D1?",
        answer:
          "BR taxes all income from that job at the basic rate (20%), D0 at the higher rate (40%), and D1 at the additional rate (45%). They're normally used on a second job or pension once your Personal Allowance is already accounted for elsewhere. Scottish and Welsh taxpayers see different equivalents, such as SBR/SD0-SD3 or CBR/CD0/CD1.",
      },
      {
        question: "Where do I find my tax code?",
        answer:
          "On your payslip, your P45 or P60, in the HMRC app, or in your personal tax account at gov.uk/personal-tax-account.",
      },
      {
        question: "Can I change my own tax code?",
        answer:
          "Not directly, but you can tell HMRC about a change in your circumstances through your personal tax account, and they'll issue a corrected code to your employer.",
      },
    ],
  },
  {
    slug: "second-job-tax-explained",
    title: "Do you pay more tax on a second job? UK tax explained",
    description:
      "Working two jobs doesn't necessarily increase your total Income Tax bill, but National Insurance works differently, and it can all look confusing on your payslips. Here's how it actually works.",
    date: "2026-05-04",
    relatedCalculatorSlugs: [
      "income-tax-calculator",
      "national-insurance-calculator",
      "salary-calculator",
    ],
    relatedPostSlugs: ["uk-tax-codes-explained", "how-uk-tax-bands-work-2026-27"],
    sections: [
      {
        paragraphs: [
          "Short answer: having two jobs doesn't inherently increase your total Income Tax bill, because Income Tax is based broadly on your combined taxable income, regardless of how many jobs it comes from. National Insurance works differently: it's normally calculated separately for each job, so two jobs can sometimes mean paying more Class 1 National Insurance overall than the same total income from a single employer. It's usually your second payslip looking heavily taxed that causes the confusion, more than the underlying reality.",
        ],
      },
      {
        heading: "Why your second payslip looks heavily taxed",
        paragraphs: [
          "You only get one Personal Allowance (£12,570 for 2026/27), and it's usually allocated entirely to whichever job HMRC treats as your main one, normally the one you started first or that pays the most. Your second job then gets taxed from the very first pound, with no tax-free slice of its own, which makes it look far more heavily taxed than the first.",
        ],
      },
      {
        heading: "Tax codes you'll see on a second job",
        paragraphs: [
          "Which code your second job gets depends on how much of your Income Tax bands your main job has already used up:",
        ],
        list: [
          "BR: all income from the second job taxed at the basic rate (20%)",
          "D0: all income from the second job taxed at the higher rate (40%)",
          "D1: all income from the second job taxed at the additional rate (45%)",
        ],
      },
      {
        paragraphs: [
          "These are the rest-of-UK codes. Scottish taxpayers see SBR, SD0, SD1, SD2, or SD3 instead, and Welsh taxpayers see CBR, CD0, or CD1, reflecting their own bands. See our guide to UK tax codes for the full list.",
        ],
      },
      {
        heading: "National Insurance with two jobs",
        paragraphs: [
          "National Insurance is usually calculated separately for each job against its own Upper Earnings Limit (£50,270 for 2026/27). If you're a high earner with more than one job, this can mean you pay more Class 1 National Insurance overall than someone earning the identical total from a single employer. If that applies to you, you can apply to HMRC to defer National Insurance on one of your jobs using form CA72A, so it's charged at the reduced 2% rate instead of the full rate.",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "Say you earn £30,000 from your main job and £10,000 from a second job, £40,000 in total. Your main job uses the standard 1257L code: £17,430 is taxable after the Personal Allowance, taxed at 20%, coming to £3,486. Your second job is taxed entirely at the basic rate under a BR code: £10,000 at 20% comes to £2,000. Total Income Tax: £5,486.",
          "Now compare that to earning the same £40,000 from a single job: £27,430 taxable after the Personal Allowance, all within the basic rate band, taxed at 20%, also coming to £5,486. Identical Income Tax, as long as the tax codes are set correctly. National Insurance is a separate calculation on top in both cases, and since £40,000 sits below the £50,270 Upper Earnings Limit either way, it also comes out the same here regardless of how the income is split.",
        ],
      },
      {
        heading: "When you might end up overpaying (and how to fix it)",
        paragraphs: [
          "Problems arise when the default allocation doesn't suit your situation, for example if your \"second\" job actually pays more than your \"first\". You can ask HMRC to move your Personal Allowance to whichever job makes more sense through your personal tax account. Any small over or underpayment that does occur usually self-corrects automatically, either through your tax code the following year or via a P800 calculation.",
        ],
      },
      {
        paragraphs: [
          "Our Income Tax Calculator and National Insurance Calculator can help you sanity-check what each of your jobs should be deducting. For more on reading your tax codes, see our guide to what UK tax codes mean.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I pay more tax overall with two jobs?",
        answer:
          "Your total Income Tax is normally the same as it would be earning the combined amount from a single job, assuming your tax codes are set correctly across both. National Insurance is calculated separately for each job, though, so it can work out slightly higher with two jobs than with one at the same combined income.",
      },
      {
        question: "What tax code will my second job have?",
        answer:
          "Usually BR, D0, or D1 (or the Scottish/Welsh equivalents), depending on which Income Tax band your combined income falls into once your main job has used its share of the Personal Allowance and lower bands.",
      },
      {
        question: "Do I pay National Insurance on both jobs?",
        answer:
          "Usually yes, calculated separately on each. If you're a high earner with multiple jobs, you can apply to HMRC to defer National Insurance on one of them to avoid overpaying.",
      },
      {
        question: "Can I move my Personal Allowance to my second job instead?",
        answer:
          "Yes. Contact HMRC through your personal tax account to have your allowance reallocated if your second job pays more than your first.",
      },
      {
        question: "Will HMRC know about both jobs automatically?",
        answer:
          "Yes, both employers report to HMRC through PAYE, and your tax codes are adjusted accordingly, though it can take a short while to settle when you first start a second job.",
      },
    ],
  },
  {
    slug: "pay-rise-bonus-tax-explained",
    title: "Will a pay rise or bonus push you into a higher tax bracket?",
    description:
      "Crossing an Income Tax band by itself won't reduce your after-tax pay, but hidden tax traps between £50,000 and £125,140, and cliff edges like Tax-Free Childcare, can catch people out. Here's how it actually works.",
    date: "2026-05-11",
    relatedCalculatorSlugs: [
      "salary-calculator",
      "income-tax-calculator",
      "national-insurance-calculator",
    ],
    relatedPostSlugs: ["how-uk-tax-bands-work-2026-27", "uk-tax-codes-explained"],
    sections: [
      {
        paragraphs: [
          "No, not from the PAYE mechanics alone. Moving into a higher tax band only affects the slice of income above the threshold, never your whole salary, so a pay rise or bonus itself will always leave you with more take-home pay through Income Tax and National Insurance than before. What it won't necessarily protect you from is a separate, income-linked cliff edge like losing Tax-Free Childcare, which can leave a household worse off overall even though the PAYE portion behaves exactly as described here. For the full mechanics of how tax bands stack, see our guide to how UK tax bands work.",
        ],
      },
      {
        heading: "How bonuses are actually taxed",
        paragraphs: [
          "A bonus isn't taxed at some special punitive rate. It's added to your normal pay and taxed through PAYE in whichever pay period you receive it. Because it's often a large lump sum landing in a single month, that month's payslip can apply a higher rate of tax withholding than usual, which is why a bonus can look brutally taxed. Over the tax year, PAYE reconciles this against your annual tax code, so you're not actually paying more overall than the bands say you should.",
        ],
      },
      {
        heading: "The real hidden tax traps",
        paragraphs: [
          "The genuine danger zones aren't the headline 40% or 45% bands, they're a couple of narrower income ranges where the effective marginal rate spikes well above the rate you'd expect:",
        ],
        list: [
          "£100,000–£125,140: the Personal Allowance tapers away by £1 for every £2 of adjusted net income earned. In England, Wales, and Northern Ireland, that's on top of 40% Income Tax, producing an effective marginal rate of around 60%. Scottish taxpayers sit in the 45% advanced rate band across most of this range, so the same taper effect pushes their effective rate to around 67.5%, before National Insurance.",
          "£60,000–£80,000: if you or your partner claim Child Benefit and either of you has adjusted net income in this range, the High Income Child Benefit Charge claws back 1% of your Child Benefit for every £200 earned above £60,000, on top of your normal Income Tax, until it's fully withdrawn at £80,000.",
        ],
      },
      {
        heading: "A worked example: crossing into the higher rate band",
        paragraphs: [
          "Say your salary rises from £48,000 to £52,000, a £4,000 increase, and you're in England, Wales, or Northern Ireland. At £48,000, Income Tax is £7,086 (all taxed at the basic rate) and Class 1 National Insurance is £2,834.40. At £52,000, the first £37,700 of taxable income is still taxed at 20%, but the remaining £1,730 falls into the higher rate band at 40%, bringing Income Tax to £8,232; National Insurance rises to £3,050.60, since £1,730 of the increase falls above the Upper Earnings Limit and is charged at 2% instead of 8%.",
          "That's an extra £1,146 in Income Tax and £216.20 in National Insurance, £1,362.20 in total, on a £4,000 rise. You keep £2,637.80 of it, around 65.9%, and you're still better off overall, even though part of the rise was taxed at 40% and part of your National Insurance dropped to only 2%.",
        ],
      },
      {
        heading: "Is it ever worth turning down a pay rise?",
        paragraphs: [
          "Rarely, but if you're heading into one of the tax trap zones above, or close to a cliff edge like the £100,000 Tax-Free Childcare threshold, it's worth knowing your options. Many people use pension salary sacrifice to bring their adjusted net income back under £100,000 or £60,000, since pension contributions reduce the income these thresholds are measured against. That's a genuine, common strategy, though whether it's right for you depends on your own circumstances and is worth discussing with a qualified adviser rather than treating as one-size-fits-all advice.",
        ],
      },
      {
        paragraphs: [
          "Our Salary Calculator shows the full Income Tax and National Insurance picture for any salary you enter. Try it at both your old and new figures to see the real difference, band by band.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does going into the 40% tax bracket mean all my income is taxed at 40%?",
        answer:
          "No. Only the portion of your income above the higher rate threshold (£50,270 for 2026/27 in the rest of the UK) is taxed at 40%. Everything below that keeps being taxed at the lower rates.",
      },
      {
        question: "Why does my bonus look like it's taxed at nearly 50%?",
        answer:
          "It's taxed through normal PAYE in the pay period you receive it, so a large lump sum can trigger a higher rate of in-period withholding. This reconciles against your annual tax code over the year, so you're not permanently paying more than you should.",
      },
      {
        question: "What is the 60% tax trap?",
        answer:
          "Between £100,000 and £125,140 of adjusted net income, you lose £1 of Personal Allowance for every £2 you earn, on top of paying 40% Income Tax, creating an effective marginal rate of around 60% in England, Wales, and Northern Ireland. Scottish taxpayers in the same range are closer to 67.5%, since they pay the 45% advanced rate instead of 40%.",
      },
      {
        question: "Does the Child Benefit charge affect my pay rise?",
        answer:
          "If you or your partner claim Child Benefit and either of you has adjusted net income over £60,000, part of it is clawed back as an extra charge on top of your normal Income Tax, fully withdrawn by £80,000.",
      },
      {
        question: "Will I ever take home less after a pay rise?",
        answer:
          "Not from PAYE alone. UK marginal Income Tax and National Insurance rates never reach 100%, so a pay rise always increases your take-home pay through PAYE. Separate income-linked thresholds, like the Tax-Free Childcare cut-off at £100,000, can still leave a household worse off overall even though the pay rise itself always nets you more pay.",
      },
    ],
  },
  {
    slug: "capital-gains-tax-second-home",
    title: "Capital Gains Tax when selling a second home or buy-to-let",
    description:
      "Selling a second home, rental property, or inherited house in the UK? Here's how Capital Gains Tax is calculated, the 60-day reporting deadline, and how to avoid penalties.",
    date: "2026-05-18",
    relatedCalculatorSlugs: [
      "capital-gains-tax-calculator",
      "income-tax-calculator",
      "dividend-tax-calculator",
    ],
    relatedPostSlugs: ["how-uk-tax-bands-work-2026-27"],
    sections: [
      {
        paragraphs: [
          "Your main home is almost always exempt from Capital Gains Tax under Private Residence Relief. This guide is for everything else: second homes, buy-to-let property, and inherited houses that aren't your main residence.",
        ],
      },
      {
        heading: "How much Capital Gains Tax will you pay?",
        paragraphs: [
          "The first £3,000 of gains each tax year is tax-free (the Annual Exempt Amount). For most individuals selling an ordinary second home or investment, the rate then depends on your income: 18% on any gain that falls within your remaining basic rate band, and 24% on anything above it. These are the main rates that apply to shares and most other chargeable assets too, since property lost its own higher rate from 30 October 2024. They're not universal, though: trustees and personal representatives generally pay 24% regardless of income, and reliefs like Business Asset Disposal Relief can give an 18% rate on qualifying business gains. For the full mechanics of the 18%/24% split, see our Capital Gains Tax Calculator.",
        ],
      },
      {
        heading: "What counts as your gain",
        paragraphs: [
          "If you bought the property, your gain is normally the sale price minus what you paid for it, minus allowable costs: stamp duty and legal fees when you bought, estate agent and solicitor fees when you sold, and the cost of capital improvements that add lasting value, such as an extension or a loft conversion that creates extra living space. Routine maintenance, redecorating, mortgage interest, and like-for-like repairs, such as replacing an existing roof, don't count, even when modern materials are used.",
          "If you inherited the property rather than buying it, your starting point is different: your acquisition cost is normally the property's market value at the date of death (the probate value), not whatever the person you inherited it from originally paid. So if your grandfather bought a house for £50,000 decades ago and you inherited it when it was worth £300,000, your gain when you sell is measured from that £300,000 figure, not the original £50,000.",
        ],
      },
      {
        heading: "The 60-day reporting deadline",
        paragraphs: [
          "If you're a UK resident selling UK residential property and there's Capital Gains Tax to pay, you must report the sale and pay the tax within 60 days of completion, not exchange of contracts, using HMRC's UK Property Reporting Service. This is separate from, and earlier than, your normal Self Assessment deadline.",
          "Miss it and you'll face an immediate £100 penalty. If the return is still outstanding 3 months after the deadline, daily penalties of £10 a day kick in for up to 90 days (up to £900 in total), and further penalties apply if it's still outstanding after 6 and 12 months, on top of interest on the unpaid tax. Given how easy it is to miss a 60-day window during a house move, it's worth reporting as soon as the sale completes.",
        ],
      },
      {
        heading: "Do you need to report if there's no tax to pay?",
        paragraphs: [
          "If your total gains for the year are within your £3,000 Annual Exempt Amount, you generally don't need to report through the 60-day property service. If you're unsure whether your gain is covered, it's worth checking with HMRC or an adviser before the deadline passes rather than after.",
          "For gains on assets other than UK property, like shares, the 60-day service doesn't apply. You'd normally report those through Self Assessment, or through HMRC's real-time Capital Gains Tax service if you don't otherwise need to file a return.",
        ],
      },
      {
        heading: "What about your main home?",
        paragraphs: [
          "Private Residence Relief exempts your only or main home from Capital Gains Tax entirely, provided it's been your main home for the whole time you've owned it, you haven't let part of it out as a separate letting, you haven't used part of it exclusively for business, and the grounds are under 5,000 square metres. A single lodger living as part of your household doesn't normally count against this and shouldn't restrict the relief; having more than one lodger, or running part of the property as a separate letting, is more likely to. If any of those don't apply, for example you lived elsewhere for part of the ownership period, only part of the gain may be exempt, and it's worth checking HMRC's detailed guidance for your specific situation.",
        ],
      },
      {
        paragraphs: [
          "Our Capital Gains Tax Calculator works out how much you'd owe once you know your gain and other taxable income, so you can budget for the 60-day payment before your sale completes.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I pay Capital Gains Tax on my main home?",
        answer:
          "Usually not, thanks to Private Residence Relief, as long as it's been your only or main home for the whole period you've owned it.",
      },
      {
        question: "How soon do I need to report and pay CGT after selling a second property?",
        answer:
          "Within 60 days of completion, not exchange of contracts, using HMRC's UK Property Reporting Service.",
      },
      {
        question: "What happens if I miss the 60-day deadline?",
        answer:
          "An immediate £100 penalty, then daily penalties of £10 a day after 3 months (up to £900), with further penalties at 6 and 12 months if it's still outstanding, plus interest on the tax owed.",
      },
      {
        question: "Are CGT rates different for buy-to-let property versus shares?",
        answer:
          "Not for the main rates. Since 30 October 2024, the same 18%/24% rates apply to residential property, shares, and most other chargeable assets. Reliefs like Business Asset Disposal Relief, and special treatment for trustees and personal representatives, can still mean a different rate applies in specific cases.",
      },
      {
        question: "Can I deduct renovation costs from my gain?",
        answer:
          "Only capital improvements that add lasting value, like an extension or a loft conversion, not routine repairs, redecorating, or maintenance. Replacing an existing roof is usually treated as a repair rather than an improvement, even with modern materials.",
      },
      {
        question: "What if I inherited the property instead of buying it?",
        answer:
          "Your acquisition cost is normally the property's market value at the date of death (the probate value), not what the original owner paid for it decades earlier. Your gain is measured from that value, not the historic purchase price.",
      },
    ],
  },
  {
    slug: "marriage-allowance-explained",
    title: "Marriage Allowance explained: how to claim up to £252 a year",
    description:
      "Marriage Allowance lets couples transfer £1,260 of unused Personal Allowance and save up to £252 a year, backdated up to 4 years. Here's who qualifies and how to claim.",
    date: "2026-05-25",
    relatedCalculatorSlugs: [
      "income-tax-calculator",
      "salary-calculator",
      "national-insurance-calculator",
    ],
    relatedPostSlugs: ["uk-tax-codes-explained"],
    sections: [
      {
        paragraphs: [
          "Marriage Allowance lets a lower-earning spouse or civil partner transfer £1,260 of their unused Personal Allowance to their partner, saving the receiving partner up to £252 a year in Income Tax. It's one of the most commonly missed reliefs in the UK tax system, largely because so few couples realise it exists.",
        ],
      },
      {
        heading: "Who can claim it",
        paragraphs: ["You can claim Marriage Allowance if all of the following apply:"],
        list: [
          "You're married or in a registered civil partnership. Living together isn't enough.",
          "The lower earner's income is below the Personal Allowance, £12,570 for 2026/27.",
          "The higher earner is a basic rate taxpayer, with income between £12,571 and £50,270 (or up to £43,662 in Scotland).",
        ],
      },
      {
        paragraphs: [
          "If the higher earner pays tax at the higher or additional rate, the claim is rejected. It only works when the receiving partner is a basic rate taxpayer.",
        ],
      },
      {
        heading: "How much you could save",
        paragraphs: [
          "The lower earner transfers £1,260 of their Personal Allowance. The receiving partner then has £1,260 more of their income taxed at 0% instead of 20%, which works out as a saving of £252 a year (20% of £1,260).",
        ],
      },
      {
        heading: "Backdating your claim",
        paragraphs: [
          "You can backdate a claim by up to 4 previous tax years, currently as far back as 2022/23, as well as claiming for the current year. Since the allowance and saving have stayed the same across that period, backdating fully and claiming this year too could be worth up to £1,260 in total, £252 for each of the five tax years, if you were eligible throughout.",
        ],
      },
      {
        heading: "How tax codes reflect Marriage Allowance",
        paragraphs: [
          "Once your claim is processed, you'll see it reflected in your tax code: an M code means you've received a transfer, and an N code means you've given part of your allowance away. See our guide to UK tax codes for what the rest of the letters mean.",
        ],
      },
      {
        heading: "How to claim",
        paragraphs: [
          "The lower earner applies, free of charge, directly at gov.uk. It's a straightforward online form, and the saving is usually applied through an updated tax code or, if you complete Self Assessment, as an adjustment to your bill. Never pay a third-party company to apply on your behalf. It costs nothing to do yourself and you'd only be giving away part of the saving in fees.",
        ],
      },
      {
        paragraphs: [
          "Our Income Tax Calculator and Salary Calculator don't currently have a Marriage Allowance input, so they won't reflect the transfer directly, but the £252 saving described above applies on top of whatever they show for the receiving partner's normal tax bill.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do we have to be married to claim Marriage Allowance?",
        answer:
          "Yes, or in a registered civil partnership. Living together without being married or in a civil partnership doesn't qualify.",
      },
      {
        question: "What if my income changes and I stop qualifying?",
        answer:
          "You need to tell HMRC to cancel the transfer if you stop being eligible, for example if the lower earner's income rises above the Personal Allowance. HMRC can also cancel it automatically if it detects a relevant change.",
      },
      {
        question: "Can higher-rate or additional-rate taxpayers claim it?",
        answer:
          "No. The partner receiving the transfer must be a basic rate taxpayer. If they pay tax at 40% or 45%, the claim is rejected.",
      },
      {
        question: "How far back can I claim Marriage Allowance?",
        answer:
          "Up to 4 previous tax years, currently back to 2022/23, in addition to the current tax year.",
      },
      {
        question: "Does applying cost anything?",
        answer:
          "No, it's free to apply directly at gov.uk. Never pay a third party to do it for you.",
      },
    ],
  },
  {
    slug: "salary-after-tax-per-month",
    title: "£20k-£150k a year: how much is that a month after tax?",
    description:
      "See exactly what £25k, £30k, £40k, £50k, £60k, £70k, £100k and other common salaries work out to per month after Income Tax and National Insurance in 2026/27, plus how Scotland compares.",
    date: "2026-06-01",
    relatedCalculatorSlugs: [
      "salary-calculator",
      "take-home-pay-calculator",
      "income-tax-calculator",
    ],
    relatedPostSlugs: [
      "how-uk-tax-bands-work-2026-27",
      "pay-rise-bonus-tax-explained",
      "student-loan-repayments-explained",
    ],
    sections: [
      {
        paragraphs: [
          "If you earn £60,000 a year in England, Wales, or Northern Ireland, you take home about £3,780 a month after Income Tax and National Insurance in 2026/27, assuming the standard tax code, no pension contributions, and no student loan. That's the answer to the most common version of this question, but the same logic applies at any salary, so below is a full reference table covering £20,000 to £150,000, plus how Scotland compares.",
          "These figures use the standard 1257L tax code and the current 2026/27 rates. Pension contributions, student loan repayments, and other deductions aren't included, since they vary from person to person, but see the notes below the tables for how to adjust for them.",
        ],
      },
      {
        heading: "How much is your salary after tax, per month?",
        paragraphs: [
          "The table below shows Income Tax, National Insurance, and take-home pay for common salaries in England, Wales, and Northern Ireland, for a standard employee with no pension contributions, no student loan, and the standard 1257L tax code.",
        ],
        table: {
          headers: [
            "Salary (per year)",
            "Income Tax",
            "National Insurance",
            "Take-home (per year)",
            "Take-home (per month)",
          ],
          rows: [
            ["£20,000", "£1,486", "£594", "£17,920", "£1,493"],
            ["£22,000", "£1,886", "£754", "£19,360", "£1,613"],
            ["£25,000", "£2,486", "£994", "£21,520", "£1,793"],
            ["£28,000", "£3,086", "£1,234", "£23,680", "£1,973"],
            ["£30,000", "£3,486", "£1,394", "£25,120", "£2,093"],
            ["£32,000", "£3,886", "£1,554", "£26,560", "£2,213"],
            ["£35,000", "£4,486", "£1,794", "£28,720", "£2,393"],
            ["£38,000", "£5,086", "£2,034", "£30,880", "£2,573"],
            ["£40,000", "£5,486", "£2,194", "£32,320", "£2,693"],
            ["£42,000", "£5,886", "£2,354", "£33,760", "£2,813"],
            ["£45,000", "£6,486", "£2,594", "£35,920", "£2,993"],
            ["£48,000", "£7,086", "£2,834", "£38,080", "£3,173"],
            ["£50,000", "£7,486", "£2,994", "£39,520", "£3,293"],
            ["£55,000", "£9,432", "£3,111", "£42,457", "£3,538"],
            ["£60,000", "£11,432", "£3,211", "£45,357", "£3,780"],
            ["£65,000", "£13,432", "£3,311", "£48,257", "£4,021"],
            ["£70,000", "£15,432", "£3,411", "£51,157", "£4,263"],
            ["£75,000", "£17,432", "£3,511", "£54,057", "£4,505"],
            ["£80,000", "£19,432", "£3,611", "£56,957", "£4,746"],
            ["£90,000", "£23,432", "£3,811", "£62,757", "£5,230"],
            ["£100,000", "£27,432", "£4,011", "£68,557", "£5,713"],
          ],
        },
      },
      {
        heading: "Higher earners: £110,000 to £150,000",
        paragraphs: [
          "Above £100,000, your Personal Allowance starts tapering away, which is why take-home pay grows more slowly here than the salary jump alone would suggest. See our guide to why a pay rise can push you into the 60% tax trap for the mechanics.",
        ],
        table: {
          headers: [
            "Salary (per year)",
            "Income Tax",
            "National Insurance",
            "Take-home (per year)",
            "Take-home (per month)",
          ],
          rows: [
            ["£110,000", "£33,432", "£4,211", "£72,357", "£6,030"],
            ["£120,000", "£39,675", "£4,411", "£75,914", "£6,326"],
            ["£125,000", "£43,050", "£4,511", "£77,439", "£6,453"],
            ["£150,000", "£54,332", "£5,011", "£90,658", "£7,555"],
          ],
        },
      },
      {
        heading: "A worked example: £60,000 a year",
        paragraphs: [
          "Take the £60,000 example from the top of this page. After the £12,570 Personal Allowance, £37,700 is taxed at the basic rate (20%), coming to £7,540. The remaining £9,730 falls into the higher rate band and is taxed at 40%, coming to £3,892. Total Income Tax: £11,432.",
          "National Insurance is calculated separately: 8% on earnings between £12,570 and £50,270 (£3,016), then 2% on the remaining £9,730 above that (£194.60). Total National Insurance: £3,210.60.",
          "£60,000 minus £11,432 of Income Tax and £3,210.60 of National Insurance leaves £45,357.40 a year, or £3,779.78 a month, rounded to £3,780 in the table above.",
        ],
      },
      {
        heading: "How Scotland compares",
        paragraphs: [
          "Scotland has its own Income Tax bands, so take-home pay can differ from the rest of the UK, though not always in the direction people expect. Below roughly £43,662, Scottish taxpayers can actually take home slightly more than the rest of the UK, thanks to a lower starter rate on the first slice of income above the Personal Allowance. Above that, the gap runs the other way, since Scotland's intermediate and higher rates start earlier than the rest of the UK's.",
        ],
        table: {
          headers: [
            "Salary (per year)",
            "Take-home per month (Scotland)",
            "Take-home per month (rest of UK)",
          ],
          rows: [
            ["£25,000", "£1,797", "£1,793"],
            ["£30,000", "£2,096", "£2,093"],
            ["£35,000", "£2,392", "£2,393"],
            ["£40,000", "£2,688", "£2,693"],
            ["£45,000", "£2,960", "£2,993"],
            ["£50,000", "£3,169", "£3,293"],
            ["£60,000", "£3,634", "£3,780"],
            ["£70,000", "£4,101", "£4,263"],
            ["£80,000", "£4,555", "£4,746"],
          ],
        },
      },
      {
        heading: "What this table doesn't include",
        paragraphs: [
          "These figures are Income Tax and National Insurance only. If any of the following apply to you, your actual take-home pay will be different:",
        ],
        list: [
          "Pension contributions: a net pay pension reduces your Income Tax but not your National Insurance, so it lowers your taxable income without changing the NI figures shown here",
          "Student loan repayments: deducted separately, at 9% of income above your plan's threshold (6% for Postgraduate Loans); see our guide to student loan repayments for the current thresholds",
          "Salary sacrifice arrangements, such as for a company car or cycle-to-work scheme, which reduce both Income Tax and National Insurance",
          "Marriage Allowance, if you've transferred or received part of a Personal Allowance",
          "A non-standard tax code, for example if you have a second job, owe tax from a previous year, or receive a taxable benefit like private medical insurance",
        ],
      },
      {
        paragraphs: [
          "Our Salary Calculator and Take-Home Pay Calculator run this same calculation for any salary and pension percentage you enter, with a full band-by-band breakdown.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much is £60,000 a year after tax per month?",
        answer:
          "About £3,780 a month in England, Wales, or Northern Ireland, after Income Tax and National Insurance, assuming the standard tax code and no pension or student loan deductions. In Scotland it's around £3,634 a month, since more of the income falls into higher Scottish bands.",
      },
      {
        question: "How much is £50,000 a year after tax per month?",
        answer:
          "About £3,293 a month in England, Wales, or Northern Ireland, or around £3,169 a month in Scotland, on the standard tax code with no pension or student loan deductions.",
      },
      {
        question: "How much is £40,000 a year after tax per month?",
        answer: "About £2,693 a month in England, Wales, or Northern Ireland, or around £2,688 a month in Scotland.",
      },
      {
        question: "How much is £30,000 a year after tax per month?",
        answer:
          "About £2,093 a month in England, Wales, or Northern Ireland, or around £2,096 a month in Scotland, where it's marginally higher at this income level.",
      },
      {
        question: "Why might my actual take-home pay be different from this table?",
        answer:
          "Pension contributions, student loan repayments, salary sacrifice benefits, Marriage Allowance, and non-standard tax codes all change the result. See the \"What this table doesn't include\" section above, or use our Salary Calculator with your own pension percentage.",
      },
      {
        question: "Is take-home pay the same as net pay?",
        answer:
          "Yes, they mean the same thing: what's left of your salary after Income Tax, National Insurance, and any other deductions.",
      },
    ],
  },
  {
    slug: "student-loan-repayments-explained",
    title: "Student loan repayments explained: Plan 1, 2, 4, 5, and Postgraduate thresholds",
    description:
      "How UK student loan repayments actually work in 2026/27: thresholds and rates for every plan, how it's deducted from your pay, and what it means for your take-home pay.",
    date: "2026-06-15",
    relatedCalculatorSlugs: [
      "salary-calculator",
      "take-home-pay-calculator",
      "income-tax-calculator",
    ],
    relatedPostSlugs: ["salary-after-tax-per-month", "how-uk-tax-bands-work-2026-27"],
    sections: [
      {
        paragraphs: [
          "A UK student loan repayment isn't like paying off a personal loan or a mortgage. There's no fixed monthly instalment and no repayment at all if you're not earning enough. Instead, it's collected like a tax: a percentage of your income above a threshold, deducted automatically from your pay alongside Income Tax and National Insurance.",
          "Which threshold and rate apply depends entirely on which \"plan\" your loan is on, which in turn depends on where and when you studied. Here's how it works for 2026/27.",
        ],
      },
      {
        heading: "Which plan are you on?",
        paragraphs: ["Your plan type is fixed when you take out the loan and doesn't change later. Broadly:"],
        list: [
          "Plan 1: English or Welsh students who started an undergraduate course before September 2012, or Scottish and Northern Irish students on income-contingent loans",
          "Plan 2: English or Welsh students who started an undergraduate course between September 2012 and July 2023",
          "Plan 4: Scottish students funded by the Student Awards Agency for Scotland (SAAS)",
          "Plan 5: English or Welsh students who started an undergraduate course from August 2023 onwards",
          "Postgraduate Loan: Master's or Doctoral loans, on top of and separate from any undergraduate plan",
        ],
      },
      {
        paragraphs: [
          "If you're not sure which plan you're on, check your account at gov.uk/sign-in-to-manage-your-student-loan-balance, or look for the plan type on the starter checklist you completed when you started your current job.",
        ],
      },
      {
        heading: "2026/27 thresholds and rates",
        paragraphs: [
          "Once your income for the year goes above your plan's threshold, you repay a fixed percentage of everything above it, not your whole income:",
        ],
        table: {
          headers: ["Plan", "Threshold (2026/27)", "Repayment rate"],
          rows: [
            ["Plan 1", "£26,900", "9%"],
            ["Plan 2", "£29,385", "9%"],
            ["Plan 4", "£33,795", "9%"],
            ["Plan 5", "£25,000", "9%"],
            ["Postgraduate Loan", "£21,000", "6%"],
          ],
        },
      },
      {
        heading: "How the repayment is actually worked out",
        paragraphs: [
          "Only the income above your threshold counts. If you're on Plan 2 and earn £35,000, you don't repay 9% of £35,000; you repay 9% of the £5,615 that sits above the £29,385 threshold, which comes to £505.35 a year, or around £42 a month.",
          "Like Income Tax and National Insurance, this is normally worked out per pay period rather than as one annual figure. If your income varies, for example a bonus month, your repayment can vary month to month even though your plan's threshold and rate stay fixed.",
        ],
      },
      {
        heading: "Can you repay two student loans at once?",
        paragraphs: [
          "Yes. An undergraduate plan (1, 2, 4, or 5) and a Postgraduate Loan are repaid independently and at the same time if you have both, each measured against its own threshold. Because the Postgraduate Loan threshold (£21,000) is lower than every undergraduate threshold, it's common to be repaying both simultaneously once your income passes somewhere between £25,000 and £34,000, depending on your undergraduate plan.",
          "For example, someone on Plan 2 (threshold £29,385) with a Postgraduate Loan (threshold £21,000) earning £35,000 would repay 9% of the £5,615 above the Plan 2 threshold (£505.35), plus 6% of the £14,000 above the Postgraduate threshold (£840), a combined £1,345.35 a year across both loans.",
        ],
      },
      {
        heading: "How it shows up on your payslip",
        paragraphs: [
          "If you're an employee, your employer deducts student loan repayments automatically through PAYE, shown as a separate line, usually labelled \"Student Loan\", alongside your Income Tax and National Insurance. You don't need to do anything to trigger it, though you do need to have correctly told your employer which plan (or plans) you're on, usually via the starter checklist when you begin a job.",
          "If you're self-employed, repayments are calculated and paid through Self Assessment instead, alongside your Income Tax and Class 4 National Insurance bill, based on your profit for the year.",
        ],
      },
      {
        heading: "Interest on your student loan",
        paragraphs: [
          "Interest accrues on your loan balance whether or not you're currently earning above the threshold, and the rate depends on your plan and, for some plans, your income. For the period 1 September 2026 to 31 August 2027: Plan 1 and Plan 5 both charge interest at 4.1% (the Retail Price Index rate); Plan 2 and Postgraduate Loans are ordinarily charged at a rate between RPI and RPI+3% depending on income, but both are capped at 6% for this period following an announcement in April 2026. None of this affects how much is deducted from your pay each month, since repayments are based purely on your income above the threshold, not your outstanding balance.",
        ],
      },
      {
        heading: "Does this affect our take-home pay calculators?",
        paragraphs: [
          "Not currently. Our Salary Calculator and Take-Home Pay Calculator show Income Tax and National Insurance, but don't yet model student loan repayments. If you have a student loan, subtract your plan's repayment, worked out as shown above, from the net figure those calculators give you to get a more complete picture of what actually lands in your account.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the student loan repayment threshold for 2026/27?",
        answer:
          "It depends on your plan: £26,900 for Plan 1, £29,385 for Plan 2, £33,795 for Plan 4, £25,000 for Plan 5, and £21,000 for Postgraduate Loans.",
      },
      {
        question: "How much of my salary goes towards my student loan?",
        answer:
          "9% of your income above your plan's threshold (6% for a Postgraduate Loan), not 9% of your whole salary. Nothing is deducted on income below the threshold.",
      },
      {
        question: "Can I be on two student loan plans at the same time?",
        answer:
          "You can have one undergraduate plan (1, 2, 4, or 5) and a Postgraduate Loan running at the same time, and both are repaid independently based on their own thresholds.",
      },
      {
        question: "Is my student loan repayment shown separately from tax on my payslip?",
        answer:
          "Yes, it appears as its own line, usually labelled \"Student Loan\", alongside your Income Tax and National Insurance deductions.",
      },
      {
        question: "Do your calculators include student loan repayments?",
        answer:
          "Not yet. Our Salary and Take-Home Pay Calculators show Income Tax and National Insurance only, so subtract your plan's repayment separately for a complete figure.",
      },
    ],
  },
  {
    slug: "working-from-home-tax-relief-abolished",
    title: "Working from home tax relief has been scrapped: what changed in April 2026",
    description:
      "HMRC abolished the £6-a-week working from home tax relief for employees from 6 April 2026. Here's exactly what changed, what's still available, and how to claim for previous years.",
    date: "2026-08-17",
    relatedCalculatorSlugs: ["income-tax-calculator", "salary-calculator"],
    relatedPostSlugs: ["marriage-allowance-explained", "salary-after-tax-per-month"],
    sections: [
      {
        paragraphs: [
          "Until 5 April 2026, employees who had to work from home could claim Income Tax relief for the extra costs involved, either a simplified flat rate of £6 a week with no receipts needed, or the actual additional costs with evidence. From 6 April 2026, the start of the current 2026/27 tax year, HMRC abolished this claim for employees entirely, both the flat rate and the actual-costs route. If you've claimed it before and are wondering why the option's gone, or why your accountant or tax software won't let you claim it for this year, here's what actually changed.",
        ],
      },
      {
        heading: "What was scrapped, exactly",
        paragraphs: [
          "The change removes the ability for an employee to personally claim tax relief from HMRC for unreimbursed homeworking costs, whether that's the £6-a-week flat rate or a claim based on actual bills. This applied whether working from home was your own choice or a requirement of your job. It doesn't matter which method you used to claim before; neither is available for 2026/27 onwards.",
        ],
      },
      {
        heading: "Why HMRC scrapped it",
        paragraphs: [
          "HMRC said that when it reviewed a sample of claims, over half turned out to be ineligible, often because the person wasn't actually required to work from home or hadn't genuinely incurred extra costs. Removing the relief is expected to save the Treasury around £115 million over five years from April 2026.",
        ],
      },
      {
        heading: "What the relief was actually worth",
        paragraphs: [
          "It's worth being clear about the numbers, since the £6-a-week flat rate is often misunderstood as a £312-a-year refund. It wasn't: you got tax relief on £312 of income, meaning that amount was treated as tax-free rather than handed back in full. In practice that meant a saving of £62.40 a year for a basic rate taxpayer, £124.80 a year at the higher rate, and £140.40 a year at the additional rate, a modest amount that's now gone for anyone who doesn't get it reimbursed by their employer instead.",
        ],
      },
      {
        heading: "What's still available",
        paragraphs: [
          "This change only affects your ability to claim relief personally from HMRC. It doesn't touch your employer's ability to reimburse you directly. If your employer chooses to pay or reimburse homeworking costs, either the £6-a-week flat rate or actual costs with evidence, and there's an objective requirement for you to work from home, that payment remains completely free of Income Tax and National Insurance for both of you, exactly as before.",
          "In other words, nothing has changed if your employer already covers this. The door that's closed is the one where you claimed it yourself because your employer didn't.",
        ],
      },
      {
        heading: "Can you still claim for 2025/26 or earlier years?",
        paragraphs: [
          "Yes. 2025/26 was the last tax year the relief applied, so if you were eligible and haven't claimed for it yet, you still can. You can also backdate a claim for up to 4 earlier tax years if you were eligible and never claimed, currently as far back as 2022/23, the same standard time limit HMRC applies to other backdated claims like Marriage Allowance.",
          "To claim for a past year, use a P87 form if you don't normally complete Self Assessment, or include it on your return if you do. Depending on how it's processed, you'll either get a direct refund or an adjustment to your tax code.",
        ],
      },
      {
        heading: "What to do now if you work from home",
        paragraphs: [
          "If you're genuinely required to work from home and your employer doesn't currently reimburse your costs, the only realistic option now is to ask them to start. Structured correctly, it costs your employer nothing extra in tax or National Insurance, and it's tax-free income for you, unlike the HMRC claim, which is gone for good from 2026/27 onwards.",
        ],
      },
      {
        paragraphs: [
          "Working from home relief was never reflected as a separate input in our calculators; if you were claiming it, it showed up as a reduction to your tax bill outside what our Income Tax Calculator and Salary Calculator model. From 2026/27, that's simply no longer part of the picture unless your employer reimburses you directly.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I still claim working from home tax relief in 2026/27?",
        answer:
          "No. HMRC abolished the employee self-claim route, both the £6-a-week flat rate and actual-cost claims, from 6 April 2026.",
      },
      {
        question: "How much was working from home tax relief actually worth?",
        answer:
          "It gave tax relief on £312 a year, not a £312 refund, working out at £62.40 a year for a basic rate taxpayer, £124.80 at the higher rate, and £140.40 at the additional rate.",
      },
      {
        question: "Can I still claim for the 2025/26 tax year?",
        answer:
          "Yes, that was the last year the relief applied. If you haven't claimed yet, you can still do so via a P87 form or your Self Assessment return.",
      },
      {
        question: "Can I claim for tax years I missed before 2025/26?",
        answer:
          "Yes, up to 4 earlier tax years if you were eligible and never claimed, currently back to 2022/23.",
      },
      {
        question: "Does this affect homeworking costs my employer pays me directly?",
        answer:
          "No. Employer reimbursement for homeworking costs remains tax and National Insurance free where there's an objective requirement to work from home. Only the personal claim route from HMRC has been removed.",
      },
    ],
  },
  {
    slug: "salary-vs-dividends-director-tax-efficient",
    title: "Salary vs dividends: the most tax-efficient way to pay yourself as a director",
    description:
      "How limited company directors typically combine a small salary with dividends to minimise tax in 2026/27, including Corporation Tax, Employer National Insurance, and the Employment Allowance.",
    date: "2026-08-20",
    relatedCalculatorSlugs: ["dividend-tax-calculator", "salary-calculator", "income-tax-calculator"],
    relatedPostSlugs: ["dividend-tax-explained", "how-uk-tax-bands-work-2026-27"],
    sections: [
      {
        paragraphs: [
          "If you run your own limited company, you usually get to choose how you're paid: salary, dividends, or a mix of both. That choice matters, because salary and dividends are taxed under completely different rules, and getting the split right can be worth thousands of pounds a year compared to taking everything one way.",
          "This isn't personal advice, your own circumstances (other income, other directors, whether your company has staff) can change the right answer, so it's worth running your specific numbers past an accountant. But the underlying mechanics are the same for most single-director companies, and they're worth understanding before that conversation.",
        ],
      },
      {
        heading: "Why salary and dividends are taxed so differently",
        paragraphs: [
          "Salary is a business expense. It's deducted from your company's profit before Corporation Tax is worked out, but it's charged to Income Tax and National Insurance on the way out, both the employee's National Insurance and the company's own employer National Insurance.",
          "Dividends work the other way round. They're paid out of profit that's already had Corporation Tax deducted, so there's no further deduction for the company. For the director receiving them, dividends are never subject to National Insurance at all, employee or employer, just dividend tax above the dividend allowance.",
        ],
      },
      {
        heading: "Corporation Tax sets the starting point",
        paragraphs: [
          "Since however much salary you take reduces the profit Corporation Tax is charged on, it's worth knowing where your company sits:",
        ],
        list: [
          "Small profits rate: 19% on profit up to £50,000",
          "Main rate: 25% on profit above £250,000",
          "Marginal relief: a sliding scale between those two thresholds, working out at an effective marginal rate of 26.5% on profit within that band",
        ],
      },
      {
        paragraphs: [
          "These thresholds are divided by the number of associated companies you have, so if you own more than one company, the actual thresholds that apply to each are lower.",
        ],
      },
      {
        heading: "The two salary levels most directors consider",
        paragraphs: [
          "There isn't one universally correct salary. Most guidance for 2026/27 centres on two figures, and which one suits you depends on a single factor: whether your company can claim the Employment Allowance.",
        ],
        list: [
          "£6,708, the Lower Earnings Limit: below your £12,570 Personal Allowance, so no Income Tax, and below the £12,570 Primary Threshold, so no employee National Insurance either. It's also enough to count as a qualifying year towards your State Pension. The catch is that £6,708 sits above the £5,000 employer National Insurance secondary threshold, so if your company can't claim the Employment Allowance, this salary does trigger a small amount of employer National Insurance.",
          "£12,570, the full Personal Allowance: still no Income Tax and no employee National Insurance, since both thresholds match. If your company can claim the Employment Allowance, the employer National Insurance on the extra salary between £6,708 and £12,570 is absorbed by the allowance, so you can extract more as a Corporation-Tax-deductible salary at no extra National Insurance cost.",
        ],
      },
      {
        heading: "The Employment Allowance is the deciding factor",
        paragraphs: [
          "The Employment Allowance can reduce a company's employer National Insurance bill by up to £10,500 a year for 2026/27. The restriction that catches most contractors and small business owners: a company generally can't claim it if the director is the only person paid above the secondary threshold. If you employ at least one other member of staff earning above £5,000 a year, you likely qualify. If you're the sole director with no other staff, you likely don't, in which case a salary right at £5,000 (avoiding employer National Insurance entirely, but missing the State Pension qualifying year) or £6,708 (accepting a small employer National Insurance cost to secure that qualifying year) are the two figures worth comparing.",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "Say your company has £60,000 of profit available for the year, before any director's salary is deducted, and you're a sole director without other staff, so the Employment Allowance isn't available. Compare taking a £6,708 salary plus dividends against taking dividends only.",
          "With a £6,708 salary: employer National Insurance on the £1,708 above the secondary threshold comes to £256.20, so £6,964.20 is deducted from profit before Corporation Tax. That leaves £53,035.80 of profit, taxed at an effective 19.43% under marginal relief, a Corporation Tax bill of £10,304.49. The remaining £42,731.31 is paid out as dividends. Your remaining Personal Allowance (£5,862, since the salary used £6,708 of it) plus the £500 dividend allowance shelters £6,362 of that tax-free; the rest, £36,369.31, falls in the basic rate band and is taxed at 10.75%, £3,909.70. You take home £45,529.61 in total.",
          "With dividends only: the full £60,000 is taxed at Corporation Tax first, an effective 20.25% under marginal relief, £12,150, leaving £47,850 to pay out as dividends. Your full £12,570 Personal Allowance plus the £500 dividend allowance shelters £13,070 tax-free; the remaining £34,780 is taxed at 10.75%, £3,738.85. You take home £44,111.15 in total.",
          "The small salary comes out £1,418.46 ahead, even after paying employer National Insurance on it, because the Corporation Tax saved by deducting it from profit outweighs that cost, and you get a State Pension qualifying year included. This is a simplified single-company example; associated companies, other income, or a company that does qualify for the Employment Allowance would change the numbers.",
        ],
      },
      {
        paragraphs: [
          "One more route worth knowing about: employer pension contributions are also deducted from profit before Corporation Tax, and unlike salary, they're not subject to any National Insurance at all, employee or employer. For directors who don't need to draw out every pound of profit immediately, pension contributions are often the most tax-efficient use of surplus profit, worth discussing alongside your salary and dividend split.",
          "None of our calculators currently model the combined salary, dividend, and Corporation Tax picture for a limited company in one place. Our Dividend Tax Calculator, Salary Calculator, and Income Tax Calculator can each check one piece of the puzzle individually.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the most tax-efficient director's salary for 2026/27?",
        answer:
          "Most guidance points to either £6,708 (the Lower Earnings Limit, giving a State Pension qualifying year) or £12,570 (the full Personal Allowance). Which is better depends mainly on whether your company can claim the Employment Allowance; without it, a small amount of employer National Insurance applies to salary above £5,000.",
      },
      {
        question: "Do dividends count towards my Personal Allowance?",
        answer:
          "Yes. Dividends use up any remaining Personal Allowance after other income (like salary) before the dividend allowance and dividend tax rates apply.",
      },
      {
        question: "Can I claim the Employment Allowance as a sole director?",
        answer:
          "Generally not, if you're the only person paid above the secondary threshold. You typically need at least one other employee earning above £5,000 a year to qualify.",
      },
      {
        question: "Do I pay National Insurance on dividends?",
        answer:
          "No. Dividends aren't subject to National Insurance at all, for you as the recipient or for the company paying them. This is the main reason dividends are more tax-efficient than salary once you're above the National Insurance thresholds.",
      },
      {
        question: "Is it better to take a bigger salary or bigger dividends?",
        answer:
          "For most single-director companies without other staff, a small salary (enough to secure a State Pension qualifying year) topped up with dividends tends to beat an all-dividend or all-salary approach, because it balances the Corporation Tax saving from a deductible salary against the National Insurance cost. The exact crossover point depends on your company's profit and Employment Allowance eligibility.",
      },
    ],
  },
  {
    slug: "uk-tax-rates-bands-2026-27-cheat-sheet",
    title: "UK tax rates and bands for 2026/27: the full cheat sheet",
    description:
      "Every major UK tax rate, band, and allowance for 2026/27 in one place: Income Tax, National Insurance, dividends, Capital Gains Tax, student loans, and more.",
    date: "2026-08-22",
    relatedCalculatorSlugs: ["salary-calculator", "income-tax-calculator", "national-insurance-calculator"],
    relatedPostSlugs: ["how-uk-tax-bands-work-2026-27", "salary-after-tax-per-month"],
    sections: [
      {
        paragraphs: [
          "A quick-reference summary of the main UK tax rates, bands, and allowances for the 2026/27 tax year (6 April 2026 to 5 April 2027). For the reasoning behind how these fit together, see our guide to how UK tax bands work; this page is just the numbers.",
        ],
      },
      {
        heading: "Income Tax: England, Wales and Northern Ireland",
        table: {
          headers: ["Band", "Income range", "Rate"],
          rows: [
            ["Personal Allowance", "Up to £12,570", "0%"],
            ["Basic rate", "£12,571 to £50,270", "20%"],
            ["Higher rate", "£50,271 to £125,140", "40%"],
            ["Additional rate", "Over £125,140", "45%"],
          ],
        },
      },
      {
        heading: "Income Tax: Scotland",
        table: {
          headers: ["Band", "Income range", "Rate"],
          rows: [
            ["Personal Allowance", "Up to £12,570", "0%"],
            ["Starter rate", "£12,571 to £16,537", "19%"],
            ["Basic rate", "£16,538 to £29,526", "20%"],
            ["Intermediate rate", "£29,527 to £43,662", "21%"],
            ["Higher rate", "£43,663 to £75,000", "42%"],
            ["Advanced rate", "£75,001 to £125,140", "45%"],
            ["Top rate", "Over £125,140", "48%"],
          ],
        },
      },
      {
        paragraphs: [
          "The Scottish bands only apply to non-savings, non-dividend income (salary, pensions, self-employment profit). Savings interest and dividends use the UK-wide rates below even for Scottish taxpayers.",
        ],
      },
      {
        heading: "Personal Allowance taper",
        paragraphs: [
          "Above £100,000 of adjusted net income, the £12,570 Personal Allowance shrinks by £1 for every £2 earned, reaching zero at £125,140. This applies the same way across the whole UK.",
        ],
      },
      {
        heading: "National Insurance: Class 1 (employees)",
        table: {
          headers: ["Earnings", "Rate"],
          rows: [
            ["Up to £12,570", "0%"],
            ["£12,571 to £50,270", "8%"],
            ["Over £50,270", "2%"],
          ],
        },
      },
      {
        heading: "Dividend tax",
        table: {
          headers: ["Band", "Rate"],
          rows: [
            ["Dividend allowance", "0% on the first £500"],
            ["Basic rate", "10.75%"],
            ["Higher rate", "35.75%"],
            ["Additional rate", "39.35%"],
          ],
        },
      },
      {
        heading: "Capital Gains Tax",
        table: {
          headers: ["Band", "Rate"],
          rows: [
            ["Annual Exempt Amount", "0% on the first £3,000 of gains"],
            ["Basic rate band", "18%"],
            ["Above the basic rate band", "24%"],
          ],
        },
        paragraphs: [
          "These are the main rates for most individuals. Business Asset Disposal Relief can give an 18% rate on qualifying business gains, and trustees and personal representatives generally pay 24% regardless of income.",
        ],
      },
      {
        heading: "Self-employed National Insurance: Class 4",
        table: {
          headers: ["Profit", "Rate"],
          rows: [
            ["Up to £12,570", "0%"],
            ["£12,571 to £50,270", "6%"],
            ["Over £50,270", "2%"],
          ],
        },
        paragraphs: [
          "The £1,000 trading allowance can also cover small amounts of self-employment income tax-free instead of itemising expenses.",
        ],
      },
      {
        heading: "Student loan repayment thresholds",
        table: {
          headers: ["Plan", "Threshold", "Rate"],
          rows: [
            ["Plan 1", "£26,900", "9%"],
            ["Plan 2", "£29,385", "9%"],
            ["Plan 4", "£33,795", "9%"],
            ["Plan 5", "£25,000", "9%"],
            ["Postgraduate", "£21,000", "6%"],
          ],
        },
      },
      {
        heading: "Marriage Allowance",
        paragraphs: [
          "A lower earner can transfer £1,260 of their unused Personal Allowance to a basic rate taxpayer spouse or civil partner, worth up to £252 a year.",
        ],
      },
      {
        paragraphs: [
          "These figures are for the 2026/27 tax year. For a full breakdown of your own numbers, try our Salary Calculator, Income Tax Calculator, or any of our other calculators.",
        ],
      },
    ],
    faqs: [
      {
        question: "When does the 2026/27 tax year run?",
        answer: "From 6 April 2026 to 5 April 2027.",
      },
      {
        question: "Are these rates the same across the whole UK?",
        answer:
          "Most are. Income Tax bands differ in Scotland for non-savings, non-dividend income. National Insurance, dividend tax, Capital Gains Tax, and student loan thresholds are the same across England, Wales, Scotland, and Northern Ireland.",
      },
      {
        question: "Where do these figures come from?",
        answer:
          "HMRC's published rates and thresholds for the 2026/27 tax year. We update this page whenever HMRC publishes new figures.",
      },
      {
        question: "Why is my tax code not using these bands directly?",
        answer:
          "Your tax code can reflect adjustments specific to you, such as a Marriage Allowance transfer, a second job, or unpaid tax from a previous year. See our guide to UK tax codes for what the different codes mean.",
      },
    ],
  },
  {
    slug: "self-employed-allowable-expenses-uk",
    title: "Self-employed allowable expenses: what you can (and can't) claim",
    description:
      "A complete guide to allowable expenses for UK sole traders: office costs, mileage rates, use of home, what's excluded, and how much tax claiming them actually saves.",
    date: "2026-08-24",
    relatedCalculatorSlugs: ["self-employed-tax-calculator", "income-tax-calculator", "national-insurance-calculator"],
    relatedPostSlugs: ["self-employed-tax-explained"],
    sections: [
      {
        paragraphs: [
          "If you're a sole trader, allowable expenses reduce the profit you pay Income Tax and National Insurance on. They're not a direct refund: claiming £500 of allowable expenses doesn't put £500 back in your pocket, it reduces your taxable profit by £500, saving you tax at whatever your marginal rate happens to be.",
        ],
      },
      {
        heading: "How much do allowable expenses actually save you?",
        paragraphs: [
          "If your profit is below £50,270, your marginal rate is likely 26%: 20% Income Tax plus 6% Class 4 National Insurance (Scottish rates differ slightly for the Income Tax portion). At that rate, £500 of allowable expenses saves you £130 in tax, not £500. Above £50,270, the combined marginal rate rises to 42% (40% Income Tax plus 2% Class 4 National Insurance), so the same £500 saves £210. Either way, it's real money, just not pound-for-pound.",
        ],
      },
      {
        heading: "Common allowable expenses",
        list: [
          "Office costs: stationery, phone and internet bills (business proportion), software subscriptions",
          "Travel: fuel, parking, train and bus fares for business journeys, though not your regular commute to a single permanent workplace",
          "Stock and materials used to make what you sell",
          "Staff costs, including salaries and subcontractor payments",
          "Marketing and website costs",
          "Professional fees: accountancy, business insurance, bank charges and interest on business loans",
          "Training that updates skills you already use in your existing business, though not training for a new trade or qualification",
        ],
      },
      {
        heading: "Mileage: the simplified method",
        paragraphs: [
          "Instead of tracking actual vehicle running costs, most sole traders use HMRC's simplified mileage rates: 55p a mile for the first 10,000 business miles each tax year in a car or van, 25p a mile after that, 24p a mile for motorcycles, and 20p a mile for bicycles.",
          "Once you choose the mileage method for a particular vehicle, you need to stick with it for as long as you use that vehicle in the business. You can't claim mileage and separately claim fuel, servicing, or capital allowances on the same vehicle.",
        ],
      },
      {
        heading: "Working from home",
        paragraphs: [
          "If you work from home, you can use HMRC's simplified flat rate instead of working out actual costs: £10 a month for 25 to 50 business hours, £18 a month for 51 to 100 hours, and £26 a month for 101 or more hours. If your actual additional costs (a proportion of heating, electricity, and similar bills) are higher, you can claim those instead, working out the business proportion on a reasonable basis, such as by room count or hours used.",
        ],
      },
      {
        heading: "What you can't claim",
        list: [
          "Client entertaining, meals, or gifts",
          "Fines and penalties, including parking tickets",
          "Everyday clothing, even if you only wear it for work; only genuine uniforms or protective clothing count",
          "Personal expenses with no business purpose",
          "The upfront cost of equipment or vehicles as a simple expense; these are usually claimed through capital allowances instead, most equipment qualifying for the Annual Investment Allowance, currently up to £1,000,000 of qualifying spending a year",
        ],
      },
      {
        paragraphs: [
          "If your self-employment income is small, the £1,000 trading allowance can be simpler than itemising expenses at all. It's an alternative to claiming actual expenses, not something you add on top, so it's worth comparing which gives you the better result. See our guide to self-employed tax for how the trading allowance works.",
        ],
      },
      {
        heading: "Keeping records",
        paragraphs: [
          "Keep receipts and records for at least 5 years after the 31 January Self Assessment deadline for the relevant tax year. If you're within Making Tax Digital for Income Tax, you'll also need to keep digital records throughout the year rather than gathering everything at the end. See our guide to self-employed tax for who that currently applies to.",
        ],
      },
      {
        paragraphs: [
          "Our Self-Employed Tax Calculator works out Income Tax and National Insurance on your profit figure, so subtract your allowable expenses from turnover first to get the number to enter.",
        ],
      },
    ],
    faqs: [
      {
        question: "What's the difference between allowable expenses and the trading allowance?",
        answer:
          "Allowable expenses are your actual, itemised business costs deducted from turnover. The £1,000 trading allowance is a flat deduction you can use instead, without needing to itemise anything. You claim one or the other, not both.",
      },
      {
        question: "Can I claim for clothes I wear to work?",
        answer:
          "Only genuine uniforms, branded workwear, or protective clothing. Everyday clothing doesn't qualify, even if you only wear it for work.",
      },
      {
        question: "Do I need receipts for every expense?",
        answer:
          "You need to be able to show HMRC evidence of what you spent if asked, so keeping receipts (digital photos are fine) is the safest approach, especially for larger purchases.",
      },
      {
        question: "Can I claim mileage and fuel costs on the same vehicle?",
        answer:
          "No. Once you choose the simplified mileage rate for a vehicle, you use that instead of claiming fuel, servicing, insurance, or capital allowances separately for it.",
      },
      {
        question: "Does claiming more expenses always save me money?",
        answer:
          "Only if the expense is genuinely allowable and business-related. Claiming £500 of allowable expenses saves you tax at your marginal rate (commonly 26% or 42%), not the full £500, so it reduces your bill rather than refunding the cost.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
