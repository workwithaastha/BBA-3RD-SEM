"""Business Finance PDFs (notes with formulas and worked examples):
  1) Complete Notes/Finance_Study_Notes.pdf  - notes only, no MCQs, no questions
  2) Unit wise subject notes/Finance/Finance_Unit_<n>_Detailed_Notes_and_Important_Questions.pdf - Part A unit notes + Part B every important question with marks
Usage: python -I tools/make_fin_pdfs.py
"""
import json
import re
import subprocess
import sys
from html import escape as e
from pathlib import Path

import pymupdf

sys.path.insert(0, str(Path(__file__).resolve().parent))
from fin_study_content1 import UNIT1, UNIT2  # noqa: E402
from fin_study_content2 import UNIT3, UNIT4  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
NODE = (
    "const fs=require('fs'),path=require('path');global.window={};"
    "const html=fs.readFileSync('site/index.html','utf8');"
    "for(const m of html.matchAll(/<script src=\"((?:data|js)\\/[^\"]+)\"/g)){if(!(m[1].startsWith('data/')||m[1]==='js/examqa.js'))continue;require(path.resolve('site',m[1]));}"
    "console.log(JSON.stringify(window.ExamQA.data.finance));"
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
UNITS = [UNIT1, UNIT2, UNIT3, UNIT4]
STOP = set("the and of in to a an is are for with what how explain discuss define write short note notes its their between about which that this from give state any following them these those into also each than only when where can will should does".split())
STAR = {3: "★★★", 2: "★★", 1: "★"}
W = pymupdf.paper_rect("a4")
EXAM = "Mon 23 Nov 2026, 11:30 AM - 1:30 PM, written, 2 hours"


def words(t):
    return {w for w in re.findall(r"[a-z]{4,}", re.sub(r"<[^>]+>", " ", t.lower())) if w not in STOP}


def where(q, secs):
    qw = words(q["q"] + " " + q["t"])
    scored = sorted(((len(qw & sw) + 3 * len(qw & words(h)), num) for num, h, sw in secs), reverse=True)
    best = [n for s, n in scored[:2] if s >= max(3, scored[0][0] * 0.6)]
    return ", ".join(best) if best else scored[0][1]


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
        pg.insert_text((W.width / 2 - 75, W.height - 22), f"{footer} - page {n}/{len(d)}", fontsize=8, color=(0.4, 0.4, 0.4))
    d.save(str(out), garbage=3, deflate=True)
    pages = len(d)
    d.close()
    try:
        tmp.unlink()
    except OSError:
        pass
    return pages


# ---------------- 1) notes only ----------------
out_dir = ROOT / "Complete Notes"
out_dir.mkdir(exist_ok=True)
parts = ["<h1>Business Finance</h1><p class='sub'><b>Study Notes</b> - BBA III Semester · Core Course I (F010301TN) · 25 + 75 marks</p>"
         "<div class='box'>Proper notes for every topic of the syllabus, unit by unit, with <b>formulas and solved examples</b> - <b>no MCQs and no questions</b>. "
         "Based on your Finance folder (Complete Notes file, unit slides, Unit 1-3 notes, formula sheets, syllabus image) and standard textbooks (Maheshwari, Khan and Jain, H. K. Singh).<br>"
         f"<b>Syllabus:</b> Unit I Introduction (10 lectures) · Unit II Capital Budgeting (7) · Unit III Capital Structure (7) · Unit IV Dividend Decision and Working Capital (6) - 30 lectures.<br><b>Exam:</b> {EXAM}.</div><h2>Contents</h2>"]
for ul, title, lect, topics in UNITS:
    parts.append(f"<p><b>{e(ul)} - {e(title)}</b></p><ul>" + "".join(f"<li>{e(h)}</li>" for h, _ in topics) + "</ul>")
for ul, title, lect, topics in UNITS:
    parts.append(f"<p class='unit' style='page-break-before:always'>{e(ul)}</p><p class='unitsub'>{e(title)}</p><p class='lect'>{e(lect)}</p>")
    for h, body in topics:
        parts.append(f"<h2>{h}</h2>{body}")
n = render("".join(parts), out_dir / "Finance_Study_Notes.pdf", "Business Finance Study Notes")
print("Finance_Study_Notes.pdf", n, "pages")

# ---------------- 2) unit wise: notes + important questions with marks ----------------
udir = ROOT / "Unit wise subject notes" / "Finance"
udir.mkdir(parents=True, exist_ok=True)
for idx, unit in enumerate(UNITS):
    ul, title, lect, topics = unit
    label = ul.replace("UNIT ", "Unit ")
    secs = [(h.split(" ")[0], h, words(h) | words(body)) for h, body in topics]
    qs = [q for q in QA if q["u"] == label]
    parts = [f"<p class='unit'>{e(ul)}</p><p class='unitsub'>{e(title)}</p><p class='lect'>{e(lect)} · BBA III Semester · Core Course I (F010301TN) · Exam: {EXAM}</p>",
             "<div class='box'><b>How to use this PDF.</b> Part A = detailed notes of the whole unit, with formulas and worked examples. Part B = every important question of the unit with its marks, a star rating "
             "(★★★ = asked in your papers / very likely, ★★ = core syllabus) and the section of Part A to read.</div>",
             "<h2>Contents - Part A</h2><ul>" + "".join(f"<li>{e(h)}</li>" for h, _ in topics) + "</ul>"
             "<p><b>Part B</b> - Important questions with marks: " + ", ".join(f"{m} marks ({sum(1 for q in qs if q['m'] == m)})" for m in (2, 3, 5, 6, 10)) + f" · total {len(qs)} questions.</p>",
             "<p class='part' style='page-break-before:always'>Part A - Detailed notes</p>"]
    for h, body in topics:
        parts.append(f"<h2>{h}</h2>{body}")
    parts.append("<p class='part' style='page-break-before:always'>Part B - Important questions with marks</p>")
    parts.append("<div class='box'><b>Paper pattern (Business Finance, 75 marks, 2 hours):</b> very short (2 marks), short (3 marks), medium (5-6 marks) and long (10 marks) answers; numericals are common. "
                 "For a numerical write the formula, the substitution and the final answer with the unit (Rs).</div>")
    parts.append(f"<h3>Question bank of {e(label)} - by marks</h3>")
    for m in (2, 3, 5, 6, 10):
        group = sorted([q for q in qs if q["m"] == m], key=lambda x: (-x["p"], x["t"]))
        if not group:
            continue
        parts.append(f"<h4>{m}-mark questions ({len(group)})</h4><table><tr><th>No.</th><th>Question</th><th>Topic</th><th>Asked</th><th>Read in Part A</th></tr>"
                     + "".join(f"<tr><td>{k}</td><td>{re.sub(r'<[^>]+>', '', q['q'])}</td><td>{e(q['t'])}</td><td>{STAR.get(q['p'], '')}</td><td>{where(q, secs)}</td></tr>" for k, q in enumerate(group, 1)) + "</table>")
    name = f"Finance_Unit_{idx + 1}_Detailed_Notes_and_Important_Questions"
    n = render("".join(parts), udir / (name + ".pdf"), f"Business Finance {label} - Detailed Notes and Important Questions")
    print(name + ".pdf", n, "pages,", len(qs), "questions")
