# EA Exam 2 Blitz — Enrolled Agent Exam Part 2 Quick Quiz

Sister app to [FAR Blitz](../cpa-far-quiz/) for the IRS **Special Enrollment
Examination Part 2 (Businesses)**. Identical engine and features — quick quizzes,
Daily Challenge, Blitz 60, weak-spot drilling, XP with a tax-career ladder
(Undrafted Rookie → MVP → Hall of Famer), streaks with freezes, offline PWA — with a
239-question bank covering the SEE Part 2 blueprint under 2025 tax law:

entities & elections · business income & COGS · deductions & QBI · depreciation ·
property transactions · partnerships · C corps · S corps · accounting methods &
payroll taxes · retirement plans (SEP/SIMPLE/solo 401(k)) · trusts/estates/exempt orgs

## Run

```bash
cd ea2-quiz
python3 -m http.server 8081   # or just open index.html
```

Deployed to GitHub Pages at `/ea/` alongside FAR Blitz (see
`.github/workflows/deploy-pages.yml`). Progress is stored separately
(`eablitz.v1` in localStorage), so both games can live on one phone.

The engine (`app.js`) is a copy of FAR Blitz's with EA branding — the
`FAR_SECTIONS`/`FAR_QUESTIONS` global names are kept so the engine and test
harness stay identical. See the FAR Blitz README for the question format and
the iOS wrapper playbook (a second Capacitor app will follow once the FAR
TestFlight pipeline is proven).
