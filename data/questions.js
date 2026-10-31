/* FAR Blitz question bank -- CPA Exam FAR section, 13 sections, 240 questions.
   Original content authored against the AICPA FAR blueprint and adversarially
   reviewed for technical accuracy and exam craft. Choice order is shuffled at
   display time; 'answer' is the index of the correct choice.
   FAR_SECTIONS/FAR_QUESTIONS are the engine's global names across every app. */

var FAR_SECTIONS = [
  {
    "id": "framework",
    "name": "Concepts & Financial Statements",
    "short": "Concepts",
    "emoji": "📚"
  },
  {
    "id": "revenue",
    "name": "Revenue Recognition (ASC 606)",
    "short": "Revenue",
    "emoji": "💵"
  },
  {
    "id": "assets1",
    "name": "Cash, Receivables & Inventory",
    "short": "Inventory",
    "emoji": "📦"
  },
  {
    "id": "assets2",
    "name": "PP&E & Intangibles",
    "short": "PP&E",
    "emoji": "🏭"
  },
  {
    "id": "invest",
    "name": "Investments & Fair Value",
    "short": "Investments",
    "emoji": "📊"
  },
  {
    "id": "liab",
    "name": "Liabilities, Bonds & Contingencies",
    "short": "Liabilities",
    "emoji": "🧾"
  },
  {
    "id": "leases",
    "name": "Leases (ASC 842)",
    "short": "Leases",
    "emoji": "🔑"
  },
  {
    "id": "equity",
    "name": "Stockholders’ Equity & EPS",
    "short": "Equity",
    "emoji": "🏛️"
  },
  {
    "id": "cashflow",
    "name": "Statement of Cash Flows",
    "short": "Cash Flows",
    "emoji": "🌊"
  },
  {
    "id": "taxes",
    "name": "Income Taxes (ASC 740)",
    "short": "Inc. Taxes",
    "emoji": "🧾"
  },
  {
    "id": "combos",
    "name": "Consolidations",
    "short": "Consol.",
    "emoji": "🤝"
  },
  {
    "id": "special",
    "name": "Changes, Errors & Interim",
    "short": "Changes",
    "emoji": "🔁"
  },
  {
    "id": "govnfp",
    "name": "Governmental & Not-for-Profit",
    "short": "Gov/NFP",
    "emoji": "🏦"
  },
  {
    "id": "ratios",
    "name": "Ratios, Frameworks & SEC Filings",
    "short": "Ratios",
    "emoji": "📐"
  }
];

var FAR_QUESTIONS = [
  {
    "id": "framework-1",
    "section": "framework",
    "topic": "Fundamental characteristics",
    "difficulty": "easy",
    "q": "Under the FASB conceptual framework, which pair represents the two fundamental qualitative characteristics of useful financial information?",
    "choices": [
      "Comparability and consistency",
      "Relevance and faithful representation",
      "Timeliness and verifiability",
      "Neutrality and materiality"
    ],
    "answer": 1,
    "explain": "Relevance and faithful representation are the two fundamental characteristics. Comparability, verifiability, timeliness, and understandability are only enhancing characteristics — a common trap."
  },
  {
    "id": "framework-2",
    "section": "framework",
    "topic": "Enhancing characteristics",
    "difficulty": "medium",
    "q": "A firm releases earnings quickly using rough estimates so investors can act on the news. Which enhancing qualitative characteristic is it prioritizing?",
    "choices": [
      "Timeliness",
      "Verifiability",
      "Comparability",
      "Understandability"
    ],
    "answer": 0,
    "explain": "Timeliness means information is available in time to influence decisions. Rushing with rough estimates trades away verifiability to gain timeliness."
  },
  {
    "id": "framework-3",
    "section": "framework",
    "topic": "Financial statement elements",
    "difficulty": "easy",
    "q": "Under the FASB conceptual framework, which element of financial statements is the residual interest in assets after deducting liabilities?",
    "choices": [
      "Comprehensive income",
      "Gains",
      "Investments by owners",
      "Equity"
    ],
    "answer": 3,
    "explain": "Equity (net assets) is defined as the residual interest in the assets of an entity that remains after deducting its liabilities. Comprehensive income measures changes in equity, not the residual itself."
  },
  {
    "id": "framework-4",
    "section": "framework",
    "topic": "Measurement bases",
    "difficulty": "easy",
    "q": "Which measurement basis reports an asset at the price that would be received to sell it in an orderly transaction between market participants at the measurement date?",
    "choices": [
      "Fair value",
      "Historical cost",
      "Current replacement cost",
      "Net realizable value"
    ],
    "answer": 0,
    "explain": "Fair value (ASC 820) is an exit price — the amount received to sell an asset in an orderly transaction between market participants. Replacement cost is an entry price; NRV deducts disposal costs."
  },
  {
    "id": "framework-5",
    "section": "framework",
    "topic": "Going concern",
    "difficulty": "medium",
    "q": "Management concludes substantial doubt exists about the entity's ability to continue as a going concern and its plans do not alleviate it. What does GAAP require?",
    "choices": [
      "Restate the prior-year statements",
      "Adopt the liquidation basis of accounting",
      "Disclose the conditions and plans in the notes",
      "Reclassify all liabilities as current"
    ],
    "answer": 2,
    "explain": "Unalleviated substantial doubt requires note disclosure of the conditions, management's plans, and a statement of substantial doubt. Liquidation basis applies only when liquidation is imminent."
  },
  {
    "id": "framework-6",
    "section": "framework",
    "topic": "OCI items",
    "difficulty": "easy",
    "q": "Which item is reported in other comprehensive income rather than net income?",
    "choices": [
      "Unrealized gain on trading securities",
      "Unrealized gain on available-for-sale debt securities",
      "Gain on sale of equipment",
      "Goodwill impairment loss"
    ],
    "answer": 1,
    "explain": "OCI holds the PUFIE items: pension adjustments, unrealized gains/losses on AFS debt, foreign currency translation, instrument-specific credit risk on fair-value-option liabilities, and the effective portion of cash flow hedges. Trading security gains go to net income."
  },
  {
    "id": "framework-7",
    "section": "framework",
    "topic": "Comprehensive income",
    "difficulty": "medium",
    "q": "Net income is $200,000. The company also has a $30,000 foreign currency translation loss and a $10,000 pension loss in OCI. What is comprehensive income?",
    "choices": [
      "$240,000",
      "$200,000",
      "$160,000",
      "$170,000"
    ],
    "answer": 2,
    "explain": "Comprehensive income is net income plus or minus OCI: $200,000 − $30,000 − $10,000 = $160,000. Both OCI items here are losses, so they reduce comprehensive income."
  },
  {
    "id": "framework-8",
    "section": "framework",
    "topic": "Current assets",
    "difficulty": "easy",
    "q": "Which item is classified as a current asset on the balance sheet?",
    "choices": [
      "Prepaid rent covering the next 12 months",
      "Cash restricted for bond repayment in 5 years",
      "Land held for a future plant site",
      "Cash surrender value of life insurance"
    ],
    "answer": 0,
    "explain": "Prepaid expenses to be consumed within one year or the operating cycle are current. Restricted cash for long-term debt, land held for future use, and CSV of life insurance are all noncurrent."
  },
  {
    "id": "framework-9",
    "section": "framework",
    "topic": "Working capital",
    "difficulty": "easy",
    "q": "A company has cash $50,000, receivables $30,000, inventory $20,000, equipment $80,000, and accounts payable $40,000. What is working capital?",
    "choices": [
      "$140,000",
      "$100,000",
      "$20,000",
      "$60,000"
    ],
    "answer": 3,
    "explain": "Working capital is current assets minus current liabilities: ($50,000 + $30,000 + $20,000) − $40,000 = $60,000. Equipment is noncurrent and is excluded — the classic trap."
  },
  {
    "id": "framework-10",
    "section": "framework",
    "topic": "Discontinued operations",
    "difficulty": "medium",
    "q": "Under current GAAP, a disposal of a component qualifies as a discontinued operation when it represents what?",
    "choices": [
      "A component that was sold at a loss",
      "A strategic shift with a major effect on results",
      "A product line whose operations have ceased",
      "A subsidiary that was sold to an unrelated party"
    ],
    "answer": 1,
    "explain": "Discontinued operations treatment requires a disposal that represents a strategic shift having a major effect on operations and financial results — not merely any sale or closure."
  },
  {
    "id": "framework-11",
    "section": "framework",
    "topic": "Disc ops reporting",
    "difficulty": "medium",
    "q": "A discontinued component had a pretax operating loss of $100,000. The tax rate is 25%. What amount is reported in discontinued operations?",
    "choices": [
      "$75,000 loss",
      "$100,000 loss",
      "$25,000 loss",
      "$125,000 loss"
    ],
    "answer": 0,
    "explain": "Discontinued operations are presented net of tax below income from continuing operations: $100,000 × (1 − 0.25) = $75,000 loss. Reporting the gross amount is the trap."
  },
  {
    "id": "framework-12",
    "section": "framework",
    "topic": "Subsequent events",
    "difficulty": "easy",
    "q": "After year-end but before the statements are issued, a customer owing a large year-end receivable declares bankruptcy after a long deterioration of its financial condition. What is the proper treatment?",
    "choices": [
      "Disclose in the notes only",
      "Report it in next year's statements",
      "Adjust the year-end financial statements",
      "Take no action until cash is written off"
    ],
    "answer": 2,
    "explain": "The customer's insolvency existed at the balance sheet date; the bankruptcy merely confirms it. That is a recognized (Type I) subsequent event requiring adjustment, not mere disclosure."
  },
  {
    "id": "framework-13",
    "section": "framework",
    "topic": "Change in estimate",
    "difficulty": "medium",
    "q": "Equipment cost $100,000 with a 10-year life, no salvage, straight-line. After 2 years, remaining useful life is revised to 4 years. What is Year 3 depreciation?",
    "choices": [
      "$10,000",
      "$20,000",
      "$25,000",
      "$8,000"
    ],
    "answer": 1,
    "explain": "A change in estimate is applied prospectively: remaining book value of $80,000 ($100,000 − $20,000 taken) is spread over the new 4-year remaining life = $20,000 per year."
  },
  {
    "id": "framework-14",
    "section": "framework",
    "topic": "Error correction",
    "difficulty": "medium",
    "q": "In Year 2, a company discovers that Year 1 depreciation expense was materially understated, by $20,000. The tax rate is 25%. What is the adjustment to beginning Year 2 retained earnings?",
    "choices": [
      "$20,000 decrease",
      "$5,000 decrease",
      "No adjustment; correct prospectively",
      "$15,000 decrease"
    ],
    "answer": 3,
    "explain": "A material error is corrected as a prior period adjustment to beginning retained earnings, net of tax: $20,000 × (1 − 0.25) = $15,000 decrease. Prospective treatment is for changes in estimate, not errors."
  },
  {
    "id": "framework-15",
    "section": "framework",
    "topic": "Advance collections",
    "difficulty": "easy",
    "q": "A company collects cash in December for services it will perform in January. What does the December 31 balance sheet report?",
    "choices": [
      "Revenue, because the cash has been collected",
      "A contract liability for the unearned amount",
      "A contract asset until the services begin",
      "Nothing, until the services are performed"
    ],
    "answer": 1,
    "explain": "Cash received before performance creates a contract liability (unearned revenue). Revenue waits for performance; a contract asset arises in the opposite case, when performance precedes the right to bill."
  },
  {
    "id": "framework-16",
    "section": "framework",
    "topic": "Balance sheet offsetting",
    "difficulty": "medium",
    "q": "When may an asset and a liability be offset and shown net on the balance sheet?",
    "choices": [
      "Whenever the asset and liability involve the same counterparty and currency",
      "When an enforceable right of setoff exists and the entity intends to settle net",
      "Whenever both the asset and the liability are classified as current",
      "Never — offsetting is prohibited for all assets and liabilities under GAAP"
    ],
    "answer": 1,
    "explain": "Offsetting requires a valid right of setoff: two parties owing each other determinable amounts, a legal right to set off, intent to do so, and enforceability at law. Same-counterparty status alone is not enough."
  },
  {
    "id": "framework-17",
    "section": "framework",
    "topic": "Related party disclosures",
    "difficulty": "medium",
    "q": "Which statement may generally not be made in the related party note?",
    "choices": [
      "A description of the nature of the related party relationship",
      "The dollar amounts of the transactions for each period presented",
      "That the transaction terms were equivalent to an arm's-length exchange",
      "Amounts due to and from related parties at the balance sheet date"
    ],
    "answer": 2,
    "explain": "Disclosures cover the relationship, the transactions, the amounts, and period-end balances. Claiming arm's-length equivalence is prohibited unless the entity can actually substantiate it — such claims rarely can be."
  },
  {
    "id": "framework-18",
    "section": "framework",
    "topic": "Accounting policies note",
    "difficulty": "easy",
    "q": "Which item belongs in the summary of significant accounting policies?",
    "choices": [
      "The inventory costing method in use, such as FIFO",
      "The composition of the plant asset balances",
      "The maturity dates of long-term debt",
      "The details of the pension plan's assets"
    ],
    "answer": 0,
    "explain": "The policies note describes the methods and principles chosen — inventory costing, depreciation methods, consolidation basis, revenue recognition. Compositions, maturities and plan details are separate supporting notes."
  },
  {
    "id": "revenue-1",
    "section": "revenue",
    "topic": "Five-step model",
    "difficulty": "easy",
    "q": "What is the first step in the ASC 606 five-step revenue recognition model?",
    "choices": [
      "Determine the transaction price",
      "Identify the performance obligations",
      "Identify the contract with the customer",
      "Allocate the transaction price"
    ],
    "answer": 2,
    "explain": "The model starts by identifying a contract with a customer; only then are performance obligations identified, the price determined and allocated, and revenue recognized upon satisfaction."
  },
  {
    "id": "revenue-2",
    "section": "revenue",
    "topic": "Revenue recognition timing",
    "difficulty": "easy",
    "q": "Under ASC 606, when is revenue recognized for a performance obligation?",
    "choices": [
      "When cash is collected from the customer",
      "When control of the good or service transfers",
      "When risks and rewards of ownership pass",
      "When the contract is signed"
    ],
    "answer": 1,
    "explain": "ASC 606 recognizes revenue when (or as) control transfers to the customer. The risks-and-rewards test is the superseded legacy model and is the classic trap answer."
  },
  {
    "id": "revenue-3",
    "section": "revenue",
    "topic": "Performance obligations",
    "difficulty": "easy",
    "q": "Under ASC 606, a promised good or service is a separate performance obligation when what condition is met?",
    "choices": [
      "It is distinct and separately identifiable in the contract",
      "It is billed on a separate invoice line",
      "It is delivered at the start of the contract",
      "It takes more than one period to provide"
    ],
    "answer": 0,
    "explain": "A promise is a separate performance obligation only if it is distinct — capable of standing alone and separately identifiable within the contract. Separate invoicing is irrelevant."
  },
  {
    "id": "revenue-4",
    "section": "revenue",
    "topic": "Software arrangements",
    "difficulty": "medium",
    "q": "A vendor sells standard software plus routine installation that other firms could also perform. Under ASC 606, what are the performance obligations?",
    "choices": [
      "The software and the installation, as two distinct performance obligations",
      "The software and installation combined as a single performance obligation",
      "The software only; routine installation is a fulfillment activity, not a promise",
      "The software, the installation and an implied assurance warranty, as three obligations"
    ],
    "answer": 0,
    "explain": "Because the installation is routine and could be performed by others, it does not significantly customize the software; each promise is distinct, so there are two performance obligations."
  },
  {
    "id": "revenue-5",
    "section": "revenue",
    "topic": "Variable consideration",
    "difficulty": "medium",
    "q": "Under ASC 606, variable consideration is included in the transaction price only to what extent?",
    "choices": [
      "It has been collected in cash",
      "It is probable a significant reversal will not occur",
      "The customer confirms the amount in writing",
      "The contract term is less than one year"
    ],
    "answer": 1,
    "explain": "The constraint limits variable consideration to the amount for which it is probable that a significant revenue reversal will not occur when the uncertainty resolves."
  },
  {
    "id": "revenue-6",
    "section": "revenue",
    "topic": "Rebate estimation",
    "difficulty": "medium",
    "q": "A seller charges $100 per unit, dropping retroactively to $90 per unit if a customer exceeds 1,000 units this year. The seller expects the threshold to be met and sells 100 units. Revenue?",
    "choices": [
      "$9,000",
      "$10,000",
      "$9,500",
      "$1,000"
    ],
    "answer": 0,
    "explain": "Since the volume rebate is expected to apply, revenue is recognized at the expected price: 100 units × $90 = $9,000. Booking $100 per unit would overstate revenue and risk a reversal."
  },
  {
    "id": "revenue-7",
    "section": "revenue",
    "topic": "SSP allocation",
    "difficulty": "medium",
    "q": "A bundle sells for $80. Standalone selling prices are $60 for the product and $40 for the service. How much revenue is allocated to the product?",
    "choices": [
      "$60",
      "$40",
      "$48",
      "$32"
    ],
    "answer": 2,
    "explain": "Allocate by relative standalone selling price: $60 / $100 × $80 = $48. Using the full $60 standalone price ignores the required proportional allocation of the bundle discount."
  },
  {
    "id": "revenue-8",
    "section": "revenue",
    "topic": "Discount allocation",
    "difficulty": "easy",
    "q": "A bundle's total price is less than the sum of the standalone selling prices of its parts. How is the discount generally allocated?",
    "choices": [
      "Entirely to the first item delivered",
      "Entirely to the lowest-priced item",
      "It is recognized immediately as an expense",
      "Proportionally to all obligations by relative SSP"
    ],
    "answer": 3,
    "explain": "A bundle discount is generally allocated proportionally to all performance obligations based on relative standalone selling prices, unless evidence ties it to specific items."
  },
  {
    "id": "revenue-9",
    "section": "revenue",
    "topic": "Over-time criteria",
    "difficulty": "easy",
    "q": "Which condition supports recognizing revenue over time rather than at a point in time under ASC 606?",
    "choices": [
      "The customer consumes the benefit as the entity performs",
      "The contract lasts longer than one year",
      "The customer pays in monthly installments",
      "The goods ship FOB shipping point"
    ],
    "answer": 0,
    "explain": "Over-time recognition applies when the customer simultaneously receives and consumes benefits as the entity performs (or other control-based criteria). Contract length and payment timing are irrelevant."
  },
  {
    "id": "revenue-10",
    "section": "revenue",
    "topic": "Percentage of completion",
    "difficulty": "medium",
    "q": "A contract has a $500,000 price and $400,000 of total expected costs. Costs incurred to date are $100,000. Under the cost-to-cost method, revenue recognized to date is?",
    "choices": [
      "$100,000",
      "$125,000",
      "$25,000",
      "$500,000"
    ],
    "answer": 1,
    "explain": "Progress is $100,000 / $400,000 = 25% complete, so revenue to date is 25% × $500,000 = $125,000. Recognizing only costs incurred confuses revenue with the completion input."
  },
  {
    "id": "revenue-11",
    "section": "revenue",
    "topic": "Principal vs agent",
    "difficulty": "easy",
    "q": "Under ASC 606, what is the key indicator that an entity is a principal rather than an agent?",
    "choices": [
      "It collects the cash from the end customer",
      "It sets its fee as a percentage of the sale",
      "It controls the good before transfer to the customer",
      "It arranges shipping for the supplier"
    ],
    "answer": 2,
    "explain": "A principal controls the specified good or service before it transfers to the customer and reports gross revenue. Collecting cash or arranging logistics does not by itself indicate control."
  },
  {
    "id": "revenue-12",
    "section": "revenue",
    "topic": "Agent revenue",
    "difficulty": "easy",
    "q": "A ticketing platform, acting as an agent, sells a concert ticket for $200 and remits $170 to the venue, keeping $30. How much revenue does the platform report?",
    "choices": [
      "$200",
      "$170",
      "$0 until the concert takes place",
      "$30"
    ],
    "answer": 3,
    "explain": "An agent reports revenue net — only its $30 fee or commission. Reporting the gross $200 would be correct only if the platform were the principal controlling the ticket."
  },
  {
    "id": "revenue-13",
    "section": "revenue",
    "topic": "Contract balances",
    "difficulty": "medium",
    "q": "A contractor delivers machine 1, but payment becomes due only after machine 2 is delivered next month. What does the contractor record for machine 1?",
    "choices": [
      "Contract asset",
      "Accounts receivable",
      "Contract liability",
      "Refund liability"
    ],
    "answer": 0,
    "explain": "A right to consideration conditioned on something other than the passage of time (here, delivering machine 2) is a contract asset. It becomes a receivable once the right is unconditional."
  },
  {
    "id": "revenue-14",
    "section": "revenue",
    "topic": "Gift card breakage",
    "difficulty": "medium",
    "q": "A retailer sells $10,000 of gift cards and expects 10% will never be redeemed. Customers redeem $4,500, which is 50% of expected redemptions. Breakage revenue recognized to date?",
    "choices": [
      "$1,000",
      "$450",
      "$500",
      "$0"
    ],
    "answer": 2,
    "explain": "Expected breakage of $1,000 is recognized in proportion to the redemption pattern: 50% × $1,000 = $500. Recognizing the full $1,000 upfront is the trap."
  },
  {
    "id": "revenue-15",
    "section": "revenue",
    "topic": "Contract modifications",
    "difficulty": "medium",
    "q": "A modification adds distinct goods to a contract at their standalone selling price. How is the modification treated?",
    "choices": [
      "As a separate contract, leaving the original untouched",
      "As a termination of the old contract and creation of a new one",
      "As a cumulative catch-up adjustment to revenue already recognized",
      "As a retrospective combination of the two contracts"
    ],
    "answer": 0,
    "explain": "Distinct goods priced at standalone selling price make the modification a separate contract. Distinct goods NOT at SSP terminate the old contract prospectively, and non-distinct additions are folded in with a cumulative catch-up."
  },
  {
    "id": "revenue-16",
    "section": "revenue",
    "topic": "Warranty types",
    "difficulty": "medium",
    "q": "A retailer's TV sale carries a legally required two-year warranty covering only defects in materials and workmanship; the customer also buys an optional three-year extended warranty. How is each accounted for?",
    "choices": [
      "Both are separate performance obligations with deferred revenue",
      "The required warranty is accrued as a cost; the extended warranty is a separate performance obligation recognized over its term",
      "Both are accrued as warranty cost at the date of sale",
      "The required warranty is expensed as claims arrive; the extended warranty is revenue at the point of sale"
    ],
    "answer": 1,
    "explain": "An assurance-type warranty is not a performance obligation; it is a cost accrual under ASC 460, which applies the loss-contingency guidance. A service-type warranty the customer can buy separately is its own performance obligation, so its price is deferred and earned over the coverage period."
  },
  {
    "id": "revenue-17",
    "section": "revenue",
    "topic": "Licensing",
    "difficulty": "medium",
    "q": "A franchisor licenses its brand for ten years, and the customer benefits from the brand as it evolves over the term. When is license revenue recognized?",
    "choices": [
      "At the point in time the license period begins, since the brand already exists",
      "Over the license term, because it provides access to symbolic intellectual property",
      "Over the license term, but only if the agreement obliges the franchisor to provide ongoing services",
      "At the point in time the ten-year agreement is signed by both parties"
    ],
    "answer": 1,
    "explain": "Symbolic IP — brands, trade names, franchises — has no standalone functionality; its value depends on the licensor's ongoing activities, so revenue is recognized over time. Functional IP, like completed software, is typically a point-in-time license."
  },
  {
    "id": "revenue-18",
    "section": "revenue",
    "topic": "Significant financing component",
    "difficulty": "medium",
    "q": "A customer pays the full contract price two years before delivery, and the arrangement contains a significant financing component. What does the seller record during the two years?",
    "choices": [
      "Interest income on the advance payment received",
      "Interest expense on the contract liability",
      "Revenue ratably as the delivery date approaches",
      "Nothing, because no performance has occurred"
    ],
    "answer": 1,
    "explain": "When the customer pays significantly in advance, the seller is effectively borrowing from the customer: it accrues interest expense on the contract liability, and the revenue eventually recognized exceeds the cash received by that interest."
  },
  {
    "id": "revenue-19",
    "section": "revenue",
    "topic": "Rights of return",
    "difficulty": "medium",
    "q": "A seller ships goods with a right of return and expects 10% to come back. What does it recognize at the point of sale?",
    "choices": [
      "Revenue for the full amount, with returns booked when they occur",
      "Revenue for 90% plus a refund liability and a return asset",
      "No revenue until the return period lapses",
      "Revenue for the full amount less a bad debt allowance of 10%"
    ],
    "answer": 1,
    "explain": "Expected returns are variable consideration: revenue is limited to the amount the seller expects to keep, the expected refunds sit in a refund liability, and a return asset carries the inventory value of the goods expected back."
  },
  {
    "id": "revenue-20",
    "section": "revenue",
    "topic": "Contract costs",
    "difficulty": "medium",
    "q": "Vega Co. wins a three-year contract to manage a client's IT data center and expects to recover all of its costs through it. Which of the following costs does Vega recognize as an asset under ASC 340-40?",
    "choices": [
      "Salaries of the sales staff for the weeks they spent preparing the winning proposal",
      "A $30,000 fee to an outside bid consultant, payable whether or not the contract was won",
      "Design, migration and testing to move the client's data center onto Vega's platform",
      "Materials wasted through abnormal spoilage in the first month of performance"
    ],
    "answer": 2,
    "explain": "Costs to fulfill a contract that no other standard covers are capitalized only if they relate directly to the contract, generate or enhance resources used to satisfy performance obligations, and are expected to be recovered. Moving the client's data center onto Vega's platform meets all three; it is ASC 340-40's own example (the platform's hardware and software go under ASC 360 and ASC 350-40 instead). Sales salaries and a bid fee owed whatever the outcome are not *incremental* costs of obtaining the contract, and ASC 340-40-25-8 expenses wasted materials, labor and other resources whose cost was not reflected in the contract price."
  },
  {
    "id": "revenue-21",
    "section": "revenue",
    "topic": "Sales commission",
    "difficulty": "medium",
    "q": "On 1 April Year 1, Nimbus Co. signs a four-year service contract that begins the same day; no renewal is expected. It pays its salesperson a $24,000 commission that was owed only because the contract was signed, and it expects to recover the cost through the contract. Services transfer evenly over the term. How much commission expense does Nimbus recognize in calendar Year 1?",
    "choices": [
      "$4,500",
      "$6,000",
      "$24,000",
      "$19,500"
    ],
    "answer": 0,
    "explain": "An incremental, recoverable cost of obtaining a contract is capitalized and amortized in step with the transfer of the services: $24,000 ÷ 48 months × 9 months = **$4,500**. Expensing the whole $24,000 is allowed only under the practical expedient for amortization periods of one year or less; $6,000 ignores the April start, and $19,500 is the asset left on the balance sheet at year end."
  },
  {
    "id": "assets1-1",
    "section": "assets1",
    "topic": "Bank reconciliation",
    "difficulty": "easy",
    "q": "In a bank reconciliation, which item is added to the balance per bank statement?",
    "choices": [
      "Outstanding checks",
      "Bank service charges",
      "Deposits in transit",
      "NSF checks returned"
    ],
    "answer": 2,
    "explain": "Deposits in transit are already in the company's books but not yet on the bank statement, so they are added to the bank balance. Outstanding checks are subtracted; service charges and NSF checks adjust the book balance instead."
  },
  {
    "id": "assets1-2",
    "section": "assets1",
    "topic": "Adjusted cash balance",
    "difficulty": "easy",
    "q": "The bank statement shows $50,000. Deposits in transit are $8,000 and outstanding checks are $3,000. What is the true cash balance?",
    "choices": [
      "$45,000",
      "$61,000",
      "$39,000",
      "$55,000"
    ],
    "answer": 3,
    "explain": "True cash = bank balance + deposits in transit − outstanding checks: $50,000 + $8,000 − $3,000 = $55,000. Reversing the adjustments — subtracting deposits in transit and adding outstanding checks — gives the $45,000 trap."
  },
  {
    "id": "assets1-3",
    "section": "assets1",
    "topic": "CECL allowance",
    "difficulty": "medium",
    "q": "Under CECL, when does a company record an allowance for credit losses on trade receivables?",
    "choices": [
      "Only when a loss is probable and estimable",
      "When the account is actually written off",
      "Only after receivables become past due",
      "At initial recognition, based on expected losses"
    ],
    "answer": 3,
    "explain": "CECL is an expected-loss model: lifetime expected credit losses are estimated and recorded when the receivable is first recognized, not when a loss becomes probable (the old incurred-loss trigger)."
  },
  {
    "id": "assets1-4",
    "section": "assets1",
    "topic": "Receivable write-offs",
    "difficulty": "easy",
    "q": "Under the allowance method, what is the effect of writing off a specific uncollectible account?",
    "choices": [
      "Net income decreases",
      "No effect on net receivables or expense",
      "Credit loss expense increases",
      "Total current assets decrease"
    ],
    "answer": 1,
    "explain": "The write-off debits the allowance and credits accounts receivable, so net receivables and income are unchanged. The expense was recognized earlier when the allowance was established."
  },
  {
    "id": "assets1-5",
    "section": "assets1",
    "topic": "Aging of receivables",
    "difficulty": "medium",
    "q": "An aging schedule shows $12,000 of receivables expected to be uncollectible. The allowance has a $2,000 credit balance. What is credit loss expense for the period?",
    "choices": [
      "$10,000",
      "$12,000",
      "$14,000",
      "$2,000"
    ],
    "answer": 0,
    "explain": "The aging result ($12,000) is the required ending allowance balance. With a $2,000 credit balance already there, expense is only the $10,000 needed to reach it."
  },
  {
    "id": "assets1-6",
    "section": "assets1",
    "topic": "Notes receivable",
    "difficulty": "easy",
    "q": "On October 1, a company accepts a $100,000, 6% note due in one year. How much interest revenue is accrued at December 31?",
    "choices": [
      "$6,000",
      "$4,500",
      "$1,500",
      "$3,000"
    ],
    "answer": 2,
    "explain": "Interest accrues only for October through December: $100,000 × 6% × 3/12 = $1,500."
  },
  {
    "id": "assets1-7",
    "section": "assets1",
    "topic": "Factoring receivables",
    "difficulty": "medium",
    "q": "A company factors receivables without recourse and surrenders control to the factor. How is the transfer accounted for?",
    "choices": [
      "As a secured borrowing with a liability",
      "As a sale, derecognizing the receivables",
      "As a deferred revenue arrangement",
      "As a sale only once the factor collects the receivables"
    ],
    "answer": 1,
    "explain": "When control is surrendered, factoring is accounted for as a sale: the receivables are removed from the books and the factor's fee is recognized as a loss."
  },
  {
    "id": "assets1-8",
    "section": "assets1",
    "topic": "Sale vs secured borrowing",
    "difficulty": "medium",
    "q": "Which condition prevents a transfer of receivables from being accounted for as a sale?",
    "choices": [
      "The factor charges a fee",
      "The transfer includes a recourse provision",
      "The receivables are 30 days past due",
      "The transferor retains effective control"
    ],
    "answer": 3,
    "explain": "Sale treatment requires surrendering control: assets isolated, transferee free to pledge or sell, no effective control retained. A recourse provision alone does not prevent sale accounting — a common trap."
  },
  {
    "id": "assets1-9",
    "section": "assets1",
    "topic": "Cost flow assumptions",
    "difficulty": "easy",
    "q": "In a period of rising prices, which inventory cost flow method reports the highest cost of goods sold?",
    "choices": [
      "FIFO",
      "LIFO",
      "Weighted average",
      "Specific identification"
    ],
    "answer": 1,
    "explain": "LIFO charges the newest, highest-cost purchases to cost of goods sold when prices rise, producing the highest COGS and the lowest ending inventory."
  },
  {
    "id": "assets1-10",
    "section": "assets1",
    "topic": "Weighted average cost",
    "difficulty": "medium",
    "q": "Beginning inventory is 100 units at $10. A purchase adds 100 units at $12, and the company then sells 100 units. Under the periodic weighted-average method, what is COGS?",
    "choices": [
      "$1,000",
      "$1,200",
      "$1,100",
      "$2,200"
    ],
    "answer": 2,
    "explain": "Weighted-average cost = ($1,000 + $1,200) ÷ 200 units = $11 per unit, so COGS = 100 × $11 = $1,100. FIFO would give $1,000 and LIFO $1,200; weighted average blends both layers."
  },
  {
    "id": "assets1-11",
    "section": "assets1",
    "topic": "LCNRV vs LCM",
    "difficulty": "medium",
    "q": "Which inventory methods still apply the lower of cost or market test (with ceiling and floor) rather than lower of cost and NRV?",
    "choices": [
      "FIFO and weighted average",
      "Average cost and specific identification",
      "LIFO and the retail inventory method",
      "FIFO and the retail inventory method"
    ],
    "answer": 2,
    "explain": "Under current GAAP, inventory is measured at the lower of cost and NRV — except inventory valued by LIFO or the retail method, which keeps traditional lower of cost or market with the ceiling and floor."
  },
  {
    "id": "assets1-12",
    "section": "assets1",
    "topic": "Gross profit method",
    "difficulty": "medium",
    "q": "Sales are $200,000 and gross profit is 30% of sales. Goods available for sale cost $180,000. What is estimated ending inventory under the gross profit method?",
    "choices": [
      "$60,000",
      "$140,000",
      "$20,000",
      "$40,000"
    ],
    "answer": 3,
    "explain": "Estimated COGS = $200,000 × 70% = $140,000. Ending inventory = goods available $180,000 − COGS $140,000 = $40,000. $60,000 is gross profit and $140,000 is COGS — neither is the inventory left on hand."
  },
  {
    "id": "assets1-13",
    "section": "assets1",
    "topic": "FOB terms",
    "difficulty": "easy",
    "q": "Goods shipped FOB shipping point are still in transit at year end. Which party includes them in inventory?",
    "choices": [
      "The buyer",
      "The seller until delivery",
      "The freight carrier",
      "Neither party while in transit"
    ],
    "answer": 0,
    "explain": "Under FOB shipping point, title passes when the goods leave the seller, so the buyer owns and reports goods in transit. Under FOB destination the seller keeps them until delivery."
  },
  {
    "id": "assets1-14",
    "section": "assets1",
    "topic": "Consignment",
    "difficulty": "easy",
    "q": "Unsold goods out on consignment are physically held by the consignee at year end. Whose inventory are they?",
    "choices": [
      "The consignor's",
      "The consignee's",
      "Neither's until the goods are sold",
      "Whichever party paid the freight"
    ],
    "answer": 0,
    "explain": "The consignor retains title to consigned goods until they are sold, so the goods stay in the consignor's inventory even though the consignee physically holds them."
  },
  {
    "id": "assets1-15",
    "section": "assets1",
    "topic": "Compensating balances",
    "difficulty": "medium",
    "q": "A legally restricted compensating balance held against a long-term borrowing is reported how?",
    "choices": [
      "Within cash and cash equivalents, with note disclosure",
      "As a separately classified noncurrent asset",
      "Netted against the related long-term debt",
      "In a footnote only, with no balance sheet effect"
    ],
    "answer": 1,
    "explain": "A legally restricted compensating balance is segregated from cash, and its classification follows the borrowing that requires it — noncurrent here. Compensating balances that are not legally restricted are disclosed in the notes instead."
  },
  {
    "id": "assets1-16",
    "section": "assets1",
    "topic": "Conventional retail method",
    "difficulty": "medium",
    "q": "Under the conventional retail inventory method, why are net markdowns excluded from the cost-to-retail ratio?",
    "choices": [
      "Because markdowns are rare in retail operations",
      "To produce a lower ratio that approximates lower of average cost or market",
      "Because markdowns are netted against markups before the ratio is computed",
      "To keep the ending inventory at its full retail value"
    ],
    "answer": 1,
    "explain": "Including markups but excluding markdowns deflates the cost-to-retail ratio, which writes ending inventory down toward market — the conservative approximation the conventional method is designed to give."
  },
  {
    "id": "assets1-17",
    "section": "assets1",
    "topic": "Purchase commitments",
    "difficulty": "medium",
    "q": "At year end, the market price of goods under a noncancelable purchase commitment has fallen below the contract price. What is recognized?",
    "choices": [
      "Nothing until the goods are actually delivered",
      "A loss and an estimated liability for the price decline",
      "A direct reduction of ending inventory on hand",
      "A note disclosure only, since no purchase has occurred"
    ],
    "answer": 1,
    "explain": "A material loss on a firm, noncancelable commitment is accrued in the period of the decline, the same way inventory on hand would be written down. Waiting for delivery would push a known loss into a later period."
  },
  {
    "id": "assets1-18",
    "section": "assets1",
    "topic": "Inventoriable costs",
    "difficulty": "easy",
    "q": "Which cost is expensed as incurred rather than included in inventory?",
    "choices": [
      "Freight-in on purchased merchandise",
      "Normal spoilage in the production process",
      "Abnormal spoilage from a machine breakdown",
      "Factory overhead applied to production"
    ],
    "answer": 2,
    "explain": "Abnormal amounts of spoilage, idle facility expense and reworks are period costs. Freight-in, normal spoilage and applied overhead are all part of the cost of bringing inventory to its existing condition and location."
  },
  {
    "id": "assets2-1",
    "section": "assets2",
    "topic": "Capitalize vs expense",
    "difficulty": "easy",
    "q": "Which cost related to a machine already in use should be capitalized rather than expensed?",
    "choices": [
      "Routine annual maintenance",
      "Repainting the machine housing",
      "An overhaul that extends its useful life",
      "Replacing a small broken part"
    ],
    "answer": 2,
    "explain": "Costs that extend useful life, increase capacity, or improve efficiency are capitalized. Routine maintenance, repainting, and minor repairs merely maintain the asset and are expensed."
  },
  {
    "id": "assets2-2",
    "section": "assets2",
    "topic": "Acquisition costs",
    "difficulty": "easy",
    "q": "Which cost is included in the capitalized cost of newly purchased equipment?",
    "choices": [
      "Employee training on the equipment",
      "Freight-in and installation costs",
      "Insurance after the asset is in service",
      "Repair of damage caused while unloading"
    ],
    "answer": 1,
    "explain": "Capitalize all costs needed to get the asset to its location and condition for intended use, including freight-in, installation, and testing. Training, post-use insurance, and accident repairs are expensed."
  },
  {
    "id": "assets2-3",
    "section": "assets2",
    "topic": "Straight-line depreciation",
    "difficulty": "easy",
    "q": "Equipment cost $50,000 with a $5,000 salvage value and a 5-year life. What is annual straight-line depreciation?",
    "choices": [
      "$10,000",
      "$5,000",
      "$45,000",
      "$9,000"
    ],
    "answer": 3,
    "explain": "Straight-line = (cost − salvage) ÷ life = ($50,000 − $5,000) ÷ 5 = $9,000 per year. The trap is forgetting to subtract salvage value."
  },
  {
    "id": "assets2-4",
    "section": "assets2",
    "topic": "DDB depreciation",
    "difficulty": "medium",
    "q": "Equipment cost $80,000, salvage value $8,000, 4-year life. What is Year 1 double-declining-balance depreciation?",
    "choices": [
      "$40,000",
      "$36,000",
      "$20,000",
      "$18,000"
    ],
    "answer": 0,
    "explain": "DDB rate = 2 ÷ 4 = 50%, applied to cost ignoring salvage: $80,000 × 50% = $40,000. Deducting salvage first gives $36,000, which is wrong for DDB."
  },
  {
    "id": "assets2-5",
    "section": "assets2",
    "topic": "Units of production",
    "difficulty": "easy",
    "q": "A truck cost $60,000 with $10,000 salvage value and a 100,000-mile expected life. It was driven 20,000 miles this year. What is units-of-production depreciation?",
    "choices": [
      "$12,000",
      "$10,000",
      "$50,000",
      "$8,000"
    ],
    "answer": 1,
    "explain": "Rate = ($60,000 − $10,000) ÷ 100,000 miles = $0.50 per mile; 20,000 miles × $0.50 = $10,000. Unlike DDB, salvage value is used in units-of-production."
  },
  {
    "id": "assets2-6",
    "section": "assets2",
    "topic": "Impairment test",
    "difficulty": "medium",
    "q": "In the recoverability test for a held-for-use asset, the carrying amount is first compared to what?",
    "choices": [
      "Fair value less costs to sell",
      "Present value of future cash flows",
      "Undiscounted future cash flows",
      "Net realizable value"
    ],
    "answer": 2,
    "explain": "Step 1 compares carrying amount to undiscounted expected future cash flows. Only if the carrying amount is not recoverable is the loss then measured using fair value."
  },
  {
    "id": "assets2-7",
    "section": "assets2",
    "topic": "Impairment loss",
    "difficulty": "medium",
    "q": "A machine's carrying amount is $100,000, undiscounted future cash flows are $90,000, and fair value is $70,000. What impairment loss is recognized?",
    "choices": [
      "$10,000",
      "$20,000",
      "$0",
      "$30,000"
    ],
    "answer": 3,
    "explain": "Cash flows ($90,000) are below carrying amount ($100,000), so the asset is impaired. The loss is carrying amount minus fair value: $100,000 − $70,000 = $30,000 — not the $10,000 cash-flow shortfall."
  },
  {
    "id": "assets2-19",
    "section": "assets2",
    "topic": "Capitalized interest amount",
    "difficulty": "medium",
    "q": "A company is building a warehouse for its own use; weighted-average accumulated expenditures for the year are $400,000. It has a $300,000 loan taken specifically to finance the warehouse, at 8%, and other borrowings of $1,000,000 at 10%, all outstanding the full year. How much interest is capitalized?",
    "choices": [
      "$124,000",
      "$32,000",
      "$40,000",
      "$34,000"
    ],
    "answer": 3,
    "explain": "Apply the construction loan's rate to the expenditures it funds and the general-debt rate to the excess: $300,000 × 8% + $100,000 × 10% = **$34,000**. Actual interest of $124,000 is only the ceiling, and one rate on the whole $400,000 ignores which debt funds which dollars."
  },
  {
    "id": "assets2-24",
    "section": "assets2",
    "topic": "Cost of land",
    "difficulty": "medium",
    "q": "A company buys a site with an old building for $500,000, intending to raze the building and construct a new plant. It pays $20,000 to demolish the old building and receives $5,000 for salvaged materials, pays $10,000 in title and legal fees, $15,000 to grade the site, and $30,000 to build a parking lot and fencing. At what amount is the land recorded?",
    "choices": [
      "$570,000",
      "$540,000",
      "$525,000",
      "$545,000"
    ],
    "answer": 1,
    "explain": "Land includes everything spent to get it ready for its intended use, including razing an old building the buyer never meant to keep, net of salvage: $500,000 + $20,000 − $5,000 + $10,000 + $15,000 = **$540,000**. The $30,000 parking lot and fencing are **land improvements** — a separate, depreciable asset — because they wear out; land does not."
  },
  {
    "id": "assets2-20",
    "section": "assets2",
    "topic": "Asset exchange with cash paid",
    "difficulty": "medium",
    "q": "A company trades in equipment with a carrying amount of $30,000 and a fair value of $36,000, and pays $10,000 cash, for a new machine with a fair value of $46,000. The exchange lacks commercial substance. At what amount is the new machine recorded?",
    "choices": [
      "$36,000",
      "$46,000",
      "$40,000",
      "$30,000"
    ],
    "answer": 2,
    "explain": "Without commercial substance, a company that pays cash defers its gain, so the new asset takes the old carrying amount plus the cash: $30,000 + $10,000 = **$40,000**. $46,000 is the commercial-substance answer that books the $6,000 gain; a loss, by contrast, would be recognized either way."
  },
  {
    "id": "assets2-21",
    "section": "assets2",
    "topic": "Held-and-used impairment",
    "difficulty": "easy",
    "q": "A machine held and used has a carrying amount of $200,000. Its expected undiscounted future cash flows are $210,000, their present value is $182,000, and its fair value is $170,000 (costs to sell would be $6,000). What impairment loss is recognized?",
    "choices": [
      "$18,000",
      "$0",
      "$30,000",
      "$36,000"
    ],
    "answer": 1,
    "explain": "Recoverability comes first: undiscounted cash flows of $210,000 exceed the $200,000 carrying amount, so there is **no impairment** and fair value never enters the picture. $30,000 skips that test, $18,000 runs it on discounted cash flows instead of undiscounted ones, and costs to sell ($36,000) belong to assets held for sale."
  },
  {
    "id": "assets2-22",
    "section": "assets2",
    "topic": "Patent amortization",
    "difficulty": "medium",
    "q": "On April 1, a calendar-year company buys a patent for $120,000 and starts using it that day. The patent has 16 years of remaining legal life, but the company expects it to provide benefits for only 8 years. There is no residual value, and it amortizes straight-line. What is amortization expense for the year of purchase?",
    "choices": [
      "$11,250",
      "$15,000",
      "$7,500",
      "$5,625"
    ],
    "answer": 0,
    "explain": "A patent is amortized over the **shorter** of its remaining legal life and its useful life to the company, starting when it is put to use: $120,000 ÷ 8 × 9/12 = **$11,250**. The 16-year legal life gives $7,500 a year, and $15,000 ignores that only nine months have passed."
  },
  {
    "id": "assets2-23",
    "section": "assets2",
    "topic": "Dismantling obligation",
    "difficulty": "easy",
    "q": "A company completes a plant costing $800,000 and is legally required to dismantle it in 20 years at an estimated cost of $150,000. The fair value (present value) of that obligation today is $45,000. At what amount is the plant initially recorded?",
    "choices": [
      "$755,000",
      "$950,000",
      "$800,000",
      "$845,000"
    ],
    "answer": 3,
    "explain": "The asset retirement obligation is recorded at **fair value**, and the same amount is added to the plant's cost: $800,000 + $45,000 = **$845,000**. The undiscounted $150,000 is never booked up front; the liability grows toward it through accretion expense over the 20 years."
  },
  {
    "id": "assets2-14",
    "section": "assets2",
    "topic": "Capitalized interest",
    "difficulty": "medium",
    "q": "A company borrows to construct a building for its own use. Capitalized interest is computed by applying the interest rate to what base?",
    "choices": [
      "Total interest paid during the year",
      "The face amount of the construction loan",
      "Weighted-average accumulated expenditures",
      "Total construction costs incurred to date"
    ],
    "answer": 2,
    "explain": "Capitalized (avoidable) interest is the rate applied to weighted-average accumulated expenditures during construction, limited to the actual interest incurred for the period."
  },
  {
    "id": "assets2-15",
    "section": "assets2",
    "topic": "Nonmonetary exchanges",
    "difficulty": "medium",
    "q": "Equipment with a $20,000 carrying amount and $28,000 fair value is exchanged in a transaction that has commercial substance. What gain is recognized?",
    "choices": [
      "$0",
      "$8,000",
      "$8,000 deferred and amortized over the new asset's life",
      "A gain only to the extent cash is received"
    ],
    "answer": 1,
    "explain": "With commercial substance, the exchange is measured at fair value and the full $8,000 gain is recognized immediately. Deferral and the proportional-gain rules apply only when the exchange lacks commercial substance."
  },
  {
    "id": "assets2-16",
    "section": "assets2",
    "topic": "Asset retirement obligations",
    "difficulty": "medium",
    "q": "A legal obligation to dismantle a plant arises when the plant is placed in service. How is it recorded?",
    "choices": [
      "A liability at the obligation's fair value, with that amount added to the plant's cost",
      "An expense for the full estimated dismantling cost in the year the plant opens",
      "A note disclosure only, with no liability until dismantling work begins",
      "A liability built up ratably by annual accruals over the plant's useful life"
    ],
    "answer": 0,
    "explain": "The ARO is recognized at fair value when incurred and capitalized into the asset, then the liability accretes to the settlement amount while the capitalized cost depreciates. Nothing waits for the retirement itself."
  },
  {
    "id": "assets2-17",
    "section": "assets2",
    "topic": "Held for sale",
    "difficulty": "medium",
    "q": "A long-lived asset is classified as held for sale. How is it measured?",
    "choices": [
      "At carrying amount, with depreciation continuing until the sale closes",
      "At the lower of carrying amount or fair value less costs to sell; depreciation stops",
      "At fair value, with all subsequent changes reported in OCI until sold",
      "At the expected selling price, with the resulting gain recognized now"
    ],
    "answer": 1,
    "explain": "Held-for-sale assets stop depreciating and are carried at the lower of carrying amount or fair value less costs to sell. A later recovery in value can be recognized, but only up to the cumulative losses previously taken."
  },
  {
    "id": "assets2-18",
    "section": "assets2",
    "topic": "Patent defense costs",
    "difficulty": "medium",
    "q": "Legal fees to defend a patent in an infringement suit are capitalized when",
    "choices": [
      "the defense is successful",
      "the patent was internally developed rather than purchased",
      "the fees exceed the patent's carrying amount",
      "the suit is settled out of court"
    ],
    "answer": 0,
    "explain": "A successful defense preserves the asset's future benefits, so the legal costs are capitalized and amortized over the patent's remaining life. An unsuccessful defense is expensed — and usually signals impairment of the patent itself."
  },
  {
    "id": "assets2-25",
    "section": "assets2",
    "topic": "Purchased software cost",
    "difficulty": "easy",
    "q": "A company buys an inventory-management software package for its own use for $500,000. It also pays the vendor $40,000 to install and test the software and $25,000 to train employees on it, and pays a consultant $30,000 to convert data from the old system into the new format (no new software is written). At what amount is the software recorded as an intangible asset?",
    "choices": [
      "$595,000",
      "$565,000",
      "$540,000",
      "$570,000"
    ],
    "answer": 2,
    "explain": "Capitalize the purchase price plus the costs to get the software ready for use: $500,000 + $40,000 = **$540,000**. Training and data conversion are expensed as incurred even when a vendor or consultant performs them (only software developed or bought to convert or access the old data is capitalized); the asset is then amortized, normally straight-line, over its useful life and tested for impairment like any other long-lived asset."
  },
  {
    "id": "assets2-26",
    "section": "assets2",
    "topic": "Software amortization",
    "difficulty": "easy",
    "q": "On September 1, Year 1, a calendar-year company buys internal-use software for $360,000 with an estimated useful life of five years and no residual value. Installation and all substantial testing are completed on November 1, Year 1, but the company waits until December 1, Year 1, to move its staff onto the new system. What amortization expense does it report for Year 1?",
    "choices": [
      "$24,000",
      "$6,000",
      "$72,000",
      "$12,000"
    ],
    "answer": 3,
    "explain": "Amortization begins when the software is **ready for its intended use** — after all substantial testing is completed — regardless of when the company actually starts using it: $360,000 ÷ 5 years × 2/12 = **$12,000**. Counting from the purchase date ($24,000) or the go-live date ($6,000) uses the wrong start; from here on the software is a long-lived asset tested for impairment under ASC 360."
  },
  {
    "id": "assets2-27",
    "section": "assets2",
    "topic": "Hosted software arrangement",
    "difficulty": "easy",
    "q": "A company signs a three-year arrangement to use a vendor's accounting software hosted on the vendor's servers. Which feature establishes that the arrangement contains a software license, rather than being solely a hosting service?",
    "choices": [
      "The company may renew for two further years at the same annual fee and is reasonably certain to do so",
      "The company may take possession of the software at any time without significant penalty and could feasibly run it on its own servers",
      "The company pays the full three-year fee in advance and the fee is not refundable if it stops using the software",
      "The company may configure the software's reports and workflows, and the vendor must supply all updates during the term"
    ],
    "answer": 1,
    "explain": "A hosting arrangement contains a software license only if **both** conditions hold: the customer can take possession of the software at any time during the hosting period without significant penalty, and it is feasible to run the software on its own hardware or with an unrelated host. The license is then internal-use software, while the hosting itself stays a service. Prepayment, renewal options and configuration rights change nothing; without both conditions the arrangement is a service contract, the hosting fees are expensed as incurred, and only qualifying implementation costs are capitalized."
  },
  {
    "id": "assets2-28",
    "section": "assets2",
    "topic": "Cloud implementation costs",
    "difficulty": "medium",
    "q": "A calendar-year company enters a cloud computing arrangement that is a service contract: a three-year noncancellable hosting term that begins on April 1, Year 1, when the hosted software is ready for its intended use (its go-live date), plus an option to renew for two more years that the company is reasonably certain to exercise. Before go-live, the company spent $200,000 configuring and integrating the software, $30,000 training staff, and $20,000 evaluating vendors before selecting one. The software has an expected useful life of eight years. What amortization of implementation costs does the company recognize in Year 1?",
    "choices": [
      "$30,000",
      "$50,000",
      "$37,500",
      "$18,750"
    ],
    "answer": 0,
    "explain": "Only the $200,000 of configuration and integration is capitalized — training and vendor selection are expensed — and it is amortized from the date it is ready for its intended use (go-live here) over the **term of the hosting arrangement**, which includes the renewal the company is reasonably certain to exercise: $200,000 ÷ 5 years × 9/12 = **$30,000**. The eight-year useful life is irrelevant because the company holds a service, not a license; the amortization is reported in the same income-statement line as the hosting fees (not with depreciation), the unamortized balance sits with prepaid hosting fees, and the cash paid is an operating outflow."
  },
  {
    "id": "invest-1",
    "section": "invest",
    "topic": "Trading securities",
    "difficulty": "easy",
    "q": "Under US GAAP, where are unrealized holding gains and losses on trading debt securities reported?",
    "choices": [
      "Other comprehensive income",
      "Directly in retained earnings",
      "Net income for the period",
      "Disclosed in the notes only"
    ],
    "answer": 2,
    "explain": "Trading securities are carried at fair value with all unrealized gains and losses in net income. OCI is the classic trap — that treatment applies to available-for-sale debt, not trading."
  },
  {
    "id": "invest-2",
    "section": "invest",
    "topic": "AFS debt securities",
    "difficulty": "easy",
    "q": "A company holds available-for-sale debt securities with no credit loss. It does not intend to sell them and is not more likely than not to be required to sell them before recovery of amortized cost. Where do unrealized holding gains and losses go each period?",
    "choices": [
      "Other comprehensive income",
      "Net income",
      "Retained earnings",
      "No entry is made until sale"
    ],
    "answer": 0,
    "explain": "AFS debt is carried at fair value, with unrealized gains and losses parked in OCI. The accumulated amount moves to net income when the security is sold, or earlier if the company comes to intend to sell a security below amortized cost, or more likely than not will be required to sell it before recovering that cost: its basis is then written down through earnings. A credit loss would also go to earnings, through an allowance."
  },
  {
    "id": "invest-3",
    "section": "invest",
    "topic": "Held-to-maturity",
    "difficulty": "easy",
    "q": "How are held-to-maturity debt securities measured on the balance sheet?",
    "choices": [
      "Fair value with changes in net income",
      "Amortized cost",
      "Fair value with changes in OCI",
      "Lower of cost or market"
    ],
    "answer": 1,
    "explain": "HTM securities require positive intent and ability to hold to maturity, so they stay at amortized cost, less a CECL allowance for expected credit losses. Fair value changes are ignored (though fair value is disclosed)."
  },
  {
    "id": "invest-4",
    "section": "invest",
    "topic": "Trading securities measurement",
    "difficulty": "easy",
    "q": "A trading debt security was bought for $50,000 and has a year-end fair value of $54,000. What is reported in net income?",
    "choices": [
      "No gain until the security is sold",
      "$4,000 unrealized loss",
      "$4,000 gain in OCI only",
      "$4,000 unrealized gain"
    ],
    "answer": 3,
    "explain": "Trading securities are marked to fair value through net income, so the $4,000 increase hits earnings even though nothing was sold. Waiting for a sale is the trap."
  },
  {
    "id": "invest-5",
    "section": "invest",
    "topic": "Equity securities",
    "difficulty": "easy",
    "q": "An investor owns 10% of another company's common stock with no significant influence. How is the investment generally measured?",
    "choices": [
      "Amortized cost",
      "Fair value with changes in net income",
      "Equity method",
      "Fair value with changes in OCI"
    ],
    "answer": 1,
    "explain": "Equity securities without significant influence are carried at fair value through net income. There is no available-for-sale/OCI option for equity securities under current GAAP."
  },
  {
    "id": "invest-6",
    "section": "invest",
    "topic": "Equity method scope",
    "difficulty": "easy",
    "q": "When is the equity method generally required for an investment in common stock?",
    "choices": [
      "When the investor has significant influence, often 20%-50%",
      "Whenever ownership exceeds 10%",
      "Only when the investor owns more than 50%",
      "Whenever the shares lack a quoted market price"
    ],
    "answer": 0,
    "explain": "Significant influence triggers the equity method; 20%-50% ownership is a presumption, not a bright line. Over 50% generally means control and consolidation instead."
  },
  {
    "id": "invest-7",
    "section": "invest",
    "topic": "Equity method dividends",
    "difficulty": "medium",
    "q": "Under the equity method, how does the investor record dividends received from the investee?",
    "choices": [
      "As dividend revenue",
      "As other comprehensive income",
      "As a reduction of the investment account",
      "As a deferred credit"
    ],
    "answer": 2,
    "explain": "Under the equity method, dividends are a return of the investment and reduce its carrying amount. Income is the investor's share of investee earnings, not dividends — dividend revenue is the trap."
  },
  {
    "id": "invest-8",
    "section": "invest",
    "topic": "Equity method income",
    "difficulty": "easy",
    "q": "An investor uses the equity method for a 25% stake. The investee reports $200,000 of net income for the year. What does the investor recognize?",
    "choices": [
      "$200,000 of income",
      "$50,000 of investment income",
      "No income until dividends are declared",
      "$50,000 in OCI"
    ],
    "answer": 1,
    "explain": "The investor picks up its proportionate share of investee earnings: 25% x $200,000 = $50,000, reported in net income and added to the investment balance."
  },
  {
    "id": "invest-9",
    "section": "invest",
    "topic": "Equity method carrying",
    "difficulty": "medium",
    "q": "An equity-method investment cost $300,000. The investor's share of investee income is $40,000, and it received $15,000 of dividends. What is the year-end carrying amount?",
    "choices": [
      "$340,000",
      "$355,000",
      "$325,000",
      "$300,000"
    ],
    "answer": 2,
    "explain": "Carrying amount = $300,000 + $40,000 share of income - $15,000 dividends = $325,000. Adding dividends instead of subtracting them is the common trap."
  },
  {
    "id": "invest-10",
    "section": "invest",
    "topic": "Fair value Level 1",
    "difficulty": "easy",
    "q": "In the fair value hierarchy, what qualifies as a Level 1 input?",
    "choices": [
      "Quoted prices in active markets for identical assets",
      "Quoted prices in active markets for similar assets",
      "Internal cash flow projections",
      "Broker quotes from inactive markets"
    ],
    "answer": 0,
    "explain": "Level 1 is the most reliable input: unadjusted quoted prices in active markets for identical items. Similar-asset prices are Level 2, and internal projections are Level 3."
  },
  {
    "id": "invest-22",
    "section": "invest",
    "topic": "Fair value of land",
    "difficulty": "medium",
    "q": "A company uses a parcel of land as an employee parking lot, a use worth $2,500,000. Residential development of the parcel is legally permissible, physically possible and financially feasible, and residential developers — the market with the greatest volume and level of activity for such land, which the company can access — would pay $4,000,000 for it, with $150,000 of transaction costs to sell there. Buyers in a smaller market the company can also access would pay $4,300,000. The company intends to keep the parking lot. Under ASC 820, what is the land's fair value?",
    "choices": [
      "$2,500,000",
      "$4,000,000",
      "$4,300,000",
      "$3,850,000"
    ],
    "answer": 1,
    "explain": "A nonfinancial asset is measured at its **highest and best use** from a market participant's perspective — residential development, not the company's own parking-lot use — at the price in the **principal market**, the one with the greatest volume and activity, even when another accessible market would pay more: **$4,000,000**. The most advantageous market is used only when no principal market exists, and the company's intention to keep the lot is irrelevant. Transaction costs help identify the most advantageous market but never reduce the measurement, so $3,850,000 is wrong too."
  },
  {
    "id": "invest-12",
    "section": "invest",
    "topic": "Fair value hierarchy",
    "difficulty": "medium",
    "q": "A bond's fair value is estimated using quoted prices for similar bonds trading in active markets. Which level of the fair value hierarchy is this?",
    "choices": [
      "Level 1",
      "Level 2",
      "Level 3",
      "Outside the hierarchy"
    ],
    "answer": 1,
    "explain": "Observable inputs other than Level 1 prices — like quoted prices for similar assets — are Level 2. Level 1 requires identical assets; Level 3 requires unobservable inputs."
  },
  {
    "id": "invest-13",
    "section": "invest",
    "topic": "Security transfers",
    "difficulty": "medium",
    "q": "A debt security is transferred into the trading category. How is any unrealized holding gain or loss at the transfer date treated?",
    "choices": [
      "Recognized in earnings immediately",
      "Deferred in OCI until sale",
      "Ignored until maturity",
      "Added to the security's cost basis"
    ],
    "answer": 0,
    "explain": "Any transfer into the trading category triggers immediate recognition of the unrealized gain or loss in earnings, since trading securities are measured at fair value through net income."
  },
  {
    "id": "invest-14",
    "section": "invest",
    "topic": "AFS measurement",
    "difficulty": "medium",
    "q": "An available-for-sale debt security has an amortized cost of $80,000 and a year-end fair value of $75,000, with no credit loss. The company does not intend to sell it and is not more likely than not to be required to sell it before recovery. Where does the $5,000 decline go?",
    "choices": [
      "Net income as an impairment",
      "Retained earnings",
      "Other comprehensive income as an unrealized loss",
      "Nowhere; AFS securities stay at cost"
    ],
    "answer": 2,
    "explain": "With no credit loss and no intended or likely forced sale, an AFS fair value decline is an unrealized loss in OCI. A credit-related portion would run through earnings via an allowance under ASC 326-30, the AFS impairment model; CECL (ASC 326-20) covers debt carried at amortized cost, such as HTM securities, not AFS."
  },
  {
    "id": "invest-15",
    "section": "invest",
    "topic": "Measurement alternative",
    "difficulty": "medium",
    "q": "How may an equity security without a readily determinable fair value be measured?",
    "choices": [
      "Cost less impairment, adjusted for observable prices of that issuer's identical or similar securities",
      "Amortized cost using the effective interest method, like a held-to-maturity bond",
      "The investee's most recent book value per share times the shares held",
      "The equity method, regardless of the investor's ownership percentage"
    ],
    "answer": 0,
    "explain": "The measurement alternative starts at cost and moves only for impairment or observable transactions in the same issuer's identical or similar securities. Amortized cost is for debt, and the equity method still requires significant influence."
  },
  {
    "id": "invest-16",
    "section": "invest",
    "topic": "Fair value option",
    "difficulty": "medium",
    "q": "Which statement about the fair value option is correct?",
    "choices": [
      "It may be elected or revoked at the start of each annual reporting period",
      "Once elected for an item, it is irrevocable unless a new election date occurs",
      "It reports unrealized gains and losses in other comprehensive income until sale",
      "It applies only to securities that are held in an active trading portfolio"
    ],
    "answer": 1,
    "explain": "The election is made instrument by instrument at an election date, normally when the item is first recognized, or at a later qualifying event such as an investment becoming subject to the equity method or a significant debt modification. It is irrevocable unless a new election date occurs. Fair value changes then run through earnings, with one exception: for a liability under the option, the part of the change caused by the company's own credit risk goes to OCI."
  },
  {
    "id": "invest-17",
    "section": "invest",
    "topic": "Equity method and OCI",
    "difficulty": "medium",
    "q": "An equity-method investee reports other comprehensive income for the year. What does the investor record?",
    "choices": [
      "Nothing, because only the investee's net income flows through the equity method",
      "Its share of the investee's OCI, in its own OCI, adjusting the investment account",
      "Its share of the investee's OCI as investment income in current earnings",
      "A memorandum entry until the investee reclassifies the amounts to earnings"
    ],
    "answer": 1,
    "explain": "The equity method mirrors the investee's equity changes: net income through earnings, OCI through the investor's OCI, both adjusting the investment's carrying amount."
  },
  {
    "id": "invest-18",
    "section": "invest",
    "topic": "AFS credit losses",
    "difficulty": "medium",
    "q": "An available-for-sale debt security's fair value falls below amortized cost, partly from credit deterioration. The company does not intend to sell it and is not more likely than not to be required to sell it before recovery. How is the decline reported?",
    "choices": [
      "Entirely in other comprehensive income until sold",
      "The credit portion through an allowance in earnings; the remainder in other comprehensive income",
      "Entirely in earnings as an impairment write-down of the security's basis",
      "The credit portion in other comprehensive income; the remainder through an allowance in earnings"
    ],
    "answer": 1,
    "explain": "For AFS debt, credit losses go through earnings via an allowance, capped at the amount by which fair value is below amortized cost; non-credit declines stay in OCI. If the company instead intended to sell, or would more likely than not be required to sell it before recovery, the whole decline would be written down through earnings. The allowance model also lets recoveries reverse through earnings."
  },
  {
    "id": "invest-19",
    "section": "invest",
    "topic": "Valuation techniques",
    "difficulty": "easy",
    "q": "Which of the following is an application of the market approach to measuring fair value under ASC 820?",
    "choices": [
      "Discounting a business unit's projected cash flows at a rate that reflects its risk",
      "Estimating the cost to rebuild a plant today, less physical wear and technological obsolescence",
      "Valuing a business unit at an EBITDA multiple observed in recent sales of comparable businesses",
      "Pricing a share option with the Black-Scholes-Merton option-pricing model"
    ],
    "answer": 2,
    "explain": "The market approach uses prices and other information from market transactions involving identical or comparable assets — multiples from comparable transactions and matrix pricing are its typical tools. Discounted cash flows and option-pricing models both convert future amounts to a single present amount, which is the **income approach**, and replacement cost less obsolescence is the **cost approach**."
  },
  {
    "id": "invest-20",
    "section": "invest",
    "topic": "Income approach",
    "difficulty": "medium",
    "q": "A company measures the fair value of a license with the income approach. The license should produce net cash inflows of $110,000 at the end of Year 1 and $121,000 at the end of Year 2, then expire. Market participants would require a 10% annual return on such an asset; the company's own incremental borrowing rate is 8%. What is the license's fair value?",
    "choices": [
      "$200,000",
      "$205,590",
      "$231,000",
      "$210,000"
    ],
    "answer": 0,
    "explain": "A present-value technique discounts the expected cash flows at the rate **market participants** would demand: $110,000 ÷ 1.10 + $121,000 ÷ 1.10² = $100,000 + $100,000 = **$200,000**. The company's own 8% borrowing rate is an entity-specific assumption, not a market-participant one (it gives $205,590); $231,000 is the undiscounted total, and $210,000 discounts Year 2 for only one period."
  },
  {
    "id": "invest-21",
    "section": "invest",
    "topic": "Cost approach",
    "difficulty": "easy",
    "q": "A company measures the fair value of a specialized machine using the cost approach. It built the machine four years ago for $700,000, and the carrying amount is now $420,000. A new machine of equivalent utility would cost $900,000 today, and a market participant would reduce that figure by $350,000 for the machine's physical wear and outdated technology. What is the fair value under the cost approach?",
    "choices": [
      "$900,000",
      "$420,000",
      "$700,000",
      "$550,000"
    ],
    "answer": 3,
    "explain": "The cost approach starts from what it would cost a market participant today to replace the asset's service capacity — current replacement cost of $900,000 — and adjusts it for **obsolescence**: $900,000 − $350,000 = **$550,000**. Obsolescence covers physical deterioration and functional and economic obsolescence and is broader than book depreciation, so the $420,000 carrying amount and the $700,000 historical cost play no part."
  },
  {
    "id": "liab-1",
    "section": "liab",
    "topic": "Debt refinancing",
    "difficulty": "medium",
    "q": "At year-end a company intends to refinance maturing short-term debt on a long-term basis. When may the debt be classified as noncurrent?",
    "choices": [
      "Whenever management intends to refinance",
      "With intent plus ability, e.g., a signed agreement",
      "Never; it must remain current",
      "Only if the refinancing is completed by the balance sheet date"
    ],
    "answer": 1,
    "explain": "Reclassification requires both intent and demonstrated ability to refinance, such as a completed agreement or actual refinancing before the statements are issued. Intent alone is the trap."
  },
  {
    "id": "liab-2",
    "section": "liab",
    "topic": "Accrued wages",
    "difficulty": "easy",
    "q": "Employees earn $50,000 of wages per 5-day week. The year ends after employees have worked 3 unpaid days. What accrued wages liability is reported?",
    "choices": [
      "$30,000",
      "$50,000",
      "$20,000",
      "$0 until the next payday"
    ],
    "answer": 0,
    "explain": "Accrue wages earned but unpaid: 3/5 of $50,000 = $30,000. Waiting until payday violates accrual accounting."
  },
  {
    "id": "liab-3",
    "section": "liab",
    "topic": "Loss contingencies",
    "difficulty": "easy",
    "q": "A loss contingency is probable and the amount is reasonably estimable. What does GAAP require?",
    "choices": [
      "Disclose only",
      "Do nothing until the matter settles",
      "Accrue the loss and disclose",
      "Record the loss in OCI"
    ],
    "answer": 2,
    "explain": "Probable plus reasonably estimable is the two-part test for accruing a loss contingency, with disclosure of its nature where needed so the statements are not misleading. Miss either condition and nothing is accrued: the loss is disclosed if it is at least reasonably possible, while a remote loss generally needs neither (guarantees are an exception)."
  },
  {
    "id": "liab-4",
    "section": "liab",
    "topic": "Reasonably possible loss",
    "difficulty": "easy",
    "q": "A lawsuit loss is judged reasonably possible and estimable at $100,000. What is the proper treatment?",
    "choices": [
      "Accrue $100,000",
      "Disclose in the notes; no accrual",
      "Record $100,000 in other comprehensive income",
      "Ignore it entirely"
    ],
    "answer": 1,
    "explain": "Only probable and estimable losses are accrued. Reasonably possible losses are disclosed in the notes, and remote losses are generally ignored."
  },
  {
    "id": "liab-5",
    "section": "liab",
    "topic": "Gain contingencies",
    "difficulty": "medium",
    "q": "A company will probably win a lawsuit and collect about $200,000. How is this gain contingency treated?",
    "choices": [
      "Accrue $200,000 now",
      "Record the gain in OCI",
      "Accrue the minimum estimated amount",
      "Do not accrue; wait until the gain is realized"
    ],
    "answer": 3,
    "explain": "Gain contingencies are not accrued, because that could recognize income before it is realized (ASC 450-30); at most they are disclosed, carefully. Treating gains like probable losses is the trap."
  },
  {
    "id": "liab-6",
    "section": "liab",
    "topic": "Range of loss",
    "difficulty": "medium",
    "q": "A probable loss is estimated between $100,000 and $300,000, and no amount in the range is a better estimate. How much is accrued?",
    "choices": [
      "$100,000, the low end of the range",
      "$300,000, the high end",
      "$200,000, the midpoint",
      "$0; disclosure only"
    ],
    "answer": 0,
    "explain": "US GAAP accrues the minimum of the range and discloses the possible additional loss. The midpoint approach is IFRS, a frequent exam trap."
  },
  {
    "id": "liab-7",
    "section": "liab",
    "topic": "Warranty expense",
    "difficulty": "easy",
    "q": "Sales are $500,000 and warranty costs are expected to run 2% of sales. Actual claims paid this year were $4,000. What is warranty expense for the year?",
    "choices": [
      "$4,000",
      "$6,000",
      "$10,000",
      "$14,000"
    ],
    "answer": 2,
    "explain": "Expense the full estimate in the year of sale: 2% x $500,000 = $10,000. Claims paid reduce the warranty liability, not the expense."
  },
  {
    "id": "liab-8",
    "section": "liab",
    "topic": "Bond discount cause",
    "difficulty": "easy",
    "q": "A bond is issued at a discount. What rate relationship caused the discount?",
    "choices": [
      "The stated rate exceeds the market rate",
      "The market rate exceeds the stated rate",
      "The stated and market rates are equal",
      "The stated rate exceeds the prime rate"
    ],
    "answer": 1,
    "explain": "When the market demands a higher yield than the coupon pays, investors pay less than face — a discount. A stated rate above the market rate produces a premium instead."
  },
  {
    "id": "liab-9",
    "section": "liab",
    "topic": "Premium amortization",
    "difficulty": "medium",
    "q": "Bonds were issued at a premium. Under the effective-interest method, what happens to the carrying value over the bond's life?",
    "choices": [
      "It rises above the issue price",
      "It stays constant at the issue price",
      "It fluctuates with the market rate",
      "It decreases toward face value"
    ],
    "answer": 3,
    "explain": "Premium amortization moves the carrying value down from the issue price toward face at maturity. A discount bond does the opposite, rising toward face."
  },
  {
    "id": "liab-10",
    "section": "liab",
    "topic": "Effective interest expense",
    "difficulty": "easy",
    "q": "Bonds with $100,000 face and a 9% stated rate were issued on January 1 for $95,000 when the market rate was 10%. Interest is paid annually on December 31. What is year-1 interest expense under the effective-interest method?",
    "choices": [
      "$9,500",
      "$10,000",
      "$5,000",
      "$9,000"
    ],
    "answer": 0,
    "explain": "Effective interest expense = carrying value x market rate = $95,000 x 10% = $9,500. The $9,000 cash coupon (face x stated rate) is the trap, and face x market rate ($10,000) is a second one; the $500 difference is the discount amortization."
  },
  {
    "id": "liab-11",
    "section": "liab",
    "topic": "Bond issue costs",
    "difficulty": "medium",
    "q": "How are bond issue costs presented on the balance sheet under current GAAP?",
    "choices": [
      "As a separate deferred charge asset amortized over the bond term",
      "Expensed immediately at issuance",
      "As a direct deduction from the bond's carrying amount",
      "As additional paid-in capital"
    ],
    "answer": 2,
    "explain": "Issue costs are netted against the bond liability like a discount and amortized to interest expense. The separate deferred-asset presentation is superseded GAAP — the trap."
  },
  {
    "id": "liab-12",
    "section": "liab",
    "topic": "Notes payable interest",
    "difficulty": "easy",
    "q": "A $200,000, 9% note payable was issued on May 1. What accrued interest payable is reported at December 31?",
    "choices": [
      "$18,000",
      "$12,000",
      "$6,000",
      "$0 until the note matures"
    ],
    "answer": 1,
    "explain": "Accrue 8 months of interest, May through December: $200,000 × 9% × 8/12 = $12,000. Using the full year's $18,000 ignores that only eight months have passed."
  },
  {
    "id": "liab-13",
    "section": "liab",
    "topic": "Early extinguishment",
    "difficulty": "medium",
    "q": "Bonds with a carrying amount of $980,000 are retired early for $950,000 cash. What does the issuer report?",
    "choices": [
      "A $30,000 gain in income from continuing operations",
      "A $30,000 loss on extinguishment",
      "A $30,000 gain in OCI",
      "No gain or loss; adjust equity directly"
    ],
    "answer": 0,
    "explain": "Gain = carrying amount minus reacquisition price: $980,000 - $950,000 = $30,000, reported in ordinary income. Extinguishment gains are no longer extraordinary items."
  },
  {
    "id": "liab-14",
    "section": "liab",
    "topic": "Discount amortization",
    "difficulty": "easy",
    "q": "Bonds issued at a discount are accounted for under the effective-interest method. What happens to interest expense each period?",
    "choices": [
      "It decreases each period",
      "It stays constant over the life",
      "It increases as carrying value grows toward face",
      "It always equals the cash coupon paid"
    ],
    "answer": 2,
    "explain": "For a discount bond, the carrying value rises toward face, and expense equals carrying value times the market rate — so expense grows each period. Constant expense is straight-line, not effective interest."
  },
  {
    "id": "liab-15",
    "section": "liab",
    "topic": "Compensated absences",
    "difficulty": "medium",
    "q": "A liability for compensated absences must be accrued when the obligation arises from past service, payment is probable, the amount is estimable, and",
    "choices": [
      "the rights vest or accumulate",
      "the employees have scheduled the leave",
      "the leave will be taken within one year",
      "the employer's policy is written"
    ],
    "answer": 0,
    "explain": "All four conditions are required: past service, vesting or accumulation, probable payment, and a reasonable estimate. One carve-out: sick pay that accumulates but does not vest need not be accrued (ASC 710-10-25-7)."
  },
  {
    "id": "liab-16",
    "section": "liab",
    "topic": "Bond conversion",
    "difficulty": "medium",
    "q": "Convertible bonds are converted into common stock under the bonds' original terms. What is recognized on conversion?",
    "choices": [
      "A gain or loss for the difference between the stock's market value and the bonds' carrying amount",
      "No gain or loss — the stock is recorded at the bonds' carrying amount",
      "A gain only, never a loss, credited to APIC",
      "An expense equal to the unamortized discount"
    ],
    "answer": 1,
    "explain": "The book value method rolls the bonds' carrying amount, including any unamortized premium or discount, into the stock accounts with no income effect. For a conversion under the bonds' original terms, GAAP requires this approach; recognizing a gain or loss at market value is not permitted."
  },
  {
    "id": "liab-17",
    "section": "liab",
    "topic": "Detachable warrants",
    "difficulty": "medium",
    "q": "Bonds are issued with detachable stock warrants that qualify as equity. How are the proceeds recorded?",
    "choices": [
      "Recorded entirely as bonds payable, because the warrants were issued at no cost",
      "Allocated between bonds and warrants by relative fair value, warrants to paid-in capital",
      "Recorded entirely as paid-in capital until the warrants expire unexercised",
      "Allocated to the warrants only if and when the holders exercise them"
    ],
    "answer": 1,
    "explain": "Detachable warrants are separate instruments, so proceeds are split by relative fair value (or by residual when only one value is known), typically creating a bond discount. Nondetachable conversion features get no separate allocation."
  },
  {
    "id": "liab-18",
    "section": "liab",
    "topic": "Bonds issued between interest dates",
    "difficulty": "medium",
    "q": "Bonds are issued two months after the stated interest period began, and the buyer pays the accrued interest. How does the issuer treat that accrued interest?",
    "choices": [
      "As part of the bonds' initial carrying amount for amortization purposes",
      "As a liability separate from the bonds, settled by the first full coupon",
      "As a premium to be amortized over the remaining term of the bonds",
      "As interest income earned during the period before issuance"
    ],
    "answer": 1,
    "explain": "The buyer advances two months of interest and gets a full six-month coupon later, so the issuer records the advance as a liability (interest payable; some texts credit interest expense instead, with the same net effect). It is not part of the bond's carrying amount and does not affect the premium or discount."
  },
  {
    "id": "liab-19",
    "section": "liab",
    "topic": "Renegotiated loan terms",
    "difficulty": "medium",
    "q": "On January 1, Year 2, a company not in financial difficulty owes $2,000,000 on a nonconvertible term loan. It negotiates new terms with the same lender and pays the lender a $30,000 fee to obtain them; no other costs are incurred. Including that fee, the present value of the cash flows under the new terms, discounted at the loan's original effective interest rate, is 6% less than the present value of the remaining cash flows under the original terms. How is the change accounted for?",
    "choices": [
      "As an extinguishment; the old loan is derecognized and the $30,000 fee is included in the gain or loss on extinguishment",
      "As a modification; the $30,000 fee is expensed as incurred and interest keeps accruing at the loan's original effective rate",
      "As a modification; the $30,000 fee reduces the loan's carrying amount and is amortized to interest expense at a new effective rate",
      "As an extinguishment; the new loan is recorded at fair value and the $30,000 fee is capitalized as an issuance cost of the new loan"
    ],
    "answer": 2,
    "explain": "For a borrower not in financial difficulty and a loan with no conversion feature, a change in terms is an extinguishment when the present value of the new cash flows, at the original effective rate, differs from the present value of the remaining old cash flows by **10% or more**; a 6% difference is a modification, so no gain or loss is recognized. In a modification, fees paid to the lender are netted against the debt and amortized as interest at a new effective rate while third-party costs are expensed as incurred — the pairing reverses under extinguishment accounting, where lender fees go into the gain or loss and third-party costs are capitalized against the new debt."
  },
  {
    "id": "liab-20",
    "section": "liab",
    "topic": "Bond retirement",
    "difficulty": "medium",
    "q": "On June 30, Year 3, a company retires $1,000,000 face amount of its bonds by paying $950,000 plus $30,000 of interest accrued since the last interest payment date. On that date the bonds carry $24,000 of unamortized discount and $6,000 of unamortized issue costs. What gain or loss on extinguishment does the company recognize?",
    "choices": [
      "$20,000 gain",
      "$26,000 gain",
      "$50,000 gain",
      "$10,000 loss"
    ],
    "answer": 0,
    "explain": "Carrying amount is face less both the unamortized discount and the unamortized issue costs: $1,000,000 − $24,000 − $6,000 = $970,000; less the $950,000 reacquisition price leaves a **$20,000 gain** in income from continuing operations. The $30,000 settles interest already accrued as a liability, so it is not part of the reacquisition price; $26,000 forgets that issue costs reduce the carrying amount, and $50,000 compares face to price."
  },
  {
    "id": "liab-21",
    "section": "liab",
    "topic": "Troubled debt restructuring (debtor)",
    "difficulty": "medium",
    "q": "A company in financial difficulty owes a bank a $1,000,000 note on which $90,000 of interest is accrued and unpaid. Because of the company's difficulty, the bank agrees to forgive the accrued interest, reduce the principal to $900,000, and cut the interest rate to 5%, payable at the end of each of the next three years, with the $900,000 due at the end of Year 3. What gain on restructuring does the company recognize?",
    "choices": [
      "$190,000",
      "$55,000",
      "$100,000",
      "$0"
    ],
    "answer": 1,
    "explain": "The debtor compares the carrying amount, including accrued interest ($1,090,000), with the total **undiscounted** payments under the new terms: $900,000 + 3 × $45,000 = $1,035,000, so the payable is written down to $1,035,000 and a **$55,000** gain is recognized; every later payment, including the $45,000 labeled interest, then reduces the liability and no interest expense is recorded. Had the future payments equaled or exceeded $1,090,000, there would be no gain and the debtor would simply impute a new, lower effective rate. $190,000 ignores the interest still to be paid, and $100,000 counts only the principal cut."
  },
  {
    "id": "liab-22",
    "section": "liab",
    "topic": "Loan covenant test",
    "difficulty": "easy",
    "q": "A loan agreement requires a company to maintain a current ratio of at least 1.5 at each December 31. At December 31 the company has cash of $90,000, accounts receivable of $150,000, inventory of $150,000, prepaid insurance of $30,000, and a $150,000 note receivable from an officer due in three years. Its liabilities are accounts payable of $170,000, accrued wages of $30,000, the $100,000 installment of long-term debt due next year, and $500,000 of long-term debt due later. Is the covenant met?",
    "choices": [
      "Yes; the current ratio is 2.10",
      "Yes; the current ratio is 1.90",
      "No; the current ratio is 0.80",
      "No; the current ratio is 1.40"
    ],
    "answer": 3,
    "explain": "Current ratio = current assets ÷ current liabilities = ($90,000 + $150,000 + $150,000 + $30,000) ÷ ($170,000 + $30,000 + $100,000) = $420,000 ÷ $300,000 = **1.40**, below the required 1.5, so the covenant is not met; whether the lender can then call the loan, and whether the debt must be reclassified as current, depends on the agreement and any waiver. The officer's note is noncurrent because it is due in three years, the installment due next year is a current liability, and dropping inventory and prepaids gives the quick ratio (0.80), which is a different covenant."
  },
  {
    "id": "liab-23",
    "section": "liab",
    "topic": "Covenant violation at year-end",
    "difficulty": "medium",
    "q": "A company's $2,000,000 note payable is repayable in $400,000 installments each December 31 from Year 2 through Year 6. At December 31, Year 1, the company is in violation of the note's working-capital covenant, which makes the entire balance immediately callable; the agreement has no grace period. On February 20, Year 2, the lender waives its right to call the note for any violation of that covenant through December 31, Year 3. The Year 1 financial statements are issued on March 15, Year 2. What amount of the note is reported as a current liability at December 31, Year 1?",
    "choices": [
      "$2,000,000",
      "$0",
      "$400,000",
      "$800,000"
    ],
    "answer": 2,
    "explain": "A violation at the balance sheet date that makes debt callable forces current classification **unless**, before the statements are issued, the lender waives its right to call for more than one year from the balance sheet date (or the violation will probably be cured within a stated grace period). This waiver runs two years, so the note is classified as if no violation had occurred: only the **$400,000** installment due within twelve months is current and the remaining $1,600,000 is noncurrent. Had the waiver covered only six months, the entire $2,000,000 would be current."
  },
  {
    "id": "liab-24",
    "section": "liab",
    "topic": "One-time termination benefits",
    "difficulty": "medium",
    "q": "On October 1, Year 1, management, having committed to a plan that meets all the criteria for a plan of termination, tells 40 plant employees that they will be terminated on March 31, Year 2, and that each will receive a $12,000 one-time termination benefit if they keep working until then. That required service runs well beyond the 60-day legal notice period, all 40 are expected to stay, and the company has no ongoing severance plan. Ignoring the time value of money, what liability for the termination benefits does the company report at December 31, Year 1?",
    "choices": [
      "$240,000",
      "$480,000",
      "$0",
      "$120,000"
    ],
    "answer": 0,
    "explain": "Because the employees must render service beyond the minimum retention period to earn the benefit, the liability is measured at the communication date and recognized **ratably over the future service period**: 40 × $12,000 = $480,000 over the six months from October 1 to March 31, so 3/6 = **$240,000** at December 31. The full $480,000 would be recognized at communication only if no service beyond the minimum retention period were required; nothing is recognized on management's commitment to the plan alone."
  },
  {
    "id": "liab-25",
    "section": "liab",
    "topic": "Contract termination fee",
    "difficulty": "easy",
    "q": "On December 1, Year 1, management commits to a plan to exit a product line. The plan requires ending an advertising services contract that runs through Year 3; the contract can be ended early only by giving the agency 30 days' written notice and paying a $90,000 termination fee. The company gives notice on January 20, Year 2; the agency's services end on February 19, Year 2; the fee is paid on March 5, Year 2. When is the liability for the $90,000 fee recognized?",
    "choices": [
      "December 1, Year 1, when management commits to the exit plan",
      "January 20, Year 2, when the company gives the termination notice",
      "February 19, Year 2, when the agency stops providing services",
      "March 5, Year 2, when the fee is paid"
    ],
    "answer": 1,
    "explain": "A liability for the cost of terminating a contract before the end of its term is recognized, at fair value, when the entity terminates the contract under its terms — here, by giving the required notice on **January 20, Year 2**. A plan or commitment alone creates no liability under ASC 420, and the cease-use date matters only for costs that keep running under a contract the company has stopped using."
  },
  {
    "id": "leases-1",
    "section": "leases",
    "topic": "Finance lease criteria",
    "difficulty": "easy",
    "q": "Under ASC 842, which condition by itself requires a lessee to classify a lease as a finance lease?",
    "choices": [
      "Lease term is half the asset's economic life",
      "Lessee guarantees a portion of residual value",
      "Ownership transfers to the lessee at lease end",
      "Payments are fixed rather than variable"
    ],
    "answer": 2,
    "explain": "Transfer of ownership at the end of the lease term is one of the five finance lease criteria. A term of only half the life or a partial residual guarantee does not by itself meet the major-part or substantially-all tests."
  },
  {
    "id": "leases-2",
    "section": "leases",
    "topic": "Lease term test",
    "difficulty": "medium",
    "q": "A lessee leases equipment with a 10-year economic life for 8 years. There is no ownership transfer or purchase option. How is the lease classified?",
    "choices": [
      "Finance; term is a major part of economic life",
      "Operating; ownership never transfers",
      "Operating; term is under 90% of the life",
      "Finance; any lease longer than five years is a finance lease"
    ],
    "answer": 0,
    "explain": "Eight of 10 years (80%) meets the major-part-of-economic-life criterion (commonly 75%), so it is a finance lease even though ownership never transfers. There is no fixed-year bright line, and 90% is the present-value benchmark, not the life test."
  },
  {
    "id": "leases-3",
    "section": "leases",
    "topic": "Present value test",
    "difficulty": "medium",
    "q": "Leased equipment has a fair value of $100,000. The present value of lease payments is $95,000, and no other criteria are met. How does the lessee classify the lease?",
    "choices": [
      "Operating, because PV is below fair value",
      "Finance; PV is substantially all of fair value",
      "Finance, but only if the lessee also guarantees the residual value",
      "Operating, unless a purchase option exists"
    ],
    "answer": 1,
    "explain": "The $95,000 PV is 95% of fair value, meeting the substantially-all threshold (commonly 90%), so the lease is a finance lease. 75% belongs to the economic-life test, and PV below fair value does not make a lease operating — 90% is the customary line."
  },
  {
    "id": "leases-4",
    "section": "leases",
    "topic": "Discount rate",
    "difficulty": "medium",
    "q": "Under ASC 842, which rate does a lessee use to measure the lease liability when the rate implicit in the lease is not readily determinable?",
    "choices": [
      "The prime lending rate",
      "The risk-free rate, required for all companies",
      "The lessor's average borrowing rate",
      "The lessee's incremental borrowing rate"
    ],
    "answer": 3,
    "explain": "Lessees use the implicit rate if readily determinable; otherwise the incremental borrowing rate. The risk-free rate is only an optional policy election for nonpublic entities, not a requirement."
  },
  {
    "id": "leases-5",
    "section": "leases",
    "topic": "Lease liability",
    "difficulty": "easy",
    "q": "At commencement, a lessee's lease liability under ASC 842 is initially measured at what amount?",
    "choices": [
      "Present value of lease payments not yet paid",
      "Sum of all undiscounted lease payments",
      "Fair value of the underlying asset",
      "Total payments less executory costs"
    ],
    "answer": 0,
    "explain": "The lease liability equals the present value of the remaining lease payments, discounted at the implicit rate or the incremental borrowing rate. Undiscounted totals and asset fair value are common traps."
  },
  {
    "id": "leases-6",
    "section": "leases",
    "topic": "ROU asset measurement",
    "difficulty": "medium",
    "q": "A lessee's lease liability is $50,000. It also pays $2,000 of initial direct costs and receives a $1,000 lease incentive. What is the initial right-of-use asset?",
    "choices": [
      "$50,000",
      "$53,000",
      "$51,000",
      "$47,000"
    ],
    "answer": 2,
    "explain": "ROU asset = lease liability plus initial direct costs minus incentives received: $50,000 + $2,000 − $1,000 = $51,000. Subtracting both items gives $47,000; adding both gives $53,000 — incentives reduce the asset, direct costs increase it."
  },
  {
    "id": "leases-7",
    "section": "leases",
    "topic": "Short-term exemption",
    "difficulty": "easy",
    "q": "Which lease can qualify for the short-term lease exemption under ASC 842?",
    "choices": [
      "A 24-month lease with cancellation penalties",
      "A 12-month lease with no likely purchase option",
      "Any lease of low-value office equipment",
      "A 14-month lease paid entirely in advance"
    ],
    "answer": 1,
    "explain": "Short-term leases have terms of 12 months or less at commencement with no purchase option the lessee is reasonably certain to exercise. Unlike IFRS, US GAAP has no low-value asset exemption."
  },
  {
    "id": "leases-8",
    "section": "leases",
    "topic": "Short-term accounting",
    "difficulty": "easy",
    "q": "A lessee elects the short-term lease exemption. How are the lease payments recognized?",
    "choices": [
      "Capitalized as a right-of-use asset",
      "As interest and amortization expense",
      "Deferred until the lease ends",
      "As straight-line expense over the lease term"
    ],
    "answer": 3,
    "explain": "Electing the exemption means no ROU asset or lease liability is recorded; payments are simply expensed, generally straight-line, over the lease term."
  },
  {
    "id": "leases-9",
    "section": "leases",
    "topic": "Operating expense pattern",
    "difficulty": "easy",
    "q": "How does a lessee report expense for an operating lease under ASC 842?",
    "choices": [
      "A single straight-line lease expense",
      "Separate interest and amortization expense",
      "Expense equal to each cash payment made",
      "Declining expense as the liability shrinks"
    ],
    "answer": 0,
    "explain": "Operating leases produce one straight-line lease expense each period. Separate interest and amortization applies to finance leases; expense equals cash paid only if payments happen to be even."
  },
  {
    "id": "leases-10",
    "section": "leases",
    "topic": "Finance expense pattern",
    "difficulty": "medium",
    "q": "Compared with an operating lease of the same asset and payments, a finance lease's total expense in year 1 is typically:",
    "choices": [
      "Lower, because amortization is delayed",
      "Identical, since total payments are the same",
      "Higher; interest plus amortization front-loads it",
      "Higher, because the full lease payment is expensed on top of amortization"
    ],
    "answer": 2,
    "explain": "A finance lease recognizes interest (highest early) plus straight-line amortization, so early-year expense exceeds the level operating lease expense. Total lifetime expense is the same for both."
  },
  {
    "id": "leases-11",
    "section": "leases",
    "topic": "Uneven lease payments",
    "difficulty": "easy",
    "q": "An operating lease requires payments of $10,000 in year 1 and $25,000 in each of years 2 and 3. What is year 1 lease expense?",
    "choices": [
      "$10,000",
      "$20,000",
      "$25,000",
      "$30,000"
    ],
    "answer": 1,
    "explain": "Operating lease expense is straight-line: total payments of $60,000 over 3 years equals $20,000 per year, regardless of the uneven cash payment schedule."
  },
  {
    "id": "leases-12",
    "section": "leases",
    "topic": "Finance lease interest",
    "difficulty": "easy",
    "q": "A finance lease liability is $100,000 at commencement, with a 5% discount rate and annual year-end payments of $23,000. What is year 1 interest expense?",
    "choices": [
      "$5,000",
      "$23,000",
      "$18,000",
      "$4,100"
    ],
    "answer": 0,
    "explain": "Interest is the beginning liability times the discount rate: $100,000 × 5% = $5,000. The $23,000 payment then splits into that interest and $18,000 of principal; $4,100 applies the rate to the balance after the payment, a year early."
  },
  {
    "id": "leases-20",
    "section": "leases",
    "topic": "Operating lease ROU asset",
    "difficulty": "medium",
    "q": "A lessee signs a 5-year operating lease with payments of $10,018 at the end of each year. The lease liability at commencement is $40,000, using an 8% discount rate, and there are no initial direct costs, incentives or prepaid rent. What is the right-of-use asset at the end of Year 1?",
    "choices": [
      "$32,000",
      "$33,182",
      "$29,982",
      "$40,000"
    ],
    "answer": 1,
    "explain": "The ROU asset is the plug: the $10,018 straight-line lease cost less the $3,200 accretion on the liability ($40,000 × 8%) is $6,818 of amortization, leaving **$33,182** — the same as the liability, $43,200 − $10,018. $32,000 reflects straight-line amortization, the finance-lease pattern."
  },
  {
    "id": "leases-21",
    "section": "leases",
    "topic": "Lease renewal options",
    "difficulty": "medium",
    "q": "Three years into a lease, a lessee makes major leasehold improvements and, as a result, becomes reasonably certain to exercise a 5-year renewal option it had excluded from the lease term. What accounting, if any, does this require now?",
    "choices": [
      "Remeasure the lease liability and adjust the right-of-use asset",
      "Remeasure the lease liability and recognize the difference in net income",
      "Make no change until the renewal option is formally exercised",
      "Account for the renewal period as a separate new lease when it begins"
    ],
    "answer": 0,
    "explain": "A significant event within the lessee's control that changes the lease term triggers **remeasurement** of the liability at a discount rate updated to that date, with the offset to the ROU asset, not income. Waiting for formal exercise ignores the reassessment requirement, and the contract itself has not changed, so there is no separate lease."
  },
  {
    "id": "leases-15",
    "section": "leases",
    "topic": "Lease term",
    "difficulty": "medium",
    "q": "A 5-year equipment lease gives the lessee a 3-year renewal option at a rent well below expected market rates, and the lessee is reasonably certain it will renew. What is the lease term under ASC 842?",
    "choices": [
      "8 years, the noncancelable period plus the renewal period",
      "5 years; renewal options are never part of the lease term",
      "5 years, with the renewal option disclosed in the notes only",
      "8 years only if the lessor can also compel the renewal"
    ],
    "answer": 0,
    "explain": "The lease term is the noncancelable period plus periods covered by options the lessee is reasonably certain to exercise (ASC 842-10-30-1). A renewal rent well below market is the economic incentive behind that judgment, so the 3-year option counts and the term is 8 years — and that longer term also feeds the major-part and present-value classification tests."
  },
  {
    "id": "leases-16",
    "section": "leases",
    "topic": "Variable lease payments",
    "difficulty": "medium",
    "q": "Which variable lease payments are included in the lease liability at commencement?",
    "choices": [
      "Payments that vary with an index or rate, at the commencement-date index level",
      "Payments based on a percentage of the lessee's sales at the leased store",
      "Payments based on the hours the leased equipment actually runs",
      "All variable payments, measured at management's best estimate of the total"
    ],
    "answer": 0,
    "explain": "Index- or rate-based payments go into the liability at the commencement-date index level. Usage- and performance-based payments, unless in substance fixed, are left out of the liability by design and recognized in the period they are incurred."
  },
  {
    "id": "leases-17",
    "section": "leases",
    "topic": "Initial direct costs",
    "difficulty": "medium",
    "q": "Which cost qualifies as an initial direct cost added to the right-of-use asset?",
    "choices": [
      "A broker's commission payable only if the lease is obtained",
      "Legal fees for negotiating and drafting the lease",
      "Allocated salaries of the leasing department",
      "Due diligence costs incurred before signing"
    ],
    "answer": 0,
    "explain": "ASC 842 limits initial direct costs to incremental costs that would not have been incurred had the lease not been executed. Legal fees, internal salaries and due diligence are incurred win or lose, so they are expensed."
  },
  {
    "id": "leases-18",
    "section": "leases",
    "topic": "Residual value guarantees",
    "difficulty": "medium",
    "q": "How does a lessee's residual value guarantee affect the lease liability?",
    "choices": [
      "The full guaranteed amount is always included in lease payments",
      "Only the amount probable of being owed under the guarantee is included",
      "Guarantees are disclosed but never measured",
      "The guarantee is recorded as a separate contingent liability"
    ],
    "answer": 1,
    "explain": "To measure the lease liability, the lessee includes only the amount it is probable to owe under the residual value guarantee, not the full guaranteed figure. To classify the lease, though, the full guarantee counts toward the present-value test."
  },
  {
    "id": "leases-22",
    "section": "leases",
    "topic": "Lease payments in cash flows",
    "difficulty": "easy",
    "q": "How does a lessee classify the annual cash payment on a finance lease in its statement of cash flows?",
    "choices": [
      "Principal in investing activities; interest in operating activities",
      "The entire payment in operating activities",
      "The entire payment in financing activities",
      "Principal in financing activities; interest in operating activities"
    ],
    "answer": 3,
    "explain": "A finance lease is treated like a financed purchase: repaying the liability is **financing**, and interest follows the usual U.S. GAAP rule for interest paid — **operating**. Putting the whole payment in operating activities is how operating lease payments are classified."
  },
  {
    "id": "equity-1",
    "section": "equity",
    "topic": "Stock issuance",
    "difficulty": "easy",
    "q": "A company issues 1,000 shares of $1 par common stock for $10 per share cash. How much is credited to additional paid-in capital?",
    "choices": [
      "$10,000",
      "$9,000",
      "$1,000",
      "$0"
    ],
    "answer": 1,
    "explain": "The $10,000 cash is allocated $1,000 to common stock at par (1,000 × $1) and the $9,000 excess over par to additional paid-in capital."
  },
  {
    "id": "equity-2",
    "section": "equity",
    "topic": "Treasury stock",
    "difficulty": "easy",
    "q": "Under the cost method, how is a purchase of treasury stock recorded?",
    "choices": [
      "As an investment asset at market value",
      "As a loss on the income statement",
      "As a reduction of retained earnings at par",
      "As a contra-equity account at cost"
    ],
    "answer": 3,
    "explain": "The cost method debits treasury stock, a contra-equity account, for the full purchase price. Treasury stock is never an asset and never runs through the income statement."
  },
  {
    "id": "equity-3",
    "section": "equity",
    "topic": "Treasury reissuance",
    "difficulty": "medium",
    "q": "Treasury shares bought at $10 each are later reissued: 100 shares at $12. Where does the $200 excess over cost go?",
    "choices": [
      "Credit to APIC from treasury stock",
      "Gain on the income statement",
      "Credit to retained earnings",
      "Credit to common stock at par"
    ],
    "answer": 0,
    "explain": "Reissuing treasury stock above cost credits additional paid-in capital from treasury stock transactions. Companies never report income-statement gains or losses on their own shares."
  },
  {
    "id": "equity-4",
    "section": "equity",
    "topic": "Cash dividends",
    "difficulty": "easy",
    "q": "On which date does a cash dividend reduce retained earnings?",
    "choices": [
      "Date of record",
      "Date of payment",
      "Date of declaration",
      "End of the fiscal year"
    ],
    "answer": 2,
    "explain": "Declaration creates a legal liability, so retained earnings is debited and dividends payable credited on the declaration date. No entry is made on the record date; payment settles the liability."
  },
  {
    "id": "equity-5",
    "section": "equity",
    "topic": "Property dividends",
    "difficulty": "medium",
    "q": "A company declares a property dividend of land whose book value is below its fair value. How is the dividend recorded?",
    "choices": [
      "Remeasure the land to fair value, with the gain in net income; reduce retained earnings by fair value",
      "Reduce retained earnings by the land's book value; no gain is recognized",
      "Reduce retained earnings by fair value; the difference over book value goes to APIC",
      "Remeasure the land to fair value, with the gain in other comprehensive income"
    ],
    "answer": 0,
    "explain": "Property dividends are recorded at fair value. The asset is first remeasured to fair value with the gain or loss in income; retained earnings is then reduced by that fair value."
  },
  {
    "id": "equity-6",
    "section": "equity",
    "topic": "Stock dividends",
    "difficulty": "easy",
    "q": "What effect does declaring and distributing a stock dividend have on total stockholders' equity?",
    "choices": [
      "No change in total equity",
      "Decrease equal to the dividend's fair value",
      "Increase equal to par value issued",
      "Decrease equal to par value issued"
    ],
    "answer": 0,
    "explain": "A stock dividend only reclassifies amounts from retained earnings into contributed capital; total stockholders' equity is unchanged because no assets leave the company."
  },
  {
    "id": "equity-7",
    "section": "equity",
    "topic": "Stock splits",
    "difficulty": "easy",
    "q": "A company executes a 2-for-1 stock split. What happens to par value per share and total par value?",
    "choices": [
      "Both par per share and total par are halved",
      "Par per share unchanged; total par doubles",
      "Par per share doubles; total par unchanged",
      "Par per share halves; total par unchanged"
    ],
    "answer": 3,
    "explain": "A split doubles the shares and halves par per share, so total par value is unchanged. No journal entry is required, only a memo entry."
  },
  {
    "id": "equity-8",
    "section": "equity",
    "topic": "Small vs large dividend",
    "difficulty": "medium",
    "q": "How is a large stock dividend (more than about 25% of outstanding shares) recorded?",
    "choices": [
      "Retained earnings reduced by fair value",
      "No entry; it is identical to a stock split",
      "Retained earnings reduced by par value",
      "APIC reduced by fair value"
    ],
    "answer": 2,
    "explain": "Large stock dividends are capitalized at par value, while small stock dividends (under 20-25%) use fair value. Applying fair value to a large dividend is the classic trap."
  },
  {
    "id": "equity-9",
    "section": "equity",
    "topic": "Stock dividend measurement",
    "difficulty": "medium",
    "q": "A company with 10,000 shares outstanding ($1 par, $15 fair value) declares a 10% stock dividend. Retained earnings decreases by:",
    "choices": [
      "$15,000",
      "$1,000",
      "$10,000",
      "$150,000"
    ],
    "answer": 0,
    "explain": "A 10% dividend is small, so it is recorded at fair value: 1,000 new shares × $15 = $15,000 debited to retained earnings, with $1,000 to common stock and $14,000 to APIC."
  },
  {
    "id": "equity-10",
    "section": "equity",
    "topic": "RE appropriations",
    "difficulty": "easy",
    "q": "What is the effect of appropriating retained earnings for future plant expansion?",
    "choices": [
      "Cash is legally restricted in an escrow account",
      "Retained earnings is reclassified; total RE unchanged",
      "An expense is recognized for the appropriation",
      "A liability is recorded for the expansion"
    ],
    "answer": 1,
    "explain": "An appropriation merely subdivides retained earnings into appropriated and unappropriated portions to signal intent. It sets aside no cash and creates no expense or liability."
  },
  {
    "id": "equity-11",
    "section": "equity",
    "topic": "Basic EPS",
    "difficulty": "easy",
    "q": "Net income is $100,000, preferred dividends declared are $10,000, and weighted-average common shares are 30,000. Basic EPS is:",
    "choices": [
      "$3.33",
      "$3.67",
      "$3.00",
      "$2.67"
    ],
    "answer": 2,
    "explain": "Basic EPS = (net income − preferred dividends) ÷ weighted-average shares = $90,000 ÷ 30,000 = $3.00. Forgetting to subtract preferred dividends gives the $3.33 trap. Deducting a second year of preferred dividends gives $2.67."
  },
  {
    "id": "equity-12",
    "section": "equity",
    "topic": "Weighted-average shares",
    "difficulty": "medium",
    "q": "A company had 10,000 shares outstanding all year and issued 6,000 more on July 1. Weighted-average shares for the year are:",
    "choices": [
      "16,000",
      "10,000",
      "14,500",
      "13,000"
    ],
    "answer": 3,
    "explain": "The 6,000 new shares were outstanding for half the year: 10,000 + (6,000 × 6/12) = 13,000. Using 16,000 ignores the time-weighting of the mid-year issuance."
  },
  {
    "id": "equity-13",
    "section": "equity",
    "topic": "Cumulative preferred EPS",
    "difficulty": "medium",
    "q": "In computing basic EPS, dividends on cumulative preferred stock are deducted from net income:",
    "choices": [
      "Only in the year they are declared",
      "For the current year whether or not declared",
      "Only when actually paid in cash",
      "Including all prior years in arrears"
    ],
    "answer": 1,
    "explain": "For cumulative preferred, the current-year dividend is deducted whether or not declared. Prior-year arrears were already deducted in those years, so they are not deducted again."
  },
  {
    "id": "equity-14",
    "section": "equity",
    "topic": "Dividends in arrears",
    "difficulty": "medium",
    "q": "A company has $100,000 of 5% cumulative preferred stock and skipped last year's dividend. How are the arrears reported?",
    "choices": [
      "Disclosed in the notes; no liability recorded",
      "Accrued as a $5,000 current liability",
      "Charged against retained earnings when skipped",
      "Recorded as interest payable"
    ],
    "answer": 0,
    "explain": "Dividends in arrears are not a liability until declared; the $5,000 is only disclosed in the notes. Cumulative means the arrears must be paid before any common dividends."
  },
  {
    "id": "equity-19",
    "section": "equity",
    "topic": "Treasury reissue below cost",
    "difficulty": "medium",
    "q": "Using the cost method, a company bought 1,000 of its own shares at $20 each. It later reissued 200 of them at $25, its only prior treasury stock sale, and it has never retired shares. It now reissues 500 more at $16. How is the $2,000 difference between cost and proceeds on these 500 shares recorded?",
    "choices": [
      "Debit APIC from treasury stock $1,000 and a $1,000 loss in net income",
      "Debit retained earnings for the full $2,000",
      "Debit APIC from treasury stock $1,000 and retained earnings $1,000",
      "Debit APIC from treasury stock for the full $2,000"
    ],
    "answer": 2,
    "explain": "A shortfall first absorbs APIC from earlier treasury gains — here 200 × $5 = $1,000 — and the rest is charged to **retained earnings**. APIC from treasury stock cannot go negative, and a company never reports a loss in income on its own shares."
  },
  {
    "id": "equity-16",
    "section": "equity",
    "topic": "Treasury stock method",
    "difficulty": "medium",
    "q": "A company with income from continuing operations available to common stockholders has stock options outstanding, and the exercise price is the only assumed proceeds. Under the treasury stock method, when do the options add shares to diluted EPS?",
    "choices": [
      "When the average market price for the period exceeds the exercise price",
      "Whenever the options are vested",
      "Whenever the year-end price exceeds the exercise price",
      "Always, regardless of the relationship of price to exercise cost"
    ],
    "answer": 0,
    "explain": "Options are dilutive when the average market price exceeds the exercise price: the assumed proceeds repurchase fewer shares than exercise issues, and the difference is added. The average price is used, not the year-end price. The stem's facts matter: with a loss from continuing operations available to common stockholders every potential share is antidilutive and excluded, and for share-based compensation awards unrecognized compensation cost counts as proceeds, which can make in-the-money options antidilutive."
  },
  {
    "id": "equity-17",
    "section": "equity",
    "topic": "If-converted method",
    "difficulty": "medium",
    "q": "How does convertible preferred stock enter diluted EPS under the if-converted method?",
    "choices": [
      "Dividends are added back to the numerator and conversion shares are added to the denominator",
      "Dividends are deducted from the numerator and conversion shares are added to the denominator",
      "Only the denominator changes, increased by the number of conversion shares",
      "The security is ignored in EPS until the holders actually convert"
    ],
    "answer": 0,
    "explain": "Assumed conversion removes the preferred dividend from the numerator's subtraction and adds the shares to the denominator — but only if the combined effect reduces EPS. Antidilutive conversions are left out."
  },
  {
    "id": "equity-18",
    "section": "equity",
    "topic": "Stock rights",
    "difficulty": "medium",
    "q": "A company issues stock rights to existing shareholders for no consideration. What entry is made at issuance?",
    "choices": [
      "A memorandum entry only",
      "A debit to retained earnings at the rights' fair value",
      "A credit to APIC at the rights' fair value",
      "A liability for the shares that may be issued"
    ],
    "answer": 0,
    "explain": "Rights issued free to shareholders get only a memo entry; the accounting waits for exercise, when the issuance is recorded at the exercise price. Rights sold or issued as compensation are measured, but that is a different fact pattern."
  },
  {
    "id": "equity-20",
    "section": "equity",
    "topic": "Partner's capital balance",
    "difficulty": "easy",
    "q": "Reyes and Tan operate an LLC taxed as a partnership. Reyes's capital account was $150,000 at the start of the year. During the year she contributed equipment that had cost her $60,000 and had an agreed fair value of $40,000, the LLC earned net income of $90,000 shared 60% to Reyes and 40% to Tan, and Reyes withdrew $30,000 in cash. What is Reyes's book (not tax-basis) capital balance at year end?",
    "choices": [
      "$214,000",
      "$234,000",
      "$244,000",
      "$250,000"
    ],
    "answer": 0,
    "explain": "Partnership books record contributed property at its agreed **fair value**, credit each partner's share of income under the agreement, and debit distributions: $150,000 + $40,000 + (60% × $90,000 = $54,000) − $30,000 = **$214,000**. Recording the equipment at its $60,000 cost gives $234,000, forgetting the withdrawal gives $244,000, and crediting Reyes with all $90,000 gives $250,000."
  },
  {
    "id": "equity-21",
    "section": "equity",
    "topic": "Partnership equity",
    "difficulty": "easy",
    "q": "Which statement describes the ordinary accounting for a partnership's equity?",
    "choices": [
      "Income is closed to a single retained earnings account for all partners",
      "Partners' cash withdrawals are recorded as operating expenses",
      "The partnership keeps a separate capital account for each partner",
      "The partnership records federal income tax expense on its net income"
    ],
    "answer": 2,
    "explain": "A partnership's equity is a set of **capital accounts, one per partner**, that absorb contributions, the agreed share of income or loss, and distributions; there is no par value, paid-in capital or retained earnings, and a withdrawal is a debit to the partner's capital account, not an expense. Because the entity's income is taxed on the partners' own returns, the partnership records no federal income tax expense."
  },
  {
    "id": "cashflow-1",
    "section": "cashflow",
    "topic": "Equipment purchases",
    "difficulty": "easy",
    "q": "A company pays cash to purchase manufacturing equipment for its own use. How is this reported on the statement of cash flows?",
    "choices": [
      "Operating outflow",
      "Financing outflow",
      "Investing outflow",
      "Noncash disclosure only"
    ],
    "answer": 2,
    "explain": "Purchases of productive long-lived assets are investing activities. Financing covers debt and equity transactions, and cash actually changed hands, so it is not a noncash disclosure."
  },
  {
    "id": "cashflow-2",
    "section": "cashflow",
    "topic": "Stock issuance",
    "difficulty": "easy",
    "q": "A corporation issues common stock for cash. In which section of the statement of cash flows does this belong?",
    "choices": [
      "Investing activities",
      "Financing activities",
      "Operating activities",
      "Noncash disclosure only"
    ],
    "answer": 1,
    "explain": "Transactions with owners and creditors — issuing stock, borrowing, repaying debt, paying dividends — are financing activities. Investing covers purchases and sales of long-term assets."
  },
  {
    "id": "cashflow-3",
    "section": "cashflow",
    "topic": "Indirect method",
    "difficulty": "easy",
    "q": "Under the indirect method, how is depreciation expense treated when computing net cash from operating activities?",
    "choices": [
      "Added back to net income",
      "Subtracted from net income",
      "Shown as an investing outflow",
      "Excluded from the statement"
    ],
    "answer": 0,
    "explain": "Depreciation reduced net income but used no cash, so the indirect method adds it back to reconcile net income to operating cash flow."
  },
  {
    "id": "cashflow-4",
    "section": "cashflow",
    "topic": "Gain on sale",
    "difficulty": "medium",
    "q": "A company reports a gain on the sale of equipment. Under the indirect method, how does the gain affect the operating section?",
    "choices": [
      "It is added to net income",
      "It is reported in financing activities",
      "It is ignored entirely",
      "It is subtracted from net income"
    ],
    "answer": 3,
    "explain": "The gain is subtracted from net income so it is not double counted — the full sale proceeds, including the gain, appear as an investing inflow."
  },
  {
    "id": "cashflow-5",
    "section": "cashflow",
    "topic": "Receivables change",
    "difficulty": "easy",
    "q": "Accounts receivable increased by $10,000 during the year. What is the indirect-method adjustment to net income?",
    "choices": [
      "Add $10,000",
      "Subtract $10,000",
      "Subtract $10,000 in investing activities",
      "No adjustment"
    ],
    "answer": 1,
    "explain": "An increase in receivables means sales were recorded that have not been collected in cash, so $10,000 is subtracted. Only a decrease in receivables is added back."
  },
  {
    "id": "cashflow-6",
    "section": "cashflow",
    "topic": "Working capital changes",
    "difficulty": "medium",
    "q": "Inventory increased $8,000 and accounts payable increased $5,000 during the year. What is the combined indirect-method adjustment to net income?",
    "choices": [
      "Subtract $3,000",
      "Add $3,000",
      "Subtract $13,000",
      "Add $13,000"
    ],
    "answer": 0,
    "explain": "The inventory increase uses cash (subtract $8,000) while the payables increase conserves cash (add $5,000), netting to a $3,000 subtraction."
  },
  {
    "id": "cashflow-7",
    "section": "cashflow",
    "topic": "Interest paid",
    "difficulty": "easy",
    "q": "Under US GAAP, in which section of the statement of cash flows is cash interest paid on debt reported, when none of the interest is capitalized?",
    "choices": [
      "Financing activities",
      "Investing activities",
      "Noncash disclosure",
      "Operating activities"
    ],
    "answer": 3,
    "explain": "US GAAP classifies interest paid and interest received as operating activities. Financing is the trap: repaying the debt principal is financing, but the interest on it is not. Capitalized interest is the exception: interest capitalized into property, plant and equipment is part of the investing outflow for that asset."
  },
  {
    "id": "cashflow-8",
    "section": "cashflow",
    "topic": "Dividends classification",
    "difficulty": "medium",
    "q": "Under US GAAP, how are cash dividends paid to shareholders classified on the statement of cash flows?",
    "choices": [
      "Operating outflow",
      "Financing outflow",
      "Investing outflow",
      "Noncash disclosure"
    ],
    "answer": 1,
    "explain": "Dividends paid are distributions to owners, a financing activity. Do not confuse them with dividends received, which US GAAP classifies as operating."
  },
  {
    "id": "cashflow-9",
    "section": "cashflow",
    "topic": "Direct method items",
    "difficulty": "medium",
    "q": "Which line item appears in the operating section of a statement of cash flows prepared under the direct method?",
    "choices": [
      "Depreciation added back",
      "Gain on sale removed",
      "Cash paid to suppliers",
      "Increase in accounts receivable"
    ],
    "answer": 2,
    "explain": "The direct method lists gross operating receipts and payments, such as cash collected from customers and cash paid to suppliers. Add-backs and working capital adjustments belong to the indirect method."
  },
  {
    "id": "cashflow-10",
    "section": "cashflow",
    "topic": "Cash collections",
    "difficulty": "medium",
    "q": "Sales revenue was $500,000 and accounts receivable increased $20,000 during the year. Under the direct method, how much cash was collected from customers?",
    "choices": [
      "$520,000",
      "$500,000",
      "$480,000",
      "$460,000"
    ],
    "answer": 2,
    "explain": "Cash collections equal sales minus the increase in receivables: $500,000 − $20,000 = $480,000. The receivables increase represents sales not yet collected."
  },
  {
    "id": "cashflow-11",
    "section": "cashflow",
    "topic": "Stock issued for land",
    "difficulty": "easy",
    "q": "A company acquires land by issuing shares of its own common stock. How is this transaction reported?",
    "choices": [
      "Investing outflow and financing inflow",
      "Disclosed as a noncash activity",
      "Operating activity",
      "Not reported anywhere"
    ],
    "answer": 1,
    "explain": "No cash changed hands, so the exchange is excluded from the statement body and disclosed as a noncash investing and financing activity."
  },
  {
    "id": "cashflow-12",
    "section": "cashflow",
    "topic": "Debt conversion",
    "difficulty": "medium",
    "q": "Bondholders convert their bonds payable into the issuer's common stock. How does the issuer report this?",
    "choices": [
      "Financing inflow and outflow",
      "Operating activity",
      "Investing activity",
      "Noncash financing disclosure"
    ],
    "answer": 3,
    "explain": "A debt-to-equity conversion involves no cash, so it is a noncash financing activity: disclosed in the noncash investing and financing schedule, not in the body of the statement."
  },
  {
    "id": "cashflow-13",
    "section": "cashflow",
    "topic": "Sale proceeds",
    "difficulty": "easy",
    "q": "Equipment with a $30,000 book value is sold for $40,000 cash. What amount appears in the investing section?",
    "choices": [
      "$30,000 inflow",
      "$10,000 inflow",
      "$40,000 inflow",
      "$70,000 inflow"
    ],
    "answer": 2,
    "explain": "The full cash proceeds of $40,000 are the investing inflow. The $10,000 gain matters only as an indirect-method subtraction in the operating section."
  },
  {
    "id": "cashflow-14",
    "section": "cashflow",
    "topic": "Operating cash flow",
    "difficulty": "medium",
    "q": "Net income is $100,000, depreciation is $20,000, and accounts receivable increased $10,000. What is net cash from operating activities under the indirect method?",
    "choices": [
      "$110,000",
      "$130,000",
      "$90,000",
      "$70,000"
    ],
    "answer": 0,
    "explain": "Start with net income of $100,000, add back $20,000 of noncash depreciation, and subtract the $10,000 receivables increase: $110,000."
  },
  {
    "id": "cashflow-15",
    "section": "cashflow",
    "topic": "Dividend classification",
    "difficulty": "easy",
    "q": "Rios Corp. received $5,000 of dividends on an equity investment and paid $12,000 of dividends to its own shareholders. Under U.S. GAAP, how do these appear on the statement of cash flows?",
    "choices": [
      "$5,000 operating inflow; $12,000 financing outflow",
      "$5,000 investing inflow; $12,000 financing outflow",
      "Both in operating activities, netting to a $7,000 outflow",
      "$5,000 investing inflow; $12,000 operating outflow"
    ],
    "answer": 0,
    "explain": "Dividends received are a return on investment, so they are operating; dividends paid are distributions to owners, so they are financing. Neither belongs in investing, and the two are never netted against each other."
  },
  {
    "id": "cashflow-16",
    "section": "cashflow",
    "topic": "Trading securities",
    "difficulty": "medium",
    "q": "A company buys and sells debt securities it holds principally to profit from short-term price changes (trading). How are the purchase and sale cash flows classified?",
    "choices": [
      "Operating activities",
      "Investing activities, like purchases and sales of available-for-sale securities",
      "Financing activities, because the portfolio funds the operations",
      "Split between operating and investing based on the length of the holding period"
    ],
    "answer": 0,
    "explain": "Cash flows from trading securities are classified by the nature and purpose for which the securities are held (ASC 320-10-45-11); a portfolio held for short-term resale is operating. Available-for-sale and held-to-maturity purchases and sales are investing by rule, and nothing splits by holding period."
  },
  {
    "id": "cashflow-17",
    "section": "cashflow",
    "topic": "Restricted cash",
    "difficulty": "medium",
    "q": "How does restricted cash appear in the statement of cash flows?",
    "choices": [
      "The statement's totals include restricted cash, so transfers to restricted accounts are not flows",
      "An investing outflow when cash is restricted and an inflow when it is released",
      "A financing activity, because the restrictions arise from lending agreements",
      "It is excluded from the statement and reported only in the balance sheet"
    ],
    "answer": 0,
    "explain": "The beginning and ending totals on the statement include restricted cash, so moving money between unrestricted and restricted accounts is not itself a cash flow. A reconciliation ties the total to the balance sheet lines."
  },
  {
    "id": "cashflow-18",
    "section": "cashflow",
    "topic": "Supplemental disclosures",
    "difficulty": "easy",
    "q": "A company using the indirect method must separately disclose which amounts paid?",
    "choices": [
      "Income taxes and interest",
      "Wages and rent",
      "Dividends and treasury stock purchases",
      "Insurance and advertising"
    ],
    "answer": 0,
    "explain": "Indirect-method filers disclose cash paid for interest and income taxes, plus noncash investing and financing activities. The direct method shows operating cash payments on the face of the statement instead."
  },
  {
    "id": "taxes-1",
    "section": "taxes",
    "topic": "Permanent differences",
    "difficulty": "easy",
    "q": "A corporation earns interest on municipal bonds that is never taxable. For deferred tax purposes this is classified as what?",
    "choices": [
      "A permanent difference",
      "A temporary difference creating a deferred tax liability",
      "A temporary difference creating a deferred tax asset",
      "An uncertain tax position"
    ],
    "answer": 0,
    "explain": "Municipal interest never reverses — it is income for books that will never be taxed, a **permanent** difference. Permanent differences create no deferred taxes; they only move the effective rate away from the statutory rate."
  },
  {
    "id": "taxes-2",
    "section": "taxes",
    "topic": "Depreciation differences",
    "difficulty": "easy",
    "q": "Tax depreciation exceeds book depreciation in an asset’s early years. What does this difference create?",
    "choices": [
      "A deferred tax liability",
      "A deferred tax asset",
      "A permanent difference",
      "A valuation allowance"
    ],
    "answer": 0,
    "explain": "Faster tax depreciation means lower taxable income now and **higher taxable income later** when the difference reverses — future taxable amounts, so a **deferred tax liability**. This is the classic DTL example on the exam."
  },
  {
    "id": "taxes-3",
    "section": "taxes",
    "topic": "Warranty accruals",
    "difficulty": "easy",
    "q": "Warranty costs are expensed for books when accrued but deducted for tax only when paid. The accrual creates what?",
    "choices": [
      "A deferred tax asset",
      "A deferred tax liability",
      "A permanent difference",
      "A current tax payable"
    ],
    "answer": 0,
    "explain": "The deduction arrives **later** for tax than for books — a future deductible amount, so a **deferred tax asset**. Accrued warranties, bad-debt allowances, and accrued litigation all follow this pattern."
  },
  {
    "id": "taxes-4",
    "section": "taxes",
    "topic": "Prepaid income",
    "difficulty": "medium",
    "q": "A landlord collects January rent in December. Tax law taxes it on receipt; books defer it to January. At year end this creates what?",
    "choices": [
      "A deferred tax asset",
      "A deferred tax liability",
      "A permanent difference",
      "Nothing — the amounts offset"
    ],
    "answer": 0,
    "explain": "The income is taxed **before** books recognize it, so book income will later include revenue that has already been taxed — a future deductible situation and a **DTA**. Income taxed first → DTA; deducted first → DTL."
  },
  {
    "id": "taxes-5",
    "section": "taxes",
    "topic": "Measurement rate",
    "difficulty": "medium",
    "q": "Deferred tax assets and liabilities are measured using which tax rate?",
    "choices": [
      "The enacted rate expected to apply when the difference reverses",
      "The current-year statutory rate in all cases",
      "A rate proposed in pending legislation if passage is likely",
      "The company’s average effective rate over recent years"
    ],
    "answer": 0,
    "explain": "ASC 740 uses the **enacted** rate for the reversal years — never anticipated or proposed rates, no matter how likely passage looks. Rate changes count only once signed into law."
  },
  {
    "id": "taxes-6",
    "section": "taxes",
    "topic": "Rate change effect",
    "difficulty": "medium",
    "q": "A new tax rate is enacted in Year 3, affecting differences reversing in later years. When is the effect on deferred balances recorded?",
    "choices": [
      "In Year 3, the period of enactment",
      "Spread over the years the differences reverse",
      "Retrospectively, restating prior deferreds",
      "When the new rate first takes effect"
    ],
    "answer": 0,
    "explain": "Deferred balances are remeasured in the period of **enactment**, with the whole effect running through income tax expense from continuing operations — even if the rate does not take effect until a later year."
  },
  {
    "id": "taxes-7",
    "section": "taxes",
    "topic": "Valuation allowance standard",
    "difficulty": "easy",
    "q": "A valuation allowance against a deferred tax asset is required when what standard is met?",
    "choices": [
      "It is more likely than not that some portion will not be realized",
      "It is remote that any portion of the asset will be realized",
      "It is reasonably possible, but not probable, that some portion will not be realized",
      "Recorded deferred tax assets exceed recorded deferred tax liabilities"
    ],
    "answer": 0,
    "explain": "The test is **more likely than not** — over 50% — that some or all of the DTA will **not** be realized. The allowance reduces the DTA to the amount expected to be realized."
  },
  {
    "id": "taxes-8",
    "section": "taxes",
    "topic": "Valuation allowance evidence",
    "difficulty": "medium",
    "q": "Which item is strong negative evidence that a valuation allowance is needed?",
    "choices": [
      "Cumulative losses in recent years",
      "A proposed but not yet enacted cut in future tax rates",
      "A strong history of profitable operations",
      "Available tax-planning strategies"
    ],
    "answer": 0,
    "explain": "A **cumulative loss in recent years** is the textbook negative evidence — hard to overcome with projections alone. A profitable history and available tax-planning strategies are positive evidence; a proposed rate cut is neither — ASC 740 measures deferred taxes at enacted rates only."
  },
  {
    "id": "taxes-9",
    "section": "taxes",
    "topic": "Balance sheet classification",
    "difficulty": "easy",
    "q": "How are deferred tax assets and liabilities classified on a classified balance sheet?",
    "choices": [
      "All noncurrent",
      "Current or noncurrent, following the related asset",
      "All current",
      "DTAs current, DTLs noncurrent"
    ],
    "answer": 0,
    "explain": "Every deferred tax item is **noncurrent**, offset only within the same tax-paying component and taxing jurisdiction. The old current/noncurrent split based on the related asset was eliminated — a favorite trap for out-of-date choices."
  },
  {
    "id": "taxes-10",
    "section": "taxes",
    "topic": "Total tax expense",
    "difficulty": "medium",
    "q": "Current tax payable is $40,000. During the year the deferred tax liability grew by $6,000 and the deferred tax asset grew by $2,000; all deferred tax changes relate to continuing operations. Total income tax expense is what?",
    "choices": [
      "$44,000",
      "$40,000",
      "$48,000",
      "$36,000"
    ],
    "answer": 0,
    "explain": "Expense = current + deferred. The DTL increase **adds** $6,000; the DTA increase **subtracts** $2,000: $40,000 + $6,000 − $2,000 = **$44,000**."
  },
  {
    "id": "taxes-20",
    "section": "taxes",
    "topic": "Loss carryforward",
    "difficulty": "medium",
    "q": "In Year 1, its first year, Corvid Corp. incurs a $400,000 net operating loss that it may carry forward. The enacted rate is 21% for Year 1, and enacted law raises it to 25% for Year 2 and later. Corvid has a $50,000 deferred tax liability from accelerated depreciation on equipment that will reverse into taxable income within the carryforward period. If needed, management would also sell land for a $300,000 taxable gain, a prudent and feasible tax-planning strategy with no significant cost. What deferred tax asset does Corvid recognize for the carryforward, net of any valuation allowance?",
    "choices": [
      "$84,000",
      "$50,000",
      "$0",
      "$100,000"
    ],
    "answer": 3,
    "explain": "A carryforward is a future deductible amount measured at the **enacted** rate for the years it will be used: $400,000 × 25% = **$100,000**; $84,000 uses the Year 1 rate. The start-up loss is negative evidence, but the reversing taxable temporary difference ($50,000 ÷ 25% = $200,000) plus the land sale ($300,000, none of it the DTL's reversal counted again, since land is not depreciated) provide $500,000 of future taxable income against a $400,000 loss, exactly enough under the 80%-of-taxable-income limit on post-2017 losses (80% × $500,000 = $400,000), so no valuation allowance is needed. The $50,000 DTL offsets the DTA only in balance-sheet presentation, not in measuring it."
  },
  {
    "id": "taxes-12",
    "section": "taxes",
    "topic": "Uncertain tax positions",
    "difficulty": "medium",
    "q": "A tax position may be recognized in the financial statements only if what threshold is met?",
    "choices": [
      "More likely than not to be sustained on examination",
      "Certain to be sustained if litigated",
      "Reasonably possible to be sustained",
      "Approved in advance by the taxing authority"
    ],
    "answer": 0,
    "explain": "Step one is recognition: **more likely than not** the position survives examination, assuming the authority sees everything. Step two measures the benefit at the largest amount with a greater-than-50% cumulative chance of being realized."
  },
  {
    "id": "taxes-13",
    "section": "taxes",
    "topic": "Nondeductible fines",
    "difficulty": "easy",
    "q": "A company pays a government fine that is expensed for books but never deductible. The fine’s effect on the tax provision is what?",
    "choices": [
      "It raises the effective rate above the statutory rate",
      "It creates a deferred tax asset",
      "It creates a deferred tax liability",
      "It lowers the effective rate below the statutory rate"
    ],
    "answer": 0,
    "explain": "A nondeductible expense is a **permanent** difference: no deferred taxes, but book income is lower than taxable income forever, pushing the **effective rate up**. Compare municipal interest, which pushes it down."
  },
  {
    "id": "taxes-14",
    "section": "taxes",
    "topic": "Intraperiod allocation",
    "difficulty": "medium",
    "q": "Intraperiod tax allocation spreads total tax expense among which items?",
    "choices": [
      "Continuing operations, discontinued operations, and other comprehensive income",
      "The current and noncurrent sections of the classified balance sheet",
      "The federal, state, local and foreign taxing jurisdictions involved",
      "The four quarters of the fiscal year based on interim earnings"
    ],
    "answer": 0,
    "explain": "**Intra**period allocation matches tax to where the pretax item landed: continuing operations, discontinued operations, OCI, and items charged directly to equity. Inter-period allocation — deferreds — is the other axis; the names invite the swap."
  },
  {
    "id": "taxes-15",
    "section": "taxes",
    "topic": "Bad debt allowance",
    "difficulty": "medium",
    "q": "Books use an allowance for credit losses; tax allows a deduction only when a receivable is actually written off. The allowance balance creates what?",
    "choices": [
      "A deferred tax asset",
      "A deferred tax liability",
      "A permanent difference",
      "An increase in current tax payable"
    ],
    "answer": 0,
    "explain": "Same shape as warranties: the book expense precedes the tax deduction, a future deductible amount — a **DTA**. Almost every accrual deductible later \"when paid or realized\" points the same way."
  },
  {
    "id": "taxes-16",
    "section": "taxes",
    "topic": "Deferred expense from balances",
    "difficulty": "medium",
    "q": "The deferred tax liability was $30,000 at the start of the year and $42,000 at the end, with no other deferred items, and the whole change relates to continuing operations. Deferred tax expense for the year is what?",
    "choices": [
      "$12,000",
      "$42,000",
      "$30,000",
      "$72,000"
    ],
    "answer": 0,
    "explain": "Deferred expense is the **change** in the net deferred balance: $42,000 − $30,000 = **$12,000**. Reporting the ending balance as the expense is the trap."
  },
  {
    "id": "taxes-17",
    "section": "taxes",
    "topic": "Installment sales",
    "difficulty": "medium",
    "q": "A company recognizes installment sale income currently for books but reports it for tax as cash is collected. What does this create?",
    "choices": [
      "A deferred tax liability, because taxable income will exceed book income later",
      "A deferred tax asset, because the tax has effectively been prepaid to the IRS",
      "A permanent difference that never enters the deferred tax computation",
      "A valuation allowance against the installment receivable balance"
    ],
    "answer": 0,
    "explain": "Book income leads taxable income, so the future reversals increase taxable income — the signature of a deferred tax liability. A DTA arises in the mirror case, where tax pays now and books deduct later."
  },
  {
    "id": "taxes-18",
    "section": "taxes",
    "topic": "Income tax disclosures",
    "difficulty": "medium",
    "q": "Under ASU 2023-09, which income tax disclosure must every entity, public or private, now provide each year?",
    "choices": [
      "Income taxes paid, split among federal, state and foreign, and by any jurisdiction at 5% or more of the total",
      "A tabular rate reconciliation in dollars and percentages across eight prescribed categories",
      "A schedule of every temporary difference by individual asset and liability",
      "The range of reasonably possible change in unrecognized tax benefits over the next twelve months"
    ],
    "answer": 0,
    "explain": "ASU 2023-09 requires all entities to disaggregate income taxes paid, net of refunds, by federal, state and foreign, and by any jurisdiction at 5% or more of the total. The eight-category rate reconciliation in dollars and percentages applies only to public business entities — others give qualitative information — and the disclosure of the reasonably possible twelve-month change in unrecognized tax benefits was removed. Effective for public business entities in years beginning after 15 Dec 2024, and a year later for everyone else."
  },
  {
    "id": "taxes-19",
    "section": "taxes",
    "topic": "Tax effects in OCI",
    "difficulty": "medium",
    "q": "Where is the deferred tax effect of an unrealized gain on an available-for-sale debt security reported?",
    "choices": [
      "In other comprehensive income, with the gain it relates to",
      "In income tax expense from continuing operations",
      "As a direct adjustment to retained earnings",
      "It is not recorded until the security is sold"
    ],
    "answer": 0,
    "explain": "Intraperiod allocation follows the item: the tax effect of an OCI gain lands in OCI. The deferred tax liability is real and recorded now — waiting for the sale would misstate both OCI and the balance sheet."
  },
  {
    "id": "combos-20",
    "section": "combos",
    "topic": "Downstream inventory sale",
    "difficulty": "easy",
    "q": "Parent sells goods that cost it $60,000 to its wholly owned subsidiary for $80,000. At year end, 40% of those goods are still in the subsidiary's inventory. How much unrealized profit is eliminated in consolidation?",
    "choices": [
      "$20,000",
      "$8,000",
      "$12,000",
      "$32,000"
    ],
    "answer": 1,
    "explain": "Only the markup still sitting in the group's ending inventory is unrealized: ($80,000 − $60,000) × 40% = **$8,000**. The $12,000 on goods resold to outsiders has been earned, and $32,000 is the transfer price of the goods on hand, not the profit in them."
  },
  {
    "id": "combos-21",
    "section": "combos",
    "topic": "Consolidated cost of goods sold",
    "difficulty": "medium",
    "q": "During the year, Parent sold goods costing $60,000 to its wholly owned subsidiary for $80,000, and the subsidiary resold three-fourths of them to outside customers. Separate-company cost of goods sold was $400,000 for Parent and $250,000 for the subsidiary. There was no intercompany inventory at the start of the year. What is consolidated cost of goods sold?",
    "choices": [
      "$575,000",
      "$650,000",
      "$570,000",
      "$565,000"
    ],
    "answer": 0,
    "explain": "Remove the $80,000 intercompany purchase from the combined $650,000, then add the $5,000 markup still in ending inventory ($20,000 × 1/4), which moves out of inventory and into cost of sales: $650,000 − $80,000 + $5,000 = **$575,000**. Stopping at $570,000 leaves ending inventory overstated by that unrealized profit."
  },
  {
    "id": "combos-22",
    "section": "combos",
    "topic": "Intercompany equipment sale",
    "difficulty": "medium",
    "q": "On January 1, Parent sells equipment with a carrying amount of $30,000 to its wholly owned subsidiary for $45,000. The subsidiary depreciates it straight-line over its 5-year remaining life with no salvage value. In the year of sale, by how much do the consolidation entries for this equipment reduce the two companies' combined net income?",
    "choices": [
      "$18,000",
      "$15,000",
      "$3,000",
      "$12,000"
    ],
    "answer": 3,
    "explain": "Eliminate the $15,000 gain, then remove the excess depreciation the subsidiary takes on the marked-up cost ($15,000 ÷ 5 = $3,000), which adds income back: $15,000 − $3,000 = **$12,000**. The remaining $12,000 of gain reaches consolidated income at $3,000 a year over the next four years."
  },
  {
    "id": "combos-23",
    "section": "combos",
    "topic": "Consolidated total assets",
    "difficulty": "easy",
    "q": "Parent pays $500,000 cash for all of Sub's stock, an amount equal to Sub's book value, and Sub's book values equal fair values. Right after the purchase, Parent reports total assets of $2,000,000 (including the investment) and Sub reports total assets of $800,000 and liabilities of $300,000. What are consolidated total assets?",
    "choices": [
      "$2,500,000",
      "$2,800,000",
      "$2,300,000",
      "$2,000,000"
    ],
    "answer": 2,
    "explain": "The investment is eliminated against Sub's equity and replaced by Sub's individual assets and liabilities: $2,000,000 − $500,000 + $800,000 = **$2,300,000**. Adding the two balance sheets ($2,800,000) counts Sub's net assets twice — once as Parent's investment and again line by line."
  },
  {
    "id": "combos-5",
    "section": "combos",
    "topic": "When to consolidate",
    "difficulty": "easy",
    "q": "Consolidated financial statements are generally required when one company holds what in another?",
    "choices": [
      "More than 50% of voting shares",
      "At least 20% of voting shares",
      "Any investment accounted for by the equity method",
      "Exactly 50% of voting shares"
    ],
    "answer": 0,
    "explain": "A **majority voting interest** — over 50% — means control, and control means consolidation. 20–50% points to the equity method; a 50/50 split is joint control, not control."
  },
  {
    "id": "combos-24",
    "section": "combos",
    "topic": "Intercompany dividends",
    "difficulty": "easy",
    "q": "Parent bought its wholly owned subsidiary at book value, with no fair value adjustments, and carries it at cost on its own books. Parent's separate net income of $500,000 includes $40,000 of dividends from the subsidiary, which earned $120,000. There are no other intercompany transactions. What is consolidated net income?",
    "choices": [
      "$620,000",
      "$580,000",
      "$540,000",
      "$500,000"
    ],
    "answer": 1,
    "explain": "A dividend from a subsidiary is cash moving inside the group, so Parent's dividend income is eliminated: $500,000 − $40,000 + $120,000 = **$580,000**. Keeping it ($620,000) counts $40,000 of the subsidiary's earnings twice, while $540,000 wrongly drops the part the subsidiary paid out."
  },
  {
    "id": "combos-7",
    "section": "combos",
    "topic": "NCI presentation",
    "difficulty": "medium",
    "q": "On the consolidated balance sheet, where is a noncontrolling interest with no redemption feature presented?",
    "choices": [
      "Within equity, separate from the parent’s equity",
      "As a long-term liability",
      "Between liabilities and equity (mezzanine)",
      "Netted against the investment in subsidiary"
    ],
    "answer": 0,
    "explain": "NCI is **equity** — shown inside the equity section but labeled apart from the parent shareholders’ portion. Mezzanine (temporary equity) is where SEC registrants put NCI redeemable outside the company's control; with no redemption feature, it does not apply."
  },
  {
    "id": "combos-8",
    "section": "combos",
    "topic": "Intercompany balances",
    "difficulty": "easy",
    "q": "At year end a parent holds a $40,000 receivable from its consolidated subsidiary. On the consolidated balance sheet this receivable appears how?",
    "choices": [
      "It is eliminated entirely",
      "At $40,000 as an asset",
      "Netted to the extent of the NCI percentage",
      "Reclassified as an investment"
    ],
    "answer": 0,
    "explain": "A consolidated entity cannot owe itself money. Intercompany receivables, payables, sales, and interest are eliminated **100%** — never just the parent’s ownership share."
  },
  {
    "id": "combos-9",
    "section": "combos",
    "topic": "Consolidated revenue",
    "difficulty": "medium",
    "q": "Parent revenue is $800,000 and subsidiary revenue is $300,000, including $60,000 the subsidiary billed the parent. Consolidated revenue is what?",
    "choices": [
      "$1,040,000",
      "$1,100,000",
      "$800,000",
      "$1,160,000"
    ],
    "answer": 0,
    "explain": "Combine, then remove intercompany sales in full: $800,000 + $300,000 − $60,000 = **$1,040,000**. Only transactions with outsiders count as consolidated revenue."
  },
  {
    "id": "combos-10",
    "section": "combos",
    "topic": "Intercompany inventory profit",
    "difficulty": "medium",
    "q": "A parent sells inventory to its subsidiary at a profit, and some remains in the subsidiary’s ending inventory. In consolidation, the profit on those unsold goods is treated how?",
    "choices": [
      "Eliminated until the goods are sold to outsiders",
      "Recognized, because the sale legally occurred",
      "Recognized in proportion to the parent’s ownership",
      "Deferred only if the subsidiary is wholly owned"
    ],
    "answer": 0,
    "explain": "Profit is earned only when inventory leaves the group. The markup sitting in ending inventory is **unrealized** and is eliminated — recognized later, when an outside sale finally happens."
  },
  {
    "id": "combos-11",
    "section": "combos",
    "topic": "Consolidated retained earnings",
    "difficulty": "medium",
    "q": "Immediately after an acquisition, consolidated retained earnings equals whose retained earnings?",
    "choices": [
      "The parent’s only",
      "The parent’s plus the subsidiary’s",
      "The subsidiary’s only",
      "The parent’s plus the parent’s share of the subsidiary’s"
    ],
    "answer": 0,
    "explain": "The subsidiary’s equity is eliminated against the investment at acquisition, so day-one consolidated retained earnings is the **parent’s alone**. The subsidiary contributes only its **post-acquisition** earnings over time."
  },
  {
    "id": "combos-25",
    "section": "combos",
    "topic": "Investment method choice",
    "difficulty": "easy",
    "q": "A parent may carry its wholly owned subsidiary on its own books under either the cost method or the equity method. How does that choice affect the consolidated financial statements?",
    "choices": [
      "No effect; only the worksheet elimination entries differ",
      "Consolidated income is higher under the equity method",
      "Consolidated income is higher under the cost method",
      "Income is unaffected, but consolidated retained earnings differs"
    ],
    "answer": 0,
    "explain": "The investment account and the parent's income from the subsidiary are eliminated either way, so the consolidated statements come out **identical**. The internal method changes only the route: under the cost method, for instance, the worksheet needs an extra entry to bring in the subsidiary's undistributed earnings from prior years."
  },
  {
    "id": "combos-26",
    "section": "combos",
    "topic": "Intercompany bonds",
    "difficulty": "medium",
    "q": "A wholly owned subsidiary has bonds outstanding with a carrying amount of $480,000. On December 31, Parent buys all of them from outside investors for $460,000 and holds them as an investment. What does the consolidated income statement report for this purchase?",
    "choices": [
      "No gain or loss; the $20,000 is amortized into interest over the remaining term",
      "A $20,000 loss on extinguishment of debt",
      "No gain or loss until the bonds mature or are sold",
      "A $20,000 gain on extinguishment of debt"
    ],
    "answer": 3,
    "explain": "To the group, the debt has been retired: the bonds and Parent's investment are eliminated, and the $480,000 carrying amount less the $460,000 paid is a **$20,000 gain** recognized now. The separate books recognize that same $20,000 gradually through interest in later years, so consolidation eliminates it there to avoid counting it twice."
  },
  {
    "id": "combos-14",
    "section": "combos",
    "topic": "NCI share of income",
    "difficulty": "medium",
    "q": "A subsidiary earns $100,000 and the parent owns 80%. Consolidated net income presents the subsidiary’s earnings how?",
    "choices": [
      "All $100,000 included; $20,000 attributed to the NCI",
      "Only the parent’s $80,000 included",
      "$100,000 less an NCI expense of $20,000",
      "Only $80,000 included, with the NCI's $20,000 credited directly to NCI equity"
    ],
    "answer": 0,
    "explain": "Consolidated income includes the subsidiary’s **full** earnings; the bottom of the statement then attributes it — $80,000 to the parent, $20,000 to the **noncontrolling interest**. Attribution is not an expense."
  },
  {
    "id": "combos-15",
    "section": "combos",
    "topic": "Consolidation scope",
    "difficulty": "easy",
    "q": "A parent controls a subsidiary in a completely different industry. May the subsidiary be left out of consolidation for that reason?",
    "choices": [
      "No — control requires consolidation regardless of industry",
      "Yes — it is reported as a one-line equity-method investment instead",
      "Yes — dissimilar operations are exempt",
      "No — unless the subsidiary is foreign, when exclusion is permitted"
    ],
    "answer": 0,
    "explain": "There is no dissimilar-industries exception: **control means consolidation**. The old practice of carving out finance subsidiaries died decades ago and survives only as a distractor."
  },
  {
    "id": "combos-27",
    "section": "combos",
    "topic": "Intercompany equipment, later year",
    "difficulty": "medium",
    "q": "On January 1, Year 1, a wholly owned subsidiary sold equipment to Parent at a $24,000 gain. Parent depreciates the equipment straight-line over its 4-year remaining life. What does the Year 2 consolidation do to the two companies' combined depreciation expense?",
    "choices": [
      "Decreases it by $12,000",
      "Increases it by $6,000",
      "Decreases it by $6,000",
      "Nothing; the gain was eliminated in Year 1"
    ],
    "answer": 2,
    "explain": "Parent depreciates the marked-up cost, so each year of the remaining life carries $24,000 ÷ 4 = **$6,000** of excess depreciation to remove. Year 1's entries fixed only Year 1; $12,000 is the cumulative excess through Year 2, and Year 1's share runs through beginning retained earnings, not Year 2 expense."
  },
  {
    "id": "combos-17",
    "section": "combos",
    "topic": "Intercompany land sales",
    "difficulty": "medium",
    "q": "A subsidiary sells land to its parent at a $50,000 gain, and the parent still holds the land at year end. What does consolidation eliminate?",
    "choices": [
      "The entire $50,000 gain, until the land is sold outside the group",
      "Only the parent's ownership share of the gain",
      "None of the gain, because land is not depreciable",
      "The gain net of its tax effect only"
    ],
    "answer": 0,
    "explain": "Intercompany profit on land stays eliminated for as long as the land remains in the group — there is no depreciation to bleed it back in. Because the sale was upstream, the elimination is also shared with the NCI."
  },
  {
    "id": "combos-28",
    "section": "combos",
    "topic": "Intercompany profit, next year",
    "difficulty": "medium",
    "q": "At the end of Year 1, Parent's inventory included goods bought from its wholly owned subsidiary that carried $5,000 of intercompany profit. Parent sold all of them to outside customers in Year 2. Because of these goods, how does Year 2 consolidated net income compare with the two companies' combined separate net income?",
    "choices": [
      "Consolidated income is $5,000 lower",
      "Consolidated income is $5,000 higher",
      "No difference, because Year 1's elimination already dealt with it",
      "No difference, because the $5,000 goes straight to retained earnings"
    ],
    "answer": 1,
    "explain": "The profit deferred at the end of Year 1 is **realized** in Year 2 when the goods leave the group, so the worksheet credits cost of goods sold $5,000 and charges beginning retained earnings. With a wholly owned subsidiary the full amount moves, whether the sale was upstream, as here, or downstream."
  },
  {
    "id": "combos-29",
    "section": "combos",
    "topic": "Consolidated RE, later years",
    "difficulty": "medium",
    "q": "Parent acquired 100% of Sub at book value, with no fair value adjustments, when Sub's retained earnings were $200,000, and carries Sub at cost. Two years later, Parent's retained earnings are $900,000 and Sub's are $350,000; the only intercompany transactions have been dividends. What is consolidated retained earnings?",
    "choices": [
      "$1,050,000",
      "$1,250,000",
      "$900,000",
      "$1,100,000"
    ],
    "answer": 0,
    "explain": "Consolidated retained earnings is Parent's balance plus Sub's **increase since acquisition**: $900,000 + ($350,000 − $200,000) = **$1,050,000**. Sub's $200,000 at acquisition was bought, not earned by the group, and dividends need no adjustment — what Sub paid Parent is already in Parent's balance and already out of Sub's."
  },
  {
    "id": "special-1",
    "section": "special",
    "topic": "Change in principle",
    "difficulty": "easy",
    "q": "A voluntary change in accounting principle — say average cost to FIFO — is applied how?",
    "choices": [
      "Retrospectively, adjusting prior periods presented",
      "Prospectively from the date of change",
      "By cumulative catch-up in current income",
      "Only by restating the current year"
    ],
    "answer": 0,
    "explain": "Changes in **principle** go back in time: restate comparatives and adjust beginning retained earnings of the earliest period shown. The cumulative-effect-in-income answer describes the long-dead pre-2005 model."
  },
  {
    "id": "special-2",
    "section": "special",
    "topic": "Allowance percentage change",
    "difficulty": "easy",
    "q": "Based on new data, a company raises its uncollectible-accounts percentage from 2% to 4%. This change is applied how?",
    "choices": [
      "Prospectively, in current and future periods",
      "Retrospectively to all periods presented",
      "As a cumulative catch-up in beginning retained earnings, without restating prior periods",
      "By disclosure only, with no measurement change"
    ],
    "answer": 0,
    "explain": "Estimates change as information changes — no rewriting history. A change in **estimate** hits the current period and the future only. Voluntary principle changes are generally applied retrospectively and errors are restated; estimates are neither."
  },
  {
    "id": "special-3",
    "section": "special",
    "topic": "Depreciation method change",
    "difficulty": "medium",
    "q": "A company switches from double-declining-balance to straight-line depreciation for existing assets. This is accounted for as what?",
    "choices": [
      "A change in estimate, applied prospectively",
      "A change in principle, applied retrospectively",
      "An error correction, net of tax",
      "A change in reporting entity"
    ],
    "answer": 0,
    "explain": "A depreciation method change is a change in estimate **effected by** a change in principle — and the estimate treatment wins: **prospective**. Remaining book value depreciates under the new method over the remaining life. The retrospective answer is the most-picked wrong choice."
  },
  {
    "id": "special-4",
    "section": "special",
    "topic": "Understated prior-year depreciation",
    "difficulty": "medium",
    "q": "After issuing its statements, a company finds last year’s depreciation was materially understated. The correction is reported how?",
    "choices": [
      "Restate the prior statements and adjust beginning retained earnings, net of tax",
      "Record extra depreciation in the current year",
      "Adjust the current year through other comprehensive income",
      "Disclose the error without changing any amounts"
    ],
    "answer": 0,
    "explain": "A material **error** in issued statements is a prior-period adjustment: restate the comparatives, so last year's income absorbs the expense and this year's **beginning retained earnings** reflects the correction, **net of tax**. Catching it up through current income would put last year's expense in this year's results."
  },
  {
    "id": "special-5",
    "section": "special",
    "topic": "Inventory error carryforward",
    "difficulty": "medium",
    "q": "Ending inventory for Year 1 was overstated and never corrected; Year 2 ending inventory is correct. After Year 2's books are closed, retained earnings is what?",
    "choices": [
      "Correctly stated",
      "Overstated by the full error",
      "Understated by the full error",
      "Overstated by twice the error"
    ],
    "answer": 0,
    "explain": "Year 1 income was overstated; Year 2’s beginning inventory carried the same error and **understated** Year 2 income by the same amount. After two years the error **counterbalances** — retained earnings is right even though both years’ incomes were wrong. That needs Year 2's own ending inventory to be right; a fresh error there would carry into Year 3."
  },
  {
    "id": "special-6",
    "section": "special",
    "topic": "Adopting LIFO",
    "difficulty": "easy",
    "q": "A company adopts LIFO but cannot reconstruct prior-year layers. The change is applied how?",
    "choices": [
      "Prospectively, from the beginning of the year of change",
      "Retrospectively using estimated layers",
      "It is prohibited without full restatement",
      "Through other comprehensive income"
    ],
    "answer": 0,
    "explain": "When retrospective application is **impracticable** — the usual state of affairs for LIFO layers — the change is applied **prospectively**. This is the standard exception to the retrospective rule for principle changes."
  },
  {
    "id": "special-7",
    "section": "special",
    "topic": "Consolidation group change",
    "difficulty": "medium",
    "q": "A change in the group of companies included in consolidated statements qualifies as a change in reporting entity (it is not a business combination). How is it reported?",
    "choices": [
      "Retrospectively, for all periods presented",
      "Prospectively from the change",
      "As a current-period gain or loss",
      "By footnote disclosure only"
    ],
    "answer": 0,
    "explain": "A change in **reporting entity** restates every period shown, so the statements always describe the same economic entity. It travels with principle changes on the retrospective side of the ledger."
  },
  {
    "id": "special-23",
    "section": "special",
    "topic": "Second-quarter tax expense",
    "difficulty": "medium",
    "q": "A calendar-year company reported first-quarter pretax income of $200,000 and, using an estimated annual effective tax rate of 30%, recognized $60,000 of income tax expense in the first quarter. Second-quarter pretax income is $300,000, and the company now estimates its annual effective rate at 28%. What is second-quarter income tax expense?",
    "choices": [
      "$90,000",
      "$84,000",
      "$80,000",
      "$140,000"
    ],
    "answer": 2,
    "explain": "Interim tax is cumulative: apply the current estimated annual rate to **year-to-date** income and subtract what has already been recognized: $500,000 × 28% − $60,000 = **$80,000**. Taxing the quarter alone at 28% ($84,000) misses the catch-up on first-quarter income now taxed at the lower rate, and $140,000 is the year-to-date total, not the quarter's charge."
  },
  {
    "id": "special-24",
    "section": "special",
    "topic": "Interim inventory decline",
    "difficulty": "medium",
    "q": "In its first quarter, a calendar-year company wrote inventory down by $30,000 for a decline in net realizable value that it did not expect to reverse. During the third quarter, the net realizable value of that same inventory recovers by $45,000; there was no change in the second quarter. What does the company report in the third quarter?",
    "choices": [
      "A $45,000 gain",
      "A $30,000 gain",
      "A $15,000 gain",
      "No gain, because inventory write-downs are not reversed"
    ],
    "answer": 1,
    "explain": "Within the same fiscal year, a later interim recovery of a recognized net realizable value decline is recognized as a gain, but only **up to the loss previously taken**: $30,000, not the full $45,000. The no-reversal rule is the annual ASC 330 rule; interim periods are integral parts of the year, and the year as a whole shows no loss on this inventory."
  },
  {
    "id": "special-25",
    "section": "special",
    "topic": "Seasonal business",
    "difficulty": "easy",
    "q": "A ski resort earns about 70% of its annual revenue in the first calendar quarter. How does it report revenue in its first-quarter interim statements?",
    "choices": [
      "Deferred and spread evenly across the four quarters",
      "Recognized only up to one-fourth of budgeted annual revenue",
      "Deferred until the fourth quarter, when annual results are known",
      "As earned during the quarter, with the seasonal pattern disclosed"
    ],
    "answer": 3,
    "explain": "Revenue is recognized as earned in the interim period on the same basis as for the full year; seasonality is handled by **disclosure** (and, if the company chooses, twelve-month-to-date data), never by deferring or smoothing revenue. Costs that benefit the whole year may be allocated among quarters, but revenue is not."
  },
  {
    "id": "special-26",
    "section": "special",
    "topic": "Fire after year end",
    "difficulty": "easy",
    "q": "On January 20, Year 2, a fire destroys a calendar-year company's main warehouse, causing a $2,000,000 uninsured loss. The Year 1 financial statements are available to be issued on March 1, Year 2. How is the fire reflected in the Year 1 statements?",
    "choices": [
      "Note disclosure of the event and the estimated loss; no adjustment",
      "A $2,000,000 loss accrued in Year 1 and disclosed in the notes",
      "Not reported, because it occurred after the balance sheet date",
      "A $2,000,000 write-down of the warehouse at December 31, Year 1"
    ],
    "answer": 0,
    "explain": "The warehouse was intact on December 31, so the fire is a **nonrecognized** subsequent event: no adjustment, but the notes disclose the nature of the event and an estimate of its financial effect (or state that one cannot be made). Adjustment is reserved for events that give evidence about conditions that already existed at the balance sheet date, such as a long-troubled customer's bankruptcy."
  },
  {
    "id": "special-21",
    "section": "special",
    "topic": "Revised useful life",
    "difficulty": "easy",
    "q": "Equipment costing $100,000, with no salvage value, has been depreciated straight-line over a 10-year life for four years. At the start of Year 5, the company revises the total useful life to 8 years. What is Year 5 depreciation?",
    "choices": [
      "$15,000",
      "$12,500",
      "$22,500",
      "$10,000"
    ],
    "answer": 0,
    "explain": "A revised useful life is a change in estimate, applied **prospectively**: spread the $60,000 carrying amount over the 4 remaining years, $15,000 a year. $22,500 books a $10,000 catch-up for past years, and $12,500 applies the new life to the original cost as if it had always applied."
  },
  {
    "id": "special-13",
    "section": "special",
    "topic": "Interim income taxes",
    "difficulty": "medium",
    "q": "Quarterly income tax expense is computed using what rate?",
    "choices": [
      "The estimated annual effective rate applied to year-to-date income",
      "The statutory rate applied to each quarter separately",
      "The prior year’s effective rate",
      "The actual effective rate of each quarter, computed as a discrete period"
    ],
    "answer": 0,
    "explain": "Interim reporting treats each quarter as part of the year: estimate the **annual** effective rate, apply it to **year-to-date** income, and subtract tax already booked. Re-estimates adjust the current quarter, not the past ones."
  },
  {
    "id": "special-14",
    "section": "special",
    "topic": "Interim view",
    "difficulty": "medium",
    "q": "A company pays for its once-a-year plant overhaul in the first quarter, and the work benefits the whole year. Under the integral view, the cost is reported how?",
    "choices": [
      "Recognized ratably in each quarter of the year",
      "Expensed entirely in the first quarter",
      "Deferred to the fourth quarter",
      "Capitalized and depreciated over the plant’s remaining useful life"
    ],
    "answer": 0,
    "explain": "U.S. GAAP treats interim periods as **integral** parts of the year, so a cost clearly benefiting the full year is **allocated** among quarters. Expensing it all in Q1 is the discrete-view answer — the losing theory."
  },
  {
    "id": "special-27",
    "section": "special",
    "topic": "Going-concern evaluation",
    "difficulty": "medium",
    "q": "A calendar-year company that is not an SEC filer will issue its Year 1 financial statements on March 15, Year 2, which is also the date they are available to be issued. Through what date must management evaluate whether substantial doubt exists about the company's ability to continue as a going concern?",
    "choices": [
      "December 31, Year 2",
      "March 15, Year 3",
      "March 15, Year 2",
      "December 31, Year 3"
    ],
    "answer": 1,
    "explain": "ASC 205-40 looks forward **one year from the date the statements are issued** (or are available to be issued, for entities that do not file with the SEC) — here March 15, Year 3. One year from the balance sheet date is the IFRS minimum, not the GAAP rule, and the issuance date itself only bounds the subsequent-events review."
  },
  {
    "id": "special-28",
    "section": "special",
    "topic": "Inventory method change",
    "difficulty": "medium",
    "q": "At the start of Year 3, a company changes from the weighted-average method to FIFO and presents Year 2 and Year 3 in comparative statements. Under FIFO, cumulative pretax income for all years before Year 2 would have been $50,000 higher, and Year 2 pretax income would have been $20,000 higher. The tax rate is 25%. By how much is retained earnings at the beginning of Year 2 adjusted in the restated statements?",
    "choices": [
      "$52,500 increase",
      "$50,000 increase",
      "$37,500 increase",
      "$15,000 increase"
    ],
    "answer": 2,
    "explain": "Retrospective application puts the cumulative effect of all periods **before the earliest period presented** into that period's opening retained earnings, net of tax: $50,000 × (1 − 25%) = **$37,500**. Year 2's $20,000 is not part of the opening adjustment — Year 2 is presented, so its own income statement is restated instead."
  },
  {
    "id": "special-22",
    "section": "special",
    "topic": "Prior-year error",
    "difficulty": "medium",
    "q": "After issuing its Year 1 statements, a company discovers a material error: it failed to record $40,000 of depreciation in Year 1. Its tax rate is 25%, and it presents single-year financial statements. How is the error reported in the Year 2 statements?",
    "choices": [
      "A $30,000 correction loss in Year 2 net income",
      "Beginning retained earnings reduced by $40,000",
      "Year 2 depreciation expense increased by $40,000",
      "Beginning retained earnings reduced by $30,000"
    ],
    "answer": 3,
    "explain": "A material prior-period error is a **prior-period adjustment** to beginning retained earnings, net of tax: $40,000 × (1 − 25%) = **$30,000**. Running it through Year 2 income, gross or net, puts last year's expense in this year's results."
  },
  {
    "id": "special-18",
    "section": "special",
    "topic": "Interim LIFO liquidation",
    "difficulty": "medium",
    "q": "A LIFO layer is liquidated at an interim date but is expected to be replaced by year end. How is interim cost of sales measured?",
    "choices": [
      "Using the expected replacement cost of the liquidated layer",
      "Using the old LIFO layer's historical cost",
      "Using FIFO for the interim period only",
      "The liquidation is ignored until the annual statements"
    ],
    "answer": 0,
    "explain": "Interim reporting treats the year as an integral whole: a temporary liquidation expected to be restored is charged at expected replacement cost, so the interim margin is not distorted by an old layer that will come back."
  },
  {
    "id": "govnfp-1",
    "section": "govnfp",
    "topic": "Governmental fund types",
    "difficulty": "easy",
    "q": "Which governmental fund accounts for resources accumulated to pay principal and interest on general long-term debt?",
    "choices": [
      "General fund",
      "Capital projects fund",
      "Debt service fund",
      "Permanent fund"
    ],
    "answer": 2,
    "explain": "The debt service fund accumulates resources for and pays general long-term debt principal and interest. Capital projects funds handle construction and acquisition, not debt payments."
  },
  {
    "id": "govnfp-2",
    "section": "govnfp",
    "topic": "Endowment gifts",
    "difficulty": "medium",
    "q": "A city receives a gift whose principal must remain intact forever; the earnings must support maintenance of the city's public park. Which fund reports the gift?",
    "choices": [
      "Special revenue fund",
      "Permanent fund",
      "Private-purpose trust fund",
      "General fund"
    ],
    "answer": 1,
    "explain": "Permanent funds report nonexpendable principal whose earnings benefit the government's own programs. A private-purpose trust applies only when earnings benefit outside parties."
  },
  {
    "id": "govnfp-3",
    "section": "govnfp",
    "topic": "Modified accrual",
    "difficulty": "easy",
    "q": "Under the modified accrual basis used by governmental funds, revenues are recognized when they are...",
    "choices": [
      "Earned and realized",
      "Collected in cash",
      "Levied or billed",
      "Measurable and available"
    ],
    "answer": 3,
    "explain": "Modified accrual recognizes revenue when it is measurable and available to finance current-period expenditures — not simply when earned, billed, or collected."
  },
  {
    "id": "govnfp-21",
    "section": "govnfp",
    "topic": "Hotel tax fund",
    "difficulty": "easy",
    "q": "A city collects a hotel occupancy tax that state law restricts to promoting tourism. In which fund does the city account for these tax receipts and the tourism spending they finance?",
    "choices": [
      "General fund",
      "Enterprise fund",
      "Permanent fund",
      "Special revenue fund"
    ],
    "answer": 3,
    "explain": "A special revenue fund accounts for specific revenue sources that are restricted or committed to spending for a specified purpose other than debt service or capital projects. The general fund takes everything not required elsewhere, an enterprise fund reports fee-for-service business activities, and a permanent fund applies only where principal must be kept intact."
  },
  {
    "id": "govnfp-5",
    "section": "govnfp",
    "topic": "Government-wide basis",
    "difficulty": "easy",
    "q": "Government-wide financial statements are prepared using which measurement focus and basis of accounting?",
    "choices": [
      "Economic resources, full accrual",
      "Current financial resources, modified accrual",
      "Economic resources, modified accrual",
      "Current financial resources, cash basis"
    ],
    "answer": 0,
    "explain": "Government-wide statements use the economic resources focus and full accrual basis, like a business. Modified accrual applies only to governmental fund statements."
  },
  {
    "id": "govnfp-23",
    "section": "govnfp",
    "topic": "Fire truck purchase",
    "difficulty": "easy",
    "q": "A city's general fund pays $400,000 cash for a new fire truck with a 10-year life. How is the purchase reported in the governmental fund statements and in the government-wide statements?",
    "choices": [
      "Fund: a capital asset that is depreciated; government-wide: an expense of $400,000",
      "Fund: an expenditure of $400,000; government-wide: a capital asset that is depreciated",
      "Fund: an expenditure of $400,000; government-wide: an expense of $400,000",
      "Fund: a capital asset that is depreciated; government-wide: the same capital asset"
    ],
    "answer": 1,
    "explain": "Governmental funds use the current financial resources measurement focus, so spending cash on a truck is an **expenditure**; the government-wide statements use the economic resources focus and full accrual, so the same truck is a capital asset depreciated over 10 years. That difference is one of the standard items in the reconciliation between the two."
  },
  {
    "id": "govnfp-7",
    "section": "govnfp",
    "topic": "Proprietary funds",
    "difficulty": "easy",
    "q": "A city water utility charges outside customers fees intended to cover its costs. In which fund is it reported?",
    "choices": [
      "General fund",
      "Special revenue fund",
      "Internal service fund",
      "Enterprise fund"
    ],
    "answer": 3,
    "explain": "Enterprise funds report business-type activities that serve the public for a fee. Internal service funds are the trap — they serve other departments of the government, not outside customers."
  },
  {
    "id": "govnfp-8",
    "section": "govnfp",
    "topic": "Fiduciary funds",
    "difficulty": "medium",
    "q": "Which statement about fiduciary funds, such as a pension trust fund, is correct?",
    "choices": [
      "They present a statement of cash flows like proprietary funds",
      "They use the modified accrual basis",
      "They are excluded from government-wide statements",
      "Their resources may fund general city programs"
    ],
    "answer": 2,
    "explain": "Fiduciary resources are held for the benefit of others and cannot finance the government's own programs, so they are reported only in separate fiduciary fund statements on the accrual basis. Fiduciary funds present no cash flow statement."
  },
  {
    "id": "govnfp-24",
    "section": "govnfp",
    "topic": "Central motor pool",
    "difficulty": "easy",
    "q": "A city runs a central motor pool that services vehicles for its police, fire and public works departments and bills each department enough to recover its costs. In which fund is the motor pool reported?",
    "choices": [
      "Internal service fund",
      "Enterprise fund",
      "General fund",
      "Special revenue fund"
    ],
    "answer": 0,
    "explain": "A proprietary activity whose customers are **other departments of the same government** is an **internal service fund**; it uses the economic resources focus and full accrual like a business. An enterprise fund serves outside customers, the general fund is for activities not required elsewhere, and a special revenue fund is for restricted or committed revenue sources, not cost-reimbursement services."
  },
  {
    "id": "govnfp-25",
    "section": "govnfp",
    "topic": "Quasi-endowment",
    "difficulty": "easy",
    "q": "A not-for-profit's board votes to set aside $500,000 of unrestricted cash as a quasi-endowment, to be invested with only the earnings spent on programs. How is the $500,000 classified on the statement of financial position?",
    "choices": [
      "Net assets with donor restrictions",
      "Net assets without donor restrictions",
      "Board-designated net assets, presented as a separate class",
      "A liability, because the board has committed the cash to a specific use"
    ],
    "answer": 1,
    "explain": "Only a **donor** (or a law) can restrict net assets. A board designation is an internal decision the board can reverse, so the quasi-endowment stays in net assets without donor restrictions, with the designation shown on the face of the statement or in the notes. There is no third class, and permanently restricted net assets left GAAP with ASU 2016-14."
  },
  {
    "id": "govnfp-11",
    "section": "govnfp",
    "topic": "NFP net assets",
    "difficulty": "easy",
    "q": "Under current GAAP, a not-for-profit's net assets are presented in which classes?",
    "choices": [
      "Unrestricted, temporarily, and permanently restricted",
      "Restricted and board-designated",
      "Operating and nonoperating",
      "With donor restrictions and without donor restrictions"
    ],
    "answer": 3,
    "explain": "ASU 2016-14 replaced the old three-class model with two classes: with donor restrictions and without donor restrictions. Board designations stay within the without-restrictions class."
  },
  {
    "id": "govnfp-12",
    "section": "govnfp",
    "topic": "Contribution vs exchange",
    "difficulty": "medium",
    "q": "A business pays an NFP $10,000 and receives event advertising of commensurate value in return. How does the NFP recognize the receipt?",
    "choices": [
      "Exchange revenue under ASC 606",
      "Contribution with donor restrictions",
      "Conditional contribution",
      "Agency transaction liability"
    ],
    "answer": 0,
    "explain": "Because the payer receives commensurate value in return, this is a reciprocal exchange accounted for under ASC 606, not a contribution. Contributions are nonreciprocal transfers."
  },
  {
    "id": "govnfp-13",
    "section": "govnfp",
    "topic": "Donated services",
    "difficulty": "medium",
    "q": "Which donated service should a not-for-profit recognize as contribution revenue?",
    "choices": [
      "Volunteers answering phones at events",
      "A CPA auditing the NFP's statements for free",
      "Members promising to volunteer next year",
      "Students stuffing fundraising envelopes"
    ],
    "answer": 1,
    "explain": "Donated services are recognized only if they create or enhance nonfinancial assets or require specialized skills the NFP would otherwise purchase. Free audit work by a CPA meets the specialized-skills test."
  },
  {
    "id": "govnfp-14",
    "section": "govnfp",
    "topic": "Restriction release",
    "difficulty": "easy",
    "q": "An NFP received a $40,000 gift restricted to buying equipment and this year bought and placed in service $25,000 of equipment. How much is released from restriction?",
    "choices": [
      "$40,000",
      "$0",
      "$25,000",
      "$15,000"
    ],
    "answer": 2,
    "explain": "Restrictions are released as they are satisfied, so $25,000 is reclassified from net assets with donor restrictions to without donor restrictions; the remaining $15,000 stays restricted."
  },
  {
    "id": "govnfp-26",
    "section": "govnfp",
    "topic": "Multi-year pledge",
    "difficulty": "medium",
    "q": "In December Year 1, a donor gives a not-for-profit a signed, unconditional promise to pay $100,000 in Year 3, with no stipulation on how the money is to be used. How does the NFP report the promise in its Year 1 statements?",
    "choices": [
      "Nothing in Year 1; revenue is recognized when the cash is received in Year 3",
      "A receivable and a refundable advance liability until the payment is made",
      "A receivable and contribution revenue in Year 1, increasing net assets without donor restrictions",
      "A receivable and contribution revenue in Year 1, increasing net assets with donor restrictions"
    ],
    "answer": 3,
    "explain": "An unconditional promise is recognized when it is made, as a receivable and revenue. Because payment is due in a future period, the gift carries an **implied time restriction**, so it lands in net assets with donor restrictions even though the donor named no purpose. A refundable advance is recorded only for a *conditional* promise whose cash has already arrived."
  },
  {
    "id": "govnfp-22",
    "section": "govnfp",
    "topic": "Taxes collected for others",
    "difficulty": "easy",
    "q": "A county collects property taxes on behalf of the school districts within its borders and remits the collections to them, keeping no share of the money and exercising no discretion over it. Which fund does the county use to report these collections?",
    "choices": [
      "Custodial fund",
      "Private-purpose trust fund",
      "Special revenue fund",
      "Internal service fund"
    ],
    "answer": 0,
    "explain": "Resources a government holds for other governments or parties in a purely custodial capacity are fiduciary and go in a **custodial fund** (the successor to the old agency fund). A private-purpose trust fund requires a trust arrangement, and the collections are never the county's own revenue, so no governmental or proprietary fund applies."
  },
  {
    "id": "govnfp-27",
    "section": "govnfp",
    "topic": "Donated groceries",
    "difficulty": "medium",
    "q": "A food bank receives donated groceries with a fair value of $800,000 and distributes them to clients. Under current GAAP, how are these contributed nonfinancial assets presented in the statement of activities?",
    "choices": [
      "As a separate line item, apart from contributions of cash and other financial assets",
      "Combined with cash contributions in a single contributions line, with the split in the notes",
      "Netted against program expenses, since the goods were distributed rather than sold",
      "Disclosed in the notes only, with no revenue recognized for goods that are given away"
    ],
    "answer": 0,
    "explain": "ASU 2020-07 requires contributed nonfinancial assets — goods, services, use of facilities — to be shown on their **own line** in the statement of activities, apart from cash and financial-asset contributions, with note disclosure by category of whether they were used or monetized and how they were valued. Distributing the groceries is a program expense; it never nets against the contribution."
  },
  {
    "id": "govnfp-28",
    "section": "govnfp",
    "topic": "Endowment investment return",
    "difficulty": "medium",
    "q": "During the year, a not-for-profit's endowment earned $200,000 of dividends and interest and had $50,000 of unrealized gains. The NFP paid $30,000 in fees to outside investment managers and incurred $10,000 of salary cost for an employee whose job is directly managing the portfolio. What investment return does it report on the statement of activities?",
    "choices": [
      "$250,000",
      "$220,000",
      "$210,000",
      "$160,000"
    ],
    "answer": 2,
    "explain": "NFPs present investment return **net** of both external investment expenses and direct internal investment expenses: $200,000 + $50,000 − $30,000 − $10,000 = **$210,000**. $220,000 nets only the outside fees, and $250,000 shows the return gross with the costs buried in management and general — a presentation ASU 2016-14 ended. $160,000 leaves out the unrealized gains, which are part of return for an NFP."
  },
  {
    "id": "govnfp-19",
    "section": "govnfp",
    "topic": "Matching-fund promises",
    "difficulty": "medium",
    "q": "A donor promises a not-for-profit $1 million if it raises $500,000 in matching funds it has not yet raised. What does the NFP record?",
    "choices": [
      "Nothing yet — recognition waits until the match is achieved",
      "Contribution revenue with a donor restriction",
      "A receivable and refundable advance liability",
      "Half the promise, matching the funds raised so far"
    ],
    "answer": 0,
    "explain": "A measurable barrier plus a right of release from the promise makes the gift conditional, and conditional promises are not recognized until the condition is substantially met. Once the match is raised, the full promise becomes revenue, restricted or not as the donor specifies."
  },
  {
    "id": "govnfp-20",
    "section": "govnfp",
    "topic": "Functional expense reporting",
    "difficulty": "medium",
    "q": "What expense analysis must every not-for-profit present?",
    "choices": [
      "One analysis disaggregating each natural expense by function",
      "Natural expenses on the statement of activities, with functional totals in the notes",
      "Functional expenses only, unless the NFP is a voluntary health and welfare entity",
      "A cost-per-beneficiary schedule for each program"
    ],
    "answer": 0,
    "explain": "All NFPs report the function-by-nature matrix — in the statement of activities, a separate statement, or the notes — splitting program services from supporting activities such as management and fundraising."
  },
  {
    "id": "govnfp-29",
    "section": "govnfp",
    "topic": "Building gift cash flows",
    "difficulty": "easy",
    "q": "A museum receives a $2,000,000 cash gift that the donor restricts to constructing a new wing, and during the same year it pays $1,200,000 to the contractor building the wing. How are the gift and the construction payments classified in the museum's statement of cash flows?",
    "choices": [
      "Gift: operating activity; construction payments: investing activity",
      "Gift: financing activity; construction payments: financing activity",
      "Gift: operating activity; construction payments: operating activity",
      "Gift: financing activity; construction payments: investing activity"
    ],
    "answer": 3,
    "explain": "Contributions (and investment income) that a donor restricts to acquiring, constructing or improving long-lived assets, or to a donor-restricted endowment, are **financing** inflows for a not-for-profit; paying the contractor is an **investing** outflow, like any capital expenditure. Only contributions free of such long-term restrictions are operating receipts, so the corporate reflex of putting every receipt in operating is the trap."
  },
  {
    "id": "govnfp-30",
    "section": "govnfp",
    "topic": "NFP cash flow statement",
    "difficulty": "medium",
    "q": "Which statement about a not-for-profit's statement of cash flows is correct?",
    "choices": [
      "Investment income the donor restricts to a permanent endowment is an operating inflow",
      "An NFP using the direct method need not also present a reconciliation of the change in net assets to operating cash flows",
      "Cash collected in an agency transaction and remitted to the beneficiary is left out of the statement",
      "An NFP must present operating activities under the direct method, as a government's proprietary funds must"
    ],
    "answer": 1,
    "explain": "Every NFP presents a statement of cash flows and may use either method (only GASB mandates the direct method, for proprietary funds); since ASU 2016-14, one using the direct method is **no longer required** to add the indirect reconciliation. Investment income is operating only if it is not donor-restricted for long-term purposes (restricted income is a financing inflow), and cash collected and remitted in agency transactions runs through operating activities — gross under the direct method, gross or net under the indirect method."
  },
  {
    "id": "ratios-1",
    "section": "ratios",
    "topic": "Current ratio",
    "difficulty": "easy",
    "q": "At year-end a company reports cash $20,000, accounts receivable $40,000, inventory $50,000, prepaid insurance $10,000, and equipment $80,000. Its liabilities are accounts payable $40,000, accrued wages $10,000, and a note payable due in five years of $70,000. Using year-end balances, what is the current ratio?",
    "choices": [
      "4.0",
      "2.4",
      "1.0",
      "1.2"
    ],
    "answer": 1,
    "explain": "Current ratio = current assets ÷ current liabilities = ($20,000 + $40,000 + $50,000 + $10,000) ÷ ($40,000 + $10,000) = $120,000 ÷ $50,000 = **2.4**. Equipment and the five-year note are noncurrent: adding equipment gives 4.0, adding the note to the denominator gives 1.0, and 1.2 is the quick ratio."
  },
  {
    "id": "ratios-2",
    "section": "ratios",
    "topic": "Quick ratio",
    "difficulty": "medium",
    "q": "A company has cash $15,000, marketable securities $10,000, net accounts receivable $25,000, inventory $30,000, prepaid expenses $5,000, and current liabilities $50,000. Using year-end balances, what is the quick (acid-test) ratio?",
    "choices": [
      "1.6",
      "1.7",
      "0.8",
      "1.0"
    ],
    "answer": 3,
    "explain": "Quick assets exclude inventory and prepaids: ($15,000 + $10,000 + $25,000) ÷ $50,000 = **1.0**. Including inventory gives 1.6 and including prepaids as well gives the current ratio of 1.7; dropping the marketable securities, which are quick assets, gives 0.8."
  },
  {
    "id": "ratios-3",
    "section": "ratios",
    "topic": "Current ratio effects",
    "difficulty": "medium",
    "q": "A company’s current ratio is 2.0. Which transaction will increase its current ratio?",
    "choices": [
      "Collecting an account receivable in cash",
      "Purchasing inventory on account",
      "Paying an account payable with cash",
      "Borrowing cash on a 90-day note"
    ],
    "answer": 2,
    "explain": "When the ratio is already above 1.0, reducing current assets and current liabilities by equal amounts pushes it higher: $200 ÷ $100 = 2.0 becomes $180 ÷ $80 = 2.25. Collecting a receivable swaps one current asset for another (no change), while buying inventory on account or borrowing short-term adds equal amounts to both sides and pulls the ratio toward 1.0."
  },
  {
    "id": "ratios-4",
    "section": "ratios",
    "topic": "Lender’s ratio choice",
    "difficulty": "easy",
    "q": "A bank evaluating a 10-year term loan wants to assess the borrower’s long-term solvency — its ability to carry its obligations over many years. Which ratio addresses this most directly?",
    "choices": [
      "Debt-to-equity ratio",
      "Current ratio",
      "Inventory turnover",
      "Gross margin percentage"
    ],
    "answer": 0,
    "explain": "Debt-to-equity (total liabilities ÷ total stockholders’ equity) is a solvency ratio: it shows how much of the capital structure creditors have supplied and how much equity cushion protects them. The current ratio measures only short-term liquidity, inventory turnover is an activity ratio, and gross margin measures profitability."
  },
  {
    "id": "ratios-5",
    "section": "ratios",
    "topic": "Times interest earned",
    "difficulty": "medium",
    "q": "A company reports net income of $60,000 after income tax expense of $20,000 and interest expense of $20,000. What is its times interest earned ratio?",
    "choices": [
      "4.0",
      "3.0",
      "5.0",
      "2.5"
    ],
    "answer": 2,
    "explain": "Times interest earned = earnings before interest and taxes ÷ interest expense = ($60,000 + $20,000 + $20,000) ÷ $20,000 = **5.0**. Adding back only interest gives 4.0 and using net income alone gives 3.0; both understate the earnings available to cover interest because taxes are computed after interest is deducted; dividing by interest plus taxes gives 2.5."
  },
  {
    "id": "ratios-6",
    "section": "ratios",
    "topic": "Gross margin",
    "difficulty": "easy",
    "q": "Gross sales were $600,000, sales returns and allowances $100,000, cost of goods sold $300,000, operating expenses $120,000, and net income $60,000. What is the gross margin percentage?",
    "choices": [
      "50%",
      "12%",
      "16%",
      "40%"
    ],
    "answer": 3,
    "explain": "Gross margin = (net sales − cost of goods sold) ÷ net sales = ($500,000 − $300,000) ÷ $500,000 = **40%**. Using gross sales of $600,000 gives 50%; 12% is the net profit margin and 16% is the operating margin."
  },
  {
    "id": "ratios-7",
    "section": "ratios",
    "topic": "Return on common equity",
    "difficulty": "medium",
    "q": "Net income was $66,000 and preferred dividends of $6,000 were declared. Common stockholders’ equity was $300,000 at the beginning of the year and $500,000 at the end. Using average common equity, what is the return on common stockholders’ equity?",
    "choices": [
      "15%",
      "12%",
      "16.5%",
      "13.2%"
    ],
    "answer": 0,
    "explain": "Return on common equity = (net income − preferred dividends) ÷ average common equity = ($66,000 − $6,000) ÷ (($300,000 + $500,000) ÷ 2) = $60,000 ÷ $400,000 = **15%**. Using ending equity gives 12%, and forgetting to remove the preferred dividends gives 16.5%."
  },
  {
    "id": "ratios-8",
    "section": "ratios",
    "topic": "Days in inventory",
    "difficulty": "medium",
    "q": "Cost of goods sold was $300,000 and net sales were $500,000. Inventory was $50,000 at the beginning of the year and $70,000 at the end. Using average inventory and a 365-day year, what is the number of days in inventory?",
    "choices": [
      "44 days",
      "73 days",
      "85 days",
      "51 days"
    ],
    "answer": 1,
    "explain": "Inventory turnover = cost of goods sold ÷ average inventory = $300,000 ÷ $60,000 = 5.0 times, so days in inventory = 365 ÷ 5.0 = **73 days**. Using net sales instead of COGS gives 8.3 turns (44 days) because inventory is carried at cost, and using ending inventory of $70,000 gives 4.3 turns (85 days)."
  },
  {
    "id": "ratios-9",
    "section": "ratios",
    "topic": "Days sales outstanding",
    "difficulty": "medium",
    "q": "Total sales for the year were $1,095,000, of which $365,000 were cash sales. Accounts receivable was $50,000 at the beginning of the year and $70,000 at the end. Using average receivables and a 365-day year, what is days sales outstanding?",
    "choices": [
      "35 days",
      "20 days",
      "25 days",
      "30 days"
    ],
    "answer": 3,
    "explain": "Net credit sales are $1,095,000 − $365,000 = $730,000 and average receivables are ($50,000 + $70,000) ÷ 2 = $60,000, so days sales outstanding = $60,000 ÷ $730,000 × 365 = **30 days** exactly (turnover is 12.17 times). Cash sales never pass through receivables, so using total sales understates the result (20 days); using ending receivables gives 35 days."
  },
  {
    "id": "ratios-10",
    "section": "ratios",
    "topic": "Price-earnings ratio",
    "difficulty": "medium",
    "q": "Net income was $500,000 and preferred dividends were $50,000. Weighted-average common shares outstanding were 150,000, and 180,000 common shares were outstanding at year-end. The stock trades at $30 per share. What is the price-earnings ratio?",
    "choices": [
      "9.0",
      "10.0",
      "12.0",
      "10.8"
    ],
    "answer": 1,
    "explain": "EPS = (net income − preferred dividends) ÷ weighted-average common shares = ($500,000 − $50,000) ÷ 150,000 = $3.00, so P/E = $30 ÷ $3.00 = **10.0**. Ignoring the preferred dividends gives EPS of $3.33 (P/E 9.0); using year-end shares instead of the weighted average gives $2.50 (P/E 12.0)."
  },
  {
    "id": "ratios-11",
    "section": "ratios",
    "topic": "Budget variances",
    "difficulty": "easy",
    "q": "A company budgeted revenue of $200,000 and expenses of $150,000 for the year. Actual revenue was $220,000 and actual expenses were $158,000. How should the budget-versus-actual variances be described?",
    "choices": [
      "Revenue $20,000 favorable; expenses $8,000 favorable; net income $28,000 favorable",
      "Revenue $20,000 unfavorable; expenses $8,000 unfavorable; net income $28,000 unfavorable",
      "Revenue $20,000 favorable; expenses $8,000 unfavorable; net income $12,000 favorable",
      "Revenue $20,000 favorable; expenses $8,000 unfavorable; net income $12,000 unfavorable"
    ],
    "answer": 2,
    "explain": "Labels follow the effect on income: revenue above budget is favorable, expenses above budget are unfavorable, and the two net to actual income of $62,000 against budgeted $50,000 — a **$12,000 favorable** variance. Spending more than planned is not favorable just because it happened alongside higher revenue."
  },
  {
    "id": "ratios-12",
    "section": "ratios",
    "topic": "Income tax basis",
    "difficulty": "easy",
    "q": "A closely held company prepares its financial statements on the income tax basis of accounting. How does it report depreciation on its equipment?",
    "choices": [
      "Straight-line over the estimated useful life, less estimated salvage value",
      "Always expensing the full cost because cash was paid for the equipment",
      "No depreciation; the equipment is carried at cost until it is sold",
      "Using the methods and elections on its income tax return"
    ],
    "answer": 3,
    "explain": "The income tax basis is a special purpose framework that follows the entity's tax return, so depreciation uses the methods and elections on that return (MACRS, Section 179 or bonus depreciation) rather than GAAP estimates of useful life and salvage. Paying cash does not by itself decide that the cost is expensed; that is the pure cash basis."
  },
  {
    "id": "ratios-13",
    "section": "ratios",
    "topic": "OCBOA statement titles",
    "difficulty": "easy",
    "q": "A company issues financial statements on the cash basis. Which title would be inappropriate for one of its statements?",
    "choices": [
      "Balance sheet",
      "Statement of assets and liabilities arising from cash transactions",
      "Statement of revenue collected and expenses paid",
      "Balance sheet — cash basis"
    ],
    "answer": 0,
    "explain": "Unmodified GAAP titles — balance sheet, statement of financial position, income statement, statement of cash flows — are reserved for GAAP statements. Special purpose framework statements carry titles that signal the basis, such as 'statement of assets and liabilities arising from cash transactions' or 'statement of assets, liabilities, and equity — income tax basis'. A GAAP title with the basis as a modifier ('balance sheet — cash basis') is acceptable; the bare title is not."
  },
  {
    "id": "ratios-14",
    "section": "ratios",
    "topic": "Cash to accrual revenue",
    "difficulty": "medium",
    "q": "A company collected $500,000 from customers during the year. Accounts receivable rose from $40,000 to $55,000, and unearned revenue fell from $20,000 to $12,000. What is accrual-basis revenue for the year?",
    "choices": [
      "$477,000",
      "$507,000",
      "$523,000",
      "$493,000"
    ],
    "answer": 2,
    "explain": "Accrual revenue = cash collected + increase in receivables + decrease in unearned revenue = $500,000 + $15,000 + $8,000 = **$523,000**. Receivables grew because sales outran collections, and the drop in unearned revenue means cash collected earlier was earned this year; subtracting either amount reverses the adjustment."
  },
  {
    "id": "ratios-15",
    "section": "ratios",
    "topic": "Cash to accrual expenses",
    "difficulty": "medium",
    "q": "A company paid $200,000 in cash for operating expenses during the year. Prepaid expenses increased from $10,000 to $16,000, and accrued expenses payable decreased from $25,000 to $16,000. What is accrual-basis operating expense for the year?",
    "choices": [
      "$215,000",
      "$185,000",
      "$203,000",
      "$197,000"
    ],
    "answer": 1,
    "explain": "Accrual expense = cash paid − increase in prepaids − decrease in accrued liabilities = $200,000 − $6,000 − $9,000 = **$185,000**. Cash spent to build up prepaids buys future expense, and cash used to pay down last year’s accruals settles past expense, so both are backed out; adding them instead gives $215,000."
  },
  {
    "id": "ratios-16",
    "section": "ratios",
    "topic": "Identifying the framework",
    "difficulty": "medium",
    "q": "A company records revenue when collected and expenses when paid, but it capitalizes equipment and depreciates it straight-line over its estimated useful life — not over the MACRS recovery period used on its tax return — and reports its bank loan as a liability. On which basis are its statements prepared?",
    "choices": [
      "Modified cash basis",
      "Pure cash basis",
      "Income tax basis",
      "Accrual basis under GAAP"
    ],
    "answer": 0,
    "explain": "The modified cash basis starts from the cash basis and adds modifications with substantial support — most commonly capitalizing and depreciating long-lived assets and recording long-term debt. A pure cash basis would expense the equipment when paid and show no loan liability; GAAP would also accrue receivables and payables; and the income tax basis, which a cash-method taxpayer's statements can otherwise resemble, would depreciate over the MACRS recovery period used on the return rather than an estimated useful life."
  },
  {
    "id": "ratios-17",
    "section": "ratios",
    "topic": "Annual report deadlines",
    "difficulty": "medium",
    "q": "An accelerated filer with a December 31 fiscal year-end must file its Form 10-K within how many days after year-end?",
    "choices": [
      "60 days",
      "90 days",
      "75 days",
      "45 days"
    ],
    "answer": 2,
    "explain": "Form 10-K is due 60 days after year-end for large accelerated filers, **75 days** for accelerated filers, and 90 days for non-accelerated filers. Forty-five days is a Form 10-Q deadline (40 days for large accelerated and accelerated filers, 45 for everyone else)."
  },
  {
    "id": "ratios-18",
    "section": "ratios",
    "topic": "Quarterly reports",
    "difficulty": "easy",
    "q": "A calendar-year registrant reports quarterly on Form 10-Q. How many Forms 10-Q does it file each year, and what level of auditor involvement do the interim financial statements require?",
    "choices": [
      "Four; the interim statements are reviewed but not audited",
      "Three; the interim statements are reviewed but not audited",
      "Three; the interim statements are audited",
      "Four; the interim statements are audited"
    ],
    "answer": 1,
    "explain": "Form 10-Q covers the first **three** fiscal quarters only — the fourth quarter is folded into the audited Form 10-K — and its financial statements are unaudited, though SEC rules require the independent auditor to review them before filing. Deadlines are 40 days after quarter-end for large accelerated and accelerated filers and 45 days for others."
  },
  {
    "id": "ratios-19",
    "section": "ratios",
    "topic": "Executive departure",
    "difficulty": "easy",
    "q": "A registrant’s chief executive officer resigns unexpectedly in the middle of a quarter. Which SEC filing must report the departure, and by when?",
    "choices": [
      "Form 10-Q for the quarter, within 40 days of quarter-end",
      "Form 8-K, within 15 calendar days of the event",
      "Form 10-K for the year, within 60 days of year-end",
      "Form 8-K, within four business days of the event"
    ],
    "answer": 3,
    "explain": "Form 8-K is the current report for material events between periodic filings — departure of a principal officer or director, a change in auditor, a material acquisition or disposition, bankruptcy, or non-reliance on previously issued statements — and is generally due within **four business days** of the event. Waiting for the next 10-Q or 10-K is exactly what the 8-K regime exists to prevent."
  },
  {
    "id": "ratios-20",
    "section": "ratios",
    "topic": "10-K versus 10-Q contents",
    "difficulty": "medium",
    "q": "Which of these has its own required item in Form 10-K but not in Form 10-Q?",
    "choices": [
      "A description of the registrant’s business and its properties",
      "Management’s discussion and analysis of financial condition and results of operations",
      "Disclosure of material pending legal proceedings",
      "Quantitative and qualitative disclosures about market risk"
    ],
    "answer": 0,
    "explain": "The 10-K opens with Item 1 (Business) and Item 2 (Properties); the 10-Q has no corresponding items, though material developments can still be reported elsewhere in it. MD&A, market risk and legal proceedings have items in both forms (Part I Items 2 and 3 and Part II Item 1 of the 10-Q), with market risk excused for smaller reporting companies."
  }
];
