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
     <div class="row"><select id="qu"><option value="">All units</option>${units.map((u) => `<option>${esc(u)}</option>`).join('')}</select>
     <button class="btn primary" id="go">Start</button></div><div id="qa"></div>`);
  document.getElementById('go').onclick = () => {
    const u = document.getElementById('qu').value;
    run(s.mcqs.filter((m) => !u || m.u === u).sort(() => Math.random() - 0.5));
  };
}

function run(qs) {
  const box = document.getElementById('qa');
  let i = 0;
  let score = 0;
  const wrong = [];
  const show = () => {
    if (i >= qs.length) {
      box.innerHTML = `<h2>Score: ${score}/${qs.length}</h2>${wrong.map((m) =>
        `<div class="q"><b>${esc(m.q)}</b><div>Answer: ${esc(m.o[m.a])}</div><div class="expl">${esc(m.e || '')}</div></div>`).join('')}`;
      return;
    }
    const m = qs[i];
    box.innerHTML = `<div class="bar"><i style="width:${(i / qs.length) * 100}%"></i></div>
      <div class="q"><b>${i + 1}/${qs.length}. ${esc(m.q)}</b>${m.o.map((o, k) => `<button class="opt" data-k="${k}">${esc(o)}</button>`).join('')}<div class="expl" id="ex"></div></div>`;
    box.querySelectorAll('.opt').forEach((b) => {
      b.onclick = () => {
        const k = +b.dataset.k;
        box.querySelectorAll('.opt').forEach((x) => { x.disabled = true; if (+x.dataset.k === m.a) x.classList.add('ok'); });
        if (k === m.a) score++; else { b.classList.add('bad'); wrong.push(m); }
        document.getElementById('ex').textContent = m.e || '';
        const n = document.createElement('button');
        n.className = 'btn primary';
        n.textContent = 'Next';
        n.onclick = () => { i++; show(); };
        box.appendChild(n);
      };
    });
  };
  show();
}

function search(q) {
  const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  const out = [];
  for (const [id, s] of Object.entries(S)) {
    for (const u of s.units) {
      const text = u.html.replace(/<[^>]+>/g, ' ');
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
