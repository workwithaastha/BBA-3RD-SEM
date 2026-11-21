"""Physical Education & Yoga unit-wise PDFs -> Unit wise subject notes/Physical Education/
Part A = unit notes (tools/pe_study_content.py) - Part B = every MCQ of the unit grouped by topic with the correct answer and the reason (from site/data/physical-education.js).
Usage: python -I tools/make_pe_unit_notes.py
"""
import json
import re
import sys
from collections import OrderedDict
from html import escape as e
from pathlib import Path

import pymupdf

sys.path.insert(0, str(Path(__file__).resolve().parent))
from pe_study_content import UNITS  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
js = (ROOT / "site/data/physical-education.js").read_text(encoding="utf-8")
Q = json.loads(js[js.index("mcqs: ") + 6: js.rindex("\n};")])
OUT = ROOT / "Unit wise subject notes" / "Physical Education"
OUT.mkdir(parents=True, exist_ok=True)
EXAM = "Sat 5 Dec 2026, objective (MCQ), 1.5 hours"
CSS = """
body{font-family:sans-serif;font-size:10.5pt;line-height:1.42}
h2{font-size:15pt;color:#0f766e;margin:14pt 0 4pt}
h3{font-size:12.5pt;color:#115e59;margin:12pt 0 3pt}
p{margin:3pt 0}
.unit{font-size:28pt;font-weight:bold;color:#115e59;border-left:10px solid #0f766e;padding:4pt 0 4pt 10pt;margin:0 0 4pt 0}
.unitsub{font-size:13pt;color:#115e59;margin:0 0 2pt 0}
.lect{color:#64748b;font-size:9.5pt;margin:0 0 8pt 0}
.box{border-left:3px solid #14b8a6;padding:2pt 0 2pt 8pt;margin:6pt 0}
.part{font-size:18pt;font-weight:bold;color:#0f766e;border-bottom:2px solid #0f766e;margin:0 0 6pt 0}
table{border-collapse:collapse;margin:4pt 0}
th{border:1px solid #94a3b8;padding:3pt 5pt;text-align:left;font-size:9.5pt}
td{border:1px solid #cbd5e1;padding:3pt 5pt;font-size:9.5pt}
ul,ol{margin:2pt 0 3pt 0}
li{margin:1pt 0}
"""
W = pymupdf.paper_rect("a4")


def render(html, out, footer):
    tmp = out.with_suffix(".tmp.pdf")
    story = pymupdf.Story(html="<html><body>" + html + "</body></html>", user_css=CSS)
    wr = pymupdf.DocumentWriter(str(tmp))
    more = 1
    while more:
        dev = wr.begin_page(W)
        more, _ = story.place(W + (40, 44, -40, -44))
        story.draw(dev)
        wr.end_page()
    wr.close()
    d = pymupdf.open(tmp)
    for n, pg in enumerate(d, 1):
        pg.insert_text((W.width / 2 - 85, W.height - 22), f"{footer} - page {n}/{len(d)}", fontsize=8, color=(0.4, 0.4, 0.4))
    d.save(str(out), garbage=3, deflate=True)
    pages = len(d)
    d.close()
    try:
        tmp.unlink()
    except OSError:
        pass
    return pages


def clean(t):
    return re.sub(r"<[^>]+>", "", t or "")


for idx, (label, (ul, title, topics)) in enumerate(UNITS.items(), 1):
    qs = [q for q in Q if q["u"] == label]
    parts = [f"<p class='unit'>{e(ul)}</p><p class='unitsub'>{e(title)}</p><p class='lect'>Physical Education and Yoga (Z040401T) · Co-curricular course · Exam: {EXAM} · 75 of 100 questions, equal marks</p>",
             "<div class='box'><b>How to use this PDF.</b> Part A = notes of the unit with the facts the papers ask. Part B = every practice question of the unit with the correct answer and the reason, grouped by topic. "
             "Answers marked <b>(check with your teacher)</b> were flagged as less certain in the website bank. No syllabus document was supplied, so the notes follow the unit labels used on the website and the three past papers.</div>",
             "<h2>Contents - Part A</h2><ul>" + "".join(f"<li>{e(h)}</li>" for h, _ in topics) + "</ul>",
             f"<p><b>Part B</b> - {len(qs)} questions in {len(OrderedDict.fromkeys(q['t'] for q in qs))} topics.</p>",
             "<p class='part' style='page-break-before:always'>Part A - Notes</p>"]
    for h, body in topics:
        parts.append(f"<h2>{h}</h2>{body}")
    parts.append("<p class='part' style='page-break-before:always'>Part B - Practice questions with answers</p>")
    by = OrderedDict()
    for q in qs:
        by.setdefault(q["t"], []).append(q)
    for t, group in by.items():
        rows = []
        for k, q in enumerate(group, 1):
            ans = q["o"][q["a"]]
            why = clean(q.get("e", ""))
            doubt = bool(q.get("k")) or why.startswith("(?)")
            why = re.sub(r"^\(\?\)\s*Not sure - check with your teacher\.\s*", "", why)
            rows.append(f"<tr><td>{k}</td><td>{clean(q['q'])}</td><td><b>{e(clean(ans))}</b>{' <i>(check with your teacher)</i>' if doubt else ''}</td><td>{e(why)}</td></tr>")
        parts.append(f"<h3>{e(t)} ({len(group)})</h3><table><tr><th>No.</th><th>Question</th><th>Answer</th><th>Why</th></tr>" + "".join(rows) + "</table>")
    name = f"PE_{label.replace(' & ', '_and_').replace(' ', '_')}_Notes_and_MCQs_with_Answers"
    n = render("".join(parts), OUT / (name + ".pdf"), f"Physical Education {label} - Notes and MCQs")
    print(name + ".pdf", n, "pages,", len(qs), "questions")
