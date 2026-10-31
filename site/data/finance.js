window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['finance'] = {
  title: 'Business Finance',
  type: 'notes',
  mcqs: [],
  units: [
    {
      id: 'u1',
      title: 'Unit I · Introduction to Finance',
      html: `
<div class="box"><b>Quick revision:</b> Finance function = Investment + Financing + Dividend (+ Liquidity) decisions. Goal = <b>Wealth Maximisation</b> (not profit maximisation). Owners' funds = equity, no fixed return; Borrowed funds = fixed interest, repayable.</div>

<h2>1.1 Meaning of Business Finance</h2>
<p>Business finance = acquiring funds for a business and using them efficiently to achieve its objectives. It covers <b>procurement</b> of funds (owners' + borrowed) and their <b>effective utilisation</b> to maximise firm value. It answers: how much is needed, from where, and how to use it best.</p>
<ul>
<li>Involves planning, organising, directing and controlling financial activities.</li>
<li>Aim: adequate, timely and cost-effective availability of funds.</li>
</ul>

<h2>1.2 Finance Function</h2>
<p>The finance function is the part of management concerned with procurement and effective utilisation of funds to achieve the firm's objectives.</p>
<table>
<tr><th>Decision</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>Investment</b> (Capital Budgeting)</td><td>How much and where to invest funds, in long-term (capital budgeting) and short-term (working capital) assets</td><td>Buying new plant &amp; machinery</td></tr>
<tr><td><b>Financing</b></td><td>How much finance to raise and from which sources &ndash; equity, debt or mix (capital structure)</td><td>Debt-equity ratio; shares vs bank term loan</td></tr>
<tr><td><b>Dividend</b></td><td>What share of profit is paid as dividend and what is retained</td><td>Declare 20% dividend, retain rest as reserves</td></tr>
<tr><td><b>Liquidity</b> (Working Capital)</td><td>Manage current assets so there is neither shortage nor idle excess</td><td>Keep enough cash for suppliers and daily expenses</td></tr>
</table>
<h3>Other finance functions</h3>
<ul>
<li>Estimating funds requirement (forecasting / planning)</li>
<li>Determining sources of funds (long and short term)</li>
<li>Allocation and efficient utilisation of funds</li>
<li>Financial control &ndash; ratios, budgets, audits</li>
<li>Profit planning and management of surplus</li>
</ul>

<h2>1.3 Objectives of Financial Management</h2>
<h3>(A) Profit Maximisation</h3>
<p>Traditional approach: maximise profit; profit is the test of economic efficiency.</p>
<p><b>In favour:</b> efficient allocation of resources; easy to measure; ensures welfare of shareholders and society.</p>
<p><b>Criticisms:</b></p>
<ul>
<li>Ambiguous &ndash; total profit? rate of profit? EPS? short or long run?</li>
<li>Ignores timing of returns (time value of money)</li>
<li>Ignores risk</li>
<li>Ignores quality / certainty of benefits</li>
</ul>
<h3>(B) Shareholders' Wealth Maximisation (SWM)</h3>
<p>Modern, widely accepted objective: maximise the <b>market value of the firm's shares</b>.</p>
<div class="formula">Shareholders' Wealth = Number of Shares Held &times; Market Price per Share</div>
<p>Better because it considers time value of money, risk (risk-return trade-off) and the size and timing of benefits.</p>
<h3>Supporting objectives</h3>
<ul>
<li>Optimum utilisation of funds</li>
<li>Adequate and regular supply of funds</li>
<li>Safety of funds through sound investment</li>
<li>Sound capital structure (debt/equity balance)</li>
<li>Survival and growth of the firm</li>
</ul>

<h2>1.4 Profit Maximisation vs Wealth Maximisation</h2>
<table>
<tr><th>Basis</th><th>Profit Maximisation</th><th>Wealth Maximisation</th></tr>
<tr><td>Meaning</td><td>Earn maximum possible profit</td><td>Maximise market value of equity shares</td></tr>
<tr><td>Focus</td><td>Short-term earnings</td><td>Long-term value creation</td></tr>
<tr><td>Time value of money</td><td>Ignored</td><td>Considered (cash flows discounted)</td></tr>
<tr><td>Risk</td><td>Ignored</td><td>Explicitly considered</td></tr>
<tr><td>Approach</td><td>Traditional</td><td>Modern</td></tr>
<tr><td>Quality of benefits</td><td>Not distinguished</td><td>Considers certainty of benefits</td></tr>
<tr><td>Measurement</td><td>Absolute profit / EPS</td><td>Market price of share</td></tr>
<tr><td>Decision basis</td><td>Profit figures</td><td>NPV of cash flows</td></tr>
<tr><td>Ambiguity</td><td>Vague (before/after tax? EPS?)</td><td>Clear and precise</td></tr>
<tr><td>Suitability</td><td>Short-run planning</td><td>Primary goal today</td></tr>
</table>
<div class="box"><b>Exam tip:</b> always conclude that Wealth Maximisation is the appropriate goal &ndash; precise, considers time value and risk, reflects true economic value of the firm.</div>

<h2>1.5 Owners' Funds vs Borrowed Funds</h2>
<p><b>Owners' funds:</b> capital contributed by owners (proprietors, partners, shareholders) plus retained profits (reserves &amp; surplus). Raised via equity shares, preference shares, retained earnings. Owners bear residual risk; no fixed obligation to pay dividend or repay capital.</p>
<p><b>Borrowed funds:</b> raised from outside (banks, FIs, public); must be repaid with interest within a stipulated period. Raised via debentures, bonds, term loans, public deposits. Fixed interest irrespective of profit; usually against security.</p>
<table>
<tr><th>Basis</th><th>Owners' Funds</th><th>Borrowed Funds</th></tr>
<tr><td>Meaning</td><td>Provided by owners from own resources</td><td>Arranged from outsiders (banks, FIs, debenture holders)</td></tr>
<tr><td>Sources</td><td>Equity, preference shares, retained earnings / reserves</td><td>Debentures, bonds, term loans, public deposits, trade credit</td></tr>
<tr><td>Ownership</td><td>Provider is part-owner</td><td>Provider is creditor, not owner</td></tr>
<tr><td>Control</td><td>Voting rights, control over management</td><td>No voting rights (except on default)</td></tr>
<tr><td>Return</td><td>Dividend, only out of profits, not guaranteed</td><td>Interest at fixed rate irrespective of profit/loss</td></tr>
<tr><td>Repayment</td><td>Not repayable during life (except winding up)</td><td>Repayable after fixed period</td></tr>
<tr><td>Security</td><td>None required</td><td>Usually security / charge on assets</td></tr>
<tr><td>Risk</td><td>Higher (return and capital not assured)</td><td>Lower (interest and repayment fixed)</td></tr>
<tr><td>Cost to firm</td><td>Costlier &ndash; dividend paid from post-tax profit</td><td>Cheaper &ndash; interest is tax-deductible</td></tr>
<tr><td>Capital structure effect</td><td>Increases equity, strengthens base</td><td>Increases liabilities and financial leverage / gearing</td></tr>
</table>`
    },
    {
      id: 'u2',
      title: 'Unit II · Time Value of Money',
      html: `
<div class="box"><b>Quick revision:</b> money today &gt; money tomorrow. Compounding (&rarr;future): FV = PV(1+i)<sup>n</sup>. Discounting (&rarr;present): PV = FV/(1+i)<sup>n</sup>. PV and discount rate are <b>inversely</b> related. Loan instalment A = Loan / PVIFA.</div>

<h2>2.1 Concept</h2>
<p>A rupee received today is worth more than a rupee received in future. Cash flows at different times must be moved to a common point &ndash; by <b>compounding</b> (forward) or <b>discounting</b> (backward).</p>
<p><b>Reasons:</b></p>
<ul>
<li>Opportunity to earn interest / return by investing now</li>
<li>Risk and uncertainty of future receipts</li>
<li>Inflation erodes purchasing power</li>
<li>Preference for current consumption (liquidity preference)</li>
</ul>

<h2>2.2 Compound Interest &amp; Terminal (Future) Value</h2>
<p>Compounding = finding the future value of a present sum, where interest earns interest. Result is the <b>Terminal Value</b>. (1+i)<sup>n</sup> is the Compound Value Factor (CVF / FVIF).</p>
<div class="formula">FV = PV &times; (1 + i)<sup>n</sup></div>
<p>FV = future/terminal value, PV = present value, i = rate per period, n = periods.</p>
<p><b>Example:</b> &#8377;10,000 for 3 years at 10% &rarr; FV = 10,000 &times; (1.10)<sup>3</sup> = 10,000 &times; 1.331 = <b>&#8377;13,310</b>.</p>
<h3>Compounding more than once a year</h3>
<div class="formula">FV = PV &times; (1 + i/m)<sup>n&times;m</sup></div>
<p>m = compounding frequency per year (half-yearly m=2, quarterly m=4, monthly m=12).</p>

<h2>2.3 Present Value</h2>
<p>Discounting = reverse of compounding: present worth of a future sum at a required rate (discount rate).</p>
<div class="formula">PV = FV / (1 + i)<sup>n</sup> = FV &times; [1/(1+i)<sup>n</sup>]</div>
<p>1/(1+i)<sup>n</sup> = Present Value Factor (PVF / discounting factor).</p>
<p><b>Example:</b> PV of &#8377;13,310 after 3 years at 10% = 13,310 / 1.331 = <b>&#8377;10,000</b>.</p>

<h2>2.4 Relationship between PV and Discount Rate</h2>
<table>
<tr><th>Change</th><th>Effect on PV</th></tr>
<tr><td>Discount rate &uarr;</td><td>PV &darr; (inverse relationship)</td></tr>
<tr><td>Discount rate &darr;</td><td>PV &uarr;</td></tr>
<tr><td>Discount rate = 0</td><td>PV = future (nominal) value</td></tr>
<tr><td>Longer period (n)</td><td>PV falls further at the same rate</td></tr>
</table>
<ul>
<li>Higher rate = investors demand more for waiting, so future money is penalised more.</li>
<li>Relationship is <b>not linear</b> &ndash; PV falls at a decreasing rate as the rate rises.</li>
<li>The farther the cash flow, the greater the effect of a rate change.</li>
</ul>

<h2>2.5 Annuities</h2>
<p>Annuity = series of equal cash flows at regular intervals for a fixed number of periods (EMIs, premiums).</p>
<h3>(a) Future Value of Annuity</h3>
<div class="formula">FVA = A &times; [ ((1+i)<sup>n</sup> &minus; 1) / i ]</div>
<p>Bracket = FVIFA. <b>Example:</b> &#8377;5,000 at end of each year, 4 yrs, 8% &rarr; 5,000 &times; 4.5061 = <b>&#8377;22,530</b> (approx.).</p>
<h3>(b) Present Value of Annuity</h3>
<div class="formula">PVA = A &times; [ (1 &minus; (1+i)<sup>&minus;n</sup>) / i ]</div>
<p>Bracket = PVIFA. <b>Example:</b> &#8377;5,000 for 4 yrs at 8% &rarr; 5,000 &times; 3.3121 = <b>&#8377;16,560</b> (approx.). Another: &#8377;1,000 for 3 yrs at 10% &rarr; <b>&#8377;2,486.85</b>.</p>
<h3>(c) Perpetuity</h3>
<p>Annuity continuing forever.</p>
<div class="formula">PV of Perpetuity = A / i</div>
<h3>(d) Annuity Due</h3>
<p>Payments at the <b>beginning</b> of each period. Value = ordinary annuity value &times; (1+i), for both FV and PV.</p>

<h2>2.6 Amortising a Loan</h2>
<p>Repaying principal + interest through equal periodic instalments. Loan amount = PV of the instalments, so:</p>
<div class="formula">Loan Amount = A &times; PVIFA(i, n) &nbsp;&rArr;&nbsp; A = Loan Amount / PVIFA(i, n)</div>
<p><b>Steps:</b> (1) loan = PV of annuity; (2) A = Loan &divide; PVIFA; (3) prepare amortisation schedule.</p>
<p>Interest = Opening balance &times; rate. Principal repaid = Instalment &minus; Interest. Closing = Opening &minus; Principal repaid.</p>
<p><b>Example 1:</b> &#8377;1,00,000, 10%, 5 equal instalments. PVIFA(10%,5)=3.7908 &rarr; A = 1,00,000/3.7908 = <b>&#8377;26,380</b>.</p>
<table>
<tr><th>Year</th><th>Opening</th><th>Instalment</th><th>Interest (10%)</th><th>Principal</th><th>Closing</th></tr>
<tr><td>1</td><td>1,00,000</td><td>26,380</td><td>10,000</td><td>16,380</td><td>83,620</td></tr>
<tr><td>2</td><td>83,620</td><td>26,380</td><td>8,362</td><td>18,018</td><td>65,602</td></tr>
</table>
<p><b>Example 2:</b> &#8377;1,00,000, 10%, 3 equal annual instalments &rarr; A &asymp; <b>&#8377;40,212</b>.</p>
<table>
<tr><th>Year</th><th>Opening</th><th>Instalment</th><th>Interest</th><th>Closing</th></tr>
<tr><td>1</td><td>1,00,000</td><td>40,212</td><td>10,000</td><td>69,788</td></tr>
<tr><td>2</td><td>69,788</td><td>40,212</td><td>6,979</td><td>36,555</td></tr>
<tr><td>3</td><td>36,555</td><td>40,212</td><td>3,656</td><td>0 (approx.)</td></tr>
</table>`
    },
    {
      id: 'u3',
      title: 'Unit III · Valuation of Bonds & Stocks',
      html: `
<div class="box"><b>Quick revision:</b> value = PV of expected cash flows. Bond: V = I&middot;PVIFA + F&middot;PVIF. Coupon&gt;yield &rarr; premium; coupon&lt;yield &rarr; discount. Share: P<sub>0</sub> = D<sub>1</sub>/(ke&minus;g). Cost of equity ke = D<sub>1</sub>/P<sub>0</sub> + g.</div>

<h2>3.1 Valuation of Bonds</h2>
<p>A bond (debenture) is a long-term debt instrument paying fixed periodic interest (coupon) and repaying face (par) value on maturity. <b>Bond value = PV of interest + maturity value, discounted at required rate of return (yield).</b></p>
<h3>(a) Term (redeemable) bond &ndash; annual interest</h3>
<div class="formula">V = &Sigma; I/(1+kd)<sup>t</sup> + F/(1+kd)<sup>n</sup><br>V = I &times; PVIFA(kd, n) + F &times; PVIF(kd, n)</div>
<p>V = value, I = annual interest (coupon rate &times; face value), F = face/redemption value, kd = required return (yield), n = years to maturity.</p>
<p><b>Example:</b> Face &#8377;1,000, coupon 10% yearly, 3 yrs, required return 12%. I=100. V = 100 &times; 2.402 + 1,000 &times; 0.7118 = 240.2 + 711.8 = <b>&#8377;952</b>.</p>
<h3>(b) Semi-annual interest</h3>
<div class="formula">V = (I/2) &times; PVIFA(kd/2, 2n) + F &times; PVIF(kd/2, 2n)</div>
<h3>(c) Perpetual (irredeemable) bond</h3>
<div class="formula">V = I / kd</div>
<h3>(d) Zero-coupon bond</h3>
<p>No periodic interest; issued at discount, redeemed at face value.</p>
<div class="formula">V = F / (1 + kd)<sup>n</sup></div>
<h3>Bond value vs coupon rate vs yield</h3>
<table>
<tr><th>Condition</th><th>Bond sells at</th></tr>
<tr><td>Coupon = Yield</td><td>Par</td></tr>
<tr><td>Coupon &gt; Yield</td><td>Premium</td></tr>
<tr><td>Coupon &lt; Yield</td><td>Discount</td></tr>
</table>
<p>Bond value and market yield are <b>inversely</b> related.</p>

<h2>3.2 Valuation of Stocks (Equity Shares)</h2>
<p>Value of a share = PV of future dividends and/or sale proceeds.</p>
<h3>(a) Single holding period</h3>
<div class="formula">P<sub>0</sub> = D<sub>1</sub>/(1+ke) + P<sub>1</sub>/(1+ke)</div>
<p>P<sub>0</sub> = current price, D<sub>1</sub> = dividend at end of year 1, P<sub>1</sub> = expected selling price at end of year 1, ke = required return on equity.</p>
<h3>(b) Constant dividend (no growth)</h3>
<div class="formula">P<sub>0</sub> = D / ke</div>

<h2>3.3 Return from a Stock</h2>
<div class="formula">Total Return = Dividend Yield + Capital Gains Yield<br>ke = [D<sub>1</sub> + (P<sub>1</sub> &minus; P<sub>0</sub>)] / P<sub>0</sub></div>
<p><b>Example:</b> bought at 100, dividend 8, sold at 112 &rarr; [8 + (112&minus;100)]/100 = <b>20%</b>.</p>

<h2>3.4 Gordon Growth Model (constant dividend growth)</h2>
<p>Dividends grow at constant rate g forever. Most frequently tested.</p>
<div class="formula">P<sub>0</sub> = D<sub>1</sub> / (ke &minus; g) &nbsp;&nbsp; where D<sub>1</sub> = D<sub>0</sub>(1+g)</div>
<p>D<sub>0</sub> = dividend just paid. Valid only if <b>ke &gt; g</b>.</p>
<p><b>Example:</b> D<sub>0</sub>=4, g=5%, ke=15%. D<sub>1</sub>=4.20. P<sub>0</sub> = 4.20/(0.15&minus;0.05) = <b>&#8377;42</b>.</p>
<h3>Cost of equity (rearranged)</h3>
<div class="formula">ke = (D<sub>1</sub> / P<sub>0</sub>) + g</div>`
    },
    {
      id: 'u4',
      title: 'Unit IV · Capital Budgeting',
      html: `
<div class="box"><b>Quick revision:</b> Payback (&lt; standard), ARR (&gt; cut-off) ignore time value. NPV (&gt; 0) and IRR (&gt; cost of capital) use discounting. If NPV and IRR conflict for mutually exclusive projects &rarr; prefer <b>NPV</b>.</div>

<h2>4.1 Nature &amp; Importance</h2>
<p>Capital budgeting = evaluating and selecting long-term investment proposals consistent with the goal of maximising shareholders' wealth. Funds are committed now for future returns.</p>
<h3>Features</h3>
<ul>
<li>Long-term commitment, irreversible or reversible only at significant loss</li>
<li>Substantial funds; affects future profitability and competitiveness</li>
<li>Future benefits uncertain and spread over years &ndash; risk involved</li>
<li>Long-term strategic impact on growth</li>
</ul>
<h3>Importance</h3>
<ul>
<li>Large investment &ndash; errors costly, hard to reverse</li>
<li>Long-term effect on profitability and risk</li>
<li>Irreversibility</li>
<li>Complex: forecasting cash flows far ahead</li>
</ul>
<h3>Process</h3>
<ol>
<li>Identify / generate investment proposals</li>
<li>Estimate cash flows (initial outlay, annual flows, terminal flow)</li>
<li>Evaluate using Payback, ARR, NPV, IRR</li>
<li>Select project per criterion</li>
<li>Implement and review (post-audit)</li>
</ol>

<h2>4.2 Non-Discounting Methods</h2>
<h3>(A) Payback Period</h3>
<p>Time taken to recover the initial outlay from net cash inflows.</p>
<div class="formula">Equal inflows: Payback = Initial Investment / Annual Cash Inflow<br>Unequal inflows: Payback = E + (B / C)</div>
<p>E = years before full recovery, B = balance still to recover, C = inflow in the recovery year.</p>
<p><b>Rule:</b> accept if payback &lt; standard period; among mutually exclusive projects choose the shorter.</p>
<p><b>Merits:</b> simple; stresses liquidity; useful when funds scarce / obsolescence risk high.<br><b>Demerits:</b> ignores time value; ignores cash flows after payback; measures recovery speed, not profitability.</p>
<h3>(B) Accounting / Average Rate of Return (ARR)</h3>
<div class="formula">ARR = (Average Annual PAT / Average Investment) &times; 100<br>Average Investment = (Initial Investment &minus; Salvage)/2 + Salvage</div>
<p>If no salvage: Average Investment = Initial Investment / 2.</p>
<p><b>Rule:</b> accept if ARR &gt; cut-off rate; choose highest ARR.</p>
<p><b>Merits:</b> uses accounting data, easy; considers whole life.<br><b>Demerits:</b> ignores time value; uses profit not cash flow; definitions vary.</p>

<h2>4.3 Discounted Cash Flow Methods</h2>
<h3>(A) Net Present Value (NPV)</h3>
<div class="formula">NPV = &Sigma; CF<sub>t</sub>/(1+k)<sup>t</sup> &minus; Initial Investment</div>
<p>k = cost of capital. <b>Rule:</b> accept if NPV &gt; 0, reject if &lt; 0; choose highest positive NPV.</p>
<p><b>Example:</b> outlay 1,00,000; inflow 40,000 for 4 yrs; k=10%. PV = 40,000 &times; 3.1699 = 1,26,796. NPV = <b>+26,796 &rarr; accept</b>.</p>
<p><b>Merits:</b> time value; whole cash-flow stream; consistent with wealth maximisation.<br><b>Demerits:</b> needs accurate discount rate; absolute NPV hard to compare for projects of different size / life.</p>
<h3>Profitability Index (PI)</h3>
<div class="formula">PI = PV of cash inflows / Initial investment &nbsp; (accept if PI &gt; 1)</div>
<p class="expl">[extra] Used in the practice paper (Q6b); not defined in the notes PDF.</p>
<h3>(B) Internal Rate of Return (IRR)</h3>
<p>Discount rate at which PV of inflows = PV of outflows, i.e. NPV = 0.</p>
<div class="formula">&Sigma; CF<sub>t</sub>/(1+r)<sup>t</sup> = Initial Investment<br>IRR = LR + [ NPV<sub>LR</sub> / (NPV<sub>LR</sub> &minus; NPV<sub>HR</sub>) ] &times; (HR &minus; LR)</div>
<p>LR = lower rate (positive NPV), HR = higher rate (negative NPV). <b>Rule:</b> accept if IRR &gt; k.</p>
<p><b>Merits:</b> time value; whole life; expressed in % so easy to compare with cost of capital.<br><b>Demerits:</b> tedious trial and error; multiple / no IRR if cash-flow signs change more than once; assumes reinvestment at IRR itself (unrealistic).</p>
<h3>NPV vs IRR conflict</h3>
<p>Same decision for independent conventional projects. For mutually exclusive projects they may conflict (size, timing, life, reinvestment assumption: NPV at cost of capital, IRR at IRR). <b>NPV is preferred</b> as it measures addition to shareholder wealth.</p>

<h2>4.4 Comparison</h2>
<table>
<tr><th>Method</th><th>Time value?</th><th>Basis</th><th>Decision rule</th></tr>
<tr><td>Payback</td><td>No</td><td>Cash flow / liquidity</td><td>Accept if payback &lt; standard</td></tr>
<tr><td>ARR</td><td>No</td><td>Accounting profit</td><td>Accept if ARR &gt; cut-off</td></tr>
<tr><td>NPV</td><td>Yes</td><td>Discounted cash flow</td><td>Accept if NPV &gt; 0</td></tr>
<tr><td>IRR</td><td>Yes</td><td>Discounted cash flow</td><td>Accept if IRR &gt; cost of capital</td></tr>
</table>`
    },
    {
      id: 'u5',
      title: 'Unit V · Financing Decision & Leverage',
      html: `
<div class="box"><b>Quick revision:</b> DOL = Contribution/EBIT. DFL = EBIT/(EBIT&minus;I). DCL = DOL&times;DFL = Contribution/(EBIT&minus;I). Above indifference EBIT, higher-debt plan gives higher EPS. Pecking order: internal &rarr; debt &rarr; hybrid &rarr; new equity.</div>

<h2>5.1 Capital Structure Decision</h2>
<p>Capital structure = mix of long-term sources (debt + equity). The financing decision seeks the <b>optimum</b> structure that minimises overall cost of capital and maximises firm value.</p>
<h3>Factors</h3>
<ul>
<li>Cost of each source</li>
<li>Risk &ndash; financial risk rises with debt</li>
<li>Control &ndash; new equity dilutes control</li>
<li>Flexibility to raise / alter funds later</li>
<li>Cash-flow ability to service fixed charges</li>
<li>Nature of industry, firm size / stability, market conditions</li>
</ul>

<h2>5.2 Leverage</h2>
<p>Use of fixed-cost funds or assets to magnify returns to equity owners. Arises from fixed operating costs or fixed financial charges.</p>
<h3>(A) Operating Leverage</h3>
<p>From fixed operating costs; measures sensitivity of <b>EBIT to sales</b>.</p>
<div class="formula">DOL = Contribution / EBIT = % change in EBIT / % change in Sales<br>Contribution = Sales &minus; Variable Cost; EBIT = Contribution &minus; Fixed Cost</div>
<p>High DOL = small sales change causes large EBIT change = higher business / operating risk.</p>
<h3>(B) Financial Leverage</h3>
<p>From fixed financial charges (interest, preference dividend); measures sensitivity of <b>EPS to EBIT</b>.</p>
<div class="formula">DFL = EBIT / (EBIT &minus; Interest) = % change in EPS / % change in EBIT<br>With preference dividend: DFL = EBIT / [EBIT &minus; I &minus; PD/(1&minus;t)]</div>
<p>High DFL = greater financial risk. <b>Favourable leverage / trading on equity</b>: return on investment &gt; cost of debt, so equity return rises.</p>
<h3>(C) Combined Leverage</h3>
<div class="formula">DCL = DOL &times; DFL = Contribution / (EBIT &minus; I) = % change in EPS / % change in Sales</div>
<p><b>Example:</b> Sales 10,00,000; VC 6,00,000; FC 2,00,000; I 50,000. Contribution=4,00,000; EBIT=2,00,000. DOL=2; DFL=2,00,000/1,50,000=1.33; DCL=2&times;1.33=<b>2.67</b>.</p>

<h2>5.3 EBIT&ndash;EPS Analysis</h2>
<p>Examines effect of different financing plans on EPS at varying EBIT; helps choose structure maximising EPS at expected EBIT.</p>
<div class="formula">EPS = (EBIT &minus; I)(1 &minus; t) / N<br>With preference dividend: EPS = [(EBIT &minus; I)(1 &minus; t) &minus; PD] / N</div>
<h3>Indifference point</h3>
<p>EBIT at which EPS is the same under two plans.</p>
<div class="formula">(EBIT &minus; I<sub>1</sub>)(1 &minus; t)/N<sub>1</sub> = (EBIT &minus; I<sub>2</sub>)(1 &minus; t)/N<sub>2</sub></div>
<ul>
<li>Expected EBIT <b>above</b> indifference point &rarr; higher-debt plan gives higher EPS (prefer debt)</li>
<li>Expected EBIT <b>below</b> it &rarr; lower-debt (more equity) plan better (prefer equity)</li>
</ul>
<h3>Financial break-even point</h3>
<div class="formula">Financial BEP = I + PD / (1 &minus; t)</div>

<h2>5.4 Cash-flow Ability to Service Debt</h2>
<div class="formula">Interest Coverage Ratio = EBIT / Interest<br>DSCR = (PAT + Interest + Depreciation) / (Interest + Principal Instalment)</div>
<p>Higher ratio = bigger cushion. Lenders usually require a minimum DSCR for long-term loans.</p>

<h2>5.5 Pecking Order Theory (Myers &amp; Majluf)</h2>
<p>Firms have no fixed target capital structure; they follow a hierarchy driven by information asymmetry and signalling costs.</p>
<ol>
<li><b>Internal funds</b> (retained earnings) &ndash; no asymmetry, no flotation cost, no dilution</li>
<li><b>Debt</b> &ndash; no ownership dilution; signals confidence</li>
<li><b>Hybrid securities</b> (e.g. convertible debentures)</li>
<li><b>New equity</b> &ndash; last resort; market may read it as shares being overvalued</li>
</ol>
<p>Explains why profitable firms use less debt: they have enough internal funds, not a low target ratio.</p>`
    },
    {
      id: 'coc',
      title: 'Cost of Capital (formula sheet)',
      html: `
<div class="box">Source: <i>Cost of Capital &amp; Financial Leverage Formula Sheet</i>. The PDFs give formulas only (no theory text). Use <b>market value weights</b> for WACC unless the question says book value.</div>

<h2>Cost of Capital</h2>
<table>
<tr><th>Item</th><th>Formula</th></tr>
<tr><td>Cost of debt, irredeemable, before tax</td><td>Kd = I / NP</td></tr>
<tr><td>Cost of debt, irredeemable, after tax</td><td>Kd = I(1 &minus; t) / NP</td></tr>
<tr><td>Cost of debt, redeemable, after tax</td><td>Kd = [I(1&minus;t) + (RV&minus;NP)/n] / [(RV+NP)/2]</td></tr>
<tr><td>Preference capital, irredeemable</td><td>Kp = PD / NP</td></tr>
<tr><td>Preference capital, redeemable</td><td>Kp = [PD + (RV&minus;NP)/n] / [(RV+NP)/2]</td></tr>
<tr><td>Equity &ndash; Dividend price</td><td>Ke = D<sub>1</sub> / NP (or D / MP)</td></tr>
<tr><td>Equity &ndash; Growth (Gordon)</td><td>Ke = D<sub>1</sub>/NP + g; &nbsp;g = b &times; r</td></tr>
<tr><td>Equity &ndash; Earnings price</td><td>Ke = E / NP</td></tr>
<tr><td>Equity &ndash; CAPM</td><td>Ke = Rf + &beta;(Rm &minus; Rf)</td></tr>
<tr><td>Equity &ndash; Realised yield</td><td>Based on actual dividends and growth received</td></tr>
<tr><td>Retained earnings</td><td>Kr = Ke(1 &minus; tp)(1 &minus; b)</td></tr>
<tr><td>WACC</td><td>&Sigma; (Wi &times; Ki) &ndash; book or market value weights</td></tr>
<tr><td>Marginal cost of capital (MCC)</td><td>Cost of the next additional rupee of capital raised</td></tr>
</table>
<h3>Notation</h3>
<p>NP = net proceeds; RV = redemption value; n = years to maturity; t = corporate tax; I = annual interest; D<sub>1</sub> = expected dividend/share; MP = market price; g = growth; b = retention ratio; PD = preference dividend; r = return on retained earnings; E = EPS; Rf/Rm = risk-free / market return; &beta; = beta; tp = shareholder's personal tax rate.</p>

<h2>Leverage formula variants</h2>
<table>
<tr><th>Item</th><th>Formula</th></tr>
<tr><td>Operating leverage</td><td>OL = Contribution / EBIT; DOL = %&Delta;EBIT / %&Delta;Sales</td></tr>
<tr><td>Financial leverage</td><td>FL = EBIT / EBT; DFL = %&Delta;EPS / %&Delta;EBIT; EBT = EBIT &minus; Interest</td></tr>
<tr><td>Combined leverage</td><td>CL = OL &times; FL = Contribution / EBT; DCL = %&Delta;EPS / %&Delta;Sales</td></tr>
<tr><td>EPS</td><td>[(EBIT &minus; I)(1 &minus; t) &minus; PD] / N</td></tr>
<tr><td>Indifference point</td><td>[(EBIT&minus;I<sub>1</sub>)(1&minus;t)&minus;PD<sub>1</sub>]/N<sub>1</sub> = [(EBIT&minus;I<sub>2</sub>)(1&minus;t)&minus;PD<sub>2</sub>]/N<sub>2</sub></td></tr>
<tr><td>Financial BEP</td><td>I + PD/(1 &minus; t)</td></tr>
</table>
<div class="box"><b>Exam tips (from sheet):</b> DOL/DFL/DCL by % change or by ratio give the same answer &ndash; use the ratio to save time. At the indifference point EPS is equal in both plans; beyond it the higher-leverage plan gives higher EPS.</div>
<p class="expl">Note from the sheet: notation (MP vs NP, flotation cost treatment) can differ across syllabi &ndash; verify against your prescribed textbook.</p>`
    },
    {
      id: 'formulas',
      title: 'Formula Sheet (all units)',
      html: `
<h2>1. Time Value of Money</h2>
<table>
<tr><th>Item</th><th>Formula</th></tr>
<tr><td>FV (single sum)</td><td>FV = PV(1+i)<sup>n</sup></td></tr>
<tr><td>Compounding m times/yr</td><td>FV = PV(1 + i/m)<sup>n&times;m</sup></td></tr>
<tr><td>PV (single sum)</td><td>PV = FV/(1+i)<sup>n</sup></td></tr>
<tr><td>FV of annuity</td><td>A[((1+i)<sup>n</sup>&minus;1)/i]</td></tr>
<tr><td>PV of annuity</td><td>A[(1&minus;(1+i)<sup>&minus;n</sup>)/i]</td></tr>
<tr><td>PV of perpetuity</td><td>A / i</td></tr>
<tr><td>Annuity due</td><td>Ordinary value &times; (1+i)</td></tr>
<tr><td>Loan instalment</td><td>A = Loan / PVIFA(i,n)</td></tr>
<tr><td>Loan interest</td><td>Opening balance &times; i; Principal = Instalment &minus; Interest</td></tr>
</table>
<h2>2. Bonds</h2>
<table>
<tr><th>Item</th><th>Formula</th></tr>
<tr><td>Annual interest</td><td>V = I&middot;PVIFA(kd,n) + F&middot;PVIF(kd,n)</td></tr>
<tr><td>Semi-annual</td><td>V = (I/2)&middot;PVIFA(kd/2,2n) + F&middot;PVIF(kd/2,2n)</td></tr>
<tr><td>Perpetual</td><td>V = I / kd</td></tr>
<tr><td>Zero-coupon</td><td>V = F/(1+kd)<sup>n</sup></td></tr>
</table>
<p>Coupon = Yield &rarr; Par; Coupon &gt; Yield &rarr; Premium; Coupon &lt; Yield &rarr; Discount.</p>
<h2>3. Stocks</h2>
<table>
<tr><th>Item</th><th>Formula</th></tr>
<tr><td>Single period</td><td>P<sub>0</sub> = D<sub>1</sub>/(1+ke) + P<sub>1</sub>/(1+ke)</td></tr>
<tr><td>No growth</td><td>P<sub>0</sub> = D / ke</td></tr>
<tr><td>Return</td><td>ke = [D<sub>1</sub> + (P<sub>1</sub>&minus;P<sub>0</sub>)] / P<sub>0</sub></td></tr>
<tr><td>Gordon</td><td>P<sub>0</sub> = D<sub>1</sub>/(ke&minus;g); D<sub>1</sub> = D<sub>0</sub>(1+g)</td></tr>
<tr><td>Cost of equity</td><td>ke = D<sub>1</sub>/P<sub>0</sub> + g</td></tr>
</table>
<h2>4. Capital Budgeting</h2>
<table>
<tr><th>Item</th><th>Formula / rule</th></tr>
<tr><td>Payback (equal)</td><td>Investment / Annual inflow</td></tr>
<tr><td>Payback (unequal)</td><td>E + B/C</td></tr>
<tr><td>ARR</td><td>(Avg PAT / Avg Investment) &times; 100; Avg Inv = (Initial&minus;Salvage)/2 + Salvage</td></tr>
<tr><td>NPV</td><td>&Sigma; CF<sub>t</sub>/(1+k)<sup>t</sup> &minus; Investment</td></tr>
<tr><td>IRR</td><td>LR + [NPV<sub>LR</sub>/(NPV<sub>LR</sub>&minus;NPV<sub>HR</sub>)] &times; (HR&minus;LR)</td></tr>
</table>
<p>Accept if: Payback &lt; standard | ARR &gt; cut-off | NPV &gt; 0 | IRR &gt; cost of capital.</p>
<h2>5. Leverage &amp; Financing</h2>
<table>
<tr><th>Item</th><th>Formula</th></tr>
<tr><td>DOL</td><td>Contribution / EBIT</td></tr>
<tr><td>DFL</td><td>EBIT / (EBIT &minus; Interest)</td></tr>
<tr><td>DCL</td><td>DOL &times; DFL = Contribution / (EBIT &minus; I)</td></tr>
<tr><td>EPS</td><td>(EBIT&minus;I)(1&minus;t)/N; with PD: [(EBIT&minus;I)(1&minus;t)&minus;PD]/N</td></tr>
<tr><td>Indifference point</td><td>(EBIT&minus;I<sub>1</sub>)(1&minus;t)/N<sub>1</sub> = (EBIT&minus;I<sub>2</sub>)(1&minus;t)/N<sub>2</sub></td></tr>
<tr><td>Interest coverage</td><td>EBIT / Interest</td></tr>
<tr><td>DSCR</td><td>(PAT + Interest + Depreciation) / (Interest + Principal instalment)</td></tr>
</table>
<p>Pecking order: Internal funds &rarr; Debt &rarr; Hybrid &rarr; New equity.</p>
<p>Cost of capital formulas: see the <i>Cost of Capital</i> page.</p>`
    },
    {
      id: 'solved',
      title: 'Solved Questions (assignments & test paper)',
      html: `
<div class="box">Questions taken from Assignment 1 (TVM), Assignment 2 (Capital Budgeting) and the Online Preparatory Test (30-09-2026). Working shown step by step. Where a PVF table was given in the paper, table values are used.</div>

<h2>Assignment 1 &ndash; TVM</h2>
<p><b>Q4.</b> Deposit &#8377;50,000 at 8% compounded annually, 4 years. FV?</p>
<div class="formula">FV = 50,000 &times; (1.08)<sup>4</sup> = 50,000 &times; 1.3605 = &#8377;68,024</div>
<p><b>Q5(a).</b> Bond: face 1,000, coupon 9% annual, 3 yrs, required return 10%.</p>
<div class="formula">I = 90. V = 90 &times; PVIFA(10%,3) + 1,000 &times; PVIF(10%,3)<br>= 90 &times; 2.4869 + 1,000 &times; 0.7513 = 223.82 + 751.31 = &#8377;975.13</div>
<p>Coupon (9%) &lt; yield (10%) &rarr; sells at a <b>discount</b>.</p>
<p><b>Q5(b).</b> Price 80, D<sub>0</sub> = 4, g = 6%. Expected return?</p>
<div class="formula">D<sub>1</sub> = 4 &times; 1.06 = 4.24<br>ke = D<sub>1</sub>/P<sub>0</sub> + g = 4.24/80 + 0.06 = 5.3% + 6% = 11.3%</div>

<h2>Assignment 2 &ndash; Capital Budgeting</h2>
<p><b>Q3.</b> Outlay 6,00,000; equal inflow 1,50,000 for 6 yrs; standard payback 4 yrs.</p>
<div class="formula">Payback = 6,00,000 / 1,50,000 = 4 years</div>
<p>Equals the standard period &rarr; acceptable (at the limit; strictly the rule is "payback &lt; standard").</p>
<p><b>Q4.</b> Outlay 10,00,000; inflows 3,00,000 / 3,50,000 / 4,00,000 / 2,50,000; k = 12%.</p>
<table>
<tr><th>Yr</th><th>Inflow</th><th>PVF 12%</th><th>PV</th></tr>
<tr><td>1</td><td>3,00,000</td><td>0.8929</td><td>2,67,870</td></tr>
<tr><td>2</td><td>3,50,000</td><td>0.7972</td><td>2,79,020</td></tr>
<tr><td>3</td><td>4,00,000</td><td>0.7118</td><td>2,84,720</td></tr>
<tr><td>4</td><td>2,50,000</td><td>0.6355</td><td>1,58,875</td></tr>
<tr><td colspan="3"><b>Total PV</b></td><td><b>9,90,485</b></td></tr>
</table>
<div class="formula">NPV = 9,90,485 &minus; 10,00,000 = &minus;9,515 (approx.) &rarr; NPV &lt; 0 &rarr; REJECT</div>
<p><b>Q5.</b> IRR for same project (trial and error).</p>
<p>At 10%: PV = 3,00,000&times;0.9091 + 3,50,000&times;0.8264 + 4,00,000&times;0.7513 + 2,50,000&times;0.6830 = 10,33,240 &rarr; NPV = +33,240 (LR).<br>At 12%: NPV = &minus;9,515 (HR).</p>
<div class="formula">IRR = 10 + [33,240 / (33,240 + 9,515)] &times; (12 &minus; 10) = 10 + 1.55 = &asymp; 11.55%</div>
<p>IRR (11.55%) &lt; 12% &rarr; reject (consistent with NPV).</p>
<p><b>Q6.</b> Machine 4,00,000; scrap 40,000; average PAT 66,000.</p>
<div class="formula">Avg Investment = (4,00,000 &minus; 40,000)/2 + 40,000 = 2,20,000<br>ARR = 66,000 / 2,20,000 &times; 100 = 30%</div>

<h2>Online Preparatory Test (30 marks)</h2>
<p><b>Q2.</b> PV of 50,000 receivable after 3 years at 10% (PVF = 0.751).</p>
<div class="formula">PV = 50,000 &times; 0.751 = &#8377;37,550</div>
<p><b>Q3.</b> Outlay 1,00,000; inflows 30,000 / 40,000 / 40,000 / 30,000 / 20,000. Payback?</p>
<p>Cumulative: yr1 30,000; yr2 70,000; yr3 1,10,000. Recovered in year 3. E=2, B=30,000, C=40,000.</p>
<div class="formula">Payback = 2 + 30,000/40,000 = 2.75 years</div>
<p><b>Q4.</b> Machine 1,20,000; scrap 20,000; PAT 20,000 / 25,000 / 30,000 / 25,000. ARR?</p>
<div class="formula">Avg PAT = 1,00,000/4 = 25,000<br>Avg Investment = (1,20,000 &minus; 20,000)/2 + 20,000 = 70,000<br>ARR = 25,000/70,000 &times; 100 = 35.71%</div>
<p><b>Q6.</b> Project X: cost 2,00,000; k=10%; inflows 80,000 / 90,000 / 70,000 / 60,000.</p>
<div class="formula">PV = 80,000&times;0.909 + 90,000&times;0.826 + 70,000&times;0.751 + 60,000&times;0.683<br>= 72,720 + 74,340 + 52,570 + 40,980 = 2,40,610<br>NPV = 2,40,610 &minus; 2,00,000 = +40,610<br>PI = 2,40,610 / 2,00,000 = 1.20</div>
<p>NPV &gt; 0 and PI &gt; 1 &rarr; <b>accept</b>.</p>
<p><b>Q7.</b> Shree Ltd: Equity 5,00,000; 12% Pref 2,00,000; 10% Debentures 3,00,000. Rf=7%, Rm=13%, &beta;=1.5, t=30%.</p>
<div class="formula">(a) Ke = Rf + &beta;(Rm&minus;Rf) = 7 + 1.5 &times; 6 = 16%<br>(b) Kd = 10% &times; (1&minus;0.30) = 7%<br>(c) Weights: 0.5 / 0.2 / 0.3 (total 10,00,000)<br>WACC = 0.5&times;16 + 0.2&times;12 + 0.3&times;7 = 8 + 2.4 + 2.1 = 12.5%</div>
<p>Cost of preference = 12% (irredeemable, Kp = PD/NP).</p>

<h2>Short-answer questions asked (answers in the Unit pages)</h2>
<ul>
<li>Meaning of finance function and its two broad decision areas &rarr; Unit I</li>
<li>Profit vs wealth maximisation (any two points) &rarr; Unit I</li>
<li>PV and discount rate relationship with example &rarr; Unit II</li>
<li>Define capital budgeting; why important &rarr; Unit IV</li>
<li>Payback vs ARR &rarr; Unit IV</li>
<li>NPV and IRR with decision rules, one advantage and one limitation each &rarr; Unit IV</li>
</ul>`
    },
    {
      id: 'leverage-qs',
      title: 'Leverage Practice Questions (textbook)',
      html: `
<div class="box">From <i>Operating and Financial Leverage &ndash; Practical Questions with Answers</i> (SBPD Publications). Answers are as given in the book. Q24&ndash;27 are not in the PDF; Q23, Q28, Q33 are cut off in the scan, so only what is legible is shown.</div>

<h2>Solved method (check with Q1 and Q5)</h2>
<p><b>Q1.</b> Price 15, VC 10, FC 10,000. OL at 4,000 and 5,000 units.</p>
<div class="formula">4,000: Contribution = 5&times;4,000 = 20,000; EBIT = 10,000; OL = 2<br>5,000: Contribution = 25,000; EBIT = 15,000; OL = 1.67</div>
<p><b>Q5.</b> 3,00,000 units; price 10; VC 6; FC 4,00,000. Sales +10% &rarr; EBIT?</p>
<div class="formula">Contribution = 12,00,000; EBIT = 8,00,000; OL = 1.5<br>% change in EBIT = 1.5 &times; 10% = 15%</div>

<h2>A. Operating Leverage &ndash; questions &amp; answers</h2>
<table>
<tr><th>Q</th><th>Question (short)</th><th>Answer</th></tr>
<tr><td>1</td><td>P=15, VC=10, FC=10,000; 4,000 &amp; 5,000 units</td><td>2; 1.67</td></tr>
<tr><td>2</td><td>P=500, VC=200, FC=1,00,000; 2,000 / 2,500 / 1,500 units</td><td>1.20; 1.29; 1.15</td></tr>
<tr><td>3</td><td>P=56, VC=36, FC=40,000; 12,000 &amp; 16,000 units</td><td>1.2; 1.14</td></tr>
<tr><td>4</td><td>Capacity 8,000, used 4,000; P=50, VC=30; FC 4,000 / 10,000 / 12,000</td><td>1.05; 1.14; 1.18</td></tr>
<tr><td>5</td><td>3,00,000 units, P=10, VC=6, FC=4,00,000; sales +10%</td><td>EBIT +15%</td></tr>
<tr><td>6</td><td>BEP 2,000 units, VC 9, P 14; at 2,500 &amp; 3,000 units</td><td>OL = 5, 3</td></tr>
<tr><td>7</td><td>BEP 20,000, VC 50, P 70; at 25,000 &amp; 30,000 units</td><td>5; 3</td></tr>
<tr><td>8</td><td>(a) OL=2, sales +50%; (b) OL=3, EBIT to double</td><td>(a) 100%; (b) 33.33%</td></tr>
<tr><td>9</td><td>P=100, VC=50, FC=25,000; 1,000 / 1,250 / 750 units</td><td>2; 3; 1.67</td></tr>
<tr><td>10</td><td>A, B, C: 50,000 units, P=10, VC=4; FC 1,00,000 / 2,00,000 / 2,50,000</td><td>OL: A 1.5, B 3, C 6 (book: 150/300/600%); EBIT &plusmn;15%, &plusmn;30%, &plusmn;60% for &plusmn;10% sales</td></tr>
<tr><td>11</td><td>P=10, VC=6, FC=16,000: BEP and DOL at various volumes</td><td>BEP 4,000 units; DOL 5, 3, 2 and &minus;3 at different volumes</td></tr>
</table>
<p>Rule to remember: the closer sales are to break-even, the higher the DOL (infinite at BEP; negative below BEP).</p>

<h2>B. Financial Leverage</h2>
<table>
<tr><th>Q</th><th>Question (short)</th><th>Answer</th></tr>
<tr><td>12</td><td>Three plans A, B, C (equity / 10% debt / EBIT)</td><td>A 2; B 4; C 1.33</td></tr>
<tr><td>13</td><td>Equity 4,00,000; 10% Pref 4,00,000; 8% Deb 10,00,000; EBIT 2,00,000, t=50%; and EBIT 3,00,000</td><td>5; 2.14</td></tr>
<tr><td>14</td><td>50,000 shares &times; 10; 10% Pref 10,00,000; 10% Deb 10,00,000; EBIT 5,00,000 / 3,00,000 / 7,00,000, t=50%</td><td>EPS 2, Nil, 4; FL 2.5</td></tr>
<tr><td>15</td><td>Sales 10,00,000; VC 7,00,000; FC 2,00,000; 5,00,000 debentures @10%</td><td>OL = 3; CL = 6</td></tr>
<tr><td>16</td><td>EBIT 30,000; 5% deb 1,20,000; 10% pref 60,000; 3,000 shares; EBIT 18,000 &amp; 42,000; t=50%</td><td>DFL 2.5 (unfavourable at 18,000; favourable at 42,000)</td></tr>
<tr><td>17</td><td>Equity 1,00,000; 10% Pref 1,00,000; 8% Deb 1,25,000; EBIT 50,000; t=50%</td><td>FL = 2.5</td></tr>
<tr><td>18</td><td>EBIT 50,000; 5% bonds 2,00,000; 10% pref 1,00,000; 5,000 shares; EBIT 30,000 &amp; 70,000</td><td>2.5 (unfavourable / favourable)</td></tr>
<tr><td>19</td><td>(a) FL=1.5, EBIT +10%; (b) FL=2, EPS +10%</td><td>(a) EBT +15%; (b) EBIT +5%</td></tr>
<tr><td>20</td><td>Equity 50,00,000; 12% deb 20,00,000; EBIT 16,00,000</td><td>FL = 1.176</td></tr>
<tr><td>21</td><td>Net worth 25,00,000; D/E 3:1; interest 12%; operating profit 20,00,000</td><td>FL = 1.818</td></tr>
<tr><td>22</td><td>2,00,000 shares &times; 10; 40,000 10% pref &times; 100; 40,000 10% deb &times; 100; EBIT 20L / 12L / 28L; t=50%</td><td>EPS 2.00, Nil, 4.00; FL 2.5</td></tr>
</table>
<p><b>Check Q20:</b> EBT = 16,00,000 &minus; 2,40,000 = 13,60,000; FL = 16,00,000/13,60,000 = 1.176 &#10003;</p>
<p><b>Check Q17 (pref dividend, tax):</b> Interest = 10,000; PD = 10,000; PD pre-tax = 10,000/0.5 = 20,000; FL = 50,000/(50,000&minus;10,000&minus;20,000) = 2.5 &#10003;</p>

<h2>C. Combined Leverage</h2>
<table>
<tr><th>Q</th><th>Question (short)</th><th>Answer</th></tr>
<tr><td>28</td><td>(text partly cut off) DOL, DFL, DCL</td><td>2.5; 1.6; 4</td></tr>
<tr><td>29</td><td>Sales 2,50,000; VC 1,70,000; FC 40,000; debt 1,00,000 @12%</td><td>OL 2; FL 1.43; CL 2.86</td></tr>
<tr><td>30</td><td>A: 1,60,000 units, VC 4, FC 4,80,000, I 2,40,000, P 10. B: 2,00,000 units, VC 3, FC 5,00,000, I 1,00,000, P 8</td><td>OL 2, 2; FL 2, 1.25; CL 4, 2.50</td></tr>
<tr><td>31</td><td>Disha (45,000 units) and Asha (55,000 units)</td><td>OL 1.862, 1.897; FL 1.758, 1.261; CL 3.273, 2.391</td></tr>
<tr><td>32</td><td>Sales 5,00,000; VC 40% of sales; FC 2,00,000; interest 60,000; sales +10%</td><td>OL 3; FL 2.5; CL 7.5; PBT +75%</td></tr>
<tr><td>33</td><td>Sales 10L; VC 4L; Contribution 6L; FC 4L; EBIT 2L; Interest 1L; PBT 1L (requirements cut off)</td><td>Not in PDF. From data: OL = 3, FL = 2, CL = 6 [calculated]</td></tr>
</table>
<p><b>Check Q32:</b> VC = 2,00,000; Contribution = 3,00,000; EBIT = 1,00,000; EBT = 40,000. OL = 3; FL = 2.5; CL = 7.5; % rise in PBT = 7.5 &times; 10 = 75% &#10003;</p>`
    }
  ]
};
