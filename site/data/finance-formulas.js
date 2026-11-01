// Finance formula explorer: each card = formula, symbols, worked example, when / where to use, common mistake, optional live calculator.
// Replaces the plain "Formula Sheet" unit page with a card UI. All examples use numbers from the Finance PDFs or are calculated from them.
(function () {
  const sub = window.SUBJECTS && window.SUBJECTS.finance;
  if (!sub) return;
  const unit = sub.units.find((u) => u.id === 'formulas');
  if (!unit) return;

  const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
  const num = (n, d) => Number(n).toLocaleString('en-IN', { maximumFractionDigits: d == null ? 2 : d });

  // ---- live calculators (key -> {fields, run}) ----
  const CALC = {
    fv: { fields: [['pv', 'Present value (PV) ₹', 10000], ['i', 'Rate per year (%)', 10], ['n', 'Years (n)', 3]], run: (v) => 'FV = ' + inr(v.pv * Math.pow(1 + v.i / 100, v.n)) },
    pv: { fields: [['fv', 'Future value (FV) ₹', 13310], ['i', 'Discount rate (%)', 10], ['n', 'Years (n)', 3]], run: (v) => 'PV = ' + inr(v.fv / Math.pow(1 + v.i / 100, v.n)) },
    fva: { fields: [['a', 'Instalment A ₹', 5000], ['i', 'Rate (%)', 8], ['n', 'Years', 4]], run: (v) => 'FVA = ' + inr(v.a * ((Math.pow(1 + v.i / 100, v.n) - 1) / (v.i / 100))) },
    pva: { fields: [['a', 'Instalment A ₹', 1000], ['i', 'Rate (%)', 10], ['n', 'Years', 3]], run: (v) => 'PVA = ₹' + num(v.a * ((1 - Math.pow(1 + v.i / 100, -v.n)) / (v.i / 100))) },
    emi: { fields: [['l', 'Loan amount ₹', 100000], ['i', 'Rate per year (%)', 10], ['n', 'Years', 5]], run: (v) => 'Instalment = ' + inr(v.l / ((1 - Math.pow(1 + v.i / 100, -v.n)) / (v.i / 100))) + ' per year' },
    bond: { fields: [['f', 'Face value F ₹', 1000], ['c', 'Coupon rate (%)', 10], ['k', 'Required return kd (%)', 12], ['n', 'Years', 3]], run: (v) => { const I = v.f * v.c / 100; const r = v.k / 100; const val = I * ((1 - Math.pow(1 + r, -v.n)) / r) + v.f / Math.pow(1 + r, v.n); return 'Bond value = ₹' + num(val) + (val > v.f + 0.5 ? ' (premium)' : val < v.f - 0.5 ? ' (discount)' : ' (par)'); } },
    gordon: { fields: [['d0', 'Dividend just paid D0 ₹', 4], ['g', 'Growth g (%)', 5], ['ke', 'Required return ke (%)', 15]], run: (v) => (v.ke <= v.g ? 'Invalid: ke must be greater than g' : 'P0 = ₹' + num(v.d0 * (1 + v.g / 100) / ((v.ke - v.g) / 100))) },
    capm: { fields: [['rf', 'Risk-free rate Rf (%)', 7], ['rm', 'Market return Rm (%)', 13], ['b', 'Beta', 1.5]], run: (v) => 'Ke = ' + num(v.rf + v.b * (v.rm - v.rf)) + '%' },
    lev: { fields: [['s', 'Sales ₹', 1000000], ['vc', 'Variable cost ₹', 600000], ['fc', 'Fixed cost ₹', 200000], ['i', 'Interest ₹', 50000]], run: (v) => { const c = v.s - v.vc; const e = c - v.fc; if (e <= 0 || e - v.i <= 0) return 'EBIT or EBT is zero/negative - leverage not meaningful'; const dol = c / e; const dfl = e / (e - v.i); return 'Contribution ' + inr(c) + ' · EBIT ' + inr(e) + ' → DOL ' + num(dol) + ' × DFL ' + num(dfl) + ' = DCL ' + num(dol * dfl); } },
    wacc: { fields: [['w1', 'Equity amount ₹', 500000], ['k1', 'Equity cost (%)', 16], ['w2', 'Preference amount ₹', 200000], ['k2', 'Preference cost (%)', 12], ['w3', 'Debt amount ₹', 300000], ['k3', 'After-tax debt cost (%)', 7]], run: (v) => { const t = v.w1 + v.w2 + v.w3; return t ? 'WACC = ' + num((v.w1 * v.k1 + v.w2 * v.k2 + v.w3 * v.k3) / t) + '%' : 'Enter amounts'; } },
    eps: { fields: [['e', 'EBIT ₹', 300000], ['i', 'Interest ₹', 50000], ['t', 'Tax rate (%)', 30], ['n', 'Equity shares', 10000]], run: (v) => 'EPS = ₹' + num((v.e - v.i) * (1 - v.t / 100) / v.n) },
  };

  // ---- formula cards ----
  // g: group · u: unit page to read · f: formula (html) · sym: symbols · ex: [title, steps...] · when, where, mistake, calc
  const CARDS = [
    // ===== TVM =====
    { g: 'Time Value of Money', u: 'u2', n: 'Future Value (compounding)', f: 'FV = PV × (1 + i)<sup>n</sup>', sym: ['FV = future / terminal value', 'PV = amount today', 'i = interest rate per period', 'n = number of periods'],
      what: 'Shows how much a sum invested today grows to when interest is earned on interest as well. (1+i)<sup>n</sup> is the compound value factor (CVF).',
      ex: ['₹10,000 invested for 3 years at 10% p.a.', 'FV = 10,000 × (1.10)<sup>3</sup>', '= 10,000 × 1.331 = <b>₹13,310</b>'],
      when: ['You know the amount today and want its value at a future date', 'Interest is compounded (not simple)'],
      where: ['Fixed deposits, savings growth, retirement planning', 'Exam: "terminal value of a deposit" (Assignment 1, Q4: ₹50,000 at 8% for 4 years = ₹68,024)'],
      mistake: 'Using an annual rate with half-yearly or monthly periods. Match i and n to the same period.', calc: 'fv' },
    { g: 'Time Value of Money', u: 'u2', n: 'Compounding more than once a year', f: 'FV = PV × (1 + i/m)<sup>n×m</sup>', sym: ['m = times compounded per year (2 half-yearly, 4 quarterly, 12 monthly)', 'i = annual rate', 'n = years'],
      what: 'Same as the FV formula, but the year is cut into m parts. More frequent compounding gives a slightly higher value.',
      ex: ['₹10,000 at 12% p.a., compounded quarterly for 2 years', 'm = 4 → rate per quarter = 3%, periods = 8', 'FV = 10,000 × (1.03)<sup>8</sup> = <b>≈ ₹12,668</b>'],
      when: ['The question says half-yearly / quarterly / monthly compounding'], where: ['Bank FDs and recurring deposits with quarterly compounding'],
      mistake: 'Forgetting to multiply n by m and divide i by m.' },
    { g: 'Time Value of Money', u: 'u2', n: 'Present Value (discounting)', f: 'PV = FV ÷ (1 + i)<sup>n</sup>', sym: ['PV = value today', 'FV = amount receivable in future', 'i = discount rate', '1/(1+i)<sup>n</sup> = present value factor (PVF)'],
      what: 'The reverse of compounding: what a future amount is worth today. Higher discount rate or longer time = lower present value (inverse relationship).',
      ex: ['₹13,310 receivable after 3 years, discount rate 10%', 'PV = 13,310 ÷ 1.331 = <b>₹10,000</b>', 'Test paper: PV of ₹50,000 after 3 yrs at 10% (PVF 0.751) = <b>₹37,550</b>'],
      when: ['You know a future amount and need today\'s equivalent', 'Comparing cash flows that occur at different times'],
      where: ['Valuing bonds, shares and projects (NPV)', 'Deciding between "₹X now" and "₹Y later"'],
      mistake: 'Treating it like a simple reduction. It is divided by a compounded factor.', calc: 'pv' },
    { g: 'Time Value of Money', u: 'u2', n: 'Future Value of an Annuity', f: 'FVA = A × [ ((1+i)<sup>n</sup> − 1) ÷ i ]', sym: ['A = equal instalment each period (end of period)', 'bracket = FVIFA'],
      what: 'Total value at the end of the period when the same amount is deposited every period and each deposit earns interest.',
      ex: ['₹5,000 deposited at the end of each year for 4 years at 8%', 'FVIFA = 4.5061', 'FVA = 5,000 × 4.5061 = <b>≈ ₹22,530</b>'],
      when: ['Equal payments are being saved / invested at regular intervals and you want the final sum'], where: ['Recurring deposits, SIP-style saving, sinking funds'],
      mistake: 'Using it for unequal payments. Then compound each payment separately.', calc: 'fva' },
    { g: 'Time Value of Money', u: 'u2', n: 'Present Value of an Annuity', f: 'PVA = A × [ (1 − (1+i)<sup>−n</sup>) ÷ i ]', sym: ['A = equal instalment', 'bracket = PVIFA (present value interest factor of annuity)'],
      what: 'Today\'s worth of a series of equal future payments or receipts.',
      ex: ['₹1,000 a year for 3 years at 10%', 'PVIFA(10%,3) = 2.4869', 'PVA = 1,000 × 2.4869 = <b>≈ ₹2,487</b>'],
      when: ['Equal inflows (like ₹40,000 for 4 years) and you need their present value', 'Computing NPV of a project with equal inflows'],
      where: ['NPV with even cash flows', 'How much loan a given EMI can support'],
      mistake: 'Confusing with FVA. PVA brings payments back to today; FVA carries them forward.', calc: 'pva' },
    { g: 'Time Value of Money', u: 'u2', n: 'Perpetuity', f: 'PV = A ÷ i', sym: ['A = constant payment every period, forever', 'i = discount rate'],
      what: 'Value today of an annuity that never ends.',
      ex: ['₹500 a year for ever at 10%', 'PV = 500 ÷ 0.10 = <b>₹5,000</b>'],
      when: ['The payment has no end date'], where: ['Irredeemable (perpetual) bonds, preference shares with fixed dividend, scholarships / endowments'],
      mistake: 'Using the formula when the payment grows. Growing perpetuity = D<sub>1</sub>/(ke − g).' },
    { g: 'Time Value of Money', u: 'u2', n: 'Annuity Due', f: 'Value (due) = Value (ordinary) × (1 + i)', sym: ['Payments fall at the START of each period'],
      what: 'Each payment earns one extra period of interest compared with an ordinary annuity.',
      ex: ['Ordinary FVA = ₹22,530 at 8%', 'Annuity due = 22,530 × 1.08 = <b>≈ ₹24,332</b>'],
      when: ['Payments are made in advance (rent, insurance premiums, beginning-of-month SIP)'], where: ['Lease rentals, advance premiums'], mistake: 'Applying the (1+i) multiplier to an ordinary annuity.' },
    { g: 'Time Value of Money', u: 'u2', n: 'Loan instalment (amortisation)', f: 'A = Loan ÷ PVIFA(i, n)', sym: ['Loan = present value of all instalments', 'A = equal instalment (principal + interest)'],
      what: 'Finds the equal payment that clears a loan with interest over n periods.',
      ex: ['Loan ₹1,00,000, 10% p.a., 5 equal yearly instalments', 'PVIFA(10%,5) = 3.7908', 'A = 1,00,000 ÷ 3.7908 = <b>≈ ₹26,380</b>', 'Year 1: interest = 1,00,000 × 10% = 10,000; principal = 26,380 − 10,000 = 16,380; closing balance = 83,620'],
      when: ['Equal repayment of a loan is asked', 'Schedule needs interest and principal split'], where: ['Home / car / education loan EMIs'],
      mistake: 'Charging interest on the original loan every year. Interest is on the opening balance.', calc: 'emi' },
    // ===== Bonds & stocks =====
    { g: 'Bonds & Stocks', u: 'u3', n: 'Value of a Bond (annual interest)', f: 'V = I × PVIFA(kd, n) + F × PVIF(kd, n)', sym: ['I = coupon rate × face value', 'F = face / redemption value', 'kd = required return (yield)', 'n = years to maturity'],
      what: 'A bond is worth the present value of its interest payments plus the present value of the amount repaid on maturity.',
      ex: ['Face ₹1,000, coupon 10%, 3 years, required return 12%', 'I = 100; PVIFA(12%,3) = 2.402; PVIF(12%,3) = 0.7118', 'V = 100 × 2.402 + 1,000 × 0.7118 = 240.2 + 711.8 = <b>≈ ₹952</b>', 'Assignment 1: face 1,000, coupon 9%, 3 yrs, 10% → <b>₹975</b>'],
      when: ['Fixed coupon and a maturity date', 'You want to know a fair price or compare price with value'], where: ['Debentures, government bonds, bond investing decisions'],
      mistake: 'Discounting at the coupon rate. Always discount at the required return (yield).', calc: 'bond' },
    { g: 'Bonds & Stocks', u: 'u3', n: 'Bond with semi-annual interest', f: 'V = (I/2) × PVIFA(kd/2, 2n) + F × PVIF(kd/2, 2n)', sym: ['Halve the interest and the yield; double the periods'],
      what: 'Used when the bond pays interest twice a year.',
      ex: ['Face ₹1,000, 10% coupon paid half-yearly, 2 years, yield 10%', 'Half-year interest = 50; rate 5%; periods 4', 'V = 50 × 3.5460 + 1,000 × 0.8227 = <b>≈ ₹1,000</b> (coupon = yield → par)'],
      when: ['Question says "interest payable half-yearly"'], where: ['Bonds that pay semi-annual coupons'], mistake: 'Halving the interest but not the yield, or not doubling n.' },
    { g: 'Bonds & Stocks', u: 'u3', n: 'Perpetual (irredeemable) bond', f: 'V = I ÷ kd', sym: ['I = annual interest', 'kd = required return'],
      what: 'A bond with no maturity is just a perpetuity.',
      ex: ['Annual interest ₹100, required return 8%', 'V = 100 ÷ 0.08 = <b>₹1,250</b>'], when: ['Bond never matures'], where: ['Consols, perpetual debentures'], mistake: 'Adding a maturity value; there is none.' },
    { g: 'Bonds & Stocks', u: 'u3', n: 'Zero-coupon bond', f: 'V = F ÷ (1 + kd)<sup>n</sup>', sym: ['No periodic interest; only face value at maturity'],
      what: 'Issued at a discount and repaid at face value; return is the discount.',
      ex: ['Face ₹1,000, 2 years, yield 10%', 'V = 1,000 ÷ 1.21 = <b>₹826.45</b>'], when: ['Deep discount bonds, no coupon'], where: ['Treasury bills, deep-discount bonds'], mistake: 'Looking for interest payments.' },
    { g: 'Bonds & Stocks', u: 'u3', n: 'Coupon vs yield rule', f: 'Coupon = Yield → Par · Coupon &gt; Yield → Premium · Coupon &lt; Yield → Discount', sym: ['Bond price and market yield move in opposite directions'],
      what: 'A quick way to know whether a bond is above or below face value before calculating.',
      ex: ['Coupon 9%, required return 10% → coupon &lt; yield → price below ₹1,000 (we got ₹975)'], when: ['MCQs and conceptual checks'], where: ['Spotting calculation errors'], mistake: 'Reversing premium and discount.' },
    { g: 'Bonds & Stocks', u: 'u3', n: 'Share value - single holding period', f: 'P<sub>0</sub> = D<sub>1</sub>/(1+ke) + P<sub>1</sub>/(1+ke)', sym: ['D<sub>1</sub> = dividend at end of year 1', 'P<sub>1</sub> = expected selling price at end of year 1', 'ke = required return'],
      what: 'Value today of one dividend plus the expected sale price.',
      ex: ['D<sub>1</sub> = ₹5, P<sub>1</sub> = ₹110, ke = 15%', 'P<sub>0</sub> = (5 + 110) ÷ 1.15 = <b>₹100</b>'], when: ['You plan to sell after one year'], where: ['Short-term investor decisions'], mistake: 'Discounting only the price and forgetting the dividend.' },
    { g: 'Bonds & Stocks', u: 'u3', n: 'Constant dividend (no growth)', f: 'P<sub>0</sub> = D ÷ ke', sym: ['D = fixed dividend forever'],
      what: 'Dividend perpetuity.', ex: ['D = ₹6, ke = 12%', 'P<sub>0</sub> = 6 ÷ 0.12 = <b>₹50</b>'], when: ['Dividends stay the same for ever'], where: ['Preference shares, mature firms'], mistake: 'Using it when dividends grow.' },
    { g: 'Bonds & Stocks', u: 'u3', n: 'Rate of return from a share', f: 'ke = [ D<sub>1</sub> + (P<sub>1</sub> − P<sub>0</sub>) ] ÷ P<sub>0</sub>', sym: ['Dividend yield + capital gains yield'],
      what: 'Total return = dividend received + price gain, as a % of purchase price.', ex: ['Bought ₹100, dividend ₹8, sold ₹112', '[8 + (112 − 100)] ÷ 100 = <b>20%</b>'], when: ['Actual buy price, dividend and sale price are given'], where: ['Portfolio performance'], mistake: 'Ignoring the capital gain.' },
    { g: 'Bonds & Stocks', u: 'u3', n: 'Gordon growth model', f: 'P<sub>0</sub> = D<sub>1</sub> ÷ (ke − g), where D<sub>1</sub> = D<sub>0</sub>(1 + g)', sym: ['D<sub>0</sub> = dividend just paid', 'g = constant growth rate', 'Needs ke &gt; g'],
      what: 'Values a share whose dividends grow at a constant rate for ever. Most frequently tested.', ex: ['D<sub>0</sub> = ₹4, g = 5%, ke = 15%', 'D<sub>1</sub> = 4 × 1.05 = 4.20', 'P<sub>0</sub> = 4.20 ÷ (0.15 − 0.05) = <b>₹42</b>'],
      when: ['Dividends grow at a steady rate', 'Question gives "just paid" dividend D<sub>0</sub>'], where: ['Valuing stable growing companies'], mistake: 'Using D<sub>0</sub> instead of D<sub>1</sub> in the numerator.', calc: 'gordon' },
    { g: 'Bonds & Stocks', u: 'u3', n: 'Cost of equity from Gordon model', f: 'ke = D<sub>1</sub> ÷ P<sub>0</sub> + g', sym: ['Dividend yield plus growth'],
      what: 'The return investors expect, implied by the price.', ex: ['P<sub>0</sub> = ₹80, D<sub>0</sub> = ₹4, g = 6%', 'D<sub>1</sub> = 4.24; 4.24 ÷ 80 = 5.3%', 'ke = 5.3% + 6% = <b>11.3%</b>'], when: ['Price, dividend and growth given; asked for expected return'], where: ['Estimating cost of equity'], mistake: 'Using D<sub>0</sub> directly.' },
    // ===== Capital budgeting =====
    { g: 'Capital Budgeting', u: 'u4', n: 'Payback period (equal inflows)', f: 'Payback = Initial investment ÷ Annual cash inflow', sym: ['Accept if less than the standard payback period'],
      what: 'Time needed to recover the money invested.', ex: ['Investment ₹6,00,000; inflow ₹1,50,000 a year', 'Payback = 6,00,000 ÷ 1,50,000 = <b>4 years</b> (standard 4 yrs → at the limit)'], when: ['Equal yearly inflows; liquidity matters'], where: ['Quick screening of risky projects'], mistake: 'Forgetting it ignores time value and later cash flows.' },
    { g: 'Capital Budgeting', u: 'u4', n: 'Payback period (unequal inflows)', f: 'Payback = E + (B ÷ C)', sym: ['E = full years before recovery', 'B = balance still to recover', 'C = inflow in the recovery year'],
      what: 'Add up cumulative inflows year by year until the investment is recovered.', ex: ['Investment ₹1,00,000; inflows 30,000 / 40,000 / 40,000 …', 'After 2 yrs: 70,000 → balance 30,000; year 3 inflow 40,000', 'Payback = 2 + 30,000/40,000 = <b>2.75 years</b>'], when: ['Inflows differ every year'], where: ['Same as above'], mistake: 'Dividing total investment by the average inflow.' },
    { g: 'Capital Budgeting', u: 'u4', n: 'Accounting Rate of Return (ARR)', f: 'ARR = (Average annual PAT ÷ Average investment) × 100', sym: ['Average investment = (Initial − Salvage)/2 + Salvage', 'If no salvage: Initial/2'],
      what: 'Average accounting profit as a percentage of the average money tied up.', ex: ['Machine ₹1,20,000, scrap ₹20,000; PAT 20k, 25k, 30k, 25k', 'Average PAT = 25,000', 'Average investment = (1,20,000 − 20,000)/2 + 20,000 = 70,000', 'ARR = 25,000 ÷ 70,000 × 100 = <b>35.71%</b>'], when: ['Profit (PAT) data is given instead of cash flows'], where: ['Simple project ranking'], mistake: 'Using the full initial investment as average investment.' },
    { g: 'Capital Budgeting', u: 'u4', n: 'Net Present Value (NPV)', f: 'NPV = Σ [ CF<sub>t</sub> ÷ (1+k)<sup>t</sup> ] − Initial investment', sym: ['k = cost of capital', 'Accept if NPV &gt; 0'],
      what: 'Value added to shareholders: present value of inflows minus the cost.', ex: ['Project X: cost ₹2,00,000, k = 10%, inflows 80k, 90k, 70k, 60k', 'PV = 72,720 + 74,340 + 52,570 + 40,980 = 2,40,610', 'NPV = 2,40,610 − 2,00,000 = <b>+₹40,610 → accept</b>', 'Assignment 2 (12%): NPV ≈ −₹9,515 → <b>reject</b>'], when: ['Choosing among long-term projects; preferred when NPV and IRR conflict'], where: ['Capital budgeting, expansion and purchase decisions'], mistake: 'Subtracting the investment before discounting, or using the wrong rate.' },
    { g: 'Capital Budgeting', u: 'u4', n: 'Profitability Index (PI)', f: 'PI = PV of cash inflows ÷ Initial investment', sym: ['Accept if PI &gt; 1'],
      what: 'Present value earned per rupee invested. [extra: asked in the test paper but not defined in the notes]', ex: ['PV of inflows 2,40,610; investment 2,00,000', 'PI = <b>1.20</b> → accept'], when: ['Ranking projects with limited funds'], where: ['Capital rationing'], mistake: 'Confusing it with NPV (PI is a ratio).' },
    { g: 'Capital Budgeting', u: 'u4', n: 'Internal Rate of Return (IRR) by interpolation', f: 'IRR = LR + [ NPV<sub>LR</sub> ÷ (NPV<sub>LR</sub> − NPV<sub>HR</sub>) ] × (HR − LR)', sym: ['LR = lower rate (NPV positive)', 'HR = higher rate (NPV negative)', 'Accept if IRR &gt; cost of capital'],
      what: 'The discount rate that makes NPV zero, found by trial and error between two rates.', ex: ['Assignment 2: NPV at 10% = +33,240; at 12% = −9,515', 'IRR = 10 + [33,240 ÷ (33,240 + 9,515)] × 2 = <b>≈ 11.55%</b>', 'IRR 11.55% &lt; 12% → reject'], when: ['Asked for the project\'s return in %'], where: ['Comparing with the cost of capital'], mistake: 'Choosing two rates whose NPVs have the same sign.' },
    // ===== Leverage =====
    { g: 'Leverage & Financing', u: 'u5', n: 'Contribution and EBIT', f: 'Contribution = Sales − Variable cost; EBIT = Contribution − Fixed cost', sym: ['EBIT = earnings before interest and tax'],
      what: 'Building blocks for every leverage question.', ex: ['Sales 10,00,000; VC 6,00,000; FC 2,00,000', 'Contribution = 4,00,000; EBIT = <b>2,00,000</b>'], when: ['Start of any leverage numerical'], where: ['Cost-volume-profit work'], mistake: 'Subtracting fixed cost from sales directly.' },
    { g: 'Leverage & Financing', u: 'u5', n: 'Degree of Operating Leverage (DOL)', f: 'DOL = Contribution ÷ EBIT = % change in EBIT ÷ % change in Sales', sym: ['Higher DOL = higher business risk'],
      what: 'How much EBIT moves for a 1% change in sales (caused by fixed operating costs).', ex: ['Contribution 4,00,000; EBIT 2,00,000 → DOL = <b>2</b>', 'Sales +10% → EBIT +20%'], when: ['Sales change effect on operating profit'], where: ['Measuring business risk'], mistake: 'Using EBT instead of EBIT.', calc: 'lev' },
    { g: 'Leverage & Financing', u: 'u5', n: 'Degree of Financial Leverage (DFL)', f: 'DFL = EBIT ÷ (EBIT − Interest) = % change in EPS ÷ % change in EBIT', sym: ['With preference dividend: EBIT ÷ [EBIT − I − PD/(1−t)]'],
      what: 'How much EPS moves for a 1% change in EBIT (caused by interest and fixed financial charges).', ex: ['EBIT 2,00,000; interest 50,000', 'DFL = 2,00,000 ÷ 1,50,000 = <b>1.33</b>'], when: ['Debt / preference capital present'], where: ['Measuring financial risk, trading on equity'], mistake: 'Ignoring preference dividend (grossed up for tax).' },
    { g: 'Leverage & Financing', u: 'u5', n: 'Degree of Combined Leverage (DCL)', f: 'DCL = DOL × DFL = Contribution ÷ (EBIT − Interest)', sym: ['Total risk: operating + financial'],
      what: 'How much EPS moves for a 1% change in sales.', ex: ['DOL 2 × DFL 1.33 = <b>2.67</b>', 'Check: 4,00,000 ÷ 1,50,000 = 2.67'], when: ['Sales change effect on EPS'], where: ['Overall risk assessment'], mistake: 'Adding DOL and DFL instead of multiplying.' },
    { g: 'Leverage & Financing', u: 'u5', n: 'Earnings per share (EPS)', f: 'EPS = (EBIT − I)(1 − t) ÷ N', sym: ['With preference dividend: [(EBIT − I)(1 − t) − PD] ÷ N', 't = tax rate; N = equity shares'],
      what: 'Profit per equity share after interest, tax (and preference dividend).', ex: ['EBIT 3,00,000; I 50,000; t 30%; N 10,000', 'EPS = 2,50,000 × 0.70 ÷ 10,000 = <b>₹17.50</b>'], when: ['Comparing financing plans'], where: ['EBIT-EPS analysis'], mistake: 'Taxing before deducting interest.', calc: 'eps' },
    { g: 'Leverage & Financing', u: 'u5', n: 'Indifference point (EBIT-EPS)', f: '(EBIT − I<sub>1</sub>)(1 − t) ÷ N<sub>1</sub> = (EBIT − I<sub>2</sub>)(1 − t) ÷ N<sub>2</sub>', sym: ['Plan 1 and Plan 2 financing mixes'],
      what: 'The EBIT at which both financing plans give the same EPS. Above it the higher-debt plan wins; below it the equity plan wins.', ex: ['Plan A: all equity, N = 10,000, I = 0. Plan B: N = 5,000, I = 1,00,000', 'EBIT/10,000 = (EBIT − 1,00,000)/5,000 → EBIT = 2(EBIT − 1,00,000)', 'Indifference EBIT = <b>₹2,00,000</b> (EPS = ₹14 at 30% tax in both)'], when: ['Choosing between debt-equity mixes'], where: ['Capital structure decision'], mistake: 'Forgetting tax cancels out when both plans are taxed equally.' },
    { g: 'Leverage & Financing', u: 'u5', n: 'Interest coverage ratio', f: 'ICR = EBIT ÷ Interest', sym: ['Higher = safer'],
      what: 'How many times interest is covered by operating profit.', ex: ['EBIT 6,00,000; interest 1,00,000 → <b>6 times</b>'], when: ['Assessing short-term debt safety'], where: ['Lenders and analysts'], mistake: 'Using PAT instead of EBIT.' },
    { g: 'Leverage & Financing', u: 'u5', n: 'Debt Service Coverage Ratio (DSCR)', f: 'DSCR = (PAT + Interest + Depreciation) ÷ (Interest + Principal instalment)', sym: ['Numerator = cash available; denominator = debt obligation'],
      what: 'Cash-based ability to meet interest and principal.', ex: ['PAT 2,00,000; interest 50,000; depreciation 30,000; principal 1,20,000', 'DSCR = 2,80,000 ÷ 1,70,000 = <b>≈ 1.65</b>'], when: ['Long-term loan assessment'], where: ['Bank loan sanction'], mistake: 'Leaving depreciation (a non-cash charge) out.' },
    { g: 'Leverage & Financing', u: 'u5', n: 'Financial break-even point', f: 'Financial BEP = I + PD ÷ (1 − t)', sym: ['EBIT needed to just cover fixed financial charges'],
      what: 'Minimum EBIT at which EPS is zero.', ex: ['I 50,000; PD 21,000; t 30%', 'BEP = 50,000 + 21,000 ÷ 0.7 = <b>₹80,000</b>'], when: ['Checking downside risk of a financing plan'], where: ['EBIT-EPS analysis'], mistake: 'Not grossing up preference dividend for tax.' },
    // ===== Cost of capital =====
    { g: 'Cost of Capital', u: 'coc', n: 'Cost of debt', f: 'Kd = I(1 − t) ÷ NP', sym: ['I = annual interest', 'NP = net proceeds', 't = tax rate'],
      what: 'After-tax cost of borrowing; interest saves tax, so the effective cost is lower.', ex: ['10% debentures, face ₹100 issued at par, t = 30%', 'Kd = 10 × 0.70 ÷ 100 = <b>7%</b>', 'Redeemable: Kd = [I(1−t) + (RV−NP)/n] ÷ [(RV+NP)/2] → I=10, RV=100, NP=95, n=5, t=30% → 8 ÷ 97.5 = <b>8.2%</b>'], when: ['Debentures, loans in WACC'], where: ['WACC, capital structure'], mistake: 'Not applying (1 − t).' },
    { g: 'Cost of Capital', u: 'coc', n: 'Cost of preference capital', f: 'Kp = PD ÷ NP', sym: ['PD = preference dividend', 'Redeemable: [PD + (RV−NP)/n] ÷ [(RV+NP)/2]'],
      what: 'Preference dividend is not tax-deductible, so no tax adjustment.', ex: ['12% preference shares, face 100, issued at par → Kp = 12 ÷ 100 = <b>12%</b>'], when: ['Preference shares in WACC'], where: ['WACC'], mistake: 'Applying (1 − t).' },
    { g: 'Cost of Capital', u: 'coc', n: 'Cost of equity - dividend price and growth', f: 'Ke = D<sub>1</sub> ÷ NP + g, with g = b × r', sym: ['b = retention ratio', 'r = return on retained earnings'],
      what: 'Dividend yield plus expected growth.', ex: ['D<sub>1</sub> = ₹5, NP = ₹50 → dividend price Ke = <b>10%</b>', 'With b = 0.4, r = 15% → g = 6% → Ke = 10% + 6% = <b>16%</b>', 'Earnings price: E = 8, NP = 64 → Ke = 8 ÷ 64 = <b>12.5%</b>'], when: ['Dividend / growth / earnings data given'], where: ['WACC'], mistake: 'Mixing D<sub>0</sub> and D<sub>1</sub>.' },
    { g: 'Cost of Capital', u: 'coc', n: 'Cost of equity - CAPM', f: 'Ke = Rf + β × (Rm − Rf)', sym: ['Rf = risk-free rate', 'Rm = market return', 'β = beta (systematic risk)'],
      what: 'Required return = risk-free rate + risk premium scaled by beta.', ex: ['Rf = 7%, Rm = 13%, β = 1.5', 'Ke = 7 + 1.5 × (13 − 7) = <b>16%</b>'], when: ['Beta and market data are given'], where: ['Test paper Q7 (Shree Ltd.)'], mistake: 'Using Rm instead of (Rm − Rf).', calc: 'capm' },
    { g: 'Cost of Capital', u: 'coc', n: 'Cost of retained earnings', f: 'Kr = Ke × (1 − t<sub>p</sub>) × (1 − b)', sym: ['t<sub>p</sub> = shareholder\'s personal tax rate', 'Your formula sheet defines b as retention ratio; many textbooks use b as brokerage cost - follow your prescribed textbook'],
      what: 'Retained profits are not free: shareholders could have earned Ke elsewhere, adjusted for tax and costs.', ex: ['Ke = 16%, t<sub>p</sub> = 20%, brokerage b = 2%', 'Kr = 16 × 0.80 × 0.98 = <b>≈ 12.5%</b> [extra: textbook version]'], when: ['Cost of retained earnings is asked'], where: ['WACC with internal funds'], mistake: 'Assuming retained earnings cost nothing.' },
    { g: 'Cost of Capital', u: 'coc', n: 'Weighted Average Cost of Capital (WACC)', f: 'WACC = Σ (W<sub>i</sub> × K<sub>i</sub>)', sym: ['W<sub>i</sub> = weight of each source', 'K<sub>i</sub> = cost of that source', 'Use market value weights unless book value is stated'],
      what: 'The overall average cost of all long-term funds; used as the discount rate for projects.', ex: ['Equity 5L at 16%; 12% preference 2L; 10% debentures 3L (7% after tax)', 'Weights 0.5 / 0.2 / 0.3', 'WACC = 8 + 2.4 + 2.1 = <b>12.5%</b>'], when: ['Several sources of finance'], where: ['Discount rate in NPV; target capital structure'], mistake: 'Using before-tax cost of debt.', calc: 'wacc' },
    { g: 'Cost of Capital', u: 'coc', n: 'Marginal Cost of Capital (MCC)', f: 'MCC = cost of the next (additional) rupee of capital raised', sym: ['Rises as more capital is raised'],
      what: 'Decision rule: accept a project if its return is above the MCC.', ex: ['Firm raises another ₹2,00,000 at a blended cost of 14% → MCC = <b>14%</b>'], when: ['Expansion funding decisions'], where: ['Optimal capital budget'], mistake: 'Confusing with average cost.' },
  ];

  const esc = (s) => s;
  const groups = [...new Set(CARDS.map((c) => c.g))];
  const GICON = { 'Time Value of Money': '⏳', 'Bonds & Stocks': '📈', 'Capital Budgeting': '🏗️', 'Leverage & Financing': '⚖️', 'Cost of Capital': '💸' };

  const card = (c, i) => `
    <article class="fcard" data-g="${c.g}" data-s="${(c.n + ' ' + c.g).toLowerCase()}" id="f${i}">
      <header><span class="fno">${i + 1}</span><div><h3>${c.n}</h3><span class="fgrp">${GICON[c.g] || ''} ${c.g}</span></div>
        <a class="fread" href="#/${c.s || 'finance'}/${c.u}">📖 Read notes</a></header>
      <div class="fformula">${c.f}</div>
      ${c.sym && c.sym.length ? `<ul class="fsym">${c.sym.map((s) => `<li>${s}</li>`).join('')}</ul>` : ''}
      <p class="fwhat">${c.what}</p>
      <div class="fex"><b>🧮 Example</b>${c.ex.map((l, k) => `<div class="step"><i>${k + 1}</i><span>${l}</span></div>`).join('')}</div>
      <div class="fcols">
        <div class="fwhen"><b>⏰ When to use</b><ul>${c.when.map((x) => `<li>${x}</li>`).join('')}</ul></div>
        <div class="fwhere"><b>📍 Where to use</b><ul>${c.where.map((x) => `<li>${x}</li>`).join('')}</ul></div>
      </div>
      <div class="fwarn"><b>⚠️ Common mistake</b> ${c.mistake}</div>
      ${c.calc ? `<div class="fcalc" data-calc="${c.calc}"><b>🎛️ Try it yourself</b><div class="cin">${CALC[c.calc].fields.map(([k, l, d]) => `<label>${l}<input type="number" step="any" data-k="${k}" value="${d}"></label>`).join('')}</div><div class="cout"></div></div>` : ''}
    </article>`;

  unit.html = `
    <div class="box"><b>How to use this page:</b> every formula has its <b>symbols</b>, a <b>worked example</b> (numbers from your PDFs), <b>when</b> and <b>where</b> to use it, and a <b>common mistake</b>. Use the chips to filter by topic or type to search. Cards marked with 🎛️ have a live calculator. Then test yourself with the <a href="#/finance/quiz/Which%20formula%3F"><b>🎯 Formula Finder quiz</b></a> - a situation is given and you pick the right formula.</div>
    <div class="ftools">
      <input id="fsearch" type="search" placeholder="Search a formula (e.g. NPV, EPS, annuity)…" aria-label="Search formulas">
      <div class="fchips" id="fchips"><button class="on" data-g="">All (${CARDS.length})</button>${groups.map((g) => `<button data-g="${g}">${GICON[g] || ''} ${g} (${CARDS.filter((c) => c.g === g).length})</button>`).join('')}</div>
    </div>
    <div class="fgrid" id="fgrid">${CARDS.map(card).join('')}</div>
    <p class="expl" id="fnone" hidden>No formula matches your search.</p>
    <div class="box"><b>Exam decision cheat-sheet:</b> Payback &lt; standard · ARR &gt; cut-off · NPV &gt; 0 · IRR &gt; cost of capital · PI &gt; 1 · coupon &gt; yield → premium · above indifference EBIT → more debt · pecking order: internal funds → debt → hybrid → new equity.</div>`;

  unit.after = function () {
    const grid = document.getElementById('fgrid');
    if (!grid) return;
    let g = '';
    let q = '';
    const apply = () => {
      let n = 0;
      grid.querySelectorAll('.fcard').forEach((el) => {
        const show = (!g || el.dataset.g === g) && (!q || el.dataset.s.includes(q));
        el.hidden = !show;
        if (show) n++;
      });
      document.getElementById('fnone').hidden = n > 0;
    };
    document.getElementById('fchips').onclick = (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      g = b.dataset.g;
      document.querySelectorAll('#fchips button').forEach((x) => x.classList.toggle('on', x === b));
      apply();
    };
    document.getElementById('fsearch').oninput = (e) => { q = e.target.value.trim().toLowerCase(); apply(); };
    grid.querySelectorAll('.fcalc').forEach((box) => {
      const run = () => {
        const v = {};
        box.querySelectorAll('input').forEach((i) => { v[i.dataset.k] = parseFloat(i.value) || 0; });
        box.querySelector('.cout').textContent = CALC[box.dataset.calc].run(v);
      };
      box.addEventListener('input', run);
      run();
    });
  };

  // ---- shared library for the formula pop-up (any .formula on any page) ----
  function bindCalc(root) {
    root.querySelectorAll('.fcalc').forEach((box) => {
      const run = () => {
        const v = {};
        box.querySelectorAll('input').forEach((i) => { v[i.dataset.k] = parseFloat(i.value) || 0; });
        box.querySelector('.cout').textContent = CALC[box.dataset.calc].run(v);
      };
      box.addEventListener('input', run);
      run();
    });
  }
  window.FormulaLib = { cards: CARDS, CALC, cardHtml: card, bindCalc };
})();
