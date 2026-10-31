# Celebration clips

Drop clips here and point `manifest.json` at them — no code changes. A slot
left `null` steps down (champion → perfect → dance; levelup → perfect → dance;
celebrate skips), so the app never probes for a missing file.

| Slot | File now | Plays when |
|---|---|---|
| `celebrate` | — | Quiz score 70–89% |
| `dance` | a pool (see `manifest.json`): the owner's black-hair sack dances until Team Captain, blue-hair ones from it | Score 90%+, or a new Blitz 60 record |
| `perfect` | a pool: the old #500 `team-celebrate.mp4` until Team Captain; `perfect-picksix-black.mp4` (interception returned for a touchdown, PICK SIX!) until Team Captain; `perfect-fumble-black.mp4` (strips a kick returner, FUMBLE!) at Special Teams only; `perfect-safety-blue.mp4` (goal-line safety in the EXAM end zone) from Team Captain | A flawless round of 5+, and the fallback for the level slots |
| `levelup` | `mvp-levelup.mp4` | Reaching MVP (banner: MVP!) |
| `motivate` | a pool: `motivate-playbook-black.mp4` ("I have to get better", a PRACTICE SQUAD sign behind him, so Practice Squad only), `motivate-sled-black.mp4` (sled in the rain, "push beyond your limits") and `motivate-parachute-black.mp4` (parachute sprints, "train hard, push your limits"), until Team Captain; `motivate-sled-blue.mp4` (sled, "I won't give up") and `motivate-tireflip-blue.mp4` (tire flips, "I got this"), blue hair, from Team Captain | A rough round (5+ questions under 70%): every fourth one, counted across sessions; good rounds don't reset the count (banner: KEEP GRINDING!, no score) |
| `champion` | — (falls back to `team-celebrate.mp4`) | Reaching Champion (banner: CHAMPION!) |
| `levels` → Practice Squad | `promo-practice-squad.mp4` ("MADE IT" scoreboard) | Reaching Practice Squad (banner: PRACTICE SQUAD!) |
| `levels` → Special Teams | `promo-special-teams.mp4` (first-game tunnel run-out) | Reaching Special Teams (banner: SPECIAL TEAMS!) |
| `levels` → Starter | `promo-starter.mp4` ("FIRST CAREER START" pyro run-out) | Reaching Starter (banner: STARTER!) |

A promotion with no `levels` entry plays the `perfect` clip under a LEVEL UP!
banner (MVP and Champion use their own slots first).

## Pools and the hair rule

Any slot, and any `levels` entry, can be a list: one plays at random, never
the same clip twice running. An entry can carry level gates:

```json
"dance": [
  {"src": "sack-1.mp4", "until": "Team Captain"},
  {"src": "sack-2.mp4", "until": "Team Captain"},
  {"src": "sack-blue-1.mp4", "from": "Team Captain"}
]
```

The hero's hair is black until **Team Captain**, then long and dyed blue (the
owner's Rodman arc, 28 Sept 2026). So:

- Blue-hair clips carry `"from": "Team Captain"`. `from` is strict: the clip
  never plays before that level, even if it is the only one in the slot.
- Black-hair clips carry `"until": "Team Captain"`. `until` gives way only
  once something else in the slot can play, so a black-hair clip keeps
  covering a moment until its blue version exists.
- Clips where the hair doesn't show (helmet on, wide shots) need no gate.
- Promotion clips need no gate: the level already fixes the look.
- A clip tied to one level carries both gates: `"from": "Practice Squad", "until":
  "Special Teams"`. When every clip in a slot has retired, only the most recently
  retired ones fill in, so a clip tied to an early level never comes back later.
- `store/far/test/e2e-far.js` prints what each slot can play at every level, using the
  engine's own code on this manifest.
- Level names must match the ladder exactly; a misspelt one never unlocks.
  `store/far/test/e2e-far.js` checks every name and file in the manifest.

The owner's files arrive named `FAR_<Level>_Promotion` and
`FAR_<Good|Great|Perfect>_Round_<Black|Blue>`; Good is `celebrate`, Great is
`dance`, Perfect is `perfect`.

## Spec

MP4, H.264 (yuv420p, High profile), 24 fps, **under 3 MB** (2 MB could not hold a
full-size 10 s take with confetti; at phone size the extra compression does
not show), AAC audio at 96k is fine. The owner edits each take himself (28 Sept 2026: "picture is fine"), so
his framing and length stand; they go in with
`store/shared/anim/add-clip.py TAKE NAME.mp4 --slot dance --from "Team Captain"`
(or `--level Starter` for a promotion), which runs `prep-clip.py --keep-frame
--sound-fade 0.4` (a 0.4 s sound fade at each end, re-encoded to fit the size
cap), measures the fade, adds the manifest entry with its level gate, and bumps
the service worker. A clip plays to its
own end; the app's safety cutoff is its length plus 1.5 s. Its sound plays
when the sound setting is on and is muted otherwise. No baked-in text or score
graphics; the app draws the banner. `store/shared/anim/prep-clip.py IN OUT`
can also work from a raw generated take: square crop that follows the hero
(`--x`), trim (`--start`/`--end`), a fade to black at the end (`--fade-out 0.8`;
the overlay behind the clip is near-black, so it melts away), size cap, and a
contact sheet to check the framing (`--sheet`). Tap skips a clip. Still images (`.webp`,
`.png`) also work in any slot and get a slow drift instead of playback.

Add every clip you ship to the precache list in `sw.js` if it must work on
the very first offline launch; otherwise it is cached the first time it plays.

Character and shot prompts, including FAR's red #75 uniform and the
regeneration order for the clips that still show #500: `store/shared/animation-prompts.md`.
