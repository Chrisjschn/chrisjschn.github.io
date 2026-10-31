# Dealers — Auto Dealership 1120-S Quick Quiz

Bite-size multiple-choice quizzes on **auto dealership taxation** — the
S corporation return and everything that makes a dealer's return its own
animal: vehicle LIFO, floor plan interest, F&I income timing, demonstrator
vehicles, manufacturer incentives, Form 8300, and the year-end close from the
dealer management system to Form 1120-S. Identical engine and features to the
rest of the fleet: quick quizzes, Daily Challenge, Time Trial, weak-spot
drilling, XP ladder, streaks with freezes, Trophy Room, offline PWA.

240 questions across 15 sections:

The S corp return · vehicle inventory & LIFO · floor plan & interest limits ·
sales, incentives & revenue timing · **EV credits & factory programs** (the 2025
point-of-sale transfers and their September 30 sunset) · **F&I income** · parts,
service & body shop · demos & company vehicles · fixed assets & depreciation ·
owners & related parties · the 1120-S schedules · entity-level taxes & elections ·
**information reporting & Form 8300** · the year-end close · **working the
numbers** (LIFO, §163(j), §179, luxury-auto caps, basis, M-1, penalties, with
real figures)

Written for the preparer sitting down with a dealership's trial balance for
the first time. Scenarios use a fictional dealership ("Riverbend Motors");
2025 law, including the 2025 tax act, with indexed amounts flagged as such.

## Run

```bash
cd dealers-quiz
python3 -m http.server 8087   # or just open index.html
```

Deployed to GitHub Pages at `/dealers/` alongside the other apps (see
`.github/workflows/deploy-pages.yml`). Progress is stored separately
(`dealers.v1` in localStorage). Web-only — no iOS/Android shell.

## Car theme

The engine (`app.js`) is a copy of 1041 Blitz's; only strings differ. Where
the rest of the fleet talks defense, Dealers talks cars and the showroom:

| Fleet | Dealers |
|---|---|
| Blitz 60 | Time Trial |
| Quick Blitz | Quick Lap |
| Tackle Your Problems | Pit Stop |
| Tackle again | Back to the shop |
| THREE AND OUT! / GOAL-LINE STAND! / PICK SIX! banners | CLEAN LAP! / PODIUM FINISH! / CHECKERED FLAG! |
| Undrafted Rookie → Hall of Famer ladder | Lot Porter → Dealer Principal ladder |
| Football trophies | Car trophies (ids unchanged) |
| 🏈 progress marker, end zone | 🏎️ marker, checkered finish line |

Fleet patch scripts that anchor on the defense strings will assert-fail here
on purpose — patch the Dealers variants deliberately. The `FAR_SECTIONS` /
`FAR_QUESTIONS` global names, trophy ids, mode keys and the `blitz` internals
are unchanged so the engine and test harness stay identical across apps.

Accent is magenta (`#9b2a9b`), the ninth `TEAMS` entry in
`store/shared/art/reteam.py`. The icon, intro car and celebration stills all
derive from one car illustration — see `store/dealers/art/`.

Study aid only — not tax advice for any actual dealership or return.
