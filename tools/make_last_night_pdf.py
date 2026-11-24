"""Last-night revision sheet in the NEW exam pattern (A: 9 short x 5, B: any 1 of 4 x 15, C: any 1 of 4 x 15).
Per unit: the most-predicted short questions (with a key-point line) and the likely long questions (with the answer skeleton: headings and tables to write).
Usage: python -I tools/make_last_night_pdf.py <subject-id> <Folder/File prefix>   e.g.  hrm HRM
Output: MCQ pdf/<prefix>/<prefix>_New_Pattern_Last_Night_Sheet.pdf
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
META = {"finance": ("Business Finance", "Mon 23 Nov 2026"), "hrm": ("Human Resource Management", "Wed 25 Nov 2026"), "marketing": ("Marketing Management", "Thu 26 Nov 2026")}
SUBJ, DATE = META[SID]
NODE = r"""
const fs=require('fs'),path=require('path');global.window={};
const html=fs.readFileSync('site/index.html','utf8');
for(const m of html.matchAll(/<script src="((?:data|js)\/[^"]+)"/g)){if(!(m[1].startsWith('data/')||m[1]==='js/examqa.js'))continue;require(path.resolve('site',m[1]));}
const bank=window.ExamQA.data[process.argv[1]]||[];
const txt=(h)=>h.replace(/<\/(p|li|tr|h4|div)>/g,' ').replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const heads=(h)=>{const o=[];for(const m of h.matchAll(/<h4>(.*?)<\/h4>/g))o.push(txt(m[1]));for(const m of h.matchAll(/<tr><th>(.*?)<\/th>(.*?)<\/tr>/g)){o.push('Table: '+txt(m[0]).slice(0,60));}return [...new Set(o)].slice(0,12)};
const out=bank.filter(q=>!q.num).map(q=>({m:q.m,u:q.u,p:q.p||0,q:txt(q.q),key:(t=>t.length>230?t.slice(0,230).replace(/\s+\S*$/,'')+' ...':t)(txt(q.a)),sk:heads(q.a)}));
console.log(JSON.stringify(out));
"""
raw = subprocess.run(["node", "-e", NODE, SID], cwd=ROOT, capture_output=True, text=True, encoding="utf-8")
Q = json.loads(raw.stdout)
UNITS = ["Unit I", "Unit II", "Unit III", "Unit IV"]
CSS = """
body{font-family:sans-serif;font-size:10pt;line-height:1.35}
h1{font-size:20pt;color:#4338ca;margin:0}
h2{font-size:14pt;color:#4338ca;margin:12pt 0 3pt;border-bottom:2px solid #4338ca}
h3{font-size:11pt;color:#0f766e;margin:8pt 0 2pt}
p{margin:2pt 0}
.sub{color:#475569}
.box{border-left:3px solid #6366f1;padding:2pt 0 2pt 8pt;margin:6pt 0}
table{border-collapse:collapse;margin:3pt 0}
th{border:1px solid #94a3b8;padding:3pt 5pt;text-align:left;font-size:9pt;background:#eef2ff}
td{border:1px solid #cbd5e1;padding:3pt 5pt;font-size:9pt;vertical-align:top}
.sk{font-size:9pt;color:#334155}
"""
W = pymupdf.paper_rect("a4")
parts = [f"<h1>{e(SUBJ)} - Last-night sheet</h1><p class='sub'>NEW pattern · 75 marks · 2 hours · exam {DATE}</p>",
         "<div class='box'><b>Pattern:</b> Section A - Q1 (a)-(i): <b>nine compulsory</b> short answers, 5 marks each (45) · Section B - attempt <b>any ONE</b> of 4 long questions from Units I-II (15) · Section C - attempt <b>any ONE</b> of 4 long questions from Units III-IV (15).<br>"
         "<b>Plan:</b> 9 short answers in about 55 minutes (6 minutes each), then 25 minutes for each long answer, 15 minutes to check. Write headings, a table or flow and one example in every answer. For a numerical write the formula, the substitution and the final answer.</div>"]
for u in UNITS:
    shorts = sorted([x for x in Q if x["u"] == u and x["m"] in (2, 3, 5, 6, 6.25)], key=lambda x: (-x["p"], x["m"]))[:16]
    longs = [x for x in Q if x["u"] == u and x["m"] in (10, 12.5, 15)]
    longs.sort(key=lambda x: -x["p"])
    parts.append(f"<h2>{u}</h2><h3>Section A - likely short parts (5 marks)</h3><table><tr><th>Question</th><th>Key points to write (start)</th></tr>")
    for x in shorts:
        parts.append(f"<tr><td>{e(x['q'][:150])}</td><td>{e(x['key'])}</td></tr>")
    parts.append("</table>")
    if longs:
        parts.append(f"<h3>Section {'B' if u in UNITS[:2] else 'C'} - likely long questions (15 marks) and the answer skeleton</h3><table><tr><th>Question</th><th>Skeleton (write these headings)</th></tr>")
        for x in longs:
            parts.append(f"<tr><td>{e(x['q'][:200])}</td><td class='sk'>{' &middot; '.join(e(h) for h in x['sk']) or '-'}</td></tr>")
        parts.append("</table>")
html = "<html><body>" + "".join(parts) + "</body></html>"
out = ROOT / "MCQ pdf" / PREFIX / f"{PREFIX}_New_Pattern_Last_Night_Sheet.pdf"
tmp = out.with_suffix(".tmp.pdf")
story = pymupdf.Story(html=html, user_css=CSS)
wr = pymupdf.DocumentWriter(str(tmp))
more = 1
while more:
    dev = wr.begin_page(W)
    more, _ = story.place(W + (36, 40, -36, -40))
    story.draw(dev)
    wr.end_page()
wr.close()
d = pymupdf.open(tmp)
for i, pg in enumerate(d, 1):
    pg.insert_text((W.width / 2 - 70, W.height - 20), f"{SUBJ} - last-night sheet - page {i}/{len(d)}", fontsize=8, color=(0.4, 0.4, 0.4))
d.save(str(out), garbage=3, deflate=True)
print(out.name, len(d), "pages")
d.close()
try:
    tmp.unlink()
except OSError:
    pass
