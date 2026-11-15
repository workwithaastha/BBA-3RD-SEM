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
    ["Did you remember me? 🥺", [["Always 💜", "Aww! I remembered you too. You made my day ✨"], ["Sorry, forgot 🙈", "Forgiven! But you owe me a smile 😌"]]],
    ["Are you angry with me? 😶", [["No, not at all 😄", "Phew! 😮‍💨 I was worried for a second."], ["A little bit 😤", "Sorry! I will make it up with a virtual chocolate 🍫"]]],
    ["Should I order you some food? 🍕", [["Yes please! 🍔", "Ordered! Imaginary pizza is on its way 🍕😄"], ["No, I'm full 😋", "Okay! Then I will keep the pizza for myself 🍕"]]],
  ];
  const LOVE = [
    ["Did you miss me today? 🥺", [["Yes, so much 💕", "Aww, I missed you even more! 🫶"], ["Just a little 😜", "Only a little?! I will remember that 😤💗"]]],
    ["Do you know you are my favourite person? 💖", [["Of course I do 😍", "And I will keep reminding you 💞"], ["Tell me again 🥰", "You are my favourite person, always 💖"]]],
    ["Want a big virtual hug? 🤗", [["Yes please! 🫂", "Squeezing you tight right now 🤗💞"], ["Make it two 🥹", "Two hugs coming up, with a kiss on top 😘"]]],
    ["Who is the cutest person in the world? 😏", [["Me, obviously 😎", "Okay okay, you win... because it is you 😍"], ["You 😘", "Aww, stop it, you are making me blush 🙈"]]],
    ["Are you smiling right now? 😊", [["Yes, because of you 💕", "That is the best thing I heard all day ✨"], ["Now I am 😄", "Mission accomplished! 😎"]]],
    ["Shall we plan a movie date? 🎬🍿", [["Yes! 🍿", "Popcorn is on me, imaginary of course 😄🎬"], ["Pizza date instead 🍕", "Even better! Pizza date it is 💞"]]],
    ["Did you eat on time, my cutie? 🍛", [["Yes, I did 😋", "Good girl! I am proud of you 🥰"], ["Not yet 🙈", "Go eat right now, or I will get angry 😤🍛"]]],
    ["Do you love me? 🥺💗", [["Obviously 😘", "Love you more than all the pizzas in the world 🍕💗"], ["Maybe... 😜", "Maybe?! I will take it and make you say yes 😎💗"]]],
    ["Should I send you a flower? 🌹", [["Send it! 🌹", "Sent! Smell it with your eyes closed 🌹😚"], ["Send chocolate 🍫", "Even better: a chocolate bouquet 🍫💐"]]],
    ["Tell me honestly, am I annoying? 😅", [["Never 💕", "Good, because you are stuck with me forever 😌💞"], ["Sometimes 😜", "Only sometimes?! I will take that win 😎"]]],
  ];
  const MORE = [
    ["Are you okay? 🤗", [["Yes, I'm good 😊", "Yay! That makes me really happy 💪"], ["A bit tired 😴", "Take a deep breath and a little rest, you deserve it 🫶"]]],
    ["Whatsup? 😎", [["All good 😄", "Love that energy! 🔥"], ["Nothing much", "Same here, just waiting for you 😅"]]],
    ["Did you drink water today? 💧", [["Yes 👍", "Great! Your body says thank you 🥤"], ["Not yet 😅", "Go grab a glass - I will wait right here 🥤"]]],
    ["Have you eaten something? 🍱", [["Yes 😋", "Good! A happy tummy means a happy day."], ["Not yet", "Please eat something soon, promise? 🤝"]]],
    ["Did you sleep well last night? 😴", [["Like a baby 😇", "Lucky you! Sweet dreams do work 🌙"], ["Not really 🥱", "Oh no. A short nap might help later 🛌"]]],
    ["Tea or coffee today? ☕", [["Tea 🍵", "Chai lovers unite! 🫖"], ["Coffee ☕", "Strong choice! Enjoy every sip."]]],
    ["Did you smile today? 😁", [["Yes, a lot 😄", "That smile looks great on you ✨"], ["Not yet 🥲", "Here you go: 🙂 - now your turn!"]]],
    ["Want some chocolate? 🍫", [["Yes please! 🍫", "Here is a big virtual bar, no calories 😄"], ["No thanks 🙅", "More chocolate for me then 😋"]]],
    ["How is your mood right now? 🌈", [["Super happy 🥳", "Yay! Keep shining 🌟"], ["Not great 😔", "Sending you a big virtual hug 🤗"]]],
  ];
  // answers that start with one of these show the SAD image, all others the HAPPY image
  const SAD = ['Sorry, forgot', 'A little bit', 'No, I', 'A bit tired', 'Nothing much', 'Not yet', 'Not really', 'No thanks', 'Not great'];
  let lastQ = '', lastEx = '';
  const ASK = () => { let r; for (let i = 0; i < 12; i++) { const x = Math.random(); r = x < 0.45 ? pick(LOVE) : x < 0.75 ? pick(FAV) : pick(MORE); if (r[0] !== lastQ) break; } lastQ = r[0]; return r; };

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

  function bubble(html, onReady, after) {
    document.querySelectorAll('#buddy').forEach((x) => x.remove());
    const el = document.createElement('div');
    el.id = 'buddy';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    el.className = reduce ? '' : pick(IN);
    el.innerHTML = '<img class="bdino" src="img/dino.webp" alt="" width="84" height="84">' + html + '<button class="bx" aria-label="Close">×</button>';
    document.body.appendChild(el);
    el.querySelector('.bx').onclick = () => { clearAll(); dismiss(el, after); };
    if (onReady) onReady(el);
    return el;
  }

  const hello = () => { const h = new Date().getHours(); return h < 5 ? 'Still awake? 🌙' : h < 12 ? 'Good morning ☀️' : h < 17 ? 'Good afternoon 🌤️' : h < 21 ? 'Good evening 🌆' : 'Late-night study mode 🌙'; };

  // ---------- 1. greeting + random question ----------
  function greet(thenDays) {
    clearAll();
    const [q, replies] = ASK();
    const el = bubble(`<div class="bhead"><div class="bface"><img src="img/avatar.webp" alt="" width="72" height="72"></div>
      <div class="bhello"><small>${hello()}</small><h3>Hi ${esc(NAME)} <span class="wave">👋</span></h3></div></div>
      <p class="bq">${esc(q)}</p>
      <div class="breps two">${replies.map((r, i) => `<button class="brep${i ? '' : ' main'}" data-i="${i}">${esc(r[0])}</button>`).join('')}</div>
      <div class="bfoot"><button class="bnext" type="button">Next question ›</button></div>`, (e) => {
      e.querySelector('.bnext').onclick = () => { clearAll(); e.remove(); greet(thenDays); };
      e.querySelectorAll('.brep').forEach((b) => {
        b.onclick = () => {
          clearAll();
          const ans = replies[+b.dataset.i][1];
          if (ans === '__daily') { dismiss(e); location.hash = '#/daily'; return; }
          e.querySelector('.bq').textContent = ans;
          e.querySelector('.bq').classList.add('ans');
          e.querySelector('.breps').remove();
          e.querySelector('.bfoot').remove();
          e.classList.add('answered');
          const label = replies[+b.dataset.i][0];
          const mood = SAD.some((x) => label.indexOf(x) === 0) ? 'sad' : 'happy';
          const face = e.querySelector('.bface');
          face.classList.add('mood', mood);
          face.innerHTML = '<img src="img/' + mood + '.webp" alt="" width="72" height="72">';
          later(() => dismiss(e, thenDays), 3800);
        };
      });
    }, thenDays);
    return el;  // stays open until you close it (x) or pick an answer
  }

  // ---------- 2. days left for a random upcoming exam ----------
  function daysPopup() {
    const E = window.EXAMS || [];
    const t0 = new Date(); t0.setHours(0, 0, 0, 0);
    const left = (ex) => { const [y, m, d] = ex.date.split('-').map(Number); return Math.round((new Date(y, m - 1, d) - t0) / 86400000); };
    const up = E.filter((x) => left(x) >= 0);
    if (!up.length) return;
    let ex = pick(up);
    for (let i = 0; i < 12 && up.length > 1 && ex.id === lastEx; i++) ex = pick(up);
    lastEx = ex.id;
    const d = left(ex);
    const when = d === 0 ? 'is TODAY!' : d === 1 ? 'is tomorrow!' : 'is in ' + d + ' days';
    const date = new Date(ex.date + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
    const hot = d <= 3;
    const el = bubble(`<div class="bhead"><div class="bface"><img src="img/avatar.webp" alt="" width="72" height="72"><span class="bico">${ICON[ex.id] || '📅'}</span></div>
      <div class="bcount"><b>${d === 0 ? '!' : d}</b><span>${d === 0 ? 'TODAY' : d === 1 ? 'day left' : 'days left'}</span></div></div>
      <p class="bq"><b>${esc(ex.name)}</b> ${when}</p>
      <div class="bchips"><span>📅 ${date}</span><span>🕐 ${esc(ex.time)}</span><span>${ex.kind === 'objective' ? '✅ MCQ' : '✍️ Written'} · ${esc(ex.dur)}</span></div>
      <div class="breps"><button class="brep main" id="bgot" type="button">Got it 👍</button></div>
      ${up.length > 1 ? '<div class="bfoot"><button class="bnext" type="button">Another exam ›</button></div>' : ''}`, (e) => {
      const nb = e.querySelector('.bnext');
      if (nb) nb.onclick = () => { clearAll(); e.remove(); daysPopup(); };
      if (hot) e.classList.add('hot');
      e.querySelector('#bgot').onclick = () => { clearAll(); dismiss(e); };
    });
    return el;  // stays open until you close it (x) or use a button
  }

  // leaving the first screen closes it
  addEventListener('hashchange', () => { clearAll(); const x = document.getElementById('buddy'); if (x) x.remove(); });

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
  // only on the first screen (home) when the site opens
  if (/^#?\/?$/.test(location.hash)) setTimeout(sequence, 900);
})();
