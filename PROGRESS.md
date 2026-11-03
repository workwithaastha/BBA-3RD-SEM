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
| 22 | Source files linked to pages: "📄 Original files for this page" strip on every notes page and quiz unit, "Used for" tags in the viewer (`data/sourcemap.js`) | done |
| 21 | Source files viewer (`#/<id>/files`): view / open / download the original PDFs, duplicate detection | done |
| 23 | Physical Education & Yoga: 300 past-paper MCQs (3 papers), 20 concept cards, expected topics, source files (3 PDFs + syllabus image), exam-pattern note, 72 s/Q mock option | done |
| 24 | Answer feedback: every practice answer shows correct answer + why; happy / sad webp face pop-up with animation; 🔊 toggle (top bar) switches sound AND animations, default on | done |
| 25 | UI upgrade: new palette + glass header, quick tiles and progress rings on home, subject switcher strip, mobile bottom tab bar, quiz letter badges + keyboard shortcuts (`css/ui2.css`, `js/ui2.js`) | done |
| 26 | Per-subject scoreboard (correct / wrong / accuracy / wrong-to-fix) + wrong-question sets of 10; every question shows `📚 Unit · Topic` (practice and mock) | done |
| - | Final polish | pending user feedback |

## 2. Content counts
| Subject | Notes pages | MCQs | Written Q&A | Concept / formula cards |
|---|---|---|---|---|
| Business Finance | 9 (+ formulas page) | 99 (25 Formula Finder) | 117 | 40 formula cards, 11 calculators |
| Marketing Management | 15 + concept page | 116 | 112 | 17 concept cards + 6 formula cards |
| Business Environment | concept page | 800 (PDF) | - | 10 concept cards |
| HRM | concept page | 202 (80 extra) | - | 17 concept cards |
| Office Management | concept page | 235 (28 extra) | - | 15 concept cards |
| Physical Education & Yoga | concept page | 300 (past papers; 31 answers flagged not sure) | - | 20 concept cards |

Total MCQs: 1,752. Source files shown in the viewer: 51 (3 same-content duplicates flagged). Formula library: 48 cards (`window.FormulaLib`).

## 3. Architecture
```
site/
├── index.html        loads css, data, then js (ORDER MATTERS)
├── css/  style · theme (per-subject colours .t-<id>) · welcome · formulas · examqa · formulapop
├── js/   app.js (router, quizzes, progress, daily, revision, expected, search) · examqa.js · formulapop.js
│         rewards.js · welcome.js · sources.js   (app.js exposes window.App for them)
└── data/ subject notes + MCQ files · finance-formulas.js · formulalib-extra.js · concepts.js
          expected.js · sources.js (generated) · sourcemap.js (hand-written page↔file links) · examqa-finance*.js · examqa-marketing*.js
```
Script order: subject data → `finance-mcq` → `finance-formulas` → `formulalib-extra` → `marketing*` → `marketing-mcq` → `business-env`, `hrm`, `office-mgmt` → `concepts` → `js/examqa.js` → `examqa-*` → `expected` → `js/app.js` → `rewards.js` → `formulapop.js` → `sources.js` → `welcome.js` (`data/sources.js` loads after `expected.js`).

### Data shapes
- Subject: `window.SUBJECTS[id] = { title, type:'notes'|'mcq', units:[{id,title,html,after?}], mcqs:[{u,t,n,q,o[4],a,e?,g?,x?,c?}] }` (`a` index of correct option; `g` generated; `x` extra; `c` case text).
- Written Q&A: `ExamQA.add(id,[{m,u,t,q,a,ms,src,p}])`; `m` marks 2/3/5/6/10; `p` likelihood 1-3 (3 = asked in PDFs); `a` HTML via helpers `L O F E T D`.
- Concept card: `{g,n,key,pts,what,ex[],when[],where[],mistake,ref,topic}`; formula card adds `f,sym,u,s?,calc?`.

### Routes (hash)
`#/` · `#/<id>` · `#/<id>/<unit>` · `#/<id>/quiz[/<topic>]` · `#/<id>/qa` · `#/<id>/files` (source PDFs) · `#/<id>/concepts` · `#/finance/formulas` · `#/revision/<id>` · `#/expected/<id>` · `#/sheet/<id>` · `#/progress` · `#/badges` · `#/daily` · `#/search/<q>`

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
| `make_pe_pdf.py` | Physical Education PDF: all 300 MCQs with answers + 3 predicted sets of 50 (`PHYSICAL_EDUCATION_MCQ_Answers_and_Predicted_Sets.pdf`) |
| `data_pe_{a,b,d}.py`, `build_pe.py` | Physical Education past-paper rows (original option order, answer letter, explanation, paper Q no.) → `physical-education.js` + `REVIEW_PE_ANSWERS.md` |
| `build_sources.py` | Scan the 6 subject folders → `site/data/sources.js` (size, pages, same-content duplicates). **Run after adding / renaming source files** |

Rebuild: edit `tools/data_*.py` → `python -I tools/build_mcq.py` → `node tools/qa.js`.

## 5. PDFs read
- **Finance (8/8):** Unit 1 Notes, Business_Finance_Notes (Units I-V), Formulae Sheet, Cost of Capital & Financial Leverage Formula Sheet (formulas only), Assignment 1 (TVM), Assignment 2 (Capital Budgeting), OPT Paper (test paper 30-09-2026), Operating & Financial Leverage Questions (Q24-27 missing; Q23, 28, 33 cut off).
- **Marketing (23/23):** MM UNIT-1 (image slides), MTP UNIT1, Marketing_Orientations, Green_Marketing, Digital Marketing, Advanced AI Integrated Marketing Assignment, unit-2 notes 2026 (+ identical copy), Consumer_Behaviour, factors of consumer behaviour (image slides), Marketing Information System (+ identical copy), MIS_Presentation, Marketing Research Process, TOOLS OF MARKETING RESEARCH, marketing esearch (long research textbook), SEGMENTATION (image slides), Market_Targeting, Positioning_and_Repositioning, Indian_Brands_Positioning_Repositioning, Value_Proposition (+ different `value proposition`), Marketing_Management_Unit3_Assignment.
- **Business Environment (5/5):** UNIT 1-4 MCQ (200 each; Unit 4 case-based) + UNIT 3 BE ethics slides.
- **HRM (4/4):** Important Questions, Unit 3 Performance Appraisal (+ identical copy), Notes of Unit 4.
- **Physical Education (4/4):** `2025-26 paper.pdf` (scanned, Set A, 100 Qs), `Z040401T-B.pdf` (text, Series B 2025-26, 100 Qs), `bsc-bba-4-sem-physical-education-and-yoga-z040401-set-d-2024.pdf` (scanned, Set D 2024, 100 Qs, has pencil marks - ignored), `WhatsApp Image ... 9.29.58 AM.jpeg` (syllabus: Units I-IV, Z031301 Physical Education and Yoga, 25+75 marks).
- **Office Management (7/7):** OM Unit 1, UNIT 1 PPT, Office_Automation_Secretarial_Practices, Office_Forms_Record_Management (+ Detailed Notes), Unit4_Office_Management, ASSIGNMENT-2 (AI assignment).

## 6. Content decisions and assumptions
- Business Env MCQs come straight from PDFs. HRM and Office Management MCQs are generated from the PDF notes; anything outside the PDFs is tagged "extra: not in PDFs" (HRM Units 1-2, wage concepts, training, IR machinery; Office Unit 4 secretarial standards etc.).
- Assumed unit numbering (**confirm with user**): Marketing - I intro/orientations/green/digital, II consumer behaviour + MIS + research, III STP + value proposition. Office - 1 basics/filing, 2 automation & secretarial, 3 forms & records, 4 company office procedures & meetings.
- Known source gaps: Finance cost-of-capital PDF has formulas only; HRM Unit 4 lacks minimum/fair/living wage and wage boards; Marketing PDFs lack 7Ps and detailed 4Ps; Profitability Index and the retained-earnings formula are `[extra]` (the sheet's `b` notation differs from textbooks).
- Physical Education: no paper has an answer key. Marked answers = syllabus + standard knowledge; 31 uncertain ones carry a "⚠ answer not sure" tag and are listed in `REVIEW_PE_ANSWERS.md`. Units follow the syllabus image (I Physical Education, II Fitness / weight / lifestyle, III Yoga, IV Traditional games + recreation); non-syllabus items asked in the papers (Olympics, rules, anatomy, teaching) sit under "Sports & General". The syllabus says Semester III (Z031301) but the papers are IV Sem (Z040401) - treated as the same course. Real paper pattern: 100 MCQs, answer 75, 75 marks, 90 min, no negative marking.
- "Predicted" (★★★) in the Q&A bank = asked in the user's PDFs (assignments, test paper, Important Questions, chapter questions), not a teacher guarantee.

## 7. Open items (ask the user)
1. Real paper pattern and marks for the two written subjects (to add mock-paper presets).
2. Real exam dates (countdown + day-wise plan on the welcome pop-up).
3. Weak topics for more Q&A / MCQs.
4. Review `REVIEW_EXTRA_QUESTIONS.md` (80 HRM + 28 Office extras).
5. Confirm the assumed unit numbering above.
6. Physical Education: verify the 31 flagged answers (`REVIEW_PE_ANSWERS.md`); ask for the official answer key if one exists. Folder is spelled `Physical Education` (mixed case) - rename to `PHYSICAL EDUCATION` only if the user wants it.
