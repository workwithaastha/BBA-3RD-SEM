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
| 27 | Real per-option explanations (why correct / why each wrong option is wrong) for all 1,752 MCQs (every subject); shown after every answer; PE also in the PDF | done |
| 28 | Exam features from the date sheet: countdown timeline, subject exam banners, day-wise study plan (`#/plan`), next-exam line in welcome pop-up | done |
| 29 | HRM written Q&A bank (44 answers, all 'Important Questions' Units 1-4; Units 1-2 from standard HRM knowledge [extra]), mock paper + last-night sheet; HRM now has both MCQs and written Q&A | done |
| 30 | HRM written Q&A rewritten in detail (96 answers: 2/3/5/6/10 marks for every topic, Units I-IV, 4 data files); site adapts to days left: subjects sorted by exam date, countdown chips, Today's focus card, per-subject today task, Daily 20 weighted to nearest exams | done |
| 31 | HRM unit-wise notes (Units I-IV) on the site + 4 unit PDFs (notes, important questions, detailed answers, MCQs) | done |
| 32 | HRM updated from the `Syllabus/` folder (syllabus image + HRM_Four_Units_Comprehensive_Notes.pdf): notes rewritten for all 4 units + Exam Master page (mnemonics, flowcharts, priority A, last-night plan), +107 MCQs with reasons, +40 detailed written answers (136 total), expected questions and exam-format note updated, syllabus files in the source viewer, all HRM PDFs rebuilt | done |
| - | Final polish | pending user feedback |

## 2. Content counts
| Subject | Notes pages | MCQs | Written Q&A | Concept / formula cards |
|---|---|---|---|---|
| Business Finance | 9 (+ formulas page) | 99 (25 Formula Finder) | 117 | 40 formula cards, 11 calculators |
| Marketing Management | 15 + concept page | 116 | 112 | 17 concept cards + 6 formula cards |
| Business Environment | concept page | 800 (PDF) | - | 10 concept cards |
| HRM | 4 unit notes + Exam Master + concept page | 309 (202 + 107 from the syllabus PDF) | 136 (written exam, detailed) | 17 concept cards |
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
| `make_pe_pdf.py` | Physical Education PDF: all 300 MCQs with answers + 3 predicted sets of 50 (`MCQ pdf/Physical_Education_MCQ_Answers_and_Predicted_Sets.pdf`) |
| `data_pe_{a,b,d}.py`, `build_pe.py` | Physical Education past-paper rows (original option order, answer letter, explanation, paper Q no.) → `physical-education.js` + `REVIEW_PE_ANSWERS.md` |
| `build_sources.py` | Scan the 6 subject folders → `site/data/sources.js` (size, pages, same-content duplicates). **Run after adding / renaming source files** |

Rebuild: edit `tools/data_*.py` → `python -I tools/build_mcq.py` → `node tools/qa.js`.

## 5. PDFs read
- **Finance (8/8):** Unit 1 Notes, Business_Finance_Notes (Units I-V), Formulae Sheet, Cost of Capital & Financial Leverage Formula Sheet (formulas only), Assignment 1 (TVM), Assignment 2 (Capital Budgeting), OPT Paper (test paper 30-09-2026), Operating & Financial Leverage Questions (Q24-27 missing; Q23, 28, 33 cut off).
- **Marketing (23/23):** MM UNIT-1 (image slides), MTP UNIT1, Marketing_Orientations, Green_Marketing, Digital Marketing, Advanced AI Integrated Marketing Assignment, unit-2 notes 2026 (+ identical copy), Consumer_Behaviour, factors of consumer behaviour (image slides), Marketing Information System (+ identical copy), MIS_Presentation, Marketing Research Process, TOOLS OF MARKETING RESEARCH, marketing esearch (long research textbook), SEGMENTATION (image slides), Market_Targeting, Positioning_and_Repositioning, Indian_Brands_Positioning_Repositioning, Value_Proposition (+ different `value proposition`), Marketing_Management_Unit3_Assignment.
- **Business Environment (5/5):** UNIT 1-4 MCQ (200 each; Unit 4 case-based) + UNIT 3 BE ethics slides.
- **HRM (4/4):** Important Questions, Unit 3 Performance Appraisal (+ identical copy), Notes of Unit 4.
- **Physical Education (4/4):** `2025-26 paper.pdf` (scanned, Set A, 100 Qs), `Z040401T-B.pdf` (text, Series B 2025-26, 100 Qs), `bsc-bba-4-sem-physical-education-and-yoga-z040401-set-d-2024.pdf` (scanned, Set D 2024, 100 Qs, has pencil marks - ignored), `WhatsApp Image ... 9.29.58 AM.jpeg` (syllabus: Units I-IV, Z031301 Physical Education and Yoga, 25+75 marks).
- **HRM extra (Syllabus folder, 2/2):** `hrm .jpeg` (syllabus: Core Course II, 25+75 marks, units), `HRM_Four_Units_Comprehensive_Notes.pdf` (37 pages: syllabus-based notes for Units I-IV, earlier-test priorities, mnemonics; Unit III appraisal / career parts use standard BBA treatment).
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

## 8. Exam date sheet (regular students, BBA III Sem, CSJM University - memo CSJMVV/COE/1368/2026, 26-10-2026)
| Date | Paper | Type / time |
|---|---|---|
| Sun 22-11-2026 | Office Management and Secretarial Practices (VOC 169) | objective, 1 h (12:30-1:30 PM) |
| Mon 23-11-2026 | Business Finance (Core I, F010301TN) | written, 2 h (11:30-1:30) |
| Wed 25-11-2026 | Human Resource Management (Core II, F010302TN) | **written, 2 h** (11:30-1:30) |
| Thu 26-11-2026 | Marketing Management (Core III, F010303TN) | written, 2 h (11:30-1:30) |
| Sat 28-11-2026 | Business Environment, Ethics & Governance (Minor, F010304TN) | objective, 1.5 h (11:30-1:00) |
| Sat 05-12-2026 | Physical Education and Yoga (Z031301) | objective, 1.5 h (11:30-1:00) |

Note: the date sheet lists HRM as a Core paper (written, 2 h). Agent.md had HRM as MCQ - the HRM MCQs stay as practice, but HRM written answers may be needed (open item).

### Phase 33 - Marketing updated from Syllabus/marketing.jpeg (like HRM)
- Syllabus image added to the Marketing source viewer (`EXTRA["marketing"]`, sourcemap `m_img`); exam-format note in `PATTERN.marketing` (Core III, 25+75, written 2 h, Thu 26 Nov; lectures 11/11/10/13).
- New `site/data/marketing-u4.js`: Unit IV notes (4Ps: product, price, place, promotion) + Exam Master. No notes PDF exists for Unit IV -> standard textbooks, marked [extra].
- +54 Unit IV MCQs with per-option reasons (`tools/data_mkt_syl.py`, `overrides_mkt_syl.py`; 1 duplicate skipped) -> Marketing MCQs 170.
- +26 detailed written answers for Unit IV (`site/data/examqa-marketing5.js`) -> Marketing written Q&A 138; expected-questions block for Unit IV.
- PDFs: `Syllabus/Marketing_Complete_Unitwise_Notes_Questions_Answers.pdf` (`tools/make_marketing_complete_pdf.py`, 82 pages), `Written QA pdf/Marketing_Written_QA.pdf`, `MCQ pdf/Marketing/` sets (3).
- Open: Unit I-III written answers are still short (not yet upgraded to detailed 2/3/5/6/10 like HRM).

### Phase 34 - Marketing Units I-III upgraded to detailed answers
- `site/data/examqa-marketing6.js` (Unit I), `-7.js` (Unit II), `-8.js` (Unit III): 51 detailed 5/6/10-mark answers (intro, headed points, tables, flows, example, conclusion) that REPLACE the earlier short ones. `ExamQA.add` now replaces an earlier item with the same marks + question text.
- 2- and 3-mark Marketing answers stay short (right size for those marks). Marketing Q&A stays 138; PDFs rebuilt.

### Phase 35 - Unit-wise notes for Office Management and Business Environment + unit-wise subject page
- `site/data/office-mgmt-notes.js`: 10 unit pages (U1 A-D, U2 A-B, U3 A-B, U4 A-B) + Exam Master. Sources: OFFICE MANG PDFs (OM Unit 1, Office Automation, Forms and Records, Unit 4). A few quorum / office-manual points marked [extra].
- `site/data/business-env-notes.js`: 9 unit pages (U1 A-C, U2 A-C, U3 A-B, U4 revision) + Exam Master. Unit 3 from UNIT 3 BE.pdf; Units 1, 2, 4 from syllabus topics, MCQ topics and standard textbooks ([extra]).
- `site/js/app.js`: `unitGroups()` - subject page now lists notes grouped by unit (Start here / Unit I... / More) with a jump bar; `PATTERN` exam notes for Office Management and Business Environment. `site/css/ui2.css`: `.ujump`, `.ugh`.
- `site/data/expected.js`: refs for Office Management groups; new Business Environment important-questions block. `site/data/sourcemap.js`: source links for all new pages.
- Physical Education still has MCQs only (no unit notes) - open.

### Phase 36 - MCQ / quiz redesign
- New `site/js/quiz2.js` + `site/css/quiz2.css` (loaded after ui2.js; replaces the global `quiz()`, `run()`, `mock()` of app.js and keeps `record()`, scoring, badges, A-D / 1-4 shortcuts).
- Setup: mode cards (Practice, Mock exam, Unit test, Weak spots, Daily 20) + unit chips with accuracy rings + Customise; one big Start button; setup hides once a session starts ("Change mode" button).
- Practice: one question per screen, progress + live score, result panel with reason, wrong-option reasons in a toggle, "Revise later" mark. Mock / unit test: focus mode (header and tabs hidden), timer (red in last 5 min), flag for review, question navigator, submit summary, arrow / F keys.
- Results (shared): score ring, unit bars, "what to do next" (retry wrong, revise Unit N notes link), full review with revise-later marks. Weak spots = wrong answers + revise-later marks of the subject (`localStorage` key `revise`).
- Paper size for mock: Office Management 60 Qs / 60 s, Business Environment 90 / 60 s, Physical Education 75 / 72 s, others 30 / 60 s (`PAPER` in quiz2.js).

### Phase 37 - Welcome pop-up replaced by the "buddy" bubble
- `site/js/welcome.js` rewritten: the big "Hi Astha" modal is gone. On every site open a small bubble greets "Hi Astha 👋" with a random question (the three favourites - "Did you remember me?", "Are you angry with me?", "Should I order you some food?" - are asked ~65% of the time) with reply buttons; then a second popup shows the days left for a random upcoming exam (`window.EXAMS`) with Study now / Study plan.
- Random entrance (9) and exit (5) animations each time; header 👋 button replays it; reduced-motion respected; hidden in mock-exam focus mode. CSS: end of `site/css/welcome.css` (old `#wel` overlay CSS removed). Study-day streak recording and 3D tilt kept.
- Buddy bubble update: avatar is now the dinosaur (`site/img/dino.webp`, from Downloads/dinasaur.png, 14 KB); a reply shows `img/happy.webp` or `img/sad.webp` in a round frame with a bounce / shake (answers starting with one of `SAD` in `site/js/welcome.js` are sad, all others happy). The days-left popup uses the dinosaur with the subject icon as a badge.
- Buddy avatar is now the supplied portrait (`site/img/avatar.webp`, round face crop, 8 KB) instead of the dinosaur; happy / sad images still replace it on answers.
- Buddy bubble now sits in the centre of the screen (fixed, auto margins, soft dim behind) with the dinosaur (`site/img/dino.webp`) sitting on top of it and bobbing; portrait stays as the avatar.
- Buddy card redesign (`site/css/buddy.css`, loaded after welcome.css): white card with colour strip, round photo with ring, time-based hello line, big question, two full-width reply buttons (gradient main + outline), countdown bar to auto-close; days-left popup shows a big gradient number, info chips and Study now / Study plan.
- Buddy avatar replaced by the cartoon image (`site/img/avatar.webp`, cyjhmj.png, centre-cropped 220 px, 23 KB).
- Buddy rules: shown only when the site opens on the home screen; one question at a time; no auto-close (closes only with x or after you pick an answer, which shows the happy/sad image for ~4 s); the days-left popup follows and also stays until closed; leaving the first screen removes it. Header 👋 still replays it.
- Buddy questions are now NOT about study (feelings, food, water, sleep, tea/coffee, mood...); favourites (remember me / angry / order food) still asked most; no study words in answers.
- Buddy: small "Next question ›" button on the question card (shows a different question, never the same twice in a row) and "Another exam ›" on the days-left popup (different exam).
- Buddy: days-left popup no longer has Study now / Study plan (just "Got it 👍" + "Another exam ›"); 10 cute couple questions added (`LOVE` in welcome.js, asked ~45% of the time, then the favourites, then the daily-life ones).
- Buddy: 13 more cute couple questions (LOVE list now 23).
- Buddy: extra funny / cute answers (EXTRA map in welcome.js, one picked at random per tap). Food questions ("order food?", "have you eaten?", "eat on time?") answer with "I am on my way with your favourite pizza, ordering it right now" lines (PIZZA list).
- Buddy: removed the "imaginary pizza" lines. Food replies now say "Ordering for you right now! Tell me what you want - is it pizza?" and show two quick answers (Yes, pizza! / Something else) before closing (ORDER and FOLLOW in welcome.js).
- Buddy: no more "virtual" / "imaginary" wording; food replies start with "Wait, let me order for you!".
- Buddy: "virtual" wording removed only for food/chocolate lines; virtual hug lines restored.
- Buddy: the word "virtual" is removed completely from the popup texts.

### Phase 38 - PUT papers (college test) added
- `PUT/` folder: 19 photos of the Allenhouse Business School PUT papers (BBA 3rd Sem, 2026-27): Business Environment F010304TN (90 min, attempt 75 of 100) and Office Automation and Secretarial Practices VOC169 (60 min, attempt 75 of 100).
- Typed out all 200 questions: `tools/data_put_be.py`, `tools/data_put_om.py` -> `python -I tools/build_put.py` -> `site/data/put-be.js`, `put-om.js` (unit "PUT Paper", 100 MCQs each, original option order, reasons, tag "PUT paper"). Answer spread is exactly 25/25/25/25 for both papers.
- Quiz: unit chip "PUT Paper"; Mock exam on that chip uses the real format (75 of 100; BE 90 min, OM 60 min) - `PUTP` in `site/js/quiz2.js`.
- PDFs: `MCQ pdf/Business_Environment_PUT_Paper_100_MCQ_with_Answers.pdf` and `Office_Management_PUT_Paper_100_MCQ_with_Answers.pdf` (`make_mcq_book_pdf.py` got unit-filter and suffix arguments; the all-units books now exclude the PUT paper).
- Answers were worked out from standard knowledge and checked against the pen ticks in the photos; a few ticks looked different (BE Q12, Q16, Q21, Q40, Q41, Q48, Q54, Q63, Q69 - see `TICK_DIFF` in data_put_be.py).
- PUT paper shortcut: subject page button "📝 PUT paper · 100 Qs" opens the quiz with the PUT Paper chip already selected (#/<subject>/quiz/PUT%20Paper).
- Quiz setup: Customise is now a card (gear icon header, topic dropdown, segmented buttons for number of questions and time per question, shuffle switch); same hidden selects/checkbox drive the logic.
- Quiz: Skip option. Practice: "Skip for now" under the options; after the last question a "You skipped N questions" screen lists them and asks "Solve them now" or "Leave them skipped and see my result" (solve pass shows "Skipped question x of N (originally Qk)"; "Leave it unanswered" there). Mock exam / unit test: "Skip" button, skipped numbers get a dashed orange state in the navigator, and the final summary says "You skipped N questions" with "Solve skipped questions now" / "Back to questions" / "Submit and leave them skipped". Skipped questions count as skipped (not wrong) in the result.

### Phase 39 - New HRM files (19 Nov) + Complete Notes folder
- `HRM/` got 6 new files (HRM_Complete_Notes-DEQ_s-FM.pdf, 4 unit slide decks, Human_Resource_Management.pdf = important-questions list; `important questions 1.pdf` is an identical copy). Now 13 HRM sources in the viewer (2 duplicates marked); sourcemap keys h_cn, h_s1-h_s4, h_iq2.
- Site: `site/data/hrm-notes2.js` adds Unit I-B, II-B, III-B, IV-B "complete notes" pages (six-stage evolution, objectives, HRM vs PM incl. Storey, roles, HRP process, forecasting, job analysis, recruitment/selection, T&D, PA and biases, career stages, wage theories, grievance procedure ...). +61 HRM MCQs with reasons (`tools/data_hrm_new.py`, `overrides_hrm4.py`; HRM MCQs 370). +11 detailed answers (`site/data/examqa-hrm7.js`; HRM answers 147).
- New folder `Complete Notes/`: `HRM_Study_Notes.pdf` - notes only (no MCQs / questions), 21 pages, proper explanatory notes for every syllabus topic (`tools/hrm_study_content1.py`, `hrm_study_content2.py`, `make_hrm_study_notes.py`). `tools/make_hrm_complete_notes.py` builds the longer notes + questions + answers book (not kept in the folder).

### Phase 40 - Unit wise subject notes (HRM)
- New folder `Unit wise subject notes/HRM/`: 4 PDFs (one per unit, 10-14 pages each) = Part A detailed notes + Part B all important questions with marks (official 10 per unit from `HRM/Human_Resource_Management.pdf` with suggested marks, plus the whole bank of 147 answers grouped by 2/3/5/6/10 marks, star rating and "read in Part A" section). `tools/make_hrm_unit_notes.py`.
- Notes content extended (`tools/hrm_study_content3.py`) so every bank question is covered: HR policies and principles, challenges of HRM, strategic role, JD/JS sample (Marketing Executive), PA challenges, job analysis vs job evaluation, incentive plans, retirement vs termination benefits, minimum/fair/living wage, wage board, types and scope of IR, lay-off/retrenchment/gherao, 8-step collective bargaining, grievance essentials and case, CIPP, succession types, etc. `Complete Notes/HRM_Study_Notes.pdf` rebuilt (29 pages, notes only).
- The career-stages answer in `examqa-hrm7.js` now sits in Unit III (matches the syllabus).

### Phase 41 - Business Finance (same as HRM) on the 4-unit syllabus
- Syllabus image `FINANCE/syllabus.jpeg` (F010301TN, Core Course I, 25+75, 30 lectures): I Introduction + TVM + bonds (10), II Capital budgeting (7), III Capital structure, leverage, cost of capital (7), IV Dividend decision + working capital (6). The site's old 5-unit labels are re-mapped at load time by `site/data/finance-units.js` (notes pages renamed Unit I-A.., MCQs, written answers and important-question groups moved into Units I-IV; stock valuation is not in the syllabus list and sits with Unit IV / Gordon model).
- New files (19 Nov): Finance_Complete_Notes, Business finance unit 1-4 slides, Business Finance Notes Unit 1 / Unit 2 Notes / Unit 3 Notes (.docx.pdf); six other .docx.pdf files are re-exports of older files. 23 Finance files now in the source viewer; sourcemap keys f_syl, f_cn, f_s1-f_s4, f_n1-f_n3.
- Content: `tools/fin_study_content1.py` (Units I-II) and `fin_study_content2.py` (Units III-IV) with formulas and solved examples (numbers verified in Python). `tools/build_fin_site_notes.py` -> `site/data/finance-notes2.js` (4 complete-notes pages: Unit I-B, II-B, III-B, IV). +89 MCQs with reasons (`tools/data_fin_new.py` -> `build_fin_new_mcq.py` -> `site/data/finance-new-mcq.js`, n = 2001..; Finance MCQs 188). +20 detailed Unit IV answers `site/data/examqa-finance5.js` (dividend, Walter, Gordon, working capital, operating cycle). Exam-format note in PATTERN.
- PDFs: `Complete Notes/Finance_Study_Notes.pdf` (notes only, 20 pages) and `Unit wise subject notes/Finance/Finance_Unit_1..4_...pdf` (notes + questions with marks) via `tools/make_fin_pdfs.py`.
- Unit chips and Q&A filters are now sorted Unit I, II, III, IV.

### Phase 42 - Marketing (same as HRM and Finance)
- New Marketing files (19 Nov, `MARKETING/`): Marketing_Complete_Notes, slides for Marketing Mix and Product Mix, Classification of Products, levels of product (image only), New Product Development, Product Life Cycle, Branding, Branding and Packaging, Place (Distribution), Promotion (Unit IV); re-exports of older Unit I-III files. 41 Marketing sources in the viewer; sourcemap keys m_cn, m_mix, m_cls, m_npd, m_plc, m_brand, m_bp, m_place, m_promo now back the Unit IV pages and the Unit IV question group.
- Unit IV pages (`site/data/marketing-u4.js`) extended from the slides: product mix width/length/depth examples, classification of products, NPD types and stage tools, PLC (Vernon 1966, price-promotion matrix), branding types (individual, family, corporate, co-branding, private label), packaging levels, channel levels and VMS/omnichannel, logistics, objectives/media/AIDA, promotion tools, push vs pull, IMC and Indian cases. The "[extra] no PDF source" disclaimers on Unit IV are replaced by a real source line (also in `examqa-marketing5.js`, `data_mkt_syl.py`).
- PDFs: `Complete Notes/Marketing_Study_Notes.pdf` (notes only, 47 pages) and `Unit wise subject notes/Marketing/Marketing_Unit_1..4_...pdf` (notes + all 138 questions grouped by marks with star rating and "Read in Part A" pointer) via `tools/make_mkt_pdfs.py`, which reads the notes straight from the website data.

### Phase 43 - New files 21 Nov: PUT papers, practice sets, answer lengthening
- Answers lengthened (all written subjects): every 5-6 mark and 10-mark answer is more than double its earlier length; HRM 2-3 mark answers also lengthened, HRM 10-mark about 3x. New data files examqa-finance6..8, examqa-hrm8..13, examqa-marketing9..12 (they ADD to or replace the earlier answers); `tools/make_*_complete_pdf.py` rebuilt.
- New exam pattern (question/New Text Document.txt and the three PUT papers): 75 marks = Section A 9 x 6.25 (attempt 4), Section B 4 x 12.5 (attempt 2), Section C 4 x 12.5 (attempt 2). Q&A bank now supports 6.25 / 12.5 marks, a "PUT paper" chip and a "Numericals" chip, and the Mock paper menu has: the ACTUAL PUT paper (fixed questions with model answers), a random PUT-pattern paper, and for Marketing the online test (30 marks, 90 min). Code: `site/js/examqa.js` (`putPaper`, `real` presets, `mset` / `attempt`).
- Finance (`examqa-finance9.js` generated by `tools/build_fin_numericals.py`; `examqa-finance10.js`): the 17 PUT questions with answers, plus 45 solved numericals from Capital Budgeting.pdf (6), Leverage Questions.pdf (10) and Numerical Questions.pdf (29). All numbers computed with 4-decimal PV factors.
- HRM (`examqa-hrm14.js`) and Marketing (`examqa-marketing13.js`): PUT paper answers, built mostly from the detailed answers already in the bank; new answers for JD/JS of a Retail Store Manager, product-mix chart (Amul example), shoe-brand strategy, pricing plan, millet-biscuit channel and promotion plan, PLC curve (SVG) and buying behaviour types.
- Source viewer: files of the question/ folder are routed to Finance / HRM / Marketing by name (`tools/build_sources.py`). Finance theory bank (question/Theory Questions.pdf, 50 questions) answered in `examqa-finance11.js` by reusing the detailed answers plus added blocks; Marketing online test added to `examqa-marketing13.js`. The 11 Expanded_Notes_and_Answers PDFs are listed in the README only.

### Phase 44 - Physical Education unit-wise PDFs
- New folder `Unit wise subject notes/Physical Education/`: 5 PDFs (Unit I Physical Education, II Fitness-diet-obesity, III Yoga and meditation, IV Recreation and traditional games, Sports and General facts), 5-10 pages each. Part A notes in `tools/pe_study_content.py` (written from the topics in the three past papers and standard PE and yoga knowledge - no syllabus was supplied); Part B = all 300 MCQs with answer and reason, by topic (`tools/make_pe_unit_notes.py`). Answers flagged as less certain in the bank are marked "check with your teacher".

### Phase 45 - Mock Exam Box
- New page `#/mocks` (`site/js/mockbox.js`, `site/css/mockbox.css`), linked from the header (orange pill), the subject strip on every subject page, the home quick tiles and the mobile tab bar. 87 fixed practice sets generated from the data at run time (seeded shuffles, so a set is the same every visit; best score / finished state stored in the browser).
- Finance, HRM, Marketing: the actual PUT paper + PUT-pattern sets (75 marks: A 9 choose 4 x 6.25, B and C 4 choose 2 x 12.5), 8-10 sets each, covering every question of the Q&A bank at least once; Marketing also has the online test. Model answers on demand, attempt counter per section, timer, print.
- Business Environment, Office Management, Physical Education: real PUT paper (BE, OM), 50-question timed sets and 100-question full-paper sets covering every MCQ; score, unit table and review with the reason for each answer.
- Finance Numerical Mock Box: 95 numerical questions (old + new, marked NEW / earlier bank) in 16 sets of 6, each with a "How to solve" answer (formula, working table, result).

### Phase 46 - Encouragement pop-up
- `site/js/cheer.js` + `css/cheer.css`: after every 10-15 (random) questions solved a card says "Good going, sweetheart! ... Keep it up" (6 wordings, happy image, auto-closes in about 5 s, never pauses a timer). Works in practice, mock exam, Daily 20, Mock Exam Box MCQ sets and written sets (counts answers chosen / model answers opened / Q&A marked revised); the counter is remembered across pages.

### Phase 47 - NEW exam pattern (question/new pattern, Finance paper of 23 Nov 2026)
- Pattern: 75 marks, 2 h. Section A = Q1 (a)-(i), nine compulsory short answers of 5 marks (45); Section B = attempt any ONE of Q2-Q5 (15), Units I-II; Section C = attempt any ONE of Q6-Q9 (15), Units III-IV.
- `examqa-finance12.js`: the actual Finance paper (Q1 a-i, Q2-Q9) with model answers (numericals computed: bond Rs 952, DOL 2, machine: inflow 1,60,000 / payback 3.125 yr / ARR 12% / NPV +1,06,560, firms X and Y leverage 1.33/1.2/1.6 and 2.67/3/8). Marks 15 supported (chip, colours, qa.js).
- `site/js/mockgen.js` (shared by the browser and node): New Pattern sets = A 2 short from each unit + 1 rotating, B 2 long from each of Units I-II, C 2 long from each of Units III-IV, most-predicted questions first. Mock Exam Box shows "New Pattern Set 1-8" (and the actual Finance paper) first and keeps the old PUT-pattern sets below under "Old PUT pattern". The Q&A bank Mock paper menu has "NEW PATTERN" as the first preset. PATTERN notes on Finance/HRM/Marketing quiz pages updated.
- PDFs: `tools/make_new_pattern_pdfs.py` -> `MCQ pdf/HRM/HRM_New_Pattern_Set_1..8.pdf`, `MCQ pdf/Marketing/Marketing_New_Pattern_Set_1..8.pdf`, `MCQ pdf/Finance/Finance_New_Pattern_Actual.pdf` + `Finance_New_Pattern_Set_1..8.pdf` (paper in the real layout + model answers); same sets as the website. Old `*_PUT_Set_N.pdf` kept.

- Sets 9-12 added for HRM, Marketing and Finance (12 New Pattern sets each; sets 1-8 unchanged) in the Mock Exam Box and as PDFs. New `tools/make_last_night_pdf.py` -> `MCQ pdf/<Subject>/<Subject>_New_Pattern_Last_Night_Sheet.pdf` (per unit: most-predicted short parts with key points, likely long questions with the answer skeleton).

### Phase 48 - Exam Focus panel
- `site/js/focus.js` + `css/focus.css`: dark "mission control" card under the home banner for the NEXT exam (auto-moves on after each exam ends): live days / hours / min / sec countdown to the start time, details, "Today game plan" tick-boxes remembered per day (last-night sheet, quick-recall card for HRM, next unfinished New Pattern set with PDF, Q&A, MCQs; objective subjects get timed sets, wrong-answer review, concept cards, Daily 20), progress bar, and a Focus-mode switch that dims the other subject cards. Turns amber and pulses in the last 3 days, green while the exam is on.
- Focus panel: Collapse button (countdown strip only) and Exam morning mode (red panel with 5 items - quick-recall card / last-night sheet, one optional set, bag, early arrival, three breaths - and hides the subject cards, exam grid and tiles). Both choices are remembered.
- Exam morning mode now switches itself on 6 hours before an exam starts (until it ends), with a note; pressing the button for that exam overrides it (stored per exam).
- Mock Exam Box: every set card has a "View questions" option (`#/mocks/<set>/view`): read the paper (or MCQs / numericals) with no timer and nothing recorded, open answers one by one or all, print without answers, or press Start to take it as an exam.
- Mock Exam Box v2: subject tabs (opens on the next exam subject, remembers the last tab) with tried/total counters, filter chips, per-subject progress bar, an Up-next banner, and cleaner set cards (number badge, status chip, Start and View buttons).
