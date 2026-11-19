# Business Finance study notes (notes only) - Units I and II, with formulas and worked examples (all figures verified in Python).
# Syllabus: Syllabus image FINANCE/syllabus.jpeg - Course F010301TN, Core Course I, 4 credits, 25+75 marks, 30 lectures (10 / 7 / 7 / 6).
# Sources: FINANCE folder (Complete Notes file, unit slides, Unit 1-3 notes, formula sheets), Maheshwari, Khan and Jain, H. K. Singh.
from hrm_study_content1 import EG, FL, KEY, OL, P, T, UL


def F(x):
    return f"<div class='box'><b>Formula:</b> {x}</div>"


def SOL(title, *steps):
    return f"<div class='eg'><b>Solved example - {title}</b><br>" + "<br>".join(steps) + "</div>"


UNIT1 = ("UNIT I", "Introduction to Finance", "10 lectures - finance functions, objectives of financial management, decisions, time value of money, annuity, valuation of bonds", [
    ("1.1 Meaning and functions of finance",
     P("<b>Finance</b> is the art and science of managing money. It is often called the <b>lifeblood</b> of a business because every business decision has a financial side. The <b>finance function</b> is the set of managerial activities concerned with <b>procuring (raising) and effectively utilising funds</b> for the business.")
     + "<h4>The three core decisions</h4>"
     + OL("<b>Investment decision</b> - where to invest the firm's funds (which assets and projects).", "<b>Financing decision</b> - how to raise the funds (the mix of debt and equity).", "<b>Dividend decision</b> - how much profit to distribute and how much to retain.")
     + "<h4>Supporting functions</h4>"
     + UL("<b>Financial planning and forecasting</b> - estimating future fund requirements.", "<b>Financial control</b> - checking that funds are used efficiently through budgets and variance analysis.", "<b>Liquidity management</b> - always having enough cash for short-term obligations.", "<b>Profit planning</b> - cost-volume-profit analysis to guide pricing and output.")
     + "<h4>Need and importance of the finance function</h4>"
     + UL("Funds are needed to start, run and expand a business.", "Sound finance keeps the firm solvent and liquid.", "It links all departments through budgets.", "It helps to reduce the cost of funds and to maximise value.")),
    ("1.2 Objectives of financial management: profit maximisation vs wealth maximisation",
     "<h4>Profit maximisation (traditional approach)</h4>"
     + P("The firm should aim to earn the highest possible profit. Profit measures efficiency and is needed for survival and growth.")
     + "<b>Limitations</b>"
     + UL("<b>Ignores the time value of money</b> - a rupee of profit today and after five years are treated alike.", "<b>Ignores risk</b> - a firm may chase profit through very risky decisions.", "<b>Ambiguous</b> - profit may mean short-term or long-term, before or after tax, total or per share.", "<b>Ignores quality and timing of earnings</b> - whether profits are regular and sustainable.", "Can lead to short-term thinking and neglect of stakeholders.")
     + "<h4>Shareholder wealth maximisation (modern approach)</h4>"
     + P("The goal is to maximise the <b>market value of shareholders' wealth</b>, shown by the market price of the equity share. <b>Wealth = number of shares x market price per share.</b>")
     + UL("Considers the <b>time value of money</b> (cash flows are discounted).", "Considers <b>risk</b> (risky cash flows are discounted at a higher rate).", "<b>Precise</b> - market price is an observable figure.", "<b>Long-term</b> - share price reflects the market's view of future earning power.")
     + T(["Basis", "Profit maximisation", "Wealth maximisation"], [["Focus", "Short-term accounting profit", "Long-term market value of shares"], ["Time value of money", "Ignored", "Considered"], ["Risk", "Ignored", "Considered"], ["Meaning", "Ambiguous (many profit measures)", "Precise (market price)"], ["Time horizon", "Short term", "Long term"], ["Basis of measure", "Accounting profit", "Cash flows"]])
     + P("<b>Stakeholders:</b> a modern view also asks the firm to care for employees, customers, lenders and society, because long-term wealth depends on their support.")),
    ("1.3 Various decisions in financial management",
     T(["Decision", "Meaning", "Key considerations"], [
         ["Investment decision (capital budgeting)", "How the firm's funds are invested in assets to earn the highest return for a given risk. Long-term (capital budgeting - Unit II) and short-term (working capital - Unit IV)", "Expected return, risk, cost of capital; usually the most important decision because profitability depends on it"],
         ["Financing decision (capital structure)", "How funds are raised - the mix of debt and equity (Unit III)", "Cost of each source, risk (debt raises financial risk), control (equity dilutes control)"],
         ["Dividend decision", "How much profit is paid as dividend and how much is retained (Unit IV)", "Retained earnings are cheap internal finance; shareholders also want regular income"]])
     + P("The three decisions are <b>interlinked</b>: dividends reduce retained earnings, which increases the need for outside finance; investment needs decide how much finance is required.")),
    ("1.4 Time value of money (TVM)",
     P("A rupee received <b>today is worth more than a rupee received in the future</b>, because today's rupee can be invested to earn a return.")
     + "<h4>Reasons for the time value of money</h4>"
     + UL("<b>Opportunity to earn</b> - money in hand can be invested to earn interest.", "<b>Inflation</b> - purchasing power falls over time.", "<b>Risk and uncertainty</b> - future receipts are less certain.", "<b>Preference for present consumption.</b>")
     + "<h4>Future value (compounding)</h4>"
     + P("<b>Future value (FV)</b> is the value of a present sum at a future date when it earns interest, with interest itself earning interest (compounding).")
     + F("FV = PV x (1 + r)<sup>n</sup> &nbsp;&nbsp; where r = rate of interest per period, n = number of periods; (1 + r)<sup>n</sup> is the future value interest factor")
     + SOL("future value", "Rs 10,000 is invested at 8% compound interest for 5 years.", "FV = 10,000 x (1.08)<sup>5</sup> = 10,000 x 1.4693 = <b>Rs 14,693.28</b>.")
     + "<h4>Present value (discounting)</h4>"
     + P("<b>Present value (PV)</b> is the current worth of a sum to be received in future, discounted at the required rate of return (the discount rate).")
     + F("PV = FV / (1 + r)<sup>n</sup> = FV x [1 / (1 + r)<sup>n</sup>]")
     + SOL("present value", "What is the present value of Rs 50,000 to be received after 3 years if the discount rate is 10%?", "PV = 50,000 / (1.10)<sup>3</sup> = 50,000 / 1.331 = <b>Rs 37,565.74</b>.")
     + "<h4>Extra (not in the syllabus list, but in your notes): compound growth rate and doubling period</h4>"
     + F("Compound growth rate = (Ending value / Beginning value)<sup>1/n</sup> - 1 &nbsp;&nbsp;|&nbsp;&nbsp; Doubling period (Rule of 72) = 72 / interest rate (%)")
     + P("At 9% a sum doubles in about 72 / 9 = <b>8 years</b> (exact calculation: 8.04 years).")),
    ("1.5 Relationship between present value and the discount rate",
     P("Present value and the discount rate have an <b>inverse relationship</b>: as the discount rate rises, the present value of a given future sum falls, and vice versa. A higher discount rate means a higher opportunity cost (or higher risk), so less has to be set aside today to reach the same future amount.")
     + T(["Future sum (Rs)", "Years", "Discount rate", "Present value (Rs)"], [["1,000", "5", "5%", "783.53"], ["1,000", "5", "10%", "620.92"], ["1,000", "5", "15%", "497.18"]])
     + UL("<b>Present value and time (n):</b> also inverse - the further away a cash flow, the lower its present value at a given discount rate.", "<b>Future value and rate:</b> direct - a higher rate gives a higher future value.")
     + KEY("PV falls as the discount rate rises; FV rises as the rate rises.")),
    ("1.6 Present value and future value of an annuity",
     P("An <b>annuity</b> is a series of equal payments or receipts made at equal intervals for a fixed period - for example loan EMIs, insurance premiums, pensions.")
     + T(["Type", "When payments are made", "Example"], [["Ordinary annuity (annuity regular)", "At the <b>end</b> of each period", "Loan EMI paid at month-end"], ["Annuity due", "At the <b>beginning</b> of each period", "Rent paid at the start of the month"]])
     + "<h4>Future value of an annuity (ordinary)</h4>"
     + F("FVA = A x [ ((1 + r)<sup>n</sup> - 1) / r ] &nbsp;&nbsp; (A = equal periodic payment)")
     + SOL("future value of an annuity", "Rs 5,000 is deposited at the end of every year for 5 years at 10%.", "FVA = 5,000 x [(1.10<sup>5</sup> - 1) / 0.10] = 5,000 x 6.1051 = <b>Rs 30,525.50</b>.", "If the deposits were made at the <b>beginning</b> of each year (annuity due): 30,525.50 x 1.10 = <b>Rs 33,578.05</b>.")
     + "<h4>Present value of an annuity (ordinary)</h4>"
     + F("PVA = A x [ (1 - (1 + r)<sup>-n</sup>) / r ]")
     + SOL("present value of an annuity", "What is the present value of Rs 10,000 received at the end of each year for 4 years if the discount rate is 12%?", "PVA = 10,000 x [(1 - 1.12<sup>-4</sup>) / 0.12] = 10,000 x 3.0373 = <b>Rs 30,373.49</b>.", "For an annuity due: 30,373.49 x 1.12 = <b>Rs 34,018.31</b>.")
     + UL("<b>Annuity due = ordinary annuity x (1 + r)</b>, for both PV and FV.", "Each payment in an annuity is discounted (or compounded) separately; the formula or table adds them in one step.", "Earlier payments earn interest for longer, so they contribute more to the future value.")
     + "<h4>Extra: perpetuity</h4>"
     + P("A <b>perpetuity</b> is an annuity that continues for ever. <b>PV = A / r</b>. Rs 5,000 a year for ever at 10% is worth 5,000 / 0.10 = <b>Rs 50,000</b> today.")),
    ("1.7 Valuation of bonds",
     P("A <b>bond (debenture)</b> is a long-term debt instrument that pays periodic interest (the <b>coupon</b>) and returns the <b>face (par) value</b> at maturity. <b>Bond valuation</b> finds its fair price as the <b>present value of all expected cash flows</b>, discounted at the required rate of return (market rate).")
     + F("Bond value V = I x PVIFA(r, n) + M x PVIF(r, n) &nbsp;&nbsp; = &nbsp; I x [ (1 - (1 + r)<sup>-n</sup>) / r ] + M / (1 + r)<sup>n</sup><br>I = annual interest (coupon rate x face value), M = maturity (face) value, r = required rate, n = years to maturity")
     + SOL("bond valuation", "A Rs 1,000 bond with a 10% coupon matures in 5 years. Find its value if the required rate of return is (a) 12%, (b) 8%, (c) 10%.", "Annual interest I = Rs 100.", "(a) r = 12%: V = 100 x 3.6048 + 1,000 x 0.5674 = <b>about Rs 927.90</b> (discount).", "(b) r = 8%: V = 100 x 3.9927 + 1,000 x 0.6806 = <b>Rs 1,079.85</b> (premium).", "(c) r = 10%: V = <b>Rs 1,000</b> (par).")
     + T(["Coupon rate vs required (market) rate", "Bond sells at"], [["Coupon = market rate", "Par (face value)"], ["Coupon > market rate", "Premium (above face value)"], ["Coupon < market rate", "Discount (below face value)"]])
     + UL("<b>Bond price and interest rates move in opposite directions</b> - when market rates rise, existing fixed-coupon bonds fall in value.", "<b>Yield to maturity (YTM)</b> is the rate that makes the present value of the bond's cash flows equal to its market price.", "A <b>zero-coupon bond</b> pays no interest; its value is only M / (1 + r)<sup>n</sup>.", "Stock valuation is <i>not</i> in the syllabus list; only bonds are required.")),
])

UNIT2 = ("UNIT II", "Capital Budgeting", "7 lectures - meaning, objectives and process, payback period, NPV, profitability index, IRR", [
    ("2.1 Meaning and characteristics of capital budgeting",
     P("<b>Capital budgeting</b> is the process of planning and evaluating <b>long-term investment decisions</b> - whether to buy machinery, build a factory, launch a product or expand - where large sums are committed for a long time and the decision is hard to reverse. It is the practical form of the <b>investment decision</b>.")
     + "<h4>Characteristics</h4>"
     + UL("Long-term effect on the firm.", "Large funds involved.", "Decisions are difficult and costly to reverse.", "Involve risk and uncertainty about future cash flows.", "Affect future profitability and growth.")
     + T(["Capital expenditure", "Revenue expenditure"], [["Benefit for a long period", "Benefit for a short period"], ["Purchase of assets (machine, building)", "Day-to-day expenses (electricity bill, wages)"], ["Large amount, done occasionally", "Small amount, done frequently"]])),
    ("2.2 Objectives and importance",
     "<h4>Objectives</h4>"
     + UL("<b>Select the most profitable projects</b> and maximise shareholder wealth.", "<b>Allocate scarce capital efficiently</b> among competing proposals.", "<b>Minimise investment risk</b> by systematic evaluation.", "<b>Support long-term growth and survival.</b>", "<b>Control capital expenditure</b> - compare actual results with plans.")
     + "<h4>Kinds of investment proposals</h4>"
     + T(["Type", "Meaning"], [["Replacement", "Replacing worn-out or obsolete equipment"], ["Expansion", "Increasing capacity of existing products"], ["Diversification", "Entering new products or markets"], ["Research and development", "Investing in new products and technology"], ["Mandatory / welfare", "Required by law or for safety and employee welfare"]])
     + "<h4>Factors affecting capital budgeting</h4>"
     + UL("Cost of investment, expected profits, risk, interest rate, government policy, inflation, market demand and technology.")
     + "<h4>Advantages and limitations</h4>"
     + T(["Advantages", "Limitations"], [[UL("Better decisions and planning", "Higher profitability", "Efficient use of funds", "Reduces risk", "Maximises shareholder wealth"), UL("Future is uncertain", "Cash flow estimates may be wrong", "Time-consuming", "Needs technical knowledge and data")]])),
    ("2.3 Process of capital budgeting",
     FL("Identify investment proposals", "Screen and evaluate", "Estimate cash flows", "Select the project", "Implement", "Performance review (post-audit)")
     + T(["Step", "What happens"], [["1. Identification", "Proposals arise from production, marketing or top management"], ["2. Screening and evaluation", "Technical feasibility, cost, expected benefits and risk are examined with capital budgeting techniques"], ["3. Estimating cash flows", "Initial outlay and yearly cash inflows over the project's life - the most critical step"], ["4. Selection", "Choose using payback, NPV, PI or IRR and the funds available"], ["5. Implementation", "Funds are released and the project is carried out"], ["6. Performance review", "Actual results are compared with forecasts to learn for the future"]])
     + "<h4>Cash flows - a note</h4>"
     + F("Cash flow after tax (CFAT) = Profit after tax (PAT) + Depreciation")
     + P("Capital budgeting uses <b>cash flows, not accounting profit</b>. Depreciation is added back because it is a non-cash expense. Initial investment includes the cost of the asset plus installation and working capital.")),
    ("2.4 Payback period method",
     P("<b>Payback period</b> is the time a project takes to recover its initial investment from its cash inflows. It answers: <i>how quickly do I get my money back?</i>")
     + F("Equal inflows: Payback period = Initial investment / Annual cash inflow<br>Unequal inflows: add the inflows year by year until the investment is recovered; interpolate within the final year.")
     + SOL("equal inflows", "A project costs Rs 5,00,000 and gives Rs 1,25,000 a year.", "Payback = 5,00,000 / 1,25,000 = <b>4 years</b>.")
     + SOL("unequal inflows", "Investment Rs 4,00,000. Inflows: Year 1 Rs 1,00,000; Year 2 Rs 1,50,000; Year 3 Rs 2,00,000; Year 4 Rs 2,50,000.", "Cumulative after 2 years = 2,50,000; balance to recover = 1,50,000.", "Payback = 2 + (1,50,000 / 2,00,000) = <b>2.75 years</b>.")
     + P("<b>Decision rule:</b> accept if the payback period is less than or equal to the target; between projects choose the shorter payback.")
     + T(["Merits", "Limitations"], [[UL("Simple and easy to calculate", "Useful where liquidity or risk is a concern", "Rough measure of risk - a shorter payback means less risk"), UL("<b>Ignores time value of money</b>", "<b>Ignores cash flows after the payback period</b>", "Does not measure profitability")]])
     + P("<b>Discounted payback</b> removes the first limitation by discounting the cash flows before adding them.")),
    ("2.5 Accounting rate of return (ARR) - extra",
     P("ARR (in your notes, though not named in the syllabus topic list) measures the average annual accounting profit as a percentage of investment.")
     + F("ARR = (Average annual profit after tax / Investment) x 100 &nbsp;&nbsp; (investment = original investment or average investment = (cost + scrap) / 2)")
     + SOL("ARR", "Investment Rs 1,00,000 (no scrap), average annual profit after tax Rs 15,000.", "ARR on original investment = 15,000 / 1,00,000 = <b>15%</b>.", "ARR on average investment = 15,000 / 50,000 = <b>30%</b>.")
     + P("Merit: simple, uses profit data. Limitation: uses accounting profit, ignores the time value of money.")),
    ("2.6 Net present value (NPV) method",
     P("<b>NPV</b> is the difference between the present value of the project's cash inflows and its initial investment, discounted at the firm's required rate of return (cost of capital). It shows directly the <b>addition to shareholder wealth</b>.")
     + F("NPV = [ CF<sub>1</sub>/(1+k) + CF<sub>2</sub>/(1+k)<sup>2</sup> + ... + CF<sub>n</sub>/(1+k)<sup>n</sup> ] - Initial investment")
     + SOL("NPV", "Initial investment Rs 1,00,000. Cash inflows: Year 1 Rs 40,000; Year 2 Rs 50,000; Year 3 Rs 60,000. Cost of capital 10%.", "PV of inflows = 40,000 / 1.10 + 50,000 / 1.21 + 60,000 / 1.331 = 36,363.64 + 41,322.31 + 45,078.89 = Rs 1,22,764.84.", "NPV = 1,22,764.84 - 1,00,000 = <b>Rs 22,764.84</b> &rarr; positive, so <b>accept</b>.")
     + T(["NPV", "Decision"], [["NPV > 0", "Accept - adds to wealth"], ["NPV < 0", "Reject - reduces wealth"], ["NPV = 0", "Project earns exactly the required return; decide on other factors"]])
     + T(["Merits", "Limitations"], [[UL("Considers time value of money", "Uses all cash flows of the whole life", "Directly linked to wealth maximisation", "Most theoretically sound method"), UL("Needs an accurate discount rate", "Absolute figure - hard to compare projects of different size", "More complex than payback")]])),
    ("2.7 Profitability index (PI)",
     P("The <b>profitability index</b> (benefit-cost ratio) is the present value of cash inflows per rupee of investment - a relative form of NPV.")
     + F("PI = Present value of cash inflows / Initial investment")
     + SOL("PI", "From the example above: PI = 1,22,764.84 / 1,00,000 = <b>1.228</b> &rarr; greater than 1, accept.")
     + T(["PI", "Decision"], [["PI > 1", "Accept (equivalent to NPV > 0)"], ["PI < 1", "Reject"], ["PI = 1", "Indifferent (NPV = 0)"]])
     + P("PI is useful for ranking projects of <b>different sizes</b> and under <b>capital rationing</b> (limited funds). It can occasionally rank projects differently from NPV when sizes differ greatly.")),
    ("2.8 Internal rate of return (IRR)",
     P("<b>IRR</b> is the discount rate at which the present value of inflows equals the present value of outflows - the rate at which <b>NPV = 0</b>. It is the project's own expected rate of return.")
     + F("Interpolation: IRR = Lower rate + [ NPV at lower rate / (NPV at lower rate - NPV at higher rate) ] x Difference between the rates")
     + SOL("IRR", "Same project (investment Rs 1,00,000; inflows 40,000, 50,000, 60,000).", "At 20%: NPV = + Rs 2,777.78. At 22%: NPV = - Rs 577.58.", "IRR = 20 + [2,777.78 / (2,777.78 + 577.58)] x 2 = 20 + 1.66 = <b>about 21.66%</b> (exact 21.65%).", "Cost of capital is 10%, so IRR is higher &rarr; <b>accept</b>.")
     + SOL("IRR for equal inflows", "Investment Rs 1,00,000; inflow Rs 30,000 a year for 5 years.", "Factor = 1,00,000 / 30,000 = 3.333. On the annuity table (5 years) 3.352 is at 15% and 3.274 at 16%, so IRR is a little above 15% (about <b>15.2%</b>).")
     + P("<b>Decision rule:</b> accept if IRR is greater than the cost of capital; reject if lower.")
     + T(["Merits", "Limitations"], [[UL("Considers time value of money", "Gives a percentage that is easy to compare", "Does not need the discount rate in advance"), UL("Trial and error / interpolation needed", "Can give multiple or misleading IRRs for non-conventional cash flows", "May conflict with NPV for mutually exclusive projects")]])),
    ("2.9 Comparison of the techniques",
     T(["Basis", "Payback", "NPV", "PI", "IRR"], [["Time value of money", "Ignored", "Considered", "Considered", "Considered"], ["Measures", "Time to recover investment", "Absolute wealth added", "Relative profitability", "Rate of return"], ["Decision rule", "Accept if within target period", "Accept if NPV > 0", "Accept if PI > 1", "Accept if IRR > cost of capital"], ["Best suited for", "Quick liquidity / risk screening", "Overall wealth maximisation", "Projects of different size, capital rationing", "Comparing returns across options"], ["Main limitation", "Ignores cash flows after payback", "Needs an accurate discount rate", "May conflict with NPV on size", "Multiple IRRs, may conflict with NPV"]])
     + "<h4>NPV and IRR compared</h4>"
     + T(["Similarities", "Differences"], [[UL("Both use discounted cash flows", "Both consider the whole life of the project", "Both give the same accept / reject answer for a single conventional project"), UL("NPV gives a rupee value, IRR a percentage.", "NPV assumes cash inflows are reinvested at the cost of capital; IRR assumes they are reinvested at the IRR.", "NPV needs the discount rate beforehand; IRR does not.", "For mutually exclusive projects of different scale or timing they can conflict - <b>NPV is preferred</b> because it measures wealth creation directly.")]])
     + SOL("choosing between two projects", "Project A: investment Rs 1,00,000, NPV at 10% = Rs 22,764.84, PI = 1.228. Project B: investment Rs 3,00,000, inflows 1,00,000, 1,20,000, 1,40,000, 1,60,000, cost of capital 12%: NPV = Rs 86,281.11, PI = 1.288.", "B has the higher NPV (adds more wealth) and the higher PI, so B is preferred.")),
])
