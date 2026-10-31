# EA Exam 3 Blitz — Enrolled Agent Exam Part 3 Quick Quiz

Sister app to [FAR Blitz](../cpa-far-quiz/) and [EA Exam 2 Blitz](../ea2-quiz/)
for the IRS **Special Enrollment Examination Part 3 (Representation, Practices
and Procedures)**. Identical engine and features — quick quizzes, Daily
Challenge, Blitz 60, weak-spot drilling, XP with a representation-career ladder
(Undrafted Rookie → MVP → Hall of Famer), streaks with freezes,
offline PWA — with a 240-question bank rebuilt from scratch against the
current SEE Part 3 blueprint (12 sections):

Circular 230 practice & due diligence · sanctions & discipline · enrollment,
renewal & CE · POAs & authorizations · **taxpayer rights, privilege & disclosure** ·
examinations & audits · liens, levies & enforced collection · installment
agreements, OIC & CNC · appeals & the courts · penalties, interest & abatement ·
e-file, signatures & data security · statutes of limitations

## Run

```bash
cd ea3-quiz
python3 -m http.server 8082   # or just open index.html
```

Deployed to GitHub Pages at `/ea3/` alongside the other apps (see
`.github/workflows/deploy-pages.yml`). Progress is stored separately
(`ea3blitz.v1` in localStorage), so all games can live on one phone.

The engine (`app.js`) is a copy of FAR Blitz's with EA Exam 3 branding — the
`FAR_SECTIONS`/`FAR_QUESTIONS` global names are kept so the engine and test
harness stay identical. See the FAR Blitz README for the question format and
the iOS wrapper playbook.
