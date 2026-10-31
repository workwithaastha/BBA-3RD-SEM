# Agent.md — Rules & Working

Single source of truth for how Claude works in this repo. Read first every session. Update when rules change.

## Goal
Exam-prep website (pure HTML + CSS + JS, no frameworks, no build step) for BBA 3rd Sem.

## Subjects & Folders
| Folder | Subject | Output type |
|---|---|---|
| `FINANCE/` | Business Finance | **Notes** |
| `MARKETING/` | Marketing Management | **Notes** |
| `BUSINESS ENV/` | Business Environment | **MCQ** (exam is MCQ) |
| `HRM/` | Human Resource Management | **MCQ** |
| `OFFICE MANG/` | Office Management | **MCQ** |

Each folder holds the source PDFs (notes, assignments, MCQs, formula sheets) for that subject.

## Rules
1. **Folder names** must be spelled correctly. (Fixed: `BUSNIESS ENV` → `BUSINESS ENV`.)
2. **One subject at a time**, in phases. Finish + commit a subject before the next.
3. **Analyse every PDF in the subject folder one by one** (`pdftotext -layout`). Do not skip files. Log each file as read in `PROGRESS.md`.
4. **Ask the user** when anything is unclear (missing units, conflicting content, scanned/unreadable PDF, format choice). Do not guess.
5. **Never invent facts.** Content must come from the PDFs. If extra knowledge is added, mark it clearly as `[extra]`.
6. **Notes subjects (Finance, Marketing)**: unit-wise structured notes — definitions, key points, formulas, diagrams-as-text, solved examples, quick-revision box, important Qs.
7. **MCQ subjects (BE, HRM, OM)**: question bank in the exam style — 4 options, correct answer, short explanation, unit tag. Quiz mode with score, shuffle, unit filter, wrong-answer review.
8. **Tech**: HTML + CSS + vanilla JS only. Content as JS/JSON data files under `site/data/`. Must work by opening `index.html` (no server needed). Mobile friendly. Light/dark.
9. **Git**: commit + push to `origin main` after every major change (rename, each phase, each subject).
10. **Every commit** ends with the co-author trailer:
    `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`
11. Commit messages: short, conventional (`feat:`, `docs:`, `chore:`).
12. Never commit secrets. Keep original PDFs untouched.

## Phases
| Phase | Work |
|---|---|
| 0 | Fix folder name, Agent.md, push |
| 1 | Website skeleton (`site/`): home, nav, theme, notes viewer, quiz engine |
| 2 | Subject 1 content |
| 3 | Subject 2 content |
| 4 | Subject 3 content |
| 5 | Subject 4 content |
| 6 | Subject 5 content |
| 7 | Polish: search, bookmarks, formula sheet, final test |

Subject order decided with user (update here): 1 Finance → (rest TBD by user). MCQ: PDF MCQs + generated ones marked `generated:true`. Language: English.

## Layout
```
BBA-3RD-SEM/
├── Agent.md          # this file
├── PROGRESS.md       # per-PDF read log + phase status
├── <SUBJECT FOLDERS> # source PDFs
└── site/
    ├── index.html
    ├── css/
    ├── js/
    └── data/         # notes + mcq content per subject
```
