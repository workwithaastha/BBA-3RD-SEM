// Friendly "buddy" bubble: every time the site opens it greets "Hi Astha" with a random question (random entrance + exit animation),
// then shows a second popup with the days left for a random upcoming exam. Also records the study-day streak and keeps the 3D tilt / hero parallax.
(function () {
  const { store, esc, ICON } = window.App;
  const NAME = store.get('name', 'Astha');
  const today = () => new Date().toISOString().slice(0, 10);
  const pick = (a) => a[Math.floor(Math.random() * a.length)];

  // record today as a study day (used by streaks and badges)
  (function () {
    let days = store.get('days', []);
    const t = today();
    if (!days.includes(t)) { days.push(t); store.set('days', days.slice(-60)); }
    store.set('visited', true);
  })();

  // ---------- messages: [question, [[reply button, answer], ...]] ----------
  // the three "favourites" are asked most often
  const FAV = [
    ['Did you remember me? 🥺', [['Always 💜', 'Aww! I remembered you too. Now go and shine ✨'], ['Sorry, forgot 🙈', 'Forgiven! Just do one quiz for me 😌']]],
    ['Are you angry with me? 😶', [['No, not at all 😄', 'Phew! 😮‍💨 Then let\'s make today count.'], ['A little bit 😤', 'Sorry! I\'ll make it up with an easy quiz 🍬']]],
    ['Should I order you some food? 🍕', [['Yes please! 🍔', 'Ordered! (Imaginary pizza 🍕 - study first, then eat 😄)'], ['No, I\'m full 😋', 'Then water and a quick quiz it is 💧']]],
  ];
  const MORE = [
    ['Are you okay? 🤗', [['Yes, I\'m good 😊', 'Yay! Then let\'s learn something today 💪'], ['A bit tired 😴', 'Take a 5-minute break, then one small quiz.']]],
    ['Whatsup? 😎', [['Studying 📚', 'Proud of you! Keep going 🔥'], ['Nothing much', 'Perfect time for a Daily 20 then!']]],
    ['Did you drink water today? 💧', [['Yes 👍', 'Great! Brain runs on water 🧠'], ['Not yet 😅', 'Go grab a glass - I\'ll wait 🥤']]],
    ['Have you eaten something? 🍱', [['Yes 😋', 'Good! Study with a happy tummy.'], ['Not yet', 'Eat first, then revise. Promise? 🤝']]],
    ['Ready for a quick Daily 20? 🔥', [['Let\'s go! 🚀', '__daily'], ['Later ⏳', 'Okay, but don\'t forget me 🥺']]],
  ];
  // answers that start with one of these show the SAD image, all others the HAPPY image
  const SAD = ['Sorry, forgot', 'A little bit', 'No, I', 'A bit tired', 'Nothing much', 'Not yet', 'Later'];
  const ASK = () => (Math.random() < 0.65 ? pick(FAV) : pick(MORE));

  const FACES = ['😊', '🤗', '😄', '🥰', '😎', '🤓', '🙂', '✨'];
  const IN = ['b-slide', 'b-bounce', 'b-flip', 'b-zoom', 'b-swing', 'b-drop', 'b-roll', 'b-jelly', 'b-rise'];
  const OUT = ['x-fly', 'x-shrink', 'x-spin', 'x-fade', 'x-down'];
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  let timers = [];
  const later = (fn, ms) => { const t = setTimeout(fn, ms); timers.push(t); return t; };
  const clearAll = () => { timers.forEach(clearTimeout); timers = []; };

  function dismiss(el, then) {
    if (!el || el.dataset.gone) return;
    el.dataset.gone = '1';
    el.className = el.className.replace(/\bb-\w+\b/g, '') + ' ' + (reduce ? 'x-fade' : pick(OUT));
    setTimeout(() => { el.remove(); if (then) then(); }, reduce ? 150 : 650);
  }

  function bubble(html, onReady) {
    document.querySelectorAll('#buddy').forEach((x) => x.remove());
    const el = document.createElement('div');
    el.id = 'buddy';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    el.className = reduce ? '' : pick(IN);
    el.innerHTML = html + '<button class="bx" aria-label="Close">×</button>';
    document.body.appendChild(el);
    el.querySelector('.bx').onclick = () => { clearAll(); dismiss(el); };
    if (onReady) onReady(el);
    return el;
  }

  // ---------- 1. greeting + random question ----------
  function greet(thenDays) {
    clearAll();
    const [q, replies] = ASK();
    const el = bubble(`<div class="bface"><img src="img/avatar.webp" alt="" width="64" height="64"></div>
      <div class="bbody"><h3>Hi ${esc(NAME)} <span class="wave">👋</span></h3>
      <p class="bq">${esc(q)}</p>
      <div class="breps">${replies.map((r, i) => `<button class="brep" data-i="${i}">${esc(r[0])}</button>`).join('')}</div></div>`, (e) => {
      e.querySelectorAll('.brep').forEach((b) => {
        b.onclick = () => {
          clearAll();
          const ans = replies[+b.dataset.i][1];
          if (ans === '__daily') { dismiss(e); location.hash = '#/daily'; return; }
          e.querySelector('.bq').textContent = ans;
          e.querySelector('.bq').classList.add('ans');
          e.querySelector('.breps').remove();
          const label = replies[+b.dataset.i][0];
          const mood = SAD.some((x) => label.indexOf(x) === 0) ? 'sad' : 'happy';
          const face = e.querySelector('.bface');
          face.classList.add('mood', mood);
          face.innerHTML = '<img src="img/' + mood + '.webp" alt="" width="72" height="72">';
          later(() => dismiss(e, thenDays), 3800);
        };
      });
    });
    later(() => dismiss(el, thenDays), 9500);
  }

  // ---------- 2. days left for a random upcoming exam ----------
  function daysPopup() {
    const E = window.EXAMS || [];
    const t0 = new Date(); t0.setHours(0, 0, 0, 0);
    const left = (ex) => { const [y, m, d] = ex.date.split('-').map(Number); return Math.round((new Date(y, m - 1, d) - t0) / 86400000); };
    const up = E.filter((x) => left(x) >= 0);
    if (!up.length) return;
    const ex = pick(up);
    const d = left(ex);
    const when = d === 0 ? 'is TODAY!' : d === 1 ? 'is tomorrow!' : 'is in ' + d + ' days';
    const date = new Date(ex.date + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
    const hot = d <= 3;
    const el = bubble(`<div class="bface"><img src="img/avatar.webp" alt="" width="64" height="64"><span class="bico">${ICON[ex.id] || '📅'}</span></div>
      <div class="bbody"><h3>⏳ ${d === 0 ? 'Today' : d + (d === 1 ? ' day' : ' days') + ' left'}</h3>
      <p class="bq"><b>${esc(ex.name)}</b> ${when}</p>
      <p class="bsub">${date} · ${esc(ex.time)} · ${ex.kind === 'objective' ? 'MCQ' : 'Written'} · ${esc(ex.dur)}</p>
      <div class="breps"><a class="brep go" href="#/${ex.id}">📖 Study now</a><a class="brep" href="#/plan">🗓️ Study plan</a></div></div>`, (e) => {
      if (hot) e.classList.add('hot');
      e.querySelectorAll('a.brep').forEach((a) => a.addEventListener('click', () => { clearAll(); dismiss(e); }));
    });
    later(() => dismiss(el), 8500);
  }

  function sequence() { greet(() => later(daysPopup, 700)); }

  // header button replays the greeting + days popup
  const top = document.querySelector('.top');
  if (top) {
    const b = document.createElement('button');
    b.id = 'wopen';
    b.textContent = '👋';
    b.title = 'Say hi';
    b.setAttribute('aria-label', 'Say hi');
    b.onclick = sequence;
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

  // every time the site opens
  setTimeout(sequence, 900);
})();
