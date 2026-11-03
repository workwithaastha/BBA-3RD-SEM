"""Physical Education PDF: all MCQs with answers + 3 predicted practice sets (with answer keys).
Reads site/data/physical-education.js. Usage: python -I tools/make_pe_pdf.py
Predicted sets = 50 questions each, no repeats between sets, taken from the topics that recur most across the 3 past papers,
same unit mix as the real paper. Questions with a doubtful answer are left out of the sets. Not a teacher guarantee.
"""
import json
import random
from collections import Counter, defaultdict
from html import escape as e
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parent.parent
js = (ROOT / "site/data/physical-education.js").read_text(encoding="utf-8")
Q = json.loads(js[js.index("mcqs: ") + 6: js.rindex("\n};")])
OUT = ROOT / "PHYSICAL_EDUCATION_MCQ_Answers_and_Predicted_Sets.pdf"
UNITS = ["Unit I", "Unit II", "Unit III", "Unit IV", "Sports & General"]
TITLES = {"Unit I": "Unit I - Physical Education", "Unit II": "Unit II - Fitness, Weight Management, Lifestyle",
          "Unit III": "Unit III - Yoga and Meditation", "Unit IV": "Unit IV - Traditional Games and Recreation",
          "Sports & General": "Sports & General (asked in the papers)"}
PER_SET = {"Unit I": 7, "Unit II": 12, "Unit III": 15, "Unit IV": 8, "Sports & General": 8}  # = 50

# ---------- predicted sets: most-repeated topics first, round-robin across topics ----------
rnd = random.Random(2026)
sets = [[], [], []]
for u in UNITS:
    pool = [q for q in Q if q["u"] == u and not q.get("k")]
    bytopic = defaultdict(list)
    for q in pool:
        bytopic[q["t"]].append(q)
    for lst in bytopic.values():
        rnd.shuffle(lst)
    weight = Counter({t: len(l) for t, l in bytopic.items()})
    order = [t for t, _ in weight.most_common()]
    picked = []
    need = PER_SET[u] * 3
    while len(picked) < need and any(bytopic.values()):
        for t in order:  # frequent topics come first and get a question every round
            if bytopic[t] and len(picked) < need:
                picked.append(bytopic[t].pop())
    for i, q in enumerate(picked):
        sets[i % 3].append(q)
for s in sets:
    s.sort(key=lambda q: (UNITS.index(q["u"]), q["t"]))

CSS = """
body{font-family:sans-serif;font-size:10pt;line-height:1.3}
h1{font-size:24pt;color:#0f766e;margin:0}
h2{font-size:15pt;color:#0f766e;border-bottom:2px solid #14b8a6;margin:10pt 0 4pt}
h3{font-size:11.5pt;color:#334155;margin:8pt 0 2pt}
.sub{color:#475569}
.q{margin:5pt 0 1pt}
.o{margin:0 0 0 14pt}
.a{margin:1pt 0 2pt 14pt;color:#166534;font-weight:bold}
.w{margin:0 0 4pt 14pt;color:#475569;font-size:9pt}
.k{color:#b45309}
.box{border:1px solid #14b8a6;padding:6pt;margin:8pt 0;background:#f0fdfa}
table{border-collapse:collapse}
td{padding:2pt 6pt;border:1px solid #cbd5e1}
"""


def qhtml(i, q, answers):
    o = "".join(f'<p class="o">{"ABCD"[k]}. {e(t)}</p>' for k, t in enumerate(q["o"]))
    h = f'<p class="q"><b>{i}.</b> {e(q["q"])}</p>{o}'
    if answers:
        why = q["e"].replace("(?) Not sure - check with your teacher. ", "")
        warn = ' <span class="k">[answer not sure - verify]</span>' if q.get("k") else ""
        h += f'<p class="a">Answer: {"ABCD"[q["a"]]}. {e(q["o"][q["a"]])}{warn}</p>'
        h += f'<p class="w">{e(why)} &nbsp;[{e(q["p"])}]</p>'
        h += "".join(f'<p class="w">&nbsp;&nbsp;{"ABCD"[k]} is wrong: {e(r)}</p>' for k, r in enumerate(q.get("w", [])) if r)
    return h


parts = []
parts.append(f"""<h1>Physical Education &amp; Yoga</h1>
<p class="sub"><b>All MCQs with answers + 3 predicted practice sets</b> - BBA / B.Sc. IV Sem (NEP), paper Z040401T</p>
<div class="box"><b>Exam pattern (from the past papers):</b> 100 MCQs in the booklet, answer any 75 on the OMR sheet, 75 marks, 90 minutes, no negative marking.<br>
<b>Syllabus:</b> Unit I Physical Education - Unit II Fitness, weight management, lifestyle - Unit III Yoga and meditation - Unit IV Traditional games and recreation.</div>
<div class="box"><b>Please note:</b> the three past papers (Set A 2025-26, Series B 2025-26, Set D 2024) have <b>no answer key</b>. Every answer here is worked out from the
syllabus and standard knowledge, not an official key. Answers marked <span class="k">[answer not sure - verify]</span> ({sum(1 for q in Q if q.get("k"))} questions) should be checked with your teacher.
Predicted sets are built from the topics that repeat most across the papers - a study aid, not a guarantee.</div>
<h3>Contents</h3>
<p>Part A - All {len(Q)} MCQs with answers (by unit)<br>Part B - Predicted Set 1, Set 2, Set 3 (50 questions each) with answer keys</p>""")

parts.append('<h2 style="page-break-before:always">Part A - All MCQs with answers</h2>')
n = 0
for u in UNITS:
    parts.append(f"<h2>{e(TITLES[u])}</h2>")
    last = None
    for q in [x for x in Q if x["u"] == u]:
        if q["t"] != last:
            parts.append(f"<h3>{e(q['t'])}</h3>")
            last = q["t"]
        n += 1
        parts.append(qhtml(n, q, True))

parts.append('<h2 style="page-break-before:always">Part B - Predicted practice sets</h2>')
parts.append('<p class="sub">Each set: 50 questions (Unit I: 7, Unit II: 12, Unit III: 15, Unit IV: 8, Sports &amp; General: 8). No question repeats between sets. '
             'Try each set in 45 minutes, then check the answer key at the end of the set.</p>')
for si, s in enumerate(sets, 1):
    parts.append(f'<h2 style="page-break-before:always">Predicted Set {si}</h2><p class="sub">50 questions - 1 mark each - no negative marking</p>')
    for i, q in enumerate(s, 1):
        parts.append(qhtml(i, q, False))
    key = "".join(f"<tr><td><b>{i}</b></td><td>{'ABCD'[q['a']]}</td></tr>" for i, q in enumerate(s, 1))
    # answer key in 5 columns
    cells = [f"{i}. <b>{'ABCD'[q['a']]}</b>" for i, q in enumerate(s, 1)]
    rows = "".join("<tr>" + "".join(f"<td>{c}</td>" for c in cells[r::10]) + "</tr>" for r in range(10))
    parts.append(f'<h3 style="page-break-before:always">Answer key - Predicted Set {si}</h3><table>{rows}</table>')
    parts.append("".join(f'<p class="w"><b>{i}.</b> {e(q["o"][q["a"]])} - {e(q["e"].replace("(?) Not sure - check with your teacher. ", ""))}</p>' for i, q in enumerate(s, 1)))

html = "<html><body>" + "".join(parts) + "</body></html>"
story = pymupdf.Story(html=html, user_css=CSS)
W = pymupdf.paper_rect("a4")
where = W + (36, 40, -36, -40)
TMP = OUT.with_suffix(".tmp.pdf")
writer = pymupdf.DocumentWriter(str(TMP))
more = 1
page = 0
while more:
    dev = writer.begin_page(W)
    more, _ = story.place(where)
    story.draw(dev)
    writer.end_page()
    page += 1
writer.close()
# page numbers
d = pymupdf.open(TMP)
for i, p in enumerate(d, 1):
    p.insert_text((W.width / 2 - 40, W.height - 20), f"Physical Education - page {i}/{len(d)}", fontsize=8, color=(0.4, 0.4, 0.4))
d.save(str(OUT), garbage=3, deflate=True)
d.close()
try:
    TMP.unlink()
except OSError:
    pass
print("pages", page, "->", OUT.name, "| set sizes", [len(s) for s in sets], "| unique in sets", len({q['n'] for s in sets for q in s}))
