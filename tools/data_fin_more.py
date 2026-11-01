# Formula Finder: scenario -> which formula / method applies. Tuple: (unit, topic, q, CORRECT, w1, w2, w3, explanation, extra)
# Appended to the Finance MCQ list; shown under Unit "Formulas" / topic "Which formula?".
T = True; F = False
U = "Formulas"; TP = "Which formula?"

FIN_MORE = [
(U, TP, "You know ₹10,000 today and want its value after 3 years at 10% compound interest. Which formula?", "FV = PV x (1 + i)^n", "PV = FV / (1 + i)^n", "FVA = A x [((1+i)^n - 1)/i]", "PV = A / i", "Known amount today, find value later = compounding.", F),
(U, TP, "You will receive ₹13,310 after 3 years and want its worth today at 10%. Which formula?", "PV = FV / (1 + i)^n", "FV = PV x (1 + i)^n", "PVA = A x [(1 - (1+i)^-n)/i]", "ke = D1/P0 + g", "Known future amount, find value today = discounting.", F),
(U, TP, "You deposit ₹5,000 at the end of every year for 4 years and want the final amount. Which formula?", "FVA = A x [((1+i)^n - 1)/i]", "PVA = A x [(1 - (1+i)^-n)/i]", "FV = PV x (1 + i)^n", "PV = A / i", "Equal periodic deposits, final value = future value of an annuity.", F),
(U, TP, "A scholarship pays ₹500 every year for ever. Which formula gives its present value?", "PV = A / i", "FVA = A x [((1+i)^n - 1)/i]", "PV = FV / (1 + i)^n", "A = Loan / PVIFA", "Payments with no end = perpetuity.", F),
(U, TP, "You borrow ₹1,00,000 and repay it in 5 equal yearly instalments. Which formula gives the instalment?", "A = Loan / PVIFA(i, n)", "A = Loan x FVIFA(i, n)", "A = Loan / n", "A = Loan x i", "Loan equals the present value of the instalments.", F),
(U, TP, "A bond pays 9% interest on face value ₹1,000 for 3 years; required return is 10%. Which formula gives its value?", "V = I x PVIFA(kd, n) + F x PVIF(kd, n)", "V = I / kd", "V = F / (1 + kd)^n", "P0 = D1 / (ke - g)", "Periodic interest plus maturity value = redeemable bond formula.", F),
(U, TP, "A bond never matures and pays ₹100 interest every year. Required return is 8%. Which formula?", "V = I / kd", "V = F / (1 + kd)^n", "V = I x PVIFA + F x PVIF", "P0 = D1 / (ke - g)", "No maturity = perpetual bond.", F),
(U, TP, "A bond pays no interest and is redeemed for ₹1,000 after 2 years. Which formula?", "V = F / (1 + kd)^n", "V = I / kd", "V = I x PVIFA + F x PVIF", "FV = PV x (1 + i)^n", "No periodic interest = zero-coupon bond.", F),
(U, TP, "Dividends of a share are expected to grow at 5% for ever; D0 = ₹4, ke = 15%. Which formula gives the price?", "P0 = D1 / (ke - g)", "P0 = D / ke", "ke = D1 / P0 + g", "P0 = D1/(1+ke) + P1/(1+ke)", "Constant growth for ever = Gordon growth model.", F),
(U, TP, "A share pays a fixed dividend of ₹6 for ever; ke = 12%. Which formula?", "P0 = D / ke", "P0 = D1 / (ke - g)", "ke = D1 / P0 + g", "PV = FV / (1 + i)^n", "No growth = dividend perpetuity.", F),
(U, TP, "You know the price ₹80, last dividend ₹4 and growth 6%, and want investors' expected return. Which formula?", "ke = D1 / P0 + g", "P0 = D1 / (ke - g)", "ke = Rf + beta x (Rm - Rf)", "ke = D / P0 only", "Rearranged Gordon model.", F),
(U, TP, "An investor buys at ₹100, receives ₹8 dividend and sells at ₹112. Which formula gives the return?", "[D1 + (P1 - P0)] / P0", "D1 / (ke - g)", "D / ke", "PV = FV / (1 + i)^n", "Dividend yield plus capital gain.", F),
(U, TP, "A project costs ₹6,00,000 and gives equal inflows of ₹1,50,000 a year. Which method gives the recovery time?", "Payback = Investment / Annual inflow", "Payback = E + B/C", "ARR = Average PAT / Average investment", "NPV = PV of inflows - Investment", "Equal inflows = simple payback.", F),
(U, TP, "Inflows are different each year (30,000; 40,000; 40,000...). Which payback formula?", "Payback = E + B/C", "Payback = Investment / Annual inflow", "PI = PV of inflows / Investment", "IRR interpolation", "Unequal inflows = cumulative method.", F),
(U, TP, "The question gives yearly profit after tax and scrap value, and asks for return on average investment. Which method?", "ARR", "NPV", "IRR", "Payback", "Accounting profit based on average investment.", F),
(U, TP, "You must discount cash inflows at the cost of capital and subtract the outlay. Which method?", "NPV", "ARR", "Payback", "DSCR", "Accept if NPV > 0.", F),
(U, TP, "Two rates give a positive and a negative NPV and you need the rate where NPV is zero. Which formula?", "IRR by interpolation", "NPV", "ARR", "Payback", "LR + [NPV at LR / (NPV at LR - NPV at HR)] x (HR - LR).", F),
(U, TP, "Sales rise 10% and you want to know the effect on EBIT. Which measure?", "Degree of operating leverage", "Degree of financial leverage", "Interest coverage ratio", "Indifference point", "DOL = % change in EBIT / % change in sales.", F),
(U, TP, "EBIT rises 10% and you want the effect on EPS. Which measure?", "Degree of financial leverage", "Degree of operating leverage", "Payback period", "Gordon model", "DFL = % change in EPS / % change in EBIT.", F),
(U, TP, "Sales rise 10% and you want the effect on EPS. Which measure?", "Degree of combined leverage", "Degree of operating leverage", "Degree of financial leverage", "Profitability index", "DCL = DOL x DFL.", F),
(U, TP, "You need the EBIT at which two financing plans give the same EPS. Which concept?", "Indifference point", "Financial break-even point", "Interest coverage ratio", "Pecking order", "Equate the two EPS expressions.", F),
(U, TP, "A bank wants to know whether cash profit can meet interest and principal instalments. Which ratio?", "DSCR", "Interest coverage ratio", "ARR", "Operating leverage", "(PAT + interest + depreciation) / (interest + principal).", F),
(U, TP, "Cost of equity is needed and beta, market return and risk-free rate are given. Which formula?", "Ke = Rf + beta x (Rm - Rf)", "Ke = D1/NP + g", "Kd = I(1 - t)/NP", "Kp = PD/NP", "Capital asset pricing model.", F),
(U, TP, "Debentures carry 10% interest and tax rate is 30%. Which formula gives their cost?", "Kd = I(1 - t) / NP", "Kp = PD / NP", "Ke = Rf + beta x (Rm - Rf)", "WACC = sum of Wi x Ki", "Interest is tax-deductible.", F),
(U, TP, "You have the cost and weight of equity, preference shares and debentures and need the overall cost of capital. Which formula?", "WACC = sum of Wi x Ki", "Kd = I(1 - t) / NP", "Ke = D1/NP + g", "MCC", "Weighted average of all sources.", F),
]
