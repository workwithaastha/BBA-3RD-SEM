# Progress

| Phase | Status |
|---|---|
| 0 Setup (folder fix, Agent.md) | done |
| 1 Site skeleton | done |
| 2 Finance (notes) | done, approved |
| 3 Marketing (notes) | done |
| 4 Business Environment (MCQ) | done - 800 MCQs parsed from the PDFs with answer key |
| 5 HRM (MCQ) | done - 202 MCQs (80 flagged extra, list in REVIEW_EXTRA_QUESTIONS.md) generated from PDF notes (Units 1-2 flagged "extra", no PDFs) |
| 6 Office Management (MCQ) | done - 205 MCQs generated from PDF notes |
| 7 Polish / review | pending user feedback |

## Business Environment PDFs (5/5)
UNIT 1 MCQ, UNIT 2 MCQ, UNIT 3 MCQ, UNIT 4 MCQ (case-based) parsed by `tools/parse_be.py` (200 each, all with answers, validated). UNIT 3 BE.pdf = ethics slides (read; coverage matches Unit 3 MCQs, no separate notes page).

## HRM PDFs (4/4; Performance_Appraisal duplicate is identical)
- Important Questions.pdf (topic list, Units 1-4)
- Unit 3 - Performance Appraisal (PA, careers, succession)
- Notes of Unit - 4 (job evaluation, compensation, IR, grievance)
Gaps: no notes for Unit 1, Unit 2, T&D, wage concepts (fair/living wage, wage boards). Those MCQs are standard knowledge and tagged "extra: not in PDFs".

## Office Management PDFs (7/7)
OM Unit 1, UNIT 1 PPT, Office_Automation_Secretarial_Practices, Office_Forms_Record_Management (+ Detailed Notes), Unit4_Office_Management, ASSIGNMENT-2 (AI assignment, not MCQ material).
Unit numbering assumed: 1 office basics/filing, 2 automation & secretarial, 3 forms & records, 4 company office procedures & meetings.

## Rebuild
- BE: `python tools/parse_be.py`
- HRM + OM: edit `tools/data_hrm.py` / `tools/data_om.py`, then `python tools/build_mcq.py`
