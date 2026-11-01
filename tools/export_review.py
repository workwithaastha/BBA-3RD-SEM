"""Export every 'extra' (not-in-PDF) HRM / OM question into a printable review checklist.
Usage: python tools/export_review.py  -> REVIEW_EXTRA_QUESTIONS.md
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from data_hrm import HRM
from data_hrm_more import HRM_MORE
from data_om import OM

OUT = Path(__file__).resolve().parent.parent / "REVIEW_EXTRA_QUESTIONS.md"


def section(title, rows):
    rows = sorted(rows, key=lambda r: (r[0], r[1]))
    out = [f"## {title}", ""]
    cur = None
    n = 0
    for (u, t, q, c, w1, w2, w3, e, x) in rows:
        if not x:
            continue
        if (u, t) != cur:
            out += [f"### {u} - {t}", ""]
            cur = (u, t)
        n += 1
        out.append(f"- [ ] **{n}. {q}**")
        out += [f"  - {k}. {v}" + ("  ✅" if k == "A" else "") for k, v in zip("ABCD", (c, w1, w2, w3))]
        out.append(f"  - _{e}_")
        out.append("")
    return out, n


hrm, nh = section("HRM - questions NOT in your PDFs (standard knowledge)", HRM + HRM_MORE)
om, no = section("Office Management - questions NOT in your PDFs", OM)
head = [
    "# Review list: questions not taken from your PDFs", "",
    "Tick each box if it matches your syllabus / teacher. Tell me which to change or delete.",
    "Correct answer is marked ✅ (the site shuffles the option order).", "",
    f"Counts: HRM {nh}, Office Management {no}.", "",
]
OUT.write_text("\n".join(head + hrm + om), encoding="utf-8")
print("HRM extra", nh, "OM extra", no)
