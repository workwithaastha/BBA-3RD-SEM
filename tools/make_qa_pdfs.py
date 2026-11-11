"""Written exam Q&A PDF for one subject (all model answers, by unit, with marks and marking scheme).
Usage: python -I tools/make_qa_pdfs.py <subject-id> <Prefix>    e.g.  hrm HRM
Output: Written QA pdf/<Prefix>_Written_QA.pdf
"""
import json
import re
import subprocess
import sys
from html import escape as e
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parent.parent
SID, PREFIX = sys.argv[1], sys.argv[2]
NODE = (
    "const fs=require('fs'),path=require('path');global.window={};const dir='site';"
    "const html=fs.readFileSync('site/index.html','utf8');"
    "for(const m of html.matchAll(/<script src=\"((?:data|js)\\/[^\"]+)\"/g)){if(!(m[1].startsWith('data/')||m[1]==='js/examqa.js'))continue;require(path.resolve(dir,m[1]));}"
    "console.log(JSON.stringify({title:window.SUBJECTS['" + SID + "'].title,qa:window.ExamQA.data['" + SID + "']||[]}));"
)
raw = subprocess.run(["node", "-e", NODE], cwd=ROOT, capture_output=True, text=True, encoding="utf-8").stdout
data = json.loads(raw)
title, qa = data["title"], data["qa"]
if not qa:
    sys.exit("no written Q&A for " + SID)
OUTDIR = ROOT / "Written QA pdf"
OUTDIR.mkdir(exist_ok=True)
OUT = OUTDIR / f"{PREFIX}_Written_QA.pdf"
TMP = OUTDIR / f"{PREFIX}.tmp.pdf"
STAR = {3: "***", 2: "**", 1: "*"}

CSS = """
body{font-family:sans-serif;font-size:10pt;line-height:1.35}
h1{font-size:22pt;color:#4338ca;margin:0}
h2{font-size:15pt;color:#4338ca;margin:12pt 0 4pt}
h3{font-size:11pt;margin:9pt 0 1pt;color:#111}
h4{font-size:10.5pt;margin:5pt 0 1pt;color:#334155}
.sub{color:#475569}
.tag{font-size:8.5pt;color:#64748b;margin:0 0 3pt 0}
.ms{margin:3pt 0;padding:0 0 0 6pt;border-left:3px solid #10b981;font-size:9pt;color:#065f46}
.src{margin:2pt 0 8pt 0;font-size:8.5pt;color:#64748b}
.box{border-left:3px solid #6366f1;padding:2pt 0 2pt 8pt;margin:6pt 0}
.formula{font-family:monospace;padding:3pt;border-left:3px solid #94a3b8}
.eg{margin:3pt 0;padding:0 0 0 6pt;border-left:3px solid #f59e0b;font-size:9.5pt}
.diag{margin:3pt 0;padding:0 0 0 6pt;border-left:3px solid #94a3b8}
table{border-collapse:collapse;margin:3pt 0}
th{border:1px solid #94a3b8;padding:2pt 5pt;text-align:left;font-size:9pt}
td{border:1px solid #cbd5e1;padding:2pt 5pt;font-size:9pt}
ul,ol{margin:2pt 0 2pt 0}
"""

units = []
for q in qa:
    if q["u"] not in units:
        units.append(q["u"])
n = len(qa)
parts = [f"<h1>{e(title)} - Written Exam Q&amp;A</h1><p class='sub'>{n} model answers by unit, with marks, marking scheme and where each question was asked</p>"
         "<div class='box'><b>How to use:</b> 2 marks = definition + 1 point (3-4 lines) · 3 marks = intro + 3 points · 5-6 marks = intro + 5-6 headed points + example/table · 10 marks = intro, headings, table/diagram, example, conclusion. "
         "<b>Stars:</b> *** asked in your PDFs (very likely), ** core syllabus, * possible. Answers marked [answer from standard knowledge] are not in your notes - check them with class notes.</div>"]
k = 0
for u in units:
    parts.append(f"<h2>{e(u)}</h2>")
    for q in sorted([x for x in qa if x["u"] == u], key=lambda x: (x["t"], x["m"])):
        k += 1
        parts.append(f"<h3>Q{k}. [{q['m']} marks] {q['q']}</h3><p class='tag'>{e(q['t'])} · {STAR[q['p']]}</p>{q['a']}")
        if q.get("ms"):
            parts.append(f"<div class='ms'><b>Marking scheme:</b> {q['ms']}</div>")
        if q.get("src"):
            parts.append(f"<p class='src'>Asked in: {q['src']}</p>")

html = "<html><body>" + "".join(parts) + "</body></html>"
html = re.sub(r"<b>\s*</b>", "", html)
W = pymupdf.paper_rect("a4")
where = W + (36, 40, -36, -40)
story = pymupdf.Story(html=html, user_css=CSS)
writer = pymupdf.DocumentWriter(str(TMP))
more = 1
while more:
    dev = writer.begin_page(W)
    more, _ = story.place(where)
    story.draw(dev)
    writer.end_page()
writer.close()
d = pymupdf.open(TMP)
for i, p in enumerate(d, 1):
    p.insert_text((W.width / 2 - 55, W.height - 20), f"{title} - Written Q&A - page {i}/{len(d)}", fontsize=8, color=(0.4, 0.4, 0.4))
d.save(str(OUT), garbage=3, deflate=True)
pages = len(d)
d.close()
try:
    TMP.unlink()
except OSError:
    pass
print(OUT.name, pages, "pages,", n, "answers")
