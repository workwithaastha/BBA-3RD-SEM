"""Marketing PDFs (notes read from the website data so site and PDFs match):
  1) Complete Notes/Marketing_Study_Notes.pdf  - notes only, no MCQs, no questions
  2) Unit wise subject notes/Marketing/Marketing_Unit_<n>_Detailed_Notes_and_Important_Questions.pdf - Part A notes + Part B every important question with marks
Usage: python -I tools/make_mkt_pdfs.py
"""
import json
import re
import subprocess
from html import escape as e
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parent.parent
NODE = (
    "const fs=require('fs'),path=require('path');global.window={};"
    "const html=fs.readFileSync('site/index.html','utf8');"
    "for(const m of html.matchAll(/<script src=\"((?:data|js)\\/[^\"]+)\"/g)){if(!(m[1].startsWith('data/')||m[1]==='js/examqa.js'))continue;require(path.resolve('site',m[1]));}"
    "console.log(JSON.stringify({units:window.SUBJECTS.marketing.units.map(u=>({id:u.id,title:u.title,html:u.html})),qa:window.ExamQA.data.marketing}));"
)
RAW = json.loads(subprocess.run(["node", "-e", NODE], cwd=ROOT, capture_output=True, text=True, encoding="utf-8").stdout)
QA = RAW["qa"]
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
.part{font-size:18pt;font-weight:bold;color:#0f766e;border-bottom:2px solid #0f766e;margin:0 0 6pt 0}
table{border-collapse:collapse;margin:4pt 0}
th{border:1px solid #94a3b8;padding:3pt 5pt;text-align:left;font-size:9.5pt}
td{border:1px solid #cbd5e1;padding:3pt 5pt;font-size:9.5pt}
ul,ol{margin:2pt 0 3pt 0}
li{margin:1pt 0}
"""
LECT = {1: "11 lectures", 2: "11 lectures", 3: "10 lectures", 4: "13 lectures"}
TITLE = {1: "Introduction to Marketing", 2: "Consumer Behaviour, Marketing Information System and Marketing Research",
         3: "Segmentation, Targeting, Positioning and Value Proposition", 4: "Marketing Mix - Product, Price, Place, Promotion"}
STOP = set("the and of in to a an is are for with what how explain discuss define write short note notes its their between about which that this from give state any following them these those into also each than only when where can will should does".split())
STAR = {3: "★★★", 2: "★★", 1: "★"}
W = pymupdf.paper_rect("a4")
EXAM = "Thu 26 Nov 2026, 11:30 AM - 1:30 PM, written, 2 hours"


def clean(h):
    h = re.sub(r"<script.*?</script>", "", h, flags=re.S)
    h = re.sub(r"<div class=\"nextsteps\".*?</div>", "", h, flags=re.S)
    h = re.sub(r"<(button|input|select|textarea)\b.*?(</\1>|/>|>)", "", h, flags=re.S)
    h = re.sub(r"\s(onclick|style|id|data-[a-z-]+)=\"[^\"]*\"", "", h)
    h = re.sub(r"<h1>", "<h2>", h).replace("</h1>", "</h2>")
    return h


def words(t):
    return {w for w in re.findall(r"[a-z]{4,}", re.sub(r"<[^>]+>", " ", t.lower())) if w not in STOP}


def sections(html):
    """split a unit-page into (heading, body) by h2/h3; text before first heading is kept as intro."""
    parts = re.split(r"(?=<h[23][ >])", html)
    out = []
    for p in parts:
        m = re.match(r"<h[23][^>]*>(.*?)</h[23]>", p, flags=re.S)
        out.append((re.sub(r"<[^>]+>", "", m.group(1)).strip() if m else "Overview", p))
    return out


def where(q, secs):
    qw = words(q["q"] + " " + q["t"])
    scored = sorted(((len(qw & sw) + 3 * len(qw & words(h)), h) for h, sw in secs), reverse=True)
    best = [n for s, n in scored[:2] if s >= max(3, scored[0][0] * 0.6)]
    return "; ".join(best) if best else scored[0][1]


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


# unit -> list of (page title, html)
UN = {1: [], 2: [], 3: [], 4: []}
for u in RAW["units"]:
    m = re.match(r"u(\d)-", u["id"])
    if m:
        UN[int(m.group(1))].append((u["title"], clean(u["html"])))

# ---------------- 1) notes only ----------------
out_dir = ROOT / "Complete Notes"
out_dir.mkdir(exist_ok=True)
parts = ["<h1>Marketing Management</h1><p class='sub'><b>Study Notes</b> - BBA III Semester · Core Course III (F010303TN) · 25 + 75 marks</p>"
         "<div class='box'>Proper notes for every topic of the syllabus, unit by unit - <b>no MCQs and no questions</b>. "
         "Based on your Marketing folder (Complete Notes file, unit notes, slides and syllabus image) and standard textbooks (Kotler and Keller; Saxena).<br>"
         f"<b>Syllabus:</b> Unit I Introduction (11 lectures) · Unit II Consumer Behaviour, MIS, Marketing Research (11) · Unit III STP and Value Proposition (10) · Unit IV Marketing Mix (13) - 45 lectures.<br><b>Exam:</b> {EXAM}.</div><h2>Contents</h2>"]
for n in (1, 2, 3, 4):
    parts.append(f"<p><b>Unit {n} - {e(TITLE[n])}</b></p><ul>" + "".join(f"<li>{e(t)}</li>" for t, _ in UN[n]) + "</ul>")
for n in (1, 2, 3, 4):
    parts.append(f"<p class='unit' style='page-break-before:always'>UNIT {n}</p><p class='unitsub'>{e(TITLE[n])}</p><p class='lect'>{LECT[n]}</p>")
    for t, h in UN[n]:
        parts.append(f"<h2>{e(t)}</h2>{h}")
n = render("".join(parts), out_dir / "Marketing_Study_Notes.pdf", "Marketing Study Notes")
print("Marketing_Study_Notes.pdf", n, "pages")

# ---------------- 2) unit wise ----------------
udir = ROOT / "Unit wise subject notes" / "Marketing"
udir.mkdir(parents=True, exist_ok=True)
for idx in (1, 2, 3, 4):
    label = f"Unit {['I', 'II', 'III', 'IV'][idx - 1]}"
    secs = []
    for t, h in UN[idx]:
        for hd, body in sections(h):
            secs.append((hd if hd != "Overview" else t, words(hd) | words(body) | words(t)))
    qs = [q for q in QA if q["u"] == label]
    parts = [f"<p class='unit'>UNIT {idx}</p><p class='unitsub'>{e(TITLE[idx])}</p><p class='lect'>{LECT[idx]} · BBA III Semester · Core Course III (F010303TN) · Exam: {EXAM}</p>",
             "<div class='box'><b>How to use this PDF.</b> Part A = detailed notes of the whole unit. Part B = every important question of the unit with its marks, a star rating "
             "(★★★ = asked in your papers / very likely, ★★ = core syllabus) and the section of Part A to read.</div>",
             "<h2>Contents - Part A</h2><ul>" + "".join(f"<li>{e(t)}</li>" for t, _ in UN[idx]) + "</ul>"
             "<p><b>Part B</b> - Important questions with marks: " + ", ".join(f"{m} marks ({sum(1 for q in qs if q['m'] == m)})" for m in (2, 3, 5, 6, 10)) + f" · total {len(qs)} questions.</p>",
             "<p class='part' style='page-break-before:always'>Part A - Detailed notes</p>"]
    for t, h in UN[idx]:
        parts.append(f"<h2>{e(t)}</h2>{h}")
    parts.append("<p class='part' style='page-break-before:always'>Part B - Important questions with marks</p>")
    parts.append("<div class='box'><b>Paper pattern (Marketing, 75 marks, 2 hours):</b> very short (2 marks), short (3 marks), medium (5-6 marks) and long (10 marks) answers. "
                 "Use headings, definitions, a diagram or table where possible, and an Indian brand example.</div>")
    parts.append(f"<h3>Question bank of {e(label)} - by marks</h3>")
    for m in (2, 3, 5, 6, 10):
        group = sorted([q for q in qs if q["m"] == m], key=lambda x: (-x["p"], x["t"]))
        if not group:
            continue
        parts.append(f"<h4>{m}-mark questions ({len(group)})</h4><table><tr><th>No.</th><th>Question</th><th>Topic</th><th>Asked</th><th>Read in Part A</th></tr>"
                     + "".join(f"<tr><td>{k}</td><td>{re.sub(r'<[^>]+>', '', q['q'])}</td><td>{e(q['t'])}</td><td>{STAR.get(q['p'], '')}</td><td>{e(where(q, secs))}</td></tr>" for k, q in enumerate(group, 1)) + "</table>")
    name = f"Marketing_Unit_{idx}_Detailed_Notes_and_Important_Questions"
    n = render("".join(parts), udir / (name + ".pdf"), f"Marketing {label} - Detailed Notes and Important Questions")
    print(name + ".pdf", n, "pages,", len(qs), "questions")
