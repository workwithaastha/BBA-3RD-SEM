"""HRM unit-wise detailed notes + ALL important questions with marks -> Unit wise subject notes/HRM/HRM_Unit_<n>_Detailed_Notes_and_Important_Questions.pdf
Each PDF: Part A detailed notes of the unit (tools/hrm_study_content*.py) - Part B every important question of the unit with its marks, star rating and the notes section to read.
Usage: python -I tools/make_hrm_unit_notes.py
"""
import json
import re
import subprocess
import sys
from html import escape as e
from pathlib import Path

import pymupdf

sys.path.insert(0, str(Path(__file__).resolve().parent))
import hrm_study_content3  # noqa: E402,F401  (extends the units with the extra topics)
from hrm_study_content1 import UNIT1, UNIT2  # noqa: E402
from hrm_study_content2 import UNIT3, UNIT4  # noqa: E402

def official_questions():
    """10 official important questions per unit, read from HRM/Human_Resource_Management.pdf."""
    d = pymupdf.open(Path(__file__).resolve().parent.parent / "HRM" / "Human_Resource_Management.pdf")
    text = " ".join(" ".join(pg.get_text().split()) for pg in d)
    out = []
    for blk in re.split(r"Unit (?:IV|III|II|I)(?= Q1)", text)[1:]:
        qs = [q.strip() for q in re.split(r"Q\d+\.\s*", blk)[1:]]
        out.append([re.sub(r"\s+", " ", q).strip() for q in qs])
    return out


IQ_UNITS = [(0, 0, 0, qs) for qs in official_questions()]

ROOT = Path(__file__).resolve().parent.parent
OUTDIR = ROOT / "Unit wise subject notes" / "HRM"
OUTDIR.mkdir(parents=True, exist_ok=True)
NODE = (
    "const fs=require('fs'),path=require('path');global.window={};"
    "const html=fs.readFileSync('site/index.html','utf8');"
    "for(const m of html.matchAll(/<script src=\"((?:data|js)\\/[^\"]+)\"/g)){if(!(m[1].startsWith('data/')||m[1]==='js/examqa.js'))continue;require(path.resolve('site',m[1]));}"
    "console.log(JSON.stringify(window.ExamQA.data.hrm));"
)
QA = json.loads(subprocess.run(["node", "-e", NODE], cwd=ROOT, capture_output=True, text=True, encoding="utf-8").stdout)
CSS = """
body{font-family:sans-serif;font-size:10.5pt;line-height:1.42}
h1{font-size:25pt;color:#4338ca;margin:0}
h2{font-size:15pt;color:#4338ca;margin:14pt 0 4pt}
h3{font-size:12.5pt;color:#4c1d95;margin:12pt 0 3pt}
h4{font-size:11pt;color:#334155;margin:9pt 0 2pt}
p{margin:3pt 0}
.sub{color:#475569;font-size:11pt}
.unit{font-size:28pt;font-weight:bold;color:#4c1d95;border-left:10px solid #4c1d95;padding:4pt 0 4pt 10pt;margin:0 0 4pt 0}
.unitsub{font-size:13pt;color:#4c1d95;margin:0 0 2pt 0}
.lect{color:#64748b;font-size:9.5pt;margin:0 0 8pt 0}
.box{border-left:3px solid #6366f1;padding:2pt 0 2pt 8pt;margin:6pt 0}
.eg{border-left:3px solid #f59e0b;padding:2pt 0 2pt 8pt;margin:6pt 0}
.part{font-size:18pt;font-weight:bold;color:#0f766e;border-bottom:2px solid #0f766e;margin:0 0 6pt 0}
table{border-collapse:collapse;margin:4pt 0}
th{border:1px solid #94a3b8;padding:3pt 5pt;text-align:left;font-size:9.5pt}
td{border:1px solid #cbd5e1;padding:3pt 5pt;font-size:9.5pt}
ul,ol{margin:2pt 0 3pt 0}
li{margin:1pt 0}
"""
STOP = set("the and of in to a an is are for with what how explain discuss define write short note notes its their between about which that this from give state any following them these those into also each than only when where can will should does".split())
STAR = {3: "★★★", 2: "★★"}


def words(t):
    return {w for w in re.findall(r"[a-z]{4,}", re.sub(r"<[^>]+>", " ", t.lower())) if w not in STOP}


def sections_of(unit):
    out = []
    for h, body in unit[3]:
        num = h.split(" ")[0]
        out.append((num, h, words(h) | words(h) | words(body)))
    return out


def where(q, secs):
    qw = words(q["q"] + " " + q["t"])
    scored = []
    for num, h, sw in secs:
        hw = words(h)
        s = len(qw & sw) + 3 * len(qw & hw)
        scored.append((s, num))
    scored.sort(reverse=True)
    best = [n for s, n in scored[:2] if s >= max(3, scored[0][0] * 0.6)]
    return ", ".join(best) if best else scored[0][1]


UNIT_NO = {"UNIT I": "Unit I", "UNIT II": "Unit II", "UNIT III": "Unit III", "UNIT IV": "Unit IV"}
for idx, unit in enumerate([UNIT1, UNIT2, UNIT3, UNIT4]):
    ul, title, lect, topics = unit
    label = UNIT_NO[ul]
    secs = sections_of(unit)
    qs = [q for q in QA if q["u"] == label]
    iqs = IQ_UNITS[idx][3]
    parts = [f"<p class='unit'>{e(ul)}</p><p class='unitsub'>{e(title)}</p><p class='lect'>{e(lect)} · BBA III Semester · Core Course II (F010302TN)</p>",
             "<div class='box'><b>How to use this PDF.</b> Part A = detailed notes of the whole unit, topic by topic. Part B = every important question of the unit with its marks, a star rating (★★★ = asked in your papers / very likely, ★★ = core syllabus) and the section of Part A to read for the answer.</div>",
             "<h2>Contents - Part A</h2><ul>" + "".join(f"<li>{e(h)}</li>" for h, _ in topics) + "</ul>"
             "<p><b>Part B</b> - Important questions with marks: "
             + ", ".join(f"{m} marks ({sum(1 for q in qs if q['m'] == m)})" for m in (2, 3, 5, 6, 10)) + f" · total {len(qs)} questions.</p>"]
    parts.append("<p class='part' style='page-break-before:always'>Part A - Detailed notes</p>")
    for h, body in topics:
        parts.append(f"<h2>{h}</h2>{body}")
    parts.append("<p class='part' style='page-break-before:always'>Part B - Important questions with marks</p>")
    parts.append("<div class='box'><b>Paper pattern (HRM, 75 marks, 2 hours):</b> very short (2 marks), short (3 marks), medium (5-6 marks) and long (10 marks) answers. Attempt long answers with headings, a table or flow chart, one example and a conclusion.</div>")
    parts.append(f"<h3>B1. Official important questions of {e(label)} (from your Important Questions PDFs)</h3>")
    rows = []
    for n, q in enumerate(iqs, 1):
        pass
    # official list: marks by question type (short Q1-Q4 = 3 marks, Q5-Q7 = 6 marks, Q8-Q10 = 10 marks), shown as suggested marks
    official = []
    for n, q in enumerate(iqs, 1):
        marks = 3 if n <= 4 else 6 if n <= 7 else 10
        fake = {"q": q, "t": ""}
        official.append(f"<tr><td>{n}</td><td>{e(q)}</td><td>{marks}</td><td>{where(fake, secs)}</td></tr>")
    parts.append("<table><tr><th>No.</th><th>Question</th><th>Marks (suggested)</th><th>Read in Part A</th></tr>" + "".join(official) + "</table>")
    parts.append("<p class='lect'>Marks are suggested from the question type: short notes and definitions 3 marks, explain / discuss 6 marks, long multi-part questions 10 marks.</p>")
    parts.append(f"<h3>B2. Complete question bank of {e(label)} - by marks</h3>")
    for m in (2, 3, 5, 6, 10):
        group = sorted([q for q in qs if q["m"] == m], key=lambda x: (-x["p"], x["t"]))
        if not group:
            continue
        parts.append(f"<h4>{m}-mark questions ({len(group)})</h4><table><tr><th>No.</th><th>Question</th><th>Topic</th><th>Asked</th><th>Read in Part A</th></tr>"
                     + "".join(f"<tr><td>{k}</td><td>{re.sub(r'<[^>]+>', '', q['q'])}</td><td>{e(q['t'])}</td><td>{STAR[q['p']]}</td><td>{where(q, secs)}</td></tr>" for k, q in enumerate(group, 1)) + "</table>")
    html = "<html><body>" + "".join(parts) + "</body></html>"
    W = pymupdf.paper_rect("a4")
    story = pymupdf.Story(html=html, user_css=CSS)
    name = f"HRM_Unit_{idx + 1}_Detailed_Notes_and_Important_Questions"
    tmp, out = OUTDIR / (name + ".tmp.pdf"), OUTDIR / (name + ".pdf")
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
        pg.insert_text((W.width / 2 - 85, W.height - 22), f"HRM {label} - Detailed Notes and Important Questions - page {n}/{len(d)}", fontsize=8, color=(0.4, 0.4, 0.4))
    d.save(str(out), garbage=3, deflate=True)
    pages = len(d)
    d.close()
    try:
        tmp.unlink()
    except OSError:
        pass
    print(out.name, pages, "pages,", len(qs), "bank questions +", len(iqs), "official")
