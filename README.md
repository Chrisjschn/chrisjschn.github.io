# FAR Blitz — CPA FAR Quick Quiz

A mobile-first study game for the CPA **FAR** (Financial Accounting and Reporting) exam.
Bite-size multiple-choice questions you can knock out while standing in line — with
per-section progress tracking and a **Weak Spots** mode that rebuilds quizzes from the
questions you keep missing.

## Features

- **Quick Quiz** — 5 / 10 / 15 random questions across all sections, favoring questions you haven't seen lately
- **Daily Challenge** — the same date-seeded 5 questions for every player (deterministic, offline); first completion each day earns +30 XP and a ❄️ streak freeze
- **Blitz 60** — answer as many as you can in 60 seconds; personal best sits on the home screen daring you to beat it
- **Practice by Section** — 10 FAR study areas (Concepts, Revenue/ASC 606, Inventory & Receivables, PP&E & Intangibles, Investments, Liabilities & Bonds, Leases/ASC 842, Equity & EPS, Cash Flows, Gov/NFP)
- **Weak Spots** — builds a quiz from your worst-scored questions (miss rate + missed-last-time bonus), topped up with unseen questions from your weakest sections
- **XP & levels** — earn XP per correct answer (more for medium difficulty, double for redeeming a question you'd missed), multiplied by answer combos (3+ streak = ×2, 5+ = ×3); climb the football ladder from Undrafted Rookie to Hall of Famer
- **Streaks with freezes** — day streaks with earned streak freezes that auto-cover a missed day; longest streak tracked
- **Instant feedback** — every answer shows the correct choice and a 1–2 sentence explanation, with confetti on perfect rounds and level-ups
- **Progress tracking** — per-section mastery meters, monthly activity calendar, weakest-topics list, overall accuracy. All local (`localStorage`), no account, no server
- **Offline PWA** — installable to the home screen, works with no connection (service worker cache)
- **240-question bank** — 13 sections covering the FAR blueprint, written for current GAAP (ASC 606, ASC 842, CECL, ASU 2016-14, GASB model) and technically reviewed

## Run it

It's a fully static app — no build step, no dependencies.

```bash
cd cpa-far-quiz
python3 -m http.server 8080   # or any static file server
# open http://localhost:8080 on your phone/desktop
```

Opening `index.html` directly from disk also works (the service worker just stays off).

**Deploy:** push to any static host (GitHub Pages, Netlify, Cloudflare Pages). For GitHub
Pages, serve the `cpa-far-quiz/` folder and you're done — HTTPS gives you the installable
offline PWA automatically.

## Project layout

```
cpa-far-quiz/
├── index.html            app shell (home, sections, quiz, results, stats views)
├── styles.css            mobile-first styles, light + dark mode
├── app.js                quiz engine, weak-spot scoring, localStorage progress
├── data/questions.js     FAR_SECTIONS + FAR_QUESTIONS bank
├── sw.js                 offline cache (bump VERSION when deploying changes)
├── manifest.webmanifest  PWA install metadata
└── icons/                SVG + PNG app icons
```

## How weak-spot tracking works

Every answer is recorded per question: attempts, correct count, current streak, and
whether the last attempt was wrong. A question's weakness score is
`miss rate + 0.4 if missed last time`. Weak Spots quizzes take the highest-scoring
questions first; a question drops off once you answer it correctly (and counts as
"mastered" after 2+ attempts with the last 2 correct). Section mastery is lifetime
accuracy for that section, shown on the section picker and stats screens.

## Adding or editing questions

Append to `FAR_QUESTIONS` in `data/questions.js`:

```js
{ id: 'leases-15', section: 'leases', topic: 'Discount rate', difficulty: 'easy',
  q: 'Short stem…',
  choices: ['…', '…', '…', '…'],   // exactly 4; position is shuffled at display time
  answer: 2,                        // index into choices
  explain: 'Why the right answer is right.' }
```

`id` must be unique (it keys progress stats). Keep stems ≤ ~220 chars and choices
≤ ~60 chars so everything fits on one phone screen without scrolling.

## Path to the App Store

The app is deliberately framework-free and offline-capable, which makes wrapping it
with [Capacitor](https://capacitorjs.com) straightforward when you're ready:

```bash
npm init -y && npm i @capacitor/core @capacitor/cli @capacitor/ios
npx cap init "FAR Blitz" com.yourname.farblitz --web-dir cpa-far-quiz
npx cap add ios && npx cap open ios   # then archive/upload via Xcode
```

Progress data lives in `localStorage`, which Capacitor's WKWebView persists.
