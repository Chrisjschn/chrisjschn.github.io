/* Dealers question bank -- auto dealership taxation and the Form 1120-S, 15 sections, 240 questions.
   Original content for the preparer sitting down with a dealership trial
   balance: vehicle LIFO, floor plan interest, F&I income timing, demos,
   incentives, Form 8300, and the year-end close. Scenarios use a fictional
   dealership (Riverbend Motors). 2025 law including the 2025 tax act; indexed
   amounts are flagged as such. Choice order is shuffled at display time;
   'answer' is the correct index. Study aid only -- not tax advice for any
   actual dealership or return.
   FAR_SECTIONS/FAR_QUESTIONS global names keep the engine identical to FAR Blitz. */

var FAR_SECTIONS = [
  {
    "id": "scorp",
    "name": "The S Corp Return",
    "short": "S Corp",
    "emoji": "📄"
  },
  {
    "id": "inventory",
    "name": "Vehicle Inventory & LIFO",
    "short": "Inventory",
    "emoji": "🚗"
  },
  {
    "id": "floorplan",
    "name": "Floor Plan & Interest Limits",
    "short": "Floor Plan",
    "emoji": "🏦"
  },
  {
    "id": "sales",
    "name": "Sales, Incentives & Timing",
    "short": "Sales",
    "emoji": "🧾"
  },
  {
    "id": "evcredits",
    "name": "EV Credits & Factory Programs",
    "short": "EV & Programs",
    "emoji": "🔌"
  },
  {
    "id": "fi",
    "name": "F&I Income",
    "short": "F&I",
    "emoji": "💳"
  },
  {
    "id": "parts",
    "name": "Parts, Service & Body Shop",
    "short": "Service",
    "emoji": "🔧"
  },
  {
    "id": "vehicles",
    "name": "Demos & Company Vehicles",
    "short": "Demos",
    "emoji": "🔑"
  },
  {
    "id": "assets",
    "name": "Fixed Assets & Depreciation",
    "short": "Depreciation",
    "emoji": "🏗️"
  },
  {
    "id": "owners",
    "name": "Owners & Related Parties",
    "short": "Owners",
    "emoji": "👥"
  },
  {
    "id": "schedules",
    "name": "The 1120-S Schedules",
    "short": "Schedules",
    "emoji": "📋"
  },
  {
    "id": "entitytax",
    "name": "Entity-Level Taxes & Elections",
    "short": "Elections",
    "emoji": "⚖️"
  },
  {
    "id": "reporting",
    "name": "Information Reporting & Form 8300",
    "short": "Form 8300",
    "emoji": "💵"
  },
  {
    "id": "close",
    "name": "The Year-End Close",
    "short": "Close",
    "emoji": "🗓️"
  },
  {
    "id": "numbers",
    "name": "Working the Numbers",
    "short": "Numbers",
    "emoji": "🧮"
  }
];

var FAR_QUESTIONS = [
  {
    "id": "scorp-1",
    "section": "scorp",
    "topic": "Due date",
    "difficulty": "easy",
    "q": "Riverbend Motors, a calendar-year S corporation, must file its Form 1120-S by",
    "choices": [
      "March 15, or September 15 on a Form 7004 extension",
      "April 15, or October 15 on a Form 4868 extension",
      "March 15, with no extension available",
      "January 31, so the K-1s go out with the W-2s"
    ],
    "answer": 0,
    "explain": "S corporations file by the 15th day of the third month — March 15 for calendar years — and Form 7004 buys six more months to September 15. The early date exists so K-1s reach shareholders before their own returns."
  },
  {
    "id": "scorp-2",
    "section": "scorp",
    "topic": "Tax year",
    "difficulty": "medium",
    "q": "An S corporation dealership must generally use",
    "choices": [
      "A calendar year, unless it makes a §444 election or shows a business purpose",
      "Any fiscal year the shareholders prefer, if adopted on the first return",
      "A fiscal year matching the manufacturer's model year, by election",
      "The same year end as its floor plan lender, unless the lender waives it"
    ],
    "answer": 0,
    "explain": "The permitted year for an S corp is the calendar year. A §444 election allows a limited fiscal year (September–November year ends) at the price of a required payment under §7519 — rarely worth it for a dealership."
  },
  {
    "id": "scorp-3",
    "section": "scorp",
    "topic": "Who pays",
    "difficulty": "easy",
    "q": "The federal income tax on a dealership's S corporation profit is generally paid by",
    "choices": [
      "The shareholders, on the income passed through on their K-1s",
      "The corporation, at the 21% corporate rate",
      "The corporation, at the top individual rate",
      "No one, until the profit is actually distributed to the shareholders"
    ],
    "answer": 0,
    "explain": "The S corp is a pass-through: income, deductions, and credits flow to shareholders on Schedule K-1 and are taxed on their 1040s. Entity-level tax is the exception, not the rule — built-in gains and a few others."
  },
  {
    "id": "scorp-4",
    "section": "scorp",
    "topic": "Late filing",
    "difficulty": "medium",
    "q": "An S corporation that files its 1120-S three months late, owing no tax, faces",
    "choices": [
      "A penalty per shareholder per month — roughly $250, indexed",
      "No penalty at all, because there is no tax due",
      "A flat $50 late-filing fee for the whole return",
      "Only interest on the shareholders' underpayments"
    ],
    "answer": 0,
    "explain": "Section 6699 penalizes late or incomplete S corp returns per shareholder per month, up to twelve months, whether or not tax is due ($245 for returns due in 2025, indexed each year). Three months late with two shareholders is six penalty-months."
  },
  {
    "id": "scorp-5",
    "section": "scorp",
    "topic": "E-filing",
    "difficulty": "medium",
    "q": "Under the current e-file regulations, a corporation must e-file its Form 1120-S if it files",
    "choices": [
      "10 or more returns of any type in the year, counting W-2s and 1099s",
      "250 or more returns of any type in the year, counting W-2s and 1099s",
      "Schedule K-1s for more than 10 shareholders",
      "Any return at all — paper is no longer accepted"
    ],
    "answer": 0,
    "explain": "The 2023 regulations aggregate all information and tax returns: hit ten in a calendar year and the 1120-S must be e-filed. A dealership with a dozen employees' W-2s is over the line from day one."
  },
  {
    "id": "scorp-6",
    "section": "scorp",
    "topic": "K-1 delivery",
    "difficulty": "easy",
    "q": "Schedule K-1s must be furnished to the dealership's shareholders",
    "choices": [
      "By the 1120-S due date, including extensions",
      "By January 31, like W-2s",
      "Within 30 days of the shareholders' request",
      "Within 30 days after the return is filed"
    ],
    "answer": 0,
    "explain": "K-1s travel on the return's timetable — March 15, or September 15 on extension. That is why shareholders of an extended S corp usually extend their own 1040s."
  },
  {
    "id": "scorp-7",
    "section": "scorp",
    "topic": "Reasonable compensation",
    "difficulty": "medium",
    "q": "The dealer principal works 60-hour weeks but takes only distributions and no salary. The exposure is",
    "choices": [
      "Recharacterization of distributions as wages, with payroll taxes and penalties",
      "Loss of the S election for unequal treatment",
      "Nothing — distributions are always the owner's choice",
      "A 20% accuracy penalty on the corporation"
    ],
    "answer": 0,
    "explain": "Shareholder-employees must be paid reasonable compensation before distributions; the IRS reclassifies distributions as wages and collects FICA plus penalties. A working dealer principal with zero W-2 is the textbook audit target."
  },
  {
    "id": "scorp-8",
    "section": "scorp",
    "topic": "Owner health insurance",
    "difficulty": "medium",
    "q": "Health insurance premiums the dealership pays for a 40% shareholder-employee are",
    "choices": [
      "Box 1 wages on the W-2, exempt from FICA, and deductible",
      "A tax-free fringe like any employee's coverage",
      "A nondeductible distribution reported on the K-1",
      "Deductible only on the shareholder's Schedule A"
    ],
    "answer": 0,
    "explain": "For more-than-2% shareholders, premiums go into wages for income tax (not Social Security or Medicare), the corporation deducts them, and the shareholder claims the self-employed health insurance deduction on the 1040."
  },
  {
    "id": "scorp-9",
    "section": "scorp",
    "topic": "QBI",
    "difficulty": "medium",
    "q": "For the qualified business income deduction, an auto dealership is",
    "choices": [
      "Not a specified service business, so the 20% is available",
      "A specified service business, so high-income owners get nothing",
      "Eligible only on the parts and service departments' income",
      "Eligible, but the deduction is capped at the owners' own W-2 wages"
    ],
    "answer": 0,
    "explain": "Selling and servicing cars is not a specified service trade or business. Above the income thresholds the deduction is capped by W-2 wages and unadjusted basis of property — limits a dealership with a payroll and a building usually clears easily."
  },
  {
    "id": "scorp-10",
    "section": "scorp",
    "topic": "Distributions",
    "difficulty": "medium",
    "q": "A shareholder receives distributions exceeding their stock basis. The excess is",
    "choices": [
      "Capital gain to the shareholder",
      "Ordinary income to the shareholder",
      "Tax-free, as a return of capital",
      "A deduction to the corporation"
    ],
    "answer": 0,
    "explain": "Distributions come out tax-free up to basis (tracked on Form 7203 with the 1040); beyond basis they are gain from a deemed sale of stock. Basis worksheets are the preparer's job even though the corporation doesn't file them."
  },
  {
    "id": "scorp-11",
    "section": "scorp",
    "topic": "Schedule B-1",
    "difficulty": "medium",
    "q": "Schedule B-1 of Form 1120-S must be completed when",
    "choices": [
      "Any shareholder is a trust, estate, disregarded entity, or nominee",
      "Any individual owns 50% or more of the stock, directly or indirectly",
      "The corporation has more than one shareholder",
      "The corporation has more than 10 shareholders"
    ],
    "answer": 0,
    "explain": "Schedule B, question 3 asks whether any shareholder during the year was a disregarded entity, a trust, an estate, or a nominee; a Yes brings in Schedule B-1, which names the beneficial owner behind that holder — the dealer principal behind a single-member LLC, the grantor behind a grantor trust. The 50%-owner test belongs to Form 1065's Schedule B-1 and Form 1120's Schedule G; a husband-and-wife dealership at 60/40 with stock held outright never files it."
  },
  {
    "id": "scorp-12",
    "section": "scorp",
    "topic": "Eligible shareholders",
    "difficulty": "medium",
    "q": "Bringing in a corporate investor as a 25% shareholder would",
    "choices": [
      "Terminate the S election the day the shares are issued",
      "Be fine, since the investor holds less than 50%",
      "Require IRS consent on Form 2553",
      "Require the investor to sign the 1120-S"
    ],
    "answer": 0,
    "explain": "Only individuals, estates, certain trusts, and exempt organizations may own S corp stock; a corporation or partnership shareholder ends the election the day it acquires shares. Dealer groups structure investors around this constantly."
  },
  {
    "id": "scorp-13",
    "section": "scorp",
    "topic": "Making the election",
    "difficulty": "medium",
    "q": "For an election to be effective for a calendar year, Form 2553 must be filed",
    "choices": [
      "By March 15 of that year, or any time during the prior year",
      "By December 31 of the prior year only",
      "With the first 1120-S, whenever filed",
      "Within 30 days of incorporation, no exceptions"
    ],
    "answer": 0,
    "explain": "The deadline is the 15th day of the third month of the year the election is to take effect. Late elections get relief under Rev. Proc. 2013-30 if the corporation has behaved like an S corp all along."
  },
  {
    "id": "scorp-14",
    "section": "scorp",
    "topic": "Form 1125-E",
    "difficulty": "medium",
    "q": "Form 1125-E, Compensation of Officers, is required when the dealership's total receipts reach",
    "choices": [
      "$500,000",
      "$250,000",
      "$1,000,000",
      "Any amount — it is always required"
    ],
    "answer": 0,
    "explain": "At $500,000 of total receipts the officer compensation detail is required — which is every dealership. It is also the first place an examiner looks at the reasonable-compensation question."
  },
  {
    "id": "inventory-1",
    "section": "inventory",
    "topic": "Form 1125-A",
    "difficulty": "easy",
    "q": "Cost of goods sold on the 1120-S is computed on",
    "choices": [
      "Form 1125-A",
      "Schedule L",
      "Form 4562",
      "Schedule M-1"
    ],
    "answer": 0,
    "explain": "Form 1125-A walks beginning inventory plus purchases minus ending inventory to COGS, and its checkboxes disclose the valuation method — cost, lower of cost or market, LIFO — plus whether §263A applies."
  },
  {
    "id": "inventory-2",
    "section": "inventory",
    "topic": "New vehicle LIFO",
    "difficulty": "medium",
    "q": "The Alternative LIFO Method for new vehicle dealers (Rev. Proc. 97-36)",
    "choices": [
      "Uses two pools — all new cars and all new light trucks — indexed from invoice prices",
      "Requires a separate pool for each manufacturer, indexed from sticker prices",
      "Is available only to dealers with under $5 million of new-vehicle inventory",
      "Values ending inventory at wholesale auction prices instead of cost"
    ],
    "answer": 0,
    "explain": "Rev. Proc. 97-36 is a dollar-value, link-chain LIFO: all new automobiles go in one pool and all new light-duty trucks in another, whatever the manufacturer, and the index comes from the manufacturer's actual invoice prices for the base vehicle and options, comparing this year's cost with last year's — no Bureau of Labor Statistics index. Rev. Proc. 2008-23 later let a dealer combine cars and light trucks in a single vehicle pool."
  },
  {
    "id": "inventory-3",
    "section": "inventory",
    "topic": "Used vehicle LIFO",
    "difficulty": "medium",
    "q": "For used vehicles, Rev. Proc. 2001-23 lets a dealer compute LIFO using",
    "choices": [
      "Official used-vehicle guide values as the price index",
      "The dealer's own average trade-in allowances",
      "The new-vehicle pool's index applied to used units",
      "A fixed 3% annual inflation assumption"
    ],
    "answer": 0,
    "explain": "The Used Vehicle Alternative LIFO Method builds its index from an official used-car guide (the NADA-style guides), solving the problem that no two used cars have comparable invoice prices."
  },
  {
    "id": "inventory-4",
    "section": "inventory",
    "topic": "LIFO reserve",
    "difficulty": "medium",
    "q": "The LIFO reserve on a dealership's books is",
    "choices": [
      "The excess of current-cost inventory over its LIFO value",
      "A cash account set aside for future inventory purchases",
      "The manufacturer's holdback not yet paid to the dealer",
      "The floor plan balance still owed on unsold vehicles"
    ],
    "answer": 0,
    "explain": "In an inflationary year the reserve grows and the increase is added to COGS, deferring income. The reserve itself is the cumulative deferral — and the amount recaptured if LIFO is abandoned or the corporation converts."
  },
  {
    "id": "inventory-5",
    "section": "inventory",
    "topic": "LIFO conformity",
    "difficulty": "medium",
    "q": "The LIFO conformity requirement means a dealer using LIFO for tax must",
    "choices": [
      "Use LIFO in its year-end financial statements to owners and creditors",
      "Notify the manufacturer before electing",
      "Use LIFO for its parts inventory as well",
      "Obtain the floor plan lender's written consent"
    ],
    "answer": 0,
    "explain": "Section 472(c) requires the LIFO method in financial reports to shareholders and creditors for the year; supplemental non-LIFO disclosures are permitted. Monthly factory statements on a non-LIFO basis are handled with a year-end adjustment and disclosure."
  },
  {
    "id": "inventory-6",
    "section": "inventory",
    "topic": "Electing LIFO",
    "difficulty": "medium",
    "q": "A dealership elects LIFO by",
    "choices": [
      "Attaching Form 970 to the first LIFO-year return",
      "Filing Form 3115 and waiting for IRS approval",
      "Writing a letter to the IRS before year end",
      "Checking the LIFO box on Form 1125-A alone"
    ],
    "answer": 0,
    "explain": "Form 970 with the first-year return does it; the IRS does not pre-approve. Leaving LIFO is the harder direction — an accounting method change on Form 3115 with the reserve coming back into income."
  },
  {
    "id": "inventory-7",
    "section": "inventory",
    "topic": "Trade-ins",
    "difficulty": "medium",
    "q": "A customer's trade is allowed $12,000 on the deal but its actual cash value is $9,500. For tax, the used unit enters inventory at",
    "choices": [
      "$9,500, with the $2,500 over-allowance reducing the new-vehicle sales price",
      "$12,000, the allowance stated in the contract",
      "$9,500, with the $2,500 deducted as a sales expense",
      "$12,000, with the $2,500 written down at year end"
    ],
    "answer": 0,
    "explain": "The over-allowance is a disguised discount on the new car, not part of the trade's cost. Booking trades at ACV keeps used-vehicle gross accurate and is how the IRS audit guide expects it done."
  },
  {
    "id": "inventory-8",
    "section": "inventory",
    "topic": "Reconditioning",
    "difficulty": "medium",
    "q": "Reconditioning costs on a trade-in — tires, detail, mechanical work — are",
    "choices": [
      "Capitalized into that vehicle's inventory cost until it sells",
      "Deducted as service department expense when incurred",
      "Deducted only if the vehicle sells within the year",
      "Added to the LIFO reserve"
    ],
    "answer": 0,
    "explain": "Costs to get a unit front-line ready are part of its inventoriable cost. They come out through COGS on sale; in the DMS this is the internal repair order charged to the vehicle."
  },
  {
    "id": "inventory-9",
    "section": "inventory",
    "topic": "Parts write-downs",
    "difficulty": "medium",
    "q": "The parts manager wants to write down $40,000 of slow-moving parts still on the shelf at full price. For tax,",
    "choices": [
      "No deduction until the parts are scrapped or offered for sale below cost",
      "The write-down is allowed under lower of cost or market",
      "Deductible as an obsolescence reserve, matching the book entry",
      "It is deductible if the manufacturer's return program has closed"
    ],
    "answer": 0,
    "explain": "A book reserve for excess parts is not a tax deduction (Thor Power Tool). Lower-of-cost-or-market needs actual market evidence — the parts sold, scrapped, or actually offered at the reduced price within 30 days of year end."
  },
  {
    "id": "inventory-10",
    "section": "inventory",
    "topic": "§263A",
    "difficulty": "medium",
    "q": "The uniform capitalization rules apply to a dealership's inventory when",
    "choices": [
      "Average gross receipts exceed the indexed threshold, about $31 million",
      "The dealer elects LIFO for its vehicle inventory",
      "Any vehicle stays in inventory more than 90 days",
      "Never — vehicles are exempt as tangible personal property"
    ],
    "answer": 0,
    "explain": "Dealers are resellers under §263A; large ones capitalize purchasing, handling, and storage costs into inventory, usually via the simplified resale method. Below the indexed gross receipts test, the whole regime is switched off."
  },
  {
    "id": "inventory-11",
    "section": "inventory",
    "topic": "Small dealers and the cash method",
    "difficulty": "medium",
    "q": "A used-car lot with $8 million of average gross receipts",
    "choices": [
      "May use the cash method and treat inventory as non-incidental supplies",
      "Must use the accrual method because it carries inventory",
      "May use the cash method only if it carries no floor plan debt",
      "Must use LIFO once its inventory exceeds $1 million"
    ],
    "answer": 0,
    "explain": "Post-2017, businesses under the gross receipts test escape the inventory-forces-accrual rule: §471(c) lets them treat inventory as non-incidental materials and supplies or follow their books. Most franchise stores are over the line; small independents aren't."
  },
  {
    "id": "inventory-12",
    "section": "inventory",
    "topic": "Year-end count",
    "difficulty": "easy",
    "q": "The year-end vehicle count should reconcile to",
    "choices": [
      "The DMS inventory list and the floor plan statement, by VIN",
      "The manufacturer's shipping schedule for the quarter",
      "Last year's ending inventory plus this year's purchases",
      "The sales manager's lot sheet, which counts what's on the ground"
    ],
    "answer": 0,
    "explain": "Three sources must agree by VIN: the physical lot, the DMS, and the lender's floor plan statement. A unit on the floor plan but not on the lot is either sold-out-of-trust or a bookkeeping error — both need answers before the return is filed."
  },
  {
    "id": "inventory-13",
    "section": "inventory",
    "topic": "Layer liquidation",
    "difficulty": "medium",
    "q": "During an inventory shortage the dealership's new-vehicle stock falls from 200 units to 60. Under LIFO the result is",
    "choices": [
      "Liquidation of old low-cost layers, releasing deferred income into the year",
      "No effect — LIFO only matters when inventory grows",
      "A deduction equal to the decline in the LIFO reserve",
      "Income deferred until the pool is rebuilt to its prior level"
    ],
    "answer": 0,
    "explain": "Eating into old layers means old, cheaper costs go through COGS against current prices — the LIFO reserve shrinks and the difference is income. Dealers learned this painfully in the 2021–22 supply crunch."
  },
  {
    "id": "inventory-14",
    "section": "inventory",
    "topic": "Specific identification",
    "difficulty": "medium",
    "q": "Absent a LIFO election, a dealership's vehicle inventory is normally valued by",
    "choices": [
      "Specific identification, each unit at its own cost",
      "Weighted average cost across all units on the lot",
      "FIFO, applied to the vehicle inventory as a whole",
      "The retail method, working back from sticker price"
    ],
    "answer": 0,
    "explain": "Vehicles are unique, serialized goods, so each unit carries its own invoice cost plus capitalized additions. Averaging and retail methods belong to fungible goods; parts inventory uses different conventions than vehicles."
  },
  {
    "id": "floorplan-1",
    "section": "floorplan",
    "topic": "What floor plan is",
    "difficulty": "easy",
    "q": "A dealership's floor plan is",
    "choices": [
      "A revolving line of credit secured by the vehicle inventory it finances",
      "The manufacturer's consignment of unsold vehicles",
      "An operating lease on the showroom building",
      "The deposit the dealer posts with the manufacturer"
    ],
    "answer": 0,
    "explain": "The lender advances the invoice price when a unit arrives and is repaid when it sells; interest accrues daily on each unit. It is the dealership's largest liability and the reason inventory and debt move together."
  },
  {
    "id": "floorplan-2",
    "section": "floorplan",
    "topic": "Interest, not inventory cost",
    "difficulty": "medium",
    "q": "Interest on the floor plan is",
    "choices": [
      "Deducted as interest expense when incurred",
      "Capitalized into each vehicle's inventory cost under §263A",
      "Deductible only when the financed unit sells",
      "Nondeductible as a cost of carrying inventory"
    ],
    "answer": 0,
    "explain": "Section 263A(f) capitalizes interest only for real property and long-production-period property; vehicles are neither. Floor plan interest is an ordinary interest deduction — subject to the §163(j) rules, where it gets its own special status."
  },
  {
    "id": "floorplan-3",
    "section": "floorplan",
    "topic": "§163(j) formula",
    "difficulty": "medium",
    "q": "Under §163(j), deductible business interest is capped at business interest income plus 30% of adjusted taxable income plus",
    "choices": [
      "Floor plan financing interest",
      "Interest on the dealership's real estate loans",
      "Interest on loans from the shareholders",
      "Nothing — the 30% figure is the whole limit"
    ],
    "answer": 0,
    "explain": "Floor plan financing interest sits outside the 30% cap entirely: a dealer's vehicle-inventory interest is always deductible. The trade-off, in some years, is bonus depreciation."
  },
  {
    "id": "floorplan-4",
    "section": "floorplan",
    "topic": "Definition",
    "difficulty": "medium",
    "q": "'Floor plan financing interest' means interest on debt that",
    "choices": [
      "Finances motor vehicles held for sale or lease and is secured by that inventory",
      "Finances any dealership asset, including the building",
      "Is owed to the manufacturer's captive finance arm only",
      "Carries a rate below the applicable federal rate"
    ],
    "answer": 0,
    "explain": "Two tests: the loan funds the acquisition of motor vehicles (including boats, farm machinery, and — after the 2025 act — certain trailers and campers) for sale or lease, and the inventory secures it. A mortgage on the showroom doesn't qualify."
  },
  {
    "id": "floorplan-5",
    "section": "floorplan",
    "topic": "Adjusted taxable income",
    "difficulty": "medium",
    "q": "For tax years beginning after 2024, adjusted taxable income under §163(j) is computed",
    "choices": [
      "With depreciation and amortization added back (an EBITDA-style base)",
      "After subtracting depreciation and amortization (an EBIT-style base)",
      "With depreciation added back only for property placed in service after 2024",
      "Using book income from the factory financial statement"
    ],
    "answer": 0,
    "explain": "The 2025 tax act permanently restored the EBITDA-style computation, so heavy depreciation no longer shrinks the 30% cap. For a dealership with big equipment or building write-offs, that alone can keep all interest deductible without leaning on the floor plan exception."
  },
  {
    "id": "floorplan-6",
    "section": "floorplan",
    "topic": "Small business exemption",
    "difficulty": "medium",
    "q": "A dealership with $22 million of average annual gross receipts",
    "choices": [
      "Is exempt from §163(j) entirely under the small-business gross receipts test",
      "Must apply §163(j) but may skip Form 8990",
      "Is subject to §163(j) on its non-floor-plan interest only",
      "Is subject to §163(j) unless it elects out"
    ],
    "answer": 0,
    "explain": "Under the indexed gross receipts test (about $31 million for 2025), §163(j) doesn't apply at all — unless the business is a tax shelter. Independent lots are usually exempt; franchise stores are usually not."
  },
  {
    "id": "floorplan-7",
    "section": "floorplan",
    "topic": "The bonus depreciation trade-off",
    "difficulty": "medium",
    "q": "A dealership subject to §163(j) could deduct its interest only because of the floor plan exception. For that year it",
    "choices": [
      "Loses bonus depreciation on property placed in service",
      "Loses the §179 deduction on property placed in service",
      "Must capitalize the floor plan interest",
      "Faces no consequence — the exception is free"
    ],
    "answer": 0,
    "explain": "Section 168(k)(9) excludes a floor-plan-financed trade or business from bonus depreciation, but only in a year the exception was actually needed — when interest exceeded interest income plus 30% of ATI. If the regular cap covers everything, bonus is fully available."
  },
  {
    "id": "floorplan-8",
    "section": "floorplan",
    "topic": "Form 8990",
    "difficulty": "medium",
    "q": "Form 8990 is filed by a dealership that",
    "choices": [
      "Is subject to the §163(j) limitation",
      "Uses LIFO for its vehicle inventory",
      "Has any floor plan balance, regardless of size",
      "Claims bonus depreciation"
    ],
    "answer": 0,
    "explain": "Exempt small businesses with no partnership pass-through items skip the form; everyone else subject to the limit files it, showing business interest, ATI, and floor plan interest separately so the exception is visible."
  },
  {
    "id": "floorplan-9",
    "section": "floorplan",
    "topic": "Curtailments",
    "difficulty": "easy",
    "q": "Monthly floor plan curtailment payments are",
    "choices": [
      "Principal reductions — not deductible",
      "Deductible interest",
      "Deductible as inventory carrying costs",
      "Capitalized into the vehicle's cost"
    ],
    "answer": 0,
    "explain": "Lenders require principal paydowns on aging units; those are debt repayments with no tax effect. Only the interest component of the monthly statement is an expense."
  },
  {
    "id": "floorplan-10",
    "section": "floorplan",
    "topic": "Floor plan assistance",
    "difficulty": "medium",
    "q": "The manufacturer pays the dealership 'floor plan assistance' — a credit tied to interest on new units. It is",
    "choices": [
      "Taxable income when the right to it is fixed",
      "Netted against floor plan interest on Form 8990",
      "Excluded from income as a manufacturer rebate",
      "Income only when the manufacturer's check clears the bank"
    ],
    "answer": 0,
    "explain": "Interest credits from the factory are income under the all-events test once the program's terms are met — not an offset to the interest line, since floor plan financing interest under §163(j)(9) is what is actually paid or accrued to the lender. Netting understates both income and the interest shown on Form 8990."
  },
  {
    "id": "floorplan-11",
    "section": "floorplan",
    "topic": "Contracts in transit",
    "difficulty": "medium",
    "q": "At December 31 the dealership has $600,000 of 'contracts in transit' — sold vehicles whose lender funding arrives in January. The sales are",
    "choices": [
      "Income in the year of delivery, with the amounts as receivables",
      "Income in January when the funds arrive",
      "Deferred until the floor plan on each unit is paid off",
      "Recorded only when the titles are transferred"
    ],
    "answer": 0,
    "explain": "The all-events test is met at delivery: the sale is fixed and the amount determinable. Contracts in transit are a receivable, and the floor plan payoff on those units is still owed — both sides of the year-end balance sheet."
  },
  {
    "id": "floorplan-12",
    "section": "floorplan",
    "topic": "Demos on the floor plan",
    "difficulty": "medium",
    "q": "Interest on floor-planned demonstrator vehicles is",
    "choices": [
      "Floor plan financing interest, like any other unit's",
      "Deductible only as ordinary business interest under the 30% cap",
      "Capitalized into the demo's basis as a fixed asset",
      "Deductible only when the demo is finally sold at retail"
    ],
    "answer": 0,
    "explain": "Demonstrators remain inventory, so the debt on them is still floor plan financing. The demo's use by a salesperson raises fringe-benefit questions, not interest questions."
  },
  {
    "id": "floorplan-13",
    "section": "floorplan",
    "topic": "Carryforward",
    "difficulty": "medium",
    "q": "Business interest an S corporation cannot deduct under §163(j)",
    "choices": [
      "Carries forward indefinitely at the corporate level",
      "Passes through to shareholders as excess business interest",
      "Is lost permanently",
      "Is added to the basis of the financed inventory"
    ],
    "answer": 0,
    "explain": "S corporations keep disallowed interest at the entity level and carry it forward — unlike partnerships, which push excess business interest out to partners. It is a book-tax difference to track year over year."
  },
  {
    "id": "floorplan-14",
    "section": "floorplan",
    "topic": "Schedule L",
    "difficulty": "easy",
    "q": "On Schedule L, the floor plan payable is presented as",
    "choices": [
      "A current liability at its gross amount",
      "A reduction of the inventory line",
      "Long-term debt, since the line revolves",
      "An off-balance-sheet item disclosed in a statement"
    ],
    "answer": 0,
    "explain": "Inventory on the asset side, floor plan on the liability side, each at full amount. Netting them would hide the dealership's leverage and break the tie to the lender's statement."
  },
  {
    "id": "sales-1",
    "section": "sales",
    "topic": "When a sale is income",
    "difficulty": "medium",
    "q": "For an accrual-basis dealership, a vehicle sale is income when",
    "choices": [
      "The vehicle is delivered to the customer",
      "The lender funds the retail installment contract",
      "The title work clears the state motor vehicle agency",
      "The customer's payment clears the dealership's bank"
    ],
    "answer": 0,
    "explain": "Delivery fixes the right to payment and the amount; funding, titling, and deposits are collection mechanics. December deliveries funded in January are December income."
  },
  {
    "id": "sales-2",
    "section": "sales",
    "topic": "Doc fees",
    "difficulty": "easy",
    "q": "Documentation fees charged on each deal are",
    "choices": [
      "Ordinary income of the dealership",
      "Pass-through amounts owed to the state",
      "Reductions of the vehicle's inventory cost",
      "Deferred until the title is issued"
    ],
    "answer": 0,
    "explain": "Doc fees are part of the sale price for tax purposes, whatever the state caps them at. Government title and registration fees collected and remitted are the pass-through items."
  },
  {
    "id": "sales-3",
    "section": "sales",
    "topic": "Sales tax collected",
    "difficulty": "easy",
    "q": "Sales tax that state law imposes on the buyer, collected by the dealership and remitted, is",
    "choices": [
      "A liability — excluded from gross receipts",
      "Gross receipts, with the remittance deducted",
      "A reduction of the vehicle's sale price",
      "A deductible state tax when remitted"
    ],
    "answer": 0,
    "explain": "Where the tax is imposed on the buyer — the usual case — the dealership is a collection agent and the tax passes through a liability account; the §448(c) gross-receipts regulations exclude it. In the few states that impose the tax on the seller (California, Arizona, Hawaii, for example) it is gross receipts with the remittance deducted under §164 — same net income, different top line and different gross-receipts tests."
  },
  {
    "id": "sales-4",
    "section": "sales",
    "topic": "Customer rebates",
    "difficulty": "medium",
    "q": "A $2,000 manufacturer rebate on the deal that the buyer applies toward the down payment is",
    "choices": [
      "Not dealer income — the dealer is a conduit for the customer",
      "Dealer income when the manufacturer pays the claim",
      "A reduction of the vehicle's cost of goods sold",
      "A deductible sales incentive when the deal is delivered"
    ],
    "answer": 0,
    "explain": "The rebate belongs to the customer; the dealer is a conduit. The deal shows the full sale price with the rebate applied as payment, and the factory receivable clears when the check arrives."
  },
  {
    "id": "sales-5",
    "section": "sales",
    "topic": "Dealer incentives",
    "difficulty": "medium",
    "q": "The manufacturer pays a $50,000 stair-step bonus for hitting the quarter's volume target. The bonus is",
    "choices": [
      "Income when the target is met, whether paid in December or January",
      "Income only when received",
      "A reduction of inventory cost for the units sold",
      "Deferred over the following quarter"
    ],
    "answer": 0,
    "explain": "Once the sales target is hit, the right to the bonus is fixed and the amount determinable — the all-events test is satisfied. Sales-triggered incentives are income; purchase-tied incentives are a different animal."
  },
  {
    "id": "sales-6",
    "section": "sales",
    "topic": "Holdback",
    "difficulty": "medium",
    "q": "Manufacturer holdback — the slice of each new unit's price the factory returns to the dealer periodically — is fixed",
    "choices": [
      "When the vehicle is invoiced by the manufacturer",
      "When the vehicle is sold and delivered at retail",
      "When the quarterly holdback check arrives",
      "At year end, based on the units still on hand"
    ],
    "answer": 0,
    "explain": "Holdback is earned on purchase, not sale, so an accrual dealer's right to it is fixed as the manufacturer invoices the unit. Treating it instead as a purchase-price adjustment that reduces vehicle cost pushes the effect into cost of goods sold when the unit sells — a method to be applied consistently, not a year-end choice, and one the IRS audit guide tests against the income-at-invoice treatment."
  },
  {
    "id": "sales-7",
    "section": "sales",
    "topic": "Co-op advertising",
    "difficulty": "medium",
    "q": "Manufacturer co-op advertising reimbursements are",
    "choices": [
      "Taxable when earned, as income or as an offset to ad expense",
      "Excluded from income as a manufacturer rebate",
      "Deferred until the advertising campaign has run",
      "Capitalized as a marketing intangible and amortized"
    ],
    "answer": 0,
    "explain": "Either presentation nets to the same taxable income, but the timing is when the reimbursement is earned under the program's terms. A common year-end miss is the December claim paid in February."
  },
  {
    "id": "sales-8",
    "section": "sales",
    "topic": "Over-allowance",
    "difficulty": "medium",
    "q": "Paying $3,000 over actual cash value on a trade to make a new-car deal work is, for tax,",
    "choices": [
      "A discount on the new-vehicle sale price",
      "An addition to the used unit's inventory cost",
      "An advertising expense",
      "A bad debt when the trade is wholesaled"
    ],
    "answer": 0,
    "explain": "The over-allowance reduces the sale price of the new vehicle; the trade goes into inventory at its actual cash value. Booking it any other way misstates both departments' gross."
  },
  {
    "id": "sales-9",
    "section": "sales",
    "topic": "We-owes",
    "difficulty": "medium",
    "q": "At year end the dealership owes customers $18,000 of promised accessories and repairs ('we-owes'). The accrued liability is deductible",
    "choices": [
      "When the work is done, or under the recurring-item exception",
      "In full at year end, since the customers are legally owed",
      "Never, because the liability is contingent on the customer",
      "Only when each customer signs off on the completed work"
    ],
    "answer": 0,
    "explain": "The all-events test is met at the sale, but §461(h) waits for performance — the accessory installed, the repair done. The recurring-item exception lets accrual dealers deduct year-end we-owes performed by the earlier of the return's filing date or 8½ months after year end, provided the exception has been adopted for that type of item."
  },
  {
    "id": "sales-10",
    "section": "sales",
    "topic": "Warranty claims",
    "difficulty": "medium",
    "q": "Warranty repair work billed to the manufacturer is income",
    "choices": [
      "When the repair order is completed",
      "When the manufacturer approves the claim",
      "When the payment posts to the parts statement",
      "Never — it is a reimbursement of cost"
    ],
    "answer": 0,
    "explain": "Completing the repair fixes the dealership's right to payment under the warranty agreement. The factory receivable at year end is income already earned — a frequent reconciliation item between the DMS and the return."
  },
  {
    "id": "sales-11",
    "section": "sales",
    "topic": "Sublet repairs",
    "difficulty": "easy",
    "q": "Service work sent to an outside shop and billed to the customer with a markup is reported",
    "choices": [
      "As service revenue with the outside charge in cost of sales",
      "Net — only the dealership's markup is income",
      "As a customer deposit until the outside shop's invoice is paid",
      "As a commission earned from the outside shop"
    ],
    "answer": 0,
    "explain": "Sublet is the dealership's sale: full revenue on top, the vendor's invoice in cost of sales. The vendor may also need a 1099-NEC if unincorporated."
  },
  {
    "id": "sales-12",
    "section": "sales",
    "topic": "Customer deposits",
    "difficulty": "easy",
    "q": "A $5,000 refundable deposit on a vehicle arriving next quarter is",
    "choices": [
      "A liability until the sale",
      "Income when received",
      "Income at the earlier of delivery or 60 days",
      "Income only if the customer forfeits it"
    ],
    "answer": 0,
    "explain": "A refundable deposit isn't income yet — the customer, not the dealer, controls it — and it becomes part of the sale on delivery. A non-refundable deposit is an advance payment: income on receipt under the full-inclusion method, or next year at the latest under the §451(c) deferral method, which for a first-quarter delivery is the year of the sale anyway."
  },
  {
    "id": "sales-13",
    "section": "sales",
    "topic": "Wholesale losses",
    "difficulty": "easy",
    "q": "A trade-in wholesaled at auction for $1,500 less than its inventory cost produces",
    "choices": [
      "An ordinary loss through cost of goods sold",
      "A capital loss",
      "A nondeductible write-down until the year-end inventory valuation",
      "A deduction only if the vehicle was held over a year"
    ],
    "answer": 0,
    "explain": "Inventory sales are ordinary in both directions. Wholesale losses flow through COGS like any other unit — just at a worse gross."
  },
  {
    "id": "sales-14",
    "section": "sales",
    "topic": "Prepaid maintenance",
    "difficulty": "medium",
    "q": "The dealership sells $30,000 of prepaid maintenance plans in December covering the next three years. Under §451(c) it may",
    "choices": [
      "Defer the portion not yet earned, but only until next year",
      "Spread the income over the three years of service",
      "Defer everything until the services are performed",
      "Exclude it as a customer deposit until service begins"
    ],
    "answer": 0,
    "explain": "The advance payment deferral method gives one year, not the contract term: recognize this year what an audited financial statement recognizes (or, without an AFS, the portion earned), and everything remaining hits income next year regardless of when the oil changes happen."
  },
  {
    "id": "evcredits-1",
    "section": "evcredits",
    "topic": "Dealer registration",
    "difficulty": "easy",
    "q": "For a customer to transfer a clean vehicle credit to Riverbend at the point of sale, the dealership must first",
    "choices": [
      "Be registered with the IRS through Energy Credits Online",
      "Have the manufacturer certify it through Energy Credits Online",
      "File Form 8936 with the IRS on the customer's behalf before delivery",
      "Obtain a transfer authorization number from the manufacturer for each sale"
    ],
    "answer": 0,
    "explain": "Only dealers registered in IRS Energy Credits Online can submit time-of-sale reports and receive advance payments. Registration requires the dealership to be current on its own federal filings and can be suspended if it falls behind."
  },
  {
    "id": "evcredits-2",
    "section": "evcredits",
    "topic": "Advance payments",
    "difficulty": "medium",
    "q": "Riverbend takes a $7,500 credit transfer on a new EV, reduces the customer's price by $7,500, and receives $7,500 from the IRS two days later. On the dealership's return the IRS payment is",
    "choices": [
      "Excluded from gross income, and the price cut isn't deductible",
      "Ordinary income, offset by a $7,500 deduction",
      "A reduction of the vehicle's cost of goods sold",
      "Income only if the customer's return is later adjusted"
    ],
    "answer": 0,
    "explain": "The statute makes the advance payment tax-neutral to the dealer: not income, and the matching amount passed to the buyer not a deduction. The sale is still recorded at the full price, with the transferred credit shown as a payment on the deal."
  },
  {
    "id": "evcredits-3",
    "section": "evcredits",
    "topic": "Termination date",
    "difficulty": "easy",
    "q": "Under the 2025 tax act, the new clean vehicle credit under §30D is unavailable for vehicles",
    "choices": [
      "Acquired after September 30, 2025",
      "Placed in service after December 31, 2025",
      "Sold after July 4, 2025, the date of enactment",
      "Acquired after December 31, 2032 — the original sunset stands"
    ],
    "answer": 0,
    "explain": "The act moved the §30D sunset from 2032 to vehicles acquired after September 30, 2025, and did the same to the used (§25E) and commercial (§45W) credits. After that date the only credits left to report are on vehicles a customer had already acquired under a written binding contract with a payment made by the deadline."
  },
  {
    "id": "evcredits-4",
    "section": "evcredits",
    "topic": "Binding contracts",
    "difficulty": "medium",
    "q": "A customer signed a binding purchase contract and paid a deposit on September 25, 2025 for an EV delivered in November. Under the IRS guidance that followed the act, the credit is",
    "choices": [
      "Still available, claimed when the vehicle is placed in service",
      "Lost — the vehicle was placed in service after September 30",
      "Available on the customer's return, but no longer transferable to the dealer",
      "Available only if the vehicle was delivered by December 31, 2025"
    ],
    "answer": 0,
    "explain": "The IRS treated a written binding contract plus a payment made on or before September 30, 2025 as an acquisition by the deadline, with the credit claimed (and any transfer reported) when the vehicle is later placed in service. Document the contract date and the deposit."
  },
  {
    "id": "evcredits-5",
    "section": "evcredits",
    "topic": "Used vehicle credit",
    "difficulty": "medium",
    "q": "The previously-owned clean vehicle credit under §25E, for sales through September 30, 2025, was",
    "choices": [
      "30% of the price, capped at $4,000",
      "A flat $4,000 on any used EV under $25,000",
      "$7,500, the same as the new-vehicle credit",
      "30% of the price with no dollar cap"
    ],
    "answer": 0,
    "explain": "Used credit terms: 30% of the sale price capped at $4,000, sale price $25,000 or less, model year at least two years older than the sale year, bought from a dealer, and the vehicle's first qualified resale. Buyer income limits were half the new-vehicle limits."
  },
  {
    "id": "evcredits-6",
    "section": "evcredits",
    "topic": "Buyer eligibility",
    "difficulty": "medium",
    "q": "A buyer who transferred a credit to the dealership turns out to have income above the limit. The consequence is",
    "choices": [
      "The buyer repays it on their own return; the dealer is not liable",
      "The dealer must return the advance payment to the IRS",
      "The buyer and the dealer are jointly liable for the $7,500",
      "Neither repays — the dealer's reliance on the attestation cures it"
    ],
    "answer": 0,
    "explain": "The dealer relies on the buyer's attestation of eligibility. If the attestation was wrong, the buyer's tax goes up by the credit amount; the advance payment to a properly registered dealer that filed its report stands."
  },
  {
    "id": "evcredits-7",
    "section": "evcredits",
    "topic": "Seller reports",
    "difficulty": "medium",
    "q": "A customer prefers to claim the credit on her own return rather than transfer it. The dealership",
    "choices": [
      "Submits the time-of-sale report through Energy Credits Online",
      "Has no filing obligation — the buyer handles Form 8936",
      "Gives the buyer a signed invoice showing the VIN and credit amount instead",
      "Submits the report only if the buyer requests it in writing"
    ],
    "answer": 0,
    "explain": "No seller report, no credit: the IRS matches every §30D and §25E claim to a dealer-submitted report. Transfer or not, the report is due within three days of the sale, and the buyer gets a copy."
  },
  {
    "id": "evcredits-8",
    "section": "evcredits",
    "topic": "Dealership's own EVs",
    "difficulty": "medium",
    "q": "Riverbend bought two EVs for its own shuttle fleet in August 2025. The qualified commercial clean vehicle credit under §45W",
    "choices": [
      "Applies, up to $7,500 per vehicle under 14,000 pounds",
      "Does not apply — dealers are excluded as resellers",
      "Applies only to vehicles over 14,000 pounds",
      "Was already repealed for 2025 purchases"
    ],
    "answer": 0,
    "explain": "Business-use vehicles acquired by September 30, 2025 qualified for §45W: the lesser of 15% of basis (30% if no gas engine) or the incremental cost, capped at $7,500 under 14,000 pounds. The credit reduces the vehicles' depreciable basis. Acquisitions after that date get nothing."
  },
  {
    "id": "evcredits-9",
    "section": "evcredits",
    "topic": "Charging stations",
    "difficulty": "medium",
    "q": "The dealership installs $180,000 of customer charging stations in 2026 at a location in an eligible census tract. The alternative fuel refueling property credit under §30C",
    "choices": [
      "Is available if the property is placed in service by June 30, 2026",
      "Ended for property acquired after September 30, 2025, with the vehicle credits",
      "Is available for property placed in service through December 31, 2026",
      "Is capped at $30,000 per location, as under prior law"
    ],
    "answer": 0,
    "explain": "The 2025 act cut §30C off for property placed in service after June 30, 2026 — a later date than the vehicle credits. For business property the credit is 6% (30% with prevailing wage and apprenticeship) up to $100,000 per item, only in low-income or non-urban census tracts, and it reduces the chargers' basis."
  },
  {
    "id": "evcredits-10",
    "section": "evcredits",
    "topic": "Manufacturer reimbursements",
    "difficulty": "medium",
    "q": "The manufacturer reimburses Riverbend $60,000 toward the required charger installation. For tax the reimbursement is",
    "choices": [
      "Income, with the chargers depreciated at their full cost",
      "A reduction of the chargers' depreciable basis, dollar for dollar",
      "A nontaxable contribution to capital",
      "Deferred over the chargers' recovery period"
    ],
    "answer": 0,
    "explain": "A manufacturer's program payment is income under §61: it is consideration for meeting a franchise requirement, not a contribution to the dealership's capital under §118, and the asset keeps its full basis for depreciation and any §30C credit. The timing follows the program's terms, usually completion."
  },
  {
    "id": "evcredits-11",
    "section": "evcredits",
    "topic": "Facility image programs",
    "difficulty": "medium",
    "q": "A facility image program pays $250,000 when the showroom renovation is certified, refundable if the dealership drops the franchise within five years. The payment is",
    "choices": [
      "Income when certified — a later refund is a deduction when repaid",
      "Deferred over the five-year commitment — the refund clause keeps it contingent",
      "A reduction of the renovation's depreciable basis",
      "Income only when the five-year refund period expires"
    ],
    "answer": 0,
    "explain": "Claim of right: money received without restriction on its use is income when received, even if a future event could require repayment. If the clawback ever happens, §1341 or an ordinary deduction handles it in that later year."
  },
  {
    "id": "evcredits-12",
    "section": "evcredits",
    "topic": "Volume bonuses",
    "difficulty": "medium",
    "q": "Riverbend hits its quarterly volume target on December 28, but the manufacturer can charge the bonus back if any counted sale unwinds. The bonus is",
    "choices": [
      "Income in December; a chargeback is a deduction when it occurs",
      "Income only when the chargeback window closes",
      "Income when the manufacturer's statement credits it",
      "Income in December, net of a reserve for expected chargebacks"
    ],
    "answer": 0,
    "explain": "The right to the bonus is fixed when the target is hit — a possible chargeback is a contingency handled later, not a reason to wait. Manufacturer statements confirm the number; they do not set the timing."
  },
  {
    "id": "evcredits-13",
    "section": "evcredits",
    "topic": "Dealer cash vs customer cash",
    "difficulty": "easy",
    "q": "On one deal the manufacturer pays $1,000 of 'dealer cash' to the dealership and offers the buyer a $2,000 customer rebate assigned to the dealer. Beyond the vehicle's sale price itself, the dealership's income includes",
    "choices": [
      "The $1,000 only",
      "Both amounts — $3,000",
      "The $2,000 only",
      "Neither — both are rebates"
    ],
    "answer": 0,
    "explain": "Dealer cash is the dealership's incentive; the customer rebate is the buyer's money, collected as a payment on the deal and passed through. Mixing the two on the statement is a common reconciliation error at year end."
  },
  {
    "id": "evcredits-14",
    "section": "evcredits",
    "topic": "CSI bonuses",
    "difficulty": "medium",
    "q": "A customer-satisfaction bonus is computed from surveys the manufacturer tallies for the quarter ending December 31 and paid in February. For a calendar-year dealership it is",
    "choices": [
      "Income for the year the quarter ends",
      "Income in February when paid",
      "Income in the year the manufacturer issues its final statement",
      "Deferred until all surveys are returned"
    ],
    "answer": 0,
    "explain": "The measurement period closes on December 31 and the amount can be determined from the results, so the all-events test is met at year end — the February check is collection. Estimate it from the manufacturer's preliminary scores if the final statement arrives after the books close."
  },
  {
    "id": "evcredits-15",
    "section": "evcredits",
    "topic": "Loyalty cash",
    "difficulty": "easy",
    "q": "For the dealership, 'loyalty cash' the manufacturer offers to buyers who already own its brand is",
    "choices": [
      "The customer's incentive, collected as a payment on the deal",
      "Income when the deal is delivered",
      "A reduction of the vehicle's inventory cost",
      "Income when the manufacturer's statement credits it"
    ],
    "answer": 0,
    "explain": "Any factory incentive directed to the buyer is the buyer's, whatever it is called; the dealership only collects it. The deal shows the full price with loyalty cash as a form of payment."
  },
  {
    "id": "evcredits-16",
    "section": "evcredits",
    "topic": "Spiffs through payroll",
    "difficulty": "easy",
    "q": "The dealership pays its salespeople $200 per EV sold from a manufacturer-funded spiff program routed through the store. The $200 payments are",
    "choices": [
      "Wages subject to withholding and FICA",
      "Reported on Form 1099-NEC by the dealership",
      "Reported on Form 1099-NEC by the manufacturer",
      "Excluded as employee achievement awards"
    ],
    "answer": 0,
    "explain": "Once the money passes through the dealership's payroll, it is compensation from the employer. Only spiffs the manufacturer pays straight to the salesperson are the manufacturer's to report — on Form 1099-MISC, box 3, as other income, since Rev. Rul. 70-337 treats them as neither wages nor self-employment income."
  },
  {
    "id": "evcredits-17",
    "section": "evcredits",
    "topic": "Carryover allowances",
    "difficulty": "medium",
    "q": "When the new model year arrives, the manufacturer pays a 'carryover allowance' of 4% of MSRP on prior-year units still in Riverbend's stock. The allowance is",
    "choices": [
      "A reduction of those units' inventory cost",
      "Income when paid",
      "A reduction of cost of goods sold in the year paid",
      "A reduction of the LIFO reserve"
    ],
    "answer": 0,
    "explain": "An incentive tied to units in inventory — not to a sale — is a purchase-price adjustment, so it lowers the cost of the specific vehicles and reaches income through cost of goods sold when they sell. Sale-triggered incentives, by contrast, are income when earned."
  },
  {
    "id": "evcredits-18",
    "section": "evcredits",
    "topic": "Leased EVs",
    "difficulty": "medium",
    "q": "A customer leases an EV through the manufacturer's captive finance company, which claims the commercial credit and passes $7,500 to the customer as a lease incentive. For the dealership, the incentive is",
    "choices": [
      "A customer payment applied to the deal",
      "Dealership income when the lease is funded",
      "A transferred credit reported on the time-of-sale report",
      "A reduction of the vehicle's cost"
    ],
    "answer": 0,
    "explain": "On a lease the lessor owns the vehicle and takes the §45W credit; the dealer never touches the credit itself. The incentive is just another form of capitalized cost reduction on the deal, and no Energy Credits Online report is filed by the dealer."
  },
  {
    "id": "evcredits-19",
    "section": "evcredits",
    "topic": "Transfer limits",
    "difficulty": "medium",
    "q": "A customer buying a new EV and a used EV in the same year for personal use may transfer at the point of sale",
    "choices": [
      "Two credits, at most one of them for the used vehicle",
      "One credit per year, of either kind",
      "Any number of credits, one per vehicle",
      "Only the new-vehicle credit; used credits can't be transferred"
    ],
    "answer": 0,
    "explain": "The transfer election is limited to two per taxpayer per year, and no more than one under §25E. The rule bit families buying two EVs and a used one in the same year during the program."
  },
  {
    "id": "evcredits-20",
    "section": "evcredits",
    "topic": "MSRP caps",
    "difficulty": "easy",
    "q": "For the new clean vehicle credit, the MSRP limit for a pickup, SUV, or van was",
    "choices": [
      "$80,000",
      "$55,000",
      "$100,000",
      "No limit — only the buyer's income was tested"
    ],
    "answer": 0,
    "explain": "Vans, SUVs and pickups capped at $80,000 MSRP; other vehicles at $55,000. Both limits were tested against the manufacturer's suggested retail price, not the negotiated price — a point dealers had to explain when a deal came in under the cap."
  },
  {
    "id": "evcredits-21",
    "section": "evcredits",
    "topic": "State rebates",
    "difficulty": "easy",
    "q": "A state consumer EV rebate program pays its $2,000 rebate to the dealership at the point of sale rather than to the buyer. The dealership treats it as",
    "choices": [
      "A payment on the customer's deal",
      "Taxable income",
      "A reduction of the vehicle's cost",
      "A nontaxable government grant"
    ],
    "answer": 0,
    "explain": "State point-of-sale rebates belong to the buyer, exactly like a customer rebate from the manufacturer: the dealer applies the money to the price and reports the full sale. Grant money paid to the dealership for its own account — chargers, for instance — is the dealership's income."
  },
  {
    "id": "evcredits-22",
    "section": "evcredits",
    "topic": "Gross receipts",
    "difficulty": "easy",
    "q": "On a $52,000 EV sale where the buyer transferred a $7,500 credit, the dealership's gross receipts include",
    "choices": [
      "$52,000",
      "$44,500",
      "$59,500",
      "$44,500, with the $7,500 IRS payment as other income"
    ],
    "answer": 0,
    "explain": "The credit is a payment the buyer made with the government's money; the sale price does not change. The IRS advance payment then arrives outside income. Reporting $44,500 understates receipts and every gross-receipts test that keys off them."
  },
  {
    "id": "evcredits-23",
    "section": "evcredits",
    "topic": "Report deadline",
    "difficulty": "easy",
    "q": "A salesperson forgets to submit a time-of-sale report for an EV delivered on a Friday. The report window is",
    "choices": [
      "Three calendar days after the sale",
      "Fifteen days, like Form 8300",
      "Thirty days after the end of the month",
      "Until the buyer files their return"
    ],
    "answer": 0,
    "explain": "Energy Credits Online expects the report within three calendar days, and the system does not accept a routine late submission — the buyer's credit (and any advance payment) then depends on whatever correction window the IRS is offering. Weekend deliveries need Monday follow-up."
  },
  {
    "id": "evcredits-24",
    "section": "evcredits",
    "topic": "Backdated deals",
    "difficulty": "medium",
    "q": "Two units short of December's volume target, the dealership reports two January deliveries as December sales and books the $50,000 bonus. On the return",
    "choices": [
      "Both the sales and the bonus belong in the following year",
      "The bonus is December income if the manufacturer pays it",
      "The sales move to January but the bonus stays in December",
      "The sales stay in December if the units were invoiced before year end"
    ],
    "answer": 0,
    "explain": "Income is recognized on delivery, and the bonus isn't fixed until the target is genuinely met — which it wasn't. Backdated deals are a standard exam item for dealerships because they distort both the income year and the manufacturer's incentive."
  },
  {
    "id": "fi-1",
    "section": "fi",
    "topic": "Finance reserve",
    "difficulty": "medium",
    "q": "The lender pays Riverbend a 'dealer participation' of $900 on a retail contract it assigns in December, subject to chargeback if the loan pays off early. The $900 is",
    "choices": [
      "Income in December, when the contract is assigned",
      "Income only after the chargeback period ends",
      "Deferred and recognized over the loan term",
      "Income when the lender's monthly statement arrives"
    ],
    "answer": 0,
    "explain": "Under the claim-of-right and all-events principles, the reserve is income when the contract is assigned and the amount fixed. A possible future chargeback is a contingency handled when it happens, not a reason to wait."
  },
  {
    "id": "fi-2",
    "section": "fi",
    "topic": "Chargeback reserve",
    "difficulty": "medium",
    "q": "The controller books a $60,000 reserve for expected finance-reserve chargebacks. For tax, the reserve is",
    "choices": [
      "Not deductible — chargebacks are deducted only when they actually occur",
      "Deductible as a reasonable estimate",
      "Deductible only to the extent of last year's actual chargebacks",
      "Not deductible until the reserve is reversed on the books"
    ],
    "answer": 0,
    "explain": "Reserves for estimated future events fail the all-events and economic-performance tests. The book reserve becomes a Schedule M-1 add-back; each real chargeback is deducted when charged."
  },
  {
    "id": "fi-3",
    "section": "fi",
    "topic": "Agent contracts",
    "difficulty": "medium",
    "q": "Riverbend sells a third-party administrator's service contracts and keeps a commission. The commission is",
    "choices": [
      "Income at the time of sale",
      "Deferred over the contract term",
      "Income when the administrator remits its statement",
      "Excluded — the administrator reports it"
    ],
    "answer": 0,
    "explain": "When someone else is the obligor, the dealer's piece is earned commission the day the contract is sold. Only a dealer that stands behind the contract itself gets to talk about deferral."
  },
  {
    "id": "fi-4",
    "section": "fi",
    "topic": "Dealer-obligor contracts",
    "difficulty": "medium",
    "q": "For service contracts on which the dealership itself is the obligor, the price collected up front is",
    "choices": [
      "An advance payment: the earned part this year, the rest next year",
      "Deferred ratably over the full term of the contract",
      "Income in full when collected, with no deferral allowed",
      "Deferred until the first claim is paid under the contract"
    ],
    "answer": 0,
    "explain": "Section 451(c)'s deferral method gives one year, not the contract term: recognize this year what the audited financial statements recognize — or, with no AFS, the portion earned — and whatever remains is income in the following year, claims or no claims."
  },
  {
    "id": "fi-5",
    "section": "fi",
    "topic": "Service warranty income method",
    "difficulty": "medium",
    "q": "Rev. Proc. 97-38 allows a dealer that buys third-party insurance to back multi-year service contracts to",
    "choices": [
      "Spread the insured portion of the contract price over the contract term",
      "Deduct the full insurance premium in year one",
      "Exclude the contract price from income entirely",
      "Report the contracts on the installment method"
    ],
    "answer": 0,
    "explain": "The service warranty income method: the amount paid for the insurance policy is included ratably (with an interest-like adjustment) over the contract period, while the dealer's markup is income at sale. It needs an election and consistent application."
  },
  {
    "id": "fi-6",
    "section": "fi",
    "topic": "GAP and credit products",
    "difficulty": "medium",
    "q": "Commissions on GAP waivers and credit life sold in the F&I office are",
    "choices": [
      "Income at sale, with cancellation refunds deducted when paid",
      "Deferred ratably over the term of the loan",
      "Income only when the insurer pays the commission",
      "Reported net of an estimated cancellation reserve"
    ],
    "answer": 0,
    "explain": "Same pattern as finance reserve: fixed at sale, so taxed at sale; cancellations are events, not estimates. A reserve for expected cancellations is a book entry the return adds back."
  },
  {
    "id": "fi-7",
    "section": "fi",
    "topic": "Reinsurance companies",
    "difficulty": "medium",
    "q": "The owners set up a producer-owned reinsurance company to reinsure the store's F&I products. For tax purposes it is",
    "choices": [
      "A separate insurance company filing its own return",
      "Part of the dealership's 1120-S, as a division",
      "Disregarded, since the owners are the same people",
      "A qualified subchapter S subsidiary of the dealership"
    ],
    "answer": 0,
    "explain": "The dealer's affiliated reinsurer files separately, frequently electing §831(b) — a small insurance company taxed only on investment income when premiums stay under an indexed cap (about $2.85 million for 2025). Premiums flowing to a related insurer draw IRS scrutiny, so the pricing needs to be arm's length."
  },
  {
    "id": "fi-8",
    "section": "fi",
    "topic": "Cancellations",
    "difficulty": "medium",
    "q": "A customer cancels a service contract; the dealership refunds $1,200 of unearned premium. The refund is",
    "choices": [
      "A reduction of income in the year of the refund",
      "A bad-debt deduction",
      "An adjustment to the prior year's return",
      "Nondeductible, since the original income was already taxed"
    ],
    "answer": 0,
    "explain": "Refunds of previously reported income are deductible when paid — the annual accounting principle at work. The prior year stays as filed."
  },
  {
    "id": "fi-9",
    "section": "fi",
    "topic": "Products on leases",
    "difficulty": "easy",
    "q": "F&I products sold on a lease deal are treated",
    "choices": [
      "The same as on a retail sale, product by product",
      "As part of the lease payment stream, income as paid",
      "As income only when the lease term ends",
      "As manufacturer incentives excluded from income"
    ],
    "answer": 0,
    "explain": "The lease changes the vehicle's tax treatment, not the F&I products'. Commission products are income at sale; dealer-obligor products follow the advance payment rules."
  },
  {
    "id": "fi-10",
    "section": "fi",
    "topic": "Claims",
    "difficulty": "medium",
    "q": "For dealer-obligor service contracts, the cost of repair claims handled in the dealership's own shop is",
    "choices": [
      "Deductible when the repair is performed",
      "Deductible when accrued against the contract",
      "Netted against the deferred contract income",
      "Nondeductible, as costs of the dealer's own warranty"
    ],
    "answer": 0,
    "explain": "Claims are ordinary costs deducted when the repair happens. The trap runs the other way: income deferred under §451(c) can outrun the claims, leaving a taxable mismatch in year two."
  },
  {
    "id": "fi-11",
    "section": "fi",
    "topic": "Flat fees",
    "difficulty": "easy",
    "q": "Lenders that pay a flat fee per contract instead of a rate participation create",
    "choices": [
      "Income when the contract is assigned",
      "A nontaxable referral fee paid by the lender",
      "Income only once the lender issues a 1099",
      "A reduction of the vehicle's sale price"
    ],
    "answer": 0,
    "explain": "The label changes nothing: a fixed amount payable on assignment is income on assignment. The form of the lender's compensation matters to regulators, not to the timing rule."
  },
  {
    "id": "fi-12",
    "section": "fi",
    "topic": "F&I commissions payable",
    "difficulty": "medium",
    "q": "F&I manager commissions earned in December and paid in February are deductible in the earlier year if",
    "choices": [
      "Paid by March 15, and the manager holds no stock in the dealership",
      "Accrued on the books before year end, regardless of when paid",
      "Agreed to in writing by the manager before year end",
      "Paid before the 1120-S is filed, including extensions"
    ],
    "answer": 0,
    "explain": "Accrued compensation deducted in the year earned must be paid within 2½ months of year end, or it slides to the year paid. Compensation to anyone who owns stock in the S corporation — or is related to a shareholder — is stricter under §267(a)(2) and (e): deductible only in the year the payee includes it, whatever the percentage owned."
  },
  {
    "id": "fi-13",
    "section": "fi",
    "topic": "In-house financing",
    "difficulty": "medium",
    "q": "A buy-here-pay-here dealership carries its own retail notes. Interest on the notes is",
    "choices": [
      "Ordinary income as it accrues, with the sale taxed at delivery",
      "Deferred until the note is collected in full",
      "Recognized under the installment method, with the sale",
      "Portfolio interest, separately stated on Schedule K"
    ],
    "answer": 0,
    "explain": "Section 453(b)(2)(A) bars the installment method for dealer dispositions, so the full sale price is income at delivery even though cash arrives over three years; the interest is then ordinary income as earned. Cash-flow pain is the BHPH model's tax signature."
  },
  {
    "id": "fi-14",
    "section": "fi",
    "topic": "Repossessions",
    "difficulty": "medium",
    "q": "A BHPH note with $7,000 remaining is defaulted; the repossessed vehicle is worth $4,000. The dealership recognizes",
    "choices": [
      "A $3,000 bad-debt deduction, with the vehicle entering inventory at $4,000",
      "A $7,000 bad-debt deduction and a $4,000 gain on later resale",
      "No deduction until the vehicle is resold",
      "A capital loss of $3,000"
    ],
    "answer": 0,
    "explain": "Specific charge-off: the uncollectible balance beyond the collateral's value is the deduction, and the repo goes back into inventory at fair market value. No reserve for expected defaults is allowed."
  },
  {
    "id": "parts-1",
    "section": "parts",
    "topic": "Reconditioning",
    "difficulty": "medium",
    "q": "A trade-in comes in at a $12,000 actual cash value. The service department installs $800 of parts (at cost) and bills $600 of internal labor (at cost) to recondition it, and it sells for $16,500. The taxable gross profit on the unit is",
    "choices": [
      "$3,100",
      "$4,500",
      "$3,700",
      "$3,900"
    ],
    "answer": 0,
    "explain": "Reconditioning is part of the unit's inventory cost: $12,000 + $800 + $600 = $13,400, so the gross profit is $3,100. Expensing the recon in the service department overstates that department and understates the used car."
  },
  {
    "id": "parts-2",
    "section": "parts",
    "topic": "Internal repair orders",
    "difficulty": "medium",
    "q": "The factory statement shows $900,000 of 'internal' service sales — work on the dealership's own inventory — at retail rates. For the return, that revenue",
    "choices": [
      "Is eliminated; only the cost of the work moves into vehicle inventory",
      "Is ordinary income of the service department",
      "Is income, offset by an equal deduction in the vehicle department",
      "Is deferred until the vehicles sell"
    ],
    "answer": 0,
    "explain": "A business cannot earn income selling to itself. The retail markup on internal repair orders is removed, and the parts and labor at cost become inventory cost of the units worked on — recovered when they sell."
  },
  {
    "id": "parts-3",
    "section": "parts",
    "topic": "Physical count",
    "difficulty": "easy",
    "q": "The year-end parts count comes in $38,000 below the perpetual records. The difference is",
    "choices": [
      "A cost of goods sold adjustment in the year of the count",
      "A theft loss deducted under §165",
      "Ignored — the perpetual system controls",
      "An inventory write-down, allowed only under lower of cost or market"
    ],
    "answer": 0,
    "explain": "Ending inventory on the return is what was actually on the shelves, so shrink, miscounts and unrecorded issues all land in cost of goods sold through the physical. A count is required — perpetual records alone don't support the inventory figure."
  },
  {
    "id": "parts-4",
    "section": "parts",
    "topic": "Parts return program",
    "difficulty": "medium",
    "q": "The manufacturer's parts return program lets Riverbend send back slow-moving parts for credit less a restocking charge. The credit is",
    "choices": [
      "A reduction of purchases, with the restocking charge an expense",
      "Income when the parts statement credits it, net of the restocking charge",
      "A reduction of the obsolescence reserve",
      "Deferred until the credit is used against new orders"
    ],
    "answer": 0,
    "explain": "Returns reverse the original purchase; the restocking fee is the cost of the privilege. Parts sitting in the return bin at year end are still inventory at cost — the write-down waits for the credit or the scrap heap."
  },
  {
    "id": "parts-5",
    "section": "parts",
    "topic": "Core charges",
    "difficulty": "easy",
    "q": "A customer pays a $75 core charge on a remanufactured alternator and returns the old core two weeks later for a refund. The $75 was",
    "choices": [
      "A deposit carried as a liability",
      "Parts sales income, with the refund an expense",
      "A reduction of the reman part's cost",
      "Income until the manufacturer accepts the core"
    ],
    "answer": 0,
    "explain": "Core charges secure the return of the old unit; they are refundable deposits. Forfeited deposits become income when the return period lapses, and the returned cores are inventory until the supplier credits them."
  },
  {
    "id": "parts-6",
    "section": "parts",
    "topic": "Replacement cost method",
    "difficulty": "medium",
    "q": "Riverbend wants to value its $700,000 parts inventory without tracing each part's invoice. The IRS permits a vehicle dealer to",
    "choices": [
      "Value parts at the manufacturer's current replacement cost",
      "Value parts at retail list price less a standard markdown",
      "Skip inventory accounting for parts under $1 million",
      "Expense parts when purchased and count only vehicles"
    ],
    "answer": 0,
    "explain": "Rev. Proc. 2002-17 lets a vehicle dealer treat the manufacturer's current replacement cost of its parts (net of discounts) as their cost for inventory purposes; Rev. Proc. 2006-14 later gave heavy equipment dealers the same safe harbor. Adopting it is an accounting method change on Form 3115."
  },
  {
    "id": "parts-7",
    "section": "parts",
    "topic": "§263A on parts",
    "difficulty": "medium",
    "q": "A dealership above the gross receipts threshold must, for its parts inventory,",
    "choices": [
      "Capitalize purchasing, handling and storage costs",
      "Use LIFO for the parts as well as the vehicles",
      "Value parts at the lower of cost or market only",
      "Expense freight-in as a period cost"
    ],
    "answer": 0,
    "explain": "Resellers subject to UNICAP (average annual gross receipts over $31,000,000 for 2025) add the indirect costs of acquiring and keeping inventory — parts department purchasing, receiving and handling, and any off-site warehousing — to the parts on hand, usually through the simplified resale method. Space inside the dealership's own retail facility is on-site storage, which Reg. §1.263A-3(c)(5) leaves out to the extent it serves on-site retail sales rather than wholesale. Small dealers under the threshold are exempt."
  },
  {
    "id": "parts-8",
    "section": "parts",
    "topic": "Tool allowances",
    "difficulty": "easy",
    "q": "Riverbend pays each technician a $150 monthly 'tool allowance' with no receipts required. The allowance is",
    "choices": [
      "Taxable wages",
      "A nontaxable reimbursement",
      "Deductible equipment cost, depreciated over seven years",
      "Excluded as a de minimis fringe"
    ],
    "answer": 0,
    "explain": "Without substantiation and return of excess, the arrangement is a nonaccountable plan: the allowance is compensation on the W-2. Reimbursing specific tool purchases against receipts under an accountable plan keeps it out of wages."
  },
  {
    "id": "parts-9",
    "section": "parts",
    "topic": "Shop supplies",
    "difficulty": "easy",
    "q": "The service department bills customers a 'shop supplies' charge of 8% of labor. The charge is",
    "choices": [
      "Service income, with the actual supplies deducted as used",
      "A pass-through with no income effect",
      "Income only to the extent it exceeds supplies purchased",
      "Deferred until the supplies are actually consumed"
    ],
    "answer": 0,
    "explain": "The charge is part of the price of the repair. The rags, solvents and fasteners it notionally covers are materials and supplies, deductible when consumed — an inventory of them is tracked only if it is significant."
  },
  {
    "id": "parts-10",
    "section": "parts",
    "topic": "Environmental fees",
    "difficulty": "easy",
    "q": "A dealership-set 'environmental fee' added to repair orders to cover used-oil and tire disposal is",
    "choices": [
      "Income, with the disposal contractor's charges an expense",
      "A liability remitted to the state",
      "Excluded as a reimbursement of disposal costs",
      "Income only when the waste is actually hauled away"
    ],
    "answer": 0,
    "explain": "Unless a state actually imposes and collects the fee, it is the dealership's own charge — income like any other line on the repair order. The haul-away invoices are ordinary expenses."
  },
  {
    "id": "parts-11",
    "section": "parts",
    "topic": "Warranty parts markup",
    "difficulty": "medium",
    "q": "The manufacturer reimburses warranty parts at cost plus a 40% markup. The markup is",
    "choices": [
      "Parts income when the warranty repair order closes",
      "A reduction of parts cost",
      "Income when the parts statement credits it",
      "Deferred until the claim is audited"
    ],
    "answer": 0,
    "explain": "Warranty parts are a sale to the manufacturer at the reimbursement rate; the right to it is fixed when the repair order closes. The claim's later approval and the statement credit are collection steps, and a rejected claim is a bad debt when it is finally denied."
  },
  {
    "id": "parts-12",
    "section": "parts",
    "topic": "Goodwill repairs",
    "difficulty": "easy",
    "q": "The service manager repairs a loyal customer's out-of-warranty transmission at no charge. The cost is",
    "choices": [
      "A deductible business expense when the work is done",
      "A nondeductible gift",
      "Capitalized as customer goodwill",
      "Deductible only if the manufacturer shares the cost"
    ],
    "answer": 0,
    "explain": "Policy work is a cost of keeping customers — ordinary and necessary. It is not a gift (there is a business reason and no donative intent), and the manufacturer's participation, if any, is income."
  },
  {
    "id": "parts-13",
    "section": "parts",
    "topic": "Body shop insurance work",
    "difficulty": "medium",
    "q": "The body shop completes a $9,000 repair in December; the insurer pays $8,500 in January and the customer paid a $500 deductible at pickup. December income from the job is",
    "choices": [
      "$9,000",
      "$500",
      "$0 until the insurer pays",
      "$8,500"
    ],
    "answer": 0,
    "explain": "The repair is complete and the amount fixed, so the full price is income in December — $500 collected, $8,500 as a receivable from the insurer. Insurer short-pays become bad debts or price adjustments when they happen."
  },
  {
    "id": "parts-14",
    "section": "parts",
    "topic": "Paint and materials",
    "difficulty": "easy",
    "q": "The body shop bills 'paint and materials' at $40 per labor hour. The billed amount is",
    "choices": [
      "Income, with the paint and consumables an expense as used",
      "A pass-through of actual material cost, with no income effect",
      "Deferred until the paint is applied",
      "Income only to the extent it exceeds paint purchased"
    ],
    "answer": 0,
    "explain": "P&M is a pricing convention, not a reimbursement; whatever the formula, the billed amount is service income. Paint stock is a supply — deducted when used, or inventoried if the shop carries a significant stock."
  },
  {
    "id": "parts-15",
    "section": "parts",
    "topic": "Employee discounts",
    "difficulty": "medium",
    "q": "Riverbend gives employees 20% off service labor and sells them parts at cost. Under §132(c) the excludable discount is",
    "choices": [
      "Up to 20% on services and up to the gross profit percentage on parts",
      "Up to 20% on both services and parts",
      "Up to the gross profit percentage on both services and parts",
      "Up to 20% on services; the parts-at-cost discount is wages"
    ],
    "answer": 0,
    "explain": "Qualified employee discounts are excludable up to 20% of the price for services and up to the store's gross profit percentage for property. Parts at cost equal the full gross profit percentage, so they fit; a discount beyond those lines is wages."
  },
  {
    "id": "parts-16",
    "section": "parts",
    "topic": "Tire excise tax",
    "difficulty": "easy",
    "q": "The federal excise tax on the heavier light-truck tires Riverbend sells in its service department is",
    "choices": [
      "Paid by the manufacturer or importer and buried in the tire's cost",
      "Collected by the dealership and remitted on Form 720",
      "Collected from the customer like sales tax",
      "Imposed on the dealership when the tire is mounted for a customer"
    ],
    "answer": 0,
    "explain": "The tire tax under §4071 is imposed on the manufacturer's or importer's sale — 9.45 cents per 10 pounds of maximum rated load capacity over 3,500 pounds, which is why ordinary passenger tires bear none and only heavier truck tires carry it — unlike the §4051 heavy-truck retail tax the dealer itself must collect on Form 720. The dealership just pays it as part of the price and recovers it in the sale."
  },
  {
    "id": "parts-17",
    "section": "parts",
    "topic": "Internal markup",
    "difficulty": "medium",
    "q": "The used-car department is charged retail labor rates by the service department for reconditioning. When the unit is still in stock at year end, its inventory cost includes the labor at",
    "choices": [
      "Cost — the intra-store markup is eliminated",
      "Retail, as billed on the internal repair order",
      "Retail, with the markup reversed when the unit sells",
      "Nothing — labor is a period expense"
    ],
    "answer": 0,
    "explain": "Inventory is carried at the dealership's cost, and a markup charged between two of its own departments is not a cost. The factory statement's internal profit is reversed for tax."
  },
  {
    "id": "parts-18",
    "section": "parts",
    "topic": "Customer returns",
    "difficulty": "easy",
    "q": "A wholesale parts customer returns $4,000 of parts in January that it bought in December. The return is",
    "choices": [
      "A reduction of January sales, with the parts back in inventory",
      "A reduction of December sales, since that is when they were sold",
      "A reduction of January sales, with the parts' cost left in cost of goods sold",
      "A reduction of January purchases at the credit memo amount"
    ],
    "answer": 0,
    "explain": "Returns are handled when they happen — the December sale stood at year end. The parts re-enter inventory at cost, and the credit memo reduces January sales."
  },
  {
    "id": "parts-19",
    "section": "parts",
    "topic": "Training reimbursements",
    "difficulty": "medium",
    "q": "The manufacturer reimburses $18,000 of technician certification training the dealership paid for. The reimbursement is",
    "choices": [
      "Taxable when earned under the program's terms",
      "Income only when the manufacturer pays it",
      "Excluded as an educational assistance benefit",
      "Deferred until the technicians complete a year of service"
    ],
    "answer": 0,
    "explain": "Either presentation nets to the same taxable income, but the timing follows the program's terms — usually certification. Training the dealership pays for its own employees is an ordinary expense, never capitalized."
  },
  {
    "id": "parts-20",
    "section": "parts",
    "topic": "Hail damage",
    "difficulty": "medium",
    "q": "Hail damages 30 new units on the lot. The insurer pays $150,000, and the body shop repairs the units. For tax",
    "choices": [
      "The proceeds are income and the repair costs are added to the units' inventory cost",
      "The proceeds reduce the units' cost and the repairs are expensed",
      "The proceeds are a nontaxable recovery of capital",
      "The repairs are deducted and the proceeds deferred to sale"
    ],
    "answer": 0,
    "explain": "Insurance proceeds are gross receipts (there is no casualty-loss netting for inventory), and reconditioning inventory is capitalized like any other recon. Units sold at a loss after the storm recover it through cost of goods sold."
  },
  {
    "id": "parts-21",
    "section": "parts",
    "topic": "Lien sales",
    "difficulty": "medium",
    "q": "An abandoned repair is sold at a lien sale for $6,000 against $2,500 of unpaid repair and storage charges. The dealership reports",
    "choices": [
      "Collection of its $2,500, with the $3,500 excess owed to the owner",
      "$6,000 of income from the sale, with the $2,500 receivable written off",
      "A $3,500 gain on a vehicle it now owns, after collecting its $2,500",
      "Nothing — the sale is a nontaxable lien enforcement"
    ],
    "answer": 0,
    "explain": "The repair and storage income was recognized when earned; the lien sale simply collects it. Proceeds above the charges belong to the former owner (or escheat under state law) — a liability, not a gain, and paying them out is not a deduction."
  },
  {
    "id": "parts-22",
    "section": "parts",
    "topic": "Road-hazard plans",
    "difficulty": "medium",
    "q": "The service department sells tire-and-wheel road-hazard plans that the dealership itself must honor. The plan price is",
    "choices": [
      "An advance payment, taxable in full by the following year",
      "Deferred ratably over the plan's term, like insurance",
      "Income in full when sold — no deferral for a dealer-obligor plan",
      "Commission income at sale, net of a reserve for claims"
    ],
    "answer": 0,
    "explain": "A dealer-obligor plan is the same animal as a dealer-obligor service contract: §451(c) allows a one-year deferral of the unearned portion and no more. Plans backed by a third-party administrator would instead be commission income at sale."
  },
  {
    "id": "parts-23",
    "section": "parts",
    "topic": "Bulk supplies",
    "difficulty": "medium",
    "q": "Drums of bulk oil and shop chemicals for the express-service lane, counted at year end but not carried in the parts inventory, are",
    "choices": [
      "Deductible as used or consumed — non-incidental supplies",
      "Deductible when purchased, as incidental supplies",
      "Capitalized under §263A as an indirect cost of the parts inventory",
      "Deductible only when the repair orders that consume them are paid"
    ],
    "answer": 0,
    "explain": "Supplies consumed in the shop are materials and supplies rather than resale merchandise, but a stock that is counted is not incidental: Reg. §1.162-3(a)(1) allows the deduction when the supplies are first used or consumed, so drums on hand at year end are an asset. Deducting on purchase is only for incidental supplies with no consumption records or year-end count. Filters and quarts of oil itemized as parts on the repair order stay in the parts inventory."
  },
  {
    "id": "parts-24",
    "section": "parts",
    "topic": "Warranty audit chargebacks",
    "difficulty": "medium",
    "q": "A manufacturer warranty audit disallows $25,000 of claims the dealership was paid two years ago and charges it back against the January parts statement. The chargeback is",
    "choices": [
      "Deducted in the year it is charged back",
      "Claimed by amending the return for the year the claims were paid",
      "Nondeductible, as a penalty for noncompliance",
      "Deferred until the manufacturer's appeal process ends"
    ],
    "answer": 0,
    "explain": "Repaying income received under a claim of right is a deduction in the year of repayment — the earlier year stays as filed (§1341 can help if the amount is large). Netting it against the current year's warranty income reaches the same taxable income."
  },
  {
    "id": "vehicles-1",
    "section": "vehicles",
    "topic": "Demos are inventory",
    "difficulty": "medium",
    "q": "A new vehicle assigned to a salesperson as a demonstrator is, for tax purposes,",
    "choices": [
      "Still inventory — carried at cost, not depreciated",
      "A fixed asset depreciated over five years",
      "Personal-use property of the salesperson",
      "A leased vehicle with the dealership as lessor"
    ],
    "answer": 0,
    "explain": "Demos stay on the lot's books as vehicles held for sale; demo miles just make them cheaper cars later. The tax action is on the employee side — the value of the personal use, if any."
  },
  {
    "id": "vehicles-2",
    "section": "vehicles",
    "topic": "Full exclusion method",
    "difficulty": "medium",
    "q": "Under Rev. Proc. 2001-56, a full-time salesperson's demo use is entirely excluded from wages when",
    "choices": [
      "A written policy restricts personal use and is actually enforced",
      "The salesperson keeps a contemporaneous mileage log",
      "The demo's value is under the luxury-auto threshold",
      "The demo is rotated back into inventory at least monthly"
    ],
    "answer": 0,
    "explain": "The full exclusion method needs a qualifying full-time salesperson plus a written, enforced policy: no personal vacation trips, no use by anyone other than the salesperson, no storage of personal possessions, limited mileage outside normal working hours, and use kept within the dealership's sales area. Meet it and nothing hits the W-2."
  },
  {
    "id": "vehicles-3",
    "section": "vehicles",
    "topic": "Partial exclusion method",
    "difficulty": "medium",
    "q": "For salespeople who fall short of the full exclusion rules, the partial exclusion method",
    "choices": [
      "Adds a flat daily amount to wages, scaled to the demo's value",
      "Taxes the full lease value of the vehicle",
      "Requires a per-mile log of personal use",
      "Applies only to demos valued under the luxury-auto threshold"
    ],
    "answer": 0,
    "explain": "Rev. Proc. 2001-56's simplified alternative: a fixed dollar amount per day based on the vehicle's value goes on the W-2, sidestepping mileage logs. Above that, the general fringe-benefit valuation rules apply."
  },
  {
    "id": "vehicles-4",
    "section": "vehicles",
    "topic": "Non-sales employees",
    "difficulty": "medium",
    "q": "The controller drives a dealership vehicle home every night. The personal use is",
    "choices": [
      "A taxable fringe valued under the general fringe-benefit rules",
      "Excluded under the demo rules like a salesperson's",
      "Excluded as a de minimis fringe benefit",
      "Taxable only if the vehicle is a new unit rather than a trade"
    ],
    "answer": 0,
    "explain": "The demonstration-use exclusion is for salespeople whose job is selling the cars. Everyone else's personal use is valued under the annual lease value or cents-per-mile rules and reported as wages."
  },
  {
    "id": "vehicles-5",
    "section": "vehicles",
    "topic": "Shareholder use",
    "difficulty": "medium",
    "q": "The dealer principal's spouse, who doesn't work at the store, drives a demo year-round. The value of that use is",
    "choices": [
      "Taxable to the shareholder as compensation or a distribution",
      "Excluded under the family-member demonstration rule",
      "Deductible by the dealership as advertising",
      "Ignored if the vehicle is later sold at retail"
    ],
    "answer": 0,
    "explain": "Non-employee family use has no exclusion; it is compensation or a distribution to the shareholder depending on the facts. Unreported owner-family vehicle use is one of the first items dealership examiners test."
  },
  {
    "id": "vehicles-6",
    "section": "vehicles",
    "topic": "Loaners",
    "difficulty": "medium",
    "q": "Service loaner vehicles the dealership owns, keeps in a dedicated loaner fleet for a year or more, and provides to customers are",
    "choices": [
      "Depreciable business assets, subject to the luxury-auto caps",
      "Nondepreciable — a unit from the dealer's own stock can't be placed in service by the dealer",
      "Nondeductible customer entertainment expense",
      "Amortizable over the length of the loaner program"
    ],
    "answer": 0,
    "explain": "Loaners kept in service for a substantial period are used in the business rather than held for sale, so they're fixed assets: depreciated, subject to §280F caps for passenger autos, and their eventual sale runs through Form 4797 with §1245 recapture. When a unit later moves to the used-car line, its remaining basis becomes inventory cost. Units cycled back to the front line within a few weeks are a different fact pattern and stay in inventory."
  },
  {
    "id": "vehicles-7",
    "section": "vehicles",
    "topic": "Dealer plates",
    "difficulty": "medium",
    "q": "Driving an inventory unit on dealer plates for a personal errand",
    "choices": [
      "Leaves it in inventory, but the personal use is a taxable fringe",
      "Converts the vehicle into a depreciable fixed asset",
      "Removes the unit from the LIFO pool for the year",
      "Is tax-free as an incidental use of inventory"
    ],
    "answer": 0,
    "explain": "Inventory status survives casual use; the fringe-benefit question does not go away. Tracking who drives what is the dealership's compliance job under §274(d)'s listed-property substantiation rules."
  },
  {
    "id": "vehicles-8",
    "section": "vehicles",
    "topic": "Parts trucks and shuttles",
    "difficulty": "easy",
    "q": "The parts department's delivery truck and the customer shuttle are",
    "choices": [
      "Depreciable assets eligible for bonus depreciation",
      "Inventory, since the dealership could sell them at any time",
      "Deductible only when they are eventually sold, through cost of goods sold",
      "Depreciable, but ineligible for bonus if bought used"
    ],
    "answer": 0,
    "explain": "Vehicles used in operations are ordinary fixed assets; trucks over 6,000 pounds even escape the luxury-auto caps. Buy them new or used after January 19, 2025 and 100% bonus is available."
  },
  {
    "id": "vehicles-9",
    "section": "vehicles",
    "topic": "Selling a demo",
    "difficulty": "medium",
    "q": "When a demonstrator with 5,000 miles is finally sold, the profit is",
    "choices": [
      "Ordinary income through cost of goods sold",
      "A §1231 gain reported on Form 4797",
      "Ordinary income as §1245 depreciation recapture",
      "Part inventory profit, part §1245 recapture for the demo period"
    ],
    "answer": 0,
    "explain": "Demos never left inventory, so their sale is an inventory sale: sales price less capitalized cost, all ordinary. Only loaners and company vehicles — true fixed assets — go through Form 4797."
  },
  {
    "id": "vehicles-10",
    "section": "vehicles",
    "topic": "Heavy SUVs",
    "difficulty": "medium",
    "q": "A loaner SUV rated over 6,000 pounds GVWR",
    "choices": [
      "Avoids the luxury-auto caps, but faces the separate SUV §179 cap",
      "Is subject to the same annual depreciation caps as a sedan",
      "Avoids both the luxury-auto caps and the SUV §179 cap",
      "Must be treated as inventory until it is sold"
    ],
    "answer": 0,
    "explain": "Heavy vehicles escape §280F's annual caps; the SUV-specific §179 ceiling (about $31,300 for 2025) still applies, but bonus depreciation isn't limited by it. The dealership's own heavy vehicles get the same treatment customers ask about."
  },
  {
    "id": "vehicles-11",
    "section": "vehicles",
    "topic": "Rental fleet",
    "difficulty": "medium",
    "q": "Vehicles the dealership rents to customers by the day are",
    "choices": [
      "Depreciable assets, with rental income as ordinary business income",
      "Inventory, with rentals treated as sales",
      "Excluded from depreciation as short-term property",
      "Passive rental property for the shareholders"
    ],
    "answer": 0,
    "explain": "A daily rental fleet is business equipment producing active operating income, not passive rental income to the owners. Units moved from the rental fleet into the used inventory get their remaining basis as inventory cost."
  },
  {
    "id": "vehicles-12",
    "section": "vehicles",
    "topic": "Payroll reporting",
    "difficulty": "medium",
    "q": "Demo income under the partial exclusion method is",
    "choices": [
      "Reported as wages on the W-2 and subject to withholding and FICA",
      "Reported on a 1099-MISC as other income",
      "Excluded from FICA but included in income tax",
      "Reported on the salesperson's own return without any form"
    ],
    "answer": 0,
    "explain": "Fringe-benefit value is wages: Social Security and Medicare tax apply, and income tax withholding applies unless the dealership elects out of withholding on vehicle use (Ann. 85-113) and tells the employee — the amount lands in Box 1 either way. Dealerships usually add it to a late-year payroll so the withholding gets covered."
  },
  {
    "id": "vehicles-13",
    "section": "vehicles",
    "topic": "Who is a salesperson",
    "difficulty": "medium",
    "q": "For the demo exclusion, a 'full-time automobile salesperson' is one who",
    "choices": [
      "Customarily spends at least half of a normal business day on floor-sales or sales-manager duties",
      "Holds a state motor vehicle salesperson license and works at least 1,000 hours a year",
      "Sells at least ten vehicles in a typical month, whatever hours are worked",
      "Is paid entirely on commission, with no base salary or draw"
    ],
    "answer": 0,
    "explain": "Reg. §1.132-5(o)(2) sets five tests: employed by a dealer; customarily spends at least half of a normal business day performing floor-salesperson or sales-manager functions; directly engages in substantial promotion and negotiation of sales; works full-time hours for the industry (at least 1,000 hours a year); and derives at least 25% of gross income from those sales activities. A sales manager who still works deals can qualify; a controller or title clerk cannot, and neither can an owner who only oversees the store."
  },
  {
    "id": "vehicles-14",
    "section": "vehicles",
    "topic": "Substantiation",
    "difficulty": "medium",
    "q": "To support the dealership's treatment of its vehicles, §274(d) requires",
    "choices": [
      "Adequate records of business versus personal use",
      "Nothing beyond the sales and inventory records",
      "A signed statement from each employee once at hire",
      "A contemporaneous mileage log for every unit, demos included"
    ],
    "answer": 0,
    "explain": "Vehicles are listed property, so use must be substantiated; for demos, the written policy and its enforcement are the substantiation. No policy usually means the IRS values the use its way."
  },
  {
    "id": "assets-1",
    "section": "assets",
    "topic": "§179 limits",
    "difficulty": "medium",
    "q": "For property placed in service in 2025, the §179 expensing limit is",
    "choices": [
      "$2.5 million, phasing out above $4 million of purchases",
      "$1.16 million, phasing out above $2.89 million of purchases",
      "$500,000, phasing out above $2 million of purchases",
      "$1.25 million, phasing out above $3.13 million of purchases"
    ],
    "answer": 0,
    "explain": "The 2025 tax act raised the ceiling to $2.5 million with a $4 million phase-out threshold, both indexed going forward. For a single-store dealership the limit is rarely binding; the phase-out matters for groups buying lots of equipment in one year."
  },
  {
    "id": "assets-2",
    "section": "assets",
    "topic": "Bonus depreciation",
    "difficulty": "medium",
    "q": "Under the 2025 tax act, 100% bonus depreciation applies to qualifying property",
    "choices": [
      "Acquired after January 19, 2025, permanently",
      "Placed in service during 2025 only, then 80%",
      "Acquired after January 1, 2023, retroactively",
      "Costing under $1 million per item or invoice"
    ],
    "answer": 0,
    "explain": "The phase-down that had bonus at 40% for 2025 was reversed: property acquired and placed in service after January 19, 2025 gets 100%, permanently. Acquisition date, not just placed-in-service date, is the test — a binding contract signed earlier follows the old schedule."
  },
  {
    "id": "assets-3",
    "section": "assets",
    "topic": "Shop equipment",
    "difficulty": "medium",
    "q": "Vehicle lifts, alignment racks, and diagnostic equipment in the service department are depreciated over",
    "choices": [
      "5 years, under the distributive trades and services class",
      "7 years, as equipment not assigned to a class",
      "15 years, as building components",
      "39 years, with the building"
    ],
    "answer": 0,
    "explain": "Asset class 57.0 — assets used in wholesale and retail trade and in services — is where the IRS cost segregation guide puts dealership shop and office equipment: five-year property, not the seven-year catch-all. Lifts bolted to the floor are still equipment, not building components; bonus makes the class academic federally but not on decoupled state schedules."
  },
  {
    "id": "assets-4",
    "section": "assets",
    "topic": "Land improvements",
    "difficulty": "medium",
    "q": "Repaving the lot, new lot lighting, and perimeter fencing are",
    "choices": [
      "15-year land improvements, eligible for bonus depreciation",
      "Nondepreciable additions to land",
      "39-year building property",
      "Currently deductible repairs under the tangible property regulations"
    ],
    "answer": 0,
    "explain": "Site work that wears out — paving, lighting, fences, drainage — is a 15-year land improvement and qualifies for bonus. Land itself stays nondepreciable; the split matters when a dealership buys its property."
  },
  {
    "id": "assets-5",
    "section": "assets",
    "topic": "Building and QIP",
    "difficulty": "medium",
    "q": "A showroom renovation — new interior finishes, lighting, and HVAC distribution inside the existing building — is generally",
    "choices": [
      "Qualified improvement property: 15-year, bonus-eligible",
      "39-year nonresidential real property with no bonus",
      "A repair expensed in the year completed",
      "Amortized over the lease term"
    ],
    "answer": 0,
    "explain": "Interior improvements to nonresidential property placed in service after the building was are QIP — 15-year recovery and bonus-eligible. Structural work, enlargements, elevators, and the building's own frame stay at 39 years."
  },
  {
    "id": "assets-6",
    "section": "assets",
    "topic": "Computers and DMS",
    "difficulty": "easy",
    "q": "Dealer management system hardware, computers, and point-of-sale terminals are",
    "choices": [
      "5-year property",
      "7-year property",
      "3-year property",
      "15-year property, as part of the building's systems"
    ],
    "answer": 0,
    "explain": "Computer hardware is five-year property; the DMS software license is a separate question — off-the-shelf software is generally three-year property or expensed under §179. Both are usually written off in year one anyway."
  },
  {
    "id": "assets-7",
    "section": "assets",
    "topic": "Blue sky",
    "difficulty": "medium",
    "q": "The 'blue sky' paid to acquire a franchise dealership — goodwill, franchise rights, going-concern value — is",
    "choices": [
      "A §197 intangible amortized over 15 years",
      "Deductible in the year of purchase",
      "Nondeductible until the dealership is sold",
      "Depreciated over 39 years with the real estate"
    ],
    "answer": 0,
    "explain": "Goodwill and franchise rights are §197 intangibles: 180 months, straight-line, starting the month of acquisition. The allocation between blue sky, fixed assets, and inventory on Form 8594 sets the whole depreciation picture."
  },
  {
    "id": "assets-8",
    "section": "assets",
    "topic": "Covenants",
    "difficulty": "medium",
    "q": "A three-year covenant not to compete bought with a dealership is amortized over",
    "choices": [
      "15 years, as a §197 intangible",
      "Its three-year term",
      "Five years",
      "The remaining life of the franchise agreement"
    ],
    "answer": 0,
    "explain": "Covenants acquired with a business are §197 intangibles and take the full 15 years even when the restriction lasts three. Buyers who want faster recovery negotiate the allocation, not the amortization."
  },
  {
    "id": "assets-9",
    "section": "assets",
    "topic": "De minimis safe harbor",
    "difficulty": "medium",
    "q": "Under the de minimis safe harbor, a dealership without audited financial statements may expense items costing up to",
    "choices": [
      "$2,500 per invoice or item",
      "$5,000 per invoice or item",
      "$10,000 per year in total",
      "$1,000 per invoice or item"
    ],
    "answer": 0,
    "explain": "The $2,500 threshold applies without an applicable financial statement; audited statements raise it to $5,000. It takes an expensing procedure in place at the start of the year — written only when the dealership has an AFS — and an annual election statement attached to the return."
  },
  {
    "id": "assets-10",
    "section": "assets",
    "topic": "Repairs vs improvements",
    "difficulty": "medium",
    "q": "Sealcoating and restriping the lot is",
    "choices": [
      "A deductible repair — it keeps the lot in ordinary operating condition",
      "A capital improvement, since it extends the lot's life",
      "An addition to the land's basis, recovered only on sale",
      "Deductible only if under $2,500 under the de minimis safe harbor"
    ],
    "answer": 0,
    "explain": "Routine maintenance that doesn't better, restore, or adapt the asset is a repair. Tearing out and repaving the lot is a restoration — a new 15-year asset. The line runs through the tangible property regulations."
  },
  {
    "id": "assets-11",
    "section": "assets",
    "topic": "Floor plan cross-check",
    "difficulty": "medium",
    "q": "A dealership exempt from §163(j) under the gross receipts test buys a $400,000 paint booth. Bonus depreciation is",
    "choices": [
      "Fully available on the paint booth",
      "Unavailable to any dealership with floor plan debt",
      "Available only at 50% for a floor-planned dealer",
      "Available only after the floor plan interest is fully deducted"
    ],
    "answer": 0,
    "explain": "The bonus exclusion for floor-plan-financed businesses applies only in a year the floor plan exception was needed to deduct interest. A small dealership outside §163(j) entirely never triggers it."
  },
  {
    "id": "assets-12",
    "section": "assets",
    "topic": "§179 at the S corp level",
    "difficulty": "medium",
    "q": "The §179 deduction elected by the S corporation",
    "choices": [
      "Is separately stated on Schedule K",
      "Reduces ordinary business income on page 1",
      "Is claimed only on the shareholders' own returns",
      "Cannot be elected by a pass-through entity at all"
    ],
    "answer": 0,
    "explain": "Section 179 is elected and limited at the corporate level, passed out as a separate item, then limited again by each shareholder's own dollar and business-income caps. Bonus depreciation, by contrast, just reduces ordinary income."
  },
  {
    "id": "assets-13",
    "section": "assets",
    "topic": "Selling a loaner",
    "difficulty": "medium",
    "q": "A fully depreciated loaner (basis $0) is sold to a customer for $18,000. The dealership reports",
    "choices": [
      "$18,000 of ordinary income as §1245 recapture on Form 4797",
      "An $18,000 §1231 gain",
      "An $18,000 capital gain",
      "An inventory sale through cost of goods sold"
    ],
    "answer": 0,
    "explain": "Gain on depreciable personal property is ordinary to the extent of depreciation taken — here all of it. Form 4797 Part III does the recapture; only gain above original cost would reach §1231."
  },
  {
    "id": "assets-14",
    "section": "assets",
    "topic": "Fixed asset rollforward",
    "difficulty": "easy",
    "q": "At year end, the fixed asset schedule should tie to",
    "choices": [
      "Schedule L's fixed asset lines and Form 4562",
      "The floor plan lender's year-end statement",
      "Form 1125-A's ending inventory",
      "The manufacturer's financial statement only"
    ],
    "answer": 0,
    "explain": "Beginning balance plus additions minus disposals equals the Schedule L cost lines; the year's depreciation ties to Form 4562. A rollforward that doesn't tie is the fastest way to find a missed disposal or a capitalized repair."
  },
  {
    "id": "owners-1",
    "section": "owners",
    "topic": "Self-rental",
    "difficulty": "medium",
    "q": "The shareholders own the dealership real estate in a separate LLC and rent it to the S corporation. Net rental income from that lease is",
    "choices": [
      "Nonpassive under the self-rental rule",
      "Passive income that can offset other passive losses",
      "Portfolio income, like interest and dividends",
      "Passive, unless the owners elect to group it with the dealership"
    ],
    "answer": 0,
    "explain": "Section 469's self-rental recharacterization: net income from renting to a business in which the owner materially participates is treated as nonpassive. Losses on the same property, however, stay passive — the rule only runs one way."
  },
  {
    "id": "owners-2",
    "section": "owners",
    "topic": "Grouping",
    "difficulty": "medium",
    "q": "To treat the real estate LLC and the dealership as one activity for the passive loss rules, the owners can",
    "choices": [
      "Make a §469 grouping election on their returns",
      "Merge the two entities into a single S corporation",
      "File a joint Form 8825 with the 1120-S",
      "Do nothing — related entities group automatically"
    ],
    "answer": 0,
    "explain": "A grouping statement lets the rental and the operating business form one appropriate economic unit, so real estate losses aren't trapped as passive — allowed for a rental grouped with a business only when each owner holds the same proportionate interest in both (or one is insubstantial relative to the other). The grouping is disclosed under Rev. Proc. 2010-13 and sticks unless facts change materially."
  },
  {
    "id": "owners-3",
    "section": "owners",
    "topic": "Rent above market",
    "difficulty": "medium",
    "q": "The dealership pays its owners' LLC rent well above the market rate for comparable property. The excess is",
    "choices": [
      "Disallowed as rent and treated as a distribution to the shareholders",
      "Deductible in full — rent is a business expense",
      "Deductible if the lease is in writing",
      "Reclassified as officer compensation"
    ],
    "answer": 0,
    "explain": "Only reasonable rent is deductible; the excess to owner-related lessors is a disguised distribution. A market-rate lease with an appraisal or broker opinion behind it ends the argument."
  },
  {
    "id": "owners-4",
    "section": "owners",
    "topic": "Bargain sales",
    "difficulty": "medium",
    "q": "The dealership sells a $40,000 vehicle to the majority shareholder's daughter for $28,000. The $12,000 bargain element is",
    "choices": [
      "A constructive distribution to the shareholder",
      "A deductible sales discount like any other",
      "An ordinary loss on the sale of inventory",
      "Ignored as an intra-family transfer"
    ],
    "answer": 0,
    "explain": "Below-cost sales to owners and their families are constructive distributions (or wages, if the buyer is an employee) — the dealership doesn't get a loss, and the shareholder is treated as having received the value. Sales to owners should run at real prices."
  },
  {
    "id": "owners-5",
    "section": "owners",
    "topic": "Loans to shareholders",
    "difficulty": "medium",
    "q": "A $150,000 no-interest loan from the dealership to a shareholder",
    "choices": [
      "Carries imputed interest under §7872 and needs real documentation",
      "Is fine as long as the balance appears on Schedule L",
      "Is automatically treated as compensation to the shareholder",
      "Is prohibited — S corporations may not lend to owners"
    ],
    "answer": 0,
    "explain": "Below-market loans impute interest at the applicable federal rate; undocumented, unrepaid 'loans' get recharacterized as distributions on exam. Written notes, interest, and actual payments are the defense."
  },
  {
    "id": "owners-6",
    "section": "owners",
    "topic": "Loans from shareholders",
    "difficulty": "medium",
    "q": "A shareholder lends the dealership $200,000 to cover a slow quarter. For the shareholder's loss-deduction basis, the loan",
    "choices": [
      "Creates debt basis if it is a bona fide direct loan",
      "Creates basis only after the corporation repays it",
      "Never affects basis — only stock purchases do",
      "Creates basis whether the shareholder or a bank makes it"
    ],
    "answer": 0,
    "explain": "Debt basis comes from genuine shareholder-to-corporation loans — not from bank loans the shareholder merely guarantees. Losses in excess of stock basis can then use debt basis, which later repayments restore."
  },
  {
    "id": "owners-7",
    "section": "owners",
    "topic": "Family on payroll",
    "difficulty": "easy",
    "q": "Wages paid to the owner's teenage son for washing cars on weekends are deductible if",
    "choices": [
      "He actually does the work and the pay is reasonable for it",
      "He is at least 18 years old",
      "The dealership files a 1099-NEC instead of a W-2",
      "The wages are under $600"
    ],
    "answer": 0,
    "explain": "Family employees are deductible like any others: real work, reasonable pay, proper payroll treatment. Paying a family member for a no-show job is a distribution with a payroll tax problem attached."
  },
  {
    "id": "owners-8",
    "section": "owners",
    "topic": "§267 accruals",
    "difficulty": "medium",
    "q": "A $50,000 bonus accrued at December 31 to the 60% shareholder-president, paid in February, is deductible",
    "choices": [
      "In the year paid, when the shareholder includes it",
      "In the accrual year, under the 2½-month rule",
      "In the accrual year if approved by the board",
      "Never — it is a disguised distribution"
    ],
    "answer": 0,
    "explain": "Section 267(a)(2) matches the deduction to the related cash-basis payee's inclusion, and §267(e) makes every shareholder of an S corporation — not just a more-than-50% owner — a related party for this purpose, along with family under §267(c). The 2½-month rule that rescues ordinary employee bonuses doesn't help here: February payment means a deduction in the year paid."
  },
  {
    "id": "owners-9",
    "section": "owners",
    "topic": "Reasonable comp evidence",
    "difficulty": "medium",
    "q": "The best support for an S corp owner-dealer's salary is",
    "choices": [
      "Comparable pay data for a general manager of a similar-sized store",
      "The store's net profit, since the owner-dealer earned all of it",
      "The salary the owner drew when the store was a C corporation",
      "The amount approved in the corporate minutes each year"
    ],
    "answer": 0,
    "explain": "Reasonable compensation is what an unrelated dealership would pay someone to do the same job. Industry compensation surveys and the store's own GM pay scale are the evidence examiners accept."
  },
  {
    "id": "owners-10",
    "section": "owners",
    "topic": "Family attribution",
    "difficulty": "medium",
    "q": "The dealer principal's spouse works in the office and owns no stock. For the health insurance rules, the spouse is",
    "choices": [
      "A more-than-2% shareholder by attribution — same W-2 treatment",
      "An ordinary employee whose coverage is fully excludable",
      "Taxed on the premiums as a distribution to the owner, not as wages",
      "An employee whose premiums are deductible only on the couple's Schedule A"
    ],
    "answer": 0,
    "explain": "Section 318 attribution makes the spouse, children, grandchildren, and parents of a more-than-2% shareholder more-than-2% shareholders themselves. Their premiums go in Box 1 too — a routine year-end payroll miss."
  },
  {
    "id": "owners-11",
    "section": "owners",
    "topic": "Personal expenses",
    "difficulty": "easy",
    "q": "The owner's family vacation, charged to the dealership's credit card and booked as travel, is",
    "choices": [
      "A nondeductible distribution to the shareholder",
      "Deductible if the owner attended a dealer meeting during the trip",
      "50% deductible",
      "Deductible as travel if the dealership's expense policy allows it"
    ],
    "answer": 0,
    "explain": "Personal expenses run through the business are distributions: no deduction, and they reduce the owner's basis. Reclassifying them before the return is filed is part of the preparer's job."
  },
  {
    "id": "owners-12",
    "section": "owners",
    "topic": "Multiple entities",
    "difficulty": "medium",
    "q": "The owners hold the dealership, the real estate LLC, and a reinsurance company. For QBI purposes,",
    "choices": [
      "Each is tested separately, though the store and rental may aggregate",
      "They are automatically treated as one business",
      "Only the dealership's income can be QBI",
      "The reinsurance company's income is QBI to the owners"
    ],
    "answer": 0,
    "explain": "Aggregation under §199A can combine commonly controlled businesses that share resources, letting the dealership's W-2 wages support the rental's deduction. The reinsurance company is a C corporation with no QBI at all."
  },
  {
    "id": "owners-13",
    "section": "owners",
    "topic": "Guarantees",
    "difficulty": "medium",
    "q": "The shareholders personally guarantee the $6 million floor plan line. The guarantee",
    "choices": [
      "Creates no basis until the shareholder actually pays on it",
      "Adds $6 million to their stock basis",
      "Adds basis in proportion to ownership",
      "Creates debt basis once the lender files the guarantee"
    ],
    "answer": 0,
    "explain": "Guaranteeing the corporation's debt is not lending to it. Basis arises only when the shareholder makes a payment on the guarantee — a rule that surprises owners counting on floor plan losses."
  },
  {
    "id": "owners-14",
    "section": "owners",
    "topic": "PTE elections",
    "difficulty": "medium",
    "q": "A state pass-through entity tax election lets the dealership",
    "choices": [
      "Pay state tax at the entity level and deduct it federally",
      "Skip state income tax on the pass-through income",
      "Shift its income to a lower-tax state by election",
      "Deduct the owners' personal state income taxes"
    ],
    "answer": 0,
    "explain": "PTE elections turn the owners' capped SALT deduction into an uncapped entity-level deduction. The mechanics, due dates, and whether it's worth it vary by state — but for a profitable dealership the federal savings are usually substantial."
  },
  {
    "id": "schedules-1",
    "section": "schedules",
    "topic": "Page 1 flow",
    "difficulty": "easy",
    "q": "Page 1 of Form 1120-S runs",
    "choices": [
      "Receipts, less cost of goods sold and deductions, to ordinary income",
      "Gross receipts, less distributions, to taxable income",
      "Total income, less tax and distributions, to net income",
      "Total income, less separately stated items, to taxable income"
    ],
    "answer": 0,
    "explain": "Line 1 gross receipts, Form 1125-A's COGS, the deduction lines, and the bottom line — ordinary business income — that becomes box 1 of every K-1. Separately stated items never touch page 1."
  },
  {
    "id": "schedules-2",
    "section": "schedules",
    "topic": "Form 1125-A boxes",
    "difficulty": "easy",
    "q": "Form 1125-A asks the dealership to disclose",
    "choices": [
      "Its inventory method and whether §263A applies",
      "The floor plan lender's name and credit limit",
      "Each vehicle's VIN and invoice cost",
      "Its LIFO index and pool structure"
    ],
    "answer": 0,
    "explain": "Cost, lower of cost or market, or other (LIFO); whether the LIFO election was made this year (Form 970 attached); and whether the UNICAP rules apply. A change in method also gets flagged here."
  },
  {
    "id": "schedules-3",
    "section": "schedules",
    "topic": "Which form for officers",
    "difficulty": "medium",
    "q": "Officer compensation detail for a dealership with $30 million of receipts goes on",
    "choices": [
      "Form 1125-E",
      "Schedule K-1, box 1",
      "Schedule B-1",
      "Form 1125-A"
    ],
    "answer": 0,
    "explain": "Form 1125-E lists each officer, ownership percentage, time devoted, and compensation whenever receipts are $500,000 or more. It is where the reasonable-compensation question is answered in numbers."
  },
  {
    "id": "schedules-4",
    "section": "schedules",
    "topic": "Separately stated items",
    "difficulty": "medium",
    "q": "Which of these bypasses page 1 and is separately stated on Schedule K?",
    "choices": [
      "The §179 deduction and charitable contributions",
      "Officer compensation and the employer's payroll taxes",
      "Floor plan interest and bank charges",
      "Depreciation and repairs on shop equipment"
    ],
    "answer": 0,
    "explain": "Items whose character or limits depend on the shareholder — §179, charitable contributions, portfolio income, §1231 gains, credits — are separately stated. Ordinary deductions like interest and depreciation reduce line 21."
  },
  {
    "id": "schedules-5",
    "section": "schedules",
    "topic": "Interest on customer notes",
    "difficulty": "medium",
    "q": "Interest a buy-here-pay-here dealership earns on its own retail installment contracts is reported",
    "choices": [
      "On page 1 as other income",
      "On Schedule K as portfolio interest income",
      "On Schedule D as gain on the notes",
      "On the shareholders' Schedule B directly"
    ],
    "answer": 0,
    "explain": "The 1120-S instructions send interest charged on receivables in the ordinary course of business to page 1, not to the portfolio line. Interest on the dealership's bank balances, by contrast, is Schedule K portfolio income."
  },
  {
    "id": "schedules-6",
    "section": "schedules",
    "topic": "Schedule L requirement",
    "difficulty": "medium",
    "q": "Schedules L and M-1 may be skipped only if",
    "choices": [
      "Total receipts and total assets are both under $250,000",
      "The corporation has a single shareholder",
      "The corporation uses the cash method",
      "The return is e-filed"
    ],
    "answer": 0,
    "explain": "Schedule B's question asks whether receipts and assets both stay under $250,000; a dealership never qualifies. Expect a full balance sheet tied to the trial balance every year."
  },
  {
    "id": "schedules-7",
    "section": "schedules",
    "topic": "M-1 versus M-3",
    "difficulty": "medium",
    "q": "A dealership with $14 million of total assets reconciles book to tax income on",
    "choices": [
      "Schedule M-3, at least Part I",
      "Schedule M-1 only, since it's under $50 million",
      "Neither — reconciliation is optional below $50 million",
      "Form 8916-A in place of either schedule"
    ],
    "answer": 0,
    "explain": "Total assets of $10 million or more trigger Schedule M-3. Between $10 million and $50 million the corporation may complete Part I of M-3 and use M-1 for the detail; at $50 million the full M-3 is mandatory."
  },
  {
    "id": "schedules-8",
    "section": "schedules",
    "topic": "AAA",
    "difficulty": "medium",
    "q": "The accumulated adjustments account on Schedule M-2",
    "choices": [
      "Tracks income taxed to shareholders but not yet distributed",
      "Equals the corporation's retained earnings on its books",
      "Is increased by tax-exempt income",
      "Is irrelevant for a corporation that was never a C corporation"
    ],
    "answer": 0,
    "explain": "AAA is the running total of taxed-but-undistributed income; it determines whether distributions are tax-free when the corporation has old C corp earnings and profits. Tax-exempt income goes to the other adjustments account instead."
  },
  {
    "id": "schedules-9",
    "section": "schedules",
    "topic": "K-1 boxes",
    "difficulty": "medium",
    "q": "On the shareholder's K-1, ordinary business income, the §179 deduction, and charitable contributions appear in, respectively,",
    "choices": [
      "Box 1, box 11, and box 12",
      "Box 1, box 2, and box 3",
      "Boxes 16, 17, and 18",
      "Box 1 for all three, netted"
    ],
    "answer": 0,
    "explain": "Box 1 carries the page-1 result; §179 has its own box 11; charitable gifts land in box 12 with a code. The shareholder applies their own limits to boxes 11 and 12 — which is why they aren't netted into box 1."
  },
  {
    "id": "schedules-10",
    "section": "schedules",
    "topic": "Schedule B questions",
    "difficulty": "medium",
    "q": "Schedule B of the 1120-S asks the dealership, among other things, whether it",
    "choices": [
      "Is subject to §163(j) and must file Form 8990",
      "Uses the alternative LIFO method for new vehicles",
      "Has floor plan debt over $5 million at year end",
      "Employs any more-than-2% shareholders on payroll"
    ],
    "answer": 0,
    "explain": "Schedule B's yes/no questions cover the interest limitation, changes in ownership, debt cancellation, and whether Schedules L and M-1 can be skipped. Answering the §163(j) question wrong is an easy way to draw an inquiry."
  },
  {
    "id": "schedules-11",
    "section": "schedules",
    "topic": "K-2 and K-3",
    "difficulty": "medium",
    "q": "A dealership with no foreign income, assets, or shareholders can skip Schedules K-2 and K-3 if",
    "choices": [
      "It notifies the shareholders and none of them requests a K-3",
      "It has fewer than five shareholders, all individuals",
      "It files on paper rather than electronically",
      "It attaches a statement to the return saying so"
    ],
    "answer": 0,
    "explain": "The 1120-S domestic filing exception has three parts: no or limited foreign activity, timely notice to the shareholders that no K-3 will be furnished unless requested, and no shareholder request for a K-3 by the one-month date before the return is filed. Miss the notice step and the schedules are required."
  },
  {
    "id": "schedules-12",
    "section": "schedules",
    "topic": "Form 4562",
    "difficulty": "easy",
    "q": "Form 4562 is attached when the return claims",
    "choices": [
      "Current-year additions, §179, or listed property",
      "Any depreciation at all, in every year",
      "Cost of goods sold with inventory",
      "Floor plan interest above the §163(j) cap"
    ],
    "answer": 0,
    "explain": "Current-year additions, §179 elections, and vehicle-type listed property all put Form 4562 in the return; depreciation on old assets alone does not require it, though most software attaches it anyway."
  },
  {
    "id": "schedules-13",
    "section": "schedules",
    "topic": "Attachments",
    "difficulty": "easy",
    "q": "A dealership electing LIFO for the first time and subject to §163(j) attaches",
    "choices": [
      "Form 970 and Form 8990",
      "Form 3115 and Form 8825",
      "Form 4797 and Form 8949",
      "Form 7004 and Form 2553"
    ],
    "answer": 0,
    "explain": "Form 970 makes the LIFO election; Form 8990 computes the interest limitation and shows the floor plan exception. Form 3115 is for changing methods later; 8825 is for rental real estate that lives in another entity."
  },
  {
    "id": "schedules-14",
    "section": "schedules",
    "topic": "Form 4797",
    "difficulty": "medium",
    "q": "The sale of the dealership's five-year-old parts truck is reported on",
    "choices": [
      "Form 4797, with depreciation recapture as ordinary income",
      "Form 8949 and Schedule D",
      "Form 1125-A as a reduction of inventory",
      "Page 1, as an ordinary vehicle sale like any inventory unit"
    ],
    "answer": 0,
    "explain": "Fixed-asset dispositions go through Form 4797: §1245 recapture in Part III, any excess to §1231. Inventory vehicles never touch 4797, and S corporations don't use Form 8949 for business equipment."
  },
  {
    "id": "entitytax-1",
    "section": "entitytax",
    "topic": "Built-in gains",
    "difficulty": "medium",
    "q": "Riverbend was a C corporation until it elected S status two years ago. Selling appreciated assets it held at conversion can trigger",
    "choices": [
      "The §1374 built-in gains tax, paid by the corporation",
      "No entity tax — S corporations never pay income tax",
      "Capital gains tax at the shareholders' rates only",
      "The accumulated earnings tax on its retained profits"
    ],
    "answer": 0,
    "explain": "Gains built in at the conversion date and recognized within five years are taxed to the corporation at 21% (limited to net unrealized built-in gain), then passed through net of the tax. Appraise everything at conversion — the number caps the exposure."
  },
  {
    "id": "entitytax-2",
    "section": "entitytax",
    "topic": "LIFO recapture",
    "difficulty": "medium",
    "q": "When a LIFO-method C corporation dealership elects S status, the LIFO reserve",
    "choices": [
      "Is taxed in the last C year, with the tax paid over four years",
      "Is forgiven as part of the S election",
      "Is taxed to the shareholders ratably over five years",
      "Stays deferred until the corporation stops using LIFO"
    ],
    "answer": 0,
    "explain": "Section 1363(d) recaptures the reserve on conversion — the price of taking the deferral into pass-through status. Four installments, no interest, and the corporation's inventory basis steps up by the recaptured amount."
  },
  {
    "id": "entitytax-3",
    "section": "entitytax",
    "topic": "Passive investment income",
    "difficulty": "medium",
    "q": "An S corporation with old C corporation earnings and profits faces a §1375 tax and risks losing its election when",
    "choices": [
      "Passive investment income exceeds 25% of gross receipts",
      "Any rental income at all appears on the return",
      "Distributions exceed the accumulated adjustments account",
      "Interest income exceeds $10,000 for the year"
    ],
    "answer": 0,
    "explain": "Rents, royalties, dividends, and interest above 25% of receipts draw the tax — but only with accumulated E&P from C years — and three consecutive such years terminate the election. A dealership's operating receipts dwarf its passive income, so the rule mostly bites when real estate sits inside the corporation."
  },
  {
    "id": "entitytax-4",
    "section": "entitytax",
    "topic": "Estimated taxes",
    "difficulty": "medium",
    "q": "An S corporation must make quarterly estimated payments only for",
    "choices": [
      "Entity-level taxes (built-in gains and the like) of $500 or more",
      "Its shareholders' anticipated tax on pass-through income",
      "Any year its ordinary business income exceeds $1 million",
      "Payroll taxes on shareholder-employee wages"
    ],
    "answer": 0,
    "explain": "With no corporate income tax, most S corporations owe no estimates. The shareholders make their own, using the K-1 projections the preparer hands them — which is why quarterly income estimates for the store matter."
  },
  {
    "id": "entitytax-5",
    "section": "entitytax",
    "topic": "Installment method",
    "difficulty": "medium",
    "q": "A dealership that finances its own sales over 36 months may use the installment method for those sales",
    "choices": [
      "Never — dealer dispositions of personal property are excluded",
      "Only for used vehicles taken in trade",
      "Only if the notes carry adequate stated interest under §483",
      "Yes, by attaching Form 6252 to the return"
    ],
    "answer": 0,
    "explain": "Dealer sales are carved out of §453, so the full gain is income at delivery regardless of when the customer pays. The notes then produce interest income as it accrues — the buy-here-pay-here cash squeeze."
  },
  {
    "id": "entitytax-6",
    "section": "entitytax",
    "topic": "Method changes",
    "difficulty": "medium",
    "q": "Switching the dealership from the cash method to the accrual method requires",
    "choices": [
      "Form 3115, with a §481(a) catch-up adjustment",
      "A new S election on Form 2553",
      "Only a change in the books, starting January 1",
      "Amended returns for all open years"
    ],
    "answer": 0,
    "explain": "Accounting method changes go through Form 3115; the catch-up adjustment spreads a positive amount over four years. Many small lots that grow past the gross receipts test face exactly this change."
  },
  {
    "id": "entitytax-7",
    "section": "entitytax",
    "topic": "Leaving LIFO",
    "difficulty": "medium",
    "q": "A dealership that wants to drop LIFO",
    "choices": [
      "Files Form 3115 and brings the reserve back into income",
      "Simply stops applying LIFO on the next return",
      "Must wait ten years from the original election",
      "Needs the manufacturer's and lender's consent"
    ],
    "answer": 0,
    "explain": "The election came in freely on Form 970; the exit is a method change with the LIFO reserve taken into income — generally over four years for a positive adjustment. Timing the exit into a low-income year is the planning."
  },
  {
    "id": "entitytax-8",
    "section": "entitytax",
    "topic": "§444 fiscal years",
    "difficulty": "medium",
    "q": "An S corporation dealership keeping a September 30 fiscal year under §444 must",
    "choices": [
      "Make a required payment under §7519",
      "Pay the corporate income tax on its deferral",
      "Recompute its inventory at calendar year end",
      "Obtain the IRS's consent every year"
    ],
    "answer": 0,
    "explain": "Section 444 tolerates a short deferral only if the corporation deposits an amount that neutralizes it. The deposit is refundable on returning to a calendar year — and for most dealerships the paperwork isn't worth the few months."
  },
  {
    "id": "entitytax-9",
    "section": "entitytax",
    "topic": "PTE mechanics",
    "difficulty": "medium",
    "q": "Under a typical state pass-through entity tax election, the dealership",
    "choices": [
      "Pays the owners' state tax itself, and the owners claim a credit",
      "Pays state tax twice — once at the entity and once through the owners",
      "Files no state return at all in the electing state",
      "Converts to a C corporation for state purposes"
    ],
    "answer": 0,
    "explain": "The entity-level payment is a deductible business expense that never hits the owners' capped SALT line. Election deadlines, estimated payment rules, and nonresident treatment differ state to state."
  },
  {
    "id": "entitytax-10",
    "section": "entitytax",
    "topic": "State decoupling",
    "difficulty": "medium",
    "q": "Many states do not follow federal bonus depreciation. For a dealership that means",
    "choices": [
      "Separate state depreciation schedules and annual modifications",
      "The federal return must also use the state's slower schedule",
      "The state return uses book depreciation instead",
      "A one-time §481(a) catch-up adjustment on the state return"
    ],
    "answer": 0,
    "explain": "Decoupled states add back the federal bonus and allow their own schedule, producing years of state modifications. The fixed asset software's state columns exist for exactly this."
  },
  {
    "id": "entitytax-11",
    "section": "entitytax",
    "topic": "Nonresident owners",
    "difficulty": "medium",
    "q": "A shareholder who lives in another state typically triggers",
    "choices": [
      "Nonresident withholding or a composite return at the state level",
      "Federal backup withholding on K-1 income",
      "Loss of the S election in the dealership's state",
      "Nothing — K-1 income is taxed only where the shareholder lives"
    ],
    "answer": 0,
    "explain": "States tax pass-through income at its source; most require the entity to withhold for nonresident owners or include them in a composite return. A PTE election often replaces both."
  },
  {
    "id": "entitytax-12",
    "section": "entitytax",
    "topic": "Terminating events",
    "difficulty": "medium",
    "q": "Which of these terminates an S election immediately?",
    "choices": [
      "Transferring shares to a partnership or C corporation",
      "Making disproportionate distributions in one year",
      "Exceeding $50 million of receipts",
      "Electing LIFO"
    ],
    "answer": 0,
    "explain": "An ineligible shareholder ends the election on the transfer date. Disproportionate distributions are a second-class-of-stock risk to be corrected, not an automatic termination; receipts and inventory methods are irrelevant."
  },
  {
    "id": "entitytax-13",
    "section": "entitytax",
    "topic": "Inadvertent termination",
    "difficulty": "medium",
    "q": "An S election terminated by a stock transfer to an ineligible holder, caught and unwound a month later, can be restored through",
    "choices": [
      "Inadvertent termination relief under §1362(f)",
      "A new Form 2553 filed within 30 days of the transfer",
      "Automatic reinstatement after one year has passed",
      "Nothing — the corporation is a C corporation for five years"
    ],
    "answer": 0,
    "explain": "Section 1362(f) lets the IRS treat the election as continuing if the termination was inadvertent and corrected promptly; some fact patterns qualify for streamlined relief without a ruling. Fixing the transfer fast is the key."
  },
  {
    "id": "entitytax-14",
    "section": "entitytax",
    "topic": "Donating inventory",
    "difficulty": "medium",
    "q": "The dealership donates a used vehicle from inventory to a local charity. The deduction is generally",
    "choices": [
      "Limited to the vehicle's cost basis",
      "The vehicle's fair market value at the date of the gift",
      "Twice the cost basis, as an enhanced deduction",
      "Nothing — inventory cannot be donated for a deduction"
    ],
    "answer": 0,
    "explain": "Ordinary-income property is deductible at basis, and the cost also comes out of purchases so it isn't double-counted. Charitable contributions pass through separately, subject to each shareholder's own limits."
  },
  {
    "id": "reporting-1",
    "section": "reporting",
    "topic": "Form 8300 basics",
    "difficulty": "easy",
    "q": "A customer pays $14,000 in currency toward a vehicle. Form 8300 is due",
    "choices": [
      "Within 15 days of receiving the cash",
      "By January 31 of the following year",
      "Only if the customer refuses to provide identification",
      "Never — the threshold is $15,000"
    ],
    "answer": 0,
    "explain": "Cash over $10,000 in one transaction (or related transactions) triggers Form 8300 within 15 days. Dealerships are the single most common filer, and the most common target of failure-to-file penalties."
  },
  {
    "id": "reporting-2",
    "section": "reporting",
    "topic": "What counts as cash",
    "difficulty": "medium",
    "q": "For Form 8300, a $9,000 cashier's check put toward a $32,000 car",
    "choices": [
      "Counts as cash — the sale is a designated reporting transaction",
      "Is not cash, because it was drawn on a bank's own account",
      "Counts only if the customer also pays currency",
      "Counts only if its face amount exceeds $10,000"
    ],
    "answer": 0,
    "explain": "Cashier's checks, money orders, bank drafts, and traveler's checks with a face amount of $10,000 or less are cash when received in a designated reporting transaction — a retail sale of a consumer durable priced over $10,000, which is what a vehicle deal is — or when the dealer knows the instrument is being used to avoid reporting. Instruments over $10,000 (the bank already reports them), documented bank-loan proceeds, personal checks, and wires are not cash."
  },
  {
    "id": "reporting-3",
    "section": "reporting",
    "topic": "Related transactions",
    "difficulty": "medium",
    "q": "A customer pays $6,000 in currency at signing and $5,000 in currency at delivery two weeks later. The dealership",
    "choices": [
      "Must file Form 8300 within 15 days of the second payment",
      "Need not file, since neither payment exceeded $10,000",
      "Must file only if the balance of the deal is also paid in cash",
      "Files at year end for all cash customers"
    ],
    "answer": 0,
    "explain": "Related transactions within 24 hours are aggregated automatically, and installment payments on one deal that cross $10,000 within a year trigger the form when they do. Splitting payments doesn't split the obligation."
  },
  {
    "id": "reporting-4",
    "section": "reporting",
    "topic": "Customer statement",
    "difficulty": "medium",
    "q": "After filing Form 8300, the dealership must also",
    "choices": [
      "Give the customer a written statement by January 31 of the following year",
      "Report the sale to the state motor vehicle agency",
      "Notify the customer within 15 days that the form was filed",
      "File a suspicious activity report with FinCEN"
    ],
    "answer": 0,
    "explain": "The annual statement tells each reported customer that a Form 8300 was filed and the amount. Skipping the statement is a separate penalty from skipping the form."
  },
  {
    "id": "reporting-5",
    "section": "reporting",
    "topic": "Penalties",
    "difficulty": "medium",
    "q": "Failing to file Form 8300 for a cash deal exposes the dealership to",
    "choices": [
      "Civil penalties per form, much larger for intentional disregard",
      "A flat $50 penalty per unfiled form",
      "Loss of its dealer license after a second failure",
      "Nothing, if the income tax on the sale was paid"
    ],
    "answer": 0,
    "explain": "The general failure penalty is a few hundred dollars per form (indexed), but intentional disregard jumps to the greater of $25,000-plus or the cash amount, and willful failures and structuring assistance are crimes."
  },
  {
    "id": "reporting-6",
    "section": "reporting",
    "topic": "E-filing 8300",
    "difficulty": "medium",
    "q": "A dealership that issues a dozen W-2s and 1099s a year must file Form 8300",
    "choices": [
      "Electronically through FinCEN's BSA E-Filing System",
      "Electronically through the IRS FIRE system, with its 1099s",
      "On paper, since Form 8300 is exempt from the e-file mandate",
      "With the Form 1120-S, as an attachment"
    ],
    "answer": 0,
    "explain": "Since 2024 the same 10-return e-file mandate reaches Form 8300, and the filing goes through FinCEN's BSA E-Filing System rather than the IRS return pipeline. Filers under the 10-return threshold may still use paper; those over it need a waiver to file on paper."
  },
  {
    "id": "reporting-7",
    "section": "reporting",
    "topic": "Structuring",
    "difficulty": "medium",
    "q": "A customer offers to bring $9,900 today and $9,900 next week 'so you don't have to file that form.' The dealership",
    "choices": [
      "Must file on the related payments and may not help split them",
      "May accept, since each payment is under $10,000 on its own",
      "Must refuse the sale and report the customer to FinCEN",
      "Files only if the customer pays in currency, not checks"
    ],
    "answer": 0,
    "explain": "Structuring is a federal crime for the customer, and a dealer who knowingly helps has crossed the same line. File on the related transactions and document the conversation."
  },
  {
    "id": "reporting-8",
    "section": "reporting",
    "topic": "1099-NEC",
    "difficulty": "medium",
    "q": "For 2025 payments, the dealership issues Form 1099-NEC to an unincorporated detailer or sublet shop paid",
    "choices": [
      "$600 or more",
      "$2,000 or more",
      "Any amount",
      "$10,000 or more"
    ],
    "answer": 0,
    "explain": "The 2025 tax act raised the information-reporting threshold to $2,000 (indexed) starting with 2026 payments; 2025 forms filed in early 2026 still use $600. Corporations are generally exempt — attorneys excepted."
  },
  {
    "id": "reporting-9",
    "section": "reporting",
    "topic": "1099-MISC for rent",
    "difficulty": "medium",
    "q": "Rent the dealership pays to its owners' real estate LLC (taxed as a partnership) is reported on",
    "choices": [
      "Form 1099-MISC, box 1",
      "Form 1099-NEC",
      "No form — related-party rent is exempt",
      "Form 8825, attached to the 1120-S"
    ],
    "answer": 0,
    "explain": "Rent to a non-corporate landlord gets a 1099-MISC once it clears the threshold. Ownership overlap doesn't exempt it, and the matching helps the IRS test the self-rental treatment on both returns."
  },
  {
    "id": "reporting-10",
    "section": "reporting",
    "topic": "W-2 items",
    "difficulty": "easy",
    "q": "Which items belong on dealership employees' W-2s beyond ordinary pay?",
    "choices": [
      "Demo-use fringe values and >2% shareholder health premiums",
      "Manufacturer spiffs paid directly to salespeople by the factory",
      "Mileage reimbursed under an accountable plan",
      "Nothing — fringes are reported on 1099-MISC"
    ],
    "answer": 0,
    "explain": "Taxable fringes are wages. Factory spiffs paid straight to salespeople by the manufacturer are the manufacturer's 1099 problem, not the dealership's — but spiffs routed through the dealership go on the W-2."
  },
  {
    "id": "reporting-11",
    "section": "reporting",
    "topic": "Heavy truck excise tax",
    "difficulty": "medium",
    "q": "A dealership that sells trucks over 33,000 pounds GVWR must collect",
    "choices": [
      "The 12% federal retail excise tax, reported on Form 720",
      "The heavy vehicle use tax, reported on Form 2290",
      "A 3% luxury tax, reported on Form 720",
      "Nothing — the manufacturer pays the excise tax at the factory"
    ],
    "answer": 0,
    "explain": "The §4051 retail excise tax on heavy trucks, tractors, and trailers is collected at the first retail sale by the dealer and remitted quarterly on Form 720. Form 2290's use tax is the buyer's, based on operating the truck."
  },
  {
    "id": "reporting-12",
    "section": "reporting",
    "topic": "Sales tax exposure",
    "difficulty": "easy",
    "q": "A retail deal the dealership treated as sales-tax exempt with no resale certificate or delivery record in the deal jacket is, on state audit,",
    "choices": [
      "Tax the dealership owes out of its own pocket",
      "Tax the customer owes, with the dealership only a collector",
      "Exempt anyway if the buyer was a licensed dealer",
      "A deductible bad debt for the uncollected tax"
    ],
    "answer": 0,
    "explain": "The dealership is the state's collector, and under-collected tax in a state audit becomes the dealership's expense. Resale certificates and out-of-state delivery records are what keep exempt sales exempt."
  },
  {
    "id": "reporting-13",
    "section": "reporting",
    "topic": "Filing deadlines",
    "difficulty": "easy",
    "q": "Forms W-2 and 1099-NEC for the prior year are due",
    "choices": [
      "January 31, to both the recipients and the government",
      "February 28 on paper, March 31 electronically",
      "April 15",
      "Within 30 days of the payment"
    ],
    "answer": 0,
    "explain": "The nonemployee compensation form moved to the W-2's January 31 deadline; other 1099s keep the later dates. Late filing penalties tier by how long the forms are overdue."
  },
  {
    "id": "reporting-14",
    "section": "reporting",
    "topic": "W-9s and backup withholding",
    "difficulty": "medium",
    "q": "A sublet vendor refuses to provide a taxpayer identification number. The dealership must",
    "choices": [
      "Withhold 24% backup withholding from its payments",
      "Stop using the vendor immediately",
      "File the 1099-NEC with the TIN box blank and no withholding",
      "Do nothing — the obligation is the vendor's"
    ],
    "answer": 0,
    "explain": "No TIN means backup withholding at 24%, remitted and reported like other withholding. Collecting a W-9 before the first check is the cheapest compliance step in the building."
  },
  {
    "id": "close-1",
    "section": "close",
    "topic": "Starting point",
    "difficulty": "easy",
    "q": "The natural starting point for the return is",
    "choices": [
      "The year-end DMS trial balance and factory statement, tied to Schedule L",
      "The prior year's return, rolled forward for this year's changes",
      "The bank statements and the floor plan lender's statement",
      "The DMS deal log and the parts and vehicle counts"
    ],
    "answer": 0,
    "explain": "The dealer management system's trial balance drives the factory statement; both must tie to the balance sheet the return reports. Everything after that is book-tax differences."
  },
  {
    "id": "close-2",
    "section": "close",
    "topic": "Year-end receivables",
    "difficulty": "medium",
    "q": "Contracts in transit, factory receivables (holdback, warranty claims, incentives), and vehicle receivables at year end are",
    "choices": [
      "Income already earned in the year",
      "Deferred until collected in January",
      "Written off as bad debts if over 30 days old",
      "Excluded from the return as timing items"
    ],
    "answer": 0,
    "explain": "Each is a fixed right to a determinable amount. Tracing January collections proves the balances; anything that never collects becomes a bad debt later, not a reason to skip the income now."
  },
  {
    "id": "close-3",
    "section": "close",
    "topic": "Floor plan reconciliation",
    "difficulty": "medium",
    "q": "Reconciling the floor plan means",
    "choices": [
      "Tying the lender's statement to the ledger unit by unit",
      "Confirming the credit limit with the lender",
      "Netting the payable against inventory on Schedule L",
      "Matching total payments to bank withdrawals only"
    ],
    "answer": 0,
    "explain": "Units, balances, and accrued interest must agree with the lender. A unit paid off but still on the statement, or sold but not paid off, shows up here before it shows up in an audit."
  },
  {
    "id": "close-4",
    "section": "close",
    "topic": "LIFO at year end",
    "difficulty": "medium",
    "q": "The year-end LIFO computation",
    "choices": [
      "Sets the reserve change that flows through cost of goods sold",
      "Is done only in years when inventory increases",
      "Uses the manufacturer's suggested retail prices as the index",
      "Is optional in years when the reserve barely moves"
    ],
    "answer": 0,
    "explain": "Compute the index, update the pools, book the reserve change — every year, up or down. The financial statements then reflect LIFO for the year end, satisfying conformity."
  },
  {
    "id": "close-5",
    "section": "close",
    "topic": "Accrued bonuses",
    "difficulty": "medium",
    "q": "Year-end bonuses accrued for the sales staff are deductible in the accrual year if",
    "choices": [
      "Paid within 2½ months of year end",
      "Approved by management before year end",
      "Reserved on the books at a reasonable estimate",
      "Paid at any time during the following year"
    ],
    "answer": 0,
    "explain": "The 2½-month rule covers ordinary employees; §267(e) holds the bonus of any S corporation shareholder (and shareholders' relatives) to the year paid, no matter how small the ownership. Make the payroll run by mid-March and document the liability at year end."
  },
  {
    "id": "close-6",
    "section": "close",
    "topic": "Book reserves",
    "difficulty": "medium",
    "q": "The dealership's books carry reserves for chargebacks, warranty work, and doubtful accounts. On the return they are",
    "choices": [
      "Added back on Schedule M-1",
      "Deductible as reasonable estimates",
      "Deductible up to 5% of sales",
      "Deducted this year and reversed on Schedule M-1 next year"
    ],
    "answer": 0,
    "explain": "Estimated reserves fail economic performance; only actual chargebacks, actual warranty costs, and specific bad debts are deductible. The reserves reverse through M-1 every year."
  },
  {
    "id": "close-7",
    "section": "close",
    "topic": "Vacation accrual",
    "difficulty": "medium",
    "q": "Accrued vacation pay at year end is deductible in the accrual year",
    "choices": [
      "Only to the extent paid within 2½ months of year end",
      "In full, as a fixed liability",
      "Never — vacation is deductible only when taken",
      "If the employee handbook guarantees it"
    ],
    "answer": 0,
    "explain": "Deferred compensation rules treat unpaid vacation like a bonus: 2½ months to pay or the deduction waits. The balance beyond that is another M-1 item."
  },
  {
    "id": "close-8",
    "section": "close",
    "topic": "Capitalization review",
    "difficulty": "medium",
    "q": "Before finalizing depreciation, the preparer should review",
    "choices": [
      "Repair accounts for items that are really improvements",
      "Only the additions the controller flagged as new",
      "The floor plan statement, so financed new units can be added to Form 4562",
      "Cost of goods sold, so the year's vehicle purchases can be depreciated"
    ],
    "answer": 0,
    "explain": "A new lift booked to repairs, or a $20,000 lot repave expensed, changes the return. The de minimis safe harbor covers the year only if the expensing policy was in place on January 1 — in writing, if the dealership has audited financial statements."
  },
  {
    "id": "close-9",
    "section": "close",
    "topic": "Book-tax differences",
    "difficulty": "medium",
    "q": "Typical Schedule M-1 items for a dealership include",
    "choices": [
      "Depreciation differences, book reserves, and half of meals",
      "Floor plan interest and the cost of vehicles sold",
      "Officer salaries and the employer's payroll taxes",
      "Sales tax collected and remitted to the state"
    ],
    "answer": 0,
    "explain": "The recurring list: tax versus book depreciation, reserve reversals, UNICAP, half of meals, entertainment at zero, fines, and officer life insurance. Interest, vehicle cost, and wages are deductible the same way on both sides."
  },
  {
    "id": "close-10",
    "section": "close",
    "topic": "Officer life insurance",
    "difficulty": "medium",
    "q": "Premiums on a life insurance policy covering the dealer principal, with the dealership as beneficiary, are",
    "choices": [
      "Nondeductible — an M-1 add-back",
      "Deductible as employee benefits",
      "Nondeductible, and taxable to the dealer principal as a fringe",
      "Deductible if the policy funds a buy-sell agreement"
    ],
    "answer": 0,
    "explain": "When the corporation benefits from the policy, §264 denies the deduction. The premiums (and the tax-free proceeds, if ever paid) run through the other adjustments account instead."
  },
  {
    "id": "close-11",
    "section": "close",
    "topic": "Meals and entertainment",
    "difficulty": "medium",
    "q": "The dealership's spending on sales-team lunches, customer golf outings, and the holiday party is",
    "choices": [
      "Lunches 50%, golf outings zero, the holiday party 100%",
      "All 50% deductible",
      "All fully deductible as marketing",
      "Lunches 100%, everything else zero"
    ],
    "answer": 0,
    "explain": "Business meals are half deductible; entertainment like golf is not deductible at all; recreational events primarily for rank-and-file employees stay fully deductible. Three accounts, three answers."
  },
  {
    "id": "close-12",
    "section": "close",
    "topic": "Carryovers",
    "difficulty": "medium",
    "q": "Which carryover lives at the S corporation level from year to year?",
    "choices": [
      "Disallowed business interest",
      "Net operating losses",
      "Charitable contribution carryovers",
      "Capital loss carryovers"
    ],
    "answer": 0,
    "explain": "S corporations don't carry NOLs, charitable, or capital-loss carryovers — those items pass through and carry at the shareholder level. Disallowed business interest is the exception that stays with the entity."
  },
  {
    "id": "close-13",
    "section": "close",
    "topic": "Basis worksheets",
    "difficulty": "medium",
    "q": "The preparer's year-end package for each shareholder should include",
    "choices": [
      "A stock and debt basis worksheet behind Form 7203",
      "Only the K-1 — basis is the shareholder's problem",
      "A copy of Schedule L showing the shareholder's equity",
      "The dealership's LIFO computation and reserve"
    ],
    "answer": 0,
    "explain": "Shareholders need basis to deduct losses and to know whether distributions are tax-free; Form 7203 attaches to their 1040s. Tracking it at the corporate level, where the data lives, is the reliable approach."
  },
  {
    "id": "close-14",
    "section": "close",
    "topic": "Extension strategy",
    "difficulty": "medium",
    "q": "If the LIFO computation and factory reconciliations won't be done by March 15, the right move is",
    "choices": [
      "File Form 7004 by March 15 and tell shareholders to extend their own returns",
      "File the 1120-S with estimates and amend later",
      "Skip the extension — S corps owe no tax, so there's no penalty",
      "File the shareholders' 1040s on estimates and amend when the K-1s arrive"
    ],
    "answer": 0,
    "explain": "The extension is free and automatic; a late 1120-S is penalized per shareholder per month even with zero tax. Shareholders waiting on a September K-1 extend to October 15 — and state PTE payments may still be due in April."
  },
  {
    "id": "numbers-1",
    "section": "numbers",
    "topic": "LIFO valuation",
    "difficulty": "medium",
    "q": "Riverbend's new-vehicle pool had a $4,000,000 base-year layer. At year end, inventory at current cost is $5,250,000 and the cumulative index is 1.25. The LIFO value of ending inventory is",
    "choices": [
      "$4,250,000",
      "$4,200,000",
      "$5,250,000",
      "$5,000,000"
    ],
    "answer": 0,
    "explain": "Deflate first: $5,250,000 ÷ 1.25 = $4,200,000 at base-year cost, so the pool grew by $200,000 in base dollars. That increment is priced at the current index — $200,000 × 1.25 = $250,000 — and stacked on the $4,000,000 base layer: $4,250,000. The $1,000,000 gap to current cost is the LIFO reserve."
  },
  {
    "id": "numbers-2",
    "section": "numbers",
    "topic": "Reserve increase",
    "difficulty": "easy",
    "q": "The LIFO reserve was $900,000 at the start of the year and $1,000,000 at the end. On the return, the change",
    "choices": [
      "Reduces taxable income by $100,000",
      "Increases taxable income by $100,000",
      "Reduces taxable income by $1,000,000",
      "Has no effect — the reserve is a balance sheet item"
    ],
    "answer": 0,
    "explain": "A growing reserve means cost of goods sold under LIFO exceeds cost of goods sold at current cost by another $100,000 this year. Only the change flows through income; the full reserve is the cumulative deferral sitting on Schedule L and Form 1125-A."
  },
  {
    "id": "numbers-3",
    "section": "numbers",
    "topic": "Reserve decrease",
    "difficulty": "easy",
    "q": "Falling prices and a smaller lot cut the LIFO reserve from $1,000,000 to $850,000. Taxable income",
    "choices": [
      "Rises by $150,000",
      "Falls by $150,000",
      "Rises by $850,000",
      "Is unchanged until the pool is rebuilt"
    ],
    "answer": 0,
    "explain": "The deferral unwinds: $150,000 of previously deferred income comes back through cost of goods sold. Reserves move both ways, which is why a shrinking-inventory year needs a tax projection before December."
  },
  {
    "id": "numbers-4",
    "section": "numbers",
    "topic": "§163(j) computation",
    "difficulty": "medium",
    "q": "Riverbend is over the §448(c) gross receipts threshold. Adjusted taxable income is $2,000,000, business interest income $50,000, floor plan financing interest $700,000, and other business interest $900,000. The deductible business interest for the year is",
    "choices": [
      "$1,350,000",
      "$1,600,000",
      "$650,000",
      "$1,300,000"
    ],
    "answer": 0,
    "explain": "The cap is $50,000 + 30% × $2,000,000 = $650,000, plus every dollar of floor plan financing interest: $1,350,000. Total interest is $1,600,000, so $250,000 carries forward at the corporate level."
  },
  {
    "id": "numbers-5",
    "section": "numbers",
    "topic": "Exception needed",
    "difficulty": "medium",
    "q": "Riverbend is over the §448(c) gross receipts threshold. Business interest income is $50,000, adjusted taxable income $2,000,000, and total business interest $1,600,000, including $700,000 of floor plan financing interest. Bonus depreciation for that year is",
    "choices": [
      "Not available — the floor plan exception was needed",
      "Available — using the floor plan exception has no effect on depreciation",
      "Available at 40% under the pre-act phase-down",
      "Not available on the vehicles, but available on equipment"
    ],
    "answer": 0,
    "explain": "Without the floor plan exception the cap is $650,000 against $1,600,000 of interest, so floor plan interest had to be taken into account — and §168(k)(9) then bars bonus depreciation for that trade or business for the year. §179 remains available."
  },
  {
    "id": "numbers-6",
    "section": "numbers",
    "topic": "Exception not needed",
    "difficulty": "medium",
    "q": "Adjusted taxable income is $6,000,000, business interest income $50,000, and total business interest is $1,600,000, including $700,000 of floor plan financing interest. Bonus depreciation for the year is",
    "choices": [
      "Fully available — the 30% cap alone covers the interest",
      "Barred, because the dealership has floor plan financing",
      "Available only on property not financed on the floor plan",
      "Available, but only if the floor plan interest is left out of the deduction"
    ],
    "answer": 0,
    "explain": "$50,000 + 30% × $6,000,000 = $1,850,000 exceeds the $1,600,000 of interest, so no floor plan interest was taken into account under the exception. The bonus exclusion never switches on — it applies only in a year the exception was actually used."
  },
  {
    "id": "numbers-7",
    "section": "numbers",
    "topic": "§179 phase-out",
    "difficulty": "medium",
    "q": "Riverbend places $4,300,000 of qualifying equipment in service in 2025. Its maximum §179 election is",
    "choices": [
      "$2,200,000",
      "$2,500,000",
      "$1,800,000",
      "$300,000"
    ],
    "answer": 0,
    "explain": "The $2,500,000 ceiling shrinks dollar-for-dollar once purchases pass $4,000,000: $300,000 over, so $2,200,000 remains. Whatever isn't expensed under §179 still qualifies for 100% bonus (property acquired after January 19, 2025), so the phase-out rarely costs a deduction — it changes which line it appears on."
  },
  {
    "id": "numbers-8",
    "section": "numbers",
    "topic": "Luxury-auto cap",
    "difficulty": "medium",
    "q": "A $48,000 loaner sedan (under 6,000 pounds) is placed in service in 2025, used 100% for business, with bonus depreciation claimed. The 2025 first-year §280F caps are $12,200 without bonus and $20,200 with it. First-year depreciation is",
    "choices": [
      "$20,200",
      "$48,000",
      "$12,200",
      "$9,600"
    ],
    "answer": 0,
    "explain": "Section 280F caps passenger-auto depreciation regardless of method; bonus lifts the first-year cap to $20,200 (indexed) but no further. The unrecovered cost is deducted in the later years within their own caps, and any remainder after the recovery period at the annual limit."
  },
  {
    "id": "numbers-9",
    "section": "numbers",
    "topic": "Heavy SUV",
    "difficulty": "medium",
    "q": "A $95,000 SUV rated over 6,000 pounds GVWR, ordered and delivered in March 2025, joins the loaner fleet with 100% business use. With §179 elected (the 2025 SUV cap is $31,300) and 100% bonus in effect, the maximum first-year deduction is",
    "choices": [
      "$95,000",
      "$31,300",
      "$20,200",
      "$63,700"
    ],
    "answer": 0,
    "explain": "The SUV cap limits only §179: $31,300. The remaining $63,700 of basis is bonus-eligible at 100%, and heavy vehicles escape the §280F caps entirely — so the whole cost is deducted in year one."
  },
  {
    "id": "numbers-10",
    "section": "numbers",
    "topic": "Built-in gains tax",
    "difficulty": "medium",
    "q": "Riverbend converted from C to S status three years ago with $1,200,000 of net unrealized built-in gain. This year it sells land held at conversion, recognizing $400,000 of built-in gain, and taxable income is not a limit. The built-in gains tax is",
    "choices": [
      "$84,000",
      "$252,000",
      "$0",
      "$140,000"
    ],
    "answer": 0,
    "explain": "Recognized built-in gain within the five-year window is taxed at the corporate rate: 21% × $400,000 = $84,000. The tax passes through to the shareholders as a loss, and the remaining $800,000 of net unrealized gain stays exposed until the window closes."
  },
  {
    "id": "numbers-11",
    "section": "numbers",
    "topic": "LIFO recapture installments",
    "difficulty": "medium",
    "q": "At the end of its last C corporation year the dealership's LIFO reserve was $1,000,000. The LIFO recapture tax under §1363(d) is paid as",
    "choices": [
      "Four annual installments of $52,500, the first with the final C return",
      "A single payment of $210,000 with the first S return",
      "Four annual installments of $52,500, the first with the first S return",
      "Nothing — the reserve is taxed to the shareholders as it unwinds"
    ],
    "answer": 0,
    "explain": "The $1,000,000 reserve is income in the last C year: 21% = $210,000, spread over four equal, interest-free installments. Inventory basis steps up by the recaptured amount, so the S corporation's future LIFO computations start from the new floor."
  },
  {
    "id": "numbers-12",
    "section": "numbers",
    "topic": "Stock basis",
    "difficulty": "medium",
    "q": "A shareholder's stock basis was $150,000 on January 1. The K-1 shows $220,000 of ordinary income, a $40,000 §179 deduction, $5,000 of nondeductible expenses, and $200,000 of distributions. Ending stock basis is",
    "choices": [
      "$125,000",
      "$170,000",
      "$130,000",
      "$325,000"
    ],
    "answer": 0,
    "explain": "Up for income, down for distributions, nondeductible items, and deductions — in that order: $150,000 + $220,000 − $200,000 − $5,000 − $40,000 = $125,000. The order matters only when basis would otherwise hit zero; here everything is absorbed."
  },
  {
    "id": "numbers-13",
    "section": "numbers",
    "topic": "Distribution over basis",
    "difficulty": "medium",
    "q": "After the year's income, a shareholder's stock basis is $60,000. The dealership, which has no C corporation earnings and profits, distributes $90,000 to that shareholder. The result is",
    "choices": [
      "$60,000 tax-free and $30,000 of capital gain",
      "$90,000 tax-free, with basis going negative",
      "$30,000 of ordinary dividend income",
      "$90,000 of ordinary income"
    ],
    "answer": 0,
    "explain": "Distributions come out of basis first; the excess over basis is gain from the sale of stock — capital, long-term if the shares were held over a year. With no old C earnings and profits there is no dividend layer to reach."
  },
  {
    "id": "numbers-14",
    "section": "numbers",
    "topic": "Loss limited by basis",
    "difficulty": "medium",
    "q": "A shareholder has $20,000 of stock basis and $50,000 of debt basis from a bona fide loan to the corporation. Her share of this year's loss is $80,000. She deducts",
    "choices": [
      "$70,000, with $10,000 suspended until basis is restored",
      "$20,000 now, with $60,000 suspended until she is repaid",
      "$80,000 in full",
      "$50,000, from debt basis only"
    ],
    "answer": 0,
    "explain": "Losses first exhaust stock basis, then debt basis: $20,000 + $50,000 = $70,000 deductible (subject to at-risk and passive limits on her return). The $10,000 waits for future income or capital contributions; repaying the loan before debt basis is restored triggers income."
  },
  {
    "id": "numbers-15",
    "section": "numbers",
    "topic": "Schedule M-1",
    "difficulty": "medium",
    "q": "Book income is $900,000. Book depreciation was $300,000 and tax depreciation $520,000; meals were $40,000; premiums on an officer life policy payable to the corporation were $12,000; and the warranty reserve grew by $30,000. Ordinary business income on Form 1120-S is",
    "choices": [
      "$742,000",
      "$680,000",
      "$712,000",
      "$762,000"
    ],
    "answer": 0,
    "explain": "Start at $900,000, subtract the extra $220,000 of tax depreciation, then add back the nondeductible half of meals ($20,000), the officer life premiums ($12,000), and the reserve increase ($30,000): $742,000. Schedule M-1 lists each piece."
  },
  {
    "id": "numbers-16",
    "section": "numbers",
    "topic": "Late-filing penalty",
    "difficulty": "easy",
    "q": "A three-shareholder dealership files its 1120-S on June 1 with no extension. At $245 per shareholder per month (the indexed rate for returns due in 2025), the late-filing penalty is",
    "choices": [
      "$2,205",
      "$735",
      "$245",
      "$0 — there was no tax due"
    ],
    "answer": 0,
    "explain": "The return was due March 17, 2025 (the 15th fell on a Saturday) and was filed June 1: any part of a month counts, so three months. $245 × 3 shareholders × 3 months = $2,205. Form 7004 by the due date would have made it zero."
  },
  {
    "id": "numbers-17",
    "section": "numbers",
    "topic": "Form 8300 aggregation",
    "difficulty": "medium",
    "q": "On one vehicle deal a customer pays $6,000 in currency at signing, $3,000 a week later, and $2,500 a month after that. Form 8300",
    "choices": [
      "Is due within 15 days of the third payment, when the total passes $10,000",
      "Is due within 15 days of the second payment",
      "Was due at signing, on the first cash payment",
      "Is not required — no single payment exceeded $10,000"
    ],
    "answer": 0,
    "explain": "Payments on one transaction within a year are aggregated; the form is due 15 days after the payment that carries the total over $10,000 — here the third, at $11,500. Report all $11,500 and give the customer the annual statement."
  },
  {
    "id": "numbers-18",
    "section": "numbers",
    "topic": "Annual lease value",
    "difficulty": "medium",
    "q": "The controller drives a company car with a fair market value of $30,500 and uses it 40% for personal trips. The annual lease value table gives $8,250 for that value. The amount added to her W-2 (before any fuel) is",
    "choices": [
      "$3,300",
      "$8,250",
      "$12,200",
      "$0 — the demo rules exclude it"
    ],
    "answer": 0,
    "explain": "Annual lease value × personal-use percentage: $8,250 × 40% = $3,300, plus 5.5 cents per personal mile if the dealership pays for fuel. The demonstrator exclusions are for salespeople, not the office."
  },
  {
    "id": "numbers-19",
    "section": "numbers",
    "topic": "Estimated tax",
    "difficulty": "easy",
    "q": "The dealership projects $84,000 of built-in gains tax for the year. Its estimated tax obligation is",
    "choices": [
      "Four installments of $21,000",
      "None — S corporations do not pay estimates",
      "One payment of $84,000 with the return",
      "Four installments of $21,000, paid by the shareholders on their own returns"
    ],
    "answer": 0,
    "explain": "An S corporation owing $500 or more of entity-level tax pays quarterly estimates like a C corporation — built-in gains, excess passive income, and recapture all count. The shareholders separately estimate on the pass-through income."
  },
  {
    "id": "numbers-20",
    "section": "numbers",
    "topic": "§1375 computation",
    "difficulty": "medium",
    "q": "An S corporation with old C corporation earnings and profits has $2,000,000 of gross receipts, $600,000 of passive investment income, and $500,000 of net passive income after directly connected expenses; taxable income is not a limit. The §1375 tax is",
    "choices": [
      "$17,500",
      "$126,000",
      "$105,000",
      "$0 — receipts exceed the passive income"
    ],
    "answer": 0,
    "explain": "Excess net passive income = $500,000 × ($600,000 − 25% × $2,000,000) ÷ $600,000 = $83,333 (it can never exceed taxable income); at 21% the tax is $17,500. Three consecutive years like this would also end the election — distributing the old E&P removes the exposure."
  },
  {
    "id": "numbers-21",
    "section": "numbers",
    "topic": "QBI computation",
    "difficulty": "medium",
    "q": "The sole shareholder's qualified business income from the dealership is $600,000; the dealership paid $3,000,000 of W-2 wages and owns $2,000,000 of depreciable property. Ignoring the taxable income limit, the §199A deduction is",
    "choices": [
      "$120,000",
      "$1,500,000",
      "$800,000",
      "$0 — dealerships are specified service businesses"
    ],
    "answer": 0,
    "explain": "20% of QBI is $120,000, tested against the greater of 50% of W-2 wages ($1,500,000) or 25% of wages plus 2.5% of property ($800,000). The wage limit is nowhere near binding for a store with a real payroll; the shareholder's own taxable income is the usual constraint."
  },
  {
    "id": "numbers-22",
    "section": "numbers",
    "topic": "December deliveries",
    "difficulty": "easy",
    "q": "In the last week of December Riverbend delivers 40 vehicles — $1,800,000 of sales with $1,600,000 of cost — whose lender funding arrives in January. This year's return includes",
    "choices": [
      "$200,000 of gross profit on those units",
      "Nothing — the deals are income when funded",
      "$1,800,000 of receipts and no cost until the floor plan is paid",
      "Only the down payments collected before year end"
    ],
    "answer": 0,
    "explain": "Delivery fixes the sale. Sales, cost of sales, the receivable (contracts in transit) and the still-open floor plan payoff all land in December — the funding date only moves cash."
  },
  {
    "id": "numbers-23",
    "section": "numbers",
    "topic": "§451(c) deferral",
    "difficulty": "medium",
    "q": "Riverbend sells $60,000 of three-year prepaid maintenance plans in December 2025 and, under the deferral method, recognizes $5,000 in 2025 to match its audited statements. In 2026 it must include",
    "choices": [
      "$55,000 — the rest of the deferred amount",
      "$20,000 — one third of the plans",
      "$0 — nothing until the services are performed",
      "$60,000 — the full amount, reversing the deferral"
    ],
    "answer": 0,
    "explain": "The deferral method gives exactly one year: everything not recognized in the year of receipt is income in the next tax year. The oil changes in 2027 and 2028 are expenses when performed, against income already taxed."
  },
  {
    "id": "numbers-24",
    "section": "numbers",
    "topic": "Recapture on a loaner",
    "difficulty": "medium",
    "q": "A loaner that cost $40,000 has $28,000 of accumulated depreciation when it is sold to a customer for $18,000. The dealership reports",
    "choices": [
      "$6,000 of ordinary income under §1245",
      "$6,000 of §1231 gain",
      "$18,000 of ordinary income",
      "A $22,000 loss"
    ],
    "answer": 0,
    "explain": "Adjusted basis is $12,000; the $6,000 gain is entirely depreciation recapture, ordinary on Form 4797 Part III. Only gain above the original $40,000 cost would have reached §1231."
  }
];
