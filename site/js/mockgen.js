// Shared generator for the NEW-PATTERN mock papers (used by the Mock Exam Box in the browser and by tools/make_new_pattern_pdfs.py in node,
// so a set on the website and its PDF are always the same paper).
//   Section A  Q1 (a)-(i): 9 compulsory short answers, 5 marks each = 45     (2 from each unit + 1 extra from a rotating unit)
//   Section B  Q2-Q5: 4 long questions from Units I-II, attempt any ONE, 15 marks
//   Section C  Q6-Q9: 4 long questions from Units III-IV, attempt any ONE, 15 marks
(function (root) {
  function rng(seed) { let t = seed >>> 0; return () => { t += 0x6d2b79f5; let r = Math.imul(t ^ (t >>> 15), 1 | t); r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296; }; }
  function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function shuffled(arr, seed) { const r = rng(seed), a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  const unitNo = (u) => ({ 'Unit I': 1, 'Unit II': 2, 'Unit III': 3, 'Unit IV': 4 }[u] || 0);

  function newPatternSets(id, bank, count) {
    const shortOK = (q) => !q.cs && (q.np ? q.m === 5 : !q.put && [2, 3, 5, 6, 6.25].includes(q.m));
    const longOK = (q) => !q.cs && [10, 12.5, 15].includes(q.m) && !/online test/i.test(q.src || '');
    const group = (list, seedKey) => { const g = { 1: [], 2: [], 3: [], 4: [] }; list.forEach((q) => { const u = unitNo(q.u); if (g[u]) g[u].push(q); }); Object.keys(g).forEach((u) => { g[u] = shuffled(g[u], hash(id + seedKey + u)).map((q, i) => ({ q, i })).sort((x, y) => (y.q.p || 0) - (x.q.p || 0) || x.i - y.i).map((x) => x.q); }); return g; };  // most-predicted questions first
    const S = group(bank.filter(shortOK), 'ns');
    const Lg = group(bank.filter(longOK), 'nl');
    const ptrS = { 1: 0, 2: 0, 3: 0, 4: 0 }, ptrL = { 1: 0, 2: 0, 3: 0, 4: 0 };
    const take = (pool, ptrs, u, n, used) => {
      const out = [];
      let guard = 0;
      while (out.length < n && pool[u].length && guard++ < pool[u].length * 2) {
        const q = pool[u][ptrs[u] % pool[u].length];
        ptrs[u]++;
        if (!used.has(q)) { used.add(q); out.push(q); }
      }
      return out;
    };
    const sets = [];
    for (let k = 0; k < count; k++) {
      const used = new Set();
      const extra = (k % 4) + 1;
      const A = [];
      for (let u = 1; u <= 4; u++) take(S, ptrS, u, u === extra ? 3 : 2, used).forEach((q) => A.push(q));
      A.sort((a, b) => unitNo(a.u) - unitNo(b.u));
      const B = [...take(Lg, ptrL, 1, 2, used), ...take(Lg, ptrL, 2, 2, used)];
      const C = [...take(Lg, ptrL, 3, 2, used), ...take(Lg, ptrL, 4, 2, used)];
      sets.push({
        name: 'New Pattern Set ' + (k + 1),
        secs: [
          { name: 'Section A - Short Answer Type (Q1)', rule: 'attempt ALL parts (9 x 5 = 45 marks)', marks: 5, attempt: 9, sub: true, qs: A },
          { name: 'Section B - Long Answer Type', rule: 'attempt any ONE question (1 x 15 = 15 marks)', marks: 15, attempt: 1, start: 2, qs: B },
          { name: 'Section C - Long Answer Type', rule: 'attempt any ONE question (1 x 15 = 15 marks)', marks: 15, attempt: 1, start: 6, qs: C },
        ],
      });
    }
    return sets;
  }

  root.MockGen = { newPatternSets, hash, shuffled, rng, unitNo };
  if (typeof module !== 'undefined' && module.exports) module.exports = root.MockGen;
})(typeof window !== 'undefined' ? window : globalThis);
