# Recon Blitz

The reconciliation half of the Form 1120-S — the part of the return that comes
after page 1 is already done. Nine sections, 108 questions.

| Section | What it drills |
|---|---|
| Schedule L | The balance sheet: what goes where, whose numbers it uses, when it can be skipped |
| Retained Earnings | The book rollforward, and why it never equals the AAA |
| Opening Balance | Opening Balance Equity — what creates it, and how to clear it before it reaches Schedule L |
| Schedule M-1 | Book income to the Schedule K reconciliation line, in both directions |
| Schedule M-2 | The AAA, the OAA, accumulated E&P, and the distribution ordering rules |
| Schedule K | Separately stated items and why each one has to travel on its own line |
| Basis | Stock and debt basis, the ordering rules, guarantees, and Form 7203 |
| Tie-Out | Which balances have to agree, which never will, and how to find the ones that should |
| Autobalance | What Drake does to Schedule L when it does not foot, and how to stop it |

Forked from `f1041-quiz`, so the engine is the fleet engine — same modes (Daily
Blitz Challenge, Quick Blitz, Blitz 60, Tackle Your Problems, Practice by
Section, My Progress), same XP ladder, same trophies. Only the strings, the
accent and the bank differ.

Accent is indigo `#4338ca`. Live at `chrisjschn.github.io/s1120/` (and the older `chrisjschn.github.io/Claude-repo/s1120/`).

**Do not edit `data/questions.js` by hand** — it is generated. The source is
`store/s1120/bank/parts/*.json`; see `store/s1120/README.md` for the build kit.

Study aid only — not tax advice for any actual corporation or return.
