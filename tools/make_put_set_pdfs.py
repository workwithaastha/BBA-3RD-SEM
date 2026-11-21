"""PUT-pattern QUESTION PAPERS (not MCQs) as PDFs - same sets as the website's Mock Exam Box.
Each PDF = the paper in the real PUT layout (Section A 9 x 6.25 attempt 4; B 4 x 12.5 attempt 2; C 4 x 12.5 attempt 2; 75 marks, 120 min) followed by the model answers.
Usage: python -I tools/make_put_set_pdfs.py <subject-id> <Folder/File prefix>   e.g.  finance Finance
Output: MCQ pdf/<prefix>/<prefix>_PUT_Paper_Actual.pdf and <prefix>_PUT_Set_N.pdf
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
META = {
    "finance": ("Business Finance", "F010301TN", "Mon 23 Nov 2026"),
    "hrm": ("Human Resource Management", "F010302TN", "Wed 25 Nov 2026"),
    "marketing": ("Marketing Management", "F010303TN", "Thu 26 Nov 2026"),
}
SUBJ, CODE, DATE = META[SID]
# same seeded shuffles as site/js/mockbox.js, so a set here is the same set as on the website
NODE = r"""
const fs=require('fs'),path=require('path');global.window={};
const html=fs.readFileSync('site/index.html','utf8');
for(const m of html.matchAll(/<script src="((?:data|js)\/[^"]+)"/g)){if(!(m[1].startsWith('data/')||m[1]==='js/examqa.js'))continue;require(path.resolve('site',m[1]));}
const id=process.argv[1];
const rng=(seed)=>{let t=seed>>>0;return()=>{t+=0x6d2b79f5;let r=Math.imul(t^(t>>>15),1|t);r^=r+Math.imul(r^(r>>>7),61|r);return((r^(r>>>14))>>>0)/4294967296}};
const hash=(s)=>{let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0};
const shuffled=(arr,seed)=>{const r=rng(seed),a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const chunk=(pool,k,size)=>{const o=[];const n=pool.length;for(let i=0;i<size&&i<n;i++)o.push(pool[(k*size+i)%n]);return o};
const bank=window.ExamQA.data[id]||[];
const real=((window.ExamQA.presets||{})[id]||[]).filter(p=>p.real&&p.id==='putreal')[0];
const poolA=shuffled(bank.filter(q=>!q.put&&!q.num&&[5,6,6.25].includes(q.m)),hash(id+'A'));
const poolBC=shuffled(bank.filter(q=>!q.put&&(!q.num||q.m===12.5)&&[10,12.5].includes(q.m)),hash(id+'B'));
const n=Math.max(3,Math.min(10,Math.ceil(Math.max(poolA.length/9,poolBC.length/8))));
const pick=(q)=>({q:q.q,a:q.a,t:q.t,u:q.u});
const sets=[];
if(real){sets.push({name:'Actual',secs:real.real.map(s=>({name:s.name,rule:s.rule,marks:s.marks,qs:s.ids.map(k=>bank.find(x=>x.put===k)).filter(Boolean).map(pick)}))});}
for(let k=0;k<n;k++){const a=chunk(poolA,k,9),bc=chunk(poolBC,k,8);
 sets.push({name:'Set '+(k+1),secs:[{name:'Section A',rule:'Attempt any four (6.25 x 4 = 25 marks)',marks:6.25,qs:a.map(pick)},{name:'Section B',rule:'Attempt any two (12.5 x 2 = 25 marks)',marks:12.5,qs:bc.slice(0,4).map(pick)},{name:'Section C',rule:'Attempt any two (12.5 x 2 = 25 marks)',marks:12.5,qs:bc.slice(4,8).map(pick)}]});}
console.log(JSON.stringify(sets));
"""
raw = subprocess.run(["node", "-e", NODE, SID], cwd=ROOT, capture_output=True, text=True, encoding="utf-8")
sets = json.loads(raw.stdout)
OUT = ROOT / "MCQ pdf" / PREFIX
OUT.mkdir(parents=True, exist_ok=True)
CSS = """
body{font-family:sans-serif;font-size:10pt;line-height:1.35}
h1{font-size:15pt;color:#111827;margin:0;text-align:center}
h2{font-size:12.5pt;color:#4338ca;margin:12pt 0 3pt}
h3{font-size:11pt;color:#4c1d95;margin:9pt 0 2pt}
h4{font-size:10pt;color:#334155;margin:7pt 0 2pt}
p{margin:2pt 0}
.sub{color:#475569;text-align:center}
table{border-collapse:collapse;margin:3pt 0}
th{border:1px solid #94a3b8;padding:3pt 5pt;text-align:left;font-size:9pt}
td{border:1px solid #cbd5e1;padding:3pt 5pt;font-size:9pt;vertical-align:top}
.sec{font-size:11.5pt;font-weight:bold;margin:12pt 0 0 0;border-bottom:2px solid #111827}
.rule{color:#334155;font-style:italic;margin:0 0 4pt 0}
.qn{width:28pt}
.mk{width:38pt;text-align:center}
.part{font-size:16pt;font-weight:bold;color:#0f766e;border-bottom:2px solid #0f766e;margin:0 0 6pt 0}
ul,ol{margin:2pt 0 3pt 0}
li{margin:1pt 0}
.box{border-left:3px solid #6366f1;padding:2pt 0 2pt 8pt;margin:6pt 0}
"""
W = pymupdf.paper_rect("a4")


def plain(h):
    return re.sub(r"<[^>]+>", "", h)


def paper_html(s, setname):
    year = "Second"
    head = (f"<h1>Allenhouse Business School - PUT Question Paper ({setname})</h1><p class='sub'>Practice paper in the real PUT layout - not an official paper</p>"
            "<table width='100%'><tr><td><b>Program:</b> BBA</td><td><b>Subject Name:</b> " + e(SUBJ) + "</td><td><b>Subject Code:</b> " + CODE + "</td></tr>"
            f"<tr><td><b>Year:</b> {year}</td><td><b>Semester:</b> III</td><td><b>Section:</b> All</td></tr>"
            f"<tr><td><b>Exam:</b> PUT</td><td><b>Session:</b> 2026-27</td><td><b>Time:</b> 120 mins</td></tr>"
            "<tr><td><b>Max. Marks:</b> 75</td><td colspan='2'><b>Roll No / CRN:</b> ................................</td></tr></table>")
    body = []
    n = 0
    for sec in s["secs"]:
        body.append(f"<p class='sec'>{e(sec['name'])}: {e(sec['rule'])}</p><table width='100%'><tr><th class='qn'>No.</th><th>Question</th><th class='mk'>Marks</th></tr>")
        for q in sec["qs"]:
            n += 1
            body.append(f"<tr><td class='qn'>{n}</td><td>{q['q']}</td><td class='mk'>{sec['marks']}</td></tr>")
        body.append("</table>")
    return head + "".join(body)


def answers_html(s):
    out = ["<p class='part' style='page-break-before:always'>Model answers</p><div class='box'>Write each answer in your own words first, then compare. Numericals: formula, substitution, final answer with the rupee sign.</div>"]
    n = 0
    for sec in s["secs"]:
        out.append(f"<h2>{e(sec['name'])}</h2>")
        for q in sec["qs"]:
            n += 1
            a = re.sub(r"<svg.*?</svg>", "<p><i>[Draw the diagram / curve as in the website answer.]</i></p>", q["a"], flags=re.S)
            out.append(f"<h3>Q{n}. {plain(q['q'])} [{sec['marks']} marks]</h3>{a}")
    return "".join(out)


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
    for i, pg in enumerate(d, 1):
        pg.insert_text((W.width / 2 - 70, W.height - 22), f"{footer} - page {i}/{len(d)}", fontsize=8, color=(0.4, 0.4, 0.4))
    d.save(str(out), garbage=3, deflate=True)
    pages = len(d)
    d.close()
    try:
        tmp.unlink()
    except OSError:
        pass
    return pages


for s in sets:
    actual = s["name"] == "Actual"
    name = f"{PREFIX}_PUT_Paper_Actual" if actual else f"{PREFIX}_PUT_{s['name'].replace(' ', '_')}"
    title = "Actual PUT paper 2026-27" if actual else "Practice " + s["name"]
    pages = render(paper_html(s, title) + answers_html(s), OUT / (name + ".pdf"), f"{SUBJ} - {title}")
    print(name + ".pdf", pages, "pages,", sum(len(x["qs"]) for x in s["secs"]), "questions")
