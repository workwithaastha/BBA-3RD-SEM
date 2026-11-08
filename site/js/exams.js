// Exam features from the date sheet: countdown timeline on home, exam banner on each subject, day-wise study plan (#/plan),
// "next exam" line for the welcome pop-up. Reads window.EXAMS (data/examdates.js) and window.App.
(function () {
  const A = window.App, E = window.EXAMS;
  if (!A || !E) return;
  const { S, esc, ICON } = A;
  const DAY = 86400000;
  const midnight = (d) => { const x = new Date(d); x.setHours(0, 0, 0, 0); return x; };
  const parse = (iso) => { const [y, m, d] = iso.split('-').map(Number); return new Date(y, m - 1, d); };
  const today = () => midnight(new Date());
  const left = (ex) => Math.round((parse(ex.date) - today()) / DAY);
  const fmt = (ex) => parse(ex.date).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
  const when = (n) => (n < 0 ? 'Done' : n === 0 ? 'TODAY' : n === 1 ? 'Tomorrow' : n + ' days');
  const sorted = E.slice().sort((a, b) => a.date.localeCompare(b.date));
  const upcoming = () => sorted.filter((x) => left(x) >= 0);
  const byId = (id) => E.find((x) => x.id === id);
  const kindLabel = (ex) => (ex.kind === 'objective' ? '✅ Objective (MCQ)' : '✍️ Written') + ' · ' + ex.dur;
  const title = (id) => (S[id] ? S[id].title : id);

  function nextHtml() {
    const n = upcoming()[0];
    if (!n) return '';
    const d = left(n);
    return `<p class="wnext">📅 Next exam: <b>${esc(n.name)}</b> - ${d === 0 ? 'today!' : d === 1 ? 'tomorrow' : 'in ' + d + ' days'} (${fmt(n)})</p>`;
  }

  // ---------- home timeline ----------
  function homeBlock() {
    const hero = document.querySelector('.hero');
    if (!hero || document.getElementById('examline')) return;
    const nextId = (upcoming()[0] || {}).id;
    const box = document.createElement('section');
    box.id = 'examline';
    box.innerHTML = `<div class="exhead"><h2 class="sec">📅 Exam countdown</h2><a class="btn solid" href="#/plan">🗓️ Day-wise study plan</a></div>
      <div class="exgrid">${sorted.map((ex) => {
        const d = left(ex);
        return `<a class="exc t-${ex.id}${ex.id === nextId ? ' next' : ''}${d < 0 ? ' past' : ''}" href="#/${ex.id}">
          <div class="exn"><b>${d < 0 ? '✓' : d}</b><span>${d < 0 ? 'done' : d === 0 ? 'today' : d === 1 ? 'day left' : 'days left'}</span></div>
          <div class="exi"><h3>${ICON[ex.id] || '📘'} ${esc(ex.name)}</h3>
            <p>${fmt(ex)} · ${esc(ex.time)}</p><p class="exk">${kindLabel(ex)} · ${esc(ex.tag)}</p></div></a>`;
      }).join('')}</div>`;
    hero.after(box);
  }

  // ---------- subject banner ----------
  function subjectBanner() {
    const [, id, b] = location.hash.split('/');
    const ex = byId(id);
    const app = document.getElementById('app');
    const old = document.getElementById('exbanner');
    if (old) old.remove();
    if (!ex || !app || (b && b !== 'quiz')) return;
    const d = left(ex);
    const el = document.createElement('div');
    el.id = 'exbanner';
    el.className = d >= 0 && d <= 3 ? 'urgent' : '';
    el.innerHTML = `⏳ <b>${d < 0 ? 'Exam over' : when(d) + (d > 1 ? ' left' : '')}</b> · ${fmt(ex)}, ${esc(ex.time)} · ${kindLabel(ex)}
      · <a href="#/plan">Study plan</a>`;
    app.prepend(el);
  }

  // ---------- study plan ----------
  function quota(id, daysToExam) {
    const n = S[id] ? S[id].mcqs.length : 0;
    if (!n) return 0;
    const q = Math.ceil(n / Math.max(1, daysToExam));
    return Math.min(70, Math.max(10, Math.ceil(q / 5) * 5));
  }
  function units(id) {
    return (S[id] ? S[id].units : []).filter((u) => !['concepts', 'qa', 'formulas'].includes(u.id));
  }
  function cards(id) {
    const us = S[id] ? S[id].units : [];
    const u = us.find((x) => x.id === 'concepts') || us.find((x) => x.id === 'formulas') || us[0];
    return u ? `<a href="#/${id}/${u.id}">${u.id === 'formulas' ? 'Formula cards' : u.id === 'concepts' ? 'Concept cards' : 'Notes'}</a>` : '';
  }
  function task(ex, daysToExam, dayIndex, light) {
    const id = ex.id, name = title(id), items = [];
    if (daysToExam === 1) {
      const sheet = ex.kind === 'written' && window.ExamQA ? `#/sheet/${id}` : `#/revision/${id}`;
      items.push(`<a href="${sheet}">Last-night revision sheet</a>`);
      items.push(`<a href="#/${id}/quiz">10 quick MCQs</a>`);
      return { name, id, items, label: 'Last-night revision' };
    }
    if (light) {
      items.push(cards(id));
      return { name, id, items, label: 'Light revision' };
    }
    const q = quota(id, daysToExam);
    if (ex.kind === 'written') {
      const us = units(id);
      if (us.length) { const u = us[dayIndex % us.length]; items.push(`<a href="#/${id}/${u.id}">Read: ${esc(u.title)}</a>`); }
      else items.push(cards(id));
      if (window.ExamQA && window.ExamQA.data && window.ExamQA.data[id]) items.push(`<a href="#/${id}/qa">Practise 10 written answers</a>`);
      else items.push(`<a href="#/expected/${id}">Expected questions</a>`);
      if (q) items.push(`<a href="#/${id}/quiz">${Math.min(q, 25)} MCQs</a>`);
    } else {
      if (q) items.push(`<a href="#/${id}/quiz">${q} MCQs</a>`);
      items.push(cards(id));
    }
    return { name, id, items, label: 'Study' };
  }
  function plan() {
    A.setTheme('');
    const t0 = today();
    const up = upcoming();
    const app = document.getElementById('app');
    if (!up.length) { app.innerHTML = '<h1>Study plan</h1><p>All exams are over. Well done!</p>'; return; }
    const last = parse(up[up.length - 1].date);
    const rows = [];
    const counts = {};
    for (let d = new Date(t0); d <= last; d = new Date(d.getTime() + DAY)) {
      const idx = Math.round((d - t0) / DAY);
      const exToday = sorted.filter((x) => parse(x.date).getTime() === d.getTime());
      const rest = sorted.filter((x) => parse(x.date) > d);
      const parts = [];
      exToday.forEach((x) => parts.push(`<div class="pt exam"><b>📝 Exam today</b> - ${esc(x.name)} · ${esc(x.time)}</div>`));
      rest.slice(0, 2).forEach((x, k) => {
        const days = Math.round((parse(x.date) - d) / DAY);
        if (k === 1 && (days <= 2 || exToday.length)) return;
        counts[x.id] = (counts[x.id] || 0) + 1;
        const tk = task(x, days, counts[x.id] - 1, k === 1);
        parts.push(`<div class="pt${k ? ' light' : ''}"><b>${ICON[x.id] || '📘'} ${esc(tk.name)}</b> <small>${tk.label} · exam in ${days} d</small><div>${tk.items.join(' · ')}</div></div>`);
      });
      rows.push(`<div class="prow${idx === 0 ? ' now' : ''}"><div class="pd"><b>${d.getDate()}</b><span>${d.toLocaleDateString('en-IN', { month: 'short', weekday: 'short' })}</span>${idx === 0 ? '<em>today</em>' : ''}</div><div class="pc">${parts.join('')}</div></div>`);
    }
    app.innerHTML = `<div class="crumb"><a href="#/">Home</a> / Study plan</div>
      <section class="banner"><span class="bico">🗓️</span><div><h1>Day-wise study plan</h1>
      <p>Built from your date sheet: the nearest exam gets the main slot each day, the next one a light revision slot. MCQ numbers are spread so the whole question bank is covered before each exam.</p></div></section>
      <div class="plan">${rows.join('')}</div>`;
  }

  window.Exams = { nextHtml, plan, left };
  function decorate() { homeBlock(); subjectBanner(); }
  window.addEventListener('hashchange', () => setTimeout(decorate, 60));
  setTimeout(decorate, 180);
})();
