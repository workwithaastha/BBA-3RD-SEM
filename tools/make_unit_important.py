"""Unit-wise IMPORTANT QUESTIONS WITH ANSWERS (new exam pattern) - one PDF per unit.
Each PDF: checklist, then the most important long questions (15 marks, Section B/C) and short questions (5 marks, Section A) with full model answers.
Order of importance: PUT-paper questions first, then the bank's "very likely" questions; repeated answers are skipped; at most 2 short questions per topic.
Usage: python -I tools/make_unit_important.py <subject-id> <Folder/File prefix>   e.g.  marketing Marketing
Output: Unit wise subject notes/<prefix>/<prefix>_Unit_<n>_Important_Questions_with_Answers.pdf
"""
import json
import re
import subprocess
import sys
import tempfile
from html import escape as e
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parent.parent
SID, PREFIX = sys.argv[1], sys.argv[2]
META = {"finance": ("Business Finance", "Mon 23 Nov 2026"), "hrm": ("Human Resource Management", "Wed 25 Nov 2026"), "marketing": ("Marketing Management", "Thu 26 Nov 2026, 11:30 AM - 1:30 PM")}
SUBJ, DATE = META[SID]
LONG_MAX, SHORT_MAX = 7, 14
NODE = r"""
const fs=require('fs'),path=require('path');global.window={};
const html=fs.readFileSync('site/index.html','utf8');
for(const m of html.matchAll(/<script src="((?:data|js)\/[^"]+)"/g)){if(!(m[1].startsWith('data/')||m[1]==='js/examqa.js'))continue;require(path.resolve('site',m[1]));}
console.log(JSON.stringify(window.ExamQA.data[process.argv[1]]||[]));
"""
Q = json.loads(subprocess.run(["node", "-e", NODE, SID], cwd=ROOT, capture_output=True, text=True, encoding="utf-8").stdout)
TMP = Path(tempfile.mkdtemp())
CSS = """
body{font-family:sans-serif;font-size:10.3pt;line-height:1.4}
h1{font-size:21pt;color:#4338ca;margin:0}
h2{font-size:15pt;color:#ffffff;margin:0}
h3{font-size:12pt;color:#4c1d95;margin:12pt 0 3pt;border-bottom:1.5px solid #c7d2fe}
h4{font-size:10.5pt;color:#334155;margin:7pt 0 2pt}
p{margin:2.5pt 0}
.sub{color:#475569;margin:0 0 4pt 0}
.box{border-left:3px solid #6366f1;padding:2pt 0 2pt 8pt;margin:6pt 0}
.part{font-size:15pt;font-weight:bold;color:#0f766e;border-bottom:2px solid #0f766e;margin:10pt 0 4pt 0}
.tag{font-size:8.5pt;color:#b45309;font-weight:bold}
table{border-collapse:collapse;margin:4pt 0}
th{border:1px solid #94a3b8;padding:3pt 5pt;text-align:left;font-size:9.2pt}
td{border:1px solid #cbd5e1;padding:3pt 5pt;font-size:9.2pt;vertical-align:top}
ul,ol{margin:2pt 0 3pt 0}
li{margin:1pt 0}
"""
W = pymupdf.paper_rect("a4")


def plain(h):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", h)).strip()


def with_pictures(html, tag):
    """draw inline SVG diagrams (e.g. the product life cycle curve) as pictures"""
    n = [0]

    def pic(m):
        n[0] += 1
        svg = m.group(0).replace("currentColor", "#111111")
        if "xmlns" not in svg:
            svg = svg.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ', 1)
        try:
            d = pymupdf.open(stream=svg.encode("utf-8"), filetype="svg")
            name = f"{tag}-{n[0]}.png"
            d[0].get_pixmap(dpi=130, alpha=False).save(str(TMP / name))
            return f'<img src="{name}" width="380">'
        except Exception:
            return "<p><i>[Draw the diagram: sales curve rising then falling across four stages.]</i></p>"

    return re.sub(r"<svg.*?</svg>", pic, html, flags=re.S)


def rank(q):
    return (0 if q.get("put") else 1, 0 if q.get("p") == 3 else 1, 0 if q["m"] in (10, 12.5, 15, 5) else 1)


def pick(pool, limit, seen, per_topic=None):
    out, topics = [], {}
    for q in sorted(pool, key=rank):
        key = plain(q["a"])[:260]
        qkey = re.sub(r"[^a-z]", "", q["q"].lower())[:45]
        if key in seen or qkey in seen:
            continue
        t = q.get("t", "")
        if per_topic and topics.get(t, 0) >= per_topic:
            continue
        seen.update([key, qkey])
        topics[t] = topics.get(t, 0) + 1
        out.append(q)
        if len(out) >= limit:
            break
    return out


def render(html, out, footer):
    tmp = out.with_suffix(".tmp.pdf")
    story = pymupdf.Story(html="<html><body>" + html + "</body></html>", user_css=CSS, archive=pymupdf.Archive(str(TMP)))
    wr = pymupdf.DocumentWriter(str(tmp))
    more = 1
    while more:
        dev = wr.begin_page(W)
        more, _ = story.place(W + (40, 44, -40, -44))
        story.draw(dev)
        wr.end_page()
    wr.close()
    d = pymupdf.open(tmp)
    for i, pg in enumerate(d, 1):
        pg.insert_text((W.width / 2 - 90, W.height - 22), f"{footer} - page {i}/{len(d)}", fontsize=8, color=(0.4, 0.4, 0.4))
    d.save(str(out), garbage=3, deflate=True)
    pages = len(d)
    d.close()
    try:
        tmp.unlink()
    except OSError:
        pass
    return pages


OUT = ROOT / "Unit wise subject notes" / PREFIX
OUT.mkdir(parents=True, exist_ok=True)
for idx, label in enumerate(["Unit I", "Unit II", "Unit III", "Unit IV"], 1):
    unit = [q for q in Q if q["u"] == label and not q.get("cs") and "online test" not in str(q.get("src", "")).lower()]
    seen = set()
    longs = pick([q for q in unit if q["m"] in (10, 12.5, 15)], LONG_MAX, seen)
    shorts = pick([q for q in unit if q["m"] in (2, 3, 5)], SHORT_MAX, seen, per_topic=2)
    section = "B (Units I-II)" if idx <= 2 else "C (Units III-IV)"
    parts = [f"<h1>{e(SUBJ)} - {label}</h1><p class='sub'><b>Important questions with answers</b> · exam {DATE} · NEW pattern, 75 marks</p>",
             f"<div class='box'><b>Pattern:</b> Section A - Q1 (a)-(i), nine compulsory short answers of 5 marks (45) · Section B - any ONE of 4 long questions from Units I-II (15) · Section C - any ONE of 4 from Units III-IV (15).<br>"
             f"This unit feeds Section A (short) and Section {section}. <b>5 marks:</b> about 150 words - definition, 3-4 points, example. <b>15 marks:</b> about 500-600 words - introduction, headings, table or diagram, example, conclusion.<br>"
             "<b>Marked [PUT]</b> = asked in your PUT paper: revise these first. No teacher guarantee - these are the most likely ones from your question bank.</div>",
             "<p class='part'>Checklist</p><h4>Long questions (15 marks)</h4><ol>" + "".join(f"<li>{plain(q['q'])}{' <span class=tag>[PUT]</span>' if q.get('put') else ''}</li>" for q in longs) + "</ol>",
             "<h4>Short questions (5 marks)</h4><ol>" + "".join(f"<li>{plain(q['q'])}{' <span class=tag>[PUT]</span>' if q.get('put') else ''}</li>" for q in shorts) + "</ol>",
             "<p class='part' style='page-break-before:always'>Part 1 - Long questions (15 marks)</p>"]
    for n, q in enumerate(longs, 1):
        parts.append(f"<h3>L{n}. {plain(q['q'])}{' [PUT]' if q.get('put') else ''}</h3>" + with_pictures(q["a"], f"u{idx}l{n}"))
    parts.append("<p class='part' style='page-break-before:always'>Part 2 - Short questions (5 marks)</p>")
    for n, q in enumerate(shorts, 1):
        parts.append(f"<h3>S{n}. {plain(q['q'])}{' [PUT]' if q.get('put') else ''}</h3>" + with_pictures(q["a"], f"u{idx}s{n}"))
    name = f"{PREFIX}_Unit_{idx}_Important_Questions_with_Answers"
    pages = render("".join(parts), OUT / (name + ".pdf"), f"{SUBJ} {label} - Important Questions")
    print(f"{name}.pdf  {pages} pages  long={len(longs)} short={len(shorts)}")
