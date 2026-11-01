# Agent.md — Rules & Working

Short rulebook for Claude in this repo. **Read this first, then [PROGRESS.md](PROGRESS.md)** for architecture, routes, data shapes, tools, PDFs read, decisions and open items. Update both when things change.

## Goal
Exam-prep website for BBA 3rd Sem, **pure HTML + CSS + vanilla JS** (no frameworks, no build step), hosted on GitHub Pages. Student: Astha.
Written exams: **Finance, Marketing**. MCQ exams: **Business Environment, HRM, Office Management**.

## Subjects & folders
| Folder | Subject | Exam |
|---|---|---|
| `FINANCE/` | Business Finance | Written |
| `MARKETING/` | Marketing Management | Written |
| `BUSINESS ENV/` | Business Environment & Ethics | MCQ |
| `HRM/` | Human Resource Management | MCQ |
| `OFFICE MANG/` | Office Management | MCQ |

Source PDFs stay untouched. `tools/` = generators and checkers, `site/` = deployable app.

## Rules (do not break)
1. Folder names spelled correctly (`BUSINESS ENV`).
2. One subject / feature at a time; **commit + push to `origin main` after every major change**.
3. **Every commit ends with** `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`. Messages short, conventional (`feat:`, `fix:`, `docs:`, `chore:`).
4. Analyse **every PDF** (`pdftotext -layout`; image-only PDFs → render with PyMuPDF). Log files read in PROGRESS.md.
5. **Never invent facts.** Content comes from the PDFs; anything else is marked `[extra]` (notes) or tagged "extra: not in PDFs" (MCQs). Ask the user when unclear.
6. Tech: relative paths only, light/dark, mobile friendly, container max-width **1450px**, mobile breakpoint 640px, `prefers-reduced-motion` respected, works when localStorage is blocked.
7. MCQs: exactly 4 options, one correct, no "all/none of the above", correct answer not clearly the longest (`node tools/lenbias.js <subject> 1.8`).
8. Never commit secrets. Keep `.gitignore` (`__pycache__/`).

## Workflow
1. Edit sources: MCQs → `tools/data_*.py` (+ `overrides_*.py`); notes / Q&A / cards → `site/data/*.js`; UI → `site/js|css`.
2. If MCQs changed: `python -I tools/build_mcq.py`.
3. Check: `node --check <file>` · `node tools/qa.js` (**must be `issues: 0`**) · `node tools/topicmatrix.js` (no `⚠`).
4. Test behaviour with jsdom installed in the scratchpad (not the repo). jsdom fires `hashchange` itself: don't dispatch it manually, wait ~80 ms after setting `location.hash`.
5. Update PROGRESS.md, commit with the trailer, push. Pages rebuild takes a few minutes.

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
