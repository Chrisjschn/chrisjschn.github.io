# EA Exam 1 Blitz — Enrolled Agent Exam Part 1 Quick Quiz

Sister app to [FAR Blitz](../cpa-far-quiz/), [EA Exam 2 Blitz](../ea2-quiz/)
and [EA Exam 3 Blitz](../ea3-quiz/) for the IRS **Special Enrollment
Examination Part 1 (Individuals)**. Identical engine and features — quick quizzes, Daily
Challenge, Blitz 60, weak-spot drilling, XP with a career ladder
(Undrafted Rookie → MVP → Hall of Famer), streaks with freezes,
offline PWA — with a 192-question bank covering the SEE Part 1 blueprint:

filing status & dependents · taxpayer data & due diligence · wages & ordinary
income · interest, dividends & investments · capital gains & basis · retirement
income & IRAs · rental & passive activity · adjustments to income · itemized
deductions · credits · other taxes & AMT · specialized returns

Wave 1 leaned on structural rules and statutory thresholds that do not move
year to year; wave 2 uses indexed figures where they teach better, on the
understanding that the bank gets a refresh each filing season.

## Run

```bash
cd ea1-quiz
python3 -m http.server 8083   # or just open index.html
```

Deployed to GitHub Pages at `/ea1/` alongside the other apps (see
`.github/workflows/deploy-pages.yml`). Progress is stored separately
(`ea1blitz.v1` in localStorage), so all games can live on one phone.

The engine (`app.js`) is a copy of FAR Blitz's with EA Exam 1 branding — the
`FAR_SECTIONS`/`FAR_QUESTIONS` global names are kept so the engine and test
harness stay identical. See the FAR Blitz README for the question format and
the iOS wrapper playbook.
