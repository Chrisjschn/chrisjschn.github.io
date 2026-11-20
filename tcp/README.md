# TCP Blitz — CPA Exam Tax Compliance and Planning Quick Quiz

Sister app to [REG Blitz](../cpa-reg-quiz/) for the CPA Exam's **TCP (Tax
Compliance and Planning)** discipline section. Identical engine and features —
quick quizzes, Daily Challenge, Blitz 60, weak-spot drilling, XP with a career
ladder, streaks with freezes, a Trophy Room, offline PWA — with a question bank
of 240 items in 16 sections built against the 2026/2027 AICPA TCP blueprint
(`store/tcp/bank/`, 20 Nov 2026):

**Area I — Individuals and Personal Financial Planning (35%)**
Nonroutine income · AMT and year-end timing · passive and at-risk limits ·
gift tax · personal financial planning · deductions and charitable planning

**Area II — Entity Tax Compliance (35%)**
C corporations · S corporations · partnerships · trusts and estates · exempt organizations

**Area III — Entity Tax Planning (15%)**
Formation and liquidation · C corporation planning · S corp and partnership planning

**Area IV — Property Transactions (15%)**
Gains, losses and character · nontaxable dispositions and related parties

Accent orange `#d4622a`; the jersey wears #75, the CPA passing score. Cloned
from REG by `store/tcp/make-app.py`; bank assembled by `store/tcp/bank/assemble.py`.

## Run

```bash
python3 -m http.server 8080   # then open http://localhost:8080/
```
