/* EA3 Blitz question bank -- SEE Part 3, Representation, Practices and Procedures. 12 sections, 240 questions.
   Scratch rewrite: Circular 230, discipline, enrollment, authorizations,
   taxpayer rights and privilege, exams, collection, resolutions, appeals,
   penalties, e-file, and limitation periods. 2025 law; indexed amounts are
   flagged as such in the explanations. Choice order is shuffled at display
   time; 'answer' is the correct index. Original study content -- not actual
   exam questions, and not affiliated with or endorsed by the IRS.
   FAR_SECTIONS/FAR_QUESTIONS global names keep the engine identical to FAR Blitz. */

var FAR_SECTIONS = [
  {
    "id": "practice",
    "name": "Circular 230: Practice & Due Diligence",
    "short": "Circular 230",
    "emoji": "📜"
  },
  {
    "id": "discipline",
    "name": "Sanctions & Discipline",
    "short": "Discipline",
    "emoji": "⚖️"
  },
  {
    "id": "ea",
    "name": "Enrollment, Renewal & CE",
    "short": "Enrollment",
    "emoji": "🪪"
  },
  {
    "id": "auth",
    "name": "POAs & Authorizations",
    "short": "Authorizations",
    "emoji": "✍️"
  },
  {
    "id": "rights",
    "name": "Taxpayer Rights, Privilege & Disclosure",
    "short": "Rights",
    "emoji": "🛡️"
  },
  {
    "id": "exam",
    "name": "Examinations & Audits",
    "short": "Exams",
    "emoji": "🔍"
  },
  {
    "id": "collection",
    "name": "Liens, Levies & Enforced Collection",
    "short": "Collection",
    "emoji": "🏦"
  },
  {
    "id": "resolution",
    "name": "Installment Agreements, OIC & CNC",
    "short": "Resolutions",
    "emoji": "🤝"
  },
  {
    "id": "appeal",
    "name": "Appeals & the Courts",
    "short": "Appeals",
    "emoji": "🏛️"
  },
  {
    "id": "penalties",
    "name": "Penalties, Interest & Abatement",
    "short": "Penalties",
    "emoji": "🚩"
  },
  {
    "id": "filing",
    "name": "E-file, Signatures & Data Security",
    "short": "E-file",
    "emoji": "📤"
  },
  {
    "id": "clock",
    "name": "Statutes of Limitations",
    "short": "Time Limits",
    "emoji": "⏳"
  }
];

var FAR_QUESTIONS = [
  {
    "id": "practice-1",
    "section": "practice",
    "topic": "Who may practice",
    "difficulty": "easy",
    "q": "Unlimited practice rights before the IRS belong to",
    "choices": [
      "Attorneys, CPAs, and enrolled agents",
      "Attorneys and CPAs, with EAs limited to exams",
      "Anyone holding a current PTIN",
      "Enrolled agents only — it is their credential"
    ],
    "answer": 0,
    "explain": "The big three practice anywhere in the IRS, for any taxpayer, on any matter. Enrolled actuaries and retirement plan agents hold narrower, subject-limited rights, and a PTIN alone is a preparer number, not a practice credential."
  },
  {
    "id": "practice-2",
    "section": "practice",
    "topic": "What practice means",
    "difficulty": "easy",
    "q": "'Practice before the IRS' covers",
    "choices": [
      "Advocating for a client — audits, appeals, collections, rulings",
      "Preparing and e-filing a client's tax return",
      "Answering an IRS letter about your own return",
      "Testifying as a witness at a client's exam"
    ],
    "answer": 0,
    "explain": "Practice is representation: presenting a client's case, negotiating, corresponding on their behalf. After Loving, mere return preparation is not practice — which is why unenrolled preparers can exist at all."
  },
  {
    "id": "practice-3",
    "section": "practice",
    "topic": "AFSP limited rights",
    "difficulty": "medium",
    "q": "An AFSP Record of Completion holder may represent a client",
    "choices": [
      "Only for returns they prepared and signed, at the exam level",
      "In any examination, whether or not they prepared the return under review",
      "Everywhere an enrolled agent can appear, except the Tax Court",
      "Nowhere — the AFSP record is a marketing credential only"
    ],
    "answer": 0,
    "explain": "AFSP buys back limited representation: own-prepared, own-signed returns, before revenue agents and customer service — never appeals officers, revenue officers, or counsel. It's a narrow lane, and a favorite exam distinction."
  },
  {
    "id": "practice-4",
    "section": "practice",
    "topic": "Unenrolled preparers",
    "difficulty": "medium",
    "q": "A PTIN-only preparer (no AFSP) who prepared a client's 2025 return may",
    "choices": [
      "Prepare the return but not represent the client in its exam",
      "Represent the client in the exam of that return only",
      "Represent the client if the fee is under $1,000",
      "Handle the exam if the client signs Form 8821"
    ],
    "answer": 0,
    "explain": "For returns prepared after 2015, a bare PTIN carries no representation rights at all. And Form 8821 only authorizes receiving information — it never creates practice rights."
  },
  {
    "id": "practice-5",
    "section": "practice",
    "topic": "Due diligence & reliance",
    "difficulty": "medium",
    "q": "Under Circular 230 §10.22, a practitioner may rely on client-furnished information",
    "choices": [
      "In good faith — but must inquire when it looks incomplete or inconsistent",
      "Never — every figure must be independently verified",
      "Only when the client signs an accuracy affidavit",
      "Always — responsibility for the facts is the client's alone"
    ],
    "answer": 0,
    "explain": "The standard is good-faith reliance with reasonable inquiry: no audit of the shoebox, but no ignoring red flags either. Information that seems incorrect, inconsistent, or incomplete triggers the duty to ask."
  },
  {
    "id": "practice-6",
    "section": "practice",
    "topic": "Return position standards",
    "difficulty": "medium",
    "q": "To sign a return with an undisclosed position, §10.34 requires the position have at least",
    "choices": [
      "Substantial authority",
      "A reasonable basis",
      "A more-likely-than-not chance",
      "Any nonfrivolous argument"
    ],
    "answer": 0,
    "explain": "Undisclosed positions need substantial authority; drop to reasonable basis and it must be disclosed (Form 8275). More-likely-than-not is the tax-shelter standard, and 'nonfrivolous' alone is never enough to sign."
  },
  {
    "id": "practice-7",
    "section": "practice",
    "topic": "Contingent fees",
    "difficulty": "medium",
    "q": "A contingent fee is permitted for",
    "choices": [
      "Representing a client in an IRS examination of an original return",
      "Preparing an original return with a big refund expected",
      "Any engagement, if disclosed in writing up front",
      "Amended returns filed whenever the client chooses"
    ],
    "answer": 0,
    "explain": "Section 10.27 generally bars contingent fees, with carve-outs: IRS exams or challenges, claims filed within 120 days of a written notice, interest and penalty reviews, and judicial proceedings. Original return prep is the clearest prohibition."
  },
  {
    "id": "practice-8",
    "section": "practice",
    "topic": "Client records",
    "difficulty": "medium",
    "q": "A client fires you owing $2,000 in fees and asks for their records. Circular 230 requires you to",
    "choices": [
      "Return the client's records needed to meet their tax obligations, unpaid fee or not",
      "Hold everything until the invoice is paid",
      "Return only records the client originally gave you, after payment",
      "Send the records straight to the successor preparer"
    ],
    "answer": 0,
    "explain": "Section 10.28: records necessary for the client's federal tax obligations go back promptly, fee dispute or none (a narrow exception exists where state law grants a retaining lien). You may keep copies — and you may keep your own workproduct that isn't needed for compliance."
  },
  {
    "id": "practice-9",
    "section": "practice",
    "topic": "Conflicts of interest",
    "difficulty": "medium",
    "q": "Representing both spouses in a divorce-year exam is permissible only if",
    "choices": [
      "Each gives informed consent, confirmed in writing and kept for 36 months",
      "The practitioner mentally commits to staying neutral",
      "The IRS approves the dual representation",
      "One spouse formally waives all rights to the refund"
    ],
    "answer": 0,
    "explain": "Section 10.29 allows conflicted representation when the practitioner reasonably believes competence isn't impaired, no law forbids it, and every affected client gives informed written consent — retained for 36 months after the engagement ends."
  },
  {
    "id": "practice-10",
    "section": "practice",
    "topic": "Client's error",
    "difficulty": "easy",
    "q": "You discover the client's filed return omitted $30,000 of income. Circular 230 obligates you to",
    "choices": [
      "Promptly tell the client about the error and its consequences",
      "Report the omission to the IRS within 30 days",
      "Amend the return yourself, with or without consent",
      "Withdraw from the engagement unless the client agrees to amend"
    ],
    "answer": 0,
    "explain": "Section 10.21: advise the client promptly of the noncompliance and what flows from it. The duty runs to the client, not the IRS — you may not inform on the client, and you cannot file an amendment they haven't authorized."
  },
  {
    "id": "practice-11",
    "section": "practice",
    "topic": "Best practices",
    "difficulty": "medium",
    "q": "The 'best practices' of Circular 230 §10.33 — clear engagement terms, conclusions supported by law — are",
    "choices": [
      "Aspirational guidance, not a basis for discipline by themselves",
      "Mandatory rules enforced with monetary penalties",
      "Requirements only for written tax opinions",
      "Binding on firms but not on individuals"
    ],
    "answer": 0,
    "explain": "Section 10.33 is the aspirational chapter: what quality advisors should do. Discipline flows from the mandatory sections — due diligence, competence, standards for positions — not from falling short of best practices alone."
  },
  {
    "id": "practice-12",
    "section": "practice",
    "topic": "Competence",
    "difficulty": "medium",
    "q": "Asked to handle an unfamiliar international-reporting engagement, a practitioner must",
    "choices": [
      "Acquire the needed competence, or bring in and rely on someone who has it",
      "Decline — Circular 230 forbids practicing outside one's specialty",
      "Accept only after notifying the OPR",
      "Accept, since competence is judged only after the fact"
    ],
    "answer": 0,
    "explain": "Section 10.35 requires competence for each engagement — which can be built by study or borrowed through consultation. There is no specialty licensing and no OPR pre-clearance; there is only the duty to be competent by the time you act."
  },
  {
    "id": "practice-13",
    "section": "practice",
    "topic": "Advertising titles",
    "difficulty": "medium",
    "q": "An EA's advertising may say",
    "choices": [
      "'Enrolled agent — admitted to practice before the IRS'",
      "'IRS-certified tax professional'",
      "'Certified enrolled agent, endorsed by the Treasury'",
      "'Employed by the IRS as an enrolled agent'"
    ],
    "answer": 0,
    "explain": "Truthful descriptions are fine: enrolled agent, enrolled to practice before the IRS. 'Certified' and anything implying IRS employment or endorsement are specifically off-limits under §10.30."
  },
  {
    "id": "practice-14",
    "section": "practice",
    "topic": "Published fees",
    "difficulty": "medium",
    "q": "A practitioner who publishes a fee schedule must",
    "choices": [
      "Honor those fees for at least 30 days after the last date published",
      "Keep them in force for a full calendar year",
      "File the schedule with the IRS before using it",
      "Charge every client identically forever after"
    ],
    "answer": 0,
    "explain": "Section 10.30(b): published fee information binds the practitioner for 30 calendar days after it last appears. Fixed fees for specific routine services are fine; the rule polices bait-and-switch, not pricing."
  },
  {
    "id": "practice-15",
    "section": "practice",
    "topic": "Delay",
    "difficulty": "easy",
    "q": "Sitting on IRS document requests to slow an exam down is",
    "choices": [
      "A Circular 230 violation — matters may not be unreasonably delayed",
      "Sound strategy, since delay pressures settlement",
      "Fine if the client instructs it in writing",
      "Only a problem once a summons is issued"
    ],
    "answer": 0,
    "explain": "Section 10.23 forbids unreasonably delaying the prompt disposition of any matter before the IRS. Client instructions don't launder it — a practitioner can't be hired to stonewall."
  },
  {
    "id": "practice-16",
    "section": "practice",
    "topic": "Disbarred helpers",
    "difficulty": "medium",
    "q": "Hiring a disbarred practitioner to work on your clients' IRS matters is",
    "choices": [
      "Prohibited — no knowing acceptance of a disbarred person's help",
      "Permitted so long as the disbarred person never signs any filing",
      "Permitted once two full years have passed since the disbarment",
      "Permitted if the arrangement is disclosed on each Form 2848"
    ],
    "answer": 0,
    "explain": "Section 10.24: no knowingly accepting assistance, directly or indirectly, from someone disbarred or suspended, on any matter constituting practice. Keeping their name off the paperwork is exactly the arrangement the rule targets."
  },
  {
    "id": "practice-17",
    "section": "practice",
    "topic": "Refund checks",
    "difficulty": "medium",
    "q": "A practitioner who prepares returns may endorse or negotiate a client's refund check",
    "choices": [
      "Never — not even with the client's written permission",
      "When the client owes fees equal to the refund",
      "When acting under a Form 2848 that mentions refunds",
      "When the check is under $1,000"
    ],
    "answer": 0,
    "explain": "Section 10.31 is absolute for preparers, and §6695(f) adds a per-check penalty. The same idea bars directing client refunds into an account the preparer controls. Consent is no cure — the money must reach the client."
  },
  {
    "id": "practice-18",
    "section": "practice",
    "topic": "Written advice",
    "difficulty": "medium",
    "q": "Under §10.37, written tax advice may not be based on",
    "choices": [
      "The audit lottery — assuming an issue won't be examined",
      "Reasonable factual assumptions the client confirms",
      "Authorities weighted by relevance",
      "Client-furnished facts the practitioner did not independently audit"
    ],
    "answer": 0,
    "explain": "Written advice must rest on reasonable assumptions, all relevant facts, and reasonable application of law to facts — and may never discount the chance that a return simply won't be audited. The other three describe exactly what §10.37 expects."
  },
  {
    "id": "practice-19",
    "section": "practice",
    "topic": "Who enforces",
    "difficulty": "medium",
    "q": "Circular 230 discipline is administered by",
    "choices": [
      "The Office of Professional Responsibility",
      "The Return Preparer Office",
      "The Taxpayer Advocate Service",
      "Each IRS operating division for its own cases"
    ],
    "answer": 0,
    "explain": "OPR owns conduct and discipline; the Return Preparer Office runs PTINs, enrollment, and renewals. The two-office split — RPO gives the credential, OPR can take practice away — appears constantly on Part 3."
  },
  {
    "id": "practice-20",
    "section": "practice",
    "topic": "Scope of EA rights",
    "difficulty": "easy",
    "q": "An enrolled agent's practice rights extend to",
    "choices": [
      "Any taxpayer, any IRS office, anywhere in the country",
      "Only clients in the EA's state of residence",
      "Only individual taxpayers, not businesses",
      "Only matters below $1 million in dispute"
    ],
    "answer": 0,
    "explain": "Enrollment is a federal credential with no geographic or taxpayer-type limits — exams, collections, appeals, for anyone, in any state. The ceiling is the IRS itself: Tax Court practice requires separate admission."
  },
  {
    "id": "discipline-1",
    "section": "discipline",
    "topic": "The sanction ladder",
    "difficulty": "easy",
    "q": "The Circular 230 sanctions, mildest to harshest, run",
    "choices": [
      "Censure, suspension, disbarment — plus possible monetary penalties",
      "Warning letter, fine, misdemeanor conviction",
      "Probation, license surrender, prison",
      "Fee forfeiture, PTIN revocation, deportation from practice"
    ],
    "answer": 0,
    "explain": "Censure is a public reprimand, suspension pulls practice rights for a period, disbarment ends them. Monetary penalties can stack on top of any of the three — they are not an alternative track."
  },
  {
    "id": "discipline-2",
    "section": "discipline",
    "topic": "Monetary penalties",
    "difficulty": "medium",
    "q": "A Circular 230 monetary penalty can be imposed on",
    "choices": [
      "Both the practitioner and their firm, up to the gross income from the conduct",
      "The practitioner only — firms are outside OPR's reach",
      "The firm only, as the deeper pocket",
      "Clients who knowingly benefited from the misconduct"
    ],
    "answer": 0,
    "explain": "Section 10.50(c) reaches the individual and any firm that knew or reasonably should have known of the conduct, each capped at the gross income derived from it. Clients answer to other statutes, not Circular 230."
  },
  {
    "id": "discipline-3",
    "section": "discipline",
    "topic": "Disreputable conduct",
    "difficulty": "medium",
    "q": "Which is listed as incompetence or disreputable conduct under §10.51?",
    "choices": [
      "Willfully failing to file your own federal tax return",
      "Losing a client's audit on the merits",
      "Falling short of the 16-hour annual CE minimum",
      "Declining an engagement outside your expertise"
    ],
    "answer": 0,
    "explain": "The practitioner's own noncompliance is squarely §10.51 — as are dishonesty convictions, false statements to Treasury, and negotiating client refund checks. Losing a case, competing on price, and declining work are just practice."
  },
  {
    "id": "discipline-4",
    "section": "discipline",
    "topic": "Own returns",
    "difficulty": "easy",
    "q": "An EA who hasn't filed their own returns for three years faces",
    "choices": [
      "OPR discipline — personal noncompliance is disreputable conduct",
      "Nothing from OPR, since clients weren't harmed",
      "Only interest and penalties like any taxpayer",
      "Automatic criminal referral"
    ],
    "answer": 0,
    "explain": "A pattern of willful personal noncompliance is one of OPR's most common cases — and a ground for expedited suspension. The credential rests on the practitioner's own tax house being in order."
  },
  {
    "id": "discipline-5",
    "section": "discipline",
    "topic": "Expedited suspension",
    "difficulty": "medium",
    "q": "The expedited suspension procedure of §10.82 applies to a practitioner who",
    "choices": [
      "Lost a license, was convicted of a tax crime, or shows a nonfiling pattern",
      "Missed a single continuing-education deadline in one cycle",
      "Spoke rudely to a revenue agent during one examination",
      "Filed a client protest that Appeals considered meritless"
    ],
    "answer": 0,
    "explain": "Expedited suspension is for the clear-cut cases: state license revocation, qualifying convictions, sustained personal noncompliance. The practitioner can demand a conference, but the suspension can land fast — no full ALJ hearing first."
  },
  {
    "id": "discipline-6",
    "section": "discipline",
    "topic": "Process",
    "difficulty": "medium",
    "q": "A contested OPR disciplinary case is heard first by",
    "choices": [
      "An administrative law judge",
      "A federal district court jury",
      "The Tax Court",
      "The IRS Commissioner personally"
    ],
    "answer": 0,
    "explain": "OPR files a complaint, the practitioner answers, and an ALJ hears the case. The initial decision can be appealed to the Treasury Appellate Authority, and from there to federal district court — the Tax Court has no role in practitioner discipline."
  },
  {
    "id": "discipline-7",
    "section": "discipline",
    "topic": "Reinstatement",
    "difficulty": "easy",
    "q": "A disbarred practitioner may petition for reinstatement after",
    "choices": [
      "Five years",
      "One year",
      "Ninety days",
      "Never — disbarment is permanent"
    ],
    "answer": 0,
    "explain": "Five years, and reinstatement isn't automatic — the petitioner must show they're not likely to violate the rules again and that reinstatement isn't contrary to the public interest."
  },
  {
    "id": "discipline-8",
    "section": "discipline",
    "topic": "Answering a complaint",
    "difficulty": "medium",
    "q": "A practitioner served with an OPR complaint who never answers it",
    "choices": [
      "Is deemed to admit the allegations, and a default decision can follow",
      "Gets an automatic dismissal after 90 days of OPR silence",
      "Forces OPR to refile in district court",
      "Suffers no consequence until a hearing is actually held"
    ],
    "answer": 0,
    "explain": "Silence is admission: unanswered allegations are taken as true and the case can end by default. The answer deadline in the complaint — no less than 30 days from service — is the one that matters most."
  },
  {
    "id": "discipline-9",
    "section": "discipline",
    "topic": "Censure",
    "difficulty": "medium",
    "q": "Censure under Circular 230 is",
    "choices": [
      "A public reprimand — the practitioner keeps practicing",
      "A private warning letter kept in OPR's files",
      "A 30-day automatic suspension",
      "A fine collected through payroll offset"
    ],
    "answer": 0,
    "explain": "Censure is the lightest formal sanction: public, published, reputational — but practice rights continue. OPR may also attach conditions to future practice as part of a censure or consent settlement."
  },
  {
    "id": "discipline-10",
    "section": "discipline",
    "topic": "False statements",
    "difficulty": "medium",
    "q": "Giving false or misleading information to the Treasury Department is",
    "choices": [
      "Disreputable conduct — even outside a client engagement",
      "Sanctionable only under criminal statutes",
      "A problem only if made under oath",
      "Cured by correcting the record within 30 days"
    ],
    "answer": 0,
    "explain": "Section 10.51 reaches false statements to the Department or its officers knowing them false — no oath, engagement, or materiality-to-a-client required, and no statutory cure period for having lied."
  },
  {
    "id": "discipline-11",
    "section": "discipline",
    "topic": "Assisting evasion",
    "difficulty": "medium",
    "q": "A practitioner who structures a client's affairs to willfully evade assessed tax — hiding assets, routing income — has committed",
    "choices": [
      "Disreputable conduct, on top of any criminal exposure",
      "Misconduct only if the practitioner personally profited",
      "No violation if the client initiated the plan",
      "A violation only after criminal conviction"
    ],
    "answer": 0,
    "explain": "Willfully assisting evasion of assessment or payment sits in §10.51 on its own footing — OPR needn't wait for prosecutors, and 'the client asked' has never been a defense to anything in Circular 230."
  },
  {
    "id": "discipline-12",
    "section": "discipline",
    "topic": "Referrals",
    "difficulty": "easy",
    "q": "Matters reach OPR through",
    "choices": [
      "Referrals from IRS personnel, other agencies, and the public alike",
      "Only sworn complaints filed by harmed clients",
      "Only computer screening of e-filed returns",
      "Annual random audits of practitioners"
    ],
    "answer": 0,
    "explain": "Anyone can refer: revenue agents flag conduct during exams, appeals officers during conferences, state boards share discipline, clients complain directly. Exam-time misconduct is the most common pipeline."
  },
  {
    "id": "discipline-13",
    "section": "discipline",
    "topic": "Practicing while suspended",
    "difficulty": "medium",
    "q": "A suspended practitioner who keeps representing clients before the IRS",
    "choices": [
      "Risks escalation to disbarment for practicing while ineligible",
      "Faces no added consequence — the suspension just restarts",
      "May do so if clients sign informed-consent waivers",
      "May finish matters that began before the suspension"
    ],
    "answer": 0,
    "explain": "Practice during suspension is itself disreputable conduct and the classic road from suspension to disbarment. There is no grandfathering of pending matters and no client waiver that restores eligibility."
  },
  {
    "id": "discipline-14",
    "section": "discipline",
    "topic": "Finality",
    "difficulty": "medium",
    "q": "An ALJ's initial decision in a discipline case becomes final",
    "choices": [
      "If neither side appeals within 30 days",
      "Immediately upon issuance, appeal or not",
      "Only after the Commissioner countersigns it",
      "After publication in the Federal Register"
    ],
    "answer": 0,
    "explain": "Thirty days to appeal to the Treasury Appellate Authority; silence makes the initial decision final. Judicial review in district court comes only after the administrative path is exhausted."
  },
  {
    "id": "discipline-15",
    "section": "discipline",
    "topic": "After disbarment",
    "difficulty": "medium",
    "q": "A disbarred individual may still lawfully",
    "choices": [
      "Prepare returns for compensation with a valid PTIN",
      "Represent old clients in ongoing exams",
      "Appear before Appeals on small cases",
      "Advertise as an enrolled agent in transition"
    ],
    "answer": 0,
    "explain": "Disbarment ends practice — representation — but after Loving, preparation alone isn't practice, so preparing returns remains lawful with a PTIN. Appearing before any IRS function or using the EA title is exactly what's forbidden."
  },
  {
    "id": "discipline-16",
    "section": "discipline",
    "topic": "Stacking sanctions",
    "difficulty": "medium",
    "q": "May OPR impose a monetary penalty and a suspension for the same conduct?",
    "choices": [
      "Yes — monetary penalties may accompany any other sanction",
      "No — the practitioner elects one or the other",
      "Only a court may combine sanctions",
      "Only if the conduct was criminal"
    ],
    "answer": 0,
    "explain": "Section 10.50 makes the monetary penalty additive: it can ride alongside censure, suspension, or disbarment, and can hit the firm at the same time. It is not a buy-out of the conduct sanction."
  },
  {
    "id": "discipline-17",
    "section": "discipline",
    "topic": "Firm procedures",
    "difficulty": "medium",
    "q": "Under §10.36, a firm's Circular 230 compliance failures can be charged to",
    "choices": [
      "The practitioners with principal authority over the practice area",
      "Every employee of the firm equally",
      "Only the individual who did the work",
      "No one — firms have no Circular 230 duties"
    ],
    "answer": 0,
    "explain": "Those with principal authority must take reasonable steps to ensure firm-wide compliance; willful, reckless, or grossly incompetent failure to do so — or to act on known violations — is their personal exposure."
  },
  {
    "id": "discipline-18",
    "section": "discipline",
    "topic": "Contempt",
    "difficulty": "medium",
    "q": "Repeated abusive, threatening language toward IRS employees during exams is",
    "choices": [
      "Contemptuous conduct — sanctionable under Circular 230",
      "Protected zealous advocacy for the client's position",
      "A matter for building security, never for the OPR",
      "Sanctionable only when the threats are put in writing"
    ],
    "answer": 0,
    "explain": "Section 10.51 lists contemptuous conduct in connection with practice — abusive language, false accusations, circulating malicious matter. Zealous advocacy argues the law hard; it doesn't threaten the agent."
  },
  {
    "id": "discipline-19",
    "section": "discipline",
    "topic": "Bad opinions",
    "difficulty": "medium",
    "q": "A pattern of providing false opinions through gross incompetence or willful recklessness is",
    "choices": [
      "Disreputable conduct, even absent fraudulent intent",
      "Malpractice for the state bar only",
      "Actionable only by defrauded clients",
      "Excused if each opinion carried a disclaimer"
    ],
    "answer": 0,
    "explain": "Section 10.51(a)(13): false opinions rendered knowingly, recklessly, or through gross incompetence — a pattern of even 'accidental' wrong answers at that level is itself the violation. Disclaimers don't immunize incompetence."
  },
  {
    "id": "discipline-20",
    "section": "discipline",
    "topic": "Publicity",
    "difficulty": "easy",
    "q": "Final Circular 230 discipline is",
    "choices": [
      "Published in the Internal Revenue Bulletin and a public list",
      "Sealed unless the practitioner consents",
      "Shared only with the practitioner's clients of record",
      "Kept inside OPR for five years, then destroyed"
    ],
    "answer": 0,
    "explain": "Discipline is public by design: IRB announcements name names, and OPR maintains a searchable list. The publicity is part of the deterrent — and why consent settlements still sting."
  },
  {
    "id": "ea-1",
    "section": "ea",
    "topic": "Two paths in",
    "difficulty": "easy",
    "q": "The two routes to becoming an enrolled agent are",
    "choices": [
      "Passing the three-part SEE, or qualifying former IRS employment",
      "A state accountancy license, or a law degree",
      "Five years of paid preparation, or an AFSP record",
      "Sponsorship by two current EAs, or an OPR waiver"
    ],
    "answer": 0,
    "explain": "Pass all three Special Enrollment Examination parts, or leverage five years of qualifying IRS technical experience. Both paths then face the same Form 23 application and tax-compliance suitability check."
  },
  {
    "id": "ea-2",
    "section": "ea",
    "topic": "PTIN",
    "difficulty": "easy",
    "q": "A PTIN is required of",
    "choices": [
      "Anyone preparing federal returns for compensation",
      "Enrolled agents and CPAs only, as credentialed preparers",
      "Preparers who file more than ten returns a year",
      "Only preparers who also e-file their clients' returns"
    ],
    "answer": 0,
    "explain": "Every compensated preparer needs a current PTIN — EA or not, one return or a thousand. It renews each year (the fee is about $20), and preparing for pay without one draws a per-return penalty."
  },
  {
    "id": "ea-3",
    "section": "ea",
    "topic": "SEE carryover",
    "difficulty": "medium",
    "q": "A passed SEE part stays valid, while you finish the others, for",
    "choices": [
      "Three years",
      "One year",
      "Two testing windows",
      "Indefinitely"
    ],
    "answer": 0,
    "explain": "Candidates carry passing scores for three years from the date the first part was passed (extended from two). Let one expire and that part must be retaken — the clock, not the score, is what lapses."
  },
  {
    "id": "ea-4",
    "section": "ea",
    "topic": "Form 23",
    "difficulty": "medium",
    "q": "After passing all three SEE parts, a candidate must",
    "choices": [
      "Apply for enrollment on Form 23 within one year",
      "Do nothing — enrollment issues automatically",
      "Complete a one-year apprenticeship under an EA",
      "Register with their state board of accountancy"
    ],
    "answer": 0,
    "explain": "Form 23 (with fee) starts the suitability review — personal and business tax compliance, criminal history. Passing the exam earns eligibility, not the credential; the one-year application window is the deadline people forget."
  },
  {
    "id": "ea-5",
    "section": "ea",
    "topic": "Renewal cycle",
    "difficulty": "easy",
    "q": "EAs renew their enrollment",
    "choices": [
      "Every three years, in a window set by the last digit of their SSN",
      "Every year on their enrollment anniversary",
      "Every five years with a fresh background check",
      "Only when notified by the OPR"
    ],
    "answer": 0,
    "explain": "Three-year cycles, staggered by SSN last digit, with a renewal window of November 1 through January 31 before the cycle ends. Form 8554 and the fee go to the Return Preparer Office, not OPR."
  },
  {
    "id": "ea-6",
    "section": "ea",
    "topic": "CE requirement",
    "difficulty": "medium",
    "q": "The continuing education requirement for a full enrollment cycle is",
    "choices": [
      "72 hours over three years — 16 minimum yearly, 2 of ethics",
      "40 hours each year, any subjects, all self-study permitted",
      "72 hours whenever convenient, with no annual minimums",
      "24 hours a year, with no ethics requirement at all"
    ],
    "answer": 0,
    "explain": "Seventy-two hours per cycle, but with floors: never less than 16 in any year, and 2 ethics hours every single year. The annual minimums are what trip people who plan to binge CE in year three."
  },
  {
    "id": "ea-7",
    "section": "ea",
    "topic": "First cycle proration",
    "difficulty": "medium",
    "q": "An EA enrolled mid-cycle owes CE of",
    "choices": [
      "2 hours per month of enrollment, plus 2 ethics hours each year",
      "The full 72 hours regardless of start date",
      "Nothing until the first full cycle begins",
      "36 hours flat for any partial cycle"
    ],
    "answer": 0,
    "explain": "First cycles prorate at two hours a month enrolled, with the two annual ethics hours still required. The full 72/16/2 pattern starts with the first complete cycle."
  },
  {
    "id": "ea-8",
    "section": "ea",
    "topic": "CE records",
    "difficulty": "medium",
    "q": "Records proving CE completion must be kept for",
    "choices": [
      "Four years after the renewal date",
      "One year past the cycle",
      "Seven years, like return workpapers",
      "No set period — providers keep them"
    ],
    "answer": 0,
    "explain": "Four years: certificates, program numbers, hours. Providers report to the IRS too, but the renewal certification is the EA's own, and RPO spot-checks fall on the practitioner's records."
  },
  {
    "id": "ea-9",
    "section": "ea",
    "topic": "Approved providers",
    "difficulty": "medium",
    "q": "CE hours count toward enrollment only when taken from",
    "choices": [
      "IRS-approved providers issuing program numbers",
      "Any accredited college or university",
      "Any provider, if the subject is federal tax",
      "State CPA societies exclusively"
    ],
    "answer": 0,
    "explain": "The provider must be IRS-approved and the program must carry its issued number — federal tax law, ethics, or update content. A brilliant course from an unapproved source earns zero enrollment credit."
  },
  {
    "id": "ea-10",
    "section": "ea",
    "topic": "Renewal form",
    "difficulty": "easy",
    "q": "Enrollment is renewed on",
    "choices": [
      "Form 8554",
      "Form 23",
      "Form 2848",
      "Form W-12"
    ],
    "answer": 0,
    "explain": "Form 8554 with the renewal fee, certifying the CE hours. Form 23 is the original application, W-12 is the PTIN form, and 2848 is a client power of attorney — a classic form-number lineup."
  },
  {
    "id": "ea-11",
    "section": "ea",
    "topic": "Missing renewal",
    "difficulty": "medium",
    "q": "An EA who fails to renew on time is placed in",
    "choices": [
      "Inactive status — and may not practice until renewed",
      "A 90-day grace period with full practice rights",
      "Automatic disbarment proceedings",
      "AFSP status as a fallback"
    ],
    "answer": 0,
    "explain": "Inactive means no practice and no use of the EA designation. Sit inactive long enough — three cycles — and the enrollment terminates entirely, putting the SEE back on the table."
  },
  {
    "id": "ea-12",
    "section": "ea",
    "topic": "RPO vs OPR",
    "difficulty": "medium",
    "q": "Enrollment, renewals, and PTINs are administered by",
    "choices": [
      "The Return Preparer Office",
      "The Office of Professional Responsibility",
      "The Office of Chief Counsel",
      "The Taxpayer Advocate Service"
    ],
    "answer": 0,
    "explain": "RPO issues and renews the credential; OPR polices conduct and can suspend or disbar. Part 3 loves this split: apply to RPO, answer to OPR."
  },
  {
    "id": "ea-13",
    "section": "ea",
    "topic": "Using the title",
    "difficulty": "medium",
    "q": "Which self-description is barred to an enrolled agent under §10.30?",
    "choices": [
      "'Certified by the Internal Revenue Service'",
      "'Enrolled agent'",
      "'Admitted to practice before the IRS'",
      "'Enrolled to practice before the Internal Revenue Service'"
    ],
    "answer": 0,
    "explain": "'Certified' is specifically barred, as is anything implying IRS employment or endorsement. The truthful enrollment phrasings are all permitted — the credential is enrollment, and the wording must say exactly that."
  },
  {
    "id": "ea-14",
    "section": "ea",
    "topic": "Retirement status",
    "difficulty": "medium",
    "q": "An EA stepping away from practice may elect",
    "choices": [
      "Inactive retirement status, keeping the option to return by renewing",
      "Emeritus status with permanent practice rights",
      "Conversion of the credential to AFSP",
      "Transfer of the enrollment to a colleague"
    ],
    "answer": 0,
    "explain": "Inactive retirement parks the credential: no practice, no CE, but a path back through renewal. Enrollment is personal and can never be sold or transferred."
  },
  {
    "id": "ea-15",
    "section": "ea",
    "topic": "No state licensing",
    "difficulty": "easy",
    "q": "To practice in a new state, an EA must",
    "choices": [
      "Do nothing — enrollment is federal and valid nationwide",
      "Register with the new state's board of accountancy",
      "Retake the SEE in that state",
      "Associate with a locally licensed CPA"
    ],
    "answer": 0,
    "explain": "The EA credential comes from Treasury, not any state — it travels everywhere. (State-specific work like representing clients before a state revenue agency is a separate, state-law question.)"
  },
  {
    "id": "ea-16",
    "section": "ea",
    "topic": "SEE scoring",
    "difficulty": "medium",
    "q": "The SEE is scored",
    "choices": [
      "On a scale of 40 to 130, with 105 passing",
      "As a straight percentage, with 70% passing",
      "Pass/fail with no numeric score reported",
      "On a curve against each testing window's candidates"
    ],
    "answer": 0,
    "explain": "Scaled scoring, pass at 105. Failing candidates get diagnostic feedback by topic area; passing candidates just get the pass — the scale swallows the details."
  },
  {
    "id": "ea-17",
    "section": "ea",
    "topic": "Retakes",
    "difficulty": "medium",
    "q": "A candidate who fails an SEE part may retake it",
    "choices": [
      "Up to four times within the testing window",
      "Only once per year",
      "Immediately and without limit",
      "Only after retaking all three parts"
    ],
    "answer": 0,
    "explain": "Four attempts per part per testing window (May through February), with a fresh set of attempts when the next window opens. Passed parts stay passed — only the failed part is retaken."
  },
  {
    "id": "ea-18",
    "section": "ea",
    "topic": "Former IRS employees",
    "difficulty": "medium",
    "q": "Enrollment based on former IRS employment",
    "choices": [
      "Can be limited in scope to the applicant's technical experience",
      "Always confers unlimited practice rights",
      "Requires passing one SEE part as a check",
      "Is available after any two years of IRS service"
    ],
    "answer": 0,
    "explain": "Five years of qualifying technical experience is the floor, and RPO may grant enrollment limited to the areas that experience actually covered — a collections specialist can end up enrolled for collections matters, not everything."
  },
  {
    "id": "ea-19",
    "section": "ea",
    "topic": "Suitability",
    "difficulty": "medium",
    "q": "The enrollment suitability check examines",
    "choices": [
      "The applicant's own tax compliance and conduct history",
      "Only felony convictions within the last twelve months",
      "Credit score and outstanding consumer debts",
      "Written references from three current clients"
    ],
    "answer": 0,
    "explain": "Unfiled returns and unpaid balances are the most common reasons Form 23 applications stall. The same compliance check re-runs at every renewal — the credential assumes the holder's own filings are clean."
  },
  {
    "id": "ea-20",
    "section": "ea",
    "topic": "When practice begins",
    "difficulty": "easy",
    "q": "A successful SEE candidate may begin representing clients",
    "choices": [
      "When enrollment actually issues, after Form 23 clears",
      "The moment the third passing score posts at Prometric",
      "As soon as Form 23 goes in the mail",
      "After the first continuing-education cycle completes"
    ],
    "answer": 0,
    "explain": "Practice rights ride on enrollment, and enrollment issues only after Form 23 clears suitability. The gap between passing and enrollment is real — representing clients inside it is unauthorized practice."
  },
  {
    "id": "auth-1",
    "section": "auth",
    "topic": "2848 vs 8821",
    "difficulty": "easy",
    "q": "The relationship between Form 2848 and Form 8821 is",
    "choices": [
      "2848 authorizes representation; 8821 only authorizes receiving information",
      "2848 is for individuals; 8821 is for businesses",
      "2848 covers exams; 8821 covers collections",
      "They are interchangeable — the IRS accepts either"
    ],
    "answer": 0,
    "explain": "The 2848 is a power of attorney: advocate, argue, negotiate. The 8821 is a tax information authorization: receive transcripts and notices, nothing more. A lender or payroll company gets an 8821; a representative needs the 2848."
  },
  {
    "id": "auth-2",
    "section": "auth",
    "topic": "Specificity",
    "difficulty": "medium",
    "q": "A Form 2848 listing 'all taxes, all years' is",
    "choices": [
      "Invalid — it must name specific matters, forms, and periods",
      "Valid, and convenient for ongoing clients",
      "Valid for three years, then expires",
      "Valid once recorded on the CAF"
    ],
    "answer": 0,
    "explain": "Blanket grants are rejected: the form needs the tax matter, form number, and periods — though future periods can be listed up to three years past the year you sign. Precision is the price of the CAF system."
  },
  {
    "id": "auth-3",
    "section": "auth",
    "topic": "The CAF",
    "difficulty": "medium",
    "q": "The Centralized Authorization File (CAF) is",
    "choices": [
      "The IRS database of recorded authorizations, keyed to each rep's CAF number",
      "A public registry of practitioners in good standing",
      "The file room where original 2848s are stored on paper",
      "The unit that reviews and approves each POA before it takes effect"
    ],
    "answer": 0,
    "explain": "Once recorded, the CAF routes copies of notices to representatives and lets IRS employees verify authority instantly. Specific-use authorizations (checkbox on the form) skip the CAF and live only in the case file."
  },
  {
    "id": "auth-4",
    "section": "auth",
    "topic": "Who can be the rep",
    "difficulty": "medium",
    "q": "Who may be named as representative on a Form 2848?",
    "choices": [
      "Credentialed practitioners plus limited categories — family, officers, employees",
      "Only attorneys, CPAs, and enrolled agents, without exception",
      "Anyone the taxpayer trusts, without restriction",
      "Only individuals sharing the taxpayer's state of residence"
    ],
    "answer": 0,
    "explain": "Beyond the credentialed three, the form recognizes limited categories: immediate family, corporate officers, full-time employees, fiduciaries, AFSP holders for their own returns. Each category has its own designation letter and limits."
  },
  {
    "id": "auth-5",
    "section": "auth",
    "topic": "8821 users",
    "difficulty": "easy",
    "q": "A mortgage lender that needs a borrower's transcripts should be given",
    "choices": [
      "Form 8821",
      "Form 2848",
      "Form 56",
      "Form 8879"
    ],
    "answer": 0,
    "explain": "Information without advocacy is exactly the 8821's job — and it can name entities, not just individuals. A 2848 would hand the bank practice rights it neither needs nor may use."
  },
  {
    "id": "auth-6",
    "section": "auth",
    "topic": "Notice copies",
    "difficulty": "medium",
    "q": "IRS copies of notices go to",
    "choices": [
      "Up to two representatives designated on the Form 2848",
      "Every representative listed, without limit",
      "The representative only if the taxpayer opts out of mail",
      "No one but the taxpayer, ever"
    ],
    "answer": 0,
    "explain": "The form caps notice copies at two named representatives. More reps can hold authority, but only two get the mail — pick the ones who will actually act on deadlines."
  },
  {
    "id": "auth-7",
    "section": "auth",
    "topic": "Superseding POAs",
    "difficulty": "medium",
    "q": "Filing a new 2848 for the same tax matter",
    "choices": [
      "Revokes the prior POA unless the retention box is checked",
      "Stacks with the earlier POA automatically",
      "Is rejected while a prior POA remains on file",
      "Requires OPR approval to displace the old representative"
    ],
    "answer": 0,
    "explain": "New POA, same matter, old one dies — unless line 6's retention box is checked with the prior POA attached. Forgetting that mechanic has silently fired many a co-representative."
  },
  {
    "id": "auth-8",
    "section": "auth",
    "topic": "Revocation without replacement",
    "difficulty": "medium",
    "q": "A taxpayer who wants to end a POA without naming anyone new",
    "choices": [
      "Writes REVOKE across a copy, signs and dates it, and sends it in",
      "Simply stops returning the representative's calls",
      "Must file a new 2848 naming themselves",
      "Petitions the CAF unit with a notarized affidavit"
    ],
    "answer": 0,
    "explain": "Revocation is deliberately low-tech: REVOKE across the face, current signature and date (or a signed statement if no copy exists). Representatives withdraw the mirror-image way, writing WITHDRAW."
  },
  {
    "id": "auth-9",
    "section": "auth",
    "topic": "Incapacity",
    "difficulty": "medium",
    "q": "For a representative to keep acting after a client becomes incapacitated, the path is",
    "choices": [
      "A durable power of attorney authorizing tax matters, with a 2848 filed under it",
      "The original 2848, which always survives incapacity",
      "A new 2848 signed by the incapacitated client",
      "A letter from the client's physician attached to the old POA"
    ],
    "answer": 0,
    "explain": "An ordinary 2848 does not survive the principal's incapacity. A state-law durable POA that grants tax authority lets the agent execute and file a 2848 on the principal's behalf — the belt-and-suspenders every aging-client practice needs."
  },
  {
    "id": "auth-10",
    "section": "auth",
    "topic": "Remote signatures",
    "difficulty": "medium",
    "q": "A 2848 signed electronically by a client the practitioner has never met in person",
    "choices": [
      "Requires the practitioner to verify the client's identity first",
      "Is acceptable as filed, with no additional verification steps",
      "Is invalid — the IRS still requires wet-ink signatures",
      "Must be notarized before the CAF unit will record it"
    ],
    "answer": 0,
    "explain": "Remote e-signatures ride on knowledge-based authentication or comparable identity verification, then upload through Tax Pro Account or Submit Forms 2848/8821 Online. In-person and mailed wet-ink forms need no KBA."
  },
  {
    "id": "auth-11",
    "section": "auth",
    "topic": "Third-party designee",
    "difficulty": "easy",
    "q": "The 'third-party designee' checkbox on a Form 1040 gives the named person",
    "choices": [
      "Limited authority over that return's processing, for about a year",
      "A full power of attorney covering the entire tax year",
      "Standing authority over every open year on file",
      "The right to appeal that return's audit result"
    ],
    "answer": 0,
    "explain": "Checkbox authority is narrow — processing questions, math errors, refund status for that one return — and it sunsets on the due date of the following year's return. Anything more needs an 8821 or 2848."
  },
  {
    "id": "auth-12",
    "section": "auth",
    "topic": "Oral authorization",
    "difficulty": "medium",
    "q": "A taxpayer on the phone with the IRS can orally authorize their preparer to",
    "choices": [
      "Join and speak in that conversation only",
      "Represent them for the rest of the exam",
      "Receive all future notices",
      "Sign documents on their behalf that day"
    ],
    "answer": 0,
    "explain": "Oral consent covers the immediate conversation and dies with the call. Standing authority — future calls, notices, documents — requires the written forms and the CAF."
  },
  {
    "id": "auth-13",
    "section": "auth",
    "topic": "Students",
    "difficulty": "medium",
    "q": "Law and graduate students may represent taxpayers before the IRS",
    "choices": [
      "By special appearance through an LITC or student clinic",
      "Never — representation requires a full personal credential",
      "Whenever supervised by any paid preparer",
      "Only in the Tax Court, never before the IRS"
    ],
    "answer": 0,
    "explain": "Student practice runs through Low Income Taxpayer Clinics and Student Tax Clinic Programs under special orders, supervised by a credentialed director. It's the one route to practice with no personal credential at all."
  },
  {
    "id": "auth-14",
    "section": "auth",
    "topic": "AFSP on the 2848",
    "difficulty": "medium",
    "q": "An AFSP preparer named on a 2848 for a return they prepared may deal with",
    "choices": [
      "Revenue agents and customer service — but not appeals or collection personnel",
      "The full exam, appeal, and collection cycle for that return",
      "Any IRS office, for that client only",
      "Nobody — AFSP holders cannot appear on a 2848"
    ],
    "answer": 0,
    "explain": "Designation letter for unenrolled preparers with the AFSP record: exam-level representation on own-prepared returns. The moment the case reaches Appeals or a revenue officer, a fully credentialed rep must take over."
  },
  {
    "id": "auth-15",
    "section": "auth",
    "topic": "Fiduciaries",
    "difficulty": "medium",
    "q": "An executor dealing with the IRS on the estate's behalf files",
    "choices": [
      "Form 56 — a fiduciary stands in as the taxpayer, not as a representative",
      "Form 2848 naming themselves",
      "Form 8821 for each estate year",
      "Nothing — the court appointment is self-executing with the IRS"
    ],
    "answer": 0,
    "explain": "Fiduciaries ARE the taxpayer for tax administration, so Form 56 gives notice of the relationship; no POA is needed for their own authority. (The fiduciary can in turn hire a representative — that's when a 2848 appears, signed by the fiduciary.)"
  },
  {
    "id": "auth-16",
    "section": "auth",
    "topic": "Deceased clients",
    "difficulty": "medium",
    "q": "A 2848 for a deceased taxpayer's matter must be signed by",
    "choices": [
      "The personal representative, with the court certificate attached",
      "The surviving spouse in every case",
      "The preparer who filed the final return",
      "No one — POAs cannot exist after death"
    ],
    "answer": 0,
    "explain": "Death revokes the decedent's own POAs; authority restarts with the estate's representative, who signs a new 2848 (court letters attached) if they want counsel. The old rep's authority died with the client."
  },
  {
    "id": "auth-17",
    "section": "auth",
    "topic": "Limits of the POA",
    "difficulty": "medium",
    "q": "Even with a standard 2848 on file, a representative may NOT",
    "choices": [
      "Endorse or cash the client's refund check",
      "Receive copies of the client's notices",
      "Argue the client's position in an exam",
      "Sign a consent extending the assessment period"
    ],
    "answer": 0,
    "explain": "Negotiating refund checks is flatly barred (Circular 230 §10.31). Signing a return for the client is nearly as restricted — only in narrow situations like continuous absence abroad, and only if line 5a specifically authorizes it. Consents and advocacy are the POA's ordinary work."
  },
  {
    "id": "auth-18",
    "section": "auth",
    "topic": "Joint filers",
    "difficulty": "medium",
    "q": "To represent both spouses from a joint return,",
    "choices": [
      "Each spouse must sign their own Form 2848",
      "One 2848 signed by either spouse suffices",
      "A single joint 2848 with both signatures is required",
      "The higher earner's signature controls"
    ],
    "answer": 0,
    "explain": "Since 2018 the joint 2848 is gone: separate forms, separately signed, even for the same representative on the same matter. Divorcing spouses can therefore have different reps — which is often the point."
  },
  {
    "id": "auth-19",
    "section": "auth",
    "topic": "Checking what's on file",
    "difficulty": "easy",
    "q": "A representative can see and manage their own recorded client authorizations through",
    "choices": [
      "Tax Pro Account",
      "The public IRS practitioner directory",
      "Any IRS walk-in center, on demand",
      "FOIA requests to the CAF unit"
    ],
    "answer": 0,
    "explain": "Tax Pro Account shows active CAF authorizations, accepts new e-signed 2848s and 8821s, and handles withdrawals. It's also the door to linked online services like pulling client transcripts."
  },
  {
    "id": "auth-20",
    "section": "auth",
    "topic": "Rep withdrawal",
    "difficulty": "medium",
    "q": "A representative ending a client relationship removes themselves by",
    "choices": [
      "Filing a copy of the POA marked WITHDRAW, signed and dated",
      "Calling the client and considering it done",
      "Filing a Form 8821 that overrides the 2848",
      "Waiting for the POA's automatic two-year expiration"
    ],
    "answer": 0,
    "explain": "WITHDRAW across the face, current signature and date, filed with the IRS (or a signed withdrawal statement listing the matters). POAs don't expire on a schedule — an unrevoked, unwithdrawn 2848 stays live on the CAF for years."
  },
  {
    "id": "rights-1",
    "section": "rights",
    "topic": "Taxpayer Bill of Rights",
    "difficulty": "easy",
    "q": "The Taxpayer Bill of Rights (Publication 1) includes the right to",
    "choices": [
      "Retain representation and pay only the correct amount of tax",
      "A free preparer supplied by the IRS on request",
      "Interest-free installment plans whenever requested",
      "Choose which examiner conducts their audit"
    ],
    "answer": 0,
    "explain": "Ten rights, codified in §7803: be informed, quality service, pay no more than correct, challenge and be heard, appeal, finality, privacy, confidentiality, representation, and a fair and just system. None of them supplies free preparers or agent-shopping."
  },
  {
    "id": "rights-2",
    "section": "rights",
    "topic": "Suspending the interview",
    "difficulty": "medium",
    "q": "Mid-interview, an unrepresented taxpayer says they want to consult a representative. The examiner must",
    "choices": [
      "Suspend the interview to let them obtain one",
      "Finish the current line of questions first",
      "Continue — the right existed only before it began",
      "Grant it only if a 2848 is already on file"
    ],
    "answer": 0,
    "explain": "Section 7521: clearly stating the wish to consult a practitioner suspends the interview, full stop. The IRS can force continued testimony only by summons — never by momentum."
  },
  {
    "id": "rights-3",
    "section": "rights",
    "topic": "Bypassing the rep",
    "difficulty": "medium",
    "q": "An examiner frustrated with a representative's pace may contact the client directly",
    "choices": [
      "Only with supervisor approval after documented rep delay",
      "Whenever a direct call seems faster to the examiner",
      "Never — the power of attorney forbids all direct contact",
      "After giving the representative ten days' notice"
    ],
    "answer": 0,
    "explain": "The bypass procedure exists but is guarded: documented delay or hindrance, management sign-off, written notice. A represented taxpayer otherwise deals with the IRS through the representative — that's what the POA means."
  },
  {
    "id": "rights-4",
    "section": "rights",
    "topic": "Recording interviews",
    "difficulty": "medium",
    "q": "A taxpayer who wants to record an IRS interview",
    "choices": [
      "May, with ten days' advance notice — and so may the IRS",
      "Has an absolute right to record on the spot",
      "May not record; only the IRS records interviews",
      "Needs a federal court order to record anything"
    ],
    "answer": 0,
    "explain": "Ten calendar days' advance notice, taxpayer's own equipment and expense. It cuts both ways: the IRS can record too, with notice and a copy available to the taxpayer on request."
  },
  {
    "id": "rights-5",
    "section": "rights",
    "topic": "§7525 privilege scope",
    "difficulty": "medium",
    "q": "The federally-authorized-practitioner privilege of §7525 covers",
    "choices": [
      "Tax advice in noncriminal matters before the IRS and in federal tax courts",
      "Everything an attorney-client privilege would cover, everywhere",
      "Return preparation workpapers",
      "State tax audits handled by an EA"
    ],
    "answer": 0,
    "explain": "It extends attorney-client-style confidentiality to EAs and CPAs — but only for tax advice, only in noncriminal proceedings before the IRS or federal courts, and never for written tax-shelter promotion — to anyone, not just corporations. Criminal cases and state matters fall outside it entirely."
  },
  {
    "id": "rights-6",
    "section": "rights",
    "topic": "Privilege vs preparation",
    "difficulty": "medium",
    "q": "Communications made to prepare a tax return are",
    "choices": [
      "Generally not privileged — preparation is meant for disclosure",
      "Generally privileged under §7525, like tax advice",
      "Privileged if marked confidential",
      "Privileged only for attorney preparers"
    ],
    "answer": 0,
    "explain": "Information gathered to put on a return is intended for the government's eyes, so courts hold it outside both attorney-client and §7525 privilege — for attorneys as much as EAs. Privilege attaches to advice, not compliance."
  },
  {
    "id": "rights-7",
    "section": "rights",
    "topic": "§7216 criminal rule",
    "difficulty": "medium",
    "q": "A preparer who knowingly discloses a client's return information to sell them an unrelated product commits",
    "choices": [
      "A §7216 misdemeanor, absent prior written consent",
      "Nothing — clients implicitly expect cross-selling",
      "A civil infraction with no criminal exposure",
      "A felony punishable by five years' imprisonment"
    ],
    "answer": 0,
    "explain": "Section 7216 criminalizes unauthorized disclosure or use of return information — up to a year and a fine per offense. The escape hatch is the client's advance written consent in the regulation's exact format; §6713 layers a civil per-violation penalty on top."
  },
  {
    "id": "rights-8",
    "section": "rights",
    "topic": "Consent timing",
    "difficulty": "medium",
    "q": "A valid §7216 consent must be",
    "choices": [
      "Signed before the disclosure or use it authorizes",
      "Obtained within 30 days after the disclosure",
      "Renewed with every e-filing",
      "Filed with the IRS for approval"
    ],
    "answer": 0,
    "explain": "Consent is prospective only — specific, informed, signed, and in the mandated format before anything moves. Retroactive blessing does not exist under the regulations."
  },
  {
    "id": "rights-9",
    "section": "rights",
    "topic": "TAS basics",
    "difficulty": "easy",
    "q": "The Taxpayer Advocate Service is",
    "choices": [
      "An independent IRS organization for hardship cases, via Form 911",
      "The IRS complaint department for rude agents",
      "A paid representation service for low-income filers",
      "The appeals function operating under a friendlier name"
    ],
    "answer": 0,
    "explain": "TAS is independent inside the IRS, free, and armed with Taxpayer Assistance Orders that can compel action. Form 911 opens a case when normal channels are causing significant hardship."
  },
  {
    "id": "rights-10",
    "section": "rights",
    "topic": "TAS criteria",
    "difficulty": "medium",
    "q": "TAS case acceptance typically requires",
    "choices": [
      "Significant hardship — imminent action, long delay, or real cost",
      "Any disagreement with an examination's outcome",
      "A pending petition already filed in Tax Court",
      "Household income under the federal poverty line"
    ],
    "answer": 0,
    "explain": "Economic harm, systemic delay beyond normal timeframes, or impending irreparable action are the doorways. Disagreement on the merits belongs in Appeals; TAS exists for when the process itself is doing damage."
  },
  {
    "id": "rights-11",
    "section": "rights",
    "topic": "§6103 confidentiality",
    "difficulty": "easy",
    "q": "Federal tax returns and return information are",
    "choices": [
      "Confidential by statute, with disclosure only under listed exceptions",
      "Public records after three years",
      "Available to any government agency on request",
      "Confidential only for individuals, not businesses"
    ],
    "answer": 0,
    "explain": "Section 6103 makes confidentiality the rule and enumerates every exception — state tax agencies, court orders, designated committees. Unauthorized disclosure by federal employees is itself actionable."
  },
  {
    "id": "rights-12",
    "section": "rights",
    "topic": "Getting transcripts",
    "difficulty": "medium",
    "q": "A representative with a CAF-recorded authorization pulls client transcripts through",
    "choices": [
      "The Transcript Delivery System via Tax Pro Account or e-Services",
      "A subpoena to the service center",
      "The client's own online account, with their password",
      "Form 4506 only, with a 75-day wait"
    ],
    "answer": 0,
    "explain": "TDS delivers return, account, and wage-and-income transcripts in minutes once authority is on the CAF. Transcripts mask full identifiers these days — enough to work a case, useless to an identity thief."
  },
  {
    "id": "rights-13",
    "section": "rights",
    "topic": "Identity theft",
    "difficulty": "medium",
    "q": "A client whose SSN was used on a fraudulent return should file",
    "choices": [
      "Form 14039 and obtain an Identity Protection PIN",
      "Form 911 and wait for TAS",
      "A police report only — the IRS handles the rest",
      "Nothing; the e-file reject fixes itself"
    ],
    "answer": 0,
    "explain": "Form 14039 opens the identity-theft case; the IP PIN — now available to anyone by opt-in — locks future filings. Once issued, the six-digit PIN is required on every return, and returns without it bounce."
  },
  {
    "id": "rights-14",
    "section": "rights",
    "topic": "Workpapers",
    "difficulty": "medium",
    "q": "An accountant's audit workpapers, under Supreme Court precedent, are",
    "choices": [
      "Not protected — there is no accountant work-product privilege",
      "Absolutely privileged like attorney files",
      "Protected under §7525 like tax advice itself",
      "Protected until the IRS shows fraud"
    ],
    "answer": 0,
    "explain": "Arthur Young: the independent accountant's workpapers serve public reliability, not client confidence, and must be produced on summons. Section 7525 came later and still doesn't reach them — it protects advice, not audit files."
  },
  {
    "id": "rights-15",
    "section": "rights",
    "topic": "Losing privilege",
    "difficulty": "medium",
    "q": "Privileged tax advice loses its protection when",
    "choices": [
      "The client passes it along to third parties outside the circle",
      "The practitioner who gave it retires from practice",
      "Three full years pass from the date of the advice",
      "The advice later proves to be incorrect"
    ],
    "answer": 0,
    "explain": "Privilege belongs to the client and survives time, retirement, and bad answers — but voluntary disclosure to outsiders waives it. Forwarding the advice memo to a business partner is how waiver usually happens."
  },
  {
    "id": "rights-16",
    "section": "rights",
    "topic": "Finality",
    "difficulty": "easy",
    "q": "The right to finality means a taxpayer is entitled to know",
    "choices": [
      "How long the IRS has to audit or collect, and when an audit is finished",
      "That no return will be examined twice in a lifetime",
      "The examiner's conclusions before the exam starts",
      "That assessments expire after one year"
    ],
    "answer": 0,
    "explain": "Finality is about clocks: maximum time to challenge, maximum time to audit, maximum time to collect, and clear notice when an exam closes. The limitation periods in this app's Time Limits section are that right, operationalized."
  },
  {
    "id": "rights-17",
    "section": "rights",
    "topic": "Escalation",
    "difficulty": "medium",
    "q": "A taxpayer dissatisfied with an examiner's conduct (not conclusions) may",
    "choices": [
      "Ask to speak with the examiner's manager",
      "Only file suit in district court",
      "Demand a different IRS district",
      "Refuse further participation without consequence"
    ],
    "answer": 0,
    "explain": "Quality-of-service complaints go up the supervisory chain first — and that request is a right, not a favor. Disagreements about the tax itself travel the separate exam-appeal track."
  },
  {
    "id": "rights-18",
    "section": "rights",
    "topic": "LITCs",
    "difficulty": "medium",
    "q": "Low Income Taxpayer Clinics are",
    "choices": [
      "Grant-funded but independent — free representation for eligible taxpayers",
      "IRS field offices staffed with reduced-fee preparers",
      "Available only to taxpayers already in Tax Court",
      "High-volume preparation mills for simple returns"
    ],
    "answer": 0,
    "explain": "LITCs live in law schools and legal-aid organizations, independent of the IRS despite the grant money, handling controversies — exams, collections, appeals — for taxpayers under income ceilings. They represent; they generally don't prepare."
  },
  {
    "id": "rights-19",
    "section": "rights",
    "topic": "Contractor disclosure",
    "difficulty": "medium",
    "q": "Before a preparer's overseas contractor can see U.S. client return information, the preparer needs",
    "choices": [
      "The client's specific written consent to the offshore disclosure",
      "Nothing — contractors stand in the preparer's shoes",
      "A copy of the contractor's local license",
      "An IRS-issued disclosure permit"
    ],
    "answer": 0,
    "explain": "The §7216 regulations treat disclosure to outside contractors — offshore ones especially — as consent-required, with the consent expressly flagging that the information goes outside the United States. Outsourcing without it is the criminal statute's textbook case."
  },
  {
    "id": "rights-20",
    "section": "rights",
    "topic": "Interviews without the taxpayer",
    "difficulty": "medium",
    "q": "With a Form 2848 on file, may a taxpayer skip an exam interview entirely?",
    "choices": [
      "Generally yes — the rep appears alone unless a summons issues",
      "No — personal attendance is always required at exams",
      "Yes, but only for correspondence examinations",
      "Only if medically excused in writing beforehand"
    ],
    "answer": 0,
    "explain": "Representation means the client can stay home; an administrative summons is the IRS's only tool to compel the taxpayer personally. Keeping chatty clients away from interviews is half the job."
  },
  {
    "id": "exam-1",
    "section": "exam",
    "topic": "Exam types",
    "difficulty": "easy",
    "q": "The three kinds of IRS examination are",
    "choices": [
      "Correspondence, office, and field",
      "Civil, criminal, and administrative",
      "Random, targeted, and voluntary",
      "Federal, state, and combined"
    ],
    "answer": 0,
    "explain": "Correspondence exams (by far the most common) work single issues by mail; office exams bring the taxpayer in; field exams send an agent out to the business. Complexity, not misconduct, drives which one you get."
  },
  {
    "id": "exam-2",
    "section": "exam",
    "topic": "Selection",
    "difficulty": "medium",
    "q": "Returns are most commonly selected for exam by",
    "choices": [
      "DIF scoring and document-matching, plus related-party pickups",
      "The examiner's personal judgment while browsing",
      "Alphabetical rotation through all filers",
      "Referrals from state tax agencies"
    ],
    "answer": 0,
    "explain": "The DIF computer scores returns against norms; AUR matches 1099s and W-2s; a partner's exam pulls in the partnership. NRP research audits add a small purely random slice — the exception that proves the rule."
  },
  {
    "id": "exam-3",
    "section": "exam",
    "topic": "IDRs and summonses",
    "difficulty": "medium",
    "q": "When a taxpayer ignores Information Document Requests, the examiner's escalation tool is",
    "choices": [
      "An administrative summons under §7602, enforceable in district court",
      "Immediate assessment of the proposed deficiency",
      "A subpoena issued by the Office of Chief Counsel",
      "Seizure of the records by field visit"
    ],
    "answer": 0,
    "explain": "IDRs are requests; the summons is compulsion, and a federal court can enforce it. Assessment still has to travel the deficiency route — silence slows an exam but doesn't skip due process."
  },
  {
    "id": "exam-4",
    "section": "exam",
    "topic": "30-day letter",
    "difficulty": "medium",
    "q": "The '30-day letter' at the end of an unagreed exam offers",
    "choices": [
      "Thirty days to request Appeals consideration of the proposed changes",
      "Thirty days to pay before liens are filed",
      "A final chance to petition the Tax Court",
      "An automatic extension of the filing deadline"
    ],
    "answer": 0,
    "explain": "It transmits the examination report and the appeal rights: protest to Appeals within 30 days, or let the case proceed to a statutory notice. Tax Court comes later — that's the 90-day letter's job."
  },
  {
    "id": "exam-5",
    "section": "exam",
    "topic": "90-day letter",
    "difficulty": "easy",
    "q": "A statutory notice of deficiency gives the taxpayer",
    "choices": [
      "90 days to petition the Tax Court — 150 if addressed abroad",
      "90 days to pay the deficiency in full",
      "30 days to reopen the examination file",
      "One year to amend the return in response"
    ],
    "answer": 0,
    "explain": "The SNOD is the ticket to Tax Court, the one forum that hears the case before payment. During the 90 (or 150) days — and any Tax Court case — assessment is barred. Miss the window and the deficiency is assessed."
  },
  {
    "id": "exam-6",
    "section": "exam",
    "topic": "Form 870",
    "difficulty": "medium",
    "q": "Signing Form 870 at the end of an exam",
    "choices": [
      "Permits immediate assessment, waiving the Tax Court route",
      "Ends all possibility of ever recovering the tax",
      "Extends the assessment statute by one full year",
      "Guarantees that no penalties will be added"
    ],
    "answer": 0,
    "explain": "The waiver lets the IRS assess without issuing a 90-day letter, giving up the prepayment forum — but a refund claim and refund suit remain possible after paying. Interest keeps running until paid, which is why some taxpayers sign and pay fast."
  },
  {
    "id": "exam-7",
    "section": "exam",
    "topic": "Repetitive audits",
    "difficulty": "medium",
    "q": "A taxpayer examined on the same items in either of the two prior years with no change can request",
    "choices": [
      "Discontinuance of the repetitive examination",
      "A permanent audit exemption",
      "Damages for harassment",
      "Transfer to a different region"
    ],
    "answer": 0,
    "explain": "The repetitive audit procedure covers individuals' same-issue, no-change (or minimal-change) history: raise it early and the exam should stand down. It's relief from repetition, not immunity going forward."
  },
  {
    "id": "exam-8",
    "section": "exam",
    "topic": "Audit reconsideration",
    "difficulty": "medium",
    "q": "A taxpayer who missed the exam entirely and got assessed can seek audit reconsideration by",
    "choices": [
      "Submitting new information the examiner never considered",
      "Filing a Tax Court petition late",
      "Paying 20% and demanding a redo",
      "Filing Form 911 with TAS"
    ],
    "answer": 0,
    "explain": "Reconsideration reopens an assessed exam when there's evidence the IRS hasn't seen — no form required, just the documentation and the request. Common after defaulted correspondence exams and substitute-for-return assessments."
  },
  {
    "id": "exam-9",
    "section": "exam",
    "topic": "Exam location",
    "difficulty": "medium",
    "q": "A field examination ordinarily takes place",
    "choices": [
      "Where the books and records are kept, with transfers negotiable",
      "At the nearest IRS campus, by default",
      "At the representative's office, as of right",
      "Anywhere the taxpayer unilaterally chooses"
    ],
    "answer": 0,
    "explain": "Field exams follow the records — usually the business location. Reasonable transfer requests (records moved, undue burden) are considered under the regulations; convenience is negotiated, not commanded, by either side."
  },
  {
    "id": "exam-10",
    "section": "exam",
    "topic": "Attendance",
    "difficulty": "medium",
    "q": "The only tool that compels a represented taxpayer's personal attendance at an exam is",
    "choices": [
      "An administrative summons",
      "A properly served Information Document Request",
      "A 30-day letter naming the taxpayer personally",
      "A bypass letter approved by a supervisor"
    ],
    "answer": 0,
    "explain": "IDRs are requests, and the bypass procedure targets a dilatory representative, not the taxpayer's attendance — only an administrative summons compels the taxpayer in person. Most practitioners prefer clients elsewhere; volunteered chatter expands exams."
  },
  {
    "id": "exam-11",
    "section": "exam",
    "topic": "Consents",
    "difficulty": "medium",
    "q": "Form 872 and Form 872-A both extend the assessment period; the difference is",
    "choices": [
      "872 runs to a fixed date; 872-A stays open until terminated",
      "872 is for individuals; 872-A for corporations",
      "872 needs a court order; 872-A does not",
      "872-A doubles the extension automatically"
    ],
    "answer": 0,
    "explain": "Fixed-date versus open-ended (ended via Form 872-T or assessment). Consents are voluntary — a taxpayer can refuse, negotiate scope, or restrict issues, though refusal usually buys an immediate statutory notice."
  },
  {
    "id": "exam-12",
    "section": "exam",
    "topic": "No-change",
    "difficulty": "easy",
    "q": "An exam that ends with the return accepted as filed produces",
    "choices": [
      "A no-change letter closing the examination",
      "A refund of the taxpayer's costs",
      "An automatic exemption from next year's exam",
      "Nothing in writing"
    ],
    "answer": 0,
    "explain": "The no-change letter is the closing document — worth keeping, since it feeds the repetitive-audit protection if the same issues come up within two years."
  },
  {
    "id": "exam-13",
    "section": "exam",
    "topic": "Fast track",
    "difficulty": "medium",
    "q": "Fast Track Settlement lets a small business taxpayer",
    "choices": [
      "Mediate with Appeals while the case is still in exam",
      "Skip the exam by paying a settlement percentage",
      "Take an unagreed case straight to district court",
      "Freeze interest accruals during the negotiations"
    ],
    "answer": 0,
    "explain": "An Appeals mediator joins while exam still owns the case, aiming to resolve it in weeks instead of the year a traditional protest takes. If it fails, every ordinary appeal right survives intact."
  },
  {
    "id": "exam-14",
    "section": "exam",
    "topic": "Correspondence exam reality",
    "difficulty": "medium",
    "q": "Correspondence examinations most often focus on",
    "choices": [
      "Credit and status documentation — EITC, dependents, filing status",
      "Complex partnership special allocations",
      "Randomly selected research audits of entire returns",
      "Contested estate and gift valuation disputes"
    ],
    "answer": 0,
    "explain": "Mail exams work single, documentable issues at scale. The practitioner's craft is assembling a complete, organized response the first time — half-answers recycle into deeper trouble."
  },
  {
    "id": "exam-15",
    "section": "exam",
    "topic": "Joint returns",
    "difficulty": "medium",
    "q": "When a joint return is examined,",
    "choices": [
      "Both spouses are liable, and either may participate",
      "Only the primary SSN holder is examined and liable",
      "Each spouse must undergo a separate examination",
      "The higher earner answers for both by default"
    ],
    "answer": 0,
    "explain": "Joint and several liability means the exam belongs to both — each may attend, each may have their own representative, and each may end up seeking innocent spouse relief if it sours."
  },
  {
    "id": "exam-16",
    "section": "exam",
    "topic": "Qualified amended returns",
    "difficulty": "medium",
    "q": "An amended return correcting an understatement avoids the accuracy penalty only if filed",
    "choices": [
      "Before the taxpayer is contacted for examination",
      "Within 90 days of the exam notice",
      "Any time before assessment",
      "With a reasonable-cause statement attached"
    ],
    "answer": 0,
    "explain": "A qualified amended return must beat the exam contact (and a few other trigger events). Amend after the letter arrives and the correction is just a concession — the penalty math runs on the original understatement."
  },
  {
    "id": "exam-17",
    "section": "exam",
    "topic": "Refusing consent",
    "difficulty": "medium",
    "q": "If a taxpayer declines to extend the assessment statute, the IRS will usually",
    "choices": [
      "Issue the statutory notice on its best available numbers",
      "Drop the examination as barred by time",
      "Ask a federal court to order an extension",
      "Assess immediately, skipping the required notice"
    ],
    "answer": 0,
    "explain": "The Service protects the statute: no consent means a protective SNOD, often less favorable than a finished exam would have been. Refusal is a right with a price — weigh it case by case."
  },
  {
    "id": "exam-18",
    "section": "exam",
    "topic": "Third-party summons",
    "difficulty": "medium",
    "q": "When the IRS summonses a taxpayer's bank for records, the taxpayer",
    "choices": [
      "Gets notice and may petition to quash in district court",
      "Learns of it only after compliance",
      "Can veto the summons by objecting to the bank",
      "Must personally deliver the records instead"
    ],
    "answer": 0,
    "explain": "Section 7609: notice to the taxpayer within three days of service, then 20 days to begin a quash proceeding. The summons pauses while the petition pends — the taxpayer's seat at a table they're not otherwise at."
  },
  {
    "id": "exam-19",
    "section": "exam",
    "topic": "Third-party contacts",
    "difficulty": "medium",
    "q": "Before contacting customers or suppliers about a taxpayer's liability, the IRS must generally",
    "choices": [
      "Give advance notice of intent to make third-party contacts",
      "Obtain the taxpayer's written consent",
      "Secure a summons for each contact",
      "Do nothing — third parties are fair game"
    ],
    "answer": 0,
    "explain": "Post-2019, the notice must specify a contact period (up to a year) and come at least 45 days ahead; a periodic list of contacts is available on request. Consent isn't required — notice is."
  },
  {
    "id": "exam-20",
    "section": "exam",
    "topic": "The unagreed path",
    "difficulty": "easy",
    "q": "The standard unagreed exam path runs",
    "choices": [
      "Exam report → 30-day letter → Appeals → 90-day letter → Tax Court",
      "Exam report → district court → Appeals",
      "30-day letter → collection → refund suit",
      "Straight from examiner to Tax Court"
    ],
    "answer": 0,
    "explain": "Report, protest window, Appeals conference, statutory notice, petition — each stop optional except the SNOD before Tax Court. Skipping Appeals is allowed (the SNOD can be requested), but Appeals settles most of what reaches it."
  },
  {
    "id": "collection-1",
    "section": "collection",
    "topic": "How collection starts",
    "difficulty": "easy",
    "q": "The collection process formally begins with",
    "choices": [
      "Assessment, then a notice and demand for payment",
      "A revenue officer's phone call",
      "The filing of a Notice of Federal Tax Lien",
      "A levy on the taxpayer's bank account"
    ],
    "answer": 0,
    "explain": "Assessment puts the liability on the books; the notice and demand (a CP14, typically) starts the clock. Liens and levies come later, each with their own required notices — collection is a sequence, and the sequence is testable."
  },
  {
    "id": "collection-2",
    "section": "collection",
    "topic": "Final notice",
    "difficulty": "medium",
    "q": "Before levying, the IRS must generally send",
    "choices": [
      "A Final Notice of Intent to Levy at least 30 days ahead, with hearing rights",
      "Three warning letters over 90 days",
      "A copy of the levy to the taxpayer's employer first",
      "Nothing — assessment alone authorizes levy"
    ],
    "answer": 0,
    "explain": "The final notice (LT11 or Letter 1058) opens a 30-day window to request a collection due process hearing before the levy lands. Exceptions are narrow: jeopardy, state refund offsets, and certain federal contractor levies, where the hearing comes after."
  },
  {
    "id": "collection-3",
    "section": "collection",
    "topic": "CDP request",
    "difficulty": "medium",
    "q": "A timely collection due process hearing is requested on",
    "choices": [
      "Form 12153, within 30 days of the levy or lien notice",
      "Form 911, within 60 days",
      "Form 843, any time before payment",
      "A Tax Court petition, within 90 days"
    ],
    "answer": 0,
    "explain": "Form 12153 within the 30 days: levy action pauses, the CSED tolls, and the resulting determination is reviewable in Tax Court. Miss the window and you're in equivalent-hearing territory — same conference, weaker rights."
  },
  {
    "id": "collection-4",
    "section": "collection",
    "topic": "Equivalent hearing",
    "difficulty": "medium",
    "q": "A CDP request filed after the 30-day deadline but within a year buys",
    "choices": [
      "An equivalent hearing — no levy suspension, no Tax Court review",
      "Everything a timely request would have",
      "Nothing at all",
      "An automatic installment agreement"
    ],
    "answer": 0,
    "explain": "Appeals will still hear the case, but the safeguards are gone: collection can proceed and the decision letter is final. The 30-day line is the difference between a right and a courtesy."
  },
  {
    "id": "collection-5",
    "section": "collection",
    "topic": "Lien mechanics",
    "difficulty": "medium",
    "q": "The federal tax lien arises",
    "choices": [
      "Automatically once assessment, demand, and nonpayment align",
      "Only when the NFTL is recorded at the courthouse",
      "When a revenue officer formally opens the case",
      "Ten days after the first missed installment payment"
    ],
    "answer": 0,
    "explain": "The 'secret lien' attaches to everything the taxpayer owns the moment those three events line up. The Notice of Federal Tax Lien filing is about priority against other creditors — and it triggers its own CDP rights."
  },
  {
    "id": "collection-6",
    "section": "collection",
    "topic": "Lien remedies",
    "difficulty": "medium",
    "q": "Withdrawal, release, discharge, and subordination of a lien are",
    "choices": [
      "Four distinct remedies — from erasing the notice to yielding priority",
      "Interchangeable names for a single form of relief",
      "All policy inventions — only release appears in the Code",
      "Available only once the debt is paid in full"
    ],
    "answer": 0,
    "explain": "Four tools, four jobs: withdrawal (as if never filed — direct-debit installment agreement users often qualify), release (paid or unenforceable), discharge (sell this house), subordination (refinance this mortgage). Matching remedy to situation is a staple Part 3 question."
  },
  {
    "id": "collection-7",
    "section": "collection",
    "topic": "Levy exemptions",
    "difficulty": "medium",
    "q": "Property exempt from levy by statute includes",
    "choices": [
      "Unemployment benefits, workers' comp, and a floor amount of wages",
      "All retirement accounts",
      "The taxpayer's automobile",
      "Anything owned jointly with a non-debtor spouse"
    ],
    "answer": 0,
    "explain": "Section 6334's list: unemployment and workers' comp, certain pension payments, child support, modest amounts of household goods and trade tools, and the wage exemption keyed to the standard deduction. Retirement accounts are leviable — reserved for flagrant cases, but reachable."
  },
  {
    "id": "collection-8",
    "section": "collection",
    "topic": "Bank levies",
    "difficulty": "medium",
    "q": "A bank served with a levy must",
    "choices": [
      "Hold the funds 21 days, then remit — one snapshot in time",
      "Send everything deposited over the following year",
      "Freeze the account permanently pending release",
      "Report every future deposit to the IRS"
    ],
    "answer": 0,
    "explain": "Bank levies capture only what's in the account at service, and the 21-day hold exists to give the taxpayer time to get it released. Next week's deposits are safe until a new levy issues."
  },
  {
    "id": "collection-9",
    "section": "collection",
    "topic": "Wage levies",
    "difficulty": "medium",
    "q": "Unlike a bank levy, a wage levy is",
    "choices": [
      "Continuous — it attaches every paycheck until released",
      "A one-time seizure of a single check",
      "Capped at 10% of gross pay",
      "Effective only for federal employees"
    ],
    "answer": 0,
    "explain": "Wage levies keep taking until released, satisfied, or expired, with only the exempt amount (from the employer's tables) reaching the taxpayer. The continuous-versus-snapshot contrast with bank levies is a classic exam pairing."
  },
  {
    "id": "collection-10",
    "section": "collection",
    "topic": "FPLP",
    "difficulty": "medium",
    "q": "Through the Federal Payment Levy Program, Social Security benefits can be levied",
    "choices": [
      "Continuously at 15%",
      "In full, like a bank account",
      "Never — they are absolutely exempt",
      "Only with a court judgment"
    ],
    "answer": 0,
    "explain": "The automated program takes 15% of each benefit payment. SSI and lump-sum death benefits are exempt; regular retirement and disability benefits are not — a distinction that surprises clients more than examiners."
  },
  {
    "id": "collection-11",
    "section": "collection",
    "topic": "Levy release",
    "difficulty": "medium",
    "q": "The IRS must release a levy when",
    "choices": [
      "Hardship results, the debt is paid or unenforceable, or a payment plan says so",
      "The taxpayer requests release in writing, for any reason",
      "Thirty days pass from the date of service",
      "The taxpayer files any petition in any court"
    ],
    "answer": 0,
    "explain": "Section 6343 lists the mandatory releases — hardship (leaving the taxpayer unable to meet basic living expenses) is the one practitioners invoke most, and it applies even with returns unfiled, per the courts. Release frees the property; the debt remains."
  },
  {
    "id": "collection-12",
    "section": "collection",
    "topic": "Retirement accounts",
    "difficulty": "medium",
    "q": "Under IRS policy, a taxpayer's retirement accounts are",
    "choices": [
      "Reachable, but reserved for flagrant conduct and after other assets",
      "Absolutely exempt from levy under §6334",
      "Levied automatically once balances top $50,000",
      "Leviable only for self-employment tax debts"
    ],
    "answer": 0,
    "explain": "No statutory exemption protects IRAs and 401(k)s; the IRM makes them a last resort requiring special approval and a flagrancy finding. 'The IRS can't touch my 401(k)' is client folklore, not law."
  },
  {
    "id": "collection-13",
    "section": "collection",
    "topic": "The home",
    "difficulty": "easy",
    "q": "Seizing a taxpayer's principal residence requires",
    "choices": [
      "Federal district court approval",
      "Only a supervisor's signature",
      "Nothing beyond the standard levy notice",
      "The taxpayer's consent"
    ],
    "answer": 0,
    "explain": "Principal residences get judicial protection: a court must approve, and policy pushes every alternative first. It happens — but rarely, and never as a surprise."
  },
  {
    "id": "collection-14",
    "section": "collection",
    "topic": "Passports",
    "difficulty": "medium",
    "q": "Certification of 'seriously delinquent tax debt' to the State Department can cost a taxpayer their passport once the debt (indexed) exceeds roughly",
    "choices": [
      "About $64,000, with liens or levies already in play",
      "$10,000 of any assessed tax",
      "$1 million in combined liabilities",
      "Any amount, once a levy issues"
    ],
    "answer": 0,
    "explain": "The §7345 threshold is indexed — $64,000 for 2025 and requires the debt be assessed, with a lien filed or levy made — and not in a CDP hearing, installment agreement, or offer posture. Resolving the debt triggers decertification."
  },
  {
    "id": "collection-15",
    "section": "collection",
    "topic": "Private collectors",
    "difficulty": "medium",
    "q": "Private collection agencies working IRS inventory",
    "choices": [
      "Handle inactive accounts, but payments still go only to the Treasury",
      "May levy and file liens like the IRS",
      "Keep a percentage of what they collect from the taxpayer's payment",
      "Handle every account under $25,000"
    ],
    "answer": 0,
    "explain": "PCAs get older, inactive receivables (with statutory carve-outs — low-income taxpayers, minors, exam cases). They can locate and request payment; enforcement stays federal, and every dollar is payable to the U.S. Treasury — anything else is a scam marker."
  },
  {
    "id": "collection-16",
    "section": "collection",
    "topic": "TFRP",
    "difficulty": "medium",
    "q": "The trust fund recovery penalty asserts",
    "choices": [
      "Personal liability for withheld taxes never paid over",
      "A 15% surcharge on late federal payroll deposits",
      "Corporate-level liability for unpaid income taxes",
      "Preparer liability for errors on payroll returns"
    ],
    "answer": 0,
    "explain": "Section 6672: responsibility (control over which bills get paid) plus willfulness (paying anyone else while withholding sits unpaid) equals personal liability for the trust fund portion. Letter 1153 starts a 60-day protest window before assessment."
  },
  {
    "id": "collection-17",
    "section": "collection",
    "topic": "CNC status",
    "difficulty": "medium",
    "q": "Currently-not-collectible status means",
    "choices": [
      "Collection pauses for hardship; the debt, interest, and offsets continue",
      "The liability is permanently written off the books",
      "The taxpayer becomes immune from lien filings",
      "All payments are suspended for exactly one year"
    ],
    "answer": 0,
    "explain": "CNC parks the account after a financial-statement showing (or for unlocatable taxpayers): no levies while it lasts, but the CSED keeps running, refunds keep getting offset, and an NFTL may still be filed. It's shelter, not forgiveness."
  },
  {
    "id": "collection-18",
    "section": "collection",
    "topic": "Third-party liability",
    "difficulty": "medium",
    "q": "When a taxpayer parks assets in a relative's name to dodge collection, the IRS can respond with",
    "choices": [
      "Nominee and transferee theories reaching the true owner in substance",
      "Nothing — legal title controls absolutely",
      "Criminal referral only, never civil collection",
      "Doubling the liability as an evasion penalty"
    ],
    "answer": 0,
    "explain": "Nominee liens, transferee assessments under §6901, and fraudulent-conveyance suits all pierce paper transfers. Retitling the boat to a brother-in-law is the fact pattern every collection exam question loves."
  },
  {
    "id": "collection-19",
    "section": "collection",
    "topic": "How long",
    "difficulty": "easy",
    "q": "A tax assessed in 2019, with no tolling events, becomes uncollectible in",
    "choices": [
      "2029",
      "2022",
      "2025",
      "Never — assessments do not expire"
    ],
    "answer": 0,
    "explain": "The CSED runs ten years from assessment — 2019 plus ten. Bankruptcy stays, pending offers and agreements, CDP hearings, and long absences abroad push it later, which is why real CSEDs need computing, not assuming."
  },
  {
    "id": "collection-20",
    "section": "collection",
    "topic": "Offsets",
    "difficulty": "medium",
    "q": "A taxpayer with an unpaid federal assessment who files next year's refund return will find the refund",
    "choices": [
      "Offset against the balance automatically, CNC status or not",
      "Paid in full — offsets need consent",
      "Held for 180 days, then paid",
      "Applied only if a levy is active"
    ],
    "answer": 0,
    "explain": "Refund offset under §6402 is automatic bookkeeping, not enforced collection — which is why it continues even in hardship status. State refunds are reachable too, through the state levy program."
  },
  {
    "id": "resolution-1",
    "section": "resolution",
    "topic": "Guaranteed IA",
    "difficulty": "easy",
    "q": "An individual owing $8,000 of income tax who can pay it within three years and has filed on time for five is entitled to",
    "choices": [
      "A guaranteed installment agreement — the IRS must accept",
      "Nothing — all agreements are discretionary",
      "An automatic offer in compromise",
      "A two-year collection holiday"
    ],
    "answer": 0,
    "explain": "Section 6159(c): income tax of $10,000 or less, full pay within three years, five years of clean compliance, no installment agreement in that window — acceptance is mandatory. It's the one agreement the IRS cannot refuse."
  },
  {
    "id": "resolution-2",
    "section": "resolution",
    "topic": "Streamlined IA",
    "difficulty": "medium",
    "q": "A streamlined installment agreement requires no financial statement when the balance is",
    "choices": [
      "$50,000 or less, payable within 72 months",
      "$100,000 or less, payable within 36 months",
      "$25,000 or less, payable within 24 months",
      "Any amount, if direct debit is used"
    ],
    "answer": 0,
    "explain": "Fifty thousand aggregate, 72 months (or the CSED if sooner), no Form 433 — often set up online in minutes. Above the line, the full financial disclosure machinery switches on."
  },
  {
    "id": "resolution-3",
    "section": "resolution",
    "topic": "User fees",
    "difficulty": "medium",
    "q": "Installment agreement user fees are lowest for",
    "choices": [
      "Online direct-debit applications, with low-income waivers",
      "Paper applications submitted with mailed checks",
      "Agreements negotiated through a revenue officer",
      "No one — a single flat fee applies to all"
    ],
    "answer": 0,
    "explain": "The fee schedule rewards automation: online direct-debit setups cost a fraction of paper ones, and low-income taxpayers get the fee waived or reimbursed. Small facts, but tested — and real money to clients."
  },
  {
    "id": "resolution-4",
    "section": "resolution",
    "topic": "Pending protection",
    "difficulty": "medium",
    "q": "While an installment agreement request is pending, the IRS",
    "choices": [
      "May not levy while it pends, after rejection, or on appeal",
      "Continues enforced collection exactly as usual",
      "May levy but may not file any new liens",
      "Must release every levy already served"
    ],
    "answer": 0,
    "explain": "Section 6331(k) suspends levies for pending IAs, 30 days post-rejection, and through appeal; the same shield covers pending OICs. Liens can still be filed — the shield stops seizures, not notices."
  },
  {
    "id": "resolution-5",
    "section": "resolution",
    "topic": "Default",
    "difficulty": "medium",
    "q": "Missing an installment payment or incurring a new unpaid liability leads to",
    "choices": [
      "A CP523 default notice with about 30 days to cure",
      "An immediate levy the following morning",
      "Automatic conversion to hardship status",
      "Cancellation of the original assessment"
    ],
    "answer": 0,
    "explain": "The default notice gives roughly 30 days to catch up or contest before the agreement terminates and enforcement resumes. Staying current on NEW taxes is a condition of every agreement — next April's balance due is the most common killer."
  },
  {
    "id": "resolution-6",
    "section": "resolution",
    "topic": "Direct debit tiers",
    "difficulty": "medium",
    "q": "For individual balances between $25,000 and $50,000, a streamlined agreement",
    "choices": [
      "Requires direct debit before the IRS will forgo a lien filing",
      "Is unavailable on any terms at that level",
      "Requires a 20% down payment up front",
      "Needs approval from the Appeals office"
    ],
    "answer": 0,
    "explain": "In that band the IRS wants the payment on autopilot before it forgoes lien filing. Below $25,000, ordinary payment methods suffice; above $50,000, streamlined treatment ends entirely."
  },
  {
    "id": "resolution-7",
    "section": "resolution",
    "topic": "OIC grounds",
    "difficulty": "easy",
    "q": "The three grounds for an offer in compromise are",
    "choices": [
      "Collectibility doubt, liability doubt, and effective tax administration",
      "Hardship, bankruptcy, and permanent disability",
      "Age, income level, and family size",
      "IRS error, IRS delay, and equitable estoppel"
    ],
    "answer": 0,
    "explain": "Can't pay it (collectibility), don't owe it (liability), or shouldn't have to in equity (ETA — exceptional circumstances despite ability to pay). Each ground has its own form path and evidence burden."
  },
  {
    "id": "resolution-8",
    "section": "resolution",
    "topic": "OIC mechanics",
    "difficulty": "medium",
    "q": "A doubt-as-to-collectibility offer is submitted with",
    "choices": [
      "Form 656, a Form 433 statement, a fee, and a first payment",
      "A hardship letter mailed to the local office",
      "Form 12153 with a request for a hearing",
      "Form 843 plus documentation of hardship"
    ],
    "answer": 0,
    "explain": "Form 656 plus 433-A(OIC) or 433-B(OIC), the fee (low-income taxpayers exempt), and the first money: 20% down on lump-sum offers, or the first installment on periodic offers — payments that continue while the IRS considers."
  },
  {
    "id": "resolution-9",
    "section": "resolution",
    "topic": "RCP",
    "difficulty": "medium",
    "q": "The IRS measures an acceptable collectibility offer against reasonable collection potential, meaning",
    "choices": [
      "Equity in assets plus a multiple of monthly future income",
      "Exactly half of the assessed balance due",
      "The taxpayer's opening bid plus ten percent",
      "The prior year's adjusted gross income"
    ],
    "answer": 0,
    "explain": "RCP = what the assets would net, plus future income — 12 months' worth for lump-sum offers, 24 for periodic. Offers at or above RCP get traction; sentimental numbers do not."
  },
  {
    "id": "resolution-10",
    "section": "resolution",
    "topic": "Deemed acceptance",
    "difficulty": "medium",
    "q": "An offer in compromise the IRS fails to decide within two years is",
    "choices": [
      "Deemed accepted by statute",
      "Deemed rejected with appeal rights",
      "Returned without prejudice",
      "Escalated automatically to Appeals"
    ],
    "answer": 0,
    "explain": "Section 7122(f): two years from submission (excluding time the liability is in dispute in court; withdrawal or return simply ends the offer), silence equals acceptance. Rare in practice — the Service watches this clock — but a favorite exam fact."
  },
  {
    "id": "resolution-11",
    "section": "resolution",
    "topic": "OIC eligibility",
    "difficulty": "medium",
    "q": "An offer in compromise will be returned unprocessed if the taxpayer",
    "choices": [
      "Has unfiled required returns or is in an open bankruptcy",
      "Owes more than $100,000",
      "Has ever had a prior offer rejected",
      "Is currently under exam for any year"
    ],
    "answer": 0,
    "explain": "Filing compliance first, and bankruptcy's automatic stay routes everything through that court instead. Returned means no appeal — unlike rejection, which carries 30-day appeal rights."
  },
  {
    "id": "resolution-12",
    "section": "resolution",
    "topic": "After acceptance",
    "difficulty": "medium",
    "q": "An accepted offer in compromise obligates the taxpayer to",
    "choices": [
      "Five years of filing and payment compliance, or the debt revives",
      "Nothing further once the offer amount is paid",
      "Annual financial reviews for the next ten years",
      "Permanent waiver of every future refund"
    ],
    "answer": 0,
    "explain": "The five-year compliance clause is the offer's tail: default it and the compromised liability (less payments) revives. Fresh starts are conditional — that's the deal."
  },
  {
    "id": "resolution-13",
    "section": "resolution",
    "topic": "Rejected offers",
    "difficulty": "medium",
    "q": "A rejected offer in compromise can be",
    "choices": [
      "Appealed within 30 days on Form 13711",
      "Refiled only after five years",
      "Taken directly to district court",
      "Converted automatically to an installment agreement"
    ],
    "answer": 0,
    "explain": "Thirty days to Appeals, where independent review sometimes finds numbers exam-level personnel wouldn't. Rejection also isn't a bar to a new, better-supported offer at any time."
  },
  {
    "id": "resolution-14",
    "section": "resolution",
    "topic": "Returned vs rejected",
    "difficulty": "medium",
    "q": "The difference between a returned offer and a rejected offer is",
    "choices": [
      "Returns are processability bounces with no appeal; rejections carry one",
      "Purely the wording of the two letters",
      "Returned offers refund the application fee twice",
      "A rejection forever bars another offer"
    ],
    "answer": 0,
    "explain": "Returns are administrative bounces — missing returns, missing payments, bankruptcy — with no path to Appeals; fix the defect and resubmit. Rejections are merits decisions with a 30-day appeal window."
  },
  {
    "id": "resolution-15",
    "section": "resolution",
    "topic": "CNC is not forgiveness",
    "difficulty": "easy",
    "q": "Currently-not-collectible status is granted after",
    "choices": [
      "Financials showing income can't cover necessary living expenses",
      "A simple phone request citing general hardship",
      "Three consecutive missed installment payments",
      "A bankruptcy filing under any chapter"
    ],
    "answer": 0,
    "explain": "Hardship CNC rides on Form 433 financials showing collection would leave the taxpayer unable to meet basic living expenses (unlocatable accounts get shelved too). It stops levies, not time: interest accrues, refunds offset, and the CSED keeps running toward expiration."
  },
  {
    "id": "resolution-16",
    "section": "resolution",
    "topic": "PPIA",
    "difficulty": "medium",
    "q": "A partial payment installment agreement",
    "choices": [
      "Pays less than the full debt before the CSED, with biennial reviews",
      "Is another name for the streamlined agreement",
      "Requires the approval of the Appeals office",
      "Waives every accrued penalty automatically"
    ],
    "answer": 0,
    "explain": "PPIAs formalize what the math already says: the CSED will arrive before full payment. Full financial disclosure going in, re-reviews every two years, and the unpaid remainder expires with the statute."
  },
  {
    "id": "resolution-17",
    "section": "resolution",
    "topic": "FTP during an IA",
    "difficulty": "medium",
    "q": "While an installment agreement is in effect (return timely filed), the failure-to-pay penalty accrues at",
    "choices": [
      "0.25% per month instead of 0.5%",
      "The usual 0.5% per month",
      "1% per month",
      "Zero — penalties stop entirely"
    ],
    "answer": 0,
    "explain": "The IA halves the monthly FTP rate; interest, though, keeps compounding daily at the full rate. Nothing in an installment agreement stops interest — a distinction clients chronically miss."
  },
  {
    "id": "resolution-18",
    "section": "resolution",
    "topic": "Who must be accepted",
    "difficulty": "medium",
    "q": "The IRS is REQUIRED to accept",
    "choices": [
      "Only agreements passing the §6159(c) small-balance tests",
      "Any offer exceeding half of the debt",
      "Any agreement proposed through a practitioner",
      "Streamlined agreements, as a matter of statute"
    ],
    "answer": 0,
    "explain": "Only the guaranteed IA is mandatory. Streamlined agreements are near-automatic as a matter of policy, not right; offers are always judgment calls measured against RCP."
  },
  {
    "id": "resolution-19",
    "section": "resolution",
    "topic": "Lien-filing threshold",
    "difficulty": "medium",
    "q": "Under current policy, the IRS generally does not file a Notice of Federal Tax Lien on balances under",
    "choices": [
      "$10,000",
      "$1,000",
      "$50,000",
      "It always files"
    ],
    "answer": 0,
    "explain": "The Fresh Start threshold: NFTLs generally start at $10,000 (with exceptions for jeopardy and repeat behavior), and direct-debit streamlined agreements can avoid or withdraw them even higher. Policy, not statute — but tested as such."
  },
  {
    "id": "resolution-20",
    "section": "resolution",
    "topic": "Rep tools",
    "difficulty": "medium",
    "q": "A representative with a CAF authorization can set up a client's payment plan",
    "choices": [
      "Online through Tax Pro Account, within the streamlined limits",
      "Only by certified mail",
      "Only by visiting a Taxpayer Assistance Center",
      "Not at all — clients must apply personally"
    ],
    "answer": 0,
    "explain": "Tax Pro Account now handles IA origination for authorized reps — terms, direct debit, the works — inside streamlined limits. Bigger or messier cases still go through ACS or a revenue officer."
  },
  {
    "id": "appeal-1",
    "section": "appeal",
    "topic": "What Appeals is",
    "difficulty": "easy",
    "q": "The IRS Independent Office of Appeals settles cases based on",
    "choices": [
      "The hazards of litigation — what each side might lose in court",
      "Splitting every difference down the middle",
      "Strict application of the examiner's position",
      "The taxpayer's ability to pay"
    ],
    "answer": 0,
    "explain": "Appeals weighs how the issues would fare before a judge and settles accordingly — percentages of issues, trades across issues. Its independence from exam and collection was codified by the Taxpayer First Act."
  },
  {
    "id": "appeal-2",
    "section": "appeal",
    "topic": "Protest thresholds",
    "difficulty": "medium",
    "q": "A formal written protest to Appeals is required when the total disputed amount for any period exceeds",
    "choices": [
      "$25,000 — below that, a simple small case request works",
      "$10,000",
      "$50,000",
      "Any amount — protests are always formal"
    ],
    "answer": 0,
    "explain": "Twenty-five thousand is the line between the full protest (facts, law, argument, penalties-of-perjury declaration) and the short-form small case request. Getting the format right is the practitioner's first Appeals task."
  },
  {
    "id": "appeal-3",
    "section": "appeal",
    "topic": "Protest contents",
    "difficulty": "medium",
    "q": "A formal protest must include, among other things,",
    "choices": [
      "The disputed items, facts and law, and a perjury statement",
      "A filing fee and three conformed copies",
      "Payment of the undisputed portion of the tax",
      "An opening settlement offer stated in dollars"
    ],
    "answer": 0,
    "explain": "Identification of the taxpayer and letter, the items disputed, a statement of facts (under penalties of perjury), and the law relied upon. It's a brief in miniature — and sloppy protests forfeit credibility before the conference starts."
  },
  {
    "id": "appeal-4",
    "section": "appeal",
    "topic": "Ex parte",
    "difficulty": "medium",
    "q": "After a case reaches Appeals, the appeals officer and the examiner",
    "choices": [
      "May not discuss substance without offering the taxpayer a seat",
      "Meet privately to align on case strategy",
      "Exchange settlement authority back and forth freely",
      "May not communicate even about the file transfer"
    ],
    "answer": 0,
    "explain": "The ex parte rules protect Appeals' independence: substantive discussion with exam or collection requires the taxpayer's chance to participate. Ministerial file logistics are fine; strategy sessions are not."
  },
  {
    "id": "appeal-5",
    "section": "appeal",
    "topic": "Tax Court basics",
    "difficulty": "easy",
    "q": "The Tax Court's defining feature among the trial forums is",
    "choices": [
      "Hearing the case before the deficiency is paid",
      "Jury trials on demand",
      "Sitting only in Washington, D.C.",
      "Binding the IRS but not the taxpayer"
    ],
    "answer": 0,
    "explain": "Petition within 90 days of the SNOD and the tax stays unassessed until decision — the only prepayment forum. It rides circuit to major cities, judges only, no juries."
  },
  {
    "id": "appeal-6",
    "section": "appeal",
    "topic": "S cases",
    "difficulty": "medium",
    "q": "The Tax Court's small case (S) procedure is available when the disputed amount per year is",
    "choices": [
      "$50,000 or less per year, with no appeal afterward",
      "$25,000 or less per disputed year",
      "$100,000 or less across all years",
      "Any amount, if both parties consent"
    ],
    "answer": 0,
    "explain": "S cases trade formality for finality: relaxed evidence, faster calendars, and a decision neither side can appeal or cite as precedent. The election is the taxpayer's, made on the petition."
  },
  {
    "id": "appeal-7",
    "section": "appeal",
    "topic": "Appealing decisions",
    "difficulty": "medium",
    "q": "A regular Tax Court decision is appealable to",
    "choices": [
      "The U.S. court of appeals for the taxpayer's circuit",
      "The U.S. Supreme Court directly",
      "Federal district court",
      "The Independent Office of Appeals"
    ],
    "answer": 0,
    "explain": "Regular cases go up to the geographic circuit (and the Tax Court follows that circuit's precedent for similarly appealable cases — the Golsen rule). S-case decisions, by contrast, stop where they are."
  },
  {
    "id": "appeal-8",
    "section": "appeal",
    "topic": "Refund litigation",
    "difficulty": "medium",
    "q": "To sue for refund in district court or the Court of Federal Claims, a taxpayer must first",
    "choices": [
      "Pay the tax in full and file a timely refund claim",
      "Obtain Appeals' written consent",
      "Petition the Tax Court and lose",
      "Post a bond for double the amount"
    ],
    "answer": 0,
    "explain": "Full payment (Flora), then an administrative claim, then suit — no earlier than six months after the claim (unless denied sooner) and within two years of a disallowance notice. It's the pay-first mirror image of the Tax Court route."
  },
  {
    "id": "appeal-9",
    "section": "appeal",
    "topic": "Choosing the forum",
    "difficulty": "medium",
    "q": "A taxpayer who wants a jury trial on a tax dispute must be in",
    "choices": [
      "A federal district court",
      "The United States Tax Court",
      "The Court of Federal Claims",
      "The circuit court of appeals"
    ],
    "answer": 0,
    "explain": "District court offers juries but demands full payment first; the Court of Federal Claims is judges only; the Tax Court is prepayment but bench-only. Forum choice is strategy — precedent, payment posture, and juries all differ."
  },
  {
    "id": "appeal-10",
    "section": "appeal",
    "topic": "Tax Court practitioners",
    "difficulty": "medium",
    "q": "An enrolled agent may represent clients in the Tax Court",
    "choices": [
      "Only after passing the Tax Court's own admission examination",
      "Automatically — the EA credential includes it",
      "Never — only attorneys may appear",
      "By filing a special entry of appearance per case"
    ],
    "answer": 0,
    "explain": "Tax Court admission is separate: attorneys are admitted on credentials, everyone else through the court's nonattorney examination. An EA's IRS practice rights stop at the courthouse door — heavily tested."
  },
  {
    "id": "appeal-11",
    "section": "appeal",
    "topic": "CDP review",
    "difficulty": "medium",
    "q": "A collection due process determination the taxpayer disagrees with is reviewed by",
    "choices": [
      "The Tax Court, on petition within 30 days",
      "Federal district court, on complaint",
      "The revenue officer's territory manager",
      "No one — CDP determinations are final"
    ],
    "answer": 0,
    "explain": "Timely CDP cases end in a notice of determination, and the Tax Court reviews it — 30 days to petition, an abuse-of-discretion standard on collection alternatives. Equivalent hearings get no such review."
  },
  {
    "id": "appeal-12",
    "section": "appeal",
    "topic": "Conference format",
    "difficulty": "easy",
    "q": "Appeals conferences today are held",
    "choices": [
      "By phone, video, or in person, at the taxpayer's preference",
      "In person only, at an IRS campus",
      "Exclusively through written submissions",
      "By phone, video, or in person, at the appeals officer's choosing"
    ],
    "answer": 0,
    "explain": "Most conferences run by phone or video; in-person remains available on request. Informality is the point — no transcript, no rules of evidence, just a negotiation with a settler who has real authority."
  },
  {
    "id": "appeal-13",
    "section": "appeal",
    "topic": "Burden of proof",
    "difficulty": "medium",
    "q": "In Tax Court, the burden of proof on a factual issue shifts to the IRS when the taxpayer",
    "choices": [
      "Offers credible evidence and has substantiated and cooperated",
      "Merely files the petition before the deadline",
      "Shows any reasonable doubt about the notice",
      "Deposits half the deficiency in escrow"
    ],
    "answer": 0,
    "explain": "Section 7491's shift is earned: credible evidence plus substantiation, recordkeeping, and cooperation. In practice records win cases regardless of who technically bears the burden — but the exam tests the elements."
  },
  {
    "id": "appeal-14",
    "section": "appeal",
    "topic": "SNOD options",
    "difficulty": "medium",
    "q": "A taxpayer holding a 90-day letter may",
    "choices": [
      "Petition Tax Court, agree and pay, or pay and claim a refund",
      "Only petition the court or default entirely",
      "Demand the case be returned to Appeals",
      "Request an extension of the 90-day window"
    ],
    "answer": 0,
    "explain": "Three doors: the prepayment petition, agreement, or the pay-claim-sue route. The 90 days is jurisdictional and unextendable — although a late petitioner can still litigate through refund procedures after paying."
  },
  {
    "id": "appeal-15",
    "section": "appeal",
    "topic": "Defaulting the notice",
    "difficulty": "easy",
    "q": "Ignoring a statutory notice of deficiency results in",
    "choices": [
      "Assessment after 90 days, followed by collection",
      "Automatic Appeals review",
      "A second, final notice",
      "Dismissal of the deficiency"
    ],
    "answer": 0,
    "explain": "The SNOD ripens into assessment when the petition window closes, and the case moves from deficiency procedure to collection notices. The prepayment forum, once forfeited, doesn't return."
  },
  {
    "id": "appeal-16",
    "section": "appeal",
    "topic": "Post-Appeals mediation",
    "difficulty": "medium",
    "q": "When an Appeals conference deadlocks on facts, the parties may try",
    "choices": [
      "Post-Appeals mediation, with a fresh appeals officer as neutral",
      "Binding arbitration conducted by the examiner",
      "A second protest to the same appeals officer",
      "Referral to the Taxpayer Advocate Service as a neutral arbiter"
    ],
    "answer": 0,
    "explain": "Mediation adds a trained neutral while both sides keep their positions; it suits valuation and factual disputes. Nonbinding — if it fails, litigation remains, and nothing said in mediation transfers."
  },
  {
    "id": "appeal-17",
    "section": "appeal",
    "topic": "Innocent spouse",
    "difficulty": "medium",
    "q": "Relief from joint liability under §6015(b) or (c) must be requested",
    "choices": [
      "Within two years of the first collection activity against the requesting spouse",
      "Within 90 days of the filing of the joint return itself",
      "Before the couple's divorce decree becomes final",
      "Within ten years of the assessment of the joint liability"
    ],
    "answer": 0,
    "explain": "The two-year clock runs from collection activity, not the return; equitable relief under (f) reaches as far as the collection or refund statute. Form 8857 starts it, the other spouse gets notified, and Tax Court review is available."
  },
  {
    "id": "appeal-18",
    "section": "appeal",
    "topic": "Injured vs innocent",
    "difficulty": "medium",
    "q": "A spouse whose share of a joint refund was seized for the OTHER spouse's old student loan files",
    "choices": [
      "Form 8379, injured spouse — allocating the refund",
      "Form 8857, innocent spouse — escaping the liability",
      "Form 12153, requesting a CDP hearing",
      "Form 843, claiming an abatement"
    ],
    "answer": 0,
    "explain": "Injured spouse recovers your share of a refund taken for their debt; innocent spouse relieves you of liability on their understatement. Two forms, two problems — the exam swaps them constantly."
  },
  {
    "id": "appeal-19",
    "section": "appeal",
    "topic": "Closing agreements",
    "difficulty": "medium",
    "q": "A closing agreement under §7121 is",
    "choices": [
      "Final and binding on both sides absent fraud or misrepresentation",
      "An informal settlement either side may reopen",
      "Valid only for one tax year",
      "A prerequisite to any Appeals conference"
    ],
    "answer": 0,
    "explain": "Forms 866 and 906 buy true finality — reopening requires fraud, malfeasance, or misrepresentation of material fact. Used for repeating issues, sensitive valuations, and anywhere certainty is worth its price."
  },
  {
    "id": "appeal-20",
    "section": "appeal",
    "topic": "Frivolous conduct",
    "difficulty": "medium",
    "q": "Pressing frivolous positions can cost a taxpayer",
    "choices": [
      "A $5,000 submission penalty, plus court sanctions up to $25,000",
      "Nothing worse than losing the case itself",
      "Automatic referral for criminal prosecution",
      "Loss of future appeal rights, nothing more"
    ],
    "answer": 0,
    "explain": "Section 6702 prices frivolous returns and submissions at $5,000 each; §6673 lets the Tax Court add up to $25,000 for maintaining frivolous proceedings — and practitioners who advance them answer to OPR and can be liable for excess costs personally."
  },
  {
    "id": "penalties-1",
    "section": "penalties",
    "topic": "FTF vs FTP",
    "difficulty": "easy",
    "q": "The failure-to-file and failure-to-pay penalties run, respectively,",
    "choices": [
      "5% and 0.5% of the unpaid tax per month, each capped at 25%",
      "10% and 1% per month, uncapped",
      "5% and 5% per month, capped at 50%",
      "A flat $500 and $50"
    ],
    "answer": 0,
    "explain": "Filing late is ten times worse than paying late — which is why the first advice is always 'file even if you can't pay.' In a month both apply, the FTF drops to 4.5% so the pair totals 5%."
  },
  {
    "id": "penalties-2",
    "section": "penalties",
    "topic": "Minimum FTF",
    "difficulty": "medium",
    "q": "A return filed more than 60 days late carries a minimum failure-to-file penalty of",
    "choices": [
      "The lesser of the unpaid tax or an indexed floor (about $510)",
      "Exactly $100, a figure fixed by statute",
      "5% of the total tax shown, paid or not",
      "Nothing, when the balance is under $1,000"
    ],
    "answer": 0,
    "explain": "The 60-day floor is indexed (roughly $510 in 2025) — but it's capped at 100% of the unpaid tax, so a fully-paid or refund return still owes no FTF. Filing late with a refund costs nothing except a dormant statute of limitations."
  },
  {
    "id": "penalties-3",
    "section": "penalties",
    "topic": "FTP rate changes",
    "difficulty": "medium",
    "q": "The failure-to-pay rate, normally 0.5% monthly, doubles to 1% once",
    "choices": [
      "The account reaches levy notice or jeopardy territory",
      "The taxpayer files an automatic extension",
      "A notice of federal tax lien is recorded",
      "The balance remains unpaid into a second year"
    ],
    "answer": 0,
    "explain": "The 0.5% base bends both ways: half-rate while an IA is honored (timely-filed returns), double after the final levy notice period or jeopardy demand. Same penalty, three speeds."
  },
  {
    "id": "penalties-4",
    "section": "penalties",
    "topic": "Refund returns",
    "difficulty": "medium",
    "q": "A taxpayer due a refund who files two years late owes",
    "choices": [
      "No FTF or FTP — both are percentages of unpaid tax, here zero",
      "The minimum failure-to-file penalty only",
      "Interest on the refund, payable back to the IRS",
      "A flat late-filing surcharge of $135"
    ],
    "answer": 0,
    "explain": "Percentages of zero are zero, minimum penalty included. The real costs of late refund returns are elsewhere: the refund statute (three years) can expire, and the assessment clock never started."
  },
  {
    "id": "penalties-5",
    "section": "penalties",
    "topic": "Accuracy penalty",
    "difficulty": "medium",
    "q": "The 20% accuracy-related penalty applies to underpayments from",
    "choices": [
      "Negligence or a substantial understatement of income tax",
      "Any math error on a return",
      "Late payment of a correct liability",
      "Filing a paper return when e-file was required"
    ],
    "answer": 0,
    "explain": "Section 6662's usual doors: negligence (no reasonable attempt at compliance) and substantial understatement — for individuals, more than the greater of 10% of the correct tax or $5,000. Reasonable cause and good faith is the standing defense."
  },
  {
    "id": "penalties-6",
    "section": "penalties",
    "topic": "Civil fraud",
    "difficulty": "medium",
    "q": "The civil fraud penalty is",
    "choices": [
      "75% of the fraud portion, with the burden on the IRS to prove it",
      "50% of the total tax shown on the return",
      "25%, doubled for any repeat offender",
      "A criminal fine rather than a civil penalty"
    ],
    "answer": 0,
    "explain": "Seventy-five percent on the fraud portion, and uniquely, the government must prove fraud by clear and convincing evidence. Civil fraud and criminal evasion can run on the same facts — acquittal on one doesn't bar the other."
  },
  {
    "id": "penalties-7",
    "section": "penalties",
    "topic": "Reasonable cause",
    "difficulty": "medium",
    "q": "The reasonable-cause defense to penalties requires showing",
    "choices": [
      "Ordinary business care and prudence, yet compliance still failed",
      "A balance due under the $10,000 threshold",
      "No penalties assessed in any earlier year",
      "Reliance on any preparer, however chosen"
    ],
    "answer": 0,
    "explain": "Facts and circumstances: serious illness, disaster, unavoidable records loss, or genuine reliance on competent advice after full disclosure. 'My preparer did it' works only when choosing and informing the preparer was itself prudent."
  },
  {
    "id": "penalties-8",
    "section": "penalties",
    "topic": "First-time abatement",
    "difficulty": "easy",
    "q": "First-time abatement waives FTF, FTP, or deposit penalties for a taxpayer with",
    "choices": [
      "Three clean prior years and current filing compliance",
      "Any documented hardship story in writing",
      "A balance below five thousand dollars",
      "A practitioner's request — no criteria apply"
    ],
    "answer": 0,
    "explain": "FTA is administrative and nearly automatic: three clean prior years, required returns filed, current taxes paid or arranged. Ask for it by name before spending reasonable cause — it needs no excuse at all."
  },
  {
    "id": "penalties-9",
    "section": "penalties",
    "topic": "Estimated tax",
    "difficulty": "medium",
    "q": "Individuals avoid the estimated tax penalty by prepaying at least",
    "choices": [
      "90% of this year, or 100% of last year (110% at high AGI)",
      "50% of the current year, paid in any pattern",
      "The prior year's tax, always, at any income",
      "Nothing — the penalty applies only to corporations"
    ],
    "answer": 0,
    "explain": "The safe harbors: 90% current, or 100% of prior-year tax (110% when prior-year AGI topped $150,000), paid evenly through withholding or timely installments. Withholding counts as paid evenly all year — the classic year-end rescue."
  },
  {
    "id": "penalties-10",
    "section": "penalties",
    "topic": "Interest",
    "difficulty": "medium",
    "q": "Interest on underpayments",
    "choices": [
      "Runs at the short-term rate plus 3%, compounding daily",
      "Stops the day a payment plan is approved",
      "Accrues as simple interest at a flat 6%",
      "Can be waived for reasonable cause, like penalties"
    ],
    "answer": 0,
    "explain": "Interest is the cost of money, not punishment — so reasonable cause doesn't touch it. Abatement exists only narrowly, mainly for unreasonable IRS error or delay under §6404. It compounds daily until the last dollar posts."
  },
  {
    "id": "penalties-11",
    "section": "penalties",
    "topic": "§6694 preparer penalty",
    "difficulty": "medium",
    "q": "A preparer who takes an unreasonable position causing an understatement faces",
    "choices": [
      "The greater of $1,000 or half the fee — more if willful",
      "A flat $250 for each affected return",
      "Loss of the PTIN upon a first offense",
      "Nothing, unless the client is penalized too"
    ],
    "answer": 0,
    "explain": "Section 6694(a) prices unreasonable positions; (b) escalates for willful understatement or reckless disregard. The conduct standards mirror §10.34 — substantial authority undisclosed, reasonable basis disclosed — so Circular 230 and the penalty rise and fall together."
  },
  {
    "id": "penalties-12",
    "section": "penalties",
    "topic": "§6695 conduct set",
    "difficulty": "medium",
    "q": "The per-failure preparer penalties of §6695 — indexed to about $60 each — cover",
    "choices": [
      "No signature, no PTIN, no copy, no list, touched refund checks",
      "Only violations of the e-file mandate",
      "Substantive errors in computing the tax",
      "False or misleading fee advertising"
    ],
    "answer": 0,
    "explain": "The mechanical duties: sign the return, show the PTIN, furnish a copy, retain a copy or list for three years, never touch the refund check. Each failure is separately penalized, with annual caps in the low five figures per failure type."
  },
  {
    "id": "penalties-13",
    "section": "penalties",
    "topic": "Due diligence",
    "difficulty": "medium",
    "q": "The §6695(g) due-diligence penalty — an indexed amount in the $600s per failure — attaches to returns claiming",
    "choices": [
      "EITC, CTC/ACTC/ODC, AOTC, or head-of-household status",
      "Any refund over $5,000",
      "Itemized deductions above the standard deduction",
      "Foreign tax credits"
    ],
    "answer": 0,
    "explain": "Four credits/statuses, Form 8867, the knowledge requirement, and the four-part recordkeeping duty — per credit, per return. One sloppy EITC-plus-CTC-plus-HoH return can stack three penalties at once."
  },
  {
    "id": "penalties-14",
    "section": "penalties",
    "topic": "Aiding and abetting",
    "difficulty": "medium",
    "q": "The §6701 penalty for aiding and abetting an understatement reaches",
    "choices": [
      "Any knowing assister — no signature, preparation, or fee required",
      "Only the preparer who signed the return",
      "Only those first convicted criminally",
      "Each assister once per lifetime, at most"
    ],
    "answer": 0,
    "explain": "No preparation, signature, or fee required — knowing assistance is enough, which reaches bookkeepers, appraisers, and advisors. One penalty per person per period, and it can accompany OPR referral."
  },
  {
    "id": "penalties-15",
    "section": "penalties",
    "topic": "Promoter penalties",
    "difficulty": "medium",
    "q": "Promoting an abusive tax shelter under §6700 draws",
    "choices": [
      "A penalty keyed to the promoter's income, plus possible injunction",
      "Loss of the promoter's PTIN and nothing else",
      "A warning letter for any first offense",
      "Penalties against the investors alone"
    ],
    "answer": 0,
    "explain": "Promoters face §6700 penalties and §7408 injunctions; the investors separately face accuracy penalties on their own returns. False-statement promotions are priced at half the promoter's gross income from the activity."
  },
  {
    "id": "penalties-16",
    "section": "penalties",
    "topic": "Frivolous returns",
    "difficulty": "medium",
    "q": "Filing a return that asserts a position on the IRS's frivolous-positions list costs",
    "choices": [
      "$5,000 under §6702, on top of every other applicable penalty",
      "$500, credited against future tax",
      "Nothing, if the return is otherwise complete",
      "Immediate criminal prosecution"
    ],
    "answer": 0,
    "explain": "The $5,000 applies per document — amended returns and certain hearing requests included — and stacks with accuracy or fraud penalties. For CDP and similar hearing requests, a statutory 30-day withdrawal window is the escape hatch; for returns, the IRS by practice allows 30 days to file a corrected return before asserting it."
  },
  {
    "id": "penalties-17",
    "section": "penalties",
    "topic": "TFRP as penalty",
    "difficulty": "medium",
    "q": "The trust fund recovery penalty equals",
    "choices": [
      "100% of the withheld income and employment taxes not paid over",
      "25% of the employer's total payroll",
      "Double the unpaid employer share of FICA",
      "$10,000 per responsible person"
    ],
    "answer": 0,
    "explain": "It's a collection device dressed as a penalty: the trust fund portion (withheld income tax and the employee FICA half), assessed personally against each responsible person. The IRS collects it once, but can assert it against several people at once."
  },
  {
    "id": "penalties-18",
    "section": "penalties",
    "topic": "Information returns",
    "difficulty": "medium",
    "q": "Late or incorrect 1099s draw penalties that",
    "choices": [
      "Tier by lateness, with intentional disregard uncapped",
      "Run a flat $50 per form regardless of timing",
      "Apply only to paper-filed forms",
      "Begin only after 250 forms are late"
    ],
    "answer": 0,
    "explain": "The §6721/6722 tiers reward speed: indexed per-form amounts step up at 30 days and August 1, with separate penalties for the filing and the payee copy. Intentional disregard removes the annual cap entirely."
  },
  {
    "id": "penalties-19",
    "section": "penalties",
    "topic": "Requesting abatement",
    "difficulty": "easy",
    "q": "Penalty abatement is typically requested by",
    "choices": [
      "A reasonable-cause letter or Form 843, with appeal rights",
      "An immediate suit filed in district court",
      "Withholding payment until the IRS relents",
      "Filing a fresh return without the penalty"
    ],
    "answer": 0,
    "explain": "Ask in writing — phone works for FTA — then appeal a denial through the penalty appeal process. Paying first isn't required for the request, though refund-claim routes exist after payment too."
  },
  {
    "id": "penalties-20",
    "section": "penalties",
    "topic": "Burden for fraud",
    "difficulty": "easy",
    "q": "To sustain the civil fraud penalty, the IRS must prove fraud",
    "choices": [
      "By clear and convincing evidence",
      "Beyond a reasonable doubt",
      "By a bare preponderance",
      "Not at all — assessments are presumed correct"
    ],
    "answer": 0,
    "explain": "The usual presumption of correctness flips for fraud: the government carries a clear-and-convincing burden. Beyond a reasonable doubt belongs to criminal evasion — one notch higher still."
  },
  {
    "id": "filing-1",
    "section": "filing",
    "topic": "E-file mandate",
    "difficulty": "easy",
    "q": "A preparer must e-file if they reasonably expect to file, in a year,",
    "choices": [
      "More than 10 covered individual and trust returns",
      "More than 100 returns of any kind",
      "Any returns at all — paper is abolished",
      "More than 25 business returns"
    ],
    "answer": 0,
    "explain": "Eleven or more covered returns triggers the specified-preparer mandate. Clients can still choose paper individually (their choice, documented), and hardship waivers exist for the preparer on Form 8944."
  },
  {
    "id": "filing-2",
    "section": "filing",
    "topic": "ERO duties",
    "difficulty": "medium",
    "q": "An Electronic Return Originator must",
    "choices": [
      "Transmit timely, never stockpile, keep 8879s three years",
      "Guarantee every refund within 21 days",
      "Review each client's three prior returns",
      "File only from a commercial office location"
    ],
    "answer": 0,
    "explain": "The ERO handbook (Pub 1345) rules: prompt transmission, no stockpiling before or after signatures, Form 8879 retention for three years from the return due date or receipt date. EFIN suitability keeps it honest."
  },
  {
    "id": "filing-3",
    "section": "filing",
    "topic": "Form 8879",
    "difficulty": "medium",
    "q": "Form 8879, the e-file signature authorization,",
    "choices": [
      "Is signed after the client's review and kept in the ERO's file",
      "Goes to the IRS along with each transmission",
      "Replaces the client's need to see the return",
      "Must be notarized for refunds over $10,000"
    ],
    "answer": 0,
    "explain": "The taxpayer reviews the return, signs the 8879 authorizing the PIN, and the ERO retains it — producing it on request. Transmitting before the signature exists is a program violation, not a shortcut."
  },
  {
    "id": "filing-4",
    "section": "filing",
    "topic": "Rejects",
    "difficulty": "medium",
    "q": "An e-filed return rejected on the deadline is still timely if",
    "choices": [
      "Retransmitted and accepted within the perfection period",
      "Refiled within 30 days, with a penalty attached",
      "The error traces to the software vendor",
      "The taxpayer swears to the original attempt"
    ],
    "answer": 0,
    "explain": "The perfection window (5 days for rejected individual e-files; 10 to mail a paper return with the reject explanation) preserves timeliness. Practitioners who transmit at 11:58 p.m. on April 15 live by this rule."
  },
  {
    "id": "filing-5",
    "section": "filing",
    "topic": "EFIN hygiene",
    "difficulty": "medium",
    "q": "An Electronic Filing Identification Number is",
    "choices": [
      "Firm-specific and non-transferable, with changes reported",
      "A personal number any employee may reuse elsewhere",
      "Purchasable from a retiring practitioner's firm",
      "Simply another name for the PTIN"
    ],
    "answer": 0,
    "explain": "EFINs attach to the firm after suitability screening; selling, sharing, or borrowing one is a program violation the IRS actively polices (compromised EFINs drive refund fraud). PTINs identify preparers; EFINs identify transmitters."
  },
  {
    "id": "filing-6",
    "section": "filing",
    "topic": "Signing as preparer",
    "difficulty": "medium",
    "q": "The signing preparer on a return is",
    "choices": [
      "The person with primary responsibility for its overall accuracy",
      "Whoever physically keyed the data entry",
      "The firm's most senior partner, always",
      "Optional whenever software prepares the forms"
    ],
    "answer": 0,
    "explain": "Primary responsibility, not keystrokes, determines the signature — with the PTIN shown, and penalties per unsigned return. 'Ghost preparers' who take fees but leave the signature blank are a §6695 and enforcement priority."
  },
  {
    "id": "filing-7",
    "section": "filing",
    "topic": "Signature methods",
    "difficulty": "medium",
    "q": "Taxpayers sign e-filed 1040s using",
    "choices": [
      "The self-select or practitioner PIN methods, documented by the 8879",
      "A scanned image of a wet-ink signature page",
      "Their preparer tax identification number",
      "A recorded voiceprint kept on file with the IRS"
    ],
    "answer": 0,
    "explain": "PIN signatures carry e-filing: self-select (taxpayer enters shared secrets) or the practitioner PIN method riding on the signed 8879. The preparer's own signature can be software-generated; the taxpayer's authorization cannot be skipped."
  },
  {
    "id": "filing-8",
    "section": "filing",
    "topic": "WISP",
    "difficulty": "easy",
    "q": "Every professional tax practice is required to maintain",
    "choices": [
      "A written information security plan under the Safeguards Rule",
      "A surety bond insuring against client data loss",
      "An IRS-approved encryption vendor contract",
      "Nothing formal below five hundred clients"
    ],
    "answer": 0,
    "explain": "The Safeguards Rule reaches tax preparers as financial institutions: a written plan, a designated security lead, risk assessment, MFA, and vendor oversight. Pub 4557 and the joint 'Security Six' are the IRS's own checklist."
  },
  {
    "id": "filing-9",
    "section": "filing",
    "topic": "Breach response",
    "difficulty": "medium",
    "q": "On discovering client data theft, a preparer should immediately",
    "choices": [
      "Contact the IRS Stakeholder Liaison and the state tax agencies",
      "Wait to confirm actual harm before telling anyone",
      "Notify only the clients whose refunds were stolen",
      "Delete the compromised systems to stop the spread"
    ],
    "answer": 0,
    "explain": "Speed limits the fraud: the Stakeholder Liaison alerts IRS filters within days, states get notified, and the FTC rule now requires reporting larger breaches. Destroying evidence and waiting are the two classic mistakes."
  },
  {
    "id": "filing-10",
    "section": "filing",
    "topic": "Using data to sell",
    "difficulty": "medium",
    "q": "Using return information to market a client an investment product requires",
    "choices": [
      "The client's prior written §7216 consent in the prescribed format",
      "Nothing — the client relationship implies consent",
      "A note in the engagement letter's fine print",
      "Disclosure to the IRS on the return"
    ],
    "answer": 0,
    "explain": "Use — not just disclosure — of return information beyond preparation needs formatted, specific, advance consent. Buried boilerplate fails the format rules; the statute behind it is criminal."
  },
  {
    "id": "filing-11",
    "section": "filing",
    "topic": "Refund products",
    "difficulty": "medium",
    "q": "Refund anticipation products (advances, transfers) offered through a preparer require",
    "choices": [
      "Specific consents and fee disclosures before the client signs up",
      "Nothing special — they are bank products",
      "IRS pre-approval of each product",
      "A minimum refund of $2,000"
    ],
    "answer": 0,
    "explain": "Bank-product data sharing runs on §7216 consents, with fees disclosed and the client's alternative (free direct deposit) made clear. The preparer still may never control or deposit the refund itself."
  },
  {
    "id": "filing-12",
    "section": "filing",
    "topic": "Direct deposit limits",
    "difficulty": "easy",
    "q": "The IRS will direct-deposit refunds into a single bank account",
    "choices": [
      "No more than three times per year — further refunds convert to paper checks",
      "Without any numeric limit",
      "Only for refunds under $10,000 — larger ones arrive as checks",
      "Twice, then never again"
    ],
    "answer": 0,
    "explain": "The three-deposit cap fights preparer fraud funneling many refunds into one account. Legitimate households (adult children, shared accounts) hit it occasionally — refund four arrives as a check."
  },
  {
    "id": "filing-13",
    "section": "filing",
    "topic": "Preparer's own account",
    "difficulty": "medium",
    "q": "Directing any part of a client's refund into an account the preparer controls is",
    "choices": [
      "Prohibited outright — a per-check penalty and a conduct violation",
      "Acceptable with the client's written consent",
      "Fine for fees up to ten percent of the refund",
      "Allowed through a law firm trust account only"
    ],
    "answer": 0,
    "explain": "No consent cures it: refunds go to the taxpayer, period. Fee collection happens by invoice or a compliant bank product with its own disclosures — never by rerouting Treasury money."
  },
  {
    "id": "filing-14",
    "section": "filing",
    "topic": "Copies and lists",
    "difficulty": "medium",
    "q": "Under §6107, a preparer must retain",
    "choices": [
      "A copy of each return, or a client list, for three years",
      "Original client documents for seven years",
      "Nothing, once the client receives a copy",
      "Digital copies only, on encrypted media"
    ],
    "answer": 0,
    "explain": "Copy-or-list, three years after the return period ends — plus furnishing the client their copy no later than signing. Original documents belong to the client and go back under Circular 230 §10.28."
  },
  {
    "id": "filing-15",
    "section": "filing",
    "topic": "Provider roles",
    "difficulty": "medium",
    "q": "In IRS e-file, the ERO, transmitter, and software developer are",
    "choices": [
      "Distinct authorized-provider roles — one firm may hold several",
      "Interchangeable labels for the same function",
      "Ranked tiers of the same license",
      "Roles reserved for national franchises"
    ],
    "answer": 0,
    "explain": "The ERO originates, the transmitter moves data to the IRS, developers build the software, intermediate providers process in between. Each role carries its own rules; a small firm is often ERO and nothing else, riding its software vendor's transmission."
  },
  {
    "id": "filing-16",
    "section": "filing",
    "topic": "IP PIN",
    "difficulty": "medium",
    "q": "The Identity Protection PIN is",
    "choices": [
      "A six-digit opt-in number required on the return once issued",
      "Assigned only to prior identity-theft victims",
      "The same six digits reused every filing season",
      "Optional to include even after issuance"
    ],
    "answer": 0,
    "explain": "Nationwide opt-in since 2021, a fresh six digits each year, and mandatory once active. Preparers should ask about it at intake — a forgotten IP PIN is among the most common January e-file rejects."
  },
  {
    "id": "filing-17",
    "section": "filing",
    "topic": "Paper opt-out",
    "difficulty": "medium",
    "q": "When a mandated preparer's client insists on paper filing, the preparer",
    "choices": [
      "Attaches Form 8948, keeping the client's signed choice on file",
      "Must decline or withdraw from the engagement",
      "E-files anyway — the mandate overrides the client",
      "Faces a penalty regardless of documentation"
    ],
    "answer": 0,
    "explain": "The client's documented choice is a recognized exception: their signed statement stays in the file, Form 8948 rides with the paper return. Form 8944 covers the different case of preparer hardship waivers."
  },
  {
    "id": "filing-18",
    "section": "filing",
    "topic": "MFA",
    "difficulty": "medium",
    "q": "Multi-factor authentication on tax software and client portals is",
    "choices": [
      "Required under the amended FTC Safeguards Rule, not optional",
      "A recommended best practice with no mandate",
      "Required only for cloud-hosted software",
      "Required only above 5,000 client records"
    ],
    "answer": 0,
    "explain": "The amended rule makes MFA baseline for access to customer information systems, and IRS security guidance treats it as non-negotiable. The 5,000-record figure only exempts the smallest firms from certain written-plan elements — breach reporting to the FTC starts at 500 affected consumers, within 30 days, and MFA applies regardless."
  },
  {
    "id": "filing-19",
    "section": "filing",
    "topic": "Ghost preparers",
    "difficulty": "easy",
    "q": "A 'ghost preparer' is someone who",
    "choices": [
      "Paid to prepare, but leaves the signature block blank",
      "Files final returns for deceased taxpayers",
      "Works only during the filing season rush",
      "Prepares returns without using software"
    ],
    "answer": 0,
    "explain": "Paid but unsigned: the return looks self-prepared while the fee changed hands. Every §6695 mechanical penalty is in play, and it's a leading consumer-fraud marker the IRS tells taxpayers to flee."
  },
  {
    "id": "filing-20",
    "section": "filing",
    "topic": "Extensions",
    "difficulty": "easy",
    "q": "Form 4868 extends",
    "choices": [
      "The time to file — not the time to pay",
      "Both filing and payment by six months",
      "Payment only",
      "The statute of limitations on refunds"
    ],
    "answer": 0,
    "explain": "Six more months to file; interest and the failure-to-pay penalty run on any unpaid balance from the original due date. Estimating and paying with the extension is what keeps the penalty clock quiet."
  },
  {
    "id": "clock-1",
    "section": "clock",
    "topic": "Assessment basics",
    "difficulty": "easy",
    "q": "The IRS ordinarily may assess additional tax within",
    "choices": [
      "3 years from the later of the due date or actual filing",
      "3 years from the close of the tax year itself",
      "5 years from the original due date, always",
      "1 year from the return's processing date"
    ],
    "answer": 0,
    "explain": "Three years, measured from filing or the due date, whichever is later — so early returns are deemed filed on the due date, and late returns start the clock only when they actually arrive."
  },
  {
    "id": "clock-2",
    "section": "clock",
    "topic": "Six-year rule",
    "difficulty": "medium",
    "q": "The assessment period stretches to six years when the return",
    "choices": [
      "Omits over 25% of gross income, or $5,000+ of foreign income",
      "Claims any refundable credit at all",
      "Was filed under an automatic extension",
      "Reports a net operating loss carryover"
    ],
    "answer": 0,
    "explain": "Substantial omissions buy the IRS double time — and an overstated basis counts as an omission for this purpose by statute. The foreign-asset trigger needs only $5,000, a much lower bar."
  },
  {
    "id": "clock-3",
    "section": "clock",
    "topic": "No limit",
    "difficulty": "easy",
    "q": "No assessment statute ever starts running when",
    "choices": [
      "The return is fraudulent, or none was ever filed",
      "The taxpayer relocates outside the country",
      "The balance at issue exceeds $1 million",
      "The return arrives on paper instead of e-file"
    ],
    "answer": 0,
    "explain": "Fraud and non-filing leave the year open forever — one more reason filing a non-fraudulent return, even late and unpayable, is always step one. A substitute for return prepared by the IRS does NOT start the clock; only the taxpayer's own return does."
  },
  {
    "id": "clock-4",
    "section": "clock",
    "topic": "Collection statute",
    "difficulty": "easy",
    "q": "Once assessed, tax is collectible for",
    "choices": [
      "10 years from the assessment date",
      "10 years from the return's due date",
      "6 years from the first notice",
      "As long as a lien stays refiled"
    ],
    "answer": 0,
    "explain": "The CSED runs from assessment — a 2026 audit assessment for tax year 2022 is collectible into 2036. Liens expire with the CSED; refiling preserves priority, not the debt."
  },
  {
    "id": "clock-5",
    "section": "clock",
    "topic": "CSED tolling",
    "difficulty": "medium",
    "q": "Events that suspend the 10-year collection clock include",
    "choices": [
      "Bankruptcy, pending offers, CDP hearings, and absences abroad",
      "Filing an amended return for the year",
      "Entering currently-not-collectible status",
      "Making any partial payment on the debt"
    ],
    "answer": 0,
    "explain": "Whenever the IRS legally cannot levy, the clock usually stops — bankruptcy's stay (plus six months), offer and agreement pendency, CDP proceedings, six-plus-month absences abroad. CNC, notably, does NOT toll it — hardship time is real time."
  },
  {
    "id": "clock-6",
    "section": "clock",
    "topic": "Refund claims",
    "difficulty": "medium",
    "q": "A refund claim is timely if filed within",
    "choices": [
      "3 years from filing or 2 years from payment, whichever is later",
      "1 year from discovering the overpayment",
      "5 years from the return's original due date",
      "No deadline — refund claims never expire"
    ],
    "answer": 0,
    "explain": "The 3-year/2-year rule sets the deadline; the matching lookback rules cap the dollars — a claim within the 3-year window reaches payments made in the prior 3 years plus any extension period. Withholding is deemed paid on April 15."
  },
  {
    "id": "clock-7",
    "section": "clock",
    "topic": "Unfiled-return refunds",
    "difficulty": "medium",
    "q": "A non-filer due a refund loses it permanently unless the return is filed within",
    "choices": [
      "3 years of the original due date (plus any extension)",
      "18 months of the due date",
      "10 years, like collections",
      "There is no deadline for refunds of withholding"
    ],
    "answer": 0,
    "explain": "Withholding and estimates are deemed paid on the due date; the lookback reaches them for three years. This is the 'IRS announces $1 billion in unclaimed refunds' deadline that arrives every spring."
  },
  {
    "id": "clock-8",
    "section": "clock",
    "topic": "Seven-year items",
    "difficulty": "medium",
    "q": "The special seven-year claim period applies to refunds arising from",
    "choices": [
      "Bad debts and worthless securities",
      "Casualty losses",
      "Foreign tax credits",
      "Net operating losses"
    ],
    "answer": 0,
    "explain": "Worthlessness is hard to pin to a year, so §6511(d) grants seven years to claim it. Foreign tax credits get ten years; NOL claims key off the loss year's own timeline — each special item has its own clock."
  },
  {
    "id": "clock-9",
    "section": "clock",
    "topic": "Late amendments",
    "difficulty": "medium",
    "q": "An amended return showing extra tax, filed within 60 days of the assessment deadline, gives the IRS",
    "choices": [
      "60 days from receipt to assess that additional amount",
      "No extra time — the original date controls",
      "A fresh three-year period",
      "Six months of automatic extension"
    ],
    "answer": 0,
    "explain": "Section 6501(c)(7) prevents the deathbed amendment trick: the Service gets 60 days to assess what the amendment itself reports. The rest of the year's statute doesn't reopen — only the disclosed increase is reachable."
  },
  {
    "id": "clock-10",
    "section": "clock",
    "topic": "Early and late filing",
    "difficulty": "medium",
    "q": "A return filed February 10 starts its assessment period on",
    "choices": [
      "April 15 — early returns are deemed filed on the due date",
      "February 10, the actual date of filing",
      "January 1 of the year the return was filed",
      "The date the refund check is issued"
    ],
    "answer": 0,
    "explain": "Early filing doesn't buy an earlier statute; §6501(b) deems it filed on the last day prescribed. File a day late, though, and the actual date controls — the asymmetry runs in the government's favor."
  },
  {
    "id": "clock-11",
    "section": "clock",
    "topic": "Extensions and the ASED",
    "difficulty": "medium",
    "q": "A return extended to October 15 and filed August 1 starts the assessment clock on",
    "choices": [
      "August 1 — actual filing controls once past the original due date",
      "April 15, the original unextended due date",
      "October 15, the extended filing deadline",
      "January 1 of the following calendar year"
    ],
    "answer": 0,
    "explain": "The deemed-filing rule uses the ORIGINAL due date; anything filed after it runs from actual filing. Extensions move the filing deadline and the FTF penalty — they don't backdate the statute."
  },
  {
    "id": "clock-12",
    "section": "clock",
    "topic": "Payroll returns",
    "difficulty": "medium",
    "q": "For quarterly employment tax returns, the assessment period is measured",
    "choices": [
      "From April 15 of the next year — all quarters deemed filed then",
      "From each individual quarter's own due date",
      "From December 31 of the year of the payroll",
      "From the date of the first payroll deposit"
    ],
    "answer": 0,
    "explain": "Section 6501(b)(2) consolidates the quarters: timely 941s for a year are all deemed filed April 15 next year, giving one clean statute date per year of payroll."
  },
  {
    "id": "clock-13",
    "section": "clock",
    "topic": "TFRP deadline",
    "difficulty": "medium",
    "q": "The trust fund recovery penalty must be assessed against a responsible person within",
    "choices": [
      "3 years from the payroll returns' April 15 deemed-filing date",
      "10 years, matching the collection statute",
      "1 year from the company's first default",
      "Never — the TFRP carries no time limit"
    ],
    "answer": 0,
    "explain": "The TFRP borrows the payroll returns' statute — three years from that consolidated April 15 date. Letter 1153 must beat it, and voluntarily extending (Form 2750) is a decision to make deliberately, not reflexively."
  },
  {
    "id": "clock-14",
    "section": "clock",
    "topic": "Financial disability",
    "difficulty": "medium",
    "q": "The refund claim period is suspended while a taxpayer is",
    "choices": [
      "Financially disabled, with no one authorized to act for them",
      "Unemployed for longer than a full year",
      "Living outside the United States briefly",
      "Paying under an installment agreement"
    ],
    "answer": 0,
    "explain": "Section 6511(h) tolls the refund clock for medically documented incapacity — but only if no one (spouse, guardian, POA holder) could act. It rescues refunds for the seriously ill; it has no assessment-side twin."
  },
  {
    "id": "clock-15",
    "section": "clock",
    "topic": "Consents again",
    "difficulty": "medium",
    "q": "Signing a Form 872 consent",
    "choices": [
      "Extends assessment to the agreed date — and the refund window with it",
      "Waives the taxpayer's right to any later refund",
      "Restarts the ten-year collection statute",
      "Cannot be limited to particular issues"
    ],
    "answer": 0,
    "explain": "The mirror rule of §6511(c): extending assessment time extends refund-claim time six months past the consent's expiration. Consents are negotiable — scope-restricted consents limiting the open issues are standard practice."
  },
  {
    "id": "clock-16",
    "section": "clock",
    "topic": "Suing on a claim",
    "difficulty": "medium",
    "q": "After a refund claim is formally disallowed, suit must be filed within",
    "choices": [
      "2 years of the disallowance notice — extendable on Form 907",
      "90 days, like a Tax Court petition",
      "1 year of the original claim",
      "Any time, once the claim was timely"
    ],
    "answer": 0,
    "explain": "Section 6532: two years from the notice of disallowance (waivable start via Form 2297, extendable by agreement on Form 907). And no suit may start until six months pass or the claim is denied, whichever is first."
  },
  {
    "id": "clock-17",
    "section": "clock",
    "topic": "Recordkeeping",
    "difficulty": "easy",
    "q": "The baseline record-retention advice for supporting documents is",
    "choices": [
      "3 years generally; longer for payroll, basis, and special items",
      "1 year after the refund check arrives",
      "10 years across the board",
      "Forever, for every supporting document"
    ],
    "answer": 0,
    "explain": "Match the records to the open statute: three years generally, four for employment taxes, six where big omissions are conceivable, and basis records for as long as you own the asset plus three. 'Keep everything forever' is advice, not law."
  },
  {
    "id": "clock-18",
    "section": "clock",
    "topic": "SFR effect",
    "difficulty": "medium",
    "q": "When the IRS prepares a substitute for return for a non-filer, the assessment statute",
    "choices": [
      "Still never starts — only the taxpayer's own return begins the period",
      "Starts on the SFR's completion date",
      "Starts on the original due date retroactively",
      "Is fixed at six years"
    ],
    "answer": 0,
    "explain": "Section 6020(b) returns let the IRS assess and collect, but they are not 'returns' for §6501 — the year stays open forever until the taxpayer files. Filing after an SFR also converts and caps things favorably; never advise staying silent."
  },
  {
    "id": "clock-19",
    "section": "clock",
    "topic": "SNOD suspension",
    "difficulty": "medium",
    "q": "Issuing a statutory notice of deficiency",
    "choices": [
      "Pauses assessment for the 90 days plus 60 more",
      "Has no effect on any limitation period",
      "Ends the assessment period immediately",
      "Restarts the three-year clock from zero"
    ],
    "answer": 0,
    "explain": "The prohibited-assessment window (90 or 150 days, plus the entire Tax Court case if petitioned) doesn't count against the IRS: the statute pauses and adds 60 days after the suspension lifts. Deficiency procedure and the ASED interlock precisely."
  },
  {
    "id": "clock-20",
    "section": "clock",
    "topic": "Timely mailing",
    "difficulty": "easy",
    "q": "Under the timely-mailing rule of §7502,",
    "choices": [
      "A document postmarked by the deadline is timely, even arriving later",
      "Only actual delivery by the deadline counts",
      "Private delivery couriers never qualify",
      "The rule covers payments but not returns"
    ],
    "answer": 0,
    "explain": "Timely mailed is timely filed: the postmark controls, registered/certified mail is prima facie proof, IRS-designated private delivery services qualify, and an e-file acceptance timestamp does the same job. Weekends and holidays roll deadlines forward under §7503."
  }
];
