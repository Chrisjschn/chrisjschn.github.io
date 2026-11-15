# REG Blitz — CPA Exam Regulation Quick Quiz

Sister app to [FAR Blitz](../cpa-far-quiz/) for the CPA Exam's **REG
(Regulation)** section. Identical engine and features — quick quizzes, Daily
Challenge, Blitz 60, weak-spot drilling, XP with a career ladder (Undrafted
Rookie → MVP → Hall of Famer), streaks with freezes, a Trophy Room, offline
PWA — with a question bank of 240 items in 17 sections built against the
2026/2027 AICPA REG blueprint (realigned 15 Nov 2026; the subjects that moved
to the TCP discipline in 2024 are archived in `store/reg/bank/tcp-scope-removed.json`):

**Area I — Ethics, Professional Responsibilities & Federal Tax Procedures**
Circular 230 and preparer duties · state boards and legal liability · IRS
examinations, appeals, statutes, authority and taxpayer penalties

**Area II — Business Law**
Contracts and UCC Article 2 · agency, employment taxes and federal regulation
(ACA, FCPA) · debtor–creditor (secured transactions, suretyship, bankruptcy) ·
business structures

**Area III — Federal Taxation of Property Transactions**
Basis, holding period and cost recovery · capital gains and losses, including
digital assets

**Area IV — Federal Taxation of Individuals**
Gross income and K-1 reporting · adjustments, deductions and QBI · credits,
filing status and other taxes · loss limitations

**Area V — Federal Taxation of Entities**
Book-tax differences · C corporations and state tax · partnerships · S
corporations · LLC classification and exempt organizations

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
