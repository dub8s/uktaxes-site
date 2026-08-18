export type BlogPostSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
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
        heading: "Emergency tax codes",
        paragraphs: [
          "An emergency tax code is applied when HMRC doesn't yet have full details of your income, usually when you start a new job without a P45, begin getting a pension, or start receiving company benefits. It works on a non-cumulative basis, meaning each pay period is taxed in isolation rather than against your total income for the year, which can mean you overpay tax temporarily.",
          "You'll recognise an emergency code by its suffix: W1 for weekly pay, M1 for monthly pay, or X where your pay dates vary (for example, 1257L W1 or 1257L M1). It's usually temporary. Handing your new employer a P45 or completing a starter checklist promptly is the fastest way to avoid one building up, and any tax overpaid on an emergency code is refundable once HMRC has the full picture.",
        ],
      },
      {
        heading: "How to check your tax code is right",
        paragraphs: [
          "Compare your code against your circumstances. If you have a single job and nothing unusual going on, you should be on 1257L (or the Scottish or Welsh equivalent). If you have a second job, that one will typically show BR, D0, or D1. If you've claimed Marriage Allowance, expect an M or N.",
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
          "Once you know your correct tax code, our Income Tax Calculator and Salary Calculator show exactly how much you should be paying, so you can spot a mismatch before it becomes a bigger problem.",
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
          "BR taxes all income from that job at the basic rate (20%), D0 at the higher rate (40%), and D1 at the additional rate (45%). They're normally used on a second job or pension once your Personal Allowance is already accounted for elsewhere.",
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
      "Working two jobs in the UK doesn't increase your total tax bill, but it can look that way. Here's exactly how tax and National Insurance work across multiple jobs.",
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
          "Short answer: no, taking on a second job doesn't increase your total tax bill compared with earning the same combined amount from one job. It just gets collected differently, and that can make your second payslip look like it's being taxed unfairly hard.",
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
        heading: "National Insurance with two jobs",
        paragraphs: [
          "National Insurance is usually calculated separately for each job against its own Upper Earnings Limit (£50,270 for 2026/27). If you're a high earner with more than one job, this can mean you pay more Class 1 National Insurance overall than someone earning the identical total from a single employer. If that applies to you, you can apply to HMRC to defer National Insurance on one of your jobs using form CA72A, so it's charged at the reduced 2% rate instead of the full rate.",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "Say you earn £30,000 from your main job and £10,000 from a second job, £40,000 in total. Your main job uses the standard 1257L code: £17,430 is taxable after the Personal Allowance, taxed at 20%, coming to £3,486. Your second job is taxed entirely at the basic rate under a BR code: £10,000 at 20% comes to £2,000. Total Income Tax: £5,486.",
          "Now compare that to earning the same £40,000 from a single job: £27,430 taxable after the Personal Allowance, all within the basic rate band, taxed at 20%, also coming to £5,486. Identical. Splitting the income across two jobs made no difference to the total, as long as the tax codes are set correctly.",
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
          "No. Your total Income Tax is the same as it would be earning the combined amount from a single job, assuming your tax codes are set correctly across both.",
      },
      {
        question: "What tax code will my second job have?",
        answer:
          "Usually BR, D0, or D1, depending on which Income Tax band your combined income falls into once your main job has used its share of the Personal Allowance and lower bands.",
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
      "A pay rise or bonus will never leave you worse off, but a few hidden tax traps between £50,000 and £125,140 can eat a big chunk of the extra. Here's how it actually works.",
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
          "No. Moving into a higher tax band only affects the slice of income above the threshold, never your whole salary, and a pay rise or bonus will always leave you with more take-home pay than before, never less. For the full mechanics of how tax bands stack, see our guide to how UK tax bands work.",
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
          "£100,000–£125,140: the Personal Allowance tapers away by £1 for every £2 earned. On top of paying 40% Income Tax on that slice, you're also losing tax-free allowance that then gets taxed too, producing an effective marginal rate of around 60%.",
          "£60,000–£80,000: if you or your partner claim Child Benefit and either of you earns in this range, the High Income Child Benefit Charge claws back 1% of your Child Benefit for every £200 earned above £60,000, on top of your normal Income Tax, until it's fully withdrawn at £80,000.",
        ],
      },
      {
        heading: "A worked example: crossing into the higher rate band",
        paragraphs: [
          "Say your salary rises from £48,000 to £52,000, a £4,000 increase. At £48,000, Income Tax is £7,086 (all taxed at the basic rate). At £52,000, the first £37,700 of taxable income is still taxed at 20%, but the remaining £1,730 falls into the higher rate band at 40%, bringing total Income Tax to £8,232.",
          "That's an extra £1,146 in tax on a £4,000 raise, leaving you £2,854 better off after tax. You keep over 71% of the increase, and you're unambiguously better off, even though part of the rise was taxed at 40%.",
        ],
      },
      {
        heading: "Is it ever worth turning down a pay rise?",
        paragraphs: [
          "No, but if you're heading into one of the tax trap zones above, it's worth knowing your options. Many people use pension salary sacrifice to bring their taxable income back under £100,000 or £60,000, since pension contributions reduce the income these thresholds are measured against. That's a genuine, common strategy, though whether it's right for you depends on your own circumstances and is worth discussing with a qualified adviser rather than treating as one-size-fits-all advice.",
        ],
      },
      {
        paragraphs: [
          "Our Salary Calculator and Income Tax Calculator can show you exactly how much of your own pay rise or bonus you'd keep, band by band.",
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
          "Between £100,000 and £125,140, you lose £1 of Personal Allowance for every £2 you earn, on top of paying 40% Income Tax, which creates an effective marginal rate of around 60% on income in that band.",
      },
      {
        question: "Does the Child Benefit charge affect my pay rise?",
        answer:
          "If you or your partner claim Child Benefit and either of you earns over £60,000, part of it is clawed back as an extra charge on top of your normal Income Tax, fully withdrawn by £80,000.",
      },
      {
        question: "Will I ever take home less after a pay rise?",
        answer:
          "No. UK marginal tax rates never reach 100%, so a pay rise always increases your take-home pay, even within the higher-effective-rate bands described above.",
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
          "The first £3,000 of gains each tax year is tax-free (the Annual Exempt Amount). Above that, the rate depends on your income: 18% on any gain that falls within your remaining basic rate band, and 24% on anything above it. These are the same rates that apply to shares and other chargeable assets, since property no longer has its own higher rate. For the full mechanics of how the 18%/24% split works, see our Capital Gains Tax Calculator.",
        ],
      },
      {
        heading: "What counts as your gain",
        paragraphs: [
          "Your gain is the sale price minus the original purchase price, minus allowable costs: stamp duty and legal fees when you bought, estate agent and solicitor fees when you sold, and the cost of capital improvements that add lasting value, such as an extension. Routine maintenance, redecorating, and mortgage interest don't count.",
        ],
      },
      {
        heading: "The 60-day reporting deadline",
        paragraphs: [
          "If you're a UK resident selling UK residential property and there's Capital Gains Tax to pay, you must report the sale and pay the tax within 60 days of completion, not exchange of contracts, using HMRC's UK Property Reporting Service. This is separate from, and earlier than, your normal Self Assessment deadline.",
          "Miss it and you'll face an immediate £100 penalty, with further penalties if it's still outstanding after 6 and 12 months, plus interest on the unpaid tax. Given how easy it is to miss a 60-day window during a house move, it's worth reporting as soon as the sale completes.",
        ],
      },
      {
        heading: "Do you need to report if there's no tax to pay?",
        paragraphs: [
          "If your total gains for the year are within your £3,000 Annual Exempt Amount, you generally don't need to report through the 60-day property service. If you're unsure whether your gain is covered, it's worth checking with HMRC or an adviser before the deadline passes rather than after.",
        ],
      },
      {
        heading: "What about your main home?",
        paragraphs: [
          "Private Residence Relief exempts your only or main home from Capital Gains Tax entirely, provided it's been your main home for the whole time you've owned it, you haven't let out part of it, you haven't used part of it exclusively for business, and the grounds are under 5,000 square metres. If any of those don't apply, for example you've let out a room or lived elsewhere for part of the ownership period, only part of the gain may be exempt, and it's worth checking HMRC's detailed guidance for your specific situation.",
        ],
      },
      {
        paragraphs: [
          "Our Capital Gains Tax Calculator works out exactly how much you'd owe once you know your gain and other taxable income, so you can budget for the 60-day payment before your sale completes.",
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
          "An immediate £100 penalty, with further penalties the longer it's left unpaid (at 6 and 12 months), plus interest on the outstanding tax.",
      },
      {
        question: "Are CGT rates different for buy-to-let property versus shares?",
        answer:
          "Not any more. Since 30 October 2024, the same 18%/24% rates apply to residential property, shares, and other chargeable assets.",
      },
      {
        question: "Can I deduct renovation costs from my gain?",
        answer:
          "Only capital improvements that add lasting value, like an extension or a new roof, not routine repairs, redecorating, or maintenance.",
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
          "Once your Marriage Allowance is in place, our Income Tax Calculator and Salary Calculator can show you exactly how it changes your take-home pay.",
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
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
