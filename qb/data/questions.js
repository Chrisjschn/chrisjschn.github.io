/* QB Blitz question bank -- bookkeeping and QuickBooks Online, 13 sections, 208 questions.
   Original content written for interview prep and on-the-job drilling:
   fundamentals, QBO mechanics, cleanup diagnostics, and interview scenarios.
   Choice order is shuffled at display time; 'answer' is the correct index.
   QuickBooks is a trademark of Intuit Inc.; this app is not affiliated with
   or endorsed by Intuit. Screens and features described are QBO conventions.
   FAR_SECTIONS/FAR_QUESTIONS global names keep the engine identical to FAR Blitz. */

var FAR_SECTIONS = [
  {
    "id": "basics",
    "name": "Debits, Credits & Fundamentals",
    "short": "Fundamentals",
    "emoji": "🧮"
  },
  {
    "id": "general",
    "name": "QuickBooks Product Knowledge",
    "short": "QB Product",
    "emoji": "💼"
  },
  {
    "id": "coa",
    "name": "Chart of Accounts",
    "short": "Chart of Accts",
    "emoji": "🗂️"
  },
  {
    "id": "banking",
    "name": "Bank Feeds & Matching",
    "short": "Bank Feeds",
    "emoji": "🏦"
  },
  {
    "id": "recon",
    "name": "Bank Reconciliation",
    "short": "Reconciliation",
    "emoji": "✅"
  },
  {
    "id": "ar",
    "name": "Customers & A/R Workflow",
    "short": "A/R",
    "emoji": "📨"
  },
  {
    "id": "ap",
    "name": "Vendors, A/P & 1099s",
    "short": "A/P",
    "emoji": "📬"
  },
  {
    "id": "cleanup",
    "name": "Cleanup & Diagnostics",
    "short": "Cleanup",
    "emoji": "🧹"
  },
  {
    "id": "je",
    "name": "Journal Entries & Adjustments",
    "short": "Adjustments",
    "emoji": "📓"
  },
  {
    "id": "reports",
    "name": "Reports & Financial Statements",
    "short": "Reports",
    "emoji": "📈"
  },
  {
    "id": "taxpay",
    "name": "Sales Tax, Payroll & 1099 Basics",
    "short": "Tax & Payroll",
    "emoji": "🏛️"
  },
  {
    "id": "hygiene",
    "name": "Workflow Hygiene & the Close",
    "short": "Hygiene",
    "emoji": "🔐"
  },
  {
    "id": "scenario",
    "name": "Interview Scenarios",
    "short": "Interview",
    "emoji": "🎤"
  }
];

var FAR_QUESTIONS = [
  {
    "id": "basics-1",
    "section": "basics",
    "topic": "The accounting equation",
    "difficulty": "easy",
    "q": "A company buys a $2,000 computer with cash. What happens to the accounting equation?",
    "choices": [
      "Assets increase and liabilities increase",
      "One asset increases and another decreases; the equation stays balanced",
      "Assets increase and equity increases",
      "Nothing is recorded until the computer is used"
    ],
    "answer": 1,
    "explain": "Cash goes down $2,000 and equipment goes up $2,000 — a swap inside assets. Assets = Liabilities + Equity stays balanced without either side changing in total."
  },
  {
    "id": "basics-2",
    "section": "basics",
    "topic": "Normal balances",
    "difficulty": "easy",
    "q": "Which account normally carries a credit balance?",
    "choices": [
      "Accounts receivable",
      "Rent expense",
      "Accounts payable",
      "Office equipment"
    ],
    "answer": 2,
    "explain": "Liabilities, equity and income are credit-normal; assets and expenses are debit-normal. A payable is money owed to vendors — a liability, so credit-normal."
  },
  {
    "id": "basics-3",
    "section": "basics",
    "topic": "Debits and credits",
    "difficulty": "easy",
    "q": "Recording a cash sale requires which entry?",
    "choices": [
      "Debit cash, credit income",
      "Credit cash, debit income",
      "Debit cash, debit income",
      "Credit cash, credit accounts receivable"
    ],
    "answer": 0,
    "explain": "Cash (an asset) increases with a debit; income increases with a credit. Every entry needs equal debits and credits — two debits or two credits can never balance."
  },
  {
    "id": "basics-4",
    "section": "basics",
    "topic": "Expense entries",
    "difficulty": "easy",
    "q": "Paying the office rent with a check is recorded as",
    "choices": [
      "debit rent expense, credit cash",
      "debit cash, credit rent expense",
      "debit rent expense, credit accounts payable",
      "debit owner's draw, credit cash"
    ],
    "answer": 0,
    "explain": "The expense increases with a debit and cash decreases with a credit. Crediting a payable would be right only if the rent were billed now and paid later."
  },
  {
    "id": "basics-5",
    "section": "basics",
    "topic": "Cash vs accrual",
    "difficulty": "medium",
    "q": "Under the accrual basis, when is revenue recorded?",
    "choices": [
      "When the customer's payment is received and deposited",
      "When the work is performed or invoiced, even if cash has not arrived",
      "At month end, in one summary entry combining all completed jobs",
      "When the deposit clears the bank and appears in the feed"
    ],
    "answer": 1,
    "explain": "Accrual books income when it is earned and expenses when they are incurred. Cash basis waits for money to move — the difference shows up mostly in A/R, A/P and timing around period ends."
  },
  {
    "id": "basics-6",
    "section": "basics",
    "topic": "Double-entry integrity",
    "difficulty": "easy",
    "q": "Why must total debits always equal total credits?",
    "choices": [
      "Because federal tax law requires balanced entries on every return",
      "Because every transaction affects at least two accounts equally",
      "Because banks reject deposits that are not paired with a withdrawal",
      "Because the software rounds every amount to two decimal places"
    ],
    "answer": 1,
    "explain": "Double entry records both sides of every event — what was received and where it came from. If debits and credits do not match, the books literally do not balance."
  },
  {
    "id": "basics-7",
    "section": "basics",
    "topic": "Assets vs expenses",
    "difficulty": "medium",
    "q": "A landscaping business buys a $3,500 mower expected to last five years. How should it be recorded?",
    "choices": [
      "As an expense, since it was paid in full",
      "As a fixed asset, then depreciated over its useful life",
      "As inventory until it is first used",
      "As owner's equity, since the owner chose the purchase"
    ],
    "answer": 1,
    "explain": "Items with years of useful life above the company's capitalization threshold are fixed assets, expensed gradually through depreciation. Small purchases below the threshold can be expensed immediately."
  },
  {
    "id": "basics-8",
    "section": "basics",
    "topic": "Owner draws",
    "difficulty": "medium",
    "q": "The owner of a sole proprietorship takes $2,000 from the business account for personal use. This is recorded as",
    "choices": [
      "wage expense",
      "owner's draw, reducing equity",
      "a business expense under miscellaneous",
      "a loan receivable from the owner"
    ],
    "answer": 1,
    "explain": "An owner draw is a distribution of equity, not an expense — it never hits the P&L. Recording draws as expenses understates profit, a classic cleanup find."
  },
  {
    "id": "basics-9",
    "section": "basics",
    "topic": "Liability vs income",
    "difficulty": "medium",
    "q": "A client pays a $1,200 retainer for work that has not started. What is it on the books?",
    "choices": [
      "Income, because the cash was received",
      "A liability (unearned revenue) until the work is performed",
      "A reduction of accounts receivable",
      "Owner's equity contribution"
    ],
    "answer": 1,
    "explain": "Money received before it is earned is owed back in work or refund — a liability. As the work is done, it moves from unearned revenue to income."
  },
  {
    "id": "basics-10",
    "section": "basics",
    "topic": "The five account types",
    "difficulty": "easy",
    "q": "Which list names the five basic account types?",
    "choices": [
      "Assets, liabilities, equity, income, expenses",
      "Cash, checking, savings, credit card, loans",
      "Debits, credits, journals, ledgers, reports",
      "Customers, vendors, employees, banks, taxes"
    ],
    "answer": 0,
    "explain": "Every account rolls up to one of the five types. The balance sheet holds assets, liabilities and equity; the P&L holds income and expenses."
  },
  {
    "id": "basics-11",
    "section": "basics",
    "topic": "P&L vs balance sheet",
    "difficulty": "easy",
    "q": "Which account appears on the balance sheet rather than the profit and loss?",
    "choices": [
      "Utilities expense",
      "Sales income",
      "Accounts receivable",
      "Cost of goods sold"
    ],
    "answer": 2,
    "explain": "The balance sheet shows what the company owns and owes at a point in time — receivables included. Income and expense accounts flow through the P&L for a period."
  },
  {
    "id": "basics-12",
    "section": "basics",
    "topic": "Contra accounts",
    "difficulty": "medium",
    "q": "Accumulated depreciation is best described as",
    "choices": [
      "an expense on the profit and loss",
      "a contra-asset that reduces the book value of fixed assets",
      "a liability owed to the equipment vendor",
      "a cash reserve for replacing equipment"
    ],
    "answer": 1,
    "explain": "Accumulated depreciation sits on the balance sheet against the asset's cost, showing net book value. The current-period charge is depreciation expense on the P&L; no cash is set aside anywhere."
  },
  {
    "id": "basics-13",
    "section": "basics",
    "topic": "Cost of goods sold",
    "difficulty": "medium",
    "q": "What belongs in cost of goods sold rather than operating expenses?",
    "choices": [
      "The materials and direct labor that go into what the company sells",
      "Office rent and the administrative staff's salaries",
      "Advertising, marketing and business development costs",
      "Interest and fees on the business credit card accounts"
    ],
    "answer": 0,
    "explain": "COGS captures costs that scale directly with delivering the product or service. Keeping it separate from overhead is what makes gross profit and margins meaningful."
  },
  {
    "id": "basics-14",
    "section": "basics",
    "topic": "Trial balance",
    "difficulty": "medium",
    "q": "What does a trial balance show?",
    "choices": [
      "Every account's balance, proving total debits equal total credits",
      "Only the accounts that contain errors needing correction",
      "The company's net profit or loss for the current year",
      "The bank's record of the account balance at the statement date"
    ],
    "answer": 0,
    "explain": "The trial balance lists all accounts and their balances; total debits must equal total credits. It proves arithmetic balance — not that every amount is in the right account."
  },
  {
    "id": "basics-15",
    "section": "basics",
    "topic": "Recording credit purchases",
    "difficulty": "medium",
    "q": "A business receives $500 of supplies with the bill due in 30 days. The entry today is",
    "choices": [
      "debit supplies expense, credit accounts payable",
      "debit accounts payable, credit supplies expense",
      "no entry until the bill is paid",
      "debit supplies expense, credit cash"
    ],
    "answer": 0,
    "explain": "Accrual books recognize the expense and the obligation when the goods arrive. Paying later clears the payable; waiting for payment to record anything is cash-basis thinking."
  },
  {
    "id": "basics-16",
    "section": "basics",
    "topic": "Equity components",
    "difficulty": "medium",
    "q": "Which of these changes equity directly, without flowing through the profit and loss?",
    "choices": [
      "A cash sale collected from a customer at the register",
      "An owner contribution of personal funds into the business",
      "Paying the monthly electricity bill from checking",
      "Writing off an uncollectible customer receivable"
    ],
    "answer": 1,
    "explain": "Owner contributions and draws move equity directly. Sales, expenses and write-offs run through the P&L first and reach equity only as part of net income."
  },
  {
    "id": "general-1",
    "section": "general",
    "topic": "Online vs Desktop",
    "difficulty": "easy",
    "q": "What is the fundamental difference between QuickBooks Online and QuickBooks Desktop?",
    "choices": [
      "Online is a continuously updated cloud subscription; Desktop installs locally",
      "Desktop is the newer product and Online is being retired",
      "They are the same program sold under two different names",
      "Online works only for service businesses; Desktop only for retail"
    ],
    "answer": 0,
    "explain": "QBO lives in the browser, updates itself, and is reachable anywhere; Desktop is installed software with a local company file and year-based versions. Everything else about workflows flows from that split."
  },
  {
    "id": "general-2",
    "section": "general",
    "topic": "Where new files start",
    "difficulty": "medium",
    "q": "A client asks whether to start their new company file on Desktop Pro. The current product reality is",
    "choices": [
      "new Pro/Premier subscriptions aren't sold; new files start Online or Enterprise",
      "Desktop Pro remains Intuit's flagship for new small businesses",
      "Desktop and Online are both sold new, priced identically",
      "Desktop is now free since Online became the flagship"
    ],
    "answer": 0,
    "explain": "Intuit stopped selling Pro and Premier to new subscribers; existing users can renew, and Enterprise continues for heavy desktop needs. New small-business files start in QBO — which is why QBO skills are what employers ask for."
  },
  {
    "id": "general-3",
    "section": "general",
    "topic": "Plan tiers",
    "difficulty": "medium",
    "q": "A product business needs inventory tracking and class tracking in QBO. The first plan tier that includes both is",
    "choices": [
      "Simple Start",
      "Essentials",
      "Plus",
      "Advanced"
    ],
    "answer": 2,
    "explain": "Plus is where inventory, classes/locations, projects and budgets arrive. Simple Start covers invoicing and banking for one user; Essentials adds bill management and more users; Advanced scales users, custom fields and workflows."
  },
  {
    "id": "general-4",
    "section": "general",
    "topic": "Right-sizing the plan",
    "difficulty": "easy",
    "q": "A one-person consultancy needs invoicing, bank feeds and basic reports. The sensible starting plan is",
    "choices": [
      "Simple Start",
      "Essentials",
      "Plus",
      "Advanced"
    ],
    "answer": 0,
    "explain": "Simple Start covers the solo service business: invoicing, bank feeds, receipt capture, basic reporting. Paying for Plus-level features nobody uses is a common setup mistake worth mentioning in an interview."
  },
  {
    "id": "general-5",
    "section": "general",
    "topic": "User limits",
    "difficulty": "medium",
    "q": "A client on Plus needs a sixth person entering transactions. Their options are",
    "choices": [
      "buy a second Plus subscription for the sixth user",
      "upgrade to Advanced, which raises the seat limit to 25",
      "share one login among the extra staff members",
      "nothing — QBO plans all stop at five users"
    ],
    "answer": 1,
    "explain": "Plus caps at five billable users; Advanced raises it to twenty-five. Sharing logins destroys the audit trail, and a second subscription is a second set of books, not a second seat."
  },
  {
    "id": "general-6",
    "section": "general",
    "topic": "Accountant seats",
    "difficulty": "medium",
    "q": "How does the bookkeeper's accountant-user access interact with the client's user limit?",
    "choices": [
      "Accountant invitations are separate and don't consume the client's seats",
      "Each accountant user takes one of the client's billable seats",
      "Accountant access requires using the client's own admin login",
      "Only Advanced subscriptions allow any accountant users at all"
    ],
    "answer": 0,
    "explain": "Clients invite accountant users in their own slots, outside the billable-seat count. That is why professional access should always come through an accountant invitation rather than a borrowed login."
  },
  {
    "id": "general-7",
    "section": "general",
    "topic": "QBO Accountant",
    "difficulty": "easy",
    "q": "QuickBooks Online Accountant is",
    "choices": [
      "a free professional portal: client access, extra tools, ProAdvisor training",
      "a paid add-on the client must purchase for their accountant",
      "the same as a regular QBO subscription with a different logo",
      "software installed on the accountant's desktop computer"
    ],
    "answer": 0,
    "explain": "QBOA is free for bookkeeping and accounting pros: the client list, the accountant toolbox (reclassify, undo reconciliations, write-offs), and the ProAdvisor certification track all live there."
  },
  {
    "id": "general-8",
    "section": "general",
    "topic": "Practice environment",
    "difficulty": "easy",
    "q": "Before the interview, a no-risk place to practice QBO clicks is",
    "choices": [
      "Intuit's sample company test drive (Craig's Design and Landscaping)",
      "a trial started with the interviewer's company data",
      "a former client's live file, used carefully after hours",
      "studying screenshots from the QBO marketing pages"
    ],
    "answer": 0,
    "explain": "The public test drive opens a fully populated sample company where nothing you break matters. Practicing in anyone's live file is a confidentiality problem, and screenshots don't build muscle memory."
  },
  {
    "id": "general-9",
    "section": "general",
    "topic": "Saving and backups",
    "difficulty": "easy",
    "q": "How does saving work in QuickBooks Online?",
    "choices": [
      "changes save continuously; Advanced adds formal backup and restore",
      "a manual save button must be clicked after each work session",
      "the file saves only when the browser closes cleanly",
      "users must download the whole company file each night"
    ],
    "answer": 0,
    "explain": "QBO saves as you work — there is no company file to save or lose locally. Advanced adds point-in-time backup and restore; on other tiers, period-end report exports are the practical snapshot."
  },
  {
    "id": "general-10",
    "section": "general",
    "topic": "Multiple companies",
    "difficulty": "medium",
    "q": "A client owns two separate businesses. In QBO that means",
    "choices": [
      "two company subscriptions, both reachable under one Intuit login",
      "one subscription with the businesses separated by class tracking",
      "one file with a second chart of accounts added beside the first",
      "a switch to Desktop, since QBO is single-company only"
    ],
    "answer": 0,
    "explain": "Each legal entity gets its own subscription and file, all under one login. Splitting two entities by class inside one file commingles the books — workable for divisions of one entity, wrong for separate businesses."
  },
  {
    "id": "general-11",
    "section": "general",
    "topic": "Mobile app",
    "difficulty": "easy",
    "q": "The QBO mobile app earns its keep mostly for",
    "choices": [
      "snapping receipts, tracking mileage, and invoicing on the go",
      "running the full month-end reconciliation process",
      "rebuilding the chart of accounts from a phone",
      "processing payroll tax filings while traveling"
    ],
    "answer": 0,
    "explain": "Mobile is a capture tool — receipts photographed at the counter, miles logged automatically, an invoice sent from the job site. The heavy monthly work stays in the browser."
  },
  {
    "id": "general-12",
    "section": "general",
    "topic": "QuickBooks Payments",
    "difficulty": "medium",
    "q": "When a client uses QuickBooks Payments (Intuit's own processing), the bookkeeping benefit is",
    "choices": [
      "payments, deposits and processor fees book themselves and match the bank",
      "the processor's fees are waived for QBO subscribers",
      "invoices no longer need to be created at all",
      "the bank feed becomes unnecessary to review"
    ],
    "answer": 0,
    "explain": "Integrated processing records the customer payment, groups the deposit, and books the fee so the bank line matches — the exact workflow that goes wrong by hand. The feed still gets reviewed; it just matches cleanly."
  },
  {
    "id": "general-13",
    "section": "general",
    "topic": "Integrated payroll",
    "difficulty": "medium",
    "q": "Compared with an outside payroll service, integrated QBO Payroll",
    "choices": [
      "posts wages, taxes and liabilities into the books automatically each run",
      "requires the same manual journal entries every payday",
      "handles payments but leaves all tax filings to the client",
      "comes free with every QBO subscription tier"
    ],
    "answer": 0,
    "explain": "Integrated payroll writes its own entries — gross wages, employer taxes, liabilities — as each run posts. Outside services are fine too; they just need the mirror journal entry the bookkeeper books."
  },
  {
    "id": "general-14",
    "section": "general",
    "topic": "Solopreneur",
    "difficulty": "medium",
    "q": "QuickBooks Solopreneur (formerly Self-Employed) is best described as",
    "choices": [
      "a simplified product for Schedule C freelancers, not full double-entry books",
      "the top tier of QuickBooks Online, aimed at larger firms",
      "a free companion app bundled into QBO Plus plans",
      "the current name for QuickBooks Desktop Pro"
    ],
    "answer": 0,
    "explain": "Solopreneur targets solo Schedule C filers — income/expense sorting, mileage, estimated taxes. A business that needs real double-entry books, A/R and A/P belongs in QBO proper, and moving up later is a rebuild more than a click."
  },
  {
    "id": "general-15",
    "section": "general",
    "topic": "Desktop file types",
    "difficulty": "easy",
    "q": "A cleanup client hands over files ending in .QBW and .QBB. Those are",
    "choices": [
      "a QuickBooks Desktop company file and its backup",
      "export archives downloaded from QuickBooks Online",
      "corrupted files no current software can open",
      "spreadsheet templates used for accountant workpapers"
    ],
    "answer": 0,
    "explain": ".QBW is the working Desktop company file; .QBB is its backup. Recognizing them tells you instantly the client's history lives in Desktop — and a migration conversation is coming."
  },
  {
    "id": "general-16",
    "section": "general",
    "topic": "Desktop-to-Online moves",
    "difficulty": "medium",
    "q": "Moving a client from Desktop to Online, the professional sequence is",
    "choices": [
      "run the migration tool, then verify balances against Desktop reports",
      "retype the trial balance and start the history fresh",
      "export everything to CSV and import it file by file",
      "keep both systems running in parallel forever"
    ],
    "answer": 0,
    "explain": "Intuit's migration tool moves lists and transactions, but not everything converts perfectly — inventory recalculates, some reports don't carry. Tying post-migration balances to Desktop's reports is what makes the move trustworthy."
  },
  {
    "id": "coa-1",
    "section": "coa",
    "topic": "Account types drive reports",
    "difficulty": "medium",
    "q": "In QuickBooks Online, why does an account's type matter more than its name?",
    "choices": [
      "The type controls which report it lands on and how it behaves",
      "The name is limited to a fixed number of characters",
      "The type sets the sales tax rate applied to the account",
      "Types are permanent and can never be edited later"
    ],
    "answer": 0,
    "explain": "Account type (and detail type) determines whether a balance lands on the P&L or balance sheet and how QBO treats it in workflows. A well-named account of the wrong type still reports wrong."
  },
  {
    "id": "coa-2",
    "section": "coa",
    "topic": "Bank account type",
    "difficulty": "easy",
    "q": "Which QBO account type should the business checking account use?",
    "choices": [
      "Bank",
      "Other current asset",
      "Equity",
      "Cash on hand is the only correct detail type"
    ],
    "answer": 0,
    "explain": "Bank-type accounts connect to bank feeds, appear in the reconcile tool, and sit at the top of the balance sheet. Parking the checking account under another type breaks feeds and reconciliation."
  },
  {
    "id": "coa-3",
    "section": "coa",
    "topic": "Credit cards",
    "difficulty": "easy",
    "q": "A business credit card should be set up in QBO as",
    "choices": [
      "a Bank account, since charges clear through it",
      "a Credit Card type account",
      "an Expense account named after the card",
      "a Vendor with open bills"
    ],
    "answer": 1,
    "explain": "Credit card accounts carry a liability balance, take feeds, and reconcile against the card statement. Treating the card as an expense account double-counts spending when payments are also categorized."
  },
  {
    "id": "coa-4",
    "section": "coa",
    "topic": "Too many accounts",
    "difficulty": "medium",
    "q": "A chart of accounts has separate expense accounts for every vendor the company uses. What is the better practice?",
    "choices": [
      "Keep it — more detail in the chart is always better",
      "Categorize by the nature of the expense; vendor reports carry the who",
      "Use one account per month and close each out at year end",
      "Move all of the vendor accounts into cost of goods sold"
    ],
    "answer": 1,
    "explain": "The chart should describe what money was spent on; vendor detail already lives on each transaction. Vendor-named accounts bloat the P&L and make comparisons meaningless — a very common cleanup fix."
  },
  {
    "id": "coa-5",
    "section": "coa",
    "topic": "Sub-accounts",
    "difficulty": "medium",
    "q": "When are sub-accounts the right tool in the chart of accounts?",
    "choices": [
      "To group detail under a parent, like Utilities: Electric and Water",
      "To track each individual customer's outstanding balance",
      "To separate every bank deposit into its own account",
      "To record each employee's wages under their own name"
    ],
    "answer": 0,
    "explain": "Sub-accounts give reports both the rollup and the detail. Customers, jobs, and employees are tracked with names and payroll items, not chart-of-accounts entries."
  },
  {
    "id": "coa-6",
    "section": "coa",
    "topic": "Opening Balance Equity",
    "difficulty": "medium",
    "q": "What is the Opening Balance Equity account supposed to be?",
    "choices": [
      "A permanent home for unexplained differences",
      "A temporary offset used during setup that should be cleared to zero",
      "The owner's total investment in the business",
      "QBO's name for retained earnings"
    ],
    "answer": 1,
    "explain": "QBO posts there when accounts are created with opening balances. After setup, its balance should be reviewed and moved to the proper equity accounts — a nonzero OBE balance is a signature cleanup finding."
  },
  {
    "id": "coa-7",
    "section": "coa",
    "topic": "Retained earnings",
    "difficulty": "medium",
    "q": "What happens to net income in QBO at the start of a new fiscal year?",
    "choices": [
      "QBO rolls it into Retained Earnings automatically",
      "It stays on the P&L until someone manually closes it",
      "It transfers into the business checking account",
      "It is deleted when the new fiscal year begins"
    ],
    "answer": 0,
    "explain": "QBO closes the P&L into Retained Earnings automatically at fiscal year end. Direct postings into Retained Earnings during the year are a red flag worth investigating."
  },
  {
    "id": "coa-8",
    "section": "coa",
    "topic": "Undeposited Funds purpose",
    "difficulty": "medium",
    "q": "What is the Undeposited Funds account for?",
    "choices": [
      "Payments received but not yet grouped into a bank deposit",
      "Customer balances that may never be collected",
      "Cash the owner holds personally",
      "Checks the company has written but not mailed"
    ],
    "answer": 0,
    "explain": "It is a holding account so several checks received can be grouped into one deposit that matches the bank statement line. Money should flow through it briefly — a growing balance means deposits are being recorded wrong."
  },
  {
    "id": "coa-9",
    "section": "coa",
    "topic": "Uncategorized accounts",
    "difficulty": "medium",
    "q": "Where do Uncategorized Income and Uncategorized Expense balances usually come from?",
    "choices": [
      "Bank feed transactions added without a proper category",
      "Payroll runs posted by the payroll service",
      "QBO's automatic year-end closing entries",
      "Sales tax collected on invoices"
    ],
    "answer": 0,
    "explain": "They are default buckets QBO uses when a feed transaction is added without review. Balances there mean transactions were accepted blind — a top item on any cleanup checklist."
  },
  {
    "id": "coa-10",
    "section": "coa",
    "topic": "Merging accounts",
    "difficulty": "medium",
    "q": "Two nearly identical expense accounts (Telephone and Phone) both carry activity. What is the cleanest fix in QBO?",
    "choices": [
      "Delete one and lose its history",
      "Rename one to exactly match the other so QBO merges them",
      "Journal the balances to a new third account",
      "Leave both and remember the split"
    ],
    "answer": 1,
    "explain": "Giving one account the identical name (and type) of another prompts QBO to merge them, combining history under one account. Deleting would orphan transactions; a third account just spreads the mess."
  },
  {
    "id": "coa-11",
    "section": "coa",
    "topic": "Inactive accounts",
    "difficulty": "medium",
    "q": "What happens when an account with a zero balance is made inactive in QBO?",
    "choices": [
      "Its history is erased from all reports",
      "It disappears from lists but its transaction history stays on reports",
      "All its transactions move to Uncategorized Expense",
      "It cannot ever be reactivated"
    ],
    "answer": 1,
    "explain": "Inactivating hides the account from pick-lists while past reports keep their numbers. Inactivating an account that still carries a balance makes QBO post an adjusting entry, so zero it first."
  },
  {
    "id": "coa-12",
    "section": "coa",
    "topic": "Fixed asset accounts",
    "difficulty": "medium",
    "q": "A proper fixed asset setup in the chart usually includes",
    "choices": [
      "the asset cost account with an accumulated depreciation sub-account beneath it",
      "a single account mixing cost and depreciation charges",
      "an expense account named after the asset",
      "a bank-type account for the asset's value"
    ],
    "answer": 0,
    "explain": "Cost and accumulated depreciation are kept in separate accounts (often parent and sub) so the balance sheet shows original cost, the offset, and net book value cleanly."
  },
  {
    "id": "coa-13",
    "section": "coa",
    "topic": "Loan accounts",
    "difficulty": "medium",
    "q": "A five-year vehicle loan belongs on the chart of accounts as",
    "choices": [
      "income when received and an expense as it is repaid",
      "a long-term liability, with payments split between principal and interest",
      "an equity account, since the loan funds the business",
      "a negative balance within the bank account section"
    ],
    "answer": 1,
    "explain": "Loan proceeds are not income and principal repayment is not an expense. Each payment splits: principal reduces the liability, interest hits interest expense — booking whole payments to expense is a frequent cleanup correction."
  },
  {
    "id": "coa-14",
    "section": "coa",
    "topic": "Detail types",
    "difficulty": "medium",
    "q": "What does the detail type add beyond the account type in QBO?",
    "choices": [
      "A finer classification guiding reporting and setup defaults",
      "The sales tax code assigned to the account's transactions",
      "The bank routing details for connected accounts",
      "Nothing — the detail type is purely cosmetic"
    ],
    "answer": 0,
    "explain": "Detail types refine the type (for example, Bank: Checking vs Savings) and guide default treatment. Type drives report placement; detail type is the secondary classification worth setting correctly."
  },
  {
    "id": "coa-15",
    "section": "coa",
    "topic": "Products/services vs accounts",
    "difficulty": "medium",
    "q": "How do the products and services list and the chart of accounts relate?",
    "choices": [
      "Each item maps its income (and optional cost) to chart accounts",
      "They are fully independent — items never touch the chart",
      "Items replace the chart of accounts for service businesses",
      "Every new item automatically creates its own income account"
    ],
    "answer": 0,
    "explain": "Invoices are built from items, and each item maps to an income account (and a COGS/expense account if two-sided). Items pointed at the wrong accounts silently misfile revenue — worth auditing during cleanup."
  },
  {
    "id": "coa-16",
    "section": "coa",
    "topic": "Numbering and order",
    "difficulty": "easy",
    "q": "Why do many bookkeepers enable account numbers in the chart of accounts?",
    "choices": [
      "Numbers are required for tax filing",
      "To control ordering and make account selection unambiguous",
      "QBO refuses to reconcile unnumbered accounts",
      "Numbers encrypt the account names"
    ],
    "answer": 1,
    "explain": "Numbering groups the chart in statement order (1000s assets, 2000s liabilities, and so on) and prevents near-duplicate name confusion. It is a convention for clarity, not a legal requirement."
  },
  {
    "id": "banking-1",
    "section": "banking",
    "topic": "Match vs add",
    "difficulty": "medium",
    "q": "A bank feed shows a $850 deposit, and QBO offers a Match to an invoice payment already recorded. What is the right action?",
    "choices": [
      "Add it as new income so the bank agrees",
      "Match it to the existing payment",
      "Exclude it to keep the feed clean",
      "Add it to Undeposited Funds"
    ],
    "answer": 1,
    "explain": "Match links the bank line to the transaction already on the books. Adding would record the money twice — duplicated income from added-instead-of-matched deposits is one of the most common messes in cleanup work."
  },
  {
    "id": "banking-2",
    "section": "banking",
    "topic": "What the feed is",
    "difficulty": "medium",
    "q": "What does connecting a bank feed to QBO actually do?",
    "choices": [
      "It downloads activity for review; nothing posts until accepted",
      "It posts every bank transaction to the books automatically",
      "It replaces the need to reconcile the account monthly",
      "It gives the bank read access to the company's books"
    ],
    "answer": 0,
    "explain": "The feed is a to-review list. Each line must be matched, added with a category, or excluded. Reconciliation is still the check that the books agree with the statement."
  },
  {
    "id": "banking-3",
    "section": "banking",
    "topic": "Transfers between accounts",
    "difficulty": "medium",
    "q": "A $5,000 move from checking to savings shows in both feeds. How should it be recorded?",
    "choices": [
      "As income in savings and an expense in checking",
      "As a single transfer, with the second feed line matched to it",
      "As two separate deposits",
      "Exclude both sides"
    ],
    "answer": 1,
    "explain": "Record it once as a transfer (or use Record as transfer on one side), then Match the other account's feed line to that same transfer. Booking both sides separately invents phantom income and expense."
  },
  {
    "id": "banking-4",
    "section": "banking",
    "topic": "Credit card payments",
    "difficulty": "medium",
    "q": "A payment from checking to the company credit card appears in both feeds. It should post as",
    "choices": [
      "an expense called Credit Card Payment",
      "a transfer that reduces cash and reduces the card liability",
      "income to the credit card account",
      "two unrelated expenses"
    ],
    "answer": 1,
    "explain": "The spending was already expensed when each charge was categorized. The payment just moves money to pay down the liability — expensing it double-counts every dollar on the card."
  },
  {
    "id": "banking-5",
    "section": "banking",
    "topic": "Bank rules",
    "difficulty": "medium",
    "q": "What is the safest way to use bank rules in QBO?",
    "choices": [
      "Auto-add everything the rules touch to save review time",
      "Let rules pre-fill, review before accepting; auto-add only the truly predictable",
      "Create one catch-all rule pointing everything at Miscellaneous",
      "Avoid rules entirely, since they miscode too often to trust"
    ],
    "answer": 1,
    "explain": "Rules are excellent for consistency, but auto-add posts without review and cheerfully miscodes surprises. Most books are cleaner with rules that pre-fill and a human who accepts."
  },
  {
    "id": "banking-6",
    "section": "banking",
    "topic": "Excluding transactions",
    "difficulty": "medium",
    "q": "When is Exclude the right choice for a bank feed line?",
    "choices": [
      "Whenever the category is unclear",
      "For true duplicates or personal items that do not belong on the books",
      "For any transaction over a set dollar amount",
      "Never — everything must be added"
    ],
    "answer": 1,
    "explain": "Exclude removes the line from review without posting anything — right for feed duplicates or activity that is not the company's. Excluding real business activity leaves the books incomplete and reconciliation will catch it."
  },
  {
    "id": "banking-7",
    "section": "banking",
    "topic": "Duplicate feed risk",
    "difficulty": "medium",
    "q": "After reconnecting a bank connection, the feed re-downloads a month of already-recorded transactions. What should happen?",
    "choices": [
      "Add them all again quickly",
      "Match what QBO pairs up and exclude the true duplicates",
      "Delete the originals and accept the new copies",
      "Ignore the feed for that month"
    ],
    "answer": 1,
    "explain": "Reconnections often re-pull history. The lines that correspond to booked transactions get matched; anything already recorded with no match partner is excluded. Bulk-adding is how books end up doubled."
  },
  {
    "id": "banking-8",
    "section": "banking",
    "topic": "Feed is not source of truth",
    "difficulty": "medium",
    "q": "Why can't a bookkeeper rely on the bank feed alone for complete books?",
    "choices": [
      "Feeds can drop transactions and know nothing of invoices, bills or cash",
      "Feeds only work for credit card accounts, not checking",
      "Feeds are limited to a set number of lines each month",
      "They can — the feed is always complete and authoritative"
    ],
    "answer": 0,
    "explain": "The feed reflects cleared bank activity only, and connections hiccup. Reconciliation against the actual statement is what proves completeness; A/R and A/P live outside the feed entirely."
  },
  {
    "id": "banking-9",
    "section": "banking",
    "topic": "Deposits and fees",
    "difficulty": "medium",
    "q": "A customer pays a $1,000 invoice by card; the processor deposits $971 after a $29 fee. How is it recorded so the invoice closes and the bank matches?",
    "choices": [
      "Receive $971 against the invoice and write off the $29 difference",
      "Receive the full $1,000; the deposit carries a -$29 fee line to match the bank",
      "Create a replacement invoice for the $971 that was deposited",
      "Edit the original invoice down to $971 to agree with the bank"
    ],
    "answer": 1,
    "explain": "The customer paid in full, so the invoice clears at $1,000; the merchant fee is an expense. Recording the deposit net with a fee line makes the bank line match at $971."
  },
  {
    "id": "banking-10",
    "section": "banking",
    "topic": "Checks vs expenses",
    "difficulty": "medium",
    "q": "In QBO, what is the difference between an Expense and a Check transaction?",
    "choices": [
      "Expense records a payment by any method; Check carries a number and can print",
      "Checks post to the P&L while Expenses post to the balance sheet",
      "Expenses require a vendor name and Checks do not",
      "Nothing — the two forms are fully interchangeable"
    ],
    "answer": 0,
    "explain": "Both record money out with categories; Check carries the check number and prints. Neither should be used to pay a bill that is already entered — that is what Pay Bills is for."
  },
  {
    "id": "banking-11",
    "section": "banking",
    "topic": "Petty cash",
    "difficulty": "medium",
    "q": "How is petty cash properly handled in QBO?",
    "choices": [
      "A Bank-type account funded by transfers, spent down against receipts",
      "An expense account named Petty Cash for all small purchases",
      "Off the books — cash drawers are not accounting records",
      "Part of the owner's personal records rather than the company's"
    ],
    "answer": 0,
    "explain": "Petty cash is company money in a drawer — a bank-type account. Withdrawals fund it as a transfer; spending out of it is recorded against receipts. Booking the ATM withdrawal itself as an expense loses the detail."
  },
  {
    "id": "banking-12",
    "section": "banking",
    "topic": "For-review workflow",
    "difficulty": "easy",
    "q": "Bank feed lines sitting in the For Review tab are",
    "choices": [
      "already included in the account's QBO balance",
      "not yet on the books until matched or added",
      "automatically posted after 30 days",
      "visible to the bank"
    ],
    "answer": 1,
    "explain": "For Review is a staging area. The QBO register balance includes only what has been matched or added — a big For Review backlog means the books are behind, not that they are wrong."
  },
  {
    "id": "banking-13",
    "section": "banking",
    "topic": "ATM withdrawals",
    "difficulty": "medium",
    "q": "The feed shows a $300 ATM withdrawal with no receipts provided. The most defensible booking is",
    "choices": [
      "office expense, to keep the P&L tidy",
      "owner's draw (or a due-from-owner), pending documentation",
      "exclude it from the feed",
      "split it evenly across all expense accounts"
    ],
    "answer": 1,
    "explain": "Cash with no business documentation defaults to a draw or a receivable from the owner, and gets reclassified if receipts appear. Guessing an expense category invents deductions nobody can support."
  },
  {
    "id": "banking-14",
    "section": "banking",
    "topic": "Refunds in the feed",
    "difficulty": "medium",
    "q": "A $120 refund from a supplier appears as a deposit in the feed. It should be categorized as",
    "choices": [
      "sales income, because money arrived in the account",
      "a reduction of the original expense (or a refunded vendor credit)",
      "an owner contribution into the business",
      "interest income earned on the account balance"
    ],
    "answer": 1,
    "explain": "Money back from a vendor reverses the cost, restoring the expense account. Calling refunds income inflates revenue and overstates expenses at the same time."
  },
  {
    "id": "banking-15",
    "section": "banking",
    "topic": "Feed balance vs book balance",
    "difficulty": "medium",
    "q": "The bank website shows $12,400 but QBO's register shows $9,800. What is the most ordinary explanation?",
    "choices": [
      "Someone has stolen the $2,600 difference",
      "Timing: outstanding checks, deposits in transit, or feed lines not yet accepted",
      "QBO is malfunctioning and Intuit support must repair the data file",
      "The bank misposted interest to the wrong customer"
    ],
    "answer": 1,
    "explain": "Book and bank balances differ by timing: checks written but not cleared, deposits in transit, and feed lines not yet accepted. Reconciliation itemizes the difference — panic comes only after it cannot."
  },
  {
    "id": "banking-16",
    "section": "banking",
    "topic": "Categorizing loan payments",
    "difficulty": "medium",
    "q": "The feed shows the monthly $645 truck loan payment. The correct split is",
    "choices": [
      "the full payment to vehicle operating expense",
      "principal to the loan liability and interest to interest expense",
      "the full payment against the loan liability balance",
      "the full payment to owner's draw for simplicity"
    ],
    "answer": 1,
    "explain": "Each payment part-pays the loan and part-pays interest, per the amortization schedule. Booking it all to expense overstates costs; all to the liability makes the loan shrink too fast and hides interest."
  },
  {
    "id": "recon-1",
    "section": "recon",
    "topic": "Purpose of reconciliation",
    "difficulty": "easy",
    "q": "What does reconciling an account in QBO actually prove?",
    "choices": [
      "That every transaction sits in the correct category",
      "That the books agree with the statement, with any differences identified",
      "That the company earned a profit for the period",
      "That the bank feed connection is working properly"
    ],
    "answer": 1,
    "explain": "Reconciliation ties the register to the statement: everything on the statement is booked, and anything unmatched is identified as outstanding. Categories can still be wrong — that is a separate review."
  },
  {
    "id": "recon-2",
    "section": "recon",
    "topic": "Reconciliation inputs",
    "difficulty": "easy",
    "q": "Which two figures from the bank statement start every reconciliation?",
    "choices": [
      "The statement ending date and ending balance",
      "The average daily balance and fees",
      "The opening deposit and the largest check",
      "The routing and account numbers"
    ],
    "answer": 0,
    "explain": "QBO asks for the ending date and ending balance, then you check off cleared items until the difference reads zero. Service charges and interest can be added during the process."
  },
  {
    "id": "recon-3",
    "section": "recon",
    "topic": "Finish with zero",
    "difficulty": "easy",
    "q": "When is a reconciliation actually done?",
    "choices": [
      "When the difference shown is exactly zero",
      "When most transactions are checked off",
      "When the month ends",
      "When QBO stops suggesting matches"
    ],
    "answer": 0,
    "explain": "A nonzero difference means something is missing, duplicated, or mis-keyed. Finishing anyway forces an adjustment entry that buries the problem instead of fixing it."
  },
  {
    "id": "recon-4",
    "section": "recon",
    "topic": "Forced adjustments",
    "difficulty": "medium",
    "q": "What does clicking Finish Now with a leftover difference cause QBO to do?",
    "choices": [
      "Nothing — it refuses to finish",
      "Post a Reconciliation Discrepancy adjustment for the difference",
      "Email the bank for the correct figures",
      "Delete the unmatched transactions"
    ],
    "answer": 1,
    "explain": "QBO plugs the gap with an expense/income adjustment so the reconciliation closes. Those adjustment entries are red flags in cleanup — each one marks a month where a real error was papered over."
  },
  {
    "id": "recon-5",
    "section": "recon",
    "topic": "Beginning balance broken",
    "difficulty": "medium",
    "q": "This month's reconciliation opens with a beginning balance that no longer matches last month's ending balance. What happened?",
    "choices": [
      "The bank quietly restated last month's statement",
      "Someone changed, deleted or un-reconciled a previously reconciled transaction",
      "QBO reset the account's history during a software update",
      "Bank interest posted twice during the prior month"
    ],
    "answer": 1,
    "explain": "The beginning balance is the sum of reconciled items; it moves only when reconciled history is altered. The Reconciliation Discrepancy report shows exactly which transactions changed and by whom."
  },
  {
    "id": "recon-6",
    "section": "recon",
    "topic": "Outstanding items",
    "difficulty": "medium",
    "q": "A check written June 28 that cleared July 3 is treated how in the June reconciliation?",
    "choices": [
      "Checked off as cleared in June",
      "Left unchecked — it is outstanding at June 30",
      "Deleted and re-entered in July",
      "Changed to a July date"
    ],
    "answer": 1,
    "explain": "The check exists in the books in June but is not on June's statement, so it stays unchecked and explains part of the book-to-bank difference. It clears in July's reconciliation."
  },
  {
    "id": "recon-7",
    "section": "recon",
    "topic": "Stale outstanding checks",
    "difficulty": "medium",
    "q": "A $75 check has been outstanding for 11 months. The right response is to",
    "choices": [
      "ignore it forever, since it balances the reconciliation",
      "investigate: reissue or void it properly, considering unclaimed property rules",
      "delete it from the register so the list looks clean",
      "mark it cleared in the next reconciliation to tidy the list"
    ],
    "answer": 1,
    "explain": "Old outstanding checks usually mean lost or duplicate payments. Contact the payee, void-and-reissue if needed — and know that genuinely unclaimed amounts may fall under state escheatment rules rather than becoming income."
  },
  {
    "id": "recon-8",
    "section": "recon",
    "topic": "Undoing reconciliations",
    "difficulty": "medium",
    "q": "Who can undo an entire completed reconciliation in QBO?",
    "choices": [
      "Any user, from the reconcile screen",
      "An accountant user, via QBO Accountant's Undo tool",
      "Nobody — reconciliations are permanent",
      "Only Intuit support"
    ],
    "answer": 1,
    "explain": "Standard users can un-reconcile individual transactions from the register (one R at a time); rolling back a whole statement is an accountant-user tool. That asymmetry is why cleanup work is far easier with accountant access."
  },
  {
    "id": "recon-9",
    "section": "recon",
    "topic": "Bank errors",
    "difficulty": "medium",
    "q": "The bank statement includes a $200 charge the company never made. During reconciliation the bookkeeper should",
    "choices": [
      "book it as miscellaneous expense and move on",
      "record it while disputing with the bank; book the reversal when refunded",
      "leave the reconciliation open until the dispute resolves",
      "reduce sales income by the $200 in dispute"
    ],
    "answer": 1,
    "explain": "The charge is on the statement, so the books must reflect it — typically to a clearing/dispute account or the best-known category — while the dispute runs. The refund reverses it. Unfinished reconciliations help nobody."
  },
  {
    "id": "recon-10",
    "section": "recon",
    "topic": "Frequency",
    "difficulty": "easy",
    "q": "How often should active bank and credit card accounts be reconciled?",
    "choices": [
      "Monthly, against each statement",
      "Annually, before taxes",
      "Only when the balance looks wrong",
      "Weekly, against the online balance"
    ],
    "answer": 0,
    "explain": "Statement-by-statement reconciliation catches errors while they are fresh and keeps every later report trustworthy. A year of unreconciled months is a cleanup project, not a bookkeeping routine."
  },
  {
    "id": "recon-11",
    "section": "recon",
    "topic": "What gets reconciled",
    "difficulty": "medium",
    "q": "Beyond checking accounts, which of these should also be reconciled routinely?",
    "choices": [
      "Credit cards, savings, and loan accounts with statements",
      "Only accounts with feeds attached",
      "Income accounts",
      "The chart of accounts itself"
    ],
    "answer": 0,
    "explain": "Anything with a third-party statement can and should be tied out — cards, savings, lines of credit, loan balances. Income accounts have no outside statement; they are reviewed, not reconciled."
  },
  {
    "id": "recon-12",
    "section": "recon",
    "topic": "Duplicate hunting",
    "difficulty": "medium",
    "q": "During reconciliation the difference is exactly $482.17, and one $482.17 expense appears twice in the register. The fix is to",
    "choices": [
      "check both copies off and finish the reconciliation",
      "delete or exclude the duplicate, then continue reconciling",
      "add a compensating income entry for the difference",
      "change one copy to a different amount so totals differ"
    ],
    "answer": 1,
    "explain": "A difference equal to a specific transaction usually is that transaction — duplicated or missing. Remove the duplicate (delete the manual copy or exclude the feed copy) and the difference closes honestly."
  },
  {
    "id": "recon-13",
    "section": "recon",
    "topic": "Transposition clue",
    "difficulty": "medium",
    "q": "A reconciliation is off by $270, divisible by 9. What classic error does that suggest?",
    "choices": [
      "A transposed number, like 730 entered as 370",
      "A deposit missing from the register",
      "A check entered twice by mistake",
      "Fraudulent activity at the bank"
    ],
    "answer": 0,
    "explain": "Transposition differences are always divisible by 9 — an old bookkeeper's trick that still narrows the hunt. It is a hint, not a proof, but it says: check for swapped digits first."
  },
  {
    "id": "recon-14",
    "section": "recon",
    "topic": "R and C flags",
    "difficulty": "medium",
    "q": "In the QBO register, what do the C and R flags on a transaction mean?",
    "choices": [
      "C means cleared by the feed; R means locked into a reconciliation",
      "C marks correct entries and R marks reviewed ones",
      "C stands for credit and R stands for refund",
      "They are decorative flags with no accounting meaning"
    ],
    "answer": 0,
    "explain": "C marks feed-matched (cleared) items; R marks items locked into a finished reconciliation. Editing or deleting R items is what breaks beginning balances."
  },
  {
    "id": "recon-15",
    "section": "recon",
    "topic": "First reconciliation of a messy file",
    "difficulty": "medium",
    "q": "Taking over books that have never been reconciled, where does the first reconciliation start?",
    "choices": [
      "At the most recent month, working backward as needed",
      "At the earliest statement after the last known-good point, working forward",
      "At any convenient month — the order doesn't matter",
      "Skip reconciling and go straight to fixing categories"
    ],
    "answer": 1,
    "explain": "Reconciliations chain — each month's beginning balance is last month's ending. Starting at the last trustworthy point and rolling forward keeps every difference explainable; starting at the end guarantees a mystery beginning balance."
  },
  {
    "id": "recon-16",
    "section": "recon",
    "topic": "Reconciliation reports",
    "difficulty": "medium",
    "q": "Why save or note the reconciliation report each month?",
    "choices": [
      "It freezes cleared and outstanding items — the audit trail if history changes",
      "QBO permanently deletes reconciliation data after ninety days",
      "The bank requires a copy of each month's report",
      "It legally replaces the bank statement itself"
    ],
    "answer": 0,
    "explain": "The report freezes what was outstanding and what cleared. When a beginning balance breaks months later, comparing old reports to the current register pinpoints what was altered."
  },
  {
    "id": "ar-1",
    "section": "ar",
    "topic": "Invoice vs sales receipt",
    "difficulty": "easy",
    "q": "When is an invoice the right form instead of a sales receipt in QBO?",
    "choices": [
      "When the customer will pay later",
      "When the customer pays at the time of sale",
      "When the sale is under $100",
      "When the customer is new"
    ],
    "answer": 0,
    "explain": "Invoices create a receivable to be collected; sales receipts record sale and payment in one step. Using invoices for instant payments creates pointless A/R churn, and receipts for credit sales lose track of who owes what."
  },
  {
    "id": "ar-2",
    "section": "ar",
    "topic": "Receive payment",
    "difficulty": "medium",
    "q": "A customer's check arrives for an open invoice. Recording it with Receive Payment does what?",
    "choices": [
      "It creates brand-new income on the profit and loss",
      "It clears the invoice and parks the money in Undeposited Funds or the bank",
      "It posts a reduction to expenses for the amount collected",
      "It closes the customer's account from further billing"
    ],
    "answer": 1,
    "explain": "Income was recognized when the invoice was created; the payment just settles the receivable. Recording the check as a deposit-to-income instead is the classic way revenue gets double-counted."
  },
  {
    "id": "ar-3",
    "section": "ar",
    "topic": "The A/R double-count",
    "difficulty": "medium",
    "q": "An invoice was recorded, and the customer's payment was later added straight from the bank feed as income. What is the result?",
    "choices": [
      "The books are fine",
      "Income is doubled and the invoice still shows unpaid",
      "The invoice is automatically closed",
      "A/R goes negative"
    ],
    "answer": 1,
    "explain": "The feed deposit needed to be matched to a Receive Payment, not added as income. This single mistake produces both inflated revenue and a phantom past-due balance — the most common A/R cleanup finding there is."
  },
  {
    "id": "ar-4",
    "section": "ar",
    "topic": "Grouping deposits",
    "difficulty": "medium",
    "q": "Three checks received Tuesday are taken to the bank as one $2,400 deposit. How should QBO reflect that?",
    "choices": [
      "Three separate deposits so each customer's name shows",
      "Payments into Undeposited Funds, then one deposit combining all three",
      "A single journal entry crediting income for $2,400",
      "Whatever the bank feed suggests when the line arrives"
    ],
    "answer": 1,
    "explain": "The statement will show a single $2,400 line, so the books should too. Undeposited Funds exists exactly to group individual payments into the deposit the bank will report."
  },
  {
    "id": "ar-5",
    "section": "ar",
    "topic": "Credit memos",
    "difficulty": "medium",
    "q": "A customer is owed $150 off a billed job. The correct A/R tool is",
    "choices": [
      "deleting the original invoice and reissuing it",
      "a credit memo, applied against the open or next invoice",
      "a sales receipt entered with a negative amount",
      "a journal entry directly against sales income"
    ],
    "answer": 1,
    "explain": "Credit memos adjust what the customer owes with a paper trail, and can be applied or refunded. Deleting or editing filed invoices rewrites history that may already be reconciled or reported."
  },
  {
    "id": "ar-6",
    "section": "ar",
    "topic": "Refund receipts",
    "difficulty": "medium",
    "q": "A customer already paid and now gets $200 back. Which form records the money leaving?",
    "choices": [
      "A credit memo by itself, with nothing else recorded",
      "Refund receipt (or check tied to the credit), reducing income and cash",
      "Deleting the original payment so the balance reopens",
      "A vendor bill made out to the customer for $200"
    ],
    "answer": 1,
    "explain": "A credit memo alone only reduces what is owed — with a paid balance there is nothing to apply it to. The refund receipt records cash going back and reverses the revenue."
  },
  {
    "id": "ar-7",
    "section": "ar",
    "topic": "Negative A/R",
    "difficulty": "medium",
    "q": "The A/R aging shows a customer at negative $500. What does that usually mean?",
    "choices": [
      "The customer still owes the business $500",
      "A payment or credit was recorded without being applied, or was entered twice",
      "The customer's record was deactivated before their balance cleared",
      "Sales tax on their invoices was calculated wrong"
    ],
    "answer": 1,
    "explain": "Negative receivables mean the books say we owe the customer. Typically an unapplied payment sits next to an open invoice — applying one to the other clears both. It is a standard cleanup sweep."
  },
  {
    "id": "ar-8",
    "section": "ar",
    "topic": "Unapplied cash payment income",
    "difficulty": "medium",
    "q": "Unapplied Cash Payment Income appears on a cash-basis P&L. What causes it?",
    "choices": [
      "Customer payments dated before, or never linked to, the invoices they pay",
      "Interest the bank credited to the checking account",
      "Subscription fees QBO charges the company monthly",
      "Expense transactions entered twice from the feed"
    ],
    "answer": 0,
    "explain": "On cash basis, QBO must report money received even when it is not linked to an invoice — that is the holding line it uses. Applying payments to their invoices (with sensible dates) makes it disappear."
  },
  {
    "id": "ar-9",
    "section": "ar",
    "topic": "A/R aging",
    "difficulty": "easy",
    "q": "What does the A/R Aging Summary show?",
    "choices": [
      "Each customer's open balance bucketed by how overdue it is",
      "Total sales by month",
      "Deposits waiting in Undeposited Funds",
      "Customer lifetime value"
    ],
    "answer": 0,
    "explain": "Aging buckets (current, 1–30, 31–60, and so on) show who owes what and how stale it is — the collections worklist and one of the first reports reviewed when taking over books."
  },
  {
    "id": "ar-10",
    "section": "ar",
    "topic": "Bad debt",
    "difficulty": "medium",
    "q": "An invoice is judged uncollectible on accrual-basis books. The clean write-off is",
    "choices": [
      "deleting the invoice from the register",
      "a credit memo using a bad debt item, applied to the invoice",
      "receiving a fake payment to close it out",
      "editing the invoice amount down to zero"
    ],
    "answer": 1,
    "explain": "The credit memo (pointing to a bad debt expense item) closes the receivable and books the loss with a trail. Deleting invoices distorts history and any period already reported."
  },
  {
    "id": "ar-11",
    "section": "ar",
    "topic": "Estimates",
    "difficulty": "easy",
    "q": "What is an estimate in QBO?",
    "choices": [
      "A non-posting quote that can be converted to an invoice when accepted",
      "A draft journal entry awaiting approval",
      "An invoice that QBO recreates automatically every month",
      "A budget line for planned future revenue"
    ],
    "answer": 0,
    "explain": "Estimates carry no accounting effect until converted. They exist for quoting and progress invoicing — nothing hits income or A/R at the estimate stage."
  },
  {
    "id": "ar-12",
    "section": "ar",
    "topic": "Statements",
    "difficulty": "easy",
    "q": "A customer statement in QBO is best used to",
    "choices": [
      "summarize a customer's open invoices and activity for collections",
      "replace invoicing entirely for repeat customers",
      "record one bulk payment across many customers",
      "apply sales tax to the customer's account"
    ],
    "answer": 0,
    "explain": "Statements are summaries sent to remind customers what is open — they post nothing. Invoices remain the source documents behind them."
  },
  {
    "id": "ar-13",
    "section": "ar",
    "topic": "Deposits on jobs",
    "difficulty": "medium",
    "q": "A customer pays a $1,000 deposit before work begins. The cleanest treatment is",
    "choices": [
      "income recognized immediately, since the cash has already arrived",
      "a liability (customer deposit) or retainer item, cleared when the job is invoiced",
      "a reduction of the expenses expected on the customer's job",
      "a customer loan recorded inside the equity section"
    ],
    "answer": 1,
    "explain": "Until earned, the deposit is owed back in work or refund. Booking it straight to income overstates revenue now and understates it when the job actually happens."
  },
  {
    "id": "ar-14",
    "section": "ar",
    "topic": "Recurring invoices",
    "difficulty": "easy",
    "q": "A client is billed the same $500 on the first of every month. The low-maintenance QBO setup is",
    "choices": [
      "typing a fresh invoice by hand at each month's start",
      "a recurring template that creates and sends the invoice automatically",
      "one annual invoice for the full $6,000 up front",
      "a bank rule set to generate the monthly billing"
    ],
    "answer": 1,
    "explain": "Recurring templates handle fixed billing reliably. Bank rules act on feed lines, not billing — they cannot create invoices."
  },
  {
    "id": "ar-15",
    "section": "ar",
    "topic": "Partial payments",
    "difficulty": "medium",
    "q": "A customer pays $300 against a $750 invoice. After Receive Payment for $300, the invoice",
    "choices": [
      "shows as paid in full",
      "remains open with a $450 balance and ages accordingly",
      "is automatically split into two invoices",
      "must be reissued"
    ],
    "answer": 1,
    "explain": "QBO applies partial payments and keeps the remainder open — the aging keeps tracking the unpaid $450. No editing or reissuing needed."
  },
  {
    "id": "ar-16",
    "section": "ar",
    "topic": "Undeposited Funds pileup",
    "difficulty": "medium",
    "q": "Undeposited Funds holds $18,000 spanning eight months. What has been happening?",
    "choices": [
      "Sales have simply grown faster than deposits",
      "Payments went to UF, but deposits were entered separately — usually as income",
      "The bank feed has been disconnected for most of the year",
      "Customers have been prepaying invoices ahead of the work"
    ],
    "answer": 1,
    "explain": "UF only grows when payments go in and never get swept into recorded deposits — usually because deposits were added from the feed as fresh income. The fix pairs each UF payment with its real deposit and removes the duplicates."
  },
  {
    "id": "ap-1",
    "section": "ap",
    "topic": "Bill vs expense",
    "difficulty": "easy",
    "q": "When should a vendor bill be entered in QBO instead of an Expense?",
    "choices": [
      "When the company will pay later and wants the payable tracked",
      "When the amount is over $1,000",
      "When the vendor is out of state",
      "Bills and Expenses are interchangeable"
    ],
    "answer": 0,
    "explain": "Bills create accounts payable and an aging to manage; Expenses record already-completed payments. Pay-later purchases entered as Expenses on the payment date lose the liability and, on accrual books, the timing."
  },
  {
    "id": "ap-2",
    "section": "ap",
    "topic": "Pay bills workflow",
    "difficulty": "medium",
    "q": "A bill was entered, and the payment was then recorded as a separate Expense from the bank feed. What is the result?",
    "choices": [
      "Everything is fine",
      "The cost is doubled and the bill still shows unpaid",
      "The bill closes automatically",
      "A/P goes to zero"
    ],
    "answer": 1,
    "explain": "The feed payment had to be matched to a Bill Payment, not added as a new Expense. This is the A/P mirror of the A/R double-count: expenses overstated and a phantom open payable."
  },
  {
    "id": "ap-3",
    "section": "ap",
    "topic": "A/P aging",
    "difficulty": "easy",
    "q": "The A/P Aging Summary answers which question?",
    "choices": [
      "Which vendors we owe, how much, and how overdue",
      "Which customers owe us",
      "What we spent by category",
      "Which bills were paid early"
    ],
    "answer": 0,
    "explain": "A/P aging is the payables mirror of A/R aging — the cash-planning and vendor-relations worklist, and an early stop when assessing inherited books."
  },
  {
    "id": "ap-4",
    "section": "ap",
    "topic": "Vendor credits",
    "difficulty": "medium",
    "q": "A vendor issues a $200 credit for returned goods. In QBO that is recorded as",
    "choices": [
      "a negative bill payment",
      "a Vendor Credit, applied against an open or future bill",
      "a customer credit memo",
      "deleting $200 from the original bill"
    ],
    "answer": 1,
    "explain": "Vendor Credits reduce what is owed with a trail and get applied in Pay Bills. Editing history or inventing negative payments hides what actually happened with the vendor."
  },
  {
    "id": "ap-5",
    "section": "ap",
    "topic": "Negative A/P",
    "difficulty": "medium",
    "q": "A vendor shows a negative payable balance. The usual cause is",
    "choices": [
      "the vendor overcharged the company on recent billing",
      "a payment recorded without a bill, a duplicate, or an unapplied credit",
      "inventory shrinkage flowing through payables",
      "sales tax rounding on the vendor's invoices"
    ],
    "answer": 1,
    "explain": "Negative A/P says the books think the vendor owes us. Typically a Bill Payment or check exists with no bill to absorb it — pair them up or reclassify the payment and the negative clears."
  },
  {
    "id": "ap-6",
    "section": "ap",
    "topic": "Duplicate vendors",
    "difficulty": "medium",
    "q": "The vendor list has both \"AT&T\" and \"ATT\" with activity under each. The cleanup move is",
    "choices": [
      "delete the smaller one",
      "rename one to exactly match the other so QBO merges their histories",
      "leave both forever",
      "move all transactions to a new third vendor"
    ],
    "answer": 1,
    "explain": "Vendor merge works like account merge — identical display names combine the records and their transaction history. Deleting a vendor with history is not possible; inactivating without merging leaves split reporting."
  },
  {
    "id": "ap-7",
    "section": "ap",
    "topic": "1099 tracking",
    "difficulty": "medium",
    "q": "Which vendor payments generally require a 1099-NEC at year end?",
    "choices": [
      "$600+ in services to unincorporated vendors paid by check, cash or ACH",
      "Every vendor payment over $600, whatever the method",
      "Only payments made to incorporated vendors",
      "Credit card payments made to contractors"
    ],
    "answer": 0,
    "explain": "The 1099-NEC covers service payments of $600+ to non-corporate payees. Card and third-party network payments are excluded because processors report them on 1099-K — which is why payment method tracking matters."
  },
  {
    "id": "ap-8",
    "section": "ap",
    "topic": "W-9 collection",
    "difficulty": "easy",
    "q": "When is the best time to collect a W-9 from a new contractor?",
    "choices": [
      "Before their first payment",
      "During January's 1099 scramble",
      "Only if they ask for one",
      "After $600 is reached"
    ],
    "answer": 0,
    "explain": "A W-9 up front captures the legal name, TIN and entity type while there is leverage. Chasing W-9s in January from vendors already paid is a rite of passage worth avoiding."
  },
  {
    "id": "ap-9",
    "section": "ap",
    "topic": "Recurring expenses",
    "difficulty": "easy",
    "q": "The $89 monthly software subscription that autocharges the card is best handled by",
    "choices": [
      "entering a bill and hand-paying it every month",
      "a rule or recurring transaction that categorizes it consistently",
      "a quarterly journal entry for the accumulated charges",
      "ignoring it until year end and booking one lump"
    ],
    "answer": 1,
    "explain": "Autocharges need consistent categorization, not payable management. A rule (reviewed, or auto-add for something this predictable) or a recurring expense keeps it uniform."
  },
  {
    "id": "ap-10",
    "section": "ap",
    "topic": "Check runs",
    "difficulty": "medium",
    "q": "Paying several open bills with printed checks flows through which QBO path?",
    "choices": [
      "New Expense for each vendor",
      "Pay Bills, selecting the open bills and the checking account",
      "A journal entry to accounts payable",
      "Bank feed rules"
    ],
    "answer": 1,
    "explain": "Pay Bills creates Bill Payment checks tied to the bills they settle, keeping the payable trail intact. Writing separate Expenses leaves the bills open and doubles the cost."
  },
  {
    "id": "ap-11",
    "section": "ap",
    "topic": "Purchase orders",
    "difficulty": "easy",
    "q": "A purchase order in QBO does what to the books when created?",
    "choices": [
      "It posts the expense to the P&L immediately",
      "Nothing — it is non-posting until goods arrive and it becomes a bill",
      "It reduces the cash balance when created",
      "It increases inventory on the balance sheet"
    ],
    "answer": 1,
    "explain": "POs are commitments, not transactions. The accounting starts when the PO converts to a bill (or the goods are received), which is also when inventory or expense is recognized."
  },
  {
    "id": "ap-12",
    "section": "ap",
    "topic": "Personal charges on the business card",
    "difficulty": "medium",
    "q": "The owner's $180 personal dinner shows up on the business credit card feed. Book it as",
    "choices": [
      "meals expense — it was on the business card",
      "owner's draw (or shareholder loan), not a business expense",
      "exclude it so it disappears",
      "split it with the business half"
    ],
    "answer": 1,
    "explain": "Personal spending on business cards is a draw or due-from-owner, never a deduction. Excluding it breaks the card reconciliation; the charge is genuinely on the statement."
  },
  {
    "id": "ap-13",
    "section": "ap",
    "topic": "Vendor prepayments",
    "difficulty": "medium",
    "q": "The company pays a vendor a $2,000 deposit before any bill exists. The cleanest booking is",
    "choices": [
      "expense now",
      "a prepaid asset (or A/P debit) cleared when the bill arrives",
      "income when refunded",
      "a journal entry to retained earnings"
    ],
    "answer": 1,
    "explain": "Money out before the cost is incurred is an asset — a claim on the vendor. When the bill lands, the prepayment applies against it and the expense is recognized in the right period."
  },
  {
    "id": "ap-14",
    "section": "ap",
    "topic": "Billable expenses",
    "difficulty": "medium",
    "q": "What does marking an expense billable to a customer enable?",
    "choices": [
      "The cost is removed from the books after invoicing",
      "It can be pulled onto the customer's next invoice for reimbursement",
      "The vendor receives payment twice for the purchase",
      "The expense skips the P&L and posts to equity instead"
    ],
    "answer": 1,
    "explain": "Billable expenses flow through to customer invoices, with income mapped to a reimbursement account. The expense stays on the books; the markup and recovery show on the customer side."
  },
  {
    "id": "ap-15",
    "section": "ap",
    "topic": "Voiding vendor checks",
    "difficulty": "medium",
    "q": "A vendor check from a closed, reconciled period was never cashed. The safest correction is",
    "choices": [
      "void it in place, letting the prior period change",
      "void it as of today (or reverse by JE dated now) so the closed period stands",
      "delete the check so it disappears from the register",
      "check it off as cleared in the next reconciliation"
    ],
    "answer": 1,
    "explain": "Voiding in place rewrites a reconciled month and breaks the beginning balance. A current-dated reversal preserves history and fixes the balance going forward — prior periods that were reported stay as reported."
  },
  {
    "id": "ap-16",
    "section": "ap",
    "topic": "Contractor vs employee context",
    "difficulty": "medium",
    "q": "Why does a bookkeeper care whether a worker is paid as a 1099 contractor or a W-2 employee?",
    "choices": [
      "Contractors flow through A/P with 1099s; employees through payroll withholding",
      "Only the total dollars differ; the recording path is identical",
      "Contractors cost more to record because of extra software fees",
      "There is no bookkeeping difference so long as totals match"
    ],
    "answer": 0,
    "explain": "The classification changes the entire recording path — payroll liabilities, employer taxes and filings for employees versus vendor payments and 1099s for contractors. Classification itself is a legal determination made above the bookkeeper's desk, but the books must match it."
  },
  {
    "id": "cleanup-1",
    "section": "cleanup",
    "topic": "Where to start",
    "difficulty": "medium",
    "q": "Taking over a messy QBO file, which review gives the fastest read on its health?",
    "choices": [
      "The balance sheet, line by line, against reality",
      "The color scheme of the dashboard",
      "The number of attachments",
      "The oldest journal entry"
    ],
    "answer": 0,
    "explain": "Every balance sheet line is checkable: bank accounts against statements, A/R and A/P against agings, loans against lender balances, plus the tell-tale accounts — Undeposited Funds, Opening Balance Equity, Uncategorized anything. The P&L inherits its credibility from a clean balance sheet."
  },
  {
    "id": "cleanup-2",
    "section": "cleanup",
    "topic": "The classic tells",
    "difficulty": "medium",
    "q": "Which set of balances screams \"this file needs cleanup\"?",
    "choices": [
      "Zero OBE, freshly reconciled banks, and a small UF balance in transit",
      "Stale Undeposited Funds, nonzero Opening Balance Equity, and negative A/R lines",
      "High revenue paired with proportionally high expenses",
      "Loan balances that sit at suspiciously round numbers"
    ],
    "answer": 1,
    "explain": "Those three are the classic diagnostic triad: deposits recorded wrong, setup never finished, and payments never applied. Each one points at a specific broken workflow, not just a wrong number."
  },
  {
    "id": "cleanup-3",
    "section": "cleanup",
    "topic": "Audit log",
    "difficulty": "medium",
    "q": "What does the QBO audit log show that nothing else does?",
    "choices": [
      "Who created, edited or deleted each transaction, and when",
      "The company's overall audit risk score",
      "Only the history of user sign-ins and sign-outs",
      "Images of the underlying bank statements"
    ],
    "answer": 0,
    "explain": "The audit log records every touch with user and timestamp, including deleted transactions and prior versions. It is how you find who changed the reconciled January entry in June."
  },
  {
    "id": "cleanup-4",
    "section": "cleanup",
    "topic": "Void vs delete",
    "difficulty": "medium",
    "q": "Why is voiding a transaction usually better than deleting it?",
    "choices": [
      "Voiding takes fewer clicks in the register view",
      "Void keeps the zeroed record and its trail; delete removes it from the registers",
      "Deleting requires administrator permissions that voiding does not",
      "There is no practical difference between the two actions"
    ],
    "answer": 1,
    "explain": "A voided check still shows — numbered, zeroed, explained. Deletion leaves a gap only the audit log remembers. In inherited books, unexplained deletions are exactly what you go hunting for."
  },
  {
    "id": "cleanup-5",
    "section": "cleanup",
    "topic": "Fixing prior periods",
    "difficulty": "medium",
    "q": "A material error is found in a period whose tax return has already been filed. The right move is",
    "choices": [
      "fix it inside the prior period so history reads correctly",
      "book the correction currently, leaving filed periods as filed",
      "ignore it — the filed period is history now",
      "delete the whole month and re-enter it from statements"
    ],
    "answer": 1,
    "explain": "Books that fed a filed return should stay consistent with it; corrections post currently, and the tax pro decides if an amended return is warranted. Rewriting closed periods quietly is how books and returns stop agreeing."
  },
  {
    "id": "cleanup-6",
    "section": "cleanup",
    "topic": "Close the books",
    "difficulty": "medium",
    "q": "What does QBO's Close the Books setting actually do?",
    "choices": [
      "It sets a closing date that warns or password-blocks prior changes",
      "It files the year's tax return automatically",
      "It locks the whole file permanently for everyone",
      "It archives old transactions into a separate file"
    ],
    "answer": 0,
    "explain": "The closing date is the guardrail that keeps finished periods finished — with an exceptions report for anything forced through. Setting it after each close is cheap insurance against the broken-beginning-balance class of problems."
  },
  {
    "id": "cleanup-7",
    "section": "cleanup",
    "topic": "Uncategorized sweep",
    "difficulty": "medium",
    "q": "The P&L shows $23,000 of Uncategorized Expense. The cleanup approach is",
    "choices": [
      "rename the account to Miscellaneous Expense",
      "recode each from vendor and memo evidence; ask about true unknowns",
      "spread the balance across other accounts proportionally",
      "move the full amount to owner's draw and close it"
    ],
    "answer": 1,
    "explain": "Uncategorized balances are deferred decisions. Most resolve from the transaction's own evidence; a short list goes to the client as questions. Proportional spreading is fabrication."
  },
  {
    "id": "cleanup-8",
    "section": "cleanup",
    "topic": "Duplicate detection",
    "difficulty": "medium",
    "q": "Which report technique surfaces duplicated transactions fastest?",
    "choices": [
      "Transaction detail sorted by amount, scanning for same-amount pairs",
      "The profit and loss summary run for the full year",
      "Reading the audit log end to end line by line",
      "Printing every register for manual review"
    ],
    "answer": 0,
    "explain": "Duplicates cluster: same amount, same or adjacent dates, often one manual and one feed-added. Sorting detail by amount within an account makes the pairs jump out for review against the statement."
  },
  {
    "id": "cleanup-9",
    "section": "cleanup",
    "topic": "Suspense discipline",
    "difficulty": "medium",
    "q": "During cleanup, what is a suspense/ask-client account for?",
    "choices": [
      "Permanently hiding transactions too hard to categorize",
      "Parking true unknowns visibly until answers arrive, targeting zero",
      "Boosting expenses ahead of the tax filing",
      "A nicer name for the Uncategorized Expense account"
    ],
    "answer": 1,
    "explain": "A working suspense account is honest scaffolding: it keeps unknowns visible and countable while questions are out. The finished file has it at zero — it is a workflow, not a destination."
  },
  {
    "id": "cleanup-10",
    "section": "cleanup",
    "topic": "Scope the damage first",
    "difficulty": "medium",
    "q": "Before quoting a cleanup, the smart first pass establishes",
    "choices": [
      "fonts and logo styling for the client reports",
      "the last reliable point — reconciliation, filed return — and the volume since",
      "which expense categories the client prefers to see",
      "whether the client should switch accounting software"
    ],
    "answer": 1,
    "explain": "Cleanup is scoped backward from the last trustworthy anchor — last clean reconciliation and last filed return — plus the transaction volume between there and today. That is what turns 'it's a mess' into hours and a price."
  },
  {
    "id": "cleanup-11",
    "section": "cleanup",
    "topic": "Reclassify tool",
    "difficulty": "medium",
    "q": "Dozens of transactions hit the wrong expense account. The efficient fix in QBO Accountant is",
    "choices": [
      "opening and editing each transaction one at a time",
      "the Reclassify tool, moving them in bulk to the right account",
      "one journal entry moving the summed total across",
      "deleting the batch and re-entering it fresh"
    ],
    "answer": 1,
    "explain": "Reclassify moves batches while preserving each transaction's identity, vendor and date. A lump journal entry fixes the totals but leaves every underlying record wrong — the mess is still there under a rug."
  },
  {
    "id": "cleanup-12",
    "section": "cleanup",
    "topic": "Undeposited Funds cleanup",
    "difficulty": "medium",
    "q": "Cleaning a stale Undeposited Funds balance means",
    "choices": [
      "journaling the balance to income to zero it quickly",
      "pairing each stuck payment with its real deposit and removing the duplicates",
      "deleting all of the stuck customer payments",
      "making the Undeposited Funds account inactive"
    ],
    "answer": 1,
    "explain": "Each stuck payment usually has a twin: a feed deposit added as income. Rebuild the deposit from UF (or match properly) and remove the duplicate, and both the UF balance and the inflated income unwind together. Journaling over it leaves customers' payment history wrong."
  },
  {
    "id": "cleanup-13",
    "section": "cleanup",
    "topic": "OBE cleanup",
    "difficulty": "medium",
    "q": "Opening Balance Equity holds $9,412 from setup years ago. The cleanup is to",
    "choices": [
      "leave it alone — QBO created it during initial setup",
      "trace its origin and reclassify to proper equity, with the accountant's nod",
      "write the whole balance off to miscellaneous expense",
      "delete the account and let QBO reallocate the balance"
    ],
    "answer": 1,
    "explain": "OBE entries come from opening balances and imports; each traces to something. Once understood, the balance moves to owner equity/retained earnings or gets corrected at its source. It should end at zero."
  },
  {
    "id": "cleanup-14",
    "section": "cleanup",
    "topic": "Documentation of the cleanup",
    "difficulty": "medium",
    "q": "Why keep a change log of significant cleanup entries?",
    "choices": [
      "QBO will not save adjustments without a log entry",
      "so accountant and client can see what moved and why, and review or unwind it",
      "to justify billing additional cleanup hours",
      "logs are unnecessary since the audit log already exists"
    ],
    "answer": 1,
    "explain": "The audit log shows what changed, not why. A short memo trail — what was found, the fix, the accounts touched — is what turns a pile of adjustments into reviewable work, especially before a tax pro relies on it."
  },
  {
    "id": "cleanup-15",
    "section": "cleanup",
    "topic": "Journal entries in cleanup",
    "difficulty": "medium",
    "q": "Why are journal entries a last resort against A/R and A/P during cleanup?",
    "choices": [
      "Journal entries cannot post to those accounts at all",
      "JEs move the control totals without touching the customer and vendor detail",
      "QBO requires accountant approval for JEs there",
      "such entries double-post against control accounts"
    ],
    "answer": 1,
    "explain": "A/R and A/P are the sum of their named detail. A JE fixes the balance sheet number while the aging still shows the old story — the file looks clean until anyone opens a customer or vendor report. Use the proper forms."
  },
  {
    "id": "cleanup-16",
    "section": "cleanup",
    "topic": "Verify against outside truth",
    "difficulty": "medium",
    "q": "A cleanup is credibly finished when",
    "choices": [
      "the QBO dashboard shows no red warning badges",
      "each balance sheet line ties out — statements, agings, lender balances",
      "the P&L simply looks reasonable to the eye",
      "the bank feed's For Review queue is finally empty"
    ],
    "answer": 1,
    "explain": "Outside corroboration is the standard: banks and cards reconciled, loans tied to lender statements, A/R and A/P agings sanity-checked, payroll liabilities tied to filings. Internal tidiness alone proves formatting, not truth."
  },
  {
    "id": "je-1",
    "section": "je",
    "topic": "When JEs are right",
    "difficulty": "medium",
    "q": "Which task is a proper use of a journal entry in QBO?",
    "choices": [
      "Recording a customer invoice",
      "Booking monthly depreciation on fixed assets",
      "Paying a vendor bill",
      "Recording a bank deposit of customer checks"
    ],
    "answer": 1,
    "explain": "Depreciation, accruals, and reclassifications have no form of their own — that is journal entry territory. Sales, payments, bills and deposits have dedicated forms that maintain the sub-ledgers."
  },
  {
    "id": "je-2",
    "section": "je",
    "topic": "Depreciation entry",
    "difficulty": "easy",
    "q": "The monthly depreciation entry is",
    "choices": [
      "debit depreciation expense, credit accumulated depreciation",
      "debit the asset, credit cash",
      "debit accumulated depreciation, credit expense",
      "debit expense, credit the bank account"
    ],
    "answer": 0,
    "explain": "Depreciation never touches cash. The expense hits the P&L and the contra-asset grows, reducing the asset's net book value on the balance sheet."
  },
  {
    "id": "je-3",
    "section": "je",
    "topic": "Accrued expenses",
    "difficulty": "medium",
    "q": "December's $1,400 utility bill will not arrive until January, and the books close monthly on accrual. December needs",
    "choices": [
      "nothing — just record it when it arrives in January",
      "a JE debiting utilities expense and crediting accrued liabilities, reversed later",
      "a vendor bill dated December for an estimated amount, never adjusted",
      "a memo noting the bill is expected soon"
    ],
    "answer": 1,
    "explain": "Accrual books put the expense in the month it was incurred. The accrual (often set to auto-reverse) holds December right; January's actual bill then lands against the reversal instead of double-counting."
  },
  {
    "id": "je-4",
    "section": "je",
    "topic": "Reversing entries",
    "difficulty": "medium",
    "q": "Why mark an accrual journal entry as reversing in the next period?",
    "choices": [
      "So QBO deletes the entry automatically at year end",
      "So it un-books itself when the actual transaction arrives — no double count",
      "To hide the accrual from the standard reports",
      "Reversing entries apply only to bank accounts"
    ],
    "answer": 1,
    "explain": "The reversal un-books the estimate on day one of the new period; the real bill or payroll then posts normally. Without it, someone must remember to unwind each accrual by hand."
  },
  {
    "id": "je-5",
    "section": "je",
    "topic": "Prepaid expenses",
    "difficulty": "medium",
    "q": "A $2,400 annual insurance premium is paid in July. The accrual treatment is",
    "choices": [
      "expense the full $2,400 in July when paid",
      "book a prepaid asset and expense $200 monthly over the coverage year",
      "hold the cost and expense all of it in December for taxes",
      "record the payment as an owner's draw"
    ],
    "answer": 1,
    "explain": "The payment buys twelve months of coverage, so the cost belongs to twelve months. A monthly recurring JE amortizes the prepaid — a very common adjusting-entry rhythm."
  },
  {
    "id": "je-6",
    "section": "je",
    "topic": "JEs and sub-ledgers",
    "difficulty": "medium",
    "q": "What goes wrong when a journal entry posts directly to Accounts Receivable without a customer name?",
    "choices": [
      "Nothing goes wrong — A/R behaves like any other account",
      "The A/R total stops tying to the customer aging; cash-basis reports misbehave",
      "QBO refuses to save journal entries touching A/R at all",
      "The customer automatically receives an emailed statement"
    ],
    "answer": 1,
    "explain": "QBO requires a name on A/R and A/P journal lines precisely because those accounts are sums of customer and vendor detail. Even with a name, JEs there create unapplied amounts — the forms keep things linked properly."
  },
  {
    "id": "je-7",
    "section": "je",
    "topic": "Payroll from a service",
    "difficulty": "medium",
    "q": "Payroll runs through a third-party service that drafts the bank. Booking it usually means",
    "choices": [
      "one lump expense for the total bank draft",
      "split wages, employer taxes, withholdings and net pay so each lands right",
      "nothing — the payroll service keeps the records",
      "recording each employee's net pay as a vendor payment"
    ],
    "answer": 1,
    "explain": "The bank draft is net pay plus taxes, but the books need gross wages expense, employer tax expense, and the liability movements. Most services publish a journal-entry summary; the bookkeeper mirrors it."
  },
  {
    "id": "je-8",
    "section": "je",
    "topic": "Loans and interest split",
    "difficulty": "medium",
    "q": "A year of loan payments was booked entirely to Loan Payable; interest was never recorded. The year-end fix is",
    "choices": [
      "leave it alone — the loan will simply pay off early",
      "a JE moving the year's interest from the loan balance into interest expense",
      "debit the loan and credit cash a second time",
      "start splitting next year and let this year stand"
    ],
    "answer": 1,
    "explain": "The lender's year-end statement gives actual interest paid. One JE moves that amount from the liability into interest expense, and the loan balance ties to the lender again."
  },
  {
    "id": "je-9",
    "section": "je",
    "topic": "Correcting classifications",
    "difficulty": "medium",
    "q": "$600 of meals was posted to office supplies all year. Beyond fixing the transactions, when is a single reclassifying JE acceptable instead?",
    "choices": [
      "never — reclassifying entries are always improper",
      "when item-level fixes are impractical and a memo documents the move",
      "whenever the correction happens after year end",
      "only when the amount moved exceeds $1,000"
    ],
    "answer": 1,
    "explain": "A documented reclass JE is a legitimate summary fix for pure P&L category moves. It is off-limits for A/R, A/P, banks and anything else with detail that must tie to a sub-ledger or statement."
  },
  {
    "id": "je-10",
    "section": "je",
    "topic": "Closing date interplay",
    "difficulty": "medium",
    "q": "An adjusting entry needs to post to a month protected by the closing date. The proper handling is",
    "choices": [
      "quietly remove the closing date, post, and restore it",
      "post with authorization via the password, knowing the exception report shows it",
      "email the entry to the accountant instead of posting it",
      "post it twice, once in each period, to be safe"
    ],
    "answer": 1,
    "explain": "The closing date exists to make prior-period changes deliberate and visible. Authorized adjustments go through with the password and show on the exceptions report; otherwise the correction belongs in the current period."
  },
  {
    "id": "je-11",
    "section": "je",
    "topic": "Owner contributions by JE",
    "difficulty": "easy",
    "q": "The owner covers a $500 business expense from a personal card. With no reimbursement planned, the entry is",
    "choices": [
      "debit the expense, credit owner contribution (equity)",
      "debit the expense, credit business cash",
      "ignore it — it was personal money",
      "debit equity, credit the expense"
    ],
    "answer": 0,
    "explain": "The business incurred the cost and the owner funded it — expense up, equity up. Crediting business cash would be wrong because business cash never moved."
  },
  {
    "id": "je-12",
    "section": "je",
    "topic": "Recurring adjustments",
    "difficulty": "easy",
    "q": "Depreciation and prepaid amortization entries repeat identically each month. The efficient setup is",
    "choices": [
      "retyping them monthly from a cheat sheet",
      "recurring journal entries scheduled in QBO",
      "one big entry at year end only",
      "asking the accountant to post them"
    ],
    "answer": 1,
    "explain": "Recurring JEs post the fixed adjustments on schedule, keeping monthly statements meaningful. A year-end lump works for taxes but ruins every interim P&L."
  },
  {
    "id": "je-13",
    "section": "je",
    "topic": "Finding what a JE did",
    "difficulty": "medium",
    "q": "A mystery journal entry moved $7,500 between accounts with no memo. The first investigative stop is",
    "choices": [
      "delete it and watch which reports change",
      "the audit log for author and timing, then what it was offsetting",
      "the bank feed, since journal entries originate there",
      "re-reconciling every month from January forward"
    ],
    "answer": 1,
    "explain": "Authorship and timing usually identify intent — a year-end pack from the tax accountant reads very differently from a random mid-month move. Deleting unexplained entries before understanding them creates the next mystery."
  },
  {
    "id": "je-14",
    "section": "je",
    "topic": "Tax-time adjustments",
    "difficulty": "medium",
    "q": "The tax preparer sends year-end adjusting entries after filing. The bookkeeper should",
    "choices": [
      "post them as dated so the books tie to the return, then set the closing date",
      "ignore them, since the return is already filed",
      "post only the entries that increase reported income",
      "convert each into individual dated transactions"
    ],
    "answer": 0,
    "explain": "Booking the accountant's AJEs aligns the file with the filed return — the anchor all future work hangs from. Then the period locks so the agreement survives."
  },
  {
    "id": "je-15",
    "section": "je",
    "topic": "Zero-sum discipline",
    "difficulty": "easy",
    "q": "QBO will not save a journal entry unless",
    "choices": [
      "total debits equal total credits",
      "it has a memo",
      "every line has a name",
      "it is under $10,000"
    ],
    "answer": 0,
    "explain": "Balance is enforced by the form itself. Memos and names are discipline (and required on A/R//A/P lines), but the debit-credit equality is the hard rule."
  },
  {
    "id": "je-16",
    "section": "je",
    "topic": "Accrued revenue",
    "difficulty": "medium",
    "q": "Work completed in March will be invoiced in April. Accrual books that close March cleanly would",
    "choices": [
      "accrue it in March as unbilled revenue, reversing when invoiced",
      "wait until the April invoice to record any of it",
      "book the customer's expected payment as cash now",
      "backdate April's invoice into March at billing time"
    ],
    "answer": 0,
    "explain": "Earned-but-unbilled revenue belongs to March; the reversing accrual hands off to April's real invoice. Backdating invoices muddles A/R aging and sales tax periods."
  },
  {
    "id": "reports-1",
    "section": "reports",
    "topic": "The core statements",
    "difficulty": "easy",
    "q": "Which pair of reports forms the heart of monthly financials?",
    "choices": [
      "Profit and Loss, and Balance Sheet",
      "Audit Log and Journal",
      "A/R Aging and A/P Aging",
      "Budget vs Actual and Forecast"
    ],
    "answer": 0,
    "explain": "The P&L shows performance over the period; the balance sheet shows position at the period end. The agings and cash flow support them, but those two are the statements."
  },
  {
    "id": "reports-2",
    "section": "reports",
    "topic": "Cash vs accrual toggle",
    "difficulty": "medium",
    "q": "What does switching a QBO report between cash and accrual basis change?",
    "choices": [
      "Nothing visible changes anywhere on the report",
      "Whether open invoices and unpaid bills count toward the totals",
      "Only the report's formatting and font change",
      "The fiscal year the report covers changes"
    ],
    "answer": 1,
    "explain": "The toggle re-times income and expenses. A company with big open A/R can look rich on accrual and thin on cash — knowing which basis the client files taxes on decides which view matters."
  },
  {
    "id": "reports-3",
    "section": "reports",
    "topic": "Negative balance red flags",
    "difficulty": "medium",
    "q": "Which balance sheet line most deserves investigation?",
    "choices": [
      "Positive checking balance",
      "Negative accounts receivable",
      "Positive retained earnings",
      "A loan balance under $10,000"
    ],
    "answer": 1,
    "explain": "Assets running negative (or liabilities positive-when-they-should-be-negative) mean workflow errors — unapplied payments, doubled deposits, payments without bills. Negative balances are the balance sheet waving for help."
  },
  {
    "id": "reports-4",
    "section": "reports",
    "topic": "P&L review technique",
    "difficulty": "medium",
    "q": "The fastest way to spot miscodings on a P&L is",
    "choices": [
      "reading the account list alphabetically top to bottom",
      "run it by month and scan for spikes, gaps, and brand-new accounts",
      "checking only the bottom-line total for reasonableness",
      "printing it out and filing it for the records"
    ],
    "answer": 1,
    "explain": "The month-by-month view exposes rhythm breaks: rent missing in March, double insurance in July, a new account with one big number. Anomalies in the pattern are the audit trail of mistakes."
  },
  {
    "id": "reports-5",
    "section": "reports",
    "topic": "Comparative reports",
    "difficulty": "easy",
    "q": "A P&L with a previous-year comparison column is most useful for",
    "choices": [
      "catching category drift and unusual swings against the prior period",
      "collecting outstanding customer payments more quickly",
      "calculating each employee's payroll withholding",
      "replacing the monthly bank reconciliation entirely"
    ],
    "answer": 0,
    "explain": "Prior-period comparison turns judgment into arithmetic: office supplies doubled, revenue moved but COGS did not. Percent-change columns sharpen it further."
  },
  {
    "id": "reports-6",
    "section": "reports",
    "topic": "Statement of cash flows",
    "difficulty": "medium",
    "q": "Profit was $40,000 but cash fell. Which report explains where the money went?",
    "choices": [
      "The statement of cash flows",
      "The sales by customer report",
      "The reconciliation report",
      "The audit log"
    ],
    "answer": 0,
    "explain": "The cash flow statement bridges net income to cash movement — receivables growing, debt repaid, equipment bought, draws taken. It answers the owner's favorite question: where did the money go?"
  },
  {
    "id": "reports-7",
    "section": "reports",
    "topic": "Transaction detail by account",
    "difficulty": "medium",
    "q": "To see every transaction inside one expense account for the year, run",
    "choices": [
      "Transaction Detail by Account (or drill into the P&L line)",
      "the balance sheet as of year end",
      "the customer contact list export",
      "the reconciliation reports for the year"
    ],
    "answer": 0,
    "explain": "Drill-down detail is where category review actually happens — each line with date, name, memo and amount. Summary totals hide everything interesting."
  },
  {
    "id": "reports-8",
    "section": "reports",
    "topic": "Custom reports and saving",
    "difficulty": "easy",
    "q": "A monthly board package needs the same customized P&L every month. The efficient QBO habit is",
    "choices": [
      "rebuilding the column setup from scratch monthly",
      "saving the customization and scheduling the emailed copy",
      "screenshotting last month's version and reusing it",
      "exporting the whole general ledger instead"
    ],
    "answer": 1,
    "explain": "Saved customizations preserve filters, columns and headers; scheduled emails deliver them without anyone remembering. Rebuilding by hand invites inconsistency."
  },
  {
    "id": "reports-9",
    "section": "reports",
    "topic": "Class and location tracking",
    "difficulty": "medium",
    "q": "A client wants profitability by store location. The QBO feature built for that is",
    "choices": [
      "separate bank accounts opened per store",
      "class or location tracking tagged on each transaction",
      "one separate QBO company file per store",
      "location codes typed into every memo field"
    ],
    "answer": 1,
    "explain": "Classes and locations dimension the same books, so one P&L can split by store, program or line of business. It only works as well as the tagging discipline behind it."
  },
  {
    "id": "reports-10",
    "section": "reports",
    "topic": "Aging reports cadence",
    "difficulty": "easy",
    "q": "Before month-end close, which reports get a standard review pass?",
    "choices": [
      "the A/R and A/P agings, sanity-checked with the client",
      "only the profit and loss statement",
      "the complete audit log for the month",
      "the sales tax rate tables for each state"
    ],
    "answer": 0,
    "explain": "Agings are where workflow errors surface as impossible balances — negative lines, ancient invoices, vendors doubled. Reviewing them monthly keeps the close honest."
  },
  {
    "id": "reports-11",
    "section": "reports",
    "topic": "Retained earnings changed",
    "difficulty": "medium",
    "q": "Last year's retained earnings on this year's balance sheet no longer matches the filed statements. The cause is",
    "choices": [
      "QBO recalculated prior balances during an update",
      "someone posted, edited or deleted transactions dated in the closed year",
      "retained earnings naturally drifts as markets move",
      "the bank restated the prior year's interest income"
    ],
    "answer": 1,
    "explain": "Retained earnings moves only from prior-year P&L activity. A changed figure means closed-year transactions changed — the closing date exception report and audit log will name the culprits."
  },
  {
    "id": "reports-12",
    "section": "reports",
    "topic": "Management vs tax view",
    "difficulty": "medium",
    "q": "Why might a monthly management P&L differ from what the tax return eventually shows?",
    "choices": [
      "someone must be manipulating the numbers",
      "basis differences and tax-only adjustments the accountant applies at year end",
      "QBO rounds amounts differently during the tax season",
      "they should never differ if the bookkeeper is competent"
    ],
    "answer": 1,
    "explain": "Books serve decisions; returns serve tax law. Basis differences and tax-only adjustments (Section 179, meals percentage, amortization) are expected — reconciled by the accountant's year-end entries, not by suspicion."
  },
  {
    "id": "reports-13",
    "section": "reports",
    "topic": "Sales by item",
    "difficulty": "easy",
    "q": "To see which services actually make the money, run",
    "choices": [
      "Sales by Product/Service Summary",
      "the balance sheet",
      "deposit detail",
      "the vendor list"
    ],
    "answer": 0,
    "explain": "Item-level sales reporting shows volume and revenue per offering — and it is only as good as the item mapping on invoices, which is why item hygiene matters."
  },
  {
    "id": "reports-14",
    "section": "reports",
    "topic": "Report date traps",
    "difficulty": "medium",
    "q": "A P&L run for \"Last Month\" in early January shows December, but the same saved report opened in March shows February. Why?",
    "choices": [
      "QBO has a long-standing date-handling bug",
      "Relative date ranges move with the calendar; fixed custom dates do not",
      "someone edited the saved report's date settings",
      "the company's fiscal year setting changed"
    ],
    "answer": 1,
    "explain": "Relative ranges (Last Month, This Year-to-date) are conveniences that follow today's date. Anything being filed, sent or archived should use explicit dates."
  },
  {
    "id": "reports-15",
    "section": "reports",
    "topic": "Gross margin sanity",
    "difficulty": "medium",
    "q": "Gross margin has always run near 55% and suddenly reports 78% for a month. The first suspicion is",
    "choices": [
      "the business improved dramatically overnight",
      "miscoding: COGS posted elsewhere, revenue doubled, or inventory missing",
      "customers paid their invoices faster than usual",
      "the report accidentally ran on the wrong basis"
    ],
    "answer": 1,
    "explain": "Stable ratios breaking sharply usually indicts the bookkeeping before the business. Drill the month: where did COGS go, and did revenue double anywhere?"
  },
  {
    "id": "reports-16",
    "section": "reports",
    "topic": "Sharing with the accountant",
    "difficulty": "easy",
    "q": "The year-end handoff to the tax accountant typically includes",
    "choices": [
      "the owner's admin password shared on a sticky note",
      "accountant access plus the standard package: statements, GL detail, agings",
      "only the twelve bank statements in a shared folder",
      "a verbal summary delivered over a scheduled call"
    ],
    "answer": 1,
    "explain": "Accountant users get proper tools without consuming a user seat, and the standard reports let them tie the file out. Clean handoffs are part of the bookkeeper's job description."
  },
  {
    "id": "taxpay-1",
    "section": "taxpay",
    "topic": "Sales tax is a liability",
    "difficulty": "medium",
    "q": "Sales tax collected from customers is recorded as",
    "choices": [
      "income, since customers paid it",
      "a liability owed to the tax agency until remitted",
      "a reduction of expenses",
      "the seller's fee for collecting it"
    ],
    "answer": 1,
    "explain": "The business collects sales tax as the state's agent — it is never revenue. QBO's sales tax center accrues it to a payable; remittance clears the liability, not an expense."
  },
  {
    "id": "taxpay-2",
    "section": "taxpay",
    "topic": "Recording the remittance",
    "difficulty": "medium",
    "q": "Paying the quarterly sales tax through QBO's sales tax center (rather than an ordinary expense) matters because",
    "choices": [
      "it takes fewer clicks than entering an expense",
      "it clears the sales tax liability and keeps the agency periods accurate",
      "state agencies require payments made through QBO",
      "ordinary expense entries cannot exceed $5,000"
    ],
    "answer": 1,
    "explain": "Recording the payment as a plain expense leaves the liability standing and double-counts the cost. The sales tax center ties payments to filing periods so the payable rolls correctly."
  },
  {
    "id": "taxpay-3",
    "section": "taxpay",
    "topic": "Payroll wage expense",
    "difficulty": "medium",
    "q": "An employee grosses $5,000; take-home is $3,800 after $1,200 of withholdings. Wage expense is",
    "choices": [
      "$3,800 — the amount that actually left the bank",
      "$5,000, with the $1,200 withheld sitting as a liability until remitted",
      "$6,200 — gross pay plus the withheld amounts",
      "whatever the payroll service invoiced for the run"
    ],
    "answer": 1,
    "explain": "Gross pay is the cost of labor. Withholdings are the employee's money the company holds in trust — a liability, not a saving. Booking net pay as the whole expense understates wages every period."
  },
  {
    "id": "taxpay-4",
    "section": "taxpay",
    "topic": "Employer payroll taxes",
    "difficulty": "medium",
    "q": "Beyond gross wages, the employer's own payroll cost includes",
    "choices": [
      "the employee's income tax withholding",
      "employer FICA match, and unemployment taxes (FUTA/SUTA)",
      "the employee's 401(k) deferral",
      "nothing — taxes are all withheld"
    ],
    "answer": 1,
    "explain": "The employer matches Social Security and Medicare and pays unemployment taxes on top of gross wages. Withholdings and employee deferrals come out of the employee's gross, not in addition to it."
  },
  {
    "id": "taxpay-5",
    "section": "taxpay",
    "topic": "Payroll liabilities on the books",
    "difficulty": "medium",
    "q": "Right after a payroll run, the balance sheet should show",
    "choices": [
      "no new balances anywhere on the balance sheet",
      "liabilities for withheld and employer taxes until they are remitted",
      "a receivable due from each employee",
      "additional income from the payroll run"
    ],
    "answer": 1,
    "explain": "Between the pay run and the tax deposits, the withheld and accrued amounts are payables. If the service drafts everything on payday, the liabilities clear same-day — but the entry still books them."
  },
  {
    "id": "taxpay-6",
    "section": "taxpay",
    "topic": "Payroll clearing drafts",
    "difficulty": "medium",
    "q": "The payroll provider drafts one combined amount from the bank each payday. The books should",
    "choices": [
      "book the draft as one Payroll expense line and move on",
      "mirror the provider's journal so wages, taxes and liabilities post distinctly",
      "exclude the draft from the bank feed entirely",
      "record it as a transfer to the payroll provider"
    ],
    "answer": 1,
    "explain": "One lump 'Payroll' expense hides the structure the P&L and any filings need. Most services publish the journal breakdown; the feed draft then matches the clearing/bank side of it."
  },
  {
    "id": "taxpay-7",
    "section": "taxpay",
    "topic": "Estimated taxes of the owner",
    "difficulty": "medium",
    "q": "A sole proprietor pays personal quarterly estimated income taxes from the business account. That payment is",
    "choices": [
      "a deductible tax expense of the business",
      "an owner's draw — personal income tax is not a business expense",
      "a payroll tax liability of the company",
      "deductible interest on the amount of tax owed"
    ],
    "answer": 1,
    "explain": "The proprietor's income tax is a personal obligation on the combined return. Paid from business funds, it is a draw. Booking it as business tax expense is a frequent cleanup correction."
  },
  {
    "id": "taxpay-8",
    "section": "taxpay",
    "topic": "1099 exclusion for card payments",
    "difficulty": "medium",
    "q": "A contractor was paid $2,000 by check and $3,000 by credit card during the year. The 1099-NEC reports",
    "choices": [
      "$5,000, the full amount paid during the year",
      "$2,000 — the card portion is excluded; processors report it on 1099-K",
      "$3,000, since only card payments qualify",
      "nothing, since neither method alone reached $5,000"
    ],
    "answer": 1,
    "explain": "Cash, check and ACH count toward the 1099-NEC; card and payment-network amounts are the processor's to report. Payment-method accuracy in the vendor records is what makes January painless."
  },
  {
    "id": "taxpay-9",
    "section": "taxpay",
    "topic": "Contractor payments report",
    "difficulty": "easy",
    "q": "The January 1099 prep in QBO leans on which data being right all year?",
    "choices": [
      "vendor 1099 flags, W-9 details, and payment methods on transactions",
      "the display colors chosen for vendor avatars",
      "customer credit limits set in the sales settings",
      "the year-end physical inventory count sheets"
    ],
    "answer": 0,
    "explain": "QBO's 1099 flow filters by vendor eligibility, maps accounts, and excludes card payments automatically — if the underlying flags and methods were kept clean. Garbage in, filings wrong."
  },
  {
    "id": "taxpay-10",
    "section": "taxpay",
    "topic": "Sales tax on invoices",
    "difficulty": "medium",
    "q": "Whether an invoice line gets sales tax in QBO is driven by",
    "choices": [
      "the total dollar amount billed on the invoice",
      "item taxability, customer tax status, and location rate rules",
      "the payment method the customer plans to use",
      "the calendar month in which the sale happens"
    ],
    "answer": 1,
    "explain": "Taxability lives on items and customers; the automated center applies location rates. A taxable item marked nontaxable undercollects all year — an expensive quiet error."
  },
  {
    "id": "taxpay-11",
    "section": "taxpay",
    "topic": "Exempt customers",
    "difficulty": "medium",
    "q": "A wholesale customer claims sales tax exemption. Before invoicing them tax-free, the bookkeeper should",
    "choices": [
      "take the customer's word and stop charging tax",
      "collect the exemption certificate for the file, then mark them exempt",
      "keep charging them tax anyway just to stay safe",
      "email the state for permission on each invoice"
    ],
    "answer": 1,
    "explain": "The certificate is the documentation that survives a sales tax audit. Marking the customer exempt without one leaves the business holding the liability if the state disagrees."
  },
  {
    "id": "taxpay-12",
    "section": "taxpay",
    "topic": "Payroll corrections",
    "difficulty": "medium",
    "q": "A paycheck was recorded with the wrong hours through the payroll service. The correction path is",
    "choices": [
      "a journal entry adjusting the wages accounts",
      "fix it in the payroll service so filings stay right",
      "editing the bank feed line to the right amount",
      "paying the difference as a vendor payment"
    ],
    "answer": 1,
    "explain": "Payroll corrections must live where the tax filings are produced. Journal-entry patches make the books disagree with the 941s and W-2s the service files."
  },
  {
    "id": "taxpay-13",
    "section": "taxpay",
    "topic": "Owner health and benefits nuance",
    "difficulty": "medium",
    "q": "Why do owner benefits (health premiums, retirement) deserve a flag to the tax preparer rather than silent categorization?",
    "choices": [
      "owner benefits are always personal, never business",
      "treatment varies by entity type — S corp premiums have W-2 reporting rules",
      "benefits paid by a business are always illegal",
      "they never affect taxes no matter the entity"
    ],
    "answer": 1,
    "explain": "Entity type changes everything: an S corp 2% shareholder's health premiums belong in W-2 wages, a proprietor's are a personal-return deduction. The bookkeeper's job is to code consistently and surface it, not to improvise."
  },
  {
    "id": "taxpay-14",
    "section": "taxpay",
    "topic": "Sales tax payable balance check",
    "difficulty": "medium",
    "q": "The sales tax payable balance should periodically be verified against",
    "choices": [
      "the year-to-date income total on the P&L",
      "the sales tax center's owed amounts and the recent filings",
      "the owner's recollection of payments made",
      "the account's balance at this time last year"
    ],
    "answer": 1,
    "explain": "Payable-to-filings agreement is the sales tax reconciliation. Drift means payments were booked outside the center or invoices changed after filing — both findable, both fixable."
  },
  {
    "id": "taxpay-15",
    "section": "taxpay",
    "topic": "Workers comp and other accruals",
    "difficulty": "medium",
    "q": "Pay-as-you-go workers compensation drafted with each payroll is booked as",
    "choices": [
      "an owner's draw taken out of the business",
      "insurance expense, payroll-adjacent — not a tax liability",
      "part of gross wages for each employee",
      "a fixed asset amortized over the policy"
    ],
    "answer": 1,
    "explain": "Workers comp is insurance priced off payroll, not a withholding. Keeping it out of the tax liability accounts keeps the payroll reconciliation clean."
  },
  {
    "id": "taxpay-16",
    "section": "taxpay",
    "topic": "Basis for filings",
    "difficulty": "medium",
    "q": "The client files income taxes on cash basis, but the books run accrual for management. At year end the bookkeeper should expect",
    "choices": [
      "no special handling of any kind at year end",
      "the preparer converts to cash basis; the books stay accrual",
      "deleting all open invoices before December 31",
      "amending the prior years to accrual basis"
    ],
    "answer": 1,
    "explain": "Books can serve management on accrual while returns file on cash — the report basis toggle and the accountant's workpapers bridge them. Knowing which basis governs which output prevents a lot of confusion."
  },
  {
    "id": "hygiene-1",
    "section": "hygiene",
    "topic": "Source documents",
    "difficulty": "easy",
    "q": "Why attach receipts and bills to transactions in QBO?",
    "choices": [
      "attachments make large reports load faster",
      "documents answer future questions — audits, disputes, handoffs",
      "QBO requires an attachment before saving",
      "attachments lower the subscription price"
    ],
    "answer": 1,
    "explain": "A categorized transaction says what you decided; the attached document proves why. Receipt capture (email-in, mobile snap) makes the habit nearly free."
  },
  {
    "id": "hygiene-2",
    "section": "hygiene",
    "topic": "Month-end close checklist",
    "difficulty": "medium",
    "q": "A solid month-end close checklist includes",
    "choices": [
      "reconcile, clear queues, review agings, post adjustments, lock",
      "running the P&L and calling the month closed",
      "rotating every user password for the new month",
      "archiving the company file to offline storage"
    ],
    "answer": 0,
    "explain": "The close is a repeatable sequence, not an event. The list is what makes months comparable and keeps cleanup from accumulating — and the closing date at the end locks the work in."
  },
  {
    "id": "hygiene-3",
    "section": "hygiene",
    "topic": "Memos that help",
    "difficulty": "easy",
    "q": "The most useful transaction memo reads like",
    "choices": [
      "\"misc — see folder\"",
      "\"March window repair — Hendersen job, insurance claim #4417\"",
      "the dollar amount repeated in the memo box",
      "nothing at all — memos are optional noise"
    ],
    "answer": 1,
    "explain": "Memos are messages to the future: the reviewer, the accountant, yourself in eleven months. Specifics about what and why age well; 'misc' ages into a question."
  },
  {
    "id": "hygiene-4",
    "section": "hygiene",
    "topic": "User access",
    "difficulty": "medium",
    "q": "The client's spouse, the sales manager and the bookkeeper all log in as the same admin user. The problem is",
    "choices": [
      "the extra per-seat license fees each month",
      "the audit log can't tell anyone apart; separate users with roles fix that",
      "QBO limits each company file to two logins",
      "nothing — shared admin logins are standard practice"
    ],
    "answer": 1,
    "explain": "Accountability requires identity. Individual users with least-privilege roles make the audit log meaningful and reduce accidental damage from over-permissioned logins."
  },
  {
    "id": "hygiene-5",
    "section": "hygiene",
    "topic": "Naming conventions",
    "difficulty": "easy",
    "q": "Consistent vendor and customer naming matters mostly because",
    "choices": [
      "it simply looks more professional to the client",
      "reports, merges, 1099s and searches all depend on one name per entity",
      "QBO charges by the number of list names",
      "the names print on the physical check stock"
    ],
    "answer": 1,
    "explain": "Every duplicate name splits history. One convention (legal name, consistent abbreviations) applied at creation beats merge surgery later."
  },
  {
    "id": "hygiene-6",
    "section": "hygiene",
    "topic": "Backups and exports",
    "difficulty": "medium",
    "q": "QBO is cloud-hosted. Why still export period-end reports (GL, statements, agings) to files?",
    "choices": [
      "cloud files lose data on a regular basis",
      "snapshots survive later edits — what was reported stays on record",
      "Intuit's terms of service require the exports",
      "exports make the internet connection faster"
    ],
    "answer": 1,
    "explain": "The live file is always current, which is exactly the problem: it can drift from what was filed or sent. Archived exports (and reconciliation reports) freeze the record."
  },
  {
    "id": "hygiene-7",
    "section": "hygiene",
    "topic": "Working the For Review queue",
    "difficulty": "easy",
    "q": "A healthy bank feed routine keeps the For Review tab",
    "choices": [
      "near zero, worked on a regular schedule",
      "full, as a to-do list for year end",
      "hidden from the client",
      "auto-added by rules across the board"
    ],
    "answer": 0,
    "explain": "The queue is a staging area, not storage. A weekly (or daily, in volume) pass keeps the books current — which is what makes every report trustworthy on demand."
  },
  {
    "id": "hygiene-8",
    "section": "hygiene",
    "topic": "Questions for the client",
    "difficulty": "medium",
    "q": "The best way to handle transactions only the client can explain is",
    "choices": [
      "make a reasonable guess and keep the queue moving",
      "batch them into a periodic question list, then book answers with memos",
      "call the client immediately about each one",
      "code everything unclear to miscellaneous"
    ],
    "answer": 1,
    "explain": "A batched ask-list respects everyone's time and produces documented answers. Guessing plants errors; per-transaction calls train clients to dodge the bookkeeper."
  },
  {
    "id": "hygiene-9",
    "section": "hygiene",
    "topic": "Mixing business and personal",
    "difficulty": "medium",
    "q": "A client constantly pays personal expenses from the business account. Beyond booking draws, the bookkeeper's move is",
    "choices": [
      "quietly absorb the pattern as part of the job",
      "book the draws and flag the commingling risk to the client",
      "refuse to record any of the transactions",
      "report the activity to the client's bank"
    ],
    "answer": 1,
    "explain": "The bookkeeper records reality and surfaces the risk. Separate accounts is the standing recommendation; the draws/loan accounts keep the books right meanwhile."
  },
  {
    "id": "hygiene-10",
    "section": "hygiene",
    "topic": "Recurring templates audit",
    "difficulty": "medium",
    "q": "Recurring transactions should be reviewed periodically because",
    "choices": [
      "templates expire at the end of each month",
      "stale templates keep posting after rent changes or subscriptions end",
      "QBO deletes unused recurring templates yearly",
      "too many active templates slow the file down"
    ],
    "answer": 1,
    "explain": "Automation is faithful, including to outdated facts. A quarterly template review catches the $1,850 rent still posting at $1,600."
  },
  {
    "id": "hygiene-11",
    "section": "hygiene",
    "topic": "Undo vs redo work",
    "difficulty": "medium",
    "q": "Before bulk-fixing someone else's bookkeeping, the prudent first step is",
    "choices": [
      "export key reports first so the before-state is preserved",
      "delete the old work and start clean",
      "email Intuit support for a file backup",
      "switch the audit log off while working"
    ],
    "answer": 0,
    "explain": "A before-snapshot makes the cleanup reviewable and reversible in effect. The audit log can't be turned off — which protects you too."
  },
  {
    "id": "hygiene-12",
    "section": "hygiene",
    "topic": "Chart discipline over time",
    "difficulty": "easy",
    "q": "When a client wants a brand-new expense account for a one-off cost, the usual better answer is",
    "choices": [
      "create it anyway — accounts are free and detail never hurts",
      "an existing category plus a clear memo — new accounts are for recurring items",
      "park it in the suspense account instead",
      "book it to owner's draw to avoid deciding"
    ],
    "answer": 1,
    "explain": "Charts bloat one reasonable-sounding account at a time. The test: will this line change a decision on a report twelve months from now?"
  },
  {
    "id": "hygiene-13",
    "section": "hygiene",
    "topic": "Weekly rhythm",
    "difficulty": "easy",
    "q": "For a small service business, a sane weekly bookkeeping rhythm is",
    "choices": [
      "feeds and receipts weekly, invoicing on cycle, reconciliation monthly",
      "everything saved for one big January push",
      "reconciling every account at the end of each day",
      "reports generated only when someone asks"
    ],
    "answer": 0,
    "explain": "Little-and-often keeps the queue small and errors young. The monthly close then takes an hour, not a weekend."
  },
  {
    "id": "hygiene-14",
    "section": "hygiene",
    "topic": "Client communication in cleanup",
    "difficulty": "medium",
    "q": "Midway through a cleanup, the bookkeeper finds the prior person booked all loan payments as expenses. Telling the client means",
    "choices": [
      "name and blame the prior bookkeeper directly",
      "explain the finding, effect, fix, and tax follow-up — neutrally",
      "stay quiet to keep the relationship smooth",
      "fix everything silently and never mention it"
    ],
    "answer": 1,
    "explain": "Findings get communicated as facts with impacts and remedies — not blame theater, not silence. If filed returns were affected, the accountant joins the loop."
  },
  {
    "id": "hygiene-15",
    "section": "hygiene",
    "topic": "Access etiquette",
    "difficulty": "medium",
    "q": "The right way for an outside bookkeeper to access a client's QBO is",
    "choices": [
      "borrowing the owner's login credentials",
      "an invitation as an accountant user with their own identity",
      "a shared office password document",
      "screen-sharing while the owner clicks"
    ],
    "answer": 1,
    "explain": "Accountant-user invitations keep identity, permissions and the audit trail clean, and don't burn a user seat. Shared credentials break accountability for both sides."
  },
  {
    "id": "hygiene-16",
    "section": "hygiene",
    "topic": "Proving the work",
    "difficulty": "medium",
    "q": "Each month's deliverable to a hands-off client should minimally include",
    "choices": [
      "nothing at all — silence signals everything is fine",
      "statements, a short narrative, and the question list",
      "the complete general ledger printed end to end",
      "photocopies of every receipt from the month"
    ],
    "answer": 1,
    "explain": "A monthly package is both service and evidence: statements, two sentences of narrative, the ask-list. Clients renew bookkeepers whose work they can see."
  },
  {
    "id": "scenario-1",
    "section": "scenario",
    "topic": "Two years behind",
    "difficulty": "medium",
    "q": "\"Our books haven't been touched in two years.\" The strongest first answer in an interview is",
    "choices": [
      "\"I'd start entering the backlog of transactions immediately\"",
      "\"Anchor on the last reconciliation and filed return, then rebuild forward\"",
      "\"I'd start a brand-new company file and abandon the history\"",
      "\"Two years behind is beyond repair — I'd decline\""
    ],
    "answer": 1,
    "explain": "The anchor-then-rebuild answer shows method: establish trusted starting balances, work forward with feeds and statements, reconcile each month as you go. Jumping straight to data entry with no anchor rebuilds the mess."
  },
  {
    "id": "scenario-2",
    "section": "scenario",
    "topic": "Books disagree with the bank",
    "difficulty": "medium",
    "q": "The owner says \"QBO shows way more cash than the bank does.\" Your diagnostic instinct is",
    "choices": [
      "the bank's own records are simply wrong here",
      "doubled deposits or missed expenses; reconciliation history localizes it",
      "book a journal entry reducing cash until it matches",
      "switch every report to cash basis and move on"
    ],
    "answer": 1,
    "explain": "Book-over-bank usually means deposits doubled or money-out never recorded. The reconciliation trail (or its absence) says where agreement was last true — plugging the gap with a JE hides a findable cause."
  },
  {
    "id": "scenario-3",
    "section": "scenario",
    "topic": "Revenue looks doubled",
    "difficulty": "medium",
    "q": "A restaurant's QBO revenue is nearly twice its POS reports. The likely mechanics are",
    "choices": [
      "customers accidentally paying their bills twice",
      "POS daily sales entries AND the bank deposits both booked as income",
      "sales tax getting included in the sales totals",
      "tips being counted as revenue a second time"
    ],
    "answer": 1,
    "explain": "When a sales system posts revenue and the matching bank deposits are also added as income, revenue doubles neatly. The fix routes deposits against the sales already recorded (clearing account), never as fresh income."
  },
  {
    "id": "scenario-4",
    "section": "scenario",
    "topic": "Prioritizing a disaster",
    "difficulty": "medium",
    "q": "Given a messy file and two weeks before a loan application needs financials, the priority order is",
    "choices": [
      "perfecting every transaction memo before anything else",
      "reconcile banks and cards, tie out the balance sheet, then refine the P&L",
      "redesigning the chart of accounts first",
      "building next year's budget for the packet"
    ],
    "answer": 1,
    "explain": "Lenders read statements whose numbers must be defensible. Reconciliations and balance-sheet integrity create that; category refinement follows. Cosmetics last."
  },
  {
    "id": "scenario-5",
    "section": "scenario",
    "topic": "What is reconciliation, really",
    "difficulty": "easy",
    "q": "Asked in an interview \"why does reconciliation matter?\", the crisp answer is",
    "choices": [
      "\"it's a QBO feature that must be clicked every month\"",
      "\"the independent check that books agree with the bank — verified records\"",
      "\"it exists mainly to catch employee theft\"",
      "\"it makes month-end reports print faster\""
    ],
    "answer": 1,
    "explain": "Reconciliation is the control that turns bookkeeping into verified bookkeeping. Everything else — clean categories, pretty reports — stands on it."
  },
  {
    "id": "scenario-6",
    "section": "scenario",
    "topic": "Handling unknowns",
    "difficulty": "medium",
    "q": "\"What do you do with a transaction you can't identify?\" The professional answer is",
    "choices": [
      "\"code it to miscellaneous and keep the queue moving\"",
      "\"evidence first, unknowns parked visibly, questions batched — never guessed\"",
      "\"delete it unless someone eventually complains\"",
      "\"copy whatever the prior bookkeeper did with it\""
    ],
    "answer": 1,
    "explain": "The answer demonstrates both diligence (evidence first) and workflow maturity (visible suspense, batched questions). Guessing and deleting are the two disqualifying answers."
  },
  {
    "id": "scenario-7",
    "section": "scenario",
    "topic": "Confidentiality",
    "difficulty": "easy",
    "q": "A friend asks how much the client you keep books for makes. You",
    "choices": [
      "share it — it's just a friend",
      "keep client financial information confidential, full stop",
      "share it if the friend won't tell",
      "post it anonymously"
    ],
    "answer": 1,
    "explain": "Confidentiality is the profession's table stakes and usually contractual. Interviewers ask versions of this to hear the boundary stated without hedging."
  },
  {
    "id": "scenario-8",
    "section": "scenario",
    "topic": "Error you made",
    "difficulty": "medium",
    "q": "You discover your own posting error from three months ago, already inside reports the client used. You",
    "choices": [
      "fix it quietly and hope nobody ever notices",
      "disclose the effect and the fix; correct in the open period",
      "leave it alone to stay consistent with the reports",
      "point out the software made the entry possible"
    ],
    "answer": 1,
    "explain": "Owning errors with impact and remedy is what makes a bookkeeper trustable with money records. The quiet fix becomes a trust problem the day it's noticed."
  },
  {
    "id": "scenario-9",
    "section": "scenario",
    "topic": "Owner wants it miscoded",
    "difficulty": "medium",
    "q": "The owner asks you to code a family vacation as business travel. The professional response is",
    "choices": [
      "do it — their business, their books, their risk",
      "decline and book a draw; persistent pressure means walking away",
      "do it, but keep a private list of every instance",
      "negotiate coding half of it as business travel"
    ],
    "answer": 1,
    "explain": "Bookkeepers don't book fiction. The graceful script — 'I record it accurately; your tax pro decides deductibility' — plus a documented draw usually ends it. A client who insists is a client to fire."
  },
  {
    "id": "scenario-10",
    "section": "scenario",
    "topic": "Software beyond QBO",
    "difficulty": "easy",
    "q": "Asked about tools around QBO, a strong answer names",
    "choices": [
      "\"only QBO — nothing else matters for bookkeeping\"",
      "spreadsheet workpapers, receipt capture, payroll and payment tools",
      "\"video editing software for client updates\"",
      "\"none — extra tools just distract from the work\""
    ],
    "answer": 1,
    "explain": "The ecosystem answer shows real-world fluency: Excel for tie-outs, Dext/receipt capture, Gusto/ADP, Stripe/Square — each with its bookkeeping consequences. QBO is the hub, not the whole job."
  },
  {
    "id": "scenario-11",
    "section": "scenario",
    "topic": "First 30 days",
    "difficulty": "medium",
    "q": "\"What would your first month with our books look like?\" A strong shape is",
    "choices": [
      "\"I'd wait for assignments from the controller\"",
      "\"assess, stabilize the feeds, then propose a prioritized cleanup\"",
      "\"rebuild everything from scratch, starting day one\"",
      "\"install my favorite chart of accounts immediately\""
    ],
    "answer": 1,
    "explain": "Assess, stabilize, propose — the sequence shows judgment before action and gives the employer a decision point. Sweeping rebuilds promised on day one signal inexperience."
  },
  {
    "id": "scenario-12",
    "section": "scenario",
    "topic": "Cash-flow question from the owner",
    "difficulty": "medium",
    "q": "\"We're profitable — why is the bank account empty?\" Your explanation looks first at",
    "choices": [
      "\"profit means nothing until an auditor verifies it\"",
      "uncollected receivables, loan principal, draws — cash the P&L skips",
      "the bank's monthly service fees eating the balance",
      "the QBO subscription costs accumulating"
    ],
    "answer": 1,
    "explain": "The classic gaps between profit and cash: money earned but uncollected, and money out that isn't expense. Walking an owner through that calmly is a bookkeeper's everyday translation work."
  },
  {
    "id": "scenario-13",
    "section": "scenario",
    "topic": "Volume estimate honesty",
    "difficulty": "easy",
    "q": "Asked to estimate a cleanup you haven't seen, the credible answer is",
    "choices": [
      "\"a confident number on the spot wins work\"",
      "\"after a short diagnostic pass, I'll give a scoped estimate\"",
      "\"free — I'll absorb it to win the client\"",
      "\"cleanups are inherently impossible to estimate\""
    ],
    "answer": 1,
    "explain": "Diagnose-then-quote is how professionals price unknown messes. Instant numbers are either padded or wrong, and interviewers know it."
  },
  {
    "id": "scenario-14",
    "section": "scenario",
    "topic": "Knowing the boundary",
    "difficulty": "medium",
    "q": "The client asks whether to elect S corp status. The bookkeeper's lane is",
    "choices": [
      "decide for them, since you've seen elections work",
      "point it to their CPA or EA, offering to prepare the numbers that inform it",
      "tell them S corps always beat sole proprietorships",
      "deflect the question as being above the role"
    ],
    "answer": 1,
    "explain": "Entity elections, deductibility rulings and tax strategy belong to the credentialed tax professional. The bookkeeper's value is clean data and coordination — and interviewers listen for that boundary."
  },
  {
    "id": "scenario-15",
    "section": "scenario",
    "topic": "Why this stack answer",
    "difficulty": "easy",
    "q": "\"Why are you strong with QuickBooks cleanup specifically?\" The compelling shape of the answer is",
    "choices": [
      "\"I have watched a lot of tutorial videos\"",
      "name the breakages — UF pileups, doubled income — and their fixes",
      "\"software has always come intuitively to me\"",
      "\"honestly, cleanup work is mostly luck\""
    ],
    "answer": 1,
    "explain": "Naming the failure modes and their mechanics is what separates 'used QBO' from 'can rescue QBO.' Interviewers can't fake-proof passion, but they can hear pattern knowledge."
  },
  {
    "id": "scenario-16",
    "section": "scenario",
    "topic": "Staying current",
    "difficulty": "easy",
    "q": "Asked how you keep skills current, a solid answer includes",
    "choices": [
      "\"the software rarely changes in ways that matter\"",
      "ProAdvisor training, QBO updates, and accountant relationships",
      "\"I'll learn whatever breaks when it breaks\"",
      "\"my manager will flag anything important\""
    ],
    "answer": 1,
    "explain": "ProAdvisor certification is free, current, and names the exact skill set this role wants. Mentioning it — and that you're pursuing EA/CPA-track study — turns the question into an asset."
  }
];
