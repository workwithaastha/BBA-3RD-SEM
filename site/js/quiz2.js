// Quiz redesign: setup screen with mode cards + unit chips, one-question-at-a-time practice and mock exam (focus mode, navigator, flag for review,
// submit summary), results screen (score ring, unit bars, "what next" links to the notes, full review) and "revise later" marks.
// Loaded after app.js and ui2.js: it replaces the global functions quiz(), run() and mock() and reuses record(), sessionDone(), store, S, PATTERN, esc.
(function () {
  const L4 = 'ABCD';
  const fmt = (t) => String(Math.floor(t / 60)).padStart(2, '0') + ':' + String(t % 60).padStart(2, '0');
  const ROM = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6 };
  const unitNo = (label) => { const m = /Unit\s+([IVX]+|\d+)/i.exec(label || ''); if (!m) return 0; return ROM[m[1].toUpperCase()] || +m[1] || 0; };
  const qkey = (sid, m) => sid + '|' + m.n + '|' + m.q.slice(0, 40);
  const sidOf = () => location.hash.split('/')[1];
  // full-paper size per subject (objective papers): [questions, seconds per question, label]
  // real college PUT paper: attempt 75 of the 100 questions - [questions, seconds per question, label]
  const PUTP = { 'business-env': [75, 72, '90 minutes'], 'office-mgmt': [75, 48, '60 minutes'] };
  const PAPER = { 'office-mgmt': [60, 60, '1 hour'], 'business-env': [90, 60, '1.5 hours'], 'physical-education': [75, 72, '90 minutes'] };

  // ---------- revise-later marks ----------
  const revise = { has: (k) => !!store.get('revise', {})[k], toggle(k) { const r = store.get('revise', {}); if (r[k]) delete r[k]; else r[k] = 1; store.set('revise', r); return !!r[k]; } };

  // ---------- focus mode (mock exam) ----------
  const focus = (on) => document.body.classList.toggle('focusq', !!on);
  addEventListener('hashchange', () => focus(false));

  // ---------- unit stats for the chips ----------
  function unitStats(sid, u) {
    const s = S[sid];
    const all = store.get('stats', {});
    const w = store.get('wrong', {});
    let c = 0, t = 0;
    Object.entries(all).forEach(([k, v]) => { const p = k.split('|'); if (p[0] === sid && p[1] === u) { c += v.c; t += v.t; } });
    const qs = s.mcqs.filter((m) => m.u === u);
    const wrong = qs.filter((m) => w[qkey(sid, m)]).length;
    return { n: qs.length, t, acc: t ? Math.round((c / t) * 100) : 0, wrong };
  }
  const weakPool = (sid) => { const w = store.get('wrong', {}); const r = store.get('revise', {}); return S[sid].mcqs.filter((m) => w[qkey(sid, m)] || r[qkey(sid, m)]); };

  // ======================================================= SETUP
  quiz = function (id, topic) {
    const s = S[id];
    if (!s || !s.mcqs.length) return subject(id);
    setTheme(id);
    const units = [...new Set(s.mcqs.map((m) => m.u))];
    const paper = PAPER[id] || [30, 60, '30 minutes'];
    const weak = weakPool(id).length;
    const st = { mode: 'practice', unit: '', topic: topic || '' };
    if (topic) { const hit = s.mcqs.find((m) => m.t === topic); if (hit) st.unit = hit.u; }
    $(`<div class="crumb"><a href="#/">Home</a> / <a href="#/${id}">${esc(s.title)}</a> / Quiz</div>
      <section class="qsetup">
        <h1>Quiz</h1>
        ${PATTERN[id] ? `<p class="box">${PATTERN[id]}</p>` : ''}
        <h2 class="qs-h"><i>1</i> Choose a mode</h2>
        <div class="mcards" id="mcards">
          <button class="mcard on" data-mode="practice"><b>🎯 Practice</b><span>Answer and reason after every question</span><em>Untimed</em></button>
          <button class="mcard" data-mode="mock"><b>⏱ Mock exam</b><span>Full paper, answers only at the end, flag questions for review</span><em>${paper[0]} Qs · ${paper[2]}</em></button>
          <button class="mcard" data-mode="unit"><b>📚 Unit test</b><span>Timed test of one unit, then a unit-wise report</span><em>25 Qs · pick a unit</em></button>
          <button class="mcard${weak ? '' : ' off'}" data-mode="weak"><b>🔁 Weak spots</b><span>Questions you got wrong or marked "revise later"</span><em>${weak} waiting</em></button>
          <a class="mcard" href="#/daily"><b>🔥 Daily 20</b><span>20 mixed questions across all subjects, weak topics first</span><em>New every day</em></a>
        </div>
        <h2 class="qs-h"><i>2</i> Choose what to cover</h2>
        <div class="uchips" id="uchips">
          <button class="uchip on" data-u=""><span class="rg" style="--p:0"><b>All</b></span><span class="ut">All units<small>${s.mcqs.length} questions</small></span></button>
          ${units.map((u) => { const x = unitStats(id, u); return `<button class="uchip" data-u="${esc(u)}"><span class="rg" style="--p:${x.acc}"><b>${x.t ? x.acc + '%' : '–'}</b></span><span class="ut">${esc(u)}<small>${x.n} Qs${x.wrong ? ' · ' + x.wrong + ' wrong' : ''}</small></span></button>`; }).join('')}
        </div>
        <details class="qopts"><summary>⚙ Customise (topic, number of questions, shuffle, time)</summary>
          <div class="row">
            <select id="qt" aria-label="Topic"><option value="">All topics</option></select>
            <select id="qn" aria-label="Number of questions"><option value="10">10 Qs</option><option value="20" selected>20 Qs</option><option value="50">50 Qs</option><option value="0">All</option></select>
            <label><input type="checkbox" id="qs" checked> Shuffle</label>
            <select id="qd" aria-label="Time per question"><option value="30">30 s / Q</option><option value="45">45 s / Q</option><option value="60" selected>60 s / Q</option><option value="72">72 s / Q</option><option value="90">90 s / Q</option></select>
          </div>
        </details>
        <p class="expl" id="qc"></p>
        <button class="startbig" id="go">▶ Start</button>
      </section><div id="srcstrip"></div><div id="qa"></div>`);
    const $id = (x) => document.getElementById(x);
    const pool = () => {
      let p = st.mode === 'weak' ? weakPool(id) : s.mcqs;
      return p.filter((m) => (!st.unit || m.u === st.unit) && (!$id('qt').value || m.t === $id('qt').value));
    };
    const label = () => ({ practice: 'Practice', mock: 'Mock exam', unit: 'Unit test', weak: 'Weak spots' }[st.mode]);
    const refresh = () => {
      const topics = [...new Set(s.mcqs.filter((m) => !st.unit || m.u === st.unit).map((m) => m.t).filter(Boolean))];
      const cur = st.topic;
      $id('qt').innerHTML = '<option value="">All topics</option>' + topics.map((t) => `<option${t === cur ? ' selected' : ''}>${esc(t)}</option>`).join('');
      st.topic = $id('qt').value;
      const n = pool().length;
      const pp = st.unit === 'PUT Paper' && PUTP[id];
      const want = st.mode === 'mock' ? (pp ? pp[0] : paper[0]) : st.mode === 'unit' ? 25 : +$id('qn').value || n;
      const real = Math.min(n, want);
      $id('qc').textContent = n + ' questions available' + (st.mode === 'mock' ? (pp ? ' · PUT format: attempt ' + pp[0] + ' of 100 in ' + pp[2] : ' · full paper ' + paper[0] + ' questions in ' + paper[2]) : '');
      $id('go').textContent = '▶ Start ' + label() + (st.unit ? ' · ' + st.unit : ' · all units') + ' · ' + real + ' questions';
      $id('go').disabled = !n;
      document.querySelectorAll('.uchip').forEach((b) => b.classList.toggle('on', b.dataset.u === st.unit));
      document.querySelectorAll('.mcard[data-mode]').forEach((b) => b.classList.toggle('on', b.dataset.mode === st.mode));
      if (window.Sources) window.Sources.quizStrip(id, st.unit);
    };
    $id('mcards').querySelectorAll('.mcard[data-mode]').forEach((b) => {
      b.onclick = () => {
        if (b.classList.contains('off')) return;
        st.mode = b.dataset.mode;
        if (st.mode === 'unit' && !st.unit) st.unit = units[0];
        refresh();
      };
    });
    $id('uchips').querySelectorAll('.uchip').forEach((b) => { b.onclick = () => { st.unit = b.dataset.u; st.topic = ''; refresh(); }; });
    $id('qt').onchange = () => { st.topic = $id('qt').value; refresh(); };
    $id('qn').onchange = refresh;
    refresh();
    $id('go').onclick = () => {
      let qs = pool();
      if ($id('qs').checked || st.mode !== 'practice') qs = qs.slice().sort(() => Math.random() - 0.5);
      const pq = st.unit === 'PUT Paper' && PUTP[id];
      if (st.mode === 'mock') mock(qs.slice(0, pq ? pq[0] : paper[0]), pq ? pq[1] : paper[1]);
      else if (st.mode === 'unit') mock(qs.slice(0, 25), +$id('qd').value, 'unit');
      else if (st.mode === 'weak') run(qs.slice(0, +$id('qn').value || qs.length), id, false, 'wrongset');
      else { const n = +$id('qn').value; run(n ? qs.slice(0, n) : qs); }
      const su = document.querySelector('.qsetup'); if (su) su.hidden = true;
      const ss = document.getElementById('srcstrip'); if (ss) ss.hidden = true;
      window.scrollTo(0, 0);
    };
  };

  // ======================================================= RESULTS (shared by practice and mock)
  function results(box, o) {
    const { qs, ans, sid, kind, mixed, secs, auto } = o;
    let score = 0, skipped = 0;
    const byUnit = {};
    qs.forEach((m, i) => {
      const ok = ans[i] === m.a;
      if (ans[i] < 0) skipped++;
      if (ok) score++;
      const key = m._id ? (S[m._id] ? S[m._id].title + ' · ' : '') + m.u : m.u;
      const u = byUnit[key] || (byUnit[key] = { r: 0, t: 0, u: m.u, sid: m._id || sid });
      u.t++;
      if (ok) u.r++;
    });
    const pct = Math.round((score / qs.length) * 100);
    const wrongQs = qs.filter((m, i) => ans[i] >= 0 && ans[i] !== m.a || ans[i] < 0);
    const msg = pct >= 90 ? 'Excellent! Exam-ready on this set.' : pct >= 70 ? 'Good work - fix the wrong ones and you are there.' : pct >= 40 ? 'Getting there - revise the weak units below.' : 'Keep going - read the notes, then try again.';
    const units = Object.entries(byUnit);
    const weakU = units.filter(([, v]) => v.r / v.t < 0.7 && unitNo(v.u));
    const next = [];
    if (wrongQs.length) next.push(`<button class="nx" id="rw">🔁 Retry the ${wrongQs.length} wrong / skipped questions</button>`);
    weakU.forEach(([, v]) => {
      const n = unitNo(v.u);
      const notes = (S[v.sid] && S[v.sid].units || []).filter((x) => new RegExp('^u' + n + '(-|$)').test(x.id));
      if (notes.length) next.push(`<a class="nx" href="#/${v.sid}/${notes[0].id}">📖 Revise ${esc(v.u)} notes (${notes.length} page${notes.length > 1 ? 's' : ''}) - you scored ${Math.round((v.r / v.t) * 100)}%</a>`);
    });
    if (!wrongQs.length) next.push('<span class="nx ok">🎉 No wrong answers - try a mock exam next.</span>');
    next.push('<button class="nx" id="again">▶ New quiz</button>');
    box.innerHTML = `<section class="qres">
      <div class="rtop">
        <div class="score" style="--p:${pct}"><b>${pct}%</b><span>${score}/${qs.length}</span></div>
        <div><h2>${auto ? 'Time up! ' : ''}${esc(msg)}</h2>
          <div class="rchips"><span class="c ok">✅ ${score} correct</span><span class="c bad">❌ ${qs.length - score - skipped} wrong</span><span class="c">⏭ ${skipped} skipped</span>${secs ? `<span class="c">⏱ ${fmt(secs)}</span>` : ''}</div></div>
      </div>
      <h3>Unit-wise result</h3>
      <div class="ubars">${units.map(([k, v]) => { const p = Math.round((v.r / v.t) * 100); return `<div class="ub"><span>${esc(k)}</span><div class="bar2"><i class="${p >= 70 ? 'g' : p >= 40 ? 'm' : 'b'}" style="width:${p}%"></i></div><b>${v.r}/${v.t}</b></div>`; }).join('')}</div>
      <h3>What to do next</h3><div class="nexts">${next.join('')}</div>
      <h3>Review your answers</h3>
      <div class="row"><button class="btn primary" id="onlyw">Wrong / skipped only (${wrongQs.length})</button><button class="btn" id="allr">All ${qs.length} questions</button></div>
      <div id="rev"></div></section>`;
    const render = (onlyWrong) => {
      document.getElementById('rev').innerHTML = qs.map((m, i) => {
        const ok = ans[i] === m.a;
        if (onlyWrong && ok) return '';
        const k = ans[i];
        const rid = m._id || sid;
        const opts = m.o.map((o2, j) => `<div class="opt ${j === m.a ? 'ok' : j === k ? 'bad' : ''}"><span class="ol">${L4[j]}</span><span class="ot">${esc(o2)}${j === k ? ' <em>(your answer)</em>' : ''}</span></div>`).join('');
        const why = (m.e || '').replace(/^\(\?\)\s*Not sure - check with your teacher\.\s*/, '');
        const wy = k >= 0 && k !== m.a && m.w && m.w[k] ? `<div class="why"><b>Why your answer is wrong:</b> ${esc(m.w[k])}</div>` : '';
        return `<div class="q rq ${ok ? 'rok' : 'rbad'}"><span class="tag where">📚 ${esc(m.u)}${m.t ? ' · ' + esc(m.t) : ''}</span>${m.c ? `<div class="box">${esc(m.c)}</div>` : ''}<p><b>${i + 1}. ${esc(m.q)}</b></p>${opts}<div class="expl">${k < 0 ? '<b>Not answered.</b> ' : ''}${why ? `<div class="why"><b>Why it is correct:</b> ${esc(why)}</div>` : ''}${wy}</div>
          <button class="btn rv${revise.has(qkey(rid, m)) ? ' on' : ''}" data-i="${i}">${revise.has(qkey(rid, m)) ? '🔖 Marked to revise' : '🔖 Revise later'}</button></div>`;
      }).join('') || '<p class="expl">Nothing to review - all correct!</p>';
      document.querySelectorAll('#rev .rv').forEach((b) => { b.onclick = () => { const m = qs[+b.dataset.i]; const on = revise.toggle(qkey(m._id || sid, m)); b.classList.toggle('on', on); b.textContent = on ? '🔖 Marked to revise' : '🔖 Revise later'; }; });
    };
    render(true);
    document.getElementById('onlyw').onclick = () => render(true);
    document.getElementById('allr').onclick = () => render(false);
    const rw = document.getElementById('rw');
    if (rw) rw.onclick = () => { window.scrollTo(0, 0); run(wrongQs, sid, mixed, kind === 'mock' ? 'wrongset' : kind); };
    document.getElementById('again').onclick = () => { if (mixed || kind === 'daily') route(); else quiz(sid); };
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ======================================================= PRACTICE (one question at a time, answer after each)
  run = function (qs, sid, mixed, kind) {
    sid = sid || sidOf();
    const box = document.getElementById('qa');
    if (!qs.length) { box.innerHTML = '<p class="expl">No questions to practise here yet.</p>'; return; }
    focus(false);
    const ans = new Array(qs.length).fill(-1);
    let i = 0, score = 0;
    const t0 = Date.now();
    const show = () => {
      if (i >= qs.length) {
        sessionDone(sid, score, qs.length, kind);
        return results(box, { qs, ans, sid, kind, mixed, secs: Math.round((Date.now() - t0) / 1000) });
      }
      const m = qs[i];
      const rid = mixed ? m._id : sid;
      const meta = (S[rid] && mixed ? S[rid].title + ' · ' : '');
      box.innerHTML = `<div class="qhead"><div class="bar"><i style="width:${(i / qs.length) * 100}%"></i></div>
        <div class="qmeta"><b>Question ${i + 1} of ${qs.length}</b><button class="btn backq" id="bq">← Change mode</button><span class="sc"><span class="ok">✅ ${score}</span><span class="bad">❌ ${i - score}</span></span></div></div>
        <div class="q"><span class="tag where">📚 ${esc(meta)}${esc(m.u)}${m.t ? ' · ' + esc(m.t) : ''}</span>${m.x ? ' <span class="tag gen">extra: not in PDFs</span>' : m.g ? ' <span class="tag gen">generated from PDF notes</span>' : ''}${m.p ? ` <span class="tag gen">📝 ${esc(m.p)}</span>` : ''}${m.k ? ' <span class="tag gen">⚠ answer not sure</span>' : ''}
        ${m.c ? `<div class="box">${esc(m.c)}</div>` : ''}
        <p class="qtext"><b>${esc(m.q)}</b></p>${m.o.map((o, k) => `<button class="opt" data-k="${k}"><span class="ol">${L4[k]}</span><span class="ot">${esc(o)}</span></button>`).join('')}<div class="expl" id="ex"></div></div>`;
      document.getElementById('bq').onclick = () => { if (mixed || kind === 'daily') route(); else quiz(sid); };
      box.querySelectorAll('.opt').forEach((b) => {
        b.onclick = () => {
          const k = +b.dataset.k;
          ans[i] = k;
          box.querySelectorAll('.opt').forEach((x) => { x.disabled = true; if (+x.dataset.k === m.a) x.classList.add('ok'); });
          if (k === m.a) score++; else b.classList.add('bad');
          record(rid, m, k === m.a);
          const ex = document.getElementById('ex');
          ex.className = 'expl rbox ' + (k === m.a ? 'exok' : 'exbad');
          const metaRe = /question \d+|Unit \d Q\d|asks for|statement given/i.test(m.e || '');
          const why = m.e && !metaRe ? m.e.replace(/^\(\?\)\s*Not sure - check with your teacher\.\s*/, '') : '';
          const wy = m.w && m.w[k] ? m.w[k] : '';
          const others = (m.w || []).map((r, j) => (r && j !== k && j !== m.a ? `<li><b>${L4[j]}</b> - ${esc(r)}</li>` : '')).join('');
          ex.innerHTML = `<div class="verdict">${k === m.a ? '✅ Correct!' : '❌ Not quite'}</div>` +
            (k !== m.a ? `<p>You chose <b>${L4[k]}. ${esc(m.o[k])}</b>.</p>` : '') + `<p>Correct answer: <b>${L4[m.a]}. ${esc(m.o[m.a])}</b></p>` +
            (why ? `<div class="why"><b>Why it is correct:</b> ${esc(why)}</div>` : '') +
            (k !== m.a && wy ? `<div class="why bad"><b>Why your answer is wrong:</b> ${esc(wy)}</div>` : '') +
            (others ? `<details class="why-o"><summary>Why the other options are wrong</summary><ul>${others}</ul></details>` : '');
          if (window.Rewards && window.Rewards.face) window.Rewards.face(k === m.a);
          const rv = document.createElement('button');
          const key = qkey(rid, m);
          rv.className = 'btn rv' + (revise.has(key) ? ' on' : '');
          rv.textContent = revise.has(key) ? '🔖 Marked to revise' : '🔖 Revise later';
          rv.onclick = () => { const on = revise.toggle(key); rv.classList.toggle('on', on); rv.textContent = on ? '🔖 Marked to revise' : '🔖 Revise later'; };
          ex.appendChild(rv);
          const n = document.createElement('button');
          n.className = 'btn primary';
          n.textContent = i + 1 < qs.length ? 'Next →' : 'Finish ✓';
          n.onclick = () => { i++; show(); window.scrollTo({ top: box.offsetTop - 70, behavior: 'smooth' }); };
          box.appendChild(n);
          n.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        };
      });
    };
    show();
  };

  // ======================================================= MOCK / UNIT TEST (timed, answers at the end)
  mock = function (qs, secPerQ, kind) {
    clearInterval(mockTimer);
    if (!qs.length) return;
    const sid = sidOf();
    const box = document.getElementById('qa');
    const ans = new Array(qs.length).fill(-1);
    const flag = new Array(qs.length).fill(false);
    const total = qs.length * secPerQ;
    let cur = 0, left = total, done = false, summary = false;
    focus(true);
    window.__mockKeys = null;

    const finish = (auto) => {
      if (done) return;
      done = true;
      clearInterval(mockTimer);
      focus(false);
      window.__mockKeys = null;
      let score = 0;
      qs.forEach((m, i) => { if (ans[i] === m.a) score++; if (ans[i] >= 0) record(sid, m, ans[i] === m.a); });
      sessionDone(sid, score, qs.length, 'mock');
      results(box, { qs, ans, sid, kind: 'mock', secs: total - Math.max(0, left), auto });
    };

    const show = () => {
      if (summary) return showSummary();
      const m = qs[cur];
      const answered = ans.filter((a) => a >= 0).length;
      const nav = qs.map((_, i) => `<button class="nb${i === cur ? ' cur' : ''}${ans[i] >= 0 ? ' ans' : ''}${flag[i] ? ' flg' : ''}" data-i="${i}" aria-label="Question ${i + 1}">${i + 1}</button>`).join('');
      box.innerHTML = `<div class="mockbar"><span class="timer${left <= 300 ? ' low' : ''}" id="tm">⏱ ${fmt(left)}</span><span class="mp"><b>${answered}</b>/${qs.length} answered${flag.some(Boolean) ? ' · 🚩 ' + flag.filter(Boolean).length : ''}</span><button class="btn" id="ex2">Exit</button><button class="btn primary" id="sub">Submit</button></div>
        <div class="bar"><i style="width:${(answered / qs.length) * 100}%"></i></div>
        <div class="q"><span class="tag where">📚 ${esc(m.u)}${m.t ? ' · ' + esc(m.t) : ''}</span> <span class="qno">Question ${cur + 1} of ${qs.length}</span>${m.c ? `<div class="box">${esc(m.c)}</div>` : ''}
          <p class="qtext"><b>${esc(m.q)}</b></p>${m.o.map((o, k) => `<button class="opt${ans[cur] === k ? ' sel' : ''}" data-k="${k}"><span class="ol">${L4[k]}</span><span class="ot">${esc(o)}</span></button>`).join('')}</div>
        <div class="mnav"><button class="btn" id="pv"${cur === 0 ? ' disabled' : ''}>← Previous</button><button class="btn${flag[cur] ? ' on' : ''}" id="fl">${flag[cur] ? '🚩 Flagged' : '🚩 Flag for review'}</button><button class="btn" id="cl">Clear</button><button class="btn primary" id="nx">${cur === qs.length - 1 ? 'Review & submit' : 'Next →'}</button></div>
        <details class="navwrap"${innerWidth > 700 ? ' open' : ''}><summary>Question navigator</summary><div class="navg">${nav}</div><p class="legend"><i class="a"></i> answered <i class="f"></i> flagged <i class="c"></i> current</p></details>`;
      box.querySelectorAll('.opt').forEach((b) => { b.onclick = () => { ans[cur] = +b.dataset.k; show(); }; });
      box.querySelectorAll('.nb').forEach((b) => { b.onclick = () => { cur = +b.dataset.i; show(); }; });
      document.getElementById('pv').onclick = () => { cur--; show(); };
      document.getElementById('nx').onclick = () => { if (cur === qs.length - 1) { summary = true; show(); } else { cur++; show(); } };
      document.getElementById('fl').onclick = () => { flag[cur] = !flag[cur]; show(); };
      document.getElementById('cl').onclick = () => { ans[cur] = -1; show(); };
      document.getElementById('sub').onclick = () => { summary = true; show(); };
      document.getElementById('ex2').onclick = () => { if (confirm('Leave the exam? Your answers will be lost.')) { clearInterval(mockTimer); focus(false); window.__mockKeys = null; quiz(sid); } };
    };

    const showSummary = () => {
      const un = qs.map((_, i) => i).filter((i) => ans[i] < 0);
      const fl = qs.map((_, i) => i).filter((i) => flag[i]);
      box.innerHTML = `<div class="mockbar"><span class="timer${left <= 300 ? ' low' : ''}" id="tm">⏱ ${fmt(left)}</span><span class="mp">Review before submitting</span></div>
        <section class="qres"><h2>Ready to submit?</h2>
          <div class="rchips"><span class="c ok">✅ ${qs.length - un.length} answered</span><span class="c bad">⭕ ${un.length} unanswered</span><span class="c">🚩 ${fl.length} flagged</span></div>
          ${un.length ? `<p>Unanswered: ${un.map((i) => `<button class="nb" data-i="${i}">${i + 1}</button>`).join(' ')}</p>` : ''}
          ${fl.length ? `<p>Flagged: ${fl.map((i) => `<button class="nb flg" data-i="${i}">${i + 1}</button>`).join(' ')}</p>` : ''}
          <div class="row"><button class="btn" id="back">← Back to questions</button><button class="btn primary" id="fin">Submit exam now</button></div></section>`;
      box.querySelectorAll('.nb').forEach((b) => { b.onclick = () => { cur = +b.dataset.i; summary = false; show(); }; });
      document.getElementById('back').onclick = () => { summary = false; show(); };
      document.getElementById('fin').onclick = () => finish(false);
    };

    // keyboard: arrows move, F flags (1-4 / A-D answered by the shared handler in ui2.js)
    window.__mockKeys = (e) => {
      if (summary || done) return;
      if (e.key === 'ArrowRight' && cur < qs.length - 1) { cur++; show(); }
      else if (e.key === 'ArrowLeft' && cur > 0) { cur--; show(); }
      else if (e.key.toLowerCase() === 'f') { flag[cur] = !flag[cur]; show(); }
    };
    show();
    mockTimer = setInterval(() => {
      left--;
      const t = document.getElementById('tm');
      if (t) { t.textContent = '⏱ ' + fmt(Math.max(0, left)); if (left <= 300) t.classList.add('low'); }
      if (left <= 0) finish(true);
    }, 1000);
  };
  document.addEventListener('keydown', (e) => {
    if (!window.__mockKeys || e.ctrlKey || e.metaKey || e.altKey) return;
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    window.__mockKeys(e);
  });
})();
