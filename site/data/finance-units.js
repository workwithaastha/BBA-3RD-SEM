// Business Finance: the syllabus (FINANCE/syllabus.jpeg, F010301TN) has FOUR units - I Introduction (finance functions, TVM, bonds), II Capital Budgeting,
// III Capital Structure (leverage, cost of capital), IV Dividend Decision and Working Capital. The earlier material was organised in five units, so this file
// (loaded after every Finance data file) re-labels the notes pages, MCQs, written answers and important-question groups into the four syllabus units.
(function () {
  const SUB = window.SUBJECTS && window.SUBJECTS.finance;
  if (!SUB) return;
  const plain = (s) => String(s || '').replace(/<[^>]+>/g, ' ');
  // old unit + topic / question  ->  new unit
  const mapUnit = (u, t, q) => {
    if (u === 'Unit I' || u === 'Unit II') return 'Unit I';
    if (u === 'Unit III') return /stock|share|gordon|equity|dividend/i.test(t + ' ' + plain(q)) && !/bond|debenture/i.test(t) ? 'Unit IV' : 'Unit I';
    if (u === 'Unit IV') return 'Unit II';
    if (u === 'Unit V') return 'Unit III';
    return u;
  };

  // ---- notes pages: new ids and titles (ids start with u1..u4 so the subject page groups them by unit)
  const NOTES = {
    u1: ['u1-intro', 'Unit I-A · Introduction to Finance (earlier notes)'],
    u2: ['u1-tvm', 'Unit I-C · Time Value of Money (earlier notes)'],
    u3: ['u1-bonds', 'Unit I-D · Valuation of Bonds and Stocks (earlier notes; stocks are not in the syllabus list)'],
    u4: ['u2-capbud', 'Unit II-A · Capital Budgeting (earlier notes)'],
    u5: ['u3-leverage', 'Unit III-A · Financing Decision and Leverage (earlier notes)'],
    coc: ['u3-coc', 'Unit III-C · Cost of Capital (formula sheet)'],
    'leverage-qs': ['u3-levqs', 'Unit III-D · Leverage Practice Questions (textbook)'],
  };
  SUB.units.forEach((u) => { if (NOTES[u.id]) u.id = NOTES[u.id][0]; });
  // titles (second pass because ids were replaced above)
  const byNew = Object.fromEntries(Object.values(NOTES));
  SUB.units.forEach((u) => { if (byNew[u.id]) u.title = byNew[u.id]; });
  // put each unit's pages in order: A, B (complete notes), C ...
  const order = ['qa', 'concepts', 'u1-intro', 'u1-new', 'u1-tvm', 'u1-bonds', 'u2-capbud', 'u2-new', 'u3-leverage', 'u3-new', 'u3-coc', 'u3-levqs', 'u4-new', 'formulas', 'solved'];
  SUB.units.sort((a, b) => { const ia = order.indexOf(a.id), ib = order.indexOf(b.id); return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib); });

  // ---- MCQs
  SUB.mcqs.forEach((m) => { if (m.n < 2000) m.u = mapUnit(m.u, m.t || '', m.q); });   // new MCQs (n >= 2000) already use the four syllabus units

  // ---- written answers
  if (window.ExamQA && window.ExamQA.data.finance) {
    window.ExamQA.data.finance.forEach((q) => { if (!q._moved) { q.u = mapUnit(q.u, q.t || '', q.q); q._moved = 1; } });
    window.ExamQA.add('finance', []);   // rebuild the Q&A page with the new unit labels
  }

  // ---- important questions: regroup the five blocks under the four units
  const E = window.EXPECTED && window.EXPECTED.finance;
  if (E) {
    const map = { u1: 'u1-intro', u2: 'u1-tvm', u3: 'u1-bonds', u4: 'u2-capbud', u5: 'u3-leverage' };
    const head = { u1: 'Unit I-A · Introduction to Finance', u2: 'Unit I-C · Time Value of Money', u3: 'Unit I-D · Valuation of Bonds', u4: 'Unit II · Capital Budgeting', u5: 'Unit III · Financing Decision, Leverage and Cost of Capital' };
    E.forEach((b) => { if (map[b.ref]) { const k = b.ref; b.ref = map[k]; b.h = head[k]; } });
    E.push({ ref: 'u4-new', h: 'Unit IV · Dividend Decision and Working Capital', q: [
      'What is the dividend decision? Explain the significance of dividend policy and the factors affecting it.',
      'Explain Walter\'s model of dividend with its assumptions; classify growth, normal and declining firms.',
      'Explain Gordon\'s model of dividend (bird-in-hand argument) with its assumptions; differentiate Walter and Gordon.',
      'Explain working capital: meaning, types, importance; gross and net working capital.',
      'What is the operating cycle? Explain its stages and calculate the operating cycle.',
      'Discuss the determinants of working capital requirement.'] });
  }
})();
