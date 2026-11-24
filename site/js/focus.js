// Exam Focus panel on the home page: a "mission control" card for the NEXT exam - live countdown (days / hours / minutes / seconds),
// exam details, today's game plan (tick-boxes, remembered per day) with direct links, and a Focus switch that dims the other subjects.
// Reads window.EXAMS (data/examdates.js), window.App and the Mock Exam Box store; draws itself after the home banner on every visit to #/.
(function () {
  const A = window.App, E = window.EXAMS;
  if (!A || !E) return;
  const { S, store, esc, ICON } = A;
  const FOLDER = { finance: 'Finance', hrm: 'HRM', marketing: 'Marketing', 'business-env': 'Business_Environment', 'office-mgmt': 'Office_Management' };
  const sorted = E.slice().sort((a, b) => a.date.localeCompare(b.date));
  let tick = null;

  const pad = (n) => String(n).padStart(2, '0');
  function window3(ex) {
    const [y, m, d] = ex.date.split('-').map(Number);
    const part = (s) => { const g = /(\d+):(\d+)\s*(AM|PM)/i.exec(s); let h = +g[1] % 12; if (/PM/i.test(g[3])) h += 12; return new Date(y, m - 1, d, h, +g[2]); };
    const [a, b] = ex.time.split('-').map((x) => x.trim());
    return { start: part(a), end: part(b) };
  }
  function nextExam() {
    const now = new Date();
    return sorted.find((ex) => window3(ex).end > now) || null;
  }
  const dayKey = () => { const d = new Date(); return d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()); };
  const doneStore = () => store.get('focus', {});
  const isDone = (k) => !!doneStore()[dayKey() + '|' + k];
  const setDone = (k, v) => { const s = doneStore(); const key = dayKey() + '|' + k; if (v) s[key] = 1; else delete s[key]; store.set('focus', s); };
  const pdf = (id, file) => '../MCQ%20pdf/' + FOLDER[id] + '/' + encodeURIComponent(file);

  function nextSetKey(id, prefix, max) {
    const saved = store.get('mockbox', {});
    for (let k = 1; k <= max; k++) if (!saved[id + ':' + prefix + k] || saved[id + ':' + prefix + k].best == null) return k;
    return 1;
  }

  function steps(ex) {
    const id = ex.id;
    const days = Math.round((new Date(ex.date + 'T00:00:00') - new Date(new Date().setHours(0, 0, 0, 0))) / 86400000);
    const out = [];
    if (ex.kind === 'written') {
      const k = nextSetKey(id, 'np', 12);
      const pre = FOLDER[id];
      out.push({ k: 'sheet', t: days <= 1 ? 'Read the last-night sheet (one slow pass)' : 'Read the last-night sheet', links: [['Open on site', '#/sheet/' + id], ['PDF', pdf(id, pre + '_New_Pattern_Last_Night_Sheet.pdf')]] });
      if (id === 'hrm') out.push({ k: 'recall', t: 'One page: the quick-recall card (12 topics)', links: [['PDF', pdf(id, 'HRM_Quick_Recall_Card.pdf')]] });
      out.push({ k: 'set', t: 'Take New Pattern Set ' + k + ' under the timer', links: [['Start set ' + k, '#/mocks/' + encodeURIComponent(id + ':np' + k)], ['PDF', pdf(id, pre + '_New_Pattern_Set_' + k + '.pdf')]] });
      out.push({ k: 'qa', t: 'Write 3 model answers from memory, then compare', links: [['Q&A bank', '#/' + id + '/qa']] });
      out.push({ k: 'mcq', t: 'Solve 20 MCQs to warm up', links: [['Quiz', '#/' + id + '/quiz']] });
    } else {
      const k = nextSetKey(id, 'q50-', 20);
      out.push({ k: 'set', t: 'Take timed Set ' + k + ' (50 MCQs)', links: [['Start set ' + k, '#/mocks/' + encodeURIComponent(id + ':q50-' + k)]] });
      out.push({ k: 'wrong', t: 'Review every wrong answer from the set', links: [['My progress', '#/progress']] });
      out.push({ k: 'cards', t: 'Read the concept cards once', links: [['Concept cards', '#/' + id + '/concepts']] });
      out.push({ k: 'daily', t: 'Finish with Daily 20', links: [['Daily 20', '#/daily']] });
    }
    return out;
  }

  function panicSteps(ex) {
    const id = ex.id;
    const out = [];
    if (ex.kind === 'written') {
      const k = nextSetKey(id, 'np', 12), pre = FOLDER[id];
      out.push({ k: 'p1', t: id === 'hrm' ? 'Read the one-page quick-recall card' : 'Read the last-night sheet once', links: id === 'hrm' ? [['PDF', pdf(id, 'HRM_Quick_Recall_Card.pdf')], ['Sheet', '#/sheet/' + id]] : [['Sheet', '#/sheet/' + id], ['PDF', pdf(id, pre + '_New_Pattern_Last_Night_Sheet.pdf')]] });
      out.push({ k: 'p2', t: 'Optional: one New Pattern set, timed (Set ' + k + ')', links: [['Start', '#/mocks/' + encodeURIComponent(id + ':np' + k)]] });
    } else {
      const k = nextSetKey(id, 'q50-', 20);
      out.push({ k: 'p1', t: 'Skim the concept cards once', links: [['Cards', '#/' + id + '/concepts']] });
      out.push({ k: 'p2', t: 'Optional: one timed set (Set ' + k + ')', links: [['Start', '#/mocks/' + encodeURIComponent(id + ':q50-' + k)]] });
    }
    out.push({ k: 'p3', t: 'Bag ready: admit card / ID, pens, pencil, ruler, water bottle', links: [] });
    out.push({ k: 'p4', t: 'Reach the centre 30 minutes early; sleep and eat well', links: [] });
    out.push({ k: 'p5', t: 'Three slow breaths - you know more than you think', links: [] });
    return out;
  }

  const QUOTES = ['Small steps today, a big score tomorrow.', 'You have already done the hard part - now just revise and breathe.', 'One paper at a time. You are ready, sweetheart.', 'Calm mind, clear handwriting, full answers.', 'Every set you finish is a mark you will not lose.'];

  function draw() {
    const old = document.getElementById('focuspanel');
    if (old) old.remove();
    clearInterval(tick);
    document.body.classList.remove('focusmode', 'panicmode');
    const hero = document.querySelector('.hero');
    if (!hero || location.hash.replace('#', '') !== '/' && location.hash !== '' && location.hash !== '#/') return;
    const ex = nextExam();
    if (!ex) return;
    const { start, end } = window3(ex);
    const id = ex.id;
    const panic = !!store.get('panic', false), collapsed = !!store.get('focuscol', false);
    const list = panic ? panicSteps(ex) : steps(ex);
    const on = store.get('focusmode', true);
    const box = document.createElement('section');
    box.id = 'focuspanel';
    box.className = 't-' + id + (panic ? ' panic' : '') + (collapsed ? ' collapsed' : '');
    box.innerHTML = `<div class="fp-left">
        <div class="fp-top"><span class="fp-tag">${panic ? '🚨 EXAM MORNING MODE' : '🎯 NEXT EXAM'}</span><span class="fp-ctl"><button type="button" id="fppanic" title="Only what matters on exam morning">${panic ? '↩ Normal view' : '🚨 Exam morning mode'}</button><button type="button" id="fpcol" aria-label="${collapsed ? 'Expand' : 'Collapse'} the panel">${collapsed ? '▾ Expand' : '▴ Collapse'}</button></span></div>
        <h2>${ICON[id] || '📘'} ${esc(ex.name)}</h2>
        <p class="fp-meta">${new Date(ex.date + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })} · ${esc(ex.time)} · ${ex.kind === 'objective' ? '✅ MCQ' : '✍️ Written'} · ${esc(ex.dur)}</p>
        <div class="fp-count" id="fpcount" aria-label="Time left"><div><b id="fpd">--</b><span>days</span></div><div><b id="fph">--</b><span>hours</span></div><div><b id="fpm">--</b><span>min</span></div><div><b id="fps">--</b><span>sec</span></div></div>
        <p class="fp-state" id="fpstate"></p>
        <p class="fp-quote">${esc(QUOTES[Math.floor(Math.random() * QUOTES.length)])}</p>
      </div>
      <div class="fp-right"><div class="fp-plan"><h3>${panic ? 'Only these matter today' : "Today's game plan"}</h3><div class="fp-bar"><i id="fpbar"></i></div><p class="fp-prog" id="fpprog"></p>
        <ul>${list.map((s) => `<li><label><input type="checkbox" data-k="${s.k}" ${isDone(id + '|' + s.k) ? 'checked' : ''}><span>${esc(s.t)}</span></label><span class="fp-links">${s.links.map((l) => `<a href="${l[1]}"${/^\.\./.test(l[1]) ? ' target="_blank" rel="noopener"' : ''}>${esc(l[0])}</a>`).join('')}</span></li>`).join('')}</ul></div>
        <div class="fp-foot"><label class="fp-switch"><input type="checkbox" id="fpfocus" ${on ? 'checked' : ''}><span></span> Focus mode - dim the other subjects</label><a class="btn solid" href="#/mocks">🎯 Mock Exam Box</a></div></div>`;
    const exl = document.getElementById('examline');
    if (exl) exl.before(box); else hero.after(box);
    // the exam-countdown block may be drawn a moment later: keep the focus panel directly under the banner, above it
    [150, 500, 1200].forEach((t) => setTimeout(() => { const e2 = document.getElementById('examline'), p2 = document.getElementById('focuspanel'); if (e2 && p2 && p2.nextElementSibling !== e2) e2.before(p2); }, t));
    const apply = () => document.body.classList.toggle('focusmode', !!store.get('focusmode', true));
    apply();
    // mark the next exam's subject card
    document.querySelectorAll('.grid .scard').forEach((c) => c.classList.toggle('fp-next', (c.getAttribute('href') || '').split('/')[1] === id));
    const prog = () => {
      const n = list.filter((s) => isDone(id + '|' + s.k)).length;
      document.getElementById('fpbar').style.width = Math.round((n / list.length) * 100) + '%';
      document.getElementById('fpprog').textContent = n + ' of ' + list.length + ' done today' + (n === list.length ? ' - well done! 🎉' : '');
    };
    prog();
    box.addEventListener('change', (e) => {
      const t = e.target;
      if (t.id === 'fpfocus') { store.set('focusmode', t.checked); apply(); return; }
      if (t.dataset && t.dataset.k) { setDone(id + '|' + t.dataset.k, t.checked); prog(); }
    });
    box.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      if (b.id === 'fpcol') { store.set('focuscol', !collapsed); draw(); }
      if (b.id === 'fppanic') { store.set('panic', !panic); draw(); }
    });
    document.body.classList.toggle('panicmode', panic);
    const upd = () => {
      const now = new Date();
      let ms = start - now;
      const st = document.getElementById('fpstate');
      if (!st) { clearInterval(tick); return; }
      if (now >= start && now < end) { ms = 0; st.textContent = '📝 The exam is on now - all the best, sweetheart!'; box.classList.add('live'); }
      else { st.textContent = ms < 3600000 * 24 ? 'Less than a day - stay calm and revise lightly.' : ''; box.classList.toggle('hot', ms < 3600000 * 72); }
      ms = Math.max(0, ms);
      const s = Math.floor(ms / 1000);
      document.getElementById('fpd').textContent = pad(Math.floor(s / 86400));
      document.getElementById('fph').textContent = pad(Math.floor((s % 86400) / 3600));
      document.getElementById('fpm').textContent = pad(Math.floor((s % 3600) / 60));
      document.getElementById('fps').textContent = pad(s % 60);
    };
    upd();
    tick = setInterval(upd, 1000);
  }

  addEventListener('hashchange', () => { if (!/^#\/?$/.test(location.hash) && location.hash !== '') { clearInterval(tick); document.body.classList.remove('focusmode', 'panicmode'); } });
  // the home banner is drawn by app.js on every route to "#/"; draw after it (and after ui2/exams decorate)
  const redraw = () => setTimeout(() => { if (/^#?\/?$/.test(location.hash) && !document.getElementById('focuspanel')) draw(); }, 60);
  addEventListener('hashchange', redraw);
  addEventListener('load', redraw);
  if (document.readyState === 'complete') redraw();
  window.Focus = { draw };
})();
