// Encouragement pop-up: after every 10-15 questions solved (random), in EVERY mode - practice, mock exam, Daily 20, Mock Exam Box (MCQ and written sets) -
// a small card says "Good going, sweetheart! Keep it up". It never pauses a timer; it closes itself after a few seconds.
(function () {
  const A = window.App;
  const store = A && A.store;
  const MSG = [
    ['Good going, sweetheart! 💗', 'Keep it up - you are doing amazing!'],
    ['Good going, sweetheart! 🌟', 'Keep it up, I am so proud of you!'],
    ['Good going, my cutie! 🥰', 'Keep it up, one more step closer to the exam!'],
    ['Good going, sweetheart! 💪', 'Keep it up, you are on fire today 🔥'],
    ['Good going, sweetheart! 🍫', 'Keep it up - a chocolate is waiting after this 😄'],
    ['Good going, sweetheart! 🌈', 'Keep it up, every question makes you stronger!'],
  ];
  const rand = () => 10 + Math.floor(Math.random() * 6);   // 10..15
  const get = () => (store ? store.get('cheer', null) : null) || { n: 0, next: rand() };
  const put = (v) => { if (store) store.set('cheer', v); };
  let state = get();
  if (!state.next || state.next < 10 || state.next > 15) state.next = rand();
  let last = -1, hideT = null;

  function show() {
    // never on top of the "are you ready" gate or the welcome buddy
    if (document.querySelector('.mbmodal') || document.getElementById('buddy')) { state.n = Math.max(0, state.n - 1); put(state); return; }
    let i;
    do { i = Math.floor(Math.random() * MSG.length); } while (i === last && MSG.length > 1);
    last = i;
    const old = document.getElementById('cheer');
    if (old) old.remove();
    const el = document.createElement('div');
    el.id = 'cheer';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    el.innerHTML = `<img src="img/happy.webp" alt="" width="64" height="64"><div><b>${MSG[i][0]}</b><span>${MSG[i][1]}</span></div><button type="button" aria-label="Close">×</button>`;
    document.body.appendChild(el);
    const close = () => { el.classList.add('out'); setTimeout(() => el.remove(), 350); clearTimeout(hideT); };
    el.querySelector('button').onclick = close;
    hideT = setTimeout(close, 5200);
  }

  function tick() {
    state.n++;
    if (state.n >= state.next) { state.n = 0; state.next = rand(); put(state); show(); } else put(state);
  }
  window.Cheer = { tick, show };

  // one listener for every mode
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (!t.closest) return;
    const opt = t.closest('button.opt');
    if (opt && !opt.disabled && !opt.classList.contains('sel')) return tick();           // practice, mock exam, Daily 20 (an answer chosen)
    const show2 = t.closest('.mbq .show');                                                // Mock Exam Box written / numerical set: model answer opened
    if (show2) { setTimeout(() => { const a = show2.closest('.mbq').querySelector('.mbans'); if (a && !a.hidden) tick(); }, 0); return; }
    const rev = t.closest('details.qa .done input');                                      // Q&A bank: marked revised
    if (rev) setTimeout(() => { if (rev.checked) tick(); }, 0);
  }, true);
  document.addEventListener('change', (e) => {                                            // Mock Exam Box MCQ sets
    const r = e.target;
    if (r && r.type === 'radio' && r.closest && r.closest('.mbm') && !r.disabled) tick();
  }, true);
})();
