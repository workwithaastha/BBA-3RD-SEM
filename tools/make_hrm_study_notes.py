"""HRM STUDY NOTES - one PDF of proper notes only (no MCQs, no questions) -> Complete Notes/HRM_Study_Notes.pdf
Content: tools/hrm_study_content1.py (Units I-II) and hrm_study_content2.py (Units III-IV).  Usage: python -I tools/make_hrm_study_notes.py
"""
import sys
from html import escape as e
from pathlib import Path

import pymupdf

sys.path.insert(0, str(Path(__file__).resolve().parent))
import hrm_study_content3  # noqa: E402,F401  (extends the units with the extra topics)
from hrm_study_content1 import UNIT1, UNIT2  # noqa: E402
from hrm_study_content2 import UNIT3, UNIT4  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
OUTDIR = ROOT / "Complete Notes"
OUTDIR.mkdir(exist_ok=True)
OUT = OUTDIR / "HRM_Study_Notes.pdf"
TMP = OUTDIR / "hrm_study.tmp.pdf"
CSS = """
body{font-family:sans-serif;font-size:10.5pt;line-height:1.42}
h1{font-size:26pt;color:#4338ca;margin:0}
h2{font-size:15pt;color:#4338ca;margin:14pt 0 4pt}
h4{font-size:11pt;color:#334155;margin:9pt 0 2pt}
p{margin:3pt 0}
.sub{color:#475569;font-size:11pt}
.unit{font-size:28pt;font-weight:bold;color:#4c1d95;border-left:10px solid #4c1d95;padding:4pt 0 4pt 10pt;margin:0 0 4pt 0}
.unitsub{font-size:13pt;color:#4c1d95;margin:0 0 2pt 0}
.lect{color:#64748b;font-size:9.5pt;margin:0 0 8pt 0}
.box{border-left:3px solid #6366f1;padding:2pt 0 2pt 8pt;margin:6pt 0}
.eg{border-left:3px solid #f59e0b;padding:2pt 0 2pt 8pt;margin:6pt 0}
table{border-collapse:collapse;margin:4pt 0}
th{border:1px solid #94a3b8;padding:3pt 5pt;text-align:left;font-size:9.5pt}
td{border:1px solid #cbd5e1;padding:3pt 5pt;font-size:9.5pt}
ul,ol{margin:2pt 0 3pt 0}
li{margin:1pt 0}
"""
UNITS = [UNIT1, UNIT2, UNIT3, UNIT4]
parts = ["<h1>Human Resource Management</h1><p class='sub'><b>Study Notes</b> - BBA III Semester · Core Course II (F010302TN) · 25 + 75 marks</p>"
         "<div class='box'>Proper explanatory notes for every topic of the syllabus, unit by unit - <b>no MCQs and no questions</b>, only notes to read and understand. "
         "Prepared from your HRM folder (complete notes file, unit slides, Notes of Unit 4, Performance Appraisal slides, syllabus notes) and standard HRM textbooks "
         "(Dessler, Armstrong, Aswathappa, Flippo, Storey, Ulrich).<br><b>Exam:</b> Wed 25 Nov 2026, 11:30 AM - 1:30 PM, written, 2 hours.</div>"
         "<h2>Contents</h2>"]
for ul, title, lect, topics in UNITS:
    parts.append(f"<p><b>{e(ul)} - {e(title)}</b></p><ul>" + "".join(f"<li>{e(h)}</li>" for h, _ in topics) + "</ul>")
for ul, title, lect, topics in UNITS:
    parts.append(f"<p class='unit' style='page-break-before:always'>{e(ul)}</p><p class='unitsub'>{e(title)}</p><p class='lect'>{e(lect)}</p>")
    for h, body in topics:
        parts.append(f"<h2>{h}</h2>{body}")
html = "<html><body>" + "".join(parts) + "</body></html>"
W = pymupdf.paper_rect("a4")
where = W + (40, 44, -40, -44)
story = pymupdf.Story(html=html, user_css=CSS)
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
    pg.insert_text((W.width / 2 - 55, W.height - 22), f"HRM Study Notes - page {n}/{len(d)}", fontsize=8, color=(0.4, 0.4, 0.4))
d.save(str(OUT), garbage=3, deflate=True)
pages = len(d)
d.close()
try:
    TMP.unlink()
except OSError:
    pass
print(OUT.name, pages, "pages")
