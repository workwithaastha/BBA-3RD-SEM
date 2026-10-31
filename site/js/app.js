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
    run(n ? qs.slice(0, n) : qs);
  };
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
