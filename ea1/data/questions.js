/* EA1 Blitz question bank — SEE Part 1 (Individuals), 12 sections, 192 questions.
   Original content authored for current federal individual income tax law and
   adversarially reviewed. Choice order is shuffled at display time; 'answer' is
   the index of the correct choice.

   Authoring note: Part 1 is far more dollar-driven than Part 3, and indexed
   figures move every filing season. Questions here favour structural rules and
   statutory thresholds that do not drift (the $3,000 capital-loss limit, the
   7.5% medical floor, the 2-of-5-year ownership and use test, the 5-year Roth
   clock). Where an indexed amount is unavoidable it is described rather than
   stated, so the bank does not rot each January.

   FAR_SECTIONS/FAR_QUESTIONS global names keep the engine identical to FAR Blitz. */

var FAR_SECTIONS = [
  {
    "id": "status",
    "name": "Filing Status & Dependents",
    "short": "Status",
    "emoji": "👪"
  },
  {
    "id": "prelim",
    "name": "Taxpayer Data & Due Diligence",
    "short": "Taxpayer Data",
    "emoji": "🗂️"
  },
  {
    "id": "income",
    "name": "Wages & Ordinary Income",
    "short": "Income",
    "emoji": "💵"
  },
  {
    "id": "invest",
    "name": "Interest, Dividends & Investments",
    "short": "Investments",
    "emoji": "📈"
  },
  {
    "id": "gains",
    "name": "Capital Gains & Basis",
    "short": "Gains & Basis",
    "emoji": "🏷️"
  },
  {
    "id": "retire",
    "name": "Retirement Income & IRAs",
    "short": "Retirement",
    "emoji": "🏖️"
  },
  {
    "id": "rental",
    "name": "Rental & Passive Activity",
    "short": "Rental",
    "emoji": "🏠"
  },
  {
    "id": "adjust",
    "name": "Adjustments to Income",
    "short": "Adjustments",
    "emoji": "➖"
  },
  {
    "id": "itemized",
    "name": "Itemized Deductions",
    "short": "Itemized",
    "emoji": "🧾"
  },
  {
    "id": "credits",
    "name": "Credits",
    "short": "Credits",
    "emoji": "⭐"
  },
  {
    "id": "othertax",
    "name": "Other Taxes & AMT",
    "short": "Other Taxes",
    "emoji": "🧮"
  },
  {
    "id": "special",
    "name": "Specialized Returns",
    "short": "Specialized",
    "emoji": "🌍"
  }
];

var FAR_QUESTIONS = [
  {
    "id": "status-1",
    "section": "status",
    "topic": "Head of household",
    "difficulty": "medium",
    "q": "Marisol is unmarried and pays more than half the cost of a home where her 12-year-old son lived for 8 months of the year. What filing status does she qualify for?",
    "choices": [
      "Head of household",
      "Single, because she is unmarried",
      "Qualifying surviving spouse",
      "Married filing separately"
    ],
    "answer": 0,
    "explain": "Head of household requires being unmarried (or considered unmarried), paying more than half the cost of keeping up a home, and having a qualifying person live there more than half the year. Eight months clears the half-year test."
  },
  {
    "id": "status-2",
    "section": "status",
    "topic": "Marital status date",
    "difficulty": "easy",
    "q": "On what date is a taxpayer's marital status for the whole tax year determined?",
    "choices": [
      "The first day of the tax year",
      "The date the return is filed",
      "The last day of the tax year",
      "The date of the most recent life event"
    ],
    "answer": 2,
    "explain": "Marital status is fixed as of December 31 for a calendar-year taxpayer. A marriage on December 31 makes the couple married for the entire year; a divorce final that day makes them unmarried for the entire year."
  },
  {
    "id": "status-3",
    "section": "status",
    "topic": "Death of a spouse",
    "difficulty": "medium",
    "q": "Ravi's wife died in March. He has no dependent children and did not remarry. What is his filing status for the year of death?",
    "choices": [
      "Married filing jointly",
      "Single, since he was unmarried at year end",
      "Qualifying surviving spouse",
      "Head of household"
    ],
    "answer": 0,
    "explain": "A surviving spouse may file jointly for the year the spouse died, provided there was no remarriage before year end. Qualifying surviving spouse status applies to the two following years and requires a dependent child, which Ravi does not have."
  },
  {
    "id": "status-4",
    "section": "status",
    "topic": "Qualifying child age",
    "difficulty": "medium",
    "q": "Which age condition satisfies the qualifying child test?",
    "choices": [
      "Under 24 and a full-time student for at least five months",
      "Under 21 regardless of student status",
      "Under 24 and enrolled at least half time all year",
      "Any age if living with the taxpayer all year"
    ],
    "answer": 0,
    "explain": "A qualifying child must be under 19, or under 24 if a full-time student during some part of each of five calendar months, or permanently and totally disabled at any age. Full-year residence alone does not satisfy the age test."
  },
  {
    "id": "status-5",
    "section": "status",
    "topic": "Qualifying relative support",
    "difficulty": "medium",
    "q": "What is the support test for a qualifying relative?",
    "choices": [
      "The taxpayer must provide more than half the person's support",
      "The person must provide more than half their own support",
      "Support must be split equally among all providers",
      "The taxpayer must provide all of the person's support"
    ],
    "answer": 0,
    "explain": "For a qualifying relative the taxpayer must furnish more than half of the person's total support for the year. The qualifying child test runs the other way — there the child must not provide more than half of their own support."
  },
  {
    "id": "status-6",
    "section": "status",
    "topic": "Tiebreaker rules",
    "difficulty": "medium",
    "q": "A child qualifies as the qualifying child of both parents, who are divorced and cannot agree. Absent a release, who claims the child?",
    "choices": [
      "The parent with the higher adjusted gross income",
      "The parent with whom the child lived the longer time that year",
      "The parent who paid more of the child's support",
      "Neither parent, until they reach agreement"
    ],
    "answer": 1,
    "explain": "The first tiebreaker between two parents is residence — the parent the child lived with longer wins. Only if the child lived with each parent an equal time does the higher adjusted gross income decide it."
  },
  {
    "id": "status-7",
    "section": "status",
    "topic": "Considered unmarried",
    "difficulty": "medium",
    "q": "Dana is still legally married but her spouse did not live in the home at any time during the last six months of the year. She maintains the home for her daughter. Can she file as head of household?",
    "choices": [
      "Yes — she is considered unmarried for filing status purposes",
      "No — head of household requires a final divorce decree",
      "No — married taxpayers may never use head of household",
      "Only if her spouse agrees to file separately"
    ],
    "answer": 0,
    "explain": "A married taxpayer is considered unmarried if the spouse was absent the entire last six months of the year, the taxpayer paid more than half the cost of the home, and a qualifying child lived there more than half the year. The spouse's consent is irrelevant."
  },
  {
    "id": "status-8",
    "section": "status",
    "topic": "Separate return drawbacks",
    "difficulty": "easy",
    "q": "Which benefit is generally denied to a taxpayer who files married filing separately?",
    "choices": [
      "The deduction for mortgage interest",
      "The earned income credit",
      "The standard deduction in all cases",
      "The deduction for state and local taxes"
    ],
    "answer": 1,
    "explain": "Married filing separately generally bars the earned income credit, most education credits, and the credit for child and dependent care expenses. Mortgage interest and state and local taxes remain deductible, subject to their own limits."
  },
  {
    "id": "prelim-1",
    "section": "prelim",
    "topic": "Preparer due diligence",
    "difficulty": "medium",
    "q": "Which form documents a preparer's due diligence for the earned income credit, child tax credit, and head of household status?",
    "choices": [
      "Form 8879",
      "Form 8867",
      "Form 2848",
      "Form 8821"
    ],
    "answer": 1,
    "explain": "Form 8867, the Paid Preparer's Due Diligence Checklist, must be completed and filed with any return claiming the EIC, CTC, additional child tax credit, credit for other dependents, American opportunity credit, or head of household status."
  },
  {
    "id": "prelim-2",
    "section": "prelim",
    "topic": "Record retention",
    "difficulty": "medium",
    "q": "How long must a preparer keep the due diligence records supporting a credit claim?",
    "choices": [
      "One year from the date the return was filed",
      "Seven years, matching the IRS audit window",
      "Three years from the due date or filing date",
      "Until the client's refund has been issued"
    ],
    "answer": 2,
    "explain": "Due diligence records — the checklist, worksheets, and a record of how information was obtained — must be kept for three years from the later of the return due date or the date the return was filed. Electronic storage is acceptable."
  },
  {
    "id": "prelim-3",
    "section": "prelim",
    "topic": "ITIN basics",
    "difficulty": "easy",
    "q": "Who is an individual taxpayer identification number issued to?",
    "choices": [
      "A person with a filing obligation who cannot get a Social Security number",
      "Any nonresident who visits the United States",
      "A taxpayer who has misplaced their Social Security card",
      "Any dependent claimed on a return"
    ],
    "answer": 0,
    "explain": "An ITIN is issued to a person who has a federal tax filing or reporting requirement but is not eligible for a Social Security number. It authorizes nothing beyond tax administration — it confers no work authorization or immigration status."
  },
  {
    "id": "prelim-4",
    "section": "prelim",
    "topic": "Filing thresholds",
    "difficulty": "medium",
    "q": "Which taxpayer must file a return even with income below the normal filing threshold?",
    "choices": [
      "One who received any interest income",
      "One with net self-employment earnings of $400 or more",
      "One who is claimed as a dependent",
      "One who moved between states during the year"
    ],
    "answer": 1,
    "explain": "Net earnings from self-employment of $400 or more triggers a filing requirement regardless of the gross income threshold, because self-employment tax is owed. Other special triggers include owing household employment taxes or repaying certain credits."
  },
  {
    "id": "prelim-5",
    "section": "prelim",
    "topic": "Signature requirements",
    "difficulty": "medium",
    "q": "A married couple files jointly. Whose signature is required on the return?",
    "choices": [
      "Only the spouse with the higher income",
      "Only the spouse who prepared the return",
      "Both spouses must sign",
      "Either spouse, acting for both"
    ],
    "answer": 2,
    "explain": "A joint return requires both signatures, and both spouses become jointly and severally liable for the entire tax. A spouse may sign for the other only with a valid power of attorney or in narrow circumstances such as injury or absence."
  },
  {
    "id": "prelim-6",
    "section": "prelim",
    "topic": "Amended returns",
    "difficulty": "easy",
    "q": "Which form does an individual use to correct a previously filed Form 1040?",
    "choices": [
      "Form 1040-X",
      "Form 1040-ES",
      "Form 1045",
      "Form 4868"
    ],
    "answer": 0,
    "explain": "Form 1040-X amends a previously filed individual return. Form 1040-ES is for estimated payments, Form 4868 requests an extension, and Form 1045 seeks a tentative refund from a carryback."
  },
  {
    "id": "prelim-7",
    "section": "prelim",
    "topic": "Extensions",
    "difficulty": "medium",
    "q": "Kai files Form 4868 by the April due date. What does the extension give him?",
    "choices": [
      "Six more months to both file and pay",
      "An automatic waiver of late-payment penalties",
      "Six more months to file, but not to pay",
      "Three more months to file and pay"
    ],
    "answer": 2,
    "explain": "Form 4868 grants an automatic six-month extension of time to file only. Tax remains due on the original due date, so interest and the failure-to-pay penalty run on any unpaid balance from that date forward."
  },
  {
    "id": "prelim-8",
    "section": "prelim",
    "topic": "Recordkeeping burden",
    "difficulty": "easy",
    "q": "A client cannot produce receipts for a claimed deduction during an exam. Who bears the burden of substantiation?",
    "choices": [
      "The taxpayer, who must substantiate claimed deductions",
      "The IRS, which must disprove the deduction",
      "The preparer who signed the return",
      "Neither, if the amount is under $75"
    ],
    "answer": 0,
    "explain": "Deductions are a matter of legislative grace and the taxpayer carries the burden of substantiating them. The $75 threshold relaxes the receipt requirement for certain travel and entertainment expenses but never eliminates the burden of proof."
  },
  {
    "id": "income-1",
    "section": "income",
    "topic": "Constructive receipt",
    "difficulty": "medium",
    "q": "A cash-basis taxpayer receives a paycheck dated December 29 but does not deposit it until January 3. In which year is it income?",
    "choices": [
      "The year she deposited it",
      "The year the employer deducts it",
      "The year it was made available to her",
      "She may choose either year"
    ],
    "answer": 2,
    "explain": "Under constructive receipt, income is taxed when it is credited to the taxpayer's account or made available without substantial restriction. Declining to cash an available check does not defer the income."
  },
  {
    "id": "income-2",
    "section": "income",
    "topic": "Taxable fringe benefits",
    "difficulty": "medium",
    "q": "Which employer-provided benefit is generally included in an employee's taxable wages?",
    "choices": [
      "Group-term life insurance coverage above $50,000",
      "Employer-paid health insurance premiums",
      "A de minimis holiday turkey",
      "Qualified employee discounts within limits"
    ],
    "answer": 0,
    "explain": "The cost of employer-provided group-term life insurance above $50,000 of coverage is taxable to the employee, computed from an IRS table. Employer-paid health premiums, de minimis items, and qualified discounts are excluded."
  },
  {
    "id": "income-3",
    "section": "income",
    "topic": "Alimony after 2018",
    "difficulty": "medium",
    "q": "How is alimony treated under a divorce decree executed in 2020?",
    "choices": [
      "Deductible by the payer and taxable to the recipient",
      "Not deductible by the payer and not taxable to the recipient",
      "Deductible by both parties in equal shares",
      "Taxable to the payer and deductible by the recipient"
    ],
    "answer": 1,
    "explain": "For decrees executed after 2018, alimony is neither deductible by the payer nor includible by the recipient. Agreements executed before 2019 keep the old deductible-and-taxable treatment unless modified to adopt the new rules."
  },
  {
    "id": "income-4",
    "section": "income",
    "topic": "Social Security taxability",
    "difficulty": "medium",
    "q": "What determines how much of a taxpayer's Social Security benefit is taxable?",
    "choices": [
      "The taxpayer's age when benefits began",
      "The number of quarters the taxpayer worked",
      "Provisional income measured against base amounts",
      "Whether benefits were direct-deposited"
    ],
    "answer": 2,
    "explain": "Provisional income — adjusted gross income plus tax-exempt interest plus half the benefits — is compared to base amounts to determine whether 0%, up to 50%, or up to 85% of benefits is taxable. Age at retirement does not enter the calculation."
  },
  {
    "id": "income-5",
    "section": "income",
    "topic": "Excluded income",
    "difficulty": "easy",
    "q": "Which item is excluded from a recipient's gross income?",
    "choices": [
      "Punitive damages in a personal injury suit",
      "Back pay awarded in a discrimination case",
      "Compensatory damages for physical injury",
      "Interest paid on a delayed settlement"
    ],
    "answer": 2,
    "explain": "Damages received for personal physical injury or physical sickness are excluded from gross income. Punitive damages, back pay, and interest on a settlement are all taxable even when they arise from the same lawsuit."
  },
  {
    "id": "income-6",
    "section": "income",
    "topic": "Cancellation of debt",
    "difficulty": "medium",
    "q": "A lender forgives $8,000 of Priya's credit card debt when she is insolvent by $20,000 immediately before the discharge. How much is includible?",
    "choices": [
      "The full $8,000 of forgiven credit card debt",
      "Half of the discharged amount, or $4,000",
      "Nothing — insolvency exceeds the discharge",
      "$8,000 reduced by her standard deduction"
    ],
    "answer": 2,
    "explain": "Discharged debt is excluded to the extent the taxpayer was insolvent immediately before the cancellation. With insolvency of $20,000 against an $8,000 discharge, the entire amount is excluded, though tax attributes must then be reduced."
  },
  {
    "id": "income-7",
    "section": "income",
    "topic": "Gambling income",
    "difficulty": "medium",
    "q": "How does a casual gambler report $5,000 of winnings and $6,000 of losses?",
    "choices": [
      "$1,000 of net loss deductible against other income",
      "Nothing, because losses exceeded winnings",
      "$5,000 of income, with losses deductible only up to winnings",
      "$5,000 of income, with losses fully deductible"
    ],
    "answer": 2,
    "explain": "A casual gambler reports gross winnings in income and may deduct losses only as an itemized deduction capped at the amount of winnings. Excess losses are neither deductible against other income nor carried forward."
  },
  {
    "id": "income-8",
    "section": "income",
    "topic": "Jury duty pay",
    "difficulty": "easy",
    "q": "An employee receives jury duty pay and turns it over to her employer, who continued her salary. What is the tax result?",
    "choices": [
      "She excludes the jury pay entirely",
      "She includes the jury pay with no offsetting deduction",
      "She includes the jury pay and deducts the amount remitted",
      "Her employer reports the jury pay instead"
    ],
    "answer": 2,
    "explain": "Jury duty pay is includible in gross income. When the employee must surrender it to an employer who kept paying wages, she takes an offsetting adjustment to income so the same dollars are not taxed twice."
  },
  {
    "id": "invest-1",
    "section": "invest",
    "topic": "Qualified dividends",
    "difficulty": "medium",
    "q": "What must be satisfied for a dividend to be taxed at long-term capital gain rates?",
    "choices": [
      "Ownership of at least 1% of the paying corporation",
      "Reinvestment of the dividend in additional shares",
      "A holding period requirement around the ex-dividend date",
      "Receipt from a corporation with no foreign operations"
    ],
    "answer": 2,
    "explain": "Qualified dividends must come from a domestic or qualified foreign corporation and satisfy a holding period — more than 60 days within the 121-day window centred on the ex-dividend date. Ownership percentage and reinvestment are irrelevant."
  },
  {
    "id": "invest-2",
    "section": "invest",
    "topic": "Municipal bond interest",
    "difficulty": "easy",
    "q": "How is interest on a state or local government bond generally treated for federal purposes?",
    "choices": [
      "Fully taxable at ordinary income rates",
      "Taxed at long-term capital gain rates",
      "Excluded from income but still reported",
      "Excluded and not reportable anywhere"
    ],
    "answer": 2,
    "explain": "Interest on most state and local bonds is excluded from federal gross income but must still be reported, because it enters the provisional income calculation for Social Security and other computations. Private activity bond interest can be an AMT preference."
  },
  {
    "id": "invest-3",
    "section": "invest",
    "topic": "Wash sales",
    "difficulty": "medium",
    "q": "Dev sells stock at a loss and buys substantially identical stock 20 days later. What happens to the loss?",
    "choices": [
      "It is allowed in full in the year of sale",
      "It is permanently lost with no basis adjustment",
      "It is allowed only against future gains on that stock",
      "It is disallowed and added to the basis of the new shares"
    ],
    "answer": 3,
    "explain": "The wash sale rule disallows a loss when substantially identical securities are acquired within 30 days before or after the sale. The disallowed loss is added to the replacement shares' basis and their holding period tacks on, so the benefit is deferred rather than lost."
  },
  {
    "id": "invest-4",
    "section": "invest",
    "topic": "Original issue discount",
    "difficulty": "medium",
    "q": "How does a holder of a bond with original issue discount report that discount?",
    "choices": [
      "Accrued into income annually before the bond matures",
      "Recognized entirely at maturity or sale",
      "Treated as a capital gain when the bond is redeemed",
      "Excluded until the holder receives cash"
    ],
    "answer": 0,
    "explain": "Original issue discount accrues into income each year over the life of the instrument, even though no cash changes hands, and increases the holder's basis. Reporting waits for cash only in narrow cases such as short-term obligations."
  },
  {
    "id": "invest-5",
    "section": "invest",
    "topic": "Investment interest",
    "difficulty": "medium",
    "q": "How much investment interest expense may an individual deduct in the current year?",
    "choices": [
      "The full amount, with no limitation",
      "Up to 30% of adjusted gross income",
      "Up to the amount of net investment income",
      "Only interest on margin accounts"
    ],
    "answer": 2,
    "explain": "Investment interest expense is deductible as an itemized deduction limited to net investment income for the year. Any disallowed excess carries forward indefinitely to future years with sufficient investment income."
  },
  {
    "id": "invest-6",
    "section": "invest",
    "topic": "Savings bond exclusion",
    "difficulty": "medium",
    "q": "What condition allows exclusion of Series EE bond interest from income?",
    "choices": [
      "The bond was held for at least ten years",
      "The owner is over age 59 and a half",
      "The bonds were bought through payroll deduction",
      "Redemption proceeds pay qualified higher education expenses"
    ],
    "answer": 3,
    "explain": "Interest on qualifying Series EE and I bonds may be excluded when redemption proceeds pay qualified higher education expenses, subject to income phase-outs and an ownership age requirement at issuance. Holding period and purchase method are not conditions."
  },
  {
    "id": "invest-7",
    "section": "invest",
    "topic": "Nominee interest",
    "difficulty": "medium",
    "q": "A Form 1099-INT arrives in Nora's name but half the interest belongs to her brother. How does she handle it?",
    "choices": [
      "Report only her half and ignore the rest",
      "Ask the payer to reissue both forms before filing",
      "Report the full amount with no adjustment",
      "Report the full amount and subtract a nominee distribution"
    ],
    "answer": 3,
    "explain": "The named recipient reports the full amount shown on the form, then subtracts the portion belonging to the other owner as a nominee distribution. She must also issue a Form 1099-INT to her brother showing his share."
  },
  {
    "id": "invest-8",
    "section": "invest",
    "topic": "Worthless securities",
    "difficulty": "medium",
    "q": "Stock in Gus's portfolio becomes completely worthless in March. When is the loss treated as occurring?",
    "choices": [
      "On the date worthlessness was established",
      "When the company formally dissolves",
      "On the last day of the tax year it became worthless",
      "When he sells the shares for a nominal amount"
    ],
    "answer": 2,
    "explain": "A security that becomes wholly worthless is treated as sold on the last day of that tax year, which can turn a short holding period into a long-term loss. Partial worthlessness gives no deduction at all."
  },
  {
    "id": "gains-1",
    "section": "gains",
    "topic": "Holding period",
    "difficulty": "easy",
    "q": "How long must a capital asset be held for gain to be long-term?",
    "choices": [
      "One year or more",
      "More than one year",
      "More than six months",
      "More than two years"
    ],
    "answer": 1,
    "explain": "Long-term treatment requires holding the asset more than one year, counting from the day after acquisition through the disposition date. An asset held exactly one year produces short-term gain."
  },
  {
    "id": "gains-2",
    "section": "gains",
    "topic": "Capital loss limit",
    "difficulty": "easy",
    "q": "How much net capital loss may an individual deduct against ordinary income each year?",
    "choices": [
      "$1,500 in all cases",
      "$5,000",
      "There is no limit",
      "$3,000"
    ],
    "answer": 3,
    "explain": "An individual may deduct up to $3,000 of net capital loss against ordinary income annually — $1,500 for married filing separately. Unused losses carry forward indefinitely, keeping their short-term or long-term character."
  },
  {
    "id": "gains-3",
    "section": "gains",
    "topic": "Gifted property basis",
    "difficulty": "medium",
    "q": "Ana receives stock as a gift. The donor's basis was $10,000 and fair market value at gifting was $7,000. Ana sells it for $12,000. What is her gain?",
    "choices": [
      "$5,000, using fair market value at the gift date",
      "$12,000, because gifts have no basis",
      "Nothing, because gifts are not taxable",
      "$2,000, using the donor's carryover basis"
    ],
    "answer": 3,
    "explain": "For gifted property the donee generally takes the donor's carryover basis for computing gain. The lower fair market value basis applies only when the property is sold at a loss; a sale between the two figures produces neither gain nor loss."
  },
  {
    "id": "gains-4",
    "section": "gains",
    "topic": "Inherited property",
    "difficulty": "medium",
    "q": "What basis does an heir take in inherited property, and what is its holding period?",
    "choices": [
      "Fair market value at death, with automatic long-term treatment",
      "The decedent's original cost, with a tacked holding period",
      "Fair market value at death, with a holding period starting then",
      "The lower of cost or market at the date of death"
    ],
    "answer": 0,
    "explain": "Inherited property generally takes a basis equal to fair market value on the date of death, or the alternate valuation date if elected. Its holding period is automatically long-term regardless of how briefly the heir holds it."
  },
  {
    "id": "gains-5",
    "section": "gains",
    "topic": "Home sale exclusion",
    "difficulty": "medium",
    "q": "What ownership and use test must be met to exclude gain on the sale of a principal residence?",
    "choices": [
      "Owned and used as a main home 2 of the last 5 years",
      "Owned and used as a main home 3 of the last 5 years",
      "Owned for 5 continuous years before the sale",
      "Used as a main home on the date of sale"
    ],
    "answer": 0,
    "explain": "The exclusion requires owning and using the property as a principal residence for at least two of the five years ending on the sale date. The two years need not be continuous, and the exclusion is generally available only once every two years."
  },
  {
    "id": "gains-6",
    "section": "gains",
    "topic": "Netting order",
    "difficulty": "medium",
    "q": "How are capital gains and losses netted?",
    "choices": [
      "Within each holding period first, then across the two",
      "All gains and losses together in a single pool",
      "Long-term against ordinary income first",
      "Short-term losses only against short-term gains, ever"
    ],
    "answer": 0,
    "explain": "Short-term items net against each other and long-term items net against each other, and only then does a net loss in one category offset a net gain in the other. The surviving character controls how the result is taxed."
  },
  {
    "id": "gains-7",
    "section": "gains",
    "topic": "Related party losses",
    "difficulty": "medium",
    "q": "Theo sells stock at a $4,000 loss to his sister. What may he deduct?",
    "choices": [
      "The full $4,000 loss",
      "Nothing — losses between related parties are disallowed",
      "Half the loss, reflecting the relationship",
      "The loss, but only against gains on other sales to her"
    ],
    "answer": 1,
    "explain": "Losses on sales between related parties, including siblings, are disallowed entirely to the seller. The related buyer may later use the disallowed loss to reduce gain on a subsequent sale to an unrelated party."
  },
  {
    "id": "gains-8",
    "section": "gains",
    "topic": "Collectibles rate",
    "difficulty": "medium",
    "q": "A taxpayer sells a coin collection held for eight years at a gain. What maximum rate applies?",
    "choices": [
      "15%",
      "28%",
      "20%",
      "The taxpayer's ordinary rate"
    ],
    "answer": 1,
    "explain": "Long-term gain on collectibles — art, coins, stamps, gems, and precious metals — is taxed at a maximum 28% rate rather than the ordinary long-term capital gain rates. Short-term collectible gains remain taxed at ordinary rates."
  },
  {
    "id": "retire-1",
    "section": "retire",
    "topic": "Early distribution penalty",
    "difficulty": "easy",
    "q": "What additional tax generally applies to a distribution taken from a traditional IRA before age 59 and a half?",
    "choices": [
      "20% of the taxable amount",
      "10% of the taxable amount",
      "50% of the taxable amount",
      "6% of the taxable amount"
    ],
    "answer": 1,
    "explain": "An early distribution carries a 10% additional tax on the taxable portion unless an exception applies. The 6% rate is the excess contribution penalty and the 50% figure related to old missed required distribution rules."
  },
  {
    "id": "retire-2",
    "section": "retire",
    "topic": "Roth five-year rule",
    "difficulty": "medium",
    "q": "Besides reaching age 59 and a half, what must be satisfied for a Roth IRA distribution to be qualified?",
    "choices": [
      "A five-year period since the first Roth contribution",
      "A ten-year period since the account was opened",
      "That contributions were made in at least five separate years",
      "That the account holder has stopped working"
    ],
    "answer": 0,
    "explain": "A qualified Roth distribution requires a triggering event — age 59 and a half, death, disability, or first-time home purchase — plus a five-year period beginning with the first tax year a Roth contribution was made. Employment status is irrelevant."
  },
  {
    "id": "retire-3",
    "section": "retire",
    "topic": "Rollover deadline",
    "difficulty": "medium",
    "q": "A taxpayer receives an IRA distribution directly. How long does he have to roll it over?",
    "choices": [
      "30 days from receipt",
      "90 days from receipt",
      "60 days from receipt",
      "Until the return's due date"
    ],
    "answer": 2,
    "explain": "An indirect rollover must be completed within 60 days of receipt or the distribution becomes taxable. Only one such rollover is permitted across all of a taxpayer's IRAs in any 12-month period; trustee-to-trustee transfers are unlimited."
  },
  {
    "id": "retire-4",
    "section": "retire",
    "topic": "Penalty exceptions",
    "difficulty": "medium",
    "q": "Which use of an early IRA distribution escapes the 10% additional tax?",
    "choices": [
      "Paying off consumer credit card debt",
      "Buying a second vacation home",
      "Covering ordinary living expenses while unemployed",
      "Qualified higher education expenses"
    ],
    "answer": 3,
    "explain": "Exceptions to the 10% additional tax include qualified higher education expenses, a first-time home purchase up to a lifetime limit, total and permanent disability, certain medical expenses, and health insurance premiums while unemployed. General living costs and consumer debt do not qualify."
  },
  {
    "id": "retire-5",
    "section": "retire",
    "topic": "Nondeductible basis",
    "difficulty": "medium",
    "q": "Which form tracks nondeductible contributions to a traditional IRA?",
    "choices": [
      "Form 5498",
      "Form 1099-R",
      "Form 5329",
      "Form 8606"
    ],
    "answer": 3,
    "explain": "Form 8606 reports nondeductible traditional IRA contributions and establishes basis so those amounts are not taxed again on distribution. Form 5498 is the custodian's information return and Form 5329 reports additional taxes on qualified plans."
  },
  {
    "id": "retire-6",
    "section": "retire",
    "topic": "Deductibility limits",
    "difficulty": "medium",
    "q": "What causes a traditional IRA contribution to be only partly deductible or nondeductible?",
    "choices": [
      "Having any earned income at all during the year",
      "Reaching age 50 before the end of the year",
      "Holding a Roth IRA at the same institution",
      "Employer plan coverage plus income above a range"
    ],
    "answer": 3,
    "explain": "The deduction phases out when the taxpayer, or in some cases the spouse, is an active participant in an employer retirement plan and modified adjusted gross income exceeds a range set by filing status. Without plan coverage there is no income-based phase-out."
  },
  {
    "id": "retire-7",
    "section": "retire",
    "topic": "Required distributions",
    "difficulty": "medium",
    "q": "Which account has no required minimum distributions during the original owner's lifetime?",
    "choices": [
      "A traditional IRA",
      "A SEP IRA",
      "A Roth IRA",
      "A SIMPLE IRA"
    ],
    "answer": 2,
    "explain": "A Roth IRA requires no distributions during the original owner's lifetime, which makes it a useful estate planning vehicle. Traditional, SEP, and SIMPLE IRAs are all subject to required minimum distributions once the owner reaches the applicable age."
  },
  {
    "id": "retire-8",
    "section": "retire",
    "topic": "Qualified charitable distribution",
    "difficulty": "medium",
    "q": "What is the tax advantage of a qualified charitable distribution from an IRA?",
    "choices": [
      "It generates a credit equal to the amount given",
      "It is excluded from income rather than deducted",
      "It doubles the charitable deduction allowed",
      "It converts the IRA to a Roth without tax"
    ],
    "answer": 1,
    "explain": "A qualified charitable distribution is excluded from gross income entirely, which benefits taxpayers who do not itemize and lowers adjusted gross income for other computations. It can also satisfy a required minimum distribution."
  },
  {
    "id": "rental-1",
    "section": "rental",
    "topic": "Passive loss limits",
    "difficulty": "medium",
    "q": "How are losses from a rental activity generally treated?",
    "choices": [
      "Passive, deductible only against passive income",
      "Ordinary, fully deductible against wages",
      "Capital, limited to $3,000 per year",
      "Nondeductible in all circumstances"
    ],
    "answer": 0,
    "explain": "Rental activities are passive by default and their losses offset only passive income, with the excess suspended and carried forward. Suspended losses free up on a fully taxable disposition of the activity."
  },
  {
    "id": "rental-2",
    "section": "rental",
    "topic": "Active participation allowance",
    "difficulty": "medium",
    "q": "What is the maximum special allowance for rental real estate losses of an actively participating owner?",
    "choices": [
      "$25,000, phased out as income rises",
      "$25,000, with no income limitation",
      "$3,000, matching the capital loss limit",
      "$50,000 for married taxpayers filing jointly"
    ],
    "answer": 0,
    "explain": "An owner who actively participates may deduct up to $25,000 of rental real estate loss against nonpassive income. The allowance phases out as modified adjusted gross income rises through a defined range and disappears entirely above it."
  },
  {
    "id": "rental-3",
    "section": "rental",
    "topic": "Vacation home rule",
    "difficulty": "medium",
    "q": "A taxpayer rents her vacation home for 12 days during the year and uses it personally the rest. How is the rent treated?",
    "choices": [
      "Fully included, with expenses allocated by days",
      "Included, but only the portion above expenses",
      "Excluded, with rental expenses still deductible",
      "Excluded from income, with no rental expenses deductible"
    ],
    "answer": 3,
    "explain": "A dwelling rented fewer than 15 days a year produces no reportable rental income and no deductible rental expenses. Mortgage interest and property taxes remain deductible as personal itemized deductions."
  },
  {
    "id": "rental-4",
    "section": "rental",
    "topic": "Real estate professional",
    "difficulty": "medium",
    "q": "What must a taxpayer satisfy to treat rental activities as nonpassive as a real estate professional?",
    "choices": [
      "Ownership of at least five separate rental properties",
      "A real estate license in the state where the property sits",
      "More than half of personal services and over 750 hours",
      "Over 500 hours in any combination of businesses"
    ],
    "answer": 2,
    "explain": "The taxpayer must perform more than half of all personal services in real property trades or businesses and spend more than 750 hours in them during the year. A license is not required, and material participation must still be established for each activity."
  },
  {
    "id": "rental-5",
    "section": "rental",
    "topic": "Depreciation recovery period",
    "difficulty": "medium",
    "q": "Over what period is residential rental property depreciated?",
    "choices": [
      "39 years, straight line",
      "15 years, declining balance",
      "31.5 years, straight line",
      "27.5 years, straight line"
    ],
    "answer": 3,
    "explain": "Residential rental property placed in service after 1986 is depreciated straight line over 27.5 years using the mid-month convention. The 39-year period applies to nonresidential real property."
  },
  {
    "id": "rental-6",
    "section": "rental",
    "topic": "Land is not depreciable",
    "difficulty": "easy",
    "q": "A rental property cost $300,000, of which $60,000 is allocable to land. What is the depreciable basis?",
    "choices": [
      "$240,000",
      "$300,000",
      "$60,000",
      "$270,000"
    ],
    "answer": 0,
    "explain": "Land is never depreciable, so its allocated cost is excluded from the depreciable basis. Only the $240,000 attributable to the building is recovered over the applicable recovery period."
  },
  {
    "id": "rental-7",
    "section": "rental",
    "topic": "Repairs versus improvements",
    "difficulty": "medium",
    "q": "How is the cost of replacing an entire roof on a rental property treated?",
    "choices": [
      "Deducted in full as a repair expense",
      "Capitalized and depreciated as an improvement",
      "Deducted over three years as a prepaid expense",
      "Added to the basis of the land"
    ],
    "answer": 1,
    "explain": "A full roof replacement is a betterment or restoration of the building and must be capitalized and depreciated. Repairs that merely keep the property in ordinary operating condition, such as patching a leak, are currently deductible."
  },
  {
    "id": "rental-8",
    "section": "rental",
    "topic": "Advance rent",
    "difficulty": "easy",
    "q": "A landlord receives the final month's rent in advance when the lease is signed. When is it income?",
    "choices": [
      "In the year the rental period actually occurs",
      "Spread evenly across the term of the lease",
      "In the year received, whatever period it covers",
      "Only when the tenant actually vacates"
    ],
    "answer": 2,
    "explain": "Advance rent is taxable in the year received no matter what period it covers. A refundable security deposit the landlord intends to return is not income until it is applied against rent or retained for damages."
  },
  {
    "id": "adjust-1",
    "section": "adjust",
    "topic": "Self-employment tax deduction",
    "difficulty": "medium",
    "q": "What portion of self-employment tax is deductible as an adjustment to income?",
    "choices": [
      "The entire amount paid",
      "The employer-equivalent half",
      "None of it",
      "Only the Medicare component"
    ],
    "answer": 1,
    "explain": "A self-employed taxpayer deducts the employer-equivalent portion — generally half of the self-employment tax — as an above-the-line adjustment. The deduction reduces income tax but not the self-employment tax base itself."
  },
  {
    "id": "adjust-2",
    "section": "adjust",
    "topic": "Student loan interest",
    "difficulty": "medium",
    "q": "What is the maximum student loan interest deduction, and where is it claimed?",
    "choices": [
      "$2,500, as an itemized deduction",
      "$2,500, as an adjustment to income",
      "$4,000, as an adjustment to income",
      "Unlimited, as an itemized deduction"
    ],
    "answer": 1,
    "explain": "Up to $2,500 of qualified student loan interest is deductible as an above-the-line adjustment, so it is available whether or not the taxpayer itemizes. The deduction phases out over an income range and is denied to married taxpayers filing separately."
  },
  {
    "id": "adjust-3",
    "section": "adjust",
    "topic": "Health savings accounts",
    "difficulty": "medium",
    "q": "What coverage must a taxpayer have to contribute to a health savings account?",
    "choices": [
      "Any employer-sponsored health plan",
      "A qualifying high deductible health plan",
      "Medicare Part A coverage",
      "A flexible spending arrangement"
    ],
    "answer": 1,
    "explain": "HSA contributions require coverage under a qualifying high deductible health plan and no disqualifying additional coverage. Enrollment in Medicare ends contribution eligibility, though existing balances remain available."
  },
  {
    "id": "adjust-4",
    "section": "adjust",
    "topic": "Educator expenses",
    "difficulty": "easy",
    "q": "Who may claim the educator expense adjustment?",
    "choices": [
      "Any parent who buys supplies for a classroom",
      "A college professor of any course load",
      "A K-12 teacher working at least 900 hours",
      "A tutor operating an independent business"
    ],
    "answer": 2,
    "explain": "The adjustment is available to kindergarten through grade 12 teachers, instructors, counselors, principals, and aides who work at least 900 hours during a school year. College instructors and self-employed tutors do not qualify for it."
  },
  {
    "id": "adjust-5",
    "section": "adjust",
    "topic": "Self-employed health insurance",
    "difficulty": "medium",
    "q": "What limits the self-employed health insurance deduction?",
    "choices": [
      "Ten percent of adjusted gross income",
      "The taxpayer's total itemized deductions",
      "Net earnings from the trade or business",
      "The amount of self-employment tax paid"
    ],
    "answer": 2,
    "explain": "The deduction cannot exceed net earnings from the business generating the coverage. It is also unavailable for any month the taxpayer was eligible to participate in a subsidized plan through an employer or a spouse's employer."
  },
  {
    "id": "adjust-6",
    "section": "adjust",
    "topic": "Moving expenses",
    "difficulty": "medium",
    "q": "Who may still deduct moving expenses under current law?",
    "choices": [
      "Any taxpayer relocating for a new job",
      "A taxpayer moving more than 50 miles",
      "A retiree relocating out of state",
      "Active duty military moving under orders"
    ],
    "answer": 3,
    "explain": "The moving expense deduction is suspended for most taxpayers, remaining available only to members of the armed forces on active duty moving pursuant to a military order and permanent change of station. The old distance and time tests no longer help civilians."
  },
  {
    "id": "adjust-7",
    "section": "adjust",
    "topic": "Above the line advantage",
    "difficulty": "easy",
    "q": "Why is an adjustment to income generally more valuable than an itemized deduction of the same size?",
    "choices": [
      "It is subtracted twice on the same return",
      "It reduces adjusted gross income itself",
      "It generates a refundable credit",
      "It is not subject to federal income tax"
    ],
    "answer": 1,
    "explain": "Adjustments reduce adjusted gross income itself, and many phase-outs, floors, and credit thresholds key off that figure. An itemized deduction reduces taxable income only, and only for a taxpayer who itemizes at all."
  },
  {
    "id": "adjust-8",
    "section": "adjust",
    "topic": "Penalty on early withdrawal",
    "difficulty": "easy",
    "q": "A bank charges a penalty for cashing a certificate of deposit early. How does the depositor treat it?",
    "choices": [
      "As a capital loss",
      "As a miscellaneous itemized deduction",
      "As an adjustment to income",
      "It is not deductible at all"
    ],
    "answer": 2,
    "explain": "The forfeited interest penalty is deductible as an above-the-line adjustment, reported from the amount shown on Form 1099-INT. Full interest earned is still reported as income, with the penalty adjusted separately."
  },
  {
    "id": "itemized-1",
    "section": "itemized",
    "topic": "Medical expense floor",
    "difficulty": "easy",
    "q": "Medical expenses are deductible only to the extent they exceed what percentage of adjusted gross income?",
    "choices": [
      "7.5%",
      "2%",
      "10%",
      "5%"
    ],
    "answer": 0,
    "explain": "Unreimbursed medical and dental expenses are deductible above a 7.5% of adjusted gross income floor. The 2% floor applied to miscellaneous itemized deductions, which are currently suspended."
  },
  {
    "id": "itemized-2",
    "section": "itemized",
    "topic": "SALT cap",
    "difficulty": "medium",
    "q": "How is the deduction for state and local taxes limited?",
    "choices": [
      "Limited to a percentage of adjusted gross income",
      "Allowed only for income taxes, never sales taxes",
      "Unlimited for taxpayers who itemize",
      "Capped at a fixed dollar amount per return"
    ],
    "answer": 3,
    "explain": "The combined deduction for state and local income or sales taxes plus property taxes is capped at a fixed dollar amount per return, halved for married filing separately. Taxpayers elect either income or sales taxes, not both."
  },
  {
    "id": "itemized-3",
    "section": "itemized",
    "topic": "Charitable substantiation",
    "difficulty": "medium",
    "q": "What must a donor obtain for a single cash contribution of $250 or more?",
    "choices": [
      "A contemporaneous written acknowledgment from the charity",
      "A cancelled check, which is always sufficient",
      "An independent appraisal of the gift",
      "A Form 1099 issued by the organization"
    ],
    "answer": 0,
    "explain": "Contributions of $250 or more require a contemporaneous written acknowledgment from the donee stating the amount and whether goods or services were provided. A cancelled check alone suffices only below that threshold; appraisals apply to larger noncash gifts."
  },
  {
    "id": "itemized-4",
    "section": "itemized",
    "topic": "Appreciated property gifts",
    "difficulty": "medium",
    "q": "A taxpayer donates publicly traded stock held three years to a public charity. What is the deduction?",
    "choices": [
      "The original cost basis, with no percentage limit",
      "Fair market value, subject to a 30% AGI limit",
      "Fair market value, subject to a 60% AGI limit",
      "The lower of cost or fair market value"
    ],
    "answer": 1,
    "explain": "Long-term capital gain property given to a public charity is deductible at fair market value, limited to 30% of adjusted gross income with a five-year carryover. Basis-only treatment applies to short-term property and most ordinary income property."
  },
  {
    "id": "itemized-5",
    "section": "itemized",
    "topic": "Mortgage interest",
    "difficulty": "medium",
    "q": "Interest on a home equity loan is deductible only when the proceeds are used how?",
    "choices": [
      "For any personal purpose the borrower chooses",
      "To pay off higher-rate consumer debt",
      "To fund qualified education expenses",
      "To buy, build, or substantially improve the home"
    ],
    "answer": 3,
    "explain": "Home equity interest is deductible only if the borrowing buys, builds, or substantially improves the residence securing the loan, and it counts against the overall acquisition indebtedness limit. Proceeds used for other purposes yield nondeductible personal interest."
  },
  {
    "id": "itemized-6",
    "section": "itemized",
    "topic": "Casualty losses",
    "difficulty": "medium",
    "q": "When may an individual deduct a personal casualty loss under current law?",
    "choices": [
      "Whenever the loss was sudden and unexpected",
      "Only for losses exceeding $10,000",
      "Whenever insurance denied the claim",
      "When it arises in a federally declared disaster area"
    ],
    "answer": 3,
    "explain": "Personal casualty losses are deductible only if attributable to a federally declared disaster, apart from an offset against casualty gains. The old per-event floor and 10% of adjusted gross income limit still apply to qualifying losses."
  },
  {
    "id": "itemized-7",
    "section": "itemized",
    "topic": "Suspended miscellaneous",
    "difficulty": "medium",
    "q": "How are unreimbursed employee business expenses treated for a typical wage earner?",
    "choices": [
      "Not deductible, as miscellaneous deductions are suspended",
      "Deductible above a 2% of AGI floor",
      "Deductible as an adjustment to income",
      "Deductible in full as an itemized deduction"
    ],
    "answer": 0,
    "explain": "Miscellaneous itemized deductions subject to the 2% floor, including unreimbursed employee expenses, are suspended for most taxpayers. Narrow categories such as armed forces reservists and qualified performing artists retain an above-the-line deduction."
  },
  {
    "id": "itemized-8",
    "section": "itemized",
    "topic": "Standard deduction limits",
    "difficulty": "medium",
    "q": "Which taxpayer may not claim the standard deduction?",
    "choices": [
      "One who is claimed as a dependent by a parent",
      "One who is over age 65",
      "One with no earned income for the year",
      "One whose spouse itemizes on a separate return"
    ],
    "answer": 3,
    "explain": "If one spouse itemizes on a married filing separately return, the other must itemize too. Dependents may still claim a standard deduction, though a limited one, and age or lack of earned income does not disqualify anyone."
  },
  {
    "id": "credits-1",
    "section": "credits",
    "topic": "Refundable versus nonrefundable",
    "difficulty": "easy",
    "q": "What distinguishes a refundable credit from a nonrefundable one?",
    "choices": [
      "It may be carried forward to later years",
      "It is claimed before adjusted gross income",
      "It can produce a refund beyond the tax owed",
      "It applies only to taxpayers who itemize"
    ],
    "answer": 2,
    "explain": "A refundable credit can reduce tax below zero and generate a refund of the excess. A nonrefundable credit can only bring tax to zero, though some varieties carry forward to future years."
  },
  {
    "id": "credits-2",
    "section": "credits",
    "topic": "Earned income credit",
    "difficulty": "medium",
    "q": "Which condition disqualifies a taxpayer from the earned income credit?",
    "choices": [
      "Investment income above the statutory limit",
      "Having more than two qualifying children",
      "Being self-employed rather than an employee",
      "Filing as head of household"
    ],
    "answer": 0,
    "explain": "Investment income above an annually indexed limit disqualifies a taxpayer entirely, regardless of earned income. Self-employment income counts as earned income, and head of household is a permitted filing status for the credit."
  },
  {
    "id": "credits-3",
    "section": "credits",
    "topic": "Child tax credit",
    "difficulty": "medium",
    "q": "What age must a qualifying child be under at year end for the child tax credit?",
    "choices": [
      "17",
      "19",
      "24 if a student",
      "18"
    ],
    "answer": 0,
    "explain": "The child tax credit requires a qualifying child under age 17 at the end of the tax year who has a valid Social Security number. Older dependents may instead qualify for the smaller credit for other dependents."
  },
  {
    "id": "credits-4",
    "section": "credits",
    "topic": "Education credits",
    "difficulty": "medium",
    "q": "How does the American opportunity credit differ from the lifetime learning credit?",
    "choices": [
      "It is fully nonrefundable and unlimited in years",
      "It is partly refundable and limited to four years",
      "It applies only to graduate coursework",
      "It is claimed per return rather than per student"
    ],
    "answer": 1,
    "explain": "The American opportunity credit is 40% refundable, available for four tax years per student, and requires at least half-time enrollment in a degree program. The lifetime learning credit is nonrefundable, unlimited in years, and computed per return."
  },
  {
    "id": "credits-5",
    "section": "credits",
    "topic": "Dependent care credit",
    "difficulty": "medium",
    "q": "What must be true of expenses claimed for the child and dependent care credit?",
    "choices": [
      "They were paid to a licensed commercial facility",
      "They exceed 7.5% of adjusted gross income",
      "They allow the taxpayer to work or look for work",
      "They relate to a child under age 17"
    ],
    "answer": 2,
    "explain": "Care expenses must be incurred to enable the taxpayer, and a spouse if married, to work or actively seek work. The qualifying child must be under 13, and a relative can be the provider so long as they are not a dependent or the taxpayer's own child under 19."
  },
  {
    "id": "credits-6",
    "section": "credits",
    "topic": "Foreign tax credit",
    "difficulty": "medium",
    "q": "What choice does a taxpayer who paid foreign income taxes have?",
    "choices": [
      "Claim both a credit and a deduction for the same tax",
      "Claim a credit only if the tax exceeds $10,000",
      "Claim a deduction only, as no credit exists",
      "Claim a credit or an itemized deduction, not both"
    ],
    "answer": 3,
    "explain": "Foreign income taxes may be taken either as a credit or as an itemized deduction, and the choice applies to all foreign taxes for the year. The credit is usually more valuable because it offsets tax dollar for dollar."
  },
  {
    "id": "credits-7",
    "section": "credits",
    "topic": "Saver's credit",
    "difficulty": "medium",
    "q": "Who is eligible for the retirement savings contributions credit?",
    "choices": [
      "Any taxpayer who contributes to a retirement plan",
      "A taxpayer over age 50 making catch-up contributions",
      "Any full-time student with earned income",
      "A lower-income taxpayer who is not a full-time student"
    ],
    "answer": 3,
    "explain": "The saver's credit is available to taxpayers above age 17 with income below phase-out thresholds who are neither full-time students nor claimed as dependents. The credit rate falls in tiers as income rises."
  },
  {
    "id": "credits-8",
    "section": "credits",
    "topic": "EIC disallowance",
    "difficulty": "medium",
    "q": "A taxpayer's earned income credit was denied for reckless disregard of the rules. What form must accompany a later claim?",
    "choices": [
      "Form 8867",
      "Form 8332",
      "Form 8862",
      "Form 8615"
    ],
    "answer": 2,
    "explain": "Form 8862 must be filed to reclaim the credit after a prior disallowance for anything other than a math error. A denial for reckless or intentional disregard also bars the credit for two years, and fraud bars it for ten."
  },
  {
    "id": "othertax-1",
    "section": "othertax",
    "topic": "Self-employment tax base",
    "difficulty": "medium",
    "q": "What portion of net profit from self-employment is subject to self-employment tax?",
    "choices": [
      "100% of net earnings",
      "50% of net earnings",
      "80% of net earnings",
      "92.35% of net earnings"
    ],
    "answer": 3,
    "explain": "Net earnings from self-employment equal net profit multiplied by 92.35%, which approximates the employer-side deduction an employee would receive. The Social Security component stops at the annual wage base while Medicare continues without limit."
  },
  {
    "id": "othertax-2",
    "section": "othertax",
    "topic": "Additional Medicare tax",
    "difficulty": "medium",
    "q": "What is the rate of the additional Medicare tax on wages and self-employment income above the threshold?",
    "choices": [
      "3.8%",
      "1.45%",
      "2.9%",
      "0.9%"
    ],
    "answer": 3,
    "explain": "The additional Medicare tax is 0.9% on wages, compensation, and self-employment income above threshold amounts that vary by filing status and are not indexed. The 3.8% rate is the separate net investment income tax."
  },
  {
    "id": "othertax-3",
    "section": "othertax",
    "topic": "Net investment income tax",
    "difficulty": "medium",
    "q": "The 3.8% net investment income tax applies to the lesser of net investment income and what?",
    "choices": [
      "Total adjusted gross income for the year",
      "Modified AGI over the threshold for the filing status",
      "The taxpayer's total investment assets",
      "Taxable income after itemized deductions"
    ],
    "answer": 1,
    "explain": "The tax applies to the lesser of net investment income or the excess of modified adjusted gross income over a fixed threshold set by filing status. Wages and self-employment earnings are not net investment income, though they push modified AGI upward."
  },
  {
    "id": "othertax-4",
    "section": "othertax",
    "topic": "Kiddie tax",
    "difficulty": "medium",
    "q": "What does the kiddie tax do to a child's unearned income above the threshold?",
    "choices": [
      "Taxes it at a flat 10% rate",
      "Excludes it from income entirely",
      "Shifts it onto the parents' return automatically",
      "Taxes it at the parents' marginal rate"
    ],
    "answer": 3,
    "explain": "Unearned income above the annual threshold is taxed at the parents' marginal rate, reported on Form 8615 with the child's return. Parents may sometimes elect to report the income themselves on Form 8814 instead."
  },
  {
    "id": "othertax-5",
    "section": "othertax",
    "topic": "AMT purpose",
    "difficulty": "medium",
    "q": "How does the alternative minimum tax interact with regular tax?",
    "choices": [
      "The taxpayer pays the excess of AMT over regular tax",
      "The taxpayer pays whichever is lower",
      "AMT replaces regular tax entirely when it applies",
      "AMT is added in full to regular tax"
    ],
    "answer": 0,
    "explain": "AMT is a parallel computation, and the taxpayer owes the amount by which tentative minimum tax exceeds regular tax. Adjustments and preferences such as private activity bond interest expand the AMT base."
  },
  {
    "id": "othertax-6",
    "section": "othertax",
    "topic": "Estimated tax safe harbor",
    "difficulty": "medium",
    "q": "Which payment level generally avoids the estimated tax underpayment penalty?",
    "choices": [
      "80% of current year tax in every case",
      "50% of the current year's expected tax",
      "90% of current year tax or 100% of prior year tax",
      "Any amount, provided the balance is paid by April"
    ],
    "answer": 2,
    "explain": "The safe harbor is the lesser of 90% of the current year's tax or 100% of the prior year's tax, rising to 110% for higher-income taxpayers. Paying the full balance by the due date does not cure an underpayment across the quarters."
  },
  {
    "id": "othertax-7",
    "section": "othertax",
    "topic": "Household employment",
    "difficulty": "medium",
    "q": "Where does a taxpayer report employment taxes for a household employee?",
    "choices": [
      "Form 941, filed quarterly",
      "Schedule C, as a business expense",
      "Schedule H, filed with the individual return",
      "Form 940, filed by the employee"
    ],
    "answer": 2,
    "explain": "Household employment taxes are reported on Schedule H and carried to the individual return once cash wages reach the annual threshold. Employers of household workers generally do not file quarterly employment tax returns."
  },
  {
    "id": "othertax-8",
    "section": "othertax",
    "topic": "Excess contribution penalty",
    "difficulty": "medium",
    "q": "What additional tax applies each year to an excess contribution left in an IRA?",
    "choices": [
      "10% of the excess amount",
      "6% of the excess amount",
      "20% of the excess amount",
      "A flat $500 penalty"
    ],
    "answer": 1,
    "explain": "An excess IRA contribution carries a 6% additional tax for each year it remains in the account. Withdrawing the excess plus attributable earnings before the return due date, including extensions, avoids the tax."
  },
  {
    "id": "special-1",
    "section": "special",
    "topic": "Decedent's final return",
    "difficulty": "medium",
    "q": "Which income belongs on a cash-basis decedent's final Form 1040?",
    "choices": [
      "Income actually or constructively received before death",
      "All income the decedent earned during the calendar year",
      "Income received by the estate after death",
      "Only income reported on Forms W-2 and 1099"
    ],
    "answer": 0,
    "explain": "The final return reports income received through the date of death under the decedent's normal accounting method. Amounts earned but not received become income in respect of a decedent, taxed to the estate or the beneficiary who receives them."
  },
  {
    "id": "special-2",
    "section": "special",
    "topic": "Gift tax basics",
    "difficulty": "medium",
    "q": "Who is generally liable for federal gift tax on a taxable gift?",
    "choices": [
      "The recipient of the gift",
      "The donor",
      "Both parties in equal shares",
      "The estate of the donor at death"
    ],
    "answer": 1,
    "explain": "The donor is primarily liable for gift tax and files Form 709 when gifts to a person exceed the annual exclusion. The donee has no income from the gift and becomes liable for the tax only if the donor fails to pay."
  },
  {
    "id": "special-3",
    "section": "special",
    "topic": "Foreign earned income",
    "difficulty": "medium",
    "q": "Which test can qualify a U.S. citizen abroad for the foreign earned income exclusion?",
    "choices": [
      "Any 183 days spent abroad during the calendar year",
      "Payment of income tax to the host country",
      "Holding a work visa for the entire tax year",
      "Physical presence for 330 full days in 12 months"
    ],
    "answer": 3,
    "explain": "A taxpayer qualifies through either the bona fide residence test or physical presence for 330 full days in any period of 12 consecutive months, and must have a tax home abroad. Paying foreign tax is not itself a qualifying test."
  },
  {
    "id": "special-4",
    "section": "special",
    "topic": "FBAR filing",
    "difficulty": "medium",
    "q": "When must a U.S. person file a Report of Foreign Bank and Financial Accounts?",
    "choices": [
      "When foreign accounts exceed $10,000 in the aggregate at any time",
      "When any single account exceeds $50,000 at year end",
      "Whenever a foreign account earns interest",
      "Only when the accounts generate taxable income"
    ],
    "answer": 0,
    "explain": "An FBAR is required when the aggregate value of foreign financial accounts exceeds $10,000 at any point during the year. It is filed with FinCEN, separately from the income tax return, and is required even if no income was earned."
  },
  {
    "id": "special-5",
    "section": "special",
    "topic": "Nonresident returns",
    "difficulty": "medium",
    "q": "Which return does a nonresident alien with U.S. source income file?",
    "choices": [
      "Form 1040 with a foreign address",
      "Form 1040-NR",
      "Form 1120-F",
      "Form 8843 only"
    ],
    "answer": 1,
    "explain": "A nonresident alien files Form 1040-NR, reporting income effectively connected with a U.S. trade or business at graduated rates and most other U.S. source income at a flat rate. Form 8843 is an information statement for exempt individuals."
  },
  {
    "id": "special-6",
    "section": "special",
    "topic": "Substantial presence",
    "difficulty": "medium",
    "q": "How does the substantial presence test count days for residency?",
    "choices": [
      "All days across the three most recent years, weighted equally",
      "Only the days spent in the current calendar year",
      "Half of the days in each of the three years",
      "Current year days in full, then a third, then a sixth"
    ],
    "answer": 3,
    "explain": "The test is met with at least 31 days in the current year and 183 weighted days across three years, counting current year days in full, prior year days at one third, and second prior year days at one sixth. Meeting it makes the person a resident alien taxed on worldwide income."
  },
  {
    "id": "special-7",
    "section": "special",
    "topic": "Injured spouse",
    "difficulty": "medium",
    "q": "A joint refund is about to be offset for a debt owed only by one spouse. What relief does the other spouse seek?",
    "choices": [
      "Innocent spouse relief on Form 8857",
      "An amended return on Form 1040-X",
      "A separate return for the same year",
      "Injured spouse allocation on Form 8379"
    ],
    "answer": 3,
    "explain": "Form 8379 allocates a joint refund so the non-liable spouse receives their share despite an offset for the other's separate debt. Form 8857 addresses a different problem — relief from joint liability for an understatement of tax."
  },
  {
    "id": "special-8",
    "section": "special",
    "topic": "Estimated tax for estates",
    "difficulty": "medium",
    "q": "When must the estate of a decedent begin making estimated tax payments?",
    "choices": [
      "Immediately upon the decedent's death",
      "Only after the estate distributes all assets",
      "For tax years ending two or more years after death",
      "Estates are never required to pay estimated tax"
    ],
    "answer": 2,
    "explain": "An estate is exempt from estimated tax payments for tax years ending within two years of the decedent's death. After that grace period the ordinary estimated tax rules apply to the estate's Form 1041."
  },
  {
    "id": "status-9",
    "section": "status",
    "topic": "Relationship test",
    "difficulty": "medium",
    "q": "Which person can never be a qualifying child of the taxpayer?",
    "choices": [
      "A younger sister who lived there all year",
      "A cousin living in the household all year",
      "A grandchild of the taxpayer",
      "A stepchild of the taxpayer"
    ],
    "answer": 1,
    "explain": "The relationship test covers children, stepchildren, foster children, siblings, step-siblings, and their descendants. A cousin falls outside that list and can only ever be a qualifying relative."
  },
  {
    "id": "status-10",
    "section": "status",
    "topic": "Residency test",
    "difficulty": "medium",
    "q": "A college student lives at school nine months of the year and with her parents the rest. Does she meet the residency test?",
    "choices": [
      "No — she lived away for more than half the year",
      "Only if the parents pay her tuition directly",
      "Yes — time away at school counts as living at home",
      "Only if the school is within the same state"
    ],
    "answer": 2,
    "explain": "Temporary absences for education, illness, business, vacation, or military service count as time lived in the home. The student is treated as having lived with her parents the entire year."
  },
  {
    "id": "status-11",
    "section": "status",
    "topic": "Gross income test",
    "difficulty": "medium",
    "q": "What limits whether a person can be claimed as a qualifying relative?",
    "choices": [
      "They must be under age 19 at the end of the year",
      "They must live in the household for the whole year",
      "Their gross income must stay under an annual threshold",
      "They must be related by blood rather than marriage"
    ],
    "answer": 2,
    "explain": "A qualifying relative must have gross income below a threshold tied to the exemption amount. Age is irrelevant, and an unrelated person can qualify by living in the home all year as a member of the household."
  },
  {
    "id": "status-12",
    "section": "status",
    "topic": "Multiple support",
    "difficulty": "medium",
    "q": "Three siblings together provide all of their mother's support, none over half. How can one of them claim her?",
    "choices": [
      "By a multiple support agreement, if that one paid over 10%",
      "By agreeing to split the dependency between all three",
      "By the sibling with the highest income claiming her",
      "None of them may claim her in this situation"
    ],
    "answer": 0,
    "explain": "A multiple support agreement lets one member of a group that collectively provides over half the support claim the dependent, so long as that person contributed more than 10%. The others file Form 2120 waiving their claim."
  },
  {
    "id": "status-13",
    "section": "status",
    "topic": "Releasing the exemption",
    "difficulty": "medium",
    "q": "Which form lets a custodial parent release the dependency claim to the noncustodial parent?",
    "choices": [
      "Form 2120",
      "Form 8867",
      "Form 8332",
      "Form 8862"
    ],
    "answer": 2,
    "explain": "Form 8332 releases the claim to the child's dependency and the child tax credit. It does not transfer head of household status, the earned income credit, or the dependent care credit, which stay with the custodial parent."
  },
  {
    "id": "status-14",
    "section": "status",
    "topic": "Dependent filing",
    "difficulty": "medium",
    "q": "A dependent has $500 of wages and $1,500 of interest income. Why must she file a return?",
    "choices": [
      "Any dependent with income must file a return",
      "Her wages alone trigger a filing requirement",
      "She must file because she is claimed by someone else",
      "Her unearned income exceeds the dependent threshold"
    ],
    "answer": 3,
    "explain": "A dependent must file when unearned income exceeds a set threshold, when earned income exceeds the standard deduction available to dependents, or when the combined total exceeds a formula amount. The interest is the trigger here."
  },
  {
    "id": "status-15",
    "section": "status",
    "topic": "Custodial parent",
    "difficulty": "easy",
    "q": "For dependency purposes, who is the custodial parent?",
    "choices": [
      "The parent the child spent the greater number of nights with",
      "The parent named as custodial in the divorce decree",
      "The parent who provided more than half the support",
      "The parent who claims the child on their return"
    ],
    "answer": 0,
    "explain": "The custodial parent is determined by nights spent, not by the terms of a decree or by support paid. A court order cannot override the federal definition, though it can prompt a Form 8332 release."
  },
  {
    "id": "status-16",
    "section": "status",
    "topic": "Surviving spouse status",
    "difficulty": "medium",
    "q": "What does a taxpayer need to file as qualifying surviving spouse?",
    "choices": [
      "A dependent child and no remarriage, within two years of the death",
      "Any dependent relative living in the home for the year",
      "A dependent child, available for five years after the death",
      "No dependents, provided the spouse died in the prior year"
    ],
    "answer": 0,
    "explain": "Qualifying surviving spouse status is available for the two years following the year of death, requires a dependent child in the home, and ends on remarriage. It grants the joint-return rates and standard deduction."
  },
  {
    "id": "prelim-9",
    "section": "prelim",
    "topic": "PTIN requirement",
    "difficulty": "easy",
    "q": "Who must obtain a preparer tax identification number?",
    "choices": [
      "Anyone paid to prepare substantially all of a federal return",
      "Only enrolled agents and certified public accountants",
      "Anyone who prepares a return, paid or unpaid",
      "Only preparers who electronically file returns"
    ],
    "answer": 0,
    "explain": "Any individual who prepares, or assists in preparing, substantially all of a return for compensation must have a current PTIN and renew it annually. Volunteers preparing returns for free are not required to have one."
  },
  {
    "id": "prelim-10",
    "section": "prelim",
    "topic": "E-file authorization",
    "difficulty": "medium",
    "q": "What must an ERO obtain before transmitting a taxpayer's e-filed return?",
    "choices": [
      "A signed Form 2848 power of attorney",
      "Written approval from the IRS e-help desk",
      "A notarized copy of the taxpayer's photo identification",
      "A signed Form 8879 authorizing the transmission"
    ],
    "answer": 3,
    "explain": "Form 8879 is the e-file signature authorization, signed by the taxpayer after reviewing the return and retained by the ERO for three years. It is not filed with the return unless the IRS requests it."
  },
  {
    "id": "prelim-11",
    "section": "prelim",
    "topic": "Refund claim deadline",
    "difficulty": "medium",
    "q": "How long does a taxpayer generally have to claim a refund?",
    "choices": [
      "Three years from the original due date, with no alternative",
      "Three years from filing or two years from payment, whichever is later",
      "Two years from filing or three years from payment",
      "Ten years, matching the collection statute"
    ],
    "answer": 1,
    "explain": "The refund claim period is the later of three years from the date the return was filed or two years from the date the tax was paid. A claim filed outside both windows is barred regardless of its merit."
  },
  {
    "id": "prelim-12",
    "section": "prelim",
    "topic": "Signing for a decedent",
    "difficulty": "medium",
    "q": "Who signs the final return of a deceased taxpayer with no court-appointed representative?",
    "choices": [
      "The decedent's closest living relative in all cases",
      "No one — the return is filed unsigned with a death certificate",
      "The funeral home director handling the estate",
      "The surviving spouse, noting the death on the return"
    ],
    "answer": 3,
    "explain": "A surviving spouse filing jointly signs and writes that the taxpayer is deceased. When there is no spouse and no appointed representative, the person in charge of the decedent's property signs and files Form 1310 to claim any refund."
  },
  {
    "id": "prelim-13",
    "section": "prelim",
    "topic": "Taxpayer records",
    "difficulty": "medium",
    "q": "How long should a taxpayer keep records supporting a claimed basis in property?",
    "choices": [
      "Three years from the year the property was purchased",
      "Until the period of limitations runs on the year of sale",
      "One year after the property is fully depreciated",
      "Seven years from the date of purchase in every case"
    ],
    "answer": 1,
    "explain": "Basis records must survive far longer than the ordinary three-year rule, because basis affects the gain reported when the property is finally sold. Keep them until the limitations period closes on the return reporting that sale."
  },
  {
    "id": "prelim-14",
    "section": "prelim",
    "topic": "Estimated payment dates",
    "difficulty": "medium",
    "q": "What are the four estimated tax due dates for a calendar-year individual?",
    "choices": [
      "March 15, June 15, September 15, and December 15",
      "April 15, June 15, September 15, and January 15",
      "April 15, July 15, October 15, and January 15",
      "The 15th of each calendar quarter's final month"
    ],
    "answer": 1,
    "explain": "Estimated payments are due April 15, June 15, September 15, and January 15 of the following year. The intervals are deliberately uneven, so the quarters are not three months apart."
  },
  {
    "id": "prelim-15",
    "section": "prelim",
    "topic": "Direct deposit limits",
    "difficulty": "medium",
    "q": "How many refunds may be direct-deposited into a single financial account?",
    "choices": [
      "One per account, per calendar year",
      "Five, matching the Form 8888 allocation limit",
      "Three, after which the IRS issues a paper check",
      "There is no limit on deposits to one account"
    ],
    "answer": 2,
    "explain": "The IRS limits electronic deposits to three refunds per financial account, an anti-fraud measure. Additional refunds are converted to paper checks mailed to the address of record."
  },
  {
    "id": "prelim-16",
    "section": "prelim",
    "topic": "Identity protection PIN",
    "difficulty": "medium",
    "q": "What happens to an e-filed return when a taxpayer with an IP PIN omits it?",
    "choices": [
      "The return is accepted but the refund is delayed",
      "The IRS assigns a replacement PIN automatically",
      "The return is rejected",
      "The return converts to a paper filing at the IRS"
    ],
    "answer": 2,
    "explain": "A return filed without the taxpayer's current IP PIN is rejected electronically, and a paper return filed without it faces additional review. The number is reissued each calendar year."
  },
  {
    "id": "income-9",
    "section": "income",
    "topic": "Tip reporting",
    "difficulty": "medium",
    "q": "A server receives $180 in cash tips during a month. What is the reporting obligation?",
    "choices": [
      "Report the tips only on the annual return",
      "Report tips to the employer by the 10th of the next month",
      "Nothing — cash tips under $200 monthly are exempt",
      "Report tips to the employer within three business days"
    ],
    "answer": 1,
    "explain": "An employee receiving $20 or more in tips in a month must report them to the employer by the 10th of the following month so payroll taxes are withheld. Unreported tips are picked up on Form 4137 with the return."
  },
  {
    "id": "income-10",
    "section": "income",
    "topic": "Unemployment benefits",
    "difficulty": "easy",
    "q": "How is unemployment compensation treated on a federal return?",
    "choices": [
      "Excluded from gross income entirely",
      "Taxable only above a base amount",
      "Taxed at long-term capital gain rates",
      "Fully taxable as ordinary income"
    ],
    "answer": 3,
    "explain": "Unemployment compensation is fully includible in gross income and reported on Form 1099-G. Recipients may elect voluntary withholding to avoid an underpayment at filing."
  },
  {
    "id": "income-11",
    "section": "income",
    "topic": "Scholarship exclusion",
    "difficulty": "medium",
    "q": "Which part of a degree candidate's scholarship is taxable?",
    "choices": [
      "Amounts used for required tuition",
      "Amounts used for required course books",
      "The entire scholarship, in every case",
      "Amounts used for room and board"
    ],
    "answer": 3,
    "explain": "A degree candidate excludes scholarship amounts spent on tuition and required fees, books, supplies, and equipment. Amounts covering room, board, or travel are taxable, as is any part representing payment for services."
  },
  {
    "id": "income-12",
    "section": "income",
    "topic": "Educational assistance",
    "difficulty": "medium",
    "q": "How much employer-provided educational assistance may an employee exclude annually?",
    "choices": [
      "Up to $2,500 under a qualified program",
      "Up to $5,250 under a qualified program",
      "Any amount, if the courses are job-related",
      "Nothing — employer education benefits are wages"
    ],
    "answer": 1,
    "explain": "A qualified educational assistance program lets an employee exclude up to $5,250 per year for tuition, fees, and books. Job-related education can also qualify separately as a working condition fringe benefit without a dollar cap."
  },
  {
    "id": "income-13",
    "section": "income",
    "topic": "Dependent care benefits",
    "difficulty": "medium",
    "q": "What happens to employer dependent care benefits above the annual exclusion?",
    "choices": [
      "The excess is refunded to the employer",
      "The excess is added to the employee's taxable wages",
      "The excess carries forward to the following year",
      "The excess converts into a nonrefundable credit"
    ],
    "answer": 1,
    "explain": "Dependent care assistance is excludable up to an annual cap, and anything above it is taxable wages reported on Form W-2. Amounts excluded also reduce the expenses available for the dependent care credit."
  },
  {
    "id": "income-14",
    "section": "income",
    "topic": "Prizes and awards",
    "difficulty": "easy",
    "q": "A taxpayer wins a televised contest and receives a car. What is the tax result?",
    "choices": [
      "Nothing is taxable, as prizes are treated as gifts",
      "Only the amount above the taxpayer's cost is taxed",
      "The fair market value is included in gross income",
      "The value is taxed at long-term capital gain rates"
    ],
    "answer": 2,
    "explain": "Prizes and awards are included in gross income at fair market value. A narrow exception exists for certain achievement awards assigned directly to charity and for qualifying employee achievement awards."
  },
  {
    "id": "income-15",
    "section": "income",
    "topic": "Hobby income",
    "difficulty": "medium",
    "q": "How does a taxpayer report income from an activity not engaged in for profit?",
    "choices": [
      "Income in full, with related expenses not deductible",
      "Income net of all directly related expenses",
      "Income and expenses on Schedule C",
      "Neither the income nor the expenses"
    ],
    "answer": 0,
    "explain": "Hobby income is reported in full while hobby expenses are not deductible, since the miscellaneous itemized deduction that once allowed them is suspended. Nine factors distinguish a hobby from a trade or business."
  },
  {
    "id": "income-16",
    "section": "income",
    "topic": "Bartering",
    "difficulty": "easy",
    "q": "Two professionals trade services of equal value with no cash changing hands. What must each report?",
    "choices": [
      "The fair market value of services received",
      "Nothing, since no money was exchanged",
      "Half the value of the services received",
      "Only the excess if the values were unequal"
    ],
    "answer": 0,
    "explain": "Bartering produces gross income equal to the fair market value of the property or services received. Barter exchanges report these transactions to participants and the IRS on Form 1099-B."
  },
  {
    "id": "invest-9",
    "section": "invest",
    "topic": "Return of capital",
    "difficulty": "medium",
    "q": "A corporation distributes cash exceeding its earnings and profits. How is the excess treated?",
    "choices": [
      "An ordinary dividend taxed at regular rates",
      "A qualified dividend at capital gain rates",
      "Tax-exempt income with no basis effect",
      "A return of capital that reduces stock basis"
    ],
    "answer": 3,
    "explain": "A distribution beyond earnings and profits is a nontaxable return of capital that reduces basis, and any amount beyond remaining basis is capital gain. Box 3 of Form 1099-DIV reports the nondividend portion."
  },
  {
    "id": "invest-10",
    "section": "invest",
    "topic": "Capital gain distributions",
    "difficulty": "medium",
    "q": "A mutual fund reports a capital gain distribution to a shareholder who sold nothing. How is it taxed?",
    "choices": [
      "As long-term capital gain regardless of holding period",
      "As short-term gain unless shares were held a year",
      "As an ordinary dividend at regular rates",
      "It is not taxable until the shares are sold"
    ],
    "answer": 0,
    "explain": "Capital gain distributions from a regulated investment company are always long-term to the shareholder, no matter how briefly the shares were held. They are reported in box 2a of Form 1099-DIV."
  },
  {
    "id": "invest-11",
    "section": "invest",
    "topic": "Accrued interest purchased",
    "difficulty": "medium",
    "q": "A buyer pays the seller accrued interest when purchasing a bond between payment dates. How is that handled?",
    "choices": [
      "Added to the buyer's basis in the bond",
      "Deducted as investment interest expense",
      "Subtracted from interest income as accrued interest paid",
      "Ignored, since it is part of the purchase price"
    ],
    "answer": 2,
    "explain": "The buyer reports the full interest received at the next payment date and subtracts the accrued interest paid to the seller, so only interest earned during actual ownership is taxed. It reduces interest income rather than adjusting basis."
  },
  {
    "id": "invest-12",
    "section": "invest",
    "topic": "Stock splits",
    "difficulty": "easy",
    "q": "A taxpayer holding 100 shares receives 100 more in a 2-for-1 split. What is the tax effect?",
    "choices": [
      "Dividend income equal to the new shares' value",
      "Capital gain equal to the new shares' value",
      "No income; the original basis spreads over 200 shares",
      "No income, and the new shares take a zero basis"
    ],
    "answer": 2,
    "explain": "A stock split is not a taxable event. The existing basis is reallocated across the larger number of shares, and the new shares inherit the original holding period."
  },
  {
    "id": "invest-13",
    "section": "invest",
    "topic": "Reinvested dividends",
    "difficulty": "medium",
    "q": "Why do reinvested dividends matter when a taxpayer later sells fund shares?",
    "choices": [
      "They reduce basis, increasing the eventual gain",
      "They were taxed already and add to basis",
      "They convert the gain from long-term to short-term",
      "They have no effect on the calculation of gain"
    ],
    "answer": 1,
    "explain": "Dividends reinvested in additional shares were taxed when declared, so they increase basis. Forgetting them is a common error that causes the same income to be taxed twice."
  },
  {
    "id": "invest-14",
    "section": "invest",
    "topic": "Series I bonds",
    "difficulty": "medium",
    "q": "What distinguishes Series I savings bond interest?",
    "choices": [
      "It combines a fixed rate with an inflation adjustment",
      "It is exempt from federal tax in all circumstances",
      "It is paid in cash semiannually to the holder",
      "It is taxed as long-term capital gain at redemption"
    ],
    "answer": 0,
    "explain": "Series I bonds earn a composite rate built from a fixed rate and a semiannual inflation rate. The interest is exempt from state and local tax but subject to federal tax, generally deferred until redemption."
  },
  {
    "id": "invest-15",
    "section": "invest",
    "topic": "Taxable equivalent yield",
    "difficulty": "medium",
    "q": "A taxpayer in the 24% bracket compares a 3% municipal bond to a taxable bond. What taxable yield is equivalent?",
    "choices": [
      "About 3.24%",
      "About 3.72%",
      "About 3.95%",
      "About 2.28%"
    ],
    "answer": 2,
    "explain": "Taxable equivalent yield is the tax-exempt rate divided by one minus the marginal rate: 3% divided by 0.76 is roughly 3.95%. Any taxable bond yielding less leaves the investor worse off after tax."
  },
  {
    "id": "invest-16",
    "section": "invest",
    "topic": "Interest on refunds",
    "difficulty": "easy",
    "q": "The IRS pays a taxpayer interest on a delayed refund. How is that interest treated?",
    "choices": [
      "Excluded, because the refund itself is not income",
      "A reduction of the following year's tax liability",
      "Taxable interest income in the year received",
      "Taxable only if it exceeds the refund amount"
    ],
    "answer": 2,
    "explain": "Interest paid by the IRS on a late refund is taxable interest income, reported on Form 1099-INT. The refund of tax itself is not income unless the tax was deducted in a prior year."
  },
  {
    "id": "gains-9",
    "section": "gains",
    "topic": "Like-kind exchanges",
    "difficulty": "medium",
    "q": "What property still qualifies for like-kind exchange treatment?",
    "choices": [
      "Real property held for business or investment",
      "Any business property, including equipment",
      "Personal-use residences held over two years",
      "Publicly traded stock held for investment"
    ],
    "answer": 0,
    "explain": "Section 1031 is limited to real property held for productive use in a trade or business or for investment. Personal property exchanges lost the deferral, and stock and personal residences never qualified."
  },
  {
    "id": "gains-10",
    "section": "gains",
    "topic": "Installment sales",
    "difficulty": "medium",
    "q": "How does a seller report gain under the installment method?",
    "choices": [
      "As payments are received, using a gross profit ratio",
      "Entirely in the year of the sale",
      "Entirely in the year the final payment arrives",
      "Spread evenly over the term of the note"
    ],
    "answer": 0,
    "explain": "The installment method spreads gain across the years payments are received, applying the gross profit percentage to each principal payment. Interest is reported separately, and dealers and publicly traded stock are ineligible."
  },
  {
    "id": "gains-11",
    "section": "gains",
    "topic": "Section 1244 stock",
    "difficulty": "medium",
    "q": "What is the benefit of qualifying small business stock under section 1244?",
    "choices": [
      "Gain on the stock is excluded from income entirely",
      "The stock is exempt from the wash sale rules",
      "Loss on the stock is ordinary rather than capital",
      "Gain on the stock is deferred until reinvested"
    ],
    "answer": 2,
    "explain": "Section 1244 lets an original shareholder treat a loss on small business corporation stock as an ordinary loss, within annual limits, instead of a capital loss capped at $3,000 against ordinary income."
  },
  {
    "id": "gains-12",
    "section": "gains",
    "topic": "Involuntary conversion",
    "difficulty": "medium",
    "q": "A taxpayer receives insurance proceeds exceeding basis after a fire destroys business property. How can gain be deferred?",
    "choices": [
      "By reinvesting in similar property within the replacement period",
      "By reporting the gain over five equal annual installments",
      "By donating the proceeds to a qualified charity",
      "Gain from an involuntary conversion cannot be deferred"
    ],
    "answer": 0,
    "explain": "Section 1033 lets gain be deferred to the extent proceeds are reinvested in property similar or related in service or use, generally within two years after the close of the year the gain is realized. Any proceeds not reinvested are taxable."
  },
  {
    "id": "gains-13",
    "section": "gains",
    "topic": "Basis adjustments",
    "difficulty": "easy",
    "q": "Which item increases a homeowner's basis in a residence?",
    "choices": [
      "Repainting a bedroom",
      "Fixing a leaking faucet",
      "Annual property taxes paid",
      "A room addition"
    ],
    "answer": 3,
    "explain": "Capital improvements that add value or prolong life increase basis. Routine repairs and maintenance do not, nor do property taxes, which are separately deductible subject to the state and local cap."
  },
  {
    "id": "gains-14",
    "section": "gains",
    "topic": "Identifying shares sold",
    "difficulty": "medium",
    "q": "A taxpayer sells part of a stock position bought at different times. Which method applies absent identification?",
    "choices": [
      "Last-in, first-out",
      "Average cost for all securities",
      "The lot producing the smallest gain",
      "First-in, first-out"
    ],
    "answer": 3,
    "explain": "Without adequate identification at the time of sale, shares are treated as sold first-in, first-out. Average cost is available for mutual fund shares but not for individual stock."
  },
  {
    "id": "gains-15",
    "section": "gains",
    "topic": "Depreciation recapture",
    "difficulty": "medium",
    "q": "How is gain attributable to straight-line depreciation on rental real estate taxed?",
    "choices": [
      "As ordinary income at the taxpayer's marginal rate",
      "At the standard long-term capital gain rates",
      "As unrecaptured section 1250 gain, at a maximum 25%",
      "At the 28% rate applied to collectibles"
    ],
    "answer": 2,
    "explain": "Gain up to the depreciation allowed on section 1250 property is unrecaptured section 1250 gain, taxed at a maximum 25% rate. Gain beyond that is ordinary long-term capital gain."
  },
  {
    "id": "gains-16",
    "section": "gains",
    "topic": "Losses on personal property",
    "difficulty": "medium",
    "q": "A taxpayer sells a personal-use car for less than its cost. What is the result?",
    "choices": [
      "The loss is a deductible capital loss",
      "The loss is not deductible",
      "The loss is an ordinary deduction",
      "The loss offsets other vehicle gains only"
    ],
    "answer": 1,
    "explain": "Losses on the sale of personal-use property are never deductible, even though a gain on the same property would be taxable. Only business or investment property produces a deductible loss."
  },
  {
    "id": "retire-9",
    "section": "retire",
    "topic": "Roth conversions",
    "difficulty": "medium",
    "q": "What is the immediate tax effect of converting a fully deductible traditional IRA to a Roth?",
    "choices": [
      "The conversion is tax-free if completed within 60 days",
      "The amount is taxed at long-term capital gain rates",
      "Tax is deferred until the Roth is finally distributed",
      "The converted amount is included in income that year"
    ],
    "answer": 3,
    "explain": "A conversion is taxable in the year it occurs, to the extent the traditional IRA holds pre-tax dollars. The 10% early distribution penalty does not apply to the conversion itself, though a five-year clock starts for penalty purposes."
  },
  {
    "id": "retire-10",
    "section": "retire",
    "topic": "SIMPLE IRA two-year rule",
    "difficulty": "medium",
    "q": "What penalty applies to an early distribution from a SIMPLE IRA within two years of first participation?",
    "choices": [
      "20% instead of the usual 10%",
      "10%, the same as any other IRA",
      "25% instead of the usual 10%",
      "6%, matching the excess contribution tax"
    ],
    "answer": 2,
    "explain": "Early distributions from a SIMPLE IRA during the first two years of participation carry a 25% additional tax. After two years the ordinary 10% early distribution rules apply."
  },
  {
    "id": "retire-11",
    "section": "retire",
    "topic": "Inherited IRA timing",
    "difficulty": "medium",
    "q": "A non-spouse beneficiary inherits an IRA from someone who died recently. When must the account generally be emptied?",
    "choices": [
      "Within 5 years of the owner's death",
      "Within 10 years of the owner's death",
      "Over the beneficiary's life expectancy",
      "By the beneficiary's own required beginning date"
    ],
    "answer": 1,
    "explain": "Most non-spouse beneficiaries must fully distribute an inherited IRA within 10 years. Eligible designated beneficiaries — a spouse, a minor child of the owner, a disabled or chronically ill person, or someone close in age — may still stretch distributions."
  },
  {
    "id": "retire-12",
    "section": "retire",
    "topic": "Spousal IRA",
    "difficulty": "medium",
    "q": "How can a spouse with no earned income contribute to an IRA?",
    "choices": [
      "By transferring funds from the working spouse's IRA",
      "Only by filing separately and claiming a special election",
      "A spouse with no earned income cannot contribute",
      "On a joint return, using the working spouse's compensation"
    ],
    "answer": 3,
    "explain": "A spousal IRA lets a nonworking spouse contribute based on the couple's combined compensation, provided they file jointly. The account remains individually owned despite being funded from the other spouse's earnings."
  },
  {
    "id": "retire-13",
    "section": "retire",
    "topic": "Catch-up contributions",
    "difficulty": "easy",
    "q": "At what age may a taxpayer begin making IRA catch-up contributions?",
    "choices": [
      "50",
      "55",
      "59 and a half",
      "60"
    ],
    "answer": 0,
    "explain": "Catch-up contributions to an IRA are permitted for taxpayers who reach age 50 by the end of the tax year. Employer plans such as 401(k)s use the same age 50 threshold with a larger catch-up amount."
  },
  {
    "id": "retire-14",
    "section": "retire",
    "topic": "Substantially equal payments",
    "difficulty": "medium",
    "q": "How can a taxpayer under 59 and a half draw from an IRA without the 10% additional tax?",
    "choices": [
      "Any withdrawal repaid within the same tax year",
      "A single annual withdrawal under $10,000",
      "Withdrawals taken after leaving employment",
      "A series of substantially equal periodic payments"
    ],
    "answer": 3,
    "explain": "Substantially equal periodic payments under section 72(t) avoid the additional tax, but the series must continue for five years or until age 59 and a half, whichever is longer. Modifying it early triggers retroactive penalties."
  },
  {
    "id": "retire-15",
    "section": "retire",
    "topic": "Pension general rule",
    "difficulty": "medium",
    "q": "A retiree made after-tax contributions to a pension. How is each payment treated?",
    "choices": [
      "Fully taxable until basis is exhausted",
      "Fully tax-free until basis is exhausted",
      "Fully taxable, with basis recovered at death",
      "Partly a tax-free return of basis, partly taxable"
    ],
    "answer": 3,
    "explain": "Each payment is split between a tax-free recovery of the after-tax investment and taxable income, computed under the simplified method or the general rule. The exclusion stops once the full basis has been recovered."
  },
  {
    "id": "retire-16",
    "section": "retire",
    "topic": "Excess deferral",
    "difficulty": "medium",
    "q": "An employee defers more than the annual 401(k) limit across two employers. What must happen?",
    "choices": [
      "The excess automatically rolls into an IRA",
      "The excess is forfeited to the plan",
      "Nothing — the limit applies per employer",
      "The excess is withdrawn by April 15 of the next year"
    ],
    "answer": 3,
    "explain": "The deferral limit is per individual, not per plan, so an employee with two jobs can exceed it. The excess plus earnings must be distributed by April 15 following the year of deferral or it is taxed twice."
  },
  {
    "id": "rental-9",
    "section": "rental",
    "topic": "Mixed-use dwelling",
    "difficulty": "medium",
    "q": "When is a dwelling treated as a residence, limiting rental deductions?",
    "choices": [
      "Personal use exceeds 14 days or 10% of rental days",
      "Personal use exceeds 30 days in the year",
      "The owner stays there at any point in the year",
      "Rental days fall below 100 for the year"
    ],
    "answer": 0,
    "explain": "A dwelling is a residence when personal use exceeds the greater of 14 days or 10% of the days rented at fair value. Deductions are then capped at rental income, with the excess carried forward."
  },
  {
    "id": "rental-10",
    "section": "rental",
    "topic": "Expense allocation",
    "difficulty": "medium",
    "q": "How are expenses split on a property used both personally and as a rental?",
    "choices": [
      "Equally between personal and rental use",
      "By the ratio of rental days to total days used",
      "Entirely to the rental activity",
      "By the ratio of rental income to total income"
    ],
    "answer": 1,
    "explain": "Expenses are allocated on the basis of days rented at fair rental value over total days of use. Days spent solely on repairs and maintenance do not count as personal use."
  },
  {
    "id": "rental-11",
    "section": "rental",
    "topic": "Security deposits",
    "difficulty": "easy",
    "q": "A landlord holds a refundable security deposit intending to return it. When is it income?",
    "choices": [
      "When it is kept or applied to rent",
      "In the year it is received, always",
      "Evenly across the lease term",
      "Never, since deposits are the tenant's property"
    ],
    "answer": 0,
    "explain": "A refundable deposit the landlord intends to return is not income when received. It becomes income if retained for damages or applied as a final rent payment."
  },
  {
    "id": "rental-12",
    "section": "rental",
    "topic": "At-risk rules",
    "difficulty": "medium",
    "q": "What do the at-risk rules limit?",
    "choices": [
      "Losses to the amount of passive income earned",
      "Deductions to a fixed percentage of gross rents",
      "Losses to the amount the taxpayer could actually lose",
      "Depreciation to the property's original cost"
    ],
    "answer": 2,
    "explain": "At-risk rules cap deductible losses at the taxpayer's economic exposure — cash invested plus recourse debt plus qualified nonrecourse financing. They are applied before the passive activity loss rules."
  },
  {
    "id": "rental-13",
    "section": "rental",
    "topic": "Releasing suspended losses",
    "difficulty": "medium",
    "q": "What happens to suspended passive losses when the activity is sold to an unrelated party?",
    "choices": [
      "They are permanently lost on disposition",
      "They transfer to the buyer of the property",
      "They become fully deductible in the year of disposition",
      "They convert into a capital loss subject to the $3,000 cap"
    ],
    "answer": 2,
    "explain": "A fully taxable disposition of an entire passive activity to an unrelated party frees all suspended losses, deductible against any income. A gift or a sale to a related party does not trigger the release."
  },
  {
    "id": "rental-14",
    "section": "rental",
    "topic": "Short-term rentals",
    "difficulty": "medium",
    "q": "Why might a rental with an average stay of seven days or less escape passive treatment?",
    "choices": [
      "Short-term rentals are always fully deductible",
      "It qualifies for the real estate professional exception",
      "It is not a rental activity under the passive rules",
      "It automatically becomes a Schedule C business"
    ],
    "answer": 2,
    "explain": "Average customer use of seven days or less takes the activity outside the definition of a rental activity, so material participation alone determines whether losses are passive. It does not by itself make the activity a trade or business for self-employment tax."
  },
  {
    "id": "rental-15",
    "section": "rental",
    "topic": "Schedule E",
    "difficulty": "easy",
    "q": "Where does an individual report ordinary rental income and expenses?",
    "choices": [
      "Schedule C",
      "Schedule D",
      "Schedule F",
      "Schedule E"
    ],
    "answer": 3,
    "explain": "Rental real estate income and expenses go on Schedule E. Schedule C applies when substantial services are provided to occupants, as with a hotel or bed and breakfast, which also brings self-employment tax."
  },
  {
    "id": "rental-16",
    "section": "rental",
    "topic": "Depreciation is not optional",
    "difficulty": "medium",
    "q": "A landlord never claimed depreciation on a rental. What is the effect at sale?",
    "choices": [
      "Basis is unreduced, so gain is correspondingly smaller",
      "The missed depreciation becomes a capital loss",
      "The property is treated as personal-use property",
      "Gain is computed as if depreciation had been taken"
    ],
    "answer": 3,
    "explain": "Basis is reduced by depreciation allowed or allowable, so failing to claim it does not preserve basis. The remedy is a change in accounting method on Form 3115 to recover the missed deductions."
  },
  {
    "id": "adjust-9",
    "section": "adjust",
    "topic": "Self-employed plans",
    "difficulty": "medium",
    "q": "Where does a self-employed person deduct contributions to their own SEP plan?",
    "choices": [
      "As a business expense on Schedule C",
      "As an itemized deduction on Schedule A",
      "As an adjustment to income on Form 1040",
      "Contributions for the owner are not deductible"
    ],
    "answer": 2,
    "explain": "A self-employed person deducts their own SEP, SIMPLE, or qualified plan contributions as an adjustment to income, not on Schedule C. Contributions made for employees are deducted on Schedule C as a business expense."
  },
  {
    "id": "adjust-10",
    "section": "adjust",
    "topic": "HSA contribution deadline",
    "difficulty": "medium",
    "q": "By when must an HSA contribution be made to count for the prior year?",
    "choices": [
      "December 31 of the tax year",
      "The extended due date of the return",
      "Within 60 days after the year ends",
      "The unextended due date of that year's return"
    ],
    "answer": 3,
    "explain": "HSA contributions for a tax year may be made through the unextended due date of the return, generally April 15. Filing an extension does not extend the contribution window, unlike the rule for SEP plans."
  },
  {
    "id": "adjust-11",
    "section": "adjust",
    "topic": "HSA coverage tiers",
    "difficulty": "easy",
    "q": "What determines the annual HSA contribution limit?",
    "choices": [
      "The taxpayer's adjusted gross income",
      "The amount of medical expenses actually incurred",
      "The number of dependents claimed on the return",
      "Whether coverage is self-only or family"
    ],
    "answer": 3,
    "explain": "The limit depends on whether the high deductible plan provides self-only or family coverage, plus a catch-up amount at age 55. Income and actual medical spending do not affect the ceiling."
  },
  {
    "id": "adjust-12",
    "section": "adjust",
    "topic": "Who deducts student loan interest",
    "difficulty": "medium",
    "q": "A parent pays interest on a loan for which only the child is legally liable. Who may deduct it?",
    "choices": [
      "Neither, on these facts",
      "The parent, as the person who actually made the payment",
      "The child, since the debt is legally theirs alone",
      "Either of them, provided they agree in writing"
    ],
    "answer": 0,
    "explain": "The deduction requires being both legally obligated on the loan and the one who paid. A parent paying a loan in the child's name alone fails the liability test, and the child fails the payment test unless treated as having received a gift."
  },
  {
    "id": "adjust-13",
    "section": "adjust",
    "topic": "Reservist expenses",
    "difficulty": "medium",
    "q": "How does a National Guard member 200 miles from home deduct travel to drill?",
    "choices": [
      "As an itemized deduction on Schedule A",
      "As a business expense on Schedule C",
      "As an adjustment to income, above the line",
      "It is not deductible under current law"
    ],
    "answer": 2,
    "explain": "Members of a reserve component traveling more than 100 miles from home for duty deduct their travel as an adjustment to income. That preserves the deduction for reservists even though ordinary unreimbursed employee expenses are suspended."
  },
  {
    "id": "adjust-14",
    "section": "adjust",
    "topic": "Performing artists",
    "difficulty": "medium",
    "q": "Which taxpayer may deduct employee business expenses above the line?",
    "choices": [
      "Any employee whose employer offers no reimbursement",
      "Any taxpayer with expenses above 2% of income",
      "A qualified performing artist meeting income tests",
      "An employee who works primarily from home"
    ],
    "answer": 2,
    "explain": "Qualified performing artists, fee-basis state or local officials, reservists, and employees with impairment-related work expenses retain an above-the-line deduction. Everyone else lost it when miscellaneous itemized deductions were suspended."
  },
  {
    "id": "adjust-15",
    "section": "adjust",
    "topic": "Alimony transition rule",
    "difficulty": "medium",
    "q": "A 2016 divorce decree is modified in 2023 without adopting the new rules. How is alimony treated?",
    "choices": [
      "Now nondeductible and nontaxable, as the decree changed",
      "Deductible only for payments made before the modification",
      "Nontaxable to the recipient but still deductible by the payer",
      "Still deductible by the payer and taxable to the recipient"
    ],
    "answer": 3,
    "explain": "Pre-2019 decrees keep the old treatment unless a modification expressly states that the post-2018 rules apply. Merely changing the amount does not flip the treatment."
  },
  {
    "id": "adjust-16",
    "section": "adjust",
    "topic": "Health savings withdrawals",
    "difficulty": "medium",
    "q": "What additional tax applies to an HSA distribution not used for qualified medical expenses?",
    "choices": [
      "20% on top of ordinary income tax",
      "10% on top of ordinary income tax",
      "6% on the excess distributed",
      "None, provided the account was open a year"
    ],
    "answer": 0,
    "explain": "Nonqualified HSA distributions are included in income and carry a 20% additional tax. The additional tax does not apply after age 65, or on death or disability, though the distribution remains taxable."
  },
  {
    "id": "itemized-9",
    "section": "itemized",
    "topic": "Cash gift AGI limit",
    "difficulty": "medium",
    "q": "What percentage of adjusted gross income generally limits cash gifts to public charities?",
    "choices": [
      "60%",
      "30%",
      "50%",
      "20%"
    ],
    "answer": 0,
    "explain": "Cash contributions to public charities are deductible up to 60% of adjusted gross income, with a five-year carryover for the excess. Gifts of appreciated capital gain property carry a 30% limit."
  },
  {
    "id": "itemized-10",
    "section": "itemized",
    "topic": "Noncash substantiation",
    "difficulty": "medium",
    "q": "What is required for total noncash contributions above $500?",
    "choices": [
      "Form 8283 filed with the return",
      "A qualified appraisal for each item",
      "A contemporaneous written acknowledgment only",
      "A photograph of each donated item"
    ],
    "answer": 0,
    "explain": "Noncash gifts totaling more than $500 require Form 8283. Contributions above $5,000 for an item or group of similar items generally add a qualified appraisal, with an exception for publicly traded securities."
  },
  {
    "id": "itemized-11",
    "section": "itemized",
    "topic": "Volunteer expenses",
    "difficulty": "medium",
    "q": "Which cost may a charity volunteer deduct?",
    "choices": [
      "The value of the volunteer's donated time",
      "Wages lost while performing volunteer work",
      "Mileage driven for the charity at the charitable rate",
      "Childcare paid so the volunteer could serve"
    ],
    "answer": 2,
    "explain": "Out-of-pocket costs such as mileage at the statutory charitable rate, supplies, and uniforms are deductible. The value of donated services, forgone wages, and personal childcare never are."
  },
  {
    "id": "itemized-12",
    "section": "itemized",
    "topic": "Qualifying medical costs",
    "difficulty": "medium",
    "q": "Which expense qualifies as a deductible medical expense?",
    "choices": [
      "Prescribed insulin and doctor-ordered equipment",
      "Nonprescription vitamins taken daily",
      "A health club membership for general fitness",
      "Cosmetic surgery to improve appearance"
    ],
    "answer": 0,
    "explain": "Deductible medical care means costs of diagnosis, cure, mitigation, treatment, or prevention of disease, including prescriptions and prescribed equipment. General health items, gym fees, and purely cosmetic procedures are excluded."
  },
  {
    "id": "itemized-13",
    "section": "itemized",
    "topic": "Long-term care premiums",
    "difficulty": "medium",
    "q": "How are qualified long-term care insurance premiums treated?",
    "choices": [
      "Fully deductible with no limitation",
      "Deductible only by self-employed taxpayers",
      "Not deductible under any circumstances",
      "Deductible as medical expenses, capped by age"
    ],
    "answer": 3,
    "explain": "Premiums on a qualified long-term care contract count as medical expenses, subject to an annual per-person cap that increases with the insured's age. They then face the 7.5% adjusted gross income floor."
  },
  {
    "id": "itemized-14",
    "section": "itemized",
    "topic": "Points on a purchase",
    "difficulty": "medium",
    "q": "How are points paid to obtain a mortgage on a principal residence treated?",
    "choices": [
      "Generally deductible in full in the year paid",
      "Amortized over the life of the loan in every case",
      "Added to the basis of the residence",
      "Not deductible, as they are a loan cost"
    ],
    "answer": 0,
    "explain": "Points paid to buy or build a main home are generally deductible in the year paid when they meet a set of conditions. Points on a refinance are amortized over the loan term instead."
  },
  {
    "id": "itemized-15",
    "section": "itemized",
    "topic": "Gifts to individuals",
    "difficulty": "easy",
    "q": "A taxpayer gives $2,000 directly to a family devastated by a flood. Is it deductible?",
    "choices": [
      "Yes, as a charitable contribution",
      "No — gifts to individuals are never deductible",
      "Yes, as a casualty-related deduction",
      "Only if the family provides written acknowledgment"
    ],
    "answer": 1,
    "explain": "Charitable deductions require a gift to a qualified organization. Generosity toward a specific individual, however deserving, produces no deduction, though it may be a gift for gift tax purposes."
  },
  {
    "id": "itemized-16",
    "section": "itemized",
    "topic": "Where gambling losses go",
    "difficulty": "medium",
    "q": "Where does a casual gambler deduct losses up to winnings?",
    "choices": [
      "As an adjustment to income above the line",
      "As a miscellaneous deduction above the 2% floor",
      "As an itemized deduction not subject to the 2% floor",
      "Netted directly against winnings on Schedule 1"
    ],
    "answer": 2,
    "explain": "Gambling losses are itemized deductions exempt from the suspended 2% category, so they survive. A taxpayer taking the standard deduction gets no benefit from them at all."
  },
  {
    "id": "credits-9",
    "section": "credits",
    "topic": "Additional child tax credit",
    "difficulty": "medium",
    "q": "What makes the additional child tax credit valuable to a low-income family?",
    "choices": [
      "It doubles the nonrefundable child tax credit",
      "It is refundable, computed from earned income",
      "It applies to dependents of any age",
      "It carries forward to future tax years"
    ],
    "answer": 1,
    "explain": "The additional child tax credit is the refundable portion, generally 15% of earned income above a threshold up to a per-child cap. It pays out even when the family owes no tax."
  },
  {
    "id": "credits-10",
    "section": "credits",
    "topic": "Credit for other dependents",
    "difficulty": "medium",
    "q": "Which dependent qualifies for the credit for other dependents?",
    "choices": [
      "A 19-year-old dependent who is not a student",
      "A qualifying child under age 17",
      "A dependent claimed on someone else's return",
      "Any person living in the household all year"
    ],
    "answer": 0,
    "explain": "The credit for other dependents covers dependents who fail the child tax credit's under-17 test, including older children and qualifying relatives such as a parent. It is nonrefundable."
  },
  {
    "id": "credits-11",
    "section": "credits",
    "topic": "Adoption credit",
    "difficulty": "medium",
    "q": "What is a key feature of the adoption credit?",
    "choices": [
      "It is fully refundable in the year of adoption",
      "It is nonrefundable but carries forward five years",
      "It applies only to international adoptions",
      "It must be claimed before the adoption is final"
    ],
    "answer": 1,
    "explain": "The adoption credit is nonrefundable with a five-year carryforward for the unused portion. Qualified expenses for a domestic adoption may be claimed even if the adoption is never finalized."
  },
  {
    "id": "credits-12",
    "section": "credits",
    "topic": "Premium tax credit",
    "difficulty": "medium",
    "q": "A taxpayer's income rose above what was estimated when advance premium credits were paid. What happens at filing?",
    "choices": [
      "Excess advance payments are repaid, subject to caps",
      "The excess is forgiven if the estimate was in good faith",
      "The credit is recalculated only for the following year",
      "The marketplace bills the taxpayer directly"
    ],
    "answer": 0,
    "explain": "Form 8962 reconciles the advance payments with the credit actually allowed, and excess advances increase the tax owed. Repayment is capped on a sliding scale for households below 400% of the federal poverty line."
  },
  {
    "id": "credits-13",
    "section": "credits",
    "topic": "Energy efficient home",
    "difficulty": "medium",
    "q": "What kind of property qualifies for the energy efficient home improvement credit?",
    "choices": [
      "Any newly constructed residential building",
      "Rental property owned as an investment",
      "A second home used only seasonally",
      "Improvements to an existing principal residence"
    ],
    "answer": 3,
    "explain": "The credit covers qualifying improvements — insulation, exterior doors and windows, heat pumps, and similar items — installed in an existing home the taxpayer uses as a principal residence. Newly built homes and rentals do not qualify."
  },
  {
    "id": "credits-14",
    "section": "credits",
    "topic": "Elderly or disabled credit",
    "difficulty": "medium",
    "q": "Who may claim the credit for the elderly or the disabled?",
    "choices": [
      "Any taxpayer over 62 receiving Social Security",
      "Any taxpayer receiving disability payments of any kind",
      "A taxpayer 65 or older, or retired on permanent disability",
      "A taxpayer over 70 with no other income"
    ],
    "answer": 2,
    "explain": "The credit is available at 65 or older, or under 65 if retired on permanent and total disability with taxable disability income. Tight income and nontaxable benefit limits mean few taxpayers actually qualify."
  },
  {
    "id": "credits-15",
    "section": "credits",
    "topic": "No double benefit",
    "difficulty": "medium",
    "q": "Can the same tuition dollars support both an education credit and a tax-free 529 distribution?",
    "choices": [
      "Yes, both benefits may apply to the same dollars",
      "Yes, provided the student is a degree candidate",
      "No — a 529 distribution bars any education credit",
      "No — the expenses must be allocated between them"
    ],
    "answer": 3,
    "explain": "The same expense cannot generate two benefits. Expenses must be split, with some funding the credit and the rest justifying the tax-free distribution, or part of the 529 earnings becomes taxable."
  },
  {
    "id": "credits-16",
    "section": "credits",
    "topic": "Credit ordering",
    "difficulty": "medium",
    "q": "Why does the order of nonrefundable and refundable credits matter?",
    "choices": [
      "Refundable credits apply first, reducing tax to zero",
      "The taxpayer may choose whichever order helps more",
      "Ordering matters only when the taxpayer itemizes",
      "Nonrefundable credits apply first, preserving refundable ones"
    ],
    "answer": 3,
    "explain": "Nonrefundable credits are applied first to reduce tax toward zero, leaving refundable credits available to generate a refund. Reversing the order would waste the refundable credits against tax the others could have absorbed."
  },
  {
    "id": "othertax-9",
    "section": "othertax",
    "topic": "Social Security wage base",
    "difficulty": "medium",
    "q": "What happens to the Social Security portion of self-employment tax above the annual wage base?",
    "choices": [
      "It stops, while the Medicare portion continues",
      "It continues at a reduced rate",
      "Both portions stop at the wage base",
      "It continues unchanged with no ceiling"
    ],
    "answer": 0,
    "explain": "The 12.4% Social Security component applies only up to the annual wage base, after which it stops. The 2.9% Medicare component has no ceiling, and the 0.9% additional Medicare tax begins above its own threshold."
  },
  {
    "id": "othertax-10",
    "section": "othertax",
    "topic": "Unreported tips",
    "difficulty": "medium",
    "q": "Which form computes Social Security and Medicare tax on tips not reported to an employer?",
    "choices": [
      "Form 8919",
      "Form 4137",
      "Form 8959",
      "Form 4136"
    ],
    "answer": 1,
    "explain": "Form 4137 computes the employee share of FICA on unreported tips. Form 8919 covers wages where an employer wrongly treated the worker as a contractor, and Form 8959 handles the additional Medicare tax."
  },
  {
    "id": "othertax-11",
    "section": "othertax",
    "topic": "AMT exemption",
    "difficulty": "medium",
    "q": "What happens to the AMT exemption as alternative minimum taxable income rises?",
    "choices": [
      "It stays fixed regardless of income",
      "It increases to offset the higher income",
      "It converts into a nonrefundable credit",
      "It phases out above a threshold amount"
    ],
    "answer": 3,
    "explain": "The AMT exemption phases out at 25 cents per dollar of alternative minimum taxable income above a threshold set by filing status. That phase-out is why AMT can reach taxpayers well below the top bracket."
  },
  {
    "id": "othertax-12",
    "section": "othertax",
    "topic": "Nanny tax threshold",
    "difficulty": "medium",
    "q": "What triggers Social Security and Medicare tax on a household employee's wages?",
    "choices": [
      "Cash wages reaching the annual threshold for that worker",
      "Any payment to a household worker in the year",
      "The worker requesting withholding in writing",
      "Working more than 20 hours in any single week"
    ],
    "answer": 0,
    "explain": "FICA applies once cash wages paid to a household employee reach an annually indexed threshold. Federal unemployment tax uses a separate quarterly wage test, and neither depends on hours worked."
  },
  {
    "id": "othertax-13",
    "section": "othertax",
    "topic": "Underpayment waiver",
    "difficulty": "medium",
    "q": "When may the IRS waive the estimated tax underpayment penalty?",
    "choices": [
      "Whenever the taxpayer pays the balance by the due date",
      "For any taxpayer whose income varied during the year",
      "For casualty, disaster, or retirement after age 62 with reasonable cause",
      "When the underpayment is under $5,000"
    ],
    "answer": 2,
    "explain": "A waiver is available for casualty, disaster, or other unusual circumstances, and for taxpayers who retired after 62 or became disabled where the underpayment was due to reasonable cause. Uneven income is addressed by annualizing on Form 2210, not by waiver."
  },
  {
    "id": "othertax-14",
    "section": "othertax",
    "topic": "Net investment income",
    "difficulty": "medium",
    "q": "Which income is subject to the net investment income tax?",
    "choices": [
      "Rental income from a passive activity",
      "Wages from full-time employment",
      "Self-employment earnings from an active business",
      "Distributions from a traditional IRA"
    ],
    "answer": 0,
    "explain": "Net investment income includes interest, dividends, capital gains, annuities, royalties, and passive rents. Wages, self-employment income, and qualified plan distributions are excluded, though they raise modified adjusted gross income."
  },
  {
    "id": "othertax-15",
    "section": "othertax",
    "topic": "Annualized income",
    "difficulty": "medium",
    "q": "How does a taxpayer whose income arrived mostly late in the year avoid an estimated tax penalty?",
    "choices": [
      "By paying the entire liability with the fourth installment",
      "By requesting a filing extension before April 15",
      "By claiming the prior year safe harbor retroactively",
      "By using the annualized income installment method"
    ],
    "answer": 3,
    "explain": "The annualized income installment method on Form 2210 matches required payments to when the income was actually earned. Simply paying everything in the final quarter still leaves the earlier quarters underpaid."
  },
  {
    "id": "othertax-16",
    "section": "othertax",
    "topic": "Repaying an ABLE or HSA excess",
    "difficulty": "medium",
    "q": "How does a taxpayer avoid the 6% tax on an excess HSA contribution?",
    "choices": [
      "Apply the excess to the following year automatically",
      "Report the excess as taxable income and keep it",
      "Withdraw the excess and its earnings by the return due date",
      "Transfer the excess into a traditional IRA"
    ],
    "answer": 2,
    "explain": "Removing the excess contribution along with attributable earnings before the due date of the return, including extensions, avoids the 6% tax. Left in place, the tax applies for each year the excess remains."
  },
  {
    "id": "special-9",
    "section": "special",
    "topic": "Income in respect of a decedent",
    "difficulty": "medium",
    "q": "Who pays tax on a final paycheck received after the taxpayer's death?",
    "choices": [
      "The decedent, on the final Form 1040",
      "The estate or beneficiary who receives it",
      "No one — death cancels the income",
      "The employer, as a payroll adjustment"
    ],
    "answer": 1,
    "explain": "Income in respect of a decedent is taxed to whoever receives it — the estate or the beneficiary — and keeps the character it would have had. It gets no basis step-up, though a deduction is allowed for related estate tax."
  },
  {
    "id": "special-10",
    "section": "special",
    "topic": "Estate return threshold",
    "difficulty": "medium",
    "q": "When must the fiduciary of a domestic estate file Form 1041?",
    "choices": [
      "When gross income reaches $600 for the tax year",
      "When the estate holds any assets at all",
      "When gross income reaches $10,000 for the year",
      "Only when the estate owes estate tax"
    ],
    "answer": 0,
    "explain": "Form 1041 is required when a domestic estate has gross income of $600 or more, or has a nonresident alien beneficiary. It reports the estate's income tax, entirely separate from the Form 706 estate tax return."
  },
  {
    "id": "special-11",
    "section": "special",
    "topic": "Dual-status year",
    "difficulty": "medium",
    "q": "A taxpayer becomes a U.S. resident partway through the year. How is that year reported?",
    "choices": [
      "A dual-status return covering both periods separately",
      "A full-year resident return reporting worldwide income",
      "A full-year nonresident return on Form 1040-NR",
      "Two separate returns filed for the same year"
    ],
    "answer": 0,
    "explain": "A dual-status year is reported on one return covering both periods, with worldwide income taxed for the resident portion and only U.S. source income for the nonresident portion. Dual-status filers generally cannot use the standard deduction or file jointly."
  },
  {
    "id": "special-12",
    "section": "special",
    "topic": "Form 8938",
    "difficulty": "medium",
    "q": "How does Form 8938 differ from the FBAR?",
    "choices": [
      "It is filed with FinCEN rather than the IRS",
      "It is filed with the return and has higher thresholds",
      "It replaced the FBAR requirement entirely",
      "It applies only to accounts generating income"
    ],
    "answer": 1,
    "explain": "Form 8938 reports specified foreign financial assets, is filed with the income tax return, and uses thresholds that vary by filing status and residence. The FBAR goes to FinCEN separately, and many taxpayers must file both."
  },
  {
    "id": "special-13",
    "section": "special",
    "topic": "Foreign housing",
    "difficulty": "medium",
    "q": "What may a qualifying expatriate claim in addition to the foreign earned income exclusion?",
    "choices": [
      "A doubled standard deduction for foreign residence",
      "A foreign housing exclusion or deduction",
      "An automatic credit for all foreign taxes paid",
      "An exclusion for foreign investment income"
    ],
    "answer": 1,
    "explain": "A taxpayer meeting the bona fide residence or physical presence test may exclude or deduct qualifying housing costs above a base amount, subject to a location-based cap. Employees exclude it; the self-employed deduct it."
  },
  {
    "id": "special-14",
    "section": "special",
    "topic": "Gift splitting",
    "difficulty": "medium",
    "q": "How does gift splitting help a married couple?",
    "choices": [
      "It doubles the lifetime exclusion for both spouses",
      "Each gift is treated as made half by each spouse",
      "It exempts all gifts between the spouses themselves",
      "It defers gift tax until the first spouse dies"
    ],
    "answer": 1,
    "explain": "Gift splitting treats a gift by one spouse as made one-half by each, doubling the annual exclusion available for that recipient. It requires consent from both spouses, and a gift tax return is generally required to make the election."
  },
  {
    "id": "special-15",
    "section": "special",
    "topic": "Innocent spouse relief",
    "difficulty": "medium",
    "q": "What does innocent spouse relief address?",
    "choices": [
      "A refund offset for the other spouse's separate debt",
      "The allocation of estimated payments after divorce",
      "The right to amend a joint return to separate returns",
      "Joint liability for an understatement caused by one spouse"
    ],
    "answer": 3,
    "explain": "Innocent spouse relief on Form 8857 releases a spouse from joint liability for an understatement attributable to the other spouse, where the requesting spouse did not know and had no reason to know. Refund offsets are the injured spouse remedy instead."
  },
  {
    "id": "special-16",
    "section": "special",
    "topic": "Nonresident capital gains",
    "difficulty": "medium",
    "q": "How is a nonresident alien generally taxed on U.S. source income not connected to a trade or business?",
    "choices": [
      "At the graduated rates applied to residents",
      "It is exempt from U.S. tax entirely",
      "At the long-term capital gain rate of 20%",
      "At a flat 30% rate unless a treaty lowers it"
    ],
    "answer": 3,
    "explain": "Fixed, determinable, annual or periodical U.S. source income of a nonresident is taxed at a flat 30%, usually collected by withholding, subject to reduction under a tax treaty. Effectively connected income is taxed at graduated rates instead."
  }
];
