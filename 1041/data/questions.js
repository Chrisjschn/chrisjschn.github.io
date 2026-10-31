/* 1041 Blitz question bank -- fiduciary income tax for trusts and estates, 11 sections, 132 questions.
   Original content: Form 1041 mechanics, DNI, grantor trusts, K-1s, and the
   706/709 basics that travel with them. 2025 figures where a number is
   unavoidable. Choice order is shuffled at display time; 'answer' is the
   correct index. Study aid only -- not legal or tax advice for any actual
   trust or estate.
   FAR_SECTIONS/FAR_QUESTIONS global names keep the engine identical to FAR Blitz. */

var FAR_SECTIONS = [
  {
    "id": "filing",
    "name": "Who Files & When",
    "short": "Filing",
    "emoji": "📬"
  },
  {
    "id": "returns",
    "name": "The Returns at Death",
    "short": "At Death",
    "emoji": "🗂️"
  },
  {
    "id": "trusttypes",
    "name": "Trust Types & Classification",
    "short": "Trust Types",
    "emoji": "🏛️"
  },
  {
    "id": "grantor",
    "name": "Grantor Trust Rules",
    "short": "Grantor",
    "emoji": "🪞"
  },
  {
    "id": "income",
    "name": "Income & IRD",
    "short": "Income & IRD",
    "emoji": "💵"
  },
  {
    "id": "dni",
    "name": "DNI & the Distribution Deduction",
    "short": "DNI",
    "emoji": "🚰"
  },
  {
    "id": "deductions",
    "name": "Deductions & Exemptions",
    "short": "Deductions",
    "emoji": "✂️"
  },
  {
    "id": "k1",
    "name": "Beneficiary K-1s",
    "short": "K-1s",
    "emoji": "📨"
  },
  {
    "id": "rates",
    "name": "Rates, Estimates & NIIT",
    "short": "Rates",
    "emoji": "📈"
  },
  {
    "id": "estatetax",
    "name": "Estate & Gift Tax Basics",
    "short": "706 & 709",
    "emoji": "⚖️"
  },
  {
    "id": "scenario",
    "name": "Practitioner Scenarios",
    "short": "Scenarios",
    "emoji": "🎯"
  }
];

var FAR_QUESTIONS = [
  {
    "id": "filing-1",
    "section": "filing",
    "topic": "Estate filing threshold",
    "difficulty": "easy",
    "q": "A calendar-year estate must file Form 1041 for any year its gross income is at least",
    "choices": [
      "$600",
      "$400",
      "$1,000",
      "$13,990,000"
    ],
    "answer": 0,
    "explain": "The estate trigger is $600 of gross income. Below that no 1041 is due — though one is often filed anyway in the final year, because losses and excess deductions only pass to beneficiaries on a filed return. The $13.99M figure is the estate TAX exclusion, a different tax entirely."
  },
  {
    "id": "filing-2",
    "section": "filing",
    "topic": "Trust filing threshold",
    "difficulty": "medium",
    "q": "A trust must file Form 1041 for any year it has",
    "choices": [
      "Any taxable income, $600 of gross income, or an NRA beneficiary",
      "Gross income of at least $600 — the same single trigger as an estate",
      "Taxable income of at least $1,000 after applying its exemption",
      "Made a distribution of any size to any beneficiary"
    ],
    "answer": 0,
    "explain": "Trusts have three triggers: ANY taxable income (even $5), gross income of $600 or more, or a nonresident alien beneficiary. An estate files at $600 of gross income — or, likewise, with an NRA beneficiary. The 'any taxable income' trigger is the trusts-only surprise."
  },
  {
    "id": "filing-3",
    "section": "filing",
    "topic": "Fiscal years",
    "difficulty": "medium",
    "q": "Which fiduciary entity can elect a fiscal tax year?",
    "choices": [
      "An estate — trusts generally must use the calendar year",
      "A trust — estates generally must use the calendar year",
      "Both, by attaching an election to the first return",
      "Neither; every Form 1041 covers a calendar year"
    ],
    "answer": 0,
    "explain": "Section 644 locks trusts onto the calendar year (wholly charitable and tax-exempt trusts aside). A new estate may pick any year end within twelve months of death — a genuine deferral lever, and one a revocable trust can borrow through the §645 election."
  },
  {
    "id": "filing-4",
    "section": "filing",
    "topic": "Due date",
    "difficulty": "easy",
    "q": "For a calendar-year trust, Form 1041 is due",
    "choices": [
      "April 15",
      "March 15",
      "June 30",
      "January 31"
    ],
    "answer": 0,
    "explain": "The 1041 is due the 15th day of the fourth month after year end — April 15 for calendar years, same as individuals. March 15 is the partnership and S corporation date; don't cross the wires."
  },
  {
    "id": "filing-5",
    "section": "filing",
    "topic": "Extensions",
    "difficulty": "medium",
    "q": "Filing Form 7004 for a calendar-year 1041 extends the return to",
    "choices": [
      "September 30 — a 5½-month extension",
      "October 15 — a six-month extension",
      "August 15 — a four-month extension",
      "December 31 — the end of the following year"
    ],
    "answer": 0,
    "explain": "Fiduciary returns get 5½ months, not the six individuals get — September 30 for a calendar year. Like every extension, it extends the paperwork, not the payment."
  },
  {
    "id": "filing-6",
    "section": "filing",
    "topic": "Who signs",
    "difficulty": "easy",
    "q": "Form 1041 for an estate is signed and filed by",
    "choices": [
      "The executor or personal representative",
      "The decedent's surviving spouse automatically",
      "The residuary beneficiary with the largest share",
      "The probate judge supervising the estate"
    ],
    "answer": 0,
    "explain": "The fiduciary — executor, administrator, or trustee — files and signs. Beneficiaries receive K-1s but have no signing role, and courts supervise without filing."
  },
  {
    "id": "filing-7",
    "section": "filing",
    "topic": "EIN",
    "difficulty": "easy",
    "q": "Before filing its first 1041, a new estate needs",
    "choices": [
      "Its own EIN — the decedent's SSN dies with the decedent",
      "To keep using the decedent's SSN for up to two years",
      "A state fiduciary number but no federal ID",
      "No new ID — estates file under the executor's SSN"
    ],
    "answer": 0,
    "explain": "The estate is a brand-new taxpayer and gets its own EIN (Form SS-4, instant online). Post-death income reported under the decedent's SSN is a cleanup item, not a filing method."
  },
  {
    "id": "filing-8",
    "section": "filing",
    "topic": "First-year period",
    "difficulty": "medium",
    "q": "An estate's first Form 1041 covers the period",
    "choices": [
      "Date of death through its chosen year end — often a short year",
      "January 1 of the death year through December 31",
      "Date of death through the following December 31, always",
      "The full calendar year, including the decedent's final wages"
    ],
    "answer": 0,
    "explain": "The estate is born at the moment of death; everything before that belongs on the final 1040. The first fiduciary year can be short, ending at any month end within twelve months of death."
  },
  {
    "id": "filing-9",
    "section": "filing",
    "topic": "Final return",
    "difficulty": "easy",
    "q": "An estate files a Form 1041 marked 'Final return' for the year in which",
    "choices": [
      "All assets are distributed and administration ends",
      "The executor is first appointed by the court",
      "The IRS accepts the estate tax Form 706",
      "It reaches the three-year legal limit on estates"
    ],
    "answer": 0,
    "explain": "An estate remains a taxpayer until it finishes distributing — there is no fixed lifespan, though unreasonably prolonged administration can be attacked. The final year matters: that's when carryovers and excess deductions pass out to beneficiaries."
  },
  {
    "id": "filing-10",
    "section": "filing",
    "topic": "Revocable trusts",
    "difficulty": "medium",
    "q": "While the grantor of a revocable living trust is alive, the trust typically",
    "choices": [
      "Files nothing — its income goes straight on the grantor's 1040",
      "Files its own 1041 and pays tax at compressed trust rates",
      "Files a 1041 deducting distributions made to the grantor",
      "Files Form 706 annually to report what it holds"
    ],
    "answer": 0,
    "explain": "A revocable trust is the textbook grantor trust — disregarded for income tax. Payors can report under the grantor's SSN and no separate return is needed. The 1041 era begins only when death makes the trust irrevocable."
  },
  {
    "id": "filing-11",
    "section": "filing",
    "topic": "§645 election",
    "difficulty": "medium",
    "q": "The §645 election, made on Form 8855, allows",
    "choices": [
      "A qualified revocable trust to be taxed as part of the estate on one 1041",
      "An estate to defer all filing until administration ends",
      "A trust to claim the estate's $600 exemption permanently",
      "Beneficiaries to file the 1041 when the trustee will not"
    ],
    "answer": 0,
    "explain": "Section 645 lets the decedent's revocable trust and the probate estate file as one entity during administration — picking up the estate's fiscal-year option, its two-year pass on estimated taxes, and its charitable set-aside rules. One return instead of two is the everyday selling point."
  },
  {
    "id": "filing-12",
    "section": "filing",
    "topic": "Form 56",
    "difficulty": "medium",
    "q": "Form 56, Notice Concerning Fiduciary Relationship, exists to",
    "choices": [
      "Tell the IRS a fiduciary now stands in the taxpayer's shoes for notices",
      "Apply for the estate's employer identification number",
      "Elect fiscal-year treatment on the estate's first return",
      "Claim the refund shown on the decedent's final return"
    ],
    "answer": 0,
    "explain": "Form 56 points IRS correspondence at the person now legally responsible. The EIN comes from Form SS-4, the fiscal year is adopted simply by filing the first return, and refunds ride on Form 1310 or the court certificate."
  },
  {
    "id": "returns-1",
    "section": "returns",
    "topic": "The three returns",
    "difficulty": "easy",
    "q": "A decedent's affairs can require up to three distinct federal returns. They are",
    "choices": [
      "Final 1040, the estate's income tax 1041, and the estate tax 706",
      "Final 1040, the estate's 706, and each beneficiary's amended 1040",
      "Final 1040, the estate's 1041, and a Form 709 reporting what the heirs received",
      "Final 1040, the estate's 706, and the executor's own amended 1040"
    ],
    "answer": 0,
    "explain": "Three lanes, three taxes: the final 1040 taxes the decedent's last income, the 1041 taxes what the estate earns during administration, and the 706 taxes the transfer of wealth itself. The 709 belongs to living donors — recipients never file it — and nobody amends their own return just because someone died."
  },
  {
    "id": "returns-2",
    "section": "returns",
    "topic": "Final 1040 period",
    "difficulty": "easy",
    "q": "For a cash-basis decedent who died June 10, the final Form 1040 reports",
    "choices": [
      "Income actually received January 1 through June 10",
      "All income the decedent earned through December 31",
      "Only income received after June 10 by the estate",
      "Income for the twelve months ending on the date of death"
    ],
    "answer": 0,
    "explain": "The final 1040 covers January 1 through the date of death, cash basis as usual — what was actually or constructively received while alive. Earned-but-unpaid amounts become income in respect of a decedent, taxed to whoever collects them."
  },
  {
    "id": "returns-3",
    "section": "returns",
    "topic": "Joint final return",
    "difficulty": "medium",
    "q": "In the year of death, the surviving spouse may",
    "choices": [
      "File a joint return combining the decedent's final income with their own",
      "File jointly only if the death occurred in the second half of the year",
      "Not file jointly — a decedent cannot appear on a joint return",
      "File jointly only with advance written consent from the IRS"
    ],
    "answer": 0,
    "explain": "A joint return for the year of death is allowed (unless the survivor remarries before year end). With a dependent child, the survivor may then use qualifying-surviving-spouse rates for the two following years."
  },
  {
    "id": "returns-4",
    "section": "returns",
    "topic": "Post-death income",
    "difficulty": "easy",
    "q": "Dividends paid on the decedent's stock three months after death are reported on",
    "choices": [
      "The estate's Form 1041",
      "The decedent's final Form 1040",
      "The estate tax Form 706, as income",
      "No return — post-death income goes untaxed"
    ],
    "answer": 0,
    "explain": "Income the assets earn after death belongs to the estate (or to whoever has succeeded to the asset). The 706 values property as of death; it never taxes income."
  },
  {
    "id": "returns-5",
    "section": "returns",
    "topic": "What the 706 is",
    "difficulty": "easy",
    "q": "Form 706 is best described as",
    "choices": [
      "A tax on the transfer of the estate's assets, not on its income",
      "The estate's annual income tax filing",
      "A combined income and transfer tax return",
      "An information return on which tax is never due"
    ],
    "answer": 0,
    "explain": "The 706 is the federal estate tax — a one-time transfer tax measured by the value of what the decedent owned at death. The estate's income is taxed separately, year by year, on the 1041."
  },
  {
    "id": "returns-6",
    "section": "returns",
    "topic": "Gift tax return",
    "difficulty": "easy",
    "q": "Form 709, the gift tax return, is filed by",
    "choices": [
      "The donor who made the gift",
      "The recipient of the gift",
      "The trustee of any trust the donor funds",
      "Both donor and recipient, each reporting half"
    ],
    "answer": 0,
    "explain": "Transfer taxes sit on the transferor's side of the table: donors file 709s, estates file 706s. The recipient files nothing and owes nothing — and for income tax, gifts received are simply excluded."
  },
  {
    "id": "returns-7",
    "section": "returns",
    "topic": "Inheritances and income",
    "difficulty": "easy",
    "q": "Cash inherited outright from an estate is, to the beneficiary,",
    "choices": [
      "Not gross income at all",
      "Ordinary income in the year received",
      "Capital gain to the extent it exceeds $600",
      "Taxable only if the estate skipped its 706"
    ],
    "answer": 0,
    "explain": "Section 102 excludes gifts and inheritances from income. What CAN reach a beneficiary as taxable income is the estate's earnings passed through on a K-1 — the corpus itself arrives tax-free."
  },
  {
    "id": "returns-8",
    "section": "returns",
    "topic": "Basis step-up",
    "difficulty": "medium",
    "q": "Stock bought for $20,000, worth $90,000 at the owner's death, passes to an heir. The heir's basis is",
    "choices": [
      "$90,000 — fair market value at death",
      "$20,000 — the decedent's original cost",
      "$70,000 — the untaxed appreciation only",
      "Zero, until the heir has held it one year"
    ],
    "answer": 0,
    "explain": "Section 1014 resets basis to date-of-death value — up or down. The $70,000 of lifetime appreciation escapes income tax entirely, which is why holding appreciated assets until death often beats gifting them with carryover basis."
  },
  {
    "id": "returns-9",
    "section": "returns",
    "topic": "Alternate valuation",
    "difficulty": "medium",
    "q": "The alternate valuation election (valuing assets six months after death) is allowed only when it",
    "choices": [
      "Lowers both the gross estate and the estate tax due",
      "Raises the heirs' basis without changing the tax",
      "Is applied asset by asset for whichever mix helps",
      "Lowers the gross estate, even if no estate tax was due anyway"
    ],
    "answer": 0,
    "explain": "Section 2032 is built anti-abuse: BOTH tests must pass, so a no-tax estate can never elect it just to move basis. It is all assets or none — except property sold during the six months, which is valued at its sale."
  },
  {
    "id": "returns-10",
    "section": "returns",
    "topic": "Life insurance",
    "difficulty": "medium",
    "q": "Life insurance proceeds paid at death to a named beneficiary are",
    "choices": [
      "Income-tax-free, but possibly in the gross estate",
      "Ordinary income to the beneficiary when paid",
      "Tax-free for income and always outside the gross estate",
      "Taxable income unless paid in installments"
    ],
    "answer": 0,
    "explain": "Section 101 keeps death proceeds out of income tax. The estate tax is a separate question: if the decedent held incidents of ownership (or the estate is the beneficiary), the proceeds land in the gross estate — the reason irrevocable life insurance trusts exist."
  },
  {
    "id": "returns-11",
    "section": "returns",
    "topic": "Decedent's medical bills",
    "difficulty": "medium",
    "q": "Medical bills of the decedent paid by the estate within one year of death may be",
    "choices": [
      "Deducted on the final 1040 instead of the 706, by election",
      "Deducted on both the 706 and the final 1040",
      "Deducted only on the estate's own 1041",
      "Deducted only on the 706, as claims against the estate"
    ],
    "answer": 0,
    "explain": "An election with an attached waiver moves them to the final 1040, subject to the usual AGI floor. Since most estates owe no estate tax, a 706 deduction would be wasted — the final-1040 election is usually the live option, and the 1041 never gets them at all."
  },
  {
    "id": "returns-12",
    "section": "returns",
    "topic": "Decedent's refund",
    "difficulty": "medium",
    "q": "A refund is due on the decedent's final 1040. It is claimed by",
    "choices": [
      "The representative, via Form 1310 or the court appointment papers",
      "Direct deposit to the account on the prior-year return",
      "The IRS crediting it forward to the estate's 1041",
      "Any heir who files first with a copy of the will"
    ],
    "answer": 0,
    "explain": "A surviving spouse on a joint return needs nothing extra; a court-appointed representative attaches the certificate; everyone else uses Form 1310. The refund is an estate asset — it doesn't race to the fastest filer."
  },
  {
    "id": "trusttypes-1",
    "section": "trusttypes",
    "topic": "Revocable trusts",
    "difficulty": "easy",
    "q": "Because its grantor can take the assets back at any time, a funded revocable trust is",
    "choices": [
      "Ignored for income tax, with its funding an incomplete gift",
      "A separate taxpayer that files its own Form 1041 each year",
      "A completed gift that consumes the donor's annual exclusion",
      "Exempt from income tax until the grantor's death"
    ],
    "answer": 0,
    "explain": "Retained power to revoke means nothing has really been given away: the income stays on the grantor's own 1040, funding is an incomplete gift (no 709), and the assets remain in the gross estate. A revocable trust avoids probate — not tax."
  },
  {
    "id": "trusttypes-2",
    "section": "trusttypes",
    "topic": "Death of the grantor",
    "difficulty": "medium",
    "q": "At the grantor's death, a revocable living trust",
    "choices": [
      "Becomes irrevocable, gets its own EIN, and starts filing Form 1041",
      "Dissolves automatically into the probate estate",
      "Keeps reporting under the decedent's SSN until fully funded",
      "Converts by operation of law into a simple trust"
    ],
    "answer": 0,
    "explain": "Death ends the power to revoke, and with it grantor-trust status. The trust becomes a separate taxpayer — EIN, 1041, the works — unless a §645 election folds it into the estate's return for the administration period."
  },
  {
    "id": "trusttypes-3",
    "section": "trusttypes",
    "topic": "Simple trust test",
    "difficulty": "medium",
    "q": "A trust qualifies as a simple trust for a year only if it",
    "choices": [
      "Distributes all income currently, with no charity and no corpus paid out",
      "Has a single income beneficiary and a single independent trustee",
      "Files on the calendar year and claims the $300 exemption",
      "Distributes every dollar, income and principal alike, each year"
    ],
    "answer": 0,
    "explain": "Three-part test: required to distribute all accounting income currently, no charitable beneficiary, and no corpus actually distributed that year. Head count of beneficiaries has nothing to do with it — 'simple' describes the distribution mechanics."
  },
  {
    "id": "trusttypes-4",
    "section": "trusttypes",
    "topic": "Complex trusts",
    "difficulty": "easy",
    "q": "A trust that may accumulate income, or that actually distributes principal this year, is for that year a",
    "choices": [
      "Complex trust",
      "Simple trust",
      "Grantor trust",
      "Charitable remainder trust"
    ],
    "answer": 0,
    "explain": "Complex is the everything-else category. On the income side the mere power to accumulate is enough — simple status requires that all income be required to be distributed. On the corpus side it takes an actual principal distribution; a standby power to invade doesn't count. The two-tier system comes with the label; the exemption doesn't quite — a trust still required to distribute all income keeps its $300 exemption even in a corpus-distribution year, while one that may accumulate takes $100."
  },
  {
    "id": "trusttypes-5",
    "section": "trusttypes",
    "topic": "Year-by-year status",
    "difficulty": "medium",
    "q": "Simple or complex status is determined",
    "choices": [
      "Year by year — the same trust can flip between them",
      "Once, at creation, from the trust instrument alone",
      "By an election the trustee makes on the first return",
      "By whether the grantor is still living that year"
    ],
    "answer": 0,
    "explain": "The label is retested annually. A trust required to pay out income is simple in an ordinary year — but distribute a dollar of corpus and it is complex for that year. There is no election and no permanence."
  },
  {
    "id": "trusttypes-6",
    "section": "trusttypes",
    "topic": "Final year",
    "difficulty": "medium",
    "q": "In its final year, a trust that had always been simple is",
    "choices": [
      "Complex — winding up means distributing corpus",
      "Still simple, provided the income is paid out first",
      "Neither — terminating trusts are outside the labels",
      "Simple only if the trustee files the 65-day election"
    ],
    "answer": 0,
    "explain": "Termination distributes principal by definition, and corpus out the door makes the year complex. That matters: the final year is also when capital gains join DNI and carryovers pass to beneficiaries."
  },
  {
    "id": "trusttypes-7",
    "section": "trusttypes",
    "topic": "Testamentary trusts",
    "difficulty": "easy",
    "q": "A testamentary trust is one created",
    "choices": [
      "By the decedent's will, funded at death",
      "During the grantor's life, by a written agreement",
      "By court order for an incapacitated person",
      "When beneficiaries disclaim an inheritance"
    ],
    "answer": 0,
    "explain": "Testamentary means born from the will; inter vivos means created during life. A testamentary trust starts out irrevocable and non-grantor — its grantor is already gone."
  },
  {
    "id": "trusttypes-8",
    "section": "trusttypes",
    "topic": "Accounting income",
    "difficulty": "medium",
    "q": "Fiduciary accounting income — the 'income' a simple trust must distribute — is defined by",
    "choices": [
      "The trust instrument and state principal-and-income law",
      "The Internal Revenue Code's definition of gross income",
      "The trustee's discretion, subject to IRS review",
      "Whatever the Form 1041 reports as total income"
    ],
    "answer": 0,
    "explain": "Accounting income is a state-law concept: the document controls, backstopped by the Uniform Principal and Income Act. It routinely differs from taxable income — the classic wedge being capital gains, which usually belong to principal."
  },
  {
    "id": "trusttypes-9",
    "section": "trusttypes",
    "topic": "Income vs principal",
    "difficulty": "medium",
    "q": "Under the usual principal-and-income rules, a $40,000 gain on the sale of trust stock is",
    "choices": [
      "Principal — it stays in the trust's corpus account",
      "Accounting income the income beneficiary can demand",
      "Split evenly between income and principal",
      "Income, but only when the trust is complex"
    ],
    "answer": 0,
    "explain": "Sale proceeds, gains included, ordinarily replace the asset inside principal; the income beneficiary's claim is to interest, dividends, and rents. This is exactly why capital gains usually stay taxed to the trust rather than riding out through DNI."
  },
  {
    "id": "trusttypes-10",
    "section": "trusttypes",
    "topic": "Exemptions",
    "difficulty": "medium",
    "q": "The Form 1041 exemption amounts are",
    "choices": [
      "$600 estate, $300 simple trust, $100 complex trust",
      "$600 for every fiduciary filer alike",
      "$1,000 estate, $500 for any trust",
      "Indexed each year like the standard deduction"
    ],
    "answer": 0,
    "explain": "Fixed by statute and never indexed: estates $600, trusts required to distribute all income $300, all other trusts $100. And no filer on a 1041 gets a standard deduction at all."
  },
  {
    "id": "trusttypes-11",
    "section": "trusttypes",
    "topic": "Corpus kills simple",
    "difficulty": "medium",
    "q": "A trust required to pay out all income also distributed $10,000 of principal this year. The trust is",
    "choices": [
      "Complex for this year, despite the income requirement",
      "Simple, because the instrument requires income distributions",
      "Simple, if the principal went to the same beneficiary",
      "A grantor trust as to the principal portion only"
    ],
    "answer": 0,
    "explain": "An actual corpus distribution makes the year complex no matter what the document says about income. Next year, with no corpus paid, the same trust is simple again — the test is annual and factual."
  },
  {
    "id": "trusttypes-12",
    "section": "trusttypes",
    "topic": "Trusts and S corps",
    "difficulty": "medium",
    "q": "Which trusts can hold S corporation stock without terminating the S election?",
    "choices": [
      "Grantor trusts, QSSTs and ESBTs, among a short statutory list",
      "Any trust, so long as it files a timely Form 1041",
      "None — only human individuals may hold S corp shares",
      "Only charitable remainder trusts, by private ruling"
    ],
    "answer": 0,
    "explain": "Section 1361 permits grantor trusts (and a two-year window after the owner's death), qualified subchapter S trusts, electing small business trusts, voting trusts, and certain testamentary trusts. Park S stock in anything else and the election terminates — a five-figure mistake."
  },
  {
    "id": "grantor-1",
    "section": "grantor",
    "topic": "Core concept",
    "difficulty": "easy",
    "q": "When a trust is a 'grantor trust,' its income is",
    "choices": [
      "Taxed to the grantor personally, as if the trust didn't exist",
      "Taxed to the trust at its own compressed rates",
      "Split between the grantor and the beneficiaries",
      "Deferred until the trust finally terminates"
    ],
    "answer": 0,
    "explain": "Sections 671–679 look through the trust entirely: every item of income, deduction, and credit lands on the grantor's own 1040. The trust may exist for state law, creditors, and probate — the income tax just doesn't see it."
  },
  {
    "id": "grantor-2",
    "section": "grantor",
    "topic": "Power to revoke",
    "difficulty": "easy",
    "q": "The most common power making a trust a grantor trust is",
    "choices": [
      "The grantor's power to revoke and take the assets back",
      "An independent trustee's discretion to spray income among the children",
      "The grantor's power to remove the trustee and name an independent successor",
      "The trustee's power to allocate receipts between income and principal"
    ],
    "answer": 0,
    "explain": "Section 676 catches revocation power, which is why every garden-variety revocable living trust is a grantor trust. The others are safe: an independent trustee's spray power sits inside the §674(c) exception, swapping one independent trustee for another is fine under Rev. Rul. 95-58, and income-versus-principal allocation is ordinary fiduciary administration."
  },
  {
    "id": "grantor-3",
    "section": "grantor",
    "topic": "Income for the spouse",
    "difficulty": "medium",
    "q": "A trust whose income may be paid to the grantor's spouse is",
    "choices": [
      "A grantor trust — income for grantor or spouse triggers §677",
      "A complex trust entitled to a marital deduction",
      "Disqualified from filing Form 1041 altogether",
      "A simple trust as to the spouse's share only"
    ],
    "answer": 0,
    "explain": "Section 677 attributes income that may be distributed to, or held for, the grantor or the grantor's spouse. 'May be' is enough — the mere possibility taxes it to the grantor."
  },
  {
    "id": "grantor-4",
    "section": "grantor",
    "topic": "Reversions",
    "difficulty": "medium",
    "q": "A retained reversionary interest makes a trust a grantor trust when its value at funding exceeds",
    "choices": [
      "5% of the trust's value",
      "1% of the trust's value",
      "25% of the trust's value",
      "50% of the trust's value"
    ],
    "answer": 0,
    "explain": "Section 673 uses an actuarial 5% test measured at funding. Keep a meaningful chance of getting the property back and the income stays yours — the rule that ended the old short-term Clifford trust game."
  },
  {
    "id": "grantor-5",
    "section": "grantor",
    "topic": "Defective by design",
    "difficulty": "medium",
    "q": "The classic power used to make a trust 'intentionally defective' — grantor for income tax, yet outside the gross estate — is",
    "choices": [
      "A nonfiduciary power to swap assets of equivalent value",
      "The grantor's outright power to revoke the trust",
      "Naming the grantor as sole trustee and sole beneficiary",
      "A retained reversion worth more than half the trust"
    ],
    "answer": 0,
    "explain": "The §675(4)(C) substitution power flips grantor-trust status on without dragging the assets back into the estate — revocation or a fat reversion would do both. That asymmetry is the whole IDGT design."
  },
  {
    "id": "grantor-6",
    "section": "grantor",
    "topic": "Reporting mechanics",
    "difficulty": "medium",
    "q": "A grantor trust that has its own EIN typically reports by",
    "choices": [
      "Filing a 1041 with a grantor statement; tax lands on the grantor's 1040",
      "Filing a regular 1041 and paying tax at compressed trust rates",
      "Issuing beneficiary K-1s exactly like a complex trust",
      "Attaching Form 706 to the grantor's return each year"
    ],
    "answer": 0,
    "explain": "The 'grantor return' 1041 has empty money lines — just an attached statement listing the items the grantor must pick up. No tax is computed at the trust level because, for income tax, there is no trust."
  },
  {
    "id": "grantor-7",
    "section": "grantor",
    "topic": "Skipping the 1041",
    "difficulty": "easy",
    "q": "Instead of filing any 1041, a revocable trust's income can simply be",
    "choices": [
      "Reported under the grantor's SSN directly on their 1040",
      "Ignored until the trust holds $600 of gross income",
      "Reported by the beneficiaries in equal shares",
      "Deferred until the grantor's death settles matters"
    ],
    "answer": 0,
    "explain": "The regulations offer optional methods: give payors the grantor's SSN and the 1099s flow straight to the right return, no fiduciary filing at all. The $600 threshold belongs to nongrantor trusts."
  },
  {
    "id": "grantor-8",
    "section": "grantor",
    "topic": "Grantor pays the tax",
    "difficulty": "medium",
    "q": "When the grantor of an IDGT pays the trust's income tax from personal funds, the payment is",
    "choices": [
      "Not a gift — the tax is the grantor's own legal liability",
      "A taxable gift to the trust, reportable each year",
      "Deductible by the grantor as an itemized deduction",
      "Income to the trust in the year of the payment"
    ],
    "answer": 0,
    "explain": "The income is legally the grantor's, so paying the tax discharges the grantor's own debt — yet it lets the trust compound gross of tax. Planners prize it as a transfer-tax-free extra gift, blessed by Rev. Rul. 2004-64."
  },
  {
    "id": "grantor-9",
    "section": "grantor",
    "topic": "Status ends at death",
    "difficulty": "medium",
    "q": "Grantor trust status ends at the grantor's death, after which the trust",
    "choices": [
      "Files Form 1041 as a separate taxpayer going forward",
      "Reports on the decedent's final 1040 for three more years",
      "Merges automatically into the probate estate's return",
      "Becomes tax-exempt until it is fully funded"
    ],
    "answer": 0,
    "explain": "Death converts the arrangement into an ordinary irrevocable trust: EIN, Form 1041, compressed brackets, K-1s. If it was the decedent's revocable trust, a §645 election can pair it with the estate for administration."
  },
  {
    "id": "grantor-10",
    "section": "grantor",
    "topic": "Distributions to grantor",
    "difficulty": "easy",
    "q": "A distribution of cash from a grantor trust to its grantor is",
    "choices": [
      "Not a taxable event — that income was already taxed to the grantor",
      "Ordinary income to the grantor when received",
      "Capital gain to the extent of the trust's appreciation",
      "Taxable only above the trust's $100 exemption"
    ],
    "answer": 0,
    "explain": "You cannot be taxed on receiving your own money twice. The grantor already reported the trust's income as earned; moving cash across a line the tax law doesn't recognize changes nothing."
  },
  {
    "id": "grantor-11",
    "section": "grantor",
    "topic": "Accumulation irrelevant",
    "difficulty": "medium",
    "q": "A grantor trust accumulates all of its income; nothing is paid to anyone. The income is taxed to",
    "choices": [
      "The grantor anyway — distributions are irrelevant under the grantor rules",
      "The trust, since accumulation defeats grantor status",
      "No one, until distributions eventually begin",
      "The beneficiaries, under the throwback rules"
    ],
    "answer": 0,
    "explain": "Grantor taxation follows the retained powers, not the cash. DNI, distribution deductions, and K-1s all belong to the nongrantor world — none of that machinery even switches on here."
  },
  {
    "id": "grantor-12",
    "section": "grantor",
    "topic": "Sales to the trust",
    "difficulty": "medium",
    "q": "A sale of appreciated property by the grantor to their own grantor trust triggers",
    "choices": [
      "No gain — grantor and trust are the same taxpayer for income tax",
      "Capital gain, exactly like a sale to a third party",
      "Ordinary income under the related-party rules",
      "Gift tax measured by the full sale price"
    ],
    "answer": 0,
    "explain": "Rev. Rul. 85-13: you cannot sell property to yourself, and for income tax the grantor trust IS the grantor. This no-gain sale is the engine of the estate-freeze 'installment sale to an IDGT' — assets out of the estate, no capital gain on the way."
  },
  {
    "id": "income-1",
    "section": "income",
    "topic": "IRD defined",
    "difficulty": "medium",
    "q": "Income in respect of a decedent (IRD) is",
    "choices": [
      "Income the decedent had earned but not yet received at death",
      "Any income the estate earns during administration",
      "Income distributed to beneficiaries in the estate's final year",
      "The decedent's income for the year before the year of death"
    ],
    "answer": 0,
    "explain": "IRD is the earned-but-uncollected slice: it missed the final 1040 (cash basis) and instead is taxed to whoever actually receives it — estate or beneficiary — keeping the character it had in the decedent's hands."
  },
  {
    "id": "income-2",
    "section": "income",
    "topic": "Spotting IRD",
    "difficulty": "easy",
    "q": "Which of these is classic IRD?",
    "choices": [
      "The decedent's last paycheck, issued to the estate after death",
      "Rent the estate earns on the building months after death",
      "Gain on the estate's sale of stock it holds",
      "Interest earned on the estate's own bank account"
    ],
    "answer": 0,
    "explain": "Earned before death, received after — that's the IRD signature. The other three are the estate's own post-death income: ordinary 1041 items, not IRD, and the stock even carries a stepped-up basis."
  },
  {
    "id": "income-3",
    "section": "income",
    "topic": "No step-up for IRD",
    "difficulty": "medium",
    "q": "Unlike most inherited assets, IRD items such as a traditional IRA",
    "choices": [
      "Get no basis step-up — the built-in income stays taxable",
      "Are stepped up to date-of-death value like stock",
      "Are taxed only on their growth after the death",
      "Escape income tax once reported on the 706"
    ],
    "answer": 0,
    "explain": "Section 1014(c) carves IRD out of the step-up. The deferred income the decedent never paid tax on remains fully taxable to the recipient — the big exception to 'inherited assets start fresh.'"
  },
  {
    "id": "income-4",
    "section": "income",
    "topic": "§691(c) deduction",
    "difficulty": "medium",
    "q": "A beneficiary who collects IRD from an estate that actually paid estate tax may claim",
    "choices": [
      "An itemized deduction for the estate tax attributable to the IRD",
      "A refundable credit equal to the estate tax paid",
      "A basis increase equal to the estate tax",
      "Nothing — the overlap is simply borne twice"
    ],
    "answer": 0,
    "explain": "Section 691(c) softens the double hit when the same dollars face both estate tax and income tax. It survived the TCJA because it is not a 2%-floor miscellaneous deduction — routinely missed on inherited IRAs from taxable estates."
  },
  {
    "id": "income-5",
    "section": "income",
    "topic": "Inherited IRAs",
    "difficulty": "medium",
    "q": "Distributions from an inherited traditional IRA are",
    "choices": [
      "Taxable income to the beneficiary as received — classic IRD",
      "Tax-free, because inheritances are excluded from income",
      "Taxable only above the account's date-of-death value",
      "Reported on the 706 instead of anyone's income tax"
    ],
    "answer": 0,
    "explain": "The exclusion for inheritances never shelters IRD, and a traditional IRA is nothing but deferred income. Most non-spouse heirs must also drain the account within ten years, which concentrates the tax."
  },
  {
    "id": "income-6",
    "section": "income",
    "topic": "Savings bond interest",
    "difficulty": "medium",
    "q": "U.S. savings bond interest accrued but untaxed at death can be",
    "choices": [
      "Picked up on the final 1040 by election, or left as IRD",
      "Excluded permanently under the basis step-up at death",
      "Deferred, untaxed, until the bonds finally mature",
      "Reported half on the final 1040 and half by the estate"
    ],
    "answer": 0,
    "explain": "The executor may elect to report all accrued bond interest on the decedent's final return — smart when the decedent's last-year deductions or low bracket would absorb it. Otherwise it waits as IRD for whoever redeems the bonds."
  },
  {
    "id": "income-7",
    "section": "income",
    "topic": "Estate's own income",
    "difficulty": "easy",
    "q": "Interest and dividends earned on estate assets during administration are",
    "choices": [
      "Gross income of the estate, reported on its 1041",
      "Tax-free while the estate remains open",
      "Taxed directly to the heirs before any distribution",
      "Added to the 706 as after-discovered assets"
    ],
    "answer": 0,
    "explain": "An open estate is a taxpayer, and its earnings are its income. Beneficiaries are taxed only through distributions carrying out DNI — not by mere expectancy."
  },
  {
    "id": "income-8",
    "section": "income",
    "topic": "Selling inherited assets",
    "difficulty": "medium",
    "q": "An heir sells inherited stock eight months after the death. The gain is",
    "choices": [
      "Long-term automatically, measured from the stepped-up basis",
      "Short-term, since the holding period began at death",
      "Ordinary income under the IRD rules",
      "Zero by definition — inherited assets carry no gain"
    ],
    "answer": 0,
    "explain": "Inherited property is deemed held long-term regardless of actual time (§1223(9)), and gain is measured from date-of-death value. With a fresh step-up, eight-month gains are usually modest — but they are long-term whatever they are."
  },
  {
    "id": "income-9",
    "section": "income",
    "topic": "Municipal interest",
    "difficulty": "medium",
    "q": "Municipal bond interest earned by a trust",
    "choices": [
      "Stays tax-exempt, but still enters the DNI computation",
      "Becomes taxable at compressed trust rates",
      "Is exempt only if distributed within 65 days",
      "Loses its exemption unless the trust is simple"
    ],
    "answer": 0,
    "explain": "Exempt character survives the trust and passes through to beneficiaries. It still matters mechanically: tax-exempt income joins DNI, absorbs a share of the trustee's fees, and shrinks the deductible portion of distributions."
  },
  {
    "id": "income-10",
    "section": "income",
    "topic": "Who pays, baseline",
    "difficulty": "easy",
    "q": "Rental profit earned by a complex trust that distributes nothing this year is taxed to",
    "choices": [
      "The trust itself, on its Form 1041",
      "The beneficiaries, through their K-1s",
      "The grantor, wherever located",
      "No one, until a distribution occurs"
    ],
    "answer": 0,
    "explain": "No distribution, no distribution deduction, no K-1 income: the trust keeps the income and pays the tax at its own compressed rates. That arithmetic is what pushes trustees toward distributing."
  },
  {
    "id": "income-11",
    "section": "income",
    "topic": "Gains stay home",
    "difficulty": "medium",
    "q": "Capital gains recognized by a trust are ordinarily",
    "choices": [
      "Taxed to the trust — they sit in corpus, outside DNI",
      "Passed out to beneficiaries with the year's other income",
      "Exempt under the principal-and-income rules",
      "Deferred until the trust's final year"
    ],
    "answer": 0,
    "explain": "Because gains allocate to principal, they usually stay out of DNI and are taxed at the trust level. The exceptions: the governing instrument or a consistent trustee practice pushes gains to income, or it's the final year, when everything rides out."
  },
  {
    "id": "income-12",
    "section": "income",
    "topic": "Post-death paychecks",
    "difficulty": "medium",
    "q": "Wages earned by a cash-basis decedent before death but paid afterward go",
    "choices": [
      "To the estate or successor as IRD — never on the final 1040",
      "On the final 1040, since they were earned while alive",
      "Half on the final 1040 and half on the estate's 1041",
      "Untaxed — death cuts off the employer's reporting"
    ],
    "answer": 0,
    "explain": "The final 1040 takes only what a cash-basis decedent actually received. The check that arrives later is the textbook IRD item, taxed to whoever collects it — same character, new taxpayer."
  },
  {
    "id": "dni-1",
    "section": "dni",
    "topic": "What DNI does",
    "difficulty": "easy",
    "q": "Distributable net income (DNI) functions as",
    "choices": [
      "The cap on the distribution deduction and on what beneficiaries report",
      "The trust's total taxable income computed before any distributions",
      "The minimum amount state law requires the trustee to pay out yearly",
      "The base for computing the trustee's reasonable compensation"
    ],
    "answer": 0,
    "explain": "DNI is the system's governor: the entity deducts no more than DNI, beneficiaries report no more than DNI, and the income keeps its character passing through. One number does all three jobs."
  },
  {
    "id": "dni-2",
    "section": "dni",
    "topic": "Deduction is capped",
    "difficulty": "medium",
    "q": "A complex trust with DNI of $40,000 distributes $55,000. Its income distribution deduction is",
    "choices": [
      "$40,000 — capped at DNI",
      "$55,000 — the amount actually paid",
      "$15,000 — the excess over DNI",
      "Zero — complex trusts get no deduction"
    ],
    "answer": 0,
    "explain": "The deduction is the lesser of distributions or DNI. The $15,000 beyond DNI is corpus riding along — no deduction to the trust, and tax-free to the beneficiary."
  },
  {
    "id": "dni-3",
    "section": "dni",
    "topic": "Computing DNI",
    "difficulty": "medium",
    "q": "Relative to taxable income, DNI generally",
    "choices": [
      "Excludes capital gains allocated to corpus and includes tax-exempt interest",
      "Includes corpus capital gains and excludes all tax-exempt interest",
      "Equals taxable income exactly, by definition",
      "Excludes both capital gains and every kind of interest"
    ],
    "answer": 0,
    "explain": "Start with taxable income, add back the exemption, pull out corpus capital gains, and fold in net tax-exempt interest. The result measures what distributions can carry out — which is why gains usually stay behind and muni interest rides through exempt."
  },
  {
    "id": "dni-4",
    "section": "dni",
    "topic": "Beneficiary side of the cap",
    "difficulty": "medium",
    "q": "A beneficiary receiving $30,000 from a trust whose DNI is $18,000 reports",
    "choices": [
      "$18,000 of income; the other $12,000 is tax-free corpus",
      "$30,000 — everything received from a trust is income",
      "$12,000 — only the corpus portion is taxable",
      "Nothing until the trust files its final return"
    ],
    "answer": 0,
    "explain": "The same DNI ceiling works on both sides: distributions carry out income only up to DNI, and anything beyond arrives as nontaxable principal. The K-1 will show $18,000, not $30,000."
  },
  {
    "id": "dni-5",
    "section": "dni",
    "topic": "Character conduit",
    "difficulty": "medium",
    "q": "Under the DNI conduit rules, the character of income distributed to beneficiaries",
    "choices": [
      "Passes through — qualified dividends stay qualified, exempt stays exempt",
      "Arrives homogenized as ordinary income, whatever its source",
      "Is assigned by the trustee to whichever class is most favorable",
      "Survives the trip only when the trust is a simple trust"
    ],
    "answer": 0,
    "explain": "Each beneficiary is treated as receiving a proportionate slice of every class inside DNI — qualified dividends stay qualified, muni interest stays exempt. The conduit is automatic, not a trustee choice, and it works the same for simple and complex trusts."
  },
  {
    "id": "dni-6",
    "section": "dni",
    "topic": "Required means taxed",
    "difficulty": "medium",
    "q": "A simple trust's income beneficiary is taxed on",
    "choices": [
      "The income required to be distributed, even if paid late or not at all",
      "Only the amounts actually received during the year",
      "Nothing — simple trusts pay their own tax",
      "Only amounts covered by a timely 65-day election"
    ],
    "answer": 0,
    "explain": "For simple trusts the obligation, not the check, triggers the tax. A trustee who forgets to distribute changes nothing on the beneficiary's return — the required income was taxable the year it was required."
  },
  {
    "id": "dni-7",
    "section": "dni",
    "topic": "The two tiers",
    "difficulty": "medium",
    "q": "When distributions exceed DNI, the two-tier system allocates DNI first to",
    "choices": [
      "First-tier (required income) distributions, then discretionary ones",
      "Whichever beneficiary was paid earliest in the year",
      "Corpus distributions, then income distributions",
      "The trustee's commissions, then the beneficiaries"
    ],
    "answer": 0,
    "explain": "Required-income beneficiaries absorb DNI first and are taxed in full; discretionary (second-tier) recipients share whatever DNI remains. Order of payment during the year is irrelevant — the statute, not the calendar, ranks them."
  },
  {
    "id": "dni-8",
    "section": "dni",
    "topic": "65-day rule",
    "difficulty": "medium",
    "q": "The §663(b) '65-day rule' lets a complex trust or an estate",
    "choices": [
      "Treat distributions made in the first 65 days as made in the prior year",
      "Delay filing its Form 1041 by 65 days without penalty",
      "Spread a single distribution across two K-1 years",
      "Skip estimated taxes for its first 65 days"
    ],
    "answer": 0,
    "explain": "An election on the return lets January–early-March distributions relate back, letting the fiduciary fine-tune how much DNI leaves after the year's numbers are known. It moves income between taxpayers, not the filing deadline."
  },
  {
    "id": "dni-9",
    "section": "dni",
    "topic": "Specific bequests",
    "difficulty": "medium",
    "q": "A $25,000 specific cash bequest, paid in one payment exactly as the will directs, is",
    "choices": [
      "Neither deductible to the estate nor income to the beneficiary",
      "A distribution deductible like any other payment",
      "Taxable to the beneficiary up to the estate's DNI",
      "Deductible only under the 65-day election"
    ],
    "answer": 0,
    "explain": "Section 663(a)(1) exempts gifts of a specific sum or specific property, ascertainable at death and paid in three installments or fewer, from the whole DNI system. The legacy passes clean — no deduction, no K-1."
  },
  {
    "id": "dni-10",
    "section": "dni",
    "topic": "Property distributions",
    "difficulty": "medium",
    "q": "A trust satisfies a discretionary distribution with stock worth $50,000 (basis $30,000); no election is made. The result is",
    "choices": [
      "Deduction and beneficiary income of $30,000, with carryover basis",
      "Deduction and beneficiary income of $50,000, with FMV basis",
      "$20,000 of gain recognized automatically by the trust",
      "No deduction — property never counts as a distribution"
    ],
    "answer": 0,
    "explain": "In-kind distributions default to the lesser of basis or FMV, and the beneficiary takes the trust's basis. A §643(e)(3) election flips it: the trust recognizes the $20,000 gain and the beneficiary starts at $50,000. Pecuniary bequests funded with appreciated property force gain with no election at all."
  },
  {
    "id": "dni-11",
    "section": "dni",
    "topic": "Where it's computed",
    "difficulty": "easy",
    "q": "The income distribution deduction is computed on",
    "choices": [
      "Schedule B of Form 1041",
      "Schedule A of Form 1041",
      "Schedule G of Form 1041",
      "The beneficiary's Schedule E"
    ],
    "answer": 0,
    "explain": "Schedule B walks from accounting income through DNI to the deduction. Schedule A is the charitable deduction and Schedule G assembles the tax — the 1041's lettering scheme is its own little map."
  },
  {
    "id": "dni-12",
    "section": "dni",
    "topic": "No distributions",
    "difficulty": "easy",
    "q": "A trust distributes nothing and earns $20,000 of taxable interest. Who pays the tax?",
    "choices": [
      "The trust, at its own compressed rates",
      "The beneficiaries, in proportion to their shares",
      "The grantor of the trust, in every case",
      "Nobody — undistributed income is deferred"
    ],
    "answer": 0,
    "explain": "With no distributions there is no deduction and no K-1 income — the trust simply pays, and compressed brackets make it pay dearly. Grantor treatment would need retained powers, which nothing here suggests."
  },
  {
    "id": "deductions-1",
    "section": "deductions",
    "topic": "No standard deduction",
    "difficulty": "easy",
    "q": "The standard deduction available to an estate on Form 1041 is",
    "choices": [
      "Zero — 1041 filers get exemptions, not a standard deduction",
      "$600, matching the estate's exemption",
      "The same amount a single individual claims",
      "Half of the married-filing-jointly amount"
    ],
    "answer": 0,
    "explain": "Fiduciaries itemize by nature: actual expenses plus the small statutory exemption. There is no standard deduction anywhere on a 1041."
  },
  {
    "id": "deductions-2",
    "section": "deductions",
    "topic": "Largest exemption",
    "difficulty": "easy",
    "q": "Which Form 1041 filer claims the largest exemption?",
    "choices": [
      "An estate",
      "A simple trust",
      "A complex trust",
      "They all claim the same amount"
    ],
    "answer": 0,
    "explain": "$600, $300, $100 — estate, simple trust, complex trust. A memorable descent, none of it indexed — and no 1041 filer gets a standard deduction at all."
  },
  {
    "id": "deductions-3",
    "section": "deductions",
    "topic": "Trustee fees",
    "difficulty": "medium",
    "q": "Trustee fees paid by a trust holding both taxable bonds and municipal bonds are",
    "choices": [
      "Deductible, except the share allocable to tax-exempt income",
      "Fully deductible regardless of the portfolio mix",
      "Nondeductible personal expenses of the trustee",
      "Deductible only against the trust's capital gains"
    ],
    "answer": 0,
    "explain": "Expenses allocable to tax-exempt income are nondeductible (§265), so a slice of the fee — usually in the ratio of exempt to total income — is lost. Fiduciary software does the split on an attached worksheet."
  },
  {
    "id": "deductions-4",
    "section": "deductions",
    "topic": "§67(e) costs",
    "difficulty": "medium",
    "q": "Administration costs that exist only because property sits in an estate — probate filings, fiduciary accountings — are",
    "choices": [
      "Still fully deductible under §67(e)",
      "Suspended along with the 2% miscellaneous items",
      "Deductible only on the estate tax Form 706",
      "Capitalized into the basis of the estate's assets"
    ],
    "answer": 0,
    "explain": "The TCJA suspended 2%-floor miscellaneous deductions, but §67(e) costs — those an individual holding the same property could never incur — were confirmed deductible by regulation. The line between the two categories is where the audits happen."
  },
  {
    "id": "deductions-5",
    "section": "deductions",
    "topic": "Advisory fees",
    "difficulty": "medium",
    "q": "Investment advisory fees paid by a trust are generally",
    "choices": [
      "Not deductible — individuals commonly incur the same cost",
      "Fully deductible as expenses unique to fiduciaries",
      "Deductible at exactly fifty percent, by safe harbor",
      "Deductible only when the trust is a simple trust"
    ],
    "answer": 0,
    "explain": "Knight v. Commissioner put ordinary investment advice on the individual side of the §67(e) line, and the TCJA suspension finishes the job. Bundled fiduciary fees must be unbundled so the advisory slice doesn't sneak through."
  },
  {
    "id": "deductions-6",
    "section": "deductions",
    "topic": "Charitable deduction",
    "difficulty": "medium",
    "q": "For a trust to deduct a charitable gift under §642(c), the payment must be",
    "choices": [
      "Authorized by the governing instrument and made from gross income",
      "Under 60% of the trust's AGI, like an individual's limit",
      "Approved in writing by all trust beneficiaries",
      "Completed in cash before the return's original due date"
    ],
    "answer": 0,
    "explain": "Two gates: the document must permit it, and the dollars must trace to gross income (corpus gifts don't count). Clear both and there is no percentage cap at all — one of the 1041's genuinely unlimited deductions, computed on its Schedule A."
  },
  {
    "id": "deductions-7",
    "section": "deductions",
    "topic": "State taxes",
    "difficulty": "medium",
    "q": "State income and property taxes paid by a trust are",
    "choices": [
      "Deductible up to the SALT cap — $40,000 for 2025",
      "Capped at $10,000, the pre-2025 limit still in force",
      "Deductible without limitation on a fiduciary return",
      "Entirely nondeductible after 2017"
    ],
    "answer": 0,
    "explain": "The 2025 tax act raised the §164(b)(6) cap to $40,000 for 2025, phasing down toward a $10,000 floor at high income — and the cap reaches estates and trusts the same way it reaches individuals. Each non-grantor trust gets its own cap, which is exactly why multi-trust SALT planning is back on planners' menus."
  },
  {
    "id": "deductions-8",
    "section": "deductions",
    "topic": "1041 or 706",
    "difficulty": "medium",
    "q": "Executor and attorney fees for administering the estate may be deducted",
    "choices": [
      "On the 1041 or the 706, but not both — a waiver picks the side",
      "On both returns, since they serve both taxes",
      "Only on the 706, as costs of the transfer",
      "Only on the 1041, and only in the final year"
    ],
    "answer": 0,
    "explain": "Section 642(g) forbids double-dipping: the estate files a waiver of the 706 deduction to claim the 1041 side. Since most estates sit under the exclusion and owe no estate tax, the income tax return is usually where the deduction is worth something."
  },
  {
    "id": "deductions-9",
    "section": "deductions",
    "topic": "Funeral expenses",
    "difficulty": "medium",
    "q": "Funeral expenses paid by the estate are deductible",
    "choices": [
      "Only on Form 706 — never on the income tax 1041",
      "On the 1041, as costs of administration",
      "On either return, at the executor's election",
      "On the return of whichever family member paid"
    ],
    "answer": 0,
    "explain": "The classic trap: funerals are a transfer-tax deduction only. No 1041 deduction, no election to move them, and an individual who pays gets nothing either — medical expenses have a special rule, funerals do not."
  },
  {
    "id": "deductions-10",
    "section": "deductions",
    "topic": "Depreciation",
    "difficulty": "medium",
    "q": "Depreciation on a trust's rental building is claimed",
    "choices": [
      "Split between trust and beneficiaries as the rental income is shared",
      "Entirely by the trust, which holds legal title to the building",
      "Entirely by the income beneficiaries, who report the rent",
      "By no one — depreciation pauses while property sits in trust"
    ],
    "answer": 0,
    "explain": "Depreciation follows the income allocation (unless the instrument requires a reserve, which parks it at the trust). The beneficiaries' share arrives as a directly apportioned deduction in its own K-1 box rather than netted into income."
  },
  {
    "id": "deductions-11",
    "section": "deductions",
    "topic": "Termination-year excess",
    "difficulty": "medium",
    "q": "In an estate's final year, deductions exceeding income",
    "choices": [
      "Pass to the beneficiaries — the §67(e) portion even lands above the line",
      "Simply vanish; an estate's attributes die with it",
      "Carry back against the estate's earlier 1041s",
      "Convert into a refundable credit on the final return"
    ],
    "answer": 0,
    "explain": "Section 642(h) hands excess final-year deductions to the beneficiaries, and post-2018 regulations sort them: §67(e) administration costs become an above-the-line adjustment, the rest itemized deductions. Worth timing big fees into the final year on purpose."
  },
  {
    "id": "deductions-12",
    "section": "deductions",
    "topic": "Carryovers out",
    "difficulty": "medium",
    "q": "Unused capital loss and NOL carryovers of a terminating trust",
    "choices": [
      "Pass out to the beneficiaries on the final K-1s",
      "Expire unused the day the trust ends",
      "Refund at a statutory percentage of the balance",
      "Transfer to the trustee personally"
    ],
    "answer": 0,
    "explain": "Only in the final year do carryovers escape: beneficiaries inherit them with the original character and clock. In any earlier year, losses stay locked inside the trust — one more reason termination timing is a tax decision."
  },
  {
    "id": "k1-1",
    "section": "k1",
    "topic": "Which K-1",
    "difficulty": "easy",
    "q": "Beneficiaries of estates and trusts receive their share of income on",
    "choices": [
      "Schedule K-1 (Form 1041)",
      "Schedule K-1 (Form 1065)",
      "Form 1099-MISC from the fiduciary",
      "Form W-2 with a fiduciary code"
    ],
    "answer": 0,
    "explain": "Same K-1 idea as partnerships and S corps, different parent form. The 1041 K-1's boxes map income by character — which matters, because character survives the trip."
  },
  {
    "id": "k1-2",
    "section": "k1",
    "topic": "Interest lands on B",
    "difficulty": "medium",
    "q": "Interest income shown on a 1041 K-1 lands on the beneficiary's",
    "choices": [
      "Schedule B, with their other interest income",
      "Schedule E, page 2, like partnership income",
      "Schedule C, as fiduciary business income",
      "Form 1040, line 8, as other income"
    ],
    "answer": 0,
    "explain": "The conduit delivers each item to its natural home: interest to Schedule B, dividends to Schedule B, capital gains to Schedule D. Only the business, rental, and other-income boxes route through Schedule E's page 2."
  },
  {
    "id": "k1-3",
    "section": "k1",
    "topic": "Box 5 to Schedule E",
    "difficulty": "medium",
    "q": "A beneficiary's share of the trust's rental income from a 1041 K-1 is reported on",
    "choices": [
      "Schedule E, Part III",
      "Schedule C",
      "Schedule B",
      "Schedule 1, line 3"
    ],
    "answer": 0,
    "explain": "Schedule E Part III is the estates-and-trusts section — the same page that hosts partnership and S corp K-1s in Part II. From there it flows through Schedule 1, line 5, onto the 1040."
  },
  {
    "id": "k1-4",
    "section": "k1",
    "topic": "Fiscal-year timing",
    "difficulty": "medium",
    "q": "A calendar-year beneficiary gets a K-1 from an estate whose fiscal year ends January 31, 2026. The income belongs on the beneficiary's",
    "choices": [
      "2026 return — the estate's year ends within their 2026 year",
      "2025 return — most of that income arose during 2025",
      "Choice of 2025 or 2026 return, by election",
      "Amended 2025 return, once the K-1 finally arrives"
    ],
    "answer": 0,
    "explain": "K-1 income lands in the beneficiary year that contains the entity's year END. Eleven months of 2025 earnings surface on a return filed in spring 2027 — the fiscal-year deferral that makes executors pick odd year ends on purpose."
  },
  {
    "id": "k1-5",
    "section": "k1",
    "topic": "Required, not received",
    "difficulty": "medium",
    "q": "A simple trust pays the beneficiary in February for last year's required income. The beneficiary reports that income",
    "choices": [
      "In the year it was required to be distributed, not the year paid",
      "In the year the cash actually arrived",
      "In whichever year the trustee issues the K-1",
      "Never — late distributions convert to corpus"
    ],
    "answer": 0,
    "explain": "Simple-trust beneficiaries are taxed on the entitlement. The late February check is just the trustee catching up on last year's obligation — the K-1 for the earlier year already carried the income."
  },
  {
    "id": "k1-6",
    "section": "k1",
    "topic": "Zero-income K-1",
    "difficulty": "easy",
    "q": "A K-1 shows zero in every box even though the beneficiary received $80,000. The most likely reason:",
    "choices": [
      "The distribution was corpus beyond DNI — not taxable income",
      "The fiduciary forgot to allocate the trust's DNI",
      "The estate's income that year was entirely tax-exempt interest",
      "The estate elected to pay the beneficiary's tax itself"
    ],
    "answer": 0,
    "explain": "Distributions carry out income only up to DNI; past that, they are principal, and principal isn't income. Even an all-muni year would show tax-exempt interest in box 14 — a genuinely empty K-1 over a big check usually means the estate had little income, not an error."
  },
  {
    "id": "k1-7",
    "section": "k1",
    "topic": "Character on arrival",
    "difficulty": "easy",
    "q": "Qualified dividends earned by the trust and passed through on the K-1 are taxed to the beneficiary at",
    "choices": [
      "Capital-gain rates — the qualified character survives",
      "Ordinary rates — character is lost inside the trust",
      "Trust rates, with a credit passed to the beneficiary",
      "Zero, because the trust already paid the tax"
    ],
    "answer": 0,
    "explain": "The conduit preserves character: qualified stays qualified, exempt stays exempt, long-term stays long-term. The beneficiary's own bracket then does the pricing."
  },
  {
    "id": "k1-8",
    "section": "k1",
    "topic": "Final-year box 11",
    "difficulty": "medium",
    "q": "Excess deductions on a final-year K-1 that trace to §67(e) administration costs are claimed by the beneficiary as",
    "choices": [
      "An above-the-line adjustment to income",
      "An itemized deduction, so only itemizers benefit",
      "A nonrefundable credit against total tax",
      "An offset against passive income only"
    ],
    "answer": 0,
    "explain": "The 2020 regulations split final-year excess deductions by origin: the §67(e) slice adjusts gross income directly (no itemizing needed), while other pieces keep their itemized or non-deductible nature. The K-1 codes tell you which is which."
  },
  {
    "id": "k1-9",
    "section": "k1",
    "topic": "Furnishing deadline",
    "difficulty": "medium",
    "q": "The fiduciary must furnish Schedule K-1s to beneficiaries",
    "choices": [
      "By the Form 1041 due date, extensions included",
      "By January 31, on the W-2 timetable",
      "Only for years when beneficiaries owe tax",
      "Within 90 days after each distribution"
    ],
    "answer": 0,
    "explain": "K-1s travel on the return's schedule — April 15, or September 30 on extension. Which is why beneficiaries of extended trusts extend their own 1040s: the paper they need may not exist until fall."
  },
  {
    "id": "k1-10",
    "section": "k1",
    "topic": "No distributions, no K-1 income",
    "difficulty": "easy",
    "q": "An estate makes no distributions during its tax year. The beneficiaries' K-1 income is",
    "choices": [
      "Nothing — the estate itself pays tax on what it earned",
      "Their full shares anyway, per the will's percentages",
      "Imputed at the applicable federal rate",
      "Equal to their expected inheritances"
    ],
    "answer": 0,
    "explain": "Estate beneficiaries (unlike simple-trust income beneficiaries) are taxed only on actual distributions. Nothing out means the estate keeps the income and the tax bill both."
  },
  {
    "id": "k1-11",
    "section": "k1",
    "topic": "Apportioned deductions",
    "difficulty": "medium",
    "q": "Directly apportioned deductions, like the beneficiary's share of depreciation, appear",
    "choices": [
      "In their own K-1 box, separate from the income share",
      "Netted invisibly into the income the K-1 reports",
      "Only on the trust's own return, never on the K-1",
      "On a substitute 1099 prepared by the trustee"
    ],
    "answer": 0,
    "explain": "Depreciation, depletion, and amortization ride in box 9 as their own line items, because they attach to specific property rather than to DNI generally. The beneficiary applies them against the related income on their own return."
  },
  {
    "id": "k1-12",
    "section": "k1",
    "topic": "Exempt interest on the K-1",
    "difficulty": "easy",
    "q": "Tax-exempt interest passed through to a beneficiary is",
    "choices": [
      "Shown on the K-1 but still exempt on the 1040",
      "Converted into taxable income by the distribution",
      "Left off the K-1 as irrelevant information",
      "Taxable at exactly half the ordinary rate"
    ],
    "answer": 0,
    "explain": "It arrives in box 14 as information and lands on the 1040's tax-exempt line. Distribution never manufactures taxability — but the number still feeds things like the Social Security benefit calculation."
  },
  {
    "id": "rates-1",
    "section": "rates",
    "topic": "Compressed brackets",
    "difficulty": "medium",
    "q": "For 2025, a trust reaches the top 37% bracket at taxable income of roughly",
    "choices": [
      "$15,650",
      "$100,000",
      "$250,000",
      "$626,000"
    ],
    "answer": 0,
    "explain": "Trust brackets are brutally compressed — the top rate arrives around $15,650 in 2025, income a single filer wouldn't hit 37% on until roughly forty times that. This one number drives most accumulate-versus-distribute decisions."
  },
  {
    "id": "rates-2",
    "section": "rates",
    "topic": "The planning reflex",
    "difficulty": "easy",
    "q": "Because trust brackets compress so quickly, trustees often",
    "choices": [
      "Distribute income so it is taxed at beneficiaries' lower rates",
      "Accumulate income to shelter it inside the trust",
      "Recharacterize income as trustee compensation",
      "Elect to be taxed as a C corporation"
    ],
    "answer": 0,
    "explain": "Shifting income to a beneficiary in the 12% or 22% bracket beats paying 37% inside the trust. Tax is only one variable — control, creditor protection, and spendthrift concerns argue the other way — but the rate arithmetic always pushes outward."
  },
  {
    "id": "rates-3",
    "section": "rates",
    "topic": "Capital gain rates",
    "difficulty": "medium",
    "q": "Long-term capital gains kept inside a trust are taxed at",
    "choices": [
      "Preferential capital-gain rates, on the trust's tiny thresholds",
      "Ordinary trust rates — the preference is for individuals only",
      "A flat statutory rate for all fiduciaries",
      "Zero, until the gains are eventually distributed"
    ],
    "answer": 0,
    "explain": "Trusts get the same 0/15/20 structure, just with compressed breakpoints — the 20% rate arrives near $15,900 in 2025. Preferential, but reached almost immediately."
  },
  {
    "id": "rates-4",
    "section": "rates",
    "topic": "NIIT threshold",
    "difficulty": "medium",
    "q": "The 3.8% net investment income tax applies to a trust's undistributed investment income above",
    "choices": [
      "The top-bracket threshold — about $15,650 in 2025",
      "$200,000 of AGI, the same threshold as a single filer",
      "$250,000 of AGI, the same threshold as a joint return",
      "No level — trusts never owe the investment income tax"
    ],
    "answer": 0,
    "explain": "For trusts and estates the NIIT bites at the dollar level where the top bracket begins — around $15,650 — versus $200K/$250K for individuals. Distributing the income moves the NIIT question to each beneficiary's own (much higher) threshold."
  },
  {
    "id": "rates-5",
    "section": "rates",
    "topic": "Estimated taxes",
    "difficulty": "medium",
    "q": "Quarterly estimated tax payments are required of",
    "choices": [
      "Trusts generally; estates get a pass for their first two years",
      "Estates generally; trusts get a pass for their first two years",
      "Neither — fiduciaries settle up when the return is filed",
      "Both, beginning with the first quarter after funding"
    ],
    "answer": 0,
    "explain": "Trusts pay estimates like individuals. New estates — and qualified revocable trusts riding a §645 election — are excused for the two years after death, one of the small mercies of estate administration."
  },
  {
    "id": "rates-6",
    "section": "rates",
    "topic": "§643(g) election",
    "difficulty": "medium",
    "q": "Under §643(g), a trustee may elect to",
    "choices": [
      "Treat trust estimated payments as made by the beneficiaries",
      "Skip estimates by doubling the final extension payment",
      "Average the trust's income over three years",
      "Prepay the beneficiaries' tax at the trust's rates"
    ],
    "answer": 0,
    "explain": "Form 1041-T, filed within 65 days of year end, reassigns overpaid estimates to beneficiaries — handy when a big year-end distribution moved the income out but the vouchers were already paid. Estates may use it only in their final year."
  },
  {
    "id": "rates-7",
    "section": "rates",
    "topic": "AMT",
    "difficulty": "medium",
    "q": "The alternative minimum tax",
    "choices": [
      "Applies to estates and trusts, with their own smaller exemption",
      "Never applies to fiduciary income tax returns",
      "Applies only to trusts that are grantor trusts",
      "Was replaced by the NIIT for trusts after 2018"
    ],
    "answer": 0,
    "explain": "Schedule I of the 1041 runs the same AMT machinery with a fiduciary-sized exemption that phases out quickly. Rarely decisive, but tested — and private-activity muni interest is the usual trigger."
  },
  {
    "id": "rates-8",
    "section": "rates",
    "topic": "Schedule G",
    "difficulty": "easy",
    "q": "A trust's total tax is assembled on",
    "choices": [
      "Schedule G of Form 1041",
      "Schedule B of Form 1041",
      "Schedule D of Form 1040",
      "Schedule SE"
    ],
    "answer": 0,
    "explain": "Schedule G stacks the regular tax, AMT, and the NIIT from Form 8960 into the total. Schedule B is the distribution deduction — the 1041's schedules reuse familiar letters for unfamiliar jobs."
  },
  {
    "id": "rates-9",
    "section": "rates",
    "topic": "Who remits",
    "difficulty": "easy",
    "q": "The tax shown on Form 1041 is paid by",
    "choices": [
      "The fiduciary, out of the entity's funds",
      "The beneficiaries, pro rata to their K-1s",
      "The grantor, under the grantor-trust rules",
      "The fiduciary personally, from their own funds"
    ],
    "answer": 0,
    "explain": "The entity's tax comes from entity money. The sharp edge: a fiduciary who distributes everything while the tax goes unpaid can become personally liable under the federal claims statute — personal exposure is the penalty for mishandling, never the default. (And a true grantor trust's 1041 shows no tax at all.)"
  },
  {
    "id": "rates-10",
    "section": "rates",
    "topic": "'Compressed' in words",
    "difficulty": "medium",
    "q": "The practical meaning of 'compressed' trust brackets is",
    "choices": [
      "The same rates as individuals, reached at far smaller income levels",
      "Higher percentage rates than any individual ever pays",
      "A flat tax on fiduciaries with no brackets at all",
      "Lower rates as a reward for fiduciary status"
    ],
    "answer": 0,
    "explain": "Same 10-24-35-37 ladder, minus a few rungs, squeezed into about $15,650 of income. Nothing about the rates is special — only how fast they arrive."
  },
  {
    "id": "rates-11",
    "section": "rates",
    "topic": "Distribute or accumulate",
    "difficulty": "medium",
    "q": "A complex trust earned $60,000; its sole beneficiary's marginal rate is 22%. Purely on rate arithmetic, total tax is lower if the trustee",
    "choices": [
      "Distributes — $60,000 kept in trust is taxed mostly at 35–37%",
      "Accumulates — trusts average lower rates than individuals",
      "Splits the income exactly in half with the beneficiary",
      "Defers everything to the trust's final year"
    ],
    "answer": 0,
    "explain": "Inside the trust, most of that $60,000 sits in the top brackets; on the beneficiary's return it rides at 22%. Real decisions then weigh the non-tax factors — but the arithmetic itself is rarely close."
  },
  {
    "id": "rates-12",
    "section": "rates",
    "topic": "Gains don't ride out",
    "difficulty": "medium",
    "q": "Even in a year the trust distributes all its accounting income, its capital gains are usually taxed",
    "choices": [
      "To the trust — corpus items don't ride out with income distributions",
      "To the beneficiaries, pro rata with the income",
      "Half to each side, under the tier rules",
      "To no one, until the assets leave the trust"
    ],
    "answer": 0,
    "explain": "Gains allocated to principal stay outside DNI, so distributing every dollar of income still leaves the trust paying tax on its gains — at compressed thresholds, plus NIIT. The exceptions live in the instrument's language and in the final year."
  },
  {
    "id": "estatetax-1",
    "section": "estatetax",
    "topic": "706 threshold",
    "difficulty": "medium",
    "q": "A 2025 decedent's estate must file Form 706 when gross estate plus adjusted taxable gifts exceed",
    "choices": [
      "About $13.99 million — the basic exclusion amount",
      "$600 — the same trigger as the income tax 1041",
      "$5 million, a figure fixed since 2011",
      "Any amount, whenever real property is involved"
    ],
    "answer": 0,
    "explain": "The 2025 basic exclusion is $13.99 million, so very few estates owe tax or must file. The $600 figure is the 1041's income trigger — a favorite exam confusion. Estates below the line still often file to elect portability."
  },
  {
    "id": "estatetax-2",
    "section": "estatetax",
    "topic": "706 timing",
    "difficulty": "medium",
    "q": "Form 706 is due",
    "choices": [
      "Nine months after death; Form 4768 adds six",
      "April 15 of the calendar year after the death",
      "Ninety days after the probate court opens the estate",
      "At the same time as the estate's first income tax 1041"
    ],
    "answer": 0,
    "explain": "Nine months from date of death, with an automatic six-month extension on Form 4768 — a timeline pegged to the death itself, not to tax years or court calendars."
  },
  {
    "id": "estatetax-3",
    "section": "estatetax",
    "topic": "Portability",
    "difficulty": "medium",
    "q": "For a surviving spouse to inherit the decedent's unused exclusion (the DSUE), the estate must",
    "choices": [
      "File a timely 706 electing portability, even if no tax is due",
      "Do nothing — portability applies automatically at death",
      "File Form 709 within nine months of the death",
      "Retitle every asset jointly before the estate closes"
    ],
    "answer": 0,
    "explain": "Portability rides only on a filed 706. For estates too small to owe anything, Rev. Proc. 2022-32 allows the election up to five years late — but somebody still has to file. Skipping it can strand millions of exclusion."
  },
  {
    "id": "estatetax-4",
    "section": "estatetax",
    "topic": "Marital deduction",
    "difficulty": "easy",
    "q": "Property passing outright to a U.S.-citizen surviving spouse generates",
    "choices": [
      "An unlimited marital deduction on the 706",
      "A deduction capped at half of the gross estate",
      "No deduction — spouses are taxed like anyone else",
      "A credit equal to half the estate tax"
    ],
    "answer": 0,
    "explain": "Unlimited — the estate tax on marital wealth is deferred to the survivor's death, not forgiven. A non-citizen spouse needs a QDOT to get the same deferral."
  },
  {
    "id": "estatetax-5",
    "section": "estatetax",
    "topic": "Charitable bequests",
    "difficulty": "easy",
    "q": "Bequests to qualified charities are deductible on the 706",
    "choices": [
      "Without any percentage limitation",
      "Up to 60% of the gross estate",
      "Only up to the estate's income for the year",
      "Only if paid before the 706 is filed"
    ],
    "answer": 0,
    "explain": "Like the marital deduction, the estate-tax charitable deduction is unlimited — percentage caps belong to the income tax. Leave everything to charity and the taxable estate is zero."
  },
  {
    "id": "estatetax-6",
    "section": "estatetax",
    "topic": "Annual exclusion",
    "difficulty": "medium",
    "q": "For 2025, the gift tax annual exclusion lets a donor give each recipient",
    "choices": [
      "$19,000 with no gift tax return required",
      "$10,000, fixed by statute since 1997",
      "$19,000, but only to members of the family",
      "An unlimited amount, provided it is in cash"
    ],
    "answer": 0,
    "explain": "$19,000 per donee per year (indexed), to anyone, provided the gift is a present interest. Exceed it and the usual result is just a Form 709 chipping at the lifetime exclusion — actual gift tax is rare."
  },
  {
    "id": "estatetax-7",
    "section": "estatetax",
    "topic": "Who owes gift tax",
    "difficulty": "easy",
    "q": "Federal gift tax, when actually due, is owed by",
    "choices": [
      "The donor — recipients owe neither gift nor income tax",
      "The recipient, as the person enriched",
      "Both parties, splitting the bill evenly",
      "The trustee of any trust that was involved"
    ],
    "answer": 0,
    "explain": "Donors pay transfer taxes; recipients collect tax-free on both fronts. (If the donor fails to pay, the IRS can pursue the donee — a collection remedy, not the liability's home.)"
  },
  {
    "id": "estatetax-8",
    "section": "estatetax",
    "topic": "Tuition and medical",
    "difficulty": "medium",
    "q": "Tuition paid directly to a grandchild's university is",
    "choices": [
      "Not a gift at all — unlimited when paid straight to the institution",
      "A gift that uses the annual exclusion first",
      "A taxable gift to the extent it tops $19,000",
      "Deductible on the donor's own Schedule A"
    ],
    "answer": 0,
    "explain": "Direct payments of tuition or medical costs are excluded from gift tax entirely (§2503(e)) — over and above the $19,000. The discipline is the routing: pay the school or hospital, never the student."
  },
  {
    "id": "estatetax-9",
    "section": "estatetax",
    "topic": "Gift splitting",
    "difficulty": "medium",
    "q": "Gift splitting lets a married couple",
    "choices": [
      "Treat one spouse's gift as made half by each, via 709 consent",
      "Skip the 709 for gifts under twice the exclusion",
      "Combine exclusions only for gifts to their own children",
      "File a single joint gift tax return for the year"
    ],
    "answer": 0,
    "explain": "Splitting doubles the reach to $38,000 per donee in 2025 even when one spouse holds all the money — but the consent must be signified on a filed Form 709, often just the donor spouse's return signed by both. There is no joint 709."
  },
  {
    "id": "estatetax-10",
    "section": "estatetax",
    "topic": "Gift basis vs bequest basis",
    "difficulty": "medium",
    "q": "Lifetime gift versus bequest of the same appreciated stock: the recipient's basis is",
    "choices": [
      "Carryover if gifted during life; stepped up if inherited at death",
      "Stepped up to market value in both situations",
      "Carryover from the original owner in both situations",
      "Market value for gifts; original cost for inheritances"
    ],
    "answer": 0,
    "explain": "Gifts carry the donor's basis forward (with a special loss rule if value has fallen); death resets basis to FMV. This asymmetry is the core of deathbed planning: hold winners, harvest losers."
  },
  {
    "id": "estatetax-11",
    "section": "estatetax",
    "topic": "Gross estate contents",
    "difficulty": "medium",
    "q": "Which of these lands IN the gross estate?",
    "choices": [
      "Assets held in the decedent's revocable living trust",
      "Property given away outright ten years before death",
      "A life estate the decedent had received from a parent",
      "The surviving spouse's separately owned property"
    ],
    "answer": 0,
    "explain": "Revocable means retained control, and retained control means inclusion. Old completed gifts stay out (they resurface only as 'adjusted taxable gifts' in the computation), and a life estate someone else granted you simply ends at death."
  },
  {
    "id": "estatetax-12",
    "section": "estatetax",
    "topic": "Estate vs inheritance tax",
    "difficulty": "easy",
    "q": "The federal transfer tax at death is",
    "choices": [
      "An estate tax on the estate; inheritance taxes are state-level",
      "An inheritance tax charged to each beneficiary's share",
      "Both an estate tax and an inheritance tax, stacked",
      "A capital gains tax settled on the final 1040"
    ],
    "answer": 0,
    "explain": "The federal system taxes the estate as a whole before division; a handful of states tax recipients instead (or in addition). Knowing which lever a question is pulling avoids most transfer-tax traps."
  },
  {
    "id": "scenario-1",
    "section": "scenario",
    "topic": "Which returns, quick read",
    "difficulty": "easy",
    "q": "A client's father died in March holding a brokerage account and a house. At minimum, expect to prepare",
    "choices": [
      "A final 1040, plus a 1041 if post-death income tops $600",
      "A Form 706 and a 709, plus the final quarter's 941s",
      "Only a 706 — death ends the income tax filings",
      "A 1041 that replaces the final 1040 entirely"
    ],
    "answer": 0,
    "explain": "Nearly every decedent needs a final 1040; the 1041 joins once the estate's own income clears $600. A 706 enters only near the $13.99M exclusion or for portability — the transfer tax is the rare return, not the routine one."
  },
  {
    "id": "scenario-2",
    "section": "scenario",
    "topic": "One return for trust and estate",
    "difficulty": "medium",
    "q": "An executor wants the revocable trust and the probate estate taxed together on one fiscal-year return. You suggest",
    "choices": [
      "The §645 election, made on Form 8855",
      "A private letter ruling request to the IRS",
      "A court order merging the trust into the estate",
      "Filing two 1041s that reference each other"
    ],
    "answer": 0,
    "explain": "Section 645 was built for exactly this: the qualified revocable trust is treated as part of the estate for income tax during administration — one 1041, the estate's fiscal-year option, and the two-year estimated-tax pass included."
  },
  {
    "id": "scenario-3",
    "section": "scenario",
    "topic": "Fiscal-year deferral",
    "difficulty": "medium",
    "q": "An estate adopts a fiscal year ending November 30, 2026. Income on its first-year K-1s reaches the beneficiaries' returns for",
    "choices": [
      "2026, filed in spring 2027 — months of deferral built in",
      "2025, the calendar year the decedent died",
      "Whichever year each beneficiary individually prefers",
      "2027, once the estate's second year has closed"
    ],
    "answer": 0,
    "explain": "Beneficiaries report K-1 income in their year containing the estate's year END. Income earned from death through November 2026 lands on 2026 returns filed in April 2027 — a legal deferral trusts can't offer, since they're stuck on calendar years."
  },
  {
    "id": "scenario-4",
    "section": "scenario",
    "topic": "January rescue",
    "difficulty": "medium",
    "q": "It's January 20 and the trust's prior-year DNI is still trapped inside, headed for 37% rates. You advise the trustee to",
    "choices": [
      "Distribute now and elect §663(b) to count it for the prior year",
      "Amend the trust instrument to change its tax year",
      "Accept it — nothing can be done after December 31",
      "Convert the trust to a grantor trust retroactively"
    ],
    "answer": 0,
    "explain": "The 65-day rule exists for exactly this January conversation: distributions through early March can relate back, moving the income to beneficiaries' lower brackets after the year's numbers are already known."
  },
  {
    "id": "scenario-5",
    "section": "scenario",
    "topic": "NIIT sticker shock",
    "difficulty": "medium",
    "q": "A trustee is stunned that the trust owes NIIT on just $25,000 of undistributed dividends. You explain that",
    "choices": [
      "Trust NIIT starts near $15,650 — not at $200K/$250K",
      "The custodian must have miscoded the 1099-DIV",
      "Trusts pay NIIT at double the individual rate",
      "Only foreign trusts are subject to the NIIT"
    ],
    "answer": 0,
    "explain": "The individual thresholds don't travel to fiduciary returns: trusts hit the 3.8% surtax at the top-bracket dollar level. Distributing the investment income moves the question to each beneficiary's own much higher threshold — often erasing the tax."
  },
  {
    "id": "scenario-6",
    "section": "scenario",
    "topic": "1099s under the wrong ID",
    "difficulty": "medium",
    "q": "Months after the death, 1099s still arrive under the decedent's SSN for bank interest. The proper handling is",
    "choices": [
      "Post-death interest goes on the estate's 1041; retitle to the EIN",
      "Report it all on the final 1040, since the SSN matches",
      "Ignore it — IRS matching stops at the date of death",
      "Issue the bank a Form 709 to reroute the income"
    ],
    "answer": 0,
    "explain": "Paper follows the old SSN; the law follows the death. Split the year's interest at the date of death, report the post-death piece on the 1041 (nominee handling bridges the mismatch), and get the accounts retitled so next year's 1099s come out right."
  },
  {
    "id": "scenario-7",
    "section": "scenario",
    "topic": "'Why did I get a K-1?'",
    "difficulty": "easy",
    "q": "A beneficiary protests: 'Inheritances are tax-free — why does my K-1 show $6,000 of interest?' The answer is that",
    "choices": [
      "Corpus was tax-free; the estate's earnings pass out taxable",
      "The preparer clearly erred and should amend the 1041",
      "Inheritances over $600 have always been taxable",
      "K-1s are informational and never create tax"
    ],
    "answer": 0,
    "explain": "Both statements are true at once: the inheritance itself arrived untaxed, while the income the estate earned holding it passes through with its character intact. The K-1 reports only the second piece."
  },
  {
    "id": "scenario-8",
    "section": "scenario",
    "topic": "The $50,000 legacy",
    "difficulty": "medium",
    "q": "The will leaves a granddaughter exactly $50,000, paid in a single June check. On the estate's 1041 this payment is",
    "choices": [
      "Not a distribution — no deduction to the estate, no income to her",
      "Deductible up to the estate's DNI for the year",
      "Deductible only if made within 65 days of year end",
      "Second-tier income taxable to the granddaughter"
    ],
    "answer": 0,
    "explain": "A specific sum, fixed by the will and paid in fewer than four installments, sits outside the DNI system under §663(a). The estate keeps paying tax on its income; the legacy passes clean."
  },
  {
    "id": "scenario-9",
    "section": "scenario",
    "topic": "Loss carryover at the end",
    "difficulty": "medium",
    "q": "A terminating trust still holds a $30,000 unused capital loss. The best news for the beneficiaries is that",
    "choices": [
      "The loss passes out on the final K-1s for their own returns",
      "The trust deducts $3,000 on its final 1041 and the balance expires",
      "The trust can sell the loss to a related party",
      "The loss converts to a deduction on the trust's last 706"
    ],
    "answer": 0,
    "explain": "Final year only: carryovers escape to the beneficiaries with character intact — usable against their own gains, then $3,000 a year against ordinary income. In any non-final year the loss would have stayed locked inside the trust."
  },
  {
    "id": "scenario-10",
    "section": "scenario",
    "topic": "Selling the house",
    "difficulty": "medium",
    "q": "The estate sells the decedent's house four months after death for about its appraised date-of-death value. Expect",
    "choices": [
      "Little or no gain — possibly a small loss after selling costs",
      "A large gain measured from the decedent's original 1978 cost",
      "Ordinary income to the estate as a dealer in property",
      "Gain taxed to the heirs even though the estate sold"
    ],
    "answer": 0,
    "explain": "The step-up resets basis to date-of-death value, so a near-appraisal sale nets out around zero — and commissions often tip it to a deductible loss, since the estate (unlike the decedent) isn't holding a personal residence."
  },
  {
    "id": "scenario-11",
    "section": "scenario",
    "topic": "The forgotten check",
    "difficulty": "medium",
    "q": "A simple trust earned $12,000 of accounting income, but the trustee never wrote the check. The income beneficiary",
    "choices": [
      "Reports the $12,000 anyway — required income is taxed as required",
      "Reports nothing until the cash actually moves",
      "Reports it only if a 663(b) election is filed",
      "Splits the tax bill evenly with the trust"
    ],
    "answer": 0,
    "explain": "Simple-trust beneficiaries are taxed on entitlement, not receipt. The trustee's oversight doesn't shift the income back to the trust — it just means the beneficiary paid tax on money still sitting in the trust's account."
  },
  {
    "id": "scenario-12",
    "section": "scenario",
    "topic": "Living trust 1099s",
    "difficulty": "medium",
    "q": "1099s arrive under a revocable living trust's EIN while the grantor is alive and well. That income belongs on",
    "choices": [
      "The grantor's own 1040 — a grantor statement bridges the paperwork",
      "The trust's 1041, with tax at compressed trust rates",
      "The remainder beneficiaries' returns, via K-1s",
      "No return, until the grantor's death ends the trust"
    ],
    "answer": 0,
    "explain": "Alive and revocable means grantor trust: the income is the grantor's regardless of whose EIN the custodian printed. A grantor-return 1041 with an attached statement (or simply re-papering accounts to the SSN) squares the reporting."
  }
];
