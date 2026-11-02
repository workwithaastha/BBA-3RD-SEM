// UI upgrade layer: subject switcher strip, progress rings on home, quick tiles, mobile tab bar, quiz keyboard shortcuts.
// Pure decoration - reads window.App (S, store, ICON) and never changes data.
(function () {
  const A = window.App;
  if (!A) return;
  const { S, store, ICON, esc } = A;

  // ---------- mobile bottom tab bar (shown by CSS on small screens) ----------
  const tabs = document.createElement('nav');
  tabs.id = 'tabbar';
  tabs.setAttribute('aria-label', 'Main');
  tabs.innerHTML = '<a href="#/" data-h="#/"><i>🏠</i>Home</a><a href="#/daily" data-h="#/daily"><i>🔥</i>Daily 20</a>' +
    '<a href="#/progress" data-h="#/progress"><i>📊</i>Progress</a><a href="#/badges" data-h="#/badges"><i>🏅</i>Badges</a>' +
    '<button type="button" id="tabsearch"><i>🔍</i>Search</button>';
  document.body.appendChild(tabs);
  document.getElementById('tabsearch').onclick = () => { const s = document.getElementById('search'); s.scrollIntoView({ block: 'center' }); s.focus(); };

  function subjectOf(h) { const id = (h.split('/')[1] || ''); return S[id] ? id : ''; }

  // ---------- subject switcher strip ----------
  function subnav() {
    const old = document.getElementById('subnav');
    if (old) old.remove();
    const cur = subjectOf(location.hash);
    if (!cur) return;
    const n = document.createElement('nav');
    n.id = 'subnav';
    n.setAttribute('aria-label', 'Subjects');
    n.innerHTML = Object.entries(S).map(([id, s]) =>
      `<a class="t-${id}${id === cur ? ' on' : ''}" href="#/${id}">${ICON[id] || '📘'} ${esc(s.title.split(' ').slice(0, 2).join(' '))}</a>`).join('');
    document.getElementById('app').before(n);
    const on = n.querySelector('.on');
    if (on) n.scrollLeft = on.offsetLeft - 16;
  }

  // ---------- home: progress rings + quick tiles ----------
  function home() {
    const grid = document.querySelector('.grid');
    if (!grid || !document.querySelector('.hero') || document.getElementById('qtiles')) return;
    const stats = store.get('stats', {});
    grid.querySelectorAll('.scard').forEach((card) => {
      const id = (card.getAttribute('href') || '').split('/')[1];
      if (!S[id]) return;
      let t = 0, c = 0;
      Object.entries(stats).forEach(([k, v]) => { if (k.startsWith(id + '|')) { t += v.t; c += v.c; } });
      const pct = t ? Math.round((c / t) * 100) : 0;
      const ring = document.createElement('div');
      ring.className = 'ring' + (t ? '' : ' empty');
      ring.style.setProperty('--p', pct);
      ring.innerHTML = `<b>${t ? pct + '%' : '–'}</b>`;
      ring.title = t ? `${t} answered · ${pct}% correct` : 'Not started yet';
      card.appendChild(ring);
    });
    const last = store.get('last', null);
    const tiles = document.createElement('div');
    tiles.id = 'qtiles';
    tiles.innerHTML =
      (last && last.hash ? `<a class="qt" href="${esc(last.hash)}"><i>▶️</i><b>Continue</b><span>${esc(last.label || 'where you left off')}</span></a>` : '') +
      '<a class="qt" href="#/daily"><i>🔥</i><b>Daily 20</b><span>Smart mixed practice</span></a>' +
      '<a class="qt" href="#/progress"><i>📊</i><b>My progress</b><span>Weak topics &amp; weekly chart</span></a>' +
      '<a class="qt" href="#/badges"><i>🏅</i><b>Badges</b><span>Rewards you have earned</span></a>';
    document.querySelector('.hero').after(tiles);
  }

  function decorate() {
    document.documentElement.style.setProperty('--hh', document.querySelector('.top').offsetHeight + 'px');
    subnav();
    home();
    tabs.querySelectorAll('a').forEach((a) => a.classList.toggle('on', a.dataset.h === (location.hash || '#/') || (a.dataset.h === '#/' && location.hash === '')));
  }
  window.addEventListener('resize', () => document.documentElement.style.setProperty('--hh', document.querySelector('.top').offsetHeight + 'px'));
  window.addEventListener('hashchange', () => setTimeout(decorate, 30));
  setTimeout(decorate, 150);

  // ---------- quiz keyboard shortcuts: A-D / 1-4 pick, Enter / → next ----------
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    if (document.getElementById('wel') || document.getElementById('srcview')) return;
    const box = document.getElementById('qa');
    if (!box) return;
    const k = 'abcd'.indexOf(e.key.toLowerCase());
    const n = k >= 0 ? k : '1234'.indexOf(e.key);
    if (n >= 0 && e.key.length === 1) {
      const b = box.querySelector(`.opt[data-k="${n}"]:not(:disabled)`);
      if (b) { e.preventDefault(); b.click(); }
      return;
    }
    if (e.key === 'Enter' || e.key === 'ArrowRight') {
      const nx = document.querySelector('#qa > .btn.primary');
      if (nx && !box.querySelector('.opt:not(:disabled)')) { e.preventDefault(); nx.click(); }
    }
  });
})();
