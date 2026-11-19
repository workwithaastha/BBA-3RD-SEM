"""NEW complete HRM book -> Complete Notes/HRM_Complete_Notes_All_Units.pdf
Per unit: Part A notes (the syllabus notes + the "complete notes" page built from the new files) · Part B important questions · Part C detailed answers; appendix: Exam Master.
Usage: python -I tools/make_hrm_complete_notes.py
"""
import json
import subprocess
import sys
from html import escape as e
from pathlib import Path

import pymupdf

sys.path.insert(0, str(Path(__file__).resolve().parent))
from make_hrm_unit_pdfs import CSS, UNITS, W, where  # noqa: E402  (UNITS = per-unit important questions)

ROOT = Path(__file__).resolve().parent.parent
OUTDIR = ROOT / "Complete Notes"
OUTDIR.mkdir(exist_ok=True)
OUT = OUTDIR / "HRM_Complete_Notes_All_Units.pdf"
TMP = OUTDIR / "hrm_complete_notes.tmp.pdf"
EXTRA_CSS = """
.unit{font-size:26pt;font-weight:bold;color:#4c1d95;border-left:10px solid #4c1d95;padding:4pt 0 4pt 10pt;margin:0 0 4pt 0}
.unitsub{font-size:11pt;color:#4c1d95;margin:0 0 8pt 0}
"""
NODE = (
    "const fs=require('fs'),path=require('path');global.window={};"
    "const html=fs.readFileSync('site/index.html','utf8');"
    "for(const m of html.matchAll(/<script src=\"((?:data|js)\\/[^\"]+)\"/g)){if(!(m[1].startsWith('data/')||m[1]==='js/examqa.js'))continue;require(path.resolve('site',m[1]));}"
    "const s=window.SUBJECTS.hrm;console.log(JSON.stringify({units:s.units,mcqs:s.mcqs.length,qa:window.ExamQA.data.hrm}));"
)
data = json.loads(subprocess.run(["node", "-e", NODE], cwd=ROOT, capture_output=True, text=True, encoding="utf-8").stdout)
units = {u["id"]: u for u in data["units"]}


def strip_next(html):
    cut = html.rfind('<div class="nextsteps">')
    return html[:cut] if cut > 0 else html


parts = ["<h1>Human Resource Management</h1><p class='sub'><b>Complete notes - all four units</b> · BBA III Semester · Core Course II (F010302TN) · 25 + 75 marks</p>"
         "<div class='box'><b>What is inside</b><ul>"
         "<li>For each of the 4 units: <b>Part A Notes</b> (syllabus notes + the complete-notes page built from your new files) · <b>Part B Important questions</b> · <b>Part C Detailed model answers</b> (2, 3, 5, 6 and 10 marks).</li>"
         "<li><b>Appendix - Exam Master:</b> answer framework, priority topics, mnemonic bank, flowcharts, last-night plan.</li>"
         f"<li>Also on the website: {data['mcqs']} practice MCQs with reasons for every option.</li>"
         "<li><b>Sources used:</b> your syllabus image; HRM_Four_Units_Comprehensive_Notes; HRM_Complete_Notes-DEQ_s-FM (BBA Sem 3 notes); the unit slide decks (Introduction to HRM, Unit 2 Talent Acquisition, Unit 3 Development and Performance Management, Unit 4 Compensation, Welfare and IR); Notes of Unit 4; Unit 3 Performance Appraisal slides; the Important Questions lists.</li></ul>"
         "<b>Exam:</b> Wed 25 Nov 2026, 11:30 AM - 1:30 PM, written (2 hours).</div>"
         "<h2>Contents</h2><ol>" + "".join(f"<li><b>{e(ql)}</b> - {e(title)}</li>" for ql, ml, title, iqs in UNITS) + "<li><b>Appendix</b> - Exam Master</li></ol>"]
total_q = 0
for i, (ql, ml, title, iqs) in enumerate(UNITS, 1):
    qas = [q for q in data["qa"] if q["u"] == ql]
    total_q += len(qas)
    parts.append(f"<p class='unit' style='page-break-before:always'>{e(ql.upper())}</p><p class='unitsub'>{e(title)}</p>")
    parts.append("<p class='part'>Part A - Notes</p>")
    for uid in (f"u{i}", f"u{i}-new"):
        if uid in units:
            parts.append(f"<h2>{units[uid]['title']}</h2>" + strip_next(units[uid]["html"]))
    parts.append("<p class='part' style='page-break-before:always'>Part B - Important questions</p><ol>" + "".join(f"<li>{e(q)}</li>" for q in iqs) + "</ol>")
    parts.append(f"<p class='part' style='page-break-before:always'>Part C - Detailed model answers ({len(qas)})</p>")
    for k, q in enumerate(sorted(qas, key=lambda x: (x["t"], x["m"])), 1):
        parts.append(f"<h3 class='qh'>Q{k}. [{q['m']} marks] {q['q']}</h3><p class='tag'>{e(q['t'])}</p>{q['a']}")
        if q.get("ms"):
            parts.append(f"<div class='ms'><b>Marking scheme:</b> {q['ms']}</div>")
        if q.get("src"):
            parts.append(f"<p class='src'>Asked in: {q['src']}</p>")
parts.append("<p class='unit' style='page-break-before:always'>APPENDIX</p><p class='unitsub'>Exam Master - framework, mnemonics, flowcharts, last-night plan</p>" + strip_next(units["exam-master"]["html"]))

html = "<html><body>" + "".join(parts) + "</body></html>"
story = pymupdf.Story(html=html, user_css=CSS + EXTRA_CSS)
wr = pymupdf.DocumentWriter(str(TMP))
more = 1
while more:
    dev = wr.begin_page(W)
    more, _ = story.place(where)
    story.draw(dev)
    wr.end_page()
wr.close()
d = pymupdf.open(TMP)
for n, pg in enumerate(d, 1):
    pg.insert_text((W.width / 2 - 70, W.height - 20), f"HRM Complete Notes - page {n}/{len(d)}", fontsize=8, color=(0.4, 0.4, 0.4))
d.save(str(OUT), garbage=3, deflate=True)
pages = len(d)
d.close()
try:
    TMP.unlink()
except OSError:
    pass
print(OUT.name, pages, "pages,", total_q, "detailed answers")
