# Celebration clips and stills

`manifest.json` says what plays when; the engine picks from it (pools, level gates:
see `cpa-far-quiz/anim/README.md`). Since 1 Oct 2026:

| Slot | Plays when | File |
|---|---|---|
| `perfect` | a flawless round of 5+ | `perfect-picksix-black.mp4`, the owner's pick six (#500, black hair, `until` Team Captain: it gives way only once a blue-hair clip exists) |
| `dance` | 90%+, or a Blitz record | `sack-floss-black.mp4`, the owner's floss after a sack (#500, black hair, `until` Team Captain), cropped as below |

Add the owner's takes with `store/shared/anim/add-clip.py TAKE NAME.mp4 --app ea2-quiz --slot dance --until "Team Captain"`:
his framing kept, 0.4 s sound fade, under 3 MB, manifest entry, service-worker bump, and
a scan for real brand names (a stadium ad board saying GATORADE kept one take out).

**The floss is cropped.** The owner's take showed real GATORADE boards (three, moving
with the camera, legible for half its 4 s). On 1 Oct 2026 the owner asked for a crop:
every frame was OCR'd for the signs' positions, and a 680x720 window pans smoothly from
x=109 to x=498 across the 1280x720 take, clear of every sign by 14-24 px. It plays larger
on a phone than the widescreen take would (the overlay is width-limited). The dancer's
arm is clipped in the last half-second, where it swings out over a sign. The cropped clip
scans clean and was checked frame by frame by eye.

Clips are not precached by the service worker (the web copy fetches them on demand;
the iOS build bundles this folder). Stills are precached, so a still added or retired
here must be added to or removed from `ASSETS` in `../sw.js`.
