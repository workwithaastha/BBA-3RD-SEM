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

function home() {
  $(`<h1>Subjects</h1><div class="grid">${Object.entries(S).map(([id, s]) =>
    `<a class="card" href="#/${id}"><span class="tag">${s.type === 'notes' ? 'Notes' : 'MCQ'}</span>
     <h3>${esc(s.title)}</h3><div>${s.type === 'notes'
    ? (s.units.length ? s.units.length + ' units' : 'Coming soon')
    : (s.mcqs.length ? s.mcqs.length + ' questions' : 'Coming soon')}</div></a>`).join('')}</div>`);
}

function subject(id) {
  const s = S[id];
  if (!s) return home();
  const links = s.units.map((u) => `<a class="card" href="#/${id}/${u.id}"><h3>${esc(u.title)}</h3></a>`).join('');
  const quizBtn = s.mcqs.length ? `<a class="btn primary" href="#/${id}/quiz">Start quiz (${s.mcqs.length} Qs)</a>` : '';
  $(`<div class="crumb"><a href="#/">Home</a></div><h1>${esc(s.title)}</h1><div class="row">${quizBtn}</div>
     <div class="grid">${links}</div>${!links && !quizBtn ? '<p>Content coming soon.</p>' : ''}`);
}

function unit(id, uid) {
  const s = S[id];
  const u = s && s.units.find((x) => x.id === uid);
  if (!u) return subject(id);
  $(`<div class="crumb"><a href="#/">Home</a> / <a href="#/${id}">${esc(s.title)}</a></div>
     <article class="notes"><h1>${esc(u.title)}</h1>${u.html}</article>`);
}

function quiz(id) {
  const s = S[id];
  if (!s || !s.mcqs.length) return subject(id);
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

function run(qs) {
  const box = document.getElementById('qa');
  let i = 0;
  let score = 0;
  let wrong = [];
  const show = () => {
    if (i >= qs.length) {
      const again = wrong.length ? '<button class="btn primary" id="rw">Retry wrong ones</button>' : '';
      box.innerHTML = `<h2>Score: ${score}/${qs.length} (${Math.round((score / qs.length) * 100)}%)</h2><div class="row">${again}</div>${wrong.map((m) =>
        `<div class="q">${m.c ? `<div class="box">${esc(m.c)}</div>` : ''}<b>${esc(m.q)}</b><div>Answer: <b>${esc(m.o[m.a])}</b></div><div class="expl">${esc(m.e || '')}</div></div>`).join('')}`;
      const rw = document.getElementById('rw');
      if (rw) rw.onclick = () => run(wrong);
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

function route() {
  clearInterval(mockTimer);
  const [, a, b] = location.hash.split('/').map(decodeURIComponent);
  window.scrollTo(0, 0);
  if (!a) return home();
  if (a === 'search') return search(b || '');
  if (b === 'quiz') return quiz(a);
  if (b) return unit(a, b);
  return subject(a);
}
addEventListener('hashchange', route);
route();
