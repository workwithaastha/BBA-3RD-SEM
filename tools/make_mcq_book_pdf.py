"""ONE PDF with ALL MCQs of a subject, grouped by unit/topic, each with answer + why (and why the others are wrong).
Usage: python -I tools/make_mcq_book_pdf.py <subject-id> <File prefix> "<Title>"   e.g.  office-mgmt Office_Management "Office Management"
Output: MCQ pdf/<prefix>_All_Units_MCQ_with_Answers.pdf
"""
import json
import subprocess
import sys
from html import escape as e
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parent.parent
SID, PREFIX, TITLE = sys.argv[1], sys.argv[2], sys.argv[3]
NODE = (
    "const fs=require('fs'),path=require('path');global.window={};"
    "const html=fs.readFileSync('site/index.html','utf8');"
    "for(const m of html.matchAll(/<script src=\"((?:data|js)\/[^\"]+)\"/g)){if(!m[1].startsWith('data/'))continue;try{require(path.resolve('site',m[1]))}catch(e){}}"
    "console.log(JSON.stringify(window.SUBJECTS['" + SID + "'].mcqs));"
)
Q = json.loads(subprocess.run(["node", "-e", NODE], cwd=ROOT, capture_output=True, text=True, encoding="utf-8").stdout)
OUT = ROOT / "MCQ pdf" / f"{PREFIX}_All_Units_MCQ_with_Answers.pdf"
TMP = OUT.with_suffix(".tmp.pdf")
L = "ABCD"
CSS = """
body{font-family:sans-serif;font-size:10pt;line-height:1.3}
h1{font-size:24pt;color:#4338ca;margin:0}
h2{font-size:16pt;color:#4338ca;margin:10pt 0 4pt;border-left:8px solid #4338ca;padding-left:8pt}
h3{font-size:11.5pt;color:#334155;margin:8pt 0 2pt}
.sub{color:#475569}
.q{margin:7pt 0 1pt}
.c{margin:2pt 0;padding:0 0 0 6pt;border-left:3px solid #94a3b8;font-size:9pt}
.o{margin:0 0 0 14pt}
.a{margin:2pt 0 0 14pt;color:#166534;font-weight:bold}
.w{margin:0 0 0 14pt;color:#475569;font-size:9pt}
.box{border-left:3px solid #6366f1;padding:2pt 0 2pt 8pt;margin:6pt 0}
"""
units = []
for q in Q:
    if q["u"] not in units:
        units.append(q["u"])
parts = [f"<h1>{e(TITLE)} - All MCQs with Answers</h1><p class='sub'>{len(Q)} questions · {len(units)} units · answer, reason and why the other options are wrong after every question</p>"
         "<div class='box'><b>How to use:</b> cover the green answer line, choose an option, then check. Questions are grouped by unit and topic. Answers marked in green; the reasons help you understand, not just memorise.</div><h3>Contents</h3><p>"
         + "<br>".join(f"{e(u)} - {sum(1 for q in Q if q['u'] == u)} questions" for u in units) + "</p>"]
n = 0
for u in units:
    parts.append(f"<h2 style='page-break-before:always'>{e(u)}</h2>")
    last = None
    for q in [x for x in Q if x["u"] == u]:
        if q["t"] != last:
            parts.append(f"<h3>{e(q['t'])}</h3>")
            last = q["t"]
        n += 1
        if q.get("c"):
            parts.append(f"<p class='c'><b>Case:</b> {e(q['c'])}</p>")
        parts.append(f"<p class='q'><b>{n}.</b> {e(q['q'])}</p>" + "".join(f"<p class='o'>{L[k]}. {e(o)}</p>" for k, o in enumerate(q["o"])))
        parts.append(f"<p class='a'>Answer: {L[q['a']]}. {e(q['o'][q['a']])}</p>")
        why = (q.get("e") or "").replace("(?) Not sure - check with your teacher. ", "")
        if why:
            parts.append(f"<p class='w'><b>Why:</b> {e(why)}</p>")
        for k, r in enumerate(q.get("w") or []):
            if r:
                parts.append(f"<p class='w'>{L[k]} is wrong: {e(r)}</p>")
# quick answer key
cells = [f"{i}.&nbsp;<b>{L[q['a']]}</b>" for i, q in enumerate(Q, 1)]
rows = "".join("<tr>" + "".join(f"<td style='padding:1pt 6pt;white-space:nowrap'>{c}</td>" for c in cells[r::30]) + "</tr>" for r in range(30))
parts.append(f"<h2 style='page-break-before:always'>Quick answer key (all {len(Q)})</h2><table>{rows}</table>")
W = pymupdf.paper_rect("a4")
story = pymupdf.Story(html="<html><body>" + "".join(parts) + "</body></html>", user_css=CSS)
wr = pymupdf.DocumentWriter(str(TMP))
more = 1
while more:
    dev = wr.begin_page(W)
    more, _ = story.place(W + (36, 40, -36, -40))
    story.draw(dev)
    wr.end_page()
wr.close()
d = pymupdf.open(TMP)
for i, p in enumerate(d, 1):
    p.insert_text((W.width / 2 - 60, W.height - 20), f"{TITLE} MCQs - page {i}/{len(d)}", fontsize=8, color=(0.4, 0.4, 0.4))
d.save(str(OUT), garbage=3, deflate=True)
pages = len(d)
d.close()
try:
    TMP.unlink()
except OSError:
    pass
print(OUT.name, pages, "pages,", len(Q), "MCQs,", len(units), "units")
