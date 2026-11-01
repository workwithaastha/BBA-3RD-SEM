// Topic x marks coverage matrix for the written Q&A bank. Usage: node tools/topicmatrix.js
const fs = require('fs'), path = require('path');
global.window = {};
const dir = path.join(__dirname, '..', 'site');
const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
for (const m of html.matchAll(/<script src="((?:data|js)\/[^"]+)"/g)) { if (['js/app.js', 'js/welcome.js', 'js/rewards.js'].includes(m[1])) continue; require(path.join(dir, m[1])); }
const T = {
  finance: {
    'Finance function (meaning, decisions)': /finance function|financial management|decision/i,
    'Objectives (profit vs wealth)': /profit maxim|wealth max|objective/i,
    'Owners vs borrowed funds': /owners|borrowed/i,
    'Time value / compounding': /time value|compound|terminal|future value/i,
    'Present value & discount rate': /present value|discount rate|discounting/i,
    'Annuity / perpetuity / annuity due': /annuity|perpetuity/i,
    'Loan amortisation': /amortis|instalment|loan/i,
    'Bond valuation': /bond|coupon|zero-coupon|yield/i,
    'Share valuation / Gordon': /gordon|share|dividend|stock/i,
    'Capital budgeting (nature, importance)': /capital budgeting/i,
    'Payback': /payback/i,
    'ARR': /\bARR\b|accounting rate/i,
    'NPV & PI': /\bNPV\b|net present value|profitability index/i,
    'IRR': /\bIRR\b|internal rate/i,
    'Capital structure': /capital structure/i,
    'Operating leverage': /operating leverage|\bDOL\b|\bOL\b/i,
    'Financial leverage': /financial leverage|\bDFL\b|\bFL\b/i,
    'Combined leverage': /combined leverage|\bDCL\b|\bCL\b/i,
    'EBIT-EPS & indifference': /EBIT|EPS|indifference/i,
    'Coverage ratios (ICR, DSCR)': /coverage|DSCR/i,
    'Pecking order': /pecking/i,
    'Cost of debt / preference': /cost of debt|Kd|preference/i,
    'Cost of equity / CAPM / retained earnings': /cost of equity|CAPM|retained|Ke\b/i,
    'WACC / MCC': /WACC|marginal cost|weighted average/i,
  },
  marketing: {
    'Marketing meaning / definition': /define marketing|what is marketing|marketing is/i,
    'Nature / scope / importance': /nature|scope|importance/i,
    'Marketing vs selling': /marketing and selling|marketing vs selling/i,
    'Core concepts / 4Ps': /core concepts|4ps|marketing mix/i,
    'Functions & role': /functions of marketing|role of marketing/i,
    'Production / product / selling concepts': /production concept|product concept|selling concept|production, product/i,
    'Marketing concept & societal': /societal|marketing concept|modern marketing/i,
    'Orientations (all five)': /orientation/i,
    'Green marketing': /green|greenwashing/i,
    'Digital marketing': /digital|SEO|PPC/i,
    'Consumer behaviour (meaning, types)': /consumer behaviour|buying behaviour/i,
    'Buying decision process': /decision process|dissonance/i,
    'Factors influencing CB': /factors/i,
    'MIS': /\bMIS\b|information system/i,
    'Marketing research (meaning, scope)': /marketing research/i,
    'Research process': /process/i,
    'Research design': /exploratory|descriptive|causal|research design/i,
    'Data sources / secondary / primary': /primary|secondary|data/i,
    'Questionnaire / observation': /questionnaire|observation/i,
    'Sampling': /sampling|sample/i,
    'Measurement scales': /measurement|nominal|scale/i,
    'Data analysis / hypothesis / Pareto': /hypothesis|analysis|pareto/i,
    'Segmentation': /segment/i,
    'Targeting': /target/i,
    'Positioning / repositioning': /position/i,
    'Indian brand cases': /indian|brand/i,
    'Value proposition': /value proposition/i,
  },
};
for (const [id, topics] of Object.entries(T)) {
  const list = window.ExamQA.data[id];
  console.log('\n== ' + id + '  (cols: 2m 3m 5-6m 10m)');
  for (const [name, re] of Object.entries(topics)) {
    const c = { 2: 0, 3: 0, m: 0, 10: 0 };
    list.forEach((q) => { if (re.test(q.q + ' ' + q.t)) { if (q.m === 2) c[2]++; else if (q.m === 3) c[3]++; else if (q.m === 10) c[10]++; else c.m++; } });
    const gaps = [!c[2] && !c[3] ? 'short' : '', !c.m ? 'medium' : '', !c[10] ? 'long' : ''].filter(Boolean);
    console.log((gaps.length ? '⚠ ' : '  ') + name.padEnd(44) + [c[2], c[3], c.m, c[10]].join('  ') + (gaps.length ? '   missing: ' + gaps.join(', ') : ''));
  }
}
