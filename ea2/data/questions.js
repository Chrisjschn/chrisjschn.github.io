/* EA Blitz question bank — SEE Part 2 (Businesses), 11 sections, 239 questions.
   Authored for 2025 federal tax law and technically reviewed. Choice order is
   shuffled at display time; 'answer' is the index of the correct choice.
   FAR_SECTIONS/FAR_QUESTIONS global names keep the engine identical to FAR Blitz. */

var FAR_SECTIONS = [
  {
    "id": "entity",
    "name": "Business Entities & Elections",
    "short": "Entities",
    "emoji": "🏢"
  },
  {
    "id": "income",
    "name": "Business Income & COGS",
    "short": "Income",
    "emoji": "💵"
  },
  {
    "id": "deduct",
    "name": "Expenses, Deductions & QBI",
    "short": "Deductions",
    "emoji": "🧾"
  },
  {
    "id": "depr",
    "name": "Depreciation & Amortization",
    "short": "Depreciation",
    "emoji": "🏗️"
  },
  {
    "id": "prop",
    "name": "Property Transactions",
    "short": "Property",
    "emoji": "🏠"
  },
  {
    "id": "pship",
    "name": "Partnership Taxation",
    "short": "Partnerships",
    "emoji": "🤝"
  },
  {
    "id": "ccorp",
    "name": "C Corporation Taxation",
    "short": "C Corps",
    "emoji": "🏛️"
  },
  {
    "id": "scorp",
    "name": "S Corporation Taxation",
    "short": "S Corps",
    "emoji": "📋"
  },
  {
    "id": "methods",
    "name": "Accounting Methods & Payroll Taxes",
    "short": "Methods",
    "emoji": "⚙️"
  },
  {
    "id": "retire",
    "name": "Retirement Plans",
    "short": "Retirement",
    "emoji": "🏖️"
  },
  {
    "id": "special",
    "name": "Trusts, Estates & Exempt Orgs",
    "short": "Specialty",
    "emoji": "🏦"
  }
]

var FAR_QUESTIONS = [
  {
    "id": "entity-1",
    "section": "entity",
    "topic": "Per se corporations",
    "difficulty": "easy",
    "q": "Under the check-the-box regulations, which entity is a per se corporation that cannot elect a different federal tax classification?",
    "choices": [
      "A business incorporated under a state corporation statute",
      "A domestic multi-member LLC",
      "A domestic single-member LLC",
      "A state-law limited partnership"
    ],
    "answer": 0,
    "explain": "Entities incorporated under a state corporation statute are per se corporations and cannot use Form 8832 to elect another classification; LLCs and partnerships are eligible entities that can."
  },
  {
    "id": "entity-2",
    "section": "entity",
    "topic": "Single-member LLC",
    "difficulty": "easy",
    "q": "A domestic LLC with one individual member operates a retail business and files no classification election. How is the business treated for federal income tax purposes by default?",
    "choices": [
      "As a C corporation",
      "As a partnership",
      "As a disregarded entity reported on Schedule C",
      "As an S corporation"
    ],
    "answer": 2,
    "explain": "A single-member LLC is disregarded as separate from its owner by default, so the individual owner reports the LLC's business activity on Schedule C of Form 1040."
  },
  {
    "id": "entity-3",
    "section": "entity",
    "topic": "Multi-member LLC default",
    "difficulty": "easy",
    "q": "A domestic LLC has two individual members and files no classification election. What is its default federal tax classification?",
    "choices": [
      "C corporation filing Form 1120",
      "Partnership filing Form 1065",
      "S corporation filing Form 1120-S",
      "Disregarded entity for each member"
    ],
    "answer": 1,
    "explain": "A domestic eligible entity with two or more members is classified as a partnership by default and files Form 1065."
  },
  {
    "id": "entity-4",
    "section": "entity",
    "topic": "Entity election forms",
    "difficulty": "medium",
    "q": "Which form does an eligible entity file to elect or change its federal tax classification, such as an LLC choosing corporate status?",
    "choices": [
      "Form 2553",
      "Form SS-4",
      "Form 1128",
      "Form 8832"
    ],
    "answer": 3,
    "explain": "Form 8832, Entity Classification Election, is the check-the-box form used to elect corporate, partnership, or disregarded status; Form 2553 is used only for the S election."
  },
  {
    "id": "entity-5",
    "section": "entity",
    "topic": "8832 effective date",
    "difficulty": "medium",
    "q": "An LLC files Form 8832 on June 1. Generally, what is the earliest effective date it may choose for the classification election?",
    "choices": [
      "75 days before the filing date",
      "12 months before the filing date",
      "Only the date the form is filed",
      "The first day of the prior tax year"
    ],
    "answer": 0,
    "explain": "A Form 8832 election may take effect up to 75 days before the date it is filed (or up to 12 months after), so a June 1 filing allows an effective date as early as 75 days prior."
  },
  {
    "id": "entity-6",
    "section": "entity",
    "topic": "S election form",
    "difficulty": "easy",
    "q": "A C corporation wants to be taxed as an S corporation. Which form must it file with the IRS?",
    "choices": [
      "Form 8832",
      "Form 2553",
      "Form 1120-S",
      "Form 966"
    ],
    "answer": 1,
    "explain": "Form 2553, Election by a Small Business Corporation, is the form for electing S status; Form 1120-S is the S corporation's annual return, not the election itself."
  },
  {
    "id": "entity-7",
    "section": "entity",
    "topic": "S election deadline",
    "difficulty": "medium",
    "q": "A calendar-year corporation wants its S election effective January 1, 2025. Absent late-election relief, by what date must Form 2553 be filed?",
    "choices": [
      "April 15, 2025",
      "December 31, 2024",
      "March 15, 2025",
      "January 31, 2025"
    ],
    "answer": 2,
    "explain": "Form 2553 must be filed within 2 months and 15 days after the start of the tax year the election takes effect, which is March 15 for a calendar-year corporation."
  },
  {
    "id": "entity-8",
    "section": "entity",
    "topic": "S corp shareholder limit",
    "difficulty": "medium",
    "q": "What is the maximum number of shareholders an S corporation may have?",
    "choices": [
      "50",
      "75",
      "Unlimited",
      "100"
    ],
    "answer": 3,
    "explain": "An S corporation is limited to 100 shareholders, and certain family members may be counted as a single shareholder for this limit."
  },
  {
    "id": "entity-9",
    "section": "entity",
    "topic": "Sole proprietor reporting",
    "difficulty": "easy",
    "q": "Where does a sole proprietor report business income and deductible business expenses?",
    "choices": [
      "Schedule C of Form 1040",
      "Form 1065",
      "Form 1120",
      "Schedule E of Form 1040"
    ],
    "answer": 0,
    "explain": "A sole proprietorship is not a separate taxable entity; its profit or loss is reported on Schedule C, which flows into the owner's Form 1040."
  },
  {
    "id": "entity-10",
    "section": "entity",
    "topic": "EIN requirement",
    "difficulty": "medium",
    "q": "Which sole proprietor is required by the IRS to obtain an employer identification number (EIN)?",
    "choices": [
      "Any proprietor who files Schedule C",
      "One who opens a business bank account",
      "One who hires employees and pays wages",
      "One with gross receipts over $10,000"
    ],
    "answer": 2,
    "explain": "A sole proprietor must get an EIN when paying wages to employees (or filing excise or pension plan returns); otherwise the owner's SSN is generally sufficient."
  },
  {
    "id": "entity-15",
    "section": "entity",
    "topic": "EIN application form",
    "difficulty": "easy",
    "q": "Which IRS form does an employer use to obtain an employer identification number (EIN)?",
    "choices": [
      "Form SS-4",
      "Form SS-8",
      "Form W-9",
      "Form 941"
    ],
    "answer": 0,
    "explain": "**Form SS-4** applies for an EIN. Do not confuse it with **Form SS-8**, which asks the IRS to rule on whether a worker is an employee or an independent contractor. Form W-9 hands an existing taxpayer ID to someone who requested it rather than obtaining a new one, and Form 941 is the quarterly employment tax return."
  },
  {
    "id": "entity-16",
    "section": "entity",
    "topic": "Form SS-4 purpose",
    "difficulty": "easy",
    "q": "IRS Form SS-4 is used to obtain:",
    "choices": [
      "An employer identification number (EIN)",
      "A ruling on whether a worker is an employee or a contractor",
      "An extension of time to file a business return",
      "A preparer tax identification number (PTIN)"
    ],
    "answer": 0,
    "explain": "Form SS-4 is the EIN application. The other three each have their own form: worker classification rulings come from **Form SS-8**, a business extension from **Form 7004**, and a preparer gets a PTIN on **Form W-12**."
  },
  {
    "id": "entity-11",
    "section": "entity",
    "topic": "Owner liability",
    "difficulty": "easy",
    "q": "In which form of business is the owner personally liable for all debts of the business?",
    "choices": [
      "S corporation",
      "Sole proprietorship",
      "Limited liability company",
      "C corporation"
    ],
    "answer": 1,
    "explain": "A sole proprietorship is legally inseparable from its owner, so the owner is personally liable for all business debts; corporations and LLCs provide limited liability."
  },
  {
    "id": "entity-12",
    "section": "entity",
    "topic": "Double taxation",
    "difficulty": "medium",
    "q": "Profits of which entity type are taxed at the entity level and taxed again to the owners when distributed as dividends?",
    "choices": [
      "S corporation",
      "General partnership",
      "Sole proprietorship",
      "C corporation"
    ],
    "answer": 3,
    "explain": "A C corporation pays tax on its income on Form 1120, and shareholders are taxed again on dividends received - the classic double taxation; the other entities pass income through."
  },
  {
    "id": "entity-13",
    "section": "entity",
    "topic": "Election change limits",
    "difficulty": "medium",
    "q": "After an eligible entity changes its tax classification by election, how long must it generally wait before electing another change?",
    "choices": [
      "60 months",
      "12 months",
      "24 months",
      "There is no waiting period"
    ],
    "answer": 0,
    "explain": "Once an entity changes its classification by election, it generally cannot elect again for 60 months unless the IRS consents or ownership changes by more than 50 percent."
  },
  {
    "id": "entity-14",
    "section": "entity",
    "topic": "S corp pass-through",
    "difficulty": "easy",
    "q": "An S corporation with three equal shareholders reports $90,000 of ordinary business income. How much is allocated to each shareholder?",
    "choices": [
      "$90,000",
      "$45,000",
      "$30,000",
      "$0 until distributed"
    ],
    "answer": 2,
    "explain": "S corporation income passes through pro rata; each one-third shareholder is taxed on $30,000 whether or not the cash is actually distributed."
  },
  {
    "id": "entity-17",
    "section": "entity",
    "topic": "EIN application methods",
    "difficulty": "easy",
    "q": "Which of the following does NOT get an employer an EIN?",
    "choices": [
      "Filing articles of incorporation with the state",
      "Applying online at the IRS website",
      "Faxing or mailing a completed Form SS-4 to the IRS",
      "Calling the IRS, for an international applicant"
    ],
    "answer": 0,
    "explain": "Incorporating with the state creates the entity but never issues a federal EIN — that always comes from the **IRS**: online, or by faxing or mailing **Form SS-4**. The phone option exists only for **international applicants**; domestic employers cannot apply by phone."
  },
  {
    "id": "entity-18",
    "section": "entity",
    "topic": "Pass-through return deadlines",
    "difficulty": "medium",
    "q": "Without an extension, when are a calendar-year partnership's Form 1065 and a calendar-year S corporation's Form 1120-S due?",
    "choices": [
      "March 15",
      "April 15",
      "March 31",
      "September 15"
    ],
    "answer": 0,
    "explain": "Both are due the 15th day of the **third** month — **March 15** for calendar years — so the K-1s exist before the owners' own April 15 deadline. Form 7004 extends either to September 15. Watch the trap: a trust's Form 1041 also passes income through on K-1s, but it is due **April 15**, and C corporations file April 15 as well."
  },
  {
    "id": "income-1",
    "section": "income",
    "topic": "COGS formula",
    "difficulty": "easy",
    "q": "A retailer's beginning inventory is $20,000, purchases are $50,000, and ending inventory is $15,000. What is cost of goods sold?",
    "choices": [
      "$45,000",
      "$55,000",
      "$65,000",
      "$85,000"
    ],
    "answer": 1,
    "explain": "COGS equals beginning inventory plus purchases minus ending inventory: $20,000 + $50,000 - $15,000 = $55,000."
  },
  {
    "id": "income-2",
    "section": "income",
    "topic": "COGS components",
    "difficulty": "easy",
    "q": "Which cost is properly included in a merchandiser's cost of goods sold?",
    "choices": [
      "Freight-in on merchandise purchased",
      "Advertising expenses",
      "Rent on the administrative office",
      "Sales commissions paid"
    ],
    "answer": 0,
    "explain": "Freight-in is part of the cost of acquiring inventory and belongs in COGS; advertising, administrative rent, and selling commissions are operating expenses deducted separately."
  },
  {
    "id": "income-3",
    "section": "income",
    "topic": "Constructive receipt",
    "difficulty": "easy",
    "q": "A cash-basis business receives a customer's check on December 30, 2025 but does not deposit it until January 5, 2026. When is the payment taxable?",
    "choices": [
      "In 2026, when deposited",
      "In 2026, when the check clears",
      "In 2025, when the check was received",
      "In whichever year the business chooses"
    ],
    "answer": 2,
    "explain": "Under constructive receipt, income is taxed when made available without restriction; holding a check received in 2025 does not defer the income to 2026."
  },
  {
    "id": "income-4",
    "section": "income",
    "topic": "Advance payment default",
    "difficulty": "medium",
    "q": "An accrual-method business receives an advance payment for services and makes no deferral election. When must the payment be included in income?",
    "choices": [
      "Only as the services are performed",
      "Ratably over the contract term",
      "When the contract is fully complete",
      "In the tax year the payment is received"
    ],
    "answer": 3,
    "explain": "The default full-inclusion rule requires accrual taxpayers to report advance payments in the year of receipt; deferral to the following year is available only by electing the deferral method."
  },
  {
    "id": "income-5",
    "section": "income",
    "topic": "Advance payment deferral",
    "difficulty": "medium",
    "q": "Using the deferral method, an accrual business receives $12,000 on December 1, 2025 for 12 months of service and earns $1,000 by year-end. How much is 2025 income?",
    "choices": [
      "$12,000",
      "$1,000",
      "$0",
      "$6,000"
    ],
    "answer": 1,
    "explain": "Under the deferral method, the business includes the portion earned in the year of receipt ($1,000) and must include the remaining $11,000 in 2026, the following tax year."
  },
  {
    "id": "income-6",
    "section": "income",
    "topic": "Barter transactions",
    "difficulty": "easy",
    "q": "A plumber repairs a contractor's sink in exchange for drywall work with a fair market value of $500. What must the plumber report?",
    "choices": [
      "$500 of business income at fair market value",
      "Nothing, because no cash changed hands",
      "$250, splitting the value with the contractor",
      "$500 as a nontaxable trade"
    ],
    "answer": 0,
    "explain": "Bartering is taxable; each party includes the fair market value of the goods or services received, so the plumber reports $500 of gross income."
  },
  {
    "id": "income-7",
    "section": "income",
    "topic": "Forgiven business debt",
    "difficulty": "easy",
    "q": "A solvent business not in bankruptcy has $10,000 of its loan balance canceled by the lender. How is the canceled amount generally treated?",
    "choices": [
      "A nontaxable gift from the lender",
      "A capital gain",
      "Ordinary income in the year of cancellation",
      "A reduction of the business's asset basis"
    ],
    "answer": 2,
    "explain": "Canceled debt is generally ordinary gross income when forgiven; the main exclusions are bankruptcy and insolvency, and this taxpayer qualifies for neither."
  },
  {
    "id": "income-8",
    "section": "income",
    "topic": "COD exclusions",
    "difficulty": "medium",
    "q": "In which situation may a business exclude cancellation-of-debt income from gross income?",
    "choices": [
      "The debt is discharged in a Title 11 bankruptcy",
      "The lender cancels the debt as a courtesy",
      "The canceled loan was under $50,000",
      "The debt is canceled after the year ends"
    ],
    "answer": 0,
    "explain": "Debt discharged in a Title 11 bankruptcy case is excluded from income (as is discharge to the extent of insolvency), though tax attributes generally must be reduced in exchange."
  },
  {
    "id": "income-9",
    "section": "income",
    "topic": "Gross receipts",
    "difficulty": "easy",
    "q": "Which item is included in a store's business gross receipts?",
    "choices": [
      "Proceeds of a new bank loan",
      "The owner's capital contribution",
      "A federal income tax refund",
      "Payments received from customers for goods sold"
    ],
    "answer": 3,
    "explain": "Gross receipts are amounts received from sales of goods or services; loan proceeds and owner capital contributions are not income, and a federal income tax refund is not taxable."
  },
  {
    "id": "income-10",
    "section": "income",
    "topic": "Gross profit",
    "difficulty": "medium",
    "q": "A business has gross receipts of $100,000, returns and allowances of $5,000, and COGS of $35,000. What is its gross profit?",
    "choices": [
      "$65,000",
      "$60,000",
      "$95,000",
      "$100,000"
    ],
    "answer": 1,
    "explain": "Gross profit is net receipts minus COGS: ($100,000 - $5,000) - $35,000 = $60,000."
  },
  {
    "id": "income-12",
    "section": "income",
    "topic": "Business interest income",
    "difficulty": "medium",
    "q": "Where does a sole proprietor generally report interest earned on the business checking account?",
    "choices": [
      "On Schedule B with other personal interest",
      "On Schedule C as gross receipts",
      "On Schedule SE",
      "Nowhere; business interest is tax-exempt"
    ],
    "answer": 0,
    "explain": "Interest on a sole proprietor's bank account is reported with the owner's other interest income on Schedule B, not on Schedule C, unless it is received in the ordinary course of business, such as interest on accounts receivable."
  },
  {
    "id": "income-13",
    "section": "income",
    "topic": "Ending inventory",
    "difficulty": "medium",
    "q": "A business reports COGS of $70,000, beginning inventory of $30,000, and purchases of $60,000. What was its ending inventory?",
    "choices": [
      "$10,000",
      "$40,000",
      "$90,000",
      "$20,000"
    ],
    "answer": 3,
    "explain": "Rearranging the COGS formula: ending inventory = beginning inventory plus purchases minus COGS, or $30,000 + $60,000 - $70,000 = $20,000."
  },
  {
    "id": "income-15",
    "section": "income",
    "topic": "Patronage dividends",
    "difficulty": "medium",
    "q": "A farmers' cooperative distributes patronage dividends of $600 to Aeden based on his business with the co-op. On which form does the cooperative report them to him?",
    "choices": [
      "Form 1099-PATR",
      "Form 1099-DIV",
      "Form 1099-MISC",
      "Schedule K-1 (Form 1065)"
    ],
    "answer": 0,
    "explain": "Despite the name, patronage dividends are not investment income — they are rebates of the co-op's margins based on **business done with the co-op**, reported on **Form 1099-PATR** at $10 or more. Form 1099-DIV is for actual stock dividends. Aeden reports business-related patronage dividends as **business income**; ones from purely personal purchases are generally nontaxable price rebates."
  },
  {
    "id": "income-14",
    "section": "income",
    "topic": "Personal asset sales",
    "difficulty": "medium",
    "q": "A consultant sells her personal automobile at a gain. The car was never used in the business. How is the gain reported?",
    "choices": [
      "On Schedule C as other business income",
      "As a capital gain, separate from the business",
      "It is nontaxable as a personal sale",
      "On Schedule SE as self-employment income"
    ],
    "answer": 1,
    "explain": "Gain on personal-use property is a capital gain, not business income; personal transactions stay off Schedule C even when the owner also operates a business."
  },
  {
    "id": "deduct-1",
    "section": "deduct",
    "topic": "Ordinary and necessary",
    "difficulty": "easy",
    "q": "To be deductible, a business expense must be \"ordinary and necessary.\" What does \"ordinary\" mean here?",
    "choices": [
      "Common and accepted in the taxpayer's trade",
      "Required by law or by contract",
      "Incurred at least once every year",
      "Absolutely indispensable to operations"
    ],
    "answer": 0,
    "explain": "An ordinary expense is one that is common and accepted in the taxpayer's industry; necessary means helpful and appropriate, not indispensable."
  },
  {
    "id": "deduct-2",
    "section": "deduct",
    "topic": "Meals deduction limit",
    "difficulty": "easy",
    "q": "A sole proprietor spends $800 on non-lavish business meals with clients during the year. How much is deductible?",
    "choices": [
      "$0",
      "$800",
      "$400",
      "$200"
    ],
    "answer": 2,
    "explain": "Qualifying business meals are generally 50% deductible, so $800 x 50% = $400."
  },
  {
    "id": "deduct-3",
    "section": "deduct",
    "topic": "Entertainment expenses",
    "difficulty": "easy",
    "q": "A business owner takes clients to a baseball game after a sales meeting, buying all the tickets. How is the ticket cost treated?",
    "choices": [
      "50% deductible",
      "Not deductible at all",
      "100% deductible",
      "Deductible up to $25 per client"
    ],
    "answer": 1,
    "explain": "Entertainment expenses, including sporting event tickets, are nondeductible even when directly related to business; only qualifying meals get a 50% deduction."
  },
  {
    "id": "deduct-4",
    "section": "deduct",
    "topic": "Business travel",
    "difficulty": "medium",
    "q": "A self-employed consultant flies to another city for a three-day client project. Which cost is 100% deductible as business travel?",
    "choices": [
      "Meals eaten while traveling",
      "A sightseeing tour on a free afternoon",
      "Round-trip airfare to the client's city",
      "Airfare for a spouse who comes along"
    ],
    "answer": 2,
    "explain": "Transportation to a temporary business destination is fully deductible; travel meals are limited to 50%, and personal or spousal costs are not deductible."
  },
  {
    "id": "deduct-5",
    "section": "deduct",
    "topic": "Home office use",
    "difficulty": "easy",
    "q": "To qualify for the home office deduction, the space generally must be used in which way?",
    "choices": [
      "More than 50% of the time for business",
      "Occasionally, to store business records",
      "For any mix of business and family use",
      "Regularly and exclusively for business"
    ],
    "answer": 3,
    "explain": "The home office deduction generally requires a specific area used both regularly and exclusively for business, such as the principal place of business."
  },
  {
    "id": "deduct-6",
    "section": "deduct",
    "topic": "Business gift limit",
    "difficulty": "easy",
    "q": "A consultant gives her best client a $100 gift basket during the holidays. How much of the cost is deductible?",
    "choices": [
      "$0",
      "$25",
      "$50",
      "$100"
    ],
    "answer": 1,
    "explain": "Business gift deductions are limited to $25 per recipient per year, regardless of the gift's actual cost."
  },
  {
    "id": "deduct-7",
    "section": "deduct",
    "topic": "Startup cost phase-out",
    "difficulty": "medium",
    "q": "A new business incurs $52,000 of startup costs before opening. What is its maximum first-year startup deduction (before amortization)?",
    "choices": [
      "$52,000",
      "$5,000",
      "$2,000",
      "$3,000"
    ],
    "answer": 3,
    "explain": "The $5,000 first-year deduction is reduced dollar for dollar by startup costs over $50,000, so $5,000 - $2,000 = $3,000; the remainder is amortized."
  },
  {
    "id": "deduct-8",
    "section": "deduct",
    "topic": "Startup amortization",
    "difficulty": "easy",
    "q": "Startup costs that are not deducted in the first year are amortized over how many months?",
    "choices": [
      "60 months",
      "120 months",
      "180 months",
      "240 months"
    ],
    "answer": 2,
    "explain": "Startup and organizational costs beyond the first-year deduction are amortized ratably over 180 months, beginning with the month the business starts."
  },
  {
    "id": "deduct-9",
    "section": "deduct",
    "topic": "Bad debt method",
    "difficulty": "medium",
    "q": "Which method must most businesses use to deduct business bad debts?",
    "choices": [
      "Reserve method",
      "Specific charge-off method",
      "Allowance method",
      "Percentage-of-sales method"
    ],
    "answer": 1,
    "explain": "Most taxpayers must use the specific charge-off method, deducting a bad debt only in the year it becomes wholly or partly worthless."
  },
  {
    "id": "deduct-10",
    "section": "deduct",
    "topic": "Cash-basis bad debts",
    "difficulty": "medium",
    "q": "A cash-basis consultant bills a client $2,000 that is never paid. Why can't she deduct a bad debt?",
    "choices": [
      "The unpaid fee was never included in her income",
      "Service businesses may never deduct bad debts",
      "Bad debts require a court judgment first",
      "The debt must first be sold to a collector"
    ],
    "answer": 0,
    "explain": "A bad debt deduction requires basis in the debt; a cash-basis taxpayer never reported the unpaid fee as income, so there is nothing to write off."
  },
  {
    "id": "deduct-11",
    "section": "deduct",
    "topic": "SEP contributions",
    "difficulty": "medium",
    "q": "Where does Timothy, a sole proprietor, deduct contributions to his own SEP-IRA?",
    "choices": [
      "On Schedule C as a business expense",
      "As an adjustment to income on Schedule 1 (Form 1040)",
      "On Schedule A as an itemized deduction",
      "Nowhere; they are nondeductible"
    ],
    "answer": 1,
    "explain": "Contributions to the owner's own SEP or SIMPLE plan are deducted as an adjustment to income on Schedule 1 (Form 1040), not as a Schedule C business expense. Only contributions for employees go on Schedule C."
  },
  {
    "id": "deduct-12",
    "section": "deduct",
    "topic": "Section 199A deduction",
    "difficulty": "easy",
    "q": "A taxpayer has $100,000 of qualified business income and no income-based limits apply. What is the maximum §199A QBI deduction?",
    "choices": [
      "$5,000",
      "$10,000",
      "$50,000",
      "$20,000"
    ],
    "answer": 3,
    "explain": "The QBI deduction is generally 20% of qualified business income: 20% x $100,000 = $20,000, subject to the overall taxable income limitation."
  },
  {
    "id": "deduct-13",
    "section": "deduct",
    "topic": "SSTB definition",
    "difficulty": "medium",
    "q": "For the §199A deduction, which business is a specified service trade or business (SSTB)?",
    "choices": [
      "A law firm",
      "An engineering firm",
      "A retail clothing store",
      "A furniture manufacturer"
    ],
    "answer": 0,
    "explain": "SSTBs include fields like law, health, accounting, and consulting; engineering and architecture are specifically excluded, and retail and manufacturing are not SSTBs."
  },
  {
    "id": "deduct-14",
    "section": "deduct",
    "topic": "Simplified home office",
    "difficulty": "medium",
    "q": "Under the simplified method, the home office deduction is $5 per square foot up to a maximum of how many square feet?",
    "choices": [
      "100 square feet",
      "200 square feet",
      "300 square feet",
      "500 square feet"
    ],
    "answer": 2,
    "explain": "The simplified method allows $5 per square foot of qualifying home office space, capped at 300 square feet, for a maximum deduction of $1,500."
  },
  {
    "id": "deduct-15",
    "section": "deduct",
    "topic": "Rehabilitation credit",
    "difficulty": "medium",
    "q": "The rehabilitation credit equals what percentage of qualified rehabilitation expenditures?",
    "choices": [
      "20%",
      "10%",
      "25%",
      "50%"
    ],
    "answer": 0,
    "explain": "The credit is **20%** of qualified rehabilitation expenditures on a certified historic structure. The former 10% credit for pre-1936 buildings was repealed, so 20% is the only rate left. It is claimed **ratably over five years** — 4% of the expenditures each year — rather than all at once in the year the building is placed in service."
  },
  {
    "id": "deduct-16",
    "section": "deduct",
    "topic": "Research credit rate",
    "difficulty": "medium",
    "q": "The regular research credit equals what percentage of the increase in qualified research expenses over the base amount?",
    "choices": [
      "20%",
      "14%",
      "10%",
      "25%"
    ],
    "answer": 0,
    "explain": "The regular credit is **20%** of qualified research expenses exceeding a base amount tied to the taxpayer's own history. The **14%** in the choices is the **alternative simplified credit**, which many taxpayers elect instead because its base is far easier to compute — 50% of the average qualified research expenses for the three preceding years. A qualified small business may also elect to apply part of the credit against payroll taxes rather than income tax."
  },
  {
    "id": "deduct-17",
    "section": "deduct",
    "topic": "Prior year minimum tax credit",
    "difficulty": "medium",
    "q": "Is there a credit for prior year minimum tax, and is it part of the general business credit?",
    "choices": [
      "Yes, the credit exists, but it is not part of the general business credit",
      "Yes, and it is one of the components of the general business credit",
      "No such credit exists",
      "Yes, but only corporations may claim it"
    ],
    "answer": 0,
    "explain": "The minimum tax credit is real and separate. Individuals, estates and trusts claim it on **Form 8801**; corporations use **Form 8827**. It is **not** one of the components of the general business credit, and it carries forward **indefinitely** with no carryback. It recovers alternative minimum tax paid on **deferral** items — timing differences that eventually reverse — rather than on exclusion items, which are gone for good."
  },
  {
    "id": "depr-1",
    "section": "depr",
    "topic": "MACRS recovery classes",
    "difficulty": "easy",
    "q": "Under MACRS, computers and light general-purpose trucks are generally in which recovery class?",
    "choices": [
      "3-year property",
      "5-year property",
      "7-year property",
      "10-year property"
    ],
    "answer": 1,
    "explain": "Computers, automobiles, and light trucks are 5-year MACRS property."
  },
  {
    "id": "depr-2",
    "section": "depr",
    "topic": "MACRS class lives",
    "difficulty": "easy",
    "q": "Under MACRS, office furniture such as desks and file cabinets falls into which recovery class?",
    "choices": [
      "5-year property",
      "15-year property",
      "7-year property",
      "10-year property"
    ],
    "answer": 2,
    "explain": "Office furniture and fixtures are 7-year MACRS property; computers and vehicles are 5-year property."
  },
  {
    "id": "depr-3",
    "section": "depr",
    "topic": "Building cost recovery",
    "difficulty": "medium",
    "q": "A residential rental building has a depreciable basis of $275,000. What is the approximate annual MACRS deduction for a full year?",
    "choices": [
      "$5,500",
      "$7,050",
      "$10,000",
      "$27,500"
    ],
    "answer": 2,
    "explain": "Residential rental property is depreciated straight-line over 27.5 years: $275,000 / 27.5 = $10,000 per full year."
  },
  {
    "id": "depr-4",
    "section": "depr",
    "topic": "Realty recovery periods",
    "difficulty": "easy",
    "q": "An office building placed in service in 2025 (nonresidential real property) is depreciated over what recovery period?",
    "choices": [
      "27.5 years",
      "39 years",
      "31.5 years",
      "15 years"
    ],
    "answer": 1,
    "explain": "Nonresidential real property is depreciated straight-line over 39 years; 27.5 years applies only to residential rental property."
  },
  {
    "id": "depr-5",
    "section": "depr",
    "topic": "Half-year convention",
    "difficulty": "medium",
    "q": "In March, a business buys $10,000 of 5-year equipment and elects straight-line MACRS. Using the half-year convention, what is year-1 depreciation?",
    "choices": [
      "$1,000",
      "$2,000",
      "$500",
      "$4,000"
    ],
    "answer": 0,
    "explain": "The half-year convention allows one-half year of depreciation in year 1: $10,000 / 5 = $2,000 x 1/2 = $1,000."
  },
  {
    "id": "depr-6",
    "section": "depr",
    "topic": "Mid-quarter convention",
    "difficulty": "medium",
    "q": "When must a business use the mid-quarter convention for personal property?",
    "choices": [
      "More than 40% of it is placed in service in Q4",
      "More than 25% of it is placed in service in Q4",
      "Any real property is placed in service that year",
      "The business elects out of bonus depreciation"
    ],
    "answer": 0,
    "explain": "The mid-quarter convention is required when more than 40% of the year's personal property (by basis) is placed in service in the final three months."
  },
  {
    "id": "depr-7",
    "section": "depr",
    "topic": "Mid-month convention",
    "difficulty": "easy",
    "q": "Which type of property always uses the mid-month convention under MACRS?",
    "choices": [
      "Passenger automobiles",
      "Office furniture",
      "Buildings and other real property",
      "Computers and peripherals"
    ],
    "answer": 2,
    "explain": "Residential and nonresidential real property always use the mid-month convention, treating the property as placed in service at mid-month."
  },
  {
    "id": "depr-8",
    "section": "depr",
    "topic": "Section 179 concept",
    "difficulty": "easy",
    "q": "What does a §179 election allow a business to do?",
    "choices": [
      "Deduct qualifying asset costs in the year placed in service",
      "Defer depreciation to future years",
      "Depreciate land over 15 years",
      "Convert repairs into capital assets"
    ],
    "answer": 0,
    "explain": "Section 179 lets a business expense the cost of qualifying tangible personal property immediately instead of depreciating it over its recovery period."
  },
  {
    "id": "depr-9",
    "section": "depr",
    "topic": "179 income limit",
    "difficulty": "medium",
    "q": "A business with $30,000 of taxable business income elects §179 on $50,000 of equipment. How much §179 can it deduct this year?",
    "choices": [
      "$0",
      "$20,000",
      "$50,000",
      "$30,000"
    ],
    "answer": 3,
    "explain": "The §179 deduction cannot exceed taxable income from the active trade or business; the disallowed $20,000 carries forward to future years."
  },
  {
    "id": "depr-10",
    "section": "depr",
    "topic": "Bonus depreciation",
    "difficulty": "medium",
    "q": "Which statement about bonus depreciation is true?",
    "choices": [
      "It applies only to brand-new property",
      "It applies to qualifying new and used property",
      "It applies only to real property",
      "It is limited to the business's taxable income"
    ],
    "answer": 1,
    "explain": "Bonus depreciation applies to qualified property whether new or used, as long as it is the taxpayer's first use; unlike §179, there is no income limit."
  },
  {
    "id": "depr-11",
    "section": "depr",
    "topic": "Listed property",
    "difficulty": "medium",
    "q": "Which asset is \"listed property\" subject to special substantiation and business-use rules?",
    "choices": [
      "An office building",
      "Manufacturing machinery",
      "Office furniture",
      "A passenger automobile"
    ],
    "answer": 3,
    "explain": "Passenger automobiles are listed property, requiring business-use substantiation; if business use is 50% or less, straight-line ADS must be used."
  },
  {
    "id": "depr-12",
    "section": "depr",
    "topic": "197 intangibles",
    "difficulty": "medium",
    "q": "A business purchases goodwill for $150,000 in an acquisition. What is its annual §197 amortization deduction?",
    "choices": [
      "$15,000",
      "$5,000",
      "$10,000",
      "$30,000"
    ],
    "answer": 2,
    "explain": "Section 197 intangibles such as goodwill are amortized straight-line over 15 years: $150,000 / 15 = $10,000 per year."
  },
  {
    "id": "depr-13",
    "section": "depr",
    "topic": "Land and improvements",
    "difficulty": "easy",
    "q": "A company buys land with a small warehouse on it. Which statement about the land is correct?",
    "choices": [
      "It is depreciated over 39 years",
      "It is depreciated over 15 years",
      "It is amortized over 180 months",
      "It can never be depreciated"
    ],
    "answer": 3,
    "explain": "Land does not wear out or become obsolete, so it is never depreciable; only the building and other improvements can be depreciated."
  },
  {
    "id": "depr-14",
    "section": "depr",
    "topic": "First-year cost recovery",
    "difficulty": "medium",
    "q": "A machine costs $20,000, has a 5-year useful life, and no salvage value. Under straight-line MACRS, how much is deducted in the first year?",
    "choices": [
      "$2,000",
      "$4,000",
      "$5,000",
      "$10,000"
    ],
    "answer": 0,
    "explain": "Straight-line depreciation equals cost divided by useful life: $20,000 / 5 = $4,000 for each full year. Year 1 is the exception: under the half-year convention it would be halved to $2,000."
  },
  {
    "id": "prop-1",
    "section": "prop",
    "topic": "Adjusted basis",
    "difficulty": "easy",
    "q": "A business bought equipment for $50,000, added $10,000 of capital improvements, and claimed $15,000 of depreciation. What is the adjusted basis?",
    "choices": [
      "$45,000",
      "$60,000",
      "$35,000",
      "$50,000"
    ],
    "answer": 0,
    "explain": "Adjusted basis equals cost plus capital improvements minus depreciation taken: $50,000 + $10,000 - $15,000 = $45,000."
  },
  {
    "id": "prop-2",
    "section": "prop",
    "topic": "Gifted property basis",
    "difficulty": "easy",
    "q": "Elora receives stock as a gift. The donor's adjusted basis was $8,000 and FMV on the gift date was $12,000. What basis does Elora use to compute gain on a later sale?",
    "choices": [
      "$12,000",
      "$8,000",
      "$10,000",
      "$0"
    ],
    "answer": 1,
    "explain": "Gifted property generally takes a carryover basis. Because FMV exceeded the donor's basis at the time of the gift, Elora uses the donor's $8,000 basis."
  },
  {
    "id": "prop-3",
    "section": "prop",
    "topic": "Inherited property basis",
    "difficulty": "easy",
    "q": "What is the general basis of property a taxpayer inherits from a decedent?",
    "choices": [
      "The decedent's original cost",
      "The decedent's adjusted basis",
      "FMV on the date of death",
      "Lesser of cost or FMV at death"
    ],
    "answer": 2,
    "explain": "Inherited property receives a stepped-up (or stepped-down) basis equal to fair market value on the date of death (or alternate valuation date), regardless of the decedent's basis."
  },
  {
    "id": "prop-4",
    "section": "prop",
    "topic": "Net 1231 gain",
    "difficulty": "easy",
    "q": "After netting all §1231 gains and losses for the year, a business has a net §1231 gain. How is it treated?",
    "choices": [
      "As ordinary business income",
      "As short-term capital gain",
      "As tax-exempt income",
      "As long-term capital gain"
    ],
    "answer": 3,
    "explain": "A net §1231 gain is treated as long-term capital gain, subject to the five-year lookback recapture rule for prior net §1231 losses."
  },
  {
    "id": "prop-5",
    "section": "prop",
    "topic": "Net 1231 loss",
    "difficulty": "medium",
    "q": "A company's §1231 losses exceed its §1231 gains for the year. How is the net loss treated?",
    "choices": [
      "As a fully deductible ordinary loss",
      "As a capital loss limited to $3,000",
      "As a nondeductible loss",
      "As a suspended passive loss"
    ],
    "answer": 0,
    "explain": "A net §1231 loss is an ordinary loss deductible in full against ordinary income; it is not subject to the capital loss limitations. Deducting it starts a five-year clock: any net §1231 gain in the next five years is taxed as ordinary income, instead of long-term capital gain, up to the amount of loss already deducted."
  },
  {
    "id": "prop-29",
    "section": "prop",
    "topic": "1231 five-year lookback",
    "difficulty": "medium",
    "q": "Non-recaptured net §1231 losses from how many prior years can turn a current net §1231 gain into ordinary income?",
    "choices": [
      "5 years",
      "3 years",
      "7 years",
      "There is no time limit"
    ],
    "answer": 0,
    "explain": "The lookback runs **five years**. A current net §1231 gain is ordinary income to the extent of net §1231 losses deducted in the five preceding years that have not already been recaptured; anything beyond that is long-term capital gain. The rule stops a taxpayer from taking an ordinary loss one year and capital gain the next on the same sort of property."
  },
  {
    "id": "prop-25",
    "section": "prop",
    "topic": "1231 property defined",
    "difficulty": "easy",
    "q": "Which of the following is §1231 property?",
    "choices": [
      "A delivery truck used in a business and held for three years",
      "Inventory held for sale to customers",
      "Stock held for investment",
      "A machine used in a business and owned for six months"
    ],
    "answer": 0,
    "explain": "§1231 property is depreciable property or real estate used in a trade or business and held more than one year. Inventory is excluded, investment stock is a capital asset instead, and business property held one year or less has not yet met the holding period."
  },
  {
    "id": "prop-30",
    "section": "prop",
    "topic": "Livestock as 1231 property",
    "difficulty": "medium",
    "q": "Raised livestock held for dairy purposes is what kind of property?",
    "choices": [
      "§1231 property",
      "Inventory",
      "§1245 property subject to depreciation recapture",
      "A capital asset"
    ],
    "answer": 0,
    "explain": "Livestock held for draft, breeding, dairy or sporting purposes is **§1231 property** once the holding period is met — **24 months** for cattle and horses, **12 months** for other livestock. Because raised animals were expensed as they grew, they carry no basis and no depreciation, so there is nothing for §1245 to recapture and the whole gain is §1231. Livestock held primarily for sale to customers is inventory instead, and poultry never qualifies."
  },
  {
    "id": "prop-31",
    "section": "prop",
    "topic": "Reporting a livestock sale",
    "difficulty": "medium",
    "q": "A farmer sells a raised dairy cow for $400 and pays $20 in selling costs. How is the sale reported?",
    "choices": [
      "As a $380 §1231 gain on Form 4797",
      "As $380 of ordinary farm income on Schedule F",
      "As a $400 §1231 gain on Form 4797",
      "As a $380 capital gain on Schedule D"
    ],
    "answer": 0,
    "explain": "A raised cow carries **no basis** — the cost of raising it was already deducted — so the whole net figure is gain: $400 less $20 of selling expenses = **$380**. Livestock held for dairy, breeding, draft or sporting purposes is §1231 property and goes on **Form 4797**. Schedule F is for the farm's ordinary operating income, including sales of market animals raised for sale."
  },
  {
    "id": "prop-32",
    "section": "prop",
    "topic": "Where livestock sales are reported",
    "difficulty": "easy",
    "q": "Sales of livestock held for breeding, sport or dairy purposes may produce ordinary income or capital gain depending on the circumstances. Where are they reported?",
    "choices": [
      "Form 4797, not Schedule F",
      "Schedule F, as ordinary farm income",
      "Schedule D, as capital transactions",
      "Schedule C, as business income"
    ],
    "answer": 0,
    "explain": "However the character turns out, the sale goes on **Form 4797**, Sales of Business Property. Schedule F carries the farm's ordinary operating income, including sales of market animals raised for sale — but animals held for breeding, sport, dairy or draft are §1231 property. Whether the gain lands as ordinary income or capital gain depends on depreciation recapture and the §1231 netting; the form does not change either way."
  },
  {
    "id": "prop-27",
    "section": "prop",
    "topic": "Corporate capital assets",
    "difficulty": "medium",
    "q": "For a corporation, capital assets are normally limited to which of the following?",
    "choices": [
      "Investment holdings such as stocks, bonds, and land held for appreciation",
      "Equipment and machinery used in the business",
      "Inventory held for sale to customers",
      "The building the corporation operates from"
    ],
    "answer": 0,
    "explain": "Capital assets are defined by exclusion, and the exclusions cover most of what an operating corporation owns — inventory, depreciable business property, business real estate and receivables are all carved out. What remains is essentially investment property: stocks, bonds, and land held in hope of appreciation rather than for use in the business. Equipment and business realty are **§1231** property instead, and inventory produces ordinary income."
  },
  {
    "id": "prop-6",
    "section": "prop",
    "topic": "1245 recapture amount",
    "difficulty": "medium",
    "q": "A business sold equipment for $50,000. Original cost was $40,000 and depreciation taken was $25,000. How much of the $35,000 gain is ordinary income under §1245?",
    "choices": [
      "$35,000",
      "$25,000",
      "$10,000",
      "$15,000"
    ],
    "answer": 1,
    "explain": "§1245 recaptures gain as ordinary income up to the lesser of depreciation taken ($25,000) or total gain ($35,000). The remaining $10,000 is §1231 gain."
  },
  {
    "id": "prop-26",
    "section": "prop",
    "topic": "1245 property defined",
    "difficulty": "medium",
    "q": "Single purpose agricultural structures, tangible personal property, and intangible personal property are all examples of what, for depreciation recapture purposes?",
    "choices": [
      "§1245 property",
      "§1250 property",
      "Listed property",
      "Capital assets"
    ],
    "answer": 0,
    "explain": "§1245 property is depreciable **personal** property, tangible or intangible, plus a short list of real property treated like equipment — single purpose agricultural or horticultural structures and petroleum storage facilities among them. Buildings are §1250 property instead. Note these same assets are usually §1231 property too when held more than a year; §1245 governs the recapture, §1231 the character of what is left."
  },
  {
    "id": "prop-7",
    "section": "prop",
    "topic": "1245 recapture rule",
    "difficulty": "easy",
    "q": "Under §1245, gain on the sale of business equipment is taxed as ordinary income to the extent of what amount?",
    "choices": [
      "The lesser of the gain realized or depreciation previously taken",
      "All depreciation previously taken, even if it exceeds the gain",
      "The net of all §1231 gains",
      "The total sales price"
    ],
    "answer": 0,
    "explain": "§1245 recaptures ordinary income up to the **lesser** of the gain realized or the depreciation allowed or allowable. A sale at a small gain recaptures only that gain; anything above the recaptured amount is §1231 gain."
  },
  {
    "id": "prop-20",
    "section": "prop",
    "topic": "1245 recapture ceiling",
    "difficulty": "medium",
    "q": "Equipment that cost $30,000 has $20,000 of depreciation taken, leaving a $10,000 adjusted basis. It sells for $18,000. How much of the gain is ordinary income under §1245?",
    "choices": [
      "$8,000",
      "$20,000",
      "$10,000",
      "$18,000"
    ],
    "answer": 0,
    "explain": "Recapture is the lesser of depreciation taken ($20,000) or the gain realized ($18,000 - $10,000 = $8,000), so the whole $8,000 gain is ordinary income. The gain caps the recapture whenever it is the smaller figure, and because the equipment sold for less than its original cost there is no §1231 gain on top."
  },
  {
    "id": "prop-21",
    "section": "prop",
    "topic": "1245 recapture ceiling",
    "difficulty": "easy",
    "q": "Equipment is sold at a gain that is subject to depreciation recapture. The recaptured ordinary income is the lesser of depreciation taken or:",
    "choices": [
      "The gain realized on the sale",
      "The original cost of the equipment",
      "The adjusted basis at the date of sale",
      "The sale price"
    ],
    "answer": 0,
    "explain": "Recapture is capped at the lesser of depreciation previously taken or the gain realized, so whichever is smaller becomes ordinary income. Any gain above the original cost is §1231 gain rather than recapture."
  },
  {
    "id": "prop-8",
    "section": "prop",
    "topic": "Section 1250",
    "difficulty": "medium",
    "q": "For real property, §1250 recapture generally applies to which amount?",
    "choices": [
      "All depreciation ever claimed",
      "The entire realized gain",
      "Appreciation in land value",
      "Depreciation in excess of straight-line"
    ],
    "answer": 3,
    "explain": "§1250 recaptures only depreciation claimed in excess of straight-line. Because MACRS real property uses straight-line, there is usually little or no §1250 recapture. The straight-line depreciation still comes back at sale, though — as unrecaptured §1250 gain, taxed at a maximum 25% rate instead of ordinary rates."
  },
  {
    "id": "prop-28",
    "section": "prop",
    "topic": "Land and 1250 property",
    "difficulty": "medium",
    "q": "A business uses an unimproved vacant lot for parking. Is the lot §1250 property?",
    "choices": [
      "No — land is not depreciable, so there is nothing for §1250 to reach",
      "Yes — all real property used in a business is §1250 property",
      "Yes — because it is used in the business rather than held for investment",
      "Only if the business has owned the lot for more than one year"
    ],
    "answer": 0,
    "explain": "§1250 property must be real property **subject to an allowance for depreciation**, and bare land never is. Pave the lot, stripe it or light it and those improvements are depreciable 15-year land improvements that generally do count as §1250 property — but the land itself never does. It is still **§1231** property when used in a business and held over a year; it simply carries no depreciation to recapture."
  },
  {
    "id": "prop-22",
    "section": "prop",
    "topic": "1245 versus 1250 recapture",
    "difficulty": "medium",
    "q": "Section 1245 property recaptures all allowed depreciation as ordinary income. Section 1250 real property generally recaptures only:",
    "choices": [
      "Depreciation claimed in excess of straight-line",
      "All depreciation allowed or allowable",
      "The full amount of the realized gain",
      "Nothing, because real property is exempt from recapture"
    ],
    "answer": 0,
    "explain": "§1245 turns every dollar of depreciation into ordinary income, but §1250 reaches only depreciation claimed above what straight-line would have given. Real property placed in service after 1986 must use straight-line, so there is usually no excess and no §1250 recapture at all. The straight-line depreciation is not tax free, though: it becomes unrecaptured §1250 gain, taxed at a maximum 25% rate instead of ordinary rates."
  },
  {
    "id": "prop-24",
    "section": "prop",
    "topic": "Unrecaptured 1250 gain",
    "difficulty": "medium",
    "q": "A landlord sells a rental building at a gain after years of straight-line depreciation. How is the part of the gain attributable to that depreciation taxed?",
    "choices": [
      "As **unrecaptured** §1250 gain, at a maximum 25% rate",
      "As ordinary income at rates up to 37%",
      "As regular long-term capital gain, like the rest of the gain",
      "It is not taxed — straight-line depreciation is never recaptured"
    ],
    "answer": 0,
    "explain": "Modern buildings must use straight-line, so ordinary-rate §1250 recapture is rare today. The straight-line depreciation instead comes back as **unrecaptured** §1250 gain taxed at a maximum 25% rate, while any gain above it is regular long-term capital gain. Ordinary recapture on real estate now shows up mainly on pre-1987 buildings or where bonus or accelerated depreciation was claimed on QIP and land improvements."
  },
  {
    "id": "prop-9",
    "section": "prop",
    "topic": "1031 property scope",
    "difficulty": "easy",
    "q": "Since 2018, nonrecognition treatment under the §1031 like-kind exchange rules applies only to which type of property?",
    "choices": [
      "Real property held for business or investment",
      "Machinery and equipment",
      "Personal-use vacation homes",
      "Inventory held for sale"
    ],
    "answer": 0,
    "explain": "The TCJA limited §1031 to real property held for productive use in a trade or business or for investment; personal property and inventory no longer qualify."
  },
  {
    "id": "prop-10",
    "section": "prop",
    "topic": "1031 boot",
    "difficulty": "medium",
    "q": "In a qualifying §1031 exchange, a taxpayer realizes a $30,000 gain and also receives $12,000 of cash boot. How much gain is recognized?",
    "choices": [
      "$0",
      "$30,000",
      "$12,000",
      "$18,000"
    ],
    "answer": 2,
    "explain": "Recognized gain equals the lesser of the realized gain or the boot received, so the $12,000 cash boot triggers $12,000 of recognized gain."
  },
  {
    "id": "prop-11",
    "section": "prop",
    "topic": "Gross profit percentage",
    "difficulty": "medium",
    "q": "Land with an adjusted basis of $60,000 is sold on the installment method for a $100,000 contract price. What is the gross profit percentage?",
    "choices": [
      "60%",
      "40%",
      "100%",
      "20%"
    ],
    "answer": 1,
    "explain": "Gross profit percentage equals gross profit divided by contract price: ($100,000 - $60,000) / $100,000 = 40%. That portion of each payment is taxable gain."
  },
  {
    "id": "prop-12",
    "section": "prop",
    "topic": "Installment reporting",
    "difficulty": "easy",
    "q": "Under the installment method, when is gain from the sale generally reported?",
    "choices": [
      "Entirely in the year of sale",
      "Only in the final payment year",
      "Only after full basis recovery",
      "Proportionately as payments are received"
    ],
    "answer": 3,
    "explain": "The installment method spreads gain over the collection period: each payment received is multiplied by the gross profit percentage to determine the gain reported."
  },
  {
    "id": "prop-23",
    "section": "prop",
    "topic": "Recapture under the installment method",
    "difficulty": "medium",
    "q": "Under the installment method, gain is recognized proportionately as payments are received. How is depreciation recapture treated?",
    "choices": [
      "It is recognized in full in the year of sale",
      "It is spread proportionately along with the rest of the gain",
      "It is recognized in the year the final payment is received",
      "It is not recognized at all under the installment method"
    ],
    "answer": 0,
    "explain": "Depreciation recapture cannot be deferred. All §1245 or §1250 recapture is ordinary income in the year of sale even if little or no cash is collected that year, and only the gain above the recapture is spread across the installments. A seller can therefore owe tax before receiving the money to pay it."
  },
  {
    "id": "prop-13",
    "section": "prop",
    "topic": "Related-party loss",
    "difficulty": "medium",
    "q": "Alaina sells land with a $25,000 basis to her brother Aeden for $15,000. How much of the $10,000 loss may she deduct?",
    "choices": [
      "$0",
      "$10,000",
      "$3,000",
      "$5,000"
    ],
    "answer": 0,
    "explain": "§267 disallows losses on sales between related parties, including siblings. Alaina deducts nothing, although the disallowed loss may later offset her brother's gain."
  },
  {
    "id": "prop-14",
    "section": "prop",
    "topic": "Section 267 consequences",
    "difficulty": "medium",
    "q": "A loss was disallowed under §267 on a sale to a related buyer. When the buyer later sells the property at a gain, the disallowed loss...",
    "choices": [
      "Is deducted in full by the original seller",
      "Expires unused in all cases",
      "May offset the buyer's gain on the resale",
      "Converts to an ordinary deduction"
    ],
    "answer": 2,
    "explain": "Under §267(d), the related buyer may use the previously disallowed loss to reduce, but not below zero, the gain recognized on a later sale of the property."
  },
  {
    "id": "pship-1",
    "section": "pship",
    "topic": "Section 721 formation",
    "difficulty": "easy",
    "q": "Bronwyn contributes appreciated land to a partnership solely in exchange for a partnership interest. Under §721, how much gain does she recognize?",
    "choices": [
      "Gain equal to the land's FMV",
      "No gain or loss",
      "FMV minus her basis in the land",
      "Ordinary income on the appreciation"
    ],
    "answer": 1,
    "explain": "§721 provides nonrecognition when property is contributed to a partnership in exchange for a partnership interest; the gain is deferred through the basis rules."
  },
  {
    "id": "pship-2",
    "section": "pship",
    "topic": "Outside basis",
    "difficulty": "medium",
    "q": "A partner contributes $20,000 cash, is allocated $15,000 of partnership ordinary income, and receives a $5,000 cash distribution. What is her outside basis?",
    "choices": [
      "$30,000",
      "$40,000",
      "$20,000",
      "$35,000"
    ],
    "answer": 0,
    "explain": "Outside basis equals contributions plus the partner's income share minus distributions: $20,000 + $15,000 - $5,000 = $30,000."
  },
  {
    "id": "pship-3",
    "section": "pship",
    "topic": "Liabilities and basis",
    "difficulty": "easy",
    "q": "A partner's outside basis is $25,000. The partnership borrows money, and his share of the new liability is $10,000. What is his outside basis now?",
    "choices": [
      "$25,000",
      "$15,000",
      "$35,000",
      "$10,000"
    ],
    "answer": 2,
    "explain": "An increase in a partner's share of partnership liabilities is treated as a deemed cash contribution, increasing outside basis to $35,000."
  },
  {
    "id": "pship-4",
    "section": "pship",
    "topic": "Partner compensation",
    "difficulty": "easy",
    "q": "How does a partner treat a guaranteed payment received for services performed for the partnership?",
    "choices": [
      "As a tax-free distribution",
      "As long-term capital gain",
      "As a nontaxable return of basis",
      "As ordinary income subject to SE tax"
    ],
    "answer": 3,
    "explain": "Guaranteed payments are compensation determined without regard to partnership income; the partner reports them as ordinary income subject to self-employment tax."
  },
  {
    "id": "pship-5",
    "section": "pship",
    "topic": "Separately stated rationale",
    "difficulty": "medium",
    "q": "Why are charitable contributions separately stated on Schedule K-1 instead of being included in partnership ordinary business income?",
    "choices": [
      "Deduction limits apply at the partner level",
      "Partnerships may not make donations",
      "They are deductible only by the partnership",
      "So the IRS can confirm each charity is a qualified organization"
    ],
    "answer": 0,
    "explain": "Items whose tax treatment or limits differ among partners, such as the charitable AGI percentage limits, must pass through separately so each partner applies their own limits."
  },
  {
    "id": "pship-6",
    "section": "pship",
    "topic": "Separately stated items",
    "difficulty": "easy",
    "q": "Which item must be separately stated on Schedule K-1 rather than included in the partnership's ordinary business income?",
    "choices": [
      "Cost of goods sold",
      "Net long-term capital gain",
      "Employee wage expense",
      "MACRS depreciation on equipment"
    ],
    "answer": 1,
    "explain": "Capital gains keep their character and preferential rate treatment at the partner level, so they are separately stated; COGS, wages, and depreciation are ordinary components."
  },
  {
    "id": "pship-17",
    "section": "pship",
    "topic": "Depreciation as an ordinary item",
    "difficulty": "medium",
    "q": "When is a business's depreciation expense NOT separately stated on Schedule K-1?",
    "choices": [
      "When it is regular MACRS depreciation, which is deducted in ordinary business income",
      "When the entity elects §179 expensing",
      "When the asset is real property rather than equipment",
      "When the entity is a partnership rather than an S corporation"
    ],
    "answer": 0,
    "explain": "Regular depreciation is an ordinary business expense, so it is absorbed into ordinary business income instead of passing through separately. **§179 expensing is the exception** and must be separately stated, because its dollar and taxable income limits apply again at the partner or shareholder level."
  },
  {
    "id": "pship-18",
    "section": "pship",
    "topic": "Distributed inventory character",
    "difficulty": "medium",
    "q": "Inventory received in a partnership distribution and sold within how many years produces ordinary income or loss rather than capital gain or loss?",
    "choices": [
      "5 years",
      "3 years",
      "2 years",
      "There is no time limit"
    ],
    "answer": 0,
    "explain": "Distributed inventory keeps its ordinary character for **5 years**. Sell it after that and the character turns on how the partner holds it, which may make it capital. **Unrealized receivables** behave differently — their gain stays ordinary forever, with no time limit. The five-year rule exists to stop a partner from converting ordinary inventory income into capital gain by taking a distribution first and selling later."
  },
  {
    "id": "pship-19",
    "section": "pship",
    "topic": "Hot assets on a buyout",
    "difficulty": "medium",
    "q": "A partnership redeems a partner's entire interest. Its inventory is treated as a hot asset — forcing ordinary income treatment — only if the inventory's fair market value exceeds what?",
    "choices": [
      "120% of its adjusted basis",
      "100% of its adjusted basis",
      "150% of its adjusted basis",
      "Its original cost plus carrying charges"
    ],
    "answer": 0,
    "explain": "In a redemption, inventory is a hot asset only when **substantially appreciated** — FMV over **120%** of adjusted basis. The buyout then splits: the hot-asset slice is ordinary income at FMV, the rest stays capital. On an outright **sale** of the interest to a third party, the threshold disappears — all inventory counts."
  },
  {
    "id": "pship-20",
    "section": "pship",
    "topic": "Distributed inventory taint",
    "difficulty": "medium",
    "q": "Scarlett receives inventory in a liquidating distribution from her partnership and holds it as an investment. Her gain on a later sale is ordinary income unless she sells it more than how long after the distribution?",
    "choices": [
      "5 years",
      "1 year",
      "3 years",
      "There is no time limit — the gain is always ordinary"
    ],
    "answer": 0,
    "explain": "Distributed inventory keeps its ordinary taint for **5 years** — sold within that window, the gain is ordinary no matter how Scarlett held it. After 5 years, character is judged fresh in her hands, usually capital. Contrast **unrealized receivables**, which stay ordinary **forever**. She also takes the inventory at the partnership's **carryover basis**, not FMV — that is what keeps the appreciation alive to be taxed."
  },
  {
    "id": "pship-7",
    "section": "pship",
    "topic": "Cash distribution gain",
    "difficulty": "easy",
    "q": "A partner with a $30,000 outside basis receives a $40,000 cash current distribution. How much gain does he recognize?",
    "choices": [
      "$0",
      "$40,000",
      "$10,000",
      "$30,000"
    ],
    "answer": 2,
    "explain": "A current distribution triggers gain only to the extent cash exceeds outside basis: $40,000 - $30,000 = $10,000, treated as capital gain."
  },
  {
    "id": "pship-8",
    "section": "pship",
    "topic": "Property distribution gain",
    "difficulty": "medium",
    "q": "A partner receives a current distribution of appreciated property (no cash). What gain does the partner generally recognize?",
    "choices": [
      "None — gain is generally not recognized",
      "Gain equal to the property's FMV",
      "Gain equal to the appreciation",
      "Ordinary income equal to inside basis"
    ],
    "answer": 0,
    "explain": "Property distributions generally do not trigger gain; gain arises only when money distributed exceeds outside basis. Deferral is preserved through carryover basis."
  },
  {
    "id": "pship-9",
    "section": "pship",
    "topic": "Distributed property basis",
    "difficulty": "medium",
    "q": "A partner's outside basis is $10,000. In a current distribution she receives property with an inside basis of $16,000. What is her basis in the property?",
    "choices": [
      "$16,000",
      "$10,000",
      "$6,000",
      "$0"
    ],
    "answer": 1,
    "explain": "Distributed property normally takes a carryover basis, but it cannot exceed the partner's outside basis (less any cash received), so it is limited to $10,000."
  },
  {
    "id": "pship-10",
    "section": "pship",
    "topic": "Basis loss limit",
    "difficulty": "medium",
    "q": "A partner's outside basis is $8,000 and her allocated share of the partnership's loss is $12,000. Ignoring other limits, how much loss may she deduct this year?",
    "choices": [
      "$12,000",
      "$4,000",
      "$8,000",
      "$0"
    ],
    "answer": 2,
    "explain": "Losses are deductible only to the extent of outside basis. She deducts $8,000 now; the excess $4,000 is suspended until her basis is restored."
  },
  {
    "id": "pship-11",
    "section": "pship",
    "topic": "Form 1065 purpose",
    "difficulty": "easy",
    "q": "What is the primary purpose of Form 1065, U.S. Return of Partnership Income?",
    "choices": [
      "To compute the partnership's income tax",
      "To elect S corporation status",
      "To report and pay each partner's self-employment tax",
      "To file an information return of partnership results"
    ],
    "answer": 3,
    "explain": "A partnership generally pays no federal income tax; Form 1065 is an information return reporting results that pass through to the partners."
  },
  {
    "id": "pship-12",
    "section": "pship",
    "topic": "Schedule K-1",
    "difficulty": "easy",
    "q": "What does Schedule K-1 (Form 1065) report to each partner?",
    "choices": [
      "The partner's share of income and other items",
      "The partnership's total tax liability",
      "The partner's required capital contribution",
      "Payroll tax withholding for partners"
    ],
    "answer": 0,
    "explain": "Schedule K-1 reports each partner's distributive share of income, deductions, and credits, which the partner then reports on their own return."
  },
  {
    "id": "pship-13",
    "section": "pship",
    "topic": "Excess loss treatment",
    "difficulty": "medium",
    "q": "A partnership loss allocation that is disallowed because it exceeds the partner's outside basis is...",
    "choices": [
      "Permanently lost",
      "Carried forward until basis is restored",
      "Converted into a capital loss",
      "Deductible by the other partners"
    ],
    "answer": 1,
    "explain": "Losses in excess of basis are suspended and carried forward indefinitely; they become deductible when the partner's outside basis later increases."
  },
  {
    "id": "pship-14",
    "section": "pship",
    "topic": "Payments to partners",
    "difficulty": "medium",
    "q": "How does a partnership generally treat a guaranteed payment made to a partner for services?",
    "choices": [
      "As a nondeductible cash distribution",
      "As a separately stated capital item",
      "As a reduction of the partner's basis",
      "As a deduction in computing ordinary income"
    ],
    "answer": 3,
    "explain": "Guaranteed payments are generally deductible by the partnership as a business expense in computing ordinary business income, unless capitalization is required."
  },
  {
    "id": "ccorp-1",
    "section": "ccorp",
    "topic": "Section 351 requirements",
    "difficulty": "easy",
    "q": "Lindsey transfers property to a new corporation solely in exchange for its stock. For the exchange to be tax-free under Section 351, what ownership must the transferor group have immediately after the exchange?",
    "choices": [
      "Exactly 50% of voting stock",
      "More than 66 2/3% of all stock",
      "At least 80% control",
      "100% of all classes of stock"
    ],
    "answer": 2,
    "explain": "Section 351 requires the transferors as a group to control at least 80% of the voting power and 80% of each class of nonvoting stock immediately after the exchange."
  },
  {
    "id": "ccorp-2",
    "section": "ccorp",
    "topic": "Section 351 Boot",
    "difficulty": "medium",
    "q": "Scarlett transfers property (basis $30,000, FMV $100,000) to her controlled corporation for stock worth $90,000 plus $10,000 cash. How much gain does Scarlett recognize?",
    "choices": [
      "$0",
      "$10,000",
      "$70,000",
      "$100,000"
    ],
    "answer": 1,
    "explain": "In a Section 351 exchange, gain is recognized to the extent of boot received. The $10,000 cash is boot, which is less than the $70,000 realized gain, so $10,000 is recognized."
  },
  {
    "id": "ccorp-3",
    "section": "ccorp",
    "topic": "Corporate Tax Rate",
    "difficulty": "easy",
    "q": "For tax year 2025, how is a C corporation's taxable income taxed at the federal level?",
    "choices": [
      "At a flat 21% rate",
      "At graduated rates from 15% to 35%",
      "At a flat 35% rate",
      "At each shareholder's individual rate"
    ],
    "answer": 0,
    "explain": "Since 2018, C corporations pay a flat 21% federal income tax on all taxable income; the old graduated brackets no longer apply."
  },
  {
    "id": "ccorp-24",
    "section": "ccorp",
    "topic": "Excess capital losses",
    "difficulty": "easy",
    "q": "Can a C corporation deduct excess net capital losses in the year incurred?",
    "choices": [
      "No — capital losses offset capital gains only",
      "Yes, up to $3,000 against ordinary income",
      "Yes, in full against ordinary income",
      "Yes, but limited to 50% of the excess"
    ],
    "answer": 0,
    "explain": "A corporation deducts capital losses only to the extent of capital gains. The **$3,000 allowance is the individual rule** and never applies to a corporation. The excess carries back three years and forward five, and is treated as a short-term capital loss in each carryover year."
  },
  {
    "id": "ccorp-4",
    "section": "ccorp",
    "topic": "Capital Loss Offset",
    "difficulty": "easy",
    "q": "A C corporation has $80,000 of ordinary income and a $10,000 net capital loss. How much of the capital loss is deductible against the ordinary income this year?",
    "choices": [
      "$10,000",
      "$3,000",
      "$5,000",
      "$0"
    ],
    "answer": 3,
    "explain": "Corporate capital losses may only offset capital gains, never ordinary income. Corporations get no $3,000 ordinary-income offset like individuals do."
  },
  {
    "id": "ccorp-5",
    "section": "ccorp",
    "topic": "Capital Loss Carryover",
    "difficulty": "easy",
    "q": "How may a C corporation use a net capital loss it cannot deduct in the current year?",
    "choices": [
      "Carry it forward indefinitely",
      "Carry it back 3 years and forward 5 years",
      "Carry it back 2 years and forward 20 years",
      "It is permanently lost"
    ],
    "answer": 1,
    "explain": "A corporate net capital loss is carried back 3 years and forward 5 years, and it may be used only against capital gains in those years."
  },
  {
    "id": "ccorp-6",
    "section": "ccorp",
    "topic": "Charitable Limit",
    "difficulty": "medium",
    "q": "A C corporation has $100,000 of taxable income before the charitable deduction and donates $15,000 cash to charity. What is its current-year charitable deduction?",
    "choices": [
      "$10,000",
      "$15,000",
      "$5,000",
      "$0"
    ],
    "answer": 0,
    "explain": "Corporate charitable deductions are limited to 10% of taxable income computed before the deduction — here $10,000. The excess $5,000 carries forward up to 5 years."
  },
  {
    "id": "ccorp-21",
    "section": "ccorp",
    "topic": "Deduction ordering",
    "difficulty": "medium",
    "q": "In computing a corporation's taxable income, the dividends received deduction is applied:",
    "choices": [
      "After the charitable contribution deduction",
      "Before the charitable contribution deduction",
      "Only after all NOL carryforwards are deducted",
      "Only if the corporation made no charitable contributions"
    ],
    "answer": 0,
    "explain": "Charity goes first: the 10% charitable limit is figured on taxable income computed **before** the dividends received deduction. The DRD is then taken against what is left. The order matters, because a large charitable deduction shrinks the taxable income base that the DRD's own limit is measured against."
  },
  {
    "id": "ccorp-7",
    "section": "ccorp",
    "topic": "Charitable Carryforward",
    "difficulty": "medium",
    "q": "A C corporation's charitable contributions exceed its 10%-of-taxable-income limit for the year. What happens to the excess?",
    "choices": [
      "It is deductible next year without limit",
      "It is permanently lost",
      "It carries forward up to 5 years",
      "It carries back 3 years"
    ],
    "answer": 2,
    "explain": "Contributions above the 10% limit carry forward for up to 5 years, remaining subject to the 10% limit in each carryover year."
  },
  {
    "id": "ccorp-8",
    "section": "ccorp",
    "topic": "DRD Tiers",
    "difficulty": "medium",
    "q": "A C corporation owns 25% of the stock of a domestic corporation that pays it a dividend. What dividends-received deduction percentage applies?",
    "choices": [
      "50%",
      "100%",
      "80%",
      "65%"
    ],
    "answer": 3,
    "explain": "The DRD is 50% for under-20% ownership, 65% for 20% to under-80% ownership, and 100% for 80%-or-more ownership. At 25%, the 65% tier applies."
  },
  {
    "id": "ccorp-9",
    "section": "ccorp",
    "topic": "DRD Computation",
    "difficulty": "easy",
    "q": "A C corporation owns 10% of a domestic corporation and receives $20,000 of dividends. Ignoring income limits, what is its dividends-received deduction?",
    "choices": [
      "$10,000",
      "$13,000",
      "$20,000",
      "$16,000"
    ],
    "answer": 0,
    "explain": "Ownership under 20% qualifies for a 50% dividends-received deduction: 50% x $20,000 = $10,000."
  },
  {
    "id": "ccorp-10",
    "section": "ccorp",
    "topic": "Distribution Ordering",
    "difficulty": "medium",
    "q": "A C corporation distributes cash to shareholders in excess of its earnings and profits. How do shareholders treat the excess?",
    "choices": [
      "As ordinary dividend income",
      "Return of capital to basis, then capital gain",
      "As tax-exempt income in full",
      "As wages subject to payroll tax"
    ],
    "answer": 1,
    "explain": "Distributions are dividends only to the extent of E&P. Any excess is a tax-free return of capital that reduces stock basis, and amounts beyond basis are capital gain."
  },
  {
    "id": "ccorp-11",
    "section": "ccorp",
    "topic": "E&P Dividend Amount",
    "difficulty": "medium",
    "q": "A C corporation with $8,000 of E&P distributes $10,000 cash to its sole shareholder, whose stock basis is $5,000. How much is taxed as a dividend?",
    "choices": [
      "$10,000",
      "$2,000",
      "$8,000",
      "$5,000"
    ],
    "answer": 2,
    "explain": "Only the $8,000 covered by earnings and profits is a dividend. The remaining $2,000 is a return of capital that reduces the shareholder's $5,000 stock basis."
  },
  {
    "id": "ccorp-12",
    "section": "ccorp",
    "topic": "NOL deduction limits",
    "difficulty": "medium",
    "q": "A C corporation has $100,000 of taxable income before its NOL deduction and a $150,000 post-2020 NOL carryforward. What is the maximum NOL deduction this year?",
    "choices": [
      "$80,000",
      "$100,000",
      "$150,000",
      "$20,000"
    ],
    "answer": 0,
    "explain": "Post-2017 NOLs may offset only 80% of taxable income: 80% x $100,000 = $80,000. The unused $70,000 carries forward indefinitely."
  },
  {
    "id": "ccorp-13",
    "section": "ccorp",
    "topic": "Form 1120 Deadline",
    "difficulty": "easy",
    "q": "Without an extension, when is Form 1120 due for a calendar-year C corporation?",
    "choices": [
      "March 15",
      "January 31",
      "June 15",
      "April 15"
    ],
    "answer": 3,
    "explain": "Form 1120 is due by the 15th day of the 4th month after year end — April 15 for a calendar-year corporation. An extension adds 6 months."
  },
  {
    "id": "ccorp-22",
    "section": "ccorp",
    "topic": "Small corporation schedule relief",
    "difficulty": "medium",
    "q": "A corporation whose total receipts for the year and total assets at year end are each under $250,000 is not required to complete which schedules?",
    "choices": [
      "Schedules L, M-1, and M-2",
      "Schedule L only",
      "Schedule M-1 only",
      "None — all schedules are required regardless of size"
    ],
    "answer": 0,
    "explain": "Below $250,000 the corporation may skip Schedule L (the balance sheet), Schedule M-1 (book-to-tax reconciliation), and Schedule M-2 (analysis of retained earnings). **Both** tests must be met — a corporation under the receipts threshold but over it on assets still completes all three."
  },
  {
    "id": "ccorp-29",
    "section": "ccorp",
    "topic": "Schedule M-3 threshold",
    "difficulty": "medium",
    "q": "A corporation must file Schedule M-3 when total assets at year end reported on Schedule L are how much or more?",
    "choices": [
      "$10 million",
      "$1 million",
      "$250,000",
      "$50 million"
    ],
    "answer": 0,
    "explain": "At **$10 million** or more of year-end total assets, the corporation files Schedule M-3 — a far more detailed book-to-tax reconciliation than Schedule M-1. Do not confuse the figure with the **$250,000** small-corporation threshold, which works the opposite way: below it, a corporation skips Schedules L, M-1 and M-2 altogether."
  },
  {
    "id": "ccorp-28",
    "section": "ccorp",
    "topic": "Controlled group apportionment",
    "difficulty": "medium",
    "q": "Members of a controlled group file which schedule to report the apportionment of taxable income, income tax, and certain tax benefits?",
    "choices": [
      "Schedule O",
      "Schedule M-3",
      "Schedule G",
      "Schedule UTP"
    ],
    "answer": 0,
    "explain": "**Schedule O (Form 1120)**, the Consent Plan and Apportionment Schedule for a Controlled Group, is where component members divide taxable income, income tax and certain tax benefits among themselves. The other three are real Form 1120 schedules doing different jobs: **G** identifies certain owners of voting stock, **M-3** is the expanded book-to-tax reconciliation for corporations with \\$10 million or more in assets, and **UTP** reports uncertain tax positions."
  },
  {
    "id": "ccorp-30",
    "section": "ccorp",
    "topic": "Affiliated group",
    "difficulty": "medium",
    "q": "A parent corporation and its 80%-owned subsidiary make up what, for purposes of electing to file a consolidated return?",
    "choices": [
      "An affiliated group",
      "A controlled group",
      "A personal holding company",
      "A partnership"
    ],
    "answer": 0,
    "explain": "At 80% ownership the parent and subsidiary form an **affiliated group**, which may elect to file one consolidated return. The very same relationship also makes them a **parent-subsidiary controlled group** — a separate provision that forces them to share tax benefits and thresholds and drives the Schedule O apportionment. One 80% threshold, two different consequences, so read what the question is actually asking about."
  },
  {
    "id": "ccorp-31",
    "section": "ccorp",
    "topic": "Controlled group benefit sharing",
    "difficulty": "medium",
    "q": "How many accumulated earnings credits is a controlled group entitled to?",
    "choices": [
      "One, apportioned among the member corporations",
      "One for each member corporation",
      "Two, regardless of how many members there are",
      "None — controlled groups cannot claim the credit"
    ],
    "answer": 0,
    "explain": "A controlled group gets **one** $250,000 accumulated earnings credit — $150,000 if any member is a personal service corporation — divided among the component members. That is the entire purpose of the controlled group rules: stop a business from multiplying tax benefits by splitting itself across several corporations. Separately, an **affiliated** group electing to file a **consolidated** return must use the common parent's tax year, which is a different rule attached to a different election."
  },
  {
    "id": "ccorp-23",
    "section": "ccorp",
    "topic": "June 30 year-end due date",
    "difficulty": "medium",
    "q": "Corporations must file their income tax return by the 15th day of the 4th month after the end of their tax year, unless the tax year ends on:",
    "choices": [
      "June 30",
      "December 31",
      "March 31",
      "September 30"
    ],
    "answer": 0,
    "explain": "A June 30 year end keeps the older deadline — the 15th day of the **third** month, September 15 — while every other year end uses the fourth month. That earlier due date is exactly why June 30 filers get a **seven**-month extension rather than six: it lands them at April 15, the same place the six-month rule puts everyone else."
  },
  {
    "id": "ccorp-20",
    "section": "ccorp",
    "topic": "June 30 year-end extension",
    "difficulty": "medium",
    "q": "A C corporation with a June 30 tax year end files Form 7004. How long is the extension?",
    "choices": [
      "7 months, to April 15",
      "6 months, to March 15",
      "5 months, to February 15",
      "3 months, to December 15"
    ],
    "answer": 0,
    "explain": "A June 30 year-end corporation files Form 1120 by September 15 — the 15th day of the **third** month, not the fourth like other corporations — and Form 7004 extends that by **seven** months to April 15. It is the one corporate extension that is not six months, granted because these filers kept the older due date through the transition."
  },
  {
    "id": "ccorp-14",
    "section": "ccorp",
    "topic": "Estimated Tax Threshold",
    "difficulty": "easy",
    "q": "A C corporation generally must make quarterly estimated tax payments if it expects to owe at least how much tax for the year?",
    "choices": [
      "$1,000",
      "$500",
      "$5,000",
      "$250"
    ],
    "answer": 1,
    "explain": "A corporation expecting to owe $500 or more must pay estimated tax, generally in four equal installments. The $1,000 threshold applies to individuals, not corporations."
  },
  {
    "id": "ccorp-26",
    "section": "ccorp",
    "topic": "Quick refund of estimated tax",
    "difficulty": "medium",
    "q": "A corporation that overpaid its estimated tax may apply for a quick refund if the overpayment is at least what share of its expected tax liability?",
    "choices": [
      "10%, and at least $500",
      "5%, and at least $500",
      "25%, and at least $1,000",
      "50%, and at least $100"
    ],
    "answer": 0,
    "explain": "Both tests must be met — the overpayment has to be at least **10%** of expected tax liability **and** at least **$500**. The corporation applies on **Form 4466**, filed after the close of the tax year but before it files the return, and the IRS acts on the application within 45 days."
  },
  {
    "id": "scorp-1",
    "section": "scorp",
    "topic": "Family shareholder rule",
    "difficulty": "medium",
    "q": "Five members of one family each own stock in an S corporation. For the 100-shareholder limit, how may they be counted?",
    "choices": [
      "As five separate shareholders in all cases",
      "As a single shareholder",
      "Only married couples may combine",
      "They are excluded from the count"
    ],
    "answer": 1,
    "explain": "Members of a family — a common ancestor, lineal descendants, and their spouses — are treated as a single shareholder for the 100-shareholder limit; no election is required."
  },
  {
    "id": "scorp-2",
    "section": "scorp",
    "topic": "Stock structure rules",
    "difficulty": "easy",
    "q": "Which stock structure is permitted for an S corporation?",
    "choices": [
      "Common plus preferred stock",
      "Two classes with different dividend rights",
      "Common plus convertible preferred",
      "One class, with voting and nonvoting shares"
    ],
    "answer": 3,
    "explain": "An S corporation may have only one class of stock, but differences in voting rights alone do not create a second class."
  },
  {
    "id": "scorp-3",
    "section": "scorp",
    "topic": "Eligible Shareholders",
    "difficulty": "easy",
    "q": "Which of the following is an eligible S corporation shareholder?",
    "choices": [
      "The estate of a deceased shareholder",
      "A partnership",
      "A C corporation",
      "A nonresident alien individual"
    ],
    "answer": 0,
    "explain": "Estates, certain trusts, and U.S. citizen or resident individuals may own S stock. Partnerships, C corporations, and nonresident aliens are ineligible."
  },
  {
    "id": "scorp-4",
    "section": "scorp",
    "topic": "Late S election",
    "difficulty": "medium",
    "q": "A calendar-year corporation files Form 2553 in June 2025, after the March 15 deadline, and receives no late-election relief. When is its S election effective?",
    "choices": [
      "January 1, 2025",
      "June 1, 2025",
      "January 1, 2026",
      "Never; it must refile Form 8832"
    ],
    "answer": 2,
    "explain": "An S election filed after the 15th day of the 3rd month of the tax year is generally effective for the following tax year, so it takes effect January 1, 2026 absent IRS late-election relief."
  },
  {
    "id": "scorp-5",
    "section": "scorp",
    "topic": "Election Termination",
    "difficulty": "medium",
    "q": "A shareholder of an S corporation sells shares to a partnership. What happens to the S election?",
    "choices": [
      "It terminates on the date of the transfer",
      "It remains in effect until the end of the year",
      "Nothing, if the partnership owns under 50%",
      "It converts to a partnership return"
    ],
    "answer": 0,
    "explain": "A transfer to an ineligible shareholder, such as a partnership, terminates the S election immediately on the date of the transfer."
  },
  {
    "id": "scorp-6",
    "section": "scorp",
    "topic": "Daily Allocation",
    "difficulty": "medium",
    "q": "An S corporation earns $36,500 of ordinary income in a 365-day year. Jo owned 100% of the stock for the first 73 days, then sold all her shares. Under the default per-day allocation, how much income is allocated to Jo?",
    "choices": [
      "$36,500",
      "$0",
      "$18,250",
      "$7,300"
    ],
    "answer": 3,
    "explain": "S corporation income is allocated pro rata per share, per day: $36,500 / 365 = $100 per day x 73 days = $7,300 to Jo."
  },
  {
    "id": "scorp-7",
    "section": "scorp",
    "topic": "Basis Ordering",
    "difficulty": "medium",
    "q": "In adjusting an S shareholder's stock basis for the year, which order applies?",
    "choices": [
      "Losses, then income, then distributions",
      "Income increases, then distributions, then losses",
      "Distributions, then income, then losses",
      "Losses, then distributions, then income"
    ],
    "answer": 1,
    "explain": "Basis is first increased by income items, then reduced by distributions, and only then reduced by losses. This order helps preserve tax-free distribution treatment."
  },
  {
    "id": "scorp-15",
    "section": "scorp",
    "topic": "S corp distribution ordering",
    "difficulty": "medium",
    "q": "An S corporation that has accumulated E&P from its C corporation years makes a distribution. In what order are the accounts applied?",
    "choices": [
      "AAA, then accumulated E&P, then OAA",
      "Accumulated E&P, then AAA, then OAA",
      "OAA, then AAA, then accumulated E&P",
      "AAA, then OAA, then accumulated E&P"
    ],
    "answer": 0,
    "explain": "Distributions come out of **AAA** first (tax free to the extent of stock basis), then **accumulated E&P** as a taxable dividend, then **OAA**. Only the E&P layer creates dividend income, which is why an S corporation with no C corporation history never reaches it."
  },
  {
    "id": "scorp-16",
    "section": "scorp",
    "topic": "Schedule M-2 purpose",
    "difficulty": "medium",
    "q": "What is the purpose of Schedule M-2 on an S corporation's Form 1120-S?",
    "choices": [
      "To track the accumulated adjustments account and the corporation's other equity accounts",
      "To reconcile book income to taxable income",
      "To report the balance sheet at year end",
      "To analyze unappropriated retained earnings per books"
    ],
    "answer": 0,
    "explain": "On Form 1120-S, Schedule M-2 tracks the **AAA** together with previously taxed income, accumulated E&P and the **OAA** — the accounts that decide how a distribution is taxed. A C corporation's M-2 is a different animal: it analyzes unappropriated retained earnings. Schedule M-1 is the book-to-tax reconciliation and Schedule L is the balance sheet."
  },
  {
    "id": "scorp-17",
    "section": "scorp",
    "topic": "Where AAA is tracked",
    "difficulty": "medium",
    "q": "An S corporation's accumulated adjustments account — its taxable income earned but not yet distributed — is tracked where?",
    "choices": [
      "Schedule M-2 of Form 1120-S",
      "Schedule L of Form 1120-S",
      "Schedule M-1 of Form 1120-S",
      "On each shareholder's own Schedule K-1"
    ],
    "answer": 0,
    "explain": "AAA is a **corporation-level** account kept on Schedule M-2 — not on any shareholder's K-1, which reports that shareholder's share of items instead. AAA accumulates taxable income and deductions and is reduced by distributions. Tax-exempt income stays out of it and goes to the **OAA**, which sits on the same schedule and is applied after AAA and accumulated E&P."
  },
  {
    "id": "scorp-18",
    "section": "scorp",
    "topic": "Purpose of the OAA",
    "difficulty": "medium",
    "q": "The other adjustments account (OAA) records items that do not affect AAA but do affect what?",
    "choices": [
      "Shareholder stock basis",
      "The corporation's accumulated E&P",
      "The shareholders' at-risk amounts",
      "The corporation's taxable income"
    ],
    "answer": 0,
    "explain": "OAA holds tax-exempt income and the expenses allocable to it — items deliberately kept out of AAA that nonetheless move **stock basis**: tax-exempt income increases basis, and the related nondeductible expenses decrease it. OAA exists precisely to track that gap, so the corporation has both figures on hand when it makes a distribution."
  },
  {
    "id": "scorp-20",
    "section": "scorp",
    "topic": "When the OAA stays empty",
    "difficulty": "medium",
    "q": "An S corporation has no tax-exempt interest and no life insurance proceeds. Which account will it not have?",
    "choices": [
      "OAA",
      "AAA",
      "Accumulated E&P",
      "It will have none of the three"
    ],
    "answer": 0,
    "explain": "**OAA** exists only to hold tax-exempt income and the expenses allocable to it, so with none of that it stays empty. **AAA** exists for every S corporation — it starts at zero with the election and accumulates taxable income less distributions, and can even go negative. **Accumulated E&P** turns on something else entirely: whether the corporation has C corporation years behind it. It may well have none, but that would be because of its history, not because of tax-exempt income."
  },
  {
    "id": "scorp-8",
    "section": "scorp",
    "topic": "Distributions and basis",
    "difficulty": "easy",
    "q": "Nora's S corporation stock basis is $15,000. The corporation (no E&P) distributes $12,000 cash to her. How much of the distribution is taxable?",
    "choices": [
      "$12,000",
      "$3,000",
      "$0",
      "$6,000"
    ],
    "answer": 2,
    "explain": "S corporation distributions are tax-free to the extent of stock basis. The $12,000 simply reduces Nora's basis from $15,000 to $3,000."
  },
  {
    "id": "scorp-9",
    "section": "scorp",
    "topic": "Shareholder distributions",
    "difficulty": "easy",
    "q": "Lincoln's S corporation stock basis is $4,000. The corporation (no E&P) distributes $10,000 cash to him. What does Lincoln report?",
    "choices": [
      "$6,000 capital gain",
      "$10,000 dividend income",
      "$6,000 ordinary income",
      "Nothing; distributions are tax-free"
    ],
    "answer": 0,
    "explain": "The first $4,000 is a tax-free return of basis; the $6,000 in excess of basis is treated as gain from the sale of stock — a capital gain."
  },
  {
    "id": "scorp-19",
    "section": "scorp",
    "topic": "Distributions beyond basis",
    "difficulty": "easy",
    "q": "An S corporation distribution is a tax-free return of capital until stock basis reaches zero. How is any further distribution treated?",
    "choices": [
      "As capital gain",
      "As an ordinary dividend",
      "As tax-free income",
      "As a deductible loss to the shareholder"
    ],
    "answer": 0,
    "explain": "Once basis is exhausted, further distributions are gain from the sale or exchange of the stock — **capital gain**, long term if the shares were held more than a year. This is the same landing spot as the last step of the C corporation waterfall, except an S corporation with no accumulated E&P skips the dividend layer altogether and goes straight from return of capital to capital gain."
  },
  {
    "id": "scorp-10",
    "section": "scorp",
    "topic": "Loss Basis Limit",
    "difficulty": "easy",
    "q": "A shareholder has $10,000 of stock basis and no loan basis. The S corporation allocates her a $15,000 loss. Assuming at-risk and passive rules are met, how much may she deduct this year?",
    "choices": [
      "$15,000",
      "$10,000",
      "$5,000",
      "$0"
    ],
    "answer": 1,
    "explain": "Losses are deductible only up to stock plus direct loan basis — $10,000 here. The remaining $5,000 carries forward until basis is restored."
  },
  {
    "id": "scorp-21",
    "section": "scorp",
    "topic": "Loss limit with loan basis",
    "difficulty": "medium",
    "q": "A shareholder has $10,000 of stock basis and $3,000 of loan basis from a direct loan she made to the S corporation. The corporation allocates her a $15,000 loss. Assuming at-risk and passive rules are met, how much may she deduct this year?",
    "choices": [
      "$13,000",
      "$10,000",
      "$15,000",
      "$3,000"
    ],
    "answer": 0,
    "explain": "Losses are deductible up to stock basis **plus** direct loan basis: $10,000 + $3,000 = **$13,000**. The remaining $2,000 suspends and carries forward until basis is restored. Only a **direct loan from the shareholder to the corporation** creates loan basis — guaranteeing the corporation's third-party loan does not, no matter how much personal risk it carries."
  },
  {
    "id": "scorp-11",
    "section": "scorp",
    "topic": "Debt Basis",
    "difficulty": "medium",
    "q": "Which item gives an S corporation shareholder additional basis for deducting pass-through losses?",
    "choices": [
      "Guaranteeing the corporation's bank loan",
      "The corporation's own borrowing from a bank",
      "A loan the shareholder makes to another shareholder",
      "A loan the shareholder makes directly to the corporation"
    ],
    "answer": 3,
    "explain": "Only direct shareholder loans to the S corporation create debt basis. Guarantees and entity-level borrowing do not increase a shareholder's loss limit."
  },
  {
    "id": "scorp-12",
    "section": "scorp",
    "topic": "Reasonable Compensation",
    "difficulty": "medium",
    "q": "A sole shareholder-employee of a profitable S corporation takes only distributions and no salary. What may the IRS do?",
    "choices": [
      "Terminate the S election automatically",
      "Tax the distributions as capital gain",
      "Reclassify distributions as wages subject to payroll tax",
      "Disallow the corporation's business deductions"
    ],
    "answer": 2,
    "explain": "Shareholder-employees must receive reasonable compensation for services performed. The IRS can recharacterize distributions as wages, triggering employment taxes."
  },
  {
    "id": "scorp-13",
    "section": "scorp",
    "topic": "Shareholder fringe benefits",
    "difficulty": "medium",
    "q": "An S corporation pays health insurance premiums for a shareholder-employee who owns 5% of the stock. How are the premiums treated?",
    "choices": [
      "Included in the shareholder's W-2 wages",
      "A tax-free fringe benefit",
      "A nondeductible corporate expense",
      "A distribution reducing stock basis"
    ],
    "answer": 0,
    "explain": "Fringe benefits for more-than-2% shareholders are treated like partner benefits: the cost goes into the shareholder's W-2 wages, though the premiums may qualify for the self-employed health insurance deduction."
  },
  {
    "id": "scorp-14",
    "section": "scorp",
    "topic": "Basis Computation",
    "difficulty": "medium",
    "q": "An S shareholder begins the year with $10,000 stock basis. Her shares of the year's items are $6,000 ordinary income and $2,000 tax-exempt interest. With no distributions, what is her year-end basis?",
    "choices": [
      "$16,000",
      "$10,000",
      "$18,000",
      "$12,000"
    ],
    "answer": 2,
    "explain": "Stock basis increases for all income items passed through, including tax-exempt income: $10,000 + $6,000 + $2,000 = $18,000."
  },
  {
    "id": "methods-1",
    "section": "methods",
    "topic": "Cash method expenses",
    "difficulty": "medium",
    "q": "A cash-basis business charges a $500 deductible business expense to its credit card on December 30, 2025, and pays the card bill in January 2026. In which year is the expense deductible?",
    "choices": [
      "2026, when the card bill is paid",
      "2025, when the amount is charged",
      "Either year, at the taxpayer's election",
      "Neither year; card charges are nondeductible"
    ],
    "answer": 1,
    "explain": "For cash-method taxpayers, charging an expense to a third-party credit card is treated as payment with borrowed funds, so the deduction arises in 2025 when the charge is made, not when the card bill is later paid."
  },
  {
    "id": "methods-2",
    "section": "methods",
    "topic": "Accrual method requirement",
    "difficulty": "medium",
    "q": "Which taxpayer is generally required to use the accrual method of accounting?",
    "choices": [
      "A C corporation exceeding the gross receipts test",
      "A sole proprietor with several employees",
      "Any business that invoices its customers",
      "A partnership owned entirely by individuals"
    ],
    "answer": 0,
    "explain": "Large C corporations (and partnerships with C corporation partners) that fail the small business gross receipts test must use the accrual method. Small taxpayers may generally use the cash method."
  },
  {
    "id": "methods-3",
    "section": "methods",
    "topic": "All-events test",
    "difficulty": "medium",
    "q": "Under the accrual method, and assuming performance has taken place, when is income recognized under the all-events test?",
    "choices": [
      "When cash is deposited in the bank",
      "When the right is fixed and amount is determinable",
      "When the customer's credit is approved",
      "When the annual tax return is filed"
    ],
    "answer": 1,
    "explain": "Accrual taxpayers recognize income when all events fixing the right to receive it have occurred and the amount can be determined with reasonable accuracy, regardless of when cash arrives. Performance is usually what fixes the right — though payment falling due or being received early can fix it sooner."
  },
  {
    "id": "methods-4",
    "section": "methods",
    "topic": "Accrual deduction timing",
    "difficulty": "medium",
    "q": "An accrual-basis business satisfies the all-events test for an expense. What additional requirement generally must be met before the expense is deductible?",
    "choices": [
      "The expense must be paid in cash",
      "The IRS must approve the deduction in advance",
      "The expense must exceed 2% of gross receipts",
      "Economic performance must occur"
    ],
    "answer": 3,
    "explain": "Accrual deductions generally require that the liability is fixed, the amount is determinable, and economic performance has occurred — for example, the services or property have actually been provided."
  },
  {
    "id": "methods-5",
    "section": "methods",
    "topic": "Accounting method changes",
    "difficulty": "easy",
    "q": "A business wants to change from the cash method to the accrual method of accounting. What must it generally do?",
    "choices": [
      "Request IRS consent by filing Form 3115",
      "Simply begin using the new method",
      "Attach an election note to its next return",
      "Amend its returns for the past three years"
    ],
    "answer": 0,
    "explain": "A change in accounting method generally requires IRS consent, which is requested on Form 3115, Application for Change in Accounting Method."
  },
  {
    "id": "methods-6",
    "section": "methods",
    "topic": "Section 481(a) adjustment",
    "difficulty": "medium",
    "q": "When a business changes its accounting method, what is the purpose of the section 481(a) adjustment?",
    "choices": [
      "To penalize the taxpayer for the change",
      "To refund prior-year taxes automatically",
      "To prevent income duplication or omission",
      "To defer all income to future years"
    ],
    "answer": 2,
    "explain": "The section 481(a) adjustment reconciles the old and new methods so items of income and expense are neither duplicated nor omitted as a result of the change."
  },
  {
    "id": "methods-7",
    "section": "methods",
    "topic": "Required tax years",
    "difficulty": "medium",
    "q": "Absent a business purpose or special election, what tax year is a partnership generally required to use?",
    "choices": [
      "Any fiscal year the partners choose",
      "The tax year of its majority-interest partners",
      "A calendar year in every case",
      "The tax year of its managing partner only"
    ],
    "answer": 1,
    "explain": "A partnership must generally use the tax year of its majority-interest partners, then its principal partners, then the year with the least aggregate deferral. S corporations generally must use a calendar year."
  },
  {
    "id": "methods-8",
    "section": "methods",
    "topic": "Employer FICA",
    "difficulty": "easy",
    "q": "An employee is paid $2,000 in wages. What is the employer's share of FICA tax at the 7.65% rate?",
    "choices": [
      "$76.50",
      "$306",
      "$200",
      "$153"
    ],
    "answer": 3,
    "explain": "The employer's FICA share is 7.65% of wages — 6.2% Social Security plus 1.45% Medicare. 7.65% of $2,000 is $153, and the employee pays a matching $153 through withholding."
  },
  {
    "id": "methods-9",
    "section": "methods",
    "topic": "FUTA basics",
    "difficulty": "easy",
    "q": "An employee earns $10,000 of wages during the year. How much of those wages is subject to federal unemployment (FUTA) tax?",
    "choices": [
      "$7,000",
      "$10,000",
      "$3,000",
      "$0"
    ],
    "answer": 0,
    "explain": "FUTA tax applies only to the first $7,000 of wages paid to each employee per year, and it is imposed on the employer alone — nothing is withheld from the employee."
  },
  {
    "id": "methods-10",
    "section": "methods",
    "topic": "Employment tax returns",
    "difficulty": "easy",
    "q": "Which form does an employer file each quarter to report wages, withheld income tax, and FICA taxes?",
    "choices": [
      "Form 940",
      "Form W-3",
      "Form 941",
      "Form 1099-NEC"
    ],
    "answer": 2,
    "explain": "Form 941 is the quarterly employment tax return for wages, income tax withholding, and FICA. Form 940, the FUTA return, is filed only once a year."
  },
  {
    "id": "methods-11",
    "section": "methods",
    "topic": "Payroll deposits",
    "difficulty": "medium",
    "q": "What determines whether an employer must deposit payroll taxes on a monthly or semiweekly schedule?",
    "choices": [
      "The number of employees on payroll",
      "Total taxes reported during a lookback period",
      "The employer's state of operation",
      "Whether the employer uses a payroll service"
    ],
    "answer": 1,
    "explain": "Deposit frequency is based on total employment taxes reported during a lookback period; larger reported liabilities require semiweekly rather than monthly deposits."
  },
  {
    "id": "methods-12",
    "section": "methods",
    "topic": "Worker classification",
    "difficulty": "easy",
    "q": "Under the common-law test, what is the key factor for classifying a worker as an employee rather than an independent contractor?",
    "choices": [
      "Whether the worker is paid hourly",
      "Whether a written contract exists",
      "Whether the worker has other clients",
      "The right to control how the work is performed"
    ],
    "answer": 3,
    "explain": "A worker is a common-law employee when the business has the right to direct and control not just the result but how, when, and where the work is performed."
  },
  {
    "id": "methods-13",
    "section": "methods",
    "topic": "Form 1099-NEC",
    "difficulty": "easy",
    "q": "In 2026, a business pays an unincorporated contractor $1,500 for services. Must the business file Form 1099-NEC?",
    "choices": [
      "No, total payments are below the reporting threshold",
      "Yes, every contractor payment must be reported",
      "Yes, payments of $600 or more must always be reported",
      "No, contractors are never subject to information reporting"
    ],
    "answer": 0,
    "explain": "For payments made after 2025, Form 1099-NEC is required only when payments for services to a nonemployee total $2,000 or more for the year (indexed for inflation) — the old $600 threshold no longer applies, so $1,500 need not be reported."
  },
  {
    "id": "methods-20",
    "section": "methods",
    "topic": "Trust fund taxes defined",
    "difficulty": "easy",
    "q": "The employee's share of FICA and the income tax an employer withholds from wages are known as what kind of taxes?",
    "choices": [
      "Trust fund taxes",
      "Excise taxes",
      "Self-employment taxes",
      "Unemployment taxes"
    ],
    "answer": 0,
    "explain": "They are **trust fund taxes** — the employer never owns this money, it holds the amounts in trust for the government until remitting them. That framing is what makes a responsible person personally liable for the Trust Fund Recovery Penalty on a willful failure to pay them over. Note the penalty reaches only the **withheld employee portion**, never the employer's own matching share of FICA."
  },
  {
    "id": "methods-21",
    "section": "methods",
    "topic": "What trust fund taxes include",
    "difficulty": "easy",
    "q": "What are employment trust fund taxes?",
    "choices": [
      "Income tax and the employee's FICA withheld from wages",
      "The employer's matching share of FICA",
      "Federal and state unemployment taxes",
      "The estimated tax payments a business makes quarterly"
    ],
    "answer": 0,
    "explain": "They are the amounts withheld **from the employee's wages** — federal income tax plus the employee's share of Social Security and Medicare. The employer collects and holds them for the government rather than owning them. Its own matching FICA and its FUTA are the employer's liabilities, not trust fund amounts, which is exactly why the Trust Fund Recovery Penalty reaches only the withheld portion."
  },
  {
    "id": "methods-22",
    "section": "methods",
    "topic": "1099 recipient vs IRS deadlines",
    "difficulty": "medium",
    "q": "A corporation files its Forms 1099-DIV on paper. When are they due to the IRS, and when are the copies due to the recipients? (IRS / recipients)",
    "choices": [
      "February 28 / January 31",
      "March 31 / January 31",
      "January 31 / January 31",
      "March 15 / March 15"
    ],
    "answer": 0,
    "explain": "Recipient copies go out by **January 31** almost across the board; the IRS copy follows — **February 28** on paper, March 31 electronically (that pairing is the second choice, the e-file trap). The January-31-to-everyone pattern belongs to **W-2s and the 1099-NEC**, not the rest of the 1099 series."
  },
  {
    "id": "methods-14",
    "section": "methods",
    "topic": "Trust fund penalty",
    "difficulty": "medium",
    "q": "A corporation willfully fails to pay over $8,000 of withheld income and FICA taxes. What trust fund recovery penalty can be assessed against a responsible person?",
    "choices": [
      "$4,000",
      "$800",
      "$8,000",
      "$16,000"
    ],
    "answer": 2,
    "explain": "The trust fund recovery penalty equals 100% of the unpaid trust fund taxes — withheld income tax and the employee's FICA — so a willful responsible person can be assessed the full $8,000."
  },
  {
    "id": "methods-15",
    "section": "methods",
    "topic": "Statutory employees",
    "difficulty": "medium",
    "q": "A statutory employee is a common law independent contractor treated as an employee by statute. Is federal income tax withheld from their pay?",
    "choices": [
      "No, but FICA is withheld when the statutory conditions are met",
      "Yes, both income tax and FICA are withheld",
      "No, neither income tax nor FICA is withheld",
      "Yes, income tax is withheld but FICA is not"
    ],
    "answer": 0,
    "explain": "The statute reclassifies these workers for **FICA only**. Social Security and Medicare come out when the conditions are met — the services are performed personally, the worker has no substantial investment in the facilities used, and the relationship is a continuing one — but **no income tax is withheld**. Box 13 of the W-2 is checked, and the worker reports the pay on **Schedule C**, deducting business expenses there without owing self-employment tax on that income."
  },
  {
    "id": "methods-17",
    "section": "methods",
    "topic": "Information return due dates",
    "difficulty": "medium",
    "q": "Most information returns are due to the IRS by which dates?",
    "choices": [
      "February 28 on paper, March 31 electronically",
      "January 31 regardless of filing method",
      "March 15 on paper, April 15 electronically",
      "April 15 regardless of filing method"
    ],
    "answer": 0,
    "explain": "**February 28 on paper, March 31 electronically** is the standard pair across most information returns — the 1099 series, 1098, 1095-B and 1095-C, W-2G. Filing electronically buys about a month. Watch for the exceptions: Forms W-2 and 1099-NEC are due January 31 either way."
  },
  {
    "id": "methods-18",
    "section": "methods",
    "topic": "January 31 filing exceptions",
    "difficulty": "medium",
    "q": "By when must Forms W-2 and 1099-NEC be filed with the government?",
    "choices": [
      "January 31, whether on paper or electronically",
      "February 28 on paper, March 31 electronically",
      "March 2 for both",
      "April 15 for both"
    ],
    "answer": 0,
    "explain": "These two break the usual pattern: **January 31**, with no extra month for filing electronically. The accelerated date lets the IRS match reported wages and nonemployee compensation against returns before paying refunds, which is the same reason those two forms were singled out in the first place."
  },
  {
    "id": "methods-19",
    "section": "methods",
    "topic": "Electronic filing threshold",
    "difficulty": "medium",
    "q": "A business must file its information returns electronically once it files how many in total for the year?",
    "choices": [
      "10 or more",
      "50 or more",
      "100 or more",
      "250 or more"
    ],
    "answer": 0,
    "explain": "The threshold is **10 or more** returns, counted by **aggregating all information return types together** rather than applying separately to each form. It used to be 250 per form type, which is why that figure appears in older material and makes the most tempting wrong answer."
  },
  {
    "id": "retire-1",
    "section": "retire",
    "topic": "SEP plan features",
    "difficulty": "easy",
    "q": "Which statement correctly describes contributions to a SEP-IRA?",
    "choices": [
      "Only the employer contributes; amounts vest immediately",
      "The employer must contribute at least 3% each year",
      "Employees age 50 or older may add catch-up amounts",
      "Employer contributions vest over a 5-year schedule"
    ],
    "answer": 0,
    "explain": "A SEP is funded entirely by employer contributions that are always 100% vested. Contributions are discretionary each year, and employees may not make elective deferrals or catch-up contributions."
  },
  {
    "id": "retire-18",
    "section": "retire",
    "topic": "Employer-funded plans",
    "difficulty": "easy",
    "q": "Which kind of retirement plan receives funds from the employer only?",
    "choices": [
      "SEP-IRA",
      "SIMPLE plan",
      "Roth 401(k)",
      "Roth IRA"
    ],
    "answer": 0,
    "explain": "A SEP is funded entirely by employer contributions — employees cannot make elective deferrals to one. A SIMPLE takes employee deferrals plus an employer match or nonelective contribution, a Roth 401(k) runs on employee deferrals, and a Roth IRA is funded by the individual."
  },
  {
    "id": "retire-19",
    "section": "retire",
    "topic": "Employee contributions to a SEP",
    "difficulty": "medium",
    "q": "Timothy is eligible for a SEP-IRA through his employer. How much may Timothy himself contribute to it?",
    "choices": [
      "Nothing — a SEP is funded by the employer only",
      "Up to 25% of his compensation",
      "Up to $23,500 as an elective deferral",
      "Up to half of what his employer contributes"
    ],
    "answer": 0,
    "explain": "A SEP takes **employer** money only; an employee makes no elective deferrals to one. The 25% and $70,000 figures are limits on what the *employer* may contribute for Timothy, and $23,500 is the 401(k) deferral limit, which has no SEP equivalent. If Timothy wants to defer his own pay, he needs a different plan — a SIMPLE or a 401(k)."
  },
  {
    "id": "retire-23",
    "section": "retire",
    "topic": "Employee SEP contribution amount",
    "difficulty": "medium",
    "q": "Lincoln is eligible for a SEP-IRA through his employer. How much may Lincoln himself contribute?",
    "choices": [
      "$0",
      "$7,000",
      "$23,500",
      "$70,000"
    ],
    "answer": 0,
    "explain": "An employee contributes **nothing** to a SEP — only the employer funds one. Every other figure here is a real limit from somewhere else: **$7,000** is the traditional IRA limit, **$23,500** the 401(k) elective deferral, and **$70,000** the most the *employer* may contribute for Lincoln. To defer his own pay he would need a SIMPLE or a 401(k)."
  },
  {
    "id": "retire-24",
    "section": "retire",
    "topic": "Plans allowing salary deferral",
    "difficulty": "medium",
    "q": "Which plan lets an employee defer their own salary into it?",
    "choices": [
      "A SIMPLE IRA",
      "A SEP-IRA",
      "A profit-sharing plan",
      "A defined benefit pension plan"
    ],
    "answer": 0,
    "explain": "A **SIMPLE IRA** takes employee elective deferrals, which the employer then matches or supplements with a nonelective contribution. A **SEP** is employer money only — no deferrals at all. A **profit-sharing** plan and a **defined benefit** pension are likewise funded entirely by the employer; the employee never elects to put wages into either. Among common employer plans, salary deferral means a SIMPLE or a 401(k)."
  },
  {
    "id": "retire-20",
    "section": "retire",
    "topic": "Pension plan startup credit",
    "difficulty": "medium",
    "q": "For an eligible employer with 1 to 50 employees, what portion of qualified pension plan startup costs may be taken as a credit for the plan's first three years?",
    "choices": [
      "100%, up to $5,000 per year",
      "50%, up to $5,000 per year",
      "25%, up to $2,500 per year",
      "10%, up to $1,000 per year"
    ],
    "answer": 0,
    "explain": "Employers with **1 to 50** employees may credit **100%** of qualified startup costs, capped at $5,000 a year for the plan's first three years. Employers with **51 to 100** employees stay at 50% — and 50% is also the rate that applied to everyone before the rules changed, which is what makes it the distractor to watch."
  },
  {
    "id": "retire-21",
    "section": "retire",
    "topic": "Key employee ownership test",
    "difficulty": "medium",
    "q": "What ownership percentage makes a shareholder automatically a key employee, regardless of compensation?",
    "choices": [
      "5%",
      "1%",
      "2%",
      "10%"
    ],
    "answer": 0,
    "explain": "A **5% owner** is a key employee automatically — no compensation test at all. A **1% owner** qualifies only with annual compensation above **$150,000**, a figure that is notably **not** indexed for inflation. The third route in is being an officer paid above the indexed officer threshold. Key employee status drives **top-heavy** plan testing; keep it separate from highly compensated employee status, which governs nondiscrimination testing and uses its own indexed compensation figure."
  },
  {
    "id": "retire-22",
    "section": "retire",
    "topic": "Key employee ownership thresholds",
    "difficulty": "medium",
    "q": "A __% shareholder is automatically a key employee, while a __% shareholder must earn at least $150,000 a year to be one. Which pair fills the blanks?",
    "choices": [
      "5% and 1%",
      "1% and 5%",
      "2% and 1%",
      "10% and 5%"
    ],
    "answer": 0,
    "explain": "A **5%** owner is a key employee outright, with no compensation test. A **1%** owner needs compensation above **$150,000** — a threshold notable for **not** being indexed to inflation. Officers are the third route in, qualifying above the indexed officer compensation figure. All three categories feed **top-heavy** plan testing."
  },
  {
    "id": "retire-2",
    "section": "retire",
    "topic": "SEP contribution limits",
    "difficulty": "easy",
    "q": "An employer contributes to a SEP for an employee earning $60,000. Applying the 25% of compensation limit, what is the most the employer may contribute for her?",
    "choices": [
      "$6,000",
      "$12,000",
      "$15,000",
      "$18,000"
    ],
    "answer": 2,
    "explain": "The employer contribution for a participant is limited to 25% of that employee's compensation: 25% of $60,000 = $15,000."
  },
  {
    "id": "retire-17",
    "section": "retire",
    "topic": "SEP dollar cap",
    "difficulty": "medium",
    "q": "For 2025, an employer's contribution to an employee's SEP-IRA is limited to what amount?",
    "choices": [
      "The lesser of 25% of compensation or $70,000",
      "25% of compensation, with no dollar cap",
      "$7,000, the same as a traditional IRA",
      "The lesser of 100% of compensation or $23,500"
    ],
    "answer": 0,
    "explain": "SEP contributions are capped at the **lesser** of 25% of the employee's compensation or $70,000 for 2025. The $7,000 figure is the traditional IRA limit and $23,500 is the 401(k) elective deferral limit — neither applies to a SEP, which takes employer contributions only."
  },
  {
    "id": "retire-3",
    "section": "retire",
    "topic": "Plan participation rules",
    "difficulty": "medium",
    "q": "A SEP must generally cover an employee who is at least age 21, earned the minimum compensation, and worked for the employer during how many of the last five years?",
    "choices": [
      "1 year",
      "3 years",
      "4 years",
      "5 years"
    ],
    "answer": 1,
    "explain": "The standard SEP eligibility rule requires covering employees who are at least age 21, worked for the employer in at least 3 of the 5 preceding years, and met the minimum compensation for the year."
  },
  {
    "id": "retire-4",
    "section": "retire",
    "topic": "SEP establishment timing",
    "difficulty": "medium",
    "q": "A calendar-year employer wants to deduct a SEP contribution for last year but has no plan in place. By when must the SEP be established and funded?",
    "choices": [
      "By December 31 of that tax year",
      "By October 1 of that tax year",
      "By the return due date, including extensions",
      "By the end of the following calendar year"
    ],
    "answer": 2,
    "explain": "A SEP can be both adopted and funded after the year ends, as late as the due date of the return including extensions, which is why it is often set up at filing time."
  },
  {
    "id": "retire-5",
    "section": "retire",
    "topic": "Small employer plan limits",
    "difficulty": "easy",
    "q": "A SIMPLE IRA may generally be maintained only by an employer with no other qualified plan and no more than how many employees?",
    "choices": [
      "25 employees",
      "50 employees",
      "100 employees",
      "500 employees"
    ],
    "answer": 2,
    "explain": "SIMPLE IRA plans are limited to employers with 100 or fewer employees, and the employer generally may not maintain another qualified plan. Union employees are the exception: a separate plan covering only collectively bargained employees is allowed, and those employees may be excluded from the SIMPLE. All contributions are immediately vested."
  },
  {
    "id": "retire-6",
    "section": "retire",
    "topic": "Employer matching formulas",
    "difficulty": "easy",
    "q": "An employee earning $40,000 defers $2,000 into a SIMPLE IRA. The employer uses the standard dollar-for-dollar match of up to 3% of compensation. What must the employer contribute for her?",
    "choices": [
      "$2,000",
      "$1,200",
      "$800",
      "$400"
    ],
    "answer": 1,
    "explain": "The match is dollar-for-dollar but capped at 3% of compensation: 3% of $40,000 = $1,200, which is less than the $2,000 deferred. The employer's alternative is a 2% nonelective contribution."
  },
  {
    "id": "retire-7",
    "section": "retire",
    "topic": "Early distribution penalties",
    "difficulty": "medium",
    "q": "A 40-year-old employee takes an $8,000 SIMPLE IRA distribution 14 months after first participating, and no exception applies. What is the additional tax?",
    "choices": [
      "$800",
      "$1,600",
      "$2,000",
      "$2,400"
    ],
    "answer": 2,
    "explain": "A distribution taken within 2 years of first participating in a SIMPLE IRA carries a 25% additional tax rather than the usual 10%: 25% of $8,000 = $2,000."
  },
  {
    "id": "retire-8",
    "section": "retire",
    "topic": "SIMPLE plan timing",
    "difficulty": "medium",
    "q": "An existing employer wants a SIMPLE IRA to be effective for the current calendar year. By what date must the plan generally be established?",
    "choices": [
      "July 1 of that year",
      "December 31 of that year",
      "The due date of the return",
      "October 1 of that year"
    ],
    "answer": 3,
    "explain": "An existing employer generally must set up a SIMPLE IRA by October 1 of the year it takes effect, unlike a SEP, which may be adopted after the year ends."
  },
  {
    "id": "retire-9",
    "section": "retire",
    "topic": "One-participant plans",
    "difficulty": "easy",
    "q": "In a one-participant (solo) 401(k) covering only the business owner, in what capacity does the owner contribute?",
    "choices": [
      "Only as an employee making elective deferrals",
      "Only as an employer making profit-sharing amounts",
      "As a trustee, who may not contribute",
      "As both the employer and the employee"
    ],
    "answer": 3,
    "explain": "The owner wears two hats in a solo 401(k): making elective deferrals as the employee and employer contributions as the employer, which allows a larger total contribution."
  },
  {
    "id": "retire-10",
    "section": "retire",
    "topic": "Owner deduction reporting",
    "difficulty": "medium",
    "q": "A sole proprietor contributes $10,000 to a SEP for her employees and $5,000 for herself. Where does she deduct the $5,000 contributed for herself?",
    "choices": [
      "On Schedule C with the employees' contributions",
      "As an adjustment to income on Schedule 1 (Form 1040)",
      "As an itemized deduction on Schedule A",
      "It is not deductible at all"
    ],
    "answer": 1,
    "explain": "Contributions for employees are a Schedule C business expense, but a self-employed owner's own plan contribution is deducted as an adjustment to income on Form 1040 (Schedule 1)."
  },
  {
    "id": "retire-11",
    "section": "retire",
    "topic": "Plan classifications",
    "difficulty": "easy",
    "q": "Which feature identifies a defined benefit plan rather than a defined contribution plan?",
    "choices": [
      "It promises a specified benefit at retirement",
      "Each participant has a separate account balance",
      "The payout depends on investment performance",
      "Only employees may contribute to it"
    ],
    "answer": 0,
    "explain": "A defined benefit plan promises a determinable retirement benefit, with the employer bearing the funding risk. A defined contribution plan pays only what the participant's account has grown to."
  },
  {
    "id": "retire-12",
    "section": "retire",
    "topic": "Plan administration",
    "difficulty": "medium",
    "q": "What is the general purpose of the Form 5500 series?",
    "choices": [
      "Claiming the employer's deduction for contributions",
      "Reporting annual information about a benefit plan",
      "Reporting a participant's taxable distributions",
      "Requesting IRS approval before adopting a plan"
    ],
    "answer": 1,
    "explain": "The Form 5500 series is the annual information return reporting a retirement or benefit plan's financial condition and operations. It is not how deductions or distributions are reported."
  },
  {
    "id": "retire-13",
    "section": "retire",
    "topic": "Plan compliance rules",
    "difficulty": "medium",
    "q": "A business owner personally uses assets of the company's qualified retirement plan. What is the likely result?",
    "choices": [
      "Excise tax and possible loss of qualified status",
      "No effect if the funds are repaid with interest",
      "A business deduction for the amount used",
      "Only a late filing penalty on the annual return"
    ],
    "answer": 0,
    "explain": "Self-dealing with plan assets is a prohibited transaction that can trigger excise taxes on the disqualified person and, in serious cases, cause the plan to lose its qualified status."
  },
  {
    "id": "retire-14",
    "section": "retire",
    "topic": "Nonelective contributions",
    "difficulty": "medium",
    "q": "An employer chooses the nonelective contribution option for its SIMPLE IRA. What must it contribute for each eligible employee?",
    "choices": [
      "2% of compensation, whether or not the employee defers",
      "3% of compensation only if the employee defers",
      "A flat dollar amount set by the employer",
      "Nothing, if the employee makes no deferral"
    ],
    "answer": 0,
    "explain": "Under the nonelective option the employer contributes 2% of compensation for every eligible employee, even those who defer nothing. The 3% option is a match that requires an employee deferral."
  },
  {
    "id": "special-1",
    "section": "special",
    "topic": "Form 1041 filing",
    "difficulty": "medium",
    "q": "An estate has $1,000 of gross income for its tax year. Is the fiduciary required to file Form 1041?",
    "choices": [
      "No, estates do not file income tax returns",
      "Yes, estate gross income is $600 or more",
      "No, filing begins at $5,000 of income",
      "Only if a beneficiary requests a return"
    ],
    "answer": 1,
    "explain": "An estate must file Form 1041 when its annual gross income is $600 or more. With $1,000 of gross income, the fiduciary must file."
  },
  {
    "id": "special-20",
    "section": "special",
    "topic": "Fiduciary exemption amounts",
    "difficulty": "medium",
    "q": "What exemption amount may an estate deduct on Form 1041?",
    "choices": [
      "$600",
      "$300",
      "$100",
      "Estates get no exemption"
    ],
    "answer": 0,
    "explain": "An estate deducts a **$600** exemption. Trusts get less: **$300** for a simple trust required to distribute all its income currently, and **$100** for a complex trust. These fiduciary exemptions survived the suspension of personal exemptions for individuals, and the $600 figure is also the estate's gross income filing threshold — same number, two different rules."
  },
  {
    "id": "special-17",
    "section": "special",
    "topic": "Estate tax year election",
    "difficulty": "medium",
    "q": "Which tax year must an executor use when filing Form 1041 for a decedent's estate?",
    "choices": [
      "Either a calendar year or a fiscal year — the executor may choose",
      "A calendar year, always",
      "A fiscal year ending on the anniversary of the death",
      "The same tax year the decedent used"
    ],
    "answer": 0,
    "explain": "An estate may adopt a **calendar year or a fiscal year**. Its first tax year starts on the date of death and may end on the last day of any month, up to twelve months later. No separate election form is filed — the choice is made simply by filing the first Form 1041 on that year end, and it is locked in from then on."
  },
  {
    "id": "special-18",
    "section": "special",
    "topic": "Estate versus trust tax year",
    "difficulty": "medium",
    "q": "How do the tax year rules differ between an estate and a trust?",
    "choices": [
      "An estate may elect a fiscal year, but a trust generally must use a calendar year",
      "A trust may elect a fiscal year, but an estate must use a calendar year",
      "Both may freely elect a fiscal year",
      "Both are required to use a calendar year"
    ],
    "answer": 0,
    "explain": "Estates get the flexibility; trusts do not. A trust generally must use a calendar year, with narrow exceptions for tax-exempt and certain charitable trusts. Executors use the estate's fiscal year election to defer income, because a beneficiary reports K-1 income in **their** tax year in which the estate's year **ends**."
  },
  {
    "id": "special-19",
    "section": "special",
    "topic": "Estate estimated tax relief",
    "difficulty": "medium",
    "q": "For how long is a decedent's estate exempt from paying estimated tax?",
    "choices": [
      "2 years after the date of death",
      "1 year after the date of death",
      "3 years after the date of death",
      "Estates are never exempt from estimated tax"
    ],
    "answer": 0,
    "explain": "An estate owes no estimated tax for any tax year ending before the date **two years** after the decedent's death. The clock runs from the **date of death**, not from when the estate was opened or when it first had income. The same relief extends to a grantor trust that receives the residue of the estate under the will. Once the window closes, the estate makes quarterly payments like any other fiduciary."
  },
  {
    "id": "special-2",
    "section": "special",
    "topic": "DNI concept",
    "difficulty": "medium",
    "q": "In fiduciary income taxation, what is one primary function of distributable net income (DNI)?",
    "choices": [
      "It sets the trust's personal exemption",
      "It fixes the trustee's allowable fee",
      "It determines estate tax owed at death",
      "It limits income taxable to beneficiaries"
    ],
    "answer": 3,
    "explain": "DNI caps the amount beneficiaries must include in income from distributions and determines its character; it also limits the entity's distribution deduction."
  },
  {
    "id": "special-22",
    "section": "special",
    "topic": "Ceiling on beneficiary income",
    "difficulty": "medium",
    "q": "What is the maximum amount of a trust distribution on which the beneficiaries can be taxed?",
    "choices": [
      "Distributable net income",
      "The trust's fiduciary accounting income",
      "The trust's taxable income before the distribution deduction",
      "The full amount actually distributed"
    ],
    "answer": 0,
    "explain": "**Distributable net income** is the ceiling. Beneficiaries report the lesser of what they actually received or DNI, and the trust's distribution deduction is capped at the same figure — so distributing more than DNI shifts no additional income out of the trust. Do not confuse DNI with **fiduciary accounting income**, which is a trust-law concept governing what the trustee may distribute, not a tax ceiling."
  },
  {
    "id": "special-23",
    "section": "special",
    "topic": "Church UBIT filing",
    "difficulty": "medium",
    "q": "A church runs a commercial parking garage that produces $25,000 of gross unrelated business income for the year. What must the church file?",
    "choices": [
      "Form 990-T",
      "Nothing — churches are exempt from all IRS filings",
      "Form 990",
      "Form 1023, then Form 990-T once approved"
    ],
    "answer": 0,
    "explain": "The church exemptions cover applying for status (no Form 1023 needed) and the annual information return (no Form 990) — they never cover unrelated business activity. At **$1,000 or more** of gross UBI, a church files **Form 990-T** and pays the tax like any other exempt organization."
  },
  {
    "id": "special-3",
    "section": "special",
    "topic": "DNI limit computation",
    "difficulty": "medium",
    "q": "A complex trust has DNI of $10,000 and distributes $15,000 to its beneficiaries. What is its maximum income distribution deduction?",
    "choices": [
      "$10,000",
      "$15,000",
      "$5,000",
      "$0"
    ],
    "answer": 0,
    "explain": "The distribution deduction cannot exceed DNI. Even though $15,000 was distributed, the deduction is capped at the $10,000 of distributable net income."
  },
  {
    "id": "special-21",
    "section": "special",
    "topic": "Tax-exempt interest in DNI",
    "difficulty": "medium",
    "q": "Does the calculation of distributable net income (DNI) include tax-exempt interest?",
    "choices": [
      "Yes — it is included, reduced by the expenses allocable to it",
      "No — DNI is built only from taxable income",
      "Only if the fiduciary distributes all of the income currently",
      "Only for estates, not for trusts"
    ],
    "answer": 0,
    "explain": "Tax-exempt interest **is** in DNI, net of the expenses allocable to it. That matters because DNI both caps the distribution deduction and fixes the **character** of what beneficiaries receive — so a proportionate slice of the tax-exempt interest carries out to the beneficiary and stays tax exempt in their hands. The distribution deduction itself is then reduced by that tax-exempt portion, since the fiduciary never paid tax on it in the first place."
  },
  {
    "id": "special-4",
    "section": "special",
    "topic": "Simple vs complex",
    "difficulty": "easy",
    "q": "Which characteristic identifies a trust as a simple trust for income tax purposes?",
    "choices": [
      "It may accumulate income for later years",
      "It makes charitable contributions",
      "It must distribute all income currently",
      "It distributes trust principal each year"
    ],
    "answer": 2,
    "explain": "A simple trust must distribute all income currently, makes no charitable contributions, and distributes no principal. A trust that may accumulate income is a complex trust."
  },
  {
    "id": "special-5",
    "section": "special",
    "topic": "Beneficiary taxation",
    "difficulty": "easy",
    "q": "A simple trust has $6,000 of DNI and distributes all of its income to its sole beneficiary as required. How much does the beneficiary report as income?",
    "choices": [
      "$0",
      "$6,000",
      "$3,000",
      "Only amounts above $600"
    ],
    "answer": 1,
    "explain": "Distributed income is taxed to the beneficiary, not the trust. The trust deducts the distribution and the beneficiary reports the $6,000 with the same character it had in the trust."
  },
  {
    "id": "special-6",
    "section": "special",
    "topic": "Estate return types",
    "difficulty": "medium",
    "q": "How does Form 1041 differ from Form 706 for a decedent's estate?",
    "choices": [
      "Form 1041 taxes income the estate earns after death",
      "Form 1041 values assets transferred at death",
      "Form 1041 reports the decedent's final wages",
      "Form 1041 reports lifetime taxable gifts"
    ],
    "answer": 0,
    "explain": "Form 1041 is the fiduciary income tax return for income the estate earns during administration. Form 706, the estate tax return, taxes the transfer of the decedent's assets at death."
  },
  {
    "id": "special-7",
    "section": "special",
    "topic": "Exemption application",
    "difficulty": "easy",
    "q": "Which form does an organization generally file to request IRS recognition of section 501(c)(3) tax-exempt status?",
    "choices": [
      "Form 990",
      "Form 1024",
      "Form 990-T",
      "Form 1023"
    ],
    "answer": 3,
    "explain": "Form 1023 (or the streamlined 1023-EZ for small organizations) is the application for recognition of exemption under section 501(c)(3). Form 1024 covers most other exemption categories."
  },
  {
    "id": "special-8",
    "section": "special",
    "topic": "Losing exempt status",
    "difficulty": "easy",
    "q": "Which activity can cause a 501(c)(3) organization to lose its tax-exempt status?",
    "choices": [
      "Paying reasonable salaries to its staff",
      "Receiving unusually large donations",
      "Allowing earnings to benefit private insiders",
      "Holding a diversified investment portfolio"
    ],
    "answer": 2,
    "explain": "No part of a 501(c)(3)'s net earnings may inure to the benefit of private shareholders or insiders. Private inurement can cost the exemption; reasonable compensation is allowed."
  },
  {
    "id": "special-9",
    "section": "special",
    "topic": "Exempt org business income",
    "difficulty": "medium",
    "q": "A tax-exempt organization regularly carries on a trade or business unrelated to its exempt purpose. What is the general tax result?",
    "choices": [
      "Its exemption is automatically revoked",
      "The net income is subject to UBIT",
      "All of its income becomes taxable",
      "Donor contributions become nondeductible"
    ],
    "answer": 1,
    "explain": "Income from a trade or business regularly carried on that is not substantially related to the exempt purpose is subject to unrelated business income tax, but exemption itself is not automatically lost."
  },
  {
    "id": "special-10",
    "section": "special",
    "topic": "Unrelated income reporting",
    "difficulty": "easy",
    "q": "On which form does an exempt organization report and pay tax on its unrelated business taxable income?",
    "choices": [
      "Form 990-T",
      "Form 990-N",
      "Form 1120",
      "Form 1023"
    ],
    "answer": 0,
    "explain": "Form 990-T is used to report unrelated business taxable income and compute the tax due; it is filed in addition to the organization's annual information return."
  },
  {
    "id": "special-15",
    "section": "special",
    "topic": "Form 990-T purpose",
    "difficulty": "easy",
    "q": "Form 990-T is used to report what?",
    "choices": [
      "Unrelated business income and the tax due on it",
      "The organization's annual program results and governance",
      "Contributions received from substantial donors",
      "Payroll taxes withheld from employees"
    ],
    "answer": 0,
    "explain": "Form 990-T is the exempt organization's income tax return, required once gross unrelated business income reaches $1,000. It reports income from a trade or business regularly carried on that is not substantially related to the exempt purpose, and computes the tax. It is filed in addition to the Form 990 information return, which is where program results and governance are reported."
  },
  {
    "id": "special-11",
    "section": "special",
    "topic": "Form 990 tiers",
    "difficulty": "easy",
    "q": "What generally determines which return in the Form 990 series an exempt organization must file each year?",
    "choices": [
      "The age of the organization",
      "The number of board members",
      "Its state of incorporation",
      "Its annual gross receipts, total assets, and type of organization"
    ],
    "answer": 3,
    "explain": "The Form 990 series is tiered by size: the smallest organizations file the Form 990-N e-Postcard, mid-size organizations may file Form 990-EZ, and larger ones file the full Form 990. Type matters too: private foundations file Form 990-PF whatever their size, and churches are exempt from the annual filing requirement altogether."
  },
  {
    "id": "special-12",
    "section": "special",
    "topic": "Farm income reporting",
    "difficulty": "easy",
    "q": "Where does a self-employed farmer report farm income and expenses on an individual return?",
    "choices": [
      "Schedule C",
      "Schedule E",
      "Schedule F",
      "Form 4835"
    ],
    "answer": 2,
    "explain": "Self-employed farmers report farming income and expenses on Schedule F (Form 1040). Form 4835 is for landowners receiving crop shares who do not materially participate."
  },
  {
    "id": "special-13",
    "section": "special",
    "topic": "Farm income averaging",
    "difficulty": "medium",
    "q": "A farmer elects farm income averaging on Schedule J. Over how many prior years is the elected farm income spread?",
    "choices": [
      "Three",
      "Two",
      "Five",
      "Ten"
    ],
    "answer": 0,
    "explain": "Farm income averaging lets a farmer or fisherman compute tax by spreading elected farm income equally over the three prior base years, which can lower tax when current income spikes."
  },
  {
    "id": "special-14",
    "section": "special",
    "topic": "Hobby loss rules",
    "difficulty": "medium",
    "q": "A taxpayer's hobby activity produces $3,000 of income and $4,000 of expenses in 2025. What is the general federal tax result?",
    "choices": [
      "A $1,000 deductible loss",
      "$3,000 of income with no expense deduction",
      "No income because expenses exceed income",
      "$3,000 of income less $3,000 of expenses"
    ],
    "answer": 1,
    "explain": "Under section 183, income from an activity not engaged in for profit is fully taxable, but hobby expenses are generally nondeductible for individuals, so no loss is allowed."
  },
  {
    "id": "ccorp-15",
    "section": "ccorp",
    "topic": "Distribution ordering",
    "difficulty": "easy",
    "q": "In what order is a distribution from a C corporation taxed to a shareholder?",
    "choices": [
      "Return of capital, then dividend, then capital gain",
      "Dividend to the extent of earnings and profits, then return of capital, then capital gain",
      "Capital gain first, then dividend",
      "Always a dividend, regardless of earnings and profits"
    ],
    "answer": 1,
    "explain": "The order is fixed: a dividend to the extent of earnings and profits, then a nontaxable return of capital that reduces stock basis, then capital gain once basis reaches zero."
  },
  {
    "id": "ccorp-27",
    "section": "ccorp",
    "topic": "Current versus accumulated E&P",
    "difficulty": "medium",
    "q": "A C corporation has both current and accumulated earnings and profits. A distribution is treated as coming out of which first?",
    "choices": [
      "Current E&P, then accumulated E&P",
      "Accumulated E&P, then current E&P",
      "Whichever the corporation elects",
      "Pro rata from both at once"
    ],
    "answer": 0,
    "explain": "**Current E&P is deemed distributed first**, then accumulated. Current E&P is measured at the **close of the tax year**, not at the moment of the distribution, and is spread pro rata across every distribution made during the year; accumulated E&P is then applied in chronological order. So a distribution can be a taxable dividend out of current E&P even when the corporation is carrying an accumulated deficit."
  },
  {
    "id": "ccorp-16",
    "section": "ccorp",
    "topic": "Nondividend distributions",
    "difficulty": "medium",
    "q": "A C corporation with no current or accumulated earnings and profits distributes $10,000 to a shareholder whose stock basis is $15,000. How is it treated?",
    "choices": [
      "$10,000 of ordinary dividend income",
      "A nontaxable return of capital that reduces basis to $5,000",
      "$10,000 of capital gain",
      "Tax free, with no change to stock basis"
    ],
    "answer": 1,
    "explain": "A distribution is a dividend only to the extent of earnings and profits. With no E&P it is a return of capital that reduces basis. Only after basis reaches zero does a further distribution become capital gain."
  },
  {
    "id": "ccorp-17",
    "section": "ccorp",
    "topic": "E&P versus retained earnings",
    "difficulty": "medium",
    "q": "A C corporation has $200,000 of book retained earnings but no earnings and profits. It distributes $20,000 to its sole shareholder. The distribution is:",
    "choices": [
      "A dividend, because retained earnings are positive",
      "Not a dividend, because dividend treatment depends on earnings and profits rather than book retained earnings",
      "Deductible by the corporation",
      "Always tax free to the shareholder"
    ],
    "answer": 1,
    "explain": "Earnings and profits is a separate tax computation from book retained earnings. Dividend treatment turns on E&P alone, so a corporation can show healthy retained earnings and still make a nondividend distribution."
  },
  {
    "id": "ccorp-25",
    "section": "ccorp",
    "topic": "Accumulated earnings tax",
    "difficulty": "medium",
    "q": "A corporation that lets earnings accumulate beyond the reasonable needs of the business may be subject to the accumulated earnings tax at what rate?",
    "choices": [
      "20%",
      "21%",
      "10%",
      "35%"
    ],
    "answer": 0,
    "explain": "The accumulated earnings tax is **20%** of accumulated taxable income — matching the top rate on qualified dividends, since the whole point is to discourage hoarding earnings instead of paying dividends the shareholders would be taxed on. It is a penalty **on top of** the regular 21% corporate income tax, and every corporation gets an accumulated earnings credit of at least $250,000 ($150,000 for certain personal service corporations)."
  },
  {
    "id": "ccorp-18",
    "section": "ccorp",
    "topic": "Computing an NOL",
    "difficulty": "medium",
    "q": "When a corporation figures its current-year net operating loss, may it deduct NOL carryovers from prior years?",
    "choices": [
      "Yes, in full",
      "Yes, but only against the corporation's capital gains",
      "No, prior-year NOLs are left out of the current-year NOL computation",
      "Only if the corporation has earnings and profits"
    ],
    "answer": 2,
    "explain": "The NOL deduction is not allowed in figuring an NOL, otherwise one loss year would compound into every later year. Prior-year NOLs instead offset taxable income in a profitable year — that is where the 80%-of-taxable-income limit applies, not here."
  },
  {
    "id": "ccorp-19",
    "section": "ccorp",
    "topic": "Dividends received deduction",
    "difficulty": "medium",
    "q": "A corporation has $40,000 of taxable income before its dividends received deduction. The full 50% deduction would be $50,000 — taking it all would wipe out income and leave a $10,000 net operating loss. How much may it deduct?",
    "choices": [
      "$50,000 — the full deduction; creating an NOL switches the limit off",
      "$20,000 — the limit caps it at 50% of taxable income",
      "$40,000 — the deduction stops when income reaches zero",
      "$25,000 — the deduction is cut in half"
    ],
    "answer": 0,
    "explain": "No NOL needs to exist beforehand — the test is what taking the **full** deduction would do. Here the full $50,000 **creates** a $10,000 NOL, so the taxable income limit is off and all $50,000 is allowed. If the full deduction had left income standing, the limit **would** apply and cap it at 50% of taxable income — that is the companion case."
  },
  {
    "id": "ccorp-32",
    "section": "ccorp",
    "topic": "DRD limit when income remains",
    "difficulty": "medium",
    "q": "A corporation has $60,000 of taxable income before its dividends received deduction. The full 50% deduction would be $50,000, leaving $10,000 of income. How much may it deduct?",
    "choices": [
      "$30,000 — the limit caps it at 50% of taxable income",
      "$50,000 — the full deduction",
      "$10,000 — the income remaining",
      "$60,000 — all of taxable income"
    ],
    "answer": 0,
    "explain": "Here the full deduction does **not** create a net operating loss — $10,000 of income survives it — so the taxable income limit **does** apply and caps the deduction at 50% of $60,000 = **$30,000**. Contrast the other case: if the full deduction had pushed the corporation into a loss, the limit would switch off entirely and all $50,000 would be allowed."
  },
  {
    "id": "ccorp-33",
    "section": "ccorp",
    "topic": "Schedule L purpose",
    "difficulty": "easy",
    "q": "On a corporate return, which schedule reports the balance sheet per books?",
    "choices": [
      "Schedule L",
      "Schedule M-1",
      "Schedule M-2",
      "Schedule K"
    ],
    "answer": 0,
    "explain": "**Schedule L** is the balance sheet per books, showing assets, liabilities and equity at the start and end of the year. Schedule M-1 reconciles book income to tax income, Schedule M-2 analyzes retained earnings (AAA on an 1120-S), and Schedule K summarizes pass-through items."
  },
  {
    "id": "retire-15",
    "section": "retire",
    "topic": "Prohibited transaction exemptions",
    "difficulty": "medium",
    "q": "Which of these is exempt from the retirement plan prohibited transaction rules?",
    "choices": [
      "A fiduciary selling property to the plan",
      "The plan lending money to the employer",
      "A disqualified person receiving benefits he is entitled to as a plan participant",
      "The plan buying the employer's building above market value"
    ],
    "answer": 2,
    "explain": "Collecting benefits you have earned as a participant is not self-dealing. The rules stop insiders from using plan assets for their own advantage, not from receiving what the plan already owes them."
  },
  {
    "id": "retire-16",
    "section": "retire",
    "topic": "Disqualified persons",
    "difficulty": "medium",
    "q": "Which of the following is NOT a disqualified person for retirement plan prohibited transaction purposes?",
    "choices": [
      "A fiduciary of the plan",
      "A person providing services to the plan",
      "The employer whose employees are covered by the plan",
      "A rank-and-file participant with no other connection to the plan"
    ],
    "answer": 3,
    "explain": "Disqualified persons are plan insiders: fiduciaries, service providers, the covered employer, 50 percent owners and their family members. An ordinary participant with no other role is not one."
  },
  {
    "id": "prop-15",
    "section": "prop",
    "topic": "Leaseholds in like-kind exchanges",
    "difficulty": "medium",
    "q": "A taxpayer exchanges real estate she owns for a lease on other real estate with 30 years remaining. Is this a like-kind exchange?",
    "choices": [
      "No, a lease is never like-kind to owned real estate",
      "Yes, a leasehold with 30 years or more remaining is like-kind to owned real property",
      "Only if the lease runs less than 10 years",
      "Only if both properties are in the same state"
    ],
    "answer": 1,
    "explain": "A leasehold with 30 years or more left to run is treated as like-kind to owned real property, and renewal options count toward the 30 years. A shorter lease does not qualify."
  },
  {
    "id": "pship-15",
    "section": "pship",
    "topic": "Family partnership income",
    "difficulty": "medium",
    "q": "A parent gives a child part of a partnership interest where capital is a material income-producing factor. The parent works for the partnership but takes no pay. The child's share is figured:",
    "choices": [
      "Straight from the partnership agreement",
      "After reducing partnership income by reasonable compensation for the parent's services",
      "As zero, because the interest was a gift",
      "Using the parent's full distributive share"
    ],
    "answer": 1,
    "explain": "Reasonable compensation for the donor's services comes off the top and is assigned to the donor. Only what is left is split by capital, which stops a parent from shifting earnings to a child by working for free."
  },
  {
    "id": "pship-16",
    "section": "pship",
    "topic": "Family members as partners",
    "difficulty": "medium",
    "q": "Capital is not a material income-producing factor in a family business. A relative who receives a gifted partnership interest is recognized as a partner only if he or she:",
    "choices": [
      "Owns at least 50 percent of the partnership",
      "Actually provides services or capital to the business",
      "Is at least 21 years old",
      "Reports the income on a separate return"
    ],
    "answer": 1,
    "explain": "When income comes from work rather than capital, a gifted interest by itself is not enough. The family member has to genuinely contribute services or capital to be treated as a partner."
  },
  {
    "id": "prop-16",
    "section": "prop",
    "topic": "Property eligible for like-kind treatment",
    "difficulty": "easy",
    "q": "For exchanges completed after 2017, like-kind exchange deferral applies to:",
    "choices": [
      "Real property and business equipment",
      "Real property only, if it is not held primarily for sale",
      "Any property held for business or investment",
      "Personal residences only"
    ],
    "answer": 1,
    "explain": "The real property must be held for productive use in a trade or business or for investment, and not primarily for sale — so a personal residence does not qualify, and neither does dealer inventory. Depreciable tangible personal property such as equipment can no longer be deferred at all."
  },
  {
    "id": "prop-17",
    "section": "prop",
    "topic": "Boot in like-kind exchanges",
    "difficulty": "medium",
    "q": "In a like-kind exchange, a taxpayer realizes a $40,000 gain and receives the replacement property plus $15,000 cash. How much gain is recognized?",
    "choices": [
      "$0",
      "$15,000",
      "$40,000",
      "$25,000"
    ],
    "answer": 1,
    "explain": "Recognized gain is the smaller of the realized gain or the boot received. The $15,000 cash boot is less than the $40,000 realized gain, so $15,000 is taxed now and the rest stays deferred."
  },
  {
    "id": "prop-18",
    "section": "prop",
    "topic": "Losses in like-kind exchanges",
    "difficulty": "easy",
    "q": "A taxpayer realizes a loss on a like-kind exchange of business real estate. How much of the loss is recognized?",
    "choices": [
      "None — losses on like-kind exchanges are not recognized",
      "The full loss",
      "The loss up to any boot received",
      "Half the loss"
    ],
    "answer": 0,
    "explain": "No loss is recognized on the like-kind property in a 1031 exchange, even when boot is received. The disallowed loss is preserved in the basis of the replacement property."
  },
  {
    "id": "depr-15",
    "section": "depr",
    "topic": "Half-year convention scope",
    "difficulty": "easy",
    "q": "The half-year convention applies to which type of property?",
    "choices": [
      "Tangible personal property such as equipment and furniture",
      "Residential rental buildings",
      "Nonresidential real property",
      "Land"
    ],
    "answer": 0,
    "explain": "The half-year convention is the default for tangible personal property, treating it as placed in service at midyear no matter the actual purchase date. Real property uses the mid-month convention instead, and land is never depreciated."
  },
  {
    "id": "depr-16",
    "section": "depr",
    "topic": "Section 179 pass-through limits",
    "difficulty": "medium",
    "q": "Lincoln receives Section 179 pass-throughs from an S corporation and from two partnerships. In applying the annual Section 179 dollar limit, how are these amounts treated?",
    "choices": [
      "Combined from all sources under Lincoln's single annual dollar limit",
      "Each entity's amount is tested against its own separate limit on Lincoln's return",
      "Only the largest single pass-through counts toward the limit",
      "Pass-through amounts are exempt from the owner-level dollar limit"
    ],
    "answer": 0,
    "explain": "The Section 179 dollar limit applies twice — at each entity, then again at the owner. Lincoln combines Section 179 from every source (S corps, partnerships, sole proprietorships) under one annual dollar limit, and the deduction is further capped by his aggregate active business income, with any excess carried forward."
  },
  {
    "id": "depr-17",
    "section": "depr",
    "topic": "Depreciable property requirements",
    "difficulty": "easy",
    "q": "A taxpayer owns a piece of property. Which of the following is NOT required for the taxpayer to depreciate it?",
    "choices": [
      "The property must have been acquired brand new",
      "It is used in a business or income-producing activity",
      "It has a determinable useful life",
      "It is expected to last more than one year"
    ],
    "answer": 0,
    "explain": "Used property is just as depreciable as new — there is no new-condition requirement. The real tests, beyond ownership: used in a **business or income-producing activity**, a **determinable useful life**, and expected to last **more than one year**. That is why land never qualifies — no determinable life."
  },
  {
    "id": "prop-19",
    "section": "prop",
    "topic": "Dealer property and like-kind exchanges",
    "difficulty": "medium",
    "q": "A real estate dealer wants to trade a lot from her inventory for other land. Does the lot qualify for like-kind exchange treatment?",
    "choices": [
      "No, real property held primarily for sale is excluded",
      "Yes, all real property qualifies",
      "Yes, if the property she receives is also inventory",
      "Only if she has held the lot for more than one year"
    ],
    "answer": 0,
    "explain": "Real property held primarily for sale is excluded, so a dealer's inventory never qualifies no matter how long it is held. The property must be held for productive use in a trade or business or for investment, and there is no statutory holding period that fixes dealer intent."
  }
]
