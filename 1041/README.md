# 1041 Blitz — Trust & Estate Tax Quick Quiz

Bite-size multiple-choice quizzes on **fiduciary income taxation** — the
Form 1041 world of trusts and estates — plus the estate and gift tax (706/709)
basics that travel with it. Identical engine and features to the other Blitz
apps: quick quizzes, Daily Challenge, Blitz 60, weak-spot drilling, XP ladder,
streaks with freezes, Trophy Room, offline PWA.

A deliberately compact bank — 132 questions across 11 sections:

Who files & when · the returns at death (final 1040 / 1041 / 706 / 709) ·
trust types & classification · grantor trust rules · income & IRD · **DNI and
the distribution deduction** · deductions & exemptions · beneficiary K-1s ·
rates, estimates & NIIT · estate and gift tax basics · practitioner scenarios

Written for EA and CPA candidates and anyone who preps or reviews fiduciary
returns. Figures follow 2025 law where a number is unavoidable; stems stay
figure-light so indexed amounts age gracefully.

## Run

```bash
cd f1041-quiz
python3 -m http.server 8086   # or just open index.html
```

Deployed to GitHub Pages at `/1041/` alongside the other apps (see
`.github/workflows/deploy-pages.yml`). Progress is stored separately
(`t41blitz.v1` in localStorage), so all games can live on one phone.
Web-only — no iOS/Android shell.

The engine (`app.js`) is a copy of AUD Blitz's with 1041 branding — the
`FAR_SECTIONS`/`FAR_QUESTIONS` global names are kept so the engine and test
harness stay identical across apps. Defense vocabulary like the rest of the
fleet (THREE AND OUT! / GOAL-LINE STAND! / PICK SIX!). Accent is maroon
(`#8b1e3f`), the eighth `TEAMS` entry in `store/shared/art/reteam.py`.

Study aid only — not legal or tax advice for any actual trust or estate.
