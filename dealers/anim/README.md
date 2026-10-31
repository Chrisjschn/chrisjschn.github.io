# Celebration clips

The app plays a celebration for the tiers listed in `manifest.json` — no
code changes needed to swap art. Entries left `null` stay off (the app
checks the manifest, never probes for files, so consoles stay clean).

Shipped state: two vector stills rendered in headless Chromium.

| Entry | File | Plays when |
|---|---|---|
| `celebrate` | — (`null`) | Quiz score 70–89% |
| `dance` | `podium.webp` | Score 90%+ or a new Time Trial record — the podium |
| `perfect` | `checkered.webp` | A flawless round (100%) — the checkered flag (falls back to the dance clip if absent) |
| `levelup` | — (`null`) | Reaching General Manager, the one rung with its own clip (steps down to `perfect`, then `dance`); other level-ups use the `perfect` tier directly |

To replace a still with a real clip:
1. Drop the .mp4 (or .webp/.png) into this folder.
2. Point its entry in `manifest.json` at the filename, e.g.
   `{ "celebrate": "burnout.mp4", "dance": "podium.webp", ... }`.
3. Add the new filename to the `ASSETS` list in `../sw.js` and bump its
   `VERSION` so offline clients pick it up.

## Export spec (hand this to the animator or AI video tool)

- MP4, H.264 (HEVC also fine), around 720p, portrait or square framing
- 3–6 seconds per clip, under 2 MB each
- Car / racing theme to match the app: magenta coupe, checkered flag, podium,
  pit lane — no football
- No baked-in text or scores — the app renders those itself
- Audio is kept — clips play with sound when the app's Sound setting is on
  (muted automatically when it's off or the platform blocks unmuted autoplay)

Clips are skippable with a tap and automatically skipped when iOS
Reduce Motion is on. The service worker precaches whatever `../sw.js` lists
in `ASSETS`, so the shipped stills work offline; keep anything you add small.
