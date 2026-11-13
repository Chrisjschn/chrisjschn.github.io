# REG Blitz — CPA Exam Regulation Quick Quiz

Sister app to [FAR Blitz](../cpa-far-quiz/) for the CPA Exam's **REG
(Regulation)** section. Identical engine and features — quick quizzes, Daily
Challenge, Blitz 60, weak-spot drilling, XP with a career ladder (Undrafted
Rookie → MVP → Hall of Famer), streaks with freezes, a Trophy Room, offline
PWA — with a question bank built against the AICPA REG blueprint:

**Area I — Ethics, Professional Responsibilities & Federal Tax Procedures**
Circular 230 and preparer duties · IRS examinations, appeals, statutes and
taxpayer penalties

**Area II — Business Law**
Contracts and UCC Article 2 · agency and employment · debtor–creditor
(secured transactions, suretyship, bankruptcy) · entity choice and federal
securities regulation

**Area III — Federal Taxation of Property Transactions**
Basis, holding period and cost recovery · dispositions, character and
nonrecognition

**Area IV — Federal Taxation of Individuals**
Gross income · adjustments, deductions and QBI · credits, AMT and filing
status · loss limitations

**Area V — Federal Taxation of Entities**
C corporations · partnerships and S corporations · estates, trusts, gift tax
and exempt organizations

## Run

```bash
cd cpa-reg-quiz
python3 -m http.server 8083   # or just open index.html
```

Deployed to GitHub Pages at `/reg/` alongside the other apps (see
`.github/workflows/deploy-pages.yml`). Progress is stored separately
(`regblitz.v1` in localStorage), so all games can live on one phone.

The engine (`app.js`) is a copy of FAR Blitz's with REG branding — the
`FAR_SECTIONS`/`FAR_QUESTIONS` global names are kept so the engine and test
harness stay identical across apps. See the FAR Blitz README for the question
format and the iOS wrapper playbook.

The accent is royal blue (`#2457d5`; burnt orange until 13 Nov 2026). Green is deliberately *not* used: it
would collide with `--good` (`#15803d`), the correct-answer colour in the quiz
view.
