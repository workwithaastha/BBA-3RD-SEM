"""HRM quick-recall card: the 12 most important topics with the memory hooks and the points to write (one A4 page).
Usage: python -I tools/make_hrm_quick_recall.py   ->  MCQ pdf/HRM/HRM_Quick_Recall_Card.pdf
"""
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parent.parent
CARDS = [
    ("1", "Unit I", "HRM vs Personnel Management", "<b>PM:</b> cost, short term, reactive, personnel dept only, rules, union bargaining. <b>HRM:</b> resource, long term, proactive, all managers, commitment, individual contract. Key idea: HRM is <i>strategic</i>, PM <i>administrative</i>. Quote hard HRM (cost) vs soft HRM (asset)."),
    ("2", "Unit I", "Objectives and functions", "<b>OFSP</b> = Organisational, Functional, Societal, Personal. Managerial = <b>POCD</b> (plan, organise, direct, control). Operative = <b>procurement, development, compensation, integration, maintenance, separation</b>. Define with Flippo / Dessler."),
    ("3", "Unit I", "Evolution of HRM (six stages)", "Craft guilds → industrial revolution → scientific management (Taylor) → human relations (Mayo, Hawthorne) → personnel management → HRM / strategic HRM. One line of <i>why</i> for each shift."),
    ("4", "Unit II", "HRP process and forecasting", "Objectives → <b>demand</b> forecast → <b>supply</b> forecast (internal, external) → gap (surplus / shortage) → action plan → review. Demand techniques <b>M-R-W-D-R</b>: managerial judgement, ratio-trend, work-study, Delphi, regression. Draw the flowchart."),
    ("5", "Unit II", "Job analysis, JD and JS", "Job analysis → <b>JD</b> (what: title, duties, reporting, conditions) and <b>JS</b> (who: education, experience, skills, traits). Methods: observation, interview, questionnaire, work diary, critical incident. Uses: HRP, recruitment, training, appraisal, pay."),
    ("6", "Unit II", "Recruitment vs selection; sources", "Recruitment = <b>positive</b>, attract a pool; selection = <b>negative</b>, reject the unfit. Internal: promotion, transfer, referrals. External: campus, ads, agencies, e-recruitment, walk-ins. Selection steps: screening → tests → interview → reference → medical → offer."),
    ("7", "Unit III", "Training: need, process, methods", "Training = present job, short term; development = future role, long term. Process (6 steps): needs → objectives → design → methods → implement → evaluate. <b>OJT:</b> coaching, rotation, apprenticeship. <b>Off-JT:</b> lecture, case, role play, simulation. Evaluate: <b>Kirkpatrick</b> (reaction, learning, behaviour, results)."),
    ("8", "Unit III", "Performance appraisal and biases", "Process: standards → communicate → measure → compare → feedback → action. Traditional: ranking, rating scale, critical incident. Modern: <b>MBO, BARS, 360-degree</b>. Biases <b>H-H-R-L-S-C-S-C</b>: halo, horn, recency, leniency, strictness, central tendency, similar-to-me, contrast. Remedy: clear standards, trained raters, many raters."),
    ("9", "Unit III", "Career and succession planning", "Career stages: exploration → establishment → mid-career → late career → decline. Individual = own goals; organisational = workforce needs. Succession: key posts → competencies → candidates → develop → review. Benefit: leadership continuity."),
    ("10", "Unit IV", "Job evaluation and compensation", "Rates the <b>job</b>, not the person. Methods: ranking, classification (non-analytical); <b>point</b>, factor comparison (analytical). Factors: skill, effort, responsibility, conditions. Compensation: base pay + incentives + fringe benefits; direct vs indirect."),
    ("11", "Unit IV", "Wages and wage board", "Minimum &lt; fair &lt; living wage (Minimum Wages Act 1948 for minimum). Wage board = <b>tripartite</b> (government, employers, workers), industry-wide. Theories: subsistence, wage fund, bargaining. Incentive plans: piece rate, standard hour, profit sharing, gainsharing."),
    ("12", "Unit IV", "IR, disputes, bargaining, grievance", "Disputes: strike, lockout, gherao, picketing. Machinery: works committee → conciliation → arbitration → <b>adjudication</b> (labour court, tribunal). <b>Collective bargaining:</b> prepare → issues → negotiate → agree → implement (8 steps). Grievance: open-door, step ladder, committee; principles: prompt, fair, confidential."),
]
CSS = """
body{font-family:sans-serif;font-size:8.6pt;line-height:1.28}
h1{font-size:16pt;color:#4338ca;margin:0}
.sub{color:#475569;font-size:8.6pt;margin:0 0 3pt 0}
table{border-collapse:collapse;width:100%}
td{border:1px solid #c7d2fe;padding:3pt 5pt;vertical-align:top}
td.n{width:34pt;background:#eef2ff;font-weight:bold;text-align:center;color:#4338ca}
td.t{width:96pt;font-weight:bold;color:#0f766e}
.box{border-left:3px solid #6366f1;padding:1pt 0 1pt 6pt;margin:3pt 0;font-size:8.4pt}
"""
rows = "".join(f"<tr><td class='n'>{n}<br><span style='font-size:7pt;font-weight:normal'>{u}</span></td><td class='t'>{t}</td><td>{x}</td></tr>" for n, u, t, x in CARDS)
html = ("<html><body><h1>HRM - Quick-recall card</h1><p class='sub'>12 topics that decide the paper · Wed 25 Nov 2026 · 75 marks · A: 9 short x 5 (all) · B: any 1 of 4 x 15 (Units I-II) · C: any 1 of 4 x 15 (Units III-IV)</p>"
        f"<table>{rows}</table>"
        "<div class='box'><b>Write like this:</b> Section A part (5 marks, about 150 words): definition + 3-4 points / a small table + one example. Long answer (15 marks, about 500 words): introduction, headed points, a table or flowchart, an example, a conclusion. "
        "Time: A about 55 min, B 25 min, C 25 min, check 15 min. Answer in serial order, parts in continuation.</div></body></html>")
W = pymupdf.paper_rect("a4")
out = ROOT / "MCQ pdf" / "HRM" / "HRM_Quick_Recall_Card.pdf"
tmp = out.with_suffix(".tmp.pdf")
story = pymupdf.Story(html=html, user_css=CSS)
wr = pymupdf.DocumentWriter(str(tmp))
more = 1
while more:
    dev = wr.begin_page(W)
    more, _ = story.place(W + (28, 28, -28, -28))
    story.draw(dev)
    wr.end_page()
wr.close()
d = pymupdf.open(tmp)
d.save(str(out), garbage=3, deflate=True)
print(out.name, len(d), "page(s)")
d.close()
try:
    tmp.unlink()
except OSError:
    pass
