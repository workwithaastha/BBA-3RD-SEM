"""Build site/data/physical-education.js from the three past papers (tools/data_pe_{a,b,d}.py).
Options keep the ORIGINAL paper order (no shuffle); identical questions that appear in more than one paper are merged.
Usage: python -I tools/build_pe.py
"""
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from data_pe_a import PE_A, SRC as SRC_A
from data_pe_b import PE_B, SRC as SRC_B
from data_pe_d import PE_D, SRC as SRC_D
import expl_pe_a, expl_pe_b, expl_pe_d

EXPL = {m.SRC: m.X for m in (expl_pe_a, expl_pe_b, expl_pe_d)}

OUT = Path(__file__).resolve().parent.parent / "site" / "data" / "physical-education.js"
UNIT_ORDER = ["Unit I", "Unit II", "Unit III", "Unit IV", "Sports & General"]


def norm(s):
    return re.sub(r"[^a-z0-9]+", " ", s.lower()).strip()


def main():
    rows = []
    for src, data in ((SRC_A, PE_A), (SRC_B, PE_B), (SRC_D, PE_D)):
        for (u, t, q, opts, ans, expl, no) in data:
            assert len(opts) == 4 and ans in "ABCD", (src, no)
            assert len({norm(o) for o in opts}) == 4, (src, no, "duplicate options")
            rows.append([u, t, q, opts, "ABCD".index(ans), expl, [f"{src} Q{no}"]])
    # merge identical questions (same stem + same option set)
    merged, index = [], {}
    for r in rows:
        key = norm(r[2]) + "|" + "|".join(sorted(norm(o) for o in r[3]))
        if key in index:
            m = merged[index[key]]
            assert m[3][m[4]] == r[3][r[4]], f"conflicting answers for: {r[2]}"
            m[6] += r[6]
        else:
            index[key] = len(merged)
            merged.append(r)
    merged.sort(key=lambda r: (UNIT_ORDER.index(r[0]), r[1]))
    qs = []
    for n, (u, t, q, opts, a, e, p) in enumerate(merged, 1):
        src, no = p[0].rsplit(" Q", 1)
        why, wrongs = EXPL[src][int(no)]
        ans = opts[a]
        w = []
        for k, o in enumerate(opts):
            if k == a:
                w.append("")
                continue
            r = (wrongs or {}).get("ABCD"[k], "")
            low = o.lower()
            if low.startswith("none"):
                r = f"Not correct - there is a right answer among the options: {ans}."
            elif low.startswith("both"):
                r = f"Not correct - only \"{ans}\" is right, so 'both' does not hold."
            elif not r or r.endswith(" is wrong.") or r.endswith(" is correct.") or r.startswith("Only A "):
                r = r if (r and not (r.endswith(" is wrong.") or r.endswith(" is correct.") or r.startswith("Only A "))) else (
                    f"\"{o}\" is true, but it is only one of the listed points - the other options are also correct, so \"{ans}\" is the complete answer." if wrongs is None
                    else f"Incorrect - the right answer is \"{ans}\", not \"{o}\".")
            w.append(r)
        prefix = "(?) Not sure - check with your teacher. " if e.startswith("(?)") else ""
        item = {"u": u, "t": t, "n": n, "q": q, "o": opts, "a": a, "e": prefix + why, "w": w, "p": ", ".join(p)}
        if e.startswith("(?)"):
            item["k"] = 1  # not sure about the marked answer
        qs.append(item)
    data = json.dumps(qs, ensure_ascii=False, separators=(",", ":"))
    js = ("window.SUBJECTS = window.SUBJECTS || {};\n"
          "window.SUBJECTS['physical-education'] = {\n  title: 'Physical Education & Yoga',\n  type: 'mcq',\n  units: [],\n  mcqs: " + data + "\n};\n")
    OUT.write_text(js, encoding="utf-8")
    per = {}
    for q in qs:
        per[q["u"]] = per.get(q["u"], 0) + 1
    review = ["# Physical Education - answers to verify\n",
              "The three past papers have **no answer key**, so every marked answer is worked out from the syllabus and standard knowledge.",
              "These questions are the ones where I am **not sure** (marked with a warning tag on the site). Please check them with your teacher or notes.\n"]
    for q in qs:
        if q.get("k"):
            opts = " / ".join(f"{'ABCD'[i]}. {o}" for i, o in enumerate(q["o"]))
            review.append(f"- **{q['p']}** - {q['q']}  " + "\n" + f"  Marked: **{'ABCD'[q['a']]}. {q['o'][q['a']]}**  (options: {opts})")
    (OUT.parent.parent.parent / "REVIEW_PE_ANSWERS.md").write_text("\n".join(review) + "\n", encoding="utf-8")
    print("physical-education", len(qs), "MCQs from", len(rows), "paper questions;", len(rows) - len(qs), "merged duplicates", per,
          "| answer spread", [sum(1 for q in qs if q["a"] == k) for k in range(4)], "| unsure", sum(1 for q in qs if q.get("k")))


main()
