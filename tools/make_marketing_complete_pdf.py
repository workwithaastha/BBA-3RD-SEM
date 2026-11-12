"""ONE PDF for Marketing Management: all four units - notes, important questions, detailed answers - plus the Exam Master appendix.
Output: Syllabus/Marketing_Complete_Unitwise_Notes_Questions_Answers.pdf     Usage: python -I tools/make_marketing_complete_pdf.py
"""
import json
import subprocess
import sys
from html import escape as e
from pathlib import Path

import pymupdf

sys.path.insert(0, str(Path(__file__).resolve().parent))
from make_hrm_unit_pdfs import CSS, W, where  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "Syllabus" / "Marketing_Complete_Unitwise_Notes_Questions_Answers.pdf"
TMP = ROOT / "Syllabus" / "marketing_complete.tmp.pdf"
EXTRA_CSS = """
.unit{font-size:26pt;font-weight:bold;color:#9d174d;border-left:10px solid #9d174d;padding:4pt 0 4pt 10pt;margin:0 0 4pt 0}
.unitsub{font-size:11pt;color:#9d174d;margin:0 0 8pt 0}
"""
NODE = (
    "const fs=require('fs'),path=require('path');global.window={};"
    "const html=fs.readFileSync('site/index.html','utf8');"
    "for(const m of html.matchAll(/<script src=\"((?:data|js)\\/[^\"]+)\"/g)){if(!(m[1].startsWith('data/')||m[1]==='js/examqa.js'))continue;require(path.resolve('site',m[1]));}"
    "const s=window.SUBJECTS.marketing;console.log(JSON.stringify({units:s.units,qa:window.ExamQA.data.marketing,exp:window.EXPECTED.marketing}));"
)
data = json.loads(subprocess.run(["node", "-e", NODE], cwd=ROOT, capture_output=True, text=True, encoding="utf-8").stdout)
units = {u["id"]: u for u in data["units"]}

UNITS = [  # (Q&A unit label, note id prefix, title, heading prefix in EXPECTED)
    ("Unit I", "u1-", "Introduction to Marketing, Core Concepts, Orientations, Green and Digital Marketing", "Unit I"),
    ("Unit II", "u2-", "Consumer Behaviour, Marketing Information System and Marketing Research", "Unit II"),
    ("Unit III", "u3-", "Segmentation, Targeting, Positioning and Value Proposition", "Unit III"),
    ("Unit IV", "u4-", "Marketing Mix: Product, Price, Place, Promotion", "Unit IV"),
]


def strip_next(html):
    cut = html.rfind('<div class="nextsteps">')
    return html[:cut] if cut > 0 else html


parts = ["<h1>Marketing Management</h1><p class='sub'><b>Complete unit-wise study book</b> - BBA III Semester · Core Course III (F010303TN) · 25 + 75 marks</p>"
         "<div class='box'><b>What is inside</b><ul>"
         "<li>For each of the 4 units: <b>Part A Notes</b> · <b>Part B Important questions</b> · <b>Part C Detailed model answers</b> (2, 3, 5, 6 and 10 marks).</li>"
         "<li><b>Appendix - Exam Master:</b> answer framework, syllabus map, mnemonic bank, flowcharts and the last-night plan.</li>"
         "<li>Sources: your syllabus image (marketing.jpeg) and the Marketing PDFs for Units I-III. Unit IV (4Ps) has no notes PDF: it follows the syllabus topics and standard textbooks - check it with your class notes.</li></ul>"
         "<b>Exam:</b> Thu 26 Nov 2026, 11:30 AM - 1:30 PM, written (2 hours). Lectures: Unit I 11 · Unit II 11 · Unit III 10 · Unit IV 13.</div>"
         "<h2>Contents</h2><ol>" + "".join(f"<li><b>{e(ql)}</b> - {e(title)}</li>" for ql, pre, title, h in UNITS) + "<li><b>Appendix</b> - Exam Master</li></ol>"]
total_q = 0
for ql, pre, title, hp in UNITS:
    qas = [q for q in data["qa"] if q["u"] == ql]
    total_q += len(qas)
    parts.append(f"<p class='unit' style='page-break-before:always'>{e(ql.upper())}</p><p class='unitsub'>{e(title)}</p>")
    parts.append("<p class='part'>Part A - Notes</p>")
    for uid, u in units.items():
        if uid.startswith(pre):
            parts.append(f"<h2>{u['title']}</h2>" + strip_next(u["html"]))
    parts.append("<p class='part' style='page-break-before:always'>Part B - Important questions</p><ol>")
    for blk in data["exp"]:
        if blk["h"].startswith(hp) or blk["h"].startswith("Unit " + hp.split()[-1]):
            parts.append("".join(f"<li>{e(q)}</li>" for q in blk["q"]))
    parts.append("</ol>")
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
    pg.insert_text((W.width / 2 - 85, W.height - 20), f"Marketing Complete Study Book - page {n}/{len(d)}", fontsize=8, color=(0.4, 0.4, 0.4))
d.save(str(OUT), garbage=3, deflate=True)
pages = len(d)
d.close()
try:
    TMP.unlink()
except OSError:
    pass
print(OUT.name, pages, "pages,", total_q, "detailed answers")
