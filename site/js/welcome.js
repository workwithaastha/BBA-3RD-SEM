// Welcome pop-up ("Hi Astha"), remembers the last activity in this browser, streak, 3D tilt + parallax.
(function () {
  const { S, store, esc, ICON, cubeHtml } = window.App;
  const NAME = store.get('name', 'Astha');
  const today = () => new Date().toISOString().slice(0, 10);
  const QUOTES = [
    'Small steps every day beat last-night cramming.',
    'One topic, one quiz, one win. Let\'s go!',
    'You already know more than you think - prove it with a quiz.',
    'Revise, test, repeat. That is the whole trick.',
    'Weak topics today are strong topics tomorrow.',
    'Ten questions now save ten hours later.',
  ];

  function streakInfo() {
    let days = store.get('days', []);
    const t = today();
    if (!days.includes(t)) { days.push(t); days = days.slice(-60); store.set('days', days); }
    let streak = 0;
    const d = new Date();
    while (days.includes(d.toISOString().slice(0, 10))) { streak++; d.setDate(d.getDate() - 1); }
    return { streak, total: days.length };
  }

  function ago(ts) {
    const m = Math.round((Date.now() - ts) / 60000);
    if (m < 1) return 'just now';
    if (m < 60) return m + ' min ago';
    const h = Math.round(m / 60);
    if (h < 24) return h + ' h ago';
    const d = Math.round(h / 24);
    return d + (d === 1 ? ' day ago' : ' days ago');
  }

  function greeting() {
    const h = new Date().getHours();
    return h < 5 ? 'Burning the midnight oil' : h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : h < 21 ? 'Good evening' : 'Late-night study mode';
  }

  function close() {
    const m = document.getElementById('wel');
    if (!m) return;
    m.classList.add('out');
    setTimeout(() => m.remove(), 380);
    document.removeEventListener('keydown', onKey);
    try { sessionStorage.setItem('welcomed', '1'); } catch { /* ignore */ }
  }
  function onKey(e) { if (e.key === 'Escape') close(); }

  function show() {
    if (document.getElementById('wel')) return;
    const sk = streakInfo();
    const stats = store.get('stats', {});
    let ans = 0, ok = 0;
    Object.values(stats).forEach((v) => { ans += v.t; ok += v.c; });
    const last = store.get('last', null);
    const hist = store.get('hist', []);
    const lq = hist[hist.length - 1];
    const first = !store.get('visited', false);
    store.set('visited', true);

    const resume = last
      ? `<button class="wbtn big" id="wcont"><span>▶ Continue where you left off</span><small>${esc(last.label)} · ${ago(last.at)}</small></button>`
      : '';
    const lastQuiz = lq && S[lq.id]
      ? `<p class="wlast">Last quiz: <b>${esc(S[lq.id].title)}</b> - ${lq.score}/${lq.total} (${Math.round((lq.score / lq.total) * 100)}%) · ${ago(lq.at)}</p>` : '';

    const el = document.createElement('div');
    el.id = 'wel';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-labelledby', 'welh');
    el.innerHTML = `
      <div class="wbg" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
      <div class="wcard" id="wcard">
        <button class="wx" id="wclose" aria-label="Close">×</button>
        <div class="scene">${cubeHtml()}</div>
        <h2 id="welh">Hi ${esc(NAME)} <span class="wave">👋</span></h2>
        <p class="wl1">What's up? <b>Let's learn!</b></p>
        <p class="wl2">${greeting()}${first ? ' - welcome to your exam prep' : ' - welcome back'}. ${QUOTES[Math.floor(Math.random() * QUOTES.length)]}</p>
        <div class="wstats">
          <div><b>🔥 ${sk.streak}</b><span>day streak</span></div>
          <div><b>✅ ${ans}</b><span>answered</span></div>
          <div><b>🎯 ${ans ? Math.round((ok / ans) * 100) : 0}%</b><span>accuracy</span></div>
          <div><b>🏅 ${window.Rewards ? window.Rewards.count() : 0}</b><span>badges</span></div>
        </div>
        ${window.Rewards ? window.Rewards.weekHtml(true) : ''}
        ${resume}${lastQuiz}
        <div class="wbtns">
          <button class="wbtn" id="wdaily">🔥 Daily 20</button>
          <button class="wbtn" id="wprog">📊 My progress</button>
          <button class="wbtn ghost" id="wstart">${last ? 'Start fresh' : 'Let\'s go →'}</button>
        </div>
        <div class="wchips">${Object.entries(S).map(([id, s]) => `<a class="wchip t-${id}" href="#/${id}">${ICON[id] || '📘'} ${esc(s.title.split(' ').slice(0, 2).join(' '))}</a>`).join('')}</div>
      </div>`;
    document.body.appendChild(el);

    const go = (h) => { close(); if (h) location.hash = h; };
    document.getElementById('wclose').onclick = close;
    document.getElementById('wstart').onclick = () => go('');
    document.getElementById('wdaily').onclick = () => go('#/daily');
    document.getElementById('wprog').onclick = () => go('#/progress');
    const c = document.getElementById('wcont');
    if (c) c.onclick = () => go(last.hash);
    el.querySelectorAll('.wchip').forEach((a) => a.addEventListener('click', close));
    el.addEventListener('click', (e) => { if (e.target === el || e.target.classList.contains('wbg')) close(); });
    document.addEventListener('keydown', onKey);

    // 3D tilt of the card following the pointer
    const card = document.getElementById('wcard');
    el.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
      const y = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
      card.style.setProperty('--ry', (x * 14).toFixed(2) + 'deg');
      card.style.setProperty('--rx', (-y * 14).toFixed(2) + 'deg');
    });
    (c || document.getElementById('wstart')).focus();
  }

  // header button to reopen
  const top = document.querySelector('.top');
  if (top) {
    const b = document.createElement('button');
    b.id = 'wopen';
    b.textContent = '👋';
    b.title = 'Welcome / continue';
    b.setAttribute('aria-label', 'Open welcome');
    b.onclick = show;
    top.insertBefore(b, document.getElementById('theme'));
  }

  // 3D tilt on subject cards + hero parallax (pointer devices only)
  if (window.matchMedia && matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', (e) => {
      const card = e.target.closest && e.target.closest('.scard');
      if (card) {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.setProperty('--ry', (px * 14).toFixed(2) + 'deg');
        card.style.setProperty('--rx', (-py * 14).toFixed(2) + 'deg');
      }
      const hero = document.querySelector('.hero');
      if (hero) {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        hero.style.setProperty('--px', (x * 30).toFixed(1) + 'px');
        hero.style.setProperty('--py', (y * 20).toFixed(1) + 'px');
        hero.style.setProperty('--cy', (x * 40).toFixed(1) + 'deg');
        hero.style.setProperty('--cx', (-y * 30).toFixed(1) + 'deg');
      }
    }, { passive: true });
    document.addEventListener('mouseout', (e) => {
      const card = e.target.closest && e.target.closest('.scard');
      if (card && !card.contains(e.relatedTarget)) { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); }
    });
  }

  let seen = false;
  try { seen = sessionStorage.getItem('welcomed') === '1'; } catch { /* ignore */ }
  if (!seen) setTimeout(show, 250);
})();
