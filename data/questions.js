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
      "Unrealized gain on equity securities held for trading",
      "Unrealized gain on available-for-sale debt securities",
      "Gain on the sale of used manufacturing equipment",
      "Goodwill impairment loss on a reporting unit"
    ],
    "answer": 1,
    "explain": "OCI holds the PUFIE items: pension adjustments, unrealized gains and losses on available-for-sale debt, foreign currency translation, instrument-specific credit risk on fair-value-option liabilities, and cash flow hedge gains and losses. Unrealized gains on equity securities go to net income under ASC 321 whatever the holding purpose; equipment sale gains and goodwill impairment are ordinary income items."
  },
  {
    "id": "framework-7",
    "section": "framework",
    "topic": "Comprehensive income",
    "difficulty": "easy",
    "q": "Net income is $200,000. The only other comprehensive income item for the year is a $30,000 foreign currency translation loss. What is comprehensive income?",
    "choices": [
      "$170,000",
      "$200,000",
      "$230,000",
      "$30,000"
    ],
    "answer": 0,
    "explain": "Comprehensive income is net income plus or minus other comprehensive income: $200,000 − $30,000 = $170,000. The translation loss sits in OCI, so it reduces the total. $200,000 ignores OCI altogether, $230,000 treats the loss as a gain, and $30,000 is the OCI item alone, not comprehensive income."
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
    "q": "A company pays $80,000 cash for equipment it will use in its factory for many years. What happens to its working capital?",
    "choices": [
      "It decreases by $80,000",
      "It is unchanged",
      "It increases by $80,000",
      "It decreases only as the equipment is depreciated"
    ],
    "answer": 0,
    "explain": "Working capital is current assets minus current liabilities. Cash, a current asset, falls by $80,000, while the equipment is a noncurrent asset that never enters the computation, so working capital drops by the full amount. Nothing offsets the outflow, and later depreciation touches no current asset or liability."
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
    "topic": "Useful life revision",
    "difficulty": "medium",
    "q": "A company now expects a machine with no salvage value to last four more years instead of the six remaining under its original estimate. How does it account for the change?",
    "choices": [
      "Depreciate the current carrying amount over the four remaining years",
      "Restate prior years' depreciation using the shorter total life",
      "Record a catch-up charge now, then depreciate over the four remaining years",
      "Keep the original schedule and disclose the revision in the notes"
    ],
    "answer": 0,
    "explain": "A revised useful life is a change in **estimate**, applied prospectively: the remaining carrying amount is spread over the four years now expected. Prior years are never restated, because the old estimate was reasonable when made, and a catch-up charge would dump past periods' expense into the current year."
  },
  {
    "id": "framework-14",
    "section": "framework",
    "topic": "Error correction",
    "difficulty": "medium",
    "q": "This year a company discovers that last year's issued statements overstated depreciation by $20,000, a material error. The tax rate is 25%. What adjustment is made to beginning retained earnings?",
    "choices": [
      "$15,000 increase",
      "$20,000 increase",
      "$5,000 increase",
      "$15,000 decrease"
    ],
    "answer": 0,
    "explain": "A material error in issued statements is a **prior-period adjustment**: beginning retained earnings rises by the after-tax effect, $20,000 × (1 − 25%) = $15,000. The full $20,000 ignores the related tax effect, $5,000 is only that tax effect, and the direction is up because last year's income was understated."
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
      "It is billed to the customer on a separate invoice line",
      "It is delivered to the customer at the start of the contract",
      "It takes more than one reporting period to provide"
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
    "topic": "Volume rebates",
    "difficulty": "medium",
    "q": "A seller's unit price drops retroactively once a customer's annual purchases pass a threshold the seller expects to be met. At what price does it record sales made before the threshold is reached?",
    "choices": [
      "The reduced price, because the rebate is expected to apply",
      "The full price, reversing revenue later if the rebate is earned",
      "The full price, with the expected rebate accrued as an expense",
      "No revenue until the year's purchase volume is known"
    ],
    "answer": 0,
    "explain": "The rebate is **variable consideration**, so the seller estimates it and records sales at the price it expects to keep. Booking the full price overstates revenue and invites a reversal, a rebate reduces revenue rather than creating an expense, and revenue does not wait for the uncertainty to resolve."
  },
  {
    "id": "revenue-7",
    "section": "revenue",
    "topic": "Estimating standalone prices",
    "difficulty": "medium",
    "q": "A product's standalone selling price is not directly observable. Under ASC 606, when may the seller estimate it with the residual approach?",
    "choices": [
      "When the price is highly variable or uncertain",
      "Whenever the product is sold only as part of a bundle",
      "When the product is the last item delivered in the contract",
      "Whenever the seller's cost and margin are unknown"
    ],
    "answer": 0,
    "explain": "The **residual approach** (the total transaction price less the observable standalone prices of the other promises) is allowed only when the price is highly variable or uncertain. Bundling alone and delivery order do not qualify; otherwise the seller uses an adjusted market assessment or expected cost plus a margin."
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
      "The contract term runs for longer than one year",
      "The customer pays for the work in monthly installments",
      "The goods are shipped FOB shipping point to the customer"
    ],
    "answer": 0,
    "explain": "Over-time recognition applies when the customer simultaneously receives and consumes benefits as the entity performs (or other control-based criteria). Contract length and payment timing are irrelevant."
  },
  {
    "id": "revenue-10",
    "section": "revenue",
    "topic": "Measuring progress",
    "difficulty": "medium",
    "q": "A contractor has incurred one-quarter of the total costs it expects on a fixed-price $500,000 contract. Under the cost-to-cost method, how much revenue has it recognized to date?",
    "choices": [
      "$125,000",
      "$500,000",
      "$375,000",
      "$0"
    ],
    "answer": 0,
    "explain": "Cost-to-cost measures progress as costs incurred divided by total expected costs, here 25%, so cumulative revenue is 25% × $500,000 = **$125,000**. Revenue is not held until completion, and $375,000 is the share of the contract still to be performed, not the work done so far."
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
    "topic": "Ticket platform revenue",
    "difficulty": "easy",
    "q": "A ticketing platform sells tickets for a venue that sets the $200 price and is responsible for the concert. The platform collects the $200 and keeps a $30 fee. How much revenue does it report?",
    "choices": [
      "$30",
      "$200",
      "$170",
      "$0 until the concert takes place"
    ],
    "answer": 0,
    "explain": "The venue sets the price and must put on the concert, so it controls the ticket; the platform is an **agent** reporting revenue net: its $30 fee. The gross $200 is the principal's revenue, $170 is only cash remitted, and the platform's service ends at the sale, not the concert."
  },
  {
    "id": "revenue-13",
    "section": "revenue",
    "topic": "Contract balances",
    "difficulty": "medium",
    "q": "A contractor delivers the first of two machines. Payment for both becomes due only when the second machine is delivered next month. What does the contractor record for the first machine?",
    "choices": [
      "A contract asset",
      "An account receivable",
      "A contract liability",
      "A refund liability"
    ],
    "answer": 0,
    "explain": "Revenue is earned on the first machine, but the right to payment is **conditional** on something other than the passage of time (delivering the second machine), so it is a contract asset. It becomes a receivable once unconditional; a contract liability arises only when the customer pays first."
  },
  {
    "id": "revenue-14",
    "section": "revenue",
    "topic": "Gift card breakage",
    "difficulty": "medium",
    "q": "A retailer sells gift cards and expects, based on experience, that some balances will never be redeemed. When does it recognize that expected breakage as revenue?",
    "choices": [
      "In proportion to the pattern of customer redemptions",
      "At the point of sale, because the breakage is expected",
      "Only when the chance of redemption becomes remote",
      "Only when the unredeemed cards legally expire"
    ],
    "answer": 0,
    "explain": "When a retailer expects to be entitled to breakage, it recognizes the expected amount in **proportion to the pattern** of rights exercised by customers, not at the sale date. Waiting until redemption is remote applies only when breakage is not expected, and unclaimed-property laws can rule breakage out altogether."
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
      "Both are separate performance obligations, each with revenue deferred over its coverage period",
      "The required warranty is a cost accrual; the extended warranty is a performance obligation earned over its term",
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
    "topic": "Sales commissions",
    "difficulty": "easy",
    "q": "A company pays its salesperson a commission that was owed only because a customer signed a four-year service contract, and it expects to recover the cost. How does the company account for the commission?",
    "choices": [
      "Capitalize it and amortize it as the services transfer",
      "Expense it immediately as a selling cost",
      "Capitalize it and expense it when the contract ends",
      "Deduct it from the revenue recognized at signing"
    ],
    "answer": 0,
    "explain": "An **incremental**, recoverable cost of obtaining a contract is capitalized and amortized in step with the transfer of the services, here over four years. Immediate expensing is allowed only under the practical expedient for amortization periods of one year or less, and a commission never reduces revenue."
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
    "q": "The bank statement shows a $50,000 balance, and $8,000 of checks the company has recorded have not yet cleared the bank. With no other reconciling items, what is the correct cash balance?",
    "choices": [
      "$42,000",
      "$58,000",
      "$50,000",
      "$8,000"
    ],
    "answer": 0,
    "explain": "Outstanding checks have reduced the company's books but not the bank's, so they are **subtracted** from the bank balance: $50,000 − $8,000 = $42,000. Adding them ($58,000) reverses the adjustment, $50,000 leaves the bank's figure uncorrected, and $8,000 is the adjustment itself; deposits in transit are the item added."
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
    "q": "At the start of October, a company accepts a one-year note receivable that will pay $6,000 of interest at maturity. What interest revenue does it accrue at its December year-end?",
    "choices": [
      "$1,500",
      "$6,000",
      "$4,500",
      "$3,000"
    ],
    "answer": 0,
    "explain": "Interest is earned as time passes, so the three months from October through December belong to this year: $6,000 × 3/12 = $1,500, recorded as interest receivable. Waiting for the cash at maturity would push this year's revenue into next year, and $4,500 counts the nine months still to come."
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
    "q": "Prices rose steadily during the year. Compared with FIFO and LIFO, where does cost of goods sold under the weighted-average method fall?",
    "choices": [
      "Between the FIFO and LIFO amounts",
      "Below both the FIFO and LIFO amounts",
      "Above both the FIFO and LIFO amounts",
      "Equal to the FIFO amount"
    ],
    "answer": 0,
    "explain": "Weighted average blends every layer into one unit cost, so with rising prices it lands between FIFO, which charges the oldest, cheapest costs to sales, and LIFO, which charges the newest, dearest. It cannot fall below FIFO or above LIFO: an average of the layers sits inside their range."
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
    "q": "A company estimates inventory with the gross profit method. Sales for the period were $200,000, and gross profit is normally 30% of sales. What is estimated cost of goods sold?",
    "choices": [
      "$140,000",
      "$60,000",
      "$153,846",
      "$46,154"
    ],
    "answer": 0,
    "explain": "Cost of goods sold is the part of sales that is not gross profit: $200,000 × 70% = $140,000. $60,000 is the gross profit itself, and $153,846 treats 30% as a markup on cost rather than a share of sales; subtracting the estimate from goods available gives ending inventory."
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
    "q": "Equipment cost $50,000 and is expected to sell for $5,000 at the end of its useful life. What total depreciation is recorded over that life under the straight-line method?",
    "choices": [
      "$45,000",
      "$50,000",
      "$55,000",
      "$5,000"
    ],
    "answer": 0,
    "explain": "Depreciation allocates the **depreciable base**, cost less salvage value, over the useful life: $50,000 − $5,000 = $45,000 in total, whatever the method. Depreciating the full $50,000 ignores the value recovered at disposal, $55,000 adds the salvage instead of removing it, and $5,000 is the part never depreciated."
  },
  {
    "id": "assets2-4",
    "section": "assets2",
    "topic": "Double-declining balance",
    "difficulty": "medium",
    "q": "Equipment with a salvage value is depreciated by the double-declining-balance method. How does the salvage value affect the annual computation?",
    "choices": [
      "Ignored in the computation; it only sets a floor for book value",
      "Subtracted from cost first; the rate applies to the depreciable base",
      "Ignored entirely; book value may end below it",
      "Subtracted from book value each year; the rate applies to the remainder"
    ],
    "answer": 0,
    "explain": "Double-declining-balance applies twice the straight-line rate to **book value**, not to cost less salvage, so salvage stays out of the computation; it only sets a floor, and depreciation stops once book value reaches it. Deducting salvage first is the straight-line habit; depreciating below salvage is never allowed."
  },
  {
    "id": "assets2-5",
    "section": "assets2",
    "topic": "Units of production",
    "difficulty": "easy",
    "q": "A company depreciates a delivery truck by the units-of-production method. How is the depreciation rate per mile computed?",
    "choices": [
      "(Cost − salvage value) ÷ total miles expected over the truck's life",
      "Cost ÷ total miles expected over the truck's life",
      "(Cost − salvage value) ÷ miles driven in the current year",
      "Cost ÷ miles driven in the current year"
    ],
    "answer": 0,
    "explain": "Units of production spreads the **depreciable base**, cost less salvage, over the total activity expected, giving a rate per mile that is multiplied by each year's miles. Leaving out salvage overstates the base, and dividing by one year's miles would expense the whole base in a single year."
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
    "q": "A machine held and used fails the recoverability test: its carrying amount exceeds the undiscounted future cash flows. How is the impairment loss measured?",
    "choices": [
      "Carrying amount less fair value",
      "Carrying amount less undiscounted future cash flows",
      "Carrying amount less fair value less costs to sell",
      "Undiscounted future cash flows less fair value"
    ],
    "answer": 0,
    "explain": "Once the carrying amount is not recoverable, the loss is its excess over **fair value**; the undiscounted cash flows only decide whether a loss exists and never measure it. Costs to sell are deducted only for assets held for sale, and the reduced carrying amount becomes the asset's new cost."
  },
  {
    "id": "assets2-19",
    "section": "assets2",
    "topic": "Capitalized interest rate",
    "difficulty": "medium",
    "q": "A company constructing a building for its own use has a specific construction loan and other general borrowings. Its weighted-average accumulated expenditures exceed the construction loan. What rate applies to the excess?",
    "choices": [
      "The weighted-average rate on its other outstanding borrowings",
      "The construction loan's own rate, applied to the whole base",
      "The rate on whichever other borrowing has the highest cost",
      "No rate; interest on the excess is expensed as incurred"
    ],
    "answer": 0,
    "explain": "Avoidable interest is layered: the specific loan's rate covers the expenditures it funds and the **weighted-average** rate on other debt covers the excess, capped at interest actually incurred. Using the construction loan's rate on everything assumes a loan larger than exists, and expensing the excess understates the building's cost."
  },
  {
    "id": "assets2-24",
    "section": "assets2",
    "topic": "Cost of land",
    "difficulty": "medium",
    "q": "A company buys a site with an old building, which it immediately razes to construct a new plant. Which cost is included in the recorded cost of the land?",
    "choices": [
      "Razing the old building, net of salvage proceeds",
      "Paving a parking lot and fencing the site",
      "Excavating the foundation for the new plant",
      "Architect's fees for designing the new plant"
    ],
    "answer": 0,
    "explain": "Land includes every cost of readying the site for its intended use, so razing a building the buyer never meant to keep, net of salvage, is land. Parking lots and fences wear out, so they are depreciable **land improvements**; excavation and design fees are costs of the new building."
  },
  {
    "id": "assets2-20",
    "section": "assets2",
    "topic": "Exchange with cash paid",
    "difficulty": "medium",
    "q": "In an exchange lacking commercial substance, a company trades in equipment whose fair value exceeds its carrying amount and also pays cash. At what amount does it record the new asset?",
    "choices": [
      "The old asset's carrying amount plus the cash paid",
      "The old asset's fair value, ignoring the cash paid",
      "The new asset's fair value",
      "The old asset's carrying amount, ignoring the cash paid"
    ],
    "answer": 0,
    "explain": "Without commercial substance the exchange is measured at **carrying amount**, so the payer of cash records the new asset at the old asset's carrying amount plus the cash and defers its gain. Fair value, and the gain it brings, requires commercial substance; a loss would be recognized either way."
  },
  {
    "id": "assets2-21",
    "section": "assets2",
    "topic": "Held-and-used impairment",
    "difficulty": "easy",
    "q": "A machine held and used has a fair value below its carrying amount, but the undiscounted cash flows expected from using it exceed the carrying amount. What does the company record?",
    "choices": [
      "No impairment loss",
      "An impairment loss down to fair value",
      "An impairment loss down to the present value of the cash flows",
      "An unrealized loss in other comprehensive income"
    ],
    "answer": 0,
    "explain": "Recoverability comes first: when the undiscounted cash flows from use and disposal cover the carrying amount, there is no impairment and fair value never enters the picture. Writing down to fair value skips that test, discounted cash flows are the wrong measure, and OCI is for securities, not plant assets."
  },
  {
    "id": "assets2-22",
    "section": "assets2",
    "topic": "Patent amortization",
    "difficulty": "easy",
    "q": "A company buys a patent that has 16 years of legal life remaining but is expected to provide benefits for only 8 years. Over what period is it amortized?",
    "choices": [
      "8 years",
      "16 years",
      "20 years",
      "No set period; it is tested for impairment instead"
    ],
    "answer": 0,
    "explain": "A finite-lived intangible is amortized over its **useful life**, which can never exceed the remaining legal life and is shorter here, so 8 years. The 16-year legal term is only a ceiling, 20 years ignores the time already elapsed, and only indefinite-lived intangibles such as goodwill go unamortized."
  },
  {
    "id": "assets2-23",
    "section": "assets2",
    "topic": "Dismantling obligation",
    "difficulty": "easy",
    "q": "A company must dismantle a new plant in 20 years. The future cost is estimated at $150,000; its present value today is $45,000. How much is added to the plant's recorded cost?",
    "choices": [
      "$45,000, the obligation's fair value",
      "$150,000",
      "Nothing; the cost is expensed when incurred",
      "$7,500 a year as it accrues"
    ],
    "answer": 0,
    "explain": "An asset retirement obligation is recognized at **fair value**, the present value of the expected cost, and the same $45,000 is added to the plant and depreciated with it. The undiscounted $150,000 is never booked up front; the liability grows toward it through accretion expense over the 20 years."
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
    "q": "A company buys an accounting software package for its own use. Besides the purchase price, which cost is capitalized as part of the software asset?",
    "choices": [
      "Fees to install and test the software",
      "Training employees on the new system",
      "Converting data from the old system",
      "Evaluating competing packages before the purchase"
    ],
    "answer": 0,
    "explain": "Internal-use software is recorded at its purchase price plus the costs of getting it ready for use, including installation and testing. Training and data conversion are expensed even when the vendor does the work, and preliminary project stage costs, such as evaluating alternatives, are expensed as incurred."
  },
  {
    "id": "assets2-26",
    "section": "assets2",
    "topic": "Software amortization",
    "difficulty": "easy",
    "q": "A company buys internal-use software in September, completes all substantial testing in November, and moves its staff onto the system in December. When does amortization of the software begin?",
    "choices": [
      "November, when substantial testing is complete",
      "September, when the software is purchased",
      "December, when the staff begin using it",
      "January, the start of the next fiscal year"
    ],
    "answer": 0,
    "explain": "Amortization of internal-use software starts when it is **ready for its intended use**, once all substantial testing is complete, even if staff have not moved over. Purchase comes before the asset can serve its purpose, and waiting for go-live or next year delays expense that belongs to this period."
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
    "q": "A cloud computing arrangement is a service contract, not a software license. Over what period does the customer amortize the implementation costs it capitalizes?",
    "choices": [
      "The hosting term plus renewals it is reasonably certain to exercise",
      "The noncancellable hosting term, excluding any renewal options",
      "The hosted software's expected useful life",
      "The period for which the hosting fees have been prepaid"
    ],
    "answer": 0,
    "explain": "ASU 2018-15 ties capitalized implementation costs to the **hosting term**, including renewal periods the customer is reasonably certain to exercise, because the customer holds a service, not software it controls. The software's useful life applies only to a license, and stopping at the noncancellable term ignores a reasonably certain renewal."
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
    "q": "A company holds available-for-sale debt securities with no credit loss, and it neither intends nor expects to be required to sell them. Where do unrealized holding gains and losses go each period?",
    "choices": [
      "Other comprehensive income",
      "Net income",
      "Retained earnings",
      "Nowhere until the securities are sold"
    ],
    "answer": 0,
    "explain": "AFS debt sits at fair value, with unrealized gains and losses accumulated in **OCI** until the security is sold and they move to net income. Earnings take them sooner only for a credit loss, a decision to sell or a likely forced sale; retained earnings is never their home."
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
    "topic": "Equity method carrying amount",
    "difficulty": "medium",
    "q": "An investor's share of its equity-method investee's income for the year is $40,000, and it receives $15,000 of dividends from the investee. By how much does the investment account change?",
    "choices": [
      "Up $25,000",
      "Up $55,000",
      "Up $40,000",
      "Down $15,000"
    ],
    "answer": 0,
    "explain": "Under the equity method the investment grows by the investor's share of investee income and shrinks by dividends, which are a return of the investment: $40,000 − $15,000 = **up $25,000**. Adding the dividends ($55,000) treats them as income, the classic trap, and $40,000 ignores the distribution entirely."
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
    "q": "A company uses land as a parking lot. Residential development is legally permissible and feasible, and developers would pay more for the land than its parking-lot value. On what basis is its fair value measured?",
    "choices": [
      "Residential development, as a market participant would use it",
      "The parking lot, because the company intends to keep using it",
      "Residential development, net of the costs to sell to a developer",
      "A blend of the two uses, weighted by the likelihood of sale"
    ],
    "answer": 0,
    "explain": "A nonfinancial asset is measured at its **highest and best use** from a market participant's view: legally permissible, physically possible, financially feasible and value-maximizing. The owner's plans are irrelevant, fair value is one market price, not a blend, and transaction costs help identify the market but never reduce the measurement."
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
    "topic": "AFS sale decision",
    "difficulty": "medium",
    "q": "An available-for-sale debt security's fair value has fallen below its amortized cost for reasons unrelated to credit. The company has now decided to sell the security. How is the decline reported?",
    "choices": [
      "In earnings, as a write-down of the amortized cost basis",
      "In other comprehensive income until the sale closes",
      "In earnings, through an allowance for credit losses",
      "Nowhere until the sale, when a realized loss is recorded"
    ],
    "answer": 0,
    "explain": "Once the company **intends to sell** (or more likely than not must sell before recovery), the security's amortized cost is written down to fair value through earnings, whatever caused the decline. OCI applies only while the company can and will hold, and the allowance covers only credit-related declines."
  },
  {
    "id": "invest-15",
    "section": "invest",
    "topic": "Measurement alternative",
    "difficulty": "medium",
    "q": "How may an equity security without a readily determinable fair value be measured?",
    "choices": [
      "Cost less impairment, adjusted for observable prices of that issuer's identical or similar shares",
      "Amortized cost under the effective interest method, as for a held-to-maturity debt security",
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
    "q": "An available-for-sale debt security's fair value falls below amortized cost, partly because of credit deterioration. The company does not intend to sell it and is unlikely to be forced to. How is the decline reported?",
    "choices": [
      "Credit portion in earnings via an allowance; the rest in OCI",
      "Entirely in OCI until the security is sold",
      "Entirely in earnings as a write-down of the basis",
      "Credit portion in OCI; the rest in earnings via an allowance"
    ],
    "answer": 0,
    "explain": "AFS debt uses an **allowance** for the credit-related part of the decline, charged to earnings and capped at the gap between fair value and amortized cost; the non-credit part stays in OCI. A full write-down through earnings happens only when the company intends, or will likely be required, to sell."
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
    "q": "A company measures a license's fair value under the income approach by discounting its expected cash flows. Which discount rate does ASC 820 require?",
    "choices": [
      "The return market participants would require on the asset",
      "The company's own incremental borrowing rate",
      "The risk-free rate for the license's remaining life",
      "The company's internal hurdle rate for new projects"
    ],
    "answer": 0,
    "explain": "Fair value is a market-based measurement, so present-value techniques use the rate **market participants** would demand for the asset's risk. The company's borrowing rate and hurdle rate are entity-specific assumptions, and a risk-free rate fits only cash flows that have already been adjusted for risk."
  },
  {
    "id": "invest-21",
    "section": "invest",
    "topic": "Cost approach",
    "difficulty": "easy",
    "q": "A company measures the fair value of a specialized machine using the cost approach under ASC 820. What amount does this approach produce?",
    "choices": [
      "Current cost to replace its service capacity, less obsolescence",
      "Original cost less accumulated book depreciation",
      "Original cost adjusted for inflation since purchase",
      "Present value of the cash flows the machine will generate"
    ],
    "answer": 0,
    "explain": "The cost approach asks what a market participant would pay today to replace the asset's **service capacity**: current replacement cost adjusted for physical, functional and economic obsolescence. Historical cost and book depreciation are the company's own records, not market measures, and discounting future cash flows is the income approach."
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
    "q": "Employees earn $10,000 of wages per day. At year end they have worked three days since the last payday, and the next payday is next week. What accrued wages liability is reported?",
    "choices": [
      "$30,000",
      "$50,000",
      "$10,000",
      "$0 until the next payday"
    ],
    "answer": 0,
    "explain": "Wages earned but unpaid are accrued: 3 days × $10,000 = **$30,000**. $10,000 counts only one day, $50,000 accrues a full week not yet worked, and waiting for payday is cash-basis accounting, which GAAP does not allow."
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
    "q": "A company expects warranty claims on this year's sales but has paid only part of them by year end. What warranty expense does it report for the year?",
    "choices": [
      "The full estimated cost of claims on the year's sales",
      "Only the claims actually paid during the year",
      "The estimated cost less the claims already paid",
      "Nothing until customers file their claims"
    ],
    "answer": 0,
    "explain": "Warranty cost is a loss contingency that is probable and estimable, so the **full estimated cost** of claims on the year's sales is expensed in the year of sale, matched to the revenue. Claims paid reduce the warranty liability, not the expense; waiting for claims is cash-basis accounting."
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
    "topic": "Bond interest expense",
    "difficulty": "easy",
    "q": "A company issued bonds at a discount and uses the effective-interest method. How is each period's interest expense computed?",
    "choices": [
      "Carrying amount times the market rate at issuance",
      "Face amount times the stated rate on the bonds",
      "Face amount times the market rate at issuance",
      "Carrying amount times the stated rate on the bonds"
    ],
    "answer": 0,
    "explain": "Under the effective-interest method, expense is the bond's **carrying amount** times the effective (market) rate at issuance, so expense grows as a discount bond's carrying amount rises toward face. Face times the stated rate is only the cash coupon; the difference between the two is the discount amortization."
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
    "topic": "Accrued interest",
    "difficulty": "easy",
    "q": "A calendar-year company issued a note payable on May 1. It accrues interest of $1,500 a month, none yet paid. What interest payable is reported at year end?",
    "choices": [
      "$12,000",
      "$18,000",
      "$6,000",
      "$0 until the note matures"
    ],
    "answer": 0,
    "explain": "Interest accrues for the months the note has been outstanding, May through December: 8 × $1,500 = **$12,000**. $18,000 charges a full year, $6,000 counts the four months before the note existed, and waiting until the note matures ignores accrual accounting."
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
    "topic": "Renegotiated debt",
    "difficulty": "medium",
    "q": "A borrower not in financial difficulty renegotiates its term loan with the same lender. When is the change accounted for as an extinguishment rather than a modification?",
    "choices": [
      "When the present value of the new cash flows differs from the old by 10% or more",
      "Whenever the interest rate or the maturity date is changed",
      "When the fair value of the new debt differs from the old by 10% or more",
      "Only when part of the principal is forgiven by the lender"
    ],
    "answer": 0,
    "explain": "An extinguishment requires a **10% or greater** difference between the present value of the new cash flows and that of the old, discounted at the original effective rate; anything less is a modification with no gain or loss. Fair value uses current rates, and a changed rate alone proves nothing."
  },
  {
    "id": "liab-20",
    "section": "liab",
    "topic": "Bond retirement",
    "difficulty": "medium",
    "q": "A company retires its bonds before maturity. To measure the gain or loss on extinguishment, what carrying amount is compared with the reacquisition price?",
    "choices": [
      "Face less unamortized discount and unamortized issue costs",
      "Face less unamortized discount; issue costs were expensed at issuance",
      "Face less unamortized discount plus interest accrued since the last payment",
      "Face alone; the discount and issue costs are written off to expense"
    ],
    "answer": 0,
    "explain": "Net carrying amount is face adjusted for unamortized discount or premium **and** unamortized issue costs, which are netted against the liability; the gain or loss is that amount less the reacquisition price. Accrued interest paid at retirement settles a separate liability and is not part of the price."
  },
  {
    "id": "liab-21",
    "section": "liab",
    "topic": "Troubled debt restructuring",
    "difficulty": "medium",
    "q": "A company in financial difficulty persuades its lender to reduce the principal and interest rate on its note. When does the company recognize a gain on the restructuring?",
    "choices": [
      "When the carrying amount exceeds the total undiscounted future payments under the new terms",
      "When the carrying amount exceeds the present value of the new payments at the original rate",
      "When the principal is reduced, for the amount of principal forgiven",
      "Only once every payment under the new terms has been made"
    ],
    "answer": 0,
    "explain": "The debtor compares the carrying amount, including accrued interest, with the **undiscounted** total of future payments; any excess is an immediate gain, and the liability is written down to that total. If payments equal or exceed the carrying amount there is no gain; instead a lower effective rate is imputed."
  },
  {
    "id": "liab-22",
    "section": "liab",
    "topic": "Loan covenant test",
    "difficulty": "easy",
    "q": "A loan covenant requires a minimum current ratio at year end. Which liability is included in the current liabilities used for that ratio?",
    "choices": [
      "The installment of long-term debt due within the next year",
      "The installments of long-term debt due in later years",
      "A deferred tax liability expected to reverse next year",
      "Short-term debt refinanced on a long-term basis before the statements are issued"
    ],
    "answer": 0,
    "explain": "Current liabilities are obligations **due within one year** or the operating cycle, so next year's installment of long-term debt is current while the later installments stay noncurrent. Deferred tax liabilities are always noncurrent, and short-term debt refinanced long term before the statements are issued is reclassified as noncurrent."
  },
  {
    "id": "liab-23",
    "section": "liab",
    "topic": "Covenant violation",
    "difficulty": "medium",
    "q": "A company violates a covenant at year end, making its long-term installment note callable. Before the statements are issued, the lender waives its call right for more than a year. How is the note classified?",
    "choices": [
      "As if there were no violation: only the installment due within a year is current",
      "Entirely current, because the violation existed at the balance sheet date",
      "Entirely noncurrent, because the lender can no longer call the note",
      "The installments due within the waiver period are current; the rest noncurrent"
    ],
    "answer": 0,
    "explain": "Debt callable because of a year-end covenant violation is current **unless** the lender, before the statements are issued, waives the call right for more than a year from that date. It qualifies, so the note is classified normally: next year's installment current, the rest noncurrent, regardless of the waiver's length."
  },
  {
    "id": "liab-24",
    "section": "liab",
    "topic": "One-time termination benefits",
    "difficulty": "medium",
    "q": "A company tells employees they will be terminated in six months, well beyond the legal notice period, and will get a one-time benefit if they work until then. How is the liability recognized?",
    "choices": [
      "Ratably over the six months of required service",
      "In full on the date the plan is communicated to the employees",
      "In full on the date management commits to the termination plan",
      "Ratably over the legal notice period rather than the six months"
    ],
    "answer": 0,
    "explain": "Because employees must work beyond the **minimum retention period** to earn the benefit, the liability is measured at the communication date but recognized ratably over the future service period, not the notice period. Full recognition at communication applies only when no such service is required; commitment alone creates no liability."
  },
  {
    "id": "liab-25",
    "section": "liab",
    "topic": "Contract termination cost",
    "difficulty": "easy",
    "q": "As part of an exit plan, a company will end a service contract early by giving the required notice and paying a termination fee. When is the liability for the fee recognized?",
    "choices": [
      "When the company gives the termination notice",
      "When management commits to the exit plan",
      "When the services under the contract stop",
      "When the termination fee is paid"
    ],
    "answer": 0,
    "explain": "ASC 420 recognizes the cost of terminating a contract early when the entity **terminates the contract under its terms**, here by giving notice. Commitment to a plan creates no liability, the cease-use date applies only to a contract still running but no longer used, and payment merely settles the liability."
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
    "q": "At the commencement date, how does a lessee measure the right-of-use asset relative to the lease liability?",
    "choices": [
      "Liability plus initial direct costs and prepaid rent, minus incentives received",
      "Liability plus initial direct costs and incentives received",
      "Liability minus initial direct costs and incentives received",
      "Liability plus prepaid rent only; direct costs and incentives are expensed"
    ],
    "answer": 0,
    "explain": "ROU asset = lease liability plus initial direct costs and any lease payments made at or before commencement (prepaid rent), **minus** lease incentives received. Incentives are cash the lessor gives back, so they lower the asset; adding them, or subtracting direct costs, reverses the signs."
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
    "q": "A three-year operating lease has total payments of $60,000; the year-1 payment is only $10,000. What is the lessee's year-1 lease expense?",
    "choices": [
      "$20,000",
      "$10,000",
      "$25,000",
      "$30,000"
    ],
    "answer": 0,
    "explain": "An operating lease produces a **single straight-line lease cost**: $60,000 ÷ 3 = $20,000 a year, whatever the cash schedule. Expensing only the $10,000 paid is cash-basis accounting; the difference shows up in the lease liability and right-of-use asset, not as a separate deferred rent account."
  },
  {
    "id": "leases-12",
    "section": "leases",
    "topic": "Finance lease interest",
    "difficulty": "easy",
    "q": "A lessee's finance lease requires payments at the end of each year. How is interest expense on the lease liability for the first year computed?",
    "choices": [
      "The liability at commencement times the discount rate",
      "The first annual payment times the discount rate",
      "The liability after the first payment times the discount rate",
      "The first payment less straight-line amortization of the asset"
    ],
    "answer": 0,
    "explain": "A finance lease liability accrues interest like a loan: the **beginning balance** times the discount rate. Each year-end payment is split into that interest and a principal reduction, so applying the rate to the post-payment balance is a year early; amortization of the right-of-use asset is a separate, straight-line expense."
  },
  {
    "id": "leases-20",
    "section": "leases",
    "topic": "Operating lease ROU asset",
    "difficulty": "medium",
    "q": "Under an operating lease, how does a lessee determine the reduction in the right-of-use asset for each period?",
    "choices": [
      "Straight-line lease cost less the interest accreted on the liability",
      "Straight-line over the lease term, as for a finance lease asset",
      "The cash payment less the interest accreted on the liability",
      "It is not reduced; it is remeasured to the liability each period"
    ],
    "answer": 0,
    "explain": "Operating lease cost is one straight-line amount, so the asset's amortization is the **plug**: straight-line lease cost less the liability's accretion. Cash paid less accretion reduces the liability, not the asset; the two match only with level payments and no direct costs or incentives. Straight-line amortization is the finance-lease pattern."
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
    "q": "A 5-year equipment lease includes a 3-year renewal option at a rent so far below expected market rates that the lessee is reasonably certain to renew. What is the lease term under ASC 842?",
    "choices": [
      "8 years, the noncancelable period plus the renewal period",
      "5 years, because the option counts only once it is exercised",
      "5 years, with the renewal option disclosed in the notes only",
      "8 years only if the lessor can compel the lessee to renew"
    ],
    "answer": 0,
    "explain": "The lease term is the noncancelable period **plus** option periods the lessee is reasonably certain to exercise (ASC 842-10-30-1). Renewal rent well below market is the economic incentive behind that judgment, so the 3-year option counts and the term is 8 years; neither exercise nor lessor compulsion is required."
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
    "q": "A company issues common stock with a $1 par value for $10 per share in cash. How much of each share's proceeds is credited to additional paid-in capital?",
    "choices": [
      "$9",
      "$10",
      "$1",
      "$0"
    ],
    "answer": 0,
    "explain": "Proceeds are split between the stock account at **par** and additional paid-in capital for the excess: $10 − $1 = $9 to APIC per share. Crediting the full $10 to common stock ignores par, and $1 is the amount that goes to common stock, not APIC."
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
    "q": "Under the cost method, a company reissues treasury shares for more than it paid for them. Where does the excess over cost go?",
    "choices": [
      "Credit to APIC from treasury stock",
      "Gain in income from continuing operations",
      "Credit to retained earnings",
      "Credit to common stock at par value"
    ],
    "answer": 0,
    "explain": "Reissuing treasury stock above cost credits **additional paid-in capital from treasury stock transactions**; a company never reports a gain or loss in income on dealings in its own shares. Retained earnings is touched only when a reissue below cost exhausts that APIC, and common stock stays at the original par."
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
      "Remeasure the land to fair value, gain in net income; retained earnings falls by fair value",
      "Reduce retained earnings by the land's book value; no gain is recognized",
      "Reduce retained earnings by fair value and credit the excess over book value to additional paid-in capital",
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
    "q": "A company declares a 10% stock dividend when its shares trade well above par. What amount is transferred from retained earnings to paid-in capital?",
    "choices": [
      "The fair value of the shares issued",
      "The par value of the shares issued",
      "The excess of fair value over par value",
      "Nothing; only a memorandum entry is made"
    ],
    "answer": 0,
    "explain": "A stock dividend under 20-25% is **small** and is capitalized at the shares' fair value: retained earnings is debited for fair value, with par to common stock and the excess to APIC. Par value applies to large stock dividends, and a memorandum entry is the treatment for a stock split."
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
    "q": "Net income is $100,000 and the preferred dividend declared for the year is $10,000. What is income available to common stockholders for basic EPS?",
    "choices": [
      "$90,000",
      "$100,000",
      "$110,000",
      "$80,000"
    ],
    "answer": 0,
    "explain": "Basic EPS divides **income available to common stockholders** by weighted-average common shares, so the preferred dividend comes off first: $100,000 − $10,000 = $90,000. Using $100,000 forgets the deduction, $110,000 adds the dividend instead of subtracting it, and $80,000 deducts it twice."
  },
  {
    "id": "equity-12",
    "section": "equity",
    "topic": "Weighted-average shares",
    "difficulty": "medium",
    "q": "A company had 10,000 shares outstanding all year and issued 6,000 more at midyear. What are the weighted-average shares for the year?",
    "choices": [
      "13,000",
      "16,000",
      "10,000",
      "14,500"
    ],
    "answer": 0,
    "explain": "Shares are **weighted** by the fraction of the year they were outstanding: 10,000 + (6,000 × 6/12) = 13,000. Using 16,000 counts the new shares for the whole year, 10,000 ignores them entirely, and the weighting matters because the new capital earned income for only half the year."
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
    "q": "Under the cost method, a company reissues treasury shares for less than their cost. The shortfall exceeds the balance in APIC from earlier treasury stock sales. How is the shortfall recorded?",
    "choices": [
      "Debit APIC from treasury stock to zero, then retained earnings for the rest",
      "Debit retained earnings for the entire shortfall",
      "Debit APIC from treasury stock for the entire shortfall, even to a debit balance",
      "Debit APIC from treasury stock to zero, then a loss in net income for the rest"
    ],
    "answer": 0,
    "explain": "A reissue below cost first absorbs **APIC from treasury stock transactions** built by earlier sales above cost; once that balance is exhausted, the remainder is charged to retained earnings. That APIC account never carries a debit balance, and a company never reports a loss in income on its own shares."
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
    "topic": "Partner contributions",
    "difficulty": "easy",
    "q": "A partner contributes equipment she bought years ago to the partnership. At what amount is it credited to her capital account?",
    "choices": [
      "Its agreed fair value when contributed",
      "The amount she originally paid for it",
      "Her tax basis in the equipment",
      "Its book value on her own records"
    ],
    "answer": 0,
    "explain": "Partnership books record a noncash contribution at its **fair value** (as agreed by the partners) and credit that amount to the contributor's capital account. Her original cost, book value or tax basis matters only for her own tax records; the carryover basis is a tax rule, not a GAAP measurement."
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
    "topic": "Indirect method adjustment",
    "difficulty": "medium",
    "q": "Under the indirect method, how is the year's amortization of premium on bonds payable treated in the operating section of the statement of cash flows?",
    "choices": [
      "Subtracted from net income",
      "Added to net income",
      "Shown as a financing outflow",
      "Excluded from the statement entirely"
    ],
    "answer": 0,
    "explain": "Premium amortization lowers interest expense below the cash interest actually paid, so net income overstates operating cash and the amortization is **subtracted**. Adding it back is the treatment for discount amortization and depreciation, and the financing section carries only the bond's principal, never its interest."
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
      "Within the statement's cash totals, so transfers to restricted accounts are not flows",
      "An investing outflow when cash becomes restricted and an investing inflow when it is released",
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
    "q": "A company's deferred tax asset increases during the year, with no change in its deferred tax liability; everything relates to continuing operations. How does the increase affect total income tax expense?",
    "choices": [
      "It reduces total expense by the amount of the increase",
      "It raises total expense by the amount of the increase",
      "It has no effect; only current tax enters expense",
      "It raises expense only in the year the asset reverses"
    ],
    "answer": 0,
    "explain": "Total expense is current plus deferred tax, and a growing deferred tax asset is a deferred tax **benefit**: future deductions have been recorded, so the entry credits income tax expense. A growing deferred tax liability does the opposite, and the balance-sheet change is the expense now, not at reversal."
  },
  {
    "id": "taxes-20",
    "section": "taxes",
    "topic": "Loss carryforward",
    "difficulty": "easy",
    "q": "A corporation reports a net operating loss that tax law allows it to carry forward, and it expects future taxable income. What does it recognize for the loss in the year incurred?",
    "choices": [
      "A deferred tax asset for the loss's future tax saving",
      "A deferred tax liability until the loss is deducted",
      "A receivable for the refund of prior years' taxes",
      "Nothing until the loss is actually deducted on a return"
    ],
    "answer": 0,
    "explain": "A carryforward is a future deductible amount, so its tax saving is recorded now as a **deferred tax asset**, at the enacted rate for the years of use, less any valuation allowance. A refund receivable arises only from carrybacks, which federal law rarely allows; nothing waits for the return."
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
    "q": "Parent sells goods to its subsidiary at a $20,000 markup. At year end, 40% of those goods are still in the subsidiary's inventory. How much intercompany profit does consolidation eliminate?",
    "choices": [
      "$8,000",
      "$20,000",
      "$12,000",
      "$0"
    ],
    "answer": 0,
    "explain": "Only the markup on goods still inside the group is **unrealized**: $20,000 × 40% = $8,000. The $12,000 on goods the subsidiary resold has been earned from outsiders, and the whole $20,000 would be eliminated only if nothing had been resold."
  },
  {
    "id": "combos-21",
    "section": "combos",
    "topic": "Consolidated cost of sales",
    "difficulty": "medium",
    "q": "Parent sold goods to its subsidiary for $80,000. At year end, $5,000 of Parent's profit on them is still in the subsidiary's inventory. By how much does consolidation reduce combined cost of goods sold?",
    "choices": [
      "$75,000",
      "$80,000",
      "$85,000",
      "$5,000"
    ],
    "answer": 0,
    "explain": "Consolidation removes the whole $80,000 intercompany purchase from cost of goods sold, then charges the $5,000 **unrealized profit** back to cost of goods sold and out of inventory: a net $75,000 reduction. $80,000 ignores the deferred profit, and $85,000 removes it in the wrong direction."
  },
  {
    "id": "combos-22",
    "section": "combos",
    "topic": "Intercompany equipment sale",
    "difficulty": "medium",
    "q": "At the start of the year, Parent sells equipment to its subsidiary at a gain; the subsidiary depreciates it. For that year, consolidated net income is below their combined separate net income by how much?",
    "choices": [
      "The gain, less this year's extra depreciation on the markup",
      "The entire gain",
      "Only this year's extra depreciation on the markup",
      "Nothing; the sale was at arm's length, so the gain stands"
    ],
    "answer": 0,
    "explain": "The intercompany gain is eliminated in full, but the subsidiary's depreciation on the marked-up cost is also reduced, which adds back one year's slice of that gain. Net effect: the gain less this year's **excess depreciation**. The rest of the gain reaches consolidated income over the asset's remaining life."
  },
  {
    "id": "combos-23",
    "section": "combos",
    "topic": "Consolidated total assets",
    "difficulty": "easy",
    "q": "Parent buys all of Sub's stock for $500,000, equal to Sub's book and fair value. The two separate balance sheets together show $2,800,000 of total assets, including the investment. What are consolidated total assets?",
    "choices": [
      "$2,300,000",
      "$2,800,000",
      "$3,300,000",
      "$1,800,000"
    ],
    "answer": 0,
    "explain": "The investment account is eliminated against Sub's equity and replaced by Sub's individual assets and liabilities, so the consolidated total is the combined figure less the investment: $2,800,000 − $500,000 = $2,300,000. Leaving the investment in counts Sub's net assets **twice**, once as the investment and again line by line."
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
    "q": "Parent carries its wholly owned subsidiary at cost and recorded the dividend the subsidiary paid it this year as dividend income. How does the consolidated income statement treat that dividend?",
    "choices": [
      "Eliminated; the subsidiary's full net income is included instead",
      "Kept as dividend income, since Parent actually received the cash",
      "Eliminated, along with an equal amount of the subsidiary's net income",
      "Shown as a dividend declared in the consolidated retained earnings statement"
    ],
    "answer": 0,
    "explain": "A dividend from a subsidiary is cash moving inside the group, so Parent's dividend income is eliminated and the subsidiary's **entire** net income joins consolidated income. Keeping the dividend counts those earnings twice; also deducting it from the subsidiary's income drops the part that was paid out."
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
    "difficulty": "easy",
    "q": "Combined separate revenues of a parent and its subsidiary total $1,100,000, including $60,000 the subsidiary billed the parent. What is consolidated revenue?",
    "choices": [
      "$1,040,000",
      "$1,100,000",
      "$1,160,000",
      "$980,000"
    ],
    "answer": 0,
    "explain": "Combine the two, then remove intercompany sales in **full**: $1,100,000 − $60,000 = $1,040,000. Only sales to outsiders are consolidated revenue. $1,100,000 leaves the internal billing in, $1,160,000 adds it instead of removing it, and $980,000 removes it from both companies."
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
    "q": "Parent buys all of its subsidiary's outstanding bonds from outside investors for less than their carrying amount on the subsidiary's books. What does the consolidated income statement report for the purchase?",
    "choices": [
      "A gain on extinguishment of debt, in the year of purchase",
      "A loss on extinguishment of debt, in the year of purchase",
      "No gain or loss until the bonds mature or are resold",
      "Nothing now; the difference is amortized into interest over the remaining term"
    ],
    "answer": 0,
    "explain": "To the group, buying its own bonds from outsiders **retires** them: the bonds and Parent's investment are eliminated, and paying less than the carrying amount is a gain on extinguishment, recognized at once. The separate books record that difference through interest instead, so later consolidations remove it."
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
    "q": "A subsidiary sold equipment to its parent at a $24,000 gain; the parent depreciates it straight-line over four remaining years. In the year after the sale, how does consolidation adjust combined depreciation expense?",
    "choices": [
      "Reduces it by $6,000",
      "Increases it by $6,000",
      "Reduces it by $12,000",
      "Leaves it unchanged; the gain was eliminated in the year of sale"
    ],
    "answer": 0,
    "explain": "The parent depreciates the marked-up cost, so each remaining year carries $24,000 ÷ 4 = $6,000 of **excess depreciation** to remove. The year-of-sale entries fixed only that year; $12,000 is the cumulative excess through two years, and the first year's share now runs through beginning retained earnings."
  },
  {
    "id": "combos-17",
    "section": "combos",
    "topic": "Intercompany land sales",
    "difficulty": "medium",
    "q": "A subsidiary sells land to its parent at a $50,000 gain, and the parent still holds the land at year end. What does consolidation eliminate?",
    "choices": [
      "The entire $50,000 gain, until the land leaves the group",
      "Only the parent's ownership share of the $50,000 gain",
      "None of the gain, because land is not a depreciable asset",
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
    "q": "Last year's consolidation deferred the profit on inventory a subsidiary had sold to its parent. This year the parent sold those goods to outside customers. What does this year's consolidation do with the deferred profit?",
    "choices": [
      "Recognizes it in this year's consolidated income",
      "Nothing; last year's elimination already removed it",
      "Credits it straight to retained earnings, bypassing income",
      "Keeps it deferred until the subsidiary pays a dividend"
    ],
    "answer": 0,
    "explain": "The profit deferred last year is **realized** this year when the goods leave the group: the worksheet credits cost of goods sold and debits beginning retained earnings, raising consolidated income. Last year's entry fixed only last year, and realized profit passes through income, never straight to retained earnings."
  },
  {
    "id": "combos-29",
    "section": "combos",
    "topic": "Consolidated RE, later years",
    "difficulty": "medium",
    "q": "Parent bought all of Sub's stock at book value several years ago and carries the investment at cost. Consolidated retained earnings today equals Parent's retained earnings plus what?",
    "choices": [
      "Sub's increase in retained earnings since the acquisition",
      "All of Sub's current retained earnings",
      "Sub's retained earnings at the acquisition date",
      "Nothing; Sub's retained earnings are fully eliminated"
    ],
    "answer": 0,
    "explain": "Under the cost method Parent's retained earnings holds only the dividends Sub paid, so consolidation adds Sub's **increase** in retained earnings since acquisition (earnings less those dividends). Sub's balance at the acquisition date was bought, not earned by the group, so it is eliminated against the investment."
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
      "Restate last year's statements and adjust beginning retained earnings",
      "Record the shortfall as extra depreciation expense in the current year",
      "Adjust the current year through other comprehensive income",
      "Disclose the error in the notes without changing any reported amounts"
    ],
    "answer": 0,
    "explain": "A material **error** in issued statements is a prior-period adjustment: restate the comparatives, so last year's income absorbs the expense and this year's **beginning retained earnings** reflects the correction, **net of tax**. Catching it up through current income would put last year's expense in this year's results."
  },
  {
    "id": "special-5",
    "section": "special",
    "topic": "Uncorrected inventory error",
    "difficulty": "medium",
    "q": "A company overstated its ending inventory last year and never corrected it; this year's ending inventory is correct. After this year's books are closed, how is retained earnings stated?",
    "choices": [
      "Correctly stated",
      "Overstated by the full error",
      "Understated by the full error",
      "Overstated by twice the error"
    ],
    "answer": 0,
    "explain": "Last year's overstated ending inventory overstated last year's income; the same figure became this year's beginning inventory and **understated** this year's income by the same amount. After two years the error counterbalances, so retained earnings is right even though both years' incomes were wrong."
  },
  {
    "id": "special-6",
    "section": "special",
    "topic": "Adopting LIFO",
    "difficulty": "easy",
    "q": "A company adopts LIFO but cannot reconstruct prior-year layers. The change is applied how?",
    "choices": [
      "Prospectively, from the beginning of the year of change",
      "Retrospectively, using the best estimate of the missing layers",
      "Not at all; the change is prohibited without full restatement",
      "Through other comprehensive income in the year of change"
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
    "topic": "Revised interim tax rate",
    "difficulty": "medium",
    "q": "In its second quarter, a company lowers its estimated annual effective tax rate. The first quarter's tax expense was computed at the higher rate. What happens to that first-quarter excess?",
    "choices": [
      "It reduces second-quarter tax expense as a catch-up",
      "The first quarter is restated at the new rate",
      "It is spread over the remaining three quarters",
      "Nothing; each quarter keeps the rate used at the time"
    ],
    "answer": 0,
    "explain": "Interim tax is cumulative: each quarter applies the current estimated annual rate to **year-to-date** income and subtracts tax already recognized, so the second quarter absorbs the catch-up for the first quarter's higher rate. Earlier quarters are never restated for a new estimate, and nothing is deferred to later quarters."
  },
  {
    "id": "special-24",
    "section": "special",
    "topic": "Interim inventory decline",
    "difficulty": "medium",
    "q": "In its first quarter, a company wrote inventory down to net realizable value, expecting no recovery. In the third quarter, the same inventory's value rebounds above original cost. What does the company report that quarter?",
    "choices": [
      "A gain, limited to the first-quarter write-down",
      "A gain for the full rebound above the written-down value",
      "No gain, because inventory write-downs are not reversed",
      "A restatement of the first quarter to remove the write-down"
    ],
    "answer": 0,
    "explain": "Interim periods are **integral** to the year, so a same-year recovery of a write-down is a gain, but only up to the loss already recognized; the year as a whole shows no net loss. No-reversal is the annual ASC 330 rule, and earlier quarters are never restated."
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
    "q": "Three weeks after its year end, but before its financial statements are issued, a fire destroys a company's main warehouse. How is the fire reflected in the year-end financial statements?",
    "choices": [
      "Disclosed in the notes with the estimated loss; not accrued",
      "Accrued as a loss in the year just ended",
      "Not reported, because it happened after year end",
      "Recorded as a write-down of the warehouse at year end"
    ],
    "answer": 0,
    "explain": "The warehouse was intact at the balance sheet date, so the fire is a **nonrecognized** subsequent event: no amounts change, but the notes describe the event and estimate its financial effect (or say none can be made). Adjustment is reserved for events revealing conditions that existed at year end."
  },
  {
    "id": "special-21",
    "section": "special",
    "topic": "Revised useful life",
    "difficulty": "easy",
    "q": "At the start of the year, a company shortens the estimated remaining useful life of equipment that has no salvage value. How is this year's straight-line depreciation computed?",
    "choices": [
      "Carrying amount divided by the new remaining life",
      "Original cost divided by the new total life",
      "Carrying amount over the old remaining life, plus a catch-up charge",
      "Original cost over the old life, with prior years restated"
    ],
    "answer": 0,
    "explain": "A revised useful life is a change in **estimate**, applied prospectively: the remaining carrying amount is spread over the remaining revised life, with no catch-up for past years and no restatement. Applying the new life to original cost pretends the estimate had always been in place."
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
    "q": "Over what period must management evaluate whether substantial doubt exists about a company's ability to continue as a going concern?",
    "choices": [
      "One year after the statements are issued or available to be issued",
      "One year after the balance sheet date",
      "Only through the date the statements are issued",
      "As far ahead as management's budgets and forecasts extend"
    ],
    "answer": 0,
    "explain": "ASC 205-40 looks forward **one year from the date the statements are issued**, or are available to be issued for an entity that does not file with the SEC. Measuring from the balance sheet date cuts the window short, and the issuance date itself only bounds the subsequent-events review."
  },
  {
    "id": "special-28",
    "section": "special",
    "topic": "Inventory method change",
    "difficulty": "medium",
    "q": "A company changes from weighted-average to FIFO and presents last year's statements alongside this year's. Where is the effect of the change on last year's income shown?",
    "choices": [
      "In last year's income statement, restated under FIFO",
      "In last year's opening retained earnings",
      "In this year's opening retained earnings",
      "In this year's income statement, as a cumulative effect"
    ],
    "answer": 0,
    "explain": "Retrospective application restates each prior period presented for its own **period-specific** effects, so last year's income statement is simply redone under FIFO. Only the cumulative effect on years before the earliest period presented goes to that period's opening retained earnings, net of tax; nothing runs through this year's income."
  },
  {
    "id": "special-22",
    "section": "special",
    "topic": "Prior-year error",
    "difficulty": "medium",
    "q": "After issuing last year's statements, a company discovers it omitted $40,000 of depreciation that year. Its tax rate is 25%. By how much does the correction reduce this year's beginning retained earnings?",
    "choices": [
      "$30,000",
      "$40,000",
      "$10,000",
      "$0"
    ],
    "answer": 0,
    "explain": "A material error in issued statements is a **prior-period adjustment** to beginning retained earnings, net of tax: $40,000 × (1 − 25%) = $30,000. The gross $40,000 ignores the related tax effect, and running the correction through this year's income puts last year's expense in this year's results."
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
    "q": "In December, a donor gives a not-for-profit an unconditional written promise to pay $100,000 two years from now, naming no purpose. How does the NFP report the promise this year?",
    "choices": [
      "Receivable and revenue, increasing net assets with donor restrictions",
      "Receivable and revenue, increasing net assets without donor restrictions",
      "Receivable and a refundable advance liability",
      "Nothing until the cash is received"
    ],
    "answer": 0,
    "explain": "An unconditional promise is recognized when made, as a receivable and revenue. Payment due in a future period carries an **implied time restriction**, so the gift increases net assets with donor restrictions even though no purpose was named. A refundable advance is only for a conditional promise already paid."
  },
  {
    "id": "govnfp-22",
    "section": "govnfp",
    "topic": "County tax collections",
    "difficulty": "easy",
    "q": "A county collects property taxes for the school districts inside its borders and passes the money straight through to them, keeping no share. Which fund reports these collections?",
    "choices": [
      "Custodial fund",
      "Private-purpose trust fund",
      "Special revenue fund",
      "Internal service fund"
    ],
    "answer": 0,
    "explain": "Resources a government holds for other governments or parties in a custodial capacity are fiduciary and go in a **custodial fund**, the successor to the agency fund. A private-purpose trust needs a trust arrangement, and the collections are never the county's own revenue, so no governmental or proprietary fund applies."
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
    "topic": "Investment fees",
    "difficulty": "easy",
    "q": "A not-for-profit pays $30,000 in fees to outside investment managers. How does it present those fees on the statement of activities?",
    "choices": [
      "Netted against investment return",
      "As a management and general expense",
      "As a program expense",
      "Disclosed only in the notes"
    ],
    "answer": 0,
    "explain": "Not-for-profits present investment return **net** of external and direct internal investment expenses, so the fees reduce the return line instead of appearing as an expense (ASU 2016-14 ended the gross presentation). Showing them as management and general or program expense overstates both return and expenses, and a note alone is disclosure, not presentation."
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
    "q": "A museum receives a cash gift the donor restricts to building a new wing and pays the contractor that year. How does its statement of cash flows classify the gift and the payments?",
    "choices": [
      "Gift: financing; payments: investing",
      "Gift: operating; payments: investing",
      "Gift: operating; payments: operating",
      "Gift: financing; payments: financing"
    ],
    "answer": 0,
    "explain": "Contributions a donor restricts to acquiring, constructing or improving long-lived assets, or to an endowment, are **financing** inflows for a not-for-profit; paying the contractor is an investing outflow. Only gifts free of such long-term restrictions are operating receipts, so treating every receipt as operating is the trap."
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
    "q": "A company is computing its current ratio from its year-end balance sheet. Which of these balances does it leave out?",
    "choices": [
      "A note payable due in five years",
      "Prepaid insurance for next year",
      "Accrued wages payable",
      "Inventory held for resale"
    ],
    "answer": 0,
    "explain": "The current ratio divides current assets by current liabilities. Prepaid insurance and inventory are current assets and accrued wages are a current liability, so all three belong. The five-year note is **noncurrent**, like equipment; putting it in the denominator would understate the ratio."
  },
  {
    "id": "ratios-2",
    "section": "ratios",
    "topic": "Quick ratio",
    "difficulty": "medium",
    "q": "A company buys inventory on account, payable in 30 days. What does the purchase do to its quick (acid-test) ratio?",
    "choices": [
      "It falls, whatever its starting level",
      "It rises, whatever its starting level",
      "It is unchanged",
      "It falls only if it was above 1.0"
    ],
    "answer": 0,
    "explain": "Quick assets are cash, marketable securities and receivables; inventory is excluded. The purchase adds nothing to quick assets but raises current liabilities, so the ratio **falls** at any starting level. The above-1.0 logic matters only when numerator and denominator move together, which they do not here."
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
    "q": "A company computes its times interest earned ratio. Which earnings figure goes in the numerator?",
    "choices": [
      "Income before interest and income taxes",
      "Net income",
      "Net income plus interest expense",
      "Income before taxes but after interest"
    ],
    "answer": 0,
    "explain": "Times interest earned divides **EBIT** by interest expense: both interest and income taxes are added back to net income, because taxes are computed after interest is deducted and the ratio asks how many times operating earnings cover the interest charge. Adding back interest alone, or using net income, understates coverage."
  },
  {
    "id": "ratios-6",
    "section": "ratios",
    "topic": "Gross margin",
    "difficulty": "easy",
    "q": "Which comparison gives a company's gross margin percentage?",
    "choices": [
      "Net sales less cost of goods sold, divided by net sales",
      "Gross sales less cost of goods sold, divided by gross sales",
      "Operating income divided by net sales",
      "Net income divided by net sales"
    ],
    "answer": 0,
    "explain": "Gross margin is gross profit (net sales minus cost of goods sold) as a percentage of **net sales**, after returns and allowances. Starting from gross sales inflates both numerator and denominator; operating income over sales is the operating margin, and net income over sales is the net profit margin."
  },
  {
    "id": "ratios-7",
    "section": "ratios",
    "topic": "Return on common equity",
    "difficulty": "medium",
    "q": "A company with preferred stock outstanding computes its return on common stockholders' equity. How does it treat the preferred dividends, and which equity base does it use?",
    "choices": [
      "Subtract preferred dividends; use average common equity",
      "Subtract preferred dividends; use ending total equity",
      "Ignore preferred dividends; use average total equity",
      "Subtract common dividends; use average common equity"
    ],
    "answer": 0,
    "explain": "Return on common equity measures what the common holders earned: net income **less preferred dividends**, divided by average common stockholders' equity. Ending or total equity mismatches the year's earnings with the capital that produced them, and common dividends are a distribution of the return, not a deduction from it."
  },
  {
    "id": "ratios-8",
    "section": "ratios",
    "topic": "Days in inventory",
    "difficulty": "medium",
    "q": "A company computes inventory turnover to find its days in inventory. Which figure does it divide by average inventory, and why?",
    "choices": [
      "Cost of goods sold, because inventory is carried at cost",
      "Net sales, because turnover measures selling activity",
      "Gross profit, because it isolates the inventory markup",
      "Purchases, because they are what replenish inventory"
    ],
    "answer": 0,
    "explain": "Inventory turnover is **cost of goods sold** divided by average inventory, and days in inventory is 365 divided by that turnover. Inventory is carried at cost, so dividing sales (at selling prices) by inventory (at cost) overstates the turns and understates the days; purchases and gross profit measure other things."
  },
  {
    "id": "ratios-9",
    "section": "ratios",
    "topic": "Receivables turnover",
    "difficulty": "medium",
    "q": "A company makes both cash and credit sales. Which sales figure belongs in its receivables turnover ratio, and why?",
    "choices": [
      "Net credit sales, because only they pass through receivables",
      "Total net sales, because turnover measures all selling activity",
      "Cash collected from customers, because turnover measures collections",
      "Gross sales, because returns do not affect collections"
    ],
    "answer": 0,
    "explain": "Receivables turnover divides **net credit sales** by average receivables, and days sales outstanding is 365 over that turnover. Cash sales never create a receivable, so including them inflates turnover; cash collected is what the ratio measures, not its input; and returns and allowances come out since they are never collected."
  },
  {
    "id": "ratios-10",
    "section": "ratios",
    "topic": "Price-earnings ratio",
    "difficulty": "medium",
    "q": "A company with preferred stock outstanding computes its price-earnings ratio. Its market price per share is divided by which figure?",
    "choices": [
      "Earnings per common share, after preferred dividends",
      "Earnings per share before deducting preferred dividends",
      "Dividends paid per common share",
      "Book value per common share"
    ],
    "answer": 0,
    "explain": "The price-earnings ratio divides market price per share by **basic EPS**: net income less preferred dividends, over weighted-average common shares. Skipping the preferred dividends overstates EPS and understates the multiple; dividends per share feed the dividend yield and payout ratio, and book value per share feeds the price-to-book ratio."
  },
  {
    "id": "ratios-11",
    "section": "ratios",
    "topic": "Budget variances",
    "difficulty": "easy",
    "q": "A company's actual revenue beat its budget by $20,000, and its actual expenses exceeded their budget by $8,000. How is the expense variance labeled?",
    "choices": [
      "Unfavorable, because spending exceeded the plan",
      "Unfavorable only if the extra spending exceeded the extra revenue",
      "Favorable, because higher revenue required the extra spending",
      "Neutral, because the revenue variance more than offsets it"
    ],
    "answer": 0,
    "explain": "Variance labels follow the effect on income: revenue above budget is favorable, and expenses above budget are **unfavorable**, whatever happened elsewhere. The two net to a favorable income variance, but netting does not relabel the expense side; spending more than planned is not favorable because sales were strong."
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
    "q": "A company collected $500,000 from customers during the year, and its accounts receivable rose by $15,000 over the year. It has no unearned revenue. What is accrual-basis revenue?",
    "choices": [
      "$515,000",
      "$485,000",
      "$500,000",
      "$530,000"
    ],
    "answer": 0,
    "explain": "Receivables grew because sales outran collections, so accrual revenue is cash collected plus the increase in receivables: $500,000 + $15,000 = **$515,000**. Subtracting the increase ($485,000) reverses the adjustment, $500,000 is cash-basis revenue, and $530,000 counts the change twice."
  },
  {
    "id": "ratios-15",
    "section": "ratios",
    "topic": "Cash to accrual expenses",
    "difficulty": "medium",
    "q": "A company paid $200,000 in cash for operating expenses during the year, and its accrued expenses payable fell by $9,000. It has no prepaid expenses. What is accrual-basis operating expense?",
    "choices": [
      "$191,000",
      "$209,000",
      "$200,000",
      "$218,000"
    ],
    "answer": 0,
    "explain": "Part of the cash paid settled last year's accrued expenses, so this year's expense is cash paid less the decrease in the accrual: $200,000 − $9,000 = **$191,000**. Adding the decrease ($209,000) is the sign error, $200,000 is the cash-basis figure, and $218,000 doubles the adjustment."
  },
  {
    "id": "ratios-16",
    "section": "ratios",
    "topic": "Identifying the framework",
    "difficulty": "medium",
    "q": "A company records revenue when collected and expenses when paid, but it capitalizes equipment, depreciates it over its estimated useful life, and reports its bank loan as a liability. What basis is this?",
    "choices": [
      "Modified cash basis",
      "Pure cash basis",
      "Income tax basis",
      "Accrual basis under GAAP"
    ],
    "answer": 0,
    "explain": "The **modified cash basis** is the cash basis plus modifications with substantial support, typically capitalizing and depreciating long-lived assets and recording long-term debt. A pure cash basis would expense the equipment when paid, GAAP would also accrue receivables and payables, and the tax basis would follow the return's depreciation methods."
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
