# Business Finance study notes (notes only) - Units III and IV, with formulas and worked examples (all figures verified in Python).
from fin_study_content1 import EG, F, FL, KEY, OL, P, SOL, T, UL

UNIT3 = ("UNIT III", "Capital Structure", "7 lectures - capital structure, factors, leverage (operating, financial, combined), cost of capital, WACC", [
    ("3.1 Concept of capital structure",
     P("<b>Capital structure</b> is the mix or proportion of the long-term sources of funds - debt, preference capital, equity and retained earnings - used to finance the firm. It is the result of the <b>financing decision</b> and answers: in what proportion should funds be raised from debt and from equity?")
     + T(["Component", "Nature"], [["Equity share capital", "Owners' funds; no fixed dividend; carries the highest risk and highest cost"], ["Preference share capital", "Hybrid; fixed dividend, senior to equity but junior to debt; dividend not tax-deductible"], ["Debt (debentures, long-term loans)", "Borrowed funds; fixed interest whether or not profit is earned; interest is tax-deductible"], ["Retained earnings", "Profit ploughed back; cheap internal source"]])
     + P("<b>Optimum capital structure</b> is the mix of debt and equity that <b>minimises the overall cost of capital and maximises the value of the firm</b> (and so shareholder wealth).")
     + "<h4>Features of an appropriate capital structure</h4>"
     + UL("<b>Profitability</b> - maximum return at minimum cost.", "<b>Solvency</b> - not so much debt that the firm cannot meet interest.", "<b>Flexibility</b> - room to raise more funds later.", "<b>Control</b> - does not dilute owners' control unduly.", "<b>Simplicity</b> - easy to understand and manage.")),
    ("3.2 Factors determining capital structure",
     T(["Factor", "Explanation"], [
         ["Cost of capital", "Debt is cheaper (tax shield), so some debt lowers the overall cost - but only up to a point"],
         ["Financial risk", "More debt means fixed interest obligations and greater risk of insolvency, especially if earnings are unstable"],
         ["Control", "New equity dilutes control; debt does not - owners wanting control prefer debt"],
         ["Flexibility", "Keeping unused borrowing capacity for the future"],
         ["Cash flow and debt-servicing capacity", "Expected cash flows must comfortably cover interest and principal"],
         ["Nature of industry / business risk", "Stable-demand industries (utilities) can carry more debt than cyclical ones"],
         ["Legal and regulatory requirements", "Lender covenants, debt-equity limits, company law"],
         ["Market conditions", "A strong share market favours equity issues; low interest rates favour debt"],
         ["Size and stage of the firm; tax policy", "Large, established firms have easier access to debt; tax-deductible interest encourages debt"]])
     + "<h4>Extra: capital structure theories (in your Unit 3 notes, beyond the syllabus list)</h4>"
     + T(["Theory", "Idea"], [["Net Income (NI) approach", "Cost of debt is lower than cost of equity and both stay constant; more debt lowers WACC and raises firm value, so value is maximised with maximum debt"], ["Net Operating Income (NOI) approach", "WACC is constant; more debt raises the cost of equity by exactly the saving, so capital structure does not affect value"], ["Modigliani-Miller (MM)", "Extension of NOI; without taxes firm value is independent of capital structure (proved by the arbitrage process); with taxes value rises with debt"]])),
    ("3.3 Leverage - meaning, objectives and uses",
     P("<b>Leverage</b> is the use of fixed-cost items - fixed operating costs or fixed financial costs (interest, preference dividend) - to <b>magnify the effect of a change in sales on profit</b>. Like a lever, a small push on one end moves a large load, and it works both ways: gains and losses are both magnified.")
     + "<h4>Objectives and uses</h4>"
     + UL("Magnify the returns to equity shareholders when the return on investment exceeds the cost of fixed-cost funds.", "Measure risk - how sensitive profit is to changes in sales.", "Plan the capital structure - decide how much debt to use.", "Help investors and managers judge the riskiness of earnings.")),
    ("3.4 Operating, financial and combined leverage",
     "<h4>Operating leverage</h4>"
     + P("Arises from <b>fixed operating costs</b> (rent, depreciation, salaries). It measures how sensitive <b>EBIT</b> is to a change in <b>sales</b>. High fixed costs give high operating leverage and <b>high business risk</b>.")
     + F("Degree of operating leverage (DOL) = Contribution / EBIT = % change in EBIT / % change in sales<br>Contribution = Sales - Variable cost; EBIT = Contribution - Fixed operating cost")
     + "<h4>Financial leverage</h4>"
     + P("Arises from <b>fixed financial costs</b> (interest on debt, preference dividend). It measures how sensitive <b>EPS</b> is to a change in <b>EBIT</b>. More debt gives <b>high financial risk</b>. When the return on investment is above the cost of debt, leverage helps equity holders - this is <b>trading on equity</b>; when below, it hurts.")
     + F("Degree of financial leverage (DFL) = EBIT / EBT = EBIT / (EBIT - Interest) = % change in EPS / % change in EBIT<br>(with preference dividend: DFL = EBIT / [EBIT - Interest - Preference dividend / (1 - t)])")
     + "<h4>Combined (total) leverage</h4>"
     + P("The <b>combined effect</b> of operating and financial leverage: it measures how sensitive <b>EPS</b> is to a change in <b>sales</b> and shows <b>total risk</b>.")
     + F("Degree of combined leverage (DCL) = DOL x DFL = Contribution / EBT = % change in EPS / % change in sales")
     + SOL("all three leverages", "Sales Rs 1,00,000; variable cost Rs 40,000; fixed operating cost Rs 20,000; interest Rs 10,000.", "Contribution = 1,00,000 - 40,000 = Rs 60,000. EBIT = 60,000 - 20,000 = Rs 40,000. EBT = 40,000 - 10,000 = Rs 30,000.", "DOL = 60,000 / 40,000 = <b>1.5</b> &nbsp;|&nbsp; DFL = 40,000 / 30,000 = <b>1.33</b> &nbsp;|&nbsp; DCL = 1.5 x 1.33 = 60,000 / 30,000 = <b>2.0</b>.", "Check: if sales rise 10% to Rs 1,10,000, variable cost = 44,000, contribution = 66,000, EBIT = 46,000 (up 15% = 1.5 x 10%), EBT = 36,000 (up 20% = 2.0 x 10%). A 10% fall in sales would cut EPS by 20%.")
     + T(["Basis", "Operating leverage", "Financial leverage", "Combined leverage"], [["Arises from", "Fixed operating costs", "Fixed financial costs (interest, preference dividend)", "Both"], ["Measures sensitivity of", "EBIT to sales", "EPS to EBIT", "EPS to sales"], ["Risk indicated", "Business risk", "Financial risk", "Total risk"], ["Formula", "Contribution / EBIT", "EBIT / EBT", "Contribution / EBT"]])
     + P("<b>Extra - EBIT-EPS analysis:</b> compares financing plans (debt vs equity) at different EBIT levels; the <b>indifference point</b> is the EBIT at which EPS is equal under both plans. Above it, debt gives higher EPS.")),
    ("3.5 Cost of capital - concept and importance",
     P("<b>Cost of capital</b> is the minimum rate of return a firm must earn on its investments to satisfy the expectations of its suppliers of capital (lenders, preference holders and equity holders). It is the 'price' of funds and the <b>discount rate</b> used in NPV.")
     + UL("<b>Capital budgeting:</b> accept a project only if its return is more than the cost of capital.", "<b>Capital structure:</b> helps find the mix with the lowest overall cost.", "<b>Performance benchmark:</b> shows whether the firm creates or destroys value.", "<b>Dividend and working capital decisions</b> also use it.")
     + P("Order of cost: <b>debt &lt; preference &lt; equity</b>, because of the tax shield on interest and the lower risk of lenders.")),
    ("3.6 Cost of debt, preference shares and equity shares",
     "<h4>Cost of debt (Kd)</h4>"
     + P("Interest is a tax-deductible expense, so the <b>after-tax cost of debt is lower</b> than the interest rate.")
     + F("Irredeemable debt: Kd = I (1 - t) / NP &nbsp;&nbsp; | &nbsp;&nbsp; Redeemable debt: Kd = [ I (1 - t) + (RV - NP)/n ] / [ (RV + NP)/2 ]<br>I = interest, t = tax rate, NP = net proceeds, RV = redemption value, n = years")
     + SOL("cost of debt", "10% debentures of Rs 100 face value are issued at Rs 95 (net proceeds), redeemable at par after 10 years; tax rate 30%.", "Kd = [10 (0.70) + (100 - 95)/10] / [(100 + 95)/2] = (7 + 0.5) / 97.5 = <b>7.69%</b>.", "Simple case: 12% debt, tax 30%, issued at par: Kd = 12 x (1 - 0.30) = <b>8.4%</b>.")
     + "<h4>Cost of preference shares (Kp)</h4>"
     + P("Preference dividend is paid out of after-tax profit, so there is <b>no tax saving</b>.")
     + F("Irredeemable: Kp = D / NP &nbsp;&nbsp; | &nbsp;&nbsp; Redeemable: Kp = [ D + (RV - NP)/n ] / [ (RV + NP)/2 ]")
     + SOL("cost of preference shares", "10% preference shares (Rs 100) issued at Rs 95, redeemable at par after 10 years: Kp = (10 + 0.5) / 97.5 = <b>10.77%</b>.")
     + "<h4>Cost of equity (Ke)</h4>"
     + P("Equity is the <b>costliest</b> source because equity holders bear the most risk and dividends bring no tax saving.")
     + T(["Method", "Formula", "Example"], [["Dividend yield + growth (Gordon)", "Ke = D<sub>1</sub> / P<sub>0</sub> + g", "D<sub>1</sub> = Rs 4, P<sub>0</sub> = Rs 50, g = 5%: Ke = 8% + 5% = <b>13%</b>"], ["Earnings yield", "Ke = E / P", "EPS Rs 6, price Rs 50: Ke = <b>12%</b>"], ["CAPM", "Ke = Rf + Beta x (Rm - Rf)", "Rf = 7%, Rm = 12%, beta = 1.2: Ke = 7 + 1.2 x 5 = <b>13%</b>"]])
     + P("<b>Cost of retained earnings</b> is taken equal to the cost of equity (shareholders could have earned that return if the profit had been paid out).")),
    ("3.7 Weighted average cost of capital (WACC)",
     P("<b>WACC</b> is the overall cost of capital - the average of the costs of all sources, weighted by their proportion in the total capital structure.")
     + F("WACC = (Wd x Kd) + (Wp x Kp) + (We x Ke) &nbsp;&nbsp; = &nbsp; Sum of (Amount x Cost) / Total capital")
     + SOL("WACC", "Capital: Debt Rs 5,00,000 (before-tax cost 10%, tax rate 30% so after-tax 7%); Preference Rs 2,00,000 (12%); Equity Rs 3,00,000 (16%). Total Rs 10,00,000.", "WACC = (5,00,000 x 7% + 2,00,000 x 12% + 3,00,000 x 16%) / 10,00,000 = (35,000 + 24,000 + 48,000) / 10,00,000 = <b>10.7%</b>.")
     + UL("<b>Weights:</b> use book value or market value (market value is more accurate; target weights are used for planning).", "<b>Importance:</b> discount rate for capital budgeting; benchmark for performance; guide to the optimal capital structure, which is the mix with the lowest WACC.", "<b>Factors affecting WACC:</b> interest rates, tax rate, capital structure mix, the firm's risk, market conditions and dividend policy.")),
])

UNIT4 = ("UNIT IV", "Dividend Decision and Working Capital", "6 lectures - dividend decision, significance, factors, Gordon and Walter models, working capital management", [
    ("4.1 Concept of dividend decision",
     P("<b>Dividend</b> is the part of after-tax profit distributed to shareholders in proportion to their shareholding. The <b>dividend decision</b> is the third major decision of financial management: how much of the earnings to <b>pay out</b> and how much to <b>retain</b> for reinvestment. It is closely linked to financing, because retained earnings are one of the cheapest internal sources of funds.")
     + "<h4>Objectives of the dividend decision</h4>"
     + UL("Maximise shareholder wealth (dividends plus capital gains).", "Provide funds for growth through retained earnings.", "Maintain a stable and fair record that investors can trust.", "Keep enough liquidity and flexibility.")
     + "<h4>Forms of dividend</h4>"
     + UL("<b>Cash dividend</b> (most common), <b>stock dividend</b> (bonus shares), <b>interim</b> and <b>final</b> dividend, and share buy-back as an alternative way to return cash.")),
    ("4.2 Significance of dividend policy",
     P("<b>Dividend policy</b> is the set of principles a company follows to decide, consistently over time, how much to pay as dividend and how much to retain.")
     + T(["Significance", "Explanation"], [["Signal of performance", "Steady or rising dividends show financial health and management's confidence"], ["Shareholder wealth", "Decides how wealth is received - dividends now or capital gains later"], ["Growth and capital structure", "Higher retention gives more cheap internal funds and less need for outside finance"], ["Investor clientele", "Retirees like regular income; growth investors prefer retention"], ["Share price", "Dividend changes carry information and move the market price"], ["Financial flexibility and market reputation", "A consistent policy builds credibility and eases fund raising"]])),
    ("4.3 Factors affecting the dividend decision",
     T(["Factor", "Explanation"], [
         ["Profitability and stability of earnings", "Steady profits support steady dividends"],
         ["Liquidity position", "Profit is not cash; dividends need actual cash"],
         ["Growth and investment opportunities", "Many profitable projects mean more retention"],
         ["Legal and contractual restrictions", "Company law and loan covenants limit payout"],
         ["Tax considerations", "Tax on dividends vs capital gains"],
         ["Shareholder expectations", "A sudden cut is read as bad news"],
         ["Access to external finance", "Easy access to funds allows higher payout"],
         ["Inflation", "Firms retain more to replace assets at higher prices"],
         ["Control, existing debt and the economy", "Fear of dilution, debt repayment burden, general business conditions"]])
     + "<h4>Types of dividend policy</h4>"
     + T(["Policy", "Meaning"], [["Stable dividend policy", "A fixed amount or steadily growing dividend each year"], ["Constant payout ratio", "A fixed percentage of profit is paid, so dividend moves with profit"], ["Regular plus extra dividend", "A low regular dividend plus an extra payment in good years"], ["Residual dividend policy", "Pay dividends only from profit left after financing all profitable investments"]])),
    ("4.4 Relevance dividend models - Walter and Gordon",
     P("There are two schools of thought. The <b>relevance school</b> says dividend policy changes the value of the firm (Walter, Gordon). The <b>irrelevance school</b> (Modigliani-Miller) says that under perfect markets it does not. The syllabus covers the two relevance models.")
     + "<h4>Walter's model</h4>"
     + P("James Walter: the dividend policy almost always affects the value of the firm, depending on the relation between the firm's <b>internal rate of return (r)</b> and its <b>cost of capital (k)</b>.")
     + F("P = [ D + (r / k)(E - D) ] / k &nbsp;&nbsp; P = market price per share, D = dividend per share, E = earnings per share, r = return on investment, k = cost of capital")
     + T(["Type of firm", "Condition", "Best payout"], [["Growth firm", "r > k", "Retain all earnings (zero payout) - value rises as dividend falls"], ["Normal firm", "r = k", "Any payout - value is the same"], ["Declining firm", "r < k", "Pay out all earnings (100% payout)"]])
     + SOL("Walter's model", "E = Rs 8 per share, k = 10%, r = 15% (growth firm).", "D = 0: P = [0 + (0.15/0.10)(8)] / 0.10 = <b>Rs 120</b>.   D = 2: P = [2 + 1.5 x 6] / 0.10 = <b>Rs 110</b>.   D = 4: <b>Rs 100</b>.   D = 6: <b>Rs 90</b>.", "Price falls as the payout rises, so retain. If r were 8% (declining firm): D = 0 gives Rs 64, D = 6 gives Rs 76 - price rises with payout, so pay out.")
     + "<b>Assumptions:</b> all financing by retained earnings (no outside debt or equity); r and k constant; infinite life; no change in EPS and DPS once decided."
     + "<h4>Gordon's model (dividend growth model)</h4>"
     + P("Myron Gordon also holds that dividend policy affects value, using the <b>'bird-in-hand' argument</b>: investors are risk-averse and prefer a certain dividend today to an uncertain capital gain tomorrow, so they discount future gains at a higher rate. The firm that pays a higher dividend commands a higher price.")
     + F("P<sub>0</sub> = E (1 - b) / (k - b r) = D<sub>1</sub> / (k - g) &nbsp;&nbsp; b = retention ratio, r = return on investment, k = cost of equity, g = growth rate = b x r (k must be greater than g)")
     + SOL("Gordon's model", "E = Rs 10 per share, k = 12%, r = 15%, retention ratio b = 50%.", "g = 0.50 x 0.15 = 7.5%.  P<sub>0</sub> = 10 (1 - 0.50) / (0.12 - 0.075) = 5 / 0.045 = <b>Rs 111.11</b>.", "With no retention (b = 0): P<sub>0</sub> = 10 / 0.12 = Rs 83.33.")
     + "<b>Assumptions:</b> all-equity firm; no outside financing; r and k constant; retention ratio constant; k greater than g."
     + T(["Basis", "Walter's model", "Gordon's model"], [["Core argument", "Relevance depends on r versus k", "Bird in hand - investors prefer certain dividends to uncertain gains"], ["Key variable", "Relation between r and k", "Investor risk aversion over the timing and certainty of returns"], ["Dividend recommended", "High payout only when r < k", "Generally a higher payout, because certainty is valued"], ["Common ground", "Both say dividend policy is relevant to firm value (against MM irrelevance)", "Same"]])
     + P("<b>Modigliani-Miller (irrelevance)</b>: in a perfect market value depends only on the firm's earning power and investment policy; shareholders can create their own 'dividend' by selling shares (home-made dividends).")),
    ("4.5 Working capital management - meaning and types",
     P("<b>Working capital</b> is the capital needed to finance the firm's <b>day-to-day operations</b> - it is invested in current assets such as cash, inventory and receivables. <b>Working capital management</b> means managing current assets and current liabilities so that the firm has enough liquidity without locking up excess funds.")
     + T(["Concept", "Meaning"], [["Gross working capital", "Total investment in current assets"], ["Net working capital", "Current assets - current liabilities; positive NWC means the firm can meet short-term dues"], ["Positive working capital", "Current assets exceed current liabilities"], ["Negative working capital", "Current liabilities exceed current assets - liquidity danger"]])
     + T(["Type", "Meaning"], [["Permanent (fixed) working capital", "Minimum level of current assets always needed, whatever the season; split into regular and reserve working capital"], ["Temporary (variable) working capital", "Extra working capital for seasonal or special needs (festival stock, order surge)"]])
     + "<h4>Objectives and importance</h4>"
     + UL("Maintain <b>liquidity</b> and pay dues on time; ensure <b>smooth operations</b>.", "Improve <b>profitability</b> by avoiding idle cash and excess stock.", "Avoid <b>over-investment</b> (idle funds) and <b>under-investment</b> (stock-outs, loss of sales).", "Reduce <b>financial risk</b>, keep good <b>credit standing</b>, and support growth.")),
    ("4.6 Operating cycle",
     P("The <b>operating cycle</b> (working capital cycle) is the time between spending cash on raw materials and receiving cash from customers. A shorter cycle means faster recovery of funds and less working capital.")
     + FL("Purchase raw materials", "Store raw materials", "Production (work in progress)", "Store finished goods", "Sale (debtors)", "Collection of cash")
     + F("Operating cycle = R + W + F + D (gross operating cycle); Cash cycle = R + W + F + D - C<br>R = raw material storage period, W = work-in-progress period, F = finished goods storage period, D = debtors collection period, C = creditors payment period (all in days)")
     + SOL("operating cycle", "Raw material storage 30 days, work-in-progress 15 days, finished goods 10 days, debtors 40 days, creditors 35 days.", "Gross operating cycle = 30 + 15 + 10 + 40 = <b>95 days</b>.", "Net operating (cash) cycle = 95 - 35 = <b>60 days</b>.", "If the firm's daily cost of operations is Rs 5,000, funds tied up for the 60-day cycle are about Rs 3,00,000.")
     + P("<b>Period formulae:</b> raw material days = average raw material stock / average daily consumption (e.g. Rs 60,000 / (Rs 7,20,000 / 360) = 30 days).")),
    ("4.7 Determinants of working capital requirement",
     T(["Determinant", "Effect on working capital"], [
         ["Nature of business", "Manufacturing needs more than trading or service firms"],
         ["Scale of operations", "Larger sales and production need more"],
         ["Length of operating cycle", "A longer cycle ties up more funds"],
         ["Credit policy", "Liberal credit to customers raises receivables; credit from suppliers lowers need"],
         ["Seasonality", "Seasonal peaks need extra temporary working capital"],
         ["Growth and expansion plans", "Growing firms need more stock and receivables"],
         ["Availability of raw materials", "Irregular supply forces larger stocks"],
         ["Business cycle", "Boom needs more working capital; recession needs less"],
         ["Dividend policy, profit margin, inflation and production policy", "Retained profits add working capital; rising prices raise requirement"]])
     + P("<b>Sources of working capital finance:</b> trade credit, bank overdraft and cash credit, short-term loans, commercial paper, factoring, and retained earnings for the permanent portion.")),
])
