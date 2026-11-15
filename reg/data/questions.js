/* REG Blitz question bank -- CPA Exam Regulation, 17 sections, 240 questions.
   Original content authored against the AICPA REG blueprint and adversarially
   reviewed for technical accuracy and exam craft. Choice order is shuffled at
   display time; 'answer' is the index of the correct choice.
   Questions favour structural rules over indexed dollar amounts, so the bank
   does not go stale every time a threshold is adjusted for inflation.
   FAR_SECTIONS/FAR_QUESTIONS global names keep the engine identical to FAR Blitz. */

var FAR_SECTIONS = [
  {
    "id": "ethics",
    "name": "Ethics & Professional Responsibilities",
    "short": "Ethics",
    "emoji": "📜"
  },
  {
    "id": "procedure",
    "name": "Federal Tax Procedures",
    "short": "Tax Procedure",
    "emoji": "🏛️"
  },
  {
    "id": "contracts",
    "name": "Contracts & UCC Sales",
    "short": "Contracts",
    "emoji": "📝"
  },
  {
    "id": "agency",
    "name": "Agency, Employment & Federal Regulation",
    "short": "Agency & Employment",
    "emoji": "🤝"
  },
  {
    "id": "debtor",
    "name": "Debtor-Creditor Relationships",
    "short": "Debtor-Creditor",
    "emoji": "🏦"
  },
  {
    "id": "entity",
    "name": "Business Structures",
    "short": "Structures",
    "emoji": "🏢"
  },
  {
    "id": "basis",
    "name": "Basis, Holding Period & Cost Recovery",
    "short": "Basis & Depreciation",
    "emoji": "📐"
  },
  {
    "id": "disposition",
    "name": "Capital Gains & Losses",
    "short": "Gains & Losses",
    "emoji": "🔁"
  },
  {
    "id": "income",
    "name": "Individual Gross Income",
    "short": "Gross Income",
    "emoji": "💵"
  },
  {
    "id": "deduct",
    "name": "Adjustments, Deductions & QBI",
    "short": "Deductions",
    "emoji": "✂️"
  },
  {
    "id": "credits",
    "name": "Credits, Filing Status & Other Taxes",
    "short": "Credits & Filing Status",
    "emoji": "🎟️"
  },
  {
    "id": "losses",
    "name": "Loss Limitations",
    "short": "Losses",
    "emoji": "📉"
  },
  {
    "id": "booktax",
    "name": "Book-Tax Differences",
    "short": "Book vs Tax",
    "emoji": "📊"
  },
  {
    "id": "ccorp",
    "name": "C Corporations & State Tax",
    "short": "C Corps",
    "emoji": "🏭"
  },
  {
    "id": "partner",
    "name": "Partnerships",
    "short": "Partnerships",
    "emoji": "🔗"
  },
  {
    "id": "scorp",
    "name": "S Corporations",
    "short": "S Corps",
    "emoji": "🧾"
  },
  {
    "id": "estates",
    "name": "LLCs & Tax-Exempt Organizations",
    "short": "LLCs & Exempt Orgs",
    "emoji": "🕊️"
  }
];

var FAR_QUESTIONS = [
  {
    "id": "ethics-1",
    "section": "ethics",
    "topic": "Contingent fees",
    "difficulty": "medium",
    "q": "Under Circular 230, in which engagement may a practitioner charge a contingent fee?",
    "choices": [
      "Preparing an original Form 1040",
      "Representing a client in an IRS examination of an original return",
      "Preparing an amended return filed before the IRS contacts the client",
      "Advising a client on the tax treatment of a planned merger"
    ],
    "answer": 1,
    "explain": "Section 10.27 bans contingent fees for matters before the IRS with narrow exceptions — an examination or challenge to an original return, a refund claim for statutory interest or penalties, and judicial proceedings. Return preparation and planning are never on that list."
  },
  {
    "id": "ethics-2",
    "section": "ethics",
    "topic": "Client records",
    "difficulty": "easy",
    "q": "A client fires a practitioner over unpaid fees and asks for the records needed to file this year's return. What does Circular 230 require?",
    "choices": [
      "Return the records only after the fee dispute is settled",
      "Return the records promptly at the client's request",
      "Keep the records until the client signs a release",
      "Forward the records to the client's new practitioner instead"
    ],
    "answer": 1,
    "explain": "Section 10.28 requires prompt return of client records needed to comply with federal tax obligations, and a fee dispute is not an excuse. State law may let the practitioner hold back their own work product, but not the client's own records."
  },
  {
    "id": "ethics-3",
    "section": "ethics",
    "topic": "Conflicts of interest",
    "difficulty": "medium",
    "q": "A practitioner represents both spouses in a matter where their interests conflict. Both give informed written consent. How long must the practitioner retain that consent?",
    "choices": [
      "12 months from the date signed",
      "36 months from the conclusion of the representation",
      "Three years from the date the return is filed",
      "Until the statute of limitations on assessment closes"
    ],
    "answer": 1,
    "explain": "Section 10.29 lets a practitioner proceed despite a conflict on informed written consent from each affected client, and the consent must be retained for 36 months following the conclusion of the representation."
  },
  {
    "id": "ethics-4",
    "section": "ethics",
    "topic": "Reliance on client information",
    "difficulty": "easy",
    "q": "A client's records show a charitable deduction that is wildly out of line with the client's income and prior years. What must the practitioner do?",
    "choices": [
      "Accept the figure — a practitioner may rely on client information",
      "Make reasonable inquiries because the information appears incorrect",
      "Verify every figure on the return with third-party documentation",
      "Report the client to the Office of Professional Responsibility"
    ],
    "answer": 1,
    "explain": "A practitioner may generally rely in good faith on client-furnished information without verifying it, but section 10.34(d) requires reasonable inquiry when the information appears incorrect, inconsistent, or incomplete."
  },
  {
    "id": "ethics-5",
    "section": "ethics",
    "topic": "Discovered errors",
    "difficulty": "medium",
    "q": "A practitioner advises a client of a material error on a prior-year return. The client refuses to amend. What may the practitioner NOT do?",
    "choices": [
      "Continue preparing the current-year return",
      "Withdraw from the engagement",
      "Notify the IRS of the error without the client's consent",
      "Document the advice given and the client's response"
    ],
    "answer": 2,
    "explain": "Section 10.21 requires advising the client of the error and its consequences — nothing more. Disclosing it to the IRS without consent would breach confidentiality and section 7216."
  },
  {
    "id": "ethics-6",
    "section": "ethics",
    "topic": "Section 6694(a) penalty",
    "difficulty": "medium",
    "q": "A preparer takes an unreasonable position and earns a $3,000 fee for the return. What is the section 6694(a) penalty?",
    "choices": [
      "$1,000",
      "$1,500",
      "$3,000",
      "$2,250"
    ],
    "answer": 1,
    "explain": "The section 6694(a) penalty is the greater of $1,000 or 50% of the income the preparer derived. Half of the $3,000 fee is $1,500, which exceeds the $1,000 floor."
  },
  {
    "id": "ethics-7",
    "section": "ethics",
    "topic": "Return position standards",
    "difficulty": "medium",
    "q": "A preparer wants to take a position that is not a tax shelter and will be disclosed on the return. What is the minimum standard the position must meet to avoid the section 6694(a) penalty?",
    "choices": [
      "Reasonable basis",
      "Substantial authority",
      "More likely than not",
      "Not frivolous"
    ],
    "answer": 0,
    "explain": "Disclosed non-shelter positions need only reasonable basis. Undisclosed positions require substantial authority, and tax shelters or reportable transactions require more likely than not."
  },
  {
    "id": "ethics-8",
    "section": "ethics",
    "topic": "Willful understatement penalty",
    "difficulty": "medium",
    "q": "A preparer willfully understates a client's liability and earns $2,000 preparing the return. What is the section 6694(b) penalty before any offset?",
    "choices": [
      "$1,500",
      "$2,000",
      "$5,000",
      "$10,000"
    ],
    "answer": 2,
    "explain": "Section 6694(b) is the greater of $5,000 or 75% of income derived. Here 75% of $2,000 is $1,500, so the $5,000 floor controls. Any 6694(a) penalty already paid reduces the 6694(b) penalty."
  },
  {
    "id": "ethics-9",
    "section": "ethics",
    "topic": "Practitioner privilege",
    "difficulty": "medium",
    "q": "A CPA's client is under criminal investigation by the IRS. Does section 7525 privilege protect their tax advice communications?",
    "choices": [
      "Yes, section 7525 tracks the attorney-client privilege in all respects",
      "No, section 7525 does not extend to criminal matters",
      "Yes, but only if the advice was delivered in writing",
      "No, because section 7525 applies only to attorneys"
    ],
    "answer": 1,
    "explain": "The federally authorized tax practitioner privilege covers noncriminal tax matters before the IRS and noncriminal federal proceedings. Criminal matters, state proceedings, and written communications promoting tax shelters are all outside it."
  },
  {
    "id": "ethics-10",
    "section": "ethics",
    "topic": "Disclosure of return information",
    "difficulty": "easy",
    "q": "A preparer sells client mailing information to a financial products marketer without client consent. What exposure does this create?",
    "choices": [
      "A criminal penalty under section 7216",
      "Only a Circular 230 censure",
      "No penalty because the return itself was not disclosed",
      "A civil penalty capped at the fee charged"
    ],
    "answer": 0,
    "explain": "Section 7216 makes knowing or reckless disclosure or use of tax return information without the taxpayer's consent a criminal misdemeanor, and section 6713 adds a parallel civil penalty."
  },
  {
    "id": "ethics-11",
    "section": "ethics",
    "topic": "EIC preparer obligations",
    "difficulty": "easy",
    "q": "A preparer claims the earned income credit for a client. What must accompany the filed return?",
    "choices": [
      "A signed client affidavit of eligibility",
      "Form 8867, the paid preparer's due diligence checklist",
      "Copies of the qualifying children's birth certificates",
      "A statement of the preparer's PTIN and EFIN"
    ],
    "answer": 1,
    "explain": "Form 8867 must be submitted with any return claiming EIC, the child tax credit, the American opportunity credit, or head of household status, and the supporting records must be kept for three years."
  },
  {
    "id": "ethics-12",
    "section": "ethics",
    "topic": "Section 6695 penalties",
    "difficulty": "easy",
    "q": "Which failure triggers a section 6695 preparer penalty?",
    "choices": [
      "Failing to sign a return the preparer prepared for compensation",
      "Taking an undisclosed return position that has only a reasonable basis",
      "Failing to attach substantial authority to a disclosed position",
      "Relying without verification on client figures that appear reasonable"
    ],
    "answer": 0,
    "explain": "Section 6695 imposes per-return penalties for mechanical failures — not signing, not furnishing a copy to the taxpayer, not retaining records, not furnishing a PTIN, and failing the due-diligence requirements for the EITC, child tax credit, AOTC and head-of-household status."
  },
  {
    "id": "ethics-13",
    "section": "ethics",
    "topic": "Written advice",
    "difficulty": "medium",
    "q": "In giving written tax advice, a practitioner may NOT do which of the following?",
    "choices": [
      "Rely on representations of the client that are reasonable",
      "Consider the applicable law and authorities",
      "Take into account the likelihood the return will not be audited",
      "Relate the applicable law to the relevant facts"
    ],
    "answer": 2,
    "explain": "Section 10.37 forbids taking the audit lottery into account. The practitioner must consider all reasonably known facts, apply the law to them, and may not rely on unreasonable factual assumptions or representations."
  },
  {
    "id": "ethics-14",
    "section": "ethics",
    "topic": "Use of estimates",
    "difficulty": "medium",
    "q": "A client's records for a deductible expense were destroyed in a flood. Under the AICPA Statements on Standards for Tax Services, may the CPA use the client's estimate?",
    "choices": [
      "No, an unsubstantiated amount may never be deducted",
      "Yes, if the estimate is reasonable under the circumstances",
      "Yes, but only if the estimate is disclosed on the face of the return",
      "No, unless the IRS grants advance permission"
    ],
    "answer": 1,
    "explain": "Estimates are permitted when obtaining exact data is impracticable and the estimate is reasonable. What the CPA may not do is present the estimate in a way that implies greater accuracy than actually exists."
  },
  {
    "id": "ethics-15",
    "section": "ethics",
    "topic": "Practice before the IRS",
    "difficulty": "easy",
    "q": "An unenrolled preparer holds an Annual Filing Season Program Record of Completion. What representation rights does that provide?",
    "choices": [
      "Full representation before every IRS function, the same as an enrolled agent",
      "Limited representation for returns the preparer prepared and signed, before examination",
      "Representation before examination, Appeals and Collection for returns the preparer signed",
      "No representation rights, only the ability to prepare and sign returns"
    ],
    "answer": 1,
    "explain": "AFSP participants have limited representation rights confined to returns they prepared and signed, and only before examination and customer service functions. Appeals, Collection, and Counsel are reserved to attorneys, CPAs, and enrolled agents."
  },
  {
    "id": "ethics-16",
    "section": "ethics",
    "topic": "Sanctions",
    "difficulty": "easy",
    "q": "Which sanction is NOT available against a practitioner under Circular 230?",
    "choices": [
      "Censure",
      "Suspension from practice before the IRS",
      "Revocation of the practitioner's state CPA license",
      "A monetary penalty against the practitioner or their firm"
    ],
    "answer": 2,
    "explain": "The Office of Professional Responsibility may censure, suspend, disbar, or impose a monetary penalty. Only a state board of accountancy can act against a CPA license."
  },
  {
    "id": "ethics-17",
    "section": "ethics",
    "topic": "Disciplinary bodies",
    "difficulty": "easy",
    "q": "A client complains that a CPA knowingly signed false returns. Which body has the legal power to suspend or revoke the CPA's license to practice?",
    "choices": [
      "The state board of accountancy",
      "The IRS Office of Professional Responsibility",
      "The AICPA Professional Ethics Division",
      "The Public Company Accounting Oversight Board"
    ],
    "answer": 0,
    "explain": "CPA licenses are issued under state accountancy statutes, most modeled on the Uniform Accountancy Act, and only the state board that issued a license can suspend or revoke it, fine the licensee, censure, or order remedial CPE. The AICPA can only end membership, the IRS can only bar practice before the IRS under Circular 230, and the PCAOB can only bar a person or firm from auditing issuers. None of those bodies can touch the license itself."
  },
  {
    "id": "ethics-18",
    "section": "ethics",
    "topic": "Accountant negligence",
    "difficulty": "medium",
    "q": "A CPA negligently prepares a tax projection knowing the client will give it to First Bank for a loan. The bank lends and loses money. In a Restatement jurisdiction, what is the CPA's exposure?",
    "choices": [
      "Liable only to the client, who alone is in privity",
      "Liable to the bank as a foreseen user of the work",
      "Liable to the bank only if fraud or gross negligence is shown",
      "Liable to any lender who might reasonably have relied"
    ],
    "answer": 1,
    "explain": "Under the Restatement (Second) of Torts section 552, a negligent accountant is liable to the limited class of third parties the accountant knew would receive and rely on the work for a known purpose; a lender the CPA knew about is squarely inside that class. The privity rule of Ultramares would protect the CPA from any non-client, and fraud or gross negligence is what a non-client must show in a strict privity state, not a Restatement one. Liability to anyone who might foreseeably rely is the minority foreseeability approach, which reaches further than the Restatement."
  },
  {
    "id": "procedure-1",
    "section": "procedure",
    "topic": "Assessment statute",
    "difficulty": "easy",
    "q": "A calendar-year individual files a 2025 Form 1040 on March 1, 2026. When does the general assessment statute of limitations expire?",
    "choices": [
      "March 1, 2029",
      "April 15, 2029",
      "April 15, 2028",
      "December 31, 2029"
    ],
    "answer": 1,
    "explain": "The three-year period runs from the later of the due date or the actual filing date. An early return is treated as filed on the due date, so the clock starts April 15, 2026."
  },
  {
    "id": "procedure-2",
    "section": "procedure",
    "topic": "Omitted gross income",
    "difficulty": "medium",
    "q": "A taxpayer reports $400,000 of gross income but omits $110,000. How long does the IRS have to assess?",
    "choices": [
      "Three years",
      "Six years",
      "Ten years",
      "No limit"
    ],
    "answer": 1,
    "explain": "Omitting more than 25% of gross income stated on the return extends the assessment period to six years. The omission here is 27.5% of the $400,000 reported."
  },
  {
    "id": "procedure-3",
    "section": "procedure",
    "topic": "Unlimited assessment",
    "difficulty": "easy",
    "q": "In which case does no assessment statute of limitations run at all?",
    "choices": [
      "The taxpayer understated tax by more than 25%",
      "The taxpayer never filed a return",
      "The taxpayer filed after a valid extension",
      "The taxpayer filed an amended return"
    ],
    "answer": 1,
    "explain": "The period never begins if no return is filed, and it is likewise unlimited for a false or fraudulent return filed with intent to evade tax."
  },
  {
    "id": "procedure-4",
    "section": "procedure",
    "topic": "Refund claims",
    "difficulty": "medium",
    "q": "A taxpayer timely filed a 2022 return on April 15, 2023 and paid the balance that day. What is the last date to claim a refund of 2022 tax?",
    "choices": [
      "April 15, 2025",
      "April 15, 2026",
      "December 31, 2026",
      "April 15, 2027"
    ],
    "answer": 1,
    "explain": "A refund claim must be filed within three years of filing the return or two years of paying the tax, whichever is later. Three years from the April 15, 2023 filing is the later date."
  },
  {
    "id": "procedure-5",
    "section": "procedure",
    "topic": "Collection statute",
    "difficulty": "easy",
    "q": "How long does the IRS generally have to collect an assessed tax by levy or court proceeding?",
    "choices": [
      "Three years from assessment",
      "Six years from assessment",
      "Ten years from assessment",
      "Ten years from the return due date"
    ],
    "answer": 2,
    "explain": "The collection statute expiration date is ten years from the date of assessment, not from filing. Certain events such as a pending offer in compromise or bankruptcy suspend the running of that period."
  },
  {
    "id": "procedure-6",
    "section": "procedure",
    "topic": "Notice of deficiency",
    "difficulty": "medium",
    "q": "A taxpayer receives a statutory notice of deficiency. What is the significance of the 90-day period that follows?",
    "choices": [
      "The taxpayer must pay the deficiency or interest begins to accrue",
      "The taxpayer may petition the Tax Court without first paying the tax",
      "The taxpayer must request an Appeals conference",
      "The IRS must complete its examination within that period"
    ],
    "answer": 1,
    "explain": "The 90-day letter is the ticket to Tax Court. Filing a petition within 90 days (150 if addressed outside the United States) both bars assessment and lets the taxpayer litigate without paying first."
  },
  {
    "id": "procedure-7",
    "section": "procedure",
    "topic": "Choice of forum",
    "difficulty": "medium",
    "q": "A taxpayer wants a jury to hear their tax refund case. Which court must they choose?",
    "choices": [
      "The United States Tax Court",
      "The United States Court of Federal Claims",
      "The United States District Court",
      "The United States Court of Appeals"
    ],
    "answer": 2,
    "explain": "District Court is the only federal trial forum offering a jury in a tax case, and like the Court of Federal Claims it requires the taxpayer to pay the tax and sue for refund first."
  },
  {
    "id": "procedure-8",
    "section": "procedure",
    "topic": "30-day letter",
    "difficulty": "easy",
    "q": "What does a 30-day letter from the IRS offer the taxpayer?",
    "choices": [
      "The right to petition the Tax Court within 90 days without paying the tax",
      "The opportunity for a conference with the Independent Office of Appeals",
      "An automatic extension to pay the proposed deficiency",
      "A final determination that ends the examination"
    ],
    "answer": 1,
    "explain": "The 30-day letter transmits the examination report and invites an Appeals conference. Ignoring it generally leads to the statutory notice of deficiency, which is what opens the Tax Court door."
  },
  {
    "id": "procedure-9",
    "section": "procedure",
    "topic": "Accuracy-related penalty",
    "difficulty": "medium",
    "q": "An individual's correct tax is $80,000 and the return reported $68,000. Does the substantial understatement penalty apply?",
    "choices": [
      "Yes, because the understatement exceeds the greater of 10% of correct tax or $5,000",
      "No, because the understatement is under the $10,000 floor that applies to individuals",
      "Yes, but only if the IRS also proves negligence",
      "No, because the understatement is less than 25% of correct tax"
    ],
    "answer": 0,
    "explain": "For individuals the threshold is the greater of 10% of the correct tax ($8,000) or $5,000. The $12,000 understatement clears it, exposing the taxpayer to the 20% accuracy-related penalty."
  },
  {
    "id": "procedure-10",
    "section": "procedure",
    "topic": "Civil fraud penalty",
    "difficulty": "easy",
    "q": "What is the civil fraud penalty under section 6663 and who bears the burden of proof?",
    "choices": [
      "20% of the underpayment attributable to fraud; the taxpayer must establish reasonable cause and good faith",
      "75% of the fraud-attributable underpayment; the IRS must prove fraud by clear and convincing evidence",
      "50% of the underpayment attributable to fraud; the IRS must prove fraud beyond a reasonable doubt",
      "75% of the entire underpayment; the taxpayer must prove the absence of fraud by a preponderance of the evidence"
    ],
    "answer": 1,
    "explain": "Civil fraud is 75% of the portion of the underpayment attributable to fraud, and the government carries the burden by clear and convincing evidence. The accuracy-related penalty does not stack on the same dollars."
  },
  {
    "id": "procedure-11",
    "section": "procedure",
    "topic": "Late filing and payment",
    "difficulty": "medium",
    "q": "A return is filed two months late and the balance is paid at the same time. How do the failure-to-file and failure-to-pay penalties interact for those months?",
    "choices": [
      "Both apply at their full rates",
      "The failure-to-file rate is reduced by the failure-to-pay amount for that month",
      "Only the failure-to-pay penalty applies once a return is eventually filed",
      "The failure-to-pay penalty is suspended while a return is delinquent"
    ],
    "answer": 1,
    "explain": "For any month both run, the 5% failure-to-file rate is cut by the 0.5% failure-to-pay amount, so the combined charge is 5% per month. Each penalty has its own 25% ceiling."
  },
  {
    "id": "procedure-12",
    "section": "procedure",
    "topic": "Estimated tax safe harbor",
    "difficulty": "medium",
    "q": "An individual's prior-year AGI was $200,000. What percentage of the prior-year tax must their current-year estimated payments equal to avoid an underpayment penalty on that safe harbor?",
    "choices": [
      "90%",
      "100%",
      "110%",
      "125%"
    ],
    "answer": 2,
    "explain": "The prior-year safe harbor is 100% of last year's tax, but it rises to 110% when prior-year AGI exceeded $150,000. The alternative safe harbor of 90% of the current year's tax is always available."
  },
  {
    "id": "procedure-13",
    "section": "procedure",
    "topic": "Innocent spouse relief",
    "difficulty": "medium",
    "q": "What must a requesting spouse generally establish for innocent spouse relief from a joint return understatement?",
    "choices": [
      "That the couple divorced or legally separated before the return was audited",
      "That they did not know and had no reason to know of the understatement",
      "That the other spouse earned substantially more of the household income",
      "That they signed the joint return under duress from the other spouse"
    ],
    "answer": 1,
    "explain": "Traditional relief requires an understatement attributable to the other spouse's erroneous item, no knowledge or reason to know, and inequity in holding the requesting spouse liable. Duress is a separate argument that the joint return was never valid."
  },
  {
    "id": "procedure-14",
    "section": "procedure",
    "topic": "Offers in compromise",
    "difficulty": "easy",
    "q": "Which is NOT a ground for the IRS to accept an offer in compromise?",
    "choices": [
      "Doubt as to collectibility of the assessed amount",
      "Doubt as to liability for the tax assessed",
      "Effective tax administration where collection causes hardship",
      "Delay by the IRS in processing the taxpayer's return"
    ],
    "answer": 3,
    "explain": "The three statutory grounds are doubt as to collectibility, doubt as to liability, and effective tax administration, which covers economic hardship or exceptional circumstances. Administrative delay is handled through interest abatement, not an offer."
  },
  {
    "id": "procedure-15",
    "section": "procedure",
    "topic": "Collection due process",
    "difficulty": "medium",
    "q": "The IRS issues a final notice of intent to levy. Within what period may the taxpayer request a collection due process hearing?",
    "choices": [
      "10 days",
      "30 days",
      "60 days",
      "90 days"
    ],
    "answer": 1,
    "explain": "A CDP hearing must be requested within 30 days of the final notice. A timely request suspends levy action and preserves the right to judicial review of the Appeals determination in Tax Court."
  },
  {
    "id": "procedure-16",
    "section": "procedure",
    "topic": "Math error assessments",
    "difficulty": "medium",
    "q": "The IRS corrects an arithmetic mistake on a return and assesses additional tax by math error notice. What is the taxpayer's recourse?",
    "choices": [
      "Petition the Tax Court within 90 days, since the notice counts as a deficiency notice",
      "Request abatement within 60 days, after which normal deficiency procedures apply",
      "Pay the tax and file a refund claim, with no administrative option",
      "File an amended return within three years"
    ],
    "answer": 1,
    "explain": "Math error authority lets the IRS skip deficiency procedures, but a request for abatement within 60 days forces the IRS back into the ordinary process, including a notice of deficiency and Tax Court rights."
  },
  {
    "id": "procedure-17",
    "section": "procedure",
    "topic": "Weight of authority",
    "difficulty": "medium",
    "q": "A client's position rests on a private letter ruling the IRS issued to another taxpayer, which conflicts with a Treasury regulation. Which statement about these authorities is correct?",
    "choices": [
      "The ruling controls because it is more specific and more recent",
      "The regulation controls; the ruling binds only the taxpayer who requested it",
      "The ruling may be relied on as binding precedent by any taxpayer with similar facts",
      "Neither binds the client; only the Code and court decisions do"
    ],
    "answer": 1,
    "explain": "The Internal Revenue Code sits at the top of the hierarchy, followed by Treasury regulations, which carry the force of law unless a court holds them invalid, then revenue rulings and revenue procedures, which bind the IRS as to all taxpayers. A private letter ruling binds the IRS only for the taxpayer who requested it and under section 6110(k)(3) may not be used or cited as precedent by anyone else. IRS publications and instructions explain the law but are not authority at all."
  },
  {
    "id": "contracts-1",
    "section": "contracts",
    "topic": "Article 2 scope",
    "difficulty": "medium",
    "q": "A contract calls for a company to supply a custom furnace for $90,000 and install it for $6,000. Which body of law governs?",
    "choices": [
      "Common law, because a custom-built furnace is a service rather than a good",
      "UCC Article 2, because the predominant purpose is the sale of goods",
      "Both, applied separately to the goods and the services",
      "UCC Article 2A, because the furnace is custom equipment"
    ],
    "answer": 1,
    "explain": "Mixed goods-and-services contracts are governed in their entirety by the law that fits their predominant purpose. Here the goods overwhelmingly dominate the price, so Article 2 applies to the whole contract."
  },
  {
    "id": "contracts-2",
    "section": "contracts",
    "topic": "Statute of frauds",
    "difficulty": "easy",
    "q": "Which oral agreement is unenforceable under the statute of frauds?",
    "choices": [
      "A sale of 400 bushels of wheat for $480",
      "A contract to paint a house for $9,000 over three weeks",
      "A sale of office equipment for $700",
      "An employment contract terminable at will"
    ],
    "answer": 2,
    "explain": "Under UCC 2-201 a contract for the sale of goods for $500 or more must be evidenced by a signed writing. Service contracts fall outside that rule and are only caught if they cannot be performed within one year."
  },
  {
    "id": "contracts-3",
    "section": "contracts",
    "topic": "Firm offers",
    "difficulty": "medium",
    "q": "A merchant signs a written offer promising to hold it open for six months. No consideration is paid. How long is the offer irrevocable?",
    "choices": [
      "It is revocable at any time without consideration",
      "Three months",
      "Six months",
      "Until the offeree rejects it"
    ],
    "answer": 1,
    "explain": "A merchant's firm offer in a signed writing is irrevocable without consideration, but UCC 2-205 caps the period at three months no matter what the writing says."
  },
  {
    "id": "contracts-4",
    "section": "contracts",
    "topic": "Battle of the forms",
    "difficulty": "medium",
    "q": "Two merchants exchange forms. The seller's acknowledgment adds an arbitration clause that would materially alter the deal. The buyer never responds. What is the result?",
    "choices": [
      "No contract is formed because the acceptance did not mirror the offer",
      "A contract is formed and the arbitration clause is part of it",
      "A contract is formed without the arbitration clause",
      "A contract is formed only if the buyer accepts the goods"
    ],
    "answer": 2,
    "explain": "Under UCC 2-207 a definite acceptance forms a contract even with additional terms. Between merchants those terms drop out if they materially alter the agreement, and an arbitration clause typically does."
  },
  {
    "id": "contracts-5",
    "section": "contracts",
    "topic": "Contract modification",
    "difficulty": "medium",
    "q": "After a goods contract is signed, the seller's costs spike and the parties agree to raise the price. The buyer gets nothing extra. Is the modification binding?",
    "choices": [
      "No, the modification lacks consideration under the pre-existing duty rule",
      "Yes, UCC modifications need no consideration if made in good faith",
      "No, unless the buyer receives a corresponding benefit",
      "Yes, but only if the increase is under 10%"
    ],
    "answer": 1,
    "explain": "UCC 2-209 abandons the common law pre-existing duty rule for goods contracts — a good faith modification is binding without new consideration. Under common law the same change would fail for lack of consideration."
  },
  {
    "id": "contracts-6",
    "section": "contracts",
    "topic": "Perfect tender and cure",
    "difficulty": "medium",
    "q": "A seller delivers nonconforming goods before the contract delivery date. The buyer rejects them. What may the seller do?",
    "choices": [
      "Nothing — rejection ends the contract",
      "Cure by making a conforming delivery within the contract time",
      "Force the buyer to accept with a price allowance",
      "Demand the buyer accept commercially reasonable substitutes"
    ],
    "answer": 1,
    "explain": "The perfect tender rule lets a buyer reject goods failing in any respect, but UCC 2-508 gives the seller a right to cure by notifying the buyer and delivering conforming goods within the original contract period."
  },
  {
    "id": "contracts-7",
    "section": "contracts",
    "topic": "Risk of loss",
    "difficulty": "medium",
    "q": "Goods are shipped FOB the seller's plant. The carrier destroys them in transit. Who bears the loss?",
    "choices": [
      "The buyer, because risk passed on delivery to the carrier",
      "The seller, because the buyer never received the goods",
      "The carrier, in all events",
      "The parties share it equally absent insurance"
    ],
    "answer": 0,
    "explain": "FOB the seller's location is a shipment contract, so risk passes when the seller duly delivers the goods to the carrier. FOB the buyer's location would be a destination contract and the seller would keep the risk until tender there."
  },
  {
    "id": "contracts-8",
    "section": "contracts",
    "topic": "Merchantability",
    "difficulty": "easy",
    "q": "Who gives an implied warranty of merchantability?",
    "choices": [
      "Any seller of goods",
      "A merchant who deals in goods of that kind",
      "Any seller who knows the buyer's particular purpose",
      "Only a manufacturer of the goods"
    ],
    "answer": 1,
    "explain": "The implied warranty of merchantability arises only from a merchant with respect to goods of the kind they deal in, and promises the goods are fit for their ordinary purpose. A casual seller gives no such warranty."
  },
  {
    "id": "contracts-9",
    "section": "contracts",
    "topic": "Fitness for particular purpose",
    "difficulty": "medium",
    "q": "What must be shown to establish an implied warranty of fitness for a particular purpose?",
    "choices": [
      "The seller is a merchant who regularly deals in goods of that kind",
      "The goods failed to perform the ordinary function such goods serve",
      "The seller knew the buyer's purpose and the buyer relied on the seller's skill",
      "The seller made an affirmation of fact that became part of the bargain"
    ],
    "answer": 2,
    "explain": "Fitness for a particular purpose turns on the seller's reason to know the buyer's special purpose and the buyer's actual reliance on the seller's judgment. Unlike merchantability, the seller need not be a merchant."
  },
  {
    "id": "contracts-10",
    "section": "contracts",
    "topic": "Warranty disclaimers",
    "difficulty": "medium",
    "q": "A seller wants to disclaim the implied warranty of merchantability in a written contract. What is required?",
    "choices": [
      "The disclaimer must mention merchantability and be conspicuous",
      "The disclaimer must be initialed separately by the buyer",
      "The disclaimer must be approved in advance by the buyer's counsel",
      "Implied warranties cannot be disclaimed once goods are delivered"
    ],
    "answer": 0,
    "explain": "A written disclaimer of merchantability must actually use the word merchantability and be conspicuous. Expressions like as is or with all faults disclaim all implied warranties without naming them."
  },
  {
    "id": "contracts-11",
    "section": "contracts",
    "topic": "Prior oral promises",
    "difficulty": "medium",
    "q": "Parties sign a fully integrated written contract. One later offers evidence of a prior oral promise that contradicts a written term. How does a court treat it?",
    "choices": [
      "Admissible, because oral agreements are enforceable",
      "Excluded by the parol evidence rule",
      "Admissible only if the contract is for goods",
      "Admissible to show the parties' subjective intent"
    ],
    "answer": 1,
    "explain": "The parol evidence rule bars prior or contemporaneous agreements that contradict a fully integrated writing. Evidence of fraud, duress, a condition precedent, or a subsequent modification is still admissible."
  },
  {
    "id": "contracts-12",
    "section": "contracts",
    "topic": "Anticipatory repudiation",
    "difficulty": "medium",
    "q": "Three months before delivery, a seller tells the buyer it will not perform. What may the buyer do immediately?",
    "choices": [
      "Nothing until the delivery date arrives",
      "Treat the contract as breached and sue at once",
      "Only demand adequate assurance of performance",
      "Only cancel, with no right to damages"
    ],
    "answer": 1,
    "explain": "An unequivocal repudiation before performance is due lets the aggrieved party sue immediately, await performance for a commercially reasonable time, or resort to any remedy for breach. Demanding assurances is an option, not the only one."
  },
  {
    "id": "contracts-13",
    "section": "contracts",
    "topic": "Buyer's remedies",
    "difficulty": "medium",
    "q": "A seller fails to deliver goods contracted at $50,000. The buyer buys substitute goods in good faith for $58,000. What may the buyer recover?",
    "choices": [
      "Nothing, because the buyer obtained conforming goods elsewhere",
      "$8,000 plus incidental and consequential damages, less expenses saved",
      "$58,000 as restitution for the full cost of the substitute goods",
      "$50,000, the contract price, as expectation damages"
    ],
    "answer": 1,
    "explain": "Cover lets the buyer recover the difference between the cost of the substitute goods and the contract price, plus incidental and consequential damages, minus expenses saved by the breach."
  },
  {
    "id": "contracts-14",
    "section": "contracts",
    "topic": "Third-party beneficiaries",
    "difficulty": "medium",
    "q": "A city hires a contractor to repave a street. A nearby shop owner expects more foot traffic from the work. Can the shop owner sue if the contractor defaults?",
    "choices": [
      "Yes, as an intended third-party beneficiary",
      "No, the shop owner is only an incidental beneficiary",
      "Yes, because the shop owner suffered actual damages",
      "No, because the shop owner gave no consideration to the contractor"
    ],
    "answer": 1,
    "explain": "Only intended beneficiaries — those the contracting parties meant to benefit — have enforcement rights. Someone who merely happens to profit from performance is an incidental beneficiary with no claim."
  },
  {
    "id": "contracts-15",
    "section": "contracts",
    "topic": "Novation",
    "difficulty": "medium",
    "q": "What distinguishes a novation from a delegation of duties?",
    "choices": [
      "A novation transfers rights; a delegation transfers duties",
      "A novation releases the original obligor; a delegation leaves them liable",
      "A novation needs only the new party's consent; a delegation needs the consent of all three parties",
      "A novation must be in a signed writing; a delegation may be made orally"
    ],
    "answer": 1,
    "explain": "A novation substitutes a new party with the consent of all three and discharges the original obligor. A bare delegation transfers performance but the delegating party remains liable if the delegate fails."
  },
  {
    "id": "contracts-16",
    "section": "contracts",
    "topic": "Minors' contracts",
    "difficulty": "easy",
    "q": "A 17-year-old buys a stereo and, still a minor, returns it seeking a refund. What is the status of the contract?",
    "choices": [
      "Void from the outset",
      "Voidable at the minor's option",
      "Fully enforceable because the stereo was delivered",
      "Enforceable unless the seller knew the buyer's age"
    ],
    "answer": 1,
    "explain": "Contracts with minors are voidable by the minor, not void. The minor may disaffirm before or within a reasonable time after reaching majority, though contracts for necessaries carry liability for their reasonable value."
  },
  {
    "id": "agency-1",
    "section": "agency",
    "topic": "Secret revocation of authority",
    "difficulty": "medium",
    "q": "A principal privately revokes a purchasing agent's authority but tells no one. The agent orders goods from a longtime supplier. Is the principal bound?",
    "choices": [
      "No, actual authority was terminated before the order",
      "Yes, the agent had apparent authority as to that supplier",
      "No, unless the principal ratifies the order",
      "Yes, but only for the value the principal actually received"
    ],
    "answer": 1,
    "explain": "Apparent authority rests on the third party's reasonable belief created by the principal's own conduct. Until the principal notifies parties who dealt with the agent, that belief survives a secret revocation."
  },
  {
    "id": "agency-2",
    "section": "agency",
    "topic": "Ratification",
    "difficulty": "medium",
    "q": "An agent exceeds authority and signs a contract. Which condition must be met for the principal to ratify it?",
    "choices": [
      "The third party must consent, since ratification is a new contract",
      "The principal must know the material facts of the transaction",
      "The agent must have believed they had authority",
      "The contract must be in writing"
    ],
    "answer": 1,
    "explain": "Ratification requires the principal to have capacity, to know the material facts, and to adopt the entire transaction. Once ratified, the contract binds as though it had been authorized from the start."
  },
  {
    "id": "agency-3",
    "section": "agency",
    "topic": "Undisclosed principal",
    "difficulty": "medium",
    "q": "An agent with actual authority contracts in their own name without revealing that a principal exists. Who is liable to the third party?",
    "choices": [
      "Only the agent, because the principal was unknown",
      "Only the principal, because the agent acted with authority",
      "Both the agent and the principal once the principal is discovered",
      "The principal alone, but only if it ratifies the contract after being disclosed"
    ],
    "answer": 2,
    "explain": "With an undisclosed principal the agent is personally liable on the contract, and the third party may also hold the principal once identified. With a fully disclosed principal, the agent normally drops out."
  },
  {
    "id": "agency-4",
    "section": "agency",
    "topic": "Agent's duties",
    "difficulty": "easy",
    "q": "A purchasing agent quietly accepts a rebate from a supplier the agent selects for the principal. What has the agent breached?",
    "choices": [
      "The duty of obedience",
      "The duty of loyalty",
      "The duty of reasonable care",
      "The duty of accounting only"
    ],
    "answer": 1,
    "explain": "A secret profit from the agency relationship breaches the duty of loyalty. The principal may recover the rebate and, depending on the facts, rescind the transaction and recover compensation paid."
  },
  {
    "id": "agency-5",
    "section": "agency",
    "topic": "Respondeat superior",
    "difficulty": "medium",
    "q": "A delivery driver detours two blocks to buy coffee and negligently hits a pedestrian. Is the employer liable?",
    "choices": [
      "Yes, a minor detour remains within the scope of employment",
      "No, any personal errand ends the scope of employment",
      "Yes, but only if the employer permitted coffee stops",
      "No, because the driver was not making a delivery at that moment"
    ],
    "answer": 0,
    "explain": "A slight departure — a detour — stays within the scope of employment, so respondeat superior applies. A substantial personal excursion, a frolic, takes the employee outside it."
  },
  {
    "id": "agency-6",
    "section": "agency",
    "topic": "Irrevocable agency",
    "difficulty": "medium",
    "q": "Which agency relationship may the principal NOT unilaterally terminate?",
    "choices": [
      "An agency for a fixed term of two years",
      "An agency coupled with an interest",
      "An exclusive sales agency",
      "An agency created by a written power of attorney"
    ],
    "answer": 1,
    "explain": "An agency coupled with an interest — where the agent holds a security or property interest in the subject matter — is irrevocable. In every other case the principal has the power to terminate, even if doing so breaches the contract."
  },
  {
    "id": "agency-7",
    "section": "agency",
    "topic": "Worker classification",
    "difficulty": "medium",
    "q": "Which fact most strongly indicates a worker is an employee rather than an independent contractor?",
    "choices": [
      "The worker is paid by the project",
      "The business controls how and when the work is performed",
      "The worker provides their own hand tools",
      "The worker signed an independent contractor agreement"
    ],
    "answer": 1,
    "explain": "Behavioral control over the manner and means of the work is the core of the common law test. A label in a contract does not control, and payment method or tool ownership are only single factors."
  },
  {
    "id": "agency-8",
    "section": "agency",
    "topic": "FICA",
    "difficulty": "easy",
    "q": "How is the FICA Social Security tax borne?",
    "choices": [
      "Entirely by the employee, collected through payroll withholding",
      "Entirely by the employer, with no employee share withheld",
      "Split equally between employer and employee up to the annual wage base",
      "Split equally between employer and employee with no wage ceiling"
    ],
    "answer": 2,
    "explain": "Employer and employee each pay 6.2% of Social Security wages up to the annual wage base. The 1.45% Medicare component has no ceiling, and the additional 0.9% Medicare tax above the threshold falls on the employee alone."
  },
  {
    "id": "agency-9",
    "section": "agency",
    "topic": "FUTA",
    "difficulty": "medium",
    "q": "Which statement about federal unemployment tax is correct?",
    "choices": [
      "It is withheld from employee wages along with FICA",
      "It is imposed on the employer on the first $7,000 of each employee's wages",
      "It applies to the employer's total payroll without any wage limit",
      "It is shared equally by employer and employee up to a wage base"
    ],
    "answer": 1,
    "explain": "FUTA is an employer-only tax on the first $7,000 of each employee's annual wages. The 6.0% gross rate is reduced by a credit of up to 5.4% for state unemployment taxes paid, leaving a 0.6% net rate in most states."
  },
  {
    "id": "agency-10",
    "section": "agency",
    "topic": "Self-employment tax base",
    "difficulty": "medium",
    "q": "A sole proprietor has $100,000 of net profit from Schedule C. What amount is subject to self-employment tax?",
    "choices": [
      "$100,000",
      "$92,350",
      "$50,000",
      "$107,650"
    ],
    "answer": 1,
    "explain": "Net earnings from self-employment equal 92.35% of net Schedule C profit. The 7.65% haircut approximates the employer share of FICA that an employee would not have in wages."
  },
  {
    "id": "agency-11",
    "section": "agency",
    "topic": "SE tax deduction",
    "difficulty": "easy",
    "q": "How does a self-employed taxpayer treat the self-employment tax they owe?",
    "choices": [
      "No portion is deductible on the individual return",
      "One-half is deductible as an adjustment in arriving at AGI",
      "The full amount is deductible as an itemized deduction",
      "One-half is allowed as a credit against income tax"
    ],
    "answer": 1,
    "explain": "One-half of self-employment tax is deductible above the line in computing AGI, mirroring the employer's deduction for its share of FICA. It is not an itemized deduction and not a credit."
  },
  {
    "id": "agency-12",
    "section": "agency",
    "topic": "Information reporting",
    "difficulty": "easy",
    "q": "A business pays an unincorporated consultant $2,400 during the year for services. What reporting is required?",
    "choices": [
      "No reporting, because the consultant is not an employee",
      "Form 1099-NEC, because payments reached the $2,000 threshold",
      "Form W-2, because services were performed",
      "Form 1099-MISC, because the payment was not wages"
    ],
    "answer": 1,
    "explain": "For payments made after 2025, nonemployee compensation of $2,000 or more (indexed after 2026) to an unincorporated payee is reported on Form 1099-NEC; the old $600 threshold is gone. Form 1099-MISC now carries rents, royalties, and other income rather than service payments."
  },
  {
    "id": "agency-13",
    "section": "agency",
    "topic": "Trust fund recovery penalty",
    "difficulty": "medium",
    "q": "A corporation fails to remit withheld income and FICA taxes. Who can the IRS pursue personally under section 6672?",
    "choices": [
      "Only the corporation itself, because of limited liability",
      "Any shareholder, in proportion to their percentage ownership",
      "Any responsible person who willfully failed to pay over the taxes",
      "Only the officer who signed the payroll tax returns"
    ],
    "answer": 2,
    "explain": "The trust fund recovery penalty reaches any responsible person who willfully fails to pay over withheld taxes, in an amount equal to 100% of the trust fund portion. Corporate limited liability is no shield."
  },
  {
    "id": "agency-14",
    "section": "agency",
    "topic": "Payroll deposits",
    "difficulty": "medium",
    "q": "Which taxes make up the trust fund portion an employer holds for the government?",
    "choices": [
      "The employer's own share of FICA together with FUTA",
      "Income tax withheld from wages and the employee's share of FICA",
      "FUTA and state unemployment tax paid by the employer",
      "Every payroll tax the employer remits, its own share and FUTA included"
    ],
    "answer": 1,
    "explain": "Trust fund taxes are the amounts taken out of the employee's pay — withheld income tax and the employee's FICA. The employer's matching share and FUTA are the employer's own liability, not trust funds."
  },
  {
    "id": "agency-15",
    "section": "agency",
    "topic": "Workers' compensation",
    "difficulty": "easy",
    "q": "An employee is injured on the job through the employer's ordinary negligence. What is the general rule?",
    "choices": [
      "The employee may sue the employer in tort for full damages",
      "Workers' compensation is the employee's exclusive remedy against the employer",
      "The employee must prove the employer's negligence to recover benefits",
      "Benefits are available only if the employee was free of fault"
    ],
    "answer": 1,
    "explain": "Workers' compensation is a no-fault system and the exclusive remedy against the employer. The employee need not prove negligence, and contributory fault generally does not bar benefits."
  },
  {
    "id": "agency-16",
    "section": "agency",
    "topic": "Agent liability on contracts",
    "difficulty": "medium",
    "q": "An agent signs a contract as \"Acme Corp., by J. Diaz, Agent.\" Acme later breaches. Who is liable to the third party?",
    "choices": [
      "Diaz alone, because Diaz signed the document",
      "Acme alone, because the principal was fully disclosed",
      "Both Acme and Diaz jointly",
      "Neither until the third party elects a defendant"
    ],
    "answer": 1,
    "explain": "When the principal is fully disclosed and the agent signs in a representative capacity with authority, only the principal is bound. The agent takes on personal liability only by signing without authority or in their own name."
  },
  {
    "id": "agency-17",
    "section": "agency",
    "topic": "Employer health coverage",
    "difficulty": "medium",
    "q": "A company averaged 80 full-time equivalent employees last year and offers no health coverage. Several full-time employees buy subsidized coverage on an exchange. What is the company's federal tax exposure?",
    "choices": [
      "An employer shared responsibility payment under section 4980H",
      "None, because the mandate applies only to employers with 100 or more employees",
      "A penalty equal to the premium tax credits the employees received",
      "Loss of the deduction for wages paid to the employees who bought exchange coverage"
    ],
    "answer": 0,
    "explain": "An applicable large employer averaged at least 50 full-time plus full-time equivalent employees in the prior year, and a full-time employee works 30 or more hours a week. An ALE that fails to offer minimum essential coverage that is affordable and provides minimum value to substantially all full-time employees owes the section 4980H assessable payment once any full-time employee receives a premium tax credit. The payment is a nondeductible excise tax computed per full-time employee at indexed amounts, not a refund of the employees' credits, and the employer's wage deduction is unaffected."
  },
  {
    "id": "agency-18",
    "section": "agency",
    "topic": "Foreign Corrupt Practices Act",
    "difficulty": "medium",
    "q": "A US company's agent abroad pays a customs clerk $40 to speed routine processing of approved import papers and pays a minister $50,000 to win a supply contract. Under the FCPA, which is correct?",
    "choices": [
      "Only the payment to the minister violates the anti-bribery provisions",
      "Both payments violate the anti-bribery provisions regardless of amount",
      "Neither violates the Act because an agent, not the company, paid",
      "Both violate the Act unless each was accurately recorded in the company's books"
    ],
    "answer": 0,
    "explain": "The FCPA's anti-bribery provisions bar issuers, domestic concerns, and anyone acting in the United States from corruptly paying a foreign official to obtain or retain business, and a company is liable for payments its agent makes on its behalf. A narrow exception covers facilitating payments for routine governmental action an official is already obliged to perform, such as processing approved paperwork; awarding a contract is a discretionary act and never routine. Issuers must also record every payment accurately under the books-and-records and internal-controls provisions, so even a lawful grease payment must be booked for what it is."
  },
  {
    "id": "debtor-1",
    "section": "debtor",
    "topic": "Attachment",
    "difficulty": "medium",
    "q": "Which element is NOT required for a security interest to attach?",
    "choices": [
      "The secured party gave value",
      "The debtor has rights in the collateral",
      "A financing statement has been filed",
      "There is an authenticated security agreement or the secured party has possession"
    ],
    "answer": 2,
    "explain": "Attachment makes the interest enforceable between the parties and needs value, debtor rights in the collateral, and a security agreement (or possession/control). Filing is about perfection, which governs priority against third parties."
  },
  {
    "id": "debtor-2",
    "section": "debtor",
    "topic": "Automatic perfection",
    "difficulty": "medium",
    "q": "A store sells a refrigerator on credit to a homeowner for personal use and takes a security interest in it. What is required to perfect?",
    "choices": [
      "Nothing further — a PMSI in consumer goods perfects automatically",
      "Filing a financing statement within 20 days of the debtor taking delivery",
      "Taking possession of the refrigerator",
      "Obtaining control over the deposit account used to pay"
    ],
    "answer": 0,
    "explain": "A purchase money security interest in consumer goods perfects on attachment with no filing. Filing is still advisable, because automatic perfection loses to a later consumer buyer who buys for value without knowledge."
  },
  {
    "id": "debtor-3",
    "section": "debtor",
    "topic": "PMSI in inventory",
    "difficulty": "medium",
    "q": "A lender wants priority for a purchase money security interest in a retailer's inventory over an earlier perfected blanket lien. What must the lender do?",
    "choices": [
      "File a financing statement within 20 days after the debtor receives the inventory",
      "Perfect before the debtor receives the inventory and notify the existing lender",
      "Obtain a written subordination agreement from the earlier secured party",
      "Take possession of the inventory and hold it until each unit is sold"
    ],
    "answer": 1,
    "explain": "The inventory PMSI superpriority requires perfection before the debtor takes possession plus authenticated notice to holders of conflicting perfected interests. The 20-day grace period applies to non-inventory goods, not inventory."
  },
  {
    "id": "debtor-4",
    "section": "debtor",
    "topic": "PMSI in equipment",
    "difficulty": "medium",
    "q": "A bank finances a machine for a manufacturer, which takes delivery on June 1. To gain superpriority over an existing perfected blanket lien on equipment, by when must the bank perfect?",
    "choices": [
      "Before June 1",
      "Within 10 days of June 1",
      "Within 20 days of June 1",
      "Within 30 days of June 1"
    ],
    "answer": 2,
    "explain": "A PMSI in goods other than inventory or livestock takes priority if perfected within 20 days after the debtor receives possession, and that perfection relates back to the delivery date."
  },
  {
    "id": "debtor-5",
    "section": "debtor",
    "topic": "Priority rules",
    "difficulty": "medium",
    "q": "Two secured parties hold non-purchase-money interests in the same equipment. Lender A filed first but attached second; Lender B attached first but filed second. Who has priority?",
    "choices": [
      "Lender A, under the first to file or perfect rule",
      "Lender B, because its interest attached first",
      "Lender B, because a filing made before attachment has no effect",
      "Lender A, but only as to advances made before Lender B attached"
    ],
    "answer": 0,
    "explain": "Between conflicting perfected security interests, priority goes to whoever was first to file or perfect, provided there is no gap in that status. Filing early secures the place in line even before attachment."
  },
  {
    "id": "debtor-6",
    "section": "debtor",
    "topic": "Buyer in ordinary course",
    "difficulty": "easy",
    "q": "A customer buys a television from a retailer's showroom floor. A bank holds a perfected security interest in the retailer's inventory. What are the customer's rights?",
    "choices": [
      "The customer takes subject to the bank's perfected interest",
      "The customer takes free of the bank's interest",
      "The customer takes free only if unaware of the bank's lien of record",
      "The bank may repossess unless the customer paid cash"
    ],
    "answer": 1,
    "explain": "A buyer in ordinary course of business takes free of a security interest created by their seller, even a perfected one and even knowing it exists. Otherwise inventory financing would make retail sales impossible."
  },
  {
    "id": "debtor-7",
    "section": "debtor",
    "topic": "Financing statements",
    "difficulty": "easy",
    "q": "How long is a filed financing statement effective before it lapses?",
    "choices": [
      "Three years",
      "Five years",
      "Ten years",
      "Until the underlying debt is repaid"
    ],
    "answer": 1,
    "explain": "A financing statement is effective for five years and lapses unless a continuation statement is filed within the six months before expiration. On lapse the security interest becomes unperfected."
  },
  {
    "id": "debtor-8",
    "section": "debtor",
    "topic": "Repossession",
    "difficulty": "medium",
    "q": "After default, a secured party may take possession of collateral without judicial process only if it can do so",
    "choices": [
      "with the debtor's written consent obtained after default",
      "without breaching the peace",
      "during normal business hours",
      "after 10 days' written notice to the debtor"
    ],
    "answer": 1,
    "explain": "Self-help repossession is permitted under UCC 9-609 so long as there is no breach of the peace. If a confrontation is likely, the secured party must proceed by judicial action instead."
  },
  {
    "id": "debtor-9",
    "section": "debtor",
    "topic": "Surety vs guarantor",
    "difficulty": "medium",
    "q": "How does a guarantor of collection differ from an ordinary surety?",
    "choices": [
      "The guarantor's promise is enforceable without a signed writing",
      "The creditor must first exhaust its remedies against the principal debtor",
      "The guarantor is liable only for accrued interest and collection costs",
      "The guarantor has no right of subrogation against the debtor"
    ],
    "answer": 1,
    "explain": "An ordinary surety is liable as soon as the principal defaults. A guarantor of collection is secondarily liable — the creditor must first pursue the debtor to judgment and have execution returned unsatisfied."
  },
  {
    "id": "debtor-10",
    "section": "debtor",
    "topic": "Surety defenses",
    "difficulty": "medium",
    "q": "A creditor releases valuable collateral securing the debt without the surety's consent. What is the effect on the surety?",
    "choices": [
      "No effect, because the surety guaranteed the debt itself",
      "The surety is discharged to the extent of the value released",
      "The surety is completely discharged",
      "The surety is completely discharged only if it was a gratuitous surety"
    ],
    "answer": 1,
    "explain": "Releasing or impairing collateral discharges the surety to the extent of the impairment, because it destroys the surety's subrogation rights in that property. A full release of the principal debtor generally discharges the surety entirely."
  },
  {
    "id": "debtor-11",
    "section": "debtor",
    "topic": "Co-surety contribution",
    "difficulty": "medium",
    "q": "Two co-sureties guarantee a $90,000 debt, one for the full amount and one capped at $45,000. The first pays the entire debt. What may it recover from the second?",
    "choices": [
      "$45,000",
      "$30,000",
      "$22,500",
      "Nothing, because each surety is independently liable"
    ],
    "answer": 1,
    "explain": "Contribution is shared in proportion to each surety's maximum exposure. Total exposure is $135,000, the second surety's share is 45/135 or one-third, so it owes $30,000."
  },
  {
    "id": "debtor-12",
    "section": "debtor",
    "topic": "Chapter choice",
    "difficulty": "easy",
    "q": "Which describes a Chapter 13 bankruptcy case?",
    "choices": [
      "Liquidation of the debtor's nonexempt assets by a court-appointed trustee",
      "Reorganization of a business under a court-approved plan of reorganization",
      "An individual with regular income repaying creditors over three to five years",
      "A court-supervised dissolution available only to corporate debtors"
    ],
    "answer": 2,
    "explain": "Chapter 13 is an individual debt adjustment funded by future income over three to five years. Chapter 7 is liquidation and Chapter 11 is reorganization, which corporations use and individuals occasionally do."
  },
  {
    "id": "debtor-13",
    "section": "debtor",
    "topic": "Involuntary petitions",
    "difficulty": "medium",
    "q": "A debtor has 20 creditors. How many must join an involuntary bankruptcy petition?",
    "choices": [
      "One creditor holding any unsecured claim, regardless of amount",
      "Three creditors holding unsecured claims meeting the statutory amount",
      "A majority of the creditors counted by number of claims",
      "Creditors holding more than half of the total debt by value"
    ],
    "answer": 1,
    "explain": "With 12 or more creditors, at least three holding unsecured claims that together meet the statutory threshold must sign. Where the debtor has fewer than 12 creditors, a single qualifying creditor may file."
  },
  {
    "id": "debtor-14",
    "section": "debtor",
    "topic": "Automatic stay",
    "difficulty": "easy",
    "q": "What happens the moment a bankruptcy petition is filed?",
    "choices": [
      "Creditors must obtain court permission before continuing collection efforts",
      "Secured creditors may repossess collateral, as the stay binds only unsecured claims",
      "All of the debtor's debts are discharged",
      "The debtor's contracts are automatically terminated"
    ],
    "answer": 0,
    "explain": "The automatic stay halts collection actions, lawsuits, liens, and repossessions immediately on filing. A creditor wanting to proceed must move for relief from the stay."
  },
  {
    "id": "debtor-15",
    "section": "debtor",
    "topic": "Claim priority",
    "difficulty": "medium",
    "q": "In a Chapter 7 case, which claim is paid first among these unsecured priority claims?",
    "choices": [
      "Wages earned within 180 days before filing",
      "Administrative expenses of the estate",
      "Domestic support obligations",
      "Certain unpaid income taxes"
    ],
    "answer": 2,
    "explain": "Section 507 ranks domestic support obligations first, then administrative expenses, then gap claims, then capped wage claims, with most tax claims well down the list. Secured creditors are paid from their collateral before any of these."
  },
  {
    "id": "debtor-16",
    "section": "debtor",
    "topic": "Preferential transfers",
    "difficulty": "medium",
    "q": "Which payment is most likely avoidable as a preference?",
    "choices": [
      "A cash payment for goods delivered the same day",
      "A $40,000 payment on an old loan to a non-insider 60 days before filing",
      "A payment of ordinary monthly utility bills as they came due",
      "A $40,000 payment on an old loan to a company director 14 months before filing"
    ],
    "answer": 1,
    "explain": "A preference is a transfer on an antecedent debt, made while insolvent, within 90 days of filing (one year for insiders), that pays the creditor more than Chapter 7 would. Contemporaneous exchanges and ordinary course payments are excepted."
  },
  {
    "id": "entity-1",
    "section": "entity",
    "topic": "Formation without a filing",
    "difficulty": "easy",
    "q": "Two people begin operating a business together for profit without filing anything with the state. What have they created?",
    "choices": [
      "Nothing until they file a certificate",
      "A general partnership",
      "A joint venture with no partner liability",
      "A limited liability company by default"
    ],
    "answer": 1,
    "explain": "A general partnership arises from the association of two or more persons carrying on a business for profit as co-owners, with no filing required. Each partner is jointly and severally liable for partnership obligations."
  },
  {
    "id": "entity-2",
    "section": "entity",
    "topic": "Limited partnerships",
    "difficulty": "medium",
    "q": "Under the Revised Uniform Limited Partnership Act, what is the principal risk to a limited partner who takes part in controlling the business?",
    "choices": [
      "Personal liability to partnership creditors as though a general partner",
      "Loss of the right to share in partnership profits and losses",
      "Automatic conversion of the limited partnership into a general partnership",
      "Forfeiture of the limited partner's capital account to the partnership"
    ],
    "answer": 0,
    "explain": "RULPA's control rule strips the liability shield of a limited partner who participates in control, but only as to creditors who reasonably believed, from that conduct, that they were dealing with a general partner; voting on major structural decisions is a protected safe harbor. States that have adopted the Uniform Limited Partnership Act (2001) abolished the rule, so the result depends on the governing statute."
  },
  {
    "id": "entity-4",
    "section": "entity",
    "topic": "Piercing the corporate veil",
    "difficulty": "medium",
    "q": "Which fact most supports piercing the corporate veil to reach a shareholder personally?",
    "choices": [
      "The corporation has only one shareholder who is also its sole officer",
      "The corporation has operated at a loss for several consecutive years",
      "The shareholder routinely paid personal expenses from corporate accounts",
      "The corporation has never declared a dividend since incorporation"
    ],
    "answer": 2,
    "explain": "Courts pierce where the corporation is a mere alter ego — commingled funds, undercapitalization, ignored formalities, or fraud. A single shareholder, operating losses, and no dividends are all perfectly lawful."
  },
  {
    "id": "entity-5",
    "section": "entity",
    "topic": "Director liability",
    "difficulty": "medium",
    "q": "Directors approve an acquisition after reviewing management's analysis and consulting an investment bank. The deal fails badly. What protects the directors?",
    "choices": [
      "The business judgment rule, absent fraud, bad faith, or self-dealing",
      "The corporate opportunity doctrine",
      "Exculpation, which every state charter provides automatically",
      "Nothing — reliance on an outside bank does not satisfy the duty of care"
    ],
    "answer": 0,
    "explain": "The business judgment rule presumes an informed, disinterested, good faith decision was made in the corporation's best interests. It shields directors from hindsight review of outcomes but not from self-dealing or gross inattention."
  },
  {
    "id": "entity-6",
    "section": "entity",
    "topic": "Derivative suits",
    "difficulty": "medium",
    "q": "A shareholder believes officers wasted corporate assets. Who is the real party in interest in a derivative suit, and who receives any recovery?",
    "choices": [
      "The shareholder, who keeps the recovery",
      "The corporation, which receives the recovery",
      "The shareholder class, sharing pro rata",
      "The state attorney general, on the corporation's behalf"
    ],
    "answer": 1,
    "explain": "A derivative action enforces the corporation's own claim, so any recovery belongs to the corporation. The shareholder must usually first make demand on the board or plead that demand would be futile."
  },
  {
    "id": "entity-7",
    "section": "entity",
    "topic": "Limited liability partnerships",
    "difficulty": "easy",
    "q": "What is the defining feature of a limited liability partnership?",
    "choices": [
      "Partners bear no liability for their own professional malpractice",
      "Partners are shielded from liability for other partners' misconduct",
      "Only one designated partner may manage the business of the firm",
      "The partnership is taxed as a corporation rather than a pass-through"
    ],
    "answer": 1,
    "explain": "An LLP protects each partner from vicarious liability for other partners' wrongful acts and, in most states, for partnership obligations generally. A partner always remains liable for their own negligence."
  },
  {
    "id": "entity-17",
    "section": "entity",
    "topic": "LLC structure",
    "difficulty": "easy",
    "q": "Three members form an LLC whose operating agreement names one of them as manager. The LLC defaults on a bank loan that no member guaranteed. Which statement is correct?",
    "choices": [
      "No member is personally liable for the loan",
      "The managing member is personally liable because she ran the business",
      "All three are personally liable because an LLC is taxed as a partnership",
      "The bank may reach the members only after exhausting the LLC's assets"
    ],
    "answer": 0,
    "explain": "Members of a limited liability company are not personally liable for the company's debts merely because they are members or because they manage it; only a personal guarantee, their own tort, or veil piercing reaches them. Federal tax classification as a partnership has no effect on state-law liability. An LLC is member-managed by default, but the operating agreement here names a manager, so the company is manager-managed and the other members do not share management rights."
  },
  {
    "id": "basis-1",
    "section": "basis",
    "topic": "Cost basis",
    "difficulty": "easy",
    "q": "A business buys a machine and also pays sales tax, freight-in, installation, and routine maintenance after it starts running. Which cost is NOT part of the machine's depreciable basis?",
    "choices": [
      "Maintenance after it is in service",
      "Sales tax paid on the purchase",
      "Freight to deliver the machine",
      "Charges to install the machine"
    ],
    "answer": 0,
    "explain": "Basis includes every cost of acquiring the machine and getting it ready for its intended use, so sales tax, freight and installation are capitalized and recovered through depreciation. Routine maintenance keeps the machine running after it is placed in service; it adds nothing to basis and is deducted as an ordinary business expense."
  },
  {
    "id": "basis-2",
    "section": "basis",
    "topic": "Gift basis",
    "difficulty": "medium",
    "q": "A father gifts stock worth less than his basis. The daughter later sells it for a price between the father's basis and the gift-date value. What does she recognize?",
    "choices": [
      "No gain or loss",
      "A loss, using the father's basis",
      "A gain, using the gift-date value",
      "A loss, using the gift-date value"
    ],
    "answer": 0,
    "explain": "When the gift-date value is below the donor's basis, the donee has a dual basis: the donor's basis for computing gain and the gift-date value for computing loss. A sale price between the two produces no gain under the first and no loss under the second, so nothing is recognized. Using the father's basis alone would create a disallowed loss."
  },
  {
    "id": "basis-3",
    "section": "basis",
    "topic": "Gift tax adjustment",
    "difficulty": "medium",
    "q": "A donor pays gift tax on a transfer of appreciated property. How does that affect the donee's basis?",
    "choices": [
      "The full amount of gift tax the donor paid is added to basis",
      "Basis increases by the gift tax attributable to net appreciation",
      "Basis is stepped up to fair market value at the date of the gift",
      "Gift tax paid by the donor has no effect on the donee's basis"
    ],
    "answer": 1,
    "explain": "The donee adds only the gift tax attributable to the net appreciation in the gifted property. When the property has not appreciated, no part of the gift tax increases basis."
  },
  {
    "id": "basis-4",
    "section": "basis",
    "topic": "Inherited property",
    "difficulty": "easy",
    "q": "An heir inherits stock the decedent bought two months before death. What is the heir's basis and holding period?",
    "choices": [
      "The decedent's cost, with a short-term holding period",
      "Fair market value at death, with a long-term holding period",
      "Fair market value at death, with a short-term holding period",
      "The lower of cost or fair market value at death"
    ],
    "answer": 1,
    "explain": "Inherited property takes a basis equal to fair market value at the date of death (or the alternate valuation date if elected) and is automatically treated as long-term regardless of how briefly anyone held it."
  },
  {
    "id": "basis-5",
    "section": "basis",
    "topic": "Conversion to business use",
    "difficulty": "medium",
    "q": "A taxpayer converts a personal residence into a rental. The building alone, excluding the land, has a $300,000 adjusted basis and a $260,000 FMV. What basis is used to depreciate it?",
    "choices": [
      "$300,000",
      "$260,000",
      "The average of the two",
      "Zero until the property is sold"
    ],
    "answer": 1,
    "explain": "On conversion from personal to business use, the depreciable basis is the lesser of adjusted basis or fair market value at the conversion date (Reg. 1.168(i)-4), so a decline in value during personal use never becomes a deduction. The land's share of the cost is carved out first: land is not depreciable at all, so only the building's $260,000 is recovered through depreciation."
  },
  {
    "id": "basis-6",
    "section": "basis",
    "topic": "Stock identification",
    "difficulty": "medium",
    "q": "An investor sells part of a holding acquired in several lots and cannot adequately identify which shares were sold. What method applies?",
    "choices": [
      "Average cost",
      "Last-in, first-out",
      "First-in, first-out",
      "Specific identification chosen at filing"
    ],
    "answer": 2,
    "explain": "Absent adequate identification at the time of sale, FIFO is mandatory for stock. Average cost is available only for mutual fund shares and shares acquired through a dividend reinvestment plan, not for ordinary lots of individual stock."
  },
  {
    "id": "basis-7",
    "section": "basis",
    "topic": "MACRS recovery periods",
    "difficulty": "easy",
    "q": "Which asset is assigned a 7-year MACRS recovery period?",
    "choices": [
      "A delivery van",
      "Office furniture",
      "Residential rental real estate",
      "Computer equipment"
    ],
    "answer": 1,
    "explain": "Office furniture and fixtures are 7-year property. Vehicles and computers are 5-year, residential rental real estate is 27.5-year, and nonresidential real property is 39-year."
  },
  {
    "id": "basis-8",
    "section": "basis",
    "topic": "Depreciation conventions",
    "difficulty": "medium",
    "q": "A calendar-year business places 55% of its total personal property in service during the fourth quarter. Which convention applies to that year's additions?",
    "choices": [
      "Half-year convention",
      "Mid-quarter convention",
      "Mid-month convention",
      "Full-year convention"
    ],
    "answer": 1,
    "explain": "When more than 40% of the year's personal property additions are placed in service in the fourth quarter, the mid-quarter convention applies to all of that year's personal property. Real property always uses the mid-month convention."
  },
  {
    "id": "basis-9",
    "section": "basis",
    "topic": "Section 179 limits",
    "difficulty": "medium",
    "q": "A profitable business elects section 179 on qualifying equipment, but the election exceeds its taxable income from the active trade or business. What happens to the excess?",
    "choices": [
      "It is lost permanently",
      "It is carried forward indefinitely to future years",
      "It converts to bonus depreciation in the same year",
      "It is deductible against portfolio income"
    ],
    "answer": 1,
    "explain": "Section 179 cannot create or increase a loss; the disallowed amount carries forward indefinitely subject to the same income limit. Bonus depreciation, by contrast, may push the business into a loss."
  },
  {
    "id": "basis-10",
    "section": "basis",
    "topic": "Section 179 eligibility",
    "difficulty": "medium",
    "q": "Which property does NOT qualify for the section 179 expensing election?",
    "choices": [
      "Used machinery purchased from an unrelated party",
      "Off-the-shelf computer software",
      "A residential rental apartment building",
      "A new roof on a nonresidential building"
    ],
    "answer": 2,
    "explain": "Section 179 covers tangible personal property, off-the-shelf software, qualified improvement property, and roofs, HVAC, fire protection, and security systems on nonresidential realty. The building itself never qualifies, and used property is fine if bought from an unrelated party."
  },
  {
    "id": "basis-11",
    "section": "basis",
    "topic": "Section 197 intangibles",
    "difficulty": "easy",
    "q": "A company buys a business and allocates $600,000 of the price to goodwill. How is that recovered?",
    "choices": [
      "Amortized straight line over 15 years",
      "Amortized over the seller's remaining useful life",
      "Deducted in full in the year of acquisition",
      "Not recovered until the business is sold"
    ],
    "answer": 0,
    "explain": "Purchased section 197 intangibles — goodwill, going concern value, covenants not to compete, customer lists — are amortized straight line over 15 years beginning with the month of acquisition, regardless of actual useful life."
  },
  {
    "id": "basis-12",
    "section": "basis",
    "topic": "Start-up costs",
    "difficulty": "medium",
    "q": "A new business incurs $53,000 of start-up costs before opening. What may it deduct immediately?",
    "choices": [
      "$5,000",
      "$2,000",
      "$53,000",
      "Nothing until the business is disposed of"
    ],
    "answer": 1,
    "explain": "The $5,000 immediate deduction is reduced dollar for dollar by start-up costs over $50,000, so $3,000 of the allowance is lost and only $2,000 is deducted currently. The remaining $51,000 is amortized over 180 months."
  },
  {
    "id": "basis-13",
    "section": "basis",
    "topic": "Organizational expenditures",
    "difficulty": "medium",
    "q": "Which cost qualifies as an organizational expenditure a corporation may elect to amortize?",
    "choices": [
      "Commissions paid to underwriters to sell stock",
      "Legal fees for drafting the corporate charter and bylaws",
      "Printing costs for stock certificates sold to investors",
      "Costs of transferring assets to the new corporation"
    ],
    "answer": 1,
    "explain": "Organizational expenditures are costs of creating the entity itself, such as incorporation fees and charter drafting. Costs of issuing and selling stock are syndication-type costs that reduce paid-in capital and are never deducted or amortized."
  },
  {
    "id": "basis-14",
    "section": "basis",
    "topic": "Depletion",
    "difficulty": "medium",
    "q": "How does percentage depletion differ from cost depletion?",
    "choices": [
      "Percentage depletion may be claimed even after basis is fully recovered",
      "Percentage depletion applies only to timber and other renewable resources",
      "Cost depletion is limited to a percentage of gross income",
      "Cost depletion may be claimed by lessees only"
    ],
    "answer": 0,
    "explain": "Cost depletion stops once basis reaches zero. Percentage depletion is a statutory percentage of gross income from the property, capped at a share of taxable income from it, and may continue past full basis recovery."
  },
  {
    "id": "basis-15",
    "section": "basis",
    "topic": "Holding period",
    "difficulty": "easy",
    "q": "An investor buys stock on March 15 of Year 1. On what date does a sale first produce long-term capital gain?",
    "choices": [
      "March 15 of Year 2",
      "March 16 of Year 2",
      "March 14 of Year 2",
      "January 1 of Year 2"
    ],
    "answer": 1,
    "explain": "The holding period begins the day after acquisition and must exceed one year. Counting from March 16 of Year 1, the one-year mark is reached on March 15 of Year 2, so a sale on March 16 is the first long-term one."
  },
  {
    "id": "basis-16",
    "section": "basis",
    "topic": "Luxury auto limits",
    "difficulty": "medium",
    "q": "A taxpayer buys a $70,000 passenger automobile used 100% for business. What governs the annual write-off?",
    "choices": [
      "Unlimited section 179 expensing because business use exceeds 50%",
      "Statutory depreciation caps that limit the annual deduction regardless of cost",
      "Straight-line recovery over five years under ADS",
      "Bonus depreciation of the full cost in year one, since 100% bonus is now permanent"
    ],
    "answer": 1,
    "explain": "Passenger automobiles are listed property subject to annual dollar caps on depreciation including section 179 and bonus. Business use of 50% or less also forces straight-line ADS recovery and can trigger recapture."
  },
  {
    "id": "basis-17",
    "section": "basis",
    "topic": "Building expenditures",
    "difficulty": "medium",
    "q": "A landlord spends $60,000 to replace the entire roof of a rental building and $4,000 to patch leaks and repaint a hallway. How are the costs treated?",
    "choices": [
      "Both are deducted as repairs because neither enlarges the building or changes its use",
      "The roof is capitalized and depreciated; the patching and painting are deducted",
      "Both are capitalized because they relate to a depreciable building",
      "The roof is deducted as a repair; the patching and painting are capitalized"
    ],
    "answer": 1,
    "explain": "Under the tangible property regulations (Reg. 1.263(a)-3), an amount paid for a betterment, a restoration, or an adaptation of a unit of property to a new use is capitalized into basis and depreciated. Replacing an entire roof restores a major component of the building structure, so it is capitalized. Patching leaks and repainting keep the building in its ordinary operating condition and are deductible repairs; enlargement is only one of several triggers for capitalization."
  },
  {
    "id": "basis-18",
    "section": "basis",
    "topic": "Bonus depreciation eligibility",
    "difficulty": "medium",
    "q": "In 2026 a calendar-year business buys a used heavy delivery truck from an unrelated dealer and places it in service. It makes no section 179 election. What first-year cost recovery applies?",
    "choices": [
      "Regular MACRS only, because bonus depreciation requires new property",
      "100% bonus depreciation, because the truck is new to the taxpayer",
      "Regular MACRS only, because bonus depreciation must be elected",
      "20% bonus depreciation under the old phase-down schedule for 2026"
    ],
    "answer": 1,
    "explain": "The OBBBA made 100% bonus depreciation under section 168(k) permanent for qualified property acquired and placed in service after January 19, 2025, ending the TCJA phase-down that would have allowed only 20% in 2026. Used property qualifies if the taxpayer had not used it before and bought it from an unrelated party. Bonus depreciation applies automatically unless the taxpayer elects out; when section 179 is also claimed, 179 is applied first, then bonus, then regular MACRS on any remaining basis."
  },
  {
    "id": "disposition-1",
    "section": "disposition",
    "topic": "Amount realized",
    "difficulty": "medium",
    "q": "A taxpayer sells land for $50,000 cash, and the buyer also assumes the $150,000 mortgage on it. What is the taxpayer's amount realized?",
    "choices": [
      "$200,000",
      "$50,000",
      "$150,000",
      "$100,000"
    ],
    "answer": 0,
    "explain": "Amount realized is everything the seller receives: cash, property, and any liability the buyer assumes or takes subject to. Debt relief counts like cash because the seller no longer owes it, so the amount realized is $50,000 + $150,000 = $200,000. Counting only the cash understates the gain by the whole mortgage."
  },
  {
    "id": "disposition-6",
    "section": "disposition",
    "topic": "Capital loss limits",
    "difficulty": "easy",
    "q": "An individual has $22,000 of capital losses and $6,000 of capital gains for the year. How much loss is deductible against other income?",
    "choices": [
      "$3,000",
      "$6,000",
      "$16,000",
      "$22,000"
    ],
    "answer": 0,
    "explain": "Losses first offset the $6,000 of gains, and the remaining $16,000 net loss is deductible against ordinary income only up to $3,000 a year. The $13,000 balance carries forward indefinitely, keeping its character."
  },
  {
    "id": "disposition-7",
    "section": "disposition",
    "topic": "Corporate capital losses",
    "difficulty": "medium",
    "q": "A C corporation has a $50,000 net capital loss. How is it treated?",
    "choices": [
      "Deductible up to $3,000 a year against ordinary income",
      "Carried back three years and forward five, against capital gains only",
      "Carried forward indefinitely against any type of income",
      "Deductible in full against operating income in the current year"
    ],
    "answer": 1,
    "explain": "Corporations may deduct capital losses only against capital gains. The excess carries back three years and forward five, and it always converts to short-term in the carryover years."
  },
  {
    "id": "disposition-8",
    "section": "disposition",
    "topic": "Wash sales",
    "difficulty": "medium",
    "q": "An investor sells stock at a $9,000 loss and buys identical shares 20 days later. What is the result?",
    "choices": [
      "The loss is deductible because the repurchase came after the sale",
      "The loss is permanently disallowed",
      "The loss is disallowed and added to the basis of the new shares",
      "Only half the loss is disallowed"
    ],
    "answer": 2,
    "explain": "A wash sale occurs when substantially identical securities are acquired within 30 days before or after the sale. The loss is deferred, not lost — it is added to the replacement shares' basis and their holding period tacks."
  },
  {
    "id": "disposition-13",
    "section": "disposition",
    "topic": "Sale of a residence",
    "difficulty": "easy",
    "q": "A married couple filing jointly sells the home they owned and lived in for the last four years, realizing a $560,000 gain. How much is taxable?",
    "choices": [
      "$0",
      "$60,000",
      "$310,000",
      "$560,000"
    ],
    "answer": 1,
    "explain": "Section 121 excludes up to $500,000 of gain for joint filers who owned and used the home as a principal residence for two of the last five years. The $60,000 excess is long-term capital gain."
  },
  {
    "id": "disposition-16",
    "section": "disposition",
    "topic": "Nonbusiness bad debts",
    "difficulty": "medium",
    "q": "An individual lends $10,000 to a friend for personal reasons and the debt becomes totally worthless. How is the loss treated?",
    "choices": [
      "Ordinary loss in full",
      "Short-term capital loss",
      "Long-term capital loss if the loan was outstanding over a year",
      "Not deductible at all"
    ],
    "answer": 1,
    "explain": "A nonbusiness bad debt is always a short-term capital loss, deductible only when totally worthless — partial worthlessness gets nothing. Business bad debts, by contrast, produce an ordinary deduction and may be partially written off."
  },
  {
    "id": "disposition-17",
    "section": "disposition",
    "topic": "Digital assets",
    "difficulty": "medium",
    "q": "A graphic designer receives cryptocurrency worth $60,000 as payment for services and sells it for $90,000 after holding it more than a year. What are the tax results?",
    "choices": [
      "$90,000 of ordinary income, because cryptocurrency is treated as foreign currency",
      "$60,000 ordinary income on receipt and $30,000 long-term capital gain on sale",
      "$90,000 long-term capital gain on sale and nothing on receipt",
      "$60,000 ordinary income on receipt and $30,000 ordinary income on sale"
    ],
    "answer": 1,
    "explain": "The IRS treats digital assets such as cryptocurrency, stablecoins, and NFTs as property, not currency. Property received as payment for services is ordinary compensation income at its fair market value when received, and that value becomes the basis. A later sale is a disposition of a capital asset, so the $30,000 of appreciation is capital gain, long-term because the holding period exceeded one year."
  },
  {
    "id": "disposition-18",
    "section": "disposition",
    "topic": "Netting gains and losses",
    "difficulty": "medium",
    "q": "An individual has a $9,000 short-term capital loss and a $4,000 long-term capital gain, and no other capital transactions. What is the result for the year?",
    "choices": [
      "$5,000 deducted against ordinary income this year",
      "$3,000 deducted against ordinary income; $2,000 carries forward as a short-term loss",
      "$3,000 deducted against ordinary income; $2,000 carries forward as a long-term loss",
      "$4,000 of long-term gain taxed at preferential rates and the full loss carried forward"
    ],
    "answer": 1,
    "explain": "Short-term and long-term gains and losses are netted separately, then against each other. The $9,000 short-term loss absorbs the $4,000 long-term gain, leaving a $5,000 net short-term capital loss. Section 1211(b) lets an individual deduct up to $3,000 of net capital loss against ordinary income, and section 1212(b) carries the remaining $2,000 forward indefinitely, keeping its short-term character."
  },
  {
    "id": "income-1",
    "section": "income",
    "topic": "Constructive receipt",
    "difficulty": "medium",
    "q": "A cash-basis consultant receives a client check on December 28 but deliberately leaves it in a drawer until January 3. When is the income reported?",
    "choices": [
      "In the year of deposit",
      "In the year the check was received",
      "Ratably over both years",
      "When the check clears the client's bank"
    ],
    "answer": 1,
    "explain": "Under constructive receipt, income is taxed when it is made available without substantial restriction. Choosing not to deposit an available check does not defer the income."
  },
  {
    "id": "income-2",
    "section": "income",
    "topic": "Scholarships",
    "difficulty": "easy",
    "q": "A degree candidate's scholarship pays $22,000 toward tuition and required fees and $8,000 toward room and board. How much is taxable?",
    "choices": [
      "$8,000",
      "$0",
      "$22,000",
      "$30,000"
    ],
    "answer": 0,
    "explain": "A degree candidate excludes a qualified scholarship to the extent it pays tuition, required fees, books and supplies, so the $22,000 is tax-free. Amounts for room and board, travel, or required services are not qualified expenses, so the $8,000 is included in gross income. Being a degree candidate does not make the whole award excludable."
  },
  {
    "id": "income-3",
    "section": "income",
    "topic": "Life insurance proceeds",
    "difficulty": "medium",
    "q": "A beneficiary elects to receive $500,000 of life insurance proceeds in installments over 10 years, collecting $58,000 a year. What is taxable annually?",
    "choices": [
      "Nothing — death benefits are excluded",
      "$58,000",
      "$8,000 of interest",
      "$50,000 of principal"
    ],
    "answer": 2,
    "explain": "The death benefit itself is excluded, so $50,000 a year is a tax-free return of proceeds. The $8,000 excess represents interest earned during the payout period and is taxable."
  },
  {
    "id": "income-4",
    "section": "income",
    "topic": "State tax refunds",
    "difficulty": "medium",
    "q": "A taxpayer who claimed the standard deduction last year receives a $900 state income tax refund. How is it treated?",
    "choices": [
      "Fully taxable as other income",
      "Excluded under the tax benefit rule",
      "Taxable only to the extent it exceeds $600",
      "Taxable but eligible for capital gain rates"
    ],
    "answer": 1,
    "explain": "A state refund is income only to the extent the prior deduction produced a tax benefit. Someone who took the standard deduction never deducted state taxes, so the refund is excluded."
  },
  {
    "id": "income-5",
    "section": "income",
    "topic": "Social Security benefits",
    "difficulty": "medium",
    "q": "What determines how much of a taxpayer's Social Security benefits are included in gross income?",
    "choices": [
      "The taxpayer's provisional income for the year",
      "The taxpayer's marginal income tax bracket for the year",
      "Whether the taxpayer has reached full retirement age",
      "The number of years the taxpayer paid into the FICA system"
    ],
    "answer": 0,
    "explain": "Provisional income equals AGI plus tax-exempt interest plus half the benefits. As it crosses two thresholds, up to 50% and then up to 85% of the benefits become taxable."
  },
  {
    "id": "income-6",
    "section": "income",
    "topic": "Alimony",
    "difficulty": "easy",
    "q": "A couple divorced in 2022. The decree requires monthly alimony. How is it treated?",
    "choices": [
      "Deductible by the payer and taxable to the recipient",
      "Neither deductible by the payer nor taxable to the recipient",
      "Deductible by the payer but excluded by the recipient",
      "Taxable to the recipient but not deductible by the payer"
    ],
    "answer": 1,
    "explain": "For divorce or separation instruments executed after 2018, alimony is neither deductible nor includible. Pre-2019 agreements keep the old deduct-and-include treatment unless modified to adopt the new rule."
  },
  {
    "id": "income-7",
    "section": "income",
    "topic": "Group-term life insurance",
    "difficulty": "medium",
    "q": "An employer provides $150,000 of group-term life coverage to an employee at no cost. What is the tax consequence to the employee?",
    "choices": [
      "No income, because the employer paid all of the premiums",
      "The cost of coverage above $50,000, valued under IRS tables",
      "The full premium the employer paid for the whole policy",
      "Nothing now; only the death benefit is taxable when paid"
    ],
    "answer": 1,
    "explain": "Employer-paid group-term life is excluded up to $50,000 of coverage. The cost of the excess $100,000, valued using the uniform premium table rather than actual premiums, is wage income subject to FICA."
  },
  {
    "id": "income-8",
    "section": "income",
    "topic": "Fringe benefits",
    "difficulty": "medium",
    "q": "An airline lets employees fly standby free on flights with unsold seats. How is that benefit treated?",
    "choices": [
      "Taxable at the fair market value of the ticket",
      "Excluded as a no-additional-cost service",
      "Excluded only up to a statutory dollar limit",
      "Taxable at the airline's marginal cost"
    ],
    "answer": 1,
    "explain": "A no-additional-cost service is excluded when the employer incurs no substantial extra cost and the service is offered in the line of business where the employee works. Qualified discounts, de minimis benefits, and working condition fringes are separate exclusions."
  },
  {
    "id": "income-9",
    "section": "income",
    "topic": "Cancellation of debt",
    "difficulty": "medium",
    "q": "A taxpayer who is insolvent by $30,000 has $50,000 of debt forgiven outside bankruptcy. How much cancellation of debt income is taxable?",
    "choices": [
      "$20,000",
      "$0",
      "$30,000",
      "$50,000"
    ],
    "answer": 0,
    "explain": "Section 108 excludes cancellation of debt income only to the extent the taxpayer is insolvent immediately before the discharge. Insolvent by $30,000, the taxpayer excludes $30,000 of the $50,000 discharged and reports $20,000. Excluding the whole amount requires a Title 11 bankruptcy case or another specific exclusion, such as qualified farm debt, and excluded amounts reduce tax attributes such as NOLs and basis."
  },
  {
    "id": "income-10",
    "section": "income",
    "topic": "Short-term rentals",
    "difficulty": "easy",
    "q": "A homeowner rents out their principal residence for 12 days during a major event and receives $9,000. What is reported?",
    "choices": [
      "$9,000 of rental income, reduced by allocable expenses",
      "Nothing — the rental income is excluded",
      "$9,000 of ordinary income with no deductions allowed",
      "Half the income, with the other half treated as personal use"
    ],
    "answer": 1,
    "explain": "A residence rented for fewer than 15 days during the year is treated as a personal residence: the rental income is excluded entirely and no rental expenses are deductible."
  },
  {
    "id": "income-11",
    "section": "income",
    "topic": "Annuities",
    "difficulty": "medium",
    "q": "A taxpayer paid $120,000 for an annuity expected to pay $600,000 over their lifetime. What portion of each payment is excluded?",
    "choices": [
      "The full payment until $120,000 is recovered",
      "20% of each payment",
      "80% of each payment",
      "Nothing — annuity payments are fully taxable"
    ],
    "answer": 1,
    "explain": "The exclusion ratio is investment in the contract divided by expected return, here $120,000 over $600,000, or 20%. Once the full investment is recovered, later payments are fully taxable."
  },
  {
    "id": "income-12",
    "section": "income",
    "topic": "Damages",
    "difficulty": "medium",
    "q": "A plaintiff's physical-injury settlement includes damages for the injury itself, damages for emotional distress caused by it, and punitive damages. Which portion is included in gross income?",
    "choices": [
      "Only the punitive damages",
      "Only the emotional distress damages",
      "The emotional distress and punitive damages",
      "None of it; physical injury recoveries are excluded"
    ],
    "answer": 0,
    "explain": "Section 104(a)(2) excludes damages received on account of physical injury or sickness, and emotional distress damages ride along when the distress flows from that physical injury. Punitive damages punish the defendant rather than compensate a loss, so they are taxable; the only exception, section 104(c), is a wrongful-death action under a state law that allows nothing but punitive damages. Emotional distress damages are taxable only when no physical injury underlies them."
  },
  {
    "id": "income-13",
    "section": "income",
    "topic": "Qualified dividends",
    "difficulty": "medium",
    "q": "What makes a dividend qualified for preferential capital gain rates?",
    "choices": [
      "It is paid by any corporation whose stock the shareholder held over one year",
      "The payer is a domestic or qualified foreign corporation and the holding period is met",
      "It is automatically reinvested in additional shares rather than paid in cash",
      "It exceeds the corporation's current and accumulated earnings and profits"
    ],
    "answer": 1,
    "explain": "Qualified dividends come from domestic or qualified foreign corporations and require holding the stock more than 60 days during a 121-day window around the ex-dividend date. Distributions exceeding earnings and profits are a return of capital, not a dividend at all."
  },
  {
    "id": "income-14",
    "section": "income",
    "topic": "Municipal bond interest",
    "difficulty": "easy",
    "q": "A taxpayer receives $4,000 of interest on state general obligation bonds. What is the federal treatment?",
    "choices": [
      "Fully taxable as ordinary interest income on the federal return",
      "Excluded from gross income but counted in Social Security provisional income",
      "Taxed at the preferential rates that apply to qualified dividends",
      "Excluded from gross income and from the computation of taxable Social Security benefits"
    ],
    "answer": 1,
    "explain": "Interest on state and local obligations is excluded from gross income, but it is added back in figuring provisional income for Social Security taxation and can be an AMT preference for certain private activity bonds."
  },
  {
    "id": "income-15",
    "section": "income",
    "topic": "Unemployment and jury pay",
    "difficulty": "easy",
    "q": "How are unemployment compensation benefits treated for federal income tax purposes?",
    "choices": [
      "Fully excluded as a government transfer payment",
      "Fully includible in gross income",
      "Half includible, like Social Security",
      "Includible only if the taxpayer itemizes"
    ],
    "answer": 1,
    "explain": "Unemployment compensation is fully taxable. Jury duty pay is likewise income, though an employee who turns it over to their employer may deduct that amount in arriving at AGI."
  },
  {
    "id": "income-16",
    "section": "income",
    "topic": "Prizes and awards",
    "difficulty": "easy",
    "q": "A taxpayer wins a $12,000 car in a supermarket raffle. What is the tax consequence?",
    "choices": [
      "No income until the car is sold",
      "$12,000 of ordinary income in the year received",
      "Capital gain when the car is later sold, with a zero basis",
      "Income only to the extent the car is used for business"
    ],
    "answer": 1,
    "explain": "Prizes and awards are included in gross income at fair market value when received, and that value also becomes the winner's basis in the property."
  },
  {
    "id": "income-17",
    "section": "income",
    "topic": "Schedule K-1 items",
    "difficulty": "medium",
    "q": "A partner who itemizes receives a Schedule K-1 showing ordinary business income, a long-term capital gain, and a charitable contribution. The partnership distributed nothing. How does the partner report these on Form 1040?",
    "choices": [
      "Nothing this year, because no cash was distributed to the partner",
      "Income on Schedule E, the gain on Schedule D, and the contribution on Schedule A, all this year",
      "All three combined as one net amount of ordinary income on Schedule E",
      "Income and gain on Schedule E this year; the contribution is deductible only by the partnership"
    ],
    "answer": 1,
    "explain": "A partner (like an S corporation shareholder) is taxed on their distributive share in the year the entity earns it, whether or not anything is distributed; distributions are generally tax-free returns of basis. Section 702 requires separately stated items to keep their character in the partner's hands, so ordinary business income goes to Schedule E, the long-term capital gain to Schedule D, and the charitable contribution to Schedule A, where it is subject to the partner's own AGI limits. The partnership itself deducts nothing for the contribution."
  },
  {
    "id": "deduct-1",
    "section": "deduct",
    "topic": "Adjustments to income",
    "difficulty": "easy",
    "q": "Which item is deducted in arriving at adjusted gross income rather than as an itemized deduction?",
    "choices": [
      "Mortgage interest on a principal residence",
      "Health savings account contributions",
      "Unreimbursed medical expenses",
      "Charitable contributions"
    ],
    "answer": 1,
    "explain": "HSA contributions are an above-the-line adjustment, along with the deductible part of self-employment tax, self-employed health insurance, IRA contributions, student loan interest, and educator expenses. The other three are itemized deductions."
  },
  {
    "id": "deduct-2",
    "section": "deduct",
    "topic": "IRA deductibility",
    "difficulty": "medium",
    "q": "When is a traditional IRA contribution NOT fully deductible?",
    "choices": [
      "Whenever the taxpayer also contributes to a Roth IRA that year",
      "When the taxpayer is covered by an employer plan and MAGI exceeds the phase-out",
      "When the taxpayer's only earnings come from self-employment, as IRAs require wage income",
      "When the contribution is made after the close of the tax year"
    ],
    "answer": 1,
    "explain": "Anyone with earned income may contribute, but the deduction phases out only for taxpayers (or their spouses) covered by an employer plan whose MAGI exceeds the applicable range. Contributions made up to the unextended filing deadline still count for the prior year."
  },
  {
    "id": "deduct-3",
    "section": "deduct",
    "topic": "Roth IRAs",
    "difficulty": "medium",
    "q": "What makes a Roth IRA distribution qualified and therefore entirely tax free?",
    "choices": [
      "Five years have passed and the owner is at least 59 and a half",
      "The owner has reached age 65 and stopped working full time",
      "The distribution does not exceed the contributions made to date",
      "The owner rolls the amount into another Roth IRA within 60 days"
    ],
    "answer": 0,
    "explain": "A qualified distribution requires a five-year holding period plus one of the following: age 59 and a half, death, disability, or a first-time home purchase up to $10,000. Contributions may always be withdrawn tax free, but that is a separate ordering rule."
  },
  {
    "id": "deduct-4",
    "section": "deduct",
    "topic": "Student loan interest",
    "difficulty": "easy",
    "q": "What is the maximum annual deduction for student loan interest, before any phase-out?",
    "choices": [
      "$1,000",
      "$2,500",
      "$4,000",
      "There is no cap"
    ],
    "answer": 1,
    "explain": "The deduction is capped at $2,500 per return, taken above the line, and phases out over a MAGI range. It is unavailable to a taxpayer claimed as a dependent by someone else."
  },
  {
    "id": "deduct-5",
    "section": "deduct",
    "topic": "Medical expenses",
    "difficulty": "medium",
    "q": "A taxpayer with $80,000 of AGI pays $9,000 of unreimbursed medical expenses. What is deductible as an itemized deduction?",
    "choices": [
      "$9,000",
      "$3,000",
      "$1,000",
      "$0"
    ],
    "answer": 1,
    "explain": "Medical expenses are deductible only to the extent they exceed 7.5% of AGI. The floor is $6,000, leaving $3,000 deductible."
  },
  {
    "id": "deduct-6",
    "section": "deduct",
    "topic": "Qualifying medical costs",
    "difficulty": "medium",
    "q": "Which expenditure qualifies as a deductible medical expense?",
    "choices": [
      "Nonprescription vitamins a physician recommended for general health",
      "A pool built on a doctor's orders, to the extent cost exceeds the value added",
      "Cosmetic surgery undertaken solely to improve the patient's appearance",
      "Health club dues paid to maintain the taxpayer's general fitness"
    ],
    "answer": 1,
    "explain": "A capital improvement made primarily for medical care is deductible to the extent its cost exceeds the resulting increase in the property's value. Over-the-counter items, purely cosmetic procedures, and general health expenditures do not qualify."
  },
  {
    "id": "deduct-7",
    "section": "deduct",
    "topic": "State and local taxes",
    "difficulty": "medium",
    "q": "An itemizing taxpayer paid state income tax and state sales tax during the year. How are they deducted?",
    "choices": [
      "Both the income tax and the sales tax are deductible in full",
      "The taxpayer elects either income tax or sales tax, but not both",
      "Only state income tax is deductible; sales tax never qualifies",
      "Both are deductible, but each is separately limited to the SALT cap"
    ],
    "answer": 1,
    "explain": "The taxpayer elects between state and local income taxes or general sales taxes, then adds real and personal property taxes, with the total subject to the annual SALT cap. Sales tax often wins in states with no income tax."
  },
  {
    "id": "deduct-8",
    "section": "deduct",
    "topic": "Home mortgage interest",
    "difficulty": "medium",
    "q": "A homeowner takes a home equity loan and uses the proceeds to pay off credit cards. Is the interest deductible?",
    "choices": [
      "Yes, interest on home equity debt is always fully deductible",
      "No, the proceeds were not used to buy, build, or improve the home",
      "No, home equity interest has been nondeductible for every use since 2018",
      "Yes, but only as investment interest against investment income"
    ],
    "answer": 1,
    "explain": "Home equity interest is deductible only where the debt is used to buy, build, or substantially improve the residence securing it, and it counts against the acquisition indebtedness limit. Personal use of the proceeds makes the interest nondeductible."
  },
  {
    "id": "deduct-9",
    "section": "deduct",
    "topic": "Charitable contributions of property",
    "difficulty": "medium",
    "q": "A taxpayer donates appreciated stock held three years to a public charity. What is the deduction and the AGI limit?",
    "choices": [
      "Basis, limited to 50% of AGI",
      "Fair market value, limited to 30% of AGI",
      "Fair market value, limited to 60% of AGI",
      "The average of basis and fair market value, limited to 20% of AGI"
    ],
    "answer": 1,
    "explain": "Long-term capital gain property donated to a public charity is deducted at fair market value subject to a 30% of AGI ceiling. Electing to deduct basis instead raises the ceiling to 50%, and excess contributions carry forward five years. For tax years after 2025, an itemizer's total contributions are also reduced by a floor of 0.5% of AGI before the ceilings are applied."
  },
  {
    "id": "deduct-10",
    "section": "deduct",
    "topic": "Charitable substantiation",
    "difficulty": "medium",
    "q": "A taxpayer donates a used grand piano valued at $9,000 to a charity. What substantiation is required?",
    "choices": [
      "A canceled check alone",
      "A contemporaneous written acknowledgment only",
      "A written acknowledgment, Form 8283, and a qualified appraisal",
      "Nothing beyond the taxpayer's own written record of the gift"
    ],
    "answer": 2,
    "explain": "Noncash gifts over $500 require Form 8283, and those over $5,000 also need a qualified appraisal. Any single contribution of $250 or more, cash or property, needs a contemporaneous written acknowledgment from the charity."
  },
  {
    "id": "deduct-11",
    "section": "deduct",
    "topic": "Casualty losses",
    "difficulty": "medium",
    "q": "A taxpayer's uninsured personal auto is destroyed in a fire in their own garage. What is deductible?",
    "choices": [
      "The full adjusted basis of the auto",
      "The loss reduced by $100 and 10% of AGI, because a fire is a sudden and unexpected event",
      "Nothing — personal casualty losses are limited to federally or state-declared disasters",
      "The lesser of basis or decline in fair market value, with no floors"
    ],
    "answer": 2,
    "explain": "Personal casualty losses are deductible only if attributable to a federally declared disaster — expanded for tax years after 2025 to qualifying state-declared disasters — apart from an offset against personal casualty gains. Qualifying losses are then reduced by $100 per event and 10% of AGI."
  },
  {
    "id": "deduct-12",
    "section": "deduct",
    "topic": "Investment interest",
    "difficulty": "medium",
    "q": "A taxpayer pays $14,000 of margin interest and has $9,000 of interest and nonqualified dividend income and no other investment income. What is deductible this year?",
    "choices": [
      "$14,000",
      "$9,000",
      "$3,000",
      "$0"
    ],
    "answer": 1,
    "explain": "Investment interest expense is deductible only to the extent of net investment income, so $9,000 is allowed. The $5,000 excess carries forward indefinitely; qualified dividends and long-term gains count as investment income only if the taxpayer elects out of preferential rates on them."
  },
  {
    "id": "deduct-13",
    "section": "deduct",
    "topic": "Business meals and entertainment",
    "difficulty": "easy",
    "q": "A business owner takes a client to dinner and then to a basketball game. How much of each cost is deductible?",
    "choices": [
      "100% of the meal and 50% of the game tickets",
      "50% of the meal and none of the game tickets",
      "50% of both",
      "100% of both"
    ],
    "answer": 1,
    "explain": "Business meals with a client are generally 50% deductible when not lavish and the taxpayer is present. Entertainment expenses, including sporting event tickets, are fully disallowed."
  },
  {
    "id": "deduct-14",
    "section": "deduct",
    "topic": "Section 199A basics",
    "difficulty": "medium",
    "q": "What is the general qualified business income deduction before any limitations?",
    "choices": [
      "20% of qualified business income from a pass-through trade or business",
      "20% of the taxpayer's taxable income including capital gains",
      "50% of W-2 wages paid by the business",
      "20% of gross receipts of the business"
    ],
    "answer": 0,
    "explain": "The deduction is 20% of qualified business income from a domestic pass-through, taken below the line but available whether or not the taxpayer itemizes. It is also capped at 20% of taxable income less net capital gain."
  },
  {
    "id": "deduct-15",
    "section": "deduct",
    "topic": "Section 199A limitations",
    "difficulty": "medium",
    "q": "For a taxpayer above the taxable income threshold, the QBI deduction for a non-service business is limited to the greater of",
    "choices": [
      "50% of W-2 wages, or 25% of wages plus 2.5% of qualified property basis",
      "50% of qualified business income, or the marginal rate times QBI",
      "25% of W-2 wages paid, or 10% of the business's gross receipts",
      "The owner's share of entity debt, or their basis in the entity"
    ],
    "answer": 0,
    "explain": "Above the threshold the wage and capital limitation applies: the greater of 50% of allocable W-2 wages, or 25% of wages plus 2.5% of the unadjusted basis of qualified property. That figure is a ceiling, not the deduction: the business's deduction is the lesser of 20% of its QBI and this limit, and the total is then capped at 20% of taxable income over net capital gain. Specified service businesses lose the deduction entirely once fully phased out."
  },
  {
    "id": "deduct-16",
    "section": "deduct",
    "topic": "Specified service businesses",
    "difficulty": "medium",
    "q": "Which business is a specified service trade or business for section 199A purposes?",
    "choices": [
      "An architecture firm",
      "An engineering firm",
      "A law firm",
      "A manufacturer of medical devices"
    ],
    "answer": 2,
    "explain": "Law, accounting, health, consulting, athletics, financial services, and businesses whose principal asset is the reputation or skill of their owners are SSTBs. Architecture and engineering were specifically carved out of that list."
  },
  {
    "id": "deduct-17",
    "section": "deduct",
    "topic": "Tips and overtime pay",
    "difficulty": "medium",
    "q": "A single bartender who does not itemize earns reported tips and FLSA overtime in 2026. Which statement about the OBBBA deductions for qualified tips and overtime is correct?",
    "choices": [
      "She cannot claim either because the deductions are only for itemizers",
      "She may claim both without itemizing, but the amounts remain subject to FICA",
      "The tips and overtime are excluded from wages, so no FICA is withheld on them",
      "Her entire overtime pay, not just the premium portion, is deductible"
    ],
    "answer": 1,
    "explain": "For 2025 through 2028, sections 224 and 225 allow deductions for qualified tips received in a customarily tipped occupation and reported to the employer, and for the overtime premium that the Fair Labor Standards Act requires (the half in time-and-a-half). Both are deductions from AGI in computing taxable income, allowed whether or not the taxpayer itemizes, phased out by MAGI, and require a Social Security number and a joint return if married. They are not exclusions, so the tips and overtime stay in wages and remain subject to FICA and withholding."
  },
  {
    "id": "credits-1",
    "section": "credits",
    "topic": "Head of household",
    "difficulty": "medium",
    "q": "Which taxpayer qualifies as head of household?",
    "choices": [
      "A single taxpayer who supports a dependent parent living in the parent's own home",
      "A married taxpayer whose spouse moved out of the home in November",
      "A single taxpayer paying 40% of the cost of a home shared with a qualifying child",
      "A widow whose spouse died three years ago and who has no dependents"
    ],
    "answer": 0,
    "explain": "A dependent parent is the one exception to the live-with requirement — the taxpayer need only pay more than half the cost of the parent's household. All other qualifying persons must live with the taxpayer more than half the year, and the taxpayer must furnish over half the household cost."
  },
  {
    "id": "credits-2",
    "section": "credits",
    "topic": "Qualifying child",
    "difficulty": "medium",
    "q": "Which test is NOT part of the qualifying child definition?",
    "choices": [
      "Relationship",
      "Age",
      "Gross income",
      "Residency"
    ],
    "answer": 2,
    "explain": "A qualifying child must satisfy relationship, age, residency, support, and joint return tests. The gross income test belongs to the qualifying relative rules — a qualifying child may earn any amount."
  },
  {
    "id": "credits-3",
    "section": "credits",
    "topic": "Unrelated household members",
    "difficulty": "medium",
    "q": "A taxpayer supports an unrelated friend who lived in their home all year and earned $3,000. Can the friend be claimed as a dependent?",
    "choices": [
      "No, because the friend is not related to the taxpayer by blood or marriage",
      "Yes, as a qualifying relative if the gross income and support tests are met",
      "No, because the friend had earned income during the year",
      "Yes, but only if the friend files no return of their own"
    ],
    "answer": 1,
    "explain": "An unrelated person who lives in the taxpayer's household for the entire year can be a qualifying relative. The friend must also have gross income below the exemption threshold and receive over half their support from the taxpayer."
  },
  {
    "id": "credits-4",
    "section": "credits",
    "topic": "Child tax credit",
    "difficulty": "medium",
    "q": "Which child qualifies the taxpayer for the child tax credit rather than the credit for other dependents?",
    "choices": [
      "A 19-year-old full-time college student living at home",
      "A 16-year-old son with a valid Social Security number",
      "A 22-year-old disabled daughter",
      "A dependent parent living with the taxpayer"
    ],
    "answer": 1,
    "explain": "The child tax credit requires a qualifying child under age 17 at year end with a valid SSN. Older children and other dependents get the smaller, nonrefundable credit for other dependents."
  },
  {
    "id": "credits-5",
    "section": "credits",
    "topic": "Dependent care credit",
    "difficulty": "medium",
    "q": "A married couple pays $9,000 for day care. One spouse works full time; the other has no earned income and is not a student or disabled. What credit is allowed?",
    "choices": [
      "A credit computed on the full $9,000 of day care expenses",
      "A credit computed on $3,000, the expense limit for one qualifying person",
      "No credit, because qualifying expenses are limited to the lesser earned income",
      "A credit computed on half the expenses, one spouse's share"
    ],
    "answer": 2,
    "explain": "Qualifying expenses cannot exceed the earned income of the lower-earning spouse. With one spouse having no earned income and no deemed income from student or disabled status, the limit is zero."
  },
  {
    "id": "credits-6",
    "section": "credits",
    "topic": "American opportunity credit",
    "difficulty": "medium",
    "q": "Which statement about the American opportunity tax credit is correct?",
    "choices": [
      "It is claimed once per return regardless of the number of students",
      "It is available for an unlimited number of years of postsecondary study",
      "40% of the credit is refundable and it is limited to four tax years per student",
      "It covers room and board as well as tuition"
    ],
    "answer": 2,
    "explain": "The AOTC is per student, capped at four tax years, requires at least half-time enrollment, and is 40% refundable. The lifetime learning credit is per return, nonrefundable, and has no year limit."
  },
  {
    "id": "credits-7",
    "section": "credits",
    "topic": "Earned income credit",
    "difficulty": "medium",
    "q": "Which fact disqualifies a taxpayer from the earned income credit?",
    "choices": [
      "Having no qualifying children",
      "Filing as head of household",
      "Having investment income above the statutory limit",
      "Being self-employed rather than an employee"
    ],
    "answer": 2,
    "explain": "Investment income over the annual limit is an absolute bar. Childless workers within the age range can qualify, head of household is a permitted status, and self-employment earnings count as earned income."
  },
  {
    "id": "credits-8",
    "section": "credits",
    "topic": "Adoption credit",
    "difficulty": "medium",
    "q": "A taxpayer's adoption credit exceeds their tax liability for the year. How is the excess treated?",
    "choices": [
      "Refunded up to a capped amount; the rest carries forward five years",
      "Refunded in full in the year the adoption is finalized",
      "Carried forward in full for up to five years, none refunded",
      "Lost in full, because the credit is nonrefundable"
    ],
    "answer": 0,
    "explain": "For tax years after 2024 the adoption credit is refundable up to a cap ($5,000, indexed). Any excess beyond the refundable portion stays nonrefundable and carries forward for up to five years; carried-forward amounts never become refundable. Qualified expenses for a special needs adoption are treated as paid in full regardless of actual outlay."
  },
  {
    "id": "credits-9",
    "section": "credits",
    "topic": "Foreign taxes",
    "difficulty": "medium",
    "q": "A taxpayer pays foreign income tax on foreign-source income. What choice do they have?",
    "choices": [
      "Claim a credit or an itemized deduction, but not both in the same year",
      "Claim both a credit and a deduction for the same taxes",
      "Claim a credit only if the foreign country has a treaty with the United States",
      "Exclude the foreign income entirely"
    ],
    "answer": 0,
    "explain": "The taxpayer elects annually between a foreign tax credit and an itemized deduction. The credit is usually better and is limited to the U.S. tax on foreign-source taxable income, with excess carried back one year and forward ten."
  },
  {
    "id": "credits-10",
    "section": "credits",
    "topic": "Credit ordering",
    "difficulty": "medium",
    "q": "A taxpayer's nonrefundable credit exceeds her entire tax liability, and she also had federal income tax withheld from her wages. What is refunded to her?",
    "choices": [
      "The withholding only",
      "The withholding plus the unused credit",
      "The unused credit only",
      "Nothing, because the credit absorbed the liability"
    ],
    "answer": 0,
    "explain": "A nonrefundable credit can reduce tax liability to zero but no further; any excess is simply lost unless a specific carryforward applies. Withholding is a payment of tax, not a credit, so once liability is zero every dollar withheld comes back. Refunding the unused credit would turn a nonrefundable credit into a refundable one."
  },
  {
    "id": "credits-11",
    "section": "credits",
    "topic": "Excess Social Security",
    "difficulty": "medium",
    "q": "A taxpayer worked for two unrelated employers and had more Social Security tax withheld than the annual maximum. What is the remedy?",
    "choices": [
      "Claim the excess as a refundable credit on the return",
      "Ask each employer to refund its share of the over-withholding",
      "Deduct the excess as an itemized deduction",
      "Nothing — the excess is not recoverable"
    ],
    "answer": 0,
    "explain": "Excess Social Security withheld by two or more unrelated employers is claimed as a refundable credit on the individual return. When a single employer over-withholds, the employer must correct it."
  },
  {
    "id": "credits-13",
    "section": "credits",
    "topic": "AMT mechanics",
    "difficulty": "medium",
    "q": "How does the alternative minimum tax interact with the regular tax?",
    "choices": [
      "The taxpayer pays whichever computation is larger",
      "The taxpayer pays both taxes in full",
      "AMT replaces the regular tax entirely once triggered",
      "AMT applies only to taxpayers with business income"
    ],
    "answer": 0,
    "explain": "AMT is effectively the excess of tentative minimum tax over regular tax, so the taxpayer ends up paying the greater amount. The AMT exemption itself phases out as alternative minimum taxable income rises."
  },
  {
    "id": "credits-15",
    "section": "credits",
    "topic": "Net investment income tax",
    "difficulty": "medium",
    "q": "What is the net investment income tax?",
    "choices": [
      "3.8% on the lesser of net investment income or MAGI over a threshold",
      "3.8% on all investment income regardless of income level",
      "0.9% on wages above a threshold",
      "3.8% on adjusted gross income above $200,000, or $250,000 on a joint return"
    ],
    "answer": 0,
    "explain": "The NIIT is 3.8% of the lesser of net investment income or the excess of modified AGI over $200,000 ($250,000 for joint filers). The 0.9% additional Medicare tax is the separate wage and self-employment levy."
  },
  {
    "id": "credits-16",
    "section": "credits",
    "topic": "Filing status after death",
    "difficulty": "medium",
    "q": "A taxpayer's spouse died in Year 1. The taxpayer has a dependent child and does not remarry. What filing status is available in Year 3?",
    "choices": [
      "Married filing jointly",
      "Qualifying surviving spouse",
      "Head of household",
      "Single"
    ],
    "answer": 1,
    "explain": "A joint return is allowed for the year of death itself, then qualifying surviving spouse status is available for the two following years if a dependent child lives in the home. From Year 4 the taxpayer would file as head of household if still eligible."
  },
  {
    "id": "losses-1",
    "section": "losses",
    "topic": "Loss limitation ordering",
    "difficulty": "medium",
    "q": "In what order are a pass-through owner's loss limitations applied?",
    "choices": [
      "Passive activity, then at-risk, then basis, then excess business loss",
      "Basis, then at-risk, then passive activity, then excess business loss",
      "At-risk, then basis, then passive activity, then excess business loss",
      "Excess business loss, then basis, then at-risk, then passive activity"
    ],
    "answer": 1,
    "explain": "Losses run the gauntlet in order: basis first, then the at-risk rules, then the passive activity rules, and finally the excess business loss limitation. A loss stopped at any gate is suspended and carried forward."
  },
  {
    "id": "losses-2",
    "section": "losses",
    "topic": "Hobby losses",
    "difficulty": "medium",
    "q": "An activity generates losses year after year. What presumption applies if it shows a profit in three of five consecutive years?",
    "choices": [
      "The activity is presumed to be a hobby",
      "The activity is presumed to be engaged in for profit",
      "The IRS may not examine the activity",
      "Losses become fully deductible without limitation"
    ],
    "answer": 1,
    "explain": "Profits in three of five consecutive years (two of seven for horse activities) presume a profit motive, shifting the burden to the IRS. Without a profit motive, expenses of the activity are currently nondeductible while the income remains taxable."
  },
  {
    "id": "losses-3",
    "section": "losses",
    "topic": "At-risk amounts",
    "difficulty": "medium",
    "q": "A partner contributes $30,000 cash and is allocated $50,000 of nonrecourse debt that is not qualified real property financing. What is the at-risk amount?",
    "choices": [
      "$80,000",
      "$50,000",
      "$30,000",
      "$0"
    ],
    "answer": 2,
    "explain": "Only cash, the basis of contributed property, and debt for which the taxpayer is personally liable count as at risk. General nonrecourse debt does not, though qualified nonrecourse real estate financing is a statutory exception."
  },
  {
    "id": "losses-4",
    "section": "losses",
    "topic": "Material participation",
    "difficulty": "medium",
    "q": "Which fact establishes material participation in an activity?",
    "choices": [
      "Participating more than 500 hours during the year",
      "Owning more than 50% of the entity",
      "Being listed as a general partner",
      "Bearing personal liability for the entity's debts"
    ],
    "answer": 0,
    "explain": "The most common of the seven material participation tests is more than 500 hours in the activity. Others include substantially all of the participation and more than 100 hours with no one participating more."
  },
  {
    "id": "losses-5",
    "section": "losses",
    "topic": "Rental real estate allowance",
    "difficulty": "medium",
    "q": "A taxpayer actively participates in a rental property and has a $32,000 rental loss and $118,000 of modified AGI. How much loss is currently deductible?",
    "choices": [
      "$32,000",
      "$25,000",
      "$16,000",
      "$0"
    ],
    "answer": 2,
    "explain": "The $25,000 special allowance phases out at 50 cents per dollar of MAGI over $100,000, so $9,000 of it is lost here. The remaining $16,000 is deductible and the balance of the loss is suspended."
  },
  {
    "id": "losses-6",
    "section": "losses",
    "topic": "Real estate professionals",
    "difficulty": "medium",
    "q": "What must a taxpayer establish to treat rental activities as nonpassive under the real estate professional rules?",
    "choices": [
      "Ownership of at least five rental properties that the taxpayer manages personally",
      "More than 750 hours in real property businesses, over half of all services",
      "A real estate broker's or salesperson's license in the state",
      "Rental income exceeding the taxpayer's wage and business income"
    ],
    "answer": 1,
    "explain": "The taxpayer must spend more than 750 hours in real property trades or businesses in which they materially participate, and that must exceed half of all personal services they perform. Licensing and property count are irrelevant."
  },
  {
    "id": "losses-7",
    "section": "losses",
    "topic": "Suspended passive losses",
    "difficulty": "medium",
    "q": "A taxpayer sells their entire interest in a passive activity to an unrelated party in a fully taxable transaction. What happens to suspended losses from that activity?",
    "choices": [
      "They are permanently lost",
      "They become fully deductible in the year of disposition",
      "They carry forward to offset future passive income",
      "They are added to the basis of the taxpayer's other activities"
    ],
    "answer": 1,
    "explain": "A complete disposition of the entire interest in a fully taxable transaction to an unrelated party frees the suspended losses in full, deductible against any income (Section 469(g)). An installment sale releases them only in proportion to the gain recognized each year, and a gift releases none: the suspended losses are added to the donee's basis."
  },
  {
    "id": "losses-8",
    "section": "losses",
    "topic": "Passive income sources",
    "difficulty": "medium",
    "q": "Which income may be offset by suspended passive losses?",
    "choices": [
      "Interest and dividends earned in a brokerage account",
      "Wages and bonuses from the taxpayer's employer",
      "Income from a partnership in which the taxpayer does not participate",
      "Gain on the sale of publicly traded stock held for investment"
    ],
    "answer": 2,
    "explain": "Only passive income absorbs passive losses. Portfolio income — interest, dividends, and gains on investment securities — and earned income are both off limits."
  },
  {
    "id": "losses-9",
    "section": "losses",
    "topic": "Net operating losses",
    "difficulty": "medium",
    "q": "How is an individual's net operating loss arising after 2020 generally used?",
    "choices": [
      "Carried back two years and then forward twenty years",
      "Carried forward indefinitely, capped at 80% of taxable income",
      "Carried back five years against income without limitation",
      "Deducted in full in the loss year against every type of income"
    ],
    "answer": 1,
    "explain": "Post-2017 NOLs generally cannot be carried back and are carried forward indefinitely, but the deduction is capped at 80% of taxable income determined before the NOL. Farming losses retain a limited carryback."
  },
  {
    "id": "losses-10",
    "section": "losses",
    "topic": "Excess business loss",
    "difficulty": "medium",
    "q": "An individual's aggregate trade or business losses exceed the section 461(l) threshold. What happens to the excess?",
    "choices": [
      "It is disallowed permanently",
      "It is carried forward as a net operating loss",
      "It is treated as a capital loss",
      "It offsets the following year's business income only"
    ],
    "answer": 1,
    "explain": "The excess business loss is disallowed in the current year and carried forward as an NOL to the next year, where it faces the 80% limitation. The threshold is indexed and doubled for joint filers."
  },
  {
    "id": "losses-11",
    "section": "losses",
    "topic": "Vacation homes",
    "difficulty": "medium",
    "q": "A taxpayer rents a beach house 120 days and uses it personally 20 days. How is it classified?",
    "choices": [
      "Pure rental property, since rental days were more than five times personal days",
      "A personal residence, so no rental expenses are deductible",
      "Mixed use, with expenses allocated and deductions capped at rental income",
      "Tax-exempt, because personal use stayed under 15 days"
    ],
    "answer": 2,
    "explain": "Personal use exceeding the greater of 14 days or 10% of rental days (10% of 120 is 12, so 14 controls) makes it a mixed-use residence. Expenses are allocated between uses and rental deductions cannot create a loss."
  },
  {
    "id": "losses-12",
    "section": "losses",
    "topic": "Home office",
    "difficulty": "medium",
    "q": "A self-employed taxpayer's home office deduction exceeds the net income from that business. What is the result?",
    "choices": [
      "The excess is deductible against other income",
      "The excess is disallowed and carried forward to future years of that business",
      "The excess must be capitalized into the home's basis",
      "The full deduction is allowed because the office is a business expense"
    ],
    "answer": 1,
    "explain": "The home office deduction cannot create or increase a loss from the business; the disallowed portion carries forward to a year with sufficient income. The office must also be used regularly and exclusively as the principal place of business."
  },
  {
    "id": "losses-13",
    "section": "losses",
    "topic": "Gambling losses",
    "difficulty": "easy",
    "q": "A casual gambler has $18,000 of winnings and $19,000 of losses for the year. What is reported for the year?",
    "choices": [
      "$18,000 of income and $17,100 of losses as an itemized deduction",
      "$18,000 of income and $18,000 of losses as an itemized deduction",
      "Net loss of $1,000 deductible against other income",
      "$18,000 of income and no deduction"
    ],
    "answer": 0,
    "explain": "Winnings are reported in full as income. For tax years after 2025, wagering losses (including related expenses) are allowed only up to 90% of the losses, and then only to the extent of winnings: 90% of $19,000 is $17,100, which is below the $18,000 of winnings, so $17,100 is the itemized deduction. The excess is not deductible and does not carry forward for a casual gambler."
  },
  {
    "id": "losses-14",
    "section": "losses",
    "topic": "Negative at-risk amount",
    "difficulty": "medium",
    "q": "A taxpayer's at-risk amount in an activity falls below zero after debt is refinanced on a nonrecourse basis. What is the consequence?",
    "choices": [
      "Previously deducted losses are recaptured as income to that extent",
      "All future losses from the activity are permanently disallowed",
      "The activity is reclassified as passive for all future years",
      "The taxpayer must amend prior returns to remove the losses"
    ],
    "answer": 0,
    "explain": "When the at-risk amount drops below zero, section 465 recaptures previously allowed losses as income to that extent. The recaptured amount is then added back to the taxpayer's suspended loss pool for future use."
  },
  {
    "id": "losses-16",
    "section": "losses",
    "topic": "Basis limitation",
    "difficulty": "medium",
    "q": "An S corporation shareholder with a $12,000 stock basis and no loans to the corporation is allocated a $20,000 loss. How much is deductible this year?",
    "choices": [
      "$20,000",
      "$12,000",
      "$3,000",
      "$0"
    ],
    "answer": 1,
    "explain": "Losses are limited to the shareholder's combined stock and debt basis, so $12,000 is deductible and basis drops to zero. The remaining $8,000 is suspended indefinitely until basis is restored."
  },
  {
    "id": "ccorp-5",
    "section": "booktax",
    "topic": "Book-tax differences",
    "difficulty": "medium",
    "q": "Which item is a permanent difference on Schedule M-1 rather than a timing difference?",
    "choices": [
      "Depreciation computed differently for book and tax",
      "Premiums paid on a key-person life insurance policy",
      "Warranty expense accrued for book purposes",
      "Bad debt expense using the allowance method"
    ],
    "answer": 1,
    "explain": "Key-person life insurance premiums are never deductible and the proceeds are never taxable, so the difference never reverses. Depreciation, accrued warranties, and allowance-method bad debts all reverse in later periods."
  },
  {
    "id": "booktax-1",
    "section": "booktax",
    "topic": "Municipal bond interest",
    "difficulty": "easy",
    "q": "A corporation's net income per books includes $12,000 of interest on municipal bonds. How is this item treated on Schedule M-1?",
    "choices": [
      "Subtracted from book income as a permanent difference",
      "Added to book income as a permanent difference",
      "Subtracted from book income as a temporary difference that reverses at maturity",
      "No adjustment, because the interest is fully taxable to a corporation"
    ],
    "answer": 0,
    "explain": "Interest on state and local bonds is excluded from gross income under section 103 for corporations as well as individuals, so it is in book income but never in taxable income. Schedule M-1 subtracts it, and because the exclusion never reverses it is a permanent difference. Adding it would move the reconciliation the wrong way, and nothing about the item reverses at maturity."
  },
  {
    "id": "booktax-2",
    "section": "booktax",
    "topic": "Depreciation methods",
    "difficulty": "medium",
    "q": "A corporation's MACRS depreciation this year exceeds the straight-line depreciation on its books. How does this difference appear in the Schedule M-1 reconciliation?",
    "choices": [
      "A subtraction from book income that reverses in later years",
      "An addition to book income that reverses in later years",
      "A subtraction from book income that never reverses",
      "No adjustment, because depreciation is only a book estimate"
    ],
    "answer": 0,
    "explain": "Tax depreciation above book depreciation lowers taxable income below book income, so Schedule M-1 subtracts the excess. Total depreciation over the asset's life is the same under both systems, so the difference is temporary: in later years book depreciation exceeds tax depreciation and the adjustment becomes an addition. A difference that never reverses, such as a fine, is a permanent difference."
  },
  {
    "id": "booktax-3",
    "section": "booktax",
    "topic": "Book income tax expense",
    "difficulty": "easy",
    "q": "A corporation's income statement shows $84,000 of federal income tax expense. In reconciling net income per books to taxable income on Schedule M-1, this expense is",
    "choices": [
      "Added back to book income and never deductible",
      "Added back this year and deducted when paid",
      "Subtracted from book income as a nontaxable item",
      "Ignored, because Schedule M-1 starts from pretax book income"
    ],
    "answer": 0,
    "explain": "Schedule M-1 begins with net income per books, which is after federal income tax, and line 2 adds that tax back because section 275 bars any deduction for federal income taxes. The difference is permanent: the tax is never deductible, paid or not. State income taxes, by contrast, are deductible and need no M-1 adjustment."
  },
  {
    "id": "booktax-4",
    "section": "booktax",
    "topic": "Client meals and outings",
    "difficulty": "medium",
    "q": "A corporation expensed business meals with clients and tickets to sporting events for those clients in full on its books. Which Schedule M-1 treatment is correct?",
    "choices": [
      "Add back half of the meals and all of the tickets as permanent differences",
      "Add back all of the meals and all of the tickets as permanent differences",
      "Add back half of the meals and half of the tickets as permanent differences",
      "Add back half of the meals only, with the tickets deductible in full"
    ],
    "answer": 0,
    "explain": "Section 274 limits business meals to 50% and, since the TCJA, allows no deduction for entertainment such as event tickets, so the nondeductible portions are added back on Schedule M-1. Neither amount is ever deducted in a later year, so both are permanent differences. Treating the tickets like meals or as fully deductible applies pre-2018 law."
  },
  {
    "id": "booktax-5",
    "section": "booktax",
    "topic": "Bad debt methods",
    "difficulty": "medium",
    "q": "A corporation's allowance for doubtful accounts grew during the year, so book bad debt expense exceeded the receivables actually written off. What is the Schedule M-1 effect?",
    "choices": [
      "Add the excess to book income as a temporary difference",
      "Subtract the excess from book income as a temporary difference",
      "Add the excess to book income as a permanent difference",
      "No adjustment, because corporations may use the reserve method for tax"
    ],
    "answer": 0,
    "explain": "For tax, section 166 allows a bad debt deduction only when a specific receivable becomes worthless; the reserve method is not permitted. Book expense above the actual charge-offs is therefore added back on Schedule M-1. The difference is temporary because the reserved accounts are eventually written off and deducted, reversing the adjustment."
  },
  {
    "id": "booktax-6",
    "section": "booktax",
    "topic": "Schedule M-3 filing requirement",
    "difficulty": "easy",
    "q": "Which corporation must file Schedule M-3 instead of Schedule M-1 with its Form 1120?",
    "choices": [
      "One with total assets of $10 million or more at year end",
      "One with gross receipts of $10 million or more for the year",
      "One with taxable income of $1 million or more for the year",
      "One that files a consolidated return, regardless of its size"
    ],
    "answer": 0,
    "explain": "The test is balance-sheet size: a corporation whose Schedule L total assets at the end of the year are $10 million or more must file Schedule M-3; one with assets under $50 million may complete only Part I of Schedule M-3 and use Schedule M-1 for the detailed reconciliation, while one at $50 million or more completes all three parts. Gross receipts and taxable income are not the test, and a consolidated group applies the same asset test to its consolidated Schedule L. Smaller corporations may file Schedule M-3 voluntarily."
  },
  {
    "id": "booktax-7",
    "section": "booktax",
    "topic": "Reconciling to taxable income",
    "difficulty": "medium",
    "q": "A corporation's net income per books is $400,000. It includes $40,000 of municipal bond interest and an equal amount of federal income tax expense. What is taxable income?",
    "choices": [
      "$400,000",
      "$480,000",
      "$320,000",
      "$440,000"
    ],
    "answer": 0,
    "explain": "Federal income tax expense is never deductible, so the $40,000 is added back; municipal bond interest is never taxable, so the $40,000 is subtracted. The two adjustments offset and taxable income equals book income, $400,000. The other answers move one or both items in the wrong direction."
  },
  {
    "id": "ccorp-4",
    "section": "ccorp",
    "topic": "Corporate tax rate",
    "difficulty": "easy",
    "q": "What rate applies to a C corporation's taxable income?",
    "choices": [
      "A graduated schedule from 15% to 35%",
      "A flat 21%",
      "A flat 28%",
      "A flat 21% plus a 10% surtax on income over $10 million"
    ],
    "answer": 1,
    "explain": "C corporations pay a flat 21% on taxable income, replacing the old graduated schedule. The corporate alternative minimum tax was repealed for regular corporations, though a separate 15% book minimum tax reaches only very large corporations."
  },
  {
    "id": "ccorp-6",
    "section": "ccorp",
    "topic": "Corporate charitable limit",
    "difficulty": "medium",
    "q": "A corporation's taxable income before charitable contributions, the dividends received deduction, and any NOL carryback is $800,000. It contributed $110,000 to charity. What is deductible this year?",
    "choices": [
      "$110,000",
      "$80,000",
      "$69,000",
      "$40,000"
    ],
    "answer": 1,
    "explain": "For tax years after 2025 a corporation deducts contributions only to the extent they exceed a 1% floor ($8,000) and not beyond a 10% ceiling ($80,000), both measured on taxable income before the contribution, the DRD, and carrybacks. Deductible: $80,000; $69,000 wrongly applies the ceiling to income after the contribution. Because contributions exceed the ceiling, both the $22,000 above it and the $8,000 floor amount carry forward five years — $30,000 in total. Had contributions stayed under the ceiling, the floor amount would be lost."
  },
  {
    "id": "ccorp-7",
    "section": "ccorp",
    "topic": "Dividends received deduction",
    "difficulty": "medium",
    "q": "A corporation owns 30% of the stock of a domestic payer and receives a $100,000 dividend. What is the dividends received deduction percentage?",
    "choices": [
      "50%",
      "65%",
      "100%",
      "No deduction is allowed"
    ],
    "answer": 1,
    "explain": "Ownership of at least 20% but under 80% earns a 65% DRD. Under 20% gets 50%, and an affiliated group member owning 80% or more gets 100%."
  },
  {
    "id": "ccorp-14",
    "section": "ccorp",
    "topic": "Accumulated earnings tax",
    "difficulty": "medium",
    "q": "What triggers the accumulated earnings tax?",
    "choices": [
      "Any accumulation of earnings beyond the statutory minimum credit",
      "Accumulating beyond reasonable business needs to avoid shareholder tax",
      "Failing to declare a dividend for three consecutive tax years",
      "Holding more than 60% of total assets in passive investments"
    ],
    "answer": 1,
    "explain": "The accumulated earnings tax is a penalty on accumulating earnings past reasonable business needs with the purpose of avoiding shareholder tax on dividends. The passive-asset test describes the separate personal holding company tax."
  },
  {
    "id": "ccorp-17",
    "section": "ccorp",
    "topic": "Using a loss carryforward",
    "difficulty": "medium",
    "q": "A corporation has $500,000 of taxable income before using a $600,000 net operating loss carryforward that arose in 2023. What NOL deduction may it claim this year?",
    "choices": [
      "$400,000",
      "$500,000",
      "$600,000",
      "$100,000"
    ],
    "answer": 0,
    "explain": "An NOL arising in a tax year beginning after 2017 may offset only 80% of taxable income computed without the NOL deduction, so the deduction is capped at $400,000 here. Losses arising after 2020 cannot be carried back, but the unused $200,000 carries forward indefinitely. Deducting $500,000 or $600,000 ignores the 80% limit."
  },
  {
    "id": "ccorp-18",
    "section": "ccorp",
    "topic": "Dividends-received deduction",
    "difficulty": "medium",
    "q": "A corporation's taxable income before the dividends-received deduction is $70,000, including an $80,000 dividend from a 10%-owned domestic corporation. What is its dividends-received deduction?",
    "choices": [
      "$35,000",
      "$40,000",
      "$30,000",
      "$80,000"
    ],
    "answer": 0,
    "explain": "A 10% owner earns a 50% DRD, which would be $40,000 on an $80,000 dividend. Section 246(b) caps the deduction at the same 50% of taxable income before the DRD, or $35,000, unless the full deduction would create or increase an NOL; here taxable income after a full $40,000 DRD would still be positive, so the cap applies. The $30,000 answer is income after an uncapped deduction, not the deduction itself."
  },
  {
    "id": "ccorp-19",
    "section": "ccorp",
    "topic": "Business interest limitation",
    "difficulty": "medium",
    "q": "A C corporation with average gross receipts well above the small-business exemption has $2 million of business interest expense. Under section 163(j), its deduction this year is limited to",
    "choices": [
      "Business interest income plus 30% of adjusted taxable income, with the excess carried forward indefinitely",
      "Business interest income plus 50% of adjusted taxable income, with the excess carried forward five years",
      "30% of taxable income, with the excess permanently disallowed",
      "30% of adjusted taxable income, with the excess carried back three years"
    ],
    "answer": 0,
    "explain": "Section 163(j) allows business interest expense up to the sum of business interest income, 30% of adjusted taxable income and any floor plan financing interest; since the OBBBA, adjusted taxable income is again computed before depreciation and amortization. Disallowed interest carries forward indefinitely, with no carryback. Businesses, other than tax shelters, whose three-year average gross receipts fall under the inflation-indexed section 448(c) threshold ($32 million for 2026) are exempt."
  },
  {
    "id": "ccorp-20",
    "section": "ccorp",
    "topic": "Corporate estimated payments",
    "difficulty": "medium",
    "q": "A calendar-year corporation had taxable income over $1 million in one of the three preceding years. How may it compute its four required estimated tax installments to avoid a penalty?",
    "choices": [
      "Prior-year tax safe harbor for the first installment only, the rest on current-year tax",
      "Prior-year tax safe harbor for all four installments, as any corporation may",
      "Current-year tax only, because a large corporation has no safe harbor",
      "110% of prior-year tax for all four installments"
    ],
    "answer": 0,
    "explain": "Corporations pay estimated tax in four installments of 25% each, due the 15th day of the fourth, sixth, ninth and twelfth months, and most may base every installment on 100% of the prior year's tax. A large corporation, one with taxable income of $1 million or more in any of the three preceding years, may use the prior-year amount only for the first installment and must make up any shortfall in the second. The 110% rule belongs to high-income individuals, not corporations."
  },
  {
    "id": "ccorp-21",
    "section": "ccorp",
    "topic": "Form 1120 deadlines",
    "difficulty": "easy",
    "q": "A calendar-year C corporation files Form 7004 for an automatic extension of its 2026 Form 1120. Which statement is correct?",
    "choices": [
      "The return is due October 15, 2027, but the tax was due April 15, 2027",
      "Both the return and the tax are due October 15, 2027",
      "The return is due September 15, 2027, and the tax was due March 15, 2027",
      "The return is due September 15, 2027, and the tax was due April 15, 2027"
    ],
    "answer": 0,
    "explain": "Form 1120 is due the 15th day of the fourth month after year end, April 15 for a calendar year, and Form 7004 adds an automatic six-month extension to October 15. The extension covers only the filing; the tax is still due April 15, and interest and the failure-to-pay penalty run from that date. March 15 and September 15 are the partnership and S corporation dates, and a June 30 year end follows its own schedule."
  },
  {
    "id": "ccorp-22",
    "section": "ccorp",
    "topic": "Losing state nexus protection",
    "difficulty": "medium",
    "q": "An out-of-state seller's only State X activity is soliciting orders for goods, approved and shipped from elsewhere, so Public Law 86-272 bars State X's income tax. Which added activity would end that protection?",
    "choices": [
      "Performing paid installation and repair services for State X customers",
      "Advertising in State X newspapers and on local radio stations",
      "Salespeople checking customers' inventory to suggest reorders, at no charge",
      "Shipping replacement goods from the home state after a customer complaint"
    ],
    "answer": 0,
    "explain": "Public Law 86-272 shields a business from a state's net income tax only while its in-state activity is limited to soliciting orders for tangible personal property that are approved and filled from outside the state; services, intangibles and real property are not covered. Installation and repair performed in the state are services beyond solicitation, so they create nexus. Advertising, inventory checks that support selling, and shipments from outside the state remain within or ancillary to solicitation."
  },
  {
    "id": "ccorp-23",
    "section": "ccorp",
    "topic": "Sales-based apportionment",
    "difficulty": "easy",
    "q": "State Y apportions business income using a single sales factor. A corporation has $5,000,000 of total sales, of which $1,250,000 are to State Y customers. What percentage of its business income does State Y tax?",
    "choices": [
      "25%",
      "8.33%",
      "75%",
      "12.5%"
    ],
    "answer": 0,
    "explain": "Under a single sales factor the apportionment percentage is simply in-state sales over total sales: $1,250,000 divided by $5,000,000 is 25%. Dividing that ratio by three (8.33%) wrongly treats the sales ratio as one of three equally weighted factors with the other two at zero. The property and payroll factors do not enter a single-sales-factor formula at all."
  },
  {
    "id": "ccorp-25",
    "section": "ccorp",
    "topic": "Rent from investment property",
    "difficulty": "medium",
    "q": "A manufacturer commercially domiciled in State A owns an unrelated rental building in State B. For state income tax purposes, the rental income is",
    "choices": [
      "Allocated entirely to State B as nonbusiness income",
      "Apportioned among all states along with the manufacturing income",
      "Allocated entirely to State A, the commercial domicile",
      "Excluded from every state's tax base because it is passive"
    ],
    "answer": 0,
    "explain": "Under UDITPA, income from the regular course of the trade or business is business income and is apportioned by formula; income from an unrelated investment is nonbusiness income and is allocated to a single state. Nonbusiness income from real property goes to the state where the property sits, so State B taxes all of the rent. Nonbusiness interest and dividends, by contrast, are allocated to the commercial domicile."
  },
  {
    "id": "ccorp-26",
    "section": "ccorp",
    "topic": "Research cost recovery",
    "difficulty": "medium",
    "q": "In 2026 a corporation pays $300,000 for research performed in its United States laboratory and $100,000 for research performed at its laboratory in Ireland. How are these costs treated?",
    "choices": [
      "Domestic costs deducted currently; foreign costs amortized over 15 years",
      "Both deducted currently under section 174A",
      "Both amortized, domestic over 5 years and foreign over 15 years",
      "Domestic costs amortized over 5 years; foreign costs deducted currently"
    ],
    "answer": 0,
    "explain": "The OBBBA added section 174A, which lets domestic research and experimental expenditures paid or incurred in tax years beginning after 2024 be deducted currently, with an election to capitalize and amortize them over at least 60 months instead. Foreign research stays under section 174 and must be amortized over 15 years. Amortizing domestic costs over 5 years was the 2022 to 2024 rule the Act ended."
  },
  {
    "id": "flowthru-1",
    "section": "partner",
    "topic": "Partnership formation",
    "difficulty": "easy",
    "q": "A partner contributes appreciated land to a partnership in exchange for a partnership interest. What gain does the partner recognize?",
    "choices": [
      "The full appreciation, because a partnership interest is property",
      "None, under section 721",
      "Gain to the extent of the partnership's liabilities",
      "Gain only if the partner receives more than a 50% interest"
    ],
    "answer": 1,
    "explain": "Section 721 gives nonrecognition on contributions of property for a partnership interest, with no control requirement of the kind section 351 imposes on corporations. Contributing services, however, produces ordinary income."
  },
  {
    "id": "flowthru-2",
    "section": "partner",
    "topic": "Partner's outside basis",
    "difficulty": "medium",
    "q": "A partner contributes property subject to a $30,000 liability, which the partnership assumes. The partner's share of that liability afterward is $10,000. What is the net effect of the liability on the partner's outside basis?",
    "choices": [
      "A $20,000 decrease",
      "A $30,000 decrease",
      "A $10,000 increase",
      "No net effect"
    ],
    "answer": 0,
    "explain": "Under section 752 a liability the partnership takes over is a deemed cash distribution to the contributing partner, and the partner's share of partnership liabilities is a deemed cash contribution. Increases and decreases from the same transaction are netted (Reg. 1.752-1(f)): $30,000 of relief less the $10,000 share leaves a single $20,000 deemed distribution, so outside basis falls by $20,000 after the property's carryover basis is added. A full $30,000 reduction forgets that partners get basis for their share of partnership debt."
  },
  {
    "id": "flowthru-3",
    "section": "partner",
    "topic": "Guaranteed payments",
    "difficulty": "medium",
    "q": "How are guaranteed payments to a partner for services treated?",
    "choices": [
      "A nondeductible distribution of profits",
      "Deductible by the partnership and ordinary income to the partner",
      "A dividend taxable at preferential rates",
      "Deductible by the partnership only if the partnership has net income"
    ],
    "answer": 1,
    "explain": "Guaranteed payments are determined without regard to partnership income, deductible by the partnership if otherwise ordinary and necessary, and ordinary income to the partner subject to self-employment tax."
  },
  {
    "id": "flowthru-4",
    "section": "partner",
    "topic": "Current distributions",
    "difficulty": "medium",
    "q": "A partner with a $25,000 outside basis receives a $40,000 cash distribution that does not liquidate the interest. What is recognized?",
    "choices": [
      "No gain, because distributions are a return of capital",
      "$15,000 capital gain",
      "$40,000 ordinary income",
      "$25,000 capital gain"
    ],
    "answer": 1,
    "explain": "A current distribution triggers gain only when cash exceeds outside basis, and the excess is capital gain. Basis drops to zero and property distributions never produce gain in a current distribution."
  },
  {
    "id": "flowthru-6",
    "section": "partner",
    "topic": "Separately stated items",
    "difficulty": "medium",
    "q": "Why must a partnership separately state items like charitable contributions and capital gains rather than folding them into ordinary income?",
    "choices": [
      "Because they are not deductible at the partnership level",
      "Because their tax treatment depends on each partner's own circumstances",
      "Because they are subject to partnership-level withholding",
      "Because the partnership itself pays the tax on those items at entity rates"
    ],
    "answer": 1,
    "explain": "Items whose character or limitation depends on the partner — charitable contributions, capital gains, section 179, foreign taxes, tax-exempt interest — flow through separately on Schedule K-1 to be applied at the partner level."
  },
  {
    "id": "flowthru-7",
    "section": "partner",
    "topic": "Basis adjustment ordering",
    "difficulty": "medium",
    "q": "In what order does a partner adjust outside basis during the year?",
    "choices": [
      "Income items first, then distributions, then losses",
      "Losses first, then distributions, then income",
      "Distributions first, then income, then losses",
      "Distributions first, then losses, then income"
    ],
    "answer": 0,
    "explain": "Basis is increased for income and contributions, then decreased by distributions, and only then reduced by losses (Reg. 1.704-1(d)(2)). Applying distributions before losses preserves basis for the distributions: a distribution may remain nontaxable while some of the year's loss is suspended and carried forward."
  },
  {
    "id": "partner-1",
    "section": "partner",
    "topic": "Ordinary business income",
    "difficulty": "medium",
    "q": "A partnership has $150,000 of service revenue and $50,000 of wages, rent and guaranteed payments. It also realized a capital gain and made a charitable contribution. What is its ordinary business income?",
    "choices": [
      "$100,000",
      "$100,000 plus the capital gain",
      "$100,000 less the charitable contribution",
      "$100,000 plus the capital gain less the charitable contribution"
    ],
    "answer": 0,
    "explain": "Ordinary business income on page 1 of Form 1065 is trade or business revenue less deductible operating costs, here $150,000 less $50,000. Wages, rent and guaranteed payments for services are deductible at the partnership level under section 707(c) and section 162. Capital gains and charitable contributions are separately stated under section 702(a) because their treatment depends on each partner, so they never enter ordinary income."
  },
  {
    "id": "partner-2",
    "section": "partner",
    "topic": "Schedule K items",
    "difficulty": "easy",
    "q": "A partnership has ordinary service revenue, tax-exempt municipal bond interest, a charitable contribution and employee wages. Which two items must be separately stated on Schedule K rather than netted into ordinary income?",
    "choices": [
      "Tax-exempt interest and the charitable contribution",
      "Service revenue and employee wages",
      "Tax-exempt interest and employee wages",
      "Service revenue and the charitable contribution"
    ],
    "answer": 0,
    "explain": "Section 702(a) requires items whose character or deductibility depends on the partner to pass through separately: tax-exempt interest stays excludable in each partner's hands, and the charitable contribution is subject to each partner's own AGI limits. Service revenue and the wages paid to earn it are ordinary trade or business items that net into ordinary business income on page 1 of Form 1065."
  },
  {
    "id": "partner-3",
    "section": "partner",
    "topic": "Partnership liabilities and basis",
    "difficulty": "easy",
    "q": "A partner's outside basis is $40,000 at the start of the year. During the year her share of partnership liabilities increases by $15,000. Before any other adjustment, what is her outside basis?",
    "choices": [
      "$55,000",
      "$40,000",
      "$25,000",
      "$15,000"
    ],
    "answer": 0,
    "explain": "Under section 752(a), an increase in a partner's share of partnership liabilities is treated as a cash contribution, so it raises outside basis to $55,000. A decrease in the share would be treated as a cash distribution and reduce basis instead. Her share of ordinary income would increase basis further, and a cash distribution would reduce it."
  },
  {
    "id": "partner-4",
    "section": "partner",
    "topic": "Loss exceeding basis",
    "difficulty": "medium",
    "q": "A partner's share of partnership ordinary loss exceeds her outside basis by $6,000. She materially participates and no other limitation applies. What happens to the $6,000?",
    "choices": [
      "It is suspended and carried forward until her outside basis is restored",
      "It is deducted this year because she materially participates in the business",
      "It is permanently disallowed and never deducted",
      "It is treated as a capital loss deductible against her other capital gains"
    ],
    "answer": 0,
    "explain": "Section 704(d) limits a partner's deductible loss to her outside basis at year end; the excess is carried forward indefinitely and deducted when basis is restored by income allocations, contributions or an increased share of liabilities. The basis limit applies first, so the at-risk and passive activity rules are only reached by losses that clear it, and material participation cannot rescue a loss that basis has already blocked. The loss keeps its ordinary character and is not lost permanently."
  },
  {
    "id": "partner-5",
    "section": "partner",
    "topic": "Fixed payment for services",
    "difficulty": "medium",
    "q": "A partnership agreement pays a partner $60,000 a year for services, determined without regard to partnership income. The partnership reports a loss for the year. How does the partner report the $60,000?",
    "choices": [
      "As ordinary income subject to self-employment tax",
      "As nothing, because the partnership had no income to distribute",
      "As a return of capital that reduces her outside basis",
      "As wages reported on Form W-2 and subject to FICA withholding"
    ],
    "answer": 0,
    "explain": "A payment for services fixed without regard to partnership income is a guaranteed payment under section 707(c): the partner reports it as ordinary income and net earnings from self-employment in the year the partnership deducts it, even in a loss year. A distributive share, by contrast, depends on partnership results. A partner is not an employee, so the payment is not W-2 wages, and it is not a distribution reducing basis."
  },
  {
    "id": "partner-6",
    "section": "partner",
    "topic": "Partners and SE tax",
    "difficulty": "medium",
    "q": "A limited partner with no management role, who performs no services, receives only a distributive share of a limited partnership's trade or business income. How is that share treated for self-employment tax?",
    "choices": [
      "Excluded from self-employment income, unlike a general partner's share",
      "Included in self-employment income, like a general partner's share",
      "Included only to the extent it exceeds the Social Security wage base",
      "Included in self-employment income only if the partnership distributes it"
    ],
    "answer": 0,
    "explain": "A general partner's distributive share of trade or business income is net earnings from self-employment, but section 1402(a)(13) excludes a limited partner's share, except guaranteed payments for services. The exclusion turns on function, not the label: in Renkemeyer (LLP partners), Castigliola (PLLC members) and Soroban, affirmed by the Second Circuit in 2026, partners who manage and run the business were taxed like general partners. Distribution timing is irrelevant."
  },
  {
    "id": "partner-7",
    "section": "partner",
    "topic": "Partnership filing and reporting",
    "difficulty": "easy",
    "q": "A calendar-year partnership earned income in 2026 but distributed nothing to its partners. Which statement about its return and the partners' reporting is correct?",
    "choices": [
      "Form 1065 is due March 15, 2027, and partners report their K-1 shares for 2026 anyway",
      "Form 1065 is due April 15, 2027, and partners report nothing until cash is distributed",
      "Form 1065 is due March 15, 2027, and partners report income only when it is distributed",
      "Form 1065 is due April 15, 2027, and partners report their K-1 shares for 2026 anyway"
    ],
    "answer": 0,
    "explain": "Form 1065 is due the 15th day of the third month after year end (section 6072(b)), March 15 for a calendar year, with a six-month extension available. The partnership pays no income tax; it issues each partner a Schedule K-1, and under section 702 each partner reports the distributive share for the year it is earned, whether or not any cash is distributed. April 15 is the individual and C corporation date."
  },
  {
    "id": "partner-8",
    "section": "partner",
    "topic": "Interest received for property",
    "difficulty": "medium",
    "q": "A partner contributes investment land she has held for three years, with a $20,000 basis and a $50,000 value, for a partnership interest. What are her basis and holding period in the interest?",
    "choices": [
      "$20,000 basis; holding period includes the three years",
      "$50,000 basis; holding period begins at contribution",
      "$20,000 basis; holding period begins at contribution",
      "$50,000 basis; holding period includes the three years"
    ],
    "answer": 0,
    "explain": "Under section 722, a partner's basis in an interest received for property is the adjusted basis of the property contributed plus any cash, here $20,000; no gain is recognized under section 721, so the value is irrelevant. Section 1223(1) tacks the holding period when the contributed property is a capital or section 1231 asset, so she is already long term. Contributed inventory or cash would start a new holding period."
  },
  {
    "id": "flowthru-9",
    "section": "scorp",
    "topic": "S corporation shareholders",
    "difficulty": "easy",
    "q": "Which shareholder makes a corporation ineligible for S status?",
    "choices": [
      "An individual who is a nonresident alien",
      "The estate of a deceased shareholder",
      "A grantor trust",
      "A U.S. citizen owning 90% of the shares"
    ],
    "answer": 0,
    "explain": "Eligible shareholders are individuals who are U.S. citizens or residents, estates, and certain trusts. Nonresident aliens, partnerships, and corporations are all disqualifying, and the shareholder count is capped at 100 with families counted as one."
  },
  {
    "id": "flowthru-10",
    "section": "scorp",
    "topic": "One class of stock",
    "difficulty": "medium",
    "q": "Which arrangement violates the S corporation one-class-of-stock requirement?",
    "choices": [
      "Voting and nonvoting common shares with identical distribution rights",
      "Preferred stock paying a fixed dividend before common",
      "A shareholder loan with commercially reasonable terms",
      "Different share certificates issued on different dates"
    ],
    "answer": 1,
    "explain": "Differences in voting rights are expressly permitted, but shares must confer identical rights to distribution and liquidation proceeds. Preferred stock creates a second economic class and terminates the election."
  },
  {
    "id": "flowthru-11",
    "section": "scorp",
    "topic": "S election timing",
    "difficulty": "medium",
    "q": "A calendar-year corporation wants S status effective January 1 of the current year. By when must Form 2553 be filed?",
    "choices": [
      "December 31 of the prior year",
      "March 15 of the current year",
      "April 15 of the current year",
      "Any time during the current year"
    ],
    "answer": 1,
    "explain": "The election must be filed by the fifteenth day of the third month of the tax year to be effective for that year, or at any time in the preceding year. A later filing generally takes effect the following year, absent relief for a late election."
  },
  {
    "id": "flowthru-12",
    "section": "scorp",
    "topic": "Termination by passive income",
    "difficulty": "medium",
    "q": "An S corporation with accumulated earnings and profits from prior C years has passive investment income exceeding 25% of gross receipts. When does the election terminate?",
    "choices": [
      "Immediately in the first such year",
      "After three consecutive years meeting that condition",
      "Only if shareholders vote to revoke",
      "Never — the corporation just pays a penalty tax"
    ],
    "answer": 1,
    "explain": "The election terminates at the start of the fourth year after three consecutive years of excess passive investment income, and only where the corporation has C corporation E&P. A penalty tax also applies in each of those years."
  },
  {
    "id": "flowthru-13",
    "section": "scorp",
    "topic": "AAA and distributions",
    "difficulty": "medium",
    "q": "An S corporation with accumulated earnings and profits from C years makes a distribution. How is it sourced?",
    "choices": [
      "First from accumulated C corporation E&P as a dividend, then from AAA",
      "First from the accumulated adjustments account, then from E&P as a dividend",
      "Entirely as a dividend to the extent of total earnings and profits",
      "Entirely as a return of capital reducing the shareholder's basis"
    ],
    "answer": 1,
    "explain": "Distributions come first out of AAA and are tax free to the extent of stock basis, then out of accumulated C corporation E&P as a taxable dividend, and finally against remaining basis. Shareholders can elect to reverse that order."
  },
  {
    "id": "flowthru-14",
    "section": "scorp",
    "topic": "S corporation basis and debt",
    "difficulty": "medium",
    "q": "How does an S corporation shareholder's basis differ from a partner's?",
    "choices": [
      "It includes a share of entity-level debt, just as a partner's does",
      "It excludes entity debt but includes direct shareholder loans",
      "It is fixed at the original purchase price of the shares",
      "It is increased by distributions the shareholder receives"
    ],
    "answer": 1,
    "explain": "An S corporation shareholder gets no basis for corporate borrowings, only for stock investment and loans made personally to the corporation. A guarantee alone does not create basis, which is why partnerships often allow larger loss deductions."
  },
  {
    "id": "flowthru-16",
    "section": "scorp",
    "topic": "Reasonable compensation",
    "difficulty": "medium",
    "q": "A sole shareholder-employee of a profitable S corporation takes no salary and only distributions. What is the IRS's likely position?",
    "choices": [
      "The arrangement is proper because S corporation income is exempt from employment taxes",
      "A portion of the distributions should be recharacterized as wages subject to FICA",
      "The S election is terminated",
      "The distributions are taxed as dividends at preferential rates"
    ],
    "answer": 1,
    "explain": "An S corporation must pay reasonable compensation to a shareholder who performs services, and the IRS routinely recharacterizes distributions as wages when it does not. That produces employment tax plus penalties and interest."
  },
  {
    "id": "scorp-1",
    "section": "scorp",
    "topic": "Schedule K reporting",
    "difficulty": "medium",
    "q": "An S corporation reports sales, salaries, a section 179 expense, interest income and a long-term capital gain. Which items are separately stated on Schedule K rather than netted into ordinary business income?",
    "choices": [
      "The section 179 expense, interest income and the capital gain",
      "Interest income and the capital gain only",
      "Salaries, the section 179 expense and interest income",
      "The section 179 expense and the capital gain only"
    ],
    "answer": 0,
    "explain": "Under section 1366 an item is separately stated when its character could change a shareholder's tax result: the section 179 deduction is limited again at the shareholder level, interest income is portfolio income, and the capital gain enters the shareholder's own capital gain netting. Sales and salaries are ordinary operating items that combine into ordinary business income on page 1 of Form 1120-S. Leaving out the section 179 expense is the common slip."
  },
  {
    "id": "scorp-2",
    "section": "scorp",
    "topic": "Stock basis adjustments",
    "difficulty": "medium",
    "q": "In one year an S corporation shareholder has income items, a distribution, nondeductible expenses and an allocated loss. In what order are these applied to stock basis?",
    "choices": [
      "Income items, then the distribution, then nondeductible expenses, then the loss",
      "Income items, then the loss, then nondeductible expenses, then the distribution",
      "The distribution, then income items, then the loss, then nondeductible expenses",
      "Income items, then nondeductible expenses, then the loss, then the distribution"
    ],
    "answer": 0,
    "explain": "Reg. 1.1367-1(f) sets the order: increase basis for all income items, including tax-exempt income; then reduce it for distributions; then for nondeductible, noncapital expenses; and last for losses and deductions. Taking the distribution before the loss means more of the distribution is a tax-free return of basis, with any excess loss suspended rather than the distribution becoming gain. Applying the loss first would overstate the taxable distribution."
  },
  {
    "id": "scorp-3",
    "section": "scorp",
    "topic": "Basis restoration order",
    "difficulty": "medium",
    "q": "Losses reduced an S corporation shareholder's stock basis to zero and then reduced his basis in loans he made to the corporation. The corporation now has net income. What does that income restore first?",
    "choices": [
      "Debt basis, up to the earlier reduction, before stock basis",
      "Stock basis, because debt basis is restored only when the loan is repaid",
      "Stock basis and debt basis pro rata to their original amounts",
      "Neither; net income increases AAA and basis rises only when distributed"
    ],
    "answer": 0,
    "explain": "Section 1366(d) lets losses beyond stock basis be deducted against the shareholder's basis in direct loans to the corporation. Section 1367(b)(2)(B) then requires a later year's net increase to restore that debt basis first, to the extent it was reduced, before any increase goes to stock basis. Restoring debt basis first matters because repayment of a loan whose basis is below face produces gain. There is no pro rata rule, and basis rises with income whether or not it is distributed."
  },
  {
    "id": "scorp-4",
    "section": "scorp",
    "topic": "Cash distributions",
    "difficulty": "easy",
    "q": "An S corporation that has never been a C corporation distributes $50,000 cash to its sole shareholder, whose stock basis is $35,000. How is the distribution taxed to the shareholder?",
    "choices": [
      "$35,000 tax-free return of basis and $15,000 capital gain",
      "$50,000 tax-free, because S corporation income has already been taxed",
      "$50,000 dividend income, because the distribution exceeds basis",
      "$35,000 tax-free return of basis and $15,000 ordinary income"
    ],
    "answer": 0,
    "explain": "Section 1368(b) governs an S corporation with no accumulated earnings and profits: the distribution first reduces stock basis tax-free, and the excess over basis is treated as gain from the sale of the stock, a capital gain. Dividend treatment arises only from E&P carried over from C corporation years, which this corporation never had. Basis already measures what has been taxed, so a distribution beyond it cannot be wholly tax-free."
  },
  {
    "id": "scorp-5",
    "section": "scorp",
    "topic": "Shareholder-level accounts",
    "difficulty": "medium",
    "q": "This year an S corporation earns ordinary income plus $5,000 of municipal bond interest, and distributes $20,000 to its shareholders. Which item is excluded from its accumulated adjustments account?",
    "choices": [
      "The $5,000 municipal interest, which is tracked in the other adjustments account",
      "The $20,000 distribution, which reduces only the shareholders' stock basis",
      "The ordinary income, which is recorded only in retained earnings",
      "None of them; income, exempt interest and distributions all adjust the account"
    ],
    "answer": 0,
    "explain": "Under Reg. 1.1368-2 the AAA is increased by taxable income items and decreased by losses, deductions and distributions, so the ordinary income and the $20,000 distribution both adjust it. Tax-exempt income and the expenses related to it are kept out of AAA and tracked in the other adjustments account (OAA) instead. The exempt interest still increases shareholder stock basis under section 1367, so basis and AAA diverge by that amount."
  },
  {
    "id": "scorp-6",
    "section": "scorp",
    "topic": "Shareholder reporting",
    "difficulty": "easy",
    "q": "A calendar-year S corporation earns $120,000 and distributes nothing. Its two equal shareholders held their stock all year. What does each shareholder report for the year?",
    "choices": [
      "$60,000 of ordinary income from a Schedule K-1",
      "$60,000 of dividend income from a Form 1099-DIV",
      "Nothing, because no distribution was made",
      "Nothing, because the corporation pays tax at the entity level"
    ],
    "answer": 0,
    "explain": "Under section 1366 an S corporation's items pass through to the shareholders pro rata, per share and per day, and are taxed to them in the year earned whether or not anything is distributed, so each 50% shareholder reports $60,000 of ordinary income from the Schedule K-1 the corporation issues. Distributions are not dividends while the corporation has no C-year earnings and profits, and an S corporation generally pays no entity-level income tax. Form 1120-S itself is due the 15th day of the third month after year end (section 6072(b)), with a six-month extension."
  },
  {
    "id": "scorp-7",
    "section": "scorp",
    "topic": "Shareholder-employee benefits",
    "difficulty": "medium",
    "q": "An S corporation pays $9,000 of health insurance premiums under its employee plan for its 60% shareholder, who is also an employee. How is the payment treated?",
    "choices": [
      "Included in her W-2 wages, exempt from FICA, and deductible by her as self-employed health insurance",
      "Excluded from her W-2 wages as a tax-free fringe benefit and deducted by the corporation",
      "Included in her W-2 wages, subject to FICA, and deductible by her only as an itemized medical expense",
      "Treated as a nondeductible distribution to her that reduces her stock basis"
    ],
    "answer": 0,
    "explain": "Section 1372 treats a more-than-2% shareholder like a partner for fringe benefits, so the section 106 exclusion is lost and the premiums are compensation reported in Box 1 of her W-2 and deducted by the corporation as wages. Because the premiums are paid under a plan for employees generally, they are not FICA wages (Rev. Rul. 91-26). Notice 2008-1 then lets the shareholder deduct the amount above the line as self-employed health insurance under section 162(l), while rank-and-file employees keep the tax-free exclusion."
  },
  {
    "id": "scorp-8",
    "section": "scorp",
    "topic": "Allocation when stock changes hands",
    "difficulty": "medium",
    "q": "A 50% shareholder of a calendar-year S corporation sells all her stock on March 31. Absent any special election, how is the year's ordinary income allocated to her?",
    "choices": [
      "Her 50% share of the year's income, prorated for the 90 days she held the stock",
      "Her 50% share of the income the corporation actually earned through March 31",
      "Nothing, because she owned no stock on the last day of the tax year",
      "Her 50% share of the full year's income, since she was a shareholder during the year"
    ],
    "answer": 0,
    "explain": "Section 1377(a)(1) allocates every S corporation item pro rata per share, per day, so a selling shareholder picks up her share of the whole year's income multiplied by the fraction of the year she held the stock. Allocating income actually earned through the sale date is available only if the corporation and all affected shareholders elect to close the books under section 1377(a)(2) when a shareholder's entire interest terminates. Ownership on the last day of the year is irrelevant."
  },
  {
    "id": "entity-3",
    "section": "estates",
    "topic": "Entity classification",
    "difficulty": "medium",
    "q": "A domestic LLC with two members makes no entity classification election. How is it treated for federal tax purposes?",
    "choices": [
      "As a C corporation",
      "As a partnership",
      "As a disregarded entity",
      "As an S corporation"
    ],
    "answer": 1,
    "explain": "Under the check-the-box rules, a multi-member domestic LLC defaults to partnership treatment and a single-member LLC defaults to a disregarded entity. Either may elect corporate treatment on Form 8832."
  },
  {
    "id": "estates-21",
    "section": "estates",
    "topic": "Annual information returns",
    "difficulty": "easy",
    "q": "Which organization is exempt from filing an annual Form 990 information return?",
    "choices": [
      "A private foundation that had no income during the year",
      "A 501(c)(3) charity with $300,000 of gross receipts",
      "A 501(c)(4) social welfare organization with $500,000 of gross receipts",
      "A church that received $2 million of contributions"
    ],
    "answer": 3,
    "explain": "Churches, their integrated auxiliaries, and conventions or associations of churches are excused from annual filing regardless of size. A private foundation files Form 990-PF every year even with no income, and the other two file Form 990, since $300,000 of receipts already exceeds the $200,000 ceiling for Form 990-EZ."
  },
  {
    "id": "estates-22",
    "section": "estates",
    "topic": "Foundation classification",
    "difficulty": "medium",
    "q": "What most likely causes a 501(c)(3) organization to be classified as a private foundation rather than a public charity?",
    "choices": [
      "It is organized as a trust rather than a nonprofit corporation",
      "It makes grants to other charities instead of running its own programs",
      "Its gross receipts exceed the Form 990-EZ threshold",
      "It draws its support from a few donors rather than the general public"
    ],
    "answer": 3,
    "explain": "Every 501(c)(3) is presumed to be a private foundation unless it shows broad public support, roughly a third of its support from the public or government, or qualifies as a church, school or hospital. Legal form, grant-making versus running programs, and size do not decide it; a family-funded grant maker is the classic private foundation."
  },
  {
    "id": "estates-23",
    "section": "estates",
    "topic": "Political activity",
    "difficulty": "easy",
    "q": "A 501(c)(3) food bank's newsletter urges readers to vote for a named candidate for the state legislature. Which rule applies?",
    "choices": [
      "It is permitted as long as campaign activity is not a substantial part of its work",
      "It is permitted if the organization elects the expenditure test for the year",
      "It is prohibited outright, and the organization risks losing its exemption",
      "It is permitted if the newsletter is paid for from member dues rather than donations"
    ],
    "answer": 2,
    "explain": "Intervening in a campaign for or against a candidate is an absolute bar for a 501(c)(3): the exemption is at risk, and section 4955 adds an excise tax on the political expenditure. The substantial-part and expenditure tests govern lobbying on legislation, not candidate endorsements, and the funding source is irrelevant."
  },
  {
    "id": "estates-15",
    "section": "estates",
    "topic": "Exempt organizations",
    "difficulty": "medium",
    "q": "Which condition would jeopardize an organization's section 501(c)(3) status?",
    "choices": [
      "Paying reasonable salaries to the employees who run its programs",
      "Distributing net earnings to a founder beyond reasonable compensation",
      "Charging fees to the public for its charitable services",
      "Holding investment assets that generate dividend income"
    ],
    "answer": 1,
    "explain": "Private inurement — any part of net earnings benefiting an insider beyond reasonable compensation — is fatal to exemption. Reasonable salaries, program fees, and investment holdings are all permissible."
  },
  {
    "id": "llc-1",
    "section": "estates",
    "topic": "Single-member LLC",
    "difficulty": "medium",
    "q": "A domestic LLC with one individual owner makes no classification election and runs a retail store with several employees. How is it treated for federal tax purposes?",
    "choices": [
      "Disregarded for income tax, with the store on the owner's Schedule C, but a separate entity for employment taxes",
      "A partnership, with the owner receiving a Schedule K-1 and the LLC filing Form 1065 for the store",
      "Disregarded for all federal taxes, so payroll taxes are reported under the owner's Social Security number",
      "A C corporation filing Form 1120 unless it files Form 8832 to be disregarded"
    ],
    "answer": 0,
    "explain": "Under Reg. 301.7701-3(b) a single-member domestic LLC that makes no election is disregarded, so the store's results go on the owner's Schedule C (Schedule E for rental property). Reg. 301.7701-2(c)(2)(iv) nonetheless treats the LLC as a corporation for employment taxes and certain excise taxes, so it reports payroll under its own EIN. A partnership needs two or more members, and corporate treatment requires an election."
  },
  {
    "id": "llc-2",
    "section": "estates",
    "topic": "Classification election timing",
    "difficulty": "medium",
    "q": "An LLC files Form 8832 on June 1 electing to be taxed as a corporation. What is the earliest and the latest effective date it may choose?",
    "choices": [
      "75 days before filing through 12 months after filing",
      "The first day of the current tax year through the last day of that year",
      "The filing date through 12 months after filing",
      "The first day of the following tax year only"
    ],
    "answer": 0,
    "explain": "Reg. 301.7701-3(c)(1)(iii) lets the election take effect on a date no more than 75 days before and no more than 12 months after the form is filed; a date outside the window is moved to the nearest boundary, and a blank date means the filing date. An LLC that wants S status skips Form 8832 and files only Form 2553, which is deemed to include the corporate election. Once effective, the classification generally cannot be changed again by election for 60 months."
  },
  {
    "id": "llc-3",
    "section": "estates",
    "topic": "Donor treatment of payments",
    "difficulty": "medium",
    "q": "A business owner pays $500 of annual dues to a chamber of commerce and gives $500 to a civic league that lobbies for zoning reform. Which payment is a charitable contribution?",
    "choices": [
      "Neither; only gifts to 501(c)(3) organizations and a few other listed donees qualify",
      "Only the civic league gift, because 501(c)(4) organizations are tax-exempt",
      "Only the chamber dues, because a business league is tax-exempt under 501(c)(6)",
      "Both, because each organization is exempt from tax under section 501(c)"
    ],
    "answer": 0,
    "explain": "Section 170(c) limits the charitable deduction to gifts to 501(c)(3) organizations, governmental units and a few others such as veterans' organizations. A chamber of commerce is a 501(c)(6) business league and a civic league is a 501(c)(4) social welfare organization, which may lobby without limit; both are exempt from tax, but contributions to them are not charitable. The chamber dues may still be an ordinary business expense under section 162, except for any portion spent on lobbying."
  },
  {
    "id": "llc-4",
    "section": "estates",
    "topic": "Club income",
    "difficulty": "medium",
    "q": "A country club exempt under section 501(c)(7) receives greens fees from members, $8,000 of interest on its reserve fund and $6,000 from nonmember banquets. Which amounts are taxable?",
    "choices": [
      "The $8,000 interest and the $6,000 nonmember receipts",
      "Only the $6,000 nonmember receipts",
      "Only the $8,000 interest income",
      "Nothing, because the club is exempt on all of its receipts"
    ],
    "answer": 0,
    "explain": "Section 512(a)(3) defines a social club's unrelated business taxable income as all gross income other than exempt function income, meaning dues, fees and charges paid by members for club services. Investment income and receipts from nonmembers are therefore both taxed, unlike a 501(c)(3) charity, whose passive investment income is excluded under section 512(b). The members' greens fees stay exempt."
  }
];
