/* Recon Blitz question bank -- the reconciliation half of the Form 1120-S, 9 sections, 108 questions.
   Original content for the preparer who can finish page 1 but stalls on the
   back of the return: Schedule L, book retained earnings, Opening Balance
   Equity cleanup, Schedules M-1 and M-2, the AAA and OAA, Schedule K, and
   shareholder stock and debt basis. Choice order is shuffled at display time;
   'answer' is the correct index. Study aid only -- not tax advice for any
   actual corporation or return.
   FAR_SECTIONS/FAR_QUESTIONS global names keep the engine identical to FAR Blitz. */

var FAR_SECTIONS = [
  {
    "id": "schedl",
    "name": "Schedule L: The Balance Sheet",
    "short": "Schedule L",
    "emoji": "📊"
  },
  {
    "id": "retearn",
    "name": "Retained Earnings on the Books",
    "short": "Retained Earnings",
    "emoji": "💰"
  },
  {
    "id": "obe",
    "name": "Opening Balance Equity & Cleanup",
    "short": "Opening Balance",
    "emoji": "🧹"
  },
  {
    "id": "m1",
    "name": "Schedule M-1: Book to Tax",
    "short": "M-1",
    "emoji": "🔀"
  },
  {
    "id": "m2",
    "name": "Schedule M-2: AAA, OAA & E&P",
    "short": "M-2",
    "emoji": "⚖️"
  },
  {
    "id": "schedk",
    "name": "Schedule K & the K-1",
    "short": "Schedule K",
    "emoji": "📨"
  },
  {
    "id": "basis",
    "name": "Stock & Debt Basis",
    "short": "Basis",
    "emoji": "📈"
  },
  {
    "id": "tieout",
    "name": "Tying the Balances Together",
    "short": "Tie-Out",
    "emoji": "🔗"
  },
  {
    "id": "software",
    "name": "Drake: Autobalance & the Plug",
    "short": "Autobalance",
    "emoji": "⚠️"
  }
];

var FAR_QUESTIONS = [
  {
    "id": "schedl-01",
    "section": "schedl",
    "topic": "The small-corporation exception",
    "difficulty": "easy",
    "q": "A calendar-year S corporation has $180,000 of total receipts and $210,000 of total assets at year end. On its return, as to Schedules L and M-1, it",
    "choices": [
      "may leave both blank",
      "must complete Schedule L but may skip M-1",
      "must complete both as filed",
      "may skip both only by attaching Schedule M-3"
    ],
    "answer": 0,
    "explain": "Schedule B asks a single question with two tests, and both have to clear the $250,000 line -- total receipts under $250,000 and total assets at year end under $250,000. This corporation clears both, so Schedules L and M-1 are not required. Schedule M-2 is not excused by that test."
  },
  {
    "id": "schedl-02",
    "section": "schedl",
    "topic": "Loans from shareholders",
    "difficulty": "easy",
    "q": "A shareholder lends the corporation $60,000 under a signed note. On Schedule L the $60,000 belongs",
    "choices": [
      "on the liability side, on the loans from shareholders line",
      "on the asset side, with loans to shareholders",
      "in equity, as additional paid-in capital",
      "on the liability side, inside other current liabilities"
    ],
    "answer": 0,
    "explain": "Money the shareholder advances as debt is the corporation's liability and gets the dedicated loans-from-shareholders line rather than being buried in other liabilities. That same note is what creates the shareholder's debt basis. A capital contribution would land in paid-in capital instead and build stock basis."
  },
  {
    "id": "schedl-03",
    "section": "schedl",
    "topic": "Loans to shareholders",
    "difficulty": "easy",
    "q": "The corporation advances $25,000 to its sole shareholder and documents it as a note receivable. Schedule L reports it",
    "choices": [
      "as an asset, on the loans to shareholders line",
      "as a reduction of retained earnings",
      "as a distribution reducing paid-in capital",
      "as a contra-liability netted against loans from shareholders"
    ],
    "answer": 0,
    "explain": "A genuine loan out to a shareholder is an asset with its own Schedule L line. Whether it survives as a loan rather than being recharacterized as a distribution turns on the note, a market rate of interest and actual repayments — but on the balance sheet a documented note is an asset."
  },
  {
    "id": "schedl-04",
    "section": "schedl",
    "topic": "Accumulated depreciation",
    "difficulty": "easy",
    "q": "Buildings that cost $400,000 carry $150,000 of accumulated depreciation. Schedule L shows",
    "choices": [
      "$400,000 on the asset line and $150,000 on the accumulated depreciation line",
      "$250,000 on the asset line and nothing below it",
      "$250,000 on the asset line and $150,000 below it",
      "$400,000 on the asset line, with the $150,000 shown only on Form 4562"
    ],
    "answer": 0,
    "explain": "Schedule L pairs each depreciable asset line with an accumulated depreciation line directly beneath it, and only the net figure carries to the total. Putting the net amount on the asset line and leaving the contra line blank throws away the cost information the schedule is asking for."
  },
  {
    "id": "schedl-05",
    "section": "schedl",
    "topic": "Whose numbers Schedule L uses",
    "difficulty": "easy",
    "q": "The amounts on Schedule L are expected to agree with",
    "choices": [
      "the corporation's own books and records",
      "the shareholders' aggregate stock basis",
      "the accumulated adjustments account",
      "the tax basis of every asset and liability"
    ],
    "answer": 0,
    "explain": "The instructions ask for a balance sheet that agrees with the books. Differences between the books and the return are disclosed on Schedule M-1, not smoothed away inside the balance sheet. Basis and the AAA are separate tax accounts computed elsewhere, and they routinely differ from book equity."
  },
  {
    "id": "schedl-06",
    "section": "schedl",
    "topic": "Retained earnings against the AAA",
    "difficulty": "medium",
    "q": "The retained earnings line on Schedule L and the ending AAA on Schedule M-2 come out $40,000 apart. This",
    "choices": [
      "reflects how the two accounts are built",
      "means the AAA has been overstated by $40,000",
      "means the balance sheet is out of balance",
      "must be corrected before the return can be filed"
    ],
    "answer": 0,
    "explain": "Book retained earnings tracks book net income. The AAA tracks taxable income and loss, leaves out tax-exempt income, and started at zero on the first day of the S election. A gap between them is normal. A Schedule L that fails to balance would be a real problem, but that is a different test."
  },
  {
    "id": "schedl-07",
    "section": "schedl",
    "topic": "When the balance sheet will not balance",
    "difficulty": "easy",
    "q": "Schedule L total assets come to $812,000 while liabilities plus equity come to $806,000. The preparer should",
    "choices": [
      "find the $6,000 before filing",
      "plug the $6,000 to the other assets line",
      "report the difference on Schedule M-1 as a book-tax difference",
      "carry the $6,000 into next year's beginning balance"
    ],
    "answer": 0,
    "explain": "A balance sheet that does not balance is an error in the balance sheet, not a book-tax difference. Schedule M-1 explains why book income differs from the income reported on Schedule K; it has nothing to say about an asset total that does not foot."
  },
  {
    "id": "schedl-08",
    "section": "schedl",
    "topic": "Treasury stock",
    "difficulty": "medium",
    "q": "The corporation buys back 100 shares from a departing shareholder for $30,000 and holds them. On Schedule L the $30,000 appears",
    "choices": [
      "in the equity section as a negative amount",
      "as an intangible asset",
      "as a reduction of the loans from shareholders line",
      "in the equity section as additional paid-in capital"
    ],
    "answer": 0,
    "explain": "Treasury stock has its own line in the equity section and is subtracted in arriving at total equity. It is money spent to shrink the corporation's own capital, not an asset it can turn around and sell for value the way the intangible line would imply."
  },
  {
    "id": "schedl-09",
    "section": "schedl",
    "topic": "Cash-basis books",
    "difficulty": "medium",
    "q": "A cash-basis S corporation has $70,000 of uncollected customer invoices at year end. Its Schedule L shows",
    "choices": [
      "no receivable, because the books do not record one",
      "a $70,000 receivable, since Schedule L is always accrual",
      "a $70,000 receivable offset by deferred revenue",
      "the $70,000 in other current assets"
    ],
    "answer": 0,
    "explain": "Schedule L follows the books, and a cash-basis set of books never records the invoice, so there is nothing to report. The balance sheet is not converted to accrual for the return. The method itself is disclosed by the accounting method question on Schedule B."
  },
  {
    "id": "schedl-10",
    "section": "schedl",
    "topic": "The Schedule M-3 threshold",
    "difficulty": "easy",
    "q": "An S corporation's total assets reach $12 million at year end. It must also file",
    "choices": [
      "Schedule M-3",
      "Schedule M-2 for the first time",
      "Form 8916-A on its own",
      "no schedule it was not already filing"
    ],
    "answer": 0,
    "explain": "Total assets of $10 million or more at year end trigger Schedule M-3, the expanded book-to-tax reconciliation. Between $10 million and $50 million the corporation may complete Part I of Schedule M-3 and file Schedule M-1 in lieu of Parts II and III; at $50 million it must complete the whole schedule. Schedule M-2 is required either way, because it answers a different question — the movement in the AAA rather than the gap between book and taxable income."
  },
  {
    "id": "schedl-11",
    "section": "schedl",
    "topic": "The beginning-of-year column",
    "difficulty": "easy",
    "q": "The beginning-of-year column on Schedule L should equal",
    "choices": [
      "the prior year's end-of-year column",
      "the beginning AAA column on Schedule M-2",
      "the shareholders' opening stock basis",
      "the trial balance before closing entries"
    ],
    "answer": 0,
    "explain": "The opening columns carry the prior return's ending balance sheet forward untouched. If they do not agree, something was restated after the last return went out, and that difference needs an explanation before this year's numbers mean anything."
  },
  {
    "id": "schedl-12",
    "section": "schedl",
    "topic": "Inventory on the balance sheet",
    "difficulty": "medium",
    "q": "A corporation using LIFO reports inventory on Schedule L at",
    "choices": [
      "the LIFO carrying value on its books",
      "FIFO value, with the reserve disclosed on M-1",
      "replacement cost at year end",
      "the lower of LIFO or market"
    ],
    "answer": 0,
    "explain": "The balance sheet carries inventory the way the books carry it, which for a LIFO taxpayer is the LIFO value. The LIFO reserve is a financial reporting disclosure rather than an M-1 adjustment, and the lower-of-cost-or-market rule is unavailable to a LIFO taxpayer."
  },
  {
    "id": "retearn-01",
    "section": "retearn",
    "topic": "The rollforward",
    "difficulty": "easy",
    "q": "Beginning book retained earnings were $250,000. Book net income was $90,000 and the corporation distributed $40,000. Ending retained earnings are",
    "choices": [
      "$300,000",
      "$340,000",
      "$380,000",
      "$210,000"
    ],
    "answer": 0,
    "explain": "$250,000 plus $90,000 of book income less $40,000 of distributions is $300,000. Distributions come out of retained earnings whether or not they were taxable to the shareholders, and it is book net income — not the income figure on Schedule K — that rolls the account forward."
  },
  {
    "id": "retearn-02",
    "section": "retearn",
    "topic": "Why it differs from the AAA",
    "difficulty": "medium",
    "q": "Book retained earnings and the AAA differ because",
    "choices": [
      "the AAA starts at zero when the S election takes effect",
      "the AAA includes tax-exempt income and retained earnings does not",
      "retained earnings is reduced by distributions and the AAA is not",
      "retained earnings excludes non-deductible expenses"
    ],
    "answer": 0,
    "explain": "The AAA opens at zero on the first day of the first S year no matter how much profit the corporation had already piled up on its books. Both accounts are reduced by distributions. The AAA is the one that leaves out tax-exempt income, which goes to the other adjustments account instead."
  },
  {
    "id": "retearn-03",
    "section": "retearn",
    "topic": "Going negative",
    "difficulty": "medium",
    "q": "Retained earnings stand at $80,000 when the corporation distributes $120,000 of cash it has on hand. Retained earnings afterwards are",
    "choices": [
      "negative $40,000",
      "zero, because the account cannot go below zero",
      "$80,000, with $40,000 charged to paid-in capital",
      "zero, with $40,000 shown as a shareholder receivable"
    ],
    "answer": 0,
    "explain": "Book retained earnings takes the full distribution and goes negative. The floor at zero belongs to two other accounts: the AAA, which distributions cannot drive below zero, and the shareholder's stock basis. Recharacterizing the excess as a loan is only right if the parties actually documented one."
  },
  {
    "id": "retearn-04",
    "section": "retearn",
    "topic": "Book income, not Schedule K income",
    "difficulty": "medium",
    "q": "The corporation's Schedule K income totals $95,000 while its books show net income of $88,000. Retained earnings for the year moves by",
    "choices": [
      "$88,000 before distributions",
      "$95,000 before distributions",
      "$7,000, the difference Schedule M-1 explains",
      "$88,000 only if the difference is permanent"
    ],
    "answer": 0,
    "explain": "Retained earnings is a book account and moves with book net income. The $7,000 gap is exactly what Schedule M-1 exists to explain, and whether it is a timing difference or a permanent one makes no difference to what the books record this year."
  },
  {
    "id": "retearn-05",
    "section": "retearn",
    "topic": "Capital contributions",
    "difficulty": "easy",
    "q": "A shareholder contributes an additional $50,000 of cash and receives no new shares. On the books this",
    "choices": [
      "adds to paid-in capital",
      "adds to retained earnings as an equity infusion",
      "adds $50,000 to the corporation's AAA",
      "is other income for the year"
    ],
    "answer": 0,
    "explain": "A contribution is capital, not earnings, so it lands in paid-in capital. It raises the shareholder's stock basis but does not touch the AAA, which moves only for items of income, loss, deduction and distribution."
  },
  {
    "id": "retearn-06",
    "section": "retearn",
    "topic": "Prior period adjustments",
    "difficulty": "medium",
    "q": "A $12,000 error in last year's depreciation is corrected on the books this year as a prior period adjustment. Retained earnings",
    "choices": [
      "is adjusted directly, outside this year's net income",
      "is unaffected until the prior return is amended",
      "absorbs the $12,000 through this year's net income",
      "is adjusted only after the prior year's books are reopened"
    ],
    "answer": 0,
    "explain": "A prior period adjustment goes straight to the opening retained earnings balance rather than running through the current year's income statement. Whether the prior return also gets amended is a separate decision that does not change how the books record the correction."
  },
  {
    "id": "retearn-07",
    "section": "retearn",
    "topic": "Carrying over from C years",
    "difficulty": "medium",
    "q": "A C corporation with $600,000 of book retained earnings elects S status. On the first S-year balance sheet retained earnings are",
    "choices": [
      "$600,000, carried over unchanged",
      "zero, reset by the election",
      "$600,000, but reclassified to paid-in capital",
      "zero, with $600,000 moved into the AAA"
    ],
    "answer": 0,
    "explain": "The election changes how the corporation is taxed, not what its books say, so retained earnings carries over intact. The account that resets is the AAA, which begins the first S year at zero. The old earnings and profits from the C years survive too and can turn a later distribution into a dividend."
  },
  {
    "id": "retearn-08",
    "section": "retearn",
    "topic": "Non-deductible expenses",
    "difficulty": "easy",
    "q": "The corporation pays a $9,000 fine to a state regulator. On the books the payment",
    "choices": [
      "reduces retained earnings as an expense",
      "is capitalized, since it is not deductible",
      "is charged against paid-in capital",
      "is recorded only as a memo item"
    ],
    "answer": 0,
    "explain": "A fine is a real cash expense and reduces book income and therefore retained earnings. What makes it special sits on the tax side: it is not deductible, so it becomes an addition on Schedule M-1, and it still reduces both the AAA and the shareholders' stock basis."
  },
  {
    "id": "retearn-09",
    "section": "retearn",
    "topic": "Tax-exempt income",
    "difficulty": "easy",
    "q": "Municipal bond interest of $5,000 is credited to income on the books. Retained earnings",
    "choices": [
      "rise by $5,000 like any other income",
      "are unaffected, since the interest is not taxable",
      "rise by $5,000, which Schedule M-1 then adds back",
      "rise by $5,000 net of the related expense"
    ],
    "answer": 0,
    "explain": "Tax-exempt does not mean invisible to the books — the interest is income and lifts retained earnings. Its tax character shows up elsewhere: a subtraction on Schedule M-1, an addition to the other adjustments account rather than the AAA, and an increase in stock basis."
  },
  {
    "id": "retearn-10",
    "section": "retearn",
    "topic": "Declared but unpaid",
    "difficulty": "medium",
    "q": "On December 20 the board declares a $50,000 distribution payable on January 15. At December 31 the books show",
    "choices": [
      "a $50,000 liability and retained earnings down $50,000",
      "no entry until the cash actually moves",
      "a $50,000 reduction of paid-in capital",
      "a $50,000 receivable from the shareholders"
    ],
    "answer": 0,
    "explain": "Declaring the distribution creates the obligation, so the books record a payable and take retained earnings down now. The tax side follows the cash: the distribution is taken into account when it is actually made, so Schedule M-2 and the K-1 pick it up next year."
  },
  {
    "id": "retearn-11",
    "section": "retearn",
    "topic": "What pulls the accounts apart",
    "difficulty": "medium",
    "q": "Which item drives book retained earnings and the AAA apart in the same year?",
    "choices": [
      "tax-exempt interest income",
      "a cash distribution to shareholders",
      "ordinary business income",
      "a deductible repair expense"
    ],
    "answer": 0,
    "explain": "Tax-exempt interest raises book retained earnings but bypasses the AAA and lands in the other adjustments account, which is a permanent split. Ordinary income and deductible expenses move both accounts together, and a distribution reduces both dollar for dollar -- it pulls them apart only once the AAA has already been driven to zero."
  },
  {
    "id": "retearn-12",
    "section": "retearn",
    "topic": "Presentation on Schedule L",
    "difficulty": "easy",
    "q": "On Schedule L, book retained earnings are reported",
    "choices": [
      "on their own line in the equity section",
      "combined with paid-in capital on one line",
      "only if the corporation has accumulated E&P",
      "as the sum of the AAA and the OAA"
    ],
    "answer": 0,
    "explain": "Retained earnings gets its own line, separate from capital stock and paid-in capital. It is a book figure that owes nothing to the AAA or the other adjustments account, and it is required whether or not any earnings and profits survive from C years."
  },
  {
    "id": "obe-01",
    "section": "obe",
    "topic": "What creates the account",
    "difficulty": "easy",
    "q": "Opening Balance Equity appears in a bookkeeping file when",
    "choices": [
      "an account is set up with an opening balance",
      "the year-end closing entry is posted",
      "a shareholder distribution is recorded",
      "the file is switched from cash to accrual"
    ],
    "answer": 0,
    "explain": "The software needs the books to balance the moment you type an opening figure for a bank account, a loan or an inventory item, and Opening Balance Equity is the plug it uses for the other side. Closing the year, recording a distribution and changing the reporting basis all post elsewhere."
  },
  {
    "id": "obe-02",
    "section": "obe",
    "topic": "What the balance should be",
    "difficulty": "easy",
    "q": "A finished set of books carries an Opening Balance Equity balance of",
    "choices": [
      "zero",
      "the shareholder's original investment",
      "the prior year's net income",
      "total assets less total liabilities"
    ],
    "answer": 0,
    "explain": "Opening Balance Equity is scaffolding, not a real equity account. Once every opening figure has been traced to what it actually represents, the balance is cleared out and the account sits at zero. Anything still there at year end means the file conversion was never finished."
  },
  {
    "id": "obe-03",
    "section": "obe",
    "topic": "Where to clear it",
    "difficulty": "easy",
    "q": "A $46,000 Opening Balance Equity balance traces entirely to profits the business earned before the file was created. It should be reclassified to",
    "choices": [
      "retained earnings",
      "paid-in capital",
      "loans from shareholders",
      "other income"
    ],
    "answer": 0,
    "explain": "Clear the account to whatever the money actually was. Profits already earned belong in retained earnings. Cash the owner put in belongs in paid-in capital, and an amount the corporation genuinely owes the owner belongs in loans from shareholders. Routing it to income would tax it a second time."
  },
  {
    "id": "obe-04",
    "section": "obe",
    "topic": "On the tax return",
    "difficulty": "medium",
    "q": "Opening Balance Equity still shows $8,000 when the return is being prepared. On Schedule L it",
    "choices": [
      "has no line and must be reclassified first",
      "goes on the other current liabilities line",
      "is reported as additional paid-in capital",
      "is reported with the capital stock balance"
    ],
    "answer": 0,
    "explain": "There is no Opening Balance Equity line on Schedule L, because the account is an artifact of the bookkeeping software rather than a category the return recognizes. Parking it in paid-in capital or capital stock hides an unreconciled figure inside a number that basis records depend on."
  },
  {
    "id": "obe-05",
    "section": "obe",
    "topic": "Opening a bank account",
    "difficulty": "easy",
    "q": "A new file is created mid-life for an existing corporation and the operating account is entered with its $37,000 current balance. The offsetting entry lands in",
    "choices": [
      "Opening Balance Equity",
      "retained earnings",
      "uncategorized income",
      "the bank reconciliation discrepancy account"
    ],
    "answer": 0,
    "explain": "Entering a starting balance on the asset side needs a credit somewhere, and the software books it to Opening Balance Equity by default. Where it belongs is a judgement call the preparer makes afterwards by tracing what that $37,000 actually represents."
  },
  {
    "id": "obe-06",
    "section": "obe",
    "topic": "Clearing it correctly",
    "difficulty": "medium",
    "q": "Before clearing Opening Balance Equity, the preparer's first step is to",
    "choices": [
      "trace what each amount in it represents",
      "move the whole balance to retained earnings",
      "split it evenly between the shareholders",
      "reverse it against the current year's income"
    ],
    "answer": 0,
    "explain": "The account is usually a mixture — an owner contribution, prior profits, an unrecorded loan and an inventory opening figure can all land in it. Clearing the total to one destination without looking gets the equity section wrong, and if that destination is paid-in capital it misstates stock basis."
  },
  {
    "id": "obe-07",
    "section": "obe",
    "topic": "Diagnosing movement",
    "difficulty": "medium",
    "q": "Opening Balance Equity has moved during the year rather than staying put. The likeliest cause is",
    "choices": [
      "an opening balance entered on a new account mid-year",
      "the year-end close posting to the wrong account",
      "a distribution posted to the equity section",
      "a change in the corporation's accounting method"
    ],
    "answer": 0,
    "explain": "The account only moves when someone enters an opening balance, so a mid-year addition — a new loan, a new credit card, an inventory item set up with a starting quantity — is the usual culprit. Distributions and method changes post nowhere near it."
  },
  {
    "id": "obe-08",
    "section": "obe",
    "topic": "Incorporating a proprietorship",
    "difficulty": "medium",
    "q": "A sole proprietor incorporates and the bookkeeper carries the old balance sheet into a new S corporation file, leaving $22,000 in Opening Balance Equity. That amount most likely represents",
    "choices": [
      "the net assets the owner transferred in",
      "the corporation's first-year taxable income",
      "a loan the corporation owes a third party",
      "accumulated earnings and profits"
    ],
    "answer": 0,
    "explain": "What crossed into the corporation was the net book value of the proprietorship's assets and liabilities, and that is a contribution of capital -- paid-in capital on the books. Stock basis is a separate tax figure: the adjusted basis of the property transferred less any liabilities the corporation assumed, which need not equal the book number. An S corporation with no C history has no earnings and profits at all."
  },
  {
    "id": "obe-09",
    "section": "obe",
    "topic": "Opening receivables",
    "difficulty": "medium",
    "q": "Opening accounts receivable of $19,000 are entered as individual open invoices when the file is built. Those entries credit",
    "choices": [
      "the income account behind each invoice item",
      "Opening Balance Equity, automatically",
      "retained earnings directly",
      "a suspense account the software locks"
    ],
    "answer": 0,
    "explain": "An invoice credits whatever income account its items point to, so open invoices keyed in during a file build land in sales unless the setup items are deliberately mapped to Opening Balance Equity. Typing the same figure into the customer's opening balance field instead credits Uncategorized Income. Either way the offset has to be traced and cleared, because those sales happened in an earlier period and must not be counted again this year."
  },
  {
    "id": "obe-10",
    "section": "obe",
    "topic": "Effect on the AAA",
    "difficulty": "medium",
    "q": "Clearing a $15,000 Opening Balance Equity balance to retained earnings",
    "choices": [
      "does not change the AAA",
      "increases the AAA by $15,000",
      "decreases the AAA by $15,000",
      "increases the AAA only if the amount was previously taxed"
    ],
    "answer": 0,
    "explain": "The AAA moves for items of income, loss, deduction and distribution. A reclassification between two equity accounts on the books is none of those — it corrects where a number sits, not what the corporation earned or paid out."
  },
  {
    "id": "obe-11",
    "section": "obe",
    "topic": "The automatic year-end close",
    "difficulty": "easy",
    "q": "At year end the software rolls net income into retained earnings automatically. Opening Balance Equity",
    "choices": [
      "is left alone and must be cleared by hand",
      "is rolled into retained earnings at the same time",
      "is reset to zero by the closing process",
      "is redistributed across the equity accounts"
    ],
    "answer": 0,
    "explain": "The automatic close only moves the current year's income. Opening Balance Equity sits untouched year after year until someone decides what it represents and journals it out, which is why stale balances so often survive several returns."
  },
  {
    "id": "obe-12",
    "section": "obe",
    "topic": "The cost of ignoring it",
    "difficulty": "medium",
    "q": "A return is filed with $8,000 still sitting in Opening Balance Equity, folded into the Schedule L equity total. The clearest consequence is",
    "choices": [
      "an equity section that will not tie to basis records",
      "an out-of-balance Schedule L",
      "book net income that no longer agrees with Schedule M-1 line 1",
      "a reduction in the corporation's AAA"
    ],
    "answer": 0,
    "explain": "The balance sheet still balances — the plug is doing its job — so nothing looks broken on the face of the return. The damage is that capital stock, paid-in capital and retained earnings are each wrong by some part of that $8,000, and those are the figures a basis schedule gets reconciled against."
  },
  {
    "id": "m1-01",
    "section": "m1",
    "topic": "What M-1 reconciles to",
    "difficulty": "medium",
    "q": "Schedule M-1 reconciles net income per books to",
    "choices": [
      "the income or loss reported on Schedule K",
      "the corporation's federal taxable income",
      "the ending balance of the AAA",
      "total equity on Schedule L"
    ],
    "answer": 0,
    "explain": "An S corporation generally has no taxable income of its own, so there is nothing at the entity level to reconcile to. M-1 ends at the income and loss reconciliation line on Schedule K — the total of everything that will be split among the shareholders."
  },
  {
    "id": "m1-02",
    "section": "m1",
    "topic": "The starting figure",
    "difficulty": "easy",
    "q": "The first line of Schedule M-1 is",
    "choices": [
      "net income or loss per books",
      "ordinary business income from page 1",
      "gross receipts less returns",
      "the prior year's ending AAA"
    ],
    "answer": 0,
    "explain": "M-1 begins with the books and works toward the return. Starting from ordinary business income would be starting from the answer — that figure is already a tax number, and it leaves out every separately stated item."
  },
  {
    "id": "m1-03",
    "section": "m1",
    "topic": "Tax-exempt interest",
    "difficulty": "easy",
    "q": "The books include $6,000 of municipal bond interest. On Schedule M-1 the $6,000 is",
    "choices": [
      "subtracted",
      "added back",
      "left off, since it never reaches Schedule K",
      "shown only in the other adjustments account on M-2"
    ],
    "answer": 0,
    "explain": "The interest is income on the books that never becomes taxable income on Schedule K, so it comes out on the way from one to the other. It is not invisible elsewhere: it goes to the other adjustments account on M-2 and raises the shareholders' stock basis."
  },
  {
    "id": "m1-04",
    "section": "m1",
    "topic": "Disallowed meals",
    "difficulty": "easy",
    "q": "Business meals cost $10,000, of which half is disallowed. On Schedule M-1 the disallowed $5,000 is",
    "choices": [
      "added back",
      "subtracted",
      "left off, because the expense was real",
      "added back only if the meals were with shareholders"
    ],
    "answer": 0,
    "explain": "The books expensed the full $10,000 but only $5,000 reaches Schedule K, so book income sits below the return figure and the difference is added back. The disallowed half also reduces the AAA and stock basis as a non-deductible expense."
  },
  {
    "id": "m1-05",
    "section": "m1",
    "topic": "Tax depreciation ahead of book",
    "difficulty": "medium",
    "q": "Book depreciation is $18,000 and tax depreciation is $31,000. On Schedule M-1 the $13,000 difference is",
    "choices": [
      "subtracted",
      "added back",
      "added back and carried to the AAA",
      "reported only when the asset is sold"
    ],
    "answer": 0,
    "explain": "The return deducts $13,000 more than the books did, so the income on Schedule K is lower than book income by that amount and M-1 has to come down to meet it. The direction reverses in later years, once book depreciation runs ahead of the tax figure."
  },
  {
    "id": "m1-06",
    "section": "m1",
    "topic": "Book depreciation ahead of tax",
    "difficulty": "medium",
    "q": "An asset already expensed for tax still carries $7,000 of book depreciation this year. On Schedule M-1 that $7,000 is",
    "choices": [
      "added back",
      "subtracted",
      "not reported, since the asset is off the tax books",
      "subtracted, then restored to the AAA"
    ],
    "answer": 0,
    "explain": "The books took a deduction the return does not get, so book income is the lower of the two and M-1 adds the difference back. This is the back half of a §179 or bonus deduction claimed in an earlier year, and it is a timing difference rather than a permanent one."
  },
  {
    "id": "m1-07",
    "section": "m1",
    "topic": "Fines and penalties",
    "difficulty": "easy",
    "q": "A $4,000 penalty for late payroll deposits is expensed on the books. On Schedule M-1 it is",
    "choices": [
      "added back as a non-deductible expense",
      "subtracted as a separately stated item",
      "left alone, because payroll penalties are deductible",
      "added back only in the year it is paid"
    ],
    "answer": 0,
    "explain": "Penalties paid to a government are never deductible, so the books and the return part ways permanently and the expense is added back. It still reduces the AAA and the shareholders' stock basis — non-deductible does not mean it never happened."
  },
  {
    "id": "m1-08",
    "section": "m1",
    "topic": "Officer life insurance",
    "difficulty": "medium",
    "q": "The corporation pays $3,500 of premiums on a policy covering its president, and the corporation is the beneficiary. On Schedule M-1 the premiums are",
    "choices": [
      "added back",
      "subtracted",
      "added back only if the policy has cash value",
      "split between a deductible and a non-deductible half"
    ],
    "answer": 0,
    "explain": "Premiums on a policy where the corporation stands to collect are not deductible, so the book expense is added back. The mirror image comes later: if the policy pays out, the proceeds are book income that gets subtracted on M-1 because they are not taxable."
  },
  {
    "id": "m1-09",
    "section": "m1",
    "topic": "Charitable contributions",
    "difficulty": "medium",
    "q": "The corporation expenses a $5,000 charitable contribution on its books and reports it as a separately stated item on Schedule K. On Schedule M-1 the contribution requires",
    "choices": [
      "no adjustment",
      "an addition of $5,000",
      "a subtraction of $5,000",
      "an addition limited to 10% of taxable income"
    ],
    "answer": 0,
    "explain": "The income and loss reconciliation line on Schedule K is computed after subtracting the charitable contribution, so the books and that line already agree and there is nothing left to reconcile. The 10% ceiling is a C corporation rule; an S corporation passes the contribution out and each shareholder applies their own limit."
  },
  {
    "id": "m1-10",
    "section": "m1",
    "topic": "When M-1 can be skipped",
    "difficulty": "easy",
    "q": "Schedule M-1 may be left blank when",
    "choices": [
      "receipts and total assets are each under $250,000",
      "the corporation has a single shareholder",
      "book and taxable income happen to agree",
      "the corporation files Schedule M-2 instead"
    ],
    "answer": 0,
    "explain": "The Schedule B test excuses both Schedule L and Schedule M-1 when total receipts and year-end total assets are each under $250,000. Neither the number of shareholders nor a year in which the two income figures happen to match changes the filing requirement."
  },
  {
    "id": "m1-11",
    "section": "m1",
    "topic": "Income on the return but not the books",
    "difficulty": "medium",
    "q": "An item of income appears on Schedule K but was never recorded on the books. On Schedule M-1 it is",
    "choices": [
      "added to book income",
      "subtracted from book income",
      "reported only on Schedule M-2",
      "netted against non-deductible expenses"
    ],
    "answer": 0,
    "explain": "Book income is short by that amount, so M-1 adds it in on the way up to the Schedule K figure. The mechanic is worth holding onto as a pair: income the return has but the books do not is an addition, and deductions the return has but the books do not are a subtraction."
  },
  {
    "id": "m1-12",
    "section": "m1",
    "topic": "The limits of M-1",
    "difficulty": "easy",
    "q": "Schedule M-1 explains the difference between",
    "choices": [
      "book net income and the Schedule K income figure",
      "the opening and closing balance of the AAA",
      "book equity and the shareholders' aggregate basis",
      "the current and prior year balance sheets"
    ],
    "answer": 0,
    "explain": "M-1 is a one-year income reconciliation and nothing more. The movement in the AAA is Schedule M-2's job, and the gap between book equity and shareholder basis is not reconciled anywhere on the corporate return — it lives on each shareholder's own Form 7203."
  },
  {
    "id": "m2-01",
    "section": "m2",
    "topic": "Where the AAA starts",
    "difficulty": "easy",
    "q": "A C corporation with twenty years of accumulated profits elects S status on January 1. Its beginning AAA is",
    "choices": [
      "zero",
      "its book retained earnings",
      "its accumulated earnings and profits",
      "its total shareholders' equity"
    ],
    "answer": 0,
    "explain": "The AAA is a record of income earned during the S years, so it opens at zero on the first day of the first S year. The old profits do not vanish — they stay on the books as retained earnings and, for tax, as accumulated earnings and profits that can turn a later distribution into a dividend."
  },
  {
    "id": "m2-02",
    "section": "m2",
    "topic": "Where tax-exempt income goes",
    "difficulty": "easy",
    "q": "The corporation earns $7,000 of tax-exempt interest. On Schedule M-2 it increases",
    "choices": [
      "the other adjustments account",
      "the accumulated adjustments account",
      "accumulated earnings and profits",
      "the previously taxed income column"
    ],
    "answer": 0,
    "explain": "Tax-exempt income is deliberately kept out of the AAA and parked in the other adjustments account, which is what lets the AAA stay a record of income that has actually been taxed to the shareholders. It still increases stock basis."
  },
  {
    "id": "m2-03",
    "section": "m2",
    "topic": "Distributions cannot go below zero",
    "difficulty": "medium",
    "q": "The AAA stands at $30,000 when the corporation distributes $50,000, and there is no accumulated E&P. The ending AAA is",
    "choices": [
      "zero",
      "negative $20,000",
      "$30,000",
      "negative $50,000"
    ],
    "answer": 0,
    "explain": "A distribution can take the AAA down to zero but no further. The other $20,000 still happened — it reduces the shareholders' stock basis, and anything beyond basis is capital gain — but the AAA simply stops."
  },
  {
    "id": "m2-04",
    "section": "m2",
    "topic": "Losses can go below zero",
    "difficulty": "medium",
    "q": "An operating loss of $45,000 hits an AAA that stood at $10,000. The ending AAA is",
    "choices": [
      "negative $35,000",
      "zero",
      "$10,000",
      "negative $45,000"
    ],
    "answer": 0,
    "explain": "Losses and deductions can drive the AAA below zero; only distributions are blocked from doing so. The negative balance matters later, because the AAA has to climb back above zero before a distribution can be charged against it again."
  },
  {
    "id": "m2-05",
    "section": "m2",
    "topic": "Non-deductible expenses",
    "difficulty": "medium",
    "q": "The corporation pays $6,000 of expenses, unrelated to tax-exempt income, that are neither deductible nor chargeable to a capital account. The AAA",
    "choices": [
      "falls by $6,000",
      "is unchanged",
      "rises by $6,000",
      "falls only to the extent of its positive balance"
    ],
    "answer": 0,
    "explain": "Non-deductible expenses that are not capitalized come straight out of the AAA, the same way they come out of stock basis. The carve-out is an expense related to tax-exempt income, which reduces the other adjustments account instead, and that is why the stem rules it out. Leaving either kind in overstates the account and lets a later distribution look tax-free when part of it is not."
  },
  {
    "id": "m2-06",
    "section": "m2",
    "topic": "Distribution ordering with E&P",
    "difficulty": "medium",
    "q": "A corporation with $40,000 of AAA and $25,000 of accumulated E&P distributes $80,000 to a shareholder whose stock basis is $100,000. The shareholder reports",
    "choices": [
      "a $25,000 dividend and $55,000 tax-free",
      "$80,000 tax-free",
      "an $80,000 dividend",
      "a $40,000 dividend and $40,000 tax-free"
    ],
    "answer": 0,
    "explain": "The distribution is charged first against the $40,000 of AAA, tax-free to the extent of basis. The next $25,000 comes out of accumulated earnings and profits and is a dividend. The last $15,000 falls back on remaining stock basis and is tax-free, so $55,000 of the $80,000 escapes tax."
  },
  {
    "id": "m2-07",
    "section": "m2",
    "topic": "No E&P at all",
    "difficulty": "medium",
    "q": "A corporation that has never been a C corporation distributes $60,000 to a shareholder with $22,000 of stock basis. The shareholder reports",
    "choices": [
      "$38,000 of capital gain",
      "$60,000 of ordinary income",
      "a $38,000 dividend",
      "nothing, because the corporation has no E&P"
    ],
    "answer": 0,
    "explain": "With no earnings and profits there is no dividend layer at all. The distribution is tax-free down to the $22,000 of stock basis, and the $38,000 beyond it is treated as gain from a sale of the stock, which is capital. The AAA balance does not change that answer."
  },
  {
    "id": "m2-08",
    "section": "m2",
    "topic": "The net negative adjustment",
    "difficulty": "medium",
    "q": "For the year the corporation has a net negative adjustment to its AAA and also made distributions. In allocating the AAA it",
    "choices": [
      "applies the distributions before the net negative adjustment",
      "applies the net negative adjustment first",
      "prorates the two against the opening balance",
      "defers the adjustment to the following year"
    ],
    "answer": 0,
    "explain": "The ordering rule is deliberately taxpayer-friendly: when the year's adjustments net to a decrease, that decrease is set aside while distributions are charged against the AAA. It keeps one bad year from turning an otherwise tax-free distribution into a dividend."
  },
  {
    "id": "m2-09",
    "section": "m2",
    "topic": "What the OAA holds",
    "difficulty": "medium",
    "q": "Which item belongs in the other adjustments account?",
    "choices": [
      "non-deductible expenses tied to tax-exempt income",
      "the non-deductible half of business meals",
      "ordinary business income",
      "a cash distribution to shareholders"
    ],
    "answer": 0,
    "explain": "The other adjustments account holds tax-exempt income and the expenses related to it, so the two travel together and the AAA is left holding only taxed items. Ordinary income and deductible expenses belong in the AAA. Distributions are charged against the AAA first and reach the OAA only after the AAA, the previously taxed income account and accumulated E&P are used up."
  },
  {
    "id": "m2-10",
    "section": "m2",
    "topic": "M-2 against Schedule L",
    "difficulty": "medium",
    "q": "The Schedule M-2 columns total $214,000 while Schedule L shows $260,000 of equity. This",
    "choices": [
      "is normal and needs no adjustment",
      "means Schedule L is overstated by $46,000",
      "means the AAA is understated by $46,000",
      "must be reconciled on Schedule M-1"
    ],
    "answer": 0,
    "explain": "Schedule L reports book equity, including capital stock and paid-in capital that Schedule M-2 never touches. The two are not designed to agree, and M-1 has nothing to say about the difference because it reconciles income for one year, not balance sheet equity."
  },
  {
    "id": "m2-11",
    "section": "m2",
    "topic": "The columns of M-2",
    "difficulty": "easy",
    "q": "Schedule M-2 tracks the accumulated adjustments account alongside",
    "choices": [
      "accumulated E&P and the other adjustments account",
      "retained earnings and paid-in capital",
      "each shareholder's stock and debt basis",
      "previously taxed income and total book equity"
    ],
    "answer": 0,
    "explain": "The schedule runs several columns side by side — the AAA, previously taxed income from the pre-1983 rules, accumulated earnings and profits, and the other adjustments account. Shareholder basis is deliberately not among them; that is tracked by each shareholder, not by the corporation."
  },
  {
    "id": "m2-12",
    "section": "m2",
    "topic": "Where E&P comes from",
    "difficulty": "medium",
    "q": "An S corporation shows accumulated earnings and profits on Schedule M-2. That balance",
    "choices": [
      "came from years the corporation was a C corporation",
      "builds up whenever distributions fall short of income",
      "is the accumulated total of the AAA",
      "arises when the corporation has tax-exempt income"
    ],
    "answer": 0,
    "explain": "An S corporation does not generate earnings and profits from its own operations. A balance in that column is a leftover from C years or from a merger with a corporation that had one, and it is exactly what creates the dividend layer in the distribution ordering rules."
  },
  {
    "id": "schedk-01",
    "section": "schedk",
    "topic": "K-1s foot to Schedule K",
    "difficulty": "easy",
    "q": "The Schedule K-1s issued to the shareholders should, added together, equal",
    "choices": [
      "the amounts on Schedule K",
      "the corporation's book net income",
      "the ending AAA",
      "total equity on Schedule L"
    ],
    "answer": 0,
    "explain": "Schedule K is the corporation's total for each pass-through item and the K-1s slice it up by ownership percentage, so the slices have to add back to the whole. A K-1 set that does not foot to Schedule K is an error worth chasing before the return goes out."
  },
  {
    "id": "schedk-02",
    "section": "schedk",
    "topic": "Where page 1 income lands",
    "difficulty": "easy",
    "q": "Ordinary business income from page 1 of Form 1120-S carries to",
    "choices": [
      "line 1 of Schedule K",
      "line 1 of Schedule M-1",
      "the retained earnings line on Schedule L",
      "the other adjustments account"
    ],
    "answer": 0,
    "explain": "Page 1 computes one number — ordinary business income or loss — and it becomes the first line of Schedule K. Everything that had to be kept separate because a shareholder might treat it differently was left off page 1 and appears further down Schedule K."
  },
  {
    "id": "schedk-03",
    "section": "schedk",
    "topic": "Charitable contributions",
    "difficulty": "medium",
    "q": "A $12,000 charitable contribution made by the corporation is",
    "choices": [
      "separately stated on Schedule K",
      "deducted on page 1 as an ordinary expense",
      "deducted on page 1 up to 10% of taxable income",
      "omitted from the return and claimed by the shareholders"
    ],
    "answer": 0,
    "explain": "The corporation reports the contribution but does not deduct it, because each shareholder's own income and the type of charity determine how much is allowed. Leaving it off the return entirely would strand the shareholders without substantiation for a deduction they are entitled to."
  },
  {
    "id": "schedk-04",
    "section": "schedk",
    "topic": "Section 179",
    "difficulty": "medium",
    "q": "A §179 expense election of $40,000 is",
    "choices": [
      "separately stated and limited at the shareholder level",
      "deducted in full on page 1",
      "added to the AAA without passing through",
      "deducted on page 1 up to the corporation's dollar cap"
    ],
    "answer": 0,
    "explain": "The corporation makes the election and passes the amount out, but each shareholder tests it against their own business income and their own dollar cap. A shareholder holding §179 elections from several entities can be limited even though this corporation's numbers left plenty of room."
  },
  {
    "id": "schedk-05",
    "section": "schedk",
    "topic": "Capital gains",
    "difficulty": "easy",
    "q": "A $30,000 long-term capital gain is reported separately from ordinary income because",
    "choices": [
      "its character has to reach the shareholders intact",
      "the corporation pays tax on capital gains itself",
      "it is excluded from the AAA",
      "it never affects stock basis"
    ],
    "answer": 0,
    "explain": "Character has to survive the trip to the shareholder, and it can only do that on its own line. Folding the gain into ordinary income would convert a preferentially taxed item into ordinary income on every K-1. The gain does increase both the AAA and stock basis, like any other income."
  },
  {
    "id": "schedk-06",
    "section": "schedk",
    "topic": "Tax-exempt interest",
    "difficulty": "medium",
    "q": "Tax-exempt interest is reported on Schedule K because it",
    "choices": [
      "affects stock basis and the other adjustments account",
      "increases the accumulated adjustments account",
      "reduces stock basis when it is distributed",
      "must be added back on Schedule M-2"
    ],
    "answer": 0,
    "explain": "The interest is not taxable, but the shareholders still need it: it raises their stock basis, which is what lets a later distribution come out tax-free. It also feeds the other adjustments account rather than the AAA."
  },
  {
    "id": "schedk-07",
    "section": "schedk",
    "topic": "Non-deductible expenses",
    "difficulty": "medium",
    "q": "Non-deductible expenses are reported on Schedule K so that shareholders can",
    "choices": [
      "reduce their stock basis by their share",
      "add the same amount to their stock basis",
      "add them back on Schedule M-1",
      "carry them forward to a profitable year"
    ],
    "answer": 0,
    "explain": "A non-deductible expense is money that left the corporation, so it has to come out of basis even though nobody gets a deduction for it. Skipping the reporting leaves the shareholders' basis overstated and makes their next distribution look tax-free when part of it is gain."
  },
  {
    "id": "schedk-08",
    "section": "schedk",
    "topic": "Distributions are not a deduction",
    "difficulty": "easy",
    "q": "Distributions of $75,000 are reported on Schedule K. They",
    "choices": [
      "are reported for information only",
      "reduce the corporation's ordinary business income",
      "are deductible to the extent of the AAA",
      "are deductible only once they exceed basis"
    ],
    "answer": 0,
    "explain": "Income is taxed to the shareholders as the corporation earns it, so paying it out later reduces nothing on the corporation's return. It is reported because it takes down the AAA and each shareholder's stock basis, and because it can be taxable in its own right -- a dividend where there is accumulated E&P, and gain beyond stock basis."
  },
  {
    "id": "schedk-09",
    "section": "schedk",
    "topic": "Section 1231 gains",
    "difficulty": "medium",
    "q": "A §1231 gain on the sale of business equipment is separately stated so that the shareholder can",
    "choices": [
      "net it against §1231 losses from other sources",
      "treat the §1231 gain as ordinary income by election",
      "report it as a long-term capital gain without netting",
      "defer it until the stock is sold"
    ],
    "answer": 0,
    "explain": "Whether a §1231 gain ends up capital or ordinary depends on the shareholder's own §1231 netting and the five-year lookback for prior losses. Only the shareholder can run that computation, so the item has to arrive on its own line."
  },
  {
    "id": "schedk-10",
    "section": "schedk",
    "topic": "Shareholder health insurance",
    "difficulty": "medium",
    "q": "Health insurance premiums paid for a shareholder who owns 30% of the stock are",
    "choices": [
      "included in that shareholder's W-2 wages",
      "reported as a distribution on Schedule K",
      "a non-deductible expense of the corporation",
      "deducted on page 1 as employee benefits"
    ],
    "answer": 0,
    "explain": "A more-than-2% shareholder is treated like a partner for fringe benefit purposes, so the premiums go on the W-2 as wages. The corporation deducts them as compensation, and the shareholder generally takes the self-employed health insurance deduction on their own return."
  },
  {
    "id": "schedk-11",
    "section": "schedk",
    "topic": "The reconciliation line",
    "difficulty": "medium",
    "q": "The income and loss reconciliation line at the bottom of Schedule K exists to",
    "choices": [
      "give Schedule M-1 a figure to reconcile to",
      "compute the corporation's tax liability",
      "set the ending balance of the AAA",
      "allocate income among the shareholders"
    ],
    "answer": 0,
    "explain": "The line combines the income items and subtracts the deduction items to produce a single number standing for what the return says the corporation earned. That number is the endpoint of the book-to-tax walk on Schedule M-1."
  },
  {
    "id": "schedk-12",
    "section": "schedk",
    "topic": "Why anything is separately stated",
    "difficulty": "easy",
    "q": "An item is separately stated on Schedule K when",
    "choices": [
      "its tax treatment depends on the individual shareholder",
      "it exceeds a dollar threshold in the instructions",
      "the corporation elects to disclose it",
      "it has no effect on stock basis"
    ],
    "answer": 0,
    "explain": "The test is whether folding the item into one ordinary income figure would change the tax result for any shareholder. Capital gains, charitable contributions, §179 and credits all pass that test, because the rates and limits that apply to them live on the shareholder's return."
  },
  {
    "id": "basis-01",
    "section": "basis",
    "topic": "Where basis starts",
    "difficulty": "easy",
    "q": "A shareholder pays $75,000 cash for stock in a new S corporation. Initial stock basis is",
    "choices": [
      "$75,000",
      "zero until the corporation earns income",
      "$75,000 plus a share of corporate debt",
      "the fair market value of the stock at year end"
    ],
    "answer": 0,
    "explain": "Basis starts at what the shareholder put in — cash, or the adjusted basis of property contributed. Unlike a partner, an S corporation shareholder picks up nothing for debt the corporation itself owes to a bank."
  },
  {
    "id": "basis-02",
    "section": "basis",
    "topic": "The order of adjustments",
    "difficulty": "medium",
    "q": "In adjusting stock basis for the year, the shareholder takes account of",
    "choices": [
      "income first, then distributions, then losses",
      "losses first, then income, then distributions",
      "distributions first, then income, then losses",
      "every item at once, netted together"
    ],
    "answer": 0,
    "explain": "Income goes on before anything comes off, which is what lets a distribution be tax-free out of profits earned the same year. Losses come last, after distributions, so a shareholder who took money out may find less basis left to absorb the loss."
  },
  {
    "id": "basis-03",
    "section": "basis",
    "topic": "The floor at zero",
    "difficulty": "easy",
    "q": "A shareholder's stock basis is $8,000 when a $20,000 loss is allocated. Stock basis afterwards is",
    "choices": [
      "zero",
      "negative $12,000",
      "$8,000",
      "negative $20,000"
    ],
    "answer": 0,
    "explain": "Stock basis stops at zero and never goes negative. The $12,000 that could not be absorbed is suspended and waits for basis to come back, either from future income or from putting more money into the corporation."
  },
  {
    "id": "basis-04",
    "section": "basis",
    "topic": "Distributions never touch debt basis",
    "difficulty": "medium",
    "q": "A shareholder has $10,000 of stock basis and $40,000 of debt basis from a loan to the corporation. A $25,000 distribution leaves",
    "choices": [
      "stock basis at zero, debt basis at $40,000, and $15,000 of gain",
      "stock basis at zero and debt basis at $25,000",
      "stock basis at zero and debt basis at $15,000",
      "stock basis at zero, debt basis at $40,000, and no gain"
    ],
    "answer": 0,
    "explain": "Distributions run against stock basis only — they never reach debt basis, however much of it is sitting there. Once stock basis hits zero the remaining $15,000 is capital gain, and the loan basis is left intact to absorb losses."
  },
  {
    "id": "basis-05",
    "section": "basis",
    "topic": "Losses reach debt basis",
    "difficulty": "medium",
    "q": "A shareholder with $10,000 of stock basis and $40,000 of debt basis is allocated a $30,000 loss. The loss is",
    "choices": [
      "fully deductible, taking stock basis to zero and debt basis to $20,000",
      "deductible only to $10,000, with $20,000 suspended",
      "fully deductible, taking debt basis to $10,000 and leaving stock basis",
      "deductible only to $10,000, with debt basis unaffected"
    ],
    "answer": 0,
    "explain": "Losses do what distributions cannot: once stock basis is exhausted they keep going into debt basis. Here $10,000 of stock basis and $20,000 of the loan absorb the whole loss, which is exactly why a shareholder facing losses is better off lending than guaranteeing. Clearing the basis limit is only the first hurdle -- the at-risk and passive activity rules are tested after it."
  },
  {
    "id": "basis-06",
    "section": "basis",
    "topic": "Guarantees",
    "difficulty": "medium",
    "q": "A shareholder personally guarantees the corporation's $200,000 bank line of credit. The guarantee gives the shareholder",
    "choices": [
      "no basis for the guarantee itself",
      "$200,000 of debt basis immediately",
      "debt basis equal to the outstanding balance each year",
      "stock basis of $200,000"
    ],
    "answer": 0,
    "explain": "A guarantee is a promise, not an economic outlay, and it creates no basis while the corporation is still servicing its own loan. Basis appears only if the guarantee is called and the shareholder actually reaches into their own pocket."
  },
  {
    "id": "basis-07",
    "section": "basis",
    "topic": "Corporate-level borrowing",
    "difficulty": "medium",
    "q": "The corporation borrows $300,000 from a bank on its own credit. The sole shareholder's stock basis",
    "choices": [
      "does not change",
      "increases by $300,000",
      "increases by $300,000 only if the loan is secured",
      "increases as the corporation repays the loan"
    ],
    "answer": 0,
    "explain": "This is the sharpest difference between an S corporation and a partnership. A partner picks up basis for entity-level debt; an S corporation shareholder does not, which is why it matters so much whether a loan runs through the shareholder or straight to the corporation."
  },
  {
    "id": "basis-08",
    "section": "basis",
    "topic": "Restoring debt basis first",
    "difficulty": "medium",
    "q": "A shareholder has zero stock basis and debt basis cut to $5,000 from an original $30,000. An allocation of $18,000 of income restores",
    "choices": [
      "debt basis first, up to its original amount",
      "stock basis first, then debt basis",
      "both accounts proportionately",
      "stock basis only"
    ],
    "answer": 0,
    "explain": "Loan basis that losses ate into is rebuilt before any income reaches stock basis. It matters because repaying a loan whose basis has been reduced produces income for the shareholder, and restoring that basis first is what heads the problem off."
  },
  {
    "id": "basis-09",
    "section": "basis",
    "topic": "Suspended losses",
    "difficulty": "medium",
    "q": "A shareholder has $14,000 of losses suspended for lack of basis. Those losses",
    "choices": [
      "carry forward until basis is restored",
      "expire at the end of the following year",
      "are deductible against other income now",
      "transfer to the buyer if the stock is sold"
    ],
    "answer": 0,
    "explain": "The suspension is indefinite — the loss waits for the shareholder to have basis again, whether from a profitable year or from putting more money in. It belongs to that shareholder personally, so selling the stock generally loses the benefit of it."
  },
  {
    "id": "basis-10",
    "section": "basis",
    "topic": "Tax-exempt income and basis",
    "difficulty": "easy",
    "q": "Tax-exempt interest allocated to a shareholder",
    "choices": [
      "increases stock basis",
      "leaves stock basis unchanged",
      "increases stock basis only when distributed",
      "reduces stock basis as a non-taxable item"
    ],
    "answer": 0,
    "explain": "Every item of income raises basis, taxable or not. If it did not, the shareholder would be taxed on that money when it later came out as a distribution — the basis increase is what keeps the exemption real."
  },
  {
    "id": "basis-11",
    "section": "basis",
    "topic": "Repaying a reduced-basis loan",
    "difficulty": "medium",
    "q": "The corporation repays a $50,000 shareholder loan whose basis prior losses had cut to $30,000. The shareholder reports",
    "choices": [
      "$20,000 of income on the repayment",
      "no income, because a loan repayment returns capital",
      "$50,000 of income on the repayment",
      "a $20,000 capital loss"
    ],
    "answer": 0,
    "explain": "The shareholder already deducted losses against that loan, so collecting the full face amount returns more than the remaining basis and the difference is income. Restoring the loan basis out of profits before the repayment is made is the way to avoid the result."
  },
  {
    "id": "basis-12",
    "section": "basis",
    "topic": "Form 7203",
    "difficulty": "medium",
    "q": "A shareholder must attach Form 7203 to their return when they",
    "choices": [
      "claim a loss from the corporation",
      "own more than 50% of the stock",
      "receive a Schedule K-1 of any kind",
      "hold stock in more than one S corporation"
    ],
    "answer": 0,
    "explain": "The form is triggered by events that turn on basis — claiming a loss, taking a distribution, disposing of stock, or receiving a loan repayment. Simply receiving a K-1 in an otherwise quiet year does not require it."
  },
  {
    "id": "tieout-01",
    "section": "tieout",
    "topic": "Where a distribution shows up",
    "difficulty": "medium",
    "q": "A $60,000 cash distribution is recorded on the books. On the return it appears on",
    "choices": [
      "Schedule L, Schedule M-2, Schedule K and the K-1s",
      "Schedule L, Schedule M-1, Schedule M-2 and the K-1s",
      "Schedule M-2, Schedule K and the K-1s, but not Schedule L",
      "Schedule K and the K-1s alone"
    ],
    "answer": 0,
    "explain": "The distribution reduces book retained earnings on Schedule L, comes out of the AAA on Schedule M-2, is reported on Schedule K, and reaches each shareholder on a K-1 where it reduces stock basis. Schedule M-1 is the one place it does not appear, because it is not an income item."
  },
  {
    "id": "tieout-02",
    "section": "tieout",
    "topic": "Retained earnings above the AAA",
    "difficulty": "medium",
    "q": "Book retained earnings exceed the AAA by $85,000. The most likely explanation is",
    "choices": [
      "profits earned before the S election",
      "distributions the corporation never recorded",
      "an error in the current year's Schedule K",
      "suspended losses at the shareholder level"
    ],
    "answer": 0,
    "explain": "The AAA started at zero on the first day of the S election while book retained earnings carried the C-year profits forward, and that gap persists indefinitely. Tax-exempt income and non-deductible expenses separate the two as well, but rarely by that much."
  },
  {
    "id": "tieout-03",
    "section": "tieout",
    "topic": "Basis above the AAA",
    "difficulty": "medium",
    "q": "Aggregate shareholder stock basis exceeds the ending AAA. A routine reason is",
    "choices": [
      "capital the shareholders contributed",
      "distributions charged against the AAA",
      "distributions that exceeded stock basis",
      "losses the corporation has not yet reported"
    ],
    "answer": 0,
    "explain": "Basis includes what the shareholders paid in, and the AAA never sees a capital contribution. Tax-exempt income does the same thing, lifting basis while going to the other adjustments account. The two accounts answer different questions and are not expected to agree."
  },
  {
    "id": "tieout-04",
    "section": "tieout",
    "topic": "Tying M-1 to the balance sheet",
    "difficulty": "medium",
    "q": "Book net income on the first line of Schedule M-1 should agree with",
    "choices": [
      "the change in retained earnings plus distributions",
      "the ending AAA plus the year's distributions",
      "ordinary business income on page 1",
      "the total of the Schedule K-1s"
    ],
    "answer": 0,
    "explain": "Retained earnings moves by book income less distributions, so adding the distributions back to the movement recovers book income. The check assumes nothing else was posted straight to equity -- a prior period adjustment or a restatement charged directly to retained earnings will break it. Otherwise it is the quickest test that the balance sheet and the income statement came out of the same trial balance."
  },
  {
    "id": "tieout-05",
    "section": "tieout",
    "topic": "Diagnosing an out-of-balance sheet",
    "difficulty": "medium",
    "q": "Schedule L is out of balance by exactly the amount of the current year's net income. The likely cause is",
    "choices": [
      "the closing entry to retained earnings was never posted",
      "distributions were recorded twice",
      "an asset was entered without its offsetting liability",
      "the beginning balance sheet was entered incorrectly"
    ],
    "answer": 0,
    "explain": "When the difference equals net income to the dollar, the income statement has not been rolled into equity. Errors in distributions or opening balances throw the sheet out by their own amount, which is rarely the same figure."
  },
  {
    "id": "tieout-06",
    "section": "tieout",
    "topic": "Following tax-exempt income",
    "difficulty": "medium",
    "q": "Follow $9,000 of tax-exempt interest through the return. It increases",
    "choices": [
      "book retained earnings, the OAA and stock basis",
      "book retained earnings, the AAA and stock basis",
      "the AAA alone",
      "stock basis alone"
    ],
    "answer": 0,
    "explain": "The interest is income on the books, so retained earnings rises. For tax it goes to the other adjustments account rather than the AAA, and it lifts stock basis so the money can come out later without being taxed. On Schedule M-1 it is a subtraction."
  },
  {
    "id": "tieout-07",
    "section": "tieout",
    "topic": "Following a non-deductible expense",
    "difficulty": "medium",
    "q": "A $4,000 non-deductible expense unrelated to tax-exempt income reduces",
    "choices": [
      "book retained earnings, the AAA and stock basis",
      "book retained earnings alone",
      "the AAA alone",
      "the other adjustments account and stock basis"
    ],
    "answer": 0,
    "explain": "The money is gone, so all three accounts feel it — the books, the AAA and the shareholder's basis. The one carve-out is a non-deductible expense related to tax-exempt income, which comes out of the other adjustments account instead of the AAA. On Schedule M-1 either kind is added back, because the books took a deduction the return does not allow."
  },
  {
    "id": "tieout-08",
    "section": "tieout",
    "topic": "The first S year",
    "difficulty": "medium",
    "q": "A corporation converts from C to S. Carrying into the first S year are",
    "choices": [
      "book retained earnings and accumulated E&P, with the AAA at zero",
      "the AAA and accumulated E&P, with retained earnings at zero",
      "book retained earnings alone",
      "accumulated E&P alone, with the books reset"
    ],
    "answer": 0,
    "explain": "The books do not restart, so retained earnings carries. The earnings and profits from the C years survive too and create the dividend layer in the distribution ordering rules. The AAA is the only one of the three that begins the S election at zero."
  },
  {
    "id": "tieout-09",
    "section": "tieout",
    "topic": "When the K-1s do not foot",
    "difficulty": "easy",
    "q": "The Schedule K-1s show $91,000 of ordinary income in total while Schedule K shows $90,000. The preparer should",
    "choices": [
      "find the $1,000 before filing",
      "adjust Schedule K up to $91,000",
      "report the difference on Schedule M-1",
      "allocate the $1,000 to the majority shareholder"
    ],
    "answer": 0,
    "explain": "The K-1s are slices of Schedule K and have to add back to it exactly. A rounding difference in the allocation percentages is the usual cause, and it gets fixed in the allocation rather than by moving the corporate total or inventing an M-1 adjustment."
  },
  {
    "id": "tieout-10",
    "section": "tieout",
    "topic": "Distributing past the AAA",
    "difficulty": "medium",
    "q": "A corporation with no accumulated E&P distributes $30,000 more than its AAA. On the return the excess",
    "choices": [
      "stops at the AAA floor and is tested against stock basis",
      "creates a dividend to the shareholders",
      "drives the AAA to negative $30,000",
      "is reclassified as a loan to the shareholders"
    ],
    "answer": 0,
    "explain": "The AAA cannot go below zero on a distribution, so it simply stops. Whether the shareholder pays tax turns on stock basis, not on the AAA — anything beyond basis is capital gain. With no earnings and profits there is no dividend layer to reach."
  },
  {
    "id": "tieout-11",
    "section": "tieout",
    "topic": "Three equity figures",
    "difficulty": "medium",
    "q": "Schedule L equity, the Schedule M-2 total and aggregate shareholder basis are three figures that",
    "choices": [
      "each answer a different question",
      "must all agree before the return is filed",
      "agree whenever the corporation has one shareholder",
      "agree once Opening Balance Equity is cleared"
    ],
    "answer": 0,
    "explain": "Book equity, the corporation's tax equity accounts and each shareholder's own investment record are built from different inputs and are not designed to tie. Chasing agreement between them is the most common way a preparer loses a day on the back of the return."
  },
  {
    "id": "tieout-12",
    "section": "tieout",
    "topic": "What genuinely has to tie",
    "difficulty": "easy",
    "q": "Which pair genuinely has to agree on a correctly prepared return?",
    "choices": [
      "Schedule L total assets and total liabilities plus equity",
      "the ending AAA and book retained earnings",
      "the Schedule M-2 total and Schedule L equity",
      "the ending AAA and aggregate stock basis"
    ],
    "answer": 0,
    "explain": "The balance sheet has to balance, and that one is arithmetic. The other three pairs are different accounts measuring different things, and expecting them to match is what sends preparers hunting for errors that are not there."
  },
  {
    "id": "software-01",
    "section": "software",
    "topic": "What auto-balance does",
    "difficulty": "easy",
    "q": "Drake's auto-balance feature reacts to a Schedule L that does not balance by",
    "choices": [
      "adjusting retained earnings by the difference",
      "refusing to calculate the return",
      "generating an EF message that blocks e-filing",
      "zeroing the balance sheet entirely"
    ],
    "answer": 0,
    "explain": "Auto-balance forces the two sides together by moving the retained earnings line on Schedule L by whatever the out-of-balance amount is. It does not stop you and it does not block the e-file. The return simply comes out looking balanced."
  },
  {
    "id": "software-02",
    "section": "software",
    "topic": "The default setting",
    "difficulty": "easy",
    "q": "Out of the box, Drake's auto-balance is",
    "choices": [
      "on for every business return with a balance sheet",
      "off until enabled per return",
      "on only for 1065 returns",
      "off until enabled in Setup > Options"
    ],
    "answer": 0,
    "explain": "It is on by default for the 1120, 1120-S, 1065 and 990 packages. That is the part that catches people out: a preparer who has never touched the setting has been filing auto-balanced returns without necessarily knowing it."
  },
  {
    "id": "software-03",
    "section": "software",
    "topic": "How Drake tells you",
    "difficulty": "medium",
    "q": "When auto-balance makes an adjustment, Drake reports it through",
    "choices": [
      "Note 303 on the NOTES page in View/Print",
      "an EF message that has to be cleared",
      "a red entry in the Calculation Results window",
      "a WK_ worksheet printed behind Schedule L"
    ],
    "answer": 0,
    "explain": "Drake does tell you, but quietly. Note 303 appears on the NOTES page when you view or print the return. A note is informational, so unlike an EF message it never has to be cleared and it does not stop the return going out the door."
  },
  {
    "id": "software-04",
    "section": "software",
    "topic": "Filing an auto-balanced return",
    "difficulty": "medium",
    "q": "A return whose Schedule L was auto-balanced",
    "choices": [
      "can be e-filed with the adjustment in place",
      "is blocked until the difference is found",
      "must be paper filed",
      "is rejected by the IRS on submission"
    ],
    "answer": 0,
    "explain": "Nothing about auto-balance stops the return. The IRS receives a balance sheet that foots, because it does foot once the plug is in. The error is now buried inside the retained earnings figure instead of sitting in plain sight."
  },
  {
    "id": "software-05",
    "section": "software",
    "topic": "The per-return switch",
    "difficulty": "medium",
    "q": "To change auto-balance for one return only, you go to",
    "choices": [
      "the PRNT screen",
      "the 8879 screen",
      "screen L, the balance sheet itself",
      "the MISC screen"
    ],
    "answer": 0,
    "explain": "The per-return switch lives on PRNT, the print options screen, which is not where most preparers would think to look for something that changes a number on Schedule L. The global equivalent sits under Setup > Options."
  },
  {
    "id": "software-06",
    "section": "software",
    "topic": "Reverse autobalance setup option",
    "difficulty": "medium",
    "q": "In Drake20 and later, checking the PRNT screen's auto-balance box",
    "choices": [
      "flips whatever the global setting is for this return",
      "turns auto-balance off regardless of the global setting",
      "turns auto-balance on regardless of the global setting",
      "restores a retained earnings figure auto-balance changed"
    ],
    "answer": 0,
    "explain": "The box reverses the setup option rather than setting it to off. With auto-balance on globally, checking it turns the feature off for that return; with auto-balance already off globally, checking it turns the feature back on. Older versions used a plainer \"Turn off autobalance\" box that only went one way."
  },
  {
    "id": "software-07",
    "section": "software",
    "topic": "The global switch",
    "difficulty": "easy",
    "q": "Auto-balance is turned off for every return at",
    "choices": [
      "Setup > Options > Calculation & View/Print",
      "Setup > Options > Data Entry",
      "Setup > Options > Form & Schedule Options",
      "Setup > Pricing"
    ],
    "answer": 0,
    "explain": "The global switch is on the Calculation & View/Print tab of Setup > Options, described there as turning off auto-balance of the balance sheet. Firms that do their own bookkeeping often turn it off once, so a balance sheet that does not foot shows up as a problem to fix rather than a number to file."
  },
  {
    "id": "software-08",
    "section": "software",
    "topic": "Before a trial balance import",
    "difficulty": "medium",
    "q": "Drake recommends turning auto-balance off before",
    "choices": [
      "importing a trial balance",
      "e-filing the return",
      "printing the K-1s",
      "entering shareholder basis"
    ],
    "answer": 0,
    "explain": "The point of a trial balance import is to find out whether the books actually tie. With auto-balance on, any discrepancy in the imported figures is absorbed into retained earnings on the way in and you never learn it was there."
  },
  {
    "id": "software-09",
    "section": "software",
    "topic": "What the plugged figure is",
    "difficulty": "medium",
    "q": "After auto-balance runs, the retained earnings figure on Schedule L is",
    "choices": [
      "a plug that no longer ties to the books",
      "the book figure, unchanged",
      "the ending AAA from Schedule M-2",
      "the beginning balance rolled forward"
    ],
    "answer": 0,
    "explain": "Whatever the books said retained earnings were, the printed return now says something else, off by exactly the amount you were out of balance. Every downstream check that uses it, against the trial balance or against last year's return, now fails for a reason that has nothing to do with the books."
  },
  {
    "id": "software-10",
    "section": "software",
    "topic": "What it leaves untouched",
    "difficulty": "medium",
    "q": "Auto-balance adjusts Schedule L. Schedule M-2 is",
    "choices": [
      "left untouched by the feature",
      "adjusted by the same amount",
      "adjusted in the opposite direction",
      "suppressed until the balance sheet is fixed"
    ],
    "answer": 0,
    "explain": "The feature is a balance sheet fix and nothing more. M-2 keeps computing the AAA from the income, loss and distribution figures you entered, so the gap between Schedule L retained earnings and M-2 widens by exactly the plug. That widening gap is often the first clue anything happened."
  },
  {
    "id": "software-11",
    "section": "software",
    "topic": "Reading the damage",
    "difficulty": "medium",
    "q": "Schedule L retained earnings sit $6,200 away from the trial balance and Note 303 is on the NOTES page. That $6,200 is",
    "choices": [
      "the amount the balance sheet was out by",
      "a rounding difference Drake introduced",
      "the current year's non-deductible expenses",
      "the gap between book and tax depreciation"
    ],
    "answer": 0,
    "explain": "Auto-balance moves retained earnings by exactly the out-of-balance amount, so the gap it leaves behind measures the error for you. Read it as a clue rather than a nuisance: you now know precisely how much you are hunting for."
  },
  {
    "id": "software-12",
    "section": "software",
    "topic": "What auto-balance is not",
    "difficulty": "easy",
    "q": "Auto-balance is best understood as",
    "choices": [
      "a display fix that leaves the real error in place",
      "a reconciliation of book to tax",
      "a check that Schedule L was entered correctly",
      "an adjustment the IRS requires"
    ],
    "answer": 0,
    "explain": "It makes the return printable, not correct. Nothing about it looks for the missing entry, reconciles anything, or is required by anyone. On a return where the books genuinely tie it never fires at all, which is the strongest argument for turning it off and treating a firing as a bug report."
  }
];
