# QB Blitz — Bookkeeping & QuickBooks Quick Quiz

Sister app to the exam-prep Blitz apps, built for **bookkeeper interview prep
and on-the-job drilling** — QuickBooks Online mechanics, cleanup diagnostics,
and the workflows a small-business bookkeeper runs every week. Identical
engine and features: quick quizzes, Daily Challenge, Blitz 60, weak-spot
drilling, XP ladder, streaks with freezes, Trophy Room, offline PWA.

208 questions across 13 sections:

Debits, credits & fundamentals · QuickBooks product knowledge (Online vs
Desktop, plan tiers, seats, migration) · chart of accounts · bank feeds & matching ·
bank reconciliation · customers & A/R · vendors, A/P & 1099s · **cleanup &
diagnostics** · journal entries & adjustments · reports & statements · sales
tax, payroll & 1099 basics · workflow hygiene & the close · **interview
scenarios**

The cleanup section drills the classic broken-file tells (Undeposited Funds
pileups, Opening Balance Equity residue, negative A/R, doubled income from
added-instead-of-matched deposits) and the interview section rehearses the
"what would you do if..." questions in multiple-choice form.

## Run

```bash
cd qb-quiz
python3 -m http.server 8085   # or just open index.html
```

Deployed to GitHub Pages at `/qb/` alongside the other apps (see
`.github/workflows/deploy-pages.yml`). Progress is stored separately
(`qbblitz.v1` in localStorage). Web-only — no iOS/Android shell.

The engine (`app.js`) is a copy of FAR Blitz's with QB branding — the
`FAR_SECTIONS`/`FAR_QUESTIONS` global names are kept so the engine and test
harness stay identical across apps. **This app plays offense**: the hero is
the quarterback (jersey #5 — QBs wear 1–19), the career ladder runs
Third-String Rookie → Clipboard Holder → Backup QB → Starting QB →
Franchise QB → MVP → Hall of Famer, perfect rounds earn FIRST DOWN! /
TOUCHDOWN! / 99-YARD DRIVE!, weak spots are "Move the Chains", and four
trophies carry offense names (100-Yard Game, 500-Yard Game, Clean Pocket,
Perfect Passer). Engine logic is identical to the fleet — only display
strings diverge, so fleet-wide patch scripts that anchor on those strings
will assert-fail here; patch the offense variants deliberately. Accent is gold (`#b45309`), the seventh
`TEAMS` entry in `store/shared/art/reteam.py`.

QuickBooks is a trademark of Intuit Inc. This app is original study content
and is not affiliated with or endorsed by Intuit.
