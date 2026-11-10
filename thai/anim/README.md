# Celebration stills

`manifest.json` says what plays when; the engine picks from it (pools, level gates:
see `cpa-far-quiz/anim/README.md`). Thai Blitz celebrates with two stills drawn from
the same vector glove as the icon (`store/thai/art/compose-art.js`):

| Slot | Plays when | File |
|---|---|---|
| `perfect` | a flawless round of 5+ (banners CLEAN ROUND! / FLYING KNEE! / KNOCKOUT!) | `knockout.webp`, the glove in front of a starburst |
| `dance` | 90%+, or a Speed Round record | `champion.webp`, the glove over a championship belt |

Promotions have no clip of their own, so they step down to the perfect still.

Stills are precached by the service worker, so a still added or retired here must be
added to or removed from `ASSETS` in `../sw.js` (and `VERSION` bumped). Clips (mp4) can
join later the way the fleet's do, through `store/shared/anim/add-clip.py`, which scans
each take for real brand names first.
