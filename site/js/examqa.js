// Written-exam Q&A bank (marks-wise, predicted, model answers) + mock paper generator.
// Data files call ExamQA.add('<subject>', [ {m, u, t, q, a, ms, src, p} ... ]).
// m = marks · u = unit · t = topic · q = question · a = model answer (html) · ms = marking scheme · src = where it was asked · p = likelihood 1-3
(function () {
  const L = (...a) => '<ul>' + a.map((x) => '<li>' + x + '</li>').join('') + '</ul>';
  const O = (...a) => '<ol>' + a.map((x) => '<li>' + x + '</li>').join('') + '</ol>';
  const F = (x) => '<div class="formula">' + x + '</div>';
  const E = (x) => '<div class="eg"><b>Example:</b> ' + x + '</div>';
  const T = (head, rows) => '<table><tr>' + head.map((h) => '<th>' + h + '</th>').join('') + '</tr>' + rows.map((r) => '<tr>' + r.map((c) => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</table>';
  const D = (x) => '<div class="diag">' + x + '</div>';
  window.ExamQA = { L, O, F, E, T, D, data: {}, add };

  const STAR = { 3: '★★★', 2: '★★', 1: '★' };
  const LIKE = { 3: 'Very likely (asked in your PDFs)', 2: 'Likely (core syllabus)', 1: 'Possible' };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const PRESETS = {
    finance: [
      { id: 'tp', name: 'Test-paper pattern - 30 marks (90 min)', parts: [['Section A', 3, 4], ['Section B', 6, 3]] },
      { id: 'full', name: 'Full paper - 50 marks (2 h)', parts: [['Section A (very short)', 2, 5], ['Section B (short)', 3, 4], ['Section C (medium)', 6, 3], ['Section D (long)', 10, 1]] },
    ],
    marketing: [
      { id: 'tp', name: 'Mid-term style - 30 marks (90 min)', parts: [['Section A', 3, 4], ['Section B', 6, 3]] },
      { id: 'full', name: 'Full paper - 50 marks (2 h)', parts: [['Section A (very short)', 2, 5], ['Section B (short)', 3, 4], ['Section C (medium)', 6, 3], ['Section D (long)', 10, 1]] },
    ],
  };


  function plain(el) { return el.textContent.replace(/\s+/g, ' ').trim(); }
  function skeleton(html) {
    const d = document.createElement('div');
    d.innerHTML = html;
    const bits = [];
    d.querySelectorAll('h4').forEach((h) => bits.push(plain(h)));
    d.querySelectorAll('li > b:first-child').forEach((b) => bits.push(plain(b)));
    d.querySelectorAll('table').forEach((t, i) => {
      if (i > 1) return;
      const ths = [...t.querySelectorAll('tr:first-child th')].map(plain);
      if (ths.length > 2) bits.push('[' + ths.join(' | ') + ']');
      [...t.querySelectorAll('tr td:first-child')].slice(0, 8).forEach((c) => bits.push(plain(c)));
    });
    const seen = new Set();
    return bits.filter((b) => b && b.length < 80 && !seen.has(b) && seen.add(b)).slice(0, 16);
  }
  function sheet(id) {
    const { S, $, setTheme, esc: e2 } = window.App;
    const sub = S[id];
    const all = (window.ExamQA.data[id] || []);
    if (!sub || !all.length) return;
    setTheme(id);
    const mk = (html) => { const d = document.createElement('div'); d.innerHTML = html; return d; };
    const top = all.filter((q) => q.p >= 2);
    const defs = top.filter((q) => q.m === 2).map((q) => {
      const d = mk(q.a);
      const p = d.querySelector('p');
      return `<li><b>${q.q}</b> ${esc((p ? plain(p) : plain(d)).slice(0, 230))}</li>`;
    }).join('');
    const nums = top.filter((q) => q.m === 3 && /class="formula"/.test(q.a)).map((q) => {
      const d = mk(q.a);
      const fs = [...d.querySelectorAll('.formula')].slice(0, 3).map((x) => `<div class="formula">${x.innerHTML}</div>`).join('');
      const bolds = [...d.querySelectorAll('b')].map(plain).filter((t) => /[=₹%0-9]/.test(t));
      const res = bolds.length ? `<div class="sres">✔ ${esc(bolds[bolds.length - 1])}</div>` : '';
      return `<div class="snum"><b>${q.q}</b>${fs}${res}</div>`;
    }).join('');
    const rest = top.filter((q) => (q.m === 3 && !/class="formula"/.test(q.a)) || q.m >= 5).sort((a, b) => a.m - b.m || b.p - a.p).map((q) => {
      const sk = skeleton(q.a);
      return `<div class="sq"><span class="mk m${q.m}">${q.m}</span><div><b>${q.q}</b>${sk.length ? `<div class="skel">${sk.map((x) => `<span>${esc(x)}</span>`).join('')}</div>` : ''}</div></div>`;
    }).join('');
    const egs = all.filter((q) => q.m >= 6 && q.p >= 2).map((q) => { const el = mk(q.a).querySelector('.eg'); return el ? `<li>${esc(plain(el).replace(/^Example:\s*/, '').slice(0, 170))}</li>` : ''; }).join('');
    $(`<div class="crumb"><a href="#/">Home</a> / <a href="#/${id}">${e2(sub.title)}</a> / Last-night sheet</div>
       <section class="banner"><span class="bico">🌙</span><div><h1>${e2(sub.title)} · Last-night revision sheet</h1>
       <p>Most-likely questions (★★ and ★★★) with one-line definitions, formula boxes with answers, and answer skeletons. Print or save as PDF.</p></div>
       <div class="bact"><button class="btn solid" id="sprint">🖨 Print / Save PDF</button><a class="btn solid" href="#/${id}/qa">✍️ Full Q&amp;A</a></div></section>
       <div class="sheet">
         <section class="ssec"><h2>1 · Definitions (2 marks)</h2><ul class="sdef">${defs}</ul></section>
         ${nums ? `<section class="ssec"><h2>2 · Numericals - formula and final answer</h2><div class="sgrid">${nums}</div></section>` : ''}
         <section class="ssec"><h2>3 · Short, medium and long answers - skeletons</h2><p class="expl">Open the full answer in the Q&amp;A bank; write each chip as a heading and add one line + example.</p>${rest}</section>
         ${egs ? `<section class="ssec"><h2>4 · Examples to quote</h2><ul class="sdef">${egs}</ul></section>` : ''}
       </div>`);
    document.getElementById('sprint').onclick = () => window.print();
  }
  window.ExamQA.sheet = sheet;

  function add(id, items) {
    const sub = window.SUBJECTS && window.SUBJECTS[id];
    if (!sub) return;
    window.ExamQA.data[id] = (window.ExamQA.data[id] || []).concat(items);
    const all = window.ExamQA.data[id];
    const old = sub.units.findIndex((u) => u.id === 'qa');
    const unit = { id: 'qa', title: '✍️ Exam Q&A bank (' + all.length + ')', html: html(id, all), after: () => init(id, all) };
    if (old >= 0) sub.units[old] = unit; else sub.units.unshift(unit);
  }

  function html(id, all) {
    const units = [...new Set(all.map((q) => q.u))];
    const cnt = (m) => all.filter((q) => m.includes(q.m)).length;
    return `
    <div class="box"><b>How to use:</b> every question has a <b>model answer</b> written the way you can write it in the exam, with the <b>marking scheme</b> and where it was asked. Tap a question to open its answer. Tick <b>Revised</b> to track yourself. ★★★ = very likely (asked in your PDFs).</div>
    <section class="guide"><h3>✍️ How much to write</h3>
      <div class="gtable">
        <div><b>2 marks</b><span>Definition + 1 point or example · 3-4 lines · 2 min</span></div>
        <div><b>3 marks</b><span>Intro line + 3 points (or a short numerical) · 8-10 lines · 4 min</span></div>
        <div><b>5-6 marks</b><span>Intro + 5-6 headed points + example/table · 1 page · 8-10 min</span></div>
        <div><b>10 marks</b><span>Intro · headings · table/diagram · example · conclusion · 2 pages · 15-18 min</span></div>
      </div>
      <p class="expl">Numericals: write the formula first, show every step, box the final answer with units (₹, %, years). Marks are given for method.</p></section>
    <div class="ftools"><input id="qasearch" type="search" placeholder="Search a question (e.g. NPV, leverage, STP)…" aria-label="Search questions">
      <div class="fchips" id="qamarks"><button class="on" data-m="">All (${all.length})</button><button data-m="2">2 marks · very short (${cnt([2])})</button><button data-m="3">3 marks · short (${cnt([3])})</button><button data-m="5,6">5-6 marks · medium (${cnt([5, 6])})</button><button data-m="10">10 marks · long (${cnt([10])})</button><button data-m="p3">🔮 Most predicted (${all.filter((q) => q.p === 3).length})</button></div>
      <div class="row"><select id="qaunit" aria-label="Unit"><option value="">All units</option>${units.map((u) => `<option>${esc(u)}</option>`).join('')}</select>
        <label><input type="checkbox" id="qahide"> Hide revised</label>
        <button class="btn" id="qaall">Open all</button><button class="btn" id="qaclose">Close all</button>
        <button class="btn solid" id="qamock">🎲 Mock paper</button>
        <a class="btn solid" href="#/sheet/${id}">🌙 Last-night sheet</a>
        <span class="expl" id="qacount"></span></div></div>
    <div id="qamockbox"></div>
    <div id="qalist">${all.map((q, i) => item(q, i)).join('')}</div>
    <p class="expl" id="qanone" hidden>No question matches the filters.</p>`;
  }

  function item(q, i) {
    return `<details class="qa" data-i="${i}" data-m="${q.m}" data-u="${esc(q.u)}" data-p="${q.p}" data-s="${esc((q.q + ' ' + q.u + ' ' + q.t).toLowerCase())}">
      <summary><span class="mk m${q.m}">${q.m}</span><span class="qt">${q.q}</span><span class="st" title="${LIKE[q.p]}">${STAR[q.p]}</span></summary>
      <div class="qtags">${esc(q.u)} · ${esc(q.t)} · ${LIKE[q.p]}</div>
      <div class="ans">${q.a}
        ${q.ms ? `<div class="msch"><b>📝 Marking scheme:</b> ${q.ms}</div>` : ''}
        ${q.src ? `<div class="src"><b>📌 Asked in:</b> ${q.src}</div>` : ''}
        <label class="done"><input type="checkbox" data-k="${i}"> ✔ I have revised this</label></div></details>`;
  }

  function init(id, all) {
    const list = document.getElementById('qalist');
    if (!list) return;
    const store = window.App.store;
    const key = 'qa_' + id;
    let done = store.get(key, {});
    let marks = '', unitSel = '', term = '', hideDone = false;
    const sig = (i) => all[i].m + '|' + all[i].q.slice(0, 40);

    list.querySelectorAll('input[data-k]').forEach((c) => {
      c.checked = !!done[sig(c.dataset.k)];
      c.onchange = () => { if (c.checked) done[sig(c.dataset.k)] = 1; else delete done[sig(c.dataset.k)]; store.set(key, done); apply(); };
    });

    function apply() {
      let n = 0, d = 0;
      list.querySelectorAll('.qa').forEach((el) => {
        const q = all[+el.dataset.i];
        const isDone = !!done[sig(el.dataset.i)];
        el.classList.toggle('revised', isDone);
        if (isDone) d++;
        const okM = !marks || (marks === 'p3' ? q.p === 3 : marks.split(',').map(Number).includes(q.m));
        const show = okM && (!unitSel || q.u === unitSel) && (!term || el.dataset.s.includes(term)) && !(hideDone && isDone);
        el.hidden = !show;
        if (show) n++;
      });
      document.getElementById('qanone').hidden = n > 0;
      document.getElementById('qacount').textContent = n + ' shown · ' + d + '/' + all.length + ' revised';
    }
    document.getElementById('qamarks').onclick = (e) => {
      const b = e.target.closest('button'); if (!b) return;
      marks = b.dataset.m;
      document.querySelectorAll('#qamarks button').forEach((x) => x.classList.toggle('on', x === b));
      apply();
    };
    document.getElementById('qaunit').onchange = (e) => { unitSel = e.target.value; apply(); };
    document.getElementById('qasearch').oninput = (e) => { term = e.target.value.trim().toLowerCase(); apply(); };
    document.getElementById('qahide').onchange = (e) => { hideDone = e.target.checked; apply(); };
    document.getElementById('qaall').onclick = () => list.querySelectorAll('.qa:not([hidden])').forEach((d) => { d.open = true; });
    document.getElementById('qaclose').onclick = () => list.querySelectorAll('.qa').forEach((d) => { d.open = false; });
    document.getElementById('qamock').onclick = () => mock(id, all);
    apply();
  }

  function mock(id, all) {
    const box = document.getElementById('qamockbox');
    const presets = PRESETS[id] || PRESETS.finance;
    box.innerHTML = `<section class="mockp"><h3>🎲 Mock written paper</h3>
      <div class="row"><select id="mpre">${presets.map((p) => `<option value="${p.id}">${p.name}</option>`).join('')}<option value="custom">Custom pattern (enter your own)</option></select>
      <button class="btn solid" id="mgo">Generate paper</button><button class="btn" id="mreveal" hidden>Show model answers</button><button class="btn" id="mprint" hidden>🖨 Print</button><button class="btn" id="mclose">✕</button></div>
      <div class="row" id="mcust" hidden><span>How many questions of:</span>${[2, 3, 5, 6, 10].map((m) => `<label>${m}-mark <input type="number" min="0" max="15" value="0" data-m="${m}" style="width:60px"></label>`).join('')}</div>
      <div id="mpaper"></div></section>`;
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.getElementById('mclose').onclick = () => { box.innerHTML = ''; };
    document.getElementById('mpre').onchange = (e) => { document.getElementById('mcust').hidden = e.target.value !== 'custom'; };
    document.getElementById('mgo').onclick = () => {
      let p = presets.find((x) => x.id === document.getElementById('mpre').value);
      if (!p) {
        const parts = [];
        document.querySelectorAll('#mcust input').forEach((i, k) => { const n = parseInt(i.value, 10) || 0; if (n > 0) parts.push(['Section ' + 'ABCDE'[k] + ' (' + i.dataset.m + '-mark)', +i.dataset.m, n]); });
        p = { parts: parts.length ? parts : [['Section A', 3, 4]] };
      }
      const used = new Set();
      let n = 0, total = 0;
      const out = p.parts.map(([name, m, c]) => {
        const pool = all.map((q, i) => ({ q, i })).filter((x) => x.q.m === m && !used.has(x.i)).sort((a, b) => (b.q.p + Math.random()) - (a.q.p + Math.random()));
        const pick = pool.slice(0, c);
        pick.forEach((x) => used.add(x.i));
        total += pick.length * m;
        return `<h4>${name} - ${pick.length} × ${m} marks</h4>` + pick.map((x) => { n++; return `<div class="mq"><b>Q${n}.</b> ${x.q.q} <span class="mkr">[${m}]</span><div class="mans" hidden>${x.q.a}</div></div>`; }).join('');
      }).join('');
      document.getElementById('mpaper').innerHTML = `<div class="paperhead"><b>Total marks: ${total}</b> · Attempt all · Write the formula and steps for numericals</div>${out}`;
      document.getElementById('mreveal').hidden = false;
      document.getElementById('mprint').hidden = false;
    };
    document.getElementById('mreveal').onclick = () => document.querySelectorAll('#mpaper .mans').forEach((a) => { a.hidden = !a.hidden; });
    document.getElementById('mprint').onclick = () => window.print();
    document.getElementById('mgo').click();
  }
})();
