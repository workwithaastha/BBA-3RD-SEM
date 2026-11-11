"""HRM unit-wise study PDFs: Notes + Important questions + Detailed answers + MCQs (answers at the end).
Usage: python -I tools/make_hrm_unit_pdfs.py          -> HRM Unit Notes/HRM_Unit_1.pdf ... HRM_Unit_4.pdf
"""
import json
import random
import subprocess
from html import escape as e
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parent.parent
OUTDIR = ROOT / "HRM Unit Notes"
OUTDIR.mkdir(exist_ok=True)

NODE = (
    "const fs=require('fs'),path=require('path');global.window={};"
    "const html=fs.readFileSync('site/index.html','utf8');"
    "for(const m of html.matchAll(/<script src=\"((?:data|js)\\/[^\"]+)\"/g)){if(!(m[1].startsWith('data/')||m[1]==='js/examqa.js'))continue;require(path.resolve('site',m[1]));}"
    "const s=window.SUBJECTS.hrm;console.log(JSON.stringify({notes:s.notes,mcqs:s.mcqs,qa:window.ExamQA.data.hrm}));"
)
data = json.loads(subprocess.run(["node", "-e", NODE], cwd=ROOT, capture_output=True, text=True, encoding="utf-8").stdout)

UNITS = [
    ("Unit I", "Unit 1", "Introduction to Human Resource Management", [
        "Define HRM and discuss its objectives and scope. Trace the evolution of Human Resource Management. OR Explain the objectives of HRM under the headings of organizational, functional, societal and personal objectives.",
        "\"HRM is not merely an extension of Personnel Management but a paradigm shift.\" Critically examine this statement by distinguishing between HRM and Personnel Management.",
        "Explain the managerial and operative functions of HRM.",
        "Discuss the role of HR Manager and how it is changing.",
        "\"HRM policies and principles contribute to the effectiveness, continuity and stability of the organization.\"",
        "Explain the importance of HRM in the emerging scenario. What are the essential skills for an HR Manager?",
        "Examine the changing role of HR in the era of globalization and digital transformation."]),
    ("Unit II", "Unit 2", "HR Planning, Job Analysis, Recruitment and Selection", [
        "Define Human Resource Planning and explain its process.",
        "Discuss the factors affecting HRP (internal and external). How can an organization respond to each?",
        "Explain the techniques of forecasting demand for human resources. Which technique is most suitable for a growing firm?",
        "Explain the methods of forecasting supply of human resources.",
        "What is Job Analysis? Discuss its process, methods and uses. How does it serve as the foundation for other HR functions?",
        "Distinguish between Job Description and Job Specification. Prepare a sample JD and JS for a position of your choice (e.g., Marketing Executive).",
        "Define recruitment and discuss the factors affecting it. Explain how internal and external factors shape an organization's recruitment strategy.",
        "Compare internal and external sources of recruitment. Discuss the merits and demerits of each with examples.",
        "Explain the selection process in detail. Describe each stage, from application screening to the final job offer.",
        "Discuss the types of employment tests (aptitude, personality, situational). How do they improve the reliability and validity of selection decisions?",
        "Explain the various interviewing techniques. What are the common errors in interviewing and how can they be avoided?",
        "What are the barriers to effective HRP, and how can they be overcome?",
        "Describe the methods of collecting job analysis data (observation, interview, questionnaire, diary method).",
        "\"Job analysis is the cornerstone of all HR activities.\" Do you agree? Justify your answer.",
        "\"Internal recruitment boosts morale, but external recruitment brings innovation.\" Critically evaluate this statement."]),
    ("Unit III", "Unit 3", "Training, Performance Appraisal, Career Management and Succession Planning", [
        "Define training and development. Explain their need and importance for employees and organizations in a competitive environment.",
        "Explain the process of identifying training needs. Discuss the three levels of analysis with suitable examples.",
        "Discuss the various on-the-job and off-the-job training techniques. OR Compare on-the-job and off-the-job training methods. Discuss merits and demerits.",
        "How is the effectiveness of training evaluated? Explain various training evaluation models.",
        "Define performance appraisal and explain its concept and objectives. Why is it considered an important tool of HRM?",
        "Distinguish between traditional and modern methods of performance appraisal.",
        "Discuss the common biases in performance appraisal. How can an organization minimize them?",
        "Define career planning and career development. Explain their objectives and importance for both employees and organizations.",
        "What is succession planning? Explain its process, objectives and benefits. How does it ensure leadership continuity in an organization?",
        "Distinguish between individual career management and organizational career management. Discuss the responsibilities of the individual, the manager and the organization."]),
    ("Unit IV", "Unit 4", "Job Evaluation, Compensation, Industrial Relations and Grievances", [
        "What is job evaluation? Explain its objectives, process and importance. How does it help in designing a fair pay structure?",
        "Explain the methods of job evaluation. Discuss the merits and demerits of each.",
        "Define employee compensation and explain its objectives. Discuss the components of compensation: base pay, incentives and fringe benefits.",
        "Explain the concept of wage policy and wage determination. Discuss the principles and the factors that influence wage and salary administration.",
        "Discuss the concept of minimum wage, fair wage and living wage. What is the role of Wage Boards in wage determination in India?",
        "Explain the factors influencing wage and salary administration.",
        "Define Industrial Relations. Discuss its concept, objectives and importance for industrial peace and productivity.",
        "What are industrial disputes? Explain their causes, forms and the machinery for settlement.",
        "Explain collective bargaining and discuss its process. How does it help in resolving conflicts between management and workers?",
        "Explain the causes of employee grievances and how they can be redressed.",
        "Discuss the role of the government, trade unions and management in maintaining healthy industrial relations."]),
]
CSS = """
body{font-family:sans-serif;font-size:10pt;line-height:1.4}
h1{font-size:24pt;color:#7c3aed;margin:0}
h2{font-size:14.5pt;color:#7c3aed;border-bottom:2px solid #a78bfa;margin:12pt 0 4pt}
h3{font-size:11pt;color:#334155;margin:8pt 0 2pt}
h4{font-size:10.5pt;margin:6pt 0 1pt;color:#5b21b6}
.part{font-size:18pt;color:#fff;background:#7c3aed;padding:6pt 10pt;margin:0 0 8pt 0}
.sub{color:#475569}
.box{border:1px solid #a78bfa;padding:5pt 8pt;margin:6pt 0;background:#f5f3ff}
.q{margin:7pt 0 1pt}.o{margin:0 0 0 14pt}
.qh{font-size:11pt;margin:10pt 0 1pt;color:#111}
.tag{font-size:8.5pt;color:#64748b;margin:0}
.ms{margin:3pt 0;padding:3pt 6pt;background:#ecfdf5;font-size:9pt}
.src{font-size:8.5pt;color:#64748b;margin:2pt 0 6pt 0}
.a{margin:4pt 0 0 0;color:#166534;font-weight:bold}.w{margin:1pt 0 2pt 8pt;color:#334155;font-size:9pt}
.eg{margin:3pt 0;padding:3pt 6pt;background:#fffbeb;font-size:9.5pt}
table{border-collapse:collapse;margin:3pt 0}
th{background:#ede9fe;border:1px solid #a78bfa;padding:2pt 5pt;text-align:left;font-size:9pt}
td{border:1px solid #cbd5e1;padding:2pt 5pt;font-size:9pt}
ul,ol{margin:2pt 0}
"""
LET = "ABCD"
rnd = random.Random(5)


def build(i, qa_label, mcq_label, title, iqs):
    notes = data["notes"][i]["html"]
    # drop the in-page "Next:" link box
    cut = notes.rfind('<div class="nextsteps">')
    if cut > 0:
        notes = notes[:cut]
    qas = [q for q in data["qa"] if q["u"] == qa_label]
    mcqs = [q for q in data["mcqs"] if q["u"] == mcq_label]
    rnd.shuffle(mcqs)
    mcqs = mcqs[:30]
    p = [f"<h1>HRM - {e(qa_label)}</h1><p class='sub'><b>{e(title)}</b></p>"
         "<div class='box'><b>Contents:</b> Part A Notes · Part B Important questions · Part C Detailed model answers (2, 3, 5, 6 and 10 marks) · Part D MCQs with answers at the end.<br>"
         "BBA III Sem · Human Resource Management · CSJM University. Built from your syllabus image, the HRM Four Units Comprehensive Notes PDF and the earlier HRM PDFs.</div>"]
    p.append("<p class='part'>Part A - Notes</p>" + notes)
    p.append("<p class='part' style='page-break-before:always'>Part B - Important questions</p><ol>" + "".join(f"<li>{e(q)}</li>" for q in iqs) + "</ol>")
    p.append(f"<p class='part' style='page-break-before:always'>Part C - Detailed model answers ({len(qas)} answers)</p>")
    for k, q in enumerate(qas, 1):
        p.append(f"<h3 class='qh'>Q{k}. [{q['m']} marks] {q['q']}</h3><p class='tag'>{e(q['t'])}</p>{q['a']}")
        if q.get("ms"):
            p.append(f"<div class='ms'><b>Marking scheme:</b> {q['ms']}</div>")
        if q.get("src"):
            p.append(f"<p class='src'>Asked in: {q['src']}</p>")
    p.append(f"<p class='part' style='page-break-before:always'>Part D - MCQs ({len(mcqs)}) - answers at the end</p>")
    for k, q in enumerate(mcqs, 1):
        p.append(f"<p class='q'><b>{k}.</b> {e(q['q'])}</p>" + "".join(f"<p class='o'>{LET[j]}. {e(o)}</p>" for j, o in enumerate(q["o"])))
    p.append("<h2 style='page-break-before:always'>MCQ answer key</h2><table>" + "".join(
        "<tr>" + "".join(f"<td>{k}. <b>{LET[q['a']]}</b></td>" for k, q in list(enumerate(mcqs, 1))[r::5]) + "</tr>" for r in range(5)) + "</table>")
    p.append("<h2>MCQ answers with explanations</h2>")
    for k, q in enumerate(mcqs, 1):
        p.append(f"<p class='q'><b>{k}.</b> {e(q['q'])}</p><p class='a'>Answer: {LET[q['a']]}. {e(q['o'][q['a']])}</p>")
        if q.get("e"):
            p.append(f"<p class='w'><b>Why correct:</b> {e(q['e'])}</p>")
        p.append("".join(f"<p class='w'>{LET[j]} is wrong: {e(r)}</p>" for j, r in enumerate(q.get("w") or []) if r))
    return "<html><body>" + "".join(p) + "</body></html>", len(qas), len(mcqs)


W = pymupdf.paper_rect("a4")
where = W + (36, 40, -36, -40)
for i, (ql, ml, title, iqs) in enumerate(UNITS):
    html, nq, nm = build(i, ql, ml, title, iqs)
    out = OUTDIR / f"HRM_Unit_{i + 1}_Notes_Questions_MCQ.pdf"
    tmp = OUTDIR / f"u{i + 1}.tmp.pdf"
    story = pymupdf.Story(html=html, user_css=CSS)
    wr = pymupdf.DocumentWriter(str(tmp))
    more = 1
    while more:
        dev = wr.begin_page(W)
        more, _ = story.place(where)
        story.draw(dev)
        wr.end_page()
    wr.close()
    d = pymupdf.open(tmp)
    for n, pg in enumerate(d, 1):
        pg.insert_text((W.width / 2 - 60, W.height - 20), f"HRM {ql} - page {n}/{len(d)}", fontsize=8, color=(0.4, 0.4, 0.4))
    d.save(str(out), garbage=3, deflate=True)
    pages = len(d)
    d.close()
    try:
        tmp.unlink()
    except OSError:
        pass
    print(out.name, pages, "pages |", nq, "answers |", nm, "MCQs")

# Exam Master page (answer framework, mnemonics, flowcharts, last-night plan)
em = data["notes"][4]["html"]
cut = em.rfind('<div class="nextsteps">')
em = em[:cut] if cut > 0 else em
html = "<html><body><h1>HRM - Exam Master</h1><p class='sub'>Answer framework, priority topics, mnemonic bank, flowcharts and last-night plan</p>" + em + "</body></html>"
out = OUTDIR / "HRM_Exam_Master_Mnemonics_Last_Night.pdf"
tmp = OUTDIR / "em.tmp.pdf"
story = pymupdf.Story(html=html, user_css=CSS)
wr = pymupdf.DocumentWriter(str(tmp))
more = 1
while more:
    dev = wr.begin_page(W)
    more, _ = story.place(where)
    story.draw(dev)
    wr.end_page()
wr.close()
d = pymupdf.open(tmp)
for n, pg in enumerate(d, 1):
    pg.insert_text((W.width / 2 - 60, W.height - 20), f"HRM Exam Master - page {n}/{len(d)}", fontsize=8, color=(0.4, 0.4, 0.4))
d.save(str(out), garbage=3, deflate=True)
print(out.name, len(d), "pages")
d.close()
try:
    tmp.unlink()
except OSError:
    pass
