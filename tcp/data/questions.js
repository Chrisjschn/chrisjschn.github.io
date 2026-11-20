/* TCP Blitz question bank -- CPA Exam Tax Compliance and Planning discipline, 16 sections, 240 questions.
   Original content authored against the AICPA TCP blueprint (2026/2027) under the law as amended by the
   One Big Beautiful Bill Act, and reviewed for technical accuracy and exam craft; 46 items began life in
   REG Blitz and moved here with their subjects (store/reg/bank/tcp-scope-removed.json). Choice order is
   shuffled at display time; 'answer' is the index of the correct choice.
   FAR_SECTIONS/FAR_QUESTIONS global names keep the engine identical to FAR Blitz. */

var FAR_SECTIONS = [
  {
    "id": "income",
    "name": "Nonroutine Individual Income",
    "short": "Individual Income",
    "emoji": "💵"
  },
  {
    "id": "amt",
    "name": "AMT & Year-End Timing",
    "short": "AMT & Timing",
    "emoji": "⏱️"
  },
  {
    "id": "passive",
    "name": "Passive Activity & At-Risk Limits",
    "short": "Passive & At-Risk",
    "emoji": "📉"
  },
  {
    "id": "gift",
    "name": "Gift Taxation",
    "short": "Gift Tax",
    "emoji": "🎁"
  },
  {
    "id": "pfp",
    "name": "Personal Financial Planning",
    "short": "Financial Planning",
    "emoji": "🧭"
  },
  {
    "id": "charity",
    "name": "Deductions & Charitable Planning",
    "short": "Deductions & Giving",
    "emoji": "✂️"
  },
  {
    "id": "ccorp",
    "name": "C Corporation Compliance",
    "short": "C Corps",
    "emoji": "🏭"
  },
  {
    "id": "scorp",
    "name": "S Corporation Compliance",
    "short": "S Corps",
    "emoji": "🧾"
  },
  {
    "id": "partner",
    "name": "Partnership Compliance",
    "short": "Partnerships",
    "emoji": "🔗"
  },
  {
    "id": "trust",
    "name": "Trusts & Estates Income Tax",
    "short": "Trusts & Estates",
    "emoji": "🕊️"
  },
  {
    "id": "exempt",
    "name": "Tax-Exempt Organizations",
    "short": "Exempt Orgs",
    "emoji": "🏛️"
  },
  {
    "id": "formliq",
    "name": "Formation & Liquidation",
    "short": "Form & Liquidate",
    "emoji": "🏗️"
  },
  {
    "id": "cplan",
    "name": "C Corporation Planning",
    "short": "C Corp Planning",
    "emoji": "♟️"
  },
  {
    "id": "flowplan",
    "name": "S Corp & Partnership Planning",
    "short": "Flow-Through Planning",
    "emoji": "🧩"
  },
  {
    "id": "dispo",
    "name": "Gains, Losses & Character",
    "short": "Gains & Losses",
    "emoji": "📐"
  },
  {
    "id": "nontax",
    "name": "Nontaxable Dispositions & Related Parties",
    "short": "Nontaxable & Related",
    "emoji": "🔁"
  }
];

var FAR_QUESTIONS = [
  {
    "id": "income-1",
    "section": "income",
    "topic": "ISO exercise",
    "difficulty": "medium",
    "q": "Mara exercises an incentive stock option on 1,000 shares at a $20 strike when the stock trades at $35, and holds the shares. What does she report for the exercise year?",
    "choices": [
      "No regular taxable income; the $15,000 spread is an AMT adjustment",
      "$15,000 of ordinary compensation income reported on her Form W-2",
      "$15,000 of short-term capital gain, since the shares were just acquired",
      "No income of any kind now; the whole gain is capital gain when the shares are sold"
    ],
    "answer": 0,
    "explain": "An ISO produces no regular taxable income at grant or at exercise (Sec. 421). The $15,000 spread ($35 less $20, times 1,000 shares) is an AMT adjustment that raises AMTI and gives the shares a higher AMT basis. Ordinary income arises only on a disqualifying disposition, and capital gain only when the shares are sold."
  },
  {
    "id": "income-2",
    "section": "income",
    "topic": "ISO shares sold early",
    "difficulty": "medium",
    "q": "Dev exercised an incentive stock option at $10 per share when the stock was worth $25. Eight months later he sells the shares for the exercise-date value. What is the regular-tax result per share?",
    "choices": [
      "$15 of ordinary compensation income",
      "$15 of short-term capital gain",
      "No regular income; the $15 spread is only an AMT adjustment",
      "No income; the gain is deferred until the shares have been held one year"
    ],
    "answer": 0,
    "explain": "Selling within one year of exercise (or within two years of grant) is a disqualifying disposition. The exercise-date spread of $15 becomes ordinary compensation income in the year of sale, limited to the actual gain; any gain above the exercise-date value would be capital gain. Had Dev met both holding periods, the whole $15 would have been long-term capital gain with no ordinary element."
  },
  {
    "id": "income-3",
    "section": "income",
    "topic": "Nonqualified option exercise",
    "difficulty": "medium",
    "q": "Lena exercises a nonqualified stock option, not taxed at grant, on 500 shares at a $20 strike when the stock is worth $32 and holds the shares. What does she report for the exercise year?",
    "choices": [
      "$6,000 of ordinary compensation income, and her basis becomes $16,000",
      "No regular income; the $6,000 spread is only an AMT adjustment",
      "$6,000 of short-term capital gain, with a $10,000 basis in the shares",
      "Nothing until sale, when the entire gain over $10,000 is capital gain"
    ],
    "answer": 0,
    "explain": "A nonqualified option with no readily ascertainable value at grant is taxed at exercise under Sec. 83: the spread of $12 x 500 = $6,000 is wage income subject to withholding and FICA. Her basis is the $32 fair market value, $16,000, so only later appreciation is capital gain. Only incentive stock options defer the spread and create an AMT adjustment."
  },
  {
    "id": "income-4",
    "section": "income",
    "topic": "RSU election question",
    "difficulty": "medium",
    "q": "Ravi is granted restricted stock units that vest in three years. He asks whether to file a Section 83(b) election now, while the value is low. What should you tell him?",
    "choices": [
      "No election is available; the units are taxed as wages when the shares are delivered",
      "Elect within 30 days of grant; the grant-date value is taxed now and later growth is capital gain",
      "No election is needed; the delivered shares are taxed as capital gain when sold",
      "Elect within 30 days of vesting to convert the vesting-date value to capital gain"
    ],
    "answer": 0,
    "explain": "An RSU is an unfunded promise to deliver shares, not property transferred under Sec. 83, so no 83(b) election can be made; the share value when the units are settled and the shares delivered is wage income and becomes his basis. The 30-days-from-grant election belongs to restricted stock, where it taxes the grant-date value now and makes later appreciation capital gain, at the risk of no deduction if the shares are later forfeited."
  },
  {
    "id": "income-5",
    "section": "income",
    "topic": "Purchase plan shares sold",
    "difficulty": "medium",
    "q": "Jia bought shares through her employer's Section 423 purchase plan at a 15% discount from the grant-date price and sold them three years after the purchase date at a gain. How is the gain taxed?",
    "choices": [
      "Ordinary income up to the grant-date discount; the rest is long-term capital gain",
      "Entirely long-term capital gain, since the plan is a qualified plan",
      "Entirely ordinary compensation income reported on Form W-2",
      "Ordinary income on the full purchase-date spread; the rest is long-term capital gain"
    ],
    "answer": 0,
    "explain": "A qualifying disposition of Sec. 423 shares (held more than two years from grant and one year from purchase) produces ordinary income equal to the lesser of the discount measured on the grant-date price or the actual gain; the balance is long-term capital gain. A disqualifying disposition instead taxes the full purchase-date spread as ordinary income. The plan's qualified status does not make the whole gain capital."
  },
  {
    "id": "income-6",
    "section": "income",
    "topic": "Interest-free employer loan",
    "difficulty": "medium",
    "q": "Apex Corp. makes a $90,000 interest-free demand loan to its non-shareholder CEO for a home purchase. The CEO has $500 of net investment income. Under Section 7872, what is the result?",
    "choices": [
      "Forgone interest at the AFR is compensation to the CEO and interest income to Apex",
      "No imputed interest; the loan is under $100,000 and his investment income is under $1,000",
      "Forgone interest is compensation to the CEO, but Apex has no interest income since none was paid",
      "Forgone interest is a taxable gift from Apex, deductible by neither party"
    ],
    "answer": 0,
    "explain": "Between an employer and an employee, Sec. 7872 treats a below-market demand loan as compensation-related: each year Apex is deemed to pay the forgone interest at the AFR as wages, and the CEO is deemed to pay it back as interest, which is income to Apex. The $100,000 exception that limits imputed interest to the borrower's net investment income applies only to gift loans between individuals; compensation loans get only the $10,000 de minimis exception."
  },
  {
    "id": "income-7",
    "section": "income",
    "topic": "Student's dividend income",
    "difficulty": "easy",
    "q": "Olivia, age 20, is a full-time student whose parents provide most of her support. She has $9,000 of dividends and no earned income. How is her unearned income above the threshold taxed?",
    "choices": [
      "At her parents' marginal rate",
      "At her own rates, because she is 18 or older",
      "Under the compressed trust and estate rate schedule",
      "At her parents' rate only if they elect to report it on their own return"
    ],
    "answer": 0,
    "explain": "The kiddie tax (Sec. 1(g)) taxes a child's net unearned income above the indexed threshold at the parents' marginal rate, reported on Form 8615 with her return; Olivia qualifies as a full-time student aged 19 to 23 whose earned income does not exceed half her support. The rule also covers children under 18 and 18-year-olds who meet the same earned-income test. The trust-rate schedule applied only for 2018 and 2019 before the SECURE Act restored the parents'-rate rule, with an election to apply it to those two years as well."
  },
  {
    "id": "income-8",
    "section": "income",
    "topic": "Foreign wages and foreign tax",
    "difficulty": "medium",
    "q": "Tom meets the 330-day physical presence test and excludes his foreign wages under Section 911. He also paid foreign income tax on those wages. How is that foreign tax treated on his US return?",
    "choices": [
      "Neither a credit nor a deduction is allowed for tax on the excluded wages",
      "Fully creditable against his US tax, subject to the overall limitation",
      "Deductible as an itemized deduction, but not creditable",
      "Creditable only against US tax on the excluded wages, with the excess carried forward"
    ],
    "answer": 0,
    "explain": "Sec. 911(d)(6) denies any credit or deduction for foreign taxes allocable to excluded income; taking both would be a double benefit. A credit remains available for foreign tax on wages above the exclusion and housing exclusion or on other foreign-source income. Qualification is by bona fide residence for a full tax year or 330 full days in any 12-month period, and the exclusion is prorated for a partial qualifying year."
  },
  {
    "id": "income-9",
    "section": "income",
    "topic": "Retiree benefits",
    "difficulty": "easy",
    "q": "A retired married couple's provisional income is far above the upper threshold. What is the maximum portion of their Social Security benefits included in gross income for 2026?",
    "choices": [
      "85%",
      "50%",
      "100%",
      "0%, under the new senior deduction"
    ],
    "answer": 0,
    "explain": "Benefits are taxed in tiers on provisional income (AGI plus tax-exempt interest plus half the benefits): none below the base amount, up to 50% between the two thresholds and up to 85% above the upper one. OBBBA did not exempt benefits; it added a $6,000 deduction for each taxpayer age 65 or older for 2025 through 2028, phased out above $75,000 of MAGI ($150,000 joint). Qualified Roth distributions do not enter provisional income, which makes them a planning tool for retirees near a threshold."
  },
  {
    "id": "income-10",
    "section": "income",
    "topic": "IRA conversion",
    "difficulty": "medium",
    "q": "Ben, age 45, converts a $60,000 traditional IRA funded entirely with deductible contributions to a Roth IRA in 2026. What is the tax result of the conversion?",
    "choices": [
      "$60,000 of ordinary income in 2026, with no 10% additional tax",
      "$60,000 of ordinary income in 2026 plus a $6,000 early distribution penalty",
      "No income now; the $60,000 is taxed when he later withdraws it from the Roth",
      "$60,000 of long-term capital gain, since the IRA was held over one year"
    ],
    "answer": 0,
    "explain": "A conversion is a taxable distribution of the pre-tax amount, so $60,000 is ordinary income in the conversion year, but the 10% early distribution tax does not apply to a converted amount (Sec. 408A(d)(3)). The catch is the five-year rule: if Ben withdraws converted dollars within five years and before age 59 1/2, the 10% tax is imposed on the amount recaptured. Converting in a low-income year, or in pieces across years, is the usual planning response."
  },
  {
    "id": "income-11",
    "section": "income",
    "topic": "HSA used for travel",
    "difficulty": "easy",
    "q": "Carla, age 50, is covered by a high-deductible health plan and withdraws $3,000 from her health savings account to pay for a vacation. What is the result?",
    "choices": [
      "$3,000 of ordinary income plus a $600 additional tax",
      "$3,000 of ordinary income plus a $300 additional tax",
      "$3,000 of ordinary income only, because she is over 50",
      "No tax; HSA distributions are excluded regardless of use"
    ],
    "answer": 0,
    "explain": "Non-medical HSA distributions are included in income and bear a 20% additional tax (Sec. 223(f)(4)), here $600; the 10% figure belongs to IRAs. After age 65 or disability, nonmedical withdrawals are taxable but generally avoid the additional 20% tax, so being over 50 changes nothing."
  },
  {
    "id": "income-12",
    "section": "income",
    "topic": "Dependent care account",
    "difficulty": "medium",
    "q": "Priya elected $7,500 to her employer's dependent care flexible spending account for 2026 but incurred only $6,000 of eligible expenses. The plan has no grace period or carryover. What is the result?",
    "choices": [
      "The unused balance is forfeited; the $6,000 reimbursed is excluded from her income",
      "The unused balance is refunded to her and taxed as wages; the $6,000 is excluded",
      "The full $7,500 becomes taxable wages because the election was not fully used",
      "The full $7,500 is excluded from income and the unused amount is hers to keep"
    ],
    "answer": 0,
    "explain": "Dependent care assistance up to the Sec. 129 limit (raised by OBBBA to $7,500 from 2026, not indexed) is excluded from wages when used for qualifying expenses. Amounts not spent by the plan deadline are forfeited (use-it-or-lose-it); a dependent care account may adopt a grace period but, unlike a health FSA, never a carryover. Excluded amounts also reduce the expenses eligible for the Sec. 21 dependent care credit, so the two should be compared before electing."
  },
  {
    "id": "income-13",
    "section": "income",
    "topic": "Deferred bonus election",
    "difficulty": "medium",
    "q": "An executive's nonqualified deferred compensation plan lets her elect in December 2026 to defer her 2026 bonus already earned, and lets her accelerate payments on request. What does Section 409A require?",
    "choices": [
      "All vested deferrals are included in income immediately, plus a 20% additional tax and interest",
      "The deferrals remain untaxed until paid; only the accelerated payments are taxed when received",
      "The employer loses its deduction, but the executive still defers tax until payment",
      "The plan must be funded through a rabbi trust and the executive is taxed only on trust earnings"
    ],
    "answer": 0,
    "explain": "Sec. 409A respects a deferral only when the election is made before the year the services are performed (or, for performance-based pay, at least six months before the period ends) and when payments occur only on permitted events: separation, a fixed date, death, disability, change in control or unforeseeable emergency. A plan that permits late elections or acceleration fails, and all vested deferred amounts are included in income with a 20% additional tax and premium interest. The employer's deduction is simply delayed until the employee is taxed."
  },
  {
    "id": "income-14",
    "section": "income",
    "topic": "Investment income surtax",
    "difficulty": "medium",
    "q": "A single taxpayer's modified adjusted gross income is $60,000 above the net investment income tax threshold, and net investment income is $90,000. What is the net investment income tax?",
    "choices": [
      "$2,280",
      "$3,420",
      "$1,140",
      "$5,700"
    ],
    "answer": 0,
    "explain": "The 3.8% tax of Sec. 1411 applies to the lesser of net investment income or MAGI over the threshold ($200,000 single, $250,000 joint, not indexed); the lesser here is the $60,000 excess, times 3.8% = $2,280. $3,420 taxes all of the investment income, $1,140 taxes only the difference between the two figures and $5,700 adds them together."
  },
  {
    "id": "income-15",
    "section": "income",
    "topic": "High-wage couple",
    "difficulty": "medium",
    "q": "A married couple filing jointly has combined wages of $300,000. Neither spouse's employer withheld Additional Medicare Tax because each earned under $200,000. What do they owe with their return?",
    "choices": [
      "$450",
      "$900",
      "$2,700",
      "$0, because no withholding was required"
    ],
    "answer": 0,
    "explain": "The 0.9% Additional Medicare Tax (Sec. 3101(b)(2)) applies to wages above $250,000 for joint filers: ($300,000 less $250,000) x 0.9% = $450, computed on Form 8959. Employers withhold only on an individual's wages over $200,000 whatever the filing status, so the couple pays the balance with their return and should raise withholding or make estimates. Self-employment income is combined with wages against the same threshold; $900 uses the $200,000 figure and $2,700 taxes all wages."
  },
  {
    "id": "income-16",
    "section": "income",
    "topic": "Loan to a shareholder",
    "difficulty": "medium",
    "q": "Delta Corp. makes a $50,000 interest-free demand loan to its sole shareholder, who uses the cash personally. Under Section 7872, how is the forgone interest treated each year?",
    "choices": [
      "A constructive dividend to the shareholder and interest income to Delta",
      "Compensation to the shareholder, deductible by Delta as wages",
      "Nothing is imputed; the loan is below the $100,000 exception",
      "A gift from Delta, reportable on Form 709 but never taxable income"
    ],
    "answer": 0,
    "explain": "A below-market loan from a corporation to a shareholder is a corporation-shareholder loan under Sec. 7872: Delta is treated as distributing the forgone interest to him as a dividend, taxable to him and nondeductible by Delta, and he is treated as paying it back as interest, which is income to Delta. The only exception is the $10,000 de minimis rule for loans without a tax-avoidance purpose; the $100,000 net-investment-income exception covers only gift loans between individuals."
  },
  {
    "id": "income-17",
    "section": "income",
    "topic": "Car loan interest",
    "difficulty": "easy",
    "q": "In 2026 a single taxpayer finances a new car for personal use and asks about deducting the loan interest under the 2025-2028 OBBBA provision. Which fact would disqualify the interest?",
    "choices": [
      "The vehicle's final assembly took place outside the United States",
      "The taxpayer takes the standard deduction instead of itemizing",
      "The loan came from a bank rather than the dealer's finance arm",
      "The vehicle is used only for commuting and personal errands"
    ],
    "answer": 0,
    "explain": "The qualified passenger vehicle loan interest deduction (Sec. 163(h), 2025 through 2028) requires a new vehicle whose final assembly occurred in the United States, bought for personal use with a loan originated after 31 December 2024 and secured by the vehicle. It is capped at $10,000 a year and phases out by $200 for each $1,000 of MAGI over $100,000 ($200,000 joint). Like the senior, tip and overtime deductions, it is available whether or not the taxpayer itemizes."
  },
  {
    "id": "income-18",
    "section": "income",
    "topic": "Child's new account",
    "difficulty": "medium",
    "q": "A US-citizen child with a Social Security number is born in 2026 and her parents open a Trump account under Section 530A. Which statement about the account is correct?",
    "choices": [
      "Her parents may elect a one-time $1,000 Treasury pilot deposit; no distributions are allowed before the year she turns 18",
      "The parents deduct their annual contributions above the line, as with a deductible traditional IRA",
      "All earnings are distributed tax-free for any purpose once she reaches 18, as with a qualified Roth distribution",
      "Only children born before 2025 receive the government's seed deposit; later births get none"
    ],
    "answer": 0,
    "explain": "A Trump account is a child's IRA under Sec. 530A: contributions (capped at an indexed $5,000 a year) are not deductible, and the Treasury pilot program deposits $1,000 for eligible children born in 2025 through 2028 when a parent elects it on Form 4547, a separate election from opening the account. Distributions are generally barred before the first day of the year the beneficiary turns 18 and are then taxed under traditional IRA rules, so earnings grow tax-deferred, not tax-free."
  },
  {
    "id": "amt-1",
    "section": "amt",
    "topic": "AMT adjustments",
    "difficulty": "medium",
    "q": "Which item is added back in computing alternative minimum taxable income for an individual?",
    "choices": [
      "Charitable contributions",
      "State and local taxes deducted as itemized deductions",
      "Home mortgage interest on acquisition indebtedness",
      "Qualified dividend income"
    ],
    "answer": 1,
    "explain": "State and local taxes are not deductible for AMT purposes and are added back. Charitable contributions and acquisition mortgage interest remain allowable, and qualified dividends keep their preferential rate."
  },
  {
    "id": "amt-2",
    "section": "amt",
    "topic": "AMT from timing differences",
    "difficulty": "medium",
    "q": "A taxpayer paid AMT this year caused entirely by a timing difference. What relief is available in later years?",
    "choices": [
      "A refund of the AMT paid in the year it was incurred",
      "A minimum tax credit carried forward against future regular tax",
      "An amended return recomputing the prior year without AMT",
      "No relief, because AMT once paid is permanently lost"
    ],
    "answer": 1,
    "explain": "AMT from deferral items generates a minimum tax credit carried forward indefinitely against regular tax in years when regular tax exceeds tentative minimum tax. AMT from exclusion items generates no such credit."
  },
  {
    "id": "amt-3",
    "section": "amt",
    "topic": "AMT liability",
    "difficulty": "easy",
    "q": "For 2026 a taxpayer's regular income tax is $48,000 and her tentative minimum tax is $55,000. What alternative minimum tax does she report in addition to her regular tax?",
    "choices": [
      "$7,000",
      "$55,000",
      "$0",
      "$48,000"
    ],
    "answer": 0,
    "explain": "AMT is the excess of tentative minimum tax over regular tax (Sec. 55(a)): $55,000 less $48,000 = $7,000, so in total she pays the greater of the two, $55,000. Tentative minimum tax is 26% of AMTI less the exemption up to the indexed breakpoint and 28% above it, with capital gains and qualified dividends keeping their preferential rates. Had regular tax exceeded tentative minimum tax, AMT would have been zero."
  },
  {
    "id": "amt-4",
    "section": "amt",
    "topic": "Exemption above threshold",
    "difficulty": "medium",
    "q": "A joint filer's 2026 alternative minimum taxable income exceeds the exemption phase-out threshold by $60,000. Assume the exemption before phase-out is $140,000. What exemption remains?",
    "choices": [
      "$110,000",
      "$125,000",
      "$80,000",
      "$140,000"
    ],
    "answer": 0,
    "explain": "From 2026 OBBBA doubled the exemption phase-out rate to 50% of AMTI over the threshold: $60,000 x 50% = $30,000, leaving $140,000 less $30,000 = $110,000. It also reset the thresholds to the 2018 levels ($500,000 single, $1,000,000 joint) for 2026, indexed in later years, so far more taxpayers lose exemption than under TCJA's higher thresholds. $125,000 uses the old 25% rate and $80,000 subtracts the whole excess."
  },
  {
    "id": "amt-5",
    "section": "amt",
    "topic": "ISO shares that fell",
    "difficulty": "medium",
    "q": "In January 2026 Nadia exercised incentive stock options with a large spread and still holds the shares, which have since fallen sharply. Which year-end action avoids AMT on the exercise spread?",
    "choices": [
      "Sell the shares before 31 December 2026, making a disqualifying disposition",
      "Hold the shares past the one-year mark so the minimum tax credit absorbs the spread",
      "File a Section 83(b) election on the shares before year-end",
      "Sell other investments at a loss before year-end to offset the exercise spread"
    ],
    "answer": 0,
    "explain": "If ISO shares are sold in the exercise year, no AMT adjustment applies: the sale is a disqualifying disposition and ordinary income is limited to the actual gain at sale, so a fallen stock produces little or no income. Holding past year-end locks in an AMT adjustment measured at the exercise-date spread even though the shares are now worth less, and the minimum tax credit only trickles back in later years. The other planning response is to exercise only as many options each year as the AMT exemption and rate gap can absorb."
  },
  {
    "id": "amt-6",
    "section": "amt",
    "topic": "Tax-exempt bond choice",
    "difficulty": "medium",
    "q": "A retiree exposed to AMT is comparing tax-exempt investments. Interest on which one is a tax preference item added back in computing alternative minimum taxable income?",
    "choices": [
      "A private activity bond financing an airport terminal leased to an airline",
      "A general obligation bond issued by her state to build public schools",
      "A qualified 501(c)(3) bond issued for a nonprofit hospital",
      "Series EE savings bonds redeemed to pay a dependent's college tuition"
    ],
    "answer": 0,
    "explain": "Interest on private activity bonds (other than those issued in 2009 and 2010) is excluded from regular taxable income but is a tax preference item under Sec. 57(a)(5). Qualified 501(c)(3) bonds are carved out of the preference, general obligation bond interest is exempt for both taxes, and Series EE interest excluded under Sec. 135 is not a preference. The planning response is to hold general obligation or 501(c)(3) issues in years the taxpayer expects AMT."
  },
  {
    "id": "amt-7",
    "section": "amt",
    "topic": "Non-itemizer in AMT",
    "difficulty": "easy",
    "q": "Marco claims the standard deduction for regular tax and finds he is subject to AMT for 2026. How is the standard deduction treated in computing alternative minimum taxable income?",
    "choices": [
      "It is not allowed; AMTI starts from taxable income with the standard deduction added back",
      "It is allowed in full, exactly as it was allowed for regular tax",
      "It is allowed, but limited to the amount of the AMT exemption",
      "It is replaced by his itemized deductions, whichever would have been larger"
    ],
    "answer": 0,
    "explain": "Neither the standard deduction nor state and local taxes are deductible for AMT (Sec. 56(b)(1)); the AMT exemption is the only built-in allowance, and the taxpayer cannot switch to itemizing for AMT alone. Charitable gifts, acquisition mortgage interest and medical expenses above the 7.5% floor remain allowed. With the higher SALT cap, itemizers with large state taxes face a bigger add-back than under the old $10,000 cap."
  },
  {
    "id": "amt-8",
    "section": "amt",
    "topic": "Charitable gifts timing",
    "difficulty": "medium",
    "q": "A couple's itemized deductions, mostly $12,000 of yearly charitable gifts, fall just short of the standard deduction every year. Which strategy produces the largest total deductions over two years?",
    "choices": [
      "Give two years' gifts in one year and take the standard deduction the next",
      "Itemize every year anyway, so the gifts are never completely wasted",
      "Spread the gifts evenly to stay well under the 60% of AGI ceiling",
      "Give appreciated stock instead, which is deductible above the line"
    ],
    "answer": 0,
    "explain": "Bunching concentrates deductions into alternate years so the couple itemizes in the bunch year and still takes the full standard deduction in the off year; a donor-advised fund lets them fund two years of giving at once while granting it out over time. From 2026, itemizers lose the first 0.5% of AGI of charitable gifts and non-itemizers may deduct up to $1,000 ($2,000 joint) of cash gifts, which strengthens the case for bunching. Appreciated stock is a fine gift but is still an itemized deduction."
  },
  {
    "id": "amt-9",
    "section": "amt",
    "topic": "Rising bracket next year",
    "difficulty": "medium",
    "q": "A cash-basis consultant expects her marginal rate to rise from 24% to 35% next year. A client offers to pay a $40,000 invoice in late December or early January. What should she do?",
    "choices": [
      "Collect in December, and defer deductible expenses into January where she can",
      "Collect in January, and prepay deductible expenses in December",
      "Collect in January, since deferral always beats paying tax sooner",
      "Collect in December, and prepay next year's expenses in December too"
    ],
    "answer": 0,
    "explain": "When rates will be higher next year, accelerate income into the lower-rate year and push deductions into the higher-rate year, where each dollar saves more tax. Collecting $40,000 at 24% rather than 35% saves $4,400, which far outweighs the time value of a short deferral. Prepaying deductions into the low-rate year wastes part of their value; the usual advice to defer income assumes rates stay level or fall."
  },
  {
    "id": "amt-10",
    "section": "amt",
    "topic": "Estimated tax floor",
    "difficulty": "medium",
    "q": "Rosa's 2025 adjusted gross income was $180,000 and her 2025 tax was $30,000. With no withholding, what total annual payment satisfies the prior-year safe harbor for 2026?",
    "choices": [
      "$33,000",
      "$30,000",
      "$27,000",
      "$36,000"
    ],
    "answer": 0,
    "explain": "Because prior-year AGI exceeded $150,000, the prior-year safe harbor of Sec. 6654 is 110% of the prior year's tax: $30,000 x 110% = $33,000, paid in four timely installments. The other safe harbor is 90% of the current year's tax, and the taxpayer may rely on whichever is less; $27,000 wrongly applies 90% to the prior year."
  },
  {
    "id": "amt-11",
    "section": "amt",
    "topic": "Seasonal income installments",
    "difficulty": "medium",
    "q": "A self-employed landscaper earns most of his income in the third and fourth quarters. Which approach keeps him from an underpayment penalty on the smaller first-quarter installment?",
    "choices": [
      "The annualized income installment method, computed on Form 2210 Schedule AI",
      "Paying the whole year's estimated tax with the fourth installment",
      "Requesting a waiver of the penalty for reasonable cause on Form 2210",
      "Electing to treat all four installments as paid on the first due date"
    ],
    "answer": 0,
    "explain": "The annualized income installment method (Sec. 6654(d)(2)), computed on Form 2210 Schedule AI, sizes each installment to the income actually earned through that period, so a seasonal earner pays little in April and more in September and January without penalty. Estimated payments count when paid, while withholding is spread equally across the due dates unless the taxpayer elects its actual dates, so paying everything in January leaves the first three periods underpaid. Seasonal income alone is not a ground for a penalty waiver."
  },
  {
    "id": "amt-12",
    "section": "amt",
    "topic": "December loss sale",
    "difficulty": "medium",
    "q": "An investor with $20,000 of 2026 realized gains sells a fund at an $8,000 loss on 15 December, planning to buy it back on 2 January. What is the result?",
    "choices": [
      "The loss is disallowed and added to the basis of the repurchased shares",
      "The $8,000 offsets the gains; buying back in a new tax year is permitted",
      "Only $3,000 of the loss is allowed; the rest carries forward to 2027",
      "The loss is allowed if he buys the replacement shares inside his IRA instead"
    ],
    "answer": 0,
    "explain": "Buying substantially identical securities within 30 days before or after the sale triggers Sec. 1091, which disallows the loss and adds it to the replacement shares' basis; the calendar-year boundary is irrelevant, and Rev. Rul. 2008-5 applies the rule to IRA repurchases, where the basis increase is lost for good. To harvest, he should wait until 15 January or buy a similar but not identical fund. Without a wash sale the $8,000 would offset the gains in full; the $3,000 limit applies only to net capital losses taken against ordinary income."
  },
  {
    "id": "passive-1",
    "section": "passive",
    "topic": "Shareholder loss review",
    "difficulty": "medium",
    "q": "An S corporation shareholder has $0 of stock and debt basis available before a $20,000 current-year loss, which the return deducts in full. What should the reviewer conclude?",
    "choices": [
      "The loss is correct if the shareholder guaranteed corporate debt",
      "The loss should be carried forward until basis is restored",
      "The loss is allowed because the at-risk and passive tests come first",
      "The loss is deductible but limited to the $3,000 capital loss cap"
    ],
    "answer": 1,
    "explain": "Basis is the first hurdle: Sec. 1366(d) limits an S shareholder's loss to stock basis plus basis in loans the shareholder made directly to the corporation, and the excess carries forward until basis is restored. With $0 basis and no new contributions or direct loans, none of the $20,000 is deductible this year. A guarantee gives no basis until the shareholder actually pays, and the at-risk and passive tests apply only to loss that has already cleared basis."
  },
  {
    "id": "passive-2",
    "section": "passive",
    "topic": "Second hurdle",
    "difficulty": "medium",
    "q": "A partner's $50,000 loss equals her partnership basis, which includes $15,000 of nonrecourse seller financing on equipment; the rest is cash and recourse debt. How much proceeds to the passive activity test?",
    "choices": [
      "$35,000",
      "$50,000",
      "$15,000",
      "$0"
    ],
    "answer": 0,
    "explain": "After basis comes Sec. 465: loss is allowed only up to the amount at risk, which includes cash, the basis of contributed property and recourse debt, but not nonrecourse debt unless it is qualified nonrecourse financing on real property. Her amount at risk is $50,000 less the $15,000 of equipment nonrecourse debt, so $35,000 moves on to the passive rules and $15,000 is suspended under the at-risk rules until her amount at risk rises. $50,000 ignores the at-risk limit and $15,000 is the suspended piece, not the amount that proceeds."
  },
  {
    "id": "passive-3",
    "section": "passive",
    "topic": "Limited partner loss review",
    "difficulty": "medium",
    "q": "A return deducts a limited partner's $40,000 passive loss, which cleared the basis and at-risk limits, against wages. She also has $12,000 of income from another passive activity and dividends. What is the correct deduction?",
    "choices": [
      "$12,000, with $28,000 suspended",
      "$40,000, as filed",
      "$40,000, but against the dividends rather than wages",
      "$0 until the partnership interest is sold"
    ],
    "answer": 0,
    "explain": "A passive loss can offset passive income, not wages or portfolio dividends, so under Sec. 469 $12,000 is deductible and $28,000 is suspended and carried forward. Moving the deduction from wages to dividends does not fix the return, and the loss is not frozen until a sale; it is usable each year to the extent of net passive income."
  },
  {
    "id": "passive-4",
    "section": "passive",
    "topic": "Fourth hurdle",
    "difficulty": "easy",
    "q": "A joint filer's $700,000 proprietorship loss cleared the at-risk and passive limits. The year's excess business loss threshold is $512,000; there is no other business income. What happens to the loss above the threshold?",
    "choices": [
      "It is carried to the next year as a net operating loss",
      "It is deducted this year against the spouse's wages",
      "It is suspended until the proprietorship has net income",
      "It is deducted this year against the couple's investment income"
    ],
    "answer": 0,
    "explain": "Sec. 461(l), made permanent by the OBBBA, is the last hurdle: a noncorporate taxpayer's net business loss above the indexed threshold is an excess business loss, disallowed this year and treated as a net operating loss carryforward to the following year. Here $512,000 is deductible and $188,000 becomes an NOL carryforward. Wages and investment income are not business income, so they cannot absorb the excess, and the excess is not tied to the proprietorship's future income the way a passive loss is."
  },
  {
    "id": "passive-5",
    "section": "passive",
    "topic": "Rental allowance phase-out",
    "difficulty": "medium",
    "q": "A single taxpayer who actively participates in managing a rental duplex has a rental loss larger than the $25,000 allowance. Modified AGI is $130,000. How much of the loss offsets wages this year?",
    "choices": [
      "$10,000",
      "$25,000",
      "$15,000",
      "$0"
    ],
    "answer": 0,
    "explain": "The $25,000 allowance of Sec. 469(i) is reduced by 50% of modified AGI over $100,000: 50% x $30,000 = $15,000, leaving $10,000 to offset wages, with the rest of the loss suspended. $25,000 ignores the phase-out, $15,000 is the reduction rather than what remains, and $0 would be right only at $150,000 or more of modified AGI."
  },
  {
    "id": "passive-6",
    "section": "passive",
    "topic": "Sale of entire interest",
    "difficulty": "medium",
    "q": "A taxpayer with no other passive activities sells his entire passive interest in a fully taxable sale to an unrelated buyer at a $20,000 gain. Suspended losses total $65,000. How much becomes nonpassive loss?",
    "choices": [
      "$45,000",
      "$65,000",
      "$20,000",
      "$0"
    ],
    "answer": 0,
    "explain": "A fully taxable disposition of the entire interest to an unrelated party releases all suspended losses under Sec. 469(g). They first offset the $20,000 gain on the sale and any other net passive income; the remaining $45,000 is treated as a nonpassive loss deductible against wages or any other income. $65,000 double counts the part absorbed by the gain, and $0 would describe a sale to a related party, where the losses stay suspended."
  },
  {
    "id": "passive-7",
    "section": "passive",
    "topic": "Installment disposition",
    "difficulty": "medium",
    "q": "A taxpayer sells her entire passive interest to an unrelated buyer on the installment method, reporting 25% of the gain this year. Suspended losses were $40,000. How much is released this year?",
    "choices": [
      "$10,000",
      "$40,000",
      "$0",
      "$30,000"
    ],
    "answer": 0,
    "explain": "On an installment sale of a passive activity, Sec. 469(g)(3) releases suspended losses in the same proportion that gain is recognized each year. Reporting 25% of the gain frees 25% of the $40,000, or $10,000; the remaining $30,000 is released as the later installments are collected. All $40,000 at once would be right only for a sale with full gain recognition in the year of sale, and nothing is lost by using the installment method."
  },
  {
    "id": "passive-8",
    "section": "passive",
    "topic": "Transfer to a daughter",
    "difficulty": "medium",
    "q": "A client gives his daughter his interest in a passive activity, which carries $50,000 of suspended losses. What happens to the losses?",
    "choices": [
      "They are added to the daughter's basis in the interest",
      "They are deducted on the client's return for the year of the gift",
      "They carry over to the daughter and offset her passive income",
      "They are forfeited and benefit no one"
    ],
    "answer": 0,
    "explain": "Under Sec. 469(j)(6) a gift does not release suspended passive losses: they are added to the donee's basis and no one ever deducts them. Had the client held the interest until death, Sec. 469(g)(2) would allow the losses on his final return only to the extent they exceed the heir's basis step-up, so a large unrealized gain wastes most of them either way."
  },
  {
    "id": "passive-9",
    "section": "passive",
    "topic": "Distribution to a partner",
    "difficulty": "medium",
    "q": "A partner's amount at risk is zero after $25,000 of earlier at-risk losses; nonrecourse debt still gives her ample outside basis. With no other changes, she receives a $10,000 cash distribution. What is the result?",
    "choices": [
      "$10,000 of income this year, allowed as a deduction of the activity next year",
      "No income; the distribution only reduces her basis in the partnership",
      "$25,000 of previously deducted losses are recaptured as income",
      "$10,000 of capital gain from a distribution in excess of basis"
    ],
    "answer": 0,
    "explain": "Sec. 465(e) recaptures prior at-risk losses when the amount at risk falls below zero: the distribution takes her from $0 to negative $10,000, so $10,000 is income this year, capped at the $25,000 of earlier at-risk losses not previously recaptured. The recaptured amount is then treated as a deduction allocable to the activity in the next year, subject to the at-risk limit again. Her basis still includes nonrecourse debt, so there is no Sec. 731 gain, and only the shortfall, not the whole $25,000, is recaptured."
  },
  {
    "id": "passive-10",
    "section": "passive",
    "topic": "Real estate partner",
    "difficulty": "easy",
    "q": "A limited partner in a real estate partnership contributed $20,000 cash. Her share of the partnership's nonrecourse mortgage from an unrelated bank, secured by the rental building, is $60,000. What is her amount at risk?",
    "choices": [
      "$80,000",
      "$20,000",
      "$60,000",
      "$0"
    ],
    "answer": 0,
    "explain": "Nonrecourse debt is normally not at risk, but Sec. 465(b)(6) counts qualified nonrecourse financing: debt secured by real property used in the activity, borrowed from an unrelated commercial lender or a government, with no one personally liable. Her $60,000 share qualifies, so her amount at risk is $20,000 + $60,000 = $80,000. $20,000 treats all nonrecourse debt as excluded, and limited partners are at risk for their contributions like anyone else."
  },
  {
    "id": "passive-11",
    "section": "passive",
    "topic": "Two hardware stores",
    "difficulty": "medium",
    "q": "A taxpayer works 450 hours in one hardware store he owns and 90 in a second nearby; the stores share suppliers, staff and products. If grouped as one activity, what changes?",
    "choices": [
      "The combined 540 hours satisfy the 500-hour test, making both nonpassive",
      "Nothing; material participation is always measured store by store",
      "Only the store with more revenue becomes nonpassive",
      "Both become passive because neither store alone reaches 500 hours"
    ],
    "answer": 0,
    "explain": "Reg. 1.469-4 lets a taxpayer group activities that form an appropriate economic unit, judged by similarity of the businesses, common control and ownership, location and interdependence; two similar stores under one owner qualify. Participation is then measured for the group, so 540 hours clears the 500-hour test and both stores are nonpassive. Measured separately, neither store reaches 500 hours, 90 hours is too few even for significant participation, and the shared staff keep him from the more-than-anyone-else test."
  },
  {
    "id": "passive-12",
    "section": "passive",
    "topic": "Beach condo",
    "difficulty": "medium",
    "q": "A taxpayer rents a beach condo to vacationers for an average stay of four nights and spends 600 hours a year running it. How is the activity classified?",
    "choices": [
      "A trade or business in which he materially participates, so nonpassive",
      "A rental activity, passive regardless of his hours",
      "A rental activity eligible for the $25,000 active participation allowance",
      "Passive, unless he qualifies as a real estate professional"
    ],
    "answer": 0,
    "explain": "Under Reg. 1.469-1T(e)(3), property with an average period of customer use of seven days or less is not a rental activity. The ordinary material participation tests then decide the question, and 600 hours exceeds the 500-hour test, so the condo is a nonpassive trade or business. Because it is not a rental activity, neither the $25,000 allowance nor real estate professional status is relevant."
  },
  {
    "id": "passive-13",
    "section": "passive",
    "topic": "Dentist's building",
    "difficulty": "medium",
    "q": "A dentist rents a building she owns to her wholly owned practice, where she works full time. The rental nets $30,000; her other passive activities lost $30,000. How is the rental income treated?",
    "choices": [
      "Nonpassive; the $30,000 of passive losses stay suspended",
      "Passive; it absorbs the $30,000 of passive losses",
      "Portfolio income, like interest or dividends",
      "Self-employment income from the dental practice"
    ],
    "answer": 0,
    "explain": "The self-rental rule in Reg. 1.469-2(f)(6) recharacterizes net rental income from property leased to a business in which the taxpayer materially participates as nonpassive. The $30,000 therefore cannot shelter her other passive losses, which remain suspended. The rule reaches only net income; a loss on the same building would still be passive, and rent is neither portfolio income nor self-employment income."
  },
  {
    "id": "passive-14",
    "section": "passive",
    "topic": "Worksheet review",
    "difficulty": "medium",
    "q": "A preparer's passive worksheet nets a $15,000 loss from a publicly traded partnership against $15,000 of income from a nontraded passive partnership. What should the reviewer conclude?",
    "choices": [
      "The PTP loss is suspended; it offsets only income from that same PTP",
      "The netting is correct; both are passive activities",
      "The PTP loss is portfolio and offsets only dividends and interest",
      "The PTP loss is deductible against any income because PTP interests are publicly traded"
    ],
    "answer": 0,
    "explain": "Sec. 469(k) applies the passive rules separately to each publicly traded partnership: a PTP loss offsets only income from the same PTP in that year or later years, and is fully released only when the entire PTP interest is sold. The $15,000 cannot be netted against another passive activity's income, so the worksheet overstates the deduction by $15,000. A PTP loss is not portfolio income, and public trading does not make it freely deductible."
  },
  {
    "id": "gift-1",
    "section": "gift",
    "topic": "Annual exclusion",
    "difficulty": "medium",
    "q": "A donor funds a trust that will not distribute anything to the beneficiary until age 30. Does the annual gift tax exclusion apply?",
    "choices": [
      "Yes, the exclusion applies to any completed gift",
      "No, the exclusion requires a gift of a present interest",
      "Yes, but only to half the transfer",
      "No, because trusts are never eligible for the exclusion"
    ],
    "answer": 1,
    "explain": "The annual exclusion covers only present interests, meaning an immediate right to use or enjoy the property. A future interest gets no exclusion, which is why Crummey withdrawal powers are written into such trusts."
  },
  {
    "id": "gift-2",
    "section": "gift",
    "topic": "Gift splitting",
    "difficulty": "easy",
    "q": "A married donor gives $40,000 to a child from separate property. What does electing gift splitting accomplish?",
    "choices": [
      "It doubles the annual exclusion available against the gift",
      "It exempts the gift from tax entirely",
      "It shifts the entire gift to the spouse",
      "It eliminates the need to file a gift tax return"
    ],
    "answer": 0,
    "explain": "Gift splitting treats the transfer as made half by each spouse, so two annual exclusions apply. The election requires consent from both spouses and a gift tax return, even where no tax is due."
  },
  {
    "id": "gift-3",
    "section": "gift",
    "topic": "Excluded transfers",
    "difficulty": "medium",
    "q": "A grandparent pays $45,000 directly to a university for a grandchild's tuition. What is the gift tax consequence?",
    "choices": [
      "A taxable gift reduced by the annual exclusion",
      "No gift, because tuition paid directly to the institution is excluded",
      "A taxable gift with no exclusion available",
      "A gift only to the extent it exceeds the annual exclusion twice over"
    ],
    "answer": 1,
    "explain": "Tuition paid directly to an educational institution and medical expenses paid directly to a provider are excluded without limit and do not consume the annual exclusion. Paying the student instead would make it a taxable gift."
  },
  {
    "id": "gift-4",
    "section": "gift",
    "topic": "Marital deduction",
    "difficulty": "easy",
    "q": "What is the gift and estate tax treatment of an outright transfer to a U.S. citizen spouse?",
    "choices": [
      "Deductible without limit",
      "Deductible up to the annual exclusion",
      "Deductible up to half the transfer",
      "Not deductible, but eligible for a credit"
    ],
    "answer": 0,
    "explain": "The unlimited marital deduction defers transfer tax until the surviving spouse's death for outright transfers to a citizen spouse. For a noncitizen spouse there is no marital deduction: lifetime gifts get only an enlarged annual exclusion (indexed; $194,000 in 2026), and a bequest qualifies only if it passes through a qualified domestic trust."
  },
  {
    "id": "gift-5",
    "section": "gift",
    "topic": "Portability",
    "difficulty": "medium",
    "q": "A decedent uses only part of the basic exclusion amount. How can the survivor use the remainder?",
    "choices": [
      "It is automatically added to the survivor's exclusion",
      "The executor must elect portability on a timely filed Form 706",
      "It may be claimed on the survivor's income tax return",
      "It is lost, because the exclusion is not transferable"
    ],
    "answer": 1,
    "explain": "The deceased spousal unused exclusion transfers only if the executor elects portability on a timely filed estate tax return, which must be filed even when no tax is owed. An estate too small to be required to file gets up to five years after death under Rev. Proc. 2022-32. Portability does not extend to the generation-skipping transfer tax exemption."
  },
  {
    "id": "gift-6",
    "section": "gift",
    "topic": "Gross estate inclusion",
    "difficulty": "medium",
    "q": "A decedent transferred a home to a child years ago but continued living there rent free until death. Is the home in the gross estate?",
    "choices": [
      "No, the transfer was completed before death",
      "Yes, because the decedent retained a life estate",
      "Only the portion equal to rent that was never paid",
      "Only if the transfer occurred within three years of death"
    ],
    "answer": 1,
    "explain": "Section 2036 pulls back transferred property in which the decedent retained possession, enjoyment, or the right to income for life. The child's basis then gets the date-of-death step-up along with the inclusion."
  },
  {
    "id": "gift-7",
    "section": "gift",
    "topic": "Life insurance in the estate",
    "difficulty": "medium",
    "q": "When are life insurance proceeds on the decedent's life included in the gross estate?",
    "choices": [
      "Always, regardless of who owned the policy at the date of death",
      "When payable to the estate or the decedent held an incident of ownership",
      "Only when the decedent personally paid all of the premiums",
      "Only if a member of the decedent's family is the beneficiary"
    ],
    "answer": 1,
    "explain": "Inclusion turns on proceeds payable to the estate or the decedent's incidents of ownership such as the right to change beneficiaries or borrow against the policy. Transferring a policy away within three years of death also pulls it back in."
  },
  {
    "id": "gift-8",
    "section": "gift",
    "topic": "Alternate valuation date",
    "difficulty": "medium",
    "q": "When may an executor elect the alternate valuation date?",
    "choices": [
      "Whenever the executor would prefer the later valuation date",
      "Only if it decreases both the gross estate and the estate tax",
      "Only if the estate holds publicly traded securities or bonds",
      "Whenever the estate tax return is filed on a valid extension"
    ],
    "answer": 1,
    "explain": "The alternate valuation date is six months after death, and the election is available only if it reduces both the value of the gross estate and the estate tax due. Property distributed or sold before that date is valued on the disposition date."
  },
  {
    "id": "gift-9",
    "section": "gift",
    "topic": "Estate tax return deadline",
    "difficulty": "easy",
    "q": "When is Form 706 due?",
    "choices": [
      "Three months after the date of death",
      "Nine months after the date of death",
      "April 15 following the year of death",
      "Twelve months after the date of death"
    ],
    "answer": 1,
    "explain": "The estate tax return is due nine months after death, with a six-month extension available for filing. An extension to file is not an extension to pay."
  },
  {
    "id": "gift-10",
    "section": "gift",
    "topic": "Gifts to several donees",
    "difficulty": "easy",
    "q": "In 2026 a donor gives $40,000 cash to each of three nieces and makes no other gifts. The annual exclusion is $19,000 per donee. What are the donor's taxable gifts for the year?",
    "choices": [
      "$63,000",
      "$120,000",
      "$101,000",
      "$21,000"
    ],
    "answer": 0,
    "explain": "The annual exclusion applies per donee, so each gift is reduced by $19,000: three times ($40,000 less $19,000) is $63,000 of taxable gifts. $120,000 ignores the exclusion, $101,000 takes only one exclusion against the total, and $21,000 counts a single niece. Taxable gifts are reported on Form 709 even though the unified credit will usually absorb the tax."
  },
  {
    "id": "gift-11",
    "section": "gift",
    "topic": "Gifts in trust",
    "difficulty": "medium",
    "q": "A parent funds an irrevocable trust for a child who may demand each contribution for 30 days after notice; amounts not demanded stay in trust. How is the contribution treated for the annual exclusion?",
    "choices": [
      "A present interest eligible for the exclusion",
      "A future interest, so no exclusion applies",
      "A present interest only if the child actually takes the money",
      "A gift that is complete only when the 30-day period lapses"
    ],
    "answer": 0,
    "explain": "A Crummey power gives the beneficiary an immediate, unrestricted right to withdraw the contribution, which makes it a gift of a present interest even if the right is never exercised (Crummey v. Commissioner). The exclusion therefore applies up to the amount subject to the power. Without such a power, a gift to a trust that accumulates until a future date is a future interest and gets no exclusion."
  },
  {
    "id": "gift-12",
    "section": "gift",
    "topic": "Gift tax filing",
    "difficulty": "medium",
    "q": "In 2026 a donor gives a friend $60,000 cash, the only gift that year; the donor's prior taxable gifts total $1 million. What are the filing and payment consequences?",
    "choices": [
      "The donor files Form 709 by April 15, 2027, but owes no tax",
      "The friend files Form 709 by April 15, 2027 and pays the tax",
      "No return is needed because the exclusion shelters the gift",
      "The donor files Form 709 and pays 40% tax on the excess over the annual exclusion"
    ],
    "answer": 0,
    "explain": "The gift exceeds the annual exclusion, so the donor, never the donee, must file Form 709 by April 15 of the following year (extended along with the income tax return). Gift tax is computed on cumulative taxable gifts, and the unified credit offsets it until lifetime taxable gifts exceed the basic exclusion amount ($15 million from 2026), so nothing is paid here. The gift does, however, use up exclusion that would otherwise shelter the estate at death."
  },
  {
    "id": "gift-13",
    "section": "gift",
    "topic": "Selecting property to give",
    "difficulty": "medium",
    "q": "A healthy client plans a gift to an adult child and can give either stock that has fallen below its cost or raw land expected to appreciate quickly. Which is the better gift?",
    "choices": [
      "The land, since future appreciation leaves the client's estate",
      "The stock, since the child can deduct the client's unrealized loss",
      "The stock, since the child's basis will be the client's higher cost",
      "Either, because gifts carry over the donor's basis in all cases"
    ],
    "answer": 0,
    "explain": "Giving property expected to appreciate shifts the future growth out of the donor's gross estate at today's value. Loss property should be sold by the donor instead: under Section 1015 the donee's basis for computing a loss is the lower fair market value at the gift, so the built-in loss disappears and nobody deducts it. Property that has already appreciated is often better held until death for the Section 1014 step-up."
  },
  {
    "id": "gift-14",
    "section": "gift",
    "topic": "Donee's basis",
    "difficulty": "medium",
    "q": "A donor paid gift tax on a gift of appreciated stock to a child. For a later sale at a gain, how is the child's basis determined?",
    "choices": [
      "Donor's basis plus the gift tax attributable to the net appreciation",
      "Fair market value at the date of the gift, as with inherited property",
      "Donor's basis plus all of the gift tax paid on the transfer",
      "Donor's basis with no adjustment for gift tax"
    ],
    "answer": 0,
    "explain": "Under Section 1015(d)(6) the donee takes the donor's basis increased by the portion of the gift tax paid that relates to net appreciation: gift tax paid times (fair market value less donor's basis) divided by the amount of the gift (its value after the annual exclusion), and never above fair market value at the date of the gift. Adding all of the gift tax overstates the adjustment, and fair market value basis applies to inherited property under Section 1014, not to gifts."
  },
  {
    "id": "pfp-1",
    "section": "pfp",
    "topic": "Choosing an IRA type",
    "difficulty": "easy",
    "q": "A 28-year-old in the 12% bracket expects to be in a much higher bracket in retirement. Which IRA is generally better for this year's contribution?",
    "choices": [
      "Roth, since a deduction now is worth less than tax-free withdrawals later",
      "Traditional, since the deduction reduces current tax",
      "Traditional, since Roth earnings are taxed at withdrawal",
      "Either, since both grow tax deferred and the result is the same"
    ],
    "answer": 0,
    "explain": "A traditional IRA deducts contributions at today's rate and taxes distributions at the future rate; a Roth does the reverse. When the expected future rate is higher, paying tax now at 12% and taking qualified distributions tax free wins. Roth earnings are not taxed on a qualified distribution, and the two accounts give the same result only when the rates are equal."
  },
  {
    "id": "pfp-2",
    "section": "pfp",
    "topic": "Roth IRA withdrawal",
    "difficulty": "medium",
    "q": "A 50-year-old withdraws $20,000 from a Roth IRA she opened eight years ago, which has $30,000 of regular contributions still in the account plus earnings. What is the tax result?",
    "choices": [
      "No tax and no penalty, because contributions come out first",
      "Earnings portion taxed and penalized, since she is under 59 1/2",
      "Entire withdrawal taxed as ordinary income plus a 10% penalty",
      "Tax free, but subject to the 10% penalty because she is under 59 1/2"
    ],
    "answer": 0,
    "explain": "Roth IRA distributions are deemed to come first from regular contributions, then conversions, then earnings (Section 408A(d)(4)), and contributions are always returned tax and penalty free. Because $20,000 is less than her $30,000 of contributions, nothing is taxable. Earnings would be taxed and penalized only once contributions are exhausted, unless the distribution is qualified: five tax years after the first contribution and age 59 1/2, death, disability or a first home."
  },
  {
    "id": "pfp-3",
    "section": "pfp",
    "topic": "Pretax salary deferral",
    "difficulty": "easy",
    "q": "An employee in the 24% bracket defers $10,000 of salary to a traditional 401(k), and the employer matches $5,000. By how much does the deferral reduce this year's federal income tax?",
    "choices": [
      "$2,400",
      "$3,600",
      "$1,200",
      "$10,000"
    ],
    "answer": 0,
    "explain": "A pretax deferral is excluded from wages, so tax falls by the deferral times the marginal rate: $10,000 times 24% is $2,400. The $5,000 match is also untaxed now but is employer money, not a reduction in the employee's taxable salary, so $3,600 overstates the saving. Both amounts grow tax deferred and are taxed as ordinary income when distributed; the match is free return the employee should always capture."
  },
  {
    "id": "pfp-4",
    "section": "pfp",
    "topic": "Self-employed retirement plans",
    "difficulty": "medium",
    "q": "A self-employed consultant with no employees compares a SEP IRA and a SIMPLE IRA. Which statement about their maximum annual contributions is correct?",
    "choices": [
      "The SEP's is higher, and it is funded entirely by employer contributions",
      "The SIMPLE's is higher, funded by elective deferrals plus a required match",
      "The SEP's is higher, funded by elective deferrals plus a required match",
      "They are equal; both share the traditional IRA contribution ceiling"
    ],
    "answer": 0,
    "explain": "A SEP takes only employer contributions, up to 25% of compensation (about 20% of net self-employment earnings) and capped at the Sec. 415 dollar limit, which is well above the SIMPLE's elective deferral limit plus a 3% match. Because the SEP contribution is a percentage of earnings, a low-earning year can still produce a smaller SEP contribution than a SIMPLE would allow; both plans exceed the ordinary IRA ceiling."
  },
  {
    "id": "pfp-5",
    "section": "pfp",
    "topic": "Required distributions",
    "difficulty": "medium",
    "q": "A retired client born in 1962 holds a traditional IRA, a traditional 401(k) and a Roth 401(k). Which statement about lifetime required minimum distributions is correct?",
    "choices": [
      "They begin at 75 from the IRA and traditional 401(k) only",
      "They begin at 73 from all three accounts",
      "They begin at 75 from all three accounts",
      "They begin at 73 from the two traditional accounts only"
    ],
    "answer": 0,
    "explain": "SECURE 2.0 sets the required beginning age at 73 for those born 1951 through 1959 and 75 for those born in 1960 or later, and since 2024 designated Roth accounts in employer plans, like Roth IRAs, have no lifetime RMDs. A worker who is not a 5% owner may defer RMDs from the current employer's plan until retirement, which is why the client's retirement matters; a missed RMD draws a 25% excise tax, cut to 10% if corrected promptly."
  },
  {
    "id": "pfp-6",
    "section": "pfp",
    "topic": "Early distribution penalty",
    "difficulty": "medium",
    "q": "A 48-year-old client needs cash. Which withdrawal avoids the 10% additional tax on early distributions?",
    "choices": [
      "$10,000 from an IRA for a first-time home purchase",
      "$10,000 from a 401(k) for a first-time home purchase",
      "A 401(k) distribution after separating from service this year",
      "A 401(k) distribution for a child's college tuition"
    ],
    "answer": 0,
    "explain": "Section 72(t) exempts up to $10,000 (lifetime) of IRA distributions for a first home and IRA distributions for higher education, but neither exception applies to employer plans. Separation from service escapes the penalty only at age 55 or later, and only for plan distributions. Exceptions available to both include substantially equal periodic payments, disability, medical costs above 7.5% of AGI and, since 2024, one $1,000 emergency distribution a year."
  },
  {
    "id": "pfp-7",
    "section": "pfp",
    "topic": "529 distribution",
    "difficulty": "medium",
    "q": "A grandparent pays a grandchild's $15,000 private high school tuition in 2026 from a 529 plan the grandparent owns. What is the tax result?",
    "choices": [
      "Tax free, since K-12 tuition up to $20,000 a year is qualified",
      "Earnings portion taxable plus 10%, since only college costs qualify",
      "Entire distribution taxable, since the owner is not the parent",
      "Tax free only if the grandchild claims no education credit"
    ],
    "answer": 0,
    "explain": "Sec. 529 distributions are tax free when used for qualified expenses, which from 2026 include up to $20,000 a year per beneficiary of K-12 tuition and related costs (OBBBA raised the cap from $10,000), and the owner's relationship to the beneficiary does not matter. Nonqualified earnings are ordinary income plus a 10% additional tax, and expenses used for an education credit cannot also support a tax-free distribution."
  },
  {
    "id": "pfp-8",
    "section": "pfp",
    "topic": "Municipal bond comparison",
    "difficulty": "easy",
    "q": "A client in the 32% bracket can buy a municipal bond yielding 3.4% or a taxable corporate bond. What corporate yield gives the same after-tax return as the muni?",
    "choices": [
      "5.0%",
      "4.5%",
      "2.3%",
      "3.4%"
    ],
    "answer": 0,
    "explain": "Taxable-equivalent yield is the tax-exempt yield divided by (1 less the marginal rate): 3.4% / 0.68 = 5.0%. Multiplying by 1.32 gives 4.5% and by 0.68 gives 2.3%, both wrong directions. Interest on qualifying municipal bonds is excluded under Section 103, so the corporate bond wins only if it yields more than 5.0%; state tax and the Medicare surtax can shift the break-even."
  },
  {
    "id": "pfp-9",
    "section": "pfp",
    "topic": "After-tax investment return",
    "difficulty": "medium",
    "q": "Two investments should earn the same 8% before tax: one pays interest yearly, the other grows and is sold after three years. For a top-bracket client, which gives the higher after-tax return?",
    "choices": [
      "The growth investment, taxed at long-term capital gain rates and only when sold",
      "The interest investment, since annual taxation avoids a large gain at sale",
      "The interest investment, since interest is taxed at preferential rates",
      "Both the same, since all investment income is taxed at the same rate"
    ],
    "answer": 0,
    "explain": "Interest is ordinary income taxed every year at up to 37%, while gain on an asset held more than a year is taxed at a 20% top rate (plus any 3.8% net investment income tax) and only when realized. Deferral keeps the untaxed growth compounding, so the same pretax return leaves more after tax. Spreading the tax over three years does not reduce it."
  },
  {
    "id": "pfp-10",
    "section": "pfp",
    "topic": "Estate planning with insurance",
    "difficulty": "medium",
    "q": "A wealthy client wants a new $5 million policy on her life kept out of her gross estate while the proceeds remain income tax free. What structure accomplishes this?",
    "choices": [
      "An irrevocable life insurance trust applies for and owns the policy",
      "The client owns the policy and names the trust as beneficiary",
      "The client buys the policy, then gives it to the trust after two years",
      "The client's revocable trust owns the policy and pays the premiums"
    ],
    "answer": 0,
    "explain": "Proceeds are included under Sec. 2042 if payable to the estate or the insured holds any incident of ownership, and a revocable trust's holdings are the grantor's. If the trustee applies for and owns the policy from the start, the insured never holds an incident, and premium gifts can qualify for the annual exclusion through Crummey powers. Giving away an existing policy can cause estate inclusion if the insured dies within three years (Sec. 2035), and the proceeds stay income tax free under Sec. 101(a) unless the transfer-for-value rule applies."
  },
  {
    "id": "pfp-11",
    "section": "pfp",
    "topic": "Disability benefits",
    "difficulty": "easy",
    "q": "An employee pays the premiums on a group disability policy with after-tax dollars; the employer pays nothing. How are the benefits taxed when she becomes disabled?",
    "choices": [
      "Excluded from income entirely",
      "Taxable as wages, since the policy is through the employer",
      "Taxable to the extent they exceed the premiums she paid",
      "Excluded only if she is permanently and totally disabled"
    ],
    "answer": 0,
    "explain": "Under Section 104(a)(3) disability benefits are excluded when the employee paid the premiums with after-tax dollars; the group arrangement does not change that. Benefits are taxable under Section 105 only to the extent the employer paid the premiums or the employee paid them pretax. There is no premium-recovery limit and no requirement that the disability be permanent."
  },
  {
    "id": "pfp-12",
    "section": "pfp",
    "topic": "Property passing at death",
    "difficulty": "medium",
    "q": "A client dies with a will leaving everything to her daughter. Which of her assets passes under the will through probate?",
    "choices": [
      "A rental house held as tenants in common with her brother",
      "A bank account with a payable-on-death designation naming her son",
      "A home held with her husband as joint tenants with right of survivorship",
      "A brokerage account titled in her revocable living trust"
    ],
    "answer": 0,
    "explain": "A tenant in common's share has no survivorship feature, so it passes under the will. Joint tenancy with right of survivorship passes to the survivor by operation of law, and payable-on-death, transfer-on-death and beneficiary designations override the will. Assets in a revocable living trust avoid probate too, though they remain in the gross estate, so the trust saves no estate tax."
  },
  {
    "id": "pfp-13",
    "section": "pfp",
    "topic": "Annuity payments",
    "difficulty": "medium",
    "q": "A retiree's investment in a nonqualified annuity is $60,000 and the expected return under the contract is $240,000. What fraction of each payment is excluded from gross income?",
    "choices": [
      "25%",
      "75%",
      "100% until the $60,000 investment is recovered",
      "0%; payments from a nonqualified annuity are fully taxable"
    ],
    "answer": 0,
    "explain": "Under Sec. 72(b) the exclusion ratio is the investment in the contract divided by the expected return: $60,000 / $240,000 = 25%, so a quarter of each payment is a tax-free return of basis and 75% is ordinary income. Once the full $60,000 has been recovered, later payments are fully taxable; if the annuitant dies first, the unrecovered investment is deductible on the final return."
  },
  {
    "id": "pfp-14",
    "section": "pfp",
    "topic": "HSA in retirement",
    "difficulty": "medium",
    "q": "A 67-year-old retiree on Medicare has a large health savings account and withdraws funds to pay for a cruise. What is the tax result?",
    "choices": [
      "Taxable as ordinary income, with no additional tax",
      "Taxable as ordinary income plus the 20% additional tax",
      "Tax free, because distributions after 65 are never taxed",
      "Tax free, but the balance must come out under RMD rules from 73"
    ],
    "answer": 0,
    "explain": "HSA distributions are tax free only for qualified medical expenses; other distributions are ordinary income, and the 20% additional tax under Section 223(f)(4) stops at age 65. That makes an HSA a retirement account with no required minimum distributions and a tax-free medical use. Once enrolled in Medicare she can no longer contribute, but the balance keeps growing tax free."
  },
  {
    "id": "charity-1",
    "section": "charity",
    "topic": "Appreciated stock gift",
    "difficulty": "medium",
    "q": "A taxpayer with AGI of $200,000 gives long-term appreciated stock worth $90,000 to a public charity. Ignoring the 0.5% floor, how is the gift deducted?",
    "choices": [
      "$60,000 this year; $30,000 carries forward for up to five years",
      "$90,000 this year; nothing carries forward",
      "$60,000 this year; $30,000 carries forward indefinitely",
      "$60,000 this year; the $30,000 excess is forfeited"
    ],
    "answer": 0,
    "explain": "Long-term capital gain property given to a public charity is deductible at fair market value but limited to 30% of AGI under Sec. 170(b)(1)(C): 30% x $200,000 = $60,000 this year, and the $30,000 excess carries forward for five years, still subject to the 30% limit. The 60% limit applies only to cash. The donor could instead elect to deduct basis and use the 50% limit, which pays off only when basis is close to value."
  },
  {
    "id": "charity-2",
    "section": "charity",
    "topic": "Stock held eight months",
    "difficulty": "easy",
    "q": "A donor gives stock held for eight months, worth $20,000 with a basis of $12,000, to a public charity. What is the charitable deduction before any AGI limit?",
    "choices": [
      "$12,000",
      "$20,000",
      "$8,000",
      "$6,000"
    ],
    "answer": 0,
    "explain": "Stock held one year or less is ordinary income property for Sec. 170(e)(1)(A): the deduction is fair market value reduced by the gain that would not be long-term capital gain, which leaves basis, $12,000. The same basis rule covers inventory and works the donor created. $20,000 is the full value available only for long-term property, $8,000 is the disallowed appreciation and $6,000 misapplies the 30% limit to the gift itself."
  },
  {
    "id": "charity-3",
    "section": "charity",
    "topic": "Painting to a hospital",
    "difficulty": "medium",
    "q": "A collector donates a painting worth $40,000 with a basis of $15,000 to a hospital, which sells it at its fundraising auction the next month. What is the deduction before any AGI limit?",
    "choices": [
      "$15,000",
      "$40,000",
      "$25,000",
      "$0"
    ],
    "answer": 0,
    "explain": "Tangible personal property put to a use unrelated to the charity's exempt purpose is deductible only at basis under Sec. 170(e)(1)(B)(i); a hospital selling a painting is an unrelated use, so the deduction is $15,000. If held longer than one year and given to a museum that displays it, the same painting would be deductible at $40,000 under the 30% limit. $25,000 is the disallowed appreciation, and the sale does not eliminate the deduction; the charity simply files Form 8282."
  },
  {
    "id": "charity-4",
    "section": "charity",
    "topic": "Used office furniture",
    "difficulty": "medium",
    "q": "A donor claims a $6,500 deduction for used office furniture donated to a school. Besides a written acknowledgment, what substantiation does the deduction require?",
    "choices": [
      "A qualified appraisal and Form 8283, Section B",
      "Form 8283 only; an appraisal is required above $10,000",
      "Form 8283 only; appraisals apply to art, real estate and vehicles",
      "A receipt alone; Form 8283 starts at $10,000 of noncash gifts"
    ],
    "answer": 0,
    "explain": "A deduction claimed for noncash property over $5,000 requires a qualified appraisal and Form 8283, Section B, under Sec. 170(f)(11); the threshold follows the deduction claimed for the item or group of similar items. Noncash gifts over $500 need Form 8283 in any case, and publicly traded securities are exempt from the appraisal requirement."
  },
  {
    "id": "charity-5",
    "section": "charity",
    "topic": "Charity dinner",
    "difficulty": "medium",
    "q": "A donor pays $300 to attend a charity dinner and receives a meal worth $100. What must the charity disclose to the donor?",
    "choices": [
      "A good-faith estimate of the $100 meal and that only the excess is deductible",
      "That the full $300 is deductible because the meal was incidental",
      "Only that $300 was received; valuing the meal is the donor's responsibility",
      "Nothing; the $200 contribution is below the $250 acknowledgment threshold"
    ],
    "answer": 0,
    "explain": "A quid pro quo payment over $75 requires the charity to give a good-faith estimate of the goods or services provided and to state that only the excess is deductible (Sec. 6115); the donor deducts $200. The separate contemporaneous written acknowledgment rule of Sec. 170(f)(8) is measured on the contribution portion, here $200, so it is not triggered at $250."
  },
  {
    "id": "charity-6",
    "section": "charity",
    "topic": "Cash gifts in 2026",
    "difficulty": "medium",
    "q": "In 2026 an itemizer with AGI of $300,000 gives $20,000 in cash to public charities. How much of the gift is deductible this year?",
    "choices": [
      "$18,500",
      "$20,000",
      "$19,900",
      "$1,500"
    ],
    "answer": 0,
    "explain": "From 2026 the OBBBA allows an itemizer's charitable contributions only to the extent the year's total exceeds 0.5% of the contribution base: 0.5% x $300,000 = $1,500, so $18,500 is deductible. The 60% cash limit, now permanent, is $180,000 and does not bind. The floor is a percentage of AGI, not of the gift ($19,900), and the amount it removes carries forward only if the year's gifts also exceeded the percentage limit, which they did not."
  },
  {
    "id": "charity-7",
    "section": "charity",
    "topic": "Standard deduction couple",
    "difficulty": "medium",
    "q": "A married couple filing jointly and taking the standard deduction for 2026 gives $3,000 in cash to their church and $500 to a donor-advised fund. What charitable deduction may they claim?",
    "choices": [
      "$2,000",
      "$3,500",
      "$3,000",
      "$0"
    ],
    "answer": 0,
    "explain": "Sec. 170(p), added by the OBBBA, gives non-itemizers a deduction for cash gifts to public charities of up to $1,000, or $2,000 on a joint return, from 2026, taken in addition to the standard deduction and not subject to the 0.5% floor. Gifts to donor-advised funds and supporting organizations do not count, so the $500 is out and the $3,000 is capped at $2,000. Nothing unused carries forward."
  },
  {
    "id": "charity-8",
    "section": "charity",
    "topic": "IRA trustee pays a charity",
    "difficulty": "medium",
    "q": "A 74-year-old with a required minimum distribution due and few itemized deductions directs her IRA trustee to pay $10,000 directly to a public charity. What is the tax result?",
    "choices": [
      "Excluded from income, counts toward the RMD, no charitable deduction",
      "Included in income, deductible as an itemized contribution",
      "Excluded from income and also deductible as an itemized contribution",
      "Counts toward the RMD only if she also itemizes deductions"
    ],
    "answer": 0,
    "explain": "A qualified charitable distribution under Sec. 408(d)(8), available from age 70 1/2 and paid by the trustee straight to a public charity, is excluded from gross income, satisfies the RMD up to the indexed annual cap, and produces no itemized deduction because the income was never reported. For a non-itemizer that beats taking the distribution and donating it. Donor-advised funds and private foundations are not eligible recipients."
  },
  {
    "id": "charity-9",
    "section": "charity",
    "topic": "Three years in one",
    "difficulty": "medium",
    "q": "A single taxpayer gives $8,000 to charity yearly, yet her itemized deductions never beat the standard deduction. An adviser suggests funding a donor-advised fund with three years of gifts at once. Why?",
    "choices": [
      "Itemizing once with $24,000 can beat the standard deduction; the fund grants over time",
      "Gifts to a donor-advised fund are deductible in addition to the standard deduction",
      "The fund's grants are deductible again when it pays them to the charities",
      "Donor-advised fund gifts are exempt from the 0.5% floor and the percentage limits"
    ],
    "answer": 0,
    "explain": "Bunching concentrates three years of giving into one year so that itemizing beats the standard deduction once, and the donor takes the standard deduction in the other two years. A donor-advised fund makes this work: the full gift is deductible when contributed, and the fund can distribute to her charities on the old annual schedule. Bunching also clears the 0.5% floor once rather than three times; the floor and the 60% limit still apply to the fund contribution, and the later grants deduct nothing."
  },
  {
    "id": "charity-10",
    "section": "charity",
    "topic": "What to give",
    "difficulty": "medium",
    "q": "A client will give $50,000 to a public charity. He holds long-term stock with a large unrealized gain and stock with an unrealized loss. Which plan avoids tax on the gain while preserving a deduction?",
    "choices": [
      "Give the appreciated stock; sell the loss stock and give or keep the cash",
      "Give the loss stock, since its higher basis gives a larger deduction",
      "Sell the appreciated stock and give the cash to use the 60% limit",
      "Give cash; gifts of stock are deductible only at basis"
    ],
    "answer": 0,
    "explain": "Giving the appreciated stock can avoid recognition of its gain while allowing a fair-market-value deduction, subject to the 30% limit, which beats selling it and giving cash even though cash gets the 60% limit. Loss property should be sold so the capital loss is recognized, with the proceeds given or kept; donating it deducts only fair market value and wastes the loss. Stock is deductible at basis only when it is short-term or ordinary income property."
  },
  {
    "id": "charity-11",
    "section": "charity",
    "topic": "Top bracket deductions",
    "difficulty": "medium",
    "q": "From 2026 a 37%-bracket taxpayer's itemized deductions are cut by 2/37 of the deductions that offset income above the 37% threshold. What is the maximum tax saved per dollar of itemized deductions?",
    "choices": [
      "35 cents",
      "37 cents",
      "2 cents",
      "32 cents"
    ],
    "answer": 0,
    "explain": "Removing 2/37 of a deduction that would otherwise offset 37% income cuts its value from 37 cents to 35 cents per dollar (37% x 35/37); a $74,000 deduction, for example, loses $4,000 and saves $25,900 instead of $27,380. Taxpayers below the 37% bracket are not affected, and the lesser-of rule confines the haircut to deductions that actually offset 37% income. 2 cents is the amount lost, not the amount saved."
  },
  {
    "id": "charity-12",
    "section": "charity",
    "topic": "State taxes at high income",
    "difficulty": "easy",
    "q": "A married couple expects 2026 modified AGI far above $500,000 and $45,000 of state and local taxes. Which statement about their SALT deduction is correct?",
    "choices": [
      "The cap drops by 30% of MAGI over a threshold, but never below $10,000",
      "The cap no longer applies at their income, so all $45,000 is deductible",
      "The cap phases down to zero, so no state and local tax is deductible",
      "The cap is $40,000 at every income level through 2029"
    ],
    "answer": 0,
    "explain": "The OBBBA raised the SALT cap to $40,000 for 2025, indexed 1% a year through 2029, but reduces it by 30% of modified AGI over $500,000 (also indexed), never below $10,000. Far above the threshold the couple is back at $10,000, so deferring or shifting income into the phase-down band restores deduction at 30 cents per dollar, a steep effective rate increase inside that band. The cap reverts to $10,000 for 2030; pass-through entity tax elections remain a workaround for business owners."
  },
  {
    "id": "ccorp-1",
    "section": "ccorp",
    "topic": "Distribution ordering",
    "difficulty": "medium",
    "q": "A corporation has current earnings and profits of $30,000 but an accumulated E&P deficit. It distributes $40,000 to shareholders. How much is a dividend?",
    "choices": [
      "$30,000",
      "$40,000",
      "$0",
      "$10,000"
    ],
    "answer": 0,
    "explain": "Distributions are dividends to the extent of current E&P first, then accumulated E&P. Current E&P is measured on its own at year-end, so $30,000 is a dividend even though accumulated E&P is a deficit; the deficit does not net against current earnings. The remaining $10,000 is a return of capital that reduces stock basis, then capital gain."
  },
  {
    "id": "ccorp-2",
    "section": "ccorp",
    "topic": "Property distributions",
    "difficulty": "medium",
    "q": "A corporation distributes appreciated land with a $60,000 basis and $100,000 fair market value to a shareholder. What does the corporation recognize?",
    "choices": [
      "No gain, because a distribution is not a sale",
      "$40,000 of gain, as if the land had been sold at fair market value",
      "$100,000 of ordinary income",
      "A $40,000 reduction in earnings and profits with no gain"
    ],
    "answer": 1,
    "explain": "Section 311(b) treats a distribution of appreciated property as a sale at fair market value, so the corporation recognizes the $40,000 gain. Losses on depreciated property distributed to shareholders are not recognized."
  },
  {
    "id": "ccorp-3",
    "section": "ccorp",
    "topic": "Shareholder's basis in distributed property",
    "difficulty": "easy",
    "q": "A shareholder receives land worth $100,000 with a $60,000 corporate basis as a dividend distribution. What is the shareholder's basis in the land?",
    "choices": [
      "$60,000",
      "$100,000",
      "$40,000",
      "The shareholder's stock basis immediately before the distribution"
    ],
    "answer": 1,
    "explain": "A shareholder takes distributed property at its fair market value, which is also the amount of the distribution measured for dividend purposes. The corporation's basis carries over only in a section 351 transfer, not a distribution."
  },
  {
    "id": "ccorp-4",
    "section": "ccorp",
    "topic": "Stock redemptions",
    "difficulty": "medium",
    "q": "A corporation has one class of voting common stock. When does redeeming part of a shareholder's shares qualify as substantially disproportionate, giving sale or exchange treatment?",
    "choices": [
      "Any time the shareholder's ownership percentage falls at all",
      "The shareholder ends up under 80% of their prior percentage and under 50% control",
      "At least 20% of the shareholder's shares are redeemed, even if control stays above 50%",
      "The corporation redeems shares from every shareholder pro rata"
    ],
    "answer": 1,
    "explain": "Under §302(b)(2) both tests must be met: immediately after the redemption the shareholder owns less than 80% of the voting-stock percentage held before and less than 50% of total voting power; where other classes exist, the 80% test is also applied to common stock. A pro rata redemption changes no percentages and is treated as a dividend."
  },
  {
    "id": "ccorp-5",
    "section": "ccorp",
    "topic": "Consolidated returns",
    "difficulty": "medium",
    "q": "What ownership is required for a corporation to join in a consolidated federal return?",
    "choices": [
      "More than 50% of the voting stock of each subsidiary",
      "At least 80% of voting power and 80% of the value of the stock",
      "At least 65% of voting power in each includible member",
      "Any degree of common control by the same shareholders"
    ],
    "answer": 1,
    "explain": "An affiliated group is a chain of includible corporations connected through a common parent, each link meeting the 80% voting-power and 80% value tests under §1504(a); a subsidiary may be owned through other members rather than directly by the parent. The election binds all members and generally cannot be revoked without IRS consent."
  },
  {
    "id": "ccorp-6",
    "section": "ccorp",
    "topic": "Current earnings and profits",
    "difficulty": "easy",
    "q": "Ridge Corp. reports taxable income of $300,000 and a federal income tax liability of $63,000 for the year, with no other E&P adjustments. What is its current earnings and profits?",
    "choices": [
      "$237,000",
      "$300,000",
      "$363,000",
      "$174,000"
    ],
    "answer": 0,
    "explain": "Current E&P starts with taxable income and subtracts federal income tax, which reduces the corporation's ability to pay dividends even though it is not deductible: $300,000 less $63,000 is $237,000. Leaving taxable income unadjusted ($300,000) ignores the tax, adding the tax ($363,000) runs the adjustment backwards, and $174,000 subtracts it twice."
  },
  {
    "id": "ccorp-7",
    "section": "ccorp",
    "topic": "Property distribution with a mortgage",
    "difficulty": "medium",
    "q": "Birch Corp., with ample E&P, distributes land worth $100,000 that is subject to a $30,000 mortgage, which the shareholder assumes. What is the shareholder's dividend?",
    "choices": [
      "$70,000",
      "$100,000",
      "$130,000",
      "Zero; assuming the mortgage makes the transfer a purchase"
    ],
    "answer": 0,
    "explain": "Under section 301(b), the amount of a property distribution is its fair market value reduced (not below zero) by any liability the shareholder assumes or takes the property subject to: $100,000 less $30,000 is $70,000, a dividend to the extent of E&P. The shareholder still takes a $100,000 basis in the land. Ignoring the mortgage overstates the dividend, and adding it doubles the error; taking on a liability does not turn a distribution into a purchase."
  },
  {
    "id": "ccorp-8",
    "section": "ccorp",
    "topic": "Shareholder-employee pay",
    "difficulty": "easy",
    "q": "A closely held C corporation pays its sole shareholder-employee a salary the IRS determines is unreasonably high. How is the excess over reasonable compensation treated?",
    "choices": [
      "Nondeductible by the corporation and a dividend to the shareholder to the extent of E&P",
      "Deductible compensation to the corporation and wages to the shareholder, as paid",
      "A loan to the shareholder that must be repaid with interest at the applicable federal rate",
      "A return of capital that reduces the shareholder's stock basis and is never taxed"
    ],
    "answer": 0,
    "explain": "Unreasonable compensation is a classic constructive dividend: the corporation loses the §162 deduction for the excess, and the shareholder reports a dividend to the extent of E&P rather than wages. Any amount beyond available E&P reduces stock basis, with further excess treated as capital gain, so a return of capital is never simply untaxed, and nothing in the facts makes the payment a loan."
  },
  {
    "id": "ccorp-9",
    "section": "ccorp",
    "topic": "Redemption from a sole shareholder",
    "difficulty": "medium",
    "q": "A corporation with ample E&P redeems 5 of its sole shareholder's 100 shares for $50,000. Her basis in the redeemed shares is $10,000. What does she report?",
    "choices": [
      "$50,000 dividend; the $10,000 basis moves to her remaining shares",
      "$40,000 capital gain under sale or exchange treatment",
      "$50,000 capital gain with no offset for basis",
      "$40,000 dividend after her basis is recovered first"
    ],
    "answer": 0,
    "explain": "She owned 100% before and after the redemption, so it is neither substantially disproportionate nor not essentially equivalent to a dividend under section 302(b). The redemption is a section 301 distribution: a $50,000 dividend to the extent of E&P, with the basis of the redeemed shares shifting to the shares she keeps. Sale treatment, and any basis offset against the proceeds, requires a meaningful reduction in her proportionate interest."
  },
  {
    "id": "ccorp-10",
    "section": "ccorp",
    "topic": "Redemption attribution rules",
    "difficulty": "easy",
    "q": "In testing whether a redemption is substantially disproportionate, shares owned by which relative are treated as owned by the redeemed shareholder?",
    "choices": [
      "Her parent",
      "Her sibling",
      "Her grandparent",
      "Her cousin"
    ],
    "answer": 0,
    "explain": "Section 318(a)(1) attributes stock from an individual's spouse, children, grandchildren and parents. Siblings, grandparents, aunts and uncles, cousins and in-laws are outside the family rule, so their shares count against the shareholder only if another attribution rule (such as ownership through an entity) reaches them. Stock attributed once under the family rule is not reattributed to another family member."
  },
  {
    "id": "ccorp-11",
    "section": "ccorp",
    "topic": "Retiring founder's redemption",
    "difficulty": "medium",
    "q": "A corporation redeems every share a retiring father owns; his daughter keeps her 60% stake. What must he do so the redemption is treated as a sale rather than a dividend?",
    "choices": [
      "Waive family attribution by agreeing to hold no interest except as a creditor for 10 years",
      "Nothing; redeeming every share he owns is a complete termination on its own",
      "Have his daughter also redeem enough shares to pass the 80% test",
      "Stay on as a paid officer so the corporation keeps continuity of management"
    ],
    "answer": 0,
    "explain": "Through section 318 he is treated as still owning his daughter's shares, so the redemption fails every section 302(b) test unless he waives family attribution under section 302(c)(2): he must retain no interest in the corporation other than as a creditor (no officer, director or employee role), acquire none for 10 years, and file an agreement to notify the IRS if he does. Staying on as an officer is a prohibited interest, and the daughter's holdings are the problem, not the solution."
  },
  {
    "id": "ccorp-12",
    "section": "ccorp",
    "topic": "Group return computation",
    "difficulty": "medium",
    "q": "Parent P and its wholly owned subsidiary S file a consolidated return. S pays P a $100,000 dividend. Excluding the dividend, P has $500,000 of taxable income and S breaks even. Consolidated taxable income?",
    "choices": [
      "$500,000",
      "$600,000",
      "$535,000",
      "$550,000"
    ],
    "answer": 0,
    "explain": "On a consolidated return the group is taxed as one taxpayer: intercompany dividends are excluded from consolidated income entirely, so the result is P's $500,000 plus S's zero. Including the dividend ($600,000) treats the members as separate filers, and $535,000 or $550,000 apply the 65% or 50% dividends-received deduction that belongs to a shareholder owning less than 80%; a parent that owns 80% or more gets a 100% deduction even on a separate return, and a consolidated group never needs one because the dividend never enters income."
  },
  {
    "id": "ccorp-13",
    "section": "ccorp",
    "topic": "Acquired member's old losses",
    "difficulty": "medium",
    "q": "Target brings an NOL from before it joined into a consolidated group. Assume the SRLY limitation applies. In the first consolidated year, which income may absorb that carryover?",
    "choices": [
      "Only Target's own contribution to consolidated taxable income",
      "All consolidated taxable income of the group once Target joins",
      "None; a loss from before affiliation expires when the member joins the group",
      "Only the common parent's income, since the parent files the return"
    ],
    "answer": 0,
    "explain": "A loss from a separate return limitation year may be deducted on the consolidated return only up to the acquired member's cumulative contribution to consolidated taxable income (Reg. §1.1502-21(c)), subject also to the 80% limit, so a profitable group cannot simply buy losses. The loss is not forfeited, and the other members' income cannot absorb it. When a §382 ownership change occurs within six months of the member joining, the overlap rule turns the SRLY limit off and §382 alone applies."
  },
  {
    "id": "ccorp-14",
    "section": "ccorp",
    "topic": "Consulting fees earned abroad",
    "difficulty": "easy",
    "q": "A U.S. corporation earns consulting fees for work its employees performed entirely in Germany for a U.S. client, who paid from a U.S. bank account. What is the source of the income?",
    "choices": [
      "Foreign source; services are sourced where they are performed",
      "U.S. source; the client is a U.S. resident",
      "U.S. source; payment came from a U.S. bank account",
      "Split evenly between U.S. and foreign source"
    ],
    "answer": 0,
    "explain": "Compensation for personal services is sourced where the services are performed, so fees for work done in Germany are foreign-source income regardless of who pays or where the funds come from. The payer's residence sources interest and dividends, not services, and the place of payment never controls source. Sourcing matters to a U.S. corporation mainly for the foreign tax credit limitation."
  },
  {
    "id": "ccorp-15",
    "section": "ccorp",
    "topic": "Credit for foreign taxes",
    "difficulty": "medium",
    "q": "A U.S. corporation's U.S. tax before credits is $210,000. Foreign-source taxable income is 30% of its worldwide taxable income, and it paid $90,000 of foreign income tax. Foreign tax credit allowed this year?",
    "choices": [
      "$63,000",
      "$90,000",
      "$27,000",
      "$147,000"
    ],
    "answer": 0,
    "explain": "The section 904 limitation is U.S. tax before credit times foreign-source taxable income over worldwide taxable income: $210,000 x 30% = $63,000. The credit is the lesser of foreign tax paid ($90,000) and the limitation, so $63,000 is allowed and the $27,000 excess carries back one year or forward ten. Crediting the full $90,000 ignores the limit, $27,000 is the carryover rather than the credit, and $147,000 is the U.S. tax remaining after the credit."
  },
  {
    "id": "ccorp-16",
    "section": "ccorp",
    "topic": "Foreign subsidiary's retained earnings",
    "difficulty": "easy",
    "q": "A U.S. corporation owns 100% of a foreign subsidiary that earned interest and royalty income this year and paid no dividend. What does the parent report?",
    "choices": [
      "A current inclusion of the subsidiary's Subpart F income, with no distribution required",
      "Nothing until the subsidiary pays a dividend to the parent",
      "Nothing; a dividend from a 10%-owned foreign subsidiary would be fully deductible anyway",
      "The subsidiary's entire income, since a wholly owned subsidiary is disregarded"
    ],
    "answer": 0,
    "explain": "The subsidiary is a controlled foreign corporation, and its U.S. shareholder includes its pro rata share of Subpart F income (passive items such as interest, dividends, rents and royalties) and net CFC tested income (the inclusion formerly called GILTI) each year whether or not anything is distributed. Deferral until an actual dividend is the pre-1962 result the rules were written to end, and the section 245A deduction applies to actual dividends, not to these inclusions. A foreign corporation is not disregarded merely because it is wholly owned."
  },
  {
    "id": "scorp-1",
    "section": "scorp",
    "topic": "Forming an S corporation",
    "difficulty": "easy",
    "q": "Two individuals form an S corporation, each receiving 50% of the stock. Ana contributes land with a $40,000 basis and a $100,000 value; the other contributes cash. What is Ana's tax result?",
    "choices": [
      "No gain; section 351 applies since the transferors own all the stock after the exchange",
      "Gain of $60,000; section 351 does not apply to S corporations",
      "Gain of $60,000, which passes through to both shareholders pro rata",
      "No gain, but her stock basis is the land's $100,000 value"
    ],
    "answer": 0,
    "explain": "An S corporation is a corporation, so section 351 applies on formation exactly as for a C corporation: property transferred solely for stock by transferors who together hold at least 80% control immediately afterward produces no gain. Her stock basis is the land's $40,000 carryover basis, not its value, and the corporation takes the same $40,000 basis in the land."
  },
  {
    "id": "scorp-2",
    "section": "scorp",
    "topic": "Noncash distribution to the owner",
    "difficulty": "medium",
    "q": "An S corporation with one shareholder distributes land with a $20,000 basis and a $50,000 value. What is the tax result of the distribution?",
    "choices": [
      "$30,000 gain, which passes through to the shareholder",
      "$30,000 gain, taxed to the corporation at 21%",
      "No gain; a distribution of property is not a sale",
      "$50,000 gain, which passes through to the shareholder"
    ],
    "answer": 0,
    "explain": "Under section 311(b), as applied through section 1371, a corporation distributing appreciated property recognizes gain as if it sold the property at fair market value: $50,000 less $20,000 is $30,000. Because the entity is an S corporation the gain passes through to the shareholder and raises stock basis before the $50,000 distribution reduces it. The shareholder's basis in the land is its $50,000 value."
  },
  {
    "id": "scorp-3",
    "section": "scorp",
    "topic": "Distributing depreciated equipment",
    "difficulty": "medium",
    "q": "An S corporation distributes equipment with a $40,000 adjusted basis and a $25,000 fair market value to a shareholder. What are the results?",
    "choices": [
      "No loss is recognized; the shareholder takes a $25,000 basis",
      "A $15,000 loss passes through; the shareholder takes a $25,000 basis",
      "A $15,000 loss passes through; the shareholder takes a $40,000 basis",
      "No loss is recognized; the shareholder takes a $40,000 carryover basis"
    ],
    "answer": 0,
    "explain": "A corporation recognizes gain but never loss on a nonliquidating distribution of property (section 311), and the S corporation rules do not change that, so the $15,000 built-in loss simply disappears. The shareholder's basis in distributed property is its fair market value, $25,000, and the distribution reduces stock basis by the same amount. Selling the equipment and distributing the cash would have preserved the loss."
  },
  {
    "id": "scorp-4",
    "section": "scorp",
    "topic": "Cash paid out by a former C corporation",
    "difficulty": "medium",
    "q": "An S corporation has an AAA balance of $40,000 and ample accumulated E&P from its C years. It distributes $50,000 cash to its sole shareholder, whose stock basis exceeds the distribution. Treatment?",
    "choices": [
      "$40,000 tax-free reduction of basis and a $10,000 dividend",
      "$50,000 dividend",
      "$50,000 tax-free reduction of stock basis",
      "$40,000 dividend and a $10,000 tax-free reduction of basis"
    ],
    "answer": 0,
    "explain": "With accumulated E&P, section 1368(c) sources a distribution first from the accumulated adjustments account (tax-free to the extent of basis), then from E&P (a dividend), then against remaining stock basis, and finally as capital gain. The first $40,000 comes out of AAA and the next $10,000 is a dividend from the C-year E&P. Treating the whole amount as a dividend ignores AAA, and treating it all as tax-free is the rule for an S corporation with no E&P."
  },
  {
    "id": "scorp-5",
    "section": "scorp",
    "topic": "Payout after the election ends",
    "difficulty": "medium",
    "q": "A corporation's S election terminated on December 31, 2026, leaving a positive AAA. In March 2027 it distributes cash to its shareholders. How is the cash treated?",
    "choices": [
      "Tax-free to the extent of AAA and stock basis; a one-year window applies",
      "Dividend to the extent of E&P; C corporation rules apply from January 1",
      "Capital gain; the AAA balance was deemed distributed when the election ended",
      "Tax-free only if the corporation re-elects S status within five years"
    ],
    "answer": 0,
    "explain": "Section 1371(e) lets a former S corporation distribute its remaining AAA in cash, tax-free up to stock basis, during the post-termination transition period of section 1377(b), which runs at least one year after the last S day (to the later of that date or the return due date with extensions). Only cash qualifies; property distributions after termination follow C corporation rules. Nothing is deemed distributed at termination, and a new election is not required."
  },
  {
    "id": "scorp-6",
    "section": "scorp",
    "topic": "How much loss she may claim",
    "difficulty": "medium",
    "q": "A shareholder has $15,000 stock basis and $10,000 basis in her direct loan to the S corporation; she also guaranteed its bank loan. Her loss share exceeds these. Maximum loss allowed by the basis limit?",
    "choices": [
      "$25,000",
      "$15,000",
      "$10,000",
      "$25,000 plus her share of the guaranteed bank loan"
    ],
    "answer": 0,
    "explain": "Section 1366(d) limits pass-through losses to the shareholder's stock basis plus the basis of debt the corporation owes her directly: $15,000 plus $10,000 is $25,000, applied to stock basis first and then to debt basis. A guarantee adds nothing until she actually pays on it, unlike a partner's share of recourse debt. The excess loss is suspended and carries forward until she has basis again."
  },
  {
    "id": "scorp-7",
    "section": "scorp",
    "topic": "Shareholder loan paid off",
    "difficulty": "medium",
    "q": "Pass-through losses reduced a shareholder's basis in her $30,000 note from her S corporation to $12,000. The corporation repays the note in full in a year with no net basis increase. Result?",
    "choices": [
      "$18,000 capital gain",
      "$18,000 ordinary income",
      "No gain; repayment of a loan is a return of capital",
      "$30,000 capital gain"
    ],
    "answer": 0,
    "explain": "Repayment exceeds the adjusted debt basis by $18,000 ($30,000 less $12,000), and because the loan is a written note, a capital asset, the gain is capital; the same gain on an open-account advance would be ordinary. Had the year shown a net increase, Reg. §1.1367-2(d) would have restored debt basis immediately before the repayment, even if the income came after the payment date."
  },
  {
    "id": "scorp-8",
    "section": "scorp",
    "topic": "Undocumented shareholder advances",
    "difficulty": "medium",
    "q": "A shareholder's undocumented advances to her S corporation total $40,000 at the close of the year, up from zero. How are the advances treated for debt-basis purposes going forward?",
    "choices": [
      "As debt evidenced by a separate note from the next year, no longer netted with new advances and repayments",
      "As open account debt, netted with repayments each year, because no written instrument exists",
      "As a contribution to capital that increases stock basis rather than debt basis",
      "As a second class of stock, which terminates the S election"
    ],
    "answer": 0,
    "explain": "Under Reg. 1.1367-2, open account debt is shareholder advances not evidenced by separate written instruments whose aggregate principal does not exceed $25,000 at the close of the shareholder's tax year; advances and repayments within it are netted so that a mid-year repayment does not trigger gain. Once the balance exceeds $25,000 at year end, the whole amount is treated from the start of the following year as debt evidenced by a separate instrument: it is no longer netted with later advances, and any repayment in excess of basis is gain under the ordinary rules for a reduced-basis note. Shareholder debt is not a second class of stock."
  },
  {
    "id": "scorp-9",
    "section": "scorp",
    "topic": "Splitting a year's results",
    "difficulty": "medium",
    "q": "A calendar-year S corporation revokes its election effective July 1. How are the year's items of income and deduction divided between the S short year and the C short year?",
    "choices": [
      "Pro rata by day, unless all shareholders elect to allocate on the actual books",
      "By actual books only; the daily method is not allowed when an election ends",
      "Entirely to the S short year; the corporation files one Form 1120-S for the year",
      "Entirely to the C short year; the revocation is retroactive to January 1"
    ],
    "answer": 0,
    "explain": "Section 1362(e) splits a termination year into an S short year and a C short year, and allocates each item pro rata by day unless all persons who were shareholders during the S short year and on the first day of the C short year elect to close the books. Closing the books is mandatory only when 50% or more of the stock is sold during the year. Both short-year returns are due by the C short year's due date, and the C short year's tax is annualized."
  },
  {
    "id": "scorp-10",
    "section": "scorp",
    "topic": "Too much investment income",
    "difficulty": "medium",
    "q": "An S corporation that still holds E&P from its C years earns passive investment income above 25% of gross receipts for the second year in a row. What is the consequence?",
    "choices": [
      "It owes the excess net passive income tax at 21%; a third such year ends the election",
      "Nothing yet; both the tax and the termination wait for the third consecutive year",
      "Its election terminates at the close of this second year",
      "The passive income is taxed at 21%, but the election cannot end on this ground"
    ],
    "answer": 0,
    "explain": "Section 1375 taxes excess net passive income at the highest corporate rate (21%) in any year an S corporation has both C-year E&P and passive investment income over 25% of gross receipts; the tax applies each such year, including the first. Under section 1362(d)(3), three consecutive such years terminate the election effective the first day of the fourth year. An S corporation with no accumulated E&P faces neither the tax nor the termination."
  },
  {
    "id": "scorp-11",
    "section": "scorp",
    "topic": "Benefits for a major owner",
    "difficulty": "medium",
    "q": "An S corporation provides several benefits to an employee who owns 40% of its stock. Which one is excluded from his income under the same rules as for any other employee?",
    "choices": [
      "Employer contributions to a qualified retirement plan",
      "Group-term life insurance premiums",
      "Participation in a cafeteria plan",
      "Meals and lodging furnished on the business premises"
    ],
    "answer": 0,
    "explain": "Section 1372 treats a more-than-2% shareholder like a partner for fringe benefit purposes, so employee-only exclusions such as group-term life insurance (section 79), cafeteria plans (section 125), meals and lodging (section 119) and accident and health coverage are taxable to him, with health premiums deductible on his own return. Qualified retirement plan contributions are not fringe benefits under section 1372 and remain excludable, as do working condition and de minimis fringes."
  },
  {
    "id": "scorp-12",
    "section": "scorp",
    "topic": "Appreciated assets after conversion",
    "difficulty": "easy",
    "q": "A C corporation holding appreciated assets elected S status effective January 1, 2024. Through what date can a sale of those assets expose the corporation to the built-in gains tax?",
    "choices": [
      "December 31, 2028",
      "December 31, 2030",
      "December 31, 2033",
      "Indefinitely, for as long as the built-in gain remains unrecognized"
    ],
    "answer": 0,
    "explain": "The section 1374 recognition period is the five years beginning on the first day of the first S year, so it runs from January 1, 2024 through December 31, 2028. Seven- and ten-year periods applied under earlier law and were made permanently five years by the PATH Act of 2015. After the period ends, gains on the converted assets pass through with no corporate-level tax."
  },
  {
    "id": "scorp-13",
    "section": "scorp",
    "topic": "Taxes owed by the entity",
    "difficulty": "easy",
    "q": "An S corporation that has never been a C corporation reports $500,000 of net ordinary income and retains all of it. What federal income tax does the entity itself owe?",
    "choices": [
      "None; every item passes through to the shareholder whether or not it is distributed",
      "$105,000, the 21% corporate rate on its taxable income",
      "The accumulated earnings tax on the undistributed amount",
      "The excess net passive income tax if over 25% of its receipts are passive"
    ],
    "answer": 0,
    "explain": "An S corporation pays no regular income tax; its items pass through to shareholders whether distributed or not. The only entity-level federal income taxes it can face are the section 1374 built-in gains tax and the section 1375 excess net passive income tax, and both require C corporation history (built-in gain from C years or accumulated C-year E&P). The accumulated earnings tax applies only to C corporations."
  },
  {
    "id": "scorp-14",
    "section": "scorp",
    "topic": "Reviewing a basis schedule",
    "difficulty": "medium",
    "q": "A preparer's stock basis schedule for an S shareholder adds ordinary income, then subtracts distributions, then subtracts losses, and ignores the corporation's municipal bond interest. What correction is needed?",
    "choices": [
      "Add the shareholder's share of the municipal bond interest to basis",
      "Subtract the municipal bond interest, since it was never taxed",
      "Move the distributions below the losses in the ordering",
      "Add the shareholder's share of the corporation's bank debt to basis"
    ],
    "answer": 0,
    "explain": "Section 1367 increases stock basis for all separately stated income items, including tax-exempt interest, so the shareholder can later receive it tax-free; omitting it understates basis. The schedule's order is already correct: income first, then distributions, then nondeductible expenses, then losses. Unlike a partner, an S shareholder gets no basis from entity-level debt, so adding the bank debt would be a second error."
  },
  {
    "id": "partner-1",
    "section": "partner",
    "topic": "Sale of contributed property",
    "difficulty": "medium",
    "q": "A partner contributes property with a $50,000 built-in gain. The partnership later sells it for $5,000 more than its contribution-date value. How is the gain allocated?",
    "choices": [
      "$50,000 to the contributing partner; $5,000 under the agreement",
      "The entire gain under the partnership agreement",
      "The entire gain to the contributing partner",
      "The entire gain to the noncontributing partners"
    ],
    "answer": 0,
    "explain": "Section 704(c) sends the built-in gain or loss that existed at contribution back to the contributing partner, so the $50,000 is allocated entirely to her. Only the $5,000 of appreciation after contribution is shared under the partnership agreement. Splitting the whole gain under the agreement would shift pre-contribution gain to partners who never bore it."
  },
  {
    "id": "partner-2",
    "section": "partner",
    "topic": "Liquidating distributions",
    "difficulty": "medium",
    "q": "A partner receives only land in liquidation of her entire partnership interest. The land's inside basis is lower than her outside basis. What is her basis in the land?",
    "choices": [
      "Her full outside basis",
      "The land's inside basis, carried over",
      "The land's fair market value",
      "The inside basis, with the difference recognized as a loss"
    ],
    "answer": 0,
    "explain": "In a liquidating distribution the partner's entire remaining outside basis is assigned to the property received, so the land takes her outside basis, not the partnership's inside basis. Carryover of inside basis applies to current, non-liquidating distributions. A loss is recognized in liquidation only when the partner receives solely cash, unrealized receivables and inventory, so none arises on land."
  },
  {
    "id": "partner-3",
    "section": "partner",
    "topic": "Encumbered property contribution",
    "difficulty": "medium",
    "q": "Dana contributes land with a $90,000 basis, subject to a $40,000 recourse mortgage the partnership assumes. Under the §752 risk-of-loss rules, her share of the mortgage is 25%. Beginning outside basis?",
    "choices": [
      "$50,000",
      "$60,000",
      "$90,000",
      "$100,000"
    ],
    "answer": 1,
    "explain": "Her basis starts at the land's $90,000 basis, less the $30,000 of the mortgage shifted to the other partners (75% of $40,000), leaving $60,000; the $10,000 she still bears stays in her basis. Recourse debt is shared by economic risk of loss under Reg. §1.752-2, not by ownership percentage. $50,000 subtracts the whole mortgage; $90,000 ignores the liability shift."
  },
  {
    "id": "partner-4",
    "section": "partner",
    "topic": "Services for an interest",
    "difficulty": "medium",
    "q": "An attorney receives a 10% interest in an existing partnership's capital, worth $50,000, for drafting its agreement. A consultant receives only a 10% interest in future profits. Who recognizes income on receipt?",
    "choices": [
      "The attorney reports $50,000 of ordinary income; the consultant reports nothing on receipt",
      "Both report ordinary income equal to the interest's liquidation value",
      "Neither; partnership interests received for services are nonrecognition contributions under §721",
      "The attorney reports $50,000 of capital gain; the consultant reports the profits interest's value"
    ],
    "answer": 0,
    "explain": "A capital interest received for services is compensation: ordinary income equal to its fair market value under §83, and the partnership deducts or capitalizes it. A profits interest received for services to or for the partnership is generally not a taxable event (Revenue Procedure 93-27), because it has no liquidation value on receipt. §721 covers contributions of property, not services, and compensation is never capital gain."
  },
  {
    "id": "partner-5",
    "section": "partner",
    "topic": "Contributed loss property",
    "difficulty": "medium",
    "q": "Kim contributes securities with a $30,000 basis and $20,000 value to an equal two-person partnership, which later sells them at that value. How is the loss allocated?",
    "choices": [
      "$10,000 entirely to Kim",
      "$5,000 to each partner under the agreement",
      "No loss; the partnership's basis is limited to the $20,000 value",
      "$10,000 to the noncontributing partner, who bore the economic loss"
    ],
    "answer": 0,
    "explain": "§704(c) requires built-in gain or loss on contributed property to be allocated to the contributing partner, and §704(c)(1)(C) adds that a built-in loss may be taken into account only by that partner. For the other partner the partnership's basis is treated as the $20,000 value, so no loss shifts to her. Splitting the loss equally follows the agreement but ignores §704(c); the partnership itself keeps Kim's $30,000 carryover basis."
  },
  {
    "id": "partner-6",
    "section": "partner",
    "topic": "Special allocations",
    "difficulty": "medium",
    "q": "A partnership agreement allocates all depreciation to one partner. Under the basic three-part economic-effect test of the §704(b) regulations, what must the agreement provide?",
    "choices": [
      "Regulatory capital accounts, liquidation by capital accounts, and deficit restoration",
      "A matching gain allocation when the asset is sold, so the partners end up even",
      "Unanimous written consent and a business purpose beyond tax savings",
      "That the partner also bears a matching share of partnership liabilities"
    ],
    "answer": 0,
    "explain": "Under Reg. §1.704-1(b)(2)(ii)(b), an allocation has economic effect if capital accounts are maintained under the regulations, liquidating distributions follow positive capital account balances, and a partner with a deficit must restore it; the allocation must also be substantial. The alternate test substitutes a qualified income offset for the deficit restoration obligation. A gain chargeback and partner consent are not what the test asks for."
  },
  {
    "id": "partner-7",
    "section": "partner",
    "topic": "Current distribution of property",
    "difficulty": "medium",
    "q": "Raj's outside basis is $25,000. The partnership distributes to him, in a nonliquidating distribution, land with a $40,000 inside basis and no cash. What is his basis in the land and his gain?",
    "choices": [
      "$25,000 basis; no gain",
      "$40,000 basis; no gain",
      "$40,000 basis; $15,000 gain",
      "$25,000 basis; $15,000 gain"
    ],
    "answer": 0,
    "explain": "Under §732(a) a partner takes the partnership's basis in distributed property, but not more than his outside basis, so the land's basis is capped at $25,000 and his outside basis falls to zero. §731 taxes a distribution only when money received exceeds outside basis, and no money was distributed. The $40,000 answers ignore the cap; the gain answers treat property as if it were cash."
  },
  {
    "id": "partner-8",
    "section": "partner",
    "topic": "Liquidating distribution mix",
    "difficulty": "medium",
    "q": "In liquidation of her interest, Mei receives $10,000 cash and equipment the partnership carried at a lower inside basis. Her outside basis before the distribution was $34,000. What is her basis in the equipment?",
    "choices": [
      "$24,000",
      "$34,000",
      "The partnership's inside basis in the equipment",
      "The equipment's fair market value on the date of distribution"
    ],
    "answer": 0,
    "explain": "In a liquidating distribution §732(b) first reduces outside basis by the money received, then assigns all the remaining outside basis to the other property: $34,000 less $10,000 cash leaves $24,000 for the equipment. Carryover basis applies only to nonliquidating distributions, so the partnership's lower inside basis does not control. Giving the equipment the full $34,000 forgets that the cash came out first."
  },
  {
    "id": "partner-9",
    "section": "partner",
    "topic": "Loss on liquidating distribution",
    "difficulty": "medium",
    "q": "Pat's interest is completely liquidated. Her outside basis exceeds the money received plus the partnership's basis in any property received. For which asset mix may she recognize a loss?",
    "choices": [
      "Only money, unrealized receivables and inventory",
      "Only money",
      "Money and capital assets, but not inventory",
      "Any assets, since the liquidation closes out her interest"
    ],
    "answer": 0,
    "explain": "§731(a)(2) allows a loss on a liquidating distribution only when the partner receives nothing but money, unrealized receivables and inventory; the loss is her outside basis less the money and the partnership's basis in those items. Any other distributed property instead absorbs the remaining outside basis under §732(b), so no loss arises. Receivables and inventory cannot take more than carryover basis, which is why the loss exists."
  },
  {
    "id": "partner-10",
    "section": "partner",
    "topic": "Sale of a partnership interest",
    "difficulty": "medium",
    "q": "Lee sells his partnership interest for a $40,000 gain. His share of the partnership's unrealized receivables, which have a zero basis, is $15,000. How is the gain characterized?",
    "choices": [
      "$15,000 ordinary income and $25,000 capital gain",
      "$40,000 capital gain",
      "$40,000 ordinary income",
      "$25,000 ordinary income and $15,000 capital gain"
    ],
    "answer": 0,
    "explain": "§741 makes gain on the sale of a partnership interest capital, except that §751(a) treats the amount attributable to unrealized receivables and inventory as ordinary. Lee's share of the receivables would produce $15,000 of ordinary income on a hypothetical sale, so that much is ordinary and the remaining $25,000 is capital gain. Treating the whole gain one way ignores the split."
  },
  {
    "id": "partner-11",
    "section": "partner",
    "topic": "Buying an existing interest",
    "difficulty": "medium",
    "q": "Ana buys a one-third partnership interest for $200,000 when her share of the partnership's inside asset basis is $140,000. Without any election, what is the result?",
    "choices": [
      "Her outside basis is $200,000; her share of inside basis stays $140,000",
      "Both her outside basis and her share of inside basis become $200,000",
      "Her outside basis is $140,000; the $60,000 premium is goodwill she amortizes over 15 years",
      "Her share of inside basis rises to $200,000 automatically, as on every purchase of an interest"
    ],
    "answer": 0,
    "explain": "A purchaser's outside basis is cost under §742, but §743(a) leaves the partnership's inside basis unchanged, so Ana would be taxed on $60,000 of appreciation she already paid for. A §754 election by the partnership triggers a §743(b) adjustment of $60,000 for her alone. The adjustment is mandatory without an election only when the partnership has a substantial built-in loss."
  },
  {
    "id": "partner-12",
    "section": "partner",
    "topic": "Optional basis adjustment election",
    "difficulty": "easy",
    "q": "Who makes a §754 election, and how long does it generally remain effective?",
    "choices": [
      "The partnership; until the IRS approves revocation",
      "The buying partner; the current year only",
      "The selling partner; until the interest is resold",
      "The partnership; the current year only"
    ],
    "answer": 0,
    "explain": "The partnership makes the election, by a statement with its timely filed return for the year of the transfer or distribution. It applies to covered transfers under §743(b) and distributions under §734(b) in the election year and every later year until the IRS permits revocation; a partner cannot make it alone, and the seller's gain is unaffected."
  },
  {
    "id": "partner-13",
    "section": "partner",
    "topic": "Mid-year admission",
    "difficulty": "medium",
    "q": "A calendar-year partnership admits Joe as a 25% partner on October 1. Its ordinary income for the year is $120,000. What may be allocated to Joe for the year?",
    "choices": [
      "25% of the income attributed to the post-admission period, by interim closing or proration",
      "25% of the full $120,000, because allocations follow year-end ownership",
      "Nothing until the following year; a partner admitted mid-year shares only in later years",
      "Any amount the partners agree to, since retroactive allocations are permitted among partners"
    ],
    "answer": 0,
    "explain": "§706(d) requires each partner's share to reflect the partners' varying interests during the year, so Joe shares only in the period after he joined. An interim closing of the books (the default) uses actual results for each period, while the proration method, if the partners agree, spreads the year's ordinary income across days. Retroactive allocations to a new partner are not permitted, but a mid-year partner does share in the post-admission period."
  },
  {
    "id": "partner-14",
    "section": "partner",
    "topic": "When a partnership ends",
    "difficulty": "easy",
    "q": "In one year, 60% of a partnership's capital and profits interests are sold to new investors, and the business keeps operating. Does the sale alone terminate the partnership for tax purposes?",
    "choices": [
      "No; it ends only when no partner carries on any of its business in a partnership",
      "Yes; selling 50% or more of capital and profits within 12 months is a technical termination",
      "Yes, because the new investors never agreed to the existing partnership agreement",
      "No, unless the sale also shifts most partnership liabilities to the new investors"
    ],
    "answer": 0,
    "explain": "Under §708(b)(1) a partnership terminates only when no part of its business is carried on by any of its partners in a partnership, so a sale of interests with the business continuing does not end it. The technical termination rule for sales of 50% or more within twelve months was repealed by the TCJA for tax years beginning after 2017. Liability shifts affect basis, not existence."
  },
  {
    "id": "partner-15",
    "section": "partner",
    "topic": "Dealings with the partnership",
    "difficulty": "medium",
    "q": "Cal owns 60% of a partnership. He sells it land with a $100,000 basis for $80,000, its fair market value. What is the result to Cal?",
    "choices": [
      "No loss is deductible; the partnership may offset later gain by the disallowed $20,000",
      "A $20,000 capital loss, since the sale was at fair market value",
      "A $20,000 ordinary loss under §1231, because the buyer is a related business",
      "An $8,000 loss, the 40% share not attributable to his own interest"
    ],
    "answer": 0,
    "explain": "§707(b)(1) disallows a loss on a sale between a partnership and a partner owning more than 50% of its capital or profits interests. The partnership's basis is its $80,000 cost, but under the §267(d) rule it recognizes gain on a later sale only to the extent the gain exceeds the $20,000 disallowed loss. An arm's-length price does not cure the related-party disallowance, and the loss is not prorated."
  },
  {
    "id": "partner-16",
    "section": "partner",
    "topic": "Contribution followed by distribution",
    "difficulty": "medium",
    "q": "Bo contributes appreciated land to a partnership and, under a prearranged plan, receives a $300,000 cash distribution eight months later. How does the IRS likely treat the transactions?",
    "choices": [
      "As a sale of the land to the partnership to the extent of the cash",
      "As a tax-free contribution under §721 followed by a §731 distribution taxed only if cash exceeds basis",
      "As a guaranteed payment for the use of capital, taxable as ordinary income",
      "As a loan from the partnership that Bo must repay with interest"
    ],
    "answer": 0,
    "explain": "§707(a)(2)(B) and Reg. §1.707-3 recharacterize a contribution and a related distribution as a disguised sale; transfers within two years of each other are presumed to be a sale unless the facts clearly establish otherwise. Bo recognizes gain on the portion of the land deemed sold for $300,000. The §721/§731 treatment is what the rule overrides, and a guaranteed payment is for services or capital, not for property."
  },
  {
    "id": "partner-17",
    "section": "partner",
    "topic": "Who makes the election",
    "difficulty": "easy",
    "q": "A partnership pays foreign taxes, buys §179 property, admits a partner who bought his interest, and is choosing its accounting method. Which of these is decided by each partner rather than by the partnership?",
    "choices": [
      "The foreign tax credit election",
      "The §179 expensing election",
      "The overall accounting method",
      "The §754 basis adjustment election"
    ],
    "answer": 0,
    "explain": "§703(b) puts elections affecting the computation of partnership income at the partnership level, including accounting methods, depreciation and §179 expensing, and §754. The exceptions are made by each partner: the §901 foreign tax credit, §108(b)(5) and §617. So the foreign taxes pass through and each partner decides whether to credit or deduct them."
  },
  {
    "id": "partner-18",
    "section": "partner",
    "topic": "Reviewing a basis schedule",
    "difficulty": "medium",
    "q": "A reviewer finds a partner's basis schedule: beginning basis plus share of income equals ending basis. During the year the partnership borrowed from a bank and distributed cash. What should the reviewer conclude?",
    "choices": [
      "Two items are missing: the increase in her debt share and the cash distribution",
      "The schedule is correct; borrowing and distributions affect capital accounts, not tax basis",
      "Only the distribution is missing; partnership debt never affects a partner's basis",
      "Only the debt share is missing; cash distributions reduce basis only when they exceed it"
    ],
    "answer": 0,
    "explain": "Under §752(a) an increase in a partner's share of partnership liabilities is treated as a cash contribution that raises basis, and under §733 a cash distribution reduces basis dollar for dollar (gain arises only if it exceeds basis). Both belong on the schedule, so the ending figure is wrong. Capital accounts under §704(b) ignore debt, but tax basis does not."
  },
  {
    "id": "trust-1",
    "section": "trust",
    "topic": "Distributable net income",
    "difficulty": "medium",
    "q": "What role does distributable net income play for a trust?",
    "choices": [
      "It fixes the trust's taxable income, including capital gains allocated to corpus",
      "It limits and characterizes the distribution deduction and beneficiary income",
      "It determines whether the trust is treated as a grantor trust",
      "It sets the amount of the trust's required estimated payments"
    ],
    "answer": 1,
    "explain": "DNI caps the distribution deduction the fiduciary may claim and the amount beneficiaries report, and it carries the character of the underlying income through to them. It also generally excludes capital gains allocated to corpus."
  },
  {
    "id": "trust-2",
    "section": "trust",
    "topic": "Simple trusts",
    "difficulty": "medium",
    "q": "Which feature disqualifies a trust from being a simple trust for the year?",
    "choices": [
      "Holding tax-exempt bonds",
      "Making a charitable contribution",
      "Having more than one beneficiary",
      "Earning capital gains allocated to corpus"
    ],
    "answer": 1,
    "explain": "A simple trust must distribute all income currently, make no charitable contributions, and distribute no corpus during the year. Making a charitable gift makes it a complex trust for that year."
  },
  {
    "id": "trust-3",
    "section": "trust",
    "topic": "Grantor trusts",
    "difficulty": "medium",
    "q": "A grantor retains the power to revoke the trust. Who reports the trust's income?",
    "choices": [
      "The trust, on Form 1041",
      "The beneficiaries, on their individual returns",
      "The grantor, on their individual return",
      "The trust and grantor split it equally"
    ],
    "answer": 2,
    "explain": "Retained powers such as revocation, control over beneficial enjoyment, or certain administrative powers make the grantor the owner for income tax purposes. All items of income, deduction, and credit are then reported on the grantor's own return."
  },
  {
    "id": "trust-4",
    "section": "trust",
    "topic": "Fiduciary tax years",
    "difficulty": "medium",
    "q": "Which statement about tax years for fiduciary entities is correct?",
    "choices": [
      "Estates and trusts must both use a calendar year",
      "An estate may elect a fiscal year; a trust generally must use a calendar year",
      "Trusts may elect a fiscal year; an estate generally must use a calendar year",
      "Both may elect any 52-53 week year"
    ],
    "answer": 1,
    "explain": "An estate may adopt a fiscal year ending on the last day of any month, which can defer income to beneficiaries. Trusts other than certain tax-exempt and charitable trusts must use the calendar year."
  },
  {
    "id": "trust-5",
    "section": "trust",
    "topic": "Form 1041 filing",
    "difficulty": "easy",
    "q": "When must the fiduciary of a domestic estate file Form 1041?",
    "choices": [
      "When gross income is $600 or more",
      "Only when the estate owes tax",
      "When total assets exceed $5,000",
      "Whenever the decedent filed a return in the prior year"
    ],
    "answer": 0,
    "explain": "An estate files when it has $600 or more of gross income, or any beneficiary is a nonresident alien. Trusts file at a lower threshold: any taxable income, or $600 of gross income."
  },
  {
    "id": "trust-6",
    "section": "trust",
    "topic": "Fiduciary exemption",
    "difficulty": "easy",
    "q": "A trust is required by its governing instrument to distribute all of its income currently. What exemption may it claim on Form 1041?",
    "choices": [
      "$0",
      "$100",
      "$300",
      "$600"
    ],
    "answer": 2,
    "explain": "Section 642(b) allows $300 for a trust required to distribute all of its income currently, $600 for an estate, and generally $100 for other trusts; none is indexed for inflation. Zeroing out the individual personal exemption did not reach the fiduciary exemption, and $600 belongs to estates, not trusts."
  },
  {
    "id": "trust-7",
    "section": "trust",
    "topic": "Timing of trust distributions",
    "difficulty": "medium",
    "q": "A complex trust's trustee pays $10,000 to a beneficiary on February 20 of Year 2. Can the trust treat the payment as a Year 1 distribution?",
    "choices": [
      "Yes, if the trustee elects that treatment on the Year 1 return",
      "Yes, automatically, because it was paid before the Year 1 return was due",
      "Yes, but only if the trust instrument required the payment in Year 1",
      "No, a distribution is deductible only in the year it is actually paid"
    ],
    "answer": 0,
    "explain": "Section 663(b) lets an estate or complex trust elect to treat amounts paid in the first 65 days of a tax year as paid on the last day of the prior year, and February 20 is day 51. The election is made on the Year 1 Form 1041 rather than applying on its own, and a simple trust cannot use it because it is deemed to distribute all income anyway."
  },
  {
    "id": "trust-8",
    "section": "trust",
    "topic": "Post-death receipts",
    "difficulty": "medium",
    "q": "A cash-basis employee died on December 28. In January the employer paid her final wages to her estate. How is that payment taxed?",
    "choices": [
      "As ordinary income on the decedent's final Form 1040, because it was earned before death",
      "As ordinary income to the estate when received, with no basis step-up",
      "As capital gain to the estate, measured against a date-of-death basis",
      "It escapes income tax because the right to the wages takes a date-of-death basis"
    ],
    "answer": 1,
    "explain": "Wages a cash-basis decedent earned but never received are income in respect of a decedent: whoever collects them reports ordinary income in the year received, with the character the decedent would have had. Section 1014(c) denies IRD any basis step-up, and the final Form 1040 picks up only what was actually received before death."
  },
  {
    "id": "trust-9",
    "section": "trust",
    "topic": "Distribution deduction",
    "difficulty": "medium",
    "q": "A simple trust distributes all of its $40,000 accounting income, which also equals its DNI. DNI includes $5,000 of tax-exempt interest. What is the trust's distribution deduction?",
    "choices": [
      "$35,000",
      "$40,000",
      "$45,000",
      "$5,000"
    ],
    "answer": 0,
    "explain": "The §651 deduction is the lesser of the income required to be distributed and DNI, in each case net of the tax-exempt income included in it, so $40,000 less $5,000 leaves $35,000. The trust was never taxed on the exempt interest, so it gets no deduction for passing it out; the beneficiary reports $35,000 of taxable income and $5,000 of tax-exempt interest."
  },
  {
    "id": "trust-10",
    "section": "trust",
    "topic": "Fiduciary return deadline",
    "difficulty": "easy",
    "q": "Absent an extension, when must a calendar-year estate file its Form 1041?",
    "choices": [
      "March 15 of the following year",
      "April 15 of the following year",
      "September 30 of the following year",
      "October 15 of the following year"
    ],
    "answer": 1,
    "explain": "Form 1041 is due on the 15th day of the fourth month after the tax year ends, so April 15 for a calendar-year estate or trust. Form 7004 gives an automatic 5½-month extension to September 30, but it extends the filing, not the payment; March 15 is the partnership and S corporation date."
  },
  {
    "id": "trust-11",
    "section": "trust",
    "topic": "Character of distributions",
    "difficulty": "medium",
    "q": "A complex trust's $60,000 distributable net income is three-quarters taxable interest and one-quarter qualified dividends; the instrument allocates no class of income. It distributes $20,000 to its sole beneficiary. What does she report?",
    "choices": [
      "$15,000 of taxable interest and $5,000 of qualified dividends",
      "$20,000 of taxable interest",
      "$5,000 of taxable interest and $15,000 of qualified dividends",
      "$20,000 of qualified dividends"
    ],
    "answer": 0,
    "explain": "Unless the instrument allocates specific classes of income, a distribution carries out each class of DNI pro rata. Three-quarters of the $20,000 is taxable interest, $15,000, and one-quarter is qualified dividends, $5,000. No ordering rule fills the distribution with one class first, and the beneficiary is taxed on the $20,000 distributed, not on the trust's entire $60,000 of DNI."
  },
  {
    "id": "trust-12",
    "section": "trust",
    "topic": "Computing the distribution cap",
    "difficulty": "medium",
    "q": "A simple trust has $70,000 of interest and dividends and a $20,000 long-term capital gain the instrument allocates to corpus. It has no expenses. What is its distributable net income?",
    "choices": [
      "$70,000",
      "$90,000",
      "$69,700",
      "$89,700"
    ],
    "answer": 0,
    "explain": "DNI under §643(a) starts with taxable income before the distribution deduction, adds back the exemption and excludes capital gains allocated to corpus that are not distributed. Here $89,700 plus the $300 exemption less the $20,000 gain leaves $70,000, matching trust accounting income. $90,000 wrongly includes the gain, and the $300 figures forget to add the exemption back."
  },
  {
    "id": "trust-13",
    "section": "trust",
    "topic": "Allocating income among beneficiaries",
    "difficulty": "medium",
    "q": "A complex trust with $40,000 of DNI must pay Ann $30,000 of income and, at the trustee's discretion, pays Ben the same amount. How much does Ben include in income?",
    "choices": [
      "$10,000",
      "$30,000",
      "$20,000",
      "$0"
    ],
    "answer": 0,
    "explain": "§662(a) taxes first-tier beneficiaries, those with a right to current income, on their distributions up to DNI first; Ann absorbs $30,000 of the $40,000. Second-tier discretionary distributions are taxable only to the extent DNI remains, so Ben includes $10,000 and the other $20,000 is a tax-free distribution of corpus. Prorating DNI between them ($20,000 each) ignores the tiers."
  },
  {
    "id": "trust-14",
    "section": "trust",
    "topic": "Decedent's revocable trust after death",
    "difficulty": "easy",
    "q": "At death, a decedent's revocable living trust becomes irrevocable while her estate is administered. Which election lets the trustee and executor file one Form 1041 using the estate's fiscal year?",
    "choices": [
      "The §645 election to treat the trust as part of the estate",
      "The §663(b) 65-day election to treat trust distributions as the estate's",
      "A joint fiduciary return election, like spouses filing jointly",
      "An entity classification election treating the trust as disregarded"
    ],
    "answer": 0,
    "explain": "§645 lets the executor and trustee of a qualified revocable trust elect to treat the trust as part of the estate for income tax purposes; they file Form 8855 by the due date of the estate's first Form 1041, and the election is irrevocable. The combined entity files one return and may use the estate's fiscal year. The 65-day rule only shifts the timing of distributions, joint returns are for spouses, and classification elections are for business entities."
  },
  {
    "id": "trust-15",
    "section": "trust",
    "topic": "Fiduciary charitable gifts",
    "difficulty": "medium",
    "q": "A complex trust with $200,000 of gross income pays $120,000 to a public charity, as its governing instrument directs. What charitable deduction may the trust claim?",
    "choices": [
      "$120,000, with no percentage limitation",
      "$60,000, limited to 30% of gross income",
      "$100,000, limited to 50% of gross income",
      "$0; a trust deducts charitable gifts only through the distribution deduction"
    ],
    "answer": 0,
    "explain": "§642(c) allows a trust or estate a deduction, without any percentage limit, for amounts of gross income paid for a charitable purpose pursuant to the governing instrument. The individual AGI percentage limits do not apply. The deduction is reduced only for the share allocable to tax-exempt income, and the payment must come from gross income, not corpus, which is why the instrument's direction matters."
  },
  {
    "id": "trust-16",
    "section": "trust",
    "topic": "Medical bills paid by the estate",
    "difficulty": "medium",
    "q": "A taxpayer died in March. In June his estate paid $9,000 of medical bills he had incurred in February. Where may the bills be deducted?",
    "choices": [
      "On his final Form 1040, if the executor waives the estate tax deduction for them",
      "Only on the estate's Form 1041, as an expense of administration",
      "Only on Form 706, since the estate rather than the decedent paid them",
      "Split between Form 1040 and Form 706 by the date each bill was paid"
    ],
    "answer": 0,
    "explain": "Under §213(c), medical expenses the estate pays within one year after death are treated as paid when incurred, so the executor may claim them on the final Form 1040, subject to the normal AGI floor, by filing a statement waiving the estate tax deduction. Otherwise they are a claim against the estate on Form 706. Form 1041 never deducts a decedent's medical expenses, and no splitting is required."
  },
  {
    "id": "trust-17",
    "section": "trust",
    "topic": "Fiduciary estimated payments",
    "difficulty": "easy",
    "q": "An estate in its first tax year expects to owe $12,000 of income tax after withholding. Must the executor make estimated tax payments?",
    "choices": [
      "No; an estate is exempt for tax years ending within two years of the decedent's death",
      "Yes; any fiduciary expecting to owe $1,000 or more must pay quarterly",
      "No; estates never pay estimated tax because beneficiaries pay on distributions",
      "Yes, but only for the portion of tax attributable to undistributed capital gains"
    ],
    "answer": 0,
    "explain": "§6654(l)(2) excuses an estate, a grantor trust receiving the residue under the will, and a trust with a §645 election from estimated tax for any tax year ending within two years of the decedent's death. After that, estates pay estimated tax under the same rules as individuals, as trusts do from their first year. Trusts and later-year estates with $1,000 or more of expected tax must pay quarterly."
  },
  {
    "id": "trust-18",
    "section": "trust",
    "topic": "Why distribute",
    "difficulty": "easy",
    "q": "A complex trust has $50,000 of current-year ordinary income, all of it DNI, and two beneficiaries in lower tax brackets. Why would a planner recommend distributing the income rather than accumulating it?",
    "choices": [
      "Trust brackets are compressed, so retained income reaches the top rate at a far lower level",
      "Retained income is taxed twice, to the trust now and to the beneficiaries when later distributed",
      "A complex trust loses its exemption and distribution deduction in any year it accumulates",
      "The separate share rule taxes each beneficiary on half the income whether or not distributed"
    ],
    "answer": 0,
    "explain": "Distributing current-year DNI shifts this year's income to the beneficiaries, who pay at their own lower rates, while the trust takes a matching §661 deduction; a trust reaches the 37% bracket and the 3.8% net investment income tax at a low threshold. Income the trust has already paid tax on becomes corpus, so paying it out later is tax-free rather than taxed twice. The separate share rule only divides DNI among beneficiaries; it taxes no one on undistributed income."
  },
  {
    "id": "exempt-1",
    "section": "exempt",
    "topic": "Exempt organizations' commercial activity",
    "difficulty": "medium",
    "q": "A tax-exempt museum operates a parking garage open to the general public year round. How is that income treated?",
    "choices": [
      "Exempt, because the museum is a 501(c)(3)",
      "Subject to unrelated business income tax, less a specific deduction",
      "Exempt, because income spent on exempt activities is substantially related",
      "Taxable only if it exceeds half the museum's revenue"
    ],
    "answer": 1,
    "explain": "Income from a trade or business regularly carried on and not substantially related to the exempt purpose is taxed at corporate rates, reduced by a $1,000 specific deduction. Using the profits for exempt purposes does not change the analysis."
  },
  {
    "id": "exempt-2",
    "section": "exempt",
    "topic": "Qualifying for exemption",
    "difficulty": "medium",
    "q": "A new nonprofit's articles allow it to pursue 'any lawful purpose,' though it has only ever run a free literacy program. Does it qualify under section 501(c)(3)?",
    "choices": [
      "No; the articles fail the organizational test by permitting nonexempt purposes",
      "Yes; the operational test alone controls when actual activities are charitable",
      "Yes, provided it files Form 990 showing only charitable expenditures",
      "No; literacy programs are educational, not charitable, and need a different subsection"
    ],
    "answer": 0,
    "explain": "Section 501(c)(3) status requires both tests in Reg. 1.501(c)(3)-1: the organizational test looks only at the governing documents, which must limit purposes to exempt ones and dedicate assets to exempt purposes on dissolution, and the operational test looks at what the organization actually does. Articles permitting any lawful purpose fail the organizational test no matter how charitable the activities are, so the fix is to amend them before applying. Education is itself an exempt purpose, and Form 990 reporting cannot cure a defective charter."
  },
  {
    "id": "exempt-3",
    "section": "exempt",
    "topic": "Exemption application timing",
    "difficulty": "medium",
    "q": "A charity incorporated on 1 March 2025 and submitted Form 1023 electronically on 1 February 2027, which the IRS approves. From what date is its exemption effective?",
    "choices": [
      "1 March 2025, the date of formation",
      "1 February 2027, the date the application was submitted",
      "The date of the IRS determination letter",
      "1 January 2027, the first day of the year of filing"
    ],
    "answer": 0,
    "explain": "Under section 508 and Reg. 1.508-1, an application filed within 27 months after the end of the month of formation makes the exemption retroactive to the formation date; here the deadline would have been 30 June 2027. An application filed later is generally effective only from the date it is submitted unless the IRS grants relief. Form 1023 and Form 1023-EZ are both filed electronically on Pay.gov; small organizations that meet the gross receipts and asset limits may use the 1023-EZ, and the same 27-month rule applies to it."
  },
  {
    "id": "exempt-4",
    "section": "exempt",
    "topic": "Annual filing failure",
    "difficulty": "medium",
    "q": "A small 501(c)(3) with gross receipts normally under the e-Postcard threshold has filed no annual return or notice for three consecutive years. What is the consequence?",
    "choices": [
      "Its exemption is automatically revoked, and it must reapply to be reinstated",
      "Nothing; organizations below the Form 990-EZ thresholds have no filing duty",
      "A late-filing penalty applies, but exemption continues as long as it was never notified",
      "It must file Form 990-T for the missed years before any penalty is assessed"
    ],
    "answer": 0,
    "explain": "Section 6033(j) revokes exemption automatically when an organization fails to file its required annual return or notice for three consecutive years, effective on the due date of the third one, and the IRS publishes the revocation. Which form is required depends on size: the Form 990-N e-Postcard for the smallest organizations, Form 990-EZ for those below the gross receipts and total assets thresholds, and the full Form 990 otherwise, but even e-Postcard filers must file something. Churches are the main group excused from filing. Reinstatement requires a new exemption application, with retroactive relief available under Rev. Proc. 2014-11."
  },
  {
    "id": "exempt-5",
    "section": "exempt",
    "topic": "Classifying two benefits",
    "difficulty": "medium",
    "q": "A 501(c)(3) pays its founder-president's personal mortgage for a year, outside any compensation arrangement. Separately, its free job-training program enlarges a nearby employer's hiring pool. How are these characterized?",
    "choices": [
      "The mortgage payments are private inurement; the hiring effect is incidental private benefit",
      "Both are private inurement because each enriches someone other than the public",
      "Both are permissible private benefit because the charity's programs continue to operate",
      "The mortgage payments are reasonable compensation if disclosed on Form 990; the hiring effect is inurement"
    ],
    "answer": 0,
    "explain": "An uncompensated personal benefit to an insider such as the founder is private inurement, which is prohibited absolutely and is also an excess benefit transaction under §4958; reasonable, properly documented compensation for services is a different matter. Private benefit to outsiders is a problem only when more than incidental, and an employer gaining from a community training program is the incidental kind."
  },
  {
    "id": "exempt-6",
    "section": "exempt",
    "topic": "Sanctions on an overpaid executive",
    "difficulty": "medium",
    "q": "A public charity paid its executive director $350,000 when comparable compensation was $250,000, and the board did not document reasonableness. What initial section 4958 tax does the director owe?",
    "choices": [
      "$25,000",
      "$87,500",
      "$10,000",
      "$200,000"
    ],
    "answer": 0,
    "explain": "The excess benefit is $100,000, and section 4958 imposes an initial tax of 25% of the excess benefit on the disqualified person, here $25,000. If the transaction is not corrected within the taxable period, an additional tax of 200% of the excess benefit ($200,000) applies. Organization managers who knowingly approved it owe 10% of the excess benefit, jointly and severally, capped at $20,000 per transaction; the charity itself owes no section 4958 tax. $87,500 wrongly taxes the entire salary. A board that approves pay in advance using comparability data and documents its decision earns a rebuttable presumption of reasonableness."
  },
  {
    "id": "exempt-7",
    "section": "exempt",
    "topic": "Charity's acknowledgment duties",
    "difficulty": "medium",
    "q": "A donor pays a charity $200 for a dinner whose fair market value is $60. What must the charity provide?",
    "choices": [
      "A written disclosure stating that only $140 is deductible and giving the good-faith value of the dinner",
      "Nothing, because the payment is below the $250 acknowledgment threshold",
      "A contemporaneous written acknowledgment only, with no value disclosure, since meals are de minimis",
      "Form 8283 signed by the charity, because goods were provided in exchange"
    ],
    "answer": 0,
    "explain": "Section 6115 requires a charity receiving a quid pro quo contribution of more than $75 to give a written statement that the deductible amount is limited to the excess over the value of goods or services received, with a good-faith estimate of that value; the penalty is $10 per contribution, up to $5,000 per event. The $250 figure is the donor's substantiation threshold under section 170(f)(8), for which the charity ordinarily supplies a contemporaneous written acknowledgment, but that rule does not switch off the quid pro quo disclosure. Form 8283 concerns noncash gifts by the donor."
  },
  {
    "id": "exempt-8",
    "section": "exempt",
    "topic": "Legislative activity limits",
    "difficulty": "medium",
    "q": "An eligible public charity exempt under 501(c)(3) plans significant legislative lobbying and wants certainty that its exemption is safe. What should it do?",
    "choices": [
      "File Form 5768 to elect the 501(h) expenditure test",
      "Nothing; lobbying is unlimited as long as it avoids political campaigns",
      "Convert to a 501(c)(4), since 501(c)(3) organizations may not lobby at all",
      "Keep lobbying under half of total expenditures, which is automatically insubstantial"
    ],
    "answer": 0,
    "explain": "By default a 501(c)(3) may lobby only if lobbying is not a substantial part of its activities, a facts-and-circumstances test with no safe harbor. Electing under §501(h) on Form 5768 replaces it with a dollar ceiling based on exempt-purpose expenditures; spending over the ceiling draws a 25% excise tax under §4911, and exemption is at risk only if lobbying expenditures over a four-year period exceed 150% of the applicable limits. Churches may not elect, and campaign intervention stays prohibited either way."
  },
  {
    "id": "exempt-9",
    "section": "exempt",
    "topic": "Testing an activity for UBI",
    "difficulty": "medium",
    "q": "A hospital auxiliary runs a sandwich stand for two weeks each year at the state fair, using paid staff and purchased food. Is the net income unrelated business income?",
    "choices": [
      "No, because the activity is not regularly carried on",
      "Yes, because food sales are unrelated to health care",
      "Yes, because paid staff and purchased goods defeat every exclusion",
      "No, because any income used for hospital purposes is substantially related"
    ],
    "answer": 0,
    "explain": "Unrelated business income requires all three conditions in section 512: a trade or business, regularly carried on, and not substantially related to the exempt purpose. Reg. 1.513-1(c) uses this very example: a stand operated for two weeks at a fair is not regularly carried on because comparable commercial food stands operate year round, so the income escapes tax even though it fails the relatedness test. How the profits are spent never makes an activity related, and the volunteer and donated-goods exclusions are irrelevant once the regularity condition fails."
  },
  {
    "id": "exempt-10",
    "section": "exempt",
    "topic": "Church bookstore income",
    "difficulty": "medium",
    "q": "A church runs a year-round bookstore selling newly purchased religious and secular titles to the general public. Unpaid church members perform substantially all the work. How is the income treated?",
    "choices": [
      "Excluded from UBI under the volunteer labor exception",
      "Taxable UBI because the titles were purchased, not donated",
      "Excluded under the convenience exception because members shop there",
      "Taxable UBI because the activity is regularly carried on"
    ],
    "answer": 0,
    "explain": "Section 513(a)(1) excludes any trade or business in which substantially all the work is performed without compensation, so the bookstore's income is not unrelated business income even though it is regular, commercial and sells to the public. The donated-merchandise exception in section 513(a)(3) is a separate rule that protects thrift shops selling contributed goods even with paid staff, and the convenience exception covers sales to members, students, patients or employees, not the general public. Regularity alone never makes income taxable when an exclusion applies."
  },
  {
    "id": "exempt-11",
    "section": "exempt",
    "topic": "Pharmacy sales classification",
    "difficulty": "medium",
    "q": "A hospital pharmacy fills prescriptions for its own patients and also sells over-the-counter goods to walk-in members of the public. Which sales produce unrelated business income?",
    "choices": [
      "Only the walk-in public sales",
      "Only the patient prescription sales",
      "Both, because retail pharmacy is a commercial activity",
      "Neither, because all pharmacy revenue funds hospital care"
    ],
    "answer": 0,
    "explain": "Sales to the hospital's own patients are substantially related to patient care and are also protected by the convenience exception in section 513(a)(2), which covers sales for the convenience of members, students, patients, officers or employees. Sales to the general public have neither protection: they are a regularly carried on trade or business that contributes nothing to the exempt purpose beyond producing revenue, so they are taxed under the revenue rulings on hospital pharmacies. Using the profits for hospital care does not change the result."
  },
  {
    "id": "exempt-12",
    "section": "exempt",
    "topic": "Which university receipt is taxed",
    "difficulty": "easy",
    "q": "An exempt university received dividends, royalties for licensing its logo, rent from a debt-free office building leased to a law firm, and profit from a public car wash it operates. Which is UBTI?",
    "choices": [
      "The car wash profit",
      "The dividends",
      "The logo royalties",
      "The office rent"
    ],
    "answer": 0,
    "explain": "Section 512(b) excludes dividends, interest, royalties and rents from real property from unrelated business taxable income, so the first three receipts are not taxed even though they come from outsiders. A public car wash the university operates is an ordinary unrelated trade or business with no modification to save it. The exclusions can be lost for debt-financed property under §514 and for rent that is really payment for services."
  },
  {
    "id": "exempt-13",
    "section": "exempt",
    "topic": "Leveraged rental property",
    "difficulty": "medium",
    "q": "A charity owns an office building leased to commercial tenants and earns $80,000 of rent. Average acquisition indebtedness is 40% of the building's average adjusted basis. How much rent is unrelated debt-financed income?",
    "choices": [
      "$32,000",
      "$80,000",
      "$48,000",
      "$0"
    ],
    "answer": 0,
    "explain": "Section 514 pulls otherwise excluded rent back into unrelated business taxable income in the proportion that average acquisition indebtedness bears to average adjusted basis: $80,000 x 40% = $32,000, with deductions allowed in the same proportion. The rent exclusion in section 512(b) would give $0 only if the building were debt-free, and the exception for property substantially all (at least 85%) of which is used for exempt purposes does not reach a building leased to commercial tenants. $48,000 inverts the ratio and $80,000 ignores it."
  },
  {
    "id": "exempt-14",
    "section": "exempt",
    "topic": "Computing the tax",
    "difficulty": "medium",
    "q": "An exempt association organized as a corporation has $8,000 of unrelated business taxable income after the $1,000 specific deduction. What is its unrelated business income tax?",
    "choices": [
      "$1,680",
      "$1,470",
      "$2,960",
      "$0"
    ],
    "answer": 0,
    "explain": "An exempt corporation or association pays the 21% corporate rate on its unrelated business taxable income: 21% of $8,000 is $1,680, reported on Form 990-T, which is required once gross unrelated business income reaches $1,000. The $1,000 specific deduction is already taken, so $1,470 double-counts it; $2,960 applies the top individual rate, whereas exempt trusts use the trust rate schedule; and exemption does not cover unrelated income, so $0 fails."
  },
  {
    "id": "exempt-15",
    "section": "exempt",
    "topic": "Multiple unrelated activities",
    "difficulty": "medium",
    "q": "A museum's unrelated parking garage earned $40,000 and its unrelated catering business lost $15,000 this year. What is the museum's unrelated business taxable income before the specific deduction?",
    "choices": [
      "$40,000",
      "$25,000",
      "$39,000",
      "$0"
    ],
    "answer": 0,
    "explain": "Section 512(a)(6) requires an organization with more than one unrelated trade or business to compute UBTI separately for each, identified under the regulations by two-digit NAICS code, and a loss in one silo cannot reduce the income of another. The garage's $40,000 is taxed in full and the catering loss carries forward to offset only future catering income. $25,000 is the pre-2018 netted answer, $39,000 applies the specific deduction the question excludes, and $0 misreads the exempt status."
  },
  {
    "id": "exempt-16",
    "section": "exempt",
    "topic": "Corporate support payments",
    "difficulty": "medium",
    "q": "A company pays a charity $20,000 toward its annual gala. Which return benefit would make the payment unrelated business income rather than a qualified sponsorship payment?",
    "choices": [
      "An announcement at the gala urging guests to buy the company's product",
      "Display of the company's name, logo and slogan on event banners",
      "Listing the company's product lines and contact information in the program",
      "Designation as the gala's exclusive sponsor in all of its publicity"
    ],
    "answer": 0,
    "explain": "Under section 513(i) a qualified sponsorship payment is one for which the sponsor receives no substantial return benefit beyond use or acknowledgment of its name, logo, slogans, product lines or contact information, and such payments are excluded from unrelated business income. Advertising is different: qualitative or comparative language, price or savings information, or an endorsement or inducement to buy turns the acknowledgment into a taxable advertising service. Being named exclusive sponsor is still an acknowledgment; only an exclusive provider arrangement that limits competing products is a substantial return benefit."
  },
  {
    "id": "exempt-17",
    "section": "exempt",
    "topic": "Foundation excise taxes",
    "difficulty": "medium",
    "q": "A domestic nonoperating private foundation earned $400,000 of net investment income and, with no distribution carryovers, made no qualifying distributions this year or the next. What is its excise tax exposure?",
    "choices": [
      "The 1.39% tax on net investment income plus the tax on undistributed income",
      "Only the 1.39% tax, because grant timing is within the trustees' discretion",
      "Only the undistributed income tax, because investment income is exempt",
      "None; private foundations are taxed only on unrelated business income"
    ],
    "answer": 0,
    "explain": "Private foundations pay a flat 1.39% excise tax on net investment income under §4940 every year. Section 4942 separately requires a nonoperating foundation to pay out roughly 5% of its noncharitable-use assets by the end of the following year, and with no carryovers the shortfall draws a 30% initial tax on the undistributed amount, rising to 100% if uncorrected. Self-dealing and jeopardizing investments carry further foundation taxes, but nothing here triggers them."
  },
  {
    "id": "exempt-18",
    "section": "exempt",
    "topic": "Public charity classification",
    "difficulty": "medium",
    "q": "Over its five-year computation period, a charity's total support was $600,000, of which $180,000 qualifies as public support. What is its status under section 509(a)(1)?",
    "choices": [
      "It misses one-third but may qualify under the 10% facts-and-circumstances test",
      "It passes, because public support of 25% or more of total support is enough",
      "It fails, and becomes a private foundation from the first day of the following year",
      "It passes, because the test looks only at the current year's support"
    ],
    "answer": 0,
    "explain": "The §170(b)(1)(A)(vi) public support test requires public support of at least one-third of total support over the five-year period ending with the current year; here $180,000 / $600,000 is 30%, short of 33.3%. An organization at 10% or more can still be a public charity if the facts and circumstances show it is organized and operated to attract public support, so it is not automatically a private foundation. The 25% figure and the one-year framing are both wrong."
  },
  {
    "id": "formliq-1",
    "section": "formliq",
    "topic": "Section 351 control",
    "difficulty": "medium",
    "q": "What control must transferors hold immediately after a section 351 transfer for nonrecognition to apply?",
    "choices": [
      "At least 80% of voting power, with nonvoting stock disregarded in the count",
      "At least 80% of voting power and 80% of each class of nonvoting stock",
      "100% of the outstanding stock",
      "At least two-thirds of the fair market value of all stock"
    ],
    "answer": 1,
    "explain": "Section 351 requires the transferring group to control at least 80% of total combined voting power and 80% of the shares of each class of nonvoting stock immediately after the exchange. Falling short makes the entire transfer taxable."
  },
  {
    "id": "formliq-2",
    "section": "formliq",
    "topic": "Boot in a section 351 exchange",
    "difficulty": "medium",
    "q": "In a section 351 exchange, a shareholder with a $60,000 realized gain on the transferred property receives stock plus $15,000 cash. What gain is recognized?",
    "choices": [
      "$15,000",
      "$60,000",
      "$45,000",
      "$0"
    ],
    "answer": 0,
    "explain": "In a section 351 exchange, gain is recognized only to the extent of boot, the cash or other property received besides stock, and never more than the realized gain. Boot of $15,000 is less than the $60,000 realized gain, so $15,000 is recognized. Recognizing the full $60,000 ignores the nonrecognition rule, and $0 ignores the boot."
  },
  {
    "id": "formliq-3",
    "section": "formliq",
    "topic": "Liabilities assumed in a section 351 exchange",
    "difficulty": "medium",
    "q": "A shareholder transfers property with a $30,000 basis subject to a $50,000 mortgage the corporation assumes, in an otherwise qualifying section 351 exchange. What is the consequence?",
    "choices": [
      "No gain, because liability relief is never boot",
      "$50,000 of gain is recognized",
      "$20,000 of gain is recognized under section 357(c)",
      "The exchange fails section 351 entirely"
    ],
    "answer": 2,
    "explain": "Liability relief is generally not boot, but section 357(c) forces gain when liabilities assumed exceed the aggregate basis of the property transferred. The stock basis is then zero."
  },
  {
    "id": "formliq-4",
    "section": "formliq",
    "topic": "Complete liquidation",
    "difficulty": "medium",
    "q": "A corporation completely liquidates and distributes assets to its individual shareholders. What does the corporation recognize?",
    "choices": [
      "Nothing, because the corporation is ceasing to exist",
      "Gain but not loss, as with a nonliquidating distribution of property",
      "Both gain and loss, as if the assets were sold at fair market value",
      "Only recapture income"
    ],
    "answer": 2,
    "explain": "Under section 336 a liquidating corporation recognizes both gain and loss as though it had sold the assets at fair market value, though losses on distributions to related parties can be limited. Shareholders separately compute capital gain or loss under section 331."
  },
  {
    "id": "formliq-5",
    "section": "formliq",
    "topic": "Subsidiary liquidation",
    "difficulty": "medium",
    "q": "A parent owning 90% of a subsidiary liquidates it and receives the subsidiary's assets. What is the tax result to the parent?",
    "choices": [
      "Capital gain equal to the excess of asset value over stock basis",
      "No gain or loss, with the subsidiary's asset bases carrying over",
      "Ordinary income equal to the subsidiary's accumulated earnings",
      "Gain only to the extent of liabilities assumed"
    ],
    "answer": 1,
    "explain": "Section 332 gives nonrecognition to a parent owning at least 80% of a liquidating subsidiary, and section 334(b) carries over the subsidiary's asset bases. The subsidiary likewise recognizes no gain on distributions to that parent."
  },
  {
    "id": "formliq-6",
    "section": "formliq",
    "topic": "Shareholder's basis after incorporation",
    "difficulty": "medium",
    "q": "In a qualifying section 351 exchange, a shareholder transfers land with a $50,000 basis subject to a $20,000 mortgage the corporation assumes, receiving only stock. What is the shareholder's stock basis?",
    "choices": [
      "$30,000",
      "$50,000",
      "$70,000",
      "$20,000"
    ],
    "answer": 0,
    "explain": "Under section 358 the shareholder's basis in the stock is the basis of the property transferred, plus any gain recognized, minus boot received and minus liabilities the corporation assumes, which section 358(d) treats as money received: $50,000 - $20,000 = $30,000. No gain is recognized because the $20,000 liability does not exceed the $50,000 basis, so section 357(c) is not triggered. $50,000 ignores the liability and $70,000 adds it instead of subtracting."
  },
  {
    "id": "formliq-7",
    "section": "formliq",
    "topic": "Corporation's basis in contributed assets",
    "difficulty": "medium",
    "q": "A shareholder contributes equipment with a $30,000 adjusted basis to a controlled corporation and recognizes $8,000 of gain because of cash received. What is the corporation's basis in the equipment?",
    "choices": [
      "$38,000",
      "$30,000",
      "$22,000",
      "The equipment's fair market value"
    ],
    "answer": 0,
    "explain": "Section 362(a) gives the corporation a carryover basis in property received in a section 351 exchange, increased by any gain the transferor recognized: $30,000 + $8,000 = $38,000. A fair market value basis applies only to taxable acquisitions, and $22,000 subtracts the gain instead of adding it. Section 362(e)(2) can limit the basis of property with a net built-in loss, but there is none here."
  },
  {
    "id": "formliq-8",
    "section": "formliq",
    "topic": "Property versus services for stock",
    "difficulty": "medium",
    "q": "Ann transfers property for 75% of a new corporation's stock while Bob receives the other 25% solely for legal services. What are the tax results?",
    "choices": [
      "Ann's transfer is taxable because property transferors hold only 75%; Bob has ordinary income",
      "Both qualify under section 351 because together they own 100% after the exchange",
      "Ann's transfer qualifies; Bob recognizes capital gain on the stock received",
      "Neither recognizes income because stock received in a formation is never taxable"
    ],
    "answer": 0,
    "explain": "Section 351(d) says stock issued for services is not issued for property, so Bob is not part of the transferor group and Ann alone must meet the 80% control test; with 75% she falls short and recognizes her realized gain. Bob has ordinary compensation income equal to the fair market value of the stock, which becomes his basis. Had Bob also transferred property of more than token value, all of his stock could have counted toward control."
  },
  {
    "id": "formliq-9",
    "section": "formliq",
    "topic": "Forming a partnership",
    "difficulty": "medium",
    "q": "Carla contributes investment land she has held for three years to a partnership in exchange for a 10% interest. Which statement is correct?",
    "choices": [
      "No gain is recognized, and her holding period for the interest includes the three years",
      "Gain is recognized because a 10% interest fails the 80% control requirement",
      "No gain is recognized, but the holding period of her interest starts at contribution",
      "Gain is recognized to the extent the land's value exceeds 10% of partnership capital"
    ],
    "answer": 0,
    "explain": "Section 721 gives nonrecognition on a contribution of property to a partnership for an interest with no control requirement, unlike section 351 for corporations. Because the land is a capital asset, section 1223(1) tacks its holding period onto the partnership interest, and the partnership takes a carryover basis under section 723 with the same tacked holding period. The size of the interest relative to capital is irrelevant to recognition."
  },
  {
    "id": "formliq-10",
    "section": "formliq",
    "topic": "Shareholder in a liquidation",
    "difficulty": "medium",
    "q": "In a complete liquidation, Dev receives property worth $120,000 for stock he bought five years ago for $45,000. The corporation is not his subsidiary. What does Dev recognize?",
    "choices": [
      "$75,000 long-term capital gain",
      "$75,000 ordinary income",
      "$120,000 dividend income",
      "Nothing, taking a $45,000 basis in the property"
    ],
    "answer": 0,
    "explain": "Section 331 treats amounts received in complete liquidation as full payment in exchange for the stock, so Dev has a capital gain of $120,000 - $45,000 = $75,000, long-term because the stock was held more than a year, and section 334(a) gives him a $120,000 fair market value basis in the property. Dividend treatment applies to nonliquidating distributions, and nonrecognition with carryover basis under section 332 is reserved for a corporate parent owning at least 80%."
  },
  {
    "id": "formliq-11",
    "section": "formliq",
    "topic": "Losses in liquidation",
    "difficulty": "medium",
    "q": "A liquidating corporation distributes a parcel with a built-in loss only to its 60% shareholder, while the other shareholders receive cash. How much of the loss may the corporation recognize?",
    "choices": [
      "None, because the distributee is a related person and the distribution is not pro rata",
      "All, because section 336 treats liquidations as sales at fair market value",
      "Only the portion attributable to the unrelated 40% shareholders",
      "All, unless the parcel was contributed within the preceding five years"
    ],
    "answer": 0,
    "explain": "Section 336(d)(1) denies the liquidating corporation any loss on a distribution to a related person under section 267 (here a more-than-50% shareholder) if the distribution is not pro rata or the property is disqualified property acquired in a section 351 exchange or as a capital contribution within five years. Either condition alone disallows the whole loss on that property. Section 336(d)(2) is a separate rule that reduces built-in loss on property contributed with a principal purpose of recognizing loss, presumed for contributions within two years of the plan, even on distributions to unrelated shareholders."
  },
  {
    "id": "formliq-12",
    "section": "formliq",
    "topic": "Property received at partnership exit",
    "difficulty": "medium",
    "q": "Eli's outside basis in his partnership interest is $50,000. In complete liquidation of the interest he receives only land with an inside basis of $30,000. What is Eli's basis in the land?",
    "choices": [
      "$50,000",
      "$30,000",
      "$20,000",
      "The land's fair market value"
    ],
    "answer": 0,
    "explain": "In a liquidating distribution section 732(b) gives the partner a substituted basis: the property takes the partner's remaining outside basis, reduced by any money received, so the land's basis is $50,000. No gain or loss is recognized because no money was distributed, and loss is allowed only when solely money, unrealized receivables and inventory are received. The $30,000 carryover answer is the rule for current (nonliquidating) distributions under section 732(a)."
  },
  {
    "id": "cplan-1",
    "section": "cplan",
    "topic": "NOL carryforward use",
    "difficulty": "medium",
    "q": "A C corporation has $100,000 of 2026 taxable income before its NOL deduction and a $150,000 NOL carryforward from 2024. What is the maximum NOL deduction, assuming no other limitations?",
    "choices": [
      "$80,000",
      "$100,000",
      "$150,000",
      "$120,000"
    ],
    "answer": 0,
    "explain": "A post-2017 NOL deduction is limited to 80% of taxable income computed without it: 80% of $100,000 is $80,000, and the remaining $70,000 carries forward indefinitely. $100,000 ignores the 80% limit, $150,000 deducts the whole NOL, and $120,000 applies the 80% to the NOL instead of to taxable income."
  },
  {
    "id": "cplan-2",
    "section": "cplan",
    "topic": "Acquiring a loss corporation",
    "difficulty": "medium",
    "q": "A buyer acquires all the stock of a corporation holding large NOL carryforwards, an ownership change. Which figure caps the NOLs the corporation may use each year afterward?",
    "choices": [
      "The loss corporation's stock value times the long-term tax-exempt rate",
      "The acquiring corporation's taxable income times 80%",
      "The NOL balance divided by the 20-year carryforward period",
      "The loss corporation's taxable income in the change year, times the 21% rate"
    ],
    "answer": 0,
    "explain": "After an ownership change (more than a 50 percentage point shift among 5% shareholders within three years), section 382 limits pre-change losses to the value of the old loss corporation's stock times the federal long-term tax-exempt rate, roughly the return the stock would earn in tax-exempt bonds. A buyer should value the NOLs at the present value of those limited deductions, not at 21% of face. The 80% limit on NOL deductions still applies on top, and post-2017 NOLs have no 20-year life."
  },
  {
    "id": "cplan-3",
    "section": "cplan",
    "topic": "Multistate operations",
    "difficulty": "medium",
    "q": "A corporation has $2,000,000 of apportionable business income. Its sales give it a 30% apportionment factor in State X. How much of the income does State X tax?",
    "choices": [
      "$600,000",
      "$2,000,000",
      "$1,400,000",
      "$200,000"
    ],
    "answer": 0,
    "explain": "Once nexus exists, a state taxes only the share of business income its formula apportions to it: $2,000,000 times 30% is $600,000, and State X applies its rate to that amount. Comparing states means comparing apportionment factors and rates together, not rates alone. $2,000,000 taxes all the income in State X, $1,400,000 is the 70% that belongs to other states, and $200,000 treats the single sales factor as one of three equally weighted factors."
  },
  {
    "id": "cplan-4",
    "section": "cplan",
    "topic": "Year-end timing",
    "difficulty": "easy",
    "q": "A calendar-year corporation learns its state will cut its corporate income tax rate starting next year. Which year-end move lowers its combined tax over the two years?",
    "choices": [
      "Accelerate deductible expenses into this year and defer income to next year",
      "Accelerate income into this year and push deductible expenses into next year",
      "Prepay next year's estimated tax installments before year-end",
      "Elect out of bonus depreciation this year to move deductions into next year"
    ],
    "answer": 0,
    "explain": "When next year's rate will be lower, deductions are worth more this year and income costs less next year, so the corporation defers income and accelerates deductions, within the limits of its accounting method. The opposite moves make sense when a rate increase is coming. Prepaying estimated tax changes only when cash is paid, not what is owed, and electing out of bonus depreciation shifts deductions into the lower-rate year, where they save less."
  },
  {
    "id": "cplan-5",
    "section": "cplan",
    "topic": "Corporate estimated payments",
    "difficulty": "medium",
    "q": "A large corporation earns most of its income in the fourth quarter. How can it keep its first three installments low without an underpayment penalty?",
    "choices": [
      "Use the annualized income installment method for each of its installments",
      "Base all four installments on 100% of last year's tax, the prior-year safe harbor",
      "Pay 90% of the expected current-year tax in four equal installments",
      "File Form 7004 to extend the due dates of the first three installments"
    ],
    "answer": 0,
    "explain": "Section 6655 lets any corporation compute an installment on income actually earned through the period, annualized, so a seasonal business owes little early and catches up in the fourth installment. A large corporation (taxable income of $1,000,000 or more in any of the three prior years) may use the prior-year safe harbor only for its first installment and must true up in the second. Corporations must reach 100%, not the individual 90%, and paying everything with the return draws the penalty for each missed installment."
  },
  {
    "id": "cplan-6",
    "section": "cplan",
    "topic": "Adding property to an existing corporation",
    "difficulty": "medium",
    "q": "Three years after forming her wholly owned corporation, the sole shareholder transfers appreciated land to it in exchange for additional shares. What is the tax result?",
    "choices": [
      "No gain, since the transferor controls the corporation after the exchange",
      "Gain is recognized, since section 351 applies only at formation",
      "Gain is recognized, because receiving additional shares for property is a sale of the land",
      "No gain is recognized, but the land's basis in the corporation's hands steps up to fair market value"
    ],
    "answer": 0,
    "explain": "Section 351 is not limited to formation; it applies to any transfer of property solely for stock if the transferors own at least 80% of the voting power and of each class of nonvoting stock immediately after. A sole shareholder always meets the test, so the land goes in tax-free and the corporation takes her basis. A later contributor who alone would own less than 80% needs the existing shareholders to join the transfer with more than token property."
  },
  {
    "id": "cplan-7",
    "section": "cplan",
    "topic": "Paying the owner-employee",
    "difficulty": "medium",
    "q": "The sole owner-employee of a profitable C corporation wants $200,000 more out of it this year; total compensation would remain reasonable. Compared with a dividend, what does paying it as salary do?",
    "choices": [
      "Gives the corporation a deduction but subjects the payment to payroll taxes",
      "Avoids both the corporate income tax and payroll taxes on the amount",
      "Taxes the owner at the lower qualified dividend rate on the amount",
      "Leaves the corporation's taxable income unchanged but keeps the amount free of payroll taxes"
    ],
    "answer": 0,
    "explain": "Reasonable salary is deductible by the corporation and taxed once, as ordinary income, to the owner, but both sides pay FICA on it. A dividend is not deductible, so it bears the 21% corporate tax and then the qualified dividend rate, with no payroll tax. Which costs less overall depends on the owner's bracket and how much of the salary sits above the Social Security wage base; unreasonable compensation is recharacterized as a dividend."
  },
  {
    "id": "cplan-8",
    "section": "cplan",
    "topic": "Buying out a departing shareholder",
    "difficulty": "medium",
    "q": "A departing shareholder with a $300,000 stock basis receives $500,000 from the corporation for all her shares, a complete termination of interest. What does she report?",
    "choices": [
      "$200,000 of capital gain",
      "$500,000 of dividend income",
      "$500,000 of capital gain",
      "$200,000 of ordinary dividend income"
    ],
    "answer": 0,
    "explain": "A redemption that completely terminates the shareholder's interest qualifies for sale or exchange treatment under section 302(b)(3), so her $300,000 basis offsets the proceeds and only $200,000 is capital gain. Had family attribution made the payment fail the redemption tests, the whole $500,000 would be a dividend to the extent of earnings and profits and her unrecovered basis would shift to the related shareholder's stock. Planning the exit as a qualifying redemption, including waiving family attribution under section 302(c)(2) where needed, is what preserves the basis offset."
  },
  {
    "id": "cplan-9",
    "section": "cplan",
    "topic": "Accumulated earnings tax",
    "difficulty": "medium",
    "q": "A closely held corporation keeps retaining its earnings and pays no dividends. What best protects it from the accumulated earnings tax?",
    "choices": [
      "Written plans for the funds, such as expansion or retiring debt",
      "Investing the retained funds in marketable securities until a use appears",
      "Lending the retained funds to the majority shareholder at a market rate",
      "Reporting the retained amount as additional paid-in capital on the balance sheet"
    ],
    "answer": 0,
    "explain": "The accumulated earnings tax applies to earnings retained beyond the reasonable needs of the business, so documented, definite plans (expansion, equipment replacement, debt retirement, working capital under the Bardahl formula) are the defense. Passive investments and loans to shareholders are the classic evidence that the accumulation is unreasonable. Relabeling retained earnings on the balance sheet changes nothing for tax purposes, and the $250,000 credit covers only the first dollars."
  },
  {
    "id": "cplan-10",
    "section": "cplan",
    "topic": "Small business stock",
    "difficulty": "medium",
    "q": "A founder received qualified small business stock at original issue in August 2025 and plans to sell it in September 2029 for a $2,000,000 gain. How much gain would be excluded?",
    "choices": [
      "$1,500,000",
      "$1,000,000",
      "$2,000,000",
      "$0"
    ],
    "answer": 0,
    "explain": "For QSBS issued after 4 July 2025, section 1202 as amended by the OBBBA excludes 50% of gain after three years, 75% after four years and 100% after five years, so a sale just over four years after issue excludes 75% of $2,000,000, or $1,500,000. The same law raised the per-issuer cap to $15 million and the corporation's gross asset test to $75 million. $1,000,000 uses the three-year tier, $2,000,000 needs a five-year hold, and $0 would apply only to a sale before three years."
  },
  {
    "id": "cplan-11",
    "section": "cplan",
    "topic": "Choice of entity",
    "difficulty": "medium",
    "q": "Owners in the top individual bracket plan to reinvest all of a new business's profits for years and take nothing out. Why might a C corporation beat a pass-through?",
    "choices": [
      "Earnings kept inside the business bear only the 21% corporate rate until distributed",
      "C corporation earnings qualify for the 20% qualified business income deduction",
      "A C corporation's early losses pass through to the owners at their 37% rate",
      "Dividends paid to the owners later are deductible by the corporation"
    ],
    "answer": 0,
    "explain": "Pass-through income is taxed to the owners each year at individual rates, up to 37% less any QBI deduction, whether or not cash is distributed, while a C corporation pays 21% and the shareholder-level tax waits until dividends are paid or shares sold. The longer earnings stay inside, the more that deferral is worth; paying profits out currently usually erases the advantage, since the dividend tax lands on top of the 21%. The QBI deduction belongs to pass-through owners, dividends are never deductible, and C corporation losses stay inside the corporation."
  },
  {
    "id": "cplan-12",
    "section": "cplan",
    "topic": "Depreciation elections",
    "difficulty": "medium",
    "q": "A corporation wants to preserve some equipment deductions for future years. Which election lets it decline otherwise available bonus depreciation?",
    "choices": [
      "Elect out of bonus depreciation for the entire class of property on a timely return",
      "Elect out of bonus depreciation for that one asset, leaving the rest of its class",
      "Elect the alternative depreciation system, which removes the equipment from bonus eligibility",
      "Expense the equipment under section 179 and carry the excess forward"
    ],
    "answer": 0,
    "explain": "The election out under section 168(k)(7) is made by class of property for everything in that class placed in service that year, on a timely filed return; regular MACRS depreciation then applies. It cannot be made asset by asset, electing ADS does not remove property from bonus eligibility (only property required to use ADS is excluded), and section 179 accelerates deductions rather than preserving them. Whether electing out saves tax depends on the projected years; an expected loss this year alone does not settle it."
  },
  {
    "id": "flowplan-1",
    "section": "flowplan",
    "topic": "Asset sales after a C-to-S conversion",
    "difficulty": "medium",
    "q": "A C corporation converts to S status and sells appreciated property two years later. What is the consequence?",
    "choices": [
      "No entity-level tax, because S corporations are pass-throughs",
      "A corporate-level built-in gains tax on the appreciation existing at conversion",
      "The election terminates automatically",
      "The gain is taxed twice, at both entity and shareholder level, without limit"
    ],
    "answer": 1,
    "explain": "The built-in gains tax imposes the 21% corporate rate on net recognized built-in gain during the five-year recognition period following conversion. Gain accruing after conversion escapes the entity-level tax."
  },
  {
    "id": "flowplan-2",
    "section": "flowplan",
    "topic": "Selling assets after converting to S",
    "difficulty": "medium",
    "q": "Three years after converting from C status, an S corporation recognizes $400,000 of net built-in gain; its taxable income computed as a C corporation is $250,000. How much is subject to the built-in gains tax?",
    "choices": [
      "$250,000",
      "$400,000",
      "$150,000",
      "$0"
    ],
    "answer": 0,
    "explain": "Section 1374 taxes, at 21%, the lesser of net recognized built-in gain or the corporation's taxable income computed as if it were still a C corporation, so $250,000 is the taxable amount and the tax is $52,500. The $150,000 of built-in gain left untaxed by the income limit carries forward and is taxed in a later year within the five-year recognition period. $400,000 ignores the income limit, and $0 would be right only after the five years have run."
  },
  {
    "id": "flowplan-3",
    "section": "flowplan",
    "topic": "Losing the S election",
    "difficulty": "medium",
    "q": "On 1 July an S corporation shareholder sells his shares to a partnership, ending the election that day. What follows for the corporation?",
    "choices": [
      "It is now a C corporation and cannot re-elect S status for five years without IRS consent",
      "It may re-elect S status for next year by filing a new Form 2553 by 15 March of that year",
      "The election is treated as never having been in effect for the whole year",
      "It must liquidate and reincorporate before it can regain pass-through treatment"
    ],
    "answer": 0,
    "explain": "An ineligible shareholder such as a partnership terminates the election on the day of the transfer, splitting the year into an S short year and a C short year, and section 1362(g) bars a new election for five years unless the IRS consents, which it generally grants only for inadvertent terminations. During the post-termination transition period, generally one year, cash distributions still come out of AAA tax-free to the extent of stock basis. The termination does not reach back to 1 January, and no liquidation is required."
  },
  {
    "id": "flowplan-4",
    "section": "flowplan",
    "topic": "Funding an S corporation loss",
    "difficulty": "medium",
    "q": "An S corporation shareholder needs $50,000 more basis to deduct this year's loss. Does lending the corporation the money work as well as contributing it to capital?",
    "choices": [
      "Yes; a bona fide direct loan creates debt basis that absorbs the loss",
      "No; only a capital contribution creates basis in the year made",
      "Yes, but the loss reduces her debt basis before her stock basis",
      "No; a loan adds basis only as the corporation repays it"
    ],
    "answer": 0,
    "explain": "A bona fide direct loan from the shareholder creates debt basis under section 1366(d), and a contribution creates stock basis; either lets her deduct the loss this year. Losses reduce stock basis first and debt basis only after stock basis is exhausted, and a guarantee of a bank loan creates no basis until she pays on it. The difference shows up later: repayment of a loan whose basis was reduced by losses produces income, capital gain if the note is written and ordinary if open account."
  },
  {
    "id": "flowplan-5",
    "section": "flowplan",
    "topic": "Ordering distributions",
    "difficulty": "medium",
    "q": "An S corporation still holds accumulated E&P from its C years and now earns substantial rent and interest. Why would it elect to source distributions from E&P before AAA?",
    "choices": [
      "Purging E&P ends the excess passive income tax and the termination risk it carries",
      "Distributions sourced from E&P are tax-free to the shareholders",
      "The election lets shareholders defer dividend income until the entire AAA is exhausted",
      "The election avoids the built-in gains tax on later asset sales"
    ],
    "answer": 0,
    "explain": "Passive investment income over 25% of gross receipts triggers the section 1375 tax, and three consecutive such years terminate the election, but only while the corporation has accumulated E&P. Under section 1368(e)(3), with every distributee shareholder's consent, distributions are treated as coming from E&P first; the shareholders take dividend income now, and once E&P is gone both the tax and the termination risk disappear. A deemed dividend election does the same without paying out cash. The default order, AAA first, is what defers dividends."
  },
  {
    "id": "flowplan-6",
    "section": "flowplan",
    "topic": "Contributing property to a partnership",
    "difficulty": "medium",
    "q": "A partner contributes equipment with a $30,000 built-in loss to an equal two-person partnership, which later sells it at that same lower value. Who deducts the loss?",
    "choices": [
      "Only the contributing partner, under section 704(c)",
      "Each partner equally, under the partnership agreement",
      "No one; the built-in loss disappears on contribution under section 721",
      "The noncontributing partner, who bears the economic loss on the sale"
    ],
    "answer": 0,
    "explain": "Section 704(c) sends pre-contribution gain or loss back to the contributing partner, and section 704(c)(1)(C) goes further for built-in losses: only the contributor may ever use it, and the other partners treat the property's basis as its contribution-date value. The loss is deferred, not lost, but a partner who wants the deduction now does better to sell the property himself and contribute cash. Contributing appreciated property defers the gain but keeps it with the contributor the same way."
  },
  {
    "id": "flowplan-7",
    "section": "flowplan",
    "topic": "Paying a service partner",
    "difficulty": "medium",
    "q": "A general partner who runs the business will receive $120,000 a year, either as a guaranteed payment or as a larger distributive share of profits. Which statement is correct?",
    "choices": [
      "The guaranteed payment is fixed regardless of profits and is excluded from QBI",
      "The distributive share of a general partner is exempt from self-employment tax, unlike the payment",
      "The guaranteed payment is reported in the year received rather than when the partnership year ends",
      "Both are received tax-free to the extent of the partner's outside basis"
    ],
    "answer": 0,
    "explain": "A section 707(c) guaranteed payment is paid without regard to income, so the partner gets certainty and the partnership a deduction, but it is ordinary income subject to self-employment tax and is excluded from QBI. A distributive share rises and falls with profits, is also self-employment income for a general partner, but can qualify for the 20% QBI deduction and is reported in the year the partnership year ends. Neither is a distribution, so outside basis does not shelter either one."
  },
  {
    "id": "flowplan-8",
    "section": "flowplan",
    "topic": "Planning a current distribution",
    "difficulty": "medium",
    "q": "A partner with a $20,000 outside basis will receive a $35,000 current distribution, either cash or land of that value; no special distribution rules apply. Compared with the land, what does taking cash do?",
    "choices": [
      "Triggers $15,000 of capital gain that the land would not",
      "Triggers $15,000 of ordinary income that the land would not",
      "Triggers the same $15,000 of capital gain the land would",
      "Triggers nothing; neither is taxed until her interest is liquidated"
    ],
    "answer": 0,
    "explain": "Money distributed in excess of outside basis is capital gain under section 731(a): $35,000 less $20,000 is $15,000. Property other than money generally triggers no gain on a current distribution; the partner takes the land at a basis limited to her $20,000 outside basis under section 732(a) and defers the rest. Marketable securities count as money for this purpose, so they are no substitute for the land."
  },
  {
    "id": "flowplan-9",
    "section": "flowplan",
    "topic": "Retiring from a partnership",
    "difficulty": "medium",
    "q": "A general partner retires from a consulting partnership in which capital is not a material income-producing factor. The partnership pays him for his share of unrealized receivables. How are those payments taxed?",
    "choices": [
      "Ordinary income under section 736(a)",
      "Capital gain under section 736(b)",
      "Capital gain, since liquidating an interest is a sale or exchange",
      "Tax-free to the extent of his outside basis, then capital gain"
    ],
    "answer": 0,
    "explain": "When capital is not a material income-producing factor and the retiring partner was a general partner, section 736(a) treats payments for his share of unrealized receivables, and for goodwill unless the agreement provides for it, as ordinary income: a distributive share if measured by partnership income, otherwise a guaranteed payment. Either way the amount reduces the income taxed to the remaining partners rather than being a direct deduction they claim. Section 736(b) payments for his share of other property are distributions, capital gain after basis."
  },
  {
    "id": "flowplan-10",
    "section": "flowplan",
    "topic": "Buying into a partnership",
    "difficulty": "medium",
    "q": "A new partner pays $400,000 for a 25% interest when her share of the partnership's inside basis is $250,000. What does a section 754 election do for her?",
    "choices": [
      "Creates a $150,000 basis adjustment in the partnership's assets for her alone",
      "Raises her outside basis from $400,000 to $550,000",
      "Lets the selling partner defer gain on the $150,000 difference until the assets are sold",
      "Steps up every partner's share of inside basis by $150,000 on the partnership's books"
    ],
    "answer": 0,
    "explain": "With a section 754 election in effect, section 743(b) gives the buyer a special basis adjustment equal to her $400,000 outside basis minus her $250,000 share of inside basis, allocated among the partnership's assets under section 755 and used by her alone. It raises her depreciation or amortization only to the extent it is allocated to assets eligible for those deductions, and it reduces her share of gain when the assets are sold. Her outside basis is already the $400,000 she paid, and the seller's gain is unaffected."
  },
  {
    "id": "flowplan-11",
    "section": "flowplan",
    "topic": "Allocating a loss",
    "difficulty": "medium",
    "q": "An equal two-person partnership expects a loss this year. One partner has high outside income; the other has none. May the agreement allocate most of the loss to the high-income partner?",
    "choices": [
      "Yes, if the allocation has substantial economic effect, tracked through capital accounts",
      "No; a loss allocation must match the ratio used to share that year's profits",
      "Yes, as long as both partners consent on the partnership return",
      "No; special allocations are permitted only for built-in gain or loss on contributed property under section 704(c)"
    ],
    "answer": 0,
    "explain": "Section 704(b) respects a special allocation that has substantial economic effect: the partnership keeps capital accounts under the regulations, liquidates according to them, and the partner allocated the loss must restore a deficit or be subject to a qualified income offset, so he actually bears the economic loss. If the allocation merely shifts tax consequences and will be reversed later, the IRS reallocates by the partners' interests. Consent alone is not enough, and section 704(c) governs only contributed property."
  },
  {
    "id": "flowplan-12",
    "section": "flowplan",
    "topic": "Choosing a pass-through form",
    "difficulty": "medium",
    "q": "Two professionals forming an equal venture expect substantial profits and want to minimize their total tax. Why might an S corporation serve them better than a partnership?",
    "choices": [
      "Pass-through income above a reasonable salary avoids self-employment tax",
      "The S corporation can allocate losses to whichever owner can use them",
      "Entity-level borrowing would add to each owner's stock basis",
      "The S corporation's cash distributions are taxed at qualified dividend rates"
    ],
    "answer": 0,
    "explain": "S corporation shareholders pay FICA only on their wages, and the remaining pass-through income is neither wages nor self-employment income, whereas general partners pay self-employment tax on their whole distributive share plus guaranteed payments. The price is rigidity: an S corporation must allocate every item pro rata by shares, and only direct shareholder loans, never entity debt, create basis, while a partnership can specially allocate and includes partnership liabilities in outside basis. Neither entity pays the 21% tax, and the IRS polices salaries set unreasonably low."
  },
  {
    "id": "dispo-1",
    "section": "dispo",
    "topic": "Section 1231 netting",
    "difficulty": "medium",
    "q": "A business has a net section 1231 gain for the year with no prior-year 1231 losses. How is it characterized?",
    "choices": [
      "Ordinary income",
      "Long-term capital gain",
      "Short-term capital gain",
      "Tax-exempt to the extent of depreciation"
    ],
    "answer": 1,
    "explain": "Section 1231 gives the best of both worlds: a net gain is long-term capital gain while a net loss is fully deductible ordinary loss. Depreciation recapture is computed first and is always ordinary."
  },
  {
    "id": "dispo-2",
    "section": "dispo",
    "topic": "Section 1231 lookback",
    "difficulty": "medium",
    "q": "A taxpayer has a $40,000 net section 1231 gain this year and had a $15,000 net section 1231 loss two years ago that has not been recaptured. How is this year's gain treated?",
    "choices": [
      "$40,000 long-term capital gain",
      "$15,000 ordinary income and $25,000 long-term capital gain",
      "$40,000 ordinary income",
      "$25,000 ordinary income and $15,000 long-term capital gain"
    ],
    "answer": 1,
    "explain": "The five-year lookback recharacterizes current net 1231 gain as ordinary to the extent of unrecaptured net 1231 losses from the five preceding years. Only the $25,000 excess gets capital treatment."
  },
  {
    "id": "dispo-3",
    "section": "dispo",
    "topic": "Section 1245 recapture",
    "difficulty": "medium",
    "q": "Equipment on which $70,000 of depreciation has been taken is sold at a $55,000 gain. How is the gain characterized under section 1245?",
    "choices": [
      "$55,000 of ordinary income",
      "$55,000 of section 1231 gain",
      "$55,000 of long-term capital gain",
      "$15,000 ordinary and $40,000 section 1231 gain"
    ],
    "answer": 0,
    "explain": "Section 1245 recaptures gain on depreciable personal property as ordinary income up to the depreciation taken. Here the $55,000 gain is less than the $70,000 of depreciation, so every dollar is ordinary. Section 1231 or capital gain treatment applies only to gain above total depreciation, which would require selling for more than original cost."
  },
  {
    "id": "dispo-4",
    "section": "dispo",
    "topic": "Selling a depreciated rental building",
    "difficulty": "medium",
    "q": "An individual sells a rental building held several years at a gain after claiming straight-line depreciation. How is the portion of gain equal to that depreciation taxed?",
    "choices": [
      "As ordinary income at the taxpayer's marginal rate",
      "At a maximum rate of 25%",
      "At the 0/15/20% long-term capital gain rates",
      "As tax-exempt return of capital"
    ],
    "answer": 1,
    "explain": "Straight-line depreciation on real property held more than a year produces no section 1250 ordinary recapture, but for individuals the gain up to the depreciation claimed is unrecaptured section 1250 gain, taxed at a maximum 25%. Any remaining gain is section 1231 gain taxed at the regular 0, 15 or 20% rates. Had the building been held one year or less, the depreciation would be recaptured as ordinary income."
  },
  {
    "id": "dispo-5",
    "section": "dispo",
    "topic": "Section 1244 stock",
    "difficulty": "medium",
    "q": "A married couple filing jointly loses $140,000 on qualifying section 1244 stock in a single year. How is the loss characterized?",
    "choices": [
      "$140,000 ordinary loss",
      "$100,000 ordinary loss and $40,000 capital loss",
      "$50,000 ordinary loss and $90,000 capital loss",
      "$140,000 capital loss"
    ],
    "answer": 1,
    "explain": "Section 1244 converts what would be a capital loss into an ordinary loss, capped at $50,000 a year, $100,000 on a joint return. The $40,000 above the cap stays a capital loss: it is netted against capital gains first, and any net capital loss offsets ordinary income only up to $3,000 a year, with the rest carried forward."
  },
  {
    "id": "dispo-6",
    "section": "dispo",
    "topic": "Installment sales",
    "difficulty": "medium",
    "q": "A taxpayer sells business equipment at a gain on the installment method, with depreciation recapture built into the gain. When is the recapture reported?",
    "choices": [
      "Pro rata as payments are received",
      "Entirely in the year of sale",
      "In the final year of the installment contract",
      "Only if the buyer defaults"
    ],
    "answer": 1,
    "explain": "Depreciation recapture is recognized in full in the year of sale regardless of when cash is collected. Only the gain remaining after recapture is spread using the gross profit percentage."
  },
  {
    "id": "dispo-7",
    "section": "dispo",
    "topic": "Netting business asset sales",
    "difficulty": "medium",
    "q": "After §1245 recapture, a sole proprietor has $50,000 of remaining gain on equipment and a $30,000 loss on business land, both held three years, no prior-year losses. What is the net result?",
    "choices": [
      "$20,000 net gain treated as long-term capital gain",
      "$50,000 long-term capital gain and a $30,000 ordinary loss",
      "$20,000 ordinary income",
      "$50,000 ordinary income and a $30,000 capital loss"
    ],
    "answer": 0,
    "explain": "Gain left after recapture on depreciable business property and the loss on business land are both §1231 items, so they are netted: $50,000 less $30,000 leaves a $20,000 net §1231 gain, which is treated as long-term capital gain. The gain and the loss are never reported separately in their own characters, and with no nonrecaptured §1231 losses in the prior five years the lookback rule does not turn any of the net gain ordinary."
  },
  {
    "id": "dispo-8",
    "section": "dispo",
    "topic": "Correcting an equipment gain",
    "difficulty": "medium",
    "q": "A client's schedule reports a $70,000 gain on equipment held three years entirely as §1231 gain; $50,000 of depreciation was claimed. What is the correct character?",
    "choices": [
      "$50,000 ordinary income and $20,000 §1231 gain",
      "$70,000 ordinary income",
      "$70,000 §1231 gain, as the schedule shows",
      "$20,000 ordinary income and $50,000 §1231 gain"
    ],
    "answer": 0,
    "explain": "Section 1245 recaptures gain as ordinary income up to all depreciation allowed or allowable, here $50,000, and only the $20,000 above the depreciation is §1231 gain. Treating the whole gain as §1231 gain omits the recapture, while treating it all as ordinary ignores that the gain exceeds the depreciation. Recapture is applied asset by asset before any §1231 netting."
  },
  {
    "id": "dispo-9",
    "section": "dispo",
    "topic": "Corporate building sale",
    "difficulty": "medium",
    "q": "A C corporation sells a warehouse held eight years for a $200,000 gain; $80,000 of straight-line depreciation had been claimed. How much of the gain is ordinary income?",
    "choices": [
      "$16,000",
      "$40,000",
      "$80,000",
      "$0"
    ],
    "answer": 0,
    "explain": "Section 291 makes a corporation treat as ordinary income 20% of the amount §1245 would have recaptured over what §1250 actually recaptures. Section 1245 would have recaptured the lesser of the $200,000 gain or the $80,000 depreciation, and straight-line depreciation gives no §1250 recapture, so 20% of $80,000, or $16,000, is ordinary and the remaining $184,000 is §1231 gain. $40,000 applies 20% to the whole gain, $80,000 is full §1245 treatment, and $0 is the individual's answer, where the depreciation slice is instead taxed at up to 25%."
  },
  {
    "id": "dispo-10",
    "section": "dispo",
    "topic": "Gain as payments arrive",
    "difficulty": "medium",
    "q": "Investment land is sold on an eligible installment note with a 60% gross profit percentage. This year the seller receives a $10,000 principal payment. How much gain is recognized this year?",
    "choices": [
      "$6,000",
      "$4,000",
      "$10,000",
      "$0"
    ],
    "answer": 0,
    "explain": "Under section 453 each principal payment is multiplied by the gross profit percentage, gross profit over contract price: 60% of $10,000 is $6,000 of gain this year. Interest on the note is reported separately as ordinary income. $10,000 treats the whole payment as gain, $4,000 applies the 40% basis ratio instead, and $0 would defer gain that the installment method recognizes as payments arrive."
  },
  {
    "id": "dispo-11",
    "section": "dispo",
    "topic": "Family installment sale",
    "difficulty": "medium",
    "q": "A father sells land to his daughter on a ten-year installment note. Fourteen months later she resells it for cash to an unrelated buyer. What is the effect on the father?",
    "choices": [
      "The daughter's resale is treated as a payment to him, accelerating his deferred gain",
      "None; he keeps reporting gain as the daughter's note payments arrive",
      "His original sale is recharacterized as a gift of the land to the daughter",
      "The daughter, not the father, must report his remaining deferred gain"
    ],
    "answer": 0,
    "explain": "Under the second disposition rule of section 453(e), when a related buyer resells within two years of the first sale, the first seller is treated as receiving, in the year of the resale, the lesser of the resale price or the original contract price, less payments already received, which accelerates part or all of his deferred gain. Later note payments are not taxed again to the extent they were already treated as received, though the interest stays taxable. The daughter reports only her own gain or loss on the resale, and nothing converts the sale into a gift."
  },
  {
    "id": "dispo-12",
    "section": "dispo",
    "topic": "Classifying an author's assets",
    "difficulty": "easy",
    "q": "A self-employed novelist owns the following assets. Which one is a capital asset under §1221?",
    "choices": [
      "Shares of a mutual fund held for investment",
      "The copyright on a novel she wrote",
      "Accounts receivable from her publisher",
      "A computer depreciated in her writing business"
    ],
    "answer": 0,
    "explain": "Section 1221 defines a capital asset as any property except the listed exclusions, and investment securities are not excluded. A copyright or literary composition in the hands of its creator, receivables acquired in the ordinary course of business, and depreciable property used in a business are all carved out, so they produce ordinary gain or loss (or §1231 treatment for the depreciable property held more than a year)."
  },
  {
    "id": "dispo-13",
    "section": "dispo",
    "topic": "Reviewing a stock sale",
    "difficulty": "medium",
    "q": "A client's disposition schedule lists stock she inherited in February and sold in October of the same year as a short-term gain, with basis at date-of-death value. What should the reviewer change?",
    "choices": [
      "Mark the gain long-term; inherited property is deemed held more than a year",
      "Nothing; the stock was held only eight months, so short-term is correct",
      "Replace the date-of-death basis with the decedent's original cost",
      "Reclassify the gain as ordinary income because she never bought the stock"
    ],
    "answer": 0,
    "explain": "Under §1223(9), property acquired from a decedent is treated as held for more than one year no matter how soon the heir sells it, so the holding period on the schedule was computed from the wrong starting point. The basis is correct: §1014 gives inherited property a basis equal to its fair market value at death. Inherited stock is still a capital asset, so the gain is capital, not ordinary."
  },
  {
    "id": "dispo-14",
    "section": "dispo",
    "topic": "Ordering the rate groups",
    "difficulty": "medium",
    "q": "An individual has a net short-term capital loss and long-term gains on collectibles, on a depreciated rental building and on stock held two years. Which gain does the loss offset first?",
    "choices": [
      "The collectibles gain, taxed at up to 28%",
      "The stock gain, taxed at 0, 15 or 20%",
      "The building's unrecaptured §1250 gain, taxed at up to 25%",
      "All three gains, pro rata"
    ],
    "answer": 0,
    "explain": "Long-term gains fall into rate groups: collectibles gain at a maximum 28%, unrecaptured §1250 gain at a maximum 25%, and other gain at 0, 15 or 20%. A net short-term capital loss (and any long-term loss carryover) is applied against the highest-rate group first, so it reduces the 28% gain, then the 25% gain, and only then the regular-rate gain. That ordering favors the taxpayer, since the loss wipes out the most heavily taxed gain first."
  },
  {
    "id": "dispo-15",
    "section": "dispo",
    "topic": "Corporation's losing investment",
    "difficulty": "medium",
    "q": "A C corporation has $25,000 of ordinary income and a $10,000 net capital loss this year, with no capital gains in the prior three years. What is the result?",
    "choices": [
      "Taxable income of $25,000; the loss carries forward five years as short-term",
      "Taxable income of $15,000",
      "Taxable income of $22,000; the rest carries forward",
      "Taxable income of $25,000; the loss is lost because it cannot be carried back"
    ],
    "answer": 0,
    "explain": "A corporation may deduct capital losses only against capital gains; §1211(a) allows no offset against ordinary income, so taxable income stays $25,000. Under §1212(a) the net capital loss is carried back three years and forward five, always as a short-term loss, and with no prior gains to absorb it the whole $10,000 moves forward. The $3,000 allowance belongs to individuals only, and $15,000 deducts a loss the corporation is not allowed."
  },
  {
    "id": "dispo-16",
    "section": "dispo",
    "topic": "Sale to her own corporation",
    "difficulty": "medium",
    "q": "An individual sells a warehouse building (no land) held ten years at a gain to a corporation in which she owns 80% of the stock. The corporation will depreciate it. How is her gain characterized?",
    "choices": [
      "Entirely ordinary income",
      "§1231 gain, with the depreciation portion at a maximum 25%",
      "Long-term capital gain at 0, 15 or 20%",
      "Not recognized until the corporation sells the warehouse"
    ],
    "answer": 0,
    "explain": "Section 1239 converts all gain on a sale of property between related persons into ordinary income when the property is depreciable in the buyer's hands. A corporation more than 50% owned by the seller, counting §267(c) attribution, is a related person, so the usual §1231 and unrecaptured §1250 analysis never applies. The rule stops the family from paying capital gain rates on the sale while the corporation depreciates the stepped-up basis against ordinary income."
  },
  {
    "id": "dispo-17",
    "section": "dispo",
    "topic": "Stock that loses all value",
    "difficulty": "medium",
    "q": "A client's shares in a corporation, bought in August of Year 1, become completely worthless in March of Year 2. How is the loss reported?",
    "choices": [
      "A long-term capital loss; the shares are treated as sold on the last day of Year 2",
      "A short-term capital loss, because the shares were held seven months",
      "An ordinary loss under §165 in Year 2",
      "No loss until the shares are actually sold or the corporation is dissolved"
    ],
    "answer": 0,
    "explain": "Under §165(g), a security that becomes wholly worthless during the year is treated as a capital asset sold on the last day of that tax year. Measuring from August of Year 1 to December 31 of Year 2 gives a holding period over one year, so the loss is long-term even though the stock actually died after seven months. No actual sale is needed, and the loss is capital, not ordinary, unless §1244 applies."
  },
  {
    "id": "dispo-18",
    "section": "dispo",
    "topic": "Walking away from a machine",
    "difficulty": "medium",
    "q": "A business permanently abandons a machine with a $12,000 adjusted basis, receiving nothing for it, after four years of use. How is the loss treated?",
    "choices": [
      "$12,000 ordinary loss",
      "$12,000 §1231 loss netted with other business asset sales",
      "$12,000 long-term capital loss",
      "No deduction until the machine is sold or scrapped for value"
    ],
    "answer": 0,
    "explain": "Abandonment of business property is a deductible loss under §165(a) equal to the remaining adjusted basis, and because there is no sale or exchange the loss is ordinary, outside the §1231 netting. The deduction is taken in the year the property is permanently withdrawn from use with no intention of recovering it; no sale is required. A capital loss would need a sale or exchange of a capital asset, and business equipment is not a capital asset."
  },
  {
    "id": "nontax-1",
    "section": "nontax",
    "topic": "Related party losses",
    "difficulty": "medium",
    "q": "A taxpayer sells stock to her brother at a $15,000 loss. He later sells it to an unrelated buyer at a $23,000 gain. What does the brother recognize?",
    "choices": [
      "$8,000 gain",
      "$23,000 gain",
      "$8,000 gain, and the sister deducts her $15,000 loss",
      "$38,000 gain"
    ],
    "answer": 0,
    "explain": "The sister's $15,000 loss on a sale to her brother is disallowed under section 267. When he later sells to an outsider, his $23,000 realized gain is reduced by that disallowed loss, leaving $8,000. The offset belongs to the brother only; the sister never deducts the loss, and the offset can shelter gain but never create a loss."
  },
  {
    "id": "nontax-2",
    "section": "nontax",
    "topic": "Like-kind exchanges",
    "difficulty": "medium",
    "q": "Which exchange qualifies for nonrecognition under section 1031?",
    "choices": [
      "A delivery truck exchanged for a newer delivery truck",
      "An apartment building exchanged for raw investment land",
      "Inventory exchanged for inventory of another dealer",
      "Corporate stock exchanged for other corporate stock"
    ],
    "answer": 1,
    "explain": "Section 1031 applies only to real property held for productive use in a business or for investment, and virtually all such real estate is like-kind to other real estate, so an apartment building for raw investment land qualifies. Trucks, inventory and corporate stock are not eligible property, so those exchanges are fully taxable."
  },
  {
    "id": "nontax-3",
    "section": "nontax",
    "topic": "Exchange deadlines",
    "difficulty": "medium",
    "q": "In a deferred like-kind exchange, by when must the replacement property be identified and received?",
    "choices": [
      "Identified within 45 days; received by the earlier of 180 days or the return due date with extensions",
      "Identified within 45 days; received by the earlier of 180 days or the return due date without extensions",
      "Identified within 45 days; received within 180 days of identification, whatever the return due date",
      "Both identified and received within 180 days of the transfer, with no separate identification deadline"
    ],
    "answer": 0,
    "explain": "Both periods run from the transfer of the relinquished property: identification in writing within 45 days, and receipt by the earlier of 180 days or the due date of the return for the year of transfer, including extensions, so a taxpayer who transfers late in the year extends the return to keep the full 180 days. Missing either deadline makes the whole exchange taxable."
  },
  {
    "id": "nontax-4",
    "section": "nontax",
    "topic": "Involuntary conversions",
    "difficulty": "medium",
    "q": "A factory is destroyed by fire and the owner receives insurance proceeds exceeding basis. To defer the gain, when must qualifying replacement property be acquired?",
    "choices": [
      "Within 180 days of receiving the proceeds",
      "Within two years after the close of the year the gain was realized",
      "By the due date of the return for the year of the casualty",
      "Within five years in all cases"
    ],
    "answer": 1,
    "explain": "Section 1033 gives a replacement period ending two years after the close of the tax year in which gain was realized, extended to three years for real property condemned and held for business or investment use."
  },
  {
    "id": "nontax-5",
    "section": "nontax",
    "topic": "Cash alongside the new building",
    "difficulty": "medium",
    "q": "In a like-kind exchange of investment real property, a taxpayer realizes a $20,000 gain and receives $35,000 cash along with the replacement building. How much gain is recognized?",
    "choices": [
      "$20,000",
      "$35,000",
      "$0",
      "$55,000"
    ],
    "answer": 0,
    "explain": "Under §1031(b), gain is recognized to the extent of boot received but never more than the gain realized, so the recognized gain is the lesser of $35,000 cash and the $20,000 realized gain. Recognizing $35,000 would tax more gain than exists; the extra cash is a tax-free return of basis. $0 forgets that cash boot triggers gain, and $55,000 adds the two figures."
  },
  {
    "id": "nontax-6",
    "section": "nontax",
    "topic": "Starting point for the new property",
    "difficulty": "medium",
    "q": "In a like-kind exchange, a taxpayer receives replacement real property worth $400,000 and defers $180,000 of gain, recognizing the rest. What is the basis of the replacement property?",
    "choices": [
      "$220,000",
      "$400,000",
      "$580,000",
      "$180,000"
    ],
    "answer": 0,
    "explain": "The replacement property's basis equals its fair market value less the deferred gain: $400,000 less $180,000 is $220,000. The same figure comes from the §1031(d) formula, old basis less boot received plus boot given plus gain recognized. A full $400,000 cost basis would let the deferred gain escape tax, while $580,000 adds the deferred gain instead of subtracting it."
  },
  {
    "id": "nontax-7",
    "section": "nontax",
    "topic": "Mortgages on both sides",
    "difficulty": "medium",
    "q": "In a like-kind exchange, a taxpayer is relieved of a $120,000 mortgage and assumes a $70,000 mortgage on the property received; no cash changes hands. How much boot has the taxpayer received?",
    "choices": [
      "$50,000",
      "$120,000",
      "$0",
      "$70,000"
    ],
    "answer": 0,
    "explain": "Relief from a liability is treated as cash received, but under the §1031 regulations liabilities assumed are netted against liabilities given up, so net boot received is $120,000 less $70,000, or $50,000. Counting the full $120,000 ignores the offset, and $0 ignores that the taxpayer came out ahead on debt. Had the taxpayer assumed the larger mortgage, the net excess would be boot given, not received, and would add to basis."
  },
  {
    "id": "nontax-8",
    "section": "nontax",
    "topic": "A truck in the deal",
    "difficulty": "easy",
    "q": "A client exchanges an office building used in her business for a warehouse and a used delivery truck, both to be used in the business. How is the truck treated?",
    "choices": [
      "Boot, taxable to the extent of her realized gain",
      "Like-kind property, since all business-use property qualifies",
      "Like-kind property, because it was received with real property",
      "A separate purchase with no effect on the exchange"
    ],
    "answer": 0,
    "explain": "Since the 2017 Tax Cuts and Jobs Act, §1031 covers only real property held for business or investment, so the warehouse is like-kind to the office building but the truck is not. Anything received that is not like-kind is boot, and the truck's fair market value triggers gain up to the gain realized. The truck takes a basis equal to its fair market value and is not simply ignored."
  },
  {
    "id": "nontax-9",
    "section": "nontax",
    "topic": "Swap with a sibling",
    "difficulty": "medium",
    "q": "A taxpayer exchanges investment land with his sister for her rental building, deferring a large gain. Eighteen months later she sells the land to an outsider. What happens to his deferred gain?",
    "choices": [
      "He recognizes it in the year of her sale",
      "It stays deferred; only his own sale within two years would trigger it",
      "It stays deferred; the two-year rule does not apply to siblings",
      "She recognizes it, as the party who sold"
    ],
    "answer": 0,
    "explain": "Section 1031(f) denies deferral in a related-party exchange if either party disposes of the property received within two years, and siblings are related under §267(b). The disposition by either side undoes the deferral, and the gain is recognized by the party who deferred it, in the year of the disqualifying sale. The exceptions are a disposition after death, an involuntary conversion, or proof that tax avoidance was not a principal purpose."
  },
  {
    "id": "nontax-10",
    "section": "nontax",
    "topic": "Deferred exchange mechanics",
    "difficulty": "medium",
    "q": "A client sells a rental property, deposits the proceeds in her own bank account, identifies a replacement within 45 days and closes on it 100 days after the sale. Does §1031 apply?",
    "choices": [
      "No; she had receipt of the proceeds, so this is a sale and a purchase",
      "Yes; both the identification and exchange deadlines were met",
      "Yes, if she reinvests all of the proceeds in the replacement",
      "No; the replacement must close within 90 days of the sale"
    ],
    "answer": 0,
    "explain": "Receiving all the sale proceeds before buying the replacement makes this a sale followed by a purchase, however quickly she reinvests. A deferred exchange needs the funds kept out of her actual or constructive receipt, which is why a qualified intermediary holds them under the safe harbor in the section 1031 regulations. The 45-day and 180-day deadlines were met but cannot cure the receipt problem."
  },
  {
    "id": "nontax-11",
    "section": "nontax",
    "topic": "Rebuilding after a fire",
    "difficulty": "medium",
    "q": "After a fire, an owner realizes a $120,000 gain on the insurance proceeds and reinvests all but $40,000 of them in a replacement warehouse within the period, electing §1033. How much gain is recognized?",
    "choices": [
      "$40,000",
      "$0",
      "$120,000",
      "$80,000"
    ],
    "answer": 0,
    "explain": "When the owner elects §1033, gain is recognized only to the extent the proceeds exceed the cost of the qualifying replacement property, here $40,000 not reinvested. The other $80,000 is deferred and reduces the basis of the new warehouse. $0 would require reinvesting every dollar of the proceeds, and $80,000 confuses the deferred portion with the recognized portion."
  },
  {
    "id": "nontax-12",
    "section": "nontax",
    "topic": "Replacing a taken building",
    "difficulty": "medium",
    "q": "A city condemns a client's rental apartment building. Within the three-year replacement period, which property qualifies as replacement property for deferring the gain?",
    "choices": [
      "Any real property held for business or investment, such as an office building",
      "Only another apartment building or similar residential rental property",
      "Any property used in a business or held for investment, including equipment",
      "Only real property that the client will hold as rental housing for at least two years"
    ],
    "answer": 0,
    "explain": "Section 1033(g) treats condemned real property held for business or investment as replaced by any like-kind real property under the broad section 1031 standard, so an office building to lease qualifies, and the replacement period is three years after the close of the year the gain is first realized. A fire or theft of the same building would instead require property similar or related in service or use, within two years. Equipment is not real property and never qualifies here."
  },
  {
    "id": "nontax-13",
    "section": "nontax",
    "topic": "New land after condemnation",
    "difficulty": "medium",
    "q": "An owner's condemned land produces a $90,000 realized gain, all deferred under §1033 by buying replacement land for $250,000. What is the basis of the replacement land?",
    "choices": [
      "$160,000",
      "$250,000",
      "$340,000",
      "$90,000"
    ],
    "answer": 0,
    "explain": "Under §1033(b), the basis of replacement property bought with conversion proceeds is its cost less the gain not recognized: $250,000 less $90,000 is $160,000. A full $250,000 cost basis would let the deferred gain disappear, and adding the gain to cost runs the adjustment the wrong way. The holding period of the condemned land tacks on to the replacement."
  },
  {
    "id": "nontax-14",
    "section": "nontax",
    "topic": "Selling a home early",
    "difficulty": "medium",
    "q": "A single taxpayer sells her principal residence after 18 months of ownership and use because of a qualifying unforeseen circumstance, realizing a $200,000 gain. How is her exclusion computed?",
    "choices": [
      "The $250,000 maximum exclusion is multiplied by 18/24, so $187,500 of the gain is excluded",
      "The $200,000 gain is multiplied by 18/24, so $150,000 is excluded",
      "No exclusion is available because the two-year test was not met",
      "The full $200,000 is excluded because the sale was for an unforeseen circumstance"
    ],
    "answer": 0,
    "explain": "Section 121(c) reduces the maximum exclusion, not the gain, when a sale before two years is due to a change in place of employment, health or unforeseen circumstances: $250,000 times 18/24 is $187,500, so $12,500 of the $200,000 gain is taxed. Prorating the gain itself is the common mistake, and the two-year test alone would deny any exclusion. The $250,000 limit is fixed by statute, not indexed."
  },
  {
    "id": "nontax-15",
    "section": "nontax",
    "topic": "Repurchased shares",
    "difficulty": "medium",
    "q": "An investor sells stock at a $3,000 loss and, 20 days later, buys the same number of identical shares for $8,000. What is the basis of the new shares?",
    "choices": [
      "$11,000",
      "$8,000, with the $3,000 loss deducted this year",
      "$8,000, with the $3,000 loss permanently disallowed",
      "$5,000"
    ],
    "answer": 0,
    "explain": "A purchase of substantially identical stock within 30 days before or after a loss sale is a wash sale under §1091, so the $3,000 loss is not deductible now. It is not lost: §1091(d) adds the disallowed loss to the basis of the new shares, $8,000 plus $3,000, and the old holding period tacks on. The loss is recovered when the replacement shares are eventually sold outside the wash sale window."
  },
  {
    "id": "nontax-16",
    "section": "nontax",
    "topic": "Who counts as family",
    "difficulty": "medium",
    "q": "Dana owns 30% of Oak Corp, her brother owns 15% and her brother's wife owns 10%. Dana sells land to Oak Corp at a loss. Is the loss deductible?",
    "choices": [
      "Yes; she constructively owns 45%, not more than 50%",
      "No; she constructively owns 55%, more than 50%",
      "No; any shareholder selling to the corporation at a loss is denied the deduction",
      "Yes; only her direct 30% counts, so she is not related"
    ],
    "answer": 0,
    "explain": "Under §267(c), Dana is treated as owning stock held by her family, which is siblings, spouse, ancestors and lineal descendants, so her brother's 15% is added to her 30%. A sister-in-law is not family, and stock attributed to the brother from his wife cannot be attributed again to Dana. At 45% Dana does not own more than 50%, so she and Oak Corp are not related and the loss is allowed."
  },
  {
    "id": "nontax-17",
    "section": "nontax",
    "topic": "Year-end bonus to the owner",
    "difficulty": "medium",
    "q": "An accrual-basis corporation accrues a $20,000 bonus in December to its cash-basis 60% shareholder and pays it the following April. When is the bonus deductible?",
    "choices": [
      "In the year paid, when the shareholder includes it in income",
      "In the year accrued, since the corporation uses the accrual method",
      "In the year accrued, if paid within two and a half months after year end",
      "In the year accrued, if the board fixed the amount by resolution before year end"
    ],
    "answer": 0,
    "explain": "Section 267(a)(2) matches the timing: an accrual-method payer may not deduct an amount owed to a related cash-method payee until the day the payee includes it in income, and a more-than-50% shareholder is related. The two-and-a-half-month rule for deferred compensation to unrelated employees does not override §267. A reasonable bonus is still compensation, not a dividend; only its timing changes."
  },
  {
    "id": "nontax-18",
    "section": "nontax",
    "topic": "Testing the ownership line",
    "difficulty": "medium",
    "q": "Which of these sales at a loss is disallowed by the related-party rules?",
    "choices": [
      "A partner owning 60% of capital sells land to the partnership",
      "A shareholder owning 45% of the stock sells land to the corporation",
      "A partner owning 60% of capital sells equipment to the partner who owns the other 40%",
      "An individual sells investment land to his uncle"
    ],
    "answer": 0,
    "explain": "Section 707(b)(1) disallows a loss on a sale between a partnership and a partner who owns, directly or constructively, more than 50% of its capital or profits, so the 60% partner's loss is denied. Section 267(b) uses the same more-than-50% line for a shareholder and corporation, so 45% is not related. Two individual partners are not related to each other merely because they share a partnership, and an uncle is outside the section 267(c)(4) family, so those losses are allowed."
  }
];
