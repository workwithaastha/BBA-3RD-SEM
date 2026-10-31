"""Parse Business Environment MCQ PDFs (via pdftotext) into site/data/business-env.js.
Usage: python tools/parse_be.py
"""
import json, re, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "BUSINESS ENV"
OUT = ROOT / "site" / "data" / "business-env.js"

UNITS = [
    ("UNIT 1 MCQ (4).pdf", "Unit 1", "Business environment, PESTLE, government role, ethics & CSR"),
    ("UNIT 2 MCQ (1).pdf", "Unit 2", "Economic system, LPG, environment & consumer regulations"),
    ("UNIT 3 MCQ (5).pdf", "Unit 3", "Ethical codes in business"),
    ("UNIT 4 MCQ (2).pdf", "Unit 4", "Case-based MCQs (all topics)"),
]

def text(pdf):
    return subprocess.run(["pdftotext", "-layout", str(pdf), "-"], capture_output=True, text=True, encoding="utf-8", errors="replace").stdout

FOOT = re.compile(r"^\s*(Business Environment and Business Ethics\s*-\s*Unit|CSJMU BBA \|).*Page \d+\s*$")

def clean_lines(t):
    out = []
    for ln in t.splitlines():
        if FOOT.match(ln):
            continue
        ln = re.sub(r"\s+", " ", ln).strip()
        if ln:
            out.append(ln)
    return out

def parse_key_simple(lines):
    key = {}
    for ln in lines:
        for n, a in re.findall(r"(\d+)\.\s*([A-D])\b", ln):
            key[int(n)] = a
    return key

def parse_key_u4(lines):
    key = {}
    for ln in lines:
        for n, a in re.findall(r"\b(\d{1,3})\s+([A-D])\b", ln):
            key[int(n)] = a
    return key

OPT = re.compile(r"^\(([A-D])\)\s*(.*)$")

def parse_questions(lines, qstart):
    """lines: question region. Returns list of dict(n,q,o,sec,case)."""
    qs, cur, sec, case, case_title = [], None, "", None, ""
    exp = 1
    for ln in lines:
        m = re.match(r"^Section [A-Z]: (.+?)(?: \(.*\))?$", ln)
        if m:
            sec = m.group(1).split(" (")[0].strip(); continue
        m = re.match(r"^Topic (\d+): (.+)$", ln)
        if m:
            sec = m.group(2); case = None; continue
        m = re.match(r"^Case (\d+\.\d+): (.+?) \(Questions", ln)
        if m:
            if cur: qs.append(cur); cur = None
            case_title = m.group(2); case = []; continue
        if re.match(r"^\d+ case studies \|", ln):
            continue
        m = OPT.match(ln.replace("(A) ", "(A)").replace("(B) ", "(B)").replace("(C) ", "(C)").replace("(D) ", "(D)")) if ln.startswith("(") else None
        if m and cur is not None:
            cur["o"].append(m.group(2).strip()); cur["_last"] = "o"; continue
        m = re.match(r"^(\d+)\.\s*(.*)$", ln)
        if m and int(m.group(1)) == exp:
            if cur: qs.append(cur)
            cur = {"n": exp, "q": m.group(2), "o": [], "sec": sec, "_last": "q",
                   "c": (case_title + ": " + " ".join(case)) if case else ""}
            exp += 1; case = case if case is not None else None
            continue
        # continuation
        if cur is not None and (cur["_last"] == "q"):
            cur["q"] += " " + ln
        elif cur is not None and cur["_last"] == "o" and cur["o"] and len(cur["o"]) <= 4:
            cur["o"][-1] += " " + ln
        elif case is not None and cur is None:
            case.append(ln)
        elif case is not None and cur is not None:
            # case text after a finished question block of previous case is handled by Case header
            cur["o"][-1] += " " + ln
    if cur: qs.append(cur)
    return qs

def u4_cases_fix(lines):
    """Unit 4: case passage lines come between 'Case x.y' header and first question. Handle by custom pass."""
    qs, sec, exp = [], "", 1
    case_title, case_lines, cur, in_case = "", [], None, False
    for ln in lines:
        m = re.match(r"^Topic (\d+): (.+)$", ln)
        if m:
            sec = m.group(2); continue
        if re.match(r"^\d+ case studies \|", ln):
            continue
        m = re.match(r"^Case (\d+\.\d+): (.+?) \(Questions", ln)
        if m:
            if cur: qs.append(cur); cur = None
            case_title, case_lines, in_case = m.group(2), [], True
            continue
        if ln.startswith("(") and cur is not None and OPT.match(ln):
            mm = OPT.match(ln); cur["o"].append(mm.group(2).strip()); continue
        m = re.match(r"^(\d+)\.\s+(.*)$", ln)
        if m and int(m.group(1)) == exp:
            if cur: qs.append(cur)
            in_case = False
            cur = {"n": exp, "q": m.group(2), "o": [], "sec": sec, "c": case_title + ": " + " ".join(case_lines)}
            exp += 1; continue
        if in_case:
            case_lines.append(ln)
        elif cur is not None:
            if cur["o"]: cur["o"][-1] += " " + ln
            else: cur["q"] += " " + ln
    if cur: qs.append(cur)
    return qs

def main():
    allq = []
    for fname, unit, desc in UNITS:
        lines = clean_lines(text(SRC / fname))
        if unit == "Unit 4":
            idx = next(i for i, l in enumerate(lines) if l.startswith("TOPIC-WISE ANSWER KEY"))
            qs = u4_cases_fix(lines[:idx]); key = parse_key_u4(lines[idx + 1:])
        else:
            idx = next(i for i, l in enumerate(lines) if l == "ANSWER KEY")
            qs = parse_questions(lines[:idx], 1); key = parse_key_simple(lines[idx + 1:])
        bad = [q["n"] for q in qs if len(q["o"]) != 4 or q["n"] not in key]
        print(unit, "questions", len(qs), "key", len(key), "bad", bad[:10])
        for q in qs:
            a = key.get(q["n"])
            q.pop("_last", None)
            allq.append({"u": unit, "t": q["sec"], "n": q["n"], **({"c": q["c"]} if q.get("c") else {}),
                         "q": q["q"], "o": q["o"], "a": "ABCD".index(a) if a else -1})
    bad = [q for q in allq if q["a"] < 0 or len(q["o"]) != 4]
    print("total", len(allq), "bad", len(bad))
    js = ("window.SUBJECTS = window.SUBJECTS || {};\n"
          "window.SUBJECTS['business-env'] = {\n  title: 'Business Environment & Ethics',\n  type: 'mcq',\n  units: [],\n  mcqs: "
          + json.dumps(allq, ensure_ascii=False, separators=(",", ":")) + "\n};\n")
    OUT.write_text(js, encoding="utf-8")

main()
