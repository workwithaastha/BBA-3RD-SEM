"""Build site/data/hrm.js and site/data/office-mgmt.js from tools/data_*.py.
Correct answer is listed first in the source; options are shuffled with a fixed seed so output is stable.
Usage: python tools/build_mcq.py
"""
import json, random, sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from data_hrm import HRM
from data_hrm_more import HRM_MORE
from data_om import OM
from data_om_more import OM_MORE
from data_fin import FIN
from data_mkt import MKT

OUT = Path(__file__).resolve().parent.parent / "site" / "data"

def build(rows, sid, title, seed, append=False):
    rnd = random.Random(seed)
    qs, seen = [], set()
    for i, (u, t, q, c, w1, w2, w3, e, x) in enumerate(rows, 1):
        opts = [c, w1, w2, w3]
        assert len(set(opts)) == 4, f"duplicate options: {q}"
        assert q not in seen, f"duplicate question: {q}"
        seen.add(q)
        order = list(range(4)); rnd.shuffle(order)
        shuffled = [opts[k] for k in order]
        item = {"u": u, "t": t, "n": i, "q": q, "o": shuffled, "a": order.index(0), "e": e, "g": 1}
        if x: item["x"] = 1
        qs.append(item)
    data = json.dumps(qs, ensure_ascii=False, separators=(",", ":"))
    if append:  # notes subject: add practice MCQs to an existing subject object
        js = f"window.SUBJECTS['{sid}'].mcqs.push(...{data});\n"
        (OUT / f"{sid}-mcq.js").write_text(js, encoding="utf-8")
    else:
        js = ("window.SUBJECTS = window.SUBJECTS || {};\n"
              f"window.SUBJECTS['{sid}'] = {{\n  title: '{title}',\n  type: 'mcq',\n  units: [],\n  mcqs: "
              + data + "\n};\n")
        (OUT / f"{sid}.js").write_text(js, encoding="utf-8")
    per = {}
    for q in qs: per[q["u"]] = per.get(q["u"], 0) + 1
    print(sid, len(qs), per, "answer spread", [sum(1 for q in qs if q["a"] == k) for k in range(4)])

build(HRM + HRM_MORE, "hrm", "Human Resource Management", 11)
build(OM + OM_MORE, "office-mgmt", "Office Management", 22)
build(FIN, "finance", "Business Finance", 33, append=True)
build(MKT, "marketing", "Marketing Management", 44, append=True)
