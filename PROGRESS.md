# PROGRESS.md - project log and reference

Detailed status, architecture and decisions. **Rules and workflow live in [Agent.md](Agent.md).**

## 1. Phase log (chronological)
| # | Work | Status |
|---|---|---|
| 0 | Fix folder name, Agent.md, push | done |
| 1 | Site skeleton (home, notes viewer, quiz engine, search, theme) | done |
| 2 | Finance notes (units I-V, cost of capital, formula sheet, solved Qs, leverage practice) | done |
| 3 | GitHub Pages setup (root redirect to `site/`) | done |
| 4 | Marketing notes (15 pages, units I-III + assignments guide) | done |
| 5 | Business Environment MCQs (800, parsed from PDFs) | done |
| 6 | HRM MCQs (202) and Office Management MCQs (235), generated; extras tagged | done |
| 7 | Review list `REVIEW_EXTRA_QUESTIONS.md`; 1450px responsive layout | done |
| 8 | Mock exam mode, UI upgrade (colour themes, hero, animations) | done |
| 9 | Finance (99) and Marketing (116) practice MCQs; progress tracker | done |
| 10 | Daily 20; printable revision sheets | done |
| 11 | Expected-questions pages; QA tool | done |
| 12 | Distractor rebalancing (correct answer no longer the longest) | done |
| 13 | Welcome pop-up "Hi Astha", resume-last, streak, 3D cube, tilt cards | done |
| 14 | Confetti + sound + 15 badges; weekly summary; reset-all | done |
| 15 | Finance formula explorer (40 cards, 11 calculators) | done |
| 16 | Concept cards (Marketing 17, HRM 17, Office 15, BE 10) + Formula Finder quiz (25) | done |
| 17 | Written Q&A banks (Finance 117, Marketing 112), mock paper, custom pattern, last-night sheet | done |
| 18 | Q&A coverage batches 3-4: every topic has short, medium and long answers | done |
| 19 | Click-any-formula pop-up (48 formula cards) | done |
| 20 | Agent.md / PROGRESS.md restructure | done |
| - | Final polish | pending user feedback |

## 2. Content counts
| Subject | Notes pages | MCQs | Written Q&A | Concept / formula cards |
|---|---|---|---|---|
| Business Finance | 9 (+ formulas page) | 99 (25 Formula Finder) | 117 | 40 formula cards, 11 calculators |
| Marketing Management | 15 + concept page | 116 | 112 | 17 concept cards + 6 formula cards |
| Business Environment | concept page | 800 (PDF) | - | 10 concept cards |
| HRM | concept page | 202 (80 extra) | - | 17 concept cards |
| Office Management | concept page | 235 (28 extra) | - | 15 concept cards |

Total MCQs: 1,452. Formula library: 48 cards (`window.FormulaLib`).

## 3. Architecture
```
site/
├── index.html        loads css, data, then js (ORDER MATTERS)
├── css/  style · theme (per-subject colours .t-<id>) · welcome · formulas · examqa · formulapop
├── js/   app.js (router, quizzes, progress, daily, revision, expected, search) · examqa.js · formulapop.js
│         rewards.js · welcome.js          (app.js exposes window.App for them)
└── data/ subject notes + MCQ files · finance-formulas.js · formulalib-extra.js · concepts.js
          expected.js · examqa-finance*.js · examqa-marketing*.js
```
Script order: subject data → `finance-mcq` → `finance-formulas` → `formulalib-extra` → `marketing*` → `marketing-mcq` → `business-env`, `hrm`, `office-mgmt` → `concepts` → `js/examqa.js` → `examqa-*` → `expected` → `js/app.js` → `rewards.js` → `formulapop.js` → `welcome.js`.

### Data shapes
- Subject: `window.SUBJECTS[id] = { title, type:'notes'|'mcq', units:[{id,title,html,after?}], mcqs:[{u,t,n,q,o[4],a,e?,g?,x?,c?}] }` (`a` index of correct option; `g` generated; `x` extra; `c` case text).
- Written Q&A: `ExamQA.add(id,[{m,u,t,q,a,ms,src,p}])`; `m` marks 2/3/5/6/10; `p` likelihood 1-3 (3 = asked in PDFs); `a` HTML via helpers `L O F E T D`.
- Concept card: `{g,n,key,pts,what,ex[],when[],where[],mistake,ref,topic}`; formula card adds `f,sym,u,s?,calc?`.

### Routes (hash)
`#/` · `#/<id>` · `#/<id>/<unit>` · `#/<id>/quiz[/<topic>]` · `#/<id>/qa` · `#/<id>/concepts` · `#/finance/formulas` · `#/revision/<id>` · `#/expected/<id>` · `#/sheet/<id>` · `#/progress` · `#/badges` · `#/daily` · `#/search/<q>`

### Features
Notes viewer (prev/next, search, progress bar, themes) · quiz with filters, retry-wrong · mock exam (timer, navigator, flag, review) · Daily 20 · progress tracker, weak topics, weekly summary · 15 badges, confetti, sound · welcome modal with resume-last and streak · revision sheets, expected questions, last-night sheet · concept cards and formula explorer with calculators · Formula Finder quiz · click-any-formula pop-up · written Q&A bank with marks filter, predicted tags, revised tick, mock paper (presets + custom).

### Browser storage (localStorage only)
`theme, name, visited, last, stats, wrong, hist, days, log, badges, flags, fixed, pages, sound, qa_<id>`

## 4. Tools (`tools/`)
| Tool | Purpose |
|---|---|
| `parse_be.py` | Business Env MCQ PDFs → `business-env.js` (answer key validated) |
| `data_hrm(.more).py`, `data_om(.more).py`, `data_fin(.more).py`, `data_mkt.py` | MCQ source rows; correct answer listed first |
| `overrides_*.py` | Replacement distractors by question number |
| `build_mcq.py` | Shuffle (fixed seed), apply overrides, write `hrm.js`, `office-mgmt.js`, `finance-mcq.js`, `marketing-mcq.js` |
| `export_review.py` | Regenerate `REVIEW_EXTRA_QUESTIONS.md` |
| `qa.js` | Automated QA (`issues: 0` required) |
| `lenbias.js` | Correct-answer-is-longest check |
| `qacover.js`, `topicmatrix.js` | Q&A coverage per unit and topic × marks |

Rebuild: edit `tools/data_*.py` → `python -I tools/build_mcq.py` → `node tools/qa.js`.

## 5. PDFs read
- **Finance (8/8):** Unit 1 Notes, Business_Finance_Notes (Units I-V), Formulae Sheet, Cost of Capital & Financial Leverage Formula Sheet (formulas only), Assignment 1 (TVM), Assignment 2 (Capital Budgeting), OPT Paper (test paper 30-09-2026), Operating & Financial Leverage Questions (Q24-27 missing; Q23, 28, 33 cut off).
- **Marketing (23/23):** MM UNIT-1 (image slides), MTP UNIT1, Marketing_Orientations, Green_Marketing, Digital Marketing, Advanced AI Integrated Marketing Assignment, unit-2 notes 2026 (+ identical copy), Consumer_Behaviour, factors of consumer behaviour (image slides), Marketing Information System (+ identical copy), MIS_Presentation, Marketing Research Process, TOOLS OF MARKETING RESEARCH, marketing esearch (long research textbook), SEGMENTATION (image slides), Market_Targeting, Positioning_and_Repositioning, Indian_Brands_Positioning_Repositioning, Value_Proposition (+ different `value proposition`), Marketing_Management_Unit3_Assignment.
- **Business Environment (5/5):** UNIT 1-4 MCQ (200 each; Unit 4 case-based) + UNIT 3 BE ethics slides.
- **HRM (4/4):** Important Questions, Unit 3 Performance Appraisal (+ identical copy), Notes of Unit 4.
- **Office Management (7/7):** OM Unit 1, UNIT 1 PPT, Office_Automation_Secretarial_Practices, Office_Forms_Record_Management (+ Detailed Notes), Unit4_Office_Management, ASSIGNMENT-2 (AI assignment).

## 6. Content decisions and assumptions
- Business Env MCQs come straight from PDFs. HRM and Office Management MCQs are generated from the PDF notes; anything outside the PDFs is tagged "extra: not in PDFs" (HRM Units 1-2, wage concepts, training, IR machinery; Office Unit 4 secretarial standards etc.).
- Assumed unit numbering (**confirm with user**): Marketing - I intro/orientations/green/digital, II consumer behaviour + MIS + research, III STP + value proposition. Office - 1 basics/filing, 2 automation & secretarial, 3 forms & records, 4 company office procedures & meetings.
- Known source gaps: Finance cost-of-capital PDF has formulas only; HRM Unit 4 lacks minimum/fair/living wage and wage boards; Marketing PDFs lack 7Ps and detailed 4Ps; Profitability Index and the retained-earnings formula are `[extra]` (the sheet's `b` notation differs from textbooks).
- "Predicted" (★★★) in the Q&A bank = asked in the user's PDFs (assignments, test paper, Important Questions, chapter questions), not a teacher guarantee.

## 7. Open items (ask the user)
1. Real paper pattern and marks for the two written subjects (to add mock-paper presets).
2. Real exam dates (countdown + day-wise plan on the welcome pop-up).
3. Weak topics for more Q&A / MCQs.
4. Review `REVIEW_EXTRA_QUESTIONS.md` (80 HRM + 28 Office extras).
5. Confirm the assumed unit numbering above.
