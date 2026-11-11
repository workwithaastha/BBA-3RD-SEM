"""ONE PDF for HRM: all four units - notes, important questions, detailed answers - plus the Exam Master appendix.
Output: Syllabus/HRM_Complete_Unitwise_Notes_Questions_Answers.pdf     Usage: python -I tools/make_hrm_complete_pdf.py
"""
import sys
from html import escape as e
from pathlib import Path

import pymupdf

sys.path.insert(0, str(Path(__file__).resolve().parent))
from make_hrm_unit_pdfs import CSS, UNITS, W, data, where  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "Syllabus" / "HRM_Complete_Unitwise_Notes_Questions_Answers.pdf"
TMP = ROOT / "Syllabus" / "hrm_complete.tmp.pdf"
EXTRA_CSS = """
.unit{font-size:26pt;color:#fff;background:#4c1d95;padding:10pt 12pt;margin:0 0 4pt 0}
.unitsub{font-size:11pt;color:#4c1d95;margin:0 0 8pt 0}
"""


def strip_next(html):
    cut = html.rfind('<div class="nextsteps">')
    return html[:cut] if cut > 0 else html


parts = ["<h1>Human Resource Management</h1><p class='sub'><b>Complete unit-wise study book</b> - BBA III Semester · CSJM University · Core Course II (25 + 75 marks)</p>"
         "<div class='box'><b>What is inside</b><ul>"
         "<li>For each of the 4 units: <b>Part A Notes</b> · <b>Part B Important questions</b> · <b>Part C Detailed model answers</b> (2, 3, 5, 6 and 10 marks).</li>"
         "<li><b>Appendix - Exam Master:</b> answer framework, priority topics, mnemonic bank, flowcharts and the last-night plan.</li>"
         "<li>Sources: your syllabus image, the HRM Four Units Comprehensive Notes PDF, Important Questions PDF, Unit 3 Performance Appraisal slides and Notes of Unit - 4.</li></ul>"
         "<b>Exam:</b> Wed 25 Nov 2026, 11:30 AM - 1:30 PM, written (2 hours).</div>"
         "<h2>Contents</h2><ol>" + "".join(f"<li><b>{e(ql)}</b> - {e(title)}</li>" for ql, ml, title, iqs in UNITS) + "<li><b>Appendix</b> - Exam Master</li></ol>"]
total_q = 0
for i, (ql, ml, title, iqs) in enumerate(UNITS):
    qas = [q for q in data["qa"] if q["u"] == ql]
    total_q += len(qas)
    parts.append(f"<p class='unit' style='page-break-before:always'>{e(ql.upper())}</p><p class='unitsub'>{e(title)}</p>")
    parts.append("<p class='part'>Part A - Notes</p>" + strip_next(data["notes"][i]["html"]))
    parts.append("<p class='part' style='page-break-before:always'>Part B - Important questions</p><ol>" + "".join(f"<li>{e(q)}</li>" for q in iqs) + "</ol>")
    parts.append(f"<p class='part' style='page-break-before:always'>Part C - Detailed model answers ({len(qas)})</p>")
    for k, q in enumerate(qas, 1):
        parts.append(f"<h3 class='qh'>Q{k}. [{q['m']} marks] {q['q']}</h3><p class='tag'>{e(q['t'])}</p>{q['a']}")
        if q.get("ms"):
            parts.append(f"<div class='ms'><b>Marking scheme:</b> {q['ms']}</div>")
        if q.get("src"):
            parts.append(f"<p class='src'>Asked in: {q['src']}</p>")
parts.append("<p class='unit' style='page-break-before:always'>APPENDIX</p><p class='unitsub'>Exam Master - framework, mnemonics, flowcharts, last-night plan</p>" + strip_next(data["notes"][4]["html"]))

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
    pg.insert_text((W.width / 2 - 70, W.height - 20), f"HRM Complete Study Book - page {n}/{len(d)}", fontsize=8, color=(0.4, 0.4, 0.4))
d.save(str(OUT), garbage=3, deflate=True)
pages = len(d)
d.close()
try:
    TMP.unlink()
except OSError:
    pass
print(OUT.name, pages, "pages,", total_q, "detailed answers")
