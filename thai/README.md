# Thai Blitz — Learn Thai Quick Quiz

Bite-size multiple-choice quizzes for **beginner Thai**, themed on Muay Thai. Five
questions at a time on a phone: greetings, numbers, food, getting around, shopping,
time, people, everyday verbs, describing things, questions and particles, the Thai
script, vowels and tones, small talk, and the words you hear at a Muay Thai gym.
Identical engine and features to the rest of the fleet: quick quizzes, Daily
Challenge, a 60-second Speed Round, weak-spot drilling, XP ladder, streaks with
freezes, Trophy Room, offline PWA.

280 questions across 14 sections, 20 each. Every Thai word is shown in script with
romanization (the g/k, dt/t, bp/p system, tones marked on the vowel), and the
**Hear it** button reads the Thai aloud with the device's own Thai voice. Only voices
that run on the device are used, so nothing is sent anywhere; without one the button
stays hidden. Items where hearing the Thai would answer the question (tones, letter
sounds) hold the button until after the answer.

## Run

```bash
cd thai-quiz
python3 -m http.server 8090   # or just open index.html
```

Deployed to GitHub Pages at `/thai/` alongside the other apps (see
`.github/workflows/deploy-pages.yml`). Progress is stored separately
(`thaiblitz.v1` in localStorage). Web-only — no iOS/Android shell yet.

**Do not edit `data/questions.js` by hand** — it is generated from
`store/thai/bank/parts/*.json` by `store/thai/bank/assemble.py`; see
`store/thai/README.md` for the build kit.

## Muay Thai theme

The engine (`app.js`) is a copy of 1041 Blitz's; only strings differ, plus the
speech buttons. Where the rest of the fleet talks defense, Thai Blitz fights:

| Fleet | Thai Blitz |
|---|---|
| Blitz 60 | Speed Round |
| Quick Blitz | Quick Spar |
| Tackle Your Problems | Work the Bag |
| Tackle again | Back on the bag |
| THREE AND OUT! / GOAL-LINE STAND! / PICK SIX! banners | CLEAN ROUND! / FLYING KNEE! / KNOCKOUT! |
| Undrafted Rookie → Hall of Famer ladder | Gym Newcomer → Sparring Partner → Amateur Fighter → Pro Nak Muay → Stadium Fighter → Champion → Legend of the Ring |
| Football trophies | Fight trophies (ids unchanged): First Bell, Clean Round, Fight Camp, Ice Pack, Hundred Kicks, Heavy Bag 500, Flurry, Untouched, Off the Canvas, Eight Limbs, Ten-Hit Combo, Championship Belt |
| 🏈 progress marker, end zone | 🥊 marker, the ropes |

Fleet patch scripts that anchor on the defense strings will assert-fail here on
purpose — patch the Thai variants deliberately. The `FAR_SECTIONS` / `FAR_QUESTIONS`
global names, trophy ids, mode keys and the `blitz` internals are unchanged so the
engine and test harness stay identical across apps.

Accent is rose (`#c2185b`), the `rose` entry in `store/shared/art/reteam.py`. The
icon, intro glove and celebration stills are vector art, see `store/thai/art/`.
