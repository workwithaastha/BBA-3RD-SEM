// Hash-routed SPA. Data: window.SUBJECTS[id] = {title, type:'notes'|'mcq', units:[{id,title,html}], mcqs:[{u,q,o:[],a,e}]}
const S = window.SUBJECTS || {};
const app = document.getElementById('app');
const $ = (h) => { app.innerHTML = h; };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage blocked */ } },
};

document.documentElement.dataset.theme = store.get('theme', 'light');
document.getElementById('theme').onclick = () => {
  const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = t;
  store.set('theme', t);
};
document.getElementById('search').addEventListener('input', (e) => {
  const q = e.target.value.trim();
  location.hash = q.length > 1 ? '#/search/' + encodeURIComponent(q) : '#/';
});

const ICON = { finance: '💰', marketing: '📣', 'business-env': '🌍', hrm: '👥', 'office-mgmt': '🗂️' };
const BLURB = {
  finance: 'TVM, bonds & stocks, capital budgeting, leverage',
  marketing: 'Core concepts, consumer behaviour, research, STP',
  'business-env': 'PESTLE, LPG, ethics, CSR, case-based questions',
  hrm: 'HRP, appraisal, compensation, industrial relations',
  'office-mgmt': 'Filing, secretarial practice, forms, meetings',
};


// ---- progress tracker (browser only, localStorage) ----
function topicKey(id, m) { return id + '|' + m.u + '|' + (m.t || ''); }
function record(id, m, ok) {
  const all = store.get('stats', {});
  const k = topicKey(id, m);
  const e = all[k] || { c: 0, t: 0 };
  e.t++;
  if (ok) e.c++;
  all[k] = e;
  store.set('stats', all);
  const w = store.get('wrong', {});
  const qk = id + '|' + m.n + '|' + m.q.slice(0, 40);
  const wasWrong = !!w[qk];
  if (ok) delete w[qk]; else w[qk] = 1;
  store.set('wrong', w);
  if (window.Rewards) window.Rewards.onAnswer(ok, wasWrong, id);
}
function sessionDone(id, score, total, kind) {
  const h = store.get('hist', []);
  h.push({ id, score, total, at: Date.now() });
  store.set('hist', h.slice(-30));
  if (window.Rewards) window.Rewards.onSession(score, total, kind);
}
function progress() {
  setTheme('');
  const all = store.get('stats', {});
  const hist = store.get('hist', []);
  const rows = Object.entries(all).map(([k, v]) => {
    const [id, u, t] = k.split('|');
    return { id, u, t, c: v.c, n: v.t, p: Math.round((v.c / v.t) * 100) };
  }).sort((a, b) => a.p - b.p || b.n - a.n);
  const weak = rows.filter((r) => r.n >= 3 && r.p < 70);
  const tot = rows.reduce((a, r) => ({ c: a.c + r.c, n: a.n + r.n }), { c: 0, n: 0 });
  const wrongCount = Object.keys(store.get('wrong', {})).length;
  $(`<div class="crumb"><a href="#/">Home</a> / My progress</div>
     <section class="banner"><span class="bico">📊</span><div><h1>My progress</h1>
       <p>${tot.n ? `${tot.n} questions answered · ${Math.round((tot.c / tot.n) * 100)}% correct · ${hist.length} sessions` : 'Take a quiz to start tracking.'} · stored only in this browser</p></div>
       <div class="bact">${wrongCount ? '<button class="btn solid" id="pw">Practise my wrong answers (' + wrongCount + ')</button>' : ''}
       ${rows.length ? '<button class="btn" id="clr">Reset</button>' : ''}</div></section>
     ${window.Rewards ? window.Rewards.weekHtml() : ''}
     <h2 class="sec">Weak topics (below 70%, at least 3 answers)</h2>
     ${weak.length ? `<div class="ugrid">${weak.map((r) => `<div class="ucard t-${r.id}"><span class="num">${r.p}%</span><span class="ut">${esc(S[r.id] ? S[r.id].title : r.id)} · ${esc(r.u)} · ${esc(r.t)}<small> ${r.c}/${r.n} correct</small></span></div>`).join('')}</div>` : '<p class="expl">No weak topics yet. Keep practising!</p>'}
     <h2 class="sec">All topics</h2>
     ${rows.length ? `<table class="res"><tr><th>Subject</th><th>Unit</th><th>Topic</th><th>Correct</th><th>Accuracy</th></tr>${rows.map((r) => `<tr><td>${esc(S[r.id] ? S[r.id].title : r.id)}</td><td>${esc(r.u)}</td><td>${esc(r.t)}</td><td>${r.c}/${r.n}</td><td><span class="acc ${r.p >= 70 ? 'g' : r.p >= 40 ? 'm' : 'b'}">${r.p}%</span></td></tr>`).join('')}</table>` : '<p class="expl">Nothing yet.</p>'}
     <div id="qa"></div>`);
  const pw = document.getElementById('pw');
  if (pw) pw.onclick = () => {
    const w = store.get('wrong', {});
    const qs = [];
    for (const [id, s] of Object.entries(S)) for (const m of s.mcqs) if (w[id + '|' + m.n + '|' + m.q.slice(0, 40)]) qs.push({ ...m, _id: id });
    if (!qs.length) return;
    document.getElementById('pw').scrollIntoView({ behavior: 'smooth' });
    run(qs.sort(() => Math.random() - 0.5), qs[0]._id, true);
  };
  const clr = document.getElementById('clr');
  if (clr) clr.onclick = () => { if (confirm('Reset all saved progress?')) { store.set('stats', {}); store.set('wrong', {}); store.set('hist', []); progress(); } };
}


// ---- Daily 20: weak topics first, then unseen, mixed across subjects ----
function daily() {
  setTheme('');
  const stats = store.get('stats', {});
  const wrong = store.get('wrong', {});
  const pool = [];
  for (const [id, sub] of Object.entries(S)) {
    for (const m of sub.mcqs) {
      const st = stats[topicKey(id, m)];
      const wk = wrong[id + '|' + m.n + '|' + m.q.slice(0, 40)] ? 3 : 0;
      const acc = st ? st.c / st.t : null;
      const w = wk + (acc === null ? 1.5 : acc < 0.7 ? 2.5 : 0.4) + Math.random();
      pool.push({ ...m, _id: id, _w: w });
    }
  }
  const qs = pool.sort((a, b) => b._w - a._w).slice(0, 20).sort(() => Math.random() - 0.5);
  $(`<div class="crumb"><a href="#/">Home</a> / Daily 20</div>
     <section class="banner"><span class="bico">🔥</span><div><h1>Daily 20</h1>
     <p>20 questions picked from your weak topics, wrong answers and unseen questions across all subjects.</p></div>
     <div class="bact"><a class="btn solid" href="#/daily" id="dn">New set</a></div></section><div id="qa" class="sp"></div>`);
  document.getElementById('dn').onclick = (e) => { e.preventDefault(); daily(); };
  run(qs, qs[0]._id, true, 'daily');
}

// ---- Revision sheet: key points only, printable ----
function revision(id) {
  const sub = S[id];
  if (!sub) return home();
  setTheme(id);
  const tmp = document.createElement('div');
  let body = '';
  if (sub.type === 'notes') {
    for (const u of sub.units) {
      if (u.id === 'concepts' || u.id === 'qa') continue;
      tmp.innerHTML = u.html;
      const keep = [];
      tmp.querySelectorAll('.box, .formula, table').forEach((el) => {
        if (el.tagName === 'TABLE' && el.rows.length > 12) return;
        if (el.closest('table') && el.tagName !== 'TABLE') return;
        keep.push(el.outerHTML);
      });
      tmp.querySelectorAll('.fcard').forEach((c) => {
        keep.push('<div class="formula"><b>' + c.querySelector('h3').textContent + '</b><br>' + c.querySelector('.fformula').innerHTML + '</div>');
      });
      if (keep.length) body += `<section class="rsec"><h2>${esc(u.title)}</h2>${keep.join('')}</section>`;
    }
  } else {
    const groups = {};
    sub.mcqs.forEach((m) => { ((groups[m.u] = groups[m.u] || {})[m.t || 'General'] = groups[m.u][m.t || 'General'] || []).push(m); });
    for (const [u, topics] of Object.entries(groups)) {
      body += `<section class="rsec"><h2>${esc(u)}</h2>`;
      for (const [t, list] of Object.entries(topics)) {
        const items = list.filter((m) => !m.c).map((m) => `<li><b>${esc(m.q)}</b> ${esc(m.o[m.a])}${m.e ? ` <i>(${esc(m.e)})</i>` : ''}</li>`).join('');
        if (items) body += `<h3>${esc(t)}</h3><ul class="facts">${items}</ul>`;
      }
      body += '</section>';
    }
  }
  $(`<div class="crumb"><a href="#/">Home</a> / <a href="#/${id}">${esc(sub.title)}</a> / Revision sheet</div>
     <section class="banner"><span class="bico">📄</span><div><h1>${esc(sub.title)} · Revision sheet</h1>
     <p>${sub.type === 'notes' ? 'Quick-revision boxes, formulas and key tables' : 'Every question with its correct answer, grouped by topic'} · use Print → Save as PDF</p></div>
     <div class="bact"><button class="btn solid" id="prt">🖨 Print / Save PDF</button></div></section>
     <div class="rev notes">${body || '<p>Nothing to show yet.</p>'}</div>`);
  document.getElementById('prt').onclick = () => window.print();
}


// ---- Most-expected questions page ----
function expected(id) {
  const sub = S[id];
  if (!sub) return home();
  setTheme(id);
  const groups = (window.EXPECTED && window.EXPECTED[id]) || [];
  const link = (g) => {
    if (g.ref) return `<a class="btn" href="#/${id}/${g.ref}">📖 Read notes</a>`;
    return '';
  };
  const quizLink = (g) => (sub.mcqs.length ? `<a class="btn" href="#/${id}/quiz/${encodeURIComponent(g.t || '')}">▶ Practise MCQs</a>` : '');
  const written = groups.map((g) => `<section class="rsec"><h2>${esc(g.h)}</h2>
      <ol class="eq">${g.q.map((q) => `<li>${esc(q)}</li>`).join('')}</ol>
      <div class="row">${link(g)} ${g.t ? quizLink(g) : ''}</div></section>`).join('');
  // hot topics = topics with the most MCQs (a rough guide to weightage in the question bank)
  const cnt = {};
  sub.mcqs.forEach((m) => { const k = m.u + '|' + (m.t || ''); cnt[k] = (cnt[k] || 0) + 1; });
  const hot = Object.entries(cnt).sort((a, b) => b[1] - a[1]).slice(0, 12);
  const hotHtml = hot.length ? `<h2 class="sec">Heavily tested topics (by number of MCQs)</h2><div class="ugrid">${hot.map(([k, n], i) => {
    const [u, t] = k.split('|');
    return `<a class="ucard" href="#/${id}/quiz/${encodeURIComponent(t)}"><span class="num">${n}</span><span class="ut">${esc(u)} · ${esc(t)}<small>practise now</small></span><span class="arr">→</span></a>`;
  }).join('')}</div>` : '';
  $(`<div class="crumb"><a href="#/">Home</a> / <a href="#/${id}">${esc(sub.title)}</a> / Expected questions</div>
     <section class="banner"><span class="bico">🎯</span><div><h1>${esc(sub.title)} · Expected questions</h1>
     <p>From the end-of-chapter / Important Questions lists, assignments and test papers in your PDFs</p></div></section>
     ${written ? `<h2 class="sec">Theory &amp; numerical questions</h2><div class="rev notes">${written}</div>` : ''}
     ${hotHtml}`);
}


function cubeHtml() {
  return '<div class="cube">' + ['💰', '📣', '🌍', '👥', '🗂️', '🎯'].map((e) => '<i>' + e + '</i>').join('') + '</div>';
}

function describe(hash) {
  const p = hash.split('/').map(decodeURIComponent);
  const a = p[1];
  const b = p[2];
  if (!a || a === 'search') return null;
  if (a === 'progress') return 'My progress';
  if (a === 'badges') return 'Badges';
  if (a === 'daily') return 'Daily 20';
  if (a === 'revision' && S[b]) return S[b].title + ' · Revision sheet';
  if (a === 'expected' && S[b]) return S[b].title + ' · Expected questions';
  if (a === 'sheet' && S[b]) return S[b].title + ' · Last-night sheet';
  const sub = S[a];
  if (!sub) return null;
  if (!b) return sub.title;
  if (b === 'quiz') return sub.title + ' · Quiz';
  if (b === 'files') return sub.title + ' · Source files';
  const u = sub.units.find((x) => x.id === b);
  return u ? sub.title + ' · ' + u.title : sub.title;
}

function trackLast() {
  const label = describe(location.hash);
  if (label) store.set('last', { hash: location.hash, label, at: Date.now() });
  if (window.Rewards) window.Rewards.onRoute(location.hash);
}

function setTheme(id) {
  document.body.className = id ? 't-' + id : '';
}

function count(s) {
  if (s.type === 'notes') return s.units.length + ' topics' + (s.mcqs.length ? ' · ' + s.mcqs.length + ' MCQs' : '');
  return s.mcqs.length + ' MCQs';
}

function home() {
  setTheme('');
  const subs = Object.entries(S);
  const notes = subs.reduce((n, [, s]) => n + s.units.length, 0);
  const mcqs = subs.reduce((n, [, s]) => n + s.mcqs.length, 0);
  $(`<section class="hero">
      <div class="hero-text">
        <span class="pill">BBA · 3rd Semester</span>
        <h1>Crack your exams<br><span class="grad">with notes, MCQs &amp; mock tests</span></h1>
        <p>Everything from your own study material, organised unit by unit.</p>
        <div class="hero-act"><a class="btn solid" href="#/daily">🔥 Daily 20</a> <a class="btn ghost" href="#/progress">📊 My progress</a></div>
        <div class="stats">
          <div><b>${subs.length}</b><span>Subjects</span></div>
          <div><b>${notes}</b><span>Note pages</span></div>
          <div><b>${mcqs}</b><span>MCQs</span></div>
        </div>
      </div>
      <div class="orbs" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="scene hero-cube" aria-hidden="true">${cubeHtml()}</div>
    </section>
    <h2 class="sec">Pick a subject</h2>
    <div class="grid">${subs.map(([id, s], i) =>
    `<a class="scard t-${id}" style="--d:${i * 70}ms" href="#/${id}">
       <span class="ico">${ICON[id] || '📘'}</span>
       <span class="badge">${s.type === 'notes' ? (s.mcqs.length ? 'Notes + MCQ' : 'Notes') : 'MCQ'}</span>
       <h3>${esc(s.title)}</h3>
       <p>${esc(BLURB[id] || '')}</p>
       <div class="meta">${count(s)} <span class="go">Open →</span></div>
     </a>`).join('')}</div>`);
}

function subject(id) {
  const s = S[id];
  if (!s) return home();
  setTheme(id);
  const quizBtn = (s.mcqs.length ? `<a class="btn solid" href="#/${id}/quiz">▶ Start quiz / mock exam · ${s.mcqs.length} Qs</a> ` : '') + `<a class="btn solid" href="#/revision/${id}">📄 Revision sheet</a> <a class="btn solid" href="#/expected/${id}">🎯 Expected questions</a>` + (s.units.some((u) => u.id === 'qa') ? ` <a class="btn solid" href="#/${id}/qa">✍️ Exam Q&amp;A</a> <a class="btn solid" href="#/sheet/${id}">🌙 Last-night sheet</a>` : '') + (window.SOURCES && window.SOURCES[id] ? ` <a class="btn solid" href="#/${id}/files">📂 Source files (${window.SOURCES[id].files.length})</a>` : '');
  const links = s.units.map((u, i) => `<a class="ucard" style="--d:${i * 45}ms" href="#/${id}/${u.id}">
      <span class="num">${i + 1}</span><span class="ut">${esc(u.title)}</span><span class="arr">→</span></a>`).join('');
  $(`<div class="crumb"><a href="#/">Home</a> / ${esc(s.title)}</div>
     <section class="banner"><span class="bico">${ICON[id] || '📘'}</span>
       <div><h1>${esc(s.title)}</h1><p>${esc(BLURB[id] || '')} · ${count(s)}</p></div>
       <div class="bact">${quizBtn}</div></section>
     ${links ? `<h2 class="sec">Notes</h2><div class="ugrid">${links}</div>` : ''}
     ${!links && !quizBtn ? '<p>Content coming soon.</p>' : ''}`);
}

function unit(id, uid) {
  const s = S[id];
  const idx = s ? s.units.findIndex((x) => x.id === uid) : -1;
  if (idx < 0) return subject(id);
  const u = s.units[idx];
  setTheme(id);
  const prev = s.units[idx - 1];
  const next = s.units[idx + 1];
  $(`<div class="crumb"><a href="#/">Home</a> / <a href="#/${id}">${esc(s.title)}</a> / ${idx + 1}/${s.units.length}</div>
     <article class="notes"><header class="uhead"><span class="num">${idx + 1}</span><h1>${esc(u.title)}</h1></header>${u.html}</article>
     <nav class="pn">${prev ? `<a class="btn" href="#/${id}/${prev.id}">← ${esc(prev.title)}</a>` : '<span></span>'}
     ${next ? `<a class="btn solid" href="#/${id}/${next.id}">${esc(next.title)} →</a>` : `<a class="btn solid" href="#/${id}">Back to ${esc(s.title)}</a>`}</nav>`);
  if (typeof u.after === 'function') u.after();
}

function quiz(id, topic) {
  const s = S[id];
  if (!s || !s.mcqs.length) return subject(id);
  setTheme(id);
  const units = [...new Set(s.mcqs.map((m) => m.u))];
  $(`<div class="crumb"><a href="#/">Home</a> / <a href="#/${id}">${esc(s.title)}</a></div><h1>Quiz</h1>
     <div class="row">
       <select id="qu" aria-label="Unit"><option value="">All units</option>${units.map((u) => `<option>${esc(u)}</option>`).join('')}</select>
       <select id="qt" aria-label="Topic"><option value="">All topics</option></select>
       <select id="qn" aria-label="Number of questions"><option value="10">10 Qs</option><option value="25">25 Qs</option><option value="50">50 Qs</option><option value="0">All</option></select>
       <label><input type="checkbox" id="qs" checked> Shuffle</label>
       <select id="qm" aria-label="Mode"><option value="p">Practice (instant answers)</option><option value="m">Mock exam (timed, answers at the end)</option></select>
       <select id="qd" aria-label="Time per question"><option value="30">30 s / Q</option><option value="45">45 s / Q</option><option value="60" selected>60 s / Q</option><option value="90">90 s / Q</option></select>
       <button class="btn primary" id="go">Start</button>
     </div><p class="expl" id="qc"></p><div id="qa"></div>`);
  const pool = () => {
    const u = document.getElementById('qu').value;
    const t = document.getElementById('qt').value;
    return s.mcqs.filter((m) => (!u || m.u === u) && (!t || m.t === t));
  };
  const refresh = () => {
    const u = document.getElementById('qu').value;
    const topics = [...new Set(s.mcqs.filter((m) => !u || m.u === u).map((m) => m.t).filter(Boolean))];
    document.getElementById('qt').innerHTML = '<option value="">All topics</option>' + topics.map((t) => `<option>${esc(t)}</option>`).join('');
    document.getElementById('qc').textContent = pool().length + ' questions available';
  };
  document.getElementById('qu').onchange = refresh;
  document.getElementById('qt').onchange = () => { document.getElementById('qc').textContent = pool().length + ' questions available'; };
  refresh();
  if (topic) {
    const hit = s.mcqs.find((m) => m.t === topic);
    if (hit) { document.getElementById('qu').value = hit.u; refresh(); document.getElementById('qt').value = topic; document.getElementById('qc').textContent = pool().length + ' questions available'; }
  }
  document.getElementById('go').onclick = () => {
    let qs = pool();
    if (document.getElementById('qs').checked) qs = qs.slice().sort(() => Math.random() - 0.5);
    const n = +document.getElementById('qn').value;
    qs = n ? qs.slice(0, n) : qs;
    if (document.getElementById('qm').value === 'm') mock(qs, +document.getElementById('qd').value);
    else run(qs);
  };
  const sync = () => { document.getElementById('qd').style.display = document.getElementById('qm').value === 'm' ? '' : 'none'; };
  document.getElementById('qm').onchange = sync;
  sync();
}

let mockTimer = null;

function mock(qs, secPerQ) {
  clearInterval(mockTimer);
  if (!qs.length) return;
  const box = document.getElementById('qa');
  const ans = new Array(qs.length).fill(-1);
  const flag = new Array(qs.length).fill(false);
  let cur = 0;
  let left = qs.length * secPerQ;
  let done = false;
  const fmt = (t) => String(Math.floor(t / 60)).padStart(2, '0') + ':' + String(t % 60).padStart(2, '0');

  const finish = (auto) => {
    if (done) return;
    done = true;
    clearInterval(mockTimer);
    let score = 0;
    const byUnit = {};
    qs.forEach((m, i) => {
      const ok = ans[i] === m.a;
      if (ok) score++;
      const u = byUnit[m.u] || (byUnit[m.u] = { r: 0, t: 0 });
      u.t++;
      if (ok) u.r++;
    });
    const skipped = ans.filter((a) => a < 0).length;
    const sid = location.hash.split('/')[1];
    qs.forEach((m, i) => { if (ans[i] >= 0) record(sid, m, ans[i] === m.a); });
    sessionDone(sid, score, qs.length, 'mock');
    const rows = Object.entries(byUnit).map(([u, v]) => '<tr><td>' + esc(u) + '</td><td>' + v.r + '</td><td>' + v.t + '</td></tr>').join('');
    box.innerHTML = '<h2>' + (auto ? 'Time up! ' : '') + 'Score: ' + score + '/' + qs.length + ' (' + Math.round((score / qs.length) * 100) + '%)</h2>' +
      '<p class="expl">Correct ' + score + ' · Wrong ' + (qs.length - score - skipped) + ' · Skipped ' + skipped + ' · Time used ' + fmt(qs.length * secPerQ - Math.max(0, left)) + '</p>' +
      '<table class="res"><tr><th>Unit</th><th>Correct</th><th>Total</th></tr>' + rows + '</table>' +
      '<div class="row"><button class="btn primary" id="again">New mock</button><button class="btn" id="onlyw">Review wrong / skipped only</button><button class="btn" id="allr">Review all</button></div>' +
      '<div id="rev"></div>';
    const render = (onlyWrong) => {
      document.getElementById('rev').innerHTML = qs.map((m, i) => {
        const ok = ans[i] === m.a;
        if (onlyWrong && ok) return '';
        const opts = m.o.map((o, k) => '<div class="opt ' + (k === m.a ? 'ok' : k === ans[i] ? 'bad' : '') + '">' + 'ABCD'[k] + '. ' + esc(o) + (k === ans[i] ? ' (your answer)' : '') + '</div>').join('');
        return '<div class="q">' + (m.c ? '<div class="box">' + esc(m.c) + '</div>' : '') + '<p><b>' + (i + 1) + '. ' + esc(m.q) + '</b></p>' + opts +
          '<div class="expl">' + (ans[i] < 0 ? 'Not answered. ' : '') + esc(m.e || '') + '</div></div>';
      }).join('');
    };
    render(true);
    document.getElementById('onlyw').onclick = () => render(true);
    document.getElementById('allr').onclick = () => render(false);
    document.getElementById('again').onclick = () => quiz(location.hash.split('/')[1]);
  };

  const show = () => {
    const m = qs[cur];
    const answered = ans.filter((a) => a >= 0).length;
    const nav = qs.map((_, i) => '<button class="nb' + (i === cur ? ' cur' : '') + (ans[i] >= 0 ? ' ans' : '') + (flag[i] ? ' flg' : '') + '" data-i="' + i + '">' + (i + 1) + '</button>').join('');
    const opts = m.o.map((o, k) => '<button class="opt' + (ans[cur] === k ? ' sel' : '') + '" data-k="' + k + '">' + 'ABCD'[k] + '. ' + esc(o) + '</button>').join('');
    box.innerHTML = '<div class="mockbar"><span class="timer" id="tm">' + fmt(left) + '</span><span>Answered ' + answered + '/' + qs.length + '</span><button class="btn" id="sub">Submit exam</button></div>' +
      '<div class="navg">' + nav + '</div>' +
      '<div class="q">' + (m.c ? '<div class="box">' + esc(m.c) + '</div>' : '') + '<p><b>' + (cur + 1) + '/' + qs.length + '. ' + esc(m.q) + '</b></p>' + opts + '</div>' +
      '<div class="row"><button class="btn" id="pv"' + (cur === 0 ? ' disabled' : '') + '>Previous</button>' +
      '<button class="btn" id="fl">' + (flag[cur] ? 'Unflag' : 'Flag for review') + '</button>' +
      '<button class="btn" id="cl">Clear answer</button>' +
      '<button class="btn primary" id="nx"' + (cur === qs.length - 1 ? ' disabled' : '') + '>Next</button></div>';
    box.querySelectorAll('.opt').forEach((b) => { b.onclick = () => { ans[cur] = +b.dataset.k; show(); }; });
    box.querySelectorAll('.nb').forEach((b) => { b.onclick = () => { cur = +b.dataset.i; show(); }; });
    document.getElementById('pv').onclick = () => { cur--; show(); };
    document.getElementById('nx').onclick = () => { cur++; show(); };
    document.getElementById('fl').onclick = () => { flag[cur] = !flag[cur]; show(); };
    document.getElementById('cl').onclick = () => { ans[cur] = -1; show(); };
    document.getElementById('sub').onclick = () => {
      const un = ans.filter((a) => a < 0).length;
      if (!un || confirm(un + ' question(s) unanswered. Submit anyway?')) finish(false);
    };
  };
  show();
  mockTimer = setInterval(() => {
    left--;
    const t = document.getElementById('tm');
    if (t) { t.textContent = fmt(Math.max(0, left)); if (left <= 60) t.classList.add('low'); }
    if (left <= 0) finish(true);
  }, 1000);
}

function run(qs, sid, mixed, kind) {
  sid = sid || (location.hash.split('/')[1]);
  const box = document.getElementById('qa');
  let i = 0;
  let score = 0;
  let wrong = [];
  const show = () => {
    if (i >= qs.length) {
      const again = wrong.length ? '<button class="btn primary" id="rw">Retry wrong ones</button>' : '';
      sessionDone(sid, score, qs.length, kind);
      box.innerHTML = `<h2>Score: ${score}/${qs.length} (${Math.round((score / qs.length) * 100)}%)</h2><div class="row">${again}</div>${wrong.map((m) =>
        `<div class="q">${m.c ? `<div class="box">${esc(m.c)}</div>` : ''}<b>${esc(m.q)}</b><div>Answer: <b>${esc(m.o[m.a])}</b></div><div class="expl">${esc(m.e || '')}</div></div>`).join('')}`;
      const rw = document.getElementById('rw');
      if (rw) rw.onclick = () => run(wrong, sid, mixed, kind);
      return;
    }
    const m = qs[i];
    box.innerHTML = `<div class="bar"><i style="width:${(i / qs.length) * 100}%"></i></div>
      <div class="q">${m.t ? `<span class="tag">${esc(m.u)} · ${esc(m.t)}</span>` : ''}${m.x ? ' <span class="tag gen">extra: not in PDFs</span>' : m.g ? ' <span class="tag gen">generated from PDF notes</span>' : ''}
      ${m.t || m.g ? '' : ''}
      ${m.c ? `<div class="box">${esc(m.c)}</div>` : ''}
      <p><b>${i + 1}/${qs.length}. ${esc(m.q)}</b></p>${m.o.map((o, k) => `<button class="opt" data-k="${k}">${'ABCD'[k]}. ${esc(o)}</button>`).join('')}<div class="expl" id="ex"></div></div>`;
    box.querySelectorAll('.opt').forEach((b) => {
      b.onclick = () => {
        const k = +b.dataset.k;
        box.querySelectorAll('.opt').forEach((x) => { x.disabled = true; if (+x.dataset.k === m.a) x.classList.add('ok'); });
        if (k === m.a) score++; else { b.classList.add('bad'); wrong.push(m); }
        record(mixed ? m._id : sid, m, k === m.a);
        document.getElementById('ex').textContent = m.e || '';
        const n = document.createElement('button');
        n.className = 'btn primary';
        n.textContent = i + 1 < qs.length ? 'Next' : 'Finish';
        n.onclick = () => { i++; show(); };
        box.appendChild(n);
      };
    });
  };
  show();
}

function plain(html) {
  const d = document.createElement('div');
  d.innerHTML = html;
  return d.textContent.replace(/\s+/g, ' ');
}

function search(q) {
  setTheme('');
  const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  const out = [];
  for (const [id, s] of Object.entries(S)) {
    for (const u of s.units) {
      const text = plain(u.html);
      const m = re.exec(text);
      if (m) {
        const snip = esc(text.slice(Math.max(0, m.index - 60), m.index + 100));
        out.push(`<a class="card" href="#/${id}/${u.id}"><b>${esc(s.title)} · ${esc(u.title)}</b><div>…${snip}…</div></a>`);
      }
    }
  }
  $(`<h1>Search: ${esc(q)}</h1><div class="grid">${out.join('') || '<p>No results.</p>'}</div>`);
}

function routeInner() {
  clearInterval(mockTimer);
  const parts = location.hash.split('/').map(decodeURIComponent);
  const [, a, b] = parts;
  window.scrollTo(0, 0);
  if (!a) return home();
  if (a === 'search') return search(b || '');
  if (a === 'progress') return progress();
  if (a === 'badges' && window.Rewards) return window.Rewards.page();
  if (a === 'daily') return daily();
  if (a === 'revision') return revision(b);
  if (a === 'expected') return expected(b);
  if (a === 'sheet' && window.ExamQA) return window.ExamQA.sheet(b);
  if (b === 'files' && window.Sources) return window.Sources.page(a);
  if (b === 'quiz') return quiz(a, parts[3]);
  if (b) return unit(a, b);
  return subject(a);
}
function route() {
  routeInner();
  trackLast();
}
addEventListener('hashchange', route);
route();

const prog = document.createElement('div');
prog.id = 'prog';
document.body.appendChild(prog);
const topBtn = document.createElement('button');
topBtn.id = 'totop';
topBtn.textContent = '↑';
topBtn.setAttribute('aria-label', 'Back to top');
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
document.body.appendChild(topBtn);
addEventListener('scroll', () => {
  const h = document.documentElement;
  const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
  prog.style.transform = 'scaleX(' + p + ')';
  topBtn.classList.toggle('show', h.scrollTop > 500);
}, { passive: true });

window.App = { S, store, esc, ICON, cubeHtml, $, setTheme };
