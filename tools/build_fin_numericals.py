"""Business Finance numericals from the `question/` folder (Capital Budgeting, Leverage, Numerical Questions Units I-IV)
and the Finance PUT paper numericals -> site/data/examqa-finance9.js. All numbers are computed here (4-decimal PV factors, as in tables).
Usage: python -I tools/build_fin_numericals.py
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "site" / "data" / "examqa-finance9.js"


def f4(x):
    return round(x, 4)


def pvf(r, n):
    return f4(1 / (1 + r) ** n)


def pvifa(r, n):
    return f4(sum(1 / (1 + r) ** t for t in range(1, n + 1)))


def fvf(r, n):
    return f4((1 + r) ** n)


def fvifa(r, n):
    return f4(((1 + r) ** n - 1) / r)


def inr(x):
    """Indian digit grouping with the rupee sign, negative in brackets style with minus."""
    neg = x < 0
    x = int(round(abs(x)))
    s = str(x)
    if len(s) > 3:
        head, tail = s[:-3], s[-3:]
        parts = []
        while len(head) > 2:
            parts.insert(0, head[-2:])
            head = head[:-2]
        if head:
            parts.insert(0, head)
        s = ",".join(parts) + "," + tail
    return ("-" if neg else "") + s


def R(x):
    return "₹" + inr(x)


def T(head, rows):
    return "<table><tr>" + "".join(f"<th>{h}</th>" for h in head) + "</tr>" + "".join("<tr>" + "".join(f"<td>{c}</td>" for c in r) + "</tr>" for r in rows) + "</table>"


def L(*a):
    return "<ul>" + "".join(f"<li>{x}</li>" for x in a) + "</ul>"


def H(s):
    return f"<h4>{s}</h4>"


def P(s):
    return f"<p>{s}</p>"


def F(s):
    return f'<div class="formula">{s}</div>'


ITEMS = []


def add(m, u, t, q, a, ms="", src="Practice set (question folder)", p=3, num=True, put=None):
    d = {"m": m, "u": u, "t": t, "p": p, "q": q, "a": a, "ms": ms, "src": src, "_moved": 1}
    if num:
        d["num"] = 1
    if put:
        d["put"] = put
    ITEMS.append(d)


def payback(outlay, flows):
    cum = 0
    for i, c in enumerate(flows):
        if cum + c >= outlay:
            return i + (outlay - cum) / c
        cum += c
    return None


def npv_table(flows, rate, scrap=0):
    rows, tot = [], 0
    n = len(flows)
    for i, c in enumerate(flows, 1):
        f = pvf(rate, i)
        v = c * f
        tot += v
        rows.append([str(i), inr(c), f"{f:.4f}", inr(v)])
    if scrap:
        f = pvf(rate, n)
        v = scrap * f
        tot += v
        rows.append([f"{n} (scrap)", inr(scrap), f"{f:.4f}", inr(v)])
    rows.append(["<b>Total</b>", "", "", f"<b>{inr(tot)}</b>"])
    return rows, tot


def npv_at(flows, rate, scrap, outlay):
    n = len(flows)
    return sum(c * pvf(rate, i) for i, c in enumerate(flows, 1)) + scrap * pvf(rate, n) - outlay


def irr_interp(flows, scrap, outlay, lo_start=1, hi=60):
    prev = None
    for r in range(lo_start, hi):
        v = npv_at(flows, r / 100, scrap, outlay)
        if v < 0:
            lo = r - 1
            vlo = npv_at(flows, lo / 100, scrap, outlay)
            irr = lo + vlo / (vlo - v)
            return lo, r, vlo, v, irr
    return None


def capital_budget_full(q_label, outlay, years, flows, scrap, avg_profit_or_none, rate, dep_calc=None, tax=None, pbdt=None, put=None, m=12.5, unit="Unit II", qtext=""):
    """flows = annual cash inflows list (after tax), returns the answer html."""
    parts = []
    inflow_note = ""
    avg_inv = (outlay + scrap) / 2
    if pbdt is not None:
        dep = (outlay - scrap) / years
        pbt = pbdt - dep
        taxamt = pbt * tax
        pat = pbt - taxamt
        cfat = pat + dep
        flows = [cfat] * years
        avg_profit = pat
        parts.append(H("1. Cash inflow after tax (CFAT) from PBDT") + T(["Item", "₹"], [["PBDT (profit before depreciation and tax)", inr(pbdt)], [f"Less depreciation = ({inr(outlay)} - {inr(scrap)}) / {years}", inr(dep)], ["Profit before tax (PBT)", inr(pbt)], [f"Less tax at {int(tax*100)}%", inr(taxamt)], ["<b>Profit after tax (PAT)</b>", f"<b>{inr(pat)}</b>"], ["Add back depreciation", inr(dep)], ["<b>CFAT = PAT + depreciation</b>", f"<b>{inr(cfat)}</b>"]]))
    else:
        avg_profit = avg_profit_or_none
    return parts, flows, avg_profit, avg_inv


def cb_solution(outlay, years, flows, scrap, rate, avg_profit, avg_inv, pre_html, extra_note=""):
    html = pre_html
    pb = payback(outlay, flows)
    html += H("Payback period") + (F(f"Cumulative inflows: " + ", ".join(inr(sum(flows[: i + 1])) for i in range(len(flows))) + (f" → recovered in year {int(pb)+1}" if pb else "")) + P(f"Payback = {int(pb)} years + ({inr(outlay - sum(flows[:int(pb)]))} / {inr(flows[int(pb)])}) = <b>{pb:.2f} years</b>" if pb else "Not recovered within the life of the project."))
    html += H("ARR (accounting rate of return)") + F(f"ARR = Average annual profit / Average investment x 100 = {inr(avg_profit)} / {inr(avg_inv)} x 100 = <b>{avg_profit/avg_inv*100:.2f}%</b>") + P(f"Average investment = (initial investment + scrap value) / 2 = ({inr(outlay)} + {inr(scrap)}) / 2 = {inr(avg_inv)}.")
    rows, tot = npv_table(flows, rate, scrap)
    npv = tot - outlay
    html += H(f"NPV at {int(rate*100)}%") + T(["Year", "Cash flow (₹)", f"PVF @ {int(rate*100)}%", "Present value (₹)"], rows) + F(f"NPV = {inr(tot)} - {inr(outlay)} = <b>{'+' if npv>=0 else ''}{R(npv)}</b>")
    html += H("Profitability index") + F(f"PI = PV of inflows / Initial investment = {inr(tot)} / {inr(outlay)} = <b>{tot/outlay:.3f}</b>")
    ir = irr_interp(flows, scrap, outlay)
    if ir:
        lo, hi, vlo, vhi, irr = ir
        html += H("IRR by interpolation") + T(["Rate", "NPV (₹)"], [[f"{lo}%", inr(vlo)], [f"{hi}%", inr(vhi)]]) + F(f"IRR = {lo}% + [{inr(vlo)} / ({inr(vlo)} - ({inr(vhi)}))] x ({hi} - {lo})% = <b>{irr:.2f}%</b> (approx.)")
        irr_val = irr
    else:
        irr_val = None
    dec = "Accept" if npv > 0 else "Reject"
    html += H("Decision") + P(f"NPV is {'positive' if npv>0 else 'negative'}, PI is {'above' if tot/outlay>1 else 'below'} 1 and the IRR ({irr_val:.2f}%) is {'above' if irr_val and irr_val/100>rate else 'below'} the cost of capital ({int(rate*100)}%) → <b>{dec} the project</b>.") + extra_note
    return html, dict(pb=pb, arr=avg_profit / avg_inv * 100, npv=npv, pi=tot / outlay, irr=irr_val)


# =========================================================== CAPITAL BUDGETING PRACTICE (6)
CB = []
# Q1
pre = ""
html, r = cb_solution(1000000, 5, [300000] * 5, 100000, 0.12, 150000, 550000, pre)
add(12.5, "Unit II", "Capital budgeting numerical", "ABC Ltd. - investment ₹10,00,000, life 5 years, equal annual cash inflows ₹3,00,000, scrap value ₹1,00,000 at the end of year 5, average accounting profit ₹1,50,000, required rate 12%. Calculate payback period, ARR, NPV, profitability index and IRR.", P("<b>Given:</b> outlay ₹10,00,000; inflow ₹3,00,000 a year for 5 years; scrap ₹1,00,000 in year 5; average profit ₹1,50,000; k = 12%. PVIFA(12%, 5) = 3.6048; PVF(12%, 5) = 0.5674.") + html, ms="Payback 1 · ARR 2 · NPV table 4 · PI 1.5 · IRR 3 · decision 1", src="Practice set - Capital Budgeting.pdf Q1")
# Q2,3,5: PBDT based
def pbdt_case(label, outlay, years, scrap, pbdt, tax, rate):
    pre, flows, avg_profit, avg_inv = capital_budget_full(label, outlay, years, None, scrap, None, rate, tax=tax, pbdt=pbdt)
    pre = "".join(pre)
    html, r = cb_solution(outlay, years, flows, scrap, rate, avg_profit, avg_inv, pre)
    return html, r


for lab, outlay, years, scrap, pbdt, tax, rate, text in [
    ("2", 1000000, 5, 100000, 300000, 0.30, 0.12, "ABC Ltd. is considering a machine costing ₹10,00,000, life 5 years, scrap value ₹1,00,000. PBDT ₹3,00,000 every year, straight-line depreciation, tax rate 30%, required rate of return 12%. Calculate payback period, ARR, NPV, profitability index and IRR."),
    ("3", 1800000, 6, 300000, 500000, 0.30, 0.14, "XYZ Ltd. is considering an investment of ₹18,00,000 in a machine with a life of 6 years and scrap value ₹3,00,000. PBDT ₹5,00,000 per year, straight-line depreciation, tax rate 30%, cost of capital 14%. Calculate payback period, ARR, NPV, profitability index and IRR."),
    ("5", 2000000, 5, 200000, 600000, 0.35, 0.15, "DEF Ltd. is evaluating a project requiring an initial investment of ₹20,00,000, life 5 years, scrap value ₹2,00,000. Expected PBDT ₹6,00,000 per year, tax rate 35%, required rate of return 15%. Calculate payback period, ARR, NPV, profitability index and IRR."),
]:
    html, r = pbdt_case(lab, outlay, years, scrap, pbdt, tax, rate)
    add(12.5, "Unit II", "Capital budgeting numerical", text, P(f"<b>Approach:</b> convert PBDT into cash inflow after tax (CFAT = PAT + depreciation), then apply the four techniques. Scrap value is received at the end of year {years}.") + html, ms="CFAT working 3 · payback 1 · ARR 1.5 · NPV 3 · PI 1 · IRR 2 · decision 1", src=f"Practice set - Capital Budgeting.pdf Q{lab}")
# Q4 uneven
fl4 = [200000, 300000, 400000, 350000, 250000]
html, r = cb_solution(1000000, 5, fl4, 100000, 0.12, 160000, 550000, "")
add(12.5, "Unit II", "Capital budgeting numerical", "RST Ltd. is considering an investment of ₹10,00,000, life 5 years. Cash inflows: ₹2 lakh, ₹3 lakh, ₹4 lakh, ₹3.5 lakh and ₹2.5 lakh. Scrap value at the end of year 5 = ₹1,00,000. Average profit = ₹1,60,000. Required rate of return = 12%. Calculate payback period, ARR, NPV, PI and IRR.", P("<b>Given:</b> uneven inflows; scrap ₹1,00,000 in year 5; average profit ₹1,60,000; k = 12%.") + html, ms="Payback 1.5 · ARR 1.5 · NPV table 3.5 · PI 1.5 · IRR 3 · decision 1", src="Practice set - Capital Budgeting.pdf Q4")
# Q6 uneven PBDT
pbdt6 = [300000, 400000, 350000, 500000, 450000]
dep6 = (1200000 - 100000) / 5
rows6, flows6, pats = [], [], []
for i, b in enumerate(pbdt6, 1):
    pbt = b - dep6
    tx = pbt * 0.30
    pat = pbt - tx
    cf = pat + dep6
    flows6.append(cf)
    pats.append(pat)
    rows6.append([str(i), inr(b), inr(dep6), inr(pbt), inr(tx), inr(pat), inr(cf)])
pre6 = H("1. Cash inflow after tax each year") + P(f"Depreciation = (12,00,000 - 1,00,000) / 5 = {inr(dep6)} a year.") + T(["Year", "PBDT", "Depreciation", "PBT", "Tax 30%", "PAT", "CFAT"], rows6)
avgp6 = sum(pats) / 5
html, r = cb_solution(1200000, 5, flows6, 100000, 0.12, avgp6, 650000, pre6, extra_note="")
add(12.5, "Unit II", "Capital budgeting numerical", "ABC Ltd. is considering a project requiring an initial investment of ₹12,00,000, life 5 years, scrap value ₹1,00,000. Expected PBDT: ₹3 lakh, ₹4 lakh, ₹3.5 lakh, ₹5 lakh and ₹4.5 lakh. Tax rate 30%, cost of capital 12%. Calculate payback period, ARR, NPV, PI and IRR.", P("<b>Approach:</b> PBDT differs each year, so find tax, PAT and CFAT year by year. Average profit = average of the five PATs.") + html, ms="CFAT table 3 · payback 1 · ARR 1.5 · NPV 3 · PI 1 · IRR 2 · decision 0.5", src="Practice set - Capital Budgeting.pdf Q6")


# =========================================================== LEVERAGE PRACTICE (10)
def lev_html(sales=None, vc=None, fc=None, interest=0, pd=0, tax=0.0, change=None, title_extra=""):
    contrib = sales - vc
    ebit = contrib - fc
    ebt = ebit - interest
    dol = contrib / ebit
    dfl = ebit / ebt if not pd else ebit / (ebit - interest - pd / (1 - tax))
    dcl = dol * dfl
    return contrib, ebit, ebt, dol, dfl, dcl


def stmt(sales, vc, fc, interest):
    contrib = sales - vc
    ebit = contrib - fc
    ebt = ebit - interest
    return T(["Item", "₹"], [["Sales", inr(sales)], ["Less variable cost", inr(vc)], ["<b>Contribution</b>", f"<b>{inr(contrib)}</b>"], ["Less fixed operating cost", inr(fc)], ["<b>EBIT</b>", f"<b>{inr(ebit)}</b>"], ["Less interest", inr(interest)], ["<b>EBT</b>", f"<b>{inr(ebt)}</b>"]])


F_DOL = "DOL = Contribution / EBIT"
F_DFL = "DFL = EBIT / EBT"
F_DCL = "DCL = DOL x DFL = Contribution / EBT"

# L1
s, v, fc = 1000000, 600000, 200000
c, e, _, dol, _, _ = lev_html(s, v, fc, 0)
add(6.25, "Unit III", "Leverage numerical", "A company has sales of ₹10,00,000, variable costs 60% of sales and fixed operating costs ₹2,00,000. Calculate contribution, EBIT, degree of operating leverage and the expected percentage change in EBIT if sales increase by 15%.",
    T(["Item", "₹"], [["Sales", inr(s)], ["Less variable cost (60%)", inr(v)], ["<b>Contribution</b>", f"<b>{inr(c)}</b>"], ["Less fixed operating cost", inr(fc)], ["<b>EBIT</b>", f"<b>{inr(e)}</b>"]]) + F(f"DOL = Contribution / EBIT = {inr(c)} / {inr(e)} = <b>{dol:.2f}</b>") + F(f"% change in EBIT = DOL x % change in sales = {dol:.2f} x 15% = <b>{dol*15:.1f}% increase</b>") + P(f"Check: sales {inr(s*1.15)}; variable cost {inr(v*1.15)}; contribution {inr(c*1.15)}; EBIT {inr(c*1.15-fc)} → rise of {(c*1.15-fc-e)/e*100:.1f}%."), src="Practice set - Leverage Questions.pdf Q1")
# L2
e2, i2 = 800000, 200000
ebt2 = e2 - i2
dfl2 = e2 / ebt2
add(6.25, "Unit III", "Leverage numerical", "A company has EBIT ₹8,00,000 and annual interest ₹2,00,000. Calculate EBT, degree of financial leverage and the percentage change in EPS if EBIT increases by 20%.",
    F(f"EBT = EBIT - Interest = {inr(e2)} - {inr(i2)} = <b>{R(ebt2)}</b>") + F(f"DFL = EBIT / EBT = {inr(e2)} / {inr(ebt2)} = <b>{dfl2:.2f}</b>") + F(f"% change in EPS = DFL x % change in EBIT = {dfl2:.2f} x 20% = <b>{dfl2*20:.2f}% increase</b>") + P(f"Check: EBIT becomes {inr(e2*1.2)}; EBT = {inr(e2*1.2-i2)}, a rise of {(e2*1.2-i2-ebt2)/ebt2*100:.2f}% (EPS moves by the same percentage when the number of shares and tax rate are unchanged)."), src="Practice set - Leverage Questions.pdf Q2")


def full_lev(q, sales, vc, fc, interest, pct, label, src, mprint=12.5, sign=1):
    c, e, ebt, dol, dfl, dcl = lev_html(sales, vc, fc, interest)
    word = "increase" if sign > 0 else "decline"
    html = stmt(sales, vc, fc, interest) + F(f"DOL = {inr(c)} / {inr(e)} = <b>{dol:.2f}</b>") + F(f"DFL = {inr(e)} / {inr(ebt)} = <b>{dfl:.2f}</b>") + F(f"DCL = DOL x DFL = {dol:.2f} x {dfl:.2f} = <b>{dcl:.2f}</b> (check: {inr(c)} / {inr(ebt)} = {c/ebt:.2f})")
    html += P(f"<b>If sales {word} by {pct}%:</b> EBIT changes by DOL x {pct}% = <b>{dol*pct:.2f}%</b> {word}; EPS changes by DCL x {pct}% = <b>{dcl*pct:.2f}%</b> {word}.")
    html += P("<b>Meaning:</b> a higher leverage figure means a bigger swing in profit for the same change in sales - gains and losses are both magnified, so risk is higher.")
    add(mprint, "Unit III", "Leverage numerical", q, html, src=src)
    return c, e, ebt, dol, dfl, dcl


full_lev("A firm's sales are ₹20,00,000. Variable costs ₹12,00,000, fixed operating costs ₹4,00,000, annual interest ₹1,00,000. Calculate contribution, EBIT, EBT, DOL, DFL, DCL and the expected percentage change in EPS if sales increase by 10%.", 2000000, 1200000, 400000, 100000, 10, "3", "Practice set - Leverage Questions.pdf Q3")
full_lev("A company has sales ₹30,00,000, variable costs ₹18,00,000, fixed operating costs ₹6,00,000 and interest ₹2,00,000. Calculate DOL, DFL, DCL, the expected % change in EBIT and in EPS if sales decline by 10%.", 3000000, 1800000, 600000, 200000, 10, "4", "Practice set - Leverage Questions.pdf Q4", sign=-1)
# L5
sales5, vc5, dol5 = 5000000, 3000000, 2.5
c5 = sales5 - vc5
e5 = c5 / dol5
fc5 = c5 - e5
i5 = 300000
ebt5 = e5 - i5
dfl5 = e5 / ebt5
add(12.5, "Unit III", "Leverage numerical", "A company has sales ₹50,00,000 and variable costs ₹30,00,000. Its degree of operating leverage is 2.5. Calculate contribution, EBIT and fixed operating cost. If annual interest is ₹3,00,000, calculate DFL and DCL.",
    F(f"Contribution = Sales - Variable cost = {inr(sales5)} - {inr(vc5)} = <b>{R(c5)}</b>") + F(f"DOL = Contribution / EBIT ⇒ EBIT = {inr(c5)} / 2.5 = <b>{R(e5)}</b>") + F(f"Fixed operating cost = Contribution - EBIT = {inr(c5)} - {inr(e5)} = <b>{R(fc5)}</b>") + F(f"EBT = EBIT - interest = {inr(e5)} - {inr(i5)} = {inr(ebt5)}; &nbsp; DFL = EBIT / EBT = {inr(e5)} / {inr(ebt5)} = <b>{dfl5:.2f}</b>") + F(f"DCL = DOL x DFL = 2.5 x {dfl5:.2f} = <b>{2.5*dfl5:.2f}</b>"), src="Practice set - Leverage Questions.pdf Q5")
# L6 two companies
rowsA = (4000000, 2400000, 800000, 200000)
rowsB = (4000000, 1600000, 1200000, 200000)
resA = lev_html(*rowsA[:3], rowsA[3])
resB = lev_html(*rowsB[:3], rowsB[3])
tbl = T(["Item (₹ lakh)", "Company A", "Company B"], [["Sales", "40", "40"], ["Variable cost", "24", "16"], ["Contribution", f"{resA[0]/1e5:.0f}", f"{resB[0]/1e5:.0f}"], ["Fixed operating cost", "8", "12"], ["EBIT", f"{resA[1]/1e5:.0f}", f"{resB[1]/1e5:.0f}"], ["Interest", "2", "2"], ["EBT", f"{resA[2]/1e5:.0f}", f"{resB[2]/1e5:.0f}"], ["<b>DOL</b> = contribution / EBIT", f"<b>{resA[3]:.2f}</b>", f"<b>{resB[3]:.2f}</b>"], ["<b>DFL</b> = EBIT / EBT", f"<b>{resA[4]:.2f}</b>", f"<b>{resB[4]:.2f}</b>"], ["<b>DCL</b> = DOL x DFL", f"<b>{resA[5]:.2f}</b>", f"<b>{resB[5]:.2f}</b>"]])
add(12.5, "Unit III", "Leverage numerical", "Two companies A and B: Sales ₹40 lakh each; variable cost ₹24 lakh and ₹16 lakh; fixed operating cost ₹8 lakh and ₹12 lakh; interest ₹2 lakh each. Calculate DOL, DFL and DCL for both. Which company has higher operating risk, higher financial risk and higher combined risk?",
    tbl + L("<b>Operating risk:</b> Company B is higher (DOL %.2f against %.2f) - it has larger fixed operating costs and a higher contribution margin." % (resB[3], resA[3]), "<b>Financial risk:</b> Company B is higher (DFL %.2f against %.2f) because the same interest is paid out of a smaller EBIT." % (resB[4], resA[4]), "<b>Combined risk:</b> Company B is higher (DCL %.2f against %.2f); a given change in sales moves B's EPS far more." % (resB[5], resA[5])) + P("<b>Conclusion:</b> Company B earns more when sales rise but is much riskier when they fall; a risk-averse investor prefers Company A."), src="Practice set - Leverage Questions.pdf Q6")
# L7 pref dividend
e7, i7, pd7, t7 = 1200000, 200000, 100000, 0.30
ebt7 = e7 - i7
tax7 = ebt7 * t7
pat7 = ebt7 - tax7
eq7 = pat7 - pd7
dfl7 = e7 / (e7 - i7 - pd7 / (1 - t7))
add(12.5, "Unit III", "Leverage numerical", "A company has EBIT ₹12,00,000, interest ₹2,00,000 and preference dividend ₹1,00,000. Tax rate 30%. Calculate EBT, profit after tax, earnings available to equity shareholders, DFL, and the estimated % change in EPS if EBIT increases by 15%.",
    T(["Item", "₹"], [["EBIT", inr(e7)], ["Less interest", inr(i7)], ["<b>EBT</b>", f"<b>{inr(ebt7)}</b>"], ["Less tax at 30%", inr(tax7)], ["<b>Profit after tax</b>", f"<b>{inr(pat7)}</b>"], ["Less preference dividend", inr(pd7)], ["<b>Earnings for equity shareholders</b>", f"<b>{inr(eq7)}</b>"]]) + F(f"DFL (with preference dividend) = EBIT / [EBIT - I - PD / (1 - t)] = {inr(e7)} / [{inr(e7)} - {inr(i7)} - {inr(pd7)} / 0.70] = {inr(e7)} / {inr(e7-i7-pd7/(1-t7))} = <b>{dfl7:.2f}</b>") + F(f"% change in EPS = {dfl7:.2f} x 15% = <b>{dfl7*15:.2f}% increase</b>") + P("Preference dividend is paid from after-tax profit, so it is divided by (1 - t) to bring it to a pre-tax equivalent."), src="Practice set - Leverage Questions.pdf Q7")
# L8
sales8, vc8, fc8 = 8000000, 4000000, 2000000
int8 = 3000000 * 0.10
c8, e8, ebt8, dol8, dfl8, dcl8 = lev_html(sales8, vc8, fc8, int8)
add(12.5, "Unit III", "Leverage numerical", "A company has sales ₹80,00,000. Variable costs are 50% of sales, fixed operating costs ₹20,00,000. It has ₹30,00,000 of 10% debt. Calculate contribution, EBIT, interest, EBT, DOL, DFL, DCL and the expected % change in EBIT and EPS if sales increase by 12%.",
    stmt(sales8, vc8, fc8, int8) + P(f"Interest = 10% x 30,00,000 = {R(int8)}.") + F(f"DOL = {inr(c8)} / {inr(e8)} = <b>{dol8:.2f}</b>; &nbsp; DFL = {inr(e8)} / {inr(ebt8)} = <b>{dfl8:.2f}</b>; &nbsp; DCL = <b>{dcl8:.2f}</b>") + P(f"<b>Sales up 12%:</b> EBIT rises {dol8:.2f} x 12% = <b>{dol8*12:.2f}%</b>; EPS rises {dcl8:.2f} x 12% = <b>{dcl8*12:.2f}%</b>."), src="Practice set - Leverage Questions.pdf Q8")
# L9
e9, dfl9, dol9 = 1500000, 2.5, 2
ebt9 = e9 / dfl9
int9 = e9 - ebt9
add(12.5, "Unit III", "Leverage numerical", "A company has EBIT ₹15,00,000 and degree of financial leverage 2.5. Calculate EBT and annual interest. If DOL is 2, calculate DCL and the expected % change in EPS if sales increase by 10%.",
    F(f"DFL = EBIT / EBT ⇒ EBT = {inr(e9)} / 2.5 = <b>{R(ebt9)}</b>") + F(f"Interest = EBIT - EBT = {inr(e9)} - {inr(ebt9)} = <b>{R(int9)}</b>") + F(f"DCL = DOL x DFL = 2 x 2.5 = <b>5</b>") + F("% change in EPS = DCL x % change in sales = 5 x 10% = <b>50% increase</b>"), src="Practice set - Leverage Questions.pdf Q9")
# L10 two plans
sales10, vc10, fc10, tax10 = 10000000, 5000000, 2500000, 0.30
c10 = sales10 - vc10
e10 = c10 - fc10
plans = {"Plan A": (4000000, 0.10, 600000), "Plan B": (6000000, 0.12, 400000)}
rows10 = []
res10 = {}
for k, (debt, rate, shares) in plans.items():
    i = debt * rate
    ebt = e10 - i
    pat = ebt * (1 - tax10)
    eps = pat / shares
    dol, dfl = c10 / e10, e10 / ebt
    res10[k] = (i, ebt, pat, eps, dol, dfl, dol * dfl)
rows10 = [["Contribution (₹)", inr(c10), inr(c10)], ["EBIT (₹)", inr(e10), inr(e10)]]
labels = ["Interest (₹)", "EBT (₹)", "PAT (₹)", "EPS (₹)", "DOL", "DFL", "DCL"]
for j, lab in enumerate(labels, 0):
    vals = []
    for k in plans:
        v = res10[k][j]
        vals.append(inr(v) if j < 3 else f"{v:.2f}")
    rows10.append([f"<b>{lab}</b>" if j >= 3 else lab, *vals])
a, b = res10["Plan A"], res10["Plan B"]
add(12.5, "Unit III", "Leverage numerical", "Two capital structures: Plan A - equity ₹60 lakh, debt ₹40 lakh at 10%, 6 lakh shares; Plan B - equity ₹40 lakh, debt ₹60 lakh at 12%, 4 lakh shares. Sales ₹100 lakh, variable cost 50%, fixed operating cost ₹25 lakh, tax 30%. Calculate contribution, EBIT, interest, EBT, PAT, EPS, DOL, DFL, DCL; state which plan gives higher EPS and carries higher financial risk, and which suits a risk-averse investor.",
    P("Contribution = 1,00,00,000 - 50,00,000 = ₹50,00,000; EBIT = 50,00,000 - 25,00,000 = ₹25,00,000 (same under both plans).") + T(["Item", "Plan A", "Plan B"], rows10) + L(f"<b>Higher EPS:</b> Plan B (₹{b[3]:.2f} against ₹{a[3]:.2f}) - more debt and fewer shares.", f"<b>Higher financial risk:</b> Plan B (DFL {b[5]:.2f} against {a[5]:.2f}; interest ₹{inr(b[0])} against ₹{inr(a[0])}).", "<b>Risk-averse investor:</b> Plan A - lower interest burden and lower DCL, so EPS is steadier if sales fall.") + P("DOL is the same (2.00) because operating costs are the same; only the financing differs."), src="Practice set - Leverage Questions.pdf Q10")

# =========================================================== NUMERICAL QUESTIONS BANK
SRC = "Practice set - Numerical Questions.pdf"
# Unit I
add(6.25, "Unit I", "Time value of money", "An individual deposits ₹60,000 in a bank account earning 9% compound interest per annum. Calculate the amount accumulated at the end of 4 years.", F(f"FV = PV x (1 + i)<sup>n</sup> = 60,000 x (1.09)<sup>4</sup> = 60,000 x {fvf(.09,4):.4f} = <b>{R(60000*fvf(.09,4))}</b>") + P(f"Interest earned = {inr(60000*fvf(.09,4)-60000)}."), src=SRC + " Unit I Q1")
add(6.25, "Unit I", "Time value of money", "A company expects to receive ₹2,00,000 after 5 years. Calculate the present value if the discount rate is 10% per annum.", F(f"PV = FV / (1 + i)<sup>n</sup> = 2,00,000 x PVF(10%, 5) = 2,00,000 x {pvf(.10,5):.4f} = <b>{R(200000*pvf(.10,5))}</b>"), src=SRC + " Unit I Q2")
add(6.25, "Unit I", "Annuity", "An investor deposits ₹25,000 at the end of every year for 6 years at 8% per annum. Calculate the future value of the ordinary annuity at the end of the sixth year.", F(f"FVA = A x [((1 + i)<sup>n</sup> - 1) / i] = 25,000 x FVIFA(8%, 6) = 25,000 x {fvifa(.08,6):.4f} = <b>{R(25000*fvifa(.08,6))}</b>") + P(f"Total deposits = 1,50,000; interest = {inr(25000*fvifa(.08,6)-150000)}."), src=SRC + " Unit I Q3")
add(6.25, "Unit I", "Annuity", "A person wishes to receive ₹40,000 at the end of each year for 5 years. Calculate the amount to be invested today if the discount rate is 9% per annum.", F(f"PVA = A x PVIFA(9%, 5) = 40,000 x {pvifa(.09,5):.4f} = <b>{R(40000*pvifa(.09,5))}</b>"), src=SRC + " Unit I Q4")
# bond 5
rows = [[str(t), "90", f"{pvf(.11,t):.4f}", f"{90*pvf(.11,t):.2f}"] for t in range(1, 6)]
v5 = 90 * pvifa(.11, 5) + 1000 * pvf(.11, 5)
add(6.25, "Unit I", "Bond valuation", "A 5-year bond with face value ₹1,000 and annual coupon 9% (interest annually, redeemable at par). Required rate of return 11%. Calculate the value of the bond.",
    P("Interest = 9% x 1,000 = ₹90 a year; redemption = ₹1,000 at the end of year 5; k<sub>d</sub> = 11%.") + F(f"V = I x PVIFA(11%, 5) + F x PVIF(11%, 5) = 90 x {pvifa(.11,5):.4f} + 1,000 x {pvf(.11,5):.4f} = {90*pvifa(.11,5):.2f} + {1000*pvf(.11,5):.2f} = <b>₹{v5:.2f}</b>") + P(f"Coupon (9%) < required return (11%) → the bond sells at a <b>discount</b> (₹{1000-v5:.2f} below face value)."), src=SRC + " Unit I Q5")
red = 5000 * 1.05
v6 = 600 * pvifa(.10, 4) + red * pvf(.10, 4)
add(6.25, "Unit I", "Bond valuation", "A 4-year bond has face value ₹5,000, annual coupon 12%, redeemable at a premium of 5% over face value. Required rate of return 10%, interest paid annually. Calculate the present value of the bond.",
    P("Interest = 12% x 5,000 = ₹600 a year; redemption value = 5,000 x 1.05 = ₹5,250; k<sub>d</sub> = 10%.") + F(f"V = 600 x PVIFA(10%, 4) + 5,250 x PVIF(10%, 4) = 600 x {pvifa(.10,4):.4f} + 5,250 x {pvf(.10,4):.4f} = {600*pvifa(.10,4):,.2f} + {red*pvf(.10,4):,.2f} = <b>₹{v6:,.2f}</b>") + P("Coupon above the required return and a redemption premium → value is above face value (premium bond)."), src=SRC + " Unit I Q6")

# Unit II
f1 = [120000, 140000, 160000, 150000, 130000]
pb1 = payback(480000, f1)
cum = [sum(f1[: i + 1]) for i in range(5)]
add(6.25, "Unit II", "Payback", "A project requires an initial investment of ₹4,80,000. Annual inflows: ₹1,20,000, ₹1,40,000, ₹1,60,000, ₹1,50,000 and ₹1,30,000. Calculate the payback period.",
    T(["Year", "Inflow (₹)", "Cumulative (₹)"], [[str(i + 1), inr(f1[i]), inr(cum[i])] for i in range(5)]) + F(f"Payback = 3 years + (4,80,000 - {inr(cum[2])}) / {inr(f1[3])} = 3 + {inr(480000-cum[2])} / {inr(f1[3])} = <b>{pb1:.2f} years</b> (about 3 years and 2 months)"), src=SRC + " Unit II Q1")
f2 = [180000, 170000, 160000, 150000]
rows, tot = npv_table(f2, .10)
add(6.25, "Unit II", "NPV", "A project requires an initial investment of ₹5,00,000 and generates inflows of ₹1,80,000, ₹1,70,000, ₹1,60,000 and ₹1,50,000 over four years. Cost of capital 10%. Calculate NPV and state the decision.",
    T(["Year", "Inflow (₹)", "PVF @ 10%", "PV (₹)"], rows) + F(f"NPV = {inr(tot)} - 5,00,000 = <b>{'+' if tot>500000 else ''}{R(tot-500000)}</b>") + P("NPV is " + ("positive → <b>accept</b>." if tot > 500000 else "negative → <b>reject</b> (the project does not earn the 10% required return).")), src=SRC + " Unit II Q2")
f3 = [200000, 220000, 240000, 260000]
rows, tot = npv_table(f3, .12)
add(6.25, "Unit II", "Profitability index", "A project costing ₹6,00,000 gives inflows of ₹2,00,000, ₹2,20,000, ₹2,40,000 and ₹2,60,000 over four years. Cost of capital 12%. Calculate the profitability index and evaluate the proposal.",
    T(["Year", "Inflow (₹)", "PVF @ 12%", "PV (₹)"], rows) + F(f"PI = PV of inflows / Initial investment = {inr(tot)} / 6,00,000 = <b>{tot/600000:.3f}</b>") + P(f"NPV = {inr(tot-600000)}. " + ("PI above 1 → <b>accept</b>." if tot > 600000 else "PI below 1 → <b>reject</b>.")), src=SRC + " Unit II Q3")
# irr annuity
n = 4
a15, a20 = pvifa(.15, 4), pvifa(.20, 4)
v15, v20 = 150000 * a15 - 400000, 150000 * a20 - 400000
irr4 = 15 + v15 / (v15 - v20) * 5
add(6.25, "Unit II", "IRR", "A project requires ₹4,00,000 and gives annual inflows of ₹1,50,000 for four years. Estimate the IRR by interpolation using trial rates of 15% and 20%.",
    F(f"Present value factor needed (payback ratio) = 4,00,000 / 1,50,000 = 2.667") + T(["Rate", "PVIFA (4 yrs)", "PV of inflows (₹)", "NPV (₹)"], [["15%", f"{a15:.4f}", inr(150000 * a15), inr(v15)], ["20%", f"{a20:.4f}", inr(150000 * a20), inr(v20)]]) + F(f"IRR = 15% + [{inr(v15)} / ({inr(v15)} - ({inr(v20)}))] x 5% = <b>{irr4:.2f}%</b> (approx.)") + P("Between the PVIFA values 2.8550 (15%) and 2.5887 (20%), 2.667 falls at about 18.5% - consistent with the interpolated answer."), src=SRC + " Unit II Q4")
f5 = [200000, 250000, 300000, 200000]
pb5 = payback(700000, f5)
rows, tot = npv_table(f5, .10)
add(6.25, "Unit II", "Capital budgeting", "A project requires ₹7,00,000. Inflows: ₹2,00,000, ₹2,50,000, ₹3,00,000 and ₹2,00,000 in years 1-4. Cost of capital 10%. Calculate payback period, NPV and profitability index.",
    P(f"<b>Payback:</b> cumulative inflows 2,00,000; 4,50,000; 7,50,000 → 2 years + (7,00,000 - 4,50,000) / 3,00,000 = <b>{pb5:.2f} years</b>.") + T(["Year", "Inflow (₹)", "PVF @ 10%", "PV (₹)"], rows) + F(f"NPV = {inr(tot)} - 7,00,000 = <b>{'+' if tot>700000 else ''}{R(tot-700000)}</b>; &nbsp; PI = {inr(tot)} / 7,00,000 = <b>{tot/700000:.3f}</b>") + P("NPV " + ("positive and PI above 1 → <b>accept</b>." if tot > 700000 else "negative and PI below 1 → <b>reject</b>.")), src=SRC + " Unit II Q5")
fa, fb = [250000, 200000, 150000], [150000, 200000, 300000]
ra, ta = npv_table(fa, .10)
rb, tb = npv_table(fb, .10)
add(6.25, "Unit II", "Mutually exclusive projects", "Two mutually exclusive projects each cost ₹5,00,000. A: ₹2,50,000, ₹2,00,000, ₹1,50,000; B: ₹1,50,000, ₹2,00,000, ₹3,00,000 over three years. Cost of capital 10%. Calculate the NPV of each and recommend one.",
    H("Project A") + T(["Year", "Inflow (₹)", "PVF @ 10%", "PV (₹)"], ra) + H("Project B") + T(["Year", "Inflow (₹)", "PVF @ 10%", "PV (₹)"], rb) + F(f"NPV of A = {inr(ta)} - 5,00,000 = <b>{R(ta-500000)}</b>; &nbsp; NPV of B = {inr(tb)} - 5,00,000 = <b>{R(tb-500000)}</b>") + P(f"<b>Recommendation:</b> choose Project {'A' if ta>tb else 'B'} (higher NPV). " + ("A returns cash earlier, so its flows are discounted less." if ta > tb else "B's larger later inflows more than compensate for the heavier discounting.")), src=SRC + " Unit II Q6")

# Unit III
add(6.25, "Unit III", "Leverage", "A company sells 20,000 units at ₹50 per unit. Variable cost ₹30 per unit, fixed operating cost ₹2,00,000. Calculate contribution, EBIT and operating leverage.", T(["Item", "₹"], [["Sales (20,000 x 50)", "10,00,000"], ["Variable cost (20,000 x 30)", "6,00,000"], ["<b>Contribution</b>", "<b>4,00,000</b>"], ["Fixed cost", "2,00,000"], ["<b>EBIT</b>", "<b>2,00,000</b>"]]) + F("DOL = Contribution / EBIT = 4,00,000 / 2,00,000 = <b>2</b>"), src=SRC + " Unit III Q1")
add(6.25, "Unit III", "Leverage", "A company has EBIT ₹8,00,000 and annual interest ₹2,00,000. Calculate its financial leverage.", F("DFL = EBIT / EBT = 8,00,000 / (8,00,000 - 2,00,000) = 8,00,000 / 6,00,000 = <b>1.33</b>") + P("A 1% change in EBIT changes EPS by 1.33%."), src=SRC + " Unit III Q2")
c3 = 25000 * (80 - 45)
e3 = c3 - 400000
ebt3 = e3 - 100000
add(6.25, "Unit III", "Leverage", "A company sells 25,000 units at ₹80. Variable cost ₹45 per unit, fixed operating cost ₹4,00,000, annual interest ₹1,00,000. Calculate operating, financial and combined leverage.", T(["Item", "₹"], [["Sales (25,000 x 80)", inr(2000000)], ["Variable cost (25,000 x 45)", inr(1125000)], ["<b>Contribution</b>", f"<b>{inr(c3)}</b>"], ["Fixed cost", "4,00,000"], ["<b>EBIT</b>", f"<b>{inr(e3)}</b>"], ["Interest", "1,00,000"], ["<b>EBT</b>", f"<b>{inr(ebt3)}</b>"]]) + F(f"DOL = {inr(c3)} / {inr(e3)} = <b>{c3/e3:.2f}</b>; &nbsp; DFL = {inr(e3)} / {inr(ebt3)} = <b>{e3/ebt3:.2f}</b>; &nbsp; DCL = <b>{c3/ebt3:.2f}</b>"), src=SRC + " Unit III Q3")
c4 = 10000 * 40
e4 = c4 - 200000
ebt4 = e4 - 50000
nc = 11000 * 40
ne = nc - 200000
nebt = ne - 50000
add(6.25, "Unit III", "Leverage", "A company sells 10,000 units at ₹100; variable cost ₹60 per unit, fixed operating cost ₹2,00,000, annual interest ₹50,000. Calculate the percentage change in EBIT and EBT if sales volume increases by 10%.", T(["Item", "Present (10,000 units)", "After (11,000 units)"], [["Contribution (₹)", inr(c4), inr(nc)], ["Fixed cost (₹)", "2,00,000", "2,00,000"], ["EBIT (₹)", inr(e4), inr(ne)], ["Interest (₹)", "50,000", "50,000"], ["EBT (₹)", inr(ebt4), inr(nebt)]]) + F(f"% change in EBIT = ({inr(ne)} - {inr(e4)}) / {inr(e4)} x 100 = <b>{(ne-e4)/e4*100:.0f}%</b> &nbsp; (= DOL {c4/e4:.0f} x 10%)") + F(f"% change in EBT = ({inr(nebt)} - {inr(ebt4)}) / {inr(ebt4)} x 100 = <b>{(nebt-ebt4)/ebt4*100:.2f}%</b> &nbsp; (= DCL {c4/ebt4:.2f} x 10%)"), src=SRC + " Unit III Q4")
add(6.25, "Unit III", "Cost of debt", "XYZ Ltd. has issued 12% irredeemable debentures of ₹1,000 each at par. Tax rate 25%. Calculate before-tax and after-tax cost of debt.", F("Before-tax K<sub>d</sub> = Interest / Net proceeds = 120 / 1,000 = <b>12%</b>") + F("After-tax K<sub>d</sub> = 12% x (1 - 0.25) = <b>9%</b>") + P("The tax shield on interest lowers the effective cost by 3%."), src=SRC + " Unit III Q5")
kd6 = 100 / 950
add(6.25, "Unit III", "Cost of debt", "A company issues 10% irredeemable debentures of ₹1,000 at ₹960 per debenture; flotation expenses ₹10 per debenture; tax rate 30%. Calculate before-tax and after-tax cost using net proceeds.", P("Interest = 10% x 1,000 = ₹100; net proceeds = 960 - 10 = ₹950.") + F(f"Before-tax K<sub>d</sub> = 100 / 950 x 100 = <b>{kd6*100:.2f}%</b>") + F(f"After-tax K<sub>d</sub> = {kd6*100:.2f}% x (1 - 0.30) = <b>{kd6*70:.2f}%</b>"), src=SRC + " Unit III Q6")
kp = 12 / 92
add(6.25, "Unit III", "Cost of preference", "A company issues 12% irredeemable preference shares of ₹100 at ₹95 per share; flotation expenses ₹3 per share. Calculate the cost of preference share capital.", P("Dividend = 12% x 100 = ₹12; net proceeds = 95 - 3 = ₹92.") + F(f"K<sub>p</sub> = PD / NP = 12 / 92 x 100 = <b>{kp*100:.2f}%</b>") + P("No tax adjustment - preference dividend is not tax-deductible."), src=SRC + " Unit III Q7")
add(6.25, "Unit III", "Cost of equity", "Equity shares quoted at ₹160. Expected dividend next year ₹12 per share; constant growth 6%. Calculate the cost of equity using the Dividend Growth Model.", F("K<sub>e</sub> = D<sub>1</sub> / P<sub>0</sub> + g = 12 / 160 + 6% = 7.5% + 6% = <b>13.5%</b>"), src=SRC + " Unit III Q8")
add(6.25, "Unit III", "CAPM", "Risk-free rate 6%, expected market return 14%, equity beta 1.25. Calculate the cost of equity using CAPM.", F("K<sub>e</sub> = R<sub>f</sub> + &beta; (R<sub>m</sub> - R<sub>f</sub>) = 6 + 1.25 x (14 - 6) = 6 + 10 = <b>16%</b>") + P("The market risk premium is 8%; beta 1.25 means the share is 25% more volatile than the market."), src=SRC + " Unit III Q9")


def wacc_table(rows, total):
    out, w = [], 0
    for name, amt, cost in rows:
        wt = amt / total
        w += wt * cost
        out.append([name, inr(amt), f"{wt:.2f}", f"{cost:g}", f"{wt*cost:.2f}"])
    out.append(["<b>WACC</b>", inr(total), "1.00", "", f"<b>{w:.2f}%</b>"])
    return out, w


kd10 = 10 * (1 - 0.30)
rows, w = wacc_table([("Debt", 500000, kd10), ("Preference", 200000, 12), ("Equity", 300000, 16)], 1000000)
add(6.25, "Unit III", "WACC", "ABC Ltd.: debt ₹5,00,000, preference ₹2,00,000, equity ₹3,00,000. Before-tax cost of debt 10%, tax 30%, cost of preference 12%, cost of equity 16%. Calculate WACC using the given amounts as weights.", P("After-tax cost of debt = 10% x (1 - 0.30) = 7%.") + T(["Source", "Amount (₹)", "Weight", "Cost (%)", "Weight x cost"], rows) + F(f"WACC = <b>{w:.2f}%</b>"), src=SRC + " Unit III Q10")
rows, w = wacc_table([("Debt", 400000, 7), ("Preference", 100000, 11), ("Equity", 500000, 15)], 1000000)
add(6.25, "Unit III", "WACC", "A company has debt ₹4,00,000, preference ₹1,00,000, equity ₹5,00,000. After-tax cost of debt 7%, preference 11%, equity 15%. Calculate WACC using the given amounts as weights.", T(["Source", "Amount (₹)", "Weight", "Cost (%)", "Weight x cost"], rows) + F(f"WACC = <b>{w:.2f}%</b>"), src=SRC + " Unit III Q11")

# Unit IV
def walter(E, r, k, payout):
    D = E * payout
    return (D + (r / k) * (E - D)) / k, D


p1, D1 = walter(20, .18, .15, .40)
add(6.25, "Unit IV", "Walter's model", "EPS ₹20, return on investment 18%, cost of equity 15%, dividend payout 40%. Calculate the market value per share using Walter's model.", P(f"D = 40% x 20 = ₹{D1:.0f}; E - D = ₹{20-D1:.0f}; r / k = 0.18 / 0.15 = 1.2.") + F(f"P = [D + (r/k)(E - D)] / k = [{D1:.0f} + 1.2 x {20-D1:.0f}] / 0.15 = {D1+1.2*(20-D1):.1f} / 0.15 = <b>₹{p1:.2f}</b>") + P("Since r (18%) > k (15%), a lower payout would give a higher price - e.g. with 0% payout P = 1.2 x 20 / 0.15 = ₹160."), src=SRC + " Unit IV Q1")
# gordon: E=15 r=12 k=14 b=.4
E, r, k, b = 15, .12, .14, .40
g = b * r
D1g = E * (1 - b)
pg = D1g / (k - g)
add(6.25, "Unit IV", "Gordon's model", "EPS ₹15, return on investment 12%, cost of equity 14%, retention ratio 40%. Calculate the market value per share using Gordon's model.", F(f"g = b x r = 0.40 x 0.12 = {g*100:.1f}%; &nbsp; D<sub>1</sub> = E (1 - b) = 15 x 0.60 = ₹{D1g:.0f}") + F(f"P<sub>0</sub> = D<sub>1</sub> / (k - g) = {D1g:.0f} / (0.14 - {g:.3f}) = {D1g:.0f} / {k-g:.3f} = <b>₹{pg:.2f}</b>") + P(f"With r (12%) < k (14%), retention does not create value: with 0% retention P<sub>0</sub> = 15 / 0.14 = ₹107.14, higher than ₹{pg:.2f}."), src=SRC + " Unit IV Q2")
p3, D3 = walter(12, .16, .16, .50)
add(6.25, "Unit IV", "Walter's model", "EPS ₹12, return on investment 16%, cost of equity 16%. Calculate the share value using Walter's model when the payout ratio is 50%.", P(f"D = 50% x 12 = ₹{D3:.0f}; E - D = ₹{12-D3:.0f}; r / k = 1.") + F(f"P = [{D3:.0f} + 1 x {12-D3:.0f}] / 0.16 = 12 / 0.16 = <b>₹{p3:.2f}</b>") + P("Because r = k, the price is the same (E / k) at any payout ratio - dividend policy is irrelevant for such a normal firm."), src=SRC + " Unit IV Q3")
oc = 30 + 15 + 25 + 40 - 35
add(6.25, "Unit IV", "Operating cycle", "Raw material storage 30 days, work-in-progress 15 days, finished goods storage 25 days, collection period 40 days, payment period 35 days. Calculate the operating cycle.", T(["Item", "Days"], [["Raw material storage", "30"], ["Work in progress", "15"], ["Finished goods storage", "25"], ["Debtors collection", "40"], ["<b>Gross operating cycle</b>", "<b>110</b>"], ["Less creditors payment period", "35"], ["<b>Net operating cycle</b>", f"<b>{oc}</b>"]]) + P("The gross cycle is 110 days; after allowing for 35 days of supplier credit the firm's own funds are tied up for <b>%d days</b>. (If a question asks for the gross cycle, answer 110 days.)" % oc), src=SRC + " Unit IV Q4")
cost = 1200000 + 600000 + 400000
wc = cost / 360 * 60
add(6.25, "Unit IV", "Working capital", "Annual operating costs: raw materials ₹12,00,000; wages ₹6,00,000; production overheads ₹4,00,000, incurred evenly. Calculate the working capital required for one operating cycle of 60 days (360-day year).", F(f"Annual operating cost = 12,00,000 + 6,00,000 + 4,00,000 = {R(cost)}") + F(f"Daily cost = {inr(cost)} / 360 = {R(cost/360)}") + F(f"Working capital = daily cost x operating cycle = {R(cost/360)} x 60 = <b>{R(wc)}</b>"), src=SRC + " Unit IV Q5")
add(6.25, "Unit IV", "Working capital", "A business has current assets ₹8,00,000 and current liabilities ₹5,00,000. Calculate its net working capital.", F("Net working capital = Current assets - Current liabilities = 8,00,000 - 5,00,000 = <b>₹3,00,000</b>") + P("Current ratio = 8,00,000 / 5,00,000 = 1.6, so the firm can cover its short-term liabilities 1.6 times."), src=SRC + " Unit IV Q6")

# =========================================================== PUT PAPER numericals (Business Finance PUT 2026-27)
# Q12 WACC (book weights)
rows12, w12 = wacc_table([("10% debentures (after tax)", 1000000, 7.5), ("12% preference shares", 500000, 12), ("Equity share capital", 1500000, 13), ("Retained earnings", 500000, 13)], 3500000)
put12 = P("<b>Step 1 - cost of each source</b>") + L("<b>Debentures:</b> K<sub>d</sub> = 10% x (1 - 0.25) = <b>7.5%</b> (issued at par, so net proceeds = face value).", "<b>Preference shares:</b> K<sub>p</sub> = 12% (issued at par, no flotation cost given).", "<b>Equity shares:</b> K<sub>e</sub> = D<sub>1</sub> / P<sub>0</sub> + g = 12 / 150 + 5% = 8% + 5% = <b>13%</b>.", "<b>Retained earnings:</b> taken equal to the cost of equity = <b>13%</b> (as the question states).") + P("<b>Step 2 - WACC with book-value weights (total ₹35,00,000)</b>") + T(["Source", "Amount (₹)", "Weight", "Cost (%)", "Weight x cost"], rows12) + F(f"WACC = 2.14 + 1.71 + 5.57 + 1.86 = <b>{w12:.2f}%</b> (approx. 11.29%)") + P("<b>Interpretation:</b> the company must earn at least 11.29% on new projects of average risk; debt is the cheapest source because of the tax shield (7.5% after tax against a 10% coupon).")
ITEMS_PUT = {"B12": put12}
# Q14 project
flows14 = [300000, 350000, 400000, 300000, 200000]
fac14 = [0.909, 0.826, 0.751, 0.683, 0.621]
pv14 = [c * f for c, f in zip(flows14, fac14)]
tot14 = sum(pv14)
pb14 = payback(1000000, flows14)
put14 = H("(i) Payback period") + T(["Year", "Inflow (₹)", "Cumulative (₹)"], [[str(i + 1), inr(flows14[i]), inr(sum(flows14[: i + 1]))] for i in range(5)]) + F(f"Payback = 2 years + (10,00,000 - 6,50,000) / 4,00,000 = 2 + 0.875 = <b>{pb14:.3f} years</b> (about 2 years 10.5 months)") + H("(ii) ARR on average investment") + L("Total inflows = ₹15,00,000; no scrap value, so total depreciation = ₹10,00,000 and total profit = 15,00,000 - 10,00,000 = ₹5,00,000.", "Average annual profit = 5,00,000 / 5 = ₹1,00,000.", "Average investment = (10,00,000 + 0) / 2 = ₹5,00,000.") + F("ARR = 1,00,000 / 5,00,000 x 100 = <b>20%</b>") + P("(If ARR were taken on initial investment it would be 10%; the question asks for average investment.)") + H("(iii) NPV") + T(["Year", "Inflow (₹)", "PVF @ 10%", "PV (₹)"], [[str(i + 1), inr(flows14[i]), f"{fac14[i]:.3f}", inr(pv14[i])] for i in range(5)] + [["<b>Total</b>", "", "", f"<b>{inr(tot14)}</b>"]]) + F(f"NPV = {inr(tot14)} - 10,00,000 = <b>+{R(tot14-1000000)}</b>") + H("(iv) Profitability index") + F(f"PI = {inr(tot14)} / 10,00,000 = <b>{tot14/1000000:.3f}</b>") + H("Advice") + P("NPV is positive (₹1,91,300), PI is above 1 (1.19), ARR is 20% (above the 10% cost of capital) and payback is under 3 years. <b>Accept the project.</b>")
ITEMS_PUT["C14"] = put14
# Q16 WC
wk = dict(rm=20000, lab=10000, oh=10000)
ca = [("Raw materials (2 weeks x ₹20,000)", 40000), ("Work in progress (1 week: RM 20,000 + labour 5,000 + overheads 5,000)", 30000), ("Finished goods (2 weeks x ₹40,000)", 80000), ("Debtors at cost (4 weeks x ₹40,000)", 160000)]
cl = [("Creditors for raw materials (2 weeks x ₹20,000)", 40000), ("Outstanding wages (1 week x ₹10,000)", 10000), ("Outstanding overheads (1 week x ₹10,000)", 10000)]
tca, tcl = sum(x[1] for x in ca), sum(x[1] for x in cl)
nwc = tca - tcl
put16 = P("<b>Weekly data:</b> 1,000 units; raw materials 1,000 x 20 = ₹20,000; labour 1,000 x 10 = ₹10,000; overheads 1,000 x 10 = ₹10,000; total cost ₹40,000 a week (₹4,00,000... check: 52 weeks x 40,000 = ₹20,80,000 a year).") + T(["Statement of working capital", "₹"], [["<b>A. Current assets</b>", ""]] + [[a, inr(b)] for a, b in ca] + [["<b>Total current assets</b>", f"<b>{inr(tca)}</b>"], ["<b>B. Current liabilities</b>", ""]] + [[a, inr(b)] for a, b in cl] + [["<b>Total current liabilities</b>", f"<b>{inr(tcl)}</b>"], ["<b>Net working capital (A - B)</b>", f"<b>{inr(nwc)}</b>"], ["Add 10% for contingencies", inr(nwc * .10)], ["<b>Working capital required</b>", f"<b>{inr(nwc*1.10)}</b>"]]) + P("<b>Notes:</b> debtors are valued at cost, not at sales value, as the question says; work in progress takes full raw material but only half of labour and overheads; creditors and outstanding expenses reduce the requirement.")
put16 = put16.replace(" (₹4,00,000... check: 52 weeks x 40,000 = ₹20,80,000 a year)", " (₹20,80,000 for the 52 weeks)")
ITEMS_PUT["C16"] = put16
# Q17 Walter b
rowsw = []
for lab, po in [("0%", 0), ("40%", .40), ("100%", 1.0)]:
    pw, Dw = walter(10, .15, .10, po)
    rowsw.append([lab, f"{Dw:g}", f"{10-Dw:g}", f"[{Dw:g} + 1.5 x {10-Dw:g}] / 0.10", f"<b>{pw:.0f}</b>"])
put17b = T(["Payout", "D (₹)", "E - D (₹)", "Calculation", "Price P (₹)"], rowsw) + P("r / k = 15% / 10% = 1.5 (r > k: a growth firm). The price is highest (₹150) at 0% payout and falls to ₹100 at 100% payout.") + P("<b>Optimal dividend policy:</b> because r > k, the firm earns more on retained funds than shareholders could earn elsewhere, so the <b>optimal payout is 0% (retain all earnings)</b>; market price is maximised at ₹150.")
ITEMS_PUT["C17b"] = put17b

OUTJS = "// Business Finance numericals - generated by tools/build_fin_numericals.py (practice sets in question/ and the PUT paper numericals). Do not edit by hand.\n(function () {\n  window.ExamQA.add('finance', " + json.dumps(ITEMS, ensure_ascii=False, indent=0) + ");\n  window.ExamQA.putParts = Object.assign(window.ExamQA.putParts || {}, {finance: " + json.dumps(ITEMS_PUT, ensure_ascii=False) + "});\n})();\n"
OUT.write_text(OUTJS, encoding="utf-8")
print(len(ITEMS), "numerical answers;", len(ITEMS_PUT), "PUT parts ->", OUT.name)
