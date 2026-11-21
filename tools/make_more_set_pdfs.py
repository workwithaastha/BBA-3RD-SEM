"""Make MORE practice sets (continuing the numbering after the existing Set_N.pdf files) of 50 MCQs each for one subject.
Usage: python -I tools/make_more_set_pdfs.py <subject-id> <Folder/File prefix> <number of new sets>   e.g.  office-mgmt Office_Management 6
Questions not yet used in any existing set come first (reading the existing PDFs), then PUT-paper questions, then re-mixed earlier questions; no repeats inside a set.
Questions are shuffled once (fixed seed), dealt into sets of 50, and never repeat between sets.
A last incomplete set (< 50) is not made. Output: MCQ pdf/<prefix>/<prefix>_Set_N.pdf
"""
import json
import random
import subprocess
import sys
from html import escape as e
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parent.parent
SID, PREFIX, NEW = sys.argv[1], sys.argv[2], int(sys.argv[3])
SIZE = 50
LETTER = "ABCD"

NODE = (
    "global.window={SUBJECTS:{}};"
    "const fs=require('fs');"
    "const fl=fs.readdirSync('site/data').sort((a,b)=>(a.includes('-mcq')?1:0)-(b.includes('-mcq')?1:0));"
    "for(const f of fl){if(/^(" + SID + "|" + SID + "-mcq|finance|marketing|finance-mcq|marketing-mcq|put-om|put-be)\\.js$/.test(f)){try{require('./site/data/'+f)}catch(e){}}}"
    "console.log(JSON.stringify(window.SUBJECTS['" + SID + "']));"
)
raw = subprocess.run(["node", "-e", NODE], cwd=ROOT, capture_output=True, text=True, encoding="utf-8").stdout
subject = json.loads(raw)
title = subject["title"]
qs = subject["mcqs"]
import re
CSS = """
body{font-family:sans-serif;font-size:10pt;line-height:1.3}
h1{font-size:22pt;color:#4338ca;margin:0}
h2{font-size:14pt;color:#4338ca;margin:10pt 0 4pt}
.sub{color:#475569}
.q{margin:7pt 0 1pt}
.c{margin:2pt 0 2pt 0;padding:0 0 0 6pt;border-left:3px solid #94a3b8;font-size:9pt}
.o{margin:0 0 0 14pt}
.w{margin:1pt 0 3pt 8pt;color:#334155;font-size:9pt}
.a{margin:5pt 0 0 0;color:#166534;font-weight:bold}
.box{border-left:3px solid #6366f1;padding:2pt 0 2pt 8pt;margin:6pt 0}
table{border-collapse:collapse}
td{padding:2pt 8pt;border:1px solid #cbd5e1}
"""


OUTDIR = ROOT / "MCQ pdf" / PREFIX
OUTDIR.mkdir(parents=True, exist_ok=True)
norm = lambda t: re.sub(r"[^a-z0-9]+", "", t.lower())
existing = sorted(OUTDIR.glob(f"{PREFIX}_Set_*.pdf"), key=lambda p: int(re.search(r"_Set_(\d+)", p.name).group(1)))
first_new = (int(re.search(r"_Set_(\d+)", existing[-1].name).group(1)) if existing else 0) + 1
seen_text = ""
for p in existing:
    with pymupdf.open(p) as d:
        seen_text += norm("".join(pg.get_text() for pg in d))
used = [q for q in qs if norm(q["q"])[:30] in seen_text]
unused = [q for q in qs if q not in used]
rnd = random.Random(11)
unused_np = [q for q in unused if q.get("u") != "PUT Paper"]
put = [q for q in unused if q.get("u") == "PUT Paper"]
rnd.shuffle(unused_np); rnd.shuffle(put); rnd.shuffle(used)
pool = unused_np + put + used
need = NEW * SIZE
while len(pool) < need:
    pool += pool[: need - len(pool)]
chunks = [pool[i * SIZE:(i + 1) * SIZE] for i in range(NEW)]
print(f"existing sets: {len(existing)}; questions used so far: {len(used)}; not used yet: {len(unused)} (PUT paper: {len(put)})")


def build(n, chunk):
    parts = [f"<h1>{e(title)} - Set {n}</h1><p class='sub'>{len(chunk)} MCQs - 1 mark each - answers and explanations are at the end</p>"
             "<div class='box'>Choose the single best option. Do not look at the last pages until you finish.</div>"]
    last_c = None
    for i, q in enumerate(chunk, 1):
        if q.get("c") and q["c"] != last_c:
            parts.append(f"<p class='c'><b>Case:</b> {e(q['c'])}</p>")
        last_c = q.get("c")
        parts.append(f"<p class='q'><b>{i}.</b> {e(q['q'])}</p>")
        parts += [f"<p class='o'>{LETTER[k]}. {e(o)}</p>" for k, o in enumerate(q["o"])]
    cells = [f"{i}. <b>{LETTER[q['a']]}</b>" for i, q in enumerate(chunk, 1)]
    rows = "".join("<tr>" + "".join(f"<td>{c}</td>" for c in cells[r::10]) + "</tr>" for r in range(10))
    parts.append(f"<h2 style='page-break-before:always'>Answer key - Set {n}</h2><table>{rows}</table>")
    parts.append("<h2>Answers with explanations</h2>")
    for i, q in enumerate(chunk, 1):
        why = (q.get("e") or "").replace("(?) Not sure - check with your teacher. ", "")
        parts.append(f"<p class='q'><b>{i}.</b> {e(q['q'])}</p><p class='a'>Answer: {LETTER[q['a']]}. {e(q['o'][q['a']])}</p>")
        if why:
            parts.append(f"<p class='w'><b>Why correct:</b> {e(why)}</p>")
        w = q.get("w") or []
        for k, r in enumerate(w):
            if r:
                parts.append(f"<p class='w'>{LETTER[k]} is wrong: {e(r)}</p>")
    return "<html><body>" + "".join(parts) + "</body></html>"


W = pymupdf.paper_rect("a4")
where = W + (36, 40, -36, -40)
for k, chunk in enumerate(chunks):
    n = first_new + k
    out = OUTDIR / f"{PREFIX}_Set_{n}.pdf"
    tmp = OUTDIR / f"{PREFIX}_Set_{n}.tmp.pdf"
    story = pymupdf.Story(html=build(n, chunk), user_css=CSS)
    writer = pymupdf.DocumentWriter(str(tmp))
    more = 1
    while more:
        dev = writer.begin_page(W)
        more, _ = story.place(where)
        story.draw(dev)
        writer.end_page()
    writer.close()
    d = pymupdf.open(tmp)
    for i, p in enumerate(d, 1):
        p.insert_text((W.width / 2 - 45, W.height - 20), f"{title} - Set {n} - page {i}/{len(d)}", fontsize=8, color=(0.4, 0.4, 0.4))
    d.save(str(out), garbage=3, deflate=True)
    pages = len(d)
    d.close()
    try:
        tmp.unlink()
    except OSError:
        pass
    print(out.name, pages, "pages,", len(chunk), "questions")
