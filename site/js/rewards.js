// Rewards: confetti + sound on good scores, badges with toasts, badges page. All data stays in this browser.
(function () {
  const { S, store, esc, $, setTheme } = window.App;
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------------- sound ----------------
  let ac = null;
  const soundOn = () => store.get('sound', true);
  function tone(freq, dur, when, type, vol) {
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      const t0 = ac.currentTime + (when || 0);
      const o = ac.createOscillator();
      const g = ac.createGain();
      o.type = type || 'sine';
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(vol || 0.05, t0 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      o.connect(g); g.connect(ac.destination);
      o.start(t0); o.stop(t0 + dur + 0.05);
    } catch { /* audio blocked */ }
  }
  function sfx(kind) {
    if (!soundOn()) return;
    if (kind === 'ok') { tone(660, 0.12, 0, 'triangle', 0.04); tone(880, 0.16, 0.09, 'triangle', 0.04); }
    else if (kind === 'bad') { tone(180, 0.22, 0, 'sawtooth', 0.025); }
    else if (kind === 'win') { [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, 0.28, i * 0.11, 'triangle', 0.06)); }
    else if (kind === 'badge') { [880, 1175, 1568].forEach((f, i) => tone(f, 0.22, i * 0.09, 'sine', 0.05)); }
  }

  // ---------------- confetti ----------------
  function confetti() {
    if (reduce) return;
    const c = document.createElement('canvas');
    c.id = 'confetti';
    c.width = innerWidth; c.height = innerHeight;
    document.body.appendChild(c);
    const g = c.getContext('2d');
    const cols = ['#f43f5e', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#facc15'];
    const ps = Array.from({ length: 160 }, () => ({
      x: c.width / 2 + (Math.random() - 0.5) * 200, y: c.height * 0.55,
      vx: (Math.random() - 0.5) * 16, vy: -Math.random() * 18 - 6,
      w: 6 + Math.random() * 8, h: 8 + Math.random() * 10, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4,
      col: cols[Math.floor(Math.random() * cols.length)], fl: Math.random() * 6,
    }));
    const t0 = performance.now();
    (function frame(t) {
      g.clearRect(0, 0, c.width, c.height);
      ps.forEach((p) => {
        p.vy += 0.38; p.vx *= 0.995; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.fl += 0.2;
        g.save(); g.translate(p.x, p.y); g.rotate(p.r); g.scale(1, Math.cos(p.fl));
        g.fillStyle = p.col; g.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); g.restore();
      });
      if (t - t0 < 3200) requestAnimationFrame(frame); else c.remove();
    })(t0);
  }

  // ---------------- toasts ----------------
  function toast(html, cls) {
    let box = document.getElementById('toasts');
    if (!box) { box = document.createElement('div'); box.id = 'toasts'; document.body.appendChild(box); }
    const t = document.createElement('div');
    t.className = 'toast ' + (cls || '');
    t.innerHTML = html;
    box.appendChild(t);
    setTimeout(() => { t.classList.add('bye'); setTimeout(() => t.remove(), 500); }, 4200);
  }

  // ---------------- badges ----------------
  const BADGES = [
    { id: 'first', ico: '🌱', name: 'First Step', desc: 'Answer your first question', val: (c) => c.answered, max: 1 },
    { id: 'a10', ico: '🔟', name: 'Warm-up', desc: 'Answer 10 questions', val: (c) => c.answered, max: 10 },
    { id: 'a100', ico: '💯', name: 'Century', desc: 'Answer 100 questions', val: (c) => c.answered, max: 100 },
    { id: 'a500', ico: '🚀', name: 'Rocket', desc: 'Answer 500 questions', val: (c) => c.answered, max: 500 },
    { id: 'a1000', ico: '🏆', name: 'Legend', desc: 'Answer 1,000 questions', val: (c) => c.answered, max: 1000 },
    { id: 's3', ico: '🔥', name: 'On Fire', desc: 'Study 3 days in a row', val: (c) => c.streak, max: 3 },
    { id: 's7', ico: '⚡', name: 'Week Warrior', desc: 'Study 7 days in a row', val: (c) => c.streak, max: 7 },
    { id: 's14', ico: '👑', name: 'Fortnight King', desc: 'Study 14 days in a row', val: (c) => c.streak, max: 14 },
    { id: 'perfect', ico: '🎯', name: 'Bullseye', desc: '100% in a quiz of 10+ questions', val: (c) => (c.flags.perfect ? 1 : 0), max: 1 },
    { id: 'high', ico: '⭐', name: 'High Flyer', desc: '80%+ in a quiz of 10+ questions', val: (c) => (c.flags.high ? 1 : 0), max: 1 },
    { id: 'mock', ico: '📝', name: 'Exam Ready', desc: 'Finish a mock exam', val: (c) => (c.flags.mock ? 1 : 0), max: 1 },
    { id: 'daily', ico: '☀️', name: 'Daily Hero', desc: 'Finish a Daily 20', val: (c) => (c.flags.daily ? 1 : 0), max: 1 },
    { id: 'fixer', ico: '🛠️', name: 'Mistake Fixer', desc: 'Get 10 earlier mistakes right', val: (c) => c.fixed, max: 10 },
    { id: 'all', ico: '🌈', name: 'All-Rounder', desc: 'Answer 10+ questions in every subject', val: (c) => c.subjects, max: 5 },
    { id: 'explorer', ico: '🧭', name: 'Explorer', desc: 'Open a revision sheet, expected questions and progress', val: (c) => c.pages, max: 3 },
  ];

  function ctx() {
    const stats = store.get('stats', {});
    let answered = 0;
    const per = {};
    Object.entries(stats).forEach(([k, v]) => { answered += v.t; const id = k.split('|')[0]; per[id] = (per[id] || 0) + v.t; });
    const days = store.get('days', []);
    let streak = 0;
    const d = new Date();
    while (days.includes(d.toISOString().slice(0, 10))) { streak++; d.setDate(d.getDate() - 1); }
    const pg = store.get('pages', {});
    return {
      answered, streak, fixed: store.get('fixed', 0), flags: store.get('flags', {}),
      subjects: Object.keys(S).filter((id) => (per[id] || 0) >= 10).length,
      pages: ['revision', 'expected', 'progress'].filter((p) => pg[p]).length,
    };
  }

  function check() {
    const have = store.get('badges', {});
    const c = ctx();
    let fresh = 0;
    BADGES.forEach((b) => {
      if (!have[b.id] && b.val(c) >= b.max) {
        have[b.id] = Date.now();
        fresh++;
        setTimeout(() => { sfx('badge'); toast(`<span class="tbig">${b.ico}</span><div><b>Badge unlocked!</b><br>${esc(b.name)} - ${esc(b.desc)}</div>`, 'gold'); }, fresh * 700);
      }
    });
    if (fresh) store.set('badges', have);
  }

  // ---------------- hooks called by app.js ----------------
  const Rewards = {
    onAnswer(ok, wasWrong) {
      sfx(ok ? 'ok' : 'bad');
      if (ok && wasWrong) store.set('fixed', store.get('fixed', 0) + 1);
      check();
    },
    onSession(score, total, kind) {
      const pct = total ? score / total : 0;
      const f = store.get('flags', {});
      if (total >= 10 && score === total) f.perfect = true;
      if (total >= 10 && pct >= 0.8) f.high = true;
      if (kind === 'mock') f.mock = true;
      if (kind === 'daily') f.daily = true;
      store.set('flags', f);
      if (total >= 5 && pct >= 0.8) {
        confetti(); sfx('win');
        toast(`<span class="tbig">🎉</span><div><b>${Math.round(pct * 100)}% - brilliant, Astha!</b><br>${score}/${total} correct. Keep the streak going.</div>`, 'win');
      } else if (total >= 5) {
        toast(`<span class="tbig">💪</span><div><b>${Math.round(pct * 100)}% - good effort</b><br>Review the wrong ones and try again.</div>`);
      }
      setTimeout(check, 300);
    },
    onRoute(hash) {
      const a = hash.split('/')[1];
      if (['revision', 'expected', 'progress'].includes(a)) {
        const pg = store.get('pages', {});
        if (!pg[a]) { pg[a] = 1; store.set('pages', pg); check(); }
      }
    },
    page() {
      setTheme('');
      const have = store.get('badges', {});
      const c = ctx();
      const n = BADGES.filter((b) => have[b.id]).length;
      $(`<div class="crumb"><a href="#/">Home</a> / Badges</div>
         <section class="banner"><span class="bico">🏅</span><div><h1>Badges</h1>
         <p>${n} of ${BADGES.length} unlocked · answered ${c.answered} questions · ${c.streak}-day streak</p></div>
         <div class="bact"><a class="btn solid" href="#/daily">🔥 Earn more - Daily 20</a></div></section>
         <div class="bgrid">${BADGES.map((b, i) => {
    const got = have[b.id];
    const v = Math.min(b.val(c), b.max);
    return `<div class="bcard ${got ? 'got' : 'locked'}" style="--d:${i * 50}ms">
      <div class="bface"><span class="bico2">${got ? b.ico : '🔒'}</span><h3>${esc(b.name)}</h3><p>${esc(b.desc)}</p>
      ${got ? `<small>Unlocked ${new Date(got).toLocaleDateString()}</small>` : `<div class="bar"><i style="width:${(v / b.max) * 100}%"></i></div><small>${v} / ${b.max}</small>`}</div></div>`;
  }).join('')}</div>`);
    },
    count() { return Object.keys(store.get('badges', {})).length; },
    total: BADGES.length,
  };
  window.Rewards = Rewards;

  // sound toggle in the header
  const top = document.querySelector('.top');
  if (top) {
    const b = document.createElement('button');
    b.id = 'snd';
    b.setAttribute('aria-label', 'Toggle sound');
    const paint = () => { b.textContent = soundOn() ? '🔊' : '🔇'; b.title = soundOn() ? 'Sound on' : 'Sound off'; };
    b.onclick = () => { store.set('sound', !soundOn()); paint(); if (soundOn()) sfx('ok'); };
    paint();
    top.insertBefore(b, document.getElementById('theme'));
  }
  setTimeout(check, 1200);
})();
