# Celebration clips

Drop the animation clips here and list them in `manifest.json` — no
code changes needed. Until the files exist, the app
simply skips the celebration (that is the current, shipped state).

| File | Plays when |
|---|---|
| `sack-celebrate.mp4` | Quiz score 70–89% — QB sack + short celebration |
| `sack-dance.mp4` | Score 90%+ or a new Blitz record — sack + flex |
| `mj-dance.mp4` | A flawless round (100%) or a level-up — the Michael Jackson routine (falls back to the dance clip if absent) |

Two steps to activate a clip:
1. Drop the .mp4 into this folder.
2. Point its entry in `manifest.json` at the filename, e.g.
   `{ "celebrate": "sack-celebrate.mp4", "dance": "sack-dance.mp4" }`
   (entries left `null` stay off — the app checks the manifest, never
   probes for files, so consoles stay clean).

## Export spec (hand this to the animator or AI video tool)

- MP4, H.264 (HEVC also fine), around 720p, portrait or square framing
- 3–6 seconds per clip, under 2 MB each
- No baked-in text or scores — the app renders those itself
- Audio is kept — clips play with sound when the app's Sound setting is on
  (muted automatically when it's off or the platform blocks unmuted autoplay)
- Keep the art style consistent across both clips

Clips are skippable with a tap and automatically skipped when iOS
Reduce Motion is on. The iOS builds bundle whatever sits in this folder;
the web version fetches it on demand so the offline cache stays light.
