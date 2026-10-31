/* AUD Blitz question bank -- CPA Exam Auditing and Attestation, 16 sections, 280 questions.
   Original content authored against the AICPA AUD blueprint and reviewed for
   technical accuracy and exam craft. Choice order is shuffled at display time;
   'answer' is the index of the correct choice.
   Written against the clarified AICPA standards (AU-C) for nonissuers, calling
   out PCAOB, SSARS, SSAE or GAGAS wherever the answer turns on which framework
   applies -- that distinction is itself heavily tested.
   FAR_SECTIONS/FAR_QUESTIONS global names keep the engine identical to FAR Blitz. */

var FAR_SECTIONS = [
  {
    "id": "indep",
    "name": "Independence",
    "short": "Independence",
    "emoji": "🛡️"
  },
  {
    "id": "ethics",
    "name": "Ethics & Quality Management",
    "short": "Ethics & QM",
    "emoji": "⚖️"
  },
  {
    "id": "engmt",
    "name": "Engagement Acceptance & Documentation",
    "short": "Engagement & Docs",
    "emoji": "📋"
  },
  {
    "id": "risk",
    "name": "Audit Risk & Materiality",
    "short": "Risk & Materiality",
    "emoji": "🎚️"
  },
  {
    "id": "icfr",
    "name": "Internal Control & IT Controls",
    "short": "Internal Control",
    "emoji": "🔒"
  },
  {
    "id": "fraud",
    "name": "Fraud & Professional Skepticism",
    "short": "Fraud",
    "emoji": "🔎"
  },
  {
    "id": "plan",
    "name": "Planning, Specialists & Group Audits",
    "short": "Planning",
    "emoji": "🗺️"
  },
  {
    "id": "evid",
    "name": "Audit Evidence & Assertions",
    "short": "Evidence",
    "emoji": "🧾"
  },
  {
    "id": "sample",
    "name": "Audit Sampling",
    "short": "Sampling",
    "emoji": "🎲"
  },
  {
    "id": "confirm",
    "name": "Confirmations & Observation",
    "short": "Confirmations",
    "emoji": "✉️"
  },
  {
    "id": "estim",
    "name": "Estimates, Fair Value & Related Parties",
    "short": "Estimates",
    "emoji": "📊"
  },
  {
    "id": "complete",
    "name": "Completing the Audit",
    "short": "Completion",
    "emoji": "🏁"
  },
  {
    "id": "report",
    "name": "The Auditor's Report",
    "short": "Reporting",
    "emoji": "📄"
  },
  {
    "id": "other",
    "name": "Reviews, Compilations & Attestation",
    "short": "Other Engagements",
    "emoji": "📑"
  },
  {
    "id": "gov",
    "name": "GAGAS, Single Audits & PCAOB",
    "short": "Government & PCAOB",
    "emoji": "🏛️"
  },
  {
    "id": "cycles",
    "name": "Transaction Cycles & Data",
    "short": "Cycles & Data",
    "emoji": "🔄"
  }
];

var FAR_QUESTIONS = [
  {
    "id": "indep-1",
    "section": "indep",
    "topic": "Covered members",
    "difficulty": "medium",
    "q": "Which person is NOT a covered member with respect to an audit client?",
    "choices": [
      "A staff auditor assigned to the engagement team",
      "A partner in the office where the lead engagement partner practices",
      "A tax partner who billed 40 hours of nonattest work to the client",
      "A partner in a distant office with no involvement in the engagement"
    ],
    "answer": 3,
    "explain": "Covered members include the engagement team, those who can influence it, partners or managers who provide 10 or more hours of nonattest services to the client in a year, and partners in the lead partner's office. An uninvolved partner elsewhere in the firm is not one."
  },
  {
    "id": "indep-2",
    "section": "indep",
    "topic": "Financial interests",
    "difficulty": "medium",
    "q": "A covered member owns an immaterial number of shares directly in an audit client. What is the effect on independence?",
    "choices": [
      "Independence is impaired regardless of the amount",
      "Independence is impaired only if the holding is material",
      "Independence is preserved if the shares are placed in a blind trust",
      "Independence is preserved if the holding is disclosed to the client"
    ],
    "answer": 0,
    "explain": "Any direct financial interest in an attest client impairs independence no matter how small. Materiality matters only for indirect interests, such as shares held through a diversified mutual fund."
  },
  {
    "id": "indep-3",
    "section": "indep",
    "topic": "Immediate family",
    "difficulty": "medium",
    "q": "The spouse of a covered member is employed by the audit client. When is independence impaired?",
    "choices": [
      "When the spouse works as a clerk in the client's accounts payable department",
      "When the spouse holds a key position at the client",
      "When the spouse has been employed by the client for more than one year",
      "When the spouse's employment began after the covered member joined the engagement"
    ],
    "answer": 1,
    "explain": "Employment by an attest client impairs independence when the immediate family member holds a key position — one with significant influence over financial statement content. Routine clerical or non-key roles do not."
  },
  {
    "id": "indep-4",
    "section": "indep",
    "topic": "Permitted loans",
    "difficulty": "medium",
    "q": "Which new loan from a financial institution audit client, made under its normal lending terms, does NOT impair a covered member's independence?",
    "choices": [
      "An unsecured personal line of credit used for home repairs",
      "An automobile loan collateralized by the automobile",
      "A margin account secured by a portfolio of marketable securities",
      "An unsecured business loan to the member's own practice"
    ],
    "answer": 1,
    "explain": "Permitted loans are narrow: auto loans collateralized by the auto, loans fully collateralized by cash deposits at the institution or by the cash surrender value of insurance, and credit card balances paid down to a small amount by the due date."
  },
  {
    "id": "indep-5",
    "section": "indep",
    "topic": "Nonattest services",
    "difficulty": "medium",
    "q": "A firm proposes to perform bookkeeping for a nonissuer audit client. What is required to keep independence intact?",
    "choices": [
      "The service must be performed by a separately staffed affiliate of the audit firm",
      "The client must designate someone with suitable skill and experience to oversee it",
      "Written approval must be obtained from the state board before the work begins",
      "The engagement partner must personally review and approve every journal entry"
    ],
    "answer": 1,
    "explain": "Nonattest services are permitted for nonissuers only if the auditor avoids management responsibilities and the client designates someone with suitable skill, knowledge and experience to oversee the work, evaluate the results and accept responsibility for them. Issuer audit clients fall under separate SEC and PCAOB rules."
  },
  {
    "id": "indep-6",
    "section": "indep",
    "topic": "Management responsibilities",
    "difficulty": "medium",
    "q": "Which activity would constitute assuming a management responsibility and impair independence?",
    "choices": [
      "Proposing adjusting journal entries for management's review and approval",
      "Authorizing the client's payment of vendor invoices",
      "Preparing depreciation schedules from client-approved policies",
      "Providing training on newly issued accounting standards"
    ],
    "answer": 1,
    "explain": "Authorizing or executing transactions on the client's behalf is a management responsibility and always impairs independence. Proposing entries that management reviews and approves, and performing mechanical work under client-set policies, do not."
  },
  {
    "id": "indep-7",
    "section": "indep",
    "topic": "Partner rotation",
    "difficulty": "medium",
    "q": "Under SEC rules, how long may the lead audit partner serve an issuer before rotating off?",
    "choices": [
      "Three consecutive years, with a two-year time out",
      "Five consecutive years, with a five-year time out",
      "Seven consecutive years, with a two-year time out",
      "Ten consecutive years, with a five-year time out"
    ],
    "answer": 1,
    "explain": "The lead and concurring partners rotate after five consecutive years and must stay off for five years. Other audit partners rotate after seven years with a two-year time out. AICPA rules impose no rotation for nonissuers."
  },
  {
    "id": "indep-8",
    "section": "indep",
    "topic": "Employment with an audit client",
    "difficulty": "medium",
    "q": "A senior member of an issuer's audit engagement team wants to become that client's controller. What does the SEC require?",
    "choices": [
      "A one-year cooling-off period before beginning the role",
      "Immediate resignation from the firm and nothing further",
      "Approval from the client's audit committee only",
      "Disclosure of the offer in the client's proxy statement"
    ],
    "answer": 0,
    "explain": "Under the SEC rule the firm is not independent if a former engagement team member takes a financial reporting oversight role at the issuer having worked on the audit in the year before audit procedures began for the period that includes the hire. In practice, a one-year cooling-off period; the narrow exceptions (a business combination, or an emergency the audit committee approves) don't apply here."
  },
  {
    "id": "indep-9",
    "section": "indep",
    "topic": "Contingent fees",
    "difficulty": "easy",
    "q": "For which engagement may a CPA firm accept a contingent fee?",
    "choices": [
      "A cost-saving consulting project for a client that receives no attest services",
      "Tax planning for a client whose financial statements the firm audits",
      "Preparing an original tax return for a client with no attest services",
      "Internal control consulting for a client whose statements the firm reviews"
    ],
    "answer": 0,
    "explain": "Contingent fees are banned for any client for whom the firm performs an audit, review, certain compilations or an examination of prospective financial information, so consulting for a non-attest client is allowed. Separately, a contingent fee is never allowed for preparing an original return; amended returns and refund claims have only narrow exceptions."
  },
  {
    "id": "indep-10",
    "section": "indep",
    "topic": "Unpaid fees",
    "difficulty": "medium",
    "q": "How does the AICPA Code treat unpaid fees from an attest client?",
    "choices": [
      "The firm evaluates the threats; independence is impaired if they can't be made acceptable",
      "Independence is impaired only once any fee is more than one year past due",
      "Independence is impaired whenever any invoice is unpaid when the report is issued",
      "Unpaid fees never affect independence once disclosed to those charged with governance"
    ],
    "answer": 0,
    "explain": "Since 31 December 2022 the Code's Unpaid Fees interpretation is principles-based: the firm weighs factors such as the fees' significance and age and the payment arrangements. If the threats can't be reduced to an acceptable level, independence is impaired. The old one-year test is no longer the only one, and disclosure alone is not a safeguard."
  },
  {
    "id": "indep-11",
    "section": "indep",
    "topic": "Litigation",
    "difficulty": "medium",
    "q": "An audit client's management states it intends to sue the firm alleging deficiencies in last year's audit, and the auditor concludes a claim will probably be filed. What is the effect?",
    "choices": [
      "Independence is impaired because the interests are now adverse",
      "Independence is preserved until the suit is actually filed",
      "Independence is preserved if the firm carries adequate insurance",
      "Independence is impaired only if the claim exceeds the audit fee"
    ],
    "answer": 0,
    "explain": "A claim by management over the audit work, once the auditor concludes it will probably be filed, creates adverse interests that impair independence. Litigation unrelated to the engagement is not automatically harmless: its nature and materiality to both the client and the firm are weighed."
  },
  {
    "id": "indep-12",
    "section": "indep",
    "topic": "Board positions at clients",
    "difficulty": "medium",
    "q": "A partner is asked to serve as an honorary director of a not-for-profit audit client. When is independence preserved?",
    "choices": [
      "When the partner neither votes nor otherwise participates in management",
      "When the partner attends and votes at meetings but abstains from all financial decisions",
      "When the position is unpaid and the term is under one year",
      "When the partner discloses the directorship in the auditor's report each year"
    ],
    "answer": 0,
    "explain": "An honorary directorship is permitted if the position is identified as honorary on all materials, the partner's participation is limited to the use of their name, and they neither vote nor otherwise participate in management."
  },
  {
    "id": "indep-13",
    "section": "indep",
    "topic": "Threats and safeguards",
    "difficulty": "medium",
    "q": "A firm audits financial statements that include amounts derived from a system the firm designed. Which threat does this create?",
    "choices": [
      "Advocacy threat",
      "Self-review threat",
      "Familiarity threat",
      "Undue influence threat"
    ],
    "answer": 1,
    "explain": "Self-review arises when the auditor evaluates the results of their own prior work. Advocacy comes from promoting the client's position, familiarity from a long or close relationship, and undue influence from client pressure."
  },
  {
    "id": "indep-14",
    "section": "indep",
    "topic": "Independence in appearance",
    "difficulty": "easy",
    "q": "Why does the Code require independence in appearance as well as in fact?",
    "choices": [
      "Because a reasonable and informed third party must also perceive the auditor as unbiased",
      "Because appearance is easier for regulators to measure than actual bias",
      "Because state boards test only the appearance standard",
      "Because independence in fact cannot be verified, so the Code uses the appearance test in its place"
    ],
    "answer": 0,
    "explain": "Independence in fact is the auditor's actual objectivity; independence in appearance is whether a reasonable and informed third party would conclude integrity and objectivity were compromised. An audit fails its purpose if users cannot trust it."
  },
  {
    "id": "indep-15",
    "section": "indep",
    "topic": "Nonaudit services for issuers",
    "difficulty": "medium",
    "q": "An issuer's auditor wants to provide a permitted tax service to that client. What is required first?",
    "choices": [
      "Pre-approval by the client's audit committee",
      "A written waiver from the SEC's Office of the Chief Accountant",
      "Ratification by a majority of the client's shareholders",
      "A second firm's concurring opinion on independence"
    ],
    "answer": 0,
    "explain": "Sarbanes-Oxley requires the audit committee to pre-approve audit and permitted non-audit services for an issuer, subject to narrow exceptions. Pre-approval cannot make a prohibited service permissible, such as most bookkeeping or internal audit outsourcing."
  },
  {
    "id": "indep-16",
    "section": "indep",
    "topic": "When independence is required",
    "difficulty": "easy",
    "q": "For which engagement is the accountant NOT required to be independent?",
    "choices": [
      "An audit of financial statements",
      "A review of financial statements",
      "A compilation of financial statements",
      "An examination of prospective financial statements"
    ],
    "answer": 2,
    "explain": "Independence is required for audits, reviews and examinations. A compilation may be performed without independence, but the accountant must disclose the lack of independence in the compilation report."
  },
  {
    "id": "indep-17",
    "section": "indep",
    "topic": "Plan audit financial interests",
    "difficulty": "medium",
    "q": "A firm has audited a company's 401(k) plan for years. During the plan year, a partner in another office with no role on the plan or sponsor buys 100 shares of the listed sponsor. Under DOL rules, what follows?",
    "choices": [
      "No effect, since the partner is not a covered member and owns far under 5%",
      "No effect, since the shares are in the plan sponsor rather than the plan",
      "Independence is impaired, since the rule reaches every partner in the firm",
      "Independence is impaired unless the partner sells before the report date"
    ],
    "answer": 2,
    "explain": "The DOL treats every partner of the firm as a member, and a member's direct financial interest in the plan or its sponsor impairs independence. Under the AICPA Code alone this partner is not a covered member, but the Code requires following the stricter DOL rule. On a continuing engagement a later sale cannot undo a holding during the plan year."
  },
  {
    "id": "indep-18",
    "section": "indep",
    "topic": "Plan audit nonattest services",
    "difficulty": "medium",
    "q": "A firm's staff post a 401(k) plan's contributions and benefit payments to its general ledger. The plan administrator has suitable skill and approves every entry. Under DOL rules, may the firm also audit the plan?",
    "choices": [
      "Yes, since a skilled administrator oversees the work and accepts responsibility",
      "No, since maintaining the plan's financial records impairs independence",
      "Yes, provided different staff do the bookkeeping and the audit fieldwork",
      "No, since the AICPA Code bars all bookkeeping services for attest clients"
    ],
    "answer": 1,
    "explain": "The DOL deems an accountant not independent if the accountant or a member of the firm maintains the plan's financial records, with no exception for client oversight. The AICPA Code would allow the service when a skilled administrator takes responsibility, but for an ERISA plan audit the stricter DOL rule governs."
  },
  {
    "id": "indep-19",
    "section": "indep",
    "topic": "New plan audit engagements",
    "difficulty": "medium",
    "q": "A firm is asked to audit a plan for the first time. A partner owned a stake in the closely held plan sponsor during the plan year and sold it before the engagement began. Under DOL rules, is the firm independent?",
    "choices": [
      "Yes, since the stake was sold before the period of professional engagement",
      "Yes, provided the partner is not on the engagement team or in its office",
      "No, since a partner's direct interest bars the firm for 3 years after sale",
      "No, since selling before the engagement cures only publicly traded holdings"
    ],
    "answer": 3,
    "explain": "IB 2022-01, which replaced IB 75-9, lets a firm take a new plan audit despite sponsor holdings in the plan year only if they were publicly traded and sold before the period of professional engagement. A closely held stake still impairs. Every partner is a member, a direct interest counts at any size, and there is no waiting period after a sale: the holding itself decides it."
  },
  {
    "id": "ethics-1",
    "section": "ethics",
    "topic": "Confidential information",
    "difficulty": "medium",
    "q": "Which disclosure of confidential client information does NOT require the client's consent?",
    "choices": [
      "Responding to a validly issued and enforceable subpoena",
      "Providing the information to a bank evaluating a loan application from the client",
      "Sharing the information with a successor auditor",
      "Discussing the client's results at a professional conference"
    ],
    "answer": 0,
    "explain": "An enforceable subpoena or summons overrides the confidentiality rule, as do peer reviews, ethics investigations and a prospective purchaser's review of the practice under a confidentiality agreement. A successor auditor and a lender both require the client's consent."
  },
  {
    "id": "ethics-2",
    "section": "ethics",
    "topic": "Acts discreditable",
    "difficulty": "medium",
    "q": "Which action is an act discreditable to the profession?",
    "choices": [
      "Refusing to return client-provided records after a fee dispute",
      "Advertising the firm's services in a local newspaper",
      "Charging a fee lower than a competing firm quoted",
      "Declining an engagement outside the firm's competence"
    ],
    "answer": 0,
    "explain": "Withholding a client's own records to force payment is an act discreditable, regardless of state lien law. Truthful advertising, competitive pricing and declining work beyond one's competence are all proper."
  },
  {
    "id": "ethics-3",
    "section": "ethics",
    "topic": "Advertising",
    "difficulty": "easy",
    "q": "Which form of advertising violates the Code of Professional Conduct?",
    "choices": [
      "Stating the firm's specialties and years in practice in a paid newspaper ad",
      "Implying an ability to influence a regulator on the client's behalf",
      "Listing fees for standard services in a brochure",
      "Publicizing awards the firm has received"
    ],
    "answer": 1,
    "explain": "Advertising is permitted so long as it is not false, misleading or deceptive. Creating false expectations of favorable results, or implying influence over a court or regulator, crosses that line."
  },
  {
    "id": "ethics-4",
    "section": "ethics",
    "topic": "Subordination of judgment",
    "difficulty": "medium",
    "q": "A CPA in industry disagrees with a superior's accounting treatment that would materially misstate the financials. What does the Code require?",
    "choices": [
      "Defer to the superior, who holds the reporting responsibility for the entity",
      "Evaluate the threat and escalate within the organization if it is misleading",
      "Resign immediately without notifying anyone inside the organization",
      "Report the matter directly to the entity's external auditor"
    ],
    "answer": 1,
    "explain": "The subordination of judgment rule requires evaluating whether the position creates a significant threat to integrity and objectivity, escalating to higher levels if so, and considering resignation only if the matter remains unresolved."
  },
  {
    "id": "ethics-5",
    "section": "ethics",
    "topic": "Competence",
    "difficulty": "easy",
    "q": "A firm is offered an engagement in an industry it has never served. What does due care require?",
    "choices": [
      "Declining the engagement outright, since competence cannot be acquired",
      "Accepting only if the firm can gain the competence before completing the work",
      "Accepting and disclaiming competence in the industry in the report",
      "Accepting only under a contingent fee tied to the engagement's outcome"
    ],
    "answer": 1,
    "explain": "Competence may be acquired through research, consultation or hiring specialists. What the Code forbids is undertaking work the firm cannot reasonably expect to complete with professional competence."
  },
  {
    "id": "ethics-6",
    "section": "ethics",
    "topic": "Conflicts of interest",
    "difficulty": "medium",
    "q": "A firm is asked to serve two clients whose interests conflict in a transaction. What may the firm do?",
    "choices": [
      "Proceed after disclosing the conflict and obtaining each affected client's consent",
      "Proceed without disclosure if no confidential information is shared",
      "Proceed only if the engagements are handled in different offices",
      "Proceed if each engagement letter contains a confidentiality clause covering the other client"
    ],
    "answer": 0,
    "explain": "A conflict of interest may be managed if the member believes the work can be performed objectively, discloses the conflict, and obtains consent from each affected client. Safeguards such as separate teams supplement, but do not replace, that consent."
  },
  {
    "id": "ethics-7",
    "section": "ethics",
    "topic": "Records requests",
    "difficulty": "medium",
    "q": "A former client requests its records after terminating the engagement. Which must the firm return even when fees are unpaid?",
    "choices": [
      "The firm's audit working papers",
      "Records the client originally provided to the firm",
      "The firm's internal review notes",
      "Draft financial statements the firm prepared"
    ],
    "answer": 1,
    "explain": "Records the client provided must be returned on request even if fees are unpaid. The Code treats member-prepared records, the member's work products and working papers separately; working papers are the firm's property, and some items may be withheld for unpaid fees only under the Code's conditions."
  },
  {
    "id": "ethics-8",
    "section": "ethics",
    "topic": "System of quality management",
    "difficulty": "medium",
    "q": "What approach does the AICPA's quality management standard require a firm to take?",
    "choices": [
      "A checklist approach applying the same uniform procedures to every engagement",
      "A risk-based approach setting quality objectives and designing responses",
      "An annual external inspection of every engagement the firm completed",
      "A statistical sampling approach to selecting engagement files for review"
    ],
    "answer": 1,
    "explain": "SQMS No. 1 replaced the older quality control model with a risk-based system: the firm sets quality objectives, identifies and assesses quality risks, and designs responses tailored to its own circumstances."
  },
  {
    "id": "ethics-9",
    "section": "ethics",
    "topic": "Quality management components",
    "difficulty": "medium",
    "q": "Which is NOT a component of a firm's system of quality management?",
    "choices": [
      "Governance and leadership",
      "Acceptance and continuance of client relationships",
      "Engagement performance",
      "Setting audit fees at market rates"
    ],
    "answer": 3,
    "explain": "The eight components are the firm's risk assessment process, governance and leadership, relevant ethical requirements, acceptance and continuance, engagement performance, resources, information and communication, and the monitoring and remediation process. Fee levels are a business decision, not a component."
  },
  {
    "id": "ethics-10",
    "section": "ethics",
    "topic": "Engagement quality review",
    "difficulty": "medium",
    "q": "Under SAS 146 and SQMS No. 2, when must a required engagement quality review be completed?",
    "choices": [
      "Before the auditor's report is dated",
      "Within 60 days after the report release date",
      "At the same time the audit file is assembled",
      "Before the next annual peer review"
    ],
    "answer": 0,
    "explain": "Under the AICPA standards the engagement partner may not date the report until the engagement quality review is complete. PCAOB AS 1220 sets its gate differently, as concurring approval before release. The review never shifts responsibility away from the engagement partner."
  },
  {
    "id": "ethics-11",
    "section": "ethics",
    "topic": "Monitoring and remediation",
    "difficulty": "medium",
    "q": "A firm's monitoring activities identify a deficiency in its quality management system. What must the firm do?",
    "choices": [
      "Investigate the root cause and design remedial actions",
      "Restate all engagement reports issued during the period",
      "Report the deficiency to the state board of accountancy",
      "Suspend new client acceptance until the next peer review"
    ],
    "answer": 0,
    "explain": "Identified deficiencies must be evaluated for root cause and addressed with remedial action, with follow-up on whether that action worked. Only rarely does a deficiency mean a previously issued report was wrong."
  },
  {
    "id": "ethics-12",
    "section": "ethics",
    "topic": "Peer review",
    "difficulty": "easy",
    "q": "What is the purpose of a System Review under the AICPA Peer Review Program?",
    "choices": [
      "To re-audit a representative sample of the firm's completed engagements",
      "To evaluate whether the firm's quality management system works as designed",
      "To determine whether the firm's fees are reasonable for the market",
      "To certify individual staff members as competent to perform audits"
    ],
    "answer": 1,
    "explain": "A System Review evaluates the design of the firm's system of quality management and the firm's compliance with it and with professional standards. It does not re-perform client audits. An Engagement Review, for firms that perform no audits or examinations, looks at selected engagements instead."
  },
  {
    "id": "ethics-13",
    "section": "ethics",
    "topic": "Form of practice",
    "difficulty": "medium",
    "q": "Which firm name would violate the Code?",
    "choices": [
      "A name that includes a retired partner's surname",
      "A name suggesting the firm is affiliated with a government agency",
      "A name including the words \"and Associates\" with two owners",
      "A fictitious name registered with the state board"
    ],
    "answer": 1,
    "explain": "Firm names may not be false, misleading or deceptive, and implying a government or public-body affiliation is deceptive. Retired partners' names, fictitious names and descriptive suffixes are all acceptable if not misleading."
  },
  {
    "id": "ethics-14",
    "section": "ethics",
    "topic": "Rules outside attest work",
    "difficulty": "easy",
    "q": "Which rule applies to a CPA performing tax services, where independence is not required?",
    "choices": [
      "Integrity and objectivity still apply in full",
      "No ethical rules apply outside attest engagements",
      "Only the confidentiality rule applies",
      "Only state board rules apply"
    ],
    "answer": 0,
    "explain": "Integrity and objectivity apply to all professional services. Independence is the narrower requirement that attaches only to attest engagements."
  },
  {
    "id": "ethics-15",
    "section": "ethics",
    "topic": "Engagement partner responsibility",
    "difficulty": "medium",
    "q": "Who bears overall responsibility for the quality of an individual audit engagement?",
    "choices": [
      "The engagement partner",
      "The engagement quality reviewer",
      "The firm's managing partner",
      "The audit committee of the client"
    ],
    "answer": 0,
    "explain": "The engagement partner is responsible for the overall quality of the engagement, including direction, supervision and review, and must be satisfied that sufficient appropriate evidence was obtained before signing the report."
  },
  {
    "id": "ethics-16",
    "section": "ethics",
    "topic": "Documenting standards departures",
    "difficulty": "medium",
    "q": "An auditor judges it necessary to depart from a presumptively mandatory requirement of the auditing standards. What must be done?",
    "choices": [
      "Obtain the client's written approval for the departure in advance",
      "Document the justification and how alternatives met the objective",
      "Obtain a waiver from the AICPA before performing the engagement",
      "Disclose the departure in the basis for opinion section of the report"
    ],
    "answer": 1,
    "explain": "A presumptively mandatory requirement, signaled by \"should,\" may be departed from in rare circumstances if the auditor documents why and how alternative procedures achieved the requirement's objective. Unconditional requirements, signaled by \"must,\" allow no departure."
  },
  {
    "id": "ethics-17",
    "section": "ethics",
    "topic": "Client data and online tools",
    "difficulty": "easy",
    "q": "To save time, a staff auditor pastes a client's payroll file into a free online tool that is not approved for audit use. The client was not asked. How should this be viewed?",
    "choices": [
      "As acceptable, since the data was used only to perform the client's own audit",
      "As acceptable, provided the staff member deletes the file once testing ends",
      "As a breach only if the tool's provider is later shown to misuse the data",
      "As a confidentiality breach that the firm must evaluate and respond to"
    ],
    "answer": 3,
    "explain": "The Code allows client data to go to an outside provider only under a confidentiality agreement with adequate safeguards or with the client's specific consent; neither exists. SQMS 1 requires the firm to respond to ethics breaches. The disclosure is the breach, so later deletion or no misuse does not cure it."
  },
  {
    "id": "engmt-1",
    "section": "engmt",
    "topic": "Preconditions for an audit",
    "difficulty": "medium",
    "q": "Which precondition must exist before an auditor accepts an audit engagement?",
    "choices": [
      "Management uses an acceptable financial reporting framework",
      "The client has an internal audit function in place",
      "The prior auditor has issued an unmodified opinion",
      "The client's controls have been tested by a service organization"
    ],
    "answer": 0,
    "explain": "The auditor must determine that the framework is acceptable and obtain management's agreement to its responsibilities — for the statements, for internal control, and for providing access and information. Absent those, the engagement should not be accepted."
  },
  {
    "id": "engmt-2",
    "section": "engmt",
    "topic": "Communication with the predecessor",
    "difficulty": "medium",
    "q": "When must a successor auditor communicate with the predecessor auditor?",
    "choices": [
      "Before acceptance, with the prospective client's permission",
      "After acceptance but before planning the first year's fieldwork",
      "When the predecessor issued a modified opinion on the prior year",
      "When the change in auditors followed a fee dispute"
    ],
    "answer": 0,
    "explain": "The inquiry is required before acceptance and needs the prospective client's permission, since the predecessor is bound by confidentiality. If the client refuses permission, the successor should consider what that refusal implies."
  },
  {
    "id": "engmt-3",
    "section": "engmt",
    "topic": "Predecessor inquiries",
    "difficulty": "medium",
    "q": "Which matter should the successor auditor ask the predecessor about before acceptance?",
    "choices": [
      "Management's integrity and disagreements over accounting matters",
      "The predecessor's audit fee and billing arrangements",
      "The predecessor's assessment of the risk of material misstatement",
      "The predecessor's internal quality management system"
    ],
    "answer": 0,
    "explain": "Required inquiries cover management integrity, disagreements on accounting or auditing matters, communications about fraud and noncompliance, communications with those charged with governance, and the predecessor's understanding of why the change occurred."
  },
  {
    "id": "engmt-4",
    "section": "engmt",
    "topic": "Engagement letters",
    "difficulty": "easy",
    "q": "Which is NOT typically included in an audit engagement letter?",
    "choices": [
      "The objective and scope of the audit",
      "Management's responsibilities",
      "The auditor's assessment of control risk",
      "The inherent limitations of an audit"
    ],
    "answer": 2,
    "explain": "The letter sets the terms before fieldwork: objective and scope, responsibilities of both parties, the applicable framework, the expected form of report, and the inherent limitations. Control risk is assessed during the audit, not agreed in advance."
  },
  {
    "id": "engmt-5",
    "section": "engmt",
    "topic": "Recurring engagements",
    "difficulty": "medium",
    "q": "For a continuing audit client, when should the auditor revise the engagement letter?",
    "choices": [
      "Each year, as a condition of continuing the engagement",
      "When ownership, management or the nature of the engagement changes",
      "When the audit fee for the year increases from the prior year",
      "When a new engagement partner is assigned to the client"
    ],
    "answer": 1,
    "explain": "For a recurring audit the auditor assesses each year whether circumstances call for revised terms or a reminder of the existing ones. Significant changes in ownership, senior management, the business, legal requirements or scope are the usual triggers; a new letter every year is not required."
  },
  {
    "id": "engmt-6",
    "section": "engmt",
    "topic": "Scope limitations before acceptance",
    "difficulty": "medium",
    "q": "Management proposes a scope limitation that would require a disclaimer of opinion. What should the auditor do?",
    "choices": [
      "Accept and issue a disclaimer at the end of the engagement",
      "Decline the engagement unless required by law to accept",
      "Decline unless those charged with governance approve the limitation in writing",
      "Accept and disclose the limitation in an other-matter paragraph"
    ],
    "answer": 1,
    "explain": "When a pre-acceptance limitation would clearly lead to a disclaimer, the auditor should not accept the engagement unless law or regulation compels it. Limitations discovered after acceptance are handled differently."
  },
  {
    "id": "engmt-7",
    "section": "engmt",
    "topic": "Purpose of documentation",
    "difficulty": "medium",
    "q": "Audit documentation should be sufficient to enable which outcome?",
    "choices": [
      "A client employee to reconstruct the entity's accounting records",
      "An experienced auditor with no prior connection to understand the work and conclusions",
      "A regulator to recompute the entity's tax liability for the period",
      "A successor auditor to rely on the prior year's work without re-performing any procedures"
    ],
    "answer": 1,
    "explain": "The experienced auditor test is the benchmark: the file must show the nature, timing and extent of procedures, the results and evidence obtained, and the significant conclusions and judgments reached."
  },
  {
    "id": "engmt-8",
    "section": "engmt",
    "topic": "Documentation completion",
    "difficulty": "medium",
    "q": "Within what period must the final audit file be assembled under AICPA standards?",
    "choices": [
      "30 days after the report release date",
      "45 days after the report release date",
      "60 days after the report release date",
      "90 days after the report release date"
    ],
    "answer": 2,
    "explain": "AICPA standards allow 60 days after the report release date to assemble the final file and require five years of retention. PCAOB AS 1215 now allows only 14 days (fiscal years beginning on or after 15 December 2024 at firms auditing over 100 issuers, a year later for the rest) and seven years of retention."
  },
  {
    "id": "engmt-9",
    "section": "engmt",
    "topic": "Changes after the report date",
    "difficulty": "medium",
    "q": "An auditor adds documentation to the file after the documentation completion date. What is required?",
    "choices": [
      "Record when and by whom the change was made and the reason for it",
      "Obtain the client's written consent to the addition",
      "Reissue the auditor's report with a dual date",
      "Delete the superseded documentation so only current conclusions remain"
    ],
    "answer": 0,
    "explain": "After the completion date nothing may be deleted, and any addition must record the date, who made it, who reviewed it, and the specific reasons for the change."
  },
  {
    "id": "engmt-10",
    "section": "engmt",
    "topic": "Ownership of working papers",
    "difficulty": "easy",
    "q": "Who owns the audit working papers?",
    "choices": [
      "The auditor",
      "The client",
      "Jointly, in proportion to the fee",
      "The regulator with jurisdiction over the client"
    ],
    "answer": 0,
    "explain": "Working papers are the auditor's property, subject to confidentiality obligations. That is separate from the requirement to return records the client itself supplied."
  },
  {
    "id": "engmt-11",
    "section": "engmt",
    "topic": "Change in engagement",
    "difficulty": "medium",
    "q": "Partway through an audit, the client asks the auditor to issue a review report instead. When may the auditor agree?",
    "choices": [
      "When there is reasonable justification for the change",
      "Whenever the client makes the request in writing",
      "Only if no audit procedures have yet been performed",
      "When the auditor has been unable to obtain evidence about a material balance"
    ],
    "answer": 0,
    "explain": "A change in circumstances or a genuine misunderstanding about the service can justify the change. A change made to avoid a scope limitation or a modified opinion is never reasonable justification."
  },
  {
    "id": "engmt-12",
    "section": "engmt",
    "topic": "Reporting on a changed engagement",
    "difficulty": "medium",
    "q": "An auditor properly agrees to step down from an audit to a review. What should the review report say about the original engagement?",
    "choices": [
      "It should make no reference to the original engagement or the procedures performed",
      "It should describe the audit procedures completed before the change",
      "It should state the reason the audit was not completed in an other-matter paragraph",
      "It should include a scope limitation paragraph"
    ],
    "answer": 0,
    "explain": "When the change is justified, the report is issued as an ordinary review report with no reference to the original engagement, the procedures performed under it, or any scope limitation."
  },
  {
    "id": "engmt-13",
    "section": "engmt",
    "topic": "Communication with governance",
    "difficulty": "medium",
    "q": "Which matter must the auditor communicate to those charged with governance during planning?",
    "choices": [
      "The planned scope and timing of the audit",
      "The names of every staff member assigned to the engagement",
      "The firm's hourly billing rates by level",
      "The results of the firm's most recent peer review"
    ],
    "answer": 0,
    "explain": "Required communications include the auditor's responsibilities, the planned scope and timing, significant findings, difficulties encountered, disagreements with management, and uncorrected misstatements."
  },
  {
    "id": "engmt-14",
    "section": "engmt",
    "topic": "Reporting control deficiencies",
    "difficulty": "medium",
    "q": "An auditor identifies a significant deficiency in internal control during a nonissuer audit. What is required?",
    "choices": [
      "Communicate it orally at the closing meeting with management",
      "Communicate it in writing to management and those charged with governance",
      "Modify the opinion on the financial statements for the deficiency",
      "Report it to the entity's principal regulator within 30 days"
    ],
    "answer": 1,
    "explain": "Significant deficiencies and material weaknesses go in writing to management and those charged with governance, no later than 60 days after the report release date. Oral communication is not enough. The deficiency alone does not modify the opinion, though a related misstatement or lack of evidence could."
  },
  {
    "id": "engmt-15",
    "section": "engmt",
    "topic": "Internal control in the auditor's report",
    "difficulty": "medium",
    "q": "In a nonissuer's financial statement audit, what may the auditor's report say about internal control?",
    "choices": [
      "That no significant deficiencies in internal control were identified",
      "That the auditor expresses no opinion on internal control effectiveness",
      "That internal control is operating effectively as of year end",
      "That controls were tested and found adequate for the entity's size"
    ],
    "answer": 1,
    "explain": "A financial statement audit is not an audit of internal control, so the report expresses no opinion on its effectiveness. A written statement that no significant deficiencies were identified is prohibited, as it could be read as assurance; a separate letter may say no material weaknesses were identified."
  },
  {
    "id": "engmt-16",
    "section": "engmt",
    "topic": "Audit evidence retention",
    "difficulty": "easy",
    "q": "Which item must the audit documentation include?",
    "choices": [
      "The signed management representation letter",
      "The client's board minutes in their entirety",
      "The client's complete general ledger",
      "Every email exchanged with client personnel"
    ],
    "answer": 0,
    "explain": "The signed representation letter is required audit documentation, as are the engagement letter, risk assessments, procedures performed and conclusions. The file may keep relevant extracts of client records such as minutes, but wholesale copies of the client's records are neither required nor a substitute."
  },
  {
    "id": "risk-1",
    "section": "risk",
    "topic": "The audit risk model",
    "difficulty": "easy",
    "q": "Audit risk is a function of which components?",
    "choices": [
      "Risk of material misstatement and detection risk",
      "Inherent risk and business risk",
      "Inherent risk, control risk and the firm's engagement risk",
      "Sampling risk and nonsampling risk"
    ],
    "answer": 0,
    "explain": "Audit risk is the risk of an inappropriate opinion on materially misstated statements, and equals the risk of material misstatement times detection risk. RMM in turn combines inherent risk and control risk."
  },
  {
    "id": "risk-2",
    "section": "risk",
    "topic": "Components of audit risk",
    "difficulty": "easy",
    "q": "Which risk component is under the auditor's direct control?",
    "choices": [
      "Inherent risk",
      "Control risk",
      "Detection risk",
      "Risk of material misstatement"
    ],
    "answer": 2,
    "explain": "Inherent and control risk exist in the entity independently of the audit; the auditor only assesses them. Detection risk is managed by changing the nature, timing and extent of procedures."
  },
  {
    "id": "risk-3",
    "section": "risk",
    "topic": "Risk relationships",
    "difficulty": "medium",
    "q": "The auditor assesses the risk of material misstatement as higher than originally planned. What follows?",
    "choices": [
      "Acceptable detection risk decreases, so more persuasive evidence is needed",
      "Acceptable detection risk increases, so less persuasive evidence is needed",
      "Audit risk increases proportionately",
      "Materiality must be increased to compensate"
    ],
    "answer": 0,
    "explain": "To hold audit risk at an acceptably low level, a higher RMM forces acceptable detection risk down. The auditor responds with more effective procedures, more year-end work, or larger sample sizes."
  },
  {
    "id": "risk-4",
    "section": "risk",
    "topic": "Inherent risk",
    "difficulty": "medium",
    "q": "Which factor increases inherent risk for an account balance?",
    "choices": [
      "The balance requires significant management judgment to estimate",
      "The client segregates duties over the balance effectively",
      "The account has an immaterial balance",
      "The account is reconciled monthly by a supervisor"
    ],
    "answer": 0,
    "explain": "Inherent risk reflects susceptibility to misstatement before controls, and estimation, complexity, and susceptibility to theft all raise it. Segregation and reconciliation are controls, which affect control risk instead."
  },
  {
    "id": "risk-5",
    "section": "risk",
    "topic": "Overall materiality",
    "difficulty": "medium",
    "q": "On what basis is overall materiality for the financial statements determined?",
    "choices": [
      "A benchmark relevant to users, adjusted by the auditor's professional judgment",
      "A fixed percentage of pretax income or total assets prescribed by the standards",
      "The smallest misstatement the auditor is able to detect",
      "The amount management is willing to correct"
    ],
    "answer": 0,
    "explain": "The auditor selects a benchmark such as pretax income, revenue or total assets based on what matters to users, then applies judgment. No percentage is mandated by the standards."
  },
  {
    "id": "risk-6",
    "section": "risk",
    "topic": "Performance materiality",
    "difficulty": "medium",
    "q": "Why is performance materiality set below overall materiality?",
    "choices": [
      "To ensure every misstatement found is individually significant to users",
      "To reduce the chance that undetected misstatements aggregate above materiality",
      "Because auditing standards require a fixed 50% reduction from materiality",
      "To limit the number of adjustments proposed to client management"
    ],
    "answer": 1,
    "explain": "Performance materiality sets a cushion so that uncorrected and undetected misstatements, each individually immaterial, are unlikely to add up to more than overall materiality. Setting it lower means more testing and a smaller chance of an aggregate breach."
  },
  {
    "id": "risk-7",
    "section": "risk",
    "topic": "Clearly trivial",
    "difficulty": "medium",
    "q": "What is the significance of the clearly trivial threshold?",
    "choices": [
      "Misstatements clearly inconsequential in size and nature need not be accumulated",
      "It is the largest misstatement the auditor will tolerate in any single account balance",
      "It is the same figure as performance materiality",
      "It defines when a misstatement must be reported to regulators"
    ],
    "answer": 0,
    "explain": "Clearly trivial is far below materiality and is not another word for immaterial: it covers matters plainly inconsequential by size, nature or circumstances, alone or together. Everything above it is accumulated, and when in doubt the auditor accumulates it."
  },
  {
    "id": "risk-8",
    "section": "risk",
    "topic": "Evaluating a small misstatement",
    "difficulty": "medium",
    "q": "A small misstatement changes a reported loss into reported income. How should the auditor treat it?",
    "choices": [
      "As potentially material despite its size, because of its qualitative effect",
      "As immaterial, since materiality is a quantitative threshold fixed during planning",
      "As material only if it also exceeds performance materiality",
      "As a control deficiency rather than a misstatement"
    ],
    "answer": 0,
    "explain": "Qualitative factors can make a numerically small misstatement material — turning a loss into a profit, meeting analyst expectations, affecting debt covenants, or masking a change in earnings trend."
  },
  {
    "id": "risk-9",
    "section": "risk",
    "topic": "Significant risks",
    "difficulty": "medium",
    "q": "The auditor identifies a significant risk. What response is required?",
    "choices": [
      "Perform substantive procedures specifically responsive to that risk",
      "Rely on tests of the related controls performed in the prior year's audit",
      "Increase overall materiality to reduce the effect",
      "Disclose the risk in an emphasis-of-matter paragraph"
    ],
    "answer": 0,
    "explain": "For a significant risk the auditor must perform substantive procedures responsive to it and cannot rely on controls alone. When the response consists only of substantive procedures, those procedures must include tests of details."
  },
  {
    "id": "risk-10",
    "section": "risk",
    "topic": "Risk assessment procedures",
    "difficulty": "medium",
    "q": "Which is a risk assessment procedure?",
    "choices": [
      "Analytical procedures applied to draft financial information",
      "Confirmation of accounts receivable balances as of an interim date",
      "Recalculation of depreciation expense",
      "Vouching additions to fixed assets"
    ],
    "answer": 0,
    "explain": "Risk assessment procedures are inquiries, analytical procedures, observation and inspection, used to identify and assess risks. Confirmation, recalculation and vouching are normally further procedures responding to those risks; the purpose, not the technique, decides the category."
  },
  {
    "id": "risk-11",
    "section": "risk",
    "topic": "Limits of risk assessment",
    "difficulty": "medium",
    "q": "Can risk assessment procedures alone provide sufficient appropriate evidence for the audit opinion?",
    "choices": [
      "No — they must be supplemented by further audit procedures",
      "Yes, when control risk is assessed at the maximum",
      "Yes, for a first-year engagement",
      "No, unless the entity is a small nonissuer"
    ],
    "answer": 0,
    "explain": "Risk assessment procedures identify and assess risk; they do not themselves support an opinion. The opinion rests on further procedures — tests of controls and substantive procedures — designed in response to those assessments."
  },
  {
    "id": "risk-12",
    "section": "risk",
    "topic": "Revenue recognition risk",
    "difficulty": "medium",
    "q": "What presumption do the standards make about revenue recognition?",
    "choices": [
      "That it presents a risk of material misstatement due to fraud",
      "That it is inherently low risk in service businesses",
      "That controls over revenue are generally effective",
      "That analytical procedures alone suffice to audit it"
    ],
    "answer": 0,
    "explain": "The auditor presumes revenue recognition is a fraud risk. That presumption may be rebutted, but the reasons must be documented, and the risk is treated as significant when it is not rebutted."
  },
  {
    "id": "risk-13",
    "section": "risk",
    "topic": "Management override",
    "difficulty": "medium",
    "q": "Which procedure specifically addresses the risk of management override of controls?",
    "choices": [
      "Testing journal entries and other adjustments for evidence of misstatement",
      "Observing the annual physical inventory count",
      "Confirming accounts payable balances with vendors that show zero year-end balances",
      "Reviewing the bank reconciliation for arithmetic accuracy"
    ],
    "answer": 0,
    "explain": "Management override is presumed present in every audit, and the required responses are testing journal entries, reviewing estimates for bias, and evaluating the business rationale of significant unusual transactions."
  },
  {
    "id": "risk-14",
    "section": "risk",
    "topic": "Tolerable misstatement",
    "difficulty": "medium",
    "q": "What is tolerable misstatement?",
    "choices": [
      "The application of performance materiality to a particular sampling procedure",
      "The total misstatement the auditor will accept in the financial statements",
      "The threshold below which misstatements are clearly trivial",
      "The amount of uncorrected misstatement management will accept"
    ],
    "answer": 0,
    "explain": "Tolerable misstatement applies performance materiality to a specific sampling procedure and may equal or be lower than it. Smaller tolerable misstatement drives larger sample sizes."
  },
  {
    "id": "risk-15",
    "section": "risk",
    "topic": "Revising materiality",
    "difficulty": "medium",
    "q": "During the audit the entity's actual results turn out far below the forecast used to set materiality. What should the auditor do?",
    "choices": [
      "Retain the original materiality figure for consistency across the audit",
      "Revise materiality and reconsider whether prior procedures remain adequate",
      "Increase materiality to reflect the entity's reduced level of income",
      "Report the change in an other-matter paragraph in the report"
    ],
    "answer": 1,
    "explain": "Materiality is revised when the auditor becomes aware of information that would have led to a different figure initially. The auditor then reassesses performance materiality and whether further procedures are needed."
  },
  {
    "id": "risk-16",
    "section": "risk",
    "topic": "Materiality and sample size",
    "difficulty": "easy",
    "q": "How does a decrease in tolerable misstatement affect the required sample size?",
    "choices": [
      "Sample size increases",
      "Sample size decreases",
      "Sample size is unaffected",
      "Sample size becomes indeterminate"
    ],
    "answer": 0,
    "explain": "Less tolerance for misstatement demands more precision, so the sample must be larger. A higher expected misstatement also increases sample size, while a larger population has surprisingly little effect."
  },
  {
    "id": "risk-17",
    "section": "risk",
    "topic": "Economic conditions",
    "difficulty": "easy",
    "q": "A client sells on 60-day terms to small retailers. Interest rates rise sharply and a recession begins. How should the auditor's risk assessment respond?",
    "choices": [
      "Raise the assessed risk that the allowance for credit losses is understated",
      "Lower the assessed risk for receivables, since recessions shrink credit sales",
      "Leave it unchanged, since economic conditions are business risk, not audit risk",
      "Raise acceptable detection risk for receivables as collections slow down"
    ],
    "answer": 0,
    "explain": "Higher rates and falling demand strain customers' ability to pay, so the risk of too small an allowance rises. External conditions belong in the auditor's understanding for exactly this reason. Higher assessed risk lowers acceptable detection risk, and a smaller balance is not a more collectible one."
  },
  {
    "id": "risk-18",
    "section": "risk",
    "topic": "Pricing and demand",
    "difficulty": "medium",
    "q": "A client raises the price of its main product 15%, though competitors sell close substitutes. Management's budget assumes flat unit sales and revenue up 15%. What should the auditor expect?",
    "choices": [
      "Volume to fall, so the budget looks optimistic and slow-moving inventory risk rises",
      "Revenue up about 15% as budgeted, since the price rise will pass through to customers",
      "Steady demand, since a product with close substitutes has price-inelastic demand",
      "Lower inventory valuation risk, since the higher price raises net realizable value"
    ],
    "answer": 0,
    "explain": "Close substitutes make demand elastic, so a price rise cuts volume by proportionally more and revenue likely falls. A budget assuming flat volume is suspect, and unsold stock raises the risk that inventory exceeds net realizable value. A higher price lifts NRV only for units that actually sell."
  },
  {
    "id": "risk-19",
    "section": "risk",
    "topic": "Supply shortages",
    "difficulty": "medium",
    "q": "A shortage lifts the cost of a key component 40%. The client's fixed-price sales contracts now leave several products selling at a loss. Which audit response fits?",
    "choices": [
      "Test whether products on hand should be written up to their higher replacement cost",
      "Use last year's gross margin as a precise expectation for cost of sales",
      "Test whether inventory of those products must be written down below cost",
      "Reduce testing of cost of sales, since fixed contract prices make margins predictable"
    ],
    "answer": 2,
    "explain": "When a product sells at a loss, its selling price less costs to complete and sell is below cost, so the inventory is written down. GAAP does not write inventory up to replacement cost. Last year's margin is no longer a precise expectation, and fixed prices with rising costs make margins less predictable."
  },
  {
    "id": "icfr-1",
    "section": "icfr",
    "topic": "COSO components",
    "difficulty": "easy",
    "q": "Which is NOT one of the five components of internal control under the COSO framework?",
    "choices": [
      "Control environment",
      "Risk assessment",
      "Corporate governance structure",
      "Monitoring activities"
    ],
    "answer": 2,
    "explain": "The five components are the control environment, risk assessment, control activities, information and communication, and monitoring activities. Governance structure is an element of the control environment, not a separate component."
  },
  {
    "id": "icfr-2",
    "section": "icfr",
    "topic": "Understanding internal control",
    "difficulty": "medium",
    "q": "In every financial statement audit, what must the auditor do regarding internal control?",
    "choices": [
      "Obtain an understanding sufficient to assess risk and design further procedures",
      "Test the operating effectiveness of key controls over every significant account",
      "Express an opinion on the effectiveness of internal control",
      "Nothing, if the auditor plans a fully substantive approach"
    ],
    "answer": 0,
    "explain": "Understanding internal control relevant to the audit is mandatory in every engagement, because it is how risk is assessed. Testing operating effectiveness is required only when the auditor plans to rely on controls or substantive procedures alone are insufficient."
  },
  {
    "id": "icfr-3",
    "section": "icfr",
    "topic": "Design versus operation",
    "difficulty": "medium",
    "q": "What does evaluating the design and implementation of a control establish?",
    "choices": [
      "Whether the control operated consistently throughout the entire period",
      "Whether the control could prevent or detect misstatement and is in operation",
      "Whether the control is cost-effective given the entity's size",
      "Whether management has documented the control in written procedures"
    ],
    "answer": 1,
    "explain": "Design and implementation ask whether a properly designed control actually exists and is in use. Whether it worked consistently over the period is operating effectiveness, established by tests of controls."
  },
  {
    "id": "icfr-4",
    "section": "icfr",
    "topic": "Walkthroughs",
    "difficulty": "medium",
    "q": "What does a walkthrough of a transaction cycle accomplish?",
    "choices": [
      "It confirms the auditor's understanding of the flow of transactions and the controls in place",
      "It provides sufficient evidence that controls operated effectively throughout the period under audit",
      "It substitutes for substantive testing of the related account",
      "It establishes the tolerable deviation rate for the cycle"
    ],
    "answer": 0,
    "explain": "A walkthrough traces a transaction through the process to confirm the auditor understands it and that controls are designed and in place. On its own it does not show controls worked throughout the period, though for some controls the procedures performed in a walkthrough can supply part of that evidence."
  },
  {
    "id": "icfr-5",
    "section": "icfr",
    "topic": "When control testing is required",
    "difficulty": "medium",
    "q": "In a financial statement audit, when must the auditor test controls even without planning to rely on them?",
    "choices": [
      "When the entity has a material weakness in the control environment",
      "When substantive procedures alone cannot provide sufficient evidence",
      "When the client asks for informal suggestions about its controls",
      "When the engagement is a first-year audit of the entity"
    ],
    "answer": 1,
    "explain": "When substantive procedures alone cannot provide sufficient appropriate evidence, typically where transactions are processed automatically with little manual trail, control testing is required. A weak control environment points the other way: no reliance, more substantive work. Reporting on internal control is a different engagement."
  },
  {
    "id": "icfr-6",
    "section": "icfr",
    "topic": "Prior-year control evidence",
    "difficulty": "medium",
    "q": "Under AICPA standards, when may an auditor rely on evidence about a control's operating effectiveness obtained in prior audits?",
    "choices": [
      "For any unchanged control, provided management confirms in writing that nothing changed",
      "For unchanged controls not over a significant risk, retested at least every third audit",
      "For any control that showed no deviations when last tested",
      "Only for controls that address an identified significant risk"
    ],
    "answer": 1,
    "explain": "Evidence from prior audits can support reliance on a control that has not changed and does not address a significant risk, once the auditor confirms it is still relevant. Each such control is retested at least every third audit, with some tested each year. Controls over significant risks are tested in the current period."
  },
  {
    "id": "icfr-7",
    "section": "icfr",
    "topic": "Segregation of duties",
    "difficulty": "easy",
    "q": "Proper segregation of duties separates which functions?",
    "choices": [
      "Authorization, recording and custody of assets",
      "Recording, reconciling and reporting of transactions",
      "Hiring, training and evaluation",
      "Purchasing, receiving and paying"
    ],
    "answer": 0,
    "explain": "The classic separation keeps authorization of transactions, recording in the accounting records, and custody of the related assets in different hands. Combining any two lets one person both commit and conceal an error or fraud."
  },
  {
    "id": "icfr-8",
    "section": "icfr",
    "topic": "Material weakness",
    "difficulty": "medium",
    "q": "How is a material weakness defined?",
    "choices": [
      "Any deficiency that management has not yet remediated by the balance sheet date",
      "A deficiency or combination with a reasonable possibility a material misstatement isn't prevented or timely corrected",
      "A deficiency, or combination, that has already let an actual material misstatement reach the statements",
      "A deficiency identified in two or more consecutive annual audits"
    ],
    "answer": 1,
    "explain": "A material weakness is a deficiency, or combination of deficiencies, with a reasonable possibility that a material misstatement will not be prevented, or detected and corrected, on a timely basis. No material misstatement need actually have occurred. A significant deficiency is less severe."
  },
  {
    "id": "icfr-9",
    "section": "icfr",
    "topic": "Limitations of internal control",
    "difficulty": "easy",
    "q": "Which is an inherent limitation of any internal control system?",
    "choices": [
      "Collusion among employees can circumvent otherwise effective controls",
      "Controls over accounting estimates cannot be designed because estimates involve judgment",
      "Controls lose effectiveness as an entity grows beyond a single location",
      "Controls cannot be applied to transactions initiated by outside parties"
    ],
    "answer": 0,
    "explain": "Every system is limited by collusion, management override, human error, and the cost-benefit constraint. That is why internal control offers reasonable rather than absolute assurance."
  },
  {
    "id": "icfr-10",
    "section": "icfr",
    "topic": "Control environment",
    "difficulty": "medium",
    "q": "Why is the control environment considered the foundation of internal control?",
    "choices": [
      "It sets the tone that influences the effectiveness of all other components",
      "It contains the specific control activities that prevent and detect misstatement",
      "It is the only component the auditor is required to test",
      "It determines the entity's tolerable deviation rate"
    ],
    "answer": 0,
    "explain": "Integrity, ethical values, governance oversight and commitment to competence shape whether the other components function. Strong procedures sit on weak ground when the tone at the top is poor."
  },
  {
    "id": "icfr-11",
    "section": "icfr",
    "topic": "IT general controls",
    "difficulty": "medium",
    "q": "Which is an IT general control rather than an application control?",
    "choices": [
      "Logical access security over programs and data",
      "A three-way match of purchase order, receiver and invoice",
      "An input validity check on customer numbers",
      "A batch total reconciliation of posted transactions"
    ],
    "answer": 0,
    "explain": "ITGCs — access security, program change management, program development and computer operations — support the environment in which applications run. The other three operate inside a specific application."
  },
  {
    "id": "icfr-12",
    "section": "icfr",
    "topic": "Effect of weak ITGCs",
    "difficulty": "medium",
    "q": "The auditor finds that IT general controls over program changes are ineffective. What is the consequence?",
    "choices": [
      "Reliance on the related automated application controls is undermined",
      "Only the program change process itself is affected",
      "The entity automatically has a material weakness in the control environment",
      "Substantive procedures become unnecessary"
    ],
    "answer": 0,
    "explain": "Automated application controls are only as reliable as the IT general controls that stop programs being changed without authorization. Ineffective program-change controls undermine reliance on the automated controls they support, subject to the specific deficiencies, compensating controls and direct testing."
  },
  {
    "id": "icfr-13",
    "section": "icfr",
    "topic": "Service organizations",
    "difficulty": "medium",
    "q": "An entity outsources payroll processing to a service organization. What does a SOC 1 Type 2 report provide the user auditor?",
    "choices": [
      "An opinion on the suitability of control design as of a specified date",
      "An opinion on control design and operating effectiveness over a period",
      "An opinion on the service organization's own financial statements",
      "A list of complementary user entity controls, with no opinion"
    ],
    "answer": 1,
    "explain": "A Type 2 report covers both suitability of design and operating effectiveness across a period, so the user auditor can obtain control-reliance evidence. A Type 1 covers design as of a point in time and gives no operating effectiveness evidence."
  },
  {
    "id": "icfr-14",
    "section": "icfr",
    "topic": "Complementary user controls",
    "difficulty": "medium",
    "q": "A user auditor plans to rely on a SOC 1 Type 2 report that lists complementary user entity controls. What must the user auditor do?",
    "choices": [
      "Determine whether those controls are in place and operating at the user entity",
      "Ignore them, since they are the service organization's responsibility",
      "Request that the service organization test them",
      "Treat their existence as a material weakness"
    ],
    "answer": 0,
    "explain": "The service organization's controls work only if the user entity's complementary controls are in place, so the user auditor evaluates their design and implementation and tests them when its reliance depends on them. The service auditor never tests controls at the user entity."
  },
  {
    "id": "icfr-15",
    "section": "icfr",
    "topic": "Deficiency communication",
    "difficulty": "medium",
    "q": "To whom must material weaknesses in a nonissuer audit be communicated?",
    "choices": [
      "Management and those charged with governance, in writing",
      "The entity's shareholders, in the annual report",
      "The entity's regulator, within 30 days",
      "The successor auditor, at the time of the change"
    ],
    "answer": 0,
    "explain": "Both significant deficiencies and material weaknesses go in writing to management and those charged with governance, no later than 60 days after the report release date. Public disclosure is not the auditor's role for a nonissuer."
  },
  {
    "id": "icfr-16",
    "section": "icfr",
    "topic": "Monitoring",
    "difficulty": "medium",
    "q": "Which activity is part of the monitoring component of internal control?",
    "choices": [
      "Ongoing evaluation of whether controls continue to operate as intended",
      "Preparing the entity's annual operating budget",
      "Approving journal entries above a dollar threshold before they are posted",
      "Restricting physical access to the warehouse"
    ],
    "answer": 0,
    "explain": "Monitoring covers ongoing evaluations, separate evaluations such as internal audit, and the communication and remediation of identified deficiencies. Approvals and physical safeguards are control activities."
  },
  {
    "id": "fraud-1",
    "section": "fraud",
    "topic": "The fraud triangle",
    "difficulty": "easy",
    "q": "Which three conditions generally accompany the commission of fraud?",
    "choices": [
      "Incentive or pressure, opportunity, and rationalization",
      "Collusion, concealment, and conversion",
      "Materiality, pervasiveness, and intent",
      "Incentive or pressure, opportunity, and a prior history of fraud"
    ],
    "answer": 0,
    "explain": "The fraud triangle describes a pressure to act, an opportunity created by weak controls or override ability, and an attitude that lets the perpetrator justify it. All three are usually present, though the auditor need not observe all three to identify a risk."
  },
  {
    "id": "fraud-2",
    "section": "fraud",
    "topic": "Types of fraud",
    "difficulty": "easy",
    "q": "Which is an example of fraudulent financial reporting rather than misappropriation of assets?",
    "choices": [
      "Recording fictitious sales near year end",
      "Stealing inventory from the warehouse",
      "Creating a phantom employee on the payroll",
      "Using company credit cards for personal purchases"
    ],
    "answer": 0,
    "explain": "Recording fictitious sales misstates the statements to deceive users, which is fraudulent financial reporting. The others are misappropriation: theft of assets, which can misstate asset balances directly and is often hidden with false records."
  },
  {
    "id": "fraud-3",
    "section": "fraud",
    "topic": "Auditor's responsibility",
    "difficulty": "medium",
    "q": "What is the auditor's responsibility with respect to fraud?",
    "choices": [
      "To detect all material fraud, since an audit is designed to provide absolute assurance against fraud",
      "To obtain reasonable assurance the statements are free of material misstatement from fraud or error",
      "To detect fraud committed by employees but not by senior management",
      "To design procedures aimed only at detecting misappropriation of the entity's assets"
    ],
    "answer": 1,
    "explain": "The auditor's responsibility runs to material misstatement, from either fraud or error, at a reasonable assurance level. Fraud is harder to detect than error because of concealment, and material fraud may go undetected in a properly conducted audit."
  },
  {
    "id": "fraud-4",
    "section": "fraud",
    "topic": "Planning for fraud",
    "difficulty": "medium",
    "q": "What is required of the engagement team regarding fraud during planning?",
    "choices": [
      "A written certification from each member that no fraud was observed",
      "A discussion of how and where the statements might be susceptible to fraud",
      "A separate planning meeting with the entity's outside legal counsel",
      "A background check on each member of the client's senior management"
    ],
    "answer": 1,
    "explain": "The brainstorming discussion is required and must include the engagement partner, with an emphasis on setting aside any belief that management is honest. It continues to inform the team's skepticism throughout the audit."
  },
  {
    "id": "fraud-5",
    "section": "fraud",
    "topic": "Fraud inquiries",
    "difficulty": "medium",
    "q": "Beyond management, whom must the auditor ask about fraud risks and known or suspected fraud?",
    "choices": [
      "Those charged with governance and internal audit",
      "The entity's legal counsel, through the letter of inquiry",
      "The predecessor auditor",
      "The entity's principal customers"
    ],
    "answer": 0,
    "explain": "Inquiries reach management, those charged with governance, internal audit where it exists, and others within the entity such as operating personnel. Fraud is often reported by people outside the finance function."
  },
  {
    "id": "fraud-6",
    "section": "fraud",
    "topic": "Professional skepticism",
    "difficulty": "medium",
    "q": "What does professional skepticism require of the auditor?",
    "choices": [
      "A questioning mind and a critical assessment of audit evidence",
      "An assumption that management is dishonest",
      "Verification of every transaction the entity records",
      "Reliance only on evidence obtained from outside the entity"
    ],
    "answer": 0,
    "explain": "Skepticism means alertness to conditions indicating possible misstatement and critical assessment of evidence, without presuming either dishonesty or unquestioned honesty. Past experience with an honest management does not relax it."
  },
  {
    "id": "fraud-7",
    "section": "fraud",
    "topic": "Unpredictability",
    "difficulty": "medium",
    "q": "Why does the auditor incorporate an element of unpredictability into procedures?",
    "choices": [
      "Because the standards require rotating the engagement partner periodically",
      "Because people who know the usual procedures can better conceal fraud",
      "Because it reduces the total hours charged to the engagement budget",
      "Because it substitutes for the required management override procedures"
    ],
    "answer": 1,
    "explain": "Varying the timing, locations, or accounts tested keeps client personnel from anticipating the audit. It supplements, rather than replaces, the required responses to management override risk."
  },
  {
    "id": "fraud-8",
    "section": "fraud",
    "topic": "Communicating fraud",
    "difficulty": "medium",
    "q": "The auditor identifies fraud committed by a warehouse clerk involving an immaterial amount. To whom should it be communicated?",
    "choices": [
      "No one, since the amount involved is immaterial to the statements",
      "An appropriate level of management above those involved in the fraud",
      "The entity's external legal counsel, for an opinion on liability",
      "Local law enforcement authorities, within one business day"
    ],
    "answer": 1,
    "explain": "Fraud by a lower-level employee goes to a level of management above those involved. Fraud involving senior management or employees with significant roles in internal control, and any fraud causing a material misstatement, must also go to those charged with governance, whatever the amount."
  },
  {
    "id": "fraud-9",
    "section": "fraud",
    "topic": "Disclosure outside the entity",
    "difficulty": "medium",
    "q": "When may an auditor disclose client fraud to a party outside the entity?",
    "choices": [
      "Whenever the auditor believes the public interest requires disclosure",
      "In response to a valid subpoena or a specific regulatory requirement",
      "Whenever the fraud involves a member of the entity's senior management",
      "Whenever the client refuses to correct the resulting misstatement"
    ],
    "answer": 1,
    "explain": "Confidentiality generally bars outside disclosure. The recognized exceptions are legal process, specific regulatory reporting requirements, a successor auditor with client permission, and funding agency requirements under government audit rules."
  },
  {
    "id": "fraud-10",
    "section": "fraud",
    "topic": "Withdrawal",
    "difficulty": "medium",
    "q": "The auditor concludes that fraud implicating senior management makes it impossible to continue. What is the appropriate course?",
    "choices": [
      "Consider withdrawing and communicate the reasons to those charged with governance",
      "Issue an adverse opinion and complete the engagement",
      "Complete the audit but disclaim any responsibility for fraud",
      "Report the matter directly to the SEC before informing the audit committee or the board"
    ],
    "answer": 0,
    "explain": "When circumstances call the auditor's ability to continue into question, the auditor determines their professional and legal responsibilities, considers withdrawal, and communicates with those charged with governance about why."
  },
  {
    "id": "fraud-11",
    "section": "fraud",
    "topic": "Fraud risk factors",
    "difficulty": "medium",
    "q": "How should the auditor treat the presence of a fraud risk factor?",
    "choices": [
      "As conclusive evidence that fraud exists in the related account",
      "As a condition considered in assessing risk, not proof fraud occurred",
      "As grounds for immediate withdrawal from the audit engagement",
      "As a matter requiring disclosure in the auditor's report"
    ],
    "answer": 1,
    "explain": "Risk factors are conditions often present when fraud exists, but their presence does not mean fraud has occurred, and their absence does not mean it has not. They feed the risk assessment and the design of responses."
  },
  {
    "id": "fraud-12",
    "section": "fraud",
    "topic": "Analytical procedures and fraud",
    "difficulty": "medium",
    "q": "Which analytical result would most suggest a fraud risk in revenue?",
    "choices": [
      "Sales growth well above the industry while operating cash flow declines",
      "A gross margin consistent with the prior three years",
      "Receivable turnover in line with credit terms and the prior year's pattern",
      "Revenue recognized evenly across all four quarters"
    ],
    "answer": 0,
    "explain": "Earnings that grow while cash does not is a classic indicator of fictitious or prematurely recognized revenue. Results consistent with history and terms are what the auditor would expect to see."
  },
  {
    "id": "fraud-13",
    "section": "fraud",
    "topic": "Noncompliance with laws",
    "difficulty": "medium",
    "q": "How does the auditor's responsibility differ between laws with a direct effect on the financial statements and other laws?",
    "choices": [
      "The responsibility is identical for both categories of laws",
      "The auditor obtains evidence on directly relevant laws; for others it inquires, reads regulator letters and stays alert",
      "The auditor stays alert to directly relevant laws but obtains evidence on all other laws",
      "The auditor obtains evidence on each category of laws but reports noncompliance only under directly relevant laws"
    ],
    "answer": 1,
    "explain": "For laws that directly determine reported amounts and disclosures, such as tax and pension laws, the auditor obtains sufficient appropriate evidence of compliance. For other laws it inquires of management and those charged with governance, inspects correspondence with licensing or regulatory authorities, and stays alert."
  },
  {
    "id": "fraud-14",
    "section": "fraud",
    "topic": "Section 10A reporting",
    "difficulty": "medium",
    "q": "An issuer takes no timely remedial action on a material illegal act, and the auditor expects to modify its report or resign. What does Section 10A require?",
    "choices": [
      "Resign from the engagement quietly without any further communication",
      "Report to the board, then to the SEC if no copy of the issuer's notice arrives",
      "Disclose the illegal act in an emphasis-of-matter paragraph",
      "Notify the entity's shareholders directly at the annual meeting"
    ],
    "answer": 1,
    "explain": "Section 10A has the auditor report its conclusions directly to the board. The issuer then has one business day to notify the SEC and send the auditor a copy; if no copy arrives, the auditor furnishes its report to the SEC within one more business day. Resigning does not remove that duty."
  },
  {
    "id": "fraud-15",
    "section": "fraud",
    "topic": "Prior-year estimates",
    "difficulty": "medium",
    "q": "Why does the auditor perform a retrospective review of prior-year significant estimates?",
    "choices": [
      "To identify possible management bias in making estimates",
      "To recompute the prior year's tax provision",
      "To test the operating effectiveness of estimation controls",
      "To satisfy the requirement for final analytical procedures"
    ],
    "answer": 0,
    "explain": "Comparing prior estimates with actual outcomes reveals whether management systematically errs in one direction. It is one of the required responses to the risk of management override."
  },
  {
    "id": "fraud-16",
    "section": "fraud",
    "topic": "Significant unusual transactions",
    "difficulty": "medium",
    "q": "The auditor identifies a significant transaction outside the entity's normal course of business. What is required?",
    "choices": [
      "Evaluate whether the business rationale suggests fraudulent financial reporting",
      "Confirm the transaction with the counterparty's auditor",
      "Require management to reverse the transaction and restate the affected balances",
      "Report the transaction to those charged with governance in writing"
    ],
    "answer": 0,
    "explain": "Significant unusual transactions must be evaluated for whether their business rationale, or lack of one, suggests the transaction was entered into to misstate the financials or conceal misappropriation."
  },
  {
    "id": "fraud-17",
    "section": "fraud",
    "topic": "Evaluating a forecast",
    "difficulty": "medium",
    "q": "Testing a goodwill impairment model, a senior starts from management's 9% revenue growth forecast and trims it to 8%, though industry outlooks point to 2%. What should the senior do?",
    "choices": [
      "Accept 8%, since trimming the forecast already allows for the weaker market",
      "Obtain a written representation that management believes 9% is achievable",
      "Develop an independent expectation from outside data and investigate the gap",
      "Use 5.5%, the midpoint of the two rates, as the auditor's point estimate"
    ],
    "answer": 2,
    "explain": "Adjusting slightly from management's figure is anchoring. SAS 143 requires evidence gathered without bias toward corroboration, so the senior should build an expectation from independent data and investigate the difference. A trim or a midpoint still leans on the anchor, and a representation alone is not sufficient evidence."
  },
  {
    "id": "fraud-18",
    "section": "fraud",
    "topic": "Analytics tool results",
    "difficulty": "medium",
    "q": "A firm-approved analytics tool scores every journal entry and flags none as high risk. A senior had noticed round-sum entries the CFO posted after year end but drops them given the tool's result. What should happen?",
    "choices": [
      "Test those entries, since the tool's output cannot outweigh contrary evidence",
      "Nothing more, since the firm has validated the tool for use on its audits",
      "Nothing more, since scoring every entry removes sampling risk from the test",
      "Ask the CFO about the entries and accept the reply if it sounds reasonable"
    ],
    "answer": 0,
    "explain": "Favoring an automated result over contrary evidence is automation bias. Round-sum entries the CFO posted after year end are classic override red flags and must be tested. Firm approval covers the tool's design, not these facts; scoring every entry does not make the scores right, and inquiry alone is not enough."
  },
  {
    "id": "plan-1",
    "section": "plan",
    "topic": "Strategy versus plan",
    "difficulty": "medium",
    "q": "How does the overall audit strategy differ from the audit plan?",
    "choices": [
      "The strategy sets the scope, timing and direction; the plan describes the specific procedures",
      "The strategy is set by those charged with governance; the plan is set by the engagement partner",
      "The strategy is prepared annually; the plan is prepared every three years",
      "The strategy addresses substantive work; the plan addresses controls"
    ],
    "answer": 0,
    "explain": "The strategy is the high-level approach that guides resource allocation and timing. The audit plan converts it into the nature, timing and extent of specific risk assessment and further audit procedures."
  },
  {
    "id": "plan-2",
    "section": "plan",
    "topic": "Planning as a process",
    "difficulty": "easy",
    "q": "When does audit planning occur?",
    "choices": [
      "Continually throughout the engagement, being revised as circumstances change",
      "Only at the start of the engagement, before the risk assessment procedures begin",
      "Only after control testing is complete",
      "Only when the prior-year approach proved ineffective"
    ],
    "answer": 0,
    "explain": "Planning is iterative rather than a discrete phase. Evidence obtained during the audit routinely causes the auditor to revise risk assessments and modify planned procedures."
  },
  {
    "id": "plan-3",
    "section": "plan",
    "topic": "Preliminary analytical procedures",
    "difficulty": "medium",
    "q": "What is the purpose of analytical procedures applied during planning?",
    "choices": [
      "To help identify areas of higher risk and unusual relationships needing attention",
      "To provide substantive evidence about balances so that fewer tests of details are needed",
      "To test the operating effectiveness of controls",
      "To evaluate whether the statements as a whole are consistent"
    ],
    "answer": 0,
    "explain": "Planning analytics are a risk assessment procedure that highlights unexpected relationships. Substantive analytics gather evidence about balances, and final analytics support the overall conclusion — those are separate uses."
  },
  {
    "id": "plan-4",
    "section": "plan",
    "topic": "When analytics are required",
    "difficulty": "medium",
    "q": "At which stages of the audit are analytical procedures required?",
    "choices": [
      "During risk assessment and near the end of the audit",
      "During risk assessment only",
      "As substantive procedures for every material account",
      "Only when control risk is assessed below maximum"
    ],
    "answer": 0,
    "explain": "Analytics are required in planning and in the overall final review. Using them as substantive procedures is optional — the auditor may instead rely entirely on tests of details."
  },
  {
    "id": "plan-5",
    "section": "plan",
    "topic": "Auditor's specialist",
    "difficulty": "medium",
    "q": "An auditor engages a valuation specialist to assist with a complex fair value measurement. What should the report say?",
    "choices": [
      "Nothing — the report makes no reference to the auditor's specialist in an unmodified opinion",
      "It should name the specialist and describe the work performed, as it would a component auditor",
      "It should include an other-matter paragraph identifying the specialist",
      "It should divide responsibility between the auditor and the specialist"
    ],
    "answer": 0,
    "explain": "The auditor remains solely responsible for the opinion, so an unmodified report does not mention the specialist. Reference is permitted only when the specialist's work leads to a modification, and then only to explain it."
  },
  {
    "id": "plan-6",
    "section": "plan",
    "topic": "Evaluating a specialist",
    "difficulty": "medium",
    "q": "What must the auditor evaluate before using the work of an auditor's specialist?",
    "choices": [
      "The specialist's competence, capabilities and objectivity",
      "The specialist's fee arrangement with the audit firm",
      "The specialist's professional liability insurance",
      "Whether the specialist has audited the client before"
    ],
    "answer": 0,
    "explain": "The auditor evaluates competence, capabilities and objectivity, agrees on the nature and scope of the work, and then assesses whether the specialist's findings are adequate for audit purposes."
  },
  {
    "id": "plan-7",
    "section": "plan",
    "topic": "Using internal audit work",
    "difficulty": "medium",
    "q": "What determines whether the external auditor may use the work of the internal audit function?",
    "choices": [
      "Whether internal audit reports to the chief financial officer directly",
      "Its objectivity, competence, and use of a systematic, disciplined approach",
      "Whether the internal auditors hold CPA licenses in the relevant state",
      "Whether the internal auditors are employees of the entity rather than an outsourced provider"
    ],
    "answer": 1,
    "explain": "Objectivity turns largely on organizational status — reporting to those charged with governance supports it, reporting to the CFO undermines it. Competence and a systematic, disciplined approach including quality control complete the evaluation."
  },
  {
    "id": "plan-8",
    "section": "plan",
    "topic": "Using internal auditors",
    "difficulty": "medium",
    "q": "Which task may the external auditor NOT hand to the entity's internal auditors?",
    "choices": [
      "Observing physical inventory counts at the entity's minor locations",
      "Making significant judgments, such as the conclusion on a complex estimate",
      "Testing routine controls over the cash disbursement process",
      "Confirming accounts receivable balances with the entity's customers"
    ],
    "answer": 1,
    "explain": "The external auditor alone makes the significant judgments in the audit and bears sole responsibility for the opinion. Higher assessed risk and greater judgment limit how much internal auditors' work can be used, but routine testing under the external auditor's supervision can be assigned."
  },
  {
    "id": "plan-9",
    "section": "plan",
    "topic": "Group audit responsibility",
    "difficulty": "medium",
    "q": "When the group auditor does not make reference to a component auditor, who is responsible for the group opinion?",
    "choices": [
      "The group engagement partner alone",
      "The group and component auditors jointly",
      "The component auditor for its portion of the group",
      "The group engagement quality reviewer"
    ],
    "answer": 0,
    "explain": "Assuming responsibility means the group engagement partner is solely responsible for the opinion and must be sufficiently involved in the component auditor's work. Division of responsibility requires explicit reference in the report."
  },
  {
    "id": "plan-10",
    "section": "plan",
    "topic": "Referring to a component auditor",
    "difficulty": "medium",
    "q": "Under AU-C 600, what must be true before the group auditor may make reference to a component auditor?",
    "choices": [
      "The component auditor must belong to the same international firm network",
      "The component audit must follow GAAS or PCAOB standards, with a report not restricted as to use",
      "The component must represent less than 20% of consolidated group assets",
      "The component auditor must consent in writing to being named, and its report must be attached"
    ],
    "answer": 1,
    "explain": "Making reference requires the group auditor to be satisfied with the component auditor's independence and competence, and the component audit must have followed GAAS or PCAOB standards with a report not restricted as to use. SAS 149 revises group audits for periods ending on or after 15 December 2026."
  },
  {
    "id": "plan-11",
    "section": "plan",
    "topic": "Interim testing",
    "difficulty": "medium",
    "q": "An auditor performs substantive testing of a balance at an interim date. What is required for the remaining period?",
    "choices": [
      "Nothing further, provided no exceptions were found at the interim date",
      "Roll-forward procedures giving a reasonable basis for extending to year end",
      "Complete retesting of the entire balance as of the year-end date",
      "A written representation from management covering the remaining period"
    ],
    "answer": 1,
    "explain": "Roll-forward procedures — substantive analytics, tests of details, or a combination — must cover the intervening period. Higher assessed risk makes interim testing less appropriate in the first place."
  },
  {
    "id": "plan-12",
    "section": "plan",
    "topic": "Related party planning",
    "difficulty": "medium",
    "q": "What should the auditor do about related parties during planning?",
    "choices": [
      "Confirm all related party balances directly with the counterparties",
      "Ask management to identify related parties and share the names with the team",
      "Assume that all related party transactions were made at arm's length",
      "Require management to eliminate related party transactions before year end"
    ],
    "answer": 1,
    "explain": "Identifying related parties early and communicating the names to the team lets everyone stay alert for transactions with those parties during fieldwork. Undisclosed relationships are a common vehicle for fraud."
  },
  {
    "id": "plan-13",
    "section": "plan",
    "topic": "Supervision",
    "difficulty": "medium",
    "q": "What does proper supervision of assistants require?",
    "choices": [
      "Reviewing every workpaper an assistant prepares and recomputing each calculation in it",
      "Directing their efforts, informing them of responsibilities, reviewing the work",
      "Assigning only staff who have audited this client in a prior year",
      "Restricting assistants to areas of low assessed risk of misstatement"
    ],
    "answer": 1,
    "explain": "Supervision means tracking the engagement's progress, evaluating whether the team has the necessary competence, addressing significant matters as they arise, and reviewing work against the objectives."
  },
  {
    "id": "plan-14",
    "section": "plan",
    "topic": "Data analytics in planning",
    "difficulty": "medium",
    "q": "How does testing an entire population with audit data analytics affect the audit?",
    "choices": [
      "It removes sampling risk, but the exceptions identified must still be evaluated",
      "It provides sufficient appropriate evidence without further work",
      "It reduces, but does not eliminate, sampling risk for that procedure",
      "It replaces the requirement to assess the risk of material misstatement"
    ],
    "answer": 0,
    "explain": "Testing 100% of a population removes sampling risk, but the auditor must still establish that the data is complete and accurate and must investigate the exceptions the analysis surfaces."
  },
  {
    "id": "plan-15",
    "section": "plan",
    "topic": "Reliability of entity data",
    "difficulty": "medium",
    "q": "An auditor plans to use a system-generated aging report as audit evidence. What must be done first?",
    "choices": [
      "Test the accuracy and completeness of the report",
      "Obtain management's written representation about the report",
      "Confirm the report's totals with the entity's customers",
      "Recompute the entire general ledger"
    ],
    "answer": 0,
    "explain": "Information produced by the entity is only as good as its accuracy and completeness. That must be established before the report can support a conclusion, typically by testing the controls over it or by direct testing."
  },
  {
    "id": "plan-16",
    "section": "plan",
    "topic": "First-year engagements",
    "difficulty": "medium",
    "q": "What additional planning consideration applies to an initial audit engagement?",
    "choices": [
      "Obtaining sufficient appropriate evidence about opening balances",
      "Setting materiality at half the normal benchmark",
      "Testing controls for two consecutive years before relying on them",
      "Issuing a disclaimer on the prior period statements"
    ],
    "answer": 0,
    "explain": "Opening balances must be evaluated for material misstatement and for consistent application of accounting policies. The auditor may review the predecessor's documentation or perform procedures directly."
  },
  {
    "id": "evid-1",
    "section": "evid",
    "topic": "Sufficient and appropriate",
    "difficulty": "easy",
    "q": "What do sufficiency and appropriateness measure in audit evidence?",
    "choices": [
      "Sufficiency is the quantity of evidence; appropriateness is its relevance and reliability",
      "Sufficiency is its reliability; appropriateness is its cost",
      "Sufficiency is the number of procedures; appropriateness is the number of hours",
      "Sufficiency is its timeliness; appropriateness is its source"
    ],
    "answer": 0,
    "explain": "The two are interrelated: higher assessed risk demands more evidence, and lower quality evidence demands more of it. But more of a poor-quality source can never substitute for evidence that is appropriate."
  },
  {
    "id": "evid-2",
    "section": "evid",
    "topic": "Reliability of evidence",
    "difficulty": "medium",
    "q": "Which evidence is generally most reliable?",
    "choices": [
      "A confirmation received directly by the auditor from an independent bank",
      "A schedule prepared by the client's controller",
      "An oral representation from the chief executive officer",
      "A photocopy of a vendor invoice supplied by the client and stamped as approved"
    ],
    "answer": 0,
    "explain": "Evidence obtained directly by the auditor from a knowledgeable independent source outranks internally generated evidence, originals outrank copies, and written outranks oral."
  },
  {
    "id": "evid-3",
    "section": "evid",
    "topic": "Transaction assertions",
    "difficulty": "medium",
    "q": "Which assertion relates to classes of transactions rather than account balances?",
    "choices": [
      "Cutoff",
      "Existence",
      "Rights and obligations",
      "Valuation and allocation"
    ],
    "answer": 0,
    "explain": "Cutoff asks whether transactions and events were recorded in the right period, so it belongs to the transactions group. Under SAS 145 occurrence, accuracy and cutoff belong to transactions; existence, rights and obligations, and accuracy, valuation and allocation to balances; completeness, classification and presentation to both."
  },
  {
    "id": "evid-4",
    "section": "evid",
    "topic": "Direction of testing",
    "difficulty": "medium",
    "q": "An auditor traces shipping documents to sales invoices and the sales journal. Which assertion does this test?",
    "choices": [
      "Completeness of recorded sales",
      "Occurrence of recorded sales",
      "Accuracy of recorded sales",
      "Classification of recorded sales"
    ],
    "answer": 0,
    "explain": "Starting from source documents and tracing forward into the records tests completeness — that everything that happened got recorded. Vouching backward from the records to support tests occurrence."
  },
  {
    "id": "evid-5",
    "section": "evid",
    "topic": "Vouching recorded payables",
    "difficulty": "medium",
    "q": "An auditor selects items only from recorded year-end payables and vouches them to invoices. Which misstatement can never turn up in that sample?",
    "choices": [
      "Unrecorded liabilities",
      "Overstated liabilities",
      "Liabilities posted to the wrong account",
      "Liabilities with no supporting invoice"
    ],
    "answer": 0,
    "explain": "The sample is drawn only from what was recorded, so a liability never recorded cannot be selected; vouching tests existence. Completeness is tested the other way, from subsequent disbursements and unmatched receiving reports back to year end."
  },
  {
    "id": "evid-6",
    "section": "evid",
    "topic": "Inquiry alone",
    "difficulty": "easy",
    "q": "Can inquiry of management alone provide sufficient appropriate audit evidence?",
    "choices": [
      "No — it must be corroborated by other procedures",
      "Yes, when management has been cooperative in prior audits",
      "Yes, when supported by a written representation letter",
      "No, unless the inquiry is documented in writing"
    ],
    "answer": 0,
    "explain": "Inquiry alone is not sufficient to detect material misstatement or to test operating effectiveness. Responses must be corroborated, and a representation letter supplements rather than substitutes for other evidence."
  },
  {
    "id": "evid-7",
    "section": "evid",
    "topic": "Types of audit procedures",
    "difficulty": "medium",
    "q": "An auditor independently executes the client's bank reconciliation procedure. Which audit procedure is this?",
    "choices": [
      "Reperformance",
      "Observation",
      "Recalculation",
      "Inspection"
    ],
    "answer": 0,
    "explain": "Reperformance is the auditor independently executing a procedure or control the entity performs. Recalculation is narrower — checking the mathematical accuracy of documents or records."
  },
  {
    "id": "evid-8",
    "section": "evid",
    "topic": "Substantive analytical procedures",
    "difficulty": "medium",
    "q": "What makes a substantive analytical procedure effective?",
    "choices": [
      "A large sample of individual transactions drawn from the population",
      "A predictable relationship and an expectation precise enough to find misstatement",
      "Use of data supplied by management, since internal data is more precise than industry data",
      "A conclusion reached without setting any expectation in advance"
    ],
    "answer": 1,
    "explain": "The auditor must develop the expectation before comparing, using reliable data, and define in advance the difference that will be investigated. Vague expectations cannot detect material misstatement."
  },
  {
    "id": "evid-9",
    "section": "evid",
    "topic": "Observation limits",
    "difficulty": "medium",
    "q": "What is the principal limitation of observation as an audit procedure?",
    "choices": [
      "It provides evidence only at the moment it is performed",
      "It cannot be used for controls that leave no documentary trail",
      "It is persuasive only when the person observed is unaware of the auditor",
      "It requires the auditor to reperform the activity being observed"
    ],
    "answer": 0,
    "explain": "Watching a process confirms it happens when the auditor is present, and being observed may itself change behavior. That is why observation is usually combined with inquiry and reperformance."
  },
  {
    "id": "evid-10",
    "section": "evid",
    "topic": "Accounting records alone",
    "difficulty": "medium",
    "q": "Why is evidence from the entity's accounting records alone insufficient?",
    "choices": [
      "Because the records themselves are what the auditor is testing and may be misstated",
      "Because the records are always incomplete",
      "Because standards prohibit their use as evidence unless a third party has confirmed them",
      "Because they cannot be reconciled to the financial statements"
    ],
    "answer": 0,
    "explain": "The accounting records are the subject matter, so corroborating evidence from other sources — confirmations, third-party documents, physical inspection, other information — is what gives the audit its support."
  },
  {
    "id": "evid-11",
    "section": "evid",
    "topic": "External information sources",
    "difficulty": "medium",
    "q": "An auditor uses published market data to evaluate a security's fair value. What must the auditor consider?",
    "choices": [
      "Whether management subscribes to the same external data source",
      "The relevance and reliability of the source, its reputation and methodology",
      "Whether the source is audited by the same firm as the client",
      "Nothing further — external data is presumed reliable by the standards"
    ],
    "answer": 1,
    "explain": "External information is generally more reliable than internal but is not automatically appropriate. The auditor considers the source's reputation, the nature and authority of the data, and whether management used it competently."
  },
  {
    "id": "evid-12",
    "section": "evid",
    "topic": "Inconsistent evidence",
    "difficulty": "medium",
    "q": "Evidence from one source contradicts evidence from another. What must the auditor do?",
    "choices": [
      "Accept the more reliable source and disregard the conflicting evidence",
      "Determine what changes or additions to procedures will resolve the matter",
      "Average the two results and use the midpoint as the conclusion",
      "Ask management which of the two sources is the correct one"
    ],
    "answer": 1,
    "explain": "Inconsistency, or doubt about the reliability of a source, requires the auditor to modify or add procedures and to consider the effect on other aspects of the audit. It cannot simply be set aside."
  },
  {
    "id": "evid-13",
    "section": "evid",
    "topic": "Scanning",
    "difficulty": "medium",
    "q": "What is scanning as an audit procedure?",
    "choices": [
      "Selecting a statistical sample of items from the whole population",
      "Reviewing accounting data for significant or unusual items to investigate",
      "Confirming balances with third parties through an electronic platform",
      "Recomputing the mathematical accuracy of a client-prepared schedule"
    ],
    "answer": 1,
    "explain": "Scanning looks through data for anomalies — round numbers, entries posted by unexpected users, credits in a normally debit account — which are then followed up. It is a form of analytical procedure."
  },
  {
    "id": "evid-14",
    "section": "evid",
    "topic": "Cost of evidence",
    "difficulty": "medium",
    "q": "May the auditor omit a necessary procedure because of the cost or difficulty involved?",
    "choices": [
      "No — every procedure in the audit program must be performed regardless of cost",
      "No — cost and difficulty never justify omitting a procedure with no alternative",
      "Yes, if the related account balance is below performance materiality",
      "Yes, if management provides a written representation on the matter instead"
    ],
    "answer": 1,
    "explain": "The auditor weighs cost against usefulness in choosing among procedures, but cost is never a valid reason to skip a procedure for which no alternative exists. The alternative is to modify the opinion."
  },
  {
    "id": "evid-15",
    "section": "evid",
    "topic": "Assertions",
    "difficulty": "medium",
    "q": "An auditor evaluates whether disclosures are described using appropriate terminology and are clearly expressed. Which assertion is being tested?",
    "choices": [
      "Presentation — disclosures are clearly described, relevant and understandable",
      "Classification — amounts are recorded in the proper accounts",
      "Completeness — every disclosure that should be included has been",
      "Accuracy — amounts and other data in disclosures are measured appropriately"
    ],
    "answer": 0,
    "explain": "Under SAS 145 the assertions fall into two groups — transactions and events, and account balances — each with related disclosures, and each ending with presentation: amounts are appropriately aggregated or disaggregated and clearly described, and disclosures are relevant and understandable under the framework. Poor disclosure can misstate the statements even when the numbers are right."
  },
  {
    "id": "evid-16",
    "section": "evid",
    "topic": "Linking procedures to risk",
    "difficulty": "medium",
    "q": "What must the audit documentation show about further audit procedures?",
    "choices": [
      "How they respond to the assessed risks at the relevant assertion level",
      "That every account received the same extent of testing",
      "That the procedures matched the prior year's program",
      "That management agreed to the nature, timing and extent of the procedures"
    ],
    "answer": 0,
    "explain": "The file must demonstrate the linkage between assessed risks and the procedures performed. A program repeated from year to year without that linkage does not meet the standard."
  },
  {
    "id": "evid-17",
    "section": "evid",
    "topic": "Analytical procedure results",
    "difficulty": "medium",
    "q": "Gross margin rose from 31% to 38% while the industry's fell. The controller says a shift toward higher-margin products explains it. What should the auditor do next?",
    "choices": [
      "Accept the explanation, since the controller knows the product mix best",
      "Obtain a written representation confirming the shift in product mix",
      "Propose an entry reducing gross margin to last year's 31% level",
      "Corroborate the explanation with sales and cost data by product line"
    ],
    "answer": 3,
    "explain": "An unexpected analytical result calls for inquiry of management and then evidence relevant to the reply. Product-line margin data either supports the mix story or exposes a misstatement. A representation is still management's word, and last year's margin is not evidence of this year's."
  },
  {
    "id": "evid-18",
    "section": "evid",
    "topic": "Receivables evidence",
    "difficulty": "medium",
    "q": "The auditor confirmed a sample of receivables (all agreed), traced shipping documents to recorded sales, and read minutes and loan agreements showing no receivables were sold. Which assertion lacks evidence?",
    "choices": [
      "Existence: the recorded receivables are owed by real customers",
      "Completeness: all amounts customers owe at year end are recorded as receivables",
      "Valuation: receivables are stated at the amount likely to be collected",
      "Rights: the entity owns the receivables rather than having sold them"
    ],
    "answer": 2,
    "explain": "Confirmations support existence, tracing shipments forward supports completeness, and the minutes and loan agreements support rights. None of it shows customers can pay: a customer can confirm a balance it never settles. Valuation needs work on the aging, the allowance and cash collected after year end."
  },
  {
    "id": "sample-1",
    "section": "sample",
    "topic": "Sampling risk",
    "difficulty": "medium",
    "q": "What is sampling risk?",
    "choices": [
      "The risk that the auditor applies an inappropriate audit procedure",
      "The risk that a sample leads to a different conclusion than the whole population",
      "The risk that the auditor misinterprets the evidence obtained from the sampled items",
      "The risk that the population sampled from is itself incomplete"
    ],
    "answer": 1,
    "explain": "Sampling risk arises purely from examining less than 100% of a population, and larger samples reduce it. Using a wrong procedure or misreading a result is nonsampling risk, addressed by planning, supervision and review."
  },
  {
    "id": "sample-2",
    "section": "sample",
    "topic": "Effectiveness versus efficiency",
    "difficulty": "medium",
    "q": "Which sampling risk relates to audit effectiveness rather than efficiency?",
    "choices": [
      "The risk of incorrect acceptance",
      "The risk of incorrect rejection",
      "The risk of assessing control risk too high",
      "Nonsampling risk"
    ],
    "answer": 0,
    "explain": "Incorrect acceptance means the sample supports a conclusion the whole population would not, so a material misstatement can go uncorrected and the audit is less effective. Incorrect rejection only prompts unnecessary extra work, an efficiency cost."
  },
  {
    "id": "sample-3",
    "section": "sample",
    "topic": "Control testing risks",
    "difficulty": "medium",
    "q": "An auditor's sample suggests a control is operating effectively when in fact it is not. What has occurred?",
    "choices": [
      "The risk of assessing control risk too low",
      "The risk of assessing control risk too high",
      "The risk of incorrect rejection",
      "Nonsampling risk"
    ],
    "answer": 0,
    "explain": "Assessing control risk too low leads to unwarranted reliance and too little substantive testing — the effectiveness risk on the controls side. Assessing it too high merely causes unnecessary substantive work."
  },
  {
    "id": "sample-4",
    "section": "sample",
    "topic": "Choosing a sampling approach",
    "difficulty": "easy",
    "q": "Which sampling approach is used for tests of controls?",
    "choices": [
      "Attribute sampling, which estimates a rate of deviation",
      "Variables sampling, which estimates a dollar amount",
      "Probability-proportional-to-size sampling",
      "Stratified mean-per-unit estimation"
    ],
    "answer": 0,
    "explain": "Tests of controls ask how often a control failed, which is a rate — attribute sampling. Substantive tests ask how wrong the dollars are, which calls for variables or PPS sampling."
  },
  {
    "id": "sample-5",
    "section": "sample",
    "topic": "Attribute sample size",
    "difficulty": "medium",
    "q": "How does an increase in the tolerable deviation rate affect the required sample size for a test of controls?",
    "choices": [
      "Sample size decreases",
      "Sample size increases",
      "Sample size is unaffected",
      "Sample size becomes indeterminate"
    ],
    "answer": 0,
    "explain": "Greater tolerance for deviation means less precision is needed, so a smaller sample suffices. A higher expected deviation rate or a higher required confidence level both push sample size up."
  },
  {
    "id": "sample-6",
    "section": "sample",
    "topic": "Evaluating control deviations",
    "difficulty": "medium",
    "q": "How does the auditor evaluate the results of an attribute sample?",
    "choices": [
      "Compare the sample deviation rate directly with the tolerable rate",
      "Compare the upper deviation rate, including sampling risk, to the tolerable rate",
      "Project the deviations into a dollar misstatement and compare it to tolerable misstatement",
      "Compare the number of deviations found to the number expected"
    ],
    "answer": 1,
    "explain": "The sample deviation rate plus the allowance for sampling risk gives the upper deviation rate. Only if that figure is at or below the tolerable rate may the auditor rely on the control as planned."
  },
  {
    "id": "sample-7",
    "section": "sample",
    "topic": "Probability proportional to size",
    "difficulty": "medium",
    "q": "Which is a characteristic of PPS sampling?",
    "choices": [
      "Every item in the population has an equal chance of being selected",
      "Items are selected in proportion to dollar amount, favoring larger items",
      "Zero and negative balances are automatically included in the sample",
      "It is most effective when many understatements are expected"
    ],
    "answer": 1,
    "explain": "PPS is built to detect overstatement and automatically picks up any item larger than the sampling interval. Zero and negative balances need separate treatment, and understatement testing is a poor fit."
  },
  {
    "id": "sample-8",
    "section": "sample",
    "topic": "Stratification",
    "difficulty": "medium",
    "q": "Why does an auditor stratify a population before sampling?",
    "choices": [
      "To reduce variability within each group and thereby the overall sample size",
      "To exclude the largest items from testing",
      "To convert a nonstatistical sample into a statistical one",
      "To eliminate the need to project misstatements found in the lower-value strata"
    ],
    "answer": 0,
    "explain": "Grouping items with similar characteristics reduces variability within each stratum, which improves efficiency. High-value items are often examined 100% and removed from the sampled population entirely."
  },
  {
    "id": "sample-9",
    "section": "sample",
    "topic": "Substantive sample size",
    "difficulty": "medium",
    "q": "Which change increases the sample size for a substantive test of details?",
    "choices": [
      "A decrease in tolerable misstatement",
      "A decrease in the assessed risk of material misstatement",
      "An increase in the acceptable risk of incorrect acceptance",
      "An increase in the use of other substantive procedures for the same assertion"
    ],
    "answer": 0,
    "explain": "Less tolerance for misstatement demands more precision and therefore a larger sample. Lower assessed risk, greater acceptable incorrect-acceptance risk, and more corroborating procedures all push sample size down."
  },
  {
    "id": "sample-10",
    "section": "sample",
    "topic": "Population completeness",
    "difficulty": "medium",
    "q": "Why must the auditor establish that the population is complete before sampling from it?",
    "choices": [
      "Because a conclusion from the sample extends only to the population actually sampled",
      "Because incomplete populations require statistical rather than nonstatistical sampling",
      "Because the standards require reconciling the population to the tax return",
      "Because completeness determines the confidence level"
    ],
    "answer": 0,
    "explain": "Items excluded from the population were never subject to selection, so the sample says nothing about them. Reconciling the population to the general ledger is the usual way to establish completeness."
  },
  {
    "id": "sample-11",
    "section": "sample",
    "topic": "Projecting misstatements",
    "difficulty": "medium",
    "q": "Using ratio projection, an auditor finds $4,000 of misstatement in a sample of $200,000 recorded value from a $2,000,000 population. What is the projected misstatement?",
    "choices": [
      "$40,000",
      "$4,000",
      "$400,000",
      "$20,000"
    ],
    "answer": 0,
    "explain": "The sample's misstatement rate is $4,000 ÷ $200,000 = 2%, and 2% of the $2,000,000 population is $40,000. That is the projection before any allowance for sampling risk; together they are compared with tolerable misstatement."
  },
  {
    "id": "sample-12",
    "section": "sample",
    "topic": "Selection methods",
    "difficulty": "medium",
    "q": "Which selection method is generally inappropriate for a statistical sample?",
    "choices": [
      "Block selection of consecutive items",
      "Random number selection",
      "Systematic selection with a random start",
      "Stratified random selection"
    ],
    "answer": 0,
    "explain": "Contiguous blocks are unlikely to represent the population, since items near each other often share characteristics. Statistical sampling requires every item to have a known chance of selection."
  },
  {
    "id": "sample-13",
    "section": "sample",
    "topic": "Nonstatistical sampling",
    "difficulty": "medium",
    "q": "What is true of nonstatistical sampling?",
    "choices": [
      "It is permitted, but the auditor must still consider sampling risk when projecting results",
      "It is permitted, but only when the population is too small for a statistical sample to be drawn",
      "It allows sampling risk to be quantified without a statistical formula",
      "It removes the need to project misstatements found in the sample"
    ],
    "answer": 0,
    "explain": "Both approaches are acceptable and both require professional judgment. The difference is that statistical sampling lets the auditor measure sampling risk numerically rather than judgmentally."
  },
  {
    "id": "sample-14",
    "section": "sample",
    "topic": "Isolated misstatements",
    "difficulty": "medium",
    "q": "Management says a misstatement found in an audit sample was an isolated mistake. Under AU-C 530, what does the auditor do with it?",
    "choices": [
      "Investigate its nature and cause, and include it in the projection",
      "Exclude it from the projection because management calls it isolated",
      "Exclude it from the projection if it is below performance materiality",
      "Exclude it from the projection once the failed control has been fixed"
    ],
    "answer": 0,
    "explain": "U.S. standards drop the international option to treat a sampled misstatement as an anomaly: under AU-C 530 the auditor investigates its nature and cause and projects it like any other. Management's word that it was isolated, its size, or a later fix does not take it out of the projection."
  },
  {
    "id": "sample-15",
    "section": "sample",
    "topic": "Deviation causes",
    "difficulty": "medium",
    "q": "Beyond counting deviations, what should the auditor do when control deviations are found?",
    "choices": [
      "Investigate their nature and cause and consider the effect on the rest of the audit",
      "Immediately conclude that a material weakness exists",
      "Increase the tolerable deviation rate so that the sample results support reliance as planned",
      "Extend the sample until the deviation rate falls below tolerable"
    ],
    "answer": 0,
    "explain": "The cause matters — a deliberate circumvention has very different implications from a clerical slip, and a deviation may point to fraud risk or affect the reliance placed on related controls."
  },
  {
    "id": "sample-16",
    "section": "sample",
    "topic": "When sampling does not apply",
    "difficulty": "medium",
    "q": "In which situation is audit sampling NOT involved?",
    "choices": [
      "Selecting all items over a specified amount for 100% examination",
      "Selecting 60 invoices at random from a population of 4,000",
      "Applying PPS selection to accounts receivable",
      "Testing 40 purchase orders for evidence of approval"
    ],
    "answer": 0,
    "explain": "Sampling means applying procedures to less than 100% of a population so that a conclusion can be drawn about the whole. Examining every item above a threshold draws a conclusion only about those items."
  },
  {
    "id": "confirm-1",
    "section": "confirm",
    "topic": "Positive versus negative",
    "difficulty": "medium",
    "q": "How does a negative confirmation differ from a positive confirmation?",
    "choices": [
      "The recipient responds only if they disagree with the stated information",
      "The recipient supplies the balance rather than confirming a stated amount",
      "The request is sent by the client rather than the auditor",
      "The response is returned to the client rather than the auditor"
    ],
    "answer": 0,
    "explain": "A negative request asks for a reply only if the recipient disagrees, so silence proves little: the request may never have been read. That makes it weaker evidence than a positive request, which asks for a reply either way."
  },
  {
    "id": "confirm-2",
    "section": "confirm",
    "topic": "Using negative confirmations",
    "difficulty": "medium",
    "q": "Under AICPA standards, when may negative confirmations be the only substantive procedure for an assertion?",
    "choices": [
      "The population consists of a few large balances, each individually significant to the account",
      "Risk is assessed low with controls tested, and balances are many, small and homogeneous",
      "The auditor expects a high rate of exceptions among the responses",
      "Management has requested that positive requests not be sent out"
    ],
    "answer": 1,
    "explain": "All four conditions must hold: low assessed risk backed by tests of the relevant controls, many small homogeneous balances, a very low expected exception rate, and no reason to think recipients will ignore the requests. Under PCAOB AS 2310 negative requests never stand alone."
  },
  {
    "id": "confirm-3",
    "section": "confirm",
    "topic": "Nonresponses",
    "difficulty": "medium",
    "q": "A customer does not reply to a positive confirmation request after a second mailing. What should the auditor do?",
    "choices": [
      "Treat the nonresponse as confirming the recorded balance is correct",
      "Perform alternative procedures such as examining subsequent cash receipts",
      "Ask the client to contact the customer and request a response",
      "Remove the item from the sample and select a replacement item"
    ],
    "answer": 1,
    "explain": "A nonresponse to a positive request gives no evidence, so the auditor performs alternative procedures such as examining subsequent cash receipts. An unresolved item can still affect the sample's conclusion or the opinion even if the balance is small, and some situations require a direct reply."
  },
  {
    "id": "confirm-4",
    "section": "confirm",
    "topic": "Presumption for receivables",
    "difficulty": "medium",
    "q": "In a nonissuer audit, when may the auditor skip confirming accounts receivable?",
    "choices": [
      "When management objects, with no valid reason, to confirmation requests being sent",
      "If immaterial, if confirming would be ineffective, or if low risk is covered by other procedures",
      "When the controls over receivables have been tested, found effective and relied on",
      "When the receivables are due from one major customer whose payments are seen after year end"
    ],
    "answer": 1,
    "explain": "AU-C 330 presumes receivables are confirmed unless they are immaterial, confirmation would be ineffective, or assessed risk is low and other substantive procedures address it; low risk alone is not enough. The reason is documented. Issuer audits follow PCAOB AS 2310's own cash and receivables rules."
  },
  {
    "id": "confirm-5",
    "section": "confirm",
    "topic": "Management refusal",
    "difficulty": "medium",
    "q": "Management refuses to allow the auditor to confirm a significant receivable. What should the auditor do first?",
    "choices": [
      "Immediately disclaim an opinion on the financial statements as a whole",
      "Ask the reasons for the refusal and evaluate whether they are reasonable",
      "Send the confirmation request anyway without management's knowledge",
      "Accept the refusal and rely on the management representation letter"
    ],
    "answer": 1,
    "explain": "The auditor asks why, evaluates the implications for risk assessment including fraud risk, and performs alternative procedures. Refusal without a valid reason is a scope limitation to be communicated to those charged with governance."
  },
  {
    "id": "confirm-6",
    "section": "confirm",
    "topic": "Control over requests",
    "difficulty": "medium",
    "q": "Why must the auditor maintain control over confirmation requests and responses?",
    "choices": [
      "To keep the client from intercepting or altering requests or replies",
      "To ensure requests go only to customers management selects for confirmation",
      "To document the mailing date for the roll-forward period",
      "To allow the client to follow up on nonresponses"
    ],
    "answer": 0,
    "explain": "Confirmation evidence is reliable because it comes directly from an independent source to the auditor. The auditor controls the requests and receives replies directly; letting the client intercept or change them destroys that, and a reply routed through the client needs follow-up before it counts."
  },
  {
    "id": "confirm-7",
    "section": "confirm",
    "topic": "Inventory observation",
    "difficulty": "medium",
    "q": "When inventory is material to the financial statements, what does the auditor generally do?",
    "choices": [
      "Attend the physical inventory count and perform test counts",
      "Confirm the quantities with the entity's suppliers",
      "Rely on management's representation about quantities",
      "Recompute the inventory valuation from purchase invoices"
    ],
    "answer": 0,
    "explain": "Attendance is required when inventory is material: evaluate management's procedures, observe the count, inspect the inventory, and perform test counts in both directions. Attendance is impracticable only in rare cases."
  },
  {
    "id": "confirm-8",
    "section": "confirm",
    "topic": "Inventory held by others",
    "difficulty": "medium",
    "q": "A material amount of the entity's inventory is held in a public warehouse. What is the auditor's primary procedure?",
    "choices": [
      "Confirm the quantities and condition with the custodian",
      "Accept the warehouse receipts provided by the client",
      "Confirm the balance with the entity's insurance carrier",
      "Recompute the storage fees charged during the period"
    ],
    "answer": 0,
    "explain": "Direct confirmation with the third-party custodian is the primary procedure. When the amounts are especially significant, the auditor may also attend the count or obtain a service auditor's report on the warehouse's controls."
  },
  {
    "id": "confirm-9",
    "section": "confirm",
    "topic": "Test count direction",
    "difficulty": "medium",
    "q": "During an inventory observation, the auditor selects items from the client's count sheets and locates them on the floor. Which assertion does this test?",
    "choices": [
      "Existence",
      "Completeness",
      "Valuation",
      "Rights and obligations"
    ],
    "answer": 0,
    "explain": "From records to the floor tests existence. Selecting items on the floor and tracing them to the count sheets tests completeness — the auditor should do both."
  },
  {
    "id": "confirm-10",
    "section": "confirm",
    "topic": "Bank confirmations",
    "difficulty": "medium",
    "q": "What does the standard financial institution confirmation request cover?",
    "choices": [
      "Deposit balances and direct liabilities such as loans outstanding",
      "All contingent liabilities, compensating balances and lines of credit",
      "The bank's assessment of the entity's creditworthiness",
      "Every transaction processed during the period"
    ],
    "answer": 0,
    "explain": "The standard form covers deposit balances and direct borrowings, and asks about additional information that comes to the respondent's attention. Contingent liabilities and unusual arrangements need separate, tailored requests."
  },
  {
    "id": "confirm-11",
    "section": "confirm",
    "topic": "Legal letters",
    "difficulty": "medium",
    "q": "What is the primary purpose of the letter of audit inquiry to the client's legal counsel?",
    "choices": [
      "To corroborate management's information about litigation, claims and assessments",
      "To obtain counsel's opinion on the entity's compliance with all laws",
      "To have counsel confirm the adequacy of the entity's loss contingency disclosures",
      "To obtain a legal opinion on the auditor's report wording"
    ],
    "answer": 0,
    "explain": "The letter is the auditor's main way to corroborate what management says about litigation, claims and assessments. Management prepares and signs the request, the auditor sends it, and counsel replies directly to the auditor. It is not an opinion on compliance with every law."
  },
  {
    "id": "confirm-12",
    "section": "confirm",
    "topic": "Refusal by counsel",
    "difficulty": "medium",
    "q": "The client's lawyer refuses to furnish the information requested in the audit inquiry letter. How should the auditor treat this?",
    "choices": [
      "As a scope limitation precluding an unmodified opinion",
      "As adequate evidence that no litigation exists",
      "As a matter to be disclosed in an emphasis-of-matter paragraph",
      "As grounds for confirming directly with the opposing parties"
    ],
    "answer": 0,
    "explain": "A refusal to respond is a limitation on the scope of the audit, leading to a qualified opinion or a disclaimer. A lawyer's limitation to matters they gave substantive attention to is not a scope limitation."
  },
  {
    "id": "confirm-13",
    "section": "confirm",
    "topic": "Confirming terms",
    "difficulty": "medium",
    "q": "Why might an auditor confirm the terms of a sales agreement rather than just the balance?",
    "choices": [
      "To verify the customer's credit rating with an outside agency",
      "To detect side agreements such as return rights affecting revenue",
      "To determine the customer's ability to pay the outstanding balance",
      "To establish the customer's fiscal year end for cutoff testing"
    ],
    "answer": 1,
    "explain": "Confirming terms — return rights, acceptance provisions, consignment arrangements — targets undisclosed side agreements that improperly accelerate revenue. Confirming a balance alone would miss them."
  },
  {
    "id": "confirm-14",
    "section": "confirm",
    "topic": "Electronic confirmations",
    "difficulty": "medium",
    "q": "An auditor receives confirmations through a third-party electronic platform. What must the auditor consider?",
    "choices": [
      "Whether the client has approved the use of that particular platform",
      "Whether the process is secure so responses come from the intended sources",
      "Whether the platform is audited by the same firm as the client",
      "Nothing further — electronic confirmations are inherently reliable"
    ],
    "answer": 1,
    "explain": "Electronic responses raise risks of interception and of the respondent not being who they appear to be. The auditor evaluates the platform's controls, sometimes by reference to a service auditor's report."
  },
  {
    "id": "confirm-15",
    "section": "confirm",
    "topic": "Exceptions",
    "difficulty": "medium",
    "q": "A confirmation reply reports a balance different from the client's records. What should the auditor do?",
    "choices": [
      "Investigate the difference to determine whether it indicates a misstatement",
      "Accept the customer's figure and propose an adjustment",
      "Treat the reply as a nonresponse and apply alternative procedures",
      "Ask the client to correct its records to match"
    ],
    "answer": 0,
    "explain": "Many exceptions turn out to be timing differences such as goods or payments in transit rather than misstatements. Each must be investigated, and those that are misstatements are accumulated for evaluation."
  },
  {
    "id": "confirm-16",
    "section": "confirm",
    "topic": "Timing of confirmations",
    "difficulty": "medium",
    "q": "An auditor confirms receivables as of an interim date. What else is required?",
    "choices": [
      "Procedures covering the period from the confirmation date to year end",
      "A second confirmation at year end for the same customers",
      "A management representation that the intervening activity was properly recorded",
      "Nothing further, if the interim results were satisfactory"
    ],
    "answer": 0,
    "explain": "Roll-forward procedures must cover the remaining period, typically by testing the intervening activity and reconciling to the year-end balance. Higher assessed risk makes interim confirmation less appropriate."
  },
  {
    "id": "estim-1",
    "section": "estim",
    "topic": "Approaches to estimates",
    "difficulty": "medium",
    "q": "Which is NOT one of the auditor's approaches to testing an accounting estimate?",
    "choices": [
      "Test how management made the estimate and the data it used",
      "Develop an independent estimate for comparison",
      "Review subsequent events that provide evidence about the estimate",
      "Require management to adopt the auditor's own estimate"
    ],
    "answer": 3,
    "explain": "The approaches are testing how management made the estimate, developing an independent point estimate or range, and using evidence from events after the period. Imposing the auditor's own figure is not one of them; the auditor may propose a correction, but the recorded estimate stays management's."
  },
  {
    "id": "estim-2",
    "section": "estim",
    "topic": "Management bias",
    "difficulty": "medium",
    "q": "Which pattern most suggests management bias in estimates?",
    "choices": [
      "Estimates that differ in amount from those made in the prior year",
      "Estimates that consistently land at the most favorable end of the range",
      "Estimates that required the involvement of an outside specialist",
      "Estimates with a wide range of reasonably possible outcomes"
    ],
    "answer": 1,
    "explain": "Individually reasonable estimates that all lean the same way suggest a systematic tilt. The auditor evaluates whether that indicates bias representing a material misstatement, and considers the effect on the audit as a whole."
  },
  {
    "id": "estim-3",
    "section": "estim",
    "topic": "Retrospective review",
    "difficulty": "medium",
    "q": "What does comparing prior-year estimates with actual outcomes provide?",
    "choices": [
      "A basis for restating the prior-year financial statements as issued",
      "Evidence about management's estimation process and any possible bias",
      "Proof that the prior-year audit opinion was inappropriate",
      "A substitute for testing the current-year estimate directly"
    ],
    "answer": 1,
    "explain": "The retrospective review is a risk assessment procedure, not a hindsight judgment of the prior audit. A difference between the prior estimate and the outcome does not by itself mean the prior statements were misstated."
  },
  {
    "id": "estim-4",
    "section": "estim",
    "topic": "Estimation uncertainty",
    "difficulty": "medium",
    "q": "An estimate has high estimation uncertainty. How should the auditor respond?",
    "choices": [
      "Require management to replace the estimate with a known amount",
      "Treat it as a possible significant risk and evaluate the disclosures",
      "Exclude the estimate from the scope of the audit engagement",
      "Set materiality lower for the engagement as a whole"
    ],
    "answer": 1,
    "explain": "High estimation uncertainty often means a significant risk, requiring focused procedures and close attention to disclosure of the underlying assumptions and the range of reasonably possible outcomes."
  },
  {
    "id": "estim-5",
    "section": "estim",
    "topic": "Fair value hierarchy",
    "difficulty": "medium",
    "q": "Which input sits at Level 3 of the fair value hierarchy?",
    "choices": [
      "An unobservable input reflecting market participants' assumptions",
      "A quoted price in an active market for an identical asset",
      "A quoted price for a similar asset in an active market",
      "An observable interest rate curve"
    ],
    "answer": 0,
    "explain": "Level 1 is quoted prices for identical items in active markets, Level 2 other observable inputs, and Level 3 unobservable inputs. An entity may start from its own data, but Level 3 inputs must still reflect what market participants would assume. Such measurements often carry higher audit risk."
  },
  {
    "id": "estim-6",
    "section": "estim",
    "topic": "Auditing Level 3 inputs",
    "difficulty": "medium",
    "q": "What is the auditor's focus when auditing a Level 3 fair value measurement?",
    "choices": [
      "The quoted market price for the asset on the last day of the period",
      "Whether the significant assumptions and the valuation model are appropriate",
      "Whether the entity intends to sell the asset in the near term",
      "Whether the measurement agrees with the prior-year carrying amount"
    ],
    "answer": 1,
    "explain": "With no observable price, the audit turns on whether the model is appropriate for the asset and whether the significant assumptions are reasonable and internally consistent. A valuation specialist is frequently needed."
  },
  {
    "id": "estim-7",
    "section": "estim",
    "topic": "Auditor's range",
    "difficulty": "medium",
    "q": "The auditor develops a range of reasonable amounts and management's estimate falls outside it. What follows?",
    "choices": [
      "The auditor must adopt management's estimate as reasonable",
      "The difference to the nearest point of the auditor's range is a misstatement",
      "The range must be widened until it includes management's figure",
      "The matter is reported only if the difference exceeds overall materiality"
    ],
    "answer": 1,
    "explain": "When management's point estimate lies outside the auditor's range, the misstatement is the difference to the closest boundary. It is accumulated with other misstatements for evaluation at the end of the audit."
  },
  {
    "id": "estim-8",
    "section": "estim",
    "topic": "Identifying related parties",
    "difficulty": "medium",
    "q": "Which procedure helps identify related parties management has not disclosed?",
    "choices": [
      "Confirming outstanding balances with the entity's principal customers",
      "Reviewing minutes, conflict-of-interest statements and unusual transactions",
      "Recomputing the elimination entries in the consolidation worksheet",
      "Confirming intercompany balances with consolidated subsidiaries"
    ],
    "answer": 1,
    "explain": "Undisclosed relationships surface through minutes, conflict-of-interest declarations, shareholder registers, tax filings and transactions lacking obvious business purpose. The team is alerted to watch for them throughout."
  },
  {
    "id": "estim-9",
    "section": "estim",
    "topic": "Arm's-length assertions",
    "difficulty": "medium",
    "q": "Management asserts in the notes that a related party transaction was on terms equivalent to an arm's-length transaction. What does the auditor require?",
    "choices": [
      "Only a written representation from management confirming the terms",
      "Sufficient appropriate evidence, since the assertion cannot just be accepted",
      "Confirmation of the transaction terms from the related party itself",
      "Nothing — such assertions fall outside the scope of the audit"
    ],
    "answer": 1,
    "explain": "Equivalence to arm's length is difficult to substantiate and cannot rest on management's word. If the assertion cannot be supported, it should be removed or the opinion modified."
  },
  {
    "id": "estim-10",
    "section": "estim",
    "topic": "Business rationale",
    "difficulty": "medium",
    "q": "For a significant related party transaction with no clear business purpose, what does AU-C 550 have the auditor evaluate?",
    "choices": [
      "Whether the related party's own auditor issued a clean opinion",
      "Whether it was entered into to misstate the financials or conceal theft",
      "Whether the transaction was approved by the entity's principal bank",
      "Whether the amount involved exceeds performance materiality"
    ],
    "answer": 1,
    "explain": "AU-C 550 has the auditor evaluate whether the missing business rationale suggests the transaction was entered into to misstate the statements or conceal misappropriation. The terms and the approvals are examined too, but they are not what the missing rationale raises."
  },
  {
    "id": "estim-11",
    "section": "estim",
    "topic": "Related party disclosure",
    "difficulty": "medium",
    "q": "What must the auditor evaluate about related party relationships and transactions?",
    "choices": [
      "Whether they should be eliminated before the end of the period",
      "Whether they are properly identified, accounted for and disclosed",
      "Whether they were approved by a majority of the shareholders",
      "Whether the related parties are audited by the same firm"
    ],
    "answer": 1,
    "explain": "The auditor's objective is to obtain sufficient evidence about identification, accounting and disclosure, and to understand the relationships well enough to judge whether the statements achieve fair presentation."
  },
  {
    "id": "estim-12",
    "section": "estim",
    "topic": "Specialists and estimates",
    "difficulty": "medium",
    "q": "Management uses an actuary to compute the pension obligation. What must the auditor do?",
    "choices": [
      "Accept the actuarial report without performing further procedures",
      "Evaluate the actuary's competence and objectivity and test the assumptions",
      "Engage a second independent actuary to recompute the obligation",
      "Require management to compute the obligation using internal staff"
    ],
    "answer": 1,
    "explain": "Using a management's specialist does not shift the auditor's responsibility. The auditor evaluates the specialist, obtains an understanding of the work, and tests the relevance and reasonableness of the assumptions and source data."
  },
  {
    "id": "estim-13",
    "section": "estim",
    "topic": "Written representations",
    "difficulty": "medium",
    "q": "What representation about estimates does the auditor obtain from management?",
    "choices": [
      "That the methods, assumptions and data used are appropriate under the framework",
      "That the estimates will prove accurate when the future periods are reported",
      "That the estimates were reviewed and approved by the audit committee",
      "That the estimates use the same methodology as the prior year's"
    ],
    "answer": 0,
    "explain": "SAS 143 requires written representations that the methods, significant assumptions and data used in making estimates and related disclosures are appropriate to achieve recognition, measurement and disclosure under the applicable framework. Nobody can represent that an estimate will turn out correct."
  },
  {
    "id": "estim-14",
    "section": "estim",
    "topic": "Allowance for credit losses",
    "difficulty": "medium",
    "q": "Which procedure best tests the adequacy of the allowance for credit losses?",
    "choices": [
      "Confirming the gross receivable balances directly with the customers most past due",
      "Evaluating the aging and loss assumptions and reviewing subsequent collections",
      "Recomputing the arithmetic accuracy of the client's aging schedule",
      "Comparing the allowance percentage with the prior-year percentage"
    ],
    "answer": 1,
    "explain": "Confirmation supports existence, not collectibility. Valuation depends on the reasonableness of loss assumptions applied to a reliable aging, corroborated by what was actually collected after year end."
  },
  {
    "id": "estim-15",
    "section": "estim",
    "topic": "Documenting estimates",
    "difficulty": "medium",
    "q": "What must the auditor document about significant accounting estimates?",
    "choices": [
      "Management's original working papers supporting the estimate in full",
      "The basis for concluding it is reasonable and any indicators of bias",
      "A written waiver from management for any remaining disagreement",
      "The specialist's fee arrangement with the entity's management"
    ],
    "answer": 1,
    "explain": "The file records the basis for the auditor's conclusion on reasonableness and disclosure, together with any indicators of possible bias and the auditor's evaluation of them."
  },
  {
    "id": "estim-16",
    "section": "estim",
    "topic": "Subsequent events and estimates",
    "difficulty": "medium",
    "q": "How can events after the balance sheet date help audit an estimate?",
    "choices": [
      "They may provide evidence about conditions that existed at the balance sheet date",
      "They replace the need to test management's process in all cases",
      "They establish that the estimate was made in good faith and free of management bias",
      "They shift responsibility for the estimate to the subsequent period"
    ],
    "answer": 0,
    "explain": "A receivable collected after year end, or a lawsuit settled before the report date, evidences the condition at the balance sheet date. Events reflecting new conditions arising afterward do not adjust the estimate."
  },
  {
    "id": "complete-1",
    "section": "complete",
    "topic": "Types of subsequent events",
    "difficulty": "medium",
    "q": "A customer with a large year-end receivable declares bankruptcy two weeks after the balance sheet date, having been in financial distress for months. How is this treated?",
    "choices": [
      "As a recognized subsequent event requiring adjustment of the financial statements",
      "As a nonrecognized subsequent event, since the bankruptcy filing came after year end",
      "As neither, since it occurred after the period",
      "As a matter for an emphasis-of-matter paragraph only"
    ],
    "answer": 0,
    "explain": "The condition — the customer's deteriorating financial state — existed at the balance sheet date, so the event provides evidence about it and the allowance is adjusted. Events arising from new conditions after year end get disclosure instead."
  },
  {
    "id": "complete-2",
    "section": "complete",
    "topic": "Nonrecognized events",
    "difficulty": "medium",
    "q": "A fire destroys a major plant three weeks after year end. How should this be handled?",
    "choices": [
      "Disclosed in the notes if material, without adjusting the amounts",
      "Adjusted in the financial statements as a loss of the prior period",
      "Ignored, since the auditor's responsibility ends at the balance sheet date",
      "Reported as a material weakness in internal control"
    ],
    "answer": 0,
    "explain": "The condition arose after the balance sheet date, so no adjustment is made, but disclosure is required if the event is significant enough that omitting it would mislead users."
  },
  {
    "id": "complete-3",
    "section": "complete",
    "topic": "Subsequent events period",
    "difficulty": "medium",
    "q": "Through what date do the auditor's active subsequent events procedures extend?",
    "choices": [
      "The date of the auditor's report",
      "The balance sheet date",
      "The date the financial statements are filed with a regulator",
      "Sixty days after the report release date"
    ],
    "answer": 0,
    "explain": "Procedures such as reading interim statements, inquiring of management and counsel, and reading minutes run through the report date. That is also the date on which sufficient appropriate evidence has been obtained."
  },
  {
    "id": "complete-4",
    "section": "complete",
    "topic": "Dating the report",
    "difficulty": "medium",
    "q": "After the report date but before release, management amends a note for a subsequent event and the auditor's further procedures cover only that event. How may the report be dated?",
    "choices": [
      "Dual dated — the original date, with a later date for the specific event",
      "Dated as of the original date, with no reference to the event",
      "Dated as of the original date, with the event noted in an other-matter paragraph",
      "Dated as of the financial statement issuance date"
    ],
    "answer": 0,
    "explain": "Dual dating keeps the original date for the audit as a whole and adds a later date only for the amended note, so responsibility for other subsequent events stops at the original date. Dating the whole report later is the other route, but only with subsequent-event procedures extended to that date; the original date alone is not permitted."
  },
  {
    "id": "complete-5",
    "section": "complete",
    "topic": "Subsequently discovered facts",
    "difficulty": "medium",
    "q": "After the report is released, the auditor learns of a fact that existed at the report date and would have changed the report. What is the first step?",
    "choices": [
      "Discuss the matter with management and determine whether the statements need revision",
      "Notify all known users and any regulatory agency that the report should not be relied on",
      "Withdraw the report without further inquiry",
      "Issue a new report dated as of the current date"
    ],
    "answer": 0,
    "explain": "The auditor discusses it with management and those charged with governance and determines whether revision is needed. Only if management refuses to act does the auditor take steps to prevent reliance on the report."
  },
  {
    "id": "complete-6",
    "section": "complete",
    "topic": "Representation letter",
    "difficulty": "easy",
    "q": "How should the management representation letter be dated?",
    "choices": [
      "As of the date of the auditor's report",
      "As of the balance sheet date",
      "As of the date fieldwork began",
      "As of the date the financial statements are issued"
    ],
    "answer": 0,
    "explain": "The letter is dated as of the auditor's report date and covers all periods in the statements, even if current management was not present for the earlier ones."
  },
  {
    "id": "complete-7",
    "section": "complete",
    "topic": "Refusal to represent",
    "difficulty": "medium",
    "q": "Management refuses to sign the representation letter at all. What is the consequence?",
    "choices": [
      "The auditor disclaims an opinion or withdraws from the engagement",
      "The auditor issues a qualified opinion",
      "The auditor documents the refusal and proceeds unmodified",
      "The auditor obtains the representations from the audit committee instead"
    ],
    "answer": 0,
    "explain": "Refusing the representations about management's responsibilities and the completeness of information is a scope limitation too pervasive for a qualified opinion, and it casts doubt on everything else management has said. Refusing a single lesser representation is judged on its facts."
  },
  {
    "id": "complete-8",
    "section": "complete",
    "topic": "Going concern period",
    "difficulty": "medium",
    "q": "A nonissuer reports under FASB GAAP. Over what period is substantial doubt about its ability to continue as a going concern evaluated?",
    "choices": [
      "One year after the balance sheet date, extended for known events beyond that date",
      "One year after the date the financial statements are issued or available to be issued",
      "Two years after the balance sheet date, matching the comparative periods presented",
      "The period covered by management's most recent internal forecast"
    ],
    "answer": 1,
    "explain": "Under FASB ASC 205-40 the horizon is one year after the statements are issued or available to be issued, and AU-C 570 takes it from the framework. PCAOB AS 2415 and GASB use one year beyond the balance sheet date instead, and GASB also weighs known information shortly beyond it."
  },
  {
    "id": "complete-9",
    "section": "complete",
    "topic": "Going concern reporting",
    "difficulty": "medium",
    "q": "Substantial doubt remains after management's plans are considered, the going concern basis is appropriate, and disclosure is adequate. What does the auditor issue?",
    "choices": [
      "A qualified opinion, with the doubt described in the basis section",
      "An unmodified opinion with a separate going concern section",
      "An adverse opinion, since the going concern basis is in question",
      "A disclaimer of opinion on the financial statements as a whole"
    ],
    "answer": 1,
    "explain": "Adequate disclosure supports an unmodified opinion accompanied by a section headed Substantial Doubt About the Entity's Ability to Continue as a Going Concern. Inadequate disclosure leads to a qualified or adverse opinion instead."
  },
  {
    "id": "complete-10",
    "section": "complete",
    "topic": "Management's plans",
    "difficulty": "medium",
    "q": "Management's plans to alleviate substantial doubt include selling a subsidiary. What must the auditor evaluate?",
    "choices": [
      "Whether the plans will probably be carried out and would mitigate the doubt",
      "Whether the sale price will exceed the subsidiary's carrying amount",
      "Whether the board has met to discuss the sale",
      "Whether the subsidiary is audited by the same firm"
    ],
    "answer": 0,
    "explain": "The auditor evaluates whether it is probable that management's plans will be effectively implemented and, if so, that they will mitigate the conditions raising substantial doubt, with evidence such as signed agreements or committed financing. Vague intentions are not enough."
  },
  {
    "id": "complete-11",
    "section": "complete",
    "topic": "Final analytical procedures",
    "difficulty": "medium",
    "q": "What is the purpose of analytical procedures performed near the end of the audit?",
    "choices": [
      "To gather substantive evidence about account balances not covered by tests of details",
      "To form an overall conclusion that the statements match the auditor's understanding",
      "To test the operating effectiveness of the entity's key controls",
      "To determine whether materiality was set at an appropriate level"
    ],
    "answer": 1,
    "explain": "The final review steps back and asks whether the statements as a whole make sense given everything learned. An unexplained relationship at this stage may signal a previously unrecognized risk."
  },
  {
    "id": "complete-12",
    "section": "complete",
    "topic": "Evaluating misstatements",
    "difficulty": "medium",
    "q": "How does the auditor evaluate uncorrected misstatements at the end of the audit?",
    "choices": [
      "Individually and in the aggregate, considering both quantitative and qualitative factors",
      "In the aggregate against overall materiality, after netting overstatements against understatements",
      "Individually against performance materiality, weighing qualitative factors when fraud is suspected",
      "Those above the clearly trivial threshold, in aggregate against performance materiality"
    ],
    "answer": 0,
    "explain": "The auditor accumulates all misstatements above clearly trivial, considers the effect of prior-period uncorrected misstatements, and weighs qualitative factors alongside the totals."
  },
  {
    "id": "complete-13",
    "section": "complete",
    "topic": "Communicating misstatements",
    "difficulty": "medium",
    "q": "What must the auditor do with uncorrected misstatements?",
    "choices": [
      "Correct them in the financial statements on management's behalf",
      "Communicate them to those charged with governance and request correction",
      "Disclose them in an other-matter paragraph in the report",
      "Report them to the entity's principal regulator in writing"
    ],
    "answer": 1,
    "explain": "Uncorrected misstatements go to those charged with governance, individually identified where significant, with a request for correction. If management refuses and the effect is material, the opinion is modified."
  },
  {
    "id": "complete-14",
    "section": "complete",
    "topic": "Prior-period misstatements",
    "difficulty": "medium",
    "q": "Why must the auditor consider uncorrected misstatements from prior periods?",
    "choices": [
      "Because prior-period misstatements must always be restated",
      "Because their reversal or accumulation can materially affect this period",
      "Because the prior auditor's opinion must be reissued each year",
      "Because they determine the current year's materiality level"
    ],
    "answer": 1,
    "explain": "An immaterial misstatement left uncorrected can reverse into the current period or accumulate with new ones. Both the rollover and iron curtain perspectives are considered in judging the current-period effect."
  },
  {
    "id": "complete-15",
    "section": "complete",
    "topic": "Communications with governance",
    "difficulty": "medium",
    "q": "Which matter must the auditor communicate to those charged with governance at the end of the audit?",
    "choices": [
      "Significant difficulties encountered and disagreements with management",
      "The detailed audit program used for each account",
      "The identity of the engagement quality reviewer and the results of that review",
      "The firm's total hours charged to the engagement"
    ],
    "answer": 0,
    "explain": "End-of-audit communications cover the auditor's views on significant qualitative aspects of accounting practices, significant difficulties, disagreements with management, and uncorrected misstatements."
  },
  {
    "id": "complete-16",
    "section": "complete",
    "topic": "Other information",
    "difficulty": "medium",
    "q": "The auditor reads management's annual report and finds a material inconsistency with the audited statements. What should happen first?",
    "choices": [
      "Discuss the matter with management and request correction of whichever is wrong",
      "Modify the opinion on the financial statements",
      "Withdraw from the engagement",
      "Describe the inconsistency in the other information section of the auditor's report"
    ],
    "answer": 0,
    "explain": "The auditor reads other information for material inconsistencies and asks management to correct the error. If management refuses and it is the other information that is wrong, the auditor reports that fact in the other information section or takes further action."
  },
  {
    "id": "complete-17",
    "section": "complete",
    "topic": "Uncorrected misstatements",
    "difficulty": "medium",
    "q": "Management will not correct a $420,000 overstatement of inventory. Materiality is $150,000 and pretax income is $4.2 million. The error is confined to inventory and cost of sales. Which opinion follows?",
    "choices": [
      "Adverse, because management refused to correct a material misstatement",
      "Qualified, because the effect is material but not pervasive",
      "Disclaimer, because the refusal is a limitation on the scope of the audit",
      "Unmodified, with an emphasis-of-matter paragraph describing the error"
    ],
    "answer": 1,
    "explain": "$420,000 is nearly three times materiality, so the opinion is modified, but the error sits in two accounts and is a tenth of pretax income, so it is not pervasive: a qualified opinion. Adverse needs a pervasive effect, a disclaimer is for missing evidence, not known error, and emphasis cannot cure a misstatement."
  },
  {
    "id": "report-1",
    "section": "report",
    "topic": "Report structure",
    "difficulty": "medium",
    "q": "What is the first section of the auditor's report on a nonissuer's financial statements?",
    "choices": [
      "Opinion",
      "Basis for Opinion",
      "Responsibilities of Management",
      "Auditor's Responsibilities"
    ],
    "answer": 0,
    "explain": "The Opinion section comes first, followed immediately by Basis for Opinion, so the conclusion is not buried behind boilerplate. Management's and the auditor's responsibilities follow later in the report."
  },
  {
    "id": "report-2",
    "section": "report",
    "topic": "Opinion terminology",
    "difficulty": "easy",
    "q": "What term describes a clean opinion on a nonissuer's financial statements under AICPA standards?",
    "choices": [
      "Unmodified",
      "Unqualified",
      "Unrestricted",
      "Unconditional"
    ],
    "answer": 0,
    "explain": "AICPA standards use unmodified for nonissuers; PCAOB standards use unqualified for issuers. The distinction shows up regularly on the exam."
  },
  {
    "id": "report-3",
    "section": "report",
    "topic": "Qualified versus adverse",
    "difficulty": "medium",
    "q": "The auditor concludes the statements contain a misstatement that is material and pervasive. What opinion is appropriate?",
    "choices": [
      "Adverse",
      "Qualified",
      "Disclaimer",
      "Unmodified with an emphasis-of-matter paragraph"
    ],
    "answer": 0,
    "explain": "Material but not pervasive misstatement gives a qualified opinion; material and pervasive gives an adverse opinion. Pervasive means the effect is not confined to specific elements or represents a substantial proportion of the statements."
  },
  {
    "id": "report-4",
    "section": "report",
    "topic": "Scope limitations",
    "difficulty": "medium",
    "q": "The auditor is unable to obtain sufficient appropriate evidence about a matter that is material but not pervasive. What opinion follows?",
    "choices": [
      "Qualified",
      "Adverse",
      "Disclaimer",
      "Unmodified with an other-matter paragraph"
    ],
    "answer": 0,
    "explain": "An inability to obtain evidence produces a qualified opinion when the possible effects are material but not pervasive, and a disclaimer when they are pervasive. Adverse opinions come from actual misstatement, not missing evidence."
  },
  {
    "id": "report-5",
    "section": "report",
    "topic": "Lack of independence",
    "difficulty": "medium",
    "q": "An accountant who is not independent is required by state regulation to report on a nonissuer's audited financial statements. What is required?",
    "choices": [
      "Disclaim an opinion and state that the auditor is not independent",
      "Issue a qualified opinion describing the impairment",
      "Issue an unmodified opinion with an emphasis-of-matter paragraph",
      "Describe the specific reasons independence is impaired"
    ],
    "answer": 0,
    "explain": "Lack of independence requires a disclaimer that specifically states the auditor is not independent. The auditor is neither required nor precluded from giving the reasons, but if any reason is given, all of them must be."
  },
  {
    "id": "report-6",
    "section": "report",
    "topic": "Emphasis-of-matter",
    "difficulty": "medium",
    "q": "When does the auditor add an emphasis-of-matter paragraph?",
    "choices": [
      "To describe a matter that is not presented in the financial statements",
      "To highlight a properly disclosed matter fundamental to users' understanding",
      "To communicate that the opinion has been modified in some respect",
      "To describe a material weakness identified in internal control"
    ],
    "answer": 1,
    "explain": "Emphasis-of-matter highlights something already properly in the statements — a major catastrophe, an unusually important subsequent event, early application of a new standard. Other-matter paragraphs cover things not in the statements."
  },
  {
    "id": "report-7",
    "section": "report",
    "topic": "Other-matter paragraphs",
    "difficulty": "medium",
    "q": "Which situation calls for an other-matter paragraph?",
    "choices": [
      "The prior-period statements were audited by a predecessor whose report is not reissued",
      "A significant uncertainty is fully disclosed in the notes",
      "The entity changed accounting principles with proper disclosure and auditor concurrence",
      "Substantial doubt about going concern is adequately disclosed"
    ],
    "answer": 0,
    "explain": "An other-matter paragraph addresses something not presented in the statements but relevant to users, such as identifying that a predecessor audited the prior period. The other three concern matters already disclosed and get different treatment."
  },
  {
    "id": "report-8",
    "section": "report",
    "topic": "Key audit matters",
    "difficulty": "medium",
    "q": "When does an auditor of a nonissuer report key audit matters?",
    "choices": [
      "Only when engaged by the client to do so",
      "In every audit of a nonissuer",
      "Whenever a significant risk was identified",
      "Only when the opinion is modified"
    ],
    "answer": 0,
    "explain": "KAM reporting under AICPA standards is voluntary — it happens when the auditor is engaged to do it. PCAOB critical audit matters, by contrast, are required for most issuer audits."
  },
  {
    "id": "report-9",
    "section": "report",
    "topic": "Critical audit matters",
    "difficulty": "medium",
    "q": "Under PCAOB standards, which matter is a critical audit matter?",
    "choices": [
      "One communicated to the audit committee, tied to a material account, that required especially challenging judgment",
      "Any matter communicated to the audit committee that relates to a material account",
      "A material-account matter needing especially challenging judgment, whether or not the audit committee heard of it",
      "One communicated to the audit committee that required especially challenging judgment, even on an immaterial account"
    ],
    "answer": 0,
    "explain": "AS 3101 sets three tests, all required: the matter was communicated, or required to be communicated, to the audit committee; it relates to accounts or disclosures material to the statements; and it involved especially challenging, subjective or complex judgment. A CAM never replaces a modified opinion."
  },
  {
    "id": "report-10",
    "section": "report",
    "topic": "Comparative statements",
    "difficulty": "medium",
    "q": "The auditor's opinion on the prior period differs from the opinion previously issued. What is required?",
    "choices": [
      "Reissue the prior-year report unchanged alongside the current one",
      "Explain the change in an emphasis-of-matter or other-matter paragraph",
      "Restate the current-year statements to conform to the prior year",
      "Issue a disclaimer of opinion on the prior period statements"
    ],
    "answer": 1,
    "explain": "When the updated opinion on a prior period differs from the one previously expressed, an emphasis-of-matter or other-matter paragraph gives the date of the previous report, the opinion type, the reasons, and that the updated opinion differs."
  },
  {
    "id": "report-11",
    "section": "report",
    "topic": "Group audit reference",
    "difficulty": "medium",
    "q": "Under AU-C 600, the group auditor makes reference to a component auditor's audit. What must the report state?",
    "choices": [
      "The name and business address of the component auditor involved",
      "That other auditors audited a portion, and the magnitude of that portion",
      "That the group auditor reviewed the component auditor's working papers",
      "That the component auditor's opinion on the component was unmodified"
    ],
    "answer": 1,
    "explain": "The report states that other auditors audited a portion of the group and gives the magnitude of that portion in dollars or percentages. Naming the component auditor needs its permission and its report presented alongside. PCAOB standards and SAS 149 have their own rules."
  },
  {
    "id": "report-12",
    "section": "report",
    "topic": "Report date",
    "difficulty": "medium",
    "q": "What determines the date of the auditor's report?",
    "choices": [
      "The date on which sufficient appropriate evidence to support the opinion was obtained",
      "The last day of fieldwork at the client's premises, before the final review of the workpapers",
      "The balance sheet date",
      "The date management approves the financial statements for issuance"
    ],
    "answer": 0,
    "explain": "The report is dated no earlier than the date sufficient appropriate evidence was obtained, which requires that the statements have been prepared and that management has accepted responsibility for them."
  },
  {
    "id": "report-13",
    "section": "report",
    "topic": "Basis for opinion",
    "difficulty": "medium",
    "q": "What does the Basis for Opinion section state?",
    "choices": [
      "The auditor's assessment of the risk of material misstatement",
      "That the audit followed the applicable standards and the auditor is independent",
      "The specific procedures performed on each material balance and the results obtained",
      "Management's assertions about the effectiveness of internal control"
    ],
    "answer": 1,
    "explain": "The section identifies the standards followed, refers to the auditor's responsibilities section, affirms the independence and other ethical requirements met, and states that the evidence obtained is sufficient and appropriate."
  },
  {
    "id": "report-14",
    "section": "report",
    "topic": "Supplementary information",
    "difficulty": "medium",
    "q": "An auditor is engaged to report on supplementary information accompanying the audited statements. What form does that reporting take?",
    "choices": [
      "An opinion on the supplementary information taken by itself",
      "An opinion on whether it is fairly stated in relation to the statements",
      "A disclaimer, since it falls outside the audited financial statements",
      "An emphasis-of-matter paragraph within the main auditor's report"
    ],
    "answer": 1,
    "explain": "Supplementary information is reported on in relation to the financial statements as a whole, in a separate section of the auditor's report or a separate report. Required supplementary information and other information in the annual report get different, more limited treatment."
  },
  {
    "id": "report-15",
    "section": "report",
    "topic": "Placement of paragraphs",
    "difficulty": "medium",
    "q": "Where is an emphasis-of-matter paragraph ordinarily placed in the auditor's report?",
    "choices": [
      "In its own Emphasis of Matter section, typically after Basis for Opinion",
      "Before the Opinion section",
      "At the very end of the report after all other sections",
      "Within the Basis for Opinion section, after the statement on independence"
    ],
    "answer": 0,
    "explain": "The paragraph carries its own heading and refers to the matter and where it is disclosed, while stating that the opinion is not modified. Its placement can vary with the nature of the information but this is the standard position."
  },
  {
    "id": "report-16",
    "section": "report",
    "topic": "Piecemeal opinions",
    "difficulty": "medium",
    "q": "An auditor disclaims an opinion on the financial statements as a whole. May the report express an opinion on specific balances?",
    "choices": [
      "No — that would contradict the disclaimer on the statements as a whole",
      "Yes, for any balance the auditor tested completely",
      "Yes, if the client requests it in writing",
      "No, unless the balances in question are individually immaterial"
    ],
    "answer": 0,
    "explain": "A piecemeal opinion on parts of the statements cannot sit in a report that disclaims on the whole, because it would contradict and overshadow the disclaimer. Reporting on a single element is possible only as a separate engagement under AU-C 805's restrictive conditions."
  },
  {
    "id": "report-17",
    "section": "report",
    "topic": "Cash-basis statements",
    "difficulty": "easy",
    "q": "A church prepares its statements on the cash basis, with a note describing that basis, and sends them to its members. In the nonissuer audit report, what is required?",
    "choices": [
      "An alert restricting the report's use to the church's board and members",
      "An opinion on GAAP, then a separate opinion on the special-purpose basis",
      "An emphasis-of-matter paragraph telling readers the basis is not GAAP",
      "Nothing added, since the note already describes the basis of accounting"
    ],
    "answer": 2,
    "explain": "AU-C 800 requires an emphasis-of-matter paragraph on special-purpose statements that refers to the note and says the basis is not GAAP, even when the note is adequate. Cash and tax bases need no restricted-use alert; that is for contractual and most regulatory bases."
  },
  {
    "id": "report-18",
    "section": "report",
    "topic": "Restricted-use alerts",
    "difficulty": "medium",
    "q": "In a nonissuer audit, which of these special-purpose statements requires the auditor's report to include an alert restricting its use?",
    "choices": [
      "Cash-basis statements a church distributes to its members",
      "Income-tax-basis statements a partnership gives its lender",
      "Statements under a purchase agreement's price-adjustment clause",
      "Income-tax-basis statements an S corporation gives a prospective buyer"
    ],
    "answer": 2,
    "explain": "Contractual-basis statements serve the parties to the agreement, so the report restricts use to them. Cash and tax bases need no alert whoever receives them, a lender or a buyer alike; a regulatory basis needs one unless the statements are meant for general use."
  },
  {
    "id": "report-19",
    "section": "report",
    "topic": "Regulatory-basis statements",
    "difficulty": "medium",
    "q": "A utility prepares its statements on its state regulator's basis of accounting, and they are intended for general use by the public. How does the nonissuer auditor report?",
    "choices": [
      "Opine on fair presentation under GAAP and, separately, on the regulatory basis",
      "Opine on the regulatory basis only, adding an alert restricting use to the regulator",
      "Opine on the regulatory basis only, with an emphasis-of-matter paragraph",
      "Disclaim on GAAP and give an unmodified opinion on the regulatory basis"
    ],
    "answer": 0,
    "explain": "For regulatory-basis statements intended for general use, AU-C 800 drops the usual emphasis-of-matter and restricted-use paragraphs and requires an opinion on GAAP, often adverse, plus a separate opinion on the regulatory basis. Restriction applies only when they are not for general use."
  },
  {
    "id": "report-20",
    "section": "report",
    "topic": "Specific elements",
    "difficulty": "medium",
    "q": "An auditor expressed an adverse opinion on a nonissuer's complete financial statements. The client now wants a separate report with an unmodified opinion on its schedule of royalties. When is that allowed?",
    "choices": [
      "Once the matters that caused the adverse opinion have been corrected",
      "If it is not published with the adverse report and royalties are not a major portion",
      "If the royalty opinion is placed in the same report, after the adverse opinion",
      "If materiality for royalties is set at the level used for the complete statements"
    ],
    "answer": 1,
    "explain": "AU-C 805 bars an unmodified element opinion in the same report as an adverse one. A separate report is allowed if law permits, it is not published with the adverse report, and the element is not a major portion. Materiality is set for the element itself, not the whole."
  },
  {
    "id": "other-1",
    "section": "other",
    "topic": "Preparation engagements",
    "difficulty": "medium",
    "q": "What is the accountant's reporting obligation in a preparation engagement under SSARS?",
    "choices": [
      "A compilation report is issued expressing no assurance on the statements",
      "No report is issued; each page states that no assurance is provided",
      "A review report is issued expressing limited assurance in negative form",
      "A disclaimer of opinion is issued covering all periods presented"
    ],
    "answer": 1,
    "explain": "A preparation engagement produces no report at all. Each page must state that no assurance is provided, or the accountant issues a disclaimer instead. Independence is not required and need not be disclosed."
  },
  {
    "id": "other-2",
    "section": "other",
    "topic": "Compilations",
    "difficulty": "easy",
    "q": "What level of assurance does a compilation report provide?",
    "choices": [
      "None",
      "Limited assurance",
      "Reasonable assurance",
      "Negative assurance on the notes only"
    ],
    "answer": 0,
    "explain": "A compilation involves no verification and expresses no opinion or conclusion. Independence is not required, but if the accountant is not independent, that fact must be disclosed in the report."
  },
  {
    "id": "other-3",
    "section": "other",
    "topic": "Review procedures",
    "difficulty": "medium",
    "q": "What procedures form the basis of a SSARS review engagement?",
    "choices": [
      "Inquiry and analytical procedures",
      "Tests of controls and substantive tests of details",
      "Confirmation and physical observation",
      "Inspection of source documents for every material account"
    ],
    "answer": 0,
    "explain": "A review rests mainly on inquiry and analytical procedures and gives limited assurance. If something suggests a material misstatement the accountant does more, possibly including targeted inspection, but that does not turn the review into an audit of confirmations, observation and detailed testing."
  },
  {
    "id": "other-4",
    "section": "other",
    "topic": "Review conclusion",
    "difficulty": "medium",
    "q": "How is the conclusion in a SSARS review report expressed?",
    "choices": [
      "The statements present fairly, in all material respects, the entity's position",
      "The accountant is not aware of any material modifications that should be made",
      "The accountant expresses no opinion or assurance on the statements",
      "The statements are free from material misstatement in all respects"
    ],
    "answer": 1,
    "explain": "A review gives limited assurance: the accountant is not aware of material modifications needed for the statements to conform with the framework. Positive assurance about fair presentation belongs to an audit, and a compilation gives no assurance at all."
  },
  {
    "id": "other-5",
    "section": "other",
    "topic": "Independence in review",
    "difficulty": "easy",
    "q": "Must an accountant be independent to perform a SSARS review?",
    "choices": [
      "Yes — a review may not be performed without independence",
      "No, provided the lack of independence is disclosed",
      "No, independence is never required under SSARS",
      "Yes, but only for the current period under review"
    ],
    "answer": 0,
    "explain": "Independence is required for reviews and cannot be cured by disclosure. Compilations and preparations may be performed without it, though a compilation must disclose the impairment."
  },
  {
    "id": "other-6",
    "section": "other",
    "topic": "Representation letters in reviews",
    "difficulty": "medium",
    "q": "Is a written representation letter required in a SSARS review?",
    "choices": [
      "Yes, from management for all periods covered by the review",
      "No, representations are required only in audits",
      "Only if the accountant identifies a material misstatement",
      "Only if the entity has a governing board"
    ],
    "answer": 0,
    "explain": "Management must provide written representations in a review, and refusal precludes issuing the report. Compilations and preparations do not require them."
  },
  {
    "id": "other-7",
    "section": "other",
    "topic": "Attestation engagement types",
    "difficulty": "easy",
    "q": "Which attestation engagement results in an opinion?",
    "choices": [
      "An examination",
      "A review",
      "An agreed-upon procedures engagement",
      "A consulting engagement"
    ],
    "answer": 0,
    "explain": "Under the attestation standards an examination gives reasonable assurance expressed as an opinion, a review gives limited assurance expressed as a conclusion, and agreed-upon procedures reports findings only."
  },
  {
    "id": "other-8",
    "section": "other",
    "topic": "Agreed-upon procedures",
    "difficulty": "medium",
    "q": "In an agreed-upon procedures engagement, who must acknowledge that the procedures are appropriate for the engagement's intended purpose?",
    "choices": [
      "The engaging party",
      "The practitioner performing the procedures",
      "The intended users collectively",
      "The regulator overseeing the subject matter"
    ],
    "answer": 0,
    "explain": "The engaging party acknowledges that the procedures are appropriate for its purposes, and the report says so. The practitioner reports findings without expressing any opinion or conclusion."
  },
  {
    "id": "other-9",
    "section": "other",
    "topic": "AUP reporting",
    "difficulty": "medium",
    "q": "What does an agreed-upon procedures report contain?",
    "choices": [
      "An opinion on whether the subject matter is fairly stated throughout",
      "A description of the procedures and findings, with no opinion or conclusion",
      "Limited assurance expressed in the negative form of wording",
      "A recommendation on how the entity should remediate the findings"
    ],
    "answer": 1,
    "explain": "The report lists the procedures and the resulting findings, states that the procedures may not be suitable for other purposes, and may be issued for general use. The practitioner does not evaluate whether the findings mean the subject matter is fairly stated."
  },
  {
    "id": "other-10",
    "section": "other",
    "topic": "SOC report types",
    "difficulty": "medium",
    "q": "How does a SOC 1 report differ from a SOC 2 report?",
    "choices": [
      "SOC 1 covers a period of time; SOC 2 covers a single point in time",
      "SOC 1 covers controls over financial reporting; SOC 2 covers trust services criteria",
      "SOC 1 applies to issuers, while SOC 2 applies only to nonissuers",
      "SOC 1 is restricted to user entities and their auditors; SOC 2 is available for general use"
    ],
    "answer": 1,
    "explain": "A financial statement auditor of a user entity relies on SOC 1. SOC 2 addresses security, availability, processing integrity, confidentiality and privacy, and serves a broader set of stakeholders."
  },
  {
    "id": "other-11",
    "section": "other",
    "topic": "Interim reviews of issuers",
    "difficulty": "medium",
    "q": "How does an interim review of an issuer's quarterly information differ from a SSARS review?",
    "choices": [
      "It provides reasonable assurance, since the reviewer is also the entity's annual auditor",
      "It follows PCAOB standards and requires knowledge of the entity's internal control",
      "It requires confirmation of all material account balances",
      "It results in an opinion rather than a conclusion on the information"
    ],
    "answer": 1,
    "explain": "The PCAOB interim review is conducted by the entity's auditor and depends on knowledge of internal control obtained in the annual audit. Both engagements give limited assurance, but SSARS does not apply to issuers."
  },
  {
    "id": "other-12",
    "section": "other",
    "topic": "Prospective financial statements",
    "difficulty": "medium",
    "q": "What distinguishes a financial forecast from a financial projection?",
    "choices": [
      "A forecast covers one year, while a projection covers five years",
      "A forecast reflects expected conditions; a projection is hypothetical",
      "A forecast is audited, while a projection is only reviewed",
      "A forecast is prepared by management; a projection by the practitioner"
    ],
    "answer": 1,
    "explain": "A forecast presents expected results and may be for general use. A projection answers a what-if question and is restricted to parties negotiating directly with the responsible party."
  },
  {
    "id": "other-13",
    "section": "other",
    "topic": "Pro forma information",
    "difficulty": "medium",
    "q": "What does an examination of pro forma financial information address?",
    "choices": [
      "Whether the transaction will be completed on the terms management has described",
      "Whether the assumptions are a reasonable basis and the adjustments apply them",
      "Whether the historical financial statements are fairly presented",
      "Whether the entity's controls over the transaction are effective"
    ],
    "answer": 1,
    "explain": "The practitioner reports on management's assumptions, the appropriateness of the pro forma adjustments, and their proper application to the historical amounts. For an examination the underlying historical statements must have been audited; a review of pro forma information requires them to be at least reviewed."
  },
  {
    "id": "other-14",
    "section": "other",
    "topic": "Who may use an AUP report",
    "difficulty": "medium",
    "q": "How does SSAE No. 19 treat the use of an agreed-upon procedures report?",
    "choices": [
      "General use is permitted, though the practitioner may restrict use when appropriate",
      "Use must be restricted to the parties that agreed to the procedures",
      "Use must be restricted to the responsible party and its regulator",
      "Use must be restricted unless every intended user signs the engagement letter"
    ],
    "answer": 0,
    "explain": "SSAE 19 removed the automatic restriction on AUP reports. The report still states that the procedures may not be appropriate for any other purpose, and the practitioner may add a restricted-use alert when professional judgment calls for one."
  },
  {
    "id": "other-15",
    "section": "other",
    "topic": "Compilation with omitted disclosures",
    "difficulty": "medium",
    "q": "Management asks the accountant to compile statements that omit substantially all disclosures. May the accountant do so?",
    "choices": [
      "Yes, if the omission is disclosed in the report and is not undertaken to mislead users",
      "No, disclosures may never be omitted",
      "Yes, but only for a preparation engagement",
      "Yes, if management represents in writing that the omission is not intended to mislead users"
    ],
    "answer": 0,
    "explain": "Omitting substantially all disclosures is permitted in a compilation if the report says so and the omission is not intended to mislead. The same latitude does not exist in a review or an audit."
  },
  {
    "id": "other-16",
    "section": "other",
    "topic": "Practitioner competence",
    "difficulty": "medium",
    "q": "Before accepting an attestation engagement, what must the practitioner determine about the subject matter?",
    "choices": [
      "That it is appropriate and that suitable criteria exist to evaluate it",
      "That the responsible party will accept the practitioner's conclusions",
      "That the engagement will be profitable",
      "That no other practitioner has declined the engagement"
    ],
    "answer": 0,
    "explain": "An attestation engagement requires an appropriate subject matter and suitable, available criteria that are relevant, objective, measurable and complete. Without them the subject matter cannot be evaluated consistently."
  },
  {
    "id": "other-17",
    "section": "other",
    "topic": "Examination then review",
    "difficulty": "medium",
    "q": "Last year a CPA examined a client's schedule of greenhouse gas emissions. This year the client wants a review of the same schedule instead. How does the CPA's report change?",
    "choices": [
      "It must restrict use to the client, as review reports are not for general use",
      "It may omit the independence statement, since reviews do not require independence",
      "It still expresses an opinion, but covers fewer of the schedule's disclosures",
      "It gives limited assurance, stated as whether the CPA knows of needed material changes"
    ],
    "answer": 3,
    "explain": "A review gives limited assurance: the report states whether the CPA is aware of material modifications needed, not an opinion. Independence is still required, and review reports need not be restricted. SSAE 22 also requires a summary of the work performed."
  },
  {
    "id": "other-18",
    "section": "other",
    "topic": "Performance data engagement",
    "difficulty": "medium",
    "q": "A city wants reasonable assurance on its buses' on-time rate against published criteria. The city has not measured the rate and wants the CPA to do it. Which engagement fits?",
    "choices": [
      "A direct examination, in which the CPA measures the rate against the criteria",
      "A review, because in a review the practitioner may perform the measurement",
      "Agreed-upon procedures, with the CPA's computed rate reported as a finding",
      "None, since an examination needs the city to measure and assert the rate first"
    ],
    "answer": 0,
    "explain": "SSAE 21 created the direct examination (AT-C 206): the practitioner measures or evaluates the subject matter and opines, with the city acknowledging responsibility for the service. No prior assertion is needed. Reviews stay assertion-based, and AUP gives no assurance."
  },
  {
    "id": "other-19",
    "section": "other",
    "topic": "Grant compliance",
    "difficulty": "medium",
    "q": "A charity asks its CPA for limited assurance on whether it complied with the terms of a state grant. Management will provide a written assertion. How should the CPA respond?",
    "choices": [
      "Perform an attestation review of compliance and give a negative-form conclusion",
      "Decline the review and offer an examination or agreed-upon procedures instead",
      "Perform a SSARS review, since the grant is reported in the financial statements",
      "Perform the review, but restrict the report's use to the charity and the state"
    ],
    "answer": 1,
    "explain": "AT-C 315 allows an examination or agreed-upon procedures on compliance with specified requirements, but a practitioner should not accept a review of compliance. A SSARS review covers financial statements, and restricting use does not cure the prohibition."
  },
  {
    "id": "other-20",
    "section": "other",
    "topic": "Due diligence request",
    "difficulty": "easy",
    "q": "A company buying a competitor wants a CPA to perform specific checks it has listed on the seller's receivables records and report the results, with no opinion or conclusion. What fits?",
    "choices": [
      "A review engagement, because the work is narrower than an examination",
      "A compilation of the seller's receivables schedule under SSARS",
      "An agreed-upon procedures engagement under the attestation standards",
      "An audit of the receivables balance as a specific element under AU-C 805"
    ],
    "answer": 2,
    "explain": "When a party specifies the procedures and wants only the results, the fit is agreed-upon procedures under AT-C 215: findings, no opinion or conclusion. A review still ends in a conclusion, and an AU-C 805 audit gives an opinion using the auditor's own procedures."
  },
  {
    "id": "gov-1",
    "section": "gov",
    "topic": "Government Auditing Standards",
    "difficulty": "easy",
    "q": "Who issues Government Auditing Standards, commonly called the Yellow Book?",
    "choices": [
      "The Comptroller General through the Government Accountability Office",
      "The Office of Management and Budget, as part of the Uniform Guidance",
      "The AICPA Auditing Standards Board",
      "The Governmental Accounting Standards Board"
    ],
    "answer": 0,
    "explain": "GAGAS is issued by the GAO. OMB issues the Uniform Guidance governing single audits, the ASB issues the AU-C standards, and GASB sets accounting principles for state and local governments."
  },
  {
    "id": "gov-2",
    "section": "gov",
    "topic": "GAGAS and GAAS",
    "difficulty": "medium",
    "q": "How does a financial audit conducted under GAGAS relate to generally accepted auditing standards?",
    "choices": [
      "GAGAS incorporates GAAS and adds further requirements",
      "GAGAS replaces GAAS entirely for government entities",
      "GAGAS applies only when GAAS does not",
      "GAGAS is a voluntary supplement with no additional requirements"
    ],
    "answer": 0,
    "explain": "A GAGAS financial audit follows the AICPA auditing standards and adds requirements on independence, competence, quality management, documentation and reporting, under the Yellow Book edition in effect for the engagement."
  },
  {
    "id": "gov-3",
    "section": "gov",
    "topic": "GAGAS independence",
    "difficulty": "medium",
    "q": "An auditor plans to provide a nonaudit service to a GAGAS audit client. What must be done?",
    "choices": [
      "Obtain written approval from the federal funding agency in advance",
      "Apply the GAGAS conceptual framework and document threats and safeguards",
      "Decline, since GAGAS prohibits all nonaudit services for audit clients",
      "Disclose the nature of the service in the auditor's GAGAS report"
    ],
    "answer": 1,
    "explain": "GAGAS requires evaluating threats to independence before agreeing to a nonaudit service and documenting that evaluation. Preparing the financial statements is a significant threat requiring specific safeguards."
  },
  {
    "id": "gov-4",
    "section": "gov",
    "topic": "GAGAS continuing education",
    "difficulty": "medium",
    "q": "Absent an exemption, what continuing education does GAGAS require of auditors who plan or perform government audits?",
    "choices": [
      "40 hours every year, all of which must be in auditing subjects",
      "80 hours every two years, with at least 24 in the government environment",
      "120 hours every three years, with no restriction on subject matter",
      "No requirement beyond the auditor's state licensing obligations"
    ],
    "answer": 1,
    "explain": "The Yellow Book requires 80 hours every two years, at least 24 in subjects directly related to government auditing, the government environment or the entity's environment, and at least 20 hours in each year. Some roles and part-time participants are exempt or have reduced requirements."
  },
  {
    "id": "gov-5",
    "section": "gov",
    "topic": "GAGAS reporting",
    "difficulty": "medium",
    "q": "What additional report does a GAGAS financial audit require beyond the opinion on the financial statements?",
    "choices": [
      "An opinion on the effectiveness of internal control over reporting",
      "A report on internal control over financial reporting and on compliance",
      "A report on the entity's budgetary performance for the period",
      "A report on the reasonableness of the entity's executive compensation"
    ],
    "answer": 1,
    "explain": "The GAGAS report describes the scope of testing of internal control and compliance and the results, while explicitly stating that it does not express an opinion on their effectiveness."
  },
  {
    "id": "gov-6",
    "section": "gov",
    "topic": "Single audit trigger",
    "difficulty": "medium",
    "q": "What determines whether a nonfederal entity must have a single audit?",
    "choices": [
      "The amount of federal awards the entity expended during the year",
      "The entity's total revenue from all sources",
      "The number of federal programs the entity participates in",
      "Whether the entity is a governmental rather than a nonprofit organization"
    ],
    "answer": 0,
    "explain": "The trigger is $1,000,000 or more of federal awards expended in the year (fiscal years beginning on or after 1 October 2024; previously $750,000), not cash received or the entity's size. Below it the entity is exempt; a program-specific audit is an option only when the Uniform Guidance's conditions are met."
  },
  {
    "id": "gov-7",
    "section": "gov",
    "topic": "Major program determination",
    "difficulty": "medium",
    "q": "How does the auditor identify major programs in a single audit?",
    "choices": [
      "By selecting only the entity's single largest federal program",
      "A risk-based approach separating programs by size, then assessing risk",
      "By auditing every federal program the entity administers that year",
      "By accepting the programs management designates as major programs"
    ],
    "answer": 1,
    "explain": "Programs are split into Type A and Type B by dollar threshold, then assessed for risk, and enough are selected as major to meet the required percentage-of-coverage rule."
  },
  {
    "id": "gov-8",
    "section": "gov",
    "topic": "Compliance requirements",
    "difficulty": "medium",
    "q": "What does the auditor test for each major program in a single audit?",
    "choices": [
      "The compliance requirements that could have a direct and material effect on the program",
      "Every compliance requirement listed in the Compliance Supplement for that type of program",
      "Only the allowable costs and cost principles requirement",
      "Only the requirements management identifies as significant"
    ],
    "answer": 0,
    "explain": "For each major program the auditor identifies the compliance requirements that could have a direct and material effect and tests compliance with them, and tests internal control over compliance. Where those controls are likely ineffective, it assesses control risk at maximum and reports the deficiency instead."
  },
  {
    "id": "gov-9",
    "section": "gov",
    "topic": "Schedule of expenditures",
    "difficulty": "medium",
    "q": "What is the schedule of expenditures of federal awards?",
    "choices": [
      "An auditor-prepared schedule of federal awards received, reconciled to the grant agreements",
      "An auditee-prepared schedule of federal awards expended, reported on by the auditor",
      "A federal agency listing of all awards granted to the entity",
      "A budget-to-actual comparison prepared for each federal program"
    ],
    "answer": 1,
    "explain": "The auditee prepares the SEFA and the auditor reports on whether it is fairly stated in all material respects in relation to the financial statements as a whole. It drives the major program determination."
  },
  {
    "id": "gov-10",
    "section": "gov",
    "topic": "Questioned costs",
    "difficulty": "medium",
    "q": "What is a questioned cost in a single audit?",
    "choices": [
      "Any cost that exceeds the federally approved program budget",
      "A cost that may violate a requirement, is unsupported, or is unreasonable",
      "Any cost the auditor did not select for testing during the audit",
      "Any cost the federal awarding agency has already disallowed"
    ],
    "answer": 1,
    "explain": "Questioned costs arise from apparent violations, inadequate documentation, or unreasonableness, and must be reported when they exceed the applicable threshold. Whether they are ultimately disallowed is the awarding agency's call."
  },
  {
    "id": "gov-11",
    "section": "gov",
    "topic": "Corrective action plan",
    "difficulty": "easy",
    "q": "Who prepares the corrective action plan for findings in a single audit?",
    "choices": [
      "The auditee",
      "The auditor",
      "The federal awarding agency",
      "The pass-through entity"
    ],
    "answer": 0,
    "explain": "The auditee prepares the corrective action plan and the summary schedule of prior audit findings. The auditor prepares the schedule of findings and questioned costs."
  },
  {
    "id": "gov-12",
    "section": "gov",
    "topic": "Reporting package",
    "difficulty": "medium",
    "q": "Where must the single audit reporting package be submitted?",
    "choices": [
      "To each federal awarding agency that provided funding, individually",
      "To the Federal Audit Clearinghouse, with the data collection form",
      "To the entity's state legislature or governing oversight body",
      "To the AICPA peer review program for quality control review"
    ],
    "answer": 1,
    "explain": "The auditee submits the reporting package and data collection form to the Federal Audit Clearinghouse, generally within nine months of the audit period end or 30 days after receiving the reports, whichever is earlier."
  },
  {
    "id": "gov-13",
    "section": "gov",
    "topic": "Integrated audits",
    "difficulty": "medium",
    "q": "What is an integrated audit under PCAOB standards?",
    "choices": [
      "An audit combining financial and compliance objectives for a government entity",
      "An audit of internal control over financial reporting done with the FS audit",
      "An audit performed jointly by two independent accounting firms",
      "An audit of the parent and all its components by a single firm"
    ],
    "answer": 1,
    "explain": "An integrated audit pairs the financial statement audit with an audit of internal control over financial reporting, and the two inform each other. It is required where Section 404(b) applies, generally accelerated and large accelerated filers, and not for exempt issuers such as emerging growth companies."
  },
  {
    "id": "gov-14",
    "section": "gov",
    "topic": "Reporting on ICFR",
    "difficulty": "medium",
    "q": "A material weakness exists at year end in an issuer's internal control over financial reporting. What opinion does the auditor express on ICFR?",
    "choices": [
      "Adverse",
      "Qualified",
      "Disclaimer",
      "Unqualified with an explanatory paragraph"
    ],
    "answer": 0,
    "explain": "One material weakness at the assessment date means internal control is not effective, so the ICFR opinion is adverse. The financial statement opinion can still be unqualified if substantive work supports it."
  },
  {
    "id": "gov-15",
    "section": "gov",
    "topic": "PCAOB report disclosures",
    "difficulty": "medium",
    "q": "What does the PCAOB require an issuer's audit report to disclose about the auditor's relationship with the client?",
    "choices": [
      "The year the auditor began serving consecutively as the entity's auditor",
      "The total fees billed during the year",
      "The engagement partner's name and the other firms participating in the audit",
      "The number of hours charged to the engagement"
    ],
    "answer": 0,
    "explain": "The report states the year in which the auditor began serving consecutively, and Form AP separately discloses the engagement partner's name and other participating firms."
  },
  {
    "id": "gov-16",
    "section": "gov",
    "topic": "Management's ICFR assessment",
    "difficulty": "medium",
    "q": "In an integrated audit, on what does the auditor express an opinion regarding internal control?",
    "choices": [
      "The effectiveness of internal control over financial reporting itself",
      "Management's process for evaluating internal control",
      "Management's written assessment rather than the control itself",
      "The design of controls only, not their operation"
    ],
    "answer": 0,
    "explain": "Under AS 2201 the auditor opines directly on the effectiveness of ICFR as of the assessment date. Management separately prepares its own assessment, but the auditor's opinion is on the control, not on management's report."
  },
  {
    "id": "gov-17",
    "section": "gov",
    "topic": "Single audit applicability",
    "difficulty": "easy",
    "q": "A nonprofit's fiscal year began January 1, 2025. It expended $620,000 of a direct federal grant and $430,000 of a subaward under a different federal program, passed through its state. Is a single audit required?",
    "choices": [
      "No, because only awards received directly from federal agencies count",
      "No, because the $1,000,000 threshold is applied program by program",
      "Yes, but the state's own audit covers the $430,000 subaward instead",
      "Yes, because direct and pass-through federal expenditures are combined"
    ],
    "answer": 3,
    "explain": "The test is all federal awards expended in the year, direct and passed through: $620,000 + $430,000 = $1,050,000, over the $1,000,000 threshold for fiscal years beginning on or after 1 October 2024. The threshold is entity-wide, and the single audit covers the subaward too."
  },
  {
    "id": "gov-18",
    "section": "gov",
    "topic": "Reporting package deadline",
    "difficulty": "medium",
    "q": "An auditee's fiscal year ended June 30, 2026. The auditor's reports are dated January 11, 2027, and the auditee receives them January 20, 2027. No extension applies. When is the reporting package due?",
    "choices": [
      "March 31, 2027",
      "February 19, 2027",
      "February 10, 2027",
      "June 30, 2027"
    ],
    "answer": 1,
    "explain": "The package is due the earlier of 30 days after the auditee receives the auditor's reports or nine months after year end. Thirty days after January 20 is February 19, 2027, earlier than March 31, 2027. The clock runs from receipt, not from the report date."
  },
  {
    "id": "gov-19",
    "section": "gov",
    "topic": "Questioned costs",
    "difficulty": "medium",
    "q": "Testing allowable costs for a major program, the auditor finds known questioned costs of $18,000 and projects likely questioned costs of $40,000. What must be reported?",
    "choices": [
      "A finding that reports the $18,000 of known questioned costs",
      "No finding, because the known questioned costs are under $25,000",
      "A finding reporting $40,000, since the projection replaces the known amount",
      "No finding unless the auditor also modifies the compliance opinion"
    ],
    "answer": 0,
    "explain": "Known questioned costs must be reported when either known or likely questioned costs exceed $25,000 for a type of compliance requirement in a major program. The $40,000 projection triggers the finding, but the amount reported is the $18,000 known; the projection informs the opinion."
  },
  {
    "id": "gov-20",
    "section": "gov",
    "topic": "Disputed findings",
    "difficulty": "medium",
    "q": "In a GAGAS financial audit, the auditor reports a significant deficiency. The county's finance director disputes it in written comments on the draft. What does GAGAS require?",
    "choices": [
      "Drop the finding unless the director agrees to it before the report is issued",
      "Leave the comments out, since the report presents only the auditor's findings",
      "Include the director's views and, if unpersuaded, explain why in the report",
      "Hold the report until the county's governing body resolves the disagreement"
    ],
    "answer": 2,
    "explain": "GAGAS requires auditors to obtain and report the views of responsible officials on findings and planned corrective actions. If the auditor disagrees with those comments, the report explains why. A dispute does not require dropping the finding or delaying the report."
  },
  {
    "id": "cycles-1",
    "section": "cycles",
    "topic": "Sales cutoff",
    "difficulty": "easy",
    "q": "Year end is December 31. Goods shipped FOB destination on December 30 reached the customer on January 3. The sale was recorded on December 30. What is the effect?",
    "choices": [
      "No misstatement, since title passed when the goods left the shipping dock",
      "Inventory is overstated, since goods in transit belong to the customer",
      "Revenue and receivables are overstated; the sale belongs to next year",
      "Revenue is correct, but the receivable should stay unbilled until delivery"
    ],
    "answer": 2,
    "explain": "Under FOB destination the seller keeps title and control until the goods arrive, so this is a January sale. Recording it at shipment overstates December revenue and receivables. FOB shipping point would have made the December 30 entry right. The goods in transit are still the seller's, so if cost was relieved with the sale, inventory is understated, not overstated."
  },
  {
    "id": "cycles-2",
    "section": "cycles",
    "topic": "December sales",
    "difficulty": "medium",
    "q": "A sales manager's bonus depends on December revenue, and the auditor suspects some recorded December sales were never shipped. Which test responds most directly?",
    "choices": [
      "Trace December shipping documents forward to recorded sales invoices",
      "Vouch recorded December sales invoices back to shipping documents",
      "Agree prices on December invoices to the approved customer price list",
      "Foot the December sales journal and agree the total to the ledger"
    ],
    "answer": 1,
    "explain": "The risk is occurrence: recorded sales that did not happen. Starting from the recorded invoices and vouching back to shipping documents finds entries with no shipment behind them. Tracing shipments forward runs the other way and tests completeness, so a fictitious invoice would never be selected."
  },
  {
    "id": "cycles-3",
    "section": "cycles",
    "topic": "January credit memos",
    "difficulty": "medium",
    "q": "Reviewing January credit memos, the auditor finds large credits cancelling sales billed to three distributors on December 30 and 31, with the goods sent back. What does this most suggest?",
    "choices": [
      "A January event that may need disclosure but no December adjustment",
      "The return process works, which supports December revenue as recorded",
      "Year-end receivables are understated by the amount of the credits",
      "December sales and year-end receivables were likely overstated"
    ],
    "answer": 3,
    "explain": "Credits reversing sales billed in the last days of the year point to sales that were not genuine or not final at year end, a condition that existed at the balance sheet date. That calls for adjustment and more testing of occurrence and cutoff, not a January disclosure."
  },
  {
    "id": "cycles-4",
    "section": "cycles",
    "topic": "Payables cutoff",
    "difficulty": "easy",
    "q": "Year end is December 31. Receiving report: goods received December 29. Vendor invoice dated January 3 and posted to payables January 8. Which period does the liability belong to?",
    "choices": [
      "December, because the goods were received before year end",
      "January, because the vendor did not issue its invoice until January 3",
      "January, because the payable was first posted in the January ledger",
      "December, but only if the invoice arrives before the audit report date"
    ],
    "answer": 0,
    "explain": "The obligation exists once title passes, at the latest when the goods arrive, not when the vendor bills or the clerk posts. Goods received December 29 make this a December liability, so year-end payables and purchases are understated until it is accrued. The invoice and posting dates are paperwork timing."
  },
  {
    "id": "cycles-5",
    "section": "cycles",
    "topic": "Year-end payables",
    "difficulty": "medium",
    "q": "Cash is tight at year end, and the auditor learns the controller can delay entering vendor invoices to improve reported results. Which procedure responds most directly?",
    "choices": [
      "Vouch recorded year-end payables to vendor invoices and receiving reports",
      "Trace early-January receiving reports to the January purchases journal",
      "Examine January payments and unpaid invoices for goods received by year end",
      "Agree the payables aging total to the ledger and review it for debit balances"
    ],
    "answer": 2,
    "explain": "Delayed invoices mean liabilities missing from the books, so the test must start outside recorded payables: payments after year end and unpaid invoices, checking whether the goods or services arrived by year end. Vouching recorded payables tests existence and cannot find what was left out."
  },
  {
    "id": "cycles-6",
    "section": "cycles",
    "topic": "Three-way match",
    "difficulty": "medium",
    "q": "Tolerable deviation rate is 4%. Of 60 payments tested, 3 were released although the invoice quantity exceeded the receiving report, with no approved override. What follows?",
    "choices": [
      "Rely on the control as planned, since 95% of the payments tested matched",
      "Record the three payments as misstatements and rely on the control",
      "Reliance is not supported; adjust only for the three overpaid invoices",
      "Reliance is not supported; expand substantive tests of purchases"
    ],
    "answer": 3,
    "explain": "The sample deviation rate of 5% already exceeds the 4% tolerable rate, so the control cannot support the planned reliance. The auditor raises assessed control risk and does more substantive work on purchases and payables. A deviation is a control failure, not automatically a misstatement, and adjusting the three items found says nothing about the untested purchases."
  },
  {
    "id": "cycles-7",
    "section": "cycles",
    "topic": "Payroll duties",
    "difficulty": "medium",
    "q": "One payroll clerk adds new hires to the payroll master file and also enters the direct-deposit bank details used for each pay run. Which procedure best addresses the risk?",
    "choices": [
      "Recompute net pay for a sample and agree it to the bank deposit file",
      "Agree paid employees to HR files and look for shared bank accounts",
      "Trace approved time records forward to the payroll register",
      "Agree payroll expense to wages shown on the quarterly payroll tax returns"
    ],
    "answer": 1,
    "explain": "A clerk who controls both the master file and the deposit details can add a fictitious employee and route the pay to an account of their choosing. Matching payees to independent HR files and searching for shared bank accounts targets that. Tracing time records forward cannot find a payee who has none."
  },
  {
    "id": "cycles-8",
    "section": "cycles",
    "topic": "Interbank transfers",
    "difficulty": "medium",
    "q": "A $90,000 check drawn on Bank A was deposited in Bank B. The books record the deposit on December 31 and the disbursement on January 2; Bank A paid the check January 3. Year-end effect?",
    "choices": [
      "Cash is overstated by $90,000, since it sits in both book balances",
      "No effect, since a transfer between the entity's own banks nets to zero",
      "Cash is understated by $90,000 until Bank A pays the check in January",
      "Cash is correct; the check is simply outstanding on Bank A's reconciliation"
    ],
    "answer": 0,
    "explain": "The receipt is in Bank B's book balance at year end, but the matching disbursement from Bank A is not recorded until January, so the same $90,000 is counted twice. Had both sides been booked in December, the check would be an ordinary outstanding item. This is how kiting inflates cash."
  },
  {
    "id": "cycles-9",
    "section": "cycles",
    "topic": "Outstanding checks",
    "difficulty": "medium",
    "q": "Checks of $60,000 recorded December 30 and listed as outstanding at year end cleared the bank January 26 to 29, per the January bank statement. The payees usually deposit within days. What does this suggest?",
    "choices": [
      "Cash is likely overstated, since the checks had not cleared by year end",
      "Nothing unusual, since outstanding checks are routine reconciling items",
      "Payables are likely overstated, since the vendors had not yet been paid",
      "Checks were likely held past year end, understating cash and payables"
    ],
    "answer": 3,
    "explain": "A long gap between the recorded date and clearing, for payees who normally deposit quickly, suggests the checks were written in December but mailed in January. The entity still held the cash and owed the vendors at year end, so both cash and payables are understated. Ordinary float clears within days."
  },
  {
    "id": "cycles-10",
    "section": "cycles",
    "topic": "Inventory observation",
    "difficulty": "easy",
    "q": "At the year-end count, the auditor is concerned that goods in a back storage room were never tagged or listed. Which test responds to that concern?",
    "choices": [
      "Select items from the count sheets and locate them in the storage room",
      "Select items in the storage room and trace them to the count sheets",
      "Recount the highest-value lines on the final priced inventory listing",
      "Agree quantities on the final inventory listing back to the count sheets"
    ],
    "answer": 1,
    "explain": "Untagged goods are a completeness risk, so the test starts from the physical goods and checks that each made it onto the count sheets. Selecting from the count sheets and finding the goods runs the other way and tests existence, so it can never pick an item that was left off."
  },
  {
    "id": "cycles-11",
    "section": "cycles",
    "topic": "Equipment additions",
    "difficulty": "medium",
    "q": "Vouching this year's equipment additions, the auditor finds $48,000 capitalized for the routine annual brake and tire replacement on the delivery fleet. What follows?",
    "choices": [
      "The addition is supported, since the invoice is genuine and approved",
      "It is properly capitalized, since it exceeds the capitalization threshold",
      "Equipment is overstated and repairs expense is understated",
      "A classification error only, with no effect on this year's net income"
    ],
    "answer": 2,
    "explain": "Routine, recurring maintenance keeps the trucks running as expected but adds no life or capacity, so it is an expense. Capitalizing it overstates equipment and understates repairs expense. A genuine invoice proves the cost was incurred, not how to classify it, and clearing the capitalization threshold does not make a repair an asset. Net income is overstated too."
  },
  {
    "id": "cycles-12",
    "section": "cycles",
    "topic": "Joining tables",
    "difficulty": "medium",
    "q": "An auditor left-joins a 12,000-row sales invoice table to the customer master on customer name to add credit limits. The result has 12,850 rows. What is the most likely cause?",
    "choices": [
      "Some names appear on more than one record in the customer master",
      "The left join added a row for each customer with no invoices in the year",
      "Invoices whose customer name has no match came back as extra blank rows",
      "The invoice table already held 850 duplicate invoice lines before the join"
    ],
    "answer": 0,
    "explain": "A left join keeps each invoice once when its key matches one master record, but repeats it for every extra match; unmatched invoices appear once with blanks. Rows above the 12,000 input mean some names map to several records, so joined totals are overstated. Join on a unique ID and reconcile totals."
  },
  {
    "id": "cycles-13",
    "section": "cycles",
    "topic": "Population extract",
    "difficulty": "easy",
    "q": "The client's extract of the year's cash disbursements totals $41.6 million, but the disbursements ledger shows $43.1 million. The auditor planned to sample from the extract. What next?",
    "choices": [
      "Sample from the extract and project errors to the $43.1 million ledger total",
      "Proceed with the extract, since the gap is under 5% of recorded disbursements",
      "Resolve the $1.5 million gap before selecting any sample from the extract",
      "Treat the $1.5 million as a known misstatement and sample from the extract"
    ],
    "answer": 2,
    "explain": "A sample supports a conclusion only about the population it was drawn from. With $1.5 million missing from the extract, the auditor must learn why and obtain a complete population first. Projecting to the ledger total assumes the missing items resemble those sampled, which is exactly what is unknown."
  },
  {
    "id": "cycles-14",
    "section": "cycles",
    "topic": "Recomputing inventory",
    "difficulty": "medium",
    "q": "Recomputing inventory as quantity times unit cost from the client's extract, the auditor gets $133,300 against $3.2 million recorded. The quantity field counts cases of 24. What next?",
    "choices": [
      "Propose an adjustment writing inventory down by about $3.07 million",
      "Multiply each quantity by 24 and recompute the extended total",
      "Treat the extract as incomplete and request a new population from the client",
      "Divide each unit cost by 24 to match the cases and recompute the total"
    ],
    "answer": 1,
    "explain": "$133,300 times 24 is about $3.2 million, so the gap is a scale mismatch between cases and per-unit costs, not a misstatement or a missing population. The auditor converts cases to units, recomputes, and only then compares with the ledger. Dividing the cost by 24 moves the scale the wrong way."
  },
  {
    "id": "cycles-15",
    "section": "cycles",
    "topic": "Data transformation",
    "difficulty": "medium",
    "q": "An auditor's script reformats dates in a GL export. Input and output each have 184,212 rows. The input's debits equal its credits, but the output's debits exceed credits by $2.4 million. Conclusion?",
    "choices": [
      "The script corrupted some records and must be fixed and revalidated",
      "The row counts agree, so the output can be relied on for testing",
      "The client's ledger is out of balance, a misstatement to evaluate",
      "The script's new date format caused a cutoff effect that needs no fix"
    ],
    "answer": 0,
    "explain": "The input balanced, so the script introduced the imbalance. Matching row counts show nothing was dropped, not that each record came through intact. The auditor fixes the script and re-proves counts and totals before using the output. Shifting dates between periods cannot unbalance total debits and credits."
  },
  {
    "id": "cycles-16",
    "section": "cycles",
    "topic": "Full-population analytics",
    "difficulty": "medium",
    "q": "An analytic run over all 96,000 sales invoices flags 310 where the billed price differs from the price list by more than 2%. What do the 310 exceptions mean for the auditor?",
    "choices": [
      "Misstatements to total and project across the rest of the population",
      "A 0.3% exception rate, low enough to accept pricing without follow-up",
      "Items to investigate and corroborate before evaluating misstatements",
      "Differences management can clear with a written explanation of each"
    ],
    "answer": 2,
    "explain": "An exception is a flag, not a finding: some will be errors, others approved discounts or price changes. The auditor investigates and corroborates, then evaluates the actual misstatements. Nothing is projected because the whole population was tested, and an explanation from management must still be corroborated."
  }
];
