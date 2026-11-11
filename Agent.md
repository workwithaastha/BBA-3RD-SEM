# Agent.md — Rules & Working

Short rulebook for Claude in this repo. **Read this first, then [PROGRESS.md](PROGRESS.md)** for architecture, routes, data shapes, tools, PDFs read, decisions and open items. Update both when things change.

## Goal
Exam-prep website for BBA 3rd Sem, **pure HTML + CSS + vanilla JS** (no frameworks, no build step), hosted on GitHub Pages. Student: Astha.
Written exams: **Finance, Marketing**. MCQ exams: **Business Environment, HRM, Office Management, Physical Education & Yoga**.

## Subjects & folders
| Folder | Subject | Exam |
|---|---|---|
| `FINANCE/` | Business Finance | Written |
| `MARKETING/` | Marketing Management | Written |
| `BUSINESS ENV/` | Business Environment & Ethics | MCQ |
| `HRM/` | Human Resource Management | Written (Core II, 2 h) + MCQ practice - both built |
| `OFFICE MANG/` | Office Management | MCQ |
| `Physical Education/` | Physical Education & Yoga (co-curricular, 75 marks, 90 min, 100 MCQs / answer 75) | MCQ (past papers only) |

Source PDFs stay untouched. `tools/` = generators and checkers, `site/` = deployable app.

## Rules (do not break)
1. Folder names spelled correctly (`BUSINESS ENV`).
2. One subject / feature at a time; **commit + push to `origin main` after every major change**.
3. **Every commit ends with** `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`. Messages short, conventional (`feat:`, `fix:`, `docs:`, `chore:`).
4. Analyse **every PDF** (`pdftotext -layout`; image-only PDFs → render with PyMuPDF). Log files read in PROGRESS.md.
5. **Never invent facts.** Content comes from the PDFs; anything else is marked `[extra]` (notes) or tagged "extra: not in PDFs" (MCQs). Ask the user when unclear.
6. Tech: relative paths only, light/dark, mobile friendly, container max-width **1450px**, mobile breakpoint 640px, `prefers-reduced-motion` respected, works when localStorage is blocked.
7. MCQs: exactly 4 options, one correct, no "all/none of the above", correct answer not clearly the longest (`node tools/lenbias.js <subject> 1.8`). Exception: real past-paper MCQs (Physical Education, flag `p`) keep the paper's original options and order.
8. Never commit secrets. Keep `.gitignore` (`__pycache__/`, `*.tmp.pdf`).
9. **Source files**: the original PDFs/PPTs are viewable on the site (`#/<id>/files`, "📂 Source files") and linked from every notes page and quiz unit ("📄 Original files for this page"). Whenever a source file is added, renamed or removed, run `python -I tools/build_sources.py` and update `site/data/sourcemap.js` (page ↔ file links). Never rename or edit the PDFs themselves without telling the user.

## Workflow
1. Edit sources: MCQs → `tools/data_*.py` (+ `overrides_*.py`; Physical Education = `data_pe_{a,b,d}.py` → `python -I tools/build_pe.py`, keeps original option order); notes / Q&A / cards → `site/data/*.js`; UI → `site/js|css`.
2. If MCQs changed: `python -I tools/build_mcq.py`.
3. Check: `node --check <file>` · `node tools/qa.js` (**must be `issues: 0`**) · `node tools/topicmatrix.js` (no `⚠`).
4. Test behaviour with jsdom installed in the scratchpad (not the repo). jsdom fires `hashchange` itself: don't dispatch it manually, wait ~80 ms after setting `location.hash`.
5. If source PDFs/PPTs were added, renamed or removed: `python -I tools/build_sources.py` (feeds the 📂 Source files viewer; page↔file links live in `site/data/sourcemap.js` and are checked by `tools/qa.js`; the files themselves are served from the repo folders via `../<FOLDER>/<file>`).
6. Update PROGRESS.md, commit with the trailer, push. Pages rebuild takes a few minutes.

## Hosting
GitHub Pages, legacy mode (branch `main`, path `/`); root `index.html` redirects to `site/`. No admin rights, so no Actions workflow. Live: https://workwithaastha.github.io/BBA-3RD-SEM/

## Environment lessons
- Windows + Git Bash. **Long heredocs with many quotes can fail** → create files with the Write tool and run Python patch scripts from the scratchpad.
- `pdftotext` exists; `pdftoppm` does not. Use PyMuPDF + Pillow for scanned PDFs.
- Separate script files do not share top-level `const`; use `window.App` / `window.FormulaLib` / `window.ExamQA`.
- `animation-fill-mode: both` blocks hover transforms; use `backwards`.
- Script order in `site/index.html` matters (listed in PROGRESS.md §3).

## Where things are
Architecture, routes, data shapes, storage keys, tools, PDFs read, assumptions and open questions: **PROGRESS.md**. Extra MCQs for the user to verify: `REVIEW_EXTRA_QUESTIONS.md`.

Physical Education: the 3 past papers have **no answer key** - marked answers are my own (31 flagged "not sure", listed in `REVIEW_PE_ANSWERS.md`). Never present them as official.

Feature map (all built): notes · quiz / mock exam / Daily 20 · progress, badges, weekly summary · welcome pop-up with resume-last · revision, expected, last-night sheets · concept cards, Finance formula explorer, click-any-formula pop-up · written Q&A banks (Finance, Marketing, HRM) with mock paper · source files viewer with page ↔ file links · **answer feedback** (correct answer + why, happy/sad webp pop-up, 🔊 toggle = sound + animations, default on) · **UI layer** (`css/ui2.css`, `js/ui2.js`: quick tiles, progress rings, subject strip, mobile bottom tab bar, quiz keyboard shortcuts A-D / 1-4 / Enter) · **subject scoreboard + wrong-question sets** (`scoreboard()` in app.js) · unit/topic label on every question · welcome pop-up fits any screen (landscape two columns) · Physical Education PDF (`tools/make_pe_pdf.py` → `MCQ pdf/Physical_Education_MCQ_Answers_and_Predicted_Sets.pdf`: all 300 MCQs + 3 predicted sets of 50).

## Recent user preferences
- Every MCQ must explain WHY the correct option is right and WHY each wrong option is wrong (real subject reasoning, never filler). Data field `w` = 4 reasons per question, `e` = why correct. **Done for all MCQ subjects**: PE (`tools/expl_pe_{a,b,d}.py` via `build_pe.py`), HRM / Office / Finance / Marketing (`tools/expl_hrm_*.py`, `expl_om_*.py`, `expl_fin.py`, `expl_mkt.py` via `build_mcq.py`), Business Environment (`tools/expl_be_u*.py` via `parse_be.py`). New MCQs must come with their reasons.
- Do exactly what is asked; ask only when truly unclear (once, with options).
- Images on the site: compress and use `.webp` (`site/img/`); originals stay in the repo root.
- Layouts must fit any screen without scrolling where possible (welcome pop-up) and work on phones.
- After each feature: update this file and PROGRESS.md, run `node tools/qa.js`, commit with the trailer, push.
- PDFs: all generated subject PDFs live in `MCQ pdf/` (Physical Education only for now). Create more PDFs there only when the user asks, one subject at a time.
- Set PDFs: when the user names a subject, run `python -I tools/make_set_pdfs.py <subject-id> <Prefix>` -> `MCQ pdf/<Prefix>/<Prefix>_Set_N.pdf` (50 MCQs per set, no repeats between sets, answer key + explanations at the end; an incomplete last set is not made). Done: HRM (4 sets), Office Management (4 sets), Business Environment (16 sets).
- Exam features (`data/examdates.js`, `js/exams.js`): countdown timeline on home, exam banner on each subject, day-wise study plan at `#/plan`, next-exam line in the welcome pop-up. If the date sheet changes, edit `data/examdates.js` only.
- Written Q&A PDFs: `python -I tools/make_qa_pdfs.py <subject-id> <Prefix>` -> `Written QA pdf/<Prefix>_Written_QA.pdf` (HRM, Finance, Marketing done). Finance has 1 MCQ set (49 unused), Marketing 2 sets (16 unused).
- Detailed written answers: 2 marks = definition + 2 explained points + example; 3 marks = intro + 3 explained points + example; 5-6 marks = intro + headed points + table/example + conclusion; 10 marks = full headings + table + example + conclusion. HRM done (`site/data/examqa-hrm*.js`); Finance and Marketing still short - rewrite when asked.
- Days-left logic lives in `js/exams.js` (`Exams.weight`, `todayItems`); it re-sorts home subjects by exam date.
- Environment lesson: test in real Chrome headless (`chrome.exe --headless=new --allow-file-access-from-files --virtual-time-budget=20000 --dump-dom <test.html>` with an iframe of `site/index.html#/route`) - jsdom missed a bug where direct links / refresh ran the first route before other scripts and `window.App` existed (filters dead on refresh). First render now waits for the `load` event.
- HRM unit notes: site pages `#/hrm/u1..u4` (`site/data/hrm-notes.js`) + PDFs via `python -I tools/make_hrm_unit_pdfs.py` -> `HRM Unit Notes/HRM_Unit_N_Notes_Questions_MCQ.pdf` (notes, important questions, detailed answers, MCQs with answers at the end). Units I-II written from standard knowledge.
