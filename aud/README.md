# AUD Blitz — CPA Exam Auditing and Attestation Quick Quiz

Sister app to [FAR Blitz](../cpa-far-quiz/) and [REG Blitz](../cpa-reg-quiz/) for
the CPA Exam's **AUD (Auditing and Attestation)** section. Identical engine and
features — quick quizzes, Daily Challenge, Blitz 60, weak-spot drilling, XP with
a career ladder (Undrafted Rookie → MVP → Hall of Famer), streaks with freezes,
a Trophy Room, offline PWA — with a question bank built against the AICPA AUD
blueprint:

**Area I — Ethics, Professional Responsibilities & General Principles**
Independence and the conceptual framework · the Code of Professional Conduct and
quality management · engagement acceptance, terms and audit documentation

**Area II — Assessing Risk and Developing a Planned Response**
Audit risk and materiality · internal control and IT general controls · fraud
and professional skepticism · planning, specialists and group audits

**Area III — Performing Further Procedures and Obtaining Evidence**
Audit evidence and assertions · sampling · confirmations and observation ·
estimates, fair value and related parties · completing the audit

**Area IV — Forming Conclusions and Reporting**
The auditor's report and modifications · SSARS and attestation engagements ·
Government Auditing Standards, single audits and PCAOB integrated audits

## Run

```bash
cd cpa-aud-quiz
python3 -m http.server 8084   # or just open index.html
```

Deployed to GitHub Pages at `/aud/` alongside the other apps (see
`.github/workflows/deploy-pages.yml`). Progress is stored separately
(`audblitz.v1` in localStorage), so all games can live on one phone.

The engine (`app.js`) is a copy of FAR Blitz's with AUD branding — the
`FAR_SECTIONS`/`FAR_QUESTIONS` global names are kept so the engine and test
harness stay identical across apps. See the FAR Blitz README for the question
format and the iOS wrapper playbook.

Questions are written against the AICPA clarified standards (AU-C) for
nonissuers, and call out PCAOB (AS), SSARS (AR-C), SSAE (AT-C) or GAGAS
explicitly wherever the answer turns on which framework applies — that
distinction is itself a heavily tested idea.

The accent is teal (`#12796f`), the last unclaimed entry in `reteam.py`'s
`TEAMS`. Green remains off limits: it would collide with `--good` (`#15803d`),
the correct-answer colour in the quiz view.
