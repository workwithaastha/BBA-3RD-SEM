// Mock Exam Box: one place with practice sets for every subject.
//  - Written subjects (Finance, HRM, Marketing): the ACTUAL PUT paper + several PUT-pattern sets (75 marks: A 9 choose 4 x 6.25, B 4 choose 2 x 12.5, C 4 choose 2 x 12.5)
//    built so that every question of the Q&A bank appears in at least one set; model answers on demand.
//  - Objective subjects (Business Environment, Office Management, Physical Education): timed 50-question sets and full-paper 100-question sets, the real PUT paper where it exists.
//  - Finance numericals: old and new numerical questions in sets of 6, each with a step-by-step "how to solve".
// Everything is generated from window.SUBJECTS / window.ExamQA at run time (seeded shuffles, so a set is the same every visit).
(function () {
  const A = window.App;
  if (!A) return;
  const { S, store, esc, ICON, setTheme } = A;
  const WRITTEN = ['finance', 'hrm', 'marketing'];
  const OBJECTIVE = { 'business-env': { min50: 40, min100: 90, label: 'Business Environment (objective, 1.5 h)' }, 'office-mgmt': { min50: 30, min100: 60, label: 'Office Management (objective, 1 h)' }, 'physical-education': { min50: 40, min100: 90, label: 'Physical Education (objective, 1.5 h)' } };
  const ORDER = ['finance', 'hrm', 'marketing', 'business-env', 'office-mgmt', 'physical-education'];
  let timer = null;

  // ---------------------------------------------------------------- helpers
  function rng(seed) { let t = seed >>> 0; return () => { t += 0x6d2b79f5; let r = Math.imul(t ^ (t >>> 15), 1 | t); r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296; }; }
  function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function shuffled(arr, seed) { const r = rng(seed), a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  // take `size` distinct items for set k from a shuffled cyclic pool (so every item is used before any repeats)
  function chunk(pool, k, size) { const out = []; const n = pool.length; for (let i = 0; i < size && i < n; i++) out.push(pool[(k * size + i) % n]); return out; }
  const fmt = (t) => String(Math.floor(t / 3600)).padStart(2, '0') + ':' + String(Math.floor((t % 3600) / 60)).padStart(2, '0') + ':' + String(t % 60).padStart(2, '0');
  const isNum = (q) => q.num || /numerical/i.test(q.t || '') || (/\d{2,}/.test(q.q) && /\b(calculate|find|compute|estimate)\b/i.test(q.q) && /[₹]|Rs/.test(q.q));
  const saved = () => store.get('mockbox', {});
  const save = (k, v) => { const s = saved(); s[k] = Object.assign(s[k] || {}, v); store.set('mockbox', s); };

  // ---------------------------------------------------------------- set definitions
  function writtenSets(id) {
    const bank = (window.ExamQA && window.ExamQA.data[id]) || [];
    const real = ((window.ExamQA && window.ExamQA.presets && window.ExamQA.presets[id]) || []).filter((p) => p.real);
    const poolA = shuffled(bank.filter((q) => !q.put && !q.num && [5, 6, 6.25].includes(q.m)), hash(id + 'A'));
    const poolBC = shuffled(bank.filter((q) => !q.put && (!q.num || q.m === 12.5) && [10, 12.5].includes(q.m)), hash(id + 'B'));
    const n = Math.max(3, Math.min(10, Math.ceil(Math.max(poolA.length / 9, poolBC.length / 8))));
    const sets = real.map((p) => ({ key: id + ':' + p.id, title: p.name.replace(/^ACTUAL /, 'Actual '), kind: 'real', preset: p, tag: 'Real paper' }));
    for (let k = 0; k < n; k++) {
      const a = chunk(poolA, k, 9);
      const bc = chunk(poolBC, k, 8);
      sets.push({ key: id + ':set' + (k + 1), title: 'PUT-pattern Set ' + (k + 1), kind: 'pattern', tag: '75 marks · 2 h', a, b: bc.slice(0, 4), c: bc.slice(4, 8) });
    }
    return sets;
  }

  function numericalSets() {
    const bank = (window.ExamQA && window.ExamQA.data.finance) || [];
    const pool = shuffled(bank.filter(isNum), hash('fin-num'));
    const n = Math.ceil(pool.length / 6);
    const sets = [];
    for (let k = 0; k < n; k++) sets.push({ key: 'finance:num' + (k + 1), title: 'Numerical Set ' + (k + 1), kind: 'numerical', tag: '6 numericals · 60 min', qs: chunk(pool, k, 6) });
    return sets;
  }

  function mcqSets(id) {
    const mcqs = S[id].mcqs;
    const putQ = mcqs.filter((m) => m.u === 'PUT Paper');
    const rest = mcqs.filter((m) => m.u !== 'PUT Paper');
    const cfg = OBJECTIVE[id];
    const sets = [];
    if (putQ.length) sets.push({ key: id + ':put', title: 'Actual PUT paper (100 Qs)', kind: 'mcq', tag: 'Real paper · ' + cfg.min100 + ' min', qs: putQ, mins: cfg.min100 });
    const p50 = shuffled(rest, hash(id + '50')), p100 = shuffled(rest, hash(id + '100'));
    const n50 = Math.ceil(rest.length / 50), n100 = Math.ceil(rest.length / 100);
    for (let k = 0; k < n50; k++) sets.push({ key: id + ':q50-' + (k + 1), title: 'Timed Set ' + (k + 1), kind: 'mcq', tag: '50 Qs · ' + cfg.min50 + ' min', qs: chunk(p50, k, 50), mins: cfg.min50, group: '50' });
    for (let k = 0; k < n100; k++) sets.push({ key: id + ':q100-' + (k + 1), title: 'Full Paper ' + (k + 1), kind: 'mcq', tag: '100 Qs · ' + cfg.min100 + ' min', qs: chunk(p100, k, 100), mins: cfg.min100, group: '100' });
    return sets;
  }

  function allSets() {
    const out = {};
    WRITTEN.forEach((id) => { if (S[id]) out[id] = writtenSets(id); });
    Object.keys(OBJECTIVE).forEach((id) => { if (S[id]) out[id] = mcqSets(id); });
    out['finance-num'] = numericalSets();
    return out;
  }

  // ---------------------------------------------------------------- landing page
  function card(set, extra) {
    const s = saved()[set.key] || {};
    const done = s.best != null ? `<span class="mbdone">Best ${esc(String(s.best))}${s.when ? ' · ' + esc(s.when) : ''}</span>` : '';
    const n = set.kind === 'pattern' ? 17 : set.kind === 'real' ? 17 : set.qs ? set.qs.length : 0;
    return `<a class="mbset ${set.kind}" href="#/mocks/${encodeURIComponent(set.key)}"><b>${esc(set.title)}</b><span>${esc(set.tag)}</span><em>${n} questions</em>${done}</a>`;
  }

  function page(key) {
    const root = document.getElementById('app');
    clearInterval(timer);
    if (key) return runSet(decodeURIComponent(key));
    setTheme('');
    const sets = allSets();
    const total = Object.values(sets).reduce((n, a) => n + a.length, 0);
    const sections = ORDER.filter((id) => S[id]).map((id) => {
      const list = sets[id] || [];
      let body;
      if (OBJECTIVE[id]) {
        const g = (name, f) => { const x = list.filter(f); return x.length ? `<h4>${name}</h4><div class="mbgrid">${x.map(card).join('')}</div>` : ''; };
        body = g('Real paper', (s) => s.key.endsWith(':put')) + g('Timed 50-question sets', (s) => s.group === '50') + g('Full-paper 100-question sets', (s) => s.group === '100');
      } else {
        body = `<div class="mbgrid">${list.map(card).join('')}</div>`;
      }
      const attempted = list.filter((s) => (saved()[s.key] || {}).best != null).length;
      return `<section class="mbsec t-${id}" id="mb-${id}"><h3><span>${ICON[id] || '📘'}</span> ${S[id].title} <small>${list.length} sets${attempted ? ' · ' + attempted + ' tried' : ''}</small></h3>${body}</section>`;
    }).join('');
    const num = sets['finance-num'] || [];
    const numSec = `<section class="mbsec t-finance mbnum" id="mb-numerical"><h3><span>🧮</span> Finance Numerical Mock Box <small>${num.length} sets · old + new numericals with how to solve</small></h3>
      <p class="expl">Every numerical question in the Finance bank - the old ones and the new practice sets (Capital Budgeting, Leverage, Numerical Questions, PUT paper) - in sets of 6. Each answer shows the formula, the working table and the final result.</p>
      <div class="mbgrid">${num.map(card).join('')}</div></section>`;
    const chips = ['<a href="#mb-numerical">🧮 Numericals</a>'].concat(ORDER.filter((id) => S[id]).map((id) => `<a href="#mb-${id}" class="t-${id}">${ICON[id] || '📘'} ${S[id].title.split(' ').slice(0, 2).join(' ')}</a>`)).join('');
    root.innerHTML = `<section class="mbhero"><h1>🎯 Mock Exam Box</h1>
      <p>${total} practice sets for all six subjects. Pick a subject, take a set under exam conditions, then check the model answers. Sets are fixed, so you can come back and repeat them; your best score is remembered on this device.</p>
      <nav class="mbjump" id="mbjump">${chips}</nav></section>${numSec}${sections}`;
    document.getElementById('mbjump').onclick = (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      e.preventDefault();
      const t = document.querySelector(a.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  }

  // ---------------------------------------------------------------- run a set
  function findSet(key) {
    const sets = allSets();
    for (const list of Object.values(sets)) { const s = list.find((x) => x.key === key); if (s) return s; }
    return null;
  }

  function runSet(key) {
    const set = findSet(key);
    const root = document.getElementById('app');
    if (!set) { root.innerHTML = '<p class="expl">Set not found. <a href="#/mocks">Back to the Mock Exam Box</a></p>'; return; }
    const sid = key.split(':')[0] === 'finance' && set.kind === 'numerical' ? 'finance' : key.split(':')[0];
    setTheme(sid);
    if (set.kind === 'mcq') return mcqRun(set, sid);
    if (set.kind === 'numerical') return writtenNumerical(set, sid);
    return writtenRun(set, sid);
  }

  const back = '<p class="crumb"><a href="#/mocks">← Mock Exam Box</a></p>';

  function startTimer(secs, el, onEnd) {
    let left = secs, running = false;
    const draw = () => { el.textContent = fmt(Math.max(0, left)); el.classList.toggle('low', left < 300); };
    draw();
    const tick = () => { if (!running) return; left--; draw(); if (left <= 0) { clearInterval(timer); running = false; onEnd(); } };
    return { toggle() { running = !running; clearInterval(timer); if (running) timer = setInterval(tick, 1000); return running; }, stop() { clearInterval(timer); running = false; }, used: () => secs - left, set(v) { left = v; draw(); } };
  }

  function qBlock(q, label, marks, opts) {
    const ans = `<div class="mbans" hidden>${q.a}${q.ms ? `<div class="msch"><b>📝 Marking scheme:</b> ${q.ms}</div>` : ''}</div>`;
    return `<div class="mbq" data-sec="${opts.sec || ''}"><div class="mbqh"><b>${label}</b><span class="mbmk">${marks}</span>${opts.tag || ''}</div>
      <div class="mbqt">${q.q}</div>
      <div class="mbact"><label class="mbtry"><input type="checkbox" class="try"> I will attempt this</label><button type="button" class="btn show">Show model answer</button></div>${ans}</div>`;
  }

  function writtenRun(set, sid) {
    const root = document.getElementById('app');
    let sections = [], minutes = 120, title = set.title, note = '';
    if (set.kind === 'real') {
      const bank = (window.ExamQA.data[sid] || []);
      sections = set.preset.real.map((sec) => ({ name: sec.name, rule: sec.rule, marks: sec.marks, attempt: sec.attempt, qs: sec.ids.map((k) => bank.find((x) => x.put === k)).filter(Boolean) }));
      minutes = /online/i.test(set.preset.id) ? 90 : 120;
      note = set.preset.note || '';
    } else {
      sections = [
        { name: 'Section A', rule: 'attempt any four (6.25 × 4 = 25 marks)', marks: 6.25, attempt: 4, qs: set.a },
        { name: 'Section B', rule: 'attempt any two (12.5 × 2 = 25 marks)', marks: 12.5, attempt: 2, qs: set.b },
        { name: 'Section C', rule: 'attempt any two (12.5 × 2 = 25 marks)', marks: 12.5, attempt: 2, qs: set.c },
      ];
      note = 'PUT pattern: Section A 9 questions of 6.25 marks (attempt 4) · Section B 4 questions of 12.5 marks (attempt 2) · Section C 4 questions of 12.5 marks (attempt 2). The questions come from the Q&A bank; marks shown follow the paper pattern.';
    }
    const total = sections.reduce((n, s) => n + s.attempt * s.marks, 0);
    let n = 0;
    const body = sections.map((sec, si) => `<h3 class="mbsh">${esc(sec.name)} <small>${esc(sec.rule)}</small></h3><p class="mbcnt" data-s="${si}"></p>` + sec.qs.map((q) => { n++; return qBlock(q, 'Q' + n, sec.marks, { sec: si, tag: `<span class="mbsrc">${esc((q.t || '') + (q.u ? ' · ' + q.u : ''))}</span>` }); }).join('')).join('');
    root.innerHTML = `${back}<section class="mbpaper"><div class="mbbar"><div><h2>${S[sid].title} - ${esc(title)}</h2><p class="expl">Maximum marks: ${total} · Time: ${minutes} minutes · ${esc(note)}</p></div>
      <div class="mbtimer"><b id="mbt">--:--:--</b><button class="btn solid" id="mbgo">▶ Start timer</button><button class="btn" id="mball">Show all answers</button><button class="btn" id="mbprint">🖨 Print</button></div></div>${body}
      <div class="mbfoot"><p class="expl">Done? Write each answer on paper first, then open the model answer and compare - tick what you covered.</p><label class="mbtry"><input type="checkbox" id="mbfin"> I finished this set</label></div></section>`;
    const t = startTimer(minutes * 60, document.getElementById('mbt'), () => { document.getElementById('mbt').textContent = 'Time up!'; });
    document.getElementById('mbgo').onclick = (e) => { e.target.textContent = t.toggle() ? '⏸ Pause' : '▶ Resume'; };
    document.getElementById('mball').onclick = (e) => { const a = root.querySelectorAll('.mbans'); const open = e.target.dataset.o !== '1'; a.forEach((x) => { x.hidden = !open; }); e.target.dataset.o = open ? '1' : '0'; e.target.textContent = open ? 'Hide all answers' : 'Show all answers'; };
    document.getElementById('mbprint').onclick = () => window.print();
    root.querySelectorAll('.mbq').forEach((q) => {
      q.querySelector('.show').onclick = () => { const a = q.querySelector('.mbans'); a.hidden = !a.hidden; q.querySelector('.show').textContent = a.hidden ? 'Show model answer' : 'Hide model answer'; };
    });
    const count = () => sections.forEach((sec, si) => {
      const c = root.querySelectorAll(`.mbq[data-sec="${si}"] .try:checked`).length;
      const el = root.querySelector(`.mbcnt[data-s="${si}"]`);
      el.textContent = `Chosen ${c} of ${sec.attempt} to attempt` + (c > sec.attempt ? ' - too many, choose only ' + sec.attempt : '');
      el.classList.toggle('bad', c > sec.attempt);
    });
    root.addEventListener('change', (e) => { if (e.target.classList.contains('try')) count(); });
    count();
    document.getElementById('mbfin').onchange = (e) => { if (e.target.checked) save(set.key, { best: 'finished', when: new Date().toLocaleDateString() }); };
  }

  function writtenNumerical(set, sid) {
    const root = document.getElementById('app');
    const body = set.qs.map((q, i) => qBlock(q, 'Q' + (i + 1), q.m + ' marks', { tag: `<span class="mbsrc ${q.put || /question folder|Practice set/i.test(q.src || '') ? 'new' : 'old'}">${q.put || /Practice set/i.test(q.src || '') ? 'NEW' : 'earlier bank'}</span>` })).join('');
    root.innerHTML = `${back}<section class="mbpaper"><div class="mbbar"><div><h2>Finance - ${esc(set.title)}</h2><p class="expl">Solve each numerical on paper first (write the formula, the substitution and the answer with ₹), then open <b>How to solve</b> to compare your steps and result.</p></div>
      <div class="mbtimer"><b id="mbt">--:--:--</b><button class="btn solid" id="mbgo">▶ Start timer</button><button class="btn" id="mball">Show all solutions</button></div></div>${body.replace(/Show model answer/g, 'How to solve')}
      <div class="mbfoot"><label class="mbtry"><input type="checkbox" id="mbfin"> I finished this set</label></div></section>`;
    const t = startTimer(3600, document.getElementById('mbt'), () => { document.getElementById('mbt').textContent = 'Time up!'; });
    document.getElementById('mbgo').onclick = (e) => { e.target.textContent = t.toggle() ? '⏸ Pause' : '▶ Resume'; };
    document.getElementById('mball').onclick = (e) => { const open = e.target.dataset.o !== '1'; root.querySelectorAll('.mbans').forEach((x) => { x.hidden = !open; }); e.target.dataset.o = open ? '1' : '0'; e.target.textContent = open ? 'Hide all solutions' : 'Show all solutions'; };
    root.querySelectorAll('.mbq').forEach((q) => { q.querySelector('.try').parentElement.remove(); q.querySelector('.show').onclick = () => { const a = q.querySelector('.mbans'); a.hidden = !a.hidden; q.querySelector('.show').textContent = a.hidden ? 'How to solve' : 'Hide solution'; }; });
    document.getElementById('mbfin').onchange = (e) => { if (e.target.checked) save(set.key, { best: 'finished', when: new Date().toLocaleDateString() }); };
  }

  function mcqRun(set, sid) {
    const root = document.getElementById('app');
    const qs = set.qs;
    const ans = new Array(qs.length).fill(-1);
    const blocks = qs.map((m, i) => `<div class="mbm" data-i="${i}"><div class="mbqh"><b>Q${i + 1}</b><span class="mbsrc">${esc(m.u)}${m.t ? ' · ' + esc(m.t) : ''}</span></div><div class="mbqt">${esc(m.q)}</div>
      <div class="mbopts">${m.o.map((o, k) => `<label class="mbo"><input type="radio" name="q${i}" value="${k}"> <b>${'ABCD'[k]}.</b> ${esc(o)}</label>`).join('')}</div><div class="mbexp" hidden></div></div>`).join('');
    root.innerHTML = `${back}<section class="mbpaper"><div class="mbbar sticky"><div><h2>${S[sid].title} - ${esc(set.title)}</h2><p class="expl">${qs.length} questions · ${set.mins} minutes · each question has one correct option · <span id="mbans">0</span> answered</p></div>
      <div class="mbtimer"><b id="mbt">--:--:--</b><button class="btn solid" id="mbgo">▶ Start timer</button><button class="btn primary" id="mbsub">Submit</button></div></div>${blocks}
      <div id="mbres"></div><div class="mbfoot"><button class="btn primary" id="mbsub2">Submit and see score</button></div></section>`;
    let done = false;
    const t = startTimer(set.mins * 60, document.getElementById('mbt'), () => finish(true));
    document.getElementById('mbgo').onclick = (e) => { e.target.textContent = t.toggle() ? '⏸ Pause' : '▶ Resume'; };
    root.addEventListener('change', (e) => {
      if (done || e.target.type !== 'radio') return;
      const i = +e.target.name.slice(1);
      ans[i] = +e.target.value;
      document.getElementById('mbans').textContent = ans.filter((a) => a >= 0).length;
    });
    function finish(auto) {
      if (done) return;
      done = true;
      t.stop();
      let score = 0;
      const by = {};
      qs.forEach((m, i) => {
        const ok = ans[i] === m.a;
        if (ok) score++;
        const u = by[m.u] || (by[m.u] = { r: 0, t: 0 });
        u.t++; if (ok) u.r++;
        const el = root.querySelector(`.mbm[data-i="${i}"]`);
        el.classList.add(ans[i] < 0 ? 'skip' : ok ? 'ok' : 'bad');
        el.querySelectorAll('.mbo').forEach((l, k) => { l.classList.toggle('good', k === m.a); l.classList.toggle('wrong', k === ans[i] && k !== m.a); l.querySelector('input').disabled = true; });
        const why = (m.e || '') + (ans[i] >= 0 && ans[i] !== m.a && m.w && m.w[ans[i]] ? ' <i>Your option: ' + esc(m.w[ans[i]]) + '</i>' : '');
        const ex = el.querySelector('.mbexp');
        ex.hidden = false;
        ex.innerHTML = `<b>${ans[i] < 0 ? 'Skipped' : ok ? '✔ Correct' : '✘ Wrong'} - answer ${'ABCD'[m.a]}.</b> ${esc(why).replace(/&lt;i&gt;/g, '<i>').replace(/&lt;\/i&gt;/g, '</i>')}`;
      });
      const skipped = ans.filter((a) => a < 0).length;
      const pct = Math.round((score / qs.length) * 100);
      save(set.key, { best: Math.max(score, ((saved()[set.key] || {}).bestNum) || 0) + '/' + qs.length, bestNum: Math.max(score, ((saved()[set.key] || {}).bestNum) || 0), when: new Date().toLocaleDateString() });
      const rows = Object.entries(by).map(([u, v]) => `<tr><td>${esc(u)}</td><td>${v.r}</td><td>${v.t}</td><td>${Math.round((v.r / v.t) * 100)}%</td></tr>`).join('');
      document.getElementById('mbres').innerHTML = `<div class="mbscore"><h2>${auto ? 'Time up! ' : ''}Score: ${score}/${qs.length} (${pct}%)</h2><p class="expl">Correct ${score} · Wrong ${qs.length - score - skipped} · Skipped ${skipped} · Time used ${fmt(t.used())}</p>
        <table class="res"><tr><th>Unit</th><th>Correct</th><th>Total</th><th>%</th></tr>${rows}</table>
        <div class="row"><button class="btn" id="mbwrong">Show only wrong / skipped</button><button class="btn" id="mball2">Show all</button><a class="btn solid" href="#/mocks">All sets</a><button class="btn primary" id="mbretry">Try this set again</button></div></div>`;
      document.getElementById('mbres').scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById('mbwrong').onclick = () => root.querySelectorAll('.mbm').forEach((x) => { x.hidden = x.classList.contains('ok'); });
      document.getElementById('mball2').onclick = () => root.querySelectorAll('.mbm').forEach((x) => { x.hidden = false; });
      document.getElementById('mbretry').onclick = () => runSet(set.key);
    }
    document.getElementById('mbsub').onclick = () => finish(false);
    document.getElementById('mbsub2').onclick = () => finish(false);
  }

  window.MockBox = { page, allSets };
  addEventListener('hashchange', () => { if (!/^#\/mocks/.test(location.hash)) clearInterval(timer); });
})();
